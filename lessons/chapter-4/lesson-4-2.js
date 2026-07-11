/* Lesson 4.1b — Inverse and Joint Proportion.
   Inverse = constant product; joint = assemble the constant; clocks by method, not formula. */

export default {
  id: 'lesson-4-2',
  title: 'Inverse and Joint Proportion',
  kicker: 'Proportions',
  topicIndex: 3,
  lessonIndex: 1,
  next: 'interactive-lesson.html?chapter=4&lesson=3',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'A rectangle&rsquo;s area is locked at 40. Drag the length.',
      body: 'Last lesson the interesting readout was a quotient. Watch what&rsquo;s constant now.',
      interaction: {
        type: 'slider',
        min: 2, max: 10, step: 2, value: 2, label: 'length', mustExplore: 4,
        render(l) {
          const w = 40 / l;
          const wStr = Number.isInteger(w) ? String(w) : `40/${l}`;
          return {
            main: `\\( \\ell = ${l}, \\quad w = ${Number.isInteger(w) ? w : `\\tfrac{40}{${l}}`} \\)`,
            sub: `ℓ × w = ${l} × ${wStr} = 40. One goes up, the other comes down — the PRODUCT is the constant.`,
          };
        },
      },
      success: 'Direct proportion: constant quotient. Inverse proportion: constant product. That one sentence is the whole section.',
      note: '<b>Inverse proportion = constant product.</b> Find \\( k = xy \\) from one data point, then reuse it — never set up a quotient for an inverse relationship.',
      coach: ['Multiply the two readouts at a few positions.'],
    },
    {
      prompt: '\\( x \\) and \\( y \\) are inversely proportional, and \\( x = 10 \\) when \\( y = 6 \\). Find \\( x \\) when \\( y = 4 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '15', width: 100 }],
      },
      hint: 'One product pins the constant: \\( k = 10 \\times 6 \\).',
      explain: '\\( k = 60 \\), so \\( x \\cdot 4 = 60 \\) gives \\( x = 15 \\). Note \\( y \\) dropped and \\( x \\) rose — inverse behavior, as promised.',
      coach: ['Compute the constant product first.', 'Then divide it by the new y.'],
    },
    {
      prompt: 'Gas at constant temperature: pressure and volume are inversely proportional. The pressure rises 25%. The volume drops by…',
      body: 'Commit before you compute — this trap has a 90% catch rate.',
      interaction: {
        type: 'mcq',
        options: ['20%', '25%', '80%', '12.5%'],
        correct: 0,
      },
      hint: 'Pressure \\( \\times 1.25 \\). What must volume be multiplied by to keep the product fixed?',
      explain: 'The product must survive: \\( 1.25 \\times m = 1 \\), so \\( m = 0.8 \\) — volume becomes 80% of itself, a <b>20%</b> drop, not 25. Up-25-down-25 would multiply to \\( 1.25 \\times 0.75 = 0.9375 \\ne 1 \\).',
      note: 'Percent changes on inversely-related quantities are NOT mirror images. Multipliers, not percents, are what invert cleanly. (This exact idea returns in the percent lesson.)',
      coach: ['Write the 25% rise as a multiplier.', 'The two multipliers must multiply to 1.'],
    },
    {
      prompt: '\\( x \\) varies jointly as \\( y \\) and \\( z \\), and inversely as \\( w \\). When \\( y=5, z=1, w=1 \\): \\( x = 3 \\). Find \\( x \\) when \\( y=2, z=5, w=3 \\).',
      body: 'The skill is <em>assembling the constant</em>: direct-partners go under \\( x \\)&rsquo;s fraction bar&rsquo;s far side, the inverse-partner joins \\( x \\). Here: \\( \\dfrac{xw}{yz} = k \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'k =', answer: '3/5', accept: ['0.6'], width: 100 },
          { label: 'x =', answer: '2', width: 100 },
        ],
      },
      hint: 'First triple: \\( k = \\frac{3 \\cdot 1}{5 \\cdot 1} \\). Then solve \\( \\frac{x \\cdot 3}{2 \\cdot 5} = k \\).',
      explain: '\\( k = \\frac{3}{5} \\). Second triple: \\( \\frac{3x}{10} = \\frac{3}{5} \\), so \\( x = 2 \\). One constant, found once, reused forever — that&rsquo;s all joint proportion is.',
      note: 'Assembling the constant: everything \\( x \\) is directly proportional to goes opposite \\( x \\); everything inverse goes on \\( x \\)&rsquo;s side. Then \\( k \\) never lies.',
      coach: ['Which letters are direct partners of \\( x \\)? They divide.', 'The inverse partner \\( w \\) multiplies \\( x \\).', 'Plug the first data point in to get \\( k \\), the second to get \\( x \\).'],
    },
    {
      prompt: 'Three people build 2 houses in 12 days. Days are related to houses and people how?',
      body: 'Don&rsquo;t memorize — reason physically, one pair at a time.',
      interaction: {
        type: 'mcq',
        options: [
          'Directly with houses, inversely with people',
          'Directly with both',
          'Inversely with houses, directly with people',
          'Inversely with both',
        ],
        correct: 0,
      },
      hint: 'More houses, same crew — more or fewer days? More people, same houses — more or fewer days?',
      explain: 'More houses need more time (direct); more people need less time (inverse). So \\( \\frac{\\text{houses}}{\\text{people} \\times \\text{days}} = k \\) — the formula assembles itself from two physical calls.',
      coach: ['Hold one quantity fixed and wiggle the other.'],
    },
    {
      prompt: 'So: how many days do 2 people need to build 6 houses?',
      body: 'Same data — 3 people, 2 houses, 12 days. Find \\( k \\), reuse \\( k \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'days', answer: '54', width: 100 }],
      },
      hint: '\\( k = \\frac{2}{3 \\times 12} = \\frac{1}{18} \\) houses per person-day.',
      explain: '\\( \\frac{6}{2 \\times d} = \\frac{1}{18} \\) gives \\( d = 54 \\) days. Triple the houses and two-thirds the crew: \\( 12 \\times 3 \\times \\frac{3}{2} = 54 \\) checks out.',
      coach: ['The constant even has a physical name: houses per person-day.', 'Set up the second scenario with the same constant.'],
    },
    {
      prompt: 'Six hens lay 24 eggs in 4 days. How many days for 8 hens to lay 40 eggs?',
      body: 'Chapter 3&rsquo;s crew problems, now with cleaner machinery.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'days', answer: '5', width: 100 }],
      },
      hint: 'Eggs per hen-day first.',
      explain: '\\( \\frac{24}{6 \\times 4} = 1 \\) egg per hen-day. Then \\( 40 = 8 \\times d \\times 1 \\), so \\( d = 5 \\) days. Same person-days idea as the road crews in Chapter 3 — joint proportion just names it.',
      coach: ['This is a houses-people-days problem with feathers.'],
    },
    {
      prompt: 'Three men working 4 weeks earn \\$108 (shared equally). How many weeks must 5 men work to earn \\$135?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'weeks', answer: '3', width: 100 }],
      },
      hint: 'Dollars per man-week: \\( \\frac{108}{3 \\times 4} \\).',
      explain: '\\$9 per man-week. \\( 135 = 5 \\times w \\times 9 \\) gives \\( w = 3 \\) weeks.',
      coach: ['Wages vary jointly with men and weeks.'],
    },
    {
      prompt: 'It&rsquo;s 4:00. Scrub time forward and watch both hands.',
      body: 'The minute hand starts at 0, the hour hand at the 20-minute mark — and the hour hand <em>moves</em>: one mark per 12 minutes.',
      interaction: {
        type: 'slider',
        min: 0, max: 24, step: 3, value: 0, label: 'minutes after 4:00', mustExplore: 4,
        render(x) {
          const hour = 20 + x / 12;
          const gap = Math.round((hour - x) * 100) / 100;
          return {
            main: `\\( \\text{minute hand at } ${x}, \\quad \\text{hour hand at } ${Math.round(hour * 100) / 100} \\)`,
            sub: gap > 0 ? `The minute hand still trails by ${gap} marks — keep going.` : `The minute hand has passed the hour hand — the catch happened between the last two stops.`,
          };
        },
      },
      success: 'Both positions are simple functions of time. Setting them equal is the entire method.',
      note: 'DON&rsquo;T memorize clock formulas. Write each hand&rsquo;s position as a function of \\( x \\) minutes — minute hand at \\( x \\), hour hand at \\( \\text{start} + \\frac{x}{12} \\) — and demand whatever the problem demands.',
      coach: ['Watch where the readouts cross sign.'],
    },
    {
      prompt: 'Exactly when after 4:00 do the hands coincide?',
      body: 'Set the two position functions equal: \\( x = 20 + \\frac{x}{12} \\). Answer as an improper fraction of minutes.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'minutes', answer: '240/11', width: 110 }],
      },
      hint: 'Multiply through by 12 to clear the fraction.',
      explain: '\\( 12x = 240 + x \\) gives \\( 11x = 240 \\), so \\( x = \\frac{240}{11} = 21\\frac{9}{11} \\) minutes — about 4:21:49. The naive answer 20 forgets the hour hand crawls forward while the minute hand chases it.',
      coach: ['Where is each hand after \\( x \\) minutes?', 'Coincide means equal positions. One linear equation.'],
    },
    {
      prompt: 'Two joggers run a loop in opposite directions. One takes 56 s per lap; they pass each other every 24 s. The other&rsquo;s lap time?',
      body: 'Callback to Chapter 3 currents: opposing motions combine by <em>adding</em> rates.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'seconds', answer: '42', width: 100 }],
      },
      hint: 'In laps per second: \\( \\frac{1}{56} + \\frac{1}{t} = \\frac{1}{24} \\) — together they cover one full lap between meetings.',
      explain: '\\( \\frac{1}{t} = \\frac{1}{24} - \\frac{1}{56} = \\frac{7 - 3}{168} = \\frac{1}{42} \\), so \\( t = 42 \\) s. Rates add when directions oppose; the work-problem algebra finishes it.',
      coach: ['Between meetings the two of them jointly complete one lap.', 'Convert lap times to lap rates.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: '\\( y^2 \\) varies inversely as \\( x^3 \\), and \\( y = 6 \\) when \\( x = 2 \\). Find the positive \\( y \\) when \\( x = \\tfrac12 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'y =', answer: '48', width: 100 }],
      },
      hint: 'The constant is \\( y^2 x^3 \\) — powers ride inside the proportion untouched.',
      explain: '\\( k = 36 \\times 8 = 288 \\). At \\( x = \\frac12 \\): \\( y^2 = 288 \\div \\frac18 = 2304 \\), so \\( y = 48 \\).',
      coach: ['Inverse means the PRODUCT \\( y^2x^3 \\) is constant.', '\\( (1/2)^3 = 1/8 \\). Dividing by it multiplies by 8.'],
    },
    {
      section: 'checkpoint',
      prompt: '\\( x \\) varies inversely as \\( y \\); \\( x = \\tfrac23 \\) when \\( y = \\tfrac34 \\). Find \\( x \\) when \\( y = \\tfrac16 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '3', width: 100 }],
      },
      hint: 'Fractions change nothing: \\( k = \\frac23 \\cdot \\frac34 \\).',
      explain: '\\( k = \\frac12 \\), so \\( x = \\frac{1/2}{1/6} = 3 \\).',
      coach: ['Constant product, then divide by the new y.'],
    },
    {
      section: 'checkpoint',
      prompt: '\\( x \\) varies directly as \\( y \\) and inversely as \\( z^2 \\); \\( x = 6 \\) when \\( y = 3, z = 1 \\). Find \\( x \\) when \\( y = 9, z = 3 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '2', width: 100 }],
      },
      hint: 'Assemble: \\( \\frac{xz^2}{y} = k \\).',
      explain: '\\( k = \\frac{6 \\cdot 1}{3} = 2 \\). Then \\( x = \\frac{ky}{z^2} = \\frac{2 \\cdot 9}{9} = 2 \\). The tripled \\( y \\) and tripled \\( z \\) fight — and \\( z^2 \\) wins.',
      coach: ['Direct partner divides, inverse partner (squared!) multiplies \\( x \\).'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'If \\( x \\) is proportional to \\( y^3 \\), and \\( y \\) is proportional to \\( z^{1/5} \\), then \\( x \\) is proportional to \\( z^n \\) for \\( n = \\; ? \\)',
      body: 'AHSME 1954 — one line, if Chapter 1&rsquo;s exponent rules are still warm.',
      interaction: {
        type: 'mcq',
        options: ['\\( \\dfrac{3}{5} \\)', '\\( \\dfrac{5}{3} \\)', '\\( 15 \\)', '\\( 3 \\)'],
        correct: 0,
      },
      hint: 'Substitute: \\( x \\propto (z^{1/5})^3 \\). Power of a power…',
      explain: '\\( x \\propto y^3 \\propto (z^{1/5})^3 = z^{3/5} \\). Proportions compose by substitution, and exponents multiply — Chapter 1&rsquo;s rule doing chapter 4&rsquo;s work.',
      coach: ['Replace \\( y \\) with its \\( z \\) expression inside \\( y^3 \\).'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Between 10:00 and 11:00, six minutes from now the minute hand will point exactly opposite where the hour hand pointed three minutes ago. What time is it?',
      body: 'MA&copy; 1991. Answer with the number of minutes past 10:00. Positions as functions of time — the beat-9 method carries the whole thing.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'minutes past 10:00', answer: '15', width: 110 }],
      },
      hint: 'Let now = \\( t \\) minutes past 10:00. Minute hand in 6 min: mark \\( t+6 \\). Hour hand 3 min ago: mark \\( 50 + \\frac{t-3}{12} \\). Opposite = 30 marks apart.',
      explain: '\\( t + 6 = 50 + \\frac{t-3}{12} - 30 \\). Multiply by 12: \\( 12t + 72 = 240 + t - 3 \\), so \\( 11t = 165 \\) and \\( t = 15 \\). It&rsquo;s 10:15. Check: at 10:21 the minute hand is at mark 21; at 10:12 the hour hand was at \\( 50 + 1 = 51 \\); and \\( 51 - 21 = 30 \\) ✓.',
      walkthrough: [
        'Name the unknown: \\( t \\) = minutes past 10:00, right now.',
        'Minute hand six minutes from now: mark \\( t + 6 \\).',
        'Hour hand three minutes ago: it starts the hour at mark 50 and crawls one mark per 12 minutes, so mark \\( 50 + \\frac{t-3}{12} \\).',
        '&ldquo;Exactly opposite&rdquo; = 30 marks apart: \\( t + 6 = \\left(50 + \\frac{t-3}{12}\\right) - 30 \\).',
        'Clear the 12: \\( 12t + 72 = 240 + t - 3 \\) → \\( 11t = 165 \\) → \\( t = 15 \\). The time is 10:15 — and the check (21 vs 51) confirms the hands really are opposite.',
      ],
      success: 'No clock formula, no memorized cases: two position functions and one honest linear equation.',
      note: 'Hard clock problems add offsets (&ldquo;six minutes from now&rdquo;, &ldquo;three minutes ago&rdquo;) — the method absorbs them as \\( t+6 \\) and \\( t-3 \\) without breaking stride.',
      coach: ['Everything is a function of &ldquo;now&rdquo;. Name now \\( t \\).', 'Where does the hour hand sit at 10:00 sharp? How fast does it move?', '&ldquo;Opposite&rdquo; on a clock face means how many minute-marks apart?'],
    },
  ],
};
