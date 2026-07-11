import { STUDY_PATH, lessonRoute, interactiveLessonRoute } from './study-path-data.js';

const STORAGE_KEY = 'saintly-study-path-v1';
const CELEBRATE_KEY = 'saintly-just-completed';
const XP_PER_CORRECT = 10;
const SLIDES_PER_LESSON = 5;

const $ = id => document.getElementById(id);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const escapeHtml = value => String(value).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const withArticle = value => `${/^[aeiou]/i.test(value) ? 'an' : 'a'} ${value}`;

const params = new URLSearchParams(location.search);
const topicIndex = clamp(Number(params.get('topic')) || 0, 0, STUDY_PATH.length - 1);
const chapter = STUDY_PATH[topicIndex];
const lessonIndex = clamp(Number(params.get('lesson')) || 0, 0, chapter.lessons.length - 1);
const lessonTitle = chapter.lessons[lessonIndex];

/* Chapters converted to the interactive engine no longer use this generic player. */
const interactiveHref = interactiveLessonRoute(topicIndex, lessonIndex);
if (interactiveHref) location.replace(interactiveHref);

let slides = [];
let slideIndex = 0;
let selected = null;   // index of chosen option, null until picked
let checked = false;   // has the current question been graded
let xp = 0;

/* ---------- reusable lesson flow ----------
   Topic-specific notes remain on the full article route. The player prepares
   students to read, model, solve, and check before sending them there. */
function buildSlides() {
  const concept = {
    type: 'concept',
    prompt: lessonTitle,
    lead: `A short walkthrough of ${lessonTitle.toLowerCase()} before you try it yourself.`,
    points: [
      `Name the definition, notation, or theorem that drives ${lessonTitle.toLowerCase()}.`,
      'Translate the given information into a diagram, equation, or organized case list.',
      'Solve one step at a time, then check the result against the original conditions.'
    ]
  };

  const questions = [
    {
      type: 'mcq',
      prompt: `What is the strongest first move on ${withArticle(lessonTitle)} problem?`,
      figure: true,
      options: ['Guess from the answer choices', 'Identify the relevant definition or rule', 'Start calculating without a plan', 'Ignore the problem conditions'],
      correct: 1
    },
    {
      type: 'mcq',
      prompt: 'What should you do before substituting numbers?',
      figure: false,
      options: ['Write the relationship you plan to use', 'Round every value', 'Remove the units', 'Skip directly to the final answer'],
      correct: 0
    },
    {
      type: 'mcq',
      prompt: 'If your first representation is unclear, what is the best next step?',
      figure: true,
      options: ['Repeat the same arithmetic', 'Choose a random formula', 'Rewrite the information in an equivalent form', 'Assume the missing value'],
      correct: 2
    },
    {
      type: 'mcq',
      prompt: 'What makes a competition-math solution complete?',
      figure: false,
      options: ['Only the final number', 'A justified chain of steps and a condition check', 'The longest possible calculation', 'A diagram without labels'],
      correct: 1
    }
  ];

  return [concept, ...questions];
}

/* ---------- progress ---------- */
function renderProgress() {
  $('slide-progress').innerHTML = slides.map((_, index) => {
    if (index < slideIndex) return '<span class="progress-segment is-done"></span>';
    if (index > slideIndex) return '<span class="progress-segment"></span>';
    const fill = checked ? 100 : 6;
    return `<span class="progress-segment is-current" style="--fill:${fill}%"><i></i></span>`;
  }).join('');
  $('slide-progress').setAttribute('aria-valuenow', String(slideIndex + 1));
}

/* ---------- slides ---------- */
function figureMarkup() {
  const rows = [['Read', 'Rule'], ['Model', 'Plan'], ['Solve', 'Result'], ['Check', 'Ready']];
  return `<div class="slide-figure">
    <span class="figure-badge">?</span>
    ${rows.map(([a, b]) => `<div class="figure-row"><span>${a}</span><span class="figure-arrow"></span><span>${b}</span></div>`).join('')}
    <p class="figure-caption">A RELIABLE PROBLEM-SOLVING LOOP</p>
  </div>`;
}

function renderSlide() {
  const slide = slides[slideIndex];
  selected = null;
  checked = false;
  $('slide-feedback').hidden = true;
  $('mascot').className = 'mascot';

  if (slide.type === 'concept') {
    $('slide').innerHTML = `
      <span class="slide-kicker">TOPIC ${topicIndex + 1} · ${escapeHtml(chapter.title).toUpperCase()}</span>
      <h1 class="slide-prompt">${escapeHtml(slide.prompt)}</h1>
      <p class="slide-lead">${escapeHtml(slide.lead)}</p>
      <span class="placeholder-tag">LESSON ROADMAP</span>
      <ul class="concept-points">
        ${slide.points.map((point, index) => `<li><b>${index + 1}</b><span>${escapeHtml(point)}</span></li>`).join('')}
      </ul>`;
  } else {
    $('slide').innerHTML = `
      <h1 class="slide-prompt">${escapeHtml(slide.prompt)}</h1>
      ${slide.figure ? figureMarkup() : '<span class="placeholder-tag">QUICK CHECK</span>'}
      <div class="answer-grid" id="answer-grid">
        ${slide.options.map((option, index) => `<button class="answer-option" type="button" data-option="${index}">${escapeHtml(option)}</button>`).join('')}
      </div>
      <button class="start-over" id="start-over" type="button"><span class="material-symbols-outlined">refresh</span>Start over</button>`;
  }

  renderProgress();
  syncPrimaryAction();
}

function syncPrimaryAction() {
  const slide = slides[slideIndex];
  const button = $('primary-action');
  const last = slideIndex === slides.length - 1;

  if (slide.type === 'concept') {
    button.textContent = 'Continue';
    button.disabled = false;
    button.classList.add('is-ready');
    return;
  }
  if (checked) {
    button.textContent = last ? 'Finish lesson' : 'Continue';
    button.disabled = false;
    button.classList.add('is-ready');
    return;
  }
  button.textContent = 'Check';
  button.disabled = selected === null;
  button.classList.toggle('is-ready', selected !== null);
}

function selectOption(index) {
  if (checked) return;
  selected = index;
  $('answer-grid').querySelectorAll('.answer-option').forEach((option, i) => option.classList.toggle('is-selected', i === index));
  syncPrimaryAction();
}

function gradeSlide() {
  const slide = slides[slideIndex];
  const options = [...$('answer-grid').querySelectorAll('.answer-option')];
  const right = selected === slide.correct;
  checked = true;

  options.forEach((option, index) => {
    option.disabled = true;
    option.classList.remove('is-selected');
    if (index === slide.correct) option.classList.add('is-correct');
    else if (index === selected) option.classList.add('is-wrong');
  });

  if (right) xp += XP_PER_CORRECT;
  $('xp-count').textContent = String(xp);
  $('mascot').className = `mascot ${right ? 'is-happy' : 'is-sad'}`;
  const feedback = $('slide-feedback');
  feedback.textContent = right ? 'Correct!' : `Not quite — the answer is “${slide.options[slide.correct]}”.`;
  feedback.className = `slide-feedback ${right ? 'is-correct' : 'is-wrong'}`;
  feedback.hidden = false;
  renderProgress();
  syncPrimaryAction();
}

function advance() {
  if (slideIndex === slides.length - 1) return finishLesson();
  slideIndex += 1;
  renderSlide();
  $('slide').scrollTop = 0;
}

function onPrimaryAction() {
  const slide = slides[slideIndex];
  if (slide.type === 'concept' || checked) advance();
  else if (selected !== null) gradeSlide();
}

/* ---------- completion ---------- */
function markComplete() {
  let completed;
  try { completed = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []); } catch { completed = new Set(); }
  completed.add(`${topicIndex}:${lessonIndex}`);
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  /* Tells the study path which disc to celebrate when we land back on it. */
  sessionStorage.setItem(CELEBRATE_KEY, `${topicIndex}:${lessonIndex}`);
}

function nextLessonHref() {
  if (lessonIndex + 1 < chapter.lessons.length) return `lesson.html?topic=${topicIndex}&lesson=${lessonIndex + 1}`;
  if (topicIndex + 1 < STUDY_PATH.length) return `lesson.html?topic=${topicIndex + 1}&lesson=0`;
  return 'study-path.html';
}

function dropConfetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#88B0FF', '#FFB192', '#EBF3FF', '#FFF0EB', '#625C6E'];
  $('confetti').innerHTML = Array.from({ length: 34 }, (_, index) => {
    const color = colors[index % colors.length];
    const x = (index * 97) % 100;                 /* spread without Math.random */
    const delay = ((index % 7) * 90) + 'ms';
    const duration = 1500 + (index % 5) * 380 + 'ms';
    const spin = ((index % 2 ? 1 : -1) * (360 + index * 24)) + 'deg';
    return `<i style="--x:${x}%;--c:${color};--delay:${delay};--dur:${duration};--spin:${spin}"></i>`;
  }).join('');
}

function finishLesson() {
  markComplete();
  $('completion-kicker').textContent = `TOPIC ${topicIndex + 1} · ${chapter.title.toUpperCase()}`;
  $('completion-title').textContent = `${lessonTitle} complete`;
  $('completion-xp').textContent = `+${xp}`;
  $('completion-copy').textContent = xp === (slides.length - 1) * XP_PER_CORRECT
    ? 'Perfect run. This stop is marked explored on your study path.'
    : 'Nice work. This stop is marked explored on your study path.';
  $('completion-next').href = nextLessonHref();
  $('completion-back').href = `study-path.html#topic-${topicIndex + 1}`;
  $('completion-notes').href = lessonRoute(chapter, lessonTitle);
  $('completion-overlay').hidden = false;
  dropConfetti();
  $('completion-next').focus();
}

/* ---------- wiring ---------- */
$('slide').addEventListener('click', event => {
  const option = event.target.closest('[data-option]');
  if (option) return selectOption(Number(option.dataset.option));
  if (event.target.closest('#start-over')) renderSlide();
});
$('primary-action').addEventListener('click', onPrimaryAction);
$('lesson-exit').addEventListener('click', () => { location.href = `study-path.html#topic-${topicIndex + 1}`; });
$('read-aloud').addEventListener('click', () => {
  const text = $('slide').querySelector('.slide-prompt')?.textContent;
  if (text && 'speechSynthesis' in window) speechSynthesis.speak(new SpeechSynthesisUtterance(text));
});

document.addEventListener('keydown', event => {
  if (!$('completion-overlay').hidden) return;
  if (event.key === 'Enter' && !$('primary-action').disabled) { onPrimaryAction(); return; }
  const digit = Number(event.key);
  if (digit >= 1 && digit <= 4 && slides[slideIndex].type === 'mcq' && !checked) selectOption(digit - 1);
});

document.title = `${lessonTitle} | Saintly`;
slides = buildSlides();
renderSlide();
