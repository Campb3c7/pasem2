/*
  Medications: Antiplatelets (Cardio Part 3). Source: cad-part-5.md slides
  46, 59-71; cad-part-4.md slides 17, 24, 80; cad-part-3.md slides 95-96, 120;
  cad-part-2.md slide 52; cardiac-surgery.md slides 42, 54; stress-testing.md
  slide 32 (dipyridamole). Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO3_MEDS_ANTIPLATELETS = L("meds3-antiplatelets", "Antiplatelets", [

    Med("med3-aspirin", "Aspirin", "162-325 mg chewed, non-enteric-coated, at ACS presentation; then 81 mg daily for life", ["CAD Part II: Prevention", "CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Cardiac Surgery"], {
      uses: Tbl(["Setting", "Aspirin plan"], [
        ["<strong>Suspected or definite ACS</strong>", "<strong>162–325 mg non-enteric-coated, chewed</strong>, as soon as possible (often by EMS). Give it <strong>even if the patient takes daily aspirin</strong>. Then 81 mg daily"],
        ["After ACS", "<strong>DAPT</strong> (aspirin + P2Y12 inhibitor) for at least <strong>12 months</strong> if bleeding risk is not high, then low-dose aspirin long term"],
        ["Stable CAD (secondary prevention)", "81–325 mg daily, 81–162 preferred, 81 if GI effects. A P2Y12 inhibitor if aspirin allergy"],
        ["After CABG", "Antiplatelet (aspirin or clopidogrel) once extubated and long term"],
        ["<strong>Primary prevention</strong>", "<strong>Not routine.</strong> Maybe ages 40–70 with high CV risk and low bleeding risk. Do not start in adults &gt;70 or with high bleeding risk"]
      ]),
      moa: "<p><strong>Irreversibly inhibits platelet COX-1</strong> → ↓ thromboxane A<sub>2</sub> → less platelet aggregation for the life of the platelet (about 7–10 days, standard teaching). Comes as 81, 162, 325, 500 mg tablets or a 300 mg rectal suppository.</p>",
      avoid: ul(["Active bleeding, true aspirin allergy (use a P2Y12 inhibitor instead).", "High bleeding risk in primary prevention.",
        "With <strong>ticagrelor</strong>: keep aspirin at <strong>75–100 mg</strong> (81 mg); more than 100 mg/day lowers ticagrelor's effect."]),
      se: ul(["Bleeding, GI upset and ulcers (use 81 mg if GI effects)."]),
      pearls: ul(["Chew it: non-enteric-coated and chewed works fastest.", "Rectal suppository if the patient cannot swallow.", "Antiplatelets stop the platelet plug; anticoagulants stop the fibrin mesh; in ACS you use both."]) +
        HY("ACS: chew 162-325 mg now, even if already on aspirin. Primary prevention: usually no.")
    }, [
      Q("uses", "A 64-year-old who takes aspirin 81 mg daily arrives with 30 minutes of crushing chest pain. Aspirin plan?", ["Chew 162-325 mg non-enteric-coated aspirin now", "No more aspirin: he already took his dose", "Give enteric-coated 81 mg", "Wait for the troponin"], 0, "The loading dose is given even on daily aspirin, because his 81 mg does not fully block new platelets fast enough."),
      Q("uses", "A healthy 74-year-old with no ASCVD asks whether to start aspirin for prevention. Best answer?", ["No: do not routinely start aspirin after age 70", "Yes, 325 mg daily", "Yes, 81 mg daily for everyone over 65", "Only if LDL is above 100"], 0, "In older adults without ASCVD, bleeding risk outweighs the small prevention benefit."),
      Q("moa", "Why does one aspirin dose affect platelets for days?", ["It irreversibly inhibits COX-1 for the platelet's life", "It has a 10-day half-life", "It binds P2Y12 permanently", "It depletes vitamin K"], 0, "Platelets have no nucleus to make new COX-1, so the block lasts until new platelets are made."),
      Q("avoid", "A patient on ticagrelor after NSTEMI is taking aspirin 325 mg daily. Change?", ["Lower aspirin to 81 mg daily", "Stop ticagrelor", "Raise aspirin to 650 mg", "No change"], 0, "Aspirin above 100 mg/day reduces how well ticagrelor works."),
      Q("uses", "After a STEMI treated with a DES, a patient without high bleeding risk asks how long to take two antiplatelets. Answer?", ["At least 12 months, then aspirin long term", "1 month", "6 months then nothing", "Lifelong DAPT for everyone"], 0, "After ACS with PCI, DAPT for at least 12 months prevents stent thrombosis and new events."),
      Q("uses", "A patient with stable CAD has a true aspirin allergy (anaphylaxis). Antiplatelet choice?", ["A P2Y12 inhibitor such as clopidogrel", "No antiplatelet at all", "Desensitize to warfarin", "Ibuprofen"], 0, "A P2Y12 inhibitor gives the antiplatelet protection without aspirin.")
    ]),

    Med("med3-clopidogrel", "Clopidogrel (Plavix)", "Thienopyridine P2Y12 inhibitor: ACS load 300-600 mg then 75 mg; the DAPT partner for stable CAD PCI", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Cardiac Surgery"], {
      uses: ul(["<strong>ACS</strong> and selected CAD: <strong>load 300–600 mg</strong>, then <strong>75 mg daily</strong>.",
        "<strong>Chronic coronary disease treated with PCI</strong>: aspirin + <strong>clopidogrel for 6 months</strong>, then single antiplatelet.",
        "Secondary prevention after ischemic stroke; symptomatic PAD.", "Aspirin allergy; after CABG (aspirin or clopidogrel).",
        "Patients who cannot take prasugrel or ticagrelor (bleeding risk, prior stroke for prasugrel)."]),
      moa: "<p><strong>Thienopyridine</strong>: blocks the platelet <strong>P2Y12 ADP receptor</strong> → less ADP-driven activation. A prodrug that the liver activates (standard teaching).</p>",
      avoid: ul(["Active bleeding.", "Ticagrelor or prasugrel is generally preferred over clopidogrel in ACS patients undergoing PCI."]),
      se: ul(["Bleeding.", "<strong>Rare: TTP</strong> (fever, weakness, thrombocytopenia, renal dysfunction, neuro changes): needs urgent recognition."]),
      pearls: ul(["Opioids slow gastric emptying and delay oral P2Y12 inhibitors.", "Planned surgery like CABG: P2Y12 inhibitors are usually stopped days before to limit bleeding (standard teaching)."]) +
        HY("Clopidogrel: 300-600 load, 75 daily. Stable CAD stent = aspirin + clopidogrel 6 months.")
    }, [
      Q("uses", "A patient with stable angina (no ACS) gets an elective DES. DAPT plan?", ["Aspirin + clopidogrel for 6 months, then single antiplatelet", "Aspirin + prasugrel for 12 months", "Aspirin alone", "Warfarin + aspirin"], 0, "For chronic coronary disease with PCI, 6 months of aspirin plus clopidogrel covers the time the stent is healing over."),
      Q("se", "Three weeks after starting clopidogrel, a patient has fever, confusion, platelets 18,000, rising creatinine and schistocytes. Diagnosis?", ["Thrombotic thrombocytopenic purpura", "Heparin-induced thrombocytopenia", "Aspirin allergy", "Expected drug effect"], 0, "TTP is a rare but serious thienopyridine reaction with the classic fever, low platelets, renal and neuro picture."),
      Q("uses", "A patient with ACS and a prior hemorrhagic stroke needs a P2Y12 inhibitor. Which one fits best?", ["Clopidogrel", "Prasugrel", "Double-dose ticagrelor", "No P2Y12 ever"], 0, "Prasugrel is contraindicated after stroke/TIA, and clopidogrel bleeds least of the three."),
      Q("moa", "How does clopidogrel differ from aspirin in mechanism?", ["It blocks the ADP P2Y12 receptor instead of COX-1", "It is a direct thrombin inhibitor", "It breaks down fibrin", "It blocks factor Xa"], 0, "Blocking two platelet pathways (COX-1 and ADP) is why DAPT works better than either alone."),
      Q("uses", "What is the clopidogrel loading dose in ACS?", ["300-600 mg", "75 mg", "60 mg", "180 mg"], 0, "A load reaches platelet inhibition fast; 75 mg daily keeps it there.")
    ]),

    Med("med3-prasugrel", "Prasugrel (Effient)", "Strong thienopyridine for ACS going to PCI; never after stroke/TIA; avoid at 75+", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology"], {
      uses: ul(["<strong>ACS patients undergoing PCI</strong> (STEMI or NSTEMI).", "Load <strong>60 mg</strong> when PCI is planned; maintenance <strong>10 mg daily</strong>; consider <strong>5 mg if &lt;60 kg</strong>."]),
      moa: "<p>Thienopyridine P2Y12 (ADP receptor) blocker; more potent than clopidogrel.</p>",
      avoid: ul(["<strong>History of stroke or TIA</strong>: contraindicated.", "<strong>Age ≥75</strong>: generally avoided except selected high-risk patients.", "Low body weight: dose-reduce to 5 mg.", "Active bleeding."]),
      se: ul(["<strong>Bleeding</strong>: the most important effect, may be severe or life-threatening; watch for bruising.", "Rare TTP."]),
      pearls: ul(["Given when the anatomy is known and PCI is planned.", "Ticagrelor or prasugrel is generally preferred over clopidogrel in ACS with PCI."]) +
        Mn("Prasugrel no-go", "\"Stroke, old, light\": prior stroke/TIA, age 75+, under 60 kg.")
    }, [
      Q("avoid", "A 68-year-old with NSTEMI going to PCI had a TIA 2 years ago. Which P2Y12 inhibitor is contraindicated?", ["Prasugrel", "Clopidogrel", "Ticagrelor", "None"], 0, "Prasugrel raises intracranial bleeding risk in patients with prior stroke or TIA."),
      Q("avoid", "An 81-year-old needs PCI for STEMI. Why is prasugrel usually avoided?", ["Bleeding risk at age 75 or older outweighs benefit", "It does not work in the elderly", "It causes hyperuricemia", "It needs twice-daily dosing"], 0, "Older patients bleed more on potent P2Y12 inhibitors without extra benefit."),
      Q("uses", "A 54 kg woman is started on prasugrel after PCI. Maintenance dose?", ["Consider 5 mg daily", "10 mg daily", "20 mg daily", "60 mg daily"], 0, "Low body weight raises drug exposure and bleeding, so the dose is halved."),
      Q("se", "What is the most important adverse effect to monitor on prasugrel?", ["Bleeding", "Dyspnea", "Gout", "Cough"], 0, "It is a potent platelet inhibitor, so bleeding can be severe."),
      Q("uses", "When is the 60 mg prasugrel load given?", ["When PCI is planned", "In the ambulance for every chest pain", "Only after CABG", "Before a stress test"], 0, "Prasugrel is for ACS patients going to PCI, so it is loaded once PCI is the plan.")
    ]),

    Med("med3-ticagrelor", "Ticagrelor (Brilinta)", "Non-thienopyridine P2Y12: 180 mg load, 90 mg BID; dyspnea, uric acid; aspirin must stay ≤100 mg", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology"], {
      uses: ul(["<strong>ACS managed with PCI or with medical therapy</strong> (unlike prasugrel, does not need PCI).", "Load <strong>180 mg</strong>, then <strong>90 mg BID</strong> for the first 12 months.", "Tablets can be crushed in water if the patient cannot swallow."]),
      moa: "<p><strong>Non-thienopyridine</strong> P2Y12 inhibitor (blocks ADP-mediated activation).</p>",
      avoid: ul(["Active bleeding.", "<strong>Aspirin &gt;100 mg/day</strong> reduces its effect: use 75–100 mg (81 mg).", "Caution with a history of gout."]),
      se: ul(["<strong>Bleeding</strong>: most important.", "<strong>Dyspnea</strong>: usually mild-moderate and often goes away; rule out HF or ischemia first; switch if intolerable.", "<strong>Hyperuricemia</strong> (gout)."]),
      pearls: ul(["Twice daily, so missed doses matter.", "Preferred over clopidogrel in ACS with PCI."]) +
        Mn("Ticagrelor", "\"Tick-a-BREATH-lor\": the one that causes dyspnea (and uric acid).")
    }, [
      Q("se", "Two weeks after NSTEMI, a patient on ticagrelor reports mild shortness of breath. Exam, BNP and ECG are normal. Next step?", ["Reassure: ticagrelor dyspnea is common and often resolves", "Stop all antiplatelets", "Start furosemide", "Order an emergent cath"], 0, "Once HF and ischemia are excluded, ticagrelor dyspnea is usually benign; switch only if intolerable."),
      Q("se", "A patient on ticagrelor has a first gout flare. Link?", ["Ticagrelor can raise serum uric acid", "Ticagrelor causes TTP", "Unrelated", "Aspirin protects against gout"], 0, "Hyperuricemia is a known ticagrelor effect, so use caution with gout."),
      Q("uses", "An NSTEMI patient will be treated medically without PCI. Which P2Y12 inhibitor is indicated, unlike prasugrel?", ["Ticagrelor", "Prasugrel", "Bivalirudin", "Abciximab"], 0, "Ticagrelor is approved for ACS with PCI or medical therapy; prasugrel is for PCI."),
      Q("uses", "Ticagrelor dosing after ACS?", ["180 mg load, then 90 mg twice daily", "60 mg load, then 10 mg daily", "600 mg load, then 75 mg daily", "90 mg once weekly"], 0, "Ticagrelor is reversible and short-acting, so it is dosed twice daily."),
      Q("pearls", "An intubated patient needs his ticagrelor. Option?", ["Crush the tablet and mix with water", "Skip it while intubated", "Give it rectally", "Switch to IV aspirin only"], 0, "Ticagrelor tablets can be crushed in water for patients who cannot swallow.")
    ])
  ]);
}());
