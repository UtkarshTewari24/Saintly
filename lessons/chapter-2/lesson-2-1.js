/* Lesson 2.1 — The Square Root of −1. Chapter 2: Complex Numbers.
   See lessons/LESSON-SCHEMA.md for the authoring contract. */

export default {
  id: 'lesson-2-1',
  title: 'The Square Root of −1',
  kicker: 'Complex Numbers',
  topicIndex: 1,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=2&lesson=2',
  beats: [

    /* 1 — hook: the illegal square root */
    {
      prompt: 'Solve \\( x^2 + 1 = 0 \\).',
      body: 'Subtract the 1, take the square root of both sides. Go ahead — do the illegal thing.',
      interaction: {
        type: 'reveal',
        face: '\\( x^2 = -1 \\), so \\( x = \\pm\\sqrt{-1} \\).<br>Your sixth-grade teacher said this doesn’t exist.',
        cta: 'Tap to break the rules',
        hidden: 'Mathematicians said: <b>what if it does?</b> Give \\( \\sqrt{-1} \\) a name — call it \\( i \\) — and suddenly every quadratic has solutions. Here \\( x = \\pm i \\), and nothing catches fire.'
      },
      note: '\\( i \\) is no less “real” than negative numbers — people once called those absurd too. (What could \\( -3 \\) sheep possibly mean?) A number is legitimate the moment it follows consistent rules.'
    },

    /* 2 — the definition, used immediately */
    {
      prompt: 'The entire definition: \\( i^2 = -1 \\). So what is \\( (2i) \\cdot i \\)?',
      body: 'Everything about \\( i \\) flows from that one equation. Use it.',
      interaction: { type: 'mcq', options: ['\\( -2 \\)', '\\( 2 \\)', '\\( -2i \\)', '\\( 2i \\)'], correct: 0, cols: true },
      hint: 'Regroup: \\( (2i) \\cdot i = 2 \\cdot (i \\cdot i) \\). What is \\( i \\cdot i \\)?',
      explain: '\\( (2i)(i) = 2 \\cdot i^2 = 2 \\cdot (-1) = -2 \\). Every time two \\( i \\)s meet, they collapse into a \\( -1 \\).',
      success: 'Two \\( i \\)s met, one \\( -1 \\) appeared.',
      note: '<b>Vocabulary:</b> a real number times \\( i \\) — like \\( 7i \\) or \\( -\\frac{2}{3}i \\) — is called <b>pure imaginary</b>. \\( 7i \\) is pure imaginary; plain \\( 7 \\) is not.',
      coach: ['Multiplication regroups freely: pull the 2 out front.', 'You’re left with \\( 2 \\cdot i^2 \\). Apply the definition.']
    },

    /* 3 — the forbidden move */
    {
      prompt: 'This “proof” shows \\( -1 = 1 \\). One line is illegal — tap it.',
      body: 'If every line were valid, arithmetic would collapse. Find the crime.',
      interaction: {
        type: 'errorhunt',
        lines: [
          { text: '\\( -1 = i \\cdot i \\)' },
          { text: '\\( i \\cdot i = \\sqrt{-1} \\cdot \\sqrt{-1} \\)' },
          { text: '\\( \\sqrt{-1} \\cdot \\sqrt{-1} = \\sqrt{(-1)(-1)} \\)', wrong: true },
          { text: '\\( \\sqrt{(-1)(-1)} = \\sqrt{1} = 1 \\)' }
        ]
      },
      hint: 'The rule \\( \\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab} \\) came with fine print. What did it assume about \\( a \\) and \\( b \\)?',
      explain: 'Line 3 uses \\( \\sqrt{a}\\sqrt{b} = \\sqrt{ab} \\), but that rule only holds for \\( a, b \\ge 0 \\) — the fractional-exponent rules it comes from assume nonnegative bases. With negatives under the radicals it simply isn’t true, and this fake proof is exactly why.',
      success: 'Caught it. Radical rules don’t apply to negatives.',
      note: '<b>The forbidden move:</b> never combine \\( \\sqrt{-a} \\cdot \\sqrt{-b} \\) into \\( \\sqrt{ab} \\). Convert to \\( i \\) first: \\( \\sqrt{-a} = i\\sqrt{a} \\), <i>then</i> multiply. This is the biggest trap in the whole chapter.',
      coach: ['Lines 1 and 2 just restate the definition of \\( i \\). Keep going.', 'Which line merges two radicals into one?', 'Test the merged-radical rule with \\( a = b = -1 \\): does \\( i \\cdot i \\) really equal \\( \\sqrt{1} \\)?']
    },

    /* 4 — powers of i: discover the cycle */
    {
      prompt: 'Powers of \\( i \\): drag \\( n \\) and watch for a pattern.',
      body: 'Each step multiplies by one more \\( i \\). Step through at least 8 before you decide what’s happening.',
      interaction: {
        type: 'slider', min: 1, max: 12, value: 1, label: 'n', mustExplore: 8,
        render(n) {
          const cycle = ['i', '-1', '-i', '1'];
          const val = cycle[(n - 1) % 4];
          const phase = ['multiply by i once', 'two i’s collapse to −1', 'that −1 keeps a spare i', 'four i’s make (−1)(−1) = 1 — reset!'][(n - 1) % 4];
          return {
            main: `\\( i^{${n}} = ${val} \\)`,
            sub: n <= 4 ? phase : `same as \\( i^{${((n - 1) % 4) + 1}} \\) — the wheel has come around ${Math.floor((n - 1) / 4)} full ${Math.floor((n - 1) / 4) === 1 ? 'time' : 'times'}`
          };
        }
      },
      note: '<b>The cycle:</b> \\( i, -1, -i, 1, \\) repeat — period 4, because \\( i^4 = (i^2)^2 = (-1)^2 = 1 \\). So for \\( i^n \\), only \\( n \\bmod 4 \\) (the remainder when dividing by 4) matters.'
    },

    /* 5 — the mod-4 shortcut ladder */
    {
      prompt: 'Use the shortcut: divide the exponent by 4, keep only the remainder.',
      body: 'Remainder 1 → \\( i \\), remainder 2 → \\( -1 \\), remainder 3 → \\( -i \\), remainder 0 → \\( 1 \\). Type answers like <b>i</b>, <b>-i</b>, <b>1</b>, <b>-1</b>.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'i^17', placeholder: '?', answer: 'i', width: 110 },
          { label: 'i^69', placeholder: '?', answer: 'i', width: 110 },
          { label: 'i^1972', placeholder: '?', answer: '1', width: 110 }
        ]
      },
      hint: '\\( 17 = 4 \\cdot 4 + 1 \\), so \\( i^{17} = i^{1} \\). Now do the same division for 69 and 1972.',
      explain: '\\( 17 = 4(4) + 1 \\Rightarrow i^{17} = i \\). \\( 69 = 4(17) + 1 \\Rightarrow i^{69} = i \\). \\( 1972 = 4(493) \\) exactly — remainder 0 — so \\( i^{1972} = 1 \\).',
      success: 'A 1972-story tower of \\( i \\)s, demolished by one division.',
      coach: ['Don’t multiply anything. Divide each exponent by 4 and keep the remainder.', 'What are the remainders of 17, 69, and 1972 when divided by 4? (For big numbers: only the last two digits matter.)', 'Remainders 1, 1, 0 — now read them off the cycle.']
    },

    /* 6 — negative powers: i^{-1} */
    {
      prompt: 'Negative exponents still mean “downstairs”: \\( i^{-1} = \\dfrac{1}{i} \\). What number is that?',
      body: 'Two routes: clean the fraction (multiply by \\( \\frac{i}{i} \\)), or run the cycle backwards from \\( i^0 = 1 \\).',
      interaction: { type: 'mcq', options: ['\\( -i \\)', '\\( i \\)', '\\( 1 \\)', '\\( -1 \\)'], correct: 0, cols: true },
      hint: '\\( \\dfrac{1}{i} \\cdot \\dfrac{i}{i} = \\dfrac{i}{i^2} \\). What’s the denominator now?',
      explain: 'Route 1: \\( \\frac{1}{i} = \\frac{i}{i^2} = \\frac{i}{-1} = -i \\). Route 2: stepping back one from \\( i^0 = 1 \\) on the cycle \\( \\dots, -i, 1 \\) also lands on \\( -i \\). A negative exponent doesn’t just flip a sign — check: \\( i \\cdot (-i) = -i^2 = 1 \\). ✓',
      success: 'Both routes agree: \\( i^{-1} = -i \\).',
      note: 'The cycle runs in <b>both directions</b>: \\( \\dots, i^{-2} = -1, \\; i^{-1} = -i, \\; i^0 = 1, \\; i^1 = i, \\dots \\) For a negative exponent, add 4s until it’s positive — \\( i^{-3} = i^{1} \\).',
      coach: ['A fraction with \\( i \\) downstairs: multiply top and bottom by \\( i \\).', 'The denominator became \\( i^2 = -1 \\). Simplify \\( \\frac{i}{-1} \\).']
    },

    /* 7 — negative powers, bigger */
    {
      prompt: 'Now a big one: \\( i^{-9} \\).',
      body: 'Add 4s to the exponent until it’s positive — each \\( \\cdot\\, i^4 \\) is just \\( \\cdot\\, 1 \\).',
      interaction: { type: 'fillin', fields: [{ label: 'i^-9', placeholder: '?', answer: '-i', accept: ['-1i'], width: 130 }] },
      hint: '\\( -9 + 12 = 3 \\), so \\( i^{-9} = i^{3} \\). Read the cycle.',
      explain: 'Adding three full cycles: \\( i^{-9} = i^{-9+12} = i^{3} = -i \\). (Or: \\( i^{-9} = \\frac{1}{i^9} = \\frac{1}{i} = -i \\).) You’ll want this move for the boss.',
      success: 'Negative exponents hold no fear.',
      coach: ['You can add 4 to the exponent for free. Do it three times.', '\\( i^{-9} = i^3 \\). What’s the third stop on the cycle?']
    },

    /* 8 — plane peek */
    {
      prompt: 'Sneak peek: where the four values of \\( i^n \\) live.',
      body: 'The book hasn’t taught this yet — consider it a trailer. Put reals on a horizontal axis and imaginaries on a vertical one:'
        + '<svg viewBox="0 0 220 220" width="220" height="220" style="display:block;margin:14px auto 0" role="img" aria-label="Complex plane with 1, i, -1, -i plotted">'
        + '<line x1="14" y1="110" x2="206" y2="110" stroke="#4a4a4a" stroke-width="1.5"/>'
        + '<line x1="110" y1="14" x2="110" y2="206" stroke="#4a4a4a" stroke-width="1.5"/>'
        + '<circle cx="180" cy="110" r="6" fill="#88b0ff"/><text x="188" y="100" class="il-svg-ink" font-size="15">1</text>'
        + '<circle cx="110" cy="40" r="6" fill="#ffb192"/><text x="122" y="38" class="il-svg-ink" font-size="15">i</text>'
        + '<circle cx="40" cy="110" r="6" fill="#88b0ff"/><text x="18" y="100" class="il-svg-ink" font-size="15">−1</text>'
        + '<circle cx="110" cy="180" r="6" fill="#ffb192"/><text x="122" y="196" class="il-svg-ink" font-size="15">−i</text>'
        + '</svg>',
      interaction: {
        type: 'reveal',
        face: 'Each multiplication by \\( i \\) moves you \\( 1 \\to i \\to -1 \\to -i \\to 1 \\). Trace that path on the picture. What shape is it?',
        cta: 'Tap to see the move',
        hidden: '<b>Multiplying by \\( i \\) is a 90° turn counterclockwise.</b> Four quarter-turns bring you home — that’s the <i>real</i> reason the powers of \\( i \\) cycle with period 4. Hold that thought for later chapters.'
      }
    },

    /* ---------- checkpoint ---------- */
    {
      section: 'checkpoint',
      prompt: 'Simplify \\( i^{23} \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '-i', accept: ['-1i'], width: 120 }] },
      hint: '\\( 23 = 4 \\cdot 5 + 3 \\).',
      explain: 'Remainder 3 → third stop on the cycle: \\( i^{23} = i^3 = -i \\).',
      coach: ['Divide 23 by 4 and keep the remainder.']
    },
    {
      section: 'checkpoint',
      prompt: 'This year’s power: \\( i^{2026} \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '-1', width: 120 }] },
      hint: 'Only the last two digits of the exponent matter when dividing by 4: what’s the remainder of 26?',
      explain: '\\( 2026 = 4 \\cdot 506 + 2 \\), so \\( i^{2026} = i^2 = -1 \\).',
      coach: ['\\( 26 = 24 + 2 \\) — remainder 2.']
    },
    {
      section: 'checkpoint',
      prompt: 'Evaluate \\( (3i)^{2} \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '-9', width: 120 }] },
      hint: 'The square hits both factors: \\( (3i)^2 = 3^2 \\cdot i^2 \\).',
      explain: '\\( (3i)^2 = 9 \\cdot i^2 = 9(-1) = -9 \\). Squaring a pure imaginary always lands on a negative real.',
      coach: ['Square the 3 and the \\( i \\) separately, then multiply.']
    },
    {
      section: 'checkpoint',
      prompt: 'Evaluate \\( i^{-2} \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '-1', width: 120 }] },
      hint: '\\( i^{-2} = \\dfrac{1}{i^2} \\).',
      explain: '\\( i^{-2} = \\frac{1}{i^2} = \\frac{1}{-1} = -1 \\). (Or add 4: \\( i^{-2} = i^2 \\).)',
      coach: ['Either route works: \\( \\frac{1}{i^2} \\), or add 4 to the exponent.']
    },
    {
      section: 'checkpoint',
      prompt: 'Which of these is <b>both</b> real and pure imaginary?',
      interaction: {
        type: 'mcq',
        options: ['\\( 0 \\)', '\\( 5 \\)', '\\( 5i \\)', 'No number is both'],
        correct: 0, cols: true
      },
      hint: 'Pure imaginary means (real number)\\( \\cdot i \\). Can you write one of these as \\( b \\cdot i \\) AND as a plain real?',
      explain: '\\( 0 = 0 \\cdot i \\), so it’s pure imaginary — and it’s obviously real. It’s the only number in both clubs. \\( 5 \\) is only real; \\( 5i \\) is only pure imaginary.',
      coach: ['Which of these can be written as \\( b \\cdot i \\) for a real \\( b \\)?']
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'Evaluate \\( \\sqrt{-1} \\cdot \\left(\\sqrt{-1}\\right)^{2} \\cdot \\sqrt{(-1)^{2}} \\).',
      body: 'Three lookalike factors — and the forbidden move is lurking. Handle each factor on its own.',
      interaction: { type: 'mcq', options: ['\\( -i \\)', '\\( i \\)', '\\( 1 \\)', '\\( -1 \\)'], correct: 0, cols: true },
      hint: 'Work inside-out on the last factor: \\( (-1)^2 \\) first, <i>then</i> the square root. It is not the same as \\( (\\sqrt{-1})^2 \\).',
      explain: 'Factor by factor: \\( \\sqrt{-1} = i \\); \\( (\\sqrt{-1})^2 = i^2 = -1 \\); and \\( \\sqrt{(-1)^2} = \\sqrt{1} = 1 \\) — the inside evaluates first, so no \\( i \\) ever appears. Product: \\( i \\cdot (-1) \\cdot 1 = -i \\). Merging the radicals instead is exactly the forbidden move from earlier.',
      success: 'Order of operations beats optical illusion.',
      coach: ['Evaluate each of the three factors separately — no combining radicals.', 'The third factor: square first, then root. What’s \\( \\sqrt{1} \\)?', 'Multiply: \\( i \\cdot (-1) \\cdot 1 \\).']
    },

    /* ---------- boss ---------- */
    {
      section: 'boss',
      prompt: 'Evaluate \\( i^{-18} + i^{-9} + i^{0} + i^{9} + i^{18} \\).',
      body: 'MA© 1991. Five terms, symmetric around \\( i^0 \\) — that symmetry is a gift. Answer as a number or as something like <b>-i</b>.',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '-1', width: 140 }] },
      hint: 'Pair the terms: \\( (i^{-18}, i^{18}) \\) and \\( (i^{-9}, i^{9}) \\). Reduce each exponent mod 4 — remember you can add 4s to the negative ones.',
      explain: '\\( i^{18} = i^2 = -1 \\) and \\( i^{-18} = i^{-18+20} = i^2 = -1 \\): that pair gives \\( -2 \\). \\( i^{9} = i \\) and \\( i^{-9} = i^3 = -i \\): that pair cancels to \\( 0 \\). With \\( i^0 = 1 \\), the total is \\( -2 + 0 + 1 = -1 \\).',
      walkthrough: [
        'Outer pair: \\( 18 = 4(4)+2 \\Rightarrow i^{18} = -1 \\). And \\( -18 + 20 = 2 \\Rightarrow i^{-18} = -1 \\). Together: \\( -2 \\).',
        'Inner pair: \\( 9 = 4(2)+1 \\Rightarrow i^{9} = i \\). And \\( -9 + 12 = 3 \\Rightarrow i^{-9} = -i \\). Together: \\( i + (-i) = 0 \\).',
        'Center: \\( i^{0} = 1 \\).',
        'Total: \\( -2 + 0 + 1 = \\boxed{-1} \\).'
      ],
      success: 'Five scary exponents, one clean \\( -1 \\). That’s a real competition problem down.',
      coach: [
        'Don’t compute left to right — the symmetry pairs terms for you.',
        'Reduce every exponent mod 4. For the negatives, add 12 or 20 first.',
        'The \\( \\pm 9 \\) pair gives \\( i - i \\). What do the \\( \\pm 18 \\) terms each equal?'
      ]
    }
  ]
};
