/*
  Medications: POTS, sinus tachycardia & Raynaud's drugs (Cardio Part 2).
  Source: chronic-arrhythmia-management.md slides 10, 15; syncope.md slide 19;
  vascular-disease-part-1.md slides 127, 131. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO2_MEDS_OTHER = L("meds2-other", "POTS, sinus tach & Raynaud's", [

    Med("med-midodrine", "Midodrine", "Selective α1 agonist that raises BP; for POTS and orthostatic symptoms", ["Inpatient & Long-Term Arrhythmia Management", "Syncope"], {
      uses: ul(["<strong>POTS</strong>: part of a combination with exercise, oral hydration, fludrocortisone and low-dose BB.", "Orthostatic hypotension symptoms (standard teaching)."]),
      moa: "<p><strong>Selective α1 agonist</strong>: vasoconstriction and a <strong>rise in BP</strong>.</p>",
      avoid: ul(["<strong>Supine hypertension</strong>: do not take before lying down (standard teaching)."]),
      se: ul(["Supine hypertension, scalp tingling, goosebumps, urinary retention (standard teaching)."]),
      pearls: ul(["POTS has no single best treatment: usually a combination.", "Non-drug first: hydrate well (2–2.5 L), salt if needed, avoid triggers."]) +
        HY("Midodrine = α1 agonist = squeeze vessels, raise BP.")
    }, [
      Q("moa", "How does midodrine help POTS?", ["Selective alpha-1 agonist causing vasoconstriction and a rise in BP", "Mineralocorticoid that retains salt", "Beta blocker that slows the heart", "Funny-current blocker"], 0, "Midodrine is a selective α1 agonist."),
      Q("avoid", "When should a patient not take midodrine?", ["Right before lying down, because of supine hypertension", "With breakfast", "Before standing all day", "With water"], 0, "Supine hypertension is the main concern (standard teaching)."),
      Q("uses", "Which combination fits the lecture's POTS approach?", ["Exercise, hydration, midodrine, fludrocortisone, low-dose BB", "Amiodarone and warfarin", "Digoxin and diltiazem", "Pacemaker first"], 0, "POTS treatment is likely a combination of these."),
      Q("pearls", "What non-drug steps come first for reflex syncope and POTS?", ["Hydration (2-2.5 L), salt if needed, avoiding triggers", "Bed rest", "Fluid restriction", "Caffeine loading"], 0, "Initial non-pharm treatment: avoid triggers, lie down with prodrome, hydrate well, add salt if needed.")
    ]),

    Med("med-fludrocortisone", "Fludrocortisone", "Mineralocorticoid that expands volume for POTS", ["Inpatient & Long-Term Arrhythmia Management"], {
      uses: ul(["<strong>POTS</strong> (and orthostatic intolerance) as part of combination therapy."]),
      moa: "<p><strong>Mineralocorticoid</strong>: the kidney holds onto sodium and water, expanding plasma volume (standard teaching).</p>",
      avoid: ul(["Heart failure or edema states (volume load) (standard teaching)."]),
      se: ul(["<strong>Hypokalemia</strong>, edema, hypertension, headache (standard teaching)."]),
      pearls: ul(["Not an anti-inflammatory steroid: it acts like aldosterone."]) +
        HY("Fludrocortisone = salt and water retention → more volume. Watch K+.")
    }, [
      Q("moa", "What kind of drug is fludrocortisone?", ["A mineralocorticoid", "An alpha-1 agonist", "A beta blocker", "A glucocorticoid used for inflammation"], 0, "Fludrocortisone is a mineralocorticoid used in POTS."),
      Q("se", "Which lab should be watched on fludrocortisone?", ["Potassium (hypokalemia)", "INR", "TSH", "Digoxin level"], 0, "Mineralocorticoid action wastes potassium (standard teaching)."),
      Q("moa", "How does fludrocortisone help POTS symptoms?", ["Expands plasma volume through sodium and water retention", "Slows the SA node", "Constricts arteries directly", "Blocks acetylcholine"], 0, "More volume helps the exaggerated postural tachycardia (standard teaching)."),
      Q("avoid", "Which patient is a poor fludrocortisone candidate?", ["Heart failure with edema", "A 20-year-old with POTS", "Orthostatic intolerance with normal heart", "Low-normal BP"], 0, "Volume retention worsens HF (standard teaching).")
    ]),

    Med("med-ivabradine", "Ivabradine", "Funny-current (If) blocker that slows the SA node; best for inappropriate sinus tachycardia (off label)", ["Inpatient & Long-Term Arrhythmia Management"], {
      uses: ul(["<strong>Inappropriate sinus tachycardia</strong>: <strong>more effective than low-dose metoprolol</strong>, but <strong>off label in the US</strong>.", "Approved use is HFrEF (standard teaching)."]),
      moa: "<p>Blocks the <strong>If (\"funny\") current</strong> of the SA node: slows the phase 4 slope and heart rate <strong>without lowering BP or contractility</strong> (standard teaching).</p>",
      avoid: ul(["Bradycardia, sick sinus syndrome, AF (it needs sinus rhythm), pregnancy (standard teaching)."]),
      se: ul(["Bradycardia, <strong>luminous visual phenomena (phosphenes)</strong>, AF (standard teaching)."]),
      pearls: ul(["Inappropriate sinus tach is a diagnosis of exclusion, often in young women: confirm sinus (not atrial) tach on a 12-lead first."]) +
        HY("Inappropriate sinus tach: metoprolol (usual) or ivabradine (better, off label).")
    }, [
      Q("uses", "A 26-year-old woman has inappropriate sinus tachycardia not helped by low-dose metoprolol. Which drug is more effective (off label)?", ["Ivabradine", "Amiodarone", "Flecainide", "Digoxin"], 0, "Ivabradine is more efficacious for inappropriate sinus tach, though off label in the US."),
      Q("moa", "What does ivabradine block?", ["The funny current (If) in the SA node", "Beta-1 receptors", "L-type calcium channels", "Fast sodium channels"], 0, "Ivabradine is an If blocker (standard teaching)."),
      Q("se", "Which side effect is unique to ivabradine?", ["Luminous visual phenomena (phosphenes)", "Gingival hyperplasia", "Blue-gray skin", "Drug-induced lupus"], 0, "Phosphenes: brightness in part of the visual field (standard teaching)."),
      Q("pearls", "What must be confirmed before diagnosing inappropriate sinus tachycardia?", ["That it is sinus tach, not atrial tach, on a 12-lead EKG", "A positive tilt table", "A high troponin", "Pre-excitation"], 0, "First step is confirming sinus tachycardia with a 12-lead.")
    ]),

    Med("med-ccb-raynaud", "Calcium channel blockers for Raynaud's", "Dihydropyridine CCBs (e.g. nifedipine, amlodipine) to dilate digital arteries", ["Vascular Disease Part 1"], {
      uses: ul(["<strong>Raynaud's phenomenon</strong>: initial treatment is <strong>trigger avoidance (gloves, warmth) + a calcium channel blocker</strong>.", "Buerger disease: vasodilators (like CCBs) may ease ischemia but are investigational; <strong>smoking cessation is the only thing that halts it</strong>."]),
      moa: "<p>Relax vascular smooth muscle → <strong>vasodilation</strong> of the spasming digital arteries. Dihydropyridines (nifedipine, amlodipine) are the usual choice (standard teaching).</p>",
      avoid: ul(["Hypotension (standard teaching)."]),
      se: ul(["Peripheral edema, flushing, headache, reflex tachycardia (standard teaching)."]),
      pearls: ul(["Raynaud's color sequence: <strong>white → blue → red</strong>.", "Full DHP-CCB card (hypertension uses) is in Cardio Part 1 Medications."]) +
        HY("Raynaud's → gloves + CCB. Buerger → stop smoking.")
    }, [
      Q("uses", "A 22-year-old woman's fingers turn white, then blue, then red in the cold. Drug if avoidance is not enough?", ["A calcium channel blocker such as nifedipine", "A beta blocker", "Warfarin", "Cilostazol"], 0, "Raynaud's: avoid triggers and use calcium channel blockers for vasodilation."),
      Q("pearls", "What is the only way to halt Buerger disease?", ["Smoking cessation", "Calcium channel blockers", "Warfarin", "Steroids"], 0, "Smoking cessation is the only way to halt progression; vasodilators are investigational."),
      Q("moa", "How do CCBs help Raynaud's?", ["Vasodilation of the spasming digital arteries", "Thinning the blood", "Slowing the heart", "Reducing inflammation"], 0, "CCBs cause vasodilation."),
      Q("se", "Which side effect is common with dihydropyridine CCBs?", ["Peripheral edema", "Bradycardia and heart block", "Constipation as the main effect", "Bronchospasm"], 0, "DHP CCBs: edema, flushing, headache, reflex tachycardia (standard teaching).")
    ])
  ]);
}());
