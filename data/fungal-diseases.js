/* Fungal Diseases, Toxoplasmosis, and MAC content derived only from "Fungal Diseases 2026-student.pptx". */
(function () {
  "use strict";

  var questionSequence = 0;
  function F(prompt, answer, distractors, explanation) {
    var correct = questionSequence++ % 4;
    var choices = (distractors || []).slice(0, 3);
    while (choices.length < 3) choices.push("Not listed in the lecture");
    choices.splice(correct, 0, answer);
    return { prompt: prompt, choices: choices, correct: correct, explanation: explanation };
  }
  function C(title, html, tests, apply, highYield) {
    return { title: title, html: html, body: title, tests: tests || [], application: apply, highYield: !!highYield };
  }
  function O(id, title, cards) {
    var test = [], apply = [];
    cards.forEach(function (card, cardIndex) {
      (card.tests || []).forEach(function (question) {
        test.push({ prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation, card: cardIndex });
      });
      if (card.application) apply.push({ prompt: card.application.prompt, choices: card.application.choices, correct: card.application.correct, explanation: card.application.explanation, card: cardIndex });
    });
    return { id: id, title: title, cards: cards, test: test, apply: apply };
  }
  function Tbl(headers, rows) {
    return '<table class="learn-table"><tr>' + headers.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>' + rows.map(function (row) { return '<tr>' + row.map(function (cell) { return '<td>' + cell + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
  }
  function M(label, text) {
    return '<div class="box-mnemonic"><span class="lbl">' + label + '</span><strong>' + text + '</strong></div>';
  }

  window.FUNGAL_DISEASE_OBJECTIVES = [
    O("01-toxoplasmosis", "1. Toxoplasmosis Across Immunocompetent, Immunosuppressed, and Congenital Populations", [
      C("T. gondii life cycle and four human transmission routes", `<p><strong>Toxoplasma gondii</strong> is an intracellular protozoan parasite with worldwide distribution. Felines are the only animals in which it completes its reproductive cycle. An infected cat may shed oocysts in feces for up to two weeks; ingested oocysts disseminate and encyst in any nucleated cell for the host’s lifetime.</p>${Tbl(["Route", "Exposure"], [
        ["Environment", "Ingesting oocysts from cat-feces-contaminated soil, fresh water, fruit, or vegetables"],
        ["Food", "Ingesting tissue cysts in meat from an infected animal"],
        ["Vertical", "Mother-to-fetus transmission"],
        ["Medical", "Organ transplant or blood transfusion from an infected donor"]
      ])}${M("Four routes", "Soil/water/produce · Meat · Mother · Medical donor")}`, [
        F("Which animals allow T. gondii to complete its reproductive cycle?", "Felines", ["Humans", "Birds", "Rodents"], "Cats are the definitive host in the lecture’s life cycle."),
        F("What happens after a non-feline ingests T. gondii oocysts?", "The parasite disseminates and forms lifelong dormant tissue cysts", ["It remains only in the bowel", "It is eliminated immediately", "It reproduces only in red blood cells"], "Oocysts invade intestinal epithelium, disseminate, and encyst in nucleated cells.")
      ], F("A gardener eats unwashed produce contaminated by cat feces. Which toxoplasmosis route occurred?", "Environmental ingestion of infectious oocysts", ["Tissue cysts from meat", "Vertical transmission", "Organ transplantation"], "Cat-feces-contaminated soil and produce can carry oocysts."), true),
      C("Immunocompetent adults are usually asymptomatic and latent", Tbl(["Course", "Lecture pattern"], [
        ["Typical", "80–90% asymptomatic; lifelong latent phase"],
        ["Acute timing", "5–23 days after exposure"],
        ["Most common finding", "Nontender cervical lymphadenopathy; generalized lymphadenopathy in 20–30%"],
        ["Other findings", "Mild fever/chills/sweats, headache, myalgia, pharyngitis, hepatosplenomegaly, diffuse nonpruritic maculopapular rash"],
        ["Rare severe disease", "Pneumonitis, ARDS, myocarditis/pericarditis, polymyositis, hepatitis, posterior uveitis, or encephalitis"]
      ]), [
        F("What is the usual course of toxoplasmosis in an immunocompetent adult?", "Asymptomatic infection followed by lifelong latency", ["Rapidly fatal encephalitis", "Progressive cavitary pneumonia", "Chronic fungemia"], "Most immunocompetent patients never develop symptoms."),
        F("What is the most common acute finding in an immunocompetent adult?", "Nontender cervical lymphadenopathy", ["Painful inguinal nodes", "Hydrocephalus", "Hemoptysis"], "Nontender cervical nodes are the commonest symptomatic clue.")
      ], F("A healthy adult develops mild fever and nontender cervical nodes two weeks after exposure. What course is most likely?", "Self-limited acute toxoplasmosis followed by latent infection", ["Mandatory lifelong amphotericin", "Disseminated MAC", "Invasive aspergillosis"], "This is the typical mild immunocompetent presentation."), true),
      C("Ocular toxoplasmosis: floaters and retinochoroiditis", `<p>T. gondii is the most common pathogen causing posterior uveitis in immunocompetent hosts. Inflammation centers on the retina and choroid (<strong>retinochoroiditis</strong>), producing floaters with or without visual loss. Macular disease can cause permanent loss.</p><p>Most cases resolve spontaneously within 4–8 weeks. The lecture notes that <strong>TMP-SMX (Bactrim) for six weeks</strong> reduces lesion size, speeds recovery, and lowers recurrent-infection risk.</p>`, [
        F("Which ocular structures are primarily inflamed in ocular toxoplasmosis?", "Retina and choroid", ["Lens and iris only", "Optic chiasm only", "Cornea only"], "Posterior uveitis from T. gondii is retinochoroiditis.")
      ], F("An immunocompetent patient has floaters and posterior uveitis affecting the macula. Which complication is possible?", "Permanent visual loss", ["Claw hand", "Megacolon", "Bronchiectasis"], "Macular involvement threatens permanent vision."), true),
      C("General diagnosis: PCR, serology, and histopathology", Tbl(["Method", "Interpretation"], [
        ["PCR—gold standard", "T. gondii DNA from amniotic fluid, blood, CSF, or BAL"],
        ["IgM", "Appears within one week of symptoms and continues rising"],
        ["IgG", "Rises within two weeks, peaks at eight weeks, persists for life"],
        ["Acute serologic pattern", "Compatible symptoms + positive IgM with negative IgG; later IgG positivity strengthens the diagnosis"],
        ["Tachyzoites", "Crescent shaped; usually establish acute infection"],
        ["Bradyzoite cysts", "Circular; may represent latency or reactivation"]
      ]) + M("Forms", "Tachyzoite = acute traveler · Bradyzoite = boxed-up latent cyst"), [
        F("What is the gold-standard diagnostic method for toxoplasmosis?", "PCR for T. gondii DNA", ["Chest radiograph", "Blood culture", "Skin-prick testing"], "PCR may be performed on amniotic fluid, blood, CSF, or BAL."),
        F("Which antibody persists for life after toxoplasmosis?", "IgG", ["IgM only", "IgE", "No antibody"], "IgG rises after infection and remains detectable lifelong.")
      ], F("A symptomatic patient has positive Toxoplasma IgM and negative IgG. What does this pattern suggest?", "Acute toxoplasmosis", ["Remote infection only", "No exposure", "Chronic pulmonary histoplasmosis"], "Early acute infection may have IgM before IgG appears."), true),
      C("Immunocompetent treatment depends on severity", Tbl(["Situation", "Approach"], [
        ["Nonpregnant, lymphadenopathy only", "Usually self-limited; no treatment"],
        ["Symptoms lasting more than a few weeks", "Consider treatment"],
        ["Organ disease", "Treat pneumonitis, myocarditis, meningoencephalitis, posterior uveitis, or myositis"],
        ["Regimen", "Pyrimethamine + sulfadiazine + leucovorin calcium"]
      ]), [
        F("Which immunocompetent toxoplasmosis patient usually needs no treatment?", "A nonpregnant patient with lymphadenopathy only", ["A patient with encephalitis", "A patient with myocarditis", "A patient with prolonged severe symptoms"], "Mild lymph-node-only disease is usually self-limited.")
      ], F("An otherwise healthy nonpregnant adult has persistent toxoplasmosis pneumonitis. Which lecture regimen is appropriate?", "Pyrimethamine, sulfadiazine, and leucovorin", ["Amphotericin alone", "Voriconazole alone", "Azithromycin, rifampin, and ethambutol"], "Organ involvement is an indication for anti-Toxoplasma treatment."), true),
      C("Congenital risk: later transmission, earlier severity", Tbl(["Timing", "Transmission/severity pattern"], [
        ["Before conception", "Women infected before conception virtually never transmit; maternal IgG is already elevated"],
        ["First trimester", "10–25% fetal infection; greatest severity and more spontaneous abortion"],
        ["Second trimester", "30–50% fetal infection"],
        ["Third trimester", "60% or higher; infants often normal at birth but can develop later sequelae"]
      ]) + M("Opposing curves", "Transmission rises with trimester · Severity rises the earlier infection occurs"), [
        F("How do gestational timing and congenital toxoplasmosis risk relate?", "Transmission increases later, but severe fetal complications are greater with earlier infection", ["Both risks fall throughout pregnancy", "Severity is greatest in the third trimester", "Timing has no effect"], "The probability of transmission and severity move in opposite directions."),
        F("When does congenital toxoplasmosis occur?", "When the mother first acquires toxoplasmosis during pregnancy", ["Whenever maternal IgG predates conception", "Only after delivery", "Only through breastfeeding"], "Tachyzoites cross from a newly infected mother to the fetus.")
      ], F("A patient acquires toxoplasmosis in the first trimester. Compared with third-trimester infection, what is expected?", "Lower transmission probability but greater risk of severe fetal injury", ["Higher transmission and milder injury", "No fetal risk", "Identical risk and severity"], "Early infection is less often transmitted but more damaging."), true),
      C("Congenital manifestations and ultrasound clues", Tbl(["Early fetal infection", "Later fetal infection"], [
        ["Spontaneous abortion, stillbirth, or severe neonatal disease", "Often appears normal at birth"],
        ["Seizures, psychomotor delay, deafness, hydrocephalus", "Hepatosplenomegaly/lymphadenopathy in early months"],
        ["Intracranial calcifications and retinochoroiditis", "CNS and ocular disease, including chorioretinitis, later in life"]
      ]) + `<p>Common fetal-ultrasound findings are <strong>intracranial calcifications plus cerebral ventricular dilation</strong>. Other findings include hydrocephaly, echogenic bowel, hepatosplenomegaly, hepatic calcification, ascites, growth restriction, placental thickening, and fetal demise.</p>`, [
        F("Which two ultrasound findings commonly occur together in fetal toxoplasmosis?", "Intracranial calcifications and cerebral ventricular dilation", ["Apical cavities and hilar nodes", "Bronchiectasis and fungus balls", "Pleural nodules and empyema"], "These are the deck’s most common fetal ultrasound findings.")
      ], F("A newborn appears normal after late gestational infection. What counseling is important?", "CNS and ocular disease may emerge later without extended treatment", ["No sequelae can occur", "Only lung cavities are expected", "The infant cannot have congenital disease"], "Later infections may be subtle at birth but produce delayed chorioretinitis or CNS disease."), true),
      C("Congenital diagnosis and gestational-age treatment", Tbl(["Patient/test", "Lecture approach"], [
        ["Mother", "Symptoms plus IgM positive/IgG negative suggests acute infection"],
        ["Fetus", "Amniotic-fluid PCR at ≥18 weeks when recent maternal infection is confirmed/suspected or ultrasound is abnormal"],
        ["Newborn", "Positive IgM or IgA, or IgG persisting beyond 12 months; earlier IgG may be maternal"],
        ["Pregnancy <18 weeks", "Spiramycin—does not treat the fetus"],
        ["Pregnancy ≥18 weeks", "Pyrimethamine + sulfadiazine + folinic acid"],
        ["Positive amniotic PCR", "Continue pyrimethamine-sulfadiazine-folinic acid until delivery"]
      ]), [
        F("Which treatment is used for maternal toxoplasmosis before 18 weeks?", "Spiramycin", ["Voriconazole", "Itraconazole", "Ethambutol"], "The lecture selects treatment by gestational age and notes spiramycin does not treat the fetus."),
        F("What newborn serology can confirm congenital toxoplasmosis?", "Positive IgM or IgA, or IgG persisting beyond 12 months", ["IgG before 12 months by itself", "Negative IgM only", "Elevated IgE only"], "Maternal IgG can cross the placenta and persist temporarily.")
      ], F("At 20 weeks, maternal serology suggests recent infection and amniotic PCR is positive. Which regimen is indicated until delivery?", "Pyrimethamine, sulfadiazine, and folinic acid", ["Spiramycin only", "Fluconazole", "No treatment because the mother is asymptomatic"], "Positive fetal PCR at ≥18 weeks calls for the three-drug regimen."), true),
      C("Immunosuppression turns latency into CNS or cardiopulmonary disease", Tbl(["Population", "Presentation"], [
        ["Advanced AIDS", "Toxoplasmic encephalitis: headache, seizure, focal deficit, altered mental status, fever"],
        ["Immunosuppressive drugs or hematologic malignancy", "Pneumonitis and myocarditis are most common"],
        ["Imaging for encephalitis", "Multiple ring-enhancing cerebral lesions; MRI is preferred"]
      ]) + `<p>Reactivation is especially associated with AIDS, cancer, and immunosuppressive drugs. Toxoplasmosis is the most common CNS parasitic infection in patients with AIDS who are not receiving appropriate prophylaxis.</p>`, [
        F("What is the most common toxoplasmosis presentation in advanced AIDS?", "Toxoplasmic encephalitis", ["Isolated cervical nodes", "Allergic sinusitis", "Chronic cavitary lung disease"], "Reactivation commonly involves the CNS in advanced AIDS."),
        F("What imaging pattern supports toxoplasmic encephalitis?", "Multiple ring-enhancing cerebral lesions", ["One calcified pleural nodule", "Upper-lobe bronchiectasis only", "A marching pulmonary cavity"], "MRI is the imaging modality of choice.")
      ], F("A patient with advanced AIDS has headache, seizures, focal deficits, and multiple ring-enhancing lesions. What is the presumptive diagnosis?", "Toxoplasmic encephalitis", ["Cryptococcal pneumonia", "ABPA", "Fibrocavitary MAC"], "This is the characteristic AIDS presentation."), true),
      C("Presumptive AIDS diagnosis, treatment, and prophylaxis", Tbl(["Domain", "Lecture detail"], [
        ["Presumptive criteria", "CD4 <100, compatible neurologic syndrome/fever, positive T. gondii IgG, ring-enhancing brain lesions"],
        ["Acute treatment", "Pyrimethamine + sulfadiazine + leucovorin for six weeks, then maintenance dosing"],
        ["Immune recovery", "Add antiretroviral therapy"],
        ["Adjuncts", "Dexamethasone for cerebral edema; anticonvulsants for seizures"],
        ["Screening", "Check Toxoplasma IgG when HIV is first diagnosed"],
        ["Primary prophylaxis", "TMP-SMX for asymptomatic IgG-positive patients"],
        ["Stop prophylaxis", "Suppressed viral load and CD4 >200 for at least three months on ART"]
      ]), [
        F("Which medication provides primary toxoplasmosis prophylaxis in an IgG-positive patient with HIV?", "TMP-SMX", ["Fluconazole", "Amphotericin B", "Voriconazole"], "Bactrim is used to prevent reactivation."),
        F("When may primary prophylaxis be stopped?", "After viral suppression with CD4 >200 for at least three months", ["Immediately after ART starts", "When IgG remains positive", "Only when CD4 is below 100"], "Immune recovery permits safe discontinuation.")
      ], F("An AIDS patient with CD4 60, positive Toxoplasma IgG, neurologic symptoms, and ring-enhancing lesions is treated presumptively. What regimen and adjunctive strategy fit?", "Pyrimethamine-sulfadiazine-leucovorin plus ART; dexamethasone or anticonvulsants when indicated", ["Itraconazole only", "No therapy until brain biopsy", "Azithromycin-rifampin-ethambutol"], "Most patients are treated on a presumptive clinical diagnosis."), true),
      C("Prevention focuses on water, soil, food, meat, and cats", `<ul><li>Avoid unfiltered water and raw shellfish.</li><li>Wash hands after soil exposure and wash fruit and vegetables.</li><li>Clean cutting boards, knives, counters, and sinks after food preparation; avoid mucous-membrane contact with raw meat.</li><li>Cook meat to at least 152°F (66°C) or freeze it for 24 hours.</li><li>Cat ownership is only weakly associated with acute infection. During pregnancy, have another person change litter daily or use gloves; keep cats indoors and do not feed raw food.</li></ul>`, [
        F("What meat preparation is recommended to prevent toxoplasmosis?", "Cook to at least 152°F (66°C) or freeze for 24 hours", ["Taste while cooking", "Serve raw", "Rinse with unfiltered water only"], "Adequate cooking or freezing reduces tissue-cyst exposure.")
      ], F("A pregnant cat owner asks how to lower risk without giving up the cat. What advice matches the lecture?", "Have someone else change litter daily or wear gloves, keep the cat indoors, and avoid feeding it raw food", ["Cat ownership always causes acute infection", "Change litter bare-handed once weekly", "Feed only raw meat"], "Practical litter and feeding precautions are appropriate."), false)
    ]),

    O("02-histoplasmosis", "2. Histoplasmosis: Geography, Transmission, Clinical Forms, Diagnosis, and Treatment", [
      C("Ohio/Mississippi valleys + bird or bat droppings", Tbl(["Domain", "Lecture point"], [
        ["Organism", "Histoplasma capsulatum"],
        ["Geography", "Worldwide; most common in the Midwestern/Central US along the Ohio and Mississippi River valleys"],
        ["Reservoir", "Soil containing large amounts of bird or bat droppings"],
        ["Exposure sites", "Chicken coops, farm/abandoned buildings, roosts, caves, wood lots"],
        ["Exposure activities", "Excavation, construction/demolition/remodeling, wood cutting, cave exploration, cleaning guano"],
        ["Transmission", "Inhalation of airborne spores or mycelial fragments after contaminated soil is disrupted"]
      ]) + M("Histo map", "Ohio/Mississippi soil + bird/bat droppings + disruption → inhalation"), [
        F("Where is histoplasmosis most common in the United States?", "The Ohio and Mississippi River valleys", ["Only the Pacific Northwest", "Only coastal Alaska", "Only the San Joaquin Valley"], "The Midwestern and Central US river valleys are the key endemic area."),
        F("How is histoplasmosis acquired?", "Inhalation after bird- or bat-dropping-contaminated soil is disrupted", ["Person-to-person droplets", "Cat scratches", "Undercooked meat"], "Activities that aerosolize spores create exposure.")
      ], F("A spelunker in the Ohio River Valley develops pneumonia after disturbing bat guano. Which infection is most likely?", "Histoplasmosis", ["Coccidioidomycosis", "Cryptococcosis", "Candidemia"], "Geography and cave-guano exposure strongly identify histoplasmosis."), true),
      C("Pathogenesis: macrophage carriage stopped by cellular immunity", `<div class="stage-flow">Inhaled spores → small budding yeast → engulfed by lung macrophages → lymph nodes/blood during first 2 weeks → T-cell activation at days 10–14</div><p>T lymphocytes activate macrophages and give them fungicidal properties. Granulomas may form but become sterile, halting infection in immunocompetent patients.</p>`, [
        F("Which immune mechanism normally halts histoplasmosis in an immunocompetent patient?", "T-cell activation of macrophages", ["IgE-mediated bronchospasm", "Platelet destruction", "Loss of cellular immunity"], "Cellular immunity develops about 10–14 days after infection.")
      ], F("An immunocompetent patient contains inhaled Histoplasma after two weeks. What process explains containment?", "Activated macrophages kill yeast and sterile granulomas contain infection", ["Persistent fungemia is inevitable", "Oocysts encyst in all cells", "Neutropenia develops"], "T-cell-driven macrophage activation stops infection."), false),
      C("Acute pulmonary histoplasmosis: usually mild, often mistaken for CAP", Tbl(["Domain", "Pattern"], [
        ["Timing", "Begins 2–4 weeks after exposure; lasts 1 week to 6 months"],
        ["Symptoms", "Fever, chills, headache, myalgia, anorexia, cough, chest pain"],
        ["Imaging after light exposure", "Hilar/mediastinal lymphadenopathy with focal patchy or 1–4 cm nodular infiltrates; may be normal"],
        ["Key pitfall", "Often treated as community-acquired pneumonia and recognized after no antibacterial response"],
        ["Prognosis", "Almost never fatal"]
      ]), [
        F("What clue commonly leads clinicians to reconsider CAP and diagnose acute pulmonary histoplasmosis?", "Failure to respond to empiric antibacterial therapy", ["Immediate response to antibiotics", "Multiple brain ring lesions", "Blood cultures positive for Candida"], "The illness often masquerades as bacterial pneumonia.")
      ], F("After demolition of a bird-infested building, a patient has flu-like pneumonia, hilar nodes, and no antibiotic response. What fits?", "Acute pulmonary histoplasmosis", ["ABPA", "Disseminated MAC", "Toxoplasmic encephalitis"], "Exposure, imaging, and CAP-treatment failure form the classic pattern."), true),
      C("Heavy exposure can produce diffuse pulmonary disease", Tbl(["Feature", "Acute diffuse pulmonary histoplasmosis"], [
        ["Trigger", "Heavy exposure"],
        ["Imaging", "Diffuse reticulonodular infiltrates"],
        ["Complications", "Respiratory failure or progression to disseminated histoplasmosis"],
        ["Recovery", "Dyspnea and fatigue may persist for months"]
      ]), [
        F("What exposure pattern precedes acute diffuse pulmonary histoplasmosis?", "Heavy inoculum exposure", ["No inhalational exposure", "A central line only", "Congenital infection"], "High exposure burden produces diffuse disease.")
      ], F("A worker has heavy guano exposure, diffuse reticulonodular infiltrates, dyspnea, and hypoxemia. Which form is present?", "Acute diffuse pulmonary histoplasmosis", ["Mild focal disease", "Chronic MAC only", "Allergic sinusitis"], "Heavy exposure with diffuse imaging identifies the severe acute form."), true),
      C("Progressive disseminated histoplasmosis mimics septic shock", Tbl(["Risk factors", "Manifestations"], [
        ["AIDS with CD4 <200; TNF-alpha inhibitors; methotrexate; transplant drugs; long-term glucocorticoids; extremes of age", "Fever, extreme weakness, weight loss, cough/dyspnea, altered mental status"],
        ["Multiorgan spread", "Skin lesions; mucosal/oropharyngeal and GI ulcers/bleeding; hepatosplenomegaly; enlarged adrenals"],
        ["Major complications", "Adrenal insufficiency in 50%, pancytopenia, meningitis in 5–20%, rapid death if untreated"]
      ]) + `<p>Among fungal infections, histoplasmosis is the most common in patients receiving TNF-alpha inhibitors. Skin disease is much more frequent in advanced HIV.</p>`, [
        F("Which endocrine complication occurs in about half of progressive disseminated histoplasmosis cases?", "Adrenal insufficiency", ["Hyperthyroidism", "Diabetes insipidus", "Hyperparathyroidism"], "Adrenal enlargement and failure are prominent disseminated findings."),
        F("Which medication category is strongly associated with disseminated histoplasmosis?", "TNF-alpha inhibitors", ["Topical emollients", "Antacids", "Short-term acetaminophen"], "The lecture names infliximab, etanercept, and adalimumab.")
      ], F("A patient receiving infliximab has fever, shock-like illness, pancytopenia, oral ulcers, hepatosplenomegaly, and adrenal insufficiency. What diagnosis fits?", "Progressive disseminated histoplasmosis", ["Mild pulmonary histoplasmosis", "ABPA", "Fibronodular MAC"], "TNF blockade plus multiorgan findings is the disseminated pattern."), true),
      C("Chronic pulmonary histoplasmosis: apical cavities that march", Tbl(["Population", "Older patients with chronic lung disease or smoking history"], [
        ["Symptoms", "Productive cough, dyspnea, chest pain, fatigue, fever, weight loss, night sweats"],
        ["Imaging", "Progressive fibrotic apical cavitary lesions"],
        ["Course", "Cavities enlarge into new lung regions, can create bronchopleural fistulae, and may consume an entire lobe—the ‘marching cavity’"]
      ]) + M("Recognition", "Older damaged lung + apical fibrosis/cavities + marching enlargement"), [
        F("Which imaging pattern characterizes chronic pulmonary histoplasmosis?", "Progressive fibrotic apical cavities", ["Solitary pleural nodules", "Multiple brain ring lesions", "Mid-lung bronchiectasis only"], "Cavities can enlarge and ‘march’ through a lobe.")
      ], F("An older smoker with COPD has weight loss, night sweats, productive cough, and enlarging apical cavities. Which form fits?", "Chronic pulmonary histoplasmosis", ["Acute mild histoplasmosis", "Candidemia", "Congenital toxoplasmosis"], "The host and cavitary pattern are characteristic."), true),
      C("Histoplasmosis diagnostic toolbox", Tbl(["Form", "Most sensitive culture specimen"], [
        ["Acute pulmonary", "BAL"],
        ["Progressive disseminated", "Blood, bone marrow, and BAL"],
        ["Chronic pulmonary", "Sputum or BAL"]
      ]) + `<ul><li><strong>Fungal culture is gold standard</strong>, but may require one month and can be negative in mild disease.</li><li>Histoplasma antigen can be tested in blood, urine, BAL, or CSF and is useful in severe acute and disseminated infection.</li><li>Histopathology demonstrates budding yeast in BAL or biopsy material from lung, nodes, skin, or other organs.</li></ul>`, [
        F("What is the gold-standard test for histoplasmosis?", "Fungal culture", ["Serum IgE", "Skin-prick testing", "Routine bacterial culture only"], "Culture is definitive but slow."),
        F("Which test is especially useful in severe acute or disseminated histoplasmosis?", "Histoplasma antigen", ["Toxoplasma IgG", "Aspergillus-specific IgE", "MAC sputum culture only"], "Antigen can be measured in several body fluids.")
      ], F("A severely immunosuppressed patient may have disseminated histoplasmosis and cannot wait a month for culture. Which supportive test is useful?", "Histoplasma antigen in blood or urine", ["Only a skin-prick test", "No testing is possible", "Coccidioides IgE"], "Antigen testing assists in severe and disseminated disease."), true),
      C("Histoplasmosis treatment ladder", Tbl(["Clinical form", "Treatment"], [
        ["Mild/moderate acute, <4 weeks", "Usually none"],
        ["Symptoms >4 weeks, diffuse infiltrates, or breathing difficulty", "Oral itraconazole"],
        ["Severe diffuse disease/ARDS", "IV amphotericin B for 1–2 weeks, then itraconazole for 6–12 weeks"],
        ["Progressive disseminated", "IV amphotericin B 1–2 weeks, then itraconazole; total at least 1 year"],
        ["Disseminated CNS", "IV amphotericin B 4–6 weeks, then itraconazole for at least 1 year"],
        ["Chronic pulmonary", "Itraconazole for at least 1 year; follow for relapse"]
      ]) + M("Severity ladder", "Mild—monitor · Persistent—itra · Severe/disseminated—ampho then itra"), [
        F("What is initial therapy for severe acute diffuse histoplasmosis with hypoxemia?", "IV amphotericin B", ["No treatment", "TMP-SMX", "Ethambutol"], "Severe pulmonary disease begins with amphotericin before step-down itraconazole."),
        F("How long is progressive disseminated histoplasmosis treated in total?", "At least one year", ["Two days", "One week", "Exactly four weeks"], "Amphotericin induction is followed by prolonged itraconazole.")
      ], F("A patient has mild acute pulmonary histoplasmosis for three weeks without dyspnea. What is the lecture approach?", "No antifungal treatment is generally required", ["Immediate lifelong fluconazole", "One year of amphotericin", "Surgical resection"], "Mild disease lasting under four weeks usually resolves without treatment."), true)
    ]),

    O("03-coccidioidomycosis", "3. Coccidioidomycosis: Geography, Transmission, Manifestations, Diagnosis, and Treatment", [
      C("Valley fever begins with inhaled desert soil", Tbl(["Domain", "Lecture point"], [
        ["Organism", "Dimorphic Coccidioides immitis or C. posadasii"],
        ["Geography", "Southwestern US: San Joaquin Valley, Arizona, southern Nevada, SW Utah, southern New Mexico, western Texas; also Mexico and Central/South America"],
        ["Transmission", "Inhalation of arthroconidia from disturbed soil"],
        ["Tissue form", "Arthroconidia become enlarging spherules that develop endospores; rupture releases more endospores"]
      ]) + M("Cocci clue", "Southwestern soil → spherules → Valley fever"), [
        F("How is coccidioidomycosis acquired?", "Inhalation of arthroconidia from disturbed soil", ["Cat-feces ingestion", "Central-line inoculation", "Person-to-person droplets"], "Soil disruption aerosolizes the organism."),
        F("What tissue structure releases Coccidioides endospores?", "A mature spherule", ["A tachyzoite", "An aspergilloma", "A yeast-filled macrophage only"], "Spherules enlarge, septate, and rupture.")
      ], F("A patient develops pneumonia after a dusty Arizona excavation. Which endemic mycosis fits?", "Coccidioidomycosis", ["Histoplasmosis", "Cryptococcosis", "Candidemia"], "Southwestern disturbed-soil exposure is the key association."), true),
      C("Primary pulmonary disease: 60% silent, 40% symptomatic", Tbl(["Feature", "Pattern"], [
        ["Timing", "Several days to 2 weeks after inhalation"],
        ["Common symptoms", "Chest pain most common, plus cough and fever"],
        ["Desert rheumatism", "Symmetric knee, ankle, or wrist arthralgias without effusion or erythema"],
        ["Skin", "Erythema nodosum on shins; erythema multiforme in necklace distribution; diffuse sandpaper-like toxic erythema"],
        ["Other", "Drenching night sweats, weight loss, extreme fatigue"],
        ["Imaging", "Unilateral upper-lobe patchy infiltrates with hilar lymphadenopathy; imaging may be normal"]
      ]), [
        F("What is ‘desert rheumatism’?", "Symmetric arthralgias without joint effusion or erythema", ["Septic arthritis", "Apical cavitation", "CNS abscesses"], "It commonly affects knees, ankles, and wrists in primary cocci."),
        F("What percentage of coccidioidomycosis infections are asymptomatic?", "About 60%", ["Less than 1%", "Exactly 10%", "Nearly 100%"], "Symptoms occur in about 40%.")
      ], F("A patient with Valley fever has chest pain, cough, fever, tender shin nodules, and symmetric ankle pain without swelling. What syndrome is this?", "Symptomatic primary pulmonary coccidioidomycosis", ["Disseminated candidiasis", "ABPA", "Toxoplasmic encephalitis"], "The pulmonary, skin, and desert-rheumatism findings cluster together."), true),
      C("Disseminated cocci: uncommon but high-risk", Tbl(["Domain", "Lecture pattern"], [
        ["Frequency", "Less than 1%"],
        ["Higher-risk groups", "Males, African American or Filipino patients, immunocompromised patients, pregnancy/postpartum"],
        ["Pulmonary severity", "Mediastinal nodes, cough/sputum; abscess rupture may cause empyema"],
        ["Dissemination", "Meningitis in 30–50%; bone/joint/soft-tissue infection; subcutaneous abscesses and verrucous lesions"],
        ["Fungemia", "Diffuse miliary chest pattern and early death"]
      ]), [
        F("What is the most important CNS manifestation of disseminated coccidioidomycosis?", "Meningitis", ["Toxoplasmic encephalitis", "Hydrocephalus only without infection", "ABPA"], "Meningitis occurs in 30–50% of disseminated cases."),
        F("Which patients are at increased dissemination risk?", "Males, African American or Filipino patients, immunocompromised patients, and pregnancy/postpartum", ["Only healthy children", "Only nonsmokers over 50", "Only people with asthma"], "These are the risk groups listed in the deck.")
      ], F("A pregnant patient from Arizona has worsening respiratory disease, verrucous lesions, bone pain, and meningitic symptoms. What is the concern?", "Disseminated coccidioidomycosis", ["Mild primary disease", "Fibrocavitary MAC", "Ocular toxoplasmosis"], "Pregnancy is a risk factor and the findings span multiple organs."), true),
      C("Diagnosis relies on serology and targeted CSF", Tbl(["Finding/test", "Interpretation"], [
        ["CBC", "Moderate leukocytosis and eosinophilia"],
        ["IgM", "Rises 1–3 weeks after infection"],
        ["IgG", "A steady rise suggests dissemination"],
        ["Suspected meningitis", "Lumbar puncture: increased WBCs with lymphocytosis and reduced glucose"]
      ]), [
        F("What serologic trend raises concern for disseminated coccidioidomycosis?", "Steadily rising IgG", ["Falling eosinophils alone", "Positive Toxoplasma IgM", "Elevated Aspergillus-specific IgE"], "A rising IgG level is associated with dissemination."),
        F("What CSF pattern is listed for coccidioidal meningitis?", "Lymphocytic pleocytosis with reduced glucose", ["No WBCs and high glucose", "Only eosinophils with normal glucose", "Positive bacterial Gram stain is required"], "LP is indicated when meningitis is suspected.")
      ], F("A Valley-fever patient develops headache and has rising IgG. What test is appropriate?", "Lumbar puncture with CSF analysis", ["Skin-prick test only", "Amniotic PCR", "No further evaluation"], "Rising IgG and neurologic concern raise suspicion for meningitis."), true),
      C("Coccidioidomycosis treatment follows severity and spread", Tbl(["Situation", "Treatment"], [
        ["Asymptomatic or uncomplicated focal pneumonia", "No treatment"],
        ["Focal pneumonia with immunosuppression, >2 months symptoms, >3 weeks night sweats, >10% weight loss, or rising IgG", "Fluconazole or itraconazole for 6 months"],
        ["Diffuse pneumonia", "IV amphotericin B until improved, then fluconazole/itraconazole for 6–12 months"],
        ["Disseminated skin/bone/joint disease", "Fluconazole or itraconazole for several years"],
        ["Meningitis", "Fluconazole 400–800 mg daily or itraconazole lifelong"]
      ]), [
        F("Does uncomplicated focal primary coccidioidal pneumonia require treatment?", "No", ["Yes, lifelong amphotericin", "Yes, three-drug MAC therapy", "Yes, pyrimethamine"], "Most uncomplicated primary disease is observed."),
        F("How long is coccidioidal meningitis treated?", "Lifelong", ["Five days", "Two weeks", "Six weeks only"], "The deck lists lifelong fluconazole or itraconazole.")
      ], F("An immunocompromised patient has focal coccidioidal pneumonia and persistent symptoms. What treatment fits?", "Fluconazole or itraconazole for six months", ["No therapy regardless of risk", "TMP-SMX", "Ethambutol alone"], "Host risk and prolonged symptoms trigger azole treatment."), true)
    ]),

    O("04-candidemia", "4. Candidemia Risk Factors, Invasive Candidiasis Presentation, and Treatment", [
      C("Candida moves from normal flora or lines into viscera", `<p><strong>Candida albicans</strong> is the most common species. Candidiasis often follows disruption of normal flora and is an increasingly important nosocomial infection.</p><div class="stage-flow">Mucosal overgrowth during immunosuppression/antibiotics OR skin entry through a central line → bloodstream → brain, heart, kidneys, eyes → microabscesses</div>`, [
        F("Which organs are commonly involved in invasive candidiasis?", "Brain, heart, kidneys, and eyes", ["Only skin", "Only the colon", "Only the sinuses"], "Hematogenous spread seeds multiple viscera."),
        F("How may Candida enter the bloodstream from the skin?", "Through a central venous catheter", ["Through a mosquito bite", "By inhaling desert soil", "From cat litter"], "Central lines are a major portal for candidemia.")
      ], F("A hospitalized patient on broad antibiotics has a central line and develops yeast in blood. What process is occurring?", "Invasive candidiasis with hematogenous spread", ["Localized oral Candida only", "Histoplasma inhalation", "MAC colonization"], "Candida can enter through a catheter and seed organs."), true),
      C("Candidemia risk-factor checklist", Tbl(["Category", "Risks"], [
        ["Care setting", "ICU, especially burn/trauma or neonatal units"],
        ["Immunosuppression", "Chronic glucocorticoids, chemotherapy, hematologic malignancy, organ transplant"],
        ["Age", "Extremes of age"],
        ["Devices/medications", "Central line and broad-spectrum antibiotics"],
        ["Abdomen", "Abdominal surgery or GI perforation"],
        ["Organ dysfunction", "Acute renal failure"]
      ]) + M("Risk triad", "Sick host · disrupted gut/flora · central line"), [
        F("Which device is a major candidemia risk factor?", "Central venous line", ["Hearing aid", "Walking cane", "Corrective lenses"], "Candida may enter from skin through the catheter."),
        F("Why do broad-spectrum antibiotics increase candidemia risk?", "They disrupt normal flora", ["They create arthroconidia", "They increase T-cell killing", "They prevent mucosal overgrowth"], "Candida often expands after normal-flora imbalance.")
      ], F("A burn-ICU patient with a central line, broad antibiotics, and acute renal failure develops fever. Which invasive infection deserves strong consideration?", "Candidemia", ["Primary pulmonary cocci", "Congenital toxoplasmosis", "ABPA"], "The patient has multiple major candidemia risks."), true),
      C("Clinical clues can outweigh a negative blood culture", Tbl(["Site", "Clue"], [
        ["Skin/muscle", "Erythematous macronodules with painful muscle involvement underneath"],
        ["Eye", "Chorioretinitis/endophthalmitis"],
        ["Heart", "Valvular vegetations"],
        ["Kidney", "Renal microabscesses"]
      ]) + `<p>There is no single specific diagnostic test. Obtain blood cultures in every suspected case, but they are positive only about <strong>50%</strong> and yeast takes 1–3 days to grow. High clinical suspicion plus ocular or macronodular skin lesions suggests deep multiorgan infection.</p>`, [
        F("How sensitive are blood cultures for invasive candidiasis in the lecture?", "About 50%", ["100%", "Less than 1%", "They are never obtained"], "A negative culture does not reliably exclude invasive disease."),
        F("Which skin finding suggests disseminated candidiasis?", "Erythematous macronodules with painful underlying muscle", ["Erythema nodosum only", "Anesthetic hypopigmented patches", "Necklace-distributed erythema multiforme"], "Painful muscle beneath macronodules is a key clue.")
      ], F("An ICU patient has negative blood cultures but painful erythematous macronodules and chorioretinitis. What interpretation fits?", "Invasive candidiasis remains highly likely", ["Negative cultures exclude Candida", "This proves ABPA", "This is uncomplicated mucosal Candida"], "Blood cultures miss about half of invasive cases."), true),
      C("First-line echinocandin, selected fluconazole alternative", Tbl(["Situation", "Treatment"], [
        ["First line", "IV echinocandin: caspofungin, micafungin, or anidulafungin"],
        ["Alternative", "IV fluconazole for a non-neutropenic, less critically ill patient without recent azole exposure"],
        ["Duration", "Continue for two weeks after the last positive blood culture and resolution of signs/symptoms"]
      ]) + M("Echinocandin trio", "CAS-po · MICA · ANIDULA"), [
        F("What is first-line therapy for invasive candidiasis?", "An IV echinocandin", ["Oral itraconazole only", "TMP-SMX", "Spiramycin"], "Caspofungin, micafungin, and anidulafungin are listed first line."),
        F("When is IV fluconazole an alternative?", "When the patient is non-neutropenic, less critically ill, and lacks recent azole exposure", ["In every unstable neutropenic patient", "Only after CNS spread", "Never"], "Host stability and prior azole exposure guide the alternative.")
      ], F("A stable, non-neutropenic candidemia patient has no recent azole exposure. Which alternative to an echinocandin is listed?", "IV fluconazole", ["Oral spiramycin", "Ethambutol", "Dexamethasone alone"], "This patient meets the lecture’s fluconazole criteria."), true)
    ]),

    O("05-aspergillosis", "5. Four Types of Aspergillosis: Populations and Clinical Findings", [
      C("Aspergillus exposure and risk spectrum", Tbl(["Exposure", "At-risk host"], [
        ["Indoor/outdoor air, surfaces, water; compost/dead leaves, bedding, dusty hay barns", "Leukemia, bone-marrow or organ transplant, HIV"],
        ["Lungs, sinuses, and brain are commonly involved", "Glucocorticoids; severe flu/COVID; COPD/asthma; severe liver disease; infliximab"]
      ]), [
        F("Where is Aspergillus commonly encountered?", "Air, surfaces, water, compost, dead leaves, bedding, and dusty hay", ["Only cat feces", "Only desert soil", "Only raw meat"], "The mold is common in indoor and outdoor environments."),
        F("Which organ systems are most often involved?", "Lungs, sinuses, and brain", ["Only bowel", "Only skin", "Only joints"], "The lecture emphasizes respiratory and CNS involvement.")
      ], F("A transplant patient exposed to dusty compost develops pulmonary and neurologic symptoms. Which mold should be considered?", "Aspergillus", ["Candida only", "T. gondii only", "MAC only"], "Environmental exposure plus profound immunosuppression fits aspergillosis risk."), false),
      C("ABPA: asthma/CF + brown mucus + IgE/eosinophils", Tbl(["Domain", "Pattern"], [
        ["Population", "Preexisting asthma or cystic fibrosis"],
        ["Presentation", "Recurrent asthma exacerbations, worsening bronchospasm, coughing fits from mucus plugs, thick brown sputum"],
        ["Imaging", "Upper-lobe infiltrates and bronchiectasis"],
        ["Labs", "Eosinophilia, high total IgE, Aspergillus-specific IgE or positive pinprick test"],
        ["Treatment", "Prednisone + itraconazole"]
      ]) + M("ABPA bundle", "Asthma/CF · Brown plugs · Pulmonary bronchiectasis · Allergic IgE"), [
        F("Which patients classically develop ABPA?", "Patients with asthma or cystic fibrosis", ["Only patients with AIDS", "Only older smokers", "Only pregnant patients"], "ABPA is an allergic pulmonary syndrome in asthma/CF."),
        F("What sputum clue is associated with ABPA?", "Thick brown sputum from mucus plugging", ["Rice-water sputum", "No cough", "Bloody stool"], "Brown mucus plugs accompany coughing fits and bronchospasm.")
      ], F("A patient with asthma has recurrent flares, eosinophilia, very high IgE, brown mucus plugs, and upper-lobe bronchiectasis. Which form?", "Allergic bronchopulmonary aspergillosis", ["Invasive aspergillosis", "Allergic sinusitis", "Chronic cavitary aspergillosis"], "The allergic asthma/CF pattern is ABPA."), true),
      C("Allergic Aspergillus sinusitis", Tbl(["Domain", "Pattern"], [
        ["Presentation", "Sinus drainage, stuffiness, headache; nasal polyps and edematous turbinates"],
        ["CT", "Polyposis with opacified sinus(es), often containing hyperdensities"],
        ["Labs/pathology", "High total IgE, eosinophilia, Charcot-Leyden crystals"],
        ["Treatment", "Remove polyps/mucus plus intranasal or systemic glucocorticoids; persistent disease may need endoscopic surgery with antifungals"]
      ]), [
        F("Which physical finding is typical of allergic Aspergillus sinusitis?", "Nasal polyps", ["Claw hand", "Cervical lymphadenopathy", "Erythema nodosum"], "Polyps and edematous turbinates reflect allergic fungal inflammation."),
        F("Which crystals may be found in allergic fungal sinusitis?", "Charcot-Leyden crystals", ["Calcium oxalate only", "Intracranial calcifications", "Urate crystals"], "The lecture lists Charcot-Leyden crystals with eosinophilic disease.")
      ], F("A patient has chronic sinus symptoms, nasal polyps, eosinophilia, high IgE, and hyperdense sinus opacification. Which form?", "Allergic Aspergillus sinusitis", ["ABPA", "Invasive pulmonary aspergillosis", "Chronic MAC"], "The syndrome is localized allergic fungal rhinosinusitis."), true),
      C("Chronic pulmonary aspergillosis and aspergillomas", Tbl(["Domain", "Pattern"], [
        ["Population", "Preexisting lung damage: TB, nontuberculous mycobacteria, COPD, thoracic surgery, sarcoidosis"],
        ["Course", "One or more cavities form/expand over months to years"],
        ["Symptoms", "Weight loss, chronic productive cough, hemoptysis, fatigue, dyspnea"],
        ["Imaging", "Usually upper-lobe cavities, with or without fungus balls (aspergillomas)"],
        ["Test/treatment", "Elevated Aspergillus IgG; itraconazole 4–6 months; symptomatic aspergilloma requires resection"]
      ]), [
        F("What structural lung finding is the hallmark of chronic pulmonary aspergillosis?", "Expanding pulmonary cavities", ["Normal lungs without cavities", "Only pleural nodules", "Only hilar lymphadenopathy"], "Cavity formation and expansion occur over months to years."),
        F("What is an Aspergillus fungus ball in a cavity called?", "Aspergilloma", ["Cryptococcoma", "Tachyzoite", "Spherule"], "Aspergillomas may occupy preexisting cavities.")
      ], F("A patient with prior TB has months of weight loss, productive cough, hemoptysis, and an upper-lobe cavity containing a fungus ball. What is present?", "Chronic pulmonary aspergillosis with aspergilloma", ["ABPA", "Allergic sinusitis", "Primary cocci"], "Damaged lungs and a cavity fungus ball identify chronic disease."), true),
      C("Invasive aspergillosis: profound immune deficiency + necrosis", Tbl(["Domain", "Pattern"], [
        ["Population", "Especially stem-cell transplant or prolonged severe neutropenia; can occur in critically ill immunocompetent patients"],
        ["Pulmonary disease", "80%; patchy infiltrates and severe necrotizing pneumonia; cough, fever, chest pain, dyspnea, trivial hemoptysis"],
        ["CNS spread", "Hemorrhagic infarction/abscesses on MRI; mood change, seizure, mental-status decline"],
        ["Other spread", "Endophthalmitis, endocarditis, skin disease, GI involvement"],
        ["Diagnosis", "Sputum/BAL culture plus tissue invasion on histopathology; serum or BAL galactomannan"],
        ["Treatment", "IV voriconazole is treatment of choice for most patients"]
      ]), [
        F("Which host is at greatest risk for invasive aspergillosis?", "A stem-cell transplant patient or patient with prolonged severe neutropenia", ["A healthy patient with isolated cervical nodes", "A patient with uncomplicated asthma only", "A cat owner"], "Profound cellular and neutrophil deficits permit tissue invasion."),
        F("What is the treatment of choice for most invasive aspergillosis patients?", "IV voriconazole", ["Spiramycin", "TMP-SMX", "Ethambutol"], "The deck identifies voriconazole as first choice.")
      ], F("A neutropenic stem-cell transplant patient has necrotizing pneumonia, hemoptysis, seizures, and hemorrhagic brain infarcts. What diagnosis fits?", "Invasive aspergillosis", ["ABPA", "Allergic sinusitis", "Chronic pulmonary aspergillosis without invasion"], "Pulmonary angioinvasion with CNS dissemination is the invasive form."), true)
    ]),

    O("06-cryptococcosis", "6. Cryptococcosis: Geography, Transmission, Immunosuppressed Presentation, Diagnosis, and Treatment", [
      C("Encapsulated yeast from soil, wood, and pigeon droppings", Tbl(["Species", "Lecture association"], [
        ["Cryptococcus neoformans", "Worldwide; soil, decaying wood, dried pigeon droppings"],
        ["Cryptococcus gattii", "Pacific Northwest; associated with eucalyptus trees"]
      ]) + `<p>Cryptococcus is an <strong>encapsulated budding yeast</strong> acquired by inhalation. It rarely causes symptoms in immunocompetent people and is the most common cause of fungal meningitis.</p>`, [
        F("Which Cryptococcus species is associated with the Pacific Northwest and eucalyptus trees?", "C. gattii", ["C. albicans", "C. immitis", "C. neoformans only"], "The lecture links C. gattii to this region and tree."),
        F("What distinctive fungal structure does Cryptococcus possess?", "A capsule", ["A spherule only", "An oocyst", "A mycobacterial cell wall"], "Cryptococcus is an encapsulated budding yeast.")
      ], F("A Pacific Northwest patient exposed near eucalyptus trees develops lung and CNS lesions. Which organism fits?", "Cryptococcus gattii", ["Histoplasma capsulatum", "Candida albicans", "Toxoplasma gondii"], "C. gattii is the regional species associated with cryptococcomas."), true),
      C("Immunodeficiency permits lung progression and dissemination", Tbl(["Risk group", "Examples"], [
        ["AIDS", "Major risk for progressive/disseminated disease"],
        ["Medication-related", "Prolonged glucocorticoids or TNF-alpha inhibitors"],
        ["Transplant", "Solid-organ transplant"],
        ["Malignancy", "Hematologic malignancy undergoing treatment"]
      ]), [
        F("In what setting does cryptococcosis most often progress and disseminate?", "Immunodeficiency", ["Normal immunity after brief exposure", "Isolated asthma", "Healthy athletic training"], "AIDS and immunosuppressive therapy are major risks.")
      ], F("A patient with AIDS develops a progressive pulmonary illness and subacute meningitic symptoms. Which fungal infection is a leading concern?", "Cryptococcosis", ["ABPA", "Uncomplicated primary cocci", "Mild histoplasmosis"], "Cryptococcus commonly disseminates to the CNS in immunodeficiency."), true),
      C("Pulmonary versus CNS cryptococcosis", Tbl(["Form", "Clinical and imaging pattern"], [
        ["Pulmonary", "Weeks of cough, dyspnea, chest pain, sputum, fever; solitary or a few well-defined noncalcified pleural nodules"],
        ["Disseminated CNS—predominant", "Weeks of headache followed by fever, neck pain, nausea/vomiting, photophobia, visual deficit, altered mental status, lethargy, cranial-nerve paresis"],
        ["C. gattii", "Respiratory symptoms plus neurologic signs from CNS space-occupying cryptococcomas, best seen on MRI"]
      ]) + M("Crypto path", "Inhale to lung → disseminate to meninges/CNS"), [
        F("What is the predominant manifestation of disseminated cryptococcosis?", "CNS disease", ["Isolated skin disease", "Arthritis only", "Cervical lymphadenopathy only"], "Cryptococcal meningitis is the key disseminated syndrome."),
        F("What chest imaging finding is common in pulmonary cryptococcosis?", "One or a few well-defined noncalcified pleural nodules", ["Diffuse ring-enhancing brain lesions", "Apical marching cavities only", "Upper-lobe bronchiectasis only"], "The nodules are a characteristic pulmonary clue.")
      ], F("An immunosuppressed patient has weeks of headache, fever, neck pain, photophobia, lethargy, and cranial-nerve paresis. Which diagnosis fits?", "Cryptococcal meningitis", ["ABPA", "Fibrocavitary MAC", "Ocular toxoplasmosis"], "The subacute CNS presentation is typical of disseminated cryptococcosis."), true),
      C("Culture/antigen diagnosis and induction-to-step-down treatment", Tbl(["Situation", "Approach"], [
        ["Pulmonary diagnosis", "Sputum or pleural-fluid culture, or serum cryptococcal antigen titer"],
        ["Suspected meningitis", "Lumbar puncture; opening pressure, cell count, protein, glucose, and CSF culture"],
        ["CSF pattern", "High opening pressure, variable pleocytosis, high protein, low glucose"],
        ["Immunocompetent pulmonary disease", "Oral fluconazole"],
        ["Severe pulmonary, CNS, or disseminated disease", "IV amphotericin B + oral flucytosine, then oral fluconazole"]
      ]) + M("Severe crypto", "Ampho + flucytosine → fluconazole"), [
        F("What is the preferred procedure for suspected cryptococcal meningitis?", "Lumbar puncture", ["Skin-prick test", "Amniocentesis", "Two sputum cultures only"], "CSF evaluation establishes meningitis and measures opening pressure."),
        F("What is induction therapy for severe or CNS cryptococcosis?", "IV amphotericin B plus oral flucytosine", ["Itraconazole alone", "TMP-SMX", "Azithromycin-rifampin-ethambutol"], "Fluconazole follows the induction combination.")
      ], F("An AIDS patient has cryptococcal meningitis with high opening pressure. Which treatment sequence fits?", "Amphotericin B plus flucytosine, followed by fluconazole", ["Fluconazole alone from the start regardless of severity", "Voriconazole only", "No antifungal treatment"], "CNS/disseminated disease requires induction and step-down therapy."), true)
    ]),

    O("07-mac", "7. Pulmonary and Disseminated Mycobacterium avium Complex", [
      C("MAC is environmental and usually inhaled", Tbl(["Domain", "Lecture point"], [
        ["Organisms", "M. avium and M. intracellulare; most frequent cause of nontuberculous-mycobacterial pulmonary disease in the US"],
        ["Reservoir", "Ubiquitous water and soil: tap water, garden/potting soil, household water-distribution systems"],
        ["Pulmonary acquisition", "Inhalation, likely aerosols from surface water or domestic/institutional hot-water systems"],
        ["Pulmonary risk", "Underlying bronchiectasis, COPD, or cystic fibrosis"]
      ]) + M("MAC exposure", "Mycobacteria in Aerosolized water and Compost/soil"), [
        F("How is pulmonary MAC most likely acquired?", "Inhalation of aerosols from environmental water", ["Person-to-person spread", "Cat-feces ingestion", "Mosquito bite"], "MAC is ubiquitous in water and soil."),
        F("Which underlying diseases raise pulmonary MAC risk?", "Bronchiectasis, COPD, and cystic fibrosis", ["Isolated eczema", "Migraine", "Hypertension only"], "Structural lung disease predisposes to pulmonary infection.")
      ], F("A patient with bronchiectasis has years of exposure to aerosolized household water and develops chronic cough. Which organism complex fits?", "MAC", ["T. gondii", "Candida only", "Coccidioides only"], "Environmental inhalation plus structural lung disease is the pulmonary-MAC pattern."), true),
      C("Pulmonary MAC develops slowly", Tbl(["Common over months to years", "Less common"], [
        ["Chronic nagging cough", "Dyspnea"],
        ["Sputum production", "Fever"],
        ["Throat clearing", "Hemoptysis"],
        ["Fatigue", "Weight loss"]
      ]), [
        F("Over what time course does pulmonary MAC usually present?", "Months to years", ["Minutes", "Hours only", "One day"], "MAC pulmonary illness is indolent."),
        F("Which symptom cluster is most common?", "Chronic cough, sputum, throat clearing, and fatigue", ["Acute meningitis only", "Posterior uveitis only", "Nasal polyps only"], "These are the deck’s common pulmonary symptoms.")
      ], F("A patient has years of nagging cough, sputum, throat clearing, and fatigue. Which disease tempo is most consistent?", "Pulmonary MAC", ["Acute toxoplasmosis", "Candidemia", "Acute diffuse histoplasmosis"], "The slow chronic pulmonary syndrome fits MAC."), false),
      C("Two pulmonary phenotypes", Tbl(["Form", "Population", "Imaging"], [
        ["Fibrocavitary MAC", "White middle-aged or older men with smoking history and underlying COPD", "Upper-lobe infiltrates and cavities"],
        ["Nodular/bronchiectatic MAC", "Predominantly nonsmoking women over 50 with chronic cough", "Bronchiectasis in the mid-lung zones"]
      ]) + M("Phenotype split", "Smoking man + upper cavities · Nonsmoking woman + mid-zone bronchiectasis"), [
        F("Who typically develops fibrocavitary MAC?", "An older White man with smoking history and COPD", ["A nonsmoking woman with mid-lung bronchiectasis", "A newborn", "A healthy child"], "This phenotype tracks damaged upper lungs in smokers."),
        F("Who typically develops nodular/bronchiectatic MAC?", "A nonsmoking woman older than 50", ["Only a neutropenic transplant recipient", "A young man with asthma", "A pregnant patient with cocci"], "The radiograph shows mid-zone bronchiectasis.")
      ], F("A 67-year-old nonsmoking woman has chronic cough and mid-lung bronchiectasis. Which MAC form fits?", "Nodular/bronchiectatic MAC", ["Fibrocavitary MAC", "Disseminated candidiasis", "ABPA"], "Host and radiographic distribution match the nodular/bronchiectatic phenotype."), true),
      C("Disseminated MAC occurs in immunosuppression", `<p>Disseminated disease is more common in immunosuppressed patients, especially those with <strong>AIDS</strong>. Environmental mycobacteria infect a mucosal surface in the gut or lung, multiply locally, enter the bloodstream, and seed other organs and tissues.</p><p>The lecture’s general MAC symptom list is chronic cough, sputum, throat clearing, and fatigue, with less common dyspnea, fever, hemoptysis, and weight loss; it does not provide a separate longer disseminated-symptom list.</p>`, [
        F("Which population is most associated with disseminated MAC?", "Immunosuppressed patients, especially those with AIDS", ["Only healthy athletes", "Only pregnant patients", "Only patients with asthma"], "Profound immunosuppression permits bloodstream dissemination."),
        F("How does MAC disseminate?", "It enters through gut or lung mucosa, multiplies locally, then reaches the bloodstream and seeds organs", ["It always spreads person to person", "It crosses only the placenta", "It remains confined to water"], "The environmental organism moves from mucosa to blood.")
      ], F("A patient with AIDS acquires environmental mycobacteria through the gut or lung and develops bloodstream spread. Which form is present?", "Disseminated MAC", ["Fibrocavitary MAC only", "ABPA", "Primary cocci"], "AIDS is the principal population named for dissemination."), true),
      C("MAC culture criteria and multidrug treatment", Tbl(["Diagnosis", "Treatment"], [
        ["Two separate positive expectorated sputum cultures", "Daily clarithromycin or azithromycin"],
        ["OR one positive bronchial wash", "+ rifampin or rifabutin"],
        ["OR positive pleural fluid/other sterile site", "+ ethambutol"],
        ["OR culture from biopsy/wash/sputum plus granulomatous lung histology", "Consider resection if progressive disease is confined to one lung and responds poorly"]
      ]) + M("MAC triple therapy", "Macrolide + Rifamycin + Ethambutol"), [
        F("How many separate positive expectorated sputum cultures meet the listed MAC criterion?", "At least two", ["One is always enough", "Four are mandatory", "Sputum cannot be used"], "Alternatively, one bronchial wash or a sterile-site culture may establish the microbiologic criterion."),
        F("What three-drug framework treats pulmonary MAC?", "Clarithromycin/azithromycin + rifampin/rifabutin + ethambutol", ["Pyrimethamine + sulfadiazine + leucovorin", "Amphotericin + flucytosine + fluconazole", "Prednisone + itraconazole only"], "A macrolide, rifamycin, and ethambutol are combined.")
      ], F("A patient has two separate positive MAC sputum cultures and compatible chronic lung disease. Which regimen fits?", "A macrolide plus a rifamycin plus ethambutol", ["Fluconazole alone", "Spiramycin", "No combination therapy"], "Pulmonary MAC is treated with a three-drug combination."), true)
    ])
  ];
})();
