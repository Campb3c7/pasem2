/*
  Medications: "Which drug when" guides (Cardio Part 2). Side-by-side picks
  that cut across drug classes. Source: arrhythmia-pharmacology.md slides 2,
  24-26; arrhythmias.md slides 96, 113-114, 122, 135-137, 146-148;
  chronic-arrhythmia-management.md slides 49-56, 64-74, 105-117;
  vascular-disease-part-1.md slides 34, 90, 113-115, 131; vascular-disease-part-2.md
  slides 81-96; shock-pressors-fluids.md slides 34-50, 61-62, 106-111;
  endocarditis-pericardial.md slides 37-38, 66, 72; syncope.md slides 51, 56.
  Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, L = H.L, Guide = M.Guide, ul = M.ul;

  window.CARDIO2_MEDS_GUIDES = L("meds2-guides", "Which drug when", [

    Guide("guide-rhythm-drugs", "Drug by rhythm", "Which drug for which arrhythmia, and what to avoid", ["Arrhythmias", "Arrhythmia Pharmacology", "Inpatient & Long-Term Arrhythmia Management"], [
      S("narrow", "Narrow & atrial rhythms",
        Tbl(["Rhythm (stable)", "Drug", "Avoid"], [
          ["<strong>AVNRT / orthodromic AVRT</strong>", "Vagal → <strong>adenosine 6 → 12 mg</strong> → IV CCB or BB → procainamide (refractory AVRT)", ""],
          ["<strong>AF/flutter with RVR</strong>", "<strong>Diltiazem</strong> (most); <strong>metoprolol</strong> with CAD/MI; amiodarone or digoxin in decompensated HF", "Nodal blockers if pre-excited"],
          ["<strong>MAT</strong>", "Treat the cause (COPD); metoprolol if no HF or bronchospasm; diltiazem/verapamil if bronchospasm", "Cardioversion and ablation do nothing"],
          ["Symptomatic PACs/PVCs", "Beta blocker (first), non-DHP CCB; then flecainide or amiodarone", ""]
        ]) + HY("Unstable anything → synchronized cardioversion, not drugs.")),
      S("wpw", "Pre-excitation (WPW)",
        "<p><strong>Antidromic AVRT or pre-excited AF</strong>: <strong>procainamide</strong> (ibutilide can convert AF/flutter in WPW).</p>" +
        "<p><strong>Avoid every AV nodal blocker</strong>: <strong>adenosine, beta blockers, diltiazem/verapamil, digoxin, and IV amiodarone</strong>. Blocking the node sends all impulses down the accessory pathway → VF.</p>" +
        Mn("WPW avoid list", "\"ABCD + A\": Adenosine, Beta blockers, Calcium channel blockers, Digoxin, and IV Amiodarone.")),
      S("vent", "Ventricular rhythms & arrest",
        Tbl(["Rhythm", "Drug"], [
          ["<strong>Stable monomorphic VT</strong>", "<strong>Amiodarone 150 mg over 10 min</strong> or <strong>procainamide</strong> (not with long QT, MI, severe HF) or lidocaine; fails → synchronized cardioversion"],
          ["<strong>Pulseless VT / VF</strong>", "Shock + CPR → <strong>epinephrine 1 mg q3–5 min</strong> → <strong>amiodarone 300 mg then 150 mg</strong> (or lidocaine)"],
          ["<strong>Asystole / PEA</strong>", "CPR + <strong>epinephrine 1 mg q3–5 min</strong>; no shock; look for H's and T's"],
          ["<strong>Torsades</strong>", "<strong>Magnesium 1–2 g IV</strong>; defibrillate if pulseless"],
          ["Long-term VT with structural disease", "<strong>Beta blocker</strong> → amiodarone or sotalol; ICD if low EF"]
        ])),
      S("brady", "Bradycardia & blocks",
        Tbl(["Rhythm", "Plan"], [
          ["Unstable sinus brady, 1st degree, Mobitz I", "<strong>Atropine 1 mg q3–5 min (max 3 mg)</strong> → pacing"],
          ["<strong>Mobitz II, complete heart block</strong>, ventricular escape", "<strong>Pacing</strong> (atropine often fails) → permanent pacemaker"],
          ["Drug-induced", "Stop BB, CCB, digoxin, amiodarone, sotalol; digoxin toxicity → DigiFab"]
        ]))
    ], [
      Q("narrow", "Stable AVNRT that did not break with vagal maneuvers or adenosine 6 and 12 mg. Next?", ["IV diltiazem, verapamil or metoprolol", "Amiodarone 300 mg push", "Atropine", "Unsynchronized shock"], 0, "AVNRT: vagal, adenosine, then IV CCB or IV BB."),
      Q("wpw", "Which drug is safe for pre-excited atrial fibrillation?", ["Procainamide", "Adenosine", "Diltiazem", "Digoxin"], 0, "Pre-excitation: procainamide; avoid AV nodal blockers and IV amiodarone."),
      Q("wpw", "Which drugs are on the avoid list for pre-excited AF?", ["Adenosine, beta blockers, verapamil/diltiazem, digoxin, IV amiodarone", "Procainamide and ibutilide", "Magnesium and potassium", "Heparin and apixaban"], 0, "AV nodal blockers and IV amiodarone push conduction down the accessory pathway."),
      Q("vent", "What is the drug for torsades de pointes with a pulse?", ["Magnesium sulfate 1-2 g IV", "Procainamide", "Sotalol", "Ibutilide"], 0, "Torsades: magnesium 1-2 g IV; QT-prolonging drugs make it worse."),
      Q("vent", "A patient in PEA. Which drug and is a shock given?", ["Epinephrine 1 mg every 3-5 min; no shock", "Amiodarone 300 mg and shock", "Atropine 1 mg and shock", "Adenosine and shock"], 0, "PEA and asystole are non-shockable: CPR and epinephrine."),
      Q("brady", "A patient with complete heart block and BP 70/40 got atropine without effect. Next?", ["Transcutaneous pacing", "More atropine above 3 mg", "Adenosine", "Diltiazem"], 0, "Infranodal blocks often do not respond to atropine; pace."),
      Q("narrow", "Which rhythm does not respond to cardioversion or ablation and is treated with AV nodal blockers and fixing the cause?", ["Multifocal atrial tachycardia", "Atrial flutter", "AVNRT", "WPW"], 0, "MAT: treat the cause (often COPD); cardioversion and RFCA have no effect."),
      Q("vent", "Which drug is the primary long-term therapy for VT in structural heart disease?", ["Beta blockers", "Flecainide", "Digoxin", "Verapamil"], 0, "Beta blockers first; amiodarone or sotalol if insufficient; ICD for significant LV dysfunction."),
      Q("narrow", "Stable AF with RVR in a patient having an NSTEMI. Rate-control drug?", ["IV metoprolol", "IV diltiazem", "IV digoxin", "Adenosine"], 0, "Metoprolol is the drug of choice with ischemia, infarction or CAD.")
    ]),

    Guide("guide-af-drug-choice", "AF: rate vs rhythm drug by heart type", "Which antiarrhythmic fits which heart, and the drug interactions", ["Inpatient & Long-Term Arrhythmia Management", "Arrhythmia Pharmacology"], [
      S("strategy", "Rate or rhythm",
        ul([
          "<strong>Rate control</strong> (goal resting HR ~80): <strong>frail elderly, ~80+</strong>. <strong>BB or non-DHP CCB</strong> first line; amiodarone or digoxin in acutely decompensated HF.",
          "<strong>Rhythm control</strong>: most patients, especially younger or symptomatic. Load an antiarrhythmic → TEE → cardioversion → maintain on <strong>sotalol, amiodarone or dronedarone</strong>.",
          "Failing drugs → catheter ablation; can't tolerate rate drugs → AV node ablation + pacemaker.",
          "Stay on anticoagulation or aspirin if indicated even after NSR returns."
        ])),
      S("heart", "Antiarrhythmic by heart",
        Tbl(["Heart", "Use", "Avoid"], [
          ["<strong>Structurally normal</strong>", "<strong>Flecainide, propafenone</strong> (pill in the pocket), sotalol, dronedarone", ""],
          ["<strong>CAD / prior MI</strong>", "<strong>Sotalol</strong>, <strong>dofetilide</strong>, <strong>dronedarone</strong>, amiodarone", "<strong>Class IC</strong>"],
          ["<strong>Heart failure</strong>", "<strong>Amiodarone</strong> (drug of choice), <strong>dofetilide</strong>", "<strong>IC, sotalol, dronedarone</strong>"],
          ["Permanent AF", "Rate control", "<strong>Dronedarone</strong>"],
          ["Long QT / low CrCl", "Amiodarone (with care)", "Sotalol (QTc &gt; 450, CrCl &lt; 40), dofetilide (QTc &gt; 440)"]
        ]) + HY("HF + AF rhythm control → amiodarone or dofetilide.")),
      S("ddi", "Interactions & monitoring",
        ul([
          "Antiarrhythmics interact with: <strong>other antiarrhythmics</strong> (wash out first), <strong>antipsychotics</strong> (Haldol, Seroquel), <strong>ondansetron</strong> (and promethazine), <strong>macrolides</strong>, <strong>fluoroquinolones</strong>, <strong>azole antifungals</strong>, HIV HAART.",
          "All Class III drugs prolong the QT: <strong>monitor QTc, K+ and Mg2+</strong>.",
          "Amiodarone raises <strong>warfarin and digoxin</strong> levels."
        ]))
    ], [
      Q("heart", "A 50-year-old with AF and HFrEF (EF 30%) needs rhythm control. Which two drugs fit?", ["Amiodarone or dofetilide", "Flecainide or propafenone", "Dronedarone or sotalol", "Digoxin or verapamil"], 0, "In HF, amiodarone (DOC) and dofetilide are safe; IC, sotalol and dronedarone are avoided."),
      Q("heart", "A 40-year-old with no structural heart disease has paroxysmal AF. Which drug class is a good choice?", ["Class IC (flecainide, propafenone)", "Dofetilide only", "Amiodarone first", "Digoxin"], 0, "IC drugs are for AF without structural heart disease."),
      Q("strategy", "A frail 90-year-old with limited activity develops AF. Strategy?", ["Rate control with a BB or non-DHP CCB", "Ablation", "Repeated cardioversion", "Dofetilide loading"], 0, "Frail, elderly patients with limited activity are best suited to rate control."),
      Q("ddi", "A patient on dofetilide gets azithromycin and ondansetron. Concern?", ["Additive QT prolongation and torsades", "Hypoglycemia", "Bleeding", "Hyperkalemia"], 0, "Macrolides and ondansetron are common QT interactions with antiarrhythmics."),
      Q("heart", "Which antiarrhythmic is contraindicated in permanent AF?", ["Dronedarone", "Amiodarone", "Metoprolol", "Diltiazem"], 0, "Dronedarone increased mortality in permanent AF."),
      Q("strategy", "Which antiarrhythmics are named for keeping NSR after cardioversion?", ["Sotalol, amiodarone or dronedarone", "Adenosine or atropine", "Digoxin or verapamil", "Lidocaine or mexiletine"], 0, "After TEE and cardioversion, patients are maintained on sotalol, amiodarone or dronedarone."),
      Q("ddi", "Before switching from one antiarrhythmic to another, what must happen?", ["The first drug is washed out, then the new one loaded", "Both are given together for a week", "Nothing", "A pacemaker must be placed"], 0, "Other antiarrhythmics must be washed out before a new one is loaded."),
      Q("heart", "AF with CAD and a normal EF and QTc. Which is NOT a good pick?", ["Flecainide", "Sotalol", "Dofetilide", "Dronedarone"], 0, "Class IC drugs are avoided with CAD.")
    ]),

    Guide("guide-anticoag-choice", "Anticoagulant by situation", "CHA2DS2-VASc, HAS-BLED, DOAC vs warfarin, VTE choices and duration", ["Inpatient & Long-Term Arrhythmia Management", "Vascular Disease Part 2"], [
      S("af", "AF stroke prevention",
        Tbl(["CHA2DS2-VASc", "Points"], [
          ["CHF / LV dysfunction", "1"], ["Hypertension", "1"], ["Age ≥ 75", "2"], ["Diabetes", "1"], ["Stroke / TIA / embolism", "2"], ["Vascular disease (MI, PAD, aortic plaque)", "1"], ["Age 65–74", "1"], ["Sex category (female)", "1"]
        ]) +
        Tbl(["Score", "Therapy"], [["0–1", "<strong>EC aspirin 81–325 mg</strong>"], ["2", "Individualize; <strong>anticoagulation preferred</strong>"], ["≥ 3", "<strong>Anticoagulate: DOAC preferred</strong> over warfarin"]]) +
        "<p>Thrombus is assumed after AF ≥ 48 hours, so anticoagulation matters most then. Stroke risk is the same for paroxysmal and permanent AF.</p>"),
      S("bleed", "Bleeding risk & devices",
        "<p><strong>HAS-BLED</strong> (1 point each): HTN (SBP &gt; 160), abnormal renal, abnormal liver, stroke, prior major bleeding, labile INR, elderly &gt; 65, drugs (antiplatelets), alcohol.</p>" +
        ul(["<strong>HAS-BLED &gt; 3</strong> = high bleeding risk: fix what you can (control BP) and review the indication.", "HAS-BLED higher than CHA2DS2-VASc: bleeding may outweigh benefit.", "High stroke risk + bleeding problems → <strong>Watchman</strong> (4–6 weeks of anticoagulation, then aspirin). LAA clip during other cardiac surgery → aspirin alone."])),
      S("doac", "DOAC or warfarin",
        Tbl(["Use warfarin when", "Use a DOAC when"], [
          ["<strong>Mechanical valve</strong>, significant <strong>native mitral disease</strong>, <strong>ESRD</strong> (apixaban is the exception), <strong>antiphospholipid syndrome</strong>", "Non-valvular AF and most VTE: no INR checks, fast onset (caution BMI &gt; 40)"]
        ]) +
        Tbl(["DOAC", "AF dose", "Kidney rule"], [
          ["Apixaban", "5 mg BID (2.5 if 2 of: SCr ≥ 1.5, age ≥ 80, wt ≤ 60)", "OK with caution in ESRD"],
          ["Rivaroxaban", "20 mg daily with largest meal", "15 mg if GFR 15–50"],
          ["Dabigatran", "150 mg BID (thrombin inhibitor)", "Avoid GFR ≤ 30"],
          ["Edoxaban", "60 mg daily", "30 mg if GFR ≤ 50; not if GFR ≥ 95 or ≤ 30"]
        ])),
      S("vte", "VTE choices & duration",
        Tbl(["Patient", "Anticoagulant"], [
          ["Most patients", "<strong>DOAC (factor Xa inhibitor)</strong>"],
          ["<strong>Pregnancy</strong>", "<strong>LMWH</strong> (no warfarin)"],
          ["<strong>Active cancer</strong>", "DOAC or LMWH"],
          ["<strong>Antiphospholipid syndrome</strong>", "<strong>Warfarin</strong>"],
          ["Unstable, procedure coming, severe renal failure", "<strong>IV UFH</strong>"],
          ["<strong>High-risk PE</strong> (hypotension)", "<strong>tPA</strong> + heparin (held during tPA)"],
          ["Can't anticoagulate at all", "<strong>IVC filter</strong>"]
        ]) +
        Tbl(["VTE type", "Duration"], [["Provoked first episode", "<strong>3 months</strong>"], ["Unprovoked first episode", "≥ 3 months, then reassess; often 6–12 months or longer"], ["Recurrent", "<strong>Indefinite</strong>"], ["Persistent risk (cancer, APS)", "Extended"]]))
    ], [
      Q("af", "A 78-year-old woman with hypertension and AF. What is her CHA2DS2-VASc?", ["4", "2", "3", "5"], 0, "Age ≥ 75 (2) + female (1) + HTN (1) = 4: anticoagulate, DOAC preferred."),
      Q("af", "What therapy fits a CHA2DS2-VASc of 3 or more?", ["Anticoagulation, with a DOAC preferred", "Aspirin alone", "No therapy", "Clopidogrel alone"], 0, "Score ≥ 3: anticoagulate with warfarin or a DOAC (DOAC preferred)."),
      Q("bleed", "What HAS-BLED score marks a high bleeding risk?", ["Greater than 3", "Greater than 0", "Exactly 1", "Greater than 9"], 0, "HAS-BLED > 3 = high risk: use caution, correct risks, review the indication."),
      Q("doac", "Which patient needs warfarin rather than a DOAC?", ["AF with a mechanical valve", "Non-valvular AF with normal kidneys", "Provoked DVT in a healthy adult", "AF with a CHA2DS2-VASc of 3"], 0, "Mechanical valves, significant mitral disease, ESRD (except apixaban) and APS → warfarin."),
      Q("vte", "How long is anticoagulation for a first DVT after knee surgery?", ["3 months", "Indefinitely", "2 weeks", "1 year minimum"], 0, "First provoked DVT/PE: 3 months."),
      Q("vte", "A patient has a third DVT on separate occasions. Duration?", ["Indefinite anticoagulation", "3 months", "6 weeks", "None"], 0, "Recurrent DVT/PE: indefinite anticoagulation."),
      Q("vte", "A cancer patient with a new PE is actively bleeding and cannot be anticoagulated. Option?", ["IVC filter", "tPA", "Double-dose apixaban", "Warfarin with vitamin K"], 0, "IVC filter: acute DVT/PE with an absolute contraindication to anticoagulation."),
      Q("bleed", "A patient with AF, high stroke risk and recurrent GI bleeds on anticoagulation. Device option?", ["Watchman left atrial appendage occluder", "IVC filter", "Pacemaker", "LVAD"], 0, "Watchman: high stroke risk with bleeding issues on anticoagulation."),
      Q("af", "Is stroke risk lower in paroxysmal AF than in permanent AF?", ["No: it is no different, so both get prophylaxis", "Yes, much lower", "Yes, paroxysmal needs nothing", "Permanent AF has no stroke risk"], 0, "Stroke rate is no different between paroxysmal and permanent AF.")
    ]),

    Guide("guide-shock-fluids", "Shock: pressor & fluid by situation", "Treat the physiology: which fluid, which pressor, what to avoid", ["Shock, Pressors & Fluid Management", "Infective Endocarditis & Pericardial Disease", "Vascular Disease Part 2"], [
      S("type", "By shock type",
        Tbl(["Shock", "Do", "Avoid"], [
          ["<strong>Hypovolemic, non-bleeding</strong>", "Isotonic crystalloid (NS or LR), reassess", "D5W, ½NS"],
          ["<strong>Hemorrhagic</strong>", "Stop bleeding + <strong>blood</strong> (1:1:1, O-neg); blood after ~2 L crystalloid; permissive hypotension in trauma", "Large crystalloid volumes"],
          ["<strong>Cardiogenic</strong>", "<strong>Norepinephrine</strong> (SBP &lt; 90); <strong>dobutamine if SBP ≥ 90</strong>; aspirin + heparin for MI; IABP/LVAD", "<strong>Fluid boluses with congestion</strong>; <strong>beta blockers and CCBs</strong>"],
          ["<strong>Obstructive</strong> (tamponade, massive PE, tension PTX)", "<strong>Relieve the obstruction</strong> (pericardiocentesis, tPA); fluids + pressors as a bridge", "Caution with fluids in RV failure (PE)"],
          ["<strong>Distributive</strong> (sepsis, anaphylaxis, neurogenic)", "Treat the cause; fluids then pressor", ""]
        ]) + HY("Cardiogenic shock: hold the fluid, start norepinephrine, never a BB or CCB.")),
      S("pressor", "Pressor picks",
        Tbl(["Need", "Drug"], [
          ["Strong squeeze, preferred pressor", "<strong>Norepinephrine</strong>"],
          ["Pump help without much squeeze (SBP ≥ 90)", "<strong>Dobutamine</strong>"],
          ["Dose-dependent kidney → heart → squeeze", "<strong>Dopamine</strong> (arrhythmias)"],
          ["Alternative to norepinephrine; cardiac arrest", "<strong>Epinephrine</strong> (acidosis, arrhythmias)"]
        ]) + "<p>Goals: <strong>MAP ≥ 65</strong>, SBP ≥ 90, UOP &gt; 0.5 mL/kg/hr, CVP ≥ 8, SpO2 ≥ 92%. Continuous pressors via a <strong>central line</strong>.</p>"),
      S("fluid", "Fluid picks",
        Tbl(["Problem", "Fluid"], [
          ["Volume loss, DKA, with blood", "<strong>0.9% NS</strong>"],
          ["Surgery, trauma, burns, third spacing", "<strong>LR</strong> (not in liver/renal disease or pH &gt; 7.5)"],
          ["Hypernatremia", "<strong>0.45% NS</strong>"],
          ["Free water, maintenance, hypoglycemia", "<strong>D5W</strong>"],
          ["Seizing hyponatremia, high ICP", "<strong>3% NS</strong> (slowly)"]
        ]))
    ], [
      Q("type", "A cardiogenic shock patient with rales, BP 82/50. Which plan fits?", ["Hold boluses and start norepinephrine", "2 L NS wide open", "IV metoprolol for the tachycardia", "Diltiazem drip"], 0, "Hold fluids with pulmonary congestion; norepinephrine is preferred; avoid negative inotropes."),
      Q("type", "Why are beta blockers and CCBs avoided in cardiogenic shock?", ["They block the compensatory tachycardia and depress contractility", "They raise SVR too much", "They cause hyperkalemia", "They interfere with heparin"], 0, "Negative inotropes block the tachycardic response and worsen the situation."),
      Q("type", "A patient with tamponade is hypotensive. Definitive treatment?", ["Pericardiocentesis, with fluids and pressors as a bridge", "Norepinephrine alone", "Diuretics", "Beta blocker"], 0, "Tamponade: hydrate, pressors if hypotensive, and pericardiocentesis."),
      Q("pressor", "Cardiogenic shock with SBP 96 and low output. Which agent adds contractility while lowering SVR?", ["Dobutamine", "Norepinephrine", "High-dose dopamine", "Phenylephrine"], 0, "Dobutamine (SBP ≥ 90): more CO, lower SVR."),
      Q("fluid", "A trauma patient is bleeding heavily after 2 L of crystalloid. Next?", ["Blood products (massive transfusion 1:1:1)", "More crystalloid", "D5W", "3% saline"], 0, "After 2 L of crystalloid, consider blood; MTP starts at 1:1:1."),
      Q("fluid", "Which fluid goes with a patient with hypernatremia?", ["0.45% NS", "3% NS", "LR", "Albumin"], 0, "Hypotonic 0.45NS treats hypernatremia."),
      Q("pressor", "Where should continuous pressors run beyond the emergency phase?", ["Central line", "Peripheral IV in the hand", "Intraosseous line only", "Subcutaneous"], 0, "Peripheral extravasation causes sclerosis and necrosis; use a central line."),
      Q("type", "In constrictive pericarditis, which drug classes should be avoided?", ["Beta blockers and calcium channel blockers", "NSAIDs and colchicine", "Diuretics", "Antibiotics"], 0, "Tachycardia is protective in constrictive pericarditis, so avoid BB and CCB.")
    ]),

    Guide("guide-vascular-drugs", "Vascular disease drug picks", "PAD, AAA, dissection, Raynaud's, Kawasaki, superficial thrombophlebitis", ["Vascular Disease Part 1", "Vascular Disease Part 2"], [
      S("pad", "PAD & AAA",
        Tbl(["Condition", "Drugs"], [
          ["<strong>PAD</strong>", "<strong>Aspirin 81 or clopidogrel 75</strong>; <strong>rivaroxaban + aspirin</strong> if symptomatic or after revascularization; <strong>high-intensity statin</strong>; BP and DM control; smoking cessation"],
          ["<strong>Claudication</strong>", "<strong>Cilostazol</strong> + structured exercise (<strong>not in HF</strong>)"],
          ["<strong>Acute limb ischemia</strong>", "<strong>IV UFH</strong> + urgent revascularization"],
          ["<strong>AAA &lt; 5.5 cm (men) / 5.0 (women)</strong>", "Stop smoking, <strong>statin</strong>, BP control (<strong>BB or ARB</strong>: BP only, do not slow growth); <strong>avoid fluoroquinolones</strong>"],
          ["<strong>Ruptured AAA</strong>", "Blood + isotonic saline, emergency surgery"]
        ])),
      S("dissection", "Aortic dissection anti-impulse",
        ul([
          "Goal <strong>HR 60–80</strong> first: <strong>IV esmolol or labetalol</strong> (verapamil/diltiazem if BB contraindicated).",
          "Then if <strong>SBP &gt; 120</strong>: add <strong>nitroprusside</strong> (or nicardipine); goal SBP 100–120.",
          "<strong>Never a vasodilator before the beta blocker</strong>: reflex tachycardia raises shear stress.",
          "Type A → surgery + anti-impulse; uncomplicated type B → anti-impulse alone; long term BP control with a BB.",
          "Suspected dissection is an absolute <strong>tPA contraindication</strong>."
        ]) + HY("Dissection: beta blocker first, vasodilator second.")),
      S("small", "Small-vessel & vasculitis",
        Tbl(["Condition", "Drugs"], [
          ["<strong>Raynaud's</strong>", "Avoid cold/triggers + <strong>calcium channel blocker</strong>"],
          ["<strong>Buerger disease</strong>", "<strong>Smoking cessation</strong> (only cure); vasodilators investigational"],
          ["<strong>Takayasu arteritis</strong>", "<strong>Corticosteroids + DMARDs</strong>"],
          ["<strong>Kawasaki</strong>", "<strong>IVIG + aspirin 30–50 mg/kg</strong>, then 3–5 mg/kg/day"],
          ["<strong>Superficial thrombophlebitis</strong>", "<strong>NSAIDs</strong>, warm compresses, remove IV; anticoagulate only near the saphenofemoral/saphenopopliteal junction"],
          ["Gas gangrene", "Vanc + Zosyn + clindamycin → pen G + clindamycin; surgery"]
        ]))
    ], [
      Q("dissection", "A type B dissection patient has HR 110 and BP 170/100. First drug?", ["IV esmolol or labetalol", "Nitroprusside", "Nicardipine", "Hydralazine"], 0, "Anti-impulse therapy starts with an IV beta blocker to get HR 60-80."),
      Q("dissection", "After esmolol brings HR to 70, SBP is still 150 in a dissection. What next?", ["Add nitroprusside (or nicardipine) to SBP 100-120", "Stop esmolol", "Give tPA", "Add dobutamine"], 0, "If SBP stays > 120 after a beta blocker, add nitroprusside; nicardipine is an alternative."),
      Q("dissection", "Why is nitroprusside never started before the beta blocker in dissection?", ["Reflex tachycardia raises shear stress on the aorta", "It is too slow", "It causes bradycardia", "It is contraindicated in dissection"], 0, "Heart-rate control is key; a vasodilator alone causes reflex tachycardia."),
      Q("pad", "Which antibiotic class should a patient with a known AAA avoid if possible?", ["Fluoroquinolones", "Penicillins", "Cephalosporins", "Macrolides"], 0, "AAA medical management includes avoiding fluoroquinolones if able."),
      Q("pad", "Do beta blockers and ARBs slow AAA growth?", ["No: they are for BP control only", "Yes, they halve growth", "Only ARBs do", "Only beta blockers do"], 0, "BB and ARBs are used for BP control; they are not proven to slow AAA growth."),
      Q("small", "A superficial thrombophlebitis far from the saphenofemoral junction. Anticoagulate?", ["No: NSAIDs, warm compresses, remove the IV", "Yes, 3 months of apixaban", "Yes, tPA", "Antibiotics only"], 0, "Anticoagulants are generally not indicated unless near the saphenofemoral or saphenopopliteal junction."),
      Q("pad", "Which statin intensity does PAD call for?", ["High intensity", "Low intensity", "No statin", "Moderate only if LDL > 190"], 0, "PAD: LDL to goal using high-intensity statin therapy."),
      Q("small", "Which vasculitis is treated with corticosteroids plus DMARDs?", ["Takayasu arteritis", "Kawasaki disease", "Buerger disease", "Raynaud's phenomenon"], 0, "Takayasu: corticosteroids, DMARDs, vascular surgery consult.")
    ]),

    Guide("guide-drugs-cause-problems", "Drugs that cause brady, long QT & syncope", "Culprit drugs to recognize on the exam", ["Syncope", "Arrhythmias", "Inpatient & Long-Term Arrhythmia Management"], [
      S("brady", "Bradycardia & AV block",
        "<p>Common culprits: <strong>beta blockers, non-DHP CCBs (verapamil, diltiazem), clonidine</strong>, <strong>antiarrhythmics (amiodarone, sotalol, flecainide)</strong>, <strong>digoxin</strong>. Combinations raise the risk and often <strong>unmask underlying conduction disease</strong>.</p>" +
        ul(["Digoxin is a parasympathetic enhancer: PACs, AV block, PAT with block.", "Stopping a beta blocker, alcohol, opioids or benzos can trigger sinus tachycardia (withdrawal)."])),
      S("qt", "QT prolongation → torsades",
        Tbl(["Group", "Drugs"], [
          ["Antiarrhythmics", "<strong>Quinidine, procainamide, sotalol</strong> (plus dofetilide, ibutilide, amiodarone)"],
          ["Psych", "<strong>Haloperidol, ziprasidone, SSRIs, TCAs</strong>"],
          ["Antimicrobials", "<strong>Fluoroquinolones, macrolides, azoles</strong>"],
          ["Antiemetic", "<strong>Ondansetron</strong>"]
        ]) + "<p>Also: <strong>hypokalemia, hypomagnesemia</strong>.</p>"),
      S("orthostatic", "Orthostatic & other syncope",
        ul(["<strong>Orthostatic</strong>: diuretics, BP drugs (alpha and beta blockers), vasodilators/nitrates, TCAs, antipsychotics.", "<strong>Brugada unmasking</strong>: Na+ channel blockers (flecainide), beta blockers, TCAs; also alcohol and cocaine.", "AF triggers: theophylline, beta agonists (albuterol), alcohol, caffeine."]))
    ], [
      Q("qt", "Which antiemetic prolongs the QT?", ["Ondansetron", "Meclizine", "Docusate", "Famotidine"], 0, "Ondansetron is a QT-prolonging drug."),
      Q("qt", "Which antibiotic classes prolong the QT?", ["Fluoroquinolones and macrolides", "Penicillins and cephalosporins", "Tetracyclines and sulfa", "Aminoglycosides"], 0, "FQs, macrolides and azoles are classic QT prolongers."),
      Q("brady", "An elderly patient on diltiazem, metoprolol and digoxin faints with HR 34. Why?", ["Combined AV nodal drugs causing bradycardia and unmasking conduction disease", "Dehydration only", "Seizure", "Hypoglycemia"], 0, "Combinations increase the risk and often unmask underlying conduction disease."),
      Q("orthostatic", "Which drug can unmask a Brugada pattern?", ["Flecainide", "Amoxicillin", "Atorvastatin", "Metformin"], 0, "Sodium channel blockers such as flecainide can unmask Brugada."),
      Q("orthostatic", "Which drug class is a classic cause of orthostatic syncope?", ["Diuretics and alpha blockers", "Statins", "PPIs", "Antihistamines for allergies only"], 0, "Orthostatic culprits: diuretics, BP drugs (alpha and beta blockers), nitrates, TCAs, antipsychotics."),
      Q("qt", "Which psych drugs prolong the QT?", ["Haloperidol, ziprasidone, SSRIs and TCAs", "Lithium only", "Buspirone", "Bupropion only"], 0, "Haloperidol, ziprasidone, SSRIs and TCAs are listed QT prolongers."),
      Q("orthostatic", "Which inhaler can trigger atrial arrhythmias?", ["Albuterol (beta agonist)", "Fluticasone", "Tiotropium", "Cromolyn"], 0, "Theophylline and beta agonists like albuterol are AF triggers.")
    ])
  ]);
}());
