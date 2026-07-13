/* Lesson 8.1 — Rationals: Decimals, Fractions, and Comparisons.
   The number tower (nested-set SVG) opens and closes the chapter; the shift machine
   (a balance graph) turns repeating decimals into fractions mechanically. */

const TOWER_SVG = (full = false) => `<svg class="il-mod-wheel" viewBox="0 0 300 190" width="300" role="img" aria-label="Nested number systems: naturals inside integers inside rationals">
  ${full ? '<rect x="4" y="4" width="292" height="182" rx="18" fill="rgba(255,177,146,.08)" stroke="#FFB192" stroke-width="1.4"/>' : ''}
  ${full ? '<text class="il-svg-peach-ink" x="16" y="20" font-size="11" font-weight="700">ℂ — complex</text>' : ''}
  <rect x="${full ? 22 : 8}" y="${full ? 26 : 8}" width="${full ? 256 : 284}" height="${full ? 152 : 174}" rx="16" fill="rgba(136,176,255,.06)" stroke="#88B0FF" stroke-width="1.3" stroke-dasharray="${full ? '0' : '5 4'}"/>
  <text class="il-svg-blue-ink" x="${full ? 34 : 20}" y="${full ? 42 : 24}" font-size="11" font-weight="700">ℝ — real${full ? '' : ' (?)'}</text>
  <rect x="${full ? 38 : 24}" y="${full ? 48 : 30}" width="${full ? 224 : 252}" height="${full ? 118 : 140}" rx="14" fill="rgba(136,176,255,.10)" stroke="#88B0FF" stroke-width="1.4"/>
  <text class="il-svg-blue-ink" x="${full ? 50 : 36}" y="${full ? 64 : 46}" font-size="11" font-weight="700">ℚ — rational</text>
  <rect x="${full ? 54 : 40}" y="${full ? 70 : 52}" width="${full ? 140 : 168}" height="${full ? 82 : 104}" rx="12" fill="rgba(136,176,255,.16)" stroke="#88B0FF" stroke-width="1.4"/>
  <text class="il-svg-blue-ink" x="${full ? 66 : 52}" y="${full ? 86 : 68}" font-size="11" font-weight="700">ℤ — integers</text>
  <rect x="${full ? 70 : 56}" y="${full ? 92 : 74}" width="${full ? 96 : 116}" height="${full ? 46 : 66}" rx="10" fill="rgba(87,211,100,.14)" stroke="#57D364" stroke-width="1.4"/>
  <text class="il-svg-ink" x="${full ? 82 : 68}" y="${full ? 108 : 90}" font-size="11" font-weight="700">ℕ — naturals</text>
  <text class="il-venn-caption" x="${full ? 82 : 68}" y="${full ? 126 : 110}" font-size="10">1, 2, 3, …</text>
  ${full ? `<text class="il-svg-blue-ink" x="212" y="150" font-size="10" text-anchor="middle">√2, π</text>
    <text class="il-venn-caption" x="212" y="162" font-size="9" text-anchor="middle">irrational</text>
    <text class="il-svg-peach-ink" x="262" y="172" font-size="10" text-anchor="middle">i, 2+i</text>` : ''}
</svg>`;

export default {
  id: 'lesson-8-1',
  title: 'Rationals: Decimals and Fractions',
  kicker: 'What Numbers Really Are',
  topicIndex: 7,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=8&lesson=2',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Every number you&rsquo;ve met lives somewhere. Send each one home.',
      body: 'The tower, built floor by floor: counting numbers, then debts and zero, then ratios.' + TOWER_SVG(false),
      interaction: {
        type: 'match',
        pairs: [
          ['\\( 7 \\)', 'ℕ — a counting number'],
          ['\\( -3 \\)', 'ℤ — needs negatives'],
          ['\\( \\tfrac23 \\), \\( 0.375 \\)', 'ℚ — needs division'],
          ['\\( \\sqrt2 \\), \\( i \\)', '?? — no home yet'],
        ],
      },
      hint: 'Put each number in the SMALLEST system that can hold it. \\( 7 \\) is an integer and a rational too — but ℕ already has it.',
      success: 'Each floor exists because the one below it couldn&rsquo;t answer some question.',
      note: 'The tower&rsquo;s logic: ℕ can&rsquo;t do \\( 3 - 5 \\), so we built ℤ. ℤ can&rsquo;t do \\( 2 \\div 3 \\), so we built ℚ. And ℚ, as you&rsquo;ll prove next lesson, can&rsquo;t do \\( \\sqrt2 \\). Those two homeless numbers get their floors in Lesson 8.2 — that&rsquo;s the cliffhanger.',
      coach: ['Which system is the smallest that can contain each number?'],
    },
    {
      prompt: 'Vocabulary with teeth: how many <em>nonnegative</em> integers are there below 4, and how many <em>positive</em> ones?',
      body: 'The entire difference between the two words is a single number. Competition problems weaponize it.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'nonnegative integers < 4', answer: '4', width: 84 },
          { label: 'positive integers < 4', answer: '3', width: 84 },
        ],
      },
      hint: 'Nonnegative: \\( 0, 1, 2, 3 \\). Positive: \\( 1, 2, 3 \\).',
      explain: 'Four vs three — and the gap is <b>0</b>. &ldquo;Nonnegative&rdquo; includes zero; &ldquo;positive&rdquo; does not. An entire answer can hinge on which word the problem used, so read it twice.',
      note: 'Also filed: every integer IS a rational (\\( n = \\frac{n}{1} \\)), and a rational is \\( \\frac{p}{q} \\) with \\( q \\ne 0 \\). The systems nest — nothing gets lost when you move up a floor.',
      coach: ['List them out. Does zero make the cut in each case?'],
    },
    {
      prompt: 'Terminating decimals are fractions in disguise. Convert, then reduce.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( 1.25 = \\frac{?}{4} \\)', answer: '5', width: 84 },
          { label: '\\( 0.375 = \\frac{3}{?} \\)', answer: '8', width: 84 },
        ],
      },
      hint: '\\( 1.25 = \\frac{125}{100} \\) — now divide out the GCF. \\( 0.375 = \\frac{375}{1000} \\).',
      explain: '\\( \\frac{125}{100} = \\frac54 \\) and \\( \\frac{375}{1000} = \\frac38 \\). The recipe never changes: <b>digits over \\( 10^k \\), then reduce</b> with Chapter 5&rsquo;s GCF.',
      coach: ['Put the digits over the right power of 10, then cancel.'],
    },
    {
      prompt: 'Which of these will terminate as a decimal? Predict from the DENOMINATOR alone.',
      body: 'Reduce first, then look at what&rsquo;s downstairs.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\tfrac38 \\) and \\( \\tfrac{9}{40} \\) terminate; \\( \\tfrac27 \\) does not',
          'All three terminate',
          'Only \\( \\tfrac38 \\) terminates',
          'None of them terminate',
        ],
        correct: 0,
      },
      hint: '\\( 10 = 2 \\times 5 \\). A decimal with \\( k \\) places is something over \\( 10^k = 2^k 5^k \\). So which denominators can survive in lowest terms?',
      explain: 'A terminating decimal is \\( \\frac{\\text{digits}}{10^k} \\), and \\( 10^k = 2^k5^k \\). After reducing, the denominator can only contain <b>2s and 5s</b>. \\( 8 = 2^3 \\) ✓ and \\( 40 = 2^3 \\cdot 5 \\) ✓, but \\( 7 \\) is neither — so \\( \\frac27 \\) can never terminate. (It gives \\( 0.\\overline{285714} \\).)',
      note: '<b>In lowest terms, a fraction terminates exactly when its denominator is \\( 2^a 5^b \\).</b> A Chapter-5 prime-factorization fact wearing a decimal costume — you can now answer &ldquo;does this terminate?&rdquo; without dividing at all.',
      coach: ['Factor each denominator.', 'Which primes are allowed to appear, given that \\( 10 = 2 \\cdot 5 \\)?'],
    },
    {
      prompt: 'Now the other kind. Turn \\( 0.\\overline{263} \\) into a fraction — with the shift machine.',
      body: 'Multiply by a power of 10 so the repeating tails line up, stack the copies, and subtract. The infinite tails annihilate.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( x = 0.263263263\\ldots \\)' },
          bad: { eq: '\\( 10x = 2.63263263\\ldots \\)', note: 'Shifted by ONE place — but the repeat is three digits long, so the tails no longer line up: \\( 10x \\) has &ldquo;632632…&rdquo; after the point while \\( x \\) has &ldquo;263263…&rdquo;. Subtracting now leaves an infinite mess. The shift must match the REPEAT LENGTH. Undo.' },
          s1: { eq: '\\( 1000x = 263.263263\\ldots \\)', note: 'Shifted by three — one full period. Now both numbers have exactly the same infinite tail, \\( 0.263263\\ldots \\)' },
          s2: { eq: '\\( 1000x - x = 263.263\\ldots - 0.263\\ldots \\;\\Rightarrow\\; 999x = 263 \\)', note: 'The tails cancelled EXACTLY — the same annihilation as Chapter 7&rsquo;s telescoping. What&rsquo;s left is a finite equation.' },
          win: { eq: '\\( x = \\dfrac{263}{999} \\qquad \\text{so } 4.\\overline{263} = 4 + \\dfrac{263}{999} = \\dfrac{4259}{999} \\)', note: 'Reduce-check: \\( 999 = 3^3 \\cdot 37 \\), and 263 is prime — nothing cancels, so it&rsquo;s already lowest. Pattern: a \\( k \\)-digit repeat gives a denominator of \\( k \\) nines. (\\( 0.\\overline{7} = \\frac79 \\); \\( 0.\\overline{12} = \\frac{12}{99} \\).)' },
        },
        ops: [
          { label: 'Multiply by 10', to: { s0: 'bad' } },
          { label: 'Multiply by 1000 (the repeat length is 3)', to: { s0: 's1', bad: 's1' } },
          { label: 'Subtract the original from the shifted copy', to: { s1: 's2' }, blocked: 'Line the tails up first — the shift must be one full period.' },
          { label: 'Solve for \\( x \\)', to: { s2: 'win' }, blocked: 'Subtract to kill the tails first.' },
        ],
      },
      hint: 'The repeating block is three digits long, so shift by three places: multiply by \\( 10^3 \\).',
      success: 'Shift by the repeat length, subtract, solve. The infinite part cancels itself.',
      note: '<b>The shift machine.</b> Repeat length \\( k \\) → multiply by \\( 10^k \\) → subtract → denominator of \\( k \\) nines. Every repeating decimal is a fraction; this is the proof AND the algorithm.',
      coach: ['How many digits are in the repeating block?', 'Multiply by \\( 10 \\) to that power, so the tails align.'],
    },
    {
      prompt: 'The famous one: what is \\( 0.\\overline{9} \\)?',
      body: 'Run the machine on it. Repeat length 1, so multiply by 10.',
      interaction: {
        type: 'mcq',
        options: [
          'Exactly 1',
          'Slightly less than 1',
          'Undefined',
          '\\( \\frac{9}{10} \\)',
        ],
        correct: 0,
      },
      hint: '\\( x = 0.999\\ldots \\), so \\( 10x = 9.999\\ldots \\). Subtract: \\( 9x = 9 \\).',
      explain: '\\( 9x = 9 \\), so \\( x = 1 \\). Exactly, not approximately. \\( 0.\\overline{9} \\) and \\( 1 \\) are two names for one number — the same way \\( \\frac12 \\) and \\( \\frac36 \\) are. If it feels wrong, notice you have no candidate for the &ldquo;gap&rdquo;: any number you name as the difference is provably too big.',
      note: 'Decimal notation is a <em>representation</em>, and some numbers have two of them. This isn&rsquo;t a paradox or a trick — it&rsquo;s the machine you just built, applied honestly.',
      coach: ['Do the algebra and refuse to argue with it.'],
    },
    {
      prompt: 'Offset repeats: \\( 0.3\\overline{18} = 0.3181818\\ldots \\). The prefix &ldquo;3&rdquo; doesn&rsquo;t repeat. Now what?',
      body: 'You need TWO shifts: one to clear the non-repeating prefix, one to align the tails. Choosing them is the whole skill.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'first shift: \\( \\times 10^{?} \\)', answer: '1', width: 84 },
          { label: 'second shift: \\( \\times 10^{?} \\)', answer: '3', width: 84 },
          { label: 'the fraction, reduced', answer: '7/22', width: 100 },
        ],
      },
      hint: '\\( 10x = 3.181818\\ldots \\) and \\( 1000x = 318.181818\\ldots \\) — now those two have identical tails. Subtract them.',
      explain: '\\( 1000x - 10x = 318.\\overline{18} - 3.\\overline{18} \\) gives \\( 990x = 315 \\), so \\( x = \\frac{315}{990} = \\frac{7}{22} \\). The two exponents: <b>1</b> clears the one-digit prefix, and <b>3</b> = prefix + one full period. Their difference, 990, is the denominator: two nines (the period) followed by one zero (the prefix).',
      note: 'Naive answer \\( \\frac{318}{999} \\) is <em>wrong</em> — that would be \\( 0.\\overline{318} \\), a different number. Offset repeats need the double shift, and the tell is in the denominator: <b>nines for the repeating digits, zeros for the prefix.</b>',
      coach: ['Shift just enough to put the decimal point right before the repeating block.', 'Then shift one more full period, so the two tails match.', 'Subtract the two equations.'],
    },
    {
      prompt: 'Why must every fraction either terminate or repeat? Watch the remainders of \\( 2 \\div 7 \\).',
      body: 'Step the long division and keep your eye on the remainder, not the quotient.',
      interaction: {
        type: 'slider',
        min: 1, max: 8, step: 1, value: 1, label: 'step', mustExplore: 6,
        render(n) {
          let r = 2; const rs = [];
          for (let i = 0; i < n; i++) { rs.push((r * 10) % 7); r = (r * 10) % 7; }
          const last = rs[rs.length - 1];
          const seen = rs.slice(0, -1).includes(last);
          return {
            main: `\\( \\text{remainders so far: } ${rs.join(',\\; ')} \\)`,
            sub: seen
              ? `Remainder ${last} has appeared BEFORE — so from here the digits must repeat exactly as they did last time. The decimal is 0.285714285714…, period 6.`
              : `Only 6 nonzero remainders are possible mod 7 (1–6). ${7 - rs.length - 1 > 0 ? `At most ${6 - rs.length} fresh ones remain.` : 'The next one MUST be a repeat — there is nowhere left to go.'}`,
          };
        },
      },
      success: 'Dividing by 7 leaves only 6 possible nonzero remainders — so within 7 steps one MUST recur, and the digits cycle from there.',
      note: 'The argument in one line: <b>finitely many possible remainders ⇒ some remainder recurs ⇒ the digits repeat.</b> (If a remainder hits 0, it terminates instead.) So every rational is terminating-or-repeating — no third option. This is your first taste of the <em>pigeonhole principle</em>, and it also caps the repeat length: for \\( n/13 \\), at most 12 digits.',
      coach: ['Ignore the quotient digits — watch only the remainders.', 'How many different nonzero remainders can division by 7 possibly produce?'],
    },
    {
      prompt: 'Which is bigger, \\( \\dfrac{5}{56} \\) or \\( \\dfrac{6}{67} \\)?',
      body: 'Bigger numerator AND bigger denominator — intuition is useless here. Use the ?-method: write \\( ? \\) between them and multiply both sides by each (positive) denominator, carrying the \\( ? \\) along unchanged.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\tfrac{5}{56} < \\tfrac{6}{67} \\), because \\( 5 \\cdot 67 = 335 < 336 = 6 \\cdot 56 \\)',
          '\\( \\tfrac{5}{56} > \\tfrac{6}{67} \\), because \\( 56 < 67 \\)',
          'They are equal',
          'It cannot be determined without decimals',
        ],
        correct: 0,
      },
      hint: 'Multiply \\( \\frac{5}{56} \\; ? \\; \\frac{6}{67} \\) by 56 and then by 67 — both positive, so \\( ? \\) never flips. You land on \\( 5 \\cdot 67 \\; ? \\; 6 \\cdot 56 \\).',
      explain: '\\( 335 < 336 \\), so the \\( ? \\) was \\( < \\) all along: \\( \\frac{5}{56} < \\frac{6}{67} \\). The method always decides — no decimals, no guessing. <b>But the multipliers must be positive.</b> Multiplying an inequality by a negative FLIPS it, and the ?-method silently breaks if you forget.',
      note: 'The ?-method: put the unknown symbol between them, transform both sides with positive multipliers, and read the symbol off at the end. It&rsquo;s the honest version of &ldquo;cross-multiply&rdquo; — honest because it makes you check the sign of what you multiplied by.',
      coach: ['Cross-multiply, but track WHAT you multiplied by and whether it was positive.'],
    },
    {
      prompt: 'Symbolic: for positive \\( a < b \\) and positive \\( x \\), which is bigger — \\( \\dfrac{a}{a+x} \\) or \\( \\dfrac{b}{b+x} \\)?',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\dfrac{b}{b+x} \\) is bigger',
          '\\( \\dfrac{a}{a+x} \\) is bigger',
          'They are equal',
          'It depends on \\( x \\)',
        ],
        correct: 0,
      },
      hint: 'Cross-multiply (both denominators are positive): compare \\( a(b+x) \\) with \\( b(a+x) \\). Expand both.',
      explain: '\\( a(b+x) = ab + ax \\) and \\( b(a+x) = ab + bx \\). Their difference is \\( x(a - b) < 0 \\), so \\( \\frac{a}{a+x} < \\frac{b}{b+x} \\). Interpretation worth keeping: <b>adding the same amount to top and bottom pulls a fraction toward 1</b> — and the smaller fraction has further to climb, so it gains more, but it still can&rsquo;t overtake.',
      note: 'A Chapter-4 proportion intuition, now with a proof under it. Also note the reciprocal rule from the same family: for positive \\( a < b \\), \\( \\frac1a > \\frac1b \\) — flipping reverses order.',
      coach: ['Cross-multiply and subtract. What is the sign of \\( x(a-b) \\)?'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'Convert: \\( \\dfrac{3}{11} \\) to a decimal, and \\( 0.\\overline{345} \\) to a reduced fraction.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( \\frac{3}{11} \\) = 0.…  (repeating block)', answer: '27', width: 90 },
          { label: '\\( 0.\\overline{345} \\) = ?/333', answer: '115', width: 90 },
        ],
      },
      hint: '\\( \\frac{3}{11} = 0.\\overline{27} \\). And \\( 0.\\overline{345} = \\frac{345}{999} \\) — now reduce (both are divisible by 3).',
      explain: '\\( \\frac{3}{11} = 0.272727\\ldots \\) — the repeating block is <b>27</b>. And \\( \\frac{345}{999} = \\frac{115}{333} \\) after dividing by 3. (Denominator 11 isn&rsquo;t \\( 2^a5^b \\), so it had to repeat — as predicted.)',
      coach: ['Three nines for a three-digit repeat, then reduce.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Write \\( 0.00\\overline{38} \\) in lowest terms. What is numerator + denominator?',
      body: 'Two zeros of prefix, then a two-digit repeat.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'numerator + denominator', answer: '4969', width: 110 }],
      },
      hint: 'Denominator pattern: two nines (the repeat) followed by two zeros (the prefix) → 9900. So it&rsquo;s \\( \\frac{38}{9900} \\).',
      explain: '\\( \\frac{38}{9900} = \\frac{19}{4950} \\) (divide by 2; \\( 4950 = 2 \\cdot 3^2 \\cdot 5^2 \\cdot 11 \\) shares nothing with 19, which is prime). Sum: \\( 19 + 4950 = \\mathbf{4969} \\).',
      coach: ['Nines for the repeating digits, zeros for the prefix.', 'Then reduce — and check 19 is prime.'],
    },
    {
      section: 'checkpoint',
      prompt: 'What is the largest integer \\( x \\) with \\( \\dfrac{1}{x} > \\dfrac{4}{49} \\)?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x =', answer: '12', width: 90 }],
      },
      hint: 'Cross-multiply (careful — assume \\( x > 0 \\), since a negative \\( x \\) makes \\( \\frac1x \\) negative and the inequality trivially false): \\( 49 > 4x \\), so \\( x < 12.25 \\).',
      explain: '\\( x < \\frac{49}{4} = 12.25 \\), so the largest INTEGER is \\( \\mathbf{12} \\). Check: \\( \\frac{1}{12} = 0.0833 > \\frac{4}{49} = 0.0816 \\) ✓, while \\( \\frac{1}{13} = 0.0769 \\) ✗. Reciprocals reverse order — bigger \\( x \\) means smaller \\( \\frac1x \\), so we want \\( x \\) as large as it can be while staying under the bound.',
      coach: ['Cross-multiply, noting that \\( x \\) must be positive for the inequality to have a chance.', 'Then take the largest integer strictly below the bound.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Which fraction is larger: \\( \\dfrac{7}{17} \\) or \\( \\dfrac{9}{19} \\)?',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\tfrac{9}{19} \\), since \\( 7 \\cdot 19 = 133 < 153 = 9 \\cdot 17 \\)',
          '\\( \\tfrac{7}{17} \\), since it has the smaller denominator',
          'They are equal',
          'Cannot be determined',
        ],
        correct: 0,
      },
      hint: 'The ?-method: \\( 7 \\cdot 19 \\; ? \\; 9 \\cdot 17 \\).',
      explain: '\\( 133 < 153 \\), so \\( \\frac{7}{17} < \\frac{9}{19} \\). (Both are near \\( \\frac12 \\) — \\( 0.412 \\) vs \\( 0.474 \\) — which is exactly why eyeballing fails and the method doesn&rsquo;t.)',
      coach: ['Cross-multiply with positive denominators; the symbol survives unchanged.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Compute \\( \\left| \\, 0.36 - 0.\\overline{36} \\, \\right| \\) as a common fraction.',
      body: 'MATHCOUNTS 1986. Note the overbar carefully — it is on the SECOND number only, and that is the entire problem.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'the fraction', answer: '1/275', width: 110 }],
      },
      hint: '\\( 0.36 \\) terminates → \\( \\frac{36}{100} = \\frac{9}{25} \\). \\( 0.\\overline{36} \\) repeats → \\( \\frac{36}{99} = \\frac{4}{11} \\). Now subtract and take the absolute value.',
      explain: '\\( \\frac{4}{11} - \\frac{9}{25} = \\frac{4 \\cdot 25 - 9 \\cdot 11}{275} = \\frac{100 - 99}{275} = \\frac{1}{275} \\). The repeating version is the LARGER one (it keeps adding 36s forever), so the absolute value is \\( \\mathbf{\\frac{1}{275}} \\).',
      walkthrough: [
        'Convert each number with the right machine. \\( 0.36 \\) is terminating: digits over \\( 10^2 \\), so \\( \\frac{36}{100} = \\frac{9}{25} \\).',
        '\\( 0.\\overline{36} \\) is repeating with period 2: shift by \\( 10^2 \\), subtract, and the denominator is two nines — \\( \\frac{36}{99} = \\frac{4}{11} \\).',
        'Common denominator: \\( 25 \\times 11 = 275 \\). So \\( \\frac{9}{25} = \\frac{99}{275} \\) and \\( \\frac{4}{11} = \\frac{100}{275} \\). They differ by a single \\( \\frac{1}{275} \\) — the two numbers are astonishingly close.',
        'Absolute value makes the order irrelevant: \\( \\left|\\frac{99}{275} - \\frac{100}{275}\\right| = \\frac{1}{275} \\). (Which IS bigger? The repeating one — it keeps appending 36s past where the terminating one stopped.)',
      ],
      success: 'Two conversions, one subtraction. Every step of this problem was a beat of this lesson.',
      note: 'Overbars are load-bearing. \\( 0.36 \\) and \\( 0.\\overline{36} \\) look nearly identical on the page and differ by exactly \\( \\frac{1}{275} \\) — read the notation, then convert.',
      coach: ['Which number terminates and which repeats? They convert by different machines.', '\\( \\frac{9}{25} \\) and \\( \\frac{4}{11} \\) — find a common denominator.', 'Subtract, then take the absolute value.'],
    },
  ],
};
