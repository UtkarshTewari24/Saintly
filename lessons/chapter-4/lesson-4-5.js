/* Lesson 4.4a — Percent: Language and Change.
   The percent machine (multiplier blocks on the balance component) kills
   the "percents add" misconception on sight. */

export default {
  id: 'lesson-4-5',
  title: 'Percent: Language and Change',
  kicker: 'Proportions',
  topicIndex: 3,
  lessonIndex: 4,
  next: 'interactive-lesson.html?chapter=4&lesson=6',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Percent, decimal, fraction — one number, three costumes. Match them.',
      body: 'The repeating ones are competition staples: memorize \\( 33\\tfrac13\\% = \\tfrac13 \\) and its family for life.',
      interaction: {
        type: 'match',
        pairs: [
          ['\\( 35\\% \\)', '\\( 0.35 \\)'],
          ['\\( 175\\% \\)', '\\( \\dfrac{7}{4} \\)'],
          ['\\( 66\\tfrac{2}{3}\\% \\)', '\\( \\dfrac{2}{3} \\)'],
          ['\\( 33\\tfrac{1}{3}\\% \\)', '\\( \\dfrac{1}{3} \\)'],
        ],
      },
      hint: 'Percent means per hundred: drop the % and divide by 100.',
      success: 'Note 175% matched happily — percents above 100 are perfectly legal. They just mean &ldquo;more than the whole.&rdquo;',
      note: 'Percent = per hundred, nothing more. \\( p\\% = \\frac{p}{100} \\), in both directions, including \\( p > 100 \\).',
      coach: ['Convert each percent to a fraction over 100, then reduce.'],
    },
    {
      prompt: 'The dictionary: &ldquo;of&rdquo; = &times;, &ldquo;is&rdquo; = &equals;, &ldquo;what&rdquo; = \\( x \\).',
      body: 'Translate and solve both: <em>What is 5% of 60?</em> and <em>75 is 20% of what number?</em>',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '5% of 60', answer: '3', width: 100 },
          { label: '75 is 20% of…', answer: '375', width: 100 },
        ],
      },
      hint: 'Word for word: \\( x = 0.05 \\times 60 \\), and \\( 75 = 0.20 \\times x \\).',
      explain: '\\( 0.05 \\times 60 = 3 \\). And \\( 75 = 0.2x \\) gives \\( x = 375 \\) — the &ldquo;of what&rdquo; direction divides instead of multiplying, and the dictionary handles both without thinking.',
      note: 'The translation-table ritual from Chapter 3 shrinks to three words here: <b>of</b> &times;, <b>is</b> &equals;, <b>what</b> \\( x \\). Every percent sentence in existence parses with them.',
      coach: ['Write each sentence symbol by symbol before computing.', 'The second one has the \\( x \\) after the &ldquo;of&rdquo;.'],
    },
    {
      prompt: 'A \\$22 book is 25% off. The one-multiplication route?',
      body: 'You could find 25% of 22 and subtract. Or…',
      interaction: {
        type: 'mcq',
        options: [
          '\\( 22 \\times 0.75 \\)',
          '\\( 22 \\times 0.25 \\)',
          '\\( 22 \\times 1.25 \\)',
          '\\( 22 - 0.25 \\)',
        ],
        correct: 0,
      },
      hint: 'After removing 25%, what fraction of the price REMAINS?',
      explain: 'Off 25% means keeping 75%: \\( 22 \\times 0.75 = \\$16.50 \\). One multiplication, no subtraction step to fumble. Likewise +25% is \\( \\times 1.25 \\).',
      note: 'From now on, a percent change IS a multiplier: \\( +p\\% \\to \\times(1 + \\frac{p}{100}) \\), \\( -p\\% \\to \\times(1 - \\frac{p}{100}) \\). This single habit is worth the whole lesson.',
      coach: ['Think about what&rsquo;s left, not what&rsquo;s removed.'],
    },
    {
      prompt: '\\$10,000 drops 25%, then rises 25%. Where does it land?',
      body: 'Commit. Most people get this wrong.',
      interaction: {
        type: 'mcq',
        options: ['\\$9375', '\\$10{,}000', '\\$9500', '\\$10{,}625'],
        correct: 0,
      },
      hint: 'Write both changes as multipliers. Do they multiply to 1?',
      explain: '\\( \\times 0.75 \\) then \\( \\times 1.25 \\) is \\( \\times 0.9375 \\) — \\$9375, not back to \\$10,000. The +25% acted on the <em>smaller</em> number, so it recovered less than was lost. Percents don&rsquo;t add; multipliers multiply.',
      coach: ['−25% then +25% feels like zero. Check it with multipliers.'],
    },
    {
      prompt: 'Run it through the percent machine and watch the multipliers compose.',
      body: 'Blocks apply in any order you like — try both.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( \\$10{,}000 \\)' },
          sA: { eq: '\\( \\$10{,}000 \\xrightarrow{\\times 0.75} \\$7500 \\)' },
          sB: { eq: '\\( \\$10{,}000 \\xrightarrow{\\times 1.25} \\$12{,}500 \\)', note: 'Raised first instead? Fine — watch what the drop does to the bigger number.' },
          win: { eq: '\\( \\times 0.75 \\times 1.25 = \\times 0.9375 \\;\\Rightarrow\\; \\$9375 \\)', note: 'Either order, same landing: multiplication commutes. The machine&rsquo;s law: chained percent changes multiply their multipliers — they never, ever add.' },
        },
        ops: [
          { label: 'Apply &minus;25% (&times;0.75)', to: { s0: 'sA', sB: 'win' } },
          { label: 'Apply +25% (&times;1.25)', to: { s0: 'sB', sA: 'win' } },
        ],
      },
      hint: 'Feed \\$10,000 through both blocks, in either order.',
      success: 'Composition made visible: 0.75 · 1.25 = 0.9375, whichever block goes first.',
      coach: ['Apply one block, read the intermediate value, apply the other.'],
    },
    {
      prompt: 'A price rises 25%. What percent decrease returns it to the original?',
      body: 'The inverse question — and a callback: this is the pressure/volume problem from Lesson 4.1b wearing a price tag.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '% decrease', answer: '20', width: 100 }],
      },
      hint: 'Find \\( m \\) with \\( 1.25 \\times m = 1 \\), then read \\( m \\) as a percent change.',
      explain: '\\( m = \\frac{1}{1.25} = 0.8 \\): keeping 80% is a <b>20%</b> decrease. Undoing +25% is not −25% — inverse multipliers, not opposite percents.',
      coach: ['The two multipliers must multiply to 1.', '0.8 means what percent change?'],
    },
    {
      prompt: 'A stock falls from \\$8000 to \\$7000. Percent decrease?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '%', answer: '12.5', accept: ['25/2'], width: 100 }],
      },
      hint: 'Difference over the ORIGINAL: \\( \\frac{1000}{8000} \\).',
      explain: '\\( \\frac{1000}{8000} = 0.125 = 12.5\\% \\). Dividing by the new value (\\( 1000/7000 \\approx 14.3\\% \\)) is the classic denominator trap — percent change is always measured against where you <em>started</em>.',
      note: 'Percent change \\( = \\frac{\\text{difference}}{\\text{original}} \\). The original. Always.',
      coach: ['Which number was the starting value?'],
    },
    {
      prompt: 'A price fell 40%, then rose 50%, and now sits at \\$360. What was it originally?',
      body: 'Run the machine <em>backwards</em>.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'original ($)', answer: '400', width: 100 }],
      },
      hint: 'Forward: \\( P \\times 0.6 \\times 1.5 = 360 \\). Undo with division.',
      explain: '\\( 0.6 \\times 1.5 = 0.9 \\), so \\( P = \\frac{360}{0.9} = \\$400 \\). Division undoes multipliers cleanly; &ldquo;adding the percents back&rdquo; (+40, −50) lands nowhere meaningful.',
      coach: ['Compose the two multipliers into one.', 'The composed multiplier maps P to 360.'],
    },
    {
      prompt: 'A test has two parts: part one is 60% of the grade and you scored 95%; part two is 40%. What part-two score gives a 90% average?',
      body: 'Weighted average — the bridge to next lesson&rsquo;s mixtures.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'part two %', answer: '82.5', accept: ['165/2'], width: 110 }],
      },
      hint: 'Weights multiply their scores: \\( 0.6(95) + 0.4(p) = 90 \\).',
      explain: '\\( 57 + 0.4p = 90 \\) gives \\( p = 82.5 \\). The classic error averages the two scores equally — \\( \\frac{95 + p}{2} = 90 \\), giving 85 — but the 95 carries the heavier weight and does more of the lifting, so part two can afford to be lower than 85. Weights change answers; that&rsquo;s why they&rsquo;re there.',
      coach: ['Each part contributes weight × score.', 'The contributions must sum to the target 90.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'What percent of 20 is 13?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '%', answer: '65', width: 100 }],
      },
      hint: 'Dictionary: \\( \\frac{x}{100} \\times 20 = 13 \\).',
      explain: '\\( x = 100 \\times \\frac{13}{20} = 65\\% \\).',
      coach: ['Translate word by word, then solve.'],
    },
    {
      section: 'checkpoint',
      prompt: 'A quantity rises 50%, then falls 40%, ending 8 below where it started. Find the original.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'original', answer: '80', width: 100 }],
      },
      hint: 'Compose: \\( 1.5 \\times 0.6 = 0.9 \\). Then \\( 0.9P = P - 8 \\).',
      explain: 'The two changes net to \\( \\times 0.9 \\), a 10% loss, and that loss is 8: \\( 0.1P = 8 \\), so \\( P = 80 \\). Multiplier composition plus a Chapter-3 one-liner.',
      coach: ['One multiplier for the whole journey first.', 'The gap between P and 0.9P is given.'],
    },
    {
      section: 'checkpoint',
      prompt: '\\( p \\) is 50% of \\( q \\), and \\( r \\) is 40% of \\( q \\). Then \\( p \\) is what percent of \\( r \\)?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '%', answer: '125', width: 100 }],
      },
      hint: '\\( \\frac{p}{r} = \\frac{0.5q}{0.4q} \\) — the \\( q \\) is a middleman.',
      explain: '\\( \\frac{0.5}{0.4} = 1.25 = 125\\% \\). Percents of percents are just cancel-the-middle from Lesson 4.2 — and yes, more than 100% is the right answer, since \\( p > r \\).',
      coach: ['Write both as multiples of q and divide.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'Ms. A owns a \\$10,000 home, sells it to Ms. B at a 10% profit, then buys it back at a 10% loss. The result?',
      body: 'AHSME 1955. Percent of WHAT? — always ask.',
      interaction: {
        type: 'mcq',
        options: [
          'A comes out \\$1100 ahead',
          'A breaks even',
          'A comes out \\$1000 ahead',
          'A comes out \\$100 behind',
        ],
        correct: 0,
      },
      hint: 'The 10% profit is measured on \\$10,000. The 10% loss is measured on the NEW price.',
      explain: 'A sells for \\( 10000 \\times 1.1 = \\$11{,}000 \\). B then sells back at 10% off <em>\\$11,000</em>: \\( 11000 \\times 0.9 = \\$9900 \\). A collected 11,000, paid 9900, and owns the house again: <b>\\$1100 ahead</b>. The bases differ mid-problem — that asymmetry is the entire puzzle.',
      coach: ['Track the actual dollar amounts of each sale.', 'Whose price is the second 10% measured against?'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'A town&rsquo;s population grew by 1200 people, then shrank by 11%, leaving 32 fewer people than before the growth. What was the original population?',
      body: 'AHSME 1974. One clean linear equation — IF the multiplier habit holds.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'population', answer: '10000', width: 120 }],
      },
      hint: 'The −11% is a \\( \\times 0.89 \\) applied to \\( P + 1200 \\). The result is \\( P - 32 \\).',
      explain: '\\( 0.89(P + 1200) = P - 32 \\) → \\( 0.89P + 1068 = P - 32 \\) → \\( 0.11P = 1100 \\) → \\( P = 10{,}000 \\). Check: 11,200 drops 11% to 9968, which is exactly \\( 10{,}000 - 32 \\) ✓.',
      walkthrough: [
        'Name the original population \\( P \\). After the growth: \\( P + 1200 \\).',
        'The 11% decrease is one multiplier — \\( \\times 0.89 \\) — applied to the grown population: \\( 0.89(P + 1200) \\).',
        '&ldquo;32 fewer than before the growth&rdquo; anchors to \\( P \\): the final count is \\( P - 32 \\). Set them equal.',
        'Expand and collect: \\( 0.89P + 1068 = P - 32 \\), so \\( 0.11P = 1100 \\) and \\( P = 10{,}000 \\). Verify: \\( 11{,}200 \\times 0.89 = 9968 = P - 32 \\) ✓.',
      ],
      success: 'The multiplier habit turned a two-stage percent story into one line of Chapter-3 algebra.',
      note: 'In percent word problems, decide what each percent is a percent OF before writing anything. Here the 11% acted on the grown population; the 32 was anchored to the original.',
      coach: ['Write the population after each event in order.', 'What quantity does the 11% act on — original or grown?', 'Where does the &ldquo;32 fewer&rdquo; comparison point?'],
    },
  ],
};
