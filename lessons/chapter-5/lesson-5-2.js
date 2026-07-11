/* Lesson 5.3–5.4 — The Last Digit and Modular Arithmetic.
   The book's pedagogical move, honored: last digits ARE mods. The mod wheel
   (inline SVG + sliders) turns congruence notation into geometry. */

const WHEEL_SVG = `<svg viewBox="0 0 120 120" width="180" style="max-width:100%;display:block;margin:14px auto 0" role="img" aria-label="A wheel with five spokes labeled 0 through 4">
  <circle cx="60" cy="60" r="45" fill="none" stroke="#4a4a4a" stroke-width="2"/>
  <line x1="60" y1="60" x2="60" y2="15" stroke="#4a4a4a"/><line x1="60" y1="60" x2="102.8" y2="46.1" stroke="#4a4a4a"/><line x1="60" y1="60" x2="86.5" y2="96.4" stroke="#4a4a4a"/><line x1="60" y1="60" x2="33.5" y2="96.4" stroke="#4a4a4a"/><line x1="60" y1="60" x2="17.2" y2="46.1" stroke="#4a4a4a"/>
  <text x="60" y="10" fill="#88b0ff" font-size="11" text-anchor="middle" font-weight="700">0</text>
  <text x="112" y="46" fill="#e8e8e8" font-size="11" text-anchor="middle">1</text>
  <text x="93" y="110" fill="#57d364" font-size="11" text-anchor="middle" font-weight="700">2</text>
  <text x="27" y="110" fill="#e8e8e8" font-size="11" text-anchor="middle">3</text>
  <text x="8" y="46" fill="#e8e8e8" font-size="11" text-anchor="middle">4</text>
</svg>`;

const PAIRS = [[34, 17], [48, 29], [56, 73], [81, 66], [92, 38]];

export default {
  id: 'lesson-5-2',
  title: 'The Last Digit and Modular Arithmetic',
  kicker: 'Using the Integers',
  topicIndex: 4,
  lessonIndex: 1,
  next: 'interactive-lesson.html?chapter=5&lesson=3',
  notes: 'modular-arithmetic.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Claim: the last digit of a sum or product only cares about the last digits of the inputs.',
      body: 'Step through the trial pairs — full computation on the left, last-digits-only on the right.',
      interaction: {
        type: 'slider',
        min: 0, max: 4, step: 1, value: 0, label: 'trial', mustExplore: 4,
        render(i) {
          const [a, b] = PAIRS[i];
          const la = a % 10, lb = b % 10;
          return {
            main: `\\( ${a} \\cdot ${b} = ${a * b} \\qquad\\quad ${la} \\cdot ${lb} = ${la * lb} \\)`,
            sub: `Units digits: ${(a * b) % 10} and ${(la * lb) % 10} — identical. Sum check: ${a}+${b} = ${a + b} vs ${la}+${lb} = ${la + lb}, units ${(a + b) % 10} and ${(la + lb) % 10}. Also identical.`,
          };
        },
      },
      success: 'Why: everything except the units digits is a multiple of 10, and multiples of 10 can&rsquo;t touch the units place.',
      note: 'Write \\( 34 = 30 + 4 \\): in \\( (30+4)(10+7) \\), three of the four products carry a factor of 10. Only \\( 4 \\cdot 7 \\) reaches the units digit. Last-digit questions never require the full computation.',
      coach: ['Compare the two units digits at each trial.'],
    },
    {
      prompt: 'Units digit of \\( 7^n \\) as \\( n \\) grows — step it.',
      body: 'You&rsquo;ve seen this exact structure before, in a different costume.',
      interaction: {
        type: 'slider',
        min: 1, max: 12, step: 1, value: 1, label: 'n', mustExplore: 6,
        render(n) {
          const cycle = ['7', '9', '3', '1'];
          return {
            main: `\\( 7^{${n}} \\text{ ends in } ${cycle[(n - 1) % 4]} \\)`,
            sub: `7, 9, 3, 1, 7, 9, 3, 1, … — period 4. The same wheel the powers of i rode in the Complex Numbers chapter: cycle of 4, position = exponent’s remainder.`,
          };
        },
      },
      success: 'Powers of 7 cycle with period 4 — like \\( i^n \\), a cycle plus a remainder.',
      note: 'The ritual: find the cycle, reduce the exponent <b>mod the cycle length</b> (not mod 10!), read off the position. \\( 7^{42} \\): \\( 42 = 4 \\cdot 10 + 2 \\), so it matches \\( 7^2 \\) — units digit 9.',
      coach: ['List the first four units digits, then watch them repeat.'],
    },
    {
      prompt: 'Full ritual: the units digit of \\( 7^{42} + 2^{27} \\).',
      body: 'Two cycles, two reductions, one addition.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'units of \\( 7^{42} \\)', answer: '9', width: 90 },
          { label: 'units of \\( 2^{27} \\)', answer: '8', width: 90 },
          { label: 'units of the sum', answer: '7', width: 90 },
        ],
      },
      hint: '2&rsquo;s cycle is 2, 4, 8, 6 (period 4, starting at \\( 2^1 \\)). Reduce each exponent mod 4.',
      explain: '\\( 42 \\equiv 2 \\pmod 4 \\) → matches \\( 7^2 \\) → 9. \\( 27 \\equiv 3 \\pmod 4 \\) → matches \\( 2^3 \\) → 8. Then \\( 9 + 8 = 17 \\): units digit <b>7</b>. Beat 1&rsquo;s rule let us add just the 9 and 8.',
      coach: ['Write out 2&rsquo;s units cycle first.', 'The exponent reduces mod the CYCLE LENGTH, 4 — never mod 10.', 'Finish with the last-digit-of-a-sum rule.'],
    },
    {
      prompt: 'Now the real machinery. Count around a five-spoke wheel.',
      body: 'Numbers wind around; the spoke they land on is their remainder mod 5.' + WHEEL_SVG,
      interaction: {
        type: 'slider',
        min: 0, max: 19, step: 1, value: 0, label: 'n', mustExplore: 6,
        render(n) {
          const r = n % 5;
          return {
            main: `\\( ${n} \\equiv ${r} \\pmod 5 \\)`,
            sub: r === 2 ? `${n} lands on spoke 2 — sharing it with 2, 7, 12, 17, … All congruent, all ≡ 2 (mod 5).` : `Spoke ${r}. Step by 5 from here and you never leave it.`,
          };
        },
      },
      success: 'a ≡ b (mod m) means: same spoke on the m-wheel.',
      note: 'Three views, one idea: same spoke = same remainder on division by 5 = <b>same last digit in base 5</b>. That last one is the bridge from the previous lesson — mods are what &ldquo;last digit&rdquo; was secretly about all along.',
      coach: ['Watch which numbers revisit the green spoke.'],
    },
    {
      prompt: 'Spin the wheel backwards — negative numbers wrap too.',
      body: 'Start at 2 and step DOWN by 5s.',
      interaction: {
        type: 'slider',
        min: -13, max: 2, step: 5, value: 2, label: 'n', mustExplore: 3,
        render(n) {
          const r = ((n % 5) + 5) % 5;
          return {
            main: `\\( ${n} \\equiv ${r} \\pmod 5 \\)`,
            sub: `2, −3, −8, −13 — every stop is spoke 2. Negative numbers have residues like everyone else; −3 and 2 are the same animal mod 5.`,
          };
        },
      },
      success: 'So 2 ≡ −3 (mod 5): a residue may be represented by a negative number whenever that&rsquo;s convenient.',
      note: 'Remember this trick: sometimes the NEGATIVE representative is the useful one. Next lesson, \\( 10 \\equiv -1 \\pmod{11} \\) will crack the divisibility rule for 11 wide open.',
      coach: ['Each backwards step of 5 is one full lap in reverse — same spoke.'],
    },
    {
      prompt: 'Quick check: is \\( -1 \\equiv 4 \\pmod 5 \\)?',
      interaction: {
        type: 'mcq',
        shuffle: false,
        cols: true,
        options: ['Yes — they differ by 5', 'No — one of them is negative'],
        correct: 0,
      },
      hint: 'Congruent means they differ by a multiple of the modulus.',
      explain: '\\( 4 - (-1) = 5 \\), a multiple of 5, so yes: −1 and 4 share a spoke. &ldquo;Negative numbers can&rsquo;t have remainders&rdquo; is superstition — the wheel doesn&rsquo;t care about sign.',
      coach: ['Compute the difference. Is it a multiple of 5?'],
    },
    {
      prompt: 'Mod-out drill.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 123 \\bmod 4 \\)', answer: '3', width: 90 },
          { label: '\\( 321 \\bmod 7 \\)', answer: '6', width: 90 },
          { label: 'largest \\( n < 100 \\) with \\( n \\equiv 3 \\pmod 5 \\)', answer: '98', width: 100 },
        ],
      },
      hint: 'Strip out the biggest multiple you can see: \\( 123 = 120 + 3 \\), \\( 321 = 315 + 6 \\).',
      explain: '\\( 123 = 30 \\cdot 4 + 3 \\); \\( 321 = 45 \\cdot 7 + 6 \\). For the last: numbers ≡ 3 (mod 5) end in 3 or 8, and the largest below 100 is <b>98</b>.',
      coach: ['Find a nearby friendly multiple and take the difference.', 'Mod 5, look at last digits: 3s and 8s.'],
    },
    {
      prompt: 'How many positive \\( n < 100 \\) satisfy \\( n \\equiv 3 \\pmod 5 \\)?',
      body: 'The entire difficulty of this genre is an off-by-one. Name the first and last landings before counting.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'count', answer: '20', width: 100 }],
      },
      hint: 'They&rsquo;re \\( 5k + 3 \\): first is 3 (k = 0), last is 98 (k = 19).',
      explain: 'k runs 0 through 19 — that&rsquo;s \\( 19 - 0 + 1 = 20 \\) values. Counting k instead of n is the trick: the +3 shift stops mattering and the fence-posts count themselves.',
      note: 'Residue-class counting: write the class as \\( mk + r \\), find the k-range, count k inclusively. The answer is never &ldquo;about 100/5&rdquo; — it&rsquo;s exactly the k-count.',
      coach: ['Write the class members as 5k + 3.', 'What are the smallest and largest legal k?'],
    },
    {
      prompt: 'Two solo counts.',
      body: 'First: \\( n \\in [50, 250] \\) with \\( n \\equiv 1 \\pmod 7 \\). Second: plain multiples of 7 in \\( [100, 200] \\) — same skill, no congruence costume.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'first count', answer: '29', width: 100 },
          { label: 'second count', answer: '14', width: 100 },
        ],
      },
      hint: 'First: \\( 7k+1 \\) from 50 (k = 7) to 246 (k = 35). Second: \\( 7k \\) from 105 (k = 15) to 196 (k = 28).',
      explain: 'First: k runs 7–35 → \\( 35 - 7 + 1 = 29 \\). Second: k runs 15–28 → 14 multiples. A &ldquo;multiple of 7&rdquo; is just \\( n \\equiv 0 \\pmod 7 \\) — the costume was never real.',
      coach: ['Find the first member at or above the lower bound.', 'Find the last member at or below the upper bound.', 'Count the k values inclusively.'],
    },
    {
      prompt: 'Given \\( 12 \\equiv 7 \\pmod 5 \\): which move is NOT guaranteed safe?',
      body: 'Everything else on this list is a legal move you may make to both sides of any congruence.',
      interaction: {
        type: 'mcq',
        options: [
          'Divide both sides by a common factor',
          'Add 3 to both sides',
          'Multiply both sides by 4',
          'Square both sides',
        ],
        correct: 0,
      },
      hint: 'Test each move on \\( 12 \\equiv 7 \\pmod 5 \\) — or on \\( 5 \\equiv 10 \\pmod 5 \\).',
      explain: 'Adding: \\( 15 \\equiv 10 \\) ✓. Multiplying: \\( 48 \\equiv 28 \\) ✓ (both ≡ 3). Squaring: \\( 144 \\equiv 49 \\) ✓ (both ≡ 4). But division dies: \\( 5 \\equiv 10 \\pmod 5 \\), yet dividing by 5 would claim \\( 1 \\equiv 2 \\). False.',
      note: 'Legal moves on congruences: <b>add, subtract, multiply, raise to powers</b> — and mod out before or after any of them, whichever is cheaper. Division is NOT on the list.',
      coach: ['Try each operation on a concrete true congruence.', 'One of them produces something visibly false.'],
    },
    {
      prompt: 'A student &ldquo;proves&rdquo; \\( 1 \\equiv 2 \\pmod 5 \\). Tap the crime.',
      interaction: {
        type: 'errorhunt',
        lines: [
          { text: '\\( 5 \\equiv 10 \\pmod 5 \\) — both are multiples of 5, both on spoke 0. True.' },
          { text: 'Divide both sides by 5: \\( 1 \\equiv 2 \\pmod 5 \\).', wrong: true },
          { text: 'But 1 and 2 are different spokes — contradiction!' },
        ],
      },
      hint: 'Each line is either a true statement or a legal move. One line is neither.',
      explain: 'Line 2 divides both sides of a congruence — the one move not on the legal list. Division needs machinery (modular inverses) this book saves for the sequel. Until then: <em>just don&rsquo;t divide.</em>',
      coach: ['Check line 1 on the wheel — it&rsquo;s honest.', 'Which line performs an operation rather than stating a fact?'],
    },
    {
      prompt: 'Mod out EARLY: \\( 9899 \\cdot 7677 \\pmod 5 \\), and \\( 9453 \\cdot 6824 \\pmod 5 \\).',
      body: 'Nobody computes those products. Reduce each factor first.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 9899 \\cdot 7677 \\bmod 5 \\)', answer: '3', width: 110 },
          { label: '\\( 9453 \\cdot 6824 \\bmod 5 \\)', answer: '2', width: 110 },
        ],
      },
      hint: 'Mod 5 needs only the last digit: 9 → 4, 7 → 2, 3 → 3, 4 → 4.',
      explain: '\\( 9899 \\equiv 4 \\) and \\( 7677 \\equiv 2 \\): product \\( \\equiv 8 \\equiv 3 \\). \\( 9453 \\equiv 3 \\), \\( 6824 \\equiv 4 \\): product \\( \\equiv 12 \\equiv 2 \\). Eight digits of multiplication avoided per problem — mod-before-multiplying is the single biggest labor saver in this chapter.',
      coach: ['Reduce each factor mod 5 first — last digits suffice.', 'Multiply the tiny residues, reduce once more.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Units digit of \\( 19^{93} \\)?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'units digit', answer: '9', width: 90 }],
      },
      hint: 'Only the 9 matters, and 9&rsquo;s cycle is short: 9, 1, 9, 1, …',
      explain: 'Units of \\( 9^n \\): 9 for odd \\( n \\), 1 for even. 93 is odd → <b>9</b>.',
      coach: ['First reduce the base to its last digit.', 'Then check the exponent&rsquo;s parity.'],
    },
    {
      section: 'checkpoint',
      prompt: 'If \\( n \\equiv 1 \\pmod 5 \\), what is \\( 3n \\bmod 5 \\)?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '3n mod 5', answer: '3', width: 90 }],
      },
      hint: 'Multiply both sides of the congruence by 3 — a legal move.',
      explain: '\\( n \\equiv 1 \\) → \\( 3n \\equiv 3 \\pmod 5 \\). Check with \\( n = 6 \\): \\( 18 \\equiv 3 \\) ✓. Pure legal-moves, no computation.',
      coach: ['Which legal move produces 3n from n?'],
    },
    {
      section: 'checkpoint',
      prompt: 'Units digit of \\( 3^{1986} - 2^{1986} \\)?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'units digit', answer: '5', width: 90 }],
      },
      hint: 'Two cycles of length 4; \\( 1986 \\equiv 2 \\pmod 4 \\). Then subtract — carefully.',
      explain: '\\( 3 \\)-cycle 3, 9, 7, 1: position 2 → 9. \\( 2 \\)-cycle 2, 4, 8, 6: position 2 → 4. Difference ends in \\( 9 - 4 = 5 \\). (Had it come out negative — say 4 − 9 — you&rsquo;d add 10: the units digit is a residue, never negative.)',
      coach: ['Reduce 1986 mod 4 once, use it twice.', 'If the subtraction of units digits goes negative, wrap by adding 10.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Which values can a perfect square take mod 8?',
      body: 'There are only 8 residues in the whole universe mod 8 — check them all.',
      interaction: {
        type: 'mcq',
        options: ['0, 1, and 4 only', 'All of 0–7', '0 and 1 only', '1, 4, and 7 only'],
        correct: 0,
      },
      hint: 'Square each of 0–7 and reduce: the eight answers repeat fast.',
      explain: '\\( 0,1,4,9,16,25,36,49 \\equiv 0,1,4,1,0,1,4,1 \\pmod 8 \\) — squares only hit {0, 1, 4}. &ldquo;Check finitely many cases&rdquo; is the wheel&rsquo;s superpower: eight spokes, eight checks, a theorem. This exact move kills two problems in the primes lesson.',
      coach: ['A square&rsquo;s residue depends only on its root&rsquo;s residue.', 'Eight spokes to test. Test them.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'A number \\( n \\) leaves remainder \\( k - 1 \\) when divided by each \\( k \\) from 2 through 10 — remainder 1 mod 2, 2 mod 3, … 9 mod 10. The key insight?',
      body: 'AHSME 1951. You can&rsquo;t finish it yet — but you can find the door.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( n + 1 \\) is divisible by every \\( k \\) from 2 to 10',
          '\\( n \\) is divisible by every \\( k \\) from 2 to 10',
          '\\( n \\) must be prime',
          '\\( n - 1 \\) is divisible by every \\( k \\) from 2 to 10',
        ],
        correct: 0,
      },
      hint: 'Remainder \\( k - 1 \\) means &ldquo;one short of a clean multiple.&rdquo; What single shift fixes ALL nine conditions?',
      explain: 'Being 1 short of a multiple of every \\( k \\) means \\( n + 1 \\) IS a multiple of every \\( k \\) from 2 to 10. To finish you need the smallest number divisible by all of 2–10 — machinery two lessons away. Park it; when LCM arrives, this becomes a one-liner (spoiler: \\( n = 2519 \\)).',
      coach: ['&ldquo;Remainder 9 mod 10&rdquo; — how far is n from a multiple of 10?', 'The same +1 heals every condition simultaneously.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'The sequence \\( 1, 3, 5, 7, 9, 11, 13, 15, 1, 3, 5, \\ldots \\) repeats forever. What is its 1275th term?',
      body: 'Mandelbrot. Mods as position-finding — a genuinely different job for the same wheel.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '1275th term', answer: '5', width: 100 }],
      },
      hint: 'The block 1, 3, 5, …, 15 has 8 terms. Where does 1275 land within a block? \\( 1275 \\bmod 8 \\).',
      explain: '\\( 1275 = 159 \\cdot 8 + 3 \\): after 159 complete laps, the 1275th term is the 3rd of a fresh block — which is <b>5</b>.',
      walkthrough: [
        'Measure the period: one block is 1, 3, 5, 7, 9, 11, 13, 15 — eight terms.',
        'Positions on an 8-wheel: term number mod 8 tells you where in the block you are. \\( 1275 = 159 \\cdot 8 + 3 \\), so \\( 1275 \\equiv 3 \\pmod 8 \\).',
        'Remainder 3 means: 159 full laps, then 3 steps in — the third term of the block.',
        'Third term of 1, 3, 5, … is 5. (Careful case: a remainder of 0 would mean the LAST term of a block, 15 — the one spot where naive indexing slips.)',
      ],
      success: 'Anything periodic — sequences, calendars, units digits, powers of i — is a wheel, and mods read positions off wheels.',
      note: 'Position in a cycle of length \\( p \\): reduce mod \\( p \\), with remainder 0 meaning the block&rsquo;s final element. This one sentence solves every &ldquo;what&rsquo;s the millionth term&rdquo; problem.',
      coach: ['How long is one repeating block?', 'Divide 1275 by that length and keep the remainder.', 'Count that many steps into a fresh block.'],
    },
  ],
};
