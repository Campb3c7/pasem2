/* Cardio Part 3 Tiers: CAD Part V (Stager's pharmacology of ischemic heart disease and ACS deck), all three tiers, story format.
   Same shape and rules as data/tiers-cardio3-cad-part-1.js. Facts follow source-material/cardio-part-3/text/cad-part-5.md;
   anything not on the slides is marked "(standard teaching)".
   Chunk ids are progress keys and question order is too: never rename a chunk, only append questions. */
(function () {
  "use strict";
  var T = window.CARDIO3_TIERS;
  if (!T) return;
  function Q(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function pic(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Memory hook</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }

  /* =============================== TIER 1 · FOUNDATIONS =============================== */
  T.units["t1|cad-part-5"] = { chunks: [
    { id: "balance", title: "Supply, demand and the four drugs", goal: "Angina is demand outrunning supply; the four antianginals each tip the balance back.",
      pages: [
        { title: "The seesaw", fig: { type: "balance", tip: "demand", supply: ["coronary flow", "O₂ content", "perfusion pressure"], demand: ["heart rate", "contractility", "wall stress"], verdict: "Demand > supply → angina" },
          html: "<p><strong>Supply</strong>: coronary blood flow, arterial O₂ content (hemoglobin and saturation), coronary perfusion pressure.</p>" +
            "<p><strong>Demand</strong>: <strong>heart rate, contractility and ventricular wall stress</strong>.</p>" +
            hy("Every antianginal either lowers demand, raises supply, or both.") },
        { title: "Two kinds of goals", fig: { type: "vs", a: ["Short term", "ok", ["Relieve or prevent angina", "Restore supply/demand balance", "Better exercise and quality of life"]], b: ["Long term", "good", ["Prevent MI, arrhythmias, HF", "Prevent morbidity and mortality", "Lifestyle + preventive meds"]] },
          html: "<p>Lifestyle and preventive drugs lower future risk. <strong>Antianginals</strong> relieve symptoms.</p>" },
        { title: "The four antianginals", fig: { type: "tiles", items: [["💓", "Beta blockers", "↓ HR, contractility, BP"], ["🧊", "Calcium channel blockers", "↓ demand, ↑ coronary flow"], ["💨", "Nitrates", "↓ preload, dilate coronaries"], ["🔋", "Ranolazine", "add-on; no HR/BP effect"]] },
          html: "<p>Choose by <strong>heart rate, blood pressure, ventricular function, comorbidities</strong> and response. A <strong>beta blocker or CCB</strong> is usually first; add more if symptoms persist.</p>" }
      ],
      remember: ["Supply: coronary flow, O₂ content, perfusion pressure. Demand: HR, contractility, wall stress.", "Short-term goal: relieve angina. Long-term: prevent MI, arrhythmia, HF, death.", "Antianginals: beta blockers, CCBs, nitrates, ranolazine.", "Usually start with a beta blocker or a CCB."],
      check: [
        Q("Which is a determinant of myocardial oxygen DEMAND?", "Heart rate", ["Hemoglobin", "Coronary perfusion pressure", "Oxygen saturation"], "Heart rate, contractility and wall stress set demand."),
        Q("Which drug class is usually started first for chronic stable angina?", "A beta blocker or calcium channel blocker", ["Ranolazine", "A long-acting nitrate alone", "An opioid"], "The deck says a BB or CCB is commonly used initially."),
        Q("What is the long-term goal of CAD treatment?", "Prevent MI, arrhythmias, HF and death", ["Only relieve chest pain", "Raise heart rate", "Lower hemoglobin"], "Long-term treatment prevents events and mortality.")
      ],
      bank: [
        Q("Anemia worsens angina mainly by:", "Lowering oxygen supply", ["Raising contractility", "Slowing heart rate", "Lowering wall stress"], "Lower hemoglobin reduces arterial oxygen content.")
      ] },

    { id: "nitrates", title: "Nitrates", goal: "Nitrates make nitric oxide, mostly dilate veins, lower preload and demand; never within 24 h of a PDE-5 inhibitor.",
      pages: [
        { title: "How nitrates work", fig: { type: "flow", steps: ["Nitrate → <strong>nitric oxide</strong>", "smooth muscle relaxes", "<strong>venodilation</strong> → ↓ venous return", "↓ preload, ↓ wall stress", "↓ O₂ demand"] },
          html: "<p>Their main effect is on the <strong>veins</strong>. Less blood returns to the heart, so the ventricle is smaller and less stressed.</p>" +
            "<p>They also <strong>dilate coronary arteries</strong> and relieve <strong>spasm</strong>, which helps supply.</p>" },
        { title: "Chest pain at home: the SL nitro rules", fig: { type: "flow", vertical: true, steps: ["Stop and <strong>sit down</strong>", "One SL dose at onset: let it dissolve, don't swallow", "Not better in <strong>5 minutes → call 911</strong>", "While waiting: another dose every 5 min, up to 3 total, if BP allows"], hi: 2 },
          html: "<p>Every CAD patient carries SL nitro. Don't wait to finish all three doses before calling 911.</p>" },
        { title: "Side effects and the big no", fig: { type: "tiles", items: [["🤕", "Headache", "cerebral vasodilation; doesn't mean it's working"], ["😳", "Flushing", ""], ["😵", "Orthostasis, dizziness", "venous pooling: sit first"], ["📉", "Tolerance", "within 24-48 h of continuous use"], ["🚫", "PDE-5 inhibitor &lt; 24 h", "sildenafil, vardenafil, tadalafil → severe hypotension"]], hi: 4 },
          html: mn("Nitro + Viagra = the floor.") }
      ],
      remember: ["Nitrate → NO → mostly venodilation → ↓ preload → ↓ wall stress and demand; also coronary dilation and anti-spasm.", "SL nitro: sit, one dose; no relief in 5 min → 911; up to 3 doses 5 min apart.", "Side effects: headache, flushing, orthostasis, tolerance (24-48 h).", "No nitrates within 24 h of a PDE-5 inhibitor."],
      check: [
        Q("What is the predominant effect of nitrates?", "Venodilation, lowering preload", ["Arterial constriction", "Increased heart rate as the goal", "Increased contractility"], "Nitrates mainly dilate veins, reducing venous return and preload."),
        Q("A patient takes one SL nitro and the pain isn't better after 5 minutes. What now?", "Call 911", ["Wait an hour", "Take 5 more tablets at once", "Drive to the clinic tomorrow"], "The deck says call 911 if not relieved within 5 minutes."),
        Q("A man used tadalafil yesterday morning (20 hours ago) and has chest pain. Nitro?", "No, risk of severe hypotension", ["Yes, double dose", "Yes, it's been over 12 hours", "Only IV nitro is safe"], "Nitrates within 24 hours of a PDE-5 inhibitor can cause severe hypotension.")
      ],
      bank: [
        Q("Does a nitrate headache mean the drug is working?", "No, it doesn't indicate effectiveness", ["Yes, always", "Only with the patch", "Only at night"], "The deck says headache doesn't show therapeutic effect.")
      ] },

    { id: "beta-blockers", title: "Beta blockers", goal: "First-line for stable angina: slower rate, less squeeze, lower BP, longer diastole; avoid in vasospasm, bradycardia and acute HF.",
      pages: [
        { title: "β1 vs β2", fig: { type: "vs", a: ["β1: heart + kidney", "ok", ["↑ HR, contractility, AV conduction", "↑ renin release", "Block → slower, softer heart"]], b: ["β2: lungs + vessels", "blue", ["Bronchodilation, vasodilation", "Block → bronchoconstriction"]] },
          html: mn("β1 = one heart. β2 = two lungs.") + std("The one heart, two lungs hook is standard teaching.") },
        { title: "How they help angina", fig: { type: "balance", tip: "even", supply: ["longer diastole"], demand: ["↓ heart rate", "↓ contractility", "↓ BP"], verdict: "Demand drops → angina eases" },
          html: "<p>Beta blockers are <strong>first-line</strong> for symptoms of chronic stable angina.</p>" +
            "<p><strong>Cardioselective (β1)</strong>: metoprolol, atenolol, bisoprolol. <strong>Nonselective</strong>: propranolol, nadolol, timolol. <strong>With α1 block</strong>: carvedilol, labetalol.</p>" },
        { title: "When to avoid", fig: { type: "tiles", items: [["🐢", "Severe bradycardia", "or symptomatic hypotension"], ["🧱", "2nd or 3rd degree AV block", "without a pacemaker"], ["💧", "Acute decompensated HF", "shock, low output"], ["🫁", "Active bronchospasm", ""], ["🌀", "Vasospastic angina", "unopposed α → more spasm"]] },
          html: "<p>Side effects: fatigue, cold extremities, sexual dysfunction, bradycardia, AV block; can <strong>mask hypoglycemia</strong>. <strong>Never stop abruptly</strong>: rebound tachycardia, angina or MI. Taper.</p>" }
      ],
      remember: ["β1: heart (HR, contractility, AV node) + renin. β2: bronchi and vessels.", "First-line for stable angina; ↓ HR, contractility, BP; longer diastole.", "Cardioselective: metoprolol, atenolol, bisoprolol. Nonselective: propranolol, nadolol, timolol. α+β: carvedilol, labetalol.", "Avoid: severe brady, 2nd/3rd AV block, acute decompensated HF/shock, bronchospasm, vasospastic angina.", "Masks hypoglycemia; taper, don't stop abruptly."],
      check: [
        Q("Which is the main antianginal effect of a beta blocker?", "Lower heart rate", ["Venodilation", "Higher contractility", "Coronary vasospasm"], "Slowing the heart cuts demand and lengthens diastole."),
        Q("A patient stops metoprolol suddenly and has angina 2 days later. Why?", "Rebound from abrupt withdrawal", ["Nitrate tolerance", "Statin side effect", "Too much beta blockade"], "Abrupt discontinuation can cause rebound tachycardia, angina or MI."),
        Q("Which beta blocker is cardioselective?", "Metoprolol", ["Propranolol", "Nadolol", "Timolol"], "Metoprolol, atenolol and bisoprolol are β1-selective.")
      ],
      bank: [
        Q("Why are beta blockers avoided in vasospastic angina?", "Unopposed alpha activity can worsen spasm", ["They raise heart rate", "They cause tachyphylaxis", "They block nitric oxide"], "Blocking beta receptors leaves alpha-mediated constriction unopposed.")
      ] },

    { id: "ccb", title: "Calcium channel blockers", goal: "DHPs (amlodipine) relax arteries; non-DHPs (diltiazem, verapamil) slow the heart; never pair a beta blocker with a non-DHP.",
      pages: [
        { title: "Two families", fig: { type: "vs", a: ["DHP: amlodipine, nifedipine", "blue", ["Act on vascular smooth muscle", "Arterial dilation, ↓ BP and afterload"]], b: ["Non-DHP: verapamil, diltiazem", "ok", ["Act on heart tissue", "↓ HR, ↓ contractility, control arrhythmias"]] },
          html: mn("Dihydro-PINE goes to the PIPES (vessels). Non-DHP goes to the heart.") + std("The pipes hook is standard teaching.") },
        { title: "When and with what", fig: { type: "grid", cols: ["Situation", "Choice"], rows: [["BB/nitrate not tolerated or not enough", "add or switch to a CCB"], ["Combining with a beta blocker", "<strong>DHP</strong> (amlodipine)"], ["Beta blocker + non-DHP", "<strong>avoid</strong>: bradycardia, AV block, worse LV function"], ["Vasospastic (Prinzmetal) angina", "<strong>CCB first-line</strong>"]], hiCol: 1 },
          html: "<p>CCBs are a <strong>first-line option alongside beta blockers</strong>. They lower demand, raise coronary flow, or both.</p>" }
      ],
      remember: ["DHP (amlodipine, nifedipine): arterial dilation, ↓ BP/afterload.", "Non-DHP (verapamil, diltiazem): ↓ HR, contractility; antiarrhythmic.", "With a beta blocker use a DHP; BB + non-DHP → bradycardia, AV block, LV dysfunction.", "CCB is first-line for vasospastic angina."],
      check: [
        Q("A patient on metoprolol needs a second antianginal. Which CCB?", "Amlodipine", ["Verapamil", "Diltiazem", "Any CCB is fine"], "A DHP pairs safely with a beta blocker; non-DHPs add bradycardia and AV block."),
        Q("Which CCB slows heart rate?", "Diltiazem", ["Amlodipine", "Nifedipine", "Felodipine"], "Non-DHPs act on cardiac tissue."),
        Q("First-line drug for Prinzmetal angina?", "A calcium channel blocker", ["A beta blocker", "Ranolazine", "Aspirin alone"], "CCBs relieve coronary spasm.")
      ],
      bank: [
        Q("Combining verapamil with a beta blocker risks:", "Excessive bradycardia and AV block", ["Hypertensive crisis", "Hyperkalemia", "Tachycardia"], "Both slow the AV node and the heart rate.")
      ] },

    { id: "acs-drugs", title: "The ACS drug kit", goal: "Core: aspirin, a P2Y12 inhibitor and an anticoagulant (plus reperfusion); symptom drugs: nitro, beta blocker, O₂ if low.",
      pages: [
        { title: "Plug, mesh, dissolve", fig: { type: "clot" },
          html: "<p><strong>Antiplatelets</strong> stop the platelet plug growing (aspirin, clopidogrel, ticagrelor, prasugrel).</p>" +
            "<p><strong>Anticoagulants</strong> slow the fibrin mesh (heparin, enoxaparin, bivalirudin).</p>" +
            "<p><strong>Fibrinolytics</strong> dissolve the mesh of an existing clot (tenecteplase, alteplase).</p>" +
            hy("In ACS, antiplatelets and anticoagulants are used <strong>together</strong>: aspirin + P2Y12 + heparin.") },
        { title: "Core vs symptom vs avoid", fig: { type: "grid", cols: ["Group", "Drugs"], rows: [["<strong>Core</strong>", "aspirin, P2Y12 inhibitor, anticoagulant; reperfusion when indicated"], ["Symptom-directed", "nitroglycerin, beta blocker, oxygen if SpO₂ &lt; 90%"], ["Selected", "opioids for refractory pain; lytics for STEMI when PCI isn't timely"], ["<strong>Avoid routinely</strong>", "non-aspirin NSAIDs; prophylactic antiarrhythmics"]], hiCol: 1 },
          html: "<p>Goals: relieve pain and demand, restore flow, prevent more clot, reduce complications and death.</p>" }
      ],
      remember: ["Antiplatelets = plug; anticoagulants = mesh; fibrinolytics = dissolve.", "Core ACS: aspirin + P2Y12 + anticoagulant, + reperfusion.", "Symptom: nitro, beta blocker, O₂ only if &lt; 90%.", "Avoid NSAIDs (other than aspirin) and prophylactic antiarrhythmics."],
      check: [
        Q("Heparin works on which part of the clot?", "The fibrin mesh", ["The platelet plug", "It dissolves existing fibrin", "The plaque cap"], "Anticoagulants inhibit clotting factors and fibrin formation."),
        Q("Which drug dissolves an existing clot?", "Alteplase", ["Clopidogrel", "Enoxaparin", "Aspirin"], "Fibrinolytics break down fibrin in an existing clot."),
        Q("Which should be avoided for ACS chest pain?", "Ibuprofen", ["Aspirin", "Nitroglycerin", "Heparin"], "Non-aspirin NSAIDs raise cardiovascular events.")
      ],
      bank: [
        Q("Should prophylactic lidocaine be given to prevent VT in ACS?", "No", ["Yes, to everyone", "Only with NSTEMI", "Only with low potassium"], "The deck says not to use prophylactic antiarrhythmics.")
      ] },

    { id: "antiplatelets", title: "Aspirin and the P2Y12 trio", goal: "Aspirin irreversibly blocks COX-1; load 162-325 chewed even if on daily aspirin; DAPT for 12 months, then aspirin for life.",
      pages: [
        { title: "Two targets on the platelet", fig: { type: "platelet" },
          html: "<p><strong>Aspirin</strong> <strong>irreversibly</strong> inhibits <strong>COX-1</strong>, cutting thromboxane A₂. The effect lasts the <strong>life of the platelet</strong>.</p>" +
            "<p><strong>P2Y12 inhibitors</strong> block the ADP receptor: <strong>clopidogrel and prasugrel</strong> (thienopyridines) and <strong>ticagrelor</strong> (non-thienopyridine).</p>" },
        { title: "Aspirin in ACS", fig: { type: "flow", steps: ["Load <strong>162-325 mg</strong> non-enteric-coated, <strong>chewed</strong>", "even if already on daily aspirin", "then <strong>81 mg daily</strong>", "+ P2Y12 = DAPT for ≥ 12 months", "then low-dose aspirin long term"] },
          html: hy("A daily aspirin user with ACS still gets the full chewed loading dose.") }
      ],
      remember: ["Aspirin: irreversible COX-1 → ↓ TXA₂; lasts platelet's life.", "ACS: 162-325 mg chewed, even if on daily ASA; then 81 mg.", "P2Y12: clopidogrel, prasugrel (thienopyridines), ticagrelor.", "DAPT ≥ 12 months after ACS (not high bleeding risk), then aspirin long term."],
      check: [
        Q("Patient on daily aspirin 81 mg arrives with ACS. Aspirin plan?", "Give a 162-325 mg chewed loading dose anyway", ["Skip it, they're already on aspirin", "Give 81 mg only", "Give IV aspirin"], "The deck says load even if the patient takes daily aspirin."),
        Q("How does aspirin work?", "Irreversibly inhibits COX-1, lowering thromboxane A₂", ["Blocks the P2Y12 ADP receptor", "Inhibits thrombin directly", "Activates plasminogen"], "COX-1 inhibition lasts for the platelet's life."),
        Q("Which P2Y12 inhibitor is NOT a thienopyridine?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "Ticlopidine"], "Ticagrelor is the non-thienopyridine.")
      ],
      bank: [
        Q("After 12 months of DAPT post-ACS, what usually continues?", "Low-dose aspirin long term", ["Nothing", "Prasugrel alone for life", "Warfarin"], "Low-dose aspirin is commonly continued for secondary prevention.")
      ] }
  ] };

  /* =============================== TIER 2 · STANDARD DETAILS =============================== */
  T.units["t2|cad-part-5"] = { chunks: [
    { id: "nitrate-forms", title: "Nitrate forms and tolerance", goal: "Short-acting for attacks, long-acting to prevent them, always with a 10 to 12 hour nitrate-free gap.",
      pages: [
        { title: "Fast vs long", fig: { type: "bars", items: [["IV NTG", 4, "onset 1-2 min · lasts 3-5 min", "bad"], ["SL NTG", 15, "onset 1-3 min · lasts 30-60 min", "ok"], ["Isosorbide dinitrate", 50, "onset 20-40 min · 4-6 h", "blue"], ["Isosorbide mononitrate", 70, "onset 30-60 min · 6-8 h", "blue"], ["NTG patch", 100, "onset 40-60 min · > 8 h", "good"]], note: "Bar = how long it lasts (not to scale)." },
          html: "<p>IV and SL are for <strong>acute chest pain</strong> (IV also for HTN); the rest are for <strong>stable angina prevention</strong>. <strong>All of them cause tolerance.</strong></p>" },
        { title: "Long-acting nitrates", fig: { type: "flow", steps: ["Isosorbide mononitrate (Imdur)<br><small>ER once daily · IR at 8 am and 3 pm</small>", "Isosorbide dinitrate (Isordil)<br><small>2 to 3 times daily, same idea</small>", "Nitrate-free interval<br><small>10-12 h, usually overnight</small>"] },
          html: "<p>Long-acting nitrates are <strong>second-line</strong> when angina isn't controlled with a beta blocker. They <strong>prevent</strong> attacks; they don't relieve one.</p>" +
            "<p>Tolerance can start within <strong>24 to 48 hours</strong> of continuous use, so schedule a <strong>daily nitrate-free gap</strong>.</p>" },
        { title: "IV nitro, cautions, and a trap", fig: { type: "tiles", items: [["💧", "IV NTG", "persistent pain; titratable; marginal BP; HTN emergency with pulmonary edema"], ["🚪", "Obstructive HCM", "less preload worsens obstruction"], ["⚠️", "Severe AS", "caution: hypotension"], ["🍽️", "Esophageal spasm", "also relieved by nitro!"]] },
          html: "<p>Relief with nitro <strong>doesn't prove</strong> the pain is cardiac: nitrates relax <strong>esophageal spasm</strong> too.</p>" +
            "<p>Monitor BP, HR, dizziness, angina and how often SL nitro is used. New, worse, longer or rest symptoms need urgent evaluation.</p>" }
      ],
      remember: ["IV: 1-2 min onset, lasts 3-5 min. SL: 1-3 min, 30-60 min. Long-acting: ISDN, ISMN, patch.", "Long-acting nitrate = second-line after BB; prevention, not relief.", "ISMN ER daily or IR 8 am + 3 pm; ISDN 2-3×/day; 10-12 h nitrate-free interval.", "Tolerance within 24-48 h of continuous use.", "Caution: obstructive HCM, severe AS, volume depletion. Nitro relieves esophageal spasm too."],
      check: [
        Q("Why is immediate-release isosorbide mononitrate given at 8 am and 3 pm?", "To leave a nitrate-free interval overnight", ["To match meals", "Because it lasts 24 hours", "To prevent headaches only"], "The gap prevents nitrate tolerance."),
        Q("How long a daily nitrate-free interval is needed?", "10 to 12 hours", ["1 hour", "24 hours", "None"], "A 10 to 12 hour gap minimizes tolerance."),
        Q("Substernal pain relieved by nitro proves it's cardiac. True?", "No, esophageal spasm also responds", ["Yes, always", "Only in women", "Only if relieved in 1 minute"], "Nitrates relax esophageal smooth muscle too.")
      ],
      bank: [
        Q("Nitrates in obstructive hypertrophic cardiomyopathy may:", "Worsen outflow obstruction", ["Cure the obstruction", "Raise preload", "Have no effect"], "Lower preload shrinks the LV cavity and worsens obstruction.")
      ] },

    { id: "bb-acs", title: "Beta blockers in ACS", goal: "Oral cardioselective within 24 h, target HR 55-70 with SBP over 90; long term depends on EF.",
      pages: [
        { title: "What they do in ACS", fig: { type: "tiles", items: [["🎯", "Smaller infarct", "better perfusion"], ["🔁", "Less reinfarction", ""], ["⚡", "Fewer lethal arrhythmias", "less sudden death"], ["📉", "Lower mortality", "when continued long term"]] },
          html: "<p>Give an <strong>oral cardioselective</strong> beta blocker (metoprolol, atenolol) <strong>within the first 24 hours</strong>. No benefit from giving it before PCI as long as it starts within 24 h.</p>" },
        { title: "Titrate, and when to hold", fig: { type: "vs", a: ["Target", "good", ["HR 55-70 bpm", "Keep SBP &gt; 90"]], b: ["Hold if", "bad", ["Decompensated HF", "HR &lt; 55", "SBP &lt; 90, shock", "2nd/3rd degree block", "Active asthma, wheezing"]] },
          html: "<p>Reassess once the patient is stable.</p>" },
        { title: "Long term: look at the EF", fig: { type: "vs", a: ["EF &lt; 50% or HF", "ok", ["Continue unless contraindicated", "metoprolol SUCCINATE, carvedilol or bisoprolol"]], b: ["Preserved EF, uncomplicated", "mid", ["Lifelong therapy hasn't shown clear benefit", "Reassess over time"]] },
          html: mn("The HF beta blockers: \"Make Cardio Better\": metoprolol succinate, carvedilol, bisoprolol.") + std("The mnemonic is standard teaching.") }
      ],
      remember: ["BB in ACS: smaller infarct, less reinfarction, fewer lethal arrhythmias, lower mortality.", "Oral cardioselective within 24 h; no benefit giving it pre-PCI.", "Goal HR 55-70 with SBP &gt; 90.", "Hold: decompensated HF, HR &lt; 55, SBP &lt; 90/shock, 2nd/3rd block, active bronchospasm.", "EF &lt; 50%: metoprolol succinate, carvedilol, bisoprolol long term. Preserved EF: reassess."],
      check: [
        Q("What heart rate goal is used when titrating a beta blocker after ACS?", "55 to 70 bpm", ["40 to 50 bpm", "80 to 100 bpm", "Under 40 bpm"], "Titrate to 55 to 70 while keeping SBP above 90."),
        Q("ACS patient with HR 50 and BP 86/50. Beta blocker?", "Hold it", ["Give IV metoprolol", "Double the dose", "Switch to propranolol"], "HR under 55 and SBP under 90 are contraindications."),
        Q("Post-MI with EF 35%. Which beta blocker fits long term?", "Metoprolol succinate", ["Atenolol", "Propranolol", "Labetalol"], "Guideline options for EF under 50% are metoprolol succinate, carvedilol or bisoprolol.")
      ],
      bank: [
        Q("Is giving the beta blocker before PCI better than starting it after?", "No benefit, as long as it starts within 24 hours", ["Yes, always give it first", "It must wait 1 week", "It's never given in ACS"], "The deck says no apparent benefit to giving it pre-PCI.")
      ] },

    { id: "ccb-ranolazine", title: "CCB side effects and ranolazine", goal: "DHPs swell ankles; non-DHPs slow the heart and constipate; ranolazine is an add-on that can lengthen the QT.",
      pages: [
        { title: "CCB side effects", fig: { type: "vs", a: ["DHP (amlodipine, nifedipine)", "blue", ["Ankle edema", "Headache, flushing", "Reflex tachycardia (short-acting nifedipine)"]], b: ["Non-DHP (verapamil, diltiazem)", "ok", ["Bradycardia, AV block", "Hypotension, dizziness, fatigue", "Worse HF if EF is low", "Constipation (verapamil)"]] },
          html: mn("Verapamil = Very constipated.") },
        { title: "Ranolazine", fig: { type: "flow", steps: ["Blocks the <strong>late sodium current</strong>", "less Na⁺ inside", "less Ca²⁺ influx", "less wall tension, less O₂ demand", "<strong>no change in HR or BP</strong>"] },
          html: "<p>An <strong>add-on</strong> when symptoms persist on a BB, CCB or long-acting nitrate. Start <strong>500 mg ER twice daily</strong>, up to <strong>1,000 mg twice daily</strong>.</p>" +
            "<p>Side effects: constipation, headache, nausea, dizziness, <strong>QT prolongation</strong>. <strong>Contraindicated in cirrhosis</strong> (heavy liver metabolism); watch kidney function.</p>" +
            hy("Ranolazine is the antianginal for a patient whose BP or HR is too low for more of the others.") }
      ],
      remember: ["DHP: edema, headache, flushing, reflex tachycardia (nifedipine).", "Non-DHP: brady, AV block, hypotension, worse HFrEF, constipation (verapamil).", "Ranolazine: late Na⁺ block → less Ca²⁺; no HR/BP effect; add-on.", "500 mg ER BID → 1,000 mg BID. AEs: constipation, headache, nausea, dizziness, QT ↑. CI: cirrhosis."],
      check: [
        Q("Amlodipine's most typical side effect is:", "Ankle edema", ["Bradycardia", "Constipation", "Bronchospasm"], "DHPs dilate arterioles and cause peripheral edema."),
        Q("Which antianginal does NOT change heart rate or blood pressure?", "Ranolazine", ["Metoprolol", "Diltiazem", "Isosorbide mononitrate"], "Ranolazine works on the late sodium current."),
        Q("Ranolazine is contraindicated in:", "Liver cirrhosis", ["Asthma", "Gout", "Hypertension"], "It's extensively metabolized by the liver.")
      ],
      bank: [
        Q("Which ECG change can ranolazine cause?", "QT prolongation", ["ST elevation", "Delta waves", "Short PR"], "Ranolazine prolongs the ventricular action potential.")
      ] },

    { id: "p2y12", title: "Clopidogrel, prasugrel, ticagrelor", goal: "Know each one's load, maintenance and signature problem: TTP, no stroke history, dyspnea.",
      pages: [
        { title: "Side by side", fig: { type: "grid", cols: ["", "Clopidogrel", "Prasugrel", "Ticagrelor"], rows: [["Load", "300-600 mg", "60 mg (PCI planned)", "180 mg"], ["Daily", "75 mg", "10 mg (5 mg if &lt; 60 kg)", "90 mg twice daily"], ["Used for", "ACS, CAD, stroke, PAD", "ACS going to PCI", "ACS, PCI or medical"], ["Watch for", "TTP (rare)", "bleeding; CI if stroke/TIA; avoid ≥ 75; TTP", "bleeding, dyspnea, ↑ uric acid"]] },
          html: "<p>Bleeding is the main risk for all of them.</p>" },
        { title: "Ticagrelor's quirks", fig: { type: "tiles", items: [["😮‍💨", "Dyspnea", "usually mild; rule out HF/ischemia first"], ["🦶", "↑ Uric acid", "careful with gout"], ["💊", "Aspirin ≤ 100 mg", "higher doses reduce ticagrelor's effect"], ["🥄", "Can be crushed", "mixed with water"]] },
          html: mn("Prasugrel: no Past stroke, no Pensioners (≥ 75), Petite → 5 mg.") + std("The mnemonic is standard teaching.") }
      ],
      remember: ["Clopidogrel: load 300-600, 75 daily; rare TTP; also stroke and PAD.", "Prasugrel: load 60, 10 daily (5 if &lt; 60 kg); PCI only; CI prior stroke/TIA; avoid ≥ 75.", "Ticagrelor: load 180, 90 BID; dyspnea, hyperuricemia; keep aspirin ≤ 100 mg.", "Bleeding is the main risk for all."],
      check: [
        Q("ACS patient with a prior TIA is going to PCI. Which P2Y12 inhibitor is contraindicated?", "Prasugrel", ["Clopidogrel", "Ticagrelor", "None of them"], "Prasugrel is contraindicated with a history of stroke or TIA."),
        Q("On ticagrelor, what aspirin dose should be used?", "75 to 100 mg (usually 81 mg)", ["325 mg daily", "650 mg twice daily", "No aspirin ever"], "Aspirin above 100 mg a day may reduce ticagrelor's effect."),
        Q("A patient on ticagrelor reports new mild shortness of breath. First step?", "Evaluate for HF or ischemia before blaming the drug", ["Stop all antiplatelets", "Double the dose", "Start prasugrel immediately"], "Dyspnea is a known effect, but other causes must be excluded first.")
      ],
      bank: [
        Q("Which rare, serious reaction is linked to clopidogrel and prasugrel?", "Thrombotic thrombocytopenic purpura", ["Agranulocytosis", "Angioedema", "Lupus"], "TTP is a rare adverse effect needing urgent treatment.")
      ] },

    { id: "acei-pain", title: "ACE inhibitors and pain control", goal: "ACEi within 24 h for high-risk ACS; opioids only for refractory pain; avoid NSAIDs.",
      pages: [
        { title: "ACE inhibitor or ARB", fig: { type: "tiles", items: [["💔", "LVEF ≤ 40%", ""], ["💧", "Heart failure", ""], ["🩺", "Hypertension", ""], ["🍬", "Diabetes", ""], ["🫀", "Anterior STEMI", ""]] },
          html: "<p>For ACS with <strong>any</strong> of these, give an oral <strong>ACE inhibitor</strong> (ARB if intolerant), usually <strong>within 24 hours</strong>. It lowers mortality and recurrent events; modest benefit even in lower-risk MI.</p>" +
            "<p>Monitor <strong>BP, creatinine and potassium</strong>. <strong>Never combine ACEi + ARB.</strong></p>" },
        { title: "Opioids: last resort", fig: { type: "vs", a: ["When", "ok", ["Severe pain despite max anti-ischemic therapy", "IV morphine or fentanyl", "Not to mask ongoing ischemia"]], b: ["Problems", "bad", ["Hypotension, respiratory depression, nausea, sedation", "Slow gastric emptying → delays oral P2Y12", "Itching ≠ allergy (histamine)", "Reversal: naloxone 0.4 mg IV"]] },
          html: "<p><strong>Avoid non-aspirin NSAIDs</strong> (ibuprofen, diclofenac): more cardiovascular events, no role in ACS pain.</p>" }
      ],
      remember: ["ACEi (ARB if intolerant) within 24 h for EF ≤ 40%, HF, HTN, DM, anterior STEMI.", "Monitor BP, creatinine, K⁺; never ACEi + ARB.", "Opioids only for refractory severe pain; they delay oral P2Y12 absorption.", "Naloxone 0.4 mg IV reverses; itching isn't always allergy.", "Avoid NSAIDs other than aspirin."],
      check: [
        Q("Which ACS patient most clearly needs an ACE inhibitor?", "Anterior STEMI with EF 35%", ["Unstable angina, EF 65%, no HTN or DM", "Pericarditis", "Vasospastic angina only"], "EF ≤ 40% and anterior STEMI are high-risk features."),
        Q("Why are opioids used sparingly in ACS?", "They can delay oral P2Y12 inhibitor effect", ["They raise troponin", "They cause ST elevation", "They block aspirin"], "Opioids slow gastric emptying and delay oral antiplatelets."),
        Q("What should you check after starting an ACE inhibitor?", "BP, creatinine and potassium", ["Uric acid only", "INR", "TSH"], "ACE inhibitors can lower BP, raise creatinine and raise potassium.")
      ],
      bank: [
        Q("Morphine reversal agent and dose?", "Naloxone 0.4 mg IV", ["Flumazenil 0.2 mg IV", "Protamine 50 mg IV", "Atropine 1 mg IV"], "Naloxone reverses opioids.")
      ] },

    { id: "anticoag-lytics", title: "Heparins and alteplase", goal: "UFH drip when cath is planned, enoxaparin when it isn't; alteplase only for STEMI without PCI, then anticoagulate 48 h to 8 days.",
      pages: [
        { title: "Which heparin?", fig: { type: "vs", a: ["UFH drip", "blue", ["Titrated to PTT or anti-Xa", "Preferred when LHC is planned (STEMI or NSTEMI)"]], b: ["Enoxaparin", "ok", ["1 mg/kg SQ every 12 h", "Only if no LHC is anticipated"]] },
          html: "<p>Start as soon as the MI is identified in the ER. Anticoagulation prevents <strong>clot propagation and recurrent thrombosis</strong>.</p>" },
        { title: "Alteplase (tPA)", fig: { type: "flow", steps: ["Alteplase", "activates plasminogen → <strong>plasmin</strong>", "plasmin breaks down <strong>fibrin</strong>", "the clot dissolves"] },
          html: "<p>Limits infarct size, improves LV function and lowers mortality, but it's <strong>far inferior to PCI</strong>. Used <strong>only for STEMI</strong>, within <strong>12 hours</strong>, when an invasive strategy isn't an option.</p>" +
            "<p>Afterward: <strong>UFH, LMWH or fondaparinux for at least 48 hours, up to 8 days</strong>, so small new clots don't form as the big one dissolves.</p>" }
      ],
      remember: ["UFH drip (PTT/anti-Xa) when cath planned; enoxaparin 1 mg/kg SQ q12 h if no cath.", "Start in the ER as soon as MI is identified.", "Alteplase: plasminogen → plasmin → fibrin breakdown; STEMI only, ≤ 12 h, no PCI option; inferior to PCI.", "After lytics: UFH/LMWH/fondaparinux ≥ 48 h, up to 8 days."],
      check: [
        Q("How does alteplase work?", "It converts plasminogen to plasmin, which breaks down fibrin", ["It blocks COX-1", "It blocks the P2Y12 receptor", "It inhibits factor Xa only"], "Plasmin digests the fibrin mesh."),
        Q("Is alteplase used for NSTEMI?", "No, only for STEMI", ["Yes, first-line", "Only with ST depression", "Only in women"], "The deck says alteplase is only used for STEMI."),
        Q("After fibrinolysis, how long is anticoagulation continued?", "At least 48 hours, up to 8 days", ["No anticoagulation", "1 hour", "Lifelong"], "It prevents new small clots while the clot is lysed.")
      ],
      bank: [
        Q("NSTEMI with cath planned tomorrow. Which anticoagulant?", "Unfractionated heparin drip", ["Enoxaparin", "Alteplase", "Warfarin"], "UFH is preferred when LHC is planned.")
      ] },

    { id: "strategy", title: "Strategy, PCI prep and final points", goal: "Don't delay reperfusion for meds; protect the kidneys before contrast; correct K⁺ and Mg²⁺; statin for everyone.",
      pages: [
        { title: "Invasive or selective?", fig: { type: "vs", a: ["Invasive / STEMI", "bad", ["Call (interventional) cardiology promptly", "Aspirin + antithrombotics per pathway", "Don't delay angiography for pain relief or meds", "STEMI: activate the cath lab"]], b: ["Selective (medical first)", "good", ["Anti-ischemic + antithrombotic drugs", "Watch symptoms, EKG, hemodynamics", "Echo when indicated", "Cath if symptoms recur or unstable"]] },
          html: "<p>Decide on overall risk and context, <strong>not a single score</strong>. Tie <strong>NPO status</strong> to planned procedures.</p>" },
        { title: "Before the contrast", fig: { type: "tiles", items: [["🤧", "Contrast reaction risk", "pretreat with steroid or antihistamine"], ["💧", "Pre-hydrate", "IV normal saline"], ["💊", "N-acetylcysteine", "PO BID × 4 doses (consider)"], ["⏸️", "Hold metformin", "48 h before and after"], ["🚫", "Hold nephrotoxins", ""]] },
          html: "<p>PCI is for STEMI (door to PCI &lt; 90 min) and high-risk NSTEMI, at a PCI-capable facility.</p>" },
        { title: "Last three rules", fig: { type: "tiles", items: [["🚫", "No prophylactic antiarrhythmics", "no lidocaine to prevent VT/VF"], ["🧂", "Fix K⁺ and Mg²⁺", "fewer arrhythmias"], ["🧪", "High-intensity statin", "every ACS patient, whatever the LDL"]] },
          html: "<p>Prophylactic antiarrhythmics don't prevent deaths; fixing electrolytes does lower arrhythmia risk. And every ACS patient leaves on a high-intensity statin.</p>" }
      ],
      remember: ["Choose invasive vs selective by overall risk, not one score; NPO tied to procedures.", "Never delay angiography/reperfusion for pain relief or meds.", "Before contrast: steroid/antihistamine if reaction risk; NS pre-hydration; consider NAC; hold metformin 48 h; hold nephrotoxins.", "No prophylactic lidocaine; correct hypokalemia and hypomagnesemia; high-intensity statin regardless of LDL."],
      check: [
        Q("How long is metformin held around a cath?", "48 hours before and after", ["Not at all", "2 hours before only", "2 weeks after"], "Holding metformin protects against contrast-related kidney problems."),
        Q("An ACS patient's LDL is 62. High-intensity statin?", "Yes, regardless of baseline LDL", ["No, LDL is already low", "Only if LDL > 190", "Only after 1 year"], "The deck says start high-intensity statin in ACS regardless of LDL."),
        Q("A STEMI patient still has pain while nitro is being titrated. Wait for relief before the cath lab?", "No, don't delay reperfusion", ["Yes, pain must resolve first", "Yes, finish all medications first", "Only after troponin peaks"], "Angiography and reperfusion shouldn't wait for pain relief or medications.")
      ],
      bank: [
        Q("Which electrolytes should be corrected in ACS to reduce arrhythmias?", "Potassium and magnesium", ["Sodium and chloride", "Calcium and phosphate", "Bicarbonate only"], "Hypokalemia and hypomagnesemia raise arrhythmia risk.")
      ] }
  ] };

  /* =============================== TIER 3 · THE WEEDS =============================== */
  T.units["t3|cad-part-5"] = { chunks: [
    { id: "causes", title: "What tips the balance", goal: "Non-cardiac and cardiac causes of more demand or less supply, and the textbook angina features.",
      pages: [
        { title: "More demand, less supply", fig: { type: "grid", cols: ["", "Non-cardiac", "Cardiac"], rows: [["↑ Demand", "fever, hyperthyroidism, meth/cocaine, HTN, anxiety, albuterol", "tachycardia, HCM, aortic stenosis, ↑ contractility"], ["↓ Supply", "anemia, hypoxemia, sickle cell, sympathomimetics, polycythemia, severe dehydration", "CAD, aortic stenosis, HCM"]] },
          html: "<p>Notice <strong>aortic stenosis and HCM</strong> are on both sides: they raise demand and lower supply.</p>" },
        { title: "The angina features table", fig: { type: "grid", cols: ["", "Typical angina"], rows: [["Quality", "pressure, heavy weight, burning, tightness, SOB; deep, gradual"], ["Radiation", "left arm, left shoulder, jaw, right arm, back"], ["Duration", "<strong>2 to 30 minutes</strong>"], ["Triggers", "exertion, cold, fright, anger, sex"], ["NTG relief", "<strong>45 seconds to 5 minutes</strong>"]] },
          html: "<p>Classic angina builds gradually, lasts minutes, and melts with nitro within 5 minutes.</p>" }
      ],
      remember: ["↑ Demand: fever, hyperthyroid, stimulants, HTN, anxiety, albuterol; tachycardia, HCM, AS, ↑ contractility.", "↓ Supply: anemia, hypoxemia, sickle cell, stimulants, hyperviscosity; CAD, AS, HCM.", "AS and HCM affect both sides.", "Angina lasts 2 to 30 min; NTG relief in 45 s to 5 min; triggers include cold, fright, anger, sex."],
      check: [
        Q("Which raises myocardial oxygen demand?", "Hyperthyroidism", ["Anemia", "Hypoxemia", "Sickle cell disease"], "Hyperthyroidism speeds the heart; the others reduce supply."),
        Q("Which conditions both raise demand and lower supply?", "Aortic stenosis and HCM", ["Anemia and hypoxemia", "Fever and anxiety", "Polycythemia and dehydration"], "They appear on both sides of the deck's table."),
        Q("How quickly does nitroglycerin relieve typical angina?", "Within 45 seconds to 5 minutes", ["Within 1 hour", "After 30 minutes", "It doesn't"], "The deck's table gives 45 seconds to 5 minutes.")
      ],
      bank: [
        Q("How long does a typical angina episode last per the pharm deck?", "2 to 30 minutes", ["Under 10 seconds", "Several hours", "All day"], "The table lists 2 to 30 minutes.")
      ] },

    { id: "risk-mod", title: "Risk factor targets (pharm deck version)", goal: "BP under 130/80, high-intensity statin, 150 minutes a week, A1c about 7%, no alcohol for heart benefit.",
      pages: [
        { title: "The list", fig: { type: "tiles", items: [["🚭", "Tobacco", "assess, advise, support + meds; avoid secondhand smoke"], ["🩺", "BP &lt; 130/80", "for many CAD patients"], ["🧪", "High-intensity statin", "reassess LDL response"], ["🏃", "≥ 150 min/week", "moderate activity as tolerated"], ["⚖️", "Weight", "BMI is one measure, not a universal target"], ["🍬", "A1c ~7%", "individualized"], ["🍷", "Alcohol", "not recommended for CV benefit"]] },
          html: "<p>The pharm deck's risk factor list mostly matches CAD II, with softer wording: goals are individualized to the patient.</p>" }
      ],
      remember: ["Smoking: assess, advise, behavioral + drug support.", "BP &lt; 130/80 for many; high-intensity statin, recheck LDL.", "≥ 150 min/week moderate activity.", "A1c around 7%, individualized; BMI isn't a universal target.", "Don't recommend alcohol for heart benefit."],
      check: [
        Q("How much weekly activity does the deck recommend?", "At least 150 minutes of moderate intensity", ["30 minutes total", "300 minutes of vigorous only", "None until cleared by cath"], "Aim for at least 150 minutes a week as tolerated."),
        Q("A patient asks if a glass of wine a day protects the heart. Per the deck?", "Don't recommend alcohol for cardiovascular benefit", ["Yes, prescribe it", "Only red wine", "Only for diabetics"], "The deck says not to recommend alcohol for CV benefit."),
        Q("What A1c goal is reasonable for many nonpregnant adults with CAD?", "About 7%, individualized", ["Under 5%", "Under 9%", "No goal"], "Around 7% is reasonable, adjusted to the patient.")
      ],
      bank: [
        Q("What BP goal fits many CAD patients?", "Below 130/80", ["Below 160/100", "Below 110/70 for all", "No goal"], "The deck gives below 130/80, individualized.")
      ] },

    { id: "nitrate-numbers", title: "Nitrate numbers", goal: "Onset, duration and starting dose for each nitrate.",
      pages: [
        { title: "The table", fig: { type: "grid", cols: ["Form", "Onset", "Lasts", "Start dose", "For"], rows: [["IV NTG", "1-2 min", "3-5 min", "5-10 mcg/min", "acute CP, HTN"], ["SL NTG", "1-3 min", "30-60 min", "0.4 mg PRN", "acute CP"], ["Isosorbide dinitrate", "20-40 min", "4-6 h", "10-20 mg TID", "stable angina"], ["NTG patch", "40-60 min", "&gt; 8 h", "1 patch", "stable angina"], ["Isosorbide mononitrate", "30-60 min", "6-8 h", "30 mg daily", "stable angina"]] },
          html: "<p>The ACS guideline table: SL <strong>0.3 or 0.4 mg</strong> q5 min up to 3 if SBP ≥ 90. IV starts at <strong>10 mcg/min</strong>; avoid with suspected RV infarct, SBP &lt; 90 or a <strong>drop &gt; 30 below baseline</strong>; tachyphylaxis after about <strong>24 h</strong>.</p>" }
      ],
      remember: ["IV NTG: 1-2 min onset, 3-5 min duration, 5-10 mcg/min (ACS table: start 10).", "SL: 1-3 min, 30-60 min, 0.4 mg PRN (0.3 or 0.4, SBP ≥ 90).", "ISDN 20-40 min, 4-6 h, 10-20 mg TID. Patch 40-60 min, &gt; 8 h. ISMN 30-60 min, 6-8 h, 30 mg daily.", "IV NTG: avoid RV infarct, SBP &lt; 90 or drop &gt; 30; tachyphylaxis ~24 h."],
      check: [
        Q("Which nitrate lasts the longest?", "NTG patch", ["SL nitroglycerin", "IV nitroglycerin", "Isosorbide dinitrate"], "The patch lasts more than 8 hours."),
        Q("What's the usual starting dose of isosorbide mononitrate?", "30 mg daily", ["0.4 mg PRN", "5 mg TID", "100 mg BID"], "The deck's table lists 30 mg daily."),
        Q("IV nitro should be avoided if systolic BP falls more than how much below baseline?", "30 mmHg", ["5 mmHg", "60 mmHg", "100 mmHg"], "The ACS table says avoid with a drop over 30 mmHg.")
      ],
      bank: [
        Q("How fast does SL nitroglycerin start working?", "1 to 3 minutes", ["20 to 40 minutes", "1 hour", "4 hours"], "SL onset is 1 to 3 minutes.")
      ] },

    { id: "ranolazine-ddi", title: "Ranolazine interactions", goal: "Ranolazine raises digoxin, caps simvastatin at 20 mg, and is limited to 500 mg BID with diltiazem, verapamil, grapefruit or fluconazole.",
      pages: [
        { title: "Who changes the dose", fig: { type: "grid", cols: ["With", "Do this"], rows: [["Digoxin", "levels rise: monitor and adjust"], ["Simvastatin", "max <strong>20 mg/day</strong>"], ["Diltiazem / verapamil", "ranolazine max <strong>500 mg BID</strong>"], ["Grapefruit juice / fluconazole", "ranolazine max <strong>500 mg BID</strong>"], ["Strong CYP3A inhibitors (ketoconazole, itraconazole, clarithromycin)", "<strong>avoid</strong>"]], hiCol: 1 },
          html: "<p>Also monitor kidney function with moderate to severe renal impairment.</p>" }
      ],
      remember: ["Digoxin ↑: monitor.", "Simvastatin max 20 mg.", "Diltiazem, verapamil, grapefruit, fluconazole → ranolazine max 500 mg BID.", "Avoid strong CYP3A inhibitors (ketoconazole, itraconazole, clarithromycin)."],
      check: [
        Q("A patient on diltiazem starts ranolazine. Maximum ranolazine dose?", "500 mg twice daily", ["1,000 mg twice daily", "2,000 mg daily", "It's contraindicated"], "Diltiazem raises ranolazine levels, so it's capped at 500 mg BID."),
        Q("On ranolazine, the maximum simvastatin dose is:", "20 mg/day", ["80 mg/day", "40 mg/day", "No limit"], "The deck caps simvastatin at 20 mg."),
        Q("Which drug should be avoided with ranolazine?", "Clarithromycin", ["Amlodipine", "Aspirin", "Metoprolol"], "Strong CYP3A inhibitors like clarithromycin are avoided.")
      ],
      bank: [
        Q("Ranolazine raises the level of which heart drug?", "Digoxin", ["Warfarin", "Atenolol", "Furosemide"], "Monitor and adjust digoxin.")
      ] },

    { id: "doses", title: "Opioid and aspirin details", goal: "Morphine 2-4 mg, fentanyl 25-50 mcg; aspirin comes in 81, 162, 325, 500 and a 300 mg suppository.",
      pages: [
        { title: "Opioid doses (refractory pain only)", fig: { type: "grid", cols: ["Drug", "Dose"], rows: [["Morphine IV", "2-4 mg, repeat every 5-15 min; up to 10 mg"], ["Fentanyl IV", "25-50 mcg, repeat; up to 100 mcg"], ["Naloxone", "0.4 mg IV push to reverse"]] },
          html: "<p>Monitor pain, BP, RR and sedation.</p>" },
        { title: "Aspirin forms", fig: { type: "tiles", items: [["💊", "81 mg", "daily maintenance"], ["💊", "162 mg", ""], ["💊", "325 mg", "loading"], ["💊", "500 mg", ""], ["🕯️", "300 mg suppository", "rectal"]] },
          html: "<p>Ticagrelor tablets can be <strong>crushed and mixed with water</strong> for patients who can't swallow.</p>" }
      ],
      remember: ["Morphine 2-4 mg IV q5-15 min, up to 10 mg. Fentanyl 25-50 mcg, up to 100 mcg.", "Naloxone 0.4 mg IV.", "Aspirin: 81, 162, 325, 500 mg tabs; 300 mg rectal suppository.", "Ticagrelor can be crushed in water."],
      check: [
        Q("Typical IV morphine dose for refractory ACS pain?", "2 to 4 mg", ["20 to 40 mg", "0.4 mg", "100 mg"], "The ACS table gives 2 to 4 mg, repeated as needed."),
        Q("Which aspirin form helps a patient who can't swallow?", "300 mg rectal suppository", ["Enteric-coated 81 mg", "500 mg capsule only", "None exists"], "Aspirin comes as a 300 mg suppository."),
        Q("Typical IV fentanyl dose for refractory ACS pain?", "25 to 50 mcg", ["250 to 500 mcg", "2 to 4 mg", "1 mcg"], "The table gives 25 to 50 mcg, up to 100.")
      ],
      bank: [
        Q("Can ticagrelor be given to a patient who can't swallow pills?", "Yes, crushed and mixed with water", ["No, never", "Only IV", "Only rectally"], "The deck says the tablets may be crushed.")
      ] }
  ] };
})();
