/* Saintly identity deck — a persistent, cross-chapter collection of the algebraic
   identities the student DERIVES (never just reads). A lesson beat opts in with
   `card: 'diff-of-squares'`; the engine calls earnCard() when the beat completes.

   Storage: localStorage 'saintly-identity-deck-v1' → array of earned card ids.
   Cards are defined here, once, so later chapters (polynomials, symmetric functions)
   can draw on the same deck. */

const DECK_KEY = 'saintly-identity-deck-v1';

export const IDENTITY_CARDS = {
  'diff-of-squares': {
    title: 'Difference of Squares',
    formula: '\\( a^2 - b^2 = (a-b)(a+b) \\)',
    mnemonic: 'The cross terms annihilate. Works on numbers too: \\( 51^2 - 49^2 = 2 \\cdot 100 \\).',
    chapter: 7,
  },
  'sum-of-squares': {
    title: 'Sum of Squares — a REWRITE',
    formula: '\\( a^2 + b^2 = (a+b)^2 - 2ab \\)',
    mnemonic: 'Not a factorization — it does not factor over the reals. It is a way to TRADE between sums and products.',
    chapter: 7,
  },
  'diff-of-cubes': {
    title: 'Difference of Cubes',
    formula: '\\( a^3 - b^3 = (a-b)(a^2 + ab + b^2) \\)',
    mnemonic: 'Binomial sign matches the original (−). Trinomial then has the OPPOSITE middle sign (+ab), and never 2ab.',
    chapter: 7,
  },
  'sum-of-cubes': {
    title: 'Sum of Cubes',
    formula: '\\( a^3 + b^3 = (a+b)(a^2 - ab + b^2) \\)',
    mnemonic: 'Binomial sign matches the original (+). Trinomial takes the opposite (−ab).',
    chapter: 7,
  },
  'conjugate-reciprocal': {
    title: 'Conjugate Reciprocals',
    formula: '\\( \\dfrac{1}{\\sqrt{n+1} + \\sqrt{n}} = \\sqrt{n+1} - \\sqrt{n} \\)',
    mnemonic: 'When the radicands differ by 1, the conjugate IS the reciprocal — the denominator is 1. Fuel for telescoping.',
    chapter: 7,
  },
  'square-of-sum': {
    title: 'The Square Tool',
    formula: '\\( (x+y)^2 = (x^2 + y^2) + 2xy \\)',
    mnemonic: 'Sum, product, power-sum: know any two, get the third. Never solve for x and y.',
    chapter: 7,
  },
  'cube-of-sum': {
    title: 'The Cube Tool',
    formula: '\\( (x+y)^3 = (x^3 + y^3) + 3xy(x+y) \\)',
    mnemonic: 'The cube of a sum is NOT the sum of cubes — the correction is 3xy(x+y).',
    chapter: 7,
  },
  'reciprocal-sum': {
    title: 'The Tiny Giant',
    formula: '\\( \\dfrac{1}{A} + \\dfrac{1}{B} = \\dfrac{A+B}{AB} \\)',
    mnemonic: 'Sum and product are all you ever need. You will use this constantly.',
    chapter: 7,
  },
  'power-sum-product': {
    title: 'Cross-Multiplying Power Sums',
    formula: '\\( \\left(x^m + \\tfrac{1}{x^m}\\right)\\left(x^n + \\tfrac{1}{x^n}\\right) = \\left(x^{m+n} + \\tfrac{1}{x^{m+n}}\\right) + \\left(x^{m-n} + \\tfrac{1}{x^{m-n}}\\right) \\)',
    mnemonic: 'The product overshoots by a LOWER power sum. Subtract it off. This is how you reach odd powers.',
    chapter: 7,
  },
  'root-difference': {
    title: 'Root Difference = Discriminant',
    formula: '\\( (r - s)^2 = (r+s)^2 - 4rs \\)',
    mnemonic: 'For \\( ax^2+bx+c \\): this is exactly \\( \\frac{b^2-4ac}{a^2} \\). The discriminant was a power-sum walk all along.',
    chapter: 7,
  },
  'grouping': {
    title: 'Grouping',
    formula: '\\( x^2 + 2mn - m^2 - n^2 = x^2 - (m-n)^2 \\)',
    mnemonic: 'Stare at the terms until a KNOWN shape forms out of a partial sum. Then a deck card finishes it.',
    chapter: 7,
  },
};

function read() {
  try {
    const raw = JSON.parse(localStorage.getItem(DECK_KEY));
    return Array.isArray(raw) ? raw.filter(id => IDENTITY_CARDS[id]) : [];
  } catch { return []; }
}

/** Ids of every card the student has earned, in the order they earned them. */
export function earnedCards() {
  return read();
}

export function hasCard(id) {
  return read().includes(id);
}

/** Adds a card. Returns true only if it was NEWLY earned (so the UI can celebrate once). */
export function earnCard(id) {
  if (!IDENTITY_CARDS[id]) return false;
  const owned = read();
  if (owned.includes(id)) return false;
  owned.push(id);
  localStorage.setItem(DECK_KEY, JSON.stringify(owned));
  return true;
}

/** HTML for one card face. `locked` renders the silhouette for a card not yet earned. */
export function cardHtml(id, { locked = false } = {}) {
  const card = IDENTITY_CARDS[id];
  if (!card) return '';
  if (locked) {
    return `<div class="il-card-face is-locked"><span class="il-card-title">Not yet derived</span>
      <span class="il-card-formula">? ? ?</span></div>`;
  }
  return `<div class="il-card-face">
    <span class="il-card-title">${card.title}</span>
    <span class="il-card-formula">${card.formula}</span>
    <span class="il-card-mnemonic">${card.mnemonic}</span>
  </div>`;
}

/** The full deck, earned first, for the deck panel. */
export function deckHtml() {
  const owned = read();
  const all = Object.keys(IDENTITY_CARDS);
  if (!owned.length) {
    return `<p class="il-deck-empty">Your deck is empty. Identities you <em>derive</em> in Chapter 7 get collected here —
      and later chapters draw from the same deck.</p>`;
  }
  const ownedHtml = owned.map(id => cardHtml(id)).join('');
  const lockedCount = all.length - owned.length;
  return ownedHtml + (lockedCount
    ? `<p class="il-deck-empty">${lockedCount} more ${lockedCount === 1 ? 'identity' : 'identities'} left to derive.</p>`
    : `<p class="il-deck-empty">Full deck. Every identity in this chapter, derived by you.</p>`);
}
