/* Vignettes, CAD Part II (Stager): short prevention cases on every LO (who gets a statin, which intensity, enhancers,
   CAC, diabetes, BP, alcohol, smoking, aspirin, putting a plan together). See data/vignettes.js. */
(function () {
  "use strict";
  var V = Vignettes.V;
  Vignettes.lecture({
    id: "cad-part-2", title: "CAD Part II: Prevention", short: "CAD II", group: "CAD",
    concepts: {
      prim: "Primary vs secondary prevention (LO 1)",
      prevent: "PREVENT-ASCVD: who and which category (LO 2)",
      life: "Lifestyle advice (LO 3)",
      statin: "Who gets a statin and which intensity (LO 4)",
      enhance: "Risk enhancers and CAC (LO 4)",
      dm: "Diabetes targets and drugs (LO 5)",
      other: "BP, OSA, alcohol (LO 5)",
      smoke: "Smoking cessation (LO 5)",
      aspirin: "Aspirin for primary prevention (LO 6)",
      plan: "Putting a plan together (LO 7)"
    },
    qs: [
      /* LO 1 */
      V("prim", "Classify", 2, "A 50-year-old with LDL 160 and no known heart, brain or leg vessel disease starts a statin and walking program. What kind of prevention is this?", "Primary prevention", ["Secondary prevention", "Tertiary prevention", "Screening only"], "Primary prevention keeps ASCVD from developing in someone who doesn't have it yet."),
      V("prim", "Classify", 2, "A 63-year-old is discharged on high-intensity atorvastatin three days after a stent for an NSTEMI. What kind of prevention is the statin?", "Secondary prevention", ["Primary prevention", "Screening only", "Risk calculation"], "Treating someone who already has ASCVD to prevent the next event is secondary prevention."),
      V("prim", "Next step", 4, "A 26-year-old has LDL 172 and a father who had an MI at 48. She feels well. What should you consider?", "Earlier lipid-lowering treatment", ["Recheck lipids at age 40", "A PREVENT score only at 30", "Nothing, since she is young"], "Young adults with LDL 160 or more or a strong family history are considered for earlier treatment."),

      /* LO 2 */
      V("prevent", "Classify", 13, "A 58-year-old with no ASCVD, LDL 135 and treated BP has a 10-year PREVENT-ASCVD risk of 4.4%. Which category is he in?", "Borderline", ["Low", "Intermediate", "High"], "Under 3% is low, 3 to under 5% borderline, 5 to under 10% intermediate, 10% or more high."),
      V("prevent", "Classify", 13, "A 66-year-old smoker with LDL 150 and no known vascular disease has a 10-year PREVENT-ASCVD risk of 12%. Which category and what statin advice?", "High risk: a statin is recommended", ["Intermediate: consider a statin", "Borderline: may consider one", "Low: lifestyle only"], "At 10% or more lipid-lowering therapy is recommended."),
      V("prevent", "Next step", 12, "A 61-year-old had an MI with a stent last year and asks you to run his PREVENT score to see if he still needs a statin. What do you tell him?", "PREVENT isn't used: he already has ASCVD", ["His score decides if he continues", "Run it yearly and stop under 5%", "Use the 30-year score instead"], "Calculators are for primary prevention, so known ASCVD gets high-intensity statin without one."),
      V("prevent", "What's happening", 10, "A 54-year-old with diabetes has a normal eGFR but a urine albumin-to-creatinine ratio of 90 mg/g. Why add the UACR to her PREVENT calculation?", "It shows kidney damage before eGFR falls", ["It replaces her fasting lipid panel", "It measures her glucose over 3 months", "It lowers her estimated risk score"], "Albuminuria marks early kidney damage, which adds cardiovascular risk."),
      V("prevent", "Classify", 6, "A 35-year-old with LDL 150 wants to know his risk. Which PREVENT estimates can you give him?", "Both the 10-year and 30-year risk", ["Only the 10-year risk", "Only the 30-year risk", "Neither until he turns 40"], "The 10-year estimate covers ages 30-79 and the 30-year estimate ages 30-59."),

      /* LO 3 */
      V("life", "Next step", 17, "A 47-year-old office worker sits all day and walks 10 minutes on weekends. He asks how much exercise to aim for. What do you tell him?", "150 min moderate or 75 min vigorous a week", ["30 minutes of walking a week total", "300 minutes of vigorous activity a week", "Any 60 minutes a week of activity"], "The goal is 150 minutes moderate or 75 vigorous weekly plus strength work 2 days a week."),
      V("life", "Next step", 16, "A 52-year-old with borderline risk cooks with butter, eats bacon daily and drinks two sodas a day. Which change fits a heart-healthy diet?", "Olive oil for butter, water for soda", ["Deli meat for fish at lunch", "Whole milk for skim milk", "White bread for vegetables"], "Replace saturated fat with unsaturated fat and cut processed meat, sodium and added sugar."),
      V("life", "What's happening", 21, "A 44-year-old with prediabetes starts brisk walking 45 minutes five days a week. Which lipid change do you expect over months?", "Higher HDL and lower triglycerides", ["Higher LDL and higher triglycerides", "Lower HDL and higher LDL", "No change in any lipid value"], "Exercise raises HDL, lowers triglycerides and BP and improves insulin sensitivity."),
      V("life", "Next step", 17, "A 39-year-old with hypertension sleeps 5 hours a night working two jobs. What sleep goal do you recommend?", "7 to 9 hours a night", ["4 to 5 hours a night", "5 to 6 hours a night", "10 to 12 hours a night"], "Adults should get 7 to 9 hours; short sleep adds cardiovascular risk."),

      /* LO 4 */
      V("statin", "Pick the drug", 23, "A 69-year-old had an ischemic stroke last month. His LDL is 85 and he asks if he really needs a statin. Which plan?", "High-intensity statin", ["No statin: LDL is under 100", "Low-intensity statin only", "Statin only if LDL tops 130"], "Clinical ASCVD, including ischemic stroke, gets high-intensity statin regardless of LDL."),
      V("statin", "Next step", 24, "A 38-year-old has LDL 205 with no other risk factors and a normal exam. What next?", "Start therapy and look for familial hyperlipidemia", ["Calculate PREVENT before any treatment at all", "Lifestyle only and recheck his lipids in 5 years", "Order a CAC score and treat only if it is high"], "LDL 190 or more gets lipid-lowering therapy without relying on calculated risk."),
      V("statin", "Next step", 24, "A 52-year-old with type 2 diabetes has LDL 110 and a 10-year PREVENT risk of 4%. Does she get a statin?", "Yes: diabetes at 40-75 is an indication", ["No: her risk is only borderline", "Only once her LDL tops 190", "Only if her CAC score is over 100"], "Diabetes, stage 3-4 CKD and HIV at ages 40-75 are treated regardless of PREVENT."),
      V("statin", "Next step", 26, "A 60-year-old has LDL 140, no ASCVD, no diabetes and normal kidneys. How do you decide whether to start a statin?", "Calculate his PREVENT-ASCVD risk", ["Start high intensity right away", "Wait until his LDL tops 190", "Order a coronary angiogram"], "For LDL 70-189 without ASCVD or another indication, PREVENT-ASCVD guides the decision."),
      V("statin", "Pick the drug", 22, "A 64-year-old has an MI and is started on simvastatin 40 mg at discharge. What change should you make?", "Switch to atorvastatin 40-80 or rosuvastatin 20-40", ["Keep simvastatin 40: it is high intensity", "Lower it to simvastatin 20 to avoid myalgia", "Switch to pravastatin 40 for stronger effect"], "Simvastatin 40 is moderate intensity, and ASCVD needs a high-intensity statin."),
      V("statin", "Classify", 27, "A 57-year-old has a 10-year PREVENT-ASCVD risk of 7% and no enhancers. What is the statin recommendation?", "Should consider a statin", ["A statin is recommended", "May consider a statin", "No statin, lifestyle only"], "Intermediate risk (5 to under 10%) should consider statin therapy."),

      /* enhancers */
      V("enhance", "Next step", 20, "A 54-year-old woman has a PREVENT risk of 4.4%, Lp(a) 180 nmol/L, ApoB 126 and is unsure about a statin. Her CAC score comes back 146. Best step?", "Start a statin", ["Repeat the CAC in 5 years", "Start aspirin by itself", "Lifestyle only: risk is borderline"], "Her enhancers plus a CAC over 100 move her to lipid-lowering therapy."),
      V("enhance", "Next step", 35, "A 50-year-old who smokes a pack a day has intermediate PREVENT risk and a CAC score of 0. Can you defer his statin?", "Not automatically: smoking is an exception", ["Yes: a CAC of 0 rules out all risk", "Yes, and stop all other prevention", "Yes, and repeat the CAC in 10 years"], "CAC 0 supports deferring only when diabetes, smoking and strong family history are absent."),
      V("enhance", "Next step", 34, "A 48-year-old with borderline PREVENT risk has hsCRP of 3.1 and 2.8 on two visits with no infection or other cause. What does this support?", "Starting a high-intensity statin", ["Repeating the CRP every year only", "Aspirin in place of a statin", "Nothing: CRP is nonspecific"], "Persistent hsCRP of 2 or more without a cause enhances risk enough to support treatment."),
      V("enhance", "Classify", 30, "A 45-year-old woman with borderline risk had preeclampsia in both pregnancies. How does that history change her risk?", "It is a risk-enhancing factor", ["It lowers her lifetime risk", "It has no effect after delivery", "It only matters for stroke risk"], "Preeclampsia, gestational diabetes or HTN, preterm delivery and early menopause enhance risk."),
      V("enhance", "Next step", 31, "A 42-year-old with an LDL of 120 has never had Lp(a) checked. His brother had an MI at 46. What should you order?", "An Lp(a) level, at least once in life", ["Yearly Lp(a) levels after age 40", "Lp(a) only after a first MI", "Nothing: Lp(a) can't be measured"], "Lp(a) is mostly genetic, so every adult should have it measured at least once."),
      V("enhance", "Classify", 29, "A 46-year-old man of South Asian ancestry has borderline PREVENT risk and LDL 140. How does his ancestry factor in?", "It is a risk enhancer favoring a statin", ["It lowers his risk category", "It has no effect on statin choice", "It only matters for diabetes"], "South Asian and Filipino ancestry are listed risk enhancers."),

      /* LO 5: diabetes */
      V("dm", "Pick the drug", 39, "A 61-year-old with type 2 diabetes had an MI last year. A1c is 6.8% on metformin. Which drug should you add for heart benefit?", "A GLP-1 RA or SGLT2 inhibitor", ["A sulfonylurea such as glipizide", "Basal insulin such as glargine", "Pioglitazone at a low dose"], "With ASCVD, HF or CKD, add a GLP-1 RA and/or SGLT2 inhibitor regardless of A1c."),
      V("dm", "Classify", 38, "A frail 84-year-old with diabetes, dementia and recurrent falls has an A1c of 7.6%. What is a reasonable A1c goal?", "Under 8%", ["Under 6%", "Under 6.5%", "Under 5.7%"], "A looser goal in frail older adults avoids dangerous hypoglycemia."),
      V("dm", "Diagnosis", 37, "A 49-year-old with obesity has an A1c of 6.1% and asks if she has diabetes. What do you tell her?", "Prediabetes, which still raises CV risk", ["Diabetes, so start insulin today", "Normal: no follow-up is needed", "Diabetes only if she has symptoms"], "Prediabetes is 5.7-6.4% and diabetes is 6.5% or more."),

      /* LO 5: other */
      V("other", "Next step", 41, "A 55-year-old with intermediate PREVENT risk has an office BP of 138/86 on two visits. What BP goal fits him?", "Under 130/80", ["Under 140/90", "Under 150/90", "Under 110/60"], "Most adults are treated to under 130/80, some higher-risk patients to SBP under 120."),
      V("other", "Complication", 43, "A 60-year-old snores loudly, wakes gasping and falls asleep while driving. If this goes untreated for years, what happens to his right heart?", "Pulmonary HTN with RV hypertrophy (cor pulmonale)", ["LV dilation with severe mitral regurgitation", "Calcific aortic stenosis with a murmur", "A large pericardial effusion and tamponade"], "Repeated nighttime hypoxemia drives pulmonary hypertension and right heart failure."),
      V("other", "Classify", 44, "A 50-year-old woman with hypertension has two glasses of wine every night. How do you classify her drinking?", "Heavy drinking (8 or more a week for women)", ["Moderate drinking within the limits", "Binge drinking only on weekends", "Light drinking that lowers her BP"], "Heavy is 8 or more drinks a week for women and 15 or more for men."),
      V("other", "Next step", 46, "A 58-year-old man with hypertension drinks three beers a night and asks how much is safe for his BP. What does the 2025 guideline advise?", "Abstinence is best; if not, at most 2 a day", ["Up to 4 drinks a day is safe for men", "One glass of red wine daily for all", "No limit once his BP is controlled"], "Abstinence is optimal, with a limit of 1 a day for women and 2 for men if drinking continues."),

      /* LO 5: smoking */
      V("smoke", "Pick the drug", 50, "A 44-year-old smoker with epilepsy on levetiracetam wants a medication to help him quit. Which should you avoid?", "Bupropion", ["Varenicline", "Nicotine patch", "Nicotine gum"], "Bupropion lowers the seizure threshold and is avoided with seizure risk."),
      V("smoke", "Pick the drug", 49, "A 51-year-old smokes a pack a day and has his first cigarette within 10 minutes of waking. Which nicotine replacement doses fit?", "21 mg patch and 4 mg gum", ["14 mg patch and 2 mg gum", "7 mg patch and 2 mg gum", "42 mg patch and 8 mg gum"], "Over half a pack a day gets 21 mg, and first tobacco within 30 minutes of waking gets 4 mg gum."),
      V("smoke", "Complication", 50, "A 46-year-old started varenicline 2 weeks ago to quit smoking. Which complaints are most expected?", "Nausea and vivid dreams", ["Seizures and weight loss", "Hiccups and heartburn", "Itching at the patch site"], "Varenicline commonly causes nausea and vivid dreams and needs dose changes in CKD."),
      V("smoke", "Next step", 48, "A 39-year-old smoker comes in for a sprained ankle. Using the Five A's, what comes right after asking about tobacco?", "Advise him clearly to quit", ["Arrange a follow-up visit", "Assist with a quit plan", "Assess for lung cancer first"], "The order is Ask, Advise, Assess, Assist, Arrange."),

      /* LO 6 */
      V("aspirin", "Next step", 52, "A healthy 74-year-old with no ASCVD and LDL 130 asks whether to start a daily aspirin 81 mg. What do you advise?", "Don't start it routinely over age 70", ["Start it: everyone over 70 benefits", "Start 325 mg daily instead", "Start it only if his LDL is high"], "Routine primary-prevention aspirin isn't recommended over 70 because bleeding risk rises."),
      V("aspirin", "Pick the drug", 52, "A 55-year-old with high ASCVD risk has never bled, takes no anticoagulant and asks about aspirin. What is reasonable?", "Low-dose aspirin may be considered", ["Aspirin is required for everyone", "Aspirin 325 mg twice daily", "Aspirin is never used before an MI"], "Aspirin may be considered at ages 40-70 with higher CV risk and low bleeding risk."),

      /* LO 7 */
      V("plan", "Next step", 55, "A 52-year-old smoker with LDL 150 and BP 136/84 worries about weight gain if he quits. Which single change matters most?", "Quitting smoking", ["Starting daily aspirin", "Losing weight before quitting", "Cutting dietary salt only"], "Smoking cessation is the single most important intervention for his heart."),
      V("plan", "Next step", 57, "A 45-year-old ex-smoker has LDL 108, HDL 32, TG 398 and an eGFR of 55. Which finding most supports treating his lipids now?", "eGFR 55, stage 3 CKD at age 40-75", ["His LDL of 108 by itself", "His HDL of 32 by itself", "His triglycerides of 398 alone"], "Stage 3-4 CKD at ages 40-75 is an indication for lipid-lowering therapy."),
      V("plan", "Next step", 58, "Ten years later the same man is smoking again and his A1c is 7.7%. His LDL is 88 on a statin. What is the new problem to address?", "New diabetes, plus restarting cessation", ["Nothing: his lipids look better now", "He needs aspirin because he is 55", "He should stop the statin at LDL 88"], "An A1c of 6.5% or more is diabetes, a major risk factor that needs its own plan.")
    ]
  });
})();
