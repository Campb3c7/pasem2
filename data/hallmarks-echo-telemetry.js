/* Hallmarks: Echo & Telemetry (Sillaman): which test each condition needs and what it looks like. Source: source-material/cardio-part-3/text/echo-telemetry.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("echo-telemetry", "Cardiac Testing: Echo & Telemetry", [

    C("hm-valve-murmur", "Suspected valvular disease", "A new murmur that needs imaging.",
      "New murmur + dyspnea + edema = transthoracic echo first.", [
        ["dx", "Transthoracic echo (TTE) first", "TTE is the first-line noninvasive look at valves and function."],
        ["story", "Dyspnea, 1+ edema and a 2/6 systolic murmur", "The lecture's opening case: order an echo."],
        ["test", "Apical 5-chamber view best measures aortic stenosis", "It aligns Doppler with the aortic outflow tract."]
      ]),

    C("hm-asd-pfo", "ASD / PFO", "A hole between the atria.",
      "Bubbles crossing from right to left atrium on agitated saline echo = ASD or PFO.", [
        ["dx", "Bubble study (agitated saline contrast echo)", "Microbubbles show up crossing the septum."],
        ["test", "Bubbles appear in the left heart after IV injection", "Saline bubbles normally stay on the right and get filtered by the lungs."],
        ["who", "Cryptogenic stroke workup (looking for a cardiac source of embolus)", "A PFO can let a venous clot reach the brain."]
      ]),

    C("hm-endocarditis-tee", "Infective endocarditis (TEE)", "Valve infection that needs the closer look.",
      "Prosthetic valve or moderate-high suspicion of IE, abscess or fistula = TEE.", [
        ["dx", "TEE when pretest likelihood is moderate or high (prosthetic valve, certain organisms)", "TEE sees vegetations TTE misses."],
        ["danger", "Complications like abscess or fistula", "TEE is indicated for suspected IE complications."],
        ["tx", "Repeat TEE to confirm the vegetation resolved after antibiotics", "Follow-up TEE is for changes that alter therapy."]
      ]),

    C("hm-laa-thrombus", "Left atrial appendage thrombus", "A clot hiding in the LA appendage in AF.",
      "AF or flutter before cardioversion or ablation = TEE to look for an LAA clot.", [
        ["who", "Atrial fibrillation or flutter before cardioversion or ablation", "Cardioversion can launch an LAA clot."],
        ["dx", "TEE (best view of posterior structures)", "The LAA sits posteriorly, right behind the esophagus."],
        ["danger", "Embolic stroke", "A clot thrown from the LAA travels to the brain."]
      ]),

    C("hm-aortic-dissection-tee", "Acute aortic pathology (TEE)", "Dissection, transection or intramural hematoma.",
      "Suspected acute aortic dissection = TEE as an initial life-threatening indication.", [
        ["dx", "TEE as an initial test", "TEE is first-line in some life-threatening situations."],
        ["cause", "Dissection, transection or intramural hematoma", "These are the acute aortic pathologies listed for TEE."],
        ["avoid", "Dobutamine stress", "Dissection is a contraindication to dobutamine."]
      ]),

    C("hm-tee-ci", "Can't do a TEE", "Esophageal problems that block a TEE.",
      "Prior esophagectomy = absolute no; stricture, tear, Zenker's, coagulopathy, low platelets = relative.", [
        ["avoid", "Previous esophagectomy or esophagogastrectomy (absolute)", "There is no normal esophagus to pass the probe through."],
        ["who", "Esophageal stricture, recent tear or bleed, or Zenker's diverticulum", "The probe could perforate a damaged esophagus."],
        ["who", "Severe cervical spine arthritis", "Limited neck motion raises the complication risk."]
      ]),

    C("hm-methemoglobinemia", "Methemoglobinemia after TEE", "A rare, life-threatening anesthetic reaction.",
      "Cyanosis and low sats after benzocaine throat spray for a TEE = methemoglobinemia.", [
        ["cause", "Topical benzocaine used to numb the throat", "Benzocaine oxidizes hemoglobin to methemoglobin."],
        ["danger", "Rare but potentially life-threatening", "Methemoglobin can't carry oxygen."],
        ["buzz", "TEE complication", "Listed with esophageal perforation, GI bleed and pharyngeal hematoma."]
      ]),

    C("hm-esophageal-perf", "Esophageal perforation after TEE", "The probe tears the esophagus.",
      "Chest or neck pain after a TEE = think esophageal perforation.", [
        ["danger", "Major TEE complication", "It is first on the slide's complication list."],
        ["who", "Higher risk with stricture, diverticulum or limited neck motion", "These make the probe pass harder."],
        ["labs", "GI bleeding risk is higher with platelets under 50k", "Thrombocytopenia raises bleeding after TEE."]
      ]),

    C("hm-ef-muga", "Need an exact EF (MUGA)", "When EF must be measured precisely.",
      "Need a very accurate, reproducible EF (any body habitus) = MUGA; not in pregnancy or lactation.", [
        ["dx", "MUGA scan (radionuclide ventriculography)", "MUGA is the preferred technique for an accurate EF."],
        ["buzz", "Very accurate and reproducible; body habitus does not limit it", "It counts labeled red cells, not echo windows."],
        ["avoid", "Pregnancy or lactation", "It uses a radioactive tracer (about 620 mrem)."]
      ]),

    C("hm-palpitations-monitor", "Palpitations or suspected arrhythmia", "Choosing the rhythm monitor.",
      "Daily palpitations = 24-48 h Holter; less frequent = 30-day event monitor; inpatient = telemetry.", [
        ["dx", "Daily symptoms: 24- or 48-hour Holter with a symptom diary", "Daily symptoms will show up in a day or two."],
        ["dx", "Less frequent symptoms or AF burden: 30-day event monitor", "A longer window catches occasional events."],
        ["dx", "Inpatient suspected arrhythmia or syncope: telemetry", "Telemetry gives continuous monitoring of 2-3 leads."]
      ], { x: ["hm-unexplained-syncope"] }),

    C("hm-unexplained-syncope", "Unexplained syncope or cryptogenic stroke", "Rare events that need long-term monitoring.",
      "Unexplained syncope or cryptogenic stroke = implantable loop recorder (up to 3 years).", [
        ["dx", "Implantable monitoring device (loop recorder)", "It is indicated for unexplained syncope and cryptogenic stroke."],
        ["timing", "Monitors rhythm for up to 3 years, downloads nightly", "Long monitoring catches rare events."],
        ["danger", "Hard to get insurance approval; must be explanted", "The slide lists these downsides."]
      ], { x: ["hm-palpitations-monitor"] })
  ], {
    echo: ["hm-valve-murmur", "hm-asd-pfo", "hm-endocarditis-tee", "hm-laa-thrombus", "hm-aortic-dissection-tee", "hm-ef-muga"],
    tee: ["hm-tee-ci", "hm-methemoglobinemia", "hm-esophageal-perf"],
    rhythm: ["hm-palpitations-monitor", "hm-unexplained-syncope"]
  });
}());
