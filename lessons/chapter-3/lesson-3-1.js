/* Lesson 3.1 — What Linear Means + One Variable (book sections 3.1 + 3.2).
   Introduces the balance solver: every worked example is student-driven. */

export default {
  id: 'lesson-3-1',
  title: 'What Linear Means',
  kicker: 'Linear Equations',
  topicIndex: 2,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=3&lesson=2',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Meet the cast of \\( 3x + y = 2 \\).',
      body: 'Three kinds of things live in an equation. Match each piece to its job.',
      interaction: {
        type: 'match',
        pairs: [
          ['\\( x \\) and \\( y \\)', 'variables — the unknowns'],
          ['the 3 in \\( 3x \\)', 'coefficient — a number multiplying a variable'],
          ['the 2 on the right', 'constant — a number standing alone'],
        ],
      },
      hint: 'A coefficient never stands alone — it is glued to a variable by multiplication.',
      success: 'Three words, and now the rest of the chapter can use them.',
      coach: ['Which piece could change value if the problem changed? That one is a variable.'],
    },
    {
      prompt: 'The degree of a term is the <em>sum</em> of its variables&rsquo; powers.',
      body: 'Fill in each degree. The last two are whole equations — an equation&rsquo;s degree is its largest term&rsquo;s degree.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'deg of \\( x \\)', answer: '1', width: 90 },
          { label: 'deg of \\( xy^2 \\)', answer: '3', width: 90 },
          { label: 'deg of \\( x^2 + y \\)', answer: '2', width: 90 },
          { label: 'deg of \\( x + y + z + w \\)', answer: '1', width: 90 },
        ],
      },
      hint: '\\( xy^2 \\) is \\( x^1 y^2 \\). Sum the powers — don&rsquo;t take the biggest one.',
      explain: '\\( x \\) has degree 1. \\( xy^2 = x^1y^2 \\) has degree \\( 1+2 = 3 \\). In \\( x^2 + y \\) the biggest term is \\( x^2 \\): degree 2. Four variables to the first power is still degree 1 — count powers, not variables.',
      note: '<b>Linear</b> means degree 1. Any number of variables is fine, as long as no term multiplies variables together or raises one past the first power.',
      coach: ['Rewrite \\( xy^2 \\) with every exponent visible: \\( x^1 y^2 \\).', 'Degree of a term = sum of the powers. Degree of an equation = its largest term.'],
    },
    {
      prompt: 'Which of these is linear?',
      body: 'One survives the definition. (From Example 3-1.)',
      interaction: {
        type: 'mcq',
        options: [
          '\\( x^2 + y = 4 \\)',
          '\\( xy = 4 \\)',
          '\\( x + y + z + w = 0 \\)',
          '\\( 3^x + y = 0 \\)',
        ],
        correct: 2,
      },
      hint: 'Check each term&rsquo;s degree. \\( xy \\) is one term with TWO variables in it.',
      explain: '\\( x^2 \\) has degree 2, and \\( xy = x^1y^1 \\) does too. \\( 3^x \\) is stranger still — with a variable in the exponent, degree isn&rsquo;t even defined. Only \\( x+y+z+w = 0 \\), all degree-1 terms, is linear.',
      note: 'A variable in an exponent disqualifies an equation instantly — same reason logs aren&rsquo;t linear (see Chapter 1).',
      coach: ['Degree of \\( xy \\): sum the hidden powers \\( x^1y^1 \\).', 'What is the degree of \\( 3^x \\)? Trick question — it doesn&rsquo;t have one.'],
    },
    {
      prompt: 'Solve \\( 3x + 5 = 11 + x \\) — you drive.',
      body: 'The equation sits on a balance. Any op you pick applies to <em>both</em> pans, so it always stays level — but only some ops move you toward \\( x \\) alone. Get there.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 3x + 5 \\;=\\; 11 + x \\)' },
          a5: { eq: '\\( 3x + 10 \\;=\\; 16 + x \\)', note: 'Perfectly legal — both pans gained 5, the balance stayed level. But there&rsquo;s <em>more</em> clutter now than when you started. Undo, or subtract your way back.' },
          s1: { eq: '\\( 3x \\;=\\; 6 + x \\)' },
          s2: { eq: '\\( 2x + 5 \\;=\\; 11 \\)' },
          s3: { eq: '\\( 2x \\;=\\; 6 \\)' },
          win: { eq: '\\( x \\;=\\; 3 \\)', note: 'Solved — but not finished. Substitute back: \\( 3(3)+5 = 14 \\) and \\( 11+3 = 14 \\). Both pans read 14. <em>Now</em> it&rsquo;s finished.' },
        },
        ops: [
          { label: 'Add 5 to both sides', to: { s0: 'a5', s1: 's0' } },
          { label: 'Subtract 5 from both sides', to: { s0: 's1', s2: 's3', a5: 's0' } },
          { label: 'Subtract \\( x \\) from both sides', to: { s0: 's2', s1: 's3' } },
          { label: 'Divide both sides by 2', to: { s3: 'win' }, blocked: 'Legal — but divide now and fractions smear across both pans. Clear the loose 5 and the loose \\( x \\) first.' },
        ],
      },
      hint: 'Numbers on one side, \\( x \\)s on the other. Two subtractions, then one division.',
      success: 'Two subtractions, one division. That recipe solves every linear equation in one variable.',
      coach: ['What is stopping the left side from being just \\( x \\)s? Remove that first.', 'After both subtractions you have \\( 2x = 6 \\). One op left.'],
    },
    {
      prompt: 'Why bother substituting back?',
      interaction: {
        type: 'reveal',
        face: 'You found \\( x = 3 \\) and even checked it. Was the check worth ten seconds?',
        cta: 'Tap for the one-line answer',
        hidden: 'In competition, an unchecked answer is a guess with confidence. The check costs ten seconds; a silent arithmetic slip costs the whole problem. Every balance run in this chapter ends with one.',
      },
      success: 'Habit planted. The solver will keep reminding you.',
    },
    {
      prompt: 'Now with letters: solve \\( ax + b = c \\) for \\( x \\).',
      body: 'Here \\( a \\), \\( b \\), \\( c \\) are <em>constants</em> that happen to be wearing letters. Same balance, same moves. (Example 3-3.)',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( ax + b \\;=\\; c \\)' },
          s1: { eq: '\\( ax \\;=\\; c - b \\)' },
          win: { eq: '\\( x \\;=\\; \\dfrac{c-b}{a} \\)', note: 'The letters never mattered — the <em>procedure</em> is the thing. And look closely: the answer is \\( \\frac{c-b}{a} \\), the whole top over \\( a \\) — not \\( c - \\frac{b}{a} \\).' },
        },
        ops: [
          { label: 'Subtract \\( b \\) from both sides', to: { s0: 's1' } },
          { label: 'Subtract \\( a \\) from both sides', to: {}, blocked: '\\( a \\) is <em>multiplying</em> \\( x \\) — subtraction can&rsquo;t peel off a factor. Only division undoes multiplication.' },
          { label: 'Divide both sides by \\( a \\)', to: { s1: 'win' }, blocked: 'Legal, but divide now and \\( b/a \\) debris lands on the left pan. Subtract \\( b \\) first.' },
        ],
      },
      hint: 'Treat \\( b \\) exactly like the 5 from two beats ago.',
      success: 'Letters or numbers — isolate, then divide by the coefficient.',
      coach: ['Pretend \\( a=3, b=5, c=11 \\). Which move did you make first last time?'],
    },
    {
      prompt: 'A variable in the denominator: \\( \\dfrac{1}{y} + 1 = 3 \\).',
      body: 'Not linear as written — \\( y \\) is downstairs. One new op is unlocked. Find the move that <em>makes</em> it linear.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( \\dfrac{1}{y} + 1 \\;=\\; 3 \\)' },
          s1: { eq: '\\( \\dfrac{1}{y} \\;=\\; 2 \\)' },
          m0: { eq: '\\( 1 + y \\;=\\; 3y \\)', note: 'One multiplication and the denominator is gone — suddenly this is a plain linear equation.' },
          m1: { eq: '\\( 1 \\;=\\; 2y \\)' },
          win: { eq: '\\( y \\;=\\; \\dfrac{1}{2} \\)', note: 'Check: \\( 1 \\div \\frac{1}{2} + 1 = 2 + 1 = 3 \\) ✓. File this move away — &ldquo;multiply through to clear the variable downstairs&rdquo; returns in the next lesson wearing a disguise.' },
        },
        ops: [
          { label: 'Subtract 1 from both sides', to: { s0: 's1' } },
          { label: 'Multiply both sides by \\( y \\)', to: { s0: 'm0', s1: 'm1' } },
          { label: 'Subtract \\( y \\) from both sides', to: { m0: 'm1' }, blocked: 'No lone \\( y \\) term to collect yet.' },
          { label: 'Divide both sides by 2', to: { m1: 'win' }, blocked: 'Nothing here is a clean multiple of 2 yet.' },
        ],
      },
      hint: 'The fraction is the problem. What single op deletes a denominator of \\( y \\)?',
      success: 'Either route works — clear the fraction first or last, the balance doesn&rsquo;t care.',
      coach: ['Multiplying \\( \\frac{1}{y} \\) by \\( y \\) gives 1. What does it do to the other terms?'],
    },
    {
      prompt: 'Solo: solve \\( 4x - 3 = 2x + 7 \\).',
      body: 'No guidance this time. Ops are live.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 4x - 3 \\;=\\; 2x + 7 \\)' },
          s1: { eq: '\\( 4x \\;=\\; 2x + 10 \\)' },
          s2: { eq: '\\( 2x - 3 \\;=\\; 7 \\)' },
          s3: { eq: '\\( 2x \\;=\\; 10 \\)' },
          win: { eq: '\\( x \\;=\\; 5 \\)', note: 'Check: \\( 4(5)-3 = 17 \\) and \\( 2(5)+7 = 17 \\) ✓.' },
        },
        ops: [
          { label: 'Add 3 to both sides', to: { s0: 's1', s2: 's3' } },
          { label: 'Subtract \\( 2x \\) from both sides', to: { s0: 's2', s1: 's3' } },
          { label: 'Subtract 7 from both sides', to: {}, blocked: 'Legal, but it drags the constants negative for nothing. Collect \\( x \\)s on one side, numbers on the other.' },
          { label: 'Divide both sides by 2', to: { s3: 'win' }, blocked: 'Get to the form \\( 2x = \\text{number} \\) first.' },
        ],
      },
      hint: 'Same two-subtractions-then-divide shape as \\( 3x+5 = 11+x \\).',
      success: 'Order didn&rsquo;t matter — \\( x \\)s first or numbers first, both roads meet at \\( 2x = 10 \\).',
      coach: ['Which side should own the \\( x \\)s? Clear the other side&rsquo;s \\( 2x \\).'],
    },
    {
      prompt: 'Solo: solve \\( 7 - 2x = 3x - 8 \\).',
      body: 'The \\( x \\) coefficient is negative on the left. Don&rsquo;t fight it — move the \\( x \\)s to whichever side keeps them positive.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 7 - 2x \\;=\\; 3x - 8 \\)' },
          s1: { eq: '\\( 7 \\;=\\; 5x - 8 \\)' },
          s0b: { eq: '\\( 15 - 2x \\;=\\; 3x \\)' },
          s2: { eq: '\\( 15 \\;=\\; 5x \\)' },
          win: { eq: '\\( 3 \\;=\\; x \\)', note: '\\( 3 = x \\) and \\( x = 3 \\) say the same thing. Check: \\( 7-2(3) = 1 \\) and \\( 3(3)-8 = 1 \\) ✓.' },
        },
        ops: [
          { label: 'Add \\( 2x \\) to both sides', to: { s0: 's1', s0b: 's2' } },
          { label: 'Add 8 to both sides', to: { s0: 's0b', s1: 's2' } },
          { label: 'Subtract \\( 3x \\) from both sides', to: {}, blocked: 'Legal — but then the \\( x \\)s live at \\( -5x \\) and you&rsquo;ll owe a sign flip later. Adding \\( 2x \\) keeps them positive.' },
          { label: 'Divide both sides by 5', to: { s2: 'win' }, blocked: 'Collect the \\( x \\)s into one \\( 5x \\) first.' },
        ],
      },
      hint: 'Adding \\( 2x \\) to both sides erases the negative \\( x \\) term in one move.',
      success: 'Negative coefficients are a choice — you can always collect \\( x \\)s on the friendlier side.',
      coach: ['\\( -2x \\) on the left, \\( 3x \\) on the right. Which single addition merges them into \\( 5x \\)?'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Which equation is NOT linear?',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\sqrt{x} + y = 1 \\)',
          '\\( \\dfrac{x}{2} + y = 1 \\)',
          '\\( x + y + z = 0 \\)',
          '\\( 2x - 3 = 0 \\)',
        ],
        correct: 0,
      },
      hint: '\\( \\sqrt{x} = x^{1/2} \\). What does "linear" say about powers?',
      explain: '\\( \\frac{x}{2} \\) is just a coefficient of \\( \\frac{1}{2} \\) — fine. But \\( \\sqrt{x} = x^{1/2} \\) is a fractional power, and linear means every power is exactly 1.',
      coach: ['Rewrite each option with explicit exponents.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Solve \\( 5y - 7 = 2y + 8 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'y =', answer: '5', width: 110 }],
      },
      hint: 'Collect the \\( y \\)s on the left, the numbers on the right.',
      explain: 'Subtract \\( 2y \\): \\( 3y - 7 = 8 \\). Add 7: \\( 3y = 15 \\). Divide by 3: \\( y = 5 \\). Check: \\( 25-7 = 18 = 10+8 \\) ✓.',
      coach: ['Subtract \\( 2y \\) from both sides first.', 'You should reach \\( 3y = 15 \\).'],
    },
    {
      section: 'checkpoint',
      prompt: 'Solve \\( px - q = r \\) for \\( x \\).',
      interaction: {
        type: 'mcq',
        options: [
          '\\( x = \\dfrac{r+q}{p} \\)',
          '\\( x = \\dfrac{r-q}{p} \\)',
          '\\( x = r + \\dfrac{q}{p} \\)',
          '\\( x = \\dfrac{p}{r+q} \\)',
        ],
        correct: 0,
      },
      hint: 'Two moves: undo the \\( -q \\), then undo the \\( p \\). In that order.',
      explain: 'Add \\( q \\) to both sides: \\( px = r + q \\). Divide by \\( p \\): \\( x = \\frac{r+q}{p} \\) — the whole top over \\( p \\), because the division hits everything that was on that pan.',
      coach: ['Which operation is holding \\( q \\) onto the left side?', 'Once you have \\( px = r+q \\), the division applies to the entire right pan.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Solve \\( \\dfrac{2}{x} + 3 = 7 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '1/2', accept: ['0.5'], width: 110 }],
      },
      hint: 'Isolate the fraction, then clear the denominator — the Example 3-4 move.',
      explain: 'Subtract 3: \\( \\frac{2}{x} = 4 \\). Multiply by \\( x \\): \\( 2 = 4x \\). Divide by 4: \\( x = \\frac{1}{2} \\). Check: \\( 2 \\div \\frac{1}{2} + 3 = 4+3 = 7 \\) ✓.',
      coach: ['Get \\( \\frac{2}{x} \\) alone first.', 'Multiply both sides by \\( x \\) to bring it upstairs.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Solve \\( 1 - \\dfrac{1}{1-x} = \\dfrac{1}{1-x} \\).',
      body: 'MA&copy; 1992. Compact and sneaky — but it&rsquo;s pure balance-solver technique.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '-1', width: 110 }],
      },
      hint: 'Both fractions share the denominator \\( 1-x \\). Collect them on one side, or multiply everything through by \\( 1-x \\).',
      explain: 'Add \\( \\frac{1}{1-x} \\) to both sides: \\( 1 = \\frac{2}{1-x} \\). Multiply by \\( 1-x \\): \\( 1-x = 2 \\), so \\( x = -1 \\). Check: \\( 1 - \\frac{1}{2} = \\frac{1}{2} \\) ✓.',
      walkthrough: [
        'Add \\( \\frac{1}{1-x} \\) to both sides to collect the twins: \\( 1 = \\frac{2}{1-x} \\).',
        'The variable is downstairs — the Example 3-4 move: multiply both sides by \\( 1-x \\), giving \\( 1-x = 2 \\).',
        'Subtract 1: \\( -x = 1 \\), so \\( x = -1 \\).',
        'Check in the original: \\( 1-x = 2 \\), so each fraction is \\( \\frac{1}{2} \\), and \\( 1 - \\frac{1}{2} = \\frac{1}{2} \\) ✓.',
      ],
      success: 'That&rsquo;s the whole 3.2 toolkit on one line: collect, clear the denominator, isolate, check.',
      note: 'One habit to keep from this boss: when the same fraction appears twice, collect it <em>before</em> clearing denominators — less algebra, fewer mistakes.',
      coach: ['The same fraction appears on both sides. What one addition merges them?', 'After collecting: \\( 1 = \\frac{2}{1-x} \\). How do you clear a denominator?', 'Multiply both sides by \\( 1-x \\).'],
    },
  ],
};
