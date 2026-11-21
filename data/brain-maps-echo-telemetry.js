/* Brain maps: Cardiac Testing, Echocardiography and Telemetry (Sillaman), 28 slides. Facts are from the deck; anything else is
   marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "echo-telemetry",
    title: "Cardiac Testing: Echo and Telemetry",
    short: "Echo & telemetry",
    by: "Sillaman",
    slides: 28,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "What is your question about the heart, and which test answers it?",
        tree: N("What do you need to know about the heart?", { i: "🫀", d: "Match the question to the test: structure, pumping fraction, or rhythm over time.", s: "1-4" }, [
          N("What does it look like?", { col: "blue", i: "🔊", a: "structure", vs: true, s: "5, 15" }, [
            N("TTE: first test", { go: "tte", s: "5-14" }),
            N("TEE: through the esophagus", { go: "tee", s: "15-20" })
          ]),
          N("How well does it pump, exactly?", { col: "violet", i: "☢️", a: "exact EF", go: "muga", s: "22-23" }),
          N("What is the rhythm doing?", { col: "green", i: "📈", a: "rhythm", go: "monitors", s: "24-28" }),
          N("Is there a hole in the septum?", { col: "orange", i: "🫧", a: "shunt", go: "bubble", s: "21" })
        ])
      },

      /* ------------------------------------------------------------ LO 1 & 3: TTE */
      {
        id: "tte", title: "TTE: windows, views and modes", icon: "🔊", lo: ["LO 1", "LO 3"], layout: "spine",
        ask: "Name the three windows, what each view is best for, and the four modes.",
        center: "Transthoracic echo", centerI: "🔊", centerS: "5-13",
        branches: [
          N("Parasternal", { i: "1️⃣", col: "blue", rail: true, s: "7" }, [
            N("Long axis: LV + RV squeeze, mitral and aortic valves, AR/MR on color", { s: "7" }),
            N("Short axis: 3 levels (aortic valve, mitral valve, papillary muscles)", { k: "num", s: "7" })
          ]),
          N("Apical", { i: "2️⃣", col: "violet", rail: true, s: "8" }, [
            N("4-chamber: Simpson EF, apex, mitral inflow", { k: "key", s: "8" }),
            N("5-chamber: grade aortic stenosis, cardiac output", { k: "key", s: "8" }),
            N("2-chamber: anterior + inferior LV walls", { s: "8" })
          ]),
          N("Subcostal", { i: "3️⃣", col: "green", rail: true, s: "9" }, [
            N("4-chamber: may be the only window when ventilated", { s: "9" }),
            N("Short axis: LV, aortic, tricuspid, pulmonic", { s: "9" }),
            N("IVC size + breathing change = volume status", { k: "key", s: "9" })
          ]),
          N("Modes", { i: "🎛️", col: "orange", rail: true, s: "10-13" }, [
            N("M-mode: tracing; chamber size, wall thickness", { s: "10" }),
            N("Doppler: blood flow; color shows direction", { s: "11" }),
            N("2-D: real-time moving structures", { s: "12" }),
            N("3-D: depth; helps the surgeon before surgery", { s: "13" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 3: what echo measures */
      {
        id: "measures", title: "What one echo measures", icon: "📏", lo: ["LO 3"], layout: "spine",
        ask: "Group the echo list: pump, pressures and sizes, valves, holes.",
        center: "Echo evaluates", centerI: "📏", centerS: "14",
        branches: [
          N("Pump", { i: "💪", col: "red", rail: true, s: "14" }, [
            N("LVEF, stroke volume, end-diastolic volume", { k: "key", s: "14" }),
            N("Diastolic function, longitudinal strain", { s: "14" }),
            N("LVH, LVOT", { s: "14" })
          ]),
          N("Pressures and sizes", { i: "📐", col: "blue", rail: true, s: "14" }, [
            N("Pulmonary artery systolic pressure", { k: "key", s: "14" }),
            N("IVC size, aortic root, both atria", { s: "14" })
          ]),
          N("Valves", { i: "🚪", col: "violet", rail: true, s: "14" }, [
            N("Aortic valve area + peak velocity", { s: "14" }),
            N("Mitral stenosis, regurgitation, prolapse", { s: "14" }),
            N("Tricuspid regurgitation, pulmonic stenosis", { s: "14" })
          ]),
          N("Holes", { i: "🕳️", col: "orange", rail: true, s: "14" }, [
            N("PFO, ASD", { go: "bubble", s: "14" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 4: TEE */
      {
        id: "tee", title: "When TEE beats TTE", icon: "🔭", lo: ["LO 4", "LO 5"], layout: "tree",
        ask: "Why does TEE see better, and which situations send you straight to it?",
        tree: N("Probe in the esophagus, right behind the heart", { i: "🔭", d: "No ribs or lungs in the way, so posterior structures are sharp: best view of the mitral valve.", s: "15, 20" }, [
          N("TTE first for most patients", { k: "key", a: "default", d: "Quick, noninvasive, done by an echo tech.", s: "20" }),
          N("TEE first or next when…", { col: "red", rail: true, a: "but", s: "16, 20" }, [
            N("Aortic dissection, transection, intramural hematoma", { k: "bad", s: "16" }),
            N("Prosthetic valve dysfunction", { s: "16" }),
            N("Endocarditis: abscess, fistula; or moderate/high pretest likelihood", { s: "16" }),
            N("LA appendage clot before cardioversion or ablation", { k: "key", s: "16" }),
            N("Cardiac source of embolus", { s: "16" }),
            N("TTE nondiagnostic", { s: "16, 20" }),
            N("Guiding closure devices, valvuloplasty, percutaneous valves", { s: "16" }),
            N("Follow-up when a change would change therapy", { s: "16" })
          ]),
          N("Cost: minimally invasive, needs a skilled physician", { a: "price", go: "teerisk", s: "20" })
        ])
      },

      /* ------------------------------------------------------------ LO 6-7 */
      {
        id: "teerisk", title: "TEE: who can't have it and what can go wrong", icon: "⚠️", lo: ["LO 6", "LO 7"], layout: "tree",
        ask: "The probe goes down the throat: what blocks the path, and what can it injure?",
        tree: N("A probe down the throat", { i: "⚠️", s: "17-19" }, [
          N("Before: can the probe pass safely?", { k: "q", a: "check", s: "17-18" }, [
            N("Absolute: esophagectomy or esophagogastrectomy", { col: "red", k: "bad", a: "no path", s: "17" }),
            N("Relative", { col: "orange", rail: true, a: "caution", s: "18" }, [
              N("Active esophageal tear or bleed; stricture; Zenker's", { s: "18" }),
              N("Coagulopathy; thrombocytopenia", { s: "18" }),
              N("Altered mental status", { s: "18" }),
              N("Severe cervical spine arthritis", { s: "18" })
            ])
          ]),
          N("After: complications", { a: "watch", vs: true, s: "19" }, [
            N("Major", { col: "red", rail: true, s: "19" }, [
              N("Esophageal perforation", { k: "bad", s: "19" }),
              N("GI bleed (platelets < 50k)", { k: "num", s: "19" }),
              N("Pharyngeal hematoma", { s: "19" }),
              N("Methemoglobinemia from benzocaine", { k: "key", s: "19" })
            ]),
            N("Minor", { col: "gray", rail: true, s: "19" }, [
              N("Bronchospasm, hypoxia", { s: "19" }),
              N("NSVT, AF", { s: "19" }),
              N("Hemoptysis, vomiting", { s: "19" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 4-5: bubble study */
      {
        id: "bubble", title: "Bubble study", icon: "🫧", lo: ["LO 4", "LO 5"], layout: "tree",
        ask: "Where should bubbles stop, and what does it mean when they don't?",
        tree: N("Agitated saline makes bright microbubbles, injected IV", { i: "🫧", s: "21" }, [
          N("Right heart fills with bubbles", { a: "then", s: "21" }, [
            N("Lung capillaries trap them", { a: "normally", k: "good", s: "21" }, [
              N("No bubbles reach the left heart", { k: "good", s: "21" })
            ]),
            N("A hole in the septum?", { k: "q", a: "if", vs: true, s: "21" }, [
              N("Right-to-left: bubbles appear on the left (PFO/ASD)", { k: "key", s: "21" }, [
                N("Risk: systemic air embolism", { k: "bad", s: "21" })
              ]),
              N("Left-to-right: a clear jet interrupts the right atrial bubbles", { s: "21" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 8 */
      {
        id: "muga", title: "MUGA scan", icon: "☢️", lo: ["LO 8"], layout: "tree",
        ask: "How does MUGA work, why pick it, and who can't have it?",
        tree: N("Label the red blood pool with a tracer", { i: "☢️", d: "Radionuclide ventriculography: a volumetric measurement.", s: "22" }, [
          N("Gamma camera over the anterior chest counts it", { a: "then", s: "22" }, [
            N("Very accurate, reproducible LVEF", { k: "good", a: "result", s: "23" }, [
              N("Serial EF checks, poor echo windows", { k: "case", s: "23" })
            ])
          ]),
          N("Strengths and limits", { a: "know", vs: true, s: "23" }, [
            N("Good", { col: "green", rail: true, s: "23" }, [
              N("Noninvasive", { s: "23" }),
              N("Body habitus doesn't limit it", { s: "23" })
            ]),
            N("Bad", { col: "red", rail: true, s: "23" }, [
              N("Radiation 620 mrem", { k: "num", s: "23" }),
              N("Not in pregnancy or lactation", { k: "bad", s: "23" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 9-10 */
      {
        id: "monitors", title: "Rhythm monitors: match the window to the symptom", icon: "📈", lo: ["LO 9", "LO 10"], layout: "tree",
        ask: "How often do the symptoms happen? Pick the monitor that will catch them.",
        tree: N("How often are the symptoms?", { i: "📈", s: "24-28" }, [
          N("In the hospital: telemetry", { col: "blue", rail: true, a: "inpatient", s: "25" }, [
            N("2-3 leads, continuous", { s: "25" }),
            N("Suspected arrhythmia, unexplained syncope, new therapy", { k: "key", s: "25" })
          ]),
          N("Daily: Holter 24-48 h", { col: "green", rail: true, a: "daily", s: "26" }, [
            N("Placed in the office; symptom diary", { s: "26" }),
            N("Case 2: daily palpitations", { k: "case", s: "24" })
          ]),
          N("Weekly: event monitor 2-4 weeks", { col: "orange", rail: true, a: "weekly", s: "27" }, [
            N("Mailed home; off to shower", { s: "27" }),
            N("AF burden; high suspicion", { s: "27" }),
            N("Uncomfortable, poor compliance", { k: "bad", s: "27" })
          ]),
          N("Rare: implantable up to 3 years", { col: "violet", rail: true, a: "rare", s: "28" }, [
            N("Unexplained syncope, cryptogenic stroke", { k: "key", s: "28" }),
            N("Nightly downloads; explant at 3 years", { s: "28" }),
            N("Insurance approval is hard", { k: "bad", s: "28" })
          ])
        ])
      }
    ]
  });
})();
