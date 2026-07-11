/* Lesson 4.2 — Manipulating Proportions.
   The k-trick, equal-ratio identities, cancel-the-middle, ratio chains —
   and the escape hatch: cross-multiplication always works. */

export default {
  id: 'lesson-4-3',
  title: 'Manipulating Proportions',
  kicker: 'Proportions',
  topicIndex: 3,
  lessonIndex: 2,
  next: 'interactive-lesson.html?chapter=4&lesson=4',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Take \\( \\dfrac{4}{6} \\) and \\( \\dfrac{10}{15} \\) — both equal \\( \\dfrac23 \\). Now mash them together.',
      body: 'Slide the weight \\( m \\) and watch \\( \\dfrac{4 + 10m}{6 + 15m} \\). Adding tops and bottoms is illegal for ordinary fractions… so watch closely.',
      interaction: {
        type: 'slider',
        min: 1, max: 6, step: 1, value: 1, label: 'm', mustExplore: 4,
        render(m) {
          return {
            main: `\\( \\dfrac{4 + 10 \\cdot ${m}}{6 + 15 \\cdot ${m}} = \\dfrac{${4 + 10 * m}}{${6 + 15 * m}} = \\dfrac{2}{3} \\)`,
            sub: 'Any weight, same ratio. This is NOT how fractions usually behave — it works here only because the two ratios were equal to begin with.',
          };
        },
      },
      success: 'When ratios are equal, weighted sums of numerators over the same weighted sums of denominators keep the ratio. Now: why?',
      note: 'Contrast deliberately: \\( \\frac12 + \\frac13 \\ne \\frac{2}{5} \\) — adding tops and bottoms is fraction vandalism in general. It becomes legal exactly when the fractions are <em>equal ratios</em>.',
      coach: ['Compute the fraction at two different weights. Reduce both.'],
    },
    {
      prompt: 'Prove it. Arrange the steps.',
      body: 'Claim: if \\( \\dfrac{a}{b} = \\dfrac{c}{d} = k \\), then \\( \\dfrac{a + mc}{b + md} = k \\).',
      interaction: {
        type: 'order',
        items: [
          'Name the common ratio: \\( \\frac{a}{b} = \\frac{c}{d} = k \\), so \\( a = kb \\) and \\( c = kd \\).',
          'Substitute both into the mashed fraction: \\( \\frac{a+mc}{b+md} = \\frac{kb + mkd}{b + md} \\).',
          'Factor \\( k \\) out of the numerator: \\( \\frac{k(b + md)}{b + md} \\).',
          'Cancel \\( b + md \\): the result is \\( k \\). ∎',
        ],
      },
      hint: 'The move that starts everything: give the shared ratio a NAME.',
      explain: 'Set \\( a = kb, c = kd \\), substitute, factor \\( k \\), cancel. With \\( m = 1 \\) you get \\( \\frac{a+c}{b+d} = k \\) free; with \\( m = -1 \\), \\( \\frac{a-c}{b-d} = k \\).',
      note: '&ldquo;Let the ratio be \\( k \\)&rdquo; — then every quantity becomes \\( k \\) times something. This is the workhorse trick for hard proportion problems, including this lesson&rsquo;s boss.',
      coach: ['Once \\( a \\) and \\( c \\) are rewritten via \\( k \\), it&rsquo;s pure algebra.', 'What common factor does the new numerator have?'],
    },
    {
      prompt: '\\( \\dfrac{x}{y} = \\dfrac{4}{5} \\) and \\( \\dfrac{z}{y} = \\dfrac{4}{3} \\). Find \\( \\dfrac{x}{z} \\).',
      body: 'Two proportions sharing a middleman \\( y \\). Multiply them or divide them — one choice makes \\( y \\) vanish.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x/z =', answer: '3/5', accept: ['0.6'], width: 110 }],
      },
      hint: '\\( \\frac{x}{y} \\div \\frac{z}{y} = \\frac{x}{y} \\cdot \\frac{y}{z} = \\frac{x}{z} \\). Dividing cancels the shared \\( y \\).',
      explain: '\\( \\frac{x}{z} = \\frac{4/5}{4/3} = \\frac{4}{5} \\cdot \\frac{3}{4} = \\frac{3}{5} \\). Multiplying instead gives \\( \\frac{xz}{y^2} \\) — the middleman doubles down instead of leaving.',
      note: 'Cancel-the-middle: put the shared variable on opposite levels (once up, once down), then combine. Sometimes that means dividing, sometimes multiplying — let the cancellation decide.',
      coach: ['Where does \\( y \\) sit in each fraction?', 'Choose the operation that puts one \\( y \\) upstairs and one downstairs.'],
    },
    {
      prompt: 'If \\( \\dfrac{x}{3z} = 3 \\) and \\( \\dfrac{y}{4z} = 2 \\), find \\( \\dfrac{2y}{x} \\).',
      body: 'Solo. Same middleman game, plus a little dressing.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '2y/x =', answer: '16/9', width: 110 }],
      },
      hint: 'Unpack each: \\( x = 9z \\) and \\( y = 8z \\).',
      explain: '\\( x = 9z, y = 8z \\), so \\( \\frac{2y}{x} = \\frac{16z}{9z} = \\frac{16}{9} \\) — the \\( z \\) cancels no matter what \\( z \\) is.',
      coach: ['Express both \\( x \\) and \\( y \\) in terms of \\( z \\) first.'],
    },
    {
      prompt: 'Solve \\( \\dfrac{x + 2y}{x - y} = \\dfrac{3}{4} \\) for \\( \\dfrac{x}{y} \\).',
      body: 'After a lesson of fancy identities, the book&rsquo;s own punchline: sometimes the right manipulation is <em>no manipulation</em>.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x/y =', answer: '-11', width: 110 }],
      },
      hint: 'Cross-multiply — both sides, all terms — then collect \\( x \\)s and \\( y \\)s.',
      explain: '\\( 4(x + 2y) = 3(x - y) \\) → \\( 4x + 8y = 3x - 3y \\) → \\( x = -11y \\), so \\( \\frac{x}{y} = -11 \\). Divide the final equation by \\( y \\) and the answer falls out.',
      note: 'Manipulations are tools, not obligations. <b>Cross-multiplication always works</b> — when no identity suggests itself, clear the fractions and do plain Chapter-3 algebra.',
      coach: ['Cross-multiply carefully: the 4 hits BOTH terms of \\( x + 2y \\).', 'The question asks for a ratio — dividing through by \\( y \\) manufactures it.'],
    },
    {
      prompt: 'Four tennis-racket brands: Lob : Love \\( = 17:12 \\), Love : Smash \\( = 3:4 \\), Smash : Vantage \\( = 32:15 \\). Sales totaled \\$3150. Love&rsquo;s share?',
      body: 'Chained ratios with mismatched middle terms. Scale each link so the shared brand matches, THEN tape-diagram the total.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'Love ($)', answer: '720', width: 110 }],
      },
      hint: 'Love appears as 12 and as 3. Scale \\( 3:4 \\) by 4 → \\( 12:16 \\). Now Smash is 16 and 32 — scale everything to agree.',
      explain: 'Links aligned: Lob:Love:Smash = \\( 17:12:16 \\); doubling gives Smash = 32 to match the last link: \\( 34:24:32:15 \\). Total \\( 105 \\) parts share \\$3150, so one part = \\$30 and Love = \\( 24 \\times 30 = \\$720 \\).',
      note: 'Systematic beats clever: align the shared term of each ratio link, merge into one long ratio, then it&rsquo;s a Lesson 4.1a tape diagram.',
      coach: ['Two links mention Love with different numbers. Rescale one link so they agree.', 'After merging three links you&rsquo;ll have one four-term ratio.', 'Sum the parts and divide into \\$3150.'],
    },
    {
      prompt: 'If \\( (2x - y) : (x + y) = 2 : 3 \\), find \\( x : y \\).',
      body: 'The Example 4-7 move again, solo. Answer as a fraction \\( x/y \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x/y =', answer: '5/4', accept: ['1.25'], width: 110 }],
      },
      hint: 'Colons are fractions: \\( \\frac{2x-y}{x+y} = \\frac23 \\). Cross-multiply.',
      explain: '\\( 3(2x - y) = 2(x + y) \\) → \\( 6x - 3y = 2x + 2y \\) → \\( 4x = 5y \\) → \\( \\frac{x}{y} = \\frac{5}{4} \\).',
      coach: ['Rewrite the colon statement as an equation of fractions.', 'Collect the \\( x \\)s on one side, \\( y \\)s on the other.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: '\\( \\dfrac{x}{y} = \\dfrac{3}{4} \\) and \\( \\dfrac{y}{z} = \\dfrac{8}{9} \\). Find \\( \\dfrac{x}{z} \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x/z =', answer: '2/3', width: 110 }],
      },
      hint: 'This time the \\( y \\)s already sit on opposite levels — multiply.',
      explain: '\\( \\frac{x}{y} \\cdot \\frac{y}{z} = \\frac{x}{z} = \\frac34 \\cdot \\frac89 = \\frac{2}{3} \\).',
      coach: ['Check where \\( y \\) lives in each fraction before choosing multiply vs divide.'],
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\dfrac{a}{b} = \\dfrac{5}{2} \\) and \\( \\dfrac{c}{b} = \\dfrac{10}{7} \\). Find \\( \\dfrac{a}{c} \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'a/c =', answer: '7/4', accept: ['1.75'], width: 110 }],
      },
      hint: 'Shared \\( b \\), same level in both — divide.',
      explain: '\\( \\frac{a}{c} = \\frac{5/2}{10/7} = \\frac52 \\cdot \\frac{7}{10} = \\frac{7}{4} \\).',
      coach: ['Both \\( b \\)s are downstairs, so dividing flips one upstairs.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Given \\( \\dfrac{a}{b} = \\dfrac{c}{d} = \\dfrac{5}{7} \\), evaluate \\( \\dfrac{3a + 2c}{3b + 2d} \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: '=', answer: '5/7', width: 110 }],
      },
      hint: 'This is the k-trick identity with weights 3 and 2.',
      explain: 'Substituting \\( a = \\frac57 b, c = \\frac57 d \\): the numerator is \\( \\frac57(3b + 2d) \\), so the fraction is \\( \\frac57 \\) — the weights never mattered.',
      coach: ['No computation needed. Which beat-2 identity is this?'],
    },
    {
      section: 'checkpoint',
      kicker: 'Starred challenge ★',
      prompt: 'Country A holds \\( c\\% \\) of the world&rsquo;s population and \\( d\\% \\) of its wealth; country B holds \\( e\\% \\) and \\( f\\% \\). Wealth is shared equally within each country. The ratio of a citizen of A&rsquo;s wealth to a citizen of B&rsquo;s is…',
      body: 'AHSME 1993. Pure symbolic proportion hygiene.',
      interaction: {
        type: 'mcq',
        options: ['\\( \\dfrac{de}{cf} \\)', '\\( \\dfrac{df}{ce} \\)', '\\( \\dfrac{cd}{ef} \\)', '\\( \\dfrac{d - c}{f - e} \\)'],
        correct: 0,
      },
      hint: 'Per-citizen wealth in A: (A&rsquo;s wealth)/(A&rsquo;s people) \\( = \\frac{d}{c} \\times \\) (world wealth/world people). Same for B; the world factors cancel in the ratio.',
      explain: 'Citizen of A: \\( \\frac{dW/100}{cP/100} = \\frac{d}{c} \\cdot \\frac{W}{P} \\); citizen of B: \\( \\frac{f}{e} \\cdot \\frac{W}{P} \\). Ratio: \\( \\frac{d/c}{f/e} = \\frac{de}{cf} \\). The world totals \\( W, P \\) were middlemen — cancel-the-middle strikes again.',
      coach: ['Write each per-citizen wealth as wealth over people.', 'Divide the two expressions; the world totals cancel.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'For distinct positive \\( x, y, z \\): \\( \\dfrac{y}{x - z} = \\dfrac{x + y}{z} = \\dfrac{x}{y} \\). Find \\( \\dfrac{x}{y} \\).',
      body: 'AHSME 1992 — the payoff problem for the whole lesson. The beat-2 identity is the intended key.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'x/y =', answer: '2', width: 110 }],
      },
      hint: 'Three EQUAL ratios. Sum of the numerators over sum of the denominators equals each of them.',
      explain: 'By the equal-ratios identity, each ratio equals \\( \\frac{y + (x+y) + x}{(x-z) + z + y} = \\frac{2x + 2y}{x + y} = 2 \\). Since \\( \\frac{x}{y} \\) is one of the three, \\( \\frac{x}{y} = 2 \\).',
      walkthrough: [
        'All three fractions equal the same number — call it \\( k \\). The beat-2 identity (with weights 1, 1, 1) says the combined fraction \\( \\frac{\\text{sum of numerators}}{\\text{sum of denominators}} \\) also equals \\( k \\).',
        'Sum the numerators: \\( y + (x + y) + x = 2x + 2y \\).',
        'Sum the denominators: \\( (x - z) + z + y = x + y \\) — the \\( z \\)s annihilate. That cancellation is the problem&rsquo;s secret design.',
        'So \\( k = \\frac{2x + 2y}{x + y} = 2 \\). And \\( \\frac{x}{y} \\) IS one of the three equal ratios, so \\( \\frac{x}{y} = 2 \\). (Consistency: \\( x = 2y, z = \\frac{3y}{2} \\) makes all three ratios 2.)',
      ],
      success: 'The identity you proved in beat 2 just dissolved an AHSME problem in three lines. That&rsquo;s what &ldquo;manipulating proportions&rdquo; buys.',
      note: 'When several ratios are declared equal, ALWAYS try summing numerators over denominators — problem writers build in a cancellation, and here the \\( z \\)s vanished on cue.',
      coach: ['Count the equal ratios: three. What identity applies to equal ratios?', 'Add all numerators; add all denominators. Watch the \\( z \\)s.', 'The combined value equals every individual ratio — including the one being asked for.'],
    },
  ],
};
