/* Lesson 1.2 — Fractional Exponents. */

export default {
  id: 'lesson-1-2',
  title: 'Fractional Exponents',
  kicker: 'Exponents and Logarithms',
  topicIndex: 0,
  lessonIndex: 1,
  next: 'interactive-lesson.html?chapter=1&lesson=3',
  notes: 'exponents.html',
  beats: [

    /* 1 — hook: extend the pattern */
    {
      prompt: 'The rules don’t know what a fraction is. Use them anyway.',
      body: 'If the power rule keeps working, \\( \\left(5^{2}\\right)^{1/2} = 5^{2 \\cdot \\frac12} = 5^{1} = 5 \\). But \\( 5^2 = 25 \\). So what is \\( 25^{1/2} \\)?',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '5' }] },
      hint: 'You just watched the answer get computed. \\( (5^2)^{1/2} \\) and \\( 25^{1/2} \\) are the same expression.',
      explain: '\\( 25^{1/2} = (5^2)^{1/2} = 5 \\). Raising to the \\( \\frac12 \\) power <i>undoes</i> squaring. That’s a square root.',
      success: 'You just invented square roots from the power rule.',
      note: '\\( a^{1/2} = \\sqrt{a} \\), and in general \\( a^{1/n} = \\sqrt[n]{a} \\) — the number that gives back \\( a \\) when raised to the \\( n \\)th power.',
      coach: ['What does the power rule say to do with the exponents \\( 2 \\) and \\( \\frac12 \\)?', 'So \\( 25^{1/2} \\) must equal \\( 5^1 \\).']
    },

    /* 2 — notation */
    {
      prompt: 'Two notations, one idea.',
      interaction: {
        type: 'reveal',
        face: '\\( \\sqrt{a} \\) is the square root — “what squares to \\( a \\)?”<br>\\( \\sqrt[3]{a} \\) is the cube root, \\( \\sqrt[n]{a} \\) the \\( n \\)th root.',
        cta: 'Tap to see them as exponents',
        hidden: 'They are all fractional exponents in disguise: \\( \\sqrt{a} = a^{1/2} \\), \\( \\sqrt[3]{a} = a^{1/3} \\), \\( \\sqrt[n]{a} = a^{1/n} \\). Exponent form is usually easier to compute with, because all the exponent rules apply to it.'
      },
      note: 'When a root problem gets awkward, rewrite it as a fractional exponent and let the ordinary exponent rules do the work.'
    },

    /* 3 — quick evaluation match */
    {
      prompt: 'Match each root to its value.',
      body: 'For each one, ask: “what number, raised to that power, gives this?”',
      interaction: {
        type: 'match',
        pairs: [
          ['\\( 8^{1/3} \\)', '\\( 2 \\)'],
          ['\\( 81^{1/4} \\)', '\\( 3 \\)'],
          ['\\( 100000^{1/5} \\)', '\\( 10 \\)'],
          ['\\( 49^{1/2} \\)', '\\( 7 \\)']
        ]
      },
      hint: '\\( 2^3 = 8 \\), \\( 3^4 = 81 \\), \\( 10^5 = 100000 \\), \\( 7^2 = 49 \\).',
      success: 'Roots are just exponent questions asked backwards.'
    },

    /* 4 — estimation on a number line */
    {
      prompt: 'No calculator: where does \\( \\sqrt{55} \\) live?',
      body: 'Drag \\( n \\) and compare \\( n^2 \\) against 55. You’re hunting for the two integers whose squares trap it.',
      interaction: {
        type: 'slider', min: 1, max: 10, value: 1, label: 'n',
        render(n) {
          const sq = n * n;
          const verdict = sq < 55 ? `${sq} < 55 — too small` : sq > 55 ? `${sq} > 55 — too big` : '55 exactly?!';
          return { main: `\\( ${n}^2 = ${sq} \\)`, sub: verdict };
        }
      },
      note: 'To locate \\( \\sqrt{N} \\), bracket \\( N \\) between consecutive perfect squares. It’s the fastest estimation tool on a no-calculator contest.'
    },

    /* 5 — lock the estimate */
    {
      prompt: '\\( \\sqrt{55} \\) sits between which two consecutive integers?',
      interaction: {
        type: 'mcq',
        options: ['\\( 5 \\) and \\( 6 \\)', '\\( 6 \\) and \\( 7 \\)', '\\( 7 \\) and \\( 8 \\)', '\\( 8 \\) and \\( 9 \\)'],
        correct: 2, cols: true
      },
      hint: 'Which perfect squares trap 55?',
      explain: '\\( 7^2 = 49 < 55 < 64 = 8^2 \\), so \\( 7 < \\sqrt{55} < 8 \\).',
      coach: ['List squares near 55: \\( 36, 49, 64, 81 \\).', 'Which two are on either side of 55?']
    },

    /* 6 — m/n exponents, root first */
    {
      prompt: 'Put the steps of \\( 8^{2/3} \\) in order.',
      body: 'A fraction \\( \\frac{m}{n} \\) in the exponent means both a power (\\( m \\)) and a root (\\( n \\)). The order you do them in changes how painful the arithmetic is.',
      interaction: {
        type: 'order',
        items: [
          'Rewrite: \\( 8^{2/3} = \\left(8^{1/3}\\right)^{2} \\)',
          'Take the cube root first: \\( 8^{1/3} = 2 \\)',
          'Now square the small number: \\( 2^{2} = 4 \\)'
        ]
      },
      hint: 'Splitting the exponent comes first. Then which move keeps the numbers small — squaring 8, or cube-rooting it?',
      explain: 'Root first: \\( 8^{2/3} = (8^{1/3})^2 = 2^2 = 4 \\). Power-first also works — \\( (8^2)^{1/3} = 64^{1/3} = 4 \\) — but you had to cube-root 64 instead of 8. With bigger numbers, power-first buries you.',
      success: 'Root first. Small numbers, happy life.',
      note: '\\( a^{m/n} = \\left(\\sqrt[n]{a}\\right)^{m} \\). Take the root <b>first</b> — it shrinks the number before the power grows it.',
      coach: ['\\( \\frac23 = \\frac13 \\cdot 2 \\): a cube root and a squaring, in some order.', 'Try both orders on \\( 8^{2/3} \\). Which had you working with 2 instead of 64?']
    },

    /* 7 — practice ladder */
    {
      prompt: 'Climb the ladder.',
      body: '\\( 9^{3/2} = a \\qquad 27^{2/3} = b \\)',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '27', width: 110 },
          { label: 'b', placeholder: '?', answer: '9', width: 110 }
        ]
      },
      hint: 'Root first: \\( 9^{1/2} = 3 \\), then cube. \\( 27^{1/3} = 3 \\), then square.',
      explain: '\\( 9^{3/2} = (9^{1/2})^3 = 3^3 = 27 \\) and \\( 27^{2/3} = (27^{1/3})^2 = 3^2 = 9 \\). Cute symmetry, no accident.',
      coach: ['Split each exponent into root-then-power.', 'Both roots land on 3. Then finish each power.']
    },

    /* 8 — negative fractional exponent */
    {
      prompt: 'Now stack every rule: \\( 64^{-4/3} \\).',
      body: 'Negative → downstairs. Then root first, then power. Answer as a fraction \\( a/b \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: 'a/b', answer: '1/256', accept: ['0.00390625'], width: 150 }] },
      hint: 'First: \\( 64^{-4/3} = \\dfrac{1}{64^{4/3}} \\). Now root first: \\( 64^{1/3} = ? \\)',
      explain: '\\( 64^{-4/3} = \\frac{1}{64^{4/3}} = \\frac{1}{(64^{1/3})^4} = \\frac{1}{4^4} = \\frac{1}{256} \\). Three rules, one clean chain.',
      success: 'Negative, fractional, no problem.',
      coach: ['Deal with the minus sign first — where does it send the expression?', '\\( 64^{1/3} = 4 \\). What’s left to do?', '\\( 4^4 = 256 \\), downstairs.']
    },

    /* 9 — the ± question, part 1 */
    {
      prompt: 'Solve it: \\( x^{2} = 25 \\). ALL solutions.',
      interaction: {
        type: 'mcq',
        options: ['\\( x = 5 \\) only', '\\( x = -5 \\) only', '\\( x = 5 \\) or \\( x = -5 \\)', 'No solutions'],
        correct: 2
      },
      hint: 'Square a negative number. What sign comes out?',
      explain: '\\( 5^2 = 25 \\) and \\( (-5)^2 = 25 \\). Squaring destroys the sign, so <i>solving</i> \\( x^2 = 25 \\) must recover both: \\( x = \\pm 5 \\).',
      coach: ['Check \\( x = -5 \\) by substituting it in.']
    },

    /* 10 — the ± question, part 2 */
    {
      prompt: 'Different question: \\( \\sqrt{25} = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: ['\\( 5 \\)', '\\( -5 \\)', '\\( \\pm 5 \\)', 'Undefined'],
        correct: 0, cols: true
      },
      hint: 'This time nobody asked you to solve anything. The \\( \\sqrt{\\phantom{x}} \\) symbol was <i>given</i> to you.',
      explain: 'The radical symbol is defined to mean the <b>positive</b> root: \\( \\sqrt{25} = 5 \\), full stop. If \\( \\sqrt{25} \\) could mean two numbers at once, no formula containing a radical would have a definite value.',
      success: 'Given radical → positive root. Every time.',
      note: '<b>The ± rule:</b> if the radical is handed to you (\\( \\sqrt{25} \\)), it means the positive root. If <i>you</i> introduce the root while solving an equation (\\( x^2 = 25 \\)), you must collect every solution: \\( \\pm 5 \\).',
      coach: ['Compare with the last beat: who introduced the root this time?', 'The symbol \\( \\sqrt{\\phantom{x}} \\) is a function — one input, one output.']
    },

    /* 11 — negatives under even roots */
    {
      prompt: 'Which of these is a real number?',
      body: 'Careful — the parentheses make them different expressions.',
      interaction: {
        type: 'mcq',
        options: ['\\( (-1)^{1/2} \\)', '\\( -\\left(1^{1/2}\\right) \\)', 'Both', 'Neither'],
        correct: 1, cols: true
      },
      hint: 'One of them takes a root <i>of</i> a negative. The other takes a root, then negates it.',
      explain: '\\( (-1)^{1/2} = \\sqrt{-1} \\) asks for a number that squares to \\( -1 \\) — no real number does (squares are never negative). But \\( -(1^{1/2}) = -1 \\) is just “root first, then flip the sign”: perfectly real.',
      success: 'Where the minus sign sits decides everything.',
      coach: ['Rewrite each with a radical symbol.', 'Can any real number square to a negative?']
    },

    /* 12 — odd roots of negatives are fine */
    {
      prompt: 'And \\( \\sqrt[3]{-8} = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: ['\\( -2 \\)', '\\( 2 \\)', 'Undefined', '\\( -512 \\)'],
        correct: 0, cols: true
      },
      hint: 'Cube \\( -2 \\): \\( (-2)(-2)(-2) \\). Count the minus signs.',
      explain: '\\( (-2)^3 = -8 \\) — an odd number of negative factors stays negative. So \\( \\sqrt[3]{-8} = -2 \\), no drama. Odd roots of negatives are fine; <i>even</i> roots of negatives are the impossible ones.',
      note: '<b>Sign rule for roots:</b> odd roots accept negative inputs (\\( \\sqrt[3]{-8} = -2 \\)); even roots of negatives are not real.',
      coach: ['What sign does a product of three negatives have?', 'So which number cubes to \\( -8 \\)?']
    },

    /* ---------- checkpoint ---------- */
    {
      section: 'checkpoint',
      prompt: 'Evaluate \\( \\left(\\dfrac{4}{9}\\right)^{-3/2} \\). Answer as \\( a/b \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: 'a/b', answer: '27/8', accept: ['3.375'], width: 140 }] },
      hint: 'The negative exponent flips the fraction first: \\( \\left(\\frac94\\right)^{3/2} \\).',
      explain: 'Flip: \\( \\left(\\frac94\\right)^{3/2} \\). Root: \\( \\left(\\frac94\\right)^{1/2} = \\frac32 \\). Cube: \\( \\frac{27}{8} \\).',
      coach: ['A negative exponent on a fraction just flips it.', 'Then root first: \\( \\sqrt{9}/\\sqrt{4} \\).']
    },
    {
      section: 'checkpoint',
      prompt: 'Find ALL real solutions of \\( x^{6} = 64 \\).',
      interaction: {
        type: 'mcq',
        options: ['\\( x = 2 \\) only', '\\( x = \\pm 2 \\)', '\\( x = \\pm 8 \\)', '\\( x = 8 \\) only'],
        correct: 1, cols: true
      },
      hint: 'You are solving, and the power is even. Does the ± rule fire?',
      explain: '\\( 2^6 = 64 \\), and the even power means \\( (-2)^6 = 64 \\) too: \\( x = \\pm 2 \\). You introduced the root, so you collect every solution.',
      coach: ['\\( 64 = 2^6 \\).', 'Even exponent: does a negative candidate also work?']
    },
    {
      section: 'checkpoint',
      prompt: 'Find all real \\( x \\) with \\( x^{3} = 64 \\).',
      interaction: { type: 'fillin', fields: [{ label: 'x', placeholder: '?', answer: '4' }] },
      hint: 'Odd power this time. How many real cube roots does a number have?',
      explain: '\\( 4^3 = 64 \\), and an odd power keeps the sign — \\( (-4)^3 = -64 \\) doesn’t work. One solution: \\( x = 4 \\).',
      coach: ['Would a negative \\( x \\) give a positive cube?']
    },
    {
      section: 'checkpoint',
      prompt: 'Solve \\( x^{5/3} = 243 \\).',
      interaction: { type: 'fillin', fields: [{ label: 'x', placeholder: '?', answer: '27' }] },
      hint: 'Undo the exponent: raise both sides to the \\( \\frac35 \\) power. \\( 243 = 3^5 \\) helps.',
      explain: '\\( x = 243^{3/5} = (243^{1/5})^3 = 3^3 = 27 \\). Check: \\( 27^{5/3} = (27^{1/3})^5 = 3^5 = 243 \\).',
      coach: ['What exponent multiplied by \\( \\frac53 \\) gives 1?', '\\( 243^{1/5} = 3 \\) because \\( 3^5 = 243 \\).']
    },
    {
      section: 'checkpoint',
      prompt: 'Evaluate \\( 16^{3/4} \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '8' }] },
      hint: 'Root first: \\( 16^{1/4} = ? \\)',
      explain: '\\( 16^{3/4} = (16^{1/4})^3 = 2^3 = 8 \\).',
      coach: ['\\( 2^4 = 16 \\), so the fourth root of 16 is 2.']
    },

    /* ---------- boss ---------- */
    {
      section: 'boss',
      prompt: 'MATHCOUNTS 1991: \\( \\sqrt{1 + \\sqrt{1 + \\sqrt{n}}} = 2 \\). Find \\( n \\).',
      body: 'Three radicals deep. Unwrap it one layer at a time, from the outside in.',
      interaction: { type: 'fillin', fields: [{ label: 'n', placeholder: '?', answer: '64', width: 140 }] },
      hint: 'Square both sides once. The outermost radical disappears — what equation is left?',
      explain: 'Square: \\( 1 + \\sqrt{1+\\sqrt{n}} = 4 \\), so \\( \\sqrt{1+\\sqrt{n}} = 3 \\). Square: \\( 1 + \\sqrt{n} = 9 \\), so \\( \\sqrt{n} = 8 \\). Square: \\( n = 64 \\).',
      walkthrough: [
        'Square both sides: \\( 1 + \\sqrt{1 + \\sqrt{n}} = 4 \\).',
        'Isolate the next radical: \\( \\sqrt{1 + \\sqrt{n}} = 3 \\).',
        'Square again: \\( 1 + \\sqrt{n} = 9 \\), so \\( \\sqrt{n} = 8 \\).',
        'Square one last time: \\( n = 64 \\).',
        'Check the whole tower: \\( \\sqrt{64} = 8 \\rightarrow \\sqrt{1+8} = 3 \\rightarrow \\sqrt{1+3} = 2 \\). ✓'
      ],
      success: 'Peeled like an onion. That’s exactly how nested radicals die.',
      coach: [
        'You can’t reach \\( n \\) directly — which radical CAN you remove right now?',
        'After squaring, isolate the next radical before squaring again.',
        'Each squaring peels one layer: \\( 2 \\to 4 \\to 3 \\to 9 \\to 8 \\to 64 \\).'
      ]
    }
  ]
};
