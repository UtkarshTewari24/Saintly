/* Lesson 3.3 — Two Equations, Two Variables.
   Substitution and elimination driven through the balance solver; special cases;
   linear-in-disguise. Boss: MA(c) 1990 Problem 52. */

const GRAPH_SVG = `<svg viewBox="0 0 260 200" width="300" style="max-width:100%;display:block;margin:14px auto 0" role="img" aria-label="Two lines crossing at the point (2, 1)">
  <line x1="0" y1="128.6" x2="260" y2="128.6" stroke="#4a4a4a" stroke-width="1"/>
  <line x1="65" y1="0" x2="65" y2="200" stroke="#4a4a4a" stroke-width="1"/>
  <line x1="0" y1="0" x2="260" y2="171.4" stroke="#88b0ff" stroke-width="2"/>
  <line x1="0" y1="200" x2="260" y2="28.6" stroke="#ffb192" stroke-width="2"/>
  <circle cx="151.7" cy="100" r="5" fill="#57d364"/>
  <text x="18" y="26" fill="#88b0ff" font-size="12">x + y = 3</text>
  <text x="186" y="52" fill="#ffb192" font-size="12">x &#8722; y = 1</text>
  <text x="160" y="92" fill="#e8e8e8" font-size="12">(2, 1)</text>
</svg>`;

export default {
  id: 'lesson-3-2',
  title: 'Two Equations, Two Variables',
  kicker: 'Linear Equations',
  topicIndex: 2,
  lessonIndex: 1,
  next: 'interactive-lesson.html?chapter=3&lesson=3',
  notes: 'systems-of-equations.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'One equation, two variables: \\( x + y = 3 \\). Where&rsquo;s <em>the</em> solution?',
      body: 'Slide \\( x \\) and watch. Every position you land on satisfies \\( x+y=3 \\) — the blue line is an infinite menu of solutions. The second equation is what pins one down.' + GRAPH_SVG,
      interaction: {
        type: 'slider',
        min: -1, max: 4, step: 1, value: 0, label: 'x', mustExplore: 4,
        render(n) {
          const y = 3 - n;
          const d = n - y;
          return {
            main: `\\( (${n},\\; ${y}) \\qquad ${n} + ${y < 0 ? '(' + y + ')' : y} = 3 \\; \\checkmark \\)`,
            sub: d === 1
              ? 'And x − y = 1 as well — this is THE point where both lines agree. One equation gives a line; two give a point.'
              : `But x − y = ${d}, not 1 — this point is on the blue line only.`,
          };
        },
      },
      success: 'Infinitely many solutions each, exactly one in common. Solving a system means finding the crossing.',
      note: 'A pair of linear equations is called a <b>system</b>; its solution is the intersection of the two lines. The rest of this lesson is two ways to find it without drawing anything.',
      coach: ['Try x = 2. What happens to the second readout?'],
    },
    {
      prompt: 'Method 1 — substitution. Solve the system \\( x+y=3, \\; x-y=1 \\).',
      body: 'Solve one equation for a variable, then feed the result into the <em>other</em> equation. You drive.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x + y = 3 \\)<br>\\( x - y = 1 \\)' },
          s1: { eq: '\\( x = 3 - y \\)<br>\\( x - y = 1 \\)' },
          t0: { eq: '\\( (3-y) + y = 3 \\;\\;\\Rightarrow\\;\\; 3 = 3 \\)', note: 'Always true — and completely useless. You substituted back into the equation you came from, so it can only tell you what you already told it. Undo, and feed the <em>other</em> equation.' },
          s2: { eq: '\\( x = 3-y \\)<br>\\( (3-y) - y = 1 \\)' },
          s3: { eq: '\\( x = 3-y \\)<br>\\( 3 - 2y = 1 \\)' },
          s4: { eq: '\\( x = 3-y \\)<br>\\( y = 1 \\)' },
          win: { eq: '\\( x = 2, \\;\\; y = 1 \\)', note: 'The point \\( (2,1) \\) — exactly where the lines crossed one beat ago. Check both originals: \\( 2+1=3 \\) ✓ and \\( 2-1=1 \\) ✓.' },
        },
        ops: [
          { label: 'Solve the first equation for \\( x \\)', to: { s0: 's1' } },
          { label: 'Substitute \\( 3-y \\) into the first equation', to: { s1: 't0' }, blocked: 'You need an expression for \\( x \\) before you can substitute anything.' },
          { label: 'Substitute \\( 3-y \\) into the second equation', to: { s1: 's2' }, blocked: 'You need an expression for \\( x \\) before you can substitute anything.' },
          { label: 'Combine the \\( y \\) terms', to: { s2: 's3' } },
          { label: 'Solve for \\( y \\)', to: { s3: 's4' } },
          { label: 'Back-substitute into \\( x = 3-y \\)', to: { s4: 'win' } },
        ],
      },
      hint: 'Three phases: solve for \\( x \\), substitute into the other equation, finish the one-variable equation.',
      success: 'Substitution turns two equations in two unknowns into one equation in one unknown — Lesson 3.1 territory.',
      note: 'The classic self-own: substituting back into the <em>same</em> equation always yields \\( 0=0 \\). Information about \\( y \\) has to come from the equation you haven&rsquo;t used yet.',
      coach: ['Which equation is easiest to solve for a single variable?', 'Once \\( x = 3-y \\), the second equation becomes pure \\( y \\).'],
    },
    {
      prompt: 'Method 2 — elimination. Same system, one tap.',
      body: 'Equations are quantities. You can add two true equations and get a third true one. Watch what adding does to \\( +y \\) and \\( -y \\).',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x + y = 3 \\)<br>\\( x - y = 1 \\)' },
          sA: { eq: '\\( 2x = 4 \\)', note: 'The \\( +y \\) and \\( -y \\) annihilated on contact. One variable left.' },
          sA2: { eq: '\\( x = 2 \\)' },
          sB: { eq: '\\( 2y = 2 \\)', note: 'Subtracting kills the \\( x \\)s instead. Either road works.' },
          sB2: { eq: '\\( y = 1 \\)' },
          win: { eq: '\\( x = 2, \\;\\; y = 1 \\)', note: 'Same crossing, \\( (2,1) \\), found in three taps.' },
        },
        ops: [
          { label: 'Add the two equations', to: { s0: 'sA' } },
          { label: 'Subtract the second equation from the first', to: { s0: 'sB' } },
          { label: 'Divide both sides by 2', to: { sA: 'sA2', sB: 'sB2' } },
          { label: 'Back-substitute to get the other variable', to: { sA2: 'win', sB2: 'win' } },
        ],
      },
      hint: 'The \\( y \\) coefficients are already \\( +1 \\) and \\( -1 \\). What single move exploits that?',
      success: 'This was the cleanest possible case — the coefficients came pre-opposed. Next: when they don&rsquo;t.',
      coach: ['What is \\( (+y) + (-y) \\)?'],
    },
    {
      prompt: 'Elimination with scaling: \\( 2x + 3y = -1, \\;\\; 3x - 4y = 7 \\).',
      body: 'Example 3-5. Nothing cancels as-is — try it and see, then <em>make</em> a pair of opposite coefficients with the multiply ops.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 2x + 3y = -1 \\)<br>\\( 3x - 4y = 7 \\)' },
          d0: { eq: '\\( 5x - y = 6 \\)', note: 'Honest dead end: nothing cancelled, so you still have two unknowns in one equation. Adding only helps once a pair of coefficients are exact opposites. Undo.' },
          s1: { eq: '\\( -6x - 9y = 3 \\)<br>\\( 3x - 4y = 7 \\)' },
          s1b: { eq: '\\( 2x + 3y = -1 \\)<br>\\( 6x - 8y = 14 \\)' },
          s2: { eq: '\\( -6x - 9y = 3 \\)<br>\\( 6x - 8y = 14 \\)', note: 'Look at the \\( x \\) column: \\( -6 \\) and \\( +6 \\). Armed.' },
          s3: { eq: '\\( -17y = 17 \\)' },
          s4: { eq: '\\( y = -1 \\)' },
          win: { eq: '\\( x = 1, \\;\\; y = -1 \\)', note: 'Check both originals: \\( 2(1)+3(-1) = -1 \\) ✓ and \\( 3(1)-4(-1) = 7 \\) ✓.' },
        },
        ops: [
          { label: 'Add the two equations', to: { s0: 'd0', s2: 's3' }, blocked: 'Nothing cancels from here — line up opposite coefficients first.' },
          { label: 'Multiply the first equation by \\( -3 \\)', to: { s0: 's1', s1b: 's2' } },
          { label: 'Multiply the second equation by \\( 2 \\)', to: { s0: 's1b', s1: 's2' } },
          { label: 'Solve for \\( y \\)', to: { s3: 's4' } },
          { label: 'Back-substitute', to: { s4: 'win' } },
        ],
      },
      hint: 'Target the \\( x \\)s: \\( 2 \\) and \\( 3 \\) both divide 6. Scale one equation by \\( -3 \\) and the other by \\( 2 \\).',
      success: 'Choosing the multipliers IS the skill — everything after is arithmetic.',
      note: 'Scaling multiplies the <em>entire</em> equation — every term, both sides. Scaling only one side is the classic way to break a true equation.',
      coach: ['You want the \\( x \\) coefficients to be \\( +6 \\) and \\( -6 \\) (or the \\( y \\)s to be \\( \\pm 12 \\)).', 'Multiply the first equation by \\( -3 \\). What must the second become?'],
    },
    {
      prompt: 'The general recipe: \\( a_1x + a_2y = a_3 \\) and \\( b_1x + b_2y = b_3 \\). Kill \\( x \\).',
      body: 'This works on every system, every time. Which multipliers?',
      interaction: {
        type: 'mcq',
        options: [
          'first \\( \\times (-b_1) \\), second \\( \\times \\, a_1 \\)',
          'first \\( \\times \\, b_1 \\), second \\( \\times \\, a_1 \\)',
          'first \\( \\times \\, a_1 \\), second \\( \\times \\, b_1 \\)',
          'first \\( \\times (-a_2) \\), second \\( \\times \\, b_2 \\)',
        ],
        correct: 0,
      },
      hint: 'After scaling, the \\( x \\) coefficients must be exact opposites. Multiply them out and compare.',
      explain: 'First \\( \\times(-b_1) \\) makes the \\( x \\) coefficient \\( -a_1b_1 \\); second \\( \\times a_1 \\) makes it \\( a_1b_1 \\). Opposites — adding wipes \\( x \\) out. (Same-sign multipliers give \\( a_1b_1 \\) twice, which adds to \\( 2a_1b_1 \\), not zero; the \\( a_2, b_2 \\) option is aimed at \\( y \\), not \\( x \\).)',
      note: 'You&rsquo;ll never memorize this — you&rsquo;ll re-derive it in two seconds: <em>cross-multiply the target coefficients, flip one sign.</em>',
      coach: ['What must the two \\( x \\) coefficients look like after scaling for adding to erase them?', 'Compute the \\( x \\) coefficient each option produces.'],
    },
    {
      prompt: 'Special case I: \\( 2x - 4y = 7, \\;\\; x - 2y = 2 \\).',
      body: 'Example 3-6. Run the elimination and see what falls out.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 2x - 4y = 7 \\)<br>\\( x - 2y = 2 \\)' },
          s1: { eq: '\\( 2x - 4y = 7 \\)<br>\\( -2x + 4y = -4 \\)' },
          win: { eq: '\\( 0 = 3 \\)', note: 'Both variables vanished and left a lie. No \\( (x,y) \\) on Earth makes \\( 0=3 \\) true — this system has <b>no solution</b>. Geometrically: the left sides are proportional (\\( \\times 2 \\)) but the right sides aren&rsquo;t — two parallel lines that never meet.' },
        },
        ops: [
          { label: 'Multiply the second equation by \\( -2 \\)', to: { s0: 's1' } },
          { label: 'Add the two equations', to: { s1: 'win' }, blocked: 'Scale first so the \\( x \\) coefficients are opposites.' },
        ],
      },
      hint: 'Standard elimination: scale the second equation so its \\( x \\) coefficient opposes the first&rsquo;s.',
      success: 'Elimination didn&rsquo;t fail — it <em>diagnosed</em>. A false statement means no solution.',
      coach: ['The \\( x \\) coefficients are 2 and 1. What multiplier makes them opposites?'],
    },
    {
      prompt: 'Special case II: on \\( 2x-2y=6, \\; x-y=3 \\), elimination leaves \\( 0 = 0 \\). Meaning?',
      body: 'Example 3-7. Contrast with the \\( 0=3 \\) you just met.',
      interaction: {
        type: 'mcq',
        options: [
          'Infinitely many solutions — both equations are the same line',
          'No solution — the lines are parallel',
          'The solution is \\( x = 0, \\; y = 0 \\)',
          'An arithmetic mistake — elimination can&rsquo;t produce \\( 0=0 \\)',
        ],
        correct: 0,
      },
      hint: 'Is \\( 0 = 0 \\) a lie or a truth? And look at the first equation — it&rsquo;s the second times 2.',
      explain: '\\( 0=3 \\) is always false → no solution. \\( 0=0 \\) is always true → no constraint at all: the second equation was the first in disguise (\\( \\times 2 \\)), so every point on the line \\( x-y=3 \\) works. Infinitely many solutions.',
      note: 'The tell: one equation is a multiple of the other. False leftover → parallel, no solution. True leftover → same line, infinitely many.',
      coach: ['Divide the first equation by 2 and compare it with the second.', 'A statement with no variables is either always true or always false — which is which here?'],
    },
    {
      prompt: 'Standardize first: \\( 2x = 2y - 4 \\) and \\( 2y = 2 + x \\).',
      body: 'Example 3-8. Neither equation is in \\( ax+by=c \\) shape. Rearrange both, eliminate, solve.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x =', answer: '-2', width: 100 },
          { label: 'y =', answer: '0', width: 100 },
        ],
      },
      hint: 'Move every variable to the left: \\( 2x - 2y = -4 \\) and \\( -x + 2y = 2 \\). Now the \\( y \\)s already oppose.',
      explain: 'Standardized: \\( 2x-2y=-4 \\) and \\( -x+2y=2 \\). Add: \\( x = -2 \\). Back-substitute: \\( 2y = 2 + (-2) = 0 \\), so \\( y = 0 \\). Check: \\( 2(-2) = 2(0)-4 \\) ✓.',
      note: 'Elimination needs the columns lined up. Thirty seconds of rearranging beats three minutes of confusion.',
      coach: ['Get both equations into \\( ax + by = c \\) form first.', 'After rearranging, look at the \\( y \\) coefficients: \\( -2 \\) and \\( +2 \\).'],
    },
    {
      prompt: 'Linear in disguise: \\( 2\\sqrt{x} + 4\\sqrt{y} = 10, \\quad 2\\sqrt{x} - 3\\sqrt{y} = 3 \\).',
      body: 'Example 3-9, and the big idea of the lesson: rename \\( a = \\sqrt{x}, \\; b = \\sqrt{y} \\) and this IS a linear system. Solve it, then convert back.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x =', answer: '9', width: 100 },
          { label: 'y =', answer: '1', width: 100 },
        ],
      },
      hint: 'In \\( a,b \\)-land: \\( 2a+4b=10 \\) and \\( 2a-3b=3 \\). Subtract to kill \\( a \\). Then square back.',
      explain: 'Subtracting: \\( 7b = 7 \\), so \\( b=1 \\), then \\( 2a = 10-4 = 6 \\), so \\( a=3 \\). Converting back: \\( x = a^2 = 9 \\), \\( y = b^2 = 1 \\). Check: \\( 2(3)+4(1)=10 \\) ✓.',
      note: 'You squared at the end — remember Chapter 1&rsquo;s \\( \\pm \\) warnings. Here \\( \\sqrt{x} \\) was <em>given</em>, so \\( a \\) and \\( b \\) had to be the nonnegative roots: no sign ambiguity. Same trick works for \\( \\frac{1}{x} \\), \\( \\frac{1}{y} \\) — remember the denominator move from last lesson.',
      coach: ['Stop seeing \\( \\sqrt{x} \\). See a single unknown named \\( a \\).', 'Subtract the equations — the \\( 2a \\)s cancel instantly.', 'Once \\( a=3 \\): \\( x \\) is not 3. What undoes a square root?'],
    },

    /* ---------------- checkpoint (Exercise 3-3, full spread) ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Solve: \\( x + 2y = 5, \\quad 3x - y = 1 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x =', answer: '1', width: 100 },
          { label: 'y =', answer: '2', width: 100 },
        ],
      },
      hint: 'Multiply the second equation by 2 — the \\( y \\)s become \\( +2 \\) and \\( -2 \\).',
      explain: '\\( \\times 2 \\) on the second: \\( 6x - 2y = 2 \\). Add to the first: \\( 7x = 7 \\), so \\( x=1 \\), then \\( 2y = 4 \\), \\( y=2 \\).',
      coach: ['Either method works; elimination on \\( y \\) is one multiply away.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Fractions: \\( \\dfrac{x}{2} + \\dfrac{y}{3} = 2, \\quad \\dfrac{x}{3} - \\dfrac{y}{6} = \\dfrac{1}{6} \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x =', answer: '2', width: 100 },
          { label: 'y =', answer: '3', width: 100 },
        ],
      },
      hint: 'Clear denominators first: multiply each equation through by 6.',
      explain: '\\( \\times 6 \\): \\( 3x + 2y = 12 \\) and \\( 2x - y = 1 \\). Double the second: \\( 4x - 2y = 2 \\); add: \\( 7x = 14 \\), \\( x = 2 \\), then \\( y = 2x-1 = 3 \\).',
      coach: ['Fractions are a costume. One multiplication per equation removes them.', 'After clearing: \\( 3x+2y=12, \\; 2x-y=1 \\).'],
    },
    {
      section: 'checkpoint',
      prompt: 'Decimals: \\( 0.5x + 0.2y = 1.2, \\quad 0.3x - 0.1y = 0.5 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x =', answer: '2', width: 100 },
          { label: 'y =', answer: '1', width: 100 },
        ],
      },
      hint: 'Same trick as fractions: multiply both equations by 10.',
      explain: '\\( \\times 10 \\): \\( 5x+2y=12 \\) and \\( 3x-y=5 \\). Double the second and add: \\( 11x = 22 \\), \\( x=2 \\), then \\( y = 3(2)-5 = 1 \\).',
      coach: ['Decimals clear the same way fractions do.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Rearrange first: \\( 3y = 2x - 5 \\) and \\( x = y + 3 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x =', answer: '4', width: 100 },
          { label: 'y =', answer: '1', width: 100 },
        ],
      },
      hint: 'The second equation hands you \\( x \\) on a plate — substitute it.',
      explain: 'Substitute \\( x = y+3 \\) into the first: \\( 3y = 2(y+3) - 5 = 2y + 1 \\), so \\( y = 1 \\), then \\( x = 4 \\). Check: \\( 3(1) = 8-5 \\) ✓.',
      coach: ['When one equation is already solved for a variable, substitution is free.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'If \\( \\dfrac{3}{\\sqrt{y}} - \\dfrac{1}{\\sqrt{x}} = \\dfrac{2}{\\sqrt{x} + \\sqrt{y}} \\), find \\( \\dfrac{x}{y} \\).',
      body: 'Problem 53. This one wants the disguise trick <em>and</em> Chapter 1&rsquo;s fraction skills.',
      interaction: {
        type: 'mcq',
        options: ['\\( \\dfrac{1}{3} \\)', '\\( 3 \\)', '\\( \\dfrac{1}{9} \\)', '\\( \\sqrt{3} \\)'],
        correct: 0,
      },
      hint: 'Rename \\( a = \\sqrt{x}, b = \\sqrt{y} \\), combine the left side over one denominator \\( ab \\), then cross-multiply.',
      explain: 'With \\( a=\\sqrt{x}, b=\\sqrt{y} \\): \\( \\frac{3a - b}{ab} = \\frac{2}{a+b} \\). Cross-multiply: \\( (3a-b)(a+b) = 2ab \\), i.e. \\( 3a^2 + 2ab - b^2 = 2ab \\), so \\( 3a^2 = b^2 \\). Then \\( \\frac{x}{y} = \\frac{a^2}{b^2} = \\frac{1}{3} \\).',
      coach: ['Rename the radicals first — the equation is about \\( a \\) and \\( b \\).', 'Put \\( \\frac{3}{b} - \\frac{1}{a} \\) over the common denominator \\( ab \\).', 'After cross-multiplying, the \\( ab \\) terms cancel. What survives?'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Solve: \\( \\dfrac{x+2y}{xy} = \\dfrac{11}{12}, \\quad \\dfrac{2x-3y}{xy} = \\dfrac{2}{3} \\).',
      body: 'MA&copy; 1990, Problem 52. It looks nothing like a linear system. It is one.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'x =', answer: '6', width: 100 },
          { label: 'y =', answer: '12/7', width: 100 },
        ],
      },
      hint: 'Split each left side: \\( \\frac{x+2y}{xy} = \\frac{1}{y} + \\frac{2}{x} \\). Now rename \\( a = \\frac{1}{x}, \\; b = \\frac{1}{y} \\).',
      explain: 'With \\( a = \\frac1x, b = \\frac1y \\) the system is linear: \\( 2a + b = \\frac{11}{12} \\) and \\( -3a + 2b = \\frac{2}{3} \\). Solving gives \\( a = \\frac16, b = \\frac{7}{12} \\), so \\( x = 6 \\) and \\( y = \\frac{12}{7} \\).',
      walkthrough: [
        'Split the fractions: \\( \\frac{x+2y}{xy} = \\frac{x}{xy} + \\frac{2y}{xy} = \\frac{1}{y} + \\frac{2}{x} \\), and likewise \\( \\frac{2x-3y}{xy} = \\frac{2}{y} - \\frac{3}{x} \\).',
        'Rename \\( a = \\frac{1}{x}, \\; b = \\frac{1}{y} \\). The system becomes linear: \\( 2a + b = \\frac{11}{12} \\) and \\( -3a + 2b = \\frac{2}{3} \\).',
        'Eliminate \\( b \\): multiply the first by \\( -2 \\) and add: \\( -7a = -\\frac{11}{6} + \\frac{2}{3} = -\\frac{7}{6} \\), so \\( a = \\frac{1}{6} \\).',
        'Then \\( b = \\frac{11}{12} - 2a = \\frac{11}{12} - \\frac{4}{12} = \\frac{7}{12} \\).',
        'Convert back: \\( x = \\frac{1}{a} = 6 \\), \\( y = \\frac{1}{b} = \\frac{12}{7} \\). Check: \\( \\frac{6 + \\frac{24}{7}}{\\frac{72}{7}} = \\frac{66}{72} = \\frac{11}{12} \\) ✓.',
      ],
      success: 'Chapter 3&rsquo;s big idea, weaponized: anything that becomes linear after a renaming IS linear for solving purposes.',
      coach: ['Try splitting \\( \\frac{x+2y}{xy} \\) into two fractions.', 'The natural unknowns here are \\( \\frac1x \\) and \\( \\frac1y \\), not \\( x \\) and \\( y \\).', 'Solve the linear system in \\( a, b \\) first; flip back at the very end.'],
    },
  ],
};
