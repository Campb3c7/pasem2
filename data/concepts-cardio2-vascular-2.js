/*
  Cardio Part 2 Concepts: Vascular Disease Part 2 (venous disease, DVT, PE).
  Source: source-material/cardio-part-2/text/vascular-disease-part-2.md.
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

  window.CARDIO2_CONCEPTS_VASCULAR_2 = L("vascular-2", "Vascular Disease Part 2", [

    D("vas2c-venous-hypertension", "Venous insufficiency: when the leg pump fails, pressure pools at the ankle", "Leg veins return blood uphill using calf muscle squeezes and one-way valves; when valves leak or the pump fails, pressure stays high in the lower leg and slowly damages the skin.", [
      S("idea", "The idea", "<p>Normal venous return needs two things: <strong>calf muscle contraction</strong> (the pump) and <strong>competent valves</strong> (so blood doesn't fall back). Break either one, block the outflow, or raise venous pressure (obesity, heart failure, compression) and blood <strong>refluxes and pools</strong> → <strong>venous hypertension</strong>.</p><p>High pressure stretches the veins (varicose) and damages more valves, a vicious cycle. Over time it pushes fluid and red cells out of capillaries into the skin.</p>"),
      S("chain", "Cause → effect", chain([
        "Valve incompetence, weak calf pump, or outflow obstruction",
        "Reflux and pooling → venous hypertension",
        "More valve damage, dilated tortuous veins",
        "Fluid leaks → edema (worse at end of day, better with elevation)",
        "RBCs leak → hemosiderin → brown pigmentation at the medial ankle → stasis dermatitis → shallow, wet medial-ankle ulcer"
      ]) + Tbl(["", "Venous ulcer", "Arterial ulcer"], [
        ["Location", "Medial ankle (low)", "Distal: toes, pressure points"],
        ["Look", "Shallow, exudative, red granulation, irregular", "Punched out, dry, pale base"],
        ["Surrounding skin", "Brown hemosiderin, dermatitis, edema", "Shiny, hairless, cool, weak pulses"]
      ]) + clar("the arterial ulcer column is standard teaching for comparison.")),
      S("bedside", "Why it matters clinically", "<p>Every treatment helps the pump or lowers the pressure: <strong>elevation</strong>, <strong>walking and calf exercises</strong>, avoiding prolonged standing or sitting, weight loss, and <strong>compression</strong>. Compression squeezes the leg from outside, which would also squeeze shut a diseased artery, so <strong>check for PAD (ABI) first</strong>.</p>" + HY("Venous ulcer care: compression (if ABI normal), wound care, Unna boot; refer if nonhealing or PAD coexists.")),
      S("traps", "Common traps", traps([
        "<strong>Compressing before checking the ABI.</strong> Compression can worsen arterial ischemia.",
        "<strong>Calling brown medial-ankle skin a rash.</strong> It's hemosiderin from extravasated RBCs.",
        "<strong>Telling the patient to rest the legs all day.</strong> Walking works the calf pump."
      ]))
    ], [
      Q("idea", "What two things normally push leg venous blood back to the heart?", ["Calf muscle contraction and competent one-way valves", "Arterial pressure and gravity", "Breathing and the heart's suction alone", "Lymphatics and skin tension"], 0, "Normal venous return needs a muscle pump and competent valves."),
      Q("chain", "Why does chronic venous insufficiency cause brown discoloration of the medial ankle?", ["RBCs leak into the dermis and break down into hemosiderin", "Melanin increases from sun", "Bilirubin deposits", "Arterial ischemia"], 0, "Hemosiderin from extravasated RBCs."),
      Q("chain", "Venous valves become incompetent. What happens to pressure in the lower leg veins?", ["It rises because blood refluxes and pools", "It falls", "It is unchanged", "It drops only when standing"], 0, "Reflux and pooling cause venous hypertension."),
      Q("bedside", "Before starting compression stockings for venous ulcers, what should you check?", ["An ABI to rule out PAD", "A D-dimer", "An echocardiogram", "Blood cultures"], 0, "Compression therapy assumes a normal ABI."),
      Q("traps", "Why could compression harm a patient with severe PAD?", ["External pressure further reduces already poor arterial inflow", "It raises venous pressure", "It causes DVT", "It dilates the arteries too much"], 0, "Clarification (standard teaching): compression can worsen arterial ischemia."),
      Q("bedside", "A shallow, weeping ulcer with red granulation sits low on the medial ankle surrounded by brown skin. What type is it?", ["Venous stasis ulcer", "Arterial ulcer", "Diabetic neuropathic ulcer", "Pressure ulcer"], 0, "Classic venous ulcer location and appearance."),
      Q("idea", "How does walking help venous insufficiency?", ["Calf contractions pump blood up the leg", "It raises arterial pressure", "It closes the valves permanently", "It thins the blood"], 0, "Walking and calf exercises improve venous return."),
      Q("chain", "Which condition raises venous pressure in the legs even with normal valves?", ["Heart failure", "Hypothyroidism", "Anemia", "Asthma"], 0, "Obesity, heart failure, or venous compression raise venous pressure.")
    ]),

    D("vas2c-virchow", "Virchow's triad: why clots form where they do", "Venous clots form when blood is slow, the vessel wall is injured, or the blood itself is primed to clot; most real patients stack two or three.", [
      S("idea", "The idea", "<p>Blood normally stays liquid because it keeps moving, the endothelium is smooth, and clotting factors are balanced. Venous thrombosis happens when one or more of those fails:</p><ul><li><strong>Stasis:</strong> slow flow lets clotting factors accumulate (immobilization, long flights, hospitalization, paralysis, heart failure).</li><li><strong>Endothelial injury:</strong> exposed wall triggers clotting (trauma, surgery, central lines, PICCs, inflammation).</li><li><strong>Hypercoagulability:</strong> blood is primed to clot (factor V Leiden and other inherited; cancer, pregnancy, estrogen, APS acquired).</li></ul>"),
      S("chain", "Cause → effect", chain([
        "A risk factor hits one arm of the triad",
        "Clot forms, usually in a calf vein",
        "15–30% propagate proximally",
        "Proximal DVT raises PE risk from about 10% to about 50%",
        "Clot breaks loose → travels through the right heart → lungs"
      ]) + Tbl(["Scenario", "Arms of the triad hit"], [
        ["Hip replacement, then bed rest", "Injury + stasis"],
        ["Pregnant on a long flight", "Hypercoagulable + stasis"],
        ["Cancer patient with a PICC", "Hypercoagulable + injury"],
        ["Smoker on estrogen OCP", "Hypercoagulable"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The triad tells you who to suspect and who to prevent clots in. It also explains <strong>Trousseau syndrome</strong>: migratory superficial thrombophlebitis from a cancer-driven hypercoagulable state, which can be the first sign of cancer.</p>" + HY("Provoked (temporary risk, like surgery) vs unprovoked VTE sets how long anticoagulation lasts.")),
      S("traps", "Common traps", traps([
        "<strong>Thinking a young patient can't clot.</strong> Estrogen, pregnancy, and inherited thrombophilia count.",
        "<strong>Dismissing migratory phlebitis.</strong> Look for cancer.",
        "<strong>Forgetting lines.</strong> PICCs and central lines injure the endothelium (upper-extremity DVT)."
      ]))
    ], [
      Q("chain", "A patient is bedbound for a week after hip surgery. Which arms of Virchow's triad apply?", ["Stasis and endothelial injury", "Hypercoagulability only", "None", "Endothelial injury only"], 0, "Surgery injures vessels; immobility causes stasis."),
      Q("idea", "Why does prolonged immobility promote venous clotting?", ["Slow flow lets clotting factors accumulate", "It damages the endothelium directly", "It raises platelet counts", "It lowers fibrinogen"], 0, "Stasis is one arm of the triad."),
      Q("chain", "A patient with a PICC line develops arm swelling. Which arm of the triad is the line responsible for?", ["Endothelial injury", "Stasis", "Hypercoagulability", "None"], 0, "Long-term venous catheters injure the endothelium."),
      Q("bedside", "A patient has repeated superficial thrombophlebitis in different places over weeks. What should you consider?", ["An underlying cancer (Trousseau syndrome)", "Simple varicose veins", "Peripheral arterial disease", "Dehydration"], 0, "Migratory thrombophlebitis can be an early sign of cancer."),
      Q("chain", "A calf DVT extends into the popliteal and femoral veins. What happens to PE risk?", ["It rises substantially (about 10% to 50%)", "It falls", "It is unchanged", "PE becomes impossible"], 0, "Proximal progression increases embolism risk."),
      Q("traps", "Which of these is an acquired hypercoagulable state?", ["Pregnancy", "Prolonged sitting", "Central line", "Surgery"], 0, "Pregnancy, cancer, estrogen, APS are acquired hypercoagulable states."),
      Q("idea", "Where do most DVTs start?", ["In the calf veins", "In the IVC", "In the pulmonary artery", "In the superficial saphenous vein"], 0, "DVT commonly originates in the calf.")
    ]),

    D("vas2c-superficial-vs-deep", "Superficial vs deep: what decides if a clot needs anticoagulation", "A superficial clot is mainly an inflammation problem unless it's near the deep system; a deep clot can reach the lungs, so it gets anticoagulated.", [
      S("idea", "The idea", "<p>A clot is dangerous mainly if it can <strong>travel to the lungs</strong>. Superficial veins drain into the deep system only at specific junctions, so a <strong>superficial thrombophlebitis</strong> far from them is mostly a local, painful inflammation. Treat it with <strong>NSAIDs, warm compresses, removing the IV</strong>.</p><p>When a superficial clot sits <strong>near the saphenofemoral or saphenopopliteal junction</strong>, it can extend into the deep system, so it is treated like a DVT and anticoagulated.</p>"),
      S("chain", "Cause → effect", chain([
        "Superficial clot (IV site, varicose vein) → red, tender, palpable cord",
        "Far from the junction → low risk → NSAIDs, warm compresses, remove IV",
        "Near the saphenofemoral or saphenopopliteal junction → can enter deep veins → anticoagulate",
        "Deep clot → can embolize → anticoagulate (and decide inpatient vs outpatient)",
        "Massive venous outflow obstruction → phlegmasia cerulea dolens → limb ischemia → urgent vascular surgery"
      ]) + Tbl(["", "Superficial thrombophlebitis", "DVT"], [
        ["Exam", "Red, tender, palpable cord", "Unilateral edema, calf pain; cord usually not felt (deep)"],
        ["PE risk", "Low unless near a junction", "Real, higher if proximal"],
        ["Treatment", "NSAIDs, warm compress", "Anticoagulation"],
        ["Antibiotics", "Only if infectious", "No"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Get a venous duplex if you suspect either, because you can't tell how close the clot is to the deep system by looking. A DVT patient can go home on anticoagulation if stable, low bleeding risk, adequate renal function, and good support. Admit massive iliofemoral DVT, DVT with PE, or high bleeding risk.</p>" + HY("Post-thrombotic syndrome: chronic venous insufficiency after a DVT; prevent it by preventing recurrence.")),
      S("traps", "Common traps", traps([
        "<strong>Anticoagulating every superficial clot.</strong> Not indicated unless near a junction.",
        "<strong>Giving antibiotics for routine thrombophlebitis.</strong> Only if infectious.",
        "<strong>Relying on a palpable cord for DVT.</strong> Deep veins usually can't be felt."
      ]))
    ], [
      Q("idea", "Why does most superficial thrombophlebitis not need anticoagulation?", ["Superficial clots far from the deep system rarely embolize", "Superficial clots dissolve in hours", "Anticoagulants don't work on superficial veins", "They are always infected"], 0, "Anticoagulants generally not indicated for most SVT."),
      Q("chain", "A superficial thrombus lies 2 cm from the saphenofemoral junction. Why change management?", ["It can extend into the deep system, so it is anticoagulated", "It is more painful", "It must be infected", "It always needs surgery"], 0, "Near the junction: anticoagulate."),
      Q("bedside", "A tender red cord develops at an old IV site without fever. What is the treatment?", ["Remove the IV, NSAIDs, warm compresses", "IV antibiotics", "Full anticoagulation", "tPA"], 0, "Conservative treatment for uncomplicated superficial thrombophlebitis."),
      Q("traps", "Why is a palpable cord unusual in DVT?", ["The deep veins lie too deep to feel", "DVTs are too small", "DVTs dissolve quickly", "DVTs are always in the arm"], 0, "Most DVT will not have palpable cord because they are deep."),
      Q("chain", "A massive iliofemoral DVT causes a blue, swollen, painful leg with poor perfusion. What is happening?", ["Venous outflow obstruction is so severe that arterial inflow is compromised (phlegmasia cerulea dolens)", "A simple superficial clot", "Arterial embolism", "Cellulitis"], 0, "Massive venous hypertension leads to ischemia; urgent vascular surgery."),
      Q("bedside", "Which DVT patient should be admitted rather than treated at home?", ["One with a massive iliofemoral DVT", "Stable with low bleeding risk and good support", "Stable with normal renal function", "One who prefers oral therapy"], 0, "Massive DVT, PE, bleeding risk, or severe renal impairment warrant admission."),
      Q("chain", "Months after a DVT, a patient has chronic leg pain and swelling. Why?", ["The clot damaged the valves, causing post-thrombotic venous insufficiency", "The clot is still growing", "A new arterial blockage", "Lymphedema from anticoagulants"], 0, "Post-thrombotic syndrome is venous insufficiency after DVT.")
    ]),

    D("vas2c-rv-strain", "PE: the right ventricle hits a wall", "A clot in the pulmonary arteries raises resistance the thin right ventricle can't push against; it dilates, starves the left heart of preload, and pressure collapses.", [
      S("idea", "The idea", "<p>The RV is built to pump into a <strong>low-resistance</strong> lung. A PE suddenly blocks part of that bed. Two problems follow:</p><ol><li><strong>Gas exchange:</strong> ventilated lung with no blood flow → hypoxia, tachypnea.</li><li><strong>RV strain:</strong> the RV dilates and fails against the resistance. Less blood crosses the lungs, so the <strong>LV gets less preload</strong> → low output → hypotension, syncope, shock, death.</li></ol><p>\"Massive\" means <strong>hemodynamic collapse</strong> (SBP &lt; 90 or a drop ≥ 40), not clot size.</p>" + clar("the dilated RV bowing the septum into the LV is standard physiology.")),
      S("chain", "Cause → effect", chain([
        "DVT fragment → right heart → pulmonary artery",
        "Pulmonary resistance rises; V/Q mismatch → hypoxia",
        "RV dilates and strains → troponin and BNP leak; S1Q3T3, RBBB, V1–V4 TWI; JVD, loud or split S2",
        "Less flow reaches the LV → low preload → low output",
        "Hypotension → obstructive shock → cardiac arrest"
      ]) + Tbl(["Risk class", "BP", "RV strain / biomarkers", "Treatment"], [
        ["Low", "Normal", "None", "DOAC; outpatient if PESI low"],
        ["Intermediate (submassive)", "Normal", "RV dysfunction and/or ↑ troponin/BNP", "LMWH, admit"],
        ["High (massive)", "SBP &lt; 90 or drop ≥ 40", "Usually", "Pressors + systemic tPA"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The most common EKG finding is just <strong>sinus tachycardia</strong>, and the CXR is usually normal, so neither rules PE out. Be <strong>cautious with IV fluids</strong> when there are signs of right heart failure: an overstretched RV can get worse.</p>" + clar("excess fluid dilating the RV further and pushing the septum into the LV is standard physiology.") + HY("Massive = hemodynamic compromise, not the size of the clot.")),
      S("traps", "Common traps", traps([
        "<strong>Calling a saddle PE with normal BP 'massive'.</strong> Classification is by hemodynamics.",
        "<strong>Excluding PE with a normal EKG or CXR.</strong> Both are often normal.",
        "<strong>Pouring in fluids for RV failure.</strong> Use caution; pressors support BP."
      ]))
    ], [
      Q("idea", "Why does a large PE cause hypotension?", ["The strained RV can't push enough blood through the lungs, so the LV loses preload", "The clot releases toxins", "The LV is blocked directly", "Hypoxia dilates all arteries"], 0, "RV strain decreases preload to the left heart."),
      Q("chain", "In submassive PE, why are troponin and BNP elevated?", ["The strained, dilated RV releases them", "The LV is infarcted", "The kidneys fail", "The lab is wrong"], 0, "RV dysfunction and/or elevated markers define intermediate risk."),
      Q("bedside", "A PE patient has BP 82/50 and a dilated RV. How is this classified?", ["High risk (massive)", "Intermediate risk", "Low risk", "Not a PE"], 0, "Sustained SBP under 90 = high risk."),
      Q("traps", "A large saddle PE is found but BP is normal and there is no RV strain. Is it massive?", ["No, massive refers to hemodynamic compromise, not size", "Yes, saddle PE is always massive", "Yes, if bilateral", "Only if hemoptysis is present"], 0, "Massive refers to hemodynamic compromise, not size."),
      Q("bedside", "What is the most common EKG finding in PE?", ["Sinus tachycardia", "S1Q3T3", "New RBBB", "ST elevation in V1-V4"], 0, "Sinus tachycardia is most common; the EKG can be normal."),
      Q("chain", "Why are IV fluids given cautiously in PE with right heart strain?", ["More volume can overstretch the failing RV and worsen output", "Fluids dissolve the clot too fast", "Fluids cause hyperkalemia", "Fluids lower oxygen levels"], 0, "Be cautious if EKG shows right heart failure. Clarification (standard physiology): overstretching the RV."),
      Q("chain", "Why does a PE cause hypoxia even with clear lungs on CXR?", ["Ventilated lung is not perfused, so gas exchange fails", "Fluid fills the alveoli", "The airways collapse", "The diaphragm is paralyzed"], 0, "Blocked flow leads to inadequate O2 exchange."),
      Q("bedside", "Which exam findings suggest RV strain in PE?", ["JVD and an accentuated or split second heart sound", "Clubbing", "Wheezing only", "A diastolic murmur at the apex"], 0, "Findings associated with right heart strain.")
    ]),

    D("vas2c-pretest", "Pretest probability decides the PE work-up", "D-dimer is very sensitive but not specific, so it can only rule PE out in patients who were unlikely to have it; high suspicion goes straight to imaging.", [
      S("idea", "The idea", "<p>Any clot breakdown raises <strong>D-dimer</strong>: PE, but also surgery, cancer, pregnancy, infection, age. So a <strong>positive</strong> D-dimer means little, while a <strong>negative</strong> one is reassuring only if your suspicion was low to begin with.</p><p>That is why you first estimate probability:</p><ul><li><strong>Low suspicion:</strong> apply <strong>PERC</strong>. All 8 negative → PE excluded, no test. Any positive → D-dimer.</li><li><strong>Wells / modified Wells:</strong> PE unlikely → D-dimer; PE likely → go straight to <strong>CTA</strong>.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Clinical gestalt: low suspicion?",
        "PERC all negative → stop; any positive → D-dimer",
        "Wells/modified Wells unlikely → D-dimer: negative rules out, positive → CTA",
        "Wells likely → CTA directly (a negative D-dimer can't override high suspicion)",
        "CTA contraindicated (contrast allergy, renal failure) or pregnant with normal CXR → V/Q scan"
      ]) + Tbl(["PERC (all must be negative)", ""], [
        ["Age ≥ 50", "HR ≥ 100"],
        ["SaO2 &lt; 95%", "Hemoptysis"],
        ["Estrogen use", "Surgery/trauma/hospitalization in 4 weeks"],
        ["Prior VTE", "Unilateral leg swelling"]
      ]) + Mn("Remember", "D-dimer: negative rules OUT (sensitive); positive rules nothing IN (not specific).")),
      S("bedside", "Why it matters clinically", "<p>The same logic runs DVT work-ups: low probability → D-dimer; moderate/high → compression ultrasound. In pregnancy D-dimer rises with gestational age, so it becomes less useful as pregnancy goes on, though a negative one with low suspicion can still exclude PE. If DVT symptoms are present, start with leg ultrasound: if positive, treat, and chest imaging may not be needed.</p>"),
      S("traps", "Common traps", traps([
        "<strong>Using PERC in moderate or high suspicion.</strong> It is only for low suspicion.",
        "<strong>Ordering D-dimer when PE is likely.</strong> Go straight to CTA.",
        "<strong>Treating a positive D-dimer as a diagnosis.</strong> It just means image."
      ]))
    ], [
      Q("idea", "Why can a negative D-dimer rule out PE but a positive one cannot rule it in?", ["It is very sensitive but not specific", "It is very specific but not sensitive", "It measures the clot size", "It only rises in PE"], 0, "Highly sensitive, not specific."),
      Q("chain", "A 32-year-old with low suspicion for PE has HR 104 and no other PERC criteria. What is next?", ["D-dimer", "Stop, PE excluded", "CTA immediately", "V/Q scan"], 0, "Any positive PERC criterion means further assessment, typically D-dimer."),
      Q("chain", "A patient's modified Wells score is 6 (PE likely). What is the next step?", ["CT pulmonary angiography", "D-dimer", "PERC", "Discharge"], 0, "PE likely: go straight to imaging."),
      Q("traps", "Why shouldn't PERC be used in a patient with moderate suspicion?", ["It is validated only in low-suspicion patients", "It is too expensive", "It requires a CT", "It only applies to pregnancy"], 0, "PERC is only for low clinical suspicion."),
      Q("bedside", "A patient with suspected PE has a severe contrast allergy and a normal CXR. What imaging fits?", ["V/Q scan", "CTA anyway", "D-dimer only", "Echo only"], 0, "V/Q is ideal with a normal CXR or when contrast should be avoided."),
      Q("traps", "A post-op patient with high PE suspicion has a positive D-dimer. What does it tell you?", ["Little on its own; surgery also raises D-dimer, so image", "PE is confirmed", "PE is excluded", "Start tPA"], 0, "Not specific; recent surgery elevates it."),
      Q("bedside", "Why does D-dimer become less useful as pregnancy progresses?", ["D-dimer levels rise with gestational age", "It is never elevated in pregnancy", "It harms the fetus", "It requires contrast"], 0, "D-dimer increases with gestational age; a negative result with low suspicion can still exclude PE."),
      Q("chain", "A patient with low probability for DVT has a normal D-dimer. What next?", ["DVT is ruled out", "Compression ultrasound", "CT venogram", "Start anticoagulation"], 0, "Low probability + normal D-dimer: DVT ruled out.")
    ]),

    D("vas2c-stop-vs-dissolve", "Anticoagulants stop growth; tPA dissolves; filters only catch", "Anticoagulation doesn't dissolve a clot, it prevents growth and new clots while the body breaks it down; thrombolysis actively dissolves at a bleeding price, so it's saved for the crashing patient.", [
      S("idea", "The idea", "<p>Three tools, three jobs:</p><ul><li><strong>Anticoagulants</strong> (DOAC, LMWH, UFH, warfarin) stop the clot from growing and prevent new ones. They <strong>do not dissolve</strong> it; the body's own fibrinolysis does that slowly. Cornerstone for almost everyone.</li><li><strong>tPA</strong> actively breaks down the clot. Fast, but the major risk is <strong>bleeding, including intracranial</strong>. Reserved for <strong>high-risk PE</strong> (persistent hypotension, obstructive shock, arrest).</li><li><strong>IVC filter</strong> traps clots from the legs. It <strong>does not treat VTE</strong>. Used when anticoagulation is absolutely contraindicated, or PE recurs despite it.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Stable PE/DVT → anticoagulate (DOAC preferred) → no growth, no new clot → body clears it",
        "Massive PE with shock → no time to wait → systemic tPA (heparin held during infusion)",
        "tPA contraindicated (bleed, recent stroke, dissection) → catheter-directed therapy or surgical embolectomy",
        "Can't anticoagulate at all (active bleeding) → IVC filter catches future emboli",
        "Duration: provoked 3 months; unprovoked ≥ 3 months then reassess; recurrent or persistent risk → extended/indefinite"
      ]) + Tbl(["Situation", "Preferred anticoagulant"], [
        ["Most patients", "DOAC (apixaban, rivaroxaban)"],
        ["Pregnancy", "LMWH (warfarin contraindicated)"],
        ["Antiphospholipid syndrome", "Warfarin"],
        ["Active cancer", "DOAC or LMWH"],
        ["Rapid adjustment or procedure likely", "UFH"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Patient education follows the mechanism: the drug <strong>won't dissolve the clot</strong>, it keeps it from growing, so take every dose; watch for bleeding. Duration follows the risk: a clot after a long flight or surgery (temporary cause) needs 3 months; one with no cause or a lasting cause (cancer, APS) needs longer.</p>" + HY("Massive PE: pressors + systemic alteplase; LMWH started while arranging, held during tPA.")),
      S("traps", "Common traps", traps([
        "<strong>\"The blood thinner dissolves the clot.\"</strong> It prevents growth; the body dissolves it.",
        "<strong>Giving tPA to a stable submassive PE routinely.</strong> Bleeding risk outweighs benefit.",
        "<strong>Placing an IVC filter in someone who can be anticoagulated.</strong> Not routinely recommended."
      ]))
    ], [
      Q("idea", "A patient asks if apixaban will dissolve his DVT. What is accurate?", ["No, it prevents growth and new clots while the body breaks the clot down", "Yes, within 24 hours", "Yes, like tPA", "No, it only thins the blood for comfort"], 0, "Anticoagulation does not directly dissolve clot."),
      Q("chain", "Why is systemic tPA reserved for high-risk PE?", ["Its major risk is serious bleeding, including intracranial", "It doesn't work in stable patients", "It is too slow", "It requires an IVC filter"], 0, "Reserved for severe hemodynamic compromise due to bleeding risk."),
      Q("chain", "A patient with an acute PE has an active GI bleed and can't be anticoagulated. What prevents more emboli?", ["An IVC filter", "Warfarin", "Systemic tPA", "Compression stockings"], 0, "Primary indication: VTE with absolute contraindication to anticoagulation."),
      Q("traps", "Does an IVC filter treat the existing DVT?", ["No, it only traps clots traveling to the lungs", "Yes, it dissolves it", "Yes, it replaces anticoagulation for everyone", "Only in pregnancy"], 0, "Does not treat VTE."),
      Q("bedside", "A pregnant patient has a DVT. Which anticoagulant is preferred?", ["LMWH", "Warfarin", "Rivaroxaban", "No anticoagulation"], 0, "LMWH preferred in pregnancy; warfarin not used."),
      Q("bedside", "A patient with antiphospholipid syndrome has a PE. Which long-term anticoagulant is preferred?", ["Warfarin", "Apixaban", "Aspirin", "No long-term treatment"], 0, "Warfarin preferred in APS."),
      Q("chain", "A DVT develops after knee surgery. How long is anticoagulation?", ["3 months, because the cause was temporary (provoked)", "Indefinitely", "2 weeks", "Lifelong aspirin only"], 0, "Provoked first VTE: 3 months."),
      Q("chain", "A massive PE patient has a recent hemorrhagic stroke. What reperfusion option fits?", ["Surgical or catheter embolectomy", "Systemic tPA", "IVC filter alone without reperfusion", "Observation"], 0, "Embolectomy is considered when thrombolysis is contraindicated.")
    ])
  ]);
})();
