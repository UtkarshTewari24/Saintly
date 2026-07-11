/* Lesson 5.1–5.2 — Divisibility Vocabulary + Number Bases.
   Place-value columns (HTML tables + a greedy-conversion balance graph) carry the base work. */

const COLUMNS_10 = `<table style="margin:14px auto 0;border-collapse:collapse;text-align:center;font-size:14px">
  <tr>${['10^6','10^5','10^4','10^3','10^2','10^1','10^0'].map(p => `<td style="border:1px solid #4a4a4a;padding:6px 12px;color:#8f8f8f">\\( ${p} \\)</td>`).join('')}</tr>
  <tr>${'7965841'.split('').map(d => `<td style="border:1px solid #4a4a4a;padding:6px 12px;color:#88b0ff;font-size:18px;font-weight:700">${d}</td>`).join('')}</tr>
</table>`;

const COLUMNS_8 = `<table style="margin:14px auto 0;border-collapse:collapse;text-align:center;font-size:14px">
  <tr><td style="border:1px solid #4a4a4a;padding:6px 14px;color:#8f8f8f">\\( 8^1 \\)</td><td style="border:1px solid #4a4a4a;padding:6px 14px;color:#8f8f8f">\\( 8^0 \\)</td></tr>
  <tr><td style="border:1px solid #4a4a4a;padding:6px 14px;color:#ffb192;font-size:18px;font-weight:700">2</td><td style="border:1px solid #4a4a4a;padding:6px 14px;color:#ffb192;font-size:18px;font-weight:700">5</td></tr>
</table>`;

export default {
  id: 'lesson-5-1',
  title: 'Divisibility and Number Bases',
  kicker: 'Using the Integers',
  topicIndex: 4,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=5&lesson=2',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Vocabulary sprint. One of these claims is a lie — tap it.',
      body: 'Divisor, multiple, prime, composite: five minutes of vocab powers the whole chapter.',
      interaction: {
        type: 'errorhunt',
        lines: [
          { text: 'The divisors of 20 are exactly 1, 2, 4, 5, 10, and 20.' },
          { text: '2 is prime — and it is the only even prime.' },
          { text: '1 is prime.', wrong: true },
          { text: '\\( 91 = 7 \\cdot 13 \\), so 91 is composite.' },
        ],
      },
      hint: 'One of these numbers is famously in neither club.',
      explain: '1 is <em>not</em> prime — and not composite either. Primes have exactly two divisors; 1 has one. (Every even number bigger than 2 is divisible by 2, so 2 really is the only even prime, and 91&rsquo;s innocent look hides \\( 7 \\cdot 13 \\).)',
      note: '<b>1 is neither prime nor composite.</b> Filed. Every prime-counting problem you ever meet will test this once.',
      coach: ['Count each number&rsquo;s divisors. Primes have exactly two.'],
    },
    {
      prompt: 'Notation: \\( m \\mid n \\) means &ldquo;\\( m \\) divides \\( n \\)&rdquo;. Which statement is FALSE?',
      interaction: {
        type: 'mcq',
        options: ['\\( 13 \\mid 26 \\)', '\\( 12 \\mid 24 \\)', '\\( 11 \\mid 23 \\)', '\\( 5 \\mid 100 \\)'],
        correct: 2,
      },
      hint: 'Read \\( m \\mid n \\) as &ldquo;\\( n \\) is a multiple of \\( m \\)&rdquo;.',
      explain: '\\( 23 = 2 \\cdot 11 + 1 \\) — a remainder survives, so \\( 11 \\nmid 23 \\) (the slash negates). The vertical bar is a <em>claim</em>, not a fraction: small number left, big number right.',
      coach: ['Divide each right number by its left number and watch for remainders.'],
    },
    {
      prompt: 'You&rsquo;ve used place value your whole life. Look at it once, on purpose.',
      body: 'The numeral 7,965,841 unpacked into columns:' + COLUMNS_10,
      interaction: {
        type: 'reveal',
        face: 'Each column is worth ten times its neighbor. Why ten?',
        cta: 'Tap for the uncomfortable answer',
        hidden: 'No mathematical reason at all — we have ten fingers. \\( 7965841 = 7 \\cdot 10^6 + 9 \\cdot 10^5 + 6 \\cdot 10^4 + 5 \\cdot 10^3 + 8 \\cdot 10^2 + 4 \\cdot 10 + 1 \\). The machinery only needs SOME base to stack powers of. Cartoon characters with eight fingers would build the exact same system on powers of 8 — and next beat, we do.',
      },
      success: 'Base 10 is a biological accident. The column idea is the mathematics.',
      coach: ['What is each column worth, relative to the one on its right?'],
    },
    {
      prompt: 'Base 8: digits 0–7, columns worth powers of 8. So \\( 25_8 \\) means:' + COLUMNS_8 + '<br>Now you: \\( 34_8 \\) in base 10?',
      interaction: {
        type: 'mcq',
        options: ['28', '34', '32', '27'],
        correct: 0,
      },
      hint: 'Three eights and four ones.',
      explain: '\\( 34_8 = 3 \\cdot 8 + 4 = 28 \\). (And \\( 25_8 = 2 \\cdot 8 + 5 = 21 \\).) The subscript names the base; never read \\( 34_8 \\) as &ldquo;thirty-four&rdquo; — say &ldquo;three-four base eight.&rdquo; One more rule: a digit must be SMALLER than the base — there is no digit 8 in base 8, just as there&rsquo;s no digit called &ldquo;ten&rdquo; in base 10.',
      coach: ['Columns: 8s and 1s.', 'Multiply out and add.'],
    },
    {
      prompt: 'Base → 10 drill: evaluate the expansion.',
      body: 'First \\( 3456_7 \\). Then the same digits 4 and 7 in three different bases — watch the value change under your feet.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 3456_7 \\)', answer: '1266', width: 100 },
          { label: '\\( 47_8 \\)', answer: '39', width: 84 },
          { label: '\\( 47_9 \\)', answer: '43', width: 84 },
          { label: '\\( 47_{16} \\)', answer: '71', width: 84 },
        ],
      },
      hint: '\\( 3456_7 = 3 \\cdot 343 + 4 \\cdot 49 + 5 \\cdot 7 + 6 \\). The 47s: four bases plus seven ones.',
      explain: '\\( 1029 + 196 + 35 + 6 = 1266 \\). And \\( 47_b = 4b + 7 \\): 39, 43, 71 for \\( b = 8, 9, 16 \\). Same marks on paper, three different numbers — the numeral means nothing until the base speaks.',
      note: 'A numeral is digits <em>and</em> a base. \\( 47_8 \\ne 47_9 \\ne 47_{16} \\); the contrast IS the concept.',
      coach: ['Write each column&rsquo;s power of the base first.', 'For the 47s: the formula is just \\( 4b + 7 \\).'],
    },
    {
      prompt: 'Now backwards: write 216 in base 4. You drive the greedy fill.',
      body: 'Columns available: 64s, 16s, 4s, 1s — digits 0–3 in each. Take as many of the biggest column as fit.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( 216 = \\; ?\\cdot 64 \\; + \\; ?\\cdot 16 \\; + \\; ?\\cdot 4 \\; + \\; ?\\cdot 1 \\)' },
          try2: { eq: '\\( 2 \\cdot 64 = 128, \\quad \\text{leftover } 88 \\)', note: 'Too few. The remaining columns max out at \\( 3 \\cdot 16 + 3 \\cdot 4 + 3 \\cdot 1 = 63 \\) — they can&rsquo;t swallow 88. Greedy means GREEDY: take every 64 that fits. Undo.' },
          s1: { eq: '\\( 216 = 3 \\cdot 64 + 24, \\quad \\text{24 left for the smaller columns} \\)' },
          s2: { eq: '\\( 24 = 1 \\cdot 16 + 8, \\quad \\text{8 left} \\)' },
          s3: { eq: '\\( 8 = 2 \\cdot 4 + 0, \\quad \\text{0 left} \\)' },
          win: { eq: '\\( 216 = 3120_4 \\)', note: 'Check by going forward: \\( 3 \\cdot 64 + 1 \\cdot 16 + 2 \\cdot 4 + 0 = 192 + 16 + 8 = 216 \\) ✓. Greedy: biggest power, all that fit, cascade the remainder down.' },
        },
        ops: [
          { label: 'Take 2 sixty-fours', to: { s0: 'try2' } },
          { label: 'Take 3 sixty-fours', to: { s0: 's1' } },
          { label: 'How many 16s fit in 24? One.', to: { s1: 's2' }, blocked: 'Settle the 64s column first — greedy runs big to small.' },
          { label: 'How many 4s fit in 8? Two.', to: { s2: 's3' }, blocked: 'Not this column&rsquo;s turn yet.' },
          { label: 'Ones column: 0. Assemble the numeral.', to: { s3: 'win' }, blocked: 'Work the bigger columns down to a remainder first.' },
        ],
      },
      hint: '\\( 64 \\) fits into 216 three times, not two — and the too-few path is worth seeing once.',
      success: 'Greedy fill: largest power, maximum count, remainder cascades down.',
      coach: ['Try the 2-sixty-fours path once — the component shows exactly why it dies.', 'After the 64s, each remainder is a smaller version of the same problem.'],
    },
    {
      prompt: 'Base 16 needs digits past 9. Letters volunteer.',
      body: 'Match each hex digit to its value.',
      interaction: {
        type: 'match',
        pairs: [
          ['A', '10'],
          ['C', '12'],
          ['E', '14'],
          ['F', '15'],
        ],
      },
      hint: 'A starts at 10 and the alphabet counts up from there.',
      success: 'A through F cover 10 through 15 — sixteen digits for base sixteen.',
      coach: ['A = 10; count letters upward.'],
    },
    {
      prompt: 'Hex can spell. What is \\( BEE_{16} \\) in base 10?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'base 10', answer: '3054', width: 110 }],
      },
      hint: 'Columns: 256s, 16s, 1s. B = 11, E = 14.',
      explain: '\\( 11 \\cdot 256 + 14 \\cdot 16 + 14 = 2816 + 224 + 14 = 3054 \\). (CAFE, FEED, and DEADBEEF also parse — hex programmers have been enjoying this for decades.)',
      coach: ['Convert the letters to values first.', 'Then it&rsquo;s the same expansion as every other base.'],
    },
    {
      prompt: 'Base 2 — the other famous base. Step the counter.',
      body: 'Two digits, 0 and 1. Watch how fast the columns multiply.',
      interaction: {
        type: 'slider',
        min: 1, max: 12, step: 1, value: 1, label: 'n', mustExplore: 5,
        render(n) {
          return {
            main: `\\( ${n}_{10} = ${n.toString(2)}_{2} \\)`,
            sub: n === 8 ? 'A new column exactly at 8 = 2³ — binary numerals grow a digit at every power of 2.' : `${n.toString(2).length} binary digit${n.toString(2).length > 1 ? 's' : ''} — columns are 8s, 4s, 2s, 1s.`,
          };
        },
      },
      success: 'Binary is base-8&rsquo;s little sibling: same machinery, only two digits.',
      coach: ['Watch which values of n grow a new digit.'],
    },
    {
      prompt: 'In base 10, multiplying by ten appends a 0. Multiplying a binary numeral by two does what?',
      interaction: {
        type: 'mcq',
        options: [
          'Appends a 0 — same move, because 2 is binary&rsquo;s ten',
          'Doubles every digit',
          'Appends a 1',
          'Reverses the digits',
        ],
        correct: 0,
      },
      hint: 'What does multiplying by the BASE do to any base&rsquo;s numerals?',
      explain: 'Multiplying by the base shifts every digit one column left and fills the ones column with 0: \\( 101_2 \\times 2 = 1010_2 \\) (5 × 2 = 10 ✓). The parallel is the answer: 2 plays the role in base 2 that 10 plays in base 10.',
      note: 'Base-b numerals × b = append a zero. Every &ldquo;obvious&rdquo; base-10 fact has a base-b twin; finding the twin is half of base-problem solving.',
      coach: ['Test it on 101₂ = 5.'],
    },
    {
      prompt: 'Add in base 2: \\( 1001110_2 + 11001101_2 \\).',
      body: 'Carry at TWO, not ten: two 1s in a column make \\( 10_2 \\) — write 0, carry 1. Verify your answer in decimal (the numbers are 78 and 205).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'binary sum', answer: '100011011', width: 170 },
          { label: 'decimal check', answer: '283', width: 100 },
        ],
      },
      hint: 'Column by column from the right; \\( 1 + 1 = 10_2 \\) and \\( 1 + 1 + 1 = 11_2 \\).',
      explain: '\\( 1001110_2 + 11001101_2 = 100011011_2 \\), and \\( 78 + 205 = 283 = 256 + 16 + 8 + 2 + 1 \\) ✓. Carrying means &ldquo;traded a group of \\( b \\) for one unit of the next column&rdquo; — in base 7, \\( 5 + 4 = 9 = 12_7 \\): write 2, carry 1. Same trade, different group size.',
      note: 'Addition works identically in every base; only the trade-in threshold changes. Carry when a column reaches \\( b \\), not 10.',
      coach: ['Line the numerals up by their ones column.', 'Each column: add, write the remainder mod 2, carry the rest.', 'The decimal check catches any slipped carry.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Write 47 in bases 8, 9, and 16.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'base 8', answer: '57', width: 90 },
          { label: 'base 9', answer: '52', width: 90 },
          { label: 'base 16', answer: '2F', width: 90 },
        ],
      },
      hint: 'Greedy each time: how many 8s? 9s? 16s?',
      explain: '\\( 47 = 5 \\cdot 8 + 7 = 57_8 \\); \\( 47 = 5 \\cdot 9 + 2 = 52_9 \\); \\( 47 = 2 \\cdot 16 + 15 = 2F_{16} \\) — the leftover 15 needs a single digit, and F is its name.',
      coach: ['Largest power first, remainder down.', 'In base 16, remainders above 9 wear letters.'],
    },
    {
      section: 'checkpoint',
      prompt: 'The largest three-digit base-5 number, written in base 10?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'base 10', answer: '124', width: 100 }],
      },
      hint: 'Largest digits everywhere: \\( 444_5 \\).',
      explain: '\\( 444_5 = 4 \\cdot 25 + 4 \\cdot 5 + 4 = 124 \\) — one less than \\( 5^3 = 125 \\), the base-5 version of 999 being one less than 1000.',
      coach: ['What&rsquo;s the biggest digit base 5 allows?', 'Compare your answer to 5³.'],
    },
    {
      section: 'checkpoint',
      prompt: 'A binary numeral is fifteen 1s in a row. Triple it. How many binary digits does the result have?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'digits', answer: '17', width: 100 }],
      },
      hint: 'Fifteen 1s is \\( 2^{15} - 1 \\). Tripled: \\( 3 \\cdot 2^{15} - 3 \\), which is just below \\( 2^{17} \\).',
      explain: '\\( 3(2^{15} - 1) = 3 \\cdot 2^{15} - 3 = 98301 \\). Since \\( 2^{16} = 65536 \\le 98301 < 131072 = 2^{17} \\), it needs <b>17</b> digits. The all-ones trick (\\( 111\\ldots1_2 = 2^k - 1 \\)) turns digit puzzles into exponent arithmetic.',
      coach: ['Name the all-ones number with a power of 2.', 'Squeeze the tripled value between consecutive powers of 2.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Solo: \\( 1011_2 + 110_2 \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'binary', answer: '10001', width: 130 }],
      },
      hint: 'That&rsquo;s 11 + 6 — the answer should be 17 in disguise.',
      explain: '\\( 1011_2 + 110_2 = 10001_2 \\): the middle columns cascade two carries. Decimal check: \\( 11 + 6 = 17 = 16 + 1 \\) ✓.',
      coach: ['Carries chain here — follow them through.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'Given \\( 9^6 = 531{,}441 \\): what is 531,440 in base 9?',
      interaction: {
        type: 'mcq',
        options: ['\\( 888888_9 \\)', '\\( 100000_9 \\)', '\\( 111111_9 \\)', '\\( 531440_9 \\)'],
        correct: 0,
      },
      hint: 'It&rsquo;s \\( 9^6 - 1 \\). What does &ldquo;one less than a power of the base&rdquo; look like? Think 999,999.',
      explain: '\\( 9^6 \\) is \\( 1000000_9 \\), so one less rolls every column down to the max digit: \\( 888888_9 \\) — the base-9 analog of 999,999. No division required; the structure answers instantly.',
      coach: ['What is 10⁶ − 1 in base 10?', 'Port that picture to base 9, where the max digit is 8.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'How many natural numbers need exactly 3 digits in base 12 but exactly 4 digits in base 9?',
      body: 'MATHCOUNTS 1989. First, a card worth its own tap: <em>k digits in base b</em> means the number lives in \\( [\\,b^{k-1},\\; b^k - 1\\,] \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'count', answer: '999', width: 110 }],
      },
      hint: 'Three digits base 12: \\( [144, 1727] \\). Four digits base 9: \\( [729, 6560] \\). Intersect.',
      explain: 'The overlap is \\( [729, 1727] \\), which holds \\( 1727 - 729 + 1 = 999 \\) numbers — mind the +1, both endpoints count.',
      walkthrough: [
        'Translate each digit-count into a range: 3 digits base 12 means at least \\( 12^2 = 144 \\) (the smallest 3-digit numeral, \\( 100_{12} \\)) and at most \\( 12^3 - 1 = 1727 \\) (\\( BBB_{12} \\)).',
        'Same move for base 9: 4 digits means \\( [9^3, 9^4 - 1] = [729, 6560] \\).',
        'Both conditions at once = the intersection: \\( [\\max(144, 729), \\min(1727, 6560)] = [729, 1727] \\).',
        'Count inclusively: \\( 1727 - 729 + 1 = 999 \\). (The +1 is the classic fence-post: from 729 to 1727 there are 999 integers, not 998.)',
      ],
      success: 'Digit-count conditions are just interval conditions — and intervals intersect with a max and a min.',
      note: '<b>k digits in base b \\( \\iff \\) the number is in \\( [b^{k-1}, b^k - 1] \\).</b> Every digit-count problem starts by writing this down.',
      coach: ['What are the smallest and largest 3-digit base-12 numbers?', 'Write both ranges, then take the overlap.', 'Inclusive counting: last − first + 1.'],
    },
  ],
};
