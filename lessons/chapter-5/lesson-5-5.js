/* Lesson 5.7 — GCF and LCM.
   The factor Venn: shared primes in the intersection -> GCF; all primes at max
   power -> LCM; and (m,n)[m,n] = mn read straight off the picture. */

const VENN_SVG = `<svg class="il-factor-venn" viewBox="0 0 320 150" width="320" role="img" aria-label="Two overlapping circles: prime factors of 84 and 112, with 2, 2, 7 shared">
  <circle cx="120" cy="75" r="62" fill="rgba(136,176,255,.10)" stroke="#88b0ff" stroke-width="1.5"/>
  <circle cx="200" cy="75" r="62" fill="rgba(255,177,146,.10)" stroke="#ffb192" stroke-width="1.5"/>
  <text x="78" y="22" fill="#88b0ff" font-size="12">84 = 2·2·3·7</text>
  <text x="196" y="22" fill="#ffb192" font-size="12">112 = 2·2·2·2·7</text>
  <text x="92" y="80" fill="#88b0ff" font-size="16" font-weight="700">3</text>
  <text class="il-venn-shared" x="160" y="66" font-size="15" font-weight="700" text-anchor="middle">2  2</text>
  <text class="il-venn-shared" x="160" y="92" font-size="15" font-weight="700" text-anchor="middle">7</text>
  <text x="228" y="80" fill="#ffb192" font-size="16" font-weight="700">2  2</text>
  <text class="il-venn-caption" x="160" y="140" font-size="11" text-anchor="middle">shared factors live in the overlap</text>
</svg>`;

export default {
  id: 'lesson-5-5',
  title: 'GCF and LCM',
  kicker: 'Using the Integers',
  topicIndex: 4,
  lessonIndex: 4,
  next: 'interactive-lesson.html?chapter=6&lesson=1',
  notes: 'prime-factorization.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Drop the primes of 84 and 112 into a Venn diagram. Read off their greatest common factor.',
      body: '\\( 84 = 2^2 \\cdot 3 \\cdot 7 \\) and \\( 112 = 2^4 \\cdot 7 \\). The overlap holds every factor they share — two 2s and a 7.' + VENN_SVG,
      interaction: {
        type: 'fillin',
        fields: [{ label: 'GCF(84, 112)', answer: '28', width: 100 }],
      },
      hint: 'Multiply the overlap: \\( 2 \\cdot 2 \\cdot 7 \\).',
      explain: 'The intersection is \\( 2^2 \\cdot 7 = 28 \\) — the biggest number dividing both, because it&rsquo;s built from exactly the shared primes. No procedure to memorize: the region contents ARE the answer.',
      note: 'Notation: \\( (84, 112) = 28 \\). The parentheses mean GCF; square brackets \\( [\\,\\cdot\\,] \\) will mean LCM.',
      coach: ['Which prime tiles appear in BOTH factorizations?', 'Two 2s make the cut; the third and fourth 2 belong to 112 alone.'],
    },
    {
      prompt: 'Same picture, two readings: GCF is the overlap; LCM is the whole diagram.',
      body: 'GCF takes each prime at its <em>minimum</em> power; LCM at its <em>maximum</em>. Try it on a pair where the answer is almost embarrassing: 100 and 1000.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '(100, 1000)', answer: '100', width: 100 },
          { label: '[100, 1000]', answer: '1000', width: 100 },
        ],
      },
      hint: '\\( 100 = 2^2 5^2 \\), \\( 1000 = 2^3 5^3 \\). Min powers vs max powers.',
      explain: 'Min: \\( 2^2 5^2 = 100 \\). Max: \\( 2^3 5^3 = 1000 \\). When one number divides the other, the GCF is the smaller and the LCM is the larger — the min/max rule collapsing to something you already believed.',
      note: '<b>GCF: minimum power of each prime. LCM: maximum.</b> The classic error swaps them — a swapped answer fails the smell test instantly, since GCF ≤ both numbers ≤ LCM.',
      coach: ['Write both factorizations with exponents.', 'For each prime, pick min for GCF, max for LCM.'],
    },
    {
      prompt: 'Drill — and one of these pairs is sneaky.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '(117, 165)', answer: '3', width: 90 },
          { label: '(102, 119)', answer: '17', width: 90 },
          { label: '(96, 36)', answer: '12', width: 90 },
          { label: '[96, 36]', answer: '288', width: 90 },
        ],
      },
      hint: 'Factor first: \\( 117 = 3^2 \\cdot 13 \\), \\( 165 = 3 \\cdot 5 \\cdot 11 \\), \\( 96 = 2^5 \\cdot 3 \\), \\( 36 = 2^2 \\cdot 3^2 \\). For (102, 119): the pipeline, not the easy tests.',
      explain: '(117, 165) = 3. (96, 36) = \\( 2^2 \\cdot 3 = 12 \\), and [96, 36] = \\( 2^5 \\cdot 3^2 = 288 \\). The sneak: \\( 102 = 2 \\cdot 3 \\cdot 17 \\) and \\( 119 = 7 \\cdot 17 \\) — neither reveals itself to the cheap tests, but the factoring pipeline digs out the shared <b>17</b>.',
      coach: ['Everything starts with factorizations — pipeline callback.', '119: not even, digit sum 17, alternating sum 8… trial primes: 7 works.'],
    },
    {
      prompt: 'Which pair is relatively prime?',
      body: 'Vocabulary: two numbers are <em>relatively prime</em> when their GCF is 1 — empty overlap, nothing shared.',
      interaction: {
        type: 'mcq',
        options: ['(8, 9)', '(14, 21)', '(15, 25)', '(22, 33)'],
        correct: 0,
      },
      hint: 'Neither number needs to be prime itself — the PAIR just can&rsquo;t share anything.',
      explain: '\\( 8 = 2^3 \\) and \\( 9 = 3^2 \\): disjoint primes, GCF 1 — relatively prime, though neither is prime alone. The others share 7, 5, and 11 respectively. This is the &ldquo;coprime&rdquo; the composite-divisibility rule demanded (3 × 4, never 2 × 6).',
      coach: ['Compute all four GCFs — three of them are bigger than 1.'],
    },
    {
      prompt: 'The product identity: \\( (m, n) \\cdot [m, n] = m \\cdot n \\). See it, then use it blind.',
      body: 'In the Venn: GCF·LCM uses each overlap tile twice and each exclusive tile once — exactly the tiles \\( m \\cdot n \\) uses. Verify on 84 and 112, then the payoff round: two mystery numbers have GCF 8 and product 2880.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 28 \\cdot 336 \\)', answer: '9408', width: 100 },
          { label: '\\( 84 \\cdot 112 \\)', answer: '9408', width: 100 },
          { label: 'mystery LCM', answer: '360', width: 100 },
        ],
      },
      hint: 'For the mystery pair: \\( \\text{GCF} \\cdot \\text{LCM} = \\text{product} \\), so LCM = 2880 / 8.',
      explain: 'Both products are 9408 — the identity in the flesh. And the payoff: LCM = \\( 2880 / 8 = 360 \\), computed without ever learning what the two numbers were. GCF and LCM are yoked; find one, the product hands you the other.',
      note: '\\( (m,n) \\cdot [m,n] = mn \\) — because min-power + max-power = the two powers themselves, prime by prime.',
      coach: ['Count how many times each Venn tile appears in GCF·LCM.', 'The mystery round needs one division and zero factoring.'],
    },
    {
      prompt: 'Add \\( \\dfrac{5}{12} + \\dfrac{7}{18} \\) — and notice what the denominator you reach for actually is.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'common denominator', answer: '36', width: 100 },
          { label: 'sum', answer: '29/36', width: 100 },
        ],
      },
      hint: 'The smallest number both 12 and 18 divide… that&rsquo;s a definition you now know by name.',
      explain: '\\( [12, 18] = 2^2 \\cdot 3^2 = 36 \\): \\( \\frac{15}{36} + \\frac{14}{36} = \\frac{29}{36} \\). The &ldquo;least common denominator&rdquo; you&rsquo;ve used since fourth grade was the LCM all along — retroactive aha for every fraction you&rsquo;ve ever added.',
      note: 'LCD = LCM of the denominators. Not a new skill — a new name for an old one.',
      coach: ['Factor 12 and 18; take max powers.', 'Scale each fraction to the common denominator and add tops.'],
    },
    {
      prompt: 'Three numbers, same machine: \\( [12, 54, 42] \\).',
      body: 'A three-circle Venn works the same way — every prime at its maximum power anywhere.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'LCM', answer: '756', width: 100 }],
      },
      hint: '\\( 12 = 2^2 \\cdot 3 \\), \\( 54 = 2 \\cdot 3^3 \\), \\( 42 = 2 \\cdot 3 \\cdot 7 \\).',
      explain: 'Max powers: \\( 2^2 \\) (from 12), \\( 3^3 \\) (from 54), \\( 7 \\) (from 42): \\( 4 \\cdot 27 \\cdot 7 = 756 \\). GCF works the same too — min everywhere, here \\( 2 \\cdot 3 = 6 \\).',
      note: '⚠️ The product identity does NOT extend naively: \\( (l,m,n) \\cdot [l,m,n] \\ne lmn \\) in general. (A correct three-number identity exists, but it&rsquo;s exotic — for two numbers only, trust the product trick.)',
      coach: ['One prime at a time: what&rsquo;s the biggest power of 2 anywhere? Of 3? Of 7?'],
    },
    {
      prompt: 'Mile markers: counting a shipment of markers in rows of 4 leaves 2; rows of 5 leave 3; rows of 7 leave 5. What&rsquo;s the smallest possible count?',
      body: 'MATHCOUNTS 1984. Look at how far each remainder is from a full row.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'markers', answer: '138', width: 100 }],
      },
      hint: 'Always 2 short: \\( 2 + 2 = 4 \\), \\( 3 + 2 = 5 \\), \\( 5 + 2 = 7 \\). So \\( n + 2 \\) is divisible by 4, 5, AND 7.',
      explain: '\\( n + 2 \\) is a common multiple of 4, 5, 7 — smallest is \\( [4,5,7] = 140 \\), so \\( n = 138 \\). Check: \\( 138 = 34 \\cdot 4 + 2 = 27 \\cdot 5 + 3 = 19 \\cdot 7 + 5 \\) ✓. The &ldquo;shift n, then LCM&rdquo; move: when every remainder misses by the same amount, shift to a clean multiple.',
      coach: ['Compare each remainder to its divisor — spot the constant gap.', 'What single shift makes all three conditions read &ldquo;divisible by&rdquo;?'],
    },
    {
      kicker: 'Promise kept',
      prompt: 'The parked AHSME problem: smallest \\( n \\) leaving remainder \\( k - 1 \\) when divided by each \\( k \\) from 2 through 10.',
      body: 'Two lessons ago you found the door — \\( n + 1 \\) is divisible by all of 2 through 10. Now you own the machinery. Walk through.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'n', answer: '2519', width: 100 }],
      },
      hint: '\\( n + 1 = [2, 3, \\ldots, 10] \\). Build it by max prime powers: \\( 2^3, 3^2, 5, 7 \\).',
      explain: '\\( [2..10] = 2^3 \\cdot 3^2 \\cdot 5 \\cdot 7 = 2520 \\), so \\( n = \\mathbf{2519} \\). Check a few: \\( 2519 = 251 \\cdot 10 + 9 \\) ✓, \\( = 359 \\cdot 7 + 6 \\) ✓. A one-liner, exactly as promised — the LCM was the missing tool, not the missing idea.',
      coach: ['Only the maximal prime powers matter: 8, 9, 5, 7.', 'Multiply them, subtract 1.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Formally now: \\( (36, 27, 45) \\) and \\( [8, 12, 30] \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'GCF', answer: '9', width: 90 },
          { label: 'LCM', answer: '120', width: 90 },
        ],
      },
      hint: 'Min powers across all three; then max powers across all three.',
      explain: '\\( 36 = 2^2 3^2, 27 = 3^3, 45 = 3^2 5 \\): shared min is \\( 3^2 = 9 \\) (the teaser from last lesson, now mechanical). \\( 8 = 2^3, 12 = 2^2 3, 30 = 2 \\cdot 3 \\cdot 5 \\): max powers \\( 2^3 \\cdot 3 \\cdot 5 = 120 \\).',
      coach: ['GCF: a prime must appear in ALL THREE to survive.', 'LCM: a prime appearing anywhere gets in, at its biggest power.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Two numbers have GCF 6 and LCM 210. One of them is 30. The other?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'other number', answer: '42', width: 100 }],
      },
      hint: 'Product identity, run backwards.',
      explain: '\\( 6 \\cdot 210 = 30 \\cdot x \\), so \\( x = 1260 / 30 = 42 \\). Check: \\( (30, 42) = 6 \\), \\( [30, 42] = 210 \\) ✓.',
      coach: ['GCF · LCM equals the product of the two numbers.'],
    },
    {
      section: 'checkpoint',
      prompt: 'How many ways can you pay exactly \\$69 using \\$5 bills and \\$2 bills (at least one of each)?',
      body: 'MATHCOUNTS 1988. Mods meet counting.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'ways', answer: '7', width: 90 }],
      },
      hint: '\\( 5a + 2b = 69 \\): mod 2, the left side is \\( a \\pmod 2 \\) and 69 is odd — so \\( a \\) must be odd.',
      explain: 'Odd \\( a \\) with \\( 5a \\le 67 \\): \\( a \\in \\{1, 3, 5, 7, 9, 11, 13\\} \\) — 7 values, each fixing \\( b = (69 - 5a)/2 \\ge 1 \\). Seven ways. The mod-2 observation did all the work; the count was a residue-class count from two lessons ago.',
      coach: ['Reduce the equation mod 2 to constrain a.', 'Then count the legal odd values of a — inclusively.'],
    },
    {
      section: 'checkpoint',
      prompt: 'True test of the machinery: \\( (102, 119) \\cdot [102, 119] = \\; ?\\)',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '12138', width: 110 }],
      },
      hint: 'Don&rsquo;t compute either one. The identity says the answer is just…',
      explain: '\\( 102 \\times 119 = 12138 \\) — by the product identity, GCF·LCM must equal it, no factoring required. (If you did factor: \\( 17 \\times 714 = 12138 \\) ✓.)',
      coach: ['This is a one-multiplication problem wearing a two-concept costume.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Find the smallest integer \\( n > 1 \\) leaving remainder 1 when divided by EVERY single-digit integer greater than 1.',
      body: 'Mandelbrot — the twin of the parked AHSME problem, with the shift running the other way.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'n', answer: '2521', width: 100 }],
      },
      hint: 'Remainder 1 everywhere means \\( n - 1 \\) is divisible by all of 2 through 9.',
      explain: '\\( n - 1 = [2..9] = 2^3 \\cdot 3^2 \\cdot 5 \\cdot 7 = 2520 \\), so \\( n = \\mathbf{2521} \\). (The \\( n > 1 \\) clause exists because \\( n = 1 \\) cheekily leaves remainder 1 everywhere too.)',
      walkthrough: [
        'Translate: \\( n \\equiv 1 \\pmod k \\) for every \\( k \\in \\{2, \\ldots, 9\\} \\) — nine congruences, one shift: \\( n - 1 \\) is a common multiple of them all.',
        'Smallest positive common multiple: \\( [2..9] \\). Only maximal prime powers matter: \\( 2^3 = 8 \\), \\( 3^2 = 9 \\), 5, 7.',
        'Multiply: \\( 8 \\cdot 9 \\cdot 5 \\cdot 7 = 2520 \\). So the candidates are \\( n = 2520k + 1 \\); smallest above 1 is 2521.',
        'Compare the twins: remainder \\( k-1 \\) → shift UP (\\( n+1 = 2520 \\), \\( n = 2519 \\)); remainder 1 → shift DOWN (\\( n-1 = 2520 \\), \\( n = 2521 \\)). One move — <b>shift n to a clean multiple, then LCM</b> — solves the whole genre.',
      ],
      success: 'Chapter 5 complete: bases, mods, tricks, primes, and now the LCM that ties the remainder problems in a bow.',
      note: 'The &ldquo;shift, then LCM&rdquo; genre: constant remainder \\( r \\) → \\( n - r \\) is the multiple; constant shortfall → \\( n + (\\text{gap}) \\) is. Both 2519 and 2521 now live in your head next to 2520.',
      coach: ['Rewrite all nine conditions as one statement about n − 1.', 'Build the LCM from maximal prime powers.', 'Add the 1 back — and read the n > 1 clause once more.'],
    },
  ],
};
