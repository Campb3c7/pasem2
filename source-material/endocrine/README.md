# Endocrine source material

Reference only. This folder is excluded from the GitHub Pages deploy (see
`.github/workflows/pages.yml`) and is never loaded by the site.

- `slides/` — original lecture PowerPoints.
- `text/` — slide text + speaker notes extracted from each deck (search these first).
- `objectives.txt` — official endocrine learning objectives; this is what the exam tests.

## Endocrine Diseases section — agreed plan

- Endocrine gets its own Diseases tool inside the Endocrine course page (same layout
  as the Infectious Disease one: Information / Progress / Practice, per-disease progress).
- Only lectures that actually teach diseases get entries. Check every lecture before
  excluding it. Pharmacology lectures do not get their own entries; their drugs appear
  in the treatment section of each disease they apply to.
- Split diseases the way the lecture or the learning objectives split them — not finer,
  not coarser.
- Source of truth is the slides (+ notes) and objectives. Existing `data/*.js` lecture
  files may be consulted but not copied; write new sections and new questions.
- Build one lecture at a time; the user reviews each before the next.
- Wait until all decks are uploaded before starting disease content.

## Progress

| Lecture | Diseases section |
|---|---|
| Adrenal Disease | Done: 11 diseases, 152 questions (awaiting user review) |
| Pituitary Diseases | Done: 15 diseases, 136 questions (awaiting user review) |

## Decks received

| Lecture | File(s) |
|---|---|
| Hypoglycemia | `hypoglycemia` |
| Diabetes Mellitus | `diabetes-mellitus` |
| Diabetic Pharmacology | `diabetic-pharmacology` |
| DM Special Considerations, DM Complications, DM Emergencies | `diabetes-special-considerations-complications-emergencies` (one combined deck) |
| Adrenal Disease | `adrenal-disease-part-1`, `adrenal-disease-part-2` |
| Paget's Disease | `pagets-disease` |
| Parathyroid Disease | `parathyroid-disease` |
| Patient Education & Follow-Up | `patient-education-follow-up` |
| Endocrinology Anatomy | `endocrine-anatomy` |
| Pituitary Diseases | `pituitary-diseases` |
| Thyroid Disease | `documents/thyroid-disease-supplemental-worksheet.docx` only (blank comparison-table template; text in `text/thyroid-disease-supplemental-worksheet.md`) |

Thyroid Disease and Thyroid Pharmacology decks are too large to upload. For those two
lectures the sources are the objectives, the worksheet (its columns show how the lecture
splits the diseases: hypothyroid — primary overt/Hashimoto's, subclinical, central,
myxedema coma, congenital; hyperthyroid — Graves', toxic MNG, subclinical, thyroid storm,
central; thyroiditis — painless, postpartum, subacute, infectious; malignancy — papillary,
follicular, anaplastic, medullary, lymphoma), and the existing `data/thyroid-disease.js` /
`data/thyroid-pharmacology.js`, which were built from the slides and cite slide numbers.

## Reading the decks

- `text/*.md` is regenerated with `python3 scripts/extract-slides.py source-material/endocrine`.
  It has slide text, tables, and speaker notes. `[picture]` marks slides whose content is
  partly or wholly an image (tables, algorithms, diagrams) — render the deck to see those:
  `soffice --headless --convert-to pdf --outdir <scratch> slides/<deck>.pptx`, then read the pages.
- Known gaps in the files themselves: Hypoglycemia slide 14 ("Prevention of Hypoglycemia")
  is blank; Diabetic Pharmacology slide 77 and Parathyroid slides 19 and 100 link to images
  that are not embedded in the deck.
