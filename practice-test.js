// Saintly Practice Arena
// Full past competitions + adaptive topic trainer + mistake log + AI coach.

import { buildHaloKnowledgePrompt } from './halo-knowledge.js';

const DATA_URL = 'data/amc-10-problems.json';
const TEST_DURATION_SECONDS = 75 * 60;
const COMPLETION_STORAGE_KEY = 'saintly-amc10-completions-v1';
const MISTAKE_STORAGE_KEY = 'saintly-mistake-log-v1';
const TRAINER_STORAGE_KEY = 'saintly-trainer-v1';
const COACH_KEY_STORAGE_KEY = 'saintly-anthropic-api-key';
const WEEKLY_REPORT_STORAGE_KEY = 'saintly-weekly-report-v1';
const COACH_MODEL = 'claude-opus-4-8';
const MISTAKE_ATTEMPTS_TO_UNLOCK = 3;
const BASE_RATING = 1200;
const DIFFICULTY_RATING = { easy: 1000, medium: 1250, hard: 1500 };

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}), { once: true });
}

/* ================= theme (same storage key as the rest of the site) ================= */
(function initTheme() {
  const toggle = document.getElementById('brightness');
  const apply = mode => {
    document.documentElement.style.colorScheme = mode;
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.documentElement.classList.toggle('light', mode === 'light');
    if (toggle) toggle.textContent = mode === 'dark' ? 'sunny' : 'bedtime';
    localStorage.setItem('colorMode', mode);
  };
  apply(localStorage.getItem('colorMode') === 'dark' ? 'dark' : 'light');
  toggle?.addEventListener('click', () => {
    apply(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  });
})();

/* ================= element registry ================= */
const $ = id => document.getElementById(id);

const screens = {
  home: $('home-screen'),
  directions: $('directions-screen'),
  competition: $('competition-screen'),
  results: $('results-screen'),
  trainer: $('trainer-screen'),
  mistakeReview: $('mistake-review-screen')
};

const els = {
  // tabs
  modeTabs: [...document.querySelectorAll('.mode-tab')],
  panels: { tests: $('panel-tests'), trainer: $('panel-trainer'), mistakes: $('panel-mistakes') },
  mistakeCountPill: $('mistake-count-pill'),
  // picker
  grid: $('competition-grid'),
  yearFilter: $('year-filter'),
  completionSummary: $('completion-summary'),
  // directions
  directionsLabel: $('directions-competition-label'),
  directionsGoodLuckLabel: $('directions-good-luck-label'),
  changeCompetition: $('change-competition'),
  startCompetition: $('start-competition'),
  // competition
  activeLabel: $('active-competition-label'),
  showDirections: $('show-directions'),
  exitCompetition: $('exit-competition'),
  questionHeading: $('question-heading'),
  questionNumber: $('question-number'),
  questionCopy: $('question-copy'),
  questionDiagram: $('question-diagram'),
  answerOptions: $('answer-options'),
  answerReview: $('answer-review'),
  solutionCopy: $('solution-copy'),
  solutionGate: $('solution-gate'),
  gateGoMistakes: $('gate-go-mistakes'),
  timer: $('competition-timer'),
  previous: $('previous-question'),
  next: $('next-question'),
  openReview: $('open-review'),
  closeReview: $('close-review'),
  reviewPanel: $('review-panel'),
  reviewGrid: $('review-grid'),
  answeredCount: $('answered-count'),
  submitCompetition: $('submit-competition'),
  submitDialog: $('submit-dialog'),
  submitDialogCopy: $('submit-dialog-copy'),
  questionPaper: $('question-paper'),
  highlighterTool: $('highlighter-tool'),
  lineReaderTool: $('line-reader-tool'),
  lineReader: $('line-reader'),
  // results
  finalScore: $('final-score'),
  correctCount: $('correct-count'),
  incorrectCount: $('incorrect-count'),
  blankCount: $('blank-count'),
  completionMessage: $('completion-message'),
  reviewResults: $('review-results'),
  resultsToMistakes: $('results-to-mistakes'),
  chooseAnother: $('choose-another'),
  // trainer
  topicGrid: $('topic-grid'),
  trainerTopicLabel: $('trainer-topic-label'),
  trainerStreak: $('trainer-streak'),
  trainerRating: $('trainer-rating'),
  trainerEnd: $('trainer-end'),
  trainerSource: $('trainer-source'),
  trainerDiff: $('trainer-diff'),
  trainerCopy: $('trainer-question-copy'),
  trainerDiagram: $('trainer-diagram'),
  trainerOptions: $('trainer-options'),
  trainerFeedback: $('trainer-feedback'),
  trainerSolution: $('trainer-solution'),
  trainerSolutionCopy: $('trainer-solution-copy'),
  trainerSkip: $('trainer-skip'),
  trainerShowSolution: $('trainer-show-solution'),
  trainerNext: $('trainer-next'),
  trainerPaper: $('trainer-paper'),
  // mistakes
  mistakeList: $('mistake-list'),
  mistakeEmpty: $('mistake-empty'),
  generateWeeklyReport: $('generate-weekly-report'),
  weeklyReportBody: $('weekly-report-body'),
  mrMeta: $('mr-meta'),
  mrSource: $('mr-source'),
  mrAttemptLabel: $('mr-attempt-label'),
  mrCopy: $('mr-question-copy'),
  mrDiagram: $('mr-diagram'),
  mrInput: $('mr-input'),
  mrSubmit: $('mr-submit'),
  mrFeedback: $('mr-feedback'),
  mrReveal: $('mr-reveal'),
  mrNext: $('mr-next'),
  mrSolution: $('mr-solution'),
  mrSolutionCopy: $('mr-solution-copy'),
  mrAnswerLine: $('mr-answer-line'),
  mrBack: $('mr-back'),
  mrPaper: $('mr-paper'),
  frqZone: $('frq-zone'),
  // coach
  coachFab: $('coach-fab'),
  coachDrawer: $('coach-drawer'),
  coachClose: $('coach-close'),
  coachSettingsBtn: $('coach-settings-btn'),
  coachMessages: $('coach-messages'),
  coachComposer: $('coach-composer'),
  coachInput: $('coach-input'),
  coachSend: $('coach-send'),
  coachContextLabel: $('coach-context-label'),
  coachKeywall: $('coach-keywall'),
  coachKeywallBtn: $('coach-keywall-btn'),
  coachKeyDialog: $('coach-key-dialog'),
  coachKeyInput: $('coach-key-input')
};

/* ================= shared state ================= */
let problems = [];
let problemById = new Map();
let competitions = [];
let topics = [];

let selectedCompetition = null;
let answers = [];
let currentQuestionIndex = 0;
let remainingSeconds = TEST_DURATION_SECONDS;
let timerInterval = null;
let competitionStarted = false;
let competitionFinished = false;
let reviewMode = false;
let highlighterEnabled = false;
let lineReaderEnabled = false;

let trainerTopic = null;      // topic name or 'ALL'
let trainerProblem = null;
let trainerAnswered = false;

let activeMistakeId = null;

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/* ================= tiny utils ================= */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('is-active'));
  screens[name].classList.add('is-active');
  document.body.classList.toggle('in-competition', name === 'competition' && competitionStarted && !competitionFinished && !reviewMode);
  window.scrollTo({ top: 0, behavior: 'instant' });
  coachSyncContext();
}

function typeset(node) {
  if (!window.MathJax?.typesetPromise) return;
  window.MathJax.typesetClear?.([node]);
  window.MathJax.typesetPromise([node]).catch(() => {});
}

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveJSON(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

function formatScore(score) { return Number.isInteger(score) ? String(score) : score.toFixed(1); }

function contestName(contest) {
  return contest.replace(/^AMC10/, 'AMC 10').replace(/(A|B) Fall$/, '$1 — Fall');
}
function competitionLabel(c) {
  const name = contestName(c.contest);
  return name.includes('Fall') ? `${name} ${c.year}` : `${name} — ${c.year}`;
}
function problemLabel(p) {
  return `${contestName(p.contest)} ${p.year} · Problem ${p.number}`;
}

/* ================= data loading ================= */
async function loadData() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error(`Problem data returned ${response.status}`);
    problems = await response.json();
    problemById = new Map(problems.map(p => [p.id, p]));

    // competitions
    const grouped = new Map();
    for (const p of problems) {
      const key = `${p.year}|${p.contest}`;
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(p);
    }
    competitions = [...grouped.entries()].map(([key, questions]) => ({
      key,
      year: questions[0].year,
      contest: questions[0].contest,
      questions: questions.sort((a, b) => a.number - b.number)
    })).filter(c => c.questions.length === 25 && c.questions.every(q => Array.isArray(q.choices) && q.choices.length === 5))
      .sort((a, b) => b.year - a.year || a.contest.localeCompare(b.contest));

    // topics (the new data has 8 section types)
    const counts = new Map();
    for (const p of problems) counts.set(p.topic, (counts.get(p.topic) || 0) + 1);
    topics = [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([name, count]) => ({ name, count }));

    populateYearFilter();
    renderCompetitionGrid();
    renderTopicGrid();
    renderMistakeList();
  } catch (error) {
    console.error(error);
    els.grid.innerHTML = '<div class="portal-loading">We could not load the problem archive. Refresh the page to try again.</div>';
    els.topicGrid.innerHTML = '<div class="portal-loading">We could not load the problem archive. Refresh the page to try again.</div>';
  }
}

/* ================= mode tabs ================= */
function setMode(mode) {
  els.modeTabs.forEach(tab => tab.classList.toggle('is-active', tab.dataset.mode === mode));
  Object.entries(els.panels).forEach(([name, panel]) => panel.classList.toggle('is-active', name === mode));
  if (mode === 'mistakes') renderMistakeList();
  if (mode === 'trainer') renderTopicGrid();
  if (history.replaceState) history.replaceState(null, '', `#${mode}`);
  coachSyncContext();
}
els.modeTabs.forEach(tab => tab.addEventListener('click', () => setMode(tab.dataset.mode)));

/* ================= full competitions ================= */
function loadCompletions() { return loadJSON(COMPLETION_STORAGE_KEY, {}); }
function saveCompletion(score) {
  const completions = loadCompletions();
  completions[selectedCompetition.key] = { completedAt: new Date().toISOString(), score };
  saveJSON(COMPLETION_STORAGE_KEY, completions);
}

function populateYearFilter() {
  const years = [...new Set(competitions.map(c => c.year))].sort((a, b) => b - a);
  els.yearFilter.insertAdjacentHTML('beforeend', years.map(y => `<option value="${y}">${y}</option>`).join(''));
}

function renderCompetitionGrid() {
  const completions = loadCompletions();
  const selectedYear = els.yearFilter.value;
  const visible = competitions.filter(c => selectedYear === 'all' || String(c.year) === selectedYear);

  els.grid.innerHTML = visible.map(c => {
    const done = completions[c.key];
    const status = done ? `Completed · ${formatScore(done.score)} / 150` : '25 questions · 75 minutes';
    return `
      <button class="competition-card${done ? ' is-complete' : ''}" type="button" data-competition-key="${c.key}">
        ${done ? '<span class="completion-check" aria-label="Completed">✓</span>' : ''}
        <span class="competition-card-year">${c.year}</span>
        <span class="competition-card-name">${contestName(c.contest)}</span>
        <span class="competition-card-status">${status}</span>
      </button>`;
  }).join('');

  const completedCount = competitions.filter(c => completions[c.key]).length;
  els.completionSummary.textContent = `${completedCount} of ${competitions.length} competitions completed`;
}

function selectCompetition(key) {
  selectedCompetition = competitions.find(c => c.key === key);
  if (!selectedCompetition) return;
  const label = competitionLabel(selectedCompetition);
  els.directionsLabel.textContent = label;
  els.directionsGoodLuckLabel.textContent = label;
  els.activeLabel.textContent = label;
  els.startCompetition.textContent = 'Start competition';
  showScreen('directions');
}

function startCompetition() {
  if (!selectedCompetition) return;
  if (competitionStarted && !competitionFinished) { showScreen('competition'); return; }

  answers = Array(25).fill(null);
  currentQuestionIndex = 0;
  remainingSeconds = TEST_DURATION_SECONDS;
  competitionStarted = true;
  competitionFinished = false;
  reviewMode = false;
  els.exitCompetition.textContent = 'Exit';
  els.submitCompetition.hidden = false;
  els.startCompetition.textContent = 'Return to competition';
  hideReviewPanel();
  renderTimer();
  renderQuestion();
  startTimer();
  showScreen('competition');
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = window.setInterval(() => {
    remainingSeconds -= 1;
    renderTimer();
    if (remainingSeconds <= 0) finishCompetition(true);
  }, 1000);
}

function renderTimer() {
  const m = Math.floor(Math.max(0, remainingSeconds) / 60);
  const s = Math.max(0, remainingSeconds) % 60;
  els.timer.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderChoices(container, question, { selected = null, review = false, correct = null } = {}) {
  container.innerHTML = question.choices.map((choice, index) => {
    const cls = [
      'answer-choice',
      selected === index ? 'is-selected' : '',
      review && correct === index ? 'is-correct' : '',
      review && selected === index && correct !== index ? 'is-incorrect' : ''
    ].filter(Boolean).join(' ');
    return `
      <button class="${cls}" type="button" role="radio" aria-checked="${selected === index}" data-answer-index="${index}" ${review ? 'disabled' : ''}>
        <span class="answer-choice-letter">${LETTERS[index]}</span>
        <span class="answer-choice-copy"></span>
      </button>`;
  }).join('');
  [...container.querySelectorAll('.answer-choice-copy')].forEach((node, index) => {
    node.textContent = `\\(${question.choices[index]}\\)`; // choices are bare LaTeX; give MathJax delimiters
  });
}

function renderQuestion() {
  const question = selectedCompetition.questions[currentQuestionIndex];
  const selected = answers[currentQuestionIndex];

  els.questionHeading.textContent = `Question ${question.number}`;
  els.questionNumber.textContent = `Question ${question.number} of 25`;
  els.questionCopy.textContent = question.question;
  els.previous.disabled = currentQuestionIndex === 0;
  els.next.disabled = currentQuestionIndex === 24;

  if (question.diagram_url) {
    els.questionDiagram.src = question.diagram_url;
    els.questionDiagram.hidden = false;
  } else {
    els.questionDiagram.removeAttribute('src');
    els.questionDiagram.hidden = true;
  }

  renderChoices(els.answerOptions, question, { selected, review: reviewMode, correct: reviewMode ? question.answer : null });

  els.answerReview.hidden = true;
  els.solutionGate.hidden = true;
  if (reviewMode) {
    const missed = selected !== null && selected !== question.answer;
    const entry = getMistakes()[question.id];
    const stillLocked = missed && entry && !entry.unlocked && !entry.solved;
    if (stillLocked) {
      els.solutionGate.hidden = false;
    } else {
      els.solutionCopy.textContent = question.solution || 'No written solution is available for this problem.';
      els.answerReview.hidden = false;
    }
  }

  updateAnsweredCount();
  renderReviewGrid();
  typeset(els.questionPaper);
  coachSyncContext();
}

function chooseAnswer(index) {
  if (reviewMode || competitionFinished) return;
  answers[currentQuestionIndex] = index;
  renderQuestion();
}

function moveQuestion(offset) {
  currentQuestionIndex = Math.min(24, Math.max(0, currentQuestionIndex + offset));
  hideReviewPanel();
  renderQuestion();
}

function updateAnsweredCount() {
  els.answeredCount.textContent = `${answers.filter(a => a !== null).length}/25`;
}

function renderReviewGrid() {
  els.reviewGrid.innerHTML = selectedCompetition.questions.map((q, index) => {
    const answered = answers[index] !== null;
    const current = currentQuestionIndex === index;
    return `<button class="review-question${answered ? ' is-answered' : ''}${current ? ' is-current' : ''}" type="button" data-question-index="${index}">${q.number}</button>`;
  }).join('');
}

function showReviewPanel() { renderReviewGrid(); els.reviewPanel.hidden = false; }
function hideReviewPanel() { els.reviewPanel.hidden = true; }

function requestSubmission() {
  const blanks = answers.filter(a => a === null).length;
  els.submitDialogCopy.textContent = blanks
    ? `You have ${blanks} unanswered question${blanks === 1 ? '' : 's'}. Blank answers receive 1.5 points.`
    : 'All 25 questions have an answer. Your submission will be final.';
  els.submitDialog.showModal();
}

function finishCompetition(timeExpired = false) {
  if (competitionFinished) return;
  clearInterval(timerInterval);
  timerInterval = null;
  competitionFinished = true;
  document.body.classList.remove('in-competition');

  let correct = 0, incorrect = 0, blank = 0;
  selectedCompetition.questions.forEach((question, index) => {
    if (answers[index] === null) {
      blank += 1;
      addMistake(question, 'test', null);   /* blanks need review just like misses */
    } else if (answers[index] === question.answer) correct += 1;
    else {
      incorrect += 1;
      addMistake(question, 'test', answers[index]);
    }
  });

  const score = correct * 6 + blank * 1.5;
  saveCompletion(score);

  els.finalScore.textContent = formatScore(score);
  els.correctCount.textContent = correct;
  els.incorrectCount.textContent = incorrect;
  els.blankCount.textContent = blank;
  els.completionMessage.textContent = (timeExpired ? 'Time expired. ' : '') +
    `${competitionLabel(selectedCompetition)} is saved on this device.` +
    (incorrect + blank
      ? ` Your ${incorrect} miss${incorrect === 1 ? '' : 'es'} and ${blank} blank${blank === 1 ? '' : 's'} went to the mistake log — solutions unlock there once you re-solve them.`
      : ' Flawless — nothing missed, nothing skipped!');
  refreshMistakePill();
  showScreen('results');
  renderCompetitionGrid();
}

function enterAnswerReview() {
  reviewMode = true;
  currentQuestionIndex = 0;
  els.exitCompetition.textContent = 'Results';
  els.submitCompetition.hidden = true;
  hideReviewPanel();
  renderQuestion();
  showScreen('competition');
}

function returnToPicker(mode = 'tests') {
  clearInterval(timerInterval);
  timerInterval = null;
  competitionStarted = false;
  competitionFinished = false;
  reviewMode = false;
  selectedCompetition = null;
  document.body.classList.remove('in-competition');
  disableReadingTools();
  renderCompetitionGrid();
  showScreen('home');
  setMode(mode);
}

function abandonCompetition() {
  if (reviewMode) { showScreen('results'); return; }
  if (!competitionStarted || window.confirm('Leave this competition? Your current answers will not be saved.')) returnToPicker();
}

/* ---------- reading tools ---------- */
function toggleHighlighter() {
  highlighterEnabled = !highlighterEnabled;
  els.highlighterTool.setAttribute('aria-pressed', String(highlighterEnabled));
  document.body.classList.toggle('highlighter-active', highlighterEnabled);
}
function applyHighlightFromSelection() {
  if (!highlighterEnabled) return;
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;
  if (!els.questionPaper.contains(container)) return;
  try {
    const mark = document.createElement('mark');
    mark.className = 'practice-highlight';
    range.surroundContents(mark);
    selection.removeAllRanges();
  } catch { /* selections crossing MathJax nodes are left unchanged */ }
}
function toggleLineReader() {
  lineReaderEnabled = !lineReaderEnabled;
  els.lineReader.hidden = !lineReaderEnabled;
  els.lineReaderTool.setAttribute('aria-pressed', String(lineReaderEnabled));
}
function moveLineReader(clientY) {
  if (!lineReaderEnabled) return;
  const y = Math.max(28, Math.min(window.innerHeight - 28, clientY));
  els.lineReader.style.top = `${y}px`;
}
function disableReadingTools() {
  highlighterEnabled = false;
  lineReaderEnabled = false;
  els.highlighterTool.setAttribute('aria-pressed', 'false');
  els.lineReaderTool.setAttribute('aria-pressed', 'false');
  els.lineReader.hidden = true;
  document.body.classList.remove('highlighter-active');
}

/* ================= adaptive topic trainer ================= */
function loadTrainer() { return loadJSON(TRAINER_STORAGE_KEY, { topics: {}, seen: [] }); }
function saveTrainer(state) { saveJSON(TRAINER_STORAGE_KEY, state); }
function topicState(state, topic) {
  if (!state.topics[topic]) state.topics[topic] = { rating: BASE_RATING, attempts: 0, correct: 0, streak: 0 };
  return state.topics[topic];
}
function masteryPercent(rating) {
  return Math.max(3, Math.min(100, Math.round(((rating - 800) / 900) * 100)));
}

function renderTopicGrid() {
  if (!topics.length) return;
  const state = loadTrainer();
  const cards = topics.map(t => {
    const ts = topicState(state, t.name);
    const acc = ts.attempts ? Math.round((ts.correct / ts.attempts) * 100) : null;
    return `
      <button class="topic-card" type="button" data-topic="${t.name}">
        <span class="topic-card-name">${t.name}</span>
        <span class="topic-card-count">${t.count} problems${acc !== null ? ` · ${acc}% correct` : ''}</span>
        <span class="topic-card-mastery">
          <span class="mastery-track"><span class="mastery-fill" style="width:${masteryPercent(ts.rating)}%"></span></span>
        </span>
        <span class="topic-card-rating"><span>Mastery</span><span>${Math.round(ts.rating)}</span></span>
      </button>`;
  });
  const all = topicState(state, 'ALL');
  cards.push(`
    <button class="topic-card topic-card--all" type="button" data-topic="ALL">
      <span class="topic-card-name">All sections</span>
      <span class="topic-card-count">${problems.length} problems · mixed review</span>
      <span class="topic-card-mastery">
        <span class="mastery-track"><span class="mastery-fill" style="width:${masteryPercent(all.rating)}%"></span></span>
      </span>
      <span class="topic-card-rating"><span>Mastery</span><span>${Math.round(all.rating)}</span></span>
    </button>`);
  els.topicGrid.innerHTML = cards.join('');
}

function startTrainer(topic) {
  trainerTopic = topic;
  els.trainerTopicLabel.textContent = topic === 'ALL' ? 'All sections' : topic;
  updateTrainerStats();
  nextTrainerProblem();
  showScreen('trainer');
}

function updateTrainerStats() {
  const ts = topicState(loadTrainer(), trainerTopic);
  els.trainerStreak.textContent = ts.streak;
  els.trainerRating.textContent = Math.round(ts.rating);
}

function pickTrainerProblem() {
  const state = loadTrainer();
  const ts = topicState(state, trainerTopic);
  const recent = new Set(state.seen.slice(-40));
  let pool = problems.filter(p =>
    Array.isArray(p.choices) && p.choices.length === 5 &&
    (trainerTopic === 'ALL' || p.topic === trainerTopic)
  );
  const fresh = pool.filter(p => !recent.has(p.id));
  if (fresh.length > 5) pool = fresh;
  pool.sort((a, b) =>
    Math.abs((DIFFICULTY_RATING[a.difficulty] ?? BASE_RATING) - ts.rating) -
    Math.abs((DIFFICULTY_RATING[b.difficulty] ?? BASE_RATING) - ts.rating)
  );
  const bucket = pool.slice(0, Math.min(10, pool.length));
  return bucket[Math.floor(Math.random() * bucket.length)] ?? null;
}

function nextTrainerProblem() {
  renderTrainerProblem(pickTrainerProblem());
}

function renderTrainerProblem(problem) {
  trainerProblem = problem;
  trainerAnswered = false;
  if (!trainerProblem) {
    els.trainerCopy.textContent = 'No problems available for this section yet.';
    els.trainerOptions.innerHTML = '';
    return;
  }
  const state = loadTrainer();
  state.seen.push(trainerProblem.id);
  if (state.seen.length > 200) state.seen = state.seen.slice(-120);
  saveTrainer(state);

  els.trainerSource.textContent = problemLabel(trainerProblem);
  els.trainerDiff.textContent = trainerProblem.difficulty;
  els.trainerCopy.textContent = trainerProblem.question;
  if (trainerProblem.diagram_url) {
    els.trainerDiagram.src = trainerProblem.diagram_url;
    els.trainerDiagram.hidden = false;
  } else {
    els.trainerDiagram.removeAttribute('src');
    els.trainerDiagram.hidden = true;
  }
  renderChoices(els.trainerOptions, trainerProblem);
  els.trainerFeedback.hidden = true;
  els.trainerFeedback.className = 'trainer-feedback';
  els.trainerSolution.hidden = true;
  els.trainerShowSolution.hidden = true;
  els.trainerNext.hidden = true;
  els.trainerSkip.hidden = false;
  typeset(els.trainerPaper);
  coachSyncContext();
}

function startTargetProblem(id) {
  const problem = problemById.get(id);
  if (!problem) return;
  trainerTopic = problem.topic;
  els.trainerTopicLabel.textContent = problem.topic;
  updateTrainerStats();
  renderTrainerProblem(problem);
  showScreen('trainer');
}

function answerTrainer(index) {
  if (trainerAnswered || !trainerProblem) return;
  trainerAnswered = true;

  const state = loadTrainer();
  const ts = topicState(state, trainerTopic);
  const qr = DIFFICULTY_RATING[trainerProblem.difficulty] ?? BASE_RATING;
  const expected = 1 / (1 + Math.pow(10, (qr - ts.rating) / 400));
  const isCorrect = index === trainerProblem.answer;
  const delta = Math.round(40 * ((isCorrect ? 1 : 0) - expected));
  ts.rating = Math.max(600, ts.rating + delta);
  ts.attempts += 1;
  if (isCorrect) { ts.correct += 1; ts.streak += 1; } else { ts.streak = 0; }
  saveTrainer(state);
  updateTrainerStats();

  /* Trainer attempts count toward the daily streak/goal (progress-core is optional). */
  import('./progress-core.js')
    .then(({ recordActivity }) => recordActivity({ xp: isCorrect ? 10 : 3, problems: 1 }))
    .catch(() => {});

  const buttons = [...els.trainerOptions.querySelectorAll('.answer-choice')];
  buttons.forEach(b => { b.disabled = true; });
  const picked = buttons[index];

  if (isCorrect) {
    picked.classList.add('is-correct');
    els.trainerFeedback.textContent = `Correct! ${delta >= 0 ? '+' : ''}${delta} mastery.`;
    els.trainerFeedback.classList.add('is-correct');
    els.trainerShowSolution.hidden = false;
  } else {
    // Deliberately do NOT reveal the correct choice — the problem goes to the
    // mistake log, where the solution unlocks only after real re-attempts.
    picked.classList.add('is-incorrect');
    addMistake(trainerProblem, 'trainer', index);
    refreshMistakePill();
    els.trainerFeedback.textContent = `Not quite (${delta} mastery). No spoilers — this one just landed in your mistake log. Re-solve it there, free response, to unlock the solution.`;
    els.trainerFeedback.classList.add('is-wrong');
  }
  els.trainerFeedback.hidden = false;
  els.trainerNext.hidden = false;
  els.trainerSkip.hidden = true;
  coachSyncContext();
}

/* ================= mistake log ================= */
function getMistakes() { return loadJSON(MISTAKE_STORAGE_KEY, {}); }
function saveMistakes(m) { saveJSON(MISTAKE_STORAGE_KEY, m); refreshMistakePill(); }

function addMistake(problem, source, wrongIndex) {
  const mistakes = getMistakes();
  const existing = mistakes[problem.id];
  mistakes[problem.id] = {
    id: problem.id,
    source,
    wrongLetter: LETTERS[wrongIndex] ?? null,
    attempts: 0,
    solved: false,
    unlocked: false,
    addedAt: existing?.addedAt ?? Date.now(),
    missCount: (existing?.missCount ?? 0) + 1
  };
  saveMistakes(mistakes);
}

function refreshMistakePill() {
  const open = Object.values(getMistakes()).filter(m => !m.solved).length;
  els.mistakeCountPill.hidden = open === 0;
  els.mistakeCountPill.textContent = open;
}

function renderMistakeList() {
  const mistakes = Object.values(getMistakes()).sort((a, b) => (a.solved - b.solved) || b.addedAt - a.addedAt);
  els.mistakeEmpty.hidden = mistakes.length > 0;
  els.mistakeList.innerHTML = mistakes.map(m => {
    const p = problemById.get(m.id);
    if (!p) return '';
    const pips = Array.from({ length: MISTAKE_ATTEMPTS_TO_UNLOCK }, (_, i) =>
      `<span class="mistake-pip${i < Math.min(m.attempts, MISTAKE_ATTEMPTS_TO_UNLOCK) ? ' is-used' : ''}"></span>`).join('');
    const status = m.solved ? 'Conquered ✦' : m.unlocked ? 'Solution revealed' : `${m.attempts}/${MISTAKE_ATTEMPTS_TO_UNLOCK} attempts`;
    return `
      <button class="mistake-card" type="button" data-mistake-id="${m.id}">
        <span class="mistake-card-main">
          <span class="mistake-card-title">${problemLabel(p)}</span>
          <span class="mistake-card-sub">${p.topic} · ${p.difficulty} · missed ${m.missCount > 1 ? m.missCount + ' times' : 'once'} (${m.source === 'test' ? 'practice test' : 'trainer'})</span>
        </span>
        <span class="mistake-card-side">
          <span class="mistake-pips">${pips}</span>
          <span class="mistake-status${m.solved ? ' is-conquered' : ''}">${status}</span>
        </span>
      </button>`;
  }).join('');
  refreshMistakePill();
}

function weeklyCoachPlan() {
  const trainer = loadTrainer();
  const mistakes = Object.values(getMistakes());
  const openMistakes = mistakes.filter(m => !m.solved && problemById.has(m.id));
  const previous = loadJSON(WEEKLY_REPORT_STORAGE_KEY, null);
  const topicSignals = topics.map(({ name }) => {
    const ts = topicState(trainer, name);
    const misses = openMistakes.filter(m => problemById.get(m.id)?.topic === name);
    const repeatMisses = misses.reduce((sum, m) => sum + Math.max(0, m.missCount - 1), 0);
    const score = (BASE_RATING - ts.rating) + misses.length * 90 + repeatMisses * 55 + (ts.attempts < 5 ? 20 : 0);
    return { name, ts, misses, score, previousRating: previous?.ratings?.[name] };
  }).sort((a, b) => b.score - a.score);

  const focus = topicSignals[0];
  const secondary = topicSignals[1];
  const picked = [];
  const add = (problem, reason, kind) => {
    if (!problem || picked.some(item => item.problem.id === problem.id)) return;
    picked.push({ problem, reason, kind });
  };

  [...openMistakes]
    .sort((a, b) => (b.missCount - a.missCount) || (b.addedAt - a.addedAt))
    .forEach(m => {
      const p = problemById.get(m.id);
      if (picked.length < 3 && (p.topic === focus.name || p.topic === secondary?.name)) add(p, `Rework this ${p.topic.toLowerCase()} miss`, 'mistake');
    });

  const recent = new Set(trainer.seen.slice(-80));
  const focusNames = new Set([focus.name, secondary?.name]);
  const candidates = problems.filter(p => Array.isArray(p.choices) && p.choices.length === 5 && focusNames.has(p.topic) && !recent.has(p.id) && !picked.some(x => x.problem.id === p.id));
  candidates.sort((a, b) => {
    const aState = topicState(trainer, a.topic);
    const bState = topicState(trainer, b.topic);
    return Math.abs((DIFFICULTY_RATING[a.difficulty] ?? BASE_RATING) - aState.rating) - Math.abs((DIFFICULTY_RATING[b.difficulty] ?? BASE_RATING) - bState.rating);
  });
  candidates.forEach(p => {
    if (picked.length < 5) add(p, `${p.topic} at your current level`, 'trainer');
  });
  problems.filter(p => Array.isArray(p.choices) && p.choices.length === 5).forEach(p => {
    if (picked.length < 5) add(p, 'Mixed-review checkpoint', 'trainer');
  });

  const delta = Number.isFinite(focus.previousRating) ? Math.round(focus.ts.rating - focus.previousRating) : null;
  const trend = delta === null ? '' : Math.abs(delta) < 20 ? ' It has held steady since your last report.' : ` It is ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} points since your last report.`;
  saveJSON(WEEKLY_REPORT_STORAGE_KEY, {
    generatedAt: Date.now(),
    ratings: Object.fromEntries(topicSignals.map(s => [s.name, s.ts.rating]))
  });
  return { focus, secondary, picked, trend, openCount: openMistakes.length };
}

function renderWeeklyCoachReport() {
  const report = weeklyCoachPlan();
  const { focus, secondary } = report;
  const accuracy = focus.ts.attempts ? `${Math.round((focus.ts.correct / focus.ts.attempts) * 100)}% accuracy` : 'not enough attempts yet';
  const missCopy = focus.misses.length ? `${focus.misses.length} open ${focus.misses.length === 1 ? 'mistake' : 'mistakes'}` : 'no open mistakes';
  els.weeklyReportBody.innerHTML = `
    <p class="weekly-report-summary"><strong>${focus.name} is this week's priority.</strong> Your mastery is ${Math.round(focus.ts.rating)} (${accuracy}) with ${missCopy}.${report.trend} ${secondary ? `${secondary.name} is your secondary focus.` : ''}</p>
    <ol class="weekly-plan-list">
      ${report.picked.map((item, index) => `<li><button class="weekly-plan-item" type="button" data-plan-id="${item.problem.id}" data-plan-kind="${item.kind}">
        <span class="weekly-plan-number">${index + 1}</span>
        <span class="weekly-plan-copy"><strong>${problemLabel(item.problem)}</strong><small>${item.reason} · ${item.problem.difficulty}</small></span>
        <span class="weekly-plan-action">${item.kind === 'mistake' ? 'Re-solve →' : 'Start →'}</span>
      </button></li>`).join('')}
    </ol>
    <p class="weekly-report-note">Aim for one problem each weekday. Generate again next week to measure your rating trend and refresh the set.</p>`;
  els.weeklyReportBody.hidden = false;
  els.generateWeeklyReport.textContent = 'Refresh my plan';
}

function openMistake(id) {
  const entry = getMistakes()[id];
  const p = problemById.get(id);
  if (!entry || !p) return;
  activeMistakeId = id;

  els.mrMeta.textContent = 'Mistake review';
  els.mrSource.textContent = `${problemLabel(p)} · ${p.topic}`;
  els.mrCopy.textContent = p.question;
  if (p.diagram_url) { els.mrDiagram.src = p.diagram_url; els.mrDiagram.hidden = false; }
  else { els.mrDiagram.removeAttribute('src'); els.mrDiagram.hidden = true; }

  els.mrInput.value = '';
  els.mrFeedback.textContent = '';
  els.mrFeedback.className = 'frq-feedback';
  els.mrNext.hidden = true;
  renderMistakeState(entry, p);
  typeset(els.mrPaper);
  showScreen('mistakeReview');
}

function renderMistakeState(entry, p) {
  const remaining = Math.max(0, MISTAKE_ATTEMPTS_TO_UNLOCK - entry.attempts);
  els.mrAttemptLabel.textContent = entry.solved
    ? 'Conquered ✦'
    : entry.unlocked
      ? 'Solution revealed'
      : `Attempts: ${entry.attempts} · ${remaining} more before the solution can be revealed`;
  els.mrReveal.hidden = !(entry.attempts >= MISTAKE_ATTEMPTS_TO_UNLOCK && !entry.unlocked && !entry.solved);
  const showSolution = entry.unlocked || entry.solved;
  els.mrSolution.hidden = !showSolution;
  if (showSolution) {
    els.mrAnswerLine.textContent = `Answer: ${p.answer_letter}) \\(${p.choices[p.answer]}\\)`;
    els.mrSolutionCopy.textContent = p.solution || 'No written solution is available for this problem.';
    typeset(els.mrSolution);
  }
  els.frqZone.hidden = entry.solved;
}

/* ---------- free-response answer matching ---------- */
function normalizeAnswer(raw) {
  if (raw === null || raw === undefined) return '';
  let t = String(raw).toLowerCase().trim();
  t = t.replace(/^\(?[a-e]\)\s*/i, '');                                     // leading "(E)" label
  t = t.replace(/\\(?:left|right|,|;|!|quad|qquad)/g, '');
  t = t.replace(/\\(?:text|textbf|textit|mathrm|mathbf|operatorname)\s*\{([^{}]*)\}/g, '$1');
  t = t.replace(/\\sqrt\s*\{([^{}]*)\}/g, 'sqrt($1)');
  t = t.replace(/\\sqrt\s*(\d+)/g, 'sqrt($1)');
  t = t.replace(/\\pi/g, 'pi');
  for (let i = 0; i < 4; i++) t = t.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1)/($2)'); // \frac{a}{b}, tolerating one nesting level per pass
  t = t.replace(/\\[dt]?frac\s*(\d)\s*(\d)/g, '($1)/($2)');
  t = t.replace(/\\cdot|\\times|·|×/g, '*');
  t = t.replace(/\\div|÷/g, '/');
  t = t.replace(/\^\{?\\?circ\}?|\\degree|°/g, '');
  t = t.replace(/\\%|%/g, '');
  t = t.replace(/\\[a-z]+/g, '');
  t = t.replace(/[\s${}~]/g, '');
  t = t.replace(/\\/g, '');
  t = t.replace(/,(?=\d{3}(\D|$))/g, '');
  return t;
}

function answerVariants(raw) {
  const base = normalizeAnswer(raw);
  const variants = new Set([base]);
  variants.add(base.replace(/[()]/g, ''));
  const frac = base.match(/^\(?(-?\d+(?:\.\d+)?)\)?\/\(?(-?\d+(?:\.\d+)?)\)?$/);
  if (frac) {
    const value = Number(frac[1]) / Number(frac[2]);
    if (Number.isFinite(value)) variants.add(String(Math.round(value * 1e10) / 1e10));
  }
  const num = Number(base);
  if (base !== '' && Number.isFinite(num)) variants.add(String(num));
  variants.delete('');
  return variants;
}

function answersMatch(userInput, correctChoice) {
  const a = answerVariants(userInput);
  const b = answerVariants(correctChoice);
  for (const v of a) if (b.has(v)) return true;
  return false;
}

function submitMistakeAnswer() {
  const entry = getMistakes()[activeMistakeId];
  const p = problemById.get(activeMistakeId);
  if (!entry || !p || entry.solved) return;
  const input = els.mrInput.value.trim();
  if (!input) {
    els.mrFeedback.textContent = 'Type an answer first — a real attempt is the whole point.';
    els.mrFeedback.className = 'frq-feedback is-wrong';
    return;
  }

  const mistakes = getMistakes();
  const live = mistakes[activeMistakeId];

  if (answersMatch(input, p.choices[p.answer])) {
    live.solved = true;
    live.unlocked = true;
    saveMistakes(mistakes);
    els.mrFeedback.textContent = 'Conquered! That is exactly right — the solution is open below.';
    els.mrFeedback.className = 'frq-feedback is-correct';
    els.mrNext.hidden = Object.values(mistakes).filter(m => !m.solved).length === 0;
    renderMistakeState(live, p);
  } else {
    live.attempts += 1;
    saveMistakes(mistakes);
    const remaining = Math.max(0, MISTAKE_ATTEMPTS_TO_UNLOCK - live.attempts);
    els.mrFeedback.textContent = remaining > 0
      ? `Not it. Attempt ${live.attempts} logged — ${remaining} more real ${remaining === 1 ? 'try' : 'tries'} before you can reveal the solution. Ask the coach for a hint!`
      : 'Not it — but you have put in the work. You can reveal the solution now, or keep grinding.';
    els.mrFeedback.className = 'frq-feedback is-wrong';
    renderMistakeState(live, p);
  }
  coachSyncContext();
}

function revealMistakeSolution() {
  const mistakes = getMistakes();
  const entry = mistakes[activeMistakeId];
  const p = problemById.get(activeMistakeId);
  if (!entry || !p || entry.attempts < MISTAKE_ATTEMPTS_TO_UNLOCK) return;
  entry.unlocked = true;
  saveMistakes(mistakes);
  renderMistakeState(entry, p);
  coachSyncContext();
}

function openNextMistake() {
  const next = Object.values(getMistakes())
    .filter(m => !m.solved && m.id !== activeMistakeId)
    .sort((a, b) => b.addedAt - a.addedAt)[0];
  if (next) openMistake(next.id);
  else { renderMistakeList(); showScreen('home'); setMode('mistakes'); }
}

/* ================= AI coach (bring-your-own Anthropic API key) ================= */
let anthropicModulePromise = null;
let coachHistory = [];
let coachContextKey = '';
let coachBusy = false;

function getCoachKey() { return localStorage.getItem(COACH_KEY_STORAGE_KEY) || ''; }

function coachContext() {
  // Which problem is the student looking at right now?
  if (screens.trainer.classList.contains('is-active') && trainerProblem) {
    return {
      key: `trainer:${trainerProblem.id}:${trainerAnswered}`,
      label: `Trainer · ${problemLabel(trainerProblem)}`,
      problem: trainerProblem,
      detail: trainerAnswered
        ? 'The student has already answered this problem in the trainer.'
        : 'The student is attempting this multiple-choice problem right now. They can see the five answer choices.'
    };
  }
  if (screens.mistakeReview.classList.contains('is-active') && activeMistakeId) {
    const p = problemById.get(activeMistakeId);
    const entry = getMistakes()[activeMistakeId];
    if (p && entry) {
      return {
        key: `mistake:${p.id}:${entry.unlocked || entry.solved}`,
        label: `Mistake log · ${problemLabel(p)}`,
        problem: p,
        unlocked: entry.unlocked || entry.solved,
        detail: `The student previously missed this problem and is now re-solving it FREE RESPONSE (they cannot see the answer choices, so never mention them). They have made ${entry.attempts} re-attempt(s).` +
          (entry.unlocked || entry.solved ? ' The solution has been unlocked, so you may discuss it fully.' : ' The solution is still locked — help them earn it.')
      };
    }
  }
  if (screens.competition.classList.contains('is-active') && reviewMode && selectedCompetition) {
    const q = selectedCompetition.questions[currentQuestionIndex];
    const picked = answers[currentQuestionIndex];
    const entry = getMistakes()[q.id];
    const locked = picked !== null && picked !== q.answer && entry && !entry.unlocked && !entry.solved;
    return {
      key: `review:${q.id}:${locked}`,
      label: `Test review · Q${q.number}`,
      problem: q,
      unlocked: !locked,
      detail: `The student is reviewing a finished practice test. They answered ${picked === null ? 'blank' : LETTERS[picked]}; ` +
        (locked
          ? 'they got it WRONG and the solution is locked until they re-solve it in the mistake log — do NOT reveal the answer or which choice is correct.'
          : 'the solution is visible to them, so you may discuss it fully.')
    };
  }
  return { key: 'general', label: 'General help', problem: null, unlocked: true, detail: '' };
}

function coachSyncContext() {
  const ctx = coachContext();
  els.coachContextLabel.textContent = ctx.label;
  if (ctx.key !== coachContextKey) {
    coachContextKey = ctx.key;
    coachHistory = [];
  }
}

function coachSystemPrompt(ctx) {
  let system = `You are "Coach Halo", the friendly AI math coach on Saintly, a free AMC 10 prep site built by students for students. You are talking to a high schooler.

Coaching rules:
- Be Socratic and encouraging. Guide with questions, name the relevant concept or technique, and give escalating hints — never a full walkthrough on the first reply.
- ${ctx.problem && !ctx.unlocked ? 'HARD RULE: Do NOT state or confirm the final answer, the answer letter, or complete the last step. If asked directly, warmly refuse and offer a hint instead. Do not reveal the contents of the reference solution.' : 'You may discuss the full solution, but still lead with intuition before mechanics.'}
- Keep replies short (under ~120 words) unless the student asks for depth.
- Write math in LaTeX with $...$ delimiters. No markdown headings or bullet spam — talk like a person.`;

  system += `\n\n${buildHaloKnowledgePrompt()}`;

  const trainer = loadTrainer();
  const profile = topics.map(({ name }) => {
    const ts = topicState(trainer, name);
    const open = Object.values(getMistakes()).filter(m => !m.solved && problemById.get(m.id)?.topic === name).length;
    return `${name}: mastery ${Math.round(ts.rating)}, ${ts.attempts} attempts, ${open} open mistakes`;
  });
  if (profile.length) system += `\n\nSTUDENT LEARNING PROFILE (use this to personalize advice):\n${profile.join('\n')}`;

  if (ctx.problem) {
    const p = ctx.problem;
    system += `\n\nCURRENT PROBLEM (${problemLabel(p)}, topic: ${p.topic}, difficulty: ${p.difficulty}):\n${p.question}`;
    if (p.has_diagram) system += '\n(The problem has a diagram the student can see; you cannot see it, so ask them to describe it if needed.)';
    system += `\n\nFOR YOUR EYES ONLY — never quote directly${ctx.unlocked ? '' : ' and NEVER reveal the answer'}:\nCorrect answer: ${p.answer_letter}) ${p.choices[p.answer]}\nReference solution: ${p.solution || '(none)'}`;
    if (ctx.detail) system += `\n\nSituation: ${ctx.detail}`;
  }
  return system;
}

function coachBubble(kind, text = '') {
  const div = document.createElement('div');
  div.className = `coach-msg coach-msg--${kind}`;
  div.textContent = text;
  els.coachMessages.appendChild(div);
  els.coachMessages.scrollTop = els.coachMessages.scrollHeight;
  return div;
}

function coachRefreshKeywall() {
  const hasKey = Boolean(getCoachKey());
  els.coachKeywall.hidden = hasKey;
  els.coachComposer.style.display = hasKey ? '' : 'none';
}

function openCoach() {
  if (document.body.classList.contains('in-competition')) return;
  coachSyncContext();
  coachRefreshKeywall();
  els.coachDrawer.hidden = false;
  els.coachFab.hidden = true;
  els.coachInput.focus();
}
function closeCoach() {
  els.coachDrawer.hidden = true;
  els.coachFab.hidden = false;
}

async function loadAnthropic() {
  if (!anthropicModulePromise) {
    anthropicModulePromise = import('https://esm.sh/@anthropic-ai/sdk');
  }
  return anthropicModulePromise;
}

async function coachSend(text) {
  if (coachBusy) return;
  const apiKey = getCoachKey();
  if (!apiKey) { coachRefreshKeywall(); return; }

  coachBusy = true;
  els.coachSend.disabled = true;
  coachBubble('user', text);
  coachHistory.push({ role: 'user', content: text });
  if (coachHistory.length > 16) coachHistory = coachHistory.slice(-16);
  while (coachHistory.length && coachHistory[0].role !== 'user') coachHistory.shift();

  const thinkingBubble = coachBubble('thinking', 'Coach Halo is thinking…');
  const ctx = coachContext();

  let mod;
  try {
    mod = await loadAnthropic();
  } catch {
    thinkingBubble.remove();
    coachBubble('error', 'Could not load the Anthropic SDK. Check your connection and try again.');
    coachBusy = false;
    els.coachSend.disabled = false;
    return;
  }

  const Anthropic = mod.default;
  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
  let bubble = null;

  try {
    const stream = client.messages.stream({
      model: COACH_MODEL,
      max_tokens: 2048,
      thinking: { type: 'adaptive' },
      system: coachSystemPrompt(ctx),
      messages: coachHistory
    });
    stream.on('text', delta => {
      if (!bubble) { thinkingBubble.remove(); bubble = coachBubble('assistant'); }
      bubble.textContent += delta;
      els.coachMessages.scrollTop = els.coachMessages.scrollHeight;
    });
    const finalMessage = await stream.finalMessage();
    const full = finalMessage.content.filter(b => b.type === 'text').map(b => b.text).join('');
    if (!bubble) { thinkingBubble.remove(); bubble = coachBubble('assistant'); }
    bubble.textContent = full || '…';
    coachHistory.push({ role: 'assistant', content: full });
    typeset(bubble);
  } catch (error) {
    thinkingBubble.remove();
    if (bubble) bubble.remove();
    if (error instanceof Anthropic.AuthenticationError) {
      coachBubble('error', 'That API key was rejected by Anthropic. Open settings (gear icon) and double-check it.');
    } else if (error instanceof Anthropic.RateLimitError) {
      coachBubble('error', 'You hit your Anthropic rate limit. Give it a minute, then try again.');
    } else if (error instanceof Anthropic.APIError) {
      coachBubble('error', `Anthropic returned an error (${error.status ?? 'unknown'}): ${error.message}`);
    } else {
      coachBubble('error', 'Could not reach Anthropic. Check your connection and try again.');
    }
    coachHistory.pop(); // drop the failed user turn so a retry is clean
  } finally {
    coachBusy = false;
    els.coachSend.disabled = false;
  }
}

function openKeyDialog() {
  els.coachKeyInput.value = getCoachKey();
  els.coachKeyDialog.showModal();
}

/* ================= event wiring ================= */
els.grid.addEventListener('click', e => {
  const card = e.target.closest('[data-competition-key]');
  if (card) selectCompetition(card.dataset.competitionKey);
});
els.yearFilter.addEventListener('change', renderCompetitionGrid);
els.startCompetition.addEventListener('click', startCompetition);
els.changeCompetition.addEventListener('click', () => {
  if (!competitionStarted || competitionFinished || window.confirm('Choose another competition? Your current answers will be discarded.')) returnToPicker();
});
els.showDirections.addEventListener('click', () => showScreen('directions'));
els.exitCompetition.addEventListener('click', abandonCompetition);
els.previous.addEventListener('click', () => moveQuestion(-1));
els.next.addEventListener('click', () => moveQuestion(1));
els.answerOptions.addEventListener('click', e => {
  const choice = e.target.closest('[data-answer-index]');
  if (choice) chooseAnswer(Number(choice.dataset.answerIndex));
});
els.openReview.addEventListener('click', showReviewPanel);
els.closeReview.addEventListener('click', hideReviewPanel);
els.reviewGrid.addEventListener('click', e => {
  const button = e.target.closest('[data-question-index]');
  if (!button) return;
  currentQuestionIndex = Number(button.dataset.questionIndex);
  hideReviewPanel();
  renderQuestion();
});
els.submitCompetition.addEventListener('click', requestSubmission);
els.submitDialog.addEventListener('close', () => {
  if (els.submitDialog.returnValue === 'confirm') finishCompetition(false);
});
els.reviewResults.addEventListener('click', enterAnswerReview);
els.resultsToMistakes.addEventListener('click', () => { renderMistakeList(); returnToPicker('mistakes'); });
els.chooseAnother.addEventListener('click', () => returnToPicker());
els.gateGoMistakes.addEventListener('click', () => {
  const q = selectedCompetition.questions[currentQuestionIndex];
  returnToPicker('mistakes');
  openMistake(q.id);
});

els.highlighterTool.addEventListener('click', toggleHighlighter);
els.lineReaderTool.addEventListener('click', toggleLineReader);
els.questionPaper.addEventListener('mouseup', applyHighlightFromSelection);
document.addEventListener('pointermove', e => moveLineReader(e.clientY));
document.addEventListener('keydown', e => {
  if (!lineReaderEnabled || !['ArrowUp', 'ArrowDown'].includes(e.key)) return;
  e.preventDefault();
  const current = Number.parseFloat(els.lineReader.style.top) || window.innerHeight / 2;
  moveLineReader(current + (e.key === 'ArrowDown' ? 16 : -16));
});

// trainer
els.topicGrid.addEventListener('click', e => {
  const card = e.target.closest('[data-topic]');
  if (card) startTrainer(card.dataset.topic);
});
els.trainerOptions.addEventListener('click', e => {
  const choice = e.target.closest('[data-answer-index]');
  if (choice) answerTrainer(Number(choice.dataset.answerIndex));
});
els.trainerSkip.addEventListener('click', () => {
  /* A skip is an unanswered question — it goes to the mistake log like a miss. */
  if (trainerProblem && !trainerAnswered) {
    addMistake(trainerProblem, 'trainer', null);
    refreshMistakePill();
  }
  nextTrainerProblem();
});
els.trainerNext.addEventListener('click', nextTrainerProblem);
els.trainerShowSolution.addEventListener('click', () => {
  els.trainerSolutionCopy.textContent = trainerProblem.solution || 'No written solution is available for this problem.';
  els.trainerSolution.hidden = false;
  els.trainerShowSolution.hidden = true;
  typeset(els.trainerSolution);
});
els.trainerEnd.addEventListener('click', () => { renderTopicGrid(); returnToPicker('trainer'); });

// mistakes
els.mistakeList.addEventListener('click', e => {
  const card = e.target.closest('[data-mistake-id]');
  if (card) openMistake(card.dataset.mistakeId);
});
els.generateWeeklyReport.addEventListener('click', renderWeeklyCoachReport);
els.weeklyReportBody.addEventListener('click', e => {
  const target = e.target.closest('[data-plan-id]');
  if (!target) return;
  if (target.dataset.planKind === 'mistake') openMistake(target.dataset.planId);
  else startTargetProblem(target.dataset.planId);
});
els.mrSubmit.addEventListener('click', submitMistakeAnswer);
els.mrInput.addEventListener('keydown', e => { if (e.key === 'Enter') submitMistakeAnswer(); });
els.mrReveal.addEventListener('click', revealMistakeSolution);
els.mrNext.addEventListener('click', openNextMistake);
els.mrBack.addEventListener('click', () => { renderMistakeList(); showScreen('home'); setMode('mistakes'); });

// coach
els.coachFab.addEventListener('click', openCoach);
els.coachClose.addEventListener('click', closeCoach);
els.coachSettingsBtn.addEventListener('click', openKeyDialog);
els.coachKeywallBtn.addEventListener('click', openKeyDialog);
els.coachComposer.addEventListener('submit', e => {
  e.preventDefault();
  const text = els.coachInput.value.trim();
  if (!text) return;
  els.coachInput.value = '';
  coachSend(text);
});
els.coachInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    els.coachComposer.requestSubmit();
  }
});
els.coachKeyDialog.addEventListener('close', () => {
  const action = els.coachKeyDialog.returnValue;
  if (action === 'save') {
    const key = els.coachKeyInput.value.trim();
    if (key) localStorage.setItem(COACH_KEY_STORAGE_KEY, key);
  } else if (action === 'clear') {
    localStorage.removeItem(COACH_KEY_STORAGE_KEY);
  }
  els.coachKeyInput.value = '';
  coachRefreshKeywall();
});

window.addEventListener('beforeunload', e => {
  if (!competitionStarted || competitionFinished) return;
  e.preventDefault();
  e.returnValue = '';
});

/* ================= boot ================= */
const initialMode = ['tests', 'trainer', 'mistakes'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'tests';
setMode(initialMode);
coachRefreshKeywall();
refreshMistakePill();
loadData();
