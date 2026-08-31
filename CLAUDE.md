# PA Semester 2 site guide

This is a static GitHub Pages study site. There is no build step and no framework.

## Structure

- `index.html` — page shell; do not put course content here.
- `styles.css` — shared visual design.
- `app.js` — Learn/Test/Apply/Recall behavior and local progress.
- `data/semester.js` — course and lecture catalog.
- `data/vaccines.js` — all Vaccines objective content.
- `.github/workflows/pages.yml` — GitHub Pages deployment.

## Content rules

- Keep each lecture's curriculum in its own `data/*.js` file and connect it from `data/semester.js`.
- Structure curriculum as course → lecture → objectives → cards/test/apply.
- The same objectives appear as sections inside Learn, Test, Apply, and Recall.
- Recall runs one whole objective and owns no separate content.
- Use one learning card per concept.
- Test questions should be direct recall.
- Apply questions should be clinical vignettes with plausible distractors.
- `correct` is a zero-based answer index.
- `card` is an optional zero-based Learn-card index used by Recall. If omitted, the engine links by keyword similarity.
- IDs use lowercase letters, numbers, and dashes and must remain stable after progress is saved.
- Never add patient-identifying information.

## Validation

Open `index.html` through a local HTTP server, click every course, and check the browser console for errors. GitHub Pages deploys from `main` through the included workflow.
