/* Lesson 6.1–6.2a — The Zero-Product Idea and Monic Factoring.
   The sum-product finder runs on the balance component: candidate number-pairs are
   ops, and wrong pairs transform into states that show their sum failing. */

const FOIL_GRID = `<table class="il-place-value" style="margin:14px auto 0" aria-label="FOIL grid for (x+2)(x+3)">
  <tr><th></th><th>\\( x \\)</th><th>\\( +3 \\)</th></tr>
  <tr><th>\\( x \\)</th><td>\\( x^2 \\)</td><td>\\( 3x \\)</td></tr>
  <tr><th>\\( +2 \\)</th><td>\\( 2x \\)</td><td>\\( 6 \\)</td></tr>
</table>`;

export default {
  id: 'lesson-6-1',
  title: 'The Zero-Product Idea',
  kicker: 'Quadratic Equations',
  topicIndex: 5,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=6&lesson=2',
  notes: 'factoring.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'A rock is thrown down from a 100-ft cliff. Its height after \\( t \\) seconds is \\( 100 - 5t - 16t^2 \\). When does it land?',
      body: 'Drag time forward and watch it fall. Gravity <em>accelerates</em> — that &minus;16t² term is why every equation you&rsquo;ve solved so far is about to run out of road.',
      interaction: {
        type: 'slider',
        min: 0, max: 3, step: 0.25, value: 0, label: 't (sec)', mustExplore: 5,
        render(t) {
          const h = 100 - 5 * t - 16 * t * t;
          const shown = Math.max(0, h).toFixed(1);
          const pct = Math.max(0, Math.min(100, h)) ;
          const bar = `<svg viewBox="0 0 40 120" width="36" style="display:block;margin:8px auto 0;overflow:visible">
            <line x1="6" y1="4" x2="6" y2="112" stroke="#C5C1CF" stroke-width="1.5"/>
            <circle cx="20" cy="${8 + (100 - pct) * 1.02}" r="6" fill="#FFB192" stroke="#9C4E35" stroke-width="1"/>
            <line x1="0" y1="112" x2="40" y2="112" stroke="#C5C1CF" stroke-width="2"/>
          </svg>`;
          return {
            main: `\\( h(${t}) = ${h < 0 ? '\\text{already landed}' : shown + '\\text{ ft}'} \\)` + bar,
            sub: h > 0
              ? `Still falling — and falling FASTER each second. The drop from t to t+1 keeps growing.`
              : `It has hit the ground. Landing happened between 2.25 and 2.5 seconds — but "between" isn't an answer.`,
          };
        },
      },
      success: 'Landing means \\( 100 - 5t - 16t^2 = 0 \\). Try to isolate \\( t \\) the Chapter-3 way and it slips: \\( t = \\frac{100 - 16t^2}{5} \\) — there&rsquo;s still a \\( t \\) on the right.',
      note: 'An equation with a squared unknown is a <b>quadratic</b>. Isolation fails on it: the variable appears twice, at two different powers. This whole chapter is the machinery that beats it.',
      coach: ['Watch how much height is lost in each successive quarter-second.'],
    },
    {
      prompt: 'Before we break quadratics apart, watch one get built. Expand \\( (x+2)(x+3) \\).',
      body: 'Every cell of the grid is one product — the Chapter 2 FOIL grid, back for a second tour.' + FOIL_GRID,
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'coefficient of \\( x \\)', answer: '5', width: 90 },
          { label: 'constant term', answer: '6', width: 90 },
        ],
      },
      hint: 'The two middle cells, \\( 3x \\) and \\( 2x \\), are like terms — combine them.',
      explain: '\\( (x+2)(x+3) = x^2 + 5x + 6 \\). Look where the 2 and the 3 went: they <em>added</em> into the \\( x \\)-coefficient and <em>multiplied</em> into the constant.',
      coach: ['Add the two middle cells.', 'The corners give \\( x^2 \\) and the constant.'],
    },
    {
      prompt: 'Now symbolically: \\( (x - r)(x - s) = x^2 - (r+s)x + rs \\). Where did the roots go?',
      body: 'This tiny identity is the engine of the entire lesson — and, quietly, of the whole chapter.',
      interaction: {
        type: 'mcq',
        options: [
          'Their SUM is the \\( x \\)-coefficient (negated); their PRODUCT is the constant',
          'Their PRODUCT is the \\( x \\)-coefficient; their SUM is the constant',
          'Both appear only in the constant',
          'They vanish — the expanded form forgets them',
        ],
        correct: 0,
      },
      hint: 'Expand it: \\( x^2 - sx - rx + rs \\). Group the \\( x \\)-terms.',
      explain: '\\( (x-r)(x-s) = x^2 - (r+s)x + rs \\). The roots hide in plain sight: sum in the middle coefficient (with a minus), product in the constant. Reading a quadratic backwards to find \\( r \\) and \\( s \\) is exactly what factoring IS.',
      note: 'Remember this shape. In Lesson 6.3 it gets a name — <b>Vieta&rsquo;s formulas</b> — and a license to solve problems no one else can.',
      coach: ['Multiply it out term by term.', 'Which coefficient collects both \\( r \\) and \\( s \\) additively?'],
    },
    {
      prompt: '\\( (x+2)(x+3) = 0 \\). What MUST be true?',
      body: 'The keystone of the chapter. Choose carefully.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( x + 2 = 0 \\) OR \\( x + 3 = 0 \\)',
          '\\( x + 2 = 0 \\) AND \\( x + 3 = 0 \\)',
          '\\( x + 2 = 1 \\) and \\( x + 3 = 0 \\), or similar splits of the product',
          'Nothing — a product of two things can be 0 in many ways',
        ],
        correct: 0,
      },
      hint: 'If two numbers multiply to zero, can both be nonzero?',
      explain: 'A product is zero exactly when SOME factor is zero — so \\( x = -2 \\) or \\( x = -3 \\). Not &ldquo;and&rdquo;: no single \\( x \\) can do both. And note what makes 0 special: \\( ab = 6 \\) tells you almost nothing (a could be 1, 2, 0.5, −3…), but \\( ab = 0 \\) pins one of them exactly.',
      note: '<b>Zero-product property:</b> \\( ab = 0 \\iff a = 0 \\) or \\( b = 0 \\). This is <em>why</em> factoring solves equations — and why we always move everything to one side and set it equal to <b>zero</b> first. No other constant works.',
      coach: ['Try to make \\( 3 \\times 5 = 0 \\). What has to give?', 'The roots are the values that KILL a factor: \\( x = -2 \\) kills \\( x+2 \\).'],
    },
    {
      prompt: 'Factor \\( x^2 + 9x + 18 \\). Hunt the pair.',
      body: 'You need two numbers with <b>product 18</b> and <b>sum 9</b>. Both signs are positive here, so both numbers must be — try the factor pairs of 18.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x^2 + 9x + 18 \\qquad \\text{need } uv = 18, \\; u + v = 9 \\)' },
          p1: { eq: '\\( 1 \\times 18: \\quad 1 + 18 = 19 \\;\\ne\\; 9 \\)', note: 'Product&rsquo;s right, sum&rsquo;s far too big. Next pair — and notice the sums <em>shrink</em> as the pair grows more balanced.' },
          p2: { eq: '\\( 2 \\times 9: \\quad 2 + 9 = 11 \\;\\ne\\; 9 \\)', note: 'Closer. Keep going toward the middle.' },
          win: { eq: '\\( 3 \\times 6: \\quad 3 + 6 = 9 \\;\\checkmark \\qquad x^2 + 9x + 18 = (x+3)(x+6) \\)', note: 'Three pairs, one hit. And the roots are \\( -3 \\) and \\( -6 \\) — the NEGATIVES of the numbers you found. That sign flip trips up everybody once; let it be now.' },
        },
        ops: [
          { label: 'Try \\( 1 \\times 18 \\)', to: { s0: 'p1' } },
          { label: 'Try \\( 2 \\times 9 \\)', to: { s0: 'p2', p1: 'p2' } },
          { label: 'Try \\( 3 \\times 6 \\)', to: { s0: 'win', p1: 'win', p2: 'win' } },
          { label: 'Try \\( -3 \\times -6 \\)', to: {}, blocked: 'Two negatives multiply to \\( +18 \\) ✓ — but they&rsquo;d sum to \\( -9 \\), not \\( +9 \\). With both signs positive in the trinomial, both numbers are positive.' },
        ],
      },
      hint: 'List the factor pairs of 18 — there are only three — and check each sum.',
      success: 'Product 18, sum 9 → 3 and 6.',
      note: 'The whole game of monic factoring: <b>two numbers with product \\( c \\) and sum \\( b \\)</b>. Then \\( x^2 + bx + c = (x+u)(x+v) \\), and the roots are \\( -u, -v \\).',
      coach: ['Only three factor pairs of 18 exist. Walk them.', 'Compare each pair&rsquo;s SUM against 9.'],
    },
    {
      prompt: 'Sign compass. \\( x^2 - x - 30 \\): what do you know about the pair <em>before</em> hunting?',
      body: 'The constant is negative and the middle is negative. That fixes both signs — reason it out first, guess second.',
      interaction: {
        type: 'mcq',
        options: [
          'Opposite signs, and the negative one is bigger in size',
          'Opposite signs, and the positive one is bigger in size',
          'Both negative',
          'Both positive',
        ],
        correct: 0,
      },
      hint: 'A negative PRODUCT needs opposite signs. Then a negative SUM means the negative number outweighs.',
      explain: 'Product \\( -30 \\) → opposite signs. Sum \\( -1 \\) → the negative one wins by 1. Numbers differing by 1 whose product is 30: \\( 5 \\) and \\( 6 \\). So the pair is \\( 5, -6 \\), and \\( x^2 - x - 30 = (x+5)(x-6) \\) with roots \\( -5, 6 \\).',
      note: 'The sign compass, once and for all: \\( c > 0 \\) → same signs (both match \\( b \\)&rsquo;s sign). \\( c < 0 \\) → opposite signs, and the bigger one carries \\( b \\)&rsquo;s sign. Thirty seconds of thought kills half the candidates.',
      coach: ['What does a negative product force about the two signs?', 'Then the sum tells you which one is bigger.'],
    },
    {
      prompt: 'Integer coefficients first: solve \\( x^2 + \\tfrac32 x = 1 \\).',
      body: 'Fractions in a quadratic are a trap — clear them before you even think about factoring.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x^2 + \\tfrac{3}{2}x = 1 \\)' },
          bad: { eq: '\\( x^2 + \\tfrac{3}{2}x - 1 = 0 \\qquad \\text{need } uv = -1, \\; u+v = \\tfrac32 \\)', note: 'Everything on one side — correct and necessary — but now you&rsquo;re hunting a pair of numbers with a fractional sum. Miserable. Clear the fraction FIRST, then move everything over.' },
          s1: { eq: '\\( 2x^2 + 3x = 2 \\)' },
          s2: { eq: '\\( 2x^2 + 3x - 2 = 0 \\)' },
          win: { eq: '\\( (2x - 1)(x + 2) = 0 \\;\\Rightarrow\\; x = \\tfrac12 \\;\\text{ or }\\; x = -2 \\)', note: 'That leading 2 means this isn&rsquo;t a plain product-and-sum hunt anymore — non-monic quadratics need a bigger net, which is the next lesson&rsquo;s entire job. (Verify by expanding: \\( 2x^2 + 4x - x - 2 \\) ✓.)' },
        },
        ops: [
          { label: 'Multiply both sides by 2', to: { s0: 's1' } },
          { label: 'Move everything to one side', to: { s0: 'bad', s1: 's2', bad: 's2' }, blocked: 'Already collected on one side.' },
          { label: 'Factor it', to: { s2: 'win' }, blocked: 'Get to \\( \\text{(quadratic)} = 0 \\) with integer coefficients first.' },
        ],
      },
      hint: 'Multiply through by the denominator, THEN set the whole thing equal to zero.',
      success: 'Clear fractions → collect on one side → factor. In that order.',
      note: 'Two rituals, every single time: (1) integer coefficients, (2) everything on one side, equal to <b>zero</b> — the zero-product property accepts no substitutes.',
      coach: ['What single multiplication kills the \\( \\frac32 \\)?', 'Only then move the constant across.'],
    },
    {
      prompt: 'Expand \\( (x+y)^3 \\).',
      body: 'Take \\( (x+y)^2 = x^2 + 2xy + y^2 \\) and multiply by \\( (x+y) \\) once more. Fill in the middle coefficients.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'coeff of \\( x^2y \\)', answer: '3', width: 84 },
          { label: 'coeff of \\( xy^2 \\)', answer: '3', width: 84 },
        ],
      },
      hint: '\\( (x^2 + 2xy + y^2)(x + y) \\): collect the \\( x^2y \\) terms — one from \\( x^2 \\cdot y \\), two from \\( 2xy \\cdot x \\).',
      explain: '\\( (x+y)^3 = x^3 + 3x^2y + 3xy^2 + y^3 \\). The coefficients \\( 1, 3, 3, 1 \\) are not a coincidence — you&rsquo;ll meet them again as a row of Pascal&rsquo;s triangle when this book reaches the Binomial Theorem.',
      note: 'The book&rsquo;s own flag on this identity: <em>&ldquo;you will see this again, many times.&rdquo;</em> Memorize \\( 1, 3, 3, 1 \\) — and its cousin \\( (x-y)^3 = x^3 - 3x^2y + 3xy^2 - y^3 \\), signs alternating.',
      coach: ['Square first, then multiply the square by \\( (x+y) \\).', 'Collect like terms carefully — two sources feed each middle term.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Solve \\( x^2 = -5x - 6 \\).',
      body: 'Rearrange first. Give the two roots.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'smaller root', answer: '-3', width: 90 },
          { label: 'larger root', answer: '-2', width: 90 },
        ],
      },
      hint: 'Move everything left: \\( x^2 + 5x + 6 = 0 \\). Product 6, sum 5.',
      explain: '\\( (x+2)(x+3) = 0 \\) → roots \\( -2 \\) and \\( -3 \\). Solving without setting it to zero first — say, dividing by \\( x \\) — is how roots get lost.',
      coach: ['Everything on one side, equal to zero.', 'Then the product-and-sum hunt on 6 and 5.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Solve \\( x^2 - 3x - 40 = 0 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'smaller root', answer: '-5', width: 90 },
          { label: 'larger root', answer: '8', width: 90 },
        ],
      },
      hint: 'Negative product → opposite signs. Sum \\( -3 \\) → the negative one is bigger by 3.',
      explain: 'Product \\( -40 \\), sum \\( -3 \\): the pair is \\( 5, -8 \\), so \\( (x+5)(x-8) = 0 \\) and the roots are \\( -5 \\) and \\( 8 \\).',
      coach: ['Sign compass first, then hunt factor pairs of 40 differing by 3.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Factor \\( x^2 + 7x + 12 \\).',
      interaction: {
        type: 'mcq',
        options: [
          '\\( (x+3)(x+4) \\)',
          '\\( (x+2)(x+6) \\)',
          '\\( (x-3)(x-4) \\)',
          '\\( (x+1)(x+12) \\)',
        ],
        correct: 0,
      },
      hint: 'Product 12, sum 7.',
      explain: '\\( 3 \\times 4 = 12 \\) and \\( 3 + 4 = 7 \\) → \\( (x+3)(x+4) \\). The pair \\( 2, 6 \\) has the right product but sums to 8; \\( (x-3)(x-4) \\) would give the middle term \\( -7x \\).',
      coach: ['Check both conditions on every candidate — product AND sum.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Cold read: the roots of \\( (x-4)(x+9) = 0 \\) are…',
      interaction: {
        type: 'mcq',
        options: ['\\( 4 \\) and \\( -9 \\)', '\\( -4 \\) and \\( 9 \\)', '\\( 4 \\) and \\( 9 \\)', '\\( -4 \\) and \\( -9 \\)'],
        correct: 0,
      },
      hint: 'Each factor is zero at the value that CANCELS it.',
      explain: '\\( x - 4 = 0 \\) at \\( x = 4 \\); \\( x + 9 = 0 \\) at \\( x = -9 \\). The signs flip on their way out of the parentheses — always.',
      coach: ['What value of \\( x \\) makes \\( x + 9 \\) vanish?'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Two students solve the same quadratic \\( x^2 + bx + c = 0 \\). One miscopies the middle coefficient and gets roots \\( \\{-6, 1\\} \\). The other miscopies the constant and gets roots \\( \\{2, 3\\} \\). What are the REAL roots?',
      body: 'MA&copy; 1992. No formula exists yet — and none is needed. Sum-and-product reasoning does the whole job.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'smaller root', answer: '-1', width: 90 },
          { label: 'larger root', answer: '6', width: 90 },
        ],
      },
      hint: 'The student who botched \\( b \\) still had the right \\( c \\) — and \\( c \\) is the PRODUCT of roots. The student who botched \\( c \\) still had the right \\( b \\) — and \\( b \\) is the negated SUM.',
      explain: 'Student 1 kept \\( c \\): \\( c = (-6)(1) = -6 \\). Student 2 kept \\( b \\): sum \\( = 2+3 = 5 \\), so \\( b = -5 \\). The true equation is \\( x^2 - 5x - 6 = 0 = (x-6)(x+1) \\), with roots \\( \\mathbf{6} \\) and \\( \\mathbf{-1} \\).',
      walkthrough: [
        'Each student got ONE coefficient right — and each wrong root-set still carries honest information about that one coefficient.',
        'Student 1 miscopied the middle term, so their CONSTANT was correct. Constant = product of roots: \\( c = (-6)(1) = -6 \\).',
        'Student 2 miscopied the constant, so their MIDDLE term was correct. Middle coefficient = negated sum of roots: sum \\( = 2 + 3 = 5 \\), so \\( b = -5 \\).',
        'Assemble the true quadratic: \\( x^2 - 5x - 6 = 0 \\). Factor it — product \\( -6 \\), sum \\( -5 \\) → the pair \\( 1, -6 \\): \\( (x+1)(x-6) = 0 \\).',
        'The real roots: \\( -1 \\) and \\( 6 \\). Notice you never solved either student&rsquo;s wrong equation — you harvested it.',
      ],
      success: 'You just read coefficients OFF roots and roots OFF coefficients, in both directions. That two-way street is the most reusable idea in the chapter.',
      note: 'This dial goes both ways: roots → coefficients (sum and product) and coefficients → roots (factoring). Lesson 6.3 makes it official and gives it a name.',
      coach: ['Which coefficient did each student get RIGHT?', 'A correct constant tells you the product of the true roots.', 'A correct middle coefficient tells you the sum of the true roots.'],
    },
  ],
};
