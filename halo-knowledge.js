// Shared Saintly map and study-planning context for Coach Halo.
// Keep navigation knowledge here so every Halo surface gives consistent directions.

export const SAINTLY_DESTINATIONS = [
  { title: 'AMC 10 overview', url: 'amc-10.html', kind: 'guide', keywords: ['amc 10', 'start', 'overview', 'prepare', 'prep'] },
  { title: 'Practice Arena', url: 'amc-10-practice-test.html', kind: 'practice', keywords: ['practice test', 'full test', 'competition', 'timed', 'exam'] },
  { title: 'Topic Trainer', url: 'amc-10-practice-test.html#trainer', kind: 'practice', keywords: ['drill', 'trainer', 'adaptive', 'topic practice'] },
  { title: 'Mistake Log', url: 'amc-10-practice-test.html#mistakes', kind: 'review', keywords: ['mistake', 'wrong', 'error', 'review', 'redo'] },
  { title: 'Adaptive Practice', url: 'amc-10-adaptive-practice.html', kind: 'practice', keywords: ['adaptive practice', 'mixed practice'] },
  { title: 'Daily Review', url: 'review.html', kind: 'review', keywords: ['daily review', 'spaced repetition', 'due', 'flashcard', 'retention', 'review queue'] },
  { title: 'Progress Dashboard', url: 'dashboard.html', kind: 'progress', keywords: ['dashboard', 'progress', 'stats', 'rating', 'mastery'] },
  { title: 'Study Path', url: 'study-path.html', kind: 'lesson path', keywords: ['lessons', 'all topics', 'learn', 'study path', 'curriculum'] },
  { title: 'Topics Dashboard', url: 'topics-dashboard.html', kind: 'classic lesson hub', keywords: ['topics dashboard', 'classic topics', 'old topics'] },
  { title: 'AMC 10 Algebra', url: 'amc-10-algebra.html', kind: 'practice', keywords: ['algebra practice', 'algebra drill'] },
  { title: 'Algebraic Manipulation', url: 'algebraic-manipulation.html', kind: 'lesson', keywords: ['algebra', 'manipulation', 'expressions', 'simplify'] },
  { title: 'Systems of Equations', url: 'systems-of-equations.html', kind: 'lesson', keywords: ['systems', 'simultaneous equations', 'substitution', 'elimination'] },
  { title: 'Functions and Graphing', url: 'functions-and-graphing.html', kind: 'lesson', keywords: ['function', 'graph', 'domain', 'range'] },
  { title: 'Factoring', url: 'factoring.html', kind: 'lesson', keywords: ['factor', 'factoring', 'quadratic'] },
  { title: 'Exponents', url: 'exponents.html', kind: 'lesson', keywords: ['exponent', 'power', 'indices'] },
  { title: 'Inequalities', url: 'inequalities.html', kind: 'lesson', keywords: ['inequality', 'bound'] },
  { title: 'Absolute Value', url: 'absolute-value.html', kind: 'lesson', keywords: ['absolute value', 'modulus'] },
  { title: 'Arithmetic', url: 'arithmetic.html', kind: 'lesson', keywords: ['arithmetic', 'calculation', 'divisibility rules'] },
  { title: 'Averages', url: 'averages.html', kind: 'lesson', keywords: ['average', 'mean', 'median'] },
  { title: 'Sequences and Series', url: 'series.html', kind: 'lesson', keywords: ['sequence', 'series', 'arithmetic sequence', 'geometric sequence'] },
  { title: 'AMC 10 Geometry', url: 'amc-10-geometry.html', kind: 'practice', keywords: ['geometry practice', 'geometry drill'] },
  { title: 'Pythagorean Theorem', url: 'pythagorean-theorem.html', kind: 'lesson', keywords: ['pythagorean', 'right triangle'] },
  { title: 'Similar Triangles', url: 'similar-triangles.html', kind: 'lesson', keywords: ['similar triangle', 'similarity', 'scale factor'] },
  { title: 'Triangle Lines', url: 'triangle-lines.html', kind: 'lesson', keywords: ['triangle line', 'median', 'altitude', 'angle bisector', 'perpendicular bisector'] },
  { title: 'Transformations', url: 'transformations.html', kind: 'lesson', keywords: ['transformation', 'rotation', 'reflection', 'translation', 'dilation'] },
  { title: 'AMC 10 Number Theory', url: 'amc-10-number-theory.html', kind: 'practice', keywords: ['number theory practice', 'number theory drill'] },
  { title: 'Prime Factorization', url: 'prime-factorization.html', kind: 'lesson', keywords: ['prime', 'factorization', 'gcd', 'lcm'] },
  { title: 'Modular Arithmetic', url: 'modular-arithmetic.html', kind: 'lesson', keywords: ['modular', 'modulo', 'remainder', 'congruence'] },
  { title: 'Induction', url: 'induction.html', kind: 'lesson', keywords: ['induction', 'proof'] },
  { title: 'Combinatorics and Probability', url: 'amc-10-combinatorics.html', kind: 'practice', keywords: ['combinatorics', 'probability', 'counting practice'] },
  { title: 'Counting', url: 'counting.html', kind: 'lesson', keywords: ['counting', 'permutation', 'combination'] },
  { title: 'Casework', url: 'casework.html', kind: 'lesson', keywords: ['casework', 'cases'] },
  { title: 'Logic', url: 'logic.html', kind: 'lesson', keywords: ['logic', 'truth', 'statement'] },
  { title: 'Word Problems', url: 'word-problems.html', kind: 'lesson', keywords: ['word problem', 'modeling'] },
  { title: 'Speed, Distance, and Time', url: 'speed-distance-time.html', kind: 'lesson', keywords: ['speed', 'distance', 'time', 'rate'] }
];

const TRAINER_KEY = 'saintly-trainer-v1';
const MISTAKE_KEY = 'saintly-mistake-log-v1';
const COMPLETION_KEY = 'saintly-amc10-completions-v1';

function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}

export function getStudySnapshot() {
  const trainer = readJSON(TRAINER_KEY, { topics: {} });
  const mistakes = Object.values(readJSON(MISTAKE_KEY, {}));
  const completions = Object.values(readJSON(COMPLETION_KEY, {}));
  const topics = Object.entries(trainer.topics || {})
    .filter(([name]) => name !== 'ALL')
    .map(([name, state]) => ({
      name,
      rating: Math.round(state.rating || 1200),
      attempts: state.attempts || 0,
      accuracy: state.attempts ? Math.round((state.correct / state.attempts) * 100) : null
    }));
  return {
    topics,
    openMistakes: mistakes.filter(item => !item.solved).length,
    conqueredMistakes: mistakes.filter(item => item.solved).length,
    testsCompleted: completions.length,
    latestScore: completions.length ? completions.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0]?.score : null
  };
}

export function getSuggestedSteps(snapshot = getStudySnapshot()) {
  const practiced = snapshot.topics.filter(topic => topic.attempts > 0).sort((a, b) => a.rating - b.rating);
  const weakest = practiced[0];
  const steps = [];
  if (snapshot.openMistakes > 0) {
    steps.push({ title: `Clear ${Math.min(snapshot.openMistakes, 3)} mistake${snapshot.openMistakes === 1 ? '' : 's'}`, detail: 'Start with active recall while the misses are still fresh.', url: 'amc-10-practice-test.html#mistakes', label: 'Open mistake log' });
  }
  if (weakest) {
    steps.push({ title: `Drill ${weakest.name}`, detail: `This is currently your lowest practiced mastery at ${weakest.rating}${weakest.accuracy === null ? '' : ` · ${weakest.accuracy}% accuracy`}.`, url: 'amc-10-practice-test.html#trainer', label: 'Start a topic drill' });
  } else {
    steps.push({ title: 'Find your baseline', detail: 'Try a short mixed drill so Halo can learn which section deserves attention.', url: 'amc-10-practice-test.html#trainer', label: 'Start mixed practice' });
  }
  steps.push(snapshot.testsCompleted
    ? { title: 'Take another timed test', detail: `You have completed ${snapshot.testsCompleted}. Use the next one to check whether practice transfers under time pressure.`, url: 'amc-10-practice-test.html', label: 'Choose a practice test' }
    : { title: 'Take a baseline practice test', detail: 'A full timed attempt gives your drills a clear purpose.', url: 'amc-10-practice-test.html', label: 'Choose a practice test' });
  return steps.slice(0, 3);
}

export function findDestinations(query, limit = 3) {
  const words = query.toLowerCase().split(/[^a-z0-9]+/).filter(word => word.length > 2);
  return SAINTLY_DESTINATIONS.map(destination => {
    const haystack = `${destination.title} ${destination.kind} ${destination.keywords.join(' ')}`.toLowerCase();
    const score = destination.keywords.reduce((sum, keyword) => sum + (query.toLowerCase().includes(keyword) ? 5 : 0), 0) + words.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), 0);
    return { ...destination, score };
  }).filter(item => item.score > 0).sort((a, b) => b.score - a.score).slice(0, limit);
}

export function buildHaloKnowledgePrompt() {
  const routes = SAINTLY_DESTINATIONS.map(item => `- ${item.title} (${item.kind}): ${item.url}`).join('\n');
  return `SAINTLY APP MAP:\n${routes}\n\nNavigation rules:\n- When a student asks where to learn something, give the exact relevant lesson link.\n- For targeted questions, send them to Topic Trainer. For old misses, send them to Mistake Log. For exam readiness, send them to Practice Arena.\n- Recommend a short sequence: learn or review, drill, then validate with a timed test.\n- Never invent a Saintly page or claim progress data you were not given.`;
}
