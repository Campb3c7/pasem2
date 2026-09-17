/* HEENT Emergencies content derived only from "s-HENT-Emergency-Diem-2026.pptx", the student quiz sheet, and matching objectives. */
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
    "01-masticator-space": "Recall masticator space abscess, common etiologies and likely pathogens, signs, and symptoms as well as appropriate diagnostic studies and treatment.",
    "02-lateral-sinus-thrombosis": "Define lateral sinus thrombosis, identify potential etiologies and the most common clinical feature. Recall the correct diagnostic workup.",
    "03-horner-syndrome": "Identify physical exam findings of Horner’s syndrome.",
    "04-ear-hematoma": "Recall potential complications of an ear hematoma if untreated, appearance on physical exam and determine an appropriate therapeutic plan if given a clinical vignette.",
    "05-ear-foreign-body": "Recognize the correct management strategies for an ear foreign body (FB), and potential complications of FB removal.",
    "06-epistaxis-types": "Compare and contrast anterior and posterior epistaxis, anatomical locations of bleeding, and common etiologies.",
    "07-anticoagulated-epistaxis": "Recall appropriate management of epistaxis in an anticoagulated patient.",
    "08-epistaxis-admission": "Given a clinical vignette decide when an epistaxis patient should be hospitalized.",
    "09-nasal-foreign-body": "Recall the epidemiology, clinical features, and management of nasal foreign bodies.",
    "10-facial-trauma": "Recall the appropriate historical, clinical features, physical exam findings, diagnostic workup, and management of the various forms of facial trauma. Be aware of the potential complications associated with these types of traumas and arrange the appropriate referral.",
    "11-basilar-cribriform": "Identify the physical exam signs associated with a basilar skull fracture and the most common bone fractured. Recall the clinical features and physical exam findings of a cribriform plate fracture.",
    "12-mandibular-fractures": "Recall physical exam findings associated with mandibular fractures, the diagnostic workup, and determine management/disposition for closed and open fractures.",
    "13-mandibular-dislocation": "Recall the most common type of mandibular dislocation.",
    "14-post-reduction-care": "Provide appropriate patient education post mandibular reduction.",
    "15-zygomatic-fractures": "Compare and contrast simple zygoma arch fracture and tripod fractures anatomical involvement.",
    "16-le-fort-fractures": "Recall the Le Forte classification of facial fractures and identify pertinent physical exam findings with each.",
    "17-nasal-fracture": "For a nasal fracture choose the appropriate diagnostic study, management, and identify possible complications.",
    "18-septal-hematoma": "Recall physical exam findings, complications associated with a septal hematoma and definitive management.",
    "19-deep-neck-infections": "Recall the epidemiology, risk factors, common pathogens, clinical features, diagnostic test, management, and complications of peritonsillar abscess, retropharyngeal abscess, Ludwig’s angina, and epiglottitis. Given a clinical vignette with an appropriate history and physical exam findings, select the appropriate diagnostic workup and therapeutic plan for the infectious diseases discussed.",
    "20-retropharyngeal-abscess": "Recall the epidemiology, risk factors, common pathogens, clinical features, diagnostic test for a retropharyngeal abscess. Given a clinical vignette with an appropriate history and physical exam findings, select the appropriate diagnostic workup and therapeutic plan for the infectious diseases discussed. Don't need to know all antibiotics for treatment of retropharyngeal abscess.",
    "21-post-tonsillectomy-bleeding": "Recall when post-tonsillectomy bleeding occurs.",
    "22-neck-zones": "Recall the 3 zones for classifications of the neck and the anatomy structures within these zones.",
    "23-neck-fascial-layers": "Define the three fascial layers of the neck. Recall the major risks associated with bleeding, inflammation and infections within these facial layers of the neck and concerning physical exam findings.",
    "24-hard-soft-signs": "Distinguish the therapeutic importance between hard and soft signs and recall the four highlighted for each on the PowerPoint. Given a clinical vignette, recognize hard signs and appropriate management and disposition.",
    "25-vascular-dissection": "Define vascular dissection involving carotid and vertebral arteries, potential causes, clinical findings and diagnostic work-up"
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

  window.HEENT_EMERGENCY_OBJECTIVES = [
    O("01-masticator-space", "1. Masticator Space Abscess", [
      K("Source and presentation", `<p>The masticator space is four contiguous potential spaces. Infection is usually <strong>odontogenic</strong> and polymicrobial; trauma, surgery, and injection are other causes.</p><p>Look for fever, pain, erythema, trismus, and buccal, submandibular, or sublingual swelling.</p>`,
      ["What is the usual source of a masticator-space abscess?", "Odontogenic infection", ["Otitis externa", "Nasal foreign body", "Viral epiglottitis"], "The lecture identifies dental infection as the usual source."],
      ["A patient has dental pain, fever, facial swelling, and trismus. Which emergency fits?", "Masticator-space abscess", ["BPPV", "Anterior epistaxis", "Mandibular dislocation"], "Dental origin with trismus and regional swelling is the lecture pattern."], true),
      K("Diagnosis and treatment", `<p><strong>CT of the face with IV contrast</strong> is the best diagnostic study; bedside ultrasound can help. Treat with IV clindamycin, ENT/dental consultation, and hospitalization. Consider airway protection.</p>`,
      ["Which study best evaluates a masticator-space abscess?", "CT face with IV contrast", ["Noncontrast sinus radiograph", "Weber test", "Chest radiograph only"], "Contrast CT defines the deep-space infection."],
      ["CT confirms a masticator-space abscess in a patient with worsening trismus. What is appropriate?", "Hospitalize for IV antibiotics, ENT/dental consultation, and airway assessment", ["Discharge with no follow-up", "Perform cold-water irrigation", "Use nasal cautery"], "The lecture treats this as a hospitalized deep-space infection."], true)
    ]),

    O("02-lateral-sinus-thrombosis", "2. Lateral Sinus Thrombosis", [
      K("Definition and recognition", `<p>Lateral sinus thrombosis is an intracranial complication of otitis media or mastoiditis in which infection extends into the lateral/transverse and sigmoid venous sinus and obstructs drainage.</p><p>Features include fever, persistent earache, papilledema, CN VI palsy with impaired abduction/diplopia, and vertigo. <strong>Headache is the most common feature.</strong></p>`,
      ["What is the most common clinical feature of lateral sinus thrombosis?", "Headache", ["Epistaxis", "Trismus", "Saddle-nose deformity"], "The deck emphasizes headache as the most common feature."],
      ["A patient with mastoiditis develops headache, diplopia, and inability to abduct one eye. What complication is likely?", "Lateral sinus thrombosis", ["Anterior epistaxis", "Auricular hematoma", "Mandibular dislocation"], "CN VI findings after ear infection indicate venous-sinus extension."], true),
      K("Workup and treatment", `<p>Order contrast CT of the sinuses or MRI/MRV; a filling defect supports the diagnosis. Admit and obtain ENT and neurology consultation. The lecture regimen is IV cefepime, metronidazole, and vancomycin; mastoidectomy may be needed.</p>`,
      ["Which imaging can demonstrate lateral sinus thrombosis?", "Contrast CT or MRI/MRV showing a filling defect", ["Dental radiograph", "Noncontrast nasal film", "Tympanometry only"], "Venous imaging identifies the obstructed sinus."],
      ["Imaging confirms a venous-sinus filling defect after mastoiditis. What disposition is appropriate?", "Admission with IV antibiotics and ENT/neurology consultation", ["Routine outpatient follow-up", "Topical nasal saline only", "Discharge after irrigation"], "This intracranial complication requires inpatient management."], true)
    ]),

    O("03-horner-syndrome", "3. Horner Syndrome", [
      K("Physical findings", `${M("Horner triad", "Ipsilateral ptosis + miosis + anhidrosis")}<p>Listed causes include stroke, tumor, internal-carotid dissection, infection, and trauma. Workup may include CT brain/neck, CTA or MRA of the head and neck for dissection, and chest radiograph for a Pancoast tumor.</p>`,
      ["Which triad defines Horner syndrome?", "Ipsilateral ptosis, miosis, and anhidrosis", ["Proptosis, mydriasis, and diaphoresis", "Diplopia, epistaxis, and trismus", "Stridor, drooling, and dysphagia"], "These are the three physical findings highlighted in the lecture."],
      ["A trauma patient has unilateral ptosis, a small pupil, and reduced sweating. What syndrome is present?", "Horner syndrome", ["Le Fort I fracture", "Epiglottitis", "Basilar skull fracture"], "The ipsilateral triad identifies Horner syndrome."], true)
    ]),

    O("04-ear-hematoma", "4. Auricular Hematoma", [
      K("Recognition and definitive care", `<p>Blunt auricular trauma can collect blood between tissue layers. The pinna appears swollen and fluctuant. Untreated pressure causes cartilage necrosis and permanent <strong>cauliflower-ear deformity</strong>.</p><p>Perform immediate incision and drainage, then apply a compressive dressing or bolster to prevent recurrence.</p>`,
      ["What is the major untreated complication of an auricular hematoma?", "Cartilage necrosis with cauliflower-ear deformity", ["Horner syndrome", "CSF rhinorrhea", "Carotid dissection"], "Persistent separation from blood supply deforms the cartilage."],
      ["A wrestler has a new fluctuant pinna swelling after trauma. What treatment is appropriate?", "Immediate drainage followed by a compressive dressing or bolster", ["Observe without treatment", "Cold-water irrigation", "Nasal packing"], "Drainage plus compression prevents reaccumulation and deformity."], true)
    ]),

    O("05-ear-foreign-body", "5. Ear Foreign Bodies", [
      K("Removal strategy", `<p>Immobilize a live insect with viscous lidocaine. Removal options include a Katz extractor, alligator forceps, curette, or suction. Room-temperature-water irrigation can remove some small objects, but do not irrigate organic material because it can swell.</p>`,
      ["What should be used first for a live insect in the ear canal?", "Viscous lidocaine to immobilize it", ["Cold water under pressure", "Silver nitrate", "Posterior nasal packing"], "The lecture recommends immobilizing a live insect before extraction."],
      ["A child has a popcorn kernel in the ear. Which technique should be avoided?", "Irrigation", ["Alligator-forceps extraction", "Curette extraction", "ENT referral when removal fails"], "Organic material can swell after irrigation."], true),
      K("Complications and referral", `<p>After removal, inspect the canal and tympanic membrane for canal injury or perforation. Cold irrigation can provoke vertigo. Failed extraction or a perforated tympanic membrane requires ENT referral.</p>`,
      ["What can cold ear irrigation cause?", "Vertigo", ["Horner syndrome", "Saddle nose", "Trismus"], "The quiz sheet specifically links cold irrigation to vertigo."],
      ["An extraction attempt causes suspected tympanic-membrane perforation. What is next?", "Stop and obtain ENT referral", ["Continue blind probing", "Use higher-pressure irrigation", "Apply nasal cautery"], "Perforation is a removal complication requiring specialty care."], true)
    ]),

    O("06-epistaxis-types", "6. Anterior vs Posterior Epistaxis", [
      K("Bleeding pattern and anatomy", `${T(["Feature", "Anterior", "Posterior"], [["Frequency", ">90% of cases", "Less common"], ["Site", "Kiesselbach plexus", "Sphenopalatine or posterior ethmoid artery"], ["Pattern", "Steady ooze", "Profuse arterial or pumping bleed"], ["Risk", "Usually easier to control", "Greater airway and aspiration risk; harder to control"]])}`,
      ["Where do most anterior nosebleeds arise?", "Kiesselbach plexus", ["Sphenopalatine artery", "Carotid bifurcation", "Retropharyngeal space"], "The anterior septal plexus accounts for more than 90% of cases."],
      ["A patient has profuse pumping blood in the posterior pharynx. Which type is most likely?", "Posterior epistaxis", ["Anterior epistaxis", "CSF rhinorrhea", "Septal hematoma"], "Posterior bleeding is arterial, brisk, and difficult to control."], true),
      K("Common causes", `<p>Digital trauma is the most common cause. Other causes include nasal foreign body, facial trauma or surgery, dry or cold air, anticoagulants and genetic coagulopathy, sprays directed at the septum, drugs of abuse, septal weakness or anomaly, rhinosinusitis, tumor, migraine, and hypertension.</p>`,
      ["What is the most common cause of epistaxis?", "Digital trauma", ["Carotid dissection", "Epiglottitis", "Mandibular dislocation"], "The deck lists nose picking/digital trauma first."],
      ["A nasal spray is repeatedly aimed at the septum and bleeding begins. Is this a lecture-listed cause?", "Yes, septal spray trauma can cause epistaxis", ["No, sprays cannot cause bleeding", "Only posterior tumors cause bleeding", "Only anticoagulants cause bleeding"], "Local septal irritation is among the listed causes."], true)
    ]),

    O("07-anticoagulated-epistaxis", "7. Epistaxis with Anticoagulation", [
      K("Escalated management", `<p>Place the patient in a sniffing position and pinch the soft nares for 10–15 minutes. With profuse bleeding or anticoagulation, monitor the patient, establish IV access, and obtain CBC, type and screen, and PT/INR. Evacuate clots and look for the source.</p><p>When bleeding is brisk, the source is not visible, or the patient takes a blood thinner, skip cautery and proceed to a Rhino Rocket or other packing. Observe for 30 minutes; arrange HEENT removal at 48 hours and the lecture's five-day Augmentin prophylaxis.</p>`,
      ["When should cautery be bypassed in epistaxis?", "Brisk or unidentified bleeding, especially in a patient taking a blood thinner", ["Every minor anterior ooze", "Only after nasal fracture reduction", "Only with a nasal foreign body"], "The lecture directs these patients to packing rather than blind cautery."],
      ["An anticoagulated patient continues bleeding and no source is visible. What is the definitive next step taught?", "Nasal packing with a Rhino Rocket", ["Blind silver-nitrate cautery", "Cold ear irrigation", "Mandibular reduction"], "The student quiz and slides emphasize packing for this scenario."], true)
    ]),

    O("08-epistaxis-admission", "8. Epistaxis Admission Criteria", [
      K("Who needs hospitalization", `<p><strong>Posterior packing always requires admission.</strong> Hospitalize patients with airway compromise and those requiring posterior dual-chamber balloon control. Posterior bleeding carries increased aspiration and airway risk.</p>`,
      ["Which epistaxis intervention always requires admission?", "Posterior nasal packing", ["Brief external pressure", "Topical vasoconstrictor alone", "Single silver-nitrate application"], "The deck explicitly states that posterior packing mandates admission."],
      ["A posterior bleed is controlled with a dual-chamber balloon. What is the disposition?", "Hospital admission", ["Immediate discharge", "Routine dental follow-up", "No observation"], "Posterior packing and airway risk require inpatient care."], true)
    ]),

    O("09-nasal-foreign-body", "9. Nasal Foreign Bodies", [
      K("Epidemiology and recognition", `<p>Nasal foreign bodies occur mainly in children ages 2–5 and in adults with psychiatric or intellectual disability. Common objects include toys, beads, popcorn, and candy. Unilateral rhinorrhea—sometimes bloody or foul-smelling—is the classic presentation.</p>`,
      ["Which presentation most suggests a nasal foreign body in a child?", "Unilateral foul-smelling rhinorrhea", ["Bilateral ptosis", "Symmetric hearing loss", "Hot-potato voice"], "Unilateral discharge is the hallmark clue."],
      ["A 3-year-old has persistent unilateral bloody, malodorous discharge. What should be suspected?", "Nasal foreign body", ["Bilateral allergic rhinitis", "Lateral sinus thrombosis", "Horner syndrome"], "The age and unilateral discharge match the lecture."], true),
      K("Removal and button batteries", `<p>Remove carefully with a Katz extractor, alligator forceps, or positive pressure while avoiding aspiration. An inaccessible object or a fighting patient should receive same-day ENT care.</p><p>A button battery is an emergency because it causes liquefaction necrosis and septal perforation; it can be identified on radiograph.</p>`,
      ["Why is a nasal button battery an emergency?", "It can cause liquefaction necrosis and septal perforation", ["It always causes Horner syndrome", "It produces CSF", "It becomes a zygomatic fracture"], "Caustic tissue injury can progress rapidly."],
      ["A child will not cooperate and the object cannot be safely reached. What is appropriate?", "Same-day ENT referral", ["Blind repeated probing", "Forceful cold irrigation", "Delay for several weeks"], "Unsafe or inaccessible removal belongs with ENT."], true)
    ]),

    O("10-facial-trauma", "10. Facial Trauma Evaluation", [
      K("Initial priorities and history", `<p>Immobilize the cervical spine and secure the airway first. Facial trauma threatens the airway through mechanical disruption and hemorrhage and may accompany brain, orbital, cervical-spine, or lung injury.</p><p>Ask about the mechanism, loss of consciousness, neck pain, vision change, facial numbness, and altered bite.</p>`,
      ["What are the first priorities in major facial trauma?", "Cervical-spine protection and airway management", ["Dental films before stabilization", "Immediate discharge", "Cold irrigation"], "Airway and c-spine come before the detailed facial examination."],
      ["A crash victim has facial deformity and active oral bleeding. What should be addressed first?", "Airway with cervical-spine precautions", ["Outpatient cosmetic referral", "Weber testing", "Nasal saline"], "Hemorrhage and disruption can rapidly obstruct the airway."], true),
      K("Focused examination and workup", `<p>Inspect and palpate the entire face. Check visual acuity, globe position, eye movement, hyphema, pupils, the nose and septum, ears for hemotympanum or CSF, bite and jaw motion, missing teeth, and the tongue-blade test. Rock the hard palate while stabilizing the forehead when assessing a Le Fort injury.</p><p>After airway, IV access, and monitoring, obtain CBC, BMP, type and screen, and coagulation studies. Use noncontrast CT of the facial bones, brain, and cervical spine. Arrange urgent OMFS, ENT, ophthalmology, or neurosurgery referral according to the injury.</p>`,
      ["What is the preferred imaging for significant facial fracture evaluation?", "Noncontrast CT of the facial bones", ["Plain dental film only", "MRI of the knee", "No imaging regardless of injury"], "The quiz sheet and deck identify CT as the facial-fracture study."],
      ["Why should visual acuity and globe findings be checked early?", "Swelling may later limit the eye examination", ["They determine hearing loss", "They diagnose epistaxis", "They replace airway assessment"], "The lecture recommends eye examination before swelling worsens."], true)
    ]),

    O("11-basilar-cribriform", "11. Basilar Skull and Cribriform Fractures", [
      K("Basilar skull findings", `<p>Basilar fractures involve the ethmoid, frontal, temporal, sphenoid, or occipital bone; the <strong>temporal bone is fractured most often</strong>. Physical findings include hemotympanum, Battle sign, raccoon eyes, CSF otorrhea, or clear rhinorrhea. Battle sign may appear 6 hours to 2 days later. Epidural hematoma is an important risk.</p>`,
      ["Which bone is most commonly fractured in a basilar skull fracture?", "Temporal bone", ["Mandible", "Zygoma", "Nasal septum"], "The lecture identifies the temporal bone as most common."],
      ["After head trauma, a patient has hemotympanum, raccoon eyes, and Battle sign. What is likely?", "Basilar skull fracture", ["Anterior epistaxis", "Auricular hematoma", "Peritonsillar abscess"], "These are the classic physical signs listed in the deck."], true),
      K("Cribriform plate injury", `<p>A cribriform fracture may produce immediate or delayed clear, nonmucoid CSF rhinorrhea and a double-ring sign. Complications include meningitis, encephalitis, and brain abscess.</p><p>Use CT or MRI. Admit, consult neurosurgery, elevate the head, and use bed rest and antibiotics; persistent leakage may need repair. <strong>Never insert a nasogastric tube.</strong></p>`,
      ["What finding suggests a cribriform plate fracture?", "Clear nonmucoid rhinorrhea with a double-ring sign", ["Hot-potato voice", "Cauliflower ear", "Negative tongue-blade test"], "CSF rhinorrhea is the characteristic clue."],
      ["A trauma patient has suspected cribriform fracture. Which procedure must be avoided?", "Nasogastric-tube insertion", ["Head elevation", "Neurosurgical consultation", "CT imaging"], "The deck warns never to pass an NG tube in this injury."], true)
    ]),

    O("12-mandibular-fractures", "12. Mandibular Fractures", [
      K("Recognition and diagnosis", `<p>Assaults, motor-vehicle crashes, and falls are common causes. Findings include malocclusion, pain with jaw movement, separated teeth, inability to open or close the mouth, and a positive tongue-blade test: the patient with a fracture cannot break the blade. CT is preferred.</p>`,
      ["Which examination finding supports mandibular fracture?", "Malocclusion with inability to break a tongue blade", ["Miosis with anhidrosis", "Thumb sign", "Unilateral rhinorrhea"], "The bite and tongue-blade test are emphasized in the lecture."],
      ["A patient cannot break a tongue blade after a punch to the jaw. What study is preferred?", "CT of the face", ["MR venography", "Chest radiograph only", "No imaging"], "CT is the preferred study for mandibular fracture."], true),
      K("Open versus closed management", `${T(["Fracture", "Management and disposition"], [["Open: intraoral wound", "IV Unasyn or clindamycin, NPO, emergent OMFS consultation, and admission"], ["Closed", "Barton bandage, discharge when otherwise stable, and urgent OMFS follow-up"]])}`,
      ["What makes a mandibular fracture open?", "An associated intraoral wound", ["Jaw pain alone", "A positive tongue-blade test alone", "Any facial bruise"], "Communication through the oral mucosa defines the open injury in the deck."],
      ["A mandibular fracture communicates with an intraoral laceration. What disposition is appropriate?", "Admit NPO for IV antibiotics and emergent OMFS care", ["Discharge without antibiotics", "Treat with nasal packing", "Observe at home only"], "Open fractures require inpatient surgical management."], true)
    ]),

    O("13-mandibular-dislocation", "13. Mandibular Dislocation", [
      K("Most common pattern", `<p><strong>Anterior dislocation is most common.</strong> The condyle lies in front of the articular eminence, often after yawning. Patients have pain anterior to the tragus, dysphagia, malocclusion, and inability to close the mouth. Diagnosis is usually clinical.</p><p>Reduction applies downward and posterior pressure on the lower molars; sedation may be needed. Failed reduction requires emergent OMFS care. Posterior, lateral, or superior dislocations follow major trauma and need CT and emergent OMFS consultation.</p>`,
      ["What is the most common mandibular-dislocation direction?", "Anterior", ["Posterior", "Lateral", "Superior"], "Anterior dislocation is the common yawning-related pattern."],
      ["After yawning, a patient cannot close the mouth and has pain anterior to the tragus. What is likely?", "Anterior mandibular dislocation", ["Mandibular fracture with open wound", "Septal hematoma", "Ludwig angina"], "The mechanism and locked-open jaw fit anterior dislocation."], true)
    ]),

    O("14-post-reduction-care", "14. Care After Mandibular Reduction", [
      K("Patient education", `<p>After successful reduction, instruct the patient to eat a soft diet and limit mouth opening to less than 2 cm for 2 weeks.</p>`,
      ["What diet is recommended after mandibular reduction?", "Soft diet", ["Hard foods only", "No dietary guidance", "Clear liquids for six months"], "Soft food limits stress on the reduced joint."],
      ["A patient's jaw has just been reduced. What opening restriction should be taught?", "Keep mouth opening under 2 cm for 2 weeks", ["Open as widely as possible", "Avoid opening for 24 hours only", "No restriction is needed"], "This is the specific post-reduction instruction in the deck."], true)
    ]),

    O("15-zygomatic-fractures", "15. Zygomatic Fractures", [
      K("Simple arch versus tripod", `${T(["Feature", "Simple zygomatic arch", "Tripod fracture"], [["Anatomy", "Isolated arch", "Arch plus lateral orbital rim plus infraorbital rim"], ["Mechanism", "Anterior or lateral blunt force", "Higher-energy injury"], ["Findings", "Localized arch injury", "Trismus, diplopia, infraorbital crepitus or paresthesia, and large lateral subconjunctival hemorrhage"], ["Care", "Outpatient OMFS", "Noncontrast CT face, IV antibiotics/fluids, NPO, and emergent OMFS"]])}<p>A tripod fracture may also injure the parotid gland or facial nerve.</p>`,
      ["Which structures define a tripod fracture?", "Zygomatic arch, lateral orbital rim, and infraorbital rim", ["Hard palate only", "Nasal septum only", "Mandibular condyle only"], "Three connected zygomatic supports are disrupted."],
      ["Facial trauma causes diplopia, trismus, and infraorbital paresthesia. Which injury is most likely?", "Tripod fracture", ["Simple arch fracture", "Anterior epistaxis", "Auricular hematoma"], "Orbital involvement and infraorbital sensory change distinguish the tripod injury."], true)
    ]),

    O("16-le-fort-fractures", "16. Le Fort Fractures", [
      K("Classification", `${T(["Type", "Mobile segment", "Pertinent findings"], [["Le Fort I", "Hard palate and upper teeth", "Facial edema, maxillary crepitus, malocclusion, bilateral epistaxis; nasal bridge stays stable"], ["Le Fort II", "Upper teeth, palate, and nose", "Donkey-face lengthening, bilateral epistaxis, infraorbital paresthesia, buccal/periorbital/subconjunctival ecchymosis"], ["Le Fort III", "Entire face; globes remain fixed", "Dish face, severe airway obstruction or hemorrhage, epistaxis with CSF rhinorrhea, and movement of maxilla, nose, and zygoma"]])}`,
      ["In which Le Fort fracture do only the hard palate and upper teeth move?", "Le Fort I", ["Le Fort II", "Le Fort III", "Tripod fracture"], "Le Fort I separates the lower maxilla."],
      ["The upper teeth, palate, and nose move together and the face appears lengthened. Which class is this?", "Le Fort II", ["Le Fort I", "Le Fort III", "Simple zygomatic arch fracture"], "The pyramidal Le Fort II pattern creates the donkey-face appearance."], true),
      K("High-risk Le Fort III", `<p>Le Fort III produces craniofacial separation: the whole face moves while the globes remain fixed. It carries severe airway and hemorrhage risk. Use noncontrast CT of the face, secure the airway, begin IV antibiotics, and obtain emergent OMFS consultation.</p>`,
      ["Which Le Fort injury causes the entire face to shift?", "Le Fort III", ["Le Fort I", "Le Fort II", "Isolated nasal fracture"], "Le Fort III is complete craniofacial separation."],
      ["A patient has a dish-face deformity, CSF rhinorrhea, and the whole face moves. What is required?", "Airway management and emergent OMFS care", ["Outpatient observation only", "Ear irrigation", "Routine dental cleaning"], "Le Fort III threatens the airway and can bleed severely."], true)
    ]),

    O("17-nasal-fracture", "17. Nasal Fractures", [
      K("Diagnosis and management", `<p>Direct impact causes swelling and deformity. Examine the entire face and always look for a septal hematoma. An isolated nasal fracture is a <strong>clinical diagnosis</strong>; CT is not needed, and ultrasound is an alternative to plain radiography.</p><p>Reduction of a displaced fracture is not an emergency because edema interferes. Give analgesia and arrange ENT or plastics review within 1 week. An overlying laceration makes the fracture open and requires antibiotics.</p>`,
      ["What diagnostic approach is appropriate for an isolated nasal fracture?", "Clinical diagnosis without routine CT", ["MRI/MRV in every case", "CTA of the neck", "Lumbar puncture"], "The deck says isolated nasal fractures do not require CT."],
      ["A stable patient has an uncomplicated displaced nasal fracture with marked swelling. What is appropriate?", "Analgesia and ENT/plastics follow-up within 1 week", ["Emergency reduction through maximal edema", "No follow-up", "Posterior packing and admission"], "Delayed specialist assessment allows edema to fall."], true),
      K("Complications to exclude", `<p>Potential problems include septal hematoma, open fracture when lacerated, and deformity. Clear or bloody rhinorrhea after broader facial trauma raises concern for CSF rather than an isolated fracture.</p>`,
      ["Which urgent associated injury must be excluded during a nasal-fracture examination?", "Septal hematoma", ["Cerumen impaction", "BPPV", "Acoustic neuroma"], "Septal hematoma can destroy cartilage if missed."],
      ["A nasal fracture has an overlying skin laceration. How is it classified?", "Open fracture requiring antibiotics", ["Closed uncomplicated fracture", "Le Fort I by definition", "No fracture"], "The laceration opens communication to the fracture."], true)
    ]),

    O("18-septal-hematoma", "18. Septal Hematoma", [
      K("Recognition, complications, and drainage", `<p>After direct trauma, blood can collect between the perichondrium and anterior septal cartilage, disrupting its blood supply. The septum appears blue, boggy, asymmetric, and swollen medially; external trauma may be absent.</p><p>Complications include abscess, septal perforation, cartilage necrosis, and <strong>saddle-nose deformity</strong>. Definitive treatment is urgent incision and drainage.</p>`,
      ["What does a septal hematoma look like?", "Blue, boggy, asymmetric medial septal swelling", ["A chalky white tympanic plaque", "A thumb sign", "A fixed dilated pupil"], "This is the physical description used in the lecture."],
      ["A patient has boggy blue septal swelling after trauma. What is definitive management?", "Urgent incision and drainage", ["Wait for spontaneous resolution", "Cold-water irrigation", "Mandibular reduction"], "Drainage preserves cartilage blood supply and prevents saddle nose."], true)
    ]),

    O("19-deep-neck-infections", "19. Deep Neck and Airway Infections", [
      K("Peritonsillar abscess", `<p>PTA is a polymicrobial abscess between the tonsillar capsule and surrounding muscles. Group A strep, MSSA/MRSA, and anaerobes are listed; GAS is the most common organism. It affects adolescents and young adults, especially with prior PTA, smoking, periodontal disease, chronic tonsillitis, or repeated antibiotics.</p><p>Look for severe unilateral throat pain, fever, uvular deviation away, unilateral tonsillar enlargement, trismus, drooling, dysphagia, referred ear pain, cervical nodes, and a <strong>hot-potato voice</strong>. Diagnosis is clinical; contrast CT neck and needle aspiration can confirm, and aspiration is therapeutic. Treat with airway attention, drainage, IV fluids, antibiotics covering gram-positive organisms and anaerobes, dexamethasone, and admission as needed.</p>`,
      ["Which voice quality is classic for peritonsillar abscess?", "Hot-potato voice", ["Normal resonant voice", "Aphonia only", "Isolated tinnitus"], "The quiz sheet highlights the hot-potato voice."],
      ["Unilateral tonsillar swelling, uvular deviation, trismus, and muffled voice suggest what?", "Peritonsillar abscess", ["Epiglottitis", "Anterior epistaxis", "Mandibular dislocation"], "The asymmetric peritonsillar findings distinguish PTA."], true),
      K("Epiglottitis", `<p>Epiglottitis is inflammation of the epiglottis and supraglottic structures. After Hib vaccination it is now primarily linked to respiratory viruses. It can become fatal within hours.</p>${T(["Children", "Adults"], [["Abrupt, rapid illness", "Gradual 1–2 day course"], ["Three Ds: respiratory distress, dysphagia, drooling", "Sore throat, fever, muffled voice, drooling, hoarseness"], ["Tripod/sniffing position", "Airway compromise is less common"]])}<p>Do not use a tongue blade; direct examination can close the airway. ENT laryngoscopy is preferred, and lateral neck radiograph may show the thumb sign. Keep the patient sitting up and attended; call emergency medicine, ENT, and anesthesia, and prepare intubation or tracheostomy/cricothyrotomy. Give humidified oxygen, hydration, ceftriaxone plus vancomycin, and ICU monitoring.</p>`,
      ["What are the three Ds of pediatric epiglottitis?", "Respiratory distress, dysphagia, and drooling", ["Diplopia, diaphoresis, and dysphonia", "Dislocation, deformity, and drainage", "Dizziness, deafness, and discharge"], "The three Ds are a key pediatric recognition set."],
      ["A child sits tripod-style, drools, and has stridor. What should be avoided?", "Tongue-blade examination", ["Keeping the child upright", "Calling airway specialists", "Preparing intubation"], "Pharyngeal stimulation can precipitate complete airway closure."], true),
      K("Ludwig angina", `<p>Ludwig angina is rapidly progressive polymicrobial cellulitis of the submandibular space, involving the sublingual and submylohyoid compartments and spreading into the platysma space. Dental infection causes about two-thirds of cases; diabetes and IV drug use are other risks.</p><p>Trismus, dysphagia, odynophagia, drooling, stiff neck, muffled voice, poor dentition, and woody or brawny submandibular swelling are typical. Stridor, difficulty handling secretions, and cyanosis are late airway signs. Secure a definitive airway first, then obtain CT soft-tissue neck with IV contrast, labs and cultures, emergent ENT consultation, IV fluids, and IV antibiotics.</p>`,
      ["What is the most common source of Ludwig angina?", "Dental infection", ["Ear irrigation", "Nasal spray use", "Mandibular reduction"], "The lecture attributes about two-thirds of cases to dental infection."],
      ["Trismus, anterior neck erythema, induration, and swelling with poor dentition suggest what?", "Ludwig angina", ["Simple pharyngitis", "Anterior epistaxis", "Horner syndrome"], "The quiz sheet pairs this presentation with Ludwig angina."], true)
    ]),

    O("20-retropharyngeal-abscess", "20. Retropharyngeal Abscess", [
      K("Location, pathogens, and risks", `<p>RPA lies behind the posterior pharyngeal wall and anterior to the prevertebral fascia, potentially extending from the skull base to the tracheal bifurcation. It is polymicrobial; common aerobes are <em>S. aureus</em> and <em>S. pyogenes</em> (GAS), with respiratory anaerobes.</p><p>Risks include intraoral procedures, trauma, a fishbone or other foreign body, spread from dental infection, and immunocompromise.</p>`,
      ["Where is a retropharyngeal abscess located?", "Behind the posterior pharyngeal wall and anterior to the prevertebral fascia", ["Within the external ear canal", "Inside Kiesselbach plexus", "Over the zygomatic arch"], "The space can track from skull base toward the chest."],
      ["A fishbone injury is followed by fever, neck pain, dysphagia, and muffled voice. Which infection is concerning?", "Retropharyngeal abscess", ["Auricular hematoma", "Anterior epistaxis", "Mandibular dislocation"], "Foreign-body trauma is a listed risk for RPA."], true),
      K("Clinical course and management", `<p>Features include sore throat, fever, dysphagia, neck pain, cervical lymphadenopathy, poor intake, muffled voice, and respiratory distress; stridor and neck edema occur more often in children. Contrast CT of the neck is the key deep-neck imaging study. Prioritize the airway, arrange ENT care, and give IV antibiotics.</p><p>Complications include mediastinal extension, upper-airway asphyxia from pressure, and aspiration after sudden rupture.</p>`,
      ["Which imaging is most important for suspected deep-neck infection?", "CT neck with IV contrast", ["Noncontrast foot CT", "Weber testing", "Plain dental film only"], "The student quiz and lecture identify contrast CT of the neck."],
      ["Why is retropharyngeal abscess dangerous?", "It can obstruct the airway, rupture with aspiration, or extend into the mediastinum", ["It causes only cosmetic swelling", "It always resolves without treatment", "It affects only hearing"], "The space permits life-threatening airway and chest complications."], true)
    ]),

    O("21-post-tonsillectomy-bleeding", "21. Post-Tonsillectomy Bleeding", [
      K("Timing and emergency care", `<p>Bleeding results when fibrinous debris sloughs from the tonsillar bed, typically on <strong>postoperative days 5–10</strong>. Incidence is higher in the third decade of life, and hemorrhage may be severe or fatal.</p><p>Keep the patient NPO and sitting upright, place cardiac monitoring, establish IV access, and obtain CBC, BMP, type and cross for 2 units, PT/INR, and PTT. Apply direct pressure to the tonsillar bed with gauze on a long clamp moistened with thrombin or epinephrine plus lidocaine. Consider airway control; active bleeding requires immediate ENT care.</p>`,
      ["When does post-tonsillectomy bleeding typically occur?", "Postoperative days 5–10", ["Only during the first hour", "After six months", "Only before surgery"], "Sloughing of fibrinous debris produces delayed bleeding."],
      ["A patient has active tonsillar-bed bleeding 7 days after surgery. What is appropriate?", "Keep upright and NPO, establish IV access, control bleeding, and obtain immediate ENT care", ["Discharge without evaluation", "Lay flat and give food", "Perform ear irrigation"], "Delayed hemorrhage can compromise the airway and become fatal."], true)
    ]),

    O("22-neck-zones", "22. Neck Trauma Zones", [
      K("Three-zone map", `${T(["Zone", "Boundaries", "Key structures shown or emphasized"], [["I", "Clavicles/sternal notch to cricoid cartilage", "Thoracic inlet structures, subclavian vessels, trachea, esophagus, lung apex, and spinal cord"], ["II", "Cricoid cartilage to angle of mandible", "Carotid artery, internal jugular vein, vagus nerve, larynx, trachea, esophagus, and thyroid"], ["III", "Angle of mandible to skull base", "Upper carotid and jugular vessels, pharyngeal structures, and cranial nerves"]])}<p>The zones historically helped determine mandatory exploration versus additional testing. The anterior triangle contains the carotid artery, internal jugular vein, vagus nerve, thyroid, larynx, trachea, and esophagus. The posterior triangle has fewer vital structures, though its base contains the subclavian artery and brachial plexus.</p>`,
      ["Which zone extends from the cricoid cartilage to the angle of the mandible?", "Zone II", ["Zone I", "Zone III", "Posterior triangle only"], "Zone II is the middle and most exposed neck zone."],
      ["The recall sheet asks where the spinal cord is represented in the neck-zone map. Which zone is emphasized?", "Zone I", ["Zone II only", "Zone III only", "No neck zone"], "The lower zone includes the vertebral and spinal structures entering the thoracic inlet."], true),
      K("Trauma priorities", `<p>Neck trauma can injure vascular, airway, digestive, and spinal structures. Use a hard cervical collar, secure the airway, monitor cardiac and neurologic status, establish IV hydration, and obtain surgical consultation. Portable chest radiograph is the first imaging study to evaluate pneumothorax, hemothorax, or mediastinal air; noncontrast cervical CT evaluates bone, and CTA evaluates vascular injury.</p>`,
      ["What is the first imaging study listed in initial neck-trauma management?", "Portable chest radiograph", ["MR venography", "Dental panoramic film", "Sinus ultrasound"], "The film screens for thoracic complications and mediastinal air."],
      ["Which study evaluates suspected vascular injury in the neck?", "CTA of the neck", ["Noncontrast head CT only", "Weber test", "Tympanometry"], "CTA demonstrates dissections and other vascular injury."], true)
    ]),

    O("23-neck-fascial-layers", "23. Neck Fascial Layers", [
      K("Layers and why they matter", `${T(["Layer", "Lecture definition"], [["Superficial", "Platysma directly below the skin"], ["Middle", "Pretracheal and retropharyngeal layers"], ["Deep", "Prevertebral tight fascial compartments"]])}<p>A wound that does not penetrate the platysma is not considered life-threatening in the lecture. If the platysma is violated, assume significant injury, obtain immediate surgical consultation, and never probe beneath it because probing may disrupt hemostasis.</p><p>Confined bleeding, inflammation, or infection can compromise the airway. Fascial spaces also allow infection to spread from the face through the neck into the chest.</p>`,
      ["Which fascial layer contains the platysma?", "Superficial layer", ["Middle layer", "Deep layer", "Retropharyngeal layer only"], "The quiz sheet directly tests platysma as superficial."],
      ["A penetrating wound violates the platysma. What should be assumed?", "Potential significant neck injury requiring immediate surgical consultation", ["The wound is harmless", "It should be probed deeply", "Only skin care is needed"], "Platysma violation changes the injury to a high-risk penetrating wound."], true),
      K("Concerning findings", `<p>Voice change, drooling, resting stridor, trismus, persistent tachycardia, ill appearance, and trauma raise concern for dangerous neck infection or confined swelling. Dysphagia, neck swelling, and pooled saliva are additional deep-neck warning findings.</p>`,
      ["Which finding is concerning in a neck infection?", "Resting stridor", ["Normal voice", "Improved swallowing", "Isolated cerumen"], "Stridor signals threatened airway."],
      ["A patient with neck swelling develops voice change, drooling, and trismus. What is the priority concern?", "Airway compromise from deep-neck disease", ["Uncomplicated cerumen impaction", "BPPV", "Presbycusis"], "Confined fascial-space disease can rapidly narrow the airway."], true)
    ]),

    O("24-hard-soft-signs", "24. Hard vs Soft Neck-Trauma Signs", [
      K("The four highlighted signs", `${T(["Hard signs highlighted on the slides", "Soft signs highlighted on the slides"], [["Hypotension in the ED", "Hypotension in the field"], ["Active arterial bleeding", "Hoarseness"], ["Diminished carotid pulse", "Nonexpanding large hematoma"], ["Expanding hematoma", "Stridor"]])}<p>Other listed hard signs include thrill or bruit, lateralizing neurologic signs, hemothorax over 1000 mL, air bubbling through the wound, hemoptysis, hematemesis, and tracheal deviation. Other soft signs include a history of arterial bleeding, unexplained bradycardia, apical capping, vocal-cord paralysis, subcutaneous emphysema, and CN VII injury.</p>`,
      ["Which is one of the four highlighted hard signs?", "Expanding hematoma", ["Hoarseness", "Nonexpanding hematoma", "Hypotension only in the field"], "Expanding hematoma is highlighted as a hard sign."],
      ["A stable trauma patient has hoarseness but no active bleeding. How is hoarseness classified?", "Soft sign", ["Hard sign", "No sign of neck injury", "A basilar-skull sign"], "Hoarseness is one of the four highlighted soft signs."], true),
      K("Therapeutic importance", `<p>Hard signs indicate severe injury and require immediate transfer to the operating room for surgical exploration. Aggressive airway management is also indicated for acute respiratory distress, obstruction by blood or secretions, massive neck emphysema, tracheal shift, altered mental status, or an expanding hematoma.</p><p>When the patient is stable without hard signs, further evaluation may include cervical-spine CT, neck CTA, esophagram or endoscopy, and laryngoscopy or bronchoscopy according to the injured zone and suspected structure.</p>`,
      ["What do hard signs imply after neck trauma?", "Severe injury requiring immediate operative exploration", ["Safe discharge without testing", "Only outpatient follow-up", "Routine ear drops"], "The slide notes direct transfer to the operating room."],
      ["A trauma patient is hypotensive in the ED with active arterial neck bleeding. What is the disposition?", "Emergent operation with surgical management", ["Delay for routine clinic review", "Discharge after observation", "Nasal cautery only"], "Two highlighted hard signs mandate operative exploration."], true)
    ]),

    O("25-vascular-dissection", "25. Carotid and Vertebral Dissection", [
      K("Carotid injury", `<p>A dissection is injury within the arterial wall that can narrow or obstruct flow and lead to thrombosis or stroke. Carotid injuries may also form a pseudoaneurysm.</p><p>Causes include neck hyperextension compressing the carotid against a cervical transverse process, hyperflexion compressing it between the mandible and spine, direct blows, intraoral injury, and basilar skull fracture tearing the intracranial carotid. Findings include hematoma, bruit, absent pulse, Horner syndrome, TIA, or neurologic deficit; deficits may be delayed for weeks. Use CTA of the head and neck.</p>`,
      ["Which imaging evaluates suspected carotid dissection?", "CTA of the head and neck", ["Lateral neck radiograph only", "Dental film", "Tympanometry"], "CTA demonstrates the injured vessel and loss or tapering of contrast flow."],
      ["After hyperextension injury, a patient develops Horner syndrome and a delayed focal deficit. What is concerning?", "Carotid dissection", ["Anterior epistaxis", "Auricular hematoma", "Nasal foreign body"], "The mechanism and delayed neurovascular findings fit carotid injury."], true),
      K("Vertebral artery injury", `<p>The vertebral artery's relationship to the cervical bones and ligaments makes it vulnerable. Mechanisms listed include chiropractic neck manipulation, yoga exercise, and painting ceilings. Injury may cause thrombotic occlusion, hematoma, dissection, or pseudoaneurysm.</p><p>Symptoms may be absent, intermittent, transient, or delayed and include headache, neck pain, ipsilateral facial paralysis, and Horner syndrome. <strong>CTA of the head and neck is the gold standard.</strong> Treatment options include anticoagulation to prevent stroke and thrombus, surgery, or stenting.</p>`,
      ["What study is the gold standard for vertebral-artery injury in this lecture?", "CTA of the head and neck", ["Noncontrast facial CT", "Chest radiograph", "Ultrasound of the ear"], "The vertebral-injury slide explicitly calls CTA the gold standard."],
      ["Headache and neck pain appear after chiropractic manipulation, with intermittent neurologic symptoms. What should be evaluated?", "Vertebral artery dissection", ["Septal hematoma", "Peritonsillar abscess", "Anterior epistaxis"], "Manipulation is a listed mechanism and symptoms may be delayed or intermittent."], true)
    ])
  ];
}());
