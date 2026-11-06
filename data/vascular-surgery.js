/* Cardio Part 2, Vascular Surgery (Gardner, 50 slides; Anna uploaded it as "Vascular PP 2026SV"). The deck has no official
   objectives in objectives.txt, so sections follow the deck's own outline (slide 3): vascular surgery in general
   (when to operate, options, complications, follow-up), carotid disease (anatomy and presentation, treatment, complications),
   and amputations (indications and levels, complications).
   Read from slide pictures: slide 9 (fem-pop bypass with vein vs synthetic graft), 19 (aortic arch and circle of Willis),
   20 (carotid branches), 28 (vulnerable plaque), 29 (ulcerated and fissured carotid plaque), 30 (CEA steps), 31 (angiogram),
   32 (stent with balloon angioplasty), 39 (neck nerves), 43 (amputation level names), 44 to 45 (below-knee amputation).
   Speaker note slip: slide 38 says hypoglossal injury deviates the tongue to the CONTRALATERAL side; standard neuroanatomy
   says toward the injured side. The card flags it and no question tests the direction.
   Vascular Disease Part 1 already covers PAD, ABI, gangrene and acute limb ischemia in depth; this lecture keeps the
   surgical angle and points back to Part 1 instead of repeating it. */
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
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }

  window.VASCULAR_SURGERY_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-vascular-patients-when-to-operate", "1. Vascular patients and when to call a surgeon", "Slides 3 to 7: why vascular patients differ, when to call a surgeon, how surgeons decide, inflow and outflow.", [
      C("Vascular patients: the disease is everywhere",
        tbl(["Where the plaque narrows the artery", "Name"], [
          ["Heart", "<strong>Coronary artery disease</strong> (CAD)"],
          ["Legs and the rest of the body", "<strong>Peripheral arterial (vascular) disease</strong> (PAD or PVD)"],
          ["Neck", "<strong>Carotid artery stenosis</strong> (CAS)"]]) +
        "<p>It is the same atherosclerosis in different beds. The lecturer's point: <strong>the disease is diffuse</strong>. If it is in one artery, it is in others.</p>" +
        hy("Treating PAD? Be aware of <strong>CAD</strong> and possible <strong>carotid stenosis</strong> too. That is why vascular patients differ from \"regular\" patients: every operation is on a patient who likely has heart and brain disease as well."),
        ["vs-diffuse-disease", "vs-cad-pad-cas"],
        [q("What is the narrowing called when it happens in the neck arteries?", "Carotid artery stenosis", ["Coronary artery disease", "Peripheral arterial disease", "Venous insufficiency"], "CAS: the same atherosclerosis in the carotids."),
          q("PAD and CAD are the same disease process in different arteries. What is that process?", "Atherosclerosis (plaque narrowing the artery)", ["Vasculitis", "Venous reflux", "Arterial dissection"], "Plaque narrows coronary, peripheral and carotid arteries alike."),
          q("Why do vascular patients differ from regular surgical patients?", "Their atherosclerosis is diffuse, so they usually also have CAD and carotid disease", ["They are always young", "They never have diabetes", "Their disease is limited to one artery"], "If it is in one artery, it will be in others."),
          q("A patient is being treated for PAD. Which two other conditions should you be aware of?", "CAD and carotid artery stenosis", ["Venous insufficiency and varicose veins", "Raynaud and Buerger disease", "Lymphedema and cellulitis"], "Speaker notes: if treating PAD, be aware of CAD and possible CAS."),
          q("What is the narrowing called when it happens in the coronary arteries?", "Coronary artery disease", ["Carotid artery stenosis", "Peripheral arterial disease", "Aortic dissection"], "CAD."),
          q("PVD and PAD are used for narrowing in which arteries?", "The arteries of the body outside the heart, such as the legs", ["Only the coronary arteries", "Only the veins", "Only the carotids"], "Peripheral vascular or arterial disease.")],
        [q("A 68-year-old smoker with claudication is scheduled for a leg bypass. Which preoperative concern does the lecture stress most?", "He likely has coronary and carotid disease too", ["He likely has venous insufficiency", "He likely has a vasculitis", "His disease is probably limited to one leg artery"], "Diffuse atherosclerosis: look for CAD and CAS in PAD patients."),
          q("A patient with known carotid stenosis asks why the vascular team also ordered a cardiac stress evaluation before surgery. Best explanation?", "Plaque in one artery means plaque is likely in the coronaries too", ["Carotid surgery always needs a pacemaker", "Stress tests diagnose carotid stenosis", "It is only required by insurance"], "The disease is diffuse.")]),
      C("When do you call a surgeon?",
        tbl(["Trigger", "Examples"], [
          ["<strong>Acute changes</strong>", "<strong>Ischemic</strong> changes (acute limb ischemia: see Vascular Disease Part 1)"],
          ["<strong>Chronic: failed medical therapy</strong>", "<strong>Rest pain</strong>; <strong>ulceration or gangrene</strong>"]]) +
        hy("Call a surgeon for <strong>acute ischemia</strong> or <strong>chronic disease that failed medical therapy</strong> (rest pain, ulcers, gangrene).") +
        note("Claudication alone is first treated medically (exercise, risk factors, antiplatelet, cilostazol) as taught in Vascular Disease Part 1."),
        ["vs-call-acute", "vs-call-chronic"],
        [q("Which acute change is a reason to call a vascular surgeon?", "Ischemic changes in a limb", ["New varicose veins", "Mild ankle swelling", "A single reading of high blood pressure"], "Acute ischemic changes."),
          q("Which chronic finding means PAD has failed medical therapy and needs a surgeon?", "Rest pain", ["Claudication that improves with walking program", "A normal ABI", "Cool feet in winter only"], "Rest pain, ulceration or gangrene."),
          q("Besides rest pain, which chronic finding should prompt a surgical referral?", "Ulceration or gangrene", ["Hair loss alone", "Leg cramps at night with normal pulses", "Spider veins"], "Ulceration and gangrene."),
          q("What are the two broad reasons to call a vascular surgeon?", "Acute ischemic changes, or chronic disease that failed medical therapy", ["Any bruit, or any varicose vein", "Age over 50, or smoking", "High cholesterol, or diabetes"], "Acute vs chronic failed medical therapy.")],
        [q("A 72-year-old with PAD on aspirin, a statin and cilostazol now has foot pain at night that wakes her and improves when she hangs the foot off the bed. Next step?", "Refer to a vascular surgeon: rest pain means failed medical therapy", ["Increase the walking program only", "Start compression stockings", "Reassure and recheck in a year"], "Rest pain is a chronic indication for surgery."),
          q("A diabetic with PAD has a nonhealing toe ulcer despite 3 months of good medical care. What does the lecture advise?", "Call a surgeon: ulceration is failed medical therapy", ["Continue the same care indefinitely", "Start compression wraps", "Order a venous duplex only"], "Ulceration or gangrene.")]),
      C("How surgeons decide, and inflow vs outflow",
        "<p>The decision to operate weighs <strong>risks against benefits</strong>:</p><ol><li>Is the patient a <strong>good surgical candidate</strong> (likely to survive the surgery)?</li><li>Is there a <strong>realistic chance surgery will benefit</strong> the patient?</li><li>Are there any <strong>non-operative treatments</strong>?</li><li>What is the <strong>best operation to maximize function and quality of life</strong>?</li></ol>" +
        "<p>Vascular surgical treatment is <strong>all about hemodynamics</strong>: <strong>inflow</strong> and <strong>outflow</strong>.</p>" +
        chain(["<strong>Inflow</strong>: the arteries bringing blood TO the repaired or bypassed segment (for a leg, the aorta, iliac and common femoral)", "The repair or bypass itself", "<strong>Outflow</strong> (runoff): the arteries carrying blood AWAY beyond the repair (popliteal, tibial, pedal)"]) +
        note("Definitions of inflow and outflow are standard teaching; the slide only names them. A bypass needs good inflow AND open outflow, or it clots."),
        ["vs-decision-questions", "vs-inflow-outflow"],
        [q("What is the first question in deciding whether to operate?", "Is the patient a good surgical candidate, likely to survive the surgery?", ["Does the patient have insurance?", "Is the hospital busy?", "Is the surgery quick?"], "Good candidate, benefit, non-operative options, best operation."),
          q("Which question is part of the surgeon's decision to operate?", "Are there any other non-operative treatments?", ["Is the patient over 80?", "Is the plaque calcified?", "Has the patient had a CT scan?"], "Non-operative alternatives."),
          q("What is the goal when choosing the operation?", "Maximize function and quality of life", ["Use the newest device", "Use the shortest incision possible", "Avoid general anesthesia at all cost"], "Best operation to maximize function and QOL."),
          q("According to the lecture, vascular surgical treatment is all about what?", "Hemodynamics: inflow and outflow", ["Removing every plaque in the body", "Lowering cholesterol", "Treating veins"], "Inflow and outflow."),
          q("What does inflow mean in vascular surgery?", "The arteries bringing blood to the repaired segment", ["The veins draining the leg", "The arteries beyond the repair", "The lymph flow from the limb"], "Inflow = blood coming in (standard teaching)."),
          q("What does outflow (runoff) mean?", "The arteries carrying blood beyond the repaired segment", ["The arteries feeding the repair", "The venous return to the heart", "Blood lost during surgery"], "Outflow = runoff past the repair (standard teaching)."),
          q("A surgeon decides on risks and benefits. Which is NOT one of the lecture's questions?", "Is the plaque visible on plain X-ray?", ["Is there a realistic chance surgery will benefit the patient?", "Is the patient a good surgical candidate?", "Are there non-operative treatments?"], "The four questions are candidacy, benefit, alternatives, best operation.")],
        [q("A 90-year-old with severe heart failure and a gangrenous toe is unlikely to survive general anesthesia. Which decision question argues against bypass?", "Is the patient a good surgical candidate?", ["What graft is best?", "Is there enough outflow?", "Is the wound clean?"], "Candidacy: likely to survive the surgery."),
          q("A planned femoral to tibial bypass has a widely open tibial artery to sew to, but the iliac artery above is 90% blocked. What is the problem?", "Poor inflow: the bypass will not get enough blood", ["Poor outflow", "Too much runoff", "No problem: only outflow matters"], "A bypass needs inflow and outflow.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-surgical-options-grafts", "2. Surgical treatment options and bypass grafts", "Slides 8, 9, 30 and 32: angioplasty, stents, endarterectomy, bypass grafts, and why bypass lasts longer.", [
      C("Angioplasty, stents and endarterectomy",
        tbl(["Option", "What it does"], [
          ["<strong>Angioplasty</strong>", "A balloon is inflated inside the narrowed artery to push the plaque open (percutaneous)"],
          ["<strong>Stent</strong>", "A mesh tube on a balloon is inflated to expand, then the balloon is removed and the stent stays to hold the artery open (slide 32)"],
          ["<strong>Endarterectomy</strong>", "The artery is opened and the <strong>plaque is removed</strong>, restoring normal flow; the classic example is <strong>carotid endarterectomy (CEA)</strong>: the common and internal carotid are opened, the plaque is peeled out, and the artery is closed (slide 30)"],
          ["<strong>Bypass graft</strong>", "A conduit carries blood around the blocked segment (next card)"]]) +
        mn("<strong>A-S-E-B</strong>: <strong>A</strong>ngioplasty, <strong>S</strong>tent, <strong>E</strong>ndarterectomy, <strong>B</strong>ypass, from least to most invasive."),
        ["vs-angioplasty", "vs-stent", "vs-endarterectomy"],
        [q("Which procedure removes plaque directly from the opened artery?", "Endarterectomy", ["Angioplasty", "Stenting", "Bypass"], "Endarterectomy: open the artery, remove the plaque."),
          q("What does a stent add to balloon angioplasty?", "A mesh tube that stays in the artery to hold it open", ["Removal of the plaque", "A new vein around the blockage", "Clot-dissolving medicine only"], "The balloon expands the stent, then is removed; the stent stays."),
          q("In stent placement, what happens after the balloon expands the stent?", "The balloon is removed and the stent stays", ["The stent is removed with the balloon", "The artery is cut open", "A vein graft is sewn in"], "Slide 32 steps."),
          q("Which artery is the classic site for endarterectomy in this lecture?", "The carotid artery", ["The coronary artery", "The renal vein", "The pulmonary artery"], "CEA."),
          q("During carotid endarterectomy, which arteries are opened?", "The common and internal carotid arteries", ["The external carotid only", "The vertebral artery", "The jugular vein"], "Slide 30: common and internal carotid opened, plaque removed."),
          q("Which four surgical treatment options are listed?", "Angioplasty, stents, endarterectomy, bypass grafts", ["Compression, elevation, ablation, sclerotherapy", "Thrombolysis, IVC filter, heparin, warfarin", "Amputation, debridement, grafting, casting"], "Slide 8.")],
        [q("A patient's internal carotid plaque is removed through a neck incision, and the artery is sewn closed. Which procedure was done?", "Carotid endarterectomy", ["Carotid stent", "Carotid bypass", "Balloon angioplasty alone"], "Plaque removal = endarterectomy."),
          q("A short iliac stenosis is opened with a balloon, and a metal mesh tube is left behind. Which procedure?", "Angioplasty with stent", ["Endarterectomy", "Bypass graft", "Embolectomy"], "Stent with balloon angioplasty.")]),
      C("Bypass grafts: which conduit",
        tbl(["Graft type", "Examples", "Notes"], [
          ["<strong>Autologous vein</strong>", "The patient's own vein", "<strong>BEST</strong>"],
          ["<strong>Synthetic</strong>", "<strong>PTFE</strong>, <strong>Dacron</strong>", "Used when no good vein"],
          ["<strong>Cadaver</strong>", "Donor vessel", "Another alternative"]]) +
        "<p>Slide 9 shows two leg bypasses around a blocked <strong>superficial femoral artery</strong>: a <strong>vein bypass</strong> and a <strong>synthetic bypass</strong>, both from the <strong>common femoral</strong> down to the <strong>popliteal</strong>.</p>" +
        hy("<strong>Bypass is better for long-term management than percutaneous stenting</strong> (speaker notes). <strong>Autologous vein is the best conduit.</strong>") +
        note("The great saphenous vein is the usual autologous conduit (standard teaching)."),
        ["vs-graft-autologous", "vs-graft-synthetic", "vs-bypass-vs-stent"],
        [q("What is the best bypass graft material?", "The patient's own (autologous) vein", ["PTFE", "Dacron", "Cadaver graft"], "Autologous vein graft is BEST."),
          q("Which two synthetic graft materials are named?", "PTFE and Dacron", ["Silk and nylon", "Titanium and steel", "Collagen and gelatin"], "Synthetic: PTFE, Dacron."),
          q("Which is better for long-term management: bypass or percutaneous stenting?", "Bypass", ["Percutaneous stenting", "They are identical", "Neither is ever used"], "Speaker notes: bypass better long term."),
          q("Which graft option uses a donor vessel?", "Cadaver graft", ["Autologous vein", "PTFE", "Dacron"], "Cadaver graft."),
          q("Which vein is usually harvested for an autologous leg bypass?", "The great saphenous vein", ["The internal jugular vein", "The femoral vein always", "The portal vein"], "Standard teaching."),
          q("In the slide 9 leg drawing, which artery is blocked and bypassed?", "The superficial femoral artery", ["The common iliac artery", "The anterior tibial artery", "The profunda femoris"], "Common femoral to popliteal bypass around a blocked SFA."),
          q("What does PTFE stand for in vascular grafts?", "A synthetic graft material (polytetrafluoroethylene)", ["A type of autologous vein", "A clot-busting drug", "A stent design"], "PTFE is synthetic.")],
        [q("A 64-year-old needs a femoral to popliteal bypass and has a healthy great saphenous vein. Which conduit is best?", "His own saphenous vein", ["Dacron", "PTFE", "Cadaver artery"], "Autologous vein is best."),
          q("A patient whose leg veins were all used in a prior CABG needs a leg bypass. Which conduit is reasonable?", "A synthetic graft such as PTFE", ["No bypass is possible", "The internal jugular vein", "Only a stent is ever possible"], "Synthetic or cadaver grafts when no vein."),
          q("A 58-year-old fit patient with long-segment SFA occlusion asks which approach lasts longest. Best answer?", "Bypass surgery, which is better long term than stenting", ["Stenting, which always lasts longer", "Angioplasty alone", "Medical therapy alone always works"], "Bypass better for long-term management.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-complications-follow-up", "3. Surgical complications and follow-up", "Slides 10 to 17: the three sources of complications, how to diagnose and treat them, PAD follow-up, and why surgery is temporizing.", [
      C("Three sources of surgical complications",
        tbl(["Source", "Complications"], [
          ["<strong>The wound</strong>", "Bleeding or hematoma; infection; ischemia and wound breakdown leading to <strong>hernia</strong>"],
          ["<strong>Anesthesia and trauma of surgery</strong>", "<strong>MI</strong>, <strong>stroke</strong>, <strong>renal failure</strong>, liver failure, pulmonary failure, <strong>ischemic bowel</strong>"],
          ["<strong>The vascular surgery itself</strong>", "Bleeding or hematoma; <strong>pseudoaneurysm</strong>; emboli, thrombus, stenosis or occlusion; <strong>limb ischemia</strong>"]]) +
        mn("<strong>W-A-S</strong>: <strong>W</strong>ound, <strong>A</strong>nesthesia/trauma, <strong>S</strong>urgery itself. The same three buckets come back for carotid surgery and amputations."),
        ["vs-comp-wound", "vs-comp-anesthesia", "vs-comp-surgery"],
        [q("What are the three sources of surgical complications in this lecture?", "The wound, anesthesia and trauma of surgery, and the surgery itself", ["Drugs, devices and diet", "Infection, bleeding and pain", "Nurses, doctors and equipment"], "Wound, anesthesia/trauma, the surgery itself."),
          q("Which complication comes from the wound?", "Infection", ["MI", "Renal failure", "Pseudoaneurysm"], "Wound: bleeding, infection, ischemia and breakdown."),
          q("Wound ischemia and breakdown can lead to what?", "Hernia", ["Pseudoaneurysm", "Stroke", "Ischemic bowel"], "Ischemia, wound breakdown, hernia."),
          q("Which complication is caused by anesthesia and the trauma of surgery?", "Myocardial infarction", ["Pseudoaneurysm", "Graft occlusion", "Wound infection"], "MI, stroke, renal, liver and pulmonary failure, ischemic bowel."),
          q("Which organ problem is listed under anesthesia and trauma complications?", "Ischemic bowel", ["Hernia", "Pseudoaneurysm", "Hematoma"], "Ischemic bowel."),
          q("Which complication is specific to vascular surgery itself?", "Pseudoaneurysm", ["Pulmonary failure", "Liver failure", "Hernia"], "Bleeding, pseudoaneurysm, emboli/thrombus/stenosis/occlusion, limb ischemia."),
          q("Which list is entirely vascular-surgery complications?", "Pseudoaneurysm, emboli, graft occlusion, limb ischemia", ["MI, stroke, renal failure, liver failure", "Infection, hernia, wound breakdown, scarring", "Pneumonia, DVT, UTI, delirium"], "Slide 13."),
          q("Which complication appears in both the wound list and the vascular-surgery list?", "Bleeding or hematoma", ["Stroke", "Hernia", "Renal failure"], "Bleeding/hematoma appears in both.")],
        [q("Two days after an aortobifemoral bypass, a patient has bloody diarrhea and abdominal pain out of proportion to the exam. Which listed complication fits?", "Ischemic bowel", ["Pseudoaneurysm", "Wound hernia", "Hematoma"], "Ischemic bowel is on the anesthesia/trauma list."),
          q("Weeks after a groin incision broke down from poor blood supply, a bulge appears when the patient coughs. Which complication chain fits?", "Wound ischemia and breakdown leading to hernia", ["Pseudoaneurysm", "Graft infection only", "Deep vein thrombosis"], "Ischemia/wound breakdown leads to hernia.")]),
      C("Recognize and treat the vascular complications",
        tbl(["Complication", "How you diagnose it", "What to do"], [
          ["<strong>Bleeding or hematoma</strong>", "When significant, usually obvious: a <strong>mass or visible blood</strong>; also <strong>hypotension and tachycardia</strong>", "If in the <strong>PACU</strong>, probably needs a <strong>rapid return to the OR</strong>"],
          ["<strong>Pseudoaneurysm</strong>", "<strong>Pulsatile mass</strong>", "Typically needs <strong>repair</strong>"],
          ["<strong>Thrombus, stenosis, occlusion</strong>", "<strong>Loss of pulses</strong> and ischemic changes", "Typically needs to be <strong>dilated or redone</strong>"],
          ["<strong>Limb ischemia</strong>", "Loss of pulses, acute or chronic ischemic changes (<strong>pain, pallor</strong>, etc.)", "Typically needs an <strong>intervention</strong>"],
          ["<strong>Emboli</strong>", "Loss of pulses, ischemic changes", "<strong>Embolectomy</strong>, and ask <strong>where did it originate?</strong>"]]) +
        hy("Pulsatile mass = <strong>pseudoaneurysm</strong>. Mass + hypotension + tachycardia in PACU = <strong>bleeding, back to the OR</strong>. Lost pulses = thrombus, occlusion or embolus."),
        ["vs-dx-bleeding", "vs-dx-pseudoaneurysm", "vs-dx-occlusion", "vs-tx-emboli"],
        [q("How does a significant postoperative bleed usually present?", "An obvious mass or visible blood, with hypotension and tachycardia", ["A pulsatile mass with normal vitals only", "Fever on day 5", "A slowly growing bulge with coughing"], "Slide 14."),
          q("How does a pseudoaneurysm present?", "As a pulsatile mass", ["As a cold, pulseless limb", "As a red, hot, swollen wound", "As a hernia"], "Pulsatile mass."),
          q("How is a pseudoaneurysm usually treated?", "It typically needs repair", ["Observation only", "Antibiotics only", "Compression stockings"], "Slide 15."),
          q("How do thrombus, stenosis or occlusion after vascular surgery present?", "Loss of pulses and ischemic changes such as pain and pallor", ["Pulsatile mass", "Fever and purulent drainage", "Hypertension and bradycardia"], "Slide 14."),
          q("What is the usual treatment of a thrombosed or stenosed repair?", "It typically needs to be dilated or redone", ["Observation", "Antibiotics", "Compression"], "Slide 15."),
          q("A significant hematoma is found in the PACU. What is the usual management?", "Rapid return to the OR", ["Ice and observe for a week", "Start warfarin", "Discharge home"], "In PACU, probably needs rapid return to OR."),
          q("Besides embolectomy, what question must be answered for a postoperative embolus?", "Where did it originate?", ["Is the patient allergic to iodine?", "What is the patient's blood type?", "Is the wound infected?"], "Embolectomy and find the source."),
          q("Which vital sign pattern suggests significant postoperative bleeding?", "Hypotension and tachycardia", ["Hypertension and bradycardia", "Fever and bradycardia", "Normal vitals with hypoxia"], "Hypovolemia."),
          q("How is postoperative limb ischemia usually managed?", "It typically needs an intervention", ["Observation", "Leg elevation", "Compression stockings"], "Slide 15.")],
        [q("Three weeks after a femoral artery catheterization and bypass, a patient has a pulsatile groin mass with a bruit. Most likely diagnosis?", "Pseudoaneurysm", ["Hematoma that needs ice only", "Lymphocele", "Inguinal hernia"], "Pulsatile mass = pseudoaneurysm; typically needs repair."),
          q("In the PACU after a fem-pop bypass, the thigh is swelling, BP is 84/50 and HR 124. Next step?", "Rapid return to the operating room", ["Recheck in the morning", "Start compression stockings", "Begin oral antibiotics"], "Significant bleeding in PACU: back to OR."),
          q("The day after a fem-pop bypass, the foot is pale and painful and the pedal pulse that was present after surgery is gone. Most likely problem?", "Graft thrombosis or occlusion causing limb ischemia", ["Wound infection", "Pseudoaneurysm", "Venous insufficiency"], "Loss of pulses with ischemic changes; needs intervention."),
          q("After an embolectomy for a postoperative embolus to the leg, what else must the team do?", "Find where the embolus came from", ["Nothing further", "Amputate prophylactically", "Start compression"], "Embolectomy and where did it originate.")]),
      C("Follow-up after PAD surgery: it buys time",
        "<p>After peripheral vascular surgery:</p><ul><li><strong>Watch for return of symptoms</strong></li><li><strong>ABI at rest and after exercise</strong></li><li><strong>Duplex ultrasound every 3 months</strong>: intervention based on a duplex surveillance protocol gives <strong>significantly higher 5-year patency</strong></li><li><strong>Oral anticoagulants and/or antiplatelet therapy long term</strong></li></ul>" +
        hy("Peripheral vascular surgery is a <strong>temporizing measure</strong>. If the patient does not change their lifestyle, the bypass, angioplasty or stent will ultimately fail. It just buys them time."),
        ["vs-followup-duplex", "vs-followup-abi", "vs-temporizing"],
        [q("How often is duplex ultrasound surveillance done after peripheral bypass?", "Every 3 months", ["Every 5 years", "Only if symptoms return", "Once, at discharge"], "Regular duplex every 3 months."),
          q("What does a duplex surveillance protocol improve?", "5-year patency rates", ["Wound healing in the first week", "Anesthesia safety", "Cholesterol levels"], "Significantly higher 5-year patency."),
          q("When is the ABI measured in follow-up after PAD surgery?", "At rest and after exercise", ["Only at rest", "Only under anesthesia", "Never after surgery"], "ABI at rest and after exercise."),
          q("Which long-term medicines follow peripheral vascular surgery?", "Oral anticoagulants and/or antiplatelet therapy", ["Antibiotics for life", "Steroids", "Diuretics only"], "Long-term anticoagulant and/or antiplatelet."),
          q("What does the lecture call peripheral vascular surgery?", "A temporizing measure", ["A cure", "A cosmetic procedure", "A last resort only after amputation"], "It buys time."),
          q("What happens to a bypass or stent if the patient does not change their lifestyle?", "It will ultimately fail", ["It lasts forever", "It dissolves safely", "It becomes stronger"], "Without lifestyle change, it fails."),
          q("What is the first follow-up item after PAD surgery?", "Watch for return of symptoms", ["Repeat the surgery in a year", "Stop all medicines", "Start compression stockings"], "Slide 16.")],
        [q("Six months after a fem-pop bypass, a patient who still smokes asks if the graft will last forever. Best answer?", "No: without lifestyle change the bypass will ultimately fail; surgery just buys time", ["Yes: the graft cured the disease", "Yes, if he takes antibiotics", "Only if he avoids walking"], "Peripheral vascular surgery is temporizing."),
          q("A patient had a leg bypass last month. Which surveillance plan matches the lecture?", "Duplex ultrasound every 3 months plus ABI at rest and after exercise", ["CT angiogram every week", "No imaging unless the leg turns black", "Venous duplex once a year"], "Duplex surveillance improves 5-year patency."),
          q("A routine 3-month duplex after a fem-pop bypass shows a new tight stenosis in the graft, but the patient feels fine. Why intervene?", "Intervening on duplex surveillance findings gives higher 5-year patency", ["Asymptomatic grafts never need treatment", "The duplex is always wrong", "Only symptoms matter"], "Surveillance-based intervention improves patency.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-carotid-anatomy-presentation", "4. Carotid disease: anatomy, presentation and risk factors", "Slides 18 to 23 and 28 to 29: brain blood supply, carotid sinus and body, asymptomatic vs symptomatic disease, risk factors, and the vulnerable plaque.", [
      C("Carotid anatomy",
        tbl(["Point", "Detail"], [
          ["<strong>Four arteries supply the brain</strong>", "Two <strong>internal carotids</strong> and two <strong>vertebrals</strong>, joined by the <strong>circle of Willis</strong>"],
          ["Take-off of the common carotids", "<strong>Right</strong> common carotid comes from the <strong>brachiocephalic</strong> trunk; <strong>left</strong> common carotid comes <strong>directly off the aortic arch</strong> (slide 19)"],
          ["Branches", "Common carotid splits into <strong>internal</strong> (brain, eye) and <strong>external</strong> carotid (face and neck: facial, maxillary, superficial temporal, occipital, posterior auricular and others, slide 20)"],
          ["<strong>Ophthalmic artery</strong>", "Branch of the internal carotid (slide 19): emboli here cause monocular blindness"],
          ["<strong>Carotid sinus</strong>", "<strong>Controls BP</strong> (baroreceptor)"],
          ["<strong>Carotid body</strong>", "<strong>Chemoreceptor</strong> for <strong>O2 and CO2</strong> (also pH and temperature)"]]) +
        mn("<strong>S</strong>inus = <strong>S</strong>queeze (pressure, BP). <strong>B</strong>ody = <strong>B</strong>reath gases (O2, CO2)."),
        ["vs-brain-four-arteries", "vs-carotid-takeoff", "vs-carotid-sinus", "vs-carotid-body"],
        [q("How many arteries supply the brain?", "Four: two internal carotids and two vertebrals", ["Two carotids only", "Six", "One basilar only"], "Four arteries, joined by the circle of Willis."),
          q("What connects the brain's arterial supply into a ring?", "The circle of Willis", ["The aortic arch", "The carotid sinus", "The jugular bulb"], "Circle of Willis."),
          q("Where does the left common carotid artery arise?", "Directly from the aortic arch", ["From the brachiocephalic trunk", "From the left subclavian", "From the vertebral artery"], "Slide 19."),
          q("Where does the right common carotid artery arise?", "From the brachiocephalic trunk", ["Directly from the aortic arch", "From the right vertebral", "From the external carotid"], "Slide 19."),
          q("What does the carotid sinus control?", "Blood pressure", ["Blood oxygen sensing", "Swallowing", "Tongue movement"], "Carotid sinus controls BP."),
          q("What is the carotid body?", "A chemoreceptor for O2 and CO2", ["A baroreceptor for BP", "A lymph node", "A branch of the vagus"], "Carotid body: chemoreceptor."),
          q("Which artery is a branch of the internal carotid and supplies the eye?", "Ophthalmic artery", ["Facial artery", "Maxillary artery", "Occipital artery"], "Ophthalmic artery."),
          q("Which artery is a branch of the external carotid?", "Superficial temporal artery", ["Ophthalmic artery", "Middle cerebral artery", "Basilar artery"], "Slide 20: maxillary, superficial temporal, facial, occipital, posterior auricular and others."),
          q("Besides O2 and CO2, what else does the carotid body sense, per the speaker notes?", "pH and temperature", ["Blood glucose and sodium", "Blood pressure only", "Heart rhythm"], "Chemoreceptors sensitive to PO2, CO2, pH and temp.")],
        [q("During carotid surgery the surgeon handles the carotid bifurcation and the patient's BP drops suddenly. Which structure is being stimulated?", "The carotid sinus (baroreceptor)", ["The carotid body", "The hypoglossal nerve", "The ophthalmic artery"], "Carotid sinus controls BP."),
          q("A student asks which carotid structure senses low oxygen. Correct answer?", "The carotid body", ["The carotid sinus", "The circle of Willis", "The vertebral artery"], "Carotid body = chemoreceptor.")]),
      C("Asymptomatic vs symptomatic carotid disease",
        tbl(["Asymptomatic: how it is found", "Symptomatic: what counts"], [
          ["<strong>Thrills</strong>; <strong>bruits</strong>; incidental on <strong>thyroid ultrasound</strong> or <strong>CT of the neck</strong>; <strong>screening because of PAD</strong>",
            "<strong>Contralateral focal neurologic symptoms</strong> within <strong>6 months</strong> in the internal carotid distribution; <strong>ipsilateral monocular blindness (amaurosis fugax)</strong>; <strong>ipsilateral focal findings on brain CT or MRI</strong>; memory and thinking problems (?)"]]) +
        hy("<strong>NOT vertigo or syncope.</strong> Those do not make carotid disease symptomatic.") +
        "<p><strong>Amaurosis fugax</strong> is due to <strong>emboli to the ophthalmic artery</strong>: a curtain over one eye on the <strong>same side</strong> as the carotid plaque. Weakness or numbness shows on the <strong>opposite</strong> side of the body.</p>" +
        note("Vertigo and syncope point to the posterior (vertebrobasilar) circulation or global low flow, not one carotid (standard teaching). The slide puts a question mark after memory and thinking problems."),
        ["vs-carotid-asymptomatic", "vs-carotid-symptomatic", "vs-amaurosis", "vs-not-vertigo"],
        [q("Which is a way asymptomatic carotid disease is found?", "A neck bruit on exam", ["Monocular blindness", "Contralateral arm weakness", "A stroke on MRI"], "Thrills, bruits, thyroid US, CT neck, PAD screening."),
          q("Why might a patient with PAD be screened for carotid disease?", "Atherosclerosis is diffuse, so PAD raises the chance of carotid stenosis", ["PAD causes carotid aneurysms", "Carotid disease causes claudication", "PAD screening is required by law"], "Screening due to PAD."),
          q("What is amaurosis fugax?", "Temporary monocular blindness from emboli to the ophthalmic artery", ["Double vision from a cranial nerve palsy", "Blindness in both eyes from occipital stroke", "Eye pain from glaucoma"], "Ipsilateral monocular blindness."),
          q("Amaurosis fugax happens on which side relative to the diseased carotid?", "The same (ipsilateral) side", ["The opposite side", "Both eyes always", "It is unrelated to side"], "Ipsilateral monocular blindness."),
          q("Focal neurologic symptoms from carotid disease appear on which side of the body?", "The opposite (contralateral) side", ["The same side", "Both sides always", "Only the face"], "Contralateral focal neurologic symptoms."),
          q("Within what time window do neurologic symptoms make carotid disease symptomatic?", "6 months", ["6 days", "2 years", "10 years"], "Within 6 months in the ICA distribution."),
          q("Which symptom does NOT make carotid disease symptomatic?", "Vertigo", ["Amaurosis fugax", "Contralateral hand weakness", "Contralateral facial droop"], "NOT vertigo or syncope."),
          q("Is syncope considered a symptom of carotid stenosis?", "No", ["Yes, always", "Only in women", "Only with bilateral disease"], "NOT vertigo or syncope."),
          q("Which imaging finding makes carotid disease symptomatic?", "Ipsilateral focal findings on brain CT or MRI", ["Contralateral findings on brain CT", "A thyroid nodule on ultrasound", "Calcified aorta on chest X-ray"], "Ipsilateral focal findings on brain imaging.")],
        [q("A 70-year-old says a gray curtain came down over his right eye for 3 minutes and then lifted. Which artery is most likely the source?", "The right internal carotid, via emboli to the ophthalmic artery", ["The left internal carotid", "The basilar artery", "The right vertebral artery"], "Ipsilateral amaurosis fugax."),
          q("A 66-year-old had 20 minutes of right hand weakness and trouble speaking 2 months ago. Which carotid is symptomatic?", "The left internal carotid", ["The right internal carotid", "Neither: hand symptoms do not count", "Both"], "Contralateral focal neurologic symptoms within 6 months."),
          q("A 74-year-old with 75% left carotid stenosis reports spells of the room spinning when he rolls over in bed. How is his carotid disease classified?", "Asymptomatic: vertigo does not count", ["Symptomatic", "Symptomatic only if it lasts over an hour", "Total occlusion"], "NOT vertigo or syncope."),
          q("A thyroid ultrasound incidentally shows 60% right carotid stenosis in a patient with no neurologic symptoms. Classification?", "Asymptomatic carotid disease", ["Symptomatic carotid disease", "Amaurosis fugax", "Total occlusion"], "Found by thyroid US with no symptoms.")]),
      C("Risk factors and the vulnerable plaque",
        tbl(["Risk factors (slide 23)"], [["<strong>Diabetes</strong>, <strong>hypertension</strong>, <strong>cigarette smoking</strong>, <strong>genetics</strong>, <strong>age</strong>, <strong>hyperlipidemia</strong>"]]) +
        "<p>Slides 28 and 29 show why carotid plaque causes strokes:</p>" +
        chain(["Plaque with a <strong>lipid core</strong>, <strong>thin fibrous cap</strong>, <strong>inflammatory cells</strong>, <strong>intraplaque hemorrhage</strong> and <strong>positive remodeling</strong> = <strong>vulnerable plaque</strong>", "The cap breaks: <strong>ulcerated plaque</strong>", "<strong>Fissured plaque with thrombosis</strong>", "Bits of clot and plaque <strong>embolize</strong> up the internal carotid", "TIA, stroke, or amaurosis fugax"]),
        ["vs-carotid-risk", "vs-vulnerable-plaque"],
        [q("Which is a listed risk factor for carotid disease?", "Cigarette smoking", ["Female sex", "Pregnancy", "Low blood pressure"], "DM, HTN, smoking, genetics, age, hyperlipidemia."),
          q("Which set lists the carotid disease risk factors from the lecture?", "Diabetes, hypertension, smoking, genetics, age, hyperlipidemia", ["Pregnancy, OCPs, immobility, cancer", "Alcohol, gout, obesity, asthma", "Female sex, migraine, anemia, thyroid disease"], "Slide 23."),
          q("Which plaque feature makes it vulnerable to rupture?", "A thin fibrous cap over a lipid core", ["A thick, calcified cap", "No lipid at all", "A small stable plaque"], "Thin cap, lipid core, inflammation, intraplaque hemorrhage."),
          q("How does carotid plaque usually cause a stroke?", "Ulcerated or fissured plaque forms thrombus that embolizes to the brain", ["It compresses the jugular vein", "It raises intracranial pressure", "It blocks the vertebral arteries"], "Slide 29: ulcerated plaque, fissured plaque with thrombosis."),
          q("Which finding inside a plaque is shown on the vulnerable plaque slide?", "Intraplaque hemorrhage", ["Calcium only", "Venous valves", "Lymphoid follicles"], "Slide 28.")],
        [q("A 61-year-old with diabetes, hypertension and hyperlipidemia who smokes asks why she needs carotid screening. Best answer?", "She has many carotid disease risk factors, all the same as for atherosclerosis elsewhere", ["She has none of the risk factors", "Carotid disease is caused by infection", "Only men get carotid disease"], "DM, HTN, smoking, HLD.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-carotid-treatment", "5. Carotid disease treatment: medical, CEA or stent", "Slides 24 to 32: medical treatment, who gets carotid endarterectomy or stenting, why not everyone, total occlusion, and pre-op planning.", [
      C("Medical treatment for everyone",
        tbl(["Medical treatment (slide 24)"], [["<strong>Statins</strong>; <strong>antiplatelet</strong>; control of <strong>HTN</strong> and <strong>DM</strong>; <strong>Mediterranean diet</strong>; <strong>smoking cessation</strong>"]]) +
        hy("Every carotid patient gets medical therapy, whether or not they get surgery."),
        ["vs-carotid-medical"],
        [q("Which lipid drug class is part of medical treatment for carotid disease?", "Statins", ["Fibrates only", "Bile acid sequestrants only", "No lipid drug"], "Statins."),
          q("Which diet is recommended for carotid disease?", "Mediterranean diet", ["Ketogenic diet", "High-protein, low-carb diet", "No diet change"], "Mediterranean diet."),
          q("Which antithrombotic class is part of medical treatment for carotid disease?", "Antiplatelet therapy", ["Thrombolytics", "Vitamin K", "No antithrombotic"], "Antiplatelet."),
          q("Which list is the medical treatment for carotid disease?", "Statin, antiplatelet, HTN and DM control, Mediterranean diet, smoking cessation", ["Warfarin, diuretic, compression, rest", "Steroids, antibiotics, IVIG", "Beta blocker only"], "Slide 24.")],
        [q("A 70-year-old has 50% asymptomatic carotid stenosis. What should she receive?", "Medical treatment: statin, antiplatelet, BP and DM control, diet, no smoking", ["Carotid endarterectomy now", "Carotid stent now", "No treatment at all"], "Below surgical thresholds: medical therapy."),
          q("After a carotid endarterectomy, a patient asks if he can stop his statin and aspirin. Best answer?", "No: medical therapy continues for everyone", ["Yes: surgery cured the disease", "Yes, but only the statin", "Stop both and start warfarin"], "Medical therapy is for every carotid patient.")]),
      C("Who gets carotid endarterectomy or stenting",
        tbl(["Criterion for CEA or stenting (slide 25)"], [
          ["<strong>Symptomatic</strong> and <strong>70 to 99%</strong> stenosis"],
          ["<strong>Asymptomatic</strong> and <strong>80 to 99%</strong> stenosis"],
          ["<strong>Surgically accessible</strong> lesion"],
          ["Absence of <strong>severe cardiac, pulmonary or systemic disease</strong>"],
          ["<strong>Non-debilitating</strong> stroke"],
          ["<strong>Life expectancy over 5 years</strong>"]]) +
        mn("<strong>Symptoms drop the bar by 10</strong>: symptomatic 70, asymptomatic 80. Both stop at 99 (100% is total occlusion: do not operate).") +
        note("Some guidelines use 60 or 70% for asymptomatic disease; learn the deck's 80 to 99% for this exam."),
        ["vs-cea-symptomatic", "vs-cea-asymptomatic", "vs-cea-other-criteria"],
        [q("What stenosis range qualifies a SYMPTOMATIC patient for CEA or stenting?", "70 to 99%", ["50 to 69%", "80 to 99%", "100%"], "Symptomatic and 70 to 99%."),
          q("What stenosis range qualifies an ASYMPTOMATIC patient for CEA or stenting?", "80 to 99%", ["70 to 99%", "50 to 79%", "100%"], "Asymptomatic and 80 to 99%."),
          q("What life expectancy is required for carotid surgery or stenting?", "Over 5 years", ["Over 1 year", "Over 20 years", "Any life expectancy"], "Life expectancy over 5 years."),
          q("What kind of prior stroke still allows carotid surgery?", "A non-debilitating stroke", ["A debilitating stroke", "Any hemorrhagic stroke", "A stroke with coma"], "Non-debilitating stroke."),
          q("Which lesion feature is required for carotid surgery?", "Surgically accessible", ["Totally occluded", "Located in the brain", "Bilateral"], "Surgically accessible lesion."),
          q("Which patient factor is required for carotid surgery?", "No severe cardiac, pulmonary or systemic disease", ["Age over 85", "Recent debilitating stroke", "Life expectancy under 2 years"], "Absence of severe disease."),
          q("Why does the upper end of the range stop at 99%?", "100% is total occlusion, which is not operated on", ["Ultrasound cannot measure 100%", "It is a rounding rule", "100% always needs a stent instead"], "Do not operate on total occlusion.")],
        [q("A 67-year-old had right-eye amaurosis fugax 3 weeks ago. Duplex shows 75% right ICA stenosis. He is otherwise healthy. Management?", "Carotid endarterectomy or stenting plus medical therapy", ["Medical therapy only", "Observe until 80%", "No treatment: amaurosis does not count"], "Symptomatic and 70 to 99%."),
          q("A 65-year-old with no symptoms has 75% left ICA stenosis. Per the lecture's thresholds, management?", "Medical therapy: asymptomatic needs 80 to 99%", ["CEA now", "Carotid stent now", "Emergency surgery"], "Asymptomatic threshold is 80%."),
          q("A 72-year-old with no symptoms has 85% right ICA stenosis, good heart and lung function, and expects to live 10 or more years. Management?", "CEA or stenting plus medical therapy", ["Medical therapy only", "No treatment", "Amputation"], "Asymptomatic 80 to 99% with good candidacy."),
          q("An 88-year-old with metastatic cancer and a 6-month prognosis has symptomatic 90% stenosis. Why not operate?", "Life expectancy under 5 years", ["The stenosis is too mild", "Symptoms do not count", "Stenting is required instead"], "Life expectancy over 5 years is required."),
          q("A patient with symptomatic 80% stenosis had a massive stroke leaving him bedbound and aphasic. Does he meet surgical criteria?", "No: the stroke is debilitating", ["Yes, always", "Yes, if under 70", "Only if bilateral"], "Non-debilitating stroke is required.")]),
      C("Why not operate on everyone, and pre-op planning",
        "<p><strong>Carotid surgery is prophylactic</strong>: it prevents a future stroke; it does not fix one.</p>" +
        tbl(["Stroke risk", "How big"], [["<strong>Operative</strong>", "<strong>1 to 3%</strong>"], ["<strong>Non-operative</strong>", "Depends on the <strong>degree of stenosis</strong>"]]) +
        hy("<strong>DO NOT OPERATE on a TOTAL OCCLUSION of the carotid.</strong>") +
        "<p><strong>Pre-op</strong>: control cardiac disease, <strong>especially BP</strong>; control comorbid disease (DM, CAD). <strong>Anesthesia</strong> can be <strong>local or general</strong>; CEA can be done under local, so anesthesia risk is low.</p>" +
        note("Why no surgery for total occlusion (standard teaching): there is no flow left to restore, and opening a fully blocked artery risks pushing clot into the brain."),
        ["vs-prophylactic", "vs-operative-stroke-risk", "vs-total-occlusion", "vs-preop-anesthesia"],
        [q("Carotid surgery is described as what kind of operation?", "Prophylactic", ["Curative for stroke already present", "Cosmetic", "Emergency only"], "Carotid surgery is prophylactic."),
          q("What is the operative stroke risk of carotid surgery?", "1 to 3%", ["10 to 15%", "Under 0.01%", "25%"], "Operative 1 to 3%."),
          q("What does the non-operative stroke risk depend on?", "The degree of stenosis", ["The patient's height", "The side of the neck", "The type of anesthesia"], "Non-operative risk depends on degree of stenosis."),
          q("Which carotid lesion should NOT be operated on?", "A total occlusion", ["A 75% symptomatic stenosis", "An 85% asymptomatic stenosis", "An ulcerated 90% plaque"], "DO NOT OPERATE on total occlusion."),
          q("Which comorbidity is most important to control before carotid surgery?", "Blood pressure", ["Vitamin D level", "Thyroid size", "Hemoglobin A1c only"], "Control of cardiac disease especially BP."),
          q("What anesthesia can be used for carotid endarterectomy?", "Local or general", ["General only", "Spinal only", "No anesthesia"], "Local or general."),
          q("Why is anesthesia risk low for carotid surgery?", "It can be done under local anesthesia", ["It takes under 5 minutes", "It is always done awake without any anesthetic", "It never needs an incision"], "Speaker notes."),
          q("Why not operate on everyone with carotid stenosis?", "Surgery is prophylactic and carries its own 1 to 3% stroke risk", ["Surgery never works", "Stenosis always resolves", "Insurance rules forbid it"], "Weigh operative vs non-operative risk.")],
        [q("Duplex shows 100% occlusion of the left internal carotid in a patient with a prior minor stroke. What does the lecture advise?", "Do not operate; continue medical therapy", ["Urgent endarterectomy", "Carotid stent", "Bypass to the vertebral"], "Do not operate on total carotid occlusion."),
          q("A patient with 82% asymptomatic stenosis and BP 186/104 is scheduled for CEA next week. What must happen first?", "Control the blood pressure", ["Nothing: proceed", "Stop all antiplatelets", "Start a statin only after surgery"], "Pre-op: control cardiac disease, especially BP."),
          q("A patient with COPD worries about general anesthesia for CEA. What can you tell him?", "CEA can be done under local anesthesia", ["CEA always needs general anesthesia", "He can never have surgery", "Stenting requires general anesthesia"], "Local or general.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-carotid-complications", "6. Carotid surgery complications", "Slides 33 to 39: carotid-specific complications and what to do, and the nerves at risk.", [
      C("Carotid-specific complications and what to do",
        "<p>Carotid surgery has the same wound and anesthesia complications as any operation (slides 33 to 35), plus its own:</p>" +
        tbl(["Complication", "Why it happens", "What to do"], [
          ["<strong>BP lability</strong>", "<strong>Carotid sinus</strong> (BP control) is handled", "<strong>Monitor in ICU or step-down</strong>"],
          ["Chemoreceptor changes", "<strong>Carotid body</strong> (O2, CO2, pH, temp)", "Monitoring"],
          ["<strong>Hematoma</strong>", "Bleeding in the neck", "<strong>Rapid return to OR</strong>"],
          ["<strong>Stroke</strong> (1 to 3%)", "Emboli or low flow", "<strong>Supportive care</strong>"],
          ["<strong>Cerebral hyperperfusion syndrome</strong>", "Brain suddenly gets much more flow after the stenosis is fixed", "<strong>BP control</strong>; <strong>edema control</strong>; <strong>anticonvulsants</strong>"]]) +
        hy("Cerebral hyperperfusion syndrome = <strong>headache, seizures, focal neurologic deficits</strong> after CEA. Treat with BP control, edema control, anticonvulsants.") +
        note("Neck hematoma goes straight back to the OR because a growing neck hematoma can compress the airway (standard teaching)."),
        ["vs-cea-bp-lability", "vs-cea-hematoma", "vs-cea-stroke", "vs-hyperperfusion"],
        [q("Why is BP labile after carotid surgery?", "The carotid sinus, which controls BP, is disturbed", ["The carotid body senses glucose", "The vagus nerve is always cut", "The jugular vein is tied off"], "BP lability: carotid sinus."),
          q("Where is a patient monitored for BP lability after CEA?", "ICU or step-down unit", ["Home the same day", "Regular floor without monitoring", "Outpatient clinic"], "Monitor in ICU or step-down."),
          q("What is the management of a neck hematoma after CEA?", "Rapid return to the OR", ["Ice and observation", "Antibiotics", "Needle aspiration in clinic"], "Hematoma: rapid return to OR."),
          q("What is the stroke rate with carotid surgery?", "1 to 3%", ["15 to 30%", "Under 0.1%", "About 50%"], "Stroke 1 to 3%."),
          q("How is a stroke after carotid surgery managed in the lecture?", "Supportive care", ["Immediate amputation", "Compression stockings", "Antibiotics"], "Stroke: supportive care."),
          q("What are the three features of cerebral hyperperfusion syndrome?", "Headaches, seizures, focal neurologic deficits", ["Fever, rash, joint pain", "Hoarseness, dysphagia, tongue deviation", "Ptosis, miosis, anhidrosis"], "H/A, seizures, focal deficits."),
          q("How is cerebral hyperperfusion syndrome treated?", "BP control, edema control and anticonvulsants", ["Fluids to raise BP", "Immediate repeat endarterectomy", "Thrombolytics"], "Slide 37."),
          q("Which carotid structure is a chemoreceptor that can be affected by surgery?", "The carotid body", ["The carotid sinus", "The ophthalmic artery", "The thyroid gland"], "Chemoreceptor: carotid body.")],
        [q("The evening after a right CEA, a patient has a severe headache, then a seizure; BP is 198/108. Imaging shows no new infarct. Diagnosis?", "Cerebral hyperperfusion syndrome", ["Neck hematoma", "Amaurosis fugax", "Horner syndrome"], "Headache, seizures, focal deficits after CEA."),
          q("A patient with cerebral hyperperfusion syndrome after CEA is seizing with BP 190/100. Which plan fits?", "Lower BP, control edema, give anticonvulsants", ["Give IV fluids to raise BP", "Start thrombolytics", "Return to OR to tie off the carotid"], "BP control, edema control, anticonvulsants."),
          q("Two hours after CEA, the neck is swelling rapidly and the patient is anxious and short of breath. Next step?", "Rapid return to the operating room", ["Observe overnight", "Ice packs", "Start a statin"], "Hematoma: rapid return to OR."),
          q("After an uncomplicated CEA, why is the patient sent to a step-down unit instead of the regular floor?", "To monitor labile BP from carotid sinus disturbance", ["To give IV antibiotics", "To start dialysis", "Because all neck surgery needs a ventilator"], "BP lability: monitor in ICU/step-down.")]),
      C("Nerve injury during carotid surgery",
        tbl(["Nerve", "What injury causes"], [
          ["<strong>Vagus</strong>", "<strong>Hoarseness</strong>, <strong>difficulty swallowing</strong>, changes in <strong>HR and BP</strong>, abdominal pain, acid reflux, nausea and vomiting"],
          ["<strong>Recurrent laryngeal</strong> (vagus branch)", "<strong>Hoarseness</strong> (vocal cord paralysis, standard teaching)"],
          ["<strong>Hypoglossal</strong> (CN XII)", "<strong>Tongue deviation</strong>"],
          ["<strong>Sympathetic nerves</strong>", "<strong>Horner syndrome</strong>: <strong>miosis, ptosis, anhidrosis</strong>"]]) +
        mn("Horner = <strong>P-A-M</strong>: <strong>P</strong>tosis, <strong>A</strong>nhidrosis, <strong>M</strong>iosis, all on the injured side.") +
        "<p>Slide 39 shows the nerves next to the carotid: facial, glossopharyngeal, <strong>hypoglossal</strong>, superior laryngeal, <strong>vagus</strong>, <strong>recurrent laryngeal</strong>.</p>" +
        note("The speaker notes say hypoglossal injury deviates the tongue to the CONTRALATERAL side. Standard neuroanatomy says the tongue deviates TOWARD the injured side (the healthy side pushes it over). Ask your instructor which they want; no question here tests the direction."),
        ["vs-nerve-vagus", "vs-nerve-rln", "vs-nerve-hypoglossal", "vs-horner"],
        [q("Which nerve injury during CEA causes tongue deviation?", "Hypoglossal", ["Vagus", "Recurrent laryngeal", "Facial"], "Hypoglossal: tongue deviation."),
          q("What are the three features of Horner syndrome?", "Miosis, ptosis, anhidrosis", ["Mydriasis, ptosis, sweating", "Headache, seizures, focal deficits", "Hoarseness, dysphagia, reflux"], "Miosis, ptosis, anhidrosis."),
          q("Injury to which nerves during carotid surgery causes Horner syndrome?", "The sympathetic nerves", ["The hypoglossal nerve", "The recurrent laryngeal nerve", "The facial nerve"], "Sympathetic nerves."),
          q("Which nerve injury causes hoarseness and also changes in heart rate and BP?", "Vagus", ["Hypoglossal", "Sympathetic chain", "Facial"], "Vagus: abd pain, reflux, HR/BP changes, dysphagia, hoarseness, N/V."),
          q("Which nerve is a branch of the vagus that causes hoarseness when injured?", "Recurrent laryngeal nerve", ["Hypoglossal nerve", "Glossopharyngeal nerve", "Phrenic nerve"], "Recurrent laryngeal."),
          q("Which GI symptoms can follow vagus nerve injury?", "Abdominal pain, acid reflux, nausea and vomiting", ["Bloody diarrhea", "Jaundice", "Constipation only"], "Speaker notes for slide 38."),
          q("Which four nerves or nerve groups are listed as at risk in carotid surgery?", "Vagus, recurrent laryngeal, hypoglossal, sympathetic", ["Phrenic, axillary, radial, ulnar", "Optic, oculomotor, trochlear, abducens", "Femoral, sciatic, tibial, peroneal"], "Slide 38."),
          q("Is the pupil large or small in Horner syndrome?", "Small (miosis)", ["Large (mydriasis)", "Normal", "Absent light reflex only"], "Miosis.")],
        [q("The day after a left CEA, a patient's voice is hoarse and he coughs when drinking water. Which nerve was most likely injured?", "Vagus or its recurrent laryngeal branch", ["Hypoglossal", "Sympathetic chain", "Facial"], "Hoarseness, difficulty swallowing."),
          q("After a right CEA, the patient's right eyelid droops, the right pupil is small, and the right side of the face does not sweat. Diagnosis?", "Horner syndrome from sympathetic nerve injury", ["Hypoglossal injury", "Cerebral hyperperfusion syndrome", "Amaurosis fugax"], "Miosis, ptosis, anhidrosis."),
          q("After a CEA, the patient's tongue deviates when she sticks it out, and she has trouble moving food in her mouth. Which nerve?", "Hypoglossal", ["Vagus", "Recurrent laryngeal", "Sympathetic"], "Hypoglossal: tongue deviation.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-amputation-indications-levels", "7. Amputations: indications and levels", "Slides 40 to 45: when to amputate, the levels, and what decides the level.", [
      C("Indications for amputation",
        "<p>Amputate a <strong>non-salvageable or non-functioning</strong> limb or appendage because of:</p>" +
        tbl(["Cause"], [["<strong>Infection</strong>"], ["<strong>Ischemia</strong>"], ["<strong>Trauma</strong>"], ["<strong>Tumor</strong>"], ["<strong>Congenital</strong>"]]) +
        mn("<strong>I-I-T-T-C</strong>: <strong>I</strong>nfection, <strong>I</strong>schemia, <strong>T</strong>rauma, <strong>T</strong>umor, <strong>C</strong>ongenital.") +
        note("Gangrene types and their treatment are taught in Vascular Disease Part 1."),
        ["vs-amp-indication", "vs-amp-causes"],
        [q("What is the general indication for amputation?", "A non-salvageable or non-functioning limb or appendage", ["Any leg pain", "Any diabetic foot", "Claudication at 2 blocks"], "Non-salvageable or non-functioning."),
          q("Which is a listed cause for amputation?", "Tumor", ["Varicose veins", "Raynaud phenomenon", "Lymphedema"], "Infection, ischemia, trauma, tumor, congenital."),
          q("Which set lists the five causes leading to amputation?", "Infection, ischemia, trauma, tumor, congenital", ["Obesity, smoking, diabetes, age, sex", "Pain, swelling, redness, heat, loss of function", "Bleeding, hematoma, pseudoaneurysm, occlusion, emboli"], "Slide 40."),
          q("Which vascular cause can lead to amputation?", "Ischemia", ["Hypertension alone", "Venous reflux", "Telangiectasia"], "Ischemia.")],
        [q("A diabetic has wet gangrene of the forefoot with spreading infection, and the foot cannot be saved. What fits the lecture's indication?", "Amputation of a non-salvageable limb due to infection and ischemia", ["Compression and elevation", "Watchful waiting", "Carotid endarterectomy"], "Non-salvageable limb from infection/ischemia."),
          q("A crush injury leaves a hand with no blood flow and no function that cannot be reconstructed. Which indication applies?", "Trauma causing a non-salvageable, non-functioning limb", ["Congenital", "Tumor", "No indication"], "Trauma.")]),
      C("Amputation levels and what decides the level",
        tbl(["Levels (slide 41)", "Other names (slide 43)"], [
          ["Toe or finger", ""],
          ["<strong>Transmetatarsal</strong>", "Partial foot (Chopart is another partial-foot level; Syme's is at the ankle)"],
          ["<strong>Below knee</strong> (BKA)", "<strong>Transtibial</strong>"],
          ["<strong>Above knee</strong> (AKA)", "<strong>Transfemoral</strong>"],
          ["Forearm", "Below elbow (<strong>transradial</strong>)"],
          ["Upper arm", "Above elbow (<strong>transhumeral</strong>)"],
          ["<strong>Guillotine</strong>", "A quick open cut straight across"]]) +
        "<p>The tricky part is <strong>determining the level</strong>. It depends on:</p>" +
        tbl(["Level depends on (slide 42)"], [["<strong>Blood supply</strong>"], ["<strong>Level of infection or necrosis</strong>"], ["<strong>Joint function</strong>"], ["<strong>Prosthesis fitting</strong>"]]) +
        "<p>Slides 44 and 45 show a below-knee amputation: necrotic tissue and osteomyelitis in the foot, a circumferential incision below the knee, tibia and fibula cut, and a posterior skin flap folded over the stump; then a prosthesis.</p>" +
        mn("<strong>B-I-J-P</strong>: <strong>B</strong>lood supply, <strong>I</strong>nfection level, <strong>J</strong>oint function, <strong>P</strong>rosthesis fit.") +
        note("Guillotine amputation is a quick open amputation used to control severe infection or for an unstable patient, followed later by a formal closure (standard teaching). Keeping the knee (BKA over AKA) makes walking with a prosthesis much easier (standard teaching)."),
        ["vs-amp-levels", "vs-amp-level-factors", "vs-amp-guillotine", "vs-amp-bka"],
        [q("What does the lecturer call the tricky part of amputation?", "Determining the level", ["Choosing the anesthesia", "Closing the skin", "Ordering the prosthesis"], "Speaker notes."),
          q("Which four factors decide the amputation level?", "Blood supply, level of infection or necrosis, joint function, prosthesis fitting", ["Age, sex, weight, height", "BP, HR, temperature, oxygen", "Cost, time, surgeon, hospital"], "Slide 42."),
          q("What is another name for an above-knee amputation?", "Transfemoral", ["Transtibial", "Transradial", "Syme's"], "AK = transfemoral."),
          q("What is another name for a below-knee amputation?", "Transtibial", ["Transfemoral", "Transhumeral", "Hip disarticulation"], "BK = transtibial."),
          q("Which amputation level is a quick cut straight across, often done first in severe infection?", "Guillotine", ["Transmetatarsal", "Syme's", "Below knee with a long posterior flap"], "Guillotine (standard teaching for its use)."),
          q("Which amputation level removes the front of the foot through the metatarsals?", "Transmetatarsal", ["Below knee", "Above knee", "Guillotine at the thigh"], "Transmetatarsal."),
          q("Why does joint function affect the level?", "Keeping a working joint such as the knee improves function with a prosthesis", ["Joints always get infected", "Joints cannot be cut", "It does not matter"], "Joint function and prosthesis fitting."),
          q("In a below-knee amputation, which bones are cut?", "Tibia and fibula", ["Femur only", "Metatarsals", "Radius and ulna"], "Slide 45."),
          q("In the slide 45 below-knee amputation, what closes over the stump?", "A posterior skin flap", ["A skin graft from the arm", "A mesh patch", "Nothing: it is left open"], "The remaining skin flap is folded over the stump.")],
        [q("A patient has dry gangrene of the toes, a palpable popliteal pulse, healthy calf skin, and a working knee. Which factor most supports a below-knee rather than above-knee amputation?", "Good blood supply below the knee and a working knee joint", ["His age", "His blood type", "The color of the gangrene only"], "Blood supply and joint function decide the level."),
          q("A septic diabetic with wet gangrene of the foot and ascending infection is unstable. Which first operation fits?", "Guillotine amputation to control the infection, with formal closure later", ["Immediate fem-pop bypass", "Transmetatarsal amputation with primary closure", "Compression wraps"], "Guillotine is the quick first step (standard teaching)."),
          q("Necrosis extends into the mid-calf and the popliteal artery is occluded with no flow below the knee. Which level is most likely?", "Above knee (transfemoral)", ["Toe", "Transmetatarsal", "Below knee"], "The level follows the blood supply and extent of necrosis.")])
    ]),

    /* ---------- 8 ---------- */
    S("08-amputation-complications", "8. Amputation complications and what to do", "Slides 46 to 49: signs of wound complications, amputation-specific complications and mortality, and treatment.", [
      C("Complications after amputation and their signs",
        tbl(["Wound complication", "Signs and symptoms (slide 46)"], [
          ["<strong>Bleeding or hematoma</strong>", "<strong>Expanding</strong> mass, <strong>pulsatile</strong>, signs of <strong>hypovolemia</strong>"],
          ["<strong>Infection</strong>", "<strong>Hot, red, swollen, painful</strong>"],
          ["<strong>Ischemia or wound breakdown</strong>", "<strong>Discoloration</strong> (pale or dark), <strong>necrotic skin</strong>, wound falling apart"]]) +
        "<p>Plus the same anesthesia complications (MI, stroke, renal, liver, pulmonary failure, ischemic bowel) and amputation-specific ones (slide 48): infection or ischemia leading to wound complications; bleeding or hematoma; <strong>cardiovascular</strong> events; <strong>DM control</strong>; <strong>death</strong>, mortality about <strong>15 to 30%</strong>.</p>" +
        hy("<strong>AMPUTATIONS TREAT THE RESULT OF A DISEASE PROCESS; THEY TYPICALLY DO NOT TREAT THE UNDERLYING DISEASE.</strong> The diabetes, smoking and atherosclerosis are still there."),
        ["vs-amp-signs", "vs-amp-mortality", "vs-amp-not-cure"],
        [q("What is the mortality rate after amputation in the lecture?", "About 15 to 30%", ["Under 1%", "About 50 to 60%", "Exactly 5%"], "Death: mortality about 15 to 30%."),
          q("What are the signs of an infected amputation wound?", "Hot, red, swollen, painful", ["Pale, cold, pulseless", "Expanding pulsatile mass", "Black dry eschar only"], "Slide 46."),
          q("What are the signs of bleeding or hematoma after amputation?", "Expanding pulsatile mass with signs of hypovolemia", ["Hot, red, swollen wound", "Necrotic skin edges", "Tongue deviation"], "Slide 46."),
          q("What are the signs of wound ischemia or breakdown?", "Pale or dark discoloration, necrotic skin, wound falling apart", ["Expanding pulsatile mass", "Hot, red, swollen skin", "Clear drainage only"], "Slide 46."),
          q("Do amputations treat the underlying disease?", "No: they treat the result of a disease process", ["Yes, they cure PAD", "Yes, they cure diabetes", "Only above-knee amputations do"], "Bolded on slide 48."),
          q("Which metabolic problem is listed as an amputation complication?", "Diabetes control", ["Hypothyroidism", "Hyperkalemia only", "Gout"], "DM control."),
          q("Which list is amputation-specific complications?", "Wound complications, bleeding, cardiovascular events, DM control, death", ["Hoarseness, Horner syndrome, hyperperfusion", "Pseudoaneurysm only", "Hernia and ischemic bowel only"], "Slide 48.")],
        [q("Four days after a below-knee amputation, the stump is hot, red, swollen and very tender. Diagnosis?", "Wound infection", ["Hematoma", "Wound ischemia", "Phantom limb pain"], "Hot, red, swollen, painful."),
          q("The night after an above-knee amputation, the stump is enlarging with a pulsatile swelling; HR 118, BP 92/58. Diagnosis?", "Bleeding or hematoma", ["Infection", "Wound ischemia", "Normal postoperative swelling"], "Expanding pulsatile mass with hypovolemia."),
          q("A patient's family asks whether the below-knee amputation cured his PAD and diabetes. Best answer?", "No: it treated the result; the diseases remain and need ongoing care", ["Yes, both are cured", "Yes, PAD is cured but not diabetes", "He no longer needs any medicine"], "Amputations do not treat the underlying disease.")]),
      C("What to do for amputation wound complications",
        tbl(["Complication", "Treatment (slide 49)"], [
          ["<strong>Bleeding or hematoma</strong>", "<strong>Return to the OR if significant</strong>"],
          ["<strong>Infection</strong>", "<strong>Antibiotics and drainage</strong> (open the wound)"],
          ["<strong>Ischemia or wound breakdown</strong>", "<strong>Debridement</strong>, <strong>revision</strong>, healing by <strong>secondary intention</strong>"]]) +
        hy("Infection: antibiotics alone are not enough. <strong>Open the wound and drain it.</strong>"),
        ["vs-amp-tx-bleed", "vs-amp-tx-infection", "vs-amp-tx-ischemia"],
        [q("How is an infected amputation wound treated?", "Antibiotics and drainage (open the wound)", ["Antibiotics alone", "Compression only", "Observation"], "Antibiotics and drainage."),
          q("How is a significant hematoma after amputation treated?", "Return to the operating room", ["Warm compresses", "Oral antibiotics", "Leave it alone"], "Return to OR if significant."),
          q("How is wound ischemia or breakdown after amputation treated?", "Debridement, revision, healing by secondary intention", ["Antibiotics alone", "Immediate prosthesis fitting", "Compression stockings"], "Slide 49."),
          q("What does healing by secondary intention mean here?", "The wound is left to heal from the bottom up rather than being sewn closed", ["The wound is closed with sutures right away", "A skin graft is placed the same day", "The limb is reattached"], "Secondary intention (standard teaching definition)."),
          q("Which treatment includes revising the amputation?", "Ischemia or wound breakdown", ["Infection", "Bleeding", "Pseudoaneurysm"], "Debridement, revision, secondary intention.")],
        [q("A below-knee stump is hot, red and fluctuant with pus under the incision. Best management?", "Open and drain the wound and give antibiotics", ["Oral antibiotics alone", "Tighter dressing", "Fit the prosthesis early"], "Antibiotics and drainage."),
          q("Two weeks after a BKA, the flap edges are black and the wound is coming apart. Management?", "Debridement and revision, with healing by secondary intention", ["Antibiotics only", "Return home with no change", "Compression stocking on the stump"], "Ischemia/wound breakdown."),
          q("A small, stable bruise around a stump does not grow and vitals are normal. Does the lecture require return to the OR?", "No: return to OR is for significant bleeding", ["Yes, for any bruise", "Yes, plus antibiotics", "Yes, plus an above-knee revision"], "Return to OR if significant.")])
    ])
  ];
})();
