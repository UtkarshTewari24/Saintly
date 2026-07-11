/* Lesson 3.4a — Word Problems I: Translation (age, digit, coin/ticket).
   The translation table: match each phrase of the problem to the math it becomes.
   Word problems die at the translation step, not the algebra step. */

export default {
  id: 'lesson-3-3',
  title: 'Word Problems I: Translation',
  kicker: 'Linear Equations',
  topicIndex: 2,
  lessonIndex: 2,
  next: 'interactive-lesson.html?chapter=3&lesson=4',
  notes: 'word-problems.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: '&ldquo;Johnny is twice as old as Gina.&rdquo; Which equation says that?',
      body: 'Half of everyone writes this backwards. Settle it now, before anything else.',
      interaction: {
        type: 'mcq',
        shuffle: false,
        cols: true,
        options: ['\\( J = 2G \\)', '\\( 2J = G \\)'],
        correct: 0,
      },
      hint: 'Sanity test: if Gina is 5, Johnny is 10. Plug \\( G=5, J=10 \\) into each equation — which one is true?',
      explain: 'If Gina is 5, Johnny is 10. \\( J = 2G \\) says \\( 10 = 2(5) \\) ✓. \\( 2J = G \\) says \\( 20 = 5 \\) ✗. Johnny is the <em>bigger</em> one, so <em>his</em> letter gets the small multiplication done to the other.',
      note: 'Translate the <b>meaning</b>, never the word order. Then run the sanity test: invent easy numbers and check your equation says what the sentence says.',
      coach: ['Who is older? Whose number is bigger?', 'Test both equations with Gina = 5, Johnny = 10.'],
    },
    {
      prompt: 'The translation table. Build it for the full problem.',
      body: '<em>&ldquo;Johnny is twice as old as Gina. The sum of their ages is 24. How old is each?&rdquo;</em> — match each phrase to its math. This three-step ritual (name the variables → translate each phrase → solve) is the whole lesson.',
      interaction: {
        type: 'match',
        pairs: [
          ['&ldquo;Johnny is twice as old as Gina&rdquo;', '\\( J = 2G \\)'],
          ['&ldquo;the sum of their ages is 24&rdquo;', '\\( J + G = 24 \\)'],
          ['&ldquo;how old is each?&rdquo;', 'solve the system for \\( J \\) and \\( G \\)'],
        ],
      },
      hint: 'One phrase = one row of the table. The question itself is a row too — it tells you what &ldquo;solved&rdquo; means.',
      success: 'That&rsquo;s a system of two linear equations — last lesson&rsquo;s machine, fed by this lesson&rsquo;s table.',
      coach: ['Each sentence of the problem carries exactly one piece of math.'],
    },
    {
      prompt: 'Step 3 — solve it.',
      body: '\\( J = 2G \\) and \\( J + G = 24 \\). Substitution is free here: the first equation already hands you \\( J \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'Gina =', answer: '8', width: 100 },
          { label: 'Johnny =', answer: '16', width: 100 },
        ],
      },
      hint: 'Substitute \\( 2G \\) for \\( J \\) in the second equation.',
      explain: '\\( 2G + G = 24 \\) gives \\( 3G = 24 \\), so \\( G = 8 \\) and \\( J = 16 \\). Sanity check against the words: 16 is twice 8 ✓, and \\( 16+8 = 24 \\) ✓.',
      note: 'Notice the ratio of effort: the algebra took one line. The translation was the problem.',
      coach: ['\\( J = 2G \\) means every \\( J \\) can be replaced by \\( 2G \\).'],
    },
    {
      prompt: 'Digit problems: a two-digit number has tens digit \\( t \\) and units digit \\( u \\). Its <em>value</em> is…',
      body: 'This is the single trap that decides every digit problem.',
      interaction: {
        type: 'mcq',
        options: ['\\( 10t + u \\)', '\\( t + u \\)', '\\( tu \\)', '\\( 10u + t \\)'],
        correct: 0,
      },
      hint: 'What is 47 in terms of its digits 4 and 7?',
      explain: '47 means 4 tens plus 7 ones: \\( 10(4) + 7 \\). So the number &ldquo;\\(tu\\)&rdquo; is worth \\( 10t + u \\). Not \\( t+u \\) (that&rsquo;s the digit sum), not \\( tu \\) (that&rsquo;s multiplication), and \\( 10u + t \\) is the number written <em>backwards</em>.',
      note: 'Digits are not values. The reversed number \\( 10u + t \\) will star in the next two problems.',
      coach: ['Take 47 apart: how many tens, how many ones?'],
    },
    {
      prompt: 'MA&copy; 1990: the units digit is three times the tens digit; reversing the digits increases the number by 54. Find the number.',
      body: 'Table rows: \\( u = 3t \\) and \\( (10u + t) - (10t + u) = 54 \\). Simplify that second one before you grind.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'the number', answer: '39', width: 120 }],
      },
      hint: 'The second equation collapses: \\( 10u + t - 10t - u = 9u - 9t = 9(u-t) \\).',
      explain: '\\( 9(u-t) = 54 \\) means \\( u - t = 6 \\). With \\( u = 3t \\): \\( 3t - t = 6 \\), so \\( t = 3, u = 9 \\). The number is 39. Check: \\( 93 - 39 = 54 \\) ✓.',
      note: 'Reverse a two-digit number and subtract: you always get \\( 9(u-t) \\) — a multiple of 9, every time. Competition writers reuse this constantly. Remember it.',
      coach: ['Write both the number and its reversal in terms of \\( t \\) and \\( u \\).', 'Subtract them and factor. A famous constant appears.', 'Now you have two tiny equations: \\( u = 3t \\) and \\( u - t = 6 \\).'],
    },
    {
      prompt: 'Digit solo: the tens digit exceeds the units digit by 4, and the number exceeds twice its reversal by 10.',
      body: 'Build your own table: \\( t = u + 4 \\), then translate the second sentence. Lighter scaffolding this time.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'the number', answer: '62', width: 120 }],
      },
      hint: '&ldquo;Exceeds twice its reversal by 10&rdquo;: \\( 10t + u = 2(10u + t) + 10 \\).',
      explain: 'Expanding: \\( 10t + u = 20u + 2t + 10 \\), so \\( 8t - 19u = 10 \\). Substitute \\( t = u+4 \\): \\( 8u + 32 - 19u = 10 \\), so \\( 11u = 22 \\), \\( u = 2 \\), \\( t = 6 \\). The number is 62. Check: twice 26 is 52, plus 10 is 62 ✓.',
      coach: ['Sanity-test your first equation: tens 6, units 2 fits &ldquo;exceeds by 4&rdquo;.', '&ldquo;A exceeds B by 10&rdquo; means \\( A = B + 10 \\) — A is the bigger one.'],
    },
    {
      prompt: 'Coin &amp; ticket problems: one equation counts <em>items</em>, one counts <em>value</em>.',
      body: '<em>&ldquo;Adult tickets cost \\$3.25, student tickets \\$1.75. 1350 fans paid \\$2700 in all. How many adults?&rdquo;</em> — match each row.',
      interaction: {
        type: 'match',
        pairs: [
          ['counts the <em>people</em>', '\\( a + s = 1350 \\)'],
          ['counts the <em>dollars</em>', '\\( 3.25a + 1.75s = 2700 \\)'],
          ['the question', 'find \\( a \\)'],
        ],
      },
      hint: 'People and dollars are different units — they can never share an equation term-for-term.',
      success: 'Two units in the story → two equations, always. That&rsquo;s the whole pattern.',
      note: 'The classic mixing error writes \\( a + 3.25a = \\dots \\) — a person plus some dollars, which is nonsense. Keep each equation in ONE unit.',
      coach: ['What two different things does the problem count?'],
    },
    {
      prompt: 'Now solve the ticket system.',
      body: '\\( a + s = 1350 \\) and \\( 3.25a + 1.75s = 2700 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'adults =', answer: '225', width: 110 },
          { label: 'students =', answer: '1125', width: 110 },
        ],
      },
      hint: 'Multiply the people equation by 1.75 and subtract — the \\( s \\)s vanish.',
      explain: '\\( 1.75 \\times 1350 = 2362.50 \\). Subtracting from 2700 leaves \\( 1.5a = 337.50 \\), so \\( a = 225 \\) and \\( s = 1125 \\). Check the money: \\( 3.25(225) + 1.75(1125) = 731.25 + 1968.75 = 2700 \\) ✓.',
      coach: ['Elimination: scale the count equation to match one price.', 'If every fan were a student, the gate would be \\( 1.75 \\times 1350 \\). Who accounts for the extra money?'],
    },
    {
      prompt: 'Coin solo: 16 coins, all nickels and dimes, worth \\$1.05.',
      body: 'Work in cents — mixing dollars and cents in one equation is the classic self-sabotage.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'nickels =', answer: '11', width: 100 },
          { label: 'dimes =', answer: '5', width: 100 },
        ],
      },
      hint: 'Count equation: \\( n + d = 16 \\). Value equation in cents: \\( 5n + 10d = 105 \\).',
      explain: 'Divide the value equation by 5: \\( n + 2d = 21 \\). Subtract the count equation: \\( d = 5 \\), so \\( n = 11 \\). Check: \\( 55 + 50 = 105 \\) cents ✓.',
      coach: ['Two units: coins and cents. One equation each.', 'Subtracting the two equations makes \\( n \\) disappear.'],
    },
    {
      prompt: 'Three kinds of coins, still two sentences of facts.',
      body: 'A jar holds 11 coins — pennies, nickels, and quarters. There are twice as many nickels as pennies, and one fewer quarter than pennies. How many quarters?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'quarters =', answer: '2', width: 100 }],
      },
      hint: 'Three unknowns, but two of them are expressed through \\( p \\): \\( n = 2p \\) and \\( q = p - 1 \\). The count equation does the rest.',
      explain: '\\( p + 2p + (p-1) = 11 \\) gives \\( 4p = 12 \\), so \\( p = 3 \\), \\( n = 6 \\), \\( q = 2 \\). Three variables never scared the table — each sentence became a row, and everything funneled into one unknown.',
      coach: ['Name the pennies \\( p \\) and write the other two counts in terms of \\( p \\).', 'Now the &ldquo;11 coins&rdquo; sentence is a one-variable equation.'],
    },
    {
      prompt: 'The meta-skill.',
      interaction: {
        type: 'reveal',
        face: 'Every problem in this lesson — ages, digits, coins — needed about 20 seconds of algebra. So what were you actually practicing?',
        cta: 'Tap to say it out loud',
        hidden: 'Translation. The entire difficulty of a word problem lives in the trip from English to equations — that&rsquo;s why the table exists. Name the variables, translate phrase by phrase, sanity-test each row with easy numbers, and the &ldquo;hard&rdquo; problem is a system you already know how to solve.',
      },
      success: 'Ritual locked in. The checkpoint mixes all three archetypes.',
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: '66 is split into two parts; one part is 3 more than twice the other. Find both.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'larger =', answer: '45', width: 100 },
          { label: 'smaller =', answer: '21', width: 100 },
        ],
      },
      hint: 'Rows: \\( a + b = 66 \\) and \\( a = 2b + 3 \\).',
      explain: 'Substitute: \\( 2b + 3 + b = 66 \\), so \\( 3b = 63 \\), \\( b = 21 \\), \\( a = 45 \\). Check: \\( 45 = 2(21)+3 \\) ✓.',
      coach: ['&ldquo;3 more than twice the other&rdquo; — sanity-test your equation before solving it.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Three consecutive odd integers sum to 111. What is the largest?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'largest =', answer: '39', width: 100 }],
      },
      hint: 'Consecutive odd integers step by 2: call them \\( n, \\; n+2, \\; n+4 \\).',
      explain: '\\( 3n + 6 = 111 \\) gives \\( n = 35 \\): the integers are 35, 37, 39. Largest: 39. (Naming the middle one \\( m \\) is even slicker: \\( 3m = 111 \\).)',
      coach: ['How far apart are consecutive odd numbers?', 'Let the smallest be \\( n \\) and add the three expressions.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Three numbers have pairwise sums 29, 46, and 53. Find the largest number.',
      body: 'There is a grinding way and an elegant way.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'largest =', answer: '35', width: 100 }],
      },
      hint: 'Add all three equations at once. What does the left side become?',
      explain: '\\( (x+y) + (x+z) + (y+z) = 2(x+y+z) = 29+46+53 = 128 \\), so \\( x+y+z = 64 \\). Subtract the smallest pair sum: the largest number is \\( 64 - 29 = 35 \\). (The three numbers: 11, 18, 35.)',
      note: 'Symmetric systems often crack fastest when you combine ALL the equations instead of eliminating one variable at a time.',
      coach: ['Write the three equations \\( x+y=29, \\; x+z=46, \\; y+z=53 \\).', 'Sum all three — every variable appears exactly twice.', 'The largest number is missing from the <em>smallest</em> pair sum.'],
    },
    {
      section: 'checkpoint',
      prompt: 'A team scored 54 points on 25 baskets, each worth two or three points. How many three-pointers?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'threes =', answer: '4', width: 100 }],
      },
      hint: 'Baskets and points are the two units. Count: \\( a + b = 25 \\). Value: \\( 2a + 3b = 54 \\).',
      explain: 'Double the count equation: \\( 2a + 2b = 50 \\). Subtract from the points equation: \\( b = 4 \\). Check: 21 twos and 4 threes is \\( 42 + 12 = 54 \\) ✓ — the coin pattern in a jersey.',
      coach: ['This is a coin problem wearing sneakers: baskets are coins, points are cents.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Jefferson was born in 1748. In 1770, Washington was exactly twice as old as Jefferson. How old was Washington in 1750?',
      body: 'Multiple time anchors — brutal translation, trivial algebra. Exactly what a translation boss should be.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'age in 1750', answer: '24', width: 110 }],
      },
      hint: 'Ages change; birth years don&rsquo;t. Find Jefferson&rsquo;s age in 1770 first, then Washington&rsquo;s, then Washington&rsquo;s birth year.',
      explain: 'Jefferson in 1770: \\( 1770-1748 = 22 \\). Washington was twice that: 44, so he was born in \\( 1770-44 = 1726 \\). In 1750 he was \\( 1750-1726 = 24 \\).',
      walkthrough: [
        'Anchor every age to a birth year — that&rsquo;s the only quantity that never moves. Jefferson&rsquo;s is given: 1748.',
        'Translate the 1770 sentence: Jefferson&rsquo;s age there is \\( 1770 - 1748 = 22 \\), so Washington&rsquo;s age is \\( 2 \\times 22 = 44 \\).',
        'Convert Washington&rsquo;s age to HIS birth year: \\( 1770 - 44 = 1726 \\).',
        'Now answer the question actually asked — his age in 1750: \\( 1750 - 1726 = 24 \\). (Not his age in 1770. Read the question twice.)',
      ],
      success: 'Three different years in one problem, and the table never flinched: birth years are constants, ages are differences.',
      note: 'For age problems across multiple dates, translate everything into birth years. Ages at any date fall out by subtraction.',
      coach: ['Which quantity in an age problem never changes?', 'Get Jefferson&rsquo;s 1770 age from his birth year.', 'The question asks about 1750 — a year nobody&rsquo;s sentence mentioned. Birth year bridges it.'],
    },
  ],
};
