/* Lesson 8.2 — Irrationals, the Tower Completed, and the FTA.
   The book's first sustained proof lesson: slower, prediction-before-reveal, and the
   boss is a proof rather than a computation. */

const TOWER_FULL = `<svg class="il-mod-wheel" viewBox="0 0 300 200" width="300" role="img" aria-label="The complete number tower: naturals inside integers inside rationals inside reals inside complex">
  <rect x="4" y="4" width="292" height="192" rx="18" fill="rgba(255,177,146,.08)" stroke="#FFB192" stroke-width="1.5"/>
  <text class="il-svg-peach-ink" x="16" y="20" font-size="11" font-weight="700">ℂ — complex</text>
  <text class="il-svg-peach-ink" x="253" y="185" font-size="10" text-anchor="middle">i, 2+i</text>
  <rect x="20" y="26" width="260" height="150" rx="16" fill="rgba(136,176,255,.06)" stroke="#88B0FF" stroke-width="1.4"/>
  <text class="il-svg-blue-ink" x="32" y="42" font-size="11" font-weight="700">ℝ — real</text>
  <text class="il-svg-blue-ink" x="228" y="150" font-size="10" text-anchor="middle">√2, π</text>
  <text class="il-venn-caption" x="228" y="162" font-size="9" text-anchor="middle">irrational</text>
  <rect x="36" y="48" width="150" height="112" rx="14" fill="rgba(136,176,255,.12)" stroke="#88B0FF" stroke-width="1.4"/>
  <text class="il-svg-blue-ink" x="48" y="64" font-size="11" font-weight="700">ℚ — rational</text>
  <rect x="50" y="70" width="120" height="78" rx="12" fill="rgba(136,176,255,.18)" stroke="#88B0FF" stroke-width="1.4"/>
  <text class="il-svg-blue-ink" x="62" y="86" font-size="11" font-weight="700">ℤ — integers</text>
  <rect x="64" y="92" width="90" height="44" rx="10" fill="rgba(87,211,100,.16)" stroke="#57D364" stroke-width="1.4"/>
  <text class="il-svg-ink" x="76" y="108" font-size="11" font-weight="700">ℕ</text>
  <text class="il-venn-caption" x="76" y="124" font-size="9">1, 2, 3, …</text>
</svg>`;

export default {
  id: 'lesson-8-2',
  title: 'Irrationals and the Tower Completed',
  kicker: 'What Numbers Really Are',
  topicIndex: 7,
  lessonIndex: 1,
  next: 'interactive-lesson.html?chapter=9&lesson=1',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'The Pythagoreans believed every number was a ratio of whole numbers. One of their own proved otherwise.',
      interaction: {
        type: 'reveal',
        face: 'A square with side 1 has a diagonal of length \\( \\sqrt2 \\). It is right there, drawable, undeniable. So it must be some fraction \\( \\frac pq \\)… mustn&rsquo;t it?',
        cta: 'Tap for what they found',
        hidden: 'It isn&rsquo;t. No fraction — none, not one, not ever — squares to 2. Legend says the man who proved it was thrown into the sea for it. The scandal wasn&rsquo;t that the diagonal was hard to measure; it was that a length existed which their entire number system could not name.<br><br>You are about to prove it yourself. And unlike everything else in this book so far, this is not a computation — it is an argument that <b>rules out infinitely many possibilities at once</b>. That&rsquo;s what a proof does.',
      },
      success: 'The stakes are set. Now build the argument.',
      coach: ['Before tapping: do you believe some fraction squares to exactly 2?'],
    },
    {
      prompt: 'First, sharpen the tool. If \\( \\frac{p}{q} \\) is in lowest terms, is \\( \\frac{p^2}{q^2} \\) automatically in lowest terms too?',
      body: 'This little fact is load-bearing for the main proof. Commit before you continue.',
      interaction: {
        type: 'mcq',
        options: [
          'Yes — squaring introduces no NEW prime factors, so \\( p^2 \\) and \\( q^2 \\) still share none',
          'No — squaring can create common factors',
          'Only when \\( p \\) and \\( q \\) are prime',
          'Only when \\( p < q \\)',
        ],
        correct: 0,
      },
      hint: 'Lowest terms means \\( p \\) and \\( q \\) share no prime. Squaring only <em>duplicates</em> the primes each already has — Chapter 5&rsquo;s unique factorization.',
      explain: 'If \\( p \\) and \\( q \\) share no prime, then neither do \\( p^2 \\) and \\( q^2 \\): squaring just doubles each exponent in a factorization, and can&rsquo;t conjure a prime that wasn&rsquo;t there. (Contrast: \\( \\frac{p+a}{q+a} \\) has NO such guarantee — \\( \\frac13 \\) is lowest, but adding 1 to each gives \\( \\frac24 \\), which isn&rsquo;t. Operations that respect factorization are rare; squaring is one, adding isn&rsquo;t.)',
      note: '<b>Lowest terms is a proof tool, not just etiquette.</b> The whole \\( \\sqrt2 \\) argument is going to hinge on the fact that we may ALWAYS assume a fraction is in lowest terms — and then derive a contradiction from it.',
      coach: ['Think in prime factorizations. What does squaring do to them?'],
    },
    {
      prompt: 'Prediction, before we start: suppose \\( p^2 \\) is even. Must \\( p \\) itself be even?',
      body: 'Commit. The whole proof leans on your answer.',
      interaction: {
        type: 'mcq',
        options: [
          'Yes — because if \\( p \\) were odd, \\( p^2 \\) would be odd \\( (\\text{odd} \\times \\text{odd} = \\text{odd}) \\)',
          'No — \\( p \\) could be odd',
          'Only if \\( p \\) is prime',
          'Only if \\( p > 2 \\)',
        ],
        correct: 0,
      },
      hint: 'Try to build a counterexample: square an odd number. \\( 3^2 = 9 \\), \\( 5^2 = 25 \\), \\( 7^2 = 49 \\)… do you ever get an even result?',
      explain: 'Odd × odd = odd, always (Chapter 5 parity). So an odd \\( p \\) can never produce an even \\( p^2 \\). Contrapositive: \\( p^2 \\) even ⟹ \\( p \\) even. This one-line sub-proof is a gear inside the machine you&rsquo;re about to build.',
      coach: ['What is odd times odd, mod 2?'],
    },
    {
      prompt: 'Now the proof. Assume \\( \\sqrt2 = \\dfrac{p}{q} \\) in LOWEST TERMS — and arrange the inferences that follow.',
      body: 'Every step is forced. Put them in order and watch the trap close.',
      interaction: {
        type: 'order',
        items: [
          'Square both sides: \\( 2 = \\frac{p^2}{q^2} \\), so \\( p^2 = 2q^2 \\).',
          'So \\( p^2 \\) is even — and therefore \\( p \\) is even. Write \\( p = 2r \\).',
          'Substitute: \\( (2r)^2 = 2q^2 \\), i.e. \\( 4r^2 = 2q^2 \\), so \\( q^2 = 2r^2 \\).',
          'So \\( q^2 \\) is even — and therefore \\( q \\) is even, too.',
          'But then \\( p \\) and \\( q \\) are BOTH even — they share a factor of 2, contradicting &ldquo;lowest terms&rdquo;. So no such fraction exists. ∎',
        ],
      },
      hint: 'Square first. Then use the even-square fact on \\( p \\). Then substitute \\( p = 2r \\) and use it AGAIN on \\( q \\).',
      explain: 'The trap: we assumed a lowest-terms fraction, then proved both its parts are even — which means it wasn&rsquo;t in lowest terms after all. The assumption destroys itself, so it was false: <b>\\( \\sqrt2 \\) is not a ratio of integers.</b>',
      note: 'Feel the shape: <b>assume → squeeze → contradict</b>. It&rsquo;s the same skeleton as Euclid&rsquo;s infinitude-of-primes proof (Chapter 5): assume a complete list, build the object that embarrasses it, conclude the assumption was impossible. Two of the oldest proofs in mathematics, one silhouette.',
      coach: ['The first move is always to get rid of the radical.', 'Once you know \\( p \\) is even, SUBSTITUTE \\( p = 2r \\) — that&rsquo;s what unlocks the second half.', 'The contradiction is with the phrase &ldquo;lowest terms.&rdquo;'],
    },
    {
      prompt: 'This proof is NOT &ldquo;we couldn&rsquo;t find a fraction.&rdquo; What did it actually establish?',
      interaction: {
        type: 'mcq',
        options: [
          'That no such fraction CAN exist — every candidate is ruled out at once, without checking any of them',
          'That no fraction with small numerator works',
          'That \\( \\sqrt2 \\) has a decimal expansion that never repeats',
          'That mathematicians have searched a long time and found nothing',
        ],
        correct: 0,
      },
      hint: 'How many fractions did the argument actually test?',
      explain: 'Zero. It tested none of them — and eliminated all of them. That is the power of contradiction: it reasons about the <em>form</em> any solution would have to take, and shows that form is impossible. (Option 3 is a true FACT about \\( \\sqrt2 \\), but it is a symptom, not the proof — and note \\( \\frac13 = 0.333\\ldots \\) never terminates either, yet is perfectly rational. Non-terminating ≠ irrational.)',
      note: 'The most common misreading of this proof, and of irrationality generally: <b>&ldquo;the decimal goes on forever&rdquo; proves nothing.</b> \\( \\frac13 \\) does that. The mark of an irrational is non-terminating AND non-repeating — and even that is a consequence, not an argument.',
      coach: ['Count how many specific fractions the proof examined.'],
    },
    {
      prompt: 'Rerun the skeleton for \\( \\sqrt3 \\). Which step changes?',
      body: 'Assume \\( \\sqrt3 = \\frac pq \\) in lowest terms → \\( p^2 = 3q^2 \\). Now what?',
      interaction: {
        type: 'mcq',
        options: [
          '&ldquo;\\( p^2 \\) even ⟹ \\( p \\) even&rdquo; becomes &ldquo;\\( p^2 \\) divisible by 3 ⟹ \\( p \\) divisible by 3&rdquo; — which holds because 3 is PRIME',
          'Nothing changes; the proof is identical word for word',
          'The proof breaks — \\( \\sqrt3 \\) is actually rational',
          'You must use evenness anyway, since 3 is odd',
        ],
        correct: 0,
      },
      hint: 'Is it true that \\( p^2 \\) divisible by 3 forces \\( p \\) divisible by 3? Test the non-multiples: \\( 1, 2, 4, 5, 7, 8 \\) — square them and reduce mod 3.',
      explain: 'The squares of non-multiples of 3 are \\( 1, 4, 16, 25, 49, 64 \\equiv 1 \\pmod 3 \\) — never 0. So \\( 3 \\mid p^2 \\Rightarrow 3 \\mid p \\), and the rest of the skeleton runs unchanged: \\( p = 3r \\) → \\( q^2 = 3r^2 \\) → \\( 3 \\mid q \\) → both divisible by 3 → contradiction. <b>The engine is primality</b>, not evenness.',
      note: 'So the proof generalizes instantly: \\( \\sqrt{p} \\) is irrational for EVERY prime \\( p \\). The single step doing the real work is &ldquo;\\( p \\mid n^2 \\Rightarrow p \\mid n \\)&rdquo; — which is true precisely because \\( p \\) is prime (Chapter 5&rsquo;s unique factorization, once again holding up the roof).',
      coach: ['Which line of the √2 proof used the number 2 in an essential way?', 'Test whether the analogous claim for 3 is even true.'],
    },
    {
      prompt: 'The landmine: run the same skeleton on \\( \\sqrt4 \\). It &ldquo;proves&rdquo; \\( \\sqrt4 \\) is irrational. But \\( \\sqrt4 = 2 \\). Where does it break?',
      body: 'Find the false step — this is the most instructive failure in the chapter.',
      interaction: {
        type: 'mcq',
        options: [
          'At &ldquo;\\( 4 \\mid p^2 \\Rightarrow 4 \\mid p \\)&rdquo; — which is FALSE (take \\( p = 2 \\): \\( 4 \\mid 4 \\), but \\( 4 \\nmid 2 \\)). 4 isn&rsquo;t prime.',
          'At the squaring step',
          'At the lowest-terms assumption',
          'It doesn&rsquo;t break — \\( \\sqrt4 \\) really is irrational',
        ],
        correct: 0,
      },
      hint: 'The skeleton needs &ldquo;\\( m \\mid p^2 \\Rightarrow m \\mid p \\)&rdquo;. Test that with \\( m = 4 \\) and \\( p = 2 \\).',
      explain: '\\( p = 2 \\) gives \\( p^2 = 4 \\), which IS divisible by 4 — while \\( p = 2 \\) is not. So the crucial implication fails, and the whole argument collapses exactly where it should. <b>The proof works for primes and breaks for perfect squares</b>, which is precisely the right behavior: \\( \\sqrt4 \\) is rational.',
      note: 'Copying a proof skeleton without checking that each step is still TRUE is how you &ldquo;prove&rdquo; false things. Every proof has a load-bearing hypothesis; find it before you reuse the frame. (For general non-square \\( m \\), the fix is to argue with full prime factorizations rather than a single divisor — that&rsquo;s the boss.)',
      coach: ['Which implication does the skeleton need in order to run?', 'Try to break it with the smallest numbers you can.'],
    },
    {
      prompt: 'If \\( \\sqrt2 \\) isn&rsquo;t a fraction, what IS it? Watch it get built out of fractions anyway.',
      body: 'Start at \\( \\frac11 \\) and apply the rule \\( \\dfrac{p}{q} \\longrightarrow \\dfrac{p + 2q}{p + q} \\) over and over.',
      interaction: {
        type: 'slider',
        min: 1, max: 8, step: 1, value: 1, label: 'term', mustExplore: 5,
        render(n) {
          let p = 1, q = 1;
          for (let i = 1; i < n; i++) { [p, q] = [p + 2 * q, p + q]; }
          const val = p / q;
          const err = val - Math.SQRT2;
          const side = p * p - 2 * q * q;
          return {
            main: `\\( \\dfrac{${p}}{${q}} = ${val.toFixed(8)} \\)`,
            sub: `√2 = 1.41421356…  ·  this term is ${side < 0 ? 'BELOW' : 'ABOVE'} √2 by ${Math.abs(err).toExponential(2)}. `
              + `Watch the side flip every step — the terms straddle √2, closing in from alternate sides.`,
          };
        },
      },
      success: '1, 3/2, 7/5, 17/12, 41/29, … — each one closer, alternating above and below, and never landing.',
      note: 'This is what an irrational number <em>is</em>: a point that rationals can approach as closely as you like without ever reaching. The tower&rsquo;s next floor is built from the floor below — as every floor has been. (Why does that rule work? Compute \\( (p+2q)^2 - 2(p+q)^2 \\) in terms of \\( p^2 - 2q^2 \\). It flips the sign and keeps the size. That&rsquo;s the whole secret; the book leaves it there, and so will we.)',
      coach: ['Watch the ABOVE/BELOW flag as you step through.'],
    },
    {
      prompt: 'Careful with irrationals: is the sum of two irrational numbers always irrational?',
      interaction: {
        type: 'mcq',
        shuffle: false,
        cols: true,
        options: ['No — \\( \\sqrt2 + (-\\sqrt2) = 0 \\)', 'Yes, always'],
        correct: 0,
      },
      hint: 'Try to build a counterexample deliberately. Can two irrationals cancel?',
      explain: 'They can annihilate: \\( \\sqrt2 + (-\\sqrt2) = 0 \\), rational. Products too: \\( \\sqrt2 \\cdot \\sqrt2 = 2 \\). The irrationals are NOT closed under addition or multiplication — unlike \\( \\mathbb{Q} \\), \\( \\mathbb{R} \\), and \\( \\mathbb{C} \\), which are.',
      note: 'A set being &ldquo;closed&rdquo; under an operation (you can never escape it) is a big deal, and the irrationals lack it. Which makes the next beat&rsquo;s claim about \\( \\mathbb{C} \\) all the more remarkable.',
      coach: ['Look for two irrationals that cancel each other.'],
    },
    {
      prompt: 'Beyond irrational: \\( \\pi \\) and \\( e \\) are stranger still.',
      interaction: {
        type: 'reveal',
        face: '\\( \\sqrt2 \\) is irrational — but it does solve a polynomial: \\( x^2 - 2 = 0 \\), integer coefficients. Is there such a polynomial for \\( \\pi \\)?',
        cta: 'Tap',
        hidden: 'No. \\( \\pi \\) and \\( e \\) are <b>transcendental</b>: they are roots of NO polynomial with integer coefficients, of any degree. Not \\( x^2 - 2 \\), not a degree-500 monster — none. Proving this took mathematics until the 1800s (Hermite for \\( e \\) in 1873; Lindemann for \\( \\pi \\) in 1882, which finally killed the 2000-year-old dream of squaring the circle with compass and straightedge).<br><br>So the irrationals split in two: the <em>algebraic</em> ones like \\( \\sqrt2 \\) that satisfy some integer polynomial, and the <em>transcendental</em> ones that satisfy none. And the strange part — the transcendentals are the overwhelming majority.',
      },
      success: 'Two kinds of irrational. Now the last floor.',
      coach: ['What polynomial does √2 satisfy? Could π satisfy something similar?'],
    },
    {
      prompt: 'The tower kept growing because each floor failed at something. Does it ever STOP?',
      body: 'ℕ couldn&rsquo;t do \\( 3-5 \\). ℤ couldn&rsquo;t do \\( 2 \\div 3 \\). ℚ couldn&rsquo;t do \\( x^2 = 2 \\). ℝ couldn&rsquo;t do \\( x^2 = -1 \\). So — what can&rsquo;t ℂ do?',
      interaction: {
        type: 'mcq',
        options: [
          'Nothing, for polynomials: EVERY polynomial of degree \\( \\ge 1 \\) has a complex root. The tower stops here.',
          'It can&rsquo;t solve \\( x^2 = i \\) — that needs another new system',
          'It can&rsquo;t solve cubics; those need a sixth system',
          'Nobody knows',
        ],
        correct: 0,
      },
      hint: 'Recall Chapter 6.5: you found \\( \\sqrt{5 - 12i} = \\pm(3-2i) \\) — a complex number. You never needed to invent anything new.',
      explain: 'The <b>Fundamental Theorem of Algebra</b>: every polynomial of degree \\( \\ge 1 \\) with complex coefficients has at least one complex root. So \\( \\mathbb{C} \\) is <em>closed</em> — solving polynomial equations can never again force a new number system into existence. That&rsquo;s why the tower has a top floor. (You already felt it in Chapter 6: denesting complex square roots produced complex numbers, never anything more exotic.)',
      note: 'And the cascade: a root \\( a \\) lets you factor out \\( (z - a) \\), leaving degree \\( n-1 \\), which has its own root, and so on — so <b>every degree-\\( n \\) polynomial factors into exactly \\( n \\) linear factors over ℂ</b>. Chapter 6 promised &ldquo;beyond quadratics&rdquo;; this is the guarantee behind it.',
      coach: ['Think about what happened whenever you took roots of complex numbers in Chapter 6.'],
    },
    {
      prompt: '\\( (z-1)^3 = 0 \\) has degree 3. How many linear factors, and how many DISTINCT roots?',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'linear factors', answer: '3', width: 84 },
          { label: 'distinct roots', answer: '1', width: 84 },
        ],
      },
      hint: 'Write it out: \\( (z-1)(z-1)(z-1) \\). Count the parentheses; then count the different values of \\( z \\) that make it zero.',
      explain: 'Three factors, but only one distinct root (\\( z = 1 \\), with <em>multiplicity</em> 3). The FTA promises \\( n \\) <b>factors</b>, not \\( n \\) different roots — a distinction that decides plenty of competition problems. (Chapter 6&rsquo;s repeated root, when the discriminant was zero, was this same phenomenon in miniature.)',
      note: 'Counted <em>with multiplicity</em>, a degree-\\( n \\) polynomial has exactly \\( n \\) roots in ℂ. Counted as distinct values, it may have far fewer.',
      coach: ['Factors and roots are not the same count.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Which of these is IRRATIONAL?',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\sqrt{0.2} \\)',
          '\\( \\sqrt{0.25} \\)',
          '\\( \\sqrt{0.0016} \\)',
          '\\( \\sqrt{49} \\)',
        ],
        correct: 0,
      },
      hint: 'Turn each decimal into a fraction (Lesson 8.1!) and look for a ratio of perfect squares.',
      explain: '\\( \\sqrt{0.25} = \\sqrt{\\frac14} = \\frac12 \\) ✓ rational. \\( \\sqrt{0.0016} = \\sqrt{\\frac{16}{10000}} = \\frac{4}{100} \\) ✓. \\( \\sqrt{49} = 7 \\) ✓. But \\( \\sqrt{0.2} = \\sqrt{\\frac15} = \\frac{1}{\\sqrt5} \\), and 5 isn&rsquo;t a perfect square — <b>irrational</b>. The skill: convert to fractions FIRST, then hunt for square structure.',
      coach: ['Rewrite every decimal as a fraction in lowest terms.', 'A fraction has a rational square root only if it&rsquo;s a ratio of perfect squares.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Classify: \\( \\sqrt{50} \\), \\( 0.\\overline{12} \\), and \\( \\dfrac{\\pi}{\\pi} \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( \\sqrt{50} \\): rational? (y/n)', answer: 'n', accept: ['no'], width: 84 },
          { label: '\\( 0.\\overline{12} \\): rational? (y/n)', answer: 'y', accept: ['yes'], width: 84 },
          { label: '\\( \\pi/\\pi \\): rational? (y/n)', answer: 'y', accept: ['yes'], width: 84 },
        ],
      },
      hint: '\\( \\sqrt{50} = 5\\sqrt2 \\). A repeating decimal is always a fraction. And \\( \\frac{\\pi}{\\pi} \\) is… just look at it.',
      explain: '\\( \\sqrt{50} = 5\\sqrt2 \\) — irrational (a rational times an irrational, and \\( 5 \\ne 0 \\)). \\( 0.\\overline{12} = \\frac{12}{99} = \\frac{4}{33} \\) — rational, by Lesson 8.1&rsquo;s machine. \\( \\frac{\\pi}{\\pi} = 1 \\) — rational, and the point of the trap: <b>an expression built from irrationals can be perfectly rational.</b> Judge the number, not its costume.',
      coach: ['Simplify each one before classifying it.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Skeleton rerun: in the proof that \\( \\sqrt5 \\) is irrational, from \\( p^2 = 5q^2 \\) you conclude \\( 5 \\mid p \\). Then you substitute \\( p = 5r \\). What equation comes out?',
      interaction: {
        type: 'mcq',
        options: [
          '\\( q^2 = 5r^2 \\) — the same shape, forcing \\( 5 \\mid q \\), and the contradiction lands',
          '\\( q^2 = 25r^2 \\)',
          '\\( q^2 = r^2 \\)',
          '\\( q = 5r \\)',
        ],
        correct: 0,
      },
      hint: 'Substitute: \\( (5r)^2 = 5q^2 \\) → \\( 25r^2 = 5q^2 \\). Now divide by 5.',
      explain: '\\( 25r^2 = 5q^2 \\) gives \\( q^2 = 5r^2 \\) — the same form we started with, which forces \\( 5 \\mid q \\). So \\( 5 \\) divides both \\( p \\) and \\( q \\), contradicting lowest terms. The skeleton runs for \\( \\sqrt5 \\) exactly as it did for \\( \\sqrt2 \\) and \\( \\sqrt3 \\), because 5 is prime.',
      coach: ['Square the substitution and cancel one factor of 5.'],
    },
    {
      section: 'checkpoint',
      prompt: 'A degree-7 polynomial with real coefficients — what can the FTA guarantee?',
      interaction: {
        type: 'mcq',
        options: [
          'It factors into exactly 7 linear factors over ℂ (some may repeat)',
          'It has 7 distinct complex roots',
          'It has 7 real roots',
          'It has at least one real root and no complex ones',
        ],
        correct: 0,
      },
      hint: 'Factors counted with multiplicity — not distinct roots, and not real roots.',
      explain: 'Seven LINEAR FACTORS over ℂ, counted with multiplicity. They needn&rsquo;t be distinct (\\( (z-1)^7 \\) is a legal degree-7 polynomial), and they needn&rsquo;t be real. (Bonus, from Chapter 6: with real coefficients, any non-real roots come in conjugate pairs — so an odd degree forces at least one real root. But that&rsquo;s an extra fact, not the FTA itself.)',
      coach: ['What exactly does the theorem count?'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Characterize them all: which fractions \\( \\dfrac{m}{n} \\) have a RATIONAL square root?',
      body: 'The chapter&rsquo;s capstone, and it is a proof. The \\( \\sqrt2 \\) argument told you one fraction fails; this tells you exactly which ones succeed.',
      interaction: {
        type: 'mcq',
        options: [
          'Exactly those of the form \\( \\dfrac{ap^2}{aq^2} \\) — a common factor times a ratio of perfect squares',
          'Exactly those where \\( m \\) and \\( n \\) are both perfect squares',
          'Exactly those where \\( m \\) and \\( n \\) are both even',
          'Only \\( \\frac{1}{1} \\) and \\( \\frac{4}{9} \\)-type fractions with prime bases',
        ],
        correct: 0,
      },
      hint: 'Careful — \\( \\frac{8}{18} \\) has square root \\( \\frac{2}{3} \\), yet neither 8 nor 18 is a perfect square. What IS true of them?',
      explain: 'Reduce \\( \\frac{m}{n} \\) to lowest terms \\( \\frac{m\'}{n\'} \\). Its square root is rational exactly when \\( m\' \\) and \\( n\' \\) are BOTH perfect squares — and undoing the reduction, the general shape is \\( \\frac{m}{n} = \\frac{ap^2}{aq^2} \\), where \\( a \\) is the common factor you cancelled. Example: \\( \\frac{8}{18} = \\frac{2 \\cdot 2^2}{2 \\cdot 3^2} \\) — here \\( a = 2, p = 2, q = 3 \\), and indeed \\( \\sqrt{\\frac{8}{18}} = \\frac23 \\) ✓. Option 2 is the trap: it&rsquo;s <em>sufficient</em> but not <em>necessary</em>, and \\( \\frac{8}{18} \\) is the counterexample.',
      walkthrough: [
        'First, reduce. Any fraction \\( \\frac mn \\) equals \\( \\frac{m\'}{n\'} \\) in lowest terms — and \\( \\sqrt{\\frac mn} = \\sqrt{\\frac{m\'}{n\'}} \\), so we may as well work with the reduced form.',
        'Suppose \\( \\sqrt{\\frac{m\'}{n\'}} = \\frac pq \\), itself in lowest terms. Squaring: \\( \\frac{m\'}{n\'} = \\frac{p^2}{q^2} \\).',
        'Here is the key move — and it&rsquo;s the tool you sharpened in beat 2: since \\( \\frac pq \\) is in lowest terms, so is \\( \\frac{p^2}{q^2} \\). And two fractions in lowest terms that are EQUAL must be identical. Therefore \\( m\' = p^2 \\) and \\( n\' = q^2 \\), exactly — no fudge factor.',
        'So the reduced numerator and denominator are both perfect squares. Undo the reduction: the original was \\( \\frac{m}{n} = \\frac{a \\cdot p^2}{a \\cdot q^2} \\), where \\( a \\) is whatever common factor was cancelled. That is the complete characterization.',
        'And it re-proves \\( \\sqrt2 \\) instantly: \\( 2 = \\frac21 \\) is already reduced, and 2 isn&rsquo;t a perfect square — so its square root cannot be rational. The general theorem swallows the special case whole.',
      ],
      success: 'From &ldquo;one number is irrational&rdquo; to &ldquo;here is exactly which numbers are rational.&rdquo; That upgrade — special case to complete characterization — is what mathematicians mean by understanding something.',
      note: 'The load-bearing step was <b>uniqueness of lowest terms</b>: if two lowest-terms fractions are equal, they are the same fraction. That&rsquo;s Chapter 5&rsquo;s unique factorization, wearing yet another hat — and it is the quiet engine under this entire chapter.',
      coach: ['Reduce the fraction first — the question only depends on the reduced form.', 'Set \\( \\sqrt{m\'/n\'} = p/q \\) in lowest terms and square both sides.', 'Two lowest-terms fractions that are equal must be IDENTICAL. What does that force?'],
    },
    {
      kicker: 'The tower, complete',
      prompt: 'Every floor exists because the one below it couldn&rsquo;t answer a question.',
      body: 'The homeless numbers from Lesson 8.1 come home: \\( \\sqrt2 \\) to the irrationals, \\( i \\) to the complex ring.' + TOWER_FULL,
      interaction: {
        type: 'reveal',
        face: 'ℕ → ℤ → ℚ → ℝ → ℂ. Five floors, each built to answer one question the previous floor couldn&rsquo;t.',
        cta: 'Tap for the whole story on one screen',
        hidden: '<b>ℕ</b> — for counting. Fails at \\( 3 - 5 \\).<br><b>ℤ</b> — add zero and debts. Fails at \\( 2 \\div 3 \\).<br><b>ℚ</b> — add ratios. Fails at \\( x^2 = 2 \\) (you proved it).<br><b>ℝ</b> — add the irrationals, as limits of rationals. Fails at \\( x^2 = -1 \\).<br><b>ℂ</b> — add \\( i \\). Fails at… <em>nothing</em>. The Fundamental Theorem of Algebra is the <b>no-vacancy sign</b> at the top of the tower: no polynomial can ever again demand a number we don&rsquo;t have.<br><br>Kronecker said: <em>&ldquo;God made the integers; all else is the work of man.&rdquo;</em> You just watched the work get done — every floor above ℤ built by hand, out of the floor below, because someone needed an answer to a question that had none.',
      },
      success: 'Chapter 8 complete. The map stays with you — polynomials will send you back to this tower.',
      coach: ['Before tapping: which floor was built to solve which equation?'],
    },
  ],
};
