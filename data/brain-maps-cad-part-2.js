/* Brain maps: CAD Part II (Stager): Prevention & Risk Modification, 61 slides, 7 LOs. Facts are from the deck;
   anything else is marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "cad-part-2",
    title: "CAD Part II: Prevention & Risk Modification",
    short: "CAD II",
    by: "Stager",
    slides: 61,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "A patient walks into primary care: how do you decide how hard to fight their ASCVD risk?",
        tree: N("CAD Part II in one story", { i: "🛡️", d: "Prevention is the plan: sort the patient, estimate risk, then attack every risk factor. Tap a box for the why; ↗ opens its own map." }, [
          N("Do they already have ASCVD?", {
            k: "q", i: "❓", a: "first ask", go: "two-kinds", vs: true, s: "2, 23",
            j: N("For EVERYONE: fix every risk factor", { i: "🔧", k: "key", a: "and either way", rail: true, d: "Lifestyle changes make the greatest impact, and the 'gateway diseases' (HTN, dyslipidemia, diabetes) must be controlled to goal.", s: "36, 51",
              j: N("Thomas: the whole plan over 14 years", { k: "case", i: "👨", a: "put it together", go: "thomas", s: "53-59" }) }, [
              N("Lifestyle", { i: "🥗", a: "start with", go: "lifestyle", l: ["diet", "water", "150 min/week", "sleep 7-9 h"], s: "15-21" }),
              N("Diabetes · HTN · sleep apnea · alcohol", { i: "🩺", a: "then treat", go: "other-risks", s: "37-46" }),
              N("Smoking", { i: "🚬", a: "every visit", go: "smoking", s: "47-50" }),
              N("Aspirin? Only selectively", { i: "💊", a: "maybe", go: "aspirin", s: "52" })
            ])
          }, [
            N("YES → SECONDARY prevention", { col: "red", a: "yes", go: "two-kinds", d: "Stop progression and prevent the next event.", s: "2" }, [
              N("High-intensity statin for everyone", { k: "key", a: "so", d: "Regardless of the lipid panel.", s: "23" })
            ]),
            N("NO → PRIMARY prevention", { col: "green", a: "no", go: "two-kinds", d: "Keep CAD from developing at all.", s: "2" }, [
              N("Estimate risk: PREVENT-ASCVD", { i: "🧮", a: "ages 30-79", go: "prevent", d: "10-year risk (30-79), plus 30-year risk at 30-59.", s: "5-13" }, [
                N("Lipid-lowering decision", { i: "💊", a: "guides the", go: "statin-who", d: "Some groups get therapy whatever the number; the rest are sorted by PREVENT risk, then personalized and reclassified.", s: "24-28" })
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 1 */
      {
        id: "two-kinds", title: "Primary vs secondary prevention", icon: "🛡️", lo: ["LO 1"], layout: "tree",
        ask: "What is the goal when there is no plaque disease yet, and what changes once there is?",
        tree: N("CAD prevention in primary care", { i: "🩺", vs: true, s: "2-3", d: "Risk assessment is part of routine preventive care: BP, lipids, smoking, diabetes, kidney function, lifestyle; re-assess as things change.",
          j: N("Cardiovascular risk is reassessed as circumstances change", { k: "key", a: "and always", s: "3" }) }, [
          N("PRIMARY prevention", { i: "🌱", col: "green", a: "no ASCVD yet", s: "2" }, [
            N("Reduce modifiable risk factors", { a: "how", d: "Lifestyle modification and early identification of metabolic abnormalities.", s: "2" }, [
              N("Goal: CAD never develops", { k: "good", a: "goal", s: "2" }, [
                N("Statin decision by risk group and PREVENT", { a: "lipids", go: "statin-who", s: "24-28" })
              ])
            ])
          ]),
          N("SECONDARY prevention", { i: "🚑", col: "red", a: "ASCVD diagnosed", s: "2" }, [
            N("Stop progression of established plaque", { a: "how", d: "Prevent further cardiac damage and recurrent cardiovascular events.", s: "2" }, [
              N("High-intensity statin, regardless of lipids", { k: "key", a: "lipids", s: "23" }, [
                N("Clinical ASCVD means any of", { a: "who", rail: true, s: "23" }, [
                  N("CAD: ACS, prior MI, stable/unstable angina, PCI/stent, CABG", { s: "23" }),
                  N("Cerebrovascular: atherosclerotic ischemic stroke or TIA", { s: "23" }),
                  N("PAD (atherosclerotic)", { s: "23" }),
                  N("Aortic: atherosclerotic aortic aneurysm", { s: "23" })
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 2 */
      {
        id: "prevent", title: "PREVENT-ASCVD: estimating risk", icon: "🧮", lo: ["LO 2"], layout: "spine",
        ask: "Who gets the calculator, what goes into it, and what do the numbers mean?",
        center: "PREVENT-ASCVD", centerI: "🧮", centerS: "6",
        centerD: "2026 update: PREVENT-ASCVD is the preferred risk calculator. For lipid-lowering decisions, use PREVENT-ASCVD.",
        branches: [
          N("By age", { i: "🎂", col: "gold", vs: true, s: "4-5" }, [
            N("Ages 20-29", { col: "teal", s: "4" }, [
              N("Find risk factors early; lifetime risk + family history", { s: "4" }, [
                N("Consider early lipid-lowering if LDL ≥ 160 or strong family history", { k: "key", s: "4" })
              ])
            ]),
            N("Ages 30-79", { col: "blue", s: "5" }, [
              N("PREVENT-ASCVD 10-year risk", { k: "key", s: "5" }, [
                N("+ 30-year risk at ages 30-59", { s: "5-6" })
              ])
            ])
          ]),
          N("Three models", { i: "3️⃣", col: "blue", rail: true, s: "6" }, [
            N("PREVENT-ASCVD = MI + stroke", { k: "key", d: "This is the one for lipid decisions.", s: "6" }),
            N("PREVENT-HF = heart failure", { s: "6" }),
            N("PREVENT-CVD = total (ASCVD + HF)", { s: "6" })
          ]),
          N("What PREVENT adds to the old PCE", { i: "➕", col: "green", rail: true, s: "7-11", d: "Both use age, sex, total and HDL cholesterol, SBP, BP treatment, diabetes and smoking." }, [
            N("eGFR (kidney function)", { s: "8" }, [
              N("Low GFR raises CV risk; CKD and CVD travel together", { a: "why", s: "8" })
            ]),
            N("BMI", { s: "9" }, [
              N("Metabolic health beyond a yes/no for diabetes", { a: "why", s: "9" })
            ]),
            N("Optional: UACR", { s: "10" }, [
              N("Kidney damage before eGFR falls", { a: "why", d: "A diabetic with normal eGFR can still have significant albuminuria.", s: "10" })
            ]),
            N("Optional: HbA1c", { s: "9" }, [
              N("Average glucose over 2-3 months", { a: "why", s: "9" })
            ]),
            N("Optional: Social Deprivation Index (ZIP code)", { s: "11" }, [
              N("Access to care, money, education, housing", { a: "why", s: "11" })
            ])
          ]),
          N("Risk categories (10-year)", { i: "📊", col: "orange", rail: true, s: "13" }, [
            N("&lt; 3% → Low", { k: "good", s: "13" }),
            N("3 to &lt; 5% → Borderline", { s: "13" }),
            N("5 to &lt; 10% → Intermediate", { s: "13" }),
            N("≥ 10% → High", { k: "bad", s: "13", d: "Memory aid: 3, 5, 10." })
          ]),
          N("Don't use it as the main tool if…", { i: "🚫", col: "red", rail: true, s: "12", d: "Eligible = adults 30-79 without known CVD or subclinical atherosclerosis." }, [
            N("Known cardiovascular disease", { s: "12" }),
            N("Severe subclinical disease (CAC ≥ 300)", { s: "12" }),
            N("End-stage kidney disease", { s: "12" }),
            N("Life expectancy &lt; 1 year", { s: "12" }),
            N("Inherited conditions that already set high risk", { s: "12" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "statin-who", title: "Who gets lipid-lowering therapy?", icon: "💊", lo: ["LO 4"], layout: "tree",
        ask: "Walk the questions in order: who is treated no matter what, and who gets sorted by PREVENT?",
        howto: "Every question: <b>YES goes right →</b>, <b>NO goes down ↓</b>.",
        tree: N("Adult: lipid-lowering therapy?", { i: "💊", s: "23-27" }, [
          N("Clinical ASCVD?", { k: "q", s: "23", x: N("High-intensity statin, regardless of lipids", { k: "bad", a: "yes", col: "red", go: "two-kinds", s: "23" }) }, [
            N("LDL-C ≥ 190?", { k: "q", a: "no", s: "24, 26", x: N("Treat without the calculator; check for familial hypercholesterolemia", { a: "yes", col: "red", s: "24, 26" }) }, [
              N("Age 40-75 with diabetes, CKD 3-4, or HIV?", { k: "q", a: "no", s: "24, 26", x: N("Treat regardless of PREVENT risk", { a: "yes", col: "orange", s: "24, 26" }) }, [
                N("Age 30-79, LDL 70-189, no ASCVD or subclinical plaque", { a: "no", s: "26" }, [
                  N("10-year PREVENT-ASCVD risk", { k: "key", i: "🧮", a: "calculate", go: "prevent", s: "27-28", d: "Then personalize with risk enhancers and reclassify with CAC if still unsure.",
                    j: N("Still unsure? Personalize, then reclassify", { k: "key", a: "if undecided", go: "personalize", s: "28" }) }, [
                    N("Low &lt; 3%: lifestyle", { k: "good", a: "low", s: "27", d: "Consider therapy in selected patients with LDL 160-189 or 30-year risk ≥ 10% (ages 30-59)." }),
                    N("Borderline 3-5%: MAY consider", { a: "borderline", s: "27", d: "After a clinician-patient discussion. hs-CRP ≥ 2 twice with no cause → high-intensity statin can be useful." }),
                    N("Intermediate 5-10%: SHOULD consider", { a: "intermediate", s: "27", d: "After a clinician-patient discussion." }),
                    N("High ≥ 10%: recommended", { k: "bad", a: "high", s: "27" })
                  ])
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "personalize", title: "Personalize and reclassify", icon: "🔬", lo: ["LO 4", "LO 7"], layout: "spine",
        ask: "The calculator gave a gray-zone number: what tips the decision?",
        center: "Calculate → Personalize → Reclassify", centerI: "🔬", centerS: "28",
        centerD: "Step 1 calculate PREVENT-ASCVD. Step 2 personalize with risk enhancers. Step 3 reclassify with a CAC score when the decision is still uncertain.",
        branches: [
          N("Family + demographics", { i: "👪", col: "violet", rail: true, s: "29" }, [
            N("Premature ASCVD in a parent or sibling", { s: "29" }),
            N("Higher-risk ancestry: South Asian, Filipino", { s: "29" })
          ]),
          N("Lipid enhancers", { i: "🧈", col: "gold", rail: true, s: "29" }, [
            N("Lp(a) ≥ 125 nmol/L (≥ 50 mg/dL)", { k: "key", s: "29, 31" }),
            N("Persistent LDL 160-189", { s: "29" }),
            N("ApoB ≥ 120 or non-HDL 190-219", { s: "29, 32" }),
            N("Persistently high triglycerides", { s: "29" })
          ]),
          N("Inflammation + metabolism", { i: "🔥", col: "red", rail: true, s: "30, 34" }, [
            N("RA, SLE, advanced psoriasis", { s: "30" }),
            N("hs-CRP ≥ 2 mg/L more than once", { k: "key", s: "30, 34" }, [
              N("Borderline risk + no other cause → high-intensity statin can be useful", { a: "then", s: "34", d: "CRP marks systemic inflammation, which drives plaque (see CAD I)." })
            ])
          ]),
          N("Pregnancy history", { i: "🤰", col: "pink", rail: true, s: "30" }, [
            N("Menopause before 40", { s: "30" }),
            N("Preeclampsia", { s: "30" }),
            N("Gestational diabetes or hypertension", { s: "30" }),
            N("Preterm delivery", { s: "30" })
          ]),
          N("ApoB vs Lp(a)", { i: "🔍", col: "blue", vs: true, s: "31-33" }, [
            N("ApoB", { col: "blue", s: "32-33" }, [
              N("Think: PARTICLE NUMBER", { k: "key", d: "One ApoB per atherogenic particle (LDL, VLDL, IDL, Lp(a)). Shows risk LDL-C underestimates, e.g. high TG, diabetes, CKM syndrome.", s: "32-33" })
            ]),
            N("Lp(a)", { col: "violet", s: "31, 33" }, [
              N("Think: INHERITED risk particle", { k: "key", d: "An LDL-like particle with apolipoprotein(a) attached to apoB-100; mostly genetic, so measure at least once in all adults.", s: "31, 33" }, [
                N("≥ 125 nmol/L ≈ 1.4× risk · ≥ 250 ≈ 2×", { k: "num", a: "levels", s: "31", d: "Elevated Lp(a) means manage every modifiable risk factor and LDL more intensively." })
              ])
            ])
          ]),
          N("Reclassify: CAC score", { i: "🦴", col: "orange", rail: true, s: "35", d: "For selected borderline or intermediate patients when the statin decision is still uncertain." }, [
            N("CAC = 0 → may defer therapy", { k: "good", s: "35", d: "Unless an exception is present: diabetes, smoking, or strong family history of premature ASCVD." }),
            N("CAC 1-99 → plaque is there; weigh overall risk + percentile", { s: "35" }),
            N("CAC ≥ 100 or ≥ 75th percentile → treat", { k: "bad", s: "35" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "panel", title: "Lipid panel and statin intensity", icon: "🧪", lo: ["LO 4"], layout: "spine",
        ask: "Read each number on the panel, then pick the statin dose that matches the job.",
        center: "Lipids: read the panel, pick the statin", centerI: "🧪", centerS: "22, 25",
        centerD: "Dyslipidemia is one of the most important diseases to control to prevent CAD, mainly with statins. Read each component, not just total cholesterol.",
        branches: [
          N("LDL-C", { i: "🔴", col: "red", rail: true, s: "25" }, [
            N("Desirable &lt; 100", { k: "good", s: "25" }),
            N("Borderline 130-159", { s: "25" }),
            N("High 160-189", { s: "25" }),
            N("≥ 190 = severe hypercholesterolemia: treat", { k: "bad", go: "statin-who", s: "24-25" })
          ]),
          N("HDL-C (the good one)", { i: "🟢", col: "green", rail: true, s: "25" }, [
            N("≥ 60 is protective", { k: "good", s: "25" }),
            N("Low: &lt; 40 men, &lt; 50 women", { k: "bad", s: "25" })
          ]),
          N("Triglycerides", { i: "🟡", col: "gold", rail: true, s: "25" }, [
            N("Desirable &lt; 150", { k: "good", s: "25" }),
            N("Borderline 150-199", { s: "25" }),
            N("High 200-499 · very high ≥ 500", { k: "bad", s: "25" })
          ]),
          N("Total cholesterol", { i: "⚪", col: "gray", rail: true, s: "25" }, [
            N("Desirable &lt; 200", { k: "good", s: "25" }),
            N("Borderline 200-239", { s: "25" }),
            N("High ≥ 240", { k: "bad", s: "25" })
          ]),
          N("Statin intensity", { i: "💊", col: "violet", vs: true, s: "22" }, [
            N("HIGH intensity", { col: "red", l: ["atorvastatin 40-80", "rosuvastatin 20-40"], s: "22", d: "Only two statins can do high intensity. Rosuvastatin's doses are half of atorvastatin's." }, [
              N("Secondary prevention: everyone with ASCVD", { k: "key", a: "who", s: "23" })
            ]),
            N("MODERATE intensity", { col: "blue", l: ["atorva 10-20", "rosuva 5-10", "lova 40", "prava 40", "simva 40"], s: "22", d: "Memory aid: the three '-vastatins' that aren't atorva or rosuva are all 40 mg." })
          ]),
          N("These are labels, not goals", { i: "⚠️", col: "orange", k: "key", s: "25", d: "Conventional classifications only; treat by overall ASCVD risk and guidelines. Treat to both the % LDL reduction and LDL/non-HDL goals.", x: N("Treat to goal", { a: "then", s: "61" }) })
        ]
      },

      /* ------------------------------------------------------------ LO 3 */
      {
        id: "lifestyle", title: "Lifestyle: the biggest lever", icon: "🥗", lo: ["LO 3"], layout: "spine",
        ask: "What exactly do you tell a patient to eat, move and sleep, and why does exercise protect the heart?",
        center: "Healthy habits", centerI: "🥗", centerS: "15-21, 51",
        centerD: "Lifestyle changes make the greatest impact on ASCVD risk, but they depend on a motivated patient: keep chipping away with goals they can reach.",
        branches: [
          N("Start with education", { i: "🗣️", col: "gold", vs: true, s: "15" }, [
            N("Healthy patient", { col: "green", s: "15" }, [
              N("Keep the good habits going", { k: "good", s: "15" })
            ]),
            N("Unhealthy habits", { col: "red", s: "15" }, [
              N("More counseling + specific, attainable goals", { k: "key", s: "15" })
            ])
          ]),
          N("Eat", { i: "🍎", col: "green", vs: true, s: "16" }, [
            N("MORE", { col: "green", l: ["fruits + vegetables", "whole grains", "legumes + nuts", "fish + lean protein", "unsaturated fats (olive oil, avocado)", "low-fat dairy"], s: "16" }),
            N("LESS", { col: "red", l: ["saturated + trans fats", "processed meats", "highly processed foods", "sodium", "added sugar + sweet drinks"], s: "16" })
          ]),
          N("Drink water", { i: "💧", col: "teal", s: "17" }, [
            N("Water over sugar-sweetened drinks", { s: "17" })
          ]),
          N("Move", { i: "🏃", col: "blue", s: "17-19" }, [
            N("≥ <b>150</b> min/week moderate OR ≥ <b>75</b> min/week vigorous", { k: "num", s: "17", d: "Moderate = can talk but not sing (brisk walk, 3-6 METs); vigorous = can't say more than a few words (jogging, ≥ 6 METs)." }, [
              N("+ muscle strengthening ≥ 2 days/week", { a: "plus", s: "17" })
            ]),
            N("Reality: &gt; 7 h sitting, ~12 min activity a day", { k: "bad", a: "but most adults", s: "18" })
          ]),
          N("Sleep", { i: "😴", col: "violet", s: "17-18" }, [
            N("<b>7-9</b> hours a night", { k: "num", s: "17" }, [
              N("1 in 3 adults gets &lt; 7 hours", { k: "bad", a: "but", s: "18" })
            ])
          ]),
          N("How exercise protects the heart", { i: "❤️", col: "red", vs: true, s: "21" }, [
            N("Antiatherogenic", { col: "green", l: ["↓ abdominal fat", "↓ BP", "↓ triglycerides", "↑ HDL", "better insulin sensitivity"], s: "21" }),
            N("Other benefits", { col: "blue", l: ["antithrombotic", "endothelial function", "autonomic function", "anti-ischemic", "antiarrhythmic"], s: "21" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 5 */
      {
        id: "other-risks", title: "Diabetes, BP, sleep apnea, alcohol", icon: "🩺", lo: ["LO 5"], layout: "spine",
        ask: "What target does each risk factor have, and how does sleep apnea actually hurt the heart?",
        center: "Treat the other risk factors to goal", centerI: "🩺", centerS: "36-46",
        centerD: "After habits and lipids come diabetes, hypertension, sleep apnea, alcohol and smoking. HTN, dyslipidemia and diabetes are the 'gateway diseases'.",
        branches: [
          N("Diabetes", { i: "🍬", col: "gold", s: "37-40" }, [
            N("Diagnose", { l: ["A1c ≥ 6.5% (prediabetes 5.7-6.4)", "fasting glucose ≥ 126", "2-h OGTT ≥ 200", "random ≥ 200 + symptoms"], s: "37" }, [
              N("A1c goal", { a: "then", rail: true, s: "38" }, [
                N("&lt; 7% for most adults", { k: "key", s: "38" }),
                N("&lt; 6.5% if safe (no hypoglycemia)", { s: "38" }),
                N("&lt; 8% if frail, many comorbidities, short life expectancy", { s: "38" })
              ])
            ]),
            N("T2DM + ASCVD, HF, or CKD → GLP-1 RA and/or SGLT2i", { k: "key", s: "39", d: "Chosen for proven heart or kidney benefit, regardless of A1c or metformin use." }),
            N("Higher CV risk if", { l: ["T2DM ≥ 10 yr (T1DM ≥ 20)", "UACR ≥ 30", "eGFR &lt; 60", "retinopathy", "neuropathy", "ABI &lt; 0.9"], s: "40", d: "Signs that the vessels are already damaged. T1DM gets a longer window, likely because it starts young with less of the metabolic risk cluster (standard teaching)." })
          ]),
          N("Hypertension", { i: "🩸", col: "red", s: "41" }, [
            N("Confirm: standardized office ± home/ambulatory BP", { s: "41" }, [
              N("Goal &lt; 130/80 for most", { k: "key", a: "then", s: "41" }, [
                N("SBP &lt; 120 in selected high-risk patients", { a: "more intensive", s: "41" })
              ])
            ])
          ]),
          N("Obstructive sleep apnea", { i: "😪", col: "violet", s: "42-43" }, [
            N("Airway closes during sleep", { s: "42" }, [
              N("Intermittent hypoxemia", { k: "bad", a: "causes", s: "42" }, [
                N("Arousal reopens airway, fragments sleep", { a: "then", s: "42" }, [
                  N("Sympathetic surge: ↑ HR, ↑ BP", { k: "bad", a: "each episode", s: "42" }, [
                    N("Inflammation + endothelial dysfunction", { a: "repeated", s: "42" }, [
                      N("Untreated: pulmonary HTN + RV hypertrophy → cor pulmonale", { k: "bad", a: "years later", s: "43" }, [
                        N("CPAP/BiPAP every night", { k: "good", a: "treat", s: "43" })
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          N("Alcohol", { i: "🍷", col: "orange", s: "44-46" }, [
            N("Risk rises with amount; binge + heavy worst", { s: "44" }, [
              N("Binge: ≥ 4 (women) / ≥ 5 (men) at once", { k: "num", a: "define", s: "44" }, [
                N("Heavy: ≥ 8/week (women) / ≥ 15/week (men)", { k: "num", a: "and", s: "44" }, [
                  N("One drink = 12 oz beer · 5 oz wine · 1.5 oz liquor", { a: "count", s: "45", d: "Most people pour more than this without realizing." }, [
                    N("For BP: abstinence is best; else ≤ 1/day women, ≤ 2/day men", { k: "key", a: "counsel", s: "46" })
                  ])
                ])
              ])
            ])
          ]),
          N("Smoking", { i: "🚬", col: "gray", go: "smoking", d: "Addressed at every visit: its own map.", s: "47-50" })
        ]
      },

      /* ------------------------------------------------------------ LO 5 */
      {
        id: "smoking", title: "Smoking cessation", icon: "🚭", lo: ["LO 5"], layout: "spine",
        ask: "What do you ask at every visit, and which quit aid fits which patient?",
        center: "Smoking: every visit", centerI: "🚭", centerS: "47-50",
        centerD: "Quitting is the #1 thing a smoker can do for their health; risk drops 50% within 2 years (CAD I).",
        branches: [
          N("Ask every time", { i: "❓", col: "gold", rail: true, s: "47" }, [
            N("How much? Document packs/day (1 pack = 20)", { s: "47" }),
            N("Tried to quit or cut down? If not, why not?", { s: "47" }),
            N("Tried an adjunct? It DOUBLES success", { k: "key", s: "47" }),
            N("Chewing tobacco or vaping?", { s: "47" })
          ]),
          N("Counseling models", { i: "🗣️", col: "blue", vs: true, s: "48" }, [
            N("3 steps", { col: "teal", l: ["Ask", "Advise", "Connect"], s: "48" }),
            N("5 A's", { col: "blue", l: ["Ask", "Advise", "Assess", "Assist", "Arrange follow-up"], s: "48" })
          ]),
          N("Nicotine replacement", { i: "🩹", col: "green", rail: true, s: "49" }, [
            N("Patch: 21 mg if &gt; ½ ppd, 14 mg if &lt; ½", { s: "49", d: "Local irritation; remove for sleep." }),
            N("Gum/lozenge: 4 mg if first tobacco ≤ 30 min after waking, else 2 mg", { s: "49", d: "1 piece every 1-2 h; max 20 lozenges or 24 gum/day. Hiccups, GERD; avoid 15 min before and after eating." }),
            N("Nasal or oral inhaler", { s: "49", d: "Local irritation; avoid with nasal or airway disease." })
          ]),
          N("Pills", { i: "💊", col: "red", vs: true, s: "50" }, [
            N("Bupropion (Zyban, Wellbutrin)", { col: "orange", s: "50" }, [
              N("AVOID: seizures, eating disorders, MAOIs", { k: "bad", s: "50", d: "It lowers the seizure threshold (standard teaching)." })
            ]),
            N("Varenicline (Chantix)", { col: "violet", s: "50" }, [
              N("Nausea, vivid dreams; dose-adjust in CKD", { k: "bad", s: "50" })
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 6 */
      {
        id: "aspirin", title: "Aspirin for primary prevention", icon: "⚖️", lo: ["LO 6"], layout: "tree",
        ask: "Why isn't everyone over 40 on a baby aspirin anymore?",
        tree: N("Adult WITHOUT ASCVD: daily aspirin 81 mg?", { i: "💊", k: "q", s: "52", d: "Aspirin prevents clots but also causes bleeding, so it only makes sense when the clot benefit clearly wins.",
          j: N("Decide case by case: CV benefit vs bleeding risk", { k: "key", a: "always", s: "52" }) }, [
          N("Not for most adults", { k: "bad", a: "routine use", s: "52" }),
          N("MAY consider: age 40-70, high CV risk, LOW bleeding risk", { k: "good", a: "selected", s: "52" }),
          N("Don't start routinely: &gt; 70 or high bleeding risk", { k: "bad", a: "avoid", s: "52" })
        ])
      },

      /* ------------------------------------------------------------ LO 7 */
      {
        id: "thomas", title: "Thomas over 14 years", icon: "👨", lo: ["LO 7"], layout: "tree",
        ask: "Follow one patient from wellness visit to bypass surgery: what does each visit change?",
        tree: N("Thomas, 52", { k: "case", i: "👨", l: ["diet-controlled dyslipidemia", "smokes 1 ppd since 17", "BMI 28, waist 110 cm", "'exercise' = active job"], s: "53-54" }, [
          N("#1: quit smoking", { k: "key", a: "visit 1", s: "55", d: "He refuses an adjunct, so: think hard about each cigarette and cut down. Weight gain on quitting is real but smaller than the benefit." }, [
            N("Brisk walking ~20 min most days", { a: "plus", s: "56" }, [
              N("Labs: CBC, chemistry, fasting lipids, A1c; back in 3 months", { a: "order", s: "56" }, [
                N("3 months: ½ ppd, weight stable", { a: "follow-up", s: "57", l: ["A1c 4.8%", "LDL 108", "HDL 32 (low)", "TG 398 (high)", "GFR 55"] }, [
                  N("GFR 55 = CKD stage 3 (if it persists) → lipid-lowering regardless of PREVENT", { k: "key", a: "so", go: "statin-who", d: "Age 40-75 with stage 3-4 CKD is one of the treat-anyway groups (our reasoning from the deck's rules; CKD needs it to last > 3 months, standard teaching)." }, [
                    N("Age 55: relapses after his wife's cancer; depression", { a: "3 years later", s: "58", l: ["A1c 7.7% → diabetes", "LDL 88", "HDL 38", "TG 258"] }, [
                      N("Diabetes + CKD → A1c goal &lt; 7%, add GLP-1 RA or SGLT2i", { k: "key", a: "so", go: "other-risks", d: "T2DM with CKD is a GLP-1 RA / SGLT2i indication regardless of A1c (our application of slide 39)." }, [
                        N("HTN within a year → ARB to &lt; 130/80", { a: "then", s: "59" }, [
                          N("Age 66: NSTEMI → 3-vessel CABG", { k: "bad", a: "despite all this", s: "59" }, [
                            N("Now SECONDARY prevention: high-intensity statin", { k: "key", a: "from now on", go: "two-kinds", s: "23, 59" })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      }
    ]
  });
}());
