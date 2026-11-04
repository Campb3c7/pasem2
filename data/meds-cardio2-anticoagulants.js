/*
  Medications: Anticoagulants & thrombolytics (Cardio Part 2). Source:
  chronic-arrhythmia-management.md slides 51, 109-120; vascular-disease-part-2.md
  slides 25, 80-97; vascular-disease-part-1.md slides 34, 48;
  shock-pressors-fluids.md slide 36. Slide 118 (warfarin pros/cons) is blank
  in the deck; that row is standard teaching and labeled. Mechanical-valve
  rules are also in Cardio Part 1 Medications. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO2_MEDS_ANTICOAGULANTS = L("meds2-anticoagulants", "Anticoagulants & thrombolytics", [

    Med("med-heparin", "Unfractionated heparin (UFH) IV", "IV bolus + drip titrated to aPTT or anti-Xa; fast on, fast off", ["Vascular Disease Part 2", "Vascular Disease Part 1", "Inpatient & Long-Term Arrhythmia Management", "Shock, Pressors & Fluid Management"], {
      uses: ul([
        "<strong>Acute limb ischemia</strong>: IV UFH right away while revascularization is arranged.",
        "VTE when the patient is <strong>unstable</strong>, <strong>thrombolysis or a procedure may be needed</strong>, there is <strong>severe renal failure</strong>, or <strong>rapid reversal</strong> may be needed.",
        "New AF needing anticoagulation in the hospital (drip titrated to aPTT or anti-Xa).",
        "Cardiogenic shock from MI: aspirin + IV heparin."
      ]),
      moa: "<p>Activates antithrombin, which shuts down thrombin and factor Xa (standard teaching). Given as an <strong>IV bolus, then a continuous infusion</strong>; works immediately. Like every anticoagulant it <strong>stops clots from growing and new ones from forming but does not dissolve the clot</strong>.</p>",
      avoid: ul(["Anticoagulation contraindications: allergy, active bleeding (e.g. GI), hemorrhagic stroke history, spinal cord or intracranial tumors.", "Held while systemic tPA is running."]),
      se: ul(["Bleeding.", "<strong>HIT</strong> (heparin-induced thrombocytopenia)."]),
      pearls: ul(["Short-acting and reversible (protamine, standard teaching): the go-to when a procedure is coming.", "Safe in severe renal failure, unlike LMWH and most DOACs."]) +
        HY("UFH: IV, titratable, reversible, OK in renal failure. Watch for HIT.")
    }, [
      Q("uses", "A patient has a cold, pulseless leg from an acute arterial embolus. What drug is started immediately?", ["IV unfractionated heparin", "Oral apixaban", "Cilostazol", "Aspirin alone"], 0, "Acute limb ischemia: anticoagulate with IV UFH, then urgent revascularization."),
      Q("uses", "A PE patient with CrCl 12 may need catheter-directed therapy in the next few hours. Best anticoagulant?", ["Unfractionated heparin drip", "Enoxaparin", "Rivaroxaban", "Warfarin alone"], 0, "UFH is preferred with severe renal failure, a possible procedure, or need for rapid reversal."),
      Q("se", "Platelets fall by 60% five days into a heparin drip. What should you suspect?", ["Heparin-induced thrombocytopenia (HIT)", "Normal dilution", "Warfarin skin necrosis", "TTP from aspirin"], 0, "Heparin can cause HIT."),
      Q("moa", "What does heparin do to an existing clot?", ["Stops it from growing; it does not dissolve it", "Dissolves it within hours", "Turns it into an embolus", "Nothing at all"], 0, "Anticoagulants prevent growth and new clots; tPA is what actively breaks clots down."),
      Q("uses", "Which two drugs are listed for cardiogenic shock from MI to prevent coagulopathy?", ["Aspirin 324 mg and IV heparin", "Warfarin and clopidogrel", "tPA and apixaban", "Cilostazol and aspirin"], 0, "Cardiogenic shock: aspirin 324 mg orally and IV heparin.")
    ]),

    Med("med-enoxaparin", "Enoxaparin (Lovenox, LMWH)", "SQ low-molecular-weight heparin; 1 mg/kg BID; drug of choice in pregnancy", ["Vascular Disease Part 2", "Inpatient & Long-Term Arrhythmia Management"], {
      uses: ul([
        "<strong>VTE in pregnancy: treatment of choice</strong>.",
        "<strong>Bridge to warfarin</strong>: overlap at least <strong>5 days</strong> and until the INR is therapeutic for 24 hours.",
        "<strong>Intermediate-risk (submassive) PE</strong>: LMWH for most; also started right away in high-risk PE while advanced therapy is arranged (held during systemic tPA).",
        "Active cancer VTE (LMWH or a DOAC).",
        "New AF: therapeutic Lovenox <strong>1 mg/kg SQ twice daily</strong>."
      ]),
      moa: "<p>Low-molecular-weight heparin: mainly inhibits factor Xa through antithrombin (standard teaching). <strong>SQ injection with rapid onset</strong>.</p>",
      avoid: ul(["<strong>Late-stage CKD (stage IV–V)</strong>: renally cleared, use UFH instead.", "General anticoagulation contraindications (active bleeding, hemorrhagic stroke, CNS tumors)."]),
      se: ul(["Bleeding, injection-site bruising.", "HIT is possible but less common than with UFH (standard teaching)."]),
      pearls: ul(["Does not cross the placenta, unlike warfarin (standard teaching)."]) +
        HY("Pregnant with a clot → LMWH. Bridging warfarin → LMWH ≥ 5 days and INR therapeutic 24 h.")
    }, [
      Q("uses", "A woman at 24 weeks' gestation has a confirmed DVT. Which anticoagulant?", ["Enoxaparin (LMWH)", "Warfarin", "Rivaroxaban", "Dabigatran"], 0, "LMWH is the treatment of choice in pregnancy; warfarin is not used."),
      Q("pearls", "How long is LMWH overlapped when starting warfarin?", ["At least 5 days and until the INR is therapeutic for 24 hours", "1 day", "Until the INR reaches 1.5", "No overlap needed"], 0, "LMWH runs with warfarin for 5 days until INR is therapeutic for at least 24 hours."),
      Q("avoid", "Which patient should not get enoxaparin?", ["Stage V CKD on dialysis", "Pregnant woman with DVT", "Cancer patient with PE", "Submassive PE with normal kidneys"], 0, "Avoid LMWH in late-stage CKD IV or V."),
      Q("moa", "What is the therapeutic enoxaparin dose used for AF in the hospital?", ["1 mg/kg SQ twice daily", "40 mg SQ once daily", "5000 units IV bolus", "10 mg PO BID"], 0, "Therapeutic Lovenox: 1 mg/kg SQ BID."),
      Q("uses", "A hemodynamically stable PE patient has RV strain on echo and a high troponin. Usual anticoagulant?", ["LMWH", "Systemic tPA", "Aspirin", "No anticoagulation"], 0, "Intermediate-risk PE: LMWH for most; UFH if a procedure is anticipated.")
    ]),

    Med("med-warfarin", "Warfarin (Coumadin, Jantoven)", "Vitamin K antagonist; INR 2–3; the choice when DOACs are not allowed", ["Inpatient & Long-Term Arrhythmia Management", "Vascular Disease Part 2"], {
      uses: ul([
        "AF stroke prevention when a DOAC cannot be used: <strong>mechanical valves, significant native mitral valve disease (valvular AF), ESRD</strong>.",
        "<strong>Antiphospholipid syndrome: warfarin preferred</strong>.",
        "VTE (bridged with LMWH); can be used in renal failure."
      ]),
      moa: "<p>Blocks vitamin K-dependent clotting factor production. <strong>Delayed effect</strong>, so it is bridged with LMWH. Dose-adjusted to an <strong>INR of 2–3</strong>.</p>",
      avoid: ul(["<strong>Pregnancy: not used</strong>.", "Many drug interactions (amiodarone raises the INR)."]),
      se: ul(["Bleeding. <strong>HAS-BLED</strong> estimates the bleeding risk (labile INRs score a point)."]),
      pearls: Tbl(["Warfarin (standard teaching; slide 118 is blank)", ""], [
        ["Advantages", "Cheap, long track record, reversible with vitamin K, works with mechanical valves and ESRD"],
        ["Disadvantages", "INR checks, slow onset (needs a bridge), many food and drug interactions, labile INRs"]
      ]) + HY("Warfarin wins for mechanical valves, mitral disease, ESRD and antiphospholipid syndrome. Never in pregnancy.")
    }, [
      Q("uses", "A patient with AF has a mechanical mitral valve. Which anticoagulant?", ["Warfarin", "Apixaban", "Rivaroxaban", "Dabigatran"], 0, "DOACs cannot be used with mechanical valves or significant mitral disease; warfarin is the drug of choice."),
      Q("uses", "A patient with antiphospholipid syndrome has a DVT. Preferred long-term anticoagulant?", ["Warfarin", "Rivaroxaban", "Aspirin", "Clopidogrel"], 0, "Antiphospholipid syndrome: warfarin preferred."),
      Q("moa", "What INR is targeted with warfarin for AF?", ["2-3", "1-1.5", "3.5-4.5", "No INR is needed"], 0, "Warfarin is dose-adjusted to an INR of 2-3 for AF."),
      Q("avoid", "Why is warfarin not used for VTE in pregnancy?", ["It is not used in pregnancy (it crosses the placenta); LMWH is preferred", "It is too short-acting", "It needs dialysis", "It causes HIT"], 0, "Warfarin is not used in pregnancy; LMWH is the treatment of choice."),
      Q("pearls", "Which is an advantage of warfarin over DOACs?", ["Cheap and reversible with vitamin K", "No monitoring", "No food interactions", "Instant onset"], 0, "Standard teaching (slide 118 is blank): cheap, long experience, vitamin K reversal, works with valves and ESRD."),
      Q("moa", "Why is warfarin bridged with LMWH when treating a DVT?", ["Its effect is delayed", "It is too strong at first", "It only works IV", "To prevent HIT"], 0, "Warfarin has a delayed therapeutic effect, so LMWH covers until the INR is therapeutic.")
    ]),

    Med("med-apixaban", "Apixaban (Eliquis)", "Oral factor Xa inhibitor; 5 mg BID for AF; the DOAC allowed in ESRD", ["Inpatient & Long-Term Arrhythmia Management", "Vascular Disease Part 2"], {
      uses: ul([
        "<strong>Non-valvular AF</strong> stroke prevention (DOACs preferred over warfarin with CHA2DS2-VASc ≥ 2–3).",
        "<strong>DVT/PE</strong>: <strong>10 mg PO BID × 7 days, then 5 mg BID</strong>. Can start in the ED and go home.",
        "Long-term VTE in most patients (factor Xa inhibitors preferred); active cancer (DOAC or LMWH)."
      ]),
      moa: "<p><strong>Direct factor Xa inhibitor</strong>. Oral, onset 1–2 hours, half-life 9–14 hours. No INR monitoring.</p>" +
        Tbl(["AF dose", ""], [["Usual", "<strong>5 mg BID</strong>"], ["Reduce to 2.5 mg BID", "If <strong>2 of 3</strong>: <strong>SCr ≥ 1.5, age ≥ 80, weight ≤ 60 kg</strong>"]]),
      avoid: ul(["Mechanical valves and significant native mitral disease (use warfarin).", "VTE dosing: avoid if CrCl &lt; 15.", "Caution with BMI &gt; 40."]),
      se: ul(["Bleeding.", "Cost ($$$)."]),
      pearls: ul(["<strong>Cautious but acceptable in CKD stage IV–V/ESRD</strong>: the exception among DOACs."]) +
        Mn("Apixaban dose cut", "\"ABC\": Age ≥ 80, Body weight ≤ 60 kg, Creatinine ≥ 1.5 — any 2 → 2.5 mg BID.")
    }, [
      Q("moa", "An 82-year-old woman weighing 55 kg with SCr 1.0 has AF. Apixaban dose?", ["2.5 mg BID", "5 mg BID", "10 mg BID", "20 mg daily"], 0, "Two of three (age ≥ 80, weight ≤ 60 kg) are present, so reduce to 2.5 mg BID."),
      Q("uses", "What is the apixaban regimen for a new DVT?", ["10 mg BID for 7 days, then 5 mg BID", "15 mg BID for 21 days, then 20 mg daily", "5 mg daily", "2.5 mg BID from day 1"], 0, "Apixaban DVT/PE: 10 mg PO BID × 7 days then 5 mg BID."),
      Q("avoid", "Which DOAC is acceptable with caution in ESRD?", ["Apixaban", "Rivaroxaban", "Dabigatran", "Edoxaban"], 0, "Apixaban has cautious but acceptable use in stage IV or V CKD."),
      Q("moa", "What is apixaban's mechanism?", ["Direct factor Xa inhibitor", "Direct thrombin inhibitor", "Vitamin K antagonist", "P2Y12 inhibitor"], 0, "Apixaban and rivaroxaban are factor Xa inhibitors."),
      Q("se", "What is a main downside of DOACs like apixaban compared with warfarin?", ["Cost", "Need for INR checks", "Slow onset", "Many vitamin K food interactions"], 0, "DOACs need no INR monitoring and work fast, but they are costly."),
      Q("avoid", "A patient with AF and severe rheumatic mitral stenosis asks for apixaban. Answer?", ["No: DOACs are for non-valvular AF; use warfarin", "Yes, at 5 mg BID", "Yes, at 2.5 mg BID", "Only with aspirin"], 0, "DOACs may be used only in non-valvular AF (no significant mitral valve disease).")
    ]),

    Med("med-rivaroxaban", "Rivaroxaban (Xarelto)", "Oral factor Xa inhibitor; 20 mg daily with the biggest meal; also for PAD with aspirin", ["Inpatient & Long-Term Arrhythmia Management", "Vascular Disease Part 2", "Vascular Disease Part 1"], {
      uses: ul([
        "<strong>Non-valvular AF</strong>: <strong>20 mg once daily with the largest meal</strong>.",
        "<strong>DVT/PE</strong>: <strong>15 mg BID × 21 days, then 20 mg daily with food</strong>.",
        "<strong>Symptomatic PAD and after revascularization: rivaroxaban + aspirin</strong> lowers cardiovascular and limb events (weigh bleeding risk)."
      ]),
      moa: "<p>Direct <strong>factor Xa inhibitor</strong>; oral, onset 1–2 hours, half-life 5–13 hours. No INR monitoring.</p>",
      avoid: ul(["AF: <strong>GFR 15–50 → 15 mg daily</strong>.", "VTE: avoid if CrCl &lt; 15.", "Mechanical valves, significant mitral valve disease."]),
      se: ul(["Bleeding (more so when combined with aspirin).", "Cost."]),
      pearls: ul(["Must be <strong>taken with food</strong> (largest meal)."]) +
        HY("Xarelto: 20 daily with dinner (AF); 15 BID × 21 d then 20 daily (VTE); + aspirin in PAD.")
    }, [
      Q("moa", "How is rivaroxaban taken for AF?", ["20 mg once daily with the largest meal", "5 mg BID on an empty stomach", "150 mg BID", "60 mg daily"], 0, "Xarelto 20 mg once daily with the largest meal of the day."),
      Q("uses", "What is the rivaroxaban regimen for a new PE?", ["15 mg BID for 21 days, then 20 mg daily with food", "10 mg BID for 7 days, then 5 mg BID", "20 mg daily from day 1", "Only after 5 days of LMWH"], 0, "Rivaroxaban DVT/PE: 15 mg BID × 21 days then 20 mg daily with food."),
      Q("avoid", "A patient with AF has a GFR of 40. Rivaroxaban dose?", ["15 mg daily", "20 mg daily", "2.5 mg BID", "Contraindicated"], 0, "Dose adjust Xarelto when GFR is 15-50: 15 mg daily."),
      Q("uses", "Which anticoagulant is paired with aspirin for symptomatic PAD?", ["Rivaroxaban", "Warfarin", "Dabigatran", "Enoxaparin"], 0, "Rivaroxaban + aspirin reduces CV and limb events in symptomatic PAD and after revascularization."),
      Q("moa", "What is rivaroxaban's half-life?", ["5-13 hours", "Under 10 seconds", "58 days", "36-48 hours"], 0, "Rivaroxaban half-life 5-13 hours; apixaban 9-14 hours.")
    ]),

    Med("med-dabigatran", "Dabigatran (Pradaxa)", "Oral direct thrombin inhibitor; 150 mg BID; has a (costly) reversal agent", ["Inpatient & Long-Term Arrhythmia Management"], {
      uses: ul(["<strong>Non-valvular AF</strong> stroke prevention: <strong>150 mg twice daily</strong>.", "Option for anticoagulation in new AF."]),
      moa: "<p><strong>Direct thrombin (factor IIa) inhibitor</strong> — the only non-Xa DOAC on the list.</p>",
      avoid: ul(["<strong>GFR ≤ 30</strong> (usable until stage IV CKD).", "Mechanical valves, significant mitral disease."]),
      se: ul(["Bleeding; GI upset (standard teaching)."]),
      pearls: ul(["<strong>A reversal agent is available but costly</strong> (idarucizumab, standard teaching name)."]) +
        HY("Dabigatran = thrombin inhibitor, 150 mg BID, avoid GFR ≤ 30.")
    }, [
      Q("moa", "Which DOAC is a direct thrombin inhibitor?", ["Dabigatran", "Apixaban", "Rivaroxaban", "Edoxaban"], 0, "Dabigatran (Pradaxa) is a direct thrombin inhibitor; the others inhibit factor Xa."),
      Q("moa", "What is the AF dose of dabigatran?", ["150 mg twice daily", "20 mg once daily", "5 mg twice daily", "60 mg once daily"], 0, "Dabigatran 150 mg BID."),
      Q("avoid", "Below what GFR is dabigatran avoided?", ["30 or less", "60", "90", "It has no renal limit"], 0, "Dabigatran may be used until stage IV CKD; avoid if GFR ≤ 30."),
      Q("pearls", "What does the lecture say about reversing dabigatran?", ["A reversal agent exists but is costly", "It cannot be reversed", "Vitamin K reverses it", "Protamine reverses it"], 0, "A reversal agent is available for dabigatran, but costly.")
    ]),

    Med("med-edoxaban", "Edoxaban (Savaysa)", "Oral factor Xa inhibitor; 60 mg daily; odd rule: not if GFR ≥ 95", ["Inpatient & Long-Term Arrhythmia Management"], {
      uses: ul(["<strong>Non-valvular AF</strong>: <strong>60 mg once daily</strong>."]),
      moa: "<p>Direct <strong>factor Xa inhibitor</strong>.</p>",
      avoid: ul(["<strong>GFR ≤ 50 → 30 mg daily</strong>.", "<strong>Cannot be used if GFR ≥ 95</strong> (less effective with very high clearance) <strong>or ≤ 30</strong>.", "Mechanical valves, significant mitral disease."]),
      se: ul(["Bleeding."]),
      pearls: ul(["The only drug on the list with an upper kidney-function cutoff."]) +
        HY("Edoxaban: 60 daily, 30 if GFR ≤ 50, none if GFR ≥ 95 or ≤ 30.")
    }, [
      Q("avoid", "A 40-year-old with AF has a GFR of 110. Why not edoxaban?", ["It cannot be used if GFR is 95 or higher", "It is only for GFR under 15", "It is a thrombin inhibitor", "It needs INR checks"], 0, "Edoxaban cannot be used if GFR ≥ 95 or ≤ 30."),
      Q("moa", "What is the standard edoxaban dose for AF?", ["60 mg once daily", "150 mg BID", "20 mg with dinner", "5 mg BID"], 0, "Edoxaban (Savaysa) 60 mg daily; 30 mg daily if GFR ≤ 50."),
      Q("avoid", "A patient on edoxaban has a GFR of 45. Dose?", ["30 mg daily", "60 mg daily", "15 mg daily", "Stop it"], 0, "Dose adjust to 30 mg daily if GFR ≤ 50."),
      Q("moa", "Which class is edoxaban?", ["Factor Xa inhibitor", "Direct thrombin inhibitor", "Vitamin K antagonist", "Antiplatelet"], 0, "Edoxaban is a factor Xa inhibitor.")
    ]),

    Med("med-alteplase", "Alteplase (tPA) & thrombolysis", "Breaks down existing clot; reserved for high-risk (massive) PE", ["Vascular Disease Part 2", "Vascular Disease Part 1"], {
      uses: ul([
        "<strong>High-risk (massive) PE</strong>: persistent hypotension, obstructive shock or cardiac arrest — <strong>systemic thrombolysis is the primary reperfusion option</strong>.",
        "Catheter-directed thrombolysis in selected patients deteriorating toward cardiopulmonary failure.",
        "Intra-arterial thrombolysis is one surgical option in acute limb ischemia."
      ]),
      moa: "<p>Tissue plasminogen activator: turns plasminogen into plasmin, <strong>actively breaking down existing clot</strong> (unlike anticoagulants).</p>",
      avoid: Tbl(["Absolute contraindications", ""], [
        ["Bleeding", "<strong>Any prior intracranial hemorrhage</strong>, <strong>active bleeding</strong>"],
        ["Brain/spine", "<strong>Ischemic stroke within 3 months</strong>, brain or spinal cord tumor, recent brain or spinal surgery, recent head/face trauma with fracture or brain injury"],
        ["Aorta", "<strong>Suspected aortic dissection</strong>"]
      ]) + "<p>Relative: age &gt; 75, current anticoagulation, pregnancy, prolonged CPR &gt; 10 min, recent internal bleeding, BP &gt; 180/110, major surgery within 3 weeks, dementia.</p>",
      se: ul(["<strong>Major bleeding, including intracranial hemorrhage</strong>: why it is saved for severe compromise."]),
      pearls: ul(["Heparin (LMWH) is started right away in high-risk PE but <strong>held during the tPA infusion</strong>.", "If tPA is contraindicated: catheter thrombectomy or surgical embolectomy."]) +
        HY("tPA dissolves; heparin only stops growth. tPA = massive PE with hypotension.")
    }, [
      Q("uses", "A PE patient has a BP of 76/40 despite fluids and RV failure on echo. Which therapy?", ["Systemic thrombolysis with alteplase", "Oral apixaban and discharge", "IVC filter alone", "Aspirin"], 0, "High-risk PE with persistent hypotension: systemic thrombolysis is recommended."),
      Q("avoid", "Which is an absolute contraindication to tPA?", ["Suspected aortic dissection", "Age 70", "Prior DVT", "Atrial fibrillation"], 0, "Absolute: ICH, ischemic stroke within 3 months, suspected dissection, active bleeding, recent head trauma, recent brain/spine surgery, CNS tumor."),
      Q("uses", "A stable PE patient with normal vitals and no RV strain. Is tPA indicated?", ["No: anticoagulate; tPA is reserved for severe hemodynamic compromise", "Yes, always", "Yes, catheter-directed only", "Only if D-dimer is high"], 0, "tPA's bleeding risk restricts it to high-risk PE."),
      Q("pearls", "What happens to the heparin drip during systemic tPA?", ["It is held", "It is doubled", "It is switched to warfarin", "It is given as a bolus"], 0, "Anticoagulation (LMWH) is started immediately but held during systemic tPA."),
      Q("se", "What is tPA's most feared complication?", ["Intracranial hemorrhage", "HIT", "Pulmonary fibrosis", "Lupus"], 0, "Major risk: significant bleeding, including intracranial hemorrhage."),
      Q("moa", "How does tPA differ from heparin?", ["tPA actively breaks down existing clot", "tPA only prevents new clots", "They work the same way", "tPA is an antiplatelet"], 0, "tPA breaks down existing clot; anticoagulants do not dissolve clot.")
    ])
  ]);
}());
