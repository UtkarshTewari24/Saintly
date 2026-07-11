/* Lesson 1.1 — Integer Exponents. Golden reference for the lesson schema:
   exercises every interaction type. See lessons/LESSON-SCHEMA.md. */

export default {
  id: 'lesson-1-1',
  title: 'Integer Exponents',
  kicker: 'Exponents and Logarithms',
  topicIndex: 0,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=1&lesson=2',
  notes: 'exponents.html',
  beats: [

    /* 1 — hook: notation compresses */
    {
      prompt: 'Multiplication is repeated addition. Exponents are repeated multiplication.',
      body: 'Drag the exponent. Watch what happens.',
      interaction: {
        type: 'slider', min: 1, max: 10, value: 1, label: 'n',
        render(n) {
          const chain = Array(n).fill('2').join(' \\cdot ');
          return {
            main: `\\( 2^{${n}} = ${chain} = ${2 ** n} \\)`,
            sub: n === 1 ? 'one lonely 2' : `${n} twos multiplied — one tidy symbol instead of ${n * 2 - 1} characters`
          };
        }
      },
      note: 'The notation \\( 2^{10} \\) compresses ten multiplications into three characters. That compression is the whole point — and the rules below all come from counting the factors it hides.'
    },

    /* 2 — vocabulary */
    {
      prompt: 'In \\( 7^4 \\), which number is the <b>base</b>?',
      body: 'The base is the number being multiplied. The exponent counts how many copies. \\( 7^4 \\) is read “seven to the fourth power”; \\( 7^2 \\) is “seven squared”, \\( 7^3 \\) “seven cubed”.',
      interaction: { type: 'mcq', options: ['\\( 7 \\)', '\\( 4 \\)', 'Both', 'Neither'], correct: 0, cols: true },
      hint: 'Which number would you actually write down four times?',
      explain: '\\( 7^4 = 7 \\cdot 7 \\cdot 7 \\cdot 7 \\). The 7 is the base — it is what gets multiplied. The 4 just counts.',
      success: 'The base is what gets multiplied; the exponent counts the copies.',
      coach: ['Say \\( 7^4 \\) out loud as a multiplication.', 'Write it out in full: which number appears in the product?']
    },

    /* 3 — product rule, discovered before stated */
    {
      prompt: 'Two groups of 2s merge: \\( 2^{5} \\cdot 2^{6} \\)',
      body: 'That is \\( (2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2) \\cdot (2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2) \\) — five 2s, then six more, all multiplied together. Predict the exponent of the result.',
      interaction: { type: 'fillin', fields: [{ label: 'exponent', placeholder: '?', answer: '11' }] },
      hint: 'Don’t compute anything. Count the 2s in the merged pile.',
      explain: 'Five 2s joined by six more 2s is eleven 2s: \\( 2^5 \\cdot 2^6 = 2^{11} \\). Multiplying same-base powers just pools the factors.',
      success: 'Eleven 2s. You just discovered the product rule.',
      note: '<b>Product rule:</b> \\( a^m \\cdot a^n = a^{m+n} \\). Same base → add the exponents, because you are pooling the factors.',
      coach: ['How many 2s are in the first group? The second?', 'The result is one big pile of 2s — how big?', 'Add the two counts: \\( 5 + 6 \\).']
    },

    /* 4 — quotient rule via cancellation */
    {
      prompt: 'Now divide: \\( \\dfrac{3^{15}}{3^{12}} = 3^{\\,?} \\)',
      body: 'Fifteen 3s on top, twelve on the bottom. Every bottom 3 cancels one top 3 — pair them off in your head. What survives?',
      interaction: { type: 'fillin', fields: [{ label: 'exponent', placeholder: '?', answer: '3' }] },
      hint: 'Each of the twelve bottom 3s wipes out exactly one top 3.',
      explain: 'Twelve cancellations leave \\( 15 - 12 = 3 \\) threes on top: \\( \\frac{3^{15}}{3^{12}} = 3^{3} = 27 \\).',
      success: 'Three 3s survive the cancellation.',
      note: '<b>Quotient rule:</b> \\( \\dfrac{a^m}{a^n} = a^{m-n} \\). Division cancels factors, so subtract the exponents.',
      coach: ['Write a small version: \\( \\frac{3 \\cdot 3 \\cdot 3}{3 \\cdot 3} \\). What cancels?', 'Fifteen on top, twelve cancelled — how many remain?']
    },

    /* 5 — negative exponents from following the rule blindly */
    {
      prompt: 'Follow the rule blindly: \\( \\dfrac{2^{5}}{2^{8}} = 2^{5-8} = 2^{-3} \\). What number is that?',
      body: 'Do the cancellation instead: five top 2s all cancel, and three 2s are left over — <i>on the bottom</i>.',
      interaction: {
        type: 'mcq',
        options: ['\\( -8 \\)', '\\( \\dfrac{1}{8} \\)', '\\( -\\dfrac{1}{8} \\)', '\\( 8 \\)'],
        correct: 1, cols: true
      },
      hint: 'The three leftover 2s sit in the denominator. Nothing here is negative — the sign lives in the <i>exponent</i>, not the value.',
      explain: 'Cancelling leaves \\( \\frac{1}{2 \\cdot 2 \\cdot 2} = \\frac{1}{8} \\). So \\( 2^{-3} = \\frac{1}{2^3} \\). A negative exponent means “in the denominator” — it never makes the value negative.',
      success: 'A negative exponent means “downstairs”, not “negative”.',
      note: '<b>Negative exponents:</b> \\( a^{-n} = \\dfrac{1}{a^{n}} \\). The minus sign moves the factors to the denominator; the value of \\( 2^{-3} \\) is a perfectly positive \\( \\frac18 \\).',
      coach: ['Cancel the five top 2s against five of the eight bottom 2s.', 'Three 2s survive — but on which floor of the fraction?', 'So the value is 1 over \\( 2^3 \\).']
    },

    /* 6 — zero exponent, two ways */
    {
      prompt: 'What is \\( 3^{0} \\)?',
      body: 'Compute \\( \\dfrac{3^3}{3^3} \\) two different ways and make them agree.',
      interaction: {
        type: 'reveal',
        face: 'Way 1 — the quotient rule: \\( \\dfrac{3^3}{3^3} = 3^{3-3} = 3^{0} \\).<br>Way 2 — common sense: \\( \\dfrac{27}{27} = \\; ? \\)',
        cta: 'Tap to make the two ways agree',
        hidden: 'Way 2 says \\( \\frac{27}{27} = 1 \\). Both ways computed the same thing, so \\( 3^{0} = 1 \\). Nothing about 3 mattered — <b>any nonzero number to the 0th power is 1</b>.'
      },
      note: '\\( a^{0} = 1 \\) for every \\( a \\neq 0 \\). It isn’t a convention pulled from thin air — the quotient rule forces it.'
    },

    /* 7 — 0^0 */
    {
      prompt: 'So then… what is \\( 0^{0} \\)?',
      interaction: { type: 'mcq', options: ['\\( 0 \\)', '\\( 1 \\)', '\\( \\infty \\)', 'Undefined'], correct: 3, cols: true },
      hint: 'The \\( a^0 = 1 \\) argument needed \\( \\frac{a^3}{a^3} \\) — try that with \\( a = 0 \\) and watch what breaks.',
      explain: 'With \\( a = 0 \\) the argument needs \\( \\frac{0}{0} \\), which is meaningless. Powers of 0 want the answer 0; the zero-exponent rule wants 1. Two rules collide, so \\( 0^0 \\) is left <b>undefined</b> (and so is \\( 0^{-n} \\), which would be \\( \\frac{1}{0} \\)).',
      success: 'Two good rules collide, so mathematics declines to choose.',
      coach: ['What did the \\( 3^0 \\) argument divide by?', 'What happens to \\( \\frac{a^3}{a^3} \\) when \\( a = 0 \\)?']
    },

    /* 8 — consolidation match */
    {
      prompt: 'Lock it in. Match each expression to its simplified form.',
      body: 'Tap an expression on the left, then its match on the right.',
      interaction: {
        type: 'match',
        pairs: [
          ['\\( 7^{3} \\cdot 7^{4} \\)', '\\( 7^{7} \\)'],
          ['\\( \\dfrac{5^{8}}{5^{2}} \\)', '\\( 5^{6} \\)'],
          ['\\( 4^{-2} \\)', '\\( \\dfrac{1}{16} \\)'],
          ['\\( 9^{0} \\)', '\\( 1 \\)']
        ]
      },
      hint: 'Product → add exponents. Quotient → subtract. Negative → downstairs. Zero → 1.',
      success: 'All four rules, one screen.'
    },

    /* 9 — the same-base warning (error hunt) */
    {
      prompt: 'One line of this “solution” is wrong. Tap it.',
      body: 'A student simplifies \\( 2^{3} \\cdot 5^{2} \\):',
      interaction: {
        type: 'errorhunt',
        lines: [
          { text: '\\( 2^{3} = 2 \\cdot 2 \\cdot 2 = 8 \\)' },
          { text: '\\( 5^{2} = 5 \\cdot 5 = 25 \\)' },
          { text: '\\( 2^{3} \\cdot 5^{2} = 10^{3+2} = 10^{5} \\)', wrong: true },
          { text: '\\( 10^{5} = 100000 \\)' }
        ]
      },
      hint: 'The product rule pools copies of the <i>same</i> factor. Are these the same factor?',
      explain: 'Line 3 invents a rule. \\( 2^3 \\cdot 5^2 \\) is three 2s and two 5s — there is no pile of 10s anywhere. The real value is \\( 8 \\cdot 25 = 200 \\), nowhere near \\( 100000 \\). The exponent rules ONLY work when the bases match.',
      success: 'Caught it. Different bases — no pooling allowed.',
      note: '<b>Same-base warning:</b> \\( a^m \\cdot b^n \\) does not combine unless \\( a = b \\). Mixing \\( 2^3 \\cdot 5^2 \\) into \\( 10^5 \\) turns 200 into 100000.',
      coach: ['Write lines 1 and 2 out as factors. Do you see any 10s?', 'Which line suddenly has a base that appears nowhere above it?']
    },

    /* 10 — distribution trap */
    {
      prompt: 'Which one simplifies by just subtracting an exponent?',
      body: 'Two lookalikes: \\( \\dfrac{5^{5} + 5^{2}}{5} \\) and \\( \\dfrac{5^{5} \\cdot 5^{2}}{5} \\).',
      interaction: {
        type: 'mcq',
        options: [
          'Only \\( \\dfrac{5^{5} + 5^{2}}{5} \\)',
          'Only \\( \\dfrac{5^{5} \\cdot 5^{2}}{5} \\)',
          'Both of them',
          'Neither of them'
        ],
        correct: 1
      },
      hint: 'The quotient rule cancels <i>factors</i>. Is \\( 5^5 + 5^2 \\) a pile of factors, or a sum?',
      explain: 'The product version is all factors: \\( \\frac{5^5 \\cdot 5^2}{5} = 5^{5+2-1} = 5^{6} \\). The sum version is NOT — you must divide each term: \\( \\frac{5^5 + 5^2}{5} = 5^4 + 5 \\), which is not any single power of 5. Exponent rules act on multiplication and division, never across a plus sign.',
      success: 'Exponent rules never reach across a plus sign.',
      note: 'Before using an exponent rule, ask: <b>is everything here multiplied?</b> If a \\( + \\) or \\( - \\) is in the way, the rules don’t apply to the whole expression.',
      coach: ['What does the quotient rule actually cancel — terms or factors?', 'Try tiny numbers: \\( \\frac{2^3 + 2}{2} \\) versus \\( 2^{3-1} + 2 \\). Equal?']
    },

    /* 11 — power rule */
    {
      prompt: 'A power of a power: \\( \\left(2^{3}\\right)^{n} \\)',
      body: 'Each copy of \\( 2^3 \\) carries three 2s. Drag \\( n \\) and count the total.',
      interaction: {
        type: 'slider', min: 1, max: 6, value: 1, label: 'n',
        render(n) {
          const groups = Array(n).fill('2^{3}').join(' \\cdot ');
          return {
            main: `\\( (2^{3})^{${n}} = ${groups} = 2^{${3 * n}} \\)`,
            sub: `${n} ${n === 1 ? 'group' : 'groups'} of three 2s → ${3 * n} twos total`
          };
        }
      },
      note: '<b>Power rule:</b> \\( \\left(a^{m}\\right)^{n} = a^{mn} \\). You have \\( n \\) groups of \\( m \\) factors — groups times group-size, so the exponents <i>multiply</i>.'
    },

    /* 12 — tower trap */
    {
      prompt: 'Are \\( 2^{(3^{4})} \\) and \\( \\left(2^{3}\\right)^{4} \\) equal?',
      interaction: {
        type: 'mcq',
        options: [
          'Yes — both are \\( 2^{12} \\)',
          'Yes — both are \\( 2^{81} \\)',
          'No — \\( 2^{(3^4)} = 2^{81} \\) but \\( (2^3)^4 = 2^{12} \\)',
          'No — \\( 2^{(3^4)} = 2^{12} \\) but \\( (2^3)^4 = 2^{81} \\)'
        ],
        correct: 2
      },
      hint: 'Work the tower from the top down: what is \\( 3^4 \\) on its own?',
      explain: 'In \\( 2^{(3^4)} \\) the whole tower \\( 3^4 = 81 \\) is the exponent, giving \\( 2^{81} \\) — a 25-digit number. The power rule only applies to the parenthesized \\( (2^3)^4 = 2^{12} = 4096 \\). Towers evaluate top-down; parentheses change everything.',
      success: 'Off by a factor of \\( 2^{69} \\). Parentheses matter.',
      coach: ['Evaluate the top of the tower first: \\( 3^4 = ? \\)', 'So \\( 2^{(3^4)} \\) is 2 to what power?', 'And the power rule gives \\( (2^3)^4 = 2^{3 \\cdot 4} \\).']
    },

    /* ---------- checkpoint ---------- */
    {
      section: 'checkpoint',
      prompt: 'Evaluate \\( 3^{4} \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '81' }] },
      hint: 'Four 3s: \\( 3 \\cdot 3 \\cdot 3 \\cdot 3 \\). Square twice.',
      explain: '\\( 3^4 = 9 \\cdot 9 = 81 \\).',
      coach: ['\\( 3^2 = 9 \\). Now square that.']
    },
    {
      section: 'checkpoint',
      prompt: 'Fill in both exponents.',
      body: '\\( 2^{5} \\cdot 2^{2} = 2^{\\,a} \\qquad \\dfrac{2^{7}}{2^{2}} = 2^{\\,b} \\)',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '7', width: 110 },
          { label: 'b', placeholder: '?', answer: '5', width: 110 }
        ]
      },
      hint: 'Multiplying pools factors (add); dividing cancels them (subtract).',
      explain: '\\( 2^5 \\cdot 2^2 = 2^{5+2} = 2^7 \\) and \\( \\frac{2^7}{2^2} = 2^{7-2} = 2^5 \\).',
      coach: ['Product rule for the first, quotient rule for the second.']
    },
    {
      section: 'checkpoint',
      prompt: 'Evaluate \\( 5^{-3} \\cdot 5^{5} \\cdot 5^{-1} \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '5' }] },
      hint: 'One base, three exponents — add them all: \\( -3 + 5 + (-1) \\).',
      explain: 'The exponents sum to \\( -3 + 5 - 1 = 1 \\), so the product is \\( 5^{1} = 5 \\).',
      coach: ['Same base throughout — the product rule works with negative exponents too.', 'Add: \\( -3 + 5 - 1 = ? \\)']
    },
    {
      section: 'checkpoint',
      prompt: 'Evaluate \\( 2^{5} \\cdot 3^{2} \\cdot 2^{-3} \\).',
      interaction: {
        type: 'mcq',
        options: ['\\( 36 \\)', '\\( 6^{4} \\)', '\\( 72 \\)', '\\( 6 \\)'],
        correct: 0, cols: true
      },
      hint: 'Pool the 2s. Leave the 3s alone — different base.',
      explain: 'Only the 2s combine: \\( 2^{5-3} = 2^2 = 4 \\). Then \\( 4 \\cdot 3^2 = 4 \\cdot 9 = 36 \\). Merging the bases into \\( 6^{4} \\) is the same-base trap.',
      coach: ['Group by base first: \\( (2^5 \\cdot 2^{-3}) \\cdot 3^2 \\).', 'What is \\( 2^2 \\cdot 9 \\)?']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\left(3^{5}\\right)^{2} = 3^{\\,?} \\)',
      interaction: { type: 'fillin', fields: [{ label: 'exponent', placeholder: '?', answer: '10' }] },
      hint: 'Two groups of five 3s.',
      explain: 'Power rule: \\( (3^5)^2 = 3^{5 \\cdot 2} = 3^{10} \\). Multiply, don’t add.',
      coach: ['How many 3s per group, and how many groups?']
    },

    /* ---------- boss ---------- */
    {
      section: 'boss',
      prompt: 'Evaluate \\( (-3)^{-2} + (-2)^{-1} + (-1)^{0} + 0^{1} + 1^{2} + 2^{3} + 3^{4} \\).',
      body: 'Every rule from this lesson, one term at a time. Fractions welcome — answer as \\( a/b \\) if needed.',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '1631/18', width: 170 }] },
      hint: 'Handle the two negative exponents first, carefully: \\( (-3)^{-2} = \\frac{1}{(-3)^2} \\) and \\( (-2)^{-1} = \\frac{1}{-2} \\). The rest are quick.',
      explain: 'Term by term: \\( \\frac19 - \\frac12 + 1 + 0 + 1 + 8 + 81 \\). The whole numbers give 91; the fractions give \\( \\frac{2 - 9}{18} = -\\frac{7}{18} \\). Total: \\( 91 - \\frac{7}{18} = \\frac{1631}{18} \\).',
      walkthrough: [
        '\\( (-3)^{-2} = \\dfrac{1}{(-3)^{2}} = \\dfrac{1}{9} \\). Negative exponent → downstairs; then the square kills the sign.',
        '\\( (-2)^{-1} = \\dfrac{1}{-2} = -\\dfrac{1}{2} \\). One copy of \\( -2 \\), downstairs — the sign survives.',
        '\\( (-1)^{0} = 1 \\). Anything nonzero to the 0th power is 1 — even negatives.',
        '\\( 0^{1} = 0 \\), \\( 1^{2} = 1 \\), \\( 2^{3} = 8 \\), \\( 3^{4} = 81 \\).',
        'Whole numbers: \\( 1 + 0 + 1 + 8 + 81 = 91 \\). Fractions: \\( \\frac19 - \\frac12 = \\frac{2-9}{18} = -\\frac{7}{18} \\).',
        '\\( 91 - \\frac{7}{18} = \\frac{1638 - 7}{18} = \\boxed{\\dfrac{1631}{18}} \\).'
      ],
      success: 'Seven terms, five rules, zero slips. That’s a real competition warm-up conquered.',
      coach: [
        'Split the sum into easy terms and scary terms. Which two are scary?',
        'For \\( (-3)^{-2} \\): move it downstairs first, then square. Does the minus sign survive?',
        'Add the five easy terms; then combine \\( \\frac19 \\) and \\( -\\frac12 \\) over 18.'
      ]
    }
  ]
};
