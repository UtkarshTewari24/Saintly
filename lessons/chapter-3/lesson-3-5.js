/* Lesson 3.4c — Word Problems III: Work. rate × time = job done.
   Work problems ARE motion problems: someone who finishes in T hours works at 1/T
   jobs per hour, rates add, and the job total is 1. */

export default {
  id: 'lesson-3-5',
  title: 'Word Problems III: Work',
  kicker: 'Linear Equations',
  topicIndex: 2,
  lessonIndex: 4,
  next: 'interactive-lesson.html?chapter=4&lesson=1',
  notes: 'word-problems.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'You already know this formula.',
      body: 'Motion: rate × time = <em>distance</em>. Work: rate × time = <em>job done</em>. Same machine. So: a pipe fills a pool in 5 hours — what fraction of the pool does it fill per hour?',
      interaction: {
        type: 'mcq',
        options: ['\\( \\dfrac{1}{5} \\)', '\\( 5 \\)', '\\( \\dfrac{1}{4} \\)', 'Depends on the size of the pool'],
        correct: 0,
      },
      hint: 'Whole job = 1. It gets spread across 5 hours.',
      explain: 'One whole pool in 5 hours means \\( \\frac{1}{5} \\) pool per hour. The inversion \\( T \\to \\frac{1}{T} \\) is the entire trick of work problems. And pool size can&rsquo;t matter — &ldquo;the job&rdquo; is 1 by definition, whatever its gallons.',
      note: 'Finishes in \\( T \\) hours \\( \\Rightarrow \\) works at rate \\( \\frac{1}{T} \\) jobs per hour. Rates add when workers cooperate; times never do.',
      coach: ['Call the whole job &ldquo;1&rdquo;. How much of that 1 happens each hour?'],
    },
    {
      prompt: 'Pipe A fills the pool in 5 hours, pipe B in 4. Both on. Before computing: will it take less than 4 hours?',
      body: 'Sanity checks like this kill most work-problem errors before they&rsquo;re born.',
      interaction: {
        type: 'mcq',
        options: [
          'Yes — extra help can&rsquo;t be slower than the faster worker alone',
          'No — about \\( 4\\tfrac12 \\) hours, the average',
          'No — 9 hours: \\( 5 + 4 \\)',
          'Can&rsquo;t tell without the pool&rsquo;s volume',
        ],
        correct: 0,
      },
      hint: 'B alone finishes in 4 hours. Does turning on A slow B down?',
      explain: 'B alone takes 4 hours; adding A only adds water. The answer must beat 4 hours. &ldquo;Average the times&rdquo; (4½) and &ldquo;add the times&rdquo; (9) both fail this smell test instantly — which is exactly why you run it.',
      note: 'Together-time is always <em>less</em> than the fastest worker&rsquo;s solo time. Any answer that isn&rsquo;t: translation error, guaranteed.',
      coach: ['Imagine B working alone. Now add a second hose. Faster or slower?'],
    },
    {
      prompt: 'Now the number: both pipes on, how long to fill the pool?',
      body: 'Example 3-14. Rates add: \\( \\frac15 + \\frac14 \\) of a pool per hour.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'hours, as a fraction', answer: '20/9', width: 120 }],
      },
      hint: 'Combined rate \\( \\frac15 + \\frac14 = \\frac{9}{20} \\). Then rate × time = 1 whole job.',
      explain: '\\( \\frac{9}{20} x = 1 \\) gives \\( x = \\frac{20}{9} \\approx 2.2 \\) hours. Sanity check: under 4 ✓, and more than half of B&rsquo;s solo 4 hours, since A is the slower helper.',
      coach: ['Add the two rates over a common denominator.', 'The job equals 1. Solve rate × time = 1.'],
    },
    {
      prompt: 'A knight can storm a castle in 15 days. With a partner, the pair does it in 10. How long would the partner need alone?',
      body: 'Exercise 3-7 — the subtraction direction.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'days', answer: '30', width: 100 }],
      },
      hint: 'Partner&rsquo;s rate = together-rate − knight&rsquo;s rate = \\( \\frac{1}{10} - \\frac{1}{15} \\).',
      explain: '\\( \\frac{1}{10} - \\frac{1}{15} = \\frac{3-2}{30} = \\frac{1}{30} \\): the partner storms \\( \\frac{1}{30} \\) castle per day, so 30 days alone. Rates subtract cleanly; times \\( (10 - 15?) \\) are meaningless.',
      coach: ['Everything happens in rate-land: convert both times to rates first.', 'Together-rate minus knight-rate leaves exactly the partner.'],
    },
    {
      prompt: 'Multi-phase: Tom and Huck paint a fence for 4 hours, then Jim joins, and all three finish 2 hours later. Without Jim they&rsquo;d have needed 5 more hours. How long would Jim take alone?',
      body: 'Example 3-15 — the hardest worked example in the chapter. Phase bookkeeping: each phase contributes (duration) × (combined rate), and the phases must sum to 1.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'Tom+Huck rate (job/hr)', answer: '1/9', width: 130 },
          { label: 'Jim alone (hr)', answer: '6', width: 110 },
        ],
      },
      hint: '&ldquo;Without Jim, 5 more hours&rdquo; means Tom+Huck alone finish in \\( 4 + 5 = 9 \\) hours total. That pins their combined rate.',
      explain: 'Tom+Huck&rsquo;s rate: \\( \\frac19 \\). Phase 1: \\( 4 \\cdot \\frac19 = \\frac49 \\). Phase 2: \\( 2(\\frac19 + j) \\). Sum to 1: \\( \\frac49 + \\frac29 + 2j = 1 \\), so \\( 2j = \\frac13 \\) and \\( j = \\frac16 \\) — Jim alone takes 6 hours.',
      note: 'Phases sum to 1. Every multi-phase problem is that single sentence plus arithmetic.',
      coach: ['First decode the counterfactual: how long would Tom+Huck need for the whole fence?', 'Write each phase as duration × combined rate.', 'The two phases and nothing else must add to 1 whole fence.'],
    },
    {
      prompt: 'Phase solo: Brenda can do a job in 12 days. She works alone for 3 days, then Adam joins her, and together they finish in 3 more days. How many days would <em>Adam</em> need alone?',
      body: 'Read the question. It asks for Adam.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'Adam alone (days)', answer: '6', width: 110 }],
      },
      hint: 'Phase 1: \\( 3 \\cdot \\frac{1}{12} \\). Phase 2: \\( 3(\\frac{1}{12} + a) \\). Sum = 1.',
      explain: '\\( \\frac{3}{12} + \\frac{3}{12} + 3a = 1 \\) gives \\( 3a = \\frac12 \\), so \\( a = \\frac16 \\): Adam does \\( \\frac16 \\) job per day → 6 days alone. (If you answered 3, you found the phase-2 duration; if 12, Brenda. The question asked for Adam.)',
      coach: ['Two phases again — write each as duration × rate.', 'Solve for Adam&rsquo;s RATE first, then flip it into days.'],
    },
    {
      prompt: 'Crew scaling: 25 women complete \\( \\tfrac15 \\) of a job in 8 days. The rest must be done in 20 more days. How many women (total) must work those 20 days?',
      body: 'MATHCOUNTS 1989. New wrinkle: the crew&rsquo;s rate is proportional to its size — think in person-days.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'women', answer: '40', width: 100 }],
      },
      hint: 'From the first phase, one woman-day accomplishes \\( \\frac{1/5}{25 \\times 8} = \\frac{1}{1000} \\) of the job.',
      explain: 'Remaining work: \\( \\frac45 = 800 \\) woman-days&rsquo; worth. Spread over 20 days: \\( 800/20 = 40 \\) women — 15 more than the original crew. Note the inverse feel: to go faster you divide by the time, not multiply.',
      note: 'Person-days measure work like miles measure distance. Doubling the crew halves the time — inverse, not linear.',
      coach: ['Use phase 1 to price a single woman-day.', 'How many woman-days does the remaining \\( \\frac45 \\) cost?', 'Divide that cost by the 20 available days.'],
    },
    {
      prompt: 'Crew solo: 12 workers plan to pave a road in 18 days. After 6 days, 6 more workers join. How many days does the whole job take?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'days total', answer: '14', width: 100 }],
      },
      hint: 'The job costs \\( 12 \\times 18 = 216 \\) worker-days. Phase 1 spends \\( 12 \\times 6 = 72 \\) of them.',
      explain: 'Remaining: \\( 216 - 72 = 144 \\) worker-days for a crew of 18 → 8 more days. Total: \\( 6 + 8 = 14 \\) days.',
      coach: ['Price the whole job in worker-days first.', 'Phase 2 has 18 workers chewing through what&rsquo;s left.'],
    },
    {
      prompt: 'Three valves: A+B+C fill a tank in 1 hour, A+C in 1.5 hours, B+C in 2 hours. How long for A+B?',
      body: 'AHSME 1973. No phases, no story — just rates. Word problems are systems wearing costumes, and this one barely bothered with the costume.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'hours', answer: '6/5', accept: ['1.2'], width: 110 }],
      },
      hint: 'In rates: \\( a+b+c = 1 \\), \\( a+c = \\frac23 \\), \\( b+c = \\frac12 \\). Pure Lesson 3.3 elimination.',
      explain: 'Subtracting: \\( b = 1 - \\frac23 = \\frac13 \\) and \\( a = 1 - \\frac12 = \\frac12 \\). So \\( a + b = \\frac56 \\) tank per hour → \\( \\frac65 = 1.2 \\) hours.',
      coach: ['Convert every clause to a rate equation.', 'Subtract the second equation from the first — what falls out?'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'A father paints a house in 9 days; his son needs 16. They work together for 4 days, then the son leaves. How many more days does the father need?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'days, as a fraction', answer: '11/4', accept: ['2.75'], width: 120 }],
      },
      hint: 'Phase 1 does \\( 4(\\frac19 + \\frac{1}{16}) = \\frac{25}{36} \\) of the house.',
      explain: 'Remaining: \\( \\frac{11}{36} \\), at the father&rsquo;s rate \\( \\frac19 \\): \\( \\frac{11}{36} \\times 9 = \\frac{11}{4} = 2.75 \\) days.',
      coach: ['Two phases; the second has one worker.', 'Time = work remaining ÷ rate.'],
    },
    {
      section: 'checkpoint',
      prompt: 'One hose fills a tub in 6 minutes, another in 3. Together?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'minutes', answer: '2', width: 100 }],
      },
      hint: 'Rates: \\( \\frac16 + \\frac13 \\).',
      explain: '\\( \\frac16 + \\frac13 = \\frac12 \\) tub per minute → 2 minutes. Sanity: under 3 ✓.',
      coach: ['Add rates, then flip.'],
    },
    {
      section: 'checkpoint',
      prompt: '8 workers finish half a job in 6 days. The other half is due in 3 days. How many workers (total) are needed now?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'workers', answer: '16', width: 100 }],
      },
      hint: 'Half a job = \\( 8 \\times 6 = 48 \\) worker-days.',
      explain: 'The second half also costs 48 worker-days, but in 3 days: \\( 48/3 = 16 \\) workers. Half the time, double the crew — the inverse relationship on full display.',
      coach: ['Price half the job in worker-days.', 'Same 48 worker-days of work, but only 3 days to spend them in.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'At a dance with \\( b \\) boys and \\( g \\) girls, the 1st boy dances with 5 girls, the 2nd with 6, the 3rd with 7, … and the last boy dances with all of them. How are \\( b \\) and \\( g \\) related?',
      body: 'AHSME 1958. This fits none of today&rsquo;s templates — which is exactly why it&rsquo;s starred: not everything matches a pattern.',
      interaction: {
        type: 'mcq',
        options: ['\\( b = g - 4 \\)', '\\( b = g + 4 \\)', '\\( g = 5b \\)', '\\( b = g \\)'],
        correct: 0,
      },
      hint: 'Find the pattern: boy #1 → 5 girls, boy #2 → 6, boy #\\(k\\) → ?',
      explain: 'Boy #\\(k\\) dances with \\( k + 4 \\) girls. The last boy is #\\(b\\) and dances with all \\( g \\): \\( b + 4 = g \\), i.e. \\( b = g - 4 \\). No rt-table, no rates — just reading the pattern the problem handed you.',
      coach: ['Tabulate: boy number vs girls danced with.', 'Express the pattern for boy #\\(k\\), then apply it to the last boy.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Alice paints a room in 4 hours, Bob in 12. They start together; after 1 hour Carla joins, and all three finish 1 hour later. How long would Carla need alone?',
      body: 'Everything from this lesson at once: rates, phases, and a read-the-question ask.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'Carla alone (hr)', answer: '3', width: 110 }],
      },
      hint: 'Phase 1: \\( 1 \\cdot (\\frac14 + \\frac1{12}) \\). Phase 2: \\( 1 \\cdot (\\frac14 + \\frac1{12} + c) \\). They sum to 1.',
      explain: 'Alice+Bob rate: \\( \\frac14 + \\frac{1}{12} = \\frac13 \\). Phases: \\( \\frac13 + \\frac13 + c = 1 \\), so \\( c = \\frac13 \\) — Carla paints \\( \\frac13 \\) room per hour, i.e. 3 hours alone. Faster than either of them — nothing in the story forbids it, and the sanity check (total under everyone&rsquo;s solo time) still passes.',
      walkthrough: [
        'Convert the named workers to rates: Alice \\( \\frac14 \\), Bob \\( \\frac{1}{12} \\); together \\( \\frac{3+1}{12} = \\frac13 \\) room per hour.',
        'Phase 1 (Alice+Bob, 1 hour): \\( 1 \\times \\frac13 = \\frac13 \\) of the room.',
        'Phase 2 (all three, 1 hour): \\( \\frac13 + c \\), where \\( c \\) is Carla&rsquo;s rate.',
        'Phases sum to the whole job: \\( \\frac13 + \\frac13 + c = 1 \\) → \\( c = \\frac13 \\).',
        'The question asks for Carla&rsquo;s TIME, not rate: \\( \\frac{1}{c} = 3 \\) hours.',
      ],
      success: 'Chapter 3 complete. Balance solver, systems, translation tables, rt-tables, rates — one toolkit, five lessons, and every word problem is now a system wearing a costume.',
      note: 'The full work-problem playbook: 1 is the job · \\( T \\to \\frac1T \\) · rates add · phases sum to 1 · sanity-check against the fastest worker.',
      coach: ['Get Alice+Bob&rsquo;s combined rate first.', 'Write the two phases and set their sum to 1.', 'You&rsquo;ll find Carla&rsquo;s rate. One more flip gets her time.'],
    },
  ],
};
