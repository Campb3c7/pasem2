# Cardio Part 2 source material

Reference only. This folder is excluded from the GitHub Pages deploy (see
`.github/workflows/pages.yml`) and is never loaded by the site.

- `slides/` — original lecture decks (renamed to short ids).
- `text/` — slide text + speaker notes extracted with `scripts/extract-slides.py` (search these first). Pictures are marked `[picture]`; render the deck to PDF to read them.
- `objectives.txt` — official Cardio exam 2 objectives (8 blocks).

## Plan (2026-11-03, approved by Anna)

The course shell `cardio-part-2` is on the site with no lectures. Same rules as Part 1:
one site lecture per objective block, split by deck only when Anna asks (Hypertension
precedent), Learn/Test/Apply/Recall only unless she asks for more tools.

| # | Site lecture (planned id) | Objectives block | Deck | Notes |
|---|---|---|---|---|
| 1 | Arrhythmias (`arrhythmias`) | Arrhythmias, 23 objectives | `arrhythmias.pptx` (151 slides) | Build first: Syncope and both arrhythmia lectures lean on it. The deck lists AF/flutter/MAT only in a table; their detail is in the Chronic Arrhythmia deck. The deck gives 100 J for unstable VT but no defibrillation joules or full ACLS doses in text; check the slide pictures, else wait for the Arrhythmia Pharmacology deck. Never invent doses. |
| 2 | Syncope (`syncope`) | Syncope, 19 objectives | `syncope.pptx` (Raaf, 98 slides) | Overlaps AS/HCM (Part 1), AV blocks/WPW (Arrhythmias). Questions stay on the syncope angle. |
| 3 | Inpatient & Long-Term Arrhythmia Management (`arrhythmia-management`) | 11 objectives | `chronic-arrhythmia-management.pptx` (127 slides) | Drug objective split per drug (amiodarone, dronedarone, sotalol, dofetilide), like Lipids. CHA2DS2-VASc gets calculation practice. |
| 4 | Infective Endocarditis & Pericardial Disease (`endocarditis-pericardial`) | 5 objectives | `endocarditis-pericardial.pptx` (73 slides) | Objective 5 split per condition: acute pericarditis, effusion, tamponade, constrictive. Duke criteria: major only. |
| 5 | Vascular Disease Part 1 (`vascular-disease-part-1`) and Part 2 (`vascular-disease-part-2`): two lectures, one per deck (Anna chose 2026-11-03) | Vascular, about 40 objectives under 8 headings | `vascular-disease-part-1.pptx` (150 slides: PAD, acute limb, gangrene, aneurysm, dissection, vasculitis, AVM) and `vascular-disease-part-2.pptx` (98 slides: venous insufficiency, phlebitis, VTE/PE) | The decks split exactly at the objective headings. Sections follow the headings either way. |
| 5b | Vascular Surgery (`vascular-surgery`), added 2026-11-06 at Anna's request | none in `objectives.txt` | `vascular-surgery.pptx` (Gardner, 50 slides; uploaded as "Vascular PP 2026SV") | Not the CV Surgery block (that one is CABG). Sections follow the deck outline. Listed right after Vascular Disease Part 2. |
| 6 | Shock, Pressors & Fluid Management (`shock-pressors-fluids`) | 20 objectives | `shock-pressors-fluids.pptx` (112 slides; added 2026-11-04) | |
| 7 | Arrhythmia Pharmacology (`arrhythmia-pharmacology`) | 11 objectives | `arrhythmia-pharmacology.pptx` (Scanlon, 62 slides; added 2026-11-04) | Confirms the adenosine 12 mg, amiodarone 150 mg and IV metoprolol 5 mg values used in Arrhythmias. |
| 8 | Cardiovascular Surgery | 9 objectives | **missing** | |

Not in Cardio Part 2: `Intro to Radiology II` is the Radiology course's Part Two
(ultrasound, MRI, nuclear medicine). Its deck is in `source-material/radiology-part-2/`.

Possible extras once lectures exist (only if Anna asks): a Cardio Part 2 Medications tool
(antiarrhythmics, rate control, anticoagulants, ACLS drugs, pressors, IE antibiotics),
Diseases and Concepts tools like Part 1.

## Built

| Lecture | Status |
|---|---|
| Arrhythmias | 38 sections (objective 6 split per brady rhythm, 9 into AF, flutter, MAT, AVNRT, AVRT, 20 per drug), 85 cards, 300 Test, 118 Apply (`node scripts/validate-arrhythmias.cjs`). AF, flutter and MAT detail comes from the Chronic Arrhythmia deck (slides 16–26, 46–49, 56). Defibrillation joules, the 12 mg adenosine repeat, the 150 mg second arrest amiodarone dose, IV metoprolol 5 mg doses and R-wave sync timing are AHA ACLS values marked "not on the slides" on their cards; check them against the Arrhythmia Pharmacology deck. |
| Syncope | 19 sections (one per objective; objective 10 built as Brugada syndrome), 37 cards, 145 Test, 53 Apply (`node scripts/validate-syncope.cjs`). Blanks the deck leaves for class (slide 22 carotid triggers, slide 24 positive massage, slide 89 10:20 rule) are filled from standard teaching and labeled on the cards. |
| Inpatient & Long-Term Arrhythmia Management | 17 sections (objective 3 split into presentation/workup, acute management, rate vs rhythm; objective 5 into classes plus one section each for amiodarone, dronedarone, sotalol, dofetilide; CHA2DS2-VASc calculation has its own section), 38 cards, 160 Test, 62 Apply (`node scripts/validate-arrhythmia-management.cjs`). Slide 118 (warfarin pros/cons) is blank, so that table is filled from standard teaching and labeled. Slide 14 gives about 10 bpm for POTS; the usual criterion is 30 or more, so the card flags it and no question tests the number. |
| Infective Endocarditis & Pericardial Disease | 13 sections (objective 1 split into risk factors, organisms, pathophysiology, presentation; objective 2 into workup + Duke, complications, treatment/surgery/course; objective 5 into acute pericarditis, effusion, tamponade, constrictive), 32 cards, 185 Test, 85 Apply (`node scripts/validate-endocarditis-pericardial.cjs`). Duke minor criteria (slide 31) read from the SmartArt data. The questions the deck asks aloud for class (slides 16, 35, 36, 40, 57, 59, 68) are answered from standard teaching and labeled. Slide 49 "HIB" read as HIV. |
| Vascular Disease Part 1 | 22 sections (one per objective under the PAD, Acute ischemic limb, Aneurysm and Aortic Dissection headings; the vasculitis objective split per disease: Kawasaki, Takayasu, Buerger, Raynaud; then AVM), 45 cards, 243 Test, 102 Apply (`node scripts/validate-vascular-disease-part-1.cjs`). Slide 85 (symptomatic AAA algorithm) read from the picture. Standard-teaching fills are labeled (Leriche 3 Ps, ABI uses higher brachial, fluoroquinolone/aorta link, Kawasaki CRASH and Burn, how much blood the abdomen holds). |
| Vascular Disease Part 2 | 19 sections (one per objective under Venous Insufficiency, Phlebitis and VTE; the diagnostic objective split into DVT workup, PE presentation, PE labs/EKG/CXR, PE imaging; the management objective into PE risk classes, anticoagulants, tPA/embolectomy/IVC filter, duration), 37 cards, 195 Test, 81 Apply (`node scripts/validate-vascular-disease-part-2.cjs`). Modified Wells (slide 57), PE algorithm (slide 59) and PIOPED table (slide 74) read from pictures. Only the MODIFIED Wells for PE and PERC are drilled as memorize items (per the objectives and speaker notes). |
| Shock, Pressors & Fluid Management | 30 sections (cardiogenic shock split into epidemiology/risk/etiology, clinical features, tests; objective 6 into the receptor overview plus one per pressor; devices into bedside lines and IABP/Swan-Ganz/LVAD; fluid forces into electrolytes/pressures and osmolality/tonicity; IV solutions into isotonic, hypotonic, hypertonic), 46 cards, 319 Test, 128 Apply (`node scripts/validate-shock-pressors-fluids.cjs`). Sits before Arrhythmia Pharmacology in the lecture list (official order). Deck slips labeled on the cards: divalent wording (slide 74), "right arterial" (55), ScVO2 (52), 20% vs 30% crystalloid retention (85, 99). |
| Arrhythmia Pharmacology | 25 sections (digoxin split into use/kinetics and toxicity; objective 6 into the action potential overview plus one per class; objective 7 into Na channel and beta blocker subclasses; objective 8 one per drug: procainamide, flecainide, metoprolol, sotalol, ibutilide, dofetilide, diltiazem, verapamil; amiodarone split into dosing and toxicity), 32 cards, 187 Test, 71 Apply (`node scripts/validate-arrhythmia-pharmacology.cjs`). Slide 61 "LV block" read as AV block. |
| Vascular Surgery | 8 sections following the deck outline (when to call a surgeon and inflow/outflow; options and grafts; complications and PAD follow-up; carotid anatomy and presentation; carotid treatment; carotid surgery complications and nerve injuries; amputation indications and levels; amputation complications), 20 cards, 137 Test, 55 Apply (`node scripts/validate-vascular-surgery.cjs`). Slides 9, 19, 20, 28–32, 39, 43–45 read from pictures. Deck uses asymptomatic 80–99% for CEA (some guidelines use 60–70%; the card says learn the deck number). Slide 38 notes say hypoglossal injury deviates the tongue contralaterally; standard teaching says toward the injured side, so the card flags it and no question tests the direction. Also added to Diseases (6 `vsurg-` entries, 47 questions), Concepts (6 `vsurgc-` concepts, 41 questions), and aspirin/clopidogrel tags in Medications (+3 questions). No scores or rhythms in this deck. |
