/* Veal, Hypertensive Urgency and Emergency. Official "Hypertension Crisis Objectives" in the supplied order.
   Objective 4 (contrast with hypertension) is split into 4a-4d (causes/pathophysiology, history, exam, work-up);
   objective 8 into 8a-8e (urgency, emergency goals and drugs, nitroprusside, nitroglycerin, nicardipine);
   objective 9 into one section per condition (9a-9e), plus 9f for the sympathetic-overactivity slides (45-46).
   Objectives 1-2 repeat Hypertension objectives 11-12; they are rebuilt here from this deck (slides 4-5, 12, 16-17, 21)
   with the matching Hypertension Part II slides (27-40) by the same lecturer.
   Picture slides: 21 (flowchart of HTN complications) and 55 (end-organ treatment algorithm) were transcribed;
   9-14 are imaging and diagrams whose captions carry the teaching point.
   Clarification (slide 14): the slide labels its image "subarachnoid hemorrhage", but the description (crescent of blood
   along the skull, treated with a burr hole) is the classic description of a subdural hematoma. Both are stated on the card.
   Slide 48 says ICH/SAH BP is usually titrated to SBP 160; the slide 55 algorithm gives ICH below 140 and SAH below 160.
   Both are taught. */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      r.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (m) {
        u[m].forEach(function (x) { x.card = i; r[m].push(x); });
      });
    });
    return r;
  }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function clar(x) { return "<p><strong>Clarification:</strong> " + x + "</p>"; }
  function ul(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }

  window.HYPERTENSIVE_CRISIS_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-remodeling", "1. Vascular and cardiac remodeling in hypertension", "Objective 1. Slides 5, 16–17, 21 (with Hypertension Part II slides 27–34).", [
      C("Vascular remodeling: the stressed vessel",
        "<p>Chronic hypertension raises afterload and changes the artery wall:</p>" +
        ul(["<strong>Arterial wall stiffness rises</strong> (less compliance) → <strong>higher systolic BP</strong> and a <strong>widened pulse pressure</strong>.",
          "The endothelium adapts with <strong>smooth muscle hypertrophy and vasoconstriction</strong>, which protects the wall from the force of blood.",
          "<strong>Prolonged smooth muscle contraction</strong> eventually causes <strong>endothelial dysfunction</strong>, <strong>less nitric oxide</strong>, and <strong>failure of autoregulation</strong>."]) +
        "<p>The deck's flowchart (slide 21) splits the damage into two arms:</p>" +
        tbl(["Arterial damage arm", "Where", "Result"], [
          ["<strong>Accelerated atherosclerosis</strong>", "Coronary vessels", "↓ Myocardial O<sub>2</sub> supply → myocardial ischemia/infarction"],
          ["", "Cerebral vessels", "Ischemic stroke"],
          ["<strong>Weakened vessel walls</strong>", "Aorta", "Aneurysms and dissection"],
          ["", "Cerebral vessels", "Hemorrhagic stroke"],
          ["", "Renal vessels", "Nephrosclerosis and renal failure"],
          ["", "Ophthalmic vessels", "Retinopathy"]]) +
        hy("Stiff arteries → high systolic BP and wide pulse pressure. Long-term vasoconstriction → endothelial dysfunction, ↓ NO, lost autoregulation."),
        ["vascular-remodeling", "arterial-damage-map"],
        [q("Chronic hypertension stiffens the arteries. What happens to systolic BP and pulse pressure?", "Systolic BP rises and pulse pressure widens", ["Systolic BP falls and pulse pressure narrows", "Both stay the same", "Only diastolic BP rises"], "Less compliant arteries produce a higher systolic pressure and a wider pulse pressure."),
          q("How does the vessel wall first adapt to chronically high pressure?", "Smooth muscle hypertrophy and vasoconstriction", ["Smooth muscle atrophy and vasodilation", "Thinning of the intima", "Loss of all elastic fibers at once"], "Hypertrophy and constriction protect the wall from the excessive force of blood."),
          q("Prolonged smooth muscle contraction in the vessel wall eventually causes:", "Endothelial dysfunction with less nitric oxide", ["More nitric oxide production", "Permanent vasodilation with low BP", "Improved autoregulation"], "Sustained contraction damages the endothelium, lowers NO, and autoregulation fails."),
          q("On the HTN complications flowchart, weakened walls of the aorta lead to:", "Aneurysm and dissection", ["Lacunar stroke", "Retinopathy", "Nephrosclerosis"], "Weakened aortic walls cause aneurysms and dissection.")],
        [q("A 64-year-old with 20 years of poorly controlled HTN has BP 172/68. Which vascular change best explains the wide pulse pressure?", "Stiff, less compliant arteries from chronic hypertension", ["Acute vasodilation from nitric oxide excess", "Low cardiac output from dehydration", "Aortic stenosis"], "Arterial stiffening raises systolic pressure and widens pulse pressure."),
          q("A patient with long-standing HTN has an MI, a prior ischemic stroke, and retinopathy. Which pairing of mechanism and organ is correct?", "Accelerated atherosclerosis in coronary vessels causes the MI", ["Weakened walls in coronary vessels cause the MI", "Accelerated atherosclerosis in ophthalmic vessels causes retinopathy", "Weakened walls in cerebral vessels cause ischemic stroke"], "Atherosclerosis drives coronary and ischemic cerebral events; weakened walls drive dissection, hemorrhagic stroke, nephrosclerosis, and retinopathy.")]),
      C("Cardiac remodeling: LVH and diastolic dysfunction",
        "<p>The high afterload of hypertension:</p>" +
        ul(["<strong>Decreases coronary perfusion pressure</strong> to an already overworked myocardium.",
          "<strong>Increases myocardial oxygen consumption</strong>.",
          "Leads to <strong>hypertrophy of the LV myocytes (LVH)</strong>: hypertensive heart disease. The thicker heart can pump harder against the high aortic pressure."]) +
        tbl(["Stage", "What happens"], [
          ["<strong>Diastolic dysfunction (first)</strong>", "The stiff hypertrophied LV relaxes incompletely in early diastole → ↑ LV end-diastolic pressure → ↑ left atrial pressure"],
          ["Cavity encroachment", "LVH limits diastolic filling and stroke volume"],
          ["<strong>Systolic failure (late)</strong>", "Long-preserved systolic function begins to fail"]]) +
        "<p>Continuum: LVH and HFpEF → LA enlargement → HFrEF → aortic root dilation and valve incompetence → atrial and ventricular arrhythmias → ischemic heart disease/cardiomyopathy.</p>" +
        "<p><strong>In a crisis (slides 16–17):</strong> the coronaries fill during <strong>diastole</strong>. Severe afterload, high aortic pressure, and hypertrophy mean the coronaries are less likely to be perfused, while the tense, stiff myocardium <strong>needs more oxygen</strong> and <strong>may not relax enough</strong> to fill.</p>" +
        hy("Diastolic dysfunction comes first in hypertensive heart disease. LVH = ↑ O<sub>2</sub> demand + ↓ coronary perfusion → ischemia in a crisis."),
        ["lvh", "diastolic-dysfunction", "crisis-ischemia-link"],
        [q("Which type of dysfunction occurs first in hypertensive heart disease?", "Diastolic dysfunction", ["Systolic dysfunction", "Right ventricular failure", "Complete heart block"], "The stiff hypertrophied LV fails to relax completely in diastole before systolic function declines."),
          q("Why does LVH develop in hypertension?", "The myocytes hypertrophy to pump against the high afterload", ["The myocytes hypertrophy because preload is low", "Valve leaflets thicken", "The pericardium constricts the heart"], "Increased afterload drives LV myocyte hypertrophy."),
          q("When a hypertrophied LV does not relax completely, what rises?", "LV end-diastolic pressure, then left atrial pressure", ["Stroke volume", "Coronary perfusion", "Ejection fraction"], "Incomplete relaxation raises LVEDP, which raises left atrial pressure.")],
        [q("A 58-year-old with years of uncontrolled HTN has dyspnea on exertion, an S4, and an echo showing a thick LV with EF 60%. What is the most likely mechanism?", "Diastolic dysfunction from LVH", ["Systolic failure from dilated cardiomyopathy", "Mitral stenosis", "Constrictive pericarditis"], "Preserved EF with a thick, stiff LV is the early diastolic stage of hypertensive heart disease."),
          q("A patient with LVH presents with BP 230/130 and chest pressure. Why is his myocardium at risk of ischemia?", "Demand is high while diastolic coronary filling is reduced", ["Coronary arteries fill only in systole", "LVH lowers oxygen demand", "High BP increases coronary perfusion in a thick ventricle"], "Hypertrophy and afterload raise O2 demand, and high aortic pressure plus poor relaxation reduce diastolic coronary perfusion.")]),
      C("Natural history of hypertension",
        tbl(["Phase", "Change"], [
          ["Prehypertension", "Asymptomatic ↑ cardiac output; intermittently high BP"],
          ["Early hypertension", "Persistently ↑ peripheral resistance"],
          ["Established hypertension", "<strong>Vascular remodeling</strong> and progressive damage"],
          ["Complicated hypertension", "<strong>End-organ damage</strong>"]]) +
        "<p>Chronic complications: CKD progression, LVH, systolic and diastolic HF, ischemic stroke, intracerebral hemorrhage, ischemic heart disease, and hypertensive retinopathy. A hypertensive emergency is the <strong>acute</strong> version of end-organ damage on top of this background.</p>" +
        mn("<strong>Output → Resistance → Remodeling → organ damage</strong>: the four phases in order."),
        ["natural-history"],
        [q("In the natural history of hypertension, what characterizes early hypertension?", "Persistently increased peripheral resistance", ["Asymptomatic increased cardiac output only", "End-organ damage", "Vascular remodeling with progressive damage"], "Early hypertension is persistently increased peripheral resistance."),
          q("Which phase of hypertension is defined by end-organ damage?", "Complicated hypertension", ["Prehypertension", "Early hypertension", "Established hypertension"], "Complicated hypertension causes end-organ damage.")],
        [q("A 30-year-old has intermittently high readings and a mildly increased cardiac output with no symptoms or organ findings. Which phase fits best?", "Prehypertension", ["Complicated hypertension", "Established hypertension", "Hypertensive emergency"], "Asymptomatic increased cardiac output with intermittent high BP is the prehypertension phase.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-autoregulation", "2. CNS and renal autoregulation in chronic hypertension", "Objective 2. Slides 4, 12, 19, 29 (with Hypertension Part II slides 35–40).", [
      C("Organ autoregulation and how it fails",
        "<p>Each organ autoregulates to prevent wide swings in blood flow when MAP changes:</p>" +
        ul(["<strong>MAP rises</strong> → arterioles <strong>vasoconstrict</strong>, limiting hyperperfusion of capillaries.",
          "<strong>MAP falls</strong> → arterioles <strong>vasodilate</strong>, keeping flow to the organ.",
          "Organs have limits: autoregulation <strong>fails during hypertensive emergencies</strong>."]) +
        "<p><strong>Brain:</strong> cerebral blood flow stays constant across <strong>MAP 60–150 mmHg</strong>. Cerebral perfusion pressure: <strong>CPP = MAP − ICP</strong>.</p>" +
        "<p>In a normotensive or mildly hypertensive person, a <strong>rapid rise</strong> in BP can cause hyperperfusion, ↑ ICP, cerebral edema, cerebral or carotid dissection, ischemic stroke, and hemorrhagic stroke.</p>" +
        hy("Cerebral flow is constant from MAP 60 to 150. CPP = MAP − ICP."),
        ["organ-autoregulation", "cerebral-range", "cpp"],
        [q("When MAP rises, how do autoregulating arterioles respond?", "Vasoconstriction to limit hyperperfusion", ["Vasodilation to increase flow", "No change in tone", "Venous constriction only"], "Constriction protects capillaries from hyperperfusion when MAP rises."),
          q("Across what MAP range is cerebral blood flow normally kept constant?", "60–150 mmHg", ["20–60 mmHg", "100–250 mmHg", "150–220 mmHg"], "Cerebral autoregulation holds flow constant at MAP 60–150 mmHg."),
          q("What is the formula for cerebral perfusion pressure?", "CPP = MAP − ICP", ["CPP = MAP + ICP", "CPP = SBP − DBP", "CPP = CO × TPR"], "Cerebral perfusion pressure equals mean arterial pressure minus intracranial pressure.")],
        [q("A normotensive 25-year-old takes a large dose of a stimulant and her BP jumps to 210/125. Her brain has not adapted to high pressure. What is she at risk for?", "Cerebral hyperperfusion, edema, and raised ICP", ["Cerebral ischemia from low flow", "No risk because autoregulation is unlimited", "Only retinal changes"], "A rapid rise beyond the autoregulatory limit causes hyperperfusion, ↑ ICP, and cerebral edema.")]),
      C("The chronic hypertensive brain resets its curve",
        "<p>With chronic high BP, the CNS becomes <strong>accustomed to high perfusion pressures</strong> and treats them as normal. Chronic hypertensive patients adapt by <strong>increasing cerebral vascular resistance</strong>, so the autoregulation curve shifts to the <strong>right</strong>.</p>" +
        ul(["They are <strong>more prone to cerebral ischemia</strong> when flow drops, especially if BP is lowered <strong>rapidly into the normotensive range</strong>.",
          "For long-standing HTN, lowering BP too fast can be <strong>as dangerous</strong> as leaving it high.",
          "Best: let BP normalize slowly over a <strong>few weeks</strong> while medications are titrated, so autoregulation returns to its normal set point."]) +
        "<p>Management faces two competing risks (slide 29): imminent events (dissection, stroke, MI, AKI) if BP is not lowered enough, versus stroke, MI, and AKI if BP is lowered <strong>too fast or below the autoregulatory floor</strong>.</p>" +
        hy("A chronically hypertensive brain sees a \"normal\" BP as hypotension. Lower it gradually."),
        ["rightward-shift", "too-fast-lowering"],
        [q("How does the cerebral autoregulation curve change in chronic hypertension?", "It shifts right, toward higher pressures", ["It shifts left, toward lower pressures", "It disappears completely", "It is unchanged"], "Chronic HTN raises cerebral vascular resistance and resets the curve to higher pressures."),
          q("Why is rapid BP lowering dangerous in a chronically hypertensive patient?", "Cerebral ischemia can occur because the brain is adapted to high pressure", ["It always causes cerebral edema", "It raises intracranial pressure", "It causes hyperperfusion of the brain"], "With a right-shifted curve, a normal BP is below the brain's autoregulatory floor."),
          q("Over what time frame should BP normally be brought to goal in long-standing hypertension?", "Over a few weeks", ["Within 10 minutes", "Within 2 hours", "Within 24 hours to normal"], "Gradual normalization lets autoregulation return toward its normal set point.")],
        [q("An 80-year-old with decades of HTN is given a large dose of an IV antihypertensive in clinic, and BP falls from 200/110 to 110/60 within 30 minutes. She becomes confused with a new hemiparesis. What happened?", "Cerebral ischemia from lowering BP below her reset autoregulatory range", ["Hypertensive encephalopathy from persistent high pressure", "Cerebral hyperperfusion", "A drug allergy"], "Her brain was adapted to high pressure; a rapid drop caused hypoperfusion and stroke."),
          q("A clinician plans to normalize the BP of a long-standing hypertensive patient in urgency to 120/80 in one hour. Best advice?", "Lower it gradually, because the brain is adapted to high pressures", ["Proceed; faster is always safer", "Raise the BP first", "Lower it to 90/60 for extra protection"], "Overly rapid lowering risks stroke, MI, and AKI in chronic hypertension.")]),
      C("Renal autoregulation",
        ul(["Chronic HTN causes <strong>sclerotic changes in the small renal arteries</strong> → endothelial dysfunction and <strong>impaired vasodilation</strong>.",
          "Renal autoregulation of glomerular blood flow is disrupted.",
          "<strong>Intraglomerular pressure then varies directly with systemic pressure</strong>: the kidney has no protection during swings in BP.",
          "Glomerular disease (nephrotic, nephritic): <strong>volume expansion</strong> drives HTN. Renal artery stenosis: near-constant <strong>RAAS activation</strong>. Both together drive HTN in chronic renal failure."]) +
        "<p><strong>In a crisis (slide 19):</strong> as cardiac output falls against severely increased afterload, the kidney is <strong>hypoperfused</strong> and cannot filter properly → <strong>AKI or proteinuria</strong>.</p>" +
        hy("Broken renal autoregulation = glomerular pressure follows systemic pressure up and down."),
        ["renal-autoregulation", "renal-in-crisis"],
        [q("When renal autoregulation is disrupted by chronic hypertension, intraglomerular pressure:", "Varies directly with systemic arterial pressure", ["Stays constant regardless of BP", "Varies inversely with systemic pressure", "Falls to zero"], "Without autoregulation, the glomerulus has no protection from BP swings."),
          q("What causes acute kidney injury in a hypertensive emergency according to the lecture?", "Hypoperfusion as cardiac output falls against severe afterload", ["Hyperperfusion from high cardiac output", "Ureteral obstruction", "Direct drug toxicity in every case"], "Falling cardiac output with severe afterload hypoperfuses the kidney.")],
        [q("A patient with long-standing HTN presents with BP 220/130, rising creatinine, and proteinuria. Which explanation fits?", "Damaged renal autoregulation plus hypoperfusion from severe afterload", ["Prerenal azotemia from vomiting only", "Nephrolithiasis", "Normal renal adaptation"], "Chronic sclerosis removes renal protection and the crisis hypoperfuses the kidney, causing AKI and proteinuria.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-definitions", "3. Hypertensive urgency vs hypertensive emergency", "Objective 3. Slides 2, 6, 55.", [
      C("The definitions",
        tbl(["", "Hypertensive urgency", "Hypertensive emergency (hypertensive crisis)"], [
          ["BP", "<strong>SBP ≥ 180 and/or DBP ≥ 120</strong>", "<strong>SBP ≥ 180 and/or DBP ≥ 120</strong>"],
          ["Target organs", "<strong>No</strong> acute or progressing target-organ injury", "<strong>Acute or progressing target-organ damage</strong>"],
          ["Setting", "Can be treated outpatient", "ICU/stepdown, IV medications"]]) +
        hy("Same numbers, different organs. The BP threshold is identical (≥ 180/120); only <strong>acute target-organ damage</strong> makes it an emergency.") +
        mn("<strong>U</strong>rgency = <strong>U</strong>ndamaged organs. <strong>E</strong>mergency = <strong>E</strong>nd-organ damage."),
        ["urgency-definition", "emergency-definition"],
        [q("What BP defines hypertensive urgency?", "SBP ≥ 180 and/or DBP ≥ 120 without acute target-organ injury", ["SBP ≥ 140 and/or DBP ≥ 90", "SBP ≥ 160 and/or DBP ≥ 100 with organ damage", "SBP ≥ 220 only"], "Urgency is ≥ 180/120 with no acute or progressing target-organ injury."),
          q("What distinguishes a hypertensive emergency from urgency?", "Acute or progressing target-organ damage", ["A higher BP threshold", "Presence of a headache", "Age over 65"], "Both share the ≥ 180/120 threshold; emergency requires acute target-organ damage."),
          q("Hypertensive emergency is also called:", "Hypertensive crisis", ["Resistant hypertension", "White coat hypertension", "Stage 2 hypertension"], "The lecture uses hypertensive crisis as another name for hypertensive emergency.")],
        [q("A 55-year-old who ran out of his medications has BP 196/124 at a routine visit. He has no symptoms, a normal exam, and normal labs. Diagnosis?", "Hypertensive urgency", ["Hypertensive emergency", "Stage 1 hypertension", "White coat hypertension"], "≥ 180/120 without target-organ injury is urgency."),
          q("A 60-year-old has BP 184/118 with crushing chest pain and an elevated troponin. Diagnosis?", "Hypertensive emergency", ["Hypertensive urgency", "Normal BP response to pain only", "Resistant hypertension"], "SBP ≥ 180 with acute MI is target-organ damage, an emergency."),
          q("Two patients both have BP 210/130. One is confused with papilledema; the other feels well with a normal exam. How are they classified?", "The confused patient has an emergency; the other has urgency", ["Both have emergencies because of the BP", "Both have urgencies because the BP is the same", "Neither meets criteria"], "Classification depends on acute organ damage, not the number.")]),
      C("Target organs in a hypertensive emergency",
        tbl(["System", "Acute damage (slide 2)", "Presenting symptoms (slide 55)"], [
          ["<strong>CNS</strong>", "Stroke (ischemic or hemorrhagic), encephalopathy", "Altered mental status, focal neuro deficit, intractable vomiting"],
          ["<strong>Cardiopulmonary</strong>", "Acute LV failure with pulmonary edema, MI, aortic dissection, unstable angina", "Chest pain, dyspnea, back pain"],
          ["<strong>Renal</strong>", "AKI", "Decreased urine output"],
          ["<strong>Obstetric</strong>", "Eclampsia / preeclampsia", "Seizure, headache, visual disturbance; typically &gt; 20 weeks' gestation and &lt; 6 weeks postpartum"]]) +
        "<p>Three systems are most commonly affected: <strong>CNS, cardiopulmonary, and renal</strong>. Other damage involves the eyes (retinopathy), the vasculature (MAHA), and in pregnancy, mom and baby.</p>" +
        "<p>No end-organ dysfunction → discharge and <strong>initiate or intensify</strong> the antihypertensive regimen.</p>",
        ["target-organs", "symptom-groups"],
        [q("Which three organ systems are most commonly damaged in hypertensive emergency?", "CNS, cardiopulmonary, and renal", ["Liver, pancreas, and skin", "Eyes, joints, and bone", "Thyroid, adrenal, and pituitary"], "The lecture names CNS, cardiopulmonary, and renal as the three broad categories."),
          q("Which symptom on the emergency algorithm points to renal end-organ damage?", "Decreased urine output", ["Back pain", "Intractable vomiting", "Visual disturbance"], "Renal involvement presents with decreased urine output."),
          q("Obstetric hypertensive emergency typically occurs:", "After 20 weeks' gestation and up to 6 weeks postpartum", ["Only in the first trimester", "Only during labor", "Only after 6 months postpartum"], "The algorithm notes preeclampsia/eclampsia typically after 20 weeks and within 6 weeks postpartum.")],
        [q("A patient with BP 200/125 reports tearing back pain. Which system is the algorithm pointing you toward?", "Cardiopulmonary, concern for aortic dissection", ["Renal", "Obstetric", "No end-organ damage"], "Back pain is a cardiopulmonary symptom; aortic dissection must be considered."),
          q("A patient with BP 190/120 has no symptoms, a normal exam, and normal labs and imaging. What does the algorithm direct?", "Discharge and initiate or intensify the antihypertensive regimen", ["ICU admission for IV nitroprusside", "Emergency cesarean section", "Immediate CT angiography of the chest"], "Without end-organ dysfunction, the patient is discharged with intensified therapy.")])
    ]),

    /* ---------- 4a ---------- */
    S("04a-causes-pathophysiology", "4a. Crisis vs hypertension: causes and pathophysiology", "Objective 4 (definition and pathophysiology). Slides 3–5.", [
      C("Causes of hypertensive crisis",
        ul(["<strong>Non-adherence to antihypertensive medication (most common)</strong>",
          "Undiagnosed hypertension",
          "<strong>Abrupt cessation</strong> of an antihypertensive: <strong>beta-blocker or clonidine</strong> (rebound)",
          "CKD",
          "OSA",
          "Drugs: <strong>cocaine, amphetamines, diet pills, phenylephrine</strong>"]) +
        hy("The most common cause of hypertensive crisis is <strong>not taking the antihypertensive</strong>.") +
        mn("<strong>MUD-COD</strong>: Missed meds, Undiagnosed HTN, Discontinued BB/clonidine, CKD, OSA, Drugs."),
        ["causes"],
        [q("What is the most common cause of hypertensive crisis?", "Non-adherence to antihypertensive medication", ["Pheochromocytoma", "Renal artery stenosis", "Cocaine use"], "Medication non-adherence is the most common cause."),
          q("Abrupt cessation of which two drug types can precipitate hypertensive crisis?", "Beta-blockers and clonidine", ["Thiazides and loop diuretics", "Statins and aspirin", "ACE inhibitors and ARBs"], "Stopping a beta-blocker or clonidine suddenly causes rebound hypertension."),
          q("Which over-the-counter decongestant is listed as a drug cause of hypertensive crisis?", "Phenylephrine", ["Loratadine", "Guaifenesin", "Acetaminophen"], "Phenylephrine is listed with cocaine, amphetamines, and diet pills.")],
        [q("A 48-year-old on clonidine ran out 2 days ago and now has BP 210/124 with headache and tremor. Most likely cause?", "Rebound hypertension from abrupt clonidine cessation", ["Undiagnosed pheochromocytoma", "White coat hypertension", "Renal artery stenosis"], "Abrupt clonidine (or beta-blocker) discontinuation precipitates crisis."),
          q("A 52-year-old with known HTN presents with BP 200/120. Before blaming a rare cause, what should you ask about first?", "Whether he has been taking his antihypertensive medications", ["Family history of pheochromocytoma", "Recent travel", "Childhood vaccinations"], "Non-adherence is the most common cause of crisis.")]),
      C("Pathophysiology: crisis vs chronic hypertension",
        "<p>The events of a crisis are incompletely understood, but the lecture describes a vicious cycle:</p>" +
        "<ol><li><strong>Abrupt rise in SVR</strong>, possibly mediated by <strong>humoral vasoconstrictors</strong> from the wall of a stressed vessel.</li>" +
        "<li>Endothelium adapts with smooth muscle hypertrophy and vasoconstriction.</li>" +
        "<li>Prolonged contraction → <strong>endothelial dysfunction, ↓ nitric oxide, failure of autoregulation</strong>.</li>" +
        "<li><strong>Focal vasodilation and endothelial damage</strong> → vascular permeability.</li>" +
        "<li><strong>Fibrinoid necrosis</strong>, activation of the <strong>clotting cascade</strong>, inflammatory factors.</li>" +
        "<li>More vasoconstrictors released (<strong>angiotensin II, norepinephrine, vasopressin</strong>) → back to step 1.</li></ol>" +
        tbl(["", "Chronic hypertension", "Hypertensive emergency"], [
          ["Onset", "Gradual, over years", "Abrupt rise in SVR"],
          ["Vessels", "Remodel and adapt", "Autoregulation fails; fibrinoid necrosis, permeability"],
          ["Organs", "Slow damage (LVH, CKD, retinopathy)", "<strong>Acute</strong> damage (stroke, MI, pulmonary edema, AKI)"]]),
        ["crisis-pathophysiology", "vicious-cycle"],
        [q("What starts the pathophysiology of hypertensive crisis according to the lecture?", "An abrupt rise in systemic vascular resistance", ["A sudden drop in cardiac output", "Massive vasodilation", "Low angiotensin II levels"], "The crisis begins with an abrupt rise in SVR, possibly from humoral vasoconstrictors."),
          q("Which vascular lesion results from endothelial damage in a hypertensive emergency?", "Fibrinoid necrosis", ["Fatty streaks", "Caseating granulomas", "Amyloid deposits"], "Endothelial damage leads to fibrinoid necrosis and clotting cascade activation."),
          q("Which vasoconstrictors are released in increasing amounts during a hypertensive crisis?", "Angiotensin II, norepinephrine, and vasopressin", ["Nitric oxide, prostacyclin, and bradykinin", "Insulin, glucagon, and cortisol", "Histamine and serotonin only"], "Ang II, NE, and vasopressin perpetuate the vicious cycle.")],
        [q("A patient in hypertensive emergency has worsening BP despite rest. Which mechanism explains why the BP keeps climbing on its own?", "Endothelial damage releases more vasoconstrictors, raising SVR further", ["Nitric oxide production increases", "Autoregulation improves over time", "Baroreceptors cause vasodilation"], "Endothelial injury, clotting, inflammation, and released vasoconstrictors form a self-perpetuating cycle.")])
    ]),

    /* ---------- 4b ---------- */
    S("04b-history", "4b. Crisis vs hypertension: history", "Objective 4 (history). Slides 22–23.", [
      C("Background: the hypertension and its treatment",
        ul(["<strong>Duration and severity</strong> of preexisting HTN and degree of control",
          "<strong>Medication history and compliance</strong>",
          "<strong>OTC meds, supplements, and illicit drugs</strong> (cocaine, meth)",
          "<strong>Previous end-organ dysfunction</strong>: cardiovascular, renal, cerebrovascular disease"]) +
        "<p><strong>Contrast:</strong> the routine hypertension history screens for risk factors, secondary causes, and chronic complications over time. The crisis history hunts for the <strong>trigger</strong> of the acute rise and for <strong>acute</strong> organ damage.</p>",
        ["htn-history", "contrast-history"],
        [q("Which history element helps identify the most common cause of crisis?", "Medication history and compliance", ["Childhood illnesses", "Occupational exposures", "Vaccination history"], "Non-adherence is the most common cause, so compliance is a key history question."),
          q("Which illicit drugs does the lecture specifically name in the crisis history?", "Cocaine and methamphetamine", ["Marijuana and LSD", "Heroin and fentanyl", "Psilocybin and ketamine"], "Ask about cocaine and meth.")],
        [q("A patient in hypertensive crisis says he takes \"just some diet pills from the store.\" Why does this matter?", "OTC diet pills and supplements can cause hypertensive crisis", ["Diet pills only cause hypotension", "It is irrelevant to BP", "It rules out an emergency"], "OTC meds, supplements, and diet pills are part of the crisis history and can precipitate crisis.")]),
      C("Triggers and other conditions",
        ul(["<strong>Recent head injury or trauma</strong>",
          "Other medical problems: <strong>thyroid disease, Cushing's, systemic lupus</strong>",
          "<strong>Pregnancy</strong>",
          "Recent prescription meds: <strong>MAOIs</strong>",
          "<strong>Recent discontinuation of a beta-blocker or clonidine</strong>"]) +
        hy("Always ask: pregnant? stopped a beta-blocker or clonidine? on an MAOI? head trauma?"),
        ["trigger-history"],
        [q("Which prescription drug class is named as a crisis trigger in the history?", "MAOIs", ["SSRIs", "Proton pump inhibitors", "Statins"], "Recent use of MAOIs is listed."),
          q("Which endocrine or systemic conditions are listed in the crisis history?", "Thyroid disease, Cushing's, and systemic lupus", ["Type 1 diabetes, gout, and psoriasis", "Asthma, COPD, and allergies", "Hypothyroidism only"], "Thyroid disease, Cushing's, and SLE are listed."),
          q("Which recent event in the history could explain new severe hypertension with neurologic findings?", "Head injury or trauma", ["A recent dental cleaning", "A flu vaccine", "A week of constipation"], "Recent head injury or trauma is part of the crisis history.")],
        [q("A 29-year-old woman presents with BP 186/122, headache, and visual changes. Which history question is essential?", "Whether she is pregnant or recently postpartum", ["Whether she has had chickenpox", "Her shoe size", "Whether she exercises daily"], "Pregnancy changes the diagnosis (preeclampsia/eclampsia) and the drug choices."),
          q("A depressed patient on phenelzine ate aged cheese and now has BP 230/130 with severe headache. Which history item explains this?", "Recent MAOI use", ["Recent beta-blocker initiation", "OSA", "CKD"], "MAOI use is a listed history trigger for hypertensive crisis.")])
    ]),

    /* ---------- 4c ---------- */
    S("04c-physical-exam", "4c. Crisis vs hypertension: physical exam", "Objective 4 (physical exam). Slides 24–26.", [
      C("Vitals and pulses",
        "<p>The crisis exam looks for <strong>end-organ dysfunction</strong>.</p>" +
        tbl(["Exam step", "Why"], [
          ["BP <strong>supine and standing</strong>", "Assess <strong>volume depletion</strong>"],
          ["BP in <strong>both arms</strong>", "A difference suggests <strong>aortic dissection</strong>"],
          ["<strong>Carotid, brachial, femoral pulses</strong>", "Weak or absent pulse suggests <strong>aortic dissection</strong>"]]) +
        hy("Unequal arm pressures or a missing pulse in a hypertensive patient = think <strong>aortic dissection</strong>."),
        ["bp-technique", "pulses"],
        [q("Why is BP measured in both arms in hypertensive crisis?", "A difference between arms suggests aortic dissection", ["To check for white coat effect", "To detect volume depletion", "To calculate MAP"], "Interarm BP difference suggests aortic dissection."),
          q("Why is BP measured supine and standing in hypertensive crisis?", "To assess volume depletion", ["To detect aortic dissection", "To diagnose PRES", "To check for retinopathy"], "Orthostatic measurements assess volume status."),
          q("Which pulse finding suggests aortic dissection?", "A weak or absent carotid, brachial, or femoral pulse", ["Bounding radial pulses bilaterally", "A regular pulse of 70", "Pulsus paradoxus only"], "Weak or absent pulses suggest dissection.")],
        [q("A 62-year-old with BP 210/120 in the right arm and 160/96 in the left has severe chest pain. What diagnosis must be excluded first?", "Aortic dissection", ["Stable angina", "Costochondritis", "Hypertensive urgency"], "A large interarm BP difference with pain suggests aortic dissection."),
          q("A patient with BP 200/118 has an absent left femoral pulse and acute severe back pain. What is the concern?", "Aortic dissection", ["Lumbar strain", "Kidney stone", "Hypertensive urgency"], "Absent pulses and acute severe back pain suggest dissection.")]),
      C("Eyes, cardiopulmonary, CNS, and abdomen",
        tbl(["System", "Look for"], [
          ["<strong>Eyes</strong> (fundoscopy)", "New <strong>retinal flame hemorrhages</strong>, <strong>exudates</strong>, <strong>papilledema</strong>"],
          ["<strong>Cardiopulmonary</strong>", "<strong>JVD</strong>, <strong>crackles (rales)</strong>, dyspnea/orthopnea, peripheral edema, <strong>acute severe back pain</strong>"],
          ["<strong>CNS</strong>", "Agitation/delirium, visual deficits, focal neurologic signs, seizures; <strong>N/V may suggest ↑ ICP</strong>"],
          ["<strong>Abdomen</strong>", "Abdominal masses or bruits"]]) +
        "<p><strong>Contrast:</strong> the routine HTN exam documents chronic damage and clues to secondary causes. The crisis exam asks whether an organ is failing <strong>right now</strong>.</p>",
        ["fundoscopic", "cardiopulmonary-exam", "cns-exam", "abdominal-exam"],
        [q("Which fundoscopic findings suggest hypertensive emergency?", "New flame hemorrhages, exudates, or papilledema", ["Cherry-red spot", "Drusen only", "Normal red reflex"], "Fundoscopy looks for new retinal flame hemorrhages, exudates, or papilledema."),
          q("Which crisis exam finding may suggest increased intracranial pressure?", "Nausea and vomiting", ["Peripheral edema", "Abdominal bruit", "Unequal arm BPs"], "N/V may suggest increased ICP."),
          q("Which cardiopulmonary findings suggest acute LV failure in a crisis?", "JVD, crackles, and orthopnea", ["Abdominal bruit and mass", "Papilledema and seizures", "Cool feet with absent hair"], "JVD, rales, dyspnea/orthopnea, and edema point to LV failure with pulmonary edema."),
          q("Which abdominal findings may be noted on the crisis exam?", "Abdominal masses or bruits", ["Murphy's sign", "Caput medusae", "Rovsing's sign"], "Abdominal masses or bruits may be noted.")],
        [q("A patient with BP 220/134 has bibasilar crackles, JVD, and orthopnea. Which end-organ damage is present?", "Acute LV failure with pulmonary edema", ["Hypertensive encephalopathy", "Aortic dissection", "No end-organ damage"], "These findings show acute LV dysfunction with pulmonary congestion."),
          q("A patient with BP 230/140 has a headache; fundoscopy shows bilateral papilledema and flame hemorrhages. How should this be classified?", "Hypertensive emergency with retinal and possible CNS involvement", ["Hypertensive urgency", "Normal finding for chronic HTN", "Migraine"], "New papilledema and flame hemorrhages are acute end-organ findings.")])
    ]),

    /* ---------- 4d ---------- */
    S("04d-workup", "4d. Crisis vs hypertension: diagnostic work-up", "Objective 4 (diagnostic work-up). Slides 27–28, 55.", [
      C("Labs: kidney, urine, and blood count",
        tbl(["Test", "Looking for"], [
          ["<strong>Serum chemistry</strong>", "New <strong>AKI</strong>: BUN, Cr, calculated eGFR"],
          ["<strong>Urinalysis</strong>", "Hematuria, <strong>proteinuria</strong>, RBCs, <strong>RBC casts</strong>"],
          ["<strong>CBC</strong>", "New anemia → add <strong>LFTs, haptoglobin, peripheral smear</strong> to exclude <strong>microangiopathic hemolytic anemia</strong>"]]),
        ["chem-ua", "cbc-maha"],
        [q("Which labs evaluate for new AKI in hypertensive crisis?", "BUN, creatinine, and eGFR on a chemistry panel", ["TSH and free T4", "Lipase and amylase", "Hemoglobin A1c"], "A chemistry panel with BUN, Cr, and eGFR looks for AKI."),
          q("If a CBC shows new anemia in a hypertensive emergency, which tests are added?", "LFTs, haptoglobin, and a peripheral smear", ["Iron studies only", "Vitamin B12 and folate", "Hemoglobin electrophoresis"], "These exclude microangiopathic hemolytic anemia."),
          q("Which urinalysis findings are sought in hypertensive crisis?", "Hematuria, proteinuria, RBCs, or RBC casts", ["Glucose and ketones only", "Nitrites and leukocyte esterase only", "Crystals only"], "UA looks for hematuria, proteinuria, RBCs, and RBC casts.")],
        [q("A patient in hypertensive emergency has hemoglobin 9.1 (new) and fragmented RBCs suspected. What should be ordered next?", "LFTs, haptoglobin, and a peripheral blood smear", ["Bone marrow biopsy", "Colonoscopy", "Iron infusion"], "New anemia prompts testing to exclude MAHA.")]),
      C("Troponin, toxicology, pregnancy, and imaging",
        ul(["<strong>hs-troponin now and in 60–90 minutes</strong>; if elevated, repeat <strong>every 6–8 hours × 2</strong>.",
          "<strong>Urine toxicology</strong>, <strong>pregnancy test</strong>, endocrine testing if suspicious.",
          "Imaging is directed by the presentation: <strong>CXR</strong> for dyspnea or chest pain; <strong>non-contrast CT head</strong> for AMS or neurologic changes."]) +
        tbl(["Algorithm branch (slide 55)", "Work-up"], [
          ["CNS", "CT head, CTA brain/neck, MRI brain"],
          ["Renal", "BMP, UA"],
          ["Cardiopulmonary", "CXR, ECG, troponin, CTA chest"],
          ["Obstetric", "CBC, BMP, LFT, UA, protein:creatinine"]]) +
        "<p><strong>Contrast with hypertension:</strong> the new-diagnosis work-up (basic labs, lipids, EKG) stratifies long-term risk; the crisis work-up looks for <strong>acute</strong> organ injury and the trigger.</p>" +
        hy("Neuro change → non-contrast CT head. Chest pain or dyspnea → CXR, ECG, serial hs-troponin."),
        ["troponin", "tox-pregnancy", "imaging", "contrast-workup"],
        [q("When should hs-troponin be repeated after the first draw in a hypertensive crisis?", "In 60–90 minutes", ["In 24 hours", "In 1 week", "It is never repeated"], "hs-troponin now and in 60–90 minutes; if elevated, every 6–8 hours × 2."),
          q("Which imaging is indicated for altered mental status in hypertensive crisis?", "Non-contrast CT head", ["CXR", "Abdominal ultrasound", "Contrast CT abdomen"], "AMS or neurologic changes call for a non-contrast CT head."),
          q("Which two tests besides labs does the lecture list for most crisis patients to find a trigger?", "Urine toxicology screen and pregnancy test", ["Sweat chloride and sputum culture", "Lumbar puncture and EEG", "Colonoscopy and EGD"], "A urine tox and pregnancy test are part of the work-up."),
          q("If the initial hs-troponin is elevated, how often is it repeated?", "Every 6–8 hours × 2", ["Every 15 minutes", "Once in a month", "Daily for 2 weeks"], "Elevated troponin is repeated every 6–8 hours two times.")],
        [q("A 45-year-old with BP 214/128 has chest pain and dyspnea. Which initial studies fit the lecture?", "CXR, ECG, and serial hs-troponin", ["Non-contrast CT head only", "Lumbar puncture", "Renal biopsy"], "Cardiopulmonary symptoms direct a CXR, ECG, and troponin (CTA chest if dissection is suspected)."),
          q("A 33-year-old woman has BP 182/122 with headache. What test must not be skipped?", "Pregnancy test", ["Colonoscopy", "Pulmonary function testing", "Bone density scan"], "Pregnancy testing is part of the work-up and changes management.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-cns-effects", "5. CNS effects of hypertensive emergency", "Objective 5. Slides 7–14.", [
      C("Hypertensive encephalopathy",
        "<p>Altered mentation/<strong>confusion</strong> due to <strong>generalized edema of the brain</strong> from high hydrostatic pressures and cerebral congestion.</p>" +
        "<p>Responds to <strong>gradual</strong> BP lowering and slowly improves over <strong>2–4 days</strong>. Algorithm drug: <strong>nicardipine</strong>.</p>",
        ["encephalopathy"],
        [q("What causes hypertensive encephalopathy?", "Generalized cerebral edema from high hydrostatic pressure and congestion", ["A single embolus to the MCA", "Rupture of a berry aneurysm", "Bacterial infection of the meninges"], "Hypertensive encephalopathy is generalized brain edema from high pressure."),
          q("What is the main clinical feature of hypertensive encephalopathy?", "Altered mentation or confusion", ["Unilateral facial droop only", "Isolated hearing loss", "Tearing back pain"], "Altered mentation/confusion characterizes hypertensive encephalopathy.")],
        [q("A 50-year-old who stopped his meds is confused with BP 240/140. CT head shows no bleed or infarct. Most likely diagnosis?", "Hypertensive encephalopathy", ["Ischemic stroke of the MCA", "Subarachnoid hemorrhage", "Hypoglycemia"], "Confusion from generalized edema with no focal lesion is hypertensive encephalopathy.")]),
      C("Posterior reversible encephalopathy syndrome (PRES)",
        ul(["Symptoms: <strong>vision changes, seizures, severe headache</strong>, brain edema; AMS may occur.",
          "Edema most commonly in the <strong>bilateral occipital and parietal lobes</strong>.",
          "Seen best on <strong>MRI</strong>: hyperintense lesions in subcortical white matter and cortical gray matter of the bilateral parieto-occipital regions.",
          "Both PRES and hypertensive encephalopathy respond to <strong>gradual</strong> BP lowering and <strong>improve slowly over 2–4 days</strong>."]) +
        mn("<strong>P</strong>RES = <strong>P</strong>osterior: occipital lobes → <strong>vision</strong> changes."),
        ["pres", "pres-imaging", "gradual-recovery"],
        [q("Which brain regions are most commonly affected in PRES?", "Bilateral occipital and parietal lobes", ["Bilateral frontal lobes", "Cerebellum only", "Brainstem only"], "PRES edema most often affects the bilateral occipital and parietal lobes."),
          q("Which imaging test shows PRES best?", "MRI", ["Non-contrast CT", "Plain skull x-ray", "Carotid ultrasound"], "PRES is seen best on MRI."),
          q("Over what time course do PRES and hypertensive encephalopathy improve with treatment?", "Slowly over 2–4 days", ["Within 10 minutes", "Over 6 months", "They never improve"], "Both slowly improve over 2–4 days with gradual BP lowering."),
          q("Which symptom set is typical of PRES?", "Vision changes, seizures, and severe headache", ["Tearing chest pain and pulse deficit", "Chest pain and diaphoresis", "Hematuria and flank pain"], "PRES causes vision changes, seizures, severe HA, and brain edema.")],
        [q("A 35-year-old with BP 220/130 has a seizure, severe headache, and blurry vision. MRI shows bilateral parieto-occipital hyperintensities. Diagnosis?", "Posterior reversible encephalopathy syndrome", ["Lacunar infarct", "Subarachnoid hemorrhage", "Multiple sclerosis"], "Seizure, vision change, HA, and posterior edema on MRI define PRES."),
          q("A patient with PRES is treated with gradual BP lowering. On day 1 her vision has not fully returned. What is expected?", "Gradual improvement over 2–4 days", ["Immediate full recovery within an hour", "Permanent blindness", "Worsening is expected and normal"], "PRES responds to gradual BP lowering and slowly improves over 2–4 days.")]),
      C("Ischemic stroke and lacunar infarcts",
        ul(["An <strong>ischemic stroke</strong> can occur anywhere, from an <strong>embolus</strong> that travels to the brain or <strong>rupture of an arteriosclerotic plaque</strong> causing <strong>in situ thrombosis</strong>.",
          "Chronically uncontrolled HTN classically causes <strong>lacunar strokes</strong> in the <strong>small penetrating arteries of the MCA</strong> (lenticulostriate arteries) affecting the <strong>basal ganglia</strong>."]) +
        hy("Chronic HTN + small deep infarct in the basal ganglia = <strong>lacunar stroke</strong>."),
        ["ischemic-stroke", "lacunar"],
        [q("Which stroke type does chronically uncontrolled hypertension classically cause?", "Lacunar stroke", ["Watershed infarct from hypotension", "Cardioembolic stroke from AF", "Venous sinus thrombosis"], "Chronic HTN classically causes lacunar strokes."),
          q("Lacunar strokes from chronic HTN occur in which vessels?", "Small penetrating arteries of the MCA supplying the basal ganglia", ["The basilar artery trunk", "The anterior communicating artery", "The superior sagittal sinus"], "They affect the small penetrating MCA branches to the basal ganglia."),
          q("What are the two mechanisms of ischemic stroke named in the lecture?", "A traveling embolus or plaque rupture with in situ thrombosis", ["Aneurysm rupture or vessel tear", "Vasospasm or hypoglycemia", "Cerebral edema or hydrocephalus"], "Embolus or rupture of an arteriosclerotic plaque causing in situ thrombosis.")],
        [q("A 70-year-old with long-standing uncontrolled HTN has pure motor weakness of one side. MRI shows a small deep infarct in the basal ganglia. Diagnosis?", "Lacunar stroke", ["Subarachnoid hemorrhage", "PRES", "Hypertensive encephalopathy"], "A small deep basal ganglia infarct in chronic HTN is a lacunar stroke.")]),
      C("Intraparenchymal (hemorrhagic) stroke",
        ul(["Occurs with <strong>acutely elevated BP</strong> or as a consequence of <strong>long-standing poorly controlled HTN</strong>.",
          "Often in the <strong>basal ganglia</strong>, from the <strong>small penetrating arteries off the MCA</strong>.",
          "CT: intraparenchymal blood is <strong>bright white</strong>; surrounding vasogenic edema is <strong>darker grey</strong>."]) +
        "<p><strong>Why it is tricky in long-standing HTN:</strong> the brain has adapted to high pressure (right-shifted autoregulation). High BP worsens the bleed, but lowering BP too far drops perfusion to surrounding brain, which is already compressed by blood and edema (CPP = MAP − ICP).</p>" +
        hy("ICH = a tug of war: lower BP to limit bleeding vs keep BP high enough to perfuse a brain adapted to high pressure."),
        ["ich", "ich-ct", "ich-dilemma"],
        [q("Where do hypertensive intraparenchymal hemorrhages often occur?", "Basal ganglia, from small penetrating arteries off the MCA", ["Occipital cortex, from the PCA trunk", "Subdural space, from bridging veins", "Spinal cord"], "Hypertensive ICH often arises in the basal ganglia from small penetrating MCA branches."),
          q("How does acute intraparenchymal blood appear on CT?", "Bright white, with darker grey surrounding edema", ["Black, with white surrounding edema", "Invisible on CT", "Grey identical to brain"], "Acute blood is bright white; vasogenic edema is darker grey."),
          q("Why is BP management tricky in ICH with long-standing HTN?", "The brain is adapted to high pressure, so lowering too far risks ischemia while high BP worsens bleeding", ["BP has no effect on bleeding", "All antihypertensives are contraindicated", "ICH always requires raising BP"], "Competing interests: stop bleeding vs maintain perfusion.")],
        [q("A 66-year-old with untreated HTN has sudden headache and left hemiparesis. CT shows a bright white lesion in the right basal ganglia with dark rim. Diagnosis?", "Hypertensive intraparenchymal hemorrhage", ["Lacunar ischemic stroke", "PRES", "Meningioma"], "Bright white blood in the basal ganglia is a hypertensive intraparenchymal hemorrhage.")]),
      C("Subarachnoid hemorrhage (as taught)",
        "<p>The slide (14) states:</p>" +
        ul(["Blood collects between the skull and the brain, applying <strong>external pressure</strong> to cerebral tissue.",
          "Imaging: <strong>concave hyperdense (white) blood</strong> following the curve of the skull and overlying the folds of the brain.",
          "Fairly easily treated with a <strong>burr hole and evacuation</strong>."]) +
        clar("a crescent along the skull treated with a burr hole is the classic picture of a <strong>subdural hematoma</strong>. A true subarachnoid hemorrhage is blood in the subarachnoid space, classically from a ruptured aneurysm. Learn what the slide says for the exam, and ask your instructor if a question hinges on this.") +
        "<p>Treatment exception: SAH is treated like ICH (determine whether ICP is raised; nicardipine is DOC; avoid nitroprusside and hydralazine); algorithm goal <strong>SBP &lt; 160</strong>.</p>",
        ["sah"],
        [q("How does the lecture describe the appearance of its subarachnoid hemorrhage image?", "Concave hyperdense blood following the curve of the skull", ["Biconvex lens that does not cross sutures", "Dark hypodense area in the basal ganglia", "Bilateral occipital edema on MRI"], "The slide describes concave hyperdense blood following the curve of the skull."),
          q("What treatment does the lecture state for the hemorrhage collecting between skull and brain?", "Burr hole and evacuation", ["IV tPA", "Long-term warfarin", "Lumbar puncture only"], "The slide says it is fairly easily treated with a burr hole and evacuation."),
          q("What is the algorithm SBP goal for subarachnoid hemorrhage?", "Below 160 mmHg", ["Below 100 mmHg", "Below 220 mmHg", "No BP goal"], "The slide 55 algorithm gives SAH an SBP goal below 160.")],
        [q("A hypertensive patient's CT shows a concave rim of white blood along the inner skull that compresses the brain. Following the lecture, what is the likely procedure?", "Burr hole and evacuation", ["Thrombolysis", "Carotid endarterectomy", "Observation only, no BP control"], "The slide states this collection is treated with a burr hole and evacuation.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-cardiac-effects", "6. Cardiac effects of hypertensive emergency", "Objective 6. Slides 15–18, 24–25.", [
      C("Aortic dissection",
        ul(["High aortic pressure causes <strong>tears in the intima</strong> that widen rapidly.",
          "Blood is forced into the space <strong>between the intima and the media</strong>; the dissection worsens quickly and can <strong>rupture</strong>."]) +
        tbl(["Exam finding", "Meaning"], [
          ["<strong>BP difference between arms</strong>", "Suggests dissection"],
          ["<strong>Weak or absent</strong> carotid, brachial, or femoral pulse", "Suggests dissection"],
          ["<strong>Acute severe back pain</strong>", "Cardiopulmonary symptom pointing to dissection"]]) +
        "<p>Work-up: <strong>CTA chest</strong> on the cardiopulmonary branch.</p>",
        ["dissection-mechanism", "dissection-exam"],
        [q("Where does blood travel in an aortic dissection?", "Between the intima and the media", ["Between the media and the pericardium", "Into the pleural space only", "Into the coronary sinus"], "Blood is forced into the space between the intima and media."),
          q("Which three exam findings suggest aortic dissection in a hypertensive crisis?", "Interarm BP difference, weak or absent pulses, acute severe back pain", ["Papilledema, seizure, confusion", "Rales, JVD, edema", "Proteinuria, hematuria, oliguria"], "These findings point to dissection."),
          q("Which imaging test is on the algorithm for suspected dissection?", "CTA chest", ["MRI brain", "Renal ultrasound", "Upper GI series"], "The cardiopulmonary branch includes CTA chest.")],
        [q("A 59-year-old with BP 220/110 has sudden severe back pain and a weak left radial pulse. What is the next imaging?", "CTA chest", ["Lumbar spine x-ray", "Abdominal ultrasound for gallstones", "No imaging; give muscle relaxants"], "Back pain with pulse deficit in a crisis suggests dissection; image with CTA chest.")]),
      C("Myocardial ischemia and infarction",
        "<p>Includes <strong>STEMI, NSTEMI, and unstable angina</strong>.</p>" +
        ul(["The coronaries perfuse the heart muscle during <strong>diastole</strong>.",
          "High aortic pressure, <strong>severely elevated afterload</strong>, and <strong>hypertrophy</strong> mean the coronaries are less likely to be perfused.",
          "A tense, stiff, hypertrophied myocardium <strong>needs more oxygen</strong> and <strong>may not relax enough</strong> for diastolic filling.",
          "Patients have <strong>troponin elevation</strong> and may develop <strong>EKG changes</strong>."]) +
        hy("Supply falls (poor diastolic coronary filling) while demand rises (afterload + LVH) → ischemia."),
        ["acs-mechanism", "acs-findings"],
        [q("During which part of the cardiac cycle are the coronary arteries perfused?", "Diastole", ["Systole", "Isovolumetric contraction only", "Atrial systole only"], "The coronaries perfuse the heart muscle during diastole."),
          q("Which lab finding marks myocardial injury in hypertensive emergency?", "Troponin elevation", ["Elevated lipase", "Low TSH", "Positive D-dimer only"], "Patients have troponin elevation and may develop EKG changes."),
          q("Why does a hypertrophied, stiff myocardium become ischemic in a crisis?", "It needs more oxygen and may not relax enough for filling", ["It needs less oxygen", "It receives more coronary flow", "It relaxes faster in diastole"], "Increased demand plus impaired relaxation reduce the oxygen balance.")],
        [q("A patient with BP 226/128 has chest pressure, ST depressions, and a rising troponin. What end-organ damage is present?", "Myocardial ischemia/NSTEMI from hypertensive emergency", ["Aortic dissection", "Hypertensive urgency", "Pericarditis"], "Troponin elevation with EKG changes is myocardial injury.")]),
      C("Acute LV dysfunction and flash pulmonary edema",
        ul(["Afterload (aortic pressure) becomes so high that <strong>forward movement of blood out of the LV is compromised</strong>.",
          "Blood <strong>backs up into the lungs</strong>, causing pulmonary vascular congestion that progressively worsens.",
          "Exam: <strong>JVD, crackles (rales), dyspnea/orthopnea, peripheral edema</strong>."]) +
        hy("Flash pulmonary edema in a crisis is an <strong>afterload</strong> problem: the LV cannot push forward, so blood backs up into the lungs."),
        ["flash-pulmonary-edema", "hf-exam"],
        [q("What causes acute pulmonary edema in hypertensive emergency?", "Afterload so high that blood cannot move forward out of the LV", ["Low afterload with high cardiac output", "Right ventricular infarction", "Pulmonary embolism"], "Extreme afterload compromises forward flow and blood backs into the lungs."),
          q("Which exam findings indicate pulmonary congestion?", "Crackles, JVD, and orthopnea", ["Papilledema and seizures", "Unequal arm pressures", "Abdominal bruit"], "Rales, JVD, dyspnea/orthopnea, and edema mark congestion.")],
        [q("A 68-year-old wakes up gasping with BP 236/132, diffuse crackles, and pink frothy sputum. Which mechanism explains this?", "Severe afterload compromises LV forward flow, backing blood into the lungs", ["Pneumonia filling the alveoli", "Asthma with bronchospasm", "Low preload from dehydration"], "Hypertensive flash pulmonary edema results from extreme afterload.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-retinopathy-maha", "7. Hypertensive retinopathy, MAHA, and other end-organ damage", "Objective 7. Slides 19–20, 25, 27.", [
      C("Hypertensive retinopathy",
        ul(["<strong>Vascular changes within the retina</strong> causing <strong>exudates and microinfarctions</strong>.",
          "Exam: fundoscopy for new <strong>retinal flame hemorrhages, exudates, or papilledema</strong>."]),
        ["retinopathy"],
        [q("What does hypertensive retinopathy cause in the retina?", "Exudates and microinfarctions from vascular changes", ["Retinal detachment from trauma", "Lens opacity", "Corneal ulceration"], "Retinal vascular changes cause exudates and microinfarctions."),
          q("Which finding on fundoscopy suggests a new hypertensive emergency?", "Papilledema", ["Normal cup-to-disc ratio", "Clear red reflex", "Pale conjunctiva"], "New flame hemorrhages, exudates, or papilledema suggest acute damage.")],
        [q("A patient with BP 228/138 complains of blurred vision. Fundoscopy shows flame hemorrhages and cotton-wool exudates. Which end-organ damage is this?", "Hypertensive retinopathy", ["Diabetic retinopathy only", "Glaucoma", "Cataract"], "Flame hemorrhages and exudates in a crisis are hypertensive retinopathy.")]),
      C("Microangiopathic hemolytic anemia (MAHA)",
        ul(["<strong>Hemolysis</strong> as a result of <strong>high vascular pressures</strong>.",
          "Suspect with a <strong>new anemia</strong> on CBC → order <strong>LFTs, haptoglobin, and a peripheral blood smear</strong>."]) +
        clar("standard hemolysis findings are low haptoglobin and schistocytes (fragmented red cells) on the smear; the slides name the tests rather than the results."),
        ["maha"],
        [q("What causes microangiopathic hemolytic anemia in hypertensive emergency?", "Red cells hemolyzed by high vascular pressures", ["Iron deficiency", "Vitamin B12 deficiency", "Bone marrow failure"], "MAHA is hemolysis from high vascular pressure."),
          q("Which tests exclude MAHA when a new anemia is found?", "LFTs, haptoglobin, and peripheral blood smear", ["Ferritin and TIBC only", "Coombs test only", "Reticulocyte count only"], "The lecture lists LFTs, haptoglobin, and a peripheral smear.")],
        [q("A patient with BP 250/150 has new anemia, low haptoglobin, and schistocytes on smear. Which end-organ complication is present?", "Microangiopathic hemolytic anemia", ["Iron deficiency anemia", "Anemia of chronic disease", "Aplastic anemia"], "Hemolysis from high vascular pressures is MAHA.")]),
      C("Renal damage and preeclampsia as end-organ injury",
        ul(["<strong>AKI or proteinuria</strong>: as cardiac output falls against severe afterload, the kidney is hypoperfused and cannot filter properly.",
          "<strong>Preeclampsia/eclampsia</strong>: a pregnancy-related hypertensive crisis with <strong>placental insufficiency, proteinuria, and potential seizures</strong>.",
          "Algorithm: acute hypertensive nephrosclerosis → <strong>fenoldopam</strong>; work-up BMP and UA."]),
        ["renal-damage", "preeclampsia-organ"],
        [q("Which drug does the algorithm list for acute hypertensive nephrosclerosis?", "Fenoldopam", ["Nitroglycerin", "Esmolol", "Hydralazine"], "The slide 55 algorithm lists fenoldopam for acute hypertensive nephrosclerosis."),
          q("Which features define preeclampsia/eclampsia as end-organ damage in the lecture?", "Placental insufficiency, proteinuria, and potential seizures", ["Hematuria and flank pain", "Hypoglycemia and tremor", "Rash and joint pain"], "Preeclampsia is marked by placental insufficiency, proteinuria, and potential seizures.")],
        [q("A patient in hypertensive emergency has creatinine rising from 1.0 to 2.4 with proteinuria and falling urine output. What is the renal mechanism?", "Hypoperfusion as cardiac output falls against severe afterload", ["Contrast nephropathy", "Kidney stones", "Glomerulonephritis from strep"], "The lecture explains AKI by hypoperfusion from falling cardiac output.")])
    ]),

    /* ---------- 8a ---------- */
    S("08a-urgency-management", "8a. Treating hypertensive urgency", "Objective 8 (urgency goals and drugs). Slides 29–33.", [
      C("Two competing risks",
        tbl(["Risk of lowering too little", "Risk of lowering too fast or too far"], [
          ["Imminent CV events: <strong>aortic dissection, stroke, MI, AKI</strong>", "Adverse events: <strong>stroke, MI, AKI</strong> when BP drops below the range autoregulation can perfuse"]]) +
        "<p><strong>Elderly patients</strong> are at particular risk of complications if BP is lowered precipitously.</p>",
        ["competing-risks"],
        [q("What is the risk of lowering BP too rapidly in a hypertensive patient?", "Stroke, MI, or AKI from loss of perfusion", ["Only a mild headache", "Hyperperfusion injury", "None; faster is always better"], "Lowering BP below autoregulatory capacity can cause stroke, MI, and AKI."),
          q("Which population is at particular risk if BP is lowered precipitously?", "Elderly patients", ["Teenagers", "Marathon runners", "Pregnant women in the first trimester only"], "The lecture singles out elderly patients.")],
        [q("An 84-year-old in hypertensive urgency is given a large dose of a fast-acting oral drug and becomes dizzy and weak with a new deficit. What principle was violated?", "BP was lowered too fast for her autoregulation, especially risky in the elderly", ["BP was not lowered fast enough", "She needed a higher dose", "Urgency always requires IV nitroprusside"], "Precipitous lowering is dangerous, particularly in the elderly.")]),
      C("Where to treat urgency",
        ul(["Urgency patients in an ambulatory setting (urgent care, office) <strong>do NOT need to be sent to the ER</strong>; lower the BP <strong>outpatient</strong>.",
          "<strong>Quiet room for 30 minutes</strong>: BP falls ≥ 20/10 mmHg in <strong>one-third</strong> of patients.",
          "Send to the ER if judged at <strong>imminent risk of a CV event</strong> (known <strong>cerebral or aortic aneurysm</strong>): lower BP over <strong>2–4 hours</strong>, treated like an emergency with the same drugs.",
          "Consider admission with a history of <strong>DM, CAD, or prior CVA</strong>."]) +
        hy("Most urgency = outpatient. Aneurysm = ER."),
        ["outpatient-urgency", "quiet-room", "er-referral"],
        [q("Where should most patients with hypertensive urgency who present to an office be treated?", "In the outpatient setting", ["Always in the ER", "Always in the ICU", "In the operating room"], "Studies show office urgency patients do not need the ER."),
          q("Resting in a quiet room for 30 minutes lowers BP by at least 20/10 in what fraction of patients?", "One-third", ["Nearly all", "One in 100", "None"], "Rest alone drops BP ≥ 20/10 in a third of patients."),
          q("Which urgency patients should be sent to the ER?", "Those at imminent risk, such as a known cerebral or aortic aneurysm", ["All patients over 40", "Anyone with BP over 160/100", "Patients with a mild headache only"], "Imminent CV risk (known aneurysm) warrants the ER.")],
        [q("A 57-year-old has BP 188/122 in the office with no symptoms or organ damage and no known aneurysm. What is the best first step?", "Have him rest in a quiet room for 30 minutes and recheck", ["Send him by ambulance to the ER", "Start IV nitroprusside", "Admit to the ICU"], "Rest alone lowers BP in a third of patients; urgency is managed outpatient."),
          q("A patient with a known 5.8 cm abdominal aortic aneurysm has BP 194/120 without symptoms. Best disposition?", "Send to the ER and lower BP over 2–4 hours", ["Discharge and recheck in 3 months", "Quiet room and discharge without follow-up", "Start a single low-dose drug and see her in a year"], "Known aneurysm = imminent risk, so treat like an emergency.")]),
      C("Urgency treatment and BP goals",
        ul(["Non-adherent to a well-tolerated regimen → <strong>restart it</strong> if no contraindications.",
          "<strong>Salt restriction</strong> helps.",
          "<strong>New-onset HTN</strong> presenting with urgency → guideline therapy with <strong>2 drugs at modest doses</strong> (ACEI or ARB, CCB, thiazide).",
          "Goal: within <strong>2–4 hours</strong>, BP <strong>&lt; 160/100</strong>, or MAP reduced by <strong>no more than 25–30%</strong> over 2–4 hours (whichever is greater). Then to goal over <strong>1–2 weeks</strong>.",
          "Monitor <strong>1–2 hours</strong> for signs of end-organ damage; release as BP comes down with <strong>close outpatient follow-up</strong>."]) +
        mn("Urgency: <strong>160/100 in 2–4 hours, goal in 1–2 weeks</strong>."),
        ["restart-meds", "new-onset", "urgency-goals", "monitoring"],
        [q("What is the BP target within 2–4 hours for hypertensive urgency?", "Below 160/100 (or MAP down no more than 25–30%)", ["Below 120/80", "Below 90/60", "Below 180/120 only"], "Reduce to under 160/100, or MAP by no more than 25–30%, over 2–4 hours."),
          q("After the first hours, over what time is urgency BP brought to goal?", "1–2 weeks", ["1 hour", "1 day", "1 year"], "BP is then gradually reduced to goal over 1–2 weeks."),
          q("How should new-onset hypertension presenting as urgency be started?", "Two drugs at modest doses (ACEI or ARB, CCB, thiazide)", ["IV nitroprusside infusion", "A single maximal dose of clonidine", "No treatment until the next visit"], "Start guideline therapy with two drugs at modest doses."),
          q("How long should an urgency patient be monitored for signs of end-organ damage?", "1–2 hours", ["5 minutes", "48 hours in the ICU", "No monitoring needed"], "Monitor for 1–2 hours before release.")],
        [q("A 62-year-old ran out of lisinopril and amlodipine (both well tolerated) and has BP 192/118 without organ damage. Best management?", "Restart his previous regimen, advise salt restriction, and arrange close follow-up", ["Admit for IV nicardipine", "Switch to an entirely new class", "Lower BP to 110/70 within an hour"], "Restart a well-tolerated regimen if non-adherent, with prompt follow-up."),
          q("A 45-year-old with newly found BP 186/120 and no organ damage is in your office. What regimen fits the lecture?", "Start two drugs at modest doses, such as an ACEI plus a CCB", ["IV labetalol drip in the office", "Watchful waiting for 6 months", "Lifestyle changes only with no follow-up"], "New-onset HTN with urgency → two guideline drugs at modest doses and prompt follow-up.")])
    ]),

    /* ---------- 8b ---------- */
    S("08b-emergency-goals-drugs", "8b. Hypertensive emergency: BP goals and drugs of choice", "Objective 8 (emergency goals, drugs, drugs to avoid). Slides 34–36, 55.", [
      C("Emergency BP goals",
        tbl(["Time", "Target", "Where/how"], [
          ["Minutes to <strong>1 hour</strong>", "Reduce MAP by <strong>no more than 10–20%</strong>", "IV medications"],
          ["Next <strong>23 hours</strong>", "Reduce MAP another <strong>5–15%</strong> (algorithm: or to 160/110)", "ICU or stepdown, IV meds, close monitoring"],
          ["Days to weeks", "Continue lowering", "Oral medications"]]) +
        "<p><strong>Exceptions</strong> need faster lowering or no lowering on day 1: <strong>acute ischemic stroke, intracerebral/subarachnoid hemorrhage, aortic dissection</strong>.</p>" +
        mn("<strong>10–20 in the first hour, 5–15 by the first day</strong>, then oral over weeks."),
        ["emergency-goals", "exceptions"],
        [q("In a hypertensive emergency, how much should MAP be lowered in the first hour?", "No more than 10–20%", ["50%", "To normal (120/80)", "Not at all"], "Reduce MAP no more than 10–20% over minutes to 1 hour with IV meds."),
          q("After the first hour, how much further is MAP lowered over the next 23 hours?", "Another 5–15%", ["Another 50%", "Another 1%", "Back up by 10%"], "MAP is reduced another 5–15% over the next 23 hours."),
          q("Which conditions are exceptions to the standard emergency BP goals?", "Acute ischemic stroke, ICH/SAH, and aortic dissection", ["PRES, encephalopathy, and AKI", "Urgency and white coat HTN", "Pneumonia and asthma"], "These need faster or no lowering in the first day."),
          q("Where is the patient managed during the 23 hours after the first hour?", "ICU or stepdown unit with IV meds", ["Home on oral meds", "Outpatient clinic", "General waiting room"], "Close monitoring in ICU or stepdown with IV meds.")],
        [q("A patient in hypertensive emergency with encephalopathy has MAP 160. What is an appropriate MAP target at 1 hour?", "About 128–144 (a 10–20% reduction)", ["80 (a 50% reduction)", "160 (no reduction)", "60 (normal)"], "A 10–20% reduction from 160 gives roughly 128–144."),
          q("A resident wants to bring an emergency patient from 230/130 to 120/80 within an hour. Why is this wrong?", "MAP should fall no more than 10–20% in the first hour to protect autoregulation", ["It is too slow", "Emergencies are treated orally", "BP should not be lowered in any emergency"], "Overly rapid lowering causes ischemia in brain, heart, and kidney.")]),
      C("IV drugs for hypertensive emergency",
        tbl(["Drug", "Adverse effects", "Indications / cautions"], [
          ["<strong>Sodium nitroprusside</strong>", "N/V, muscle twitching, sweating, <strong>thiocyanate and cyanide intoxication</strong>", "Most emergencies; caution with <strong>high ICP, azotemia, CKD</strong>"],
          ["<strong>Nicardipine</strong>", "Tachycardia, headache, flushing, local phlebitis", "Most emergencies <strong>except acute heart failure</strong>; caution with coronary ischemia"],
          ["<strong>Esmolol</strong>", "Hypotension, nausea, asthma, 1st-degree heart block, decompensated HFrEF", "<strong>Aortic dissection</strong>; perioperative"],
          ["<strong>Nitroglycerin</strong>", "Headache, vomiting, methemoglobinemia, tolerance", "<strong>Coronary ischemia and heart failure</strong>"],
          ["<strong>Hydralazine</strong>", "Tachycardia, flushing, headache, vomiting, aggravation of angina", "<strong>Eclampsia</strong>"],
          ["<strong>Labetalol</strong>", "Vomiting, scalp tingling, bronchoconstriction, dizziness, heart block, orthostatic hypotension", "Most emergencies <strong>except acute heart failure</strong>"]]) +
        "<p>Doses on the slides are not tested here.</p>" +
        hy("Not in acute HF: nicardipine, labetalol (and other BBs/CCBs, hydralazine). Hydralazine = eclampsia. Esmolol = dissection. NTG = ischemia and HF."),
        ["drug-table"],
        [q("Which IV drug is indicated for eclampsia on the emergency drug table?", "Hydralazine", ["Nitroprusside", "Esmolol", "Nitroglycerin"], "Hydralazine is listed for eclampsia."),
          q("Which IV drug is indicated for aortic dissection and perioperative hypertension on the table?", "Esmolol", ["Hydralazine", "Nicardipine alone", "Nitroglycerin alone"], "Esmolol is listed for aortic dissection and perioperative use."),
          q("Which two drugs are listed for most emergencies except acute heart failure?", "Nicardipine and labetalol", ["Nitroglycerin and nitroprusside", "Hydralazine and esmolol", "Furosemide and morphine"], "Nicardipine and labetalol are used for most emergencies except acute HF."),
          q("Which adverse effect is listed for labetalol?", "Scalp tingling and bronchoconstriction", ["Cyanide toxicity", "Methemoglobinemia", "Hirsutism"], "Labetalol causes scalp tingling, bronchoconstriction, heart block, and orthostasis.")],
        [q("A patient with asthma is in hypertensive emergency. Which IV drug on the table carries a bronchoconstriction risk?", "Labetalol", ["Nicardipine", "Nitroglycerin", "Nitroprusside"], "Labetalol (a beta-blocker) can cause bronchoconstriction."),
          q("A patient in hypertensive emergency with acute pulmonary edema is about to be given IV labetalol. Best response?", "Avoid labetalol in acute heart failure; use a loop diuretic and nitroglycerin", ["Give labetalol; it is ideal for HF", "Give nicardipine instead", "Give hydralazine instead"], "Labetalol and nicardipine are for most emergencies except acute HF.")]),
      C("Matching the drug to the organ (algorithm)",
        tbl(["Emergency", "Drug(s)", "Goal"], [
          ["Ischemic stroke", "<strong>Labetalol, nicardipine</strong>", "Thrombolysis candidate &lt; 185/110; non-candidate treat only ≥ 220/120"],
          ["Intracranial hemorrhage", "<strong>Nicardipine</strong>", "Hemorrhagic stroke SBP &lt; 140; SAH SBP &lt; 160"],
          ["Hypertensive encephalopathy", "<strong>Nicardipine</strong>", "Standard: 10–20% first hour, 5–15% (or 160/110) by 24 h"],
          ["Acute hypertensive nephrosclerosis", "<strong>Fenoldopam</strong>", "Standard"],
          ["Acute coronary syndrome", "<strong>Nitroglycerin</strong>", "Standard"],
          ["Acute heart failure", "<strong>Nitroglycerin</strong>", "Standard (SBP &lt; 140 per slide 44)"],
          ["Aortic dissection", "<strong>Esmolol, nitroprusside</strong>", "Immediately HR &lt; 60, then SBP 100–120"],
          ["Preeclampsia/eclampsia", "<strong>Labetalol, hydralazine</strong>", "Immediately SBP &lt; 150, DBP 80–100"]]),
        ["drug-by-organ"],
        [q("According to the algorithm, which drug is used for acute coronary syndrome and acute heart failure in hypertensive emergency?", "Nitroglycerin", ["Hydralazine", "Fenoldopam", "Labetalol"], "Both ACS and acute HF are treated with nitroglycerin on the algorithm."),
          q("Which drug does the algorithm pair with hypertensive encephalopathy?", "Nicardipine", ["Hydralazine", "Esmolol", "Fenoldopam"], "Encephalopathy and ICH are paired with nicardipine."),
          q("Which drugs does the algorithm pair with preeclampsia or eclampsia?", "Labetalol and hydralazine", ["Nitroprusside and esmolol", "ACE inhibitor and ARB", "Nitroglycerin and furosemide"], "Labetalol and hydralazine are the obstetric choices."),
          q("What is the immediate goal for preeclampsia/eclampsia on the algorithm?", "SBP below 150 and DBP 80–100", ["SBP 100–120 within 20 minutes", "SBP below 220", "SBP below 185 and DBP below 110"], "The obstetric goal is SBP under 150 with DBP 80–100.")],
        [q("A patient with BP 212/128 has rising creatinine and proteinuria but no neuro, cardiac, or obstetric findings. Which drug does the algorithm list?", "Fenoldopam", ["Hydralazine", "Esmolol", "Methyldopa"], "Acute hypertensive nephrosclerosis → fenoldopam."),
          q("A confused patient with BP 236/138 and no bleed on CT is diagnosed with hypertensive encephalopathy. Which drug fits the algorithm?", "Nicardipine", ["Nitroglycerin", "Hydralazine", "Oral clonidine loading"], "Hypertensive encephalopathy → nicardipine.")])
    ]),

    /* ---------- 8c ---------- */
    S("08c-nitroprusside", "8c. Sodium nitroprusside", "Objective 8 (nitroprusside). Slides 35, 37–38.", [
      C("Nitroprusside: mechanism, onset, and cautions",
        ul(["IV, diluted in <strong>5% dextrose</strong>; requires a special delivery system.",
          "<strong>Direct venous AND arteriolar vasodilation</strong> → ↓ PVR and ↓ venous return → lower BP.",
          "<strong>Precipitous drop within 2 minutes</strong>; effect lasts <strong>up to 10 minutes</strong>.",
          "<strong>Raises intracranial pressure</strong>: caution with high ICP, azotemia, CKD.",
          "Indication: most emergencies; aortic dissection (with a beta-blocker)."]) +
        hy("Nitroprusside = fastest and most powerful: balanced arterial + venous dilation, but it <strong>raises ICP</strong> (avoid in ICH/SAH)."),
        ["snp-moa", "snp-icp"],
        [q("How does nitroprusside lower BP?", "Direct venous and arteriolar vasodilation", ["Beta-1 blockade", "Calcium channel blockade in the heart only", "Loop diuresis"], "Nitroprusside dilates both veins and arterioles."),
          q("How quickly does nitroprusside lower BP?", "Within about 2 minutes", ["Over 2 hours", "Over 2 days", "Only after 50 hours"], "It causes a precipitous drop within 2 minutes."),
          q("What effect does nitroprusside have on intracranial pressure?", "It raises ICP", ["It lowers ICP", "No effect on ICP", "It eliminates cerebral edema"], "Nitroprusside raises ICP, so use caution with high ICP."),
          q("How long does the effect of nitroprusside last after the infusion?", "Up to 10 minutes", ["About 50 hours", "Several weeks", "24 hours"], "The effect lasts up to 10 minutes.")],
        [q("A patient with an intracerebral hemorrhage and BP 220/120 needs IV BP control. Why should nitroprusside be avoided?", "It raises intracranial pressure", ["It is too slow", "It causes bradycardia", "It is only oral"], "Nitroprusside raises ICP and is avoided in ICH/SAH."),
          q("A patient with CKD stage 4 needs IV therapy for hypertensive emergency. Why is nitroprusside a concern?", "Cyanide and thiocyanate accumulate with reduced renal clearance", ["It causes hyperkalemia", "It requires normal renal function to work at all", "It increases GFR dangerously"], "The table cautions use with azotemia and CKD because of toxic metabolites.")]),
      C("Nitroprusside toxicities",
        tbl(["Toxicity", "Mechanism", "Treatment"], [
          ["<strong>Cyanide toxicity</strong>", "Large quantities of cyanide produced; limited human clearance, worse with <strong>renal or liver disease</strong>", "<strong>Sodium thiosulfate</strong>"],
          ["<strong>Methemoglobinemia</strong>", "Hgb oxidized <strong>Fe<sup>2+</sup> → Fe<sup>3+</sup></strong>, cannot bind O<sub>2</sub>; <strong>cyanosis</strong> and hypoxia <strong>despite high-flow oxygen</strong>", "<strong>Methylene blue</strong>"]]) +
        "<p>Other adverse effects: nausea, vomiting, muscle twitching, sweating, thiocyanate intoxication.</p>" +
        mn("<strong>Met</strong>hemoglobinemia → <strong>Met</strong>hylene blue. The other one, cyanide, gets thiosulfate."),
        ["cyanide", "methemoglobinemia", "snp-other-ae"],
        [q("What is the treatment for cyanide toxicity from nitroprusside?", "Sodium thiosulfate", ["Methylene blue", "Naloxone", "Flumazenil"], "Cyanide toxicity is treated with sodium thiosulfate."),
          q("What is the treatment for methemoglobinemia?", "Methylene blue", ["Sodium thiosulfate", "Vitamin K", "Protamine"], "Methemoglobinemia is treated with methylene blue."),
          q("In methemoglobinemia, iron in hemoglobin is oxidized from:", "Ferrous (Fe2+) to ferric (Fe3+)", ["Ferric (Fe3+) to ferrous (Fe2+)", "Ferrous to copper", "It is not oxidized"], "Ferric hemoglobin cannot bind oxygen."),
          q("Which patients clear cyanide from nitroprusside least well?", "Those with renal or liver disease", ["Young athletes", "Patients with asthma", "Patients with hypothyroidism"], "Renal or liver disease limits cyanide clearance.")],
        [q("After 2 days on a nitroprusside drip, a patient with cirrhosis becomes confused with metabolic acidosis. What toxicity and treatment are likely?", "Cyanide toxicity; give sodium thiosulfate", ["Methemoglobinemia; give vitamin C only", "Hypoglycemia; give dextrose", "Hyperkalemia; give calcium"], "Nitroprusside produces cyanide, cleared poorly with liver disease; treat with sodium thiosulfate."),
          q("A patient on nitroprusside becomes cyanotic with low saturation that does not improve on high-flow oxygen. What is the treatment?", "Methylene blue for methemoglobinemia", ["More oxygen only", "Sodium bicarbonate", "Intubation and nothing else"], "Cyanosis unresponsive to oxygen suggests methemoglobinemia; give methylene blue.")])
    ]),

    /* ---------- 8d ---------- */
    S("08d-nitroglycerin", "8d. Nitroglycerin", "Objective 8 (nitroglycerin). Slides 36, 39–40.", [
      C("Nitroglycerin: mechanism and uses",
        ul(["IV drip, <strong>titratable</strong>, works immediately.",
          "Dilates <strong>peripheral veins &gt; arteries</strong> → reduces <strong>preload</strong> more than afterload.",
          "<strong>Dilates the coronary arteries</strong> and improves collateral flow to ischemic myocardium.",
          "Onset <strong>2–5 min</strong>; effect gone in <strong>5–10 min</strong>.",
          "Indications: <strong>coronary ischemia (ACS) and heart failure</strong>."]) +
        tbl(["", "Nitroglycerin", "Nitroprusside"], [
          ["Vessels", "<strong>Veins</strong> &gt; arteries", "Veins <strong>and</strong> arterioles equally"],
          ["Main effect", "↓ Preload; coronary dilation", "↓ PVR and ↓ venous return"],
          ["Best for", "ACS, acute HF", "Most emergencies; dissection with BB"]]),
        ["ntg-moa", "ntg-indications"],
        [q("Nitroglycerin mainly reduces which hemodynamic variable?", "Preload", ["Heart rate", "Contractility", "Only afterload"], "NTG dilates veins more than arteries, reducing preload."),
          q("Which hypertensive emergencies are the indications for IV nitroglycerin?", "Coronary ischemia and heart failure", ["Eclampsia and pregnancy", "Aortic dissection alone", "ICH and SAH"], "NTG is indicated for coronary ischemia and heart failure."),
          q("What is the onset of IV nitroglycerin?", "2–5 minutes", ["1–2 hours", "50 hours", "1 week"], "Onset 2–5 min, offset 5–10 min."),
          q("Besides preload reduction, how does nitroglycerin help ischemic myocardium?", "It dilates the coronary arteries and improves collateral flow", ["It slows the heart rate", "It increases contractility", "It thins the blood"], "NTG dilates coronaries and improves collateral flow.")],
        [q("A patient in hypertensive emergency has crushing chest pain and ST depressions. Which IV drug best treats both BP and ischemia?", "Nitroglycerin", ["Hydralazine", "Nifedipine", "Methyldopa"], "NTG reduces preload and dilates the coronaries.")]),
      C("Nitroglycerin adverse effects and interactions",
        ul(["<strong>Headache, flushing, hypotension</strong>; vomiting.",
          "<strong>Tachyphylaxis within 24–48 hours</strong>: needs a <strong>nitrate-free interval</strong>.",
          "With <strong>PDE-5 inhibitors</strong> (sildenafil, tadalafil, for ED or pulmonary HTN) → <strong>very severe hypotension</strong>.",
          "May also cause <strong>methemoglobinemia</strong>."]) +
        hy("Always ask about sildenafil/tadalafil before nitrates."),
        ["ntg-ae", "tachyphylaxis", "pde5"],
        [q("Within what time does tolerance (tachyphylaxis) to nitroglycerin develop?", "24–48 hours", ["10 minutes", "6 months", "Never"], "Tachyphylaxis develops in 24–48 hours."),
          q("Which drug combination with nitroglycerin causes very severe hypotension?", "PDE-5 inhibitors such as sildenafil or tadalafil", ["Statins", "Metformin", "Acetaminophen"], "PDE-5 inhibitors plus nitrates cause profound hypotension."),
          q("Which blood disorder can nitroglycerin, like nitroprusside, cause?", "Methemoglobinemia", ["Polycythemia vera", "Thrombocytosis", "Hemophilia"], "NTG may cause methemoglobinemia.")],
        [q("A 61-year-old with chest pain and BP 200/110 took tadalafil last night. Why should nitroglycerin be avoided?", "PDE-5 inhibitors with nitrates cause very severe hypotension", ["Tadalafil makes nitrates ineffective", "Nitrates cause hypertension with tadalafil", "There is no interaction"], "The combination risks profound hypotension."),
          q("A patient on a continuous NTG drip for 2 days needs more and more drug for the same effect. Why?", "Tachyphylaxis; a nitrate-free interval is needed", ["Cyanide toxicity", "Allergy to nitrates", "The drip is mislabeled"], "Tolerance develops within 24–48 hours.")])
    ]),

    /* ---------- 8e ---------- */
    S("08e-nicardipine", "8e. Nicardipine", "Objective 8 (nicardipine). Slides 35, 41–42.", [
      C("Nicardipine: mechanism and kinetics",
        ul(["IV <strong>dihydropyridine CCB</strong> drip, through a large peripheral vein or central line, titrated to goal.",
          "Blocks calcium channels → <strong>vasodilation</strong>; can also affect cardiac channels → <strong>↓ contractility</strong>.",
          "Irritates the vein: <strong>rotate the site every 12 hours</strong> (phlebitis).",
          "Peak effect <strong>1–2 hours</strong>; falls sharply within <strong>30 minutes</strong> of stopping, but <strong>~50 hours</strong> for all effect to resolve; <strong>prolonged in kidney disease</strong>.",
          "Adverse effects: <strong>tachycardia, headache, flushing, local phlebitis</strong>."]),
        ["nicardipine-moa", "nicardipine-kinetics", "nicardipine-ae"],
        [q("What drug class is nicardipine?", "Dihydropyridine calcium channel blocker", ["Beta-blocker", "Nitrate", "Alpha-2 agonist"], "Nicardipine is an IV DHP CCB."),
          q("How often should the nicardipine IV site be rotated?", "Every 12 hours", ["Every 5 minutes", "Every week", "Never"], "It irritates the vein, so rotate the site every 12 hours."),
          q("How long does it take for all of nicardipine's antihypertensive effect to resolve?", "About 50 hours", ["10 minutes", "2 minutes", "6 months"], "The effect drops sharply in 30 minutes but takes about 50 hours to resolve fully."),
          q("Which adverse effects are listed for nicardipine?", "Tachycardia, headache, flushing, and phlebitis", ["Cyanide toxicity and methemoglobinemia", "Bronchospasm and heart block", "Hyperkalemia and cough"], "Reflex tachycardia, headache, flushing, and local phlebitis.")],
        [q("A patient on IV nicardipine for 18 hours through the same peripheral line develops a red, tender cord at the site. What should have been done?", "Rotate the IV site every 12 hours", ["Switch to oral nicardipine immediately", "Add heparin to the bag", "Nothing; this is expected and harmless"], "Nicardipine irritates veins; rotate the site every 12 hours."),
          q("A patient with CKD stopped a nicardipine drip 6 hours ago and is still hypotensive. Why?", "Nicardipine's effect is prolonged in kidney disease and takes up to about 50 hours to resolve", ["Nicardipine causes cyanide toxicity", "Nicardipine raises ICP", "This cannot be related to nicardipine"], "Full resolution takes about 50 hours and is prolonged in kidney disease.")]),
      C("Nicardipine: contraindications and best uses",
        tbl(["Contraindicated", "Why (clarification)"], [
          ["<strong>Aortic stenosis</strong>", "Vasodilation drops pressure past a fixed obstruction"],
          ["<strong>Severe ventricular dysfunction (HFrEF)</strong>", "Can ↓ myocardial contractility"],
          ["<strong>Hypertrophic cardiomyopathy</strong>", "Vasodilation and reflex tachycardia worsen outflow obstruction"]]) +
        ul(["Used for <strong>most emergencies except acute heart failure</strong>; caution with coronary ischemia.",
          "<strong>Drug of choice for ICH/SAH</strong>; also hypertensive encephalopathy and ischemic stroke (with labetalol)."]) +
        mn("Nicardipine is out for <strong>A-H-H</strong>: Aortic stenosis, HFrEF, HCM."),
        ["nicardipine-ci", "nicardipine-uses"],
        [q("Which condition is a contraindication to nicardipine?", "Aortic stenosis", ["Intracerebral hemorrhage", "Hypertensive encephalopathy", "Ischemic stroke"], "Nicardipine is contraindicated in aortic stenosis, severe HFrEF, and HCM."),
          q("Nicardipine is the drug of choice for which hypertensive emergency?", "Intracerebral or subarachnoid hemorrhage", ["Acute decompensated HFrEF", "Eclampsia only", "Cocaine-induced chest pain only"], "Nicardipine is DOC for ICH/SAH."),
          q("Which cardiomyopathy is a contraindication to nicardipine?", "Hypertrophic cardiomyopathy", ["Takotsubo after full recovery", "Peripartum cardiomyopathy after recovery", "None"], "HCM is listed as a contraindication.")],
        [q("A patient with known severe aortic stenosis presents with BP 210/120 and confusion. Which drug is contraindicated?", "Nicardipine", ["Labetalol", "Esmolol", "Nitroprusside with careful monitoring"], "Nicardipine is contraindicated in aortic stenosis."),
          q("A patient with EF 20% and acute pulmonary edema has BP 220/120. Which IV drug should be avoided?", "Nicardipine", ["Nitroglycerin", "IV loop diuretic", "None of these should be avoided"], "Nicardipine is contraindicated in severe HFrEF and avoided in acute HF.")])
    ]),

    /* ---------- 9a ---------- */
    S("09a-ischemic-stroke", "9a. Hypertensive emergency with ischemic stroke", "Objective 9 (ischemic stroke). Slides 47, 55.", [
      C("Ischemic stroke without tPA",
        ul(["Treat <strong>only if BP ≥ 220/120</strong> (slide: SBP ≥ 220 mmHg and DBP ≥ 120 mmHg).",
          "Preferred drugs: <strong>labetalol and nicardipine</strong>.",
          "Everyone else: <strong>resume the home antihypertensive regimen 24–48 hours</strong> after the stroke if no contraindications."]) +
        "<p><strong>Why (clarification):</strong> the brain around the infarct depends on pressure to stay perfused; lowering BP can extend the stroke.</p>" +
        hy("Ischemic stroke, no tPA: <strong>leave the BP alone unless ≥ 220/120</strong>."),
        ["stroke-no-tpa", "stroke-drugs"],
        [q("In acute ischemic stroke without tPA, at what BP is treatment started?", "≥ 220/120", ["≥ 140/90", "≥ 160/100", "≥ 185/110"], "Treat only if BP is at least 220/120."),
          q("Which drugs are preferred to lower BP in acute ischemic stroke?", "Labetalol and nicardipine", ["Nitroprusside and hydralazine", "Nitroglycerin and furosemide", "Methyldopa and clonidine"], "Labetalol and nicardipine are preferred."),
          q("When is the home antihypertensive regimen resumed after ischemic stroke in patients who were not treated acutely?", "24–48 hours after the stroke", ["Within 10 minutes", "After 6 months", "Never"], "Resume home meds 24–48 hours after the stroke, if no contraindications.")],
        [q("A 74-year-old has an acute ischemic stroke outside the tPA window. BP is 196/108. What should be done with the BP now?", "Do not treat acutely; resume home meds in 24–48 hours", ["Start nitroprusside to reach 120/80", "Give IV hydralazine to below 140", "Lower MAP by 50% in an hour"], "Below 220/120 without tPA, BP is not lowered acutely."),
          q("A patient with acute ischemic stroke (not a tPA candidate) has BP 232/126. Which drug fits?", "IV labetalol or nicardipine", ["Sublingual nifedipine", "IV nitroprusside as first choice", "No drug; BP is never treated in stroke"], "At ≥ 220/120, use labetalol or nicardipine.")]),
      C("Ischemic stroke receiving tPA",
        ul(["Patients receiving <strong>IV or intra-arterial fibrinolysis (tPA)</strong>: goal <strong>&lt; 185/110</strong> before reperfusion therapy.",
          "Clarification: a lower ceiling is needed because tPA raises bleeding risk."]) +
        tbl(["Ischemic stroke", "BP threshold"], [
          ["tPA candidate", "<strong>&lt; 185/110</strong> before reperfusion"],
          ["Not a tPA candidate", "Treat only <strong>≥ 220/120</strong>"]]) +
        mn("<strong>185/110 to clot-bust; 220/120 to bother.</strong>"),
        ["stroke-tpa"],
        [q("What is the BP goal before tPA in acute ischemic stroke?", "Below 185/110", ["Below 220/120", "Below 120/80", "Below 160/100"], "Goal is under 185/110 before reperfusion therapy."),
          q("Which stroke patients need BP below 185/110?", "Those receiving IV or intra-arterial fibrinolysis", ["All stroke patients at 24 hours", "Only hemorrhagic stroke patients", "Patients with lacunar strokes only"], "The 185/110 target applies to tPA candidates.")],
        [q("A 66-year-old with an acute ischemic stroke 90 minutes ago is a tPA candidate; BP is 198/112. What is needed before tPA?", "Lower BP below 185/110, for example with labetalol or nicardipine", ["Give tPA now regardless of BP", "Lower BP to 120/80 first", "Withhold tPA permanently"], "BP must be under 185/110 before reperfusion therapy.")])
    ]),

    /* ---------- 9b ---------- */
    S("09b-intracerebral-hemorrhage", "9b. Hypertensive emergency with intracerebral hemorrhage", "Objective 9 (intracerebral hemorrhage). Slides 12–13, 48, 55.", [
      C("ICH/SAH: the competing interests",
        ul(["First <strong>determine whether increased ICP is present</strong>.",
          "Goal BP is a difficult decision with <strong>competing interests</strong>: high BP can expand the bleed, but the brain is used to high pressure and needs MAP to stay perfused (<strong>CPP = MAP − ICP</strong>), especially when ICP is up.",
          "Usually titrated to <strong>SBP ~160</strong> (slide 48). Algorithm: hemorrhagic stroke <strong>SBP &lt; 140</strong>, SAH <strong>SBP &lt; 160</strong>."]) +
        hy("Rising ICP + falling MAP = falling cerebral perfusion. That is why ICH BP goals are a balance."),
        ["ich-goal", "ich-dilemma-treatment"],
        [q("What must be determined first when managing BP in ICH or SAH?", "Whether increased intracranial pressure is present", ["The patient's cholesterol", "Whether the patient is a tPA candidate", "The patient's blood type"], "Determine if increased ICP is present."),
          q("To what systolic level is ICH/SAH BP usually titrated per slide 48?", "About 160", ["About 100", "About 220", "About 185"], "Slide 48 says it is usually titrated to a systolic of 160."),
          q("What is the algorithm's SBP goal for hemorrhagic stroke (ICH)?", "Below 140", ["Below 220", "Below 185", "100–120"], "The algorithm lists SBP under 140 for hemorrhagic stroke.")],
        [q("A patient with an ICH and signs of raised ICP has BP 210/120. Why should BP not be dropped as low as possible?", "Lowering MAP too far reduces cerebral perfusion when ICP is high", ["Low BP worsens bleeding", "BP has no effect on the brain", "Antihypertensives raise ICP in every case"], "CPP = MAP − ICP, so overly low MAP starves the brain.")]),
      C("ICH/SAH: drugs of choice and drugs to avoid",
        tbl(["Preferred", "Avoid"], [
          ["<strong>Nicardipine (DOC)</strong>; labetalol or esmolol", "<strong>Nitroprusside</strong> (raises ICP) and <strong>hydralazine</strong>"]]) +
        mn("Bleeding brain: <strong>Nicardipine Now</strong>; <strong>no Nitroprusside, no Hydralazine</strong>."),
        ["ich-drugs", "ich-avoid"],
        [q("What is the drug of choice for BP control in intracerebral hemorrhage?", "Nicardipine", ["Nitroprusside", "Hydralazine", "Nitroglycerin"], "Nicardipine is DOC; labetalol or esmolol are alternatives."),
          q("Which drugs should be avoided in ICH or SAH?", "Nitroprusside and hydralazine", ["Nicardipine and labetalol", "Esmolol and labetalol", "Mannitol and saline"], "Avoid nitroprusside and hydralazine."),
          q("Which alternatives to nicardipine are acceptable in ICH?", "Labetalol or esmolol", ["Hydralazine or nitroprusside", "Sublingual nitroglycerin", "Oral clonidine loading"], "Labetalol or esmolol may be used.")],
        [q("A patient with a hypertensive basal ganglia hemorrhage has BP 218/122. Which drug is the best first choice?", "IV nicardipine", ["IV nitroprusside", "IV hydralazine", "IV nitroglycerin"], "Nicardipine is DOC in ICH."),
          q("A resident orders nitroprusside for a patient with subarachnoid hemorrhage. Why is this a problem?", "Nitroprusside raises ICP and should be avoided", ["Nitroprusside is too slow", "Nitroprusside causes bradycardia", "It is the preferred drug"], "Nitroprusside raises ICP; avoid it in ICH/SAH.")])
    ]),

    /* ---------- 9c ---------- */
    S("09c-aortic-dissection", "9c. Hypertensive emergency with aortic dissection", "Objective 9 (aortic dissection). Slides 49, 55.", [
      C("Aortic dissection: the goal",
        ul(["<strong>Rapidly</strong> lower SBP to <strong>100–120 mmHg within 20 minutes</strong>, unless signs of end-organ hypoperfusion occur.",
          "Algorithm: <strong>immediately HR &lt; 60</strong>, then once HR target is reached, <strong>SBP 100–120</strong>."]) +
        hy("Dissection is the exception that goes <strong>fast and low</strong>: SBP 100–120 in 20 minutes, HR under 60."),
        ["dissection-goal", "dissection-hr"],
        [q("What is the SBP goal in acute aortic dissection?", "100–120 mmHg within 20 minutes", ["Below 185 within 24 hours", "10–20% reduction in the first hour", "No BP lowering"], "Rapidly lower SBP to 100–120 within 20 minutes."),
          q("What heart rate target does the algorithm set immediately in aortic dissection?", "Below 60 bpm", ["Below 100 bpm", "Above 100 bpm", "Below 40 bpm"], "Immediately reach HR under 60, then SBP 100–120."),
          q("How does the dissection BP goal differ from the standard emergency goal?", "It is much faster and lower", ["It is slower", "It is the same", "BP is raised instead"], "Dissection requires rapid lowering, unlike the 10–20% first-hour rule.")],
        [q("A patient with a type A dissection has BP 190/110 and HR 104. What is the first target?", "Heart rate below 60, then SBP 100–120", ["SBP below 185 only", "A 10% MAP reduction over 1 hour", "SBP 160 in 24 hours"], "The algorithm controls HR first, then lowers SBP to 100–120.")]),
      C("Aortic dissection: drugs",
        tbl(["Component", "Drug"], [
          ["Narcotic analgesic", "<strong>Morphine sulfate</strong>"],
          ["Beta-blocker", "<strong>Esmolol, labetalol</strong>"],
          ["Vasodilator", "<strong>Nitroprusside</strong>"]]) +
        "<p>Then the patient goes to the <strong>OR</strong>.</p>" +
        clar("the beta-blocker comes first (HR &lt; 60) so the vasodilator does not trigger reflex tachycardia, which would increase shear on the torn aorta.") +
        mn("Dissection = <strong>MBV</strong>: Morphine, Beta-blocker, Vasodilator → OR."),
        ["dissection-drugs", "dissection-or"],
        [q("Which drug combination is preferred for acute aortic dissection?", "Morphine, a beta-blocker (esmolol or labetalol), and nitroprusside", ["Hydralazine alone", "Nicardipine alone", "Nitroglycerin and furosemide"], "Narcotic analgesic, beta-blocker, and vasodilator, then OR."),
          q("Which beta-blockers are listed for aortic dissection?", "Esmolol and labetalol", ["Propranolol and nadolol", "Atenolol and sotalol", "Pindolol and acebutolol"], "Esmolol and labetalol are listed."),
          q("After medical BP and HR control, where does a dissection patient go?", "The operating room", ["Home on oral meds", "Outpatient cardiology in 6 weeks", "Physical therapy"], "Then the patient goes to the OR.")],
        [q("A patient with aortic dissection is started on nitroprusside alone, and HR rises to 120. What was missing?", "A beta-blocker given first to control heart rate", ["More nitroprusside", "Hydralazine", "Nothing; tachycardia is desired"], "Beta-blockade first prevents reflex tachycardia from the vasodilator.")])
    ]),

    /* ---------- 9d ---------- */
    S("09d-acute-coronary-syndrome", "9d. Hypertensive emergency with acute coronary syndrome", "Objective 9 (acute coronary syndrome). Slides 35–36, 43, 55.", [
      C("ACS: when to treat and which drugs",
        ul(["Includes <strong>STEMI, NSTEMI, unstable angina</strong>.",
          "Treat if <strong>SBP &gt; 160 and/or DBP &gt; 100</strong>.",
          "Preferred: <strong>nitroglycerin drip</strong> or <strong>IV beta-blockers (metoprolol, esmolol)</strong>."]) +
        hy("ACS + HTN: <strong>NTG drip or IV beta-blocker</strong>, treat above 160/100."),
        ["acs-threshold", "acs-drugs"],
        [q("At what BP should hypertension be treated in acute coronary syndrome?", "SBP above 160 and/or DBP above 100", ["SBP above 220", "SBP above 120", "Never treat BP in ACS"], "Treat if SBP is over 160 and/or DBP over 100."),
          q("Which drugs are preferred for hypertensive emergency with ACS?", "Nitroglycerin drip or IV beta-blockers", ["Hydralazine or minoxidil", "Nifedipine or amlodipine", "Fenoldopam alone"], "NTG or IV metoprolol/esmolol."),
          q("Which IV beta-blockers are named for ACS?", "Metoprolol and esmolol", ["Propranolol and timolol", "Labetalol and carvedilol only", "Nadolol and sotalol"], "Metoprolol and esmolol are listed.")],
        [q("A 64-year-old with NSTEMI has BP 182/106 and HR 98 with no heart failure. Which IV drug choice fits?", "Nitroglycerin drip or IV metoprolol", ["IV hydralazine", "IV nitroprusside alone as first line", "No BP treatment needed"], "ACS with SBP over 160 → NTG or IV beta-blocker.")]),
      C("ACS: work-up and drugs to avoid",
        ul(["Get <strong>cardiology involved early</strong>, <strong>trend troponin</strong>, and get an <strong>echocardiogram</strong> if not going to the cath lab.",
          "Caution: <strong>nicardipine</strong> (caution with coronary ischemia; reflex tachycardia) and <strong>hydralazine</strong> (aggravation of angina) per the drug table."]),
        ["acs-workup", "acs-avoid"],
        [q("In hypertensive emergency with ACS, what imaging is obtained if the patient is not going to the cath lab?", "Echocardiogram", ["MRI brain", "Renal ultrasound", "Lumbar spine x-ray"], "Obtain an echo if not going to cardiac catheterization."),
          q("Which drug on the table can aggravate angina?", "Hydralazine", ["Nitroglycerin", "Esmolol", "Metoprolol"], "Hydralazine's adverse effects include aggravation of angina.")],
        [q("A patient with BP 190/110 and unstable angina is about to receive IV hydralazine. Best response?", "Use nitroglycerin or an IV beta-blocker instead; hydralazine can aggravate angina", ["Give hydralazine; it is first line for ACS", "Give sublingual nifedipine", "Give nothing and discharge"], "Hydralazine causes reflex tachycardia and aggravates angina.")])
    ]),

    /* ---------- 9e ---------- */
    S("09e-heart-failure", "9e. Hypertensive emergency with acute heart failure", "Objective 9 (heart failure). Slides 18, 44, 55.", [
      C("Acute heart failure: goal and drugs",
        ul(["Goal <strong>SBP &lt; 140</strong>.",
          "<strong>IV loop diuretic first</strong> if fluid overloaded, to dry the lungs.",
          "Then a <strong>venous vasodilator, nitroglycerin</strong>, which also dilates the coronary arteries."]) +
        mn("Acute HF: <strong>Loop, then NTG</strong> (Dry, then Dilate)."),
        ["hf-goal", "hf-drugs"],
        [q("What is the SBP goal in hypertensive emergency with acute heart failure?", "Below 140", ["Below 185", "Below 220", "100–120 within 20 minutes"], "The acute HF goal is SBP under 140."),
          q("Which drug is often given first in acute HF with fluid overload?", "An IV loop diuretic", ["An IV beta-blocker", "IV nicardipine", "IV hydralazine"], "A loop diuretic dries the lungs first."),
          q("Which vasodilator is added in acute heart failure?", "Nitroglycerin", ["Hydralazine", "Nicardipine", "Minoxidil"], "Nitroglycerin, a venous vasodilator that also dilates coronaries.")],
        [q("A patient with BP 224/130, rales to the mid-lung fields, and edema is diagnosed with hypertensive acute HF. Best initial therapy?", "IV loop diuretic, then IV nitroglycerin", ["IV labetalol bolus", "IV nicardipine drip", "IV hydralazine"], "Diurese, then add nitroglycerin.")]),
      C("Acute heart failure: drugs to avoid",
        tbl(["Avoid in acute decompensated HFrEF", "Why"], [
          ["<strong>Beta-blockers</strong> and <strong>CCBs</strong>", "Depress cardiac contractility"],
          ["<strong>Hydralazine</strong>", "Increases cardiac work by arterial vasodilation (reflex)"]]) +
        hy("Acute decompensated HFrEF: <strong>no BB, no CCB, no hydralazine</strong>. This is why labetalol and nicardipine are \"except acute HF\"."),
        ["hf-avoid"],
        [q("Why are beta-blockers and CCBs avoided in acute decompensated HFrEF?", "They depress cardiac contractility", ["They cause cyanide toxicity", "They raise ICP", "They cause hyperkalemia"], "Both depress contractility in a failing heart."),
          q("Why is hydralazine avoided in acute decompensated HFrEF?", "It increases cardiac work", ["It depresses contractility", "It causes bradycardia", "It raises ICP"], "Hydralazine increases cardiac work through arterial vasodilation."),
          q("Which of these is appropriate in acute decompensated HFrEF with high BP?", "Nitroglycerin", ["Labetalol", "Nicardipine", "Hydralazine"], "Nitroglycerin is preferred; the others are avoided.")],
        [q("A patient with EF 15% and flash pulmonary edema has BP 210/120. The team suggests IV labetalol. Best response?", "Avoid it; beta-blockers depress contractility in acute HFrEF", ["Agree; labetalol is ideal", "Use IV diltiazem instead", "Use IV hydralazine instead"], "Beta-blockers, CCBs, and hydralazine are avoided in acute decompensated HFrEF.")])
    ]),

    /* ---------- 9f ---------- */
    S("09f-sympathetic-overactivity", "9f. Hypertensive emergency from sympathetic overactivity", "Objective 9 (also taught: sympathetic overactivity). Slides 45–46.", [
      C("Causes of sympathetic crisis",
        ul(["<strong>Cocaine</strong> toxicity",
          "<strong>Methamphetamine/amphetamines</strong> (Ritalin, Adderall)",
          "<strong>Pheochromocytoma</strong>",
          "<strong>Severe autonomic dysfunction</strong>: spinal cord injury, Guillain-Barré syndrome"]) +
        "<p>The sympathetic nervous system releases large amounts of catecholamines → sudden severe HTN; patients are <strong>tachycardic</strong> and hypertensive, sometimes with coronary ischemia.</p>",
        ["sympathetic-causes"],
        [q("Which condition is a cause of sympathetic-overactivity hypertensive emergency?", "Pheochromocytoma", ["Hypothyroidism", "Addison's disease", "Nephrotic syndrome"], "Cocaine, amphetamines, pheochromocytoma, and severe autonomic dysfunction are listed."),
          q("Which neurologic conditions can cause severe autonomic dysfunction and sympathetic crisis?", "Spinal cord injury and Guillain-Barré syndrome", ["Migraine and tension headache", "Bell's palsy and trigeminal neuralgia", "Essential tremor"], "Cord injury and GBS are listed."),
          q("Which prescription stimulants are listed as causes?", "Ritalin and Adderall", ["Sertraline and fluoxetine", "Lisinopril and losartan", "Metformin and glipizide"], "Amphetamines including Ritalin and Adderall are listed.")],
        [q("A 24-year-old has BP 220/124, HR 136, dilated pupils, and chest pain after a party. What is the likely mechanism?", "Catecholamine surge from cocaine or amphetamines", ["Non-adherence to lisinopril", "Hypothyroidism", "Primary hyperaldosteronism"], "Stimulants cause a catecholamine surge with tachycardia and hypertension.")]),
      C("Unopposed alpha: why beta-blocker alone is contraindicated",
        ul(["A <strong>beta-blocker alone is contraindicated</strong>: blocking β receptors leaves catecholamines to bind <strong>α receptors</strong> → <strong>unopposed alpha-adrenergic vasoconstriction</strong> → BP rises further.",
          "Block both together with <strong>IV labetalol</strong>."]) +
        hy("Cocaine, meth, pheo: <strong>never a pure beta-blocker alone</strong>. Use labetalol (α + β)."),
        ["unopposed-alpha", "labetalol-sympathetic"],
        [q("Why is a beta-blocker alone contraindicated in cocaine-induced hypertensive emergency?", "It leaves unopposed alpha-adrenergic vasoconstriction", ["It causes cyanide toxicity", "It raises intracranial pressure", "It causes hypokalemia"], "Blocking beta receptors leaves catecholamines acting on alpha receptors."),
          q("Which drug does the lecture recommend to block both alpha and beta receptors in sympathetic crisis?", "IV labetalol", ["IV metoprolol", "IV esmolol alone", "IV propranolol"], "Labetalol blocks alpha and beta together.")],
        [q("A patient with a pheochromocytoma crisis is given IV propranolol alone and BP climbs from 210/120 to 250/140. Why?", "Unopposed alpha-adrenergic vasoconstriction", ["Propranolol is an alpha agonist", "Cyanide toxicity", "Rebound from clonidine"], "Pure beta-blockade leaves alpha receptors fully stimulated."),
          q("A patient with methamphetamine toxicity has BP 214/126 and HR 130. Which IV drug fits the lecture?", "Labetalol", ["Metoprolol alone", "Esmolol alone", "Atenolol alone"], "Labetalol blocks alpha and beta receptors together.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-pregnancy-hypertension", "10. Types of hypertension in pregnancy", "Objective 10. Slides 20, 50–52, 55.", [
      C("Why BP can rise in pregnancy",
        ul(["Most pregnant women do not have BP problems, but <strong>plasma volume rises to 150% of normal</strong>, <strong>RBC volume rises 30%</strong>, and the CV system is under increased stress.",
          "It is important to differentiate <strong>preeclampsia</strong> from chronic, transient, and gestational hypertension."]),
        ["pregnancy-physiology"],
        [q("Plasma volume during pregnancy increases to about what percentage of normal?", "150%", ["100%", "300%", "75%"], "Plasma volume rises to 150% of normal."),
          q("By how much does RBC volume increase during pregnancy?", "About 30%", ["About 150%", "About 5%", "It decreases"], "RBC volume increases by 30%.")],
        [q("A pregnant patient asks why her heart is working harder. Which change best explains it?", "Plasma volume rises to about 150% of normal and RBC volume about 30%", ["Her blood volume falls by half", "Her heart rate drops to 40", "Pregnancy has no effect on the CV system"], "Expanded plasma and RBC volume stress the CV system.")]),
      C("Chronic vs gestational hypertension",
        tbl(["", "Chronic hypertension", "Pregnancy-induced (gestational) hypertension"], [
          ["Definition", "Prior diagnosis, or <strong>&gt; 140/90 before 20 weeks</strong>, or HTN <strong>persisting &gt; 12 weeks postpartum</strong>", "<strong>&gt; 140/90 after 20 weeks</strong>, <strong>without proteinuria</strong>"],
          ["Course", "Persists", "<strong>Resolves by 12 weeks postpartum</strong>"]]) +
        mn("<strong>20 weeks</strong> divides chronic (before) from gestational (after). <strong>12 weeks</strong> postpartum divides gestational (gone) from chronic (still there)."),
        ["chronic-htn-pregnancy", "gestational-htn"],
        [q("BP above 140/90 first found before 20 weeks' gestation is classified as:", "Chronic hypertension", ["Gestational hypertension", "Preeclampsia", "Eclampsia"], "HTN before 20 weeks is chronic hypertension."),
          q("Gestational hypertension is BP above 140/90 after 20 weeks:", "Without proteinuria, resolving by 12 weeks postpartum", ["With proteinuria and seizures", "Present before pregnancy", "Persisting for years"], "Gestational HTN has no proteinuria and resolves by 12 weeks postpartum."),
          q("Hypertension that persists beyond how long postpartum is classified as chronic?", "12 weeks", ["1 week", "2 years", "48 hours"], "HTN persisting more than 12 weeks postpartum is chronic.")],
        [q("A 30-year-old at 28 weeks has new BP 146/94 on two visits, no proteinuria, and no symptoms; BP was normal at 10 weeks. Diagnosis?", "Gestational (pregnancy-induced) hypertension", ["Chronic hypertension", "Preeclampsia", "Eclampsia"], "New HTN after 20 weeks without proteinuria is gestational hypertension."),
          q("A woman diagnosed with gestational hypertension at 30 weeks still has BP 150/96 at 16 weeks postpartum. How is she reclassified?", "Chronic hypertension", ["Still gestational hypertension", "Preeclampsia", "Normal"], "HTN persisting beyond 12 weeks postpartum is chronic.")]),
      C("Preeclampsia and eclampsia",
        tbl(["", "Preeclampsia", "Eclampsia"], [
          ["Definition", "Chronic or gestational HTN <strong>with placental insufficiency and proteinuria</strong> (kidney end-organ damage)", "<strong>HTN, proteinuria, and seizure</strong>"]]) +
        "<p><strong>Higher risk:</strong> <strong>nulliparous</strong> women, <strong>multiple gestation</strong>, history of <strong>HTN or renal disease</strong>, <strong>family history</strong>.</p>" +
        "<p><strong>Management:</strong> restricted activity and possibly bed rest, very close fetal monitoring; <strong>definitive treatment is delivery</strong>. Algorithm: <strong>labetalol or hydralazine</strong>, goal <strong>SBP &lt; 150, DBP 80–100</strong>; work-up CBC, BMP, LFT, UA, protein:creatinine.</p>" +
        mn("Preeclampsia risk: <strong>first baby, more than one baby, a history of HTN or kidney disease, and a family history</strong>."),
        ["preeclampsia-definition", "preeclampsia-risk", "preeclampsia-management", "eclampsia"],
        [q("What distinguishes preeclampsia from gestational hypertension?", "Placental insufficiency with proteinuria", ["Onset before 20 weeks", "Absence of proteinuria", "Normal BP"], "Preeclampsia adds placental insufficiency and proteinuria."),
          q("What is the definitive treatment of preeclampsia?", "Delivery", ["Bed rest alone", "ACE inhibitor", "Lifelong methyldopa"], "Definitive treatment is delivery."),
          q("Which patient is at higher risk for preeclampsia?", "A nulliparous woman with twins", ["A multiparous woman with a singleton and no history", "A woman with a prior normal pregnancy and no risk factors", "A woman who has never had HTN or kidney disease and has a singleton fourth pregnancy"], "Nulliparity and multiple gestation raise preeclampsia risk."),
          q("Eclampsia is defined as:", "Hypertension, proteinuria, and seizure", ["Hypertension without proteinuria", "Hypotension and bleeding", "Proteinuria without hypertension"], "Eclampsia is HTN, proteinuria, and seizure.")],
        [q("A 22-year-old in her first pregnancy at 34 weeks has BP 158/104, proteinuria, and headache. Diagnosis?", "Preeclampsia", ["Gestational hypertension", "Chronic hypertension", "Eclampsia"], "New HTN after 20 weeks with proteinuria is preeclampsia."),
          q("A preeclamptic patient at 36 weeks has a tonic-clonic seizure. What is the diagnosis and definitive treatment?", "Eclampsia; delivery", ["Epilepsy; levetiracetam alone", "PRES; MRI only", "Gestational HTN; observation"], "Seizure with preeclampsia is eclampsia; delivery is definitive."),
          q("A patient with severe preeclampsia has BP 172/112. Which IV drugs and goal fit the algorithm?", "Labetalol or hydralazine; SBP below 150 with DBP 80–100", ["Nitroprusside; SBP 100–120 in 20 minutes", "IV enalapril; SBP below 120", "No treatment until delivery"], "The obstetric branch uses labetalol or hydralazine to SBP under 150, DBP 80–100.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-pregnancy-medications", "11. Medications for hypertension in pregnancy", "Objective 11. Slides 36, 53–55.", [
      C("Preferred drugs in pregnancy",
        tbl(["Drug", "Dosing", "Advantages / disadvantages"], [
          ["<strong>Labetalol</strong>", "Twice daily", "Well tolerated, good safety data; <strong>increasingly preferred over methyldopa</strong> because of fewer side effects"],
          ["<strong>Methyldopa</strong>", "2–4 times daily", "Good safety data; preferred on <strong>long-term follow-up safety data</strong>; some anticholinergic side effects"],
          ["<strong>Nifedipine or diltiazem</strong>", "Once daily", "<strong>Less safety data</strong>; no increase in major teratogenicity"]]) +
        hy("Pregnancy: <strong>labetalol, methyldopa, nifedipine</strong>. Labetalol = fewer side effects; methyldopa = longest safety record."),
        ["labetalol", "methyldopa", "ccb-pregnancy"],
        [q("Which pregnancy antihypertensive has the longest-term safety follow-up data?", "Methyldopa", ["Lisinopril", "Losartan", "Spironolactone"], "Methyldopa is preferred based on long-term follow-up safety data."),
          q("Why is labetalol increasingly preferred over methyldopa in pregnancy?", "Fewer side effects", ["Once-monthly dosing", "It is an ACE inhibitor", "It treats seizures"], "Labetalol has fewer side effects and good safety data."),
          q("What is the main disadvantage of nifedipine or diltiazem in pregnancy?", "Less safety data", ["Known major teratogenicity", "Must be dosed 4 times daily", "Causes fetal kidney failure"], "CCBs have less safety data but no increase in major teratogenicity."),
          q("How often is methyldopa dosed?", "2–4 times daily", ["Once weekly", "Once monthly", "Every hour"], "Methyldopa is given 2–4 times daily.")],
        [q("A pregnant woman with chronic HTN wants a well-tolerated drug she can take twice a day with good safety data. Best choice?", "Labetalol", ["Lisinopril", "Losartan", "Hydrochlorothiazide at high dose"], "Labetalol is twice daily, well tolerated, with good safety data."),
          q("A pregnant patient on methyldopa complains of dry mouth and needs 3 doses daily. Which alternative has fewer side effects?", "Labetalol", ["Enalapril", "Valsartan", "Aliskiren"], "Labetalol is increasingly preferred because of fewer side effects.")]),
      C("Other classes, and drugs to avoid",
        tbl(["Drug/class", "Comment"], [
          ["β-blockers", "Generally safe, but <strong>intrauterine growth retardation</strong> reported"],
          ["Clonidine", "Limited data"],
          ["Diuretics", "<strong>Not first-line</strong>; probably safe in low doses"],
          ["<strong>ACE inhibitors, ARBs</strong>", "Category C in 1st trimester, <strong>category D in 2nd and 3rd</strong>; <strong>major teratogenicity</strong> (fetal toxicity, death)"]]) +
        "<p>Emergency (preeclampsia/eclampsia): <strong>IV labetalol or hydralazine</strong>.</p>" +
        hy("<strong>Never ACEI or ARB in pregnancy</strong>: fetal toxicity and death."),
        ["beta-blockers-iugr", "clonidine-diuretics", "acei-arb-avoid", "pregnancy-emergency-drugs"],
        [q("Which antihypertensive classes cause major teratogenicity and must be avoided in pregnancy?", "ACE inhibitors and ARBs", ["Labetalol and methyldopa", "Nifedipine and diltiazem", "Hydralazine and labetalol"], "ACEIs and ARBs cause fetal toxicity and death."),
          q("Which fetal concern has been reported with beta-blockers in pregnancy?", "Intrauterine growth retardation", ["Neural tube defects", "Cleft palate", "Fetal hyperthyroidism"], "IUGR has been reported with beta-blockers."),
          q("What is the role of diuretics for hypertension in pregnancy?", "Not first-line, probably safe in low doses", ["First-line for all pregnant patients", "Absolutely contraindicated at any dose", "Required for preeclampsia"], "Diuretics are not first-line but probably safe in low doses."),
          q("ACE inhibitors are what pregnancy category in the 2nd and 3rd trimesters?", "Category D", ["Category A", "Category B", "Category C"], "Category C in the 1st trimester, D in the 2nd and 3rd.")],
        [q("A woman on lisinopril for chronic HTN has a positive pregnancy test at 7 weeks. Best step?", "Stop lisinopril and switch to labetalol or methyldopa", ["Continue lisinopril", "Add losartan", "Stop all treatment permanently"], "ACEIs are teratogenic; switch to a pregnancy-safe drug."),
          q("A pregnant woman with HTN is on losartan from an outside clinic. What is the concern?", "ARBs cause fetal toxicity and death", ["Losartan is the preferred pregnancy drug", "It causes maternal hypoglycemia only", "There is no concern"], "ARBs, like ACEIs, have major teratogenicity.")])
    ])
  ];
})();
