# Radiology source material

Reference only. This folder is excluded from the GitHub Pages deploy (see
`.github/workflows/pages.yml`) and is never loaded by the site.

Radiology is its own exam, so it is its own course on the site (`radiology`), not part of Cardio Part 1.
Each part of the Intro to Radiology lecture becomes a lecture inside that course.

- `slides/` — original lecture decks.
- `text/` — slide text extracted with `scripts/extract-slides.py` (search these first).
- `objectives.txt` — the official "Introduction to Radiology Objectives" block from the PHAS 517 objectives.

## Built

| Lecture | Status |
|---|---|
| Intro to Radiology Part One (Perry) | 15 sections (objectives 1–14, plus 22 for x-ray and CT), 34 cards, 157 questions (`node scripts/validate-intro-radiology-part-1.cjs`) |

Part One covers contrast, ionizing radiation, radiography, fluoroscopy, and CT. Objectives 15–21 (MRI,
ultrasound, nuclear medicine) are not in the Part One deck; build them with Part Two and extend objective 22
(patient counseling) to those modalities then.

Picture slides with teaching content (read from the rendered deck): 4 (relative cost and availability),
29 (effective doses), 39 (PA vs AP heart shadow), 60 (fetal dose table), 66 (HRCT).
