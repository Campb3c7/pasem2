/* Hallmarks: CAD Part III (Chest pain workup, Stager). Source: source-material/cardio-part-3/text/cad-part-3.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  var ACS = ["hm-unstable-angina", "hm-nstemi", "hm-stemi"];
  window.Hallmarks.lecture("cad-part-3", "CAD Part III: Chest Pain Workup", [

    C("hm-stable-angina", "Stable angina", "Predictable exertional ischemia from a fixed plaque.",
      "Same trigger, same amount of exertion, gone in 5-10 minutes with rest or nitro = stable angina.", [
        ["sx", "Predictable, reproducible pain with exertion, cold or emotional stress", "A fixed plaque only limits flow when demand rises."],
        ["timing", "Lasts 5-10 minutes and is relieved by rest or nitroglycerin", "Stopping the exertion brings demand back below supply."],
        ["cause", "Fixed, flow-limiting atherosclerotic plaque with subendocardial ischemia", "The subendocardium is the first layer to starve."],
        ["dx", "Stable outpatient: risk stratify with stress testing (or CCTA)", "Stress testing is for clinically stable patients, not active pain."],
        ["story", "Thomas gets the same chest pain after 15 minutes on the treadmill, unchanged for 6 months", "Same trigger and same threshold over time is what makes it stable.", []]
      ], { x: ["hm-unstable-angina"] }),

    C("hm-unstable-angina", "Unstable angina", "ACS with ischemic symptoms but NO troponin rise and no ST elevation.",
      "New, worse, or rest angina + negative troponin + no ST elevation = unstable angina.", [
        ["sx", "Angina at rest or with minimal exertion, or more frequent, longer, less nitro-responsive", "ACS is marked by a change in frequency, severity, duration, provocation or relief."],
        ["labs", "Troponin stays negative", "No troponin rise means no acute myocardial injury, which separates UA from NSTEMI.", ["hm-stable-angina"]],
        ["ekg", "No ST elevation; may show ST depression or new T wave inversion", "UA can have ischemic changes but never ST elevation."],
        ["story", "Thomas's usual pain now comes walking in from the parking lot, then on the couch, needing 2 nitros", "Pain with less and less exertion is the unstable pattern.", ["hm-nstemi", "hm-stemi"]],
        ["tx", "Call cardiology and get them seen ASAP or send to the ER", "UA features mean plaque rupture with thrombosis: a medical emergency."]
      ], { x: ["hm-stable-angina", "hm-nstemi", "hm-stemi"] }),

    C("hm-nstemi", "NSTEMI", "ACS with a rising troponin but no ST elevation.",
      "Rest pain + positive troponin + NO ST elevation (maybe ST depression or T inversion) = NSTEMI.", [
        ["labs", "Troponin rises (example: hs-troponin 527, then 1,637 at 90 minutes)", "A rising troponin proves acute myocardial injury.", ["hm-stemi"]],
        ["ekg", "ST depression or T wave inversion, but no ST elevation", "NSTEMI is defined by the absence of ST elevation.", ["hm-unstable-angina"]],
        ["cause", "Partial (subtotal) occlusion with subendocardial infarction", "Flow is reduced but not completely blocked."],
        ["tx", "Heparin drip and a left heart cath scheduled (next morning in the example)", "NSTEMI gets anticoagulation and a planned, not emergent, cath unless unstable."]
      ], { x: ACS }),

    C("hm-stemi", "STEMI", "The hat trick: ischemic symptoms + troponin + ST elevation.",
      "ST elevation in 2+ contiguous leads with an ischemic story = STEMI = cath lab now.", [
        ["ekg", "ST elevation in 2 or more anatomically contiguous leads", "That is the definitive EKG criterion for STEMI.", []],
        ["cause", "Often acute complete coronary occlusion (transmural)", "A fully blocked artery injures the whole wall thickness."],
        ["tx", "Activate the STEMI pathway: aspirin + P2Y12 inhibitor and primary PCI", "Opening the artery fast saves muscle."],
        ["buzz", "Do not wait for troponin to activate the cath lab", "The EKG plus story is enough to act."]
      ], { x: ACS }),

    C("hm-silent-ischemia", "Silent ischemia / atypical presentations", "Ischemia without classic chest pain.",
      "Elderly, diabetic, female: dyspnea, fatigue, nausea, syncope, confusion or a fall instead of chest pain.", [
        ["who", "Elderly and diabetic patients", "Silent ischemia can occur in elderly and diabetic patients."],
        ["sx", "Anginal equivalents: dyspnea, unusual fatigue, exertional weakness, nausea or upper abdominal discomfort", "These symptoms other than chest pain can be ischemia."],
        ["sx", "Over 75: shortness of breath, syncope, confusion, abdominal pain or an unexplained fall", "Older patients often present atypically."],
        ["danger", "Sudden cardiac death can be the first symptom of CAD", "Symptoms do not reliably match how severe the disease is."]
      ]),

    C("hm-msk-chest-pain", "Musculoskeletal chest pain", "Chest wall pain such as costochondritis or rib fracture.",
      "Pain you can point to with one finger, reproduced by pressing or moving = musculoskeletal.", [
        ["exam", "Reproduced by palpation or movement", "Ischemic pain does not change when you press on the chest."],
        ["sx", "Localized with one finger", "Cardiac pain is diffuse; point tenderness is chest wall."],
        ["timing", "Fleeting pains lasting 30 seconds or less", "Very brief stabs are nerve or musculoskeletal pain."],
        ["sx", "Radiates into the legs or above the jaw", "Ischemic pain does not travel below the waist or above the mandible."]
      ]),

    C("hm-pleuritic-pain", "Pleuritic (pulmonary) chest pain", "Sharp pain from the lungs or pleura: PE, pneumothorax, pneumonia, pleurisy.",
      "Sharp, knife-like pain with breathing or cough = pulmonary (or MSK), not ischemia.", [
        ["sx", "Sharp, knife-like pain with breathing or coughing", "Pleuritic pain points to a pulmonary or musculoskeletal cause."],
        ["timing", "Constant pain lasting for days", "Ischemic pain lasts minutes to hours, not days."],
        ["danger", "Rule out PE and tension pneumothorax early", "These are life-threatening alternatives in triage."]
      ]),

    C("hm-gi-chest-pain", "GI chest pain", "GERD, PUD, esophagitis, pancreatitis, biliary colic.",
      "Pain mainly in the mid or lower abdomen, tied to meals = think GI.", [
        ["sx", "Pain mainly in the mid or lower abdomen", "That location points to dyspepsia, GERD, PUD or pancreatitis."],
        ["cause", "GERD, PUD, esophagitis, esophageal spasm, pancreatitis, biliary colic", "These are the GI causes on the differential slide."],
        ["buzz", "Do not let 'indigestion' fool you in a woman or diabetic", "Indigestion can be an anginal equivalent, especially in women."]
      ]),

    C("hm-in-stent-thrombosis", "In-stent thrombosis", "A sudden clot inside a stent.",
      "Stopped DAPT early + sudden ACS = stent thrombosis.", [
        ["timing", "Sudden, hours to years after PCI", "It is an acute clot, so it presents abruptly."],
        ["sx", "Presents as ACS or acute MI", "A clot suddenly blocks the stented artery."],
        ["cause", "Stopping DAPT early, poor stent expansion or malapposition", "Platelets stick to the stent before endothelium covers it."],
        ["buzz", "Thrombosis = clot", "The slide's one-word way to keep it apart from restenosis."]
      ], { x: ["hm-restenosis"] }),

    C("hm-restenosis", "In-stent restenosis", "Gradual re-narrowing inside a stent from tissue growth.",
      "Gradual return of angina months after a stent = restenosis from neointimal hyperplasia.", [
        ["cause", "Neointimal hyperplasia (sometimes neoatherosclerosis)", "Scar tissue grows into the stent over time."],
        ["timing", "Gradual process", "Tissue growth is slow, unlike a clot."],
        ["sx", "Recurrent angina or ischemia", "The slowly narrowing lumen limits flow again."],
        ["tx", "Drug-eluting stents lower the risk compared with bare-metal stents", "The drug limits neointimal growth."]
      ], { x: ["hm-in-stent-thrombosis"] }),

    C("hm-cto", "Chronic total occlusion (CTO)", "A 100% blockage present for 3 months or more.",
      "100% occlusion, TIMI 0, ≥3 months, collaterals keep it alive at rest = CTO.", [
        ["test", "100% occlusion with TIMI 0 flow for ≥3 months", "That is the definition on the slide."],
        ["cause", "Collateral vessels enlarge as the blockage develops slowly", "Collaterals supply the muscle at rest."],
        ["sx", "Fine at rest but exertional angina", "Collaterals cannot meet demand during exercise."],
        ["tx", "CTO PCI for lifestyle-limiting angina despite optimal medical therapy", "Reopening is reserved for persistent symptoms and viable muscle."]
      ]),

    C("hm-retroperitoneal", "Retroperitoneal hemorrhage", "Hidden bleeding after a high femoral stick.",
      "Back or flank pain + falling hemoglobin + hypotension after a femoral cath, no groin swelling = retroperitoneal bleed.", [
        ["cause", "Femoral puncture too high, above the inguinal ligament", "A high stick bleeds into the retroperitoneum."],
        ["sx", "Abdominal, flank or back pain with hypotension and tachycardia", "Blood loss into a large hidden space causes shock."],
        ["labs", "Falling hemoglobin and hematocrit", "The bleeding is internal, so labs show it first."],
        ["exam", "May have no visible groin swelling or bruising", "The blood collects where you cannot see it."],
        ["dx", "CT or CT angiography of the abdomen and pelvis", "Imaging finds bleeding you can't see at the groin."]
      ]),

    C("hm-pseudoaneurysm", "Femoral pseudoaneurysm", "Blood pooling outside the artery, held in by surrounding tissue.",
      "Groin pain out of proportion + pulsatile mass or bruit after cath = pseudoaneurysm; duplex ultrasound.", [
        ["exam", "Pulsatile mass or bruit at the femoral access site", "Blood keeps flowing in and out of the contained sac."],
        ["sx", "Pain out of proportion or swelling at the access site", "The sac expands into the groin tissue."],
        ["dx", "Duplex ultrasound", "Duplex is the test of choice for suspected pseudoaneurysm."],
        ["tx", "Small (<2 cm) observe; larger: ultrasound-guided thrombin injection", "Thrombin clots the sac; small ones often close alone."]
      ], { x: ["hm-av-fistula"] }),

    C("hm-av-fistula", "Femoral AV fistula", "An abnormal artery-to-vein connection from the cath needle.",
      "Continuous bruit or thrill at the groin after cath = AV fistula.", [
        ["exam", "Continuous bruit or palpable thrill", "Blood flows from artery to vein through the whole cardiac cycle."],
        ["cause", "Needle injures both the femoral artery and vein", "Hitting both vessels creates the connection."],
        ["tx", "Many small ones close on their own: observe", "Observation is first for small, asymptomatic fistulas."]
      ], { x: ["hm-pseudoaneurysm"] }),

    C("hm-ca-aki", "Contrast-associated AKI", "Kidney function falls after iodinated contrast.",
      "Creatinine rises soon after a cath in a CKD or diabetic patient = contrast AKI; prevent with hydration.", [
        ["who", "Pre-existing CKD (stage IIIb or worse) or diabetes", "Kidneys with less reserve are most vulnerable."],
        ["timing", "Early, right after contrast exposure", "Unlike cholesterol emboli, contrast injury shows up early."],
        ["tx", "Prevent with hydration and holding nephrotoxic drugs (hold metformin)", "Volume protects the kidney during contrast exposure."]
      ], { x: ["hm-chol-emboli"] }),

    C("hm-chol-emboli", "Cholesterol emboli syndrome", "Plaque crystals showered downstream after a cath.",
      "Livedo reticularis + blue toes with good pulses + eosinophilia + late progressive AKI = cholesterol emboli.", [
        ["exam", "Livedo reticularis and blue toe syndrome with intact distal pulses", "Tiny crystals plug small arterioles, so big pulses stay normal."],
        ["labs", "Eosinophilia (up to 80% of patients)", "Hypereosinophilia is a classic clue, mechanism unknown."],
        ["timing", "AKI comes later than contrast AKI and keeps progressing", "Ongoing inflammation keeps damaging the kidney."],
        ["sx", "Fever, weight loss, myalgias, or mesenteric ischemia (pain out of proportion)", "Crystals trigger an intense inflammatory response."],
        ["tx", "Supportive care", "There is no specific treatment."]
      ], { x: ["hm-ca-aki"] })
  ], {
    cp: ["hm-stable-angina", "hm-unstable-angina", "hm-nstemi", "hm-stemi", "hm-silent-ischemia", "hm-msk-chest-pain", "hm-pleuritic-pain", "hm-gi-chest-pain"],
    cath: ["hm-in-stent-thrombosis", "hm-restenosis", "hm-cto", "hm-retroperitoneal", "hm-pseudoaneurysm", "hm-av-fistula", "hm-ca-aki", "hm-chol-emboli"]
  });
}());
