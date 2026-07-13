/* Lesson 6.5 — Square Roots of Irrationals and Imaginaries (Denesting).
   Unsquaring: match rational and irrational parts, then audit the sign.
   Closes the chapter with the polynomial/Cardano/Galois card. */

export default {
  id: 'lesson-6-5',
  title: 'Denesting Radicals',
  kicker: 'Quadratic Equations',
  topicIndex: 5,
  lessonIndex: 4,
  next: 'interactive-lesson.html?chapter=7&lesson=1',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Square \\( 1 + \\sqrt3 \\).',
      body: 'Forward first — the reverse trip is the lesson.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'rational part', answer: '4', width: 84 },
          { label: 'coefficient of \\( \\sqrt3 \\)', answer: '2', width: 84 },
        ],
      },
      hint: '\\( (1+\\sqrt3)^2 = 1 + 2\\sqrt3 + 3 \\).',
      explain: '\\( (1+\\sqrt3)^2 = 4 + 2\\sqrt3 \\). Easy. Now the hard direction: <em>given</em> \\( 4 + 2\\sqrt3 \\), recover \\( 1 + \\sqrt3 \\). That&rsquo;s this lesson — <b>unsquaring</b>, and like every inverse problem, it needs a system rather than a formula.',
      note: 'Squaring \\( x + y\\sqrt c \\) gives \\( (x^2 + cy^2) + 2xy\\sqrt{c} \\). Two pieces come out: a rational part and a \\( \\sqrt c \\) part. To reverse it, match them.',
      coach: ['FOIL it out; \\( (\\sqrt3)^2 = 3 \\).'],
    },
    {
      prompt: 'Set up the system. To denest \\( \\sqrt{a + b\\sqrt c} \\), what two equations does the shape \\( x + y\\sqrt c \\) force?',
      interaction: {
        type: 'mcq',
        options: [
          '\\( x^2 + cy^2 = a \\) and \\( 2xy = b \\)',
          '\\( x^2 - cy^2 = a \\) and \\( 2xy = b \\)',
          '\\( x^2 + y^2 = a \\) and \\( xy = b \\)',
          '\\( x + y = a \\) and \\( xy = b \\)',
        ],
        correct: 0,
      },
      hint: 'Square \\( x + y\\sqrt c \\) and sort the terms into two buckets: things without a radical, things with \\( \\sqrt c \\).',
      explain: '\\( (x + y\\sqrt c)^2 = x^2 + 2xy\\sqrt c + cy^2 = (x^2 + cy^2) + 2xy\\sqrt{c} \\). Matching against \\( a + b\\sqrt c \\): rational bucket \\( x^2 + cy^2 = a \\), radical bucket \\( 2xy = b \\). <b>The bucket sort IS the method.</b> (The minus-sign version, \\( x^2 - y^2 \\), belongs to the COMPLEX case later in this lesson — because \\( i^2 = -1 \\), not \\( +c \\). Don&rsquo;t mix them up.)',
      note: 'Two equations, two unknowns — and they&rsquo;re symmetric in a familiar way: a product and a sum-of-squares. Attack them either by hunting factor pairs (fast) or by substituting and solving a biquadratic (rigorous). It&rsquo;s factoring-vs-formula, all over again.',
      coach: ['Expand the square carefully.', 'Which terms carry a \\( \\sqrt c \\), and which don&rsquo;t?'],
    },
    {
      prompt: 'Denest \\( \\sqrt{34 - 24\\sqrt2} \\). Hunt the pair.',
      body: 'System: \\( 2xy = -24 \\) (so \\( xy = -12 \\)) and \\( x^2 + 2y^2 = 34 \\). Try factor pairs of \\( -12 \\).',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( xy = -12, \\qquad x^2 + 2y^2 = 34 \\)' },
          t1: { eq: '\\( (x,y) = (1, -12): \\quad 1 + 2(144) = 289 \\ne 34 \\)', note: 'Wildly too big — \\( y \\) is doubled-and-squared, so it dominates. Push \\( y \\) small.' },
          t2: { eq: '\\( (x,y) = (6, -2): \\quad 36 + 2(4) = 44 \\ne 34 \\)', note: 'Close! Overshooting by 10. Nudge.' },
          t3: { eq: '\\( (x,y) = (4, -3): \\quad 16 + 2(9) = 34 \\;\\checkmark \\)', note: 'Landed: the pair is \\( (4, -3) \\), suggesting \\( 4 - 3\\sqrt2 \\). But do NOT write the answer yet — one more step, and it&rsquo;s the one everybody skips.' },
          win: { eq: '\\( 3\\sqrt2 > 4 \\;\\Rightarrow\\; 4 - 3\\sqrt2 < 0 \\;\\Rightarrow\\; \\sqrt{34 - 24\\sqrt2} = 3\\sqrt2 - 4 \\)', note: 'THE SIGN AUDIT. \\( 3\\sqrt2 = \\sqrt{18} > \\sqrt{16} = 4 \\), so \\( 4 - 3\\sqrt2 \\) is NEGATIVE — and a square root of a positive number never is. Both \\( \\pm(4 - 3\\sqrt2) \\) square to the right thing; only the positive one is \\( \\sqrt{\\;} \\). The answer is \\( 3\\sqrt2 - 4 \\).' },
        },
        ops: [
          { label: 'Try \\( (1, -12) \\)', to: { s0: 't1' } },
          { label: 'Try \\( (6, -2) \\)', to: { s0: 't2', t1: 't2' } },
          { label: 'Try \\( (4, -3) \\)', to: { s0: 't3', t1: 't3', t2: 't3' } },
          { label: 'Sign audit: which of \\( \\pm(4 - 3\\sqrt2) \\) is positive?', to: { t3: 'win' }, blocked: 'Find the pair \\( (x,y) \\) first.' },
        ],
      },
      hint: 'Only a few factor pairs of \\( -12 \\) exist. Check each against \\( x^2 + 2y^2 = 34 \\) — then check the SIGN of your answer.',
      success: 'Pair found, sign audited. The answer is \\( 3\\sqrt2 - 4 \\), not \\( 4 - 3\\sqrt2 \\).',
      note: '<b>The sign trap.</b> \\( \\sqrt{\\;} \\) of a positive real is POSITIVE, always (Chapter 1&rsquo;s convention, with teeth). Your system finds a pair \\( \\pm(x + y\\sqrt c) \\); you must decide which one is positive. Compare by squaring: \\( 3\\sqrt2 = \\sqrt{18} \\) vs \\( 4 = \\sqrt{16} \\).',
      coach: ['\\( xy = -12 \\): list the integer pairs.', 'Test each in \\( x^2 + 2y^2 = 34 \\).', 'Once you have \\( (4,-3) \\): is \\( 4 - 3\\sqrt2 \\) actually positive? Compare \\( 3\\sqrt2 \\) with 4 by squaring both.'],
    },
    {
      prompt: 'The rigorous route to the same answer — no guessing.',
      body: 'From \\( xy = -12 \\), substitute \\( y = -12/x \\) into \\( x^2 + 2y^2 = 34 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'the biquadratic: \\( x^4 - 34x^2 + \\;? = 0 \\)', answer: '288', width: 100 },
          { label: 'integer solution \\( x \\) (positive)', answer: '4', width: 90 },
        ],
      },
      hint: '\\( x^2 + 2 \\cdot \\frac{144}{x^2} = 34 \\). Multiply through by \\( x^2 \\).',
      explain: '\\( x^4 - 34x^2 + 288 = 0 \\) — a biquadratic, exactly the Lesson 6.4 substitution: \\( z = x^2 \\) → \\( z^2 - 34z + 288 = 0 \\) → \\( (z-16)(z-18) = 0 \\) → \\( x^2 = 16 \\) or \\( 18 \\). The integer branch gives \\( x = \\pm4 \\) (hence \\( y = \\mp3 \\)). The other branch, \\( x = \\pm3\\sqrt2 \\), lands on the SAME answer written the other way round — try it and see.',
      note: 'Guessing is fast; the biquadratic never fails. Same trade as factoring-vs-formula, and you now own both tools.',
      coach: ['Solve the product equation for \\( y \\) and substitute.', 'Clear the denominator by multiplying by \\( x^2 \\).', 'It&rsquo;s a quadratic in \\( x^2 \\).'],
    },
    {
      prompt: 'Composite \\( c \\): denest \\( \\sqrt{5 + 2\\sqrt6} \\).',
      body: 'Try the usual shape \\( x + y\\sqrt6 \\): you&rsquo;d need \\( 2xy = 2 \\) and \\( x^2 + 6y^2 = 5 \\) — so \\( xy = 1 \\), forcing \\( x = y = 1 \\), which gives \\( 1 + 6 = 7 \\ne 5 \\). Honest failure. Since \\( 6 = 2 \\times 3 \\), try the SPLIT shape \\( x\\sqrt2 + y\\sqrt3 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x =', answer: '1', width: 84 },
          { label: 'y =', answer: '1', width: 84 },
        ],
      },
      hint: '\\( (x\\sqrt2 + y\\sqrt3)^2 = 2x^2 + 3y^2 + 2xy\\sqrt6 \\). Match: \\( 2x^2 + 3y^2 = 5 \\) and \\( 2xy = 2 \\).',
      explain: '\\( xy = 1 \\) and \\( 2x^2 + 3y^2 = 5 \\) → \\( x = y = 1 \\) ✓. So \\( \\sqrt{5 + 2\\sqrt6} = \\sqrt2 + \\sqrt3 \\) (and it&rsquo;s positive, so the sign audit passes trivially). Check: \\( (\\sqrt2+\\sqrt3)^2 = 2 + 2\\sqrt6 + 3 = 5 + 2\\sqrt6 \\) ✓.',
      note: 'When \\( c \\) is <b>composite</b>, the root may split across its factors: \\( \\sqrt{a + b\\sqrt{c}} = x\\sqrt{w} + y\\sqrt{z} \\) where \\( wz = c \\). Try the simple shape first; when it fails honestly, split.',
      coach: ['Square the split shape and sort into buckets again.', 'The \\( \\sqrt6 \\) bucket gives \\( 2xy = 2 \\).'],
    },
    {
      prompt: 'Complex square roots: find \\( \\sqrt{5 - 12i} \\).',
      body: 'Same idea, new shape: \\( (x + yi)^2 = (x^2 - y^2) + 2xyi \\). Note the <b>minus</b> — that&rsquo;s \\( i^2 = -1 \\) doing its job. System: \\( x^2 - y^2 = 5 \\), \\( 2xy = -12 \\).',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\pm(3 - 2i) \\) — BOTH signs are valid answers',
          '\\( 3 - 2i \\) only — the other is negative',
          '\\( \\pm(2 - 3i) \\)',
          'It has no square root',
        ],
        correct: 0,
      },
      hint: '\\( xy = -6 \\) and \\( x^2 - y^2 = 5 \\). Try \\( (3, -2) \\): \\( 9 - 4 = 5 \\) ✓. Then ask: does the sign audit from beat 3 apply here?',
      explain: '\\( (3,-2) \\) solves both: \\( 9 - 4 = 5 \\) and \\( 2(3)(-2) = -12 \\) ✓. So \\( (3-2i)^2 = 5 - 12i \\). And now the twist: in \\( \\mathbb{C} \\) there is <b>no ordering</b> — no complex number is &ldquo;positive&rdquo; — so the positive-root convention has nothing to stand on. <b>Both \\( 3-2i \\) and \\( -(3-2i) \\) are square roots</b>, and both are correct answers.',
      note: 'The exact contrast that makes this lesson worth pairing: in the REAL case you must pick the positive one (beat 3). In the COMPLEX case, both survive. The difference isn&rsquo;t arbitrary — it&rsquo;s that \\( \\mathbb{R} \\) is ordered and \\( \\mathbb{C} \\) isn&rsquo;t.',
      coach: ['Expand \\( (x+yi)^2 \\) — remember \\( i^2 = -1 \\).', 'Solve the little system; \\( (3,-2) \\) works.', 'Is there any such thing as a &ldquo;positive&rdquo; complex number?'],
    },
    {
      prompt: 'Honesty card: does every nested radical denest?',
      interaction: {
        type: 'reveal',
        face: 'You just unnested three of them. Try \\( \\sqrt{1 + \\sqrt2} \\).',
        cta: 'Tap for the truth',
        hidden: 'It doesn&rsquo;t denest — no expression of the form \\( x + y\\sqrt2 \\) with rational \\( x, y \\) squares to \\( 1 + \\sqrt2 \\). (Run the system: \\( 2xy = 1 \\), \\( x^2 + 2y^2 = 1 \\) — solve it and you get irrational \\( x, y \\), which defeats the point.) <b>Most nested radicals in the wild do not denest.</b> The book&rsquo;s honest rule of thumb: on a test, if you&rsquo;re asked to denest it, it denests — that&rsquo;s why they asked. Outside a test, expect the opposite.',
      },
      success: 'The technique is real; the problems that admit it are curated.',
      coach: ['Set up the usual system and see what kind of numbers it demands.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Denest \\( \\sqrt{15 + 8i} \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x (positive branch)', answer: '4', width: 84 },
          { label: 'y', answer: '1', width: 84 },
        ],
      },
      hint: 'Complex system: \\( x^2 - y^2 = 15 \\), \\( 2xy = 8 \\).',
      explain: '\\( xy = 4 \\) and \\( x^2 - y^2 = 15 \\) → \\( (4, 1) \\): \\( 16 - 1 = 15 \\) ✓. So \\( \\sqrt{15+8i} = \\pm(4 + i) \\). Check: \\( (4+i)^2 = 16 + 8i - 1 = 15 + 8i \\) ✓.',
      coach: ['MINUS between the squares — this is the complex system.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Denest \\( \\sqrt{-27 + 36i} \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x (positive branch)', answer: '3', width: 84 },
          { label: 'y', answer: '6', width: 84 },
        ],
      },
      hint: '\\( x^2 - y^2 = -27 \\) and \\( 2xy = 36 \\), so \\( xy = 18 \\).',
      explain: '\\( (3, 6) \\): \\( 9 - 36 = -27 \\) ✓ and \\( 2(3)(6) = 36 \\) ✓. So \\( \\sqrt{-27+36i} = \\pm(3 + 6i) \\). A negative real part is no obstacle — the complex system handles it without comment.',
      coach: ['List factor pairs of 18 and test \\( x^2 - y^2 \\).', 'Here \\( y \\) must be the bigger one, to make the difference negative.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Denest \\( \\sqrt{53 - 8\\sqrt{15}} \\).',
      body: '\\( c = 15 = 3 \\times 5 \\) is composite — reach for the split shape \\( x\\sqrt3 + y\\sqrt5 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x', answer: '4', width: 84 },
          { label: 'y', answer: '-1', width: 84 },
        ],
      },
      hint: '\\( (x\\sqrt3 + y\\sqrt5)^2 = 3x^2 + 5y^2 + 2xy\\sqrt{15} \\). Match: \\( 3x^2 + 5y^2 = 53 \\), \\( 2xy = -8 \\).',
      explain: '\\( xy = -4 \\) and \\( 3x^2 + 5y^2 = 53 \\) → \\( (4, -1) \\): \\( 48 + 5 = 53 \\) ✓. So the answer is \\( 4\\sqrt3 - \\sqrt5 \\). Sign audit: \\( 4\\sqrt3 \\approx 6.93 > \\sqrt5 \\approx 2.24 \\), so it&rsquo;s positive ✓ — no flip needed this time.',
      coach: ['Split shape, because 15 factors.', 'Then the usual two buckets — and don&rsquo;t forget the sign audit at the end.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'If \\( \\dfrac{a+b}{a} = \\dfrac{b}{a+b} \\), can \\( a \\) and \\( b \\) both be real (and nonzero)?',
      body: 'AHSME 1960. The discriminant as an impossibility proof — a beautiful way to close the chapter.',
      interaction: {
        type: 'mcq',
        options: [
          'No — the ratio \\( b/a \\) would have to solve \\( t^2 + t + 1 = 0 \\), whose discriminant is \\( -3 \\)',
          'Yes — take \\( a = b = 1 \\)',
          'Yes — but only if \\( a = -b \\)',
          'No — because \\( a + b \\) would be zero',
        ],
        correct: 0,
      },
      hint: 'Cross-multiply: \\( (a+b)^2 = ab \\). Expand, then divide by \\( a^2 \\) and let \\( t = b/a \\).',
      explain: 'Cross-multiplying: \\( (a+b)^2 = ab \\) → \\( a^2 + 2ab + b^2 = ab \\) → \\( a^2 + ab + b^2 = 0 \\). Divide by \\( a^2 \\) and set \\( t = \\frac{b}{a} \\): \\( t^2 + t + 1 = 0 \\), discriminant \\( 1 - 4 = -3 < 0 \\). So \\( t \\) is imaginary — and no real \\( a, b \\) can produce an imaginary ratio. <b>Impossible.</b>',
      note: 'The discriminant doesn&rsquo;t just classify roots — it PROVES things. &ldquo;This configuration cannot exist over the reals&rdquo; is a proof you can now write in three lines.',
      coach: ['Cross-multiply first.', 'Divide through by \\( a^2 \\) to make it about the ratio \\( b/a \\).', 'Now compute the discriminant of that quadratic.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Simplify \\( \\sqrt{10 - 4\\sqrt{6}} \\).',
      body: 'MA&copy;. Composite \\( c \\), a sign trap, and the whole toolkit in one line of radicals.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\sqrt6 - 2 \\)',
          '\\( 2 - \\sqrt6 \\)',
          '\\( \\sqrt6 + 2 \\)',
          '\\( 2\\sqrt3 - \\sqrt2 \\)',
        ],
        correct: 0,
      },
      hint: 'Try the simple shape \\( x + y\\sqrt6 \\): \\( 2xy = -4 \\) and \\( x^2 + 6y^2 = 10 \\). Find the pair — then audit the sign.',
      explain: '\\( xy = -2 \\) and \\( x^2 + 6y^2 = 10 \\) → \\( (2, -1) \\): \\( 4 + 6 = 10 \\) ✓. That suggests \\( 2 - \\sqrt6 \\) — but \\( \\sqrt6 \\approx 2.449 > 2 \\), so that expression is NEGATIVE. Flip it: \\( \\sqrt{10 - 4\\sqrt6} = \\mathbf{\\sqrt6 - 2} \\). Check: \\( (\\sqrt6-2)^2 = 6 - 4\\sqrt6 + 4 = 10 - 4\\sqrt6 \\) ✓.',
      walkthrough: [
        'Shape first: \\( c = 6 \\), so try \\( x + y\\sqrt6 \\) before reaching for the split form. Squaring gives \\( (x^2 + 6y^2) + 2xy\\sqrt6 \\).',
        'Match the buckets against \\( 10 - 4\\sqrt6 \\): rational \\( x^2 + 6y^2 = 10 \\), radical \\( 2xy = -4 \\) (so \\( xy = -2 \\)).',
        'Hunt the pairs of \\( -2 \\): \\( (1,-2) \\) gives \\( 1 + 24 = 25 \\) ✗. \\( (2,-1) \\) gives \\( 4 + 6 = 10 \\) ✓. So the answer is \\( \\pm(2 - \\sqrt6) \\).',
        '<b>Sign audit — the step this problem exists to punish.</b> Compare \\( 2 \\) and \\( \\sqrt6 \\) by squaring: \\( 4 < 6 \\), so \\( \\sqrt6 > 2 \\) and \\( 2 - \\sqrt6 < 0 \\). A square root of a positive real cannot be negative.',
        'Flip to the positive representative: \\( \\sqrt{10 - 4\\sqrt6} = \\sqrt6 - 2 \\). Verify by squaring: \\( 6 - 4\\sqrt6 + 4 = 10 - 4\\sqrt6 \\) ✓.',
      ],
      success: 'Chapter 6 complete — zero-product, factoring, completing the square, the formula, Vieta, audits, and now unsquaring.',
      note: 'Every denesting ends the same way: <b>find the pair, then audit the sign.</b> The system can&rsquo;t tell \\( u \\) from \\( -u \\) — only you can.',
      coach: ['Set up the two-bucket system for \\( x + y\\sqrt6 \\).', 'Test the small factor pairs of \\( -2 \\).', 'Before writing the answer: is your expression actually positive? Compare \\( 2 \\) and \\( \\sqrt6 \\).'],
    },
    {
      kicker: 'The big picture',
      prompt: 'One last thing: what happens above degree 2?',
      body: 'Quadratics are the last equation the world lets you solve easily. The next few centuries were about what comes after.',
      interaction: {
        type: 'reveal',
        face: 'You can now solve any \\( ax^2+bx+c = 0 \\). Is there a formula for \\( ax^3 + bx^2 + cx + d = 0 \\)? For degree 5?',
        cta: 'Tap for the end of the story',
        hidden: '<b>Cubics: yes.</b> Cardano published the formula in 1545 — after extracting it from Tartaglia, who had sworn him to secrecy; the credit is still disputed 500 years later. <b>Quartics: yes</b> (Ferrari, Cardano&rsquo;s student). <b>Degree 5 and up: NO — and not because nobody has been clever enough.</b> Abel and Galois PROVED, in the 1820s–30s, that no general formula in radicals can exist. Galois was 20 when he died in a duel; the theory he invented on the way is now a pillar of modern algebra.<br><br>And here&rsquo;s the part that should make you smile: the moves inside Cardano&rsquo;s cubic formula are the moves you just learned. A substitution that kills the \\( x^2 \\) term (exactly like completing the square kills the \\( x \\) term), then a sum-and-product system for two unknowns \\( u \\) and \\( v \\) — <b>Vieta construction</b>, the same trick from Lesson 6.4. What you did to quadratics, Cardano did to cubics. You are three lessons and a lot of courage from the 16th century&rsquo;s hardest open problem.',
      },
      success: 'Chapter 6, done. Next stop: special factorizations — the patterns that make hard algebra collapse.',
      coach: ['Guess before you tap: which degrees do you think have formulas?'],
    },
  ],
};
