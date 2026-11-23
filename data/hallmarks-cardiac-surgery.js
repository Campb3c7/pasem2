/* Hallmarks: Cardiac Surgery (Gardner). Source: source-material/cardio-part-3/text/cardiac-surgery.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("cardiac-surgery", "Cardiac Surgery", [

    C("hm-cabg-candidate", "Needs elective CABG", "CAD anatomy that favors bypass over PCI.",
      "Left main >50%, complex 3-vessel disease (SYNTAX ≥23), or 2-vessel with proximal LAD = CABG.", [
        ["test", "Left main stenosis over 50%", "Left main disease favors CABG unless the SYNTAX score is low."],
        ["test", "Complex 3-vessel CAD with SYNTAX score ≥23", "CABG beats PCI in complex multivessel disease."],
        ["test", "2-vessel disease involving the proximal LAD", "Proximal LAD involvement is a CABG indication."],
        ["who", "Survivor of sudden cardiac death with ischemia-mediated VT", "Fixing the ischemia removes the trigger for VT."]
      ], { x: ["hm-pci-candidate"] }),

    C("hm-pci-candidate", "PCI favored over CABG", "Simpler disease where a stent wins.",
      "1-2 vessel disease NOT involving the proximal LAD = PCI.", [
        ["test", "One- or two-vessel disease not involving the proximal LAD", "Limited disease is well treated with a stent."],
        ["test", "Low SYNTAX score (<22-23) even with left main or 3-vessel disease", "With low complexity, PCI is a reasonable alternative."],
        ["buzz", "Drug-eluting stent", "PCI with DES is one of the three invasive CAD interventions."]
      ], { x: ["hm-cabg-candidate"] }),

    C("hm-emergent-cabg", "Needs emergent CABG", "Acute situations that go straight to surgery.",
      "Failed PCI or lytics, ventricular/septal rupture, acute valve injury, recurrent ischemia = emergent CABG.", [
        ["story", "Acute ischemia after failed PCI or fibrinolysis", "When the artery can't be opened another way, surgery is next."],
        ["cause", "Mechanical failure: ventricular or septal rupture, acute valvular injury", "Mechanical complications need surgical repair."],
        ["sx", "Recurrent ischemia", "Ongoing ischemia despite treatment is an emergent indication."]
      ]),

    C("hm-svg-failure", "Saphenous vein graft failure", "The most common graft, and the one that fails most.",
      "Saphenous vein = most common graft, 10-25% fail in 12-18 months, 10% occlude in 30 days.", [
        ["buzz", "Most common graft used", "Saphenous vein is easy to harvest and plentiful."],
        ["timing", "10-25% fail within 12-18 months; 10% occlude within 30 days", "Veins are not built for arterial pressure."],
        ["cause", "Depends on the runoff and size of the native artery", "Poor runoff lowers flow through the graft."]
      ], { x: ["hm-lima"] }),

    C("hm-lima", "LIMA (LITA) graft", "The best graft, usually to the LAD.",
      "LIMA = 95% patent at 5 years = best graft; put at least one arterial graft in every patient.", [
        ["test", "95% patency at 5 years", "The LITA has the best long-term patency."],
        ["tx", "Try to place at least one arterial graft in every patient", "Arterial grafts last much longer than veins."],
        ["danger", "Using both ITAs can devascularize the sternum", "Both internal thoracic arteries supply the sternum."]
      ], { x: ["hm-svg-failure"] }),

    C("hm-postop-hypovolemia", "Post-CABG hypovolemia / bleeding", "ICU call: low BP, fast pulse, low urine.",
      "8 h post-CABG: BP 75/P, HR 130, falling urine output = hypovolemia (check chest tube output, CVP, Hgb).", [
        ["story", "BP 75/palp, pulse 130 and dropping urine output", "Low pressure with a fast rate means the tank is empty."],
        ["dx", "Check chest tube output, CVP, hemoglobin and cardiac output", "High chest tube output means bleeding; low CVP means low volume."],
        ["tx", "Replace volume (and blood if bleeding)", "Restoring preload restores output."]
      ], { x: ["hm-postop-pump"] }),

    C("hm-postop-htn", "Post-CABG hypertension", "ICU call: high BP threatening the grafts.",
      "8 h post-CABG: BP 180/110, HR 90, low urine = hypertension; treat with nitroprusside.", [
        ["story", "BP 180/110, pulse 90 and diminishing urine output", "That ICU call is post-op hypertension."],
        ["dx", "Ask about HTN history, pain, whether awake; check SVR and chest tube output", "Pain and waking up can drive BP up."],
        ["tx", "Nitroprusside", "The speaker notes' answer for post-op hypertension."]
      ]),

    C("hm-postop-pump", "Post-CABG pump failure (dyskinesia)", "ICU call: low BP without a fast pulse.",
      "8 h post-CABG: BP 75/P, HR only 90, low urine = cardiac dyskinesia/failure; get an echo.", [
        ["story", "BP 75/palp, pulse 90 and diminishing urine output", "Low BP without a compensating tachycardia points to the pump."],
        ["dx", "Echocardiogram plus chest tube output, CVP, cardiac output and SVR", "Echo shows the poorly moving heart (or tamponade)."],
        ["cause", "Poor inotropy, perioperative MI, valve dysfunction or tamponade", "These are the slide's causes of myocardial weakness after CABG."]
      ], { x: ["hm-postop-hypovolemia"] }),

    C("hm-postop-af", "Post-op atrial fibrillation", "The classic post-CABG arrhythmia.",
      "Irregularly irregular rhythm days after CABG = post-op AF; telemetry watches for it.", [
        ["ekg", "Atrial fibrillation (also ventricular arrhythmias and bradyarrhythmias)", "Dysrhythmias are a listed cardiac complication."],
        ["dx", "Telemetry monitoring in the ICU", "Telemetry watches for dysrhythmias after surgery."],
        ["cause", "Inflammatory response from bypass, ischemia and electrolyte shifts (standard teaching)", "Surgery and CPB irritate the atria."]
      ]),

    C("hm-postop-renal", "Post-CABG renal dysfunction", "Kidney injury after bypass.",
      "Falling urine output and rising creatinine after CPB; keep normotensive and avoid nephrotoxins.", [
        ["cause", "Vasoconstriction, hypothermia, loss of pulsatile flow and atherosclerosis", "CPB flow is non-pulsatile and the patient is cooled."],
        ["avoid", "Aminoglycosides, ACE inhibitors and contrast", "These are the nephrotoxins to avoid after CABG."],
        ["tx", "Keep the patient normotensive", "Steady perfusion protects the kidneys."]
      ]),

    C("hm-phrenic-injury", "Phrenic nerve injury", "A pulmonary complication of cardiac surgery.",
      "Can't wean from the vent + raised hemidiaphragm after cardiac surgery = phrenic nerve injury.", [
        ["danger", "Diaphragmatic dysfunction", "The injured phrenic nerve can't drive the diaphragm."],
        ["sx", "Difficulty weaning from the ventilator", "A weak diaphragm makes breathing on one's own hard."],
        ["cause", "Injury during cardiac surgery (cold or direct trauma, standard teaching)", "The phrenic nerve runs along the pericardium."]
      ]),

    C("hm-cpb", "Cardiopulmonary bypass effects", "What the bypass machine does to the body.",
      "Non-pulsatile flow, hypothermia, high-potassium cardioplegia, anticoagulated blood.", [
        ["buzz", "Flow is non-pulsatile", "The pump returns blood steadily, not in beats."],
        ["tx", "Heart stopped with cold, potassium-rich cardioplegia", "High potassium stops the heart in diastole."],
        ["test", "Hypothermia cuts oxygen use 50% per 10°C drop", "Cooling lets lower pump flow keep organs alive."],
        ["cause", "Triggers an inflammatory response and can release fat and particles", "Contact with the circuit activates inflammation."]
      ])
  ], {
    who: ["hm-cabg-candidate", "hm-pci-candidate", "hm-emergent-cabg", "hm-svg-failure", "hm-lima", "hm-cpb"],
    icu: ["hm-postop-hypovolemia", "hm-postop-htn", "hm-postop-pump", "hm-postop-af", "hm-postop-renal", "hm-phrenic-injury"]
  });
}());
