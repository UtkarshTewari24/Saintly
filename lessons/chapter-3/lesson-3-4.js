/* Lesson 3.4b — Word Problems II: Motion. rate × time = distance.
   The rt-table (one row per leg: rate | time | distance) is the professional tool;
   here it appears as labeled fill-in grids. Boss: AHSME 1955 train problem. */

export default {
  id: 'lesson-3-4',
  title: 'Word Problems II: Motion',
  kicker: 'Linear Equations',
  topicIndex: 2,
  lessonIndex: 3,
  next: 'interactive-lesson.html?chapter=3&lesson=5',
  notes: 'word-problems.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'You drive 40 miles to town at 40 mph and return at 20 mph. Average speed for the round trip?',
      body: 'The most famous trap in motion problems. Commit to an answer.',
      interaction: {
        type: 'mcq',
        options: [
          '30 mph',
          '\\( 26\\tfrac{2}{3} \\) mph',
          '25 mph',
          'Can&rsquo;t tell — it depends on the distance',
        ],
        correct: 1,
      },
      hint: 'Average speed is total distance over total time. How long did each leg actually take?',
      explain: 'Out: 40 mi at 40 mph = 1 hr. Back: 40 mi at 20 mph = 2 hr. Total: 80 mi in 3 hr = \\( \\frac{80}{3} = 26\\frac{2}{3} \\) mph. The slow leg eats twice the time, so it drags the average below the midpoint 30.',
      note: '<b>Average speed = total distance ÷ total time.</b> Never the average of the speeds — you average over <em>time</em>, and slow legs hog the time.',
      coach: ['Don&rsquo;t average the two speeds. Compute each leg&rsquo;s time.', 'You spent 1 hour at 40 and 2 hours at 20. Which speed dominates?'],
    },
    {
      prompt: 'The rt-table: one row per leg, \\( r \\times t = d \\) across each row.',
      body: 'Rebuild the trap properly. Rate and distance are known; fill the rest.<br><em>Row 1: 40 mph, ? hr, 40 mi &nbsp;·&nbsp; Row 2: 20 mph, ? hr, 40 mi.</em>',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'leg 1 time (hr)', answer: '1', width: 100 },
          { label: 'leg 2 time (hr)', answer: '2', width: 100 },
          { label: 'average speed (mph)', answer: '80/3', accept: ['26.67'], width: 130 },
        ],
      },
      hint: 'Each row: \\( t = d / r \\). Then average = column total of \\( d \\) over column total of \\( t \\).',
      explain: 'Row times: \\( 40/40 = 1 \\) and \\( 40/20 = 2 \\). Totals: 80 mi, 3 hr. Average: \\( \\frac{80}{3} \\) mph. Every motion problem in this lesson is this table with different labels.',
      note: 'The rt-table is the whole method: rows multiply (\\( r \\times t = d \\)), columns add. Equations fall out; nothing is memorized.',
      coach: ['Fill the time column first — one division per row.', 'Total distance and total time live at the bottom of their columns.'],
    },
    {
      prompt: 'Why the distance never mattered.',
      body: 'Same trip, but now the one-way distance \\( d \\) is yours to change. Watch the average.',
      interaction: {
        type: 'slider',
        min: 40, max: 240, step: 40, value: 40, label: 'd (mi)', mustExplore: 4,
        render(d) {
          return {
            main: `\\( \\text{avg} = \\dfrac{${2 * d}\\text{ mi}}{${d / 40} + ${d / 20}\\text{ hr}} = 26\\tfrac{2}{3}\\text{ mph} \\)`,
            sub: `d = ${d} mi each way — and the average refuses to move. Symbolically: 2d ÷ (d/40 + d/20) = 2d ÷ (3d/40) = 80/3. The d cancels.`,
          };
        },
      },
      success: 'The distance cancels out of the algebra — which is why the trap question didn&rsquo;t bother telling you one.',
      note: 'When a problem omits the distance, set it to a variable (or a convenient number like 40) — if the question is answerable, it will cancel.',
      coach: ['Drag to a few values and watch the fraction rebuild itself.'],
    },
    {
      prompt: 'Drill: 120 miles out at 30 mph, back at 40 mph. Average speed for the round trip?',
      body: 'AHSME 1950. Near-clone of the hook — now solo, as a fraction.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'avg (mph), as a fraction', answer: '240/7', width: 130 }],
      },
      hint: 'rt-table: times are \\( 120/30 \\) and \\( 120/40 \\).',
      explain: 'Times: 4 hr and 3 hr. Average: \\( \\frac{240}{7} \\approx 34.3 \\) mph — again below the naive 35, because the slow leg takes longer.',
      coach: ['Two rows, fill the time column.', 'Total distance 240, total time 7.'],
    },
    {
      prompt: 'Current problems: a frog swims 8 miles downstream in 2 hours and back upstream in 14 hours.',
      body: 'Example 3-13. Rate card: still-water speed \\( x \\), current \\( y \\) → downstream row moves at \\( x+y \\), upstream at \\( x-y \\). Rows: \\( (x+y)\\cdot 2 = 8 \\) and \\( (x-y)\\cdot 14 = 8 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'still-water speed (mph)', answer: '16/7', width: 120 },
          { label: 'current (mph)', answer: '12/7', width: 120 },
        ],
      },
      hint: 'The rows say \\( x+y = 4 \\) and \\( x-y = \\frac{8}{14} = \\frac{4}{7} \\). That&rsquo;s last lesson&rsquo;s easiest system.',
      explain: 'Add the equations: \\( 2x = 4 + \\frac47 = \\frac{32}{7} \\), so \\( x = \\frac{16}{7} \\), and \\( y = 4 - \\frac{16}{7} = \\frac{12}{7} \\). The current helps one way and fights the other — that&rsquo;s why the same 8 miles took 7 times longer coming home.',
      note: 'Downstream \\( x+y \\), upstream \\( x-y \\). The current adds to ONE direction only — adding it to both is the classic miss.',
      coach: ['Each rt-row divides down to a plain equation in \\( x+y \\) or \\( x-y \\).', 'You&rsquo;ve seen the system \\( x+y=4, \\; x-y=\\frac47 \\) before. Add.'],
    },
    {
      prompt: 'The litmus test: a canoeist paddles upstream for 2 hours, turns, and rides downstream for 3 hours, ending 20 miles downstream of the start. The current is 2 mph. Find her still-water speed.',
      body: 'MA&copy; 1992. The twist: the two legs <em>oppose</em>, so this time distances subtract. If you get this one, you get them all.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'still-water speed (mph)', answer: '10', width: 120 }],
      },
      hint: 'Downstream distance minus upstream distance = 20. Rows: \\( 3(r+2) \\) down, \\( 2(r-2) \\) up.',
      explain: '\\( 3(r+2) - 2(r-2) = 20 \\) unpacks to \\( 3r + 6 - 2r + 4 = 20 \\), so \\( r = 10 \\). Check: downstream \\( 3 \\times 12 = 36 \\), upstream \\( 2 \\times 8 = 16 \\), net \\( 36 - 16 = 20 \\) ✓.',
      coach: ['Write each leg&rsquo;s distance from its rt-row first.', 'She ends downstream of the start — which leg&rsquo;s distance gets the minus sign?'],
    },
    {
      prompt: 'Chase problems: a car leaves at 2:00 pm at a steady speed. A second car leaves the same place at 4:00 pm, 18 mph faster, and overtakes the first at 9:00 pm. How fast is the first car?',
      body: 'The key insight is one sentence long. Find it before you compute.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'first car (mph)', answer: '45', width: 110 }],
      },
      hint: 'At the overtake moment they&rsquo;ve covered <em>equal distances</em> in <em>different times</em>: 7 hours vs 5 hours.',
      explain: 'Equal distances: \\( 7r = 5(r + 18) \\), so \\( 2r = 90 \\) and \\( r = 45 \\). Check: \\( 7 \\times 45 = 315 = 5 \\times 63 \\) ✓. Durations, not clock times — the 2:00 and 4:00 exist only to give you the 7 and the 5.',
      note: '&ldquo;Overtakes&rdquo; = same place, same moment → set the two distance expressions equal.',
      coach: ['How long has each car been driving at 9:00 pm?', 'What do the two cars have in common at the instant of overtaking?'],
    },
    {
      kicker: 'Starred challenge ★',
      prompt: 'Two dogs trot toward each other at 10 ft/s from 500 ft apart. A flea flies off the first dog&rsquo;s nose at 25 ft/s, bounces between the two noses until the dogs meet. How far does the flea fly?',
      body: 'You could sum the infinite zigzag. Don&rsquo;t.',
      interaction: {
        type: 'reveal',
        face: 'The legendary shortcut is one question: <em>how LONG is the flea in the air?</em>',
        cta: 'Tap for the whole solution',
        hidden: 'The dogs close at \\( 10+10 = 20 \\) ft/s, so they meet in \\( 500/20 = 25 \\) s. The flea flies the entire 25 seconds at 25 ft/s — path shape irrelevant — so it covers \\( 25 \\times 25 = \\mathbf{625} \\) <b>ft</b>. (This is the problem a colleague posed to John von Neumann, who answered instantly. &ldquo;So you saw the trick.&rdquo; — &ldquo;What trick? I summed the series.&rdquo;) Think, don&rsquo;t grind: distance = rate × time works even when the path zigzags.',
      },
      success: 'Total time is often knowable when the path is a mess. Reach for it first.',
      coach: ['Forget the flea. When do the dogs meet?'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Out at 60 mph, back along the same road at 30 mph. Average speed?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'avg (mph)', answer: '40', width: 100 }],
      },
      hint: 'Pick any distance — it cancels. Try 60 miles each way.',
      explain: '60 mi out takes 1 hr; back takes 2 hr: \\( \\frac{120}{3} = 40 \\) mph. Not 45 — the slow leg owns two-thirds of the time.',
      coach: ['Total distance over total time, always.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Jack climbs a 540-ft hill at 90 ft per <em>minute</em> and runs down the same path at 3 ft per <em>second</em>. His average speed for the round trip, in ft/s?',
      body: 'Read the units twice.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'avg (ft/s)', answer: '2', width: 100 }],
      },
      hint: '90 ft/min is 1.5 ft/s. Convert BEFORE the table, not after.',
      explain: 'Up: 540 ft at 1.5 ft/s = 360 s. Down: 540 ft at 3 ft/s = 180 s. Average: \\( \\frac{1080}{540} = 2 \\) ft/s. Rows with mismatched units produce confident nonsense — this table punishes it.',
      coach: ['Are both rates in the same units? Fix that first.', 'Then it&rsquo;s the standard round-trip table.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Two runners circle a 400 m track at 5 m/s and 3 m/s, starting together. When do they first meet running in <em>opposite</em> directions? Running the <em>same</em> direction?',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'opposite (s)', answer: '50', width: 100 },
          { label: 'same (s)', answer: '200', width: 100 },
        ],
      },
      hint: 'Opposite: their speeds add — together they close 400 m. Same: only the <em>gap</em> speed \\( 5-3 \\) matters, and the fast one must gain a full lap.',
      explain: 'Opposite: \\( 400/(5+3) = 50 \\) s. Same direction: \\( 400/(5-3) = 200 \\) s. Current problems and track problems share one idea: combine speeds by adding when motions oppose, subtracting when they agree.',
      coach: ['Opposite directions: how fast does the distance between them shrink?', 'Same direction: meeting again means lapping — gaining 400 m of advantage.'],
    },
    {
      section: 'checkpoint',
      prompt: 'A boat does 6 mph in still water on a river with a 2 mph current. How many hours to travel 24 miles downstream?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'hours', answer: '3', width: 100 }],
      },
      hint: 'Downstream rate: \\( 6 + 2 \\).',
      explain: 'Downstream the current helps: \\( 6+2 = 8 \\) mph, so \\( 24/8 = 3 \\) hr.',
      coach: ['One row: rate \\( x+y \\), distance 24.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'A train travels for 1 hour, then an accident holds it for half an hour; it continues at \\( \\tfrac{3}{4} \\) of its former rate and arrives 3½ hours late. Had the accident happened 90 miles farther along, it would have arrived only 3 hours late. Find the trip length in miles.',
      body: 'AHSME 1955. Multi-leg, plus a what-if second scenario. Build one rt-table per scenario and compare each to the on-time trip.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'trip (mi)', answer: '600', width: 110 }],
      },
      hint: 'Let \\( r \\) be the original rate and \\( D \\) the trip. Scenario 1&rsquo;s lateness gives one equation in \\( D \\) and \\( r \\); the 90-miles-farther scenario gives the second.',
      explain: 'Scenario 1: \\( 1 + \\frac12 + \\frac{D-r}{\\frac34 r} = \\frac{D}{r} + \\frac72 \\) simplifies to \\( D = 10r \\). Scenario 2 (accident at mile \\( r+90 \\)): the same accounting gives \\( D = 8.5r + 90 \\). So \\( 10r = 8.5r + 90 \\), \\( r = 60 \\) mph, and \\( D = 600 \\) miles.',
      walkthrough: [
        'Name the unknowns: original rate \\( r \\), trip length \\( D \\). On-time trip: \\( D/r \\) hours.',
        'Scenario 1 rt-table: leg 1 is 1 hr at \\( r \\) (covers \\( r \\) miles); the stop is \\( \\frac12 \\) hr; leg 2 is \\( D - r \\) miles at \\( \\frac34 r \\), taking \\( \\frac{4(D-r)}{3r} \\) hr.',
        'Lateness = actual − scheduled: \\( \\frac32 + \\frac{4(D-r)}{3r} - \\frac{D}{r} = \\frac72 \\). Multiply through by \\( 3r \\) and simplify: \\( D = 10r \\).',
        'Scenario 2: the train covers \\( r + 90 \\) miles at full speed first (taking \\( \\frac{r+90}{r} \\) hr), same half-hour stop, then \\( D - r - 90 \\) miles at \\( \\frac34 r \\). The 3-hour lateness gives \\( D = 8.5r + 90 \\).',
        'Solve the pair: \\( 10r = 8.5r + 90 \\) → \\( r = 60 \\), so \\( D = 600 \\) miles. Check scenario 1: 1 hr + ½ + \\( \\frac{540}{45} = 12 \\) hr = 13.5 hr vs scheduled 10 — exactly 3.5 late ✓.',
      ],
      success: 'A two-scenario monster reduced to a two-equation system — the rt-table did the bookkeeping, Lesson 3.3 did the rest.',
      coach: ['Two scenarios → two equations. What are the two unknowns?', 'For each scenario write: time spent = scheduled time + lateness.', 'Leg 2&rsquo;s time is distance left over reduced speed: \\( (D-r) \\div \\frac34 r \\).'],
    },
  ],
};
