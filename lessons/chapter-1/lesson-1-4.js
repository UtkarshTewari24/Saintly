/* Lesson 1.4 — Rationalizing Denominators. */

export default {
  id: 'lesson-1-4',
  title: 'Rationalizing Denominators',
  kicker: 'Exponents and Logarithms',
  topicIndex: 0,
  lessonIndex: 3,
  next: 'interactive-lesson.html?chapter=1&lesson=5',
  notes: 'exponents.html',
  beats: [

    /* 1 — hook */
    {
      prompt: 'Nobody wants \\( \\dfrac{1}{\\sqrt{2}} \\) in a denominator.',
      body: 'Dividing by an irrational number is miserable to estimate and worse to combine. There’s a one-move fix.',
      interaction: {
        type: 'reveal',
        face: '\\( \\dfrac{1}{\\sqrt{2}} \\cdot \\dfrac{\\sqrt{2}}{\\sqrt{2}} = \\; ? \\)',
        cta: 'Tap to clear the radical',
        hidden: '\\( \\dfrac{1 \\cdot \\sqrt2}{\\sqrt2 \\cdot \\sqrt2} = \\dfrac{\\sqrt{2}}{2} \\). The radical moved upstairs, where it’s harmless. And since \\( \\frac{\\sqrt2}{\\sqrt2} = 1 \\), the value never changed — only the form.'
      },
      note: 'Multiplying by \\( \\frac{\\sqrt a}{\\sqrt a} \\) is multiplying by 1: value unchanged, form improved. That single idea powers this whole lesson.'
    },

    /* 2 — why it's legal */
    {
      prompt: 'Which move is guaranteed NOT to change a fraction’s value?',
      interaction: {
        type: 'mcq',
        options: [
          'Multiply only the top by \\( \\sqrt{2} \\)',
          'Multiply only the bottom by \\( \\sqrt{2} \\)',
          'Multiply top AND bottom by the same nonzero number',
          'Add \\( \\sqrt{2} \\) to the top and the bottom'
        ],
        correct: 2
      },
      hint: 'Which of those is multiplication by 1 in disguise?',
      explain: 'Top and bottom together: \\( \\frac{x}{x} = 1 \\) for any nonzero \\( x \\), and multiplying by 1 changes nothing. Touching only one floor scales the value; adding to both changes it too (try \\( \\frac12 \\to \\frac{1+1}{2+1} \\)).',
      success: 'Rationalizing is just carefully choosing which “1” to multiply by.',
      coach: ['Test each move on \\( \\frac12 \\) with the number 3 instead of \\( \\sqrt2 \\).', 'Only one move is a disguised ×1.']
    },

    /* 3 — drill: single radical */
    {
      prompt: 'Clear it: \\( \\dfrac{3}{\\sqrt{3}} = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: ['\\( \\sqrt{3} \\)', '\\( 3\\sqrt{3} \\)', '\\( \\dfrac{\\sqrt{3}}{3} \\)', '\\( \\dfrac{1}{3} \\)'],
        correct: 0, cols: true
      },
      hint: 'Multiply by \\( \\frac{\\sqrt3}{\\sqrt3} \\): the bottom becomes 3. What’s the top?',
      explain: '\\( \\frac{3}{\\sqrt3} \\cdot \\frac{\\sqrt3}{\\sqrt3} = \\frac{3\\sqrt3}{3} = \\sqrt{3} \\). Cute: \\( 3/\\sqrt3 = \\sqrt3 \\), because \\( 3 = \\sqrt3 \\cdot \\sqrt3 \\).',
      success: 'The 3 upstairs and the new 3 downstairs cancel.',
      coach: ['What is \\( \\sqrt3 \\cdot \\sqrt3 \\)?', 'After multiplying, look for a common factor of 3.']
    },

    /* 4 — drill with simplification */
    {
      prompt: '\\( \\dfrac{\\sqrt{2}}{\\sqrt{6}} = \\dfrac{\\sqrt{a}}{b} \\). Find \\( a \\) and \\( b \\).',
      body: 'Simplify the fraction under one radical first — it saves a step.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '3', width: 110 },
          { label: 'b', placeholder: '?', answer: '3', width: 110 }
        ]
      },
      hint: '\\( \\frac{\\sqrt2}{\\sqrt6} = \\sqrt{\\frac26} = \\sqrt{\\frac13} \\). Now rationalize \\( \\frac{1}{\\sqrt3} \\).',
      explain: '\\( \\frac{\\sqrt2}{\\sqrt6} = \\sqrt{\\frac{2}{6}} = \\frac{1}{\\sqrt3} = \\frac{\\sqrt3}{3} \\).',
      success: 'Combine, reduce, then rationalize — three small moves.',
      coach: ['Both floors are square roots — merge them under one radical.', 'Reduce \\( \\frac26 \\) before doing anything else.', 'Then it’s the beat-1 move on \\( \\frac{1}{\\sqrt3} \\).']
    },

    /* 5 — drill: coefficient in the way */
    {
      prompt: '\\( \\dfrac{5}{2\\sqrt{5}} = \\dfrac{\\sqrt{a}}{b} \\). Find \\( a \\) and \\( b \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '5', width: 110 },
          { label: 'b', placeholder: '?', answer: '2', width: 110 }
        ]
      },
      hint: 'Only the \\( \\sqrt5 \\) needs clearing — the 2 is already rational. Multiply by \\( \\frac{\\sqrt5}{\\sqrt5} \\).',
      explain: '\\( \\frac{5}{2\\sqrt5} \\cdot \\frac{\\sqrt5}{\\sqrt5} = \\frac{5\\sqrt5}{2 \\cdot 5} = \\frac{\\sqrt5}{2} \\).',
      success: 'Rational parts of the denominator just ride along.',
      coach: ['Which part of \\( 2\\sqrt5 \\) is the problem — the 2 or the \\( \\sqrt5 \\)?', 'After multiplying, a factor of 5 cancels.']
    },

    /* 6 — higher roots need more */
    {
      prompt: 'Cube roots fight back: rationalize \\( \\dfrac{1}{\\sqrt[3]{12}} \\). Order the steps.',
      body: 'Multiplying by \\( \\frac{\\sqrt[3]{12}}{\\sqrt[3]{12}} \\) does NOT finish the job — \\( \\sqrt[3]{144} \\) is still irrational. Think per prime: each exponent under the radical must reach the root index, 3.',
      interaction: {
        type: 'order',
        items: [
          'Factor the radicand: \\( 12 = 2^{2} \\cdot 3^{1} \\)',
          'Count what’s missing: \\( 2^{2} \\) needs one more 2, \\( 3^{1} \\) needs two more 3s',
          'Multiply by \\( \\dfrac{\\sqrt[3]{2 \\cdot 3^{2}}}{\\sqrt[3]{2 \\cdot 3^{2}}} = \\dfrac{\\sqrt[3]{18}}{\\sqrt[3]{18}} \\)',
          'Bottom completes: \\( \\sqrt[3]{2^{3} \\cdot 3^{3}} = 6 \\), so the answer is \\( \\dfrac{\\sqrt[3]{18}}{6} \\)'
        ]
      },
      hint: 'For a cube root, every prime under the radical needs its exponent raised to exactly 3. What’s each prime missing?',
      explain: 'Per prime: \\( 2^2 \\) wants \\( 2^1 \\) more, \\( 3^1 \\) wants \\( 3^2 \\) more. Supply exactly that: \\( \\sqrt[3]{12} \\cdot \\sqrt[3]{18} = \\sqrt[3]{216} = 6 \\). So \\( \\frac{1}{\\sqrt[3]{12}} = \\frac{\\sqrt[3]{18}}{6} \\).',
      success: 'Top up each prime to the root index — no more, no less.',
      note: 'For \\( \\sqrt[n]{\\cdot} \\) denominators: factor the radicand, then multiply by the \\( \\sqrt[n]{\\cdot} \\) of whatever raises each prime’s exponent to exactly \\( n \\). The square-root trick is just the \\( n = 2 \\) case.',
      coach: ['Why doesn’t the \\( n=2 \\) trick work here? Try it: what lands downstairs?', 'Factor 12 and ask each prime what it needs to reach exponent 3.', 'The completing factor is \\( 2 \\cdot 9 = 18 \\).']
    },

    /* 7 — conjugates: discovery */
    {
      prompt: 'New enemy: \\( \\dfrac{1}{1 + \\sqrt{2}} \\). Does multiplying by \\( \\dfrac{\\sqrt2}{\\sqrt2} \\) help?',
      interaction: {
        type: 'mcq',
        options: [
          'Yes — it clears the radical as usual',
          'No — the bottom becomes \\( \\sqrt{2} + 2 \\): still irrational, just rearranged',
          'No — the fraction becomes undefined',
          'Yes — the answer is \\( \\dfrac{\\sqrt2}{3} \\)'
        ],
        correct: 1
      },
      hint: 'Actually do it: \\( (1+\\sqrt2) \\cdot \\sqrt2 = ? \\)',
      explain: '\\( \\frac{\\sqrt2}{(1+\\sqrt2)\\sqrt2} = \\frac{\\sqrt2}{\\sqrt2 + 2} \\) — the radical survived because multiplication distributed over the sum. Sums need a smarter partner: the <b>conjugate</b> \\( 1 - \\sqrt2 \\), which makes \\( (1+\\sqrt2)(1-\\sqrt2) = 1 - 2 = -1 \\). The cross terms kill each other.',
      success: 'Sums shrug off the old trick. Enter the conjugate.',
      note: 'The <b>conjugate</b> of \\( a + \\sqrt{b} \\) is \\( a - \\sqrt{b} \\): flip the sign <i>between</i> the terms. Multiplying the pair gives \\( a^2 - b \\) — the radical is gone, guaranteed.',
      coach: ['Distribute \\( \\sqrt2 \\) across \\( 1 + \\sqrt2 \\). Is the result rational?', 'What multiplication pattern makes middle terms cancel? Think \\( (x+y)(x-y) \\).']
    },

    /* 8 — use the conjugate */
    {
      prompt: 'So finish it: \\( \\dfrac{1}{1+\\sqrt{2}} = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: ['\\( \\sqrt{2} - 1 \\)', '\\( 1 - \\sqrt{2} \\)', '\\( \\dfrac{1+\\sqrt2}{3} \\)', '\\( -1 - \\sqrt{2} \\)'],
        correct: 0, cols: true
      },
      hint: 'Multiply by \\( \\frac{1-\\sqrt2}{1-\\sqrt2} \\). The bottom is \\( 1 - 2 = -1 \\). Now divide the top by \\( -1 \\).',
      explain: '\\( \\frac{1-\\sqrt2}{(1+\\sqrt2)(1-\\sqrt2)} = \\frac{1-\\sqrt2}{-1} = \\sqrt2 - 1 \\). Dividing by \\( -1 \\) flips both signs. (Sanity check: \\( \\frac{1}{2.414} \\approx 0.414 \\approx \\sqrt2 - 1 \\). ✓)',
      success: 'Denominator \\( -1 \\), one sign flip, done.',
      coach: ['\\( (1+\\sqrt2)(1-\\sqrt2) = 1^2 - (\\sqrt2)^2 = ? \\)', 'Careful with the final division by \\( -1 \\) — both terms flip.']
    },

    /* 9 — spot the conjugate */
    {
      prompt: 'Match each expression to its conjugate.',
      body: 'Flip the sign between the terms — not the sign of the leading term.',
      interaction: {
        type: 'match',
        pairs: [
          ['\\( 3 - 4\\sqrt{2} \\)', '\\( 3 + 4\\sqrt{2} \\)'],
          ['\\( \\sqrt{2} - \\sqrt{3} \\)', '\\( \\sqrt{2} + \\sqrt{3} \\)'],
          ['\\( 1 + \\sqrt{5} \\)', '\\( 1 - \\sqrt{5} \\)']
        ]
      },
      hint: 'Only the middle sign changes. \\( -3 + 4\\sqrt2 \\) is NOT the conjugate of \\( 3 - 4\\sqrt2 \\) — that flipped the wrong term.',
      success: 'Middle sign flips; everything else stays put.'
    },

    /* 10 — why conjugates always work */
    {
      prompt: 'Why does this always work?',
      body: 'Take the general pair \\( \\left(a\\sqrt{b} + c\\sqrt{d}\\right)\\left(a\\sqrt{b} - c\\sqrt{d}\\right) \\) and FOIL it.',
      interaction: {
        type: 'reveal',
        face: 'First: \\( a\\sqrt b \\cdot a\\sqrt b = a^2 b \\)<br>Outer: \\( -\\,a c \\sqrt{bd} \\)<br>Inner: \\( +\\,a c \\sqrt{bd} \\)<br>Last: \\( -\\,c^2 d \\)',
        cta: 'Tap to watch the middle cancel',
        hidden: 'Outer and inner are equal and opposite — they vanish: \\( \\left(a\\sqrt b + c\\sqrt d\\right)\\left(a\\sqrt b - c\\sqrt d\\right) = a^2 b - c^2 d \\). No radical survives, whatever \\( a, b, c, d \\) are. That’s why the conjugate is a guaranteed kill.'
      },
      note: '\\( \\left(a\\sqrt b + c\\sqrt d\\right)\\left(a\\sqrt b - c\\sqrt d\\right) = a^2 b - c^2 d \\) — always rational. One caveat: this is square-root machinery; conjugates do NOT clear cube roots.'
    },

    /* 11 — three terms */
    {
      prompt: 'Final form: \\( \\dfrac{1}{5 - \\sqrt{2} - \\sqrt{3}} \\). What’s the right first move?',
      body: 'Three terms, two radicals. The conjugate trick pairs TWO things — so make it two things.',
      interaction: {
        type: 'mcq',
        options: [
          'Group it as \\( \\left(5 - \\sqrt2\\right) - \\sqrt3 \\) and conjugate against that grouping',
          'Multiply by \\( \\dfrac{\\sqrt2 \\cdot \\sqrt3}{\\sqrt2 \\cdot \\sqrt3} \\)',
          'Conjugate each radical separately in one step',
          'Three terms can’t be rationalized'
        ],
        correct: 0
      },
      hint: 'Treat \\( 5 - \\sqrt2 \\) as a single blob \\( X \\). Then the denominator is \\( X - \\sqrt3 \\) — a two-term expression you already know how to handle.',
      explain: 'Group: \\( \\big[(5-\\sqrt2) - \\sqrt3\\big]\\big[(5-\\sqrt2) + \\sqrt3\\big] = (5-\\sqrt2)^2 - 3 = 24 - 10\\sqrt2 \\). One radical down! A second, ordinary conjugate multiplication (\\( \\times \\frac{24 + 10\\sqrt2}{24+10\\sqrt2} \\)) finishes it. Two passes, each one just the two-term trick.',
      success: 'Group, conjugate, repeat. Hard problems are easy problems stacked.',
      walkthrough: [
        'Group: denominator \\( = (5 - \\sqrt2) - \\sqrt3 \\). Multiply by \\( \\dfrac{(5-\\sqrt2)+\\sqrt3}{(5-\\sqrt2)+\\sqrt3} \\).',
        'Bottom: \\( (5-\\sqrt2)^2 - (\\sqrt3)^2 = 25 - 10\\sqrt2 + 2 - 3 = 24 - 10\\sqrt2 \\). One radical gone.',
        'Now an ordinary conjugate: multiply by \\( \\dfrac{24 + 10\\sqrt2}{24 + 10\\sqrt2} \\); the bottom becomes \\( 24^2 - 200 = 376 \\).',
        'Everything upstairs is multiplication you can do; the denominator is rational. Mission accomplished.'
      ],
      coach: ['The conjugate pattern is \\( (X+Y)(X-Y) \\). Pick your \\( X \\) and \\( Y \\).', 'Let \\( X = 5 - \\sqrt2 \\), \\( Y = \\sqrt3 \\).', 'After the first pass only \\( \\sqrt2 \\) survives — and you know how to kill a two-term denominator.']
    },

    /* ---------- checkpoint ---------- */
    {
      section: 'checkpoint',
      prompt: '\\( \\dfrac{1}{\\sqrt{7}+\\sqrt{3}} = \\dfrac{\\sqrt{a}-\\sqrt{b}}{c} \\). Fill in \\( a, b, c \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '7', width: 95 },
          { label: 'b', placeholder: '?', answer: '3', width: 95 },
          { label: 'c', placeholder: '?', answer: '4', width: 95 }
        ]
      },
      hint: 'Conjugate: \\( \\sqrt7 - \\sqrt3 \\). The bottom becomes \\( 7 - 3 \\).',
      explain: '\\( \\frac{\\sqrt7-\\sqrt3}{(\\sqrt7+\\sqrt3)(\\sqrt7-\\sqrt3)} = \\frac{\\sqrt7-\\sqrt3}{4} \\).',
      coach: ['Multiply top and bottom by the conjugate.', '\\( (\\sqrt7)^2 - (\\sqrt3)^2 = ? \\)']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\dfrac{6}{\\sqrt{15}-\\sqrt{6}} = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\dfrac{2\\left(\\sqrt{15}+\\sqrt{6}\\right)}{3} \\)',
          '\\( \\dfrac{6\\left(\\sqrt{15}-\\sqrt{6}\\right)}{9} \\)',
          '\\( \\dfrac{2\\left(\\sqrt{15}-\\sqrt{6}\\right)}{3} \\)',
          '\\( \\sqrt{15}+\\sqrt{6} \\)'
        ],
        correct: 0
      },
      hint: 'Conjugate gives a bottom of \\( 15 - 6 = 9 \\). Then reduce \\( \\frac69 \\).',
      explain: '\\( \\frac{6(\\sqrt{15}+\\sqrt6)}{15-6} = \\frac{6(\\sqrt{15}+\\sqrt6)}{9} = \\frac{2(\\sqrt{15}+\\sqrt6)}{3} \\). The sign flips to PLUS in the numerator — the conjugate of a difference is a sum. And always reduce at the end.',
      coach: ['The denominator is a difference, so its conjugate is a…?', 'After the bottom becomes 9, a factor of 3 cancels.']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\dfrac{\\sqrt{2}}{\\sqrt{6}-2} = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: ['\\( \\sqrt{3}+\\sqrt{2} \\)', '\\( \\sqrt{3}-\\sqrt{2} \\)', '\\( \\dfrac{\\sqrt{12}+2\\sqrt2}{4} \\)', '\\( 2\\sqrt{3} \\)'],
        correct: 0, cols: true
      },
      hint: 'Conjugate \\( \\sqrt6 + 2 \\); the bottom is \\( 6 - 4 = 2 \\). Then simplify \\( \\sqrt{12} \\).',
      explain: '\\( \\frac{\\sqrt2(\\sqrt6+2)}{6-4} = \\frac{\\sqrt{12} + 2\\sqrt2}{2} = \\frac{2\\sqrt3 + 2\\sqrt2}{2} = \\sqrt3 + \\sqrt2 \\). Last lesson’s skill (simplifying \\( \\sqrt{12} \\)) is what finishes this one.',
      coach: ['Multiply out the top: \\( \\sqrt2 \\cdot \\sqrt6 = \\sqrt{12} \\).', '\\( \\sqrt{12} \\) is not simplified. Fix that, then cancel the 2.']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\dfrac{2}{\\sqrt[3]{24}} = \\dfrac{\\sqrt[3]{a}}{b} \\). Fill in \\( a, b \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '9', width: 110 },
          { label: 'b', placeholder: '?', answer: '3', width: 110 }
        ]
      },
      hint: 'Simplify first! \\( 24 = 2^3 \\cdot 3 \\), so \\( \\sqrt[3]{24} = 2\\sqrt[3]{3} \\). That leaves \\( \\frac{1}{\\sqrt[3]{3}} \\).',
      explain: '\\( \\frac{2}{2\\sqrt[3]3} = \\frac{1}{\\sqrt[3]3} \\). The prime 3 needs two more copies: multiply by \\( \\frac{\\sqrt[3]9}{\\sqrt[3]9} \\), bottom becomes 3. Answer: \\( \\frac{\\sqrt[3]9}{3} \\).',
      coach: ['Simplify \\( \\sqrt[3]{24} \\) before rationalizing — a 2 will cancel.', 'Then: what does \\( 3^1 \\) need to reach \\( 3^3 \\)?']
    },

    /* ---------- boss ---------- */
    {
      section: 'boss',
      prompt: 'AHSME 1952: rationalize \\( \\dfrac{1}{\\sqrt{2}+\\sqrt{3}-\\sqrt{5}} \\).',
      body: 'Group, conjugate, and conjugate again — beat 11’s technique on a real contest problem.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\dfrac{2\\sqrt{3}+3\\sqrt{2}+\\sqrt{30}}{12} \\)',
          '\\( \\dfrac{2\\sqrt{3}+3\\sqrt{2}-\\sqrt{30}}{12} \\)',
          '\\( \\dfrac{\\sqrt{2}+\\sqrt{3}+\\sqrt{5}}{6} \\)',
          '\\( \\dfrac{2\\sqrt{3}+3\\sqrt{2}+\\sqrt{30}}{6} \\)'
        ],
        correct: 0
      },
      hint: 'Group \\( (\\sqrt2+\\sqrt3) - \\sqrt5 \\) and multiply by its conjugate. The bottom collapses beautifully: \\( (\\sqrt2+\\sqrt3)^2 - 5 = ? \\)',
      explain: 'First pass: bottom \\( (\\sqrt2+\\sqrt3)^2 - 5 = (5 + 2\\sqrt6) - 5 = 2\\sqrt6 \\) — a single radical! Second pass: \\( \\times \\frac{\\sqrt6}{\\sqrt6} \\) gives \\( \\frac{\\sqrt6(\\sqrt2+\\sqrt3+\\sqrt5)}{12} = \\frac{2\\sqrt3 + 3\\sqrt2 + \\sqrt{30}}{12} \\).',
      walkthrough: [
        'Group: \\( \\big[(\\sqrt2+\\sqrt3) - \\sqrt5\\big] \\). Multiply top and bottom by \\( (\\sqrt2+\\sqrt3) + \\sqrt5 \\).',
        'Bottom: \\( (\\sqrt2+\\sqrt3)^2 - (\\sqrt5)^2 = 2 + 2\\sqrt6 + 3 - 5 = 2\\sqrt6 \\). The 2 and 3 exactly cancel the 5 — that’s the magic of this problem.',
        'Now: \\( \\dfrac{\\sqrt2+\\sqrt3+\\sqrt5}{2\\sqrt6} \\). One radical downstairs — multiply by \\( \\dfrac{\\sqrt6}{\\sqrt6} \\).',
        'Top: \\( \\sqrt6\\,(\\sqrt2+\\sqrt3+\\sqrt5) = \\sqrt{12}+\\sqrt{18}+\\sqrt{30} = 2\\sqrt3 + 3\\sqrt2 + \\sqrt{30} \\) — lesson 1.3 finishing the job.',
        'Bottom: \\( 2 \\cdot 6 = 12 \\). Answer: \\( \\dfrac{2\\sqrt3+3\\sqrt2+\\sqrt{30}}{12} \\).'
      ],
      success: 'A 1952 contest problem, dismantled with two conjugate passes and one radical simplification.',
      coach: [
        'Three terms — which grouping makes \\( (X)^2 - (Y)^2 \\) collapse nicely? Try \\( X = \\sqrt2+\\sqrt3 \\).',
        'Compute \\( (\\sqrt2+\\sqrt3)^2 \\) carefully: the constant part is \\( 2 + 3 = 5 \\)… and then you subtract 5.',
        'After the collapse you have \\( 2\\sqrt6 \\) downstairs — that’s a one-move rationalization, then simplify each product on top.'
      ]
    }
  ]
};
