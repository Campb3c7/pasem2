# Cardio Part 3 source material

Reference only. This folder is excluded from the GitHub Pages deploy (see
`.github/workflows/pages.yml`) and is never loaded by the site.

- `slides/` — original lecture decks (renamed to short ids). Sillaman's three decks were `.ppt`; they are converted to `.pptx`. The Cardiac Surgery deck had two embedded videos (about 150 MB); they are emptied so the deck fits in git.
- `text/` — slide text + speaker notes extracted with `scripts/extract-slides.py` (search these first). Pictures are marked `[picture]`; render the deck to PDF to read them.
- `objectives.txt` — official objectives for the third cardio exam (CAD Parts I to V, Cardiac Testing, Cardiovascular Surgery, Heart Failure).

## Plan (2026-11-16)

Anna's calendar circles Cardiac Testing (Sillaman), Cardiac Surgery, Heart Failure (Brandell, 2 sessions), CAD & Pharm (Stager) and ACS & Pharm (Stager).
Cardiac Surgery is taught the afternoon after the Cardio 2 B exam, so the CV Surgery objective block belongs here, not in Cardio Part 2.
Same rules as Parts 1 and 2: Learn/Test/Apply/Recall only unless Anna asks for more tools. CAD is one syllabus block with five
numbered parts and one deck per part, so each part is its own site lecture (like Hypertension Parts I to III).

| # | Site lecture | Objectives | Deck(s) | Status |
|---|---|---|---|---|
| 1 | Cardiac Testing (`cardiac-testing`) | Stress Testing 1-9, Echo and Telemetry 1-10, Coronary Angiogram 1-10 | `stress-testing.pptx` (48), `echo-telemetry.pptx` (28), `coronary-angiogram.pptx` (32) | Built |
| 2 | Cardiac Surgery (`cardiac-surgery`) | CV Surgery 1-9 | `cardiac-surgery.pptx` (59) | Built |
| 3 | Heart Failure (`heart-failure`) | 16 objectives | `heart-failure.pptx` (Brandell) | Built |
| 4 | CAD Part I (`cad-part-1`) | 10 | `cad-part-1.pptx` (86) | |
| 5 | CAD Part II (`cad-part-2`) | 7 | `cad-part-2.pptx` (61) | |
| 6 | CAD Part III (`cad-part-3`) | 9 | `cad-part-3.pptx` (124) | |
| 7 | CAD Part IV, ACS | 10 | **missing** (not in the Stager zip) | |
| 8 | CAD Part V, Pharmacology | 9 | **missing** | |

## Built

| Lecture | Status |
|---|---|
| Cardiac Testing | 21 sections (stress 1-9, echo 10-14, angiogram 15-21; right heart cath from the angiogram deck gets its own section), 31 cards, 262 Test, 99 Apply (`node scripts/validate-cardiac-testing.cjs`). Read from pictures: stress slides 11, 13, 15, 16, 47, 48. Stress slide 11's notes say MI within 4 days and HTN 200/115; the table says 2 days and 200/110, so the card flags it and questions use the table. |
| Cardiac Surgery | 10 sections (history and list of operations first, then one per objective), 14 cards, 118 Test, 37 Apply (`node scripts/validate-cardiac-surgery.cjs`). Read from pictures: slides 18, 20, 24, 29, 30. Slides 25 and 28 were videos. The three ICU cases (slides 55 to 57) use the speaker-note answers. |
| Heart Failure | 41 sections following the deck (definitions and epidemiology through inpatient ADHF and discharge), 48 cards, 436 Test, 137 Apply (`node scripts/validate-heart-failure.cjs`). Dose tables (slides 138-139) are summarized, not drilled. Deck slips flagged on the cards: metoprolol succinate labeled "Lopressor"; post-discharge follow-up given as both 3-5 days and within 5 days. |
