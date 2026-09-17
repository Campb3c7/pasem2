/* Dental Diseases content derived only from "Dental Diseases 2026 - Student.pptx" and its matching objectives. */
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
  function M(label, text) {
    return '<div class="box-mnemonic"><span class="lbl">' + label + '</span><strong>' + text + '</strong></div>';
  }

  var objectiveStatements = {
    "01-anatomy": "Recall the anatomy and physiology of the teeth and periodontium.",
    "02-prevention": "Summarize the goals for early preventative dental health.",
    "03-white-spot": "Describe the white spot lesion.",
    "04-sucking": "Explain nonnutritive sucking and its impact on dental health.",
    "05-teething": "Recognize associated symptoms and indicated treatment for teething.",
    "06-fluoride": "Recall the indications for fluoride treatment in children.",
    "07-tobacco-alcohol": "Recognize the impact that tobacco and alcohol have on dental health.",
    "08-meth-scurvy-bulimia": "List the characteristic physical exam dental findings associated with methamphetamine use, scurvy, and bulimia.",
    "09-gingiva": "Characterize the causes and treatment of gingival recession and gingival hyperplasia.",
    "10-caries-pulpitis": "Describe the cause, signs and symptoms, and treatment options for dental caries and pulpitis.",
    "11-periodontal": "Recall the progression, clinical presentation, and treatment of periodontal disease.",
    "12-edentulism": "Determine the primary cause of edentulism.",
    "13-systemic": "Recall which systemic illnesses are associated with periodontal disease.",
    "14-abscess": "Describe the clinical presentation and primary treatment for periodontal abscess.",
    "15-anug": "Recognize the symptoms, risk factors, diagnostic features, and treatment for acute necrotizing ulcerative gingivitis (ANUG).",
    "16-postop": "Determine the management for postoperative pain, alveolar osteitis, and postoperative bleeding.",
    "17-ellis-types": "Compare the types of Ellis fractures.",
    "18-ellis-management": "Describe the appropriate management of Ellis II, III, and IV fractures.",
    "19-luxations": "Describe the six types of tooth luxations and their corresponding treatment options.",
    "20-pediatric-trauma": "Differentiate pediatric dental injuries from adult dental injuries.",
    "21-ie-indications": "Recognize features of the high-risk patients and applicable dental and oral procedures that require dental antibiotic prophylaxis for infective endocarditis.",
    "22-ie-antibiotics": "Recall antibiotics and respective dosing used for dental prophylaxis for infective endocarditis, including antibiotics utilized in case of penicillin allergy."
  };

  function O(id, title, cards) {
    var test = [], apply = [];
    cards.forEach(function (card, cardIndex) {
      (card.tests || []).forEach(function (question) {
        test.push({ prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation, card: cardIndex });
      });
      (card.application || []).forEach(function (question) {
        apply.push({ prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation, card: cardIndex });
      });
    });
    return { id: id, title: title, description: objectiveStatements[id] || "", cards: cards, test: test, apply: apply };
  }

  window.DENTAL_DISEASE_OBJECTIVES = [
    O("01-anatomy", "1. Tooth and Periodontium Anatomy", [
      K("Tooth composition", T(["Structure", "Role"], [["Enamel", "Outer shell and hardest substance in the body"], ["Crown", "Visible portion above the gingiva"], ["Dentin", "Calcium-and-phosphate layer that absorbs shock during biting and chewing"], ["Pulp", "Connective tissue, vessels, and nerves that nourish the tooth and provide sensation"]]),
      ["Which tooth layer provides sensation and vascular supply?", "Pulp", ["Enamel", "Crown", "Cementum"], "The pulp contains nerve fibers and blood vessels."],
      ["Decay reaches the connective tissue, vessels, and nerves inside a tooth. Which structure is involved?", "Pulp", ["Enamel", "Gingiva", "Alveolar bone"], "Those tissues define the pulp."], true),
      K("Periodontium and mastication", `${T(["Periodontal structure", "Function"], [["Gingiva", "Gum tissue around the teeth"], ["Alveolar bone", "Bony socket support"], ["Cementum", "Part of the tooth-supporting attachment"], ["Periodontal ligament", "Attachment structure between tooth and supporting tissue"]])}<p>Incisors bite and cut, canines tear and pierce, and premolars and molars grind and crush. Mastication begins digestion and contributes to nutrition.</p>`,
      ["Which structures make up the periodontium?", "Gingiva, alveolar bone, cementum, and periodontal ligament", ["Enamel, dentin, pulp, and crown", "Lips, tongue, tonsils, and palate", "Maxilla, mandible, hyoid, and larynx"], "The periodontium is the tooth-supporting attachment apparatus."],
      ["Which teeth primarily grind and crush food?", "Premolars and molars", ["Incisors only", "Canines only", "Deciduous teeth only"], "The lecture assigns grinding and crushing to premolars and molars."], true)
    ]),

    O("02-prevention", "2. Early Preventive Dental Health", [
      K("Screening and first dental visit", `<p>Primary-care dental screening begins when the first teeth erupt. Examine teeth and oral mucosa, look for plaque, calculus, white spots, and cavities, and identify preventive counseling needs.</p><p>Refer a child to a pediatric dentist by the first birthday or within six months after the first tooth.</p>`,
      ["When should primary-care dental screening begin?", "When the first teeth erupt", ["At age five", "After the first cavity", "Only after permanent teeth appear"], "The lecture starts screening with eruption of the first teeth."],
      ["A child’s first tooth erupts at 8 months. By when should the dental visit occur?", "By the first birthday or within six months of eruption", ["At age six", "Only if pain develops", "After all primary teeth erupt"], "The referral goal uses whichever early milestone applies."], true),
      K("Risk assessment and anticipatory guidance", `<p>Early risk factors include lower socioeconomic setting, lower maternal education, sugary drinks or candy, high salivary <em>S. mutans</em>, visible upper-front-tooth plaque, breastfeeding beyond 18 months or bedtime bottles, low fluoride exposure, passive smoke, and special health-care needs.</p><p>Counsel on diet, nonnutritive sucking, teething, fluoride, bottles or cups, and tooth cleaning. Limit frequent sugar and nighttime juice or soda; promote brushing, flossing, dental cleanings, and healthy snacks.</p>`,
      ["Which finding identifies an infant at higher dental-disease risk?", "Visible plaque on the upper front teeth", ["First tooth eruption", "Use of a soft toothbrush", "Eating vegetables"], "Visible plaque appears in the lecture's pediatric risk list."],
      ["A toddler sleeps with a bottle of juice and snacks frequently on sugar. Which counseling is most appropriate?", "Stop nighttime sugary drinks and reduce frequent refined-carbohydrate exposure", ["Delay brushing until permanent teeth", "Replace water with soda", "Avoid dental screening"], "Frequent acid exposure and bedtime bottles increase caries risk."], true)
    ]),

    O("03-white-spot", "3. White Spot Lesions", [
      K("Early reversible demineralization", `<p>Plaque bacteria gradually demineralize enamel and dentin. Early subsurface mineral loss creates a <strong>chalky white spot</strong>. This stage remains reversible, but without intervention it progresses to a cavity.</p>`,
      ["What does a white spot lesion represent?", "Early reversible enamel demineralization", ["Pulpal death", "A root fracture", "Gingival hyperplasia"], "The chalky white appearance reflects subsurface mineral loss."],
      ["A chalky white area appears before enamel breakdown. What is the significance?", "It can be reversed before becoming a cavity", ["It confirms irreversible pulpitis", "It requires tooth extraction", "It is an Ellis III fracture"], "Early recognition creates an opportunity to arrest decay."], true),
      K("Intervention", `<p>Reduce plaque through regular brushing and flossing, limit sugary food and drink exposure, and use fluoride. Topical fluoride may arrest early decay by slowing demineralization and strengthening enamel against acid exposure.</p>`,
      ["Which treatment can arrest an early white spot lesion?", "Topical fluoride with plaque control", ["Root canal in every case", "Tooth extraction", "Antibiotics alone"], "The lecture identifies fluoride and hygiene as early interventions."],
      ["A white spot lesion is found before cavitation. Which plan best follows the deck?", "Improve brushing and diet and apply fluoride when indicated", ["Wait for pulp involvement", "Prescribe opioids", "Replant the tooth"], "Preventive treatment can reverse early mineral loss."], true)
    ]),

    O("04-sucking", "4. Nonnutritive Sucking", [
      K("Expected behavior and malocclusion risk", `<p>Pacifier or digit sucking is an expected self-soothing behavior in young children. It usually decreases with age and is replaced by other coping mechanisms by about age five.</p><p>If the behavior continues into permanent-tooth eruption, it can produce malocclusion.</p>`,
      ["When does nonnutritive sucking become a dental alignment concern?", "When it persists into permanent-tooth eruption", ["During infancy alone", "Only after tooth avulsion", "Only with fluoride use"], "Persistence into the permanent dentition can alter alignment."],
      ["A preschool child uses a pacifier for self-soothing. What counseling matches the lecture?", "The behavior commonly decreases by age five, but persistence into permanent dentition risks malocclusion", ["It always requires surgery", "It causes immediate pulpitis", "It prevents all caries"], "The risk depends on persistence rather than early normal use alone."], true)
    ]),

    O("05-teething", "5. Teething", [
      K("Symptoms and safe management", `<p>Normal teething symptoms include irritability, chewing on objects, and excessive drooling. Parents may report low-grade fever, diarrhea, or other systemic symptoms.</p><p>Use a chilled teething ring for symptom relief. Topical gels have limited support. Avoid over-the-counter benzocaine in children younger than two because of methemoglobinemia risk.</p>`,
      ["Which symptom is typical during teething?", "Excessive drooling", ["Persistent pulpal pain", "Tooth avulsion", "Gingival necrosis"], "Drooling, chewing, and irritability are the normal symptom cluster."],
      ["What should be recommended for a teething 10-month-old?", "A chilled teething ring", ["Over-the-counter benzocaine", "Routine antibiotics", "Aspirin on the gums"], "The lecture recommends chilled rings and avoids benzocaine under age two."], true)
    ]),

    O("06-fluoride", "6. Fluoride in Children", [
      K("Toothpaste and supplementation", `<p>Fluoride hardens enamel, improves resistance to acid, protects against caries, and reduces sensitivity.</p><ul><li>Begin fluoride toothpaste when the first tooth erupts, regardless of water fluoridation.</li><li>Use a small soft brush or cloth at least daily from 6–24 months, then twice daily.</li><li>For children without adequate fluoride in drinking water, begin supplementation at 6 months.</li><li>The lecture takeaway is oral fluoride for children 6 months to 5 years who drink nonfluoridated water.</li></ul>`,
      ["When should fluoride toothpaste begin?", "When the first tooth erupts", ["At age five", "Only after the first cavity", "After permanent teeth erupt"], "AAP guidance in the deck begins toothpaste with the first tooth."],
      ["A 1-year-old drinks nonfluoridated water. What does the lecture recommend?", "Oral fluoride supplementation", ["No fluoride until age eight", "Antibiotic prophylaxis", "Benzocaine gel"], "Supplementation begins at 6 months when water fluoride is inadequate."], true),
      K("Delivery routes and excess exposure", `${T(["Route", "Examples"], [["Community", "Water fluoridation"], ["Self-applied", "Toothpaste, rinses, drops, or tablets"], ["Professional", "Fluoride varnish"]])}<p>Excessive fluoride exposure before age eight can cause cosmetic fluorosis or mottled staining.</p>`,
      ["What can excessive fluoride exposure before age eight cause?", "Dental fluorosis", ["ANUG", "Dry socket", "Ellis IV fracture"], "The cosmetic staining is called fluorosis."],
      ["A dentist applies fluoride directly to a child’s teeth. Which delivery route is this?", "Professional fluoride varnish", ["Community water fluoridation", "Dietary supplementation", "Endocarditis prophylaxis"], "Varnish is the professionally applied route."], false)
    ]),

    O("07-tobacco-alcohol", "7. Tobacco and Alcohol", [
      K("Tobacco effects", `<p>Smoking and tobacco contribute to gum disease, oral cancer, impaired healing, stained teeth and tongue, and a dulled sense of taste and smell.</p>`,
      ["Which oral-health consequence is linked to tobacco?", "Impaired wound healing", ["Improved taste", "Reduced gum disease", "Stronger enamel"], "The deck lists impaired healing among tobacco effects."],
      ["A smoker is preparing for a dental procedure. Which risk should be emphasized?", "Gum disease and impaired healing", ["Protection from oral cancer", "Faster clot formation", "Reduced staining"], "Smoking worsens periodontal health and recovery."], true),
      K("Alcohol effects", `<p>Alcohol abuse is associated with poor oral hygiene and self-neglect, oral cancer from repeated soft-tissue exposure, prolonged bleeding when liver disease is present, impaired healing, and greater susceptibility to infection.</p>`,
      ["Why may heavy alcohol use increase post-procedure bleeding?", "Associated liver disease may prolong bleeding", ["It strengthens clot formation", "It increases enamel thickness", "It prevents infection"], "The lecture directs clinicians to consider liver disease."],
      ["A patient with heavy alcohol use has poor healing and prolonged oral bleeding. Which lecture pattern fits?", "Alcohol-related dental risk", ["Normal teething", "Fluoride supplementation", "White spot reversal"], "Both impaired healing and prolonged bleeding appear in the alcohol section."], true)
    ]),

    O("08-meth-scurvy-bulimia", "8. Methamphetamine, Scurvy, and Bulimia", [
      K("Methamphetamine and scurvy", T(["Condition", "Characteristic findings"], [["Methamphetamine use", "Meth mouth with decay on buccal tooth surfaces and between front teeth, worsened by dry mouth; rapid decay and malnourishment"], ["Scurvy", "Poor wound healing, easy bruising, and bleeding gums; risk with low income, homelessness, eating disorders, heavy alcohol use, or malabsorption"]]) + '<p>Scurvy treatment is vitamin C supplementation.</p>',
      ["Where is meth-mouth decay highlighted in the lecture?", "Buccal surfaces and between the front teeth", ["Only the roots", "Only unerupted teeth", "Only the tongue"], "That distribution is the characteristic methamphetamine finding."],
      ["Bleeding gums, bruising, and poor healing occur in a nutritionally vulnerable patient. What treatment fits?", "Vitamin C supplementation", ["Fluoride varnish only", "Root canal", "Tooth replantation"], "The pattern supports scurvy from vitamin C deficiency."], true),
      K("Bulimia", `<p>Gastric acid from recurrent vomiting softens and erodes enamel, particularly on the <strong>lingual surfaces of the maxillary anterior teeth</strong>. Findings may include hot or cold sensitivity, caries, gum disease, and discoloration.</p>`,
      ["Which tooth surfaces are classically affected by bulimia in the deck?", "Lingual surfaces of maxillary anterior teeth", ["Buccal surfaces of molars only", "Roots of mandibular teeth only", "Interdental papillae only"], "Vomitus contacts the inner surfaces of the upper front teeth."],
      ["A patient has enamel erosion behind the upper front teeth with temperature sensitivity. Which exposure should be considered?", "Recurrent vomiting from bulimia", ["Nonnutritive sucking", "Fluoridated water", "Normal mastication"], "The location and acid erosion match the bulimia pattern."], true)
    ]),

    O("09-gingiva", "9. Gingival Recession and Hyperplasia", [
      K("Gingival recession", `<p>Recession occurs when gingival attachment fibers detach from the tooth and bone, exposing the root. Causes include bacterial periodontal disease, chronic heavy bite stress, unfavorable tooth position, and aggressive brushing.</p><p>Treat to reduce sensitivity, prevent root decay, and prevent progression.</p>`,
      ["What physical change defines gingival recession?", "Exposed tooth root after attachment fibers detach", ["Interdental gum overgrowth", "Pulpal necrosis", "A missing blood clot"], "Root exposure follows loss of the gingival attachment."],
      ["A patient aggressively brushes and develops exposed sensitive roots. Which condition fits?", "Gingival recession", ["Gingival hyperplasia", "ANUG", "Dry socket"], "Aggressive brushing is a cause of recession."], true),
      K("Gingival hyperplasia", `${T(["Cause", "Lecture examples"], [["Chronic gingivitis", "Inflammation"], ["Medication-induced", "Phenytoin, cyclosporine, and calcium-channel blockers"], ["Infiltrative", "Abnormal-cell invasion such as leukemia"], ["Hereditary", "Rare genetic condition"]])}<p>Hyperplasia begins as abnormal gum enlargement between the teeth. Treatment requires comprehensive oral hygiene and may require gingivectomy.</p>`,
      ["Which medications are associated with gingival hyperplasia?", "Phenytoin, cyclosporine, and calcium-channel blockers", ["Amoxicillin and fluoride", "Acetaminophen and NSAIDs", "Azithromycin and doxycycline"], "Those drug classes appear in the hyperplasia table."],
      ["Gum overgrowth begins between the teeth in a patient taking phenytoin. What management is listed?", "Comprehensive oral hygiene with possible gingivectomy", ["Root canal in every case", "Tooth replantation", "No treatment"], "Medication-associated hyperplasia is managed with hygiene and surgery when needed."], true)
    ]),

    O("10-caries-pulpitis", "10. Dental Caries and Pulpitis", [
      K("Caries cause and progression", `<p><em>Streptococcus mutans</em> and other plaque bacteria produce acidic metabolic byproducts that demineralize enamel where plaque accumulates.</p>${T(["Stage", "Finding"], [["1", "White spots and early calcium loss"], ["2", "Enamel breakdown"], ["3", "Dentin decay with hot or cold sensitivity"], ["4", "Pulp infection, pus, and toothache"], ["5", "Root abscess that may extend into jawbone"], ["6", "Tooth loss or extraction"]])}`,
      ["What organism is named as a cause of dental caries?", "Streptococcus mutans", ["HSV", "Candida only", "Group A Streptococcus only"], "The deck specifically names S. mutans."],
      ["Decay has entered dentin and the tooth is temperature sensitive. Which stage is this?", "Stage 3", ["Stage 1", "Stage 5", "Stage 6"], "Stage 3 involves dentin and the nerve response."], true),
      K("Caries evaluation and treatment", `<p>Surface decay may be visible, while deep pits and fissures need dental probing with an explorer. Softened decay may catch the instrument. X-rays show dark areas.</p><p>Topical fluoride may arrest early decay. More advanced disease may require a filling, crown, extraction, or root canal when the inner pulp is involved.</p>`,
      ["How can hidden caries appear on dental x-ray?", "As a dark area", ["As a white blood clot", "As gingival overgrowth", "As a mobile root segment"], "The deck describes radiographic decay as dark."],
      ["Decay has reached the inner pulp. Which treatment may be required?", "Root canal therapy", ["Fluoride toothpaste alone", "No treatment", "Pacifier cessation"], "Pulp involvement may require bacterial removal through root canal therapy."], true),
      K("Reversible and irreversible pulpitis", `<p>Pulpitis follows untreated caries or trauma. Pain duration after hot or cold exposure helps classify it.</p>${T(["Pattern", "Meaning"], [["Pain for only a few seconds", "Reversible pulpitis"], ["Pain for minutes to hours", "Irreversible pulpitis"], ["Spontaneous pain", "Pulpal death or necrosis"]])}<p>Irreversible pain persists after the trigger and may become continuous, more intense when lying down, or worse at night.</p>`,
      ["What pain pattern suggests irreversible pulpitis?", "Pain lasting minutes to hours after a hot or cold stimulus", ["Pain lasting only seconds", "No pain or sensitivity", "Pain only at the gingiva"], "Prolonged post-stimulus pain signals irreversible inflammation."],
      ["A tooth aches spontaneously and worsens at night. Which process is most concerning?", "Irreversible pulpitis or pulpal necrosis", ["Reversible white spot lesion", "Normal eruption", "Gingival recession only"], "Continuous or spontaneous pain is beyond reversible pulpitis."], true),
      K("Pulpitis treatment", `<p>Treatment in the deck includes prompt dental referral, analgesia with NSAIDs and/or acetaminophen, and rare limited opioid use. Antibiotic options listed are penicillin VK or clindamycin. Irreversible pulpitis requires root canal therapy or tooth extraction.</p>`,
      ["What definitive treatment is listed for irreversible pulpitis?", "Root canal therapy or extraction", ["Fluoride alone", "Chilled teething ring", "Replantation"], "Irreversible pulp damage cannot recover and needs definitive dental treatment."],
      ["A patient with irreversible pulpitis needs pain control while awaiting urgent dental care. Which first approach is listed?", "NSAIDs with or without acetaminophen", ["Long-term opioids", "No analgesia", "Benzocaine in every age group"], "Nonopioid analgesia is the deck's primary approach."], true)
    ]),

    O("11-periodontal", "11. Periodontal Disease", [
      K("Progression and stages", `<p>Periodontal disease is a bacterial infection that destroys gum and bone tissue.</p>${T(["Stage", "Meaning"], [["Gingivitis", "Reversible and limited to gum"], ["Early periodontitis", "Irreversible with deeper-structure involvement"], ["Mild periodontitis", "20–50% alveolar bone loss"], ["Advanced periodontitis", "More than 50% alveolar bone loss and risk of losing multiple teeth"]])}`,
      ["Which periodontal stage is fully reversible?", "Gingivitis", ["Early periodontitis", "Mild periodontitis", "Advanced periodontitis"], "Plaque removal and oral hygiene can fully reverse gingivitis."],
      ["More than half of the alveolar bone has been lost. Which stage fits?", "Advanced periodontitis", ["Gingivitis", "Early periodontitis", "White spot lesion"], "Advanced disease exceeds 50% alveolar bone loss."], true),
      K("Clinical presentation and diagnosis", `<p>Gingivitis causes easy bleeding with or without pain. Gingiva may appear red or blue, puffy, shiny, and no longer stippled. Progression destroys attachment fibers and bone.</p><p>Diagnosis includes bleeding with light probing and increased periodontal-pocket depth. Dental x-rays support evaluation of moderate or severe disease.</p>`,
      ["Which finding supports periodontal disease on examination?", "Bleeding with light probing and deeper pockets", ["A normal stippled surface", "No gingival change", "An intact extraction clot"], "Bleeding and pocket depth are the diagnostic examination findings."],
      ["A patient has shiny red swollen gums that bleed easily. Which early stage fits?", "Gingivitis", ["Ellis IV fracture", "Alveolar osteitis", "Tooth avulsion"], "The disease remains limited to gingiva at this early stage."], true),
      K("Treatment and prognosis", `<p>Prompt dental referral is required. Scaling and root planing form the treatment cornerstone. Antibiotics are adjuncts for refractory disease or systemic findings such as fever or lymphadenopathy. Use NSAIDs first, alone or with acetaminophen; reserve opioids for severe cases and limit them to three days or less. Advanced disease may need surgery.</p><p>Bone loss leads to root sensitivity, mobility, occlusal trauma, abscess, and eventual loss of multiple teeth.</p>`,
      ["What is the cornerstone of periodontitis treatment?", "Scaling and root planing", ["Fluoride alone", "Tooth replantation", "Pacifier cessation"], "Mechanical periodontal cleaning is the central treatment."],
      ["When are antibiotics used for periodontitis?", "As adjuncts for refractory disease or systemic signs", ["For every gingivitis case", "Never", "Only after avulsion"], "Antibiotics are not the primary routine treatment."], true)
    ]),

    O("12-edentulism", "12. Edentulism", [
      K("Leading cause of adult tooth loss", `<p><strong>Periodontal disease</strong> is the leading cause of edentulism in adults. Untreated infection destroys gingiva, periodontal ligament, and alveolar bone until teeth become mobile and multiple teeth are lost.</p>`,
      ["What is the leading cause of edentulism in adults?", "Periodontal disease", ["Teething", "Fluoride toothpaste", "Nonnutritive sucking"], "The lecture identifies periodontal disease as the primary cause."],
      ["Progressive alveolar bone loss causes mobility and loss of multiple teeth. What is this final condition called?", "Edentulism", ["Pulpitis", "Fluorosis", "Trismus"], "Edentulism describes loss of the dentition."], true)
    ]),

    O("13-systemic", "13. Periodontal Disease and Systemic Illness", [
      K("Inflammation and associated illnesses", `<p>Chronic oral inflammation can raise C-reactive protein. The deck associates periodontal disease with rheumatoid arthritis, cardiovascular disease, ischemic stroke, cancer, and dementia.</p><p>Poor immunity, alcohol use, and smoking increase periodontal-disease risk.</p>`,
      ["Which laboratory marker may rise with periodontal inflammation?", "C-reactive protein", ["Troponin only", "Fluoride level", "Serum amylase only"], "The deck links chronic oral inflammation with elevated CRP."],
      ["Which systemic illness is associated with periodontal disease in the lecture?", "Cardiovascular disease", ["Isolated teething", "Dental fluorosis", "Ellis I fracture"], "Cardiovascular disease appears among the associations."], true),
      K("Diabetes relationship", `<p>Poorly controlled diabetes contributes to the development and progression of periodontal disease. Active periodontal disease also contributes to poor glycemic control, creating a two-way relationship.</p>`,
      ["How are diabetes and periodontal disease related?", "Each can worsen the other", ["They are unrelated", "Periodontal disease cures diabetes", "Diabetes prevents gingivitis"], "The deck emphasizes bidirectional worsening."],
      ["A patient has poorly controlled diabetes and active periodontitis. Which expectation fits?", "Diabetes may accelerate periodontal disease, and oral inflammation may worsen glycemic control", ["The conditions protect against each other", "No dental follow-up is needed", "Only fluoride is indicated"], "Both diseases can negatively influence the other."], true)
    ]),

    O("14-abscess", "14. Periodontal Abscess", [
      K("Presentation and airway danger", `<p>Plaque and debris trapped in a periodontal pocket can produce severe pain, apical inflammation, swelling, and fever. The tooth hurts with biting, chewing, or percussion and may feel better with cold. Fever, lymphadenopathy, malaise, poor hygiene, and dysphagia may occur.</p><p>Large internal swelling may look minor externally yet push the tongue backward and cause stridor. Difficulty handling secretions, anxiety, and cyanosis are late airway-danger signs.</p>`,
      ["Which symptom pattern supports a periodontal abscess?", "Severe tooth pain with biting or percussion", ["Painless enamel staining", "Lip scaling only", "Brief cold sensitivity only"], "The abscessed tooth is tender under pressure."],
      ["Oral swelling displaces the tongue and the patient develops stridor and cannot handle secretions. What is the priority?", "Emergency airway management", ["Routine follow-up", "Fluoride varnish", "Home brushing only"], "These are late signs of airway compromise."], true),
      K("Drainage and antibiotic indications", `<p>Primary treatment is drainage and removal of necrotic tissue by a dentist or maxillofacial surgeon. Warm salt-water and chlorhexidine rinses are adjuncts.</p><p>Use antibiotics when drainage cannot be achieved, infection is poorly localized or spreading to bone or surrounding tissue, or systemic signs are present. Complications include osteomyelitis, facial cellulitis, Ludwig angina, and cavernous-sinus thrombosis.</p>`,
      ["What is the primary treatment for a periodontal abscess?", "Drainage and removal of necrotic tissue", ["Antibiotics alone in every case", "Fluoride toothpaste", "Observation only"], "Source control is the primary treatment."],
      ["When are antibiotics indicated for a periodontal abscess?", "When drainage is unavailable, infection is spreading, or systemic signs are present", ["For every localized drained abscess", "Never", "Only for tooth sensitivity"], "The lecture reserves antibiotics for these higher-risk circumstances."], true)
    ]),

    O("15-anug", "15. Acute Necrotizing Ulcerative Gingivitis", [
      K("Risk factors and diagnostic triad", `<p>ANUG, also called Vincent angina or trench mouth, is an aggressive opportunistic anaerobic infection.</p>${M("Diagnostic triad", "Sudden oral pain · Ulcerated interdental papillae · Gingival bleeding")}<p>Major risks include HIV and previous ANUG. Other risks include low socioeconomic status, poor hygiene, stress, inadequate sleep, recent illness, gingivitis, smoking, alcohol, malnutrition, and immunosuppression.</p>`,
      ["What are the three core findings of ANUG?", "Sudden pain, interdental papilla ulceration, and gingival bleeding", ["White spot, fluorosis, and dentin sensitivity", "Avulsion, intrusion, and extrusion", "Cough, rhinorrhea, and hoarseness"], "The deck presents these findings as the diagnostic triad."],
      ["A patient with HIV develops sudden painful bleeding gums and ulcerated interdental papillae. Which diagnosis fits?", "ANUG", ["Simple gingival recession", "Dry socket", "Ellis I fracture"], "The risk factor and triad strongly support ANUG."], true),
      K("Secondary findings and treatment", `<p>Secondary findings include halitosis, pseudomembrane, a wooden-teeth sensation, foul metallic taste, mobility, fever, malaise, and lymphadenopathy.</p><p>Acute treatment aims to halt destruction and control pain through debridement and antibiotic therapy. After control, treat preexisting disease such as chronic gingivitis with scaling and root planing.</p>`,
      ["What is the acute treatment foundation for ANUG?", "Debridement and antibiotic therapy", ["Fluoride alone", "Replantation", "Observation only"], "The destructive infection requires local debridement and antimicrobials."],
      ["ANUG has been controlled, but chronic gingivitis remains. What follows?", "Scaling and root planing for the underlying disease", ["No further care", "Tooth avulsion", "Stop oral hygiene"], "The lecture treats preexisting periodontal disease after the acute phase."], true)
    ]),

    O("16-postop", "16. Postoperative Dental Complications", [
      K("Expected postoperative pain and trismus", `<p>Pain is common for 24–48 hours after extraction because of trauma, pulp exposure, edema, or restoration malocclusion. Use ice, elevate the head above 30 degrees, and give NSAIDs alone or with acetaminophen; arrange oral-surgeon follow-up.</p><p>Trismus may result from normal inflammation, TMJ injury, muscle injury during an alveolar nerve block, or infection. Symptoms peak at 24 hours and then begin resolving.</p>`,
      ["What is first-line analgesia for routine post-extraction pain?", "NSAIDs with or without acetaminophen", ["Long-term opioids", "Antibiotics in every case", "Fluoride supplements"], "The deck uses nonopioid analgesia first."],
      ["Jaw opening is limited and peaks 24 hours after dental surgery before improving. Which complication fits?", "Postoperative trismus", ["ANUG", "Ellis IV fracture", "Fluorosis"], "Normal postoperative inflammation can produce this time course."], true),
      K("Alveolar osteitis", `<p>Dry socket occurs when the extraction-site clot dislodges or fails to form, exposing bone and nerves and causing intense pain. It disrupts healing rather than representing a primary bacterial infection.</p><p>Risks include smoking, periodontal disease, traumatic extraction, previous dry socket, and hormone replacement therapy. Treat with intra-alveolar irrigation, NSAIDs, and a medicated dressing.</p>`,
      ["What causes alveolar osteitis?", "Loss or failure of the extraction-site blood clot", ["A primary bacterial infection in every case", "Excess fluoride", "Tooth intrusion"], "Without the clot, bone and nerves are exposed."],
      ["Severe pain follows extraction after the clot is lost. What management fits?", "Irrigate the socket, give NSAIDs, and apply a medicated dressing", ["Replant the tooth", "Use fluoride varnish", "Apply only dry gauze for 20 minutes"], "This is the treatment sequence for dry socket."], true),
      K("Postoperative bleeding", `<p>Bleeding commonly follows clot displacement. Place dry 2 × 2 gauze over the socket and have the patient bite for 20 minutes. If needed, insert absorbable gelatin (Gelfoam) or regenerated cellulose (Surgicel) as a clot matrix.</p><p>Other options listed are lidocaine with epinephrine injection, silver nitrate cautery, or loose suturing.</p>`,
      ["What is the first step for post-extraction bleeding?", "Dry gauze with bite pressure for 20 minutes", ["Immediate tooth replantation", "Tongue scraping", "Fluoride supplementation"], "Direct bite pressure promotes clot formation."],
      ["Bleeding continues after bite pressure. Which socket material is listed?", "Gelfoam or Surgicel", ["Calcium hydroxide only", "Teething gel", "Dental explorer"], "These materials provide a matrix for clot formation."], true)
    ]),

    O("17-ellis-types", "17. Ellis Fractures", [
      K("Ellis I through III", T(["Class", "Tissue and appearance"], [["Ellis I", "Enamel only; white; usually painless"], ["Ellis II", "Enamel and dentin; creamy yellow; hot and cold sensitivity"], ["Ellis III", "Enamel, dentin, and pulp; red or bleeding pulp exposure"]]),
      ["Which Ellis fracture reaches dentin but not pulp?", "Ellis II", ["Ellis I", "Ellis III", "Ellis IV"], "Ellis II exposes the creamy-yellow dentin."],
      ["A fractured tooth looks red and bleeds after drying. Which class is it?", "Ellis III", ["Ellis I", "Ellis II", "Ellis IV"], "Blood from exposed pulp identifies Ellis III."], true),
      K("Ellis IV and V", T(["Class", "Pattern"], [["Ellis IV", "Root fracture with a mobile or displaced coronal segment and percussion tenderness; may require imaging"], ["Ellis V", "Avulsion, with the tooth displaced from its attachment apparatus"]]) + '<p>Trauma severity also depends on alveolar involvement, root-apex development, and patient age.</p>',
      ["Which Ellis class is a root fracture?", "Ellis IV", ["Ellis I", "Ellis II", "Ellis V"], "Ellis IV involves the root and mobile coronal segment."],
      ["A tooth is completely displaced from its socket. Which Ellis category applies?", "Ellis V avulsion", ["Ellis I", "Ellis II", "Ellis IV root fracture"], "The deck places avulsion under Ellis V."], true)
    ]),

    O("18-ellis-management", "18. Ellis II–IV Management", [
      K("Ellis II and III", T(["Injury", "Immediate management"], [["Ellis II", "Immediate intervention and dentist within 24 hours; protect exposed dentin"], ["Ellis III", "Control bleeding, apply calcium hydroxide, cover dentin with glass ionomer cement, give analgesia, and obtain urgent dental referral; definitive root canal or endodontic care"]]),
      ["How urgently should an Ellis II fracture reach a dentist?", "Within 24 hours", ["Only if pain lasts a month", "No referral is needed", "After the tooth falls out"], "Exposed dentin requires timely treatment."],
      ["An Ellis III fracture exposes bleeding pulp. What immediate treatment is listed?", "Control bleeding, use calcium hydroxide and glass ionomer, and refer urgently", ["Fluoride toothpaste alone", "No treatment", "Replant a primary tooth"], "Pulp protection and urgent definitive dental care help prevent necrosis."], true),
      K("Ellis IV", `<p>A root fracture may be hidden and require imaging. Reposition the coronal segment to its original position, confirm alignment by radiograph, stabilize it with a flexible splint, and refer to a dentist within 24 hours.</p>`,
      ["What stabilizes an Ellis IV root fracture after repositioning?", "A flexible splint", ["A medicated dry-socket dressing", "Fluoride varnish", "Gelfoam alone"], "The mobile coronal segment needs splint stabilization."],
      ["A coronal segment is mobile after a root fracture. What is the immediate sequence?", "Reposition, confirm by radiograph, splint, and refer within 24 hours", ["Extract without imaging in every case", "Observe for six months", "Use only topical analgesia"], "This sequence follows the Ellis IV slide."], true)
    ]),

    O("19-luxations", "19. Dental Luxations", [
      K("Six injury patterns", T(["Type", "Description"], [["Concussion", "Normal appearance with pain on biting"], ["Subluxation", "Loose but not displaced; gumline bleeding"], ["Intrusion", "Driven directly into the socket"], ["Extrusion", "Partly displaced out from the socket"], ["Lateral luxation", "Displaced laterally, toward the lip or tongue"], ["Avulsion", "Completely displaced from the socket"]]),
      ["Which luxation leaves a tooth loose but not displaced?", "Subluxation", ["Concussion", "Intrusion", "Avulsion"], "Subluxation adds mobility and gingival bleeding without displacement."],
      ["A tooth has been driven farther into its socket. Which injury is this?", "Intrusion", ["Extrusion", "Lateral luxation", "Concussion"], "Intrusion moves the tooth inward."], true),
      K("Concussion through lateral luxation treatment", `<p>Concussion and subluxation need close dental follow-up with x-rays to confirm healing and detect pulpal necrosis.</p><p>Intrusion, extrusion, and lateral luxation require reduction with splinting and possibly suturing, plus referral to a dentist or maxillofacial surgeon.</p>`,
      ["Which luxations require reduction and splinting?", "Intrusion, extrusion, and lateral luxation", ["Concussion only", "Subluxation only", "No luxation type"], "Displaced teeth need reduction and stabilization."],
      ["A tooth is painful on biting but looks normal after trauma. What management fits concussion?", "Close dental follow-up with x-rays", ["Immediate replantation", "Root canal at the scene", "No follow-up"], "Concussion is observed for healing and pulpal complications."], true),
      K("Avulsion", `<p>Avulsion is a true dental emergency. Replace a permanent tooth into the socket immediately when appropriate and arrange immediate dental referral. Cold milk can temporarily preserve the tooth. If the tooth is missing and unrecovered, obtain x-rays to ensure it was not aspirated.</p><p>Use NSAIDs with or without acetaminophen and recommend a soft-food diet.</p>`,
      ["What temporary storage medium is listed for an avulsed tooth?", "Cold milk", ["Tap water for days", "Dry gauze", "Fluoride rinse"], "Cold milk helps preserve the tooth while reaching dental care."],
      ["An avulsed permanent tooth cannot be found. What additional evaluation is needed?", "X-rays to exclude aspiration", ["Assume it was swallowed", "Use a Centor score", "Apply Gelfoam"], "The deck warns that an unseen tooth may have been aspirated."], true)
    ]),

    O("20-pediatric-trauma", "20. Pediatric Dental Trauma", [
      K("Primary and permanent teeth", `<p>Children younger than 12 often sustain fractures that reach the more exposed pulp. From ages 6–12, mixed dentition makes it essential to distinguish primary from permanent teeth.</p><ul><li>Never replant an avulsed primary tooth.</li><li>Severe primary-tooth luxations require extraction because reimplantation may injure the permanent tooth beneath.</li><li>Intruded primary teeth are usually left to re-erupt.</li></ul>`,
      ["Should an avulsed primary tooth be replanted?", "No", ["Yes, immediately in every case", "Only after storage in milk", "Only after fluoride treatment"], "Replantation risks the developing permanent tooth."],
      ["A young child has an intruded primary tooth. What management does the deck give?", "Generally leave it to re-erupt", ["Immediately replant it", "Treat as dry socket", "Perform gingivectomy"], "Intrusion is the stated exception among severe primary-tooth luxations."], true),
      K("Why age changes management", `<p>Trauma severity depends on tooth and alveolar involvement, root-apex development, and patient age. Primary teeth protect developing permanent teeth, whereas avulsed permanent teeth represent replantation emergencies.</p>`,
      ["Why must clinicians identify whether an injured tooth is primary or permanent?", "Management differs and primary-tooth treatment can injure the developing permanent tooth", ["The teeth are treated identically", "Only primary teeth have roots", "Only permanent teeth can fracture"], "Dentition type changes replantation and extraction decisions."],
      ["An 8-year-old has an avulsed tooth. What must be determined before replantation?", "Whether the tooth is primary or permanent", ["Whether the child uses fluoride toothpaste", "Whether the tooth is numbered A", "Whether teething symptoms occurred"], "Mixed dentition is common between ages 6 and 12."], true)
    ]),

    O("21-ie-indications", "21. Endocarditis Prophylaxis Indications", [
      K("Covered dental procedures", `<p>Endocarditis prophylaxis applies before procedures that manipulate gingival tissue, manipulate the periapical region of teeth, or perforate oral mucosa.</p>`,
      ["Which procedure feature requires consideration of IE prophylaxis?", "Manipulation of gingival tissue", ["Routine tooth brushing", "Visual oral inspection only", "Eating soft food"], "Gingival manipulation is one of the three covered procedure categories."],
      ["A planned procedure perforates oral mucosa. Does it fall within the listed prophylaxis procedures?", "Yes", ["No, never", "Only if fluoride is absent", "Only after dry socket"], "Oral-mucosal perforation is included."], true),
      K("High-risk cardiac patients", `<ul><li>Prosthetic cardiac valves</li><li>Durable mechanical circulatory support devices</li><li>Previous, relapsed, or recurrent infective endocarditis</li><li>Unrepaired cyanotic congenital heart disease</li><li>Repaired congenital disease with residual shunt or valve regurgitation at the site</li><li>Cardiac transplant with valve disease</li></ul>`,
      ["Which patient belongs to the high-risk prophylaxis group?", "A patient with a prosthetic cardiac valve", ["Every patient with gingivitis", "Every child with a primary tooth", "A patient with an isolated white spot"], "Prosthetic valves are a listed high-risk condition."],
      ["A cardiac-transplant recipient developed valve disease and needs gingival manipulation. Is prophylaxis indicated?", "Yes", ["No", "Only after postoperative bleeding", "Only with a root fracture"], "Transplant-associated valve disease plus a covered procedure meets both requirements."], true)
    ]),

    O("22-ie-antibiotics", "22. Endocarditis Prophylaxis Antibiotics", [
      K("Oral regimens", `${T(["Situation", "Single dose 30–60 minutes before procedure"], [["Preferred oral", "Amoxicillin 2 g"], ["Mild penicillin allergy", "Cephalexin 2 g"], ["Other penicillin-allergy options", "Azithromycin 500 mg, clarithromycin 500 mg, or doxycycline 100 mg"]])}<p>Clindamycin is no longer used for IE prophylaxis.</p>`,
      ["What is the preferred adult oral prophylaxis regimen?", "Amoxicillin 2 g once 30–60 minutes before the procedure", ["Amoxicillin for 10 days afterward", "Clindamycin 2 g", "Fluconazole 200 mg"], "The regimen is a single preprocedure dose."],
      ["A patient has a mild penicillin allergy without anaphylaxis. Which oral option is listed?", "Cephalexin 2 g", ["Clindamycin", "Vancomycin", "Penicillin VK for 10 days"], "Cephalexin is reserved for nonsevere penicillin allergy."], true),
      K("Unable to take oral medication and allergy cautions", `${T(["Situation", "Regimen"], [["Unable to take oral medication", "Ampicillin 2 g IM or IV"], ["Penicillin allergy and parenteral route", "Cefazolin 1 g or ceftriaxone 1 g"]])}<p>Do not use cephalosporins in a patient with penicillin- or ampicillin-associated anaphylaxis, angioedema, or urticaria.</p>`,
      ["What is the nonoral regimen for a patient without penicillin allergy?", "Ampicillin 2 g IM or IV", ["Amoxicillin 2 g by mouth", "Doxycycline 100 mg topical", "Clindamycin 2 g"], "Ampicillin is the listed parenteral alternative."],
      ["A patient previously had penicillin-associated anaphylaxis. Should cefazolin or cephalexin be used for prophylaxis?", "No", ["Yes, without restriction", "Only after the procedure", "Only with clindamycin"], "The deck excludes cephalosporins after anaphylaxis, angioedema, or urticaria."], true)
    ])
  ];
}());
