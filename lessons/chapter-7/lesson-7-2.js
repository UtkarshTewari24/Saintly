/* Lesson 7.2 — Clever Manipulations (the Power-Sums Engine).
   The triangle: sum, product, power-sum. Know any two, extract the third —
   and never, ever solve for x and y. */

const TRIANGLE_SVG = `<svg class="il-mod-wheel" viewBox="0 0 260 150" width="260" role="img" aria-label="Triangle linking sum, product and power sums">
  <polygon points="130,16 24,132 236,132" fill="none" stroke="#88B0FF" stroke-width="1.6" stroke-dasharray="5 4"/>
  <circle cx="130" cy="16" r="5" fill="#88B0FF"/><circle cx="24" cy="132" r="5" fill="#FFB192"/><circle cx="236" cy="132" r="5" fill="#57D364"/>
  <text class="il-svg-blue-ink" x="130" y="8" font-size="11" text-anchor="middle" font-weight="700">s = x + y</text>
  <text class="il-svg-peach-ink" x="24" y="147" font-size="11" text-anchor="middle" font-weight="700">p = xy</text>
  <text class="il-svg-ink" x="236" y="147" font-size="11" text-anchor="middle" font-weight="700">xⁿ + yⁿ</text>
  <text class="il-venn-caption" x="130" y="90" font-size="10.5" text-anchor="middle">know any two corners →</text>
  <text class="il-venn-caption" x="130" y="104" font-size="10.5" text-anchor="middle">the identities walk you to the third</text>
</svg>`;

export default {
  id: 'lesson-7-2',
  title: 'Clever Manipulations',
  kicker: 'Special Factorizations',
  topicIndex: 6,
  lessonIndex: 1,
  next: 'interactive-lesson.html?chapter=7&lesson=3',
  notes: 'algebraic-manipulation.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: '\\( x + \\dfrac{1}{x} = 1 \\). Find \\( x^3 + \\dfrac{1}{x^3} \\).',
      body: 'There are two roads. One of them is a trap — and it&rsquo;s the one everybody takes.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x + \\dfrac{1}{x} = 1 \\qquad\\Longrightarrow\\qquad x^3 + \\dfrac{1}{x^3} = \\;? \\)' },
          h1: { eq: '\\( x^2 - x + 1 = 0 \\;\\Rightarrow\\; x = \\dfrac{1 \\pm i\\sqrt3}{2} \\)', note: 'Path A: solve for \\( x \\). Congratulations — it&rsquo;s complex. Now you must CUBE that, and cube its reciprocal, and add them. It works. It will take you ten minutes and three sign errors.' },
          h2: { eq: '\\( \\left(\\dfrac{1 \\pm i\\sqrt3}{2}\\right)^{3} + \\ldots \\)', note: 'Still going? This is the trap: you are computing \\( x \\), which the problem never asked for. Undo, and look at what it DID ask for.' },
          c1: { eq: '\\( \\left(x + \\dfrac1x\\right)^3 = 1^3 = 1 \\)', note: 'Path B: cube the GIVEN equation. Don&rsquo;t solve anything — just power it up.' },
          c2: { eq: '\\( x^3 + 3x + \\dfrac{3}{x} + \\dfrac{1}{x^3} = 1 \\)', note: 'Expanding \\( (x + \\frac1x)^3 \\): the middle terms are \\( 3x^2 \\cdot \\frac1x = 3x \\) and \\( 3x \\cdot \\frac{1}{x^2} = \\frac3x \\).' },
          c3: { eq: '\\( \\left(x^3 + \\dfrac{1}{x^3}\\right) + 3\\left(x + \\dfrac1x\\right) = 1 \\)', note: 'Group the strays: \\( 3x + \\frac3x = 3(x + \\frac1x) \\) — and that is the quantity you were GIVEN. It equals 1.' },
          win: { eq: '\\( x^3 + \\dfrac{1}{x^3} = 1 - 3(1) = -2 \\)', note: 'Four lines. And \\( x \\) was never found — it was never needed. <b>The answer existed without the number.</b> That sentence is this entire lesson.' },
        },
        ops: [
          { label: 'Path A: solve for \\( x \\) first', to: { s0: 'h1' } },
          { label: 'Path A: now cube that complex number…', to: { h1: 'h2' }, blocked: 'You have nothing to cube yet.' },
          { label: 'Path B: cube the given equation', to: { s0: 'c1', h1: 'c1', h2: 'c1' } },
          { label: 'Expand the cube', to: { c1: 'c2' }, blocked: 'Cube the given equation first.' },
          { label: 'Group the leftover terms', to: { c2: 'c3' }, blocked: 'Expand first.' },
          { label: 'Substitute the given value', to: { c3: 'win' }, blocked: 'Group the strays into something you recognize.' },
        ],
      },
      hint: 'Don&rsquo;t solve for \\( x \\). Cube the equation you were handed and see what falls out.',
      success: 'Answer: \\( -2 \\). Obtained without ever knowing \\( x \\).',
      note: 'The governing idea: <b>power up the given, don&rsquo;t solve it.</b> Cubing \\( x + \\frac1x \\) produces \\( x^3 + \\frac{1}{x^3} \\) plus a copy of the thing you already know. Everything in this lesson is that trick, varied.',
      coach: ['What happens if you cube BOTH sides of the given equation?', 'Expand \\( (x + \\frac1x)^3 \\) carefully — the middle terms simplify beautifully.', 'The leftover \\( 3x + \\frac3x \\) is 3 times something you were given.'],
    },
    {
      prompt: 'The triangle. Three quantities, and identities as the edges between them.',
      body: 'Every problem in this lesson is the same question: <em>which two corners do I have, and which edge walks me to the third?</em>' + TRIANGLE_SVG,
      interaction: {
        type: 'match',
        pairs: [
          ['\\( (x+y)^2 \\)', '\\( (x^2+y^2) + 2xy \\)'],
          ['\\( (x+y)^3 \\)', '\\( (x^3+y^3) + 3xy(x+y) \\)'],
          ['\\( \\dfrac1x + \\dfrac1y \\)', '\\( \\dfrac{x+y}{xy} \\)'],
        ],
      },
      hint: 'Each left side is a power of the SUM. Each right side splits it into a power-sum plus a product correction.',
      success: 'Three edges of the triangle. Every one converts between sum, product, and power-sum.',
      note: 'Two cards to your deck — the <b>square tool</b> and the <b>cube tool</b>. Read them as conversion rates, not as things to expand: \\( (x+y)^2 \\) buys you \\( x^2+y^2 \\) if you pay \\( 2xy \\).',
      card: 'square-of-sum',
      coach: ['Expand each left-hand side and sort what you get.'],
    },
    {
      prompt: 'Collect the cube tool too — and confirm the classic error.',
      body: 'Is \\( (x+y)^3 = x^3 + y^3 \\)?',
      interaction: {
        type: 'mcq',
        shuffle: false,
        cols: true,
        options: ['No — it overshoots by \\( 3xy(x+y) \\)', 'Yes'],
        correct: 0,
      },
      hint: 'Test \\( x = y = 1 \\): is \\( 2^3 = 8 \\) equal to \\( 1 + 1 = 2 \\)?',
      explain: '\\( (x+y)^3 = x^3 + 3x^2y + 3xy^2 + y^3 = (x^3+y^3) + 3xy(x+y) \\). The correction term \\( 3xy(x+y) \\) is exactly what makes this a TOOL rather than a mistake: it&rsquo;s built from the product and the sum, both of which you usually know.',
      note: '<b>\\( (x+y)^3 = (x^3+y^3) + 3xy(x+y) \\).</b> Rearranged: \\( x^3 + y^3 = s^3 - 3ps \\), where \\( s \\) is the sum and \\( p \\) the product. That form is worth memorizing — it is the single most-used line in this chapter.',
      card: 'cube-of-sum',
      coach: ['Expand the cube fully, then group the middle two terms.'],
    },
    {
      prompt: 'Walk the triangle: \\( a + b = 1 \\) and \\( a^2 + b^2 = 2 \\). Find \\( a^4 + b^4 \\).',
      body: 'Two corners are known. Get the third (the product), then climb.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'ab =', answer: '-1/2', accept: ['-0.5'], width: 90 },
          { label: '\\( a^4 + b^4 \\) =', answer: '7/2', accept: ['3.5'], width: 90 },
        ],
      },
      hint: 'Square the sum: \\( 1 = (a^2+b^2) + 2ab = 2 + 2ab \\). Then square the power-sum: \\( (a^2+b^2)^2 = a^4 + b^4 + 2(ab)^2 \\).',
      explain: '\\( 1 = 2 + 2ab \\) gives \\( ab = -\\frac12 \\). Then \\( (a^2+b^2)^2 = 4 = a^4 + b^4 + 2(ab)^2 = a^4 + b^4 + \\frac12 \\), so \\( a^4 + b^4 = \\frac{7}{2} \\). Note the second step is the square tool again — with \\( a^2 \\) and \\( b^2 \\) playing the roles of \\( x \\) and \\( y \\).',
      note: 'Almost every problem needs the product early. <b>Hunt \\( p = xy \\) first</b>, even when nobody mentioned it — squaring the sum is usually how you get it for free.',
      coach: ['Square the given sum to expose \\( ab \\).', 'Now square \\( a^2 + b^2 \\) — the same tool, one level up.'],
    },
    {
      prompt: '\\( x + \\dfrac1x = 3 \\). Find \\( x^6 + \\dfrac{1}{x^6} \\). Raise to the 6th power directly?',
      interaction: {
        type: 'mcq',
        options: [
          'No — climb in stages: square to reach power 2, then cube THAT to reach power 6',
          'Yes — expand \\( (x + 1/x)^6 \\) with the binomial theorem',
          'No — solve for \\( x \\) first, then compute \\( x^6 \\)',
          'It cannot be done from the given information',
        ],
        correct: 0,
      },
      hint: '\\( 6 = 2 \\times 3 \\). Chapter 1&rsquo;s exponent laws say \\( x^6 = (x^2)^3 \\).',
      explain: 'Direct expansion of the 6th power gives seven terms and misery. Instead: square → \\( x^2 + \\frac{1}{x^2} = 9 - 2 = 7 \\). Then apply the CUBE tool to \\( x^2 \\): \\( (x^2 + \\frac{1}{x^2})^3 = x^6 + \\frac{1}{x^6} + 3(x^2 + \\frac{1}{x^2}) \\), so \\( 343 = x^6 + \\frac{1}{x^6} + 21 \\) → \\( \\mathbf{322} \\).',
      note: '<b>Factor the exponent and climb in stages.</b> \\( 6 = 2 \\cdot 3 \\), so square then cube. Reciprocal pairs make this especially clean, because the product \\( x \\cdot \\frac1x = 1 \\) is baked in — every correction term collapses to a constant.',
      coach: ['What is \\( x^2 + 1/x^2 \\)? Square the given.', 'Now treat \\( x^2 \\) as your new variable and apply the cube tool.'],
    },
    {
      prompt: 'The tiny giant: if \\( A + B = 6 \\) and \\( AB = 3 \\), what is \\( \\dfrac1A + \\dfrac1B \\)?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '2', width: 90 }],
      },
      hint: 'Put the two fractions over a common denominator.',
      explain: '\\( \\frac1A + \\frac1B = \\frac{B + A}{AB} = \\frac{6}{3} = 2 \\). Thirty seconds, and \\( A \\) and \\( B \\) were never found. (They&rsquo;re \\( 3 \\pm \\sqrt6 \\), if you&rsquo;re curious — and computing them would have wasted your time.)',
      note: '<b>\\( \\frac1A + \\frac1B = \\frac{A+B}{AB} \\).</b> The smallest card in the deck and one of the most used: any question about a sum of reciprocals is secretly a question about sum-and-product.',
      card: 'reciprocal-sum',
      coach: ['Common denominator. What appears on top? What appears on the bottom?'],
    },
    {
      prompt: 'Climb DOWN, then up: given \\( z^2 + \\dfrac{1}{z^2} = 14 \\) and \\( z > 0 \\), find \\( z^5 + \\dfrac{1}{z^5} \\).',
      body: 'The 5th power is odd and prime — you can&rsquo;t reach it by staged squaring. New move required.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( z^2 + \\dfrac{1}{z^2} = 14, \\quad z > 0 \\)' },
          down: { eq: '\\( \\left(z + \\dfrac1z\\right)^2 = z^2 + \\dfrac{1}{z^2} + 2 = 16 \\;\\Rightarrow\\; z + \\dfrac1z = \\pm 4 \\)', note: 'Climb DOWN to the first power. Both signs appear — but \\( z > 0 \\) forces \\( z + \\frac1z > 0 \\), so it&rsquo;s \\( +4 \\). Audit culture from Chapter 6, still earning its keep.' },
          cube: { eq: '\\( z^3 + \\dfrac{1}{z^3} = 4^3 - 3(4) = 52 \\)', note: 'The cube tool on \\( z + \\frac1z = 4 \\).' },
          bad: { eq: '\\( \\left(z^2 + \\dfrac{1}{z^2}\\right)\\left(z^3 + \\dfrac{1}{z^3}\\right) = 14 \\times 52 = 728 \\)', note: 'Careful — that product is NOT \\( z^5 + \\frac{1}{z^5} \\). Multiply it out: you also get \\( z^2 \\cdot \\frac{1}{z^3} + \\frac{1}{z^2} \\cdot z^3 = \\frac1z + z \\). The product OVERSHOOTS by a lower power sum.' },
          win: { eq: '\\( z^5 + \\dfrac{1}{z^5} = 728 - \\left(z + \\dfrac1z\\right) = 728 - 4 = 724 \\)', note: 'Cross-multiplying power sums: \\( (z^m + z^{-m})(z^n + z^{-n}) = (z^{m+n} + z^{-(m+n)}) + (z^{m-n} + z^{-(m-n)}) \\). Multiply, then subtract the overshoot. This is how you reach ANY power, odd or prime.' },
        },
        ops: [
          { label: 'Climb down to \\( z + \\frac1z \\)', to: { s0: 'down' } },
          { label: 'Cube it to reach \\( z^3 + \\frac{1}{z^3} \\)', to: { down: 'cube' }, blocked: 'You need \\( z + \\frac1z \\) first — climb down.' },
          { label: 'Multiply the 2nd and 3rd power sums', to: { cube: 'bad' }, blocked: 'You need both power sums before you can multiply them.' },
          { label: 'Subtract the overshoot', to: { bad: 'win' }, blocked: 'Form the product first, then correct it.' },
        ],
      },
      hint: 'Get \\( z + \\frac1z \\) (mind the sign!), then \\( z^3 + \\frac{1}{z^3} \\), then multiply the 2nd and 3rd power sums and correct for the overshoot.',
      success: '\\( z^5 + \\frac{1}{z^5} = 724 \\).',
      note: '<b>Cross-multiplying power sums.</b> \\( (2\\text{nd})(3\\text{rd}) = 5\\text{th} + 1\\text{st} \\) — the product always overshoots by the power sum of the DIFFERENCE of the exponents. Subtract it off. With this, no power is out of reach.',
      card: 'power-sum-product',
      coach: ['The 5th power isn&rsquo;t reachable by squaring or cubing alone. What do 2 and 3 add to?', 'Multiply the 2nd and 3rd power sums and expand carefully — four terms appear, not two.', 'Two of them are \\( z^5 \\) and \\( z^{-5} \\). What are the other two?'],
    },
    {
      prompt: 'Branch audit: \\( a^2 + b^2 = ab = 4 \\). Find \\( a^3 + b^3 \\).',
      body: 'Two branches appear. Follow both — and watch something lovely happen.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '\\( a^3 + b^3 \\) =', answer: '0', width: 90 }],
      },
      hint: '\\( (a+b)^2 = (a^2+b^2) + 2ab = 12 \\), so \\( a+b = \\pm 2\\sqrt3 \\). Now use the CUBES card from last lesson: \\( a^3 + b^3 = (a+b)(a^2 - ab + b^2) \\).',
      explain: '\\( a + b = \\pm 2\\sqrt3 \\) — nothing in the problem excludes either branch, so both survive. But look at the cofactor: \\( a^2 - ab + b^2 = 4 - 4 = 0 \\). So \\( a^3 + b^3 = (\\pm 2\\sqrt3)(0) = \\mathbf{0} \\), on <em>both</em> branches. The structure made the branching moot.',
      note: 'A double lesson. (1) Track ALL branches — don&rsquo;t silently keep the positive one. (2) Sometimes structure makes the branch irrelevant: a zero factor swallows everything. Chapters 6 and 7 shaking hands — the sum-of-cubes card did the real work.',
      coach: ['Get \\( a + b \\) by squaring. Keep both signs.', 'Now use \\( a^3+b^3 = (a+b)(a^2 - ab + b^2) \\) — you know both pieces.', 'What is \\( a^2 - ab + b^2 \\) here?'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Two numbers have sum 1 and product 1. What is the sum of their cubes?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '-2', width: 90 }],
      },
      hint: '\\( x^3 + y^3 = s^3 - 3ps \\).',
      explain: '\\( 1^3 - 3(1)(1) = \\mathbf{-2} \\). (Same answer as the lesson&rsquo;s hook — because \\( x \\) and \\( \\frac1x \\) with sum 1 have product 1. Same problem, new clothes.)',
      coach: ['One edge of the triangle: cube the sum, subtract \\( 3ps \\).'],
    },
    {
      section: 'checkpoint',
      prompt: '\\( x - \\dfrac1x = 5 \\). Find \\( x^4 + \\dfrac{1}{x^4} \\).',
      body: 'A MINUS this time. That changes exactly one sign — find it before you compute.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '727', width: 100 }],
      },
      hint: '\\( \\left(x - \\frac1x\\right)^2 = x^2 + \\frac{1}{x^2} - 2 \\) — the cross term is now NEGATIVE two. So \\( x^2 + \\frac{1}{x^2} = 25 + 2 = 27 \\).',
      explain: 'Squaring the minus version gives \\( x^2 + \\frac{1}{x^2} = 25 + 2 = 27 \\) (you ADD the 2 back). From there the plus version resumes: \\( (x^2 + \\frac{1}{x^2})^2 = x^4 + \\frac{1}{x^4} + 2 \\), so \\( x^4 + \\frac{1}{x^4} = 729 - 2 = \\mathbf{727} \\). One sign flip at the start, standard climbing after.',
      note: 'The minus variant is the most common trap in this genre: \\( (x - \\frac1x)^2 \\) is \\( x^2 + \\frac{1}{x^2} \\) minus 2, so recovering the power-sum means ADDING 2. Squaring kills the sign of the middle term, never the sign of the squares.',
      coach: ['Square the given. What is the cross term, and what sign does it carry?', 'Once you have \\( x^2 + 1/x^2 \\), everything is plus-signs again.'],
    },
    {
      section: 'checkpoint',
      prompt: '\\( x + y = 4 \\) and \\( xy = 2 \\). Find \\( x^6 + y^6 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '1584', width: 110 }],
      },
      hint: 'Climb: \\( x^2+y^2 = 16 - 4 = 12 \\); \\( x^3+y^3 = 64 - 3(2)(4) = 40 \\). Then \\( x^6+y^6 = (x^3+y^3)^2 - 2(xy)^3 \\).',
      explain: '\\( (x^3+y^3)^2 = x^6 + y^6 + 2(xy)^3 \\), so \\( x^6 + y^6 = 40^2 - 2(8) = 1600 - 16 = \\mathbf{1584} \\). Note the last step is the square tool with \\( x^3 \\) and \\( y^3 \\) as the variables — and their product is \\( (xy)^3 = 8 \\).',
      coach: ['Get the 3rd power sum first via the cube tool.', 'Then square it — but remember the product of \\( x^3 \\) and \\( y^3 \\) is \\( (xy)^3 \\), not \\( xy \\).'],
    },
    {
      section: 'checkpoint',
      prompt: 'Find the sum of the SQUARES of the roots of \\( 2x^2 - 3x + 4 = 0 \\).',
      body: 'Chapter 6 hands you the corners; Chapter 7 walks the edge.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '-7/4', accept: ['-1.75'], width: 100 }],
      },
      hint: 'Vieta: \\( s = \\frac32 \\), \\( p = 2 \\). Then \\( r_1^2 + r_2^2 = s^2 - 2p \\).',
      explain: '\\( \\left(\\frac32\\right)^2 - 2(2) = \\frac94 - 4 = \\mathbf{-\\frac74} \\). A NEGATIVE sum of squares — which is your clue that the roots are complex (discriminant \\( 9 - 32 < 0 \\)), and perfectly consistent. Vieta gives the two corners without solving; the triangle does the rest.',
      note: 'This is the standard handshake: <b>Vieta hands you sum and product; the power-sums engine converts them into anything you want.</b> You never solve the quadratic.',
      coach: ['Read \\( s \\) and \\( p \\) straight off the coefficients.', 'Which identity converts sum-and-product into a sum of squares?'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Let \\( r \\) and \\( s \\) be the roots of \\( x^2 + px + q = 0 \\). Express \\( (r-s)^2 \\) in terms of \\( p \\) and \\( q \\).',
      body: 'MA&copy; 1987, the key part. Fully symbolic — and the answer is an old friend in a new coat.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( p^2 - 4q \\) — which is exactly the discriminant',
          '\\( p^2 + 4q \\)',
          '\\( p^2 - 2q \\)',
          '\\( -p^2 + 4q \\)',
        ],
        correct: 0,
      },
      hint: 'Vieta: \\( r + s = -p \\), \\( rs = q \\). And \\( (r-s)^2 = (r+s)^2 - 4rs \\) — verify that identity by expanding both sides.',
      explain: '\\( (r-s)^2 = r^2 - 2rs + s^2 \\), while \\( (r+s)^2 = r^2 + 2rs + s^2 \\). They differ by \\( 4rs \\), so \\( (r-s)^2 = (r+s)^2 - 4rs = (-p)^2 - 4q = \\mathbf{p^2 - 4q} \\). That is the DISCRIMINANT — and now you know what it always meant: <b>the discriminant is the squared distance between the roots.</b> Zero discriminant → the roots coincide. Negative → no real distance exists.',
      walkthrough: [
        'Read the corners off with Vieta: \\( r + s = -p \\) and \\( rs = q \\). Do not solve for \\( r \\) and \\( s \\) — you never need them.',
        'Find the edge connecting \\( (r-s)^2 \\) to sum-and-product. Expand both squares: \\( (r+s)^2 = r^2 + 2rs + s^2 \\) and \\( (r-s)^2 = r^2 - 2rs + s^2 \\). Subtracting, \\( (r-s)^2 = (r+s)^2 - 4rs \\).',
        'Substitute: \\( (r-s)^2 = (-p)^2 - 4q = p^2 - 4q \\).',
        'Now recognize it. For \\( ax^2+bx+c \\) the same walk gives \\( (r-s)^2 = \\frac{b^2-4ac}{a^2} \\) — the discriminant, divided by \\( a^2 \\). The thing you&rsquo;ve been using since Chapter 6 to classify roots is, and always was, <em>the square of the gap between them</em>.',
        'The companion answers fall out of the same corners: \\( r^2+s^2 = p^2 - 2q \\); \\( r^2s + rs^2 = rs(r+s) = -pq \\); \\( r^4+s^4 = (p^2-2q)^2 - 2q^2 \\).',
      ],
      success: 'The discriminant, unmasked. It was a power-sum walk the entire time.',
      note: '<b>\\( (r-s)^2 = (r+s)^2 - 4rs \\).</b> This card converts between &ldquo;difference of roots&rdquo; and Vieta&rsquo;s data — and it explains, at last, WHY \\( b^2 - 4ac \\) is the thing that decides everything.',
      card: 'root-difference',
      coach: ['Vieta gives you \\( r+s \\) and \\( rs \\). That&rsquo;s two corners of the triangle.', 'Expand \\( (r-s)^2 \\) and \\( (r+s)^2 \\) side by side. How do they differ?', 'Substitute Vieta&rsquo;s values — and then look hard at what you&rsquo;ve produced.'],
    },
  ],
};
