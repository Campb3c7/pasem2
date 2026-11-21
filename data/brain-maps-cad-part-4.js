/* Brain maps: CAD Part IV (Stager): Acute Coronary Syndromes, 81 slides, 10 LOs. Facts are from the deck; anything else is
   marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "cad-part-4",
    title: "CAD Part IV: Acute Coronary Syndromes",
    short: "CAD IV",
    by: "Stager",
    slides: 81,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "A plaque ruptures: what do you call it, what do you give first, how fast must the artery open, and what happens after?",
        tree: N("ACS: a plaque ruptures, a clot forms", { i: "💥", d: "Even on optimal treatment a CAD patient can have an ACS at any time, and stopping their meds raises the risk.", s: "2, 36" }, [
          N("Name it: ischemia, injury or MI?", { k: "q", i: "🏷️", a: "first", go: "words", s: "3-8" }, [
            N("UA, NSTEMI or STEMI?", { i: "🫀", a: "then", go: "syndromes", l: ["troponin", "ST elevation"], s: "9-13" }, [
              N("Which wall, which artery?", { i: "🗺️", a: "read the leads", go: "localize", s: "14-15" })
            ])
          ]),
          N("First drugs for everyone", { i: "💊", a: "while you work it up", go: "first-drugs", k: "key", l: ["aspirin", "nitro", "beta blocker"], s: "17-19" }, [
            N("ST elevation?", { k: "q", a: "the EKG decides", vs: true, s: "20, 36" }, [
              N("No: UA / NSTEMI", { col: "orange", a: "no", go: "nstemi", s: "23-34" }, [
                N("Nitro, BB, DAPT, heparin", { a: "treat", go: "nstemi", s: "23-25" }, [
                  N("Risk stratify (TIMI) → when to cath", { a: "then", go: "risk", s: "26-33" })
                ])
              ]),
              N("Yes: STEMI", { col: "red", k: "bad", a: "yes", go: "stemi", s: "36-48" }, [
                N("Open the artery NOW", { a: "time is muscle", go: "stemi", s: "37-44" }, [
                  N("PCI ≤ 90 min, or lytics ≤ 30 min", { a: "how", go: "stemi", s: "40-44" })
                ])
              ])
            ])
          ]),
          N("Special cases", { i: "🔎", a: "not the usual story", go: "special", l: ["MINOCA", "Takotsubo", "vasospasm", "cocaine/meth", "RV infarct", "older adults"], s: "51-67" }),
          N("Complications", { i: "⚠️", k: "bad", a: "watch for", go: "complications", l: ["functional", "mechanical", "electrical"], s: "68-71" }),
          N("After the cath: monitor, rehab, prevent the next one", { i: "🏠", k: "good", a: "finally", go: "after", s: "75-81" }),
          N("Unstable Don", { k: "case", i: "🧔", a: "follow one patient", go: "don", s: "16, 22, 35, 50, 72-76" })
        ])
      },

      /* ------------------------------------------------------------ LO 1 */
      {
        id: "words", title: "Ischemia, injury, infarction", icon: "🏷️", lo: ["LO 1"], layout: "tree",
        ask: "What separates ischemia, injury and infarction, and which kind of MI is it?",
        tree: [
          N("Myocardial ISCHEMIA", { col: "blue", i: "🫁", d: "Oxygen supply is too low for demand. It can show as ST depression or T-wave inversion.", s: "3" }, [
            N("Supply < demand", { a: "means", s: "3" }, [
              N("ST depression, T-wave inversion", { a: "EKG may show", s: "3-4" })
            ])
          ]),
          N("Myocardial INJURY", { col: "orange", i: "🩸", d: "Any myocardial damage with an elevated troponin, whatever the cause.", s: "3" }, [
            N("Troponin is elevated", { a: "means", k: "key", s: "3" })
          ]),
          N("Myocardial INFARCTION", { col: "red", i: "💀", k: "bad", d: "Irreversible injury: needs BOTH acute injury (troponin) AND acute ischemia.", s: "3" }, [
            N("Injury + ischemia, irreversible", { a: "needs", k: "key", s: "3" }, [
              N("ST elevation, Q waves", { a: "EKG suggests", s: "3" }),
              N("Which kind of MI? (2026 definition)", { k: "q", a: "then ask", s: "6-7", d: "The Fifth Universal Definition (2026) uses three groups; the 2018 types are shown in brackets." }, [
                N("PRIMARY: the coronary itself", { col: "red", s: "6", l: ["plaque disruption", "dissection", "vasospasm", "embolism"], d: "Mostly the old Type 1." }),
                N("SECONDARY: supply/demand mismatch", { col: "orange", s: "6", l: ["severe anemia", "hypoxemia", "tachyarrhythmia"], d: "The old Type 2: another acute illness starves the heart." }),
                N("PROCEDURE-RELATED", { col: "violet", s: "6", l: ["PCI", "cardiac surgery"], d: "The old Types 4a, 4b, 4c and 5." })
              ])
            ])
          ]),
          N("Sepsis: same troponin, three answers", { k: "case", i: "🧪", s: "8", d: "Troponin alone can't tell injury from MI: you need evidence of ischemia." }, [
            N("Troponin ↑, no ischemia", { a: "case 1", s: "8" }, [
              N("Acute myocardial INJURY", { a: "=", s: "8" })
            ]),
            N("Troponin ↑ + chest pressure, dynamic ST ↓, hypotension", { a: "case 2", s: "8" }, [
              N("SECONDARY MI (Type 2)", { a: "=", k: "key", s: "8" })
            ]),
            N("Troponin ↑ + plaque rupture, clot, ST ↑", { a: "case 3", s: "8" }, [
              N("PRIMARY MI (Type 1)", { a: "=", k: "bad", s: "8" })
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 1 continued */
      {
        id: "syndromes", title: "UA, NSTEMI, STEMI", icon: "🫀", lo: ["LO 1"], layout: "tree",
        ask: "Chest pain at rest: what two questions sort it into UA, NSTEMI or STEMI?",
        tree: N("Chest pain at REST", { i: "💢", fig: { type: "acs" }, d: "All three ACS types are rest pain. The clot size decides the rest.", s: "9-12" }, [
          N("ST elevation?", { k: "q", a: "first look", s: "9-12" }, [
            N("No ST elevation", { col: "orange", a: "no", s: "9-10", d: "ST depression or T-wave inversion may still be there." }, [
              N("hs-troponin?", { k: "q", a: "then", s: "9-10" }, [
                N("NEGATIVE → Unstable angina", { col: "orange", a: "negative", s: "9", d: "Subtotal occlusion: ischemia without measurable necrosis.", fig: { type: "acs", hi: "ua" } }, [
                  N("Subtotal occlusion", { a: "cause", s: "9" })
                ]),
                N("POSITIVE → NSTEMI", { col: "red", a: "positive", s: "10-11", d: "Subendocardial infarction: the inner layer dies first.", fig: { type: "acs", hi: "nstemi" } }, [
                  N("Subendocardial infarction", { a: "cause", s: "10" })
                ])
              ])
            ]),
            N("ST elevation → STEMI", { col: "red", k: "bad", a: "yes", s: "12-13", d: "Old names: transmural or Q-wave MI. Look for RECIPROCAL depression in the opposite leads.", fig: { type: "acs", hi: "stemi" } }, [
              N("COMPLETE occlusion", { a: "cause", k: "key", s: "12" }, [
                N("Transmural (full-thickness)", { a: "so", s: "12" })
              ]),
              N("Troponin positive", { a: "and", s: "12" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 2 */
      {
        id: "localize", title: "Which wall, which artery?", icon: "🗺️", lo: ["LO 2"], layout: "spine",
        ask: "Leads with ST elevation → wall → artery. Where are the reciprocal changes?",
        center: "Read the ST changes", centerI: "🗺️", centerS: "14-15",
        centerD: "Each group of leads looks at one wall. The wall tells you which coronary artery is blocked; the opposite wall shows reciprocal ST depression.",
        centerFig: { type: "coronary" },
        branches: [
          N("Anterior: V1-V4", { i: "⬆️", col: "red", s: "14", fig: { type: "leads", hi: ["V1", "V2", "V3", "V4"], label: "Anterior V1-V4 → LAD" } }, [
            N("LAD", { a: "artery", k: "key", s: "14" }),
            N("Reciprocal: none (15-lead)", { a: "opposite", s: "14" })
          ]),
          N("Septal: V1-V2", { i: "🧱", col: "orange", s: "14", fig: { type: "leads", hi: ["V1", "V2"], label: "Septal V1-V2 → LAD" } }, [
            N("LAD", { a: "artery", k: "key", s: "14" })
          ]),
          N("Lateral: I, aVL, V5, V6", { i: "➡️", col: "blue", s: "14", fig: { type: "leads", hi: ["I", "aVL", "V5", "V6"], recip: ["II", "III", "aVF"], label: "Lateral → LCx" } }, [
            N("LCx", { a: "artery", k: "key", s: "14" }),
            N("Reciprocal: II, III, aVF", { a: "opposite", s: "14" })
          ]),
          N("Inferior: II, III, aVF", { i: "⬇️", col: "green", s: "14", fig: { type: "leads", hi: ["II", "III", "aVF"], recip: ["I", "aVL"], label: "Inferior → RCA (80%) or LCx (20%)" } }, [
            N("RCA 80% · LCx 20%", { a: "artery", k: "key", s: "14" }),
            N("Reciprocal: I, aVL", { a: "opposite", s: "14" }),
            N("Get a right-sided EKG", { a: "always", go: "rv", k: "bad", s: "61", d: "Every inferior MI gets a right-sided EKG to look for RV infarction." })
          ]),
          N("Posterior: V7-V9", { i: "↩️", col: "violet", s: "14" }, [
            N("RCA or LCx", { a: "artery", s: "14" }),
            N("Reciprocal: V1-V3", { a: "opposite", k: "key", s: "14", d: "A posterior MI shows up on a standard EKG as ST DEPRESSION in V1-V3." })
          ]),
          N("RV: V1-V4 right-sided (V4R)", { i: "🫀", col: "teal", s: "14, 62", go: "rv" }, [
            N("RCA", { a: "artery", k: "key", s: "14" }),
            N("Reciprocal: I, aVL (right-sided)", { a: "opposite", s: "14" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 3 */
      {
        id: "first-drugs", title: "First drugs for suspected ACS", icon: "💊", lo: ["LO 3"], layout: "spine",
        ask: "Before any workup: what goes in right away, who can't have it, and what do you try to avoid?",
        center: "Suspected ACS", centerI: "🚑", centerS: "17-19",
        centerD: "Therapy starts immediately, often by EMS before any workup.",
        branches: [
          N("Aspirin 325 mg, chewed", { i: "🟡", col: "gold", k: "key", s: "17, 24", d: "Given to ALL possible and definite ACS patients: it stops more platelets piling onto the clot.", fig: { type: "platelet", hi: "asa" } }, [
            N("Then EC aspirin 81 mg daily", { a: "after", s: "24" })
          ]),
          N("Nitroglycerin SL or IV", { i: "💧", col: "blue", s: "17-18, 23", d: "For ACTIVE chest pain: dilates veins (less preload) and coronaries." }, [
            N("0.4 mg SL q5 min × 3", { a: "dose", s: "23" }, [
              N("Still pain after 1-2 SL → nitro drip", { a: "if", s: "18, 23", d: "Start 5-10 mcg/min; titrate to relief or BP drop, keep SBP > 100." })
            ]),
            N("NOT if", { k: "bad", a: "careful", l: ["RV infarct", "severe AS", "PDE-5 inhibitor in 24 h", "hypotension"], s: "17-18", d: "Each of these depends on preload or already has low BP; nitro would crash the pressure." })
          ]),
          N("Beta blocker", { i: "🐢", col: "green", s: "18, 23", d: "Slows the heart and lowers demand. Oral cardioselective, within 24 h; IV use is limited." }, [
            N("If pain persists despite nitrates, or STEMI", { a: "when", s: "18" }),
            N("NOT if", { k: "bad", a: "careful", l: ["decompensated HF", "risk of cardiogenic shock", "bradycardia", "hypotension"], s: "18, 23" })
          ]),
          N("Avoid: morphine", { i: "🚫", col: "red", k: "bad", s: "19", d: "Only for severe pain: morphine may interfere with antiplatelet drugs." }),
          N("Avoid: routine oxygen", { i: "🫧", col: "violet", k: "bad", s: "19", d: "Only if sats < 90%: no benefit otherwise, and too much O2 may cause coronary vasospasm." }),
          N("Workup at the same time", { i: "🔬", col: "teal", rail: true, s: "20-21" }, [
            N("12-lead EKG, repeat in 20-30 min", { s: "20", d: "The first EKG may be non-diagnostic." }),
            N("hs-troponin at arrival and 1-2 h: watch the DELTA", { k: "key", s: "21", d: "A quick presenter may have a normal first troponin; the change between levels matters. CKD/ESRD raise it chronically." }),
            N("CBC, chemistry, PT/INR, PTT", { s: "20" }),
            N("BNP and CXR for heart failure", { s: "20" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "nstemi", title: "The UA/NSTEMI plan", icon: "🧩", lo: ["LO 4"], layout: "tree",
        ask: "No ST elevation: what are the steps, in order, and why each one?",
        tree: N("UA / NSTEMI", { i: "🫀", d: "Cardiology is consulted from the ER in every case.", s: "23-34" }, [
          N("1. Anti-anginal", { a: "step", col: "blue", s: "23", d: "Lower demand and open the vessels so the pain stops." }, [
            N("Nitro SL / drip (SBP > 100)", { s: "23" }),
            N("Oral cardioselective BB within 24 h", { s: "23" })
          ]),
          N("2. DAPT: stop the PLATELET plug", { a: "step", col: "gold", s: "24", fig: { type: "platelet", hi: "p2y12" } }, [
            N("Aspirin 325 chewed → 81 daily", { s: "24" }),
            N("+ P2Y12 inhibitor", { s: "24", l: ["prasugrel", "ticagrelor", "clopidogrel"], d: "Chosen with cardiology for patients going to cath." })
          ]),
          N("3. Anticoagulant: stop clot EXTENSION", { a: "step", col: "violet", s: "25", fig: { type: "clot", hi: "mesh" }, d: "Blocks thrombin from activating more platelets and clotting factors." }, [
            N("Cath planned? → UFH IV drip", { s: "25", d: "Titrated to anti-Xa or PTT; easy to turn off for the procedure." }),
            N("No cath → enoxaparin 1 mg/kg SQ BID", { s: "25" })
          ]),
          N("4. Risk stratify", { a: "step", col: "red", k: "key", go: "risk", s: "26-31" }, [
            N("Unstable → cath NOW", { k: "bad", s: "26, 29" }),
            N("Stable → TIMI score", { s: "27" }, [
              N("TIMI ≥ 3 → cath in 24-48 h", { a: "high risk", s: "27" })
            ])
          ]),
          N("Stable patients meanwhile", { col: "green", rail: true, s: "34" }, [
            N("Correct electrolytes and hypoxia; optimize fluids", { s: "34" }),
            N("Telemetry floor, bedrest", { s: "34" }),
            N("Heart-healthy diet, then NPO at midnight", { s: "34", d: "NPO before the cath." })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 4 and 5 */
      {
        id: "risk", title: "TIMI and when to cath", icon: "⏱️", lo: ["LO 4", "LO 5"], layout: "tree",
        ask: "Who goes to the cath lab now, who within 24-48 hours, and who starts with a stress test?",
        tree: [
          N("UA / NSTEMI: how risky?", { i: "⚖️", s: "26-33" }, [
            N("Any UNSTABLE feature?", { k: "q", a: "first", vs: true, s: "26", d: "Any ONE of these means emergent cath." }, [
              N("Yes → 1. IMMEDIATE invasive", { col: "red", k: "bad", a: "yes", s: "26, 29", l: ["cardiogenic shock", "severe LV dysfunction / florid HF", "rest angina despite nitro + BB", "new MR or VSD", "sustained VT"], d: "Very high risk: emergent coronary angiography." }),
              N("No → TIMI score", { col: "gold", a: "stable", s: "27-28", l: ["age ≥ 65", "≥ 3 CAD risk factors", "known stenosis ≥ 50%", "aspirin in 7 days", "≥ 2 angina episodes in 24 h", "+ cardiac markers", "ST deviation ≥ 0.5 mm"], d: "One point each. TIMI UA/NSTEMI predicts 14-day death, MI or urgent revascularization. GRACE covers any ACS; TIMI STEMI predicts 30-day death." }, [
                N("TIMI ≥ 3?", { k: "q", a: "add it up", s: "27" }, [
                  N("2. ROUTINE invasive", { col: "orange", a: "yes: increased risk", s: "27, 30", d: "Cath during the admission even if symptoms settle: within 24-48 h, early (within 24 h) for selected high-risk patients. PCI or CABG by anatomy." }),
                  N("3. SELECTIVE invasive", { col: "green", k: "good", a: "low risk", s: "31", d: "Meds first, then stress test or CCTA; cath only if ischemia or symptoms recur." })
                ])
              ])
            ])
          ]),
          N("Not a routine invasive candidate", { col: "gray", i: "✋", rail: true, s: "33" }, [
            N("High bleeding risk on DAPT; platelets < 50", { s: "33" }),
            N("Advanced CKD (not on dialysis) or AKI", { s: "33", d: "The contrast load would hurt the kidneys." }),
            N("Life expectancy < 1-2 y; advanced dementia", { s: "33" }),
            N("Anatomy that rules out PCI/CABG; patient preference", { s: "33" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 6 */
      {
        id: "stemi", title: "STEMI: time is muscle", icon: "⏰", lo: ["LO 6"], layout: "tree",
        ask: "STEMI: what are the clocks, and when do lytics beat PCI?",
        tree: N("STEMI = clot COMPLETELY blocks the artery", { i: "🚨", k: "bad", s: "36", d: "Usually plaque rupture or erosion with thrombus.", fig: { type: "artery", stage: "clot" } }, [
          N("Necrosis spreads subendocardium → outward", { a: "every minute", s: "37", d: "Prolonged ischemia causes progressive, irreversible injury." }, [
            N("Open it ASAP: save LV function", { a: "so", k: "key", s: "37, 40" }, [
              N("Door to EKG ≤ 10 min", { a: "clock 1", s: "44", d: "Ideally EMS transmits the EKG from the field and activates the STEMI pathway." }, [
                N("PCI possible in time?", { k: "q", a: "then", vs: true, s: "40-43" }, [
                  N("PRIMARY PCI (preferred)", { col: "green", k: "good", a: "yes", s: "40-41", d: "Less reinfarction and less intracranial hemorrhage than lytics.", fig: { type: "artery", stage: "stent" } }, [
                    N("PCI hospital: first contact → device ≤ 90 min", { s: "41, 44" }),
                    N("Transfer: ≤ 120 min", { s: "41, 43" })
                  ]),
                  N("FIBRINOLYTICS", { col: "orange", a: "no: > 120 min away", s: "42-43", fig: { type: "clot", hi: "lytic" } }, [
                    N("Within 12 h of onset, no contraindications", { s: "42" }),
                    N("Door to needle ≤ 30 min", { k: "key", s: "42, 44" }),
                    N("Then transfer to a PCI hospital", { s: "42, 44", d: "The pharmacoinvasive strategy." })
                  ])
                ])
              ])
            ])
          ]),
          N("Emergent CABG", { col: "violet", a: "last resort", s: "43", d: "Substantial mortality: only when PCI or lytics fail." }),
          N("Clocks start at different times", { k: "key", rail: true, a: "trap", s: "44" }, [
            N("EKG and lytics: from HOSPITAL ARRIVAL", { s: "44" }),
            N("PCI: from FIRST MEDICAL CONTACT", { s: "44" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 6 continued */
      {
        id: "culprit", title: "Culprit vs other blockages", icon: "🎯", lo: ["LO 6"], layout: "tree",
        ask: "The cath finds the culprit AND another tight lesion: fix both, and when?",
        tree: N("Emergent cath: find the CULPRIT artery", { i: "🩻", s: "45", fig: { type: "coronary", blocks: [["ladm", "99%"], ["rcam", "80%"]], stents: ["ladm"] } }, [
          N("PCI the culprit first, fast", { a: "always", k: "key", s: "45" }, [
            N("Other significant lesions?", { k: "q", a: "then", s: "46-48" }, [
              N("Stable, no shock", { col: "green", a: "no shock", s: "46, 48" }, [
                N("COMPLETE revascularization", { k: "good", s: "46, 48" }, [
                  N("Same procedure OR staged (in hospital or ≤ 45 days)", { a: "when", s: "46", d: "Depends on anatomy, complexity, kidney function and stability." })
                ])
              ]),
              N("Cardiogenic SHOCK", { col: "red", k: "bad", a: "shock", s: "47-48" }, [
                N("Culprit ONLY at first", { k: "key", s: "47", d: "Routine multivessel PCI in the first procedure raises adverse outcomes." })
              ])
            ])
          ]),
          N("Example: ST ↑ V3-V4 + 80% mid-RCA", { k: "case", a: "try it", s: "49", d: "V3-V4 = anterior → the LAD is the culprit. If stable, the RCA is treated too, now or staged (deck rules)." })
        ])
      },

      /* ------------------------------------------------------------ the case */
      {
        id: "don", title: "Unstable Don", icon: "🧔", lo: ["LO 3", "LO 4", "LO 5", "LO 6", "LO 9"], layout: "tree",
        ask: "Follow Don from the ambulance to discharge: what happens at each step, and why?",
        tree: N("Don, 55: 60% RCA on cath 3 y ago, on metoprolol + ASA", { k: "case", i: "🧔", s: "16" }, [
          N("Sudden heavy chest pain, dyspnea, sweating, nausea at work", { a: "today", s: "16" }, [
            N("EMS: aspirin 325 + SL nitro", { a: "on the way", go: "first-drugs", s: "16" }, [
              N("ER: still pain after 2 nitro → nitro drip", { a: "arrives", s: "22", d: "HR 112, BP 170/92, clear lungs, no JVD. EKG, CXR, labs, BNP, hs-troponin ordered." }, [
                N("Inferior ST ↓ + TWI; troponin 234 → 391 → 806 → 682", { a: "results", s: "35" }, [
                  N("NSTEMI (inferior)", { k: "key", a: "so", go: "nstemi", s: "35", d: "Rising troponin with no ST elevation. The deck asks without an answer slide; this applies its rules." }, [
                    N("TIMI ≥ 4 → routine invasive, early cath", { a: "risk", go: "risk", s: "27, 35", d: "Known 60% stenosis, aspirin in 7 days, angina, + markers, ST deviation (risk factor count unknown). Applying the deck's rules." })
                  ])
                ]),
                N("What if inferior ST ELEVATION?", { k: "q", a: "twist 1", s: "50" }, [
                  N("STEMI → PCI ≤ 90 min + right-sided EKG", { k: "bad", go: "stemi", s: "50, 61", d: "Inferior STEMI: look for RV infarct before giving more nitro (deck rules)." })
                ]),
                N("What if 3 h from a PCI hospital?", { k: "q", a: "twist 2", s: "50" }, [
                  N("Lytics ≤ 30 min, then transfer", { go: "stemi", s: "42-43, 50", d: "PCI can't happen within 120 min (deck rules)." })
                ])
              ])
            ])
          ]),
          N("Cath: 99% mid-LAD + 80% RCA", { a: "emergent cath", s: "72" }, [
            N("DES in the LAD → CCU", { s: "72" }, [
              N("RCA: same procedure OR staged", { k: "key", a: "remaining lesion", go: "culprit", s: "73", d: "Answer C: depends on clinical and procedural factors." }, [
                N("Monitor, check groin/wrist, kidneys", { a: "post-PCI", go: "after", s: "75" }, [
                  N("Home on DAPT, statin, BB (+ ACEi if indicated), rehab", { k: "good", a: "discharge", go: "after", s: "74, 76, 80", d: "With EF 55%: aspirin + P2Y12 for 12 months, high-intensity statin, beta blocker; ACEi/ARB if HTN, diabetes or anterior STEMI (deck rules)." })
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 7 */
      {
        id: "special", title: "Special presentations", icon: "🔎", lo: ["LO 7"], layout: "spine",
        ask: "When the MI story doesn't fit: open arteries, spasm, drugs, the right ventricle, older adults.",
        center: "Not the usual ACS", centerI: "🔎", centerS: "51-67",
        centerD: "Each of these looks like ACS but has a different cause, so the treatment changes.",
        branches: [
          N("MINOCA", { i: "❔", col: "violet", s: "51-54", d: "MI with no stenosis ≥ 50% in a major artery. 5-15% of MIs; more common in women and younger patients; STEMI or NSTEMI." }, [
            N("A WORKING diagnosis", { k: "key", s: "51, 54" }, [
              N("Find the cause", { a: "MRI, echo, intracoronary imaging, spasm tests", s: "54" }, [
                N("True ischemic causes", { rail: true, s: "52" }, [
                  N("Vasospasm", { s: "52" }),
                  N("SCAD", { s: "52" }),
                  N("Embolism / thrombosis", { s: "52" }),
                  N("Microvascular dysfunction", { s: "52" }),
                  N("Plaque rupture/erosion, clot gone", { s: "52" })
                ]),
                N("Mimics to exclude", { rail: true, k: "bad", s: "53" }, [
                  N("Myocarditis", { s: "53" }),
                  N("Takotsubo", { s: "53, 55" }),
                  N("Pulmonary embolism", { s: "53" })
                ])
              ])
            ])
          ]),
          N("Takotsubo", { i: "💔", col: "pink", s: "55", d: "Stress-induced cardiomyopathy: emotional or physical stress (not always found) → transient regional LV dysfunction." }, [
            N("Chest pain + EKG changes + troponin", { a: "mimics ACS", s: "55" })
          ]),
          N("Vasospastic (Prinzmetal)", { i: "🌙", col: "blue", s: "56-58", d: "Spasm, not a fixed plaque: ST elevation during pain, clean arteries on cath." }, [
            N("Young smoker, rest pain midnight → morning", { a: "who", s: "56" }),
            N("Transient ST ↑ that resolves", { a: "EKG", k: "key", s: "56-57" }),
            N("CCB first; SL nitro for attacks", { a: "treat", k: "good", s: "58", d: "Long-acting nitrate if symptoms persist." }),
            N("Avoid beta blockers (esp. nonselective)", { k: "bad", s: "58", d: "Blocking β2 leaves alpha vasoconstriction unopposed (standard teaching), so spasm can worsen." })
          ]),
          N("Cocaine / meth", { i: "💊", col: "orange", s: "59" }, [
            N("Sympathetic surge: ↑HR, ↑BP, ↑demand", { a: "cause", s: "59" }, [
              N("Spasm, thrombosis, MI", { a: "so", k: "bad", s: "59" })
            ]),
            N("Benzos + nitrates (± CCB)", { a: "treat", k: "good", s: "59", d: "Benzodiazepines calm the sympathetic drive; nitrates reverse spasm." })
          ]),
          N("RV infarction", { i: "🫀", col: "teal", go: "rv", s: "60-66" }, [
            N("Inferior STEMI + hypotension + JVD + clear lungs", { k: "key", s: "66" })
          ]),
          N("Older adults (≥ 65)", { i: "👵", col: "gold", s: "67", d: "60-65% of MIs and most ACS deaths." }, [
            N("More often NSTEMI; often no chest pain", { a: "present", s: "67", l: ["dyspnea", "syncope", "weakness", "delirium"] }),
            N("More HF, shock, arrhythmia, bleeding, AKI", { a: "risk", k: "bad", s: "67" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 7 RV infarct */
      {
        id: "rv", title: "RV infarction: why fluids, not nitro", icon: "🫀", lo: ["LO 7"], layout: "tree",
        ask: "Why does an RV infarct drop the blood pressure, and why does that flip the usual drugs?",
        tree: N("Proximal RCA blocked", { i: "🚫", k: "bad", s: "60", d: "Usually with an inferior MI.", fig: { type: "leads", hi: ["II", "III", "aVF"], recip: ["I", "aVL"], label: "Inferior STEMI: think RV" } }, [
          N("RV can't pump", { a: "so", s: "60", j: N("Triad: hypotension + JVD + clear lungs", { k: "key", s: "60, 66" }, [
            N("Right-sided EKG: ST ↑ in V4R", { a: "confirm", s: "61-64", d: "A standard 12-lead can miss RV involvement. Get one in EVERY inferior MI." }, [
              N("Treat", { vs: true, a: "then", s: "65-66" }, [
                N("AVOID nitrates + diuretics", { col: "red", k: "bad", s: "65-66", d: "Both cut preload: the one thing holding the BP up." }),
                N("GIVE IV saline (cautious)", { col: "green", k: "good", s: "65-66", d: "Fill the preload; reassess often. Urgent reperfusion (usually PCI) is still essential." })
              ])
            ])
          ]) }, [
            N("Less blood reaches the lungs and LA", { a: "so", s: "60" }, [
              N("↓ LV preload", { a: "so", k: "key", s: "60-61", d: "Systemic BP depends on preload reaching the left heart." }, [
                N("↓ Cardiac output → HYPOTENSION", { a: "so", k: "bad", s: "60" })
              ])
            ]),
            N("Blood backs up behind the RV", { a: "and", s: "60" }, [
              N("JVD, but CLEAR lungs", { a: "so", s: "60", d: "The left side isn't backed up, so no pulmonary edema." })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 8 */
      {
        id: "complications", title: "Complications of MI", icon: "⚠️", lo: ["LO 8"], layout: "spine",
        ask: "Pump, structure, wiring: what breaks after an MI and what does each look like?",
        center: "Acute MI complications", centerI: "⚠️", centerS: "68-71",
        centerD: "Three families: the pump fails (functional), the muscle tears (mechanical), or the wiring misfires (electrical).",
        branches: [
          N("FUNCTIONAL: the pump fails", { i: "🫀", col: "blue", s: "68-69" }, [
            N("LV failure", { s: "69" }, [
              N("Pulmonary congestion/edema", { a: "looks like", s: "69" }),
              N("Diuretics + BB, ACEi", { a: "treat", k: "good", s: "68-69" })
            ]),
            N("RV failure", { go: "rv", s: "69" }, [
              N("Low BP, high JVP, clear lungs", { a: "looks like", s: "69" }),
              N("Fluids; no nitro/diuretic", { a: "treat", k: "good", s: "68-69" })
            ]),
            N("Cardiogenic shock", { k: "bad", s: "69" }, [
              N("Pump failure + hypoperfusion", { a: "looks like", s: "69" }),
              N("Urgent revascularization", { a: "treat", k: "good", s: "69" })
            ])
          ]),
          N("MECHANICAL: the muscle tears", { i: "🧵", col: "red", s: "68, 70" }, [
            N("Free-wall rupture", { k: "bad", s: "70", d: "Highest mortality." }, [
              N("Hemopericardium → tamponade", { a: "so", s: "70" }, [
                N("PEA / sudden death", { a: "so", k: "bad", s: "70" })
              ])
            ]),
            N("Septal rupture (VSD)", { s: "68, 70" }, [
              N("New HARSH holosystolic murmur", { a: "hear", k: "key", s: "70" }),
              N("L→R shunt: O2 step-up", { a: "measure", s: "68, 70" })
            ]),
            N("Papillary muscle rupture", { s: "70" }, [
              N("Acute severe MR", { a: "so", s: "70" }, [
                N("Pulmonary edema, shock", { a: "so", k: "bad", s: "70" })
              ])
            ])
          ]),
          N("ELECTRICAL: the wiring misfires", { i: "⚡", col: "gold", s: "68, 71" }, [
            N("Brady / AV block", { s: "71", d: "Especially with an inferior MI (standard teaching: the RCA usually feeds the AV node)." }, [
              N("Atropine → temporary pacing", { a: "treat", s: "71" }),
              N("Permanent pacer only if it persists", { k: "key", s: "71", d: "After an appropriate waiting period." })
            ]),
            N("VT / VF", { k: "bad", s: "71" }, [
              N("Pulseless: defibrillate", { a: "treat", s: "71" }),
              N("Unstable with pulse: synchronized cardioversion", { s: "71" }),
              N("Amiodarone if persistent", { s: "68" })
            ]),
            N("New BBB / fascicular block", { s: "71" }, [
              N("Means extensive injury", { a: "so", s: "71" }),
              N("Not automatically a pacemaker", { k: "key", s: "71" })
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 9 and 10 */
      {
        id: "after", title: "After PCI and secondary prevention", icon: "🏠", lo: ["LO 9", "LO 10"], layout: "spine",
        ask: "What do you watch right after the cath, and what does every MI patient go home with?",
        center: "Life after the MI", centerI: "🏠", centerS: "75-81",
        branches: [
          N("Right after PCI", { i: "🩺", col: "blue", rail: true, s: "75" }, [
            N("Telemetry: recurrent ischemia, arrhythmia", { s: "75" }),
            N("Access site: bleeding, hematoma", { k: "key", s: "75", fig: { type: "access", mode: "femoral" } }),
            N("Distal circulation: pulse, color, temp, sensation", { s: "75" }),
            N("Kidney function after contrast", { s: "75" }),
            N("Access-specific activity rules", { s: "75" })
          ]),
          N("Discharge", { i: "🚪", col: "green", s: "76" }, [
            N("Uncomplicated STEMI: 48-72 h if stable", { s: "76" }),
            N("Plan for any remaining disease", { s: "76" })
          ]),
          N("Core meds", { i: "💊", col: "gold", k: "key", s: "80" }, [
            N("DAPT 12 months", { s: "80", d: "Aspirin + P2Y12 inhibitor if bleeding risk isn't high." }),
            N("High-intensity statin (+ ezetimibe/nonstatin)", { s: "80-81" }),
            N("Beta blocker", { s: "80", l: ["low EF", "HF", "angina", "arrhythmia"] }),
            N("ACEi / ARB", { s: "80", l: ["EF ≤ 40%", "HTN", "diabetes", "anterior STEMI"] })
          ]),
          N("Cardiac rehab", { i: "🏃", col: "teal", s: "77-79", d: "Lowers cardiac and all-cause death; yet < 30% of eligible patients go." }, [
            N("Who: MI, stent, CABG, valve surgery, HFrEF", { s: "77" }),
            N("3 parts: exercise, stress, education", { s: "78" }),
            N("36 sessions over 3 months", { k: "num", s: "78" }),
            N("Barriers: cost, access, patient factors", { k: "bad", s: "79" })
          ]),
          N("Also", { i: "➕", col: "violet", rail: true, s: "80-81" }, [
            N("Quit smoking (counsel + meds)", { s: "81" }),
            N("Diet, weight, activity, adherence", { s: "80-81" }),
            N("BP to an individual goal", { s: "81" }),
            N("Diabetes: GLP-1 RA or SGLT2i with CV benefit", { s: "81" }),
            N("Treat HF with GDMT", { s: "81" }),
            N("Anticoagulate only for AF or LV thrombus", { k: "key", s: "81", d: "Not routinely after every MI." })
          ])
        ]
      }
    ]
  });
}());
