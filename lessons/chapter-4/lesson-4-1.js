/* Lesson 4.1a — Direct Proportion and Ratios.
   Tape diagrams (inline SVG + slider) carry part:part:whole reasoning. */

const TAPE_SVG = `<svg viewBox="0 0 320 70" width="320" style="max-width:100%;display:block;margin:14px auto 0" role="img" aria-label="Tape diagram: 5 equal segments, 3 for boys and 2 for girls">
  <rect x="10" y="14" width="60" height="30" fill="#88b0ff" stroke="#10131c"/><rect x="70" y="14" width="60" height="30" fill="#88b0ff" stroke="#10131c"/><rect x="130" y="14" width="60" height="30" fill="#88b0ff" stroke="#10131c"/>
  <rect x="190" y="14" width="60" height="30" fill="#ffb192" stroke="#10131c"/><rect x="250" y="14" width="60" height="30" fill="#ffb192" stroke="#10131c"/>
  <text x="100" y="60" fill="#88b0ff" font-size="12" text-anchor="middle">boys — 3 parts</text>
  <text x="250" y="60" fill="#ffb192" font-size="12" text-anchor="middle">girls — 2 parts</text>
</svg>`;

const LINE_SVG = `<svg viewBox="0 0 320 46" width="320" style="max-width:100%;display:block;margin:14px auto 0" role="img" aria-label="Points A through E on a line with AB:BC:CD:DE = 1:3:12:6">
  <line x1="10" y1="22" x2="310" y2="22" stroke="#4a4a4a" stroke-width="2"/>
  <circle cx="10" cy="22" r="4" fill="#88b0ff"/><circle cx="23.6" cy="22" r="4" fill="#88b0ff"/><circle cx="64.9" cy="22" r="4" fill="#88b0ff"/><circle cx="228.6" cy="22" r="4" fill="#88b0ff"/><circle cx="310" cy="22" r="4" fill="#88b0ff"/>
  <text x="10" y="12" fill="#e8e8e8" font-size="12" text-anchor="middle">A</text><text x="23.6" y="42" fill="#e8e8e8" font-size="12" text-anchor="middle">B</text><text x="64.9" y="12" fill="#e8e8e8" font-size="12" text-anchor="middle">C</text><text x="228.6" y="12" fill="#e8e8e8" font-size="12" text-anchor="middle">D</text><text x="310" y="12" fill="#e8e8e8" font-size="12" text-anchor="middle">E</text>
</svg>`;

export default {
  id: 'lesson-4-1',
  title: 'Direct Proportion and Ratios',
  kicker: 'Proportions',
  topicIndex: 3,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=4&lesson=2',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Five apples cost 39&cent;. Drag the apple count.',
      body: 'Watch the third readout — it&rsquo;s the entire definition of this chapter.',
      interaction: {
        type: 'slider',
        min: 1, max: 10, step: 1, value: 5, label: 'apples', mustExplore: 4,
        render(n) {
          const cost = Math.round(7.8 * n * 10) / 10;
          return {
            main: `\\( ${n} \\text{ apples cost } ${cost}\\text{&cent;} \\)`,
            sub: `apples ÷ cost = ${n}/${cost} = 5/39, every single time. The quotient is a constant.`,
          };
        },
      },
      success: 'Two quantities whose quotient never moves are directly proportional. That frozen number is the constant of proportionality.',
      note: '<b>Direct proportion = constant quotient.</b> Everything in this lesson is finding that constant from one data point and reusing it on another.',
      coach: ['Ignore the first two readouts. What does the third one do as you drag?'],
    },
    {
      prompt: 'A 10-ft pole casts an 8-ft shadow. A tree&rsquo;s shadow is 12 ft. How tall is the tree?',
      body: 'The setup ritual: stack same-type quantities. Height over shadow, both objects, same instant of sunshine — then drive the solve.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( \\dfrac{h}{12} \\;=\\; \\dfrac{10}{8} \\)' },
          s1: { eq: '\\( 8h \\;=\\; 120 \\)' },
          flip: { eq: '\\( \\dfrac{12}{h} \\;=\\; \\dfrac{10}{8} \\)', note: 'Careful — you just flipped ONE side. Now shadows sit over heights on the left but heights over shadows on the right. Flip both or neither. Undo.' },
          win: { eq: '\\( h \\;=\\; 15 \\text{ ft} \\)', note: 'Check against sense: the tree&rsquo;s shadow (12) is longer than the pole&rsquo;s (8), so the tree must beat 10 ft. It does.' },
        },
        ops: [
          { label: 'Cross-multiply', to: { s0: 's1' } },
          { label: 'Flip the left side only', to: { s0: 'flip' } },
          { label: 'Divide both sides by 8', to: { s1: 'win' }, blocked: 'Cross-multiply first to clear both denominators.' },
        ],
      },
      hint: 'Same-type quantities stacked: height/shadow = height/shadow. Then cross-multiply.',
      success: 'Set up the ratio, substitute the known pair, cross-solve. That ritual is 80% of every proportion problem.',
      coach: ['Both fractions must mean the same thing: height over shadow.', 'After cross-multiplying it&rsquo;s a Chapter 3 one-liner.'],
    },
    {
      prompt: 'Boys to girls is \\( 3:2 \\). What fraction of the class is girls?',
      body: 'The #1 ratio error lives in this question.',
      interaction: {
        type: 'mcq',
        options: ['\\( \\dfrac{2}{5} \\)', '\\( \\dfrac{2}{3} \\)', '\\( \\dfrac{3}{5} \\)', '\\( \\dfrac{1}{2} \\)'],
        correct: 0,
      },
      hint: '\\( 3:2 \\) compares part to part. The whole class is \\( 3+2 \\) parts.',
      explain: 'Girls are 2 parts out of \\( 3+2 = 5 \\) total parts: \\( \\frac{2}{5} \\). The tempting \\( \\frac{2}{3} \\) compares girls to <em>boys</em> — a part:part number wearing a part:whole costume.',
      note: 'A ratio \\( a:b \\) means \\( \\frac{a}{a+b} \\) and \\( \\frac{b}{a+b} \\) of the total. Add the parts before you take fractions of anything.',
      coach: ['How many parts does the whole class contain?'],
    },
    {
      prompt: 'Same class, 35 students. Slide the class size and watch the tape.',
      body: 'Each segment of the bar is one part of the \\( 3:2 \\) ratio.' + TAPE_SVG,
      interaction: {
        type: 'slider',
        min: 5, max: 50, step: 5, value: 5, label: 'students', mustExplore: 4,
        render(n) {
          const seg = n / 5;
          return {
            main: `\\( \\text{each segment} = ${n} \\div 5 = ${seg} \\)`,
            sub: `boys = 3 × ${seg} = ${3 * seg}, girls = 2 × ${seg} = ${2 * seg}` + (n === 35 ? ' — there’s the class: 21 boys, 14 girls.' : ''),
          };
        },
      },
      success: 'Total ÷ total parts = one segment; multiply back out. The tape diagram makes part:whole impossible to fumble.',
      coach: ['Set the slider to 35 and read off both counts.'],
    },
    {
      prompt: 'Jordan scores 124 points over his first 4 games. At this rate, how many points in the next 6 games?',
      body: '&ldquo;At this rate&rdquo; is the direct-proportion password: find the unit rate, reuse it.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'points', answer: '186', width: 110 }],
      },
      hint: 'Points per game first: \\( 124 \\div 4 \\).',
      explain: '\\( 124/4 = 31 \\) points per game — the constant. Six more games: \\( 31 \\times 6 = 186 \\).',
      coach: ['The constant of proportionality here has a name: points per game.'],
    },
    {
      prompt: 'A team&rsquo;s wins-to-losses ratio is \\( 15:16 \\), and it lost 64 games. How many games did it <em>play</em>?',
      body: 'Read the question. Then read it again.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'games played', answer: '124', width: 110 }],
      },
      hint: '64 losses = 16 parts, so one part = 4 games. Played = wins AND losses = \\( 15 + 16 \\) parts.',
      explain: 'One part is \\( 64 \\div 16 = 4 \\) games. Games played span all \\( 31 \\) parts: \\( 31 \\times 4 = 124 \\). Answering 60 (the wins) is the read-the-question trap; this is the part:whole idea again, in disguise.',
      coach: ['Which part of the ratio does the 64 belong to?', 'The question asks for the whole, not the other part.'],
    },
    {
      prompt: 'Reduce the age ratio \\( 20:10:5 \\).',
      body: 'Ratios reduce like fractions: divide every term by the same thing.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'first', answer: '4', width: 80 },
          { label: 'second', answer: '2', width: 80 },
          { label: 'third', answer: '1', width: 80 },
        ],
      },
      hint: 'What divides all three of 20, 10, and 5?',
      explain: 'Divide through by 5: \\( 4:2:1 \\). Every term gets the same treatment — reducing some terms and not others butchers the ratio.',
      note: 'Three-way ratios are exactly why colon notation exists: a single fraction can only compare two things, but \\( 4:2:1 \\) holds three. Chains of ratios return in Lesson 4.2.',
      coach: ['Same move as reducing a fraction, applied to all three slots.'],
    },
    {
      prompt: 'A stack of 8 quarters is exactly half an inch tall. How many quarters make a one-foot stack?',
      body: 'A teaser for the conversions lesson: this is a ratio problem AND a units problem.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'quarters', answer: '192', width: 110 }],
      },
      hint: 'A foot is 12 inches = 24 half-inches.',
      explain: '8 quarters per half-inch, and a foot holds \\( 12 \\times 2 = 24 \\) half-inches: \\( 8 \\times 24 = 192 \\) quarters. (About $48, if you&rsquo;re asking.)',
      coach: ['Convert the foot into the unit the rate already uses.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'A 6-ft person casts a 4-ft shadow. A flagpole&rsquo;s shadow is 18 ft. Height?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'height (ft)', answer: '27', width: 100 }],
      },
      hint: 'Height over shadow, both objects: \\( \\frac{h}{18} = \\frac{6}{4} \\).',
      explain: '\\( h = 18 \\cdot \\frac{6}{4} = 27 \\) ft. Sense check: shadow ratio \\( 18/4 = 4.5 \\), and \\( 6 \\times 4.5 = 27 \\) ✓.',
      coach: ['Stack same-type quantities, then cross-multiply.'],
    },
    {
      section: 'checkpoint',
      prompt: 'A class of 45 has boys : girls \\( = 4:5 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'boys', answer: '20', width: 90 },
          { label: 'girls', answer: '25', width: 90 },
          { label: 'girls as a fraction of the class', answer: '5/9', width: 110 },
        ],
      },
      hint: '\\( 4+5 = 9 \\) parts; each part is \\( 45 \\div 9 \\).',
      explain: 'One part is 5 students: \\( 20 \\) boys, \\( 25 \\) girls, and girls are \\( \\frac{5}{9} \\) of the class — parts over TOTAL parts.',
      coach: ['Tape diagram: 9 segments.', 'The fraction&rsquo;s denominator is the whole class&rsquo;s parts.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Three ages are in ratio \\( 4:2:1 \\) and sum to 84. Find the oldest and youngest.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'oldest', answer: '48', width: 90 },
          { label: 'youngest', answer: '12', width: 90 },
        ],
      },
      hint: '\\( 4+2+1 = 7 \\) parts share the 84.',
      explain: 'One part is \\( 84/7 = 12 \\): ages 48, 24, 12. The three-term tape diagram works exactly like the two-term one.',
      coach: ['Total parts first, then one part, then scale up.'],
    },
    {
      section: 'checkpoint',
      prompt: 'What percent of 20 is 13?',
      body: 'Yes, percent — but watch: it&rsquo;s a pure proportion setup. (Preview of Lesson 4.4a.)',
      interaction: {
        type: 'fillin',
        fields: [{ label: '%', answer: '65', width: 100 }],
      },
      hint: 'Percent means per hundred: \\( \\frac{13}{20} = \\frac{p}{100} \\).',
      explain: '\\( p = 100 \\cdot \\frac{13}{20} = 65 \\). A percent is just a ratio whose second term is pinned at 100.',
      coach: ['Set up part over whole equals p over 100.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Points \\( A, B, C, D, E \\) lie on a line in that order with \\( \\dfrac{AB}{BC} = \\dfrac13, \\; \\dfrac{BC}{CD} = \\dfrac14, \\; \\dfrac{CD}{DE} = 2 \\). Find \\( \\dfrac{CD}{BE} \\).',
      body: 'Ratios chained down a line. Pick a concrete value for one segment and build the rest.' + LINE_SVG,
      interaction: {
        type: 'fillin',
        fields: [{ label: 'CD/BE', answer: '4/7', width: 110 }],
      },
      hint: 'Set \\( BC = 3 \\) (any number works — ratios don&rsquo;t care). Then \\( AB = 1 \\), \\( CD = 12 \\), \\( DE = 6 \\).',
      explain: 'With \\( BC = 3 \\): \\( AB = 1, CD = 12, DE = 6 \\). \\( BE \\) runs from \\( B \\) to \\( E \\): \\( BC + CD + DE = 3 + 12 + 6 = 21 \\). So \\( \\frac{CD}{BE} = \\frac{12}{21} = \\frac{4}{7} \\).',
      walkthrough: [
        'Ratios fix proportions, not sizes — so you may CHOOSE one length. Set \\( BC = 3 \\) to keep everything whole.',
        'Unwind each ratio: \\( AB = \\frac13 BC = 1 \\); \\( CD = 4\\,BC = 12 \\); \\( DE = \\frac{CD}{2} = 6 \\).',
        'Lay them on the line: \\( A\\,\\_1\\,B\\,\\_3\\,C\\,\\_{12}\\,D\\,\\_6\\,E \\). \\( BE \\) is everything from \\( B \\) to \\( E \\): \\( 3+12+6 = 21 \\).',
        '\\( \\frac{CD}{BE} = \\frac{12}{21} = \\frac{4}{7} \\). The concrete-value trick turned four abstract ratios into arithmetic.',
      ],
      success: 'Assigning a concrete value to one part of a ratio chain is completely legal — and it&rsquo;s the main tool of the manipulation lesson coming up.',
      note: 'When everything is ratios and the answer is a ratio, you may pick a convenient concrete value for ONE quantity. The answer can&rsquo;t depend on your choice.',
      coach: ['You&rsquo;re free to pick a size for one segment. Which choice keeps all four segments whole numbers?', 'Build each segment from its neighbor via the given ratios.', '\\( BE \\) is a sum of three segments — check the picture.'],
    },
  ],
};
