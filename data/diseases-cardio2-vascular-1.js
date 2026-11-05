/*
  Cardio Part 2 Diseases tool: Vascular Disease Part 1 (arterial).
  Source: source-material/cardio-part-2/text/vascular-disease-part-1.md.
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  var abi = Tbl(["ABI", "Meaning", "Action"], [
    ["<strong>&gt; 1.4</strong>", "Non-compressible, calcified arteries (DM, CKD)", "Toe-brachial index; refer to vascular"],
    ["1.0–1.4", "Normal", "None"],
    ["0.91–0.99", "Borderline", "None (exercise ABI if symptoms)"],
    ["<strong>≤ 0.90</strong>", "<strong>PAD confirmed</strong>", "Risk factors, medical therapy, vascular referral"]
  ]);

  window.CARDIO2_DISEASES_VASCULAR_1 = L("vascular-1", "Vascular Disease Part 1", [

    D("vas1-pad", "Peripheral Arterial Disease (PAD)", "Lower-extremity atherosclerosis: claudication relieved by rest, weak pulses, ABI ≤ 0.90; risk-factor control, antiplatelet, exercise, cilostazol.", [
      S("overview", "What it is", "<p>Atherosclerosis of the (usually lower) extremities: plaque narrows the lumen or ruptures and embolizes. More common in <strong>men</strong> and <strong>African Americans</strong>; rises with age. Risk factors = CVD risk factors: <strong>smoking</strong>, DM, HLD, HTN, age, FH. PAD means <strong>high 10-year CVD risk</strong>.</p>" + Tbl(["Category (2024 ACC/AHA)", "Definition", "Focus"], [
        ["Asymptomatic", "Objective PAD, no leg symptoms", "CV risk reduction"],
        ["Chronic symptomatic", "Claudication / exertional symptoms", "Risk reduction + symptom relief"],
        ["<strong>Chronic limb-threatening ischemia</strong>", "<strong>Rest pain, nonhealing wounds, gangrene &gt; 2 weeks</strong>", "Urgent vascular, limb preservation"],
        ["<strong>Acute limb ischemia</strong>", "Sudden loss of perfusion", "Emergency"]
      ]) + "<p>Complications: worse claudication ~20%, ulcers/revascularization ~10%, amputation 1–2%, <strong>MI or stroke ~20%</strong>.</p>"),
      S("presentation", "Presentation", "<p><strong>Intermittent claudication</strong>: ache, cramp, numbness or weakness in leg muscles <strong>with exercise, relieved by rest</strong> (supply-demand mismatch). Symptoms sit <strong>distal to the lesion</strong>.</p><p>Exam: <strong>weak pulses</strong>, bruit, muscle atrophy; severe: <strong>shiny thin hairless skin</strong>, cool dusky skin, <strong>thick nails</strong>, ulcers, <strong>dependent rubor</strong>, minimal edema. Collaterals form as a natural bypass.</p>"),
      S("workup", "Diagnosis", "<p><strong>ABI</strong> at the bedside with Doppler after 15–30 min rest: <strong>ankle SBP ÷ brachial SBP</strong> (higher arm). It confirms PAD but does not alone decide revascularization.</p>" + abi + Tbl(["Test", "Use"], [
        ["Exercise treadmill ABI", "Symptoms but normal/borderline ABI"],
        ["Toe-brachial index", "ABI &gt; 1.4 or unclear"],
        ["<strong>Arterial duplex US</strong>", "Locate lesion; calcified vessels; avoid contrast; graft surveillance"],
        ["<strong>CTA</strong>/MRA", "Anatomy for revascularization planning; aortoiliac disease"],
        ["Catheter angiography", "Invasive; allows immediate endovascular treatment"]
      ]) + "<p>Screen asymptomatic patients with abnormal pulses, age ≥ 65, or 50–64 with risk factors.</p>"),
      S("treatment", "Treatment", Tbl(["Therapy", "Point"], [
        ["Risk factors", "<strong>Smoking cessation</strong>, <strong>high-intensity statin</strong>, BP and DM control, diet, weight loss"],
        ["<strong>Structured exercise therapy</strong>", "Improves symptoms"],
        ["<strong>Aspirin 81 mg</strong> or <strong>clopidogrel 75 mg</strong>", "Single antiplatelet: <strong>Class I symptomatic</strong>, IIa asymptomatic"],
        ["Rivaroxaban + aspirin", "Symptomatic PAD / after revascularization; ↓ CV and limb events; watch bleeding"],
        ["<strong>Cilostazol</strong>", "↑ Walking distance; <strong>contraindicated in HF</strong>"],
        ["Percutaneous stent", "Short stenosis"],
        ["<strong>Bypass</strong>", "Long stenosis, <strong>severe claudication (ABI &lt; 0.4) refractory</strong> to meds, ALI, Leriche ED"]
      ]) + HY("Claudication + ABI ≤ 0.90 = PAD → quit smoking, statin, aspirin, walking program, cilostazol (not in HF)."))
    ], [
      Q("presentation", "A 66-year-old smoker gets calf cramping after two blocks that goes away when he stands still. Diagnosis?", ["Intermittent claudication from PAD", "Lumbar spinal stenosis", "DVT", "Baker cyst"], 0, "Exercise-induced, rest-relieved muscle pain = claudication."),
      Q("workup", "What ABI confirms PAD?", ["0.90 or less", "1.0 to 1.4", "Greater than 1.4", "0.95"], 0, "ABI ≤ 0.90 is abnormal and confirms PAD."),
      Q("workup", "A diabetic with CKD has an ABI of 1.6. What does it mean and what next?", ["Non-compressible calcified arteries; get a toe-brachial index", "Normal; no further testing", "Severe PAD; amputate", "DVT; get a duplex"], 0, "ABI > 1.4 = calcified vessels; TBI clarifies."),
      Q("workup", "How is the ABI calculated?", ["Ankle systolic pressure divided by brachial systolic pressure", "Brachial divided by ankle", "Ankle diastolic divided by brachial diastolic", "Toe pressure minus arm pressure"], 0, "Ankle SBP ÷ brachial SBP."),
      Q("treatment", "Which claudication drug is contraindicated in heart failure?", ["Cilostazol", "Aspirin", "Clopidogrel", "Atorvastatin"], 0, "Cilostazol increases mortality in CHF."),
      Q("treatment", "Which therapy reliably improves claudication symptoms?", ["Structured exercise therapy", "Bed rest", "Compression stockings", "Leg elevation"], 0, "Structured exercise improves symptoms."),
      Q("presentation", "Which skin finding fits severe PAD?", ["Shiny hairless skin with dependent rubor", "Brown hemosiderin staining at the ankle", "Pitting edema to the knee", "Varicosities"], 0, "Arterial insufficiency: shiny, hairless, cool skin, thick nails, dependent rubor; edema is mild."),
      Q("overview", "A PAD patient has foot rest pain and a nonhealing toe ulcer for 3 weeks. Category?", ["Chronic limb-threatening ischemia", "Asymptomatic PAD", "Acute limb ischemia", "Chronic symptomatic PAD"], 0, "Rest pain, nonhealing wounds or gangrene > 2 weeks = CLTI."),
      Q("overview", "What is the most important prognostic concern in PAD?", ["High risk of MI and stroke", "Amputation in most patients", "Venous ulcers", "Pulmonary embolism"], 0, "PAD confers a high 10-year CVD risk; ~20% have a CV event."),
      Q("workup", "A patient has classic claudication but a resting ABI of 0.98. Next test?", ["Exercise treadmill ABI", "No further testing", "CTA immediately", "Venous duplex"], 0, "Normal or borderline ABI with exertional symptoms → exercise testing."),
      Q("treatment", "Which PAD patients warrant arterial bypass?", ["Long stenosis or severe refractory claudication with ABI under 0.4", "Any ABI under 0.9", "All asymptomatic patients", "Only smokers"], 0, "Bypass for long lesions, severe refractory claudication, ALI or Leriche ED."),
      Q("workup", "Which imaging is used to map arteries before revascularization?", ["CT angiography", "Plain X-ray", "Venous duplex", "Echocardiogram"], 0, "CTA gives detailed anatomy for intervention planning.")
    ]),

    D("vas1-pseudoclaudication", "Pseudoclaudication (Lumbar Spinal Stenosis)", "PAD mimic: leg pain on standing, relieved by sitting or bending forward; normal pulses.", [
      S("overview", "Claudication vs pseudoclaudication", Tbl(["", "PAD claudication", "Pseudoclaudication"], [
        ["Trigger", "Walking a set distance", "<strong>Standing erect</strong> or walking"],
        ["Relief", "<strong>Standing still</strong> (rest)", "<strong>Sitting</strong> or <strong>flexing forward</strong> (shopping cart sign)"],
        ["Symptoms", "Cramp in muscle distal to lesion", "Pain, weakness, <strong>tingling</strong>"],
        ["Pulses", "Weak", "Normal (standard teaching)"]
      ]) + "<p><strong>No pain with sitting</strong> was the most specific finding. Not caused by PAD.</p>" + HY("Leaning on a shopping cart helps = spinal stenosis.")),
      S("workup", "Calf pain differential", "<p>Can't miss: <strong>claudication (PAD), ischemic leg, DVT</strong>. Others: muscle strain, Baker cyst, superficial thrombophlebitis, varicose veins, Achilles rupture, myositis, vasculitis, spinal stenosis.</p>")
    ], [
      Q("overview", "A 70-year-old's legs tingle and ache when he stands to wash dishes; it eases when he sits or leans on a cart. Pulses are normal. Diagnosis?", ["Pseudoclaudication from lumbar spinal stenosis", "PAD claudication", "DVT", "Acute limb ischemia"], 0, "Pain on standing, relief with sitting or flexion."),
      Q("overview", "Most specific finding for pseudoclaudication?", ["No pain while sitting", "Pain after a set walking distance", "Absent pulses", "Shiny hairless skin"], 0, "No pain with sitting was the most specific finding."),
      Q("overview", "What relieves PAD claudication but NOT pseudoclaudication?", ["Simply standing still", "Sitting down", "Bending forward", "Lying flat"], 0, "Claudication resolves with rest even standing; spinal stenosis needs flexion or sitting."),
      Q("workup", "Which three causes of calf pain can't be missed?", ["PAD claudication, ischemic leg, DVT", "Strain, Baker cyst, varicose veins", "Myositis, vasculitis, tendon rupture", "Gout, cellulitis, cramps"], 0, "The lecture's can't-miss list."),
      Q("overview", "Is pseudoclaudication caused by PAD?", ["No, it is a spinal cause that mimics PAD", "Yes, by small vessel PAD", "Yes, by aortoiliac disease", "Only in diabetics"], 0, "Not a condition caused by PAD; important to differentiate."),
      Q("overview", "What posture makes pseudoclaudication worse?", ["Standing erect", "Sitting", "Leaning forward", "Lying on the side"], 0, "Exacerbated by standing erect.")
    ]),

    D("vas1-leriche", "Leriche Syndrome (Aortoiliac Occlusive Disease)", "Aortoiliac atherosclerosis: buttock/thigh/hip claudication, impotence, weak femoral pulses; aortoiliac bypass.", [
      S("overview", "Features", Tbl(["Feature", ""], [
        ["Lesion", "Severe atherosclerosis of the <strong>distal aorta and iliac arteries</strong>"],
        ["Claudication", "<strong>Buttock, thigh, hip</strong>"],
        ["Sexual", "<strong>Erectile dysfunction</strong>"],
        ["Exam", "<strong>Poor femoral pulses</strong>"],
        ["Treatment", "<strong>Aortoiliac (aortobifemoral) bypass graft</strong>"]
      ]) + Mn("Leriche triad", "Buttock claudication + impotence + absent femoral pulses."))
    ], [
      Q("overview", "A 58-year-old smoker has buttock and thigh claudication, erectile dysfunction and weak femoral pulses. Diagnosis?", ["Leriche syndrome", "Popliteal entrapment", "Spinal stenosis", "Buerger disease"], 0, "Aortoiliac occlusive disease."),
      Q("overview", "Where is the blockage in Leriche syndrome?", ["Distal aorta and iliac arteries", "Superficial femoral artery", "Tibial arteries", "Renal arteries"], 0, "Severe atherosclerosis of the abdominal aorta and iliacs."),
      Q("overview", "Treatment for Leriche syndrome?", ["Aortoiliac bypass graft", "Cilostazol alone", "Warfarin", "Sympathectomy"], 0, "Aortoiliac bypass graft; bypass is also indicated for vasculogenic ED."),
      Q("overview", "Where is the claudication in Leriche syndrome?", ["Buttock, thigh and hip", "Calf only", "Foot arch", "Arms"], 0, "Proximal lesion = proximal claudication."),
      Q("overview", "Which pulse is weak in Leriche syndrome?", ["Femoral", "Radial", "Carotid", "Only dorsalis pedis with normal femorals"], 0, "Poor femoral pulses."),
      Q("overview", "Which sexual symptom is part of Leriche syndrome?", ["Erectile dysfunction", "Priapism", "Infertility", "Gynecomastia"], 0, "Often associated with erectile dysfunction.")
    ]),

    D("vas1-ali", "Acute Limb Ischemia", "Sudden arterial occlusion (embolus from AF or thrombosis): 6 Ps; vascular surgery now, IV heparin, revascularize within hours.", [
      S("overview", "Causes", Tbl(["Mechanism", "Sources"], [
        ["<strong>Embolism</strong>", "<strong>AF atrial thrombus</strong>, LV mural thrombus, valve thrombus, septic emboli, plaque rupture"],
        ["<strong>Thrombosis in situ</strong>", "Clot on an atherosclerotic plaque"]
      ])),
      S("presentation", "Presentation", "<p><strong>Sudden</strong>, constant, worsening pain (vs PAD: gradual, exertional, relieved by rest).</p>" + Tbl(["6 Ps", ""], [
        ["Pain", "First"], ["Pallor", "Pale or cyanotic, mottled"], ["Pulselessness", "Absent distal pulses"],
        ["Poikilothermia", "Cold"], ["Paresthesias", "Sensory loss"], ["<strong>Paralysis</strong>", "<strong>Late</strong>, bad sign"]
      ])),
      S("workup", "Work-up", "<p><strong>Vascular surgery consult first</strong>, in parallel with tests. Doppler for pulses, <strong>CTA with runoff</strong>. ABI is often impractical. Labs: <strong>lactate, CK</strong>, CBC, BMP, coags. <strong>EKG for AF</strong>.</p>"),
      S("treatment", "Treatment", "<p><strong>Surgical emergency</strong>: <strong>IV unfractionated heparin</strong> + <strong>urgent revascularization</strong> (intra-arterial thrombolysis, open or percutaneous embolectomy). Limb can be unsalvageable in <strong>4–6 hours</strong>.</p>" + HY("Sudden cold, pale, pulseless leg + AF = embolus → heparin + vascular surgery now."))
    ], [
      Q("presentation", "A 72-year-old with AF not on anticoagulation has 2 hours of sudden severe right leg pain; the foot is cold, pale and pulseless. Diagnosis?", ["Acute limb ischemia from embolism", "PAD claudication", "DVT", "Cellulitis"], 0, "Sudden 6 Ps with an embolic source."),
      Q("treatment", "First medication for acute limb ischemia?", ["IV unfractionated heparin", "Oral aspirin", "Cilostazol", "Warfarin"], 0, "Anticoagulate with IV UFH while arranging revascularization."),
      Q("presentation", "Which of the 6 Ps is a late, ominous finding?", ["Paralysis", "Pain", "Pallor", "Pulselessness"], 0, "Paralysis is a later finding."),
      Q("workup", "First step in suspected acute limb ischemia?", ["Vascular surgery consult", "ABI", "Outpatient duplex", "Exercise test"], 0, "Consult vascular surgery immediately, in unison with other studies."),
      Q("treatment", "How quickly can an acutely ischemic limb become unsalvageable?", ["4-6 hours", "4-6 days", "4-6 weeks", "24-48 hours always"], 0, "As little as 4-6 hours, though not absolute."),
      Q("workup", "Why get an EKG in acute limb ischemia?", ["To look for atrial fibrillation as the embolic source", "To check QT before heparin", "To rule out pericarditis", "It's not needed"], 0, "AF is a classic embolic source."),
      Q("workup", "Which labs reflect muscle injury in acute limb ischemia?", ["Lactate and CK", "Troponin and BNP", "Lipase and amylase", "TSH and free T4"], 0, "Lactic acid and CK are ordered."),
      Q("overview", "What are the two mechanisms of acute limb ischemia?", ["Embolism and thrombosis in situ", "Vasospasm and inflammation", "Venous clot and compression", "Infection and trauma only"], 0, "Arterial embolism or thrombosis of atherosclerotic plaque.")
    ]),

    D("vas1-dry-gangrene", "Dry Gangrene", "Sterile ischemic necrosis: dry black eschar with a clear line of demarcation; not an emergency.", [
      S("overview", "What it is", "<p><strong>Sterile</strong> ischemic necrosis from prolonged severe loss of arterial flow, <strong>without infection</strong>. Causes: <strong>PAD</strong>, vasculitis, <strong>frostbite</strong>.</p><p><strong>Dry, black eschar</strong> starting distally with a <strong>clear demarcation</strong> between living and dead tissue; <strong>autoamputation</strong> if not removed.</p>"),
      S("treatment", "Treatment", "<p>Vascular surgery consult; revascularize when indicated (doesn't revive dead tissue); amputation/debridement when indicated. <strong>Not a surgical emergency.</strong> <strong>No antibiotics</strong> unless infection is suspected. Manage the underlying disease.</p>" + HY("Dry = dead, dark, demarcated, no drama (not emergent, no antibiotics)."))
    ], [
      Q("overview", "A PAD patient's toe is black, dry and shriveled with a sharp line between dead and healthy tissue. Diagnosis?", ["Dry gangrene", "Wet gangrene", "Gas gangrene", "Frostnip"], 0, "Dry, black, clearly demarcated eschar."),
      Q("treatment", "Are antibiotics needed for dry gangrene?", ["Not unless infection is suspected", "Always, IV", "Always, oral", "Only clindamycin"], 0, "Dry gangrene is sterile."),
      Q("treatment", "Is dry gangrene a surgical emergency?", ["No", "Yes, operate within 1 hour", "Yes, it causes sepsis", "Only in diabetics"], 0, "Not a surgical emergency, unlike wet or gas gangrene."),
      Q("overview", "What happens to dry gangrene if it isn't removed?", ["Autoamputation", "Full recovery", "Conversion to DVT", "Spread to the heart"], 0, "Autoamputation will eventually occur."),
      Q("overview", "Which is a cause of dry gangrene?", ["Frostbite", "Clostridium perfringens", "Deep contaminated wound", "Recent bowel surgery"], 0, "PAD, vasculitis and cold injury."),
      Q("treatment", "Will revascularization bring dead gangrenous tissue back?", ["No", "Yes, always", "Yes, if done within a week", "Only with hyperbaric oxygen"], 0, "Revascularization does not restore what is dead.")
    ]),

    D("vas1-wet-gangrene", "Wet Gangrene", "Necrosis plus bacterial infection: swollen, moist, foul, blistering, sepsis risk; surgical emergency.", [
      S("overview", "What it is", "<p>Tissue necrosis <strong>complicated by bacterial infection</strong>, often in already ischemic tissue: inflammation, edema, rapid destruction. Risks: <strong>PAD, DM</strong>, ALI, trauma, burns, severe soft-tissue infection.</p>" + Tbl(["Dry gangrene", "Wet gangrene"], [
        ["Starts ischemic, not infected", "Starts/linked to infection"],
        ["Dry, black, well demarcated", "<strong>Moist, swollen, blistering</strong>, drainage, <strong>foul odor</strong>"],
        ["Surgery, not emergent", "<strong>Surgical emergency</strong>, sepsis risk"]
      ])),
      S("treatment", "Diagnosis & treatment", "<p>Clinical diagnosis: <strong>urgent surgical consult</strong>. CBC, CMP, lactate, CRP/ESR, <strong>blood cultures</strong>, deep tissue cultures; X-ray/CT for gas. Normal labs don't exclude it. <strong>Source control</strong> (debridement/amputation) + IV antibiotics.</p>")
    ], [
      Q("overview", "A diabetic's foot is swollen, moist, blistered and foul-smelling with spreading redness. Diagnosis?", ["Wet gangrene", "Dry gangrene", "Raynaud's", "Venous stasis"], 0, "Necrosis with infection: moist, swollen, foul."),
      Q("treatment", "Management of wet gangrene?", ["Urgent surgical source control and IV antibiotics", "Observation", "Leg elevation", "Oral antibiotics at home"], 0, "Wet gangrene is a surgical emergency."),
      Q("overview", "What separates wet from dry gangrene?", ["Superimposed bacterial infection", "Location on the foot", "Patient age", "Color only"], 0, "Wet gangrene is necrosis complicated by infection."),
      Q("overview", "Which complication makes wet gangrene dangerous?", ["Sepsis", "Autoamputation", "DVT", "Varicose veins"], 0, "Rapid progression with potential for sepsis."),
      Q("treatment", "A patient with suspected wet gangrene has a normal WBC. Does this rule it out?", ["No, normal labs don't exclude it", "Yes", "Only if CRP is normal too", "Only in diabetics"], 0, "Normal labs do not exclude."),
      Q("overview", "Which conditions predispose to wet gangrene?", ["PAD and diabetes", "Hypothyroidism", "Asthma", "Hypertension alone"], 0, "PAD, DM, ALI, trauma, burns, soft-tissue infection.")
    ]),

    D("vas1-gas-gangrene", "Gas Gangrene (Clostridial Myonecrosis)", "Clostridium perfringens toxins destroy muscle: pain out of proportion, crepitus, dishwater drainage; debride + vanc/Zosyn/clindamycin.", [
      S("overview", "What it is", "<p>Rapidly progressive, <strong>toxin-mediated</strong> skeletal muscle necrosis, most often <strong>Clostridium perfringens</strong>; progresses to shock and multiorgan failure. Risks: <strong>deep contaminated wounds</strong>, <strong>recent GI/GU surgery</strong>, injection drug use, spontaneous.</p>"),
      S("presentation", "Presentation", Tbl(["Early", "Late"], [
        ["<strong>Pain out of proportion</strong> to exam", "<strong>Bronze/purple</strong> dusky skin"],
        ["Rapid swelling", "Hemorrhagic <strong>bullae</strong>"],
        ["Skin normal or pale", "<strong>Crepitus</strong> (gas)"],
        ["<strong>Tachycardia out of proportion to fever</strong>", "Thin <strong>\"dishwater\"</strong> drainage, foul"],
        ["", "Hypotension, shock, MODS"]
      ]) + "<p>Mortality <strong>80–90% untreated</strong>, 10–25% treated.</p>"),
      S("treatment", "Treatment", "<p><strong>Immediate surgical exploration and debridement</strong> (don't delay for imaging; X-ray/CT may show gas). Empiric <strong>vancomycin + piperacillin-tazobactam + clindamycin</strong>; confirmed: <strong>IV penicillin G + clindamycin</strong>. <strong>Clindamycin suppresses toxin production</strong>. IV fluids, tetanus prophylaxis.</p>" + HY("Pain out of proportion + crepitus after trauma or surgery = gas gangrene → OR now + clindamycin."))
    ], [
      Q("presentation", "Two days after a deep farm injury, a man has severe leg pain out of proportion to exam, crepitus, bronze skin and dishwater drainage. Diagnosis?", ["Clostridial myonecrosis (gas gangrene)", "Dry gangrene", "Cellulitis", "DVT"], 0, "Classic gas gangrene."),
      Q("overview", "Most common organism in gas gangrene?", ["Clostridium perfringens", "Staph aureus", "Strep pyogenes", "Pseudomonas"], 0, "C. perfringens."),
      Q("treatment", "Why is clindamycin added for gas gangrene?", ["It inhibits bacterial toxin production", "It covers MRSA best", "It is the only drug that reaches muscle", "It prevents tetanus"], 0, "Clindamycin suppresses clostridial toxin production."),
      Q("treatment", "Empiric antibiotics for suspected gas gangrene?", ["Vancomycin + piperacillin-tazobactam + clindamycin", "Cephalexin alone", "Doxycycline", "Amoxicillin"], 0, "Broad coverage plus clindamycin; then PCN G + clindamycin once confirmed."),
      Q("treatment", "Most important treatment for gas gangrene?", ["Immediate surgical exploration and debridement", "Wait for CT results", "Hyperbaric oxygen first", "Antibiotics alone"], 0, "Surgical exploration must not be delayed."),
      Q("presentation", "Which vital sign clue suggests clostridial infection?", ["Tachycardia out of proportion to fever", "Bradycardia", "Hypertension", "Hypothermia"], 0, "Low-grade fever with disproportionate tachycardia."),
      Q("overview", "Mortality of untreated gas gangrene?", ["80-90%", "1-2%", "10%", "50%"], 0, "80-90% untreated; 10-25% treated.")
    ]),

    D("vas1-aaa", "Abdominal Aortic Aneurysm (AAA)", "Aorta ≥ 3 cm in older male smokers: usually silent; US screening and surveillance; repair at 5.5 cm (men) / 5.0 cm (women).", [
      S("overview", "Definitions & risk", "<p>Aneurysm = dilation <strong>≥ 1.5x</strong> normal diameter; AAA <strong>≥ 3 cm</strong>.</p>" + Tbl(["Type", "Feature"], [
        ["True", "All wall layers, wall intact"],
        ["Pseudoaneurysm", "Wall disrupted, blood held by surrounding tissue (catheter sites, trauma, anastomoses)"],
        ["Mycotic", "Infection weakens the wall"]
      ]) + "<p>AAA risk: <strong>smoking (strongest modifiable)</strong>, age, <strong>male</strong>, FH, atherosclerosis, HTN. Smokers grow faster; diabetics slower. Grows ~1–4 mm/yr. TAA: age, HTN, <strong>bicuspid valve, Marfan, Loeys-Dietz, vascular EDS, Turner</strong>, GCA/Takayasu.</p>"),
      S("presentation", "Presentation", "<p>Usually <strong>asymptomatic</strong>, found on screening. Exam: <strong>pulsatile, expansile, non-tender mass</strong> (often felt once &gt; 5.5 cm), especially <strong>below the umbilicus</strong>; bruit. Expansion: abdominal discomfort, <strong>iliac aneurysm compressing the ureter</strong> → hydronephrosis/flank pain, mural thrombus → leg or mesenteric emboli.</p><p><strong>Rupture</strong>: abdominal/back pain + <strong>hypotension</strong>; think of it in an <strong>older patient with syncope and abdominal pain</strong>. Mortality after rupture <strong>70–80%</strong>.</p>"),
      S("workup", "Screening & surveillance", "<p><strong>Ultrasound</strong> screens and monitors. <strong>CTA</strong>: anatomy/planning, thoracic aneurysms, symptomatic but stable patients in the ED.</p>" + Tbl(["One-time US screening", ""], [
        ["<strong>Men ≥ 65 who ever smoked</strong>", "Yes"],
        ["Men and women 65–75 with a first-degree relative with AAA", "Yes"],
        ["Women ≥ 65 who smoked", "Reasonable (ACC/AHA)"],
        ["Men 65–75 never smoked", "Selective"]
      ]) + Tbl(["Diameter", "Repeat US"], [
        ["3.0–3.9 cm", "Every <strong>3 years</strong>"],
        ["4.0–4.9 (men) / 4.0–4.4 (women)", "Every <strong>12 months</strong>"],
        ["5.0–5.4 (men) / 4.5–4.9 (women)", "Every <strong>6 months</strong>"]
      ])),
      S("treatment", "Treatment", Tbl(["Situation", "Plan"], [
        ["Small (&lt; 5.5 men, &lt; 5.0 women)", "<strong>Stop smoking</strong>, exercise, statin, BP control (BB/ARB don't slow growth), <strong>avoid fluoroquinolones</strong>"],
        ["<strong>≥ 5.5 cm men / ≥ 5.0 cm women</strong>, growth &gt; 1 cm/yr, symptoms, iliac &gt; 3 cm", "<strong>Repair</strong>: open (3–5% mortality) or <strong>EVAR</strong> (~1%)"],
        ["Ascending aorta", "Repair &gt; 4.5 cm Marfan, &gt; 5 cm others; descending thoracic &gt; 5 cm"],
        ["<strong>Rupture</strong>", "Aggressive resuscitation with blood → <strong>emergent surgery</strong>"]
      ]) + HY("Old male smoker + syncope + abdominal/back pain + low BP = ruptured AAA."))
    ], [
      Q("presentation", "A 75-year-old male smoker collapses, then has abdominal and back pain with BP 95/60. Diagnosis to exclude first?", ["Ruptured abdominal aortic aneurysm", "Renal colic", "Vasovagal syncope", "Diverticulitis"], 0, "Older patient with syncope and abdominal pain: suspect rupture."),
      Q("workup", "Which 66-year-old should get one-time AAA ultrasound screening?", ["A man who ever smoked", "A woman who never smoked with no family history", "A man aged 50", "Anyone with HTN at 40"], 0, "Men ≥ 65 who have ever smoked."),
      Q("treatment", "At what diameter is an asymptomatic AAA repaired in a man?", ["5.5 cm", "3.0 cm", "4.0 cm", "7.0 cm"], 0, "≥ 5.5 cm in men, ≥ 5.0 cm in women."),
      Q("treatment", "At what diameter is an asymptomatic AAA repaired in a woman?", ["5.0 cm", "5.5 cm", "4.0 cm", "6.0 cm"], 0, "Women: ≥ 5.0 cm."),
      Q("workup", "A 3.4 cm AAA is found. How often is it rechecked?", ["Ultrasound every 3 years", "Every 6 months", "Every month", "Never"], 0, "3.0-3.9 cm: US every 3 years."),
      Q("overview", "Strongest modifiable risk factor for AAA?", ["Smoking", "Diabetes", "Obesity", "Hyperlipidemia"], 0, "Smoking; diabetics actually have slower growth."),
      Q("treatment", "Which antibiotic class should AAA patients avoid if possible?", ["Fluoroquinolones", "Penicillins", "Macrolides", "Cephalosporins"], 0, "Avoidance of fluoroquinolones if able."),
      Q("treatment", "Which repair has the lower operative mortality for AAA?", ["EVAR (about 1%)", "Open repair (about 10%)", "They are identical", "Neither is used"], 0, "EVAR ~1% vs open 3-5%."),
      Q("overview", "What defines a pseudoaneurysm?", ["Disrupted arterial wall with blood contained by surrounding tissue", "Dilation of all three layers", "Infected wall", "A bulge under 3 cm"], 0, "False aneurysm: often at catheterization sites, trauma or anastomoses."),
      Q("presentation", "Where is a palpable pulsatile mass concerning for AAA?", ["Below the umbilicus", "Above the umbilicus in a thin patient", "In the right upper quadrant", "In the groin only"], 0, "Feeling the aorta is normal in thin people, but not below the umbilicus."),
      Q("workup", "Imaging for a symptomatic but hemodynamically stable patient with suspected AAA rupture?", ["CTA", "Plain abdominal film", "MRA", "No imaging; observe"], 0, "CTA is preferred in stable symptomatic patients."),
      Q("presentation", "An iliac aneurysm can cause which urologic problem?", ["Ipsilateral hydronephrosis from ureter compression", "Kidney stones", "Bladder cancer", "Urinary retention"], 0, "Compression of the ureter causes hydronephrosis and flank pain.")
    ]),

    D("vas1-dissection", "Aortic Dissection", "Intimal tear with a false lumen in hypertensive patients: tearing pain to the back; CTA; IV beta blocker first; Type A to surgery.", [
      S("overview", "What it is & risk factors", "<p>Acute aortic syndrome: <strong>intimal tear</strong> lets blood into a <strong>false lumen</strong>. Also intramural hematoma (vasa vasorum rupture), penetrating ulcer.</p><p>Risk: <strong>HTN (most important)</strong>, atherosclerosis, <strong>Marfan/Ehlers-Danlos</strong>, <strong>bicuspid valve</strong>, existing aneurysm, FH, prior cardiac/aortic surgery; triggers: pregnancy/postpartum, heavy lifting, <strong>cocaine/meth</strong>.</p>" + Tbl(["Stanford", "DeBakey", "Involves", "Treatment"], [
        ["<strong>A (proximal)</strong>", "I, II", "<strong>Ascending aorta</strong> (~2x as common)", "<strong>Emergent surgery</strong> + anti-impulse therapy; mortality <strong>1–2%/hour</strong>"],
        ["<strong>B (distal)</strong>", "III", "Distal to left subclavian", "<strong>Medical</strong> if uncomplicated; intervene if rupture, malperfusion, extension, refractory pain/HTN"]
      ])),
      S("presentation", "Presentation", "<p>Sudden <strong>sharp, tearing</strong> anterior chest pain (Type A) or <strong>back pain between the scapulae</strong> (Type B); painless is rare. Syncope 5–10%, stroke, abdominal pain.</p>" + Tbl(["Finding", "Cause"], [
        ["<strong>Pulse deficit / arm BP difference &gt; 20</strong>", "Branch involvement (15–20%)"],
        ["Diastolic murmur", "<strong>Aortic regurgitation</strong>"],
        ["Beck's triad", "Hemopericardium → <strong>tamponade</strong>"],
        ["Inferior MI", "Dissection into a coronary (standard teaching: usually RCA)"],
        ["Stroke, paraplegia, Horner's", "Carotid/spinal/sympathetic involvement"]
      ])),
      S("workup", "Diagnosis", "<p><strong>CTA chest/abdomen/pelvis</strong> = preferred. CXR: <strong>widened mediastinum</strong> (normal doesn't exclude). <strong>TEE</strong> for unstable patients or when CTA isn't possible. MRA not practical emergently.</p>"),
      S("treatment", "Management", "<ol class=\"concept-chain\"><li>ICU, pain control</li><li><strong>IV esmolol or labetalol</strong> first: HR <strong>60–80</strong> (anti-impulse; lowers shear stress)</li><li>BB contraindicated → verapamil/diltiazem</li><li>Then if SBP &gt; 120: add <strong>nitroprusside</strong> (or nicardipine) to SBP <strong>100–120</strong></li></ol>" + HY("Beta blocker BEFORE vasodilator: a vasodilator alone causes reflex tachycardia and more shear.") + "<p>Long term: BP control with a BB; CT/MRI at 1, 6, 12 months, then yearly.</p>")
    ], [
      Q("presentation", "A 60-year-old hypertensive man has sudden tearing chest pain to the back between his shoulder blades and a 30 mmHg arm BP difference. Diagnosis?", ["Aortic dissection", "STEMI", "Pericarditis", "Pulmonary embolism"], 0, "Tearing pain + arm BP difference > 20."),
      Q("treatment", "First drug for acute aortic dissection?", ["IV esmolol or labetalol", "Nitroprusside", "Hydralazine", "Heparin"], 0, "Beta blocker first for HR 60-80."),
      Q("treatment", "Why must a vasodilator never be started before the beta blocker in dissection?", ["Reflex tachycardia raises shear stress", "It causes bradycardia", "It worsens hypokalemia", "It is ineffective"], 0, "HR control is key; vasodilators alone cause reflex tachycardia."),
      Q("treatment", "Target HR and SBP in acute aortic dissection?", ["HR 60-80 and SBP 100-120", "HR 100 and SBP 160", "HR 40 and SBP 80", "HR 90 and SBP 140"], 0, "Goals per the lecture."),
      Q("treatment", "Management of a Stanford Type A dissection?", ["Emergent surgical repair plus anti-impulse therapy", "Medical therapy alone", "Thrombolysis", "Outpatient follow-up"], 0, "Type A involves the ascending aorta: surgery."),
      Q("treatment", "Management of an uncomplicated Stanford Type B dissection?", ["Medical anti-impulse therapy", "Emergent open repair", "tPA", "Pericardiocentesis"], 0, "Uncomplicated Type B: medical therapy."),
      Q("workup", "Preferred imaging for a stable patient with suspected dissection?", ["CTA chest, abdomen and pelvis", "Chest X-ray only", "MRA", "D-dimer only"], 0, "CTA is preferred; TEE if unstable."),
      Q("overview", "Most important risk factor for aortic dissection?", ["Hypertension", "Diabetes", "Hyperlipidemia", "Smoking alone"], 0, "HTN: stress on the aortic wall."),
      Q("presentation", "A dissection patient develops a new diastolic murmur. Why?", ["Aortic regurgitation from root involvement", "Mitral stenosis", "Pericardial rub", "VSD"], 0, "Dissection back toward the heart causes AR."),
      Q("overview", "How fast does mortality rise in untreated Type A dissection?", ["1-2% per hour early on", "1% per year", "Not at all", "50% per minute"], 0, "Historically 1-2% per hour."),
      Q("workup", "Which TEE use fits suspected dissection?", ["An unstable patient who can't go to CT", "Routine screening", "Outpatient surveillance", "Ruling out PAD"], 0, "TEE helps in hemodynamically unstable patients.")
    ]),

    D("vas1-buerger", "Buerger Disease (Thromboangiitis Obliterans)", "Non-atherosclerotic inflammatory occlusion of small/medium vessels in young heavy smokers; corkscrew collaterals; quitting is the only cure.", [
      S("overview", "What it is", "<p><strong>Non-atherosclerotic</strong> segmental inflammation and thrombosis of <strong>small to medium arteries and veins</strong> → occlusion, ulcers, dry gangrene. <strong>Heavy tobacco use</strong>; <strong>men &lt; 45–50</strong>; 2/3 have severe periodontal disease.</p>"),
      S("presentation", "Presentation", "<p>Early: <strong>superficial thrombophlebitis</strong>, <strong>cold sensitivity</strong>. Claudication of <strong>feet, legs, arms and hands</strong>; distal digit ischemia: pale/dusky, painful ulcers, rest pain, eschar, gangrene, autoamputation.</p>"),
      S("workup", "Diagnosis", "<p><strong>Positive Allen test</strong> in a young smoker with leg ischemia. ABI may be normal (segmental); toe/finger indices help. Labs to exclude mimics: ESR/CRP, rheum panel, hypercoagulable panel, tox screen. <strong>CTA</strong>: no atherosclerosis, no embolic source, segmental small-vessel occlusion, <strong>corkscrew collaterals</strong>.</p><p>Criteria: age &lt; 50, tobacco, distal ischemia, typical angiogram, other causes excluded (autoimmune, thrombophilia, DM, embolic).</p>"),
      S("treatment", "Treatment", "<p><strong>Smoking cessation is the only way to halt it.</strong> Vasodilators (CCB) investigational; revascularization limited by small vessels; amputation sometimes.</p>" + HY("Young heavy smoker + digit ulcers + corkscrew collaterals = Buerger → stop smoking."))
    ], [
      Q("overview", "A 32-year-old man who smokes 2 packs a day has painful fingertip ulcers, cold hands and a positive Allen test. Diagnosis?", ["Thromboangiitis obliterans (Buerger disease)", "PAD", "Raynaud's phenomenon only", "Takayasu arteritis"], 0, "Young heavy smoker with distal ischemia."),
      Q("workup", "Classic angiographic finding in Buerger disease?", ["Corkscrew collaterals around segmental occlusions", "Diffuse atherosclerotic plaque", "Aortic aneurysm", "String of beads"], 0, "Corkscrew collaterals are classic."),
      Q("overview", "Is Buerger disease atherosclerotic?", ["No, it is inflammatory", "Yes, in large arteries", "Yes, only in diabetics", "Only in the aorta"], 0, "Non-atherosclerotic disease of small to medium vessels."),
      Q("presentation", "Which early manifestation is typical of Buerger disease?", ["Superficial thrombophlebitis and cold sensitivity", "Tearing back pain", "Pulsatile abdominal mass", "Strawberry tongue"], 0, "Early signs include superficial thrombophlebitis and cold sensitivity."),
      Q("workup", "Why can the ABI be normal in Buerger disease?", ["The disease is segmental and distal", "It only affects veins", "It raises BP", "It calcifies arteries"], 0, "Segmental disease: toe and finger indices may show impaired perfusion."),
      Q("overview", "Which oral finding is common in Buerger patients?", ["Severe periodontal disease", "Strawberry tongue", "Oral ulcers", "Gingival hyperplasia"], 0, "Two-thirds have severe periodontal disease."),
      Q("workup", "Which age criterion is part of the Buerger clinical diagnosis?", ["Under 50 years", "Over 65 years", "Under 5 years", "Any age"], 0, "Age < 50, tobacco use, distal ischemia, typical angiogram, exclusions.")
    ]),

    D("vas1-raynaud", "Raynaud's Phenomenon", "Cold- or stress-triggered digital vasospasm: white → blue → red; primary in young women, secondary with CTD; gloves + CCB.", [
      S("overview", "Primary vs secondary", Tbl(["", "Primary", "Secondary"], [
        ["Sex", "<strong>Female</strong>", "Either"],
        ["Onset", "<strong>15–30</strong>", "<strong>&gt; 30</strong>"],
        ["Severity", "Mild", "Severe (ulcers, sclerodactyly)"],
        ["Edema/arthritis", "None", "May occur"],
        ["Autoantibodies", "Absent", "May be +"],
        ["Causes", "None", "<strong>Scleroderma (CREST)</strong>, polymyositis, RA, SLE, <strong>vibration (jackhammer)</strong>, Buerger, chemo, amphetamines"]
      ])),
      S("presentation", "Presentation", "<p>Episodes in fingers, toes, nose, ears triggered by <strong>cold or emotion</strong>: <strong>WHITE (pallor) → BLUE (cyanosis) → RED (reactive hyperemia)</strong>. Exam normal between episodes.</p>" + Mn("Color order", "White, Blue, Red: like a flag drying in the cold.")),
      S("treatment", "Treatment", "<p>Avoid triggers (<strong>gloves</strong>, warmth) + <strong>calcium channel blocker</strong> (vasodilation, e.g., nifedipine).</p>")
    ], [
      Q("presentation", "A 21-year-old woman's fingers turn white, then blue, then red in cold air. Autoantibodies are negative. Diagnosis?", ["Primary Raynaud's phenomenon", "Buerger disease", "Scleroderma", "Acute limb ischemia"], 0, "Young woman, mild, no autoantibodies: primary."),
      Q("presentation", "What is the color sequence in Raynaud's?", ["White, blue, red", "Red, white, blue", "Blue, red, white", "Black, white, red"], 0, "Pallor → cyanosis → reactive hyperemia."),
      Q("treatment", "First-line drug for Raynaud's?", ["Calcium channel blocker", "Beta blocker", "Aspirin", "Warfarin"], 0, "CCBs cause vasodilation."),
      Q("overview", "A 45-year-old with Raynaud's, puffy fingers and sclerodactyly. What secondary cause should you consider?", ["Scleroderma (CREST)", "Hypothyroidism", "Asthma", "Gout"], 0, "Secondary Raynaud's: scleroderma, SLE, RA, polymyositis."),
      Q("overview", "Which occupation can cause secondary Raynaud's?", ["Jackhammer operator", "Office worker", "Teacher", "Pilot"], 0, "Repetitive vibration trauma."),
      Q("overview", "Which feature favors secondary over primary Raynaud's?", ["Onset after 30 with positive autoantibodies", "Onset at 18", "Mild symptoms", "No finger edema"], 0, "Secondary: older onset, severe, edema, arthritis, autoantibodies.")
    ]),

    D("vas1-takayasu", "Takayasu Arteritis", "Large-vessel vasculitis of the aorta and branches in young Asian women: pulseless arms, BP difference, bruits; steroids.", [
      S("overview", "What it is", "<p>Granulomatous <strong>large-vessel vasculitis</strong> of the <strong>aorta and major branches</strong> (subclavian, carotid, vertebral, renal, pulmonary) → stenosis and aneurysms. <strong>80–90% female</strong>, <strong>&lt; 40</strong>, more common in <strong>Asian women</strong>. Resembles giant cell arteritis histologically.</p>"),
      S("presentation", "Presentation", "<p>Early: fatigue, weight loss, low-grade fever; arthralgia/myalgia (~half). Brain hypoperfusion: syncope, dizziness, headache, vision changes. Mesenteric ischemia, dyspnea, CP.</p>" + Tbl(["Exam", ""], [
        ["<strong>Absent/diminished pulses</strong>, varying between arms", "\"Pulseless disease\""],
        ["<strong>Arm BP discrepancy</strong>", ""],
        ["HTN (~half)", "Renal artery stenosis or coarctation"],
        ["AR murmur, <strong>bruits</strong> (carotid, subclavian, abdominal)", ""],
        ["Arm claudication, cool extremities", ""]
      ])),
      S("treatment", "Diagnosis & treatment", "<p><strong>High ESR/CRP</strong> + <strong>angiographic stenosis</strong> of the aorta/branches; biopsy impractical. Treat with <strong>corticosteroids</strong>, DMARDs, vascular surgery consult.</p>" + HY("Young Asian woman + absent arm pulse + arm BP difference + bruits = Takayasu → steroids."))
    ], [
      Q("presentation", "A 25-year-old Japanese woman has fatigue, low-grade fever, arm claudication, a weak left radial pulse and a carotid bruit. Diagnosis?", ["Takayasu arteritis", "Giant cell arteritis", "Buerger disease", "Kawasaki disease"], 0, "Large-vessel vasculitis in a young Asian woman."),
      Q("treatment", "First-line treatment for Takayasu arteritis?", ["Corticosteroids", "Aspirin alone", "IVIG", "Smoking cessation"], 0, "Corticosteroids, DMARDs and vascular surgery consult."),
      Q("overview", "Which vessels does Takayasu arteritis involve?", ["Aorta and its major branches", "Small digital arteries", "Coronary arteries in children", "Veins of the leg"], 0, "Large vessel vasculitis."),
      Q("presentation", "Why do half of Takayasu patients have hypertension?", ["Renal artery stenosis or aortic coarctation", "High salt diet", "Steroids", "Hyperthyroidism"], 0, "HTN from renal artery stenosis or coarctation."),
      Q("treatment", "How is Takayasu arteritis confirmed?", ["High ESR/CRP with angiographic stenosis of the aorta or branches", "Temporal artery biopsy", "Positive Allen test", "Echo showing vegetation"], 0, "Biopsy is impractical; angiography shows stenosis."),
      Q("overview", "What percentage of Takayasu patients are female?", ["80-90%", "50%", "10%", "100%"], 0, "80-90% are female.")
    ]),

    D("vas1-kawasaki", "Kawasaki Disease", "Medium-vessel vasculitis in children < 5: fever ≥ 5 days + 4 of 5 features; coronary aneurysms; IVIG + aspirin.", [
      S("overview", "What it is", "<p>Vasculitis of <strong>medium arteries</strong>, especially the <strong>coronaries</strong>, in children <strong>&lt; 5</strong>. Complications: <strong>coronary artery aneurysm</strong>, HF, MI, arrhythmias, peripheral occlusion, death.</p>"),
      S("presentation", "Diagnostic criteria", "<p><strong>Fever ≥ 5 days</strong> (high, not responsive to antipyretics) + <strong>≥ 4 of 5</strong>:</p>" + Tbl(["Feature", "Detail"], [
        ["<strong>C</strong>onjunctivitis", "Bilateral, <strong>non-exudative</strong>"],
        ["<strong>R</strong>ash", "Polymorphous"],
        ["<strong>A</strong>denopathy", "Cervical, ≥ 1 node &gt; 1.5 cm"],
        ["<strong>S</strong>trawberry tongue / oral", "Red fissured lips, injected pharynx"],
        ["<strong>H</strong>ands and feet", "Red palms/soles, edema → <strong>periungual desquamation</strong>"]
      ]) + Mn("CRASH and BURN", "Conjunctivitis, Rash, Adenopathy, Strawberry tongue, Hands/feet + fever ≥ 5 days (BURN).")),
      S("treatment", "Treatment", "<p>Single infusion of <strong>IVIG</strong> + <strong>high-dose aspirin (30–50 mg/kg)</strong>, then <strong>low-dose aspirin 3–5 mg/kg/day</strong> after the fever breaks. Echo for coronary aneurysms (standard teaching).</p>" + HY("Kawasaki is the exception to \"no aspirin in kids\"."))
    ], [
      Q("presentation", "A 3-year-old has 6 days of fever unresponsive to ibuprofen, red eyes without discharge, cracked red lips, swollen hands and a big neck node. Diagnosis?", ["Kawasaki disease", "Scarlet fever", "Measles", "Takayasu arteritis"], 0, "Fever ≥ 5 days plus ≥ 4 features."),
      Q("treatment", "Initial treatment of Kawasaki disease?", ["IVIG plus high-dose aspirin", "Steroids alone", "Penicillin", "Ibuprofen"], 0, "IVIG single infusion + aspirin 30-50 mg/kg, then low dose."),
      Q("overview", "Most feared complication of Kawasaki disease?", ["Coronary artery aneurysm", "Renal failure", "Aortic dissection", "Stroke from AF"], 0, "Coronary involvement → aneurysm, MI."),
      Q("presentation", "How many days of fever are typical for Kawasaki disease?", ["5 or more", "1", "2", "14 or more"], 0, "Fever ≥ 5 days plus ≥ 4 of 5 features."),
      Q("presentation", "What kind of conjunctivitis is seen in Kawasaki disease?", ["Bilateral non-exudative", "Unilateral purulent", "Bilateral with thick discharge", "None"], 0, "Bilateral nonexudative conjunctival injection."),
      Q("treatment", "What aspirin dose follows defervescence in Kawasaki disease?", ["Low dose 3-5 mg/kg/day", "High dose 100 mg/kg/day", "None", "325 mg TID"], 0, "Low-dose aspirin after the fever resolves."),
      Q("overview", "What age group gets Kawasaki disease?", ["Children under 5", "Teenagers", "Young women", "Older adults"], 0, "Typically younger than 5.")
    ]),

    D("vas1-avm", "Arteriovenous Malformation (AVM)", "Direct artery-to-vein connection bypassing capillaries: bruit or pulsatile mass; brain AVMs bleed or seize; embolize or excise.", [
      S("overview", "What it is", "<p>Abnormal communication <strong>artery → vein, bypassing capillaries</strong>. Usually <strong>congenital</strong> (AVM); acquired = <strong>AV fistula</strong> (trauma, dialysis access). High pressure dilates and weakens the veins → <strong>hemorrhage</strong>.</p>" + Tbl(["Site", "Effect"], [
        ["Superficial", "Pulsatile mass, <strong>bruit</strong>"],
        ["Bone", "<strong>Pathologic fractures</strong>"],
        ["<strong>Brain</strong>", "<strong>Seizures</strong>, focal deficits, <strong>hemorrhage</strong>"]
      ]) + "<p>Seen in <strong>hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu)</strong>.</p>"),
      S("treatment", "Diagnosis & management", "<p><strong>CTA or MRA</strong>. Individualized: <strong>surgical removal</strong> or <strong>endovascular embolization</strong>; observation can be fine if asymptomatic.</p>")
    ], [
      Q("overview", "A 25-year-old has a first seizure; MRA shows a tangle of vessels shunting arterial blood straight into veins. Diagnosis?", ["Arteriovenous malformation", "Berry aneurysm", "Glioma", "Venous thrombosis"], 0, "Brain AVMs cause seizures, deficits or hemorrhage."),
      Q("overview", "What is bypassed in an AVM?", ["The capillary bed", "The heart", "The veins", "The arteries"], 0, "Blood shunts from artery directly into vein."),
      Q("overview", "Which hereditary syndrome features AVMs?", ["Hereditary hemorrhagic telangiectasia", "Marfan syndrome", "Turner syndrome", "Down syndrome"], 0, "Osler-Weber-Rendu syndrome."),
      Q("treatment", "How are symptomatic AVMs treated?", ["Surgical removal or endovascular embolization", "Warfarin", "Steroids", "Compression stockings"], 0, "Treatment is individualized: surgery or embolization."),
      Q("overview", "What is an acquired artery-vein connection made for dialysis called?", ["AV fistula", "AV malformation", "Pseudoaneurysm", "Varicose vein"], 0, "Acquired connections are AVFs, distinct from congenital AVMs."),
      Q("overview", "What complication can an AVM in bone cause?", ["Pathologic fracture", "Osteomyelitis", "Gout", "Bone marrow failure"], 0, "AVMs in bone cause pathologic fractures."),
      Q("treatment", "Management of an asymptomatic AVM?", ["Observation may be fine", "Always emergent surgery", "Lifelong anticoagulation", "High-dose steroids"], 0, "Observation may be fine for asymptomatic AVMs.")
    ])
  ]);
}());
