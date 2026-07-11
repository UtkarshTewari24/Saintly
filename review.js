/* Daily Review — Spaced-Repetition (SM-2) for AMC 10 mistakes.
   Loaded as an ES module from review.html. Shares localStorage with the
   Practice Arena mistake log (saintly-mistake-log-v1). */

const DATA_URL = 'data/amc-10-problems.json';
const MISTAKE_STORAGE_KEY = 'saintly-mistake-log-v1';
const REVIEW_STORAGE_KEY = 'saintly-review-v1';
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const DAY_MS = 86400000;
const AGAIN_MS = 600000; // ~10 minutes

const els = {
  dueCount: document.getElementById('dueCount'),
  progressLabel: document.getElementById('progressLabel'),
  progressFill: document.getElementById('progressFill'),
  stage: document.getElementById('reviewStage')
};

/* ---------------- storage helpers ---------------- */
function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* quota / private mode */ }
}

function getMistakes() { return loadJSON(MISTAKE_STORAGE_KEY, {}); }
function saveMistakes(m) { saveJSON(MISTAKE_STORAGE_KEY, m); }
function getReviews() { return loadJSON(REVIEW_STORAGE_KEY, {}); }
function saveReviews(r) { saveJSON(REVIEW_STORAGE_KEY, r); }

function isOpenMistake(entry) { return entry && entry.solved !== true; }

/* ---------------- MathJax ---------------- */
function typeset(node) {
  if (!node || !window.MathJax?.typesetPromise) return;
  window.MathJax.typesetClear?.([node]);
  window.MathJax.typesetPromise([node]).catch(() => {});
}

/* ---------------- module state ---------------- */
const problemById = new Map();
let sessionQueue = [];   // array of problemIds to review this session
let sessionIndex = 0;    // pointer into sessionQueue
let reviewedCount = 0;   // how many the user has rated this session

/* ---------------- review-state seeding ---------------- */
function defaultState(now) {
  return {
    ease: 2.5,
    intervalDays: 0,
    reps: 0,
    dueAt: now,
    lapses: 0,
    addedAt: now,
    lastResult: null
  };
}

// Every open mistake with no review state becomes due now.
function refreshReviewStates() {
  const now = Date.now();
  const mistakes = getMistakes();
  const reviews = getReviews();
  let changed = false;
  for (const entry of Object.values(mistakes)) {
    if (!isOpenMistake(entry)) continue;
    if (!reviews[entry.id]) {
      reviews[entry.id] = defaultState(now);
      changed = true;
    }
  }
  if (changed) saveReviews(reviews);
  return reviews;
}

/* ---------------- SM-2 scheduling ---------------- */
// Returns the mutated state. `correct` false forces an Again (lapse) regardless
// of the rating the learner tapped.
function applyRating(state, rating, correct) {
  const now = Date.now();
  const effective = correct ? rating : 'again';

  let { ease, intervalDays, reps, lapses } = state;

  if (effective === 'again') {
    lapses += 1;
    reps = 0;
    intervalDays = 0;
    ease -= 0.2;
    state.dueAt = now + AGAIN_MS;
  } else if (effective === 'hard') {
    intervalDays = Math.max(1, Math.round(intervalDays * 1.2));
    ease -= 0.15;
    state.dueAt = now + intervalDays * DAY_MS;
  } else {
    // Good / Easy share the same base interval formula.
    let base;
    if (reps === 0) base = 1;
    else if (reps === 1) base = 3;
    else base = Math.round(intervalDays * ease);
    base = Math.max(1, base);

    if (effective === 'easy') {
      intervalDays = Math.max(1, Math.round(base * 1.3));
      ease += 0.15;
    } else {
      intervalDays = base;
    }
    reps += 1;
    state.dueAt = now + intervalDays * DAY_MS;
  }

  state.ease = Math.max(1.3, ease);
  state.intervalDays = intervalDays;
  state.reps = reps;
  state.lapses = lapses;
  state.lastResult = effective;
  return state;
}

/* ---------------- rendering ---------------- */
function difficultyClass(difficulty) {
  const d = String(difficulty || '').toLowerCase();
  return d.includes('hard') ? 'review-chip-diff-hard' : '';
}

function renderCurrent() {
  if (sessionIndex >= sessionQueue.length) return renderDone();

  const id = sessionQueue[sessionIndex];
  const problem = problemById.get(id);
  if (!problem) { // problem missing from bank — skip it
    sessionIndex += 1;
    return renderCurrent();
  }

  updateHeader();

  const metaBits = [];
  if (problem.topic) metaBits.push(`<span class="review-chip review-chip-topic">${escapeHtml(problem.topic)}</span>`);
  if (problem.difficulty) metaBits.push(`<span class="review-chip ${difficultyClass(problem.difficulty)}">${escapeHtml(String(problem.difficulty))}</span>`);

  const diagram = problem.diagram_url
    ? `<img class="review-diagram" alt="Problem diagram" src="${escapeHtml(problem.diagram_url)}">`
    : '';

  const choices = problem.choices.map((_, i) => `
    <button class="review-choice" type="button" role="radio" aria-checked="false" data-index="${i}">
      <span class="review-choice-letter">${LETTERS[i]}</span>
      <span class="review-choice-copy"></span>
    </button>`).join('');

  els.stage.innerHTML = `
    <div class="review-card">
      <div class="review-meta">${metaBits.join('')}</div>
      <p class="review-question"></p>
      ${diagram}
      <div class="review-choices" role="radiogroup">${choices}</div>
      <div class="review-reveal" hidden></div>
    </div>`;

  // question text (bare, MathJax typesets $..$ / \(..\))
  els.stage.querySelector('.review-question').textContent = problem.question || '';
  // choices are bare LaTeX — give MathJax delimiters
  els.stage.querySelectorAll('.review-choice-copy').forEach((node, i) => {
    node.textContent = `\\(${problem.choices[i]}\\)`;
  });

  els.stage.querySelectorAll('.review-choice').forEach(btn => {
    btn.addEventListener('click', () => onChoose(problem, Number(btn.dataset.index)));
  });

  typeset(els.stage);
}

function onChoose(problem, index) {
  const correct = index === problem.answer;
  const choiceBtns = [...els.stage.querySelectorAll('.review-choice')];
  choiceBtns.forEach((btn, i) => {
    btn.disabled = true;
    btn.setAttribute('aria-checked', String(i === index));
    if (i === problem.answer) btn.classList.add('is-correct');
    if (i === index && !correct) btn.classList.add('is-wrong');
  });

  const reveal = els.stage.querySelector('.review-reveal');
  reveal.hidden = false;
  reveal.innerHTML = `
    <div class="review-verdict ${correct ? 'correct' : 'wrong'}">
      ${correct ? 'Correct ✦' : `Not quite — the answer is ${LETTERS[problem.answer]}.`}
    </div>
    <div class="review-solution">
      <h4>Solution</h4>
      <div class="review-solution-copy"></div>
    </div>
    <p class="review-rating-prompt">How well did you recall this?</p>
    <div class="review-rating">
      <button class="review-rate-btn review-rate-again" type="button" data-rating="again">
        <strong>Again</strong><small>&lt; 10 min</small></button>
      <button class="review-rate-btn" type="button" data-rating="hard">
        <strong>Hard</strong><small>struggled</small></button>
      <button class="review-rate-btn" type="button" data-rating="good">
        <strong>Good</strong><small>got it</small></button>
      <button class="review-rate-btn review-rate-easy" type="button" data-rating="easy">
        <strong>Easy</strong><small>too simple</small></button>
    </div>`;

  reveal.querySelector('.review-solution-copy').textContent =
    problem.solution || 'No written solution is available for this problem.';

  reveal.querySelectorAll('.review-rate-btn').forEach(btn => {
    btn.addEventListener('click', () => onRate(problem, btn.dataset.rating, correct));
  });

  typeset(reveal);
}

function onRate(problem, rating, correct) {
  const reviews = getReviews();
  const state = reviews[problem.id] || defaultState(Date.now());
  applyRating(state, rating, correct);
  reviews[problem.id] = state;
  saveReviews(reviews);

  /* Reviews count toward the daily streak/goal (progress-core is optional). */
  import('./progress-core.js')
    .then(({ recordActivity }) => recordActivity({ xp: correct ? 10 : 3, problems: 1 }))
    .catch(() => {});

  // Mistake log is authoritative for the open queue.
  // Graduate (mark solved) only on a correct answer that either reached a long
  // interval or was rated Easy. Wrong answers stay open (forced lapse above).
  if (correct) {
    const graduates = state.intervalDays >= 21 || rating === 'easy';
    if (graduates) {
      const mistakes = getMistakes();
      const entry = mistakes[problem.id];
      if (entry) {
        entry.solved = true;
        entry.unlocked = true;
        mistakes[problem.id] = entry;
        saveMistakes(mistakes);
      }
    }
  }

  reviewedCount += 1;
  sessionIndex += 1;
  renderCurrent();
}

function renderDone() {
  updateHeader();

  const reviews = getReviews();
  const now = Date.now();
  const future = Object.values(reviews)
    .map(s => s?.dueAt)
    .filter(t => typeof t === 'number' && t > now);
  const nextDue = future.length ? Math.min(...future) : null;

  const anyReviewed = reviewedCount > 0;
  const emoji = anyReviewed ? '🎉' : '✦';
  const heading = anyReviewed ? 'Review complete!' : 'All caught up';
  const message = anyReviewed
    ? `You reviewed ${reviewedCount} problem${reviewedCount === 1 ? '' : 's'} today. Come back tomorrow to keep them locked in.`
    : 'Nothing is due for review right now. Miss a problem in the Practice Arena and it will resurface here right before you would forget it.';

  const nextDueChip = nextDue
    ? `<div class="review-next-due">Next review ${formatNextDue(nextDue)}</div>`
    : '';

  els.stage.innerHTML = `
    <div class="review-card review-empty">
      <div class="review-empty-emoji">${emoji}</div>
      <h2>${heading}</h2>
      <p>${message}</p>
      ${nextDueChip}
      <div class="review-empty-links">
        <a class="review-link-btn primary" href="amc-10-practice-test.html">Practice Arena</a>
        <a class="review-link-btn" href="study-path.html">Study Path</a>
      </div>
    </div>`;
}

/* ---------------- header / progress ---------------- */
function updateHeader() {
  const total = sessionQueue.length;
  const remaining = Math.max(0, total - reviewedCount);
  if (els.dueCount) els.dueCount.textContent = String(remaining);
  if (els.progressLabel) els.progressLabel.textContent = `${reviewedCount} of ${total}`;
  if (els.progressFill) {
    const pct = total === 0 ? 100 : Math.round((reviewedCount / total) * 100);
    els.progressFill.style.width = `${pct}%`;
  }
}

/* ---------------- utils ---------------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function formatNextDue(ms) {
  const diff = ms - Date.now();
  if (diff <= 0) return 'now';
  const mins = Math.round(diff / 60000);
  if (mins < 60) return `in ${mins} min`;
  const hours = Math.round(diff / 3600000);
  if (hours < 24) return `in ${hours} hour${hours === 1 ? '' : 's'}`;
  const days = Math.round(diff / DAY_MS);
  return `in ${days} day${days === 1 ? '' : 's'}`;
}

/* ---------------- boot ---------------- */
async function init() {
  let problems = [];
  try {
    const res = await fetch(DATA_URL);
    problems = await res.json();
  } catch {
    els.stage.innerHTML = `
      <div class="review-card review-loading">
        <p>Couldn't load the problem bank. Please refresh to try again.</p>
      </div>`;
    return;
  }

  problemById.clear();
  for (const p of problems) problemById.set(p.id, p);

  const reviews = refreshReviewStates();
  const mistakes = getMistakes();
  const now = Date.now();

  // Due queue: review states that are due, still open in the mistake log, and
  // present in the bank. Oldest-due first.
  sessionQueue = Object.keys(reviews)
    .filter(id => {
      const st = reviews[id];
      if (!st || typeof st.dueAt !== 'number' || st.dueAt > now) return false;
      if (!problemById.has(id)) return false;
      return isOpenMistake(mistakes[id]);
    })
    .sort((a, b) => reviews[a].dueAt - reviews[b].dueAt);

  sessionIndex = 0;
  reviewedCount = 0;

  renderCurrent(); // renders first problem, or the caught-up card if empty
}

init();
