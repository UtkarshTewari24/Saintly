/* Lesson 4.3 — Conversion Factors.
   The unit-cancellation chain runs on the balance component: factor tiles are ops,
   wrong orientations transform into visible unit-garbage detour states. */

export default {
  id: 'lesson-4-4',
  title: 'Conversion Factors',
  kicker: 'Proportions',
  topicIndex: 3,
  lessonIndex: 3,
  next: 'interactive-lesson.html?chapter=4&lesson=5',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'A friend from Canada is 180 cm tall. How do you get that into feet? (1 in = 2.54 cm, 1 ft = 12 in.)',
      body: 'Pick your route. Getting it wrong here is cheap — and instructive.',
      interaction: {
        type: 'mcq',
        options: [
          'Divide by 2.54, then divide by 12',
          'Multiply by 2.54, then multiply by 12',
          'Divide by 12, then multiply by 2.54',
          'Multiply by 2.54, then divide by 12',
        ],
        correct: 0,
      },
      hint: 'Centimeters are small, feet are big — the number of feet must come out much smaller than 180.',
      explain: 'cm → in shrinks the number (÷2.54 ≈ 70.9), and in → ft shrinks again (÷12 ≈ 5.9 ft). Multiplying by 2.54 would give 457 of something — and that something isn&rsquo;t feet. The next beats build a machine that makes this choice automatic.',
      coach: ['Sanity bound: a person is 5-to-6 feet tall. Which route lands there?'],
    },
    {
      prompt: 'The whole trick: a conversion factor equals 1.',
      interaction: {
        type: 'reveal',
        face: '\\( 1 \\text{ in} = 2.54 \\text{ cm} \\). Divide both sides by either quantity…',
        cta: 'Tap for the two factors',
        hidden: '\\( \\dfrac{1 \\text{ in}}{2.54 \\text{ cm}} = 1 \\quad \\text{and} \\quad \\dfrac{2.54 \\text{ cm}}{1 \\text{ in}} = 1 \\). Multiplying by 1 never changes a value — only its clothes. Chapter 1 callback: this is exactly the rationalizing-the-denominator move, &ldquo;multiply by a clever form of 1.&rdquo; Your only job is choosing WHICH form: the one whose bottom unit cancels the unit you want gone.',
      },
      success: 'Every conversion is multiplication by 1, oriented so the unwanted unit cancels.',
      coach: ['What happens to a quantity when you multiply it by 1?'],
    },
    {
      prompt: 'Build the chain: convert 180 cm to feet.',
      body: 'Snap factor tiles on. Matching units on opposite levels cancel; mismatched ones pile up — and the pile-ups are allowed, so experiment.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 180 \\text{ cm} \\)' },
          bad1: { eq: '\\( 180 \\text{ cm} \\times \\dfrac{2.54 \\text{ cm}}{1 \\text{ in}} = 457.2\\; \\dfrac{\\text{cm}^2}{\\text{in}} \\)', note: 'Nothing cancelled — the cm landed on top of another cm and you&rsquo;ve manufactured square-centimeters-per-inch, a unit of pure nonsense. The factor was upside down. Undo.' },
          s1: { eq: '\\( 180 \\text{ cm} \\times \\dfrac{1 \\text{ in}}{2.54 \\text{ cm}} \\approx 70.87 \\text{ in} \\)' },
          bad2: { eq: '\\( 70.87 \\text{ in} \\times \\dfrac{12 \\text{ in}}{1 \\text{ ft}} = 850.4\\; \\dfrac{\\text{in}^2}{\\text{ft}} \\)', note: 'Square-inches-per-foot. Same disease, same cure: flip the tile so the in sits on the bottom. Undo.' },
          win: { eq: '\\( \\approx 5.91 \\text{ ft} \\)', note: 'And the finishing move: nobody says &ldquo;5.91 ft&rdquo;. The leftover \\( 0.91 \\text{ ft} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} \\approx 10.9 \\text{ in} \\) — your friend is 5&prime;11&Prime;. Usable units are part of the job. (Also: no rounding until the END — rounding mid-chain compounds.)' },
        },
        ops: [
          { label: '\\( \\times \\, \\dfrac{1 \\text{ in}}{2.54 \\text{ cm}} \\)', to: { s0: 's1' }, blocked: 'No loose cm left to cancel.' },
          { label: '\\( \\times \\, \\dfrac{2.54 \\text{ cm}}{1 \\text{ in}} \\)', to: { s0: 'bad1' }, blocked: 'That would stack even more cm on top.' },
          { label: '\\( \\times \\, \\dfrac{1 \\text{ ft}}{12 \\text{ in}} \\)', to: { s1: 'win' }, blocked: 'There are no inches to cancel yet — deal with the cm first.' },
          { label: '\\( \\times \\, \\dfrac{12 \\text{ in}}{1 \\text{ ft}} \\)', to: { s1: 'bad2' }, blocked: 'No feet on board yet for this to act on.' },
        ],
      },
      hint: 'Point each tile so its BOTTOM unit matches the unit you currently hold.',
      success: 'cm struck through, in struck through, ft survived. The units did the thinking.',
      note: 'Chain rule of conversions: keep multiplying by forms of 1 until only the target unit survives. If a wrong orientation slips in, the units instantly tattle — cm² is not a length.',
      coach: ['You hold cm. Which tile has cm on the bottom?', 'After inches, one more tile finishes it.'],
    },
    {
      prompt: 'Someone converted 3 miles to centimeters. Tap the broken step.',
      interaction: {
        type: 'errorhunt',
        lines: [
          { text: '\\( 3 \\text{ mi} \\times \\dfrac{5280 \\text{ ft}}{1 \\text{ mi}} = 15840 \\text{ ft} \\)' },
          { text: '\\( 15840 \\text{ ft} \\times \\dfrac{12 \\text{ in}}{1 \\text{ ft}} = 190080 \\text{ in} \\)' },
          { text: '\\( 190080 \\text{ in} \\times \\dfrac{1 \\text{ in}}{2.54 \\text{ cm}} = 74835 \\text{ cm} \\)', wrong: true },
        ],
      },
      hint: 'Read each factor&rsquo;s units: does the bottom cancel what&rsquo;s being carried?',
      explain: 'Step 3&rsquo;s factor has in on TOP — inches times inches gives in²/cm, not cm. The right tile is \\( \\frac{2.54 \\text{ cm}}{1 \\text{ in}} \\), giving \\( 482{,}803 \\) cm. Steps 1 and 2 cancel cleanly (mi kills mi, ft kills ft).',
      note: 'Grading your own chains is mechanical: every factor&rsquo;s bottom unit must match the unit arriving from the left. Any factor failing that is upside down.',
      coach: ['Trace the units left to right, striking through matches.', 'Which line leaves its incoming unit un-struck?'],
    },
    {
      prompt: 'Area units bite: converting ft&sup2; needs the factor how many times? And 1 yd&sup2; is how many ft&sup2;?',
      body: 'A square yard is a yard by a yard — draw it before answering the second box.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'factors of (0.3048 m / 1 ft) for ft² → m²', answer: '2', width: 110 },
          { label: '1 yd² = ? ft²', answer: '9', width: 110 },
        ],
      },
      hint: 'ft² is ft·ft — one factor kills one ft and leaves the other stranded.',
      explain: 'Squared units need the factor <em>squared</em>: two copies for ft² → m². And a square yard is 3 ft × 3 ft = <b>9</b> ft², not 3. (Cubed units — like the m³ in kg/m³ — take three copies, flipped so the m³ cancels from wherever it sits, even a denominator.)',
      note: 'The exponent on the unit is the exponent on the factor. \\( \\text{ft}^2 \\) needs \\( \\left(\\frac{0.3048 \\text{ m}}{1 \\text{ ft}}\\right)^{\\!2} \\); \\( \\text{m}^3 \\) downstairs needs the cube pointed the other way.',
      coach: ['Write ft² as ft·ft and cancel one at a time.', 'How many 1-ft squares tile a 3-ft square?'],
    },
    {
      prompt: 'Trickier: converting \\( 16.2 \\; \\text{in}^2 \\cdot \\text{oz}^{-1} \\) to \\( \\text{cm}^2 \\cdot \\text{g}^{-1} \\). The \\( \\text{oz}^{-1} \\) forces its factor to point which way?',
      body: '\\( \\text{oz}^{-1} \\) means oz lives in the <em>denominator</em>. To cancel a downstairs unit, the factor must carry it upstairs.',
      interaction: {
        type: 'mcq',
        shuffle: false,
        options: [
          'oz on top: \\( \\times \\, \\dfrac{1 \\text{ oz}}{28.35 \\text{ g}} \\)',
          'oz on the bottom: \\( \\times \\, \\dfrac{28.35 \\text{ g}}{1 \\text{ oz}} \\)',
        ],
        correct: 0,
      },
      hint: 'The oz you&rsquo;re killing is BELOW the fraction bar. Where must the factor&rsquo;s oz sit to meet it?',
      explain: 'A downstairs oz cancels only against an upstairs oz: \\( \\times \\frac{1 \\text{ oz}}{28.35 \\text{ g}} \\), which correctly leaves g downstairs. (The in² part takes \\( 2.54^2 \\) as usual — two independent conversions, one chain.) The unit&rsquo;s <em>position</em> dictates the factor&rsquo;s orientation; negative exponents just mean &ldquo;position: bottom.&rdquo;',
      note: 'Rule that never fails: orient every factor so the unit you&rsquo;re removing appears on the OPPOSITE level. Positive exponent → factor&rsquo;s copy goes below; negative exponent → above.',
      coach: ['Rewrite \\( \\text{oz}^{-1} \\) as &ldquo;oz on the bottom&rdquo;.', 'Cancellation needs one copy up, one copy down.'],
    },
    {
      prompt: 'If 4 gleeps equal 3 glops, and 2 glops equal 5 glips: convert 10 gleeps to glips.',
      body: 'You have no idea what a gleep is. Neither does the machinery — that&rsquo;s the point.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'glips', answer: '18.75', accept: ['75/4'], width: 110 }],
      },
      hint: 'Chain: \\( 10 \\text{ gleeps} \\times \\frac{3 \\text{ glops}}{4 \\text{ gleeps}} \\times \\frac{5 \\text{ glips}}{2 \\text{ glops}} \\).',
      explain: 'Gleeps cancel, glops cancel: \\( 10 \\times \\frac34 \\times \\frac52 = 18.75 \\) glips. The method is unit-agnostic — orientation and cancellation carry you through units nobody has ever heard of.',
      coach: ['Build each factor from its equality, bottom unit chosen to cancel.', 'Strike through and multiply what&rsquo;s left.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'A metric calendar has 10 metric-weeks per metric-month and 10 days per metric-week. How many metric-months is 730 days?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'metric-months', answer: '7.3', accept: ['73/10'], width: 110 }],
      },
      hint: '\\( 730 \\text{ d} \\times \\frac{1 \\text{ mw}}{10 \\text{ d}} \\times \\frac{1 \\text{ mm}}{10 \\text{ mw}} \\).',
      explain: 'Two divisions by 10: \\( 730 \\to 73 \\to 7.3 \\) metric-months. Made-up units, standard chain.',
      coach: ['Same gleep machinery, calendar-flavored.'],
    },
    {
      section: 'checkpoint',
      prompt: 'A sprinter runs \\( x \\) feet in \\( y \\) seconds. How many <em>yards</em> does she cover in \\( z \\) <em>minutes</em>?',
      body: 'Fully symbolic — the real test of whether the method or the numbers were doing the work.',
      interaction: {
        type: 'mcq',
        options: ['\\( \\dfrac{20xz}{y} \\)', '\\( \\dfrac{xz}{180y} \\)', '\\( \\dfrac{3xz}{20y} \\)', '\\( \\dfrac{20y}{xz} \\)'],
        correct: 0,
      },
      hint: 'Chain the rate: \\( \\frac{x \\text{ ft}}{y \\text{ s}} \\times \\frac{1 \\text{ yd}}{3 \\text{ ft}} \\times \\frac{60 \\text{ s}}{1 \\text{ min}} \\times z \\text{ min} \\).',
      explain: 'ft cancels, s cancels, min cancels: \\( \\frac{60xz}{3y} = \\frac{20xz}{y} \\) yards. Letters flow through the chain exactly like numbers.',
      coach: ['Start from the rate x/y and multiply by 1 twice, then by the time.', 'Only yd should survive the strikethroughs.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Convert 60 mph to feet per second.',
      body: 'Worth memorizing after you derive it — it anchors the boss problem.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'ft/s', answer: '88', width: 100 }],
      },
      hint: '\\( 60 \\frac{\\text{mi}}{\\text{hr}} \\times \\frac{5280 \\text{ ft}}{1 \\text{ mi}} \\times \\frac{1 \\text{ hr}}{3600 \\text{ s}} \\).',
      explain: '\\( \\frac{60 \\times 5280}{3600} = 88 \\) ft/s. The pocket version: mph × \\( \\frac{22}{15} \\) = ft/s.',
      coach: ['Two tiles: one kills miles, one kills hours.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Finish the height conversion: \\( 5.9 \\text{ ft} = 5 \\text{ ft} \\; ? \\text{ in} \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'inches', answer: '10.8', accept: ['54/5'], width: 100 }],
      },
      hint: 'Only the leftover 0.9 ft converts.',
      explain: '\\( 0.9 \\text{ ft} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}} = 10.8 \\text{ in} \\) — so 5&prime;10.8&Prime;, which any human rounds to 5&prime;11&Prime;.',
      coach: ['Split 5.9 into the whole feet and the decimal part first.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Train rails are 30 feet long, and each joint makes a click. Your speed in miles per hour is approximately the number of clicks you hear in…',
      body: 'AHSME 1953 — a conversion chain wearing a puzzle&rsquo;s clothes. Let the speed be \\( x \\) mph and hunt the time window.',
      interaction: {
        type: 'mcq',
        options: ['20 seconds', '2 minutes', '30 seconds', '55 seconds'],
        correct: 0,
      },
      hint: 'Clicks per second at \\( x \\) mph: \\( x \\, \\frac{\\text{mi}}{\\text{hr}} \\times \\frac{5280 \\text{ ft}}{1 \\text{ mi}} \\times \\frac{1 \\text{ hr}}{3600 \\text{ s}} \\times \\frac{1 \\text{ click}}{30 \\text{ ft}} \\). Then: how many seconds until the click COUNT equals \\( x \\)?',
      explain: 'The chain gives \\( \\frac{5280x}{3600 \\times 30} = \\frac{11x}{225} \\) clicks per second. Clicks in \\( T \\) seconds: \\( \\frac{11xT}{225} \\). Setting that equal to \\( x \\): \\( T = \\frac{225}{11} \\approx 20.5 \\) seconds — so listening for about <b>20 seconds</b> and counting clicks reads your speed in mph.',
      walkthrough: [
        'Name the speed \\( x \\) mph and build the click-rate chain: \\( x \\frac{\\text{mi}}{\\text{hr}} \\times \\frac{5280 \\text{ ft}}{\\text{mi}} \\times \\frac{\\text{hr}}{3600 \\text{ s}} \\times \\frac{\\text{click}}{30 \\text{ ft}} \\).',
        'Strike through mi, hr, ft: what survives is \\( \\frac{5280x}{108000} = \\frac{11x}{225} \\) clicks per second.',
        'In \\( T \\) seconds you hear \\( \\frac{11x}{225} \\, T \\) clicks. The puzzle wants clicks \\( = x \\): \\( \\frac{11xT}{225} = x \\).',
        'The \\( x \\) cancels — the window works at ANY speed: \\( T = \\frac{225}{11} \\approx 20.45 \\), i.e. about 20 seconds. Count clicks for 20 seconds, and you&rsquo;ve read the speedometer with your ears.',
      ],
      success: 'A four-tile chain, one cancellation, and a party trick you can actually use on a train.',
      note: 'The deepest move: the answer didn&rsquo;t depend on \\( x \\). When a &ldquo;rate reads itself&rdquo; puzzle appears, expect the unknown to cancel — that&rsquo;s what makes the trick universal.',
      coach: ['First find clicks per second at speed \\( x \\) — pure chain work.', 'The question asks when click-count equals the mph number.', 'Watch the \\( x \\) cancel: the window is speed-independent.'],
    },
  ],
};
