/*
  Medications: Antiplatelets & PAD drugs (Cardio Part 2). Source:
  vascular-disease-part-1.md slides 33-35, 142; chronic-arrhythmia-management.md
  slides 109, 120-121; shock-pressors-fluids.md slide 36;
  endocarditis-pericardial.md slide 55 (aspirin for pericarditis is in the
  anti-inflammatory group). Rivaroxaban + aspirin is in anticoagulants.
  Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO2_MEDS_ANTIPLATELETS = L("meds2-antiplatelets", "Antiplatelets & PAD drugs", [

    Med("med-aspirin-cv", "Aspirin (antiplatelet doses)", "81–325 mg daily for PAD and low-risk AF; 324 mg chewed in cardiogenic shock from MI; high dose in Kawasaki", ["Vascular Disease Part 1", "Vascular Surgery", "Inpatient & Long-Term Arrhythmia Management", "Shock, Pressors & Fluid Management"], {
      uses: Tbl(["Setting", "Aspirin plan"], [
        ["<strong>PAD</strong> (symptomatic or asymptomatic)", "<strong>81–325 mg daily</strong> (81 mg common); lowers CV events. Symptomatic: single antiplatelet is Class I; asymptomatic: reasonable (IIa)"],
        ["Symptomatic PAD / after revascularization", "Aspirin <strong>+ rivaroxaban</strong>"],
        ["<strong>AF with CHA2DS2-VASc 0–1</strong>", "<strong>EC aspirin 81–325 mg/day</strong> alone"],
        ["After a <strong>Watchman</strong> device or <strong>LAA clip</strong>", "Aspirin alone long term (Watchman: after 4–6 weeks of anticoagulation)"],
        ["<strong>Cardiogenic shock from MI</strong>", "<strong>324 mg PO</strong> (four 81 mg chewed) + IV heparin"],
        ["<strong>Kawasaki disease</strong>", "<strong>30–50 mg/kg</strong> with IVIG, then <strong>3–5 mg/kg/day</strong> after the fever breaks"],
        ["<strong>Carotid disease</strong> (Vascular Surgery)", "Antiplatelet is part of medical treatment for everyone, with a statin, BP and DM control, Mediterranean diet and no smoking"],
        ["<strong>After peripheral bypass, angioplasty or stent</strong> (Vascular Surgery)", "Long-term antiplatelet and/or oral anticoagulant"]
      ]),
      moa: "<p>Irreversibly blocks platelet COX-1, so less thromboxane A2 and less platelet aggregation for the platelet's life (standard teaching).</p>",
      avoid: ul(["Active bleeding, GI bleed history.", "Adds bleeding risk with anticoagulants (\"Drugs\" in HAS-BLED)."]),
      se: ul(["Bleeding, GI upset and ulcers (standard teaching)."]),
      pearls: ul(["A patient cardioverted back to NSR still needs aspirin or anticoagulation if indicated: AF can relapse at any time.", "Antiplatelet use is a HAS-BLED point."]) +
        HY("CHA2DS2-VASc 0–1 → aspirin. PAD → aspirin or clopidogrel. MI shock → 324 mg chewed.")
    }, [
      Q("uses", "A 55-year-old man with AF has a CHA2DS2-VASc of 1 (hypertension). Stroke prevention per the lecture?", ["Enteric-coated aspirin 81-325 mg daily", "Apixaban 5 mg BID", "Warfarin INR 2-3", "No therapy ever"], 0, "CHA2DS2-VASc 0-1: treat with EC aspirin alone."),
      Q("uses", "What is the usual aspirin dose for PAD?", ["81 mg daily (range 81-325)", "650 mg every 4 hours", "30-50 mg/kg", "324 mg twice daily"], 0, "PAD: aspirin 81-325 mg daily, 81 mg most common."),
      Q("uses", "How is aspirin given at first in Kawasaki disease?", ["30-50 mg/kg with a single IVIG infusion", "81 mg daily alone", "324 mg chewed once", "Aspirin is contraindicated"], 0, "Kawasaki: IVIG plus aspirin 30-50 mg/kg, then 3-5 mg/kg/day after defervescence."),
      Q("uses", "A patient in cardiogenic shock from an MI. Which antiplatelet dose is given?", ["Aspirin 324 mg orally", "Aspirin 81 mg", "Clopidogrel 75 mg", "No antiplatelet"], 0, "Cardiogenic shock management: aspirin 324 mg orally and IV heparin."),
      Q("uses", "After a Watchman device has healed over (4-6 weeks), what is the usual long-term therapy?", ["Aspirin alone", "Lifelong warfarin", "Lifelong DOAC", "Nothing"], 0, "After epithelialization, patients can stop anticoagulation and stay on aspirin alone."),
      Q("pearls", "Which HAS-BLED item does aspirin count toward?", ["Drugs (antiplatelet agents)", "Labile INR", "Elderly", "Stroke"], 0, "Drugs (antiplatelets) and/or heavy alcohol: 1 point each."),
      Q("uses", "A patient has 60% asymptomatic carotid stenosis. Which drug plan matches the Vascular Surgery lecture?", ["Antiplatelet plus a statin, with BP and DM control", "Warfarin alone", "Thrombolysis", "No drugs until surgery"], 0, "Medical treatment of carotid disease: statin, antiplatelet, HTN and DM control, Mediterranean diet, smoking cessation."),
      Q("uses", "After a fem-pop bypass, which long-term drug therapy does the Vascular Surgery lecture list?", ["Antiplatelet and/or oral anticoagulant", "Lifelong antibiotics", "Steroids", "Nothing once the graft is open"], 0, "Oral anticoagulants and/or antiplatelet therapy long term post-op.")
    ]),

    Med("med-clopidogrel", "Clopidogrel (Plavix)", "P2Y12 antiplatelet; 75 mg daily; the aspirin alternative in PAD", ["Vascular Disease Part 1", "Vascular Surgery"], {
      uses: ul(["<strong>PAD</strong> (symptomatic or asymptomatic): <strong>75 mg daily</strong>; lowers cardiovascular events.", "Single antiplatelet therapy option (aspirin or clopidogrel)."]),
      moa: "<p>Blocks the platelet <strong>P2Y12 (ADP) receptor</strong>, preventing platelet activation and aggregation (standard teaching).</p>",
      avoid: ul(["Active bleeding.", "Combined antiplatelet + anticoagulant raises bleeding risk."]),
      se: ul(["Bleeding (standard teaching)."]),
      pearls: ul(["It is a prodrug activated by the liver (CYP2C19), so some PPIs and genetic variants blunt it (standard teaching)."]) +
        HY("PAD antiplatelet: aspirin 81 OR clopidogrel 75.")
    }, [
      Q("uses", "A patient with symptomatic PAD has an aspirin allergy. Which antiplatelet?", ["Clopidogrel 75 mg daily", "Cilostazol alone", "Warfarin", "No antiplatelet"], 0, "Clopidogrel 75 mg daily is an option for symptomatic and asymptomatic PAD."),
      Q("moa", "What does clopidogrel block?", ["The platelet P2Y12 (ADP) receptor", "COX-1", "Factor Xa", "Thrombin"], 0, "Clopidogrel is a P2Y12 inhibitor (standard teaching)."),
      Q("uses", "What recommendation class is single antiplatelet therapy in symptomatic PAD?", ["Class I (recommended)", "Class III (harm)", "Not mentioned", "Class IIb"], 0, "Symptomatic PAD: single antiplatelet therapy is recommended (Class I); asymptomatic: reasonable (IIa)."),
      Q("uses", "What is the clopidogrel dose for PAD?", ["75 mg daily", "300 mg daily", "81 mg daily", "150 mg BID"], 0, "Clopidogrel 75 mg daily."),
      Q("uses", "A patient with carotid stenosis cannot take aspirin. Which antiplatelet keeps him on the lecture's medical therapy?", ["Clopidogrel 75 mg daily", "Cilostazol", "Warfarin", "None needed"], 0, "Carotid medical therapy includes an antiplatelet; clopidogrel is the aspirin alternative (standard teaching).")
    ]),

    Med("med-cilostazol", "Cilostazol (Pletal)", "PDE-3 inhibitor that improves walking distance in claudication; never in heart failure", ["Vascular Disease Part 1"], {
      uses: ul(["<strong>Claudication</strong>: <strong>improves walking distance</strong> in symptomatic PAD.", "Can be started alongside <strong>structured exercise therapy</strong>."]),
      moa: "<p>Phosphodiesterase-3 inhibitor: vasodilation and platelet inhibition (standard teaching).</p>",
      avoid: ul(["<strong>Heart failure (CHF): contraindicated — increases mortality</strong>."]),
      se: ul(["Headache, diarrhea, palpitations (standard teaching)."]),
      pearls: ul(["It treats symptoms (walking), not cardiovascular risk; the patient still needs antiplatelet therapy, a high-intensity statin and smoking cessation."]) +
        HY("Cilostazol: better walking, NEVER in heart failure.")
    }, [
      Q("avoid", "A patient with claudication also has HFrEF. Why not cilostazol?", ["It increases mortality in heart failure", "It causes hyperkalemia", "It is an anticoagulant", "It worsens claudication"], 0, "Cilostazol is contraindicated in CHF because it increases mortality."),
      Q("uses", "What does cilostazol improve in PAD?", ["Walking distance and claudication", "Ankle-brachial index to normal", "Cardiovascular mortality", "LDL"], 0, "Cilostazol improves walking distance and claudication."),
      Q("uses", "What should be started alongside cilostazol for claudication?", ["Structured exercise therapy", "Bed rest", "Warfarin", "A beta blocker taper"], 0, "Cilostazol may be initiated alongside structured exercise therapy."),
      Q("pearls", "A claudication patient is doing well on cilostazol. Does he still need aspirin and a statin?", ["Yes: cilostazol treats symptoms, not cardiovascular risk", "No: cilostazol replaces them", "Only the statin", "Only aspirin"], 0, "PAD cornerstone: risk-factor control, high-intensity statin, smoking cessation and antiplatelet therapy.")
    ])
  ]);
}());
