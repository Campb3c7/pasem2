/*
  Medications: Bradycardia, arrest & torsades drugs (Cardio Part 2). Source:
  arrhythmia-pharmacology.md slides 3-9, 21; arrhythmias.md slides 21,
  27-28, 44, 51, 56, 60, 136, 146-148. Epinephrine (arrest and shock) is in
  the pressors group. Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO2_MEDS_ACLS = L("meds2-acls", "Bradycardia, arrest & torsades", [

    Med("med-atropine", "Atropine", "Anticholinergic; first drug for unstable bradycardia", ["Arrhythmia Pharmacology", "Arrhythmias"], {
      uses: ul([
        "<strong>Symptomatic / unstable bradycardia</strong> (sinus brady, junctional escape).",
        "AV blocks that start <strong>at the AV node</strong>: <strong>1st degree and 2nd degree Mobitz I</strong>.",
        "Complete heart block: may try 1 mg while placing pacer pads, but infranodal blocks often do not respond.",
        "Temporizing bradycardia from digoxin toxicity."
      ]),
      moa: "<p><strong>Blocks acetylcholine</strong> (muscarinic) at smooth muscle, secretory glands and CNS. Removing vagal tone lets sympathetic tone win: <strong>faster SA node firing and better AV nodal conduction</strong> → higher HR and cardiac output; dries secretions.</p>" +
        Tbl(["Dose", ""], [["IV", "<strong>1 mg every 3–5 min, max total 3 mg</strong>"], ["Onset", "Immediate; peak 0.7–4 min"]]) +
        "<p>Hepatic metabolism, urine excretion; half-life more than doubles in the elderly.</p>",
      avoid: ul([
        "<strong>Not for Mobitz II or complete heart block</strong>: the block is below the AV node (infranodal), so it needs <strong>pacing</strong>.",
        "<strong>Heart transplant</strong>: no vagal innervation, so likely ineffective.",
        "Caution: <strong>acute angle-closure glaucoma</strong>, pyloric obstruction, <strong>urinary retention/BPH</strong>, mucus plugs in chronic lung disease.",
        "Caution: myocardial ischemia, HF, HTN: tachycardia can cause ischemia, MI or arrhythmia."
      ]),
      se: ul(["Tachycardia.", "<strong>Dry eyes and mouth, blurred vision, constipation, urinary retention</strong>."]),
      pearls: ul([
        "<strong>Overdose (anticholinergic toxidrome)</strong>: dilated pupils, warm dry skin, tachycardia, tremor, ataxia, delirium, coma.",
        "If atropine fails: transcutaneous or transvenous pacing, then a permanent pacemaker if needed."
      ]) + Mn("Anticholinergic overdose", "Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter.") +
        HY("Atropine 1 mg q3–5 min, max 3 mg. Mobitz II and 3rd degree → pace.")
    }, [
      Q("moa", "A hypotensive, dizzy patient has sinus bradycardia at 38. What dose of atropine?", ["1 mg IV every 3-5 minutes, max 3 mg", "0.5 mg IV once only", "6 mg rapid push", "1 mg/kg IV"], 0, "Atropine 1 mg IV q3-5 min, max total 3 mg."),
      Q("avoid", "Why is atropine unlikely to help Mobitz II or complete heart block?", ["The block is below the AV node and needs pacing", "Atropine is too slow", "It worsens the block", "It is contraindicated in all bradycardia"], 0, "Mobitz II and CHB originate below the AV node; atropine works on the SA and AV nodes."),
      Q("avoid", "A heart transplant recipient is bradycardic. Why might atropine fail?", ["The transplanted heart has no vagal innervation", "Transplant drugs block atropine", "The SA node is removed", "Atropine is toxic to the graft"], 0, "No vagal innervation in the transplanted heart, so blocking acetylcholine does little."),
      Q("avoid", "Which history is a caution for atropine?", ["Acute angle-closure glaucoma", "Hypothyroidism", "Asthma controlled on inhalers", "Hyperlipidemia"], 0, "Cautions: angle-closure glaucoma, pyloric obstruction, urinary retention (BPH), mucus plugs."),
      Q("se", "An elderly man with BPH got atropine and now cannot urinate. Why?", ["Anticholinergic urinary retention", "Atropine-induced kidney failure", "Hypovolemia", "Prostate infarction"], 0, "Atropine side effects: tachycardia, dry eyes/mouth, blurred vision, constipation, urinary retention."),
      Q("pearls", "Which picture fits atropine overdose?", ["Dilated pupils, warm dry skin, tachycardia, delirium", "Pinpoint pupils, sweating, bradycardia", "Yellow halos and nausea", "Tinnitus and seizures"], 0, "Atropine toxicity: mydriasis, warm dry skin, tachycardia, tremor, ataxia, delirium, coma."),
      Q("moa", "How does blocking acetylcholine raise the heart rate?", ["It removes vagal tone so sympathetic tone predominates", "It stimulates beta-1 receptors directly", "It blocks K+ channels", "It releases norepinephrine from the adrenals"], 0, "With parasympathetic inhibition, preexisting sympathetic stimulation predominates: faster SA node, better AV conduction."),
      Q("uses", "Which block responds best to atropine?", ["Mobitz I (Wenckebach)", "Mobitz II", "Infranodal complete heart block", "Ventricular escape rhythm"], 0, "Atropine is indicated for 1st degree and Mobitz I blocks, which are at the AV node.")
    ]),

    Med("med-magnesium", "Magnesium sulfate IV", "1–2 g IV for torsades de pointes", ["Arrhythmias", "Inpatient & Long-Term Arrhythmia Management", "Syncope"], {
      uses: ul([
        "<strong>Torsades de pointes</strong> (polymorphic VT with a long QT): <strong>1–2 g IV</strong>.",
        "Replacing low Mg2+ (and K+) on QT-prolonging antiarrhythmics and in NSVT work-up."
      ]),
      moa: "<p>Stabilizes the myocardial membrane and suppresses the early afterdepolarizations that trigger torsades, even when the serum Mg2+ is normal (standard teaching).</p>",
      avoid: ul(["<strong>Do not withhold defibrillation</strong>: pulseless torsades is shocked first."]),
      se: ul(["Flushing and hypotension with a fast push; high levels cause weakness and loss of reflexes (standard teaching)."]),
      pearls: ul([
        "<strong>Hypokalemia and hypomagnesemia</strong> are the most common reversible causes of NSVT and set up torsades.",
        "On sotalol, dofetilide or amiodarone: monitor QTc, K+ and Mg2+.",
        "Also stop the QT-prolonging drug (antiarrhythmics, antipsychotics, macrolides, quinolones, azoles, ondansetron)."
      ]) + HY("Torsades → magnesium 1–2 g IV; pulseless → shock first.")
    }, [
      Q("uses", "A patient on dofetilide has polymorphic VT with twisting QRS axis and a long QT, with a pulse. Drug?", ["Magnesium sulfate 1-2 g IV", "Amiodarone 300 mg", "Adenosine 6 mg", "Procainamide"], 0, "Torsades de pointes: add magnesium 1-2 g IV."),
      Q("avoid", "A patient in torsades loses his pulse. What comes first?", ["Defibrillation", "Magnesium and wait", "Atropine", "Adenosine"], 0, "Do not withhold defibrillation for pulseless torsades."),
      Q("pearls", "Which two electrolytes are the most common reversible causes of NSVT?", ["Potassium and magnesium", "Sodium and chloride", "Calcium and phosphate", "Bicarbonate and sodium"], 0, "Electrolyte derangements, most commonly K+ and Mg2+."),
      Q("pearls", "What should be monitored for all Class III antiarrhythmics?", ["QTc, potassium and magnesium", "INR and platelets", "Glucose and A1c", "TSH only"], 0, "All Class III drugs prolong the QT and can cause torsades: monitor QTc, K+ and Mg2+.")
    ])
  ]);
}());
