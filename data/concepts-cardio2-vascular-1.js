/*
  Cardio Part 2 Concepts: Vascular Disease Part 1 (arterial).
  Source: source-material/cardio-part-2/text/vascular-disease-part-1.md.
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

  window.CARDIO2_CONCEPTS_VASCULAR_1 = L("vascular-1", "Vascular Disease Part 1", [

    D("vas1c-supply-demand", "Claudication is a supply-demand mismatch downstream of the narrowing", "A narrowed artery can feed resting muscle but not working muscle, so pain comes with walking, goes with rest, and is felt below the blockage; when even rest isn't covered, the limb is critically threatened.", [
      S("idea", "The idea", "<p>An atherosclerotic narrowing limits how much blood can get through. At rest the muscle needs little, so supply is <strong>enough</strong>. Walking raises demand, the narrowing can't keep up, and the muscle becomes ischemic → cramp, ache, weakness. Stop walking, demand falls, pain goes.</p><p>The pain is in the muscle <strong>fed by</strong> the narrowed artery, so it is <strong>distal to the lesion</strong>: iliac disease → buttock, hip, thigh; femoral-popliteal disease → calf.</p>"),
      S("chain", "Cause → effect", chain([
        "Plaque narrows the artery",
        "Rest: supply ≥ demand → no pain",
        "Exercise: demand rises, supply is capped → ischemic muscle pain",
        "Rest: demand falls → pain resolves in minutes",
        "Worse narrowing: supply < even resting demand → rest pain, nonhealing wounds, gangrene (CLTI, more than 2 weeks)"
      ]) + Tbl(["Lesion level", "Where it hurts"], [
        ["Aortoiliac (Leriche)", "Buttock, thigh, hip + ED + poor femoral pulses"],
        ["Femoral-popliteal", "Calf"]
      ]) + Tbl(["", "Claudication (PAD)", "Pseudoclaudication (spinal stenosis)"], [
        ["Trigger", "Walking (demand)", "Standing erect (posture)"],
        ["Relief", "Stopping, even while standing", "Sitting or bending forward"],
        ["Pulses", "Diminished", "Normal"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The mechanism tells you the treatment: <strong>structured exercise</strong> trains muscle and collaterals; <strong>cilostazol</strong> improves walking distance; <strong>statin, antiplatelet, smoking cessation</strong> treat the atherosclerosis and cut MI/stroke risk. Revascularization is for lifestyle-limiting symptoms despite therapy or for CLTI.</p>" + HY("No pain with sitting was the most specific finding for pseudoclaudication.")),
      S("traps", "Common traps", traps([
        "<strong>Placing the lesion where it hurts.</strong> The lesion is proximal; the pain is distal.",
        "<strong>Calling posture-dependent leg pain PAD.</strong> Pain from standing, relieved by sitting or leaning forward = spinal stenosis.",
        "<strong>Treating rest pain like claudication.</strong> Rest pain = demand at rest isn't met = CLTI, refer."
      ]))
    ], [
      Q("idea", "Why does claudication hurt with walking but not at rest?", ["Blood flow through the narrowing covers resting needs but not exercise needs", "Walking compresses nerves", "Lactic acid builds only when standing", "The artery spasms only with exercise"], 0, "Supply-demand mismatch induced by activity."),
      Q("chain", "A patient has buttock and thigh claudication, erectile dysfunction, and weak femoral pulses. Where is the lesion?", ["Aortoiliac", "Popliteal", "Tibial", "Lumbar spine"], 0, "Leriche syndrome: aortoiliac occlusive disease."),
      Q("chain", "A patient has calf claudication. Where is the narrowing most likely?", ["Femoral-popliteal arteries, above the calf", "Tibial arteries in the foot", "Lumbar spine", "Calf veins"], 0, "Symptoms are distal to the lesion."),
      Q("traps", "Leg pain comes on with standing and is relieved by sitting or bending forward, with normal pulses. What is it?", ["Pseudoclaudication from lumbar spinal stenosis", "Claudication from PAD", "Acute limb ischemia", "DVT"], 0, "Posture, not demand, drives pseudoclaudication."),
      Q("bedside", "A PAD patient now has foot pain at night that improves when the leg hangs off the bed, lasting over 2 weeks. What has changed?", ["Supply no longer meets resting demand (chronic limb-threatening ischemia)", "He developed spinal stenosis", "His claudication improved", "He has a DVT"], 0, "Rest pain for more than 2 weeks = CLTI. Clarification (standard teaching): dependency adds gravity-assisted flow."),
      Q("bedside", "How does structured exercise therapy help claudication?", ["It improves walking distance and symptoms", "It dissolves plaque", "It raises the ABI to normal", "It is only for pseudoclaudication"], 0, "Structured exercise improves symptoms."),
      Q("chain", "Which drug improves walking distance in claudication?", ["Cilostazol", "Metoprolol", "Warfarin", "Nitroglycerin"], 0, "Cilostazol improves walking distance and claudication."),
      Q("traps", "A PAD patient asks why he needs a statin if his legs are the problem. What is the best answer?", ["PAD reflects systemic atherosclerosis and raises MI and stroke risk", "Statins open leg collaterals immediately", "Statins treat spinal stenosis", "Statins raise blood pressure in the legs"], 0, "Goal is to reduce MACE and limb events.")
    ]),

    D("vas1c-abi-logic", "The ABI compares ankle pressure to arm pressure", "Normal leg pressure is at least the arm pressure; a narrowing drops the ankle number, but stiff calcified arteries can't be squeezed and fake a high reading.", [
      S("idea", "The idea", "<p>ABI = <strong>ankle systolic ÷ brachial systolic</strong>. Normally ankle pressure is equal to or a little higher than the arm, so the ratio is <strong>1.0–1.4</strong>. A narrowing upstream drops pressure at the ankle → ratio <strong>≤ 0.90 = PAD</strong>.</p><p>The cuff works by squeezing the artery shut. In <strong>diabetes, CKD, and the elderly</strong>, arteries can be calcified and <strong>non-compressible</strong>, so the cuff must go very high to stop flow → falsely high ratio (<strong>&gt; 1.4</strong>). Toe arteries usually escape calcification, so a <strong>TBI</strong> is used instead.</p>" + clar("the diabetes/CKD link to calcified vessels is standard teaching; the slides say 'calcification/vessel hardening'.")),
      S("chain", "Cause → effect", chain([
        "Cuff at the ankle inflated until the Doppler signal disappears",
        "Upstream narrowing → lower ankle pressure → ABI ≤ 0.90",
        "Calcified wall resists the cuff → falsely high pressure → ABI > 1.4 (inconclusive)",
        "Inconclusive ABI → toe-brachial index",
        "Symptoms but normal/borderline ABI (0.91-1.40) → exercise treadmill testing unmasks the drop"
      ]) + Tbl(["ABI", "Meaning", "Next"], [
        ["&gt; 1.4", "Non-compressible arteries", "TBI; refer to vascular"],
        ["1.0–1.4", "Normal", "None"],
        ["0.91–0.99", "Borderline", "Exercise test if symptoms"],
        ["≤ 0.90", "PAD", "Risk factors, medical therapy, refer"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The ABI <strong>confirms</strong> PAD but does not alone decide severity or the need for revascularization. Imaging (duplex, CTA, MRA, angiography) is reserved for patients being considered for revascularization. In an obviously ischemic acute limb, an ABI is often not done because it wastes time.</p>" + HY("ABI is the physiologic diagnosis of PAD; imaging is for planning a procedure.")),
      S("traps", "Common traps", traps([
        "<strong>Reading ABI 1.6 as 'great circulation'.</strong> It means the cuff couldn't compress the vessel.",
        "<strong>Ruling out PAD with a normal resting ABI in a symptomatic patient.</strong> Get an exercise test.",
        "<strong>Delaying a cold, pulseless leg for an ABI.</strong> Treat the emergency."
      ]))
    ], [
      Q("idea", "Ankle systolic is 72 and brachial systolic is 120. What is the ABI and meaning?", ["0.6, PAD", "1.67, calcified vessels", "1.0, normal", "0.95, borderline"], 0, "72/120 = 0.6, which is at or below 0.90."),
      Q("chain", "A diabetic on dialysis has an ABI of 1.6. Why might this be misleading?", ["Calcified arteries resist cuff compression, falsely raising ankle pressure", "Dialysis raises arm pressure", "The leg has excellent flow", "The brachial cuff was too small"], 0, "ABI over 1.4 = non-compressible arteries."),
      Q("chain", "The ABI is greater than 1.4. What test comes next?", ["Toe-brachial index", "Repeat ABI next year", "D-dimer", "Venous duplex"], 0, "Inconclusive ABI: obtain TBI."),
      Q("bedside", "A patient has classic calf claudication but a resting ABI of 0.96. What next?", ["Exercise treadmill testing", "Reassure, PAD excluded", "Start warfarin", "CT angiography immediately"], 0, "Normal or borderline ABI with symptoms: exercise test."),
      Q("traps", "Why are toe pressures used when the ABI is falsely high?", ["Toe arteries are usually spared from calcification", "Toes have higher pressure", "Toes have no collaterals", "The ankle is too painful"], 0, "Clarification (standard teaching): digital vessels are usually compressible."),
      Q("idea", "Why does an upstream narrowing lower the ankle pressure?", ["Pressure is lost as blood is forced through the stenosis", "Narrowing raises arm pressure", "Veins steal blood", "Gravity lowers it"], 0, "Clarification (standard physiology): a stenosis drops downstream pressure."),
      Q("bedside", "When is advanced imaging (CTA, MRA, angiography) generally used in PAD?", ["When revascularization is being considered", "For every new claudication patient", "To calculate the ABI", "To exclude spinal stenosis"], 0, "Imaging is reserved for patients being considered for revascularization."),
      Q("traps", "What is the normal ABI range?", ["1.0 to 1.4", "0.5 to 0.9", "Above 1.4", "0.91 to 0.99"], 0, "Normal ankle pressure is at least the arm pressure.")
    ]),

    D("vas1c-collaterals", "Collaterals: why slow blockages are tolerated and sudden ones are not", "A slowly narrowing artery gives the body time to grow bypass vessels; an embolus into a previously healthy artery has none, so the limb turns ischemic within hours.", [
      S("idea", "The idea", "<p>Chronic PAD develops over years. As flow slows, small side vessels enlarge into <strong>collaterals</strong>, a natural bypass. That is why a patient can have a fully occluded iliac and only claudicate.</p><p>An <strong>embolus</strong> (AF, LV mural thrombus, valve thrombus, septic emboli) lodges suddenly in a vessel that was healthy, with <strong>no collaterals</strong>. The limb loses supply all at once → the <strong>6 Ps</strong>.</p>" + clar("emboli causing more severe ischemia than in-situ thrombosis of a chronic plaque is standard teaching.")),
      S("chain", "Cause → effect", chain([
        "Embolus (often from AF) lodges in a healthy artery",
        "No collaterals to bypass it",
        "Sudden loss of perfusion → Pain, Pallor, Pulseless, Poikilothermic (cold)",
        "Nerves and muscle then die → Paresthesias → Paralysis",
        "Immediate IV unfractionated heparin + vascular surgery (thrombolysis or embolectomy)"
      ]) + Tbl(["", "Chronic PAD", "Acute embolus"], [
        ["Onset", "Years", "Sudden"],
        ["Collaterals", "Present", "Absent"],
        ["Picture", "Claudication", "6 Ps, limb threat"],
        ["Clue in history", "Smoking, DM, HLD", "AF, recent MI, valve disease"]
      ])),
      S("bedside", "Why it matters clinically", "<p>A cold, pale, pulseless leg in a patient with AF is an embolus until proven otherwise. <strong>Paresthesias and paralysis</strong> mean nerve and muscle are dying, so time is tissue. Start <strong>heparin</strong> to stop propagation and call vascular surgery.</p>" + HY("Sensory and motor loss = the limb is threatened; act now.")),
      S("traps", "Common traps", traps([
        "<strong>Expecting the same tolerance from an acute occlusion as a chronic one.</strong> No collaterals = no backup.",
        "<strong>Waiting for paralysis.</strong> By then the muscle is dying.",
        "<strong>Forgetting the source.</strong> Look for AF or mural thrombus."
      ]))
    ], [
      Q("idea", "A man has a fully occluded iliac artery on imaging but only mild claudication. Why?", ["Collateral vessels developed over time and bypass the blockage", "The occlusion is not real", "The iliac artery does not supply the leg", "Claudication only occurs with partial blockages"], 0, "Collaterals are a natural bypass in chronic disease."),
      Q("chain", "A patient with untreated AF develops a sudden cold, pale, pulseless leg. Why is ischemia so severe?", ["An embolus blocked a healthy artery that had no collaterals", "Chronic plaque slowly grew", "Venous blood backed up", "Spinal stenosis compressed the artery"], 0, "No collaterals in a previously healthy vessel."),
      Q("chain", "In acute limb ischemia, which of the 6 Ps signals that nerve and muscle are being damaged?", ["Paresthesias and paralysis", "Pallor", "Pulselessness", "Poikilothermia"], 0, "Sensory and motor loss mean the limb is threatened."),
      Q("bedside", "What is the first drug started for acute limb ischemia?", ["IV unfractionated heparin", "Cilostazol", "Aspirin alone", "A beta blocker"], 0, "UFH, then surgical options."),
      Q("traps", "Should you obtain an ABI before treating an obviously ischemic, pulseless leg?", ["Often not; it is impractical in the acute setting", "Yes, always first", "Only if pulses are present", "Only for chronic PAD in the ED"], 0, "Not practical in acute scenarios."),
      Q("chain", "Which of these is NOT a usual embolic source for acute limb ischemia?", ["Varicose leg veins", "Left atrial thrombus from AF", "LV mural thrombus after MI", "Valvular vegetation"], 0, "Venous clots go to the lungs, not leg arteries (unless a shunt exists)."),
      Q("idea", "What happens to collaterals after a blocked iliac is stented open?", ["They are no longer seen because the main channel carries the flow", "They grow larger", "They become aneurysms", "They become the main supply"], 0, "On the slide, collaterals disappear after the blockage is opened.")
    ]),

    D("vas1c-aneurysm-wall", "Aneurysm: a weakening wall that grows faster as it gets wider", "Loss of elastin and collagen thins the wall; the wider it gets, the more stress the wall carries, so rupture risk climbs steeply with size and repair thresholds are set by diameter.", [
      S("idea", "The idea", "<p>An aneurysm is dilation to <strong>≥ 1.5×</strong> normal diameter (AAA ≥ 3 cm). The wall loses <strong>elastin and collagen</strong>, so it thins and its tensile strength falls.</p><p>A wider tube puts more stress on its wall at the same pressure, so a big aneurysm both <strong>grows faster</strong> and is <strong>more likely to rupture</strong>. Smoking speeds the expansion; hypertension pushes harder on the wall.</p>" + clar("wall tension rises with radius (Law of Laplace); this is standard physiology.")),
      S("chain", "Cause → effect", chain([
        "Smoking, age, HTN, family history, atherosclerosis weaken the wall (less elastin and collagen)",
        "Wall dilates",
        "Bigger radius → more wall stress → faster growth",
        "Rupture risk rises sharply (low at 3.0-4.9 cm, much higher ≥ 5.5 cm)",
        "Rupture → abdominal/back pain + hypotension (± syncope) → emergency"
      ]) + Tbl(["Size (men)", "Plan"], [
        ["3.0–3.9 cm", "US every 3 years"],
        ["4.0–4.9 cm", "US every 12 months"],
        ["≥ 5.5 cm (women ≥ 5.0)", "Repair (EVAR or open)"],
        ["Growth &gt; 1 cm/year or symptoms", "Repair regardless of size"]
      ])),
      S("bedside", "Why it matters clinically", "<p>For small AAA, slow the growth: <strong>stop smoking</strong> (strongest modifiable factor), control BP, statin, and avoid fluoroquinolones. Screen men and women 65 or older who have ever smoked. A pulsatile mass + hypotension + pain = rupture: resuscitate with blood and fluids and go to the OR.</p>" + HY("Women rupture at smaller sizes, so their repair threshold is lower (5.0 cm).")),
      S("traps", "Common traps", traps([
        "<strong>Following a fast-growing 4.8 cm AAA yearly.</strong> Growth &gt; 1 cm/year is a repair indication.",
        "<strong>Using the male threshold for women.</strong> Women repair at 5.0 cm.",
        "<strong>Ignoring the smoking history.</strong> It speeds expansion."
      ]))
    ], [
      Q("idea", "Why does a larger aneurysm grow faster and rupture more easily?", ["A wider vessel puts more stress on an already weak wall", "Larger aneurysms have more blood flow", "Large aneurysms are always infected", "Smaller ones have no wall"], 0, "Clarification (standard physiology): wall tension rises with radius."),
      Q("chain", "A man's AAA grew from 4.0 to 5.2 cm in one year. What is indicated?", ["Repair, because growth over 1 cm per year is an indication", "US in 3 years", "US in 12 months", "No action until 5.5 cm"], 0, "Rapid expansion over 1 cm/year is a repair indication."),
      Q("chain", "A 70-year-old woman has a 5.1 cm asymptomatic AAA. What is the plan?", ["Repair, since the threshold in women is 5.0 cm", "US in 12 months", "US in 3 years", "Repair only at 5.5 cm"], 0, "Women: repair at 5.0 cm or more."),
      Q("bedside", "What is the strongest modifiable risk factor for AAA growth?", ["Smoking", "Diabetes", "Low HDL", "Obesity"], 0, "Smoking is the strongest modifiable risk factor."),
      Q("bedside", "A man with a known AAA presents after syncope with abdominal pain and BP 85/50. What is happening and what is the treatment?", ["Rupture; resuscitate and emergent surgery", "Dissection; give esmolol", "Vasovagal syncope; reassure", "Renal colic; analgesia"], 0, "Ruptured AAA is a surgical emergency."),
      Q("idea", "What happens to the aortic wall at the tissue level in aneurysm formation?", ["Loss of elastin and collagen thins it and lowers tensile strength", "The wall thickens with muscle", "Calcium makes it stronger", "Inflammation always narrows it"], 0, "Decreased elastin and collagen thin the wall."),
      Q("traps", "A 3.4 cm AAA is found in a 66-year-old man. What is the follow-up?", ["Ultrasound every 3 years", "Repair now", "US every 6 months", "No follow-up"], 0, "3.0-3.9 cm: US every 3 years."),
      Q("traps", "Which antibiotic class should be avoided in patients with AAA if possible?", ["Fluoroquinolones", "Penicillins", "Cephalosporins", "Macrolides"], 0, "Avoid fluoroquinolones if able.")
    ]),

    D("vas1c-anti-impulse", "Dissection: lower the force of each beat before you dilate", "A tear lets blood split the aortic wall; every forceful ejection pushes the split further, so heart rate and contractility come down first, then blood pressure.", [
      S("idea", "The idea", "<p>In dissection, an <strong>intimal tear</strong> lets blood into the wall, creating a false lumen. What drives propagation is the <strong>force and speed</strong> of each LV ejection (shear stress), not just the BP number.</p><p>So the first move is <strong>anti-impulse therapy</strong>: IV <strong>esmolol or labetalol</strong> to bring HR to about 60–80. Only then, if SBP stays &gt; 120, add <strong>nitroprusside</strong> (or nicardipine). A vasodilator alone causes <strong>reflex tachycardia</strong>, which increases the force on the tear.</p>" + clar("the reflex tachycardia explanation is standard physiology; the slide says HR control is key.")),
      S("chain", "Cause → effect", chain([
        "Intimal tear → blood enters the media → false lumen",
        "Each forceful ejection extends the tear",
        "Beta blocker ↓ HR and contractility → ↓ shear stress",
        "Then vasodilator ↓ BP without reflex tachycardia",
        "Type A (ascending) → emergent surgery + medical therapy; Type B (descending) → medical therapy unless complicated"
      ]) + Tbl(["Where the dissection extends", "What you see"], [
        ["Back to the aortic valve", "Aortic regurgitation (diastolic murmur)"],
        ["Into the pericardium", "Hemopericardium → tamponade (hypotension, JVD)"],
        ["Across a branch artery", "Pulse deficit, stroke, organ ischemia"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Tearing chest or back pain between the scapulae, a pulse or BP difference between arms, or a widened mediastinum → think dissection. Type A gets surgery because extension back to the heart kills (AR, tamponade, coronary involvement). Calcium channel blockers (verapamil, diltiazem) are the fallback if beta blockers are contraindicated.</p>" + HY("Never give a vasodilator before a beta blocker in dissection.")),
      S("traps", "Common traps", traps([
        "<strong>Starting nitroprusside first.</strong> Reflex tachycardia worsens shear.",
        "<strong>Sending a Type A patient home on meds.</strong> Ascending = emergent surgery.",
        "<strong>Missing dissection in an 'MI' with new AR or hypotension and JVD.</strong>"
      ]))
    ], [
      Q("idea", "In aortic dissection, why is a beta blocker started before nitroprusside?", ["A vasodilator alone causes reflex tachycardia that increases shear stress on the tear", "Nitroprusside is not used in dissection", "Beta blockers dissolve the false lumen", "Beta blockers raise BP"], 0, "HR control is key; don't use a vasodilator first."),
      Q("chain", "After esmolol, HR is 65 but SBP is still 150. What next?", ["Add nitroprusside (or nicardipine)", "Stop esmolol", "Give IV fluids", "Give atropine"], 0, "If SBP stays above 120 after beta blockade, add nitroprusside."),
      Q("chain", "A dissection patient becomes hypotensive with distended neck veins. What happened?", ["Dissection into the pericardium causing tamponade", "Nitroprusside overdose only", "Aortic stenosis", "Septic shock"], 0, "Hypotension and JVD suggest hemopericardium and tamponade."),
      Q("chain", "A new diastolic murmur appears in a patient with Type A dissection. Why?", ["The dissection extended back to the aortic valve, causing regurgitation", "Mitral stenosis developed", "Pericarditis began", "The beta blocker caused it"], 0, "Retrograde dissection causes AR."),
      Q("bedside", "What is the treatment of an uncomplicated Stanford Type B dissection?", ["Medical anti-impulse therapy", "Emergent open repair", "Thrombolysis", "Observation without drugs"], 0, "Type B: medical therapy; repair if complicated."),
      Q("bedside", "What is the target heart rate in anti-impulse therapy?", ["About 60 to 80", "Below 40", "100 to 120", "No HR target"], 0, "Initial goal: HR 60-80."),
      Q("traps", "A dissection patient has severe asthma and can't take beta blockers. What is the alternative for rate control?", ["Diltiazem or verapamil", "Nitroprusside alone", "Hydralazine", "Atropine"], 0, "Non-DHP CCBs if beta blockers are contraindicated."),
      Q("chain", "Why can dissection cause a pulse difference between the arms?", ["The false lumen compromises a branch artery", "One arm has more muscle", "Atherosclerosis only on one side", "Venous congestion"], 0, "Pulse deficits occur in 15-20%.")
    ]),

    D("vas1c-gangrene-types", "Gangrene: dead vs infected vs toxin", "Dry gangrene is sterile death from no flow, wet gangrene is dead tissue that got infected, and gas gangrene is a toxin racing through muscle; urgency and antibiotics follow that.", [
      S("idea", "The idea", "<p>All gangrene is dead tissue. What changes the plan is <strong>whether bacteria are involved</strong>:</p><ul><li><strong>Dry:</strong> sterile ischemic necrosis from prolonged low flow (PAD, vasculitis, frostbite). Black, dry, clear demarcation. Not emergent; antibiotics not needed.</li><li><strong>Wet:</strong> ischemic tissue + bacterial infection → edema, moist, bullae, odor, can become septic. <strong>Surgical emergency.</strong></li><li><strong>Gas (clostridial myonecrosis):</strong> <em>C. perfringens</em> toxins destroy muscle fast. Pain and tachycardia out of proportion, crepitus, shock.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Severe ischemia → tissue death (dry, sterile, demarcated)",
        "Bacteria invade dead tissue → inflammation, edema, rapid spread (wet)",
        "Clostridial toxins → spreading muscle necrosis, gas, shock (gas gangrene)",
        "Treatment escalates: revascularize/debride → urgent source control → emergent debridement + antibiotics",
        "Clindamycin inhibits protein synthesis → less toxin made"
      ]) + Tbl(["", "Dry", "Wet", "Gas"], [
        ["Cause", "Ischemia", "Ischemia + infection", "Clostridial toxin"],
        ["Look", "Black, dry, demarcated", "Swollen, moist, bullae, odor", "Crepitus, bronze skin, shock"],
        ["Urgency", "Not emergent", "Emergency", "Emergency"],
        ["Antibiotics", "Only if infected", "Yes", "Vanc + Zosyn + clindamycin; then PCN G + clinda"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Revascularization helps the living tissue around dry gangrene, but <strong>does not restore what is dead</strong>. Suspect gas gangrene after recent surgery or trauma with <strong>low-grade fever, tachycardia out of proportion to fever, and pain out of proportion to exam</strong>.</p>" + HY("Clindamycin may improve survival in gas gangrene by inhibiting toxin production.")),
      S("traps", "Common traps", traps([
        "<strong>Antibiotics for every black toe.</strong> Dry gangrene doesn't need them unless infected.",
        "<strong>Treating wet gangrene as routine.</strong> It needs urgent source control.",
        "<strong>Using a cell-wall drug alone for gas gangrene.</strong> Add clindamycin to stop toxin production."
      ]))
    ], [
      Q("idea", "A PAD patient has a black, dry, sharply demarcated toe without drainage or fever. Are antibiotics indicated?", ["No, dry gangrene is sterile unless infection is superimposed", "Yes, always", "Yes, clindamycin for toxins", "Only vancomycin"], 0, "ABX not indicated in dry gangrene unless infection is present."),
      Q("chain", "A diabetic's ischemic foot becomes swollen, moist, foul-smelling with bullae. What changed and how urgent is it?", ["It became infected (wet gangrene), a surgical emergency", "It became dry gangrene, not urgent", "It healed", "It developed a DVT"], 0, "Wet gangrene needs urgent source control."),
      Q("chain", "Why is clindamycin added in gas gangrene?", ["It inhibits protein synthesis and suppresses clostridial toxin production", "It covers Pseudomonas", "It dilates arteries", "It is the only drug that kills Clostridium"], 0, "Clindamycin suppresses toxin production."),
      Q("bedside", "Two days after surgery, a patient has pain out of proportion to exam, tachycardia out of proportion to a low-grade fever, and crepitus. What should you suspect?", ["Gas gangrene (clostridial myonecrosis)", "Dry gangrene", "DVT", "Normal postoperative pain"], 0, "Classic clinical pearl for clostridial infection."),
      Q("traps", "Will revascularization bring a dry gangrenous toe back to life?", ["No, it helps living tissue but does not restore dead tissue", "Yes, if done within 6 weeks", "Yes, always", "Only with antibiotics"], 0, "Revascularization does not restore what is dead."),
      Q("bedside", "What is the initial empiric regimen for suspected gas gangrene?", ["Vancomycin + Zosyn + clindamycin", "Amoxicillin alone", "Ceftriaxone alone", "No antibiotics, surgery only"], 0, "Empiric vanc + Zosyn + clinda; then pen G + clinda once confirmed."),
      Q("idea", "What is the basic difference between dry and wet gangrene?", ["Wet gangrene has superimposed bacterial infection", "Dry gangrene is always infected", "Wet gangrene has no ischemia", "They differ only in color"], 0, "Dry = sterile ischemic necrosis; wet = infected."),
      Q("chain", "What happens to dry gangrene left in place without surgery?", ["Autoamputation along the demarcation line", "It becomes healthy tissue", "It always turns into gas gangrene", "It spreads up the leg within hours"], 0, "Autoamputation will eventually occur.")
    ]),

    D("vas1c-small-vs-large", "Spasm, smoking inflammation, or large-vessel arteritis", "Raynaud's is reversible spasm of digital arteries, Buerger's is smoking-driven inflammation that occludes small and medium vessels, and Takayasu's narrows the aorta and its big branches; the treatment follows the mechanism.", [
      S("idea", "The idea", "<p>Three non-atherosclerotic causes of a cold or ischemic limb, sorted by mechanism:</p><ul><li><strong>Raynaud's:</strong> exaggerated <strong>vasospasm</strong> of digital arteries to cold or stress. Reversible, exam normal between episodes. Fix: avoid triggers, <strong>CCB</strong> to vasodilate.</li><li><strong>Buerger's (thromboangiitis obliterans):</strong> <strong>inflammation + clot</strong> in small/medium arteries and veins of young heavy smokers. Fix: <strong>stop smoking</strong>, the only thing that halts it.</li><li><strong>Takayasu's:</strong> granulomatous inflammation of the <strong>aorta and major branches</strong> in young women → stenosis → absent pulses, arm BP difference. Fix: <strong>steroids</strong>.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Raynaud's: cold → digital spasm → WHITE (pallor) → BLUE (cyanosis) → RED (reactive hyperemia)",
        "Buerger's: tobacco → endothelial injury, immune response → thrombosis → segmental occlusion → corkscrew collaterals → ulcers, gangrene",
        "Takayasu's: inflammation → fibrosis → stenosis of subclavian, carotid, renal → pulse loss, BP difference, bruits, renovascular HTN",
        "Treat the driver: CCB / quit smoking / corticosteroids"
      ]) + Tbl(["", "Raynaud's", "Buerger's", "Takayasu's"], [
        ["Who", "Primary: women 15–30", "Young male heavy smokers (&lt; 45–50)", "Young women (&lt; 40), Asian"],
        ["Vessel", "Digital (small)", "Small-medium arteries + veins", "Aorta + major branches"],
        ["Mechanism", "Spasm", "Inflammation + thrombosis", "Granulomatous inflammation"],
        ["Key fix", "Avoid cold, CCB", "Stop smoking", "Steroids"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Secondary Raynaud's (age &gt; 30, more severe, finger edema, autoantibodies) points to scleroderma/CREST, lupus, RA, or Buerger's, and can cause ulcers. A young smoker with digital ulcers and a positive Allen test suggests Buerger's; a normal ABI does not exclude it because disease is segmental and distal.</p>" + HY("Buerger's: smoking cessation is the only way to halt progression.")),
      S("traps", "Common traps", traps([
        "<strong>Calling Buerger's atherosclerosis.</strong> It is non-atherosclerotic inflammation.",
        "<strong>Trusting a normal ABI in Buerger's.</strong> Disease is distal and segmental.",
        "<strong>Missing Takayasu's in a young woman with arm claudication and unequal arm BPs.</strong>"
      ]))
    ], [
      Q("chain", "A woman's fingers turn white, then blue, then red after holding a cold drink. What causes each phase?", ["Spasm (white), deoxygenated blood (blue), reactive hyperemia (red)", "Clot, infection, healing", "Inflammation, fibrosis, repair", "Low BP, high BP, normal BP"], 0, "Pallor, cyanosis, reactive hyperemia."),
      Q("idea", "Why do calcium channel blockers help Raynaud's?", ["They vasodilate the spasming digital arteries", "They stop smoking cravings", "They reduce inflammation", "They dissolve clots"], 0, "CCBs cause vasodilation."),
      Q("bedside", "A 34-year-old heavy smoker has painful finger ulcers and a positive Allen test; CTA shows corkscrew collaterals. What is the single most important treatment?", ["Complete smoking cessation", "Statin", "Warfarin", "Steroids"], 0, "Smoking cessation is the only way to halt Buerger's."),
      Q("chain", "A 28-year-old woman has arm claudication, a 30 mmHg BP difference between arms, a carotid bruit, and high ESR. What is happening in her vessels?", ["Inflammation is narrowing the aorta and its major branches (Takayasu's)", "Digital artery spasm", "Atherosclerotic plaque in the legs", "Venous thrombosis"], 0, "Large-vessel vasculitis causes pulse and BP discrepancies."),
      Q("traps", "A young smoker with toe ischemia has a normal ABI. Does that exclude Buerger's?", ["No, the disease is segmental and distal, so toe indices may be abnormal", "Yes, a normal ABI excludes it", "Yes, Buerger's only affects arms", "Only if pulses are normal"], 0, "Normal ABI does not exclude Buerger's."),
      Q("traps", "What distinguishes secondary from primary Raynaud's?", ["Onset over 30, more severe, and possible autoantibodies or finger edema", "Onset at 15 to 30 and mild", "Only men are affected", "Normal exam between attacks only in secondary"], 0, "Secondary Raynaud's is older-onset, more severe, with associated disease."),
      Q("bedside", "Why can Takayasu's arteritis cause hypertension?", ["Renal artery stenosis or aortic coarctation from the inflammation", "Raynaud-type spasm", "Smoking", "Steroid therapy only"], 0, "HTN in up to half from renal artery stenosis or coarctation."),
      Q("idea", "What is the first-line treatment for Takayasu's arteritis?", ["Corticosteroids", "Calcium channel blockers", "Smoking cessation", "Cilostazol"], 0, "Steroids treat the inflammation.")
    ])
  ]);
})();
