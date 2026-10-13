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
| Hypoglycemia | Done: 3 diseases, 36 questions |
| Diabetes Mellitus | Done: 5 diseases, 67 questions |
| DM Special Considerations | Done: 5 entries, 56 questions |
| DM Complications | Done: 7 diseases, 84 questions |
| DM Emergencies | Done: 3 diseases, 64 questions |
| Adrenal Disease | Done: 11 diseases, 152 questions |
| Paget's Disease | Done: 1 disease, 39 questions |
| Parathyroid Disease | Done: 10 diseases, 102 questions |
| Pituitary Diseases | Done: 15 diseases, 136 questions |
| Thyroid Disease | Done: 25 diseases, 205 questions (includes Thyroid Pharmacology drugs) |

All awaiting user review. Endocrinology Anatomy, Diabetic Pharmacology, Thyroid Pharmacology, and
Patient Education & Follow-Up get no entries of their own.

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
| Thyroid Disease | `text/thyroid-disease.md`, original embedded assets, and supplemental worksheet |
| Thyroid Pharmacology | `text/thyroid-pharmacology.md` and original embedded assets |

The complete thyroid lecture context is archived in [THYROID-CONTEXT.md](THYROID-CONTEXT.md), with all slide text and separate original-quality embedded visuals. The oversized PowerPoints are not committed. This archive is reference-only; use it as source context in future chats. No thyroid study-tool entries were added.

## Reading the decks

- `text/*.md` is regenerated with `python3 scripts/extract-slides.py source-material/endocrine`.
  It has slide text, tables, and speaker notes. `[picture]` marks slides whose content is
  partly or wholly an image (tables, algorithms, diagrams) — render the deck to see those:
  `soffice --headless --convert-to pdf --outdir <scratch> slides/<deck>.pptx`, then read the pages.
- Known gaps in the files themselves: Hypoglycemia slide 14 ("Prevention of Hypoglycemia")
  is blank; Diabetic Pharmacology slide 77 and Parathyroid slides 19 and 100 link to images
  that are not embedded in the deck.

