/* Brain maps: Heart Failure (Brandell), 203 slides. Facts are from the deck; anything else is
   marked "(standard teaching)". Map ids and box positions are progress keys: add boxes at the END of a kids list. */
(function () {
  "use strict";
  var N = BrainMaps.N;

  BrainMaps.lecture("cardio-part-3", {
    id: "heart-failure",
    title: "Heart Failure",
    short: "Heart failure",
    by: "Brandell",
    slides: 203,
    maps: [

      /* ------------------------------------------------------------ the whole lecture */
      {
        id: "big", title: "The whole lecture on one page", icon: "🧠", lo: ["All LOs"], layout: "tree",
        ask: "Follow heart failure from a weak or stiff pump to the ED visit: what goes wrong, how you name it, how you treat it.",
        tree: N("The heart cannot pump enough for the body's needs", { i: "🫀", d: "Heart failure is a syndrome, not one disease: the pump falls behind and the body tries to make up for it.", s: "3-9" }, [
          N("Output falls", { col: "blue", i: "📉", a: "CO = HR x SV", go: "physiology", s: "10-18" }, [
            N("The body compensates, then the fixes hurt", { col: "violet", i: "⚙️", go: "compensations", s: "19-34" }, [
              N("Weak squeeze or stiff filling?", { col: "orange", i: "🔀", go: "sysdia", s: "35-46" }, [
                N("Name it and stage it", { col: "green", i: "🏷️", go: "classify", s: "76-81" }, [
                  N("Treat by stage", { col: "teal", i: "💊", go: "stages", s: "145-165" }, [
                    N("When it decompensates: the ED", { col: "red", i: "🚑", go: "acute", s: "166-203" })
                  ])
                ])
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 4: physiology */
      {
        id: "physiology", title: "Cardiac output: the pieces", icon: "📈", lo: ["LO 4"], layout: "tree",
        ask: "Cardiac output is HR x SV. What sets each one, and what is cardiac reserve?",
        tree: N("Cardiac output = HR x SV", { i: "📈", k: "key", d: "The amount of blood the heart ejects each minute, adjusted to the body's needs: down when sleeping, up when exercising.", s: "14, 17" }, [
          N("Heart rate", { col: "blue", i: "⏱️", rail: true, s: "17" }, [
            N("Sympathetic system raises HR", { s: "17" }),
            N("Parasympathetic system lowers HR", { s: "17" })
          ]),
          N("Stroke volume", { col: "violet", i: "🫀", rail: true, s: "15-18" }, [
            N("Preload: end-diastolic pressure from the EDV", { k: "key", s: "15" }),
            N("Frank-Starling: more filling → bigger stroke volume", { s: "16" }),
            N("Afterload: force needed to eject; set by SVR and wall tension", { s: "18" }),
            N("Contractility = inotropy", { s: "18" })
          ]),
          N("Cardiac reserve: the ability to raise output when needed", { col: "green", i: "🔋", s: "14", d: "Compensatory mechanisms keep reserve up, so early loss of function may go unnoticed." })
        ])
      },

      /* ------------------------------------------------------------ LO 5: compensations */
      {
        id: "compensations", title: "Five compensations and their downsides", icon: "⚙️", lo: ["LO 5"], layout: "spine",
        ask: "Name the five compensations, what each one raises, and how each one makes heart failure worse.",
        center: "Low cardiac output", centerI: "⚙️", centerS: "19-21",
        branches: [
          N("1. Sympathetic system", { i: "⚡", col: "red", rail: true, s: "22-23" }, [
            N("Most immediate compensation", { k: "key", s: "23" }),
            N("NE + epi → ↑ contractility and HR", { k: "good", s: "22" }),
            N("Tachycardia → ↑ O2 demand → ischemia", { k: "bad", s: "23" }),
            N("Vasoconstriction → ↑ afterload, ↓ kidney flow", { k: "bad", s: "23" })
          ]),
          N("2. RAAS", { i: "🫘", col: "orange", rail: true, s: "24-27" }, [
            N("Kidney afferent arterioles sense low flow", { s: "24" }),
            N("Angiotensin II + aldosterone → ↑ blood volume", { k: "good", s: "24" }),
            N("Salt + water retention → stretch → ↑ O2 use", { k: "bad", s: "26" }),
            N("Vasoconstriction → ↑ afterload", { k: "bad", s: "26" })
          ]),
          N("3. ADH (vasopressin)", { i: "💧", col: "blue", rail: true, s: "28-30" }, [
            N("Released by high NE and angiotensin II", { s: "28" }),
            N("V1 (myocytes, vessels): contraction + vasoconstriction", { s: "29" }),
            N("V2 (collecting ducts): free water reabsorption", { s: "29" }),
            N("Hypertrophy; congestion + hyponatremia", { k: "bad", s: "30" })
          ]),
          N("4. Natriuretic peptides", { i: "🛡️", col: "green", rail: true, s: "31-33" }, [
            N("ANP from atria, BNP from ventricles", { k: "key", s: "31" }),
            N("Stretch → natriuresis, diuresis, vasodilation", { k: "good", s: "32" }),
            N("Fights the other compensations, but RAAS + SNS win in the end", { s: "32-33" }),
            N("HF meds lower BNP: chronic HF can be normal", { k: "q", s: "33" })
          ]),
          N("5. Remodeling", { i: "🧱", col: "violet", rail: true, s: "34" }, [
            N("Altered structure → arrhythmias, ischemia over time", { k: "bad", s: "34" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 6: systolic vs diastolic */
      {
        id: "sysdia", title: "Systolic vs diastolic dysfunction", icon: "🔀", lo: ["LO 6"], layout: "tree",
        ask: "What happens to EF in each, what causes each, and which heart sound goes with each?",
        tree: N("Ejection fraction (normal 55-70%)", { i: "📏", k: "num", d: "EF is the percent of blood pumped out of the ventricle with each contraction.", s: "37" }, [
          N("Two kinds of dysfunction", { vs: true, s: "37" }, [
            N("Systolic: weak squeeze", { col: "blue", i: "💪", d: "Contractility impaired: low EF and low CO.", s: "37, 39" }, [
              N("Preload backs up → atria, veins, lungs", { s: "41-42" }, [
                N("Pulmonary edema (rales) + peripheral edema", { k: "bad", s: "42" })
              ]),
              N("Causes", { rail: true, s: "43" }, [
                N("Weak muscle: ischemia, dilated CM, myocarditis", { s: "43" }),
                N("Volume overload: anemia", { s: "43" }),
                N("Pressure overload: HTN, valve stenosis", { s: "43" })
              ])
            ]),
            N("Diastolic: stiff filling", { col: "orange", i: "🧱", d: "Impaired relaxation: less filling (EDV), lower CO, but normal EF.", s: "37, 40, 44" }, [
              N("Fast HR shortens filling time", { k: "key", s: "45" }),
              N("Causes", { rail: true, s: "46" }, [
                N("Can't expand: effusion, constrictive pericarditis", { s: "46" }),
                N("Thick walls: hypertrophy, HCM", { s: "46" }),
                N("Slow relaxation: aging, HTN, ischemia", { s: "46" })
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 7: right vs left */
      {
        id: "rightleft", title: "Right vs left heart failure", icon: "↔️", lo: ["LO 7"], layout: "tree",
        ask: "Where does the blood back up in each side, and what is the most common cause of each?",
        tree: N("Which ventricle is failing?", { i: "🫀", d: "In the end it is usually both: left failure backs up into the lungs and then strains the right side.", s: "47-48" }, [
          N("Right vs left", { vs: true, s: "49-54" }, [
            N("Right: backs up into the body", { col: "blue", i: "🦵", s: "49-51" }, [
              N("Symptoms", { rail: true, s: "50" }, [
                N("JVD (the big one)", { k: "key", s: "50" }),
                N("Dependent edema, weight gain, anasarca", { s: "50" }),
                N("Hepatomegaly, RUQ pain, ascites, splenomegaly", { s: "50" }),
                N("GI congestion: anorexia, poor absorption", { s: "50" })
              ]),
              N("MCC: left ventricular failure", { k: "key", s: "51" }, [
                N("Also cor pulmonale (pulmonary HTN), RV infarct, tricuspid/pulmonic valves, congenital", { s: "51" })
              ])
            ]),
            N("Left: backs up into the lungs", { col: "red", i: "🫁", s: "52-54" }, [
              N("Symptoms", { rail: true, s: "53" }, [
                N("Pulmonary edema, rales, frothy cough", { k: "key", s: "53" }),
                N("Orthopnea, PND", { s: "53" }),
                N("Fatigue, cyanosis, confusion", { s: "53" }),
                N("Narrow pulse pressure (normal 40 mmHg)", { k: "num", s: "53" })
              ]),
              N("MCC: HTN and acute MI", { k: "key", s: "54" }, [
                N("Also aortic or mitral stenosis/regurgitation", { s: "54" })
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 8: HFrEF vs HFpEF */
      {
        id: "hfref", title: "HFrEF vs HFpEF", icon: "⚖️", lo: ["LO 8"], layout: "tree",
        ask: "How does each remodel, which extra heart sound goes with each, and what is chronotropic incompetence?",
        tree: N("Heart failure by ejection fraction", { i: "⚖️", s: "55" }, [
          N("Reduced vs preserved", { vs: true, s: "56-59" }, [
            N("HFrEF", { col: "blue", i: "🎈", d: "Systolic dysfunction bad enough to lower the EF on echo.", s: "56" }, [
              N("Eccentric (elongated) remodeling → arrhythmias", { s: "56" }),
              N("S3 on exam", { k: "key", s: "73" }),
              N("proBNP higher than in HFpEF", { s: "88" })
            ]),
            N("HFpEF", { col: "orange", i: "🧱", d: "Better name than 'diastolic HF', since some have focal systolic dysfunction with a normal EF.", s: "57-58" }, [
              N("Concentric (thick) remodeling", { s: "58" }),
              N("S4 on exam", { k: "key", s: "74" }),
              N("Chronotropic incompetence: can't raise HR → exercise intolerance", { k: "key", s: "59, 63" })
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 7-8: symptoms and exam */
      {
        id: "exam", title: "Symptoms and exam findings", icon: "🩺", lo: ["LO 7", "LO 8"], layout: "spine",
        ask: "List the symptoms you ask about and the findings you look for in a heart failure patient.",
        center: "Heart failure patient", centerI: "🩺", centerS: "60-75",
        branches: [
          N("What they tell you", { i: "🗣️", col: "blue", rail: true, s: "61-66" }, [
            N("Dyspnea and fatigue", { s: "61-62" }),
            N("PND: wakes up gasping", { k: "key", s: "64" }),
            N("Orthopnea: more pillows", { s: "65" }),
            N("Thirst, nocturia, oliguria, confusion", { s: "66" })
          ]),
          N("Lungs", { i: "🫁", col: "violet", rail: true, s: "67-68" }, [
            N("Rales, tachypnea", { s: "67" }),
            N("Pleural effusions", { s: "68" })
          ]),
          N("Veins and skin", { i: "🦵", col: "green", rail: true, s: "69-71" }, [
            N("JVD, hepatojugular reflux", { k: "key", s: "69" }),
            N("Edema → anasarca", { s: "70" }),
            N("Stasis dermatitis", { s: "71" })
          ]),
          N("Heart", { i: "🫀", col: "red", rail: true, s: "72-74" }, [
            N("Laterally displaced PMI: cardiomegaly (more in HFrEF)", { s: "72" }),
            N("S3 = HFrEF", { k: "key", s: "73" }),
            N("S4 = HFpEF", { k: "key", s: "74" })
          ]),
          N("Late: cardiac cachexia", { i: "🦴", col: "orange", s: "75" })
        ]
      },

      /* ------------------------------------------------------------ LO 9: classification */
      {
        id: "classify", title: "Framingham, NYHA and AHA stages", icon: "🏷️", lo: ["LO 9"], layout: "tree",
        ask: "Which system makes the diagnosis, which grades symptoms, and which stages structure?",
        tree: N("No single test makes the diagnosis", { i: "🏷️", s: "77-78" }, [
          N("Framingham: is it HF?", { col: "blue", i: "✅", s: "79" }, [
            N("Need 2 major, or 1 major + 2 minor", { k: "key", s: "79" }),
            N("Major", { rail: true, s: "79" }, [
              N("PND/orthopnea, ↑ JVP, hepatojugular reflux", { s: "79" }),
              N("Rales, S3, pulmonary edema or growing heart on CXR", { s: "79" }),
              N("Weight loss > 10 lb in 5 days on diuretics", { k: "num", s: "79" })
            ]),
            N("Minor", { rail: true, s: "79" }, [
              N("DOE, night cough, HR > 120", { s: "79" }),
              N("Hepatomegaly, bilateral leg edema", { s: "79" }),
              N("Pleural effusion, vascular engorgement on CXR", { s: "79" })
            ])
          ]),
          N("NYHA: how bad are symptoms now?", { col: "violet", i: "🚶", rail: true, s: "80" }, [
            N("I: no symptoms", { s: "80" }),
            N("II: dyspnea with exertion", { s: "80" }),
            N("III: dyspnea with ordinary activity, fine at rest", { s: "80" }),
            N("IV: symptoms at rest", { s: "80" })
          ]),
          N("AHA stages: where on the road?", { col: "green", i: "🛣️", rail: true, s: "81" }, [
            N("A: at risk, no structural disease", { s: "81" }),
            N("B: structural disease, no symptoms", { s: "81" }),
            N("C: structural disease + symptoms", { s: "81" }),
            N("D: refractory HF", { s: "81" })
          ])
        ])
      },

      /* ------------------------------------------------------------ LO 10: workup */
      {
        id: "workup", title: "The workup", icon: "🔬", lo: ["LO 10"], layout: "spine",
        ask: "Which tests come first, what does each add, and when do you go further?",
        center: "Suspected heart failure", centerI: "🔬", centerS: "82-96",
        branches: [
          N("First tests", { i: "1️⃣", col: "blue", rail: true, s: "82-85" }, [
            N("EKG", { s: "82" }),
            N("Chest X-ray: cardiomegaly, edema", { s: "83-84" }),
            N("Echo: EF and structure", { k: "key", s: "85" })
          ]),
          N("Labs", { i: "🧪", col: "violet", rail: true, s: "86-89" }, [
            N("CBC, BMP/CMP, LFTs, glucose, lipids", { s: "86-87" }),
            N("proBNP > 450 (young) or > 900 (over 50)", { k: "num", s: "88" }),
            N("Troponin", { s: "89" })
          ]),
          N("Going further", { i: "2️⃣", col: "green", rail: true, s: "90-96" }, [
            N("CPET: peak VO2 < 50% predicted → transplant or LVAD talk", { k: "key", s: "91" }),
            N("Stress echo, cath (ischemia?)", { s: "92-93" }),
            N("Cardiac MRI", { s: "94" }),
            N("Endomyocardial biopsy, genetic testing", { s: "95-96" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 13: drugs */
      {
        id: "drugs", title: "The drugs and where they act", icon: "💊", lo: ["LO 13"], layout: "spine",
        ask: "For each drug class: when do you use it, and what is the one trap?",
        center: "Heart failure drugs", centerI: "💊", centerS: "105-140",
        branches: [
          N("Block RAAS", { i: "🛑", col: "blue", rail: true, s: "106-113" }, [
            N("ACEi: 1st line, every stage", { k: "key", s: "107" }),
            N("ARB: if ACEi cough", { s: "110" }),
            N("BiDil: Black patients stage C-D, or no ACEi/ARB", { s: "112" })
          ]),
          N("Beta blockers", { i: "🐢", col: "violet", rail: true, s: "114-117" }, [
            N("Stable HF, stages B-C: ↓ mortality, ↑ EF", { k: "good", s: "115" }),
            N("Start low, titrate up slowly", { s: "115" })
          ]),
          N("Diuretics", { i: "💧", col: "green", rail: true, s: "118-126" }, [
            N("Loop (thick ascending limb): every stage, decompensation", { k: "key", s: "120" }),
            N("Thiazide (DCT): useless if CrCl < 30", { k: "num", s: "122" }),
            N("Spironolactone/eplerenone: watch potassium", { s: "124-125" })
          ]),
          N("ARNI: Entresto", { i: "🔒", col: "orange", rail: true, s: "127-129" }, [
            N("3-day washout off ACEi first", { k: "key", s: "129" }),
            N("No if angioedema history or GFR < 30", { k: "bad", s: "129" })
          ]),
          N("Add-ons", { i: "➕", col: "red", rail: true, s: "130-137" }, [
            N("Digoxin: fewer symptoms, no mortality benefit", { s: "131-132" }),
            N("Ivabradine: only if HR > 75", { k: "num", s: "135" }),
            N("SGLT2i (dapagliflozin): ↓ mortality in HFrEF", { s: "137" })
          ])
        ]
      },

      /* ------------------------------------------------------------ LO 11-13: stage treatment */
      {
        id: "stages", title: "Treatment stage by stage", icon: "🪜", lo: ["LO 11", "LO 12", "LO 13"], layout: "tree",
        ask: "What do you add at each AHA stage, and how is stage C different for HFpEF and HFrEF?",
        tree: N("Stage A: at risk", { i: "🅰️", col: "green", d: "Heart-healthy lifestyle: quit smoking, lose weight, exercise, no alcohol or drugs, treat HTN (ACEi/ARB) and lipids (statin).", s: "145-146" }, [
          N("Stage B: structure changed, no symptoms", { i: "🅱️", col: "blue", d: "Stage A plus ACEi (ARB if cough), then a beta blocker; cardiology referral; ICD if indicated.", s: "147-149" }, [
            N("Stage C: symptoms", { i: "©️", col: "orange", s: "150" }, [
              N("Preserved vs reduced EF", { vs: true, s: "151-158" }, [
                N("HFpEF", { rail: true, s: "151-156" }, [
                  N("Diuretics for symptoms; potassium-sparing preferred", { k: "key", s: "151-153" }),
                  N("ACEi/ARB/ARNI/BB: no mortality benefit", { s: "151" }),
                  N("Control BP, avoid tachycardia", { s: "154-155" }),
                  N("Keep atrial conduction: cardiovert/ablate AF", { s: "156" })
                ]),
                N("HFrEF", { rail: true, s: "157-158" }, [
                  N("Diuretic + RAAS inhibitor + beta blocker", { k: "key", s: "158" }),
                  N("Add aldosterone blocker, ivabradine, dapagliflozin, BiDil, digoxin", { s: "158" }),
                  N("Rehab, ICD, revascularization, CRT", { s: "158" })
                ])
              ]),
              N("Stage D: refractory", { i: "🅳", col: "red", s: "160-165" }, [
                N("All of A-C except the beta blocker, ± digoxin (HFrEF only)", { k: "key", s: "161" }),
                N("Devices: ICD, IABP/LVAD, ultrafiltration", { s: "162-163" }),
                N("Transplant: younger, life expectancy < 6 months", { k: "num", s: "164-165" }),
                N("Hospice: consider ICD deactivation", { s: "164" })
              ])
            ])
          ])
        ])
      },

      /* ------------------------------------------------------------ acute: presentation */
      {
        id: "acute", title: "Decompensated HF: why they come in", icon: "🚑", lo: ["Decompensated HF"], layout: "tree",
        ask: "What tips a stable patient into acute HF, and how do you confirm it in the ED?",
        tree: N("Acute decompensated heart failure", { i: "🚑", s: "166" }, [
          N("Triggers", { col: "orange", i: "🎯", rail: true, s: "167" }, [
            N("Noncompliance: uncontrolled HTN, missed meds, salt/fluid", { k: "key", s: "167" }),
            N("Renal failure, missed dialysis", { s: "167" }),
            N("Cocaine, meth, alcohol", { s: "167" }),
            N("Iatrogenic: overhydration, new CCB/BB, NSAIDs/steroids, amiodarone", { s: "167" })
          ]),
          N("Presentation", { col: "blue", i: "😮‍💨", s: "169-174" }, [
            N("Dyspnea, distress, edema, extra sounds", { s: "169-172" }),
            N("Acute on chronic, or new onset?", { k: "q", s: "174" })
          ]),
          N("No single ED test", { col: "violet", i: "🔬", rail: true, s: "175-180" }, [
            N("CXR: congestion, cardiomegaly, Kerley lines; 20% look normal", { s: "176-178" }),
            N("EKG: ischemia, MI, arrhythmia; AF links most to HF", { s: "179" }),
            N("Labs incl. BNP and troponin", { s: "180" })
          ]),
          N("Treat", { col: "red", i: "💉", go: "acutetx", s: "181-194" })
        ])
      },

      /* ------------------------------------------------------------ acute: treatment */
      {
        id: "acutetx", title: "Decompensated HF: treatment and disposition", icon: "💉", lo: ["Decompensated HF"], layout: "tree",
        ask: "Walk the ED pathway: airway, vasodilator, diuretic, what to avoid, and where the patient goes.",
        tree: N("Breathing first", { i: "🫁", col: "blue", s: "181" }, [
          N("NIV (CPAP/BiPAP)", { d: "Raises O2 and intrathoracic pressure, lowering preload; reduces intubation.", s: "182-183" }, [
            N("Not if SBP < 90, altered mental status, dementia", { k: "bad", s: "184" }),
            N("Intubate: SpO2 < 80%, overt distress, AMS, failed NIV", { k: "num", s: "185" })
          ]),
          N("Then nitroglycerin", { i: "💥", col: "violet", d: "Venous then arterial dilator: lowers preload, then afterload; give it before the diuretic.", s: "186-187" }, [
            N("Not with RV infarct, AS, HCM, hypotension, dehydration", { k: "bad", s: "189" }),
            N("Not within 24 h of a PDE5 inhibitor (tadalafil 48 h)", { k: "num", s: "189" }),
            N("Then IV loop diuretic", { i: "💧", col: "green", s: "190-192" }, [
              N("IV because gut edema blocks absorption", { s: "191" }),
              N("Naive: 40 mg IV; on it: 1-2.5x the home dose", { k: "num", s: "192" }),
              N("Avoid: beta blocker, CCB, digoxin", { k: "bad", s: "193" }),
              N("Disposition", { i: "🏥", col: "orange", s: "195-202" }, [
                N("High risk: hypotension, low Na, high troponin/BNP, renal insufficiency", { k: "key", s: "195" }),
                N("Most are admitted; ICU if invasive monitoring needed", { s: "196-197" }),
                N("Lower risk: observation on telemetry 12-24 h", { s: "197" })
              ])
            ])
          ])
        ])
      }
    ]
  });
})();
