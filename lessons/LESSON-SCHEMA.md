# Saintly Interactive Lesson — Authoring Schema

A lesson is an ES module at `lessons/chapter-<c>/lesson-<c>-<n>.js` that **default-exports one object**.
The engine (`interactive-lesson.js`) renders `beats` one at a time; the student can't advance past an
unanswered interaction. Misses: 1st shows `hint`, 2nd shows `explain` (+ optional `walkthrough`) and
unlocks "Show answer & continue". Never gate harder than that.

```js
export default {
  id: 'lesson-1-1',
  title: 'Integer Exponents',          // display title
  kicker: 'Exponents and Logarithms',  // chapter name, shown in beat kicker
  topicIndex: 0,                       // STUDY_PATH chapter index (chapter 1 = 0)
  lessonIndex: 0,                      // lesson index within the chapter (1.1 = 0 … 1.5 = 4)
  next: 'interactive-lesson.html?chapter=1&lesson=2',  // completion CTA (or 'study-path.html')
  notes: 'exponents.html',             // optional "read the full notes" link
  beats: [ /* Beat objects, in order */ ],
}
```

## Beat object

```js
{
  section: 'learn' | 'checkpoint' | 'boss',   // default 'learn'
  kicker: 'optional custom kicker',           // else auto from section
  prompt: 'Main heading. HTML + MathJax \\( x^2 \\) allowed.',   // REQUIRED
  body: 'Optional 1–3 sentence lead paragraph. HTML + MathJax.',
  interaction: { ... },                        // REQUIRED, one of the 7 types below
  hint: 'Shown on 1st miss.',                  // strongly recommended on graded types
  explain: 'Worked explanation shown on 2nd miss.',
  walkthrough: ['Step 1 …', 'Step 2 …'],       // optional tap-through steps (boss problems)
  success: 'Feedback line on correct.',        // optional
  note: 'Takeaway card injected after completion — state the RULE here.',  // optional
  coach: ['nudge', 'strategy', 'next step'],   // Halo hint ladder, gentlest first (2–3 rungs)
}
```

## Interaction types

**MathJax note:** inside JS strings write `\\(`, `\\)`, and double every backslash: `'\\( 2^5 \\cdot 2^6 \\)'`.

1. `mcq` — graded. `{ type:'mcq', options:['…4 html strings…'], correct: 1, cols?: true, shuffle?: false }`
   `correct` is the index into the ORIGINAL options array (engine shuffles unless `shuffle:false`).
   Build distractors from the lesson's listed misconceptions.
2. `fillin` — graded. `{ type:'fillin', fields:[{ label:'exponent', placeholder:'?', answer:'11', accept:['2^11'], width?:120 }] }`
   Matching is case/space-insensitive and numerically tolerant (`0.5` ≡ `1/2`). Multiple fields allowed.
3. `reveal` — ungraded, completes on tap. `{ type:'reveal', face:'html shown up front', cta:'Tap to reveal', hidden:'html revealed' }`
4. `slider` — ungraded, completes after exploring ≥3 values (`mustExplore` overrides).
   `{ type:'slider', min:1, max:10, step?:1, value:1, label:'n', mustExplore?:3, render(n){ return { main:'\\( 2^'+n+' = '+2**n+' \\)', sub:'that is '+n+' twos multiplied' } } }`
   `render` runs live on drag; return `{main, sub}` HTML.
5. `errorhunt` — graded, tap the wrong line. `{ type:'errorhunt', lines:[{ text:'\\( … \\)' }, { text:'…', wrong:true }, …] }` Exactly ONE line has `wrong:true`.
6. `order` — graded. `{ type:'order', items:['first step','second step',…] }` Author items IN CORRECT ORDER; engine shuffles the bank; student taps chips into numbered slots, then Check. Wrong slots bounce back, right ones lock.
7. `match` — ungraded pair-matching with live feedback. `{ type:'match', pairs:[['\\( 8^{1/3} \\)','2'], ['left','right'], …] }` 3–5 pairs. Student taps left then right; correct pairs lock, wrong flash.
8. `balance` — ungraded op-driven equation solver (the "balance solver"). The student picks operations
   from a menu and watches the equation transform; completes on reaching `goal`.
   ```js
   { type: 'balance',
     start: 's0', goal: 'win',
     states: {                       // eq is HTML/MathJax; note shows under the scale when in that state
       s0:  { eq: '\\( 3x + 5 = 11 + x \\)' },
       s1:  { eq: '\\( 3x = 6 + x \\)' },
       win: { eq: '\\( x = 3 \\)', note: 'Check: … ✓' },
     },
     ops: [                          // op.to maps current-state -> next-state; states with no entry shake
       { label: 'Subtract 5 from both sides', to: { s0: 's1' } },
       { label: 'Divide both sides by 2', to: { /* … */ }, blocked: 'Legal, but it smears fractions everywhere.' },
     ] }
   ```
   Authoring rules: enumerate a small state graph (4–8 states) covering the intended path plus one
   instructive detour; `blocked` is the message for legal-but-useless picks (a generic one is supplied).
   An Undo button is automatic. The validator BFS-checks that `goal` is reachable.

## Structure of a lesson (follow the spec's beat sequence)

- 8–12 `learn` beats: 1–3 sentences of concept + one interaction each. Rule statements go in `note`, AFTER the student has discovered them.
- Then 4–6 `checkpoint` beats: `section:'checkpoint'`, terse prompts, mcq or fillin only, mixing all beats.
- Then exactly 1 `boss` beat: `section:'boss'`, a real competition problem, with a full `walkthrough` array.
- Tone: direct, second person, no fluff. "Drag the exponent. Watch what happens." — never "Let's explore the fascinating world of…".
- Every beat needs `hint` + `explain` on graded types, and a 2–3 rung `coach` ladder.
- Total 14–18 beats. Verify with `node --check` — the file must parse.
