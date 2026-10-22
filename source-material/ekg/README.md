# EKG source material

Reference only. This folder is excluded from the GitHub Pages deploy (see
`.github/workflows/pages.yml`) and is never loaded by the site.

EKG is its own exam, so it is its own course on the site (`ekg`), not part of Cardio Part 1.

- `text/` — slide text extracted with `scripts/extract-slides.py` from `EKG Interpretation.pptx` (Marriott, EKG I–IV).
  The 70 MB deck is not committed; the original is in the project files.
- `objectives.txt` — the official "EKG Objectives" block from the PHAS 517 objectives.

## Built

| Lecture | Status |
|---|---|
| EKG Interpretation | 20 sections (objective 8 split into sinus, atrial, junctional, ventricular, AV blocks), 64 cards, 316 questions (`node scripts/validate-ekg-interpretation.cjs`) |

Rhythm strips and practice 12-leads are pictures; the site teaches the criteria from the slide text.
Picture slides with teaching content: 9 (EKG paper), 43–47 (lead groups, SAL mnemonic), 232 (fascicles),
250–251 (ischemia → infarction, reciprocal changes).
