const DATA_URL = 'data/amc-10-problems.json';
const TEST_DURATION_SECONDS = 75 * 60;
const COMPLETION_STORAGE_KEY = 'saintly-amc10-completions-v1';
const SUPABASE_URL = 'https://joevkictcfaoofqhbhgw.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_8Iat4psKXuFn91uT8yuw7g_2n3Buc5w';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}), { once: true });
}

const screens = {
  picker: document.getElementById('competition-picker'),
  directions: document.getElementById('directions-screen'),
  competition: document.getElementById('competition-screen'),
  results: document.getElementById('results-screen')
};

const elements = {
  grid: document.getElementById('competition-grid'),
  yearFilter: document.getElementById('year-filter'),
  completionSummary: document.getElementById('completion-summary'),
  directionsLabel: document.getElementById('directions-competition-label'),
  directionsGoodLuckLabel: document.getElementById('directions-good-luck-label'),
  activeLabel: document.getElementById('active-competition-label'),
  changeCompetition: document.getElementById('change-competition'),
  startCompetition: document.getElementById('start-competition'),
  showDirections: document.getElementById('show-directions'),
  exitCompetition: document.getElementById('exit-competition'),
  questionHeading: document.getElementById('question-heading'),
  questionNumber: document.getElementById('question-number'),
  questionCopy: document.getElementById('question-copy'),
  questionDiagram: document.getElementById('question-diagram'),
  answerOptions: document.getElementById('answer-options'),
  answerReview: document.getElementById('answer-review'),
  solutionCopy: document.getElementById('solution-copy'),
  timer: document.getElementById('competition-timer'),
  previous: document.getElementById('previous-question'),
  next: document.getElementById('next-question'),
  openReview: document.getElementById('open-review'),
  closeReview: document.getElementById('close-review'),
  reviewPanel: document.getElementById('review-panel'),
  reviewGrid: document.getElementById('review-grid'),
  answeredCount: document.getElementById('answered-count'),
  submitCompetition: document.getElementById('submit-competition'),
  submitDialog: document.getElementById('submit-dialog'),
  submitDialogCopy: document.getElementById('submit-dialog-copy'),
  finalScore: document.getElementById('final-score'),
  correctCount: document.getElementById('correct-count'),
  incorrectCount: document.getElementById('incorrect-count'),
  blankCount: document.getElementById('blank-count'),
  completionMessage: document.getElementById('completion-message'),
  reviewResults: document.getElementById('review-results'),
  chooseAnother: document.getElementById('choose-another'),
  highlighterTool: document.getElementById('highlighter-tool'),
  lineReaderTool: document.getElementById('line-reader-tool'),
  lineReader: document.getElementById('line-reader'),
  questionPaper: document.getElementById('question-paper'),
  logout: document.getElementById('portal-logout')
};

let competitions = [];
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
let lastResults = null;

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove('is-active'));
  screens[name].classList.add('is-active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function competitionKey(problem) {
  return `${problem.year}|${problem.contest}`;
}

function contestName(contest) {
  return contest
    .replace(/^AMC10/, 'AMC 10')
    .replace(/(A|B) Fall$/, '$1 — Fall')
    .replace(/^(AMC 10)(A|B)$/, '$1$2');
}

function competitionLabel(competition) {
  const name = contestName(competition.contest);
  return name.includes('Fall') ? `${name} ${competition.year}` : `${name} — ${competition.year}`;
}

function loadCompletions() {
  try {
    return JSON.parse(localStorage.getItem(COMPLETION_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveCompletion(score) {
  const completions = loadCompletions();
  completions[selectedCompetition.key] = {
    completedAt: new Date().toISOString(),
    score
  };
  localStorage.setItem(COMPLETION_STORAGE_KEY, JSON.stringify(completions));
}

async function loadCompetitions() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error(`Problem data returned ${response.status}`);
    const problems = await response.json();
    const grouped = new Map();

    for (const problem of problems) {
      const key = competitionKey(problem);
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(problem);
    }

    competitions = [...grouped.entries()].map(([key, questions]) => ({
      key,
      year: questions[0].year,
      contest: questions[0].contest,
      questions: questions.sort((a, b) => a.number - b.number)
    })).filter(competition =>
      competition.questions.length === 25 &&
      competition.questions.every(question => Array.isArray(question.choices) && question.choices.length === 5)
    )
      .sort((a, b) => b.year - a.year || a.contest.localeCompare(b.contest));

    populateYearFilter();
    renderCompetitionGrid();
  } catch (error) {
    console.error(error);
    elements.grid.innerHTML = '<div class="portal-loading">We could not load the competition archive. Refresh the page to try again.</div>';
  }
}

function populateYearFilter() {
  const years = [...new Set(competitions.map(competition => competition.year))].sort((a, b) => b - a);
  elements.yearFilter.insertAdjacentHTML('beforeend', years.map(year => `<option value="${year}">${year}</option>`).join(''));
}

function renderCompetitionGrid() {
  const completions = loadCompletions();
  const selectedYear = elements.yearFilter.value;
  const visible = competitions.filter(competition => selectedYear === 'all' || String(competition.year) === selectedYear);

  elements.grid.innerHTML = visible.map(competition => {
    const completion = completions[competition.key];
    const label = contestName(competition.contest);
    const score = completion ? `${formatScore(completion.score)} / 150` : '25 questions · 75 minutes';
    return `
      <button class="competition-card${completion ? ' is-complete' : ''}" type="button" data-competition-key="${competition.key}">
        ${completion ? '<span class="completion-check" aria-label="Completed">✓</span>' : ''}
        <span class="competition-card-year">${competition.year}</span>
        <span class="competition-card-name">${label}</span>
        <span class="competition-card-status">${completion ? `Completed · ${score}` : score}</span>
      </button>`;
  }).join('');

  const completedCount = competitions.filter(competition => completions[competition.key]).length;
  elements.completionSummary.textContent = `${completedCount} of ${competitions.length} competitions completed`;
}

function selectCompetition(key) {
  selectedCompetition = competitions.find(competition => competition.key === key);
  if (!selectedCompetition) return;

  const label = competitionLabel(selectedCompetition);
  elements.directionsLabel.textContent = label;
  elements.directionsGoodLuckLabel.textContent = label;
  elements.activeLabel.textContent = label;
  elements.startCompetition.textContent = 'Start competition';
  showScreen('directions');
}

function startCompetition() {
  if (!selectedCompetition) return;
  if (competitionStarted && !competitionFinished) {
    showScreen('competition');
    return;
  }

  answers = Array(25).fill(null);
  currentQuestionIndex = 0;
  remainingSeconds = TEST_DURATION_SECONDS;
  competitionStarted = true;
  competitionFinished = false;
  reviewMode = false;
  lastResults = null;
  elements.exitCompetition.textContent = 'Sign Out';
  elements.submitCompetition.hidden = false;
  elements.startCompetition.textContent = 'Return to competition';
  hideReviewPanel();
  renderTimer();
  renderQuestion();
  renderReviewGrid();
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
  const minutes = Math.floor(Math.max(0, remainingSeconds) / 60);
  const seconds = Math.max(0, remainingSeconds) % 60;
  elements.timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  elements.timer.setAttribute('datetime', `PT${minutes}M${seconds}S`);
}

function renderQuestion() {
  const question = selectedCompetition.questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const letters = ['A', 'B', 'C', 'D', 'E'];

  elements.questionHeading.textContent = `Question ${question.number}`;
  elements.questionNumber.textContent = `Question ${question.number} of 25`;
  elements.questionCopy.textContent = question.question;
  elements.previous.disabled = currentQuestionIndex === 0;
  elements.next.disabled = currentQuestionIndex === 24;

  if (question.diagram_url) {
    elements.questionDiagram.src = question.diagram_url;
    elements.questionDiagram.hidden = false;
  } else {
    elements.questionDiagram.removeAttribute('src');
    elements.questionDiagram.hidden = true;
  }

  elements.answerOptions.innerHTML = question.choices.map((choice, index) => {
    const selected = selectedAnswer === index ? ' is-selected' : '';
    const correct = reviewMode && question.answer === index ? ' is-correct' : '';
    const incorrect = reviewMode && selectedAnswer === index && question.answer !== index ? ' is-incorrect' : '';
    return `
      <button class="answer-choice${selected}${correct}${incorrect}" type="button" role="radio" aria-checked="${selectedAnswer === index}" data-answer-index="${index}" ${reviewMode ? 'disabled' : ''}>
        <span class="answer-choice-letter">${letters[index]}</span>
        <span class="answer-choice-copy"></span>
      </button>`;
  }).join('');

  [...elements.answerOptions.querySelectorAll('.answer-choice-copy')].forEach((node, index) => {
    node.textContent = question.choices[index];
  });

  if (reviewMode) {
    elements.solutionCopy.textContent = question.solution || 'No written solution is available for this problem.';
    elements.answerReview.hidden = false;
  } else {
    elements.answerReview.hidden = true;
  }

  updateAnsweredCount();
  renderReviewGrid();
  typesetQuestion();
}

function typesetQuestion() {
  if (!window.MathJax?.typesetPromise) return;
  window.MathJax.typesetClear?.([elements.questionPaper]);
  window.MathJax.typesetPromise([elements.questionPaper]).catch(error => console.warn('Math rendering failed', error));
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateAnsweredCount() {
  elements.answeredCount.textContent = `${answers.filter(answer => answer !== null).length}/25`;
}

function renderReviewGrid() {
  elements.reviewGrid.innerHTML = selectedCompetition.questions.map((question, index) => {
    const answered = answers[index] !== null;
    const current = currentQuestionIndex === index;
    return `<button class="review-question${answered ? ' is-answered' : ''}${current ? ' is-current' : ''}" type="button" data-question-index="${index}">${question.number}</button>`;
  }).join('');
}

function showReviewPanel() {
  renderReviewGrid();
  elements.reviewPanel.hidden = false;
}

function hideReviewPanel() {
  elements.reviewPanel.hidden = true;
}

function requestSubmission() {
  const blanks = answers.filter(answer => answer === null).length;
  elements.submitDialogCopy.textContent = blanks
    ? `You have ${blanks} unanswered question${blanks === 1 ? '' : 's'}. Blank answers receive 1.5 points.`
    : 'All 25 questions have an answer. Your submission will be final.';
  elements.submitDialog.showModal();
}

function finishCompetition(timeExpired = false) {
  if (competitionFinished) return;
  clearInterval(timerInterval);
  timerInterval = null;
  competitionFinished = true;

  let correct = 0;
  let incorrect = 0;
  let blank = 0;
  selectedCompetition.questions.forEach((question, index) => {
    if (answers[index] === null) blank += 1;
    else if (answers[index] === question.answer) correct += 1;
    else incorrect += 1;
  });

  const score = correct * 6 + blank * 1.5;
  lastResults = { correct, incorrect, blank, score };
  saveCompletion(score);

  elements.finalScore.textContent = formatScore(score);
  elements.correctCount.textContent = correct;
  elements.incorrectCount.textContent = incorrect;
  elements.blankCount.textContent = blank;
  elements.completionMessage.textContent = timeExpired
    ? `Time expired. ${competitionLabel(selectedCompetition)} is now marked complete.`
    : `${competitionLabel(selectedCompetition)} is now marked complete. Your result is saved on this device.`;
  showScreen('results');
  renderCompetitionGrid();
}

function formatScore(score) {
  return Number.isInteger(score) ? String(score) : score.toFixed(1);
}

function enterAnswerReview() {
  reviewMode = true;
  currentQuestionIndex = 0;
  elements.exitCompetition.textContent = 'Results';
  elements.submitCompetition.hidden = true;
  hideReviewPanel();
  renderQuestion();
  showScreen('competition');
}

function returnToPicker() {
  clearInterval(timerInterval);
  timerInterval = null;
  competitionStarted = false;
  competitionFinished = false;
  reviewMode = false;
  selectedCompetition = null;
  disableReadingTools();
  renderCompetitionGrid();
  showScreen('picker');
}

function abandonCompetition() {
  if (reviewMode) {
    showScreen('results');
    return;
  }
  if (!competitionStarted || window.confirm('Leave this competition? Your current answers will not be saved.')) returnToPicker();
}

function toggleHighlighter() {
  highlighterEnabled = !highlighterEnabled;
  elements.highlighterTool.setAttribute('aria-pressed', String(highlighterEnabled));
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
  if (!elements.questionPaper.contains(container)) return;

  try {
    const mark = document.createElement('mark');
    mark.className = 'practice-highlight';
    range.surroundContents(mark);
    selection.removeAllRanges();
  } catch {
    // Complex selections that cross MathJax nodes are left unchanged.
  }
}

function toggleLineReader() {
  lineReaderEnabled = !lineReaderEnabled;
  elements.lineReader.hidden = !lineReaderEnabled;
  elements.lineReaderTool.setAttribute('aria-pressed', String(lineReaderEnabled));
}

function moveLineReader(clientY) {
  if (!lineReaderEnabled) return;
  const y = Math.max(28, Math.min(window.innerHeight - 28, clientY));
  elements.lineReader.style.top = `${y}px`;
}

function disableReadingTools() {
  highlighterEnabled = false;
  lineReaderEnabled = false;
  elements.highlighterTool.setAttribute('aria-pressed', 'false');
  elements.lineReaderTool.setAttribute('aria-pressed', 'false');
  elements.lineReader.hidden = true;
  document.body.classList.remove('highlighter-active');
}

async function logout() {
  try {
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js');
    await createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY).auth.signOut();
  } catch (error) {
    console.warn('Could not reach Supabase during logout', error);
  }
  window.location.href = 'index.html';
}

elements.grid.addEventListener('click', event => {
  const card = event.target.closest('[data-competition-key]');
  if (card) selectCompetition(card.dataset.competitionKey);
});
elements.yearFilter.addEventListener('change', renderCompetitionGrid);
elements.startCompetition.addEventListener('click', startCompetition);
elements.changeCompetition.addEventListener('click', () => {
  if (!competitionStarted || competitionFinished || window.confirm('Choose another competition? Your current answers will be discarded.')) returnToPicker();
});
elements.showDirections.addEventListener('click', () => showScreen('directions'));
elements.exitCompetition.addEventListener('click', abandonCompetition);
elements.previous.addEventListener('click', () => moveQuestion(-1));
elements.next.addEventListener('click', () => moveQuestion(1));
elements.answerOptions.addEventListener('click', event => {
  const choice = event.target.closest('[data-answer-index]');
  if (choice) chooseAnswer(Number(choice.dataset.answerIndex));
});
elements.openReview.addEventListener('click', showReviewPanel);
elements.closeReview.addEventListener('click', hideReviewPanel);
elements.reviewGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-question-index]');
  if (!button) return;
  currentQuestionIndex = Number(button.dataset.questionIndex);
  hideReviewPanel();
  renderQuestion();
});
elements.submitCompetition.addEventListener('click', requestSubmission);
elements.submitDialog.addEventListener('close', () => {
  if (elements.submitDialog.returnValue === 'confirm') finishCompetition(false);
});
elements.reviewResults.addEventListener('click', enterAnswerReview);
elements.chooseAnother.addEventListener('click', returnToPicker);
elements.highlighterTool.addEventListener('click', toggleHighlighter);
elements.lineReaderTool.addEventListener('click', toggleLineReader);
elements.questionPaper.addEventListener('mouseup', applyHighlightFromSelection);
document.addEventListener('pointermove', event => moveLineReader(event.clientY));
document.addEventListener('keydown', event => {
  if (!lineReaderEnabled || !['ArrowUp', 'ArrowDown'].includes(event.key)) return;
  event.preventDefault();
  const current = Number.parseFloat(elements.lineReader.style.top) || window.innerHeight / 2;
  moveLineReader(current + (event.key === 'ArrowDown' ? 16 : -16));
});
elements.logout.addEventListener('click', logout);

window.addEventListener('beforeunload', event => {
  if (!competitionStarted || competitionFinished) return;
  event.preventDefault();
  event.returnValue = '';
});

loadCompetitions();
