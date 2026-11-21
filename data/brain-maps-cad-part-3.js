/* Brain maps: CAD Part III (Stager): Chest Pain Workup, 124 slides, 9 LOs. Facts are from the deck; anything else is
   marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "cad-part-3",
    title: "CAD Part III: The Chest Pain Patient",
    short: "CAD III",
    by: "Stager",
    slides: 124,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "Chest pain walks in: how do you get from 'is it the heart?' to a stent, a bypass, or home?",
        tree: N("CAD Part III in one story", { i: "💢", d: "Chest pain is the 2nd most common reason adults come to the ED. The job: separate dangerous from benign, then match the test and treatment to the risk.", s: "2" }, [
          N("Is it cardiac?", { k: "q", i: "❓", a: "first", go: "cardiac-or-not", d: "Character, location, triggers and the differential decide how likely ischemia is.", s: "11-19" }, [
            N("Which syndrome?", { i: "🫀", a: "if ischemic", go: "syndromes", l: ["stable angina", "unstable angina", "NSTEMI", "STEMI"], s: "22-35" }, [
              N("Pain NOW, or ACS features?", { k: "q", a: "where & how fast", go: "first-steps", vs: true, s: "21, 53-55" }, [
                N("ER: EKG within 10 min, hs-troponin, aspirin", { col: "red", a: "yes", go: "er-path", s: "53-60" }, [
                  N("STEMI → cath lab now", { k: "bad", a: "ST ↑", go: "er-path", s: "56" }),
                  N("No STEMI → HEART score / Pathway", { a: "otherwise", go: "heart", s: "61-72" })
                ]),
                N("Office, pain-free, stable", { col: "blue", a: "no", go: "testing", s: "21, 75-80" }, [
                  N("Pretest probability → stress test or CCTA", { a: "risk-stratify", go: "testing", s: "77-79" })
                ])
              ])
            ])
          ]),
          N("Positive test or high risk → left heart cath", { i: "🩻", a: "then", go: "cath", k: "key", d: "A negative stress test is a good rule-out; a positive one means the next test is the cath.", s: "83-89" }, [
            N("Meds, PCI or CABG?", { k: "q", a: "decide", go: "revasc", s: "89, 113-116" }, [
              N("PCI: stent + DAPT", { col: "green", a: "few lesions", go: "stents", s: "90-96" }, [
                N("Watch for complications", { k: "bad", a: "after the cath", go: "complications", s: "99-112" })
              ]),
              N("CABG", { col: "violet", a: "left main / 3-vessel", go: "revasc", s: "113-116" }),
              N("Medical therapy", { col: "blue", a: "no critical stenosis", go: "long-term", s: "116-124" })
            ])
          ]),
          N("Thomas: stable → unstable → MI", { k: "case", i: "👴", a: "follow one patient", go: "thomas", s: "25-34" })
        ])
      },

      /* ------------------------------------------------------------ LO 1 */
      {
        id: "presentation", title: "How ischemia presents", icon: "💢", lo: ["LO 1"], layout: "spine",
        ask: "What does angina feel like, what can replace it, and who presents without chest pain at all?",
        center: "Angina pectoris", centerI: "💢", centerS: "3-13",
        centerD: "Chest pain or discomfort caused by myocardial ischemia. Patients describe pressure, tightness or heaviness, not always 'pain'.",
        centerFig: { type: "painmap", mode: "classic" },
        branches: [
          N("The classic picture", { i: "🎯", col: "red", rail: true, s: "3, 5" }, [
            N("Pressure, tightness, heaviness, squeezing, aching", { s: "3, 5" }),
            N("Substernal (can be elsewhere in the chest)", { s: "5" }),
            N("Radiates: arm(s), shoulder, neck, jaw, back", { s: "3, 5" }),
            N("Worse with exertion or stress; better with rest or NTG", { s: "5" }),
            N("With: dyspnea, diaphoresis, nausea, lightheaded, fatigue", { s: "3, 5" })
          ]),
          N("Red flag for ACS", { i: "🚨", col: "orange", k: "key", s: "5", d: "New, worsening, prolonged, or resting symptoms raise concern for ACS." }),
          N("Three kinds of angina", { i: "3️⃣", col: "gold", rail: true, s: "4", fig: { type: "acs" } }, [
            N("Stable: exertion/emotion, rests away", { s: "4" }, [
              N("Fixed plaque → SUBENDOCARDIAL ischemia", { a: "cause", s: "4, 24" })
            ]),
            N("Unstable: at rest or minimal exertion", { k: "bad", s: "4" }, [
              N("Plaque rupture + thrombosis → emergency", { a: "cause", s: "4" })
            ]),
            N("Vasospastic (Prinzmetal): can occur at rest", { s: "4" }, [
              N("Spasm → TRANSMURAL ischemia → ST elevation", { a: "cause", s: "4" })
            ])
          ]),
          N("Anginal equivalents", { i: "🔁", col: "violet", rail: true, s: "6-7", d: "A symptom other than chest discomfort that may reflect ischemia." }, [
            N("Dyspnea / worsening exercise intolerance", { s: "6-7" }),
            N("Unusual fatigue", { s: "7" }),
            N("Exertional weakness or lightheadedness, palpitations", { s: "6-7" }),
            N("Nausea or upper abdominal discomfort", { s: "7" }),
            N("Weight gain over days or leg edema", { s: "6" })
          ]),
          N("Who presents atypically", { i: "👥", col: "pink", rail: true, s: "3, 8-10" }, [
            N("Women: nausea/vomiting, abdominal pain, SOB, severe fatigue", { s: "8", d: "During an MI, women are more likely than men to have NO chest pain." }),
            N("Over 75: SOB, syncope, confusion, abdominal pain, unexplained fall", { s: "10", d: "They are 33% of ACS, yet other diagnoses are still more common causes of their chest pain." }),
            N("Elderly + diabetics: 'silent' ischemia", { k: "key", s: "3" })
          ]),
          N("Symptoms ≠ severity", { i: "⚠️", col: "red", k: "bad", s: "6", d: "Symptoms don't reliably match how much disease there is. Sudden cardiac death is sometimes the first symptom." }),
          N("Exam", { i: "🩺", col: "blue", s: "13" }, [
            N("Normal unless ischemia is happening now", { k: "key", s: "13" }, [
              N("During ischemia", { a: "but", l: ["pale, diaphoretic, uncomfortable", "dyspnea, rales", "altered mentation", "S4 (stiff LV)", "S3 (weak LV), less often"], s: "13", d: "S4 'TEN-nes-see' = noncompliant LV; S3 'Ken-TUC-ky' = systolic dysfunction." })
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 2 */
      {
        id: "cardiac-or-not", title: "Cardiac or not?", icon: "🔀", lo: ["LO 2"], layout: "spine",
        ask: "Which words make ischemia likely, and which features point somewhere else?",
        center: "Is this chest pain cardiac?", centerI: "🔀", centerS: "11-20",
        centerD: "Distinguishing serious from benign causes of chest pain is imperative: the cause is often noncardiac, but CAD is still the leading cause of death.",
        branches: [
          N("Words that raise or lower the odds", { i: "📏", col: "gold", vs: true, s: "19" }, [
            N("HIGH probability", { col: "red", l: ["central, retrosternal", "pressure, squeezing, gripping", "heaviness, tightness", "exertional / stress-related"], s: "19" }),
            N("LOW probability", { col: "green", l: ["sharp, fleeting", "shifting", "pleuritic", "positional"], s: "19", d: "Burning, tearing, ripping, right-sided and stabbing sit in between." })
          ]),
          N("2021 AHA/ACC classification", { i: "🏷️", col: "blue", rail: true, s: "11" }, [
            N("Cardiac: classic quality, location, radiation, triggers", { s: "11" }),
            N("Possible cardiac: suggests a cardiac origin", { s: "11" }),
            N("Noncardiac: persists despite negative testing or low-risk pathway", { s: "11" })
          ]),
          N("Diamond-Forrester (no longer recommended)", { i: "📜", col: "gray", s: "12", l: ["substernal", "exertional", "relieved by rest or NTG"] }, [
            N("3 of 3 = typical angina · 2 = atypical · 1 = non-anginal", { k: "key", a: "count", s: "12" })
          ]),
          N("Clues it is something else", { i: "🕵️", col: "green", rail: true, s: "17-18" }, [
            N("Pleuritic, sharp with breathing or cough → lung or MSK", { s: "17" }),
            N("Mainly mid or lower abdomen → GI", { s: "17" }),
            N("Points to it with one finger → MSK", { s: "17" }),
            N("Reproduced by movement or pressing → MSK", { s: "18" }),
            N("Constant for days → lung or MSK", { s: "18" }),
            N("Fleeting, ≤ 30 seconds → nerve (MSK)", { s: "18" }),
            N("Radiates to the legs or above the jaw → MSK", { s: "18" })
          ]),
          N("The differential", { i: "📋", col: "violet", rail: true, s: "14-16" }, [
            N("Non-ischemic cardiovascular", { l: ["aortic dissection", "pericarditis", "myocarditis", "takotsubo"], s: "14-15" }),
            N("Pulmonary", { l: ["PE", "pneumothorax", "pneumonia", "pleurisy"], s: "14-15" }),
            N("GI", { l: ["GERD / PUD", "esophagitis, spasm", "pancreatitis", "biliary colic, cholangitis"], s: "14-16", d: "Esophageal spasm can even be relieved by nitroglycerin, so NTG relief doesn't prove angina." }),
            N("Chest wall / MSK", { l: ["costochondritis", "rib fracture", "cervical disc", "zoster before the rash"], s: "14-16" }),
            N("Psychiatric", { l: ["anxiety, panic", "hyperventilation", "depression", "conversion"], s: "14-15" })
          ]),
          N("58-year-old: uphill pressure, to L shoulder, gone with 5 min rest", { i: "👨", col: "orange", k: "case", s: "20", d: "Exertional, substernal, radiating, relieved by rest, plus HTN, high lipids and 25 pack-years: this is cardiac ischemia (stable angina) until proven otherwise." })
        ]
      },

      /* ------------------------------------------------------------ LO 3 */
      {
        id: "syndromes", title: "Stable angina, UA, NSTEMI, STEMI", icon: "🫀", lo: ["LO 3"], layout: "tree",
        ask: "What changes in the artery, the EKG and the troponin as you move from stable angina to STEMI?",
        tree: N("Symptomatic coronary atherosclerosis", { i: "🫀", vs: true, s: "22", fig: { type: "acs" }, d: "Four manifestations. Numbers 2, 3 and 4 (UA, NSTEMI, STEMI) are the acute coronary syndromes." }, [
          N("STABLE ANGINA", { col: "blue", a: "predictable", s: "23-24" }, [
            N("Fixed, flow-limiting plaque", { a: "cause", s: "23" }, [
              N("Triggers: exertion, cold, emotion", { a: "demand ↑", s: "23" }, [
                N("Lasts 5-10 min; rest or NTG relieves", { k: "good", a: "so", s: "23" }, [
                  N("Subendocardial, reversible ischemia; no necrosis", { a: "where", s: "24" })
                ])
              ])
            ])
          ]),
          N("ACUTE CORONARY SYNDROME", { col: "red", a: "something changed", s: "26-27", l: ["sudden plaque rupture", "plaque grows to critical", "stress from another illness"] }, [
            N("Worse: frequency, severity, duration, less exertion, less relief", { k: "key", a: "you notice", s: "27" }, [
              N("Troponin up?", { k: "q", a: "check", s: "28-32" }, [
                N("UNSTABLE ANGINA", { col: "gold", a: "no", s: "28", d: "No troponin rise; may have ST depression or new T inversion, never ST elevation. Every ACS starts here, so the diagnosis evolves." }, [
                  N("Flow reduced, often transient; no injury", { s: "35" })
                ]),
                N("ST elevation?", { k: "q", a: "yes", s: "30-32" }, [
                  N("NSTEMI", { col: "orange", a: "no", s: "30", d: "Troponin up, with or without ischemic EKG changes, but no ST elevation. Looks like UA until hs-troponin rises." }, [
                    N("Partial occlusion; acute injury", { s: "35" })
                  ]),
                  N("STEMI", { col: "red", k: "bad", a: "yes", s: "32", d: "The hat trick: symptoms + troponin + ST elevation." }, [
                    N("Usually complete occlusion; injury with ST ↑", { s: "35" })
                  ])
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 3 */
      {
        id: "thomas", title: "Thomas: stable to unstable to MI", icon: "👴", lo: ["LO 3", "LO 4"], layout: "tree",
        ask: "What exactly changed in Thomas's story that turned stable angina into an emergency?",
        tree: N("Thomas, 72", { k: "case", i: "👴", l: ["HTN, HLD, DM, smoker", "MI + 3-vessel CABG 6 years ago", "ASA, metoprolol, losartan"], s: "25" }, [
          N("Chest pain after 15 min on the treadmill, same as 6 months ago", { a: "today", s: "25" }, [
            N("STABLE ANGINA", { k: "good", col: "blue", a: "= predictable", s: "25", d: "Same trigger, same threshold, relieved by rest. Exam normal; SL NTG renewed." }, [
              N("Pain walking in from the parking lot; then on the couch", { a: "4 months later", k: "bad", s: "29", d: "Less exertion, then at rest; needed 2 NTG. EKG normal, no ST/T changes." }, [
                N("UNSTABLE ANGINA", { col: "gold", k: "key", a: "= new pattern", s: "29", d: "Not in pain now, so an outpatient left heart cath was booked for 5 days later." }, [
                  N("11 pm: worse pain, no relief from NTG × 3 → ambulance", { a: "2 days later", k: "bad", s: "33-34", vs: true }, [
                    N("NSTEMI version", { col: "orange", a: "hs-troponin 527 → 1,637; lateral T inversions", s: "33" }, [
                      N("Heparin drip; cath at 9 am", { a: "so", s: "33" })
                    ]),
                    N("STEMI version", { col: "red", a: "troponin 527 + anterolateral ST ↑", s: "34" }, [
                      N("Cath lab within 90 min: stent", { k: "bad", a: "so", s: "34" })
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "first-steps", title: "First steps: office and ER", icon: "🚑", lo: ["LO 4"], layout: "tree",
        ask: "Your patient has chest pain: what do you ask, check and give in the first minutes?",
        tree: [
          N("Chest pain in the OFFICE", { i: "🏥", col: "blue", s: "21" }, [
            N("Having pain RIGHT NOW?", { k: "q", s: "21", x: N("Call 911: ER by ambulance", { k: "bad", a: "yes", col: "red", s: "21" }) }, [
              N("Unstable angina features?", { k: "q", a: "no", s: "21", x: N("Cardiology ASAP or the ER", { a: "yes", col: "orange", s: "21" }) }, [
                N("Risk-stratify with stress testing", { k: "good", a: "no", go: "testing", s: "21" })
              ])
            ])
          ]),
          N("Chest pain in the ER: 3 steps", { i: "🚨", col: "red", s: "53-55" }, [
            N("1 · Triage: ABCs, vitals, SpO₂, stability", { s: "53" }, [
              N("Focused history: OLDCARTS + associated symptoms + risk factors", { a: "then", s: "36-38, 53", l: ["Onset", "Location", "Duration", "Character", "Aggravating/relieving", "Radiation", "Timing", "Severity"], d: "Don't stop at OLDCARTS: ask about dyspnea, diaphoresis, nausea, palpitations, syncope, prior episodes and cardiac history." }, [
                N("Rule out other killers", { k: "key", a: "and", l: ["aortic dissection", "PE", "tension pneumothorax"], s: "53" }, [
                  N("2 · 12-lead EKG within 10 minutes", { k: "key", a: "then", go: "tests-ekg", s: "54", d: "Serial EKGs if the first is nondiagnostic. Don't wait for troponin if the EKG shows an occlusion." }, [
                    N("3 · Labs + first treatment", { a: "then", s: "55, 39" }, [
                      N("hs-troponin, CBC, BMP, glucose (± CXR)", { a: "labs", s: "39, 55" }, [
                        N("Chew aspirin 325 mg", { k: "good", a: "give", s: "55" }, [
                          N("SL nitro for ongoing pain if BP allows", { a: "consider", s: "55" }, [
                            N("Oxygen ONLY if SpO₂ &lt; 90%", { k: "key", a: "not routine", s: "55" })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          N("Exam: any vascular disease?", { i: "🩺", col: "violet", rail: true, s: "39" }, [
            N("Carotid bruit", { s: "39" }),
            N("Poor peripheral pulses", { s: "39" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "tests-ekg", title: "EKG, troponin and BNP", icon: "📈", lo: ["LO 4"], layout: "spine",
        ask: "Why is hs-troponin great at ruling MI out but worse at ruling it in?",
        center: "The first tests", centerI: "📈", centerS: "40-52",
        branches: [
          N("Resting 12-lead EKG", { i: "📈", col: "red", s: "40-43" }, [
            N("How worried?", { rail: true, s: "40" }, [
              N("ST elevation → definitive", { k: "bad", s: "40" }),
              N("New LBBB", { k: "bad", s: "40" }),
              N("ST depression → maybe", { s: "40" }),
              N("T inversion → nonspecific", { s: "40" }),
              N("LVH and PVCs", { s: "40" })
            ]),
            N("Normal EKG does NOT rule out ACS → repeat it", { k: "key", s: "41", d: "Serial EKGs when symptoms persist or recur or suspicion stays high; every 10-20 min in the ER if pain continues." })
          ]),
          N("Troponin", { i: "🧪", col: "orange", s: "44-46" }, [
            N("Leaks from damaged myocytes", { s: "44" }, [
              N("Troponin I = only in heart cells → most specific", { k: "key", a: "so", s: "45" }, [
                N("Detectable 4-6 h → peaks → stays up 7-10 days", { a: "timing", s: "45" }, [
                  N("Sensitivity 50% at 4 h, 97% at 6 h · specificity 95%", { k: "num", a: "so", s: "46", d: "An early first troponin can be normal: repeat it." })
                ])
              ])
            ]),
            N("Also up WITHOUT MI", { k: "bad", rail: true, s: "44, 46" }, [
              N("Cardiac stress: tachyarrhythmia, PE with RV failure, decompensated HF", { s: "44" }),
              N("ESRD / CKD IV (poor clearance): compare to baseline", { s: "46" })
            ])
          ]),
          N("High-sensitivity troponin", { i: "🔬", col: "gold", s: "47-50, 66", vs: true, d: "Same molecule, measured much more precisely at much lower levels: detectable in > 50% of healthy people." }, [
            N("Sensitivity ↑", { col: "green", s: "48" }, [
              N("High NPV: no rise = no MI", { k: "good", a: "so", s: "48" }, [
                N("Fast, safe discharge of low-risk patients", { a: "so", s: "48, 50" })
              ])
            ]),
            N("Specificity ↓", { col: "red", s: "49" }, [
              N("Lower PPV: more false alarms", { k: "bad", a: "so", s: "49" }, [
                N("More non-cardiac patients get worked up", { a: "so", s: "49" })
              ])
            ])
          ]),
          N("hs-troponin timing", { i: "⏱️", col: "teal", rail: true, s: "50, 66" }, [
            N("Single value &lt; 99th percentile if &gt; 2 h after onset → ACS much less likely", { s: "50" }),
            N("Repeat at 1-2 h (90-120 min): both low + little change → home", { k: "key", s: "50, 66" }),
            N("Intermediate risk: repeat again at 3-6 h", { s: "66" }),
            N("Conventional troponin: 0 and 3-6 h", { s: "66" })
          ]),
          N("BNP", { i: "💧", col: "blue", s: "51-52" }, [
            N("Made by stretched ventricles (high filling pressure)", { s: "51-52" }, [
              N("Natriuresis + diuresis; blocks RAAS and sympathetic; + inotropy", { a: "effects", s: "52" }, [
                N("Useless in AKI / significant CKD: always high", { k: "bad", a: "but", s: "52", d: "Renally cleared. BNP and NT-proBNP (inert fragment) are not comparable: labs pick one." })
              ])
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "er-path", title: "ER pathway: STEMI or not", icon: "🚨", lo: ["LO 4"], layout: "tree",
        ask: "After the first EKG, which road does the patient go down, and what drugs go with each?",
        howto: "Every question: <b>YES goes right →</b>, <b>NO goes down ↓</b>.",
        tree: N("ER chest pain: first EKG read", { i: "📈", s: "56-61" }, [
          N("ST ↑ in ≥ 2 contiguous leads + ischemic picture?", { k: "q", s: "56",
            x: N("STEMI: activate cath lab, aspirin + P2Y12 (ticagrelor/prasugrel over clopidogrel), primary PCI", { k: "bad", a: "yes", col: "red", s: "56" }) }, [
            N("hs-troponin now, repeat in 1-2 h", { a: "no", s: "57" }, [
              N("H&amp;P + troponin highly suggestive of ACS?", { k: "q", s: "57-58",
                x: N("Cardiology to bedside; admit as UA/NSTEMI", { a: "yes", col: "orange", s: "57-58" }) }, [
                N("Pain-free quickly → HEART score: home or observe?", { a: "no", go: "heart", s: "61-64" })
              ])
            ])
          ]),
          N("If ACS: while you wait", { k: "key", a: "treat", rail: true, s: "58-60" }, [
            N("Repeat EKG every 10-20 min while pain continues", { s: "58" }),
            N("SL nitro; IV nitro if pain persists, HTN, or pulmonary edema", { s: "59" }),
            N("Oral beta blocker within 24 h", { s: "59" }),
            N("Anticoagulate: UFH or enoxaparin", { s: "60" }),
            N("Keep looking for other or concurrent causes", { s: "60" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 5 */
      {
        id: "heart", title: "HEART score and HEART Pathway", icon: "❤️", lo: ["LO 5"], layout: "spine",
        ask: "Pain is gone and the first tests look OK: who can safely go home?",
        center: "HEART: 5 letters, 0-2 points each", centerI: "❤️", centerS: "63-64",
        centerFig: { type: "heartscore", start: [1, 0, 1, 1, 0] },
        centerD: "Risk-stratification score from 0 to 10 for ER chest pain patients.",
        branches: [
          N("The 5 letters", { i: "🔤", col: "red", rail: true, s: "63" }, [
            N("<b>H</b>istory: highly 2 · moderately 1 · not suspicious 0", { s: "63" }),
            N("<b>E</b>KG: significant ST ↓ 2 · nonspecific, LBBB, LVH 1 · normal 0", { s: "63" }),
            N("<b>A</b>ge: ≥ 65 → 2 · 45-64 → 1 · &lt; 45 → 0", { s: "63" }),
            N("<b>R</b>isk factors: ≥ 3 or known CAD 2 · 1-2 → 1 · none 0", { s: "63" }),
            N("<b>T</b>roponin: &gt; 3× normal 2 · 1-3× → 1 · normal 0", { s: "63" })
          ]),
          N("What the total means", { i: "🚦", col: "gold", rail: true, s: "64" }, [
            N("0-3 LOW → discharge if EKG + troponins reassuring", { k: "good", s: "64" }),
            N("4-6 INTERMEDIATE → serial troponins, observe, CCTA or stress", { s: "64, 72" }),
            N("7-10 HIGH → urgent evaluation, hospital care", { k: "bad", s: "64" })
          ]),
          N("HEART Pathway = score + 2 checks", { i: "🛤️", col: "green", s: "69-71" }, [
            N("Score ≤ 3 + no ischemic EKG + negative serial troponins", { k: "key", s: "69-70", d: "The original pathway also excludes known CAD. Score = a number; Pathway = a decision tool." }, [
              N("30-day death/MACE &lt; 1%", { k: "num", a: "means", s: "69, 71" }, [
                N("Home: no admission, no urgent stress test/CCTA, outpatient follow-up, fix risk factors", { k: "good", a: "so", s: "71" })
              ])
            ])
          ]),
          N("Negative workup ≠ no CAD", { i: "💬", col: "violet", k: "key", s: "67-68", d: "Nonischemic EKG + negative serial hs-troponins make acute MI unlikely, but CAD could still explain the symptoms: decide whether more testing is needed." }),
          N("Intermediate: what next", { i: "🔍", col: "blue", vs: true, go: "testing", s: "72" }, [
            N("CCTA", { col: "blue", s: "72" }, [N("Shows anatomy", { a: "why", s: "72" })]),
            N("Stress imaging", { col: "green", s: "72" }, [N("Shows inducible ischemia", { a: "why", s: "72" })])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 6 */
      {
        id: "testing", title: "Choosing the test", icon: "🧭", lo: ["LO 6"], layout: "spine",
        ask: "Stable patient, suspected CAD: CCTA, stress test, or straight to the cath?",
        center: "Pick the test by pretest probability", centerI: "🧭", centerS: "73-85",
        branches: [
          N("Pretest probability", { i: "🎯", col: "gold", s: "77-79", l: ["age", "sex", "symptom type", "clinical judgment"] }, [
            N("Low ≤ 15%", { k: "good", s: "79" }, [
              N("Defer testing, or exercise EKG in selected patients", { a: "so", s: "79" })
            ]),
            N("Intermediate-high &gt; 15%", { k: "bad", s: "79" }, [
              N("Stress test or CCTA", { a: "so", s: "79" })
            ])
          ]),
          N("CCTA", { i: "🖥️", col: "blue", s: "73-74", d: "CT + IV contrast. For stable chest pain, intermediate-to-high likelihood, no known CAD." }, [
            N("Sees calcified + soft plaque; normal study = obstructive CAD very unlikely", { k: "good", a: "plus", s: "74" }),
            N("Contrast; calcium or fast/irregular HR blur it; can't say if a lesion CAUSES ischemia", { k: "bad", a: "minus", s: "74" })
          ]),
          N("Stress test", { i: "🏃", col: "green", s: "75-76", d: "For clinically stable patients, never for active chest pain." }, [
            N("Exercise or pharmacologic", { s: "75" }, [
              N("ECG alone · echo · nuclear MPI · cardiac MRI", { a: "read with", s: "75" })
            ]),
            N("Negative = good rule-out", { k: "good", s: "83" }),
            N("Positive → left heart cath", { k: "bad", s: "83" })
          ]),
          N("Left heart cath", { i: "🩻", col: "violet", go: "cath", s: "84-85", d: "Invasive with small risk: used when CAD is very likely or noninvasive tests can't rule it out. Patient must lie flat and be NPO after midnight." }, [
            N("Possible results", { rail: true, s: "85" }, [
              N("No disease = false-positive stress test", { s: "85" }),
              N("Stentable → diagnostic AND therapeutic", { k: "good", s: "85" }),
              N("Better for meds or surgery → diagnostic only", { s: "85" })
            ])
          ]),
          N("Cases", { i: "👥", col: "pink", rail: true, s: "76, 80-82" }, [
            N("Jane, 69: uphill pressure on vacation, gone with rest, well now", { k: "case", s: "76", d: "Stable, pain-free, suspected stable angina: an outpatient stress test fits." }),
            N("Stan, 46: chest pain mowing after 20 min, 3 months", { k: "case", s: "81-82" }, [
              N("Lexiscan MPI: no EKG change but reversible ischemia → POSITIVE → cath", { k: "key", a: "result", s: "82-83", d: "Ischemia on EKG OR imaging makes a stress test positive." })
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 6-7 */
      {
        id: "cath", title: "Reading the cath", icon: "🩻", lo: ["LO 6", "LO 7"], layout: "spine",
        ask: "How narrow is significant, and how do you prove a narrowing actually limits flow?",
        center: "Left heart cath findings", centerI: "🩻", centerS: "86-89",
        branches: [
          N("How narrow is significant?", { i: "📏", col: "red", rail: true, s: "86" }, [
            N("≥ 70% for most arteries", { k: "key", s: "86" }),
            N("≥ 50% for the LEFT MAIN", { k: "key", s: "86", d: "The left main feeds most of the left ventricle, so a smaller narrowing matters." }),
            N("In between? measure physiology", { s: "86" }, [
              N("FFR ≤ 0.80 or iFR ≤ 0.89 = significant", { k: "bad", a: "then", s: "86-88", d: "FFR = pressure beyond the stenosis ÷ pressure before it: tells whether it limits flow enough to cause ischemia." })
            ])
          ]),
          N("TIMI flow grade", { i: "🌊", col: "blue", rail: true, s: "87", fig: { type: "timi" } }, [
            N("0: no flow (complete occlusion)", { k: "bad", s: "87" }),
            N("1: penetration without perfusion", { s: "87" }),
            N("2: partial perfusion, delayed", { s: "87" }),
            N("3: normal flow = the goal after PCI", { k: "good", s: "87" })
          ]),
          N("What the findings decide", { i: "⚖️", col: "gold", vs: true, go: "revasc", s: "89" }, [
            N("Medical therapy", { col: "blue", l: ["risk reduction", "statin", "antiplatelet", "antianginals"], s: "89" }),
            N("Consider PCI or CABG", { col: "red", l: ["high-risk anatomy", "physiologically significant", "angina despite meds", "patient preference"], s: "89" })
          ]),
          N("Chronic total occlusion (CTO)", { i: "🧱", col: "violet", s: "97-98", d: "100% occlusion, TIMI 0, present ≥ 3 months." }, [
            N("Collaterals grow as it slowly closes", { s: "97" }, [
              N("Enough at rest, not with exercise → exertional angina (or none)", { a: "so", s: "97" }, [
                N("Treat: optimal meds · CTO PCI · CABG", { a: "options", s: "98" }, [
                  N("CTO PCI if lifestyle-limiting angina despite meds + ischemic or viable territory", { k: "key", a: "when", s: "98" })
                ])
              ])
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 7 */
      {
        id: "revasc", title: "Meds, PCI or CABG?", icon: "🛠️", lo: ["LO 7"], layout: "tree",
        ask: "Which patients do better with a bypass, which with a stent, and which with pills alone?",
        tree: [
          N("Revascularize? Anatomy + ischemia + symptoms + patient", { i: "🛠️", s: "89, 116", rail: false }, [
            N("CABG better", { col: "violet", i: "🪡", l: ["left main ≥ 50%", "3-vessel disease", "multivessel + diabetes (with LAD)", "multivessel + LV dysfunction", "complex or diffuse disease"], s: "114, 116", d: "EF < 35% with multivessel CAD: CABG recommended; EF 35-50%: reasonable in selected patients." }),
            N("PCI better", { col: "green", i: "🎈", l: ["limited number of lesions", "normal LV function"], s: "116" }),
            N("Medical therapy only", { col: "blue", i: "💊", l: ["no critical stenosis (&lt; 70%)", "no LV systolic dysfunction"], s: "116" })
          ]),
          N("CABG conduits", { i: "🪡", col: "violet", s: "113, 115", d: "Saphenous vein, internal mammary or radial artery, sewn from the aorta to the coronary beyond the blockage." }, [
            N("LIMA → LAD: ~90%+ open at 10 years", { k: "good", s: "115" }),
            N("Radial artery: preferred 2nd arterial graft", { s: "115" }),
            N("Saphenous vein: ~50-60% open at 10 years", { k: "bad", s: "115", d: "Memory aid: arteries last, veins fail." })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 8 */
      {
        id: "stents", title: "Stents and DAPT", icon: "🎈", lo: ["LO 8"], layout: "spine",
        ask: "Why does a stent need two antiplatelet drugs, and how is a clot different from restenosis?",
        center: "PCI: balloon, then stent", centerI: "🎈", centerS: "90-96",
        centerFig: { type: "artery", stage: "stent" },
        branches: [
          N("Two kinds of stent", { i: "🔩", col: "blue", vs: true, s: "90, 93" }, [
            N("Bare-metal (BMS)", { col: "gray", l: ["metal scaffold only", "higher restenosis", "older"], s: "90, 93" }),
            N("Drug-eluting (DES)", { col: "green", l: ["releases an antiproliferative drug", "lower restenosis", "preferred today"], s: "90, 93" }, [
              N("Less restenosis WITHOUT more stent thrombosis", { k: "key", s: "93" })
            ])
          ]),
          N("Two different failures", { i: "⚠️", col: "red", vs: true, s: "94" }, [
            N("In-stent THROMBOSIS", { col: "red", s: "94" }, [
              N("Clot: sudden, hours to years later", { k: "bad", s: "94" }, [
                N("Presents as ACS / MI", { a: "so", s: "94" }, [
                  N("Risk: stopping DAPT early, poor expansion, malapposition", { a: "why", s: "94" })
                ])
              ])
            ]),
            N("In-stent RESTENOSIS", { col: "orange", s: "94" }, [
              N("Tissue regrowth: gradual", { s: "94" }, [
                N("Recurrent angina", { a: "so", s: "94" }, [
                  N("Neointimal hyperplasia (± neoatherosclerosis)", { a: "why", s: "94", d: "This is exactly what the DES drug suppresses." })
                ])
              ])
            ])
          ]),
          N("Why DAPT?", { i: "🩸", col: "gold", s: "95", fig: { type: "platelet" } }, [
            N("Balloon + stent injure the lining, expose thrombogenic surface", { s: "95" }, [
              N("Platelets stick before endothelium covers the stent", { k: "bad", a: "so", s: "95" }, [
                N("Aspirin (blocks thromboxane A₂) + P2Y12 inhibitor (blocks ADP)", { k: "key", a: "prevent with", s: "95", l: ["clopidogrel", "prasugrel", "ticagrelor"], d: "Clopidogrel and prasugrel are thienopyridines; ticagrelor is not." })
              ])
            ])
          ]),
          N("How long?", { i: "📅", col: "teal", vs: true, s: "96" }, [
            N("ACS treated with PCI", { col: "red", s: "96" }, [N("DAPT ≥ <b>12 months</b> (if not high bleeding risk)", { k: "num", s: "96" })]),
            N("Chronic CAD treated with PCI", { col: "blue", s: "96" }, [N("ASA + clopidogrel <b>6 months</b>, then one antiplatelet", { k: "num", s: "96" })])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 9 */
      {
        id: "complications", title: "Cath complications", icon: "⚠️", lo: ["LO 9"], layout: "spine",
        ask: "After a cath: back pain and falling Hgb, a pulsatile lump, a continuous bruit, blue toes. What is each?",
        center: "Complications after cath / PCI", centerI: "⚠️", centerS: "99-112",
        branches: [
          N("By access site", { i: "📍", col: "gray", vs: true, s: "99" }, [
            N("Radial (wrist)", { col: "blue", l: ["hematoma, bleeding", "radial artery occlusion", "perforation", "compartment syndrome (rare)"], s: "99" }),
            N("Femoral (groin)", { col: "red", l: ["hematoma, bleeding", "pseudoaneurysm", "AV fistula", "retroperitoneal bleed"], s: "99" })
          ]),
          N("Retroperitoneal hemorrhage", { i: "🩸", col: "red", s: "100-102" }, [
            N("HIGH femoral puncture (above the inguinal ligament)", { s: "100" }, [
              N("Blood collects behind the peritoneum: hidden", { a: "so", s: "100" }, [
                N("Flank/back/abdominal pain, ↓ BP, ↑ HR, falling Hgb; groin may look normal", { k: "bad", a: "presents", s: "101" }, [
                  N("CT / CTA abdomen-pelvis → support, transfuse, endovascular or surgery", { k: "key", a: "do", s: "102" })
                ])
              ])
            ])
          ]),
          N("Pseudoaneurysm", { i: "🎈", col: "orange", s: "103-105" }, [
            N("Puncture doesn't seal; blood pools held by tissue", { s: "103" }, [
              N("Pain out of proportion, swelling, PULSATILE mass, bruit", { k: "bad", a: "presents", s: "104" }, [
                N("Duplex ultrasound", { k: "key", a: "test", s: "104" }, [
                  N("&lt; 2 cm observe · US-guided thrombin injection (preferred) · compression · surgery", { a: "treat", s: "105" })
                ])
              ])
            ])
          ]),
          N("AV fistula", { i: "🔗", col: "violet", s: "106-107" }, [
            N("Needle injures artery AND vein → connection", { s: "106" }, [
              N("CONTINUOUS bruit or thrill", { k: "bad", a: "presents", s: "106" }, [
                N("Often closes alone · compression · covered stent/embolization · surgery", { a: "treat", s: "107" })
              ])
            ])
          ]),
          N("Kidney: two different AKIs", { i: "🫘", col: "gold", vs: true, s: "108-112" }, [
            N("Contrast-associated AKI", { col: "blue", s: "108" }, [
              N("Soon after contrast; risk: CKD ≥ 3b, diabetes", { s: "108" }, [
                N("Prevent: hydration + hold nephrotoxins", { k: "good", a: "so", s: "108" })
              ])
            ]),
            N("Cholesterol emboli AKI", { col: "red", s: "112" }, [
              N("LATER and progressive", { k: "bad", s: "112" }, [
                N("Eosinophilia in up to 80%", { k: "num", a: "clue", s: "112" })
              ])
            ])
          ]),
          N("Cholesterol emboli syndrome", { i: "🦶", col: "pink", s: "109-112" }, [
            N("Catheter knocks plaque loose → crystals plug small arterioles", { s: "109" }, [
              N("Mechanical plugging + intense inflammation", { a: "causes", s: "109" }, [
                N("Signs", { a: "so", rail: true, s: "110-112" }, [
                  N("Livedo reticularis; blue toes WITH intact pulses", { k: "key", s: "110" }),
                  N("Fever, anorexia, weight loss, fatigue, myalgias", { s: "111" }),
                  N("Mesenteric ischemia: pain out of proportion, lactic acidosis", { s: "111" }),
                  N("Progressive AKI + eosinophilia; treatment is supportive", { s: "112" })
                ])
              ])
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 7 */
      {
        id: "long-term", title: "Long-term CAD care", icon: "📆", lo: ["LO 7"], layout: "spine",
        ask: "After the stent or bypass (or instead of one): which drugs save lives, and which only treat symptoms?",
        center: "Living with CAD", centerI: "📆", centerS: "117-124",
        centerD: "Goals: slow or stop progression (fewer ACS) and relieve angina. AGGRESSIVE risk factor reduction is the cornerstone. Cardiology visits every 3-6 months.",
        branches: [
          N("Targets", { i: "🎯", col: "gold", rail: true, s: "119" }, [
            N("A1c &lt; 7% (some &lt; 6.5%)", { s: "119" }),
            N("LDL &lt; 100, most say &lt; 70 (statin); TG &lt; 200", { s: "119" }),
            N("BP &lt; 130/80", { s: "119" }),
            N("Stop smoking", { s: "119" }),
            N("BMI ≤ 24; exercise 30-60 min, 5×/week", { s: "119" })
          ]),
          N("Drugs that LOWER MORTALITY", { i: "🛡️", col: "green", rail: true, s: "120, 123" }, [
            N("High-intensity statin: atorvastatin 40-80 or rosuvastatin 20-40", { k: "key", s: "120" }),
            N("Aspirin 81-162 mg (P2Y12 inhibitor if aspirin allergy)", { k: "key", s: "120" }),
            N("ACEi/ARB if diabetes or LV systolic dysfunction", { s: "123" })
          ]),
          N("Drugs for SYMPTOMS (antianginals)", { i: "💊", col: "blue", rail: true, s: "123-124" }, [
            N("Beta blocker: ↓ HR, contractility, BP", { s: "124", d: "Side effects: bradycardia, hypotension, bronchospasm, depression; can worsen HF or heart block. NOT in vasospastic angina." }),
            N("Nitrates: ↓ preload/afterload + coronary dilation", { s: "124", d: "Headache, flushing, orthostasis; tachyphylaxis (tolerance)." }),
            N("CCB (verapamil, diltiazem): ↓ HR/BP + coronary dilation", { s: "124", d: "Bradycardia, hypotension, constipation; can worsen HF or heart block." }),
            N("Ranolazine: blocks late Na⁺ current → no Ca²⁺ overload", { s: "124", d: "No effect on HR or BP. Dizziness, headache, QTc prolongation." })
          ]),
          N("Every visit: how much angina?", { i: "🗣️", col: "violet", s: "121-122" }, [
            N("Ask about SL nitro use and anginal equivalents", { s: "121" }, [
              N("CCS class", { a: "grade it", rail: true, s: "122", fig: { type: "ladder", steps: [["I", "Only strenuous, rapid or prolonged exertion", "ok"], ["II", "Brisk walking, uphill, stairs fast, after meals", "mid"], ["III", "1-2 blocks or 1 flight at a normal pace", "bad"], ["IV", "Any activity, maybe at rest", "bad"]] } }, [
                N("I: no limit; only strenuous exertion", { s: "122" }),
                N("II: slight limit; brisk walking, uphill, after meals", { s: "122" }),
                N("III: marked limit; 1-2 blocks or 1 flight", { s: "122" }),
                N("IV: any activity; may occur at rest", { k: "bad", s: "122" })
              ])
            ])
          ])
        ]
      }
    ]
  });
}());
