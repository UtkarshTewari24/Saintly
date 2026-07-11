/* Lesson 5.6 — Primes and Prime Factorization.
   Factor tree + factoring pipeline run on the balance component; Euclid's proof
   as an arrange-the-steps interaction. */

export default {
  id: 'lesson-5-4',
  title: 'Primes and Prime Factorization',
  kicker: 'Using the Integers',
  topicIndex: 4,
  lessonIndex: 3,
  next: 'interactive-lesson.html?chapter=5&lesson=5',
  notes: 'prime-factorization.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Factor 48 — your choice of first split. Both roads are open.',
      body: 'Break composites until every piece is prime. Watch what the two different starts do to the destination.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 48 \\)' },
          a1: { eq: '\\( 48 = 6 \\times 8 \\)' },
          a2: { eq: '\\( 48 = (2 \\cdot 3)(2 \\cdot 2 \\cdot 2) \\)' },
          b1: { eq: '\\( 48 = 4 \\times 12 \\)' },
          b2: { eq: '\\( 48 = (2 \\cdot 2)(2 \\cdot 2 \\cdot 3) \\)' },
          win: { eq: '\\( 48 = 2^4 \\cdot 3 \\)', note: 'Six-times-eight or four-times-twelve — the leaves are identical: four 2s and a 3. Every route lands here. That&rsquo;s not a coincidence; it&rsquo;s a theorem: every integer above 1 has exactly ONE prime factorization. (Which is also why a factorization isn&rsquo;t finished at \\( 6 \\times 8 \\) — those leaves are still composite.)' },
        },
        ops: [
          { label: 'Split as \\( 6 \\times 8 \\)', to: { s0: 'a1' } },
          { label: 'Split as \\( 4 \\times 12 \\)', to: { s0: 'b1' } },
          { label: 'Break the composite pieces into primes', to: { a1: 'a2', b1: 'b2' }, blocked: 'Pick a first split before breaking pieces.' },
          { label: 'Collect the leaves with exponents', to: { a2: 'win', b2: 'win' }, blocked: 'Reduce everything to primes first.' },
        ],
      },
      hint: 'Either split works — that&rsquo;s the point. Try one, finish it, and read the note.',
      success: 'Unique factorization, experienced before it&rsquo;s stated.',
      note: 'Every integer \\( > 1 \\) is a product of primes in exactly one way (up to order). The primes are the atoms; the factorization is the number&rsquo;s formula. And 1 is never a factor in it — 1 isn&rsquo;t prime.',
      coach: ['Run BOTH first splits if you&rsquo;re curious — undo brings you back.'],
    },
    {
      prompt: 'Warm-up: exponents in factorizations.',
      body: 'Repeated primes stack into powers — that&rsquo;s the standard form every factorization ends in.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 256 = 2^{?} \\)', answer: '8', width: 84 },
          { label: '\\( 72 = 2^3 \\cdot 3^{?} \\)', answer: '2', width: 84 },
          { label: 'how many primes \\( \\le 12 \\)?', answer: '5', width: 84 },
        ],
      },
      hint: 'Halve 256 repeatedly and count. For the last: list them — remember who&rsquo;s excluded.',
      explain: '\\( 256 = 2^8 \\) (eight halvings to 1). \\( 72 = 8 \\cdot 9 = 2^3 \\cdot 3^2 \\). Primes up to 12: 2, 3, 5, 7, 11 — five of them, with 1 and 9 both firmly excluded.',
      coach: ['Divide by 2 until you can&rsquo;t, counting as you go.', 'The prime list starts at 2, not 1.'],
    },
    {
      prompt: 'Factor 123,420 — with last lesson&rsquo;s tricks as the toolkit.',
      body: 'The divisibility rules weren&rsquo;t party tricks. They&rsquo;re a factoring pipeline: strip the obvious, test 3, test 11, then trial primes.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 123420 \\)' },
          s1: { eq: '\\( 2 \\cdot 5 \\cdot 12342 \\)' },
          s2: { eq: '\\( 2^2 \\cdot 5 \\cdot 6171 \\)' },
          s3: { eq: '\\( 2^2 \\cdot 3 \\cdot 5 \\cdot 2057 \\)' },
          s4: { eq: '\\( 2^2 \\cdot 3 \\cdot 5 \\cdot 11 \\cdot 187 \\)' },
          win: { eq: '\\( 123420 = 2^2 \\cdot 3 \\cdot 5 \\cdot 11^2 \\cdot 17 \\)', note: 'The pipeline in full: trailing zero → 2·5; even → another 2; digit sum 15 → a 3; alternating sum of 2057 is \\( 7 - 5 + 0 - 2 = 0 \\) → an 11; and 187 = 11 · 17 finishes it. Five stages, each one a Lesson-5.5 rule.' },
        },
        ops: [
          { label: 'Trailing 0: strip a 10 \\( (= 2 \\cdot 5) \\)', to: { s0: 's1' } },
          { label: 'Still even: take another 2', to: { s1: 's2' }, blocked: 'Check for a trailing zero first — it&rsquo;s two primes for one move.' },
          { label: '3-test: digit sum of 6171 is 15', to: { s2: 's3' }, blocked: 'Strip the 2s and 5s before testing 3.' },
          { label: '11-test: alternating sum of 2057 is 0', to: { s3: 's4' }, blocked: 'Run the pipeline in order — cheaper tests first.' },
          { label: 'Trial primes: \\( 187 = 11 \\cdot 17 \\)', to: { s4: 'win' }, blocked: 'Use the cheap tests before resorting to trial division.' },
        ],
      },
      hint: 'Cheapest tests first: trailing zeros, then evenness, then digit sum, then alternating sum, then trial division on what&rsquo;s left.',
      success: 'A six-digit monster factored with almost no division — the pipeline is the payoff of the whole tricks lesson.',
      note: 'Factoring pipeline: <b>strip 10s → strip 2s → 3-test → 11-test → trial primes</b> on whatever survives. Order matters only for your effort — cheap rules first.',
      coach: ['What does a trailing zero hand you for free?', 'After the easy strips, the digit-sum and alternating-sum tests aim your next moves.'],
    },
    {
      prompt: 'To decide whether 97 is prime, which primes must you actually try?',
      body: 'Factors come in pairs \\( d \\) and \\( 97/d \\), mirrored around \\( \\sqrt{97} \\approx 9.8 \\) — if one of the pair is big, the other is small.',
      interaction: {
        type: 'mcq',
        options: [
          '2, 3, 5, 7 — then stop',
          'Every prime up to 48',
          'Every number from 2 to 96',
          '2, 3, 5, 7, 11, 13',
        ],
        correct: 0,
      },
      hint: 'If 97 had a factor bigger than \\( \\sqrt{97} \\), its partner would be smaller than \\( \\sqrt{97} \\) — and you&rsquo;d have found the partner already.',
      explain: 'Any factorization \\( 97 = d \\cdot e \\) has \\( \\min(d, e) \\le \\sqrt{97} < 10 \\). So testing the primes below 10 — just 2, 3, 5, 7 — settles everything. None divides 97 (odd; digit sum 16; no trailing 5; \\( 97 = 7 \\cdot 13 + 6 \\)), so 97 is prime. Four checks, not ninety-five.',
      note: '<b>The \\( \\sqrt{N} \\) bound:</b> a composite \\( N \\) always has a prime factor \\( \\le \\sqrt{N} \\). No prime up to \\( \\sqrt{N} \\) divides \\( N \\) → \\( N \\) is prime. This turns primality checking from a marathon into a sprint.',
      coach: ['Pair each candidate factor with its partner.', 'Where do the pairs mirror? What does that say about the smaller one?'],
    },
    {
      prompt: 'Primality drill — each number rewards a different pipeline stage.',
      body: 'Factor each: give the missing prime.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 141 = 3 \\times \\;? \\)', answer: '47', width: 90 },
          { label: '\\( 1441 = 11 \\times \\;? \\)', answer: '131', width: 90 },
          { label: '\\( 2189 = 11 \\times \\;? \\)', answer: '199', width: 90 },
        ],
      },
      hint: '141&rsquo;s digit sum is 6. 1441 and 2189 have alternating sums of 0. Then divide once and √-check the quotient.',
      explain: '\\( 141 = 3 \\cdot 47 \\) (47 prime — check 2, 3, 5 only). \\( 1441 = 11 \\cdot 131 \\) (131: check 2, 3, 5, 7, 11 — prime). \\( 2189 = 11 \\cdot 199 \\) (199: check up to 14 — prime). Pipeline finds the first factor; the √-bound certifies the rest.',
      coach: ['Run the cheap tests to find each first factor.', 'After dividing, the quotient needs its own √-bound check — it&rsquo;s smaller, so it&rsquo;s fast.'],
    },
    {
      prompt: 'Are there infinitely many primes? Euclid answered in four moves. Arrange them.',
      body: 'A proof by contradiction — suppose the primes are a finite list \\( p_1, p_2, \\ldots, p_n \\), and build a troublemaker.',
      interaction: {
        type: 'order',
        items: [
          'Form \\( P = p_1 p_2 \\cdots p_n + 1 \\) — the product of the entire alleged list, plus one.',
          'Divided by any listed prime, \\( P \\) leaves remainder exactly 1.',
          'So no listed prime divides \\( P \\) — yet every integer above 1 has SOME prime factor.',
          'That prime factor is missing from the list — contradiction. The list was never complete. ∎',
        ],
      },
      hint: 'Build the troublemaker first; interrogate it second.',
      explain: 'The product-plus-one dodges every listed prime by exactly 1, but it still must have a prime factor — one the list forgot. So no finite list works: primes are infinite.',
      note: 'A subtlety worth being the one person in the room to know: \\( P \\) need NOT be prime itself — \\( 2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 + 1 = 30031 = 59 \\cdot 509 \\). The proof only needs \\( P \\) to have a prime factor off the list. &ldquo;Product of primes plus one is prime&rdquo; is the classic misquote.',
      coach: ['What single number embarrasses the finite list?', 'What remainder does it leave mod each listed prime?', 'Every integer > 1 has a prime factor — where must P&rsquo;s come from?'],
    },
    {
      prompt: 'Why does one proof matter when a million examples don&rsquo;t?',
      interaction: {
        type: 'reveal',
        face: '\\( 2^{2^n} + 1 \\): prime for \\( n = 0, 1, 2, 3, 4 \\). Fermat conjectured: always prime.',
        cta: 'Tap for the graveyard of nice patterns',
        hidden: 'Euler factored the very next one: \\( 2^{32} + 1 = 641 \\times 6{,}700{,}417 \\). Five data points, then dead. (These are <em>Fermat numbers</em>; the similar-sounding <em>Mersenne numbers</em> are \\( 2^p - 1 \\) — different family.) Meanwhile: Goldbach&rsquo;s conjecture — every even number above 2 a sum of two primes — checked into the quintillions, still unproven after 280 years. And Fermat&rsquo;s Last Theorem sat as a &ldquo;conjecture&rdquo; for 350 years before Wiles proved it in the 1990s. The moral: <b>&ldquo;true for every case we tried&rdquo; is not a proof</b> — which is exactly why Euclid&rsquo;s four lines about primes still matter 2300 years later.',
      },
      success: 'Patterns propose; proofs dispose.',
      coach: ['How many examples would it take to be SURE? That&rsquo;s the point.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Factor 987 completely. What is its largest prime factor?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'largest prime factor', answer: '47', width: 100 }],
      },
      hint: 'Digit sum 24 — start with the 3.',
      explain: '\\( 987 = 3 \\cdot 329 \\), and \\( 329 = 7 \\cdot 47 \\) (trial primes after the cheap tests fail). So \\( 987 = 3 \\cdot 7 \\cdot 47 \\).',
      coach: ['Pipeline order: the 3-test fires first.', 'For 329 the cheap tests all fail (digit sum 14, alternating sum 10) — move to trial primes, starting at 7.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Is 143 prime?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'if not, smaller prime factor; if prime, write 1', answer: '11', width: 110 }],
      },
      hint: 'Alternating sum: \\( 3 - 4 + 1 \\).',
      explain: 'The alternating sum is 0 — so \\( 11 \\mid 143 \\): \\( 143 = 11 \\cdot 13 \\). Not prime, and the 11-test caught it without a single division.',
      coach: ['Run the pipeline before reaching for trial division.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Is 101 prime?',
      interaction: {
        type: 'mcq',
        options: [
          'Yes — no prime up to \\( \\sqrt{101} \\approx 10 \\) divides it',
          'Yes — because its digits are 1s and 0s',
          'No — 101 = 11 × 9.2',
          'Can&rsquo;t tell without checking every number to 100',
        ],
        correct: 0,
      },
      hint: 'The √-bound says the search stops at 10.',
      explain: 'Check 2 (odd), 3 (digit sum 2), 5 (no trailing 0/5), 7 (\\( 101 = 14 \\cdot 7 + 3 \\)) — clean. Since \\( \\sqrt{101} < 11 \\), nothing else could work. Prime, certified in four checks.',
      coach: ['List the primes below √101 and test only those.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Teaser: the greatest common factor of 36, 27, and 45?',
      body: 'You can SEE it in the factorizations: \\( 2^2 \\cdot 3^2, \\; 3^3, \\; 3^2 \\cdot 5 \\). Next lesson makes this mechanical.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'GCF', answer: '9', width: 90 }],
      },
      hint: 'What do all three factorizations share?',
      explain: 'All three contain \\( 3^2 \\) and nothing more in common: GCF = 9. The shared-primes view is the whole next lesson in one glance.',
      coach: ['Factor each, then hunt for overlap.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Let \\( P = p_1 p_2 \\cdots p_n + 1 \\), the product of the first \\( n \\ge 2 \\) primes plus one — Euclid&rsquo;s troublemaker. Why can \\( P \\) never be a perfect square?',
      body: 'M&amp;IQ 1992. This lesson&rsquo;s star object meets last lesson&rsquo;s residue weapon.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( P \\equiv 3 \\pmod 4 \\), but squares are only ever \\( 0 \\) or \\( 1 \\pmod 4 \\)',
          '\\( P \\) is always prime, and primes aren&rsquo;t squares',
          '\\( P \\) is even, and even numbers aren&rsquo;t squares',
          '\\( P \\) is divisible by 3',
        ],
        correct: 0,
      },
      hint: 'The product includes the prime 2 exactly once — so what is the product mod 4? And which residues mod 4 can squares reach (check 0, 1, 2, 3)?',
      explain: 'The product \\( p_1 \\cdots p_n \\) contains one factor of 2 and otherwise odd primes — even but not divisible by 4, i.e. \\( \\equiv 2 \\pmod 4 \\). So \\( P \\equiv 3 \\pmod 4 \\). But squaring the four residues gives \\( 0, 1, 0, 1 \\): squares live only on spokes 0 and 1. \\( P \\) sits on spoke 3 — permanently disqualified.',
      walkthrough: [
        'Pick the right wheel: mod 4 (small enough to check exhaustively, big enough to see the factor of 2&rsquo;s structure).',
        'Squares mod 4: \\( 0^2, 1^2, 2^2, 3^2 \\equiv 0, 1, 0, 1 \\). A perfect square is ALWAYS \\( \\equiv 0 \\) or \\( 1 \\pmod 4 \\) — the Exercise-move from the mods lesson.',
        'Now place \\( P \\): the product of the first \\( n \\ge 2 \\) primes is \\( 2 \\times (\\text{odd}) \\) — exactly one factor of 2, so \\( \\equiv 2 \\pmod 4 \\).',
        'Therefore \\( P \\equiv 2 + 1 = 3 \\pmod 4 \\), a spoke no square can reach. Done — every case at once, no examples needed. (Sanity: \\( 2 \\cdot 3 + 1 = 7 \\), \\( 2 \\cdot 3 \\cdot 5 + 1 = 31 \\), both \\( \\equiv 3 \\).)',
      ],
      success: 'A proof, not a computation: residues rule out infinitely many candidates in four lines.',
      note: '<b>Residues kill impossibility problems.</b> The twin: three consecutive squares sum to \\( 3n^2 + 2 \\equiv 2 \\pmod 3 \\), and squares mod 3 are only 0 or 1 — so that sum is never a square either. Same weapon, second confirmed kill.',
      coach: ['First establish what squares CAN be mod 4 — four quick checks.', 'How many factors of 2 does a product of distinct primes contain?', 'Compare P&rsquo;s spoke with the squares&rsquo; spokes.'],
    },
  ],
};
