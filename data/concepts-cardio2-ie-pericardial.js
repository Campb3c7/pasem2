/*
  Cardio Part 2 Concepts: Infective Endocarditis & Pericardial Disease.
  Source: source-material/cardio-part-2/text/endocarditis-pericardial.md.
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

  window.CARDIO2_CONCEPTS_IE_PERICARDIAL = L("ie-pericardial", "Infective Endocarditis & Pericardial Disease", [

    D("iepc-vegetation-recipe", "A vegetation needs three ingredients", "Everyone has brief bacteremias, but only a damaged endothelial surface with a platelet-fibrin scaffold lets bacteria stick, so IE follows valve damage, jets, and foreign material.", [
      S("idea", "The idea", "<p>Transient bacteremia happens to everyone (brushing teeth, chewing). It rarely causes IE because <strong>undamaged endothelium resists infection and thrombus</strong>. IE needs three things together:</p><ol><li><strong>Damaged endothelium</strong> (the first step)</li><li><strong>Bacteremia</strong></li><li><strong>Adherence</strong>: platelets and fibrin settle on the damage and form a scaffold that bacteria then colonize</li></ol><p>The result is a <strong>vegetation</strong>: fibrin and blood cells with bacteria living inside it, where antibiotics and white cells reach poorly.</p>" + clar("organisms inside a fibrin mass are shielded from host defenses, which is why IE needs weeks of IV antibiotics.")),
      S("chain", "Cause → effect", chain([
        "Turbulent jet through a narrow opening (or a congenital or damaged valve) injures the endothelium",
        "Platelets and fibrin stick to the injured spot → sterile scaffold",
        "Transient bacteremia seeds the scaffold",
        "Bacteria multiply → vegetation grows",
        "Inflammation erodes the leaflet → perforation, regurgitation, new or changing murmur"
      ]) + Tbl(["Where the jet lands", "Why"], [
        ["Low-pressure side of a narrow orifice", "The jet strikes just past the narrowing"],
        ["Atrial side of the mitral valve", "Regurgitant jet hits it from the ventricle"],
        ["Ventricular side of the aortic valve / chordae", "Aortic regurgitant jet lands there"],
        ["Small VSD (more than a large one)", "Small, tight lesion = big pressure difference = fast jet"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The recipe explains who gets IE: <strong>congenital disease, rheumatic or degenerative valves, MVP, prosthetic valves, devices, and IV drug use</strong>. It also explains why the <strong>murmur is new or changing</strong> in 85%: the infection is destroying the valve.</p>" + HY("Small, tight lesions with a big pressure difference are higher risk than large, low-gradient ones.")),
      S("traps", "Common traps", traps([
        "<strong>\"A bigger VSD is riskier for IE.\"</strong> The opposite: the small one makes the faster jet.",
        "<strong>Putting vegetations on the high-pressure side.</strong> They form downstream, on the low-pressure side of the jet.",
        "<strong>Thinking bacteremia alone causes IE.</strong> Normal endothelium resists it; damage comes first."
      ]))
    ], [
      Q("idea", "Everyone has transient bacteremia when brushing teeth. Why do so few people get endocarditis?", ["Undamaged endothelium resists bacterial adherence and thrombus", "Saliva kills all oral bacteria", "Bacteremia never reaches the heart", "The spleen removes all bacteria before they reach the valves"], 0, "Endothelial damage is the first step; healthy endothelium resists infection."),
      Q("chain", "What forms on damaged endothelium before bacteria arrive?", ["A platelet-fibrin scaffold", "A calcium deposit", "An abscess", "A cholesterol plaque"], 0, "Platelets and fibrin adhere first, then become secondarily infected."),
      Q("chain", "A patient has mitral regurgitation. On which side of the mitral valve would a vegetation most likely form?", ["The atrial side", "The ventricular side", "Inside the papillary muscle", "On the aortic root"], 0, "The regurgitant jet strikes the lower-pressure atrial side."),
      Q("traps", "Two children have VSDs, one small and one large. Which has the higher IE risk, and why?", ["The small VSD, because the high pressure difference makes a fast, damaging jet", "The large VSD, because more blood crosses it", "Both equal, since size does not matter", "Neither, VSDs do not cause IE"], 0, "Small, tight lesions with a big pressure difference predispose to IE."),
      Q("bedside", "Why does IE so often produce a new or changing murmur?", ["Inflammation erodes and perforates the leaflet, causing regurgitation", "Fever raises cardiac output only", "The vegetation always causes stenosis", "Bacteria make a sound"], 0, "Leaflet destruction or scarring leads to regurgitation."),
      Q("idea", "Why does endocarditis need weeks of IV antibiotics rather than a short course?", ["Bacteria inside the fibrin vegetation are shielded from antibiotics and white cells", "The bacteria are always resistant", "Oral antibiotics never reach the blood", "The valve must be replaced first"], 0, "Clarification (standard physiology): the fibrin mass shields organisms."),
      Q("chain", "If a vegetation is left untreated, what happens to the valve?", ["It enlarges and destroys or scars the leaflet, causing regurgitation", "It shrinks on its own", "It calcifies harmlessly", "It turns into stenosis only"], 0, "Without treatment the vegetation enlarges and causes regurgitation or perforation."),
      Q("traps", "Which of these is the FIRST step in vegetation formation?", ["Endothelial injury", "Bacteremia", "Bacterial adherence", "Leaflet perforation"], 0, "Endothelial injury is the initial step.")
    ]),

    D("iepc-where-it-goes", "Where the pieces go: embolic vs immune findings", "A vegetation sheds pieces downstream (left side to the body and brain, right side to the lungs), while immune complexes cause a separate set of findings.", [
      S("idea", "The idea", "<p>IE causes trouble two ways:</p><ul><li><strong>Embolic:</strong> bits of the vegetation break off and travel <em>downstream</em> of the infected valve. Left-sided valves send them to the <strong>brain, kidney, spleen, skin</strong>. Right-sided (tricuspid) valves send them to the <strong>lungs</strong> as septic emboli.</li><li><strong>Immunologic:</strong> antibody-antigen complexes cause <strong>Osler nodes, Roth spots, glomerulonephritis, + RF</strong>.</li></ul><p>IV drug users inject bacteria into the venous side, so the first valve they meet is the <strong>tricuspid</strong>.</p>" + clar("the venous-side explanation for tricuspid IE in IVDU is standard teaching; the slide poses it as a question.")),
      S("chain", "Cause → effect", chain([
        "Vegetation on a valve",
        "Fragments break off and follow the blood flow",
        "Left side → systemic arteries → stroke, brain abscess, renal or splenic infarct, Janeway lesions",
        "Right side → pulmonary arteries → septic pulmonary emboli (cough, dyspnea, nodules)",
        "Meanwhile immune complexes deposit → Osler nodes, Roth spots, GN"
      ]) + Tbl(["Finding", "Feels", "Mechanism"], [
        ["Janeway lesions (palms, soles)", "<strong>Painless</strong>", "Septic micro-emboli → micro-abscesses"],
        ["Splinter hemorrhages", "Painless", "Embolic (vertical, under the nail)"],
        ["Osler nodes (finger and toe pads)", "<strong>Painful</strong>", "Immune-mediated vasculitis"],
        ["Roth spots (retina, pale center)", "None", "Immunologic"],
        ["Glomerulonephritis", "None", "Immune complex"]
      ]) + Mn("Mnemonic", "Janeway = Just there (painless); Osler = Ouch (painful).")),
      S("bedside", "Why it matters clinically", "<p>Ask where the vegetation is, then look downstream. A febrile IV drug user with cough and multiple lung nodules has tricuspid IE until proven otherwise. A febrile patient with a new murmur and a stroke has left-sided IE. Immunologic findings (Osler, Roth, GN, + RF) are Duke <strong>minor</strong> criteria.</p>" + HY("IVDU: tricuspid valve, S. aureus (~70%), septic pulmonary emboli.")),
      S("traps", "Common traps", traps([
        "<strong>Swapping Janeway and Osler.</strong> Janeway = painless, embolic; Osler = painful, immune.",
        "<strong>Expecting a stroke from tricuspid IE.</strong> Right-sided emboli go to the lungs.",
        "<strong>Calling Roth spots embolic.</strong> The slides list them as immunologic."
      ]))
    ], [
      Q("chain", "An IV drug user with tricuspid endocarditis throws an embolus. Where does it most likely go?", ["The lungs", "The brain", "The spleen", "The kidneys"], 0, "Right-sided emboli travel to the pulmonary arteries."),
      Q("idea", "Why do IV drug users mostly get tricuspid valve endocarditis?", ["Injected bacteria enter the venous side, so the tricuspid is the first valve they meet", "The tricuspid valve is the thickest", "Drugs damage only the aortic valve", "Left-sided valves are immune to S. aureus"], 0, "Clarification (standard teaching): venous injection reaches the right heart first."),
      Q("chain", "A patient with mitral valve IE suddenly develops aphasia. What explains it?", ["A vegetation fragment embolized to the brain", "An immune complex in the retina", "A septic pulmonary embolus", "Tricuspid regurgitation"], 0, "Left-sided emboli go to the systemic circulation, including the brain."),
      Q("traps", "Painful violaceous nodules on the fingertips in endocarditis are caused by what?", ["Immune-mediated vasculitis (Osler nodes)", "Septic micro-abscesses (Janeway lesions)", "Splinter hemorrhages", "Direct trauma"], 0, "Osler nodes are painful and immune-mediated."),
      Q("traps", "Painless red macules on the soles in endocarditis are caused by what?", ["Septic micro-emboli forming micro-abscesses", "Immune complex deposition", "Vasospasm", "Venous stasis"], 0, "Janeway lesions are painless and embolic."),
      Q("bedside", "Which finding counts as an immunologic minor Duke criterion?", ["Roth spots", "A vegetation on echo", "Two positive blood cultures with S. aureus", "New valvular regurgitation"], 0, "Immunologic phenomena: + RF, Osler nodes, Roth spots, GN."),
      Q("chain", "Endocarditis causes hematuria and proteinuria. Which mechanism does this reflect?", ["Immune complex glomerulonephritis", "Septic pulmonary emboli", "Tamponade", "Aortic regurgitation"], 0, "Immune complex-mediated GN is a minor criterion."),
      Q("bedside", "What is the most common organism in IV drug users with endocarditis?", ["Staphylococcus aureus", "Strep viridans", "Enterococcus", "HACEK organisms"], 0, "S. aureus causes about 70% of IE in IVDU.")
    ]),

    D("iepc-culture-then-cover", "Culture first, cover broad, then narrow", "Blood cultures identify the organism and drive weeks of therapy, so they are drawn before antibiotics; virulence sets the tempo, and anything antibiotics cannot reach needs surgery.", [
      S("idea", "The idea", "<p>Antibiotics will sterilize the blood fast, so if you give them first you may never learn the organism. That is why <strong>3 blood cultures from separate sites</strong> come first, then <strong>empiric gram-positive and gram-negative coverage</strong>, then therapy is tailored to culture.</p><p>The organism also sets the <strong>tempo</strong>: virulent bugs (S. aureus) destroy valves fast and cause acute heart failure; less virulent ones (Strep viridans, Enterococcus faecalis) smolder for weeks.</p>"),
      S("chain", "Cause → effect", chain([
        "Suspected IE → admit",
        "3 sets of blood cultures from separate sites, then echo (TTE, then TEE if negative)",
        "Empiric antibiotics: native valve = vancomycin + ceftriaxone; prosthetic = vancomycin + Zosyn (covers Pseudomonas)",
        "Organism identified → tailor (nafcillin MSSA, vancomycin MRSA, PCN G for most strep)",
        "Fever persists or HF/abscess/emboli → look for what antibiotics cannot fix → surgery"
      ]) + Tbl(["Surgery when", "Why antibiotics alone fail"], [
        ["Acute HF from severe valve dysfunction", "The valve is mechanically destroyed"],
        ["Myocardial abscess", "Walled-off pus needs drainage; can cause new heart block"],
        ["Fungal or multi-drug resistant organism", "Drugs can't sterilize it"],
        ["Recurrent emboli or large mobile vegetation", "The source keeps shedding"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Strep and enterococci should defervesce in 3–4 days; staph and Pseudomonas may take up to 7. <strong>Fever beyond that</strong> means look for abscess, metastatic infection, or the wrong drug. A <strong>new heart block</strong> in IE suggests the infection has spread into the conduction tissue (abscess).</p>" + clar("PR prolongation from an aortic root abscess near the AV node is standard teaching; the slides say abscess 'can affect electrical conduction'.")),
      S("traps", "Common traps", traps([
        "<strong>Giving antibiotics before cultures</strong> in a stable patient.",
        "<strong>Using native-valve empiric therapy for a prosthetic valve.</strong> PVE needs Pseudomonas coverage (Zosyn).",
        "<strong>Treating a new heart block in IE as unrelated.</strong> Think abscess, which needs surgery."
      ]))
    ], [
      Q("idea", "Why are blood cultures drawn before antibiotics in suspected endocarditis?", ["Antibiotics can sterilize cultures and hide the organism that guides weeks of therapy", "Antibiotics damage the valve", "Cultures are only valid in the morning", "Antibiotics cause false-positive cultures"], 0, "Cultures first, then empiric therapy, then tailor."),
      Q("chain", "A patient with a mechanical aortic valve has suspected IE. Why add Zosyn instead of ceftriaxone?", ["Prosthetic valve IE needs Pseudomonas coverage", "Ceftriaxone is never used in IE", "Zosyn covers MRSA", "Zosyn is safer with a mechanical valve"], 0, "PVE empiric therapy is vancomycin + Zosyn, which covers Pseudomonas."),
      Q("bedside", "A patient being treated for IE develops a new first-degree heart block. What should you suspect?", ["A myocardial abscess extending into the conduction system", "A normal drug side effect", "Septic pulmonary emboli", "Pericarditis"], 0, "Abscess can affect conduction and is a surgical indication."),
      Q("chain", "Which IE complication requires surgery because antibiotics alone will not fix it?", ["Myocardial abscess", "Low-grade fever on day 2", "Positive blood culture for Strep viridans", "Mild anemia"], 0, "Abscess needs drainage; antibiotics alone are not enough."),
      Q("idea", "Why does S. aureus endocarditis often present acutely with heart failure while Strep viridans smolders?", ["S. aureus is more virulent and destroys the valve quickly", "Strep viridans only infects prosthetic valves", "S. aureus only causes stenosis", "Strep viridans is resistant to the immune system"], 0, "Virulent organisms cause rapid valve destruction and CHF."),
      Q("bedside", "A patient with strep IE still has fever on day 9 of correct antibiotics. What does this suggest?", ["An abscess, metastatic infection, or inadequate therapy", "Normal recovery", "Drug fever only", "The organism is cured"], 0, "Strep should defervesce in 3-4 days; persistent fever needs a search."),
      Q("traps", "Fungal endocarditis is found. Why is surgery usually needed?", ["Antifungals alone can't sterilize the vegetation", "Fungi cannot be cultured", "Fungal IE is always right-sided", "Antifungals damage the valve"], 0, "Difficult-to-treat pathogens like fungi are a surgical indication."),
      Q("chain", "If the TTE is negative but IE is still suspected, what is the next imaging step?", ["Transesophageal echo", "Chest X-ray", "Stress test", "Repeat TTE in a year"], 0, "TEE is more sensitive when TTE is negative.")
    ]),

    D("iepc-prophylaxis-both", "Prophylaxis needs BOTH a high-risk heart and a high-risk procedure", "Prophylaxis is reserved for patients whose heart would be devastated by IE who are also having a procedure that throws bacteria into the blood, mainly gum manipulation.", [
      S("idea", "The idea", "<p>No trial has proven that prophylactic antibiotics prevent IE, so the AHA limits them to cases where the <strong>stakes are highest AND the bacteremia is likeliest</strong>. Both conditions must be true.</p><p><strong>High-risk heart:</strong> prosthetic valve or repair (including TAVR), LVAD, prior IE, transplant valvulopathy, certain congenital disease. <strong>High-risk procedure:</strong> manipulation of gingiva or perforation of oral mucosa, T&amp;A, bronchoscopy with biopsy, infected skin/MSK surgery.</p>"),
      S("chain", "Cause → effect", chain([
        "Procedure breaks the mucosa where bacteria live (gums, respiratory tract, infected skin)",
        "Burst of bacteremia",
        "In a heart with prosthetic material or prior IE, bacteria can stick and the outcome is severe",
        "So: amoxicillin 2 g PO 1 hour before the dental procedure (alternatives cephalexin, doxycycline, azithromycin)",
        "Ordinary moderate-risk lesions (MVP, bicuspid valve, HOCM, ASD, pacers, stents, CABG) don't get it"
      ]) + Tbl(["Scenario", "Prophylaxis?"], [
        ["Mechanical valve + dental cleaning", "<strong>Yes</strong>"],
        ["Mechanical valve + colonoscopy", "No (GI/GU: no routine prophylaxis)"],
        ["MVP + tooth extraction", "No (intermediate-risk heart)"],
        ["Prior IE + tonsillectomy", "<strong>Yes</strong>"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Ask two questions every time: <em>Is the heart highest-risk?</em> <em>Does the procedure manipulate gums, the respiratory tract with biopsy, or infected tissue?</em> Only two yeses earn the amoxicillin.</p>" + HY("Repaired congenital defect with prosthetic material: prophylaxis only for the first 6 months, unless a residual defect remains.")),
      S("traps", "Common traps", traps([
        "<strong>Giving prophylaxis for GI or GU procedures.</strong> Not routine.",
        "<strong>Giving prophylaxis for MVP, bicuspid valve, HOCM, pacers.</strong> Intermediate risk, not recommended.",
        "<strong>Thinking prophylaxis is proven by trials.</strong> It's based on theory."
      ]))
    ], [
      Q("idea", "A patient with a bioprosthetic valve is having a colonoscopy. Do they need IE prophylaxis?", ["No, GI procedures don't get routine prophylaxis", "Yes, any procedure qualifies", "Yes, because the valve is bioprosthetic", "Only if they had prior MVP"], 0, "Both a high-risk heart AND a high-risk procedure are needed."),
      Q("chain", "A patient with mitral valve prolapse is having a tooth extracted. Prophylaxis?", ["No, MVP is not a highest-risk condition", "Yes, amoxicillin 2 g", "Yes, vancomycin", "Only if a murmur is present"], 0, "MVP is intermediate risk; prophylaxis not routinely recommended."),
      Q("chain", "A patient with prior endocarditis is having a dental cleaning. What is the drug of choice?", ["Amoxicillin 2 g PO 1 hour before", "Vancomycin IV after", "Ceftriaxone IM", "No antibiotic needed"], 0, "Prior IE is highest risk; dental cleaning manipulates gingiva."),
      Q("bedside", "Why does dental work top the list of high-risk procedures?", ["Manipulating the gums throws oral bacteria into the blood", "Dental anesthetic damages valves", "The mouth is closest to the heart", "Teeth contain fungi"], 0, "Gingival manipulation causes bacteremia."),
      Q("traps", "A child had an ASD closed with a device 2 years ago and has no residual defect. Prophylaxis for dental work?", ["No, the 6-month window has passed and there is no residual defect", "Yes, lifelong", "Yes, any device qualifies", "Only for GI procedures"], 0, "Repaired with prosthetic material: first 6 months only, unless residual defect."),
      Q("idea", "What is the evidence base for IE prophylaxis?", ["Mostly theoretical; no human study has proven it prevents IE", "Large randomized trials", "Meta-analyses showing 90% reduction", "It has been shown harmful"], 0, "Based more on theory than trial data."),
      Q("chain", "A patient with an LVAD needs incision and drainage of a skin abscess. Prophylaxis?", ["Yes, covering skin flora", "No, skin procedures never qualify", "Only if fever is present", "Only amoxicillin"], 0, "LVAD is highest risk; infected skin surgery qualifies, cover skin flora.")
    ]),

    D("iepc-inflamed-sac", "Pericarditis: an inflamed sac rubbing the whole heart", "The pericardium wraps the entire heart, so inflammation causes pain that changes with position and ST elevation everywhere instead of in one coronary territory.", [
      S("idea", "The idea", "<p>The pericardium is a two-layer sac with 5–15 mL of lubricating fluid. When it is inflamed (usually viral), the rough layers <strong>rub</strong> (friction rub) and the pain is <strong>sharp, pleuritic, worse supine, better sitting up and leaning forward</strong>.</p><p>Because the sac covers <em>all</em> of the heart, the injury current shows up as <strong>diffuse ST elevation without reciprocal changes</strong>. An MI hits one artery's territory, so it has reciprocal depression elsewhere.</p>" + clar("leaning forward pulls the heart away from the inflamed back of the sac and lowers contact; this is standard teaching.")),
      S("chain", "Cause → effect", chain([
        "Viral (or uremic, neoplastic, post-MI, autoimmune) inflammation of the sac",
        "Inflamed layers rub → friction rub, sharp pleuritic pain",
        "Lying flat increases contact → worse; leaning forward → better",
        "Inflammation over the whole epicardium → diffuse ST elevation, no reciprocal changes",
        "Inflammation can leak fluid → effusion"
      ]) + Tbl(["", "Pericarditis", "STEMI"], [
        ["ST elevation", "Diffuse, many leads", "One coronary territory"],
        ["Reciprocal depression", "<strong>No</strong>", "Yes"],
        ["Pain", "Sharp, pleuritic, positional", "Pressure, not positional"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Treatment targets the inflammation: <strong>NSAIDs (ASA or ibuprofen) for 2 weeks</strong> plus <strong>colchicine for 3 months</strong>. NSAIDs relieve pain but don't change the course; colchicine <strong>reduces recurrence</strong>. Steroids are for NSAID contraindication or autoimmune/uremic causes, and may <strong>increase</strong> recurrence.</p>" + HY("Dressler's: pericarditis days to weeks after a transmural MI, an immune response to the infarct.")),
      S("traps", "Common traps", traps([
        "<strong>Calling diffuse ST elevation a huge MI.</strong> No reciprocal changes + positional pain = pericarditis.",
        "<strong>Reaching for steroids first.</strong> They may raise recurrence.",
        "<strong>Stopping colchicine with the NSAID.</strong> Colchicine runs 3 months to prevent recurrence."
      ]))
    ], [
      Q("chain", "Why does pericarditis cause ST elevation in many leads rather than one territory?", ["The inflamed sac covers the whole heart", "Every coronary artery is blocked", "The QRS is widened", "Pericardial fluid amplifies voltage"], 0, "Diffuse inflammation = diffuse ST elevation without reciprocal changes."),
      Q("bedside", "Diffuse ST elevation WITH reciprocal ST depression in the opposite leads points to what?", ["An MI in one coronary territory", "Classic pericarditis", "Pericardial effusion", "Constrictive pericarditis"], 0, "Reciprocal changes suggest infarction; pericarditis lacks them."),
      Q("chain", "A patient with chest pain feels better sitting up and leaning forward. Why?", ["It reduces contact between the inflamed pericardial layers", "It raises preload", "It slows the heart", "It opens the coronary arteries"], 0, "Clarification (standard teaching): leaning forward relieves pericardial pain."),
      Q("idea", "What is colchicine's main job in acute pericarditis?", ["Reducing recurrence", "Curing the viral infection", "Draining the effusion", "Pain relief alone, for 2 weeks"], 0, "Colchicine improves symptoms and reduces recurrence."),
      Q("traps", "Why are steroids not first-line for idiopathic pericarditis?", ["They may increase the risk of recurrence", "They don't reduce inflammation", "They cause tamponade", "They are antivirals"], 0, "Steroids are for NSAID contraindication or specific causes."),
      Q("chain", "Three weeks after a large transmural MI, a patient develops pleuritic chest pain and a rub. What is the mechanism?", ["An immune-inflammatory response to the infarct (Dressler's)", "A new coronary occlusion", "Viral infection", "Uremia"], 0, "Dressler's follows transmural MI by days to weeks."),
      Q("bedside", "What is the most common cause of acute pericarditis?", ["Viral (often called idiopathic)", "Bacterial", "Neoplastic", "Trauma"], 0, "Viral is most common and likely behind idiopathic cases."),
      Q("traps", "The NSAID relieves a patient's pericarditis pain in 2 days. Does that mean the course is shortened?", ["No, NSAIDs relieve symptoms but don't alter the course", "Yes, it cures it", "Yes, recurrence is prevented", "Only if colchicine is skipped"], 0, "NSAIDs relieve pain and inflammation but don't alter the course.")
    ]),

    D("iepc-tamponade-squeeze", "Tamponade: speed beats size", "The pericardium stretches slowly but not quickly, so a small fast bleed can squeeze the heart while a large slow effusion may not; the thin-walled right heart is crushed first.", [
      S("idea", "The idea", "<p>Whether an effusion causes symptoms depends mostly on <strong>how fast it accumulates</strong>. A slowly growing effusion lets the sac stretch, so it can get large silently. A sudden 150 mL bleed (trauma, procedure, dissection) has nowhere to go → pressure spikes → <strong>tamponade</strong>.</p><p>Pericardial pressure squeezes the chamber with the lowest pressure first: the <strong>right heart fills poorly first</strong>, then the left. Less filling → less stroke volume → hypotension, and the body compensates with <strong>tachycardia</strong> and vasoconstriction.</p>" + clar("the pressure-volume (compliance) curve of the pericardium is standard physiology; the slides say 'too large or accumulates too rapidly'.")),
      S("chain", "Cause → effect", chain([
        "Fluid accumulates faster than the sac can stretch",
        "Pericardial pressure rises above right-heart filling pressure",
        "RV (then LV) can't fill → stroke volume falls",
        "Hypotension + JVD + muffled heart sounds (Beck's triad), narrow pulse pressure, tachycardia",
        "Inspiration fills the RV, septum bows into the LV → SBP drops > 10 mmHg (pulsus paradoxus)"
      ]) + Tbl(["Finding", "Why"], [
        ["JVD", "Blood backs up because the RV can't fill"],
        ["Muffled sounds, low EKG voltage", "Fluid between the heart and the chest wall"],
        ["QRS (electrical) alternans", "Heart swings within the fluid"],
        ["Pulsus paradoxus", "RV and LV compete for a fixed space"]
      ]) + clar("the septal-shift mechanism of pulsus paradoxus is standard physiology.")),
      S("bedside", "Why it matters clinically", "<p>Tamponade is an emergency. The fix is <strong>pericardiocentesis</strong>. While you prepare, <strong>hydrate</strong> to raise filling pressure above pericardial pressure and use <strong>vasopressors</strong> for hypotension. Echo is the test of choice.</p>" + clar("diuretics and venodilators (nitrates) lower filling pressure and can cause collapse in tamponade; this is standard teaching.") + HY("Hypotension + JVD + muffled heart sounds = Beck's triad.")),
      S("traps", "Common traps", traps([
        "<strong>\"Bigger effusion = more dangerous.\"</strong> Speed of accumulation matters more.",
        "<strong>Diuresing the JVD.</strong> The heart needs that filling pressure; give fluids.",
        "<strong>Slowing the tachycardia.</strong> It's the compensation keeping output up."
      ]))
    ], [
      Q("idea", "A patient has a 1-liter effusion that built up over months and is asymptomatic. Another has 150 mL after a catheter perforation and is hypotensive. Why the difference?", ["Slow accumulation lets the pericardium stretch; fast accumulation does not", "The larger effusion is less dense", "The smaller effusion is infected", "Volume never matters"], 0, "Rate of accumulation determines whether tamponade develops."),
      Q("chain", "In tamponade, which side of the heart is compressed first, and why?", ["The right side, because it fills at the lowest pressure", "The left side, because it is thicker", "Both equally", "Only the atria"], 0, "Right-heart filling is impaired first."),
      Q("chain", "Pericardial pressure rises. What happens to stroke volume and heart rate?", ["Stroke volume falls; heart rate rises to compensate", "Stroke volume rises; heart rate falls", "Both fall", "Both rise from increased preload"], 0, "Reduced filling lowers SV; tachycardia compensates."),
      Q("bedside", "A tamponade patient is hypotensive while you set up for pericardiocentesis. What helps?", ["IV fluids and vasopressors", "IV furosemide", "Nitroglycerin", "A beta blocker"], 0, "Hydrate and use pressors; the definitive fix is pericardiocentesis."),
      Q("traps", "A tamponade patient's neck veins are distended. Why is a diuretic dangerous?", ["It lowers filling pressure, so the compressed heart fills even less", "It causes hyperkalemia", "It raises pericardial pressure", "It worsens the rub"], 0, "Clarification (standard teaching): preload keeps the heart filling against the pressure."),
      Q("chain", "During inspiration in tamponade, systolic BP drops more than 10 mmHg. What causes this?", ["The RV fills more and pushes the septum into the LV, which is limited by the fixed space", "The aorta collapses", "Heart rate slows", "The LV fills more"], 0, "Pulsus paradoxus: ventricles compete for a fixed space."),
      Q("bedside", "Why does the EKG in a large effusion show low voltage and alternating QRS height?", ["Fluid dampens the signal and the heart swings within the sac", "The bundle branches are blocked", "Potassium is high", "The patient is in AF"], 0, "Dampened voltage and QRS alternans."),
      Q("traps", "A tamponade patient is tachycardic at 125. Should you give a beta blocker?", ["No, tachycardia is maintaining cardiac output", "Yes, to improve filling time", "Yes, to lower oxygen demand", "Only if the BP is low"], 0, "With a fixed stroke volume, HR is the remaining way to keep CO up.")
    ]),

    D("iepc-constriction-box", "Constriction: a stiff box around the heart", "A thick, scarred pericardium stops the heart from filling past a fixed volume, so the patient looks like slowly worsening right heart failure and depends on heart rate.", [
      S("idea", "The idea", "<p>In constrictive pericarditis the sac becomes <strong>thick, fibrotic, sometimes calcified</strong>. Early in diastole the heart fills quickly, then slams into the rigid shell and stops. Filling is <strong>capped</strong>.</p><p>With stroke volume capped, the only way to raise cardiac output is <strong>heart rate</strong>, so tachycardia is protective. Blood that can't enter backs up into the veins: <strong>elevated JVP, edema, fluid overload</strong>, a picture of slowly progressive heart failure.</p>"),
      S("chain", "Cause → effect", chain([
        "Prior inflammation (viral, radiation, surgery, TB, uremia, CTD) scars the pericardium",
        "Rigid shell restricts diastolic filling",
        "Rapid early filling stops abruptly → pericardial knock (early diastolic sound at LSB)",
        "Fixed stroke volume → output depends on HR; venous pressures rise → JVD, edema, DOE",
        "Beta blockers or CCBs slow HR → output falls"
      ]) + Tbl(["", "Tamponade", "Constriction"], [
        ["Onset", "Acute/subacute", "Slow, progressive"],
        ["Cause of restriction", "Fluid", "Thick, scarred, calcified sac"],
        ["Classic sound", "Muffled", "Pericardial knock"],
        ["Key test", "Echo", "Echo (thick, immobile pericardium); cath if non-diagnostic"],
        ["Fix", "Pericardiocentesis", "Pericardiectomy"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Think constriction in a patient with <strong>heart failure signs, a normal-sized heart, and a history of radiation, cardiac surgery, or TB</strong>. Early disease gets NSAIDs + colchicine for 2–3 months; late disease gets diuretics and salt restriction if not a surgical candidate; moderate-severe disease gets <strong>pericardiectomy</strong>.</p>" + HY("Tachycardia is protective: avoid beta blockers and calcium channel blockers.")),
      S("traps", "Common traps", traps([
        "<strong>Rate-controlling the tachycardia.</strong> It is the compensation.",
        "<strong>Confusing the knock with an S3.</strong> Both are early diastolic; the knock comes from abrupt halt against the shell.",
        "<strong>Missing it as 'just heart failure'.</strong> Look for the history (radiation, surgery, TB)."
      ]))
    ], [
      Q("chain", "In constrictive pericarditis, what happens to cardiac output if a beta blocker slows the heart rate?", ["It falls, because stroke volume is fixed", "It rises from better filling", "It stays the same", "It rises because the knock disappears"], 0, "Tachycardia is protective; avoid beta blockers and CCBs."),
      Q("idea", "What causes the pericardial knock?", ["Rapid early diastolic filling stopping abruptly against the rigid sac", "Valve closure", "Atrial contraction", "Friction between inflamed layers"], 0, "Early diastolic sound as filling halts against the shell."),
      Q("chain", "Why does constrictive pericarditis cause JVD and peripheral edema?", ["Blood that can't fill the heart backs up into the veins", "The LV ejects too much", "Albumin is low", "The pericardium leaks fluid"], 0, "Restricted filling raises venous pressures."),
      Q("bedside", "A patient with prior chest radiation has progressive DOE, edema, high JVP, and a calcified rim around the heart on CXR. What is the definitive therapy for moderate-severe disease?", ["Pericardiectomy", "Pericardiocentesis", "Beta blocker", "Colchicine only"], 0, "Pericardiectomy for moderate to severe constriction."),
      Q("traps", "A constrictive pericarditis patient has a heart rate of 110. Should you give diltiazem?", ["No, tachycardia is protective", "Yes, to improve filling", "Yes, to treat atrial arrhythmias always", "Only if the knock is loud"], 0, "Avoid CCBs and beta blockers."),
      Q("bedside", "Which test is essential for diagnosing constrictive pericarditis?", ["Echo showing a thick, immobile pericardium", "Troponin", "Blood cultures", "D-dimer"], 0, "Echo usually makes the diagnosis; cath if non-diagnostic."),
      Q("chain", "What is the most common cause of constrictive pericarditis in developing countries?", ["Tuberculosis", "Radiation", "Viral", "Cardiac surgery"], 0, "TB is most common in developing countries; idiopathic/viral in developed ones."),
      Q("idea", "How does constriction differ from tamponade in what restricts filling?", ["Constriction is a rigid scarred sac; tamponade is fluid under pressure", "Both are fluid", "Constriction is a valve problem", "Tamponade is a scarred sac"], 0, "Same result (restricted filling), different cause.")
    ])
  ]);
})();
