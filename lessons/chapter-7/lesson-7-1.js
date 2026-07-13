/* Lesson 7.1 — The Factorization Library.
   Every identity is DERIVED, then collected as a deck card (see identity-deck.js).
   The telescope rail is a balance graph + SVG: terms flip, middles cancel, ends survive. */

const RAIL_SVG = (collapsed = false) => `<svg class="il-mod-wheel" viewBox="0 0 340 74" width="340" role="img" aria-label="Telescoping chain of terms">
  ${[0, 1, 2, 3, 4, 5].map((i) => {
    const x = 12 + i * 54;
    const dim = collapsed && i > 0 && i < 5;
    return `<g opacity="${dim ? 0.18 : 1}">
      <rect x="${x}" y="14" width="50" height="30" rx="7" fill="${dim ? 'none' : 'rgba(136,176,255,.14)'}" stroke="${dim ? '#DEDEEC' : '#88B0FF'}" stroke-width="1.2"/>
      <text class="il-svg-ink" x="${x + 25}" y="33" font-size="10" text-anchor="middle">√${i + 4}−√${i + 3}</text>
    </g>`;
  }).join('')}
  ${collapsed ? `<line x1="66" y1="29" x2="282" y2="29" stroke="#FFB192" stroke-width="1.6" stroke-dasharray="5 4"/>
     <text class="il-svg-peach-ink" x="174" y="66" font-size="11" text-anchor="middle">every middle term cancels its neighbour</text>` : ''}
</svg>`;

export default {
  id: 'lesson-7-1',
  title: 'The Factorization Library',
  kicker: 'Special Factorizations',
  topicIndex: 6,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=7&lesson=2',
  notes: 'factoring.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Compute \\( 100002^2 - 99998^2 \\).',
      body: 'No calculator. If you&rsquo;re reaching for long multiplication, stop — that&rsquo;s the wrong instinct, and this chapter exists to replace it.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'the value', answer: '800000', width: 130 }],
      },
      hint: 'Difference of squares (Chapter 6): \\( a^2 - b^2 = (a-b)(a+b) \\). The difference of these two numbers is tiny.',
      explain: '\\( (100002 - 99998)(100002 + 99998) = 4 \\times 200000 = \\mathbf{800000} \\). Two subtractions and one multiplication — five seconds. Squaring both numbers would take a minute and invite three arithmetic errors.',
      note: 'The thesis of this chapter in one line: <b>identities are speed.</b> Every one you collect turns a grind into a glance.',
      card: 'diff-of-squares',
      coach: ['You know an identity for \\( a^2 - b^2 \\).', 'Here \\( a - b = 4 \\). What is \\( a + b \\)?'],
    },
    {
      prompt: 'So does \\( a^2 + b^2 \\) factor the same way?',
      body: 'The obvious next question — and the answer is a trap that catches everyone once.',
      interaction: {
        type: 'mcq',
        options: [
          'No — it doesn&rsquo;t factor over the reals at all. But it REWRITES: \\( a^2+b^2 = (a+b)^2 - 2ab \\)',
          'Yes: \\( a^2 + b^2 = (a+b)(a+b) \\)',
          'Yes: \\( a^2 + b^2 = (a+b)(a-b) \\)',
          'Yes, but only when \\( a \\) and \\( b \\) are positive',
        ],
        correct: 0,
      },
      hint: 'Test \\( a = b = 1 \\): \\( a^2 + b^2 = 2 \\). Does \\( (a+b)^2 = 4 \\)? Does \\( (a+b)(a-b) = 0 \\)?',
      explain: '\\( (a+b)^2 = a^2 + 2ab + b^2 \\) — too big by \\( 2ab \\). Subtract that surplus and you get the truth: \\( a^2 + b^2 = (a+b)^2 - 2ab \\). It is a <b>rewrite, not a factorization</b> — and it is arguably the most useful line in the whole chapter, because it lets you TRADE between a sum of squares and a sum-and-product.',
      note: 'Sum of squares does not factor over the reals — no amount of cleverness will change that. What it does is convert. Keep that distinction sharp: it&rsquo;s the difference between a dead end and a doorway.',
      card: 'sum-of-squares',
      coach: ['Expand \\( (a+b)^2 \\) and compare it to \\( a^2 + b^2 \\).', 'What is the surplus? Subtract it.'],
    },
    {
      prompt: 'First combo: factor \\( x^4 + x^2y^2 + y^4 \\).',
      body: 'Two cards, chained. It doesn&rsquo;t look like a difference of squares — so <em>make</em> it one, using the rewrite you just earned.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x^4 + x^2y^2 + y^4 \\)' },
          bad: { eq: '\\( (x^2 + y^2)^2 = x^4 + 2x^2y^2 + y^4 \\)', note: 'Not equal to what we have — this overshoots by \\( x^2y^2 \\). But that&rsquo;s not a failure, it&rsquo;s a measurement: our expression is \\( (x^2+y^2)^2 \\) MINUS \\( x^2y^2 \\). Now use it.' },
          s1: { eq: '\\( x^4 + x^2y^2 + y^4 = (x^2 + y^2)^2 - (xy)^2 \\)', note: 'Two squares, separated by a minus. You know exactly what to do with that.' },
          win: { eq: '\\( = (x^2 + y^2 - xy)(x^2 + y^2 + xy) \\)', note: 'A quartic in two variables, factored by chaining two cards. Neither card alone could touch it — that&rsquo;s the point of a deck.' },
        },
        ops: [
          { label: 'Compare with \\( (x^2 + y^2)^2 \\)', to: { s0: 'bad' } },
          { label: 'Rewrite as \\( (x^2+y^2)^2 - (xy)^2 \\)', to: { s0: 's1', bad: 's1' } },
          { label: 'Apply difference of squares', to: { s1: 'win' }, blocked: 'You need TWO squares with a minus between them first. Reshape it.' },
        ],
      },
      hint: '\\( (x^2+y^2)^2 = x^4 + 2x^2y^2 + y^4 \\) — one \\( x^2y^2 \\) too many. So our expression is that square minus \\( (xy)^2 \\).',
      success: 'Rewrite into a difference of squares, then factor. Two cards, one move each.',
      note: 'The move to steal: when an expression is <em>close</em> to a perfect square, name the gap. The gap is usually itself a square — and then the difference-of-squares card fires.',
      coach: ['What perfect square is closest to this expression?', 'Measure the overshoot. Is it a square?'],
    },
    {
      prompt: 'Now derive a new card. Why must \\( (a - b) \\) be a factor of \\( a^3 - b^3 \\)?',
      body: 'Chapter 6&rsquo;s root→factor principle, promoted from numbers to expressions.',
      interaction: {
        type: 'mcq',
        options: [
          'Setting \\( a = b \\) makes \\( a^3 - b^3 = 0 \\) — so \\( a - b \\) divides it',
          'Because \\( a^3 - b^3 \\) is a difference, and all differences factor',
          'Because \\( a^3 \\) and \\( b^3 \\) are both cubes',
          'It isn&rsquo;t — \\( a^3 - b^3 \\) doesn&rsquo;t factor',
        ],
        correct: 0,
      },
      hint: 'In Chapter 6: if \\( x = r \\) makes a polynomial zero, then \\( (x - r) \\) is a factor. Treat \\( a \\) as the variable and \\( b \\) as a constant.',
      explain: 'Substituting \\( a = b \\) gives \\( b^3 - b^3 = 0 \\). So \\( a = b \\) is a root, which means \\( (a - b) \\) is a factor — guaranteed, before we know the other one. Now we just have to FIND the cofactor.',
      coach: ['What happens to \\( a^3 - b^3 \\) when \\( a = b \\)?', 'A root at \\( a = b \\) means a factor of what?'],
    },
    {
      prompt: 'Hunt the cofactor: \\( a^3 - b^3 = (a - b)(\\;?\\;) \\).',
      body: 'Try the natural guess \\( a^2 + b^2 \\) and see exactly what goes wrong — the wreckage tells you the fix.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( (a-b)(\\;?\\;) = a^3 - b^3 \\qquad \\text{guess the cofactor} \\)' },
          g1: { eq: '\\( (a-b)(a^2 + b^2) = a^3 + ab^2 - a^2b - b^3 \\)', note: 'The cubes are right! But two strays survive: \\( +ab^2 - a^2b \\), i.e. \\( -ab(a - b) \\). Look at that — the junk is itself a multiple of \\( (a-b) \\). So add \\( ab \\) to the cofactor and it will cancel exactly.' },
          g2: { eq: '\\( (a-b)(a^2 - ab + b^2) = a^3 - 2a^2b + 2ab^2 - b^3 \\)', note: 'Wrong direction — that made the strays worse, not better. The sign of the middle term must OPPOSE the binomial&rsquo;s. Undo.' },
          win: { eq: '\\( (a-b)(a^2 + ab + b^2) = a^3 - b^3 \\;\\checkmark \\)', note: 'Derived, not memorized. Expand and watch: \\( a^3 + a^2b + ab^2 - a^2b - ab^2 - b^3 \\) — the four middle terms annihilate in pairs.' },
        },
        ops: [
          { label: 'Guess \\( a^2 + b^2 \\)', to: { s0: 'g1' } },
          { label: 'Guess \\( a^2 - ab + b^2 \\)', to: { s0: 'g2', g1: 'g2' } },
          { label: 'Patch with \\( +ab \\): try \\( a^2 + ab + b^2 \\)', to: { s0: 'win', g1: 'win', g2: 'win' } },
        ],
      },
      hint: 'Multiply \\( (a-b)(a^2+b^2) \\) out and look at what fails to cancel. The leftovers point straight at the patch.',
      success: 'The strays were \\( -ab(a-b) \\) — so adding \\( ab \\) to the cofactor kills them.',
      note: '<b>\\( a^3 - b^3 = (a-b)(a^2 + ab + b^2) \\).</b> Mnemonic: the binomial&rsquo;s sign MATCHES the original (−), and the trinomial&rsquo;s middle takes the OPPOSITE (+ab). And it is \\( ab \\), never \\( 2ab \\) — that&rsquo;s the perfect-square trinomial, a different animal.',
      card: 'diff-of-cubes',
      coach: ['Expand your guess and identify the surviving junk.', 'The junk factors as \\( -ab(a-b) \\). What must you add to the cofactor to cancel it?'],
    },
    {
      prompt: 'Your turn: derive the sum of cubes. What is the cofactor in \\( a^3 + b^3 = (a+b)(\\;?\\;) \\)?',
      body: 'Same route: \\( a = -b \\) is the root that kills \\( a^3 + b^3 \\), so \\( (a+b) \\) is the factor. Then patch.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( a^2 - ab + b^2 \\)',
          '\\( a^2 + ab + b^2 \\)',
          '\\( a^2 + 2ab + b^2 \\)',
          '\\( a^2 + b^2 \\)',
        ],
        correct: 0,
      },
      hint: 'The signs mirror the difference case. Expand \\( (a+b)(a^2 - ab + b^2) \\) and check the middles cancel.',
      explain: '\\( (a+b)(a^2 - ab + b^2) = a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3 = a^3 + b^3 \\) ✓. The rule that ties both cards together: <b>the binomial&rsquo;s sign matches the original; the trinomial&rsquo;s middle sign is the opposite.</b> Learn the pair, not two separate facts.',
      note: 'Sanity check on \\( a = -b \\): the sum of cubes vanishes, confirming \\( (a+b) \\) is a factor. Both cube cards came from the same idea — find a root, extract its factor, patch the cofactor.',
      card: 'sum-of-cubes',
      coach: ['Mirror the difference-of-cubes signs.', 'Expand and verify the four middle terms cancel.'],
    },
    {
      prompt: 'Recognition drill: which identity cracks \\( 8x^3 - 27 \\)?',
      body: 'Disguises are the whole game — the cubes are wearing coefficients.',
      interaction: {
        type: 'mcq',
        options: [
          'Difference of cubes with \\( a = 2x, \\; b = 3 \\)',
          'Difference of squares with \\( a = 8x, \\; b = 27 \\)',
          'Sum of cubes with \\( a = 2x, \\; b = 3 \\)',
          'It doesn&rsquo;t factor',
        ],
        correct: 0,
      },
      hint: '\\( 8x^3 = (2x)^3 \\) and \\( 27 = 3^3 \\).',
      explain: '\\( (2x)^3 - 3^3 = (2x - 3)\\big((2x)^2 + (2x)(3) + 3^2\\big) = (2x-3)(4x^2 + 6x + 9) \\). The skill isn&rsquo;t knowing the identity — it&rsquo;s SEEING that \\( 8x^3 \\) is a cube. Train the eye: 8, 27, 64, 125 are cubes; so are \\( x^6 \\) and \\( 64y^9 \\).',
      note: 'And a live question for the lab: \\( x^6 - y^6 \\) is <em>both</em> a difference of squares (\\( (x^3)^2 - (y^3)^2 \\)) and a difference of cubes (\\( (x^2)^3 - (y^2)^3 \\)). Which do you use first? That fork decides whether your factorization is complete — we settle it in the Problem Lab.',
      coach: ['Which perfect cube is 8? Which is 27?'],
    },
    {
      prompt: 'Backwards use: you&rsquo;re mid-problem and land on \\( a^2 + ac + c^2 = 0 \\). What now?',
      body: 'Nothing factors. No quadratic formula worth running. But your deck is holding half of something.',
      interaction: {
        type: 'mcq',
        options: [
          'Multiply by \\( (a - c) \\): it becomes \\( a^3 - c^3 = 0 \\), so \\( a^3 = c^3 \\)',
          'Multiply by \\( (a + c) \\): it becomes \\( a^3 + c^3 = 0 \\)',
          'Divide by \\( c^2 \\) and use the quadratic formula on \\( (a/c) \\)',
          'Nothing works — the equation is unusable',
        ],
        correct: 0,
      },
      hint: 'Where have you seen the shape \\( a^2 + ac + c^2 \\) before? It was a <em>cofactor</em>. What was the other factor?',
      explain: '\\( a^2 + ac + c^2 \\) is exactly the cofactor in the difference-of-cubes card. Supplying the missing \\( (a - c) \\) gives \\( (a-c)(a^2+ac+c^2) = a^3 - c^3 = 0 \\), so \\( a^3 = c^3 \\) — a wildly more useful statement. (Route 3 also works but is slower and lands on complex ratios.)',
      note: 'The book&rsquo;s warning, made playable: identities appear in the wild as <b>one factor</b>, not as whole expressions. Your job is to recognize the piece and supply the partner. Recognize the pieces, not just the wholes.',
      coach: ['That trinomial is a cofactor from one of your cards. Which one?', 'Multiply by the missing binomial and see what collapses.'],
    },
    {
      prompt: 'Conjugate reciprocals: what is \\( \\dfrac{1}{\\sqrt{9} + \\sqrt{8}} \\)?',
      body: 'Chapter 1 rationalization, upgraded. Multiply top and bottom by the conjugate and watch the denominator.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'the denominator \\( (\\sqrt9+\\sqrt8)(\\sqrt9-\\sqrt8) \\)', answer: '1', width: 90 },
          { label: 'so \\( \\frac{1}{\\sqrt9+\\sqrt8} = \\sqrt9 - \\;? \\)', answer: 'sqrt(8)', accept: ['√8', '2sqrt2', '2.828'], width: 110 },
        ],
      },
      hint: 'Difference of squares: \\( (\\sqrt9)^2 - (\\sqrt8)^2 = 9 - 8 \\).',
      explain: 'The denominator is \\( 9 - 8 = 1 \\) — so the reciprocal of \\( \\sqrt9 + \\sqrt8 \\) is simply \\( \\sqrt9 - \\sqrt8 \\), with no fraction left at all. Whenever the radicands differ by 1, <b>the conjugate IS the reciprocal</b>.',
      note: 'This is the fuel for the next beat. A sum of such fractions turns into a sum of DIFFERENCES — and differences are the thing that telescope.',
      card: 'conjugate-reciprocal',
      coach: ['Multiply numerator and denominator by \\( \\sqrt9 - \\sqrt8 \\).', 'The denominator is a difference of squares.'],
    },
    {
      prompt: 'Telescope: \\( \\dfrac{1}{\\sqrt4+\\sqrt3} + \\dfrac{1}{\\sqrt5+\\sqrt4} + \\cdots + \\dfrac{1}{\\sqrt9+\\sqrt8} \\).',
      body: 'Six terms. Flip each one with your new card, then watch what happens.' + RAIL_SVG(false),
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( \\dfrac{1}{\\sqrt4+\\sqrt3} + \\dfrac{1}{\\sqrt5+\\sqrt4} + \\cdots + \\dfrac{1}{\\sqrt9+\\sqrt8} \\)' },
          grind: { eq: '\\( \\text{rationalize all six separately} \\ldots \\)', note: 'Perfectly legal — and you&rsquo;d get there. But you&rsquo;d do six separate rationalizations and then hunt for structure at the end. Flip them ALL first and the structure announces itself. Undo.' },
          s1: { eq: '\\( (\\sqrt4 - \\sqrt3) + (\\sqrt5 - \\sqrt4) + (\\sqrt6 - \\sqrt5) + (\\sqrt7 - \\sqrt6) + (\\sqrt8 - \\sqrt7) + (\\sqrt9 - \\sqrt8) \\)', note: 'Every term is now a difference. Look along the chain: each term&rsquo;s tail is the next term&rsquo;s head, with opposite signs.' },
          win: { eq: '\\( = \\sqrt9 - \\sqrt3 = 3 - \\sqrt3 \\)' + RAIL_SVG(true), note: 'Everything in the middle annihilated in pairs; only the far ends survived. Six ugly fractions → two square roots. That collapse is what &ldquo;telescoping&rdquo; means, and it is one of the most reliable structures in competition math.' },
        },
        ops: [
          { label: 'Rationalize each fraction separately', to: { s0: 'grind' } },
          { label: 'Flip every term with the conjugate card', to: { s0: 's1', grind: 's1' } },
          { label: 'Cancel neighbours down the chain', to: { s1: 'win' }, blocked: 'Convert the fractions to differences first — there is nothing to cancel yet.' },
        ],
      },
      hint: 'Each fraction equals \\( \\sqrt{n+1} - \\sqrt{n} \\). Write all six out and read down the line.',
      success: 'The chain collapses: \\( \\sqrt9 - \\sqrt3 = 3 - \\sqrt3 \\).',
      note: '<b>Telescoping.</b> When a sum&rsquo;s terms are differences of consecutive things, everything interior cancels and only the endpoints survive. The set-up move here was writing 3 as \\( \\sqrt9 \\) — <em>uniform notation reveals structure</em>. That&rsquo;s a meta-skill worth more than the identity.',
      coach: ['Convert every fraction using the conjugate-reciprocal card.', 'Write the six differences in a row and look for neighbours that cancel.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Compute \\( 51^2 - 49^2 \\) mentally.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '200', width: 100 }],
      },
      hint: '\\( (51-49)(51+49) \\).',
      explain: '\\( 2 \\times 100 = 200 \\). (The long way — 2601 − 2401 — gets the same answer and wastes twenty seconds.)',
      coach: ['Difference of squares on numbers.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Factor \\( 27x^3 + 64 \\).',
      interaction: {
        type: 'mcq',
        options: [
          '\\( (3x + 4)(9x^2 - 12x + 16) \\)',
          '\\( (3x + 4)(9x^2 + 12x + 16) \\)',
          '\\( (3x - 4)(9x^2 + 12x + 16) \\)',
          '\\( (3x + 4)^3 \\)',
        ],
        correct: 0,
      },
      hint: '\\( 27x^3 = (3x)^3 \\), \\( 64 = 4^3 \\). Sum of cubes: binomial sign matches (+), trinomial middle is opposite (−).',
      explain: '\\( (3x)^3 + 4^3 = (3x+4)\\big((3x)^2 - (3x)(4) + 4^2\\big) = (3x+4)(9x^2 - 12x + 16) \\). The mnemonic does all the work: binomial +, trinomial −.',
      coach: ['Identify the two cubes first.', 'Then apply the sign rule from the card.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Evaluate \\( \\dfrac{1}{\\sqrt3+\\sqrt1} + \\dfrac{1}{\\sqrt5+\\sqrt3} + \\cdots + \\dfrac{1}{\\sqrt{15}+\\sqrt{13}} \\).',
      body: 'The radicands now step by <b>2</b>, not 1. That changes one thing — find it.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '(sqrt(15)-1)/2', accept: ['(√15-1)/2', '1.436', '1.4365'], width: 160 }],
      },
      hint: 'Conjugating gives a denominator of \\( (n+2) - n = 2 \\), not 1. So each term is \\( \\frac{\\sqrt{n+2} - \\sqrt{n}}{2} \\).',
      explain: 'Each term flips to \\( \\frac{\\sqrt{n+2}-\\sqrt{n}}{2} \\). Factor out the \\( \\frac12 \\) and the chain telescopes as before: \\( \\frac{1}{2}(\\sqrt{15} - \\sqrt1) = \\frac{\\sqrt{15} - 1}{2} \\approx 1.436 \\). The gap of 2 doesn&rsquo;t break telescoping — it just leaves a constant out front.',
      coach: ['Conjugate one term and look at the denominator. It isn&rsquo;t 1 this time.', 'Pull the common \\( \\frac12 \\) out and telescope what remains.'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'Find the two four-digit factors of \\( 4^8 + 6^8 + 9^8 \\).',
      body: 'It looks like nothing. It is beat 3&rsquo;s combo in a very good disguise.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'smaller factor', answer: '5521', width: 100 },
          { label: 'larger factor', answer: '8113', width: 100 },
        ],
      },
      hint: 'Set \\( a = 4^4 = 256 \\) and \\( b = 9^4 = 6561 \\). Then \\( 4^8 = a^2 \\), \\( 9^8 = b^2 \\), and \\( 6^8 = 36^4 = (4 \\cdot 9)^4 = ab \\). So the whole thing is \\( a^2 + ab + b^2 \\).',
      explain: 'With \\( a = 256, b = 6561 \\): the expression is \\( a^2 + ab + b^2 \\). Beat 3&rsquo;s combo says \\( a^2 + ab + b^2 = (a+b)^2 - ab \\), and \\( ab = 6^8 = (6^4)^2 = 1296^2 \\) is a perfect square — so it&rsquo;s a difference of squares! \\( = (a + b - 1296)(a + b + 1296) = (6817 - 1296)(6817 + 1296) = \\mathbf{5521 \\times 8113} \\).',
      note: 'The reason this works: \\( ab \\) happened to be a perfect square. \\( a^2 + ab + b^2 \\) only factors when it does — which is exactly why the problem-setter chose 4, 6, 9 (note \\( 6^2 = 4 \\cdot 9 \\)).',
      coach: ['Try to see all three terms as powers of just two numbers, \\( a = 4^4 \\) and \\( b = 9^4 \\).', 'Show that \\( 6^8 = ab \\). Then the expression is \\( a^2 + ab + b^2 \\).', 'Rewrite as \\( (a+b)^2 - ab \\). Is \\( ab \\) a perfect square?'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Given that \\( 9876^2 = 97{,}535{,}376 \\), compute \\( 9877^2 \\) — without multiplying.',
      body: 'Mandelbrot. There&rsquo;s no difference of squares here to exploit. Find the other identity.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '\\( 9877^2 \\) =', answer: '97555129', accept: ['97,555,129'], width: 150 }],
      },
      hint: '\\( (n+1)^2 = n^2 + 2n + 1 \\). Or, more memorably: \\( (n+1)^2 - n^2 = n + (n+1) \\) — the gap between consecutive squares is the sum of their roots.',
      explain: '\\( 9877^2 = 9876^2 + 9876 + 9877 = 97{,}535{,}376 + 19{,}753 = \\mathbf{97{,}555{,}129} \\). One addition. (The identity is difference of squares in disguise: \\( (n+1)^2 - n^2 = \\big((n+1)-n\\big)\\big((n+1)+n\\big) = 1 \\cdot (2n+1) \\).)',
      walkthrough: [
        'You are asked for the NEXT square after one you already know. So the useful quantity is the <em>gap</em> between consecutive squares.',
        'Compute that gap with the difference-of-squares card: \\( (n+1)^2 - n^2 = \\big((n+1) - n\\big)\\big((n+1) + n\\big) = 1 \\cdot (2n+1) = n + (n+1) \\).',
        'In words: to step from one square to the next, add the two roots. Here that&rsquo;s \\( 9876 + 9877 = 19{,}753 \\).',
        '\\( 97{,}535{,}376 + 19{,}753 = 97{,}555{,}129 \\). One addition, no multiplication — and it works for any consecutive pair you&rsquo;ll ever be handed.',
      ],
      success: 'Identities as arithmetic prosthetics: the given value wasn&rsquo;t decoration, it was a foothold.',
      note: 'When a problem hands you a strange precomputed value, it is telling you the intended route: <b>relate the target to the given</b>, don&rsquo;t compute the target from scratch.',
      coach: ['You&rsquo;re not asked to square 9877 — you&rsquo;re asked to get from one square to the next.', 'What is \\( (n+1)^2 - n^2 \\)? Factor it with a card.', 'The gap is the sum of the two roots.'],
    },
  ],
};
