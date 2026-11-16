/* Cardio Part 2, Vascular Disease Part 1 (Diem, 150 slides): PAD, acute limb ischemia, gangrene, aneurysm, aortic dissection,
   vasculitis, AVM. Official Vascular objectives (PAD, Acute ischemic limb, Aneurysm, Aortic Dissection, Vasculitis headings)
   in order, one section each; the four-disease vasculitis objective is split per disease (18a–18d).
   Read from slide pictures: slide 85 (symptomatic AAA algorithm), slide 31 (asymptomatic testing flow, text extracted).
   Questions the deck asks aloud (slide 93 how much blood the abdomen holds, slide 102 why dissections are proximal) are
   answered from standard teaching or the speaker notes and labeled. Kawasaki CRASH and Burn mnemonic is standard teaching. */
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

  window.VASCULAR_DISEASE_PART_1_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-claudication-vs-pseudoclaudication", "1. Claudication vs pseudoclaudication", "PAD objective 1. Slides 6–10.", [
      C("Intermittent claudication",
        "<p><strong>Intermittent claudication</strong>: pain (ache or cramp), numbness, or weakness in leg muscles that <strong>occurs with exercise</strong> and is <strong>relieved by rest</strong>.</p>" +
        "<ol class=\"concept-chain\"><li>At rest, a narrowed artery still supplies enough blood: <strong>no pain at rest</strong></li><li>Walking raises muscle <strong>demand</strong></li><li>The atherosclerotic artery cannot raise <strong>supply</strong>: a <strong>supply–demand mismatch</strong></li><li>Ischemic muscle hurts; stopping lowers demand and the pain goes away</li></ol>" +
        hy("Symptoms are <strong>distal to the lesion</strong>: calf claudication = femoral/popliteal disease; buttock/thigh = aortoiliac (Leriche)."),
        ["claudication-definition", "claudication-mechanism", "claudication-location"],
        [q("What relieves intermittent claudication?", "Rest (stopping walking)", ["Bending forward while standing still", "Lying flat only", "Sitting for 30 minutes only"], "Stopping lowers muscle O2 demand back below what the narrowed artery can supply."),
          q("What causes claudication pain?", "A mismatch between blood supply and the higher demand of exercising muscle", ["Nerve root compression", "Venous valve failure", "Muscle tear"], "Walking muscles need more blood than a narrowed artery can deliver."),
          q("Where are claudication symptoms felt relative to the arterial lesion?", "Distal to the lesion", ["Proximal to the lesion", "Only in the opposite leg", "Only in the back"], "Muscles beyond the blockage are starved, so pain is distal to it (e.g., calf for femoral disease)."),
          q("Why is there no claudication pain at rest?", "Blood supply is adequate for inactive muscle", ["The artery opens at rest", "Nerves stop firing at rest", "Veins drain better at rest"], "Supply meets the low resting demand.")],
        [q("A 66-year-old smoker gets cramping in his right calf after walking two blocks; it goes away within minutes of standing still. Most likely cause?", "Intermittent claudication from PAD", ["Lumbar spinal stenosis", "DVT", "Achilles tendon rupture"], "Calf cramping after a set distance, relieved by standing still, is claudication."),
          q("A patient's claudication is in the buttocks and thighs. Where is the arterial disease most likely?", "Aortoiliac", ["Popliteal", "Tibial", "Radial"], "Symptoms are distal to the lesion; buttock/thigh means aortoiliac.")]),
      C("Pseudoclaudication (lumbar spinal stenosis)",
        "<p><strong>Pseudoclaudication</strong> mimics PAD but is <strong>not caused by PAD</strong>; it is usually <strong>lumbar spinal stenosis</strong>.</p>" +
        tbl(["", "Vascular claudication", "Pseudoclaudication"], [
          ["Cause", "Arterial narrowing", "Nerve compression (spinal stenosis)"],
          ["Triggered by", "Walking a reproducible distance", "<strong>Standing erect</strong> (even without walking)"],
          ["Relieved by", "<strong>Standing still / rest</strong>", "<strong>Sitting or flexing at the waist</strong> (leaning forward, e.g. on a shopping cart)"],
          ["Symptoms", "Cramp, ache in muscles", "Persistent pain, weakness, <strong>tingling</strong>"],
          ["Pulses", "Decreased", "Normal"]]) +
        hy("<strong>No pain with sitting</strong> was the <strong>most specific</strong> finding for spinal stenosis.") +
        "<p><strong>Calf pain differential.</strong> Can't miss: <strong>claudication, ischemic leg, DVT</strong>. Others: muscle strain, Baker cyst, superficial thrombophlebitis, varicose veins, Achilles rupture, myositis, vasculitis, spinal stenosis.</p>" +
        note("Normal pulses in pseudoclaudication is standard teaching, not on the slide."),
        ["pseudoclaudication", "pseudo-specific-finding", "calf-pain-ddx"],
        [q("What usually causes pseudoclaudication?", "Lumbar spinal stenosis", ["PAD", "DVT", "Varicose veins"], "Spinal stenosis pinches nerve roots, mimicking claudication."),
          q("What exacerbates pseudoclaudication?", "Standing erect", ["Sitting", "Leaning forward", "Lying on the side"], "Standing extends the spine and narrows the canal further."),
          q("What relieves pseudoclaudication?", "Sitting or flexing forward at the waist", ["Standing still", "Elevating the legs", "Walking faster"], "Flexing forward opens the spinal canal and relieves the nerves."),
          q("Which finding is most specific for spinal stenosis rather than PAD?", "No pain while sitting", ["Pain with walking", "Calf cramping", "Smoking history"], "Sitting relieves stenosis even without walking, which PAD never needs."),
          q("Which three calf pain diagnoses are can't-miss?", "Claudication, ischemic leg, DVT", ["Muscle strain, Baker cyst, myositis", "Varicose veins, Achilles rupture, cramps", "Spinal stenosis, vasculitis, strain"], "Claudication, acute limb ischemia and DVT can cost a limb or life if missed. (Slide 10)")],
        [q("A 70-year-old gets leg pain and tingling while standing at the sink and feels better leaning on a shopping cart. Pulses are normal. Most likely cause?", "Lumbar spinal stenosis (pseudoclaudication)", ["PAD", "Acute limb ischemia", "DVT"], "Pain with standing relieved by leaning forward (shopping cart sign) with normal pulses = spinal stenosis."),
          q("Two patients have leg pain with walking. Patient A gets relief only by sitting down; patient B gets relief by standing still. Which has vascular claudication?", "Patient B", ["Patient A", "Both", "Neither"], "Vascular claudication eases with rest even standing.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-pad-primary-care-testing-management", "2. PAD in primary care: testing and management", "PAD objective 2. Slides 28, 31, 33–35.", [
      C("Who to test when asymptomatic",
        "<p>Measure an <strong>ABI</strong> in asymptomatic patients with:</p><ul>" +
        "<li><strong>Abnormal or absent pulse</strong></li><li><strong>Age 65 or older</strong></li><li><strong>Age 50–64 with PAD risk factors</strong></li></ul>" +
        tbl(["Resting ABI", "Next step (asymptomatic)"], [["<strong>0.90 or less</strong>", "<strong>PAD confirmed</strong>"], ["0.91–1.40", "No further testing needed if asymptomatic"], ["<strong>Over 1.40</strong>", "<strong>Toe-brachial index (TBI)</strong>"]]),
        ["asymptomatic-testing-who", "asymptomatic-abi-flow"],
        [q("Which asymptomatic patient should have an ABI?", "A 67-year-old with no symptoms", ["A healthy 30-year-old runner", "A 45-year-old with no risk factors", "A 55-year-old with no risk factors and normal pulses"], "Everyone 65 or older should get an ABI even without symptoms."),
          q("At what age range does an asymptomatic patient need risk factors to justify an ABI?", "50 to 64", ["18 to 30", "30 to 40", "Over 80 only"], "Age 50–64 with risk factors."),
          q("An asymptomatic patient has an ABI of 1.1. What next?", "No further testing", ["Toe-brachial index", "CTA", "Vascular surgery referral"], "Normal ABI in an asymptomatic patient."),
          q("An asymptomatic patient has an ABI of 1.6. What next?", "Toe-brachial index", ["Nothing", "Start cilostazol", "Emergent embolectomy"], "ABI over 1.4 means calcified arteries, so use the toe-brachial index instead.")],
        [q("A 58-year-old diabetic smoker with no leg symptoms has a diminished dorsalis pedis pulse. What test is appropriate?", "Resting ABI", ["No testing", "Catheter angiography", "Lumbar MRI"], "Abnormal pulse and age 50–64 with risk factors."),
          q("A 68-year-old asymptomatic patient has an ABI of 0.82. What does this mean?", "PAD is confirmed", ["Normal result", "Non-compressible vessels", "Needs a TBI"], "0.90 or less = PAD.")]),
      C("Primary care management of PAD",
        "<p><strong>Goal:</strong> reduce <strong>MACE</strong> (major adverse cardiovascular events) and <strong>MALE</strong> (major adverse limb events), improve symptoms and function, preserve the limb.</p>" +
        hy("Cornerstones: <strong>risk factor control, lifestyle, antiplatelet therapy</strong>.<br>HTN and DM control, <strong>high-intensity statin</strong>, <strong>smoking cessation</strong>, healthy diet, weight loss, <strong>structured exercise therapy</strong> (improves symptoms).") +
        tbl(["Clinical category", "Focus"], [["Asymptomatic PAD", "Cardiovascular risk reduction"], ["Chronic symptomatic PAD", "Risk reduction <strong>and symptom relief</strong>"]]),
        ["pad-goals", "pad-lifestyle"],
        [q("What does MALE stand for in PAD care?", "Major adverse limb events", ["Mild arterial limb edema", "Mean ankle-leg elevation", "Major arterial lipid excess"], "MALE = major adverse limb events, like amputation or acute limb ischemia."),
          q("Which statin intensity is recommended in PAD?", "High intensity", ["Low intensity", "No statin", "Moderate only if LDL over 190"], "LDL to goal with high-intensity statin."),
          q("Which non-drug therapy improves claudication symptoms?", "Structured exercise therapy", ["Bed rest", "Leg elevation", "Compression stockings"], "Supervised exercise trains collaterals and is the best non-drug therapy."),
          q("What is the main focus for asymptomatic PAD?", "Cardiovascular risk reduction", ["Revascularization", "Amputation", "Cilostazol"], "Asymptomatic PAD signals high CV risk, so focus on preventing MI and stroke.")],
        [q("A 64-year-old with asymptomatic PAD (ABI 0.85) smokes and has an LDL of 140 on no statin. Which plan fits?", "Smoking cessation, high-intensity statin, and risk factor control", ["Bypass surgery", "Cilostazol alone", "No treatment since he has no symptoms"], "Asymptomatic PAD: quit smoking, high-intensity statin and control risk factors."),
          q("A patient with claudication asks what single non-drug step will most help his walking distance. Best answer?", "A structured exercise program", ["Avoid walking", "Wear tight compression stockings", "Keep legs elevated"], "Structured exercise improves walking distance the most.")]),
      C("PAD drugs",
        tbl(["Drug", "Use", "Pearl"], [
          ["<strong>Aspirin 81–325 mg daily</strong> (81 common)", "Symptomatic or asymptomatic", "Lowers CV events"],
          ["<strong>Clopidogrel 75 mg daily</strong>", "Symptomatic or asymptomatic", "Lowers CV events"],
          ["<strong>Rivaroxaban + aspirin</strong>", "<strong>Symptomatic PAD</strong> and <strong>after revascularization</strong>", "Lowers CV <strong>and limb</strong> events; weigh bleeding risk"],
          ["<strong>Cilostazol</strong> (Pletal)", "<strong>Improves walking distance</strong> and claudication; can start with exercise therapy", "<strong>Contraindicated in CHF</strong> (raises mortality)"]]) +
        hy("Antiplatelet: <strong>symptomatic PAD = single antiplatelet recommended (Class I)</strong>; <strong>asymptomatic = reasonable (Class IIa)</strong>, weigh bleeding. Asymptomatic PAD still carries high CV risk, but the evidence is weaker.") +
        mn("<strong>Cilostazol = Claudication, not CHF.</strong>"),
        ["pad-antiplatelet", "pad-rivaroxaban", "cilostazol", "antiplatelet-class"],
        [q("Which drug improves walking distance in claudication?", "Cilostazol", ["Aspirin", "Clopidogrel", "Atorvastatin"], "Cilostazol (a PDE3 inhibitor) dilates arteries and improves walking distance."),
          q("In which condition is cilostazol contraindicated?", "Heart failure", ["Diabetes", "Hypertension", "Hyperlipidemia"], "PDE3 inhibitors raise mortality in heart failure."),
          q("Which combination lowers both cardiovascular and limb events in symptomatic PAD?", "Rivaroxaban plus aspirin", ["Cilostazol plus warfarin", "Clopidogrel plus prasugrel", "Aspirin plus ibuprofen"], "Low-dose rivaroxaban plus aspirin lowers both CV and limb events."),
          q("What is the clopidogrel dose for PAD?", "75 mg daily", ["300 mg daily", "10 mg daily", "600 mg weekly"], "Clopidogrel 75 mg daily is the PAD dose."),
          q("How strong is the recommendation for single antiplatelet therapy in symptomatic PAD?", "Class I (recommended)", ["Class III (harm)", "Class IIb (may consider)", "Not addressed"], "Symptomatic PAD gets single antiplatelet therapy as a Class I recommendation."),
          q("How strong is the recommendation for antiplatelet therapy in asymptomatic PAD?", "Class IIa (reasonable)", ["Class I", "Class III", "Contraindicated"], "In asymptomatic PAD, antiplatelets are only 'reasonable' (IIa)."),
          q("When is rivaroxaban plus aspirin recommended in PAD?", "Symptomatic PAD and after revascularization", ["Asymptomatic PAD only", "Acute limb ischemia instead of heparin", "Only in heart failure"], "Rivaroxaban plus aspirin is for symptomatic PAD and after revascularization. (Slide 34)")],
        [q("A patient with lifestyle-limiting claudication and HFrEF (EF 30%) asks about cilostazol. Best response?", "Avoid it; cilostazol is contraindicated in heart failure", ["Start it at full dose", "Start it with digoxin", "Use it instead of aspirin"], "Cilostazol raises mortality in heart failure."),
          q("A patient with claudication and no heart failure has not improved enough with exercise. Which drug can improve walking distance?", "Cilostazol", ["Rivaroxaban alone", "Metoprolol", "Warfarin"], "Cilostazol improves walking distance when exercise isn't enough."),
          q("A patient just had femoral stenting for symptomatic PAD and has low bleeding risk. Which antithrombotic plan reduces both CV and limb events?", "Rivaroxaban plus aspirin", ["No antithrombotic", "Cilostazol alone", "Warfarin plus clopidogrel plus aspirin"], "After revascularization, rivaroxaban plus aspirin cuts CV and limb events.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-pad-risk-features-diagnosis-management", "3. PAD: risk factors, features, diagnosis and revascularization", "PAD objective 3. Slides 4–5, 11–16, 19, 24–30, 37–39.", [
      C("Risk factors and history",
        "<p><strong>PAD</strong> = atherosclerosis of the lower (sometimes upper) extremities: subintimal lipid and fibrous plaque that <strong>narrows the lumen</strong> or <strong>ruptures and embolizes</strong>. Patients call it \"poor circulation.\"</p>" +
        "<p>More common in <strong>men</strong> and <strong>African Americans</strong>, rises with age.</p>" +
        tbl(["Risk factors (same as CVD)", "History clues"], [["<strong>Smoking</strong>, <strong>diabetes</strong>, hyperlipidemia, hypertension, age, family history", "Claudication, CV risk factors, <strong>known CAD, stroke or MI</strong>"]]) +
        hy("PAD carries a <strong>high 10-year cardiovascular risk</strong>: treat it as a coronary risk equivalent."),
        ["pad-definition", "pad-risk-factors", "pad-cv-risk"],
        [q("PAD is caused by:", "Atherosclerosis of the extremity arteries", ["Venous valve failure", "Vasculitis in all cases", "Nerve compression"], "PAD is atherosclerosis in the limb arteries."),
          q("Which demographic groups have higher PAD incidence?", "Men and African Americans", ["Young women", "Children", "Asian women under 40"], "Men and African Americans have higher PAD rates. (Slide 4)"),
          q("What does a PAD diagnosis imply about cardiovascular risk?", "High 10-year cardiovascular risk", ["No added CV risk", "Lower CV risk than average", "Risk only to the leg"], "PAD is a marker of systemic atherosclerosis and high CV risk."),
          q("Which risk factor list matches PAD?", "Smoking, diabetes, hyperlipidemia, hypertension, age, family history", ["Obesity, asthma, migraine", "Pregnancy, OCPs, travel", "Alcohol, gout, anemia"], "PAD shares the same risk factors as CAD.")],
        [q("A 70-year-old with diabetes, prior MI and 50 pack-years says his legs have \"poor circulation.\" What should be screened for?", "PAD", ["Raynaud phenomenon", "Kawasaki disease", "Varicose veins only"], "Diabetes, CAD and heavy smoking make PAD very likely.")]),
      C("Physical exam in PAD",
        tbl(["Early", "More severe disease"], [["<strong>Poor peripheral pulses</strong><br><strong>Bruit</strong> over the narrowed artery<br>Muscle atrophy", "<strong>Smooth, thin, shiny skin</strong><br><strong>Hair loss</strong><br>Dusky, bluish, <strong>cool</strong> skin<br><strong>Ulcers</strong><br><strong>Thickened nails</strong><br><strong>Dependent rubor</strong><br>Edema, if any, is <strong>mild</strong>"]]) +
        hy("<strong>Collaterals</strong>: the body grows a network of small vessels around a blockage, a natural bypass. They disappear on CTA after the blockage is opened.") +
        note("PAD ulcers are classically on the toes and pressure points, painful, with a punched-out look (standard teaching)."),
        ["pad-exam-early", "pad-exam-severe", "pad-collaterals"],
        [q("Which skin change suggests severe PAD?", "Smooth, thin, shiny skin with hair loss", ["Brawny hyperpigmentation at the ankle", "Pitting edema to the knee", "Warm erythema"], "Poor blood supply causes thin, shiny, hairless skin."),
          q("What is dependent rubor?", "Redness of the foot when it hangs down, from PAD", ["A rash from vasculitis", "Redness from cellulitis", "A DVT sign"], "Dangling the foot fills dilated vessels, turning it red; raising it blanches it."),
          q("How much edema does PAD usually cause?", "Little or mild", ["Massive pitting edema", "Unilateral severe edema", "Edema with weeping"], "If edema present it is mild."),
          q("What are collaterals in PAD?", "Small vessels that form a natural bypass around a blockage", ["Clots in the veins", "Plaques in the aorta", "Varicose veins"], "Collaterals grow around a blockage like a natural bypass."),
          q("What sound may be heard over a narrowed artery?", "A bruit", ["A friction rub", "An opening snap", "A knock"], "Turbulent flow through a narrowing makes a bruit.")],
        [q("A smoker's foot is cool, hairless and shiny with thick toenails and turns red when he dangles it. Most likely diagnosis?", "Chronic PAD", ["Venous insufficiency", "Cellulitis", "DVT"], "Shiny hairless skin and dependent rubor = chronic PAD."),
          q("A CTA before and after iliac stenting shows a web of small vessels that disappears after the stent. What were they?", "Collateral vessels", ["Tumor vessels", "Varicose veins", "Contrast artifact"], "Collaterals vanish once flow is restored.")]),
      C("Complications of PAD",
        tbl(["Complication", "About"], [["Worsening claudication over time", "<strong>about 20%</strong>"], ["Ischemic ulcers needing revascularization", "about 10%"], ["<strong>Amputation</strong>", "<strong>about 1–2%</strong>"], ["<strong>Cardiovascular event</strong> (stroke, MI)", "<strong>about 20%</strong>"]]) +
        hy("A PAD patient is far more likely to have an <strong>MI or stroke</strong> than to lose the leg."),
        ["pad-complications"],
        [q("About what share of PAD patients need an amputation?", "About 1 to 2%", ["About 20%", "About 50%", "About 80%"], "Only about 1-2% of PAD patients lose a limb."),
          q("About what share of PAD patients have a cardiovascular event such as MI or stroke?", "About 20%", ["About 1%", "About 70%", "None"], "About 20% have an MI or stroke; PAD kills by the heart and brain."),
          q("About what share of PAD patients have worsening claudication over time?", "About 20%", ["About 90%", "About 2%", "100%"], "About 20% have worsening claudication.")],
        [q("A patient newly diagnosed with claudication fears losing his leg. Which statement is most accurate?", "Amputation is rare (1 to 2%); heart attack and stroke are a bigger risk", ["Most PAD patients need amputation", "PAD carries no heart risk", "Amputation risk is about 50%"], "CV events far outnumber amputations.")]),
      C("Imaging and other tests",
        tbl(["Test", "Role"], [
          ["<strong>ABI</strong>", "Establishes the <strong>physiologic diagnosis</strong>"],
          ["<strong>Arterial duplex US</strong>", "Flow and <strong>localizes</strong> stenosis; good for <strong>calcified vessels</strong>, avoiding contrast, <strong>graft or restenosis surveillance</strong>, serial follow-up"],
          ["<strong>Exercise treadmill test</strong>", "Measures walking limitation; for symptoms with normal or borderline ABI"],
          ["<strong>CTA</strong> (or MRA)", "<strong>Detailed anatomy for revascularization</strong> planning (lesion length, distribution); multilevel or aortoiliac disease; duplex inconclusive"],
          ["<strong>Catheter angiography</strong>", "Invasive; can <strong>treat at the same time</strong> (endovascular)"]]) +
        hy("Advanced imaging (duplex, CTA, MRA, angiography) is generally <strong>reserved for patients being considered for revascularization</strong>. Suspected limb-threatening ischemia needs <strong>emergent referral</strong>."),
        ["pad-duplex", "pad-cta", "pad-catheter-angio", "pad-imaging-reserved"],
        [q("Which test gives detailed arterial anatomy for revascularization planning?", "CTA", ["ABI", "Exercise treadmill test", "D-dimer"], "CTA maps the arteries for revascularization planning."),
          q("Which test is preferred when iodinated contrast should be avoided?", "Arterial duplex ultrasound", ["CTA", "Catheter angiography", "Contrast CT"], "Duplex ultrasound needs no contrast."),
          q("Which test can diagnose and treat PAD in one procedure?", "Catheter angiography", ["ABI", "Duplex ultrasound", "MRA"], "Catheter angiography allows stenting in the same procedure."),
          q("Which test is used for surveillance of a bypass graft?", "Arterial duplex ultrasound", ["CTA every month", "ABI only", "Chest x-ray"], "Duplex is used to watch bypass grafts for stenosis."),
          q("When is advanced imaging generally done in PAD?", "When revascularization is being considered", ["For every patient at diagnosis", "Never", "Only for asymptomatic patients"], "Imaging is only done when revascularization is planned."),
          q("What does the ABI establish?", "The physiologic diagnosis of PAD", ["Exact lesion anatomy", "Plaque composition", "Need for revascularization by itself"], "ABI proves reduced flow, establishing PAD physiologically.")],
        [q("A vascular surgeon needs lesion length and distribution in a patient with suspected multilevel aortoiliac disease before bypass. Which test?", "CTA with contrast", ["Resting ABI", "Exercise treadmill test", "Plain x-ray"], "CTA maps lesion length and distribution before bypass."),
          q("A patient with PAD and CKD needs the stenosis localized without contrast. Which test?", "Arterial duplex ultrasound", ["CTA", "Catheter angiography", "Contrast MRA"], "Duplex avoids contrast in CKD."),
          q("A patient had a fem-pop bypass 6 months ago and needs routine graft checks. Which test?", "Arterial duplex ultrasound", ["CTA every visit", "ABI alone", "Catheter angiography each time"], "Duplex surveys bypass grafts.")]),
      C("Revascularization",
        tbl(["Approach", "Indication"], [
          ["<strong>Percutaneous</strong> (angioplasty, stent)", "<strong>Short</strong> stenosis"],
          ["<strong>Arterial bypass</strong> (e.g. fem-pop, aortoiliac)", "<strong>Long</strong> stenosis; <strong>severe claudication (ABI under 0.4) refractory to medical therapy</strong>; <strong>acute limb ischemia</strong>; vasculogenic ED (<strong>Leriche</strong>)"]]),
        ["revasc-percutaneous", "revasc-bypass"],
        [q("Which revascularization fits a short arterial stenosis?", "Percutaneous angioplasty or stent", ["Bypass graft", "Amputation", "Sympathectomy"], "Short lesions do well with angioplasty or stent."),
          q("Which revascularization fits a long segment of stenosis?", "Arterial bypass", ["Angioplasty only", "Compression stockings", "Cilostazol only"], "Long lesions do better with bypass."),
          q("Which ABI with refractory severe claudication is an indication for bypass?", "Under 0.4", ["0.95", "1.2", "Over 1.4"], "Severe claudication, ABI under 0.4.")],
        [q("A patient has severe claudication despite exercise, cilostazol and risk control, with an ABI of 0.35 and a long femoral occlusion. Best option?", "Arterial bypass (fem-pop)", ["Angioplasty of a short lesion", "More exercise only", "Amputation"], "Long, severe, refractory disease needs bypass."),
          q("A patient has a short focal iliac stenosis causing lifestyle-limiting claudication. Which approach is usually chosen?", "Percutaneous angioplasty with stent", ["Open aortobifemoral bypass", "Amputation", "No treatment"], "Short focal lesions get angioplasty and stent.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-leriche-syndrome", "4. Leriche syndrome (aortoiliac occlusive disease)", "PAD objective 4. Slides 17–18, 37.", [
      C("Leriche syndrome",
        "<p>Severe atherosclerosis of the <strong>distal abdominal aorta and iliac arteries</strong>.</p>" +
        mn("Leriche triad, the <strong>3 Ps</strong> (standard teaching): <strong>buttock/thigh/hip claudication</strong>, <strong>impotence (erectile dysfunction)</strong>, <strong>poor (absent/decreased) femoral pulses</strong>.") +
        tbl(["Feature", "Leriche"], [["Claudication", "<strong>Buttock, thigh, hip</strong>"], ["Sexual", "<strong>Erectile dysfunction</strong>"], ["Exam", "<strong>Poor femoral pulses</strong>"], ["Treatment", "<strong>Aortoiliac (aortobifemoral) bypass graft</strong>"]]),
        ["leriche-features", "leriche-treatment"],
        [q("Which arteries are blocked in Leriche syndrome?", "Distal abdominal aorta and iliac arteries", ["Popliteal and tibial arteries", "Carotid arteries", "Renal arteries only"], "Leriche = occlusion of the distal aorta and iliacs."),
          q("Where is the claudication in Leriche syndrome?", "Buttock, thigh and hip", ["Calf only", "Foot only", "Arms"], "Aortoiliac blockage starves the buttocks, thighs and hips."),
          q("Which sexual symptom is associated with Leriche syndrome?", "Erectile dysfunction", ["Priapism", "Infertility only", "Testicular pain"], "The internal iliacs feed the penis, so impotence results."),
          q("Which pulses are poor in Leriche syndrome?", "Femoral", ["Radial", "Carotid", "Temporal"], "Disease above the groin weakens the femoral pulses."),
          q("What is the surgical treatment of Leriche syndrome?", "Aortoiliac bypass graft", ["Carotid endarterectomy", "Saphenous vein stripping", "Popliteal stent"], "An aortoiliac bypass restores flow.")],
        [q("A 58-year-old male smoker has aching in both buttocks and thighs when walking, new erectile dysfunction, and weak femoral pulses. Diagnosis?", "Leriche syndrome (aortoiliac occlusive disease)", ["Lumbar spinal stenosis", "Popliteal aneurysm", "Buerger disease"], "Buttock claudication, impotence and weak femoral pulses = Leriche triad."),
          q("A patient with Leriche syndrome has disabling claudication and ED despite medical therapy. Which procedure is indicated?", "Aortoiliac (aortobifemoral) bypass", ["Fem-pop bypass", "Carotid stent", "Lumbar decompression"], "Bypass for aortoiliac disease and vasculogenic ED.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-abi-tbi-exercise", "5. ABI, exercise testing and toe-brachial index", "PAD objective 5. Slides 20–23, 28.", [
      C("How to measure an ABI",
        "<ol class=\"concept-chain\"><li>Patient <strong>rests 15–30 minutes</strong></li><li>BP cuff just <strong>above the ankle</strong>; listen to the <strong>dorsalis pedis or posterior tibial</strong> signal with a <strong>continuous-wave Doppler</strong></li><li>Inflate until the signal disappears, deflate until it returns: that is the ankle systolic pressure. Repeat on the other leg.</li><li>Measure <strong>brachial systolic</strong> pressure in <strong>both arms</strong> the same way</li><li><strong>ABI = ankle systolic ÷ brachial systolic</strong> for each leg</li></ol>" +
        note("Standard teaching: divide by the <strong>higher</strong> of the two brachial pressures and use the higher ankle pressure for each leg."),
        ["abi-technique", "abi-formula"],
        [q("How long should a patient rest before an ABI?", "15 to 30 minutes", ["None", "2 hours", "Overnight"], "Resting 15-30 minutes gives stable baseline pressures."),
          q("Which device is used for a bedside ABI?", "Continuous-wave Doppler probe", ["Stethoscope only", "Pulse oximeter", "ECG"], "A continuous-wave Doppler detects ankle pulses for pressures."),
          q("How is the ABI calculated?", "Ankle systolic pressure divided by brachial systolic pressure", ["Brachial divided by ankle", "Ankle diastolic minus brachial diastolic", "Toe pressure times two"], "ABI = ankle systolic ÷ brachial systolic."),
          q("Which arteries are listened to at the ankle for an ABI?", "Dorsalis pedis or posterior tibial", ["Femoral or popliteal", "Radial or ulnar", "Carotid"], "Use the DP or PT artery at the ankle.")],
        [q("Ankle systolic is 90 and the higher brachial systolic is 150. What is the ABI and what does it mean?", "0.6, PAD", ["1.67, normal", "0.6, normal", "1.67, PAD"], "90/150 = 0.6, which is under 0.90: PAD."),
          q("Right ankle systolic 130, brachial 130. What is the ABI?", "1.0, normal", ["0.5, severe PAD", "1.5, calcified", "0.9, PAD"], "130/130 = 1.0, normal.")]),
      C("Reading the ABI",
        tbl(["ABI", "Meaning", "Action"], [
          ["<strong>Over 1.40</strong>", "<strong>Non-compressible, calcified</strong> arteries (falsely high)", "Refer to vascular; get <strong>TBI</strong>"],
          ["<strong>1.00–1.40</strong>", "<strong>Normal</strong>", "None"],
          ["0.91–0.99", "Borderline", "None (if symptoms: exercise test)"],
          ["<strong>0.90 or less</strong>", "<strong>PAD</strong>", "Lifestyle, medical therapy, refer to vascular"]]) +
        hy("ABI <strong>confirms PAD</strong> but does <strong>not by itself</strong> decide severity or need for revascularization.") +
        note("Calcified, non-compressible vessels are typical of <strong>diabetes and CKD</strong> (standard teaching)."),
        ["abi-normal", "abi-pad", "abi-noncompressible", "abi-limits"],
        [q("What ABI confirms PAD?", "0.90 or less", ["1.0 to 1.4", "Over 1.4", "0.95"], "ABI 0.90 or less confirms PAD."),
          q("What is a normal ABI?", "1.00 to 1.40", ["0.50 to 0.80", "Over 1.40", "Under 0.40"], "Normal ABI is 1.00-1.40."),
          q("What does an ABI over 1.40 mean?", "Non-compressible, calcified arteries", ["Normal", "Severe PAD", "Acute limb ischemia"], "Over 1.40 means stiff, calcified arteries that won't compress."),
          q("What range is borderline ABI?", "0.91 to 0.99", ["0.40 to 0.60", "1.00 to 1.40", "Over 1.40"], "0.91-0.99 is borderline."),
          q("Does the ABI alone decide the need for revascularization?", "No", ["Yes, always", "Only if over 1.4", "Only if borderline"], "It confirms PAD but not severity alone.")],
        [q("A 72-year-old with long-standing diabetes and CKD has an ABI of 1.6 and foot pain. How should it be read?", "Unreliable: non-compressible vessels; get a toe-brachial index", ["Normal, no PAD", "Severe PAD needing bypass", "Acute limb ischemia"], "Diabetes and CKD calcify arteries, falsely raising ABI; use TBI."),
          q("A patient's ABI is 0.95 with no leg symptoms. What is the plan?", "No further testing", ["Toe-brachial index", "Start cilostazol", "CTA"], "Borderline ABI without symptoms needs no more testing.")]),
      C("Exercise testing and toe-brachial index",
        tbl(["Situation", "Test"], [
          ["<strong>Exertional leg symptoms</strong> but <strong>normal or borderline</strong> resting ABI (0.91–1.40)", "<strong>Exercise treadmill test (exercise ABI)</strong>"],
          ["ABI <strong>over 1.40</strong> (inconclusive) or diagnosis uncertain", "<strong>Toe-brachial index (TBI)</strong>"],
          ["Still uncertain", "Additional vascular testing (duplex, etc.)"]]) +
        hy("Toe arteries rarely calcify, so the <strong>TBI</strong> works when ankle arteries are non-compressible.") +
        note("A post-exercise ABI drop shows PAD missed at rest (standard teaching; the deck says exercise treadmill testing)."),
        ["exercise-abi", "tbi"],
        [q("Which test is ordered for claudication symptoms with a normal resting ABI?", "Exercise treadmill testing", ["Toe-brachial index", "CTA", "Nothing"], "Exercise can unmask PAD when the resting ABI is normal."),
          q("Which test is ordered when the ABI is over 1.40?", "Toe-brachial index", ["Exercise treadmill test", "No test", "Lumbar MRI"], "ABI over 1.40 is unreliable, so get a TBI."),
          q("Why does a TBI work when the ABI is falsely high?", "Toe arteries are rarely calcified", ["Toes have no arteries", "TBI uses venous pressure", "Toe pressure is always normal"], "Toe arteries rarely calcify, so TBI stays accurate.")],
        [q("A 60-year-old smoker has calf pain after walking 3 blocks but a resting ABI of 1.05. Next test?", "Exercise treadmill test with ABI", ["Toe-brachial index", "No further testing", "Lumbar spine x-ray only"], "Normal resting ABI with symptoms."),
          q("A diabetic with toe ulcers has an ABI of 1.5. Which test clarifies perfusion?", "Toe-brachial index", ["Repeat ABI", "Exercise test", "D-dimer"], "ABI over 1.4 is unreliable; TBI clarifies.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-gangrene", "6. Dry, wet and gas gangrene", "PAD objective 6. Slides 48–64.", [
      C("Dry gangrene",
        "<p><strong>Gangrene</strong>: tissue with inadequate blood supply undergoing necrosis.</p>" +
        "<p><strong>Dry gangrene</strong> = <strong>sterile ischemic necrosis</strong> from prolonged, severe loss of arterial flow, <strong>without infection</strong>.</p>" +
        tbl(["", "Dry gangrene"], [
          ["Causes", "<strong>PAD</strong>, vasculitis, <strong>frostbite</strong>"],
          ["Look", "<strong>Dry, black eschar</strong>, starts <strong>distally</strong>; <strong>clear demarcation</strong> from healthy tissue; <strong>autoamputation</strong> if not removed"],
          ["Treatment", "<strong>Vascular surgery consult</strong>; revascularize when indicated (does not revive dead tissue); amputation/debridement when indicated; <strong>no antibiotics unless infected</strong>; treat the underlying disease"],
          ["Urgency", "<strong>Not a surgical emergency</strong>"]]),
        ["dry-gangrene-features", "dry-gangrene-tx"],
        [q("Dry gangrene is:", "Sterile ischemic necrosis without infection", ["Necrosis with bacterial infection", "Clostridial muscle necrosis", "Venous ulceration"], "Dry gangrene is ischemic tissue death without infection."),
          q("Which conditions cause dry gangrene?", "PAD, vasculitis, frostbite", ["Clostridium perfringens", "Recent GI surgery", "Burns with infection only"], "PAD, vasculitis and frostbite cut blood supply. (Slide 51)"),
          q("How does dry gangrene look?", "Dry black eschar with a clear line of demarcation", ["Swollen, moist tissue with bullae", "Bronze skin with crepitus", "Red warm cellulitis"], "Dry gangrene is black and dry with a clear demarcation line."),
          q("Are antibiotics needed for dry gangrene?", "No, unless infection is superimposed", ["Yes, always", "Yes, penicillin G and clindamycin", "Yes, vancomycin and Zosyn"], "No infection = no antibiotics."),
          q("Is dry gangrene a surgical emergency?", "No", ["Yes, always", "Only in the arm", "Only in children"], "Dry gangrene isn't infected, so it's not an emergency."),
          q("What happens to dry gangrene if not removed?", "Autoamputation", ["It always becomes gas gangrene", "It turns back to normal tissue", "It spreads up the leg within hours"], "Dead tissue eventually falls off (autoamputation).")],
        [q("A patient with severe PAD has a black, dry, shriveled second toe with a sharp line between dead and live tissue, no drainage, no fever. Next step?", "Vascular surgery consult; no antibiotics unless infection", ["Emergent surgery tonight", "IV vancomycin and Zosyn", "Hyperbaric oxygen only"], "Dry gangrene needs vascular evaluation, not antibiotics."),
          q("A patient asks whether reopening his leg artery will bring his black toe back. Best answer?", "No; revascularization helps healing but does not restore dead tissue", ["Yes, fully", "Yes, if done within a month", "Only with antibiotics"], "Does not restore what is dead.")]),
      C("Wet gangrene",
        "<p><strong>Wet gangrene</strong> = tissue necrosis <strong>complicated by bacterial infection</strong>, often in ischemic tissue; infection drives inflammation, edema and <strong>rapid destruction</strong>.</p>" +
        tbl(["", "Wet gangrene"], [
          ["Risk factors", "PAD, <strong>diabetes</strong>, acute limb ischemia, trauma, burns, severe soft-tissue infection"],
          ["Look", "<strong>Swollen, moist, discolored</strong>; bullae, drainage, <strong>foul odor</strong>; rapid progression, <strong>sepsis</strong>"],
          ["Urgency", "<strong>Surgical emergency</strong>: urgent surgery and source control"]]) +
        tbl(["Dry", "Wet"], [["Total tissue death, ischemic start, well-demarcated, <strong>not infected</strong>, surgery not emergent", "<strong>Moist</strong>, blistering, <strong>infected</strong>, <strong>surgical emergency</strong>"]]),
        ["wet-gangrene-features", "wet-gangrene-emergency", "dry-vs-wet"],
        [q("Wet gangrene is necrosis complicated by:", "Bacterial infection", ["Frostbite only", "Cholesterol emboli only", "Venous stasis"], "Wet gangrene is dead tissue that has become infected."),
          q("Is wet gangrene a surgical emergency?", "Yes", ["No", "Only if gas is present", "Only in the hand"], "Infected dead tissue spreads fast and can cause sepsis."),
          q("Which look fits wet gangrene?", "Swollen, moist tissue with bullae, drainage and foul odor", ["Dry, black, sharply demarcated", "Pale and cold without swelling", "White then blue then red fingers"], "Wet gangrene is swollen, moist, draining and foul."),
          q("Which chronic disease is a major risk factor for wet gangrene?", "Diabetes", ["Asthma", "Hypothyroidism", "Migraine"], "Diabetes impairs both circulation and immune response.")],
        [q("A diabetic has a swollen, wet, foul-smelling black toe with blisters, spreading redness and a fever of 102. Next step?", "Emergent surgical evaluation and source control with antibiotics", ["Outpatient follow-up in 2 weeks", "Wait for autoamputation", "Cilostazol"], "Wet gangrene is an emergency."),
          q("Which of two toes needs surgery tonight: a dry, black, demarcated toe, or a swollen, moist, draining toe?", "The swollen, moist, draining toe", ["The dry black toe", "Both equally urgent", "Neither"], "Wet gangrene is infected and spreading, so it's the emergency.")]),
      C("Gas gangrene (clostridial myonecrosis)",
        "<p>Rapidly progressive, <strong>toxin-mediated necrosis of skeletal muscle</strong>, most often <strong>Clostridium perfringens</strong>; can progress to <strong>shock and multiorgan failure</strong>.</p>" +
        tbl(["Risk factors", "Early", "Late"], [[
          "<strong>Deep traumatic or contaminated wounds</strong>, <strong>recent surgery (esp. GI/GU)</strong>, injection drug use, spontaneous",
          "<strong>Pain out of proportion to exam</strong>; rapid swelling; skin normal or pale; early <strong>tachycardia</strong> and toxicity",
          "<strong>Bronze, purple or dusky</strong> skin; hemorrhagic bullae; <strong>crepitus</strong>; thin <strong>\"dishwater\"</strong> drainage; shock"]]) +
        hy("Think clostridia with <strong>low-grade fever, tachycardia out of proportion to fever, and pain out of proportion to exam</strong> after surgery or trauma. Mortality <strong>80–90% untreated</strong>, 10–25% treated."),
        ["gas-gangrene-patho", "gas-gangrene-risk", "gas-gangrene-signs", "gas-gangrene-pearls"],
        [q("Which organism most often causes gas gangrene?", "Clostridium perfringens", ["Staph aureus", "Strep pyogenes", "Pseudomonas"], "Clostridium perfringens causes most gas gangrene."),
          q("What is the earliest classic symptom of gas gangrene?", "Pain out of proportion to the exam", ["Painless black toe", "Itching", "Slow swelling over weeks"], "Pain out of proportion comes before visible signs."),
          q("What exam sign comes from gas in the tissue?", "Crepitus", ["Pulsus paradoxus", "Friction rub", "Dependent rubor"], "Clostridia make gas that crackles under the skin."),
          q("What does the drainage of gas gangrene look like?", "Thin serosanguinous dishwater fluid", ["Thick yellow pus", "Clear lymph", "Black tar"], "The drainage is thin, brownish 'dishwater'."),
          q("Which skin color appears later in gas gangrene?", "Bronze, purple or dusky", ["Bright pink", "White and waxy only", "Yellow"], "Skin turns bronze then purple as it dies."),
          q("What is the mortality of untreated gas gangrene?", "80 to 90%", ["1 to 2%", "10%", "30%"], "Untreated gas gangrene kills 80-90%."),
          q("Which recent surgery especially raises gas gangrene risk?", "GI or GU surgery", ["Cataract surgery", "Dental cleaning", "Knee arthroscopy only"], "GI and GU surgery expose tissue to gut clostridia.")],
        [q("Two days after a bowel resection, a patient has severe abdominal wall pain far worse than the exam suggests, HR 130 with a temp of 100.2, and crepitus near the incision. Diagnosis?", "Gas gangrene (clostridial myonecrosis)", ["Normal postop pain", "Dry gangrene", "Superficial thrombophlebitis"], "Pain out of proportion, fever and crepitus after GI surgery = gas gangrene."),
          q("After a deep crush injury contaminated with soil, a leg swells quickly with bronze skin, hemorrhagic bullae and dishwater drainage. Most likely?", "Gas gangrene", ["Dry gangrene", "DVT", "Cellulitis only"], "Bronze skin, bullae and dishwater drainage after soil contamination = gas gangrene.")]),
      C("Diagnosing and treating wet and gas gangrene",
        hy("<strong>Clinical diagnosis</strong>: urgent surgical consult. <strong>Do not delay surgical exploration</strong>; normal labs do not exclude it.") +
        tbl(["Workup", ""], [["Labs", "CBC, CMP, <strong>lactate</strong>, CRP/ESR, <strong>blood cultures</strong>, deep tissue Gram stain and culture"], ["X-ray", "May show <strong>soft-tissue gas</strong>"], ["CT", "Gas and extent"], ["CTA", "If perfusion must be assessed"]]) +
        tbl(["Gas gangrene treatment", ""], [
          ["<strong>Immediate surgical exploration and debridement</strong>", ""],
          ["<strong>Empiric IV</strong>", "<strong>Vancomycin + Zosyn + clindamycin</strong> (MRSA, gram positive, gram negative, anaerobes)"],
          ["<strong>Confirmed clostridia</strong>", "<strong>IV penicillin G + clindamycin</strong>"],
          ["Support", "IV fluids; <strong>tetanus prophylaxis</strong> if indicated"]]) +
        mn("<strong>Clindamycin clamps the toxin</strong>: it blocks protein synthesis, so less toxin is made and survival may improve."),
        ["gangrene-workup", "gas-gangrene-empiric", "gas-gangrene-directed", "clindamycin-toxin"],
        [q("What is the empiric antibiotic regimen for gas gangrene?", "Vancomycin, Zosyn and clindamycin", ["Amoxicillin alone", "Doxycycline", "Nafcillin alone"], "Broad + anaerobic + toxin suppression."),
          q("Once clostridia are confirmed, what is the regimen?", "IV penicillin G plus clindamycin", ["Vancomycin alone", "Oral metronidazole", "Ceftriaxone alone"], "Penicillin kills clostridia; clindamycin stops toxin."),
          q("Why is clindamycin added in gas gangrene?", "It inhibits protein synthesis and suppresses toxin production", ["It covers MRSA best", "It treats fungi", "It thins the blood"], "Clindamycin halts toxin production by blocking protein synthesis."),
          q("What may an x-ray show in gas gangrene?", "Soft-tissue gas", ["Pericardial calcification", "Rib notching", "Kerley B lines"], "X-ray can show gas in soft tissue."),
          q("Do normal labs exclude wet or gas gangrene?", "No", ["Yes", "Only a normal lactate does", "Only a normal WBC does"], "Normal labs do not exclude."),
          q("What is the single most important treatment for gas gangrene?", "Immediate surgical exploration and debridement", ["Antibiotics alone", "Hyperbaric oxygen alone", "Observation"], "Surgery must not be delayed.")],
        [q("A patient with suspected gas gangrene is waiting on a CT before the surgeon will see him. What is wrong with this plan?", "Surgical exploration must not be delayed for imaging", ["Nothing; CT must come first", "He needs an MRI instead", "He should go home on oral antibiotics"], "Gas gangrene spreads in hours; don't delay surgery for imaging."),
          q("A patient with confirmed Clostridium perfringens myonecrosis is on vancomycin and Zosyn after debridement. What should the regimen become?", "IV penicillin G plus clindamycin", ["Oral amoxicillin", "Vancomycin alone", "Fluconazole"], "Once clostridia are confirmed, narrow to penicillin G plus clindamycin."),
          q("A farmer with a deep contaminated wound has gas gangrene. Besides surgery and antibiotics, what else is given if indicated?", "Tetanus prophylaxis", ["Rabies vaccine", "Hepatitis B vaccine", "Varicella vaccine"], "Soil-contaminated wounds need tetanus prophylaxis.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-pad-clinical-categories", "7. The four clinical categories of PAD", "PAD objective 7. Slides 32, 36.", [
      C("The four 2024 ACC/AHA categories",
        tbl(["Category", "Definition", "Focus / urgency"], [
          ["<strong>1. Asymptomatic PAD</strong>", "Objective PAD, no recognized leg symptoms", "<strong>CV risk reduction</strong>"],
          ["<strong>2. Chronic symptomatic PAD</strong>", "<strong>Claudication</strong> or other chronic exertional leg symptoms", "Risk reduction + <strong>symptom relief</strong>"],
          ["<strong>3. Chronic limb-threatening ischemia (CLTI)</strong>", "<strong>Ischemic rest pain, nonhealing wounds, or gangrene</strong>, usually <strong>over 2 weeks</strong>", "<strong>Urgent</strong> vascular evaluation, limb preservation"],
          ["<strong>4. Acute limb ischemia (ALI)</strong>", "<strong>Sudden</strong> loss of limb perfusion threatening viability", "<strong>Immediate emergency</strong> vascular evaluation"]]) +
        hy("The category determines <strong>treatment</strong>, <strong>urgency of vascular evaluation</strong>, and <strong>need for revascularization</strong>.") +
        "<p>Other systems: <strong>Rutherford</strong> (chronic severity, asymptomatic to tissue loss), <strong>Fontaine</strong> (symptoms, walking limit, rest pain, tissue loss), <strong>WIfI</strong> (Wound, Ischemia, foot Infection; limb threat in CLTI).</p>",
        ["pad-category-asymptomatic", "pad-category-symptomatic", "clti", "pad-category-ali", "pad-other-classifications"],
        [q("Ischemic rest pain lasting more than 2 weeks fits which PAD category?", "Chronic limb-threatening ischemia", ["Asymptomatic PAD", "Chronic symptomatic PAD", "Acute limb ischemia"], "Rest pain over 2 weeks = CLTI."),
          q("Which PAD category needs immediate emergency vascular evaluation?", "Acute limb ischemia", ["Asymptomatic PAD", "Chronic symptomatic PAD", "All equally"], "Acute limb ischemia threatens the limb within hours."),
          q("Which PAD category needs urgent vascular evaluation for limb preservation?", "Chronic limb-threatening ischemia", ["Asymptomatic PAD", "Chronic symptomatic PAD", "None"], "CLTI needs urgent evaluation to save the limb."),
          q("Claudication belongs in which PAD category?", "Chronic symptomatic PAD", ["CLTI", "Acute limb ischemia", "Asymptomatic PAD"], "Claudication is chronic symptomatic PAD."),
          q("What is the main focus in asymptomatic PAD?", "Cardiovascular risk reduction", ["Emergency revascularization", "Amputation", "Limb preservation surgery"], "Asymptomatic PAD: reduce CV risk."),
          q("Which classification assesses Wound, Ischemia and foot Infection in CLTI?", "WIfI", ["Rutherford", "Fontaine", "Stanford"], "WIfI = Wound, Ischemia, foot Infection."),
          q("About how long do CLTI symptoms typically last?", "More than 2 weeks", ["Under 6 hours", "1 day", "Exactly 48 hours"], "CLTI symptoms last over 2 weeks.")],
        [q("A 72-year-old diabetic has foot pain at night relieved by hanging his foot off the bed and a heel ulcer that has not healed in 6 weeks. Which category, and how urgent?", "CLTI; urgent vascular evaluation", ["Asymptomatic PAD; routine follow-up", "Chronic symptomatic PAD; exercise only", "Acute limb ischemia; no referral"], "Rest pain and nonhealing wound."),
          q("A patient with AF has a cold, pale, pulseless leg that started 3 hours ago. Which category?", "Acute limb ischemia", ["CLTI", "Chronic symptomatic PAD", "Asymptomatic PAD"], "Sudden cold pulseless leg in AF = acute limb ischemia."),
          q("A 66-year-old has an ABI of 0.8 found on screening and walks miles without symptoms. Which category and focus?", "Asymptomatic PAD; CV risk reduction", ["CLTI; urgent surgery", "ALI; heparin", "Chronic symptomatic; cilostazol"], "No symptoms = asymptomatic PAD: CV risk reduction.")])
    ]),

    /* ---------- 8 ---------- */
    S("08-acute-limb-ischemia", "8. Acute limb ischemia", "Acute ischemic limb objective. Slides 40–48.", [
      C("Causes and the 6 Ps",
        "<p><strong>Acute limb ischemia (ALI)</strong>: sudden occlusion of a limb artery.</p>" +
        tbl(["Embolism", "Thrombosis in situ"], [["<strong>Atrial thrombus from AF</strong>, LV mural thrombus, valvular thrombus, septic emboli, plaque rupture", "Thrombosis on an existing atherosclerotic plaque"]]) +
        mn("<strong>6 Ps</strong>: <strong>P</strong>ain, <strong>P</strong>allor, <strong>P</strong>ulselessness, <strong>P</strong>oikilothermia (cold), <strong>P</strong>aresthesias, <strong>P</strong>aralysis.") +
        "<p>Sudden onset, worsening over hours to days. <strong>Paralysis is a late finding</strong>.</p>" +
        tbl(["", "Acute limb ischemia", "Chronic PAD"], [["Onset", "<strong>Sudden</strong>, 2 hours", "Gradual, 2 months"], ["Pain", "Constant, worsening, severe (20/10), nothing helps", "With walking, 0/10 at rest"]]),
        ["ali-causes", "ali-six-ps", "ali-vs-pad"],
        [q("What is the most common embolic source in acute limb ischemia?", "Atrial thrombus from atrial fibrillation", ["DVT in the calf", "Varicose vein", "Pericardial effusion"], "AF is the classic source."),
          q("Which of the 6 Ps is a late finding?", "Paralysis", ["Pain", "Pallor", "Pulselessness"], "Paralysis means nerves and muscle are dying: late."),
          q("What does poikilothermia mean?", "The limb is cold, at room temperature", ["The limb is hot", "The limb is swollen", "The limb is itchy"], "Poikilothermia = the limb is as cold as the room."),
          q("Name the two mechanisms of acute limb ischemia.", "Embolism and thrombosis in situ", ["Vasospasm and vasculitis", "Venous reflux and DVT", "Infection and trauma only"], "ALI comes from an embolus or a clot forming on plaque. (Slide 41)"),
          q("How does pain in ALI differ from claudication?", "ALI pain is sudden, constant and severe; claudication comes with walking and stops with rest", ["They are the same", "ALI pain is relieved by rest", "Claudication is constant"], "ALI pain is sudden and constant; claudication is exertional.")],
        [q("A 74-year-old with AF who stopped her apixaban has sudden severe pain in her right leg for 2 hours; the leg is pale, cold and pulseless with tingling. Diagnosis?", "Acute limb ischemia from an embolus", ["Chronic PAD", "DVT", "Sciatica"], "Sudden pale cold pulseless leg off anticoagulation in AF = embolic ALI."),
          q("A patient with acute limb ischemia now cannot move his toes. What does this mean?", "Advanced ischemia; paralysis is a late sign", ["Early mild ischemia", "Nerve root compression unrelated to the limb", "Recovery is starting"], "Paralysis means advanced ischemia.")]),
      C("Exam, workup and treatment",
        "<p><strong>Exam:</strong> pale or cyanotic limb, mottled skin early, <strong>absent distal pulses</strong>, reduced motor and sensory function (paralysis late).</p>" +
        hy("<strong>Vascular surgery consult is the first step</strong>, done alongside everything else. Limb can be <strong>unsalvageable in as little as 4–6 hours</strong>.") +
        tbl(["Test", "Why"], [["<strong>Doppler</strong>", "Confirm pulses"], ["<strong>CTA with runoff</strong>", "Anatomy before surgery (watch contraindications)"], ["Lactic acid, CK, CBC, BMP, coags", "Ischemia, muscle injury, baseline"], ["<strong>EKG</strong>", "Look for <strong>atrial fibrillation</strong>"], ["ABI", "Often <strong>not done</strong>: not practical acutely"]]) +
        tbl(["Treatment (surgical emergency)", ""], [["<strong>Anticoagulation</strong>", "<strong>IV unfractionated heparin</strong>"], ["<strong>Urgent revascularization</strong>", "Intra-arterial thrombolysis, open or percutaneous embolectomy, bypass (surgeon chooses)"]]),
        ["ali-exam", "ali-first-step", "ali-workup", "ali-treatment", "ali-time"],
        [q("What is the first step in suspected acute limb ischemia?", "Vascular surgery consult", ["Outpatient ABI", "Start cilostazol", "Exercise test"], "Consult first, alongside other studies."),
          q("Which anticoagulant is started for acute limb ischemia?", "IV unfractionated heparin", ["Oral warfarin", "Aspirin alone", "Cilostazol"], "IV heparin stops clot growth."),
          q("How quickly can an ischemic limb become unsalvageable?", "In as little as 4 to 6 hours", ["After 2 weeks", "After 1 month", "Never"], "Muscle can be lost in 4-6 hours."),
          q("Why is an EKG done in acute limb ischemia?", "To look for atrial fibrillation as the embolic source", ["To diagnose PAD", "To measure ABI", "To look for pericarditis"], "AF is the main source of emboli."),
          q("Is an ABI usually done in acute limb ischemia?", "Often not; it is not practical acutely", ["Yes, before anything else", "Yes, it decides surgery", "Only an exercise ABI"], "ABI wastes time in an acute limb."),
          q("Which imaging helps plan surgery in acute limb ischemia?", "CTA with runoff", ["Plain x-ray", "Lumbar MRI", "Echo only"], "CTA with runoff maps the blockage for surgery."),
          q("Which labs reflect muscle injury in acute limb ischemia?", "Lactic acid and CK", ["TSH and free T4", "Lipase and amylase", "HbA1c"], "Dying muscle raises lactate and CK.")],
        [q("A patient with a cold, pulseless leg for 3 hours is in the ED. What should happen right away along with workup?", "Vascular surgery consult and IV heparin", ["Discharge with aspirin", "Schedule an outpatient ABI", "Start cilostazol and walking"], "ALI needs vascular surgery and heparin immediately."),
          q("A resident wants to do a formal ABI on a pale, pulseless leg before calling surgery. Best response?", "Call vascular surgery now; ABI is not practical and delays care", ["Do the ABI first", "Get a lumbar MRI", "Wait 12 hours"], "ABI delays care; call surgery now."),
          q("What will the surgeon most likely do for a threatened limb from an embolus?", "Urgent revascularization such as embolectomy or catheter-directed thrombolysis", ["Cilostazol trial", "Structured exercise", "Compression stockings"], "Embolectomy or thrombolysis restores flow.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-aneurysm-definition", "9. Define an aneurysm and AAA", "Aneurysm objective 1. Slides 69–71.", [
      C("Aneurysm definition and types",
        hy("<strong>Aneurysm</strong>: dilation of the arterial wall to <strong>1.5 times or more</strong> its normal diameter.<br><strong>AAA</strong>: abdominal aorta <strong>3 cm or more</strong>.") +
        tbl(["Type", "What it is"], [
          ["<strong>True</strong>", "Dilation of <strong>all layers</strong> of the vessel; wall intact"],
          ["<strong>Pseudoaneurysm (false)</strong>", "<strong>Disrupted wall</strong>; blood held in by surrounding tissue; at <strong>catheterization sites</strong>, trauma, or anastomoses"],
          ["<strong>Mycotic</strong>", "Dilation from <strong>infection</strong> of the vessel wall"]]),
        ["aneurysm-definition", "aaa-size", "true-aneurysm", "pseudoaneurysm", "mycotic-aneurysm"],
        [q("An aneurysm is a dilation of at least how many times normal diameter?", "1.5 times", ["1.1 times", "3 times", "5 times"], "An aneurysm is at least 1.5 times normal diameter."),
          q("At what diameter is the abdominal aorta called an AAA?", "3 cm or more", ["1.5 cm", "5.5 cm", "10 cm"], "AAA = aorta 3 cm or larger."),
          q("Which aneurysm involves all three layers of the vessel wall?", "True aneurysm", ["Pseudoaneurysm", "Dissection", "Mycotic aneurysm only"], "True aneurysms involve all three wall layers."),
          q("Where does a pseudoaneurysm usually develop?", "At a catheterization site, trauma, or anastomosis", ["In the brain only", "At birth", "In veins only"], "Pseudoaneurysms form where the wall was punctured or sewn."),
          q("What causes a mycotic aneurysm?", "Infection of the vessel wall", ["Fungus only", "Smoking only", "Marfan syndrome"], "Infection weakens the wall, forming a mycotic aneurysm.")],
        [q("After a femoral cardiac cath, a patient has a pulsatile groin mass. Ultrasound shows a hole in the artery wall with blood contained by surrounding tissue. What is it?", "Pseudoaneurysm", ["True aneurysm", "Mycotic aneurysm", "AV malformation"], "Wall disruption at a catheter site."),
          q("A patient with endocarditis develops an aneurysm of a cerebral artery at the site of a septic embolus. What type?", "Mycotic aneurysm", ["Pseudoaneurysm from cath", "Berry aneurysm", "True atherosclerotic AAA"], "A septic embolus infects the wall: mycotic aneurysm."),
          q("A 2.6 cm abdominal aorta is seen on ultrasound. Is this an AAA?", "No, AAA is 3 cm or more", ["Yes, any visible aorta", "Yes, over 2 cm", "Only if symptomatic"], "AAA starts at 3 cm.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-aaa-risk-factors-features", "10. AAA risk factors and clinical features", "Aneurysm objective 2. Slides 66–68, 72, 79–83.", [
      C("Epidemiology and risk factors",
        "<p>AAA occurs in <strong>3–8%</strong>, mostly <strong>men</strong>; white men more than double the rate of black men; incidence rises sharply <strong>after 60</strong>. Rupture deaths about 5–10 thousand per year.</p>" +
        tbl(["AAA risk factors", "Growth"], [["<strong>Smoking (strongest modifiable)</strong>, <strong>age</strong>, <strong>male sex</strong>, family history, atherosclerotic CVD, hypertension", "Multifactorial; loss of elastin and collagen thins the wall. About <strong>1–4 mm per year</strong>; <strong>faster in smokers</strong>, <strong>slower in diabetics</strong>"]]) +
        hy("Rupture risk rises with <strong>diameter</strong>: <strong>3.0–4.9 cm</strong> low annual risk; <strong>5.5 cm or more</strong> substantially higher. Also higher with <strong>female sex, rapid expansion, and symptoms</strong>."),
        ["aaa-epidemiology", "aaa-risk-factors", "aaa-growth", "aaa-rupture-risk"],
        [q("What is the strongest modifiable risk factor for AAA?", "Smoking", ["Diabetes", "Obesity", "Alcohol"], "Smoking is the strongest modifiable AAA risk."),
          q("In which group do AAAs grow more slowly?", "Diabetics", ["Smokers", "Men", "People with hypertension"], "Diabetics' AAAs grow more slowly."),
          q("How fast do AAAs usually grow?", "About 1 to 4 mm per year", ["About 1 cm per month", "About 5 cm per year", "They never grow"], "AAAs grow about 1-4 mm a year."),
          q("Which AAA size has substantially increased rupture risk?", "5.5 cm or more", ["3.0 cm", "3.5 cm", "4.0 cm"], "At 5.5 cm rupture risk rises sharply."),
          q("Which sex has a higher rupture risk at the same AAA size?", "Female", ["Male", "Neither", "Only males over 80"], "Female sex raises rupture risk."),
          q("After what age does AAA incidence rise sharply?", "60", ["20", "35", "45"], "AAA incidence rises after 60.")],
        [q("A 67-year-old man has a 4.2 cm AAA and still smokes. Which change will most slow its growth?", "Stopping smoking", ["Starting metformin", "Losing 5 pounds", "Taking a daily multivitamin"], "Smoking speeds AAA growth.")]),
      C("Clinical features and the presentations",
        "<p><strong>Most AAAs are asymptomatic</strong>: found on screening or incidentally.</p>" +
        tbl(["Finding", "Detail"], [
          ["Exam", "<strong>Palpable, pulsatile, expansile, non-tender</strong> mass, usually once over 5.5 cm; may have a <strong>bruit</strong>"],
          ["Location", "Pulsatile mass <strong>below the umbilicus</strong> is abnormal (feeling the aorta above it in thin people can be normal)"],
          ["Compression", "Abdominal discomfort; <strong>iliac aneurysm compressing the ureter</strong> causes <strong>ipsilateral hydronephrosis</strong> and flank pain"],
          ["<strong>Mural thrombus</strong>", "Can embolize: <strong>lower extremity or mesenteric ischemia</strong>"]]) +
        hy("<strong>Rupture</strong> = <strong>abdominal or back pain + hypotension</strong> (+/- pulsatile mass). Suspect it in an <strong>older patient with syncope and abdominal pain</strong>."),
        ["aaa-asymptomatic", "aaa-exam", "aaa-compression", "aaa-mural-thrombus", "aaa-rupture-presentation"],
        [q("Most AAAs are:", "Asymptomatic", ["Painful at rest", "Ruptured at diagnosis", "Found because of hematuria"], "Most AAAs cause no symptoms and are found on screening."),
          q("Which exam finding fits a large AAA?", "Pulsatile, expansile, non-tender abdominal mass", ["Tender RLQ mass", "Fluid wave", "Caput medusae"], "A large AAA is a pulsatile, expansile, non-tender mass. (Slide 82)"),
          q("Where is a pulsatile mass abnormal on abdominal exam?", "Below the umbilicus", ["Above the umbilicus in a thin person", "In the epigastrium of a thin child", "Over the radial artery"], "The aorta splits at the umbilicus, so a pulsatile mass below it is abnormal."),
          q("An iliac aneurysm compressing the ureter causes:", "Ipsilateral hydronephrosis and flank pain", ["Bilateral pleural effusion", "Contralateral hydronephrosis", "Erectile dysfunction only"], "An iliac aneurysm can compress the ureter."),
          q("What can a mural thrombus in an AAA cause?", "Emboli causing limb or mesenteric ischemia", ["Pericarditis", "Pulmonary embolism", "Stroke from the right heart"], "Clot inside an AAA can embolize to the legs or gut."),
          q("What is the classic presentation of a ruptured AAA?", "Abdominal or back pain with hypotension", ["Painless hematuria", "Chronic cough", "Leg edema"], "Rupture = abdominal or back pain plus shock.")],
        [q("A 75-year-old man with hypertension who smokes faints, then has abdominal pain and a BP of 95/60. What must be suspected?", "Ruptured AAA", ["Vasovagal syncope", "Gastroenteritis", "Kidney stone only"], "Syncope + abdominal pain in an older patient."),
          q("A 62-year-old smoker has an asymptomatic pulsatile, non-tender mass below the umbilicus on a routine physical. Next step?", "Abdominal ultrasound", ["Reassure, it is normal", "Emergent laparotomy", "Colonoscopy"], "Ultrasound confirms and measures an AAA."),
          q("A patient with a known AAA develops sudden cold, painful toes with good foot pulses ('blue toe'). What happened?", "Emboli from an AAA mural thrombus", ["Raynaud phenomenon", "Buerger disease", "DVT"], "Mural thrombus embolized to small toe arteries.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-aneurysm-locations", "11. Common aneurysm locations and their complications", "Aneurysm objective 3. Slides 71, 73–78.", [
      C("Where aneurysms form and what each does",
        tbl(["Location", "Main complication", "Risk factors"], [
          ["<strong>Abdominal aorta</strong> (most common, usually infrarenal)", "<strong>Rupture and hemorrhage</strong>", "Age, smoking, family history, atherosclerosis"],
          ["<strong>Thoracic aorta</strong>", "Rupture, dissection; may cause AR", "Age, atherosclerosis, genetics, <strong>bicuspid aortic valve</strong>"],
          ["<strong>Cerebral (berry)</strong>", "<strong>Rupture causing subarachnoid hemorrhage</strong>", "HTN, <strong>female</strong>, substance use, smoking, genetics"],
          ["<strong>Peripheral</strong> (popliteal, femoral, carotid)", "<strong>Thrombus and embolism</strong>", ""],
          ["Iliac", "Ureter compression, rupture", ""]]) +
        hy("<strong>Central aneurysms rupture; peripheral aneurysms clot and embolize.</strong>") +
        note("Popliteal aneurysm as the most common peripheral aneurysm, often bilateral and with an AAA, is standard teaching. Slide 66's case had prominent femoral and popliteal pulses with his AAA."),
        ["aaa-location", "thoracic-aneurysm", "berry-aneurysm", "peripheral-aneurysm"],
        [q("What is the main risk of a cerebral berry aneurysm?", "Rupture with subarachnoid hemorrhage", ["Limb embolism", "Hydronephrosis", "Claudication"], "Berry aneurysms rupture into the subarachnoid space."),
          q("What is the main risk of a popliteal aneurysm?", "Thrombosis and embolism", ["Subarachnoid hemorrhage", "Rupture into the abdomen", "Aortic regurgitation"], "Popliteal aneurysms clot and embolize."),
          q("What is the main risk of an AAA?", "Rupture and hemorrhage", ["Subarachnoid hemorrhage", "Raynaud phenomenon", "Varicose veins"], "AAAs rupture and bleed."),
          q("Which valve abnormality is a risk factor for thoracic aortic aneurysm?", "Bicuspid aortic valve", ["Mitral valve prolapse", "Tricuspid regurgitation", "Pulmonic stenosis"], "Bicuspid valves are linked to aortic wall weakness."),
          q("Which sex is a risk factor for cerebral aneurysm?", "Female", ["Male", "Neither", "Only males under 20"], "Women have more cerebral aneurysms."),
          q("Which group of aneurysms tends to clot and embolize rather than rupture?", "Peripheral (popliteal, femoral, carotid)", ["Abdominal aortic", "Thoracic aortic", "Cerebral"], "Peripheral aneurysms clot and embolize rather than rupture.")],
        [q("A 70-year-old with a pulsatile mass behind the knee develops a sudden cold, pale foot. What happened?", "A popliteal aneurysm thrombosed or embolized", ["The popliteal aneurysm ruptured into the abdomen", "Baker cyst rupture causing ischemia", "DVT"], "Peripheral aneurysms clot and embolize."),
          q("A 45-year-old woman with hypertension who smokes has the worst headache of her life. Which aneurysm likely ruptured?", "A cerebral berry aneurysm", ["An AAA", "A popliteal aneurysm", "A femoral pseudoaneurysm"], "Worst headache of life = subarachnoid hemorrhage from a berry aneurysm.")])
    ]),

    /* ---------- 12 ---------- */
    S("12-genetic-aortopathy", "12. Genetic syndromes that raise aneurysm and dissection risk", "Aneurysm objective 4. Slides 81, 89, 100.", [
      C("Heritable aortopathies",
        tbl(["Syndrome", "Pearl"], [
          ["<strong>Marfan syndrome</strong>", "Repair the ascending aorta earlier: <strong>over 4.5 cm</strong> (vs over 5 cm in others)"],
          ["<strong>Loeys-Dietz syndrome</strong>", "Aggressive aneurysms and dissection"],
          ["<strong>Vascular Ehlers-Danlos syndrome</strong>", "Fragile vessels, dissection and rupture"],
          ["<strong>Turner syndrome</strong>", "Bicuspid valve, coarctation, aortic dilation"],
          ["<strong>Bicuspid aortic valve</strong>", "Thoracic aneurysm and dissection"]]) +
        "<p>Also: family history of aneurysm or dissection, and vasculitis (giant cell, Takayasu) for thoracic aneurysms.</p>" +
        mn("<strong>My Lovely Eagle Turned</strong>: <strong>M</strong>arfan, <strong>L</strong>oeys-Dietz, vascular <strong>E</strong>hlers-Danlos, <strong>T</strong>urner.") +
        hy("Pregnancy and the postpartum period raise dissection risk in women with an aortopathy."),
        ["marfan-aorta", "loeys-dietz", "vascular-eds", "turner-aorta", "bicuspid-aortopathy"],
        [q("Which genetic syndromes raise thoracic aneurysm and dissection risk?", "Marfan, Loeys-Dietz, vascular Ehlers-Danlos, Turner", ["Down, Klinefelter, fragile X", "Cystic fibrosis and sickle cell", "Hemophilia A and B"], "These heritable syndromes weaken the aortic wall."),
          q("At what ascending aorta size is surgery recommended in Marfan syndrome?", "Over 4.5 cm", ["Over 3 cm", "Over 5.5 cm", "Over 7 cm"], "Marfan aortas rupture at smaller sizes, so repair over 4.5 cm."),
          q("At what ascending aorta size is surgery recommended in patients without Marfan?", "Over 5 cm", ["Over 3 cm", "Over 4 cm", "Over 7 cm"], "Without Marfan, repair the ascending aorta over 5 cm."),
          q("Which congenital valve problem is linked with thoracic aneurysm and dissection?", "Bicuspid aortic valve", ["Mitral valve prolapse", "Ebstein anomaly", "Tricuspid atresia"], "Bicuspid aortic valve is linked to aortic aneurysm and dissection."),
          q("Which chromosomal syndrome in girls is linked to aortic dilation?", "Turner syndrome", ["Down syndrome", "Klinefelter syndrome", "Edwards syndrome"], "Turner syndrome is linked to aortic dilation.")],
        [q("A tall 24-year-old with long fingers, lens dislocation, and a 4.7 cm ascending aorta asks about surgery. Best answer?", "Surgery is recommended; Marfan threshold is over 4.5 cm", ["Wait until 5.5 cm", "Never operate on the ascending aorta", "Only if it ruptures"], "Marfan threshold is over 4.5 cm."),
          q("A pregnant woman with Marfan syndrome develops sudden tearing chest pain. What must be ruled out?", "Aortic dissection", ["Peptic ulcer", "Pericarditis", "Costochondritis"], "Pregnancy + aortopathy raises risk.")])
    ]),

    /* ---------- 13 ---------- */
    S("13-aaa-diagnosis-management", "13. AAA: diagnosis, medical and surgical management", "Aneurysm objective 5. Slides 84–85, 90–93.", [
      C("Imaging for AAA",
        tbl(["Test", "Use"], [
          ["<strong>Abdominal ultrasound</strong>", "<strong>Screening and monitoring</strong>; also in the acute setting (bedside)"],
          ["<strong>Contrast CTA</strong>", "Size, anatomy, branches, <strong>rupture</strong>; <strong>surgical planning</strong>; <strong>thoracic aneurysms</strong>. <strong>Not</strong> routine for screening (radiation, contrast). <strong>Preferred in the ED for stable</strong> suspected symptomatic or ruptured AAA"],
          ["MRA", "Less commonly used"]]) +
        hy("<strong>Symptomatic AAA algorithm</strong> (slide 85): <strong>Unstable</strong> (SBP under 80 despite resuscitation): known AAA, go straight to <strong>emergency repair</strong>; unknown, <strong>focused bedside ultrasound</strong>, then repair if AAA present. <strong>Stable</strong>: <strong>CT</strong>; ruptured, emergency repair; not ruptured but symptomatic, <strong>urgent repair</strong>."),
        ["aaa-ultrasound", "aaa-cta", "aaa-symptomatic-algorithm"],
        [q("Which test is used to screen for and monitor AAA?", "Abdominal ultrasound", ["CTA", "MRA", "Plain x-ray"], "Ultrasound screens and follows AAAs without radiation."),
          q("Why is CTA not routine for AAA screening?", "Radiation and contrast exposure", ["It cannot see the aorta", "It is less accurate than palpation", "It requires general anesthesia"], "CTA adds radiation and contrast that screening doesn't need."),
          q("Which test is preferred for a stable patient in the ED with suspected symptomatic or ruptured AAA?", "CTA", ["Exercise test", "ABI", "MRA"], "A stable patient can go to CTA for detail."),
          q("In an unstable patient not known to have an AAA, which test comes first?", "Focused bedside ultrasound", ["CTA", "MRA", "Catheter angiography"], "Unstable patients get bedside ultrasound."),
          q("Which imaging evaluates thoracic aortic aneurysms?", "CTA", ["Abdominal ultrasound", "ABI", "Duplex of the legs"], "CTA images the thoracic aorta.")],
        [q("A 78-year-old with a known 6 cm AAA arrives with back pain and a BP of 70/40 despite fluids. Next step?", "Straight to emergency endovascular or open repair", ["CTA first", "Outpatient ultrasound", "Admit and observe"], "Known AAA plus shock = rupture: straight to repair."),
          q("A 70-year-old with abdominal pain and a pulsatile mass has a normal BP and HR. Which test?", "CTA of the abdomen", ["Nothing; discharge", "Bedside ultrasound only and discharge", "Colonoscopy"], "A stable patient has time for CTA, which shows the aneurysm size and any leak before surgery."),
          q("An unstable 72-year-old with abdominal pain has no known AAA history. First imaging?", "Focused bedside ultrasound", ["CTA", "MRA", "Upper GI series"], "Unstable, unknown AAA: bedside US.")]),
      C("Medical management of small AAA",
        "<p>For AAA <strong>under 5.5 cm in men or under 5.0 cm in women</strong>:</p><ul>" +
        "<li><strong>Smoking cessation</strong> (most important)</li><li>Exercise</li>" +
        "<li><strong>Statins</strong> (atherosclerosis)</li>" +
        "<li><strong>BP control</strong> with <strong>beta blockers and ARBs</strong>: control BP but are <strong>not proven to slow growth</strong></li>" +
        "<li><strong>Avoid fluoroquinolones</strong> if possible</li></ul>" +
        note("Fluoroquinolones are linked to aortic aneurysm and dissection (FDA warning), which is why they are avoided (standard teaching)."),
        ["aaa-medical", "aaa-fluoroquinolone"],
        [q("What is the most important medical intervention for a small AAA?", "Smoking cessation", ["Warfarin", "Cilostazol", "Bed rest"], "Quitting smoking slows growth."),
          q("Which antibiotic class should be avoided in patients with AAA?", "Fluoroquinolones", ["Penicillins", "Cephalosporins", "Macrolides"], "Fluoroquinolones weaken collagen and raise rupture risk."),
          q("Are beta blockers and ARBs proven to slow AAA growth?", "No; they are used for BP control", ["Yes, both stop growth", "Only beta blockers do", "Only ARBs do"], "Not proven to slow growth."),
          q("Below what size in men is an AAA managed medically?", "Under 5.5 cm", ["Under 3 cm", "Under 7 cm", "Any size"], "Under 5.5 men, 5.0 women.")],
        [q("A patient with a 4.3 cm AAA has a UTI. Which antibiotic class should be avoided if possible?", "Fluoroquinolones such as ciprofloxacin", ["Nitrofurantoin", "Cephalexin", "TMP-SMX"], "Avoid fluoroquinolones with AAA."),
          q("A man with a 4.6 cm AAA asks which pill will shrink it. Best answer?", "No drug is proven to slow growth; stop smoking and control BP and cholesterol", ["Metoprolol will shrink it", "Losartan will cure it", "Aspirin removes it"], "No drug shrinks AAAs; control risk factors.")]),
      C("Surgical repair and rupture",
        "<p>For AAA <strong>5.5 cm or more in men</strong> or <strong>5.0 cm or more in women</strong>:</p>" +
        tbl(["Repair", "Elective mortality"], [["<strong>Open</strong> (graft sewn inside the aneurysm)", "<strong>about 3–5%</strong>"], ["<strong>EVAR</strong> (endovascular, percutaneous)", "<strong>about 1%</strong>"]]) +
        hy("<strong>Rupture mortality about 70–80%</strong>. Ruptured AAA is a <strong>vascular surgical emergency</strong>: aggressive resuscitation with <strong>blood</strong> and isotonic saline, then <strong>emergent surgery</strong>.") +
        note("Slide 93 asks how much blood the abdomen can hold: the retroperitoneum and peritoneum can hold several liters, essentially a patient's whole blood volume (standard teaching)."),
        ["aaa-open-vs-evar", "aaa-rupture-mortality", "aaa-rupture-management"],
        [q("Which AAA repair has the lower elective mortality?", "EVAR (about 1%)", ["Open repair (about 30%)", "They are identical", "Neither; repair is not done"], "EVAR about 1%, open 3–5%."),
          q("What is the elective mortality of open AAA repair?", "About 3 to 5%", ["About 1%", "About 30%", "About 70%"], "Elective open repair mortality is 3-5%."),
          q("What is the mortality after AAA rupture?", "About 70 to 80%", ["About 1%", "About 10%", "About 25%"], "Rupture kills 70-80%."),
          q("How is a ruptured AAA treated?", "Resuscitation with blood and fluids and emergent surgery", ["Beta blockers and observation", "Outpatient ultrasound", "Fluoroquinolones"], "Rupture needs resuscitation and emergent repair.")],
        [q("A 74-year-old with a ruptured AAA is hypotensive. Which plan fits?", "Blood and fluid resuscitation and emergent repair", ["CT in 24 hours", "Start a beta blocker and admit to the floor", "Discharge with follow-up"], "Rupture: blood, fluids and emergent repair."),
          q("A 70-year-old man has a 5.8 cm asymptomatic AAA with suitable anatomy. Which repair has the lowest procedural mortality?", "EVAR", ["Open repair", "No repair", "Medical therapy only"], "EVAR has the lowest procedural mortality.")])
    ]),

    /* ---------- 14 ---------- */
    S("14-aaa-screening-monitoring", "14. AAA screening and monitoring by size and sex", "Aneurysm objective 6. Slides 86–87.", [
      C("Who gets a one-time screening ultrasound",
        tbl(["Group", "Recommendation"], [
          ["<strong>Men 65 or older who have ever smoked</strong>", "<strong>Screen</strong> (one-time US)"],
          ["<strong>Men and women 65–75</strong> with a <strong>first-degree relative</strong> with AAA", "<strong>Screen</strong>"],
          ["Women 65 or older who have ever smoked", "Reasonable (ACC/AHA); USPSTF: insufficient evidence"],
          ["Men 65–75 who never smoked", "<strong>Selective</strong> screening by risk factors (USPSTF)"]]) +
        mn("<strong>65, male, ever smoked</strong> = screen once with ultrasound."),
        ["aaa-screening-men-smokers", "aaa-screening-family", "aaa-screening-women", "aaa-screening-never-smoked"],
        [q("Which patient should have a one-time AAA screening ultrasound?", "A 67-year-old man who smoked in his 30s", ["A 50-year-old man who smokes", "A 40-year-old woman with hypertension", "An 85-year-old never-smoking woman"], "Men 65+ who ever smoked."),
          q("Which test is used for AAA screening?", "One-time abdominal ultrasound", ["CTA every year", "MRA", "Abdominal x-ray"], "A one-time ultrasound screens for AAA."),
          q("What does USPSTF say about screening women 65 or older who have smoked?", "Insufficient evidence", ["Strongly recommended", "Recommended against", "Screen yearly"], "Insufficient evidence; ACC/AHA says reasonable."),
          q("How are men 65 to 75 who never smoked handled?", "Selective screening based on risk factors", ["Always screen", "Never screen", "Screen every year"], "Never-smoking men 65-75 are screened selectively."),
          q("Which family history leads to AAA screening at 65 to 75 in both sexes?", "A first-degree relative with AAA", ["A cousin with varicose veins", "A parent with migraines", "A sibling with asthma"], "A first-degree relative with AAA warrants screening.")],
        [q("A 66-year-old man quit smoking 20 years ago. Does he qualify for AAA screening?", "Yes, men 65 or older who ever smoked get a one-time ultrasound", ["No, he quit", "Only after 75", "Only with symptoms"], "Men 65-75 who ever smoked get screened."),
          q("A 68-year-old never-smoking woman whose brother had an AAA asks about screening. Best answer?", "Screen with a one-time ultrasound", ["No screening for women", "CTA yearly", "Only if she starts smoking"], "A first-degree relative with AAA warrants screening.")]),
      C("Surveillance intervals (ACC/AHA)",
        tbl(["AAA diameter", "Ultrasound"], [
          ["<strong>3.0–3.9 cm</strong>", "<strong>Every 3 years</strong>"],
          ["<strong>4.0–4.9 cm men</strong> / <strong>4.0–4.4 cm women</strong>", "<strong>Every 12 months</strong>"],
          ["<strong>5.0–5.4 cm men</strong> / <strong>4.5–4.9 cm women</strong>", "<strong>Every 6 months</strong>"],
          ["<strong>5.5 cm or more men</strong> / <strong>5.0 cm or more women</strong>", "<strong>Repair</strong>"]]) +
        hy("Women's thresholds are <strong>0.5 cm lower</strong> at each step because women rupture at smaller sizes.") +
        mn("<strong>3-1-6</strong>: 3-cm range every <strong>3 years</strong>, 4-cm range every <strong>1 year</strong>, 5-cm range every <strong>6 months</strong> (shift down 0.5 cm for women)."),
        ["aaa-surveillance-small", "aaa-surveillance-medium", "aaa-surveillance-large", "aaa-women-thresholds"],
        [q("How often is a 3.5 cm AAA monitored?", "Ultrasound every 3 years", ["Every 6 months", "Every 12 months", "Never"], "3.0-3.9 cm: ultrasound every 3 years."),
          q("How often is a 4.5 cm AAA in a man monitored?", "Every 12 months", ["Every 3 years", "Every 6 months", "Every month"], "Men 4.0-4.9 cm: yearly."),
          q("How often is a 4.6 cm AAA in a woman monitored?", "Every 6 months", ["Every 3 years", "Every 12 months", "Repair now"], "Women 4.5-4.9: every 6 months."),
          q("How often is a 5.2 cm AAA in a man monitored?", "Every 6 months", ["Every 12 months", "Every 3 years", "Repair now"], "Men 5.0-5.4: every 6 months."),
          q("How often is a 4.2 cm AAA in a woman monitored?", "Every 12 months", ["Every 6 months", "Every 3 years", "Repair now"], "Women 4.0-4.4: yearly."),
          q("Why are AAA thresholds lower in women?", "Women rupture at smaller diameters", ["Women's aortas grow faster always", "Ultrasound is less accurate in women", "Women have no AAA risk"], "Female sex raises rupture risk.")],
        [q("Slide 66's patient: a 62-year-old man with a 4.8 cm infrarenal AAA, asymptomatic. Plan?", "Medical management with ultrasound every 12 months", ["Immediate repair", "Ultrasound every 3 years", "No follow-up"], "4.0–4.9 cm men: yearly, repair at 5.5."),
          q("A 70-year-old woman has a 5.1 cm asymptomatic AAA. Plan?", "Refer for repair", ["Ultrasound every 6 months", "Ultrasound every 12 months", "Ultrasound every 3 years"], "Women 5.0 cm or more: repair."),
          q("A 71-year-old man has a 3.4 cm AAA. When is the next ultrasound?", "In 3 years", ["In 6 months", "In 1 year", "Never"], "3.0-3.9 cm: recheck in 3 years.")])
    ]),

    /* ---------- 15 ---------- */
    S("15-aneurysm-surgical-indications", "15. Surgical indications for aneurysms", "Aneurysm objective 7. Slide 89.", [
      C("When to repair",
        tbl(["Indication for repair", "Threshold"], [
          ["<strong>Asymptomatic AAA</strong>", "<strong>5.5 cm or more in men</strong>, <strong>5.0 cm or more in women</strong>"],
          ["<strong>Rapid expansion</strong>", "<strong>Over 1 cm per year</strong>"],
          ["<strong>Symptoms</strong>", "Expansion, occlusion, or compression symptoms"],
          ["<strong>Rupture</strong>", "Any size"],
          ["<strong>Ascending aorta</strong>", "<strong>Over 4.5 cm in Marfan</strong>, over 5 cm in others"],
          ["<strong>Descending thoracic</strong>", "<strong>Over 5 cm</strong>"],
          ["<strong>Iliac</strong>", "<strong>Over 3 cm</strong>"]]) +
        hy("Any <strong>symptomatic</strong> or <strong>rapidly growing</strong> aneurysm is repaired regardless of size."),
        ["aaa-repair-size-sex", "aneurysm-rapid-expansion", "aneurysm-symptomatic-repair", "thoracic-repair-thresholds", "iliac-repair-threshold"],
        [q("At what size is an asymptomatic AAA repaired in a man?", "5.5 cm or more", ["3.0 cm", "4.0 cm", "7.0 cm"], "Men: repair at 5.5 cm."),
          q("At what size is an asymptomatic AAA repaired in a woman?", "5.0 cm or more", ["5.5 cm", "4.0 cm", "6.5 cm"], "Women rupture at smaller sizes: repair at 5.0 cm."),
          q("What growth rate is an indication for AAA repair?", "Over 1 cm per year", ["Over 1 mm per year", "Any growth", "Over 5 cm per year"], "Growth over 1 cm a year signals instability."),
          q("At what size is a descending thoracic aneurysm repaired?", "Over 5 cm", ["Over 3 cm", "Over 7 cm", "Over 10 cm"], "Descending thoracic aneurysms are repaired over 5 cm."),
          q("At what size is an iliac aneurysm repaired?", "Over 3 cm", ["Over 1 cm", "Over 5.5 cm", "Over 8 cm"], "Iliac aneurysms are repaired over 3 cm."),
          q("Is a symptomatic 4.5 cm AAA repaired?", "Yes, symptoms are an indication at any size", ["No, it must reach 5.5 cm", "Only in women", "Only if it ruptures"], "Symptoms mean imminent rupture, so repair at any size.")],
        [q("A man's AAA grew from 4.0 cm to 5.2 cm in 12 months. Plan?", "Refer for repair because of rapid expansion", ["Recheck in 6 months", "Recheck in 3 years", "No action until 5.5 cm"], "Over 1 cm per year."),
          q("A 66-year-old man has a 5.7 cm asymptomatic AAA. Plan?", "Elective repair (EVAR or open)", ["Ultrasound every 6 months", "Ultrasound every 3 years", "Medical therapy only"], "5.5 cm or more in men."),
          q("A patient has a 3.4 cm iliac artery aneurysm. Plan?", "Refer for repair", ["Ignore", "Repeat in 3 years", "Only treat if it reaches 5.5 cm"], "Iliac over 3 cm: repair.")])
    ]),

    /* ---------- 16 ---------- */
    S("16-aortic-dissection-features", "16. Aortic dissection: pathogenesis, risk, presentation, classification, mortality", "Dissection objective 1. Slides 95–108.", [
      C("Pathogenesis and acute aortic syndromes",
        "<p><strong>Aortic dissection</strong>: an <strong>intimal tear</strong> lets blood into a <strong>false lumen</strong> running beside the true lumen, separating the layers of the wall.</p>" +
        tbl(["Acute aortic syndrome", "What it is"], [
          ["<strong>Aortic dissection</strong>", "Intimal tear, blood in a false lumen"],
          ["Incomplete dissection", "Tear without dissecting blood"],
          ["<strong>Intramural hematoma</strong>", "<strong>Vasa vasorum rupture</strong>, bleeding into the wall"],
          ["Penetrating atherosclerotic ulcer (rare)", "Plaque ulcer through intima into media"],
          ["Trauma", "Catheterization related"]]),
        ["dissection-definition", "intramural-hematoma", "acute-aortic-syndromes"],
        [q("What starts an aortic dissection?", "An intimal tear", ["A clot in the vein", "A ruptured berry aneurysm", "A pericardial effusion"], "Intimal tear into a false lumen."),
          q("What causes an intramural hematoma?", "Rupture of the vasa vasorum", ["An intimal flap", "Mural thrombus", "Infection"], "Bleeding from the vasa vasorum forms an intramural hematoma."),
          q("Where does blood flow in an aortic dissection?", "Into a false lumen beside the true lumen", ["Into the pericardium only", "Into the IVC", "Into the esophagus"], "Blood tracks through a tear into a false lumen.")],
        [q("CTA shows a flap in the aorta with contrast in two channels. What is the diagnosis?", "Aortic dissection", ["Intramural hematoma", "AAA without dissection", "Pulmonary embolism"], "A flap with two channels is a dissection.")]),
      C("Risk factors",
        tbl(["Risk factors", "Triggers"], [["<strong>Hypertension (most important)</strong>, atherosclerosis, <strong>Marfan, Ehlers-Danlos</strong>, <strong>bicuspid aortic valve</strong>, pre-existing aneurysm, family history, prior cardiac or aortic surgery", "<strong>Pregnancy/postpartum</strong> (with aortopathy), <strong>heavy lifting</strong>, <strong>cocaine or methamphetamine</strong> (BP spikes)"]]) +
        hy("<strong>Hypertension</strong>, the stress on the aortic wall, is the <strong>most important</strong> risk factor."),
        ["dissection-htn", "dissection-other-risks", "dissection-triggers"],
        [q("What is the most important risk factor for aortic dissection?", "Hypertension", ["Diabetes", "Hyperlipidemia", "Obesity"], "Hypertension is the biggest dissection risk factor."),
          q("Which drugs can trigger aortic dissection by raising BP?", "Cocaine or methamphetamine", ["Acetaminophen", "Metformin", "Levothyroxine"], "Cocaine and meth spike BP."),
          q("Which physical activity is a dissection trigger?", "Heavy lifting or straining", ["Walking", "Swimming slowly", "Yoga stretches"], "Straining spikes BP.")],
        [q("A 35-year-old weightlifter who uses cocaine has sudden tearing chest pain radiating to his back. What must be ruled out first?", "Aortic dissection", ["Muscle strain", "GERD", "Costochondritis"], "Stimulants and straining spike BP.")]),
      C("Classification and mortality",
        tbl(["Stanford", "DeBakey", "Involves", "Share"], [
          ["<strong>Type A (proximal)</strong>", "I", "Ascending, arch, descending (may reach abdominal)", "<strong>about 60%</strong>"],
          ["<strong>Type A</strong>", "II", "<strong>Ascending only</strong>", "10–15%"],
          ["<strong>Type B (distal)</strong>", "III", "Descending, <strong>distal to the left subclavian</strong>, no ascending", "25–30%"]]) +
        hy("<strong>Stanford A = Ascending</strong> involved, no matter where else. <strong>Mortality 1–2% per hour</strong> early untreated (rupture, tamponade, AR, malperfusion). Type B has lower early mortality when uncomplicated.") +
        mn("<strong>A = Ascending = Act now (surgery)</strong>. <strong>B = Beyond the subclavian = Blood pressure (meds)</strong>.") +
        note("Speaker notes, slide 102: most dissections are proximal because pressure is highest and turbulent where the LV ejects into the ascending aorta."),
        ["stanford-a", "stanford-b", "debakey", "dissection-mortality"],
        [q("What defines a Stanford type A dissection?", "Involvement of the ascending aorta", ["Involvement only distal to the left subclavian", "Abdominal aorta only", "Any dissection in a woman"], "Type A involves the ascending aorta."),
          q("What defines a Stanford type B dissection?", "Descending aorta distal to the left subclavian, without ascending involvement", ["Ascending aorta only", "The aortic root only", "The coronary arteries"], "Type B is distal to the left subclavian."),
          q("What is the early untreated mortality of a type A dissection?", "About 1 to 2% per hour", ["About 1% per year", "About 10% per month", "Zero"], "Type A kills about 1-2% per hour untreated."),
          q("Which DeBakey type is confined to the ascending aorta?", "Type II", ["Type I", "Type III", "Type IV"], "DeBakey II is ascending only."),
          q("Which DeBakey type equals Stanford B?", "Type III", ["Type I", "Type II", "None"], "DeBakey III = descending = Stanford B."),
          q("Which is more common, proximal or distal dissection?", "Proximal (ascending)", ["Distal", "Equal", "Abdominal only"], "Ascending almost twice as common.")],
        [q("CTA shows a dissection flap starting in the ascending aorta and extending into the abdominal aorta. Stanford type?", "Type A", ["Type B", "Type C", "Not classifiable"], "Any ascending involvement = A."),
          q("CTA shows a dissection starting just beyond the left subclavian and running to the iliacs, ascending aorta normal. Stanford type?", "Type B", ["Type A", "DeBakey II", "Intramural hematoma"], "Starts past the left subclavian with normal ascending = Type B.")]),
      C("Symptoms and signs",
        tbl(["Symptoms", "Signs"], [[
          "<strong>Sudden sharp, tearing</strong> anterior chest and/or back (between scapulae) pain<br>Chest pain more in <strong>type A</strong>; back and abdominal pain more in <strong>type B</strong><br><strong>Painless dissection is rare</strong><br>Syncope (5–10%), stroke (carotid occlusion), abdominal or flank pain",
          "Exam may be normal early; pale, clammy<br><strong>Pulse deficits</strong> (15–20%)<br><strong>Arm BP difference over 20 mmHg</strong><br><strong>New AR</strong> (diastolic murmur)<br>Horner syndrome<br><strong>Beck triad</strong> = tamponade"]]) +
        tbl(["Extension into...", "Causes"], [["<strong>Aortic root</strong>", "<strong>Tamponade</strong> (usually fatal), <strong>AR</strong>"], ["<strong>Coronary arteries</strong>", "<strong>MI</strong> (usually right coronary, standard teaching)"], ["Carotids", "Stroke (20% of type A have neuro findings: poor prognosis)"], ["Spinal arteries", "<strong>Paraplegia</strong>"], ["Distal branches", "Limb ischemia, ischemic neuropathy"]]),
        ["dissection-pain", "dissection-pulse-bp", "dissection-complications"],
        [q("How is the pain of aortic dissection classically described?", "Sudden, sharp, tearing chest or back pain", ["Gradual pressure with exertion", "Burning after meals", "Pleuritic pain better leaning forward"], "Dissection pain is sudden, sharp and tearing."),
          q("What BP difference between arms raises concern for dissection?", "More than 20 mmHg", ["More than 2 mmHg", "More than 5 mmHg", "Any difference"], "A >20 mmHg arm difference suggests a branch is compromised."),
          q("Which murmur may develop with a proximal dissection?", "Aortic regurgitation (diastolic)", ["Mitral stenosis", "Pulmonic stenosis", "Tricuspid regurgitation"], "Root dissection makes the aortic valve leak."),
          q("Which pain location is more common in type B dissection?", "Back and abdominal pain", ["Anterior chest pain", "Jaw pain", "Shoulder only"], "Type B: back and abdomen."),
          q("What does hypotension with JVD suggest in a dissection?", "Bleeding into the pericardium with tamponade", ["Dehydration", "Pulmonary embolism", "Right MI only"], "Hypotension with JVD = tamponade from bleeding into the pericardium."),
          q("What spinal complication can dissection cause?", "Paraplegia from spinal cord ischemia", ["Disc herniation", "Scoliosis", "Spinal stenosis"], "Dissection can cut off spinal arteries."),
          q("How common is painless aortic dissection?", "Rare", ["The majority", "About half", "Always in type A"], "Painless dissection is rare.")],
        [q("A 60-year-old with hypertension has sudden tearing pain between his shoulder blades, BP 180/100 in the right arm and 150/90 in the left. Diagnosis?", "Aortic dissection", ["Acute MI", "Pericarditis", "Pneumonia"], "Tearing back pain plus arm BP gap over 20."),
          q("A patient with a type A dissection develops hypotension, JVD and muffled heart sounds. What happened?", "Dissection into the pericardium causing tamponade", ["Aortic stenosis", "Pulmonary embolism", "Septic shock"], "Hypotension, JVD and muffled sounds = tamponade."),
          q("A patient with dissection develops ST elevation in II, III and aVF. What is the mechanism?", "The dissection extended into a coronary artery", ["Unrelated plaque rupture always", "Pericarditis", "Hyperkalemia"], "Inferior STEMI means the dissection hit the RCA.")])
    ]),

    /* ---------- 17 ---------- */
    S("17-aortic-dissection-workup-management", "17. Aortic dissection: workup and management by type", "Dissection objective 2. Slides 109–115.", [
      C("Diagnosis",
        tbl(["Test", "Role"], [
          ["<strong>CXR</strong>", "May show <strong>widened mediastinum</strong>; <strong>a normal CXR does not exclude</strong>"],
          ["<strong>CTA chest, abdomen and pelvis</strong>", "<strong>Preferred</strong> test; shows true and false lumens"],
          ["<strong>TEE</strong> (or TTE)", "For <strong>hemodynamically unstable</strong> patients or when CTA not feasible; sees tamponade, wall motion, valves, proximal dissection (misses distal and intramural hematoma)"],
          ["MRA", "Accurate but not practical in an emergency"]]) +
        note("Speaker notes, slide 110: mediastinal widening in 63% of type A; 11% have a normal CXR."),
        ["dissection-cxr", "dissection-cta", "dissection-tee"],
        [q("What is the preferred imaging for suspected aortic dissection?", "CTA of the chest, abdomen and pelvis", ["Chest x-ray alone", "MRA", "Abdominal ultrasound"], "CTA of chest, abdomen and pelvis is preferred."),
          q("Which test is used for an unstable patient with suspected dissection?", "TEE", ["MRA", "Outpatient CTA", "Exercise stress test"], "Unstable patients get bedside TEE."),
          q("What CXR finding may suggest dissection?", "Widened mediastinum", ["Kerley B lines", "Water-bottle heart only", "Hyperinflation"], "A widened mediastinum suggests dissection."),
          q("Does a normal chest x-ray rule out aortic dissection?", "No", ["Yes", "Only in type B", "Only in women"], "Normal CXR does not exclude."),
          q("What can TEE miss in dissection?", "Distal dissection and intramural hematoma", ["Tamponade", "Proximal flap", "Aortic regurgitation"], "TEE can't see far distally and misses some hematomas.")],
        [q("A stable patient with tearing chest pain has a normal chest x-ray. Next step?", "CTA of the chest, abdomen and pelvis", ["Discharge, the CXR is normal", "Exercise stress test", "Upper endoscopy"], "Normal CXR does not exclude."),
          q("A hypotensive patient with suspected type A dissection is too unstable for the CT scanner. Which test?", "Bedside TEE", ["MRA", "CTA anyway", "Lumbar puncture"], "Unstable: bedside TEE.")]),
      C("Anti-impulse therapy",
        "<ol class=\"concept-chain\"><li>ICU, <strong>pain control</strong></li><li><strong>IV beta blocker first</strong> (<strong>esmolol or labetalol</strong>): lowers the force and speed of LV contraction, less shear stress, less propagation</li><li>Goal <strong>HR 60–80</strong></li><li>If <strong>SBP still over 120</strong>, <strong>add nitroprusside</strong> (or nicardipine)</li><li>Goal <strong>SBP 100–120</strong></li></ol>" +
        hy("<strong>Beta blocker BEFORE vasodilator.</strong> A vasodilator alone causes reflex tachycardia and more shear. If beta blockers are contraindicated: <strong>verapamil or diltiazem</strong>.") +
        mn("<strong>Rate before pressure</strong>: HR 60–80 first, then SBP 100–120."),
        ["anti-impulse-bb", "anti-impulse-targets", "anti-impulse-vasodilator", "anti-impulse-alternatives"],
        [q("What is the first drug in acute aortic dissection management?", "IV beta blocker (esmolol or labetalol)", ["Nitroprusside", "Hydralazine", "Furosemide"], "IV beta blocker first to lower shear."),
          q("What is the heart rate goal in acute aortic dissection?", "60 to 80 bpm", ["100 to 120 bpm", "40 to 50 bpm", "Over 100 bpm"], "HR goal 60-80."),
          q("What is the systolic BP goal in acute aortic dissection?", "100 to 120 mmHg", ["140 to 160 mmHg", "Under 80 mmHg", "160 to 180 mmHg"], "SBP goal 100-120."),
          q("When is nitroprusside added in aortic dissection?", "If SBP stays over 120 after a beta blocker", ["Before the beta blocker", "Never", "Only for type B after discharge"], "Add nitroprusside if SBP stays over 120."),
          q("Why must a vasodilator not be given before a beta blocker in dissection?", "Reflex tachycardia increases shear stress", ["It causes bradycardia", "It worsens kidney function only", "It is too weak"], "Vasodilators alone cause reflex tachycardia and more shear."),
          q("Which drugs replace beta blockers if contraindicated in dissection?", "Verapamil or diltiazem", ["Nifedipine or amlodipine", "Hydralazine", "Digoxin"], "Verapamil or diltiazem slow HR if beta blockers can't be used."),
          q("How does anti-impulse therapy slow dissection?", "It lowers the velocity of LV contraction, reducing shear stress", ["It dissolves the false lumen clot", "It raises BP to seal the tear", "It increases cardiac output"], "Slowing LV contraction reduces shear on the tear.")],
        [q("A patient with type B dissection has HR 110 and BP 190/100. A resident starts nitroprusside alone. What is wrong?", "A beta blocker must come first to prevent reflex tachycardia", ["Nothing; nitroprusside is first-line alone", "He should get furosemide first", "He should get hydralazine instead"], "Beta blocker first to prevent reflex tachycardia."),
          q("After IV esmolol, a dissection patient's HR is 70 but SBP is 150. Next step?", "Add nitroprusside or nicardipine to reach SBP 100 to 120", ["Stop esmolol", "Give IV fluids", "Accept SBP 150"], "Add a vasodilator to reach SBP 100-120."),
          q("A dissection patient has severe asthma with bronchospasm, so beta blockers are contraindicated. Which drug controls HR?", "Diltiazem", ["Nifedipine", "Hydralazine", "Nitroprusside"], "Diltiazem slows HR without bronchospasm.")]),
      C("Management by type and long term",
        tbl(["Type", "Management"], [
          ["<strong>Stanford A</strong>", "<strong>Emergent surgical repair</strong> + anti-impulse therapy"],
          ["<strong>Stanford B, uncomplicated</strong>", "<strong>Medical (anti-impulse) therapy</strong>"],
          ["<strong>Stanford B, complicated</strong>", "<strong>Intervention</strong>: rupture, <strong>malperfusion</strong> (branch vessel), extension or enlargement, <strong>persistent pain or uncontrolled HTN</strong>"]]) +
        hy("<strong>Long term:</strong> BP control, usually with a <strong>beta blocker</strong>; <strong>CT or MRI at 1, 6 and 12 months</strong>, then <strong>yearly</strong> if stable."),
        ["dissection-type-a-tx", "dissection-type-b-tx", "dissection-complicated-b", "dissection-long-term"],
        [q("How is a Stanford type A dissection treated?", "Emergent surgery plus anti-impulse therapy", ["Medical therapy alone", "Observation", "Thrombolytics"], "Type A needs emergent surgery."),
          q("How is an uncomplicated Stanford type B dissection treated?", "Medical anti-impulse therapy", ["Emergent open surgery", "Thrombolytics", "Anticoagulation"], "Uncomplicated Type B is managed medically."),
          q("Which finding makes a type B dissection complicated and needing intervention?", "Malperfusion of a branch vessel", ["Pain controlled on meds", "BP at goal", "Stable size on CT"], "Rupture, malperfusion, extension, persistent pain, uncontrolled HTN."),
          q("What is the imaging schedule after a dissection?", "CT or MRI at 1, 6 and 12 months, then yearly", ["Never again", "Every week for life", "Only if symptoms"], "1, 6, 12 months then annual."),
          q("Which drug class is typical for long-term BP control after dissection?", "Beta blocker", ["Hydralazine alone", "Loop diuretic alone", "Nitrates"], "Long-term BP control usually uses a beta blocker.")],
        [q("Slide 95's case: a 77-year-old with hypertension has a type A dissection of the ascending aorta on CTA. Plan?", "Emergent surgical repair with anti-impulse therapy", ["Medical therapy alone", "Thrombolysis", "Discharge on losartan"], "Type A = emergent surgery."),
          q("A type B dissection patient on IV esmolol and nitroprusside still has severe pain, and a new cold left leg. Plan?", "Intervention for complicated type B (malperfusion, persistent pain)", ["Continue medical therapy only", "Discharge", "Start warfarin"], "Ongoing pain and malperfusion make Type B complicated, needing intervention."),
          q("A type B dissection patient is pain free with BP and HR at goal and no malperfusion. Plan?", "Continue medical anti-impulse therapy", ["Emergent open repair", "Thrombolysis", "Stop all BP meds"], "Uncomplicated Type B: continue medical therapy.")])
    ]),

    /* ---------- 18a ---------- */
    S("18a-kawasaki", "18a. Kawasaki disease", "Vasculitis objective. Slides 141–145.", [
      C("Kawasaki disease",
        "<p><strong>Medium-vessel vasculitis</strong> of <strong>children, usually under 5</strong>, with a particular attack on the <strong>coronary arteries</strong>.</p>" +
        hy("<strong>Diagnosis</strong>: <strong>fever 5 days or more</strong> (high, unresponsive to antipyretics) <strong>plus 4 of 5</strong>:<br>1. <strong>Bilateral nonexudative conjunctival injection</strong><br>2. <strong>Oral changes</strong>: red or fissured lips, injected pharynx, <strong>strawberry tongue</strong><br>3. <strong>Extremity changes</strong>: red palms/soles, hand/foot edema (acute), <strong>periungual desquamation</strong> (convalescent)<br>4. <strong>Polymorphous rash</strong><br>5. <strong>Cervical lymphadenopathy</strong> (at least one node over 1.5 cm)") +
        mn("<strong>CRASH and Burn</strong>: <strong>C</strong>onjunctivitis, <strong>R</strong>ash, <strong>A</strong>denopathy, <strong>S</strong>trawberry tongue (oral), <strong>H</strong>ands and feet; <strong>Burn</strong> = fever 5 days or more.") +
        tbl(["Complications", "Treatment"], [["<strong>Coronary artery aneurysm</strong>, heart failure, <strong>MI</strong>, arrhythmias, peripheral occlusion, death", "<strong>IVIG</strong> (single infusion) <strong>+ aspirin 30–50 mg/kg</strong>, then <strong>low-dose aspirin 3–5 mg/kg/day</strong> after the fever breaks"]]) +
        note("Kawasaki is one of the rare times children get aspirin (Reye syndrome risk is accepted); standard teaching. Echo to look for coronary aneurysms is standard teaching too."),
        ["kawasaki-who", "kawasaki-criteria", "kawasaki-complications", "kawasaki-treatment"],
        [q("Which age group gets Kawasaki disease?", "Children usually under 5", ["Teenagers", "Young women under 40", "Adults over 60"], "Kawasaki affects children under 5."),
          q("Which vessels does Kawasaki disease particularly affect?", "Coronary arteries", ["Aorta and its arch branches", "Digital arteries", "Renal veins"], "Kawasaki attacks the coronary arteries."),
          q("How long must fever last for Kawasaki diagnosis?", "5 days or more", ["1 day", "2 days", "3 weeks"], "Fever 5 days or more."),
          q("How many of the 5 clinical features are needed with fever for Kawasaki?", "4", ["1", "2", "5 of 5 always"], "Fever plus 4 of 5 features."),
          q("What is the most feared complication of Kawasaki disease?", "Coronary artery aneurysm", ["Renal failure", "Stroke from carotid dissection", "Hearing loss"], "Coronary aneurysms can cause MI."),
          q("What is the initial treatment of Kawasaki disease?", "IVIG plus high-dose aspirin", ["Steroids alone", "Penicillin", "Ibuprofen alone"], "IVIG + aspirin 30–50 mg/kg."),
          q("What aspirin dose follows defervescence in Kawasaki disease?", "Low dose, 3 to 5 mg/kg/day", ["None", "100 mg/kg/day", "Same 30 to 50 mg/kg"], "After the fever, low-dose aspirin (3-5 mg/kg/day)."),
          q("Which conjunctival finding fits Kawasaki?", "Bilateral nonexudative injection", ["Unilateral purulent discharge", "Subconjunctival hemorrhage", "Dendritic ulcer"], "Kawasaki conjunctivitis is bilateral and nonexudative."),
          q("Which hand finding appears in the convalescent phase of Kawasaki?", "Periungual desquamation", ["Clubbing", "Osler nodes", "Splinter hemorrhages"], "Peeling around the nails is convalescent.")],
        [q("A 3-year-old has 6 days of high fever unresponsive to acetaminophen, red eyes without discharge, cracked red lips, strawberry tongue, swollen hands, and a 2 cm neck node. Diagnosis?", "Kawasaki disease", ["Strep pharyngitis", "Measles", "Takayasu arteritis"], "Fever 5+ days plus 4+ features."),
          q("A child is diagnosed with Kawasaki disease. Which treatment prevents coronary aneurysms?", "IVIG with high-dose aspirin", ["Oral amoxicillin", "Prednisone alone", "Supportive care only"], "IVIG plus aspirin prevents coronary aneurysms."),
          q("Weeks after Kawasaki disease, a child's fingertips peel around the nails. What phase is this?", "Convalescent phase", ["Acute phase", "Relapse", "Drug reaction"], "Periungual peeling is convalescent.")])
    ]),

    /* ---------- 18b ---------- */
    S("18b-takayasu", "18b. Takayasu arteritis", "Vasculitis objective. Slides 132–140.", [
      C("Takayasu arteritis",
        "<p><strong>Large-vessel vasculitis</strong> of the <strong>aorta and its major branches</strong> (subclavian, brachiocephalic, carotid, vertebral, pulmonary, abdominal aorta). <strong>Granulomatous</strong> inflammation causes <strong>stenosis</strong> (fibrosis) and <strong>aneurysms</strong>; similar to giant cell arteritis.</p>" +
        hy("<strong>Young women</strong> (80–90% female), often <strong>under 40</strong>, more common in <strong>Asian women</strong>. Called <strong>\"pulseless disease\"</strong>.") +
        tbl(["Symptoms", "Exam"], [[
          "Early: <strong>fatigue, weight loss, low-grade fever</strong>; arthralgia/myalgia (half)<br>Brain: syncope, dizziness, vertigo, headache, blurry vision<br>Gut: abdominal pain, diarrhea, GI bleed (mesenteric ischemia)<br>Dyspnea, chest pain",
          "<strong>Absent or weak pulses</strong>, varying between arms<br><strong>BP difference between arms</strong><br>Cool extremities, arm claudication<br><strong>HTN</strong> in up to half (renal artery stenosis)<br><strong>AR</strong> murmur<br><strong>Bruits</strong> (carotid, subclavian, abdominal)"]]) +
        tbl(["Diagnosis", "Treatment"], [["Clinical, <strong>high ESR/CRP</strong>, <strong>angiography showing stenosis of the aorta or branches</strong> (biopsy impractical)", "<strong>Corticosteroids</strong>, <strong>DMARDs</strong>, vascular surgery consult"]]),
        ["takayasu-who", "takayasu-vessels", "takayasu-symptoms", "takayasu-exam", "takayasu-dx-tx"],
        [q("Who typically gets Takayasu arteritis?", "Young women, often Asian, under 40", ["Older men over 60", "Children under 5", "Young male smokers"], "Takayasu affects young, often Asian women."),
          q("Which vessels does Takayasu arteritis affect?", "The aorta and its major branches", ["Digital arteries only", "Coronary arteries in children", "Small veins of the leg"], "Takayasu inflames the aorta and big branches."),
          q("What exam finding gives Takayasu the name pulseless disease?", "Absent or weak arm pulses", ["Bounding pulses", "Pulsus paradoxus", "Water hammer pulse"], "Narrowed subclavians weaken arm pulses."),
          q("Why can hypertension occur in Takayasu arteritis?", "Renal artery stenosis or aortic coarctation", ["High salt diet", "Pheochromocytoma", "Steroid deficiency"], "Renal artery stenosis or coarctation raises BP."),
          q("How is Takayasu arteritis diagnosed?", "Angiography showing stenosis of the aorta or branches, with high ESR/CRP", ["Temporal artery biopsy is required", "Allen test", "Positive ANCA"], "Angiography shows the stenoses; ESR/CRP are high."),
          q("What is the treatment of Takayasu arteritis?", "Corticosteroids and DMARDs", ["Smoking cessation only", "IVIG and aspirin", "Calcium channel blockers only"], "Steroids and DMARDs control the inflammation."),
          q("Which murmur may be heard in Takayasu arteritis?", "Aortic regurgitation along the left sternal border", ["Mitral stenosis at the apex", "Pulmonic stenosis", "Still murmur"], "Aortic root involvement causes AR."),
          q("What are the early systemic symptoms of Takayasu arteritis?", "Fatigue, weight loss and low-grade fever", ["Painful fingertips", "Rash on palms", "Strawberry tongue"], "Early Takayasu causes fatigue, weight loss and low fever.")],
        [q("A 28-year-old Asian woman has months of fatigue and low-grade fever, arm pain when brushing her hair, a weak left radial pulse, a 30 mmHg arm BP difference and a subclavian bruit. Diagnosis?", "Takayasu arteritis", ["Kawasaki disease", "Buerger disease", "Raynaud phenomenon"], "Young woman, arm claudication, weak pulse, BP difference and bruit = Takayasu."),
          q("A woman with Takayasu arteritis has new hypertension. What is the likely mechanism?", "Renal artery stenosis", ["Primary aldosteronism", "Pheochromocytoma", "White coat effect"], "Renal artery stenosis causes hypertension."),
          q("A young woman with suspected Takayasu arteritis has a high ESR. Which test confirms it?", "Angiography (CTA or MRA) of the aorta and branches", ["Temporal artery biopsy", "Nail fold capillaroscopy", "Allen test"], "Angiography shows vessel stenosis.")])
    ]),

    /* ---------- 18c ---------- */
    S("18c-buerger", "18c. Buerger disease (thromboangiitis obliterans)", "Vasculitis objective. Slides 118–127.", [
      C("Buerger disease",
        "<p><strong>Thromboangiitis obliterans</strong>: <strong>thrombo</strong> (clot) + <strong>angiitis</strong> (vessel inflammation) + <strong>obliterans</strong> (occlusion). A <strong>non-atherosclerotic</strong>, segmental, recurring inflammation and occlusion of <strong>small and medium arteries and veins</strong> of the arms and legs.</p>" +
        hy("<strong>Heavy tobacco use</strong>, <strong>young (under 45–50)</strong>, mostly <strong>male</strong>. Two-thirds have <strong>severe periodontal disease</strong>.") +
        tbl(["Early", "Progression"], [["<strong>Superficial thrombophlebitis</strong>, <strong>cold sensitivity</strong> (Raynaud)", "Claudication of <strong>feet, lower legs, arms and hands</strong>; pale or dusky digits; <strong>painful ulcers</strong>; rest pain; eschar; <strong>dry gangrene and autoamputation</strong>"]]),
        ["buerger-definition", "buerger-risk", "buerger-presentation"],
        [q("What is the strongest association with Buerger disease?", "Heavy tobacco use", ["Hyperlipidemia", "Diabetes", "Alcohol"], "Buerger is tied to heavy smoking."),
          q("Is Buerger disease atherosclerotic?", "No, it is non-atherosclerotic", ["Yes, always", "Only in women", "Only in the aorta"], "Buerger is inflammation, not atherosclerosis."),
          q("Which vessels does Buerger disease affect?", "Small and medium arteries and veins of the limbs", ["The aorta only", "Coronary arteries in children", "Large pulmonary arteries"], "Small and medium limb arteries and veins."),
          q("What age group typically gets Buerger disease?", "Under 45 to 50", ["Over 70", "Under 5", "Only teenagers"], "Buerger hits smokers under 45-50."),
          q("Which dental finding is common in Buerger disease?", "Severe periodontal disease", ["Strawberry tongue", "Enamel hypoplasia", "Gingival hyperplasia from drugs"], "Two-thirds have severe periodontal disease."),
          q("What are early manifestations of Buerger disease?", "Superficial thrombophlebitis and cold sensitivity", ["Coronary aneurysm", "Hydronephrosis", "Aortic regurgitation"], "Early: superficial thrombophlebitis and cold sensitivity. (Slide 121)")],
        [q("A 35-year-old man who smokes two packs a day has painful ulcers on his fingertips, foot claudication, and recurrent tender cords along superficial veins. Diagnosis?", "Buerger disease", ["Atherosclerotic PAD", "Takayasu arteritis", "Primary Raynaud"], "Young heavy smoker, distal small vessels, thrombophlebitis.")]),
      C("Diagnosis and treatment",
        tbl(["Test", "Finding"], [
          ["<strong>Allen test</strong>", "<strong>Positive</strong> at the wrist in a young smoker with leg ischemia is suggestive"],
          ["ABI", "<strong>Normal does not exclude</strong> (segmental, distal); toe and finger indices may be low"],
          ["Labs", "ESR, CRP, rheum panel, hypercoagulability panel, tox screen (to exclude others)"],
          ["<strong>CTA with runoff</strong>", "No atherosclerosis, no embolic source, <strong>segmental small/medium occlusions</strong>, <strong>corkscrew collaterals</strong> (classic)"]]) +
        "<p><strong>Clinical criteria:</strong> age under 50; current or recent tobacco; distal extremity ischemia on testing; typical arteriogram; <strong>exclusion</strong> of autoimmune disease, thrombophilia, <strong>diabetes</strong>, and proximal embolic sources.</p>" +
        hy("<strong>Smoking cessation is the ONLY way to halt progression.</strong> Vasodilators may help symptoms (investigational). Revascularization is limited by small-vessel disease; amputation sometimes needed.") +
        mn("<strong>Corkscrew collaterals = Buerger.</strong>"),
        ["buerger-allen", "buerger-cta", "buerger-criteria", "buerger-treatment"],
        [q("What is the classic angiographic finding in Buerger disease?", "Corkscrew collaterals", ["String of beads", "Rat tail narrowing of the esophagus", "Double lumen with flap"], "Corkscrew collaterals are classic."),
          q("What is the only way to halt progression of Buerger disease?", "Smoking cessation", ["Bypass surgery", "Statins", "Warfarin"], "Only quitting smoking halts Buerger."),
          q("Which bedside test at the wrist is suggestive of Buerger disease?", "Positive Allen test", ["Phalen test", "Tinel sign", "Finkelstein test"], "A positive Allen test shows hand artery occlusion."),
          q("Does a normal ABI exclude Buerger disease?", "No, disease is segmental and distal", ["Yes", "Only in women", "Only if under 30"], "Normal ABI does not exclude."),
          q("Which condition must be excluded to diagnose Buerger disease?", "Diabetes", ["Periodontal disease", "Smoking", "Male sex"], "Exclude DM, autoimmune, thrombophilia, emboli."),
          q("What does CTA show about atherosclerosis in Buerger disease?", "No evidence of atherosclerosis", ["Heavy aortic calcification", "Iliac plaque", "Coronary calcium"], "Buerger shows no atherosclerosis.")],
        [q("A 32-year-old smoker with digital ulcers has a normal ABI. Does this rule out Buerger disease?", "No; it is distal and segmental, so check toe and finger indices and CTA", ["Yes, ABI is always low in Buerger", "Yes, if pulses are present", "Only if he quits"], "Normal ABI does not exclude."),
          q("A patient with Buerger disease asks which medicine will stop it. Best answer?", "Quitting all tobacco is the only thing that halts it", ["Cilostazol cures it", "Bypass surgery cures it", "Steroids cure it"], "Only quitting tobacco stops it."),
          q("A young smoker's hand turns and stays pale when the radial artery is released during an Allen test with ulnar compression. What does this suggest?", "Small-vessel occlusion such as Buerger disease", ["Normal hand circulation", "Carpal tunnel syndrome", "DVT"], "A positive Allen test suggests small-vessel occlusion.")])
    ]),

    /* ---------- 18d ---------- */
    S("18d-raynaud", "18d. Raynaud phenomenon", "Vasculitis objective. Slides 128–131.", [
      C("Raynaud phenomenon",
        "<p><strong>Exaggerated vasospasm</strong> of small digital arteries in response to <strong>cold or emotional stress</strong>.</p>" +
        hy("Color sequence: <strong>WHITE</strong> (pallor) → <strong>BLUE</strong> (cyanosis) → <strong>RED</strong> (reactive hyperemia). Fingers, toes, nose, ears. Exam usually <strong>normal between episodes</strong>.") +
        mn("<strong>White, Blue, Red</strong>: white when the artery clamps, blue while blood sits, red when it rushes back.") +
        tbl(["", "<strong>Primary</strong>", "<strong>Secondary</strong> (Raynaud syndrome)"], [
          ["Cause", "No underlying disorder", "<strong>Scleroderma (CREST)</strong>, polymyositis, RA, <strong>SLE</strong>, <strong>repetitive trauma (jackhammer)</strong>, <strong>Buerger</strong>, drugs (chemo, amphetamines)"],
          ["Sex", "<strong>Women</strong>", "Either"],
          ["Onset", "<strong>15–30</strong>", "<strong>Over 30</strong>"],
          ["Severity", "Mild", "<strong>Severe</strong>; ulcers, digital ischemia, sclerodactyly"],
          ["Finger edema, arthritis", "None", "May occur"],
          ["Autoantibodies", "<strong>Absent</strong>", "May be positive"]]) +
        "<p><strong>Initial treatment:</strong> <strong>avoid triggers</strong> (gloves, warmth) and <strong>calcium channel blockers</strong> (vasodilation).</p>" +
        note("Dihydropyridines such as nifedipine or amlodipine are the CCBs used (standard teaching)."),
        ["raynaud-mechanism", "raynaud-colors", "raynaud-primary", "raynaud-secondary", "raynaud-treatment"],
        [q("What is the color sequence of Raynaud phenomenon?", "White, then blue, then red", ["Red, then white, then blue", "Blue, then red, then white", "Black, then white"], "White (spasm), blue (deoxygenation), red (reperfusion)."),
          q("What triggers Raynaud phenomenon?", "Cold or emotional stress", ["Heat", "Exercise", "Meals"], "Cold or stress triggers vasospasm."),
          q("What is the first-line drug for Raynaud phenomenon?", "Calcium channel blocker", ["Beta blocker", "Aspirin", "Steroid"], "CCBs dilate digital arteries."),
          q("At what age does primary Raynaud usually start?", "15 to 30", ["Over 50", "Under 5", "Over 70"], "Primary Raynaud starts at 15-30."),
          q("Which connective tissue disease is classically linked to secondary Raynaud?", "Scleroderma (CREST)", ["Gout", "Osteoarthritis", "Fibromyalgia"], "Scleroderma (CREST) causes secondary Raynaud."),
          q("Which occupation can cause secondary Raynaud?", "Jackhammer operator", ["Office worker", "Teacher", "Pilot"], "Vibration injury from jackhammers causes secondary Raynaud."),
          q("Are autoantibodies present in primary Raynaud?", "No", ["Yes, always", "Only ANA over 1:1280", "Only anti-CCP"], "Primary Raynaud has no autoantibodies."),
          q("What does the exam show between Raynaud attacks?", "Usually normal", ["Constant cyanosis", "Absent pulses", "Gangrene"], "Between attacks the exam is normal.")],
        [q("A 22-year-old woman's fingers turn white then blue then red in cold weather. Exam and ANA are normal. Diagnosis and first step?", "Primary Raynaud; avoid cold and wear gloves", ["Secondary Raynaud; start steroids", "Buerger disease; quit smoking", "Takayasu; angiography"], "Young woman, mild, no antibodies."),
          q("A 45-year-old woman has new Raynaud with tight, thickened finger skin, fingertip ulcers and a positive ANA. What is the likely cause?", "Secondary Raynaud from scleroderma", ["Primary Raynaud", "Buerger disease", "Kawasaki disease"], "Late onset, severe, antibodies, sclerodactyly."),
          q("A patient with primary Raynaud still has frequent painful attacks despite gloves. Which drug?", "A calcium channel blocker such as nifedipine", ["Propranolol", "Sumatriptan", "Pseudoephedrine"], "CCBs like nifedipine dilate digital vessels.")])
    ]),

    /* ---------- 19 ---------- */
    S("19-avm", "19. Arteriovenous malformations", "Vasculitis objective 2 (AVM). Slides 146–150.", [
      C("AVMs",
        "<p><strong>AVM</strong>: an abnormal connection between an <strong>artery and a vein</strong>, shunting arterial blood straight into veins and <strong>bypassing capillaries</strong>. The veins dilate under high pressure and weaken, so they <strong>bleed</strong>.</p>" +
        tbl(["AVM", "AV fistula (AVF)"], [["Usually <strong>congenital</strong>", "<strong>Acquired</strong>: trauma, vascular surgery, <strong>dialysis fistula</strong>"]]) +
        tbl(["Location / exam", "Complication"], [["Superficial", "<strong>Pulsatile mass</strong>, <strong>bruit</strong>"], ["Bone", "<strong>Pathologic fractures</strong>"], ["<strong>Brain</strong>", "<strong>Seizures</strong>, neuro deficits, <strong>hemorrhage</strong>"]]) +
        hy("Diagnosis: <strong>CTA or MRA</strong>. Management is <strong>individualized</strong> (location, symptoms, risk): <strong>surgical removal or endovascular embolization</strong>; <strong>observation</strong> may be fine if asymptomatic.<br>Syndrome: <strong>hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu)</strong>."),
        ["avm-definition", "avm-vs-avf", "avm-complications", "avm-dx-tx", "hht"],
        [q("What is an AVM?", "An abnormal artery-to-vein connection that bypasses capillaries", ["A clot in a vein", "An inflamed artery", "A ballooned aorta"], "An AVM shunts arterial blood into veins, skipping capillaries."),
          q("How does an AVM differ from an AV fistula?", "AVMs are usually congenital; AV fistulas are acquired", ["AVMs are always acquired", "They are identical", "AV fistulas are only congenital"], "AVMs are congenital; AV fistulas are acquired."),
          q("What can a brain AVM cause?", "Seizures, neurologic deficits or hemorrhage", ["Claudication", "Hydronephrosis", "Raynaud phenomenon"], "Brain AVMs cause seizures, deficits or bleeding. (Slide 147)"),
          q("What can an AVM in bone cause?", "Pathologic fractures", ["Gout", "Osteoarthritis", "Rickets"], "Bone AVMs weaken bone, causing fractures."),
          q("Which imaging diagnoses an AVM?", "CTA or MRA", ["ABI", "Plain x-ray only", "Allen test"], "CTA or MRA shows the AVM."),
          q("Which hereditary syndrome features AVMs?", "Hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu)", ["Marfan syndrome", "Turner syndrome", "Kawasaki disease"], "HHT features AVMs."),
          q("What exam findings suggest a superficial AVM?", "A pulsatile mass or a bruit", ["A painless black toe", "A cold, pulseless leg", "Brawny edema"], "Superficial AVMs pulse and have a bruit."),
          q("Can an asymptomatic AVM be observed?", "Yes, management is individualized", ["No, all must be removed", "No, all need embolization within 24 hours", "Only in children"], "Asymptomatic AVMs can be watched.")],
        [q("A 25-year-old has a first seizure; MRI shows a tangle of vessels shunting arterial blood into dilated veins. Diagnosis?", "Brain AVM", ["Berry aneurysm", "Glioblastoma", "Venous sinus thrombosis"], "First seizure with a vascular tangle = brain AVM."),
          q("A dialysis patient has a surgically created connection between the radial artery and cephalic vein. What is it called?", "An acquired arteriovenous fistula", ["A congenital AVM", "A pseudoaneurysm", "A mycotic aneurysm"], "A surgically made artery-vein connection is an acquired AV fistula."),
          q("A patient with recurrent nosebleeds, telangiectasias on the lips and a family history of the same has a lung AVM. Which syndrome?", "Hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu)", ["Marfan syndrome", "Ehlers-Danlos syndrome", "Takayasu arteritis"], "Nosebleeds, telangiectasias, family history and lung AVM = HHT.")])
    ])
  ];
})();
