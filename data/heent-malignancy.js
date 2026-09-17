/* HEENT Malignancy content derived only from "Head and Neck malignancies.pptx", "Chapter 82_ Head and Neck Cancer.pdf", the student answer sheet, and matching objectives. */
(function () {
  "use strict";

  var questionSequence = 0;
  function Q(prompt, answer, distractors, explanation) {
    var correct = questionSequence++ % 4;
    var choices = (distractors || []).slice(0, 3);
    while (choices.length < 3) choices.push("Not supported by the lecture");
    choices.splice(correct, 0, answer);
    return { prompt: prompt, choices: choices, correct: correct, explanation: explanation };
  }
  function C(title, html, tests, application, highYield) {
    return { title: title, html: html, body: title, tests: tests || [], application: application || [], highYield: !!highYield };
  }
  function K(title, html, test, application, highYield) {
    return C(title, html, [Q(test[0], test[1], test[2], test[3])], [Q(application[0], application[1], application[2], application[3])], highYield);
  }
  function T(headers, rows) {
    return '<table class="learn-table"><tr>' + headers.map(function (header) { return '<th>' + header + '</th>'; }).join('') + '</tr>' + rows.map(function (row) { return '<tr>' + row.map(function (cell) { return '<td>' + cell + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
  }

  var objectiveStatements = {
    "01-epidemiology-risk": "Recall the epidemiology and risk factors for the development of head and neck cancers.",
    "02-field-carcinogenesis": "Define the term field carcinogenesis and describe how this influences our clinical thinking about head and neck cancers.",
    "03-tumor-classification": "If given a clinical vignette, be able to classify a tumor as metastatic, synchronous, and metachronous.",
    "04-presentation-evaluation": "Discuss the clinical presentation of a head and neck cancer and describe how an otolaryngologist would evaluate a patient on the basis of these complaints.",
    "05-imaging-modalities": "Compare and contrast the advantages, disadvantages, and the place in the diagnostic work-up for CT, MRI, and PET modalities of imaging in the work-up of cancer.",
    "06-spread-second-primaries": "Recall the pattern of spread (most likely areas for metastasis) and the most likely locations for a second primary tumor to occur.",
    "07-early-stage-treatment": "Describe the treatment and appropriate follow-up care of early (stage I or II) head and neck cancer.",
    "08-advanced-stage-treatment": "Discuss the treatment and appropriate follow-up of advanced stage (stage III/IV) head and neck cancer.",
    "09-post-treatment-surveillance": "Review the follow-up of a patient after treatment of head and neck cancer and recall when they are most likely to develop recurrence or a second primary head and neck cancer."
  };

  function O(id, title, cards) {
    var test = [], apply = [];
    cards.forEach(function (card, cardIndex) {
      (card.tests || []).forEach(function (question) { test.push({ prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation, card: cardIndex }); });
      (card.application || []).forEach(function (question) { apply.push({ prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation, card: cardIndex }); });
    });
    return { id: id, title: title, description: objectiveStatements[id] || "", cards: cards, test: test, apply: apply };
  }

  window.HEENT_MALIGNANCY_OBJECTIVES = [
    O("01-epidemiology-risk", "1. Epidemiology and Risk Factors", [
      K("Sites and dominant histology", `<p>Head and neck cancers in this lecture include primary tumors of five regions: the <strong>oral cavity</strong>; <strong>pharynx</strong> (naso-, oro-, and hypopharynx); <strong>larynx</strong>; <strong>nasal cavity and paranasal sinuses</strong>; and <strong>major or minor salivary glands</strong>.</p><p>Despite the many tissues in the upper aerodigestive tract, about <strong>90% are squamous cell cancers</strong>. Traditionally they were seen most often in men in their 60s and older, but HPV has increased disease in women and younger patients.</p>`,
      ["What is the histology of about 90% of head and neck cancers?", "Squamous cell carcinoma", ["Adenocarcinoma", "Sarcoma", "Lymphoma"], "The lecture identifies squamous cell origin as the dominant histology."],
      ["A tumor arises in the oropharynx. Is it within the lecture's five head and neck cancer regions?", "Yes; the oropharynx is part of the pharynx", ["No; only the oral cavity is included", "No; pharyngeal tumors are thyroid tumors", "Only if it began in a salivary gland"], "The pharynx includes the nasopharynx, oropharynx, and hypopharynx."], true),

      K("Major risks and viral associations", `${T(["Factor", "Course emphasis"], [["Tobacco", "Any form; most important risk factor"], ["Alcohol", "Major risk; synergistic with tobacco"], ["HPV", "Rising oropharyngeal cancer, often in younger patients; generally better prognosis"], ["EBV", "Associated with nasopharyngeal cancer"], ["Other", "Betel nut, prior head radiation, vitamin deficiency, periodontal disease, occupational exposures; possibly marijuana"]])}<p>HPV-related cancers may involve lymph nodes yet still have a better overall prognosis than tobacco-driven oropharyngeal cancers.</p>`,
      ["Which exposure does the PowerPoint identify as the most important head and neck cancer risk factor?", "Tobacco use in any form", ["Prior head radiation", "Periodontal disease", "Vitamin deficiency"], "Tobacco is the slide's most important listed risk factor."],
      ["A younger adult has an oropharyngeal squamous cell cancer with nodal disease. Which association best fits the course material?", "HPV-associated disease", ["EBV-associated salivary cancer", "Betel-nut-associated thyroid cancer", "Radiation-induced esophageal cancer"], "HPV has shifted oropharyngeal cancer toward younger patients and can present with nodes."], true)
    ]),

    O("02-field-carcinogenesis", "2. Field Carcinogenesis", [
      K("One exposed mucosal field", `<p><strong>Field carcinogenesis</strong> means that the upper aerodigestive mucosa has been broadly exposed to the same carcinogens. Multiple cells across that field may accumulate different genetic changes, so removing one lesion does not remove the risk from the rest of the field.</p><p>Premalignant erythroplakia or leukoplakia may precede cancer, and removing a lesion can interrupt its progression. The remaining field, however, can later produce a <strong>genetically distinct new primary cancer</strong>.</p>`,
      ["What is the central idea of field carcinogenesis?", "A broad carcinogen-exposed mucosal field can produce multiple distinct tumors", ["Every second tumor is a metastasis", "Only lymph nodes acquire mutations", "Radiation is the sole cause of later tumors"], "Shared exposure across the mucosal field explains separate primary tumors."],
      ["A leukoplakic lesion is removed with clear margins. Why does long-term cancer surveillance remain important?", "Other exposed mucosa can develop a genetically distinct primary cancer", ["Clear margins prove nodal metastasis", "The removed lesion must recur within six months", "Surgery creates immediate distant metastases"], "Treatment removes the lesion, not the carcinogenic history of the surrounding field."], true),

      K("Clinical consequence", `<p>Field carcinogenesis changes follow-up thinking: a later lesion is not automatically recurrence or spread. It may be a <strong>second primary</strong>. The common second-primary sites in the supplied material are another head and neck site, the lung, and the esophagus.</p><p>After treatment of an early tobacco- or alcohol-related cancer, the long-term threat from a second primary can exceed the threat from recurrence of the original tumor.</p>`,
      ["Which long-term event does field carcinogenesis especially increase?", "A second primary malignancy", ["Only local infection", "Only treatment-induced sarcoma", "Only cervical-node metastasis"], "The exposed field can generate a new, distinct primary tumor."],
      ["Years after treatment, a patient develops a new esophageal cancer. Which course concept helps explain it?", "Field carcinogenesis", ["Local invasion", "A positive surgical margin", "Brachytherapy"], "The esophagus is among the common second-primary locations after shared carcinogen exposure."], false)
    ]),

    O("03-tumor-classification", "3. Metastatic, Synchronous, and Metachronous Tumors", [
      K("Classify by relationship and time", `${T(["Term", "Definition"], [["Metastatic disease", "The original cancer has spread to a noncontiguous site"], ["Synchronous primary", "A separate primary present at diagnosis or found within 6 months"], ["Metachronous primary", "A separate primary found 6 months or later"]])}<p>A second primary is genetically distinct from the first tumor; metastasis represents spread of the original malignancy.</p>`,
      ["A separate primary cancer is diagnosed four months after the index head and neck cancer. How is it classified?", "Synchronous primary", ["Metachronous primary", "Distant metastasis by definition", "Local invasion"], "Synchronous means present at diagnosis or within six months."],
      ["A genetically distinct lung primary is found two years after treatment. Which term applies?", "Metachronous primary", ["Synchronous primary", "Regional disease", "Local invasion"], "A distinct primary found at least six months later is metachronous."], true),

      K("Do not confuse spread with a new primary", `<p>Classification depends on whether the lesion is <strong>spread of the original cancer</strong> or a <strong>new primary tumor</strong>. Timing separates synchronous from metachronous only after the lesion has been identified as a separate primary.</p><p>Regional disease refers to spread into nearby draining lymph nodes; distant metastatic sites emphasized in the lecture are lung, liver, and bone.</p>`,
      ["Which feature distinguishes metastasis from a second primary?", "Metastasis is spread of the original cancer", ["Metastasis is always found after six months", "A second primary must be in a lymph node", "A second primary is always treatment induced"], "The biologic relationship, not timing alone, separates metastasis from a new primary."],
      ["A patient's original head and neck squamous cell cancer is later found in bone. How should this lesion be classified?", "Distant metastatic disease", ["Synchronous primary", "Metachronous primary", "Premalignant field change"], "Bone is a common distant metastatic site for spread of the original disease."], true)
    ]),

    O("04-presentation-evaluation", "4. Presentation and ENT Evaluation", [
      K("Persistent symptom clues", `<p>Presentation depends on tumor site. Concerning symptoms that persist for more than about <strong>2 weeks without improvement</strong> include sore throat or otalgia, a nonhealing ulcer, hoarseness or voice change, dry cough, dysphagia, neck mass, difficulty handling secretions, and frequent choking.</p><p>Site clues include a nonhealing oral lesion, unexplained neck lymphadenopathy, unilateral nasal or ear findings, persistent hoarseness, altered speech or tongue mobility, and progressive swallowing complaints.</p>`,
      ["Which time pattern makes a head and neck complaint more concerning in the PowerPoint?", "Persistence beyond about 2 weeks without improvement", ["Resolution within one day", "Symptoms only after exercise", "A single brief episode"], "The slide flags common symptoms that persist more than two weeks."],
      ["A smoker has a nonhealing buccal ulcer and a submandibular node. What is the appropriate concern?", "Possible head and neck cancer requiring directed evaluation", ["Reassure without follow-up", "Continue empiric antibiotics indefinitely", "Classify it as metastatic without tissue"], "A nonhealing lesion plus a neck node warrants malignancy evaluation and tissue diagnosis."], true),

      K("Examination and diagnostic sequence", `<p>Perform a thorough physical exam directed at all five anatomic regions, including inspection of visible mucosa and palpation of the floor of mouth, tongue, and neck. An otolaryngologist uses <strong>endoscopic visualization</strong> for deeper tissues.</p><p>The lecture's sequence is <strong>history and physical → imaging → biopsy</strong>. Imaging maps local invasion, nodes, distant metastases, and possible second primaries, but malignancy is confirmed only by tissue. Common tissue methods include FNA, open biopsy, and endoscopic brushings.</p>`,
      ["What ultimately confirms a head and neck cancer diagnosis?", "Tissue diagnosis", ["Symptoms alone", "CT enhancement alone", "PET avidity alone"], "Exam and imaging may suggest cancer, but confirmation requires tissue."],
      ["A persistent deep pharyngeal complaint cannot be fully evaluated in the office view. What is the otolaryngologist's key next capability?", "Endoscopic visualization with biopsy of suspicious tissue", ["Skip examination and begin chemotherapy", "Diagnose from a CBC", "Use plain radiography as definitive proof"], "Deep regions require endoscopic visualization, and suspicious lesions require tissue confirmation."], true),

      K("What staging evaluation is trying to answer", `<p>The workup determines whether disease is confined to the primary site, has invaded adjacent structures, has reached regional lymph nodes, has spread distantly, or is accompanied by a second primary. TNM staging then records tumor extent, nodal disease, and distant metastasis.</p>`,
      ["Which three domains make up TNM staging?", "Tumor, nodes, and metastasis", ["Treatment, nutrition, and mucositis", "Tobacco, neck, and mouth", "Timing, necrosis, and margins"], "T describes the primary tumor, N the lymph nodes, and M distant metastasis."],
      ["Imaging shows an oral tumor invading adjacent bone and a cervical node. Which staging domains are being defined?", "T and N", ["M only", "N and M only", "A synchronous primary only"], "Local invasion informs T; cervical nodal involvement informs N."], false)
    ]),

    O("05-imaging-modalities", "5. CT, MRI, and PET", [
      K("CT: fast first-line anatomy", `<p><strong>CT with contrast</strong> is the lecture's best initial study when tumor or infection is suspected. It is relatively inexpensive, fast, thorough, open enough for many claustrophobic patients, usable in ventilated patients, and best for bone.</p><p>CT uses ionizing radiation. Iodinated IV contrast improves vascular and tissue distinction but adds allergy and acute kidney injury risk.</p>`,
      ["What is the lecture's preferred initial imaging study when a head and neck tumor is suspected?", "CT with IV contrast", ["Noncontrast MRI only", "PET without anatomic imaging", "Plain radiography"], "The PowerPoint specifically emphasizes CT with contrast as the best initial test."],
      ["A patient with suspected tumor needs a rapid study that evaluates bone well and can be performed on a ventilator. Which modality fits best?", "CT with IV contrast", ["MRI with gadolinium", "PET alone", "No imaging before biopsy"], "Speed, ventilator compatibility, and bone detail favor CT."], true),

      K("MRI: soft-tissue definition", `<p><strong>MRI with and without gadolinium</strong> provides the best anatomic and soft-tissue detail without ionizing radiation. Its main role is second-line definition of anatomy and depth of soft-tissue invasion, especially when surgery is planned.</p><p>Disadvantages are expense, a scan that can take an hour or more, difficulty for claustrophobic patients or need for sedation, and inability to use the contrast study when GFR is below 30.</p>`,
      ["Which modality best defines soft-tissue anatomy and depth of invasion?", "MRI", ["CT", "PET", "Plain radiography"], "MRI is the lecture's best study for anatomy and soft tissue."],
      ["CT suggests a tumor, and the surgeon needs better definition of deep soft-tissue invasion. What is the next imaging choice?", "MRI with and without contrast when eligible", ["Repeat plain radiographs", "PET as the only anatomic study", "No additional study can define soft tissue"], "MRI is second line for surgical anatomy and soft-tissue depth."], true),

      K("PET: metabolism, staging, and recurrence", `<p><strong>PET</strong> uses radiolabeled glucose to reveal small hypermetabolic areas across a wide field. It helps with initial staging and is the lecture's study of choice to detect early recurrence after treatment.</p><p>Its disadvantages are high cost, some radiation, outpatient logistics, and limited specificity: inflammation and other active tissue can also “light up.” PET is often combined with CT to improve localization.</p>`,
      ["Which imaging modality exploits metabolic differences using radiolabeled glucose?", "PET", ["MRI", "CT", "Ultrasound"], "PET displays areas of increased tracer metabolism."],
      ["A treated patient is being evaluated for early recurrence, and whole-body hypermetabolic foci must be surveyed. Which modality is emphasized?", "PET, often combined with CT", ["MRI alone because metabolism is irrelevant", "Noncontrast head CT only", "Plain films"], "PET is emphasized for early recurrence and is commonly paired with CT for localization."], true)
    ]),

    O("06-spread-second-primaries", "6. Spread and Second Primaries", [
      K("Distant metastatic pattern", `<p>The course ranks the most common distant metastatic sites as <strong>lung → liver → bone</strong>. Distant disease is coded by the M component of TNM; cervical lymph-node involvement is regional disease and contributes to N staging.</p>`,
      ["What is the most common distant metastatic site for head and neck cancer in the lecture?", "Lung", ["Liver", "Bone", "Esophagus"], "The ordered list is lung, then liver, then bone."],
      ["A patient with advanced nodal disease develops lesions in lung, liver, and bone. How should these be interpreted?", "They match the lecture's typical distant metastatic pattern", ["They prove three synchronous primaries", "They are only regional disease", "They exclude head and neck cancer"], "These are the three ranked distant metastatic sites."], true),

      K("Second-primary pattern", `<p>The most common second-primary locations are <strong>another head and neck cancer → lung cancer → esophageal cancer</strong>. This is a separate pattern from metastasis and reflects field carcinogenesis from shared mucosal carcinogen exposure.</p>`,
      ["Which site is most common for a second primary after head and neck cancer?", "Another head and neck site", ["Bone", "Liver", "Kidney"], "Another head and neck cancer leads the lecture's second-primary list."],
      ["A long-term survivor develops a genetically distinct esophageal tumor. Does its location fit the expected second-primary pattern?", "Yes; esophagus is one of the top three sites", ["No; esophagus is only a metastatic site", "No; second primaries occur only in bone", "Only if it appeared within six months"], "Head and neck, lung, and esophagus are the three common second-primary locations."], true)
    ]),

    O("07-early-stage-treatment", "7. Early-Stage Treatment", [
      K("Curative local therapy", `<p>Stage I–II head and neck cancer is generally treated with curative intent using either <strong>wide local excision</strong> or <strong>definitive radiation therapy</strong>. Surgery and radiation achieve similar local control and survival at many sites; early oral-cavity cancer is best treated surgically in the supplied slides.</p><p>Choice depends on site, surgical accessibility, function, and morbidity and is typically made by a multidisciplinary tumor board.</p>`,
      ["What are the two principal definitive options for stage I–II disease?", "Surgery or definitive radiation therapy", ["Chemotherapy alone or observation", "PET or MRI", "Antibiotics or steroids"], "Early disease is usually managed with one curative local modality."],
      ["A small, accessible stage I oral-cavity cancer is being discussed. Which modality does the lecture favor?", "Surgical excision", ["Chemotherapy alone", "Observation only", "PET-directed therapy"], "The PowerPoint specifically identifies oral-cavity cancer as best treated surgically."], true),

      K("When surgery needs added therapy", `<p>After initial surgery, pathologic findings may reveal greater risk. Add <strong>adjuvant radiation with or without concurrent chemotherapy</strong> when disease is more locoregionally advanced than expected, margins are close or positive, or perineural or lymphovascular invasion is present.</p>`,
      ["Which postoperative finding can trigger adjuvant therapy after early-stage surgery?", "Close or positive margins", ["Clear margins with no risk features", "Normal swallowing", "A negative PET before treatment"], "Close or positive margins are among the slide's explicit indications."],
      ["Resection reveals perineural invasion despite an apparently early lesion. What treatment change should be considered?", "Adjuvant radiation, with or without concurrent chemotherapy", ["No follow-up is needed", "Antibiotics replace cancer treatment", "Classify the tumor as metachronous"], "Perineural invasion is a risk feature supporting added postoperative therapy."], true),

      K("Outcomes and follow-up", `<p>The PowerPoint reports five-year survival of about <strong>70–90%</strong> for stage I–II disease. Definitive treatment is followed by surveillance for at least five years, often lifelong with ENT, because both recurrence and second primaries remain possible.</p>`,
      ["What five-year survival range does the PowerPoint give for early-stage disease?", "70–90%", ["5–10%", "20–30%", "Exactly 100%"], "The final slide reports 70–90% for stage I or II disease."],
      ["An early-stage cancer has been completely treated. What follow-up principle still applies?", "Surveillance for at least 5 years, often lifelong with ENT", ["Discharge permanently after one normal visit", "Follow only if symptoms recur", "PET every day"], "Curative local treatment does not eliminate recurrence or second-primary risk."], false)
    ]),

    O("08-advanced-stage-treatment", "8. Advanced-Stage Treatment", [
      K("Combined-modality care", `<p>Stage III–IV locoregional disease is generally treated with <strong>radiation and chemotherapy, with or without surgery</strong>. Unlike early disease, advanced cancer usually cannot be managed successfully with surgery or radiation alone.</p><p>Concurrent chemoradiation may be used for unresectable disease, organ preservation, or postoperative high-risk features. Sixty to seventy percent of patients with head and neck SCC present at stage III or IV in the PowerPoint.</p>`,
      ["What is the general treatment approach for stage III–IV locoregional disease?", "Chemotherapy plus radiation, with or without surgery", ["Observation alone", "Surgery alone in every patient", "Radiation alone in every patient"], "Advanced disease requires combined-modality planning."],
      ["A bulky unresectable laryngeal cancer requires an organ-preserving approach. Which strategy fits the supplied material?", "Concurrent chemoradiation", ["Wide local excision alone", "Antibiotics followed by observation", "PET alone as treatment"], "Concurrent chemoradiation is used for unresectable disease and organ preservation."], true),

      K("Neck management and postoperative risk", `<p>Cervical nodes are often evaluated and treated because nodal disease raises recurrence risk. Nodal risk is estimated from tumor site, size, and invasion; a <strong>neck dissection</strong> may accompany primary-tumor resection.</p><p>Postoperative chemoradiation is supported when high-risk pathology includes positive margins, extracapsular spread, or multiple involved nodes.</p>`,
      ["Why are cervical lymph nodes often treated in head and neck SCC?", "They carry a high risk of disease involvement and recurrence", ["They are always second primary tumors", "They determine the M category only", "They cannot be imaged"], "Regional nodal disease is central to risk and treatment planning."],
      ["Resection of advanced disease shows positive margins and multiple involved nodes. What additional approach is supported?", "Postoperative concurrent chemoradiation", ["No additional treatment", "PET as definitive therapy", "Topical treatment only"], "Positive margins and multiple nodes are high-risk postoperative findings."], true),

      K("Treatment morbidity and supportive needs", `<p>Treatment can cause major functional morbidity. Acute radiation effects include mucositis and dysphagia; long-term effects include xerostomia, loss of taste, dysphagia, decreased tongue mobility, neck fibrosis, dental injury or osteoradionecrosis, and second malignancy. Chemotherapy can cause myelosuppression, mucositis, nausea and vomiting, and nephrotoxicity.</p><p>Nutrition, hydration, dentition, swallowing, and thyroid function require attention; some patients need feeding-tube support.</p>`,
      ["Which pair is emphasized as an acute radiation toxicity?", "Mucositis and dysphagia", ["Hyperopia and tinnitus", "Epistaxis and cataract", "Otitis externa and vertigo"], "The chapter highlights mucositis and dysphagia as acute radiation effects."],
      ["During chemoradiation, a patient develops painful mucositis, poor intake, and dehydration. What care issue is most immediate?", "Nutrition and hydration support", ["Stop all surveillance permanently", "Classify the toxicity as metastasis", "Treat with neck dissection"], "Mucosal toxicity can cause malnutrition and dehydration and may require feeding support."], false)
    ]),

    O("09-post-treatment-surveillance", "9. Post-Treatment Surveillance", [
      K("Two clocks after treatment", `${T(["Risk", "Timing emphasized in the PowerPoint"], [["Recurrence", "80–90% occur in the first 2–4 years"], ["Second primary", "Greatest risk is beyond 3 years"]])}<p>Surveillance continues for at least <strong>5 years</strong>, and many patients require lifelong ENT follow-up. The early years prioritize recurrence detection; later follow-up remains important because second-primary risk persists.</p>`,
      ["When do 80–90% of recurrences occur according to the PowerPoint?", "Within the first 2–4 years", ["Only after 10 years", "Exclusively in the first week", "Never after definitive therapy"], "The slide places most recurrences in the first two to four years."],
      ["A patient is disease-free four years after treatment. Why should surveillance continue?", "Second-primary risk is greatest beyond 3 years", ["All recurrence risk begins only after year 5", "The original biopsy is no longer valid", "CT contrast prevents new cancers"], "The later surveillance focus includes second primaries."], true),

      K("What follow-up watches for", `<p>Follow-up looks for symptoms or examination findings of local or regional recurrence, distant disease, and a new primary in the head and neck, lung, or esophagus. PET is particularly useful for early recurrence detection after treatment, while directed examination and endoscopy remain important.</p><p>Follow-up also monitors treatment effects affecting nutrition, swallowing, dentition, salivary function, neck mobility, and thyroid function.</p>`,
      ["Which modality does the lecture call the study of choice for detecting early recurrence?", "PET", ["Plain radiography", "MRI without clinical examination", "Dental films"], "The PET slide specifically assigns this post-treatment role."],
      ["A survivor reports new persistent hoarseness during follow-up. What is the appropriate principle?", "Prompt directed ENT evaluation for recurrence or a new primary", ["Wait until the five-year visit", "Assume it is radiation toxicity without examination", "Treat indefinitely with antibiotics"], "New persistent symptoms require renewed site-directed evaluation."], true),

      K("Recurrence care and risk reduction", `<p>For most recurrent disease, treatment is palliative or supportive; select patients may be offered surgery or repeat radiation. Tobacco and alcohol cessation remain important because continued carcinogen exposure sustains field risk. HPV vaccination may prevent HPV-related disease, although population effects take time because carcinogenesis has a long latency.</p>`,
      ["What is the general treatment intent for most recurrent head and neck cancers in the PowerPoint?", "Palliative and supportive", ["Always curative surgery", "Observation without symptom care", "Antibiotics alone"], "The slide notes that most recurrence is managed palliatively, with selected exceptions."],
      ["A treated patient continues smoking and drinking heavily. Which counseling most directly addresses ongoing field risk?", "Tobacco and alcohol cessation", ["Avoid all exercise", "Stop ENT follow-up", "Replace surveillance with supplements"], "Reducing the major carcinogen exposures addresses preventable ongoing risk."], false)
    ])
  ];
}());
