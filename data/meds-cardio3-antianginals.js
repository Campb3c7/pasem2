/*
  Medications: Antianginals (Cardio Part 3). Source: cad-part-5.md slides 9-41,
  47, 49-52; cad-part-3.md slides 123-124; cad-part-4.md slides 17-18, 23,
  58-59, 65-66; heart-failure.md slides 187-189; coronary-angiogram.md slide 26
  (CCTA prep). Beta blockers for chronic HFrEF are in the heart failure group.
  Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO3_MEDS_ANTIANGINALS = L("meds3-antianginals", "Antianginals", [

    Med("med3-ntg-short", "Nitroglycerin (SL and IV)", "SL 0.4 mg q5 min ×3 for acute chest pain; IV drip for persistent pain, HTN or pulmonary edema", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Heart Failure"], {
      uses: Tbl(["Form", "When"], [
        ["<strong>SL tablet or spray</strong> 0.3–0.4 mg", "Acute chest pain, and before predictable exertion. <strong>Every CAD patient carries it.</strong> Onset 1–3 min, lasts 30–60 min"],
        ["<strong>IV drip</strong> start 5–10 mcg/min, titrate", "Pain that persists after 1–2 SL doses; ACS with <strong>hypertension or pulmonary edema</strong>. Onset 1–2 min, lasts 3–5 min, so it is easy to turn down when BP is marginal"],
        ["IV NTG in decompensated HF", "<strong>Treatment of choice for hypertensive emergency with pulmonary edema</strong>: lowers preload, and at high doses afterload, often before any diuresis"]
      ]) +
        "<p><strong>Patient directions (SL):</strong> stop and sit down, take one dose at onset; if not better in <strong>5 minutes, call 911</strong> (do not wait for all three). While waiting, may repeat every 5 min up to 3 total if BP allows.</p>",
      moa: "<p>Converted to <strong>nitric oxide</strong> → smooth-muscle relaxation. Main effect is <strong>venodilation</strong> → less venous return → ↓ <strong>preload</strong> → ↓ wall stress → ↓ myocardial O<sub>2</sub> demand. Also dilates coronary arteries and relieves <strong>vasospasm</strong> (supply side).</p>",
      avoid: ul(["<strong>PDE-5 inhibitor</strong> recently: sildenafil, vardenafil, avanafil within 24 h, <strong>tadalafil within 48 h</strong> → severe hypotension.",
        "<strong>RV infarction</strong> (inferior STEMI + hypotension + JVD + clear lungs): the RV depends on preload.",
        "<strong>Hypotension</strong>: SBP &lt;90, or a drop &gt;30 below baseline; signs of hypoperfusion; volume depletion.",
        "Caution: <strong>severe aortic stenosis</strong> and <strong>HCM with LVOT obstruction</strong> (less preload worsens obstruction and output)."]),
      se: ul(["<strong>Headache</strong> (cerebral vasodilation): common, does NOT tell you whether the drug is working; acetaminophen usually fixes it.",
        "<strong>Flushing</strong>.", "<strong>Orthostatic hypotension / dizziness</strong> from venous pooling: sit down first.",
        "<strong>Tolerance (tachyphylaxis)</strong> with continuous use, within about 24–48 h (IV drip about 24 h).",
        "Persistent hypotension after stopping it: think volume depletion or RV infarct → NS bolus 250–500 mL."]),
      pearls: ul(["Do not swallow the SL tablet; let it dissolve.", "Track how often the patient uses SL NTG: more use = worse angina (rest or new pattern needs urgent workup).",
        "Pain relieved by nitro can be <strong>esophageal spasm</strong>; relief does not prove cardiac pain.",
        "In ACS it relieves symptoms only; it has no proven mortality benefit, and reperfusion must not wait for pain relief."]) +
        HY("Nitro = ↓ preload. Anything that already needs preload (RV infarct, AS, HCM, dry, PDE-5) = danger.")
    }, [
      Q("avoid", "A 58-year-old man with crushing chest pain says he took tadalafil last night. BP 132/80. What do you do about nitroglycerin?", ["Hold it: tadalafil within 48 hours can cause severe hypotension", "Give SL nitro, tadalafil only matters within 6 hours", "Give half-dose nitro", "Give IV nitro instead of SL"], 0, "PDE-5 inhibitors and nitrates both raise cGMP, so together they drop BP dangerously (tadalafil lasts about 48 h)."),
      Q("avoid", "Inferior STEMI, BP 84/50, JVD, clear lungs. The paramedic asks about nitro. Best answer?", ["No nitro: suspect RV infarct and give IV fluid", "SL nitro every 5 minutes", "IV nitro drip and furosemide", "Nitro paste"], 0, "An infarcted RV needs preload, and nitro takes preload away, so pressure crashes."),
      Q("moa", "Nitroglycerin relieves stable angina mainly by which effect?", ["Venodilation that lowers preload and wall stress", "Slowing the heart rate", "Lowering contractility", "Blocking late sodium current"], 0, "Less venous return means a smaller, less stretched ventricle that needs less oxygen."),
      Q("uses", "A patient's chest pain started 5 minutes after one SL nitro and is no better. What did the lecture teach him to do?", ["Call 911 now, then may repeat doses while waiting", "Wait until he has taken all three doses", "Take an aspirin and lie down for an hour", "Swallow the next tablet whole"], 0, "Unrelieved pain at 5 minutes may be an MI, so EMS is called before finishing the three doses."),
      Q("uses", "Hypertensive emergency with acute pulmonary edema, BP 210/120. Which drug is the treatment of choice?", ["IV nitroglycerin", "IV metoprolol", "Oral amlodipine", "Digoxin"], 0, "IV NTG quickly lowers preload and afterload, which unloads the failing heart."),
      Q("se", "A patient gets a pounding headache after SL nitro and asks if that means it is working. Best answer?", ["No: headache is a vasodilation side effect and does not show effectiveness", "Yes: headache proves the dose is right", "Headache means he is allergic", "Headache means he needs a higher dose"], 0, "Cerebral vessels dilate too, so headache happens whether or not the coronary benefit occurs."),
      Q("se", "Why is the patient told to sit down before taking SL nitroglycerin?", ["Venous pooling can drop BP and cause dizziness or syncope", "It works only when lying flat", "Standing speeds absorption too much", "It causes bradycardia"], 0, "Rapid venodilation pools blood in the legs, so standing patients can faint."),
      Q("pearls", "Substernal pain resolves 3 minutes after SL nitro. Which conclusion is wrong?", ["The pain must be cardiac", "Esophageal spasm is still possible", "Nitro relaxes smooth muscle in the esophagus too", "The patient still needs a workup"], 0, "Nitro relaxes esophageal smooth muscle too, so relief does not prove angina."),
      Q("avoid", "Which patient should NOT get nitroglycerin for chest pain?", ["Severe aortic stenosis with BP 88/60", "Hypertension with BP 170/95", "Prior CABG with BP 140/80", "Diabetes with BP 150/90"], 0, "Fixed outflow plus low BP means less preload can collapse cardiac output."),
      Q("se", "A patient on an IV nitroglycerin drip for 30 hours needs higher and higher doses for the same effect. Why?", ["Nitrate tolerance (tachyphylaxis) after about 24 hours", "Drug interaction with heparin", "The bag has expired", "New aortic stenosis"], 0, "Continuous nitrate exposure blunts the response, which is why oral regimens need a nitrate-free interval.")
    ]),

    Med("med3-nitrate-long", "Long-acting nitrates (isosorbide mononitrate, isosorbide dinitrate, patch)", "Prevent stable angina; need a 10-12 hour nitrate-free interval every day", ["CAD Part III: Chest Pain Workup", "CAD Part V: Pharmacology", "Heart Failure"], {
      uses: ul(["<strong>Second-line</strong> for stable angina when symptoms are frequent despite a beta blocker (or added to a CCB).",
        "Added for <strong>vasospastic angina</strong> that persists on a CCB.",
        "<strong>Prevention only</strong>, not acute relief: dose to cover the hours angina usually happens.",
        "Isosorbide dinitrate + hydralazine (BiDil) in HFrEF: see the heart failure group."]) +
        Tbl(["Drug", "Onset", "Lasts", "Start"], [
          ["Isosorbide mononitrate (<strong>Imdur</strong>)", "30–60 min", "6–8 h", "30 mg daily (ER once daily; IR at 8 am and 3 pm)"],
          ["Isosorbide dinitrate (<strong>Isordil</strong>)", "20–40 min", "4–6 h", "10–20 mg TID"],
          ["NTG patch", "40–60 min", "&gt;8 h", "1 patch (taken off for part of the day)"]
        ]),
      moa: "<p>Same as nitroglycerin: NO → venodilation → ↓ preload and wall stress → ↓ O<sub>2</sub> demand, plus coronary dilation.</p>",
      avoid: ul(["PDE-5 inhibitors (sildenafil, vardenafil, tadalafil).", "HCM with LVOT obstruction; caution in severe AS.", "Low BP or volume depletion."]),
      se: ul(["Headache, flushing, orthostatic dizziness.", "<strong>Tolerance</strong> within 24–48 h of continuous exposure."]),
      pearls: ul(["<strong>Nitrate-free interval of 10–12 h a day</strong> (usually overnight) keeps them working.", "IR mononitrate at <strong>8 am and 3 pm</strong> leaves the night free; dinitrate is given 2–3 times a day the same way.", "The patient still carries SL nitro for breakthrough pain."]) +
        HY("Long-acting nitrate = prevention + a daily nitrate-free gap. SL nitro = rescue.")
    }, [
      Q("pearls", "Why is immediate-release isosorbide mononitrate dosed at 8 am and 3 pm instead of every 12 hours?", ["To leave a nitrate-free interval overnight and prevent tolerance", "Because it causes insomnia", "Because it is absorbed only with meals", "To avoid interaction with statins"], 0, "A daily gap of 10-12 hours without nitrate keeps the vessels responsive."),
      Q("uses", "A patient with stable angina on metoprolol still has angina several times a week. Which add-on does the lecture call second-line?", ["A long-acting nitrate", "Prasugrel", "Digoxin", "Spironolactone"], 0, "Long-acting nitrates are second-line when angina is frequent despite a beta blocker."),
      Q("uses", "A patient asks whether he can take his Imdur when chest pain starts. Best answer?", ["No: it is for prevention; use SL nitro for an attack", "Yes, chew it for fast relief", "Yes, take two at once", "Only if the pain lasts an hour"], 0, "Long-acting nitrates take 30-60 minutes to work, so they cannot rescue an acute episode."),
      Q("avoid", "A man on isosorbide mononitrate asks for sildenafil. What do you tell him?", ["The combination can cause severe hypotension, so it is contraindicated", "It is fine if taken 2 hours apart", "Only tadalafil is a problem", "He should double his nitrate"], 0, "Both drugs raise cGMP and dilate vessels, so BP can crash."),
      Q("se", "A patient wears a nitroglycerin patch 24 hours a day and his angina is returning. Most likely cause?", ["Nitrate tolerance from no nitrate-free interval", "Patch allergy", "Statin interaction", "Hypokalemia"], 0, "Continuous exposure causes tachyphylaxis, so the patch is removed for part of each day."),
      Q("avoid", "Which patient is the worst fit for a long-acting nitrate?", ["HCM with LVOT obstruction", "Stable angina on a beta blocker", "Vasospastic angina on amlodipine", "Post-CABG with exertional angina"], 0, "Lower preload makes the LV smaller and worsens the outflow obstruction.")
    ]),

    Med("med3-bb-angina", "Beta blockers (angina and ACS)", "First-line for stable angina; oral cardioselective BB within 24 h of ACS; goal HR 55-70", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Cardiac Testing"], {
      uses: Tbl(["Setting", "Plan"], [
        ["<strong>Stable angina</strong>", "<strong>First-line</strong> for symptom control (metoprolol, atenolol, bisoprolol, carvedilol)"],
        ["<strong>ACS</strong>", "<strong>Oral</strong>, <strong>cardioselective</strong> (metoprolol, atenolol) <strong>within 24 h</strong> if no contraindication. No benefit to giving it before PCI as long as it starts within 24 h. IV use is limited"],
        ["ACS dose goal", "<strong>HR 55–70</strong> with <strong>SBP &gt;90</strong>"],
        ["After MI, long term", "EF &lt;50% or HF: continue (metoprolol <strong>succinate</strong>, carvedilol or bisoprolol). Preserved EF, uncomplicated revascularized MI: no clear lifelong benefit, reassess"],
        ["Coronary CTA prep", "Given to slow HR to 60–70 for clear pictures"]
      ]) + "<p>In ACS they shrink infarct size, cut re-infarction, lethal ventricular arrhythmias and sudden death, and lower mortality when continued.</p>",
      moa: "<p>Block β1 → ↓ <strong>heart rate</strong> (main antianginal effect), ↓ contractility, ↓ BP/wall stress = ↓ O<sub>2</sub> demand. Slower HR also <strong>lengthens diastole</strong>, when the coronaries fill. β1-selective: metoprolol, atenolol, bisoprolol. Nonselective: propranolol, nadolol, timolol. Plus α1 block: carvedilol, labetalol.</p>",
      avoid: ul(["<strong>Vasospastic (Prinzmetal) angina</strong> and cocaine/meth chest pain: unopposed α → more spasm (especially nonselective).",
        "Severe bradycardia (ACS: &lt;55) or symptomatic hypotension (SBP &lt;90), cardiogenic shock, low-output state.",
        "<strong>Acute decompensated HF</strong> (overt signs).", "2nd or 3rd degree AV block without a pacemaker.", "Active asthma/bronchospasm/wheezing.",
        "Reassess once stable: most contraindications in ACS are temporary."]),
      se: ul(["Fatigue, dizziness, ↓ exercise tolerance, cold extremities, sexual dysfunction, depression.", "Bradycardia, hypotension, AV block; may worsen acute HF.", "Bronchospasm (nonselective).",
        "<strong>Masks hypoglycemia</strong> warning signs (tachycardia) in patients on insulin or sulfonylureas.", "<strong>Abrupt stop → rebound tachycardia, angina, MI</strong>: taper."]),
      pearls: ul(["<strong>Never combine with verapamil/diltiazem</strong> casually: excess bradycardia, AV block, worse LV function. Pair with a <strong>DHP</strong> (amlodipine) instead.",
        "Beta blockers cause <strong>false-negative exercise stress tests</strong> (patient cannot reach target rate-pressure product).",
        "Must-know triad for ACS: beta blocker improves outcomes, nitro and O<sub>2</sub> only treat symptoms."]) +
        HY("Stable angina first-line = beta blocker. ACS = oral cardioselective BB in 24 h unless HF, shock, brady, block or wheezing.")
    }, [
      Q("avoid", "NSTEMI patient: HR 48, BP 86/50, crackles to mid-lung fields. Start metoprolol now?", ["No: bradycardia, hypotension and decompensated HF are all contraindications", "Yes, IV metoprolol 5 mg", "Yes, oral metoprolol 25 mg", "Yes, carvedilol instead"], 0, "Blocking β1 would further drop rate and contractility in a heart already failing."),
      Q("uses", "A hemodynamically stable NSTEMI patient with no contraindications. When should the beta blocker start?", ["Orally within the first 24 hours", "Only after PCI is complete and the patient is discharged", "IV bolus before the cath, always", "Never in NSTEMI"], 0, "An oral cardioselective BB within 24 h lowers re-infarction and arrhythmic death; timing before PCI adds nothing."),
      Q("avoid", "A 32-year-old smoker has early-morning rest chest pain with transient ST elevation and clean coronaries. Which drug should be avoided?", ["Propranolol", "Amlodipine", "Diltiazem", "SL nitroglycerin"], 0, "In vasospastic angina, β blockade leaves α vasoconstriction unopposed and worsens spasm."),
      Q("moa", "What is the main way a beta blocker relieves exertional angina?", ["Lowering heart rate, which cuts demand and lengthens diastolic filling", "Dilating veins to lower preload", "Dissolving plaque", "Blocking late sodium current"], 0, "Heart rate is the biggest driver of O2 demand, and a slower rate gives the coronaries more diastole to fill."),
      Q("se", "A patient stopped his metoprolol abruptly last week and now has new rest angina. Why?", ["Rebound adrenergic surge after abrupt withdrawal", "Metoprolol causes coronary spasm when stopped slowly", "Statin interaction", "Nitrate tolerance"], 0, "Receptors up-regulated on the drug overreact when it stops suddenly, so beta blockers are tapered."),
      Q("se", "An insulin-treated diabetic on propranolol is found confused with glucose 42 but no palpitations or tremor. Why no warning signs?", ["Beta blockers mask adrenergic hypoglycemia symptoms", "Insulin blocks tremor", "Hypoglycemia never causes tachycardia", "Propranolol raises glucose"], 0, "Tachycardia and tremor are adrenergic, and the beta blocker blunts them."),
      Q("pearls", "A patient on metoprolol needs a second antianginal. Which CCB is the safer partner?", ["Amlodipine", "Verapamil", "Diltiazem", "Any non-DHP CCB"], 0, "Non-DHPs also slow the SA/AV node and contractility, so with a BB they risk bradycardia and block."),
      Q("uses", "Ten days after an anterior STEMI, echo shows EF 35%. Which beta blocker plan matches the guideline?", ["Continue long term with metoprolol succinate, carvedilol or bisoprolol", "Stop it after 30 days", "Switch to atenolol only", "Use metoprolol tartrate twice weekly"], 0, "With reduced EF, the evidence-based HF beta blockers lower mortality."),
      Q("pearls", "A patient on atenolol does an exercise treadmill test, reaches only 70% of target HR and the test is read negative. Best interpretation?", ["Possibly false negative: the beta blocker blunted the HR response", "CAD is ruled out", "The test proves vasospasm", "He has chronotropic excess"], 0, "Beta blockers keep the rate-pressure product down, so ischemia may not be provoked."),
      Q("uses", "In ACS, what HR and BP targets guide beta blocker titration?", ["HR 55-70 with SBP above 90", "HR 40-50 with SBP above 70", "HR 80-100 with SBP above 120", "HR under 100 only"], 0, "Slow enough to cut demand, but not so slow or hypotensive that perfusion suffers.")
    ]),

    Med("med3-ccb-dhp", "Dihydropyridine CCBs (amlodipine, nifedipine)", "Arterial dilators; the CCB to pair with a beta blocker; first-line for vasospasm", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology"], {
      uses: ul(["Stable angina: when BB or nitrates are contraindicated or not tolerated, or symptoms persist on them. <strong>The CCB to combine with a beta blocker.</strong>",
        "<strong>Vasospastic (Prinzmetal) angina: first-line</strong> (amlodipine; diltiazem/verapamil also first-line).", "Stimulant (cocaine/meth) ischemia when appropriate."]),
      moa: "<p>Block calcium entry into <strong>vascular smooth muscle</strong> → <strong>arterial vasodilation</strong> → ↓ BP/afterload (less demand) and coronary dilation (more supply, stops spasm). Little effect on the SA/AV node.</p>",
      avoid: ul(["Short-acting nifedipine: reflex tachycardia can worsen ischemia (standard teaching: avoid it in ACS).", "Hypotension."]),
      se: ul(["<strong>Peripheral edema</strong> (ankles).", "Headache, flushing.", "<strong>Reflex tachycardia</strong>, mostly short-acting nifedipine."]),
      pearls: ul(["Ankle edema is from arteriolar dilation, not fluid overload, so a diuretic does not fix it well (standard teaching).", "No HR slowing, so it does not double up with a beta blocker."]) +
        HY("BB + amlodipine = OK. BB + verapamil/diltiazem = brady, block, HF.")
    }, [
      Q("uses", "A patient on full-dose metoprolol still has angina; he cannot take nitrates because of migraines. Which add-on fits best?", ["Amlodipine", "Verapamil", "Diltiazem", "Ivabradine"], 0, "A DHP adds vasodilation without stacking AV-nodal and negative inotropic effects on the beta blocker."),
      Q("uses", "Which drug class is first-line for vasospastic (Prinzmetal) angina?", ["Calcium channel blockers", "Nonselective beta blockers", "P2Y12 inhibitors", "Loop diuretics"], 0, "CCBs relax coronary smooth muscle and prevent spasm."),
      Q("se", "Two weeks after starting amlodipine, a woman has bilateral ankle swelling with normal JVP and clear lungs. Most likely cause?", ["Amlodipine arteriolar dilation", "New heart failure", "DVT", "Nephrotic syndrome"], 0, "DHPs dilate arterioles more than venules, pushing fluid into the tissues of the legs."),
      Q("se", "Why can short-acting nifedipine worsen angina?", ["Sudden BP drop triggers reflex tachycardia, raising O2 demand", "It blocks the AV node", "It causes coronary spasm", "It lowers hemoglobin"], 0, "A faster heart consumes more oxygen, which can outweigh the vasodilator benefit."),
      Q("moa", "Where do dihydropyridine CCBs mainly act?", ["Vascular smooth muscle, causing arterial dilation", "SA and AV node, slowing HR", "Platelet COX-1", "Late sodium channels"], 0, "DHPs are vessel-selective, unlike verapamil and diltiazem, which act on cardiac tissue.")
    ]),

    Med("med3-ccb-nondhp", "Non-dihydropyridine CCBs (verapamil, diltiazem)", "Slow HR and contractility; good for vasospasm or when BB not tolerated; avoid with BB and in HFrEF", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Heart Failure"], {
      uses: ul(["Stable angina when a <strong>beta blocker is contraindicated or not tolerated</strong> (for example asthma).", "<strong>Vasospastic angina</strong>: first-line CCB option.", "Rate control of arrhythmias (Cardio Part 2)."]),
      moa: "<p>Block calcium entry in <strong>cardiac tissue</strong> → ↓ HR, ↓ contractility, slower AV conduction → ↓ O<sub>2</sub> demand; plus coronary vasodilation.</p>",
      avoid: ul(["<strong>HFrEF / reduced LV systolic function</strong>: negative inotropy worsens HF.", "<strong>Acute decompensated HF</strong>: CCBs are contraindicated.", "Combined with a <strong>beta blocker</strong>: excessive bradycardia, AV block, LV dysfunction.", "Existing AV block, bradycardia, hypotension.",
        "Raises <strong>ranolazine</strong> levels: cap ranolazine at 500 mg BID."]),
      se: ul(["Bradycardia, AV block.", "Hypotension, dizziness, fatigue.", "Worsening HF with low EF.", "<strong>Constipation</strong>, especially verapamil."]),
      pearls: ul(["Recent addition of a negative inotrope (CCB, BB) is a classic iatrogenic trigger of acute HF.", "Diltiazem is the CCB listed for symptom control in the CAD III table."]) +
        Mn("Verapamil", "\"Very constipated\": constipation is the classic verapamil side effect.")
    }, [
      Q("uses", "A patient with stable angina has severe asthma and cannot take beta blockers. Reasonable first-line antianginal?", ["Diltiazem", "Propranolol", "Prasugrel", "Ivabradine alone"], 0, "Non-DHP CCBs also cut HR and contractility without bronchospasm."),
      Q("avoid", "A man with angina and EF 25% is on carvedilol. Which drug should NOT be added?", ["Verapamil", "Isosorbide mononitrate", "Ranolazine", "Amlodipine"], 0, "Verapamil's negative inotropy worsens systolic failure, and with a beta blocker it risks block."),
      Q("se", "An elderly woman started verapamil for angina and now complains mostly of a GI problem. Which one?", ["Constipation", "Diarrhea", "Hematemesis", "Steatorrhea"], 0, "Verapamil relaxes gut smooth muscle, so constipation is its classic side effect."),
      Q("avoid", "A patient on diltiazem is started on ranolazine. Max ranolazine dose?", ["500 mg twice daily", "1,000 mg twice daily", "2,000 mg daily", "No limit"], 0, "Diltiazem and verapamil inhibit ranolazine metabolism and raise its levels."),
      Q("pearls", "A patient admitted with acute HF had diltiazem added for angina 1 week ago. How does that connect?", ["A new negative inotrope can trigger decompensation", "Diltiazem causes fluid loss", "It is unrelated", "Diltiazem raises BNP falsely"], 0, "Lowering contractility in a weak heart drops output and backs up fluid."),
      Q("moa", "Why does diltiazem lower myocardial oxygen demand more like a beta blocker than amlodipine does?", ["It acts on cardiac tissue to slow HR and contractility", "It is a pure venodilator", "It blocks β1 receptors", "It inhibits neprilysin"], 0, "Non-DHPs block cardiac calcium channels, so rate and force fall.")
    ]),

    Med("med3-ranolazine", "Ranolazine (Ranexa)", "Add-on antianginal with no effect on HR or BP; watch QT, liver and CYP3A interactions", ["CAD Part III: Chest Pain Workup", "CAD Part V: Pharmacology"], {
      uses: ul(["<strong>Add-on</strong> for patients still symptomatic on a beta blocker, CCB or long-acting nitrate.", "Useful when BP or HR is too low to push the other drugs.",
        "Start <strong>500 mg ER BID</strong>, up to 1,000 mg BID."]),
      moa: "<p>Blocks the <strong>late inward sodium current</strong> during repolarization → less intracellular Na<sup>+</sup> → less Ca<sup>2+</sup> overload → less wall tension and O<sub>2</sub> demand. Prolongs the ventricular action potential. <strong>Does NOT change HR or BP.</strong></p>",
      avoid: ul(["<strong>Liver cirrhosis</strong> / significant hepatic impairment (extensive hepatic metabolism).", "<strong>Strong CYP3A inhibitors</strong>: ketoconazole, itraconazole, clarithromycin.", "Monitor renal function in moderate-severe CKD."]),
      se: ul(["Constipation, headache, nausea, dizziness.", "<strong>QT prolongation</strong>."]),
      pearls: Tbl(["Interacting drug", "What to do"], [
        ["Diltiazem / verapamil", "Ranolazine max 500 mg BID"], ["Grapefruit juice / fluconazole", "Max 500 mg BID"], ["Strong CYP3A inhibitors", "Avoid"],
        ["Digoxin", "Ranolazine raises digoxin levels: monitor"], ["Simvastatin", "Simvastatin max 20 mg/day"]
      ]) + HY("Ranolazine: no HR/BP change, but QT goes up.")
    }, [
      Q("uses", "A patient with angina has HR 52 and BP 98/60 on low-dose metoprolol and amlodipine and still has symptoms. Which add-on will not lower HR or BP further?", ["Ranolazine", "Diltiazem", "Isosorbide mononitrate", "Higher-dose metoprolol"], 0, "Ranolazine works on late sodium current, not rate or vascular tone."),
      Q("se", "Which ECG change should you watch for after starting ranolazine?", ["QT prolongation", "Delta waves", "ST elevation", "Shortened PR"], 0, "Ranolazine prolongs the ventricular action potential, which lengthens QT."),
      Q("avoid", "A patient with Child-Pugh C cirrhosis has refractory angina. Can he take ranolazine?", ["No: it is contraindicated with significant hepatic impairment", "Yes, at full dose", "Yes, it is renally cleared", "Only with grapefruit juice"], 0, "Ranolazine is heavily metabolized by the liver, so levels build up."),
      Q("pearls", "A patient on ranolazine takes simvastatin 40 mg. What should change?", ["Lower simvastatin to 20 mg/day max", "Stop ranolazine", "Raise simvastatin to 80 mg", "Nothing"], 0, "Ranolazine raises simvastatin levels, increasing myopathy risk."),
      Q("avoid", "A patient on ranolazine gets clarithromycin for pneumonia. Problem?", ["Strong CYP3A inhibitor: avoid the combination", "No interaction", "It lowers ranolazine levels", "It only matters with digoxin"], 0, "Blocking CYP3A raises ranolazine levels and QT risk."),
      Q("moa", "How does ranolazine reduce ischemia?", ["Blocks late sodium current, preventing calcium overload", "Blocks β1 receptors", "Releases nitric oxide", "Inhibits the If current"], 0, "Less sodium inside means the Na/Ca exchanger loads less calcium, so the wall relaxes and uses less oxygen.")
    ])
  ]);
}());
