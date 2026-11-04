/* Cardio Part 2, Vascular Disease Part 2: Venous disease (Diem, 98 slides). Official objectives under the Venous Insufficiency,
   Phlebitis/Thrombophlebitis and Venous Thromboembolism headings, in order. The diagnostic-workup objective is split into
   DVT workup, PE presentation, PE labs/EKG/CXR and PE imaging (07a–07d); the management objective into risk classes,
   anticoagulants, reperfusion/IVC filter and duration (10a–10d).
   Read from slide pictures: slide 57 (Modified Wells table), slide 59 (PE likely/unlikely algorithm), slide 74 (PIOPED V/Q table).
   The deck says to memorize the MODIFIED Wells for PE (not DVT Wells, not the traditional 3-tier scoring): questions drill
   the points and the 4-point cutoff. Slide 39 (DVT discharge teaching) asks aloud; answered from slide 80 plus standard teaching. */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      r.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (m) {
        u[m].forEach(function (x) { x.card = i; r[m].push(x); });
      });
    });
    return r;
  }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function note(x) { return '<div class="box-fix"><span class="lbl">Source note</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }

  window.VASCULAR_DISEASE_PART_2_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-venous-insufficiency-patho-stages", "1. Venous insufficiency: pathophysiology, risk factors and stages", "Venous insufficiency objective 1. Slides 3–14.", [
      C("The spectrum and the mechanism",
        tbl(["Stage", "What it is"], [
          ["<strong>Telangiectasia</strong>", "Dilated <strong>intradermal</strong> veins, <strong>under 1 mm</strong>"],
          ["<strong>Varicose veins</strong>", "Tortuous, dilated, elongated <strong>subcutaneous</strong> veins, <strong>over 3 mm</strong>; <strong>20–30%</strong> of adults; hereditary; more during and after pregnancy"],
          ["<strong>Chronic venous insufficiency</strong>", "<strong>Edema</strong> and <strong>skin changes</strong>: pigmentation, stasis dermatitis, <strong>ulcers</strong>"]]) +
        "<p>Normal venous return needs a working <strong>calf muscle pump</strong> and <strong>competent valves</strong>.</p>" +
        "<ol class=\"concept-chain\"><li><strong>Valve incompetence</strong> (or weak muscle pump, outflow obstruction, or high venous pressure from obesity, heart failure, compression)</li><li>Blood <strong>refluxes and pools</strong> in the leg</li><li><strong>Venous hypertension</strong></li><li>More valve damage and <strong>dilated, tortuous veins</strong>: a vicious cycle</li><li>Leaky capillaries: edema, RBCs in the skin, inflammation, ulcers</li></ol>" +
        note("The CEAP classification (C0 none to C6 active ulcer) is the standard staging system; the deck describes the same spectrum without naming it."),
        ["telangiectasia", "varicose-veins", "cvi-mechanism"],
        [q("What size are telangiectasias?", "Under 1 mm", ["Over 3 mm", "Over 1 cm", "Exactly 2 cm"], "Intradermal, under 1 mm."),
          q("What size are varicose veins?", "Over 3 mm", ["Under 1 mm", "Under 0.5 mm", "Over 3 cm only"], "Subcutaneous, over 3 mm."),
          q("How common are varicose veins in adults?", "20 to 30%", ["Under 1%", "About 5%", "Over 80%"], "Common."),
          q("What is the most common mechanism of venous insufficiency?", "Venous valve incompetence with reflux", ["Arterial plaque", "Lymph node obstruction", "Nerve damage"], "Valve incompetence."),
          q("Which two things are needed for normal venous return from the legs?", "Calf muscle pump and competent valves", ["High arterial pressure and gravity", "Lymph flow and sweat", "Heart rate and breathing only"], "Muscle contraction and valves."),
          q("When do varicose veins become more frequent in women?", "During and after pregnancy", ["Before puberty", "Only after menopause", "Only with oral contraceptives stopped"], "Pregnancy.")],
        [q("A patient with heart failure and obesity develops leg venous insufficiency without prior DVT. Which mechanism applies?", "A condition that raises venous pressure", ["Arterial embolism", "Lymphatic obstruction from cancer", "Nerve root compression"], "Obesity and HF raise venous pressure.")]),
      C("Risk factors",
        tbl(["Primary", "Secondary"], [["<strong>Family history</strong>, <strong>female sex</strong> (estrogen: HRT, pregnancy, OCPs), <strong>age</strong>, <strong>obesity</strong>, sedentary lifestyle, <strong>prolonged standing</strong>", "<strong>DVT</strong> (post-thrombotic syndrome), venous trauma"]]),
        ["cvi-primary-rf", "cvi-secondary-rf"],
        [q("Which is a secondary risk factor for venous insufficiency?", "Prior DVT", ["Female sex", "Family history", "Prolonged standing"], "DVT and post-thrombotic syndrome."),
          q("Which occupation habit raises venous insufficiency risk?", "Prolonged standing", ["Frequent walking", "Swimming", "Cycling"], "Prolonged standing."),
          q("Why is female sex a risk factor for venous insufficiency?", "Estrogen from pregnancy, OCPs or HRT", ["Lower blood pressure", "Smaller arteries", "Less muscle"], "Elevated estrogen.")],
        [q("A 52-year-old nurse who stands 12-hour shifts, has had three pregnancies, and whose mother had varicose veins asks why her legs swell. Best summary?", "She has several primary risk factors for venous insufficiency", ["She has PAD", "She has lymphedema from cancer", "She has a DVT"], "Standing, female, pregnancy, family history.")]),
      C("Symptoms and skin findings",
        tbl(["Early", "Late"], [["Often asymptomatic when mild<br><strong>Heaviness/aching worse with standing</strong>, <strong>better with elevation</strong> (not bad in the morning)<br>Burning, itching<br><strong>Dependent edema</strong>", "<strong>Stasis dermatitis</strong><br><strong>Brown hyperpigmentation</strong><br><strong>Venous stasis ulcers</strong>"]]) +
        hy("<strong>Hyperpigmentation</strong>: brown, most prominent at the <strong>medial ankle</strong>, from <strong>hemosiderin</strong> left by RBCs that leaked into the dermis.<br><strong>Stasis dermatitis</strong>: eczema-like itching, erythema, scaling, weeping, erosions, crusting.") +
        tbl(["", "<strong>Venous ulcer</strong>", "Arterial ulcer (contrast)"], [
          ["Where", "<strong>Medial ankle</strong>, below the knee", "Toes, pressure points"],
          ["Look", "<strong>Shallow</strong>, exudative, <strong>red granulation base</strong>, <strong>irregular borders</strong>, may be circumferential", "Punched out, pale base"],
          ["Pain", "Painful (unless neuropathy)", "Very painful, worse elevated"]]) +
        note("The arterial ulcer column is standard teaching for comparison."),
        ["cvi-early-symptoms", "hyperpigmentation-hemosiderin", "stasis-dermatitis", "venous-ulcer"],
        [q("When is the leg pain of venous insufficiency worst?", "After prolonged standing, later in the day", ["First thing in the morning", "While walking briefly", "Only at night lying flat"], "Worse with standing, better after overnight elevation."),
          q("What relieves venous insufficiency symptoms?", "Leg elevation", ["Dangling the leg", "Standing still", "Hot tubs"], "Elevation."),
          q("What causes the brown pigmentation of venous insufficiency?", "Hemosiderin from leaked red blood cells", ["Melanin from sun", "Bilirubin", "Iron pills"], "Hemosiderin deposition."),
          q("Where is venous hyperpigmentation most prominent?", "Medial ankle", ["Lateral thigh", "Toes", "Knee"], "Medial ankle."),
          q("Where do venous stasis ulcers usually occur?", "Medial ankle", ["Tips of the toes", "Heel", "Lateral knee"], "Low medial ankle."),
          q("What does a venous ulcer look like?", "Shallow, exudative, red granulation base with irregular borders", ["Deep, punched out, pale base", "Black dry eschar", "Painless with a callus rim"], "Slide 13."),
          q("What does stasis dermatitis resemble?", "Eczema", ["Psoriasis plaques only", "Hives", "Shingles"], "Eczema-like."),
          q("Is venous stasis dermatitis an early or late finding?", "Late", ["Early", "It is the first sign", "Only in children"], "Late process.")],
        [q("A 64-year-old woman has heavy, aching legs by evening, better when she props them up, with brown staining around both inner ankles. Diagnosis?", "Chronic venous insufficiency", ["PAD", "Bilateral DVT", "Cellulitis"], "Classic CVI."),
          q("A patient has a shallow, weeping ulcer with a red base and irregular edges just above the medial malleolus, with surrounding brown skin. Which ulcer type?", "Venous stasis ulcer", ["Arterial ulcer", "Diabetic neuropathic ulcer", "Pressure ulcer"], "Venous ulcer."),
          q("A patient with longstanding varicose veins has itchy, red, scaly, weeping skin on the lower legs. What is it?", "Stasis dermatitis", ["Tinea corporis", "Psoriasis", "Contact dermatitis from socks only"], "Stasis dermatitis.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-venous-insufficiency-workup-management", "2. Venous insufficiency: workup and management", "Venous insufficiency objective 2. Slides 15–18.", [
      C("Diagnosis",
        "<p>Clinical history and exam, confirmed with <strong>venous duplex ultrasound</strong> (B-mode + Doppler):</p><ul>" +
        "<li><strong>B-mode</strong>: venous anatomy and <strong>compressibility</strong></li>" +
        "<li><strong>Doppler</strong>: flow direction and <strong>reflux</strong>: <strong>retrograde flow over 0.5 seconds</strong></li>" +
        "<li>Maps superficial and deep insufficiency and excludes other diagnoses (like DVT)</li></ul>",
        ["cvi-duplex", "cvi-reflux-time"],
        [q("Which test confirms venous insufficiency?", "Venous duplex ultrasound", ["ABI", "CTA chest", "D-dimer"], "Venous duplex."),
          q("What duration of retrograde flow on Doppler indicates venous reflux?", "Over 0.5 seconds", ["Over 5 seconds", "Over 0.01 seconds", "Over 1 minute"], "Over 0.5 seconds."),
          q("What does the B-mode part of a venous duplex show?", "Venous anatomy and compressibility", ["Arterial calcium", "Flow direction only", "Lung perfusion"], "B-mode anatomy."),
          q("What does the Doppler part of a venous duplex show?", "Flow direction and reflux", ["Bone density", "Arterial plaque only", "Nerve conduction"], "Doppler flow.")],
        [q("A patient with suspected venous insufficiency needs the reflux confirmed and mapped. Which test?", "Venous duplex ultrasound", ["Arterial CTA", "Exercise ABI", "Venography with contrast first"], "Duplex US.")]),
      C("Primary care treatment",
        tbl(["Conservative therapy", "Details"], [
          ["Lifestyle", "Avoid prolonged standing or sitting; <strong>weight loss</strong>"],
          ["<strong>Leg elevation</strong>", "When able"],
          ["<strong>Exercise</strong>", "Walking and <strong>calf muscle</strong> exercises improve venous return"],
          ["<strong>Skin care</strong>", "Prevent dryness and fissures; <strong>don't scratch</strong> (prevents ulcers)"],
          ["<strong>Compression stockings</strong>", "Reduce edema and symptoms; also for ulcers. <strong>Assess for PAD first</strong> if indicated"]]) +
        hy("<strong>Check the ABI before compression</strong>: compressing a leg with significant PAD can worsen ischemia."),
        ["cvi-conservative", "cvi-compression"],
        [q("What must be checked before prescribing compression for a venous ulcer?", "The ABI to exclude significant PAD", ["The D-dimer", "A chest x-ray", "The INR"], "Compression assuming ABI normal."),
          q("Which exercise improves venous return?", "Walking and calf muscle exercises", ["Heavy squats only", "Standing still", "Sitting with legs crossed"], "Calf pump."),
          q("Why should patients with venous insufficiency avoid scratching?", "To prevent fissures and ulcers", ["To prevent DVT", "To prevent PAD", "To prevent varicose veins from forming"], "Prevents ulcers."),
          q("What do compression stockings do in venous insufficiency?", "Reduce edema and improve symptoms", ["Dissolve clots", "Cure valve incompetence", "Raise arterial flow"], "Reduce edema.")],
        [q("A 70-year-old smoker with diabetes has a venous ulcer and also weak pedal pulses. Before applying compression, what is needed?", "An ABI to check for PAD", ["Nothing; compress right away", "A CT of the chest", "A D-dimer"], "Assess for PAD."),
          q("A cashier with symptomatic varicose veins asks what she can do at work. Best advice?", "Take walking and calf-exercise breaks, elevate legs when possible, and wear compression stockings", ["Stand still more", "Cross her legs when sitting", "Use a heating pad on the calves"], "Conservative measures.")]),
      C("Ulcer care, procedures and referral",
        tbl(["Venous ulcer care", "Surgical options"], [["<strong>Compression</strong> (if ABI normal), wound care and dressings, <strong>Unna boot</strong> (zinc oxide compression dressing); wound care or vascular referral if nonhealing", "<strong>Debridement</strong> of devitalized tissue; <strong>vein ablation</strong>; others per surgeon"]]) +
        hy("<strong>Refer</strong> (vascular, derm, wound) for: <strong>coexisting PAD</strong>, <strong>nonhealing or recurrent ulcers</strong>, <strong>persistent stasis dermatitis</strong>, <strong>resistant or recurrent cellulitis</strong>, <strong>diagnostic uncertainty</strong>."),
        ["unna-boot", "vein-ablation", "cvi-referral"],
        [q("What is an Unna boot?", "A zinc oxide compression dressing for venous ulcers", ["A cast for ankle fractures", "A pneumatic boot for DVT prevention", "An arterial bypass graft"], "Zinc oxide compression."),
          q("Which procedure treats the refluxing vein itself?", "Vein ablation", ["Arterial stent", "Embolectomy", "IVC filter"], "Ablation."),
          q("Which is an indication for referral in venous insufficiency?", "A nonhealing or recurrent ulcer", ["Mild ankle edema", "Spider veins only", "Leg heaviness at night only"], "Referral list."),
          q("Which infection pattern warrants referral in venous disease?", "Resistant or recurrent cellulitis", ["One episode of athlete's foot", "Seasonal allergies", "A cold"], "Recurrent cellulitis.")],
        [q("A patient's venous ulcer has not healed after 3 months of compression and wound care. Next step?", "Refer to a wound care specialist or vascular surgeon", ["Stop compression", "Start warfarin", "Amputate"], "Nonhealing ulcer."),
          q("A patient with venous insufficiency has had cellulitis of the same leg four times this year. What is indicated?", "Specialist referral", ["Lifelong antibiotics without referral", "Nothing", "IVC filter"], "Recurrent cellulitis.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-superficial-thrombophlebitis", "3. Superficial phlebitis and thrombophlebitis", "Phlebitis objective 1. Slides 20–25.", [
      C("Definitions, signs and risk factors",
        tbl(["", "Definition"], [["<strong>Superficial phlebitis</strong>", "Inflammation of a vein <strong>without thrombus</strong>"], ["<strong>Superficial thrombophlebitis (SVT)</strong>", "Inflammation <strong>with confirmed thrombus</strong> in a superficial vein"]]) +
        "<p><strong>Signs:</strong> localized <strong>pain, tenderness, redness, swelling along a superficial vein</strong>; the vein feels like a <strong>palpable cord</strong>.</p>" +
        hy("SVT is <strong>not a DVT</strong> but <strong>may extend into the deep system</strong>. SVT <strong>near the saphenofemoral junction</strong> carries higher risk of <strong>DVT and PE</strong>.") +
        tbl(["Risk factors", ""], [["<strong>IV catheters and chemical irritation</strong>", "IV <strong>promethazine</strong> and <strong>potassium</strong>"], ["<strong>Varicose veins</strong>", "Stasis"], ["<strong>Hypercoagulable</strong>", "Pregnancy, malignancy, exogenous estrogen"], ["<strong>Trousseau</strong>", "Migratory thrombophlebitis"]]),
        ["phlebitis-vs-svt", "svt-signs", "svt-dvt-risk", "svt-risk-factors"],
        [q("What is the difference between superficial phlebitis and thrombophlebitis?", "Thrombophlebitis has a confirmed thrombus", ["Phlebitis has a clot and thrombophlebitis does not", "They are deep vs superficial", "Thrombophlebitis is always infected"], "Thrombus present."),
          q("Is superficial thrombophlebitis a DVT?", "No, but it can extend into the deep system", ["Yes, always", "Only in the arm", "Only if painless"], "Not a DVT."),
          q("Which SVT location raises the risk of DVT and PE?", "Near the saphenofemoral junction", ["On the dorsum of the hand", "On the forearm at an IV site", "Over the shin"], "Near the junction."),
          q("Which IV medications commonly irritate veins and cause phlebitis?", "Promethazine and potassium", ["Normal saline", "Acetaminophen", "Ondansetron"], "Chemical irritation."),
          q("How does a thrombosed superficial vein feel?", "Like a tender palpable cord", ["Soft and compressible", "Pulsatile", "Crepitant"], "Palpable cord.")],
        [q("A day after IV potassium through a forearm line, a patient has a red, tender cord along the vein. Diagnosis?", "Superficial thrombophlebitis from chemical irritation", ["DVT of the arm", "Cellulitis only", "Arterial embolus"], "IV irritant."),
          q("A patient with varicose veins has a tender red cord on the upper inner thigh just below the groin. Why is this concerning?", "It is near the saphenofemoral junction and may extend into a DVT", ["It is always infected", "It means PAD", "It needs amputation"], "Near SFJ.")]),
      C("Diagnosis and treatment",
        "<p>Suspected clinically, but <strong>rule out a coexisting DVT</strong> with <strong>venous duplex US</strong>: confirms SVT, excludes DVT, and shows <strong>how close</strong> it is to the deep system.</p>" +
        tbl(["Treatment", "Details"], [
          ["<strong>Conservative</strong>", "<strong>NSAIDs</strong>, <strong>warm compresses</strong>, <strong>remove the IV catheter</strong>"],
          ["<strong>Antibiotics</strong>", "<strong>Not</strong> for uncomplicated SVT; only for infectious (suppurative) thrombophlebitis"],
          ["<strong>Anticoagulation</strong>", "Generally <strong>not</strong>, <strong>unless near the saphenofemoral or saphenopopliteal junction</strong>"]]) +
        mn("<strong>Warm, NSAID, pull the line</strong>. Anticoagulate only near the <strong>junctions</strong>."),
        ["svt-diagnosis", "svt-conservative-tx", "svt-anticoagulation"],
        [q("Which test should be ordered for suspected superficial thrombophlebitis?", "Venous duplex ultrasound to exclude DVT", ["No test ever", "CTA chest", "ABI"], "Rule out DVT."),
          q("What is the first-line treatment for uncomplicated superficial thrombophlebitis?", "NSAIDs and warm compresses", ["Antibiotics", "Full anticoagulation", "Thrombolysis"], "Conservative."),
          q("Are antibiotics indicated for uncomplicated superficial thrombophlebitis?", "No", ["Yes, always", "Only cephalexin", "Only if over 65"], "Only if infectious."),
          q("When is anticoagulation considered for superficial thrombophlebitis?", "When it is near the saphenofemoral or saphenopopliteal junction", ["Always", "Never", "Only in the arm"], "Near the junctions."),
          q("What should be done with an IV catheter causing phlebitis?", "Remove it if possible", ["Leave it and flush harder", "Replace it in the same vein", "Inject heparin into it"], "Remove catheter.")],
        [q("A patient has a tender cord on the mid-calf from a varicose vein; duplex shows SVT far from the deep veins and no DVT. Plan?", "NSAIDs and warm compresses", ["Full anticoagulation for 3 months", "IV antibiotics", "IVC filter"], "Uncomplicated SVT."),
          q("Duplex shows SVT of the great saphenous vein within 2 cm of the saphenofemoral junction. Plan?", "Consider anticoagulation", ["Warm compresses only and no follow-up", "Antibiotics", "Amputation"], "Near the junction."),
          q("A patient with an IV site that is red, hot, with pus draining and fever has thrombophlebitis. What changes in treatment?", "Remove the line and give empiric antibiotics for infectious thrombophlebitis", ["NSAIDs only", "Warm compresses only", "Thrombolysis"], "Infectious: antibiotics.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-trousseau-syndrome", "4. Trousseau syndrome", "Phlebitis objective 2. Slides 22–23.", [
      C("Trousseau syndrome (migratory thrombophlebitis)",
        "<p><strong>Thrombophlebitis migrans</strong>: superficial vein thromboses in <strong>multiple areas at the same time</strong>, appearing in different places, from <strong>cancer-related hypercoagulability</strong>.</p>" +
        hy("Cancers: <strong>adenocarcinoma of the pancreas</strong> (classic) and <strong>lung</strong>, and <strong>glioma</strong>.<br>It can be an <strong>early sign of cancer</strong>.") +
        mn("<strong>Trousseau = travels</strong> (migratory) and <strong>tumors</strong> (pancreas, lung, glioma)."),
        ["trousseau-definition", "trousseau-cancers", "trousseau-early-sign"],
        [q("What is Trousseau syndrome?", "Migratory superficial thrombophlebitis in multiple sites from cancer-related hypercoagulability", ["A single IV-site phlebitis", "Arterial vasospasm of the fingers", "Post-thrombotic leg swelling"], "Migratory thrombophlebitis."),
          q("Which cancer is classically linked to Trousseau syndrome?", "Pancreatic adenocarcinoma", ["Basal cell carcinoma", "Thyroid papillary carcinoma", "Testicular seminoma"], "Pancreas."),
          q("Which brain tumor is associated with Trousseau syndrome?", "Glioma", ["Meningioma", "Pituitary adenoma", "Acoustic neuroma"], "Glioma."),
          q("Besides pancreas, which adenocarcinoma is linked to Trousseau syndrome?", "Lung", ["Prostate", "Colon only", "Cervix"], "Lung."),
          q("What can Trousseau syndrome be an early sign of?", "An occult cancer", ["Varicose veins", "Pregnancy", "Diabetes"], "Early sign of cancer.")],
        [q("A 63-year-old with weight loss has tender red cords appearing on his arm, then his chest, then his leg over two weeks, with no IVs. What should be looked for?", "An occult cancer such as pancreatic adenocarcinoma", ["A new varicose vein", "An infected IV", "Raynaud phenomenon"], "Migratory thrombophlebitis = Trousseau."),
          q("A patient with new migratory superficial thrombophlebitis has epigastric pain radiating to the back and new diabetes. Which cancer is most likely?", "Pancreatic adenocarcinoma", ["Glioma", "Melanoma", "Bladder cancer"], "Classic pairing.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-vte-types", "5. Types of venous thromboembolism", "VTE objective 1. Slides 27, 33, 41, 43, 47.", [
      C("DVT and PE",
        "<p><strong>VTE</strong> = <strong>deep vein thrombosis (DVT)</strong> and <strong>pulmonary embolism (PE)</strong>. Common; <strong>acquired or inherited</strong>.</p>" +
        tbl(["", ""], [
          ["<strong>DVT</strong>", "Usually starts in the <strong>calf</strong> (can be upper extremity); <strong>15–30% extend proximally</strong>; proximal spread raises PE risk from <strong>10% to 50%</strong>"],
          ["<strong>PE</strong>", "Obstruction of the pulmonary artery or its branches, usually by thrombus from a DVT (<strong>above-knee DVT</strong> travels). Other emboli: <strong>tumor, fat, air</strong>"]]) +
        tbl(["PE location", "Where"], [["<strong>Saddle</strong>", "Straddles the <strong>bifurcation</strong> of the main pulmonary artery into right and left"], ["Lobar", "Lobar branches"], ["Segmental", "Segmental branches"], ["Subsegmental", "Branches of segmental arteries"]]) +
        "<p>PE can be unilateral or bilateral.</p>",
        ["vte-definition", "dvt-calf-proximal", "pe-sources", "pe-locations"],
        [q("Which two conditions make up VTE?", "DVT and PE", ["SVT and varicose veins", "PAD and AAA", "Raynaud and Buerger"], "DVT + PE."),
          q("Where does DVT usually start?", "The calf", ["The IVC", "The arm only", "The portal vein"], "Calf."),
          q("About what share of calf DVTs extend proximally?", "15 to 30%", ["Under 1%", "About 90%", "100%"], "15–30%."),
          q("How does proximal extension change PE risk?", "It rises from about 10% to 50%", ["It falls to zero", "It stays at 10%", "It rises to 100%"], "10% to 50%."),
          q("Which DVTs are most likely to embolize?", "Above the knee (proximal)", ["Below the knee only", "Superficial veins only", "Hand veins"], "Above-knee DVTs travel."),
          q("What is a saddle PE?", "A clot straddling the bifurcation of the main pulmonary artery", ["A clot in a subsegmental branch", "A clot in the left atrium", "Fat emboli in the brain"], "Saddle."),
          q("Which non-thrombus emboli can cause PE?", "Tumor, fat and air", ["Cholesterol, calcium and bone", "Bacteria only", "Platelets only"], "Other causes.")],
        [q("A patient with a femur fracture develops sudden hypoxia and petechiae a day later. Which embolus type is most likely?", "Fat embolism", ["Thrombus from the calf", "Air embolism", "Tumor embolism"], "Fat from long bone fracture."),
          q("CTA shows a large clot sitting across the split of the main pulmonary artery into both sides. What is it called?", "Saddle PE", ["Subsegmental PE", "Lobar PE", "Westermark sign"], "Saddle.")]),
      C("Phlegmasia cerulea dolens",
        "<p>A <strong>rare, limb- and life-threatening</strong> complication of DVT: <strong>massive venous outflow obstruction</strong> congests the superficial system too.</p>" +
        "<ol class=\"concept-chain\"><li>Major venous outflow blocked</li><li><strong>Massive venous hypertension</strong></li><li><strong>Severe swelling, pain, and blue (cerulea) leg</strong></li><li>Arterial inflow fails: <strong>ischemia</strong></li><li><strong>Gangrene and limb loss</strong> if untreated</li></ol>" +
        hy("<strong>Urgent vascular surgery consult.</strong>"),
        ["phlegmasia"],
        [q("What is phlegmasia cerulea dolens?", "Massive DVT obstructing venous outflow causing a swollen, blue, ischemic leg", ["Arterial embolus to the leg", "Superficial thrombophlebitis", "Chronic venous ulcer"], "Rare DVT complication."),
          q("What does phlegmasia cerulea dolens require?", "Urgent vascular surgery consult", ["Outpatient compression stockings", "NSAIDs and warm compresses", "Observation"], "Limb threatening."),
          q("What can untreated phlegmasia cerulea dolens lead to?", "Gangrene and limb loss", ["Varicose veins only", "Raynaud", "Nothing; it resolves"], "Gangrene.")],
        [q("A patient with cancer has a massively swollen, painful, deep blue leg with blisters after an iliofemoral DVT. What is this and what is needed?", "Phlegmasia cerulea dolens; urgent vascular surgery", ["Cellulitis; oral antibiotics", "Superficial thrombophlebitis; warm compresses", "Venous insufficiency; compression"], "Limb-threatening DVT.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-virchow-risk-factors", "6. VTE pathogenesis and risk factors: Virchow triad", "VTE objective 2. Slides 28–31, 49.", [
      C("Virchow triad",
        mn("<strong>Virchow triad = SHE</strong>: <strong>S</strong>tasis, <strong>H</strong>ypercoagulability, <strong>E</strong>ndothelial injury.") +
        tbl(["Arm", "Examples"], [
          ["<strong>Stasis</strong>", "Hospital bed rest, <strong>long car or plane rides (4 hours or more)</strong>, long surgeries, varicose veins"],
          ["<strong>Endothelial injury</strong>", "<strong>Trauma</strong> (fracture, major tissue injury, <strong>surgery</strong>), <strong>long-term venous catheters</strong> (PICC, central lines, ports), inflammation"],
          ["<strong>Hypercoagulable, inherited</strong>", "<strong>Factor V Leiden</strong>, <strong>protein C and S deficiency</strong>, <strong>antithrombin III deficiency</strong>, <strong>prothrombin gene mutation</strong>, antiphospholipid syndrome"],
          ["<strong>Hypercoagulable, acquired</strong>", "<strong>Cancer</strong>, <strong>pregnancy</strong>, <strong>hormones</strong> (HRT, birth control, <strong>testosterone</strong>), <strong>nephrotic syndrome</strong>"]]) +
        note("Antiphospholipid syndrome is listed under hereditary on slide 31, but it is an acquired autoimmune disorder (standard teaching)."),
        ["virchow-stasis", "virchow-endothelial", "virchow-inherited", "virchow-acquired"],
        [q("What are the three parts of Virchow triad?", "Stasis, endothelial injury, hypercoagulability", ["Fever, murmur, emboli", "Pain, pallor, paralysis", "Hypotension, JVD, muffled heart sounds"], "SHE."),
          q("How long a trip counts as a stasis risk factor for VTE?", "4 hours or more", ["30 minutes", "1 hour", "Only over 24 hours"], "4 hours or more."),
          q("A PICC line raises VTE risk through which arm of Virchow triad?", "Endothelial injury", ["Stasis only", "Inherited hypercoagulability", "None"], "Long-term venous catheters."),
          q("What is the most common inherited thrombophilia listed?", "Factor V Leiden", ["Hemophilia A", "Von Willebrand disease", "Vitamin K deficiency"], "Factor V Leiden."),
          q("Which kidney condition causes hypercoagulability?", "Nephrotic syndrome", ["Kidney stones", "Simple renal cyst", "Pyelonephritis"], "Loss of antithrombin."),
          q("Which hormone besides estrogen is listed as raising VTE risk?", "Testosterone", ["Insulin", "Thyroid hormone", "Cortisol"], "Testosterone."),
          q("Which deficiencies are inherited thrombophilias?", "Protein C, protein S and antithrombin III", ["Factor VIII and IX", "Vitamin K and B12", "Iron and folate"], "Slide 31.")],
        [q("A 30-year-old woman on oral contraceptives develops a DVT after a 10-hour flight. Which Virchow arms apply?", "Stasis and hypercoagulability", ["Endothelial injury only", "None", "Inherited only"], "Flight = stasis, OCP = hypercoagulable."),
          q("A young patient with no risk factors has a DVT, and his father and sister had clots too. Which condition is most likely?", "An inherited thrombophilia such as factor V Leiden", ["Nephrotic syndrome", "Trousseau syndrome", "Varicose veins"], "Family history of VTE."),
          q("A patient with a hip fracture repair on bed rest develops a DVT. Which arms of Virchow triad apply?", "Endothelial injury and stasis", ["Hypercoagulability from estrogen", "None", "Inherited only"], "Surgery/trauma plus immobility.")]),
      C("VTE epidemiology",
        tbl(["", ""], [["Incidence", "Up to <strong>900,000</strong> per year (CDC)"], ["<strong>Sudden death</strong>", "In about <strong>25%</strong> of PEs"], ["Sex", "Slightly higher in men"], ["Age", "Rises with age, especially <strong>after 60</strong>"], ["<strong>High-risk groups</strong>", "<strong>Hospitalized</strong>, <strong>major surgery</strong>, <strong>active cancer</strong>, <strong>pregnant and postpartum</strong>"]]),
        ["vte-epidemiology"],
        [q("In about what share of PEs is sudden death the presentation?", "About 25%", ["About 1%", "About 75%", "About 95%"], "About 25%."),
          q("After what age does VTE risk rise notably?", "60", ["20", "30", "40"], "After 60."),
          q("Which group is at significantly higher VTE risk?", "Postpartum patients", ["Marathon runners", "Teenagers", "People who drink water"], "Pregnant and postpartum.")],
        [q("Which hospitalized patient has the highest VTE risk: a 30-year-old with an ankle sprain going home, or a 72-year-old with active cancer after major surgery on bed rest?", "The 72-year-old with cancer after major surgery", ["The 30-year-old", "Equal", "Neither"], "Age, cancer, surgery, immobility.")])
    ]),

    /* ---------- 7a ---------- */
    S("07a-dvt-workup", "7a. DVT: presentation and workup", "VTE objective 3 (DVT). Slides 35–37, 70.", [
      C("DVT symptoms and signs",
        tbl(["Symptoms", "Exam"], [["<strong>Calf pain</strong>, calf or leg <strong>edema</strong>, maybe redness", "<strong>Unilateral leg edema</strong>, dilated superficial veins, warmth, tenderness, palpable cord (most DVTs lack one because they are <strong>deep</strong>), <strong>Homans sign</strong> (calf pain with dorsiflexion): <strong>not reliable</strong>"]]) +
        hy("<strong>Unilateral</strong> leg swelling is the key. Homans sign is unreliable."),
        ["dvt-symptoms", "dvt-exam", "homans-sign"],
        [q("Which exam finding most suggests DVT?", "Unilateral leg swelling", ["Bilateral pitting edema to the knees", "Absent pedal pulses", "Brown pigment at both ankles"], "Unilateral."),
          q("What is Homans sign?", "Calf pain with dorsiflexion of the foot", ["Pain with hip flexion", "Pain with leg elevation", "Absent popliteal pulse"], "Homans sign."),
          q("How reliable is Homans sign?", "Not reliable", ["Diagnostic", "Required for diagnosis", "100% specific"], "Not reliable."),
          q("Why do most DVTs lack a palpable cord?", "They are in deep veins", ["They are arterial", "They are too small to form", "They dissolve quickly"], "Deep.")],
        [q("A 55-year-old 5 days after knee surgery has a swollen, warm, tender left calf 3 cm larger than the right. Most likely diagnosis?", "DVT", ["Superficial thrombophlebitis", "Chronic venous insufficiency", "PAD"], "Unilateral swelling after surgery.")]),
      C("D-dimer vs ultrasound by probability",
        tbl(["DVT pretest probability (Wells DVT)", "Test"], [
          ["<strong>Low</strong> (score 0)", "<strong>D-dimer</strong>: <strong>normal = DVT ruled out</strong>; elevated = ultrasound"],
          ["<strong>Moderate (1–2) or high (3 or more)</strong>", "<strong>Venous compression duplex ultrasound</strong>"]]) +
        "<ul><li><strong>D-dimer</strong>: fibrin degradation product; <strong>sensitive, not specific</strong></li>" +
        "<li><strong>Compression US</strong>: about <strong>95% sensitive and specific</strong>; normal veins <strong>compress</strong>; <strong>non-compressible = DVT</strong>; Doppler checks flow</li>" +
        "<li><strong>CT</strong> if an abdominal/pelvic DVT is a concern</li>" +
        "<li><strong>Negative US with high suspicion: repeat in about a week</strong></li></ul>" +
        note("Your objectives say memorize Wells for PE only, not DVT; the DVT score categories are here only so you know which test comes first."),
        ["dvt-ddimer-low", "dvt-compression-us", "dvt-repeat-us"],
        [q("In a patient with low DVT probability, which test comes first?", "D-dimer", ["Compression ultrasound", "CT venogram", "Venography"], "Low probability: D-dimer."),
          q("A low-probability patient has a normal D-dimer. What next?", "DVT is ruled out", ["Ultrasound anyway", "Start anticoagulation", "CT chest"], "Normal = ruled out."),
          q("In moderate or high DVT probability, which test comes first?", "Venous compression duplex ultrasound", ["D-dimer", "Nothing", "ABI"], "Go to US."),
          q("What ultrasound finding indicates DVT?", "A vein that does not compress", ["A vein that compresses fully", "Arterial calcification", "Reflux over 0.5 seconds"], "Non-compressible."),
          q("What should happen if the ultrasound is negative but suspicion for DVT is high?", "Repeat the ultrasound in about a week", ["Stop; DVT is excluded forever", "Start thrombolytics", "Order an ABI"], "Repeat in a week."),
          q("What is the D-dimer?", "A fibrin degradation product", ["A clotting factor", "A platelet marker", "A cardiac enzyme"], "Fibrin breakdown.")],
        [q("A healthy 30-year-old with mild calf ache after a soccer game, no swelling and no risk factors, is low probability for DVT. Which test?", "D-dimer", ["Compression ultrasound first", "CT pulmonary angiogram", "Nothing at all"], "Low probability."),
          q("A patient with active cancer has a swollen calf and pitting edema (high DVT probability). Which test?", "Compression duplex ultrasound", ["D-dimer only", "Chest x-ray", "ABI"], "High probability: US."),
          q("A high-probability patient has a negative compression ultrasound but persistent swelling. Next step?", "Repeat the ultrasound in about a week", ["Discharge with no follow-up", "D-dimer to confirm DVT", "Start warfarin without imaging"], "Repeat US.")])
    ]),

    /* ---------- 7b ---------- */
    S("07b-pe-presentation", "7b. PE: pathophysiology and presentation", "VTE objective 3 (PE). Slides 44, 50–51.", [
      C("How PE hurts the heart",
        "<ol class=\"concept-chain\"><li>DVT fragment breaks off</li><li>Travels through the <strong>right heart</strong> to the <strong>pulmonary artery</strong></li><li>Blocks lung blood flow: poor gas exchange, <strong>hypoxia</strong></li><li>RV pushes against high resistance: <strong>right heart strain</strong></li><li><strong>Less preload to the left heart</strong>: low output, shock, death</li></ol>",
        ["pe-pathophysiology"],
        [q("Why does a large PE cause shock?", "RV strain lowers left heart preload and cardiac output", ["It causes a heart attack in the left main artery", "It causes bradycardia from vagal tone only", "It causes fluid overload"], "RV failure starves the LV."),
          q("What causes hypoxia in PE?", "Blocked lung blood flow impairs gas exchange", ["Airway obstruction", "Anemia", "Low inspired oxygen"], "Perfusion blocked.")],
        [q("A patient with a large PE becomes hypotensive. Which chain explains it?", "RV strain, less LV preload, low cardiac output", ["LV failure from a coronary clot", "Too much fluid", "Sepsis only"], "Obstructive shock.")]),
      C("Symptoms and exam",
        tbl(["Common symptoms", "Less common", "Severe PE"], [["<strong>Dyspnea</strong>, <strong>pleuritic chest pain</strong> or upper back pain, <strong>hemoptysis</strong>, calf/thigh pain or swelling, cough", "Back pain, abdominal pain, new atrial fibrillation", "<strong>Syncope</strong>, <strong>hypotension</strong>, collapse, cardiac arrest"]]) +
        tbl(["Exam", "RV strain / severe PE"], [["<strong>Tachypnea</strong> (about half), <strong>tachycardia</strong> (about 24%), leg findings, <strong>lung exam often normal</strong>, splinting, fever (about 3%, mimics pneumonia)", "<strong>Hypotension</strong>, rales, <strong>loud or split S2</strong>, <strong>JVD</strong>, poor perfusion"]]) +
        hy("<strong>Dyspnea is the most common symptom; tachypnea the most common sign.</strong> A normal lung exam does not exclude PE."),
        ["pe-symptoms", "pe-severe-symptoms", "pe-exam", "pe-rv-strain-signs"],
        [q("What is the most common symptom of PE?", "Dyspnea", ["Hemoptysis", "Syncope", "Abdominal pain"], "Dyspnea."),
          q("What is the most common exam sign of PE?", "Tachypnea", ["Fever", "Rales", "Wheezing"], "About half."),
          q("What is the lung exam usually like in PE?", "Often normal", ["Always wheezy", "Always crackles", "Absent breath sounds bilaterally"], "Often normal."),
          q("Which exam findings suggest RV strain from PE?", "JVD, loud or split S2, hypotension", ["Bounding pulses", "Opening snap", "S4 with hypertension"], "RV strain."),
          q("Which presentations suggest severe PE?", "Syncope, hypotension, or cardiac arrest", ["Mild cough only", "Calf cramps only", "Itchy legs"], "Severe PE."),
          q("About what share of PE patients have fever that mimics pneumonia?", "About 3%", ["About 50%", "About 90%", "None"], "About 3%.")],
        [q("Three days after hip replacement, a patient has sudden pleuritic chest pain, dyspnea, HR 115, RR 28, and clear lungs. What is the leading diagnosis?", "Pulmonary embolism", ["Pneumonia", "Asthma", "Pericarditis"], "Classic PE."),
          q("A patient with suspected PE faints and has JVD, a loud P2 and BP 85/50. What does this suggest?", "Severe PE with right ventricular strain", ["Simple vasovagal syncope", "Left heart failure", "Aortic stenosis"], "RV strain signs.")])
    ]),

    /* ---------- 7c ---------- */
    S("07c-pe-labs-ekg-cxr", "7c. PE workup: history, labs, EKG and chest x-ray", "VTE objective 3 (PE). Slides 52–53, 61–69.", [
      C("History, D-dimer and labs",
        "<p>History: travel, surgery, injury, family history, hormones. In a <strong>stable</strong> patient, use <strong>PERC</strong> (very low risk) and <strong>Wells</strong> (pretest probability) to choose D-dimer vs imaging.</p>" +
        hy("<strong>D-dimer</strong>: <strong>sensitive, not specific</strong>. <strong>Negative = PE ruled out</strong> (in the right pretest group). <strong>Positive = needs imaging</strong>, not a diagnosis. Can be <strong>age adjusted</strong>. Usually elevated in <strong>pregnancy</strong>.") +
        tbl(["Lab", "Why"], [["CBC", "Anemia, infection, platelets"], ["<strong>BMP</strong>", "<strong>Renal function</strong> (contrast, anticoagulant choice), electrolytes"], ["<strong>Troponin</strong>", "Elevated from <strong>RV strain</strong>"], ["<strong>BNP</strong>", "<strong>RV strain</strong>"], ["Pregnancy test", "Reproductive age"], ["Tox, LFT/lipase", "As indicated; alternate diagnoses"]]) +
        "<p>Other: <strong>EKG</strong>, <strong>CXR</strong>, <strong>leg Doppler</strong> if DVT signs, <strong>echo</strong> (RV dilation; unstable patients, risk stratification), ABG if critically ill.</p>",
        ["pe-history-tools", "pe-ddimer", "pe-labs", "pe-echo"],
        [q("What does a positive D-dimer mean in suspected PE?", "It is not specific; imaging is needed", ["PE is confirmed", "PE is excluded", "Start thrombolysis"], "Not specific."),
          q("What does a negative D-dimer mean in a low or moderate pretest patient?", "PE is ruled out", ["PE is confirmed", "Get a CTA anyway", "Start heparin"], "Sensitive."),
          q("Why can troponin and BNP be elevated in PE?", "Right heart strain", ["Left main coronary occlusion", "Kidney failure always", "Liver injury"], "RV strain."),
          q("Why is D-dimer less useful in pregnancy?", "It is usually elevated", ["It is always zero", "It harms the fetus", "It cannot be drawn"], "Elevated in pregnancy."),
          q("What does an echo show in significant PE?", "RV dilation and dysfunction", ["LV hypertrophy", "Mitral stenosis", "Pericardial calcification"], "RV dilation."),
          q("Can the D-dimer cutoff be adjusted?", "Yes, by age", ["No, never", "Only by sex", "Only by weight"], "Age-adjusted."),
          q("Why is a BMP checked in suspected PE?", "Renal function for contrast and anticoagulant choice", ["To diagnose PE", "To measure troponin", "To check the INR"], "Renal function.")],
        [q("A 40-year-old with low suspicion for PE has a positive D-dimer. What is the next step?", "CT pulmonary angiography", ["Diagnose PE and treat", "Discharge", "Repeat the D-dimer in a year"], "Positive D-dimer needs imaging."),
          q("A patient with confirmed PE has elevated troponin and BNP but normal BP. What do the labs indicate?", "Right ventricular strain", ["A coincidental MI", "Kidney stones", "Nothing"], "Intermediate risk features.")]),
      C("EKG in PE",
        tbl(["Finding", "Meaning"], [
          ["<strong>Sinus tachycardia</strong>", "<strong>Most common</strong>"],
          ["<strong>Normal EKG</strong>", "Possible; <strong>does not exclude</strong> PE"],
          ["<strong>S1Q3T3</strong>", "Deep <strong>S in lead I</strong>, <strong>Q in lead III</strong>, <strong>inverted T in lead III</strong>: RV strain; <strong>not sensitive or specific</strong>"],
          ["<strong>T inversions V1–V4</strong> (+/- inferior)", "RV strain"],
          ["<strong>New RBBB</strong> (incomplete or complete)", "More significant PE"]]) +
        mn("<strong>S1Q3T3</strong> = <strong>S</strong> in <strong>1</strong>, <strong>Q</strong> in <strong>3</strong>, <strong>T</strong> inverted in <strong>3</strong>."),
        ["pe-ekg-tachycardia", "s1q3t3", "pe-ekg-strain"],
        [q("What is the most common EKG finding in PE?", "Sinus tachycardia", ["S1Q3T3", "New LBBB", "ST elevation in V1 to V4"], "Sinus tach."),
          q("What is S1Q3T3?", "S wave in lead I, Q wave in lead III, inverted T in lead III", ["ST elevation in leads 1 and 3", "Three premature beats", "Q waves in V1 to V3"], "RV strain pattern."),
          q("Is S1Q3T3 sensitive or specific for PE?", "Neither; it is not diagnostic", ["Very sensitive", "100% specific", "Required for diagnosis"], "Not diagnostic."),
          q("Which new bundle branch block suggests a more significant PE?", "Right bundle branch block", ["Left bundle branch block", "Left anterior fascicular block", "None"], "New RBBB."),
          q("Does a normal EKG exclude PE?", "No", ["Yes", "Only in men", "Only with a normal CXR"], "Normal does not exclude."),
          q("Where do T wave inversions suggesting RV strain appear?", "V1 to V4", ["V5 and V6 only", "aVL only", "Lead I only"], "Precordial V1–V4.")],
        [q("A tachycardic patient with dyspnea has a deep S in lead I, a Q in III, and T inversion in III. What does this pattern suggest?", "Right ventricular strain, as seen in PE", ["Inferior STEMI", "Hyperkalemia", "Pericarditis"], "S1Q3T3."),
          q("A patient with a large PE develops a new right bundle branch block and T inversions in V1 to V4. What do these suggest?", "Significant PE with RV strain", ["Old anterior MI", "Digoxin effect", "Normal variant"], "RV strain.")]),
      C("Chest x-ray in PE",
        tbl(["Finding", "Meaning"], [
          ["<strong>Normal</strong>", "<strong>Most common</strong> CXR in PE"],
          ["Atelectasis, effusion", "Nonspecific"],
          ["<strong>Hampton hump</strong>", "<strong>Peripheral, pleural-based, wedge-shaped</strong> opacity = <strong>pulmonary infarction</strong>; uncommon"],
          ["<strong>Westermark sign</strong>", "Dilated arteries proximal to the clot with <strong>collapse of distal vessels</strong>: a <strong>sharp cutoff</strong> (oligemia)"]]) +
        mn("<strong>Hampton = Hump</strong> (wedge of infarct). <strong>Westermark = Washed out</strong> (no vessels beyond the clot)."),
        ["pe-cxr-normal", "hampton-hump", "westermark"],
        [q("What is the most common chest x-ray finding in PE?", "Normal", ["Hampton hump", "Westermark sign", "Pneumothorax"], "Normal."),
          q("What is a Hampton hump?", "A peripheral wedge-shaped opacity from pulmonary infarction", ["A dilated pulmonary artery with distal oligemia", "A widened mediastinum", "A water-bottle heart"], "Infarct."),
          q("What is the Westermark sign?", "A sharp cutoff with loss of vessels distal to the clot", ["A wedge-shaped infarct", "Kerley B lines", "A deep sulcus sign"], "Distal oligemia."),
          q("How common is a Hampton hump in PE?", "Uncommon", ["In every PE", "In most PEs", "Never seen"], "Uncommon.")],
        [q("A CXR in a patient with suspected PE shows a pleural-based wedge-shaped opacity at the right base. What is it?", "Hampton hump (pulmonary infarct)", ["Westermark sign", "Lobar pneumonia only", "Pneumothorax"], "Hampton hump."),
          q("A patient with dyspnea and tachycardia has a completely normal chest x-ray. Does that lower concern for PE?", "No, a normal CXR is the most common finding in PE", ["Yes, it rules PE out", "Yes, PE always shows on CXR", "Only if Westermark is absent"], "Normal is most common.")])
    ]),

    /* ---------- 7d ---------- */
    S("07d-pe-imaging", "7d. PE imaging: CTA, V/Q scan and leg ultrasound", "VTE objective 3 (PE). Slides 70–74.", [
      C("CT pulmonary angiography (CTPA)",
        hy("<strong>CTPA is the preferred first-line imaging</strong> for PE: timed IV contrast shows the clot as a <strong>dark filling defect</strong>, and can find other causes (pneumonia, effusion).") +
        tbl(["Use caution / consider alternatives", ""], [["<strong>Severe renal impairment (GFR under 30) or AKI</strong>", "Weigh risk vs benefit"], ["<strong>Severe iodinated contrast allergy</strong>", ""], ["Cannot lie flat or hold breath", ""]]) +
        "<p>CTA can be safely considered in <strong>pregnancy</strong> when pulmonary imaging is needed.</p>",
        ["ctpa-first-line", "ctpa-cautions"],
        [q("What is the preferred first-line imaging for PE?", "CT pulmonary angiography", ["V/Q scan", "Chest x-ray", "MRI"], "CTPA."),
          q("How does a PE look on CTPA?", "A dark filling defect in the contrast-filled artery", ["A bright white clot", "An air bubble", "A widened mediastinum"], "Filling defect."),
          q("Which kidney function level calls for caution with CTPA?", "GFR under 30 or AKI", ["GFR over 90", "Any creatinine", "Only dialysis patients are fine"], "GFR under 30."),
          q("Besides PE, what can CTPA show?", "Other lung conditions such as pneumonia or effusion", ["Coronary calcium only", "Brain bleeds", "Nothing else"], "Alternate diagnoses.")],
        [q("A stable patient with a positive D-dimer, normal kidneys and no contrast allergy needs PE imaging. Which test?", "CTPA", ["V/Q scan", "Repeat D-dimer", "Echo only"], "First-line.")]),
      C("V/Q scan",
        "<p>Nuclear medicine test of <strong>ventilation</strong> (inhaled tracer) and <strong>perfusion</strong> (injected tracer). PE = <strong>mismatch</strong>: <strong>perfusion is decreased</strong> while <strong>ventilation is normal</strong>.</p>" +
        hy("<strong>Choose V/Q</strong> when: <strong>severe renal impairment or AKI</strong>, <strong>severe contrast allergy</strong>, and <strong>pregnancy</strong>. Works best when the <strong>chest x-ray is normal</strong>.") +
        "<p>PIOPED (slide 74): a <strong>high-probability</strong> scan with <strong>high clinical probability</strong> means PE in <strong>96%</strong>; a <strong>normal</strong> scan nearly excludes it.</p>",
        ["vq-mismatch", "vq-indications", "pioped"],
        [q("What V/Q pattern indicates PE?", "Decreased perfusion with normal ventilation (mismatch)", ["Decreased ventilation with normal perfusion", "Both decreased equally", "Both normal"], "Mismatch."),
          q("When is a V/Q scan preferred over CTPA?", "Severe renal impairment or severe contrast allergy", ["Abnormal chest x-ray with pneumonia", "Need to look for other diagnoses", "Unstable patient needing bedside test"], "Avoids contrast."),
          q("A V/Q scan is most useful when the chest x-ray is:", "Normal", ["Full of infiltrates", "Showing a large effusion", "Showing COPD bullae"], "Ideal if CXR normal."),
          q("What does a normal V/Q scan do?", "Nearly excludes PE", ["Confirms PE", "Means CTPA is needed always", "Means pneumonia"], "Normal or near normal: very low PE rate.")],
        [q("A patient with suspected PE has a GFR of 18 and a normal chest x-ray. Which imaging?", "V/Q scan", ["CTPA with full contrast", "Coronary angiogram", "MRI with gadolinium"], "Renal impairment."),
          q("A patient had anaphylaxis to iodinated contrast and now has suspected PE. Which imaging?", "V/Q scan", ["CTPA", "Contrast venography", "CT abdomen with contrast"], "Contrast allergy.")]),
      C("Leg ultrasound in suspected PE",
        "<p><strong>Compression US</strong>: normal veins compress; <strong>non-compressible = DVT</strong>.</p>" +
        hy("If a patient with suspected PE has <strong>DVT symptoms</strong>, a <strong>positive proximal DVT</strong> means <strong>start anticoagulation</strong>; <strong>chest imaging may not be needed</strong> (treatment is the same). A <strong>negative</strong> leg US <strong>does not exclude PE</strong>."),
        ["leg-us-in-pe"],
        [q("A patient with suspected PE has a proximal DVT on leg ultrasound. Is chest imaging always required before treatment?", "No; anticoagulation can start and chest imaging may not be needed", ["Yes, always", "Yes, a V/Q scan is required", "Yes, and treatment must wait"], "Same treatment."),
          q("Does a negative leg ultrasound rule out PE?", "No", ["Yes", "Only in pregnancy", "Only if D-dimer is high"], "Does not exclude.")],
        [q("A pregnant woman with dyspnea and a swollen left calf has a proximal DVT on ultrasound. Next step?", "Start anticoagulation (LMWH); chest imaging may be avoided", ["Get a CTPA before any treatment", "Start warfarin", "Discharge with compression only"], "Positive proximal DVT.")])
    ]),

    /* ---------- 8 ---------- */
    S("08-modified-wells-pe", "8. Modified Wells criteria for PE", "VTE objective 4. Slides 55–59.", [
      C("Modified Wells score (memorize)",
        tbl(["Criterion", "Points"], [
          ["<strong>Clinical signs of DVT</strong>", "<strong>3</strong>"],
          ["<strong>Alternative diagnosis less likely than PE</strong> (PE is the #1 diagnosis)", "<strong>3</strong>"],
          ["<strong>Heart rate over 100</strong>", "<strong>1.5</strong>"],
          ["<strong>Immobilization</strong> (3 days or more) <strong>or surgery in the past 4 weeks</strong>", "<strong>1.5</strong>"],
          ["<strong>Previous DVT or PE</strong>", "<strong>1.5</strong>"],
          ["<strong>Hemoptysis</strong>", "<strong>1</strong>"],
          ["<strong>Malignancy</strong> (treated now, within 6 months, or palliative)", "<strong>1</strong>"]]) +
        mn("<strong>3-3, 1.5-1.5-1.5, 1-1</strong>: <strong>D</strong>VT signs and <strong>D</strong>iagnosis #1 (3 each); <strong>H</strong>eart rate, <strong>I</strong>mmobile/surgery, <strong>P</strong>rior clot (1.5 each); <strong>H</strong>emoptysis and <strong>C</strong>ancer (1 each). Max 12.5."),
        ["wells-points-3", "wells-points-15", "wells-points-1"],
        [q("How many modified Wells points for clinical signs of DVT?", "3", ["1", "1.5", "4"], "3 points."),
          q("How many modified Wells points if PE is the most likely diagnosis?", "3", ["1", "1.5", "6"], "3 points."),
          q("How many modified Wells points for a heart rate over 100?", "1.5", ["1", "3", "0.5"], "1.5."),
          q("How many modified Wells points for surgery in the past 4 weeks?", "1.5", ["1", "3", "2"], "1.5."),
          q("How many modified Wells points for a previous DVT or PE?", "1.5", ["1", "3", "0"], "1.5."),
          q("How many modified Wells points for hemoptysis?", "1", ["1.5", "3", "2"], "1."),
          q("How many modified Wells points for active malignancy?", "1", ["1.5", "3", "4"], "1."),
          q("What counts as malignancy for the Wells score?", "Treated now, within 6 months, or palliative", ["Any cancer ever", "Only metastatic lung cancer", "Only skin cancer"], "Active malignancy."),
          q("How many days of immobilization earn Wells points?", "At least 3 days", ["At least 1 hour", "At least 30 days", "Any bed rest"], "3 days or more.")],
        [q("A patient has a HR of 110, had surgery 2 weeks ago, and PE is the leading diagnosis. No DVT signs, no prior clot, no hemoptysis, no cancer. What is the modified Wells score?", "6", ["4.5", "3", "7.5"], "3 + 1.5 + 1.5 = 6."),
          q("A patient has hemoptysis and active lung cancer on chemo; another diagnosis is more likely than PE; HR 90. What is the modified Wells score?", "2", ["5", "3.5", "0"], "1 + 1 = 2."),
          q("A patient has a swollen tender calf, a prior DVT, and HR 105; PE is less likely than pneumonia. What is the score?", "6", ["4.5", "7.5", "3"], "3 + 1.5 + 1.5 = 6.")]),
      C("Using the score: PE likely vs unlikely",
        tbl(["Modified Wells", "Meaning", "Next step"], [
          ["<strong>4 or less</strong>", "<strong>PE unlikely</strong>", "<strong>High-sensitivity D-dimer</strong>: negative = <strong>PE excluded</strong>; positive = <strong>CTPA</strong>"],
          ["<strong>Over 4</strong>", "<strong>PE likely</strong>", "<strong>Straight to CTPA</strong>; <strong>do not use D-dimer</strong> to exclude"]]) +
        hy("<strong>The cutoff is 4.</strong> Likely (over 4) = CTPA. Unlikely (4 or less) = D-dimer first.") +
        note("Slide 56's three-tier traditional scoring (under 2, 2–6, over 6) says \"don't memorize\"; the two-tier modified rule above is the one to know."),
        ["wells-cutoff", "wells-unlikely-path", "wells-likely-path"],
        [q("What modified Wells score makes PE likely?", "Over 4", ["Over 1", "Over 2", "Over 10"], "Over 4."),
          q("What is the next step when modified Wells says PE is unlikely?", "High-sensitivity D-dimer", ["CTPA immediately", "Thrombolysis", "Discharge without testing"], "D-dimer."),
          q("What is the next step when modified Wells says PE is likely?", "CT pulmonary angiography", ["D-dimer", "No testing", "Leg x-ray"], "CTPA."),
          q("Can a negative D-dimer exclude PE when the modified Wells is over 4?", "No", ["Yes", "Only if age-adjusted", "Only in men"], "Do not use D-dimer when likely."),
          q("PE unlikely with a negative D-dimer means:", "PE is excluded; no further testing", ["Get a CTPA anyway", "Start anticoagulation", "Get a V/Q scan"], "Excluded."),
          q("PE unlikely with a positive D-dimer means:", "Get a CTPA", ["PE confirmed", "PE excluded", "Repeat D-dimer in a week"], "Image.")],
        [q("A patient's modified Wells score is 6. Next step?", "CTPA", ["D-dimer", "Discharge", "PERC"], "Likely: CTPA."),
          q("A patient's modified Wells score is 3 and the high-sensitivity D-dimer is negative. Next step?", "PE excluded; no further testing", ["CTPA", "V/Q scan", "Start apixaban"], "Unlikely + negative D-dimer."),
          q("A patient's modified Wells score is 4.5. Should a D-dimer be used to rule out PE?", "No, the score is over 4 so go straight to CTPA", ["Yes, D-dimer first", "Yes, if under 50", "No testing is needed"], "4.5 is over 4."),
          q("A patient's modified Wells is 4 and the D-dimer is elevated. Next step?", "CTPA", ["PE excluded", "Thrombolysis", "Repeat D-dimer"], "4 = unlikely, positive D-dimer: CTPA.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-perc", "9. PERC: pulmonary embolism rule-out criteria", "VTE objective 5. Slides 54, 56.", [
      C("PERC (memorize)",
        "<p>Use PERC <strong>only when clinical suspicion is already low</strong>. If <strong>all 8 are negative</strong>, PE is excluded with <strong>no further testing</strong> (not even a D-dimer). If <strong>any one is positive</strong>, get a <strong>D-dimer</strong>.</p>" +
        tbl(["PERC criterion (positive if...)", ""], [
          ["<strong>A</strong>ge", "<strong>50 or older</strong>"],
          ["<strong>H</strong>eart rate", "<strong>100 or more</strong>"],
          ["<strong>O</strong>xygen saturation", "<strong>Under 95%</strong>"],
          ["<strong>H</strong>emoptysis", "Present"],
          ["<strong>E</strong>strogen use", "Present"],
          ["<strong>S</strong>urgery, trauma or hospitalization", "In the <strong>last 4 weeks</strong>"],
          ["<strong>P</strong>rior VTE", "Present"],
          ["<strong>U</strong>nilateral leg swelling", "Present"]]) +
        mn("<strong>HAD CLOTS</strong> (standard teaching): <strong>H</strong>ormones (estrogen), <strong>A</strong>ge 50 or more, <strong>D</strong>VT or PE before, <strong>C</strong>oughing blood, <strong>L</strong>eg swelling (one side), <strong>O</strong>2 sat under 95%, <strong>T</strong>achycardia 100 or more, <strong>S</strong>urgery or trauma in 4 weeks.") +
        hy("Low suspicion + <strong>PERC negative</strong> = stop. <strong>One positive</strong> = <strong>D-dimer</strong> (not straight to CTA)."),
        ["perc-when", "perc-criteria", "perc-positive-next"],
        [q("When should PERC be applied?", "Only when clinical suspicion for PE is already low", ["In every patient with chest pain", "Only in high-risk patients", "Only in pregnancy"], "Low suspicion only."),
          q("What PERC age is positive?", "50 or older", ["40 or older", "65 or older", "18 or older"], "50."),
          q("What PERC heart rate is positive?", "100 or more", ["90 or more", "120 or more", "60 or less"], "100."),
          q("What PERC oxygen saturation is positive?", "Under 95%", ["Under 90%", "Under 99%", "Under 85%"], "Under 95%."),
          q("How recent must surgery, trauma or hospitalization be to be PERC positive?", "Within 4 weeks", ["Within 1 year", "Within 1 week only", "Within 6 months"], "4 weeks."),
          q("If all 8 PERC criteria are negative in a low-suspicion patient, what next?", "No further testing", ["D-dimer", "CTPA", "V/Q scan"], "PE excluded."),
          q("If one PERC criterion is positive in a low-suspicion patient, what next?", "D-dimer", ["CTPA directly", "No testing", "Thrombolysis"], "D-dimer."),
          q("How many criteria are in PERC?", "8", ["5", "7", "10"], "Eight.")],
        [q("A 32-year-old man with low suspicion for PE has pleuritic pain after a pickup game; HR 88, SpO2 99%, no hemoptysis, no hormones, no recent surgery, no prior clot, no leg swelling. Next step?", "No further testing for PE", ["D-dimer", "CTPA", "V/Q scan"], "PERC negative."),
          q("A 28-year-old woman on oral contraceptives with low suspicion for PE has mild pleuritic pain; everything else is normal. Next step?", "D-dimer", ["No testing", "CTPA", "Start apixaban"], "Estrogen use makes PERC positive."),
          q("A 55-year-old with low suspicion for PE is otherwise PERC negative. What does his age mean?", "PERC is positive, so get a D-dimer", ["PERC is negative; stop", "Go straight to CTPA", "Start heparin"], "Age 50 or older.")])
    ]),

    /* ---------- 10a ---------- */
    S("10a-pe-risk-classes-acute-care", "10a. PE risk classes and initial treatment", "VTE objective 6. Slides 78–80, 92–94.", [
      C("High, intermediate and low risk PE",
        tbl(["Class", "Definition", "Treatment"], [
          ["<strong>High risk (massive)</strong>", "<strong>Unstable</strong>: sustained <strong>SBP under 90</strong> or a <strong>drop of 40 or more</strong>, obstructive shock or arrest; often RV dysfunction", "<strong>ICU</strong>, O2, <strong>pressors</strong>; <strong>systemic thrombolysis (alteplase)</strong>; catheter therapy or <strong>surgical embolectomy if tPA contraindicated</strong>; start <strong>LMWH</strong> right away (held during systemic tPA)"],
          ["<strong>Intermediate (submassive)</strong>", "<strong>Stable</strong> but <strong>RV dysfunction and/or elevated troponin or BNP</strong>", "<strong>LMWH</strong> for most (UFH if a procedure may be needed); admit tele, step-down or ICU; advanced therapy not routine"],
          ["<strong>Low risk</strong>", "Stable, <strong>no RV strain, normal biomarkers</strong>", "<strong>DOAC</strong> for most; <strong>outpatient or early discharge</strong> using <strong>PESI</strong>"]]) +
        hy("\"Massive\" means <strong>hemodynamic compromise</strong>, <strong>not the size</strong> of the clot. Every class: anticoagulate <strong>at least 3 months</strong>."),
        ["pe-high-risk", "pe-intermediate-risk", "pe-low-risk", "pesi"],
        [q("What defines a high-risk (massive) PE?", "Hemodynamic instability such as SBP under 90", ["A clot over 2 cm", "Any saddle PE", "Bilateral clots"], "Instability, not size."),
          q("What defines an intermediate-risk (submassive) PE?", "Stable BP with RV dysfunction or elevated troponin or BNP", ["SBP under 90", "No RV strain and normal labs", "Cardiac arrest"], "RV strain without shock."),
          q("What is the primary reperfusion therapy for high-risk PE?", "Systemic thrombolysis with alteplase", ["Aspirin", "Oral apixaban alone", "IVC filter alone"], "Systemic tPA."),
          q("Which tool helps identify low-risk PE patients for outpatient care?", "PESI", ["CHA2DS2-VASc", "Duke criteria", "Wells DVT"], "PE Severity Index."),
          q("Which anticoagulant is preferred for most low-risk PE patients?", "A DOAC", ["Warfarin without bridge", "Thrombolytic", "Aspirin"], "DOAC."),
          q("Which anticoagulant is used for most intermediate-risk PE?", "LMWH", ["Aspirin", "Alteplase", "No anticoagulant"], "LMWH."),
          q("What is the minimum anticoagulation duration for PE?", "3 months", ["2 weeks", "1 month", "10 days"], "At least 3 months."),
          q("What SBP drop from baseline defines high-risk PE?", "40 mmHg or more", ["5 mmHg", "10 mmHg", "20 mmHg"], "Drop of 40.")],
        [q("A patient with PE has BP 78/50 despite fluids and a dilated RV on echo. No bleeding risks. Treatment?", "ICU, pressors, systemic thrombolysis", ["Oral apixaban and discharge", "LMWH on the floor only", "Aspirin"], "High-risk PE."),
          q("A PE patient has normal BP, HR 95, but elevated troponin and RV dilation on echo. Classification and treatment?", "Intermediate risk; LMWH and admission", ["Low risk; outpatient DOAC", "High risk; tPA now", "Not a PE"], "Submassive."),
          q("A PE patient has normal vitals, no RV strain, normal troponin and a low PESI. Plan?", "Start a DOAC and consider outpatient care", ["ICU and thrombolysis", "IVC filter", "Surgical embolectomy"], "Low risk."),
          q("A high-risk PE patient had a hemorrhagic stroke last month. How is the clot removed?", "Surgical or catheter embolectomy", ["Systemic tPA", "Aspirin", "Wait and see"], "tPA contraindicated.")]),
      C("ED care and patient teaching",
        tbl(["ED measures", ""], [["Oxygen", "Target SpO2 over 90%"], ["IV fluids", "<strong>Cautious</strong> if EKG shows right heart failure (can overload the RV)"], ["<strong>Anticoagulation</strong>", "<strong>Cornerstone</strong> of treatment"], ["Unstable", "ICU, ventilation, pressor"], ["Most patients", "Stable: telemetry bed"]]) +
        hy("<strong>Anticoagulation teaching:</strong> it <strong>stops the clot from growing and new clots from forming</strong>, but <strong>does not dissolve the clot</strong>; <strong>bleeding risk</strong>; <strong>take it every dose</strong>.") +
        note("Slide 39 (what to teach at DVT discharge) is asked aloud; answered from slide 80 plus standard teaching: bleeding warning signs, adherence, drug interactions, follow-up, and when to return (chest pain, dyspnea, worse swelling)."),
        ["pe-ed-care", "anticoag-teaching"],
        [q("Does anticoagulation dissolve an existing clot?", "No, it prevents growth and new clots", ["Yes, within an hour", "Yes, in all patients", "Only warfarin does"], "Body breaks down the clot."),
          q("What is the cornerstone of PE treatment?", "Anticoagulation", ["Thrombolysis for all", "IVC filter for all", "Antibiotics"], "Anticoagulation."),
          q("Why are IV fluids given cautiously in PE with right heart strain?", "Extra volume can overload the failing RV", ["Fluids dissolve clots", "Fluids cause bleeding", "Fluids lower oxygen"], "Caution with RV failure."),
          q("What oxygen saturation target is used in PE?", "Over 90%", ["Over 80%", "Exactly 100%", "Under 88%"], "Over 90%.")],
        [q("A patient going home on apixaban for DVT asks if the pill will melt the clot. Best answer?", "No; it stops the clot from growing and new ones forming while your body breaks it down", ["Yes, within a day", "Yes, but only if you walk", "No, so you need surgery"], "Teaching point."),
          q("Which return precaution matters most for a patient discharged on an anticoagulant for DVT?", "Return for new chest pain, shortness of breath, or signs of bleeding", ["Return only if the leg itches", "No return precautions are needed", "Return if appetite increases"], "PE and bleeding warning signs.")])
    ]),

    /* ---------- 10b ---------- */
    S("10b-vte-anticoagulants", "10b. VTE anticoagulants", "VTE objective 6. Slides 81–85, 88.", [
      C("Heparins",
        tbl(["", "<strong>LMWH (enoxaparin)</strong>", "<strong>Unfractionated heparin</strong>"], [
          ["Route", "<strong>SQ</strong>, rapid onset", "<strong>IV bolus then infusion</strong>, immediate"],
          ["Best for", "<strong>Pregnancy (treatment of choice)</strong>; bridge to warfarin", "<strong>Unstable PE</strong> when thrombolysis or a procedure is expected; <strong>severe renal failure</strong>; need for <strong>rapid reversal</strong>"],
          ["Avoid", "<strong>Late CKD (stage 4–5)</strong>", "Can cause <strong>HIT</strong>"]]) +
        hy("<strong>Warfarin bridge</strong>: give LMWH <strong>together with warfarin for at least 5 days</strong> and until the <strong>INR is therapeutic for 24 hours</strong>."),
        ["lmwh", "ufh", "warfarin-bridge"],
        [q("Which anticoagulant is the treatment of choice for VTE in pregnancy?", "LMWH (enoxaparin)", ["Warfarin", "Apixaban", "Rivaroxaban"], "LMWH."),
          q("Which anticoagulant is preferred when rapid reversal or an urgent procedure may be needed?", "IV unfractionated heparin", ["Warfarin", "Rivaroxaban", "Enoxaparin"], "UFH."),
          q("In which kidney stage should LMWH be avoided?", "CKD stage 4 or 5", ["CKD stage 1", "Normal kidneys", "CKD stage 2"], "Late-stage CKD."),
          q("How long is LMWH overlapped with warfarin?", "At least 5 days and until INR is therapeutic for 24 hours", ["1 day", "Until the first INR is drawn", "3 months"], "Bridge."),
          q("Which serious side effect can unfractionated heparin cause?", "Heparin-induced thrombocytopenia (HIT)", ["Purple toe syndrome", "Lupus", "Hyperthyroidism"], "HIT."),
          q("How is LMWH given?", "Subcutaneous injection", ["IV infusion only", "By mouth", "Inhaled"], "SQ.")],
        [q("A PE patient with BP 85/55 may need thrombolysis or catheter therapy shortly. Which anticoagulant is preferred now?", "IV unfractionated heparin", ["Oral apixaban", "Warfarin", "Enoxaparin weekly"], "UFH for possible procedure."),
          q("A patient with ESRD on dialysis has a new DVT. Which initial anticoagulant fits?", "Unfractionated heparin", ["Enoxaparin", "Rivaroxaban", "Apixaban 10 mg BID"], "Severe renal failure.")]),
      C("Warfarin and DOACs",
        tbl(["", "<strong>Warfarin</strong> (vitamin K antagonist)", "<strong>Apixaban / rivaroxaban</strong> (factor Xa)"], [
          ["Onset", "<strong>Delayed</strong>: bridge with LMWH", "<strong>Rapid, 1–2 hours</strong>; start in the ED and discharge"],
          ["Monitoring", "<strong>INR</strong>; many drug interactions", "<strong>None</strong>; costly"],
          ["Preferred for", "<strong>Antiphospholipid syndrome</strong>; usable in <strong>renal failure</strong>", "<strong>Most patients</strong> (preferred over warfarin)"],
          ["Pregnancy", "<strong>Never</strong> (teratogen)", "Not used"]]) +
        tbl(["DOAC VTE dosing", "Regimen", "Avoid"], [
          ["<strong>Apixaban</strong> (half-life 9–14 h)", "<strong>10 mg BID x 7 days</strong>, then <strong>5 mg BID</strong>", "CrCl under 15"],
          ["<strong>Rivaroxaban</strong> (half-life 5–13 h)", "<strong>15 mg BID x 21 days</strong>, then <strong>20 mg daily with food</strong>", "CrCl under 15"]]) +
        mn("<strong>Apixaban 10 for 7</strong>, then 5. <strong>Rivaroxaban 15 for 21</strong>, then 20 with food.") +
        hy("<strong>Anticoagulation contraindications:</strong> allergy, active bleeding (e.g. GI), history of hemorrhagic stroke, spinal cord or intracranial tumors."),
        ["warfarin-vte", "doac-vte", "apixaban-dose", "rivaroxaban-dose", "anticoag-contraindications"],
        [q("Which anticoagulant is preferred for antiphospholipid syndrome?", "Warfarin", ["Apixaban", "Rivaroxaban", "Aspirin alone"], "Warfarin."),
          q("Which anticoagulant must never be used in pregnancy?", "Warfarin", ["Enoxaparin", "Unfractionated heparin", "Dalteparin"], "Teratogen."),
          q("What is the apixaban regimen for DVT or PE?", "10 mg BID for 7 days, then 5 mg BID", ["5 mg daily from day 1", "15 mg BID for 21 days, then 20 mg daily", "2.5 mg daily"], "Apixaban."),
          q("What is the rivaroxaban regimen for DVT or PE?", "15 mg BID for 21 days, then 20 mg daily with food", ["10 mg BID for 7 days, then 5 mg BID", "20 mg BID forever", "5 mg weekly"], "Rivaroxaban."),
          q("Below what creatinine clearance should apixaban and rivaroxaban be avoided?", "15 mL/min", ["60 mL/min", "90 mL/min", "120 mL/min"], "CrCl under 15."),
          q("Why are DOACs preferred over warfarin for most VTE?", "Rapid onset and no INR monitoring", ["They are cheaper", "They are safe in pregnancy", "They dissolve clots"], "Convenience."),
          q("How quickly do factor Xa inhibitors start working?", "1 to 2 hours", ["5 days", "2 weeks", "24 hours after a bridge"], "Rapid onset."),
          q("Which is a contraindication to anticoagulation?", "History of hemorrhagic stroke", ["Prior DVT", "Age over 65", "Obesity"], "Slide 88.")],
        [q("A 45-year-old with an unprovoked DVT, normal kidneys, not pregnant, no APS, is going home from the ED. Which regimen fits?", "Apixaban 10 mg BID for 7 days, then 5 mg BID", ["Warfarin alone without a bridge", "Enoxaparin for 3 days then stop", "Aspirin 81 mg"], "DOAC preferred."),
          q("A patient with triple-positive antiphospholipid syndrome has a DVT. Long-term anticoagulant?", "Warfarin", ["Rivaroxaban", "Apixaban", "Aspirin"], "APS: warfarin."),
          q("A patient starting rivaroxaban for PE asks how to take it. Best instruction?", "15 mg twice daily for 3 weeks, then 20 mg once daily with food", ["20 mg twice daily forever", "10 mg twice daily for a week", "Take it only when the leg hurts"], "Rivaroxaban dosing.")])
    ]),

    /* ---------- 10c ---------- */
    S("10c-thrombolysis-embolectomy-ivc", "10c. Thrombolysis, embolectomy and IVC filters", "VTE objective 6. Slides 86–91.", [
      C("tPA and its contraindications",
        "<p><strong>tPA actively breaks down</strong> the clot.</p>" +
        tbl(["Approach", "When"], [["<strong>Systemic thrombolysis</strong>", "<strong>High-risk PE</strong>: persistent hypotension, obstructive shock, cardiac arrest (reserved because of bleeding)"], ["<strong>Catheter-directed</strong>", "Selected patients with impending cardiopulmonary failure or deterioration"]]) +
        "<p>Major risk: <strong>bleeding, including intracranial hemorrhage</strong>.</p>" +
        tbl(["Absolute contraindications to tPA", ""], [["<strong>Any prior intracranial hemorrhage</strong>", "<strong>Ischemic stroke within 3 months</strong>"], ["<strong>Suspected aortic dissection</strong>", "<strong>Active bleeding</strong>"], ["Recent head/face trauma with fracture or brain injury", "Recent brain or spinal surgery"], ["Known brain or spinal cord malignancy", ""]]) +
        note("Relative contraindications (speaker notes): age over 75, current anticoagulation, pregnancy, noncompressible punctures, CPR over 10 minutes, internal bleeding in 2–4 weeks, poorly controlled or SBP over 180 / DBP over 110, dementia, remote stroke, major surgery within 3 weeks."),
        ["tpa-indication", "tpa-catheter", "tpa-absolute-ci"],
        [q("When is systemic thrombolysis used for PE?", "High-risk PE with persistent hypotension, shock or arrest", ["Every PE", "Low-risk PE", "Subsegmental PE only"], "High-risk PE."),
          q("What is the major risk of tPA?", "Bleeding, including intracranial hemorrhage", ["Hyperkalemia", "Liver failure", "Seizures only"], "Bleeding."),
          q("Which is an absolute contraindication to tPA?", "Ischemic stroke within 3 months", ["Age 70", "Prior DVT", "Diabetes"], "Absolute."),
          q("Which vascular emergency is an absolute contraindication to tPA?", "Suspected aortic dissection", ["PAD", "Varicose veins", "Raynaud phenomenon"], "Dissection."),
          q("Is age over 75 an absolute or relative contraindication to tPA?", "Relative", ["Absolute", "Not a contraindication at all", "An indication"], "Relative."),
          q("Which tumor location is an absolute tPA contraindication?", "Brain or spinal cord", ["Prostate", "Skin", "Thyroid"], "CNS malignancy.")],
        [q("A patient in shock from a massive PE had an ischemic stroke 6 weeks ago. Can she get systemic tPA?", "No; ischemic stroke within 3 months is an absolute contraindication", ["Yes, the stroke was ischemic", "Yes, at half dose", "Only if over 75"], "Absolute contraindication."),
          q("A hypotensive patient with suspected PE also has tearing back pain and a widened mediastinum. Should tPA be given?", "No; suspected aortic dissection is an absolute contraindication", ["Yes, immediately", "Yes, after aspirin", "Only catheter-directed"], "Dissection.")]),
      C("Embolectomy and IVC filters",
        tbl(["Embolectomy (surgical or catheter)", "Consider for..."], [["Mechanical removal of the clot", "<strong>High-risk PE</strong>, impending failure, <strong>contraindication to thrombolysis</strong>, <strong>persistent instability despite tPA</strong>"]]) +
        hy("<strong>IVC filter</strong>: traps clots on the way to the lungs; <strong>does not treat VTE</strong>.<br><strong>Main indication</strong>: acute DVT/PE with an <strong>absolute contraindication to anticoagulation</strong> (e.g. a cancer patient with VTE and active bleeding).<br>Also: <strong>recurrent PE despite anticoagulation</strong>.<br><strong>Not routine</strong> if the patient can be anticoagulated."),
        ["embolectomy", "ivc-filter-indications", "ivc-filter-not-routine"],
        [q("What is the main indication for an IVC filter?", "Acute VTE with an absolute contraindication to anticoagulation", ["Every DVT", "All patients over 65 with PE", "Varicose veins"], "Cannot anticoagulate."),
          q("Does an IVC filter treat the DVT?", "No, it only traps clots heading to the lungs", ["Yes, it dissolves it", "Yes, it replaces anticoagulation for good in all", "Only in the arm"], "Does not treat VTE."),
          q("Besides contraindication to anticoagulation, when is an IVC filter considered?", "Recurrent PE despite anticoagulation", ["First provoked DVT", "Superficial thrombophlebitis", "Varicose veins"], "Recurrent PE."),
          q("When is embolectomy considered for PE?", "High-risk PE when thrombolysis is contraindicated or fails", ["Low-risk PE", "Any subsegmental PE", "Superficial thrombophlebitis"], "Slide 89."),
          q("What are the two embolectomy approaches?", "Surgical (open) and catheter-based", ["Oral and IV", "Laser and radiation", "Compression and elevation"], "Two approaches.")],
        [q("A patient with metastatic cancer and a brisk GI bleed has a new proximal DVT. What prevents PE?", "IVC filter", ["Full-dose apixaban", "Thrombolysis", "Warfarin"], "Absolute contraindication to anticoagulation."),
          q("A patient with a new DVT and no bleeding risk asks for an IVC filter \"to be safe.\" Best answer?", "Not routinely recommended when anticoagulation can be given", ["Yes, everyone gets one", "Yes, instead of anticoagulation", "Only if over 40"], "Not routine."),
          q("A massive PE patient remains in shock 2 hours after systemic tPA. Next option?", "Catheter or surgical embolectomy", ["Second full dose of tPA only", "Oral apixaban", "Discharge"], "Persistent instability.")])
    ]),

    /* ---------- 10d ---------- */
    S("10d-anticoagulation-duration", "10d. How long to anticoagulate", "VTE objective 6. Slides 95–97.", [
      C("Duration by scenario",
        tbl(["Scenario", "Duration"], [
          ["<strong>First provoked</strong> proximal DVT or PE (surgery, trauma, temporary immobility, long flight)", "<strong>3 months</strong>"],
          ["<strong>First unprovoked</strong> (no trigger found)", "<strong>At least 3 months, then reassess</strong>; extended (6–12 months or longer) often recommended if bleeding risk is acceptable"],
          ["<strong>Recurrent</strong> DVT/PE", "<strong>Indefinite</strong>"],
          ["<strong>Persistent risk factor</strong> (active cancer, APS)", "<strong>Extended</strong>"]]) +
        hy("Duration weighs <strong>recurrence risk</strong> (provoked vs unprovoked, prior VTE, persistent risk) against <strong>major bleeding risk</strong> and <strong>patient preference</strong>. <strong>Routine D-dimer, repeat US, and thrombophilia testing are not needed</strong> just to decide duration.") +
        mn("<strong>Provoked = 3. Unprovoked = 3 and rethink. Recurrent = forever.</strong>"),
        ["duration-provoked", "duration-unprovoked", "duration-recurrent", "duration-factors"],
        [q("How long is a first provoked DVT or PE treated?", "3 months", ["2 weeks", "Lifelong", "10 years"], "3 months."),
          q("How long is a first unprovoked VTE treated?", "At least 3 months, then reassess for extended therapy", ["2 weeks", "Exactly 1 month", "Never treated"], "Reassess."),
          q("How long is recurrent VTE treated?", "Indefinitely", ["3 months", "6 weeks", "Until the swelling resolves"], "Indefinite."),
          q("Is thrombophilia testing needed to decide anticoagulation duration?", "Not routinely", ["Always", "Only in men", "Only after 1 week"], "Not needed solely for duration."),
          q("Which persistent risk factor calls for extended anticoagulation?", "Active cancer", ["A healed ankle fracture", "A completed flight", "Past pregnancy"], "Active cancer or APS.")],
        [q("A 35-year-old develops a DVT after a long flight to Asia; no other risks. How long should she be anticoagulated?", "3 months", ["Lifelong", "2 weeks", "No anticoagulation"], "Provoked."),
          q("A 60-year-old has a second unprovoked PE. Duration?", "Indefinite anticoagulation", ["3 months", "6 weeks", "No anticoagulation"], "Recurrent."),
          q("A 50-year-old with no identifiable trigger has a first PE and low bleeding risk. After 3 months, what is often recommended?", "Extended anticoagulation", ["Stop and never reassess", "Switch to aspirin only", "IVC filter"], "Unprovoked.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-vte-special-populations", "11. VTE in pregnancy, CKD and cancer", "VTE objective 7. Slides 53, 60, 70, 72–76, 81–85, 95.", [
      C("Pregnancy",
        tbl(["Step", "Pregnancy"], [
          ["<strong>D-dimer</strong>", "Can exclude PE <strong>with low suspicion</strong> (3-month VTE rate after negative 0.32%), but <strong>rises with gestational age</strong>; under 5% are negative in the 3rd trimester; no accepted pregnancy cutoff; <strong>pregnancy-adapted YEARS</strong> may be used"],
          ["<strong>DVT symptoms present</strong>", "<strong>Leg compression US</strong>: positive = <strong>treat</strong>, chest imaging may not be needed; negative does <strong>not</strong> exclude PE"],
          ["No DVT symptoms", "Routine bilateral leg US not needed; go to pulmonary imaging if PE can't be excluded"],
          ["<strong>Chest x-ray</strong>", "Alternate causes; picks the imaging: <strong>normal CXR = V/Q or CTA</strong>; <strong>abnormal CXR = CTA</strong>"],
          ["<strong>Treatment</strong>", "<strong>LMWH</strong>. <strong>Never warfarin</strong>"]]),
        ["pregnancy-ddimer", "pregnancy-leg-us", "pregnancy-imaging", "pregnancy-treatment"],
        [q("Which anticoagulant is preferred for VTE in pregnancy?", "LMWH", ["Warfarin", "Apixaban", "Rivaroxaban"], "LMWH."),
          q("In a pregnant patient with suspected PE and leg symptoms, which test comes first?", "Leg compression ultrasound", ["CTPA", "V/Q scan", "D-dimer only"], "US if DVT symptoms."),
          q("A pregnant patient with suspected PE has an abnormal chest x-ray. Which imaging?", "CTA", ["V/Q scan", "Nothing", "Leg ultrasound only"], "Abnormal CXR = CTA."),
          q("A pregnant patient with suspected PE has a normal chest x-ray. Which imaging can be used?", "V/Q scan or CTA", ["Only MRI", "Only CTA", "None"], "Normal CXR: V/Q or CTA."),
          q("What happens to D-dimer as pregnancy progresses?", "It rises, so it becomes less useful", ["It falls to zero", "It stays the same", "It becomes 100% specific"], "Rises with gestational age."),
          q("Which pregnancy-adapted rule can be used with D-dimer?", "YEARS criteria", ["PERC", "CHA2DS2-VASc", "Duke criteria"], "Pregnancy-adapted YEARS.")],
        [q("A pregnant woman at 30 weeks has dyspnea, no leg symptoms, and an abnormal chest x-ray. Which test for PE?", "CTA", ["V/Q scan", "Bilateral leg ultrasound only", "D-dimer and discharge"], "Abnormal CXR."),
          q("A pregnant woman is diagnosed with PE. Which treatment?", "LMWH (enoxaparin)", ["Warfarin", "Apixaban", "No treatment until delivery"], "LMWH."),
          q("A pregnant woman with suspected PE has a swollen left calf and a negative leg ultrasound. Is PE excluded?", "No; continue the PE workup", ["Yes", "Yes, if D-dimer is positive", "Yes, in the third trimester"], "Negative US does not exclude.")]),
      C("Chronic kidney disease and cancer",
        tbl(["", "<strong>Severe CKD / AKI</strong>", "<strong>Active cancer</strong>"], [
          ["Imaging", "<strong>V/Q scan</strong> preferred (GFR under 30 or AKI: avoid contrast)", "Usual workup"],
          ["Anticoagulant", "<strong>UFH</strong> (severe renal failure); <strong>warfarin</strong> usable; <strong>avoid LMWH in CKD 4–5</strong>; <strong>avoid DOACs with CrCl under 15</strong>", "<strong>DOAC or LMWH</strong>"],
          ["Duration", "Per scenario", "<strong>Extended</strong> while cancer is active"],
          ["If bleeding", "", "<strong>IVC filter</strong> if anticoagulation absolutely contraindicated"]]) +
        hy("<strong>Long-term choice:</strong> general = <strong>DOAC</strong>; cancer = <strong>DOAC or LMWH</strong>; pregnancy = <strong>LMWH</strong>; APS = <strong>warfarin</strong>."),
        ["ckd-vte", "cancer-vte", "long-term-agent-choice"],
        [q("Which long-term anticoagulant options fit a patient with active cancer and VTE?", "DOAC or LMWH", ["Warfarin only", "Aspirin only", "No anticoagulation"], "Cancer: DOAC or LMWH."),
          q("Which PE imaging test is preferred in severe renal impairment?", "V/Q scan", ["CTPA", "Contrast MRA", "Contrast venography"], "Avoid contrast."),
          q("Which anticoagulants can be used in severe renal failure?", "Unfractionated heparin and warfarin", ["Enoxaparin and apixaban", "Rivaroxaban only", "Dabigatran only"], "UFH, warfarin."),
          q("What is the general-population long-term anticoagulant of choice for VTE?", "A DOAC (factor Xa inhibitor)", ["Warfarin", "Aspirin", "LMWH for life"], "DOAC."),
          q("How long is anticoagulation for VTE with active cancer?", "Extended while the cancer is active", ["Exactly 2 weeks", "No anticoagulation", "Until the D-dimer normalizes"], "Persistent risk factor.")],
        [q("A patient with CKD stage 5 (not on dialysis) and AKI has suspected PE. Which test and which initial anticoagulant?", "V/Q scan; unfractionated heparin", ["CTPA; enoxaparin", "CTPA; rivaroxaban", "D-dimer only; apixaban"], "Avoid contrast and LMWH/DOAC."),
          q("A patient on chemo for colon cancer has a new PE, normal kidneys and no bleeding. Long-term anticoagulant?", "A DOAC or LMWH, extended while cancer is active", ["Warfarin for 3 months only", "Aspirin", "IVC filter alone"], "Cancer-associated VTE.")])
    ]),

    /* ---------- 12 ---------- */
    S("12-dvt-disposition", "12. DVT: outpatient vs inpatient", "VTE objective 8. Slide 38.", [
      C("Who goes home and who stays",
        tbl(["<strong>Outpatient</strong> (all of these)", "<strong>Inpatient</strong> (any of these)"], [[
          "<strong>Hemodynamically stable</strong><br><strong>Low bleeding risk</strong><br><strong>Adequate renal function</strong> for anticoagulation<br><strong>Social support</strong> at home",
          "<strong>Massive (iliofemoral) DVT</strong><br><strong>Concurrent PE</strong><br><strong>Active bleeding or high bleeding risk</strong><br><strong>Severe renal impairment</strong> complicating anticoagulants<br>Other comorbidities needing hospital care"]]) +
        mn("Home if <strong>SAFE</strong>: <strong>S</strong>table, <strong>A</strong>dequate kidneys, <strong>F</strong>amily/social support, <strong>E</strong>xpected low bleeding."),
        ["dvt-outpatient", "dvt-inpatient"],
        [q("Which DVT needs inpatient management?", "Massive iliofemoral DVT", ["A small calf DVT in a stable patient", "Superficial thrombophlebitis", "Any provoked DVT"], "Iliofemoral."),
          q("Which kidney status allows outpatient DVT treatment?", "Adequate renal function for anticoagulation", ["Severe renal impairment", "AKI on dialysis", "Any CKD stage 5"], "Adequate renal function."),
          q("If a DVT patient also has a PE, where should the DVT be managed per the deck?", "Inpatient", ["Outpatient always", "Urgent care only", "Telemedicine only"], "Presents with PE."),
          q("Which social factor is required for outpatient DVT care?", "Social support at home", ["A car", "A private room", "Two jobs"], "Social support."),
          q("Which bleeding status requires inpatient DVT care?", "Active bleeding or high bleeding risk", ["Low bleeding risk", "No bleeding history", "Remote nosebleed as a child"], "High bleeding risk.")],
        [q("A stable 40-year-old with a popliteal DVT, normal kidneys, low bleeding risk and a supportive spouse. Disposition?", "Outpatient with a DOAC and follow-up", ["ICU admission", "IVC filter and admission", "Thrombolysis"], "Meets outpatient criteria."),
          q("A 70-year-old with a DVT has melena this morning. Disposition?", "Inpatient", ["Outpatient apixaban", "Discharge without treatment", "Outpatient warfarin"], "Active bleeding."),
          q("A homeless patient with a femoral DVT is otherwise stable with normal kidneys. What criterion is missing for outpatient care?", "Social support at home", ["Hemodynamic stability", "Renal function", "Low bleeding risk"], "Social support."),
          q("A patient has a massive swollen leg from an iliofemoral DVT. Disposition?", "Inpatient", ["Outpatient", "Urgent care follow-up in a week", "Discharge with compression only"], "Massive DVT.")])
    ]),

    /* ---------- 13 ---------- */
    S("13-post-thrombotic-syndrome", "13. Post-thrombotic syndrome", "VTE objective 9. Slides 8, 40.", [
      C("Post-thrombotic syndrome",
        "<p><strong>Post-thrombotic syndrome (PTS)</strong>: <strong>chronic venous insufficiency after a DVT</strong> that continues after the clot has resolved. The clot scars the valves, causing reflux and venous hypertension.</p>" +
        tbl(["Symptoms", "Treatment", "Prevention"], [["<strong>Pain and swelling</strong> in the leg that had the DVT (can progress to skin changes and ulcers)", "<strong>Compression stockings</strong>, <strong>elevation</strong>, <strong>pain management</strong>", "<strong>Prevent recurrent DVT</strong> (adequate anticoagulation)"]]) +
        hy("PTS is a <strong>secondary cause of venous insufficiency</strong>. The key prevention is <strong>preventing another DVT</strong> in the same leg."),
        ["pts-definition", "pts-treatment", "pts-prevention"],
        [q("What is post-thrombotic syndrome?", "Venous insufficiency in a leg after a DVT, continuing after the clot resolves", ["A new PE", "Arterial insufficiency after a clot", "Bleeding from anticoagulants"], "Venous insufficiency after DVT."),
          q("What are the symptoms of post-thrombotic syndrome?", "Pain and swelling in the leg that had the DVT", ["Chest pain and hemoptysis", "Cold, pulseless foot", "Fingers turning white"], "Pain and swelling."),
          q("What is the treatment of post-thrombotic syndrome?", "Compression stockings, elevation and pain control", ["Thrombolysis", "IVC filter", "Antibiotics"], "Conservative."),
          q("What is the main way to prevent post-thrombotic syndrome?", "Prevent recurrent DVT", ["Avoid walking", "Take antibiotics", "Avoid compression"], "Prevent recurrence."),
          q("Post-thrombotic syndrome is which type of venous insufficiency risk factor?", "Secondary", ["Primary", "Neither", "Arterial"], "Secondary (DVT).")],
        [q("Two years after a left femoral DVT, a patient has aching and swelling in the left leg by evening with brown ankle skin. Diagnosis?", "Post-thrombotic syndrome", ["New PE", "PAD", "Raynaud"], "Venous insufficiency after DVT."),
          q("A patient with post-thrombotic syndrome asks how to keep it from getting worse. Best advice?", "Wear compression stockings, elevate the leg, and avoid another DVT", ["Stop walking", "Get an IVC filter", "Take antibiotics"], "Treatment and prevention.")])
    ])
  ];
})();
