# PA Semester 2 Study Hub

A clean Semester 2 version of the PA study site. It keeps the original site's dark, gold-accented format and Learn/Test/Apply/Recall flow without copying prior-semester study material.

## Add course material

Endocrine currently contains **Endocrinology Anatomy**, **Hypoglycemia**, **Diabetes Mellitus**, **Diabetic Pharmacology**, **Diabetes Mellitus Special Considerations**, and **Diabetes Mellitus Complications**. Anatomy is sourced from Palmer's `Endocrine Anatomy.pptx` and the first ten objectives in `Endocrine/Objectives.txt`. Its first section teaches all ten glands individually, with a separate location card and function card for each, and a direct question for each card. Five further sections cover pituitary relationships/vessels, adrenal vessels/nerves, pancreatic parts/ducts/vessels/nerves, thyroid vessels/nerves, and parathyroid vessels/nerves. All sections map to the original objectives in the launchers. Explicit card links support Recall. Other endocrine lectures have not been added.

Hypoglycemia uses Brandell's `1 Hypoglycemia 2026-2.pptx` and its nine objectives in their supplied order. It contains 26 concept cards, 53 direct Test questions, and 31 Apply cases. Each of the five named hormones has its own card. All lecture symptom groups are practiced, and every concept has explicit Test/Apply links for Recall. The 72-hour-fast laboratory panel is excluded because it is outside these objectives. The dumping comparison labels a necessary [NIDDK early/late clarification](https://www.niddk.nih.gov/health-information/digestive-diseases/dumping-syndrome/symptoms-causes): the slides combine the osmotic mechanism with later timing; late dumping can cause true hypoglycemia. [ADA guidance](https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose) supports the safe-swallowing/rescue distinction. Run `node scripts/validate-hypoglycemia.cjs` to check objective order, all planned components, question structure, and card links.

The material deliberately excludes incidental details such as gland dimensions, calcification deposits, adrenal shape, and lymphatic drainage not requested by the objectives. Concision must never omit a named objective component. The inferior thyroid artery origin is clarified as thyrocervical trunk → subclavian ([anatomy reference](https://www.ncbi.nlm.nih.gov/books/NBK560666/)); the slide abbreviates it to subclavian. No other endocrine lecture data is imported. Run `node scripts/validate-endocrine.cjs` to check the catalog, question structure, Recall links, and teaching/retrieval coverage for every objective component. Revised section IDs prevent saved Recall mastery from skipping the corrected material.


Diabetes Mellitus uses Brandell's `2 Diabetes Mellitus - 2026-2.pptx` and its 18 objectives, in the supplied order. It covers diagnosis, T1DM, T2DM, LADA/MODY, nonpharmacologic care, lifespan, maintenance, culture, and ethics. The separate diabetes pharmacology and special-considerations/complications/emergencies lectures are not imported. Insulin appears only as T1DM's mainstay treatment; brands, kinetics, dosing, and titration are excluded. Small labeled ADA/AAPA additions complete pediatric goal wording, older-adult care, adult renal/retinal screening intervals, communication, and ethics where the slide text is incomplete. Run `node scripts/validate-diabetes.cjs` for objective order, component coverage, question structure, and Recall links.

Diabetic Pharmacology uses Brandell's `3 Diabetes Mellitus Pharmacology - 2026.pptx` and the corresponding objectives through the final T1DM insulin objective. Its 29 sections preserve the supplied order: nine drug classes, seven insulin objective sections, then thirteen additional clinical objectives. It contains 67 Learn cards, 109 Test questions, and 70 Apply cases. Every named drug/formulation has recognition practice; each card has explicit Test/Apply links. Meglitinide/alpha-glucosidase questions provide both names and test the class as requested. Approximate insulin kinetics come from the slide tables/graph, not from historical slides. Labeled FDA/ADA additions fill requested tirzepatide efficacy/safety, repaglinide contraindications, T1DM starting-dose estimates, monitoring-device explanations, and the metabolic-surgery modality. Current Mounjaro CV labeling is distinguished from the lecture's older description. The separate special-considerations/complications/emergencies lecture remains unadded. Run `node scripts/validate-diabetic-pharmacology.cjs` to check order, required components, names, question structure, and card links.

Diabetes Mellitus Special Considerations uses only slides 5–17 of Brandell's combined special-considerations/complications/emergencies deck. Its five objective sections cover morning patterns, cause-based management, all perioperative phases, pregnancy, and weight management. Small labeled references complete NPO/postoperative care, pregnancy complication examples, and the delivery timing requested by the objectives. The later chronic-complications and emergencies content remains unadded. Run `node scripts/validate-special-considerations.cjs` for a focused content/order/question-link check. Prior lecture validators check their own catalog entries so adding another lecture does not require changing all their expected catalog sizes.

Diabetes Mellitus Complications uses slides 19–70 of the combined Brandell deck and its 21 chronic-complication objectives in order. It covers micro/macrovascular comparisons, lipids/BP/CV mortality, PAD, retinopathy, the distinct neuropathy syndromes and their care, and diabetic kidney injury/testing/prevention. Autonomic manifestations each have dedicated presentation/treatment practice. Labeled AHA/ADA/NIDDK completions address unspecified PAD tests/treatment and blank autonomic treatment prompts; painful-neuropathy drug guidance includes a brief clarification rather than treating the slide's SSRI listing as equivalent initial evidence. Emergency infected-ulcer/DKA/HHS management is not imported. Run `node scripts/validate-diabetes-complications.cjs` for a focused objective/component/question-link check.

Use [`data/semester.js`](data/semester.js) for the course/lecture catalog and a separate lecture file for its study material. Vaccines currently lives in [`data/vaccines.js`](data/vaccines.js).

- Add a course to `courses`.
- Add lectures inside that course, then connect each lecture to its objective array.
- Every objective can contain multiple learning cards under `cards`, recall questions under `test`, and clinical vignettes under `apply`.
- Question `correct` values are zero-based: `0` is the first answer.
- Optionally add a zero-based `card` value to a question to link it to a Learn card in Recall. Otherwise, Recall links the closest card automatically.

Learn, Test, and Apply use the lecture objectives as launchers, then run one selected objective as a focused, one-card-at-a-time session. Learn cards marked **Not yet** return at the end. A missed Test or Apply question immediately shows its linked Learn card.

Recall is one continuous lecture-wide session. It walks all objectives in order and groups each concept as **Learn → Test → Apply** before moving to the next Learn card. **Skip Learn previews** can be selected before starting; linked Learn cards still appear after misses, and missed questions return later.

Progress is stored in the browser on the device being used.

## Disease Walkthrough

The Disease Walkthrough presents every clue up front, then moves through four stages: hallmark presentation, diagnostic choice, diagnosis, and treatment. Every stage uses four multiple-choice options. A wrong diagnostic order returns a reasonable non-diagnostic result and leaves the learner on that step. Each session shuffles all diagnosis-ready cases and answer positions, and the disease name and source lecture remain hidden until the case is completed.

Cases live in `data/walkthrough/` and are grouped by clinical domain. Add a case with the shared `DiseaseWalkthrough.makeCase(...)` format instead of changing the interface. Keep variants separate when pregnancy, age, immune status, allergy, severity, or a complication changes the clinical path. Cases that name or pre-confirm the condition belong in the treatment drills and should be listed in `data/walkthrough/config.js`, not the unknown-patient rotation. Run `node scripts/validate-walkthrough.cjs` after editing case data.

The flat map uses country boundaries derived from Natural Earth 1:110m Admin 0 Countries (public domain). `data/world-map.js` is generated by `scripts/build-world-map.cjs` so the study site remains fully static and works on GitHub Pages without a mapping service.

## Diagnosis Drills

Diagnosis Drills contains four independent randomized multiple-choice sets: Disease Classification, Hallmark Presentation, Treatment Match, and Diagnostic Workup. Each question presents the supplied description and asks for its matching diagnosis or clinical scenario. Question order and the four answer positions reshuffle whenever a section starts.

## Disease Geography Lab

The Disease Geography Lab teaches the lecture's location-sensitive infections through a flat world map. Guided Map uses a repeat-at-the-end learning queue. Travel Clue Quiz asks for the disease from a mapped travel exposure, Reverse Map Quiz asks for the region from a disease name, and Regional Atlas provides an interactive overview. The active quiz order and answer positions reshuffle each session.

## GitHub Pages

The included workflow publishes the repository automatically from `main`. In **Settings → Pages**, set **Source** to **GitHub Actions** once. The site will be available at:

`https://campb3c7.github.io/pasem2/`
