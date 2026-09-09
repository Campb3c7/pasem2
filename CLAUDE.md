# PA Semester 2 site guide

This is a static GitHub Pages study site. There is no build step and no framework.

## Structure

- `index.html` — page shell; do not put course content here.
- `styles.css` — shared visual design.
- `app.js` — Learn/Test/Apply/Recall behavior and local progress.
- `walkthrough.js` — Disease Walkthrough state, answer checking, and progress.
- `data/semester.js` — course and lecture catalog.
- `data/walkthrough/schema.js` — reusable case schema and registration helpers.
- `data/walkthrough/cases-*.js` — disease cases grouped by clinical domain.
- `data/vaccines.js` — all Vaccines objective content.
- `.github/workflows/pages.yml` — GitHub Pages deployment.

## Content rules

- Keep each lecture's curriculum in its own `data/*.js` file and connect it from `data/semester.js`.
- Structure curriculum as course → lecture → objectives → cards/test/apply.
- Learn, Test, and Apply show objective launchers and then run one selected objective one card/question at a time.
- Recall owns no separate content. It is one lecture-wide sequence across all objectives, grouped Learn → linked Test → linked Apply for each card.
- Use one learning card per concept. Prefer rich `html` with comparison tables, high-yield boxes, and genuinely useful mnemonics when the lecture supports them.
- Test questions should be direct recall.
- Apply questions should be clinical vignettes with plausible distractors.
- `correct` is a zero-based answer index.
- `card` is an optional zero-based Learn-card index used by Recall. If omitted, the engine links by keyword similarity.
- IDs use lowercase letters, numbers, and dashes and must remain stable after progress is saved.
- Never add patient-identifying information.

## Disease Walkthrough cases

- Add cases to the matching `data/walkthrough/cases-*.js` file with `DiseaseWalkthrough.makeCase(...)`.
- Each case moves through hallmark presentation, a four-option diagnostic choice, conclusive result, a four-option diagnosis, and a four-option treatment.
- Shuffle the full case order at the start of every walkthrough session and shuffle each answer set. Do not reveal the disease title or source lecture before treatment is completed.
- Keep every clue visible in the opening presentation. The mode teaches recognition and should not depend on hidden history.
- Use a clinically meaningful variant only when population, severity, allergy, complication, or immune status changes the diagnostic or treatment path.
- The treatment answer is the lecture's drug or management choice for that exact case. Doses are excluded unless the curriculum specifically tests them.

## Diagnosis Drills

- Quizlet-style diagnosis pairs live in `data/diagnosis-drills.js` as four independent sections: classification, hallmark presentation, treatment matching, and diagnostic workup.
- Present the description as the prompt and the diagnosis or clinical scenario as one of four choices.
- Shuffle question order and answer position whenever a section starts. Reveal the complete pair only after the correct answer.

## Disease Geography Lab

- Regional disease data lives in `data/geography.js`. Include conditions only when geography materially helps recognition or the lecture explicitly teaches a distribution.
- Keep the 2D map schematic and use it as a memory aid rather than a source of precise borders.
- Preserve the four paths: guided map learning, travel-to-disease quiz, disease-to-region quiz, and the interactive regional atlas.
- Shuffle the guided and quiz sequences on every start. Keep four answer choices and allow retry after a miss.
- Use only supplied lecture content. A wrong diagnostic order receives a plausible non-diagnostic result from the shared engine.
- IDs must be unique and stable. Run `node scripts/validate-walkthrough.cjs` after editing case data.

## Validation

Open `index.html` through a local HTTP server, click every course, and check the browser console for errors. GitHub Pages deploys from `main` through the included workflow.
