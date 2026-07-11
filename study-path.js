import { STUDY_PATH, interactiveLessonRoute } from './study-path-data.js';
import { findDestinations } from './halo-knowledge.js';

const STORAGE_KEY = 'saintly-study-path-v1';
const CELEBRATE_KEY = 'saintly-just-completed';
const $ = id => document.getElementById(id);

/* The active topic is the one whose banner is currently pinned. Keeping the spy
   on the same line the banner sticks to (--banner-top, 152px) means the summary
   card flips in lockstep with the banner handoff instead of trailing behind it.
   The few px of slack absorb sub-pixel rounding during smooth scrolls. */
const BANNER_TOP = 152;
const SPY_LINE = BANNER_TOP + 4;

const topicFromHash = Number(location.hash.match(/^#topic-(\d+)$/)?.[1]);
let activeChapter = Number.isInteger(topicFromHash) && topicFromHash >= 1 && topicFromHash <= STUDY_PATH.length ? topicFromHash - 1 : 0;
let selectedLesson = null;
let sections = [];
let chapterButtons = [];
/* The spy must not run until the deep-link jump lands, or it reads the pre-jump
   scroll position and overwrites the hash with topic 1. */
let spyEnabled = false;

const descriptions = {
  'Exponents and Logarithms': 'Build fluency with powers, roots, radicals, and logarithms.',
  'Complex Numbers': 'Extend the number line and calculate confidently with imaginary values.',
  'Linear Equations': 'Turn relationships into equations and solve them efficiently.',
  'Proportions': 'Reason with ratios, rates, conversions, and percent.',
  'Using the Integers': 'Master divisibility, bases, modular arithmetic, primes, and factors.',
  'Quadratic Equations': 'Factor, rearrange, and solve equations beyond the linear world.',
  'Triangles, a.k.a. Geometry': 'Use structure, similarity, congruence, and trigonometry in triangles.',
  'The Power of Coordinates': 'Translate geometric ideas into points, lines, distance, and equations.',
  'Learning to Count': 'Count arrangements and selections without losing or duplicating cases.',
  'Statistics and Probability': 'Measure data and reason clearly about uncertain outcomes.',
  'Prove It': 'Build airtight arguments with contradiction, induction, and pigeonholes.'
};

function loadCompleted() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []); } catch { return new Set(); }
}
function saveCompleted(completed) { localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed])); }
function lessonKey(chapterIndex, lessonIndex) { return `${chapterIndex}:${lessonIndex}`; }
function totalLessons() { return STUDY_PATH.reduce((sum, chapter) => sum + chapter.lessons.length, 0); }
function chapterDescription(chapter) { return descriptions[chapter.title] || `Explore ${chapter.title.toLowerCase()} through a focused sequence of open lessons.`; }
function escapeHtml(value) { return value.replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch])); }

function updateProgress() {
  const completed = loadCompleted();
  const total = totalLessons();
  $('path-progress-number').textContent = `${completed.size} / ${total}`;
  $('path-progress-fill').style.width = `${Math.min(100, (completed.size / total) * 100)}%`;
}

function countExplored(chapterIndex, completed) {
  return STUDY_PATH[chapterIndex].lessons.filter((_, index) => completed.has(lessonKey(chapterIndex, index))).length;
}

function renderChapterList() {
  $('chapter-list').innerHTML = STUDY_PATH.map((chapter, index) => `
    <button class="chapter-button" type="button" data-chapter="${index}">
      <span>${String(index + 1).padStart(2, '0')}</span><span>${escapeHtml(chapter.title)}</span>
    </button>`).join('');
  chapterButtons = [...$('chapter-list').querySelectorAll('.chapter-button')];
}

function markActiveChapterButton() {
  chapterButtons.forEach((button, index) => {
    const active = index === activeChapter;
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
}

/* Every topic is rendered once, up front, into a single scrollable column. */
function renderTrack() {
  const completed = loadCompleted();
  $('level-stage').innerHTML = STUDY_PATH.map((chapter, chapterIndex) => {
    const nodes = chapter.lessons.map((lesson, lessonIndex) => {
      const done = completed.has(lessonKey(chapterIndex, lessonIndex));
      const label = escapeHtml(lesson);
      return `<button class="lesson-node${done ? ' is-complete' : ''}" type="button" data-topic="${chapterIndex}" data-lesson="${lessonIndex}" aria-label="${label}">
        <span class="lesson-node-platform" aria-hidden="true"></span><span class="lesson-node-label">${label}${done ? ' ✓' : ''}</span>
      </button>`;
    }).join('');
    return `<article class="topic-section" id="topic-${chapterIndex + 1}" data-topic="${chapterIndex}">
      <header class="level-banner">
        <span>TOPIC ${chapterIndex + 1}</span>
        <h2>${escapeHtml(chapter.title)}</h2>
        <div class="chapter-count" data-count="${chapterIndex}">${countExplored(chapterIndex, completed)}/${chapter.lessons.length} explored</div>
      </header>
      <div class="lesson-path">${nodes}</div>
    </article>`;
  }).join('');
  sections = [...$('level-stage').querySelectorAll('.topic-section')];
}

function paintSummaryCard() {
  const chapter = STUDY_PATH[activeChapter];
  $('course-card-kicker').textContent = `TOPIC ${activeChapter + 1} OF ${STUDY_PATH.length}`;
  $('course-card-title').textContent = chapter.title;
  $('course-card-description').textContent = chapterDescription(chapter);
  $('course-card-lessons').textContent = chapter.lessons.length;
  $('previous-chapter').disabled = activeChapter === 0;
  $('next-chapter').disabled = activeChapter === STUDY_PATH.length - 1;
  sections.forEach((section, index) => section.classList.toggle('is-current', index === activeChapter));
  markActiveChapterButton();
}

function setActiveChapter(index) {
  if (index === activeChapter) return;
  activeChapter = index;
  paintSummaryCard();
  history.replaceState(null, '', `#topic-${index + 1}`);
}

/* Scroll spy: the active topic is the last one whose banner has crossed the line. */
let spyQueued = false;
function syncActiveFromScroll() {
  spyQueued = false;
  let next = 0;
  for (let index = 0; index < sections.length; index++) {
    if (sections[index].getBoundingClientRect().top <= SPY_LINE) next = index;
    else break;
  }
  setActiveChapter(next);
}
function queueSpy() {
  if (spyQueued || !spyEnabled) return;
  spyQueued = true;
  requestAnimationFrame(syncActiveFromScroll);
}

function scrollToTopic(index) {
  const target = sections[Math.max(0, Math.min(sections.length - 1, index))];
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearLessonSelection() {
  selectedLesson = null;
  $('lesson-detail').hidden = true;
  $('level-stage').classList.remove('has-selection');
  $('level-stage').querySelectorAll('.lesson-node.is-selected').forEach(node => node.classList.remove('is-selected'));
}

function lessonNode(chapterIndex, lessonIndex) {
  return $('level-stage').querySelector(`.lesson-node[data-topic="${chapterIndex}"][data-lesson="${lessonIndex}"]`);
}

/* Retrigger-safe: the class has to leave the element before it can animate again. */
function celebrateNode(node) {
  node.classList.remove('just-completed');
  void node.offsetWidth;
  node.classList.add('just-completed');
}

/* The lesson player leaves a breadcrumb so the disc it just finished pops on arrival. */
function celebrateReturnFromLesson() {
  const key = sessionStorage.getItem(CELEBRATE_KEY);
  if (!key) return false;
  sessionStorage.removeItem(CELEBRATE_KEY);
  const [chapterIndex, lessonIndex] = key.split(':').map(Number);
  const node = lessonNode(chapterIndex, lessonIndex);
  if (!node) return false;
  node.scrollIntoView({ block: 'center', behavior: 'instant' });
  celebrateNode(node);
  return true;
}

function openLesson(chapterIndex, lessonIndex, { scroll = false } = {}) {
  const chapter = STUDY_PATH[chapterIndex];
  const lesson = chapter.lessons[lessonIndex];
  if (!lesson) return;
  selectedLesson = { chapterIndex, lessonIndex };
  $('level-stage').querySelectorAll('.lesson-node.is-selected').forEach(node => node.classList.remove('is-selected'));
  const node = lessonNode(chapterIndex, lessonIndex);
  node?.classList.add('is-selected');
  $('level-stage').classList.add('has-selection');
  $('lesson-detail-topic').textContent = `TOPIC ${chapterIndex + 1} · ${chapter.title}`;
  $('lesson-detail-title').textContent = lesson;
  $('lesson-open').href = interactiveLessonRoute(chapterIndex, lessonIndex) || `lesson.html?topic=${chapterIndex}&lesson=${lessonIndex}`;
  $('lesson-complete').textContent = loadCompleted().has(lessonKey(chapterIndex, lessonIndex)) ? 'Explored ✓' : 'Mark explored';
  $('lesson-detail').hidden = false;
  if (scroll) node?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* Patch just the touched node and its topic tally — a full re-render would drop scroll. */
function toggleCompleted() {
  if (!selectedLesson) return;
  const { chapterIndex, lessonIndex } = selectedLesson;
  const completed = loadCompleted();
  const key = lessonKey(chapterIndex, lessonIndex);
  const done = !completed.has(key);
  if (done) completed.add(key); else completed.delete(key);
  saveCompleted(completed);

  const chapter = STUDY_PATH[chapterIndex];
  const node = lessonNode(chapterIndex, lessonIndex);
  if (node) {
    node.classList.toggle('is-complete', done);
    node.querySelector('.lesson-node-label').textContent = `${chapter.lessons[lessonIndex]}${done ? ' ✓' : ''}`;
    if (done) celebrateNode(node);
  }
  const tally = $('level-stage').querySelector(`[data-count="${chapterIndex}"]`);
  if (tally) tally.textContent = `${countExplored(chapterIndex, completed)}/${chapter.lessons.length} explored`;
  $('lesson-complete').textContent = done ? 'Explored ✓' : 'Mark explored';
  updateProgress();
}

function openTopicPicker() { $('topic-picker').hidden = false; document.body.style.overflow = 'hidden'; }
function closeTopicPicker() { $('topic-picker').hidden = true; document.body.style.overflow = ''; }
function openHalo() { $('path-halo-panel').hidden = false; $('path-halo-input').focus(); }
function closeHalo() { $('path-halo-panel').hidden = true; }

function haloAnswer(query) {
  const normalized = query.toLowerCase();
  let match = null;
  STUDY_PATH.forEach((chapter, chapterIndex) => chapter.lessons.forEach((lesson, lessonIndex) => {
    const haystack = `${chapter.title} ${lesson}`.toLowerCase();
    const score = normalized.split(/\W+/).filter(word => word.length > 3 && haystack.includes(word)).length;
    if (!match || score > match.score) match = { chapter, chapterIndex, lesson, lessonIndex, score };
  }));
  if (match?.score > 0) {
    openLesson(match.chapterIndex, match.lessonIndex, { scroll: true });
    $('path-halo-title').textContent = `Try “${match.lesson}.”`;
    $('path-halo-copy').textContent = `I opened Topic ${match.chapterIndex + 1}, ${match.chapter.title}. Every stop is free to open.`;
    return;
  }
  const destination = findDestinations(query, 1)[0];
  $('path-halo-title').textContent = destination ? `Best Saintly match: ${destination.title}` : 'Try a topic name or the kind of problem you missed.';
  $('path-halo-copy').replaceChildren();
  if (destination) {
    const link = document.createElement('a');
    link.href = destination.url;
    link.textContent = `Open ${destination.title} →`;
    $('path-halo-copy').append(link);
  } else $('path-halo-copy').textContent = 'For example: “circle angles,” “factoring quadratics,” or “expected value.”';
}

$('chapter-list').addEventListener('click', event => {
  const button = event.target.closest('[data-chapter]');
  if (!button) return;
  closeTopicPicker();
  scrollToTopic(Number(button.dataset.chapter));
});
$('level-stage').addEventListener('click', event => {
  const node = event.target.closest('[data-lesson]');
  if (node) openLesson(Number(node.dataset.topic), Number(node.dataset.lesson));
});
$('lesson-detail-close').addEventListener('click', clearLessonSelection);
$('lesson-complete').addEventListener('click', toggleCompleted);
['chapter-menu-toggle', 'course-menu-button', 'open-topic-picker', 'course-progress-button'].forEach(id => $(id).addEventListener('click', openTopicPicker));
$('topic-picker-close').addEventListener('click', closeTopicPicker);
$('topic-picker').addEventListener('click', event => { if (event.target === $('topic-picker')) closeTopicPicker(); });
$('previous-chapter').addEventListener('click', () => scrollToTopic(activeChapter - 1));
$('next-chapter').addEventListener('click', () => scrollToTopic(activeChapter + 1));
$('path-halo-toggle').addEventListener('click', openHalo);
$('path-halo-close').addEventListener('click', closeHalo);
$('path-halo-form').addEventListener('submit', event => {
  event.preventDefault();
  const query = $('path-halo-input').value.trim();
  if (!query) return;
  haloAnswer(query);
  $('path-halo-input').value = '';
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  closeTopicPicker();
  closeHalo();
  clearLessonSelection();
});
window.addEventListener('scroll', queueSpy, { passive: true });
window.addEventListener('resize', queueSpy);

renderTrack();
renderChapterList();
paintSummaryCard();
updateProgress();

/* Jump to the deep-linked topic instantly — `scroll-behavior: smooth` would turn
   this into a long animation the scroll spy fights with, leaving the hash wrong.
   Arm the spy only once we have landed. */
function anchorDeepLink() {
  sections[activeChapter]?.scrollIntoView({ block: 'start', behavior: 'instant' });
}
requestAnimationFrame(() => {
  if (activeChapter > 0) anchorDeepLink();
  /* Runs after the anchor so it can override the scroll onto the finished disc. */
  const celebrated = celebrateReturnFromLesson();
  spyEnabled = true;

  /* Web fonts land after first paint and resize every section, which drifts the
     anchor. Re-anchor once, but only if the reader has not scrolled away. */
  if (activeChapter > 0 && !celebrated && document.fonts?.ready) {
    const landed = window.scrollY;
    document.fonts.ready.then(() => {
      if (Math.abs(window.scrollY - landed) < 4) anchorDeepLink();
    });
  }
});
