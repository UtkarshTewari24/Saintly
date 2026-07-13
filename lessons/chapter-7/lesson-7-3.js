/* Lesson 7.3 — Problem Lab.
   No new concepts: six guided workouts on the chapter's best problems. Each opens by
   making the student CHOOSE their tools before touching any algebra. Boss-rush mode. */

export default {
  id: 'lesson-7-3',
  title: 'Problem Lab',
  kicker: 'Special Factorizations',
  topicIndex: 6,
  lessonIndex: 2,
  next: 'interactive-lesson.html?chapter=8&lesson=1',
  beats: [

    /* ---------------- Workout 1: the x^6 - y^6 fork, settled ---------------- */
    {
      kicker: 'Workout 1 — the fork',
      prompt: '\\( x^6 - y^6 \\) is BOTH a difference of squares and a difference of cubes. Which do you apply first?',
      body: 'Last lesson left this hanging. The order decides whether your factorization is complete.',
      interaction: {
        type: 'mcq',
        options: [
          'Squares first — it splits into two pieces that each factor further',
          'Cubes first — it gets you more factors immediately',
          'Either order gives the same finished factorization',
          'Neither applies — the exponents are too big',
        ],
        correct: 0,
      },
      hint: 'Try both. Squares-first gives \\( (x^3-y^3)(x^3+y^3) \\) — can each piece factor again? Cubes-first gives \\( (x^2-y^2)(x^4+x^2y^2+y^4) \\) — can each of those?',
      explain: '<b>Squares first.</b> \\( (x^3)^2 - (y^3)^2 = (x^3-y^3)(x^3+y^3) \\), and BOTH pieces then split by the cube cards → \\( (x-y)(x^2+xy+y^2)(x+y)(x^2-xy+y^2) \\): four factors. Cubes first gives \\( (x^2-y^2)(x^4+x^2y^2+y^4) \\); the first piece splits, but the quartic needs Lesson 7.1&rsquo;s combo to break further — most people stop there and hand in an incomplete answer.',
      note: '<b>Always take the difference of SQUARES first.</b> It bisects the problem into two smaller problems, each of which your other cards can attack. Greedy rule: split into the most pieces you can, as early as you can, then re-examine every piece.',
      coach: ['Run both orders on paper for thirty seconds.', 'Which order leaves you with pieces that are still factorable — and which leaves a piece that LOOKS finished but isn&rsquo;t?'],
    },

    /* ---------------- Workout 2: x^9 - x ---------------- */
    {
      kicker: 'Workout 2 — completeness',
      prompt: 'Factor \\( x^9 - x \\) completely over the integers. How many factors?',
      body: 'The count is the point: stop one step early and you get it wrong. (Count irreducible factors, including the lone \\( x \\).)',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'number of factors', answer: '5', width: 90 }],
      },
      hint: 'Chapter 6 reflex first: pull out the common \\( x \\). Then \\( x^8 - 1 \\) is a difference of squares — repeatedly.',
      explain: '\\( x^9 - x = x(x^8 - 1) = x(x^4-1)(x^4+1) = x(x^2-1)(x^2+1)(x^4+1) = x(x-1)(x+1)(x^2+1)(x^4+1) \\) — <b>5</b> factors. Over the integers, \\( x^2+1 \\) and \\( x^4+1 \\) are both dead ends (sums, not differences), so that&rsquo;s the end of the road.',
      note: 'The completeness discipline: after every split, ask each piece &ldquo;are YOU a difference of squares? a difference of cubes? do you have a common factor?&rdquo; Stop only when every piece answers no to all of them.',
      coach: ['Common factor first — never skip it.', 'Now hit \\( x^8 - 1 \\) with difference of squares, and keep going while the pieces allow.'],
    },

    /* ---------------- Workout 3: x^8 - y^8 over the reals ---------------- */
    {
      kicker: 'Workout 3 — the word that changes everything',
      prompt: 'Factor \\( x^8 - y^8 \\) into FIVE factors with <em>real</em> coefficients.',
      body: 'The obvious route gives four. The fifth factor is the entire problem — and the word &ldquo;real&rdquo; is the clue.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x^8 - y^8 \\)' },
          s1: { eq: '\\( (x^4 - y^4)(x^4 + y^4) \\)' },
          s2: { eq: '\\( (x^2-y^2)(x^2+y^2)(x^4+y^4) \\)' },
          s3: { eq: '\\( (x-y)(x+y)(x^2+y^2)(x^4+y^4) \\)', note: 'Four factors — and over the INTEGERS this is finished. But the problem asked for five, and it said <em>real</em>. That word is an instruction: irrational coefficients are on the table.' },
          stuck: { eq: '\\( x^2 + y^2 = \\;? \\)', note: 'A sum of squares in two variables never factors over the reals — not even with irrational coefficients. This piece really is finished. Look at the OTHER stubborn piece: \\( x^4 + y^4 \\).' },
          win: { eq: '\\( x^4 + y^4 = (x^2+y^2)^2 - 2x^2y^2 = \\left(x^2 + y^2 - \\sqrt2\\,xy\\right)\\left(x^2 + y^2 + \\sqrt2\\,xy\\right) \\)', note: 'THERE it is. The sum-of-squares REWRITE card turns \\( x^4 + y^4 \\) into a difference of squares — because \\( 2x^2y^2 = (\\sqrt2\\,xy)^2 \\). The \\( \\sqrt2 \\) is why the problem had to say &ldquo;real&rdquo; instead of &ldquo;integer.&rdquo; Five factors: \\( (x-y)(x+y)(x^2+y^2)(x^2+y^2-\\sqrt2 xy)(x^2+y^2+\\sqrt2 xy) \\).' },
        },
        ops: [
          { label: 'Difference of squares', to: { s0: 's1', s1: 's2', s2: 's3' } },
          { label: 'Try to factor \\( x^2 + y^2 \\)', to: { s3: 'stuck' }, blocked: 'Split as far as the squares card takes you first.' },
          { label: 'Rewrite \\( x^4 + y^4 \\) as a difference of squares', to: { s3: 'win', stuck: 'win' }, blocked: 'Get down to the four-factor form first.' },
        ],
      },
      hint: 'After four factors you&rsquo;re stuck on \\( x^4 + y^4 \\). Use the REWRITE card: \\( a^2 + b^2 = (a+b)^2 - 2ab \\) with \\( a = x^2, b = y^2 \\). Is \\( 2x^2y^2 \\) a perfect square?',
      success: 'The rewrite card, working overtime: \\( x^4+y^4 = (x^2+y^2)^2 - (\\sqrt2 xy)^2 \\).',
      note: 'Read the problem&rsquo;s adjectives. <b>&ldquo;Over the integers&rdquo; and &ldquo;over the reals&rdquo; are different questions with different answers.</b> \\( x^4 + y^4 \\) is irreducible over one and factorable over the other.',
      coach: ['Push difference-of-squares as far as it goes: you&rsquo;ll get four factors.', 'One stubborn piece remains. Which card converts a SUM of squares into a difference?', '\\( (x^2+y^2)^2 - 2x^2y^2 \\) — and \\( 2x^2y^2 = (\\sqrt2 xy)^2 \\).'],
    },

    /* ---------------- Workout 4: grouping ---------------- */
    {
      kicker: 'Workout 4 — grouping',
      prompt: 'Factor \\( x^2 + 2mn - m^2 - n^2 \\).',
      body: 'No card fits — until you stare at it and let three of the terms fuse into one shape.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( (x - m + n)(x + m - n) \\)',
          '\\( (x - m - n)(x + m + n) \\)',
          '\\( (x + m + n)^2 \\)',
          'It doesn&rsquo;t factor',
        ],
        correct: 0,
      },
      hint: 'Group the last three terms with a minus outside: \\( -m^2 + 2mn - n^2 = -(m^2 - 2mn + n^2) = -(m-n)^2 \\).',
      explain: 'Regrouped: \\( x^2 - (m-n)^2 \\) — a difference of squares with \\( b = m - n \\). So it factors as \\( \\big(x - (m-n)\\big)\\big(x + (m-n)\\big) = (x - m + n)(x + m - n) \\). The whole difficulty was <em>seeing</em> \\( -(m-n)^2 \\) hiding in three scattered terms.',
      note: '<b>Grouping:</b> stare at the terms until a known shape forms out of a partial sum. Watch for a perfect-square trinomial wearing a minus sign — pulling out that minus is the move nobody makes on their own the first time.',
      card: 'grouping',
      coach: ['Which three terms could be a perfect square in disguise?', 'Factor \\( -1 \\) out of those three and see what appears.'],
    },
    {
      kicker: 'Workout 4b — grouping, harder',
      prompt: 'Factor \\( a^2c^2 - a^2b^2 - 2abc^2 + 2ab^3 + b^2c^2 - b^4 \\).',
      body: 'Six terms. Don&rsquo;t panic — sort them by what they contain.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'the repeated squared factor is \\( (a - \\;?)^2 \\)', answer: 'b', width: 90 },
          { label: 'the other two factors are \\( (c-?)(c+?) \\), with ? =', answer: 'b', width: 90 },
        ],
      },
      hint: 'Group the \\( c^2 \\) terms and the non-\\( c^2 \\) terms: \\( c^2(a^2 - 2ab + b^2) - b^2(a^2 - 2ab + b^2) \\). Both brackets are the same!',
      explain: 'Sorting: \\( c^2(a^2 - 2ab + b^2) - b^2(a^2 - 2ab + b^2) = (a-b)^2(c^2 - b^2) = \\mathbf{(a-b)^2 (c-b)(c+b)} \\). Two grouping moves and two cards: the perfect square, then the difference of squares.',
      note: 'The technique frontier of this chapter. When a mess has six terms, <b>sort them by a common ingredient</b> (here: which ones carry \\( c^2 \\)) and factor each group. If the leftover brackets match, you&rsquo;ve won.',
      coach: ['Which terms contain \\( c^2 \\)? Pull it out of those.', 'Pull \\( -b^2 \\) out of the rest. Compare the two brackets.', 'They&rsquo;re identical — so the whole thing is (bracket)(c² − b²).'],
    },

    /* ---------------- Workout 5: number theory trio ---------------- */
    {
      kicker: 'Workout 5 — identities as number theory',
      prompt: 'Prove \\( n^3 - n \\) is divisible by 6 for every integer \\( n \\).',
      body: 'Factor it, then let Chapter 5 finish the job.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( n^3 - n = (n-1)n(n+1) \\) — three consecutive integers, so one is even and one is a multiple of 3',
          '\\( n^3 - n = n(n^2 - 1) \\), and \\( n^2 - 1 \\) is always divisible by 6',
          'Check \\( n = 1, 2, 3, 4, 5 \\) — they all work, so it&rsquo;s true',
          'It&rsquo;s false — try \\( n = 4 \\)',
        ],
        correct: 0,
      },
      hint: 'Pull out \\( n \\), then difference of squares on \\( n^2 - 1 \\). What do the three factors look like on a number line?',
      explain: '\\( n^3 - n = n(n^2-1) = n(n-1)(n+1) = (n-1)n(n+1) \\) — three CONSECUTIVE integers. Among any three consecutive integers, at least one is even (÷2) and exactly one is a multiple of 3. So the product is divisible by \\( 2 \\times 3 = 6 \\) ✓. (Option 3 is the classic non-proof: five examples prove nothing — Chapter 5&rsquo;s Fermat-number graveyard says hello.)',
      note: 'Factorization identities are <b>number theory tools</b>. The moment an expression becomes a product of consecutive integers, divisibility facts fall out for free.',
      coach: ['Factor completely first.', 'Look at the three factors as positions on a number line.'],
    },
    {
      kicker: 'Workout 5b',
      prompt: 'Find the sum of the distinct prime factors of \\( 2^{16} - 1 \\).',
      body: 'A six-digit number. You will not be trial-dividing it.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'sum of distinct primes', answer: '282', width: 110 }],
      },
      hint: 'Iterated difference of squares: \\( 2^{16} - 1 = (2^8-1)(2^8+1) \\), and keep going on the left piece.',
      explain: '\\( 2^{16}-1 = (2^8-1)(2^8+1) = (2^4-1)(2^4+1)(2^8+1) = (2^2-1)(2^2+1)(2^4+1)(2^8+1) = 3 \\cdot 5 \\cdot 17 \\cdot 257 \\). All four are prime (check with the √-bound from Chapter 5 — for 257, test primes up to 16). Sum: \\( 3 + 5 + 17 + 257 = \\mathbf{282} \\).',
      note: 'This is the Fermat-number factorization from Chapter 5, seen from the other side: \\( 2^{2^k}+1 \\) are exactly the pieces that pop out when you repeatedly halve the exponent of \\( 2^n - 1 \\).',
      coach: ['\\( 2^{16} = (2^8)^2 \\), so it&rsquo;s a difference of squares.', 'Keep splitting the MINUS piece; the plus pieces are dead ends.', 'You&rsquo;ll land on 3, 5, 17, 257 — verify each is prime with the √-bound.'],
    },
    {
      kicker: 'Workout 5c',
      prompt: 'Factor \\( 3^{18} - 2^{18} \\) into primes. What is its largest prime factor?',
      body: 'Squares, then cubes, then Chapter 5&rsquo;s pipeline on the numeric leftovers.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'largest prime factor', answer: '1009', width: 110 }],
      },
      hint: 'Squares first (Workout 1&rsquo;s rule!): \\( (3^9 - 2^9)(3^9 + 2^9) = 19171 \\times 20195 \\). Then hit each with the CUBE cards, since \\( 3^9 = (3^3)^3 = 27^3 \\).',
      explain: 'Squares first: \\( (3^9-2^9)(3^9+2^9) \\). Then cubes on each: \\( 3^9 - 2^9 = 27^3 - 8^3 = (27-8)(27^2 + 216 + 64) = 19 \\times 1009 \\), and \\( 3^9 + 2^9 = 27^3 + 8^3 = (27+8)(729 - 216 + 64) = 35 \\times 577 = 5 \\times 7 \\times 577 \\). Full factorization: \\( 5 \\cdot 7 \\cdot 19 \\cdot 577 \\cdot \\mathbf{1009} \\) — and 1009 is the largest (prime: check to 31).',
      note: 'Three chapters cooperating: Workout 1&rsquo;s ordering rule, this chapter&rsquo;s cube cards, and Chapter 5&rsquo;s primality checking. That&rsquo;s what a &ldquo;technique chapter&rdquo; buys you.',
      coach: ['18 is even — squares first, always.', 'Now each piece has exponent 9, which is a cube: \\( 3^9 = 27^3 \\).', 'Apply the cube cards, then test the numeric factors for primality.'],
    },

    /* ---------------- checkpoint (lab exit ticket) ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Simplify \\( \\dfrac{a^3 - 1}{a^2 - 1} \\).',
      body: 'Every factor here is a deck card. Read them off.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\dfrac{a^2 + a + 1}{a + 1} \\)',
          '\\( \\dfrac{a^2 - a + 1}{a + 1} \\)',
          '\\( a + 1 \\)',
          '\\( \\dfrac{a - 1}{a + 1} \\)',
        ],
        correct: 0,
      },
      hint: 'Top: difference of cubes. Bottom: difference of squares. They share a factor.',
      explain: '\\( \\frac{(a-1)(a^2+a+1)}{(a-1)(a+1)} = \\frac{a^2+a+1}{a+1} \\) — the \\( (a-1) \\) cancels (legally, provided \\( a \\ne 1 \\)). Two cards, one cancellation, done.',
      coach: ['Factor top and bottom with your cards before doing anything else.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Factor \\( 64x^6 - y^6 \\) completely (over the integers). How many factors?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'number of factors', answer: '4', width: 90 }],
      },
      hint: 'Workout 1&rsquo;s rule: SQUARES first. \\( 64x^6 = (8x^3)^2 \\).',
      explain: '\\( (8x^3)^2 - (y^3)^2 = (8x^3 - y^3)(8x^3 + y^3) \\), then the cube cards on each: \\( (2x-y)(4x^2+2xy+y^2)(2x+y)(4x^2-2xy+y^2) \\) — <b>4</b> factors. Cubes-first would have stranded you on a quartic.',
      coach: ['Which order? Workout 1 settled it.', 'Both \\( 64x^6 \\) and \\( y^6 \\) are squares AND cubes — squares wins.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Retention check: solve \\( \\sqrt{3x+1} = x - 1 \\).',
      body: 'A Chapter 6.4 radical, planted here to see whether the audit habit survived.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '5', width: 90 }],
      },
      hint: 'Square both sides → \\( 3x + 1 = x^2 - 2x + 1 \\) → \\( x^2 - 5x = 0 \\). Two candidates. Audit both.',
      explain: '\\( x(x - 5) = 0 \\) gives \\( x = 0 \\) or \\( x = 5 \\). Audit: \\( x = 5 \\) → \\( \\sqrt{16} = 4 = 5 - 1 \\) ✓. \\( x = 0 \\) → \\( \\sqrt{1} = 1 \\), but \\( x - 1 = -1 \\) ✗ — extraneous, born from squaring (a radical can&rsquo;t equal a negative). Answer: \\( \\mathbf{5} \\).',
      coach: ['Square, solve, and then CHECK both candidates in the original.', 'One of them makes the right-hand side negative.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: '\\( a + b = 2 \\) and \\( a^4 + b^4 = 16 \\). Find all possible values of \\( ab \\).',
      body: 'Walk the triangle BACKWARDS — the unknown is the product itself.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( ab = 0 \\) or \\( ab = 8 \\)',
          '\\( ab = 0 \\) only',
          '\\( ab = 8 \\) only',
          '\\( ab = \\pm 2 \\)',
        ],
        correct: 0,
      },
      hint: 'Let \\( p = ab \\). Then \\( a^2+b^2 = 4 - 2p \\), and \\( a^4+b^4 = (a^2+b^2)^2 - 2p^2 = (4-2p)^2 - 2p^2 \\). Set that equal to 16.',
      explain: '\\( (4-2p)^2 - 2p^2 = 16 \\) → \\( 16 - 16p + 4p^2 - 2p^2 = 16 \\) → \\( 2p^2 - 16p = 0 \\) → \\( p = \\mathbf{0} \\) or \\( p = \\mathbf{8} \\). Both are legitimate answers to the question asked. (Audit note: \\( p = 8 \\) with \\( s = 2 \\) makes the discriminant \\( 4 - 32 < 0 \\), so \\( a \\) and \\( b \\) would be complex — perfectly allowed, since the problem never said &ldquo;real.&rdquo; If it had, only \\( p = 0 \\) survives. Read the adjectives!)',
      note: 'The triangle runs in reverse: instead of using \\( p \\) to find a power sum, you can use a power sum to <em>solve for</em> \\( p \\). It becomes a quadratic in \\( p \\) — which is why two answers appear.',
      coach: ['Name \\( ab = p \\) and express everything in terms of \\( p \\).', 'You&rsquo;ll get a quadratic in \\( p \\). Solve it.', 'Both roots answer the question as asked — but check whether the problem demanded real numbers.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      kicker: 'Workout 6 — the capstone',
      prompt: 'Let \\( q = a^2 + b^2 \\). Show that \\( 2q \\) and \\( 5q \\) are also sums of two squares. Which pair works for \\( 5q \\)?',
      body: 'Mandelbrot. A proof, not a computation — and a doorway to one of the great identities in mathematics.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( 5q = (2a+b)^2 + (a-2b)^2 \\)',
          '\\( 5q = (2a+b)^2 + (a+2b)^2 \\)',
          '\\( 5q = (5a)^2 + (5b)^2 \\)',
          '\\( 5q = (a+b)^2 + (2a-2b)^2 \\)',
        ],
        correct: 0,
      },
      hint: 'Expand \\( (2a+b)^2 + (a-2b)^2 \\). The cross terms \\( +4ab \\) and \\( -4ab \\) should annihilate — leaving \\( 5a^2 + 5b^2 \\).',
      explain: '\\( (2a+b)^2 + (a-2b)^2 = (4a^2 + 4ab + b^2) + (a^2 - 4ab + 4b^2) = 5a^2 + 5b^2 = 5q \\) ✓. The \\( \\pm 4ab \\) cross terms cancel EXACTLY — the same annihilation you&rsquo;ve now seen in rationalizing denominators (Ch. 1), complex conjugates (Ch. 2), difference of squares (Ch. 6), and telescoping (Ch. 7). <b>Four appearances of one idea.</b> And the doubling case is easier: \\( 2q = (a+b)^2 + (a-b)^2 \\), since the cross terms cancel there too.',
      walkthrough: [
        'Start with the easy half. \\( (a+b)^2 + (a-b)^2 = (a^2 + 2ab + b^2) + (a^2 - 2ab + b^2) = 2a^2 + 2b^2 = 2q \\) ✓. The cross terms cancelled — as they always do when you add conjugate-ish squares.',
        'For \\( 5q \\), you need cross terms that also cancel, but coefficients that produce \\( 5a^2 + 5b^2 \\). Try \\( (2a+b)^2 + (a-2b)^2 \\).',
        'Expand: \\( (4a^2 + 4ab + b^2) + (a^2 - 4ab + 4b^2) \\). The \\( +4ab \\) and \\( -4ab \\) annihilate, leaving \\( 5a^2 + 5b^2 = 5q \\) ✓.',
        'Why 5, and why THOSE coefficients? Because \\( 5 = 2^2 + 1^2 \\) is itself a sum of two squares, and there is an identity lurking: \\( (x^2+y^2)(a^2+b^2) = (xa - yb)^2 + (xb + ya)^2 \\). Put \\( x = 2, y = 1 \\) and you get exactly the pair above. The product of two sums of two squares is ALWAYS a sum of two squares.',
        'You just proved (a special case of) the Brahmagupta–Fibonacci identity — and the cancellation that made it work is the same cancellation you have been exploiting since Chapter 1.',
      ],
      success: 'A real theorem, proved with one card and one cancellation.',
      note: 'The general identity behind it: \\( (x^2+y^2)(a^2+b^2) = (xa-yb)^2 + (xb+ya)^2 \\). Sums of two squares are <b>closed under multiplication</b> — a fact that looks like magic and is really just cross terms cancelling.',
      coach: ['Do the \\( 2q \\) case first — it&rsquo;s the same trick, easier.', 'For \\( 5q \\), expand each candidate and watch the \\( ab \\) terms.', 'Only one option has cross terms that annihilate.'],
    },

    /* ---------------- closing card ---------------- */
    {
      kicker: 'The big picture',
      prompt: 'Euler spent twelve years on the next step.',
      body: 'You just proved that a sum of two squares, times 2 or 5, is still a sum of two squares. Now scale that idea up.',
      interaction: {
        type: 'reveal',
        face: 'Every positive integer is the sum of FOUR squares (\\( 7 = 4+1+1+1 \\), \\( 31 = 25+4+1+1 \\), …). To prove it, you need: the product of two sums of four squares is a sum of four squares. Sounds easy?',
        cta: 'Tap for the punchline',
        hidden: 'It took <b>Euler twelve years</b> to find the four-square identity — a monstrous expansion where sixteen products annihilate in exactly the right pattern, leaving four clean squares. Once he had it, the four-square theorem fell: prove it for primes, then use the identity to multiply your way to every other integer (Lagrange, 1770).<br><br>And look at the proof skeleton: <em>an identity whose cross terms cancel</em>, plus <em>build the general case from the pieces</em>. That is Workout 6, scaled up. What you did in two variables, Euler did in four — and it cost him more than a decade.<br><br>Chapter 7 complete. Your deck now holds eleven identities, every one of which you derived rather than memorized. Later chapters — polynomials, symmetric functions — draw from exactly this deck.',
      },
      success: 'Deck full. Next: what numbers really are.',
      coach: ['Before tapping: how hard could a four-variable version be?'],
    },
  ],
};
