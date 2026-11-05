/*
  Cardio Part 2 Concepts: Inpatient & Long-Term Arrhythmia Management.
  Source: source-material/cardio-part-2/text/chronic-arrhythmia-management.md.
  Anything the slides only imply is labeled "Clarification (standard physiology)".
  Question ids are "<concept id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }
  function clar(text) { return "<p><strong>Clarification (standard physiology):</strong> " + text + "</p>"; }
  function traps(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }

  window.CARDIO2_CONCEPTS_MGMT = L("arrhythmia-management", "Inpatient & Long-Term Arrhythmia Management", [

    D("mgmtc-atrial-kick", "Losing the atrial kick", "In AF the atria quiver instead of squeezing, so the last boost of ventricular filling is lost; stiff ventricles and fast rates turn that loss into heart failure and pulmonary edema.", [
      S("idea", "The idea", "<p>Most ventricular filling is passive, but the <strong>atrial contraction (\"kick\")</strong> tops it off at the end of diastole. In AF the atria quiver, so the kick is gone. A healthy, compliant ventricle barely notices. A <strong>stiff</strong> ventricle (elderly, LVH, HCM, AS, diastolic HF) depends on the kick, so it loses a lot of output.</p><p>Add <strong>RVR</strong>: diastole shortens, filling falls further, pressure backs up into the left atrium and lungs → <strong>pulmonary edema</strong>. That's why most AF symptoms come from the rapid rate, and controlling the rate helps immediately.</p>" + clar("the kick contributes roughly 20–30% of filling and more in stiff ventricles (standard physiology).")),
      S("chain", "Cause → effect", chain([
        "AF → atria quiver → no atrial kick",
        "Stiff LV loses a big part of its filling → ↓ SV",
        "RVR shortens diastole → filling falls further",
        "LA and pulmonary pressure rise → pulmonary edema, dyspnea",
        "Low output → fatigue, ↓ exercise tolerance, hypotension"
      ])),
      S("bedside", "Why it matters clinically", Tbl(["Patient", "Effect of AF"], [
        ["Young, normal heart, rate controlled", "Often minimal symptoms"],
        ["Elderly with diastolic dysfunction", "Fatigue, DOE, HF"],
        ["AF with RVR", "Pulmonary edema, may be unstable"]
      ]) + "<p>Restoring NSR brings the kick back: better hemodynamics, exercise tolerance and HF symptoms. After cardioversion ventricular function improves quickly, but the <strong>atria recover slowly</strong>.</p>" + HY("Most AF symptoms are from the rate: slow it first.")),
      S("traps", "Common traps", traps([
        "<strong>Thinking AF symptoms come from the irregularity.</strong> They come mostly from RVR and lost kick.",
        "<strong>Assuming everyone tolerates AF.</strong> Stiff ventricles (AS, HCM, elderly) decompensate fast.",
        "<strong>Forgetting AV node ablation also removes the kick for good.</strong> Paced patients still lack coordinated atrial contraction."
      ]))
    ], [
      Q("chain", "An 80-year-old with LVH goes into AF at 140 and develops crackles. Why?", ["Lost atrial kick plus short diastole raises LA and pulmonary pressure", "AF causes pneumonia", "The atria leak", "The rate is too slow"], 0, "Stiff ventricle + RVR → pulmonary edema."),
      Q("idea", "What is the atrial kick?", ["The atrial contraction that tops off ventricular filling at end-diastole", "The ventricular ejection", "The opening of the mitral valve", "The QRS complex"], 0, "Late diastolic atrial contraction."),
      Q("chain", "Which patient loses the most output when AF removes the kick?", ["An elderly patient with a stiff, hypertrophied LV", "A healthy 25-year-old", "A patient with a compliant LV and slow rate", "A patient with a pacemaker"], 0, "Stiff ventricles depend on the kick."),
      Q("bedside", "Where do most AF symptoms come from?", ["The rapid ventricular rate", "The irregularity itself", "Atrial stretch", "Low potassium"], 0, "Most symptoms relate to RVR."),
      Q("bedside", "Why does restoring sinus rhythm improve exercise tolerance?", ["The atrial kick returns and boosts filling", "It lowers BP", "It slows the heart below 50", "It removes clot"], 0, "Maintaining the kick improves HF symptoms and exercise."),
      Q("traps", "A young healthy patient in rate-controlled AF feels nearly normal. Why?", ["A compliant ventricle fills well without the kick", "AF has no effect on anyone", "The kick is unimportant in all patients", "Young atria still contract"], 0, "Compliant LVs lose little."),
      Q("chain", "Why does slowing the ventricular rate in AF often relieve dyspnea within hours?", ["Longer diastole restores filling and lowers LA pressure", "It restores the atrial kick", "It removes clot", "It raises BP"], 0, "Rate control lengthens diastole."),
      Q("bedside", "After cardioversion, which function recovers more slowly?", ["Atrial function", "Ventricular function", "AV node conduction", "SA node automaticity"], 0, "Atria take longer to recover.")
    ]),

    D("mgmtc-clot-48h", "Why AF clots and the 48-hour rule", "Quivering atria let blood sit in the left atrial appendage; after 48 hours a clot is assumed, and converting to sinus can launch it, so you anticoagulate or TEE before cardioversion.", [
      S("idea", "The idea", "<p>No organized contraction → blood moves slowly, especially in the blind pouch of the <strong>left atrial appendage</strong>. Stasis (Virchow) → thrombus, assumed after <strong>≥ 48 h</strong> of AF, even if paroxysmal.</p><p>When sinus rhythm returns, the atrium starts squeezing again and can <strong>eject a clot</strong> to the brain. So before elective cardioversion: anticoagulate, and look with <strong>TEE</strong> (TTE can't exclude LAA thrombus). Because the atria recover slowly and AF recurs silently, <strong>anticoagulation continues after cardioversion</strong>.</p>" + clar("post-cardioversion atrial 'stunning' is the standard reason anticoagulation continues afterward.")),
      S("chain", "Cause → effect", chain([
        "AF → no coordinated atrial squeeze → stasis in the LAA",
        "≥ 48 h → thrombus assumed",
        "Cardioversion → atria resume contracting",
        "Clot ejected → embolic stroke",
        "Prevent: anticoagulate + TEE before, continue after"
      ]) + Tbl(["Fact", "Implication"], [
        ["AF = 5x stroke risk; ~20% of ischemic strokes", "Stroke prophylaxis for most"],
        ["Paroxysmal = permanent stroke risk", "Type doesn't change the decision"],
        ["Up to 90% of episodes unnoticed", "Keep AC even after NSR"],
        ["Ablation doesn't change AC strategy", "AC follows CHA2DS2-VASc, not rhythm"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The plan for new AF: rate control → AC if appropriate → TEE → cardioversion → continue AC. <strong>Watchman</strong> seals the LAA (the clot factory) for patients who bleed on AC.</p>" + HY("Rhythm doesn't decide anticoagulation; the stroke score does.")),
      S("traps", "Common traps", traps([
        "<strong>Stopping anticoagulation after successful cardioversion.</strong> AF relapses silently.",
        "<strong>Using TTE to clear the appendage.</strong> It can't exclude LAA thrombus; use TEE.",
        "<strong>Thinking paroxysmal AF is lower risk.</strong> Stroke risk is the same."
      ]))
    ], [
      Q("chain", "Why is cardioversion of AF lasting more than 48 hours risky without precautions?", ["A clot may have formed and restored contraction can eject it", "The shock causes clots", "The heart can't be shocked after 48 hours", "It causes heart block"], 0, "Thrombus assumed after 48 h."),
      Q("idea", "Where do AF clots usually form and why?", ["The left atrial appendage, where blood stagnates", "The right ventricle, from high pressure", "The aorta, from turbulence", "The pulmonary veins, from fast flow"], 0, "LAA stasis."),
      Q("bedside", "Which test is done to exclude clot before cardioversion?", ["TEE", "TTE", "CT head", "D-dimer"], 0, "TEE visualizes the LAA."),
      Q("chain", "Why does anticoagulation continue after a successful cardioversion?", ["Atria recover slowly and AF can relapse unnoticed", "The shock damages vessels", "Sinus rhythm raises clot risk permanently", "It doesn't need to"], 0, "Relapse risk and slow atrial recovery."),
      Q("traps", "A patient's AF is paroxysmal, not permanent. How does that change stroke prophylaxis?", ["It doesn't; stroke risk is the same", "No prophylaxis needed", "Aspirin only", "Only during episodes"], 0, "Same rate of stroke."),
      Q("bedside", "How does a Watchman device lower stroke risk?", ["It seals off the left atrial appendage where clots form", "It slows the AV node", "It dissolves clots", "It restores sinus rhythm"], 0, "LAA occlusion."),
      Q("traps", "After successful ablation, can the patient stop anticoagulation because they're in sinus?", ["No; ablation doesn't change the anticoagulation strategy", "Yes, always", "Yes, after 1 week", "Only if under 60"], 0, "RFCA isn't done to get off AC."),
      Q("chain", "Which part of Virchow's triad explains AF clots?", ["Stasis", "Endothelial injury only", "Hypercoagulable genetics", "None"], 0, "Static blood in the atria.")
    ]),

    D("mgmtc-af-begets-af", "AF begets AF: why rhythm control is favored", "Ongoing AF remodels the atria electrically and structurally, making AF easier to sustain and the atria bigger; restoring sinus early can slow or reverse that.", [
      S("idea", "The idea", "<p>AF needs a <strong>trigger</strong> (usually pulmonary vein foci) and a <strong>permissive substrate</strong>. Once AF runs, the atria <strong>remodel</strong>: shorter refractory periods, fibrosis, dilation. Each change makes the next episode easier and longer. AF is <strong>self-promoting</strong>.</p><p>That's why most new AF gets <strong>rhythm control</strong> (cardioversion + antiarrhythmic, then ablation), and why ablation works best in <strong>short-duration AF</strong>. Over years patients may \"graduate\" to rate control as the atria degenerate.</p>"),
      S("chain", "Cause → effect", chain([
        "Trigger (pulmonary vein foci) + substrate",
        "AF persists → electrical remodeling (shorter refractoriness)",
        "Structural remodeling: fibrosis, atrial dilation",
        "AF easier to start and harder to stop: paroxysmal → persistent → permanent",
        "Early NSR can slow or reverse dilation and LV dysfunction"
      ]) + Tbl(["Strategy", "Best for"], [
        ["Rhythm control", "Most patients, younger, symptomatic, new-onset"],
        ["Rate control", "Frail elderly, limited activity"],
        ["AV node ablation + PPM", "Can't hold NSR and can't tolerate BB/CCB"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Cardioversion succeeds ~90% in young patients with short AF. <strong>Pulmonary vein isolation</strong> targets the trigger; 60% after one ablation, 80% after several; best early.</p>" + HY("The longer AF lasts, the harder sinus is to keep.")),
      S("traps", "Common traps", traps([
        "<strong>\"Wait and see\" for years in a young symptomatic patient.</strong> Remodeling makes later rhythm control harder.",
        "<strong>Rhythm control for a frail 90-year-old.</strong> Rate control has fewer drug interactions and side effects.",
        "<strong>Thinking ablation is first line.</strong> Patients must fail at least one antiarrhythmic first."
      ]))
    ], [
      Q("chain", "Why does persistent AF become harder to convert over time?", ["Atrial remodeling makes AF self-sustaining", "The SA node dies immediately", "Clots block conduction", "Potassium falls"], 0, "AF is self-promoting."),
      Q("idea", "Which two things does AF need to start?", ["A trigger and a permissive atrial substrate", "Fever and dehydration", "A heart block and a PVC", "Hypokalemia and a long QT"], 0, "Trigger + substrate."),
      Q("bedside", "When does catheter ablation work best?", ["In short-duration AF", "After 10 years of permanent AF", "Only in the elderly", "Only with mitral stenosis"], 0, "Best success with short-duration AF."),
      Q("chain", "What does pulmonary vein isolation target?", ["The triggering foci in pulmonary vein muscle sleeves", "The AV node", "The SA node", "The tricuspid annulus"], 0, "Isolates arrhythmogenic tissue."),
      Q("bedside", "Why is restoring sinus rhythm early favored in most new AF?", ["It can slow or reverse atrial dilation and LV dysfunction", "It eliminates stroke risk", "It is cheaper than rate control", "It avoids anticoagulation"], 0, "Prevents remodeling-driven cardiomyopathy."),
      Q("traps", "A frail 90-year-old with new AF. Why is rate control preferred?", ["Rate-control drugs have fewer interactions and side effects", "Rhythm control is impossible after 80", "Rate control prevents strokes", "She has no remodeling"], 0, "Frail elderly → rate control."),
      Q("chain", "Over decades, why do some patients move from rhythm to rate control?", ["The atria degenerate and AF keeps recurring", "Drugs become stronger", "They develop WPW", "The AV node heals"], 0, "Patients may graduate to rate control."),
      Q("traps", "When is a patient a candidate for AF ablation?", ["Lifestyle-limiting AF after failing or not tolerating at least one antiarrhythmic", "At diagnosis for everyone", "Only after a stroke", "Only if they refuse anticoagulation"], 0, "Indications per the slides.")
    ]),

    D("mgmtc-drug-fits-heart", "Matching the antiarrhythmic to the heart", "Sodium-channel blockers are dangerous in scarred or failing hearts, so the structure of the heart decides the drug: IC for normal hearts, amiodarone or dofetilide for CAD/HF.", [
      S("idea", "The idea", "<p>Antiarrhythmics can <strong>cause</strong> arrhythmias (proarrhythmia). Scarred (CAD, MI) or failing myocardium is where that risk is highest. Class <strong>IC</strong> drugs (flecainide, propafenone) slow conduction strongly at fast rates; in scar that creates re-entry → VT/death. So IC is only for <strong>structurally normal hearts</strong>.</p><p>Amiodarone has the <strong>least proarrhythmia</strong> → DOC in CAD and HF (but organ toxicity long term). <strong>Dofetilide</strong> doesn't change CO or SVR → safe in HFrEF/CAD, but QT → inpatient start. <strong>Sotalol</strong> OK in CAD, not HF or long QT. <strong>Dronedarone</strong> raises death in HF and permanent AF.</p>" + clar("use-dependence and scar-related re-entry are the standard explanation for the slides' 'no structural heart disease' rule.")),
      S("chain", "Cause → effect", chain([
        "IC blocks Na+ channels → slower conduction, more at fast rates",
        "Normal myocardium tolerates it",
        "Scar or failing tissue → slowed conduction creates re-entry loops",
        "→ VT/VF, sudden death",
        "So: structural disease → amiodarone or dofetilide"
      ]) + Tbl(["Heart", "Good choice", "Avoid"], [
        ["Normal structure", "Flecainide, propafenone (pill in pocket)", "—"],
        ["CAD", "Amiodarone, sotalol, dofetilide, dronedarone", "IC"],
        ["HF", "Amiodarone, dofetilide", "IC, sotalol, dronedarone"],
        ["Long QT", "—", "Sotalol, dofetilide"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Flecainide in flutter can cause <strong>1:1 conduction</strong>, so give an AV nodal blocker with it (Pharm deck). Class III drugs need QTc, K and Mg monitoring. Washout one antiarrhythmic before loading another.</p>" + HY("Structural heart disease? Then no class IC.")),
      S("traps", "Common traps", traps([
        "<strong>Flecainide after an MI.</strong> Proarrhythmic in scar.",
        "<strong>Dronedarone for HF patients.</strong> 2-fold risk of death, stroke and HF hospitalization.",
        "<strong>Assuming amiodarone is 'safe' long term.</strong> Lung, liver, thyroid toxicity need monitoring."
      ]))
    ], [
      Q("chain", "Why is flecainide avoided after a myocardial infarction?", ["Slowed conduction in scarred tissue promotes re-entrant VT", "It raises BP", "It causes thyroid disease", "It is a beta blocker"], 0, "Proarrhythmic in structural disease."),
      Q("bedside", "AF with ischemic cardiomyopathy and EF 25%. Which rhythm drug?", ["Amiodarone", "Flecainide", "Dronedarone", "Propafenone"], 0, "Amiodarone: least proarrhythmic."),
      Q("bedside", "A 35-year-old with a structurally normal heart has rare AF episodes. Which drug can be used as 'pill in the pocket'?", ["Flecainide", "Amiodarone", "Dofetilide", "Sotalol"], 0, "IC for normal hearts."),
      Q("traps", "Which antiarrhythmic doubles the risk of death in heart failure?", ["Dronedarone", "Amiodarone", "Dofetilide", "Metoprolol"], 0, "Contraindicated in HF and permanent AF."),
      Q("chain", "Why must an AV nodal blocker be added when flecainide treats flutter?", ["Slowing the flutter rate can allow 1:1 AV conduction", "Flecainide causes bradycardia", "It prevents QT prolongation", "It treats hypertension"], 0, "Boxed warning."),
      Q("idea", "What is proarrhythmia?", ["An antiarrhythmic drug causing a new or worse arrhythmia", "A rhythm before AF", "A drug that speeds sinus rate", "A pacemaker malfunction"], 0, "Drug-induced arrhythmia."),
      Q("bedside", "Why is dofetilide a reasonable choice in HFrEF?", ["It doesn't change cardiac output or SVR", "It strengthens contraction", "It needs no monitoring", "It is a beta blocker"], 0, "Hemodynamically neutral."),
      Q("traps", "Which drug is acceptable in CAD but should be avoided in HF?", ["Sotalol", "Amiodarone", "Dofetilide", "Apixaban"], 0, "Sotalol OK in CAD; proarrhythmia rises in HF.")
    ]),

    D("mgmtc-risk-balance", "Stroke risk vs bleeding risk", "Anticoagulation is a trade: CHA2DS2-VASc estimates the strokes you prevent, HAS-BLED the bleeds you cause; when bleeding wins, fix bleeding risks or close the appendage.", [
      S("idea", "The idea", "<p>Every anticoagulant prevents some strokes and causes some bleeds. <strong>CHA2DS2-VASc</strong> estimates stroke risk (0 → 0.2%/yr, rising to ~12%/yr at 9). <strong>HAS-BLED</strong> estimates major bleeding (&gt; 3 = high).</p><p>Higher stroke score → stronger case for AC. Higher bleed score → <strong>correct the fixable risks</strong> (BP, alcohol, NSAIDs/antiplatelets, labile INR) rather than automatically stopping. If bleeding still outweighs benefit, the <strong>Watchman</strong> removes the clot source without lifelong AC.</p><p>Many risk factors appear in <em>both</em> scores (age, HTN, prior stroke), so the oldest patients often benefit most <em>and</em> bleed most.</p>"),
      S("chain", "Cause → effect", chain([
        "Calculate CHA2DS2-VASc → expected strokes",
        "0–1: aspirin; 2: individualize (AC preferred); ≥ 3: anticoagulate (DOAC preferred)",
        "Calculate HAS-BLED → expected major bleeds",
        "&gt; 3: correct fixable risks, review regularly",
        "Bleeding still too high → Watchman (or LAA clip at surgery)"
      ]) + Tbl(["Choose warfarin over DOAC when…", "Why"], [
        ["Mechanical valve", "DOACs fail/unsafe"],
        ["Significant native mitral disease", "Scores and DOAC trials exclude valvular AF"],
        ["ESRD (except apixaban)", "Renal clearance"],
        ["Antiphospholipid syndrome (VTE lecture)", "Warfarin preferred"]
      ])),
      S("bedside", "Why it matters clinically", "<p>DOACs are preferred for most non-valvular AF: no INR checks, fewer drug interactions, superior stroke prevention. Dose by kidney function, age and weight (apixaban 2.5 mg if 2 of SCr ≥ 1.5, age ≥ 80, weight ≤ 60).</p>" + HY("A high bleeding score is a reason to fix risks, not an automatic reason to stop AC.")),
      S("traps", "Common traps", traps([
        "<strong>Using CHA2DS2-VASc in mitral stenosis or a mechanical valve.</strong> The scores are for non-valvular AF; those patients get warfarin.",
        "<strong>Stopping AC because the patient is old.</strong> Age raises stroke risk too.",
        "<strong>Forgetting the two 2-point items.</strong> Age ≥ 75 and prior stroke/TIA."
      ]))
    ], [
      Q("chain", "A patient's HAS-BLED is 4 because of uncontrolled BP and daily NSAIDs. First step?", ["Control BP and stop NSAIDs, then reassess", "Stop anticoagulation", "Double the dose", "Switch to aspirin"], 0, "Correct bleeding risks."),
      Q("idea", "What does CHA2DS2-VASc estimate?", ["Annual stroke risk in non-valvular AF", "Bleeding risk on warfarin", "Chance of cardioversion success", "Risk of heart block"], 0, "Stroke risk score."),
      Q("bedside", "Why can't the CHA2DS2-VASc score guide a patient with AF and moderate mitral stenosis?", ["It was built for non-valvular AF; these patients get warfarin", "It overestimates bleeding", "Mitral stenosis has no stroke risk", "It only applies to men"], 0, "Valvular AF."),
      Q("traps", "Why do elderly patients often have both high stroke and high bleeding scores?", ["Age and hypertension count in both scores", "Old age lowers stroke risk", "Bleeding scores ignore age", "They are always on warfarin"], 0, "Overlapping risk factors."),
      Q("bedside", "When does the Watchman make sense?", ["High stroke risk with bleeding on anticoagulation", "Low stroke risk", "Mechanical valve", "Any new AF"], 0, "Bleeding issues on AC."),
      Q("chain", "A 70-year-old woman with hypertension and diabetes. CHA2DS2-VASc?", ["4", "2", "3", "5"], 0, "Age 65-74 (1) + female (1) + HTN (1) + DM (1) = 4."),
      Q("bedside", "Why are DOACs preferred over warfarin for most non-valvular AF?", ["No INR monitoring and better stroke prevention", "They have no bleeding risk", "They are cheaper", "They work in mechanical valves"], 0, "Per the lecture."),
      Q("traps", "Which two items earn 2 points each in CHA2DS2-VASc?", ["Age 75 or older and prior stroke or TIA", "Diabetes and hypertension", "Female sex and CHF", "Vascular disease and age 65"], 0, "A2 and S2.")
    ])
  ]);
}());
