/* Brain maps: Cardiac Testing, Coronary Angiogram (Sillaman), 32 slides. Facts are from the deck; anything else is
   marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "coronary-angiogram",
    title: "Cardiac Testing: Coronary Angiogram",
    short: "Angiogram",
    by: "Sillaman",
    slides: 32,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "Who goes to cath, how is it done safely, and when do the CT tests do the job instead?",
        tree: N("Seeing inside the coronary arteries", { i: "🫀", d: "Cardiac cath with angiography is the gold standard for coronary atherosclerosis.", s: "3" }, [
          N("Who goes to cath", { col: "gold", i: "📋", a: "first", go: "who", s: "4-6" }),
          N("Before: prep and holds", { col: "blue", i: "💊", a: "then", go: "prep", s: "7, 23" }),
          N("During: access, pictures, PCI", { col: "violet", i: "🩻", a: "then", go: "how", s: "8-15" }),
          N("After: sheath, closure, recovery", { col: "green", i: "🩹", a: "then", go: "after", s: "16-21" }),
          N("What can go wrong", { col: "red", i: "⚠️", a: "watch", go: "complications", s: "22" }),
          N("Without a catheter", { col: "orange", i: "🖥️", a: "or", vs: true, s: "26-31" }, [
            N("Coronary CT angiogram", { go: "cta", s: "26-29" }),
            N("Calcium score", { go: "calcium", s: "30-31" })
          ]),
          N("Right heart cath: pressures, not pictures", { col: "gray", i: "🎈", a: "also", go: "rhc", s: "24-25" })
        ])
      },

      /* ------------------------------------------------------------ LO 3-4 */
      {
        id: "who", title: "Who goes to cath, and who should wait", icon: "📋", lo: ["LO 3", "LO 4"], layout: "spine",
        ask: "Name who goes after testing, who goes straight to cath, and what makes you wait.",
        center: "Coronary angiogram", centerI: "📋", centerS: "4-6",
        branches: [
          N("After other tests", { i: "🔎", col: "blue", rail: true, s: "4" }, [
            N("Angina limiting life despite max medical therapy", { k: "key", s: "4" }),
            N("High-risk noninvasive test", { k: "key", s: "4" }),
            N("Atypical symptoms + equivocal stress test", { s: "4" }),
            N("New-onset cardiomyopathy", { s: "4" })
          ]),
          N("Straight to cath", { i: "🚨", col: "red", rail: true, s: "5" }, [
            N("ACS: STEMI, NSTEMI, unstable angina", { k: "key", s: "5" }),
            N("Sudden cardiac arrest", { s: "5" }),
            N("Life-threatening ventricular arrhythmia", { s: "5" }),
            N("New symptomatic HF", { s: "5" })
          ]),
          N("Wait or reconsider (all relative)", { i: "✋", col: "orange", rail: true, s: "6" }, [
            N("Kidneys + bleeding: ARF, GI bleed, coagulopathy, anemia", { k: "bad", s: "6" }),
            N("Infection: fever, untreated infection, aortic valve endocarditis", { s: "6" }),
            N("Unstable: stroke, severe HTN, electrolytes, digitalis toxicity, pulmonary edema", { s: "6" }),
            N("Practical: contrast anaphylaxis, PAD blocks access", { s: "6" }),
            N("Pointless: refuses PCI, life drastically shortened", { s: "6" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 5, 8 */
      {
        id: "prep", title: "Before the cath: holds and allergy prep", icon: "💊", lo: ["LO 5", "LO 8"], layout: "tree",
        ask: "Which drugs are held, until when, and how do you prep a contrast-allergic patient?",
        tree: N("Contrast + an artery puncture", { i: "💊", d: "Protect the kidneys from contrast and the access site from bleeding.", s: "7" }, [
          N("Kidneys", { col: "blue", rail: true, a: "protect", s: "7" }, [
            N("ACE-I, ARB, diuretics may be held the morning of", { s: "7" }),
            N("Metformin: held day of + 48 h after", { k: "key", s: "7" })
          ]),
          N("Bleeding", { col: "red", rail: true, a: "protect", s: "7" }, [
            N("Hold anticoagulation; INR < 1.5", { k: "num", s: "7" })
          ]),
          N("Routine", { col: "gray", rail: true, a: "and", s: "7" }, [
            N("NPO after midnight", { s: "7" }),
            N("Shave + sedative", { s: "7" })
          ]),
          N("Contrast allergy?", { k: "q", a: "if", s: "23" }, [
            N("Prednisone 50 mg at 13, 7 and 1 h before", { k: "key", s: "23" }),
            N("Benadryl 50 mg 1 h before", { s: "23" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 2 & 7 */
      {
        id: "how", title: "How a cath is done", icon: "🩻", lo: ["LO 2", "LO 7"], layout: "tree",
        ask: "Walk the catheter from the skin to the stent.",
        tree: N("Get into an artery", { i: "🩻", s: "10" }, [
          N("Which artery?", { k: "q", a: "pick", vs: true, s: "10" }, [
            N("Femoral (groin)", { col: "violet", s: "10-11" }, [
              N("≤ 3 cm below the inguinal ligament", { k: "num", s: "11" }, [
                N("Too high: retroperitoneal bleed", { k: "bad", s: "11" }),
                N("Too low: pseudoaneurysm", { k: "bad", s: "11" })
              ])
            ]),
            N("Radial (wrist)", { col: "blue", s: "10, 20" }, [
              N("Closed with a TR band", { go: "after", s: "20" })
            ])
          ]),
          N("Catheter up the aorta", { a: "then", s: "8, 10" }, [
            N("Curved tip hooks the coronary opening", { a: "then", s: "12" }, [
              N("Dye + X-ray: blockage = gap", { a: "film", k: "key", s: "13, 15" }, [
                N("Is it ≥ 70%?", { k: "q", vs: true, s: "14" }, [
                  N("Under 70%: not flow-limiting, rarely revascularize", { k: "good", s: "14" }),
                  N("Flow-limiting: PCI, balloon + stent", { k: "key", s: "14-15" })
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ after */
      {
        id: "after", title: "After the cath: closing the hole", icon: "🩹", lo: ["LO 5", "LO 7"], layout: "tree",
        ask: "When does the sheath come out, how is bleeding stopped, and what are the rules afterward?",
        tree: N("A hole in an artery", { i: "🩹", s: "16-20" }, [
          N("Femoral sheath", { col: "violet", a: "groin", s: "16" }, [
            N("Wait until heparin is below peak (~4 h)", { k: "num", d: "Hourly vitals and groin checks every 30 minutes meanwhile.", s: "16" }, [
              N("Pull + press ~20 min", { a: "then", s: "16" }, [
                N("Bedrest 6 h", { k: "num", s: "16" })
              ])
            ])
          ]),
          N("Ways to stop bleeding", { col: "green", rail: true, a: "how", s: "18-20" }, [
            N("Hand pressure", { s: "18" }),
            N("Mechanical clamp: long holds, big sheath, DAPT, hematoma", { s: "18" }),
            N("Closure device (Mynx): not with a hematoma; endarteritis risk", { k: "bad", s: "19" }),
            N("TR band for radial", { s: "20" })
          ]),
          N("Recovery", { col: "blue", rail: true, a: "then", s: "17" }, [
            N("Vitals q15 min × 1 h, q30 min × 3 h, q4 h × 24 h", { k: "num", s: "17" }),
            N("No lifting > 10 lbs or hard exercise for 1 week", { k: "key", s: "17" }),
            N("Metformin back after 48 h", { s: "7" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 6 */
      {
        id: "complications", title: "Complications", icon: "⚠️", lo: ["LO 6"], layout: "spine",
        ask: "Name the big three with their rates, the vascular ones (acute and late), and the rest.",
        center: "Cath complications", centerI: "⚠️", centerS: "22",
        branches: [
          N("Rare but serious", { i: "💀", col: "red", rail: true, s: "22" }, [
            N("Death 0.1%", { k: "num", s: "22" }),
            N("MI 0.1%", { k: "num", s: "22" }),
            N("Stroke 0.4% during PCI", { k: "num", s: "22" })
          ]),
          N("Vascular: acute", { i: "🩸", col: "orange", rail: true, s: "22" }, [
            N("Thrombosis / distal embolization", { s: "22" }),
            N("Dissection", { s: "22" }),
            N("Hematoma / hemorrhage", { s: "22" }),
            N("Retroperitoneal hemorrhage (stick too high)", { k: "bad", s: "11, 22" })
          ]),
          N("Vascular: late", { i: "⏳", col: "violet", rail: true, s: "22" }, [
            N("Pseudoaneurysm (stick too low)", { s: "11, 22" }),
            N("AV fistula", { s: "22" })
          ]),
          N("Other", { i: "🧪", col: "blue", rail: true, s: "22" }, [
            N("Arrhythmia", { s: "22" }),
            N("Iodine contrast allergy", { go: "prep", s: "22-23" }),
            N("Acute kidney injury", { s: "22" })
          ])
        ]
      },

      /* ------------------------------------------------------------ right heart cath */
      {
        id: "rhc", title: "Right heart cath (Swan-Ganz)", icon: "🎈", lo: ["Right heart cath"], layout: "tree",
        ask: "What does the Swan-Ganz measure, and when do you need those numbers?",
        tree: N("Catheter through the right heart into the pulmonary artery", { i: "🎈", s: "24" }, [
          N("Measures directly", { col: "blue", rail: true, a: "gives", s: "24" }, [
            N("CVP + right-sided pressures", { s: "24" }),
            N("Pulmonary artery pressure", { s: "24" }),
            N("Wedge (pulmonary capillary occlusion) pressure", { k: "key", s: "24" }),
            N("Cardiac output", { s: "24" }),
            N("SvO₂", { s: "24" })
          ]),
          N("Use it when", { col: "red", rail: true, a: "for", s: "25" }, [
            N("Shock with unknown volume status", { k: "key", s: "25" }),
            N("Severe cardiogenic shock", { s: "25" }),
            N("Pulmonary artery hypertension", { s: "25" }),
            N("Severe cardiopulmonary disease: shunts, valves, congenital", { s: "25" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 9 */
      {
        id: "cta", title: "Coronary CT angiogram", icon: "🖥️", lo: ["LO 9"], layout: "tree",
        ask: "Who gets it, how do you get a clear picture, and what is it best at?",
        tree: N("Noninvasive coronary angiography", { i: "🖥️", s: "26-27" }, [
          N("Who", { col: "gold", rail: true, a: "for", s: "26-27" }, [
            N("Intermediate risk + equivocal stress test", { k: "key", s: "27" }),
            N("Nondiagnostic stress test, strong suspicion", { s: "26" }),
            N("Congenital coronary anomalies", { s: "27" })
          ]),
          N("Get a still, wide artery", { col: "blue", rail: true, a: "prep", s: "27" }, [
            N("Beta blocker to HR 60-70", { k: "num", s: "27" }),
            N("Nitroglycerin to dilate", { s: "27" }),
            N("IV contrast", { s: "27" })
          ]),
          N("Accuracy", { a: "result", vs: true, s: "28" }, [
            N("Rules OUT well: NPV 95-100%", { col: "green", k: "good", s: "28" }),
            N("Rules in less well: PPV 91-93% left main/grafts, 60-84% others", { col: "orange", s: "28" })
          ]),
          N("Fails with", { col: "red", rail: true, a: "limits", s: "29" }, [
            N("HR > 70 or irregular rhythm", { k: "bad", s: "29" }),
            N("Can't hold breath 5 s", { s: "29" }),
            N("Heavy calcium or prior stents", { s: "29" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 10 */
      {
        id: "calcium", title: "Coronary calcium score", icon: "🦴", lo: ["LO 10"], layout: "tree",
        ask: "Who is it for, what can't it tell you, and how do you read the number?",
        tree: N("Screening CT for coronary calcium", { i: "🦴", d: "For asymptomatic low-intermediate and intermediate risk patients.", s: "30" }, [
          N("Tells you", { a: "can", col: "green", rail: true, s: "30" }, [
            N("Plaque burden: how much atherosclerosis", { k: "good", s: "30" }),
            N("Zero strongly predicts no atherosclerosis", { k: "good", s: "30" })
          ]),
          N("Can NOT tell you how tight a stenosis is", { a: "can't", k: "bad", s: "30" }),
          N("Read the score", { a: "read", k: "q", s: "31" }, [
            N("0: no identifiable disease", { col: "green", s: "31" }, [
              N("1-99: mild", { col: "gold", s: "31" }, [
                N("100-399: moderate", { col: "orange", s: "31" }, [
                  N("> 400: severe", { col: "red", k: "bad", s: "31" })
                ])
              ])
            ])
          ])
        ])
      }
    ]
  });
})();
