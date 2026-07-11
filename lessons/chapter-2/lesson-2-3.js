/* Lesson 2.2b — Conjugates, Re, and Im. Chapter 2: Complex Numbers.
   See lessons/LESSON-SCHEMA.md. */

export default {
  id: 'lesson-2-3',
  title: 'Conjugates, Re, and Im',
  kicker: 'Complex Numbers',
  topicIndex: 1,
  lessonIndex: 2,
  next: 'interactive-lesson.html?chapter=3&lesson=1',
  beats: [

    /* 1 — hook: the mirror twin */
    {
      prompt: 'Every complex number has a mirror twin.',
      body: 'Plot \\( z = 3 + 2i \\) on the sneak-peek plane, then reflect it across the real axis:'
        + '<svg viewBox="0 0 240 200" width="240" height="200" style="display:block;margin:14px auto 0" role="img" aria-label="3+2i and its reflection 3-2i across the real axis">'
        + '<line x1="14" y1="100" x2="226" y2="100" stroke="#4a4a4a" stroke-width="1.5"/>'
        + '<line x1="60" y1="14" x2="60" y2="186" stroke="#4a4a4a" stroke-width="1.5"/>'
        + '<circle cx="168" cy="52" r="6" fill="#88b0ff"/><text x="178" y="48" class="il-svg-ink" font-size="14">3+2i</text>'
        + '<circle cx="168" cy="148" r="6" fill="#ffb192"/><text x="178" y="162" class="il-svg-ink" font-size="14">?</text>'
        + '<line x1="168" y1="60" x2="168" y2="140" stroke="#666" stroke-width="1" stroke-dasharray="4 4"/>'
        + '</svg>',
      interaction: {
        type: 'reveal',
        face: 'Same distance below the axis as \\( 3 + 2i \\) sits above it. Which number is the peach point?',
        cta: 'Tap to meet the twin',
        hidden: 'It’s \\( 3 - 2i \\): same real part, opposite imaginary part. This twin is called the <b>conjugate</b> of \\( z \\), written \\( \\bar z \\). Conjugating is a mirror flip across the real axis — nothing more.'
      },
      note: '<b>Definition:</b> if \\( z = a + bi \\), then \\( \\bar z = a - bi \\). Flip the sign of the imaginary part <i>only</i> — the real part never moves.'
    },

    /* 2 — the Im trap (highest-priority beat in the lesson) */
    {
      prompt: 'Two extraction tools: \\( \\mathrm{Re}(z) \\) grabs the real part, \\( \\mathrm{Im}(z) \\) the imaginary part. So: \\( \\mathrm{Im}(3 + 4i) = \\;? \\)',
      body: 'Read carefully — this one question prevents the most common error in the whole chapter.',
      interaction: { type: 'mcq', options: ['\\( 4 \\)', '\\( 4i \\)', '\\( 3 \\)', '\\( -4 \\)'], correct: 0, cols: true },
      hint: '\\( \\mathrm{Im} \\) answers “how many \\( i \\)s?” — and a count is a plain real number.',
      explain: '<b>WARNING</b> (the book’s, verbatim in spirit): \\( \\mathrm{Im}(z) \\) is the <i>coefficient</i> of \\( i \\), not the whole imaginary term. \\( \\mathrm{Im}(3+4i) = 4 \\), a real number — never \\( 4i \\). Both \\( \\mathrm{Re} \\) and \\( \\mathrm{Im} \\) always output plain reals.',
      success: '\\( \\mathrm{Im} \\) outputs the coefficient — always a real number.',
      coach: ['\\( \\mathrm{Im} \\) counts the \\( i \\)s. Is a count real or imaginary?']
    },

    /* 3 — Re/Im drill */
    {
      prompt: 'Quick extraction drill. \\( z = -2 + 7i \\):',
      body: 'And one curveball with no visible \\( i \\) at all.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'Re(z)', placeholder: '?', answer: '-2', width: 100 },
          { label: 'Im(z)', placeholder: '?', answer: '7', width: 100 },
          { label: 'Im(6)', placeholder: '?', answer: '0', width: 100 }
        ]
      },
      hint: 'Write \\( 6 \\) in full form: \\( 6 + 0i \\). Now read off its coefficient of \\( i \\).',
      explain: '\\( \\mathrm{Re}(-2+7i) = -2 \\), \\( \\mathrm{Im}(-2+7i) = 7 \\) (not \\( 7i \\)). And \\( 6 = 6 + 0i \\), so \\( \\mathrm{Im}(6) = 0 \\) — real numbers have imaginary part zero.',
      success: 'Extraction tools calibrated.',
      coach: ['Put each number in \\( a + bi \\) form first.', 'For \\( \\mathrm{Im}(6) \\): what’s \\( b \\) when there’s no \\( i \\)-term?']
    },

    /* 4 — double conjugate */
    {
      prompt: 'Conjugate \\( z = a + bi \\) twice. What comes back?',
      interaction: {
        type: 'reveal',
        face: 'First flip: \\( \\bar z = a - bi \\). Now conjugate <i>that</i>.',
        cta: 'Tap to flip again',
        hidden: 'The second flip negates the imaginary part again: \\( \\overline{\\bar z} = a + bi = z \\). Two mirror flips land you exactly where you started — <b>the conjugate of the conjugate is the original</b>. Bonus: a real number \\( a = a + 0i \\) has nothing to flip, so \\( \\bar a = a \\); a pure imaginary \\( bi \\) flips entirely, \\( \\overline{bi} = -bi \\).'
      },
      note: '\\( \\overline{\\bar z} = z \\) always. And the flip-nothing case cuts both ways: \\( \\bar z = z \\) happens <i>exactly</i> when \\( z \\) is real.'
    },

    /* 5 — who equals their own twin? */
    {
      prompt: 'Which numbers satisfy \\( \\bar z = z \\)?',
      body: 'Think about what the mirror flip does to each kind of number.',
      interaction: {
        type: 'mcq',
        options: [
          'Exactly the real numbers',
          'Exactly the pure imaginaries',
          'Only \\( z = 0 \\)',
          'Every complex number'
        ],
        correct: 0
      },
      hint: '\\( \\bar z = z \\) means \\( a - bi = a + bi \\), so \\( b = -b \\). What does that force?',
      explain: '\\( b = -b \\) forces \\( b = 0 \\) — no imaginary part at all. So the fixed points of conjugation are precisely the reals: they sit ON the mirror, so the flip can’t move them. This gives you a slick test for realness: \\( z \\) is real \\( \\iff \\bar z = z \\).',
      success: 'The mirror only fixes what sits on it.',
      coach: ['Set \\( a - bi = a + bi \\) and cancel.', 'The equation collapses to a condition on \\( b \\) alone.']
    },

    /* 6 — conjugation distributes over sums: predict */
    {
      prompt: 'Prediction: \\( \\overline{z + w} = \\bar z + \\bar w \\) — always, sometimes, or never?',
      body: 'Commit to an answer before you check. That’s the game.',
      interaction: {
        type: 'mcq',
        options: [
          'Always',
          'Only when \\( z \\) and \\( w \\) are both real',
          'Only when the imaginary parts cancel',
          'Never — conjugation breaks over sums'
        ],
        correct: 0
      },
      hint: 'Write \\( z = a+bi \\), \\( w = c+di \\) and compute both sides. Addition is componentwise…',
      explain: 'Left side: \\( \\overline{(a+c) + (b+d)i} = (a+c) - (b+d)i \\). Right side: \\( (a - bi) + (c - di) = (a+c) - (b+d)i \\). Identical, for every choice — conjugate-then-add equals add-then-conjugate, <b>always</b>.',
      success: 'Flip then add, or add then flip — same place.',
      coach: ['Both sides are just componentwise operations. Expand them.', 'Compare the real parts, then the imaginary parts.']
    },

    /* 7 — and over products: verify live */
    {
      prompt: 'Bolder claim: \\( \\overline{zw} = \\bar z \\cdot \\bar w \\). Step through the trials and watch both sides.',
      body: 'Each trial multiplies first then flips, and separately flips first then multiplies.',
      interaction: {
        type: 'slider', min: 1, max: 5, value: 1, label: 'trial', mustExplore: 3,
        render(n) {
          const zs = [[2, 3], [1, -1], [-3, 2], [0, 5], [4, -2]];
          const ws = [[1, 2], [3, 1], [2, -2], [-1, 4], [-2, -3]];
          const [a, b] = zs[n - 1], [c, d] = ws[n - 1];
          const re = a * c - b * d, im = a * d + b * c;
          const f = (x, y) => `${x} ${y < 0 ? '-' : '+'} ${Math.abs(y)}i`;
          return {
            main: `\\( \\overline{zw} = ${f(re, -im)} \\qquad\\qquad \\bar z \\cdot \\bar w = ${f(re, -im)} \\)`,
            sub: `trial ${n}: z = ${f(a, b)}, w = ${f(c, d)} — multiply-then-flip and flip-then-multiply agree. Again.`
          };
        }
      },
      note: 'Conjugation distributes over addition, multiplication, AND division: \\( \\overline{z+w} = \\bar z + \\bar w \\), \\( \\overline{zw} = \\bar z \\bar w \\), \\( \\overline{(z/w)} = \\bar z / \\bar w \\). Does this surprise you? The mirror plays nice with <i>everything</i>.'
    },

    /* 8 — identity workout: Im(z) + Im(z̄) */
    {
      prompt: 'With \\( z = a + bi \\): compute \\( \\mathrm{Im}(z) + \\mathrm{Im}(\\bar z) \\).',
      body: 'Symbolic, but two extractions and one addition is all it takes.',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '0', width: 120 }] },
      hint: '\\( \\mathrm{Im}(z) = b \\). And \\( \\bar z = a - bi \\), so \\( \\mathrm{Im}(\\bar z) = \\;? \\)',
      explain: '\\( \\mathrm{Im}(z) = b \\) and \\( \\mathrm{Im}(\\bar z) = -b \\), so the sum is \\( b + (-b) = 0 \\) — for every complex number. A number and its mirror twin have opposite imaginary parts by construction.',
      success: 'Twin imaginary parts always cancel.',
      coach: ['Write \\( \\bar z \\) out and read off its \\( i \\)-coefficient.', 'Careful: \\( \\mathrm{Im}(\\bar z) \\) is \\( -b \\), not \\( -bi \\).']
    },

    /* 9 — reassembly identity */
    {
      prompt: 'Reassembly: \\( \\mathrm{Re}(z) + i \\cdot \\mathrm{Im}(z) = \\; ? \\)',
      body: '\\( \\mathrm{Re} \\) and \\( \\mathrm{Im} \\) take \\( z \\) apart. What does this expression do?',
      interaction: {
        type: 'mcq',
        options: ['\\( z \\)', '\\( \\bar z \\)', '\\( 2\\,\\mathrm{Re}(z) \\)', '\\( 0 \\)'],
        correct: 0, cols: true
      },
      hint: 'Substitute: \\( \\mathrm{Re}(z) = a \\), \\( \\mathrm{Im}(z) = b \\). What is \\( a + i \\cdot b \\)?',
      explain: '\\( a + i b = a + bi = z \\). The two extractors disassemble \\( z \\) into its parts, and this expression bolts them back together. It only works because \\( \\mathrm{Im}(z) = b \\) — if \\( \\mathrm{Im} \\) returned \\( bi \\), you’d get \\( a + bi^2 = a - b \\), nonsense.',
      success: 'Disassemble, reassemble — identity confirmed.',
      coach: ['Replace each extractor with the letter it returns.', 'You’re looking at \\( a + bi \\) in disguise.']
    },

    /* ---------- checkpoint ---------- */
    {
      section: 'checkpoint',
      prompt: 'Write \\( \\bar z \\) for \\( z = -2 + 5i \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part of z̄', placeholder: '?', answer: '-2', width: 110 },
          { label: 'imaginary part of z̄', placeholder: '?', answer: '-5', width: 110 }
        ]
      },
      hint: 'Only the \\( i \\)-part flips sign.',
      explain: '\\( \\overline{-2 + 5i} = -2 - 5i \\). The real part \\( -2 \\) is untouched — flipping it too is the classic conjugate error.',
      coach: ['Which of the two parts does the mirror flip?']
    },
    {
      section: 'checkpoint',
      prompt: 'Find \\( \\mathrm{Re} \\) and \\( \\mathrm{Im} \\) of \\( (1 + i)^2 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'Re', placeholder: '?', answer: '0', width: 100 },
          { label: 'Im', placeholder: '?', answer: '2', width: 100 }
        ]
      },
      hint: 'Expand first: \\( (1+i)^2 = 1 + 2i + i^2 \\).',
      explain: '\\( (1+i)^2 = 1 + 2i - 1 = 2i = 0 + 2i \\). So \\( \\mathrm{Re} = 0 \\) and \\( \\mathrm{Im} = 2 \\) — not \\( 2i \\). The extractors always return plain reals.',
      coach: ['Square it out before extracting anything.', '\\( 2i \\) has what real part? What coefficient of \\( i \\)?']
    },
    {
      section: 'checkpoint',
      kicker: 'The gauntlet — 1 of 3',
      prompt: 'True or false: \\( \\overline{z + 3i} = \\bar z - 3i \\) for every complex \\( z \\).',
      body: 'No looking back. Verify it, don’t vibe it.',
      interaction: { type: 'mcq', options: ['True', 'False'], correct: 0, shuffle: false, cols: true },
      hint: 'Conjugation distributes over sums: \\( \\overline{z + 3i} = \\bar z + \\overline{3i} \\). What is \\( \\overline{3i} \\)?',
      explain: 'Distribute the bar: \\( \\overline{z + 3i} = \\bar z + \\overline{3i} = \\bar z - 3i \\), since the conjugate of a pure imaginary flips it entirely. True.',
      coach: ['Split the bar across the sum first.', 'The conjugate of \\( 3i \\) alone is…?']
    },
    {
      section: 'checkpoint',
      kicker: 'The gauntlet — 2 of 3',
      prompt: 'True or false: \\( \\overline{iz} = -i \\bar z \\) for every complex \\( z \\).',
      interaction: { type: 'mcq', options: ['True', 'False'], correct: 0, shuffle: false, cols: true },
      hint: 'The bar distributes over products too: \\( \\overline{iz} = \\bar{i} \\cdot \\bar z \\). What is \\( \\bar i \\)?',
      explain: '\\( \\overline{iz} = \\bar i \\cdot \\bar z \\), and \\( \\bar i = -i \\) (pure imaginary flips). So \\( \\overline{iz} = -i\\bar z \\). True — the product rule for conjugates does all the work.',
      coach: ['Use \\( \\overline{zw} = \\bar z \\bar w \\) with \\( w = i \\).', 'Conjugate of \\( i \\): flip its sign.']
    },
    {
      section: 'checkpoint',
      kicker: 'The gauntlet — 3 of 3',
      prompt: 'True or false: \\( \\overline{(2+i)^2} = 3 - 4i \\).',
      interaction: { type: 'mcq', options: ['True', 'False'], correct: 0, shuffle: false, cols: true },
      hint: 'Two routes: expand \\( (2+i)^2 \\) then flip — or flip first and expand \\( (2-i)^2 \\). They’d better agree.',
      explain: 'Expand-then-flip: \\( (2+i)^2 = 3 + 4i \\), conjugate \\( 3 - 4i \\). Flip-then-expand: \\( (2-i)^2 = 4 - 4i + i^2 = 3 - 4i \\). Same answer — that’s \\( \\overline{z^2} = \\bar z^2 \\), the product rule again. True.',
      coach: ['You found \\( (2+i)^2 \\) in the last lesson. Flip it.', 'Cross-check by squaring \\( 2 - i \\) directly.']
    },
    {
      section: 'checkpoint',
      prompt: 'With \\( z = a + bi \\): \\( \\mathrm{Im}(z) - \\mathrm{Im}(\\bar z) = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: ['\\( 2b \\)', '\\( 0 \\)', '\\( b \\)', '\\( 2bi \\)'],
        correct: 0, cols: true
      },
      hint: 'You showed the SUM is 0 because \\( \\mathrm{Im}(\\bar z) = -b \\). Now subtract instead.',
      explain: '\\( \\mathrm{Im}(z) - \\mathrm{Im}(\\bar z) = b - (-b) = 2b \\). Not \\( 2bi \\) — Im returns coefficients, and this whole expression is a real number.',
      coach: ['Substitute \\( b \\) and \\( -b \\) for the two extractions.', 'Minus a negative…']
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'For \\( F(x) = 3x^3 - 2x^2 + x - 3 \\), evaluate \\( F(1 + i) \\).',
      body: 'Long but mechanical. Build the powers step by step — \\( (1+i)^2 \\) first, then \\( (1+i)^3 \\), then assemble.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'real part', placeholder: '?', answer: '-8', width: 110 },
          { label: 'imaginary part', placeholder: '?', answer: '3', width: 110 }
        ]
      },
      hint: 'Step 1: \\( (1+i)^2 = 2i \\). Step 2: \\( (1+i)^3 = (1+i) \\cdot 2i = -2 + 2i \\). Now substitute both into \\( F \\).',
      explain: 'Powers: \\( (1+i)^2 = 2i \\) and \\( (1+i)^3 = (1+i)(2i) = 2i + 2i^2 = -2 + 2i \\). Assemble: \\( 3(-2+2i) - 2(2i) + (1+i) - 3 = (-6 + 6i) - 4i + 1 + i - 3 \\). Reals: \\( -6 + 1 - 3 = -8 \\). Imaginaries: \\( 6 - 4 + 1 = 3 \\). So \\( F(1+i) = -8 + 3i \\).',
      success: 'Four terms tracked, zero dropped signs. That’s the whole skill.',
      coach: ['Never plug into all four terms at once — compute the powers first.', '\\( (1+i)^3 \\) is \\( (1+i) \\) times the square you already have.', 'Tally reals and imaginaries in separate columns at the end.']
    },

    /* ---------- boss ---------- */
    {
      section: 'boss',
      prompt: 'Find \\( \\mathrm{Re}\\!\\left[(a + bi)(c + di)\\right] \\) in terms of \\( a, b, c, d \\).',
      body: 'MA© 1991. Everything from both halves of this section in one line: FOIL the product, then extract.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( ac - bd \\)',
          '\\( ac + bd \\)',
          '\\( ad + bc \\)',
          '\\( ac \\)'
        ],
        correct: 0
      },
      hint: 'FOIL first — you can’t extract from an unexpanded product. Which FOIL terms end up real?',
      explain: '\\( (a+bi)(c+di) = ac + adi + bci + bd\\,i^2 = (ac - bd) + (ad + bc)i \\). The real part is \\( ac - bd \\) — the \\( bd \\) went real (and negative) via \\( i^2 = -1 \\). Note \\( \\mathrm{Re}(z)\\mathrm{Re}(w) = ac \\) alone is wrong: Re does NOT distribute over products, which is exactly why conjugates (which do) are so prized.',
      walkthrough: [
        'FOIL the product: \\( ac + adi + bci + bd\\,i^2 \\).',
        'Convert: \\( bd\\,i^2 = -bd \\), a real number.',
        'Sort: real part \\( ac - bd \\), imaginary part \\( ad + bc \\).',
        'Extract: \\( \\mathrm{Re}[(a+bi)(c+di)] = \\boxed{ac - bd} \\). (And you got \\( \\mathrm{Im} = ad + bc \\) for free.)'
      ],
      success: 'Chapter 2 complete — you can build, combine, mirror, and dissect complex numbers.',
      coach: [
        'Expand the product before reaching for Re.',
        'Two of the four FOIL terms carry an \\( i \\); one term carries \\( i^2 \\).',
        'The \\( i^2 \\) term joins the real part — with which sign?'
      ]
    }
  ]
};
