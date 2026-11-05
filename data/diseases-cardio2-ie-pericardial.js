/*
  Cardio Part 2 Diseases tool: Infective Endocarditis & Pericardial Disease.
  Source: source-material/cardio-part-2/text/endocarditis-pericardial.md.
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  var duke = Tbl(["Duke (2023)", "Criteria"], [
    ["<strong>Major: micro</strong>", "Typical organism in <strong>≥ 2</strong> blood cultures, or an atypical one in <strong>≥ 3</strong>; PCR/serology for Coxiella (IgG &gt; 1:800), Bartonella, T. whipplei"],
    ["<strong>Major: imaging</strong>", "Echo/cardiac CT: vegetation, perforation, aneurysm, abscess, pseudoaneurysm, fistula; <strong>new</strong> regurgitation (worsening old is NOT enough); new prosthetic dehiscence; abnormal PET/CT uptake"],
    ["Major: surgical", "IE seen directly at surgery"],
    ["Minor", "Predisposition, fever, vascular and <strong>immunologic phenomena</strong> (+RF, Osler nodes, Roth spots, glomerulonephritis), micro evidence short of major"],
    ["<strong>Definite IE</strong>", "<strong>2 major</strong>, or <strong>1 major + 3 minor</strong>, or <strong>5 minor</strong>"]
  ]);

  window.CARDIO2_DISEASES_IE_PERICARDIAL = L("ie-pericardial", "Infective Endocarditis & Pericardial Disease", [

    D("iep-native-ie", "Native Valve Infective Endocarditis", "Bacterial or fungal infection of a damaged valve: fever + new murmur + emboli; cultures, echo, Duke criteria, IV antibiotics.", [
      S("overview", "Risk factors & pathophysiology", "<p>Infection of the valves or endocardium (including great vessels).</p>" + Tbl(["Risk factor", "Examples"], [
        ["Valve disease", "Rheumatic, congenital or degenerative (incl. <strong>MVP with MR</strong>)"],
        ["Congenital defects", "VSD, Tetralogy of Fallot, coarctation, PDA"],
        ["Other", "<strong>IV drug use</strong>, poor dentition, <strong>healthcare-associated</strong> (15–30%: lines, pacers, shunts)"]
      ]) + "<ol class=\"concept-chain\"><li><strong>Endothelial injury</strong> (normal endothelium resists infection)</li><li>Platelets and fibrin stick: a sterile scaffold</li><li><strong>Transient bacteremia</strong> seeds it</li><li><strong>Vegetation</strong> grows → leaflet destruction, regurgitation, perforation</li></ol>" +
        "<p>Vegetations sit on the <strong>low-pressure side</strong> of a narrow orifice (atrial side of the mitral; ventricular side of the aortic). <strong>Small, tight</strong> lesions (small VSD) are riskier than large ones. Valves: <strong>mitral ~41%</strong>, aortic ~37%, tricuspid 15–20%, pulmonic 1%.</p>"),
      S("types", "Organisms", Tbl(["Organism", "Clue"], [
        ["<strong>Staph aureus</strong>", "<strong>Most common</strong>; acute, rapid valve destruction and CHF"],
        ["<strong>Strep viridans</strong> (~17%)", "Dental source; indolent/subacute"],
        ["Enterococci", "GU/GI source"],
        ["<strong>Strep bovis</strong> (gallolyticus)", "Look for colon cancer (standard teaching)"],
        ["<strong>HACEK</strong> (~2%)", "Oral commensals: Haemophilus, Aggregatibacter (Actinobacillus), Cardiobacterium, Eikenella, Kingella"]
      ]) + "<p>Average patient age is rising: less rheumatic disease, more instrumentation and lines, more immunosuppression, more nosocomial IE.</p>"),
      S("presentation", "Presentation", Tbl(["Finding", "Detail"], [
        ["<strong>Fever</strong> (90%)", "May be low grade in elderly"],
        ["<strong>Murmur</strong> (85%)", "New or changing"],
        ["<strong>Emboli</strong> (&gt; 50%)", "Skin or organs (brain, kidney, spleen, lung)"],
        ["Splinter hemorrhages", "Vertical, under the nails"],
        ["Petechiae", "Palate, conjunctiva"],
        ["<strong>Roth spots</strong>", "Retinal hemorrhages with pale centers (immunologic)"],
        ["<strong>Janeway lesions</strong>", "<strong>Painless</strong> macules on palms/soles (micro-abscess); more acute"],
        ["<strong>Osler nodes</strong>", "<strong>Painful</strong> violaceous nodules on finger/toe pads (immune vasculitis); more subacute"]
      ]) + "<p>Classic skin/eye signs in only ~25%. Also chills, night sweats, arthralgias, back pain, GI symptoms, weight loss. Elderly may present with recurrent confusion and \"UTIs\".</p>" + Mn("Janeway vs Osler", "Janeway = painless (\"Jane-way doesn't hurt\"); Osler = Ouch.")),
      S("workup", "Diagnosis", "<p><strong>Blood cultures x3</strong> from separate sites <strong>before antibiotics</strong>; <strong>TTE</strong>, then <strong>TEE</strong> if negative. Labs: anemia, <strong>ESR/CRP up in 90–100%</strong>, leukocytosis (WBC may be normal), proteinuria, microhematuria. CXR, EKG (new heart block suggests abscess).</p>" + duke),
      S("treatment", "Treatment & complications", Tbl(["Situation", "Therapy"], [
        ["Empiric native valve", "<strong>Vancomycin + ceftriaxone</strong> (alternatives: Unasyn, cefepime, Zosyn)"],
        ["MSSA", "<strong>Nafcillin IV ≥ 6 weeks</strong>"],
        ["MRSA", "<strong>Vancomycin IV ≥ 6 weeks</strong>"],
        ["Most strep", "<strong>Aqueous PCN G IV 4 weeks</strong>"],
        ["Enterococcus", "Ampicillin, gentamicin, daptomycin per sensitivities"],
        ["<strong>Surgery</strong>", "Acute HF with severe valve dysfunction, uncontrolled/fungal/MDR infection, <strong>abscess</strong>, recurrent emboli, large mobile vegetation"]
      ]) + "<p>Hospitalize; always involve ID. Strep/enterococcus defervesce in 3–4 days; staph/pseudomonas up to 7. Complications: valve destruction, metastatic infection (brain abscess, septic emboli), <strong>myocardial abscess</strong> (needs surgery; new heart block), immune-complex GN, DIC.</p>")
    ], [
      Q("presentation", "A febrile patient has a new murmur, painless red macules on the soles and splinter hemorrhages. Diagnosis?", ["Infective endocarditis", "Acute pericarditis", "Rheumatic fever", "Vasculitis"], 0, "Fever + new murmur + Janeway lesions = IE."),
      Q("presentation", "Which IE finding is painful?", ["Osler nodes", "Janeway lesions", "Splinter hemorrhages", "Roth spots"], 0, "Osler nodes are painful; Janeway lesions are painless."),
      Q("presentation", "Retinal hemorrhages with pale centers in IE are called what?", ["Roth spots", "Cotton wool spots", "Osler nodes", "Drusen"], 0, "Roth spots: immunologic retinal lesions."),
      Q("types", "Most common organism in native valve endocarditis?", ["Staphylococcus aureus", "Strep viridans", "Enterococcus", "HACEK"], 0, "S. aureus is most common."),
      Q("workup", "Before starting antibiotics for suspected IE, what must be done?", ["Draw 3 sets of blood cultures from separate sites", "Get a TEE", "Start heparin", "Get a CT head"], 0, "Empiric antibiotics only after cultures."),
      Q("treatment", "Empiric antibiotics for suspected native valve IE?", ["Vancomycin plus ceftriaxone", "Vancomycin plus Zosyn", "Amoxicillin alone", "Doxycycline"], 0, "Native valve: vanc + ceftriaxone; prosthetic: vanc + Zosyn."),
      Q("workup", "How many Duke criteria make a definite IE diagnosis?", ["2 major, or 1 major + 3 minor, or 5 minor", "1 major alone", "3 minor", "Any positive culture"], 0, "2 major OR 1 major + 3 minor OR 5 minor."),
      Q("treatment", "Treatment for MSSA endocarditis?", ["Nafcillin IV for at least 6 weeks", "Oral amoxicillin 2 weeks", "Vancomycin 10 days", "PCN G 4 weeks"], 0, "MSSA: nafcillin ≥ 6 weeks; MRSA: vancomycin ≥ 6 weeks."),
      Q("treatment", "A patient with aortic valve IE develops new complete heart block. What is suspected and how is it treated?", ["Myocardial abscess needing surgery", "Drug side effect; stop antibiotics", "Rheumatic fever; give steroids", "Normal finding; observe"], 0, "Abscess can affect the conduction system and is a surgical indication."),
      Q("overview", "Which valve is most commonly affected in IE overall?", ["Mitral", "Tricuspid", "Pulmonic", "Aortic"], 0, "Mitral ~41%, aortic ~37%."),
      Q("overview", "Which VSD is more likely to get infected?", ["A small VSD with a high pressure gradient", "A large VSD", "A closed VSD", "All equally"], 0, "Small, tight lesions with a high pressure differential predispose to IE."),
      Q("workup", "A TTE is negative but IE is still suspected. Next imaging?", ["Transesophageal echo", "CXR", "Repeat TTE in a year", "MRI brain"], 0, "If TTE is negative, get a TEE."),
      Q("presentation", "A 65-year-old with recent root canal has recurrent confusion and 'UTIs' with negative cultures. What should you suspect?", ["Subacute infective endocarditis", "Dementia", "Pyelonephritis", "Stroke only"], 0, "This is the deck's Anne case: indolent IE presenting as recurrent AMS."),
      Q("treatment", "How long does aqueous penicillin G run for most strep endocarditis?", ["4 weeks", "1 week", "6 months", "3 days"], 0, "Most strep: aqueous PCN G IV x 4 weeks.")
    ]),

    D("iep-ivdu-ie", "Endocarditis in IV Drug Users", "Right-sided (tricuspid) IE, ~70% S. aureus, often no prior valve disease; septic pulmonary emboli.", [
      S("overview", "Features", "<p>Most have <strong>no known valve disease</strong>. IE favors the <strong>tricuspid valve</strong>: injected particulate and bacteria hit the right heart first (standard teaching).</p>" + Tbl(["Organism", "Share"], [
        ["<strong>S. aureus</strong>", "<strong>~70%</strong>"],
        ["Strep, enterococci", "Second"],
        ["Pseudomonas, Serratia, <strong>Candida</strong>, polymicrobial", "Poor hygiene"]
      ])),
      S("presentation", "Presentation", "<p>Fever, shaking chills, ill appearance, <strong>track marks</strong>, a skin abscess; soft murmur at the <strong>LSB</strong> (tricuspid regurgitation). Right-sided emboli go to the <strong>lungs</strong> (septic pulmonary emboli) (standard teaching).</p>"),
      S("treatment", "Treatment", "<p>Cultures first, then empiric <strong>vancomycin + ceftriaxone</strong>; consider <strong>fungal coverage</strong> with IV drug use history. MRSA: vancomycin ≥ 6 weeks.</p>" + HY("IVDU + fever + LSB murmur = tricuspid IE, S. aureus until proven otherwise."))
    ], [
      Q("presentation", "A 41-year-old who injects heroin has fever 102.4, track marks, a forearm abscess and a soft systolic murmur at the LSB. Diagnosis?", ["Tricuspid valve endocarditis", "Mitral stenosis", "Acute pericarditis", "Aortic dissection"], 0, "This is the deck's Cynthia case: right-sided IE in IVDU."),
      Q("overview", "Which valve is most often infected in IV drug users?", ["Tricuspid", "Mitral", "Aortic", "Pulmonic"], 0, "IE is more likely to affect the tricuspid valve in IVDU."),
      Q("overview", "What percent of IVDU endocarditis is S. aureus?", ["About 70%", "About 10%", "About 2%", "100%"], 0, "S. aureus ~70%."),
      Q("treatment", "Which pathogen should you consider covering in IVDU endocarditis because of poor hygiene?", ["Candida (fungal)", "HACEK only", "Strep bovis", "Coxiella"], 0, "Pseudomonas, Serratia, Candida and polymicrobial infections occur."),
      Q("presentation", "Where do emboli from tricuspid IE usually go?", ["The lungs", "The brain", "The kidneys", "The fingers"], 0, "Right-sided vegetations embolize to the pulmonary circulation."),
      Q("overview", "Do most IVDU endocarditis patients have known valve disease?", ["No", "Yes, almost all", "Only rheumatic disease", "Only prosthetic valves"], 0, "The majority do not have known valve disease.")
    ]),

    D("iep-prosthetic-ie", "Prosthetic Valve Endocarditis", "Early (< 12 months: surgical contamination, staph, GNR, Candida) vs late (like native IE); vanc + Zosyn; dehiscence.", [
      S("overview", "Early vs late", Tbl(["", "Early PVE", "Late PVE (&gt; 12 months)"], [
        ["Source", "<strong>Surgical contamination</strong> or seeding from another site (UTI at surgery)", "Oral or skin source seeding the valve"],
        ["Organisms", "Staph, strep, <strong>gram-negative bacilli, Candida</strong>", "Same as native valve IE"]
      ]) + "<p>Risk is highest in the <strong>first year</strong> but stays elevated for life. PVE is 15–30% of IE. Can cause <strong>valve dehiscence and perivalvular leak</strong>.</p>"),
      S("treatment", "Treatment", "<p>Empiric <strong>vancomycin + piperacillin-tazobactam (Zosyn)</strong>, which covers pseudomonas; tailor to cultures. Dehiscence, abscess or HF → surgery.</p>" + HY("Native = vanc + ceftriaxone. Prosthetic = vanc + Zosyn."))
    ], [
      Q("treatment", "Empiric antibiotics for prosthetic valve endocarditis?", ["Vancomycin plus piperacillin-tazobactam", "Vancomycin plus ceftriaxone", "Nafcillin alone", "PCN G alone"], 0, "PVE: vanc + Zosyn, covering pseudomonas."),
      Q("overview", "IE 2 months after valve replacement is most likely from what?", ["Contamination at surgery or seeding at that time", "Dental work years later", "Rheumatic fever", "Strep bovis from the colon"], 0, "Early PVE relates to surgical contamination or perioperative seeding."),
      Q("overview", "Late prosthetic valve IE is defined as starting after how long?", ["12 months", "1 month", "5 years", "1 week"], 0, "Late PVE: > 12 months; organisms resemble native IE."),
      Q("overview", "Which organisms are typical of early PVE?", ["Staph, strep, gram-negative bacilli and Candida", "HACEK only", "Strep viridans only", "Coxiella only"], 0, "Early PVE commonly involves staph, strep, GNRs and Candida."),
      Q("overview", "Which complication is specific to prosthetic valve IE?", ["Valve dehiscence with perivalvular leak", "Rheumatic carditis", "Mitral valve prolapse", "Bicuspid valve"], 0, "IE can cause prosthetic dehiscence and perivalvular leak."),
      Q("overview", "When is the risk of prosthetic valve endocarditis highest?", ["The first year after surgery", "After 10 years", "Only during surgery", "It never changes"], 0, "Highest in the first year, but elevated for life.")
    ]),

    D("iep-prophylaxis", "IE Prophylaxis", "Only high-risk heart + high-risk procedure: amoxicillin 2 g 1 hour before dental work.", [
      S("overview", "Who gets it", Tbl(["Highest risk: give prophylaxis", "NOT routinely (intermediate)"], [
        ["<strong>Any prosthetic valve</strong> (TAVR, mechanical, bioprosthetic, repair material)", "Rheumatic heart disease"],
        ["<strong>Prior IE</strong>", "<strong>MVP</strong>"],
        ["Ventricular assist device", "<strong>Bicuspid aortic valve</strong>"],
        ["Valve disease after heart transplant", "HOCM, ASD"],
        ["Unrepaired cyanotic CHD (incl. shunts/conduits); repaired with prosthetic material in the <strong>first 6 months</strong>; repaired with residual defect at a patch/device", "Pacers, stents, ICD, CABG"]
      ]) + "<p>No human trial proves prophylaxis prevents IE; it's based on theory.</p>"),
      S("treatment", "Which procedures & what drug", Tbl(["Procedure", "Prophylaxis?"], [
        ["<strong>Dental</strong>: gingival manipulation or mucosal perforation (cleaning, extraction, abscess)", "<strong>Yes</strong> (highest risk)"],
        ["Respiratory: T&amp;A, bronchoscopy with biopsy", "Yes"],
        ["Cardiac procedures with prosthetic material", "Yes"],
        ["Infected skin/MSK surgery (abscess)", "Yes, cover skin flora"],
        ["<strong>GI or GU</strong>", "<strong>No</strong> routine prophylaxis"]
      ]) + "<p>Drug of choice: <strong>amoxicillin 2 g PO 1 hour before</strong>. Alternatives: cephalexin, doxycycline, azithromycin.</p>" + HY("High-risk heart AND high-risk procedure → amoxicillin 2 g, 1 hour before."))
    ], [
      Q("treatment", "A patient with a mechanical aortic valve needs a tooth extraction. Prophylaxis?", ["Amoxicillin 2 g PO 1 hour before", "None", "Vancomycin IV after", "Ciprofloxacin"], 0, "Prosthetic valve + dental manipulation → amoxicillin 2 g 1 hour before."),
      Q("overview", "A patient with mitral valve prolapse is getting a dental cleaning. Prophylaxis?", ["Not routinely recommended", "Amoxicillin 2 g", "IV vancomycin", "Doxycycline for 7 days"], 0, "MVP is intermediate risk: no routine prophylaxis."),
      Q("treatment", "A patient with prior endocarditis is having a colonoscopy. Prophylaxis?", ["No routine prophylaxis for GI procedures", "Amoxicillin 2 g", "Ampicillin + gentamicin", "Vancomycin"], 0, "GI and GU procedures don't get routine prophylaxis."),
      Q("overview", "Which patient qualifies for IE prophylaxis before dental work?", ["History of infective endocarditis", "Bicuspid aortic valve", "Coronary stent", "HOCM"], 0, "Prior IE is highest risk."),
      Q("treatment", "Which is an alternative to amoxicillin for IE prophylaxis?", ["Azithromycin", "Ciprofloxacin", "Metronidazole", "Nitrofurantoin"], 0, "Cephalexin, doxycycline or azithromycin are alternatives."),
      Q("overview", "A child had a VSD repaired with a prosthetic patch 3 months ago. Dental work today: prophylaxis?", ["Yes, within the first 6 months after repair with prosthetic material", "No, it's repaired", "Only after 1 year", "Only if febrile"], 0, "Completely repaired defects with prosthetic material need it for the first six months."),
      Q("overview", "What proves IE prophylaxis works?", ["No human study has definitively shown it", "Large randomized trials", "Meta-analyses of dental patients", "FDA mandate"], 0, "Guidelines are based on theory rather than trial data.")
    ]),

    D("iep-acute-pericarditis", "Acute Pericarditis", "Sharp pleuritic chest pain better leaning forward, friction rub, diffuse ST elevation; NSAIDs + colchicine.", [
      S("overview", "Causes", "<p>Inflammation of the pericardial sac (normally 5–15 mL of fluid).</p>" + Tbl(["Cause", "Detail"], [
        ["<strong>Viral</strong> (most common; most \"idiopathic\")", "Coxsackie, echovirus, influenza, EBV, HIV"],
        ["TB", "Rare in US, common in developing nations"],
        ["<strong>Uremia</strong>", "Dialysis or untreated renal failure"],
        ["Neoplastic", "Lung, breast, renal cell, lymphoma"],
        ["<strong>Dressler's</strong>", "Days to weeks after a transmural MI"],
        ["Connective tissue / drugs", "RA, SLE, drug reaction"],
        ["Trauma", ""]
      ])),
      S("presentation", "Presentation", "<p><strong>Sharp, pleuritic substernal pain</strong> of abrupt onset, <strong>worse supine</strong>, <strong>better sitting up and leaning forward</strong>; dyspnea, fever. <strong>Friction rub</strong>.</p><p>EKG: <strong>diffuse ST elevation without reciprocal changes</strong> (PR depression, standard teaching).</p>"),
      S("workup", "Work-up", "<p>Clinical diagnosis supported by EKG, labs and <strong>echo</strong> (effusion?). CBC, chemistries, troponin (may rise), <strong>ESR/CRP</strong>, TSH, ANA ± RF, PPD, CXR.</p>"),
      S("treatment", "Treatment", Tbl(["Drug", "Use"], [
        ["<strong>NSAIDs</strong> (aspirin or ibuprofen)", "<strong>2 weeks</strong>; relieve pain but don't change the course"],
        ["<strong>Colchicine</strong> low dose", "<strong>3 months</strong>; improves symptoms, <strong>reduces recurrence</strong>"],
        ["Steroids", "NSAIDs contraindicated, CTD/autoimmune, uremia not responding to dialysis; <strong>may raise recurrence</strong>"],
        ["Pericardial window", "Significant or recurrent effusions"]
      ]) + HY("Better leaning forward + rub + diffuse STE = pericarditis → NSAID 2 wk + colchicine 3 mo."))
    ], [
      Q("presentation", "A 28-year-old has sharp chest pain after a cold that improves leaning forward. EKG shows diffuse ST elevation without reciprocal changes. Diagnosis?", ["Acute pericarditis", "Anterior STEMI", "Aortic dissection", "PE"], 0, "Positional pleuritic pain + diffuse STE = pericarditis."),
      Q("overview", "Most common cause of acute pericarditis?", ["Viral", "Tuberculosis", "Uremia", "Malignancy"], 0, "Viral, the likely cause of most idiopathic cases."),
      Q("treatment", "Treatment for idiopathic acute pericarditis?", ["NSAID for 2 weeks plus colchicine for 3 months", "Steroids alone", "Antibiotics", "Heparin"], 0, "Both NSAIDs and colchicine are used."),
      Q("treatment", "Which pericarditis drug reduces recurrence?", ["Colchicine", "Ibuprofen", "Prednisone", "Metoprolol"], 0, "Colchicine improves symptoms and reduces recurrence."),
      Q("treatment", "What is the downside of steroids for pericarditis?", ["They may increase recurrence", "They cause tamponade", "They never help", "They are nephrotoxic"], 0, "Some evidence they increase recurrence."),
      Q("overview", "Pericarditis 2 weeks after a large transmural MI is called what?", ["Dressler syndrome", "Uremic pericarditis", "Constrictive pericarditis", "Tamponade"], 0, "Dressler's: inflammatory response to infarct."),
      Q("presentation", "Which exam finding is classic for acute pericarditis?", ["Friction rub", "Opening snap", "Pericardial knock", "S3 gallop"], 0, "A friction rub; the knock is constrictive."),
      Q("presentation", "What position worsens pericarditis pain?", ["Lying supine", "Leaning forward", "Sitting up", "Standing"], 0, "Worse supine, better sitting up and leaning forward.")
    ]),

    D("iep-effusion", "Pericardial Effusion", "Fluid between pericardial layers; usually silent; muffled sounds; echo; observe small ones.", [
      S("overview", "What it is", "<p>Inflammatory fluid between the visceral and parietal layers. Any pericarditis cause can produce it; most commonly <strong>idiopathic, uremia, neoplastic, pericarditis</strong>; less often trauma (including procedures) and dissection. Symptoms depend on <strong>how fast it accumulates</strong> (standard teaching).</p>"),
      S("presentation", "Presentation", "<p>Usually <strong>asymptomatic</strong>; if symptomatic, chest pressure and dyspnea. Signs: rub if large, <strong>muffled heart sounds</strong>, <strong>non-palpable PMI</strong>.</p>"),
      S("workup", "Diagnosis & management", "<p><strong>Echo</strong> is the test of choice. CXR: <strong>enlarged cardiac silhouette</strong> (\"water bottle\"). EKG: <strong>low voltage</strong>, QRS alternans.</p><p>Small and asymptomatic → <strong>serial echos</strong>. Recurrent or loculated → <strong>pericardial window</strong>.</p>")
    ], [
      Q("presentation", "A dialysis patient has muffled heart sounds, a PMI you can't feel, and normal BP. Likely finding?", ["Pericardial effusion", "Constrictive pericarditis", "Mitral stenosis", "Aortic regurgitation"], 0, "Muffled sounds and impalpable PMI suggest effusion; uremia is a common cause."),
      Q("workup", "Test of choice for a pericardial effusion?", ["Echocardiogram", "CT head", "Cardiac cath", "Holter"], 0, "Echo shows the effusion and tamponade physiology."),
      Q("workup", "Management of a small asymptomatic pericardial effusion?", ["Serial echocardiograms", "Emergent pericardiocentesis", "Pericardiectomy", "Thrombolysis"], 0, "Observe with serial echos."),
      Q("workup", "What does a large effusion do to the chest X-ray?", ["Enlarges the cardiac silhouette", "Shows a widened mediastinum from aorta", "Shows Kerley B lines only", "Nothing"], 0, "Enlargement of the cardiac silhouette."),
      Q("overview", "What mostly decides whether an effusion causes symptoms?", ["How fast it accumulates", "The patient's age", "The color of the fluid", "Heart rate alone"], 0, "Rapid accumulation is poorly tolerated; slow ones can grow large silently (standard teaching)."),
      Q("workup", "Recurrent loculated pericardial effusions are treated with what?", ["Pericardial window", "Diuretics", "Beta blockers", "Observation"], 0, "Pericardial window for recurrent or loculated effusions."),
      Q("overview", "Which is a common cause of pericardial effusion?", ["Malignancy", "Hypertension", "Hyperlipidemia", "Asthma"], 0, "Idiopathic, uremia, neoplastic, pericarditis.")
    ]),

    D("iep-tamponade", "Cardiac Tamponade", "Effusion compresses the heart: Beck's triad, pulsus paradoxus, electrical alternans; pericardiocentesis.", [
      S("overview", "Mechanism", "<ol class=\"concept-chain\"><li>Effusion too large or too fast</li><li><strong>Right heart filling impaired first</strong>, then left</li><li>↓ Cardiac output → compensation (tachycardia, vasoconstriction)</li><li>Compensation fails → shock</li></ol><p>Acute: sudden CP, tachypnea, dyspnea, JVD, hypotension. Subacute: SOB, chest fullness, edema, fatigue once pressure is critical.</p>"),
      S("presentation", "Signs", Tbl(["Sign", ""], [
        ["<strong>Beck's triad</strong>", "<strong>Hypotension, JVD, muffled heart sounds</strong>"],
        ["Tachycardia", "Compensation"],
        ["Narrow pulse pressure", ""],
        ["<strong>Pulsus paradoxus</strong>", "SBP falls <strong>&gt; 10 mmHg on inspiration</strong>"]
      ])),
      S("workup", "Diagnosis", "<p><strong>Echo</strong> (test of choice): effusion with tamponade physiology. EKG: <strong>low voltage, electrical (QRS) alternans</strong>. CXR: big silhouette.</p>"),
      S("treatment", "Treatment", "<p><strong>Medical emergency</strong>: IV fluids, vasopressors for hypotension, emergent <strong>pericardiocentesis</strong>; window if recurrent or loculated.</p>" + HY("Hypotension + JVD + muffled sounds + pulsus paradoxus = tamponade → fluids + pericardiocentesis."))
    ], [
      Q("presentation", "What is Beck's triad?", ["Hypotension, JVD, muffled heart sounds", "Fever, murmur, emboli", "Chest pain, rub, ST elevation", "Edema, ascites, knock"], 0, "Classic tamponade triad."),
      Q("presentation", "What is pulsus paradoxus?", ["SBP drop of more than 10 mmHg during inspiration", "Pulse that rises with inspiration", "Alternating strong and weak beats", "Pulse deficit between arms"], 0, "Fall in SBP > 10 mmHg during inspiration."),
      Q("treatment", "A hypotensive patient with a large effusion and tamponade on echo. Definitive treatment?", ["Emergent pericardiocentesis", "Colchicine", "Diuretics", "Beta blocker"], 0, "Tamponade is an emergency: fluids, pressors, pericardiocentesis."),
      Q("workup", "Which EKG finding suggests tamponade?", ["Electrical alternans", "Delta wave", "Peaked T waves", "Prolonged QT"], 0, "Dampened voltage and QRS alternans."),
      Q("overview", "Which side of the heart is compressed first in tamponade?", ["The right heart", "The left heart", "Both equally", "Neither"], 0, "Filling of the right heart is impaired first."),
      Q("treatment", "Before pericardiocentesis, how is hypotension in tamponade supported?", ["IV fluids and vasopressors", "Diuretics", "Nitroglycerin", "Beta blockers"], 0, "Hydrate and use pressors; avoid lowering preload (standard teaching)."),
      Q("presentation", "What happens to pulse pressure in tamponade?", ["It narrows", "It widens", "It stays normal", "It doubles"], 0, "Narrow pulse pressure is a sign of tamponade.")
    ]),

    D("iep-constrictive", "Constrictive Pericarditis", "Thick, scarred, sometimes calcified pericardium limits filling: slow right-heart failure, pericardial knock; pericardiectomy.", [
      S("overview", "What it is", "<p>Diffuse, permanent pericardial <strong>scarring</strong>: thick, fibrotic, sometimes <strong>calcified</strong> → restricts <strong>diastolic filling</strong> → heart-failure picture.</p><p>Causes: idiopathic/viral (most common in developed countries), <strong>post-radiation</strong>, <strong>post-cardiac surgery</strong>, CTD, <strong>TB</strong> (most common in developing countries), uremia.</p>"),
      S("presentation", "Presentation", "<p>Slowly advancing HF: DOE, <strong>fluid overload</strong> (edema, ascites), decreased exercise tolerance, chest pain, <strong>elevated JVP</strong>. <strong>Pericardial knock</strong>: early diastolic sound at the LSB as filling stops abruptly.</p>"),
      S("workup", "Diagnosis", Tbl(["Test", "Finding"], [
        ["CXR", "<strong>Calcified, thickened pericardium</strong>; pleural effusions"],
        ["EKG", "Nonspecific ST-T changes, low voltage; <strong>atrial dysrhythmias</strong> common"],
        ["<strong>Echo</strong> (essential)", "Thick, immobile pericardium; septal motion abnormality"],
        ["CT/MRI", "Extent of thickening before surgery"],
        ["Cardiac cath", "If echo non-diagnostic"]
      ])),
      S("treatment", "Treatment", "<p>Progressive. Early: <strong>NSAIDs + colchicine 2–3 months</strong>. <strong>Avoid BB and CCB</strong>: tachycardia is protective (fixed stroke volume). Late, non-surgical: diuretics, salt restriction. Moderate–severe: <strong>pericardiectomy</strong>.</p>" + HY("Radiation or cardiac surgery history + edema/ascites + high JVP + knock + calcified pericardium = constrictive pericarditis."))
    ], [
      Q("presentation", "Years after chest radiation, a patient has edema, ascites, high JVP and an early diastolic knock. CXR shows a calcified pericardium. Diagnosis?", ["Constrictive pericarditis", "Cardiac tamponade", "Dilated cardiomyopathy", "Mitral stenosis"], 0, "Calcified pericardium + knock + right-sided failure."),
      Q("presentation", "What is a pericardial knock?", ["An early diastolic sound at the LSB from abrupt halt of filling", "A late systolic click", "A three-part scratchy rub", "A holosystolic murmur"], 0, "Early diastolic sound as filling stops."),
      Q("treatment", "Why are beta blockers and CCBs avoided in constrictive pericarditis?", ["Tachycardia is protective when stroke volume is fixed", "They cause tamponade", "They worsen calcification", "They interact with colchicine"], 0, "Tachycardia is a protective mechanism."),
      Q("treatment", "Treatment for moderate to severe constrictive pericarditis?", ["Pericardiectomy", "Pericardiocentesis", "Valve replacement", "Heart transplant first"], 0, "Pericardiectomy."),
      Q("workup", "Essential diagnostic test for constrictive pericarditis?", ["Echocardiogram", "Troponin", "D-dimer", "Stress test"], 0, "Echo shows thick, immobile pericardium and septal motion changes."),
      Q("overview", "Most common cause of constrictive pericarditis in developing countries?", ["Tuberculosis", "Radiation", "Viral", "Uremia"], 0, "TB is most common in developing countries; idiopathic/viral in developed ones."),
      Q("treatment", "Early constrictive pericarditis is treated with what?", ["NSAIDs and colchicine for 2-3 months", "Immediate surgery", "Antibiotics", "Beta blockers"], 0, "Early disease is treated like acute pericarditis.")
    ])
  ]);
}());
