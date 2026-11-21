/* Brain maps: Cardiac Testing, Stress Testing (Sillaman), 48 slides, 9 LOs. Facts are from the deck; anything else is
   marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "stress-testing",
    title: "Cardiac Testing: Stress Testing",
    short: "Stress testing",
    by: "Sillaman",
    slides: 48,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "Every stress test = a way to stress the heart + a way to look for the shortage. Which pair, for whom?",
        tree: N("Does the heart run short of blood under stress?", { i: "🫀", d: "Stress testing diagnoses CHD and assesses its risk.", s: "3, 7" }, [
          N("Who to test", { col: "gold", i: "📋", a: "first", go: "who", s: "4-6" }),
          N("How to stress", { col: "blue", i: "🏃", a: "then", vs: true, s: "9, 29-30" }, [
            N("Exercise (preferred)", { go: "exercise", s: "9-16" }),
            N("Drug: vasodilator or dobutamine", { go: "drugs", s: "29-39" })
          ]),
          N("How to look", { col: "violet", i: "🔍", a: "and", rail: true, s: "7" }, [
            N("Symptoms + EKG", { go: "exercise", s: "9-20" }),
            N("Perfusion defect: nuclear MPI", { go: "mpi", s: "21-28" }),
            N("Wall motion: stress echo", { go: "echo", s: "40-44" }),
            N("Viability: PET", { go: "viability", s: "45-47" })
          ]),
          N("Read the risk: Duke score", { col: "red", i: "🧮", a: "result", go: "duke", s: "17-19" }),
          N("Pick the test", { col: "green", i: "🧭", a: "choose", go: "choose", s: "20, 48" })
        ])
      },

      /* ------------------------------------------------------------ LO 1 */
      {
        id: "who", title: "Who gets a stress test", icon: "📋", lo: ["LO 1"], layout: "spine",
        ask: "Name the indications, and the one group you usually should NOT test.",
        center: "Stress test indications", centerI: "📋", centerS: "3-6",
        branches: [
          N("Chest pain", { i: "😣", col: "red", rail: true, s: "4" }, [
            N("Angina symptoms + intermediate/high pre-test likelihood", { k: "key", s: "4" }),
            N("Acute chest pain after ACS is ruled out", { s: "4" })
          ]),
          N("Known disease", { i: "🫀", col: "orange", rail: true, s: "4-5" }, [
            N("Recent ACS treated without cath: within 3 months if stable", { k: "num", s: "4" }),
            N("Known CHD with new or worse symptoms", { s: "4" }),
            N("Valve disease (dobutamine only)", { s: "5" }),
            N("New HF or cardiomyopathy", { s: "5" }),
            N("New arrhythmias", { s: "5" })
          ]),
          N("Before surgery", { i: "🔪", col: "blue", s: "5" }, [
            N("Elective non-cardiac surgery in a cardiac patient", { s: "5" })
          ]),
          N("NOT for screening", { i: "🚫", col: "gray", rail: true, s: "6" }, [
            N("Asymptomatic: generally not indicated", { k: "bad", s: "6" }),
            N("Rare exceptions: very high risk; pilots", { s: "6" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 2 */
      {
        id: "exercise", title: "The exercise test, start to stop", icon: "🏃", lo: ["LO 2"], layout: "tree",
        ask: "Can they go on the treadmill, how long do they walk, when do you stop, and what counts as positive?",
        tree: N("Exercise EKG test", { i: "🏃", d: "Preferred mode; duration = functional capacity; watch symptoms, HR, BP, EKG, rhythm.", s: "9" }, [
          N("Any contraindication?", { k: "q", a: "first check", s: "11" }, [
            N("Absolute: don't test", { col: "red", rail: true, a: "yes", s: "11" }, [
              N("MI within 2 days; unstable angina", { k: "bad", s: "11" }),
              N("Symptomatic severe AS; uncontrolled HF or arrhythmia", { s: "11" }),
              N("Acute PE, myocarditis/pericarditis, endocarditis, aortic dissection", { s: "11" })
            ]),
            N("Relative: weigh it", { col: "orange", rail: true, a: "maybe", s: "11" }, [
              N("Left main stenosis; moderate valve stenosis", { s: "11" }),
              N("Electrolytes; BP ≥ 200/110", { k: "num", s: "11" }),
              N("Uncontrolled rate; HCM; high-degree AV block", { s: "11" })
            ])
          ]),
          N("Bruce protocol: 6-12 min, symptom limited", { a: "walk", k: "key", d: "Stages change every 3 min; stage 1 = 1.7 mph at 10% (4.5 METs); 1 MET = 3.5 mL O₂/kg/min. Reach > 85% PMHR.", s: "12-14" }, [
            N("Stop when…", { k: "q", a: "watch", rail: true, s: "15" }, [
              N("Patient: wants to stop, chest pain, severe dyspnea, fatigue", { s: "15" }),
              N("Provider: looks unwell, SBP falls below rest, SBP > 250, DBP > 120", { k: "bad", s: "15" }),
              N("EKG: marked ST ↓, new AV block, VT/VF, rising ectopy, SVT", { k: "bad", s: "15" })
            ]),
            N("Read the ST segments", { a: "result", rail: true, s: "16" }, [
              N("None → negative", { k: "good", s: "16" }),
              N("Upsloping > 1 mm → equivocal", { s: "16" }),
              N("Horizontal or downsloping > 1 mm → positive", { k: "bad", s: "16" })
            ])
          ]),
          N("Accuracy limits", { a: "know", rail: true, s: "10" }, [
            N("Sens 68%, spec 77%; only 50% for 1-vessel", { k: "num", s: "10" }),
            N("Beta blockers → false negatives", { s: "10" }),
            N("Abnormal baseline EKG (dig, LVH, WPW) → non-diagnostic", { s: "10" }),
            N("Best use: EXCLUDE CAD in low pre-test probability", { k: "key", s: "10" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 3 */
      {
        id: "duke", title: "High-risk test and the Duke score", icon: "🧮", lo: ["LO 3"], layout: "tree",
        ask: "Calculate the Duke score, place it in a risk group, and name the other high-risk features.",
        tree: [
          N("Duke = minutes − 5 × ST mm − 4 × angina", { i: "🧮", k: "key", d: "Angina index: 0 none, 1 non-limiting, 2 stopped the test.", s: "18" }, [
            N("≥ +5", { col: "green", a: "low", k: "good", s: "18" }),
            N("−10 to +4", { col: "orange", a: "moderate", d: "Example: 8 − 5(1) − 4(1) = −1.", s: "18-19" }),
            N("≤ −11", { col: "red", a: "high", k: "bad", s: "18" })
          ]),
          N("Other high-risk features", { i: "⚠️", rail: true, s: "17" }, [
            N("< 5 METs", { k: "num", s: "17" }),
            N("ST depression ≥ 2 mm", { k: "num", s: "17" }),
            N("Peak SBP < 130 or SBP falling below rest", { s: "17" }),
            N("Can't reach target HR", { s: "17" }),
            N("Exercise-induced angina", { s: "17" }),
            N("Frequent ventricular ectopy at low workload", { s: "17" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 7 */
      {
        id: "mpi", title: "Myocardial perfusion imaging", icon: "☢️", lo: ["LO 7"], layout: "tree",
        ask: "How does a tracer picture show ischemia vs scar, and when is MPI better or worse than the treadmill?",
        tree: N("Tracer (thallium or technetium) + SPECT or PET camera", { i: "☢️", d: "Compares blood flow to the muscle at rest and under stress.", s: "22-23, 25-26" }, [
          N("Compare stress and rest", { a: "read", vs: true, s: "24" }, [
            N("Normal at rest, ↓ at stress", { col: "orange", d: "Reversible defect.", s: "24" }, [
              N("ISCHEMIA", { k: "bad", s: "24" })
            ]),
            N("↓ at rest AND stress", { col: "gray", d: "Fixed defect.", s: "24" }, [
              N("Prior MI / SCAR", { k: "bad", s: "24" })
            ])
          ]),
          N("Strengths", { col: "green", a: "pros", rail: true, s: "27" }, [
            N("Sens 85-90%, spec ~90%; 3-vessel 95-100%", { k: "num", s: "27" }),
            N("+25% sensitivity for 1-vessel vs treadmill", { s: "27" }),
            N("Works with LVH, digoxin, IVCD", { k: "key", s: "27" }),
            N("Gated: perfusion + function; viability too", { s: "27" })
          ]),
          N("Limits", { col: "red", a: "cons", rail: true, s: "28" }, [
            N("Thallium false positives: women, obese", { s: "28" }),
            N("Long (technetium), costly, radiation", { s: "28" }),
            N("Poor images in obesity", { s: "28" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 4-6 */
      {
        id: "drugs", title: "Drug stress: vasodilator vs dobutamine", icon: "💉", lo: ["LO 4", "LO 5", "LO 6"], layout: "tree",
        ask: "Can't exercise? Pick the drug, then check its contraindications and expected side effects.",
        tree: N("Can't exercise or can't use a treadmill EKG", { i: "💉", s: "29" }, [
          N("Vasodilators", { col: "blue", vs: true, a: "dilate", d: "Dipyridamole, adenosine, regadenoson (Lexiscan); preferred for nuclear MPI. For LBBB, pacemaker, digoxin.", s: "30-31, 39" }, [
            N("Avoid if…", { rail: true, a: "contra", s: "32, 34" }, [
              N("Active wheezing: asthma/COPD", { k: "bad", s: "32" }),
              N("SBP < 90; HR < 40", { k: "num", s: "32" }),
              N("Caffeine/xanthines < 12 h; aminophylline < 24 h; dipyridamole < 48 h", { k: "key", s: "32" }),
              N("High-degree AV block / sick sinus (regadenoson: without a pacer)", { s: "32, 34" })
            ]),
            N("Side effects", { rail: true, a: "expect", s: "33, 35" }, [
              N("Adenosine/dipyridamole: chest pain 20%", { s: "33" }),
              N("Regadenoson: dyspnea 28%, headache 26%", { s: "35" })
            ])
          ]),
          N("Dobutamine", { col: "red", vs: true, a: "push", d: "Beta-1 agonist: ↑ rate and contractility; preferred for stress echo; for vasodilator contraindications and valve disease.", s: "31, 36" }, [
            N("Avoid if…", { rail: true, a: "contra", s: "37" }, [
              N("Unstable angina; recent MI", { k: "bad", s: "37" }),
              N("Hypo- or hypertension; tachyarrhythmias", { s: "37" }),
              N("Symptomatic severe AS; HCM", { s: "37" }),
              N("Aortic dissection or large aneurysm", { s: "37" })
            ]),
            N("Side effects (~75%)", { rail: true, a: "expect", s: "38" }, [
              N("ST depression 33%, chest pain 31%, palpitations 29%", { s: "38" }),
              N("Arrhythmias 8-10%", { k: "bad", s: "38" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 4 echo */
      {
        id: "echo", title: "Stress echo vs nuclear", icon: "🔊", lo: ["LO 4", "LO 7"], layout: "tree",
        ask: "When does the echo win, and when does the nuclear camera win?",
        tree: N("Imaging stress test", { i: "🔍", s: "27-28, 41-44" }, [
          N("Stress echo", { col: "teal", vs: true, d: "Ischemia = new or worse wall motion abnormality.", s: "41" }, [
            N("Wins", { rail: true, a: "pros", s: "42" }, [
              N("No radiation, quick, cheaper", { k: "good", s: "42" }),
              N("Shows valves and structure", { s: "42" }),
              N("Sens 84%, spec 86%", { k: "num", s: "42" })
            ]),
            N("Loses", { rail: true, a: "cons", s: "42-44" }, [
              N("Operator dependent; not quantitative", { s: "43" }),
              N("COPD windows", { s: "43" }),
              N("HR < 85% → sens 42%; women 10% lower", { k: "num", s: "42" }),
              N("Resting WMAs or low EF → less accurate", { k: "bad", s: "44" })
            ])
          ]),
          N("Nuclear MPI", { col: "violet", vs: true, go: "mpi", d: "Ischemia = perfusion defect.", s: "23-24" }, [
            N("Wins", { rail: true, a: "pros", s: "27" }, [
              N("Quantitative; any patient", { s: "27" }),
              N("Fine with resting WMAs, LBBB (vasodilator)", { s: "27, 48" }),
              N("Viability", { s: "27" })
            ]),
            N("Loses", { rail: true, a: "cons", s: "28" }, [
              N("Radiation, cost, time", { s: "28" }),
              N("Obesity, women: false positives", { s: "28" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 8 */
      {
        id: "viability", title: "PET viability: will the muscle recover?", icon: "🌱", lo: ["LO 8"], layout: "tree",
        ask: "A wall looks dead on MPI and echo. How does PET tell sleeping muscle from scar?",
        tree: N("Scar on MPI + wall motion abnormality on echo", { i: "❓", k: "case", d: "Revascularize? Only if the muscle is alive.", s: "45" }, [
          N("PET: perfusion + metabolism (glucose uptake)", { a: "test", k: "key", d: "Can separate normal, stunned, hibernating and necrotic muscle; gold standard noninvasive test for hibernation.", s: "46-47" }, [
            N("No flow + metabolism present", { col: "green", a: "mismatch", s: "47" }, [
              N("Viable, hibernating → bypass", { k: "good", s: "47" })
            ]),
            N("No flow + no metabolism", { col: "red", a: "match", s: "47" }, [
              N("Permanent damage → bypass won't help (transplant)", { k: "bad", s: "47" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 9 */
      {
        id: "choose", title: "Choosing the right stress test", icon: "🧭", lo: ["LO 5", "LO 9"], layout: "tree",
        ask: "Walk the algorithm: can they exercise, is the EKG readable, is there LBBB, and do the walls already move badly?",
        tree: N("Can the patient exercise to a good workload?", { i: "🧭", k: "q", s: "48" }, [
          N("Any of these?", { a: "yes", k: "q", d: "LBBB, V-pacing, WPW, ≥ 1 mm resting ST-T, LVH, digoxin, prior revascularization, need to localize, need viability.", s: "20, 48" }, [
            N("Exercise ECG", { a: "no", k: "good", col: "green", s: "48" }),
            N("LBBB or V-pacing?", { a: "yes → imaging", k: "q", s: "48" }, [
              N("Vasodilator SPECT/PET", { a: "yes", col: "blue", s: "48" }),
              N("Extensive resting WMAs?", { a: "no", k: "q", s: "48" }, [
                N("Exercise nuclear (PET for viability)", { a: "yes", col: "violet", s: "48" }),
                N("Exercise echo or nuclear", { a: "no", col: "teal", s: "48" })
              ])
            ])
          ]),
          N("LBBB, V-pacing or AF?", { a: "can't exercise", k: "q", s: "48" }, [
            N("Vasodilator SPECT/PET", { a: "yes", col: "blue", s: "48" }),
            N("Extensive resting WMAs?", { a: "no", k: "q", s: "48" }, [
              N("Vasodilator SPECT/PET (dobutamine if contraindicated; PET for viability)", { a: "yes", col: "violet", s: "48" }),
              N("Vasodilator SPECT/PET or dobutamine echo", { a: "no", col: "teal", s: "48" })
            ])
          ])
        ])
      }
    ]
  });
})();
