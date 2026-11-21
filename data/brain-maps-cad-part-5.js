/* Brain maps: CAD Part V (Stager): Pharmacology of IHD and ACS, 87 slides, 9 LOs. Facts are from the deck; anything else is
   marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "cad-part-5",
    title: "CAD Part V: Pharmacology",
    short: "CAD V",
    by: "Stager",
    slides: 87,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "Every CAD drug answers one of two questions: does it fix the oxygen balance, or does it stop the clot?",
        tree: N("CAD drugs", { i: "💊", d: "Stable angina is a supply/demand problem; ACS adds a clot. Each drug class works on one of those.", s: "2, 5, 45" }, [
          N("Stable angina: fix the O₂ balance", { col: "blue", i: "⚖️", a: "chronic", go: "balance", s: "2-10" }, [
            N("Lower risk long-term", { a: "always", go: "goals", l: ["quit smoking", "BP < 130/80", "high-intensity statin", "150 min exercise"], s: "5-8" }),
            N("Relieve angina: antianginals", { a: "symptoms", go: "choose", s: "6, 10" }, [
              N("Nitrates", { go: "nitrates", d: "↓ preload", s: "11-24" }),
              N("Beta blockers", { go: "bb", d: "↓ HR, contractility, BP", s: "25-32" }),
              N("CCBs", { go: "ccb", d: "dilate arteries (DHP) or slow the heart (non-DHP)", s: "33-37" }),
              N("Ranolazine", { go: "ranolazine", d: "late Na⁺ block; no HR or BP change", s: "38-41" })
            ])
          ]),
          N("ACS: stop the clot + protect the muscle", { col: "red", i: "🚨", a: "acute", go: "acs-plan", s: "44-46" }, [
            N("Symptom drugs: NTG, BB, O₂ if < 90%", { a: "relieve", go: "acs-symptom", s: "47-52" }),
            N("Protect: ACEi/ARB, high-intensity statin", { a: "protect", go: "acs-symptom", s: "53-54, 84" }),
            N("Plug, mesh or dissolve?", { k: "q", a: "the clot", go: "clot-drugs", s: "59, 71" }, [
              N("Antiplatelets: aspirin + P2Y12", { go: "antiplatelets", s: "60-70" }),
              N("Anticoagulants: heparin, enoxaparin", { go: "anticoag", s: "72-73" }),
              N("Fibrinolytic: alteplase (STEMI only)", { go: "anticoag", s: "81-83" })
            ]),
            N("Reperfusion: PCI or CABG", { a: "open it", go: "anticoag", s: "75-80" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 1 */
      {
        id: "balance", title: "Supply vs demand", icon: "⚖️", lo: ["LO 1"], layout: "tree",
        ask: "Angina = demand beats supply. What sets each side, what tips it, and which drug pushes it back?",
        tree: N("Myocardial O₂ balance", { i: "⚖️", s: "2-3", fig: { type: "balance", supply: ["coronary flow", "O₂ content", "perfusion pressure"], demand: ["heart rate", "contractility", "wall stress"], tip: "demand", verdict: "Angina: demand > supply" } }, [
          N("SUPPLY", { col: "blue", vs: true, s: "2-3", d: "Set by coronary blood flow, arterial O₂ content (Hb and saturation) and coronary perfusion pressure." }, [
            N("↓ by", { a: "non-cardiac", rail: true, s: "3" }, [
              N("Anemia, hypoxemia, sickle cell", { s: "3" }),
              N("Stimulants (meth, cocaine)", { s: "3" }),
              N("Thick blood: polycythemia, dehydration", { s: "3" })
            ]),
            N("↓ by", { a: "cardiac", rail: true, s: "3" }, [
              N("CAD", { k: "key", s: "3" }),
              N("Aortic stenosis, HCM", { s: "3" })
            ])
          ]),
          N("DEMAND", { col: "red", s: "2-3", d: "Set by heart rate, contractility and ventricular wall stress." }, [
            N("↑ by", { a: "non-cardiac", rail: true, s: "3" }, [
              N("Fever, hyperthyroidism", { s: "3" }),
              N("Stimulants, albuterol", { s: "3" }),
              N("Hypertension, anxiety", { s: "3" })
            ]),
            N("↑ by", { a: "cardiac", rail: true, s: "3" }, [
              N("Tachycardia, ↑ contractility", { s: "3" }),
              N("Aortic stenosis, HCM", { s: "3", d: "AS and HCM sit on BOTH sides: thick muscle needs more and the outflow limits supply." })
            ])
          ]),
          N("Which drug moves which lever", { k: "key", a: "fix it", vs: true, s: "12, 29, 34, 38" }, [
            N("↓ DEMAND", { col: "green", rail: true, s: "12, 29, 38" }, [
              N("Nitrate: ↓ preload → ↓ wall stress", { go: "nitrates", s: "12" }),
              N("BB: ↓ HR, contractility, BP", { go: "bb", s: "29" }),
              N("Non-DHP CCB: ↓ HR, contractility", { go: "ccb", s: "34" }),
              N("Ranolazine: ↓ wall tension", { go: "ranolazine", s: "38" })
            ]),
            N("↑ SUPPLY", { col: "blue", rail: true, s: "12, 29, 33" }, [
              N("Nitrate: dilates coronaries, reverses spasm", { s: "12" }),
              N("BB: longer diastole = more filling time", { s: "27, 29" }),
              N("CCB: ↑ coronary flow", { s: "33" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 1 continued */
      {
        id: "goals", title: "Goals and risk factors", icon: "🎯", lo: ["LO 1"], layout: "spine",
        ask: "What are you trying to achieve now, and later, and which risk factors do you go after?",
        center: "Treating CAD", centerI: "🎯", centerS: "5-8",
        branches: [
          N("Short-term goals", { i: "⏱️", col: "blue", rail: true, s: "5" }, [
            N("Fewer angina symptoms, better exercise and quality of life", { s: "5" }),
            N("Restore supply/demand balance", { s: "5", go: "balance" })
          ]),
          N("Long-term goals", { i: "📆", col: "green", rail: true, s: "5" }, [
            N("Prevent MI, arrhythmias, HF", { s: "5" }),
            N("Prevent morbidity and death", { k: "key", s: "5" })
          ]),
          N("Tobacco", { i: "🚭", col: "red", s: "7" }, [
            N("Assess, advise to quit, support + meds; avoid secondhand smoke", { s: "7" })
          ]),
          N("Blood pressure", { i: "🩺", col: "orange", s: "7" }, [
            N("< 130/80 for many, individualized", { k: "num", s: "7" })
          ]),
          N("Lipids", { i: "🧈", col: "gold", s: "7" }, [
            N("High-intensity statin for ASCVD; recheck LDL-C", { s: "7" })
          ]),
          N("Exercise and weight", { i: "🏃", col: "teal", s: "8" }, [
            N("≥ 150 min/week moderate, as tolerated", { k: "num", s: "8" }),
            N("BMI is one measure, not a universal target", { s: "8" })
          ]),
          N("Diabetes", { i: "🩸", col: "violet", s: "8" }, [
            N("A1c around 7% for many, individualized", { k: "num", s: "8" })
          ]),
          N("Alcohol", { i: "🍷", col: "pink", s: "8" }, [
            N("Never recommend it for heart benefit", { k: "key", s: "8" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 1-5: choosing */
      {
        id: "choose", title: "Choosing the antianginal", icon: "🧭", lo: ["LO 1", "LO 3", "LO 4", "LO 5"], layout: "tree",
        ask: "Stable angina: what goes first, what gets added, and what combination is a trap?",
        tree: [
          N("Stable angina", { i: "💢", s: "10", d: "Pick by heart rate, BP, LV function, other diseases and response." }, [
            N("Everyone: SL nitro PRN", { col: "blue", a: "carry it", go: "nitrates", s: "15", d: "All CAD patients carry NTG tablets for quick relief." }, [
              N("1st: beta blocker OR CCB", { k: "key", a: "first line", s: "10, 27, 33" }, [
                N("Still symptomatic?", { k: "q", a: "then", s: "17, 35, 39" }, [
                  N("Add long-acting nitrate", { a: "add", go: "nitrates", s: "17", d: "Second-line when angina is frequent on a beta blocker." }),
                  N("Add DHP CCB (amlodipine) to BB", { a: "add", go: "ccb", s: "35", k: "good" }),
                  N("Add ranolazine", { a: "add-on", go: "ranolazine", s: "39", d: "For symptoms despite a BB, CCB or long-acting nitrate." })
                ])
              ])
            ])
          ]),
          N("TRAP: BB + verapamil/diltiazem", { col: "red", k: "bad", i: "⛔", s: "35", d: "Both slow the heart: excessive bradycardia, AV block or worse LV function." }),
          N("Vasospastic (Prinzmetal) angina", { col: "violet", i: "🌙", s: "30, 35" }, [
            N("CCB first; nitrates too", { a: "use", k: "good", s: "30, 35" }),
            N("Avoid BB, esp. nonselective", { a: "avoid", k: "bad", s: "30", d: "Unopposed alpha activity worsens the spasm." })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 2 */
      {
        id: "nitrates", title: "Nitrates", icon: "💧", lo: ["LO 2"], layout: "spine",
        ask: "How does a nitrate relieve angina, which form when, and what does it do to you?",
        center: "Nitrates", centerI: "💧", centerS: "11-24",
        centerD: "Converted to nitric oxide → smooth muscle relaxes.",
        branches: [
          N("How it works", { i: "⚙️", col: "blue", s: "11-12" }, [
            N("→ Nitric oxide", { s: "11" }, [
              N("VENOdilation (mostly)", { a: "so", k: "key", s: "11" }, [
                N("↓ venous return = ↓ preload", { a: "so", s: "11" }, [
                  N("↓ wall stress → ↓ O₂ demand", { a: "so", k: "good", s: "11-12" })
                ])
              ]),
              N("Coronary dilation, relieves spasm", { a: "also", s: "11-12" })
            ])
          ]),
          N("Which form", { i: "⏳", col: "teal", rail: true, s: "13", d: "Every form causes tolerance." }, [
            N("IV NTG: on in 1-2 min, lasts 3-5 min", { s: "13-14", d: "Persistent pain despite SL; titratable and transient, good with marginal BP. Drug of choice for hypertensive emergency with pulmonary edema." }),
            N("SL NTG 0.4 mg: on in 1-3 min, 30-60 min", { s: "13" }),
            N("Isosorbide dinitrate: 20-40 min, 4-6 h", { s: "13, 17" }),
            N("Patch: 40-60 min, > 8 h", { s: "13" }),
            N("Isosorbide mononitrate 30 mg: 30-60 min, 6-8 h", { s: "13, 17" })
          ]),
          N("SL nitro: how to take it", { i: "👅", col: "gold", s: "15-16" }, [
            N("Sit down, 1 tab under the tongue (don't swallow)", { s: "15-16", d: "It drops BP fast by venodilation." }, [
              N("No relief in 5 min → call 911", { k: "key", s: "15", d: "Don't wait to finish all three doses." }, [
                N("May repeat q5 min, max 3, if BP allows", { s: "15" })
              ])
            ])
          ]),
          N("Long-acting: prevention only", { i: "📆", col: "green", s: "17-18" }, [
            N("Nitrate-free interval 10-12 h daily", { k: "key", s: "17-18", d: "Imdur IR at 8 am and 3 pm leaves the night free." }, [
              N("Prevents tolerance", { a: "why", s: "18-19" })
            ])
          ]),
          N("Side effects", { i: "🤕", col: "orange", rail: true, s: "19-20" }, [
            N("Tolerance (tachyphylaxis) in 24-48 h", { k: "key", s: "19" }),
            N("Headache (cerebral vasodilation)", { s: "16, 19", d: "Does NOT tell you whether it's working." }),
            N("Flushing", { s: "20" }),
            N("Orthostatic hypotension, dizziness", { s: "20", d: "Venous pooling: sit down first." })
          ]),
          N("Don't give with", { i: "⛔", col: "red", k: "bad", rail: true, s: "21-22, 47" }, [
            N("PDE-5 inhibitor within 24 h", { k: "bad", s: "21", l: ["sildenafil", "vardenafil", "tadalafil"], d: "Both dilate: severe hypotension." }),
            N("HCM with outflow obstruction", { s: "22", d: "Less preload makes the obstruction worse." }),
            N("Severe AS (caution)", { s: "22" }),
            N("Low BP, volume depletion, RV infarct", { s: "22, 47" })
          ]),
          N("Monitor", { i: "📋", col: "violet", s: "23-24" }, [
            N("BP, HR, dizziness, angina pattern, SL use", { s: "23" }),
            N("Pain gone with nitro ≠ cardiac", { k: "key", s: "24", d: "Nitro also relaxes esophageal spasm." })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 3 */
      {
        id: "bb", title: "Beta blockers", icon: "🐢", lo: ["LO 3"], layout: "spine",
        ask: "Why do beta blockers relieve angina, which ones, and who must not get them?",
        center: "Beta blockers", centerI: "🐢", centerS: "25-32",
        centerD: "First-line for symptoms of chronic stable angina: they block epinephrine and norepinephrine at the heart.",
        branches: [
          N("Receptors", { i: "📡", col: "blue", vs: true, s: "25" }, [
            N("β1: heart + kidney (JG cells)", { s: "25" }, [
              N("Block → ↓ HR, contractility, AV conduction, renin", { a: "so", k: "key", s: "25" })
            ]),
            N("β2: bronchi + vessels", { s: "25" }, [
              N("Block → bronchoconstriction", { a: "so", k: "bad", s: "25" })
            ])
          ]),
          N("Why angina improves", { i: "⚖️", col: "green", s: "27, 29" }, [
            N("↓ Heart rate (main effect)", { k: "key", s: "29" }, [
              N("Longer diastole → more coronary filling", { a: "bonus", k: "good", s: "27, 29" })
            ]),
            N("↓ Contractility, ↓ BP / wall stress", { s: "29" })
          ]),
          N("Kinds", { i: "🧩", col: "gold", rail: true, s: "28" }, [
            N("β1-selective: metoprolol, atenolol, bisoprolol", { k: "key", s: "28" }),
            N("Nonselective: propranolol, nadolol, timolol", { s: "28" }),
            N("+ α1 block: carvedilol, labetalol", { s: "28" })
          ]),
          N("Side effects", { i: "🤕", col: "orange", rail: true, s: "31" }, [
            N("Fatigue, dizziness, cold hands, sexual dysfunction", { s: "31" }),
            N("Brady, hypotension, AV block, worse acute HF", { s: "31" }),
            N("Bronchospasm (nonselective)", { s: "31" }),
            N("Masks hypoglycemia (insulin, sulfonylureas)", { k: "key", s: "31", d: "Blocks the warning tachycardia." }),
            N("Stop abruptly → rebound angina/MI: TAPER", { k: "bad", s: "31" })
          ]),
          N("Contraindications", { i: "⛔", col: "red", k: "bad", rail: true, s: "30, 32" }, [
            N("Severe brady or symptomatic hypotension", { s: "32" }),
            N("2nd/3rd-degree AV block without pacer", { s: "32" }),
            N("Acute decompensated HF, shock, low output", { s: "32" }),
            N("Active bronchospasm", { s: "32" }),
            N("Vasospastic angina", { s: "30", d: "Unopposed alpha activity worsens spasm; use a CCB." })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "ccb", title: "Calcium channel blockers", icon: "🧲", lo: ["LO 4"], layout: "tree",
        ask: "DHP vs non-DHP: where does each act, what does each do, and which pairs with a beta blocker?",
        tree: N("CCBs: block calcium entry", { i: "🧲", s: "33-34", d: "First-line next to beta blockers: lower demand, raise coronary flow, or both. Use if BB/nitrates aren't tolerated or not enough." }, [
          N("Which kind?", { k: "q", vs: true, s: "34" }, [
            N("DHP: amlodipine, nifedipine", { col: "blue", s: "34" }, [
              N("Acts on VESSELS", { a: "where", k: "key", s: "34" }, [
                N("Arterial dilation → ↓ BP / afterload", { a: "so", s: "34" }, [
                  N("Side effects", { a: "so", rail: true, s: "36" }, [
                    N("Edema", { s: "36" }),
                    N("Headache, flushing", { s: "36" }),
                    N("Reflex tachycardia (short-acting nifedipine)", { s: "36" })
                  ])
                ])
              ]),
              N("OK with a beta blocker", { k: "good", a: "pairs", s: "35" })
            ]),
            N("Non-DHP: verapamil, diltiazem", { col: "red", s: "34" }, [
              N("Acts on the HEART", { a: "where", k: "key", s: "34" }, [
                N("↓ HR, ↓ contractility, controls arrhythmias", { a: "so", s: "34" }, [
                  N("Side effects", { a: "so", rail: true, s: "37" }, [
                    N("Brady, AV block", { s: "37" }),
                    N("Hypotension, dizziness, fatigue", { s: "37" }),
                    N("Worse HF if low EF", { k: "bad", s: "37" }),
                    N("Constipation (verapamil)", { s: "37" })
                  ])
                ])
              ]),
              N("NOT with a beta blocker", { k: "bad", a: "trap", s: "35", d: "Double slowing: bradycardia, AV block, LV dysfunction." })
            ])
          ]),
          N("Preferred for vasospastic angina", { k: "key", a: "special", s: "35" })
        ])
      },

      /* ------------------------------------------------------------ LO 5 */
      {
        id: "ranolazine", title: "Ranolazine", icon: "🔌", lo: ["LO 5"], layout: "tree",
        ask: "How does ranolazine work without touching HR or BP, and what limits its dose?",
        tree: [
          N("Blocks the LATE inward Na⁺ current", { i: "🔌", s: "38", d: "In myocytes during repolarization." }, [
            N("↓ Na⁺ inside the cell", { a: "so", s: "38" }, [
              N("↓ Ca²⁺ influx", { a: "so", s: "38" }, [
                N("↓ wall tension, better O₂ delivery, ↓ demand", { a: "so", k: "good", s: "38" }, [
                  N("NO change in HR or BP", { k: "key", a: "unique", s: "38", d: "Useful when BP or HR is already low." })
                ])
              ])
            ]),
            N("Prolongs the action potential", { a: "also", s: "38" }, [
              N("QT prolongation", { a: "so", k: "bad", s: "40" })
            ])
          ]),
          N("Use: add-on when still symptomatic", { col: "green", i: "➕", s: "39" }, [
            N("500 mg ER BID → 1000 mg BID", { a: "dose", k: "num", s: "39" })
          ]),
          N("Side effects", { col: "orange", i: "🤕", rail: true, s: "40" }, [
            N("Constipation, nausea", { s: "40" }),
            N("Headache, dizziness", { s: "40" }),
            N("QT prolongation", { k: "bad", s: "40" }),
            N("Cirrhosis: contraindicated (liver-metabolized)", { k: "bad", s: "40" }),
            N("Renal impairment: monitor kidneys", { s: "40" })
          ]),
          N("Interactions", { col: "red", i: "⚠️", rail: true, s: "39, 41" }, [
            N("Diltiazem, verapamil, fluconazole, grapefruit → max 500 BID", { k: "key", s: "39, 41", d: "They raise ranolazine levels." }),
            N("Strong CYP3A inhibitors: avoid", { s: "41", l: ["ketoconazole", "itraconazole", "clarithromycin"] }),
            N("Raises digoxin levels", { s: "41" }),
            N("Simvastatin max 20 mg", { s: "41" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 6 */
      {
        id: "acs-plan", title: "ACS drug plan", icon: "🚨", lo: ["LO 6"], layout: "spine",
        ask: "In ACS, which drugs does everyone get, which depend on symptoms, and which do you avoid?",
        center: "ACS drug therapy", centerI: "🚨", centerS: "45-46",
        centerD: "Goals: relieve ischemia and lower demand, restore flow, stop more clot, cut complications and death.",
        branches: [
          N("CORE: everyone", { i: "⭐", col: "gold", k: "key", rail: true, s: "46" }, [
            N("Aspirin", { go: "antiplatelets", s: "46" }),
            N("P2Y12 inhibitor", { go: "antiplatelets", s: "46" }),
            N("Anticoagulant", { go: "anticoag", s: "46" }),
            N("Reperfusion when indicated", { go: "anticoag", s: "46" })
          ]),
          N("SYMPTOM-directed", { i: "🩺", col: "blue", rail: true, s: "46", go: "acs-symptom" }, [
            N("Nitroglycerin", { s: "46-47" }),
            N("Beta blocker", { s: "46, 49-52" }),
            N("Oxygen only if sat < 90%", { s: "46, 48" })
          ]),
          N("SELECTED situations", { i: "🔍", col: "violet", rail: true, s: "46" }, [
            N("Opioids: pain despite anti-ischemic therapy", { s: "46, 55" }),
            N("Fibrinolysis: STEMI, no timely PCI", { s: "46, 81-83" })
          ]),
          N("PROTECT long-term", { i: "🛡️", col: "green", rail: true, s: "53-54, 84" }, [
            N("ACEi/ARB (high-risk features)", { s: "53" }),
            N("High-intensity statin, whatever the LDL", { k: "key", s: "84" }),
            N("Correct low K⁺ and Mg²⁺", { s: "84", d: "Lowers arrhythmia risk." })
          ]),
          N("AVOID", { i: "🚫", col: "red", k: "bad", rail: true, s: "46, 58, 84" }, [
            N("Non-aspirin NSAIDs", { s: "46, 58", d: "Raise cardiovascular events; no role in ACS pain." }),
            N("Prophylactic lidocaine / antiarrhythmics", { s: "46, 84" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 6 details */
      {
        id: "acs-symptom", title: "NTG, O₂, BB, ACEi and opioids in ACS", icon: "🩺", lo: ["LO 6"], layout: "spine",
        ask: "Each ACS symptom drug: why give it, how much, and when to hold it?",
        center: "ACS: the supporting drugs", centerI: "🩺", centerS: "47-58",
        branches: [
          N("Nitroglycerin", { i: "💧", col: "blue", s: "47, 57" }, [
            N("↓ preload → ↓ wall stress → ↓ demand", { a: "why", s: "47" }),
            N("SL 0.4 mg q5 min × 3 → IV 10 mcg/min", { a: "how", k: "num", s: "47, 57", d: "IV if pain persists, or with HTN or pulmonary edema. Tachyphylaxis after about 24 h." }),
            N("Hold: SBP < 90, RV infarct, PDE-5 inhibitor", { a: "hold", k: "bad", s: "47, 57", d: "Also caution in severe AS or obstructive HCM, and if SBP drops > 30 below baseline." })
          ]),
          N("Oxygen", { i: "🫧", col: "teal", s: "48" }, [
            N("Only if sat < 90%", { k: "key", s: "48", d: "No benefit in patients who aren't hypoxic." })
          ]),
          N("Beta blocker", { i: "🐢", col: "green", s: "49-52" }, [
            N("Smaller infarct, less reinfarction, fewer VF deaths", { a: "why", k: "good", s: "49" }),
            N("Oral, cardioselective, within 24 h", { a: "how", s: "50", d: "No benefit to giving it before PCI, as long as it starts within 24 h." }, [
              N("Goal HR 55-70, SBP > 90", { k: "num", s: "51" })
            ]),
            N("Hold", { a: "hold", k: "bad", l: ["decompensated HF", "HR < 55", "SBP < 90 / shock", "2nd-3rd degree block", "active asthma"], s: "51" }),
            N("Long term: by EF", { a: "later", s: "52", d: "EF < 50% or HF: continue (metoprolol succinate, carvedilol, bisoprolol). Preserved EF, revascularized: reassess, no clear lifelong benefit." })
          ]),
          N("ACEi / ARB", { i: "🛡️", col: "gold", s: "53-54" }, [
            N("↓ death and recurrent events", { a: "why", k: "good", s: "53" }),
            N("Who", { a: "high risk", l: ["EF ≤ 40%", "HF", "HTN", "diabetes", "anterior STEMI"], s: "53" }),
            N("Start within 24 h; check BP, Cr, K⁺", { a: "how", s: "54" }),
            N("Never ACEi + ARB together", { k: "bad", s: "54" })
          ]),
          N("Opioids", { i: "💉", col: "violet", s: "55-57" }, [
            N("Only for severe pain despite max therapy", { a: "when", k: "key", s: "55", d: "Morphine 2-4 mg IV or fentanyl 25-50 mcg IV. Don't mask ongoing ischemia." }),
            N("Delay oral P2Y12 absorption", { a: "problem", k: "bad", s: "55", d: "They slow gastric emptying." }),
            N("Hypotension, resp. depression, nausea, sedation", { a: "watch", s: "55-56", d: "Pruritus is histamine release, not always allergy." }),
            N("Naloxone 0.4 mg IV at hand", { a: "reverse", s: "56" })
          ]),
          N("NSAIDs: avoid", { i: "🚫", col: "red", k: "bad", s: "58", d: "Ibuprofen, diclofenac: more cardiovascular events." })
        ]
      },

      /* ------------------------------------------------------------ LO 7 */
      {
        id: "clot-drugs", title: "Plug, mesh, dissolve", icon: "🧱", lo: ["LO 7"], layout: "tree",
        ask: "Antiplatelet, anticoagulant, fibrinolytic: which part of the clot does each one hit?",
        tree: N("A coronary clot", { i: "🩸", s: "59, 71", fig: { type: "clot" }, d: "Platelets form the plug; fibrin forms the mesh that holds it together." }, [
          N("ANTIPLATELETS", { col: "gold", a: "the plug", s: "59-60", fig: { type: "clot", hi: "plug" } }, [
            N("Stop platelet activation / aggregation", { a: "how", s: "59" }, [
              N("Aspirin, clopidogrel, prasugrel, ticagrelor", { a: "e.g.", go: "antiplatelets", s: "59-60" })
            ])
          ]),
          N("ANTICOAGULANTS", { col: "violet", a: "the mesh", s: "59, 72", fig: { type: "clot", hi: "mesh" } }, [
            N("Block clotting factors → less fibrin", { a: "how", s: "59" }, [
              N("Heparin, enoxaparin, bivalirudin", { a: "e.g.", go: "anticoag", s: "59" })
            ])
          ]),
          N("FIBRINOLYTICS", { col: "red", a: "dissolve", s: "59, 81", fig: { type: "clot", hi: "lytic" } }, [
            N("Break down fibrin in an EXISTING clot", { a: "how", s: "59" }, [
              N("Alteplase, tenecteplase", { a: "e.g.", go: "anticoag", s: "59" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 8 */
      {
        id: "antiplatelets", title: "Aspirin and the P2Y12 inhibitors", icon: "🟡", lo: ["LO 8"], layout: "tree",
        ask: "How do aspirin and each P2Y12 inhibitor differ in dose, who gets it, and its big risks?",
        tree: [
          N("Aspirin", { col: "gold", i: "🟡", s: "60-63", fig: { type: "platelet", hi: "asa" } }, [
            N("Irreversibly blocks COX-1", { a: "how", s: "61" }, [
              N("↓ thromboxane A₂ → less aggregation", { a: "so", s: "61" }, [
                N("Lasts the platelet's life", { a: "so", k: "key", s: "61" })
              ])
            ]),
            N("ACS: 162-325 mg chewed, non-EC", { a: "load", k: "num", s: "62", d: "Even if they already take daily aspirin." }, [
              N("Then 81 mg daily", { a: "then", s: "62" }, [
                N("DAPT ≥ 12 months, then aspirin long term", { a: "after MI", k: "key", s: "62-63", d: "Aspirin + P2Y12, if not high bleeding risk." })
              ])
            ])
          ]),
          N("P2Y12 inhibitors", { col: "blue", i: "🔒", s: "60, 65-70", fig: { type: "platelet", hi: "p2y12" } }, [
            N("Clopidogrel (Plavix)", { s: "65", d: "Thienopyridine." }, [
              N("Load 300-600, then 75 daily", { k: "num", s: "65" }),
              N("Also stroke, PAD", { a: "uses", s: "65" }),
              N("Rare TTP", { k: "bad", s: "65" })
            ]),
            N("Prasugrel (Effient)", { s: "66-67", d: "Thienopyridine." }, [
              N("ACS going to PCI", { a: "who", s: "66" }),
              N("Load 60, then 10 daily (5 if < 60 kg)", { k: "num", s: "66" }),
              N("NO prior stroke/TIA; avoid ≥ 75", { k: "bad", s: "67", d: "Bleeding is the major risk; also rare TTP." })
            ]),
            N("Ticagrelor (Brilinta)", { s: "68-70", d: "Non-thienopyridine." }, [
              N("ACS: PCI or medical", { a: "who", s: "68" }),
              N("Load 180, then 90 BID × 12 months", { k: "num", s: "68" }),
              N("Bleeding, dyspnea, ↑ uric acid", { k: "bad", s: "69", d: "Dyspnea usually fades; rule out HF or ischemia first. Caution with gout." }),
              N("Keep aspirin ≤ 100 mg", { k: "key", s: "70", d: "Higher aspirin doses reduce ticagrelor's effect." })
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 9 */
      {
        id: "anticoag", title: "Heparin, lytics and reperfusion", icon: "💉", lo: ["LO 7", "LO 9"], layout: "tree",
        ask: "Which anticoagulant fits which plan, when is alteplase used, and what protects the kidneys at PCI?",
        tree: [
          N("Anticoagulate in NSTEMI and STEMI", { i: "💉", col: "violet", s: "72-73", d: "Start in the ER: stops the clot spreading and re-forming." }, [
            N("Cath planned?", { k: "q", vs: true, s: "73" }, [
              N("YES → UFH drip", { col: "violet", k: "key", s: "72-73", d: "Titrated to PTT or anti-Xa; preferred for STEMI or NSTEMI going to LHC." }),
              N("NO → enoxaparin 1 mg/kg SQ q12h", { col: "blue", s: "72-73" })
            ])
          ]),
          N("Invasive or selective? (NSTEMI)", { i: "🧭", k: "q", s: "75-78", d: "Decide from overall risk, not one score alone." }, [
            N("Unstable → urgent invasive", { k: "bad", a: "refractory pain, instability, arrhythmia", s: "78" }, [
              N("PCI (high-risk NSTEMI, STEMI ≤ 90 min)", { s: "77, 79", d: "Don't delay the cath to finish meds or relieve pain." }, [
                N("Contrast risks", { a: "watch", rail: true, s: "79" }, [
                  N("Anaphylactoid: pretreat steroid/antihistamine", { s: "79" }),
                  N("Kidneys: pre-hydrate with NS (± NAC)", { k: "key", s: "79" }),
                  N("Hold metformin 48 h before/after", { s: "79" })
                ])
              ]),
              N("or CABG", { s: "80" })
            ]),
            N("Stable → selective: meds, monitor, echo", { a: "lower risk", s: "76, 78", d: "Cath if ischemia recurs or the patient becomes unstable." })
          ]),
          N("Alteplase (tPA)", { i: "🧨", col: "red", s: "81-83" }, [
            N("Plasminogen → plasmin → fibrin broken", { a: "how", s: "81", fig: { type: "clot", hi: "lytic" } }),
            N("STEMI only, ≤ 12 h, no PCI option", { a: "when", k: "key", s: "81, 83", d: "Limits infarct size and saves lives, but far inferior to PCI." }),
            N("Then UFH/LMWH/fondaparinux 48 h-8 days", { a: "after", s: "83", d: "Stops small new clots while the big one dissolves." })
          ])
        ]
      }
    ]
  });
}());
