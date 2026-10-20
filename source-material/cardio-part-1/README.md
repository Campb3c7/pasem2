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
| Hypertension | Hypertension, Parts I, II and III (Hypertension Crisis is a separate block; confirm) | hypertension-part-1/2/3.pptx (Veal) |
| Cardiac Devices | Cardiac Device | missing |
| Intro to Imaging | Introduction to Radiology | missing |
| Cardiomyopathy | Cardiomyopathy | Cardiomyopathies.pptx |
| EKG (EKG 1 and 2) | EKG | missing |
| Valvular Disease | Valvular Disease | Valvular Disease - student.pptx |

## Built

| Lecture | Status |
|---|---|
| Cardiovascular Anatomy | Learn/Test/Apply/Recall: 11 objectives, 58 cards, 223 questions (`node scripts/validate-cardio-anatomy.cjs`) |
| Cardiovascular Physiology | Learn/Test/Apply/Recall: 8 objectives, 52 cards, 167 questions (`node scripts/validate-cardio-physiology.cjs`) |
| Cardiovascular H&P | Learn/Test/Apply/Recall: 15 objectives, 68 cards, 199 questions (`node scripts/validate-cardio-history-physical.cjs`); OSCE objectives not included |

Concepts tool (Cardio Part 1 page): Anatomy 5 concepts/42 questions, Physiology 17/128, H&P 12/100.

Heart Sounds is waiting on its deck.
