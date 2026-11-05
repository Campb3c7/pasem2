/*
  Cardio Part 2 Diseases tool: Vascular Disease Part 2 (venous).
  Source: source-material/cardio-part-2/text/vascular-disease-part-2.md.
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  var virchow = Tbl(["Virchow's triad", "Examples"], [
    ["<strong>Stasis</strong>", "Hospital bed rest, car/plane trips ≥ 4 h, long surgery, varicose veins"],
    ["<strong>Endothelial injury</strong>", "Fracture, major tissue injury, surgery, PICC/central lines/ports, inflammation"],
    ["<strong>Hypercoagulability</strong>", "Inherited: <strong>factor V Leiden</strong>, protein C/S deficiency, antithrombin III deficiency, prothrombin mutation, antiphospholipid syndrome. Acquired: <strong>cancer, pregnancy, estrogen/HRT/OCPs, testosterone, nephrotic syndrome</strong>"]
  ]);

  window.CARDIO2_DISEASES_VASCULAR_2 = L("vascular-2", "Vascular Disease Part 2", [

    D("vas2-venous-insufficiency", "Chronic Venous Insufficiency & Varicose Veins", "Incompetent valves → venous hypertension: heavy legs worse standing, edema, brown medial-ankle staining, stasis ulcers; compression.", [
      S("overview", "Spectrum & mechanism", Tbl(["Finding", "Size"], [
        ["Telangiectasia", "Intradermal, <strong>&lt; 1 mm</strong>"],
        ["<strong>Varicose veins</strong>", "Tortuous subQ veins, <strong>&gt; 3 mm</strong>; 20–30% of adults; hereditary; worse with pregnancy"],
        ["Chronic venous insufficiency", "Edema + skin changes (pigment, ulcers)"]
      ]) + "<p>Mechanisms: <strong>valve incompetence</strong> → reflux, pooling, venous HTN, more valve damage; weak calf muscle pump; outflow obstruction; raised venous pressure (obesity, HF).</p><p>Risks: FH, <strong>female</strong>, estrogen, age, obesity, sedentary, <strong>prolonged standing</strong>; secondary: <strong>DVT, post-thrombotic syndrome</strong>, venous trauma.</p>"),
      S("presentation", "Presentation", "<p>Early: <strong>heaviness/aching worse with standing</strong>, better with overnight elevation (fine in the morning), burning, itching, <strong>dependent edema</strong>.</p>" + Tbl(["Late finding", "Detail"], [
        ["<strong>Stasis dermatitis</strong>", "Eczema-like: itch, erythema, scaling, weeping, crusting"],
        ["<strong>Brown hyperpigmentation</strong>", "<strong>Medial ankle</strong>; <strong>hemosiderin</strong> from extravasated RBCs"],
        ["<strong>Venous stasis ulcer</strong>", "<strong>Medial malleolus</strong>, below the knee; <strong>shallow</strong>, exudative, <strong>red granulation base</strong>, irregular borders; painful"]
      ]) + Tbl(["Venous ulcer", "Arterial ulcer (standard teaching)"], [
        ["Medial ankle", "Toes, lateral foot, pressure points"],
        ["Shallow, weepy, red base, irregular", "Deep, punched-out, pale base"],
        ["Edema, brown staining", "Hairless shiny skin, weak pulses"]
      ])),
      S("workup", "Diagnosis", "<p>Clinical, confirmed by <strong>venous duplex US</strong>: B-mode for anatomy/compressibility, Doppler for <strong>reflux &gt; 0.5 s</strong>; also excludes DVT.</p>"),
      S("treatment", "Treatment", "<p>Avoid prolonged standing/sitting, weight loss, <strong>leg elevation</strong>, walking/calf exercises, skin care (moisturize, don't scratch). <strong>Compression stockings</strong> (check for PAD first: <strong>ABI must be normal</strong>).</p><p>Ulcers: compression, wound care, <strong>Unna boot</strong> (zinc oxide compression). Surgery: debridement, <strong>vein ablation</strong>. Refer: coexisting PAD, nonhealing/recurrent ulcers, persistent dermatitis, recurrent cellulitis, unclear diagnosis.</p>" + HY("Compression is the core treatment, but check the ABI first: compressing a leg with PAD can cause ischemia."))
    ], [
      Q("presentation", "A 58-year-old cashier has achy heavy legs by evening, ankle edema, and brown staining over the medial ankles. Diagnosis?", ["Chronic venous insufficiency", "PAD", "DVT", "Lymphedema"], 0, "Worse with standing, edema, hemosiderin staining."),
      Q("presentation", "What causes the brown pigmentation of venous insufficiency?", ["Hemosiderin from red cells leaking into the dermis", "Melanin from sun exposure", "Bilirubin", "Iron supplements"], 0, "RBC breakdown deposits hemosiderin."),
      Q("presentation", "Where are venous stasis ulcers typically found?", ["Over the medial ankle", "On the tips of the toes", "On the heel", "Above the knee"], 0, "Low on the medial ankle, below the knee."),
      Q("presentation", "What does a venous stasis ulcer look like?", ["Shallow, exudative, red granulation base, irregular borders", "Deep, punched-out, pale base", "Black dry eschar", "Painless with callus rim"], 0, "Venous ulcers are shallow and weepy with a red base."),
      Q("treatment", "What must be checked before starting compression therapy?", ["An ABI to exclude PAD", "A D-dimer", "An INR", "A lipid panel"], 0, "Compression assumes a normal ABI; assess for PAD."),
      Q("treatment", "What is an Unna boot?", ["A zinc oxide compression dressing for venous ulcers", "An orthopedic cast for fractures", "A pneumatic DVT device", "A diabetic shoe"], 0, "Unna boot: zinc oxide compression dressing."),
      Q("workup", "Which test confirms venous reflux?", ["Venous duplex ultrasound showing retrograde flow over 0.5 seconds", "ABI", "CT venogram always", "D-dimer"], 0, "Doppler shows reflux > 0.5 s."),
      Q("overview", "Which is a secondary risk factor for venous insufficiency?", ["Prior DVT", "Female sex", "Family history", "Prolonged standing"], 0, "Secondary risks: DVT, post-thrombotic syndrome, venous trauma."),
      Q("presentation", "When are venous insufficiency symptoms usually mildest?", ["In the morning after overnight elevation", "At the end of a work day", "After standing all day", "After a hot shower"], 0, "Better with leg elevation overnight."),
      Q("overview", "What size defines a varicose vein?", ["More than 3 mm", "Less than 1 mm", "Exactly 1 cm", "Any visible vein"], 0, "Varicose veins are typically > 3 mm; telangiectasias < 1 mm.")
    ]),

    D("vas2-superficial-thrombophlebitis", "Superficial Thrombophlebitis", "Tender red cord along a superficial vein (IV sites, varicose veins); duplex to exclude DVT; NSAIDs and warm compresses.", [
      S("overview", "What it is", "<p><strong>Phlebitis</strong> = inflamed superficial vein without clot; <strong>thrombophlebitis</strong> = inflammation + thrombus. Not a DVT, but can extend into the deep system; near the <strong>saphenofemoral junction</strong> it raises DVT/PE risk.</p>" + Tbl(["Risk factor", "Example"], [
        ["IV catheter, chemical irritation", "<strong>IV promethazine, potassium</strong>"],
        ["Varicose veins", "Stasis"],
        ["Hypercoagulable", "Pregnancy, malignancy, estrogen"],
        ["Trousseau syndrome", "Migratory, cancer-associated"]
      ])),
      S("presentation", "Presentation", "<p>Localized <strong>pain, tenderness, redness, swelling along a superficial vein</strong>; the vein feels like a <strong>palpable cord</strong>.</p>"),
      S("workup", "Diagnosis", "<p>Suspected clinically, but get a <strong>venous duplex US</strong> to confirm, <strong>rule out DVT</strong>, and measure distance from the deep system.</p>"),
      S("treatment", "Treatment", "<p><strong>NSAIDs, warm compresses, remove the IV</strong>. <strong>No antibiotics</strong> unless infectious (suppurative). <strong>Anticoagulation generally not needed</strong> unless near the <strong>saphenofemoral or saphenopopliteal junction</strong>.</p>" + HY("Red tender cord at an old IV site → duplex → NSAIDs + warm compresses; anticoagulate only near the junction."))
    ], [
      Q("presentation", "Two days after IV potassium, a patient's forearm has a red, tender, cord-like vein. Diagnosis?", ["Superficial thrombophlebitis", "DVT", "Cellulitis", "Lymphangitis"], 0, "Inflamed, thrombosed superficial vein at an IV site."),
      Q("treatment", "Treatment for uncomplicated superficial thrombophlebitis?", ["NSAIDs, warm compresses, remove the IV", "IV antibiotics", "Full anticoagulation for 3 months", "tPA"], 0, "Conservative treatment."),
      Q("treatment", "When is anticoagulation considered for superficial thrombophlebitis?", ["When it is near the saphenofemoral or saphenopopliteal junction", "Always", "Never", "Only in the arm"], 0, "Near junctions, risk of DVT/PE rises."),
      Q("workup", "Why get a duplex for superficial thrombophlebitis?", ["To confirm it and rule out a coexisting DVT", "To measure ABI", "To find an abscess", "It is never needed"], 0, "Duplex confirms SVT, excludes DVT and measures proximity to deep veins."),
      Q("treatment", "Are antibiotics indicated for uncomplicated superficial thrombophlebitis?", ["No", "Yes, always", "Only cephalexin", "Only IV vancomycin"], 0, "Only if infectious thrombophlebitis."),
      Q("overview", "Which IV medications commonly irritate veins and cause phlebitis?", ["Promethazine and potassium", "Normal saline", "Ondansetron", "Acetaminophen"], 0, "Chemical irritation from IV promethazine and potassium."),
      Q("overview", "Is superficial thrombophlebitis a DVT?", ["No, but it can extend into the deep veins", "Yes, always", "Only below the knee", "Only in pregnancy"], 0, "Not considered a DVT, but may extend.")
    ]),

    D("vas2-trousseau", "Trousseau Syndrome (Migratory Thrombophlebitis)", "Recurrent superficial thrombophlebitis in different places at once: a sign of hidden cancer (pancreas, lung, glioma).", [
      S("overview", "What it is", "<p><strong>Migratory</strong> thrombophlebitis: superficial veins clot in <strong>multiple areas at the same time</strong>, from cancer-related <strong>hypercoagulability</strong>. Associated with <strong>adenocarcinoma of the pancreas and lung</strong>, and <strong>glioma</strong>. May be an <strong>early sign of cancer</strong>.</p>" + HY("Thrombophlebitis that keeps popping up in new places = look for pancreatic or lung cancer."))
    ], [
      Q("overview", "A 64-year-old with weight loss has tender red cords appearing in his arm, then his leg, then his chest wall. What should you look for?", ["An occult malignancy such as pancreatic cancer", "Varicose veins", "IV drug use only", "Lyme disease"], 0, "Migratory thrombophlebitis is Trousseau syndrome."),
      Q("overview", "Which cancer is classically linked to Trousseau syndrome?", ["Pancreatic adenocarcinoma", "Basal cell carcinoma", "Prostate cancer", "Thyroid cancer"], 0, "Pancreatic and lung adenocarcinoma, glioma."),
      Q("overview", "What is the mechanism of Trousseau syndrome?", ["Cancer-associated hypercoagulability", "Valve incompetence", "Arterial embolism", "Vasospasm"], 0, "Associated with hypercoagulability of malignancy."),
      Q("overview", "What makes Trousseau syndrome different from ordinary superficial thrombophlebitis?", ["Multiple sites at once that migrate", "It's always at an IV site", "It needs no work-up", "It only affects varicose veins"], 0, "Thrombosis of superficial veins in multiple areas at the same time."),
      Q("overview", "Which brain tumor is linked to Trousseau syndrome?", ["Glioma", "Meningioma", "Pituitary adenoma", "Acoustic neuroma"], 0, "Glioma is on the lecture's list."),
      Q("overview", "Why does Trousseau syndrome matter clinically?", ["It can be an early sign of cancer", "It always resolves", "It means DVT is impossible", "It is caused by smoking"], 0, "It can sometimes be an early sign of cancer.")
    ]),

    D("vas2-dvt", "Deep Vein Thrombosis (DVT)", "Unilateral calf swelling and pain; Wells → D-dimer or compression US; anticoagulate (DOAC preferred).", [
      S("overview", "Pathogenesis", virchow + "<p>Usually starts in the <strong>calf</strong> (can be the arm). <strong>15–30% extend proximally</strong>, raising PE risk from <strong>10% to 50%</strong>.</p>"),
      S("presentation", "Presentation", "<p>Calf pain, <strong>unilateral leg edema</strong>, warmth, redness, dilated superficial veins, tenderness; palpable cord is uncommon (deep). <strong>Homan's sign</strong> (calf pain with dorsiflexion) is unreliable.</p>"),
      S("workup", "Diagnosis", Tbl(["Wells DVT score", "Plan"], [
        ["<strong>0 = low</strong>", "<strong>D-dimer</strong>: normal rules out DVT; high → US"],
        ["1–2 moderate / ≥ 3 high", "<strong>Compression duplex US</strong> (~95% sensitive/specific)"]
      ]) + "<p>CT if abdominal/pelvic DVT is a concern. Negative US with high suspicion: <strong>repeat in a week</strong>.</p>"),
      S("treatment", "Treatment & disposition", Tbl(["Outpatient", "Inpatient"], [
        ["Stable, low bleeding risk, adequate renal function, support at home", "<strong>Massive iliofemoral DVT</strong>, concurrent PE, bleeding risk, severe renal failure, comorbidities"]
      ]) + Tbl(["Agent", "Use"], [
        ["<strong>DOAC</strong> (apixaban 10 mg BID x7 d → 5 mg BID; rivaroxaban 15 mg BID x21 d → 20 mg daily)", "<strong>Preferred</strong>; start in ED, go home"],
        ["<strong>LMWH</strong>", "Pregnancy; cancer; bridge to warfarin (overlap 5 days + INR therapeutic 24 h)"],
        ["Warfarin", "<strong>Antiphospholipid syndrome</strong>; renal failure; <strong>never in pregnancy</strong>"],
        ["IVC filter", "Only if anticoagulation absolutely contraindicated, or recurrent despite it"]
      ]) + "<p>Duration: provoked <strong>3 months</strong>; unprovoked ≥ 3 months then reassess (often 6–12+); recurrent <strong>indefinite</strong>; active cancer/APS extended. Teach: anticoagulants don't dissolve clot, bleeding risk, adherence.</p>")
    ], [
      Q("presentation", "After a 10-hour flight, a woman on OCPs has a swollen, warm, tender left calf. Diagnosis to rule out?", ["Deep vein thrombosis", "Baker cyst", "Cellulitis", "Muscle strain"], 0, "Stasis + estrogen + unilateral calf swelling."),
      Q("workup", "Wells DVT score is 0. Next test?", ["D-dimer", "Compression ultrasound", "CT venogram", "No testing"], 0, "Low probability: D-dimer; normal rules it out."),
      Q("workup", "Wells DVT score is 3. Next test?", ["Compression duplex ultrasound", "D-dimer", "Repeat Wells tomorrow", "MRI"], 0, "Moderate/high probability: go straight to ultrasound."),
      Q("overview", "What are the three parts of Virchow's triad?", ["Stasis, endothelial injury, hypercoagulability", "Pain, pallor, pulselessness", "Fever, murmur, emboli", "Hypotension, JVD, muffled sounds"], 0, "Virchow's triad explains VTE pathogenesis."),
      Q("overview", "Which is an inherited hypercoagulable state?", ["Factor V Leiden", "Nephrotic syndrome", "Pregnancy", "Malignancy"], 0, "Inherited: factor V Leiden, protein C/S, ATIII, prothrombin mutation."),
      Q("treatment", "Anticoagulant of choice for DVT in pregnancy?", ["LMWH", "Warfarin", "Rivaroxaban", "Apixaban"], 0, "LMWH; warfarin is not used in pregnancy."),
      Q("treatment", "Anticoagulant of choice for VTE with antiphospholipid syndrome?", ["Warfarin", "Apixaban", "Rivaroxaban", "Aspirin"], 0, "Warfarin is preferred in APS."),
      Q("treatment", "How long is anticoagulation for a first DVT provoked by surgery?", ["3 months", "Lifelong", "2 weeks", "10 days"], 0, "Provoked: 3 months."),
      Q("treatment", "Apixaban dosing for acute DVT?", ["10 mg BID for 7 days, then 5 mg BID", "5 mg BID from the start", "2.5 mg daily", "20 mg daily with food"], 0, "Apixaban 10 mg BID x7 days, then 5 mg BID."),
      Q("treatment", "When is an IVC filter indicated for DVT?", ["Absolute contraindication to anticoagulation", "Every DVT", "Distal calf DVT only", "To replace anticoagulation by choice"], 0, "Filters trap clots but don't treat VTE."),
      Q("workup", "Ultrasound is negative but suspicion for DVT is high. Next step?", ["Repeat the ultrasound in about a week", "DVT is excluded", "Start warfarin for life", "IVC filter"], 0, "A negative US does not always rule out DVT."),
      Q("treatment", "Which DVT patient should be admitted?", ["Massive iliofemoral DVT", "Stable calf DVT with support at home", "Low bleeding risk, normal kidneys", "Young patient on a DOAC"], 0, "Massive DVT, concurrent PE, bleeding risk or renal failure → inpatient."),
      Q("overview", "What percent of calf DVTs extend proximally?", ["15-30%", "1%", "90%", "50-70%"], 0, "Proximal extension raises PE risk from 10% to 50%.")
    ]),

    D("vas2-post-thrombotic", "Post-Thrombotic Syndrome", "Chronic venous insufficiency in a leg after DVT: pain and swelling; compression, elevation, prevent recurrence.", [
      S("overview", "What it is", "<p><strong>Venous insufficiency after DVT</strong>, lasting beyond clot resolution: <strong>pain and swelling</strong> in the affected leg (damaged valves, standard teaching).</p>"),
      S("treatment", "Treatment", "<p><strong>Compression stockings, elevation, pain control</strong>. Best treatment is <strong>prevention</strong>: prevent recurrent DVT.</p>")
    ], [
      Q("overview", "A year after a left femoral DVT, a patient's left leg still aches and swells by evening. Diagnosis?", ["Post-thrombotic syndrome", "Recurrent DVT always", "PAD", "Lymphoma"], 0, "Venous insufficiency persisting after DVT."),
      Q("treatment", "Treatment for post-thrombotic syndrome?", ["Compression stockings, elevation, pain control", "tPA", "Antibiotics", "Bypass graft"], 0, "Compression, elevation, analgesia."),
      Q("treatment", "What is the key to preventing post-thrombotic syndrome from worsening?", ["Preventing recurrent DVT", "Bed rest", "Fluid restriction", "Aspirin alone"], 0, "Prevention: prevent recurrent DVTs."),
      Q("overview", "Post-thrombotic syndrome is a form of what?", ["Venous insufficiency", "Arterial insufficiency", "Lymphedema", "Vasculitis"], 0, "Syndrome of venous insufficiency after DVT."),
      Q("overview", "Does post-thrombotic syndrome end when the clot resolves?", ["No, it extends beyond resolution", "Yes, always", "Only with warfarin", "Only in the arm"], 0, "It persists after the thrombosis resolves."),
      Q("overview", "Which leg is affected in post-thrombotic syndrome?", ["The leg that had the DVT", "Both legs always", "The opposite leg", "Neither; it is in the arms"], 0, "Pain and swelling in the extremity affected by DVT.")
    ]),

    D("vas2-phlegmasia", "Phlegmasia Cerulea Dolens", "Massive DVT blocks venous outflow: painful, swollen, blue leg that can become gangrenous; emergent vascular surgery.", [
      S("overview", "What it is", "<p>Rare, <strong>limb- and life-threatening</strong> DVT complication: major venous outflow obstruction → superficial venous congestion → <strong>massive venous hypertension</strong> → severe <strong>swelling, pain, cyanosis and ischemia</strong> → gangrene.</p>" + Mn("Name", "Phlegmasia (inflammation) cerulea (blue) dolens (painful) = painful blue swollen leg.")),
      S("treatment", "Treatment", "<p><strong>Urgent vascular surgery consult</strong>; anticoagulation and clot removal (standard teaching).</p>" + HY("Massive DVT + blue, tense, painful leg = phlegmasia cerulea dolens → vascular surgery now."))
    ], [
      Q("overview", "A patient with an iliofemoral DVT develops a massively swollen, painful, blue-purple leg. Diagnosis?", ["Phlegmasia cerulea dolens", "Superficial thrombophlebitis", "Post-thrombotic syndrome", "Raynaud's"], 0, "Venous outflow obstruction causing cyanosis and ischemia."),
      Q("treatment", "Management of phlegmasia cerulea dolens?", ["Urgent vascular surgery consult", "Compression stockings", "Outpatient DOAC", "NSAIDs and warm packs"], 0, "Limb- and life-threatening."),
      Q("overview", "What can phlegmasia cerulea dolens progress to?", ["Gangrene and limb loss", "Varicose veins", "Raynaud's", "Lymphoma"], 0, "May progress to gangrene if untreated."),
      Q("overview", "What is the mechanism of phlegmasia cerulea dolens?", ["Major venous outflow obstruction causing massive venous hypertension", "Arterial embolism", "Vasospasm", "Bacterial infection"], 0, "Obstruction → congestion → venous HTN → ischemia."),
      Q("overview", "What does 'cerulea' describe?", ["The blue color of the leg", "The pain", "The swelling", "The fever"], 0, "Cerulea = blue; dolens = painful."),
      Q("overview", "How common is phlegmasia cerulea dolens?", ["Rare", "The most common DVT outcome", "Seen in half of DVTs", "Only in children"], 0, "A rare complication of DVT.")
    ]),

    D("vas2-pe", "Pulmonary Embolism (PE)", "DVT clot lodges in the pulmonary arteries: dyspnea, pleuritic pain, tachycardia; Wells/PERC → D-dimer or CTPA; risk-stratify; anticoagulate, tPA if massive.", [
      S("overview", "Pathophysiology & types", "<ol class=\"concept-chain\"><li>DVT (usually <strong>above the knee</strong>) breaks loose</li><li>Travels through the right heart to the pulmonary artery</li><li>Blocked flow → V/Q mismatch → <strong>hypoxia</strong></li><li>↑ Resistance → <strong>RV strain</strong></li><li>↓ LV preload → hypotension, shock, death</li></ol>" +
        "<p>Other emboli: tumor, fat, air. Locations: <strong>saddle</strong> (straddles the main PA bifurcation), lobar, segmental, subsegmental. Sudden death in ~25%. High risk: hospitalized, major surgery, <strong>active cancer</strong>, pregnancy/postpartum.</p>"),
      S("presentation", "Presentation", "<p>Common: <strong>dyspnea</strong>, <strong>pleuritic chest pain</strong>, hemoptysis, leg pain/swelling, cough. Severe: <strong>syncope, hypotension, arrest</strong>. Exam: tachypnea (~half), tachycardia, lungs often normal, fever can mimic pneumonia. RV strain: hypotension, <strong>JVD</strong>, loud/split S2.</p>"),
      S("workup", "Work-up", Tbl(["Tool", "Use"], [
        ["<strong>PERC</strong> (low suspicion only)", "All 8 negative excludes PE: age &lt; 50, HR &lt; 100, SaO2 ≥ 95%, no hemoptysis, no estrogen, no recent surgery/trauma, no prior VTE, no unilateral leg swelling"],
        ["<strong>Modified Wells ≤ 4</strong> (PE unlikely)", "<strong>High-sensitivity D-dimer</strong>: negative excludes; positive → CTPA"],
        ["<strong>Modified Wells &gt; 4</strong> (PE likely)", "<strong>CTPA</strong>; don't use D-dimer to exclude"],
        ["<strong>CTPA</strong>", "<strong>First-line imaging</strong>: dark filling defect"],
        ["<strong>V/Q scan</strong>", "Normal CXR, <strong>GFR &lt; 30/AKI, contrast allergy</strong>, pregnancy option"]
      ]) + Tbl(["Finding", "Detail"], [
        ["EKG", "<strong>Sinus tachycardia</strong> most common; <strong>S1Q3T3</strong>, V1–V4 T inversions, new RBBB (strain)"],
        ["CXR", "Usually <strong>normal</strong>; <strong>Hampton hump</strong> (wedge infarct), <strong>Westermark sign</strong> (sharp vessel cutoff)"],
        ["Labs", "Troponin, BNP (RV strain), CBC, BMP, pregnancy test"],
        ["Echo", "RV dilation; useful if unstable"]
      ]) + "<p>Pregnancy: D-dimer usable only with low suspicion (rises with gestation); leg symptoms → US (positive proximal DVT = treat); normal CXR → V/Q or CTA; abnormal CXR → CTA.</p>"),
      S("types", "Risk classes", Tbl(["Class", "Definition", "Treatment"], [
        ["<strong>High risk (massive)</strong>", "<strong>SBP &lt; 90</strong> or drop ≥ 40 (hemodynamics, not clot size)", "ICU, pressors, <strong>systemic alteplase</strong>; catheter therapy or <strong>embolectomy</strong> if tPA contraindicated; heparin (held during tPA)"],
        ["<strong>Intermediate (submassive)</strong>", "Stable but <strong>RV dysfunction and/or ↑ troponin/BNP</strong>", "<strong>LMWH</strong> (UFH if procedure likely); admit; no routine advanced therapy"],
        ["<strong>Low risk</strong>", "Stable, no RV strain, normal markers", "<strong>DOAC</strong>, ≥ 3 months; <strong>PESI</strong> guides outpatient care"]
      ]) + "<p>tPA absolute contraindications: prior ICH, ischemic stroke &lt; 3 months, <strong>suspected aortic dissection</strong>, active bleeding, recent head trauma, recent brain/spine surgery, brain/spinal tumor.</p>"),
      S("treatment", "Treatment basics", "<p>O2 to &gt; 90%; cautious IV fluids (RV failure); <strong>anticoagulation is the cornerstone</strong>. UFH for unstable patients, possible tPA/procedure, severe renal failure, need for rapid reversal. Long-term choice: <strong>DOAC</strong> generally; LMWH in pregnancy; DOAC or LMWH in cancer; warfarin in APS. IVC filter only if anticoagulation is absolutely contraindicated or PE recurs on it.</p>" + HY("Unstable PE (SBP &lt; 90) → tPA. Stable with RV strain → LMWH and admit. Stable, no strain → DOAC, maybe home."))
    ], [
      Q("presentation", "Three days after knee surgery, a patient has sudden dyspnea, pleuritic chest pain and HR 118 with clear lungs. Diagnosis to exclude?", ["Pulmonary embolism", "Pneumonia", "Asthma", "Pericarditis"], 0, "Post-op immobility + sudden dyspnea + tachycardia."),
      Q("workup", "Most common EKG finding in PE?", ["Sinus tachycardia", "S1Q3T3", "New RBBB", "ST elevation"], 0, "Sinus tach is most common; S1Q3T3 is neither sensitive nor specific."),
      Q("workup", "Modified Wells score is 6. Next step?", ["CT pulmonary angiography", "D-dimer", "PERC", "Discharge"], 0, "Wells > 4 = PE likely: go to CTPA; don't use D-dimer to exclude."),
      Q("workup", "Modified Wells score is 2 and a high-sensitivity D-dimer is negative. Next step?", ["PE excluded; no further testing", "CTPA", "V/Q scan", "Start heparin"], 0, "PE unlikely + negative D-dimer excludes PE."),
      Q("workup", "A 28-year-old with low suspicion for PE is PERC negative on all eight criteria. Next step?", ["No further PE testing", "D-dimer", "CTPA", "V/Q scan"], 0, "PERC negative excludes PE in low-risk patients."),
      Q("workup", "A patient with suspected PE has GFR 22. Which imaging is preferred?", ["V/Q scan", "CTPA", "MRI with gadolinium", "Pulmonary angiogram"], 0, "V/Q for severe renal impairment or contrast allergy."),
      Q("workup", "What is a Hampton hump?", ["A peripheral wedge-shaped opacity from pulmonary infarction", "Sharp cutoff of vessels", "Widened mediastinum", "Enlarged heart"], 0, "Hampton hump = pulmonary infarction; Westermark = vessel cutoff."),
      Q("types", "PE with BP 82/50. Class and treatment?", ["High-risk (massive): systemic thrombolysis", "Low-risk: outpatient DOAC", "Intermediate: LMWH only", "Not a PE emergency"], 0, "Sustained SBP < 90 = high risk → alteplase."),
      Q("types", "Stable PE patient with RV dilation on echo and elevated troponin. Class?", ["Intermediate risk (submassive)", "High risk (massive)", "Low risk", "Not PE"], 0, "Hemodynamically stable with RV dysfunction or biomarkers."),
      Q("types", "Which is an absolute contraindication to tPA?", ["Suspected aortic dissection", "Age over 75", "Pregnancy", "Current anticoagulation"], 0, "Dissection is absolute; age, pregnancy and anticoagulant use are relative."),
      Q("types", "A stable PE patient with no RV strain and normal biomarkers. Treatment?", ["DOAC for at least 3 months, possibly outpatient", "tPA", "Surgical embolectomy", "IVC filter"], 0, "Low risk: DOAC; PESI helps decide outpatient care."),
      Q("types", "What does 'massive' PE describe?", ["Hemodynamic compromise, not clot size", "A clot over 5 cm", "Bilateral clots", "Saddle location"], 0, "Massive refers to hemodynamic compromise."),
      Q("treatment", "Which anticoagulant is preferred for an unstable PE when thrombolysis may follow?", ["IV unfractionated heparin", "Oral apixaban", "Warfarin", "Aspirin"], 0, "UFH: rapid adjustment and reversal before procedures."),
      Q("overview", "What is a saddle embolus?", ["A clot straddling the main pulmonary artery bifurcation", "A clot in a subsegmental branch", "A fat embolus", "A clot in the IVC"], 0, "Saddle PE straddles the bifurcation."),
      Q("workup", "A pregnant patient with suspected PE has a swollen leg and the US shows proximal DVT. Next step?", ["Start anticoagulation; chest imaging may not be needed", "CTPA first", "D-dimer", "No treatment until delivery"], 0, "Positive proximal DVT → treat."),
      Q("presentation", "Which exam findings suggest RV strain in PE?", ["Hypotension, JVD and a loud split S2", "Wheezing and fever", "Bradycardia and hypertension", "Friction rub"], 0, "Signs of right heart strain.")
    ])
  ]);
}());
