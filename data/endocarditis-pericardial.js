/* Cardio Part 2, Infective Endocarditis & Pericardial Disease (Diem, 73 slides). Official objectives in order:
   objective 1 split into risk factors/epidemiology, organisms, pathophysiology, presentation;
   objective 2 into workup + Duke, complications, treatment/surgery/course; objective 5 per condition.
   Slide 31 (Duke minor criteria) is SmartArt: read from the diagram data. Only the MAJOR criteria are tested in depth (objective says so).
   Questions the deck asks aloud for class (slide 16 why tricuspid, 35 where emboli go, 36 fungal clues, 40 persistent fever,
   57 what makes an effusion symptomatic, 59 the body's response, 68 what constriction causes) are answered from standard
   teaching and labeled "Source note" on the cards. Slide 49 lists "HIB" among viral causes; read as HIV.
   Cynthia (IVDU) and Anne (post root canal) are the deck's own teaching cases. */
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

  window.ENDOCARDITIS_PERICARDIAL_OBJECTIVES = [

    /* ---------- 1a ---------- */
    S("01a-ie-risk-factors-epidemiology", "1a. IE: definition, risk factors and epidemiology", "Objective 1. Slides 6, 12–13.", [
      C("What IE is and who gets it",
        "<p><strong>Infective endocarditis (IE)</strong>: a <strong>bacterial or fungal</strong> infection of the <strong>valves or endocardium</strong>, including the great vessels.</p>" +
        "<p><strong>Risk factors for native valve endocarditis (NVE):</strong></p><ul>" +
        "<li><strong>Rheumatic</strong> heart disease</li>" +
        "<li><strong>Congenital or degenerative valve disease</strong>, including <strong>MVP with mitral regurgitation</strong></li>" +
        "<li><strong>Congenital heart defects</strong>: VSD, Tetralogy of Fallot, coarctation, PDA</li>" +
        "<li><strong>IV drug use</strong></li>" +
        "<li><strong>Poor dentition</strong> or frequent dental infection</li>" +
        "<li><strong>HACIE</strong> (healthcare-associated IE, up to <strong>15–30%</strong>): intravascular devices, hyperalimentation (TPN) catheters, pacemakers, shunts</li></ul>" +
        mn("<strong>Valves, Veins, Teeth, and Tubes</strong>: damaged valves (rheumatic, degenerative, congenital), IV drug use, poor dentition, and healthcare lines and devices.") +
        "<p>Tetralogy of Fallot = pulmonary stenosis, VSD, overriding aorta, RV hypertrophy.</p>",
        ["ie-definition", "nve-risk-factors", "hacie"],
        [q("Infective endocarditis is an infection of:", "The heart valves or endocardium, including the great vessels", ["The pericardial sac only", "The myocardium only", "The coronary arteries only"], "Valves or endocardium, bacterial or fungal."),
          q("Which valve problem in the risk factor list specifically comes with mitral regurgitation?", "Mitral valve prolapse", ["Bicuspid aortic valve", "Mitral stenosis", "Tricuspid atresia"], "MVP with MR is a risk factor for NVE."),
          q("Which group of congenital defects is listed as an IE risk factor?", "VSD, Tetralogy of Fallot, coarctation, PDA", ["ASD secundum only", "Dextrocardia and situs inversus", "Bicuspid pulmonic valve only"], "Slide 6 lists VSD, TOF, coarct, PDA."),
          q("What does HACIE stand for?", "Healthcare-associated infective endocarditis", ["Highly acute culture-negative IE", "Hemolytic anemia with cardiac IE", "Hospital-acquired candidal IE only"], "Healthcare-associated IE."),
          q("About what share of IE is healthcare associated?", "Up to 15 to 30%", ["Under 1%", "About 50%", "Over 80%"], "HACIE up to 15–30%."),
          q("Which of these is a HACIE source listed in the deck?", "Hyperalimentation (TPN) catheter", ["Contact lenses", "Hearing aids", "Dental fillings"], "Intravascular devices, TPN catheters, pacemakers, shunts.")],
        [q("A 70-year-old on home TPN through a central line develops fever and a new murmur. Which risk category does this IE fall into?", "Healthcare-associated IE from an intravascular catheter", ["Rheumatic heart disease", "Congenital heart disease", "IV drug use"], "Hyperalimentation catheters are a HACIE source."),
          q("A patient with rotten teeth and frequent dental abscesses asks why the dentist cares about his heart. Which IE risk factor does he have?", "Poor dentition with frequent dental infection", ["Healthcare-associated IE", "Rheumatic heart disease", "A congenital heart defect"], "Poor dentition seeds the blood with oral bacteria.")]),
      C("Underlying disease, valves affected, and the changing epidemiology",
        tbl(["Underlying disease in IE", "Share"], [["Atherosclerotic or pre-existing heart disease (rheumatic, MVP, aortic stenosis)", "<strong>30–40%</strong> (largest)"], ["Prosthetic valve (PVE)", "15–30%"], ["Congenital", "10–20%"], ["IV drug use", "10–20%"], ["Cardiac devices", "about 5%"]]) +
        tbl(["Valve affected", "Share"], [["<strong>Mitral</strong>", "<strong>about 41%</strong> (most common)"], ["Aortic", "about 37%"], ["Tricuspid", "about 15–20%"], ["Mitral and aortic", "5–15%"], ["Pulmonic", "1%"]]) +
        hy("The average US IE patient is getting <strong>older</strong> because of: <strong>less rheumatic heart disease</strong>, <strong>more instrumentation, invasive procedures and lines</strong>, people <strong>living longer with immunosuppression</strong>, and many cases are now <strong>nosocomial</strong>."),
        ["ie-underlying-disease", "ie-valves-affected", "ie-epidemiology-trend"],
        [q("Which valve is most commonly affected by IE?", "Mitral", ["Aortic", "Tricuspid", "Pulmonic"], "Mitral about 41%, aortic about 37%."),
          q("Which valve is least commonly affected by IE?", "Pulmonic", ["Mitral", "Aortic", "Tricuspid"], "Pulmonic about 1%."),
          q("Which underlying condition is the largest group in IE?", "Pre-existing (atherosclerotic, rheumatic, degenerative) heart disease", ["Cardiac devices", "IV drug use", "Congenital heart disease"], "30–40%."),
          q("About what share of IE involves the tricuspid valve?", "15 to 20%", ["1%", "41%", "60%"], "Tricuspid about 15–20%."),
          q("Why is the average US IE patient getting older?", "Less rheumatic disease, more procedures and lines, longer survival with immunosuppression", ["More rheumatic fever in the elderly", "Fewer hospital procedures", "Childhood vaccines that fail with age"], "Slide 13."),
          q("Which change in rheumatic heart disease rates has shifted IE epidemiology?", "Rheumatic heart disease is decreasing", ["Rheumatic heart disease is rising sharply", "Rheumatic disease now causes most IE", "Rheumatic disease only affects the tricuspid"], "Declining rheumatic disease shifts IE toward older, device and procedure related cases.")],
        [q("A student asks why IE in the US is now more often a disease of older hospitalized adults than of young people with rheumatic hearts. Best answer?", "More invasive procedures, lines and immunosuppression, plus less rheumatic disease", ["Antibiotics no longer work in young people", "IV drug use has disappeared", "Rheumatic fever has become more common in the elderly"], "Slide 13 epidemiology shift.")])
    ]),

    /* ---------- 1b ---------- */
    S("01b-ie-organisms", "1b. IE: causative organisms", "Objective 1. Slides 14, 17.", [
      C("Native valve organisms",
        tbl(["Organism", "Pearl"], [
          ["<strong>Staphylococcus aureus</strong>", "<strong>Most common</strong>; acute, aggressive"],
          ["<strong>Strep viridans</strong>", "about 17%; oral flora, after dental work; subacute"],
          ["Enterococci", "GI and GU sources"],
          ["<strong>Strep bovis</strong> (group D, S. gallolyticus)", "Classic association with colon cancer: do a colonoscopy"],
          ["<strong>HACEK</strong>", "about 2%; oral commensals, slow growing"]]) +
        mn("<strong>HACEK</strong>: <strong>H</strong>aemophilus aphrophilus, <strong>A</strong>ctinobacillus actinomycetemcomitans, <strong>C</strong>ardiobacterium hominis, <strong>E</strong>ikenella corrodens, <strong>K</strong>ingella kingae.") +
        note("Strep bovis and colon cancer is standard teaching, not written on the slide."),
        ["nve-organisms", "hacek", "strep-bovis"],
        [q("What is the most common cause of native valve IE?", "Staphylococcus aureus", ["Strep viridans", "Enterococcus", "HACEK organisms"], "S. aureus is most common."),
          q("About what share of native valve IE is caused by Strep viridans?", "About 17%", ["About 2%", "About 50%", "About 90%"], "Slide 14."),
          q("What does the K in HACEK stand for?", "Kingella kingae", ["Klebsiella pneumoniae", "Kocuria", "Kluyvera"], "Kingella kingae."),
          q("What does the E in HACEK stand for?", "Eikenella corrodens", ["Enterococcus faecalis", "E. coli", "Enterobacter"], "Eikenella corrodens."),
          q("Where do HACEK organisms normally live?", "In the mouth (oral commensals)", ["In the colon", "On the skin", "In soil"], "Oral commensal species."),
          q("Strep bovis is also called:", "Group D strep (S. gallolyticus)", ["Group A strep", "Group B strep", "Strep pneumoniae"], "Group D strep, S. gallolyticus."),
          q("About what share of IE is caused by HACEK organisms?", "About 2%", ["About 17%", "About 40%", "About 70%"], "HACEK about 2%.")],
        [q("A 68-year-old with Strep bovis (S. gallolyticus) endocarditis is improving on antibiotics. What other test should be planned?", "Colonoscopy", ["Bronchoscopy", "Brain MRI", "Bone marrow biopsy"], "Strep bovis bacteremia is classically tied to colon cancer (standard teaching)."),
          q("Blood cultures in a patient with IE and poor dentition grow a slow-growing gram-negative oral organism, Eikenella. Which group does it belong to?", "HACEK", ["Enterococci", "Group D strep", "Coagulase-negative staph"], "Eikenella is the E in HACEK.")]),
      C("Acute vs subacute course by organism",
        tbl(["Course", "Organisms", "Picture"], [
          ["<strong>Acute, aggressive</strong>", "<strong>S. aureus</strong>, Strep pneumoniae, Strep pyogenes, Neisseria gonorrhea", "Rapid valve destruction and CHF"],
          ["<strong>Indolent (subacute)</strong>", "<strong>Strep viridans</strong>, Enterococcus faecalis, some gram-negative rods", "Few symptoms despite valve destruction; becoming rarer"]]) +
        hy("<strong>Timing of symptoms gives clues to the pathogen</strong>: days of high fever and sepsis suggests S. aureus; weeks of low-grade fever and malaise after dental work suggests Strep viridans."),
        ["ie-acute-organisms", "ie-indolent-organisms"],
        [q("Which organism causes rapid valve destruction and heart failure in IE?", "Staphylococcus aureus", ["Strep viridans", "Enterococcus faecalis", "Kingella kingae"], "Highly virulent: S. aureus, S. pneumoniae, S. pyogenes, N. gonorrhea."),
          q("Which organism classically causes an indolent course with few symptoms?", "Strep viridans", ["Staph aureus", "Strep pyogenes", "Neisseria gonorrhea"], "Indolent: Strep viridans, E. faecalis, some GNRs."),
          q("Is the indolent form of IE becoming more or less common?", "Less common", ["More common", "Unchanged", "Now the majority"], "Slide 17: becoming more rare."),
          q("Which sexually transmitted organism is listed as causing acute, destructive IE?", "Neisseria gonorrhea", ["Chlamydia trachomatis", "Treponema pallidum", "Trichomonas"], "N. gonorrhea is in the virulent list.")],
        [q("Anne, 65, had a root canal three months ago, then weeks of low fevers and confusion. Which organism best fits this slow course?", "Strep viridans", ["Staph aureus", "Pseudomonas", "Strep pyogenes"], "Indolent course after dental work points to oral strep."),
          q("A patient has 3 days of high fever and rigors, then new acute heart failure from a torn valve leaflet. Which organism is most likely?", "Staph aureus", ["Strep viridans", "Enterococcus faecalis", "HACEK"], "Rapid destruction and CHF = virulent organism, classically S. aureus.")])
    ]),

    /* ---------- 1c ---------- */
    S("01c-ie-pathophysiology", "1c. IE: pathophysiology and hemodynamics", "Objective 1. Slides 7–11.", [
      C("Three steps to IE",
        "<p>Everyone has <strong>transient bacteremia</strong> (brushing teeth, chewing). IE needs three things:</p>" +
        "<ol class=\"concept-chain\"><li><strong>Damaged or changed endothelium</strong> (the <strong>initial step</strong>; normal endothelium resists infection and thrombus)</li>" +
        "<li><strong>Platelets and fibrin</strong> stick to the injured spot and form a <strong>scaffold</strong> (sterile vegetation)</li>" +
        "<li><strong>Bacteremia</strong>: passing bacteria <strong>adhere</strong> and secondarily infect it</li></ol>" +
        hy("That is why people with <strong>abnormal valves</strong> get IE when everyone has transient bacteremia: the damaged surface gives bacteria somewhere to stick.") +
        "<p><strong>Vegetation</strong>: a mass of <strong>fibrin and blood cells</strong> that becomes a haven for bacteria. Usually at congenital malformations or damaged valves, on the <strong>left side</strong> of the heart.</p>",
        ["ie-three-requirements", "ie-endothelial-injury", "vegetation-definition"],
        [q("What is the initial step in developing IE?", "Endothelial injury", ["Bacteremia", "Fever", "Valve calcification"], "Undamaged endothelium resists infection, so injury comes first."),
          q("What are the three requirements for IE?", "Damaged endothelium, bacteremia, and adherence", ["Fever, murmur, and emboli", "Rheumatic fever, dental work, and fever", "Anemia, leukocytosis, and hematuria"], "Slide 8."),
          q("What forms the scaffold that bacteria later infect?", "Platelets and fibrin", ["Calcium deposits", "Cholesterol plaque", "Collagen scar"], "Platelet-fibrin adherence."),
          q("A vegetation is made of:", "Fibrin and blood cells with bacteria", ["Calcium and cholesterol", "Pus and fat", "Scar tissue only"], "Mass of fibrin and cellular elements."),
          q("On which side of the heart are vegetations most often found?", "Left side", ["Right side", "Equally both sides", "Only in the pericardium"], "Left side, at malformations or damaged valves.")],
        [q("A student asks why only some people get IE when everyone has bacteria in the blood after brushing their teeth. Best answer?", "Normal endothelium resists infection; damaged valves give bacteria a platelet-fibrin surface to stick to", ["Only some people have bacteremia", "IE needs a fungal co-infection", "IE only occurs with IV drug use"], "Endothelial damage is the first step."),
          q("A patient with a known damaged mitral valve has a dental cleaning. Which sequence explains how IE could follow?", "Damaged surface, then platelet-fibrin deposit, then bacteria from the cleaning adhere", ["Bacteria first damage a normal valve, then fibrin forms", "Fibrin forms in the blood, then lands on a normal valve", "Antibodies attack the valve, then bacteria follow"], "Injury, scaffold, then infection.")]),
      C("Where vegetations form, and what they do",
        "<p>Vegetations form on the <strong>low-pressure side</strong> where blood jets through a <strong>narrow opening</strong>:</p><ul>" +
        "<li><strong>Atrial side of the mitral valve</strong> (MR jet)</li><li><strong>Ventricular side of the aortic valve</strong> (AR jet)</li></ul>" +
        hy("<strong>Small, tight lesions</strong> are higher risk: a big <strong>pressure difference</strong> makes a fast jet. A <strong>small VSD</strong> is more likely to get IE than a large one.") +
        "<ol class=\"concept-chain\"><li>Infection causes inflammation and <strong>erosion</strong></li><li>Untreated vegetation enlarges</li><li>Leaflet destruction or scarring and retraction causes <strong>regurgitation</strong></li><li>Erosion can cause <strong>perforation</strong></li></ol>",
        ["vegetation-location", "small-lesion-risk", "ie-valve-destruction"],
        [q("On which side of the mitral valve do vegetations usually form?", "Atrial side", ["Ventricular side", "Papillary muscle", "Pericardial side"], "Low-pressure side of the jet: atrial side of the mitral."),
          q("On which side of the aortic valve do vegetations usually form?", "Ventricular side", ["Aortic (arterial) side", "Coronary ostia", "Mitral annulus"], "Low-pressure side of the AR jet."),
          q("Which VSD is more likely to get IE?", "A small VSD", ["A large VSD", "Both equal", "Only a repaired VSD"], "Small, tight lesions with a high pressure gradient."),
          q("Why are small, tight lesions higher risk for IE?", "A high pressure difference makes a fast jet that injures the low-pressure side", ["They have more blood flow overall", "They cause less turbulence", "They are always infected at birth"], "High pressure differential predisposes to IE."),
          q("Untreated vegetations usually cause which valve problem?", "Regurgitation", ["Stenosis", "Valve calcification", "Prolapse only"], "Leaflet destruction or retraction causes regurgitation."),
          q("What can erosion from IE lead to?", "Leaflet perforation", ["Valve calcification", "Pericardial calcification", "Coronary dissection"], "Erosions may perforate.")],
        [q("A child has a tiny, loud VSD and a sibling has a large, quiet VSD. Which child is at higher risk of IE, and why?", "The small VSD, because the high pressure gradient makes a damaging jet", ["The large VSD, because more blood crosses", "Both equal, because size does not matter", "Neither, because VSDs never get IE"], "Small VSD more likely than large."),
          q("A patient with IE on a previously normal aortic valve develops a new diastolic decrescendo murmur. What happened to the valve?", "Leaflet destruction caused aortic regurgitation", ["The valve became stenotic from calcium", "The valve prolapsed into the atrium", "A pericardial effusion compressed it"], "IE causes regurgitation.")])
    ]),

    /* ---------- 1d ---------- */
    S("01d-ie-presentation", "1d. IE: clinical presentation and classic exam findings", "Objective 1. Slides 2–5, 18–26.", [
      C("Fever, murmur, emboli",
        tbl(["Finding", "How often", "Pearl"], [
          ["<strong>Fever</strong>", "<strong>90%</strong>", "May be <strong>low grade</strong> in the elderly and debilitated"],
          ["<strong>Heart murmur</strong>", "<strong>85%</strong>", "<strong>New or changing</strong>"],
          ["<strong>Embolic phenomena</strong>", "<strong>over 50%</strong>", "Skin or other organs"]]) +
        "<p><strong>General symptoms:</strong> chills and night sweats; cough and dyspnea; arthralgias, myalgias, <strong>back pain</strong>; diarrhea, anorexia, N/V, abdominal pain, weight loss; headache and malaise.</p>" +
        hy("<strong>Fever + new murmur = IE until proven otherwise.</strong> In older patients the fever may be low grade and the first sign may be <strong>confusion</strong> (embolic), like Anne."),
        ["ie-fever", "ie-murmur", "ie-emboli", "ie-general-symptoms"],
        [q("What is the most common clinical finding in IE?", "Fever (about 90%)", ["Splinter hemorrhages", "Roth spots", "Osler nodes"], "Fever 90%, murmur 85%."),
          q("About how often is a heart murmur present in IE?", "About 85%", ["About 25%", "About 50%", "About 5%"], "Murmur 85%, new or changing."),
          q("About how often do embolic phenomena occur in IE?", "Over 50%", ["Under 5%", "About 10%", "Always"], "Over half."),
          q("In which patients may the fever of IE be only low grade?", "The elderly and debilitated", ["Children under 5", "IV drug users", "Pregnant women"], "Low grade in elderly and debilitated."),
          q("Which musculoskeletal complaint is listed among IE symptoms?", "Back pain", ["Heel pain", "Jaw claudication", "Morning stiffness over 1 hour"], "Arthralgias, myalgia, and back pain.")],
        [q("Cynthia, 41, uses IV heroin and has 3 days of fever, shaking chills and vomiting. She is febrile to 102.4, tachycardic, with a new soft systolic murmur at the left sternal border. What is the leading diagnosis?", "Infective endocarditis", ["Viral gastroenteritis", "Acute pericarditis", "Opioid withdrawal"], "Fever plus new murmur in an IVDU = IE."),
          q("Anne, 65, has had recurrent confusion and low fevers for weeks after a root canal, with two culture-negative urine treatments. What should be considered?", "Subacute IE with emboli to the brain", ["Recurrent UTI only", "Alzheimer disease", "Medication side effect only"], "Low-grade fever and AMS in the elderly after dental work suggests IE; draw blood cultures."),
          q("A 75-year-old has a temperature of 99.4, new confusion, and a new murmur. Why should IE still be on the list despite the low temperature?", "Fever may be only low grade in the elderly", ["IE never causes fever", "Fever over 104 is required for IE", "A low temperature rules out IE"], "Elderly may have low-grade fever.")]),
      C("Classic skin and eye signs",
        "<p>Seen in only about <strong>25%</strong> of patients.</p>" +
        tbl(["Sign", "What it looks like", "Painful?", "Cause"], [
          ["<strong>Splinter hemorrhages</strong>", "Subungual, <strong>vertical</strong> lines", "No", "Microemboli"],
          ["<strong>Petechiae</strong>", "Palate, conjunctiva", "No", "Microemboli"],
          ["<strong>Roth spots</strong>", "Retinal hemorrhages with <strong>pale centers</strong>", "No", "<strong>Immunologic</strong>"],
          ["<strong>Janeway lesions</strong>", "Flat macules on <strong>palms and soles</strong>", "<strong>Painless</strong>", "Micro-abscesses (neutrophils); more in <strong>acute</strong> IE"],
          ["<strong>Osler nodes</strong>", "Raised violaceous nodes on <strong>tips of fingers and toes</strong>, in crops", "<strong>Painful</strong>", "<strong>Immune</strong> vasculitis; more in <strong>subacute</strong> IE"]]) +
        mn("<strong>Osler = Ouch</strong> (painful, on the pads). <strong>Janeway = painless</strong>, on the palms and soles.") +
        hy("Immunologic: <strong>Osler nodes, Roth spots</strong> (and glomerulonephritis). Embolic/vascular: <strong>Janeway lesions</strong>, splinters, petechiae."),
        ["splinter-hemorrhages", "roth-spots", "janeway-lesions", "osler-nodes", "ie-petechiae"],
        [q("Which IE lesion is painful?", "Osler nodes", ["Janeway lesions", "Splinter hemorrhages", "Roth spots"], "Osler = ouch."),
          q("Where are Janeway lesions found?", "Palms and soles", ["Fingertips and toe tips", "Retina", "Under the nails"], "Painless macules on palms and soles."),
          q("Where are Osler nodes found?", "Tips of fingers and toes", ["Palms and soles", "Palate", "Conjunctiva"], "Pulp of fingers and toes, in crops."),
          q("What are Roth spots?", "Retinal hemorrhages with pale centers", ["Painful nodes on the fingertips", "Flat macules on the palms", "Vertical lines under the nails"], "Edematous hemorrhagic retinal lesions with pale centers."),
          q("Which orientation is typical of splinter hemorrhages?", "Vertical", ["Horizontal", "Circular", "Spiral"], "Characteristically vertical."),
          q("About what share of IE patients have the classic exam findings?", "About 25%", ["About 90%", "About 75%", "Under 1%"], "Only about 25%."),
          q("Janeway lesions are caused by:", "Micro-abscesses with neutrophil invasion of capillaries", ["Immune complex vasculitis", "Retinal hemorrhage", "Venous stasis"], "Neutrophil invasion, micro-abscesses."),
          q("Osler nodes are thought to be caused by:", "Microemboli leading to localized immune-mediated vasculitis", ["Neutrophil micro-abscesses", "Platelet deficiency", "Direct bacterial invasion of the nail bed"], "Immune-mediated."),
          q("Where are the petechiae of IE often found?", "Palate and conjunctiva", ["Palms and soles", "Back and buttocks", "Scalp"], "Palate, conjunctiva."),
          q("Janeway lesions are more common in which type of IE?", "Acute", ["Subacute", "Prosthetic valve only", "Right-sided only"], "More common in acute than subacute.")],
        [q("A febrile IVDU has flat, painless red macules on both soles. What are they?", "Janeway lesions", ["Osler nodes", "Roth spots", "Erythema nodosum"], "Painless, palms and soles."),
          q("A patient with weeks of low-grade fever complains of tender purple bumps on the pads of two fingers that come and go. What are they?", "Osler nodes", ["Janeway lesions", "Splinter hemorrhages", "Heberden nodes"], "Painful, fingertips, in crops."),
          q("Fundoscopy in a febrile patient with a new murmur shows retinal hemorrhages with white centers. What are they called?", "Roth spots", ["Cotton wool spots", "Drusen", "Hollenhorst plaques"], "Roth spots, immunologic."),
          q("A patient has fever and a new murmur but no skin findings. Does the absence of Janeway lesions and Osler nodes rule out IE?", "No, the classic signs occur in only about 25%", ["Yes, they are present in all IE", "Yes, if the palate is also clear", "No, but only if the patient is an IVDU"], "Classic signs are uncommon.")])
    ]),

    /* ---------- 2a ---------- */
    S("02a-ie-workup-duke", "2a. IE workup and Duke criteria (major)", "Objective 2. Slides 27–33.", [
      C("Workup: blood cultures and echo",
        hy("Diagnosis is made with <strong>blood cultures</strong> and an <strong>echocardiogram</strong>.<br><strong>Blood cultures</strong>: <strong>3 sets, from separate sites, about 15 minutes apart</strong>, before antibiotics.<br><strong>Echo</strong>: start with <strong>TTE</strong>; if negative, get a <strong>TEE</strong>.") +
        "<p><strong>Other tests:</strong> CXR, EKG, CBC, CMP.</p>" +
        tbl(["Lab", "Finding"], [["Anemia", "Common"], ["<strong>ESR/CRP</strong>", "<strong>Elevated in 90–100%</strong>"], ["WBC", "Leukocytosis, but <strong>20–30% have a normal WBC</strong>"], ["Urine", "Proteinuria 50–65%, microhematuria 30–60%"]]),
        ["ie-blood-cultures", "ie-echo", "ie-labs"],
        [q("How are blood cultures drawn for suspected IE?", "Three sets from separate sites, about 15 minutes apart", ["One set from the central line", "Two sets from the same site at once", "One set after the first antibiotic dose"], "q 15 min x 3, separate sites."),
          q("Which echo is done first for suspected IE?", "Transthoracic echo (TTE)", ["Transesophageal echo (TEE)", "Stress echo", "Bubble study only"], "TTE first, TEE if negative."),
          q("If the TTE is negative but IE is still suspected, what is next?", "Transesophageal echo (TEE)", ["Repeat TTE in a year", "Stop the workup", "Cardiac MRI only"], "TEE is more sensitive."),
          q("Which inflammatory marker is elevated in nearly all IE?", "ESR or CRP (90 to 100%)", ["Procalcitonin (10%)", "Troponin (100%)", "Ferritin (5%)"], "ESR/CRP elevated 90–100%."),
          q("About what share of IE patients have a normal WBC?", "20 to 30%", ["0%", "About 90%", "About 50% always"], "Leukocytosis is not universal."),
          q("Which urine finding is common in IE?", "Proteinuria and microhematuria", ["Glucosuria", "Ketonuria", "Bilirubinuria"], "Proteinuria 50–65%, microhematuria 30–60%.")],
        [q("Cynthia is febrile with a new murmur and IE is suspected. She is stable. What should happen before antibiotics start?", "Three sets of blood cultures from separate sites", ["A single culture from her IV", "A TEE before any cultures", "A urine culture only"], "Cultures before antibiotics, 3 sets, separate sites."),
          q("A patient with suspected IE has a normal WBC. How does this change the workup?", "It does not rule out IE; 20 to 30% have a normal WBC", ["IE is ruled out", "Only a urine culture is needed", "Start steroids instead"], "Normal WBC is common."),
          q("Blood cultures grow Strep viridans in 3 of 3 sets but the TTE is unrevealing. Next imaging step?", "TEE", ["Stop, IE is excluded", "Abdominal CT only", "Repeat TTE in 6 months"], "TEE if TTE negative.")]),
      C("Duke criteria 2023: the MAJOR criteria",
        "<p><strong>Memorize the major criteria</strong> (objective). Two families:</p>" +
        tbl(["Major criterion", "What counts"], [
          ["<strong>1. Microbiology</strong>", "<strong>Typical</strong> IE organism in <strong>2 or more</strong> blood cultures, OR an occasional/rare organism in <strong>3 or more</strong>; OR positive PCR/serology for <strong>Coxiella burnetii</strong> (anti-phase I IgG over 1:800), <strong>Bartonella</strong> (IgG over 1:800), or Tropheryma whipplei"],
          ["<strong>2. Imaging</strong>", "Echo or cardiac CT: <strong>vegetation</strong>, leaflet perforation or aneurysm, <strong>abscess</strong>, pseudoaneurysm, intracardiac fistula; OR <strong>significant NEW regurgitation</strong> (worsening old regurgitation is NOT enough); OR <strong>new partial dehiscence</strong> of a prosthetic valve. <strong>PET/CT</strong>: abnormal metabolic activity at a valve, graft, device lead or prosthetic material"],
          ["Surgical", "IE seen on direct inspection during heart surgery"]]) +
        mn("Major = <strong>Bugs and a Picture</strong>: the right bug in enough cultures, and an image showing the lesion.") +
        hy("Worsening of a <strong>pre-existing</strong> regurgitation does <strong>not</strong> count as a major criterion. It must be <strong>new</strong>."),
        ["duke-major-micro", "duke-major-imaging", "duke-major-surgical"],
        [q("How many positive blood cultures with a typical IE organism meet a Duke major criterion?", "2 or more", ["1", "4 or more", "6 or more"], "Typical organism in 2+ cultures."),
          q("How many positive blood cultures with an organism that only occasionally causes IE meet a major criterion?", "3 or more", ["1", "2", "5 or more"], "Non-typical organism in 3+."),
          q("Which organism's anti-phase I IgG titer over 1:800 is a major Duke criterion?", "Coxiella burnetii", ["Strep viridans", "Staph aureus", "Candida"], "Coxiella burnetii, IgG over 1:800."),
          q("Which echo finding is a Duke major criterion?", "A vegetation", ["Mild left atrial enlargement", "Mitral annular calcification", "Trace tricuspid regurgitation"], "Vegetation, abscess, perforation, etc."),
          q("Does worsening of a known pre-existing valve regurgitation count as a major criterion?", "No, the regurgitation must be new", ["Yes, always", "Only if mild", "Only on the tricuspid"], "Worsening pre-existing regurgitation is not sufficient."),
          q("Which prosthetic valve finding is a major imaging criterion?", "New partial dehiscence", ["A normal gradient", "Mild leaflet thickening years ago", "A mechanical click"], "New partial dehiscence of a prosthetic valve."),
          q("Which newer imaging test can supply a Duke major criterion by showing abnormal metabolic activity at a valve or device lead?", "PET/CT", ["Plain chest x-ray", "Carotid ultrasound", "Ankle-brachial index"], "PET/CT was added in 2023."),
          q("Which organism is detected by PCR or IgG titer over 1:800 for a major criterion, along with Coxiella?", "Bartonella", ["Strep bovis", "Pseudomonas", "Enterococcus"], "Bartonella henselae or quintana.")],
        [q("A patient has Staph aureus in 2 of 3 blood culture sets and a TEE shows a mitral vegetation. How many Duke major criteria does she meet?", "Two", ["Zero", "One", "Three"], "Typical organism in 2+ cultures plus a vegetation = 2 major."),
          q("A patient with known moderate MR now has moderately severe MR on echo, no vegetation, and negative cultures. Does the MR change meet a major criterion?", "No, worsening of pre-existing regurgitation does not count", ["Yes, any change in MR counts", "Yes, if he has fever", "Yes, if he has a murmur"], "Must be new regurgitation."),
          q("A febrile patient has a coagulase-negative staph, an organism that only occasionally causes IE, in 2 of 3 cultures. Is the microbiology major criterion met?", "No, an occasional organism needs 3 or more positive cultures", ["Yes, 2 cultures are always enough", "Yes, any positive culture counts", "No, staph never counts"], "Non-typical organism needs 3+.")]),
      C("Duke minor criteria and making the diagnosis",
        tbl(["Minor criterion", "Examples"], [
          ["1. Predisposing condition", "Prior IE, prosthetic valve, prior valve repair, congenital heart disease, more than mild regurgitation or stenosis, CIED, HOCM, <strong>IVDA</strong>"],
          ["2. <strong>Fever</strong>", "<strong>100.4 F (38 C) or higher</strong>"],
          ["3. Vascular phenomena", "Arterial emboli, septic PE, cerebral or splenic abscess, mycotic aneurysm, intracranial hemorrhage, conjunctival hemorrhages, <strong>Janeway lesions</strong>, purpura"],
          ["4. Immunologic phenomena", "+ RF, <strong>Osler nodes, Roth spots</strong>, immune complex glomerulonephritis"],
          ["5. Microbiology not meeting major", "A positive culture that falls short of the major rule, or PCR/culture from another sterile site"]]) +
        hy("<strong>Definite IE</strong>: <strong>2 major</strong>, OR <strong>1 major + 3 minor</strong>, OR <strong>5 minor</strong>.") +
        mn("<strong>2 / 1+3 / 5</strong>.") +
        note("The objective says memorize the major criteria only. Minor criteria are listed for context; the definite-IE rule (slide 33) is tested."),
        ["duke-minor", "duke-definite-rule"],
        [q("Which combination gives a definite Duke diagnosis of IE?", "2 major criteria", ["1 major and 1 minor", "3 minor", "1 major alone"], "2 major, 1 major + 3 minor, or 5 minor."),
          q("How many minor criteria alone give a definite IE diagnosis?", "5", ["2", "3", "7"], "5 minor."),
          q("With 1 major criterion, how many minor criteria are needed for definite IE?", "3", ["1", "2", "5"], "1 major + 3 minor."),
          q("Janeway lesions fall under which Duke minor category?", "Vascular phenomena", ["Immunologic phenomena", "Predisposition", "Microbiology"], "Janeway lesions are vascular."),
          q("Osler nodes and Roth spots fall under which Duke minor category?", "Immunologic phenomena", ["Vascular phenomena", "Predisposition", "Imaging"], "Immunologic."),
          q("What temperature counts as the Duke minor fever criterion?", "100.4 F or higher", ["99.0 F or higher", "102 F or higher", "104 F or higher"], "38 C / 100.4 F.")],
        [q("A patient has one major criterion (vegetation on TEE) plus fever, IVDA, and Janeway lesions. Is the diagnosis definite?", "Yes: 1 major plus 3 minor", ["No, 2 major are always required", "No, minor criteria do not count", "Only if 5 minor are present"], "1 major + 3 minor = definite."),
          q("A patient has a vegetation on echo, fever, and a prosthetic valve, with negative cultures. How many minor criteria does he have, and is IE definite?", "Two minor plus one major; not yet definite", ["Three minor; definite", "Two major; definite", "Five minor; definite"], "Fever and predisposition are 2 minor; needs a third.")])
    ]),

    /* ---------- 2b ---------- */
    S("02b-ie-complications", "2b. IE complications", "Objective 2. Slides 34–35.", [
      C("What IE does to the heart and the rest of the body",
        tbl(["Complication", "Details"], [
          ["<strong>Valve destruction</strong>", "Regurgitation, acute heart failure"],
          ["<strong>Embolization</strong>", "Vegetations break off to the pulmonary or systemic circulation and cause <strong>infarction</strong>"],
          ["<strong>Metastatic infection</strong>", "<strong>Brain abscess</strong>; septic emboli to kidney, spleen, liver, lung"],
          ["<strong>Myocardial (ring) abscess</strong>", "<strong>Indication for surgery</strong>: antibiotics alone are not enough, needs I&amp;D; can hit the conduction system"],
          ["<strong>Conduction disease</strong>", "<strong>New heart block</strong>"],
          ["Immune-mediated", "Kidney (glomerulonephritis), lung fibrosis, DIC"]]) +
        hy("<strong>New heart block in IE = think abscess</strong> near the conduction system (aortic root). That patient needs surgery.") +
        note("Where do emboli go (slide 35 asks): <strong>left-sided</strong> IE sends emboli to the <strong>brain (stroke), spleen, kidneys, limbs and gut</strong>; <strong>right-sided</strong> IE sends <strong>septic emboli to the lungs</strong>. Answered from standard teaching."),
        ["ie-valve-destruction-complication", "ie-embolization", "ie-metastatic-infection", "ie-myocardial-abscess", "ie-heart-block", "ie-immune-complications"],
        [q("Which IE complication is an indication for surgery because antibiotics alone are not enough?", "Myocardial abscess", ["Splinter hemorrhages", "Microhematuria", "Low-grade fever"], "Abscess needs I&D."),
          q("A new heart block in IE suggests which complication?", "Abscess involving the conduction system", ["Drug side effect only", "Pericarditis", "Hypokalemia"], "Abscess can affect electrical conduction."),
          q("Where do emboli from right-sided (tricuspid) IE go?", "The lungs (septic pulmonary emboli)", ["The brain", "The spleen", "The fingers"], "Right heart drains to the pulmonary circulation."),
          q("Where do emboli from left-sided IE commonly go?", "Brain, spleen and kidneys", ["Lungs only", "Pericardium", "Portal vein"], "Systemic circulation."),
          q("Which immune-mediated complications of IE are listed?", "Glomerulonephritis, lung fibrosis, DIC", ["Thyroiditis and adrenalitis", "Myasthenia gravis", "Psoriasis"], "Kidney, lungs fibrosis, DIC."),
          q("Which CNS infection can result from IE?", "Brain abscess", ["Meningioma", "Multiple sclerosis", "Normal pressure hydrocephalus"], "Metastatic infection to the brain.")],
        [q("Anne, with subacute IE, develops sudden right arm weakness and aphasia. What complication best explains it?", "Septic embolus to the brain from a left-sided vegetation", ["Septic pulmonary embolus", "Hypoglycemia", "Uremic encephalopathy"], "Left-sided vegetations embolize to the brain."),
          q("Cynthia, with tricuspid IE, develops pleuritic chest pain and multiple round nodules on chest CT. What is happening?", "Septic pulmonary emboli", ["Lung cancer metastases", "Pneumothorax", "Pulmonary edema"], "Right-sided IE embolizes to the lungs."),
          q("A patient with aortic valve IE develops a new prolonged PR interval that progresses to complete heart block. Best next step?", "Evaluate for aortic root abscess and refer for surgery", ["Continue the same antibiotics and recheck in a month", "Start digoxin", "Discharge with a Holter"], "New heart block suggests abscess, a surgical indication."),
          q("A patient with IE develops hematuria, red cell casts and rising creatinine. Which complication is most likely?", "Immune complex glomerulonephritis", ["Kidney stones", "Prerenal azotemia only", "Bladder cancer"], "Immune-mediated kidney injury.")])
    ]),

    /* ---------- 2c ---------- */
    S("02c-ie-treatment-surgery-course", "2c. IE treatment, surgery and clinical course", "Objective 2. Slides 36–40.", [
      C("Empiric antibiotics",
        "<p>Suspected IE = <strong>hospitalize</strong>. Start <strong>empiric antibiotics after blood cultures are drawn</strong>, covering <strong>gram positive and gram negative</strong>. Consider <strong>fungal</strong> if the history suggests it.</p>" +
        tbl(["Setting", "Empiric regimen"], [
          ["<strong>Native valve</strong>", "<strong>Vancomycin + ceftriaxone</strong> (alternatives to ceftriaxone: Unasyn, cefepime, Zosyn)"],
          ["<strong>Prosthetic valve</strong>", "<strong>Vancomycin + Zosyn</strong> (covers <strong>Pseudomonas</strong>)"]]) +
        "<p>Once cultures identify the organism, <strong>tailor</strong> the antibiotics. <strong>Involve ID</strong> in every case.</p>" +
        note("History that should raise fungal IE (slide 36 asks): IV drug use, prosthetic valve, long-term central lines or TPN, immunosuppression, and recent broad-spectrum antibiotics. Answered from standard teaching."),
        ["ie-empiric-nve", "ie-empiric-pve", "ie-fungal-clues"],
        [q("What is the empiric antibiotic regimen for native valve IE?", "Vancomycin plus ceftriaxone", ["Vancomycin plus Zosyn", "Amoxicillin alone", "Nafcillin alone"], "NVE: vanc + ceftriaxone."),
          q("What is the empiric antibiotic regimen for prosthetic valve IE?", "Vancomycin plus Zosyn", ["Vancomycin plus ceftriaxone", "Penicillin G alone", "Azithromycin"], "PVE: vanc + Zosyn."),
          q("Why is Zosyn used in prosthetic valve IE?", "It covers Pseudomonas", ["It covers fungi", "It covers MRSA", "It is cheaper"], "Pseudomonas coverage."),
          q("When are empiric antibiotics started in suspected IE?", "After blood cultures are drawn", ["Before any cultures", "Only after the echo is read", "Only after Duke criteria are met"], "Empiric ATB after blood cultures."),
          q("Which drug is an alternative to ceftriaxone in empiric native valve IE?", "Cefepime", ["Azithromycin", "Doxycycline", "Metronidazole"], "Unasyn, cefepime or Zosyn."),
          q("Which history should make you consider fungal IE?", "IV drug use, prosthetic valve, long-term lines, or immunosuppression", ["A recent viral cold", "Hypertension", "Recent ankle sprain"], "Fungal risk factors (standard teaching).")],
        [q("Cynthia, 41, IVDU with native valve IE suspected, has had blood cultures drawn. Which empiric regimen fits?", "Vancomycin plus ceftriaxone", ["Vancomycin plus Zosyn", "Oral amoxicillin", "No antibiotics until cultures result"], "Native valve: vanc + ceftriaxone."),
          q("A 72-year-old with a mechanical aortic valve has fever and a new paravalvular leak. Cultures are drawn. Which empiric regimen?", "Vancomycin plus Zosyn", ["Vancomycin plus ceftriaxone", "Nafcillin alone", "Aqueous penicillin G"], "Prosthetic valve: vanc + Zosyn for Pseudomonas."),
          q("A patient on long-term TPN with an immunosuppressed state has IE and cultures grow yeast. Which pathogen class was the clue in her history?", "Fungal (Candida)", ["HACEK", "Strep bovis", "Enterococcus"], "TPN lines and immunosuppression raise fungal risk.")]),
      C("Directed therapy by organism",
        tbl(["Organism", "Treatment", "Duration"], [
          ["<strong>MSSA</strong>", "<strong>Nafcillin IV</strong>", "<strong>6+ weeks</strong>"],
          ["<strong>MRSA</strong>", "<strong>Vancomycin IV</strong>", "<strong>6+ weeks</strong>"],
          ["<strong>Most strep</strong>", "<strong>Aqueous penicillin G IV</strong>", "<strong>4 weeks</strong>"],
          ["<strong>Enterococcus</strong>", "Ampicillin, gentamicin, daptomycin IV by sensitivities", "Per ID"]]) +
        mn("<strong>Staph = 6</strong> weeks (nafcillin for MSSA, vanc for MRSA). <strong>Strep = 4</strong> weeks of penicillin G."),
        ["ie-mssa-tx", "ie-mrsa-tx", "ie-strep-tx", "ie-enterococcus-tx"],
        [q("What is the treatment for MSSA endocarditis?", "Nafcillin IV for 6 or more weeks", ["Vancomycin PO for 2 weeks", "Penicillin G IV for 4 weeks", "Oral amoxicillin for 10 days"], "MSSA: nafcillin x 6+ weeks."),
          q("What is the treatment for MRSA endocarditis?", "Vancomycin IV for 6 or more weeks", ["Nafcillin IV for 4 weeks", "Ceftriaxone IM once", "Azithromycin for 5 days"], "MRSA: vancomycin x 6+ weeks."),
          q("What is the treatment for most strep endocarditis?", "Aqueous penicillin G IV for 4 weeks", ["Nafcillin IV for 6 weeks", "Oral cephalexin for 7 days", "Doxycycline for 2 weeks"], "Strep: PCN G x 4 weeks."),
          q("Which drugs may be used for enterococcal IE depending on sensitivities?", "Ampicillin, gentamicin and daptomycin", ["Nafcillin and ceftriaxone", "Azithromycin and doxycycline", "Metronidazole and fluconazole"], "Enterococcus regimen per culture."),
          q("How long is IV therapy for staph aureus IE?", "6 or more weeks", ["2 weeks", "4 weeks", "10 days"], "6+ weeks.")],
        [q("Cultures from Cynthia grow methicillin-sensitive Staph aureus. What should her antibiotics be narrowed to?", "IV nafcillin for at least 6 weeks", ["IV vancomycin for 2 weeks", "Oral amoxicillin for 4 weeks", "IV penicillin G for 4 weeks"], "MSSA: nafcillin 6+ weeks."),
          q("Anne's cultures grow penicillin-sensitive Strep viridans. Which regimen?", "IV aqueous penicillin G for 4 weeks", ["IV nafcillin for 6 weeks", "Oral azithromycin for 5 days", "IV vancomycin plus Zosyn for 6 weeks"], "Most strep: PCN G x 4 weeks."),
          q("Cultures grow MRSA in a patient with tricuspid IE. Which drug and duration?", "IV vancomycin for 6 or more weeks", ["IV nafcillin for 6 weeks", "IV penicillin G for 4 weeks", "Oral cephalexin for 2 weeks"], "MRSA: vanc 6+ weeks.")]),
      C("Surgical indications",
        tbl(["Surgery for IE when there is...", "Example"], [
          ["<strong>Acute heart failure</strong> unresponsive to maximal medical therapy", "Severe valve dysfunction (torn leaflet, acute AR)"],
          ["<strong>Infection unresponsive</strong> to medical therapy", "Or a hard-to-treat pathogen: <strong>fungal</strong> or multidrug resistant"],
          ["<strong>Abscess</strong> or <strong>recurrent embolization</strong>", "Ring abscess, new heart block, repeat strokes"],
          ["<strong>Large mobile vegetation</strong>", "High embolic risk"]]) +
        mn("<strong>FAILS</strong>: <strong>F</strong>ailure (heart), <strong>A</strong>bscess, <strong>I</strong>nfection that won't clear (fungal, resistant), <strong>L</strong>arge mobile vegetation, <strong>S</strong>hower of emboli (recurrent)."),
        ["ie-surgery-hf", "ie-surgery-uncontrolled", "ie-surgery-abscess-emboli", "ie-surgery-vegetation"],
        [q("Which is a surgical indication in IE?", "Acute heart failure unresponsive to medical therapy", ["Fever on day 2 of antibiotics", "Strep viridans on culture", "A soft systolic murmur"], "Refractory HF from valve dysfunction."),
          q("Which pathogen type is an indication for surgery because it is hard to treat medically?", "Fungal", ["Strep viridans", "HACEK", "Group D strep"], "Fungal or multidrug resistant."),
          q("Which vegetation feature is a surgical indication?", "Large and mobile, with high embolic risk", ["Small and fixed", "Seen only on TTE", "On the pulmonic valve"], "Large mobile vegetation."),
          q("Recurrent embolization despite antibiotics calls for:", "Surgery", ["Stopping antibiotics", "Adding aspirin only", "Outpatient follow-up"], "Recurrent embolization is a surgical indication.")],
        [q("A patient with Candida endocarditis of the mitral valve is on antifungals. What else is indicated?", "Valve surgery", ["Oral fluconazole alone at home", "Prophylactic amoxicillin", "Nothing; antifungals are curative"], "Fungal IE is hard to treat medically."),
          q("A patient with aortic IE on correct antibiotics develops pulmonary edema and hypotension from severe acute AR despite diuretics and pressors. Next step?", "Urgent valve surgery", ["Continue antibiotics and wait 6 weeks", "Add a beta blocker", "Start colchicine"], "Acute HF refractory to medical therapy."),
          q("TEE shows a 2 cm mobile mitral vegetation in a patient who already had one embolic stroke. What is indicated?", "Surgery to remove the vegetation and repair or replace the valve", ["Anticoagulation only", "Stop antibiotics", "Repeat TEE in 6 months"], "Large mobile vegetation plus recurrent emboli.")]),
      C("Clinical course and persistent fever",
        tbl(["Organism", "Time to defervesce"], [["Strep or enterococci", "<strong>3–4 days</strong>"], ["Staph or Pseudomonas", "<strong>Up to 7 days</strong>"]]) +
        note("If fever persists (slide 40 asks), look for: <strong>abscess</strong> (myocardial or metastatic, e.g. spleen, brain), <strong>septic emboli</strong>, an <strong>inadequate or resistant</strong> regimen, an infected line, or <strong>drug fever</strong>. Answered from standard teaching.") +
        hy("<strong>Prognosis</strong> worsens with S. aureus, prosthetic valves, heart failure, abscess and emboli; these are also the patients most likely to need surgery."),
        ["ie-defervescence", "ie-persistent-fever"],
        [q("How long does it usually take for fever to resolve in strep IE on treatment?", "3 to 4 days", ["1 day", "3 weeks", "6 weeks"], "Strep or enterococci: 3–4 days."),
          q("How long may it take for fever to resolve in staph IE on treatment?", "Up to 7 days", ["12 hours", "1 day", "1 month"], "Staph or Pseudomonas: up to 7 days."),
          q("What should be sought when fever persists despite appropriate IE treatment?", "An abscess or metastatic infection", ["Nothing; persistent fever is expected for months", "Hyperthyroidism", "Viral co-infection only"], "Abscess, emboli, resistance, drug fever.")],
        [q("A patient with Strep viridans IE is still febrile on day 9 of IV penicillin G. Best next step?", "Look for an abscess or other complication with imaging", ["Reassure; fever lasts for weeks", "Stop the antibiotics", "Switch to oral amoxicillin"], "Strep should defervesce in 3–4 days."),
          q("A patient with MSSA IE on nafcillin is still febrile on day 5. Is this alarming yet?", "Not yet; staph may take up to 7 days", ["Yes, staph should defervesce in 1 day", "Yes, switch to penicillin G", "Yes, stop all antibiotics"], "Staph up to 7 days.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-right-sided-pve-vs-nve", "3. Right-sided IE and prosthetic valve IE vs native valve IE", "Objective 3. Slides 15–16, 37.", [
      C("Right-sided IE in IV drug users",
        "<ul><li>Most IVDUs have <strong>no known valve disease</strong></li><li>IE is <strong>more likely on the tricuspid valve</strong></li>" +
        "<li><strong>S. aureus</strong> is the most common organism (<strong>about 70%</strong>); strep and enterococci are second</li>" +
        "<li>Poor hygiene adds <strong>Pseudomonas, Serratia, Candida</strong>, unusual and <strong>polymicrobial</strong> infections</li></ul>" +
        note("Why tricuspid (slide 16 asks): injected material (talc, particles, skin bacteria) reaches the <strong>right heart first</strong> and damages the tricuspid valve, which is then seeded. Answered from standard teaching.") +
        hy("Right-sided IE presents with <strong>fever, a murmur at the left lower sternal border</strong> (TR, louder with inspiration), and <strong>septic pulmonary emboli</strong> (cough, pleuritic pain, nodules), often <strong>without</strong> the classic peripheral signs."),
        ["ivdu-tricuspid", "ivdu-organisms", "ivdu-presentation"],
        [q("Which valve is most often affected by IE in IV drug users?", "Tricuspid", ["Mitral", "Aortic", "Pulmonic"], "Tricuspid in IVDA."),
          q("What is the most common organism in IVDU endocarditis?", "Staph aureus (about 70%)", ["Strep viridans", "HACEK", "Strep bovis"], "S. aureus about 70%."),
          q("Do most IV drug users who get IE have known valve disease?", "No", ["Yes, almost all", "Only those over 60", "Only those with rheumatic fever"], "Majority do not have known valve disease."),
          q("Which unusual organisms are seen in IVDU endocarditis because of poor hygiene?", "Pseudomonas, Serratia, and Candida", ["HACEK only", "Strep bovis and Coxiella", "Listeria and Nocardia"], "Unusual and polymicrobial."),
          q("Why does injection drug use favor the tricuspid valve?", "Injected material reaches the right heart first and damages the tricuspid", ["The tricuspid has the highest pressure", "The aortic valve is protected by the coronaries", "Drugs dissolve the mitral valve"], "Standard teaching for slide 16."),
          q("Where do emboli from tricuspid IE go?", "Lungs", ["Brain", "Kidneys", "Spleen"], "Right-sided emboli go to the lungs.")],
        [q("Cynthia, an IVDU, has fever and a soft systolic murmur at the left sternal border that increases with inspiration. Which valve and organism are most likely?", "Tricuspid valve, Staph aureus", ["Mitral valve, Strep viridans", "Aortic valve, Strep bovis", "Pulmonic valve, HACEK"], "IVDU: tricuspid, S. aureus."),
          q("An IVDU with fever has multiple cavitating lung nodules and no peripheral stigmata of IE. What is the most likely source?", "Tricuspid endocarditis with septic pulmonary emboli", ["Lung cancer", "Mitral IE with brain emboli", "Pneumocystis pneumonia"], "Right-sided IE embolizes to the lungs."),
          q("Blood cultures from an IVDU with IE grow Pseudomonas and Candida together. Why is this not surprising?", "Poor injection hygiene causes unusual and polymicrobial IE", ["These are the most common native valve organisms", "They come only from dental work", "They indicate lab contamination always"], "Slide 16.")]),
      C("Prosthetic valve IE (PVE): early vs late",
        "<p>Risk is <strong>highest in the first year</strong> after valve replacement but stays elevated for life.</p>" +
        tbl(["", "<strong>Early PVE</strong> (first 12 months)", "<strong>Late PVE</strong> (over 12 months)"], [
          ["Source", "<strong>Contamination at surgery</strong>, or hematogenous seeding from another site (e.g. UTI at the time of surgery)", "<strong>Oral or skin</strong> site seeds the valve"],
          ["Organisms", "<strong>Staph, strep, gram-negative bacilli, Candida</strong>", "<strong>Same as native valve</strong> IE"]]) +
        hy("PVE can cause <strong>valve dehiscence</strong> and a <strong>perivalvular leak</strong>. Empiric PVE therapy is <strong>vancomycin + Zosyn</strong> (vs vanc + ceftriaxone for NVE)."),
        ["pve-early", "pve-late", "pve-dehiscence"],
        [q("When is the risk of prosthetic valve IE highest?", "In the first year after valve replacement", ["10 years after replacement", "Only after the valve wears out", "Only during surgery itself"], "Highest in the first year."),
          q("Early prosthetic valve IE is usually caused by:", "Contamination at surgery or seeding from another site at that time", ["Dental work years later", "Rheumatic fever", "Hypertension"], "Surgical contamination or hematogenous seeding."),
          q("Late prosthetic valve IE is defined as occurring after:", "12 months", ["1 week", "2 months", "10 years"], "Late PVE over 12 months."),
          q("The organisms of late PVE resemble those of:", "Native valve IE", ["Early PVE", "IVDU IE only", "Fungal IE only"], "Similar to native valve."),
          q("Which organisms are typical of early PVE?", "Staph, strep, gram-negative bacilli and Candida", ["HACEK only", "Strep bovis only", "Coxiella only"], "Slide 15."),
          q("Which structural complication is specific to prosthetic valve IE?", "Valve dehiscence with perivalvular leak", ["Mitral valve prolapse", "Pericardial calcification", "Coarctation"], "Dehiscence and perivalvular leak.")],
        [q("Three weeks after mitral valve replacement, a patient who had a UTI at the time of surgery develops fever and a paravalvular leak. What type of IE is this?", "Early PVE from seeding at the time of surgery", ["Late PVE from dental flora", "Native valve IE", "Rheumatic carditis"], "Under 12 months, seeding from a UTI at surgery."),
          q("Four years after aortic valve replacement, a patient with recent dental work develops subacute fever. Which organism group is most likely?", "Native-valve type organisms such as Strep viridans", ["Gram-negative bacilli from surgery", "Candida from the operating room", "Pseudomonas from injection"], "Late PVE resembles native valve IE.")]),
      C("Comparing NVE, right-sided IE and PVE",
        tbl(["", "Native valve (NVE)", "Right-sided (IVDU)", "Prosthetic valve (PVE)"], [
          ["Typical valve", "<strong>Mitral</strong>, then aortic", "<strong>Tricuspid</strong>", "The prosthesis"],
          ["Organisms", "S. aureus, Strep viridans, enterococci, Strep bovis, HACEK", "<strong>S. aureus about 70%</strong>; Pseudomonas, Serratia, Candida, polymicrobial", "Early: staph, strep, GNRs, Candida. Late: like NVE"],
          ["Presentation", "Fever, new murmur, systemic emboli (brain, spleen, kidney), skin signs", "Fever, TR murmur, <strong>septic pulmonary emboli</strong>", "Fever, <strong>dehiscence</strong>, perivalvular leak, new regurgitation"],
          ["Workup", "Cultures, TTE then TEE", "Same; CXR or CT for lung emboli", "Same; <strong>TEE</strong> (prosthesis shadows TTE), PET/CT"],
          ["Empiric therapy", "<strong>Vanc + ceftriaxone</strong>", "Vanc + ceftriaxone (native)", "<strong>Vanc + Zosyn</strong>"]]) +
        note("TEE being preferred for prosthetic valves (artifact on TTE) is standard teaching; the deck says TEE if TTE is negative and lists PET/CT for prosthetic material."),
        ["nve-rsie-pve-compare"],
        [q("Which IE type has empiric therapy of vancomycin plus Zosyn?", "Prosthetic valve IE", ["Native valve IE", "Right-sided IE in a native valve", "Strep viridans IE after culture"], "PVE: vanc + Zosyn."),
          q("Which IE type classically presents with septic pulmonary emboli?", "Right-sided (tricuspid) IE", ["Native mitral IE", "Native aortic IE", "Late PVE of the aortic valve"], "Right-sided IE embolizes to the lungs."),
          q("Which IE type is most associated with valve dehiscence?", "Prosthetic valve IE", ["Right-sided IE", "Native mitral IE", "HACEK IE"], "PVE dehiscence and perivalvular leak.")],
        [q("Three patients have IE: a 60-year-old with MVP, a 30-year-old IVDU, and a 70-year-old with a bioprosthetic aortic valve. Which one gets vancomycin plus Zosyn empirically?", "The 70-year-old with the bioprosthetic valve", ["The 60-year-old with MVP", "The 30-year-old IVDU", "All three"], "Prosthetic valve = vanc + Zosyn."),
          q("Which of these three is most likely to have tricuspid involvement and lung emboli: the MVP patient, the IVDU, or the prosthetic valve patient?", "The IVDU", ["The MVP patient", "The prosthetic valve patient", "None of them"], "IVDU = tricuspid, septic PE.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-ie-prophylaxis", "4. AHA guidelines for IE prophylaxis", "Objective 4. Slides 41–45.", [
      C("The rule: high-risk heart AND high-risk procedure",
        "<p>Prophylaxis is based more on <strong>theory than trials</strong>: no human study has proven antibiotics prevent IE after procedures.</p>" +
        hy("Give prophylaxis only if the patient has <strong>BOTH</strong> a <strong>highest-risk cardiac condition</strong> AND a <strong>high-risk procedure</strong>.") +
        "<p><strong>Highest-risk cardiac conditions (AHA):</strong></p><ul>" +
        "<li><strong>Any prosthetic heart valve</strong> (mechanical, bioprosthetic, <strong>TAVR</strong>) and <strong>prosthetic valve repairs</strong></li>" +
        "<li><strong>Ventricular assist device</strong></li>" +
        "<li><strong>Prior IE</strong></li>" +
        "<li><strong>Valve disease in a heart transplant</strong></li>" +
        "<li>Congenital heart disease (next card)</li></ul>" +
        mn("<strong>PIV-TC</strong>: <strong>P</strong>rosthetic valve, prior <strong>I</strong>E, <strong>V</strong>AD, <strong>T</strong>ransplant valvulopathy, <strong>C</strong>ongenital (certain)."),
        ["prophylaxis-rule", "prophylaxis-high-risk-conditions"],
        [q("When does the AHA recommend IE prophylaxis?", "Only when a highest-risk cardiac condition AND a high-risk procedure are both present", ["Before every procedure in every patient", "Whenever any murmur is heard", "Only for patients over 65"], "Both conditions needed."),
          q("Has any human trial proven that prophylactic antibiotics prevent IE?", "No, guidelines are based on theory", ["Yes, many large trials", "Yes, but only for MVP", "Yes, for all GI procedures"], "Slide 41."),
          q("Which patient with a prosthetic valve needs prophylaxis before dental work?", "All of them: mechanical, bioprosthetic and TAVR", ["Only mechanical valves", "Only TAVR", "None, prosthetic valves are not high risk"], "All prosthetic valves."),
          q("Which device puts a patient in the highest-risk group for IE prophylaxis?", "Ventricular assist device", ["Pacemaker", "Coronary stent", "ICD"], "VAD is highest risk; pacers, stents, ICDs are not."),
          q("A heart transplant patient needs prophylaxis if:", "The transplanted heart has valve disease", ["Always, for life", "Never", "Only in the first week"], "Valve disease in cardiac transplants."),
          q("Is a history of prior IE a reason for prophylaxis?", "Yes", ["No", "Only if it was fungal", "Only if it was over 10 years ago"], "Anyone with a history of IE.")],
        [q("A 70-year-old who had a TAVR last year is scheduled for a tooth extraction. Does she need prophylaxis?", "Yes, TAVR counts as a prosthetic valve", ["No, TAVR is not a real valve replacement", "Only if she has a fever", "Only for GI procedures"], "All prosthetic valves including TAVR."),
          q("A 55-year-old who had Strep viridans IE five years ago, now with a normal echo, needs a dental cleaning. Prophylaxis?", "Yes, prior IE is highest risk", ["No, the valve is normal now", "No, IE does not recur", "Only if the cleaning is deep"], "Any history of IE.")]),
      C("Congenital heart conditions that need prophylaxis",
        tbl(["Congenital condition", "Prophylaxis?"], [
          ["<strong>Unrepaired or incompletely repaired cyanotic</strong> CHD, including palliative shunts and conduits", "<strong>Yes</strong>"],
          ["<strong>Completely repaired</strong> defect with prosthetic material or device, <strong>first 6 months</strong> after the procedure", "<strong>Yes</strong> (until endothelialized)"],
          ["Repaired defect with a <strong>residual defect at or next to</strong> a prosthetic patch or device", "<strong>Yes</strong>"],
          ["Completely repaired, more than 6 months ago, no residual defect", "No"]]) +
        hy("The <strong>6 month</strong> window: prosthetic material is covered by endothelium by then, so risk falls."),
        ["prophylaxis-congenital", "prophylaxis-six-months"],
        [q("Which congenital patient needs IE prophylaxis?", "Unrepaired cyanotic congenital heart disease", ["Completely repaired ASD 10 years ago", "Isolated bicuspid aortic valve", "Small repaired PDA with no residual"], "Unrepaired cyanotic CHD."),
          q("For how long after complete repair with prosthetic material is prophylaxis needed?", "The first 6 months", ["Lifelong", "The first 2 weeks", "The first 5 years"], "First six months."),
          q("A repaired congenital defect needs lifelong prophylaxis if:", "There is a residual defect at or next to a prosthetic patch or device", ["The repair was done in childhood", "The patient has any murmur", "The patient is over 50"], "Residual defect adjacent to prosthetic material."),
          q("Do palliative shunts and conduits in cyanotic heart disease qualify for prophylaxis?", "Yes", ["No", "Only in adults", "Only after 6 months"], "Included in the unrepaired cyanotic group.")],
        [q("A 4-year-old had a VSD closed with a device 3 months ago and needs a dental extraction. Prophylaxis?", "Yes, within 6 months of repair with prosthetic material", ["No, the VSD is fixed", "Only after 6 months", "Only if he has a fever"], "First six months after device repair."),
          q("A 20-year-old had a complete patch repair of an ASD 15 years ago with no residual defect. Dental cleaning planned. Prophylaxis?", "No", ["Yes, lifelong for any repair", "Yes, any congenital disease qualifies", "Only with amoxicillin 500 mg"], "Complete repair, past 6 months, no residual."),
          q("A teen with a patch-repaired VSD has a small residual leak right next to the patch. Prophylaxis before tooth extraction?", "Yes, residual defect adjacent to prosthetic material", ["No, the repair was long ago", "No, residual leaks do not matter", "Only if cyanotic"], "Residual defect at or near the patch.")]),
      C("Which procedures, which conditions do not qualify, and the drug",
        tbl(["Procedure", "Prophylaxis?"], [
          ["<strong>Dental</strong>: manipulation of gingiva or perforation of oral mucosa (cleaning, extractions, abscess)", "<strong>Yes</strong> (highest risk procedures)"],
          ["<strong>Respiratory</strong>: tonsillectomy and adenoidectomy, bronchoscopy <strong>with biopsy</strong>", "<strong>Yes</strong>"],
          ["<strong>Cardiac</strong> procedures placing prosthetic material", "<strong>Yes</strong>"],
          ["<strong>Skin/MSK</strong>: surgery on <strong>infected</strong> skin or musculoskeletal tissue (e.g. abscess)", "<strong>Yes</strong>; cover skin flora"],
          ["<strong>GI or GU</strong>", "<strong>No routine prophylaxis</strong>"]]) +
        "<p><strong>Not routinely recommended (intermediate risk):</strong> rheumatic heart disease, <strong>MVP</strong>, <strong>bicuspid aortic valve</strong>, <strong>HOCM</strong>, <strong>ASD</strong>, and a history of <strong>pacers, stents, ICD or CABG</strong>.</p>" +
        hy("<strong>Drug of choice: amoxicillin 2 g PO, 1 hour before</strong> the dental procedure. Alternatives (e.g. penicillin allergy): <strong>cephalexin, doxycycline, or azithromycin</strong>."),
        ["prophylaxis-procedures", "prophylaxis-gi-gu", "prophylaxis-intermediate-risk", "prophylaxis-drug"],
        [q("What is the drug of choice for IE prophylaxis before dental work?", "Amoxicillin 2 g PO 1 hour before", ["Amoxicillin 500 mg after the procedure", "Vancomycin IV for 6 weeks", "Penicillin G IV for 4 weeks"], "Amoxil 2 g PO 1 hr before."),
          q("Which is an alternative prophylaxis drug for a penicillin-allergic patient?", "Azithromycin", ["Ampicillin", "Amoxicillin-clavulanate", "Nafcillin"], "Cephalexin, doxycycline or azithromycin."),
          q("Do GI or GU procedures need routine IE prophylaxis?", "No", ["Yes, always", "Only colonoscopy", "Only cystoscopy"], "No routine prophylaxis."),
          q("Which respiratory procedure qualifies for prophylaxis in a high-risk patient?", "Bronchoscopy with biopsy", ["Simple bronchoscopy without biopsy", "Spirometry", "Nasal swab"], "Tonsillectomy, adenoidectomy, bronchoscopy with biopsy."),
          q("Does mitral valve prolapse alone need IE prophylaxis?", "No, it is intermediate risk", ["Yes, always", "Only with any dental work", "Only in women"], "MVP is not routinely given prophylaxis."),
          q("Which of these is NOT an indication for prophylaxis?", "Bicuspid aortic valve", ["Mechanical mitral valve", "Prior IE", "Ventricular assist device"], "Bicuspid valve is intermediate risk."),
          q("Which dental procedures need prophylaxis in a high-risk patient?", "Those that manipulate the gingiva or perforate the oral mucosa", ["Only full mouth extractions", "Only orthodontic adjustments", "Taking dental x-rays"], "Cleaning, extractions, abscess."),
          q("Which skin procedure needs prophylaxis in a high-risk patient?", "Draining an infected abscess", ["Shaving a mole on clean skin", "A routine skin exam", "Applying sunscreen"], "Surgery on infected skin or MSK tissue.")],
        [q("A patient with a mechanical mitral valve is having a routine screening colonoscopy. Prophylaxis?", "No, GI procedures do not need routine prophylaxis", ["Yes, amoxicillin 2 g", "Yes, vancomycin", "Yes, ceftriaxone IM"], "No routine GI/GU prophylaxis."),
          q("A patient with HOCM and a pacemaker is having a tooth extraction. Prophylaxis?", "No, HOCM and pacemakers are not highest-risk conditions", ["Yes, both are high risk", "Yes, pacemakers always need it", "Only if over 65"], "Both are intermediate risk."),
          q("A patient with a bioprosthetic aortic valve and a severe penicillin allergy is having a tooth pulled. Which prophylaxis?", "Azithromycin before the procedure", ["Amoxicillin 2 g PO", "No prophylaxis needed", "Ampicillin IV"], "Penicillin allergy: cephalexin (if not anaphylactic), doxycycline or azithromycin."),
          q("A patient with prior IE is having an infected forearm abscess incised and drained. Should prophylaxis cover skin flora?", "Yes, cover skin flora such as staph", ["No, only dental procedures count", "No, abscesses never cause IE", "Only cover gram negatives"], "Infected skin procedures: cover skin flora."),
          q("A patient with a prosthetic valve takes amoxicillin 2 g right after a dental extraction instead of before. What was wrong?", "It should be taken about 1 hour before the procedure", ["The dose should be 250 mg", "It should be given IV for 6 weeks", "Nothing; after is preferred"], "Amoxil 2 g PO 1 hr before.")])
    ]),

    /* ---------- 5a ---------- */
    S("05a-acute-pericarditis", "5a. Acute pericarditis", "Objective 5. Slides 47–56.", [
      C("Pericardium basics and causes of pericarditis",
        "<p>The <strong>pericardium</strong> is a two-layer sac: tough fibrous <strong>parietal</strong> (outer) and delicate <strong>visceral</strong> (inner, on the myocardium). It normally holds <strong>5–15 mL</strong> of fluid for lubrication.</p>" +
        tbl(["Cause", "Details"], [
          ["<strong>Viral</strong> (most common)", "Probably the cause of most <strong>idiopathic</strong> cases: <strong>Coxsackievirus</strong>, echovirus, influenza, EBV, HIV"],
          ["<strong>Tuberculosis</strong>", "Rare in the US, common in developing nations; other bacteria rare"],
          ["<strong>Uremia</strong>", "Dialysis patients or untreated renal failure"],
          ["<strong>Neoplastic</strong>", "Lung, breast, renal cell, Hodgkin and non-Hodgkin lymphoma"],
          ["<strong>Inflammatory</strong>", "<strong>Dressler</strong> (days to weeks after a transmural MI); connective tissue disease (RA, SLE); drug reaction"],
          ["Trauma", ""]]) +
        mn("<strong>VITUN-D</strong>: <strong>V</strong>iral, <strong>I</strong>diopathic, <strong>T</strong>B, <strong>U</strong>remia, <strong>N</strong>eoplasm, <strong>D</strong>ressler/autoimmune (plus trauma).") +
        note("Slide 49 lists \"HIB\" among the viruses; read as HIV."),
        ["pericardium-anatomy", "pericarditis-viral", "pericarditis-other-causes", "dressler"],
        [q("What is the most common cause of acute pericarditis?", "Viral (often labeled idiopathic)", ["Tuberculosis", "Uremia", "Lung cancer"], "Viral, likely the cause of idiopathic cases."),
          q("Which virus is classically linked to pericarditis?", "Coxsackievirus", ["Hepatitis A", "Rotavirus", "Measles"], "Coxsackievirus, echovirus, influenza, EBV, HIV."),
          q("How much fluid is normally in the pericardial sac?", "5 to 15 mL", ["0 mL", "100 to 200 mL", "About 1 liter"], "5–15 mL."),
          q("Which pericardial layer is tough and fibrous?", "Parietal (outer)", ["Visceral (inner)", "Endocardium", "Myocardium"], "Parietal is the tough outer layer."),
          q("What is Dressler syndrome?", "Pericarditis days to weeks after a transmural MI", ["Pericarditis from TB", "Pericarditis from uremia", "Pericardial calcification after radiation"], "Inflammatory response to infarct."),
          q("Where is TB a common cause of pericarditis?", "In developing nations", ["In the US", "Only in children", "Only after cardiac surgery"], "Rare in the US, common in undeveloped nations."),
          q("Which cancers commonly spread to the pericardium?", "Lung, breast, renal cell and lymphoma", ["Prostate and thyroid only", "Skin basal cell", "Pancreas only"], "Slide 50.")],
        [q("A 58-year-old has pleuritic chest pain and a rub 3 weeks after a large anterior STEMI. Which diagnosis?", "Dressler syndrome", ["Viral pericarditis", "Uremic pericarditis", "Tuberculous pericarditis"], "Weeks after transmural MI."),
          q("A dialysis patient who has been missing sessions develops a pericardial rub. Most likely cause?", "Uremic pericarditis", ["Coxsackievirus", "Dressler syndrome", "Lupus"], "Uremia."),
          q("A 25-year-old had a cold 2 weeks ago and now has sharp chest pain better leaning forward. Most likely cause?", "Viral pericarditis (Coxsackievirus)", ["Tuberculosis", "Neoplastic", "Dressler syndrome"], "Viral is most common.")]),
      C("Symptoms, signs and EKG",
        "<p><strong>Chest pain</strong>: <strong>sharp, substernal, abrupt, pleuritic</strong>.</p>" +
        tbl(["", ""], [["<strong>Worse</strong>", "<strong>Lying supine</strong>"], ["<strong>Better</strong>", "<strong>Sitting up and leaning forward</strong>"], ["Also", "Dyspnea, fever"]]) +
        "<p><strong>Signs:</strong> <strong>pericardial friction rub</strong>; altered hemodynamics only if an effusion develops.</p>" +
        hy("<strong>EKG: diffuse ST elevation</strong> across many leads <strong>without reciprocal changes</strong> (unlike STEMI, which is regional with reciprocal depression). PR depression is also classic.") +
        "<p>Differential: other cardiac, pulmonary, and musculoskeletal chest pain.</p>" +
        note("PR depression is standard teaching; the slide shows the EKG as a picture."),
        ["pericarditis-pain", "pericarditis-rub", "pericarditis-ekg"],
        [q("What position worsens the pain of acute pericarditis?", "Lying supine", ["Sitting up", "Leaning forward", "Standing"], "Worse supine."),
          q("What position relieves the pain of acute pericarditis?", "Sitting up and leaning forward", ["Lying flat", "Lying on the left side", "Trendelenburg"], "Sits up and leans forward."),
          q("Describe the chest pain of acute pericarditis.", "Sharp, substernal, abrupt, pleuritic", ["Dull pressure on exertion only", "Tearing pain to the back", "Burning after meals"], "Slide 51."),
          q("What is the classic exam sign of acute pericarditis?", "Pericardial friction rub", ["Opening snap", "S4 gallop", "Pulsus parvus et tardus"], "Friction rub."),
          q("What is the classic EKG of acute pericarditis?", "Diffuse ST elevation without reciprocal changes", ["Regional ST elevation with reciprocal depression", "Peaked T waves only", "Delta waves"], "Diffuse, no reciprocal changes."),
          q("How does the EKG of pericarditis differ from STEMI?", "Pericarditis is diffuse without reciprocal depression; STEMI is regional with reciprocal depression", ["Pericarditis has Q waves; STEMI never does", "They are identical", "STEMI has diffuse ST elevation; pericarditis is regional"], "Key distinction.")],
        [q("A 30-year-old has sharp chest pain worse lying down and better leaning forward, with a scratchy three-part sound at the left sternal border. What is the sound?", "Pericardial friction rub", ["Mitral regurgitation murmur", "S3 gallop", "Opening snap"], "Acute pericarditis."),
          q("A patient with pleuritic chest pain has ST elevation in leads I, II, III, aVF and V2 to V6 with no reciprocal ST depression. Best diagnosis?", "Acute pericarditis", ["Inferior STEMI", "Anterior STEMI", "Hyperkalemia"], "Diffuse STE without reciprocal change."),
          q("A patient has chest pain and ST elevation only in II, III and aVF with ST depression in I and aVL. Which is more likely?", "Inferior STEMI", ["Acute pericarditis", "Pericardial effusion", "Constrictive pericarditis"], "Regional STE with reciprocal depression is STEMI.")]),
      C("Workup and treatment",
        "<p>Diagnosis is <strong>clinical</strong>, supported by EKG, labs and <strong>echo</strong> (to look for effusion).</p>" +
        "<p><strong>Additional tests:</strong> CBC, chemistries, <strong>cardiac markers</strong> (may be elevated from inflammation), <strong>ESR/CRP</strong> (very elevated), TSH, ANA +/- RF, <strong>PPD</strong>, CXR, echo.</p>" +
        tbl(["Treatment (idiopathic/viral)", "Details"], [
          ["<strong>NSAIDs</strong> (<strong>aspirin or ibuprofen</strong>)", "Relieve pain and inflammation, do <strong>not</strong> change the course; about <strong>2 weeks</strong>"],
          ["<strong>Colchicine</strong> (low dose)", "<strong>3 months</strong>; improves symptoms and <strong>reduces recurrence</strong>"],
          ["<strong>Oral steroids</strong>", "Only if NSAIDs contraindicated, or connective tissue / autoimmune disease, or uremia not responding to dialysis. <strong>May increase recurrence</strong>"],
          ["<strong>Pericardial window</strong>", "For significant or recurrent effusions"]]) +
        hy("<strong>NSAID + colchicine</strong> are used together. Treat the underlying cause (dialysis for uremia, TB therapy, etc.).") +
        mn("<strong>2 weeks of NSAID, 3 months of colchicine.</strong>"),
        ["pericarditis-workup", "pericarditis-nsaid", "pericarditis-colchicine", "pericarditis-steroids"],
        [q("How is acute pericarditis diagnosed?", "Clinically, supported by EKG, labs and echo", ["Only by cardiac MRI", "Only by pericardial biopsy", "Only by cardiac cath"], "Clinical diagnosis."),
          q("Why is an echo done in acute pericarditis?", "To evaluate for an effusion", ["To measure the ejection fraction only", "To diagnose the virus", "To rule out MVP"], "Evaluate for effusion."),
          q("Why is a PPD part of the pericarditis workup?", "To look for tuberculosis", ["To test for lupus", "To check for uremia", "To test thyroid function"], "TB is a cause."),
          q("Which drugs are first-line together for idiopathic pericarditis?", "An NSAID plus colchicine", ["Steroids plus warfarin", "Beta blocker plus nitrate", "Antibiotics plus diuretic"], "Both are used."),
          q("How long is colchicine continued for acute pericarditis?", "3 months", ["3 days", "2 weeks", "Lifelong"], "Low dose for 3 months."),
          q("What does colchicine add in acute pericarditis?", "It improves symptoms and reduces recurrence", ["It cures the virus", "It drains the effusion", "It replaces the need for NSAIDs"], "Reduces recurrence."),
          q("Which NSAIDs are preferred for pericarditis?", "Aspirin or ibuprofen", ["Indomethacin or ketorolac only", "Celecoxib only", "Naproxen only"], "ASA or ibuprofen, about 2 weeks."),
          q("What is a downside of steroids in pericarditis?", "They may increase recurrence", ["They cause tamponade", "They are ineffective for pain", "They cause pericardial calcification"], "Some evidence of more recurrence."),
          q("Can cardiac markers be elevated in pericarditis?", "Yes, from inflammation", ["Never", "Only with an MI", "Only with tamponade"], "May be elevated due to inflammation.")],
        [q("A 28-year-old with viral pericarditis, no effusion and normal kidneys is ready for discharge. Best regimen?", "Ibuprofen for about 2 weeks plus colchicine for 3 months", ["Prednisone alone", "Colchicine for 3 days alone", "Antibiotics for 6 weeks"], "NSAID + colchicine."),
          q("A patient with lupus pericarditis has a strong contraindication to NSAIDs. What is reasonable?", "Oral corticosteroids", ["Pericardiectomy immediately", "Warfarin", "No treatment"], "Steroids when NSAIDs contraindicated or for CTD."),
          q("A patient asks why he must keep taking colchicine for 3 months when his pain is gone after a week. Best answer?", "It lowers the chance the pericarditis comes back", ["It treats his high cholesterol", "It keeps the virus from spreading to others", "It is needed to dissolve calcium"], "Colchicine reduces recurrence."),
          q("A patient has had three episodes of pericarditis with a recurring significant effusion. What procedure may be done?", "Pericardial window", ["CABG", "Valve replacement", "Ablation"], "For significant or recurrent effusions.")])
    ]),

    /* ---------- 5b ---------- */
    S("05b-pericardial-effusion", "5b. Pericardial effusion", "Objective 5. Slides 48, 57–58, 62–63, 66.", [
      C("Pericardial effusion",
        "<p><strong>Pericardial effusion</strong>: inflammatory fluid between the visceral and parietal layers.</p>" +
        "<p>Usually <strong>asymptomatic</strong>. If symptoms: <strong>chest pressure, dyspnea</strong>.</p>" +
        note("What decides whether an effusion causes symptoms (slide 57 asks): mostly the <strong>speed of accumulation</strong> (and the size). A slow effusion lets the pericardium stretch, so even a large one can be silent; a small, fast one can cause tamponade. Answered from standard teaching.") +
        tbl(["Signs (usually none)", "Common causes"], [["A rub if large<br><strong>Muffled heart sounds</strong><br><strong>Cannot palpate the PMI</strong>", "<strong>Idiopathic, uremia, neoplastic, pericarditis</strong>; less often trauma (including procedures) and dissection"]]) +
        hy("<strong>Echo is the test of choice.</strong> CXR: enlarged (water-bottle) cardiac silhouette. EKG: <strong>low voltage</strong>, <strong>electrical (QRS) alternans</strong>.<br><strong>Small asymptomatic effusion: observe with serial echos.</strong>"),
        ["effusion-definition", "effusion-symptoms", "effusion-signs", "effusion-causes", "effusion-diagnosis", "effusion-management"],
        [q("Most pericardial effusions are:", "Asymptomatic", ["Immediately fatal", "Always painful", "Always infected"], "Usually asymptomatic."),
          q("What mainly decides whether a pericardial effusion causes symptoms?", "How fast it accumulates", ["The patient's height", "The color of the fluid", "Whether the patient is right handed"], "Rate of accumulation."),
          q("Which exam finding fits a large pericardial effusion?", "Muffled heart sounds and a PMI that cannot be felt", ["Loud S1 and displaced PMI", "Opening snap", "Bounding pulses"], "Muffled sounds, no palpable PMI."),
          q("What is the test of choice for a pericardial effusion?", "Echocardiogram", ["Chest CT", "Cardiac cath", "EKG"], "Echo."),
          q("Which EKG findings suggest a large pericardial effusion?", "Low voltage and electrical alternans", ["Peaked T waves", "Delta waves", "ST depression in V1 to V3"], "Dampened voltage, QRS alternans."),
          q("How is a small asymptomatic effusion managed?", "Observation with serial echos", ["Emergency pericardiocentesis", "Pericardiectomy", "IV antibiotics"], "Observe."),
          q("Which are the most common causes of pericardial effusion?", "Idiopathic, uremia, neoplastic and pericarditis", ["Hypertension and diabetes", "Asthma and COPD", "Migraine"], "Slide 58.")],
        [q("A 65-year-old with lung cancer has a large effusion on CT but normal vitals and no symptoms; it grew over months. Why is he stable?", "Slow accumulation let the pericardium stretch", ["Large effusions never matter", "The fluid is outside the heart", "Cancer protects against tamponade"], "Rate matters more than size."),
          q("A patient's EKG shows low voltage with QRS amplitude alternating beat to beat. What should be ordered?", "Echocardiogram for a large pericardial effusion", ["Exercise stress test", "Holter monitor", "Carotid ultrasound"], "Electrical alternans suggests a large effusion."),
          q("A patient after pericarditis has a small effusion and no symptoms. Plan?", "Observe with serial echocardiograms", ["Urgent pericardiocentesis", "Pericardiectomy", "Start vasopressors"], "Small asymptomatic: serial echos.")])
    ]),

    /* ---------- 5c ---------- */
    S("05c-cardiac-tamponade", "5c. Cardiac tamponade", "Objective 5. Slides 59–67.", [
      C("Pathophysiology and presentation",
        "<ol class=\"concept-chain\"><li>Effusion grows <strong>too large or too fast</strong></li><li>Pressure in the sac rises and <strong>compresses the heart</strong></li><li><strong>Right heart filling is impaired first</strong>, then the left</li><li><strong>Cardiac output falls</strong></li><li>Body compensates (tachycardia, vasoconstriction), then fails: shock</li></ol>" +
        note("The body's response (slide 59 asks): <strong>sympathetic activation</strong>, causing tachycardia and vasoconstriction to hold BP. Answered from standard teaching.") +
        tbl(["Acute tamponade", "Subacute tamponade"], [["<strong>Sudden</strong>: chest pain, tachypnea, dyspnea, JVD, <strong>hypotension</strong>, low-output symptoms", "<strong>Less dramatic</strong>: asymptomatic early, then SOB, chest fullness, <strong>peripheral edema</strong>, fatigue"]]),
        ["tamponade-pathophys", "tamponade-acute-vs-subacute"],
        [q("Which side of the heart is impaired first in tamponade?", "The right", ["The left", "Both exactly together", "Neither; only the valves"], "Right filling is impaired first."),
          q("What causes cardiac tamponade?", "An effusion that grows too large or too fast and impairs filling", ["A blocked coronary artery", "A stiff mitral valve", "Fluid in the lungs"], "Impaired pumping from pericardial pressure."),
          q("How does the body first compensate for falling output in tamponade?", "Tachycardia and vasoconstriction", ["Bradycardia and vasodilation", "Fever", "Polyuria"], "Sympathetic response."),
          q("Which form of tamponade presents with peripheral edema and fatigue?", "Subacute", ["Acute", "Neither", "Only traumatic"], "Subacute: SOB, fullness, edema, fatigability.")],
        [q("After a stab wound to the chest, a patient rapidly becomes hypotensive with distended neck veins. Which tamponade picture is this?", "Acute tamponade", ["Subacute tamponade", "Constrictive pericarditis", "Uremic pericarditis"], "Sudden onset, hypotension, JVD."),
          q("A cancer patient has weeks of slowly worsening dyspnea, chest fullness, leg edema and fatigue and is found to have tamponade. Which form?", "Subacute tamponade", ["Acute tamponade", "Dressler syndrome", "Acute pericarditis only"], "Less dramatic, slower.")]),
      C("Signs: Beck triad and pulsus paradoxus",
        hy("<strong>Beck triad</strong>: <strong>hypotension, JVD, muffled heart sounds</strong>.") +
        "<ul><li><strong>Tachycardia</strong></li><li><strong>Narrow pulse pressure</strong></li><li>Elevated JVP</li>" +
        "<li><strong>Pulsus paradoxus</strong>: SBP <strong>falls more than 10 mmHg with inspiration</strong></li></ul>" +
        mn("Beck triad = the <strong>3 Ds</strong>: <strong>D</strong>istant heart sounds, <strong>D</strong>istended neck veins, <strong>D</strong>ecreased BP."),
        ["becks-triad", "pulsus-paradoxus", "tamponade-other-signs"],
        [q("What is Beck triad?", "Hypotension, JVD, muffled heart sounds", ["Fever, murmur, emboli", "Hypertension, bradycardia, irregular respirations", "Chest pain, dyspnea, syncope"], "Classic tamponade triad."),
          q("What is pulsus paradoxus?", "A fall in systolic BP over 10 mmHg with inspiration", ["A rise in BP with inspiration", "A pulse that alternates strong and weak", "A slow rising pulse"], "SBP drop over 10 with inspiration."),
          q("What happens to pulse pressure in tamponade?", "It narrows", ["It widens", "It is unchanged", "It doubles"], "Narrow pulse pressure."),
          q("What heart rate is expected in tamponade?", "Tachycardia", ["Bradycardia", "Normal", "Complete heart block"], "Tachycardia.")],
        [q("A patient with a known effusion becomes hypotensive with JVD and distant heart sounds. What is the diagnosis?", "Cardiac tamponade", ["Tension pneumothorax only", "Acute MI", "Aortic stenosis"], "Beck triad."),
          q("While measuring BP, you hear Korotkoff sounds only during expiration until the cuff is 15 mmHg lower. What is this finding?", "Pulsus paradoxus", ["Pulsus alternans", "Pulsus parvus et tardus", "Orthostatic hypotension"], "Inspiratory drop over 10 mmHg.")]),
      C("Diagnosis and management",
        "<p>Diagnosis: history and exam plus an <strong>echocardiogram</strong> (test of choice: shows the effusion and evidence of tamponade).</p>" +
        tbl(["Test", "Finding"], [["<strong>Echo</strong>", "Effusion with tamponade physiology"], ["CXR", "Enlarged cardiac silhouette"], ["EKG", "<strong>Low voltage</strong>, <strong>electrical alternans</strong>"]]) +
        hy("<strong>Tamponade is a medical emergency</strong>: <strong>IV fluids</strong> (hydrate) and <strong>vasopressors</strong> if hypotensive, then <strong>pericardiocentesis</strong>. <strong>Pericardial window</strong> for recurrent or loculated effusions.") +
        note("Avoid diuretics and nitrates in tamponade (they lower preload); standard teaching, consistent with the deck's hydrate-first advice."),
        ["tamponade-diagnosis", "tamponade-treatment", "pericardial-window"],
        [q("What is the definitive emergency treatment of cardiac tamponade?", "Pericardiocentesis", ["Diuretics", "Nitroglycerin", "Beta blockers"], "Drain the fluid."),
          q("Which supportive measures are used in tamponade while preparing to drain?", "IV fluids and vasopressors if hypotensive", ["IV furosemide", "Nitroglycerin drip", "Morphine and nitrates"], "Hydrate and use pressors."),
          q("When is a pericardial window needed?", "For recurrent or loculated effusions", ["For every small effusion", "For acute MI", "For mitral stenosis"], "Recurrent or loculated."),
          q("What is the diagnostic test of choice for tamponade?", "Echocardiogram", ["Cardiac MRI", "Coronary angiogram", "Holter"], "Echo."),
          q("Which EKG finding is classic in tamponade?", "Electrical alternans", ["Delta waves", "Prolonged QT", "Osborn waves"], "QRS alternans and low voltage.")],
        [q("A patient with Beck triad and a large effusion on bedside echo has a BP of 78/50. Which order of steps fits?", "IV fluids, pressors if needed, and emergent pericardiocentesis", ["IV furosemide then observe", "Nitroglycerin then cath lab", "Colchicine and discharge"], "Tamponade is an emergency."),
          q("A hypotensive patient with tamponade is given IV furosemide by mistake. Why is that harmful?", "It lowers preload, which the compressed heart depends on", ["It raises preload too much", "It causes pericarditis", "It has no effect"], "Tamponade needs volume."),
          q("A patient has had tamponade drained twice from a malignant effusion that keeps coming back. Next step?", "Pericardial window", ["A third pericardiocentesis every week forever", "Pericardiectomy for constriction", "Aortic valve replacement"], "Recurrent effusion: window.")])
    ]),

    /* ---------- 5d ---------- */
    S("05d-constrictive-pericarditis", "5d. Constrictive pericarditis", "Objective 5. Slides 48, 68–72.", [
      C("What it is, causes, and how it presents",
        "<p>The pericardium becomes <strong>thickened, fibrotic</strong>, sometimes <strong>calcified</strong> (chronic pericarditis), and <strong>restricts diastolic filling</strong>.</p>" +
        note("What restricted filling causes (slide 68 asks): high venous pressures and <strong>right-sided heart failure</strong> with a fixed, low stroke volume; JVP may <strong>rise with inspiration (Kussmaul sign)</strong>. Answered from standard teaching.") +
        tbl(["Causes", "Signs and symptoms (slowly advancing heart failure)"], [[
          "<strong>Idiopathic/viral</strong> (most common in developed countries)<br><strong>Post radiation</strong><br><strong>Post cardiac surgery</strong><br>Connective tissue disease<br><strong>TB</strong> (most common in developing countries), uremia",
          "DOE, <strong>fluid overload</strong>, low exercise tolerance, chest pain, <strong>elevated JVP</strong><br><strong>Pericardial knock</strong>: early diastolic sound at the LSB as the apex recoils"]]) +
        hy("<strong>Pericardial knock</strong> = <strong>early diastolic</strong> sound (heard earlier than an S3) when filling suddenly stops against the rigid pericardium."),
        ["constrictive-definition", "constrictive-causes", "constrictive-signs", "pericardial-knock"],
        [q("What does constrictive pericarditis restrict?", "Diastolic filling", ["Systolic ejection only", "Coronary flow only", "Valve opening"], "Restricts diastolic filling."),
          q("What is the most common cause of constrictive pericarditis in developed countries?", "Idiopathic or viral", ["Tuberculosis", "Uremia", "Rheumatic fever"], "Idiopathic or viral."),
          q("What is the most common cause of constrictive pericarditis in developing countries?", "Tuberculosis", ["Radiation", "Cardiac surgery", "Coxsackievirus"], "TB."),
          q("What is a pericardial knock?", "An early diastolic sound at the LSB as the apex recoils", ["A late systolic click", "A holosystolic murmur", "A presystolic S4"], "Slide 69."),
          q("Which treatments listed as causes can lead to constrictive pericarditis?", "Chest radiation and cardiac surgery", ["Statins and aspirin", "Flu vaccine", "Dental cleaning"], "Post radiation, post cardiac surgery."),
          q("Constrictive pericarditis presents like:", "Slowly advancing heart failure", ["Sudden sharp pleuritic pain", "Acute shock", "Syncope with exertion only"], "DOE, fluid overload, elevated JVP.")],
        [q("A 60-year-old treated with chest radiation for Hodgkin lymphoma 20 years ago has slowly worsening edema, ascites, high JVP and an early diastolic sound at the left sternal border. Most likely diagnosis?", "Constrictive pericarditis", ["Acute pericarditis", "Mitral stenosis", "Cardiac tamponade"], "Post radiation, HF picture, knock."),
          q("A patient years after CABG has fluid overload and a JVP that rises with inspiration. Which condition fits?", "Constrictive pericarditis", ["Acute viral pericarditis", "Mitral valve prolapse", "Aortic stenosis"], "Post cardiac surgery constriction; Kussmaul sign.")]),
      C("Diagnosis and treatment",
        tbl(["Test", "Finding"], [
          ["CXR", "<strong>Thickened, calcified pericardium</strong> and/or pleural effusions"],
          ["EKG", "Nonspecific ST-T changes, low QRS voltage; <strong>atrial arrhythmias common</strong>"],
          ["<strong>Echo</strong> (essential)", "<strong>Thickened, immobile pericardium</strong>, <strong>septal motion abnormalities</strong>; usually makes the diagnosis"],
          ["CT/MRI", "Extent of thickening and calcification, for surgical planning"],
          ["Cardiac cath", "If echo is non-diagnostic or poor quality"]]) +
        tbl(["Stage", "Treatment"], [
          ["Early", "Like acute pericarditis: <strong>NSAIDs + colchicine for 2–3 months</strong>"],
          ["Late, not a surgical candidate", "<strong>Diuretics and salt restriction</strong>"],
          ["<strong>Moderate to severe</strong>", "<strong>Pericardiectomy</strong>"]]) +
        hy("<strong>Tachycardia is protective</strong> (stroke volume is fixed, so output depends on rate): <strong>avoid beta blockers and calcium channel blockers</strong>.") +
        "<p>Constrictive pericarditis is <strong>progressive</strong>.</p>",
        ["constrictive-diagnosis", "constrictive-treatment", "constrictive-avoid-bb-ccb"],
        [q("What is the essential diagnostic test for constrictive pericarditis?", "Echocardiogram", ["Holter monitor", "PPD", "Stress test"], "Echo usually makes the diagnosis."),
          q("What does echo show in constrictive pericarditis?", "Thickened, immobile pericardium with septal motion abnormalities", ["A large effusion with tamponade", "A vegetation", "A dilated LV with low EF only"], "Slide 71."),
          q("What does the CXR show in constrictive pericarditis?", "Calcified pericardium", ["Water-bottle heart", "Kerley B lines only", "Rib notching"], "Thickened, calcified pericardium."),
          q("When is cardiac cath needed to diagnose constrictive pericarditis?", "When the echo is non-diagnostic or poor quality", ["Always first", "Never", "Only in children"], "Backup if echo fails."),
          q("Which drug classes should be avoided in constrictive pericarditis?", "Beta blockers and calcium channel blockers", ["Diuretics", "NSAIDs", "Colchicine"], "Tachycardia is protective."),
          q("What is the definitive treatment for moderate to severe constrictive pericarditis?", "Pericardiectomy", ["Pericardiocentesis", "Valve replacement", "Pacemaker"], "Pericardiectomy."),
          q("How is early constrictive pericarditis treated?", "NSAIDs and colchicine for 2 to 3 months", ["Pericardiectomy immediately", "Beta blockers", "Long-term antibiotics"], "Like acute pericarditis."),
          q("Which arrhythmias are common in constrictive pericarditis?", "Atrial arrhythmias", ["Ventricular fibrillation", "Complete heart block", "Torsades"], "Atrial dysrhythmias are common.")],
        [q("A patient with constrictive pericarditis has a heart rate of 110. A resident wants to start metoprolol for rate control. Best response?", "Avoid it; tachycardia keeps output up because stroke volume is fixed", ["Start it at a high dose", "Switch to diltiazem instead", "Add both metoprolol and diltiazem"], "Avoid BB and CCB."),
          q("An elderly patient with late constrictive pericarditis is too frail for surgery and has edema. Best management?", "Diuretics and salt restriction", ["Pericardiectomy", "Pericardiocentesis", "Beta blocker"], "Medical therapy if not a surgical candidate."),
          q("A patient with moderate constrictive pericarditis is a good surgical candidate. Definitive treatment?", "Pericardiectomy", ["Pericardial window", "Lifelong colchicine alone", "Heart transplant first"], "Pericardiectomy."),
          q("A surgeon wants to know the extent of pericardial calcification before operating on constrictive pericarditis. Which test?", "CT or MRI", ["EKG", "PPD", "Holter"], "CT/MRI gives anatomic detail.")]),
      C("Tamponade vs constrictive pericarditis",
        tbl(["", "<strong>Tamponade</strong>", "<strong>Constrictive pericarditis</strong>"], [
          ["Problem", "<strong>Fluid</strong> compressing the heart", "<strong>Stiff, thick, calcified</strong> pericardium"],
          ["Onset", "Acute or subacute", "<strong>Slow</strong>, progressive"],
          ["Key signs", "<strong>Beck triad</strong>, <strong>pulsus paradoxus</strong>", "Right HF picture, <strong>pericardial knock</strong>, Kussmaul sign"],
          ["Echo", "<strong>Effusion</strong> with tamponade physiology", "<strong>Thick, immobile</strong> pericardium, septal motion abnormality"],
          ["CXR", "Large silhouette", "<strong>Calcified</strong> pericardium"],
          ["Treatment", "<strong>Pericardiocentesis</strong> (window if recurrent)", "<strong>Pericardiectomy</strong> (NSAID + colchicine if early)"]]) +
        note("Kussmaul sign is standard teaching, not on the slides."),
        ["tamponade-vs-constrictive"],
        [q("Which condition is treated with pericardiocentesis, tamponade or constrictive pericarditis?", "Tamponade", ["Constrictive pericarditis", "Both equally", "Neither"], "Tamponade is drained; constriction is stripped."),
          q("Which condition is treated with pericardiectomy, tamponade or constrictive pericarditis?", "Constrictive pericarditis", ["Tamponade", "Acute viral pericarditis", "Dressler syndrome"], "Remove the stiff pericardium."),
          q("Which condition has a pericardial knock?", "Constrictive pericarditis", ["Tamponade", "Acute pericarditis", "Endocarditis"], "Knock = constriction.")],
        [q("Two patients have high JVP. One has a calcified pericardium on CXR and a knock; the other has a large effusion, pulsus paradoxus and hypotension. Which needs emergent pericardiocentesis?", "The one with the large effusion and pulsus paradoxus", ["The one with the calcified pericardium", "Both", "Neither"], "Tamponade is drained urgently.")])
    ])
  ];
})();
