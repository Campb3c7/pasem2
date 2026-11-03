# Cardio Part 2 source material

Reference only. This folder is excluded from the GitHub Pages deploy (see
`.github/workflows/pages.yml`) and is never loaded by the site.

- `slides/` — original lecture decks (renamed to short ids).
- `text/` — slide text + speaker notes extracted with `scripts/extract-slides.py` (search these first). Pictures are marked `[picture]`; render the deck to PDF to read them.
- `objectives.txt` — official Cardio exam 2 objectives (8 blocks).

## Plan (2026-11-03, waiting on Anna's go-ahead)

The course shell `cardio-part-2` is on the site with no lectures. Same rules as Part 1:
one site lecture per objective block, split by deck only when Anna asks (Hypertension
precedent), Learn/Test/Apply/Recall only unless she asks for more tools.

| # | Site lecture (planned id) | Objectives block | Deck | Notes |
|---|---|---|---|---|
| 1 | Arrhythmias (`arrhythmias`) | Arrhythmias, 26 objectives | `arrhythmias.pptx` (151 slides) | Build first: Syncope and both arrhythmia lectures lean on it. The deck lists AF/flutter/MAT only in a table; their detail is in the Chronic Arrhythmia deck. The deck gives 100 J for unstable VT but no defibrillation joules or full ACLS doses in text; check the slide pictures, else wait for the Arrhythmia Pharmacology deck. Never invent doses. |
| 2 | Syncope (`syncope`) | Syncope, 19 objectives | `syncope.pptx` (Raaf, 98 slides) | Overlaps AS/HCM (Part 1), AV blocks/WPW (Arrhythmias). Questions stay on the syncope angle. |
| 3 | Inpatient & Long-Term Arrhythmia Management (`arrhythmia-management`) | 11 objectives | `chronic-arrhythmia-management.pptx` (127 slides) | Drug objective split per drug (amiodarone, dronedarone, sotalol, dofetilide), like Lipids. CHA2DS2-VASc gets calculation practice. |
| 4 | Infective Endocarditis & Pericardial Disease (`endocarditis-pericardial`) | 5 objectives | `endocarditis-pericardial.pptx` (73 slides) | Objective 5 split per condition: acute pericarditis, effusion, tamponade, constrictive. Duke criteria: major only. |
| 5 | Vascular Disease Part 1 (`vascular-disease-part-1`) and Part 2 (`vascular-disease-part-2`): two lectures, one per deck (Anna chose 2026-11-03) | Vascular, about 40 objectives under 8 headings | `vascular-disease-part-1.pptx` (150 slides: PAD, acute limb, gangrene, aneurysm, dissection, vasculitis, AVM) and `vascular-disease-part-2.pptx` (98 slides: venous insufficiency, phlebitis, VTE/PE) | The decks split exactly at the objective headings. Sections follow the headings either way. |
| 6 | Shock, Pressors & Fluid Management | 20 objectives | **missing** | |
| 7 | Arrhythmia Pharmacology | 11 objectives | **missing** | |
| 8 | Cardiovascular Surgery | 9 objectives | **missing** | |

Not in Cardio Part 2: `Intro to Radiology II` is the Radiology course's Part Two
(ultrasound, MRI, nuclear medicine). Its deck is in `source-material/radiology-part-2/`.

Possible extras once lectures exist (only if Anna asks): a Cardio Part 2 Medications tool
(antiarrhythmics, rate control, anticoagulants, ACLS drugs, pressors, IE antibiotics),
Diseases and Concepts tools like Part 1.
