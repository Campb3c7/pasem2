/* Exam prep, CAD Part II (Stager). Rebuilt 2026-11-22 round 2: short AI-style prevention cases (PREVENT category ->
   statin decision, CAC, enhancers), her application's prevention case in short form, and the numbers she can ask
   (LDL cutoffs, A1c goals, drink limits, smoking adjunct details). See data/exam-prep.js. */
(function () {
  "use strict";
  var X = ExamPrep.X;
  ExamPrep.lecture({
    id: "cad-part-2", title: "CAD Part II: Prevention", short: "CAD II", group: "CAD",
    concepts: {
      prim: "Primary vs secondary prevention (LO 1)",
      prevent: "PREVENT-ASCVD: who, what it adds, risk categories (LO 2)",
      life: "Lifestyle: diet, exercise, sleep (LO 3)",
      statin: "Who gets a statin and which intensity (LO 4)",
      enhance: "Risk enhancers: Lp(a), ApoB, hsCRP, CAC (LO 4)",
      dm: "Diabetes targets and drugs (LO 5)",
      other: "BP, OSA, alcohol (LO 5)",
      smoke: "Smoking cessation and adjuncts (LO 5)",
      aspirin: "Aspirin for primary prevention (LO 6)",
      plan: "Putting a plan together (LO 7)"
    },
    qs: [
      /* LO 1 */
      X("prim", "Classify", 2, "Starting a statin in a 50-year-old with high LDL and no known vascular disease is what kind of prevention?", "Primary prevention", ["Secondary prevention", "Tertiary prevention", "Not prevention at all"], "Primary prevention stops CAD from developing in someone without it."),
      X("prim", "Classify", 2, "High-intensity statin after an MI is what kind of prevention?", "Secondary prevention", ["Primary prevention", "Screening", "Risk calculation"], "Secondary prevention reduces recurrent events in patients who already have ASCVD."),
      X("prim", "Fact", 4, "Which 25-year-old should be considered for earlier lipid-lowering treatment?", "LDL of 170 with a strong family history", ["LDL of 95 and no family history", "HDL of 65 and runs daily", "Normal panel, mild obesity"], "Consider earlier treatment in young adults with LDL-C 160 or more or a strong family history."),

      /* LO 2 */
      X("prevent", "Fact", 6, "What is the preferred risk calculator as of the 2026 update?", "PREVENT-ASCVD", ["Pooled Cohort Equations", "Framingham score", "CHA2DS2-VASc"], "PREVENT-ASCVD replaced the PCE as the preferred calculator for lipid decisions."),
      X("prevent", "Fact", 6, "Which ages get a 10-year PREVENT-ASCVD risk, and which get a 30-year?", "10-year: 30-79; 30-year: 30-59", ["10-year: 20-79; 30-year: 20-39", "10-year: 40-75; 30-year: 60-79", "10-year: 18-99; 30-year: never"], "The 10-year estimate is for ages 30-79 and the 30-year for ages 30-59."),
      X("prevent", "Compare", 7, "Which two factors are in the PREVENT base equations but not the PCE?", "eGFR and BMI", ["Age and sex", "Smoking and diabetes", "Total cholesterol and HDL"], "PREVENT adds kidney function and BMI, with UACR, A1c and social deprivation as optional."),
      X("prevent", "Why", 10, "A diabetic with a normal eGFR has albuminuria. Why add UACR to PREVENT?", "It shows kidney damage before the eGFR falls", ["It replaces the need for a lipid panel", "It measures glucose over 3 months", "It lowers the patient's estimated risk"], "UACR detects kidney damage early, which adds cardiovascular risk."),
      X("prevent", "Fact", 11, "What does PREVENT's optional social deprivation index use?", "The patient's ZIP code", ["The patient's income tax return", "The patient's insurance type", "The patient's education level"], "It reflects area-level access, resources, education and housing by ZIP code."),
      X("prevent", "Trap", 12, "In which patient should PREVENT NOT be the main decision tool?", "Prior MI with a stent", ["Age 45, no known CVD", "Age 60, LDL 150, no CVD", "Age 35, family history only"], "Don't use PREVENT with known CVD, CAC 300 or more, ESKD, life expectancy under a year or inherited high-risk conditions."),
      X("prevent", "Classify", 13, "10-year PREVENT-ASCVD risk of 4.4%. Which category?", "Borderline", ["Low", "Intermediate", "High"], "Under 3% is low, 3 to under 5% borderline, 5 to under 10% intermediate, 10% or more high."),
      X("prevent", "Classify", 13, "10-year PREVENT-ASCVD risk of 7%. Which category?", "Intermediate", ["Low", "Borderline", "High"], "5% to under 10% is intermediate."),
      X("prevent", "Classify", 13, "10-year PREVENT-ASCVD risk of 12%. Which category?", "High", ["Intermediate", "Borderline", "Low"], "10% or more is high risk, where lipid-lowering therapy is recommended."),

      /* LO 3 */
      X("life", "Fact", 17, "How much aerobic activity is recommended per week?", "150 min moderate or 75 min vigorous", ["30 min moderate total", "300 min vigorous minimum", "60 min of any activity"], "Plus muscle strengthening at least 2 days a week."),
      X("life", "Fact", 17, "How much sleep should adults aim for?", "7-9 hours", ["4-5 hours", "5-6 hours", "10-12 hours"], "7 to 9 hours a night; 1 in 3 adults gets under 7."),
      X("life", "Fact", 16, "Which swap fits a heart-healthy diet?", "Olive oil and nuts for butter", ["Processed meat for fish", "Soda for water", "Whole milk for skim"], "Replace saturated fats with unsaturated fats and limit processed meats, sodium and added sugar."),
      X("life", "Fact", 21, "Which is an antiatherogenic effect of regular exercise?", "Higher HDL and lower triglycerides", ["Higher LDL and BP", "Less insulin sensitivity", "More abdominal fat"], "Exercise lowers BP, TGs and belly fat, raises HDL and improves insulin sensitivity."),
      X("life", "Fact", 18, "How much moderate-to-vigorous activity does the average US adult get a day?", "About 12 minutes", ["About 2 hours", "About 1 hour", "None at all"], "About 0.2 hours a day, with over 7 hours sedentary."),

      /* LO 4 */
      X("statin", "Fact", 22, "Which statin doses are high intensity?", "Atorvastatin 40-80 or rosuvastatin 20-40", ["Atorvastatin 10-20 or rosuvastatin 5-10", "Simvastatin 20 or pravastatin 10", "Lovastatin 20 or pravastatin 20"], "High intensity is atorvastatin 40-80 mg or rosuvastatin 20-40 mg."),
      X("statin", "Classify", 22, "Simvastatin 40 mg is which intensity?", "Moderate", ["High", "Low", "Very high"], "Atorva 10-20, rosuva 5-10, lova 40, prava 40 and simva 40 are moderate intensity."),
      X("statin", "Pick the drug", 23, "Patient with a prior ischemic stroke and LDL of 85. Which statin plan?", "High-intensity statin", ["No statin, LDL is under 100", "Low-intensity statin", "Moderate only if LDL rises"], "All clinical ASCVD gets high-intensity statin regardless of the lipid panel."),
      X("statin", "Case", 24, "38-year-old with LDL of 205 and no other risk factors. What next?", "Start lipid-lowering, check for FH", ["Calculate PREVENT first", "Lifestyle only, recheck in 5 years", "Order a CAC score first"], "LDL 190 or more gets therapy without relying on calculated risk."),
      X("statin", "Case", 24, "52-year-old with type 2 diabetes, LDL 110, PREVENT 4%. Statin?", "Yes, diabetes ages 40-75 gets one", ["No, risk is only borderline", "Only if LDL is over 190", "Only if CAC is over 100"], "Diabetes, stage 3-4 CKD and HIV at ages 40-75 get therapy regardless of PREVENT."),
      X("statin", "Case", 26, "60-year-old with LDL of 140, no ASCVD, no diabetes. How do you decide on a statin?", "Calculate PREVENT-ASCVD", ["Start high intensity right away", "No statin until LDL tops 190", "Order an angiogram"], "For LDL 70-189 without ASCVD, PREVENT-ASCVD guides primary prevention."),
      X("statin", "Compare", 27, "How does the statin recommendation change from borderline to high PREVENT risk?", "Borderline: may consider; high: recommended", ["Borderline: recommended; high: may consider", "Both: no statin needed", "Both: high intensity always"], "Borderline may consider, intermediate should consider, high risk is recommended."),
      X("statin", "Fact", 25, "Which LDL value is classified as very high?", "190 mg/dL or more", ["130-159 mg/dL", "100-129 mg/dL", "Under 100 mg/dL"], "LDL under 100 is desirable, 160-189 high, 190 or more very high."),
      X("statin", "Fact", 25, "Which HDL is considered protective?", "60 mg/dL or more", ["Under 40 in men", "Under 50 in women", "40-49 in anyone"], "HDL of 60 or more is protective; under 40 in men or 50 in women is low."),
      X("statin", "Fact", 25, "Which triglyceride level is very high?", "500 mg/dL or more", ["150-199 mg/dL", "200-499 mg/dL", "Under 150 mg/dL"], "TGs under 150 are desirable, 200-499 high, 500 or more very high."),

      /* enhancers */
      X("enhance", "Compare", 33, "How do ApoB and Lp(a) differ?", "ApoB: particle number; Lp(a): inherited risk particle", ["ApoB: inherited particle; Lp(a): particle count", "Both measure HDL function", "Both are inflammation markers"], "Each atherogenic particle carries one ApoB; Lp(a) is a genetic LDL-like particle with apolipoprotein(a)."),
      X("enhance", "Fact", 31, "How often should Lp(a) be measured?", "At least once in all adults", ["Every year after age 40", "Only after an MI", "Never: it can't be treated"], "Lp(a) is largely genetic, so measure it at least once."),
      X("enhance", "Fact", 31, "What Lp(a) level is elevated?", "125 nmol/L or more", ["25 nmol/L or more", "60 nmol/L or more", "500 nmol/L or more"], "Elevated is 125 nmol/L (50 mg/dL), about 1.4x risk; 250 or more is about 2x."),
      X("enhance", "Fact", 32, "What ApoB level is a risk enhancer?", "120 mg/dL or more", ["60 mg/dL or more", "90 mg/dL or more", "200 mg/dL or more"], "ApoB of 120 or more is a risk-enhancing factor in the 2026 guideline."),
      X("enhance", "Case", 34, "Borderline PREVENT risk, hsCRP 3.1 and 2.8 on two visits, no cause found. What can help?", "High-intensity statin", ["Repeat CRP yearly only", "Aspirin instead of statin", "No action: CRP is non-specific"], "hsCRP 2 or more twice without a cause in borderline risk supports high-intensity statin."),
      X("enhance", "Classify", 30, "Which is a reproductive risk enhancer?", "Prior preeclampsia", ["Two uncomplicated births", "Menopause at 52", "Breastfeeding"], "Premature menopause, preeclampsia, gestational diabetes or HTN and preterm delivery enhance risk."),
      X("enhance", "Case", 35, "PREVENT 6%, unsure about a statin; CAC score is 146. What does it support?", "Starting lipid-lowering therapy", ["Deferring therapy", "Repeating CAC in a year", "Emergent angiography"], "CAC 100 or more (or 75th percentile) supports lipid-lowering therapy."),
      X("enhance", "Trap", 35, "CAC = 0 in a 50-year-old who smokes a pack a day. Defer the statin?", "Not automatically: smoking is an exception", ["Yes: CAC 0 rules out all risk", "Yes, and stop all prevention", "Yes, repeat CAC in 10 years"], "CAC 0 supports deferring only when diabetes, smoking and strong family history are absent."),
      X("enhance", "Case", 20, "54 F, PREVENT 4.4%, Lp(a) 180, ApoB 126, unsure about a statin; CAC 146. Best step?", "Start a statin", ["Repeat CAC in 5 years", "Aspirin alone", "No therapy: risk is borderline"], "Her enhancers and CAC over 100 move her to treatment (from her CAD application)."),
      X("enhance", "Fact", 29, "Which ancestry is listed as a risk enhancer?", "South Asian", ["Northern European", "East African", "Pacific Islander"], "South Asian and Filipino ancestry are higher-risk groups."),

      /* LO 5: diabetes */
      X("dm", "Fact", 37, "Which A1c defines diabetes?", "6.5% or higher", ["5.7% or higher", "6.0% or higher", "7.5% or higher"], "Prediabetes is 5.7-6.4% and diabetes is 6.5% or more."),
      X("dm", "Fact", 38, "What A1c goal fits most nonpregnant adults with diabetes?", "Under 7%", ["Under 5.7%", "Under 9%", "Under 6%"], "Under 7% for most, under 6.5% for some, under 8% if frail or high risk."),
      X("dm", "Case", 38, "Frail 84-year-old with diabetes and many comorbidities. Reasonable A1c goal?", "Under 8%", ["Under 6%", "Under 6.5%", "Under 5.7%"], "A less stringent goal avoids hypoglycemia in frail patients."),
      X("dm", "Pick the drug", 39, "Type 2 diabetic with prior MI and A1c 6.8% on metformin. Which drug adds CV benefit?", "GLP-1 RA or SGLT2 inhibitor", ["Sulfonylurea", "Insulin glargine", "Pioglitazone"], "With ASCVD, HF or CKD, use a GLP-1 RA and/or SGLT2i regardless of A1c."),
      X("dm", "Classify", 40, "Which feature raises CVD risk in a person with diabetes?", "UACR of 30 mg/g or more", ["A1c of 6.0%", "BMI of 24", "Diabetes for 2 years"], "Long duration, albuminuria, eGFR under 60, retinopathy, neuropathy and ABI under 0.9 add risk."),

      /* LO 5: other */
      X("other", "Fact", 41, "What is the general BP goal for most adults?", "Under 130/80", ["Under 140/90", "Under 120/70", "Under 150/90"], "Under 130/80 for most, with SBP under 120 for some higher-risk patients."),
      X("other", "Mechanism", 43, "What does untreated sleep apnea eventually do to the right heart?", "RV hypertrophy, pulmonary HTN, cor pulmonale", ["LV dilation and mitral regurgitation", "Aortic stenosis from calcification", "Pericardial effusion and tamponade"], "Repeated hypoxemia drives pulmonary hypertension and right heart failure."),
      X("other", "Fact", 44, "What defines heavy drinking for a man?", "15 or more drinks a week", ["4 drinks a week", "8 drinks a week", "30 or more a week"], "Heavy is 8 or more a week for women and 15 or more for men; binge is 4 (women) or 5 (men) at once."),
      X("other", "Fact", 45, "What counts as one drink of wine?", "5 oz", ["12 oz", "1.5 oz", "8 oz"], "One drink is 12 oz beer, 5 oz wine or 1.5 oz liquor."),
      X("other", "Fact", 46, "For BP management, what alcohol advice does the 2025 guideline give?", "Abstinence is optimal; else 1/day women, 2/day men", ["Up to 4 drinks a day is safe", "Red wine daily for everyone", "No limit if BP is controlled"], "Abstinence is the optimal goal, with limits if drinking continues."),

      /* LO 5: smoking */
      X("smoke", "Fact", 47, "How much do cessation adjuncts change quit rates?", "They double the success rate", ["No effect", "Raise it by 5%", "Make it 10 times higher"], "Using an adjunct doubles the success of quitting."),
      X("smoke", "Fact", 48, "What are the Five A's of smoking cessation?", "Ask, Advise, Assess, Assist, Arrange", ["Ask, Admit, Agree, Act, Avoid", "Assess, Alert, Answer, Adjust, Abstain", "Advise, Accept, Attempt, Adapt, Again"], "The three-step model is Ask, Advise, Connect."),
      X("smoke", "Pick the drug", 49, "Smokes 1 ppd and wants a nicotine patch. Starting strength?", "21 mg", ["14 mg", "7 mg", "42 mg"], "Use 21 mg if over half a pack a day, 14 mg if under."),
      X("smoke", "Pick the drug", 49, "Lights first cigarette within 10 minutes of waking. Which gum dose?", "4 mg", ["2 mg", "1 mg", "8 mg"], "4 mg if the first tobacco is within 30 minutes of waking, 2 mg if later."),
      X("smoke", "Trap", 50, "Smoker with a seizure disorder wants help quitting. Which adjunct to avoid?", "Bupropion", ["Varenicline", "Nicotine patch", "Nicotine gum"], "Bupropion is avoided with seizure risk, eating disorders and MAOIs."),
      X("smoke", "Fact", 50, "Which side effects are common with varenicline (Chantix)?", "Nausea and vivid dreams", ["Seizures and weight loss", "Hiccups and GERD", "Skin irritation at the site"], "Varenicline causes nausea and vivid dreams and needs CKD dose adjustment."),

      /* LO 6 */
      X("aspirin", "Trap", 52, "Healthy 74-year-old with no ASCVD asks about daily aspirin 81 mg. Advice?", "Don't routinely start it over age 70", ["Yes: everyone over 70 should take it", "Yes, at 325 mg daily", "Yes, if the LDL is high"], "Routine aspirin isn't recommended without ASCVD, and not over 70 or with bleeding risk."),
      X("aspirin", "Case", 52, "Which patient might be considered for primary-prevention aspirin?", "55, high CV risk, low bleeding risk", ["78, prior GI bleed", "45, low risk, on warfarin", "30, no risk factors"], "Aspirin may be considered at ages 40-70 with elevated risk and low bleeding risk."),

      /* LO 7 */
      X("plan", "Next step", 55, "52-year-old smoker worried about weight gain if he quits. What is the #1 intervention?", "Quit smoking", ["Start aspirin", "Start a statin", "Lose weight first"], "Smoking cessation is the single most important intervention for his health."),
      X("plan", "Case", 57, "Ex-smoker: TC 210, LDL 108, HDL 32, TG 398, GFR 55. Which finding most supports treating his lipids?", "GFR 55 (CKD stage 3) at age 40-75", ["The LDL of 108 alone", "The total cholesterol of 210", "His normal BP of 120/60"], "Stage 3 CKD at 40-75 is an independent indication for lipid-lowering therapy."),
      X("plan", "Case", 58, "Same patient at 55: A1c 7.7%, LDL 88, smoking again. What changed?", "He now has diabetes; treat it and push cessation", ["Nothing; lipids look better", "He needs aspirin over 70", "He should stop his statin"], "A1c 7.7% is diabetes, a CV risk factor and statin indication."),
      X("plan", "Trap", 51, "Which intervention makes the biggest impact on ASCVD risk?", "Lifestyle changes", ["Aspirin", "CAC scoring", "Annual stress tests"], "Lifestyle changes are hardest but make the greatest impact.")
    ]
  });
})();
