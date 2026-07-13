/* Lesson 6.2b — Hard Factoring and Special Forms.
   Non-monic hunting on the balance component (failed guesses are real states);
   the area-model square makes perfect-square trinomials visible. */

const AREA_SQUARE = `<svg class="il-mod-wheel" viewBox="0 0 170 170" width="190" role="img" aria-label="Area model: an x by x square, two 3-wide arms, and a 3 by 3 corner">
  <rect x="10" y="10" width="110" height="110" fill="rgba(136,176,255,.18)" stroke="#88B0FF" stroke-width="1.5"/>
  <rect x="120" y="10" width="40" height="110" fill="rgba(255,177,146,.2)" stroke="#FFB192" stroke-width="1.5"/>
  <rect x="10" y="120" width="110" height="40" fill="rgba(255,177,146,.2)" stroke="#FFB192" stroke-width="1.5"/>
  <rect x="120" y="120" width="40" height="40" fill="rgba(87,211,100,.16)" stroke="#57D364" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text class="il-svg-blue-ink" x="65" y="70" font-size="15" font-weight="700" text-anchor="middle">x²</text>
  <text class="il-svg-peach-ink" x="140" y="70" font-size="13" text-anchor="middle">3x</text>
  <text class="il-svg-peach-ink" x="65" y="146" font-size="13" text-anchor="middle">3x</text>
  <text class="il-venn-caption" x="140" y="145" font-size="12" text-anchor="middle">9?</text>
</svg>`;

export default {
  id: 'lesson-6-2',
  title: 'Hard Factoring and Special Forms',
  kicker: 'Quadratic Equations',
  topicIndex: 5,
  lessonIndex: 1,
  next: 'interactive-lesson.html?chapter=6&lesson=3',
  notes: 'factoring.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Factor \\( -4x^2 - 8x - 3 \\).',
      body: 'A leading coefficient other than 1 breaks the product-and-sum game — you need a bigger net. Step one is always the same: make the leading coefficient positive.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( -4x^2 - 8x - 3 \\)' },
          s1: { eq: '\\( -(4x^2 + 8x + 3) \\qquad \\text{now factor } (sx+u)(tx+v) \\text{ with } st = 4, \\; uv = 3 \\)' },
          bad: { eq: '\\( (2x - 1)(2x - 3) = 4x^2 - 8x + 3 \\)', note: 'The outer and inner terms came out \\( -6x \\) and \\( -2x \\) — a middle term of \\( -8x \\), wrong sign. The sign compass said so before you multiplied: constant \\( +3 \\) with middle \\( +8 \\) means BOTH of \\( u, v \\) are positive. Undo.' },
          bad2: { eq: '\\( (4x + 1)(x + 3) = 4x^2 + 13x + 3 \\)', note: 'Right product, right constant — but the cross terms \\( 12x + x \\) overshoot to \\( 13x \\). The split of the 4 matters: \\( 4 = 4 \\times 1 \\) spreads the cross terms too far apart. Try the balanced split. Undo.' },
          win: { eq: '\\( -4x^2 - 8x - 3 = -(2x+1)(2x+3) \\)', note: 'Cross terms: \\( 2x \\cdot 3 = 6x \\) and \\( 1 \\cdot 2x = 2x \\), summing to the \\( 8x \\) you needed. This IS guess-driven — the book admits it. The skill isn&rsquo;t avoiding guesses; it&rsquo;s making guesses that fail fast and loud.' },
        },
        ops: [
          { label: 'Factor out \\( -1 \\)', to: { s0: 's1' } },
          { label: 'Try \\( (2x-1)(2x-3) \\)', to: { s1: 'bad' } },
          { label: 'Try \\( (4x+1)(x+3) \\)', to: { s1: 'bad2' } },
          { label: 'Try \\( (2x+1)(2x+3) \\)', to: { s1: 'win', bad: 'win', bad2: 'win' }, blocked: 'Make the leading coefficient positive first.' },
        ],
      },
      hint: 'For \\( 4x^2 + 8x + 3 \\): \\( st = 4 \\) (so \\( 2\\times2 \\) or \\( 4\\times1 \\)), \\( uv = 3 \\) (so \\( 1 \\times 3 \\)), and the cross terms \\( sv + ut \\) must hit 8.',
      success: 'Negative out front, then hunt \\( (sx+u)(tx+v) \\) against three conditions at once.',
      note: 'Non-monic recipe: \\( ax^2+bx+c = (sx+u)(tx+v) \\) needs \\( st = a \\), \\( uv = c \\), and \\( sv + ut = b \\). Keep \\( s, t \\) positive; if \\( a < 0 \\), pull out \\( -1 \\) first. Both failed guesses above announced themselves in one multiplication — that&rsquo;s the system working.',
      coach: ['First make the leading coefficient positive.', 'The 4 splits as 2×2 or 4×1; the 3 only as 1×3. Test the combinations.'],
    },
    {
      prompt: 'Solve \\( 4x^2 = 5x \\). First instinct: divide both sides by \\( x \\)?',
      body: 'Commit before you look.',
      interaction: {
        type: 'mcq',
        options: [
          'No — dividing by \\( x \\) throws away the root \\( x = 0 \\)',
          'Yes — it gives \\( 4x = 5 \\), so \\( x = 5/4 \\), done',
          'Yes, but only if \\( x \\) is positive',
          'No — you can never divide both sides of an equation by anything',
        ],
        correct: 0,
      },
      hint: 'Is \\( x = 0 \\) a solution of \\( 4x^2 = 5x \\)? Check it. Then ask whether dividing by \\( x \\) could ever have found it.',
      explain: '\\( x = 0 \\) works: \\( 0 = 0 \\). But dividing by \\( x \\) silently assumes \\( x \\ne 0 \\) — it deletes that root before you ever see it. Do it right: \\( 4x^2 - 5x = 0 \\) → \\( x(4x - 5) = 0 \\) → \\( x = 0 \\) or \\( x = \\frac54 \\). <b>Two</b> roots.',
      note: '<b>Never divide by a variable. Factor it out instead.</b> Division by something that might be zero destroys solutions; factoring keeps every one of them, and the zero-product property reads them all off.',
      coach: ['Test \\( x = 0 \\) in the original equation.', 'Move everything to one side and pull out the common \\( x \\).'],
    },
    {
      prompt: 'Difference of squares: \\( x^2 - a^2 = (x-a)(x+a) \\). Why do the middle terms disappear?',
      interaction: {
        type: 'reveal',
        face: 'Expand \\( (x-a)(x+a) \\): the cross terms are \\( +ax \\) and \\( -ax \\).',
        cta: 'Tap — you have met this cancellation twice before',
        hidden: 'They annihilate: \\( x^2 + ax - ax - a^2 = x^2 - a^2 \\). This is the <em>third</em> appearance of the same trick — rationalizing denominators in Chapter 1 (\\( (\\sqrt3-1)(\\sqrt3+1) \\)) and complex conjugates in Chapter 2 (\\( (a+bi)(a-bi) \\)) were both this identity in costume. <b>Conjugate pairs kill the middle term.</b> Warning: it only works for a MINUS. \\( x^2 + 9 \\) does not factor over the reals — there is no such thing as a &ldquo;sum of squares&rdquo; factorization.',
      },
      success: 'Same identity, third costume. When you see a subtraction of two squares, you are already done.',
      coach: ['Multiply the two binomials and watch the \\( ax \\) terms.'],
    },
    {
      prompt: 'Spot the disguises. Factor these.',
      body: 'The &ldquo;\\( x \\)&rdquo; in \\( x^2 - a^2 \\) can be any expression — and sometimes a common factor hides the pattern entirely.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 4x^2 - 9 = (2x-3)(2x + \\;?) \\)', answer: '3', width: 84 },
          { label: '\\( 5x^2 - 45 = 5(x-3)(x + \\;?) \\)', answer: '3', width: 84 },
        ],
      },
      hint: '\\( 4x^2 = (2x)^2 \\). And in the second, pull the 5 out first — THEN you can see the squares.',
      explain: '\\( 4x^2 - 9 = (2x)^2 - 3^2 = (2x-3)(2x+3) \\). And \\( 5x^2 - 45 = 5(x^2 - 9) = 5(x-3)(x+3) \\) — two forms stacked: common factor, then difference of squares.',
      note: 'Always pull out the common factor FIRST. It shrinks the numbers and often exposes a special form that was invisible underneath.',
      coach: ['Write each term as something-squared.', 'For the second: what divides both 5x² and 45?'],
    },
    {
      prompt: 'Perfect squares, geometrically: what corner completes \\( x^2 + 6x \\)?',
      body: 'The \\( x^2 \\) is a square. The \\( 6x \\) splits into two 3-wide arms hugging its sides. One corner is missing.' + AREA_SQUARE,
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'area of the missing corner', answer: '9', width: 84 },
          { label: 'so \\( x^2+6x+9 = (x + \\;?)^2 \\)', answer: '3', width: 84 },
        ],
      },
      hint: 'The arms are each \\( 3 \\) wide (half of 6). The corner they leave open is \\( 3 \\times 3 \\).',
      explain: 'Half of 6 is 3; the corner is \\( 3^2 = 9 \\). The completed figure is a square of side \\( x+3 \\), so \\( x^2 + 6x + 9 = (x+3)^2 \\). The whole picture: \\( (x+3)^2 = x^2 + 3x + 3x + 9 \\) — the two arms ARE the two middle terms.',
      note: '<b>Perfect square trinomial:</b> \\( x^2 + 2ax + a^2 = (x+a)^2 \\). Test: is the constant exactly \\( (b/2)^2 \\)? Hold onto this picture — next lesson it becomes <em>completing the square</em>, and it derives the quadratic formula.',
      coach: ['Half the middle coefficient — that&rsquo;s the arm width.', 'The corner is that width squared.'],
    },
    {
      prompt: 'Which of these is a perfect square trinomial?',
      body: 'One check: is the constant the square of half the middle coefficient? (For non-monic: is the middle term \\( 2\\sqrt{a}\\sqrt{c} \\)?)',
      interaction: {
        type: 'mcq',
        options: [
          '\\( 4x^2 + 12x + 9 \\)',
          '\\( x^2 + 5x + 9 \\)',
          '\\( x^2 + 6x - 9 \\)',
          '\\( 4x^2 + 6x + 9 \\)',
        ],
        correct: 0,
      },
      hint: '\\( 4x^2 = (2x)^2 \\) and \\( 9 = 3^2 \\). A perfect square would need middle term \\( 2 \\cdot 2x \\cdot 3 \\).',
      explain: '\\( 4x^2 + 12x + 9 = (2x+3)^2 \\) — the middle \\( 12x \\) is exactly \\( 2(2x)(3) \\) ✓. The others fail: \\( x^2+5x+9 \\) would need \\( (5/2)^2 = 6.25 \\), not 9; \\( x^2+6x-9 \\) has a NEGATIVE constant (squares are never negative); \\( 4x^2+6x+9 \\) needs \\( 12x \\), not \\( 6x \\).',
      note: 'The classic error is checking only the two ends. \\( x^2 + 5x + 9 \\) has a square out front and a square in back — and is not a perfect square. <b>The middle term is the test.</b>',
      coach: ['Check the ends are squares, then verify the middle term matches \\( 2\\sqrt{a}\\sqrt{c} \\).'],
    },
    {
      prompt: 'Mastery gauntlet: solve \\( 3x^2 + 6x + 3 = 0 \\).',
      body: 'Two forms stacked again. How many distinct roots?',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'the root', answer: '-1', width: 90 },
          { label: 'how many DISTINCT roots?', answer: '1', width: 90 },
        ],
      },
      hint: 'Factor out the 3 first: \\( 3(x^2 + 2x + 1) = 3(x+1)^2 \\).',
      explain: '\\( 3(x+1)^2 = 0 \\) → \\( x = -1 \\), and that is the only root. A perfect square gives a <b>repeated (double) root</b> — the same solution twice over. Next lesson names the fingerprint of this situation: the discriminant is zero.',
      coach: ['Common factor, then recognize the perfect square.', 'How many distinct values kill \\( (x+1)^2 \\)?'],
    },
    {
      prompt: 'The black belt: factor \\( 49x^2 - 316x + 132 \\).',
      body: 'The book&rsquo;s own framing — factor this one and you have mastered the art. Take your time; the hunt is the lesson. (\\( st = 49 \\) forces \\( 7\\times7 \\) or \\( 1\\times49 \\); \\( uv = 132 \\) with both negative.)',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 49x^2 - 316x + 132 \\qquad st = 49, \\; uv = 132, \\; sv + ut = -316 \\)' },
          sign: { eq: '\\( uv = +132 > 0, \\quad sv + ut = -316 < 0 \\;\\Rightarrow\\; u, v \\text{ both NEGATIVE} \\)', note: 'Sign compass, first move. Both \\( u \\) and \\( v \\) are negative. That halves the search before it starts.' },
          try77: { eq: '\\( (7x + u)(7x + v): \\quad \\text{cross terms} = 7(u+v) = -316 \\;\\Rightarrow\\; u + v = -45.1\\ldots \\)', note: 'Dead — \\( 316 \\) isn&rsquo;t divisible by 7, so the balanced split \\( 7 \\times 7 \\) can never produce that middle term with integers. Only \\( 1 \\times 49 \\) survives. One line of arithmetic just eliminated half the search space.' },
          split: { eq: '\\( (x + u)(49x + v): \\quad v + 49u = -316, \\quad uv = 132 \\)' },
          near: { eq: '\\( u = -4: \\; v = -316 + 196 = -120, \\quad uv = 480 \\ne 132 \\)', note: 'Overshoots. The product is far too big — \\( |u| \\) needs to be larger so that \\( |v| \\) drops fast. Push on.' },
          win: { eq: '\\( u = -6: \\; v = -316 + 294 = -22, \\quad uv = (-6)(-22) = 132 \\;\\checkmark \\)<br>\\( 49x^2 - 316x + 132 = (x - 6)(49x - 22) \\)', note: 'Black belt earned. Roots: \\( x = 6 \\) and \\( x = \\frac{22}{49} \\). Remember this factorization — it walks back on stage in Lesson 6.4, as the punchline of a radical equation. It was never a random exercise.' },
        },
        ops: [
          { label: 'Run the sign compass', to: { s0: 'sign' } },
          { label: 'Try the split \\( 7 \\times 7 \\)', to: { sign: 'try77', s0: 'try77' } },
          { label: 'Use the split \\( 1 \\times 49 \\)', to: { sign: 'split', try77: 'split', s0: 'split' } },
          { label: 'Test \\( u = -4 \\)', to: { split: 'near' }, blocked: 'Commit to a split of the 49 first.' },
          { label: 'Test \\( u = -6 \\)', to: { split: 'win', near: 'win' }, blocked: 'Commit to a split of the 49 first.' },
        ],
      },
      hint: 'Kill the \\( 7 \\times 7 \\) split fast (316 isn&rsquo;t a multiple of 7), then search \\( (x+u)(49x+v) \\) with both negative.',
      success: 'A systematic hunt, not a lucky one: signs first, splits second, then a short march through candidates.',
      note: 'The professional move is <b>elimination before search</b>. Sign analysis and one divisibility check cut this from dozens of candidates to a handful.',
      coach: ['What do the signs of \\( c \\) and \\( b \\) force about \\( u \\) and \\( v \\)?', 'If \\( s = t = 7 \\), the middle term is \\( 7(u+v) \\) — must be divisible by 7. Is 316?', 'So it&rsquo;s \\( (x+u)(49x+v) \\). Step \\( u \\) down through the negative divisors of 132.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Factor \\( 2x^2 + 5x - 3 \\).',
      interaction: {
        type: 'mcq',
        options: [
          '\\( (2x - 1)(x + 3) \\)',
          '\\( (2x + 1)(x - 3) \\)',
          '\\( (2x - 3)(x + 1) \\)',
          '\\( (x - 1)(2x + 3) \\)',
        ],
        correct: 0,
      },
      hint: 'Expand each and check the middle term. You need \\( +5x \\).',
      explain: '\\( (2x-1)(x+3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3 \\) ✓. The near-miss \\( (2x+1)(x-3) \\) gives \\( -5x \\) — right size, wrong sign.',
      coach: ['Cross terms: outer + inner must equal \\( 5x \\).'],
    },
    {
      section: 'checkpoint',
      prompt: 'Factor \\( 9x^2 - 25 \\).',
      interaction: {
        type: 'mcq',
        options: [
          '\\( (3x-5)(3x+5) \\)',
          '\\( (3x-5)^2 \\)',
          '\\( (9x-5)(x+5) \\)',
          'It does not factor',
        ],
        correct: 0,
      },
      hint: 'Both terms are perfect squares, separated by a minus.',
      explain: '\\( (3x)^2 - 5^2 = (3x-5)(3x+5) \\). Difference of squares, disguised by the coefficients.',
      coach: ['Write both terms as squares first.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Solve \\( 6x^2 = 2x \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'root 1', answer: '0', width: 84 },
          { label: 'root 2', answer: '1/3', width: 84 },
        ],
      },
      hint: 'Do NOT divide by \\( x \\). Move everything over and factor it out.',
      explain: '\\( 6x^2 - 2x = 0 \\) → \\( 2x(3x - 1) = 0 \\) → \\( x = 0 \\) or \\( x = \\frac13 \\). Dividing by \\( x \\) would have hidden the zero root.',
      coach: ['Everything on one side, then pull out the common factor.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'If \\( 21x^2 + ax + 21 \\) factors into two linear binomials with integer coefficients, then \\( a \\) must be…',
      body: 'AHSME 1951. A parity argument — Chapter 5&rsquo;s mods, quietly doing quadratic work.',
      interaction: {
        type: 'mcq',
        options: [
          'even',
          'odd',
          'divisible by 21',
          'prime',
        ],
        correct: 0,
      },
      hint: '\\( st = 21 \\) and \\( uv = 21 \\). 21 is odd — so what does that force about \\( s, t, u, v \\)? Then look at \\( a = sv + ut \\).',
      explain: 'Every factor of 21 is odd, so \\( s, t, u, v \\) are ALL odd. Then \\( sv \\) is odd·odd = odd, and \\( ut \\) is odd too — and \\( a = sv + ut \\) is odd + odd = <b>even</b>. No case-checking, no examples: parity settles it in one line. (Sanity check: \\( (3x+7)(7x+3) \\) gives \\( a = 9 + 49 = 58 \\) ✓ even.)',
      note: 'Mod-2 reasoning kills quadratic questions too. When a problem says &ldquo;integer coefficients&rdquo; and hands you an odd number, check parity before anything else.',
      coach: ['What do all the divisors of 21 have in common?', 'Odd times odd is odd. Odd plus odd is…?'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'For which constant \\( c \\) is \\( 9n^2 - 30n + c \\) a perfect square for EVERY \\( n \\)?',
      body: 'MATHCOUNTS 1989. The area model closes it in seconds.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'c =', answer: '25', width: 90 }],
      },
      hint: 'If it&rsquo;s a perfect square, it&rsquo;s \\( (3n - k)^2 \\) for some \\( k \\) — because \\( 9n^2 = (3n)^2 \\). Expand and match the middle term.',
      explain: '\\( (3n-k)^2 = 9n^2 - 6kn + k^2 \\). Matching the middle: \\( -6k = -30 \\), so \\( k = 5 \\). Then \\( c = k^2 = \\mathbf{25} \\), and \\( 9n^2 - 30n + 25 = (3n-5)^2 \\) ✓.',
      walkthrough: [
        'The leading term \\( 9n^2 \\) is \\( (3n)^2 \\) — so the square, if it exists, is built on a side of \\( 3n \\): the form must be \\( (3n - k)^2 \\).',
        'Area-model reading: the big square is \\( 3n \\) by \\( 3n \\). The two arms carry the middle term \\( -30n \\), so each arm contributes \\( -15n \\) and has width \\( k = 5 \\).',
        'The missing corner is \\( k \\times k = 25 \\). That corner IS \\( c \\).',
        'Verify by expansion: \\( (3n-5)^2 = 9n^2 - 15n - 15n + 25 = 9n^2 - 30n + 25 \\) ✓. So \\( c = 25 \\) — and it works for every \\( n \\), because it&rsquo;s an identity, not an equation.',
      ],
      success: 'Half the middle coefficient, squared. The area model turns &ldquo;find \\( c \\)&rdquo; into &ldquo;fill the corner.&rdquo;',
      note: 'The corner-filling move — take half the middle coefficient and square it — is about to become the most important technique in the chapter. Next lesson it has a name: <b>completing the square</b>.',
      coach: ['What must the side of the square be, given the \\( 9n^2 \\)?', 'Expand \\( (3n-k)^2 \\) and match the \\( n \\)-term against \\( -30n \\).', 'Then \\( c \\) is just \\( k^2 \\).'],
    },
  ],
};
