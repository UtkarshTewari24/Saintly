/* Lesson 4.4b — Percent: Interest and Mixtures.
   Interest is the percent machine on money; mixtures track the pure substance.
   Boss: AHSME 1991 symbolic composition — the chapter capstone. */

const BEAKER_SVG = `<svg viewBox="0 0 340 90" width="340" style="max-width:100%;display:block;margin:14px auto 0" role="img" aria-label="Two beakers of acid solution pouring into one combined beaker">
  <rect x="15" y="30" width="50" height="46" fill="none" stroke="#4a4a4a" stroke-width="2"/>
  <rect x="17" y="52" width="46" height="22" fill="#2a3a5c"/><rect x="17" y="65.2" width="46" height="8.8" fill="#88b0ff"/>
  <text x="40" y="22" fill="#e8e8e8" font-size="11" text-anchor="middle">2 L · 20%</text>
  <rect x="105" y="14" width="60" height="62" fill="none" stroke="#4a4a4a" stroke-width="2"/>
  <rect x="107" y="20" width="56" height="54" fill="#2a3a5c"/><rect x="107" y="47" width="56" height="27" fill="#88b0ff"/>
  <text x="135" y="10" fill="#e8e8e8" font-size="11" text-anchor="middle">8 L · 50%</text>
  <text x="205" y="50" fill="#9a9a9a" font-size="16">&#8594;</text>
  <rect x="240" y="8" width="72" height="68" fill="none" stroke="#4a4a4a" stroke-width="2"/>
  <rect x="242" y="14" width="68" height="60" fill="#2a3a5c"/><rect x="242" y="47.6" width="68" height="26.4" fill="#88b0ff"/>
  <text x="276" y="88" fill="#88b0ff" font-size="11" text-anchor="middle">10 L · ?%</text>
</svg>`;

export default {
  id: 'lesson-4-6',
  title: 'Percent: Interest and Mixtures',
  kicker: 'Proportions',
  topicIndex: 3,
  lessonIndex: 5,
  next: 'interactive-lesson.html?chapter=5&lesson=1',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'You borrow \\$2000 at 8% yearly interest. What do you owe after one year?',
      body: 'Interest is nothing new — it&rsquo;s last lesson&rsquo;s machine pointed at money.',
      interaction: {
        type: 'fillin',
        fields: [{ label: '$', answer: '2160', width: 110 }],
      },
      hint: 'One multiplier: \\( \\times 1.08 \\).',
      explain: '\\( 2000 \\times 1.08 = \\$2160 \\). Owing principal-plus-8% IS a +8% percent change — one block through the percent machine.',
      coach: ['+8% as a multiplier is what?'],
    },
    {
      prompt: '\\$4000 invested at 5% per year, compounding. Step through the years.',
      body: 'The display stays in factored form on purpose — watch the pattern that multiplying out would bury.',
      interaction: {
        type: 'slider',
        min: 0, max: 6, step: 1, value: 0, label: 'years', mustExplore: 4,
        render(n) {
          const value = (4000 * 1.05 ** n).toFixed(2);
          return {
            main: `\\( 4000 \\times (1.05)^{${n}} = \\$${value} \\)`,
            sub: n === 0 ? 'Year zero: nothing has happened yet.' : `Each year multiplies by 1.05 once more — ${n} year${n > 1 ? 's' : ''}, ${n} factor${n > 1 ? 's' : ''}. Growth rides on the GROWN amount, not the original.`,
          };
        },
      },
      success: 'After \\( n \\) years: \\( P(1+r)^n \\). At year 4: \\$4862.03.',
      note: 'Resist multiplying out early — \\( P(1.05)^n \\) shows the structure, and money rounds to 2 decimals <em>once, at the end</em>. Simple-interest thinking (adding 5% of the original each year) gives \\$4800 at year 4 and misses the \\$62.03 the interest itself earned.',
      coach: ['Compare year 4 against 4000 + 4×200. Where does the difference come from?'],
    },
    {
      prompt: 'The US lends France \\$1.5 million and wants \\$2 million back in a year. What interest rate is that?',
      body: 'Answer as a percent — fraction form welcome.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'r (%)', answer: '100/3', accept: ['33 1/3', '33.33'], width: 120 }],
      },
      hint: 'Rate = gain over ORIGINAL: \\( \\frac{0.5}{1.5} \\).',
      explain: '\\( \\frac{0.5}{1.5} = \\frac13 = 33\\tfrac13\\% \\) — the conversion-triangle repeater showing up in the wild, as promised.',
      coach: ['Interest rate is a percent change; percent change divides by the original.', 'You&rsquo;ve met the fraction 1/3 as a percent before.'],
    },
    {
      prompt: 'A loan charges 2% per <em>quarter</em>. The effective annual rate is…',
      body: 'Commit before computing.',
      interaction: {
        type: 'mcq',
        options: ['about 8.24%', 'exactly 8%', 'exactly 2%', 'exactly 16%'],
        correct: 0,
      },
      hint: 'Four quarters means four multipliers: \\( (1.02)^4 \\).',
      explain: '\\( (1.02)^4 = 1.08243\\ldots \\) — about <b>8.24%</b>, not 8%. Percent changes compose by multiplication, and compounding always beats adding, by exactly the interest-on-interest. The composition trap from last lesson, now with a price tag.',
      note: 'Per-period rate \\( r \\), \\( n \\) periods: effective rate \\( = (1+r)^n - 1 \\). It is never simply \\( nr \\).',
      coach: ['Each quarter is one ×1.02 block through the machine.', 'Chain four of them.'],
    },
    {
      prompt: 'Mix 2 L of 20% acid with 8 L of 50% acid. The result is what percent acid?',
      body: 'The rule that decides every mixture problem: <b>track the acid, not the percents.</b>' + BEAKER_SVG,
      interaction: {
        type: 'fillin',
        fields: [{ label: '%', answer: '44', width: 100 }],
      },
      hint: 'Pure acid in each: \\( 0.2 \\times 2 \\) and \\( 0.5 \\times 8 \\). Concentration = total acid / total volume.',
      explain: 'Acid: \\( 0.4 + 4 = 4.4 \\) L in \\( 10 \\) L total: \\( 44\\% \\). Averaging the percents \\( \\left(\\frac{20+50}{2} = 35\\right) \\) ignores that 8 of the 10 liters came from the stronger batch — percents never add or average; <em>amounts</em> do.',
      note: 'Concentration \\( = \\frac{\\text{amount of pure stuff}}{\\text{total volume}} \\). Convert every statement into pure-stuff amounts first; the percents are just wrappers.',
      coach: ['How many liters of actual acid does each beaker hold?', 'Add acid, add volume, divide.'],
    },
    {
      prompt: '\\$4500 is split between accounts paying 4% and 6%, and the two returns are <em>equal</em>. What overall rate did the \\$4500 earn?',
      body: 'Beaker thinking with dollars: the balance of the split is forced by the equal returns.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'overall rate (%)', answer: '4.8', accept: ['24/5'], width: 110 }],
      },
      hint: 'Let \\( x \\) sit at 4%: \\( 0.04x = 0.06(4500 - x) \\) pins the split. Then total return ÷ 4500.',
      explain: '\\( 0.04x = 270 - 0.06x \\) gives \\( x = 2700 \\) at 4% and 1800 at 6% — each returning \\$108. Total \\$216 on \\$4500: \\( \\frac{216}{4500} = 4.8\\% \\). Note it&rsquo;s below the naive 5% midpoint, because more money sat at the lower rate.',
      coach: ['&ldquo;Equal returns&rdquo; is an equation — write it.', 'The blended rate is total dollars earned over total dollars invested.'],
    },
    {
      prompt: 'You have 80 ml of 20% acid. Remove some solution, replace it with PURE acid, and land at 40%. How many ml were swapped?',
      body: 'The subtle move: what you remove is <em>solution</em> — it carries acid out with it.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'ml', answer: '20', width: 100 }],
      },
      hint: 'After removing \\( x \\) ml of solution, \\( 0.2(80 - x) \\) ml of acid remains; the refill adds \\( x \\) ml of pure acid. Volume stays 80.',
      explain: '\\( 0.2(80 - x) + x = 0.4 \\times 80 = 32 \\) → \\( 16 + 0.8x = 32 \\) → \\( x = 20 \\) ml. Forgetting that the removed 20 ml took \\( 4 \\) ml of acid with it gives the wrong \\( x = 16 \\) — the removal changes the acid ledger, not just the volume.',
      note: 'Replace-and-refill bookkeeping: removal scales the acid DOWN proportionally, the refill adds its own acid, and total volume returns to the start. Track the acid through all three steps.',
      coach: ['How much acid leaves with the removed x ml?', 'The final beaker must hold 32 ml of acid.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: '\\$1000 at 6% annual compound interest, for 3 years. Final balance?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '$', answer: '1191.02', accept: ['1191.016'], width: 120 }],
      },
      hint: '\\( 1000(1.06)^3 \\), rounded at the end.',
      explain: '\\( 1000 \\times 1.191016 = \\$1191.02 \\) — the extra \\$11.02 over simple interest&rsquo;s \\$1180 is interest on interest.',
      coach: ['Three multipliers, then one rounding.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Mix 3 L of 10% acid with 1 L of 50% acid. Concentration?',
      interaction: {
        type: 'fillin',
        fields: [{ label: '%', answer: '20', width: 100 }],
      },
      hint: 'Acid amounts: 0.3 and 0.5.',
      explain: '\\( \\frac{0.3 + 0.5}{4} = \\frac{0.8}{4} = 20\\% \\) — nowhere near the unweighted 30%, since three-quarters of the mix is weak.',
      coach: ['Track the acid.'],
    },
    {
      section: 'checkpoint',
      prompt: 'Half the Gummy Bears are red, a third are green, and the remaining 15 are yellow. How many Gummy Bears?',
      body: 'A tape diagram in candy form.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'total', answer: '90', width: 100 }],
      },
      hint: 'What fraction is left after \\( \\frac12 + \\frac13 \\)?',
      explain: '\\( 1 - \\frac12 - \\frac13 = \\frac16 \\), and that sixth is 15 bears: total \\( 15 \\times 6 = 90 \\).',
      coach: ['Common denominator for the known fractions.', 'The leftover fraction IS the 15.'],
    },
    {
      section: 'checkpoint',
      prompt: 'In an election: \\( 33\\tfrac13\\% \\) vote for Ann, \\( \\tfrac{9}{20} \\) for Bob, \\( \\tfrac{2}{15} \\) for Carl, and the remaining 75 voters abstain. How many voters in all?',
      body: 'Mixed representations under pressure — the conversion triangle earns its keep.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'voters', answer: '900', width: 100 }],
      },
      hint: '\\( 33\\tfrac13\\% \\) is exactly \\( \\frac13 \\). Common denominator 60.',
      explain: '\\( \\frac13 + \\frac{9}{20} + \\frac{2}{15} = \\frac{20 + 27 + 8}{60} = \\frac{55}{60} = \\frac{11}{12} \\). The abstaining \\( \\frac{1}{12} \\) is 75 people: total \\( 900 \\).',
      coach: ['Convert everything to fractions first — the percent is a disguised third.', 'Sixty is a friendly common denominator.', 'Whatever fraction remains belongs to the 75.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'A population increases by \\( i\\% \\), then by \\( j\\% \\). The total percent increase is…',
      body: 'AHSME 1991 — the composition trap resolved symbolically, once and for all. The chapter&rsquo;s capstone.',
      interaction: {
        type: 'mcq',
        options: [
          '\\( \\left(i + j + \\dfrac{ij}{100}\\right)\\% \\)',
          '\\( (i + j)\\% \\)',
          '\\( \\dfrac{ij}{100}\\% \\)',
          '\\( (i + j + ij)\\% \\)',
        ],
        correct: 0,
      },
      hint: 'Multipliers: \\( \\left(1 + \\frac{i}{100}\\right)\\left(1 + \\frac{j}{100}\\right) \\). Expand, then convert back to a percent change.',
      explain: 'The composed multiplier expands to \\( 1 + \\frac{i}{100} + \\frac{j}{100} + \\frac{ij}{10000} \\) — a change of \\( \\frac{i + j + ij/100}{100} \\), i.e. \\( \\left(i + j + \\frac{ij}{100}\\right)\\% \\). The naive \\( i + j \\) misses the cross term \\( \\frac{ij}{100} \\): growth acting on growth.',
      walkthrough: [
        'Write each increase as a multiplier: \\( \\times\\left(1 + \\frac{i}{100}\\right) \\), then \\( \\times\\left(1 + \\frac{j}{100}\\right) \\).',
        'Multiply them out: \\( 1 + \\frac{i}{100} + \\frac{j}{100} + \\frac{ij}{10000} \\).',
        'Subtract the 1 (the original) and re-clothe as a percent: \\( \\frac{i}{100} + \\frac{j}{100} + \\frac{ij}{10000} = \\frac{1}{100}\\left(i + j + \\frac{ij}{100}\\right) \\).',
        'Total increase: \\( \\left(i + j + \\frac{ij}{100}\\right)\\% \\). Sanity check with \\( i = j = 25 \\): \\( 25 + 25 + 6.25 = 56.25\\% \\), and indeed \\( 1.25^2 = 1.5625 \\) ✓. Every composition trap in the last two lessons was this formula with numbers plugged in.',
      ],
      success: 'Chapter 4 complete: constant quotients, constant products, the k-trick, factor-of-1 chains, and the percent machine — and its final law, \\( i + j + \\frac{ij}{100} \\), now proved rather than memorized.',
      note: 'The cross term \\( \\frac{ij}{100} \\) is why percents never add: each change acts on what the previous one built. Positive changes overshoot \\( i+j \\); a rise-then-fall undershoots. The formula returns when this book reaches exponential growth.',
      coach: ['Convert both percent changes to multipliers first.', 'FOIL the two multipliers.', 'The percent increase is the composed multiplier minus 1, times 100.'],
    },
  ],
};
