/*
  Cardio Part 2 Concepts: Vascular Surgery (Gardner deck, uploaded as "Vascular PP 2026SV").
  Source: source-material/cardio-part-2/text/vascular-surgery.md.
  Anything the slides only imply is labeled "Clarification (standard physiology)".
  Question ids are "<concept id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }
  function clar(text) { return "<p><strong>Clarification (standard physiology):</strong> " + text + "</p>"; }
  function traps(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }

  window.CARDIO2_CONCEPTS_VASCULAR_SURGERY = L("vascular-surgery", "Vascular Surgery", [

    D("vsurgc-diffuse-disease", "Atherosclerosis is diffuse: one plaque means more plaques", "CAD, PAD and carotid stenosis are one disease in three places, so every vascular operation is done on a patient whose heart and brain are also at risk.", [
      S("idea", "The idea", "<p>Plaque that narrows a coronary artery is called <strong>CAD</strong>; in the legs it is <strong>PAD</strong>; in the neck it is <strong>carotid artery stenosis</strong>. Same risk factors (diabetes, hypertension, smoking, hyperlipidemia, age, genetics), same disease. <strong>If it is in one artery, it will be in others.</strong></p>"),
      S("chain", "Cause → effect", chain([
        "Risk factors damage arteries everywhere",
        "Plaque forms in the coronaries, carotids and legs at the same time",
        "Leg symptoms bring the patient in first",
        "Hidden CAD and carotid disease remain",
        "Stress of surgery and anesthesia → <strong>MI</strong> or <strong>stroke</strong> are major complications of vascular surgery"
      ])),
      S("bedside", "Why it matters clinically", "<p>Before treating PAD, think about the heart and the carotids. Asymptomatic carotid disease is often found through <strong>screening because of PAD</strong>. Anesthesia complications on every list in this deck start with <strong>MI and stroke</strong>.</p>" + HY("Vascular patients differ from regular patients: plan every operation as if CAD and carotid disease are present.")),
      S("traps", "Common traps", traps([
        "<strong>Treating the leg and forgetting the heart.</strong> MI is a leading complication of vascular surgery.",
        "<strong>Thinking a successful bypass fixed the disease.</strong> The plaque elsewhere keeps growing.",
        "<strong>Missing the carotid.</strong> PAD is a reason to look for carotid disease."
      ]))
    ], [
      Q("idea", "A patient has PAD. What does that predict about his coronary and carotid arteries?", ["They likely have plaque too, because the disease is diffuse", "They are probably normal", "They are protected by the PAD", "They only develop disease after surgery"], 0, "If it is in one artery, it will be in others."),
      Q("chain", "Why are MI and stroke major complications of a leg bypass?", ["The same diffuse atherosclerosis affects the coronaries and carotids, and surgery stresses them", "The bypass sends clot to the heart", "Leg surgery cuts the carotid", "Anesthesia causes plaque"], 0, "Hidden CAD and CAS meet surgical stress."),
      Q("bedside", "A PAD patient with no neuro symptoms is found to have a carotid bruit. Why was he examined for it?", ["PAD is a reason to screen for carotid disease", "Bruits cause claudication", "It is unrelated", "Carotid disease causes leg pain"], 0, "Screening due to PAD."),
      Q("traps", "After a successful fem-pop bypass, has the patient's atherosclerosis been treated?", ["No: the disease elsewhere remains and keeps progressing", "Yes, everywhere", "Yes, in the heart only", "Yes, if the graft is vein"], 0, "Surgery treats one segment."),
      Q("chain", "Diabetes, hypertension, smoking and high LDL increase which conditions?", ["CAD, PAD and carotid stenosis together", "Only CAD", "Only venous disease", "Only PAD"], 0, "Shared risk factors."),
      Q("idea", "Which three names describe the same plaque process in different beds?", ["CAD, PAD, carotid artery stenosis", "DVT, PE, varicose veins", "Raynaud, Buerger, Takayasu", "AAA, dissection, AVM"], 0, "Slide 4.")
    ]),

    D("vsurgc-inflow-outflow", "Inflow and outflow: a bypass is only as good as both ends", "Blood must get into a repair and out the other side; a perfect graft with poor inflow or blocked runoff will clot, and lifestyle decides how long it lasts.", [
      S("idea", "The idea", "<p>Vascular surgery is <strong>all about hemodynamics</strong>: <strong>inflow</strong> (the arteries delivering blood to the repair) and <strong>outflow</strong> (the runoff arteries beyond it). Flow through a graft needs a pressure head going in and somewhere for the blood to go.</p>" + clar("the definitions of inflow and outflow are standard teaching; the slide only names them.")),
      S("chain", "Cause → effect", chain([
        "Poor inflow (e.g. iliac stenosis above a fem-pop bypass) or poor outflow (blocked tibial runoff)",
        "Low flow through the graft",
        "Blood sits still → thrombus",
        "Graft occlusion → loss of pulses, pain, pallor → limb ischemia",
        "Needs the repair dilated or redone"
      ]) + Tbl(["Choice", "Why"], [
        ["<strong>Autologous vein</strong> is the best conduit", "Living vessel, lasts longest"],
        ["<strong>Bypass</strong> over percutaneous stenting long term", "Better long-term management (speaker notes)"],
        ["<strong>Duplex every 3 months</strong>", "Catches a failing graft before it clots; higher 5-year patency"]
      ])),
      S("bedside", "Why it matters clinically", "<p>After surgery, check the pulses: <strong>loss of a pulse</strong> means thrombus, stenosis, occlusion or emboli. Long term, keep the graft open with <strong>antiplatelet and/or anticoagulant therapy</strong>, surveillance and lifestyle change.</p>" + HY("Surgery is temporizing: if the patient keeps smoking, the bypass, angioplasty or stent will ultimately fail.")),
      S("traps", "Common traps", traps([
        "<strong>Only looking at the blocked segment.</strong> The arteries above and below decide whether a bypass works.",
        "<strong>Waiting for symptoms after a bypass.</strong> Duplex surveillance finds the stenosis while it can still be fixed.",
        "<strong>Picking a synthetic graft when a good vein is available.</strong> Autologous vein is best."
      ]))
    ], [
      Q("chain", "A fem-pop bypass is sewn to a tibial artery that is badly diseased below. What happens to graft flow?", ["It falls, so the graft is likely to clot", "It rises", "Nothing changes", "It reverses safely"], 0, "Poor outflow lowers flow and promotes thrombosis."),
      Q("idea", "A tight common iliac stenosis sits above a planned femoral bypass. Which problem is this?", ["Poor inflow", "Poor outflow", "Too much runoff", "No problem"], 0, "Inflow comes from above."),
      Q("bedside", "The day after a bypass, the distal pulse is gone and the foot is pale. What does this mean?", ["The graft or runoff has thrombosed or embolized", "Normal healing", "A wound infection", "Venous congestion"], 0, "Loss of pulses after a bypass."),
      Q("chain", "Why does duplex surveillance every 3 months raise 5-year patency?", ["It finds failing grafts so they can be fixed before they clot", "Ultrasound dissolves plaque", "It replaces antiplatelets", "It lowers cholesterol"], 0, "Intervention based on surveillance."),
      Q("traps", "A patient has a healthy saphenous vein. Which conduit should the surgeon choose?", ["The patient's own vein", "PTFE", "Dacron", "Cadaver graft"], 0, "Autologous vein is best."),
      Q("bedside", "A patient keeps smoking after a successful stent. What will likely happen?", ["The stent will ultimately fail", "It will last forever", "Smoking keeps stents open", "Nothing"], 0, "Surgery only buys time."),
      Q("chain", "Long-term, which is better for PAD: bypass or percutaneous stenting?", ["Bypass", "Stenting", "Equal", "Neither works"], 0, "Bypass better long term.")
    ]),

    D("vsurgc-carotid-emboli", "Carotid plaque causes strokes by throwing emboli upstream", "An unstable carotid plaque ulcerates, grows clot, and sends it into the internal carotid: the eye on the same side, the body on the opposite side.", [
      S("idea", "The idea", "<p>Most carotid strokes are not from the artery slowly closing; they come from <strong>emboli</strong>. A <strong>vulnerable plaque</strong> (thin fibrous cap, lipid core, inflammatory cells, intraplaque hemorrhage) <strong>ulcerates or fissures</strong>, clot forms on it, and pieces travel up the internal carotid.</p>"),
      S("chain", "Cause → effect", chain([
        "Vulnerable plaque at the carotid bifurcation",
        "Cap ulcerates or fissures → thrombus forms on it",
        "Emboli go up the internal carotid",
        "To the <strong>ophthalmic artery</strong> → <strong>ipsilateral amaurosis fugax</strong> (curtain over one eye)",
        "To the hemisphere → <strong>contralateral</strong> weakness or numbness; ipsilateral lesion on CT/MRI"
      ]) + clar("the brain controls the opposite side of the body, but the eye is supplied by the same-side ophthalmic artery.")),
      S("bedside", "Why it matters clinically", "<p>Symptoms in the carotid territory within <strong>6 months</strong> make disease <strong>symptomatic</strong>, which lowers the bar for surgery (70% instead of 80%). <strong>Vertigo and syncope do not count</strong>: they are not carotid-territory symptoms.</p>" + HY("Eye on the SAME side, body on the OPPOSITE side.")),
      S("traps", "Common traps", traps([
        "<strong>Calling dizziness or fainting a carotid symptom.</strong> Not vertigo or syncope.",
        "<strong>Picking the wrong side.</strong> Right eye blindness = right carotid; right arm weakness = left carotid.",
        "<strong>Thinking a total occlusion is the most dangerous lesion to fix.</strong> It is not operated on."
      ]))
    ], [
      Q("chain", "An embolus from the right internal carotid lodges in the ophthalmic artery. What does the patient notice?", ["Brief vision loss in the right eye", "Left eye vision loss", "Left arm weakness only", "Vertigo"], 0, "Ipsilateral amaurosis fugax."),
      Q("chain", "An embolus from the left internal carotid reaches the left hemisphere. Which side of the body is weak?", ["The right side", "The left side", "Both sides", "Neither"], 0, "Contralateral deficits."),
      Q("idea", "Which plaque feature makes it likely to rupture and embolize?", ["A thin fibrous cap over a lipid core", "Thick calcified cap", "Small size alone", "No inflammation"], 0, "Vulnerable plaque."),
      Q("bedside", "Which symptom does NOT make carotid stenosis symptomatic?", ["Syncope", "Amaurosis fugax", "Contralateral arm numbness", "Contralateral facial droop"], 0, "NOT vertigo or syncope."),
      Q("bedside", "A patient had right-hand clumsiness 4 months ago. His left carotid is 72% narrowed. Why does that history matter?", ["It makes the stenosis symptomatic, so surgery is indicated at 70% or more", "It does not matter", "It means the right carotid is the problem", "It rules out surgery"], 0, "Symptomatic within 6 months: 70 to 99%."),
      Q("traps", "A patient's left eye goes dark for a minute. Which carotid should be imaged first?", ["Left", "Right", "Neither", "The vertebral artery"], 0, "Same-side eye."),
      Q("chain", "An ulcerated plaque fissures and grows a thrombus. What is the next step in the stroke chain?", ["Pieces embolize up the internal carotid", "The plaque shrinks", "The vertebral artery closes", "BP drops"], 0, "Slide 29: fissured plaque with thrombosis.")
    ]),

    D("vsurgc-prophylactic-surgery", "Carotid surgery is prophylactic: trade a small risk now for a bigger one later", "CEA prevents future strokes but carries a 1–3% stroke risk itself, so it only pays off when the stenosis is tight, the patient is fit, and they will live long enough to benefit.", [
      S("idea", "The idea", "<p>Carotid surgery does not fix a stroke that already happened; it lowers the chance of the next one. It has its own <strong>1–3% operative stroke risk</strong>. Without surgery, stroke risk depends on the <strong>degree of stenosis</strong>. Surgery wins only when the natural risk is higher than the operative risk, and the patient lives long enough to collect the benefit.</p>"),
      S("chain", "Cause → effect", chain([
        "Tighter stenosis and recent symptoms → higher stroke risk without surgery",
        "Symptomatic 70–99% or asymptomatic 80–99% → natural risk outweighs the 1–3% operative risk",
        "Fit patient (no severe heart, lung or systemic disease), accessible lesion, non-debilitating stroke",
        "<strong>Life expectancy over 5 years</strong> → time to benefit",
        "CEA or stent, plus medical therapy for everyone"
      ]) + clar("total occlusion is not operated on because there is no flow left to restore and the risk of pushing clot into the brain is high (standard teaching).")),
      S("bedside", "Why it matters clinically", "<p>Everyone gets statins, antiplatelet, BP and DM control, Mediterranean diet and smoking cessation. Before surgery, control BP and comorbidities; CEA can be done under <strong>local</strong> anesthesia, so anesthesia risk is low.</p>" + HY("<strong>Do not operate on a total occlusion.</strong> Debilitating stroke, short life expectancy, or severe comorbidity also argue against surgery.")),
      S("traps", "Common traps", traps([
        "<strong>Operating on 100% occlusion.</strong> Do not.",
        "<strong>Using the symptomatic threshold for an asymptomatic patient.</strong> Asymptomatic needs 80–99%.",
        "<strong>Stopping medical therapy after CEA.</strong> Medical therapy is for everyone."
      ]))
    ], [
      Q("idea", "Why is carotid surgery called prophylactic?", ["It lowers the chance of a future stroke rather than treating one that happened", "It cures atherosclerosis", "It is cosmetic", "It is done only in emergencies"], 0, "Prophylactic surgery."),
      Q("chain", "A symptomatic patient's stenosis rises from 60% to 85%. What happens to the case for surgery?", ["It gets stronger: higher natural stroke risk", "It gets weaker", "No change", "Surgery becomes forbidden"], 0, "Non-operative risk depends on degree of stenosis."),
      Q("chain", "A fit 70-year-old has 85% asymptomatic stenosis but metastatic cancer with 1-year survival. Why not operate?", ["Life expectancy under 5 years means no time to benefit", "The stenosis is too mild", "Asymptomatic disease is never treated", "Local anesthesia is impossible"], 0, "Life expectancy over 5 years."),
      Q("traps", "Duplex shows 100% occlusion of the internal carotid. Should it be operated on?", ["No", "Yes, urgently", "Yes, with a stent", "Only if asymptomatic"], 0, "Do not operate on total occlusion."),
      Q("bedside", "Why is the anesthesia risk of CEA low?", ["It can be done under local anesthesia", "It takes 5 minutes", "No incision is needed", "Patients are always young"], 0, "Local or general."),
      Q("chain", "The operative stroke risk of CEA is 1 to 3%. When is surgery worth it?", ["When the stroke risk without surgery is higher", "Always", "Never", "Only when the artery is fully blocked"], 0, "Weigh operative vs non-operative risk."),
      Q("traps", "An asymptomatic patient has 75% stenosis. Using the lecture's thresholds, what is the plan?", ["Medical therapy", "CEA", "Stent", "Emergency surgery"], 0, "Asymptomatic needs 80 to 99%.")
    ]),

    D("vsurgc-carotid-sinus-hyperperfusion", "Working on the carotid touches the BP sensor and changes brain flow", "The carotid sinus senses BP, so handling it makes BP swing; fixing a tight stenosis floods a brain that forgot how to limit flow, causing hyperperfusion.", [
      S("idea", "The idea", "<p>The <strong>carotid sinus</strong> is the body's BP sensor; the <strong>carotid body</strong> senses O2, CO2, pH and temperature. CEA works right on them. And the brain beyond a tight stenosis has been living on low flow with its arterioles wide open.</p>"),
      S("chain", "Cause → effect", chain([
        "Surgery disturbs the carotid sinus → <strong>BP lability</strong> (swings high or low) → monitor in ICU or step-down",
        "Stenosis removed → full pressure reaches a brain bed that stayed maximally dilated",
        "Vessels can't clamp down → too much flow → edema",
        "<strong>Headache, seizures, focal neurologic deficits</strong> = cerebral hyperperfusion syndrome",
        "Treat: <strong>BP control</strong>, <strong>edema control</strong>, <strong>anticonvulsants</strong>"
      ]) + clar("loss of autoregulation downstream of a long-standing stenosis is the standard explanation; the slide lists the syndrome and its treatment.")),
      S("bedside", "Why it matters clinically", Tbl(["After CEA", "Do"], [
        ["BP swings", "ICU or step-down monitoring"],
        ["Neck swelling", "Rapid return to OR"],
        ["Stroke (1–3%)", "Supportive care"],
        ["Headache, seizure, high BP", "Lower BP, treat edema, anticonvulsants"],
        ["Hoarseness, dysphagia", "Vagus or recurrent laryngeal injury"],
        ["Ptosis, miosis, anhidrosis", "Sympathetic injury: Horner syndrome"]
      ])),
      S("traps", "Common traps", traps([
        "<strong>Giving fluids for a post-CEA headache with high BP.</strong> Hyperperfusion needs BP lowered.",
        "<strong>Mixing up sinus and body.</strong> Sinus = pressure; body = gases.",
        "<strong>Watching a growing neck hematoma.</strong> It goes back to the OR quickly."
      ]))
    ], [
      Q("chain", "The surgeon manipulates the carotid sinus during CEA. What happens to blood pressure?", ["It can swing unpredictably (BP lability)", "It stays perfectly stable", "It always rises permanently", "Only heart rate changes"], 0, "Carotid sinus controls BP."),
      Q("chain", "A 95% stenosis is removed. What happens to flow in the brain beyond it right after?", ["It rises sharply, and vessels that stayed dilated cannot limit it", "It falls", "It stops", "It does not change"], 0, "Hyperperfusion."),
      Q("bedside", "The night after CEA: severe headache, seizure, BP 205/110. What should be done to the BP?", ["Lower it", "Raise it", "Ignore it", "Give a fluid bolus"], 0, "BP control."),
      Q("idea", "Which carotid structure senses oxygen and carbon dioxide?", ["Carotid body", "Carotid sinus", "Circle of Willis", "Ophthalmic artery"], 0, "Carotid body = chemoreceptor."),
      Q("traps", "After CEA, BP is 90/50 and HR 55 with a dry, stable neck. Which structure is most likely responsible?", ["The carotid sinus", "The carotid body", "The hypoglossal nerve", "The recurrent laryngeal nerve"], 0, "BP lability from the carotid sinus."),
      Q("bedside", "Why are anticonvulsants part of hyperperfusion treatment?", ["Seizures are a main feature", "They lower cholesterol", "They prevent hematoma", "They dilate the carotid"], 0, "Headache, seizures, focal deficits."),
      Q("chain", "A patient's neck swells quickly after CEA. Why is the response a rapid return to the OR?", ["A growing neck hematoma can compress the airway", "It is always infected", "It means a stroke", "To place a stent"], 0, "Hematoma: rapid return to OR (airway, standard teaching).")
    ]),

    D("vsurgc-amputation-level", "Amputation level follows the blood supply, and it treats the result, not the disease", "Cut where tissue is alive and infection-free, keep working joints for a prosthesis; the amputation removes dead tissue but the PAD and diabetes stay.", [
      S("idea", "The idea", "<p>Amputate a <strong>non-salvageable or non-functioning</strong> limb (infection, ischemia, trauma, tumor, congenital). The stump must heal, so the cut goes where <strong>blood supply</strong> is good and above the <strong>infection or necrosis</strong>, while saving <strong>joint function</strong> and allowing <strong>prosthesis fitting</strong>.</p>"),
      S("chain", "Cause → effect", chain([
        "Cut too low (poor blood supply) → stump ischemia, wound breakdown",
        "→ debridement, revision, healing by secondary intention",
        "Cut through infected tissue → wound infection → antibiotics and drainage",
        "Cut too high → loses the knee → harder to walk with a prosthesis",
        "Even a perfect amputation leaves the underlying disease → cardiovascular events, DM control problems, mortality about 15–30%"
      ]) + clar("keeping the knee joint makes prosthetic walking much easier, which is why joint function matters (standard teaching).")),
      S("bedside", "Why it matters clinically", "<p>In a septic patient, a quick <strong>guillotine</strong> amputation controls infection first, with a formal closure later (standard teaching).</p>" + HY("AMPUTATIONS TREAT THE RESULT OF A DISEASE PROCESS; THEY TYPICALLY DO NOT TREAT THE UNDERLYING DISEASE.")),
      S("traps", "Common traps", traps([
        "<strong>Thinking the amputation cures PAD or diabetes.</strong> It does not.",
        "<strong>Treating an infected stump with antibiotics alone.</strong> Open and drain it.",
        "<strong>Choosing the level by the visible wound only.</strong> Blood supply decides whether the stump heals."
      ]))
    ], [
      Q("chain", "A below-knee amputation is done where calf blood flow is poor. What is likely to happen?", ["The stump breaks down and needs revision", "It heals faster", "Nothing", "The PAD is cured"], 0, "Level depends on blood supply."),
      Q("chain", "A stump becomes hot, red, swollen and fluctuant. Antibiotics alone have not helped. What is missing?", ["Opening and draining the wound", "A higher antibiotic dose only", "Compression", "A prosthesis"], 0, "Antibiotics and drainage."),
      Q("idea", "Why do surgeons try to save the knee?", ["Joint function makes prosthetic walking much easier", "The knee never gets infected", "It shortens surgery", "It lowers BP"], 0, "Joint function and prosthesis fitting."),
      Q("traps", "After a BKA, the family says he no longer needs his statin or diabetes care. Correct response?", ["He still needs them: the amputation treated the result, not the disease", "Correct, he is cured", "He only needs the statin", "He only needs insulin"], 0, "Amputations do not treat the underlying disease."),
      Q("bedside", "A septic patient with wet gangrene and ascending infection needs surgery now. Which approach fits?", ["Quick guillotine amputation, formal closure later", "Long reconstructive bypass first", "Transmetatarsal amputation with closure", "Wait for antibiotics to work"], 0, "Guillotine (standard teaching)."),
      Q("chain", "Why is mortality after amputation so high (about 15 to 30%)?", ["Patients have diffuse vascular disease and diabetes that the amputation doesn't fix", "The surgery itself is always fatal", "Prostheses cause death", "Amputation causes cancer"], 0, "Cardiovascular events and DM control."),
      Q("idea", "Which four factors decide the amputation level?", ["Blood supply, infection or necrosis level, joint function, prosthesis fitting", "Age, weight, height, sex", "Surgeon, hospital, time, cost", "Pain, color, temperature, swelling"], 0, "Slide 42.")
    ])
  ]);
})();
