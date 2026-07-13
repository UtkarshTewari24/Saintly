/* Lesson 6.4 — Rearrangements and Substitutions.
   Audit culture: squaring and denominator-clearing are one-way doors, so every
   answer gets checked. Then Vieta construction and the substitution pattern. */

export default {
  id: 'lesson-6-4',
  title: 'Rearrangements and Substitutions',
  kicker: 'Quadratic Equations',
  topicIndex: 5,
  lessonIndex: 3,
  next: 'interactive-lesson.html?chapter=6&lesson=5',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Squaring is a one-way door. Watch what it destroys.',
      body: 'Slide \\( x \\) and compare \\( x \\) against \\( x^2 \\).',
      interaction: {
        type: 'slider',
        min: -4, max: 4, step: 1, value: -4, label: 'x', mustExplore: 5,
        render(x) {
          const partner = -x;
          return {
            main: `\\( x = ${x} \\;\\longrightarrow\\; x^2 = ${x * x} \\)`,
            sub: x === 0
              ? 'Zero is the only value with no partner — it is its own reflection.'
              : `But \\( x = ${partner} \\) squares to ${x * x} too. After squaring, these two are indistinguishable: the sign is gone forever.`,
          };
        },
      },
      success: 'Squaring folds the number line in half. Two inputs, one output — information destroyed.',
      note: 'So if you SQUARE an equation, the new equation may accept roots the old one rejects. Same for multiplying by an expression that could be zero. <b>Any move that isn&rsquo;t reversible obliges you to check every answer in the ORIGINAL equation.</b> The check isn&rsquo;t hygiene — it&rsquo;s part of the algorithm.',
      coach: ['Compare what x = 3 and x = −3 do after squaring.'],
    },
    {
      prompt: 'Variables in denominators: solve \\( \\dfrac{y}{y-2} = \\dfrac{4}{6-y} + 1 \\).',
      body: 'Multiply through by every denominator, collect, solve — then audit.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( \\dfrac{y}{y-2} = \\dfrac{4}{6-y} + 1 \\)' },
          s1: { eq: '\\( y(6-y) = 4(y-2) + (y-2)(6-y) \\)', note: 'Both sides multiplied by \\( (y-2)(6-y) \\). Note what you just assumed: \\( y \\ne 2 \\) and \\( y \\ne 6 \\). Write that down — it&rsquo;s the audit list.' },
          s2: { eq: '\\( 6y - y^2 = 4y - 8 + (-y^2 + 8y - 12) \\)' },
          s3: { eq: '\\( 6y - y^2 = -y^2 + 12y - 20 \\;\\Rightarrow\\; 6y = 12y - 20 \\)', note: 'The \\( y^2 \\) terms cancelled — it was secretly linear all along. That happens; let it.' },
          win: { eq: '\\( 6y = 20 \\;\\Rightarrow\\; y = \\dfrac{10}{3} \\)', note: 'Now AUDIT: is \\( \\frac{10}{3} \\) equal to 2 or 6? No — both denominators survive. The root is legitimate. Check: \\( \\frac{10/3}{4/3} = 2.5 \\), and \\( \\frac{4}{8/3} + 1 = 1.5 + 1 = 2.5 \\) ✓.' },
        },
        ops: [
          { label: 'Multiply both sides by \\( (y-2)(6-y) \\)', to: { s0: 's1' } },
          { label: 'Expand every product', to: { s1: 's2' }, blocked: 'Clear the denominators first.' },
          { label: 'Collect like terms', to: { s2: 's3' }, blocked: 'Expand first.' },
          { label: 'Solve, then audit against the denominators', to: { s3: 'win' }, blocked: 'Simplify first.' },
        ],
      },
      hint: 'Multiply by BOTH denominators. Then remember which values you just outlawed.',
      success: 'Cleared, solved, and audited — the root survives.',
      note: 'A root that makes an original denominator zero is called <b>extraneous</b>: the algebra manufactured it, the original equation rejects it. Multiplying by \\( (y-2) \\) is only legal when \\( y \\ne 2 \\), so \\( y = 2 \\) could never be a real answer — no matter what the final line says.',
      coach: ['What values of \\( y \\) are forbidden from the very start?', 'Clear all denominators in one multiplication.'],
    },
    {
      prompt: 'Radical equation: \\( \\sqrt{x+3} + 4 = \\sqrt{8x+1} \\). It squares into an old friend.',
      body: 'Square, isolate what survives, square again. Then audit — hard.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'the valid root', answer: '6', width: 90 },
          { label: 'the extraneous root', answer: '22/49', width: 100 },
        ],
      },
      hint: 'Squaring gives \\( x + 3 + 8\\sqrt{x+3} + 16 = 8x + 1 \\). Isolate the radical and square again → \\( 49x^2 - 316x + 132 = 0 \\) — the black belt from Lesson 6.2b.',
      explain: 'Squaring once: \\( (x+3) + 8\\sqrt{x+3} + 16 = 8x+1 \\) (note the cross term — \\( (a+b)^2 \\ne a^2+b^2 \\), ever). Isolate: \\( 8\\sqrt{x+3} = 7x - 18 \\). Square again: \\( 64(x+3) = 49x^2 - 252x + 324 \\) → \\( 49x^2 - 316x + 132 = 0 \\) → \\( (x-6)(49x-22) = 0 \\). Audit: \\( x = 6 \\) gives \\( 3 + 4 = 7 = \\sqrt{49} \\) ✓. But \\( x = \\frac{22}{49} \\) gives left \\( = \\frac{13}{7} + 4 = \\frac{41}{7} \\) and right \\( = \\frac{15}{7} \\) ✗ — <b>extraneous</b>, created by squaring.',
      note: 'That monstrous factorization from Lesson 6.2b was never a random drill — this is where it lives. And note WHY \\( \\frac{22}{49} \\) fails: at that value \\( 7x - 18 \\) is negative, but \\( 8\\sqrt{x+3} \\) can&rsquo;t be. Squaring erased the sign; the audit caught it.',
      coach: ['Square both sides — carefully. The left is \\( (\\sqrt{x+3} + 4)^2 \\), which has THREE terms.', 'Isolate the remaining radical, then square again.', 'You should land on \\( 49x^2 - 316x + 132 = 0 \\). You have factored this before.'],
    },
    {
      prompt: 'Solo audit: \\( \\sqrt{5z+5} - \\sqrt{3-3z} - 2\\sqrt{z} = 0 \\).',
      body: 'Three radicals. Isolate, square, isolate, square, audit.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'z =', answer: '1/4', accept: ['0.25'], width: 100 }],
      },
      hint: 'Move one radical across: \\( \\sqrt{5z+5} = \\sqrt{3-3z} + 2\\sqrt{z} \\), then square both sides.',
      explain: 'Squaring: \\( 5z + 5 = (3 - 3z) + 4\\sqrt{z(3-3z)} + 4z \\) → \\( 4z + 2 = 4\\sqrt{3z - 3z^2} \\) → \\( 2z + 1 = 2\\sqrt{3z-3z^2} \\). Square again: \\( 4z^2 + 4z + 1 = 12z - 12z^2 \\) → \\( 16z^2 - 8z + 1 = 0 \\) → \\( (4z-1)^2 = 0 \\) → \\( z = \\frac14 \\). Audit: \\( \\sqrt{6.25} - \\sqrt{2.25} - 2\\sqrt{0.25} = 2.5 - 1.5 - 1 = 0 \\) ✓.',
      coach: ['Get exactly one radical alone on one side before squaring.', 'The cross term after squaring is \\( 2 \\cdot \\sqrt{3-3z} \\cdot 2\\sqrt{z} \\).', 'The final quadratic is a perfect square — one root only.'],
    },
    {
      prompt: 'Symmetric system: \\( x + y = 2 \\) and \\( xy = 2 \\). Find \\( x \\) and \\( y \\).',
      body: 'You could substitute. Or you could notice you&rsquo;ve been handed a sum and a product — and Vieta reads those backwards.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( x, y \\) are the roots of \\( z^2 - 2z + 2 = 0 \\), namely \\( 1 \\pm i \\)',
          '\\( x, y \\) are the roots of \\( z^2 + 2z + 2 = 0 \\)',
          '\\( x = y = 1 \\)',
          'No solutions exist',
        ],
        correct: 0,
      },
      hint: 'A quadratic with root sum \\( s \\) and root product \\( p \\) is \\( z^2 - sz + p = 0 \\). Here \\( s = 2, p = 2 \\).',
      explain: 'Build \\( z^2 - 2z + 2 = 0 \\) directly. Its discriminant is \\( 4 - 8 = -4 \\), so \\( z = 1 \\pm i \\), and the solutions are \\( (x,y) = (1+i, 1-i) \\) or \\( (1-i, 1+i) \\). The substitution route works too — \\( x = 2-y \\) → \\( y^2 - 2y + 2 = 0 \\) — but it takes three lines to arrive at the same quadratic you could have <em>written down</em>.',
      note: '<b>Vieta construction:</b> given a sum \\( s \\) and product \\( p \\), the two numbers are the roots of \\( z^2 - sz + p = 0 \\). Sum-and-product problems are quadratic problems in disguise — a genuine competition staple.',
      coach: ['You know the sum and the product of two numbers. What single equation has exactly those two numbers as roots?'],
    },
    {
      prompt: 'Substitution: solve \\( 1 + 2^n + 2^{2n} = 73 \\).',
      body: 'Look for an expression and its square. \\( 2^{2n} = (2^n)^2 \\) — so let \\( u = 2^n \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'the valid \\( u \\)', answer: '8', width: 84 },
          { label: 'n =', answer: '3', width: 84 },
        ],
      },
      hint: '\\( u^2 + u + 1 = 73 \\) → \\( u^2 + u - 72 = 0 \\). Factor it (product \\( -72 \\), sum 1), then back-substitute each branch.',
      explain: '\\( u^2 + u - 72 = (u-8)(u+9) = 0 \\) → \\( u = 8 \\) or \\( u = -9 \\). Now audit each BRANCH: \\( 2^n = 8 \\) → \\( n = 3 \\) ✓. But \\( 2^n = -9 \\) is impossible — a positive base raised to any real power stays positive (Chapter 1). That branch dies. Answer: \\( n = 3 \\), and the check \\( 1 + 8 + 64 = 73 \\) ✓.',
      note: 'Substitution has TWO halves, and people forget the second: solve the quadratic, then <b>validate each branch on the way back</b>. Here one branch was arithmetically fine and mathematically impossible.',
      coach: ['What is \\( 2^{2n} \\) in terms of \\( 2^n \\)?', 'After substituting, it&rsquo;s a plain quadratic in \\( u \\).', 'Both \\( u \\)-values are real — but can \\( 2^n \\) actually equal \\( -9 \\)?'],
    },
    {
      prompt: 'Biquadratic: solve \\( x^4 + 3x^2 - 4 = 0 \\). How many roots?',
      body: 'Let \\( z = x^2 \\). Both branches go back — and this time, <em>neither</em> dies.',
      interaction: {
        type: 'mcq',
        options: [
          'Four: \\( \\pm 1 \\) and \\( \\pm 2i \\)',
          'Two: \\( \\pm 1 \\) (the other branch is impossible)',
          'Two: \\( 1 \\) and \\( -4 \\)',
          'One: \\( x = 1 \\)',
        ],
        correct: 0,
      },
      hint: '\\( z^2 + 3z - 4 = (z+4)(z-1) = 0 \\) → \\( x^2 = 1 \\) or \\( x^2 = -4 \\). Chapter 2 says the second one is perfectly solvable.',
      explain: '\\( x^2 = 1 \\) → \\( x = \\pm 1 \\). \\( x^2 = -4 \\) → \\( x = \\pm 2i \\) — legal, thanks to Chapter 2. All <b>four</b> roots are valid. Contrast with the last beat: there we rejected a branch because the ORIGINAL equation objected. Here nothing objects. Reject a branch only when the original equation says so — never because it looks strange.',
      note: 'The substitution needs the equation to speak ONLY in the expression and its square. Add a stray \\( x \\) — say \\( x^4 + 3x^2 + x - 4 \\) — and the trick dies instantly: that \\( x \\) has no expression in terms of \\( z = x^2 \\).',
      coach: ['Substitute \\( z = x^2 \\) and factor the quadratic in \\( z \\).', 'Then solve \\( x^2 = 1 \\) and \\( x^2 = -4 \\) separately.', 'Does the original equation forbid imaginary \\( x \\)? Read it again.'],
    },
    {
      prompt: 'Pattern spotting. Which substitution cracks \\( (x^2 - 3x)^2 - 3(x^2 - 3x) = 4 \\)?',
      body: 'Spot only — don&rsquo;t solve.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( u = x^2 - 3x \\)',
          '\\( u = x^2 \\)',
          '\\( u = 3x \\)',
          'None — you must expand it into a quartic first',
        ],
        correct: 0,
      },
      hint: 'What expression appears, and then appears again squared?',
      explain: 'The block \\( x^2 - 3x \\) shows up squared and plain — so \\( u = x^2 - 3x \\) gives \\( u^2 - 3u - 4 = 0 \\), a friendly quadratic. Expanding to a quartic is legal and miserable. The same eye finds \\( u = 3^{z-1} \\) in \\( 9^{z-1} - 3^{z-1} - 2 = 0 \\) (since \\( 9^{z-1} = (3^{z-1})^2 \\)) and \\( u = \\frac1x \\) in \\( \\frac{2}{x^2} + \\frac1x - 1 = 0 \\).',
      note: 'The substitution sniff test: <b>does one expression appear, along with its square, and nothing else?</b> If yes, name it \\( u \\) and you have a quadratic.',
      coach: ['Find the repeated block. Ignore what&rsquo;s inside it.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Solve \\( \\sqrt{x+10} - \\dfrac{6}{\\sqrt{x+10}} = 5 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '26', width: 100 }],
      },
      hint: 'Let \\( u = \\sqrt{x+10} \\): the equation becomes \\( u - \\frac6u = 5 \\). Clear the fraction.',
      explain: '\\( u^2 - 5u - 6 = 0 \\) → \\( (u-6)(u+1) = 0 \\) → \\( u = 6 \\) or \\( u = -1 \\). Branch audit: \\( u = \\sqrt{x+10} \\) can&rsquo;t be negative (the radical means the POSITIVE root), so \\( u = -1 \\) dies. \\( \\sqrt{x+10} = 6 \\) → \\( x = 26 \\) ✓.',
      coach: ['Substitution and fraction-clearing in one problem.', 'Can a square root ever equal \\( -1 \\)?'],
    },
    {
      section: 'checkpoint',
      prompt: 'Solve \\( x + \\sqrt{x-2} = 4 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '3', width: 100 }],
      },
      hint: 'Isolate the radical FIRST: \\( \\sqrt{x-2} = 4 - x \\). Then square. Then audit.',
      explain: 'Squaring: \\( x - 2 = 16 - 8x + x^2 \\) → \\( x^2 - 9x + 18 = 0 \\) → \\( (x-3)(x-6) = 0 \\). Audit: \\( x = 3 \\) gives \\( 3 + 1 = 4 \\) ✓. \\( x = 6 \\) gives \\( 6 + 2 = 8 \\ne 4 \\) ✗ — extraneous (at \\( x=6 \\), the side \\( 4 - x \\) is negative, which no square root can match).',
      coach: ['Isolate before squaring — always.', 'Two roots come out. Only one survives the original.'],
    },
    {
      section: 'checkpoint',
      prompt: 'How many roots does \\( x - \\dfrac{7}{x-3} = 3 - \\dfrac{7}{x-3} \\) have?',
      body: 'AHSME 1960. Look before you leap.',
      interaction: {
        type: 'mcq',
        options: [
          'None',
          'One: \\( x = 3 \\)',
          'Two',
          'Infinitely many',
        ],
        correct: 0,
      },
      hint: 'The identical fractions cancel, leaving \\( x = 3 \\). Now audit \\( x = 3 \\) against the ORIGINAL equation.',
      explain: 'Cancelling gives \\( x = 3 \\) — but \\( x = 3 \\) makes the denominator \\( x - 3 \\) equal to zero, so it was never a legal value. The candidate is extraneous, and the equation has <b>no roots at all</b>. This entire problem IS the audit step; skip the audit and you confidently answer 1.',
      note: 'Before touching an equation, list what its denominators forbid. Here \\( x \\ne 3 \\) was true from the first line — the algebra then handed back the one value that was outlawed from the start.',
      coach: ['What does the cancellation leave?', 'Now plug that value back into the ORIGINAL. Is it even legal?'],
    },
    {
      section: 'checkpoint',
      prompt: 'Two numbers have sum 6 and product 10. Find them.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( 3 + i \\) and \\( 3 - i \\)',
          '\\( 5 \\) and \\( 1 \\)',
          '\\( 2 \\) and \\( 4 \\)',
          'They do not exist',
        ],
        correct: 0,
      },
      hint: 'Vieta construction: they&rsquo;re the roots of \\( z^2 - 6z + 10 = 0 \\).',
      explain: 'Discriminant \\( 36 - 40 = -4 \\) → \\( z = \\frac{6 \\pm 2i}{2} = 3 \\pm i \\). They exist — just not on the real line. Check: \\( (3+i) + (3-i) = 6 \\) ✓ and \\( (3+i)(3-i) = 9 + 1 = 10 \\) ✓ (conjugates, difference of squares, one more time).',
      coach: ['Write the quadratic with that sum and product.', 'A negative discriminant doesn&rsquo;t mean &ldquo;no numbers&rdquo; — Chapter 2 handled that.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Solve \\( \\sqrt{x + \\sqrt{x+11}} + \\sqrt{x - \\sqrt{x+11}} = 4 \\).',
      body: 'MA&copy; 1991. Nested radicals. Do NOT isolate one radical — square the WHOLE equation first and watch the structure pay off.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '5', width: 100 }],
      },
      hint: 'Square both sides. The two outer radicals multiply into \\( \\sqrt{(x)^2 - (\\sqrt{x+11})^2} = \\sqrt{x^2 - x - 11} \\) — a difference of squares doing the heavy lifting.',
      explain: 'Squaring the left: \\( (x + \\sqrt{x+11}) + (x - \\sqrt{x+11}) + 2\\sqrt{(x+\\sqrt{x+11})(x-\\sqrt{x+11})} = 2x + 2\\sqrt{x^2 - x - 11} \\). Set equal to 16: \\( \\sqrt{x^2-x-11} = 8 - x \\). Square again: \\( x^2 - x - 11 = 64 - 16x + x^2 \\) → \\( 15x = 75 \\) → \\( x = 5 \\). Audit: \\( \\sqrt{16} = 4 \\), so the terms are \\( \\sqrt{5+4} + \\sqrt{5-4} = 3 + 1 = 4 \\) ✓.',
      walkthrough: [
        'The instinct — isolate one radical — leads into a swamp. Instead square the whole equation and let the symmetry work: \\( (A + B)^2 = A^2 + B^2 + 2AB \\).',
        '\\( A^2 + B^2 = (x + \\sqrt{x+11}) + (x - \\sqrt{x+11}) = 2x \\). The inner radicals cancel — that was the design.',
        '\\( AB = \\sqrt{(x + \\sqrt{x+11})(x - \\sqrt{x+11})} \\), a difference of squares: \\( = \\sqrt{x^2 - (x+11)} = \\sqrt{x^2 - x - 11} \\).',
        'So \\( 2x + 2\\sqrt{x^2 - x - 11} = 16 \\), i.e. \\( \\sqrt{x^2 - x - 11} = 8 - x \\). Square again: the \\( x^2 \\) terms cancel, leaving \\( 15x = 75 \\) → \\( x = 5 \\).',
        'Audit (never optional after two squarings): \\( \\sqrt{5+11} = 4 \\), so the original left side is \\( \\sqrt{9} + \\sqrt{1} = 3 + 1 = 4 \\) ✓. And \\( 8 - x = 3 > 0 \\), so the squaring step was honest. Answer: \\( x = 5 \\).',
      ],
      success: 'Squaring the whole equation — not one piece of it — turned a nested monster into a linear equation in two moves.',
      note: 'When two radicals are <b>symmetric</b> (same thing, \\( \\pm \\) something), square the sum: their \\( A^2 + B^2 \\) collapses and their \\( AB \\) becomes a difference of squares. Chasing one radical at a time is the trap.',
      coach: ['Don&rsquo;t isolate. Square the entire equation and expand \\( (A+B)^2 \\).', 'What is \\( A^2 + B^2 \\)? The inner radicals should cancel.', 'What is the product \\( AB \\)? Look for a difference of squares.'],
    },
  ],
};
