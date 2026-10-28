# Cardio Part 1 source material

Reference only. This folder is excluded from the GitHub Pages deploy (see
`.github/workflows/pages.yml`) and is never loaded by the site.

- `slides/` — original lecture decks.
- `text/` — slide text + speaker notes extracted with `scripts/extract-slides.py` (search these first).
- `objectives.txt` — official PHAS 517 cardiology objectives for the whole course
  (all three exams). Only the lectures assigned to Part 1 are built here.

## Plan

- Cardiology is split into three exams, so the site gets **Cardio Part 1**, Part 2,
  and Part 3 as separate courses rather than one Cardio course.
- Lectures are built in calendar order as the student asks; Diseases-style tools come later.

## Part 1 sections (from the student's calendar, 2026-10-19)

One section per objective block, however many class days it spans.

| Section | Objectives block | Deck in project files |
|---|---|---|
| Cardio A&P | Cardiology Anatomy | Cardio Anatomy.pptx |
| Cardio Physiology (taught with Anatomy on the "Cardio A&P" day) | Cardiology Physiology | Cardiovascular Physiology.pptx |
| Cardio H&P | Cardiovascular H&P | Cardiovascular H&P.pptx |
| Heart Sounds | Heart Sounds | missing |
| Lipids (includes lipid pharmacology) | Lipids | Lipid Physiology and Dyslipidemia.pptx (drug classes on slides 62-93) |
| Hypertension Part I | Hypertension, Parts I, II and III: objectives 1–3, 8–10 | hypertension-part-1.pptx (Veal) |
| Hypertension Part II | Same block: objectives 4–7, 11–16 | hypertension-part-2.pptx (Veal) |
| Hypertension Part III | Same block: objectives 17–24 | hypertension-part-3.pptx (Veal) |
| Hypertensive Crisis | Hypertension Crisis (confirmed Part 1, 2026-10-23) | hypertensive-crisis.pptx (Veal) |
| Hypertension (Total) | Review of all four above (Anna's request, 2026-10-28) | Learn cards reused from the four lectures; no deck of its own |
| Cardiac Devices | Cardiac Device | missing |
| ~~Intro to Imaging~~ | Introduction to Radiology | Separate exam: built as the Radiology course (`source-material/radiology-part-1/`) |
| Cardiomyopathy | Cardiomyopathy | Cardiomyopathies.pptx |
| ~~EKG~~ | EKG | Separate exam: built as the EKG course (`source-material/ekg/`) |
| Valvular Disease | Valvular Disease | Valvular Disease - student.pptx |

## Built

Hypertension's single objective list (Parts I, II and III) is split across three site lectures by the deck that teaches each objective (2026-10-26). Objective 8 (renovascular and resistant HTN) sits in Part I with renovascular disease; resistant HTN's Diseases entry sits in Part III with its treatment slides. The Diseases entry for primary hypertension keeps its full diagnosis-to-treatment path in Part I so saved progress stays valid.

| Lecture | Status |
|---|---|
| Cardiovascular Anatomy | Learn/Test/Apply/Recall: 11 objectives, 58 cards, 223 questions (`node scripts/validate-cardio-anatomy.cjs`) |
| Cardiovascular Physiology | Learn/Test/Apply/Recall: 8 objectives, 52 cards, 167 questions (`node scripts/validate-cardio-physiology.cjs`) |
| Cardiovascular H&P | Learn/Test/Apply/Recall: 15 objectives, 68 cards, 199 questions (`node scripts/validate-cardio-history-physical.cjs`); OSCE objectives not included |
| Lipids & Dyslipidemia | 27 sections (drug objective split per class), 85 cards, 348 questions (`validate-lipids-dyslipidemia.cjs`) |
| Hypertension Part I | Objectives 1, 2, 3, 8, 9, 10: 6 sections, 23 cards, 83 questions (`validate-hypertension-part-1.cjs`) |
| Hypertension Part II | Objectives 4–7, 11–16: 10 sections, 27 cards, 99 questions (`validate-hypertension-part-2.cjs`) |
| Hypertension Part III | Objectives 17–24 (drug objective split per class): 19 sections, 45 cards, 175 questions (`validate-hypertension-part-3.cjs`) |
| Hypertensive Crisis | 23 sections (objective 4 split in four, 8 in five, 9 per condition plus sympathetic overactivity), 56 cards, 256 questions (`validate-hypertensive-crisis.cjs`). Objectives 1–2 repeat Hypertension 11–12 and are rebuilt from this deck plus Part II slides 27–40. Slide 14's "SAH" description reads like a subdural hematoma; flagged on the card |
| Hypertension (Total) | All Hypertension I–III and Crisis objectives in one lecture: 56 sections, 145 Learn cards reused from the four files (Part II 11–12 merged into Crisis 1–2's cards), 411 new questions (224 Test, 187 Apply) that never repeat a source prompt (`validate-hypertension-total.cjs`). No Diseases or Concepts entries of its own: the four lectures' entries already cover it |
| Cardiac Devices | 10 sections (objective 3 split in four), 37 cards, 133 questions (`validate-cardiac-devices.cjs`) |
| Cardiomyopathies | 18 sections (HCM split in four), 74 cards, 258 questions (`validate-cardiomyopathies.cjs`) |
| Valvular Disease | 25 sections (one per lesion), 55 cards, 216 questions (`validate-valvular-disease.cjs`). The 74 MB deck is not committed; its text is in `text/valvular-disease.md` and the original is in the project files |

Concepts tool (Cardio Part 1 page): Anatomy 5 concepts/42 questions, Physiology 17/128, H&P 12/100, Lipids 10/76, Hypertension Part I 6/48, Part II 2/17, Part III 6/58, Hypertensive Crisis 9/60, Cardiac Devices 8/57, Cardiomyopathies 11/87, Valvular 10/80.

Diseases tool (Cardio Part 1 page): Anatomy 3 entries/26 questions, Physiology 6/48, H&P 11/106, Lipids 6 diseases/109 questions, Hypertension Part I 7/94, Part II 2/23, Part III 3/44, Hypertensive Crisis 13/97, Cardiac Devices 8/79, Cardiomyopathies 8/134 (includes a "General Approach" entry for the lecture-wide objectives), Valvular 13/151 (valve-surgery objectives live under Prosthetic Valve Endocarditis). Anatomy, Physiology, H&P and Devices hold the clinical conditions those lectures teach (no workup/treatment sections where the slides teach none).

Heart Sounds is waiting on its deck.
