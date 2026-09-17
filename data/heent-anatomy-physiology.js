/* HEENT Anatomy & Physiology content derived only from "HEENT Anatomy and Physiology.pptx" and its matching objectives. */
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
    "01-globe-layers": "Identify the three layers of the eyeball and discuss structures associated with each layer.",
    "02-lens-accommodation": "Describe the process of how the lens can change shape.",
    "03-aqueous-humor": "Describe the normal flow and drainage of aqueous humor and how it can be blocked.",
    "04-eye-muscles": "Explain the innervation of the muscles of the eye and the function of the muscles.",
    "05-eye-vasculature": "Discuss the vascular supply to the eyeball and the results of the loss of supply.",
    "06-tears": "Describe the formation, function, and flow of tears.",
    "07-eyelids": "Discuss the function of the eyelids.",
    "08-ear-regions": "Discuss the function of the external, middle, and inner ear.",
    "09-tympanic-membrane": "Describe the landmarks and function of the tympanic membrane (TM).",
    "10-ossicles": "Discuss the function of the auditory ossicles (malleus, incus, and stapes).",
    "11-sound-transmission": "Describe sound transmission through the ear.",
    "12-bony-labyrinth": "Describe the function of the three parts of the bony labyrinth.",
    "13-ear-innervation": "Explain the innervation to the external ear, TM, middle ear, and inner ear.",
    "14-cn-viii": "Describe the vestibulocochlear nerve pathway.",
    "15-nose-functions": "Discuss the functions of the nose.",
    "16-nose-innervation": "Describe the cranial innervation to the nose.",
    "17-nasal-cavities": "Describe the parts of the nasal cavities (conchae, superior, middle, and inferior meatus, spheno-ethmoidal recess, ET tube).",
    "18-nasal-blood-supply": "Describe the blood supply to the nasal cavity and importance of the Kiesselbach plexus.",
    "19-sinuses": "Identify the location and function of the four sinuses (frontal, maxillary, ethmoidal, sphenoid).",
    "20-tmj-components": "Discuss the components of the Temporomandibular Joint (TMJ).",
    "21-tmj-movements": "Describe the movements of the Temporomandibular Joint (TMJ).",
    "22-tongue": "Explain the function and innervation of the tongue.",
    "23-salivary-glands": "Describe the 3 salivary glands and the function of saliva.",
    "24-tonsils": "Identify the 3 types of tonsils, their location, and function.",
    "25-hyoid-larynx": "Discuss the hyoid bone, larynx, and the thyroid and cricoid cartilages.",
    "26-neck-muscles": "Identify muscles of mastication and neck movement (flexion and extension).",
    "27-lymph-drainage": "Discuss the function of lymph nodes and describe the lymph drainage in the neck.",
    "28-neck-fascia": "Describe the fascia of the neck (superficial and deep) and the spaces."
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

  window.HEENT_AP_OBJECTIVES = [
    O("01-globe-layers", "1. Layers of the Globe", [
      K("Fibrous and vascular layers", T(["Layer", "Structures and roles"], [
        ["Outer, fibrous", "Sclera and cornea. The sclera covers the posterior 5/6 and anchors muscles. The transparent cornea covers the anterior 1/6 and participates in the corneal reflex."],
        ["Middle, vascular or uvea", "Choroid, ciliary body, and iris. The choroid supplies the retina and contributes to the red reflex. The ciliary body attaches to the lens. The iris controls pupil size."]
      ]),
      ["Which structures form the vascular layer of the globe?", "Choroid, ciliary body, and iris", ["Sclera, cornea, and conjunctiva", "Retina, optic disc, and macula", "Lens, vitreous humor, and optic nerve"], "The deck identifies the choroid, ciliary body, and iris as the middle vascular layer."],
      ["A structure is reddish-brown, lines most of the sclera, and supplies the retina. Which structure is it?", "Choroid", ["Cornea", "Optic disc", "Palpebral conjunctiva"], "The choroid has extensive vessels that provide oxygen and nutrients to the retina."], true),
      K("Nervous layer and chambers", `<p>The <strong>retina</strong> forms the inner nervous layer. Its optic part senses light, while its nonvisual part extends over the ciliary body and posterior iris.</p>${T(["Landmark", "Lecture description"], [["Optic disc", "Entry point for sensory nerves and blood vessels through CN II; the blind spot"], ["Macula lutea", "Small oval area lateral to the optic disc"], ["Fovea centralis", "Cone-only center of the macula for color and the most acute vision"], ["Anterior chamber", "Contains changing aqueous humor"], ["Posterior chamber", "Contains gel-like, static vitreous humor"]])}`,
      ["Which retinal area contains only cones and provides the most acute vision?", "Fovea centralis", ["Optic disc", "Choroid", "Scleral venous sinus"], "The fovea centralis lies within the macula and supports visual acuity and color vision."],
      ["An examiner identifies the retinal blind spot. Which landmark has been located?", "Optic disc", ["Fovea centralis", "Ciliary process", "Corneal limbus"], "The optic disc is the entry point for CN II fibers and vessels and forms the blind spot."], true)
    ]),

    O("02-lens-accommodation", "2. Lens Accommodation", [
      K("Ciliary control of lens focus", `<p>The muscular, vascular <strong>ciliary body</strong> connects the choroid to the iris and provides attachment for the lens. Contraction and relaxation of the ciliary body change the lens focus, a process called <strong>accommodation</strong>.</p>`,
      ["What structure controls lens focus during accommodation?", "Ciliary body", ["Optic disc", "Lacrimal sac", "Sclera alone"], "The ciliary body changes lens focus through contraction and relaxation."],
      ["A lens must change focus between viewing distances. Which lecture mechanism accomplishes this?", "Contraction and relaxation of the ciliary body", ["Movement of the auditory ossicles", "Dilation of the nasolacrimal duct", "Contraction of the orbicularis oculi alone"], "The deck ties accommodation directly to muscular action of the ciliary body."], true),
      K("Near and distant accommodation", T(["View", "Ciliary muscle and lens response"], [["Distant vision", "Without nerve stimulation, the ciliary muscle relaxes, zonular fibers remain under tension, and the lens stretches thin"], ["Near vision", "Parasympathetic stimulation contracts the ciliary muscle, zonular fibers relax, and internal lens tension makes the lens thicker and more spherical"]]),
      ["What happens to the lens when the ciliary muscle relaxes for distant vision?", "Zonular tension stretches the lens thin", ["The lens becomes thicker and more spherical", "The lens drains through the pupil", "The lens moves into the vitreous cavity"], "The diagram pairs ciliary relaxation and tense zonular fibers with a thin lens for distance."],
      ["Parasympathetic stimulation contracts the ciliary muscle. What lens response follows?", "The zonular fibers relax and the lens becomes thicker", ["The zonular fibers tighten and the lens flattens", "The lens enters the scleral venous sinus", "The ciliary processes stop secreting fluid"], "For near vision, ciliary contraction releases zonular tension so the lens becomes more spherical."], true)
    ]),

    O("03-aqueous-humor", "3. Aqueous Humor Flow", [
      K("Production and drainage pathway", `${M("Flow", "Ciliary processes → pupil → trabecular meshwork → scleral venous sinus → limbal plexus")}<p>Aqueous humor occupies the anterior chamber and nourishes the lens and cornea. Limbal veins carry it into tributaries.</p>`,
      ["Where is aqueous humor produced?", "Ciliary processes", ["Macula lutea", "Lacrimal gland", "Central retinal artery"], "The ciliary processes of the ciliary body secrete aqueous humor."],
      ["Aqueous humor has passed through the pupil. What drainage structure does it reach next?", "Trabecular meshwork", ["Nasolacrimal duct", "Round window", "Optic chiasm"], "The normal flow proceeds from the pupil to the trabecular meshwork at the cornea-iris junction."], true),
      K("Drainage balance and pressure", `<p>Intraocular pressure remains stable when aqueous production equals drainage. The deck depicts obstruction at the trabecular meshwork as a cause of impaired outflow and pressure buildup.</p>`,
      ["What maintains stable intraocular pressure in the lecture?", "Equal aqueous production and drainage", ["Constant tear production", "Vitreous humor leaving through the pupil", "Pupil constriction alone"], "Stable IOP depends on balanced aqueous production and outflow."],
      ["A blockage prevents aqueous humor from entering the scleral venous sinus. Which structure immediately before it is implicated?", "Trabecular meshwork", ["Fovea centralis", "Lacrimal punctum", "Optic tract"], "The trabecular meshwork drains aqueous humor into the scleral venous sinus."], true)
    ]),

    O("04-eye-muscles", "4. Eye Muscles and Cranial Nerves", [
      K("Six extraocular muscles and their actions", `<p>Movement of the globe results from contraction of one or more extraocular muscles.</p>${T(["Position or action", "Primary muscle shown"], [["Abduction", "Lateral rectus"], ["Adduction", "Medial rectus"], ["Elevation while abducted", "Superior rectus"], ["Depression while abducted", "Inferior rectus"], ["Elevation while adducted", "Inferior oblique"], ["Depression while adducted", "Superior oblique"]])}<p>An orbital floor fracture may trap the inferior rectus and prevent upward gaze.</p>`,
      ["Which muscle abducts the eye in the clinical-testing diagram?", "Lateral rectus", ["Medial rectus", "Superior oblique", "Inferior oblique"], "The lateral rectus moves the eye laterally into abduction."],
      ["A patient cannot look upward after an orbital floor fracture. Which lecture explanation fits?", "Inferior rectus entrapment", ["Optic disc obstruction", "Lacrimal sac injury", "Ciliary-process overproduction"], "The inferior rectus can become trapped and mechanically restrict upward gaze."], true),
      K("LR6 SO4 AO3", `${M("Innervation", "Lateral rectus = CN VI · Superior oblique = CN IV · All other EOMs = CN III")}<p>CN III, IV, and VI supply the muscles that move the globe. CN V1 supplies corneal sensation, and CN II carries vision.</p>`,
      ["Which cranial nerve innervates the lateral rectus?", "CN VI", ["CN III", "CN IV", "CN V1"], "The lecture mnemonic assigns the lateral rectus to CN VI."],
      ["A question identifies the superior oblique muscle. Which nerve should be paired with it?", "CN IV", ["CN II", "CN III", "CN VI"], "The superior oblique is the SO4 portion of LR6 SO4 AO3."], true)
    ]),

    O("05-eye-vasculature", "5. Ocular Blood Supply", [
      K("Ophthalmic artery", `<p>The <strong>ophthalmic artery</strong> branches from the internal carotid artery and enters the orbit through the optic canal, inferior to the optic nerve. Its 11 branches supply the orbit, ethmoid sinuses, forehead, and scalp.</p>`,
      ["The ophthalmic artery is a branch of which vessel?", "Internal carotid artery", ["External jugular vein", "Facial artery", "Maxillary vein"], "The deck identifies the internal carotid as the source of the ophthalmic artery."],
      ["A vessel enters the orbit through the optic canal inferior to the optic nerve. Which vessel is described?", "Ophthalmic artery", ["Superior labial artery", "Sphenopalatine artery", "Thoracic duct"], "That course belongs to the ophthalmic artery."], false),
      K("Central retinal artery", `<p>The <strong>central retinal artery</strong> is the most important ophthalmic branch in the lecture because it supplies the retina. It is an end artery without anastomoses, so occlusion results in blindness.</p>`,
      ["Why can central retinal artery occlusion cause blindness?", "It is an end artery without anastomoses", ["It drains tears into the nose", "It controls pupil diameter", "It supplies only the eyelid"], "The retina lacks an alternate arterial route when this end artery is occluded."],
      ["Which vessel loss most directly removes the retinal blood supply described in the deck?", "Central retinal artery", ["Lacrimal canaliculus", "Scleral venous sinus", "Superior labial artery"], "The central retinal artery supplies the retina."], true)
    ]),

    O("06-tears", "6. Lacrimal Apparatus and Tear Flow", [
      K("Tear production and function", `<p>The lacrimal gland lies in the upper lateral orbit on the lateral rectus and levator palpebrae superioris. Twelve ducts deliver tears to the superior lateral conjunctival socket.</p><p>Tears act as physiologic saline, contain bactericidal lysozyme, lubricate the eye, and carry debris toward drainage.</p>`,
      ["Where is the lacrimal gland located?", "Upper lateral orbit", ["Inferior nasal meatus", "Medial lower eyelid only", "Posterior vitreous chamber"], "The deck places the gland in the upper lateral orbit."],
      ["Which component gives tears a bactericidal function in the lecture?", "Lysozyme", ["Perilymph", "Aqueous humor", "Cerumen"], "The tear fluid contains the bactericidal enzyme lysozyme."], true),
      K("Tear drainage route", `${M("Flow", "Lacrimal gland → conjunctiva → lacrimal lake → puncta and canaliculi → lacrimal sac → nasolacrimal duct → inferior nasal meatus")}<p>Gravity and blinking move tears from lateral to medial across the eye.</p>`,
      ["Where does the nasolacrimal duct open?", "Inferior nasal meatus", ["Superior nasal meatus", "Spheno-ethmoidal recess", "Middle ear"], "The nasolacrimal duct drains into the inferior nasal meatus."],
      ["Tears have entered the lacrimal canaliculi. What structure receives them next?", "Lacrimal sac", ["Ciliary body", "Frontal sinus", "Scleral venous sinus"], "The canaliculi open into the lacrimal sac before the nasolacrimal duct."], true)
    ]),

    O("07-eyelids", "7. Eyelid Structure and Function", [
      K("Protection and moisture", `<p>Eyelids cover the anterior globe, limit injury and excessive light, and spread lacrimal fluid during blinking to keep the cornea moist. Skin covers the exterior and palpebral conjunctiva lines the interior.</p><p>Dense connective-tissue tarsi support both lids.</p>`,
      ["How do eyelids help keep the cornea moist?", "They spread lacrimal fluid during blinking", ["They produce aqueous humor", "They drain vitreous humor", "They move the lens"], "Blinking distributes tears across the cornea."],
      ["A question asks for the supportive skeleton-like tissue in each eyelid. What is it?", "Tarsi", ["Conchae", "Ciliary processes", "Ossicles"], "The tarsi are dense connective-tissue bands that support the lids."], true),
      K("Glands, lashes, and orbicularis oculi", `${T(["Structure", "Function"], [["Tarsal glands", "Lipid secretion prevents the lids from sticking"], ["Eyelashes", "Sense approaching danger and receive lubrication from ciliary glands"], ["Orbicularis oculi", "Closes the lids through CN VII"], ["Palpebral part", "Closes the lids gently"], ["Orbital part", "Closes the lids tightly"]])}`,
      ["Which nerve supplies the orbicularis oculi?", "CN VII", ["CN II", "CN IV", "CN VIII"], "The deck pairs eyelid closure by orbicularis oculi with CN VII."],
      ["A patient needs to squeeze the eyelids tightly. Which part of orbicularis oculi performs this action?", "Orbital part", ["Palpebral part", "Ciliary process", "Dilator pupillae"], "The orbital part closes the lids tightly."], true)
    ]),

    O("08-ear-regions", "8. External, Middle, and Inner Ear", [
      K("External and middle ear", `${T(["Region", "Components and role"], [["External ear", "Auricle funnels sound into the external acoustic meatus toward the external surface of the TM"], ["Middle ear", "Air-filled temporal-bone chamber containing the internal TM surface, ossicles, muscles, nerves, and pharyngotympanic tube"]])}<p>The pharyngotympanic tube connects the middle ear with the nasopharynx and controls cavity pressure.</p>`,
      ["What is the auricle's primary function in the deck?", "Funnels sound into the ear canal", ["Converts vibration into action potentials", "Equalizes middle-ear pressure", "Dampens waves at the round window"], "The auricle collects and directs sound into the external acoustic meatus."],
      ["Which structure links the middle ear with the nasopharynx to control pressure?", "Pharyngotympanic tube", ["Cochlear duct", "Lacrimal canaliculus", "Scleral venous sinus"], "The Eustachian or pharyngotympanic tube regulates middle-ear pressure."], true),
      K("Inner ear", `<p>The inner ear is the vestibulocochlear organ for sound and balance. Its membranous labyrinth contains endolymph and hangs within perilymph inside the bony labyrinth.</p>${T(["Part", "Main function"], [["Cochlea", "Hearing"], ["Vestibule", "Balance"], ["Semicircular canals", "Communicate with the vestibule and participate in balance"]])}`,
      ["Which inner-ear structure is primarily concerned with hearing?", "Cochlea", ["Vestibule", "Auricle", "Pharyngotympanic tube"], "The deck assigns hearing to the cochlea."],
      ["A structure contains endolymph and is suspended within perilymph. Which structure is described?", "Membranous labyrinth", ["Tympanic membrane", "External meatus", "Mastoid antrum"], "The membranous labyrinth contains endolymph within the bony labyrinth's perilymph."], true)
    ]),

    O("09-tympanic-membrane", "9. Tympanic Membrane Landmarks", [
      K("TM structure", `<p>The tympanic membrane forms the partition between the external acoustic meatus and the middle-ear tympanic cavity. It measures about 1 cm across, with thin skin externally and middle-ear mucous membrane internally.</p>${T(["Region", "Description"], [["Pars flaccida", "Small triangular portion without a fibrous layer"], ["Pars tensa", "The remaining tense portion"]])}`,
      ["Which portion of the TM lacks a fibrous layer?", "Pars flaccida", ["Pars tensa", "Umbo", "Concha"], "The pars flaccida is the small triangular region lacking the fibrous layer."],
      ["A landmark occupies most of the tense tympanic membrane. Which named region is it?", "Pars tensa", ["Pars flaccida", "Oval window", "Round window"], "The pars tensa forms the rest of the membrane outside the small pars flaccida."], false),
      K("Cone of light, umbo, and vibration", `<p>The <strong>cone of light</strong> is a triangular reflection in the anterior-inferior TM. The <strong>umbo</strong> is the most depressed central point and marks the end of the malleus.</p><p>Air vibrations move the TM, which passes movement to the auditory ossicles.</p>`,
      ["Where is the cone of light found?", "Anterior-inferior tympanic membrane", ["Posterior-superior tympanic membrane", "Oval window", "External auricle"], "The deck places the triangular light reflex in the anterior-inferior TM."],
      ["An examiner identifies the deepest central point of the TM at the end of the malleus. What is it?", "Umbo", ["Helix", "Concha", "Pars flaccida"], "The umbo is the depressed center where the malleus ends."], true)
    ]),

    O("10-ossicles", "10. Auditory Ossicles", [
      K("Malleus, incus, and stapes", `${T(["Ossicle", "Common name"], [["Malleus", "Hammer"], ["Incus", "Anvil"], ["Stapes", "Stirrup"]])}<p>The chain connects the TM with the oval window of the inner ear.</p>`,
      ["Which ossicle occupies the oval window?", "Stapes", ["Malleus", "Incus", "Umbo"], "The stapes sits at the oval window."],
      ["Which sequence carries vibration from the TM toward the oval window?", "Malleus, incus, then stapes", ["Stapes, incus, then malleus", "Incus, stapes, then malleus", "Malleus, stapes, then incus"], "The named chain proceeds from malleus to incus to stapes."], true),
      K("Mechanical transmission", `<p>The ossicles transmit sonic vibration from the tympanic membrane to the inner ear. At the oval window, the stapes vibrates with increased strength and decreased amplitude, generating pressure waves in perilymph.</p>`,
      ["What change occurs as the stapes vibrates at the oval window?", "Strength increases while amplitude decreases", ["Strength and amplitude both disappear", "Amplitude increases without pressure waves", "The TM stops moving"], "The deck describes greater strength and lower amplitude at the stapes."],
      ["Damage interrupts the chain between the TM and oval window. Which function is directly lost?", "Mechanical transmission through the ossicles", ["Tear drainage", "Nasal humidification", "Lens accommodation"], "The ossicular chain transfers TM vibration into the inner ear."], true)
    ]),

    O("11-sound-transmission", "11. Sound Transmission", [
      K("From sound wave to cochlear movement", `${M("Sequence", "External ear → TM → ossicles → stapes at oval window → perilymph pressure wave → basilar membrane movement")}<p>The pressure wave displaces the basilar membrane of the cochlear duct.</p>`,
      ["What structure vibrates immediately after sound waves strike it?", "Tympanic membrane", ["Round window", "Utricle", "Vestibular nerve"], "Sound first drives the TM before the ossicular chain moves."],
      ["The stapes moves at the oval window. What does this create next?", "Pressure waves in perilymph", ["Tears in the lacrimal lake", "Aqueous flow through the pupil", "Airflow through the nares"], "Stapes vibration generates perilymph pressure waves."], true),
      K("Hair cells and neural signal", `<p>Basilar-membrane movement bends cochlear hair cells. They release neurotransmitter and generate action potentials carried by the cochlear nerve to the brain. Hair cells detect pitch and convert pressure waves into electrical impulses.</p><p>Residual perilymph waves are dampened at the round window into the air of the tympanic cavity.</p>`,
      ["What converts cochlear pressure-wave information into an electrical signal?", "Hair cells", ["Auditory ossicles alone", "Ceruminous glands", "Tympanic plexus"], "Cochlear hair cells detect pitch and initiate the neural signal."],
      ["Where are remaining perilymph pressure waves dampened?", "Round window", ["Oval window only", "External meatus", "Pharyngotympanic tube"], "The second TM at the round window dissipates the pressure wave."], true)
    ]),

    O("12-bony-labyrinth", "12. Bony Labyrinth", [
      K("Three parts", T(["Bony-labyrinth part", "Lecture function"], [["Cochlea", "Shell-shaped part for hearing"], ["Vestibule", "Balance; contains the utricle and saccule"], ["Semicircular canals", "Communicate with the vestibule and contribute to balance"]]),
      ["Which part of the bony labyrinth contains the utricle and saccule?", "Vestibule", ["Cochlea", "External meatus", "Tympanic cavity"], "The vestibule contains the utricle, saccule, and part of the balancing apparatus."],
      ["A bony-labyrinth structure is shell shaped and concerned with hearing. Which is it?", "Cochlea", ["Vestibule", "Semicircular canal", "Mastoid antrum"], "The deck identifies the cochlea by its shell shape and hearing function."], true),
      K("Windows and fluids", `<p>The stapes occupies the oval window of the vestibule. The membranous labyrinth contains endolymph and remains suspended within perilymph inside the bony labyrinth.</p>`,
      ["Which fluid surrounds the membranous labyrinth within the bony labyrinth?", "Perilymph", ["Endolymph", "Aqueous humor", "Lacrimal fluid"], "Perilymph surrounds the endolymph-filled membranous labyrinth."],
      ["Which ossicle interfaces with the vestibule at the oval window?", "Stapes", ["Malleus", "Incus", "Helix"], "The stapes occupies the oval window."], false)
    ]),

    O("13-ear-innervation", "13. Ear Innervation", [
      K("External ear and tympanic membrane", T(["Region", "Innervation"], [["Auricle and external meatus", "Mostly CN V, with smaller CN VII and CN X contributions"], ["External TM", "CN V with a small CN X area"], ["Internal TM", "CN IX"]]),
      ["Which nerve supplies the internal surface of the tympanic membrane?", "CN IX", ["CN II", "CN VI", "CN XII"], "The deck assigns the internal TM to CN IX."],
      ["Sensation from most of the auricle and external acoustic meatus is carried by which nerve?", "CN V", ["CN VIII only", "CN XII", "CN III"], "CN V provides most innervation to the auricle and external canal."], true),
      K("Middle and inner ear", T(["Region", "Innervation"], [["Middle ear", "Combination of CN V3 and CN VII"], ["Inner ear", "CN VIII for hearing and balance through acoustic and vestibular divisions"]]),
      ["Which cranial nerve supplies the inner ear for hearing and balance?", "CN VIII", ["CN V3", "CN VII", "CN IX"], "CN VIII serves the inner ear's acoustic and vestibular functions."],
      ["A question asks for the nerve combination associated with the middle ear. Which pair matches the lecture?", "CN V3 and CN VII", ["CN II and CN III", "CN VIII and CN XII", "CN IX and CN X only"], "The deck lists CN V3 and CN VII for the middle ear."], true)
    ]),

    O("14-cn-viii", "14. Vestibulocochlear Pathway", [
      K("Cochlear division", `<p>Cochlear hair cells detect pitch, convert pressure waves into electrical impulses, and release neurotransmitter. Action potentials then travel through the <strong>cochlear nerve</strong>. The cochlear and vestibular divisions join as CN VIII, pass through the internal acoustic meatus, and reach the brainstem.</p>`,
      ["Which CN VIII division carries hearing impulses?", "Cochlear nerve", ["Vestibular nerve", "Chorda tympani", "Ophthalmic nerve"], "The cochlear division conveys the electrical signal produced by cochlear hair cells."],
      ["Hair-cell bending has released neurotransmitter. What happens next in the lecture pathway?", "Action potentials travel through the cochlear nerve to the brain", ["The stapes moves back toward the auricle", "Tears enter the inferior meatus", "The ciliary body changes lens shape"], "The neural portion of sound transmission begins with cochlear-nerve action potentials."], true),
      K("Vestibular division", `<p>CN VIII also contains a <strong>vestibular nerve</strong> for balance. The diagram links this division with the vestibular ganglion, utricle, saccule, maculae, and ampullae of the semicircular ducts before it joins the cochlear division.</p>`,
      ["Which CN VIII division carries balance information?", "Vestibular nerve", ["Cochlear nerve", "Glossopharyngeal nerve", "Mandibular nerve"], "The vestibular division serves balance."],
      ["A signal arises from the inner-ear balancing apparatus. Which cranial nerve receives it according to the deck?", "CN VIII", ["CN II", "CN V1", "CN XII"], "The vestibulocochlear nerve carries both balance and hearing information."], true)
    ]),

    O("15-nose-functions", "15. Functions of the Nose", [
      K("Airway and sensory functions", `<p>The nose lies above the hard palate and includes the external nose and nasal cavity. Its functions include olfaction, respiration, dust filtration, and humidification of inspired air.</p><p>The three conchae increase surface area for warming and filtering incoming air.</p>`,
      ["Which nasal structures increase surface area for warming and filtering air?", "Conchae", ["Auditory ossicles", "Tarsi", "Tonsils"], "The superior, middle, and inferior conchae increase nasal surface area."],
      ["Inspired air needs warming, filtering, and humidification before reaching the lungs. Which lecture structure performs these functions?", "Nasal cavity", ["Middle ear", "Lacrimal sac", "Posterior globe"], "The nasal cavity conditions inspired air."], true),
      K("Drainage reception", `<p>The nasal cavity receives and eliminates secretions from the paranasal sinuses and nasolacrimal ducts. Its inferior two-thirds is respiratory mucosa, while the superior one-third is olfactory.</p>`,
      ["Which part of the nasal mucosa is olfactory?", "Superior one-third", ["Inferior two-thirds", "Entire hard palate", "Only the inferior meatus"], "The deck divides the nasal mucosa into superior olfactory and inferior respiratory regions."],
      ["Tears enter the nasal cavity through which drainage structure?", "Nasolacrimal duct", ["Scleral venous sinus", "Cochlear duct", "Thoracic duct"], "The nose receives nasolacrimal drainage."], false)
    ]),

    O("16-nose-innervation", "16. Nasal Innervation", [
      K("External nose sensation", `<p>The lecture assigns nerve supply of the external nose to the ophthalmic division of the trigeminal nerve, <strong>CN V1</strong>.</p>`,
      ["Which cranial-nerve division supplies the external nose in the deck?", "CN V1", ["CN V3", "CN VII", "CN XII"], "The external-nose slide lists CN V1."],
      ["A question identifies the ophthalmic division of the trigeminal nerve as nasal sensory supply. Which label is correct?", "V1", ["V2", "V3", "VIII"], "The ophthalmic division is V1."], true),
      K("Trigeminal context", `<p>CN V has three named distributions: ophthalmic V1, maxillary V2, and mandibular V3. The external-nose slide specifically selects V1 from this three-division pattern.</p>`,
      ["Which set correctly names the three trigeminal divisions shown in the lecture?", "Ophthalmic, maxillary, and mandibular", ["Optic, facial, and vagus", "Cochlear, vestibular, and olfactory", "Frontal, ethmoid, and sphenoid"], "The trigeminal nerve divides into V1, V2, and V3."],
      ["The lecture asks which trigeminal branch applies to the external nose. Which choice should be selected?", "Ophthalmic division", ["Mandibular division", "Vestibular division", "Glossopharyngeal division"], "The external nose is paired with V1, the ophthalmic division."], false)
    ]),

    O("17-nasal-cavities", "17. Nasal Cavity Anatomy and Drainage", [
      K("Septum, conchae, and meatuses", `<p>The nasal septum divides right and left cavities. Its superior part includes the perpendicular plate of the ethmoid, and the posteroinferior part includes the vomer.</p>${T(["Structure", "Relationship"], [["Superior, middle, inferior conchae", "Increase surface area"], ["Meatus", "Passage under its corresponding concha"], ["Nasopharynx", "Posterior to the cavities"], ["Paranasal sinuses", "Superior and lateral to the cavities"]])}`,
      ["Which bone forms the posteroinferior portion of the nasal septum?", "Vomer", ["Frontal bone", "Zygomatic bone", "Mandible"], "The deck identifies the vomer in the posteroinferior septum."],
      ["What lies directly beneath each nasal concha?", "A nasal meatus", ["An auditory ossicle", "A tarsal plate", "A tonsillar fossa"], "Each concha overlies its corresponding meatus."], true),
      K("Drainage landmarks", T(["Landmark", "Opening or connection"], [["Spheno-ethmoidal recess", "Sphenoidal sinus"], ["Superior meatus", "Ethmoid sinus opening"], ["Middle meatus", "Ethmoidal infundibulum and semilunar hiatus communicating with the frontal sinus"], ["Inferior meatus", "Nasolacrimal duct"], ["Nasal cavities", "Pharyngotympanic tube empties into them"]]),
      ["Where does the sphenoidal sinus open?", "Spheno-ethmoidal recess", ["Inferior meatus", "Lacrimal sac", "Tympanic cavity"], "The recess receives the sphenoidal sinus opening."],
      ["A patient has tear drainage entering the nasal cavity. Which meatus receives it?", "Inferior nasal meatus", ["Superior nasal meatus", "Middle nasal meatus", "Spheno-ethmoidal recess"], "The nasolacrimal duct opens into the inferior meatus."], true)
    ]),

    O("18-nasal-blood-supply", "18. Nasal Blood Supply and Kiesselbach Plexus", [
      K("Arterial sources", T(["Parent artery", "Named nasal branches"], [["Ophthalmic", "Anterior and posterior ethmoid arteries"], ["Maxillary", "Sphenopalatine and greater palatine arteries"], ["Facial", "Superior labial artery"]]),
      ["Which artery gives rise to the sphenopalatine artery in the lecture?", "Maxillary artery", ["Ophthalmic artery", "Facial artery", "Internal jugular vein"], "The sphenopalatine artery is listed as a maxillary branch."],
      ["Which nasal vessel comes from the facial artery?", "Superior labial artery", ["Posterior ethmoid artery", "Greater palatine artery", "Sphenopalatine artery"], "The superior labial artery is the facial-artery contribution."], false),
      K("Kiesselbach plexus", `<p>Branches of the facial, ophthalmic, and maxillary arteries communicate in the <strong>anterior-inferior nasal septum</strong> to form Kiesselbach plexus.</p><p>Its abundant blood flow supports heat exchange with inhaled air and makes it a common site of epistaxis.</p>`,
      ["Where is Kiesselbach plexus located?", "Anterior-inferior nasal septum", ["Posterior hard palate", "Superior orbit", "Middle-ear cavity"], "The arterial branches meet in the anterior-inferior septum."],
      ["Why is Kiesselbach plexus clinically associated with epistaxis?", "It has a large communicating blood supply", ["It contains endolymph", "It lacks any vessels", "It drains aqueous humor"], "Its rich arterial network makes it a common bleeding site."], true)
    ]),

    O("19-sinuses", "19. Paranasal Sinuses", [
      K("Sinus functions", `<p>The four paranasal sinuses lighten the skull, add surface area for warming inspired air, and support vocal resonance.</p>${M("Four sinuses", "Ethmoidal · Frontal · Maxillary · Sphenoidal")}`,
      ["Which function of the paranasal sinuses appears in the lecture?", "Help with vocal resonance", ["Control lens accommodation", "Transmit ossicular vibration", "Close the eyelids"], "The deck lists vocal resonance, skull lightening, and air warming."],
      ["A question asks which air spaces lighten the skull and help warm inspired air. What is the best answer?", "Paranasal sinuses", ["Middle-ear cavity only", "Anterior chamber", "Cervical fascial spaces"], "Those are stated functions of the sinus group."], true),
      K("Sinus locations", T(["Sinus", "Location"], [["Ethmoidal", "Air cells between the orbit and nasal cavity"], ["Frontal", "Frontal bone above the orbits"], ["Maxillary", "Largest sinus, in the maxilla beside the nasal cavity and below the orbit"], ["Sphenoidal", "Body of the sphenoid, with the pituitary just above"]]),
      ["Which is the largest paranasal sinus?", "Maxillary sinus", ["Frontal sinus", "Ethmoidal air cells", "Sphenoidal sinus"], "The deck identifies the maxillary sinus as the largest."],
      ["Imaging shows a sinus directly below the pituitary gland. Which sinus is it?", "Sphenoidal sinus", ["Maxillary sinus", "Frontal sinus", "Ethmoidal sinus"], "The pituitary lies just above the sphenoidal sinus."], true)
    ]),

    O("20-tmj-components", "20. Temporomandibular Joint Components", [
      K("Joint type and articulations", `<p>The TMJ is a combined <strong>hinge and gliding synovial joint</strong>. It joins the mandibular fossa with the head of the mandibular condyle. Both articular surfaces contain fibrocartilage.</p>`,
      ["What type of joint is the TMJ?", "Combined hinge and gliding synovial joint", ["Fixed fibrous joint", "Ball-and-socket joint", "Cartilaginous growth plate"], "The deck describes both hinge and gliding actions within a synovial joint."],
      ["Which two bony surfaces articulate at the TMJ?", "Mandibular fossa and head of the mandibular condyle", ["Maxilla and hyoid", "Zygomatic arch and thyroid cartilage", "Palatine process and cricoid cartilage"], "These are the named TMJ bony articulations."], true),
      K("Articular disc and glide", `<p>An <strong>articular disc</strong> separates the TMJ cavities. During mastication and mouth opening, the mandibular condyle glides anteriorly toward the posterior aspect of the temporal bone's articular tubercle.</p>`,
      ["What separates the TMJ cavities?", "Articular disc", ["Tympanic membrane", "Nasal septum", "Cricothyroid membrane"], "The articular disc divides the joint spaces."],
      ["As the mouth opens, which movement occurs at the mandibular condyle?", "It glides anteriorly toward the articular tubercle", ["It moves into the nasal cavity", "It rotates the hyoid posteriorly", "It enters the temporal fossa"], "The deck describes anterior condylar glide during opening and mastication."], true)
    ]),

    O("21-tmj-movements", "21. Temporomandibular Joint Movements", [
      K("Opening and closing", T(["Movement", "Action"], [["Elevation", "Closes the mouth"], ["Depression", "Opens the mouth"], ["Protrusion", "Moves the chin forward"], ["Retrusion", "Retracts the chin"]]),
      ["Which TMJ movement opens the mouth?", "Depression", ["Elevation", "Retrusion", "Protrusion"], "Depression lowers the mandible and opens the mouth."],
      ["A patient moves the chin backward. Which movement is this?", "Retrusion", ["Protrusion", "Elevation", "Lateral grinding"], "Retrusion retracts the chin."], true),
      K("Lateral movement and mastication", `<p>Lateral TMJ movements provide grinding and chewing. Mouth opening also combines hinge motion with anterior gliding of the mandibular condyle.</p>`,
      ["Which TMJ movement supports grinding and chewing?", "Lateral movement", ["Elevation only", "Retrusion only", "No condylar movement"], "The lecture directly pairs lateral movement with grinding and chewing."],
      ["A patient shifts the jaw side to side while chewing. Which named TMJ action is occurring?", "Lateral movement", ["Depression", "Elevation", "Retrusion"], "Side-to-side jaw motion is the lateral grinding movement."], false)
    ]),

    O("22-tongue", "22. Tongue Function and Innervation", [
      K("Muscles and functions", `<p>The tongue supports articulation, chewing, taste, and oral cleansing, and it moves food into the oropharynx to initiate swallowing.</p>${T(["Muscle group", "Role"], [["Four intrinsic muscles", "Alter tongue shape"], ["Four extrinsic muscles", "Alter tongue position"]])}`,
      ["What do the intrinsic tongue muscles change?", "Tongue shape", ["Tongue position only", "Pupil diameter", "Middle-ear pressure"], "The intrinsic muscles alter shape, while the extrinsic muscles alter position."],
      ["Moving food into the oropharynx initiates which process named in the deck?", "Deglutition", ["Accommodation", "Olfaction", "Auditory transduction"], "The tongue helps initiate swallowing, or deglutition."], true),
      K("Tongue innervation", T(["Region or function", "Nerve"], [["Anterior two-thirds, general touch and pain", "CN V3"], ["Anterior two-thirds, taste", "CN VII"], ["Posterior one-third, sensation", "CN IX and partly CN X"], ["Motor to tongue muscles", "CN XII, except palatoglossus by CN X"]]),
      ["Which nerve carries taste from the anterior two-thirds of the tongue?", "CN VII", ["CN V3", "CN IX", "CN XII"], "The deck separates CN VII taste from CN V3 general sensation anteriorly."],
      ["Which tongue muscle is the exception to CN XII motor innervation?", "Palatoglossus", ["All intrinsic muscles", "Temporalis", "Masseter"], "Palatoglossus receives CN X rather than CN XII."], true)
    ]),

    O("23-salivary-glands", "23. Salivary Glands and Saliva", [
      K("Three glands and duct openings", T(["Gland", "Duct opening"], [["Parotid", "Stenson duct on the buccal upper cheek opposite the second maxillary molar"], ["Submandibular", "Wharton duct on each side of the lingual frenulum"], ["Sublingual", "Numerous openings along the sublingual folds in the floor of the mouth"]]),
      ["Which salivary duct opens opposite the second maxillary molar?", "Stenson duct", ["Wharton duct", "Nasolacrimal duct", "Pharyngotympanic tube"], "Stenson duct is the parotid opening on the buccal surface."],
      ["Openings are seen beside the lingual frenulum. Which gland drains there?", "Submandibular gland", ["Parotid gland", "Lacrimal gland", "Sublingual gland only through one duct"], "Wharton ducts from the submandibular glands open beside the frenulum."], true),
      K("Functions of saliva", `<ul><li>Keeps oral mucosa moist</li><li>Lubricates food during mastication</li><li>Begins digestion</li><li>Acts as an intrinsic mouthwash</li><li>Supports prevention of tooth decay and the ability to taste</li></ul>`,
      ["Which salivary function appears in the lecture?", "Begins digestion", ["Produces endolymph", "Controls pupil size", "Equalizes middle-ear pressure"], "The deck includes initiation of digestion among saliva's functions."],
      ["Reduced saliva would most directly impair which lecture-listed oral role?", "Moistening mucosa and lubricating food", ["Moving the ossicles", "Draining aqueous humor", "Warming air through Kiesselbach plexus"], "Saliva keeps mucosa moist and lubricates food during chewing."], true)
    ]),

    O("24-tonsils", "24. Tonsils", [
      K("Tonsil function and palatine location", `<p>Tonsils are lymphoid tissue that trap bacteria and viruses entering the throat and produce antibodies.</p><p><strong>Palatine tonsils</strong> sit bilaterally in the posterior oral cavity between the palatoglossal and palatopharyngeal folds. CN V and CN IX branches innervate them.</p>`,
      ["What is the primary tonsil function described in the deck?", "Trap entering pathogens and help produce antibodies", ["Change lens focus", "Transmit sound", "Drain tears"], "Tonsils provide lymphoid defense at the throat."],
      ["Which tonsils lie between the palatoglossal and palatopharyngeal folds?", "Palatine tonsils", ["Lingual tonsils", "Pharyngeal tonsils", "Cervical lymph nodes"], "That bilateral tonsillar-fossa location belongs to the palatine tonsils."], true),
      K("Lingual and pharyngeal tonsils", T(["Type", "Location"], [["Lingual", "Very posterior oral surface of the tongue"], ["Pharyngeal", "Posterior nasopharyngeal wall; called adenoids when infected"], ["Palatine", "Posterior oral cavity in the tonsillar fossae"]]),
      ["Which tonsils are called adenoids when infected?", "Pharyngeal tonsils", ["Palatine tonsils", "Lingual tonsils", "Submental nodes"], "The deck applies the term adenoids to infected pharyngeal tonsils."],
      ["Lymphoid tissue is identified on the posterior surface of the tongue. Which tonsil type is it?", "Lingual tonsil", ["Pharyngeal tonsil", "Palatine tonsil", "Supraclavicular node"], "Lingual tonsils lie on the very posterior oral tongue."], true)
    ]),

    O("25-hyoid-larynx", "25. Hyoid Bone and Laryngeal Cartilages", [
      K("Hyoid bone", `<p>The hyoid lies at C3 between the mandible and thyroid cartilage. It is the only bone in the body that does not articulate with another bone. It supports the larynx and airway and assists tongue movement and swallowing.</p>`,
      ["At which vertebral level does the lecture place the hyoid bone?", "C3", ["C1", "C5", "T1"], "The hyoid is located at the C3 level."],
      ["Which feature distinguishes the hyoid from other bones in the lecture?", "It does not articulate with another bone", ["It contains the pituitary gland", "It forms the tympanic membrane", "It drains the thoracic duct"], "The hyoid is uniquely suspended without a bony articulation."], true),
      K("Larynx and cartilage landmarks", `<p>The larynx protects the tracheal entrance and produces voice through nine cartilages. The superior thyroid-cartilage edge lies at C4, while the inferior cricoid edge lies at C5.</p><p>The palpable cricothyroid membrane sits between them. The thyroid isthmus lies just below the cricoid, with lobes lateral to the cricoid and lower thyroid cartilage.</p>`,
      ["What palpable structure lies between the thyroid and cricoid cartilages?", "Cricothyroid membrane", ["Articular disc", "Tympanic membrane", "Alar fascia"], "The cricothyroid membrane occupies the soft spot between the two cartilages."],
      ["Which laryngeal cartilage edge is located at C5?", "Inferior edge of the cricoid cartilage", ["Superior edge of the thyroid cartilage", "Hyoid body", "Epiglottis in the deck"], "The lecture places the cricoid's inferior edge at C5."], true)
    ]),

    O("26-neck-muscles", "26. Mastication and Neck Movement", [
      K("Neck flexion and extension", T(["Movement", "Muscles named in the deck"], [["Flexion", "Sternocleidomastoids, anterior/medius/posterior scalenes, and longissimus capitis"], ["Extension", "Splenius capitis and splenius cervicis"]]),
      ["Which muscles are listed for neck extension?", "Splenius capitis and cervicis", ["Masseter and temporalis", "Scalenes only", "Orbicularis oculi and oris"], "The deck assigns splenius capitis and cervicis to extension."],
      ["A movement question lists sternocleidomastoids and scalenes. Which action should be selected?", "Neck flexion", ["Neck extension", "Jaw protrusion", "Eyelid closure"], "Those muscles appear in the neck-flexion group."], true),
      K("Muscles of mastication", `<p>The lecture identifies the <strong>masseter</strong>, <strong>temporalis</strong>, and the <strong>lateral and medial pterygoids</strong> as muscles of chewing. The temporal fossa houses the temporalis, while the infratemporal fossa contains its inferior part and both pterygoids.</p>`,
      ["Which set contains only muscles of mastication from the deck?", "Masseter, temporalis, and pterygoids", ["Scalenes, splenius, and orbicularis oculi", "Longissimus, ciliary body, and iris", "Suprahyoids, tarsi, and conchae"], "The named chewing muscles are masseter, temporalis, and the two pterygoids."],
      ["A muscle sits in the temporal fossa and contributes to chewing. Which muscle is it?", "Temporalis", ["Masseter", "Sternocleidomastoid", "Splenius cervicis"], "The temporal fossa houses the temporalis muscle."], true)
    ]),

    O("27-lymph-drainage", "27. Head and Neck Lymph Drainage", [
      K("Lymph-node function", `<p>Lymph nodes are small masses of lymphatic tissue positioned along lymphatic vessels. They filter lymph derived from interstitial fluid, contain lymphocytes that help fight infection, and ultimately return drainage to the venous system.</p>`,
      ["What fluid source do lymph nodes filter according to the lecture?", "Lymph derived from interstitial fluid", ["Aqueous humor", "Endolymph", "Perilymph"], "Lymphatic fluid originates from the interstitial extracellular compartment."],
      ["Why do lymph nodes contribute to infection defense?", "They contain many lymphocytes", ["They secrete cerumen", "They move the jaw", "They produce vitreous humor"], "The lecture links nodal lymphocytes with fighting infection."], true),
      K("Regional drainage", T(["Source", "First named drainage"], [["Posterior auricle", "Postauricular nodes"], ["Anterior auricle", "Preauricular nodes"], ["Ear lobe", "Superficial cervical nodes"], ["Anterior chin", "Submental nodes"], ["Lateral jaw and lower teeth", "Submandibular nodes"], ["Posterior scalp", "Occipital nodes"], ["Oropharynx", "Superficial and posterior cervical nodes"], ["Neck", "Supraclavicular nodes"]]),
      ["Where does the posterior scalp drain?", "Occipital nodes", ["Submental nodes", "Preauricular nodes", "Submandibular nodes"], "The deck routes posterior scalp lymph to the occipital nodes."],
      ["Neck lymph has reached the left supraclavicular nodes. What final route does the deck identify?", "Thoracic duct", ["Right venous angle", "Lacrimal sac", "Scleral venous sinus"], "Left supraclavicular drainage enters the thoracic duct; the right drains to the right venous angle."], true)
    ]),

    O("28-neck-fascia", "28. Cervical Fascia and Spaces", [
      K("Superficial and deep cervical fascia", `<p>Superficial fascia forms the subcutaneous layer around the neck. Deep cervical fascia compartmentalizes and supports the cervical viscera, muscles, vessels, and deep lymph nodes, and condenses around the carotid arteries, internal jugular veins, and vagal nerves.</p>${T(["Deep layer", "Lecture description"], [["Investing", "Surrounds the neck deep to skin and subcutaneous tissue and holds muscles in compartments"], ["Pretracheal", "Encases anterior swallowing muscles and related structures"], ["Prevertebral", "Surrounds cervical vertebrae, carotid-sheath structures, and posterolateral neck muscles"], ["Alar", "Divides the retropharyngeal space and connects and stabilizes the carotid sheaths"]])}`,
      ["Which deep cervical layer surrounds the entire neck and holds muscles in compartments?", "Investing fascia", ["Pretracheal fascia", "Alar fascia", "Palpebral conjunctiva"], "The investing layer forms the broad deep fascial envelope."],
      ["Which fascia encases anterior swallowing muscles and structures?", "Pretracheal fascia", ["Prevertebral fascia", "Investing fascia only", "Orbital fascia"], "The pretracheal layer occupies the anterior neck around swallowing structures."], true),
      K("Cervical fascial spaces", T(["Space", "Boundaries or course"], [["Pretracheal", "Between investing and pretracheal fascia; hyoid to superior anterior mediastinum"], ["Prevertebral", "Between cervical/upper thoracic vertebrae and prevertebral fascia"], ["Retropharyngeal", "Between prevertebral fascia anteriorly and carotid sheaths/alar fascia; largest and most important neck space"]]),
      ["Which cervical space continues from the hyoid to the superior anterior mediastinum?", "Pretracheal space", ["Prevertebral space", "Retropharyngeal space", "Temporal fossa"], "The deck gives that superior-to-inferior course for the pretracheal space."],
      ["Which space does the lecture call the largest and most important in the neck?", "Retropharyngeal space", ["Pretracheal space", "Prevertebral space", "Infratemporal fossa"], "The retropharyngeal space receives that description in the deck."], true)
    ])
  ];
}());
