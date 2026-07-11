/* Lesson 1.3 — Simplifying Radical Expressions. */

export default {
  id: 'lesson-1-3',
  title: 'Simplifying Radical Expressions',
  kicker: 'Exponents and Logarithms',
  topicIndex: 0,
  lessonIndex: 2,
  next: 'interactive-lesson.html?chapter=1&lesson=4',
  notes: 'exponents.html',
  beats: [

    /* 1 — hook */
    {
      prompt: '\\( \\sqrt{8} \\) — done, or simplifiable?',
      body: 'A radical is “simplified” when nothing with a perfect-power factor is left inside.',
      interaction: {
        type: 'mcq',
        options: [
          'Done — 8 isn’t a perfect square, so \\( \\sqrt{8} \\) can’t be touched',
          'Simplifiable — \\( 8 = 4 \\cdot 2 \\), so \\( \\sqrt{8} = 2\\sqrt{2} \\)',
          'Simplifiable — \\( \\sqrt{8} = 4\\sqrt{2} \\)',
          '\\( \\sqrt{8} = 2.83 \\), radicals are for decimals'
        ],
        correct: 1
      },
      hint: '8 doesn’t need to BE a perfect square. Does it <i>contain</i> one as a factor?',
      explain: '\\( \\sqrt{8} = \\sqrt{4 \\cdot 2} = \\sqrt{4}\\,\\sqrt{2} = 2\\sqrt{2} \\). Why bother? Compare \\( \\frac{\\sqrt 8}{2} \\) (ugly, opaque) with \\( \\frac{2\\sqrt 2}{2} = \\sqrt 2 \\) (instant). Simplified radicals cancel, compare, and combine; raw ones don’t.',
      success: 'Perfect-square factors escape the radical.',
      note: '\\( \\sqrt{ab} = \\sqrt{a}\\sqrt{b} \\). Any perfect-square <i>factor</i> inside a square root can walk out — as its square root.',
      coach: ['Factor 8 into a perfect square times something.', '\\( \\sqrt{4 \\cdot 2} \\) splits into two radicals. One of them is an integer.']
    },

    /* 2 — the algorithm */
    {
      prompt: 'The algorithm that never fails: simplify \\( \\sqrt{96} \\).',
      body: 'Put the steps in order. This is the rigorous method — inspection is faster once you’re experienced, but this one works on anything.',
      interaction: {
        type: 'order',
        items: [
          'Prime factorize: \\( 96 = 2^{5} \\cdot 3 \\)',
          'Split off the biggest even power: \\( 2^{5} \\cdot 3 = 2^{4} \\cdot (2 \\cdot 3) \\)',
          'Extract it: \\( \\sqrt{2^{4}} = 2^{2} = 4 \\)',
          'Recombine what’s left inside: \\( \\sqrt{96} = 4\\sqrt{6} \\)'
        ]
      },
      hint: 'You can’t split powers you haven’t found yet — the factorization comes first.',
      explain: 'Factor → split even powers → extract → recombine. \\( \\sqrt{96} = \\sqrt{2^4}\\sqrt{2 \\cdot 3} = 4\\sqrt6 \\). The number under the radical (the <b>radicand</b>) ends with no perfect-square factor, so you know you’re done.',
      success: 'That four-step loop simplifies any radical ever printed.',
      note: 'The <b>radicand</b> is the number under the radical. Simplified means: no perfect-power factor left in the radicand. \\( 2\\sqrt{24} \\) is NOT done — \\( 24 = 4 \\cdot 6 \\) still hides a square.',
      coach: ['First step of any radical problem: prime factorize.', 'Even exponents are the ones a square root can digest.', 'What’s \\( \\sqrt{2^4} \\)?']
    },

    /* 3 — guided practice */
    {
      prompt: 'Your turn, bigger number: \\( \\sqrt{1440} = a\\sqrt{b} \\).',
      body: 'Run the algorithm. Two boxes: the coefficient outside and the radicand left inside.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a (outside)', placeholder: '?', answer: '12', width: 120 },
          { label: 'b (inside)', placeholder: '?', answer: '10', width: 120 }
        ]
      },
      hint: 'Prime factorize: \\( 1440 = 2^{5} \\cdot 3^{2} \\cdot 5 \\). Now collect the even powers.',
      explain: '\\( 1440 = 2^5 \\cdot 3^2 \\cdot 5 = (2^4 \\cdot 3^2) \\cdot (2 \\cdot 5) \\). Extract \\( \\sqrt{2^4 \\cdot 3^2} = 4 \\cdot 3 = 12 \\), leaving \\( \\sqrt{1440} = 12\\sqrt{10} \\). (Spot-check: \\( 144 \\cdot 10 = 1440 \\).)',
      success: '\\( 12\\sqrt{10} \\) — and 10 is square-free, so it’s fully done.',
      coach: ['Divide by 10 first: \\( 1440 = 144 \\cdot 10 \\). Recognize 144?', 'The largest perfect-square factor of 1440 is 144.', '\\( \\sqrt{144 \\cdot 10} = 12\\sqrt{10} \\).']
    },

    /* 4 — inspection mode */
    {
      prompt: 'Inspection mode: \\( \\sqrt{50} = a\\sqrt{b} \\), fast.',
      body: 'No factor trees — just <i>spot</i> the perfect square hiding in 50. Inspection is quicker, but it fails silently if you spot a small square instead of the biggest one. The algorithm never fails.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '5', width: 110 },
          { label: 'b', placeholder: '?', answer: '2', width: 110 }
        ]
      },
      hint: 'Which perfect square divides 50? (There’s a big one.)',
      explain: '\\( 50 = 25 \\cdot 2 \\), so \\( \\sqrt{50} = 5\\sqrt{2} \\).',
      success: 'Seen it, split it, done.',
      coach: ['Run through the squares: 4? 9? 16? 25?', '\\( 50 = 25 \\cdot 2 \\).']
    },

    /* 5 — the sum trap */
    {
      prompt: 'One line of this “solution” is wrong. Tap it.',
      body: 'A student simplifies \\( \\sqrt{9 + 16} \\):',
      interaction: {
        type: 'errorhunt',
        lines: [
          { text: '\\( \\sqrt{9 + 16} \\) has two perfect squares inside' },
          { text: '\\( \\sqrt{9 + 16} = \\sqrt{9} + \\sqrt{16} \\)', wrong: true },
          { text: '\\( \\sqrt{9} = 3 \\) and \\( \\sqrt{16} = 4 \\)' },
          { text: 'So the answer is \\( 3 + 4 = 7 \\)' }
        ]
      },
      hint: 'Just compute \\( 9 + 16 \\) and take the root directly. Do you get 7?',
      explain: '\\( \\sqrt{9+16} = \\sqrt{25} = 5 \\), not 7. The split rule \\( \\sqrt{ab} = \\sqrt a \\sqrt b \\) works for <b>products only</b>. Radicals never distribute over \\( + \\) or \\( - \\).',
      success: 'Radicals split over ×, never over +.',
      note: '\\( \\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b} \\). Same warning as the exponent rules: nothing in this chapter reaches across a plus sign.',
      coach: ['Evaluate the inside first: \\( 9 + 16 = 25 \\).', 'Is \\( \\sqrt{25} \\) equal to 7?']
    },

    /* 6 — higher roots: reduce the exponent first */
    {
      prompt: 'One line of this “solution” is wrong. Tap it.',
      body: 'A student is asked to simplify \\( \\sqrt[4]{9} \\):',
      interaction: {
        type: 'errorhunt',
        lines: [
          { text: '\\( 9 = 3^{2} \\)' },
          { text: 'So \\( \\sqrt[4]{9} = 3^{2/4} \\)' },
          { text: '\\( \\tfrac{2}{4} \\) can’t be touched, so \\( \\sqrt[4]{9} \\) is already simplified', wrong: true },
          { text: 'Final answer: \\( \\sqrt[4]{9} \\)' }
        ]
      },
      hint: 'Stare at the fraction \\( \\frac24 \\). Is it in lowest terms?',
      explain: '\\( \\frac24 = \\frac12 \\), so \\( \\sqrt[4]{9} = 3^{2/4} = 3^{1/2} = \\sqrt{3} \\). A fourth root collapsed into a square root. <b>Reduce the exponent fraction first</b> — skipping that step hides simplifications completely.',
      success: 'Reduce the fraction, shrink the root.',
      note: 'With higher roots, write everything as \\( p^{m/n} \\) and reduce \\( \\frac{m}{n} \\) before extracting. \\( \\sqrt[6]{6912} = \\sqrt[6]{2^{6} \\cdot 108} = 2\\sqrt[6]{108} \\) — found by hunting the 6th powers, exponent arithmetic first.',
      coach: ['Rewrite \\( \\sqrt[4]{9} \\) as a power of 3.', 'Exponent \\( \\frac24 \\): reduce it.', '\\( 3^{1/2} \\) has a much more familiar name.']
    },

    /* 7 — fractions under radicals */
    {
      prompt: 'Simplify \\( \\sqrt[3]{\\dfrac{144}{125}} \\). Put the steps in order.',
      interaction: {
        type: 'order',
        items: [
          'Check the fraction: \\( \\tfrac{144}{125} \\) is already in lowest terms',
          'Split top and bottom: \\( \\dfrac{\\sqrt[3]{144}}{\\sqrt[3]{125}} \\)',
          'Bottom is a perfect cube: \\( \\sqrt[3]{125} = 5 \\)',
          'Top: \\( 144 = 2^{4} \\cdot 3^{2} = 2^{3} \\cdot 18 \\), so \\( \\sqrt[3]{144} = 2\\sqrt[3]{18} \\)',
          'Answer: \\( \\dfrac{2\\sqrt[3]{18}}{5} \\)'
        ]
      },
      hint: 'Fraction hygiene first — reduce it — then handle numerator and denominator as two separate radical problems.',
      explain: 'Reduce the fraction, split the radical over it, then simplify top and bottom independently: \\( \\sqrt[3]{144/125} = \\frac{2\\sqrt[3]{18}}{5} \\). For cube roots you hunt <i>cubed</i> factors — here \\( 2^3 \\) inside 144.',
      success: 'Fraction first, then top and bottom separately.',
      note: 'For \\( \\sqrt[n]{\\frac{a}{b}} \\): simplify the fraction, then split into \\( \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} \\) and simplify each. (A radical left in the denominator gets cleaned up next lesson.)',
      coach: ['Is \\( \\frac{144}{125} \\) reducible? Check before anything else.', '125 should look familiar as a cube.', 'For the top: which factor of \\( 2^4 \\cdot 3^2 \\) is a perfect cube?']
    },

    /* 8 — spot the unfinished radical */
    {
      prompt: 'A classmate stops at \\( \\sqrt{96} = 2\\sqrt{24} \\). Finished?',
      interaction: {
        type: 'mcq',
        options: [
          'Yes — 24 isn’t a perfect square, so it’s done',
          'No — \\( 24 = 4 \\cdot 6 \\) still hides a square: keep going to \\( 4\\sqrt{6} \\)',
          'No — the true answer is \\( 8\\sqrt{12} \\)',
          'Yes — any answer with a radical in it counts as simplified'
        ],
        correct: 1
      },
      hint: 'The stopping condition isn’t “the radicand isn’t a perfect square”. What is it?',
      explain: '\\( 2\\sqrt{24} = 2\\sqrt{4 \\cdot 6} = 4\\sqrt6 \\). Stopping early is the silent failure of inspection: you extracted <i>a</i> square (4 from 96) but not the <i>largest</i> (16). The algorithm’s prime factorization makes early stops impossible.',
      success: 'Simplified means square-free inside — nothing less.',
      coach: ['Factor 24. Any squares in there?', 'Fully run, the algorithm gives \\( 96 = 2^5 \\cdot 3 \\to 4\\sqrt6 \\).']
    },

    /* ---------- checkpoint ---------- */
    {
      section: 'checkpoint',
      prompt: '\\( \\sqrt{27} = a\\sqrt{b} \\)',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '3', width: 110 },
          { label: 'b', placeholder: '?', answer: '3', width: 110 }
        ]
      },
      hint: '\\( 27 = 9 \\cdot 3 \\).',
      explain: '\\( \\sqrt{27} = \\sqrt{9}\\sqrt{3} = 3\\sqrt{3} \\).',
      coach: ['Largest perfect square dividing 27?']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\sqrt{128} = a\\sqrt{b} \\)',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '8', width: 110 },
          { label: 'b', placeholder: '?', answer: '2', width: 110 }
        ]
      },
      hint: '\\( 128 = 2^{7} = 2^{6} \\cdot 2 \\).',
      explain: '\\( \\sqrt{128} = \\sqrt{2^6}\\sqrt{2} = 2^3\\sqrt2 = 8\\sqrt{2} \\).',
      coach: ['Write 128 as a power of 2, then split off the biggest even power.']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\sqrt{200} = a\\sqrt{b} \\)',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '10', width: 110 },
          { label: 'b', placeholder: '?', answer: '2', width: 110 }
        ]
      },
      hint: '\\( 200 = 100 \\cdot 2 \\).',
      explain: '\\( \\sqrt{200} = \\sqrt{100}\\sqrt2 = 10\\sqrt{2} \\).',
      coach: ['Spot the power of ten hiding in 200.']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\sqrt[3]{250} = a\\sqrt[3]{b} \\)',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '5', width: 110 },
          { label: 'b', placeholder: '?', answer: '2', width: 110 }
        ]
      },
      hint: 'Cube root — hunt for a perfect <i>cube</i> factor of 250.',
      explain: '\\( 250 = 125 \\cdot 2 \\) and \\( 125 = 5^3 \\), so \\( \\sqrt[3]{250} = 5\\sqrt[3]{2} \\).',
      coach: ['List small cubes: 8, 27, 64, 125…', 'Which one divides 250?']
    },
    {
      section: 'checkpoint',
      prompt: 'Which is the fully simplified form of \\( \\sqrt{864} \\)?',
      interaction: {
        type: 'mcq',
        options: ['\\( 2\\sqrt{216} \\)', '\\( 6\\sqrt{24} \\)', '\\( 12\\sqrt{6} \\)', '\\( 4\\sqrt{54} \\)'],
        correct: 2, cols: true
      },
      hint: 'Three of these still have a perfect square inside the radical. \\( 864 = 2^{5} \\cdot 3^{3} \\).',
      explain: '\\( 864 = 2^5 \\cdot 3^3 = (2^4 \\cdot 3^2)(2 \\cdot 3) \\), so \\( \\sqrt{864} = 4 \\cdot 3 \\sqrt{6} = 12\\sqrt6 \\). The other options are correct <i>values</i> but unfinished — 216, 24, and 54 all still contain squares.',
      coach: ['All four options equal \\( \\sqrt{864} \\) — the question is which radicand is square-free.', 'Check each inside number for square factors.']
    },

    /* ---------- boss ---------- */
    {
      section: 'boss',
      prompt: 'Simplify \\( \\sqrt{9095625} = a\\sqrt{b} \\).',
      body: 'Brute force is hopeless — no calculator lists this. The algorithm doesn’t care how big the number is.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a (outside)', placeholder: '?', answer: '525', width: 130 },
          { label: 'b (inside)', placeholder: '?', answer: '33', width: 130 }
        ]
      },
      hint: 'It ends in 25 — divide by 25 repeatedly. Then digit-sum for 3s. Keep a tally of every prime you pull out.',
      explain: '\\( 9095625 = 3^{3} \\cdot 5^{4} \\cdot 7^{2} \\cdot 11 \\). Even powers walk out: \\( \\sqrt{3^2 \\cdot 5^4 \\cdot 7^2} = 3 \\cdot 25 \\cdot 7 = 525 \\), leaving \\( 3 \\cdot 11 = 33 \\) inside. \\( \\sqrt{9095625} = 525\\sqrt{33} \\).',
      walkthrough: [
        'Ends in 25 → divisible by 25: \\( 9095625 = 25 \\cdot 363825 \\). Again: \\( 363825 = 25 \\cdot 14553 \\). So far \\( 5^{4} \\).',
        'Digit sum of 14553 is 18 → divisible by 9: \\( 14553 = 3 \\cdot 4851 = 3 \\cdot 3 \\cdot 1617 = 3^{3} \\cdot 539 \\).',
        '\\( 539 = 7 \\cdot 77 = 7^{2} \\cdot 11 \\). Full factorization: \\( 9095625 = 3^{3} \\cdot 5^{4} \\cdot 7^{2} \\cdot 11 \\).',
        'Split even powers: \\( (3^{2} \\cdot 5^{4} \\cdot 7^{2}) \\cdot (3 \\cdot 11) \\).',
        'Extract: \\( \\sqrt{3^2 \\cdot 5^4 \\cdot 7^2} = 3 \\cdot 25 \\cdot 7 = 525 \\). Answer: \\( 525\\sqrt{33} \\).'
      ],
      success: 'A seven-digit radicand, tamed by divisibility rules and a tally sheet.',
      coach: [
        'Don’t look for the whole answer — just find ONE prime factor to start.',
        'Numbers ending in 25 are divisible by 25. Peel the 5s first.',
        'After the 5s: digit sums find the 3s, and what remains is small enough to factor by hand.'
      ]
    }
  ]
};
