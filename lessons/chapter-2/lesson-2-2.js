/* Lesson 2.2a — Complex Arithmetic (add, subtract, multiply, divide).
   Chapter 2: Complex Numbers. See lessons/LESSON-SCHEMA.md. */

export default {
  id: 'lesson-2-2',
  title: 'Complex Arithmetic',
  kicker: 'Complex Numbers',
  topicIndex: 1,
  lessonIndex: 1,
  next: 'interactive-lesson.html?chapter=2&lesson=3',
  beats: [

    /* 1 — hook: what a complex number is, and the taxonomy */
    {
      prompt: 'Bolt a real number to an imaginary one: \\( a + bi \\). That’s a <b>complex number</b>.',
      body: 'Every number you’ve ever met is secretly complex: \\( 3 = 3 + 0i \\), and \\( 3i = 0 + 3i \\).',
      interaction: {
        type: 'reveal',
        face: 'So which labels does \\( 0 = 0 + 0i \\) collect? Real? Pure imaginary? Complex?',
        cta: 'Tap to sort the vocabulary',
        hidden: '<b>All three.</b> Real means \\( b = 0 \\); pure imaginary means \\( a = 0 \\); complex means anything of the form \\( a + bi \\). Zero has \\( a = b = 0 \\), so it’s the one number in every club. Yes, this vocabulary is unnecessarily complicated — that’s why they’re called <i>complex</i> numbers.'
      },
      note: '<b>The map:</b> reals (\\( b = 0 \\)) and pure imaginaries (\\( a = 0 \\)) are two thin slices of the complex numbers; \\( 0 \\) sits in both slices; numbers like \\( 3 + 3i \\) are in neither slice — just complex.'
    },

    /* 2 — taxonomy under pressure */
    {
      prompt: 'Three of these claims are true. Tap the false one.',
      interaction: {
        type: 'errorhunt',
        lines: [
          { text: '\\( 3 \\) is a complex number.' },
          { text: '\\( 3i \\) is pure imaginary.' },
          { text: '\\( 0 \\) is both real and pure imaginary.' },
          { text: '\\( 3 + 3i \\) is a real number.', wrong: true }
        ]
      },
      hint: '“Real” demands \\( b = 0 \\) — no \\( i \\)-part at all. Check each claim against that.',
      explain: '\\( 3 + 3i \\) has \\( b = 3 \\ne 0 \\), so it is not real (and with \\( a = 3 \\ne 0 \\), not pure imaginary either) — it’s complex, full stop. The surprise on line 1 is that plain \\( 3 \\) IS complex: \\( 3 + 0i \\). Complex is the umbrella, not the exotic case.',
      success: 'Vocabulary locked. Now the arithmetic.',
      coach: ['Write each number as \\( a + bi \\) and read off \\( a \\) and \\( b \\).', 'Real requires \\( b = 0 \\). Which claim breaks that?']
    },

    /* 3 — addition */
    {
      prompt: 'Add: \\( (3 + 4i) + (-3 + 8i) \\).',
      body: 'Reals only combine with reals; \\( i \\)-terms only combine with \\( i \\)-terms — exactly like collecting like terms in \\( x \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '0', width: 110 },
          { label: 'imaginary part', placeholder: '?', answer: '12', width: 110 }
        ]
      },
      hint: 'Reals: \\( 3 + (-3) \\). Imaginaries: \\( 4 + 8 \\).',
      explain: '\\( (3 - 3) + (4 + 8)i = 0 + 12i = 12i \\). The real parts happened to cancel, leaving a pure imaginary.',
      success: 'The reals cancelled — the answer is just \\( 12i \\).',
      note: '<b>Addition is componentwise:</b> add real to real, imaginary to imaginary. Never mix the two — they’re different species.',
      coach: ['Treat \\( i \\) like a variable: collect like terms.', 'What’s \\( 3 + (-3) \\)? What’s \\( 4i + 8i \\)?']
    },

    /* 4 — addition with fractions */
    {
      prompt: 'Your turn, with fractions: \\( \\left(-\\tfrac{1}{2} + i\\right) + \\left(2 - \\tfrac{1}{3}i\\right) \\).',
      body: 'Fractions welcome — answer like <b>3/2</b>.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '3/2', width: 110 },
          { label: 'imaginary part', placeholder: '?', answer: '2/3', width: 110 }
        ]
      },
      hint: 'Reals: \\( -\\frac12 + 2 \\). Imaginaries: \\( 1 - \\frac13 \\) (that lone \\( i \\) has coefficient 1).',
      explain: 'Real part: \\( -\\frac12 + 2 = \\frac32 \\). Imaginary part: \\( 1 - \\frac13 = \\frac23 \\). Result: \\( \\frac32 + \\frac23 i \\).',
      success: 'Componentwise, even when the components are ugly.',
      coach: ['Split into the two independent sums first.', 'The \\( +i \\) means \\( +1i \\). So the \\( i \\)-sum is \\( 1 - \\frac13 \\).']
    },

    /* 5 — plane peek: addition as arrows */
    {
      prompt: 'Sneak peek: addition on the complex plane.',
      body: 'Plot real parts horizontally, imaginary parts vertically. Adding complex numbers chains their arrows tip-to-tail:'
        + '<svg viewBox="0 0 240 200" width="240" height="200" style="display:block;margin:14px auto 0" role="img" aria-label="Arrows for 3+2i then -1+2i chained tip to tail">'
        + '<line x1="14" y1="150" x2="226" y2="150" stroke="#4a4a4a" stroke-width="1.5"/>'
        + '<line x1="60" y1="14" x2="60" y2="186" stroke="#4a4a4a" stroke-width="1.5"/>'
        + '<line x1="60" y1="150" x2="150" y2="110" stroke="#88b0ff" stroke-width="2.5"/>'
        + '<circle cx="150" cy="110" r="4" fill="#88b0ff"/><text x="126" y="140" class="il-svg-blue-ink" font-size="13">3+2i</text>'
        + '<line x1="150" y1="110" x2="120" y2="70" stroke="#ffb192" stroke-width="2.5"/>'
        + '<circle cx="120" cy="70" r="5" fill="#57d364"/><text x="158" y="86" class="il-svg-peach-ink" font-size="13">then −1+2i</text>'
        + '</svg>'
        + 'The green dot is the sum \\( (3 + 2i) + (-1 + 2i) \\). Where did it land?',
      interaction: {
        type: 'mcq',
        options: [
          'Upper right — both parts positive',
          'Upper left — negative real, positive imaginary',
          'Lower right — positive real, negative imaginary',
          'Lower left — both parts negative'
        ],
        correct: 0
      },
      hint: 'No plane needed — just add componentwise and check the signs: \\( 3 + (-1) \\) and \\( 2 + 2 \\).',
      explain: 'The sum is \\( 2 + 4i \\): real part \\( +2 \\), imaginary part \\( +4 \\), so the dot lands up and to the right. Componentwise addition is exactly how 2D arrows add — that’s the whole peek.',
      success: 'Complex numbers add like arrows. File that away.',
      coach: ['Add the real parts. Add the imaginary parts. Check both signs.']
    },

    /* 6 — the general formula */
    {
      prompt: 'In general: \\( (z_1 + z_2 i) + (w_1 + w_2 i) = \\; ? \\)',
      body: 'Same move as the numbers, now with symbols.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( (z_1 + w_1) + (z_2 + w_2)\\,i \\)',
          '\\( (z_1 + w_2) + (z_2 + w_1)\\,i \\)',
          '\\( (z_1 + z_2) + (w_1 + w_2)\\,i \\)',
          '\\( z_1 w_1 + z_2 w_2\\, i \\)'
        ],
        correct: 0
      },
      hint: 'Which symbols are real parts? \\( z_1 \\) and \\( w_1 \\). They stick together.',
      explain: 'Real with real, imaginary with imaginary: \\( (z_1 + w_1) + (z_2 + w_2)i \\). Complex numbers add exactly like 2D vectors — first components together, second components together.',
      success: 'Componentwise, always.',
      coach: ['Sort the four symbols into “real part” and “\\( i \\)-coefficient” piles first.']
    },

    /* 7 — multiplication: the FOIL grid */
    {
      prompt: 'Multiply: \\( (3 + 4i)(-3 + 8i) \\). Fill in all four products.',
      body: 'FOIL it like any binomial — but the Last cell is \\( 4i \\cdot 8i = 32i^2 \\), and \\( i^2 = -1 \\). Enter that cell <i>after</i> converting.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'First: 3·(−3)', placeholder: '?', answer: '-9', width: 105 },
          { label: 'Outer: 3·8i', placeholder: '?', answer: '24i', width: 105 },
          { label: 'Inner: 4i·(−3)', placeholder: '?', answer: '-12i', width: 105 },
          { label: 'Last: 4i·8i →', placeholder: '?', answer: '-32', width: 105 }
        ]
      },
      hint: 'The first three cells are ordinary multiplication. The last: \\( 32 i^2 = 32(-1) \\).',
      explain: 'Cells: \\( -9, \\; 24i, \\; -12i, \\; 32i^2 = -32 \\). Collect: reals \\( -9 - 32 = -41 \\); imaginaries \\( 24i - 12i = 12i \\). Product: \\( -41 + 12i \\). The \\( i^2 \\to -1 \\) conversion is <i>the</i> multiplication move — miss it and your real part is wrong every time.',
      success: 'Four cells, one conversion, done.',
      note: '<b>Multiplication:</b> distribute like any binomial, then convert every \\( i^2 \\) to \\( -1 \\). Here: \\( (3+4i)(-3+8i) = -41 + 12i \\).',
      coach: ['FOIL: First, Outer, Inner, Last — four separate small products.', 'Three of them are routine. Which one produces an \\( i^2 \\)?', '\\( 32i^2 \\) is just \\( -32 \\) — a real number wearing a disguise.']
    },

    /* 8 — multiplication practice */
    {
      prompt: 'Multiply: \\( \\left(-\\tfrac12 + i\\right)\\left(2 - \\tfrac13 i\\right) \\).',
      body: 'Same grid, smaller numbers, more fractions. Answer like <b>-2/3</b>.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '-2/3', width: 110 },
          { label: 'imaginary part', placeholder: '?', answer: '13/6', width: 110 }
        ]
      },
      hint: 'Four products: \\( -1, \\; \\frac16 i, \\; 2i, \\; -\\frac13 i^2 \\). Convert the last one, then collect.',
      explain: 'FOIL: \\( -\\frac12 \\cdot 2 = -1 \\); \\( -\\frac12 \\cdot (-\\frac13 i) = \\frac16 i \\); \\( i \\cdot 2 = 2i \\); \\( i \\cdot (-\\frac13 i) = -\\frac13 i^2 = +\\frac13 \\). Reals: \\( -1 + \\frac13 = -\\frac23 \\). Imaginaries: \\( \\frac16 + 2 = \\frac{13}{6} \\). Result: \\( -\\frac23 + \\frac{13}{6} i \\).',
      success: 'Fractions can’t hide the method.',
      coach: ['Write out all four FOIL products before combining anything.', 'The Last product is \\( -\\frac13 i^2 \\). What sign does it end up with?', 'Now collect: reals \\( -1 + \\frac13 \\), imaginaries \\( \\frac16 + 2 \\).']
    },

    /* 9 — the conjugate product: no i survives */
    {
      prompt: 'The special one: \\( (z_1 + z_2 i)(z_1 - z_2 i) = \\; ? \\)',
      body: 'Same numbers, opposite signs on the \\( i \\)-term. FOIL it symbolically.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( z_1^2 + z_2^2 \\)',
          '\\( z_1^2 - z_2^2 \\)',
          '\\( z_1^2 - z_2^2 + 2 z_1 z_2 i \\)',
          '\\( z_1^2 + z_2^2 - 2 z_1 z_2 i \\)'
        ],
        correct: 0
      },
      hint: 'The Outer and Inner terms are \\( -z_1 z_2 i \\) and \\( +z_1 z_2 i \\). And the Last term is \\( -z_2^2 i^2 \\).',
      explain: 'FOIL: \\( z_1^2 - z_1 z_2 i + z_1 z_2 i - z_2^2 i^2 \\). The middle terms cancel; the last flips sign to \\( +z_2^2 \\). Result: \\( z_1^2 + z_2^2 \\) — no \\( i \\) left anywhere, and it’s a <i>sum</i>, not the difference you’d get with real binomials.',
      success: 'No \\( i \\) survives. Remember this — you’re about to use it.',
      note: '<b>Key identity:</b> \\( (a + bi)(a - bi) = a^2 + b^2 \\), a plain nonnegative real. Pairs with opposite \\( i \\)-signs annihilate the imaginary part.',
      coach: ['FOIL symbolically — watch what happens to Outer + Inner.', 'The Last term: \\( (z_2 i)(-z_2 i) = -z_2^2 i^2 \\). Convert the \\( i^2 \\).']
    },

    /* 10 — division: the conjugate trick */
    {
      prompt: 'Divide: \\( \\dfrac{3 + 4i}{-3 + 8i} \\). The \\( i \\) downstairs has to go. Multiply top and bottom by…?',
      body: 'This is Lesson 1.4 again — you rationalized \\( \\frac{1}{2-\\sqrt3} \\) by multiplying by the conjugate. Same trick, except now the “radical” is \\( i \\).',
      interaction: {
        type: 'mcq',
        options: ['\\( -3 - 8i \\)', '\\( 3 - 8i \\)', '\\( -3 + 8i \\)', '\\( 8i \\)'],
        correct: 0, cols: true
      },
      hint: 'Flip the sign of the \\( i \\)-term only. The denominator is \\( -3 + 8i \\), so its conjugate is…',
      explain: 'Multiply by \\( \\frac{-3-8i}{-3-8i} \\). By the key identity the denominator becomes \\( (-3)^2 + 8^2 = 73 \\) — a plain real. The numerator FOILs to \\( (3+4i)(-3-8i) = -9 -24i -12i -32i^2 = 23 - 36i \\). So the quotient is \\( \\frac{23}{73} - \\frac{36}{73} i \\).',
      success: 'Conjugate downstairs → real downstairs. Every time.',
      note: '<b>Division:</b> multiply top and bottom by the conjugate of the denominator. The identity \\( (a+bi)(a-bi) = a^2 + b^2 \\) guarantees the new denominator is real.',
      coach: ['What multiplied \\( 2 - \\sqrt3 \\) to clear the radical in Lesson 1.4?', 'Conjugate = same real part, opposite \\( i \\)-part.', 'Check your choice: does \\( (-3+8i)(\\text{your pick}) \\) come out real?']
    },

    /* 11 — division practice */
    {
      prompt: 'Divide: \\( \\dfrac{-\\tfrac12 + i}{\\,2 - \\tfrac13 i\\,} \\).',
      body: 'Multiply top and bottom by \\( 2 + \\tfrac13 i \\), then simplify. Fractions like <b>-12/37</b> welcome.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '-12/37', width: 120 },
          { label: 'imaginary part', placeholder: '?', answer: '33/74', width: 120 }
        ]
      },
      hint: 'Denominator first: \\( 2^2 + \\left(\\frac13\\right)^2 = 4 + \\frac19 = \\frac{37}{9} \\). Then FOIL the top and divide.',
      explain: 'Top: \\( (-\\frac12 + i)(2 + \\frac13 i) = -1 - \\frac16 i + 2i + \\frac13 i^2 = -\\frac43 + \\frac{11}{6} i \\). Dividing by \\( \\frac{37}{9} \\) multiplies by \\( \\frac{9}{37} \\): real \\( -\\frac43 \\cdot \\frac{9}{37} = -\\frac{12}{37} \\), imaginary \\( \\frac{11}{6} \\cdot \\frac{9}{37} = \\frac{33}{74} \\).',
      success: 'That’s the ugliest division in the chapter — and you cleared it.',
      coach: ['Use the key identity for the denominator — no FOIL needed there.', 'FOIL the numerator carefully; the \\( \\frac13 i^2 \\) term becomes \\( -\\frac13 \\).', 'Dividing by \\( \\frac{37}{9} \\) is multiplying by \\( \\frac{9}{37} \\).']
    },

    /* ---------- checkpoint ---------- */
    {
      section: 'checkpoint',
      prompt: 'Add: \\( (2 + 3i) + (4 - 5i) \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '6', width: 105 },
          { label: 'imaginary part', placeholder: '?', answer: '-2', width: 105 }
        ]
      },
      hint: 'Componentwise: \\( 2+4 \\) and \\( 3-5 \\).',
      explain: '\\( (2+4) + (3-5)i = 6 - 2i \\).',
      coach: ['Reals together, imaginaries together.']
    },
    {
      section: 'checkpoint',
      prompt: 'Multiply: \\( (1 + i)(1 - i) \\).',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '2', width: 120 }] },
      hint: 'That’s a conjugate pair — use the key identity \\( a^2 + b^2 \\).',
      explain: 'Conjugate pair with \\( a = b = 1 \\): \\( 1^2 + 1^2 = 2 \\). No FOIL required.',
      coach: ['Opposite \\( i \\)-signs — which identity applies?']
    },
    {
      section: 'checkpoint',
      prompt: 'Square it: \\( (2 + i)^2 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '3', width: 105 },
          { label: 'imaginary part', placeholder: '?', answer: '4', width: 105 }
        ]
      },
      hint: '\\( (2+i)(2+i) \\): FOIL, then convert the \\( i^2 \\).',
      explain: '\\( 4 + 2i + 2i + i^2 = 4 + 4i - 1 = 3 + 4i \\).',
      coach: ['FOIL gives \\( 4 + 4i + i^2 \\). Finish the conversion.']
    },
    {
      section: 'checkpoint',
      prompt: 'Divide: \\( \\dfrac{5}{1 + 2i} \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '1', width: 105 },
          { label: 'imaginary part', placeholder: '?', answer: '-2', width: 105 }
        ]
      },
      hint: 'Multiply by \\( \\frac{1-2i}{1-2i} \\). The denominator becomes \\( 1^2 + 2^2 \\).',
      explain: '\\( \\frac{5(1-2i)}{(1+2i)(1-2i)} = \\frac{5 - 10i}{5} = 1 - 2i \\).',
      coach: ['Conjugate of \\( 1 + 2i \\) is \\( 1 - 2i \\).', 'The denominator is \\( 1 + 4 = 5 \\) — then everything divides cleanly.']
    },
    {
      section: 'checkpoint',
      prompt: 'The general product: \\( (z_1 + z_2 i)(w_1 + w_2 i) = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: [
          '\\( (z_1 w_1 - z_2 w_2) + (z_1 w_2 + z_2 w_1)\\,i \\)',
          '\\( (z_1 w_1 + z_2 w_2) + (z_1 w_2 + z_2 w_1)\\,i \\)',
          '\\( z_1 w_1 + z_2 w_2\\, i \\)',
          '\\( (z_1 w_1 - z_2 w_2) + (z_1 w_2 - z_2 w_1)\\,i \\)'
        ],
        correct: 0
      },
      hint: 'FOIL symbolically. The \\( z_2 w_2 i^2 \\) term changes sign and joins the real part.',
      explain: 'FOIL: \\( z_1 w_1 + z_1 w_2 i + z_2 w_1 i + z_2 w_2 i^2 \\). The last term is real and negative: \\( -z_2 w_2 \\). Result: \\( (z_1 w_1 - z_2 w_2) + (z_1 w_2 + z_2 w_1) i \\). Multiplying componentwise (option 3) is the classic trap — multiplication is NOT like addition.',
      coach: ['Four FOIL terms — which one has \\( i^2 \\)?', 'That term flips sign and is real. Everything else sorts by \\( i \\).']
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'Evaluate \\( (1+i)^4 (2 - 2i)^3 \\).',
      body: 'Brute force is twenty minutes of FOIL. There’s a shortcut — find it before you grind.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '64', width: 110 },
          { label: 'imaginary part', placeholder: '?', answer: '64', width: 110 }
        ]
      },
      hint: 'Compute \\( (1+i)^2 \\) first — it’s tiny. Then build the fourth power from it.',
      explain: '\\( (1+i)^2 = 1 + 2i + i^2 = 2i \\), so \\( (1+i)^4 = (2i)^2 = -4 \\). For the other factor, \\( 2 - 2i = 2(1-i) \\) and \\( (1-i)^2 = -2i \\), so \\( (2-2i)^3 = 8(1-i)^3 = 8(1-i)(-2i) = 8(-2i + 2i^2) = -16 - 16i \\). Product: \\( (-4)(-16 - 16i) = 64 + 64i \\).',
      success: 'The shortcut hunter’s reward: a 20-minute problem in four lines.',
      coach: ['Never expand a fourth power directly — square, then square again.', '\\( (1+i)^2 \\) collapses to something with no real part. Find it.', 'Factor \\( 2 - 2i = 2(1 - i) \\) and use \\( (1-i)^2 = -2i \\).']
    },

    /* ---------- boss ---------- */
    {
      section: 'boss',
      prompt: 'Evaluate \\( (2 + i)^3 \\).',
      body: 'MA© 1991. You already own the hardest ingredient.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '2', width: 110 },
          { label: 'imaginary part', placeholder: '?', answer: '11', width: 110 }
        ]
      },
      hint: 'Don’t cube in one shot: \\( (2+i)^3 = (2+i)^2 \\cdot (2+i) \\), and you computed \\( (2+i)^2 \\) two screens ago.',
      explain: '\\( (2+i)^2 = 3 + 4i \\). Then \\( (3+4i)(2+i) = 6 + 3i + 8i + 4i^2 = 6 + 11i - 4 = 2 + 11i \\).',
      walkthrough: [
        'Break the cube into a square times one more factor: \\( (2+i)^3 = (2+i)^2 (2+i) \\).',
        'The square: \\( (2+i)^2 = 4 + 4i + i^2 = 3 + 4i \\).',
        'One more FOIL: \\( (3+4i)(2+i) = 6 + 3i + 8i + 4i^2 \\).',
        'Convert and collect: \\( 6 - 4 = 2 \\) real, \\( 3 + 8 = 11 \\) imaginary — \\( \\boxed{2 + 11i} \\).'
      ],
      success: 'A cubed complex number, dispatched in two FOILs. Competition arithmetic is yours.',
      coach: [
        'Powers build from squares. What is \\( (2+i)^2 \\)?',
        'Now multiply that square by one more \\( (2+i) \\).',
        'Watch the \\( 4i^2 \\) — it’s a real \\( -4 \\), not an imaginary term.'
      ]
    }
  ]
};
