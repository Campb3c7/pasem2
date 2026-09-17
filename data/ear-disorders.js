/* Ear Disorders content derived only from "S-Ear Disorders-Diem 2026.pptx", the instructor comparison table, and matching objectives. */
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
    "01-otalgia": "Create a list of appropriate differentials for a chief complaint of otalgia",
    "02-tinnitus": "Define tinnitus and recall potential causes",
    "03-cerumen": "Recognize cerumen impaction and the symptoms, contraindications of cerumenolytics, and appropriate treatment and patient education as it pertains to prevention and removal of cerumen. Of the list of Cerumenolytics, recall Debrox and hydrogen peroxide.",
    "04-otitis-externa": "Define otitis externa, the common pathogens, physical exam findings, and appropriate treatment.",
    "05-malignant-oe": "Define malignant otitis externa and recall common pathogens and special populations at risk. Compare and contrast physical exam findings of malignant otitis externa with otitis externa. Given a clinical vignette develop appropriate diagnostic workup and appropriate treatment of malignant otitis externa.",
    "06-etd": "Explain eustachian tube function and how dysfunction can occur. Recognize physical exam findings seem with eustachian tube dysfunction and appropriate treatment and patient education.",
    "07-barotrauma": "Recall when barotrauma may occur, recognize physical exam findings and appropriate patient education.",
    "08-tm-perforation": "Recall common causes of tympanic membrane perforation, signs and symptoms, and medical management.",
    "09-otitis-media": "Compare and contrast serous, acute, and chronic otitis media, common associated pathogen if present, etiologies and risk factors, symptoms, physical exam finding with each, and appropriate treatment (Don't need to know dosing).",
    "10-recurrent-aom": "Choose correct antibiotics for a patient who has a reoccurrence of acute otitis media in less than a month.",
    "11-om-complications": "Recall complications of otitis media.",
    "12-bullous-myringitis": "Recall usual pathogen and physical exam findings with Bullous myringitis.",
    "13-tympanosclerosis": "Describe tympanosclerosis physical exam finding.",
    "14-cholesteatoma": "Define what a Cholesteatoma and the pathophysiology, risk factors, symptoms, and physical exam findings.",
    "15-mastoiditis": "Recall mastoiditis, common pathogens, physical exam finding, diagnostic workup, and appropriate management.",
    "16-equilibrium": "Explain how the components of the vestibular apparatus work to maintain our equilibrium.",
    "17-central-peripheral": "Compare and contrast central vs. peripheral vertigo presenting symptoms and physical exam findings.",
    "18-vertigo-workup": "Describe the initial workup of vertigo from a physical exam standpoint and the diagnostic approach.",
    "19-vertigo-disorders": "Compare and contrast benign paroxysmal positional vertigo, labyrinthitis, vestibular neuronitis, and Meniere’s Disease in regard to signs and symptoms, diagnosis, and treatment.",
    "20-bppv-maneuvers": "Recall special physical exam maneuvers for BPPV.",
    "21-hearing-types": "Compare and Contrast Conductive and Sensorineural hearing loss.",
    "22-conductive-mechanisms": "Recall the four mechanisms of conductive hearing loss and provide examples of each.",
    "23-otosclerosis": "Define Otosclerosis its clinically presentation",
    "24-sensorineural": "Recall etiologies discussed which may cause sensorineural. Compare and contrast clinical presentation and epidemiology for sudden sensory hearing loss and Presbycusis.",
    "25-ototoxicity": "Recall classes associated with ototoxicity.",
    "26-weber-rinne": "Interpret Weber and Rinne physical exam testing if given a clinical vignette and formulate a diagnosis.",
    "27-acoustic-neuroma": "Define acoustic neuroma and the common symptoms patient may present with regarding cranial nerve involvement."
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

  window.EAR_DISORDER_OBJECTIVES = [
    O("01-otalgia", "1. Otalgia Differential", [
      K("Primary and referred ear pain", `<p>Otalgia means ear pain or ache. Cranial nerves V, VII, IX, and X provide sensory innervation to the ear, so disease in other structures supplied by these nerves can refer pain to the ear.</p>${T(["Source", "Examples"], [["Ear", "Cerumen impaction, otitis externa, otitis media, barotrauma, or tympanic-membrane perforation"], ["Head and neck", "Sinus, oral cavity, pharynx, larynx, dentition, TMJ, or salivary-gland disease"]])}`,
      ["Which cranial nerves contribute sensory innervation relevant to otalgia?", "V, VII, IX, and X", ["I, II, III, and IV", "II, III, IV, and VI", "VIII only"], "Shared sensory innervation explains referred ear pain."],
      ["A patient reports ear pain but has a normal ear examination. What should the differential include?", "Referred pain from dentition, TMJ, pharynx, larynx, sinuses, or salivary glands", ["Only otitis media", "Only cerumen impaction", "Only vestibular disease"], "Normal otoscopy should broaden the search beyond the ear."], true),
      K("Cancer warning", `<p>In a smoker with otalgia and no explanatory physical-examination finding, arrange ENT referral for laryngoscopy to exclude laryngopharyngeal carcinoma.</p>`,
      ["What is the next step for unexplained otalgia in a smoker with a normal ear examination?", "ENT referral for laryngoscopy", ["Cerumenolytics", "Epley maneuver", "Watchful waiting only"], "The deck flags occult laryngopharyngeal carcinoma."],
      ["A smoker has persistent ear pain, normal otoscopy, and no local cause. What serious referred source must be excluded?", "Laryngopharyngeal carcinoma", ["BPPV", "Otosclerosis", "Presbycusis"], "The absence of ear findings does not remove a malignant referred-pain source."], true)
    ]),

    O("02-tinnitus", "2. Tinnitus", [
      K("Definition and pattern", `<p>Tinnitus is the perception of sound without an external source. Patients describe buzzing, ringing, pulsation, hissing, or roaring. It may be continuous or intermittent, unilateral or bilateral, and occurs most often after age 40. Damaged cochlear hair cells are a suspected source.</p>`,
      ["How is tinnitus defined?", "Perception of sound without an external source", ["Loss of middle-ear pressure", "Inflammation of the tympanic membrane", "A spinning sensation"], "The perceived sound occurs without an outside stimulus."],
      ["A patient hears intermittent ringing when the room is silent. Which symptom is this?", "Tinnitus", ["Vertigo", "Otalgia", "Otorrhea"], "Ringing without an external source meets the definition."], true),
      K("Causes, evaluation, and treatment", `${T(["Category", "Causes"], [["Vascular", "Arterial bruit or arteriovenous malformation"], ["Otologic", "Conductive or sensorineural hearing loss, eustachian-tube dysfunction, or bilateral medication ototoxicity"], ["Other", "Head trauma, hypertension, TMJ disorder, depression, or anxiety"], ["Neurologic", "Acoustic neuroma, multiple sclerosis, or benign intracranial hypertension"]])}<p>History and examination guide evaluation. ENT referral and audiometry help identify the source. MRI with contrast may evaluate suspected vascular or neurologic causes. Treatment targets the cause. Antidepressants may improve tolerance but do not change the tinnitus itself.</p>`,
      ["How does medication-related tinnitus usually present?", "Bilaterally", ["Only unilaterally", "Only with otorrhea", "Only during head movement"], "The lecture contrasts bilateral ototoxic tinnitus with unilateral warning causes."],
      ["Unilateral tinnitus raises concern for a neurologic lesion. Which diagnosis is listed?", "Acoustic neuroma", ["Cerumen impaction only", "Serous otitis media only", "Barotrauma only"], "Acoustic neuroma is a listed neurologic cause."], true)
    ]),

    O("03-cerumen", "3. Cerumen Impaction", [
      K("Symptoms and risks", `<p>The external canal normally moves cerumen laterally. Cerumen creates a hydrophobic, acidic protective environment. Impaction may cause gradual hearing loss, tinnitus, pruritus, fullness, cough, odor, dizziness, and occasional otalgia.</p><p>Q-tips, hearing aids, ear plugs, older age, and a narrow or tortuous canal increase risk.</p>`,
      ["Which symptom pattern is consistent with cerumen impaction?", "Gradual hearing loss with fullness or pruritus", ["Proptosis with gaze palsy", "Episodic vertigo with low-frequency loss", "Postauricular swelling"], "Obstructive canal symptoms characterize impaction."],
      ["Why can Q-tip use worsen cerumen impaction?", "It pushes cerumen deeper into the canal", ["It improves lateral migration", "It acidifies the canal", "It treats otitis externa"], "Instrumentation is a common cause of impaction."], true),
      K("Removal options and precautions", `${T(["Method", "Key point"], [["Irrigation", "Use warm or tepid sterile water or saline; cold solution may cause vertigo"], ["Cerumenolytic", "Apply before removal; Debrox and hydrogen peroxide are required examples"], ["Manual", "Experienced clinician uses curette or suction, especially in the lateral canal"]])}<p>Do not irrigate with tympanic-membrane perforation or prior ear surgery. Risks include canal trauma and TM perforation. Recurrent or resistant cases need ENT referral.</p>`,
      ["Which two cerumenolytics does the objective specifically require?", "Carbamide peroxide (Debrox) and hydrogen peroxide", ["Ciprofloxacin and dexamethasone", "Meclizine and lorazepam", "Amoxicillin and Augmentin"], "The objective names Debrox and hydrogen peroxide."],
      ["A patient has a known TM perforation and obstructing cerumen. Should routine irrigation be used?", "No", ["Yes, with cold water", "Yes, with high pressure", "Only with tap water"], "Perforation is a contraindication to irrigation."], true),
      K("Cerumenolytic contraindications and education", `<p>Avoid cerumenolytics with TM damage, frequent infection, prior perforation, otologic surgery, ear drainage, or ear pain. Complications include trapped solution, irritation, and canal-skin injury.</p><p>For outpatient drops, the deck lists 5–10 drops twice daily for no more than 3–5 days. Clean only the external ear with a finger or washcloth. Avoid Q-tips and ear candling because candling lacks proven benefit and can cause thermal injury.</p>`,
      ["Which history contraindicates a cerumenolytic?", "Prior tympanic-membrane perforation", ["Hearing-aid use alone", "Older age alone", "Gradual fullness alone"], "TM damage and prior ear surgery are key contraindications."],
      ["What prevention advice should accompany cerumen removal?", "Clean only the outer ear and avoid Q-tips and ear candling", ["Insert cotton swabs deeply", "Use candles weekly", "Irrigate after every shower"], "The lecture repeatedly warns against inserting objects."], true)
    ]),

    O("04-otitis-externa", "4. Otitis Externa", [
      K("Definition, risks, and pathogens", `<p>Otitis externa is inflammation and edema of the external-canal skin and is a common cause of otalgia. Water exposure, excessive cleaning, trauma, devices, dermatitis, or psoriasis can disrupt cerumen and raise canal pH.</p>${T(["Cause", "Organisms"], [["Bacterial", "Pseudomonas, Staphylococcus aureus, or S. epidermidis"], ["Fungal", "Aspergillus niger or Candida, especially in tropical climates or immunocompromise"]])}`,
      ["Which pathogen is strongly associated with bacterial otitis externa?", "Pseudomonas", ["Streptococcus pneumoniae only", "Mycoplasma pneumoniae only", "Influenza virus only"], "Pseudomonas is a leading gram-negative cause."],
      ["Ear pain follows swimming and canal trauma from Q-tips. What diagnosis fits?", "Otitis externa", ["Otosclerosis", "Presbycusis", "BPPV"], "Water and trauma are classic risks for swimmer's ear."], true),
      K("Examination", `<ul><li>Erythematous, edematous canal skin</li><li>Purulent canal exudate</li><li>Pain with tragal or auricular manipulation</li><li>Possible canal obstruction that prevents TM visualization</li><li>The TM may look red but still moves with pneumatic otoscopy</li></ul><p>Fungal disease causes prominent itching and foul odor. Aspergillus resembles coal dust; Candida produces soft white sebaceous material.</p>`,
      ["Which examination finding favors otitis externa?", "Pain with manipulation of the tragus or auricle", ["Anteroinferior pinna displacement", "Bilateral low-frequency loss", "A chalky TM plaque"], "Movement of the outer ear stresses the inflamed canal."],
      ["Black coal-dust material appears in an itchy, foul-smelling canal. Which organism is likely?", "Aspergillus niger", ["Candida", "S. pneumoniae", "H. influenzae"], "The deck uses coal dust to describe Aspergillus."], true),
      K("Treatment", `<p>Protect the ear from moisture and trauma. Remove purulent debris so drops can penetrate. A wick helps drops reach a canal narrowed by edema.</p>${T(["Situation", "Treatment"], [["Very mild bacterial disease", "2% acetic acid with a steroid and close follow-up"], ["Typical bacterial disease", "Topical ciprofloxacin/dexamethasone or neomycin/polymyxin B product"], ["Fungal disease", "Thorough cleaning plus clotrimazole 1% or 2% acetic acid with steroid"], ["Immunocompromise or spread beyond canal", "Topical treatment plus an oral antibiotic such as ciprofloxacin"]])}<p>Fluoroquinolone drops are not ototoxic and are safe with TM perforation. Reexamine or refer if the patient worsens or fails to improve within 48 hours.</p>`,
      ["Which otic antibiotic class is safe when the TM is perforated?", "Fluoroquinolones", ["Aminoglycosides in every case", "Oral macrolides only", "No topical therapy"], "The deck identifies topical fluoroquinolones as non-ototoxic."],
      ["Severe canal edema prevents drops from entering. What adjunct should be placed?", "An ear wick", ["A tympanostomy tube", "A hearing aid", "A cotton swab"], "The wick carries medication into the narrowed canal."], true)
    ]),

    O("05-malignant-oe", "5. Malignant Otitis Externa", [
      K("Definition and high-risk patients", `<p>Malignant otitis externa is otitis externa that progresses into temporal-bone osteomyelitis, with infection extending through the external canal into the skull base. It can be life-threatening.</p><p><strong>Pseudomonas aeruginosa</strong> is the most common pathogen. Diabetes, HIV, and other immunocompromised states create the highest risk.</p>`,
      ["What defines malignant otitis externa?", "External-canal infection extending to skull-base osteomyelitis", ["Middle-ear effusion only", "A TM blister", "A benign vestibular tumor"], "Bone involvement distinguishes malignant disease."],
      ["A patient with diabetes has persistent severe external-ear infection. Which pathogen is most likely in MOE?", "Pseudomonas aeruginosa", ["Rhinovirus", "Mycoplasma pneumoniae", "Candida only"], "Pseudomonas is the dominant organism."], true),
      K("Ordinary versus malignant otitis externa", `${T(["Finding", "Otitis externa", "Malignant otitis externa"], [["Pain", "Canal pain, often with tragal movement", "Pain out of proportion to examination"], ["Tissue", "Canal erythema, edema, and exudate", "Granulation at the floor of the osseocartilaginous junction; possible exposed bone"], ["Extension", "Confined to canal", "Periauricular soft tissue, skull base, or cranial nerves"], ["TM", "May appear red but mobile", "Usually intact"]])}<p>MOE may cause trismus, tenderness between the mandibular ramus and mastoid tip, facial palsy, or other CN V–XII abnormalities.</p>`,
      ["Which finding is virtually pathognomonic for malignant otitis externa?", "Granulation tissue at the osseocartilaginous junction", ["A mobile red TM", "A retracted TM", "A chalky white TM patch"], "The deck highlights this granulation tissue."],
      ["Severe pain is disproportionate to canal findings in an immunocompromised patient. What should be suspected?", "Malignant otitis externa", ["Simple cerumen impaction", "BPPV", "Presbycusis"], "Disproportionate pain is a key warning sign."], true),
      K("Urgent workup and treatment", `<p>Obtain an emergent ENT consultation, CT, CBC, BMP, CRP, and ESR. CT confirms osseous erosion. Examine cranial nerves V–XII and mental status for intracranial progression. Admit the patient.</p><p>Begin IV ciprofloxacin. After clinical response and falling inflammatory markers, transition to oral ciprofloxacin. Resistant or nonresponsive <em>Pseudomonas</em> calls for piperacillin-tazobactam. Continue antibiotics for 6–8 weeks to prevent relapse. Debride infected bone when medical therapy fails.</p>`,
      ["Which imaging finding confirms malignant otitis externa?", "Osseous erosion on CT", ["An air-bone gap", "Low-frequency loss", "A flat tympanogram alone"], "Temporal-bone erosion demonstrates osteomyelitis."],
      ["A diabetic patient has MOE with facial palsy and granulation tissue. What disposition is appropriate?", "Admission with emergent ENT consultation and IV antipseudomonal therapy", ["Routine ear drops only", "Home Epley maneuver", "Watchful waiting"], "MOE is a skull-base emergency."], true)
    ]),

    O("06-etd", "6. Eustachian Tube Dysfunction", [
      K("Function and dysfunction", `<p>The eustachian tube connects the middle ear to the throat. It normally stays closed and opens with swallowing or yawning to equalize pressure. Ventilation, drainage, and mucociliary clearance remove nasopharyngeal flora from the middle ear.</p><p>When edema blocks the tube, trapped air is absorbed and negative middle-ear pressure develops. Common causes include URI, allergy, tobacco smoke or other irritants, reflux, pressure change, and acquired anatomic abnormalities.</p>`,
      ["What are the main functions of the eustachian tube?", "Ventilation, pressure equalization, drainage, and mucociliary clearance", ["Cochlear transduction", "Sound localization only", "Cerumen production"], "The tube protects and ventilates the middle ear."],
      ["A URI causes tubal edema and negative middle-ear pressure. What diagnosis fits?", "Eustachian tube dysfunction", ["Acoustic neuroma", "Otosclerosis", "Meniere disease"], "URI-related edema is the most common mechanism."], true),
      K("Presentation, examination, and treatment", `<p>Patients report fullness, reduced hearing, and crackling or popping with swallowing when the tube is partly blocked. Examination shows a retracted TM and reduced movement with pneumatic otoscopy.</p><p>Treatment may include short-term systemic or intranasal decongestants, auto-inflation, and intranasal corticosteroids or desensitization for allergy. Do not use auto-inflation during intranasal infection. Avoid air travel, rapid altitude change, and diving while symptomatic. Refractory disease may require tympanostomy tubes.</p>`,
      ["What TM findings suggest eustachian tube dysfunction?", "Retraction and decreased pneumatic mobility", ["Bullae with normal middle ear", "Keratin debris", "Chalky plaques only"], "Negative pressure retracts the drum."],
      ["A patient with active nasal infection asks about auto-inflation. What does the lecture advise?", "Avoid auto-inflation during intranasal infection", ["Perform it hourly", "Dive to equalize pressure", "Use a Q-tip instead"], "Positive pressure could be harmful during infection."], true)
    ]),

    O("07-barotrauma", "7. Barotrauma", [
      K("Causes and prevention", `<p>Barotrauma occurs when poor eustachian-tube function prevents pressure equalization. It develops during airplane descent, rapid altitude change, or diving. Diving creates greater pressure stress, especially during the first 15 feet of descent.</p><p>Prevention includes a decongestant when appropriate and frequent swallowing, chewing, yawning, or auto-inflation. Divers should descend slowly and equalize repeatedly.</p>`,
      ["During which phase of flight is ear barotrauma most likely?", "Descent", ["Level cruising only", "After landing only", "Takeoff exclusively"], "Increasing ambient pressure during descent stresses the middle ear."],
      ["What should a diver with poor eustachian-tube function do during descent?", "Descend slowly and equalize repeatedly", ["Descend rapidly", "Avoid swallowing", "Use cold-water irrigation"], "Repeated equalization reduces pressure injury."], true),
      K("Findings and management", `<p>Barotrauma causes ear pain, pressure, and dizziness. Examination may show a retracted TM, hemotympanum, or rupture. Severe diving injury can rupture the oval or round window, causing sensorineural loss and vertigo.</p><p>Use decongestants and analgesics and avoid triggering pressure changes. Persistent intolerable otalgia or hearing loss may require ENT myringotomy. A patient with TM perforation must not dive.</p>`,
      ["Which finding can occur with severe barotrauma?", "Hemotympanum or tympanic-membrane rupture", ["Bilateral nasal polyps", "Chalky TM plaque only", "Keratin cyst only"], "Failed pressure equalization can injure the TM and middle ear."],
      ["A diver has a TM perforation. What activity advice is required?", "No diving until healed", ["Continue diving with earplugs", "Use auto-inflation underwater", "Irrigate before each dive"], "Unbalanced thermal stimulation can trigger vertigo, disorientation, and vomiting."], true)
    ]),

    O("08-tm-perforation", "8. Tympanic Membrane Perforation", [
      K("Causes and presentation", `<p>TM perforation may follow barotrauma, direct trauma, or otitis media. Acute pain may subside quickly. Associated symptoms include tinnitus, vertigo, hearing loss, and otorrhea.</p><p>Examination may show blood, a visible tear, or clots and debris. Do not remove clots or debris; obtain ENT consultation.</p>`,
      ["What are common causes of TM perforation?", "Barotrauma, trauma, and otitis media", ["BPPV and presbycusis", "Otosclerosis only", "Cerumen alone"], "These three causes appear in the lecture."],
      ["A patient has sudden ear pain that rapidly improves, followed by drainage and hearing loss. What is likely?", "Tympanic-membrane perforation", ["Acoustic neuroma", "Presbycusis", "Simple tinnitus"], "Pain relief after rupture with otorrhea is characteristic."], true),
      K("Medical management", `<p>Keep water and nonprescribed drops out of the ear until healing occurs. Antibiotics are usually unnecessary unless secondary infection develops; use a topical fluoroquinolone when infection requires treatment.</p><p>About 90% heal without intervention. A perforation persisting for several weeks may require tympanoplasty.</p>`,
      ["What routine instruction follows TM perforation?", "Keep the ear dry", ["Irrigate daily", "Use Q-tips", "Resume diving"], "Water avoidance protects the healing middle ear."],
      ["A traumatic perforation has no infection. Are antibiotics routinely needed?", "No", ["Yes, IV therapy for 8 weeks", "Yes, oral antibiotics indefinitely", "Only antifungals"], "Antibiotics are reserved for secondary infection."], true)
    ]),

    O("09-otitis-media", "9. Otitis Media Comparison", [
      K("Serous otitis media", `<p>Serous otitis media, or otitis media with effusion, results from prolonged eustachian-tube dysfunction. Negative pressure draws transudative fluid into the middle ear. It is common in children; adult triggers include URI, barotrauma, and allergic rhinitis. Persistent unilateral adult disease raises concern for nasopharyngeal carcinoma.</p><p>Symptoms include muffled hearing, ear pulling, balance trouble, and delayed speech. The TM appears dull or cloudy with bubbles and altered mobility, and hearing loss is conductive. Watchful waiting is typical because many cases resolve within 3–6 months. Selected prolonged, symptomatic, high-risk, or hearing-loss cases need tubes.</p>`,
      ["What causes serous otitis media?", "Negative pressure from prolonged eustachian-tube dysfunction", ["Skull-base osteomyelitis", "Stapes fixation", "A vestibular tumor"], "Tubal dysfunction produces sterile middle-ear fluid."],
      ["An adult has persistent unilateral middle-ear effusion. What serious cause must be considered?", "Nasopharyngeal carcinoma", ["BPPV", "Presbycusis", "Ototoxicity"], "The lecture flags unilateral persistent adult effusion."], true),
      K("Acute otitis media", `<p>AOM usually follows viral URI and eustachian-tube obstruction, then bacterial colonization. It peaks from 6–24 months. Common pathogens are <em>S. pneumoniae</em>, <em>H. influenzae</em>, and <em>S. pyogenes</em>.</p><p>Symptoms include otalgia, pressure, reduced hearing, fever, feeding trouble, or irritability. Diagnosis requires acute onset, middle-ear effusion, and inflammation. A bulging erythematous TM with reduced mobility or a flat tympanogram supports AOM. Treat pain. Amoxicillin is first line when antibiotics are indicated.</p>`,
      ["What three elements establish AOM?", "Acute onset, middle-ear effusion, and middle-ear inflammation", ["Tinnitus, vertigo, and fullness", "Granulation, trismus, and bone erosion", "Itching, odor, and coal-dust debris"], "All three diagnostic criteria must be present."],
      ["A febrile toddler has otalgia and a bulging immobile TM. What diagnosis fits?", "Acute otitis media", ["Serous otitis media", "Otitis externa", "Otosclerosis"], "Bulging plus effusion and acute inflammation supports AOM."], true),
      K("Chronic suppurative otitis media", `<p>CSOM follows recurrent AOM and features a TM perforation with persistent purulent drainage. Pain usually appears only during acute exacerbations. Conductive loss results from TM or ossicular damage.</p><p>Organisms differ from AOM and include <em>Pseudomonas aeruginosa</em>, <em>Proteus</em>, <em>S. aureus</em>, and mixed anaerobes. Remove infected debris, keep water out, and use topical ofloxacin or ciprofloxacin. Culture-directed oral antibiotics follow treatment failure. Evaluate refractory disease for cholesteatoma; definitive TM repair may eliminate infection and improve hearing.</p>`,
      ["What is the clinical hallmark of chronic suppurative otitis media?", "Purulent discharge through a perforated TM", ["A normal dry TM", "Brief positional vertigo", "Low-frequency tinnitus alone"], "Persistent otorrhea distinguishes CSOM."],
      ["Recurrent infections, TM perforation, and chronic painless purulent drainage suggest what?", "Chronic suppurative otitis media", ["Serous otitis media", "BPPV", "Otosclerosis"], "The chronic drainage and perforation match CSOM."], true)
    ]),

    O("10-recurrent-aom", "10. Recurrent AOM Antibiotics", [
      K("Recurrence within 30 days", `<p>Amoxicillin is the usual first-line antibiotic for AOM. If the child received amoxicillin within the previous 30 days, has concurrent purulent conjunctivitis, or needs additional beta-lactamase coverage, choose <strong>amoxicillin-clavulanate</strong>.</p><p>Reevaluate symptoms that worsen or fail to respond within 48–72 hours and change treatment when indicated.</p>`,
      ["Which antibiotic is preferred when AOM recurs within one month of amoxicillin?", "Amoxicillin-clavulanate", ["Amoxicillin again without change", "Topical clotrimazole", "Ciprofloxacin ear drops alone"], "Recent amoxicillin use calls for added beta-lactamase coverage."],
      ["A child received amoxicillin three weeks ago and now has recurrent AOM. What should be prescribed?", "Amoxicillin-clavulanate", ["Observation only in every case", "Meclizine", "Fluticasone"], "The recurrence occurred inside the 30-day window."], true),
      K("Recurrent disease", `<p>Recurrent AOM means three episodes in six months or four episodes in twelve months with complete resolution between attacks. Tympanostomy or other ventilating procedures may reduce recurrence when medical management fails.</p>`,
      ["How does the lecture define recurrent AOM?", "Three episodes in 6 months or four in 12 months", ["Two episodes in 5 years", "One prolonged episode", "Any middle-ear effusion"], "These episode thresholds define recurrence."],
      ["A child has four fully resolved AOM episodes in one year. What longer-term intervention may be considered?", "Tympanostomy tubes", ["A hearing aid only", "Epley maneuver", "Cerumen irrigation"], "Ventilation may reduce recurrent disease."], true)
    ]),

    O("11-om-complications", "11. Otitis Media Complications", [
      K("Local and intracranial complications", `<ul><li>Myringosclerosis or tympanosclerosis</li><li>Cholesteatoma</li><li>Acute mastoiditis</li><li>Facial paralysis</li><li>Sigmoid-sinus thrombosis</li><li>Meningitis</li><li>Brain abscess</li></ul>`,
      ["Which are recognized complications of otitis media?", "Cholesteatoma, mastoiditis, facial paralysis, and intracranial infection", ["BPPV and presbycusis only", "Cerumen impaction only", "Allergic rhinitis only"], "The complications may involve the TM, mastoid, facial nerve, venous sinuses, or CNS."],
      ["A patient with otitis media develops postauricular swelling and pinna displacement. Which complication is likely?", "Acute mastoiditis", ["Tympanosclerosis", "Otosclerosis", "BPPV"], "Mastoid inflammation produces postauricular changes."], true),
      K("Escalation warning", `<p>Facial weakness, severe mastoid tenderness, meningeal findings, or neurologic change indicates spread beyond routine middle-ear disease and requires urgent evaluation.</p>`,
      ["Which OM complication involves a cranial nerve?", "Facial paralysis", ["Serous effusion", "Cerumen impaction", "Tinnitus alone"], "Facial-nerve dysfunction can result from spread."],
      ["A patient with AOM develops neck stiffness and altered status. What complication must be considered?", "Meningitis or intracranial extension", ["Simple eustachian-tube dysfunction", "Presbycusis", "Otosclerosis"], "Neurologic signs suggest CNS spread."], true)
    ]),

    O("12-bullous-myringitis", "12. Bullous Myringitis", [
      K("Tympanic bullae", `<p>Bullous myringitis is inflammation with bullae on the tympanic membrane. The infection involves the TM rather than the middle-ear space. The cause is usually viral but can be bacterial.</p><p><em>Mycoplasma pneumoniae</em> was once considered characteristic, but the deck states that it is rarely cultured from bullae. Tympanic blistering is a nonspecific reaction.</p>`,
      ["What is the characteristic examination finding in bullous myringitis?", "Inflammatory bullae on the tympanic membrane", ["Granulation at the canal floor", "A chalky white patch", "A keratin-filled retraction pocket"], "Blistering of the TM defines the condition."],
      ["A TM has painful bullae, but the middle-ear space is not involved. What is the diagnosis?", "Bullous myringitis", ["Acute otitis media", "Cholesteatoma", "Mastoiditis"], "Bullous myringitis centers on the TM."], true),
      K("Etiology caution", `<p>Do not treat <em>Mycoplasma pneumoniae</em> as a required pathogen. Viral infection is usual, bacterial disease remains possible, and the bullous response itself is nonspecific.</p>`,
      ["Which statement about Mycoplasma and bullous myringitis is correct?", "Mycoplasma is rarely cultured and is not pathognomonic", ["It causes every case", "It confirms middle-ear effusion", "It always requires IV ciprofloxacin"], "The lecture explicitly corrects the older association."],
      ["Does a bullous TM automatically identify a single pathogen?", "No", ["Yes, always Mycoplasma", "Yes, always Pseudomonas", "Yes, always Candida"], "The blistering reaction is nonspecific."], true)
    ]),

    O("13-tympanosclerosis", "13. Tympanosclerosis", [
      K("Chalky TM scarring", `<p>Myringosclerosis or tympanosclerosis appears as a <strong>large chalky white patch with irregular margins</strong> on the tympanic membrane. Hyaline material forms within TM layers after a severe episode of otitis media. Prior tympanostomy tubes may also leave this finding.</p><p>It is seldom clinically significant.</p>`,
      ["How does tympanosclerosis appear on otoscopy?", "A chalky white irregular patch on the TM", ["Black coal-dust debris", "A bulging red TM with pus", "Granulation on the canal floor"], "The white plaque represents TM scarring."],
      ["A patient with prior ear tubes has an irregular chalky white TM patch. What is it?", "Tympanosclerosis", ["Cholesteatoma", "Bullous myringitis", "Otitis externa"], "Prior tubes and the plaque-like appearance support tympanosclerosis."], true)
    ]),

    O("14-cholesteatoma", "14. Cholesteatoma", [
      K("Definition and pathophysiology", `<p>A cholesteatoma is a destructive squamous-epithelial cyst in the middle ear that may extend into mastoid air cells. Poor eustachian-tube function creates negative pressure, stretches a weak TM area into a retraction pocket, and traps desquamated keratin. Chronic infection and growth can destroy middle-ear bone.</p>`,
      ["What is a cholesteatoma?", "A destructive keratin-filled epithelial cyst of the middle ear", ["A benign vestibular-nerve tumor", "A TM blister", "A simple sterile effusion"], "Squamous epithelium and keratin form the expanding lesion."],
      ["How does eustachian-tube dysfunction contribute to acquired cholesteatoma?", "Negative pressure forms a retraction pocket that traps keratin", ["It fixes the stapes", "It damages cochlear hair cells", "It dissolves the TM"], "Retraction and keratin accumulation drive the process."], true),
      K("Risks, symptoms, and examination", `<p>Repeated infection is the usual risk. Congenital disease, craniofacial anomalies, and Down syndrome are also associated.</p><p>Symptoms include persistent infection or drainage, recurrent AOM, pressure, hearing loss, and pain that worsens at night. Continued growth may cause dizziness or facial paralysis. Otoscopy may show an epitympanic retraction pocket or marginal TM perforation with white keratin debris or granulation tissue.</p>`,
      ["Which otoscopic finding suggests cholesteatoma?", "A retraction pocket or marginal perforation with keratin debris", ["A mobile normal TM", "Only clear canal fluid", "A fatigable positional nystagmus"], "Keratin in a retraction pocket is characteristic."],
      ["Chronic drainage, nighttime pain, hearing loss, and white debris in a retraction pocket suggest what?", "Cholesteatoma", ["Serous otitis media", "BPPV", "Otosclerosis"], "The symptoms and keratin debris fit cholesteatoma."], true),
      K("Treatment", `<p>Cholesteatoma requires surgical excision. Advanced disease may require mastoidectomy. Medical treatment of chronic drainage does not remove the destructive epithelial cyst.</p>`,
      ["What is definitive treatment for cholesteatoma?", "Surgical excision", ["Watchful waiting alone", "Cerumenolytics", "Epley maneuver"], "The lesion must be removed."],
      ["A large cholesteatoma extends into mastoid air cells. Which procedure may be required?", "Mastoidectomy", ["Myringotomy only", "Stapedectomy", "Cochlear implantation"], "Advanced extension may require mastoid surgery."], true)
    ]),

    O("15-mastoiditis", "15. Mastoiditis", [
      K("Definition, risks, and organisms", `<p>Mastoiditis is extension of middle-ear infection into mastoid air cells. It occurs more often in children and usually complicates AOM. Immunodeficiency and cholesteatoma also increase risk.</p><p>Pathogens include <em>S. pneumoniae</em>, <em>H. influenzae</em>, <em>S. pyogenes</em>, <em>S. aureus</em>, and <em>P. aeruginosa</em>.</p>`,
      ["What is mastoiditis?", "Extension of middle-ear infection into mastoid air cells", ["Stapes fixation", "Cochlear hair-cell loss", "A canal-only infection"], "Mastoid involvement represents spread beyond the middle ear."],
      ["Which preceding condition most often leads to mastoiditis?", "Acute otitis media", ["BPPV", "Presbycusis", "Cerumen impaction"], "AOM is the typical antecedent."], true),
      K("Clinical features and diagnosis", `<p>Look for mastoid pain and tenderness, fever, and erythematous edematous postauricular tissue. The pinna shifts anteroinferiorly.</p><p>Diagnosis is clinical. CT of the temporal bone with IV contrast shows coalescence of mastoid air cells after destruction of bony septa.</p>`,
      ["Which pinna change occurs in mastoiditis?", "Anteroinferior displacement", ["No displacement", "Posteriosuperior displacement only", "Bilateral retraction"], "Postauricular swelling pushes the pinna forward and down."],
      ["A febrile child has mastoid tenderness and forward-downward pinna displacement. What imaging is listed?", "CT with IV contrast", ["No imaging under any condition", "MRI of the knee", "Sinus radiography only"], "Contrast CT evaluates mastoid air-cell destruction."], true),
      K("Management", `<p>Begin broad IV therapy with piperacillin-tazobactam plus vancomycin, then narrow treatment using culture results. Severe disease or failure of medical management may require mastoidectomy and a tympanostomy tube for drainage.</p>`,
      ["What initial antibiotic approach is listed for mastoiditis?", "IV piperacillin-tazobactam plus vancomycin", ["Topical Debrox", "Oral meclizine", "Intranasal fluticasone"], "The deck uses broad IV coverage."],
      ["Mastoiditis does not improve with IV antibiotics. What is the next management step?", "Surgical drainage or mastoidectomy", ["Epley maneuver", "Hearing aid only", "Watchful waiting"], "Refractory severe infection requires surgery."], true)
    ]),

    O("16-equilibrium", "16. Vestibular Equilibrium", [
      K("Semicircular canals", `<p>The three semicircular canals contain crista ampullaris receptors and detect angular or rotational motion. Movement of endolymph bends the receptor apparatus. The vestibular division of CN VIII carries signals to the cerebellum.</p>`,
      ["What motion do the semicircular canals detect?", "Angular or rotational motion", ["Sound frequency", "Linear acceleration only", "Middle-ear pressure"], "Crista ampullaris receptors sense rotation."],
      ["Turning the head rapidly moves fluid in which structures?", "The semicircular canals", ["The eustachian tube", "The tympanic membrane", "The external canal"], "Canal fluid movement signals angular acceleration."], true),
      K("Utricle and saccule", `<p>The vestibule contains static-equilibrium receptors called maculae. The utricle detects horizontal linear motion; the saccule detects vertical linear motion. Calcium-carbonate crystals called otoconia weight these receptors and help report head position relative to gravity and linear acceleration.</p>`,
      ["Which structure detects horizontal linear motion?", "Utricle", ["Saccule", "Cochlea", "Malleus"], "The utricle lies in the horizontal plane."],
      ["Which structure detects vertical linear motion?", "Saccule", ["Utricle", "Incus", "Tympanic membrane"], "The saccule lies in the vertical plane."], true),
      K("Integrated balance", `<p>The brain integrates vestibular signals with vision and proprioception to maintain balance. Normal equilibrium also depends on coordinated musculoskeletal, cardiovascular, and central nervous system function.</p>`,
      ["What sensory inputs combine with vestibular information to control balance?", "Vision and proprioception", ["Taste and smell only", "Dentition only", "Cerumen and canal pH"], "Balance depends on multisensory integration."],
      ["Why can disease outside the ear cause dizziness?", "Balance also depends on CNS, vision, proprioception, cardiovascular, and musculoskeletal function", ["Only the cochlea controls balance", "Only the TM controls balance", "Dizziness always means BPPV"], "The equilibrium system is integrated."], true)
    ]),

    O("17-central-peripheral", "17. Central vs Peripheral Vertigo", [
      K("Presentation comparison", `${T(["Feature", "Peripheral", "Central"], [["Source", "Inner ear or labyrinth", "Brainstem, cerebellum, or other CNS lesion"], ["Onset", "Usually sudden", "Often slower"], ["Associated findings", "Nausea, vomiting, hearing loss, tinnitus, severe imbalance", "Motor, sensory, cerebellar, or other neurologic deficits"], ["Examples", "BPPV, labyrinthitis, vestibular neuronitis, Meniere disease", "Vascular disease, AVM, tumor, MS, or vertebrobasilar migraine syndrome"]])}`,
      ["Which findings favor central vertigo?", "Motor, sensory, or cerebellar deficits", ["Brief positional symptoms only", "Isolated tinnitus", "Fatigable nystagmus only"], "Focal neurologic deficits suggest CNS disease."],
      ["Sudden vertigo with nausea, tinnitus, and hearing loss but no focal neurologic deficit favors what source?", "Peripheral vestibular disease", ["Central disease", "Referred otalgia", "Conductive hearing loss only"], "Auditory symptoms and sudden onset support a peripheral source."], true),
      K("Nystagmus and bedside clues", `<p>The HINTS bedside examination uses head impulse, nystagmus, and test of skew in acute vestibular syndrome. An abnormal head impulse, absent or unidirectional horizontal nystagmus, and no skew reassure toward a peripheral source. Other nystagmus patterns or skew raise concern for central disease.</p><p>The lecturer notes that detailed HINTS memorization is not required before the neurology course.</p>`,
      ["Which HINTS finding is concerning for a central lesion?", "Skew deviation", ["An abnormal head impulse", "No skew", "Unidirectional horizontal nystagmus"], "Skew predicts brainstem involvement."],
      ["Dix-Hallpike produces nonfatigable nystagmus. What source should be considered?", "Central vertigo", ["Typical BPPV", "Cerumen impaction", "Otitis externa"], "Nonfatigable positional nystagmus is a central warning sign."], true)
    ]),

    O("18-vertigo-workup", "18. Vertigo Evaluation", [
      K("First define the dizziness", `<p>Clarify whether “dizziness” means lightheadedness, presyncope, disequilibrium, or true vertigo. Vertigo is a perceived sensation of movement, such as spinning, swaying, tilting, tumbling, or falling.</p><p>History should identify onset, duration, triggers, positional pattern, auditory symptoms, neurologic symptoms, and medication effects.</p>`,
      ["What is the first step when a patient says they feel dizzy?", "Clarify the type of dizziness", ["Assume BPPV", "Order surgery", "Begin antibiotics"], "The word dizziness covers several distinct sensations."],
      ["A patient describes the room spinning. Which category is this?", "Vertigo", ["Presyncope", "Otalgia", "Tinnitus"], "A false sensation of movement defines vertigo."], true),
      K("Physical examination", `<ul><li>Examine the ears</li><li>Observe eye motion and nystagmus during head turning</li><li>Perform a cranial-nerve examination</li><li>Assess gait and Romberg testing</li><li>Use pneumatic otoscopy when a perilymph fistula is suspected</li><li>Use HINTS for acute vestibular syndrome and Dix-Hallpike for positional symptoms</li></ul>`,
      ["Which examination maneuver evaluates positional vertigo?", "Dix-Hallpike", ["Rinne only", "Cerumen irrigation", "Myringotomy"], "Head positioning provokes characteristic BPPV nystagmus."],
      ["What must accompany the ear examination when central disease is possible?", "Cranial-nerve and neurologic assessment", ["Only a whisper test", "Only TM irrigation", "Only nasal inspection"], "Central causes may produce neurologic deficits."], true),
      K("Diagnostic testing", `<p>Audiology evaluates associated hearing loss. Caloric stimulation tests the vestibulo-ocular reflex and asymmetric peripheral function. Electronystagmography can localize a vestibular lesion. Obtain head MRI for unilateral otologic symptoms or symptoms unresponsive to treatment.</p>`,
      ["What test is preferred for unilateral otologic symptoms or vertigo unresponsive to treatment?", "MRI of the head", ["No further testing", "Dental radiography", "Chest CT"], "MRI evaluates central or retrocochlear disease."],
      ["A patient has vertigo plus unilateral hearing symptoms. Which additional assessment is appropriate?", "Audiology and possible head MRI", ["Cerumenolytics only", "No evaluation", "Tympanostomy in every case"], "Unilateral auditory symptoms warrant targeted testing."], true)
    ]),

    O("19-vertigo-disorders", "19. Common Peripheral Vertigo Disorders", [
      K("BPPV", `<p>Benign paroxysmal positional vertigo is the most common peripheral vertigo. Otoconia from the utricle or saccule enter the posterior semicircular canal. Episodes last less than one minute and follow head-position changes, such as lying down or rolling in bed. Nausea and vomiting may occur, but hearing loss and tinnitus are absent.</p><p>Dix-Hallpike produces delayed, fatigable nystagmus lasting 5–30 seconds. Treat with an Epley or Semont repositioning maneuver. Antihistamines and benzodiazepines are usually unnecessary.</p>`,
      ["Which feature best distinguishes BPPV?", "Brief vertigo triggered by head position without hearing loss or tinnitus", ["Continuous vertigo with hearing loss", "Low-frequency loss with aural pressure", "Postauricular swelling"], "BPPV produces short positional attacks without auditory symptoms."],
      ["Rolling over in bed causes 30 seconds of vertigo and fatigable nystagmus. What is most likely?", "BPPV", ["Labyrinthitis", "Vestibular neuronitis", "Meniere disease"], "The brief positional pattern is classic for BPPV."], true),
      K("Labyrinthitis and vestibular neuronitis", `${T(["Feature", "Labyrinthitis", "Vestibular neuronitis"], [["Anatomy", "Inflammation of the vestibular apparatus", "Inflammation of the vestibular division of CN VIII"], ["Course", "Acute continuous severe vertigo for days to a week", "Single severe attack lasting days to a week"], ["Auditory symptoms", "Hearing loss and tinnitus present", "No auditory impairment"], ["Cause", "Usually viral or postviral; can follow bacterial AOM", "Believed viral or postviral"], ["Treatment", "Short-term vestibular suppressants, antiemetic, treat bacterial AOM, vestibular therapy", "Supportive care and vestibular therapy"]])}`,
      ["What distinguishes labyrinthitis from vestibular neuronitis?", "Labyrinthitis includes hearing loss and tinnitus", ["Neuronitis always includes hearing loss", "Labyrinthitis lasts under one minute", "Only neuronitis causes vertigo"], "Auditory involvement points to labyrinthitis."],
      ["A patient has several days of severe vertigo and nystagmus after a URI but no hearing change. What is likely?", "Vestibular neuronitis", ["Labyrinthitis", "BPPV", "Meniere disease"], "Prolonged vertigo without auditory impairment fits neuronitis."], true),
      K("Meniere disease", `<p>Meniere disease, or endolymphatic hydrops, results from distention of the inner-ear endolymphatic compartment. It usually affects one ear.</p>${M("Core pattern", "Episodic vertigo + low-frequency sensorineural hearing loss + tinnitus, often with aural pressure")}<p>Diagnosis uses history and audiology. An episode lasts 20 minutes to 24 hours, and low-frequency loss must be documented. Initial management uses a low-salt diet below 2000 mg sodium and a diuretic such as hydrochlorothiazide with triamterene. Specialists may use intratympanic steroid, gentamicin ablation, shunting, decompression, labyrinthectomy, or hearing aids.</p>`,
      ["What is the characteristic Meniere disease triad?", "Episodic vertigo, low-frequency hearing loss, and tinnitus", ["Brief positional vertigo, no hearing loss, no tinnitus", "Postauricular pain, fever, and swelling", "Canal edema, tragal pain, and discharge"], "Aural pressure may accompany the core triad."],
      ["Vertigo lasts two hours with unilateral low-frequency loss, tinnitus, and pressure. What diagnosis fits?", "Meniere disease", ["BPPV", "Vestibular neuronitis", "Cerumen impaction"], "The episode duration and fluctuating auditory symptoms match Meniere disease."], true),
      K("Quick comparison", T(["Disorder", "Duration and trigger", "Hearing or tinnitus", "Primary treatment"], [["BPPV", "Seconds to under 1 minute; positional", "Absent", "Epley or Semont"], ["Labyrinthitis", "Continuous days to a week, often after URI", "Present", "Short-term suppressants, antiemetic, vestibular therapy"], ["Vestibular neuronitis", "Single attack over days to a week", "Absent", "Supportive care and vestibular therapy"], ["Meniere disease", "Episodes 20 minutes to 24 hours", "Low-frequency loss, tinnitus, pressure", "Low-salt diet and diuretic"]]),
      ["Which disorder produces prolonged vertigo without hearing loss?", "Vestibular neuronitis", ["Labyrinthitis", "Meniere disease", "Cholesteatoma"], "Neuronitis spares auditory function."],
      ["Which disorder is treated with a low-salt diet and diuretic?", "Meniere disease", ["BPPV", "Otitis externa", "Cerumen impaction"], "Reducing endolymphatic pressure is the initial strategy."], true)
    ]),

    O("20-bppv-maneuvers", "20. BPPV Maneuvers", [
      K("Dix-Hallpike test", `<p>From sitting, lower the patient rapidly to a supine position with the head extended about 30 degrees below the body and turned to one side. BPPV produces delayed onset, around 10 seconds, with fatigable nystagmus lasting 5–30 seconds. The horizontal component points toward the affected side and reverses when the patient returns upright.</p><p>Nonfatigable positional nystagmus suggests a central cause.</p>`,
      ["What Dix-Hallpike response supports BPPV?", "Delayed fatigable nystagmus", ["Persistent nonfatigable nystagmus", "No positional symptoms ever", "Facial paralysis"], "Latency and fatigability support canalithiasis."],
      ["Dix-Hallpike causes persistent nonfatigable nystagmus. Is typical BPPV the best explanation?", "No, consider a central cause", ["Yes, it confirms BPPV", "Yes, it confirms Meniere disease", "It confirms cerumen impaction"], "Nonfatigable nystagmus is atypical for BPPV."], true),
      K("Repositioning maneuvers", `<p>The Epley and Semont maneuvers reposition displaced otoconia. The lecture also describes a home sequence: lie rapidly with the affected ear down for one minute, switch to the opposite ear for one minute, and repeat five times twice daily until symptoms resolve.</p>`,
      ["Which maneuvers treat BPPV by repositioning otoconia?", "Epley and Semont maneuvers", ["Rinne and Weber", "Romberg and HINTS", "Myringotomy and mastoidectomy"], "Canalith repositioning addresses the mechanism."],
      ["A patient has confirmed BPPV. What treatment should be attempted?", "An Epley or Semont maneuver", ["IV vancomycin", "Tympanoplasty", "Cerumenolytics"], "Repositioning is the primary therapy."], true)
    ]),

    O("21-hearing-types", "21. Conductive vs Sensorineural Hearing Loss", [
      K("Mechanism and examples", `${T(["Feature", "Conductive", "Sensorineural"], [["Defect", "Impaired sound transmission through external canal, ossicles, or oval window", "Cochlear hair-cell, CN VIII, or central auditory dysfunction"], ["Typical site", "External or middle ear", "Inner ear or neural pathway"], ["Examples", "Cerumen, otitis externa, middle-ear effusion, otosclerosis", "Age, noise, Meniere disease, ototoxic drug, infection, tumor"], ["Course", "Often temporary or treatable by removing obstruction", "Usually not medically or surgically correctable; amplification may help"]])}`,
      ["Where is the defect in conductive hearing loss?", "External or middle-ear sound transmission", ["Cochlear hair cells only", "Auditory cortex only", "Vestibular nerve only"], "Conductive disease blocks mechanical transmission."],
      ["Cerumen blocks the canal and hearing falls. Which type of loss results?", "Conductive hearing loss", ["Sensorineural hearing loss", "Central vertigo", "Mixed equilibrium disorder"], "The obstruction prevents sound conduction."], true),
      K("Audiometry and treatment", `<p>Audiometry tests air and bone thresholds from 250–8000 Hz. Conductive loss creates an air-bone gap. Sensorineural loss reduces hearing without an air-bone gap. Speech discrimination assesses clarity; 90–100% is normal.</p><p>Treat conductive causes by removing or correcting the barrier. Sensorineural disease may require hearing aids or, in selected patients, cochlear implantation. Sudden sensorineural loss is the major steroid-responsive exception.</p>`,
      ["What audiometric finding identifies conductive hearing loss?", "An air-bone gap", ["Equal loss without a gap", "Normal speech discrimination only", "Low-frequency tinnitus only"], "Bone conduction bypasses the conductive defect."],
      ["Audiometry shows reduced air and bone thresholds without an air-bone gap. Which type is likely?", "Sensorineural hearing loss", ["Conductive hearing loss", "Cerumen impaction", "Serous otitis media"], "Sensorineural loss affects both routes similarly."], true)
    ]),

    O("22-conductive-mechanisms", "22. Conductive Hearing Loss Mechanisms", [
      K("Four mechanisms", `${T(["Mechanism", "Example"], [["Obstruction", "Cerumen impaction"], ["Mass loading", "Middle-ear effusion"], ["Stiffness", "Otosclerosis"], ["Discontinuity", "Ossicular-chain disruption"]])}`,
      ["What are the four mechanisms of conductive hearing loss?", "Obstruction, mass loading, stiffness, and discontinuity", ["Inflammation, vertigo, tinnitus, and pressure", "Viral, bacterial, fungal, and traumatic", "Cochlear, neural, central, and vestibular"], "The deck pairs each mechanical problem with an example."],
      ["A middle-ear effusion produces which conductive mechanism?", "Mass loading", ["Obstruction", "Stiffness", "Discontinuity"], "Fluid adds mass to the sound-transmission system."], true),
      K("Apply the mechanisms", `<ul><li>Canal cerumen blocks sound before it reaches the TM.</li><li>Middle-ear fluid weighs down the TM and ossicular system.</li><li>Otosclerosis fixes the stapes and stiffens the chain.</li><li>Traumatic ossicular separation interrupts continuity.</li></ul>`,
      ["Which mechanism describes otosclerosis?", "Stiffness", ["Mass loading", "Obstruction", "Discontinuity"], "Stapes fixation prevents normal ossicular motion."],
      ["Trauma separates the ossicles. Which conductive mechanism results?", "Discontinuity", ["Stiffness", "Mass loading", "Obstruction"], "The sound-transmission chain is interrupted."], true)
    ]),

    O("23-otosclerosis", "23. Otosclerosis", [
      K("Stapes fixation", `<p>Otosclerosis is sclerotic fixation of the stapes that impedes sound through the ossicular chain. It is the most common cause of conductive hearing loss in adults without a history of trauma or infection. The loss is bilateral and progressive.</p>`,
      ["What is otosclerosis?", "Sclerotic fixation of the stapes", ["Loss of cochlear hair cells", "A keratin middle-ear cyst", "Inflammation of CN VIII"], "A fixed stapes creates a stiffness-type conductive loss."],
      ["An adult has progressive bilateral conductive loss without trauma or infection. What diagnosis fits?", "Otosclerosis", ["Presbycusis", "SSNHL", "Acoustic neuroma"], "This is the lecture's classic clinical presentation."], true),
      K("Treatment", `<p>Amplification can improve hearing. Fluoride may stabilize progression but does not restore hearing. Stapedectomy removes and replaces the fixed stapes with a prosthesis.</p>`,
      ["Which operation treats otosclerosis?", "Stapedectomy", ["Mastoidectomy", "Tympanoplasty", "Labyrinthectomy"], "The fixed stapes is replaced."],
      ["What should a patient understand about fluoride therapy for otosclerosis?", "It may stabilize disease but does not improve existing hearing loss", ["It immediately restores normal hearing", "It treats infection", "It repositions otoconia"], "The deck distinguishes stabilization from improvement."], true)
    ]),

    O("24-sensorineural", "24. Sensorineural Hearing Loss", [
      K("Etiologies", `<p>Sensorineural loss most often results from loss of cochlear hair-cell function. Listed causes include advanced age, presbycusis, Meniere disease, ototoxic medications, immune disease, noise, tumors, and infections such as meningitis. Genetics also contributes.</p>`,
      ["What is the most common mechanism of sensorineural hearing loss?", "Loss of cochlear hair-cell function", ["External-canal obstruction", "Middle-ear effusion", "Stapes fixation"], "Hair-cell damage disrupts neural transduction."],
      ["Which condition can cause sensorineural rather than conductive loss?", "Meniere disease", ["Cerumen impaction", "Serous otitis media", "Otitis externa"], "Meniere disease affects inner-ear function."], true),
      K("Sudden sensorineural hearing loss", `<p>SSNHL is usually unilateral loss developing within 72 hours. It most often affects ages 43–53, with equal frequency in men and women. Most cases are idiopathic. Other causes include infection, ototoxic drugs, neoplasm, trauma, autoimmune disease, and vascular disease.</p><p>Patients report rapid loss or wake with marked change. Aural fullness may occur, and more than 90% have tinnitus. Criteria require at least 30 dB of sensorineural loss across three consecutive frequencies within 72 hours. ENT evaluation includes audiometry and contrast MRI. Treat with systemic steroids within two weeks when eligible.</p>`,
      ["What timing defines SSNHL?", "Sensorineural loss developing within 72 hours", ["Gradual loss over decades", "Episodes under one minute", "Loss after six months"], "Rapid onset is central to the diagnosis."],
      ["A 48-year-old wakes with unilateral hearing loss and tinnitus. What urgent diagnosis should be considered?", "Sudden sensorineural hearing loss", ["Presbycusis", "Otosclerosis", "Cerumen impaction only"], "The age, unilateral onset, and tinnitus fit SSNHL."], true),
      K("Presbycusis comparison", `${T(["Feature", "SSNHL", "Presbycusis"], [["Onset", "Sudden, within 72 hours", "Gradual with age"], ["Laterality", "Usually unilateral", "Bilateral"], ["Frequency", "At least 30 dB across 3 consecutive frequencies", "High frequencies first"], ["Epidemiology", "Most common ages 43–53; men and women equal", "Most common cause of sensorineural loss; men more often affected; 40–50% of adults over 75"], ["Treatment", "Prompt systemic steroids", "Hearing aids, assistive devices, communication training"]])}<p>Presbycusis makes high-pitched voices and conversation in background noise especially difficult and may include tinnitus.</p>`,
      ["How does presbycusis typically present?", "Gradual bilateral high-frequency hearing loss", ["Sudden unilateral loss over 72 hours", "Conductive loss with an air-bone gap", "Brief positional loss"], "Age-related high-frequency decline is typical."],
      ["An older adult gradually struggles with children's voices and background noise in both ears. What is likely?", "Presbycusis", ["SSNHL", "Otosclerosis", "Otitis externa"], "High-pitched speech and noisy settings expose presbycusis."], true)
    ]),

    O("25-ototoxicity", "25. Ototoxic Drug Classes", [
      K("Major medication classes", `${T(["Class or agent", "Course in the lecture"], [["Aminoglycoside antibiotics", "Often irreversible"], ["Chemotherapy agents", "Often irreversible"], ["Loop diuretics", "May be irreversible"], ["NSAIDs and high-dose aspirin", "Often reversible after discontinuation"], ["Minocycline, erythromycin, some fluoroquinolones", "Reversible examples"]])}<p>Antibiotics and chemotherapy are the most common drug groups associated with hearing loss. Damage may involve cochlear sensory cells or the vestibulocochlear nerve and often begins at high frequencies. Some agents are more vestibulotoxic than cochleotoxic.</p>`,
      ["Which ototoxic drug classes commonly cause irreversible loss?", "Aminoglycosides and chemotherapy agents", ["Nasal saline and cromolyn", "Acetaminophen only", "Topical Debrox"], "The deck contrasts them with reversible examples."],
      ["High-dose aspirin causes new bilateral tinnitus and hearing change. How does the lecture classify this effect?", "A potentially reversible ototoxic effect", ["Always permanent", "Conductive obstruction", "AOM recurrence"], "Aspirin appears among reversible agents."], true),
      K("Environmental ototoxins", `<p>The lecture also lists propylene glycol, mercury, and hydrocarbons as environmental chemicals capable of inner-ear toxicity.</p>`,
      ["Which environmental exposure is listed as ototoxic?", "Mercury", ["Sterile saline", "Calcium carbonate", "Acetic acid used correctly"], "Mercury appears in the environmental list."],
      ["A workplace exposure involves hydrocarbons. What ear risk does the lecture identify?", "Ototoxic inner-ear damage", ["Cerumen impaction", "Eustachian-tube obstruction only", "TM perforation only"], "Hydrocarbons are listed environmental ototoxins."], true)
    ]),

    O("26-weber-rinne", "26. Weber and Rinne Interpretation", [
      K("Weber test", `${T(["Finding", "Interpretation"], [["Sound midline", "Normal or symmetric hearing loss"], ["Sound lateralizes to affected ear", "Conductive loss in that ear"], ["Sound lateralizes to better ear", "Sensorineural loss in the opposite ear"]])}`,
      ["Where does Weber lateralize in unilateral conductive loss?", "To the affected ear", ["To the unaffected ear", "It never lateralizes", "Only to the midline"], "Blocked ambient sound makes bone-conducted sound seem louder in the affected ear."],
      ["Weber lateralizes to the right. Which two interpretations remain possible?", "Right conductive loss or left sensorineural loss", ["Right sensorineural loss only", "Left conductive loss only", "Normal hearing only"], "Rinne testing and the rest of the examination resolve the side and type."], true),
      K("Rinne test and combined patterns", `${T(["Pattern", "Meaning"], [["Air conduction greater than bone conduction", "Positive Rinne; normal or sensorineural loss"], ["Bone conduction greater than air conduction", "Negative Rinne; conductive loss in that ear"], ["Weber to right + right Rinne negative", "Right conductive loss"], ["Weber to right + both Rinne positive", "Left sensorineural loss"]])}`,
      ["What does bone conduction greater than air conduction indicate?", "Conductive hearing loss", ["Normal hearing", "Sensorineural loss only", "Central vertigo"], "A conductive defect reverses the normal air-bone relationship."],
      ["Weber lateralizes left; Rinne is positive bilaterally. What diagnosis fits?", "Right sensorineural hearing loss", ["Left conductive hearing loss", "Right conductive hearing loss", "Normal hearing"], "With positive Rinne in both ears, Weber lateralizes away from the sensorineural deficit."], true)
    ]),

    O("27-acoustic-neuroma", "27. Acoustic Neuroma", [
      K("Definition and epidemiology", `<p>Acoustic neuroma, or vestibular schwannoma, is a benign Schwann-cell tumor that usually arises from the vestibular portion of CN VIII. It most often affects middle-aged adults and is usually unilateral. Bilateral tumors suggest neurofibromatosis type 2.</p>`,
      ["What is an acoustic neuroma?", "A benign vestibular schwannoma arising from CN VIII", ["A destructive middle-ear cyst", "A fixed stapes", "A mastoid infection"], "The tumor arises from Schwann cells of the vestibular nerve."],
      ["Bilateral vestibular schwannomas suggest which association?", "Neurofibromatosis type 2", ["BPPV", "Otitis externa", "Presbycusis"], "Most sporadic tumors are unilateral."], true),
      K("Symptoms by cranial nerve", `${T(["Structure", "Symptoms"], [["Cochlear portion of CN VIII", "Usually unilateral chronic hearing loss and tinnitus; loss can be sudden"], ["Vestibular portion of CN VIII", "Unsteady walking"], ["CN V", "Facial numbness, reduced sensation, or pain"], ["CN VII", "Facial weakness"]])}<p>Speech discrimination may be worse than expected from pure-tone loss. Advanced growth can compress the brainstem and cause hydrocephalus or cerebellar tonsil herniation.</p>`,
      ["What is the most typical auditory presentation of acoustic neuroma?", "Asymmetric sensorineural hearing loss with tinnitus", ["Bilateral conductive loss", "Purulent otorrhea", "Brief positional vertigo without hearing change"], "Unilateral progressive auditory symptoms are classic."],
      ["An acoustic neuroma causes facial numbness. Which cranial nerve is involved?", "Trigeminal nerve, CN V", ["Facial nerve, CN VII", "Glossopharyngeal nerve, CN IX", "Hypoglossal nerve, CN XII"], "CN V compression produces sensory facial symptoms."], true),
      K("Diagnosis and management", `<p>Perform a complete HEENT and cranial-nerve examination. Enhanced MRI confirms the diagnosis; CT may also demonstrate an intracranial mass. Management options include observation, radiation, or surgery.</p><p>Complete removal has few recurrences. Incomplete resection to preserve facial or auditory nerve continuity can regrow, with asymptomatic regrowth reported in up to 15%.</p>`,
      ["Which test confirms acoustic neuroma?", "Contrast-enhanced MRI", ["Pneumatic otoscopy", "Dix-Hallpike", "Cerumen inspection"], "MRI best defines the retrocochlear tumor."],
      ["Unilateral hearing loss, tinnitus, poor speech discrimination, and imbalance progress gradually. What evaluation is needed?", "Cranial-nerve examination and enhanced MRI", ["Cerumenolytic trial only", "Epley maneuver only", "No further evaluation"], "The pattern suggests acoustic neuroma."], true)
    ])
  ];
}());
