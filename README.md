Saintly is a free program built to make Olympiads, competitions, and learning **accessible to all students**. Saintly delivers **free, high-quality content** in the form of real AMC 10/12 practice problems and **comprehensive solutions written by students, for students.** We're driven by a mission to make competition math so friendly, engaging, and accessible that it feels _saintly_.

## Project structure

- `*.html` — public pages, named in kebab-case.
- `site.css` — shared site styling.
- `site-sidebar.js`, `site-footer.js`, `site-navigation.js` — shared UI behavior.
- `question-bank.js` — shared question data used by lesson pages.
- `data/amc-10-problems.json` — complete past AMC 10 competitions used by the practice portal.
- `practice-portal.css` and `practice-test.js` — year selection, directions, timer, scoring, review, and reading tools.
- `*-practice.js`, `amc-10-*.js`, and lesson-named scripts — page-specific behavior.
- `assets/branding` — logos, favicons, and web app icons.
- `assets/icons` — interface icons.
- `assets/question-diagrams` — AMC problem and solution diagrams, named by year and problem.
- `assets/lesson-diagrams` — diagrams used in lesson content.
- `assets/partners`, `assets/social`, and `assets/people` — partner, social, and profile media.
- `service-worker.js` — same-origin caching for faster repeat visits.
