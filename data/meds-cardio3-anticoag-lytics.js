/*
  Medications: Anticoagulants & fibrinolytics (Cardio Part 3). Source:
  cad-part-5.md slides 59, 71-73, 81-83; cad-part-4.md slides 25, 41-44, 81;
  cad-part-3.md slide 248 (Thomas heparin gtt); coronary-angiogram.md slides 7,
  sheath removal; cardiac-surgery.md slide on tPA. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO3_MEDS_ANTICOAG = L("meds3-anticoag", "Anticoagulants & fibrinolytics", [

    Med("med3-ufh", "Unfractionated heparin (UFH) drip", "IV drip titrated to PTT or anti-Xa; the anticoagulant when the patient is going to the cath lab", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Cardiac Testing"], {
      uses: ul(["NSTEMI and STEMI: start in the ER <strong>as soon as the MI is identified</strong>.", "<strong>Preferred when a left heart cath (LHC) is planned</strong>: it can be titrated and turned off quickly.",
        "After <strong>fibrinolysis</strong>: UFH, LMWH or fondaparinux for at least <strong>48 h, up to 8 days</strong>, so small clots do not re-block the artery as the main clot lyses."]),
      moa: "<p>Anticoagulant: inhibits clotting factors and fibrin formation (antithrombin-mediated, standard teaching) → stops clot <strong>propagation</strong> and prevents further thrombin activation of platelets and factors. It does not dissolve an existing clot.</p>",
      avoid: ul(["Active bleeding, severe coagulopathy.", "History of HIT (standard teaching)."]),
      se: ul(["Bleeding (access site, retroperitoneal).", "Thrombocytopenia / HIT (standard teaching)."]),
      pearls: ul(["Titrated with <strong>PTT or anti-Xa</strong> levels.", "The femoral sheath stays in until heparin is below its peak effect (about 4 h after the last dose).", "Protamine reverses it (standard teaching)."]) +
        HY("Going to cath = heparin drip. Not going to cath = enoxaparin.")
    }, [
      Q("uses", "NSTEMI with a cath planned for tomorrow morning. Which anticoagulant fits best?", ["Unfractionated heparin drip", "Enoxaparin 1 mg/kg SQ q12h", "Alteplase", "Warfarin"], 0, "A heparin drip can be titrated and stopped right before the procedure, which limits bleeding."),
      Q("moa", "What does heparin do in ACS?", ["Stops the clot from growing by blocking fibrin formation", "Dissolves the existing clot", "Blocks platelet COX-1", "Dilates the coronary artery"], 0, "Anticoagulants prevent propagation; only fibrinolytics break down fibrin already formed."),
      Q("uses", "After tenecteplase for STEMI, how long is anticoagulation continued?", ["At least 48 hours and up to 8 days", "Only during the infusion", "12 hours", "Lifelong"], 0, "As the clot lyses, small new clots can form, so anticoagulation covers the first days."),
      Q("pearls", "How is a heparin drip monitored?", ["PTT or anti-Xa levels", "INR", "Platelet function assay", "Troponin"], 0, "PTT or anti-Xa shows how strongly UFH is working, so the drip can be adjusted."),
      Q("pearls", "When can the femoral sheath come out after a cath on heparin?", ["Once heparin is below its peak, usually about 4 hours after the last dose", "Immediately, regardless of heparin", "After 48 hours", "Only once INR is above 3"], 0, "Pulling it at peak anticoagulation risks a hematoma or retroperitoneal bleed.")
    ]),

    Med("med3-enoxaparin", "Enoxaparin (Lovenox, LMWH)", "1 mg/kg SQ every 12 h; used when NO cath is planned", ["CAD Part IV: ACS", "CAD Part V: Pharmacology"], {
      uses: ul(["NSTEMI/UA when <strong>no LHC is anticipated</strong> (selective/conservative strategy).", "Therapeutic dose <strong>1 mg/kg SQ q12h</strong>.", "One of the options after fibrinolysis (with UFH or fondaparinux)."]),
      moa: "<p>Low-molecular-weight heparin: mostly anti-factor Xa (standard teaching) → less thrombin and fibrin → stops clot extension.</p>",
      avoid: ul(["Planned cath: its effect lasts hours and cannot be titrated, so UFH is preferred.", "Severe renal failure: accumulates; dose adjust (standard teaching).", "Active bleeding."]),
      se: ul(["Bleeding, injection-site bruising.", "Thrombocytopenia (less than UFH, standard teaching)."]),
      pearls: ul(["No routine PTT monitoring (standard teaching)."]) + HY("Lovenox = no cath planned.")
    }, [
      Q("uses", "A 90-year-old with NSTEMI and dementia chooses medical management; no cath is planned. Anticoagulant?", ["Enoxaparin 1 mg/kg SQ every 12 hours", "Heparin drip for the cath", "Alteplase", "No anticoagulant ever in NSTEMI"], 0, "Without a planned procedure, twice-daily SQ LMWH is simpler and effective."),
      Q("avoid", "Why is enoxaparin avoided when an urgent cath is planned?", ["It cannot be titrated or turned off quickly, raising procedure bleeding", "It does not work in men", "It dissolves stents", "It raises troponin"], 0, "SQ LMWH keeps working for hours, so the access site bleeds more."),
      Q("uses", "What is the therapeutic enoxaparin dose in ACS?", ["1 mg/kg SQ every 12 hours", "40 mg SQ daily", "5,000 units IV once", "1 mg/kg IV once a week"], 0, "1 mg/kg twice daily is the treatment dose; 40 mg daily is a DVT-prevention dose (standard teaching)."),
      Q("moa", "Enoxaparin belongs to which drug type?", ["Anticoagulant", "Antiplatelet", "Fibrinolytic", "Vasodilator"], 0, "LMWH slows the fibrin mesh, while antiplatelets act on the platelet plug.")
    ]),

    Med("med3-fibrinolytics", "Fibrinolytics (alteplase, tenecteplase)", "STEMI only, when PCI cannot happen within 120 min; within 12 h of onset; door-to-needle 30 min", ["CAD Part IV: ACS", "CAD Part V: Pharmacology", "Cardiac Surgery"], {
      uses: ul(["<strong>STEMI only</strong> (never NSTEMI/UA).", "When <strong>PCI cannot be done within 120 minutes</strong> (first medical contact to device).", "Patient eligible and generally <strong>within 12 h of symptom onset</strong>.",
        "Goal <strong>door-to-needle ≤30 min</strong>.", "Then <strong>transfer to a PCI-capable hospital</strong> (pharmacoinvasive strategy), with UFH/LMWH/fondaparinux 48 h to 8 days."]),
      moa: "<p>Activates plasminogen → <strong>plasmin</strong> → breaks down <strong>fibrin</strong> in an existing clot (dissolves the mesh). Limits infarct size, improves LV function and lowers mortality, but is <strong>far inferior to PCI</strong>.</p>",
      avoid: ul(["NSTEMI or unstable angina.", "More than 12 h since onset.", "Timely PCI is available.", "Bleeding risk: prior intracranial hemorrhage, recent ischemic stroke, active bleeding, suspected aortic dissection, recent major surgery or head trauma (standard teaching list: check eligibility every time)."]),
      se: ul(["<strong>Bleeding</strong>, including <strong>intracranial hemorrhage</strong>: PCI has a lower ICH and re-infarction risk."]),
      pearls: Tbl(["Target", "Time", "Clock starts"], [["Door to ECG", "≤10 min", "Hospital arrival"], ["Primary PCI", "≤90 min (≤120 if transfer)", "First medical contact"], ["Fibrinolysis", "≤30 min door-to-needle", "Hospital arrival"]]) +
        HY("Lytics: STEMI + no PCI within 120 min + under 12 h. Then transfer anyway.")
    }, [
      Q("uses", "STEMI at a rural hospital; nearest cath lab is 3 hours away; symptoms began 2 hours ago; no contraindications. Best plan?", ["Fibrinolytic within 30 minutes, then transfer to a PCI center", "Transfer for primary PCI only", "Heparin alone and observe", "Wait for troponin"], 0, "PCI cannot happen within 120 minutes, so lysis now saves muscle, and transfer follows."),
      Q("avoid", "NSTEMI with troponin 2,000 and ST depression. A colleague suggests alteplase. Correct?", ["No: fibrinolytics are only for STEMI", "Yes, give it now", "Yes, if pain persists", "Only half-dose"], 0, "Fibrinolytics have shown benefit only in STEMI, where an occlusive fibrin-rich clot is the problem."),
      Q("moa", "How does alteplase work?", ["Converts plasminogen to plasmin, which breaks down fibrin", "Blocks P2Y12", "Inhibits thrombin directly", "Blocks COX-1"], 0, "Plasmin digests fibrin, so the existing clot dissolves."),
      Q("uses", "A STEMI patient presents 18 hours after pain started; PCI is 4 hours away. Fibrinolytic?", ["Generally no: past the 12-hour window", "Yes, always", "Yes, double dose", "Only tenecteplase"], 0, "Benefit fades as muscle dies and bleeding risk stays, so lysis is generally within 12 hours."),
      Q("pearls", "What is the door-to-needle goal for fibrinolysis?", ["30 minutes or less", "90 minutes", "120 minutes", "12 hours"], 0, "Every minute of occlusion kills muscle, so lysis must start fast when PCI is not possible."),
      Q("uses", "Why is PCI preferred to fibrinolysis when it can be done in time?", ["Better outcomes with less re-infarction and intracranial hemorrhage", "It is cheaper", "It needs no anticoagulant", "It works for NSTEMI too"], 0, "Mechanical reperfusion opens the artery more reliably without systemic fibrin breakdown.")
    ])
  ]);
}());
