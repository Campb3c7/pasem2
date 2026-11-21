/* Brain maps: CAD Part I (Stager), 86 slides, 10 LOs. Facts are from the deck; anything else is marked
   "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "cad-part-1",
    title: "CAD Part I: Foundations",
    short: "CAD I",
    by: "Stager",
    slides: 86,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "How does LDL stuck in an artery wall at 20 turn into chest pain and a stress test at 60?",
        tree: N("CAD Part I in one story", { i: "🫀", d: "Every slide in this lecture is one step of this chain. Tap a box for the why; boxes with ↗ have their own map." }, [
          N("Risk factors", { i: "⚠️", a: "it starts with", l: ["HTN", "high LDL", "diabetes", "smoking", "age", "family history"], go: "risk", d: "They injure the artery's lining and speed up every later step.", s: "6-8, 22" }, [
            N("Atherosclerosis: plaque in the wall", {
              i: "🧈", a: "they damage the lining", go: "plaque", vs: true, d: "LDL gets trapped in the wall, inflammation follows, and over 10-15 years a plaque with a fibrous cap over a lipid core forms.", s: "9-19",
              j: N("Ischemia: O₂ supply &lt; demand", {
                i: "⚖️", k: "key", a: "both end in", go: "supply", d: "Whichever path, the heart muscle gets less oxygen than it needs. The muscle turns stiff and weak, then shows changes on echo and EKG.", s: "32-36",
                x: N("Muscle: stunned · hibernating · dead", { i: "💀", a: "if it lasts", go: "muscle", d: "Brief ischemia stuns, chronic low flow makes muscle hibernate, prolonged severe ischemia kills it (MI).", s: "37-39" })
              }, [
                N("Symptoms", { i: "💢", a: "you feel it", go: "symptoms", l: ["chest pressure", "dyspnea", "nausea", "sweats"], d: "Classic substernal pressure with exertion, but women often have fatigue, sleep trouble, SOB or indigestion instead.", s: "42-46" }, [
                  N("Pretest likelihood", { i: "🎯", vs: true, a: "so you estimate", go: "workup", d: "Only symptomatic patients get tested. How likely is obstructive CAD before any test? That decides which test, if any.", s: "48-51" }, [
                    N("Test for ischemia (function)", { i: "🏃", a: "is there ischemia?", col: "green", go: "pick-test", l: ["exercise ECG", "pharm stress", "MPI", "stress echo"], d: "Stress the heart and watch for ischemia on the EKG or on images.", s: "52-69" }),
                    N("Look at the arteries (anatomy)", { i: "🔍", a: "where is the plaque?", col: "violet", go: "anatomy", l: ["CCTA", "CAC score", "cath ± PCI"], d: "Image the coronaries themselves; the invasive cath can also fix a blockage on the spot.", s: "70-86" })
                  ])
                ])
              ])
            }, [
              N("Old plaque, thick cap", { i: "🐢", a: "grows slowly", col: "blue", go: "paths", d: "Older plaques have thick, collagen-rich caps and little inflammation: unlikely to rupture, but they narrow the lumen.", s: "19, 21" }, [
                N("Fixed narrowing", { i: "🔻", a: "narrows the lumen", d: "Enough flow at rest, but the artery can't open further when the heart needs more.", s: "31-32" }, [
                  N("Stable angina · claudication", { k: "bad", a: "pain with effort", d: "Symptoms come with exertion because supply can't rise to meet demand.", s: "21, 42" })
                ])
              ]),
              N("Young plaque, thin cap", { i: "⚡", a: "cracks suddenly", col: "red", go: "paths", d: "Young plaques are still remodeling their caps and have active inflammation under them: too small to cause angina, but they can rupture.", s: "19-20" }, [
                N("Clot (thrombus)", { i: "🩸", a: "core meets blood", d: "The ruptured core is pro-clotting: platelets and the coagulation cascade build a thrombus on the spot.", s: "18, 34" }, [
                  N("ACS: UA · NSTEMI · STEMI", { k: "bad", a: "blocks flow suddenly", d: "Abrupt loss of flow with no warning angina beforehand. In the brain the same event is a stroke.", s: "20, 23, 43" })
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 1 */
      {
        id: "terms", title: "The words: ASCVD, CAD, IHD", icon: "📚", lo: ["LO 1"], layout: "spine",
        ask: "Which word is the process, which is the place, and which is the problem?",
        top: { type: "bm-nest" },
        center: "Atherosclerosis", centerI: "🧈", centerS: "2-3",
        centerD: "Lipid buildup + inflammation in an artery wall → plaque. It is the PROCESS; the other words say where it happens or what it does.",
        branches: [
          N("Where it strikes = ASCVD", { i: "🗺️", col: "red", d: "ASCVD is the group of diseases caused by atherosclerosis in different arterial territories.", s: "3", rail: true,
            j: N("CAD is just ONE face of ASCVD", { k: "key", a: "remember", d: "Same disease process everywhere, so a patient with plaque in one bed often has it in others (standard teaching).", s: "3" }) }, [
            N("Coronary → CAD (also called ASHD)", { i: "❤️", d: "CAD = atherosclerosis of the heart's own coronary arteries. ASHD (atherosclerotic heart disease) usually means CAD.", s: "2, 4" }),
            N("Brain → cerebrovascular disease", { i: "🧠", d: "Plaque rupture plus clot in the brain's arteries causes a stroke (CVA).", s: "3, 23" }),
            N("Limbs → PAD", { i: "🦵", d: "Peripheral artery disease: narrowed leg arteries cause claudication, pain with walking.", s: "3, 21" }),
            N("Aorta → aortic atherosclerotic disease", { i: "〰️", s: "3" })
          ]),
          N("When CAD causes symptoms", { i: "❤️", col: "gold", vs: true, s: "4, 40-41", d: "CAD shows up in one of two families, depending on whether the plaque is slowly narrowing or suddenly ruptures." }, [
            N("Stable ischemic heart disease", { a: "slow narrowing", col: "blue", d: "Chronic flow-limiting plaque: ischemia with exertion.", s: "40-41" }, [
              N("Stable angina", { k: "bad", i: "🏃", s: "4" })
            ]),
            N("Acute coronary syndrome (ACS)", { a: "sudden rupture + clot", col: "red", d: "Plaque disruption triggers thrombosis.", s: "40-41" }, [
              N("Unstable angina · NSTEMI · STEMI", { k: "bad", i: "🚨", s: "4, 41" })
            ])
          ]),
          N("IHD = a supply problem", { i: "⚖️", col: "blue", d: "Ischemic heart disease means myocardial oxygen supply falls short of demand, whatever the cause. It is not a plaque word.", s: "2",
            j: N("CAD can cause IHD, but IHD can happen WITHOUT obstructive CAD", { k: "key", a: "the slide's 'remember'", s: "2" }) }, [
            N("From CAD (the usual cause)", { i: "🧈", d: "A narrowed or clotted coronary can't deliver enough oxygen.", s: "32-34" }),
            N("Without obstructive CAD", { i: "🚫", rail: true, d: "Ischemia can come from things other than plaque.", s: "35" }, [
              N("Vasospasm (Prinzmetal angina)", { d: "'Twitchy' arterioles or illicit sympathomimetic drugs cause intense vasoconstriction.", s: "35" }),
              N("Emboli (septic vegetations from IE)", { s: "35" }),
              N("Congenital lesions (uncommon)", { s: "35" })
            ])
          ]),
          N("The widest umbrella: CVD", { i: "☂️", col: "violet", d: "CVD = diseases of the heart and blood vessels. It includes atherosclerotic disease and everything that isn't.", s: "2" }, [
            N("May be NON-atherosclerotic", { k: "key", d: "So 'CVD' is broader than 'ASCVD'.", s: "2" })
          ]),
          N("How big a problem?", { i: "📊", col: "gray", rail: true, d: "ASCVD is a major cause of death and disability worldwide.", s: "5" }, [
            N("<b>18.2 million</b> Americans have ASCVD", { k: "num", d: "Prevalence rises with age.", s: "5" }),
            N("<b>~15.9 million</b> deaths worldwide (2023)", { k: "num", s: "5" }),
            N("<b>35%</b> of US adults have ≥ 1 risk factor", { k: "num", d: "Uncontrolled HTN, dyslipidemia, high glucose or high BMI.", s: "5" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 3 */
      {
        id: "risk", title: "Risk factors", icon: "⚠️", lo: ["LO 3"], layout: "spine",
        ask: "Which risk factors can you change, and how does each one actually hurt the artery?",
        center: "Who gets plaque?", centerI: "⚠️", centerS: "6-8, 22",
        centerD: "Risk factors don't just add up on paper: each one injures the artery lining or feeds the plaque, so atherosclerosis moves faster.",
        branches: [
          N("Modifiable: you can change these", { i: "🔧", col: "green", s: "6-7" }, [
            N("The 8 on the slide", { l: ["hypertension", "dyslipidemia", "diabetes", "tobacco", "obesity", "inactivity", "unhealthy diet", "excess alcohol"], d: "Every one of these can be treated or changed.", s: "6" }, [
              N("Top 5 cause <b>&gt; 50%</b> of CV deaths", { k: "num", a: "the big five", l: ["high LDL", "diabetes", "HTN", "obesity", "smoking"], s: "7" }, [
                N("Smoking: ASCVD risk <b>2-3×</b>", { k: "num", a: "worst habit", i: "🚬", s: "7",
                  x: N("Quit → risk ↓ <b>50%</b> within 2 years", { k: "good", a: "quit", s: "7" }) }),
                N("Even modest exercise lowers risk a lot", { k: "good", i: "🚶", s: "7" })
              ])
            ])
          ]),
          N("Non-modifiable", { i: "🧬", col: "blue", rail: true, s: "6" }, [
            N("Male sex", { s: "6" }),
            N("Advancing age", { s: "6" }),
            N("Family history of PREMATURE CAD", { s: "6" }, [
              N("Male relative &lt; 55 · Female relative &lt; 65", { k: "key", a: "premature means", d: "Women get CAD about 10 years later than men, so their cutoff is 10 years older (standard teaching).", s: "6" })
            ])
          ]),
          N("Risk enhancers", { i: "➕", col: "violet", rail: true, d: "Important risk-enhancing conditions: they push ASCVD risk up beyond the standard factors.", s: "6" }, [
            N("CKD stage 3, 4, 5", { s: "6" }),
            N("Metabolic syndrome", { s: "6" }),
            N("Chronic inflammatory conditions", { d: "For example rheumatoid arthritis, lupus, psoriasis, HIV (standard teaching examples).", s: "6" })
          ]),
          N("How they speed up plaque", { i: "🔥", col: "red", rail: true, s: "22",
            j: N("Faster atherosclerosis", { k: "bad", a: "all accelerate", go: "plaque", d: "And the inflamed core inside the plaque is pro-clotting and platelet-activating, which is why a rupture makes a clot.", s: "22" }) }, [
            N("Hypertension", { s: "22" }, [
              N("Excessive shear force on the wall", { a: "causes", s: "22" })
            ]),
            N("Cigarette smoking", { d: "Toxins and oxidative stress injure the endothelium (standard teaching).", s: "22" }),
            N("Hypercholesterolemia", { d: "More LDL in the blood means more LDL trapped in the wall.", s: "22" }),
            N("Inflammation / oxidative stress", { d: "Keeps the plaque active and its cap weak.", s: "22" })
          ]),
          N("Lowering risk: 4 moves", { i: "✅", col: "gold", rail: true, s: "8" }, [
            N("Stop tobacco", { k: "good", d: "Assess exposure, offer counseling, give evidence-based cessation treatment.", s: "8" }),
            N("Control BP and lipids", { k: "good", d: "Find them early; lifestyle first, medications when indicated.", s: "8" }),
            N("Activity + heart-healthy diet", { k: "good", d: "Sustainable changes, not all-or-nothing.", s: "8" }),
            N("Manage diabetes + other conditions", { k: "good", d: "Individualize to overall cardiovascular risk and comorbidities.", s: "8" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 2 */
      {
        id: "plaque", title: "How a plaque is born", icon: "🧈", lo: ["LO 2"], layout: "tree",
        ask: "Step by step: how does a healthy artery lining end up with a clot on it?",
        tree: N("Healthy endothelium", {
          i: "🛡️", k: "good", col: "green", l: ["nitric oxide (NO)", "prostacyclin (PGI₂)"], s: "15-16",
          d: "NO vasodilates and blocks platelet adhesion and inflammation. PGI₂ vasodilates and blocks platelet aggregation. Together: a relaxed, non-stick wall.",
          x: N("Where plaques start", { i: "📍", a: "weak spots", l: ["branch points", "sharp curves", "irregular shape", "sudden change in flow speed or direction"], d: "Endothelial function depends on local flow: turbulent flow at branches and curves wears the lining down.", s: "11" })
        }, [
          N("Endothelial dysfunction", { i: "💔", k: "bad", col: "red", a: "risk factors injure it", s: "15-16",
            d: "NO and PGI₂ fall: the artery can't dilate well, platelets stick more, and the leaky lining lets LDL in. It loses its normal protective mechanisms." }, [
            N("LDL enters the intima and gets stuck", { i: "🧈", col: "gold", a: "gaps let LDL in", fig: { type: "wall", step: "ldl" }, s: "9, 13",
              d: "Lipoproteins enter and are retained in the intima. More LDL in the blood means more gets trapped." }, [
              N("Trapped LDL is oxidized", { i: "🧪", a: "then", fig: { type: "wall", step: "oxidize" }, s: "13", d: "Oxidized (modified) LDL looks like damaged material to the immune system." }, [
                N("Inflammation: lining puts out VCAM-1 + ICAM-1", { i: "🔥", a: "oxidized LDL triggers", s: "13-14", d: "These are sticky 'hooks' that catch passing monocytes." }, [
                  N("Monocytes enter → become macrophages", { i: "🧲", a: "hooks catch", fig: { type: "wall", step: "mono" }, s: "14" }, [
                    N("Foam cells", { i: "🫧", a: "they eat oxidized LDL", fig: { type: "wall", step: "foam" }, s: "14", d: "Macrophages swallow modified LDL but can't digest it, so they swell into bubbly, fat-filled foam cells." }, [
                      N("FATTY STREAK", { i: "〰️", k: "key", a: "pile up into", s: "9-10, 14", d: "The earliest lesion: a focal collection of lipoproteins and foam cells in the intima." }, [
                        N("Fibrous plaque (atheroma)", {
                          i: "🧱", a: "over 10-15 years", fig: { type: "wall", step: "cap" }, s: "10, 17", vs: true,
                          d: "A fibrous cap forms over a lipid-rich necrotic core; calcium may deposit later. Plaques grow at variable rates, with active and quiet periods."
                        }, [
                          N("Stable plaque", { i: "🛡️", col: "blue", a: "ages, inflammation settles", l: ["thick cap", "small core", "little inflammation"], fig: { type: "capcore", kind: "stable" }, s: "19, 21",
                            d: "As a plaque ages, its inflammation fades and its cap gains collagen, so it becomes more stable." }, [
                            N("Narrows the lumen", { i: "🔻", a: "keeps growing", s: "21" }, [
                              N("Exertional angina · claudication", { k: "bad", a: "supply can't rise", go: "paths", s: "21" })
                            ])
                          ]),
                          N("Vulnerable plaque", { i: "💣", col: "red", a: "young + inflamed", l: ["thin cap", "big lipid core", "lots of inflammation"], fig: { type: "capcore", kind: "vulnerable" }, s: "19-20",
                            d: "Young plaques are still replacing the collagen in their caps, with active inflammation in the lipid pool below." }, [
                            N("MMPs thin the cap → it fissures", { i: "✂️", a: "inflammatory cells release", s: "18", d: "MMPs are enzymes that digest collagen, eating the cap from the inside." }, [
                              N("Platelets + fibrin → thrombus", { i: "🩸", a: "core meets blood", fig: { type: "artery", stage: "clot" }, s: "18, 34" }, [
                                N("ACS (UA, NSTEMI, STEMI) or stroke", { k: "bad", a: "sudden blockage", go: "paths", s: "20, 23" })
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
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 5 */
      {
        id: "paths", title: "Two paths: slow vs sudden", icon: "🔀", lo: ["LO 5", "LO 2"], layout: "tree",
        ask: "Why can a fit 34-year-old have a sudden MI while a 90-year-old just gets tight with chores?",
        tree: [
          N("A coronary plaque", { i: "🧈", vs: true, d: "What a plaque does depends on its age and its cap, not just its size.", s: "19-21" }, [
            N("SLOW: old plaque", { i: "🐢", col: "blue", a: "years later", l: ["thick fibrous cap", "little inflammation"], s: "19, 21", d: "Less likely to rupture." }, [
              N("Lumen narrows (stenosis)", { i: "🔻", a: "grows inward", s: "21, 32" }, [
                N("Flow OK at rest, can't rise with effort", { i: "🏃", a: "when demand rises", s: "31-32" }, [
                  N("Stable angina · claudication", { k: "bad", a: "so", s: "21" }, [
                    N("Exertion first → later at rest", { i: "📈", a: "over time", s: "42", d: "As the plaque keeps growing, less blood reaches the muscle, so symptoms need less and less effort." }, [
                      N("Zeke, 90: chest tightness slows his chores", { k: "case", i: "👴", a: "e.g.", s: "24", d: "A lifetime of high-fat food plus age: old, thick-capped plaques narrowing the lumen. Stable angina." })
                    ])
                  ])
                ])
              ])
            ]),
            N("SUDDEN: young plaque", { i: "⚡", col: "red", a: "any time", l: ["thin cap", "big lipid core", "active inflammation"], s: "19-20" }, [
              N("Too small to block flow: no warning", { i: "🤫", a: "meanwhile", s: "20, 43", d: "Young plaques are asymptomatic because they don't block much blood flow." }, [
                N("Cap ruptures or erodes", { i: "💥", a: "under stress", s: "33-34", d: "A small plaque with no real stenosis can fissure, especially when the vessel is under significant stress." }, [
                  N("Platelets + clotting cascade → thrombus", { i: "🩸", a: "core meets blood", s: "34" }, [
                    N("ACS: UA · NSTEMI · STEMI (stroke in the brain)", { k: "bad", a: "abrupt blockage", s: "20, 23, 40" }, [
                      N("Arthur, 34, runner: sudden MI", { k: "case", i: "🏃", a: "e.g.", s: "24", d: "Fast food but runs 3 miles a day: a young, thin-capped plaque too small to cause angina ruptured and clotted. Fitness didn't protect him." })
                    ])
                  ])
                ])
              ])
            ])
          ]),
          N("Remodeling: which way the wall gives", {
            i: "↔️", col: "violet", vs: true, fig: { type: "remodel" }, s: "25-27", d: "As plaque grows, the artery wall either bulges out to make room or doesn't.",
            j: N("Positive is most common, but many turn negative as the plaque grows", { k: "key", a: "over time", s: "25" })
          }, [
            N("Positive remodeling", { i: "⭕", col: "green", a: "wall bulges OUT", s: "25-26" }, [
              N("Lumen stays about normal", { a: "so" }, [
                N("Angina delayed: the plaque hides", { k: "key", a: "so", d: "Less likely to cause angina early, even with a big plaque.", s: "25-26" })
              ])
            ]),
            N("Negative remodeling", { i: "🔘", col: "orange", a: "wall doesn't dilate", s: "25, 27" }, [
              N("Plaque narrows the lumen", { a: "so" }, [
                N("Earlier angina", { k: "bad", a: "so", s: "27" })
              ])
            ])
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "supply", title: "Supply vs demand", icon: "⚖️", lo: ["LO 4"], layout: "spine",
        ask: "Why does a narrowed artery hurt only when you climb stairs, and why is a fast heart rate a double hit?",
        center: "Ischemia = O₂ supply &lt; O₂ demand", centerI: "⚖️", centerS: "28-32",
        centerFig: { type: "balance", tip: "demand", supply: ["narrowed artery", "can't open further"], demand: ["↑ heart rate", "↑ contractility"], verdict: "Demand > supply → ischemia → angina" },
        centerD: "When oxygen supply cannot meet demand, ischemia develops and may cause angina.",
        branches: [
          N("A needy muscle", { i: "⛽", col: "gold", s: "28" }, [
            N("Only <b>0.3%</b> of body weight", { k: "num", s: "28" }, [
              N("…but <b>7%</b> of resting O₂ use", { k: "num", a: "yet", s: "28", d: "High, continuous demand. The heart already pulls most of the O₂ out of its blood, so it gets more O₂ mainly by getting more FLOW (standard teaching)." })
            ]),
            N("Flow also clears waste", { l: ["CO₂", "lactic acid", "H⁺"], s: "28" })
          ]),
          N("Supply = coronary flow", { i: "🚰", col: "blue", s: "29-32" }, [
            N("Coronaries fill in DIASTOLE", { k: "key", fig: { type: "diastole" }, s: "29",
              x: N("Systole squeezes the vessels", { a: "because", d: "Contraction compresses the arteries inside the muscle and cuts flow.", s: "29" }) }),
            N("Healthy arteries dilate to raise flow", { k: "good", s: "31" }, [
              N("Flow-limiting plaque can't dilate enough", { k: "bad", a: "with CAD", s: "31-32" })
            ])
          ]),
          N("Demand = how hard it works", { i: "🏃", col: "red", s: "30" }, [
            N("Exercise", { s: "30", j: N("Narrowed artery + higher demand → ischemia → angina", { k: "key", a: "together", s: "31-32" }) }, [
              N("↑ Heart rate", { a: "raises" }, [
                N("Shorter diastole → less filling time", { k: "bad", a: "and also", s: "30", d: "Tachycardia hits twice: more demand AND less time per beat for the coronaries to fill." })
              ]),
              N("↑ Contractility", { a: "raises" }, [
                N("↑ O₂ demand", { k: "bad", s: "30" })
              ])
            ])
          ]),
          N("Other ways to starve the muscle", { i: "🚫", col: "violet", rail: true, s: "33-35" }, [
            N("Plaque rupture + thrombus (sudden)", { go: "paths", s: "33-34" }),
            N("Vasospasm: Prinzmetal angina", { d: "'Twitchy' arterioles or illicit sympathomimetic drugs (cocaine is the classic one, standard teaching) cause intense vasoconstriction.", s: "35" }),
            N("Emboli: septic vegetations from IE", { s: "35" }),
            N("Congenital lesions (uncommon)", { s: "35" })
          ]),
          N("What happens in the muscle?", { i: "💀", col: "orange", go: "muscle", d: "Acidosis, stiff and weak walls, EKG changes, and then stunning, hibernation or infarction. Next map.", s: "36-39" })
        ]
      },

      /* ------------------------------------------------------------ LO 4 */
      {
        id: "muscle", title: "Inside ischemic muscle", icon: "🫀", lo: ["LO 4"], layout: "tree",
        ask: "What happens inside the muscle when O₂ runs short, and what is left afterwards?",
        tree: N("Too little O₂ reaches a region", { i: "🫁", col: "blue", s: "36" }, [
          N("Anaerobic metabolism", { i: "⚙️", a: "cells switch to", s: "36" }, [
            N("Lactic acid → local acidosis", {
              i: "🧪", k: "bad", a: "which makes", s: "36",
              j: N("Regional wall motion abnormality", { i: "〽️", k: "key", a: "together", go: "stress-tools", s: "36", d: "The ischemic segment moves poorly, and it is visible on echocardiography (the basis of stress echo)." }, [
                N("EKG changes", { i: "📈", a: "then", s: "36", d: "In the classic ischemic cascade, wall motion changes come before EKG changes, and pain comes last (standard teaching)." }, [
                  N("What's left depends on how long and how bad", { k: "q", i: "⏱️", a: "afterwards" }, [
                    N("STUNNED", { i: "😵", col: "green", a: "brief, then reperfused", l: ["alive", "flow restored", "weak for hours to days"], s: "37",
                      d: "Blood flow is back but contraction stays impaired for a while; no irreversible injury. Like a boxer after one punch: knocked out, wakes up on his own (memory aid)." }),
                    N("HIBERNATING", { i: "🐻", col: "gold", a: "chronic or repeated low flow", l: ["alive", "turned down to adapt", "improves after revascularization"], s: "38, 65",
                      d: "Viable muscle that downregulates its contraction to match low oxygen. Like a bear in winter: wakes up when the food (flow) comes back. Dobutamine stress echo can show it is still viable." }),
                    N("INFARCTED", { i: "💀", col: "red", k: "bad", a: "prolonged + severe", l: ["necrosis", "permanent loss"], s: "39",
                      d: "Irreversible cardiomyocyte injury and necrosis: permanent loss of functioning muscle in that region." })
                  ])
                ])
              ])
            }, [
              N("Can't relax: ↓ compliance (stiff)", { i: "🧊", a: "relaxation fails", s: "36" }),
              N("Can't squeeze: ↓ contractility", { i: "🪫", a: "and", s: "36" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 6 */
      {
        id: "symptoms", title: "What ischemia feels like", icon: "💢", lo: ["LO 6"], layout: "spine",
        ask: "What makes chest pain sound cardiac, and why do women's MIs get missed?",
        center: "Symptoms of ischemia", centerI: "💢", centerS: "42-46",
        centerD: "CAD can cause gradual, intermittent symptoms or sudden acute ones. The classic picture is a man's picture; women often present differently.",
        branches: [
          N("Classic chest pain", { i: "💢", col: "red", rail: true, s: "44",
            j: N("NOT worse with a deep breath or pressing on the sternum", { k: "key", a: "the tell", s: "44" }, [
              N("Pleuritic or reproducible pain → think of another cause", { k: "q", i: "🔀", a: "if it is", d: "Pain that changes with breathing or with pressing points away from ischemia, toward the pleura or chest wall (standard teaching examples)." })
            ]) }, [
            N("Substernal", { s: "44" }),
            N("Tight, dull, achy", { s: "44" }),
            N("Radiates to left shoulder / upper arm", { s: "44" }),
            N("Lasts minutes to hours", { s: "44" })
          ]),
          N("Its partners", { i: "🤝", col: "orange", rail: true, s: "44" }, [
            N("Dyspnea, worse with exertion", { s: "44" }),
            N("Nausea", { s: "44" }),
            N("Dizziness / lightheadedness", { s: "44" }),
            N("Diaphoresis", { s: "44" })
          ]),
          N("Timing tells the mechanism", { i: "⏱️", col: "blue", vs: true, s: "42-43", go: "paths" }, [
            N("Gradual, intermittent", { col: "blue", a: "slow" }, [
              N("Plaque slowly growing", { a: "because", s: "42" }, [
                N("Exertion first → then at rest", { a: "so", s: "42" })
              ])
            ]),
            N("Abrupt, no warning", { col: "red", a: "sudden" }, [
              N("Plaque rupture + clot", { a: "because", s: "43" }, [
                N("ACS", { k: "bad", a: "so", s: "43" })
              ])
            ])
          ]),
          N("Women", { i: "♀️", col: "violet", s: "45-46" }, [
            N("They report symptoms; clinicians miss them", { k: "key", s: "45" }, [
              N("515 women with MI: most common symptoms", { a: "study", l: ["unusual fatigue", "sleep disturbance", "SOB", "indigestion", "anxiety"], s: "46" }, [
                N("<b>78%</b> had a symptom &gt; 1 month before", { k: "num", a: "warning", s: "46" }),
                N("Only <b>30%</b> had chest discomfort", { k: "num", a: "but", d: "Described as aching, tightness, pressure, sharpness, burning, fullness or tingling.", s: "46" })
              ])
            ])
          ]),
          N("Warning signs by sex", { i: "👥", col: "pink", vs: true, s: "45" }, [
            N("Women", { col: "violet", l: ["jaw pain", "shortness of breath", "chest discomfort or tightness", "backache", "extreme fatigue + nausea"], s: "45" }),
            N("Men", { col: "blue", l: ["sweating", "chest pain or tightness", "heartburn", "nausea or vomiting"], s: "45" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 7 */
      {
        id: "workup", title: "Working up Carl", icon: "🎯", lo: ["LO 7"], layout: "tree",
        ask: "Who gets tested at all, and how does pretest likelihood pick the test?",
        tree: N("Carl, 67", { i: "👴", k: "case", l: ["HTN + diabetes × 20 years", "4 months: chest tightness + SOB doing yard work", "nothing at rest", "no nausea, sweats, dizziness"], s: "47", d: "New patient establishing care. Exertional symptoms that didn't go away when the weather cooled." }, [
          N("H&amp;P + risk factors + ECG", { i: "📋", a: "step 1", s: "48-49, 51", d: "Knowing risk factors is the first step. Carl has HTN, DM, male sex and age.",
            x: N("Still ask: smoking, lipids, family history", { i: "❓", a: "missing", s: "48", d: "Plus obesity, activity, diet and alcohol: every modifiable factor on slide 6." }) }, [
            N("Only SYMPTOMATIC patients get tested", { k: "key", i: "🚦", a: "rule", s: "49", d: "Stress tests are not used to screen the general population for CAD (they used to be)." }, [
              N("Known CAD?", { k: "q", s: "51" }, [
                N("YES: known CAD", { col: "violet", a: "yes", s: "51" }, [
                  N("Optimize risk factors + antianginals", { i: "💊", s: "51" }, [
                    N("Symptoms persist?", { k: "q", s: "51", x: N("No → testing not usually needed", { k: "good", a: "no", s: "51" }) }, [
                      N("Obstructive CAD → stress test with imaging", { a: "yes", s: "51" }),
                      N("Nonobstructive only → stress imaging, CCTA, or PET/CMR flow reserve", { a: "yes", s: "51" })
                    ])
                  ])
                ]),
                N("NO: suspected stable angina", { col: "blue", a: "no", s: "50-51" }, [
                  N("Likelihood of obstructive CAD", {
                    i: "🎯", k: "key", fig: { type: "pretest" }, s: "50-51", l: ["age + sex", "symptom type", "number of risk factors"],
                    d: "2024 ESC Risk Factor-weighted Clinical Likelihood: risk factors counted are smoking, dyslipidemia, HTN, diabetes and family history of premature CAD.",
                    j: N("Carl: older man, typical exertional symptoms, 2 risk factors → likely &gt; 15%", { k: "case", a: "Carl lands", d: "So he gets a stress test with imaging or CCTA (our reasoning from the deck's rules)." })
                  }, [
                    N("&lt; 5% → no testing", { k: "good", a: "low", s: "51", d: "A positive result would probably be false." }),
                    N("5-15% → CAC, exercise ECG, or nothing", { a: "middle", s: "51" }),
                    N("&gt; 15% → stress imaging or CCTA", { k: "bad", a: "high", s: "51" })
                  ])
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 8 */
      {
        id: "pick-test", title: "Which stress test?", icon: "🧭", lo: ["LO 8"], layout: "tree",
        ask: "Walk the rules: when is it no test, a drug test, or a treadmill?",
        howto: "Every question: <b>YES goes right →</b>, <b>NO goes down ↓</b>.",
        tree: [
          N("Suspected ischemia: pick a stress test", { i: "🧭", s: "58-60" }, [
            N("Acute MI or ongoing ischemia?", { k: "q", a: "rule 1", s: "58",
              x: N("NO stress test of any kind", { k: "bad", a: "yes", col: "red", d: "You'd be adding demand to a heart that is already infarcting.", s: "58" }) }, [
              N("Can't exercise adequately?", { k: "q", a: "no → rule 2", s: "58, 60", d: "Joint disease, deconditioning or obesity, or a contraindication to exercise.",
                x: N("Pharmacologic stress + imaging", { a: "yes", col: "violet", s: "58, 60" }) }, [
                N("LBBB or ventricular pacing on the ECG?", { k: "q", a: "no → rule 3", s: "59-60", d: "These distort the ST segments, so the drug test with imaging is used.",
                  x: N("Pharmacologic stress + imaging", { a: "yes", col: "violet", s: "59-60" }) }, [
                  N("ST ↓ ≥ 1 mm, WPW, LVH with ST-T changes, or digoxin?", { k: "q", a: "no", s: "60", d: "The ECG can't show ischemia, but the patient CAN still exercise: just add imaging.",
                    x: N("Exercise stress + imaging", { a: "yes", col: "green", s: "60" }) }, [
                    N("Low CAD risk?", { k: "q", a: "no", s: "60",
                      x: N("Exercise ECG alone (no imaging)", { k: "good", a: "yes", col: "green", s: "60" }) }, [
                      N("Intermediate or high risk → exercise stress + imaging", { a: "no", col: "green", s: "60" })
                    ])
                  ])
                ])
              ])
            ])
          ]),
          N("Rule 4: before a vasodilator, check for", { i: "🚫", col: "red", rail: true, s: "59",
            j: N("If present: no vasodilator (dobutamine is the usual alternative, standard teaching)", { k: "key", a: "then" }) }, [
            N("Hypotension", { s: "59" }),
            N("High-degree AV block", { s: "59" }),
            N("Sick sinus syndrome", { s: "59" }),
            N("Active wheezing (COPD, asthma)", { d: "Vasodilators can trigger bronchospasm.", s: "59" })
          ]),
          N("Contraindications to EXERCISE testing", { i: "⛔", col: "orange", vs: true, s: "60" }, [
            N("Absolute", { k: "bad", col: "red", l: ["MI within 2 days", "ongoing unstable angina", "unstable arrhythmia", "active endocarditis", "symptomatic severe AS", "decompensated HF", "acute PE / DVT", "acute myocarditis or pericarditis", "aortic dissection", "can't test safely"], s: "60" }),
            N("Relative", { col: "orange", l: ["known left main stenosis", "moderate/severe AS, unclear symptoms", "fast atrial arrhythmias", "advanced or complete heart block", "HOCM with severe gradient", "recent stroke or TIA", "can't cooperate", "BP &gt; 200/110", "anemia, electrolytes, hyperthyroid"], s: "60" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 8 + 10 */
      {
        id: "stress-tools", title: "The stress test toolbox", icon: "🧰", lo: ["LO 8", "LO 10"], layout: "spine",
        ask: "How does each stress test create stress, what does it look for, and who should get one?",
        center: "Stress the heart, look for ischemia", centerI: "🏃", centerS: "52-69",
        centerD: "A stress test is positive if ischemia shows on the ECG OR on the images.",
        branches: [
          N("Exercise ECG (treadmill)", { i: "🏃", col: "green", s: "52-56" }, [
            N("Bruce protocol: speed + incline ↑ every 3 min", { fig: { type: "bruce", hi: 3 }, s: "52",
              d: "Needs a patient who can exercise adequately AND a resting ECG that can show ischemia." }, [
              N("Duke Treadmill Score", { k: "key", l: ["exercise minutes", "max ST deviation (mm)", "angina index 0 / 1 / 2"], fig: { type: "duke", t: 8, st: 1 }, s: "53",
                d: "Score = minutes − 5 × ST mm − 4 × angina index (formula: standard teaching; the deck lists the variables).",
                j: N("Sample: 8 min, 1 mm ST ↓, nonlimiting angina → −1 = intermediate", { k: "case", a: "slide 55-56", s: "55-56" }) }, [
                N("≥ +5 low → usually no more testing", { k: "good", a: "low", s: "53-54" }),
                N("−10 to +4 → stress imaging or CCTA", { a: "intermediate", s: "53-54" }),
                N("≤ −11 high → prompt evaluation, consider cath", { k: "bad", a: "high", s: "53-54" })
              ])
            ])
          ]),
          N("Pharmacologic stress", { i: "💊", col: "violet", vs: true, s: "57" }, [
            N("Vasodilators", { l: ["regadenoson (Lexiscan), most common", "adenosine", "dipyridamole"], s: "57" }, [
              N("Healthy arteries dilate more than the narrowed one", { a: "how" }, [
                N("Flow difference shows on imaging", { k: "key", a: "so", s: "57" })
              ])
            ]),
            N("Dobutamine", { s: "57" }, [
              N("↑ HR + contractility = ↑ demand, like exercise", { a: "how" }, [
                N("Used for stress echo", { a: "so", s: "57" })
              ])
            ])
          ]),
          N("Nuclear MPI", { i: "☢️", col: "gold", s: "61-64" }, [
            N("Tracer IV during stress → gamma camera", { s: "62" }, [
              N("Compare stress vs rest images", { fig: [{ type: "perfusion", state: "ischemia" }, { type: "perfusion", state: "scar" }], s: "62-63", vs: true,
                j: N("Must-know", { k: "key", l: ["only contraindication: pregnancy", "great for LBBB or can't exercise", "often reports the EF"], s: "61, 64" }) }, [
                N("Dark at stress, fills in at rest", { col: "red", a: "pattern 1", s: "63" }, [
                  N("REVERSIBLE = ischemia", { k: "key", s: "63" })
                ]),
                N("Dark at stress AND at rest", { col: "gray", a: "pattern 2" }, [
                  N("FIXED = scar from an old MI", { d: "Dead tissue takes up no tracer at any time (standard teaching)." })
                ])
              ])
            ])
          ]),
          N("Stress echo", { i: "🔊", col: "teal", s: "65" }, [
            N("Resting echo first", { s: "65" }, [
              N("Stress: exercise or dobutamine", { a: "then", s: "65" }, [
                N("New wall motion abnormality = ischemia", { k: "key", a: "look for", s: "65",
                  x: N("Dobutamine echo also shows viable (hibernating) muscle", { a: "bonus", go: "muscle", s: "65" }) })
              ])
            ])
          ]),
          N("✓ Who SHOULD be tested", { i: "✅", col: "green", rail: true, s: "66-67" }, [
            N("Angina-like symptoms + intermediate or high pretest probability", { s: "66" }),
            N("Recent UA/NSTEMI treated without a cath (to risk-stratify)", { s: "66" }),
            N("Known CAD with new or worse symptoms", { s: "67" }),
            N("New HFrEF or cardiomyopathy, no cath planned", { s: "67" }),
            N("Pre-op with active cardiac conditions, when indicated", { s: "67" })
          ]),
          N("✗ Who should NOT be tested", { i: "⛔", col: "red", rail: true, s: "68-69" }, [
            N("Active chest pain / ACS (UA, NSTEMI)", { s: "68" }),
            N("Revascularized, no new symptoms: &lt; 5 yr after CABG, &lt; 2 yr after PCI", { k: "key", d: "Memory aid: bypass 5, stent 2.", s: "68" }),
            N("No symptoms of CAD (rare exceptions)", { s: "68" }),
            N("Decompensated HF or uncontrolled arrhythmia", { s: "69" }),
            N("Advanced / critical aortic stenosis", { s: "69" }),
            N("PE or infective endocarditis", { s: "69" }),
            N("Thyrotoxicosis or acute illness / infection", { s: "69" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 9 + 10 */
      {
        id: "anatomy", title: "Seeing the arteries", icon: "🔍", lo: ["LO 9", "LO 10"], layout: "spine",
        ask: "CAC, CCTA or cath: what does each one see, and when do you pick a stress test instead?",
        center: "Look at the coronary anatomy", centerI: "🔍", centerS: "70-86",
        centerD: "Stress tests ask 'is there ischemia?'. These tests ask 'where is the plaque, and how narrow is it?'.",
        branches: [
          N("CAC score", { i: "🦴", col: "orange", s: "74-75" }, [
            N("NONcontrast CT counts calcium (Agatston score)", { s: "74",
              j: N("Use: statin tie-breaker in primary prevention", { k: "key", a: "so", d: "Used selectively when the need for lipid-lowering treatment is uncertain (more in CAD II).", s: "74" }) }, [
              N("Higher score = more plaque, higher risk", { l: ["0", "29", "250", "1200"], s: "74-75" }),
              N("0 ≠ no CAD", { k: "key", d: "A zero score can't exclude noncalcified (soft) plaque.", s: "74" })
            ])
          ]),
          N("CCTA", { i: "🖥️", col: "blue", s: "70-73" }, [
            N("Contrast CT: lumen + calcified AND soft plaque", { s: "70-71", d: "Unlike CAC, it sees the soft, lipid-rich plaque that can rupture.",
              j: N("Choose a STRESS TEST instead if…", { k: "key", a: "but", l: ["moderate/severe calcium (hides the lumen)", "age &gt; 65 (likely calcified)", "CKD (contrast AKI)"], s: "73" }, [
              N("Reading the result", { a: "if done", rail: true, s: "72" }, [
                N("No plaque → reassurance", { k: "good", s: "72" }),
                N("&lt; 50% → prevention meds + lifestyle", { s: "72" }),
                N("50-69% → medical therapy; CT-FFR if proximal", { s: "72" }),
                N("Obstructive → anti-ischemic therapy ± revascularization", { k: "bad", s: "72" })
              ])
            ]) }, [
              N("Best for", { k: "good", a: "use", l: ["stable chest pain, no known CAD", "intermediate likelihood", "clarifying an unclear stress test"], s: "70" }),
              N("Limits", { k: "bad", a: "but", l: ["radiation + iodinated contrast", "calcium or irregular rhythm blur it", "incidental findings"], s: "70" })
            ])
          ]),
          N("Invasive angiography (left heart cath)", { i: "🩻", col: "violet", s: "76-83" }, [
            N("Reference standard for anatomy", { k: "key", s: "76" }, [
              N("Radial or femoral access + sheath", { a: "1", s: "77" }, [
                N("Catheter to the coronary ostia under fluoroscopy", { a: "2", s: "77" }, [
                  N("Contrast injected and filmed", { a: "3", s: "77-79" }, [
                    N("Report: % stenosis + location", { k: "key", a: "read", s: "81", d: "For example: LAD 60% ostial, LCx totally occluded mid-vessel.",
                      x: N("± LV gram → EF + LV pressure", { a: "add-on", s: "82-83" }) }, [
                      N("~1 hour; hold pressure or closure device", { a: "after", s: "83" })
                    ])
                  ])
                ])
              ])
            ])
          ]),
          N("Cath risks", { i: "⚠️", col: "red", rail: true, s: "80" }, [
            N("Bleeding, hematoma, vascular injury at the access site", { s: "80" }),
            N("Contrast AKI or allergic reaction", { s: "80" }),
            N("Radiation exposure", { s: "80" }),
            N("Arrhythmia, MI, stroke (uncommon)", { s: "80" })
          ]),
          N("Fix it in the same sitting: PCI", { i: "🎈", col: "green", s: "84-86", d: "Angiography can be diagnostic AND therapeutic. PCI is also called PTCA." }, [
            N("Balloon advanced across the narrowing", { s: "84" }, [
              N("Inflated: squashes plaque, widens the vessel", { a: "then", fig: { type: "artery", stage: "balloon" }, s: "84" }, [
                N("Stent holds it open → flow restored", { k: "good", a: "then", fig: { type: "artery", stage: "stent" }, s: "84-86" })
              ])
            ])
          ])
        ]
      }
    ]
  });
}());
