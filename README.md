Saintly is a free program built to make Olympiads, competitions, and learning **accessible to all students**. Saintly delivers **free, high-quality content** in the form of real AMC 10/12 practice problems and **comprehensive solutions written by students, for students.** We're driven by a mission to make competition math so friendly, engaging, and accessible that it feels _saintly_.

## Project structure

- `*.html` — public pages, named in kebab-case.
- `site.css` — shared site styling (light/dark via CSS `light-dark()` variables).
- `site-sidebar.js`, `site-footer.js`, `site-navigation.js` — shared UI behavior.
- `question-bank.js` — the single source of truth for lesson question data. Exposes `window.SaintlyQuestionBank` (`algebra` / `geometry` / `numberTheory` / `probability`) and `window.SaintlyAllQuestions`. Every page that needs questions loads this file; per-page scripts no longer embed their own copies.
- `data/amc-10-problems.json` — all 1,250 past AMC 10 problems (2000–2024, 8 topic tags) used by the Practice Arena.
- `practice-portal.css` and `practice-test.js` — the Practice Arena: full timed competitions, the adaptive topic trainer, the mistake log (free-response retry, solutions unlock after 3 attempts), and the AI coach (user-supplied Anthropic API key, stored in localStorage only).
- `*-practice.js`, `amc-10-*.js`, and lesson-named scripts — page-specific behavior.
- `assets/branding` — logos, favicons, and web app icons.
- `assets/icons` — interface icons.
- `assets/question-diagrams` — AMC problem and solution diagrams, named by year and problem.
- `assets/lesson-diagrams` — diagrams used in lesson content.
- `assets/partners`, `assets/social`, and `assets/people` — partner, social, and profile media.
- `service-worker.js` — same-origin caching for faster repeat visits.
