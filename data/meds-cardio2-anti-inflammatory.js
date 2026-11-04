/*
  Medications: Pericarditis & vasculitis drugs (Cardio Part 2). Source:
  endocarditis-pericardial.md slides 55-56, 66, 72; vascular-disease-part-1.md
  slides 138, 142; vascular-disease-part-2.md slide 25;
  chronic-arrhythmia-management.md slides 15, 83. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO2_MEDS_ANTI_INFLAMMATORY = L("meds2-anti-inflammatory", "Pericarditis & vasculitis drugs", [

    Med("med-nsaids-pericarditis", "NSAIDs: aspirin or ibuprofen", "High-dose aspirin or ibuprofen for 2 weeks in idiopathic pericarditis", ["Infective Endocarditis & Pericardial Disease", "Vascular Disease Part 2"], {
      uses: ul([
        "<strong>Idiopathic/viral acute pericarditis</strong>: <strong>aspirin or ibuprofen</strong> (preferred) for <strong>2 weeks</strong>, together with colchicine.",
        "<strong>Early constrictive pericarditis</strong>: NSAIDs + colchicine for 2–3 months.",
        "<strong>Superficial thrombophlebitis</strong>: NSAIDs for pain and inflammation, warm compresses, remove the IV."
      ]),
      moa: "<p>Block COX enzymes: less prostaglandin, so <strong>less pain and inflammation</strong>. In pericarditis they <strong>relieve symptoms but do not change the course</strong>.</p>",
      avoid: ul(["If NSAIDs are contraindicated (bleeding, kidney disease, ulcers): <strong>oral corticosteroids</strong> are the backup.", "Treat the cause first when there is one (uremia → dialysis)."]),
      se: ul(["GI upset, ulcers and bleeding; kidney injury (standard teaching)."]),
      pearls: ul(["Pericarditis pain is sharp, pleuritic, worse supine and better sitting up and leaning forward."]) +
        HY("Idiopathic pericarditis = NSAID × 2 weeks + colchicine × 3 months.")
    }, [
      Q("uses", "A 30-year-old has viral pericarditis with diffuse ST elevation. First-line regimen?", ["Ibuprofen or aspirin for 2 weeks plus colchicine for 3 months", "Prednisone alone", "Antibiotics for 6 weeks", "Heparin drip"], 0, "Idiopathic pericarditis: NSAIDs (ASA or ibuprofen) for 2 weeks plus low-dose colchicine for 3 months."),
      Q("moa", "What do NSAIDs do for acute pericarditis?", ["Relieve pain and inflammation but do not alter the course", "Cure the infection", "Prevent all recurrences alone", "Drain the effusion"], 0, "NSAIDs relieve symptoms without altering the course; colchicine reduces recurrence."),
      Q("uses", "Which is first-line care for superficial thrombophlebitis at an old IV site?", ["NSAIDs, warm compresses and removing the catheter", "Full anticoagulation for 3 months", "IV antibiotics", "tPA"], 0, "Superficial thrombophlebitis: NSAIDs, warm compresses, remove the IV; antibiotics and anticoagulation usually not indicated."),
      Q("uses", "How is early constrictive pericarditis treated medically?", ["NSAIDs and colchicine for 2-3 months", "Beta blockers", "Digoxin", "Diltiazem"], 0, "Early constrictive disease is treated like acute pericarditis with NSAIDs and colchicine for 2-3 months.")
    ]),

    Med("med-colchicine", "Colchicine", "Low dose for 3 months with an NSAID; cuts pericarditis recurrence", ["Infective Endocarditis & Pericardial Disease", "Inpatient & Long-Term Arrhythmia Management"], {
      uses: ul([
        "<strong>Acute idiopathic pericarditis</strong>: low dose continued for <strong>3 months</strong>; improves symptoms and <strong>reduces recurrence</strong>.",
        "Early constrictive pericarditis (2–3 months with NSAIDs).",
        "Under study to lower AF recurrence after ablation (with ACE inhibitors and statins)."
      ]),
      moa: "<p>Blocks microtubule assembly in neutrophils, damping inflammation (standard teaching).</p>",
      avoid: ul(["Severe kidney or liver disease; strong CYP3A4 inhibitors (standard teaching)."]),
      se: ul(["<strong>Diarrhea</strong>, nausea, cramping (standard teaching)."]),
      pearls: ul(["NSAIDs treat the pain now; colchicine prevents the next episode."]) +
        HY("Colchicine = fewer pericarditis recurrences.")
    }, [
      Q("uses", "Why is colchicine added to NSAIDs in acute pericarditis?", ["It improves symptoms and reduces recurrence", "It treats bacterial causes", "It lowers BP", "It prevents tamponade with certainty"], 0, "Low-dose colchicine for 3 months improves symptoms and reduces the recurrence rate."),
      Q("uses", "How long is colchicine continued for acute pericarditis?", ["3 months", "2 weeks", "1 year", "5 days"], 0, "NSAIDs for 2 weeks; colchicine low dose for 3 months."),
      Q("se", "What is colchicine's most common side effect?", ["Diarrhea", "Bradycardia", "Hyperkalemia", "Cough"], 0, "GI effects, especially diarrhea (standard teaching)."),
      Q("uses", "Which drugs are being studied to lower AF recurrence after catheter ablation?", ["Colchicine, ACE inhibitors and statins", "Digoxin and verapamil", "Atropine and adenosine", "Warfarin and aspirin"], 0, "Colchicine, ACE inhibitors and statins may decrease AF recurrence after ablation.")
    ]),

    Med("med-corticosteroids", "Corticosteroids (prednisone)", "Second line for pericarditis; first line for Takayasu arteritis", ["Infective Endocarditis & Pericardial Disease", "Vascular Disease Part 1"], {
      uses: ul([
        "<strong>Pericarditis when NSAIDs are contraindicated</strong>, or caused by <strong>connective tissue disease, autoimmune disease</strong>, or <strong>uremia not responding to dialysis</strong>.",
        "<strong>Takayasu arteritis</strong>: corticosteroids + DMARDs + vascular surgery consult."
      ]),
      moa: "<p>Broad suppression of inflammation and immune activity (standard teaching).</p>",
      avoid: ul(["Not first line for idiopathic pericarditis: <strong>may increase recurrence</strong>."]),
      se: ul(["Hyperglycemia, weight gain, osteoporosis, infection risk, mood changes (standard teaching)."]),
      pearls: ul(["Fludrocortisone (a mineralocorticoid) is the steroid used for POTS, not for inflammation."]) +
        HY("Steroids in pericarditis: only if NSAIDs can't be used or autoimmune/uremic — they raise recurrence.")
    }, [
      Q("avoid", "Why are steroids not first line for idiopathic pericarditis?", ["They may increase recurrence", "They cause tamponade", "They are ineffective for pain", "They interact with colchicine"], 0, "There is some evidence corticosteroids increase pericarditis recurrence."),
      Q("uses", "Which pericarditis patient is a good steroid candidate?", ["Lupus pericarditis in a patient with a GI bleed history", "Healthy man with viral pericarditis", "Bacterial purulent pericarditis", "Post-MI patient on no meds"], 0, "Steroids: NSAIDs contraindicated, or connective tissue/autoimmune disease, or uremia not responding to dialysis."),
      Q("uses", "A 28-year-old Asian woman has arm claudication, unequal arm BPs and a high ESR. First treatment?", ["Corticosteroids (plus DMARDs)", "Aspirin alone", "Cilostazol", "IVIG"], 0, "Takayasu arteritis: corticosteroids, DMARDs and a vascular surgery consult."),
      Q("uses", "Uremic pericarditis is not improving with dialysis. What can be added?", ["Oral corticosteroids", "Digoxin", "Warfarin", "Adenosine"], 0, "Oral steroids are used for uremic pericarditis not responding to dialysis.")
    ]),

    Med("med-ivig", "IV immune globulin (IVIG)", "Single infusion with aspirin for Kawasaki disease", ["Vascular Disease Part 1"], {
      uses: ul(["<strong>Kawasaki disease</strong> (child under 5, fever ≥ 5 days + 4 of 5 features): <strong>a single IVIG infusion + aspirin 30–50 mg/kg</strong>, then low-dose aspirin 3–5 mg/kg/day after the fever breaks."]),
      moa: "<p>Pooled antibodies that calm the vasculitis and <strong>lower the risk of coronary artery aneurysms</strong> (standard teaching).</p>",
      avoid: ul(["IgA deficiency with anti-IgA antibodies (anaphylaxis risk) (standard teaching)."]),
      se: ul(["Infusion reactions, headache, fluid overload (standard teaching)."]),
      pearls: ul(["Kawasaki complications: <strong>coronary aneurysm</strong>, HF, MI, arrhythmias, death.", "Kawasaki is one of the few times aspirin is given to a child."]) +
        HY("Kawasaki → IVIG + high-dose aspirin.")
    }, [
      Q("uses", "A 3-year-old has 6 days of fever, conjunctival injection, strawberry tongue, swollen hands and a neck node. Treatment?", ["A single IVIG infusion plus aspirin 30-50 mg/kg", "Amoxicillin", "Prednisone alone", "Acetaminophen only"], 0, "Kawasaki disease: IVIG plus aspirin, then low-dose aspirin after defervescence."),
      Q("pearls", "What feared complication does Kawasaki treatment aim to prevent?", ["Coronary artery aneurysm", "Aortic stenosis", "Pulmonary embolism", "Renal artery stenosis"], 0, "Kawasaki involves medium arteries, especially the coronaries: aneurysm, MI, HF."),
      Q("uses", "After the fever breaks in Kawasaki, what aspirin dose follows?", ["3-5 mg/kg/day", "30-50 mg/kg/day", "324 mg once", "Stop aspirin"], 0, "Low-dose aspirin 3-5 mg/kg/day after defervescence."),
      Q("uses", "How many IVIG infusions are given initially for Kawasaki?", ["A single infusion", "Daily for 2 weeks", "Weekly for a year", "None; aspirin only"], 0, "Initial therapy: a single IVIG infusion plus aspirin.")
    ])
  ]);
}());
