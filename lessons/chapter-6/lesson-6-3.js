/* Lesson 6.3 — Completing the Square, the Quadratic Formula, and What Roots Tell You.
   The area-model square drives completing the square; the derivation is a balance graph;
   the parabola explorer is a live SVG rendered inside a slider. */

export default {
  id: 'lesson-6-3',
  title: 'The Quadratic Formula',
  kicker: 'Quadratic Equations',
  topicIndex: 5,
  lessonIndex: 2,
  next: 'interactive-lesson.html?chapter=6&lesson=4',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Factor \\( x^2 + x - 1 = 0 \\). Product \\( -1 \\), sum \\( 1 \\). Go.',
      body: 'Hunt honestly. The only integer pair with product \\( -1 \\) is \\( 1 \\) and \\( -1 \\) — and that sums to 0, not 1.',
      interaction: {
        type: 'mcq',
        options: [
          'It has no integer pair — factoring simply fails here',
          '\\( (x+1)(x-1) \\)',
          '\\( (x - 1)^2 \\)',
          'It has no solutions at all',
        ],
        correct: 0,
      },
      hint: 'List every integer pair with product \\( -1 \\). There is exactly one, up to order.',
      explain: 'No integer pair works — but the equation still has solutions (roughly \\( 0.618 \\) and \\( -1.618 \\); the golden ratio is hiding in there). <b>Factoring depends on luck.</b> The roots exist whether or not they happen to be integers, so we need a method that never depends on the numbers being friendly.',
      note: 'Factoring is a search. When the search fails, the roots are still there — they&rsquo;re just irrational. The rest of this lesson builds a method that cannot fail.',
      coach: ['Try to name two integers multiplying to \\( -1 \\) and adding to \\( 1 \\).'],
    },
    {
      prompt: 'Complete the square: \\( x^2 + 6x = 7 \\).',
      body: 'Last lesson you filled a corner to make a perfect square. Now do it to <em>both sides of an equation</em> — and watch a solving method fall out.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x^2 + 6x = 7 \\)' },
          one: { eq: '\\( x^2 + 6x + 9 = 7 \\)', note: 'You added 9 to the LEFT pan only. The balance just tipped — this equation is no longer the one you started with. Both pans, always. Undo.' },
          s1: { eq: '\\( x^2 + 6x + 9 = 16 \\)', note: 'Half of 6 is 3; \\( 3^2 = 9 \\); added to both sides. The left is now the completed square from last lesson.' },
          s2: { eq: '\\( (x+3)^2 = 16 \\)' },
          s3: { eq: '\\( x + 3 = \\pm 4 \\)', note: 'BOTH signs. A square root has two branches — dropping the minus is how you lose half your answers.' },
          win: { eq: '\\( x = 1 \\quad\\text{or}\\quad x = -7 \\)', note: 'Check: \\( 1 + 6 = 7 \\) ✓ and \\( 49 - 42 = 7 \\) ✓. No factoring, no luck required — and this same march works on ANY quadratic.' },
        },
        ops: [
          { label: 'Add 9 to the left side only', to: { s0: 'one' } },
          { label: 'Add 9 to BOTH sides', to: { s0: 's1', one: 's1' } },
          { label: 'Write the left as a square', to: { s1: 's2' }, blocked: 'The left side isn&rsquo;t a perfect square yet — fill the corner first.' },
          { label: 'Take the square root of both sides (\\( \\pm \\))', to: { s2: 's3' }, blocked: 'Get a clean \\( (\\;)^2 = \\text{number} \\) first.' },
          { label: 'Solve both branches', to: { s3: 'win' }, blocked: 'Take the root first.' },
        ],
      },
      hint: 'Halve the \\( x \\)-coefficient, square it, add that to both sides.',
      success: 'Half of \\( b \\), squared, added to both sides. Then it&rsquo;s a square root away.',
      note: '<b>Completing the square:</b> take half the \\( x \\)-coefficient, square it, add to both sides — then take \\( \\pm\\sqrt{\\;} \\). It works on every quadratic, factorable or not.',
      coach: ['What corner completes \\( x^2 + 6x \\)?', 'Whatever you add to one pan, add to the other.'],
    },
    {
      prompt: 'Now finish the hook: solve \\( x^2 + x - 1 = 0 \\), the one that refused to factor.',
      body: 'Rearrange to \\( x^2 + x = 1 \\), then complete the square. Half of 1 is \\( \\tfrac12 \\); its square is \\( \\tfrac14 \\).',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'add to both sides', answer: '1/4', accept: ['0.25'], width: 90 },
          { label: 'right side becomes', answer: '5/4', accept: ['1.25'], width: 90 },
        ],
      },
      hint: '\\( (x + \\tfrac12)^2 = 1 + \\tfrac14 \\).',
      explain: '\\( (x+\\frac12)^2 = \\frac54 \\) → \\( x + \\frac12 = \\pm\\frac{\\sqrt5}{2} \\) → \\( x = \\frac{-1 \\pm \\sqrt5}{2} \\). The unfactorable equation just fell — and we did it <em>before</em> any formula existed. Method beats incantation.',
      note: 'Those roots, \\( \\frac{-1 \\pm \\sqrt5}{2} \\), are the golden ratio and its conjugate. Factoring could never have found them: they aren&rsquo;t integers, and nothing about integer-pair hunting reaches irrational numbers.',
      coach: ['Half the \\( x \\)-coefficient is \\( \\frac12 \\). Square it.', 'Add it to both sides: the right becomes \\( 1 + \\frac14 \\).'],
    },
    {
      prompt: 'Derive the formula. Same march, on \\( ax^2 + bx + c = 0 \\).',
      body: 'Every step is one you just made with numbers. Do it with letters and you get the quadratic formula — not handed down, but <em>built</em>.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( ax^2 + bx + c = 0 \\)' },
          skip: { eq: '\\( ax^2 + bx = -c \\qquad \\text{now complete the square?} \\)', note: 'Careful — completing the square needs the \\( x^2 \\) coefficient to be <b>1</b>. That \\( a \\) out front breaks the &ldquo;half of \\( b \\), squared&rdquo; rule. Divide by \\( a \\) first. Undo.' },
          s1: { eq: '\\( x^2 + \\dfrac{b}{a}x + \\dfrac{c}{a} = 0 \\)' },
          s2: { eq: '\\( x^2 + \\dfrac{b}{a}x = -\\dfrac{c}{a} \\)' },
          s3: { eq: '\\( x^2 + \\dfrac{b}{a}x + \\dfrac{b^2}{4a^2} = \\dfrac{b^2}{4a^2} - \\dfrac{c}{a} \\)', note: 'Half of \\( \\frac{b}{a} \\) is \\( \\frac{b}{2a} \\); squared, \\( \\frac{b^2}{4a^2} \\). Added to both pans.' },
          s4: { eq: '\\( \\left(x + \\dfrac{b}{2a}\\right)^{2} = \\dfrac{b^2 - 4ac}{4a^2} \\)', note: 'The right side over a common denominator: \\( \\frac{b^2}{4a^2} - \\frac{4ac}{4a^2} \\). That numerator — \\( b^2 - 4ac \\) — is about to run this entire lesson.' },
          s5: { eq: '\\( x + \\dfrac{b}{2a} = \\pm\\dfrac{\\sqrt{b^2-4ac}}{2a} \\)' },
          win: { eq: '\\( x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)', note: 'There it is — and you built it, from one geometric idea. The book&rsquo;s advice, which is right: don&rsquo;t memorize this. Close the page and re-derive it. Six steps, all of them the same six you just used on \\( x^2 + 6x = 7 \\).' },
        },
        ops: [
          { label: 'Subtract \\( c \\) from both sides', to: { s0: 'skip' } },
          { label: 'Divide everything by \\( a \\)', to: { s0: 's1', skip: 's1' } },
          { label: 'Move \\( \\frac{c}{a} \\) to the right', to: { s1: 's2' }, blocked: 'Make the leading coefficient 1 first.' },
          { label: 'Add \\( \\left(\\frac{b}{2a}\\right)^2 \\) to both sides', to: { s2: 's3' }, blocked: 'Clear the constant off the left first.' },
          { label: 'Write the left as a square, combine the right', to: { s3: 's4' }, blocked: 'Complete the square first.' },
          { label: 'Take \\( \\pm \\) square roots', to: { s4: 's5' }, blocked: 'You need a clean squared binomial first.' },
          { label: 'Isolate \\( x \\)', to: { s5: 'win' }, blocked: 'Take the square root first.' },
        ],
      },
      hint: 'Divide by \\( a \\) BEFORE completing the square — the method requires a leading coefficient of 1.',
      success: 'The quadratic formula, derived rather than memorized.',
      note: '\\( x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a} \\). Two warnings that cost real points: the \\( -b \\) means <em>negate \\( b \\)</em> (if \\( b = -5 \\), that&rsquo;s \\( +5 \\)), and the \\( 2a \\) sits under the ENTIRE numerator, both terms.',
      coach: ['What has to be true of the \\( x^2 \\) coefficient before you can complete the square?', 'After dividing by \\( a \\), the middle coefficient is \\( \\frac{b}{a} \\) — halve it, square it.'],
    },
    {
      prompt: 'Formula drill.',
      body: 'Two quadratics. The second one is a warning shot.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( x^2+3x+1=0 \\): \\( b^2-4ac \\)', answer: '5', width: 90 },
          { label: '\\( 4x^2-x+7=0 \\): \\( b^2-4ac \\)', answer: '-111', width: 90 },
        ],
      },
      hint: 'First: \\( 9 - 4 \\). Second: \\( (-1)^2 - 4(4)(7) = 1 - 112 \\).',
      explain: 'Discriminants 5 and \\( -111 \\). The first gives real irrational roots \\( \\frac{-3 \\pm \\sqrt5}{2} \\). The second has a NEGATIVE discriminant — its roots are \\( \\frac{1 \\pm i\\sqrt{111}}{8} \\), imaginary. The formula didn&rsquo;t flinch; it just told you where the roots live.',
      note: 'That quantity \\( b^2 - 4ac \\) under the radical has a name: the <b>discriminant</b>. It alone decides what kind of roots you get — before you compute a single one.',
      coach: ['Careful with signs: \\( b = -1 \\) means \\( b^2 = +1 \\).'],
    },
    {
      prompt: 'Watch the discriminant work. Slide \\( c \\) in \\( x^2 + 2x + c \\).',
      body: 'The parabola lifts; the two roots slide together, merge, and then vanish from the real line entirely.',
      interaction: {
        type: 'slider',
        min: -3, max: 3, step: 0.5, value: -3, label: 'c', mustExplore: 5,
        render(c) {
          const disc = 4 - 4 * c;
          const pts = [];
          for (let i = 0; i <= 60; i++) {
            const x = -5 + i / 6;
            const y = x * x + 2 * x + c;
            pts.push(`${20 + (x + 5) * 24},${100 - y * 9}`);
          }
          const rootDots = disc >= 0
            ? [(-2 + Math.sqrt(disc)) / 2, (-2 - Math.sqrt(disc)) / 2]
              .map(r => `<circle cx="${20 + (r + 5) * 24}" cy="100" r="4.5" fill="#57D364"/>`).join('')
            : '';
          const svg = `<svg viewBox="0 0 260 130" width="260" style="display:block;margin:6px auto 0;overflow:hidden">
            <line x1="0" y1="100" x2="260" y2="100" stroke="#C5C1CF" stroke-width="1.5"/>
            <line x1="140" y1="0" x2="140" y2="130" stroke="#C5C1CF" stroke-width="1"/>
            <polyline points="${pts.join(' ')}" fill="none" stroke="#88B0FF" stroke-width="2.5"/>
            ${rootDots}
          </svg>`;
          const verdict = disc > 0 ? `disc = ${disc} &gt; 0 → two real roots (two crossings)`
            : disc === 0 ? `disc = 0 → the roots MERGED into one, at x = −b/2a = −1`
            : `disc = ${disc} &lt; 0 → the curve floats clear of the axis. No real roots — they went imaginary.`;
          return { main: `\\( x^2 + 2x + ${c} \\)` + svg, sub: verdict };
        },
      },
      success: 'Three zones, one number: \\( b^2 - 4ac \\) positive, zero, or negative.',
      note: '<b>Discriminant \\( b^2 - 4ac \\):</b> \\( > 0 \\) → two distinct real roots. \\( = 0 \\) → one repeated root, \\( x = -\\frac{b}{2a} \\) (the perfect square from last lesson!). \\( < 0 \\) → two imaginary roots. You can classify a quadratic&rsquo;s roots without solving it.',
      coach: ['Push c up slowly and watch the two green dots approach each other.'],
    },
    {
      prompt: 'When the discriminant is negative, the two roots are…',
      body: 'Look at the formula: \\( \\frac{-b}{2a} \\pm \\frac{\\sqrt{\\text{negative}}}{2a} \\). A negative under the radical is Chapter 2 territory.',
      interaction: {
        type: 'mcq',
        options: [
          'A conjugate pair \\( p \\pm qi \\) — same real part, opposite imaginary parts',
          'Two unrelated complex numbers',
          'Nonexistent — the equation has no solutions',
          'Two real numbers, just very small',
        ],
        correct: 0,
      },
      hint: '\\( \\sqrt{-47} = i\\sqrt{47} \\). The \\( \\pm \\) then attaches to the imaginary part only.',
      explain: 'The formula becomes \\( x = -\\frac{b}{2a} \\pm i\\frac{\\sqrt{4ac-b^2}}{2a} \\) — the real part \\( -\\frac{b}{2a} \\) is shared, and the \\( \\pm \\) splits only the imaginary part. That IS a conjugate pair, <em>by construction</em>. Example: \\( 3x^2 + x + 4 \\) has disc \\( = -47 \\), roots \\( \\frac{-1 \\pm i\\sqrt{47}}{6} \\) — Chapter 2&rsquo;s mirror twins, born from Chapter 6&rsquo;s formula.',
      note: 'A quadratic with REAL coefficients has imaginary roots in conjugate pairs. The same pairing hits irrational roots: rational coefficients + a root \\( p + q\\sqrt{r} \\) forces \\( p - q\\sqrt{r} \\) to be a root too. <b>Know one weird root and the other is free.</b> (Both theorems need real/rational coefficients — remove that and they collapse.)',
      coach: ['Pull the \\( i \\) out of the radical and look at what the \\( \\pm \\) is attached to.'],
    },
    {
      prompt: 'Cash in the free root: one root of \\( x^2 + bx + c = 0 \\) (real coefficients) is \\( 3 + \\sqrt2 \\). Find \\( b \\) and \\( c \\).',
      body: 'Two moves: name the other root, then use sum and product.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'b =', answer: '-6', width: 84 },
          { label: 'c =', answer: '7', width: 84 },
        ],
      },
      hint: 'The other root is \\( 3 - \\sqrt2 \\). Their sum is \\( 6 \\) (so \\( b = -6 \\)); their product is \\( 9 - 2 \\).',
      explain: 'Irrational roots pair up: the other is \\( 3 - \\sqrt2 \\). Sum \\( = 6 \\Rightarrow b = -6 \\). Product \\( = (3)^2 - (\\sqrt2)^2 = 7 \\Rightarrow c = 7 \\). So \\( x^2 - 6x + 7 = 0 \\). Notice the product step was a difference of squares — conjugates cancelling, for the fourth time this book.',
      note: 'Sum of roots \\( = -\\frac{b}{a} \\); product of roots \\( = \\frac{c}{a} \\). These are <b>Vieta&rsquo;s formulas</b> — the pattern planted way back in Lesson 6.1 beat 3, now with a name and a license. Read them off the factored form \\( a(x-r)(x-s) \\) and they&rsquo;re obvious.',
      coach: ['Conjugate pairing gives you the second root instantly.', 'Sum → b. Product → c. No expansion needed.'],
    },
    {
      prompt: 'Factor or formula? \\( x^2 - 7x + 12 = 0 \\) versus \\( 3x^2 - 5x + 1 = 0 \\).',
      interaction: {
        type: 'mcq',
        options: [
          'Factor the first (nice integer pair), formula on the second (disc 13 — irrational roots)',
          'Formula on both — factoring is never reliable',
          'Factor both — everything factors eventually',
          'Formula on the first, factor the second',
        ],
        correct: 0,
      },
      hint: 'Check the first for an integer pair (product 12, sum 7). Then check the second&rsquo;s discriminant: \\( 25 - 12 \\).',
      explain: 'The first factors instantly: \\( (x-3)(x-4) \\), roots 3 and 4. The second has disc \\( = 13 \\), not a perfect square — so no integer factorization exists, and the formula gives \\( \\frac{5 \\pm \\sqrt{13}}{6} \\). <b>Factoring is speed; the formula is certainty.</b> A 10-second discriminant check tells you which tool you&rsquo;re holding.',
      note: 'Pro move: compute the discriminant first. If it&rsquo;s a perfect square, an integer factorization exists — go hunt it. If not, stop hunting and turn the crank.',
      coach: ['A perfect-square discriminant ⟺ the quadratic factors over the integers.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'What is the positive difference between the roots of \\( x^2 - 7x - 9 = 0 \\)?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '|r − s| =', answer: 'sqrt(85)', accept: ['√85', '9.2195', '9.22'], width: 130 }],
      },
      hint: 'The two roots differ only by the \\( \\pm\\sqrt{\\text{disc}} \\) piece — so their difference is \\( \\frac{\\sqrt{\\text{disc}}}{|a|} \\).',
      explain: 'The roots are \\( \\frac{7 \\pm \\sqrt{85}}{2} \\), so their difference is \\( \\frac{2\\sqrt{85}}{2} = \\sqrt{85} \\). The slick route: \\( |r - s| = \\frac{\\sqrt{b^2-4ac}}{|a|} \\) — the shared \\( -b/2a \\) part cancels, leaving only the radical.',
      coach: ['Write both roots; subtract. What survives?', 'disc = 49 + 36.'],
    },
    {
      section: 'checkpoint',
      prompt: 'The product of the roots of \\( x^2 - 3kx + 2k^2 - 1 = 0 \\) is 7. What kind of roots does it then have?',
      interaction: {
        type: 'mcq',
        options: [
          'Real and irrational',
          'Real and rational',
          'Imaginary',
          'Real and equal',
        ],
        correct: 0,
      },
      hint: 'Vieta: product \\( = \\frac{c}{a} = 2k^2 - 1 = 7 \\), so \\( k^2 = 4 \\). Now compute the discriminant \\( 9k^2 - 4(2k^2-1) \\).',
      explain: '\\( 2k^2 - 1 = 7 \\) gives \\( k^2 = 4 \\). Discriminant: \\( 9k^2 - 4(2k^2 - 1) = 9k^2 - 8k^2 + 4 = k^2 + 4 = 8 \\). Positive → real; but 8 is not a perfect square → <b>irrational</b>. Vieta pinned the parameter, the discriminant classified the roots — and neither step required solving anything.',
      coach: ['Use Vieta to find \\( k^2 \\) from the product.', 'Then the discriminant, in terms of \\( k^2 \\).', 'Positive but not a perfect square means what?'],
    },
    {
      section: 'checkpoint',
      prompt: '\\( x^2 - 2\\sqrt{2}\\,x + 2 = 0 \\). Its roots are…',
      body: 'AHSME. Careful — irrational coefficients are allowed to be strange.',
      interaction: {
        type: 'mcq',
        options: [
          'Real and equal',
          'Real and distinct',
          'Imaginary',
          'Rational and equal',
        ],
        correct: 0,
      },
      hint: 'Discriminant: \\( (-2\\sqrt2)^2 - 4(1)(2) = 8 - 8 \\).',
      explain: 'The discriminant is exactly <b>0</b> → one repeated real root, \\( x = -\\frac{b}{2a} = \\sqrt2 \\). So: <b>real and equal</b>. (It&rsquo;s the perfect square \\( (x - \\sqrt2)^2 \\).) Note the root is irrational, not rational — the coefficients weren&rsquo;t rational, so the usual guarantees don&rsquo;t apply.',
      coach: ['Square \\( -2\\sqrt2 \\) carefully: it is 8, not \\( 2\\sqrt2 \\).', 'A zero discriminant means what?'],
    },
    {
      section: 'checkpoint',
      prompt: 'Solve \\( x^3 + 3x^2 + 3x = 1 \\).',
      body: 'Not a quadratic — but Lesson 6.1&rsquo;s cube identity is sitting right there. (Answer with \\( \\sqrt[3]{2} \\) written as <code>cbrt(2)</code>.)',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: 'cbrt(2)-1', accept: ['2^(1/3)-1', '0.2599', '0.26'], width: 150 }],
      },
      hint: 'Add 1 to both sides: the left becomes \\( x^3 + 3x^2 + 3x + 1 \\). What is that?',
      explain: 'Adding 1: \\( x^3 + 3x^2 + 3x + 1 = 2 \\), and the left is exactly \\( (x+1)^3 \\) — the \\( 1,3,3,1 \\) identity from Lesson 6.1. So \\( x + 1 = \\sqrt[3]{2} \\) and \\( x = \\sqrt[3]{2} - 1 \\). (Cube roots have one real branch — Chapter 1.)',
      coach: ['The coefficients 1, 3, 3 should look familiar. What&rsquo;s the missing fourth?', 'Add 1 to both sides and the left collapses to a cube.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Find the quadratic whose roots are the <em>conjugates</em> of the roots of \\( x^2 - 6x + 11 = 2xi - 10i \\).',
      body: 'MA&copy; 1990. Chapters 2 and 6 shake hands.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( x^2 - (6 - 2i)x + (11 - 10i) = 0 \\)',
          '\\( x^2 - (6 + 2i)x + (11 + 10i) = 0 \\)',
          '\\( x^2 + (6 - 2i)x - (11 - 10i) = 0 \\)',
          '\\( x^2 - 6x + 11 = 0 \\)',
        ],
        correct: 0,
      },
      hint: 'First rearrange everything to one side: \\( x^2 - (6+2i)x + (11+10i) = 0 \\). Then ask what conjugating the roots does to Vieta&rsquo;s sum and product.',
      explain: 'Rearranged, the equation is \\( x^2 - (6+2i)x + (11+10i) = 0 \\), with root sum \\( 6+2i \\) and product \\( 11+10i \\). If the roots are \\( r, s \\), the new roots are \\( \\bar r, \\bar s \\) — whose sum is \\( \\overline{r+s} = 6-2i \\) and whose product is \\( \\overline{rs} = 11-10i \\) (conjugation distributes over both, from Chapter 2). So the new quadratic is \\( x^2 - (6-2i)x + (11-10i) = 0 \\): <b>conjugate the coefficients.</b>',
      walkthrough: [
        'Collect everything on one side. \\( x^2 - 6x + 11 - 2xi + 10i = 0 \\), and grouping the \\( x \\)-terms: \\( x^2 - (6 + 2i)x + (11 + 10i) = 0 \\).',
        'Read Vieta off it: the roots \\( r, s \\) satisfy \\( r + s = 6 + 2i \\) and \\( rs = 11 + 10i \\). (Do NOT try to find \\( r \\) and \\( s \\) themselves — you don&rsquo;t need them.)',
        'The new roots are \\( \\bar r \\) and \\( \\bar s \\). Their sum is \\( \\bar r + \\bar s = \\overline{r + s} = \\overline{6+2i} = 6 - 2i \\), and their product is \\( \\bar r \\bar s = \\overline{rs} = \\overline{11+10i} = 11 - 10i \\) — because conjugation distributes over addition and multiplication (Lesson 2.2b).',
        'Rebuild from sum and product: \\( x^2 - (\\text{sum})x + (\\text{product}) = x^2 - (6-2i)x + (11-10i) = 0 \\).',
        'The lesson in one line: <b>conjugating all the roots conjugates all the coefficients.</b> (Sanity check: the roots are \\( 4 - i \\) and \\( 2 + 3i \\); their conjugates \\( 4+i \\) and \\( 2-3i \\) do sum to \\( 6-2i \\) and multiply to \\( 11-10i \\) ✓.)',
      ],
      success: 'You solved it without ever finding a root — Vieta plus Chapter 2&rsquo;s conjugation rules did the entire job.',
      note: 'And notice what this problem quietly disproves: these roots \\( 4-i \\) and \\( 2+3i \\) are NOT a conjugate pair. The conjugate-root theorem needs <b>real</b> coefficients — this quadratic has \\( i \\)s in its coefficients, so all bets are off.',
      coach: ['Get everything on one side and group the \\( x \\)-terms — the coefficients are complex.', 'Vieta gives you the sum and product without solving.', 'What does conjugating both roots do to their sum? To their product?'],
    },
  ],
};
