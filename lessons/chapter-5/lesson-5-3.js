/* Lesson 5.5 — Divisibility Tricks.
   The master idea: every rule is a statement about powers of 10 in some mod. */

export default {
  id: 'lesson-5-3',
  title: 'Divisibility Tricks',
  kicker: 'Using the Integers',
  topicIndex: 4,
  lessonIndex: 2,
  next: 'interactive-lesson.html?chapter=5&lesson=4',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'You&rsquo;ve known forever that even numbers end in 0, 2, 4, 6, 8. But <em>why</em> is that true?',
      interaction: {
        type: 'reveal',
        face: '\\( 7965841 = 7965840 + 1 \\) — a multiple of 10, plus the last digit.',
        cta: 'Tap for the reason',
        hidden: 'The first chunk is \\( 10 \\cdot 796584 \\), and \\( 10 \\equiv 0 \\pmod 2 \\) — so mod 2, the entire front of the number <em>vanishes</em> and only the last digit survives: \\( 7965841 \\equiv 1 \\pmod 2 \\). Odd. Every divisibility rule you will ever meet is this same move: <b>a statement about what powers of 10 are, in some mod</b>. That sentence is the whole lesson.',
      },
      success: 'Rules aren&rsquo;t magic — they&rsquo;re last lesson&rsquo;s congruences applied to powers of 10.',
      coach: ['Split any number as (multiple of 10) + (last digit) and reduce mod 2.'],
    },
    {
      prompt: 'The \\( 10^k \\equiv 0 \\) family: how much of the number survives?',
      body: 'Mod 4, \\( 100 \\equiv 0 \\) — so everything above the last TWO digits dies. Mod 8, \\( 1000 \\equiv 0 \\). Fill in the rules.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'divisibility by 4: last ? digits', answer: '2', width: 90 },
          { label: 'by 8: last ? digits', answer: '3', width: 90 },
          { label: 'is 91,748 divisible by 4? (0/1)', answer: '1', width: 90 },
        ],
      },
      hint: '\\( 4 \\mid 100 \\), so hundreds and above are invisible mod 4. \\( 8 \\mid 1000 \\), so thousands and above are invisible mod 8. For 91,748: look at 48.',
      explain: 'By 4: last two digits (here 48 = 4·12, so yes → 1). By 8: last three. Same family: 2, 5, 10 read one digit; 4, 25, 20 read two; 8, 125 read three — each because some power of 10 dies completely in that mod.',
      note: 'When \\( m \\mid 10^k \\), only the last \\( k \\) digits matter mod \\( m \\). The rest of the number is literally \\( \\equiv 0 \\).',
      coach: ['Which power of 10 does 4 divide? That sets the cutoff.', '48 and 748 and 91748 all agree mod 4 — why?'],
    },
    {
      prompt: 'Mod 3, the powers of 10 don&rsquo;t die — they do something better.',
      body: 'Fill in the key congruences and watch every place-value collapse to 1.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 10 \\bmod 3 \\)', answer: '1', width: 84 },
          { label: '\\( 10 \\bmod 9 \\)', answer: '1', width: 84 },
          { label: 'digit sum of 7965', answer: '27', width: 90 },
        ],
      },
      hint: '\\( 10 = 9 + 1 \\). And if \\( 10 \\equiv 1 \\), then \\( 100 = 10^2 \\equiv 1^2 \\), \\( 1000 \\equiv 1 \\), forever (powers are a legal move).',
      explain: '\\( 10 \\equiv 1 \\) mod both 3 and 9 — so \\( 7965 = 7 \\cdot 1000 + 9 \\cdot 100 + 6 \\cdot 10 + 5 \\equiv 7 + 9 + 6 + 5 = 27 \\). Every ×1000, ×100, ×10 collapses to ×1, leaving the bare digit sum. Since \\( 27 \\) is divisible by 9, so is 7965.',
      note: 'Digit-sum rule, derived not decreed: because \\( 10 \\equiv 1 \\pmod{3 \\text{ and } 9} \\), <b>every number is congruent to its digit sum</b> mod 3 and mod 9. (It even tells you the remainder, not just yes/no.)',
      coach: ['Reduce 10 mod 3 first — everything follows from it by legal moves.', 'Replace each place value with 1 and read what&rsquo;s left.'],
    },
    {
      prompt: 'Which of 4995–4999 is divisible by 3 but NOT by 9?',
      body: 'The discriminator question — it catches the &ldquo;divisible by 3 means divisible by 9&rdquo; reflex.',
      interaction: {
        type: 'mcq',
        options: ['4998', '4995', '4996', '4999'],
        correct: 0,
      },
      hint: 'Digit sums: you want one divisible by 3 but not by 9.',
      explain: '4998&rsquo;s digit sum is 30 — divisible by 3, not by 9. (4995 sums to 27: divisible by <em>both</em>, so it fails the &ldquo;not 9&rdquo; clause.) Divisible-by-9 implies divisible-by-3, but the arrow never runs backwards.',
      coach: ['Compute all five digit sums — they&rsquo;re consecutive.', 'Which sum is a multiple of 3 but not of 9?'],
    },
    {
      prompt: 'Mod 11, the powers of 10 alternate — and last lesson&rsquo;s negative-spin trick pays off.',
      body: '\\( 10 \\equiv -1 \\pmod{11} \\), so \\( 100 \\equiv +1 \\), \\( 1000 \\equiv -1 \\), … Compute the alternating digit sum of 7964, starting from the units digit: \\( 4 - 6 + 9 - 7 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'alternating sum', answer: '0', width: 90 }],
      },
      hint: 'Just evaluate: \\( 4 - 6 + 9 - 7 \\).',
      explain: 'It&rsquo;s <b>0</b> — and 0 is a multiple of 11, so \\( 11 \\mid 7964 \\) (indeed \\( 7964 = 11 \\cdot 724 \\)). Edge rules: an alternating sum of 0 counts as divisible, and negative sums like −11 or −22 do too — multiples of 11 come in both signs.',
      note: 'The 11-rule: alternate \\( +, -, +, - \\) through the digits (either end may start positive — just stay consistent) and test the result for divisibility by 11. It works because \\( 10 \\equiv -1 \\pmod{11} \\).',
      coach: ['Signs alternate because \\( (-1)^k \\) does.', 'Zero is divisible by everything.'],
    },
    {
      prompt: 'Rapid fire: which of these is NOT divisible by 11?',
      interaction: {
        type: 'mcq',
        options: ['111', '11', '1111', '1716'],
        correct: 0,
      },
      hint: 'Alternating sums: \\( 1 - 1 + 1 \\) for 111, \\( 6 - 1 + 7 - 1 \\) for 1716…',
      explain: '111&rsquo;s alternating sum is 1 — not a multiple of 11. The others: 11 → 0 ✓, 1111 → 0 ✓, 1716 → \\( 6 - 1 + 7 - 1 = 11 \\) ✓. (So 11 divides 1111 but not 111 — repunits alternate allegiance.)',
      coach: ['Four quick alternating sums.', 'Only multiples of 11 — including 0 — pass.'],
    },
    {
      prompt: 'A tiny proof: a two-digit number is divisible by 11 exactly when its digits match.',
      interaction: {
        type: 'reveal',
        face: 'Two-digit number, digits \\( a \\) and \\( b \\): alternating sum \\( = b - a \\). Why does &ldquo;divisible&rdquo; force \\( a = b \\)?',
        cta: 'Tap for the bound-and-force move',
        hidden: 'Digits run 0–9, so \\( -9 \\le b - a \\le 9 \\). The ONLY multiple of 11 in that interval is 0 — so divisibility forces \\( b - a = 0 \\), i.e. \\( a = b \\): the numbers 11, 22, …, 99. This is your first taste of a competition meta-move worth naming: <b>bound it, then it&rsquo;s forced</b>. Trap a quantity in a small window, list the qualifying values, and often there&rsquo;s exactly one.',
      },
      success: 'Bound it, then it&rsquo;s forced — remember the move, not just the fact.',
      coach: ['How big and how small can b − a possibly be?'],
    },
    {
      prompt: 'No rule for 12 was ever taught. Build one. Which test works?',
      interaction: {
        type: 'mcq',
        options: [
          'Pass the 3-test AND the 4-test',
          'Pass the 2-test AND the 6-test',
          'Pass the 4-test alone',
          'Digit sum divisible by 12',
        ],
        correct: 0,
      },
      hint: 'Split 12 into pieces that share no factors. Then beware: 6 passes the 2-test and the 6-test…',
      explain: '\\( 12 = 3 \\cdot 4 \\) with \\( (3,4) \\) sharing nothing — so divisible-by-both ⟺ divisible-by-12. The trap: \\( 2 \\cdot 6 \\) also makes 12, but 2 and 6 overlap (both even), and the number 6 itself passes both tests while \\( 12 \\nmid 6 \\). Composite tests demand <b>coprime</b> pieces.',
      note: 'Test a composite by splitting it into coprime factors: 12 = 3 × 4, 18 = 2 × 9, 45 = 5 × 9 — never 2 × 6. (&ldquo;Coprime&rdquo; gets formal treatment in the GCF lesson; for now: no shared factor.)',
      coach: ['Find the counterexample lurking in the 2-and-6 option.', 'The pieces must not share anything.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'The five-digit number \\( 12A3B \\) is divisible by both 4 and 9, and \\( A \\ne B \\). Find \\( A + B \\).',
      body: 'MATHCOUNTS 1986. Two rules, then casework.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'A + B', answer: '3', width: 90 }],
      },
      hint: 'By 4: \\( 3B \\) divisible by 4 → B is 2 or 6. By 9: \\( 6 + A + B \\equiv 0 \\pmod 9 \\).',
      explain: 'B = 2: need \\( A + 2 \\equiv 3 \\pmod 9 \\) → A = 1 ✓ (12132 works, and 1 ≠ 2). B = 6: need \\( A + 6 \\equiv 3 \\) → A = 6, but that violates A ≠ B. So A = 1, B = 2 and \\( A + B = 3 \\).',
      coach: ['The 4-rule reads only the last two digits, 3B.', 'The 9-rule reads the digit sum with A and B as unknowns.', 'Run both B cases; one dies on A ≠ B.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Find the digit \\( D \\) making \\( 3D60 \\) divisible by 72.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'D', answer: '9', width: 90 }],
      },
      hint: '\\( 72 = 8 \\times 9 \\), coprime. The 8-test reads D60; the 9-test reads \\( 9 + D \\).',
      explain: 'By 8: \\( \\overline{D60} = 100D + 60 \\) divisible by 8 → D odd (160, 360, 560, 760, 960 all work). By 9: \\( 3 + D + 6 + 0 = 9 + D \\equiv 0 \\) → D = 0 or 9. Intersection: <b>9</b>. Check: \\( 3960 = 72 \\cdot 55 \\) ✓.',
      coach: ['Split 72 into coprime pieces first.', 'Each rule shortlists D; intersect the lists.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Compute the alternating digit sum of 152,637 (units digit first). Divisible by 11?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'alternating sum', answer: '12', width: 100 }],
      },
      hint: '\\( 7 - 3 + 6 - 2 + 5 - 1 \\).',
      explain: 'The sum is 12 — not a multiple of 11, so 152,637 isn&rsquo;t divisible by 11. (It even tells you more: \\( 152637 \\equiv 12 \\equiv 1 \\pmod{11} \\).)',
      coach: ['Alternate signs strictly — one slip flips the verdict.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: '72 identical decks of cards cost a total of \\( \\$a67.9b \\) — the first and last digits are smudged. Find \\( a + b \\).',
      body: 'MA&copy; 1991. The total in cents, \\( \\overline{a679b} \\), must be divisible by 72.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'a + b', answer: '5', width: 90 }],
      },
      hint: '72 = 8 × 9. The 8-rule pins \\( b \\) from \\( \\overline{79b} \\); then the 9-rule pins \\( a \\).',
      explain: 'By 8: \\( 79b \\) divisible by 8 → 792 = 8·99 → b = 2. By 9: \\( a + 6 + 7 + 9 + 2 = a + 24 \\equiv 0 \\pmod 9 \\) → a = 3. Total \\$367.92, each deck \\$5.11 — and \\( a + b = \\mathbf{5} \\). Two rules, two smudged digits, zero guessing.',
      coach: ['Work in cents so the price is an integer times 72.', 'The 8-rule sees only the last three digits.', 'The 9-rule mops up the remaining unknown.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'What is the largest integer that divides EVERY number of the form \\( \\overline{abc{,}abc} \\) — like 123,123 or 407,407?',
      body: 'AHSME 1951. Divisibility structure hiding inside a party trick.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'largest divisor', answer: '1001', width: 110 }],
      },
      hint: 'Write \\( \\overline{abcabc} \\) in terms of \\( \\overline{abc} \\). What does gluing a copy after itself DO, arithmetically?',
      explain: '\\( \\overline{abcabc} = \\overline{abc} \\cdot 1000 + \\overline{abc} = \\overline{abc} \\times 1001 \\). So 1001 divides every one of them; and since \\( \\overline{abc} \\) can be 100 or 101 (which share nothing beyond 1), nothing bigger can. Answer: <b>1001</b> \\( = 7 \\times 11 \\times 13 \\).',
      walkthrough: [
        'Unmask the shape: \\( \\overline{abcabc} = \\overline{abc} \\cdot 1000 + \\overline{abc} = 1001 \\cdot \\overline{abc} \\). Every such number is a multiple of 1001, automatically.',
        'Could something larger divide them all? It would have to divide \\( 1001 \\cdot 100 \\) and \\( 1001 \\cdot 101 \\) — but 100 and 101 are consecutive, sharing no factor, so 1001 itself is the ceiling.',
        'Factor the star: \\( 1001 = 7 \\times 11 \\times 13 \\) — three consecutive primes in a trench coat.',
        'The takeaway tool: &ldquo;abcabc&rdquo; problems, &ldquo;multiply by 7, then 11, then 13&rdquo; magic tricks, and &ldquo;123123/123&rdquo; simplifications are ALL the ×1001 factorization. Competition writers adore it.',
      ],
      success: 'The party trick was place value all along: duplicating a block multiplies by \\( 10^3 + 1 \\).',
      note: '<b>\\( 1001 = 7 \\cdot 11 \\cdot 13 \\)</b> — memorize this factorization; it appears constantly. (Its cousins: \\( 101 \\) is prime, \\( 10101 = 3 \\cdot 7 \\cdot 13 \\cdot 37 \\).)',
      coach: ['Write abcabc as (abc)·(something).', 'Gluing a copy after itself multiplies by what?', 'Why can&rsquo;t any divisor exceed 1001? Compare two specific examples.'],
    },
  ],
};
