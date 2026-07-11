/* Lesson 1.5 — Logarithms. */

export default {
  id: 'lesson-1-5',
  title: 'Logarithms',
  kicker: 'Exponents and Logarithms',
  topicIndex: 0,
  lessonIndex: 4,
  next: 'interactive-lesson.html?chapter=2&lesson=1',
  notes: 'exponents.html',
  beats: [

    /* 1 — hook: a log is a question */
    {
      prompt: '\\( \\log_2 8 \\) asks exactly one question: “2 to what power gives 8?”',
      body: 'That’s the entire definition. Answer the question.',
      interaction: {
        type: 'mcq',
        options: ['\\( 3 \\)', '\\( 4 \\)', '\\( 16 \\)', '\\( 6 \\)'],
        correct: 0, cols: true
      },
      hint: 'Not “8 divided by 2”. Count: \\( 2, 4, 8 \\) — how many doublings?',
      explain: '\\( 2^3 = 8 \\), so \\( \\log_2 8 = 3 \\). The distractor 4 is the classic slip — reading it as \\( 8 \\div 2 \\). A log is never a division; it’s an exponent hunt.',
      success: 'A log is a question about exponents. Nothing more.',
      coach: ['Rewrite the question: \\( 2^{\\,?} = 8 \\).', 'Keep doubling 2 until you hit 8, and count the steps.']
    },

    /* 2 — same question, bigger */
    {
      prompt: '“3 to what power gives 243?” \\( \\quad \\log_3 243 = \\; ? \\)',
      interaction: { type: 'fillin', fields: [{ label: 'power', placeholder: '?', answer: '5' }] },
      hint: 'Climb: \\( 3, 9, 27, 81, 243 \\). Count the steps.',
      explain: '\\( 3^5 = 243 \\), so \\( \\log_3 243 = 5 \\).',
      coach: ['List powers of 3 until you land on 243.']
    },

    /* 3 — and once more */
    {
      prompt: '“10 to what power gives 1000?” \\( \\quad \\log_{10} 1000 = \\; ? \\)',
      interaction: { type: 'fillin', fields: [{ label: 'power', placeholder: '?', answer: '3' }] },
      hint: 'Count the zeros.',
      explain: '\\( 10^3 = 1000 \\). For powers of 10, the log literally counts zeros — that’s why base 10 is beloved.',
      success: 'Three zeros, power of 3.',
      coach: ['\\( 1000 = 10 \\cdot 10 \\cdot 10 \\).']
    },

    /* 4 — translation machine */
    {
      prompt: 'Match each exponential statement with its logarithmic twin.',
      body: 'Same fact, two grammars. The base stays the base; the exponent becomes the log’s <i>answer</i>; the output becomes the log’s <i>argument</i>.',
      interaction: {
        type: 'match',
        pairs: [
          ['\\( 3^{3} = 27 \\)', '\\( \\log_3 27 = 3 \\)'],
          ['\\( 16^{1/4} = 2 \\)', '\\( \\log_{16} 2 = \\tfrac14 \\)'],
          ['\\( x^{2} = y \\)', '\\( \\log_x y = 2 \\)'],
          ['\\( 5^{0} = 1 \\)', '\\( \\log_5 1 = 0 \\)']
        ]
      },
      hint: '\\( b^{e} = a \\;\\Leftrightarrow\\; \\log_b a = e \\). Find the base first — it’s the anchor.',
      success: 'Fluent translation is 90% of logarithm problems.',
      note: '\\( \\log_b a = x \\) <b>means</b> \\( b^x = a \\). When a log confuses you, translate it to exponential form — the confusion usually evaporates.'
    },

    /* 5 — evaluation ladder */
    {
      prompt: 'Two rungs: \\( \\log_5 625 = a \\qquad \\log_2 \\tfrac{1}{2} = b \\)',
      body: 'The second one’s answer is negative — and that is completely fine.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'a', placeholder: '?', answer: '4', width: 110 },
          { label: 'b', placeholder: '?', answer: '-1', width: 110 }
        ]
      },
      hint: '\\( 5^{\\,?} = 625 \\) and \\( 2^{\\,?} = \\frac12 \\). Remember what negative exponents do.',
      explain: '\\( 5^4 = 625 \\) so \\( a = 4 \\). And \\( 2^{-1} = \\frac12 \\), so \\( \\log_2 \\frac12 = -1 \\). A log’s <i>output</i> can be any real number — negative included.',
      success: 'Negative outputs are business as usual.',
      coach: ['\\( 625 = 25^2 = 5^4 \\).', 'Lesson 1.1: which exponent sends things downstairs?']
    },

    /* 6 — deeper negative */
    {
      prompt: '\\( \\log_3 \\dfrac{1}{243} = \\; ? \\)',
      interaction: { type: 'fillin', fields: [{ label: 'power', placeholder: '?', answer: '-5' }] },
      hint: 'You already know \\( \\log_3 243 = 5 \\). What does the reciprocal do to the exponent?',
      explain: '\\( 3^{-5} = \\frac{1}{3^5} = \\frac{1}{243} \\), so the answer is \\( -5 \\). Reciprocal argument → negated log.',
      coach: ['\\( \\frac{1}{243} = 243^{-1} = (3^5)^{-1} \\).']
    },

    /* 7 — fractional output */
    {
      prompt: '\\( \\log_8 2 = \\; ? \\)',
      body: 'The answer isn’t a whole number. Write 8 as a power of 2 and solve \\( 8^x = 2 \\).',
      interaction: { type: 'fillin', fields: [{ label: 'power', placeholder: '?', answer: '1/3', accept: ['0.333333333'], width: 130 }] },
      hint: '\\( 8 = 2^3 \\), so \\( 8^x = 2^{3x} \\). You need \\( 2^{3x} = 2^{1} \\).',
      explain: '\\( 8^x = (2^3)^x = 2^{3x} = 2^1 \\) forces \\( 3x = 1 \\), so \\( x = \\frac13 \\). (Not 4 — dividing \\( 8 \\div 2 \\) is the trap from beat 1 again.) Fractional log outputs are just fractional exponents, lesson 1.2’s old friends.',
      success: 'Cube root of 8 is 2, so the log is \\( \\frac13 \\).',
      coach: ['Express both sides with base 2.', 'Match the exponents: \\( 3x = 1 \\).']
    },

    /* 8 — domain rule */
    {
      prompt: '\\( \\log_3(-3) = \\; ? \\)',
      interaction: {
        type: 'mcq',
        options: ['\\( -1 \\)', '\\( 1 \\)', 'Undefined — no real answer exists', '\\( -27 \\)'],
        correct: 2
      },
      hint: 'Translate: \\( 3^{\\,?} = -3 \\). Look at the sign of \\( 3^x \\) for ANY real \\( x \\).',
      explain: '\\( 3^x \\) is positive for every real \\( x \\) — big powers are huge and positive, negative powers are tiny and positive. Nothing gives \\( -3 \\). So \\( \\log_3(-3) \\) is undefined: <b>the argument of a log must be positive</b>.',
      success: 'Powers of 3 never go negative, so the question has no answer.',
      coach: ['Try candidates: \\( 3^1, 3^{-1}, 3^0 \\). Any negatives?', 'Can an exponential with positive base ever output a negative?']
    },

    /* 9 — don't confuse the two */
    {
      prompt: 'But \\( \\log_2 0.5 = \\; ? \\)',
      body: 'Careful — this looks like the last beat, but it isn’t.',
      interaction: {
        type: 'mcq',
        options: ['\\( -1 \\)', 'Undefined, same as before', '\\( \\dfrac12 \\)', '\\( 1 \\)'],
        correct: 0, cols: true
      },
      hint: '0.5 is a positive number. The question \\( 2^{\\,?} = \\frac12 \\) has a perfectly good answer.',
      explain: '\\( 2^{-1} = 0.5 \\), so \\( \\log_2 0.5 = -1 \\). These two beats are the pair everyone confuses: the <i>argument</i> can’t be negative, but the <i>result</i> absolutely can. Negative in ≠ negative out.',
      success: 'Argument positive, result negative — both rules satisfied.',
      note: '<b>Domain vs range:</b> \\( \\log_b a \\) needs \\( a > 0 \\) (and base \\( b > 0, b \\neq 1 \\)), but its OUTPUT ranges over all reals. “Logs can’t be negative” is a myth — log <i>arguments</i> can’t be.',
      coach: ['Is \\( 0.5 \\) positive? Then the log exists.', 'Which exponent on 2 produces \\( \\frac12 \\)?']
    },

    /* 10 — the bare log convention */
    {
      prompt: 'No base written: \\( \\log 100 = \\; ? \\)',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '2' }] },
      hint: 'A bare \\( \\log \\) means base 10 by convention.',
      explain: '\\( \\log 100 = \\log_{10} 100 = 2 \\), since \\( 10^2 = 100 \\). (In higher math \\( \\ln \\) is base \\( e \\); on contests, bare \\( \\log \\) is base 10.)',
      coach: ['Assume base 10. Then count zeros.']
    },

    /* 11 — the big picture: multiplication becomes addition */
    {
      prompt: 'Why did anyone invent this? Drag and watch.',
      body: 'Before calculators, multiplying 8-digit numbers took ages. John Napier noticed: on the powers-of-10 ladder, <b>multiplying values = adding rungs</b>.',
      interaction: {
        type: 'slider', min: 1, max: 6, value: 1, label: 'k',
        render(k) {
          const a = 10 ** k, b = 10 ** (7 - k);
          return {
            main: `\\( 10^{${k}} \\cdot 10^{${7 - k}} = 10^{7} \\)`,
            sub: `${a.toLocaleString()} × ${b.toLocaleString()} = 10,000,000 — the rungs always add to 7`
          };
        }
      },
      note: '\\( \\log(MN) = \\log M + \\log N \\): logs turn multiplication into addition. That one property ran global navigation, engineering, and astronomy for 350 years — and it’s the heart of every log identity you’ll meet next.'
    },

    /* 12 — the log-scale gotcha */
    {
      prompt: 'A whisper is ~30 dB; a jet engine ~130 dB. A newspaper writes “the jet is about 4 times louder.” The decibel scale is logarithmic — what’s the ACTUAL ratio of sound intensities?',
      body: 'Every 10 dB is one full power of 10.',
      interaction: {
        type: 'mcq',
        options: ['\\( 10^{10} \\) — ten billion times', '\\( 4 \\) times', '\\( 100 \\) times', '\\( 10 \\) times'],
        correct: 0
      },
      hint: 'The gap is \\( 100 \\) dB \\( = 10 \\) steps of \\( 10 \\) dB. Each step multiplies intensity by 10.',
      explain: '100 dB of difference is \\( 10 \\) factors of 10: \\( 10^{10} = \\) 10,000,000,000×. Log scales compress astronomically different quantities onto one readable axis — which also makes them easy to misread. When you see dB, Richter, or pH, the “small” differences are enormous.',
      success: 'Ten billion. Log scales hide their violence well.',
      coach: ['How many 10-dB steps fit in the 100-dB gap?', 'Each step is ×10. Ten steps is 10 multiplied by itself how many times?']
    },

    /* ---------- checkpoint ---------- */
    {
      section: 'checkpoint',
      prompt: '\\( \\log_4 64 = \\; ? \\)',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '3' }] },
      hint: '\\( 4^{\\,?} = 64 \\).',
      explain: '\\( 4^3 = 64 \\), so the answer is 3.',
      coach: ['\\( 4, 16, 64 \\) — count the steps.']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\log_{1/2} 2 = \\; ? \\)',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '-1' }] },
      hint: 'Translate: \\( \\left(\\frac12\\right)^{\\,?} = 2 \\). Negative exponents flip fractions.',
      explain: '\\( \\left(\\frac12\\right)^{-1} = 2 \\), so \\( \\log_{1/2} 2 = -1 \\). A base below 1 makes logs of big numbers negative — translation keeps you safe.',
      coach: ['What exponent flips \\( \\frac12 \\) into 2?']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\log_9 \\sqrt{3} = \\; ? \\)',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '1/4', accept: ['0.25'], width: 130 }] },
      hint: 'Base 3 everything: \\( 9 = 3^2 \\) and \\( \\sqrt3 = 3^{1/2} \\). Solve \\( 3^{2x} = 3^{1/2} \\).',
      explain: '\\( 9^x = 3^{2x} \\) must equal \\( 3^{1/2} \\), so \\( 2x = \\frac12 \\) and \\( x = \\frac14 \\). Check: \\( 9^{1/4} = (3^2)^{1/4} = 3^{1/2} = \\sqrt3 \\). ✓',
      coach: ['Rewrite base and argument as powers of 3.', 'Match exponents: \\( 2x = \\frac12 \\).']
    },
    {
      section: 'checkpoint',
      prompt: 'True or false: \\( \\log_6 2 + \\log_6 3 = 1 \\).',
      interaction: {
        type: 'mcq',
        options: [
          'True — because \\( 2 \\cdot 3 = 6 \\) and \\( \\log_6 6 = 1 \\)',
          'False — logs of different numbers can’t combine',
          'True — because \\( 2 + 3 = 5 \\approx 6 \\)',
          'False — the sum is \\( \\log_6 5 \\)'
        ],
        correct: 0
      },
      hint: 'Beat 11: adding logs multiplies their arguments.',
      explain: '\\( \\log_6 2 + \\log_6 3 = \\log_6(2 \\cdot 3) = \\log_6 6 = 1 \\). Napier’s trick, working a tiny example. (And no — \\( \\log(a+b) \\) is NOT \\( \\log a + \\log b \\); the rule multiplies arguments, never adds them.)',
      success: 'Adding logs = multiplying arguments. Locked in.',
      coach: ['What does \\( \\log M + \\log N \\) equal, per the big-picture beat?', '\\( 2 \\cdot 3 = 6 \\), and \\( \\log_6 6 \\) asks “6 to what power is 6?”']
    },
    {
      section: 'checkpoint',
      prompt: '\\( \\log_{\\sqrt{3}} \\sqrt[4]{9} = \\; ? \\)',
      interaction: { type: 'fillin', fields: [{ label: 'value', placeholder: '?', answer: '1' }] },
      hint: 'Everything is a power of 3: \\( \\sqrt3 = 3^{1/2} \\) and \\( \\sqrt[4]{9} = 9^{1/4} = 3^{2/4} \\). Reduce that last fraction (lesson 1.3!).',
      explain: '\\( \\sqrt[4]{9} = 3^{2/4} = 3^{1/2} = \\sqrt3 \\). So the question is “\\( \\sqrt3 \\) to what power gives \\( \\sqrt3 \\)?” — that’s 1. The scary-looking log was an identity in costume.',
      coach: ['Convert the argument to a power of 3 and reduce the exponent.', 'Base and argument turn out to be the same number.']
    },

    /* ---------- boss ---------- */
    {
      section: 'boss',
      prompt: 'AHSME 1960: find the real \\( x \\) with \\( \\log_{2x} 216 = x \\).',
      body: 'A log equation where the unknown is in the base AND the answer. Translate first; structure will appear.',
      interaction: { type: 'fillin', fields: [{ label: 'x', placeholder: '?', answer: '3', width: 120 }] },
      hint: 'Translate to exponential form: \\( (2x)^x = 216 \\). Now — do you know 216 as a perfect power?',
      explain: 'Exponential form: \\( (2x)^x = 216 = 6^3 \\). Pattern-match: base \\( 2x = 6 \\) and exponent \\( x = 3 \\) — and both demands agree at \\( x = 3 \\). Check: \\( \\log_6 216 = 3 \\). ✓',
      walkthrough: [
        'Kill the log first: \\( \\log_{2x} 216 = x \\) means \\( (2x)^x = 216 \\).',
        'Recognize the right side: \\( 216 = 6^3 \\). (Worth memorizing the small cubes: 8, 27, 64, 125, 216.)',
        'Match the pattern \\( (\\text{base})^{\\text{exp}} = 6^3 \\): try base \\( 2x = 6 \\), exponent \\( x = 3 \\).',
        'Both give \\( x = 3 \\) simultaneously — the match is consistent. Verify: \\( (2 \\cdot 3)^3 = 6^3 = 216 \\). ✓',
        'Why unique? For \\( x > 0 \\), \\( (2x)^x \\) strictly increases (bigger base AND bigger exponent), so it crosses 216 exactly once.'
      ],
      success: 'Translate, recognize a cube, pattern-match. That’s contest log-solving in miniature.',
      coach: [
        'Any log equation: convert to exponential form before anything else.',
        'Factor 216. Is it a perfect cube?',
        'If \\( (2x)^x = 6^3 \\), what would make the bases AND exponents line up at once?'
      ]
    }
  ]
};
