/* Saintly interactive lesson engine.
   Data-driven: a lesson module default-exports a lesson object (see lessons/LESSON-SCHEMA.md
   and lessons/chapter-1/lesson-1-1.js, the golden reference). The engine renders one "beat"
   at a time — concept + one interaction — and gates progress on answering. Misses never
   punish: first miss shows the beat's hint, second miss shows the worked explanation and
   unlocks "Continue anyway". */

const PATH_KEY = 'saintly-study-path-v1';
const CELEBRATE_KEY = 'saintly-just-completed';
const API_KEY = 'saintly-anthropic-api-key';

const $ = id => document.getElementById(id);
const esc = value => String(value).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

const params = new URLSearchParams(location.search);
const chapterNum = Number(params.get('chapter')) || 1;
const lessonNum = Number(params.get('lesson')) || 1;

let lesson = null;
let beatIndex = 0;
let xp = 0;
let answeredProblems = 0;

/* Per-beat state, reset in renderBeat */
let beat = null;
let phase = 'working';      // working -> done
let misses = 0;
let coachRungsUsed = 0;
let walkStep = 0;
let ui = {};                // interaction-specific state (selected index, matches, etc.)

/* ---------- MathJax ---------- */
function typeset(node) {
  if (!window.MathJax?.typesetPromise) return;
  window.MathJax.typesetClear?.([node]);
  window.MathJax.typesetPromise([node]).catch(() => {});
}

/* ---------- shuffle (Fisher–Yates; reshuffles if order interactions land pre-solved) ---------- */
function shuffled(list) {
  const arr = list.map((item, index) => ({ item, index }));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  if (arr.length > 2 && arr.every((entry, i) => entry.index === i)) return shuffled(list);
  return arr;
}

/* ---------- numeric-tolerant answer matching ---------- */
function normalize(value) {
  return String(value).toLowerCase().replace(/\s+/g, '').replace(/,/g, '').replace(/^\+/, '');
}
function asNumber(value) {
  const text = normalize(value);
  const frac = text.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (frac) {
    const den = Number(frac[2]);
    return den === 0 ? NaN : Number(frac[1]) / den;
  }
  return /^-?\d+(?:\.\d+)?$/.test(text) ? Number(text) : NaN;
}
function answerMatches(input, field) {
  const targets = [field.answer, ...(field.accept || [])];
  const given = normalize(input);
  if (!given) return false;
  if (targets.some(t => normalize(t) === given)) return true;
  const num = asNumber(input);
  return Number.isFinite(num) && targets.some(t => Number.isFinite(asNumber(t)) && Math.abs(asNumber(t) - num) < 1e-9);
}

/* ---------- progress bar ---------- */
function renderProgress() {
  $('il-progress').innerHTML = lesson.beats.map((b, index) => {
    const cls = ['il-seg'];
    if (b.section === 'checkpoint' || b.section === 'boss') cls.push('is-check');
    if (index < beatIndex) cls.push('is-done');
    if (index === beatIndex) cls.push('is-current');
    const fill = index === beatIndex ? `<i style="--fill:${phase === 'done' ? 100 : 8}%"></i>` : '';
    return `<span class="${cls.join(' ')}">${fill}</span>`;
  }).join('');
  $('il-progress').setAttribute('aria-valuenow', String(beatIndex + 1));
  $('il-progress').setAttribute('aria-valuemax', String(lesson.beats.length));
}

/* ---------- interaction renderers ---------- */
const renderers = {
  mcq(node) {
    const options = ui.mcqOrder = beat.interaction.shuffle === false
      ? beat.interaction.options.map((item, index) => ({ item, index }))
      : shuffled(beat.interaction.options);
    node.innerHTML = `<div class="il-options${beat.interaction.cols ? ' is-cols' : ''}" role="group">
      ${options.map((entry, i) => `<button class="il-option" type="button" data-choice="${i}">
        <span class="il-opt-key">${i + 1}</span><span>${entry.item}</span>
      </button>`).join('')}
    </div>`;
  },

  fillin(node) {
    node.innerHTML = `<div class="il-fillin">
      ${beat.interaction.fields.map((field, i) => `<label class="il-fillin-label">${field.label ? esc(field.label) : ''}
        <input class="il-fillin-box" data-field="${i}" inputmode="text" autocomplete="off" spellcheck="false"
          placeholder="${esc(field.placeholder ?? '?')}" ${field.width ? `style="width:${field.width}px"` : ''}>
      </label>`).join('')}
    </div>`;
    node.querySelector('.il-fillin-box')?.focus();
  },

  reveal(node) {
    node.innerHTML = `<button class="il-reveal" type="button" id="il-reveal">
      <span class="il-reveal-face">${beat.interaction.face}</span>
      <span class="il-reveal-cta">${esc(beat.interaction.cta || 'Tap to reveal')}</span>
    </button>`;
  },

  slider(node) {
    const spec = beat.interaction;
    ui.visited = new Set([spec.value]);
    node.innerHTML = `<div class="il-slider">
      <div class="il-slider-display"><div class="il-slider-main" id="il-slider-main"></div><div class="il-slider-sub" id="il-slider-sub"></div></div>
      <div class="il-slider-controls">
        <span class="il-slider-label">${esc(spec.label || 'n')}</span>
        <input type="range" id="il-range" min="${spec.min}" max="${spec.max}" step="${spec.step || 1}" value="${spec.value}" aria-label="${esc(spec.label || 'value')}">
        <span class="il-slider-nval" id="il-nval">${spec.value}</span>
      </div>
    </div>`;
    updateSlider(spec.value);
  },

  errorhunt(node) {
    node.innerHTML = `<div class="il-lines" role="group" aria-label="Tap the incorrect step">
      ${beat.interaction.lines.map((line, i) => `<button class="il-line" type="button" data-line="${i}">
        <span class="il-line-no">${i + 1}</span><span>${line.text}</span>
      </button>`).join('')}
    </div>`;
  },

  order(node) {
    ui.bank = shuffled(beat.interaction.items);
    ui.placed = [];
    node.innerHTML = `<div class="il-order">
      <div class="il-order-slots" id="il-slots"></div>
      <div class="il-bank" id="il-bank"></div>
    </div>`;
    paintOrder();
  },

  match(node) {
    const pairs = beat.interaction.pairs;
    ui.leftOrder = shuffled(pairs.map(p => p[0]));
    ui.rightOrder = shuffled(pairs.map(p => p[1]));
    ui.activeLeft = null;
    ui.solved = 0;
    node.innerHTML = `<div class="il-match">
      <div class="il-match-col">${ui.leftOrder.map((entry, i) =>
        `<button class="il-match-item" type="button" data-side="left" data-i="${i}"><span>${entry.item}</span></button>`).join('')}</div>
      <div class="il-match-col">${ui.rightOrder.map((entry, i) =>
        `<button class="il-match-item" type="button" data-side="right" data-i="${i}"><span>${entry.item}</span></button>`).join('')}</div>
    </div>`;
  },

  /* Balance solver: the equation sits on a two-pan balance; the student drives every
     step by picking an op. Ops with no transition from the current state are legal-but-
     useless — they shake and explain instead of transforming. Completes at the goal state. */
  balance(node) {
    const spec = beat.interaction;
    ui.state = spec.start;
    ui.history = [];
    node.innerHTML = `<div class="il-balance">
      <div class="il-balance-scale">
        <div class="il-balance-eq" id="il-balance-eq"></div>
        <div class="il-balance-beam" aria-hidden="true"></div>
      </div>
      <div class="il-balance-note" id="il-balance-note" hidden></div>
      <div class="il-balance-ops" role="group" aria-label="Pick an operation">
        ${spec.ops.map((op, i) => `<button class="il-balance-op" type="button" data-op="${i}">${op.label}</button>`).join('')}
        <button class="il-balance-op is-undo" type="button" id="il-balance-undo" hidden>&#8617; Undo</button>
      </div>
      <div class="il-balance-trail" id="il-balance-trail" aria-live="polite"></div>
    </div>`;
    paintBalance();
  }
};

function updateSlider(value) {
  const spec = beat.interaction;
  const view = spec.render(Number(value));
  $('il-slider-main').innerHTML = view.main || '';
  $('il-slider-sub').innerHTML = view.sub || '';
  $('il-nval').textContent = value;
  typeset($('il-slider-main').parentElement);
}

function paintBalance() {
  const spec = beat.interaction;
  const state = spec.states[ui.state];
  const atGoal = ui.state === spec.goal;
  $('il-balance-eq').innerHTML = state.eq;
  const note = $('il-balance-note');
  note.hidden = !state.note;
  note.innerHTML = state.note || '';
  note.classList.toggle('is-goal', atGoal);
  document.querySelectorAll('.il-balance-op').forEach(button => { button.disabled = atGoal; });
  $('il-balance-undo').hidden = ui.history.length === 0 || atGoal;
  $('il-balance-trail').innerHTML = ui.history.map((entry, i) =>
    `<span class="il-balance-step">${i + 1}. ${entry.label}</span>`).join('');
  typeset($('il-balance-eq').closest('.il-balance'));
}

function onBalanceOp(button) {
  const op = beat.interaction.ops[Number(button.dataset.op)];
  const next = op.to?.[ui.state];
  if (next) {
    ui.history.push({ label: op.label, from: ui.state });
    ui.state = next;
    paintBalance();
  } else {
    button.classList.add('is-blocked');
    setTimeout(() => button.classList.remove('is-blocked'), 450);
    const note = $('il-balance-note');
    note.hidden = false;
    note.classList.remove('is-goal');
    note.innerHTML = op.blocked || 'Perfectly legal — the balance stays level — but it doesn&rsquo;t bring you closer to the answer.';
    typeset(note);
  }
  syncAction();
}

function paintOrder() {
  const items = beat.interaction.items;
  $('il-slots').innerHTML = items.map((_, i) => {
    const entry = ui.placed[i];
    return `<button class="il-slot${entry !== undefined ? ' is-filled' : ''}" type="button" data-slot="${i}" ${entry === undefined ? 'disabled' : ''}>
      <span class="il-slot-no">${i + 1}</span><span>${entry !== undefined ? ui.bank[entry].item : '&nbsp;'}</span>
    </button>`;
  }).join('');
  $('il-bank').innerHTML = ui.bank.map((entry, i) =>
    `<button class="il-chip" type="button" data-chip="${i}" ${ui.placed.includes(i) ? 'disabled' : ''}>${entry.item}</button>`).join('');
  typeset($('il-slots').parentElement);
}

/* ---------- readiness (can the Check / Continue button fire?) ---------- */
function isReady() {
  if (phase === 'done') return true;
  switch (beat.interaction.type) {
    case 'mcq': return ui.selected !== undefined;
    case 'fillin': return fillinBoxes().every(box => box.value.trim() !== '');
    case 'reveal': return !!ui.revealed;
    case 'slider': return ui.visited.size >= (beat.interaction.mustExplore ?? 3);
    case 'errorhunt': return ui.selectedLine !== undefined;
    case 'order': return ui.placed.filter(v => v !== undefined).length === beat.interaction.items.length;
    case 'match': return ui.solved === beat.interaction.pairs.length;
    case 'balance': return ui.state === beat.interaction.goal;
    default: return true;
  }
}

/* Scoped to the current interaction — the coach panel reuses the .il-fillin-box style. */
function fillinBoxes() {
  return [...document.querySelectorAll('#il-interaction .il-fillin-box')];
}

/* ---------- grading ---------- */
function grade() {
  const kind = beat.interaction.type;
  if (kind === 'mcq') {
    const right = ui.mcqOrder[ui.selected].index === beat.interaction.correct;
    document.querySelectorAll('.il-option').forEach((option, i) => {
      option.disabled = right;
      option.classList.remove('is-selected');
      if (right && ui.mcqOrder[i].index === beat.interaction.correct) option.classList.add('is-correct');
      else if (i === ui.selected && !right) option.classList.add('is-wrong');
    });
    if (!right) setTimeout(() => document.querySelectorAll('.il-option').forEach(o => o.classList.remove('is-wrong')), 900);
    return right;
  }
  if (kind === 'fillin') {
    let allRight = true;
    fillinBoxes().forEach(box => {
      const right = answerMatches(box.value, beat.interaction.fields[Number(box.dataset.field)]);
      box.classList.toggle('is-correct', right);
      box.classList.toggle('is-wrong', !right);
      if (!right) allRight = false;
      else box.disabled = true;
    });
    if (!allRight) setTimeout(() => fillinBoxes().forEach(b => b.classList.remove('is-wrong')), 900);
    return allRight;
  }
  if (kind === 'errorhunt') {
    const right = !!beat.interaction.lines[ui.selectedLine]?.wrong;
    document.querySelectorAll('.il-line').forEach((line, i) => {
      if (i === ui.selectedLine) line.classList.add(right ? 'is-correct' : 'is-wrong');
      line.disabled = right;
    });
    if (!right) setTimeout(() => document.querySelectorAll('.il-line.is-wrong').forEach(l => l.classList.remove('is-wrong')), 900);
    ui.selectedLine = right ? ui.selectedLine : undefined;
    return right;
  }
  if (kind === 'order') {
    let allRight = true;
    document.querySelectorAll('.il-slot').forEach((slot, i) => {
      const right = ui.placed[i] !== undefined && ui.bank[ui.placed[i]].index === i;
      slot.classList.toggle('is-correct', right);
      slot.classList.toggle('is-wrong', !right);
      if (!right) allRight = false;
    });
    if (!allRight) setTimeout(() => {
      document.querySelectorAll('.il-slot.is-wrong').forEach((slot, _) => slot.classList.remove('is-wrong'));
      /* Wrong entries bounce back to the bank; right ones stay locked. */
      ui.placed = ui.placed.map((entry, i) => (entry !== undefined && ui.bank[entry].index === i) ? entry : undefined);
      paintOrder();
    }, 900);
    return allRight;
  }
  /* reveal, slider, match complete by interacting — grading always passes */
  return true;
}

/* ---------- feedback & flow ---------- */
function setFeedback(kind, label, html) {
  const box = $('il-feedback');
  box.className = `il-feedback is-${kind}`;
  box.innerHTML = `<span class="il-fb-label">${label}</span>${html}`;
  box.hidden = false;
  typeset(box);
}

function beatXp() {
  if (misses === 0 && coachRungsUsed === 0) return 10;
  if (misses <= 1 && coachRungsUsed <= 1) return 5;
  return 2;
}

function completeBeat() {
  phase = 'done';
  answeredProblems += ['mcq', 'fillin', 'errorhunt', 'order'].includes(beat.interaction.type) ? 1 : 0;
  const earned = ['reveal', 'slider', 'match', 'balance'].includes(beat.interaction.type) ? (misses ? 2 : 5) : beatXp();
  xp += earned;
  $('il-xp-count').textContent = String(xp);
  $('il-mascot').className = 'il-mascot is-happy';
  if (beat.success || beat.interaction.type === 'match') {
    setFeedback('correct', `+${earned} XP`, beat.success || 'Matched — every pair is right.');
  } else {
    setFeedback('correct', `+${earned} XP`, 'Correct.');
  }
  if (beat.note) {
    const note = document.createElement('div');
    note.className = 'il-note';
    note.innerHTML = `<b>Takeaway.</b> ${beat.note}`;
    $('il-stage').append(note);
    typeset(note);
    note.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  renderProgress();
  syncAction();
}

function handleMiss() {
  misses += 1;
  $('il-mascot').className = 'il-mascot is-sad';
  if (misses === 1 && beat.hint) {
    setFeedback('hint', 'Hint', beat.hint);
  } else {
    const explain = beat.explain || beat.hint || 'Look back at the setup and try once more.';
    setFeedback('wrong', 'Walkthrough', explain);
    if (beat.walkthrough?.length) startWalkthrough();
    $('il-skip').hidden = false;   /* retry stays open; continuing is never blocked */
  }
  syncAction();
}

function startWalkthrough() {
  walkStep = 0;
  const box = $('il-feedback');
  const button = document.createElement('button');
  button.className = 'il-secondary-action';
  button.style.marginTop = '10px';
  button.textContent = 'Walk me through it →';
  button.addEventListener('click', () => {
    if (walkStep < beat.walkthrough.length) {
      const step = document.createElement('div');
      step.className = 'il-note';
      step.style.marginTop = '8px';
      step.innerHTML = `<b>Step ${walkStep + 1}.</b> ${beat.walkthrough[walkStep]}`;
      box.append(step);
      typeset(step);
      walkStep += 1;
      button.textContent = walkStep < beat.walkthrough.length ? 'Next step →' : 'That’s the whole solution';
      if (walkStep >= beat.walkthrough.length) button.disabled = true;
    }
  });
  box.append(button);
}

function syncAction() {
  const action = $('il-action');
  const last = beatIndex === lesson.beats.length - 1;
  if (phase === 'done') {
    action.textContent = last ? 'Finish lesson' : 'Continue';
    action.disabled = false;
    action.className = 'il-action is-ready is-continue';
    return;
  }
  const passive = ['reveal', 'slider', 'match', 'balance'].includes(beat.interaction.type);
  action.textContent = passive ? 'Continue' : 'Check';
  action.disabled = !isReady();
  action.className = `il-action${isReady() ? ' is-ready' : ''}${passive ? ' is-continue' : ''}`;
}

function onAction() {
  if (phase === 'done') return advance();
  if (!isReady()) return;
  if (grade()) return completeBeat();
  handleMiss();
}

function skipBeat() {
  /* "Continue anyway" after the walkthrough — reveal the answer, no XP, move on. */
  phase = 'done';
  $('il-skip').hidden = true;
  revealAnswer();
  renderProgress();
  syncAction();
}

function revealAnswer() {
  const kind = beat.interaction.type;
  if (kind === 'mcq') {
    document.querySelectorAll('.il-option').forEach((option, i) => {
      option.disabled = true;
      if (ui.mcqOrder[i].index === beat.interaction.correct) option.classList.add('is-correct');
    });
  } else if (kind === 'fillin') {
    fillinBoxes().forEach(box => {
      box.value = String(beat.interaction.fields[Number(box.dataset.field)].answer);
      box.disabled = true;
      box.classList.add('is-correct');
    });
  } else if (kind === 'errorhunt') {
    document.querySelectorAll('.il-line').forEach((line, i) => {
      line.disabled = true;
      if (beat.interaction.lines[i].wrong) line.classList.add('is-correct');
    });
  } else if (kind === 'order') {
    ui.placed = beat.interaction.items.map((_, slotIndex) => ui.bank.findIndex(entry => entry.index === slotIndex));
    paintOrder();
    document.querySelectorAll('.il-slot').forEach(slot => slot.classList.add('is-correct'));
  }
}

/* ---------- beat rendering ---------- */
function renderBeat() {
  beat = lesson.beats[beatIndex];
  phase = 'working';
  misses = 0;
  coachRungsUsed = 0;
  ui = {};
  closeCoach();

  const section = beat.section || 'learn';
  const kicker = beat.kicker
    || (section === 'checkpoint' ? `Checkpoint · ${lesson.title}` : section === 'boss' ? 'Boss problem' : `${lesson.kicker} · Beat ${beatIndex + 1}`);

  const stage = $('il-stage');
  stage.innerHTML = `
    <span class="il-kicker${section === 'checkpoint' ? ' is-check' : ''}${section === 'boss' ? ' is-boss' : ''}">${esc(kicker)}</span>
    <h1 class="il-prompt">${beat.prompt}</h1>
    ${beat.body ? `<p class="il-body">${beat.body}</p>` : ''}
    <div id="il-interaction"></div>`;
  stage.style.animation = 'none';
  void stage.offsetWidth;
  stage.style.animation = '';

  renderers[beat.interaction.type]($('il-interaction'));
  $('il-feedback').hidden = true;
  $('il-skip').hidden = true;
  $('il-mascot').className = 'il-mascot';
  $('il-coach-fab').hidden = !(beat.coach?.length || beat.hint);
  renderProgress();
  syncAction();
  typeset(stage);
  $('il-card').querySelector('.il-stage').scrollTop = 0;
}

function advance() {
  if (beatIndex === lesson.beats.length - 1) return finishLesson();
  beatIndex += 1;
  renderBeat();
}

/* ---------- coach halo: local hint ladder + optional BYO-key free-form ask ---------- */
function coachRungs() {
  const rungs = [...(beat.coach || [])];
  if (!rungs.length && beat.hint) rungs.push(beat.hint);
  if (beat.explain && !rungs.includes(beat.explain)) rungs.push(beat.explain);
  return rungs;
}

function openCoach() {
  const panel = $('il-coach-panel');
  panel.hidden = false;
  const body = $('il-coach-body');
  if (!body.childElementCount) showNextRung();
}

function closeCoach() {
  $('il-coach-panel').hidden = true;
  $('il-coach-body').innerHTML = '';
  $('il-coach-more').disabled = false;
}

function showNextRung() {
  const rungs = coachRungs();
  if (coachRungsUsed >= rungs.length) return;
  const labels = ['Nudge', 'Strategy', 'Next step', 'Almost there'];
  const rung = document.createElement('div');
  rung.className = 'il-coach-rung';
  rung.innerHTML = `<small>${labels[Math.min(coachRungsUsed, labels.length - 1)]}</small>${rungs[coachRungsUsed]}`;
  $('il-coach-body').append(rung);
  typeset(rung);
  coachRungsUsed += 1;
  $('il-coach-more').disabled = coachRungsUsed >= rungs.length;
  $('il-coach-body').scrollTop = $('il-coach-body').scrollHeight;
}

async function askCoachAI(question) {
  const key = localStorage.getItem(API_KEY);
  const body = $('il-coach-body');
  const bubble = document.createElement('div');
  bubble.className = 'il-coach-rung';
  if (!key) {
    bubble.innerHTML = '<small>Halo</small>The hint ladder above is free and local. For open-ended questions about your own work, add your Anthropic key in the Practice Arena’s Halo settings.';
    body.append(bubble);
    return;
  }
  bubble.innerHTML = '<small>Halo</small>Thinking…';
  body.append(bubble);
  body.scrollTop = body.scrollHeight;
  try {
    const mod = await import('https://esm.sh/@anthropic-ai/sdk');
    const client = new mod.default({ apiKey: key, dangerouslyAllowBrowser: true });
    const response = await client.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 400,
      system: `You are Coach Halo inside a Saintly interactive math lesson ("${lesson.title}", ${lesson.kicker}). The student is on this problem:\n${beat.prompt.replace(/<[^>]+>/g, '')}\n\nBe Socratic: never state the final answer. Ask one guiding question or point at the one step where their reasoning breaks. Use \\( \\) for math. Under 80 words.`,
      messages: [{ role: 'user', content: question }]
    });
    bubble.innerHTML = `<small>Halo</small>${response.content.filter(b => b.type === 'text').map(b => b.text).join('')}`;
  } catch {
    bubble.innerHTML = '<small>Halo</small>I couldn’t reach the AI service — the local hint ladder above still works.';
  }
  typeset(bubble);
  body.scrollTop = body.scrollHeight;
}

/* ---------- completion ---------- */
function markComplete() {
  let completed;
  try { completed = new Set(JSON.parse(localStorage.getItem(PATH_KEY)) || []); } catch { completed = new Set(); }
  completed.add(`${lesson.topicIndex}:${lesson.lessonIndex}`);
  localStorage.setItem(PATH_KEY, JSON.stringify([...completed]));
  sessionStorage.setItem(CELEBRATE_KEY, `${lesson.topicIndex}:${lesson.lessonIndex}`);
}

async function recordProgress() {
  try {
    const { recordActivity } = await import('./progress-core.js');
    recordActivity({ xp, problems: answeredProblems });
  } catch { /* streaks module not present — lesson still completes */ }
}

function dropConfetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#88B0FF', '#FFB192', '#EBF3FF', '#57d364', '#FFF0EB'];
  $('il-confetti').innerHTML = Array.from({ length: 36 }, (_, index) => {
    const color = colors[index % colors.length];
    return `<i style="--x:${(index * 97) % 100}%;--c:${color};--delay:${(index % 7) * 90}ms;--dur:${1500 + (index % 5) * 380}ms;--spin:${(index % 2 ? 1 : -1) * (360 + index * 24)}deg"></i>`;
  }).join('');
}

function finishLesson() {
  markComplete();
  recordProgress();
  const maxXp = lesson.beats.length * 10;
  $('il-completion-kicker').textContent = `${lesson.kicker} · Lesson ${lesson.lessonIndex + 1}`.toUpperCase();
  $('il-completion-title').textContent = `${lesson.title} complete`;
  $('il-completion-xp').textContent = `+${xp}`;
  $('il-completion-copy').textContent = xp >= maxXp * 0.9
    ? 'Near-perfect run. This stop is marked explored on your study path.'
    : 'Nice work. This stop is marked explored on your study path.';
  $('il-completion-next').href = lesson.next || 'study-path.html';
  $('il-completion-back').href = `study-path.html#topic-${lesson.topicIndex + 1}`;
  if (lesson.notes) { $('il-completion-notes').href = lesson.notes; $('il-completion-notes').hidden = false; }
  else $('il-completion-notes').hidden = true;
  $('il-overlay').hidden = false;
  dropConfetti();
  $('il-completion-next').focus();
}

/* ---------- event wiring ---------- */
function wire() {
  $('il-stage').addEventListener('click', event => {
    if (phase === 'done') return;
    const option = event.target.closest('[data-choice]');
    if (option) {
      ui.selected = Number(option.dataset.choice);
      document.querySelectorAll('.il-option').forEach((o, i) => o.classList.toggle('is-selected', i === ui.selected));
      return syncAction();
    }
    const line = event.target.closest('[data-line]');
    if (line) {
      ui.selectedLine = Number(line.dataset.line);
      document.querySelectorAll('.il-line').forEach((l, i) => l.classList.toggle('is-correct', false) || l.classList.toggle('is-wrong', false));
      line.style.borderColor = '';
      document.querySelectorAll('.il-line').forEach((l, i) => l.style.background = i === ui.selectedLine ? 'rgba(136,176,255,.1)' : '');
      return syncAction();
    }
    const revealBtn = event.target.closest('#il-reveal');
    if (revealBtn && !ui.revealed) {
      ui.revealed = true;
      revealBtn.classList.add('is-open');
      const hidden = document.createElement('span');
      hidden.className = 'il-reveal-hidden';
      hidden.innerHTML = beat.interaction.hidden;
      revealBtn.append(hidden);
      typeset(hidden);
      return syncAction();
    }
    const chip = event.target.closest('[data-chip]');
    if (chip && !chip.disabled) {
      const slot = ui.placed.findIndex(v => v === undefined);
      const target = slot === -1 ? ui.placed.length : slot;
      if (target < beat.interaction.items.length) { ui.placed[target] = Number(chip.dataset.chip); paintOrder(); }
      return syncAction();
    }
    const filledSlot = event.target.closest('[data-slot]');
    if (filledSlot && ui.placed[Number(filledSlot.dataset.slot)] !== undefined) {
      ui.placed[Number(filledSlot.dataset.slot)] = undefined;
      paintOrder();
      return syncAction();
    }
    const matchItem = event.target.closest('.il-match-item');
    if (matchItem && !matchItem.disabled) return onMatchTap(matchItem);
    const undoButton = event.target.closest('#il-balance-undo');
    if (undoButton) {
      const prev = ui.history.pop();
      if (prev) { ui.state = prev.from; paintBalance(); }
      return syncAction();
    }
    const opButton = event.target.closest('[data-op]');
    if (opButton && !opButton.disabled) return onBalanceOp(opButton);
  });

  $('il-stage').addEventListener('input', event => {
    if (event.target.id === 'il-range') {
      const value = Number(event.target.value);
      ui.visited.add(value);
      updateSlider(value);
      return syncAction();
    }
    if (event.target.classList.contains('il-fillin-box')) syncAction();
  });

  $('il-action').addEventListener('click', onAction);
  $('il-skip').addEventListener('click', skipBeat);
  $('il-exit').addEventListener('click', () => { location.href = `study-path.html#topic-${lesson.topicIndex + 1}`; });
  $('il-coach-fab').addEventListener('click', openCoach);
  $('il-coach-close').addEventListener('click', () => { $('il-coach-panel').hidden = true; });
  $('il-coach-more').addEventListener('click', showNextRung);
  $('il-coach-form').addEventListener('submit', event => {
    event.preventDefault();
    const question = $('il-coach-input').value.trim();
    if (!question) return;
    $('il-coach-input').value = '';
    askCoachAI(question);
  });

  document.addEventListener('keydown', event => {
    if (!$('il-overlay').hidden) return;
    if (event.target.matches('input, textarea')) {
      if (event.key === 'Enter' && event.target.classList.contains('il-fillin-box') && !$('il-action').disabled) onAction();
      return;
    }
    if (event.key === 'Enter' && !$('il-action').disabled) return onAction();
    const digit = Number(event.key);
    if (digit >= 1 && digit <= 6 && phase !== 'done' && beat.interaction.type === 'mcq') {
      const option = document.querySelector(`[data-choice="${digit - 1}"]`);
      if (option && !option.disabled) option.click();
    }
  });
}

function onMatchTap(item) {
  const side = item.dataset.side;
  const i = Number(item.dataset.i);
  if (side === 'left') {
    ui.activeLeft = i;
    document.querySelectorAll('[data-side="left"]').forEach((el, j) => el.classList.toggle('is-active', j === i));
    return;
  }
  if (ui.activeLeft === null) return;
  const leftEntry = ui.leftOrder[ui.activeLeft];
  const rightEntry = ui.rightOrder[i];
  const isPair = leftEntry.index === rightEntry.index;
  const leftEl = document.querySelector(`[data-side="left"][data-i="${ui.activeLeft}"]`);
  if (isPair) {
    [leftEl, item].forEach(el => { el.classList.remove('is-active'); el.classList.add('is-correct'); el.disabled = true; });
    ui.solved += 1;
    ui.activeLeft = null;
    if (ui.solved === beat.interaction.pairs.length) syncAction();
  } else {
    misses += 1;
    [leftEl, item].forEach(el => el.classList.add('is-wrong'));
    setTimeout(() => [leftEl, item].forEach(el => el.classList.remove('is-wrong', 'is-active')), 700);
    ui.activeLeft = null;
    if (misses === 1 && beat.hint) setFeedback('hint', 'Hint', beat.hint);
  }
}

/* ---------- boot ---------- */
async function boot() {
  try {
    const mod = await import(`./lessons/chapter-${chapterNum}/lesson-${chapterNum}-${lessonNum}.js`);
    lesson = mod.default;
  } catch (error) {
    $('il-stage').innerHTML = `<span class="il-kicker">Lesson unavailable</span>
      <h1 class="il-prompt">This lesson hasn’t been built yet.</h1>
      <p class="il-body">Head back to the study path and pick another stop.</p>`;
    $('il-action').textContent = 'Back to path';
    $('il-action').className = 'il-action is-ready is-continue';
    $('il-action').disabled = false;
    $('il-action').addEventListener('click', () => { location.href = 'study-path.html'; }, { once: true });
    return;
  }
  document.title = `${lesson.title} | Saintly`;
  wire();
  renderBeat();
}

boot();
