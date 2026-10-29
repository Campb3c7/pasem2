/*
  Medications: Lipid-lowering drugs (Cardio Part 1). Source:
  lipids-dyslipidemia.md slides 63-93. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO_MEDS_LIPIDS = L("meds-lipids", "Lipid-lowering drugs", [

    Med("med-statins", "Statins (HMG-CoA reductase inhibitors)", "Atorvastatin (Lipitor), rosuvastatin (Crestor), simvastatin (Zocor), pravastatin (Pravachol), lovastatin (Mevacor)", ["Lipids & Dyslipidemia"], {
      uses: "<p>First-line drug for high LDL. Lowers LDL about 35% on average, <strong>decreases all-cause mortality</strong>, and limits or even regresses atherosclerosis.</p>" +
        Tbl(["The 4 statin benefit groups (ACC/AHA 2019)", "Intensity"], [
          ["1. Clinical ASCVD (secondary prevention)", "High"],
          ["2. LDL ≥ 190 mg/dL", "High"],
          ["3. Diabetes, age 40–75 (LDL 70–189)", "Moderate"],
          ["4. No DM, age 40–75, LDL 70–189, 10-year ASCVD risk ≥ 7.5%", "Moderate to high"]
        ]) + "<p>There is <strong>no target LDL</strong> in these guidelines.</p>",
      moa: "<p>Inhibit <strong>HMG-CoA reductase</strong>, an enzyme in the cholesterol synthesis pathway, so the <strong>liver makes less cholesterol</strong>. Taken by mouth once a day.</p>",
      avoid: ul([
        "<strong>Pregnancy</strong>: generally stop statins; avoid routine use.",
        "Liver disease: liver enzymes are checked before starting.",
        "Drugs that also affect the liver complicate monitoring: erythromycin, antifungals, immunosuppressants.",
        "<strong>Gemfibrozil + statin</strong> increases muscle toxicity."
      ]),
      se: ul([
        "<strong>Myalgias</strong>: the most common side effect (about 10%).",
        "Myositis (a bit less rare) and <strong>rhabdomyolysis</strong> (rare).",
        "GI upset: stomach upset, flatus, dyspepsia.",
        "<strong>Raised liver enzymes</strong>, liver failure.",
        "<strong>Hyperglycemia</strong> and possibly new-onset diabetes."
      ]),
      pearls: Tbl(["Intensity", "Drugs", "LDL drop"], [
        ["<strong>High</strong>", "Atorvastatin 40–80, rosuvastatin 20–40", "~50%"],
        ["Moderate", "Atorvastatin 10–20, rosuvastatin 5–10, simvastatin 40, pravastatin 40", "30–50%"],
        ["Low", "Simvastatin 10, pravastatin 10–20, lovastatin 20", "&lt; 30%"]
      ]) + ul([
        "Get <strong>ALT/AST/alk phos before starting</strong>; don't stop the statin until enzymes are more than <strong>3x the upper limit of normal</strong>.",
        "Follow up in <strong>4–12 weeks</strong> after starting or changing: adherence, response (fasting lipids), side effects.",
        "<strong>CK is not checked</strong> unless the patient has significant muscle symptoms.",
        "Not at goal: reinforce adherence and lifestyle, look for secondary causes, raise intensity, then add a non-statin."
      ]) + Mn("High-intensity statins", "Only two: “A and R at the top”: Atorvastatin 40–80, Rosuvastatin 20–40")
    }, [
      Q("se", "What is the most common side effect of statins?", ["Myalgias", "Rhabdomyolysis", "Flushing", "Hypertriglyceridemia"], 0, "Myalgias are the most common statin side effect (about 10%); rhabdomyolysis is rare."),
      Q("pearls", "Which statins and doses count as high intensity?", ["Atorvastatin 40-80 mg or rosuvastatin 20-40 mg", "Simvastatin 10 mg or pravastatin 20 mg", "Lovastatin 20 mg", "Atorvastatin 10 mg or rosuvastatin 5 mg"], 0, "High intensity (~50% LDL reduction): atorvastatin 40-80 or rosuvastatin 20-40."),
      Q("uses", "A 58-year-old had a coronary stent placed last year. What statin plan fits?", ["High-intensity statin", "Low-intensity statin", "No statin unless LDL is over 190", "Moderate intensity only if diabetic"], 0, "Clinical ASCVD (secondary prevention) gets a high-intensity statin."),
      Q("uses", "A 50-year-old with type 2 diabetes has an LDL of 120. What statin intensity is recommended?", ["Moderate intensity", "High intensity always", "No statin", "Low intensity"], 0, "Diabetics aged 40-75 with LDL 70-189 get moderate-intensity statin therapy."),
      Q("pearls", "At what liver enzyme level should a statin be stopped?", ["More than 3 times the upper limit of normal", "Any rise above normal", "Twice the upper limit of normal", "Liver enzymes are never a reason to stop"], 0, "Conventional wisdom: no need to stop a statin until enzymes exceed 3x the high end of normal."),
      Q("pearls", "Which lab is NOT routinely checked on statins unless the patient has significant muscle symptoms?", ["CK", "Fasting lipid panel", "ALT/AST", "Baseline liver enzymes"], 0, "CK does not need to be assessed unless significantly symptomatic."),
      Q("moa", "How do statins lower LDL?", ["They inhibit HMG-CoA reductase, so the liver makes less cholesterol", "They block intestinal NPC1L1", "They bind bile acids in the gut", "They inhibit PCSK9"], 0, "Statins inhibit HMG-CoA reductase in the cholesterol synthesis pathway."),
      Q("avoid", "A patient on atorvastatin becomes pregnant. What should happen to the statin?", ["Generally discontinue it", "Increase to high intensity", "Switch to gemfibrozil", "Continue unchanged"], 0, "Statins are generally discontinued during pregnancy; bile acid sequestrants are the lipid drug of choice in pregnancy."),
      Q("avoid", "Which drug combined with a statin most increases the risk of muscle toxicity?", ["Gemfibrozil", "Ezetimibe", "Icosapent ethyl", "Evolocumab"], 0, "Gemfibrozil has been shown to increase statin muscle toxicity."),
      Q("se", "Which metabolic side effect is linked to statins?", ["Hyperglycemia and possible new-onset diabetes", "Hypoglycemia", "Hyperkalemia", "Hypercalcemia"], 0, "Statins carry a risk of hyperglycemia and possibly new-onset DM."),
      Q("pearls", "When should a patient be reassessed after starting a statin?", ["In 4-12 weeks", "In 1 week", "In 1 year", "Only if symptoms develop"], 0, "Assess adherence, response (fasting lipids) and adverse effects 4-12 weeks after starting or changing a statin."),
      Q("uses", "A 45-year-old non-diabetic has LDL 205 mg/dL. Plan?", ["High-intensity statin", "Diet only for 1 year", "Moderate-intensity statin only if ASCVD risk is over 7.5%", "Niacin"], 0, "LDL ≥ 190 is a statin benefit group treated with high intensity regardless of calculated risk.")
    ]),

    Med("med-ezetimibe", "Ezetimibe (Zetia)", "Cholesterol absorption inhibitor; the usual add-on to a statin", ["Lipids & Dyslipidemia"], {
      uses: ul([
        "<strong>Add-on</strong> for more LDL lowering once a statin is maximized (by dose or tolerance).",
        "IMPROVE-IT: in recent ACS, statin + ezetimibe gave a <strong>modest reduction in major CV events</strong>, but <strong>no reduction in CV or all-cause mortality</strong>."
      ]),
      moa: "<p>Blocks cholesterol absorption at the <strong>small-intestine brush border</strong> via the sterol transporter <strong>NPC1L1</strong> (Niemann-Pick C1-Like 1). Less cholesterol enters enterocytes, so less is available for chylomicrons. Lowers LDL about 17%.</p>",
      avoid: ul(["Use with caution in <strong>significant hepatic impairment</strong>."]),
      se: ul(["Rare as monotherapy: some GI symptoms (diarrhea).", "<strong>Raised liver enzymes when combined with a statin</strong>."]),
      pearls: ul(["Dose: 10 mg PO daily.", "Pregnancy category C."]) + HY("Ezetimibe = gut blocker (NPC1L1). Fewer events in IMPROVE-IT, but no mortality benefit.")
    }, [
      Q("moa", "Where does ezetimibe act?", ["NPC1L1 transporter at the small-intestine brush border", "HMG-CoA reductase in the liver", "Bile acids in the gut lumen", "PCSK9 in the plasma"], 0, "Ezetimibe inhibits cholesterol absorption via NPC1L1 at the brush border."),
      Q("uses", "What did IMPROVE-IT show for ezetimibe added to a statin after ACS?", ["Modest reduction in CV events but no mortality reduction", "Large mortality reduction", "No benefit at all", "Increased CV events"], 0, "Adding ezetimibe gave a modest but significant reduction in major CV events, without reducing CV or all-cause mortality."),
      Q("se", "When is ezetimibe most likely to raise liver enzymes?", ["When combined with a statin", "When taken alone", "When taken at night", "In pregnancy"], 0, "Ezetimibe SEs are rare alone; liver enzymes rise when used with statins."),
      Q("uses", "A patient on max-tolerated atorvastatin still needs more LDL lowering. What is a common oral add-on?", ["Ezetimibe", "Niacin", "Gemfibrozil", "Cholestyramine plus gemfibrozil"], 0, "After statin and lifestyle are maximized, consider a non-statin such as ezetimibe."),
      Q("avoid", "Ezetimibe should be used with caution in which condition?", ["Significant hepatic impairment", "Asthma", "Gout", "Hyperkalemia"], 0, "Caution use in significant hepatic impairment."),
      Q("moa", "How much does ezetimibe lower LDL on average?", ["About 17%", "About 50%", "About 70%", "It raises LDL"], 0, "The cholesterol absorption inhibitor lowers LDL about 17%.")
    ]),

    Med("med-pcsk9", "PCSK9 inhibitors", "Evolocumab (Repatha), alirocumab (Praluent); SubQ injections", ["Lipids & Dyslipidemia"], {
      uses: ul([
        "Additional LDL lowering when statin (and lifestyle) are maximized.",
        "<strong>Decrease CV events and mortality</strong>.",
        "<strong>Most potent LDL lowering</strong> of all lipid drugs: 38–72%."
      ]),
      moa: "<p>Blocking PCSK9 lets the liver <strong>clear and recycle LDL particles better</strong> (LDL receptors are not destroyed). Lowers LDL and TG, raises HDL.</p>",
      avoid: ul(["Cost and injections are the main barriers."]),
      se: ul(["Mild <strong>injection site reactions</strong>."]),
      pearls: ul(["Evolocumab: SubQ every 2 weeks or once monthly.", "Alirocumab: SubQ every 2 weeks or once monthly."]) + HY("PCSK9 inhibitor = injection, $$$, strongest LDL drop, lowers events and mortality.")
    }, [
      Q("uses", "Which lipid drug class gives the largest LDL reduction?", ["PCSK9 inhibitors", "Ezetimibe", "Niacin", "Fibrates"], 0, "PCSK9 inhibitors lower LDL 38-72%, the most of any class listed."),
      Q("se", "What is the main side effect of evolocumab?", ["Mild injection site reactions", "Flushing", "Myopathy", "Constipation"], 0, "PCSK9 inhibitors cause some mild injection site reactions."),
      Q("moa", "How do PCSK9 inhibitors lower LDL?", ["Better hepatocyte clearance and recycling of LDL", "Blocking cholesterol synthesis", "Binding bile acids", "Reducing VLDL production"], 0, "PCSK9 inhibition leads to better clearance/recycling of LDL particles in hepatocytes."),
      Q("pearls", "How are alirocumab and evolocumab given?", ["Subcutaneous injection every 2 weeks or monthly", "Daily oral tablet", "IV infusion every 6 months", "Inhaled"], 0, "Both are SubQ, every 2 weeks or once monthly."),
      Q("uses", "Do PCSK9 inhibitors have outcome data?", ["Yes: they decrease CV events and mortality", "No: they only change lab numbers", "They increase mortality", "Only in pregnancy"], 0, "Research shows PCSK9 inhibitors decrease CV events and mortality."),
      Q("avoid", "What usually limits PCSK9 inhibitor use?", ["Cost and the need for injections", "Severe hepatotoxicity", "Rhabdomyolysis", "Hyperglycemia"], 0, "They are injections and expensive.")
    ]),

    Med("med-bile-acid-sequestrants", "Bile acid sequestrants", "Cholestyramine (Questran)", ["Lipids & Dyslipidemia"], {
      uses: ul([
        "Lower LDL (15–30%).",
        "<strong>Lipid drug of choice in pregnancy</strong>.",
        "Decrease coronary events, but <strong>no evidence of mortality benefit</strong>."
      ]),
      moa: "<p>Bind <strong>bile acids</strong> in the gut, increasing fecal excretion of fats and cholesterol. Lowers LDL, raises HDL.</p>",
      avoid: ul(["<strong>High triglycerides</strong>: these drugs raise TG.", "Patients who need other oral meds absorbed on time (interference)."]),
      se: ul([
        "GI: nausea, bloating, cramping, diarrhea or constipation.",
        "<strong>Block absorption of other medications</strong>.",
        "Block absorption of <strong>fat-soluble vitamins</strong> (A, D, E, K).",
        "<strong>Raise triglycerides</strong>."
      ]),
      pearls: HY("Pregnant patient needs a lipid drug → bile acid sequestrant (statins are stopped).")
    }, [
      Q("uses", "Which lipid drug is the medication of choice in pregnancy?", ["Bile acid sequestrant (cholestyramine)", "Atorvastatin", "Ezetimibe", "Fenofibrate"], 0, "Bile acid sequestrants are the medication of choice for dyslipidemia in pregnancy."),
      Q("se", "What effect do bile acid sequestrants have on triglycerides?", ["They raise triglycerides", "They lower triglycerides the most", "No effect", "They lower TG by 50%"], 0, "Bile acid sequestrants increase TGs."),
      Q("se", "A patient on cholestyramine has easy bruising and night blindness. Why?", ["Malabsorption of fat-soluble vitamins", "Statin-induced liver failure", "Platelet destruction", "Hyperkalemia"], 0, "Bile acid sequestrants inhibit absorption of fat-soluble vitamins (A, D, E, K)."),
      Q("moa", "How does cholestyramine lower LDL?", ["It binds bile acids, increasing fecal excretion of fats and cholesterol", "It blocks HMG-CoA reductase", "It blocks NPC1L1", "It decreases hepatic VLDL"], 0, "It binds bile acids in the gut, leading to more fecal excretion of cholesterol."),
      Q("se", "Why can cholestyramine make other medications fail?", ["It interferes with their absorption", "It induces liver enzymes", "It increases renal clearance", "It displaces them from albumin"], 0, "Bile acid sequestrants complicate the absorption of other medications."),
      Q("uses", "What outcome benefit do bile acid sequestrants have?", ["Fewer coronary events but no mortality benefit", "Proven mortality benefit", "No outcome data at all", "Increased mortality"], 0, "They decrease coronary events, but there is no evidence of mortality benefit.")
    ]),

    Med("med-fibrates", "Fibrates (fibric acid derivatives)", "Fenofibrate (Fibricor), gemfibrozil (Lopid)", ["Lipids & Dyslipidemia"], {
      uses: ul([
        "<strong>Only when there is a hypertriglyceridemia component</strong>.",
        "<strong>Biggest TG drop</strong> (35–53%) and raise HDL.",
        "No significant improvement in CV events or mortality in general populations."
      ]),
      moa: "<p>Mechanism not well understood. Lower TG and raise HDL.</p>",
      avoid: ul(["<strong>Hepatic impairment</strong>: contraindicated.", "<strong>Gemfibrozil with a statin</strong>: more muscle toxicity.", "<strong>Fenofibrate with warfarin</strong> (Coumadin): interaction."]),
      se: ul(["Liver enzyme rise (monitor ALT).", "Muscle toxicity with statins (gemfibrozil)."]),
      pearls: HY("Fibrates = TG drug. Gemfibrozil + statin = muscle. Fenofibrate + warfarin = interaction.")
    }, [
      Q("uses", "When are fibrates indicated?", ["When hypertriglyceridemia is part of the picture", "As first line for high LDL", "For all diabetics", "To raise LDL"], 0, "Fibrates are not indicated unless there is a hypertriglyceridemia component."),
      Q("avoid", "Which fibrate increases muscle toxicity when combined with a statin?", ["Gemfibrozil", "Fenofibrate", "Both equally and never with statins", "Neither"], 0, "Gemfibrozil has been shown to increase statin muscle toxicity."),
      Q("avoid", "A patient on warfarin is started on a fibrate. Which interaction matters?", ["Fenofibrate can interact with warfarin", "Gemfibrozil blocks warfarin absorption", "Fibrates reverse warfarin", "There is no interaction"], 0, "Fenofibrate can interact with Coumadin (warfarin)."),
      Q("avoid", "In which patients are fibrates contraindicated?", ["Hepatic impairment", "Asthma", "Hypothyroidism", "Gout"], 0, "Monitor ALTs; fibrates are contraindicated in hepatic impairment."),
      Q("uses", "Which lipid drug class gives the largest triglyceride drop?", ["Fibrates", "Bile acid sequestrants", "Ezetimibe", "PCSK9 inhibitors"], 0, "Fibrates lower TG 35-53%."),
      Q("uses", "Do fibrates improve CV outcomes in the general population?", ["No significant evidence of improved events or mortality", "Yes, large mortality reduction", "Yes, but only with niacin", "They worsen outcomes"], 0, "There is no significant evidence of improved CV event or mortality outcomes in general populations.")
    ]),

    Med("med-niacin", "Niacin (vitamin B3)", "Raises HDL the most; flushing is the classic side effect", ["Lipids & Dyslipidemia"], {
      uses: ul(["Goal: <strong>raise HDL</strong> (15–35%, the most of any class).", "<strong>No evidence of improved event or mortality outcomes</strong>."]),
      moa: "<p>Mechanism not well understood.</p>",
      avoid: ul(["Diabetes or insulin resistance (worsens it).", "Liver disease (hepatotoxic)."]),
      se: ul([
        "<strong>Flushing</strong>, tachycardia, pruritus, especially with the immediate-release form. <strong>Aspirin 81 mg</strong> beforehand reduces flushing.",
        "Nausea, vomiting, diarrhea.",
        "<strong>Hepatotoxicity</strong>.",
        "<strong>Worsened insulin resistance</strong>."
      ]),
      pearls: HY("Niacin: raises HDL, causes flushing (pre-treat with aspirin), no outcome benefit.")
    }, [
      Q("se", "A patient on immediate-release niacin has red, itchy, warm skin after each dose. How can it be reduced?", ["Take aspirin 81 mg with it", "Take it with grapefruit juice", "Add a statin", "Switch to cholestyramine at the same time"], 0, "Niacin flushing, tachycardia and pruritus may be reduced with ASA 81 co-administration."),
      Q("uses", "Which lipid drug raises HDL the most?", ["Niacin", "Ezetimibe", "PCSK9 inhibitor", "Bile acid sequestrant"], 0, "Niacin raises HDL 15-35%."),
      Q("se", "Why is niacin a poor choice in a patient with poorly controlled diabetes?", ["It worsens insulin resistance", "It causes hypoglycemia", "It raises potassium", "It blocks metformin"], 0, "Niacin worsens insulin resistance."),
      Q("uses", "What do outcome studies show for niacin?", ["No improvement in events or mortality", "Large mortality reduction", "Fewer strokes only", "Increased HDL and fewer MIs"], 0, "Niacin has no evidence of improved event or mortality outcomes."),
      Q("se", "Which organ toxicity is a concern with niacin?", ["Hepatotoxicity", "Ototoxicity", "Nephrolithiasis", "Pulmonary fibrosis"], 0, "Niacin side effects include hepatotoxicity."),
      Q("se", "Which form of niacin causes the most flushing?", ["Immediate-release", "Extended-release", "IV form", "All forms equally"], 0, "Flushing, tachycardia and pruritus are especially seen with the immediate-release form.")
    ]),

    Med("med-omega3", "Omega-3 fatty acids", "Icosapent ethyl (Vascepa, EPA only), omega-3-acid ethyl esters (Lovaza, EPA + DHA)", ["Lipids & Dyslipidemia"], {
      uses: ul([
        "<strong>Lower triglycerides</strong> 20–45% (prescription 4 g/day).",
        "<strong>Vascepa</strong> reduced major CV events in selected high-risk patients already on a statin. Not shown for Lovaza or OTC fish oil."
      ]),
      moa: "<p>Decrease <strong>hepatic VLDL production</strong>, lowering triglycerides.</p>",
      avoid: ul(["Bleeding risk (anticoagulants).", "Atrial fibrillation risk."]),
      se: ul(["GI upset.", "<strong>Increased risk of atrial fibrillation</strong>.", "Possible increased bleeding risk."]),
      pearls: ul(["Both are dosed 2 g PO twice daily.", "Dietary omega-3s (fish, nuts) are encouraged as protective."]) + HY("Vascepa (EPA only) is the one with CV outcome benefit, on top of a statin.")
    }, [
      Q("uses", "Which omega-3 product has shown reduced major CV events in high-risk patients on a statin?", ["Icosapent ethyl (Vascepa)", "Lovaza", "OTC fish oil", "None of them"], 0, "Vascepa demonstrated reduced MACE in selected high-risk statin-treated patients; not established for Lovaza or OTC fish oil."),
      Q("moa", "How do omega-3 fatty acids lower triglycerides?", ["They decrease hepatic VLDL production", "They bind bile acids", "They inhibit HMG-CoA reductase", "They block NPC1L1"], 0, "Omega-3s decrease hepatic VLDL production."),
      Q("se", "Which arrhythmia is more likely with prescription omega-3s?", ["Atrial fibrillation", "Torsades de pointes", "Complete heart block", "Ventricular fibrillation"], 0, "Omega-3 SEs: GI upset, increased risk of AFib, possible bleeding risk."),
      Q("pearls", "What is the difference between Vascepa and Lovaza?", ["Vascepa is EPA only; Lovaza is EPA + DHA", "Vascepa is DHA only", "Lovaza is a statin combination", "They are identical"], 0, "Icosapent ethyl is EPA-only; omega-3-acid ethyl esters (Lovaza) are EPA + DHA."),
      Q("uses", "By about how much can prescription omega-3s (4 g/day) lower triglycerides?", ["20-45%", "60-80%", "5%", "They raise TG"], 0, "Prescription omega-3s can reduce TG by roughly 20-45%."),
      Q("avoid", "Which concern applies to a patient on warfarin who starts high-dose fish oil?", ["Possible increased bleeding", "Hyperkalemia", "Rhabdomyolysis", "Hypoglycemia"], 0, "Omega-3s may increase bleeding risk.")
    ])
  ]);
}());
