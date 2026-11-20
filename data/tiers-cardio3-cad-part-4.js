/* Cardio Part 3 Tiers: CAD Part IV (Stager's ACS management, complications and secondary prevention deck), all three tiers, story format.
   Same shape and rules as data/tiers-cardio3-cad-part-1.js. Facts follow source-material/cardio-part-3/text/cad-part-4.md;
   anything not on the slides is marked "(standard teaching)". The Don cases have no answer slide; answers apply the deck rules.
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
  T.units["t1|cad-part-4"] = { chunks: [
    { id: "words", title: "Ischemia, injury, infarction", goal: "Ischemia is low oxygen, injury is troponin, infarction is both: and the clot's size decides UA, NSTEMI or STEMI.",
      pages: [
        { title: "Three words that build on each other", fig: { type: "ladder", steps: [["Ischemia", "not enough O₂ for demand · ST depression, T inversion", "ok"], ["Injury", "muscle damage · troponin up", "bad"], ["Infarction", "irreversible · needs injury AND ischemia · ST elevation, Q waves", "worst"]] },
          html: "<p><strong>Ischemia</strong>: oxygen supply can't meet demand. It can show <strong>ST depression or T wave inversion</strong>.</p>" +
            "<p><strong>Injury</strong>: muscle damage, measured as an <strong>elevated troponin</strong>.</p>" +
            "<p><strong>Infarction</strong>: irreversible injury. It needs <strong>acute injury AND acute ischemia</strong>; suggested by <strong>ST elevation and Q waves</strong>.</p>" +
            hy("Troponin alone isn't an MI. Troponin + ischemia is.") },
        { title: "How big is the clot?", fig: { type: "acs" },
          html: "<p><strong>Unstable angina</strong>: <strong>subtotal</strong> occlusion; rest pain, maybe ST depression or TWI, <strong>negative</strong> hs-troponin.</p>" +
            "<p><strong>NSTEMI</strong>: a <strong>subendocardial</strong> infarction; rest pain, <strong>positive</strong> troponin, no ST elevation.</p>" +
            "<p><strong>STEMI</strong>: a <strong>complete</strong> occlusion; rest pain, <strong>ST elevation</strong>, positive troponin. It used to be called <strong>transmural</strong> or Q-wave MI.</p>" },
        { title: "Inside the wall", fig: { type: "vs", a: ["NSTEMI", "ok", ["Partial occlusion", "Inner layer dies (subendocardial)", "ST depression or TWI"]], b: ["STEMI", "bad", ["Complete occlusion", "Full thickness (transmural)", "ST elevation"]] },
          html: pic("The subendocardium is the last place blood reaches, so it dies first. A STEMI goes all the way through.") }
      ],
      remember: ["Ischemia: O₂ supply &lt; demand (ST depression, TWI).", "Injury: troponin up. Infarction: injury + ischemia (ST elevation, Q waves), irreversible.", "UA: subtotal occlusion, negative troponin.", "NSTEMI: subendocardial, positive troponin, no ST elevation.", "STEMI: complete occlusion, transmural, ST elevation + positive troponin."],
      check: [
        Q("What two things are required to call it a myocardial infarction?", "Acute myocardial injury and acute ischemia", ["Troponin rise alone", "ST depression alone", "Chest pain and a murmur"], "MI needs troponin-proven injury plus evidence of ischemia."),
        Q("Which ACS is caused by a complete coronary occlusion?", "STEMI", ["Unstable angina", "NSTEMI", "Stable angina"], "A complete occlusion produces transmural injury and ST elevation."),
        Q("An NSTEMI damages which layer?", "The subendocardium", ["The epicardium only", "The pericardium", "The valves"], "NSTEMI is a subendocardial infarction.")
      ],
      bank: [
        Q("Rest chest pain, ST depression, and a negative hs-troponin is:", "Unstable angina", ["NSTEMI", "STEMI", "Myocardial injury"], "No troponin rise means no injury, so it's unstable angina.")
      ] },

    { id: "localize", title: "Where is the MI?", goal: "The leads with ST elevation point to the wall and the artery: anterior LAD, lateral LCx, inferior RCA.",
      pages: [
        { title: "Anterior and septal: the LAD", fig: { type: "leads", hi: ["V1", "V2", "V3", "V4"], label: "Anterior V1-V4 (septal = V1-V2) → LAD" },
          html: "<p><strong>Anterior MI</strong>: ST elevation in <strong>V1 to V4</strong>. <strong>Septal</strong>: <strong>V1 to V2</strong>. Both are the <strong>LAD</strong>.</p>" +
            "<p>No reciprocal changes on a standard 12-lead.</p>" },
        { title: "Lateral: the LCx", fig: { type: "leads", hi: ["I", "aVL", "V5", "V6"], recip: ["II", "III", "aVF"], label: "Lateral I, aVL, V5, V6 → LCx" },
          html: "<p><strong>Lateral MI</strong>: <strong>I, aVL, V5, V6</strong>, with reciprocal ST depression in the <strong>inferior</strong> leads. Artery: <strong>circumflex</strong>.</p>" },
        { title: "Inferior: usually the RCA", fig: { type: "leads", hi: ["II", "III", "aVF"], recip: ["I", "aVL"], label: "Inferior II, III, aVF → RCA (80%) or LCx (20%)" },
          html: "<p><strong>Inferior MI</strong>: <strong>II, III, aVF</strong>, reciprocal in <strong>I and aVL</strong>. Artery: <strong>RCA in 80%</strong>, LCx in 20%.</p>" +
            hy("Every inferior MI gets a <strong>right-sided EKG</strong> to look for RV infarction.") },
        { title: "The whole map", fig: { type: "grid", cols: ["Wall", "ST ↑", "Reciprocal", "Artery"], rows: [["Anterior", "V1-V4", "none", "LAD"], ["Septal", "V1-V2", "none", "LAD"], ["Lateral", "I, aVL, V5, V6", "II, III, aVF", "LCx"], ["Inferior", "II, III, aVF", "I, aVL", "RCA 80% / LCx 20%"], ["Posterior", "V7-V9", "V1-V3", "RCA or LCx"], ["RV", "right-sided V1-V4 (V4R)", "I, aVL", "RCA"]], hiCol: 3 },
          html: mn("Lateral and inferior mirror each other: each one's leads are the other's reciprocal.") }
      ],
      remember: ["Anterior V1-V4 and septal V1-V2 → LAD.", "Lateral I, aVL, V5, V6 → LCx (reciprocal II, III, aVF).", "Inferior II, III, aVF → RCA 80% (reciprocal I, aVL); get a right-sided EKG.", "Posterior V7-V9 (reciprocal V1-V3) → RCA or LCx. RV: right-sided leads, V4R → RCA."],
      check: [
        Q("ST elevation in V1 to V4. Which artery?", "LAD", ["RCA", "LCx", "Left main only"], "Anterior leads V1 to V4 are the LAD's territory."),
        Q("ST elevation in II, III and aVF. Which artery is most likely?", "RCA", ["LAD", "LCx always", "Diagonal branch"], "Inferior MIs come from the RCA about 80% of the time."),
        Q("ST elevation in I, aVL, V5, V6 with ST depression in II, III, aVF is a:", "Lateral MI", ["Inferior MI", "Septal MI", "RV MI"], "Lateral leads elevate and the inferior leads show reciprocal depression.")
      ],
      bank: [
        Q("Which extra EKG should every inferior MI get?", "A right-sided EKG", ["A posterior-only EKG", "A Holter monitor", "A signal-averaged EKG"], "Inferior MIs often involve the RV, which only right-sided leads like V4R show.")
      ] },

    { id: "first-drugs", title: "Don's first hour", goal: "Aspirin and nitro first; a nitro drip for ongoing pain; beta blocker within 24 h; skip morphine and routine oxygen.",
      pages: [
        { title: "Meet Unstable Don", fig: { type: "patient", icon: "🧔", name: "Don, 55", line: "\"has lived hard\" · 60% RCA lesion 3 years ago, treated with metoprolol + ASA", chips: [["Today", "sudden heavy substernal pain at work", "bad"], ["With it", "dyspnea · sweating · nausea", "bad"], ["EMS gave", "ASA 325 + SL nitro", "ok"]] },
          html: "<p>Before any workup, EMS starts treatment: <strong>aspirin 325 mg chewed</strong> for all possible and definite ACS, and <strong>nitroglycerin</strong> for active chest pain.</p>" },
        { title: "Nitro: when NOT to", fig: { type: "tiles", items: [["🫀", "RV infarction", "preload-dependent"], ["🚪", "Severe aortic stenosis", "fixed outflow"], ["💊", "PDE-5 inhibitor &lt; 24 h", "sildenafil for ED or pulmonary HTN"], ["📉", "Hypotension", ""]] },
          html: "<p>Still hurting after 1 to 2 SL nitro? Start a <strong>nitroglycerin drip</strong>, unless hypotensive or RV infarct.</p>" +
            mn("Nitro drops preload. Anyone who NEEDS preload (RV MI, tight AS) or already has low BP crashes.") },
        { title: "Beta blocker, and two things to skip", fig: { type: "vs", a: ["Beta blocker", "good", ["For pain despite nitrates, or STEMI", "NOT with HF, shock risk or bradycardia"]], b: ["Avoid", "bad", ["Morphine: may interfere with antiplatelets; only for severe pain", "Oxygen if SpO₂ ≥ 90%: no benefit, may cause coronary spasm"]] },
          html: "<p>Don arrives sweaty, HR 112, BP 170/92, pain down from 12 to 5 out of 10 after ASA and 2 nitro. Still hurting, so <strong>a nitro drip is hung</strong>.</p>" }
      ],
      remember: ["Aspirin 325 mg chewed for every possible ACS.", "Nitro for active pain; avoid with RV infarct, severe AS, PDE-5 inhibitor within 24 h, hypotension.", "Pain after 1 to 2 SL nitro → nitro drip.", "Beta blocker for pain despite nitro or STEMI; not with HF, shock risk, bradycardia.", "Avoid morphine (blunts antiplatelets) and oxygen unless SpO₂ &lt; 90%."],
      check: [
        Q("A man with chest pain took sildenafil 6 hours ago. Which drug should you avoid?", "Nitroglycerin", ["Aspirin", "Heparin", "Atorvastatin"], "Nitrates with a PDE-5 inhibitor within 24 hours can cause severe hypotension."),
        Q("Why is morphine avoided in ACS unless pain is severe?", "It may interfere with antiplatelet drugs", ["It causes ST elevation", "It raises troponin", "It worsens bradycardia only"], "The deck notes morphine may blunt antiplatelet effect."),
        Q("ACS patient with acute heart failure and bradycardia. Start a beta blocker now?", "No, both are contraindications", ["Yes, IV metoprolol now", "Yes, but double the dose", "Only if troponin is up"], "Beta blockers are avoided with HF, shock risk and bradyarrhythmias.")
      ],
      bank: [
        Q("ACS patient still has chest pain after 2 SL nitro, BP 160/90. Next?", "Start a nitroglycerin drip", ["Give morphine first", "Start oxygen at 15 L", "Stop all nitrates"], "Persistent pain after 1 to 2 SL doses gets a nitro drip if BP allows.")
      ] },

    { id: "nstemi-plan", title: "The UA/NSTEMI plan", goal: "Antianginal, DAPT, anticoagulant, then risk stratify: unstable goes to cath now, TIMI 3+ within 24 to 48 h.",
      pages: [
        { title: "Four steps", fig: { type: "flow", steps: ["Antianginal<br><small>nitro · beta blocker</small>", "DAPT<br><small>aspirin + P2Y12</small>", "Anticoagulant<br><small>heparin or enoxaparin</small>", "Risk stratify<br><small>how soon to cath?</small>"] },
          html: "<p>Every UA/NSTEMI gets the first three drug steps, and <strong>cardiology is consulted from the ER</strong>.</p>" },
        { title: "Heparin or enoxaparin?", fig: { type: "vs", a: ["Unfractionated heparin (UFH)", "blue", ["IV drip", "Titrated to anti-Xa or PTT", "When cath is planned"]], b: ["Enoxaparin (LMWH)", "ok", ["SQ 1 mg/kg twice daily", "When no cath is planned"]] },
          html: "<p>Both stop the clot from growing by preventing more thrombin activation of platelets and clotting factors.</p>" },
        { title: "Who goes to the cath lab NOW", fig: { type: "tiles", items: [["📉", "Cardiogenic shock", ""], ["💧", "Severe LV dysfunction", "or florid HF"], ["🔁", "Rest angina despite nitro + BB", ""], ["🫀", "New MR or new VSD", ""], ["⚡", "Sustained ventricular arrhythmias", ""]] },
          html: "<p>Any of these makes a UA/NSTEMI patient <strong>unstable</strong>: <strong>emergent cath</strong>.</p>" +
            "<p>Stable patients get a <strong>TIMI score</strong>; <strong>3 or more</strong> = higher risk → cath within <strong>24 to 48 hours</strong>.</p>" },
        { title: "Three strategies", fig: { type: "ladder", steps: [["Immediate invasive", "very high risk: shock, instability, refractory pain, life-threatening arrhythmia → emergent cath", "worst"], ["Routine invasive", "intermediate/high risk: cath this admission (early, within 24 h, if high risk), even if symptoms improve", "bad"], ["Selective invasive", "selected low risk: meds first, stress test or CCTA; cath if ischemia or symptoms return", "good"]] },
          html: "<p>Stable patients are admitted to <strong>telemetry</strong> on bedrest, heart-healthy diet, <strong>NPO at midnight</strong> before cath.</p>" }
      ],
      remember: ["UA/NSTEMI: antianginal → DAPT → anticoagulant → risk stratify; cardiology consulted.", "UFH drip if cath planned; enoxaparin 1 mg/kg SQ BID if not.", "Emergent cath: shock, severe LV dysfunction/HF, refractory rest angina, new MR or VSD, sustained VT.", "TIMI ≥ 3 → cath within 24 to 48 h.", "Immediate invasive (very high), routine invasive (intermediate/high), selective invasive (low)."],
      check: [
        Q("NSTEMI patient develops a new holosystolic murmur and sustained VT. Plan?", "Emergent cardiac catheterization", ["Stress test tomorrow", "Selective invasive strategy", "Discharge on DAPT"], "New VSD/MR or sustained ventricular arrhythmias make the patient unstable."),
        Q("Which anticoagulant is used when cath is planned?", "Unfractionated heparin drip", ["Enoxaparin only", "Warfarin", "Alteplase"], "UFH is titratable and used when a cath is planned."),
        Q("A stable NSTEMI patient has a TIMI score of 4. When should they go to cath?", "Within 24 to 48 hours", ["Immediately, within minutes", "Only if a stress test is positive", "In 3 months"], "TIMI 3 or more is higher risk and warrants cath within 24 to 48 hours.")
      ],
      bank: [
        Q("Low-risk NSTEMI, pain free. Which strategy?", "Selective invasive: meds, then stress test or CCTA", ["Immediate invasive", "Thrombolytics", "Emergent CABG"], "Selected low-risk patients start with medical therapy and noninvasive testing.")
      ] },

    { id: "stemi", title: "STEMI: time is muscle", goal: "Open the artery: PCI within 90 minutes (120 with transfer); if that's impossible, lytics within 30 minutes of arrival.",
      pages: [
        { title: "Every minute, more dies", fig: { type: "artery", stage: "occluded", note: "A complete occlusion: necrosis starts in the subendocardium and spreads outward with time." },
          html: "<p>STEMI usually comes from <strong>plaque rupture or erosion with a clot</strong> that fully blocks the artery.</p>" +
            "<p><strong>Time is muscle</strong>: the goal is to <strong>restore perfusion ASAP</strong> to shrink the infarct and save LV function. Paramedics may send the EKG from the field so the cath lab is ready.</p>" },
        { title: "The clocks", fig: { type: "tiles", items: [["📈", "≤ 10 min", "door to EKG"], ["🎈", "≤ 90 min", "first contact to PCI device (PCI hospital)"], ["🚑", "≤ 120 min", "first contact to device with transfer"], ["💉", "≤ 30 min", "door to needle (lytics)"]] },
          html: "<p><strong>Primary PCI is preferred</strong> when it can be done in time: less reinfarction and less intracranial bleeding than lytics.</p>" +
            mn("10 to see it, 90 to balloon it, 120 if you drive it, 30 to needle it.") },
        { title: "When lytics win", fig: { type: "flow", steps: ["Can't get PCI within <strong>120 min</strong>", "Within <strong>12 h</strong> of symptom onset, no contraindications", "Lytics, door to needle ≤ 30 min", "Then transfer to a PCI hospital"] },
          html: "<p>Emergent <strong>CABG</strong> has a substantial mortality risk: it's reserved for patients who fail PCI or lytics.</p>" }
      ],
      remember: ["STEMI = clot completely blocks the artery; time is muscle.", "Door to EKG ≤ 10 min. First contact to PCI ≤ 90 min (≤ 120 with transfer).", "Primary PCI preferred: less reinfarction and less intracranial bleeding.", "Lytics if PCI not possible within 120 min, within 12 h of onset; door to needle ≤ 30 min; then transfer.", "Emergent CABG only after failed PCI or lytics."],
      check: [
        Q("At a PCI-capable hospital, what's the first-contact-to-device goal?", "≤ 90 minutes", ["≤ 30 minutes", "≤ 120 minutes", "≤ 12 hours"], "Direct presentation to a PCI hospital targets 90 minutes."),
        Q("A STEMI patient is 3 hours from a PCI hospital, symptoms began 2 hours ago. Best plan?", "Fibrinolytics within 30 minutes, then transfer", ["Drive 3 hours for PCI first", "Admit and wait for troponins", "Emergent CABG"], "When PCI can't happen within 120 minutes, lytics are given within 12 hours of onset, then the patient is transferred."),
        Q("Why is primary PCI preferred over lytics when available in time?", "Less reinfarction and less intracranial hemorrhage", ["It's cheaper", "It needs no antiplatelets", "It works after 48 hours"], "The deck cites better outcomes with PCI.")
      ],
      bank: [
        Q("Up to how long after symptom onset are lytics generally used?", "12 hours", ["2 hours", "48 hours", "7 days"], "Eligible STEMI patients get lytics generally within 12 hours.")
      ] },

    { id: "secondary", title: "Going home after ACS", goal: "DAPT for 12 months, high-intensity statin, beta blocker, ACEi/ARB, and cardiac rehab.",
      pages: [
        { title: "The core five", fig: { type: "tiles", items: [["💊", "DAPT", "aspirin + P2Y12 for 12 months (if bleeding risk OK)"], ["🧪", "High-intensity statin", "+ nonstatin if more LDL lowering needed"], ["💓", "Beta blocker", "esp. low EF, HF, angina, arrhythmias"], ["🫘", "ACEi or ARB", "esp. EF ≤ 40%, HTN, DM, anterior STEMI"], ["🏃", "Lifestyle + adherence", "diet, activity, take the meds"]] },
          html: "<p>Even on perfect therapy, a CAD patient can have ACS at any time, and many <strong>stop their meds</strong>, which raises the risk.</p>" },
        { title: "Cardiac rehab", fig: { type: "flow", steps: ["Exercise training", "Stress reduction", "Heart-healthy education"] },
          html: "<p>A supervised program after <strong>MI, stent, CABG, valve surgery or HFrEF</strong>. It lowers cardiac and all-cause mortality and improves quality of life.</p>" +
            "<p>Usually <strong>36 sessions over 3 months</strong>. Yet <strong>fewer than 30%</strong> of eligible patients go.</p>" }
      ],
      remember: ["DAPT 12 months after ACS (if not high bleeding risk).", "High-intensity statin; add ezetimibe/nonstatin if needed.", "Beta blocker (low EF, HF, angina, arrhythmia); ACEi/ARB (EF ≤ 40%, HTN, DM, anterior STEMI).", "Cardiac rehab: exercise + stress + education, 36 sessions over 3 months; lowers mortality; &lt; 30% attend."],
      check: [
        Q("After an anterior STEMI with EF 35%, which drug class is especially important?", "ACE inhibitor or ARB", ["Calcium channel blocker", "Nitrate patch", "Fibrate"], "ACEi/ARB is emphasized with EF ≤ 40% and anterior STEMI."),
        Q("How long is DAPT continued after ACS if bleeding risk isn't high?", "12 months", ["1 month", "3 months", "Lifelong"], "The deck says DAPT generally for 12 months after ACS."),
        Q("Which is a proven benefit of cardiac rehab?", "Lower cardiac and all-cause mortality", ["It replaces statins", "It removes the need for DAPT", "It reverses coronary calcium"], "Rehab reduces mortality and morbidity.")
      ],
      bank: [
        Q("About what share of eligible US patients attend cardiac rehab?", "Fewer than 30%", ["About 90%", "About 60%", "Everyone"], "Participation is low despite the benefits.")
      ] }
  ] };

  /* =============================== TIER 2 · STANDARD DETAILS =============================== */
  T.units["t2|cad-part-4"] = { chunks: [
    { id: "mi-types", title: "Types of MI (2026 definition)", goal: "Primary MI is a coronary event; secondary MI is supply/demand from another illness; procedure-related MI comes from PCI or surgery.",
      pages: [
        { title: "Three types, new names", fig: { type: "grid", cols: ["2026 name", "What happens", "Old type"], rows: [["<strong>Primary MI</strong>", "spontaneous coronary event: plaque rupture, dissection, spasm, embolism", "mostly Type 1"], ["<strong>Secondary MI</strong>", "supply-demand mismatch from another illness: severe anemia, hypoxemia, tachyarrhythmia", "Type 2"], ["<strong>Procedure-related</strong>", "complication of PCI or cardiac surgery", "Types 4a/4b/4c and 5"]], hiCol: 0 },
          html: "<p>The <strong>Fifth Universal Definition of MI (2026)</strong> renamed the types. The 2018 Fourth definition used Types 1 to 5.</p>" },
        { title: "Injury or MI? Three septic patients", fig: { type: "grid", cols: ["Scenario", "Ischemia?", "Diagnosis"], rows: [["Sepsis, troponin rising/falling, no ischemic symptoms or findings", "No", "Acute myocardial <strong>injury</strong>"], ["Sepsis + hypotension, chest pressure, dynamic ST depression, rising troponin", "Yes", "<strong>Secondary MI</strong> (Type 2)"], ["Plaque rupture + thrombus, ST elevation", "Yes", "<strong>Primary MI</strong> (Type 1)"]], hiCol: 2 },
          html: hy("A moving troponin without ischemia is <strong>injury</strong>, not an MI.") }
      ],
      remember: ["Primary MI: spontaneous coronary pathology (rupture, dissection, spasm, embolism) ≈ Type 1.", "Secondary MI: supply/demand from another illness (anemia, hypoxemia, tachyarrhythmia) = Type 2.", "Procedure-related: PCI or surgery (Types 4 and 5).", "Troponin rise without ischemia = myocardial injury."],
      check: [
        Q("Severe GI bleed, Hgb 6, chest pressure, ST depression and rising troponin. Which MI type?", "Secondary MI (Type 2)", ["Primary MI (Type 1)", "Procedure-related MI", "Not an MI, just injury"], "Anemia caused a supply-demand mismatch with ischemia, which is a secondary MI."),
        Q("Septic patient with a rising troponin but no ischemic symptoms, EKG or imaging findings:", "Acute myocardial injury", ["Primary MI", "Secondary MI", "STEMI"], "Without evidence of ischemia, a troponin rise is injury, not infarction."),
        Q("Plaque rupture with a coronary clot is which 2026 type?", "Primary MI", ["Secondary MI", "Procedure-related MI", "Type 5"], "Spontaneous coronary pathology is a primary MI.")
      ],
      bank: [
        Q("An MI that happens as a complication of CABG is classified as:", "Procedure-related MI", ["Primary MI", "Secondary MI", "MINOCA"], "MIs from PCI or cardiac surgery are procedure-related.")
      ] },

    { id: "workup", title: "The ACS workup and dosing", goal: "Serial EKGs, labs with coags, BNP and CXR; nitro 0.4 mg q5 min x3, drip to keep SBP over 100.",
      pages: [
        { title: "What gets ordered", fig: { type: "tiles", items: [["📈", "Serial EKGs", "repeat in 20-30 min or sooner"], ["🩸", "CBC, chemistry, PT/INR, PTT", ""], ["💧", "BNP", "for heart failure"], ["🩻", "Chest X-ray", "HF or another cause"], ["🔬", "hs-troponin I", "at arrival and 1-2 h"]] },
          html: "<p>The first EKG may be nondiagnostic: repeat it. With hs-troponin, look at the <strong>delta</strong> between the first and second value; a fast arrival can have a normal first level.</p>" +
            "<p>Remember hs-troponin is detectable in more than half of healthy people, and chronically high in late CKD and ESRD.</p>" },
        { title: "The doses", fig: { type: "grid", cols: ["Drug", "Dose"], rows: [["Nitroglycerin SL", "0.4 mg every 5 min × 3"], ["Nitroglycerin drip", "start 5-10 mcg/min, titrate to relief; keep SBP &gt; 100"], ["Beta blocker", "oral cardioselective within 24 h; IV use limited"], ["Aspirin", "325 mg uncoated, chewed in the ER, then EC 81 mg daily"], ["P2Y12", "prasugrel, ticagrelor or clopidogrel, chosen with cardiology"], ["Enoxaparin", "1 mg/kg SQ twice daily (no cath planned)"]] },
          html: "<p>In stable patients also correct electrolytes and hypoxia and optimize fluid status.</p>" }
      ],
      remember: ["Serial EKGs every 20 to 30 min or sooner; first may be nondiagnostic.", "Labs: CBC, chem, PT/INR, PTT, BNP, CXR, hs-troponin at 0 and 1 to 2 h (look at the delta).", "NTG 0.4 mg SL q5 min × 3; drip 5 to 10 mcg/min, keep SBP &gt; 100.", "Oral cardioselective BB within 24 h. ASA 325 chewed, then EC 81 daily.", "Enoxaparin 1 mg/kg SQ BID if no cath."],
      check: [
        Q("What's the SL nitroglycerin dose in ACS?", "0.4 mg every 5 minutes, up to 3 doses", ["4 mg once", "0.04 mg hourly", "40 mg daily"], "The deck gives 0.4 mg SL every 5 minutes times three."),
        Q("A nitro drip is titrated to relief but keeping systolic BP above:", "100 mmHg", ["80 mmHg", "140 mmHg", "160 mmHg"], "Titrate to symptoms or BP drop, keeping SBP over 100."),
        Q("After the first chewed aspirin, what's the daily aspirin?", "Enteric-coated 81 mg", ["325 mg twice daily", "650 mg daily", "None after the first dose"], "The ER dose is 325 mg chewed, then EC 81 mg daily.")
      ],
      bank: [
        Q("How soon should a repeat EKG be done if the first is nondiagnostic?", "In 20 to 30 minutes or sooner", ["In 24 hours", "At discharge", "Only if troponin rises"], "Serial EKGs catch evolving changes.")
      ] },

    { id: "timi", title: "TIMI and GRACE scores", goal: "TIMI for UA/NSTEMI has 7 one-point items; 3 or more is increased risk.",
      pages: [
        { title: "The TIMI score", fig: { type: "tiles", items: [["🎂", "Age ≥ 65", "1"], ["3️⃣", "≥ 3 CAD risk factors", "1"], ["🩺", "Known CAD ≥ 50% stenosis", "1"], ["💊", "Aspirin in the past 7 days", "1"], ["🔥", "Severe angina in 24 h", "≥ 2 episodes · 1"], ["🔬", "Elevated markers", "1"], ["📉", "ST deviation ≥ 0.5 mm", "1"]] },
          html: "<p><strong>TIMI ≥ 3 = increased risk</strong> → cath within 24 to 48 hours.</p>" +
            mn("\"AMERICA\": Age, Markers, EKG (ST), Risk factors, Ischemia (2 anginal events), CAD known, Aspirin.") +
            std("The AMERICA mnemonic is standard teaching, not from the slides.") },
        { title: "Three scores, three jobs", fig: { type: "grid", cols: ["Score", "For", "Predicts"], rows: [["GRACE 2.0", "any ACS", "in-hospital, 6-month, 1- and 3-year death or death/MI"], ["TIMI UA/NSTEMI", "UA or NSTEMI", "14-day death, MI or urgent revascularization"], ["TIMI STEMI", "STEMI", "30-day death"]] },
          html: "<p>GRACE uses age, <strong>Killip class</strong>, SBP, heart rate, ST deviation, cardiac arrest, creatinine and biomarkers.</p>" }
      ],
      remember: ["TIMI UA/NSTEMI: age ≥ 65, ≥ 3 risk factors, known stenosis ≥ 50%, aspirin in 7 days, ≥ 2 angina episodes in 24 h, + markers, ST deviation ≥ 0.5 mm.", "TIMI ≥ 3 → cath within 24 to 48 h.", "GRACE: any ACS, long-term death or death/MI. TIMI STEMI: 30-day death."],
      check: [
        Q("Which is NOT a TIMI UA/NSTEMI item?", "Heart rate over 100", ["Aspirin use in the past 7 days", "Age 65 or older", "ST deviation ≥ 0.5 mm"], "Heart rate is in GRACE and TIMI STEMI, not TIMI UA/NSTEMI."),
        Q("A TIMI score of 3 means:", "Increased risk", ["Very low risk", "Discharge from the ER", "No need for anticoagulation"], "3 or more is increased risk."),
        Q("Which score applies to all ACS types and predicts longer-term death?", "GRACE", ["TIMI UA/NSTEMI", "HEART", "CHA₂DS₂-VASc"], "GRACE targets ACS broadly with in-hospital to 3-year outcomes.")
      ],
      bank: [
        Q("TIMI UA/NSTEMI predicts which outcome?", "14-day death, MI or urgent revascularization", ["30-day death only", "Stroke risk in AF", "10-year ASCVD risk"], "That's the TIMI UA/NSTEMI target outcome.")
      ] },

    { id: "don-nstemi", title: "Don: what is it, and what next?", goal: "Apply the rules: Don has an inferior NSTEMI with a high TIMI score, so he gets the full NSTEMI plan and an early cath.",
      pages: [
        { title: "Don's results", fig: { type: "patient", icon: "🧔", name: "Don's ER results", line: "60% RCA lesion 3 years ago · on daily aspirin", chips: [["EKG", "TWI + ST ↓ in II, III, aVF", "ok"], ["hs-troponin", "234 → 391 → 806 → 682", "bad"], ["BNP", "slightly up", "ok"]] },
          html: "<p>Rising troponin, ischemic EKG changes, <strong>no ST elevation</strong>: <strong>NSTEMI</strong> (inferior leads).</p>" },
        { title: "Don's TIMI score", fig: { type: "grid", cols: ["Item", "Don"], rows: [["Age ≥ 65", "0 (he's 55)"], ["Known stenosis ≥ 50%", "1 (60% RCA)"], ["Aspirin in 7 days", "1 (daily ASA)"], ["≥ 2 angina episodes in 24 h", "likely 1 (ongoing pain)"], ["Elevated markers", "1"], ["ST deviation ≥ 0.5 mm", "1"], ["≥ 3 risk factors", "unknown"]], hiCol: 1 },
          html: "<p>At least <strong>4 to 5 points</strong>: well over 3. He's stable, so: nitro, beta blocker, DAPT, <strong>heparin drip</strong> (cath planned), cardiology consult, and a <strong>routine invasive</strong> cath, early.</p>" +
            std("The deck asks this question without an answer slide; this applies the deck's TIMI and strategy rules.") },
        { title: "If Don had ST elevation instead", fig: { type: "leads", hi: ["II", "III", "aVF"], recip: ["I", "aVL"], label: "Inferior STEMI" },
          html: "<p>ST elevation in II, III, aVF + troponin = <strong>inferior STEMI</strong>: STEMI pathway, <strong>PCI within 90 minutes</strong>, and a <strong>right-sided EKG</strong> for RV involvement.</p>" +
            "<p>In a small Minnesota hospital <strong>3 hours</strong> from PCI: give <strong>lytics within 30 minutes</strong> (within 12 h of onset), then transfer.</p>" }
      ],
      remember: ["Rising troponin + TWI/ST depression, no ST elevation = NSTEMI.", "Don's TIMI ≥ 4: routine invasive (early) strategy, heparin drip, DAPT, BB, nitro.", "If inferior ST elevation: STEMI, PCI ≤ 90 min, right-sided EKG.", "If PCI is &gt; 120 min away: lytics (door to needle ≤ 30) then transfer."],
      check: [
        Q("Don: ST depression in II, III, aVF, troponin 234 → 806. Diagnosis?", "NSTEMI", ["Unstable angina", "STEMI", "Pericarditis"], "A troponin rise with ischemic changes but no ST elevation is an NSTEMI."),
        Q("Why does Don's aspirin use count on his TIMI score?", "TIMI gives a point for aspirin use in the past 7 days", ["Aspirin causes ST depression", "Aspirin raises troponin", "It doesn't count"], "Breakthrough ACS despite aspirin marks higher risk."),
        Q("Same Don but 3 hours from a PCI hospital with an inferior STEMI. Plan?", "Fibrinolytics, then transfer for PCI", ["Wait 3 hours for PCI", "Stress test first", "Discharge on DAPT"], "PCI beyond 120 minutes means lytics first, then transfer.")
      ],
      bank: [
        Q("Which anticoagulant fits Don since a cath is planned?", "Unfractionated heparin drip", ["Enoxaparin only", "Apixaban", "Alteplase"], "UFH is used when cath is planned.")
      ] },

    { id: "culprit", title: "Culprit first, then the rest", goal: "Fix the culprit artery first; treat other blockages now or within 45 days, unless the patient is in shock.",
      pages: [
        { title: "Find the culprit", fig: { type: "coronary", blocks: [["ladm", "99%"], ["rcam", "80%"]], stents: ["ladm"] },
          html: "<p>Urgent angiography finds the <strong>infarct-related (culprit) artery</strong>; primary PCI opens it first.</p>" +
            "<p>Don's cath: <strong>99% mid-LAD</strong> (culprit, gets a DES) and an <strong>80% RCA</strong>.</p>" },
        { title: "What about the RCA?", fig: { type: "vs", a: ["No shock", "good", ["Complete revascularization recommended", "Non-culprit PCI during the first procedure OR staged", "Staged = later this admission or within 45 days"]], b: ["Cardiogenic shock", "bad", ["Culprit vessel only", "Do NOT routinely stent other arteries during the first procedure"]] },
          html: "<p>Don isn't in shock, so the answer is: <strong>RCA PCI during the first procedure or staged</strong>, depending on clinical and procedural factors.</p>" +
            "<p>The choice depends on anatomy, lesion complexity, kidney function and stability.</p>" },
        { title: "Practice", fig: { type: "leads", hi: ["V3", "V4"], label: "ST elevation V3-V4 → LAD culprit" },
          html: "<p>Chest pain, high troponin, ST elevation in <strong>V3 and V4</strong>: the culprit is the <strong>LAD</strong>. An 80% mid-RCA too? If stable, <strong>complete revascularization</strong>.</p>" }
      ],
      remember: ["Primary PCI treats the culprit artery first.", "Stable STEMI + multivessel CAD → complete revascularization (same procedure or staged within 45 days).", "Cardiogenic shock → culprit only; no routine non-culprit PCI initially."],
      check: [
        Q("STEMI without shock, culprit LAD stented, 80% RCA also found. Best approach?", "Treat the RCA during the first procedure or as a staged PCI", ["Never treat the RCA", "RCA PCI is contraindicated after STEMI", "RCA must be done in the same procedure"], "Complete revascularization is recommended, timed by clinical and procedural factors."),
        Q("STEMI with cardiogenic shock and multivessel disease. During the first cath:", "PCI of the culprit artery only", ["Stent every lesion", "No PCI at all", "Emergent CABG first"], "In shock, routine non-culprit PCI raises adverse outcomes."),
        Q("Staged non-culprit PCI is done within how long?", "During the hospitalization or within 45 days", ["Within 2 hours", "After 1 year", "Only if symptoms return"], "The deck allows staged PCI later in the admission or within 45 days.")
      ],
      bank: [
        Q("ST elevation in V3 and V4 points to which culprit artery?", "LAD", ["RCA", "LCx", "PDA"], "V3 and V4 are anterior leads, supplied by the LAD.")
      ] },

    { id: "rv", title: "RV infarction", goal: "Inferior MI + low BP + JVD + clear lungs = RV infarct: right-sided EKG, give fluids, no nitro or diuretics.",
      pages: [
        { title: "The triad", fig: { type: "tiles", items: [["📉", "Hypotension", "low cardiac output"], ["🫙", "JVD", "high right-sided pressure"], ["🫁", "Clear lungs", "no pulmonary edema"]] },
          html: "<p>Usually a <strong>proximal RCA</strong> occlusion, often with an <strong>inferior MI</strong>.</p>" +
            "<p><strong>Hypotension</strong> (low output) + <strong>JVD</strong> (high right pressures) + <strong>clear lungs</strong> (no pulmonary edema).</p>" },
        { title: "Why the BP falls", fig: { type: "flow", steps: ["RV fails", "less blood to the lungs", "less LV preload", "less cardiac output", "<strong>hypotension</strong>"] },
          html: "<p>Systemic BP depends on <strong>preload reaching the left side</strong>. A failing RV can't push it there.</p>" +
            hy("RV infarct is preload-dependent: <strong>give volume</strong> (NS boluses), <strong>avoid nitrates and diuretics</strong>.") },
        { title: "See it with V4R", fig: { type: "tiles", items: [["📈", "Standard 12-lead", "can show inferior MI, may miss the RV"], ["➡️", "Right-sided EKG", "leads on the right chest"], ["⭐", "V4R", "looks right at the RV free wall"]] },
          html: "<p><strong>Get a right-sided EKG on every inferior MI.</strong> ST elevation in the right precordial leads, especially <strong>V4R</strong>, makes the diagnosis. Then <strong>urgent reperfusion</strong>, usually PCI.</p>" }
      ],
      remember: ["Proximal RCA; usually with inferior MI.", "Triad: hypotension + JVD + clear lungs.", "Right-sided EKG on every inferior MI; V4R is key.", "Give IV fluids; avoid nitrates and diuretics; urgent PCI."],
      check: [
        Q("Inferior STEMI, BP 82/50, JVD, clear lungs. Most likely?", "Right ventricular infarction", ["Left ventricular failure", "Tension pneumothorax only", "Papillary muscle rupture"], "Hypotension, JVD and clear lungs with an inferior MI is the RV infarct triad."),
        Q("RV infarct with hypotension. Which treatment helps?", "IV normal saline boluses", ["Nitroglycerin drip", "IV furosemide", "Morphine"], "The RV is preload-dependent, so volume raises output."),
        Q("Which lead best shows an RV infarction?", "V4R", ["aVR", "V6", "Lead I"], "V4R on a right-sided EKG views the RV free wall.")
      ],
      bank: [
        Q("Why are nitrates dangerous in RV infarction?", "They lower preload, worsening hypotension", ["They cause ST elevation", "They raise troponin", "They cause bradycardia only"], "An RV infarct depends on preload, which nitrates reduce.")
      ] },

    { id: "complications", title: "Complications of MI", goal: "Functional (pump), mechanical (something tears) and electrical (rhythm): each with its own clue and fix.",
      pages: [
        { title: "Functional: the pump", fig: { type: "tiles", items: [["💧", "LV failure", "congestion → diuretics + GDMT (BB, ACEi)"], ["🫀", "RV failure", "↓BP, ↑JVP, clear lungs → cautious fluids, no nitro/diuretics"], ["📉", "Cardiogenic shock", "pump failure + hypoperfusion → urgent revascularization"]] },
          html: "<p>Too much muscle lost means the heart can't pump forward.</p>" },
        { title: "Mechanical: something tears", fig: { type: "grid", cols: ["Rupture", "Clue", "Result"], rows: [["LV free wall", "sudden collapse, PEA", "hemopericardium → tamponade → death (high mortality)"], ["Ventricular septum", "new <strong>harsh holosystolic murmur</strong>", "left-to-right shunt, <strong>O₂ step-up</strong>"], ["Papillary muscle", "acute severe MR", "pulmonary edema, shock"]] },
          html: mn("Wall → tamponade. Septum → murmur + O₂ step-up. Papillary → flash pulmonary edema.") },
        { title: "Electrical: the rhythm", fig: { type: "vs", a: ["Too slow", "blue", ["Sinus brady, AV block (esp. inferior MI)", "Atropine if symptomatic", "Temporary pacing if refractory", "Permanent pacer only if it persists"]], b: ["Too fast", "bad", ["Pulseless VT/VF: defibrillate", "Unstable VT with pulse: synchronized cardioversion", "SVT: by rhythm and stability", "Amiodarone if persistent"]] },
          html: "<p>A <strong>new bundle branch or fascicular block</strong> may mean extensive injury, but an isolated one doesn't automatically need a pacemaker.</p>" }
      ],
      remember: ["Functional: LV failure (diuretics, BB, ACEi), RV failure (fluids, no nitro/diuretics), cardiogenic shock (revascularize).", "Free-wall rupture: tamponade, PEA, death. VSD: harsh holosystolic murmur, O₂ step-up. Papillary rupture: acute MR, pulmonary edema.", "Brady/AV block (inferior MI): atropine → temporary pacing → permanent only if persistent.", "Pulseless VT/VF: defibrillate. Unstable VT with pulse: synchronized cardioversion."],
      check: [
        Q("Day 4 after MI: a new harsh holosystolic murmur and an oxygen step-up in the RV. Diagnosis?", "Ventricular septal rupture", ["Papillary muscle rupture", "Free-wall rupture", "Pericarditis"], "A septal rupture shunts left to right, raising RV oxygen saturation."),
        Q("After an MI, sudden pulmonary edema with a new MR murmur suggests:", "Papillary muscle rupture", ["Ventricular septal rupture", "RV infarction", "Stent restenosis"], "Papillary rupture causes acute severe MR and flash pulmonary edema."),
        Q("Inferior MI with symptomatic sinus bradycardia. First drug?", "Atropine", ["Amiodarone", "Metoprolol", "Adenosine"], "Atropine treats symptomatic bradycardia; pacing follows if it fails.")
      ],
      bank: [
        Q("Sudden PEA arrest days after a large MI, with tamponade on echo, suggests:", "LV free-wall rupture", ["VSD", "Papillary muscle rupture", "Stent thrombosis"], "Free-wall rupture fills the pericardium with blood.")
      ] }
  ] };

  /* =============================== TIER 3 · THE WEEDS =============================== */
  T.units["t3|cad-part-4"] = { chunks: [
    { id: "minoca", title: "MINOCA and Takotsubo", goal: "MI with no artery ≥ 50% blocked is a working diagnosis: find the cause and rule out mimics like Takotsubo.",
      pages: [
        { title: "MI, but the arteries look open", fig: { type: "flow", steps: ["Suspected MI", "Coronary angiogram", "No stenosis ≥ 50%", "Working dx: <strong>MINOCA</strong>", "Cardiac MRI, echo, intracoronary imaging, spasm testing"] },
          html: "<p><strong>MINOCA</strong>: <strong>5 to 15%</strong> of MIs, more common in <strong>women and younger patients</strong>; can be STEMI or NSTEMI.</p>" +
            hy("MINOCA is a <strong>working</strong> diagnosis, not a final one.") },
        { title: "Real causes vs mimics", fig: { type: "vs", a: ["True ischemic MINOCA", "bad", ["Coronary vasospasm", "SCAD without obstruction", "Coronary embolism or thrombosis", "Microvascular dysfunction", "Plaque rupture/erosion with transient clot"]], b: ["Mimics", "blue", ["Myocarditis", "Takotsubo", "Pulmonary embolism", "Other myocardial injury"]] },
          html: "<p><strong>Takotsubo</strong> (stress cardiomyopathy): <strong>transient regional LV systolic dysfunction</strong> that mimics ACS with chest pain, EKG changes and troponin; often after emotional or physical stress, though not always.</p>" }
      ],
      remember: ["MINOCA: MI with no stenosis ≥ 50%; 5 to 15% of MIs; women, younger; STEMI or NSTEMI.", "Working diagnosis: cardiac MRI, echo, intracoronary imaging, spasm testing.", "True causes: spasm, SCAD, embolism/thrombosis, microvascular, plaque disruption.", "Mimics: myocarditis, Takotsubo, PE.", "Takotsubo: transient regional LV dysfunction after stress; looks like ACS."],
      check: [
        Q("Troponin-positive MI, angiogram shows no stenosis over 30%. Working diagnosis?", "MINOCA", ["Stable angina", "Unstable angina", "Normal study, no MI"], "MI criteria with no stenosis of 50% or more is MINOCA."),
        Q("Which is a MINOCA mimic rather than a true ischemic cause?", "Myocarditis", ["Coronary vasospasm", "SCAD", "Coronary embolism"], "Myocarditis injures the heart without coronary ischemia."),
        Q("A woman has ACS-like pain after her husband's funeral, with transient regional LV dysfunction. Likely?", "Takotsubo cardiomyopathy", ["Prinzmetal angina", "Pericarditis", "Aortic stenosis"], "Stress-induced cardiomyopathy mimics ACS after emotional stress.")
      ],
      bank: [
        Q("MINOCA is more common in:", "Women and younger patients", ["Older men only", "Smokers over 80", "Children"], "The deck lists women and relatively younger patients.")
      ] },

    { id: "spasm", title: "Vasospasm and stimulants", goal: "Prinzmetal is spasm at night in young smokers: CCB first, avoid beta blockers; stimulant ischemia gets benzos and nitrates.",
      pages: [
        { title: "Variant (Prinzmetal) angina", fig: { type: "artery", stage: "spasm" },
          html: "<p>Atypical pain <strong>at rest</strong>, usually <strong>midnight to morning</strong>, in <strong>young smokers</strong> with few risk factors. Ask about <strong>cocaine and meth</strong>.</p>" +
            "<p><strong>Transient ST elevation</strong> that resolves when pain stops, even with <strong>no obstructive CAD</strong> on angiography.</p>" },
        { title: "Treatment", fig: { type: "vs", a: ["Use", "good", ["CCB first-line: amlodipine, diltiazem, verapamil", "Long-acting nitrate if still symptomatic", "SL nitro for attacks", "Stop smoking, cocaine, meth"]], b: ["Avoid", "bad", ["Beta blockers, especially nonselective: may worsen spasm"]] },
          html: mn("Spasm needs relaxing: CCB and nitrates relax; beta blockers leave alpha squeeze unopposed.") + std("The unopposed alpha explanation is standard teaching.") },
        { title: "Cocaine and meth", fig: { type: "flow", steps: ["↑ sympathetic", "tachycardia, HTN, ↑ O₂ demand", "spasm, thrombosis", "MI"] },
          html: "<p>Treat with <strong>benzodiazepines</strong> (calm the sympathetic surge), <strong>nitrates</strong> (spasm) and <strong>CCBs</strong> when appropriate.</p>" }
      ],
      remember: ["Vasospastic: rest pain midnight to morning, young smokers, cocaine/meth; transient ST ↑, open arteries.", "CCB first-line; add long-acting nitrate; SL nitro for attacks; avoid triggers.", "Avoid beta blockers (esp. nonselective).", "Stimulant ischemia: benzodiazepines, nitrates, CCBs."],
      check: [
        Q("Young smoker with 4 am chest pain and transient ST elevation, normal cath. First-line drug?", "A calcium channel blocker", ["A nonselective beta blocker", "A thrombolytic", "Digoxin"], "CCBs relieve coronary spasm in vasospastic angina."),
        Q("Which class may worsen vasospastic angina?", "Nonselective beta blockers", ["Calcium channel blockers", "Long-acting nitrates", "Statins"], "The deck says beta blockers, especially nonselective, can worsen spasm."),
        Q("Chest pain after cocaine, HR 128, BP 188/100. Which drug calms the sympathetic surge?", "A benzodiazepine", ["A beta blocker", "Epinephrine", "Atropine"], "Benzodiazepines reduce sympathetic stimulation in stimulant ischemia.")
      ],
      bank: [
        Q("When does vasospastic angina usually occur?", "At rest, midnight to morning", ["Only during exercise", "After heavy meals", "Only in the afternoon"], "The deck describes rest pain most commonly from midnight to morning.")
      ] },

    { id: "elderly", title: "ACS in older adults", goal: "Most MIs happen at 65+; they're more often NSTEMI, atypical, and complicated.",
      pages: [
        { title: "Older and sicker", fig: { type: "tiles", items: [["📊", "60-65%", "of MIs occur at age ≥ 65"], ["🕯️", "Most ACS deaths", "are older adults"], ["〰️", "NSTEMI > STEMI", "more likely"], ["😶‍🌫️", "Atypical", "dyspnea, syncope, weakness, delirium"]] },
          html: "<p>Atypical presentations <strong>delay</strong> recognition and treatment.</p>" +
            "<p>They also have more <strong>acute HF and cardiogenic shock</strong>, arrhythmias, <strong>bleeding, AKI</strong>, and higher mortality.</p>" }
      ],
      remember: ["60 to 65% of MIs at ≥ 65; most ACS deaths.", "More NSTEMI; may lack chest pain: dyspnea, syncope, weakness, delirium.", "More HF, shock, arrhythmias, bleeding, AKI, mortality."],
      check: [
        Q("About what share of MIs occur in patients 65 or older?", "60 to 65%", ["10%", "33%", "95%"], "The deck says 60 to 65%."),
        Q("Compared with younger patients, older adults with ACS more often present with:", "NSTEMI", ["STEMI", "Prinzmetal angina", "No troponin rise"], "Older adults are more likely to have NSTEMI."),
        Q("An 84-year-old has new delirium and a troponin rise. Could this be ACS?", "Yes, delirium can be an atypical ACS presentation", ["No, ACS needs chest pain", "Only if under 65", "Only with ST elevation"], "Acute confusion is one of the atypical presentations in older adults.")
      ],
      bank: [
        Q("Which complication is more common in older adults after MI?", "Bleeding", ["Prinzmetal angina", "Takotsubo only", "Hypertrophic cardiomyopathy"], "Older adults have more bleeding, AKI, arrhythmias and HF.")
      ] },

    { id: "after-pci", title: "After the cath and discharge", goal: "Watch the patient, the access site and the kidneys; home in 48 to 72 hours with a plan for leftover disease.",
      pages: [
        { title: "Right after PCI", fig: { type: "tiles", items: [["📟", "Telemetry", "recurrent ischemia, arrhythmias"], ["🩸", "Access site", "bleeding, hematoma"], ["🦶", "Distal circulation", "pulses, color, temperature, sensation"], ["🫘", "Kidney function", "after contrast"], ["🚶", "Activity", "per access-site instructions"]] },
          html: "<p>Selected <strong>uncomplicated STEMI</strong> patients can go home in <strong>48 to 72 hours</strong>, with a plan for remaining disease.</p>" },
        { title: "The rest of secondary prevention", fig: { type: "grid", cols: ["Area", "Plan"], rows: [["Lipids", "high-intensity statin; add ezetimibe or other nonstatin"], ["Diabetes", "individual A1c; GLP-1 RA or SGLT2i with CV benefit if T2DM + ASCVD"], ["Heart failure", "GDMT; diuretics for congestion"], ["Anticoagulation", "only for AF or LV thrombus, not routine after every MI"], ["Also", "smoking cessation, weight, BP to individual goal, rehab"]] },
          html: "<p><strong>Rehab barriers</strong>: cost and coverage, access (transport, distance, scheduling), and patient factors (awareness, other responsibilities, hard lifestyle change).</p>" }
      ],
      remember: ["After PCI: telemetry, vitals, access site, distal pulses, kidney function, activity rules.", "Uncomplicated STEMI: discharge 48 to 72 h.", "Ezetimibe/nonstatin if LDL needs more lowering; GLP-1 RA or SGLT2i for T2DM + ASCVD.", "Anticoagulate only for AF or LV thrombus.", "Rehab barriers: cost, access, patient factors."],
      check: [
        Q("After MI, when is an anticoagulant added to antiplatelets?", "Only for AF or LV thrombus", ["After every MI", "Never", "Only for NSTEMI"], "Anticoagulation isn't routine after MI; it's for AF or LV thrombus."),
        Q("Type 2 diabetic after ACS. Which diabetes drug class has CV benefit?", "GLP-1 receptor agonist or SGLT2 inhibitor", ["Sulfonylurea", "Insulin only", "Thiazolidinedione"], "The deck recommends these with ASCVD."),
        Q("How soon can an uncomplicated STEMI patient go home?", "48 to 72 hours", ["Same day", "2 weeks", "After rehab is done"], "Selected uncomplicated STEMI patients may be discharged in 48 to 72 hours.")
      ],
      bank: [
        Q("Which nonstatin is added when LDL needs further lowering after ACS?", "Ezetimibe", ["Niacin", "Gemfibrozil", "Fish oil"], "The deck names ezetimibe or other nonstatin therapy.")
      ] }
  ] };
})();
