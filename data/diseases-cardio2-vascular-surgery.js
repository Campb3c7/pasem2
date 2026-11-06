/*
  Cardio Part 2 Diseases tool: Vascular Surgery (Gardner deck, uploaded as "Vascular PP 2026SV").
  Source: source-material/cardio-part-2/text/vascular-surgery.md (slide pictures read from the PDF render).
  Entries are the clinical conditions the deck teaches from the surgical angle; PAD itself, gangrene and acute limb
  ischemia live in Vascular Disease Part 1. Facts not on the slides are marked "(standard teaching)".
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  window.CARDIO2_DISEASES_VASCULAR_SURGERY = L("vascular-surgery", "Vascular Surgery", [

    D("vsurg-revascularization", "PAD Revascularization & Follow-up", "Call a surgeon for acute ischemia or failed medical therapy (rest pain, ulcer, gangrene); bypass with autologous vein lasts longest; duplex every 3 months; surgery only buys time.", [
      S("when", "When to call a surgeon", Tbl(["Trigger", "Examples"], [
        ["<strong>Acute</strong>", "Ischemic changes"],
        ["<strong>Chronic, failed medical therapy</strong>", "<strong>Rest pain</strong>, <strong>ulceration or gangrene</strong>"]
      ]) + "<p>Decision: good surgical candidate? realistic benefit? non-operative options? best operation for function and quality of life? Vascular surgery is all about <strong>inflow and outflow</strong>.</p><p>Remember the disease is <strong>diffuse</strong>: a PAD patient likely has CAD and carotid stenosis too.</p>"),
      S("options", "Options and grafts", Tbl(["Option", "Key point"], [
        ["Angioplasty", "Balloon opens the narrowing"],
        ["Stent", "Balloon expands a mesh tube that stays"],
        ["Endarterectomy", "Open the artery and remove plaque (classic: carotid)"],
        ["Bypass graft", "<strong>Autologous vein = BEST</strong>; synthetic <strong>PTFE, Dacron</strong>; cadaver"]
      ]) + HY("Bypass is better for long-term management than percutaneous stenting.")),
      S("followup", "Follow-up", "<p>Watch for return of symptoms; <strong>ABI at rest and after exercise</strong>; <strong>duplex every 3 months</strong> (surveillance-based intervention gives higher 5-year patency); <strong>long-term oral anticoagulant and/or antiplatelet</strong>.</p>" + HY("Peripheral vascular surgery is <strong>temporizing</strong>: without lifestyle change the bypass, angioplasty or stent will ultimately fail."))
    ], [
      Q("when", "A PAD patient on full medical therapy now has foot pain at rest every night. What does this mean?", ["Failed medical therapy: refer to a vascular surgeon", "Normal progression: increase walking", "Venous disease: start compression", "No change in plan"], 0, "Rest pain is a chronic indication to call a surgeon."),
      Q("options", "Which bypass conduit is best?", ["Autologous vein", "PTFE", "Dacron", "Cadaver graft"], 0, "Autologous vein graft is BEST."),
      Q("options", "Which lasts longer for long-term PAD management, bypass or percutaneous stenting?", ["Bypass", "Stenting", "They are the same", "Angioplasty alone"], 0, "Speaker notes: bypass is better long term."),
      Q("followup", "How often is a leg bypass checked with duplex ultrasound?", ["Every 3 months", "Every 2 years", "Only with new symptoms", "Never"], 0, "Duplex surveillance every 3 months raises 5-year patency."),
      Q("followup", "A patient who keeps smoking after a fem-pop bypass asks how long it will last. What is the lecture's message?", ["Without lifestyle change it will ultimately fail; surgery only buys time", "It will last for life", "Smoking does not affect grafts", "It will last exactly 10 years"], 0, "Surgery is temporizing."),
      Q("when", "What is vascular surgery all about, according to the lecture?", ["Hemodynamics: inflow and outflow", "Removing all plaque in the body", "Treating venous reflux", "Lowering LDL"], 0, "Inflow and outflow."),
      Q("followup", "Which long-term drug therapy follows a peripheral bypass?", ["Oral anticoagulant and/or antiplatelet", "Lifelong antibiotics", "Steroids", "No medicines"], 0, "Slide 16."),
      Q("options", "Which two synthetic bypass graft materials are listed?", ["PTFE and Dacron", "Nylon and silk", "Titanium and cobalt", "Gore and Prolene"], 0, "Synthetic: PTFE, Dacron.")
    ]),

    D("vsurg-postop-complications", "Complications After Vascular Surgery", "Wound, anesthesia/trauma and surgery-specific complications: hematoma (back to OR), pulsatile pseudoaneurysm (repair), lost pulses from thrombus or emboli (redo, embolectomy and find the source).", [
      S("buckets", "Three buckets", Tbl(["Source", "Complications"], [
        ["Wound", "Bleeding/hematoma, infection, ischemia and breakdown leading to hernia"],
        ["Anesthesia/trauma", "MI, stroke, renal failure, liver failure, pulmonary failure, ischemic bowel"],
        ["Vascular surgery itself", "Bleeding/hematoma, <strong>pseudoaneurysm</strong>, emboli, thrombus, stenosis, occlusion, <strong>limb ischemia</strong>"]
      ])),
      S("dx-tx", "Diagnose and treat", Tbl(["Complication", "Clue", "Action"], [
        ["Bleeding/hematoma", "Mass or visible blood, <strong>hypotension, tachycardia</strong>", "In PACU: <strong>rapid return to OR</strong>"],
        ["<strong>Pseudoaneurysm</strong>", "<strong>Pulsatile mass</strong>", "Typically needs repair"],
        ["Thrombus/stenosis/occlusion", "Loss of pulses, ischemic changes", "Dilate or redo"],
        ["Limb ischemia", "Loss of pulses, pain, pallor", "Intervention"],
        ["Emboli", "Loss of pulses", "<strong>Embolectomy, and where did it originate?</strong>"]
      ]) + HY("Pulsatile mass = pseudoaneurysm. Lost pulse after a bypass = graft thrombosis or embolus until proven otherwise."))
    ], [
      Q("dx-tx", "A pulsatile groin mass appears weeks after a femoral bypass. Diagnosis?", ["Pseudoaneurysm", "Simple hematoma", "Inguinal hernia", "Lymph node"], 0, "Pulsatile mass = pseudoaneurysm; typically needs repair."),
      Q("dx-tx", "In PACU after a bypass, the thigh swells and BP falls with HR 125. Next step?", ["Rapid return to the OR", "Observe until morning", "Oral antibiotics", "Compression stocking"], 0, "Significant bleeding in PACU: back to OR."),
      Q("dx-tx", "The pedal pulse present after a fem-pop bypass disappears and the foot turns pale. Most likely?", ["Graft thrombosis or occlusion", "Wound infection", "Pseudoaneurysm", "Venous insufficiency"], 0, "Loss of pulses: thrombus, stenosis, occlusion or emboli."),
      Q("dx-tx", "After an embolectomy for a postoperative embolus, what else must be done?", ["Find where the embolus originated", "Nothing further", "Amputate", "Start compression"], 0, "Embolectomy and where did it originate?"),
      Q("buckets", "Which complication comes from anesthesia and the trauma of surgery rather than the vascular repair?", ["Ischemic bowel", "Pseudoaneurysm", "Graft occlusion", "Anastomotic bleeding"], 0, "MI, stroke, renal/liver/pulmonary failure, ischemic bowel."),
      Q("buckets", "A groin wound broke down from poor blood flow and now bulges with coughing. What happened?", ["Wound ischemia and breakdown led to a hernia", "Pseudoaneurysm", "DVT", "Lymphocele"], 0, "Ischemia/wound breakdown leading to hernia."),
      Q("dx-tx", "How is a thrombosed or stenosed bypass usually managed?", ["Dilated or redone", "Observed", "Treated with antibiotics", "Compressed"], 0, "Slide 15.")
    ]),

    D("vsurg-carotid-stenosis", "Carotid Artery Stenosis", "Bruit or incidental finding (asymptomatic) vs contralateral focal deficit or ipsilateral amaurosis fugax within 6 months (symptomatic); CEA/stent for symptomatic 70–99% or asymptomatic 80–99%; never a total occlusion.", [
      S("anatomy", "Anatomy", "<p>Four arteries supply the brain (2 internal carotids, 2 vertebrals) joined by the <strong>circle of Willis</strong>. Right CCA from the brachiocephalic; left CCA straight off the arch. <strong>Carotid sinus</strong> controls BP; <strong>carotid body</strong> is a chemoreceptor for O2 and CO2. The <strong>ophthalmic artery</strong> comes off the internal carotid.</p>"),
      S("presentation", "Presentation", Tbl(["Asymptomatic", "Symptomatic"], [
        ["Thrill, <strong>bruit</strong>, found on thyroid US or neck CT, screening due to PAD", "<strong>Contralateral</strong> focal neuro symptoms within <strong>6 months</strong>; <strong>ipsilateral amaurosis fugax</strong> (emboli to ophthalmic artery); ipsilateral focal findings on brain CT/MRI"]
      ]) + HY("<strong>NOT vertigo or syncope.</strong>") + "<p>Risk factors: DM, HTN, smoking, genetics, age, hyperlipidemia. Vulnerable plaque: thin fibrous cap, lipid core, inflammation, intraplaque hemorrhage; ulcerated or fissured plaque forms thrombus that embolizes.</p>"),
      S("treatment", "Treatment", "<p><strong>Everyone</strong>: statin, antiplatelet, control HTN and DM, Mediterranean diet, smoking cessation.</p>" + Tbl(["CEA or stent when"], [
        ["Symptomatic and <strong>70–99%</strong>"], ["Asymptomatic and <strong>80–99%</strong>"], ["Surgically accessible lesion"], ["No severe cardiac, pulmonary or systemic disease"], ["Non-debilitating stroke"], ["Life expectancy <strong>&gt; 5 years</strong>"]
      ]) + "<p>Surgery is <strong>prophylactic</strong>: operative stroke risk <strong>1–3%</strong>; non-operative risk depends on the degree of stenosis. Pre-op: control BP and comorbidities; local or general anesthesia.</p>" + HY("<strong>Do NOT operate on a total occlusion.</strong>"))
    ], [
      Q("presentation", "A man has a painless gray curtain over his left eye for 2 minutes. Which artery is the likely source?", ["Left internal carotid (emboli to the ophthalmic artery)", "Right internal carotid", "Basilar artery", "Left vertebral artery"], 0, "Ipsilateral amaurosis fugax."),
      Q("presentation", "Left arm weakness for 15 minutes last month points to which carotid?", ["Right internal carotid", "Left internal carotid", "Left external carotid", "Neither"], 0, "Contralateral focal neuro symptoms."),
      Q("presentation", "A patient with 85% carotid stenosis has episodes of vertigo. Is the stenosis symptomatic?", ["No: vertigo and syncope do not count", "Yes", "Only if it lasts more than a day", "Only if bilateral"], 0, "NOT vertigo or syncope."),
      Q("treatment", "Symptomatic carotid stenosis qualifies for CEA or stenting at what range?", ["70 to 99%", "50 to 69%", "80 to 99%", "100%"], 0, "Symptomatic 70 to 99%."),
      Q("treatment", "Asymptomatic carotid stenosis qualifies for CEA or stenting at what range in this lecture?", ["80 to 99%", "60 to 79%", "70 to 99%", "Any degree"], 0, "Asymptomatic 80 to 99%."),
      Q("treatment", "Duplex shows a 100% occluded internal carotid. Management?", ["Do not operate; medical therapy", "Urgent CEA", "Carotid stent", "Thrombolysis"], 0, "Do not operate on total occlusion."),
      Q("treatment", "What is the operative stroke risk of carotid surgery?", ["1 to 3%", "10%", "Under 0.1%", "30%"], 0, "Operative stroke risk 1 to 3%."),
      Q("treatment", "What life expectancy is required before carotid surgery?", ["More than 5 years", "More than 1 year", "More than 15 years", "Any"], 0, "Life expectancy over 5 years."),
      Q("anatomy", "What does the carotid sinus control?", ["Blood pressure", "Oxygen sensing", "Swallowing", "Pupil size"], 0, "Carotid sinus = BP; carotid body = chemoreceptor."),
      Q("presentation", "How is asymptomatic carotid stenosis usually discovered?", ["A neck bruit, an incidental neck scan, or screening because of PAD", "Amaurosis fugax", "A stroke", "Syncope"], 0, "Thrills, bruits, thyroid US, CT neck, PAD screening.")
    ]),

    D("vsurg-cea-complications", "Carotid Endarterectomy Complications", "BP lability from the carotid sinus (ICU/step-down), neck hematoma (rapid return to OR), stroke 1–3% (supportive), plus nerve injuries; hyperperfusion has its own entry.", [
      S("specific", "Carotid-specific complications", Tbl(["Complication", "Cause", "What to do"], [
        ["<strong>BP lability</strong>", "Carotid sinus", "<strong>Monitor in ICU/step-down</strong>"],
        ["Chemoreceptor changes", "Carotid body", "Monitor"],
        ["<strong>Neck hematoma</strong>", "Bleeding", "<strong>Rapid return to OR</strong> (airway risk, standard teaching)"],
        ["<strong>Stroke</strong> 1–3%", "Emboli, low flow", "Supportive care"],
        ["Cerebral hyperperfusion syndrome", "Sudden extra flow", "BP control, edema control, anticonvulsants"]
      ])),
      S("nerves", "Nerve injuries", Tbl(["Nerve", "Result"], [
        ["Vagus", "Hoarseness, dysphagia, HR and BP changes, abdominal pain, reflux, N/V"],
        ["Recurrent laryngeal", "Hoarseness"],
        ["Hypoglossal", "Tongue deviation (notes say contralateral; standard teaching says toward the injured side)"],
        ["Sympathetic", "<strong>Horner syndrome</strong>: miosis, ptosis, anhidrosis"]
      ]) + Mn("Mnemonic", "Horner = PAM: Ptosis, Anhidrosis, Miosis."))
    ], [
      Q("specific", "Two hours after CEA, the neck swells quickly and the patient becomes short of breath. Next step?", ["Rapid return to the OR", "Ice and observe", "Oral antibiotics", "Start a statin"], 0, "Hematoma: rapid return to OR."),
      Q("specific", "Why are CEA patients monitored in ICU or step-down?", ["BP lability from carotid sinus disturbance", "To give IV antibiotics", "For dialysis", "For ventilator weaning"], 0, "BP lability: carotid sinus."),
      Q("specific", "A patient has a small stroke after CEA. Management per the lecture?", ["Supportive care", "Immediate repeat endarterectomy", "Amputation", "Compression"], 0, "Stroke: supportive care."),
      Q("nerves", "After CEA, the patient has ptosis, a small pupil and no sweating on the operated side. Which nerves were injured?", ["Sympathetic nerves (Horner syndrome)", "Hypoglossal", "Vagus", "Facial"], 0, "Horner: miosis, ptosis, anhidrosis."),
      Q("nerves", "After CEA, the voice is hoarse. Which nerve is most likely injured?", ["Recurrent laryngeal (vagus branch)", "Hypoglossal", "Sympathetic chain", "Accessory"], 0, "Recurrent laryngeal or vagus: hoarseness."),
      Q("nerves", "After CEA, the tongue deviates when protruded. Which nerve?", ["Hypoglossal", "Vagus", "Recurrent laryngeal", "Glossopharyngeal"], 0, "Hypoglossal nerve injury."),
      Q("nerves", "Which symptoms besides hoarseness can follow vagus nerve injury?", ["Difficulty swallowing, HR and BP changes, reflux, nausea", "Tongue deviation", "Ptosis and miosis", "Facial droop"], 0, "Speaker notes for slide 38.")
    ]),

    D("vsurg-hyperperfusion", "Cerebral Hyperperfusion Syndrome", "After CEA, a brain used to low flow suddenly gets full flow: headache, seizures, focal deficits; treat with BP control, edema control and anticonvulsants.", [
      S("what", "What it is", "<p>A complication of <strong>carotid surgery</strong>: once a tight stenosis is fixed, the brain beyond it gets much more blood than it is used to.</p><p><strong>Headaches, seizures, focal neurologic deficits.</strong></p><p>The vessels downstream of a long-standing stenosis stayed maximally dilated and lose their ability to clamp down, so the flow surge causes edema and sometimes bleeding (standard teaching).</p>"),
      S("treatment", "Treatment", "<p><strong>BP control</strong>; <strong>edema control</strong>; <strong>anticonvulsants</strong>.</p>" + HY("Severe headache + seizure + high BP after CEA = hyperperfusion. Lower the BP; don't give fluids."))
    ], [
      Q("what", "What are the three features of cerebral hyperperfusion syndrome?", ["Headaches, seizures, focal neurologic deficits", "Hoarseness, dysphagia, reflux", "Ptosis, miosis, anhidrosis", "Fever, rash, arthralgia"], 0, "H/A, seizures, focal deficits."),
      Q("treatment", "How is cerebral hyperperfusion syndrome treated?", ["BP control, edema control, anticonvulsants", "IV fluids and pressors", "Thrombolysis", "Immediate carotid ligation"], 0, "Slide 37."),
      Q("what", "After which surgery does cerebral hyperperfusion syndrome classically occur?", ["Carotid endarterectomy", "Below-knee amputation", "Fem-pop bypass", "Varicose vein ablation"], 0, "Carotid surgery complication."),
      Q("treatment", "A patient seizes the night after CEA with BP 200/110. Which BP plan is right?", ["Lower the BP", "Raise the BP with fluids", "Leave BP alone", "Start a pressor"], 0, "BP control."),
      Q("what", "Why does the brain swell in hyperperfusion syndrome?", ["Flow suddenly rises after a tight stenosis is fixed and the vessels cannot clamp down", "The carotid is now blocked", "An embolus blocked the ophthalmic artery", "The vagus nerve was cut"], 0, "Sudden flow increase to a bed that lost autoregulation (standard teaching)."),
      Q("treatment", "Why are anticonvulsants part of hyperperfusion treatment?", ["Seizures are one of its main features", "They lower BP", "They prevent hematoma", "They dissolve emboli"], 0, "Seizures are a feature.")
    ]),

    D("vsurg-amputation", "Amputation", "For a non-salvageable or non-functioning limb (infection, ischemia, trauma, tumor, congenital); level set by blood supply, infection, joint function and prosthesis fit; mortality about 15–30%; treats the result, not the disease.", [
      S("indications", "Indications", "<p>Non-salvageable or non-functioning limb or appendage: <strong>infection, ischemia, trauma, tumor, congenital</strong>.</p>"),
      S("levels", "Levels", Tbl(["Level", "Also called"], [
        ["Toe/finger, transmetatarsal", "Partial foot"],
        ["<strong>Below knee</strong>", "Transtibial"],
        ["<strong>Above knee</strong>", "Transfemoral"],
        ["Forearm / upper arm", "Transradial / transhumeral"],
        ["<strong>Guillotine</strong>", "Quick open cut, often to control severe infection first (standard teaching)"]
      ]) + "<p>Level depends on <strong>blood supply</strong>, <strong>level of infection/necrosis</strong>, <strong>joint function</strong>, <strong>prosthesis fitting</strong>. The tricky part is choosing the level.</p>"),
      S("complications", "Complications", Tbl(["Problem", "Signs", "What to do"], [
        ["Bleeding/hematoma", "Expanding, pulsatile mass, hypovolemia", "Return to OR if significant"],
        ["Infection", "Hot, red, swollen, painful", "<strong>Antibiotics and drainage</strong> (open the wound)"],
        ["Ischemia/breakdown", "Pale or dark skin, necrosis, wound falling apart", "Debridement, revision, secondary intention"]
      ]) + "<p>Also cardiovascular events, DM control, and death: mortality about <strong>15–30%</strong>.</p>" + HY("Amputations treat the RESULT of a disease process; they typically do NOT treat the underlying disease."))
    ], [
      Q("indications", "Which five causes can lead to amputation?", ["Infection, ischemia, trauma, tumor, congenital", "Obesity, age, smoking, sex, race", "Bleeding, hematoma, pseudoaneurysm, emboli, thrombus", "DVT, PE, varicose veins, ulcers, edema"], 0, "Slide 40."),
      Q("levels", "Which factors decide the amputation level?", ["Blood supply, infection or necrosis level, joint function, prosthesis fit", "Age and sex only", "Surgeon preference only", "Insurance only"], 0, "Slide 42."),
      Q("levels", "What is a transtibial amputation?", ["Below knee", "Above knee", "Through the forefoot", "Through the forearm"], 0, "BK = transtibial."),
      Q("complications", "What is the mortality rate after amputation in this lecture?", ["About 15 to 30%", "Under 1%", "About 60%", "Exactly 50%"], 0, "Mortality about 15 to 30%."),
      Q("complications", "An amputation stump is hot, red, swollen and fluctuant. Management?", ["Antibiotics and drainage (open the wound)", "Antibiotics alone", "Observe", "Compression"], 0, "Infection: antibiotics and drainage."),
      Q("complications", "The stump flap edges are black and the wound is separating. Management?", ["Debridement, revision, healing by secondary intention", "Oral antibiotics only", "Early prosthesis", "Ice"], 0, "Ischemia/wound breakdown."),
      Q("complications", "Does an amputation treat a patient's PAD or diabetes?", ["No: it treats the result, not the underlying disease", "Yes, it cures PAD", "Yes, it cures diabetes", "Yes, both"], 0, "Bolded on slide 48."),
      Q("levels", "A septic patient has wet gangrene with ascending infection. Which quick first amputation fits?", ["Guillotine amputation, formal closure later", "Transmetatarsal with primary closure", "Toe amputation only", "No surgery"], 0, "Guillotine to control infection (standard teaching).")
    ])
  ]);
})();
