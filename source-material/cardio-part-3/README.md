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
| 4 | CAD Part I (`cad-part-1`) | 10 | `cad-part-1.pptx` (86) | Built |
| 5 | CAD Part II (`cad-part-2`) | 7 | `cad-part-2.pptx` (61) | Built |
| 6 | CAD Part III (`cad-part-3`) | 9 | `cad-part-3.pptx` (124) | Built |
| 7 | CAD Part IV, ACS | 10 | **missing** (not in the Stager zip) | |
| 8 | CAD Part V, Pharmacology | 9 | **missing** | |

## Built

| Lecture | Status |
|---|---|
| Cardiac Testing | 21 sections (stress 1-9, echo 10-14, angiogram 15-21; right heart cath from the angiogram deck gets its own section), 31 cards, 262 Test, 99 Apply (`node scripts/validate-cardiac-testing.cjs`). Read from pictures: stress slides 11, 13, 15, 16, 47, 48. Stress slide 11's notes say MI within 4 days and HTN 200/115; the table says 2 days and 200/110, so the card flags it and questions use the table. |
| Cardiac Surgery | 10 sections (history and list of operations first, then one per objective), 14 cards, 118 Test, 37 Apply (`node scripts/validate-cardiac-surgery.cjs`). Read from pictures: slides 18, 20, 24, 29, 30. Slides 25 and 28 were videos. The three ICU cases (slides 55 to 57) use the speaker-note answers. |
| Heart Failure | 41 sections following the deck (definitions and epidemiology through inpatient ADHF and discharge), 48 cards, 436 Test, 137 Apply (`node scripts/validate-heart-failure.cjs`). Dose tables (slides 138-139) are summarized, not drilled. Deck slips flagged on the cards: metoprolol succinate labeled "Lopressor"; post-discharge follow-up given as both 3-5 days and within 5 days. |
| CAD Part I | 18 sections following the deck (definitions, risk factors, plaque formation and rupture, remodeling, supply and demand, ischemia effects, presentation, women, pretest likelihood, exercise and pharmacologic stress, MPI and stress echo, appropriate testing, CCTA, CAC, cath and PCI), 36 cards, 204 Test, 71 Apply (`node scripts/validate-cad-part-1.cjs`). Read from pictures: 10, 12 to 15, 17 to 19, 23, 26, 27, 41, 43, 45, 51, 60, 63, 71, 72, 75. Slide 24 cases are answered from slides 20 and 21. Duke formula marked standard teaching (the deck lists only the variables). |
| CAD Part II | 15 sections following the deck (prevention types, PREVENT models and use, lifestyle, exercise, statins, primary prevention lipids, risk enhancers, CAC, diabetes, HTN/OSA, alcohol, smoking, aspirin, Thomas case), 31 cards, 200 Test, 62 Apply (`node scripts/validate-cad-part-2.cjs`). Read from pictures: 18, 19, 20, 45, 53. The Thomas case has no answer slide; its answers apply the deck rules and say so. |
| CAD Part III | 30 sections following the deck (angina types, symptoms, women and older adults, classification, exam, differential, office triage, stable angina, UA, NSTEMI/STEMI, initial evaluation, EKG, troponin, hs-troponin, BNP, ED steps and STEMI, non-ST-elevation care, HEART score, HEART Pathway, CCTA/stress/pretest probability, positive stress to cath, cath findings, stents, DAPT, CTO, access complications, contrast AKI and cholesterol emboli, CABG vs PCI, long-term care, CCS class and antianginals), 44 cards, 272 Test, 79 Apply (`node scripts/validate-cad-part-3.cjs`). Read from pictures: 5, 9, 15, 16, 19, 24, 31, 32, 62, 78, 88, 100, 102, 105, 110. Cases on slides 20, 80, 82 have no answer slide and are answered from the deck rules. |
