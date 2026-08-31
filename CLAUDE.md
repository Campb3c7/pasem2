# PA Semester 2 site guide

This is a static GitHub Pages study site. There is no build step and no framework.

## Structure

- `index.html` — page shell; do not put course content here.
- `styles.css` — shared visual design.
- `app.js` — Learn/Test/Apply behavior and local progress.
- `data/semester.js` — the only file that contains semester curriculum.
- `.github/workflows/pages.yml` — GitHub Pages deployment.

## Content rules

- Keep all curriculum in `data/semester.js`.
- Use one learning card per concept.
- Test questions should be direct recall.
- Apply questions should be clinical vignettes with plausible distractors.
- `correct` is a zero-based answer index.
- IDs use lowercase letters, numbers, and dashes and must remain stable after progress is saved.
- Never add patient-identifying information.

## Validation

Open `index.html` through a local HTTP server, click every course, and check the browser console for errors. GitHub Pages deploys from `main` through the included workflow.
