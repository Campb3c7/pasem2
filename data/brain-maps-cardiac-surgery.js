/* Brain maps: Cardiac Surgery (Gardner): Intro to Cardiac Surgery, 58 slides, 9 LOs. Facts are from the deck; anything else is
   marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "cardiac-surgery",
    title: "Cardiac Surgery",
    short: "Surgery",
    by: "Gardner",
    slides: 58,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "Follow one CAD patient from \"should we operate?\" to the ICU call at 8 hours.",
        tree: N("CAD patient", { i: "🫀", d: "Medicines first; go invasive when they fail or an acute event happens.", s: "13" }, [
          N("Go invasive? Risk/benefit", { col: "blue", i: "⚖️", a: "meds fail or acute event", go: "decide", s: "13-14" }, [
            N("tPA, PCI or CABG?", { k: "q", a: "pick one", go: "decide", s: "12, 19" }, [
              N("PCI: 1-2 vessels, no proximal LAD", { go: "decide", s: "19" }),
              N("CABG: 3-vessel SYNTAX ≥ 23, left main", { go: "who", s: "19, 21-22" })
            ])
          ]),
          N("In the OR", { col: "violet", i: "🔧", a: "CABG", go: "cpb", s: "24-27" }, [
            N("Bypass machine + cold K⁺ cardioplegia", { go: "cpb", s: "26-27" }),
            N("Conduits: LITA best, vein worst", { go: "conduits", s: "31-35" })
          ]),
          N("After surgery", { col: "red", i: "🏥", a: "ICU", s: "36-57" }, [
            N("Who does badly", { go: "outcomes", s: "38-41" }),
            N("What goes wrong", { go: "complications", s: "43-50" }),
            N("How you find it: ICU monitors", { go: "icu", s: "51-57" })
          ])
        ])
      },

      /* ------------------------------------------------------------ Intro */
      {
        id: "history", title: "How heart surgery began", icon: "📜", lo: ["Intro"], layout: "tree",
        ask: "From \"a heart wound is mortal\" to the modern bypass machine: what changed, and when?",
        tree: N("Heart = untouchable", { i: "🚫", d: "Egyptians thought it held the mind; Hippocrates said a heart wound was fatal; Billroth said a respected surgeon would never suture it.", s: "3-5" }, [
          N("1909: 109 heart wounds sutured", { a: "first attempts", d: "Possible, but 60% died.", k: "num", s: "6" }, [
            N("1923: Cutler opens a mitral stenosis", { a: "first valve", d: "In an 11-year-old, with a knife through the beating heart wall.", s: "7" }, [
              N("1938: Gross closes a PDA", { a: "outside the heart", d: "In a 7-year-old; the ductus can be tied off without stopping the heart.", s: "8" }, [
                N("1954: Lillehei's cross-circulation", { a: "need a pump", d: "A parent was the bypass machine for ASD/VSD repair: 45 cases, no donor deaths, 29 survived.", s: "9" }, [
                  N("1955: modern bypass machine", { k: "key", a: "remove the bubbles", d: "Lillehei and DeWall got the air bubbles out of the oxygenator.", s: "10" }, [
                    N("Today: CABG, valves, transplant, ASD/VSD, PDA, trauma, pacemakers", { k: "good", s: "11" })
                  ])
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 1-2 */
      {
        id: "decide", title: "Invasive? Which one? SYNTAX", icon: "🧭", lo: ["LO 1", "LO 2"], layout: "tree",
        ask: "When do you go invasive, which of the three do you pick, and what does SYNTAX add?",
        tree: N("Stable CAD on medicines", { i: "💊", s: "13" }, [
          N("Medicines failed, or an acute event?", { k: "q", a: "ask", d: "It always depends on the risk/benefit ratio; you judge failure by risk stratification.", s: "13-14" }, [
            N("Risk stratification", { a: "yes", col: "blue", rail: true, s: "15" }, [
              N("STS: short-term surgical risk", { s: "15" }),
              N("ASCERT: long-term survival, > 65, isolated CABG", { s: "15" }),
              N("EuroSCORE: in-hospital mortality (1995)", { s: "15" }),
              N("Ambler: valve ± CABG (UK/Ireland)", { s: "15" }),
              N("APACHE, CHADS2, CHA2DS2-VASc", { s: "15" })
            ]),
            N("SYNTAX scores", { a: "score it", col: "violet", vs: true, s: "16-18" }, [
              N("SYNTAX I = the arteries", { rail: true, s: "16" }, [
                N("Size / length", { s: "16" }),
                N("Complexity / tortuosity", { s: "16" }),
                N("Location", { s: "16" }),
                N("Total occlusion?", { s: "16" }),
                N("Calcification / thrombus", { s: "16" }),
                N("Diffuse or localized", { s: "16" })
              ]),
              N("SYNTAX II = arteries + the patient", { rail: true, s: "17" }, [
                N("↑ age, ↓ renal function, ↓ LVEF", { s: "17" }),
                N("Left main, diabetes, smoking", { s: "17" }),
                N("COPD, PAD", { s: "17" })
              ])
            ]),
            N("Higher score → steeply higher mortality", { k: "bad", a: "why it matters", d: "About 7% at 30 points, 15% at 40, 31.5% at 50, 58% at 60 (4-year).", s: "18" }, [
              N("The three interventions", { k: "key", a: "choose", s: "12, 19" }, [
                N("tPA", { col: "orange", d: "Dissolves the clot.", s: "12" }),
                N("PCI with DES", { col: "green", d: "1-2 vessels, not the proximal LAD; left main or 3-vessel with low SYNTAX is reasonable.", s: "19" }),
                N("CABG", { col: "red", d: "3-vessel with SYNTAX ≥ 23; left main unless SYNTAX < 22.", s: "19" })
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 3 */
      {
        id: "who", title: "Who needs CABG, and who needs it now", icon: "🚦", lo: ["LO 3"], layout: "tree",
        ask: "Which anatomy earns an elective CABG, and which emergencies send the patient to the OR now?",
        tree: N("CABG?", { i: "🫀", s: "20-22", d: "Left main and proximal LAD disease put the most muscle at risk (standard teaching)." }, [
          N("Elective", { col: "green", a: "planned", rail: true, s: "21" }, [
            N("Significant stenosis > 70%", { k: "num", s: "21" }),
            N("Complex 3-vessel CAD", { s: "21" }),
            N("Left main > 50%", { k: "key", s: "21" }),
            N("2-vessel with proximal LAD", { s: "21" }),
            N("Sudden-death survivor with ischemic VT", { s: "21" })
          ]),
          N("Emergent / urgent", { col: "red", a: "now", rail: true, s: "22" }, [
            N("Acute ischemia after failed PCI or tPA", { k: "bad", s: "22" }),
            N("Mechanical failure: ventricular or septal rupture", { k: "bad", s: "22" }),
            N("Mechanical failure: acute valve injury", { k: "bad", s: "22" }),
            N("Recurrent ischemia", { s: "22" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 4-5 */
      {
        id: "cpb", title: "The bypass machine and cardioplegia", icon: "🔄", lo: ["LO 4", "LO 5"], layout: "tree",
        ask: "Trace the blood through the machine, then say why the patient is cold and what stops the heart.",
        tree: N("Cardiopulmonary bypass", { i: "🔄", d: "Extracorporeal circulation run by the perfusionist.", s: "23-26" }, [
          N("Anticoagulate the blood", { a: "first", s: "26" }, [
            N("Drain from the right atrium → reservoir", { a: "out", s: "24, 26" }, [
              N("Oxygenator (the lungs), filter, temperature control", { a: "then", s: "24, 26" }, [
                N("Arterial pump (the heart) → aorta", { a: "back", d: "Flow is NON-pulsatile; target 2.2-2.4 L/min at 65-100 mm Hg.", k: "num", s: "24, 26" }, [
                  N("Why cold?", { k: "q", a: "meanwhile", vs: true, s: "27" }, [
                    N("Hypothermia", { col: "blue", d: "O₂ use falls 50% per 10°C: 2.4 L/min/m² at 37°C, only 1 L/min/m² at 18°C.", s: "27" }),
                    N("Cardioplegia", { col: "violet", k: "key", d: "Cold, POTASSIUM-rich, mixed with the patient's blood, stops the heart; retrograde spreads better in diffuse CAD.", s: "26-27" })
                  ])
                ])
              ])
            ])
          ]),
          N("Finish: wash out cardioplegia, fill, restart, come off bypass", { k: "good", a: "end", s: "26" }),
          N("Machine parts: reservoir, oxygenator, arterial pump, cardioplegia pump, vent, sucker, display", { a: "parts", s: "24" })
        ])
      },

      /* ------------------------------------------------------------ LO 6 */
      {
        id: "conduits", title: "Conduits by patency", icon: "🪢", lo: ["LO 6"], layout: "tree",
        ask: "Rank the conduits from best to worst, with the numbers that prove it.",
        tree: N("Choosing the conduit", { i: "🪢", d: "Arterial (internal mammary, radial) or vein (saphenous); put at least one arterial graft in every patient.", s: "30, 34" }, [
          N("1. LITA", { col: "green", k: "key", a: "best", d: "95% patent at 5 years; usually left attached and sewn to the LAD.", s: "29, 35" }, [
            N("2. RITA", { col: "teal", a: "next", d: "Under 90% at 10 years; LITA + RITA beats LITA + radial.", s: "35" }, [
              N("3. Radial artery", { col: "gold", a: "next", d: "Arterial, from the forearm.", s: "30, 35" }, [
                N("4. Saphenous vein", { col: "red", k: "bad", a: "worst", d: "Most common; 10% occlude in 30 days, 10-25% fail by 12-18 months, then 2%/yr (years 1-6) and 4-5%/yr from year 7.", s: "31" })
              ])
            ])
          ]),
          N("Costs of harvesting", { a: "trade-offs", rail: true, s: "32-33, 44" }, [
            N("Leg wound breakdown after vein harvest", { k: "bad", s: "32-33" }),
            N("Both ITAs → sternum devascularized", { k: "bad", s: "44" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 7 */
      {
        id: "outcomes", title: "Outcomes and who does badly", icon: "📉", lo: ["LO 7"], layout: "spine",
        ask: "What counts as a bad outcome, how common is death over time, and which patients are at highest risk?",
        center: "Outcomes after CABG", centerI: "📉", centerS: "37-42",
        branches: [
          N("Bad endpoints", { i: "⚠️", col: "red", rail: true, s: "37" }, [
            N("Need for revascularization", { s: "37" }),
            N("Post-op MI", { s: "37" }),
            N("Death", { s: "37" })
          ]),
          N("Mortality over time", { i: "📊", col: "gray", rail: true, s: "39" }, [
            N("3.2% at 30 days", { k: "num", s: "39" }),
            N("6.4% at 180 days", { k: "num", s: "39" }),
            N("8.1% at 1 year", { k: "num", s: "39" }),
            N("11.3% at 2 years", { k: "num", s: "39" }),
            N("23.3% at 3 years", { k: "num", s: "39" })
          ]),
          N("Predict MI, redo or death", { i: "🎯", col: "orange", rail: true, s: "38" }, [
            N("Emergency; shock/instability", { s: "38" }),
            N("Reoperation", { s: "38" }),
            N("Dialysis", { s: "38" }),
            N("Insulin-dependent DM, smoking", { s: "38" }),
            N("Low pre-op hemoglobin", { k: "key", s: "38" })
          ]),
          N("Predict death", { i: "💀", col: "violet", rail: true, s: "40-41" }, [
            N("> moderate lung disease, pulmonary HTN", { s: "40" }),
            N("Perioperative MI", { s: "40" }),
            N("Creatinine 1.5-2.5, AKI", { k: "num", s: "40" }),
            N("Atherosclerosis elsewhere: carotid, brain, aorta", { s: "40" }),
            N("Age, lipids, DM, HTN, smoking", { s: "41" })
          ]),
          N("Keep preventing", { i: "🛡️", col: "green", rail: true, s: "42" }, [
            N("Stop smoking", { s: "42" }),
            N("Control lipids, diabetes, BP", { s: "42" }),
            N("Aspirin or clopidogrel", { k: "key", s: "42" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 8 */
      {
        id: "complications", title: "Complications after CABG", icon: "🩹", lo: ["LO 8"], layout: "spine",
        ask: "Sort the complications by where they come from, then by organ.",
        center: "Post-CABG complications", centerI: "🩹", centerS: "43-50",
        branches: [
          N("Wound / trauma", { i: "🔪", col: "orange", rail: true, s: "44" }, [
            N("Bleeding or thrombosis", { s: "44" }),
            N("Sternotomy", { s: "44" }),
            N("Both ITAs → devascularized sternum", { k: "key", s: "44" })
          ]),
          N("Anesthesia", { i: "😴", col: "blue", rail: true, s: "45" }, [
            N("Hypo- or hypervolemia", { s: "45" }),
            N("Neurologic dysfunction: stroke", { k: "bad", s: "45" })
          ]),
          N("The operation itself", { i: "🔄", col: "violet", rail: true, s: "46" }, [
            N("Global cardiac arrest, hypothermia", { s: "46" }),
            N("Non-pulsatile artificial perfusion", { s: "46" }),
            N("Inflammatory response to CPB", { s: "46" }),
            N("Fat and particles sent back in; aortic clamping, cannulation", { s: "46" })
          ]),
          N("Heart: rhythm", { i: "💓", col: "red", rail: true, s: "47" }, [
            N("Atrial fibrillation", { k: "key", s: "47" }),
            N("Ventricular arrhythmias", { s: "47" }),
            N("Bradyarrhythmias", { s: "47" })
          ]),
          N("Heart: pump", { i: "🫀", col: "pink", rail: true, s: "48" }, [
            N("MI (3.2%)", { k: "num", s: "48" }),
            N("Poor inotropy; inadequate preload", { s: "48" }),
            N("Low SVR (vasodilatory shock) or high SVR (afterload)", { s: "48" }),
            N("Valve dysfunction; tamponade", { k: "bad", s: "48" })
          ]),
          N("Lungs", { i: "🫁", col: "teal", rail: true, s: "49" }, [
            N("Edema, effusion, atelectasis, pneumonia", { s: "49" }),
            N("Phrenic nerve injury → diaphragm dysfunction", { k: "key", s: "49" }),
            N("ALI/ARDS; hard to wean", { s: "49" })
          ]),
          N("Kidneys", { i: "🫘", col: "gold", rail: true, s: "50" }, [
            N("Causes: vasoconstriction, cold, no pulsatile flow, atherosclerosis", { s: "50" }),
            N("Keep normotensive", { k: "good", s: "50" }),
            N("Avoid aminoglycosides, ACEi, contrast", { k: "bad", s: "50" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 9 */
      {
        id: "icu", title: "ICU monitors and the three 8-hour calls", icon: "📟", lo: ["LO 9"], layout: "tree",
        ask: "Which monitor answers which question, and how do you sort the three phone calls?",
        tree: [
          N("Monitor → question it answers", { i: "📟", s: "51-53" }, [
            N("At the bedside", { col: "blue", rail: true, s: "51" }, [
              N("Chest tubes → bleeding?", { k: "key", s: "51" }),
              N("Urine + vitals → kidneys perfused? hypovolemic?", { s: "51" }),
              N("Daily labs → kidneys, anemia, acidosis, oxygenation", { s: "51" }),
              N("Glucose q6h", { s: "51" }),
              N("Echo → pump; ECG → ischemia; CXR → edema, pneumonia", { s: "51" })
            ]),
            N("ICU lines", { col: "violet", rail: true, s: "52-53" }, [
              N("CVP (± wedge) → filling", { s: "52" }),
              N("Swan-Ganz → cardiac output, SVR", { k: "key", s: "52-53" }),
              N("Arterial line → continuous BP", { s: "52" }),
              N("Telemetry → rhythm; ABG + pulse ox → gas exchange", { s: "52" })
            ])
          ]),
          N("8 hours post-CABG: urine is falling", { i: "📞", k: "case", s: "55-57" }, [
            N("BP 75/P, HR 130", { col: "orange", a: "low + fast", d: "Check CVP, chest tube output, SpO₂, cardiac output; ECG, Hgb ± echo.", s: "55" }, [
              N("Hypovolemia (empty tank)", { k: "bad", s: "55" })
            ]),
            N("BP 180/110, HR 90", { col: "red", a: "high", d: "History of HTN? CVP, CO, SVR; awake? pain? chest tube output? ECG, echo.", s: "56" }, [
              N("HTN → nitroprusside", { k: "good", s: "56" })
            ]),
            N("BP 75/P, HR 90", { col: "violet", a: "low, not fast", d: "Chest tube output, CVP, cardiac output, SVR; echocardiogram.", s: "57" }, [
              N("Cardiac dyskinesia (weak pump)", { k: "bad", s: "57" })
            ])
          ]),
          N("After extubation: spirometry, walking, antiplatelets", { i: "🚶", k: "good", s: "54" })
        ]
      }
    ]
  });
})();
