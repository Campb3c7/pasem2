/*
  Medications: AV nodal blockers & rate control (Cardio Part 2). Source:
  arrhythmia-pharmacology.md slides 2, 10-21, 36-41, 57-61;
  chronic-arrhythmia-management.md slides 49, 55-56; arrhythmias.md
  slides 96, 113-114, 122. Hypertension uses of the same drugs live in the
  Cardio Part 1 Medications tool. Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO2_MEDS_AV_NODAL = L("meds2-av-nodal", "AV nodal blockers & rate control", [

    Med("med-adenosine", "Adenosine (Adenocard)", "Miscellaneous antiarrhythmic; 6 mg then 12 mg rapid IV push for narrow-complex PSVT", ["Arrhythmia Pharmacology", "Arrhythmias"], {
      uses: ul([
        "<strong>Stable, regular, narrow-complex PSVT</strong>: AVNRT and orthodromic AVRT.",
        "Order for SVT: <strong>vagal maneuvers first, then adenosine</strong>, then a beta blocker or diltiazem/verapamil.",
        "Breaks the re-entry circuit in over 80% of AVNRT."
      ]),
      moa: "<p>Briefly <strong>blocks the AV node</strong> (A1 receptors): <strong>opens K+ channels</strong> (K+ rushes out, the main effect) and <strong>inhibits Ca2+ influx</strong>, so AV nodal conduction slows and the refractory period lengthens. That interrupts re-entry through the AV node and restores NSR.</p>" +
        Tbl(["Dose", "How"], [
          ["<strong>6 mg IV</strong>", "Rapid IV push over 1–2 seconds, then a <strong>20 mL saline flush</strong>"],
          ["<strong>12 mg IV</strong>", "If no effect in 1–2 minutes; may repeat 12 mg once"]
        ]) + "<p>Onset immediate; <strong>half-life under 10 seconds</strong>.</p>",
      avoid: ul([
        "<strong>Wide-complex tachycardia or an accessory pathway (WPW)</strong>, including pre-excited AF: blocking the AV node sends impulses down the pathway, risking VF and arrest.",
        "<strong>Heart block</strong>.",
        "<strong>Active bronchospasm</strong>: asthma, COPD, reactive airway disease.",
        "Known hypersensitivity."
      ]),
      se: ul([
        "<strong>Flushing</strong>, lightheadedness, nausea, sweating, nervousness, numbness.",
        "<strong>Feeling of impending doom</strong> (warn the patient first).",
        "Rare but serious: <strong>prolonged asystole</strong>, new heart block, cardiac ischemia."
      ]),
      pearls: ul([
        "Toxicity is minimal because the half-life is so short.",
        "It must be pushed fast with a flush or it is broken down before it reaches the heart.",
        "Narrow and regular = adenosine; wide or pre-excited = avoid."
      ]) + HY("Adenosine: 6 → 12 → 12 mg, rapid push + flush, half-life under 10 seconds, never in WPW.")
    }, [
      Q("uses", "A stable patient has a regular narrow-complex tachycardia at 180 that did not break with vagal maneuvers. Next drug?", ["Adenosine 6 mg rapid IV push", "Amiodarone 300 mg IV", "Atropine 1 mg IV", "Digoxin IV"], 0, "Stable regular narrow-complex PSVT: vagal maneuvers, then adenosine 6 mg rapid push with a saline flush."),
      Q("moa", "Adenosine 6 mg did not convert the SVT after 2 minutes. What is the next dose?", ["12 mg rapid IV push", "6 mg slow IV over 10 minutes", "3 mg IV", "18 mg IV"], 0, "If 6 mg fails in 1-2 minutes, give 12 mg; 12 mg may be repeated once."),
      Q("moa", "Why is adenosine pushed in 1-2 seconds and followed by a 20 mL saline flush?", ["Its half-life is under 10 seconds", "It is irritating to veins", "It needs to be diluted before it works", "It precipitates with saline otherwise"], 0, "With a half-life under 10 seconds, adenosine must reach the heart fast or it is gone."),
      Q("avoid", "Which patient should NOT get adenosine?", ["Pre-excited atrial fibrillation (WPW)", "AVNRT at 190 bpm", "Orthodromic AVRT", "Regular narrow-complex SVT after failed vagal maneuvers"], 0, "Blocking the AV node in an accessory-pathway rhythm pushes impulses down the pathway: risk of VF and arrest."),
      Q("avoid", "A patient with SVT also has an active asthma flare with wheezing. Which drug is contraindicated?", ["Adenosine", "Diltiazem", "Synchronized cardioversion", "Vagal maneuvers"], 0, "Active bronchospasm (asthma, COPD) is a contraindication to adenosine."),
      Q("se", "Right after adenosine, a patient says she feels like she is about to die and her face is flushed. What is this?", ["Expected, short-lived adenosine side effects", "Anaphylaxis needing epinephrine", "A stroke", "Digoxin toxicity"], 0, "Flushing and a feeling of impending doom are classic and pass within seconds."),
      Q("moa", "What is adenosine's main cellular effect on the AV node?", ["Opens K+ channels so K+ leaves the cell, and inhibits Ca2+ influx", "Blocks fast Na+ channels", "Blocks beta-1 receptors", "Inhibits the Na/K ATPase"], 0, "Adenosine activates K+ channels (main effect) and inhibits Ca2+ influx, slowing AV conduction."),
      Q("se", "Which serious adverse effect of adenosine is rare but reported?", ["Prolonged asystole", "Pulmonary fibrosis", "Drug-induced lupus", "Gray-blue skin"], 0, "Reported severe effects: prolonged asystole, new heart block and cardiac ischemia.")
    ]),

    Med("med-bb-arrhythmia", "Beta blockers for arrhythmias (Class II)", "Metoprolol (Lopressor, Toprol XL), esmolol, atenolol, bisoprolol; non-selective propranolol, carvedilol, sotalol, labetalol, timolol", ["Arrhythmia Pharmacology", "Arrhythmias", "Inpatient & Long-Term Arrhythmia Management", "Syncope"], {
      uses: ul([
        "<strong>Rate control in AF/flutter with RVR</strong> (stable). <strong>IV metoprolol is the drug of choice with ischemia, MI or CAD</strong>.",
        "Long-term AF rate control: <strong>BB or non-DHP CCB are first line</strong>.",
        "<strong>MAT</strong> in patients without heart failure or bronchospasm.",
        "<strong>Symptomatic PACs and PVCs</strong> (first line for PVCs; metoprolol 25 mg BID for persistent PAC symptoms).",
        "AVNRT and orthodromic AVRT: <strong>third line</strong> after vagal maneuvers and adenosine.",
        "<strong>VT with structural heart disease</strong>: primary long-term drug (amiodarone or sotalol next).",
        "<strong>Inappropriate sinus tachycardia</strong>: low-dose metoprolol. <strong>POTS</strong>: low-dose BB for palpitations."
      ]),
      moa: "<p>Block sympathetic stimulation at β receptors: <strong>slow the phase 4 slope</strong> of the SA node and <strong>slow AV nodal conduction</strong> with a longer AV refractory period. Some have membrane-stabilizing activity.</p>" +
        Tbl(["Selective (β1)", "Non-selective (β1 + β2)"], [["Metoprolol, atenolol, esmolol, bisoprolol", "Carvedilol, propranolol, sotalol, labetalol, timolol"]]) +
        Tbl(["Metoprolol dose", ""], [["IV", "<strong>5 mg every 5 min, up to 3 doses</strong>"], ["PO", "25 mg BID"]]),
      avoid: ul([
        "<strong>Sick sinus syndrome</strong>, <strong>2nd or 3rd degree AV block</strong> without a pacemaker.",
        "<strong>Decompensated heart failure</strong>, hypotension, <strong>cardiogenic shock</strong> (negative inotrope blocks the needed tachycardia).",
        "<strong>Pre-excited AF / WPW</strong> (AV nodal blocker).",
        "Never give IV BB and IV verapamil/diltiazem together.",
        "Non-selective agents: asthma and COPD (bronchospasm).",
        "<strong>Constrictive pericarditis</strong>: tachycardia is protective, so avoid BB and CCB."
      ]),
      se: ul([
        "Bradycardia, hypotension, <strong>1st, 2nd or 3rd degree AV block</strong> (usually resolves with dose cut or stopping).",
        "<strong>Depression, fatigue, sexual dysfunction</strong>, less exercise tolerance.",
        "Bronchospasm with non-selective agents.",
        "Can cause syncope from bradycardia, especially combined with other nodal drugs."
      ]),
      pearls: ul([
        "<strong>Never stop abruptly</strong> in CAD: worse ischemia, acute MI, VT and sudden death.",
        "<strong>Overdose</strong>: bradycardia, hypotension, low cardiac output, cardiogenic shock, bronchospasm, seizures, coma; a severely poisoned heart may stop responding to drugs and pacing (asystole).",
        "Exclude pre-excitation before using a BB or CCB for AF.",
        "Hypertension, HFrEF and post-MI uses are in Cardio Part 1 Medications."
      ]) + HY("Rate control with CAD or MI → IV metoprolol 5 mg q5 min × 3.")
    }, [
      Q("uses", "A stable patient with known CAD is in AF with RVR at 140. Which rate-control drug is preferred?", ["IV metoprolol", "IV digoxin", "IV adenosine", "IV procainamide"], 0, "Metoprolol IV boluses are the drug of choice with cardiac ischemia, infarction or CAD."),
      Q("moa", "What is the IV metoprolol dose for AF with RVR?", ["5 mg IV every 5 minutes, up to 3 doses", "25 mg IV once", "1 mg IV every 3-5 minutes up to 3 mg", "0.25 mg/kg IV bolus"], 0, "Metoprolol IV: 5 mg every 5 minutes up to 3 doses; PO 25 mg BID."),
      Q("avoid", "Which condition is a contraindication to metoprolol?", ["Decompensated heart failure", "Stable AF with RVR", "Symptomatic PVCs", "Inappropriate sinus tachycardia"], 0, "Contraindications: SSS, 2nd/3rd degree block without a pacer, decompensated HF, hypotension, hypersensitivity."),
      Q("uses", "Which drug class is first line for symptomatic PVCs?", ["Beta blockers", "Class IC antiarrhythmics", "Digoxin", "Adenosine"], 0, "PVCs: beta blockers first; non-DHP CCBs are the alternative; flecainide or amiodarone if those fail."),
      Q("pearls", "A patient with CAD stops his beta blocker suddenly. What is he at risk for?", ["Worse ischemia, acute MI, VT and sudden death", "Hyperkalemia", "Torsades from QT prolongation", "Pulmonary fibrosis"], 0, "Beta blocker withdrawal in CAD can cause acute MI, serious ventricular arrhythmias and sudden cardiac death."),
      Q("se", "A patient on metoprolol develops a new PR of 260 ms. What usually fixes it?", ["Lowering the dose or stopping the drug", "Adding verapamil", "Adding digoxin", "Atropine every day"], 0, "BB-related AV block usually resolves with dose reduction or discontinuation."),
      Q("uses", "Which beta blocker use comes from the Inappropriate Sinus Tachycardia lecture?", ["Low-dose metoprolol", "High-dose propranolol for migraine", "IV esmolol infusion", "Sotalol loading"], 0, "Inappropriate sinus tachycardia is generally treated with low-dose metoprolol; ivabradine is more effective but off label."),
      Q("uses", "A patient has MAT with COPD and active bronchospasm. Why is metoprolol a poor choice?", ["Beta blockade can worsen bronchospasm; use diltiazem or verapamil", "Metoprolol speeds up MAT", "Metoprolol causes torsades", "Metoprolol is only IV"], 0, "Metoprolol is for MAT without HF or bronchospasm; with bronchospasm use a non-DHP CCB."),
      Q("pearls", "Which finding fits beta blocker overdose?", ["Bradycardia, hypotension and cardiogenic shock", "Tachycardia and hypertension", "Hyperthermia and dry skin", "Torsades with a long QT"], 0, "BB overdose: bradycardia, hypotension, low CO, cardiogenic shock, bronchospasm, seizures, coma.")
    ]),

    Med("med-diltiazem", "Diltiazem (Cardizem)", "Non-DHP CCB (Class IV); the usual first drug for AF/flutter rate control", ["Arrhythmia Pharmacology", "Inpatient & Long-Term Arrhythmia Management", "Arrhythmias", "Vascular Disease Part 1"], {
      uses: ul([
        "<strong>Rate control in AF/flutter with RVR</strong>: <strong>drug of choice for most</strong> (10–20 mg IV bolus, then a titrated drip for HR &lt; 100). Can skip the bolus if BP is soft.",
        "<strong>MAT</strong> in patients with bronchospasm (when the cause is not yet fixed).",
        "<strong>AVNRT and orthodromic AVRT</strong> after vagal maneuvers and adenosine.",
        "Symptomatic PACs and PVCs.",
        "Aortic dissection anti-impulse therapy <strong>only if beta blockers are contraindicated</strong>."
      ]),
      moa: "<p>Blocks <strong>L-type Ca2+ channels</strong> in the SA and AV nodes, whose phase 0 is calcium-dependent: <strong>slows AV conduction and lengthens AV refractoriness</strong>, lowering the heart rate. Non-DHPs act more on the heart, with less vasodilation than DHPs.</p>" +
        Tbl(["Route", "Dose"], [["IV", "<strong>0.25 mg/kg bolus</strong> (usually 10–20 mg), then <strong>5–10 mg/hr</strong> infusion titrated to rate"], ["PO", "120–480 mg/day in 3–4 divided doses"]]),
      avoid: ul([
        "<strong>AF/flutter with an accessory pathway</strong> (risk of VF).",
        "SSS, AV block, hypotension, <strong>ventricular tachycardia</strong>.",
        "<strong>Recent beta blocker</strong> (IV BB + IV CCB → profound bradycardia and block).",
        "Severe heart failure."
      ]),
      se: ul(["Bradycardia, dizziness, fatigue.", "<strong>Peripheral edema</strong>, vasodilation.", "Maculopapular rash (cutaneous sensitivity)."]),
      pearls: ul([
        "First line for long-term rate control with BBs; a frail elderly patient is often managed with rate control only.",
        "Hypertension uses are in Cardio Part 1 Medications."
      ]) + HY("Most stable AF with RVR → diltiazem 0.25 mg/kg IV, then a drip.")
    }, [
      Q("uses", "A stable 60-year-old without CAD or HF is in AF with RVR at 150. Which drug is the usual choice?", ["Diltiazem IV bolus then drip", "Adenosine 6 mg", "Amiodarone 300 mg push", "Atropine"], 0, "Cardizem IV bolus then titrated drip is the drug of choice for most; metoprolol if there is CAD or ischemia."),
      Q("moa", "What is the IV diltiazem bolus dose?", ["0.25 mg/kg (usually 10-20 mg)", "6 mg rapid push", "1 mg/kg", "150 mg over 10 minutes"], 0, "Diltiazem 0.25 mg/kg IV (10-20 mg), then 5-10 mg/hr infusion."),
      Q("avoid", "A patient in AF with a delta wave and a wide, bizarre, irregular rhythm at 240. Why avoid diltiazem?", ["AV nodal block drives conduction down the accessory pathway and can cause VF", "It causes torsades", "It is too slow to work", "It raises BP"], 0, "AF/flutter with an accessory pathway is a contraindication: risk of VF."),
      Q("avoid", "Which pairing should never be given together IV?", ["Diltiazem and a beta blocker", "Diltiazem and heparin", "Metoprolol and aspirin", "Adenosine and saline"], 0, "Recent beta blocker use is a contraindication to IV diltiazem."),
      Q("se", "Which side effect is typical of diltiazem?", ["Peripheral edema", "Pulmonary fibrosis", "Halos and yellow vision", "Drug-induced lupus"], 0, "Diltiazem: bradycardia, rash, peripheral edema, dizziness, fatigue, vasodilation."),
      Q("uses", "In aortic dissection, when is diltiazem used for anti-impulse therapy?", ["Only if beta blockers are contraindicated", "Always before esmolol", "Only after nitroprusside", "Never"], 0, "Esmolol or labetalol come first; verapamil or diltiazem are alternatives if BBs are contraindicated."),
      Q("moa", "Why do non-DHP CCBs slow the AV node more than the ventricle?", ["Nodal phase 0 depends on Ca2+, while ventricular phase 0 depends on Na+", "They block Na+ channels in the node", "They stimulate the vagus nerve", "They block K+ channels"], 0, "SA/AV nodal depolarization is calcium-dependent, so L-type Ca2+ blockade slows nodal conduction.")
    ]),

    Med("med-verapamil", "Verapamil (Calan, Verelan)", "Non-DHP CCB (Class IV); same rhythm uses as diltiazem, more negative inotropy", ["Arrhythmia Pharmacology", "Arrhythmias", "Vascular Disease Part 1"], {
      uses: ul([
        "Rate control in AF/flutter with RVR.",
        "MAT when bronchospasm limits beta blockers.",
        "AVNRT and orthodromic AVRT after vagal maneuvers and adenosine.",
        "Symptomatic PACs and PVCs.",
        "Dissection anti-impulse therapy if beta blockers are contraindicated."
      ]),
      moa: "<p>L-type Ca2+ channel blocker: slows AV nodal conduction and raises the AV refractory period; lowers heart rate and contractility.</p>" +
        Tbl(["Route", "Dose"], [["IV", "<strong>5–10 mg over ≥ 2 min</strong>; may repeat 10 mg after 15–30 min"], ["PO", "40 mg 3–4 times daily, titrated to rate"]]),
      avoid: ul([
        "<strong>Concurrent beta blocker</strong>.",
        "<strong>HFrEF</strong> (strong negative inotrope).",
        "<strong>AF/flutter with an accessory pathway (WPW)</strong>.",
        "SND, SSS or AV block without a pacemaker; <strong>ventricular tachycardia</strong>; hypotension."
      ]),
      se: ul([
        "Bradycardia and AV block (the slide's \"LV block\").",
        "<strong>Decompensated HF and pulmonary edema</strong>.",
        "<strong>Constipation</strong> (classic), peripheral edema, headache."
      ]),
      pearls: ul([
        "Wide-complex tachycardia of unknown type is treated as VT: verapamil can cause collapse.",
        "Hypertension uses are in Cardio Part 1 Medications."
      ]) + HY("Verapamil: constipation, worse HFrEF, never with a beta blocker or in VT/WPW.")
    }, [
      Q("moa", "How is IV verapamil given for SVT?", ["5-10 mg over at least 2 minutes; may repeat 10 mg in 15-30 minutes", "6 mg rapid push with a flush", "0.25 mg/kg then 5-10 mg/hr", "300 mg IV push"], 0, "Verapamil IV: 5-10 mg over ≥ 2 minutes, repeat 10 mg after 15-30 minutes if needed."),
      Q("avoid", "A patient with an EF of 25% needs AF rate control. Which drug should be avoided?", ["Verapamil", "Amiodarone", "Digoxin", "Heparin"], 0, "Verapamil is contraindicated in HFrEF and can cause decompensated HF and pulmonary edema."),
      Q("se", "Which side effect is most classically tied to verapamil?", ["Constipation", "Cough", "Gingival bleeding", "Photosensitivity"], 0, "Verapamil: bradycardia, AV block, HF/pulmonary edema, peripheral edema, constipation, headache."),
      Q("avoid", "A wide-complex regular tachycardia at 170 in a 70-year-old with prior MI. Why not verapamil?", ["It is contraindicated in VT and can cause collapse", "It is too short-acting", "It causes lupus", "It only works in children"], 0, "Ventricular tachycardia is a contraindication to verapamil."),
      Q("avoid", "Which medication combination is a verapamil contraindication?", ["Concurrent beta blocker use", "Concurrent aspirin", "Concurrent statin", "Concurrent PPI"], 0, "Verapamil plus a beta blocker risks profound bradycardia and heart block."),
      Q("uses", "Where does verapamil fall in AVNRT treatment?", ["After vagal maneuvers and adenosine", "Before vagal maneuvers", "Only after cardioversion fails", "Never used in AVNRT"], 0, "AVNRT: vagal maneuvers, adenosine, then IV CCB (verapamil, diltiazem) or IV BB.")
    ]),

    Med("med-digoxin", "Digoxin (Lanoxin, Digitek, Digox)", "Cardiac glycoside; vagal AV slowing; narrow therapeutic window", ["Arrhythmia Pharmacology", "Inpatient & Long-Term Arrhythmia Management", "Arrhythmias", "Syncope"], {
      uses: ul([
        "<strong>Rate control in AF/flutter</strong> in selected patients, especially <strong>acutely decompensated HFrEF</strong> when BB/CCB are not tolerated.",
        "<strong>HFrEF</strong>.",
        "Off label: rate control in SVT (AVNRT).",
        "IV bolus for AF RVR is <strong>infrequently used and less effective</strong>."
      ]),
      moa: "<p><strong>Vagomimetic</strong>: suppresses AV node conduction. Raises intracellular Na+ (Na/K ATPase), which brings Ca2+ in (positive inotropy). Prolongs phases 4 and 0, lengthening the refractory period.</p>" +
        Tbl(["Kinetics", ""], [["Excretion", "<strong>Kidneys</strong> (depends on GFR)"], ["Half-life", "<strong>36–48 hours</strong>, longer in renal failure"], ["Therapeutic level", "<strong>0.5–2 ng/mL</strong>; check levels regularly"]]),
      avoid: ul([
        "<strong>Pre-excited AF / WPW</strong> (AV nodal blocker).",
        "Use caution in renal failure, low body weight, old age and <strong>hypokalemia</strong>: all raise toxicity risk.",
        "Can cause bradycardia, AV block and syncope, especially with BB/CCB."
      ]),
      se: Tbl(["Digoxin toxicity (level &gt; 2.0 ng/mL)", ""], [
        ["Common", "<strong>Nausea and vomiting</strong>, <strong>visual changes (halos, yellow or blurred vision)</strong>, lethargy"],
        ["Arrhythmias", "Sinus brady, AV block, PVCs, <strong>paroxysmal atrial tachycardia with block</strong>, junctional tachycardia, VT/VF"],
        ["Labs/EKG", "<strong>Hyperkalemia</strong>; <strong>scooped (\"Salvador Dali\") ST depression</strong>"]
      ]) + "<p>Signature: a <strong>tachyarrhythmia plus AV or sinus suppression</strong>.</p>",
      pearls: ul([
        "Toxicity occurs in 0.8–4% of chronic users and can be fatal.",
        "<strong>Antidote: digoxin Fab (Digibind, DigiFab)</strong> for life-threatening arrhythmias, <strong>K+ &gt; 5.5</strong>, or end-organ damage (renal failure, AMS).",
        "<strong>Activated charcoal</strong> within 1–2 hours of ingestion (1 g/kg, max 50 g) if the airway is protected.",
        "Temporize: <strong>atropine</strong> for bradycardia, IV fluids for hypotension.",
        "Amiodarone raises digoxin levels; the dose is usually lowered."
      ]) + Mn("Toxicity", "Nausea + yellow halos + PAT with block + high K+ → DigiFab.")
    }, [
      Q("moa", "What is digoxin's therapeutic range?", ["0.5-2 ng/mL", "2-3 ng/mL", "10-20 ng/mL", "There is no level to check"], 0, "Digoxin levels must be checked regularly; therapeutic range 0.5-2 ng/mL, toxicity risk above 2.0."),
      Q("avoid", "Which electrolyte problem raises the risk of digoxin toxicity?", ["Hypokalemia", "Hyperkalemia", "Hypernatremia", "Hypercalcemia from milk"], 0, "Risk factors: low body weight, old age, low renal function, hypokalemia."),
      Q("se", "An 84-year-old on digoxin has nausea and sees yellow halos around lights. What is the likely diagnosis?", ["Digoxin toxicity", "Amiodarone optic neuritis", "Atropine overdose", "Adenosine reaction"], 0, "Nausea/vomiting, visual changes (halos, yellow vision) and lethargy are classic digoxin toxicity."),
      Q("pearls", "A digoxin-toxic patient has a K+ of 6.1 and new AV block. What is the treatment?", ["Digoxin Fab (DigiFab)", "Calcium gluconate alone", "Amiodarone", "Adenosine"], 0, "DSFab is indicated for life-threatening arrhythmias, K+ > 5.5, or end-organ damage."),
      Q("se", "Which EKG finding is classic for digoxin effect or toxicity?", ["Scooped ST depression", "Delta waves", "Diffuse ST elevation", "S1Q3T3"], 0, "Digoxin causes scooped ST depression."),
      Q("se", "Which rhythm is the signature digoxin-toxic arrhythmia?", ["Atrial tachycardia with AV block", "Pre-excited AF", "Torsades de pointes", "Mobitz II block from the His bundle"], 0, "Digoxin toxicity: a tachyarrhythmia with sinus or AV node suppression, such as atrial or junctional tachycardia with block."),
      Q("moa", "Why does digoxin build up in kidney failure?", ["It is cleared by the kidneys based on GFR", "It is metabolized by the liver", "It is excreted in bile", "It is cleared by the lungs"], 0, "Digoxin is renally excreted; half-life 36-48 hours and longer in renal failure."),
      Q("uses", "Which AF patient is most suited to digoxin for rate control?", ["Acutely decompensated HFrEF who cannot take a BB or CCB", "Young athlete with lone AF", "Pre-excited AF with WPW", "Hypotensive patient with Mobitz II"], 0, "In acutely decompensated systolic HF, amiodarone or digoxin may be used when first-line agents are not tolerated."),
      Q("pearls", "A digoxin overdose was swallowed 1 hour ago and the patient is alert. What early step helps?", ["Activated charcoal 1 g/kg (max 50 g)", "Ipecac", "Hemodialysis", "IV calcium first"], 0, "Charcoal helps within 1-2 hours of ingestion if the patient can protect the airway.")
    ])
  ]);
}());
