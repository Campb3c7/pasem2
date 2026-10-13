# Thyroid lecture context for future chats

These are **reference materials only**. No study-tool data or interface was changed.
The original PowerPoints are too large for the user's upload workflow, so their
content is stored as searchable Markdown plus separate original-quality visuals.

## Start here

- [Thyroid Disease: all 182 slides](text/thyroid-disease.md)
- [Thyroid Pharmacology: all 21 slides](text/thyroid-pharmacology.md)
- [Official learning objectives](objectives.txt) — see “Thyroid Disease & Pharmacology Objectives”.
- [Supplemental comparison worksheet](text/thyroid-disease-supplemental-worksheet.md)

Read the full source extraction for the requested topic, **including its linked
images**. Do not use this index as a substitute for the source slides. Image-based
diagrams and tables remain images so their details are retained without guessing.
All 71 embedded media files are preserved byte-for-byte in `assets/thyroid-disease/`
and `assets/thyroid-pharmacology/`, including media not displayed by an active slide.
Each folder's `manifest.json` records original file sizes, SHA-256 hashes, and
extraction counts. Neither deck contains speaker-note text.

Lecture claims, doses, and terminology are preserved as taught; this archive does
not silently revise them into current guidelines. When asked to build teaching or
clinical material, distinguish lecture content from any separately verified updates.

## Thyroid Disease topic map

| Slides | Context |
|---|---|
| 1–3 | Lecture title, outline, and anatomy/physiology introduction |
| 4–16 | Thyroid location, follicles/colloid, iodine, thyroglobulin, synthesis, MIT/DIT coupling, T4/T3, peripheral conversion, binding proteins and free hormone |
| 17–27 | Hypothalamus–pituitary–thyroid axis, TRH/TSH, negative feedback, lecture analogy and review prompts |
| 28–33 | Metabolic, cardiovascular, GI, neuromuscular, neurologic and developmental effects |
| 34–48 | TSH/free versus total hormone, biotin and pregnancy caveats, thyroglobulin, antibodies, screening, ultrasound/MRI/CT, RAIU and FNA |
| 49–59 | Primary versus central hypothyroidism, causes, manifestations, diagnostic patterns and associated laboratory abnormalities |
| 60–78 | Overt/subclinical primary hypothyroidism, replacement and follow-up, maternal disease, Hashimoto's, iatrogenic disease, iodine deficiency/excess and drug causes |
| 79–87 | Central hypothyroidism, pituitary/hypothalamic causes, other hormone deficits, imaging, anticonvulsant caveat, free-T4 monitoring and adrenal assessment before replacement |
| 88–96 | Myxedema coma: triggers, hypothermia/mental status changes, masked infection, evaluation, ICU treatment, replacement doses, glucocorticoids, support and monitoring |
| 97–103 | Congenital hypothyroidism: screening, developmental/synthetic defects, iodine, maternal support, infant presentation, lab patterns and treatment |
| 104–118 | Primary/central hyperthyroidism, causes, symptoms, complications, laboratory patterns and further workup |
| 119–138 | Graves' disease: autoimmunity, orbitopathy evaluation/severity/treatment, goiter, pretibial myxedema, diagnostic tests, beta blockers, thionamides, radioiodine, surgery and patient-specific choices |
| 139–142 | Toxic multinodular goiter/Plummer disease and toxic adenoma: population, autonomous nodules, antibody/uptake findings and definitive treatment |
| 143–150 | Thyroid storm: triggers, multisystem presentation, urgent evaluation, ICU support, five treatment components, stabilization and prognosis |
| 151–159 | Destructive thyroiditis course and workup; painless, postpartum, subacute/de Quervain and infectious/suppurative forms |
| 160–165 | Goiter: functional categories, causes, compression, evaluation and indications for surgery |
| 166–172 | Solitary nodules: differential, malignancy risks, examination, ultrasound/FNA, uptake studies and surveillance |
| 173–182 | Papillary, follicular, anaplastic, medullary and thyroid lymphoma: presentation, spread, markers, MEN2/RET workup, treatment and prognosis |

## Thyroid Pharmacology topic map

| Slides | Drug and details retained |
|---|---|
| 1 | Lecture title and lecturer |
| 2–5 | Levothyroxine: synthetic T4, brands, initial dose/titration, pregnancy/age/weight adjustments, onset, weight-loss boxed warning, cardiac effects, empty-stomach administration, calcium/iron separation and manufacturer consistency |
| 6–8 | Liothyronine: synthetic T3, brands, dosing including elderly/CV disease, faster onset, potency/toxicity, boxed warning, narrow therapeutic index and prescription-name caution |
| 9 | Desiccated thyroid extract: porcine source, Armour, grains/T4/T3 content, calcitonin and dose inconsistency |
| 10–12 | Methimazole: Tapazole, synthesis inhibition, mild/severe/storm dosing and alternate routes, TFT/CBC/LFT monitoring, TSH lag, blood/liver/pancreatic/vasculitic adverse effects, iodine sequencing and pregnancy concerns |
| 13–15 | PTU: synthesis and peripheral-conversion inhibition, initial/maintenance dosing, monitoring, liver boxed warning, other serious adverse effects and first-trimester/fetal considerations |
| 16–17 | Atenolol: Tenormin, beta-1 selectivity, initial/max doses, target heart rate, discontinuation, adverse effects and lecture-listed contraindications |
| 18–19 | Propranolol: Inderal, nonselective beta blockade, daily dosing, storm IV dosing and cardiac monitoring, adverse effects and lecture-listed contraindications |
| 20 | Graves' orbitopathy steroids: oral prednisone dose/response/taper and long-term risks, weekly IV methylprednisolone pulses, IV dexamethasone dose while preparing orbital decompression |
| 21 | Closing slide and attribution |

## Reproducibility

`scripts/extract-thyroid-context.py` extracts editable text, table cells, hyperlinks,
alt text, chart XML if present, visual references, speaker notes if present, and all
embedded media. The large PPTX files are intentionally not committed. To reproduce,
run that script with a local directory containing the two original filenames shown
at the top of the extracted documents. Original source hashes are in the manifests.
