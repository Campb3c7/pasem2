/* Hallmarks: CAD Part II (Prevention, Stager). Source: source-material/cardio-part-3/text/cad-part-2.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("cad-part-2", "CAD Part II: Prevention", [

    C("hm-severe-hchol", "Severe hypercholesterolemia", "LDL-C 190 or higher: its own treatment category.",
      "LDL ≥190 = start lipid-lowering without a risk calculator and think familial hypercholesterolemia.", [
        ["labs", "LDL-C ≥190 mg/dL", "LDL-C ≥190 is the distinct severe hypercholesterolemia category."],
        ["tx", "Start lipid-lowering therapy without relying on calculated risk", "The LDL is high enough that PREVENT is not needed to decide."],
        ["dx", "Evaluate for familial hypercholesterolemia", "An LDL this high suggests an inherited cause."]
      ]),

    C("hm-lpa", "Elevated lipoprotein(a)", "An inherited LDL-like particle with apolipoprotein(a) attached.",
      "Lp(a) = the inherited risk particle; check it once in every adult.", [
        ["labs", "Lp(a) ≥125 nmol/L (≥50 mg/dL)", "That is the cutoff where Lp(a) becomes a risk enhancer."],
        ["cause", "Levels are mostly genetically determined", "Lifestyle barely changes Lp(a), which is why it is measured once."],
        ["buzz", "Think: inherited risk particle", "The slide's memory hook for Lp(a) versus ApoB."],
        ["danger", "Very high (≥250 nmol/L) roughly doubles ASCVD risk", "Higher Lp(a) means more aggressive LDL lowering and risk factor control."]
      ], { x: ["hm-apob"] }),

    C("hm-apob", "Elevated ApoB", "Too many atherogenic particles, even if the LDL-C looks fine.",
      "ApoB = particle number; high ApoB with high TGs, diabetes or CKM means LDL-C underestimates risk.", [
        ["labs", "ApoB ≥120 mg/dL", "ApoB ≥120 is the 2026 risk-enhancing cutoff."],
        ["buzz", "Think: particle number (one ApoB per LDL, VLDL, IDL and Lp(a) particle)", "Each atherogenic particle carries exactly one ApoB."],
        ["who", "High triglycerides, diabetes or CKM syndrome where LDL-C underestimates risk", "In these patients particle count rises more than LDL-C does."]
      ], { x: ["hm-lpa"] }),

    C("hm-hscrp", "Elevated hs-CRP (inflammatory risk)", "Systemic inflammation as an ASCVD risk enhancer.",
      "hs-CRP ≥2 twice with no other cause in a borderline-risk adult = a high-intensity statin can help.", [
        ["labs", "hs-CRP ≥2 mg/L on two separate occasions with no other cause", "Two elevated values without an infection or flare mean chronic inflammation."],
        ["who", "Borderline PREVENT risk (3% to <5%) adult without ASCVD", "That is the group where hs-CRP can tip the statin decision."],
        ["tx", "High-intensity statin can be useful", "Statins lower events in people with high inflammatory risk."],
        ["who", "RA, SLE or advanced psoriasis", "Chronic inflammatory diseases are listed risk enhancers too."]
      ]),

    C("hm-diabetes-cv", "Diabetes (CV risk)", "A gateway disease that triples down on ASCVD risk.",
      "A1c ≥6.5 = diabetes; ages 40-75 get a statin regardless of PREVENT; add GLP-1 RA or SGLT2i if ASCVD, HF or CKD.", [
        ["labs", "A1c ≥6.5%, fasting glucose ≥126, or 2-hour OGTT ≥200", "Those are the diagnostic criteria on the slide."],
        ["tx", "Ages 40-75: lipid-lowering therapy regardless of PREVENT risk", "Diabetes alone is an independent statin indication."],
        ["tx", "GLP-1 RA and/or SGLT2 inhibitor if ASCVD, HF or CKD, regardless of A1c", "These drugs have proven heart and kidney benefit."],
        ["danger", "Higher risk with ≥10 years of T2DM, UACR ≥30, eGFR <60, retinopathy, neuropathy, ABI <0.9", "These features mark diabetes that is already damaging vessels."]
      ], { x: ["hm-prediabetes"] }),

    C("hm-prediabetes", "Prediabetes", "Glucose above normal but below diabetes range.",
      "A1c 5.7-6.4% = prediabetes: push lifestyle now.", [
        ["labs", "A1c 5.7-6.4%", "That range sits between normal and the 6.5% diabetes cutoff."],
        ["tx", "Lifestyle changes: diet, 150 minutes a week of exercise, weight loss", "Lifestyle makes the biggest impact on ASCVD risk."],
        ["buzz", "A1c reflects average glucose over 2-3 months", "The red cell lifespan sets the A1c window."]
      ], { x: ["hm-diabetes-cv"] }),

    C("hm-osa", "Obstructive sleep apnea", "Repeated airway collapse at night that drives CV risk.",
      "Snoring, apneas, intermittent hypoxemia, sympathetic surges, then pulmonary HTN and cor pulmonale.", [
        ["cause", "Recurrent upper-airway obstruction during sleep with oxygen drops", "Each collapse causes intermittent hypoxemia."],
        ["test", "Each episode triggers sympathetic activation: higher HR and BP", "Brief arousals restore breathing but surge sympathetic tone."],
        ["danger", "RV hypertrophy, pulmonary hypertension, then cor pulmonale", "Untreated, the RV fails from chronic pulmonary pressure."],
        ["tx", "CPAP or BiPAP every night", "Nightly positive pressure keeps the airway open."]
      ]),

    C("hm-alcohol", "Unhealthy alcohol use", "Drinking above the limits that raise CV risk and BP.",
      "Binge ≥4 (women)/≥5 (men) per occasion; heavy ≥8/week (women) or ≥15/week (men).", [
        ["cutoff", "Binge: ≥4 drinks (women) or ≥5 (men) on one occasion", "Those are the slide's binge cutoffs."],
        ["cutoff", "Heavy: ≥8 drinks a week (women) or ≥15 a week (men)", "Those are the slide's heavy-drinking cutoffs."],
        ["tx", "For BP, abstinence is the optimal goal; otherwise ≤1/day women, ≤2/day men", "The 2025 BP guideline recommends abstinence first."],
        ["buzz", "One drink = 12 oz beer, 5 oz wine, 1.5 oz liquor", "Patients easily exceed a 'drink' without realizing."]
      ]),

    C("hm-tobacco", "Tobacco use", "The number one modifiable thing to fix.",
      "Smoking raises ASCVD risk 2-3x; risk falls 50% within 2 years of quitting; ask every visit.", [
        ["danger", "Raises ASCVD risk 2-3 times", "Smoking accelerates atherosclerosis and thrombosis."],
        ["timing", "Risk drops 50% within 2 years of quitting", "The benefit of quitting comes fast."],
        ["tx", "Adjuncts (nicotine replacement, bupropion, varenicline) double the success rate", "Medication plus counseling works better than willpower alone."],
        ["buzz", "Ask, Advise, Connect (or the 5 A's) at every visit", "Smoking cessation is addressed at every visit."]
      ]),

    C("hm-risk-enhancers-repro", "Reproductive risk enhancers", "Pregnancy and menopause history that raises a woman's ASCVD risk.",
      "Preeclampsia, gestational DM/HTN, preterm delivery, menopause before 40 = higher ASCVD risk.", [
        ["who", "Preeclampsia, gestational diabetes or gestational hypertension", "These pregnancy complications are listed risk enhancers."],
        ["who", "Premature menopause before age 40", "Early loss of estrogen raises ASCVD risk."],
        ["who", "Preterm delivery", "Preterm delivery is on the slide's reproductive risk list."]
      ])
  ], {
    labs: ["hm-severe-hchol", "hm-lpa", "hm-apob", "hm-hscrp", "hm-diabetes-cv", "hm-prediabetes"],
    habits: ["hm-osa", "hm-alcohol", "hm-tobacco", "hm-risk-enhancers-repro"]
  });
}());
