/* Eye Diseases content derived only from "Stager - Eye Diseases 2026.pptx" and matching objectives. */
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
    "01-red-eye-differential": "Describe the common causes of a red eye and differentiate disorders of the conjunctiva from disorders involving the cornea, anterior chamber, sclera, and orbit.",
    "02-conjunctivitis-comparison": "Differentiate allergic, viral, and bacterial conjunctivitis based on key historical and examination findings.",
    "03-allergic-conjunctivitis": "Recognize the typical clinical presentation of allergic conjunctivitis and identify appropriate initial      treatment, including allergen avoidance, artificial tears, cool compresses, and topical antihistamine/mast-cell stabilizing therapy.",
    "04-viral-conjunctivitis": "Recognize the typical presentation of viral conjunctivitis and describe its usual clinical course, supportive treatment, infection-control measures, and indications for further evaluation.",
    "05-bacterial-conjunctivitis": "Recognize the clinical features of bacterial conjunctivitis and select appropriate initial management, including situations in which topical antibiotics may be indicated.",
    "06-hyperacute-conjunctivitis": "Identify hyperacute bacterial conjunctivitis and recognize the risk of rapid corneal involvement and vision loss requiring systemic treatment and urgent ophthalmologic evaluation.",
    "07-allergy-eye-drugs": "Differentiate ophthalmic antihistamines, mast-cell stabilizers, and topical decongestants by their mechanisms, clinical uses, onset of action, and important adverse effects or precautions.",
    "08-ophthalmic-antibiotics": "Identify common ophthalmic antibiotic agents and describe their primary indications, important adverse effects, and key precautions.",
    "09-subconjunctival-hemorrhage": "Recognize subconjunctival hemorrhage based on its characteristic appearance and differentiate it from other causes of ocular redness using the absence of pain, photophobia, discharge, and visual impairment.",
    "10-keratitis-ulcer": "Describe the pathophysiology, risk factors, clinical features, and initial management of corneal ulceration and infectious keratitis, and recognize the need for same-day ophthalmologic evaluation.",
    "11-herpes-zoster-ophthalmicus": "Recognize the clinical presentation of herpes zoster ophthalmicus and identify patients who require prompt ophthalmologic evaluation because of possible corneal or intraocular involvement.",
    "12-pinguecula-pterygium": "Differentiate pinguecula from pterygium based on their anatomic location and describe initial management strategies, including ocular surface protection, lubrication, UV protection, and recognition of situations in which ophthalmologic evaluation or surgical management may be appropriate.",
    "13-ocular-inflammation": "Differentiate anterior uveitis, posterior uveitis, scleritis, and endophthalmitis based on the structures involved and their characteristic clinical presentations.",
    "14-systemic-ocular-inflammation": "Recognize systemic inflammatory, autoimmune, infectious, and other underlying conditions that may be associated with ocular inflammation and identify when further systemic evaluation is warranted.",
    "15-inflammatory-treatment": "Describe the general principles of treatment for ocular inflammatory disorders, including cycloplegic agents, ophthalmology-directed corticosteroid therapy, and cause-specific antimicrobial treatment when an infectious etiology is identified.",
    "16-lid-lacrimal-disorders": "Recognize the common clinical presentations and underlying mechanisms of eyelid and lacrimal disorders, including blepharitis, dry eye disease, hordeolum, chalazion, ectropion, entropion, dacryocystitis, and dacryoadenitis.",
    "17-lid-lacrimal-management": "Describe the initial management of common eyelid and lacrimal disorders, including lid hygiene and warm compresses for appropriate conditions, lubrication for ocular surface disease, and when antimicrobial therapy or ophthalmologic referral is indicated.",
    "18-lid-lacrimal-triage": "Apply key history and examination findings to differentiate benign eyelid and lacrimal disorders from conditions requiring urgent or emergent ophthalmologic evaluation.",
    "19-orbital-cellulitis-comparison": "Differentiate preseptal (periorbital) cellulitis from orbital cellulitis based on key history and examination findings and recognize orbital cellulitis as an ophthalmic emergency.",
    "20-orbital-cellulitis-management": "Describe the general principles of initial management for periorbital and orbital cellulitis, including appropriate antimicrobial therapy, imaging when indicated, hospitalization for significant orbital disease, and ophthalmology consultation.",
    "21-retinal-risk-screening": "Recognize the major risk factors for common retinal disorders, including diabetes, hypertension, dyslipidemia, smoking, and advancing age, and identify the importance of appropriate retinal screening in at-risk patients.",
    "22-diabetic-retinopathy-findings": "Recognize the characteristic funduscopic findings of diabetic retinopathy—including microaneurysms, retinal hemorrhages, hard exudates, and neovascularization—and differentiate nonproliferative from proliferative disease.",
    "23-diabetic-retinopathy-path": "Explain the pathophysiology of diabetic retinopathy, including chronic microvascular injury, retinal ischemia, vascular leakage, and VEGF-mediated neovascularization, and describe the major principles of management.",
    "24-hypertensive-retinopathy": "Recognize characteristic findings of hypertensive retinopathy, including arteriovenous nicking, cotton-wool spots, retinal hemorrhages, and papilledema in severe disease, and identify when severe hypertension represents a medical emergency.",
    "25-retinoblastoma": "Recognize retinoblastoma based on its characteristic presentation—particularly leukocoria and strabismus—and identify leukocoria as a finding requiring urgent ophthalmologic evaluation.",
    "26-macular-degeneration": "Differentiate dry from neovascular (“wet”) age-related macular degeneration based on their underlying pathology, characteristic findings, clinical progression, and treatment principles.",
    "27-retinal-detachment": "Recognize retinal detachment based on the acute onset of flashes, floaters, a curtain or veil over the visual field, and painless monocular visual changes, and identify the need for same-day ophthalmologic evaluation.",
    "28-central-retinal-artery": "Recognize central retinal artery occlusion as an acute ischemic event involving the retina and identify its characteristic presentation—including sudden, painless monocular vision loss, a relative afferent pupillary defect, and a cherry-red spot—and prioritize immediate ophthalmologic and stroke evaluation.",
    "29-rapd": "Explain the significance of a relative afferent pupillary defect (RAPD).",
    "30-optic-neuritis": "Recognize the characteristic clinical presentation of optic neuritis and identify its association with demyelinating disease.",
    "31-amaurosis-fugax": "Recognize amaurosis fugax as transient monocular retinal ischemia and identify its association with carotid or cardioembolic disease and its significance as a potential TIA equivalent.",
    "32-strabismus-amblyopia": "Apply age-appropriate screening and examination techniques to identify strabismus and amblyopia, recognize their common causes and risk factors, and describe initial management and indications for ophthalmologic referral to prevent permanent vision loss.",
    "33-presbyopia": "Describe the etiology, clinical features, and treatment of presbyopia.",
    "34-nystagmus": "Recognize abnormal nystagmus patterns and identify new-onset nystagmus accompanied by neurologic findings as a potential sign of central nervous system disease requiring further evaluation.",
    "35-glaucoma-definition": "Describe glaucoma as a group of optic neuropathies characterized by progressive optic nerve damage and visual field loss, and explain the relationship between intraocular pressure and glaucoma.",
    "36-open-angle-glaucoma": "Recognize major risk factors and typical examination findings associated with primary open-angle glaucoma, including progressive peripheral visual field loss, increased cup-to-disc ratio, and characteristic optic nerve changes.",
    "37-glaucoma-comparison": "Differentiate primary open-angle glaucoma from acute angle-closure glaucoma based on onset, symptoms, pupillary findings, corneal appearance, intraocular pressure, and overall clinical presentation.",
    "38-acute-angle-closure": "Recognize acute angle-closure glaucoma as an ophthalmic emergency and identify its characteristic presentation, including severe eye pain, headache, nausea/vomiting, halos around lights, decreased vision, a fixed or mid-dilated pupil, and a cloudy cornea.",
    "39-glaucoma-drugs": "Describe the major classes of medications used to lower intraocular pressure—including prostaglandin analogs, beta blockers, alpha-2 agonists, carbonic anhydrase inhibitors, and cholinergic agents—and identify their general mechanisms and important adverse effects or contraindications.",
    "40-angle-closure-treatment": "Describe the initial pharmacologic management of acute angle-closure glaucoma, including rapid reduction of intraocular pressure and subsequent use of pilocarpine when appropriate, and identify laser peripheral iridotomy as definitive treatment.",
    "41-ocular-injuries": "Recognize common ocular injuries—including corneal abrasions, foreign bodies, hyphema, lens injuries, retinal injuries, globe rupture, intraocular foreign bodies, and orbital fractures—and identify their characteristic clinical presentations.",
    "42-lid-brow-lacerations": "Summarize the appropriate management of eyebrow and eyelid lacerations",
    "43-ocular-foreign-bodies": "Describe the evaluation and initial management of ocular foreign bodies and penetrating injuries, differentiate superficial from intraocular injuries, and recognize when manipulation should be avoided and emergent ophthalmologic consultation is required.",
    "44-chemical-burns": "Recognize chemical ocular burns as an ophthalmic emergency and prioritize immediate, copious irrigation before completing the remainder of the evaluation.",
    "45-hyphema": "Recognize hyphema following ocular trauma and describe appropriate initial management, including ophthalmologic evaluation, head elevation, and avoidance of medications that increase bleeding risk when appropriate.",
    "46-blowout-fracture": "Recognize orbital blowout fractures and their characteristic findings—including diplopia, restricted extraocular movement, enophthalmos, and infraorbital numbness—and determine the appropriate need for imaging, specialist evaluation, and follow-up."
  };

  function O(id, title, cards) {
    var test = [], apply = [];
    cards.forEach(function (card, cardIndex) {
      (card.tests || []).forEach(function (question) { test.push({ prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation, card: cardIndex }); });
      (card.application || []).forEach(function (question) { apply.push({ prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation, card: cardIndex }); });
    });
    return { id: id, title: title, description: objectiveStatements[id] || "", cards: cards, test: test, apply: apply };
  }

  window.EYE_DISEASE_OBJECTIVES = [
    O("01-red-eye-differential", "1. Red Eye Differential", [
      K("Anatomic clues", `${T(["Site", "Clues"], [["Conjunctiva", "Diffuse injection with itching or watery/purulent discharge; vision usually preserved"], ["Cornea/anterior chamber", "Pain, photophobia, decreased vision, opacity, ciliary flush, abnormal pupil, or hypopyon"], ["Sclera", "Deep redness with severe boring pain, often worse with eye movement"], ["Orbit", "Proptosis, pain or restriction with extraocular movement, diplopia, or reduced vision"]])}<p>Moderate or severe pain, photophobia, decreased acuity, corneal opacity, ciliary flush, abnormal pupil, proptosis, painful EOMs, hypopyon, contact-lens-associated pain, trauma, foreign body, or chemical exposure are red flags.</p>`,
      ["Which combination makes routine conjunctivitis unlikely?", "Pain, photophobia, and decreased vision", ["Itching with watery discharge", "Normal visual acuity", "Bilateral sneezing"], "The deck warns not to assume conjunctivitis when this triad is present."],
      ["A red eye includes proptosis and pain with eye movement. Which compartment is concerning?", "Orbit", ["Conjunctiva only", "Eyelash follicle", "Lacrimal punctum only"], "Orbital involvement causes proptosis and painful or restricted EOMs."], true)
    ]),

    O("02-conjunctivitis-comparison", "2. Conjunctivitis Comparison", [
      K("Allergic, viral, and bacterial", `${T(["Type", "Key pattern"], [["Allergic", "Often bilateral; marked itching, watery discharge, lid edema, and nasal allergy symptoms"], ["Viral", "Watery discharge with URI symptoms; more common in adults; usually adenovirus"], ["Bacterial", "Purulent discharge; often linked to acute otitis media; more common in children"]])}`,
      ["Which feature most strongly favors allergic conjunctivitis?", "Prominent itching", ["Profuse purulent discharge", "Corneal opacity", "Fixed pupil"], "Itching is the hallmark allergic symptom."],
      ["A child has injected conjunctiva, purulent discharge, and acute otitis media. Which type fits?", "Bacterial conjunctivitis", ["Allergic conjunctivitis", "Viral conjunctivitis", "Subconjunctival hemorrhage"], "Purulence and associated otitis media favor bacterial disease."], true)
    ]),

    O("03-allergic-conjunctivitis", "3. Allergic Conjunctivitis", [
      K("Recognition and initial care", `<p>IgE-mediated allergic conjunctivitis is often bilateral and causes itching, redness, watery discharge, and eyelid edema with sneezing, congestion, or rhinorrhea.</p><p>Start allergen avoidance, cool compresses, artificial tears, and topical antihistamine/mast-cell-stabilizing drops.</p>`,
      ["What is appropriate initial treatment for allergic conjunctivitis?", "Allergen avoidance, artificial tears, cool compresses, and topical antihistamine/mast-cell stabilizer", ["Systemic ceftriaxone", "Immediate laser iridotomy", "Rigid eye shield only"], "The lecture combines surface care with targeted topical allergy therapy."],
      ["Bilateral itchy watery eyes occur during allergy season with sneezing. What is most likely?", "Allergic conjunctivitis", ["Bacterial keratitis", "Orbital cellulitis", "CRAO"], "The ocular and nasal allergy pattern is classic."], true)
    ]),

    O("04-viral-conjunctivitis", "4. Viral Conjunctivitis", [
      K("Course, support, and precautions", `<p>Adenovirus is most common. Watery injection accompanies a URI syndrome such as rhinorrhea, low fever, myalgias, cough, or sore throat. It is more frequent in adults and usually self-limited.</p><p>Use artificial tears and cold compresses. Antibiotics are not indicated. Stress strict hygiene, infection control, and stopping contact lenses until symptoms resolve. Red-flag pain, photophobia, reduced vision, or corneal findings require further evaluation.</p>`,
      ["What is the usual treatment for uncomplicated viral conjunctivitis?", "Supportive care with artificial tears and cold compresses", ["Routine topical antibiotics", "Laser treatment", "Systemic anticoagulation"], "The illness is usually self-limited."],
      ["An adult has watery red eyes with cough and sore throat but normal vision. What advice matters?", "Strict hygiene and no contact lenses until symptoms resolve", ["Share towels", "Start topical steroids independently", "Ignore new photophobia"], "Adenoviral disease spreads easily and contact lenses should be paused."], true)
    ]),

    O("05-bacterial-conjunctivitis", "5. Bacterial Conjunctivitis", [
      K("Features and initial management", `<p>Bacterial conjunctivitis causes conjunctival injection with purulent discharge and is more common in children. It may accompany acute otitis media. Common organisms include <em>S. aureus</em>, <em>H. influenzae</em>, <em>S. pneumoniae</em>, and <em>Moraxella</em>.</p><p>Many uncomplicated cases self-resolve. Selected patients may receive trimethoprim/polymyxin B drops or erythromycin ointment. Contact-lens wearers need a fluoroquinolone for Pseudomonas coverage. Teach hand hygiene.</p>`,
      ["Which discharge pattern suggests bacterial conjunctivitis?", "Purulent discharge", ["Watery discharge with itching", "No discharge with a sharply demarcated hemorrhage", "Clear discharge with dendrites"], "Purulence distinguishes bacterial disease in the deck."],
      ["A contact-lens wearer needs antibiotic treatment for conjunctivitis. Which class is preferred?", "Topical fluoroquinolone", ["Topical decongestant", "Cycloplegic alone", "Ophthalmic anesthetic for home use"], "Fluoroquinolones provide superior Pseudomonas coverage."], true)
    ]),

    O("06-hyperacute-conjunctivitis", "6. Hyperacute Bacterial Conjunctivitis", [
      K("Sight-threatening gonococcal disease", `<p>Hyperacute disease is caused by <em>Neisseria</em>, especially <em>N. gonorrhoeae</em>. It causes profuse purulent discharge, severe redness, irritation, and tenderness. Untreated keratitis occurs in 15–40% and can rapidly perforate the cornea.</p><p>Give ceftriaxone 1 g IM once, evaluate and treat concomitant STI, and obtain urgent ophthalmology consultation. Significant corneal involvement or unreliable treatment/follow-up may require hospitalization and IV therapy.</p>`,
      ["Which organism most strongly suggests hyperacute conjunctivitis?", "Neisseria gonorrhoeae", ["Adenovirus", "Acanthamoeba", "HSV only"], "Gonococcal infection produces the hyperacute pattern."],
      ["Profuse purulent discharge and severe tenderness develop rapidly after STI exposure. What is required?", "Systemic ceftriaxone and urgent ophthalmology evaluation", ["Artificial tears only", "Topical decongestant only", "Routine follow-up in one month"], "Rapid corneal destruction makes this an emergency."], true)
    ]),

    O("07-allergy-eye-drugs", "7. Ophthalmic Allergy Medications", [
      K("Three medication groups", `${T(["Class", "Mechanism and use", "Key precaution"], [["Antihistamines", "Block H1; many also stabilize mast cells; relieve ocular allergy", "Transient burning, headache, bitter taste; preserved drops can irritate"], ["Mast-cell stabilizers", "Prevent release of histamine and other mediators; seasonal prevention", "Need 5–14 days for full effect, so not for acute relief"], ["Decongestants", "Alpha-1 vasoconstriction reduces redness", "Limit to 3 days to avoid rebound redness; may dilate pupil or raise IOP"]])}<p>BAK-containing products should not be used while contact lenses are in place. Use decongestants cautiously in glaucoma.</p>`,
      ["Which allergy-eye drug class takes 5–14 days for full effect?", "Mast-cell stabilizers", ["Topical decongestants", "Fluoroquinolones", "Cycloplegics"], "They prevent mediator release and work best as seasonal prevention."],
      ["A patient has used Visine for a week and redness worsens when it wears off. What explains this?", "Rebound redness from prolonged topical decongestant use", ["Bacterial resistance", "Retinal detachment", "Lens opacity"], "The deck limits decongestants to three consecutive days."], true)
    ]),

    O("08-ophthalmic-antibiotics", "8. Ophthalmic Antibiotics", [
      K("Agent selection and safety", `${T(["Agent/group", "Primary role", "Important point"], [["Trimethoprim/polymyxin B", "Common first-line drop for uncomplicated bacterial conjunctivitis", "Transient stinging or irritation can occur"], ["Erythromycin ointment", "Newborn prophylaxis and treatment when needed in pregnancy", "Ointment formulation"], ["Fluoroquinolones", "Contact-lens wearers and Pseudomonas risk", "May cause lid crusting or foreign-body sensation"], ["Aminoglycosides", "Strong gram-negative coverage including Pseudomonas", "Tobramycin does not cover gonorrhea; gentamicin does"], ["Sulfacetamide", "Topical sulfa option", "Rare severe reactions include Stevens-Johnson syndrome and marrow suppression"]])}`,
      ["Which ophthalmic antibiotic group is first line for contact-lens wearers?", "Fluoroquinolones", ["Macrolides only", "Decongestants", "Mast-cell stabilizers"], "Their Pseudomonas coverage is the key reason."],
      ["A pregnant patient requires topical treatment for bacterial conjunctivitis. Which lecture-preferred agent fits?", "Erythromycin ophthalmic ointment", ["Home proparacaine", "Pilocarpine", "Mannitol"], "The deck identifies erythromycin as preferred in pregnancy."], true)
    ]),

    O("09-subconjunctival-hemorrhage", "9. Subconjunctival Hemorrhage", [
      K("Characteristic benign pattern", `<p>A sharply demarcated area of blood appears over the sclera while visual acuity remains normal. There is no pain, photophobia, discharge, or visual impairment. Causes include trauma, coughing, vomiting, Valsalva, hypertension, and coagulopathy.</p><p>Reassure the patient. Blood usually resorbs in 1–2 weeks. Recurrent cases warrant evaluation for hypertension or coagulopathy.</p>`,
      ["Which feature supports subconjunctival hemorrhage?", "Demarcated scleral blood with normal vision and no pain", ["Severe pain with fixed pupil", "Purulent discharge", "Proptosis with painful EOMs"], "The absence of inflammatory or visual symptoms distinguishes it."],
      ["A painless red patch appears after coughing; vision is normal. What management is appropriate?", "Reassurance and conservative care", ["Emergent laser iridotomy", "Systemic ceftriaxone", "Rigid eye shield"], "An uncomplicated hemorrhage resolves over one to two weeks."], true)
    ]),

    O("10-keratitis-ulcer", "10. Corneal Ulcer and Infectious Keratitis", [
      K("Pathogenesis and red flags", `<p>Corneal epithelial disruption permits infection or inflammation, which can progress to ulceration, scarring, impaired vision, and blindness. Risks include contact lenses, especially overnight wear, trauma, epithelial injury, and infectious exposure.</p><p>Severe pain, photophobia, reduced vision, watery or purulent discharge, ciliary flush, and a white corneal opacity indicate keratitis or ulcer until proven otherwise. Hypopyon may occur.</p>`,
      ["Which finding is characteristic of a corneal ulcer?", "White corneal opacity with pain and decreased vision", ["Painless scleral blood patch", "Painless lid nodule", "Normal vision with itching only"], "Corneal opacity plus pain and visual loss is high risk."],
      ["A contact-lens wearer has severe pain, photophobia, and a white corneal lesion. What is most likely?", "Infectious keratitis with corneal ulceration", ["Simple allergic conjunctivitis", "Subconjunctival hemorrhage", "Chalazion"], "Contact-lens use and a painful opacity strongly suggest keratitis."], true),
      K("Immediate management and variants", `<p>Stop contact-lens use. Start ciprofloxacin or ofloxacin drops, use a cycloplegic for pain from associated iritis, and arrange ophthalmology evaluation within 12–24 hours.</p><p>Severe pain out of proportion after nonsterile-water lens exposure suggests Acanthamoeba and needs specific ophthalmology-directed therapy. A unilateral fluorescein-staining dendritic lesion indicates HSV keratitis; use antiviral therapy and avoid topical steroids in active epithelial disease.</p>`,
      ["What is the required referral timing for corneal ulceration?", "Same day, within 12–24 hours", ["Routine yearly exam", "Follow-up only if symptoms last a month", "No referral"], "Corneal scarring and perforation can threaten sight."],
      ["A contact-lens wearer cleaned lenses in tap water and has pain out of proportion. What organism is concerning?", "Acanthamoeba", ["Adenovirus", "Moraxella only", "VZV only"], "This exposure and disproportionate pain are the lecture pearl."], true)
    ]),

    O("11-herpes-zoster-ophthalmicus", "11. Herpes Zoster Ophthalmicus", [
      K("V1 reactivation and corneal risk", `<p>HZO is VZV reactivation in the ophthalmic division of CN V. A unilateral dermatomal vesicular rash affects the forehead or scalp with eye pain, redness, or photophobia. Ocular disease may include keratitis, uveitis, or conjunctivitis. Vesicles on the nasal tip, Hutchinson sign, predict corneal involvement.</p><p>Start systemic acyclovir, valacyclovir, or famciclovir promptly and arrange ophthalmology review within 48 hours. Immunosuppressed patients require hospitalization for IV antivirals.</p>`,
      ["What does Hutchinson sign predict in HZO?", "Corneal involvement", ["Retinal detachment", "Bacterial conjunctivitis", "Open-angle glaucoma"], "Nasal-tip vesicles reflect involvement of a V1 branch supplying the cornea."],
      ["An immunosuppressed patient has unilateral V1 vesicles and eye pain. What management is appropriate?", "Hospitalize for IV antiviral therapy and ophthalmology evaluation", ["Use artificial tears only", "Give topical decongestant", "Delay evaluation"], "Immunosuppression and ocular symptoms raise the urgency."], true)
    ]),

    O("12-pinguecula-pterygium", "12. Pinguecula vs Pterygium", [
      K("Anatomic distinction and management", `${T(["Feature", "Pinguecula", "Pterygium"], [["Location", "Yellow-white conjunctival lesion over sclera; does not reach cornea", "Wedge-shaped growth extending onto cornea"], ["Cause", "UV, wind, and dust", "UV, wind, and dust"], ["Initial care", "UV protection and artificial tears", "UV protection and artificial tears"], ["Escalation", "Steroid/NSAID for moderate-severe disease; excision for cosmesis", "Ophthalmology; excise when growth enters visual axis"]])}`,
      ["Which lesion crosses onto the cornea?", "Pterygium", ["Pinguecula", "Chalazion", "Subconjunctival hemorrhage"], "Corneal extension is the key distinction."],
      ["A wedge-shaped conjunctival growth approaches the visual axis. What is appropriate?", "Ophthalmology evaluation for possible excision", ["No follow-up is ever needed", "Systemic ceftriaxone", "Rigid eye shield"], "Visual-axis involvement is a surgical indication."], true)
    ]),

    O("13-ocular-inflammation", "13. Ocular Inflammatory Disorders", [
      K("Structures and presentations", `${T(["Disorder", "Structure and presentation"], [["Anterior uveitis", "Iris/ciliary body; painful red eye, photophobia, ciliary flush, miosis, possible hypopyon"], ["Posterior uveitis", "Choroid/retina; painless decreased acuity with floaters, sometimes flashes"], ["Scleritis", "Sclera; severe constant boring pain radiating to face, worse at night and with EOMs; deep redness"], ["Endophthalmitis", "Vitreous and other intraocular tissues; pain, photophobia, vision loss, lid swelling, chemosis, hypopyon, reduced red reflex, or high IOP"]])}`,
      ["Which disorder causes severe boring pain worsened by eye movement?", "Scleritis", ["Posterior uveitis", "Subconjunctival hemorrhage", "Chalazion"], "Deep scleral inflammation produces characteristic boring pain."],
      ["Painless floaters and reduced vision without marked redness suggest what?", "Posterior uveitis", ["Anterior uveitis", "Scleritis", "Bacterial conjunctivitis"], "Posterior inflammation presents mainly as a vision problem."], true)
    ]),

    O("14-systemic-ocular-inflammation", "14. Systemic Causes of Ocular Inflammation", [
      K("When to look beyond the eye", `<p>Infectious associations include CMV, HSV, VZV, syphilis, Lyme disease, RMSF, TB, cat-scratch disease, Aspergillus, Candida, histoplasmosis, Acanthamoeba, toxoplasmosis, and cysticercosis.</p><p>Inflammatory or autoimmune associations include HLA-B27 spondyloarthropathies, lupus, sarcoidosis, and Sjögren syndrome. Scleritis is especially linked to rheumatoid arthritis and granulomatosis with polyangiitis. Endogenous endophthalmitis can arise from endocarditis, UTI, abdominal abscess, meningitis, or IV drug use. Recurrent, severe, posterior, or atypical inflammation warrants systemic evaluation.</p>`,
      ["Which systemic diseases are strongly associated with scleritis?", "Rheumatoid arthritis and granulomatosis with polyangiitis", ["Presbyopia and cataract", "Dry AMD and strabismus", "Chalazion and hordeolum"], "The lecture highlights these rheumatic associations."],
      ["A patient with IV drug use develops intraocular infection without eye trauma. Which route is likely?", "Endogenous hematogenous seeding", ["Exogenous surgical inoculation", "Allergic conjunctival reaction", "Lens hardening"], "Bloodstream pathogens can seed the vascular choroid and vitreous."], true)
    ]),

    O("15-inflammatory-treatment", "15. Treatment of Ocular Inflammation", [
      K("Ophthalmology-directed therapy", `<p>Urgent ophthalmology evaluation guides treatment. Anterior uveitis commonly receives a topical corticosteroid plus a cycloplegic. Cycloplegia relieves pain from ciliary spasm. Infectious causes require organism-specific antimicrobial treatment.</p><p>Do not start empiric ocular steroids until HSV or infectious keratitis has been excluded. Steroids can reactivate epithelial HSV, worsen fungal infection, delay healing, raise IOP, and cause posterior subcapsular cataracts. Endophthalmitis needs immediate vitreous aspiration, intravitreal antibiotics and steroids, systemic antibiotics, and sometimes vitrectomy.</p>`,
      ["Why are cycloplegic drops used in anterior uveitis?", "To relieve pain from ciliary spasm", ["To treat retinal emboli", "To lower systemic blood pressure", "To dissolve a cataract"], "Cycloplegia addresses painful iritis-related spasm."],
      ["A painful red eye may have HSV keratitis. Should empiric topical steroids be started?", "No; infectious keratitis must be excluded first", ["Yes, without examination", "Yes, with no antiviral", "Only as home anesthetic"], "Steroids can worsen active epithelial HSV disease."], true)
    ]),

    O("16-lid-lacrimal-disorders", "16. Eyelid and Lacrimal Disorders", [
      K("Lid disorders", `${T(["Disorder", "Mechanism and presentation"], [["Blepharitis", "Chronic recurrent lid-margin inflammation with redness, crusting, burning, itching, or foreign-body sensation"], ["Dry eye", "Reduced tears or excess evaporation; gritty burning, fluctuating vision, and sometimes reflex tearing"], ["Chalazion", "Blocked meibomian gland; subacute, firm, nontender tarsal nodule"], ["Hordeolum", "Acute infected blocked gland, usually S. aureus; tender red pustule at lid margin"], ["Ectropion", "Outward lid turning with exposed conjunctiva, dryness, and epiphora"], ["Entropion", "Inward lid turning; lashes abrade the cornea"]])}`,
      ["Which lesion is a painless firm eyelid nodule?", "Chalazion", ["Hordeolum", "Dacryocystitis", "Orbital cellulitis"], "A chalazion is blocked but not acutely infected."],
      ["A tender erythematous pustule appears at the lid margin over two days. What is it?", "Hordeolum", ["Chalazion", "Ectropion", "Dry eye"], "Acute tenderness distinguishes a hordeolum."], true),
      K("Lacrimal disorders", `${T(["Disorder", "Clue"], [["Dacryocystitis", "Painful red swelling at medial canthus with tearing; pus may express from punctum"], ["Dacryoadenitis", "Painful swelling at upper outer lid over lacrimal gland"], ["Dacryostenosis", "Nasolacrimal obstruction with chronic tearing, lash debris, and tears on cheek; often congenital"]])}`,
      ["What location suggests dacryocystitis?", "Medial canthus", ["Upper outer lid", "Corneal center", "Temporal retina"], "The lacrimal sac lies near the medial canthus."],
      ["Painful swelling of the upper outer eyelid localizes to which disorder?", "Dacryoadenitis", ["Dacryocystitis", "Chalazion", "Entropion"], "The lacrimal gland occupies the superolateral orbit."], true)
    ]),

    O("17-lid-lacrimal-management", "17. Eyelid and Lacrimal Management", [
      K("Initial care and referral", `${T(["Problem", "Initial management"], [["Blepharitis", "Regular warm compresses and gentle lid hygiene; treat associated dry eye or dermatitis"], ["Dry eye", "Risk-factor modification and artificial tears; refer persistent or severe disease"], ["Chalazion/hordeolum", "Warm compresses; do not self-drain; refer unresolved lesions for I&D"], ["Ectropion/entropion", "Lubrication and ophthalmology; surgery often definitive"], ["Dacryocystitis", "Warm compresses and antibiotics when bacterial; urgent care if severe/systemic"], ["Congenital dacryostenosis", "Crigler massage; refer if not improved by 6–7 months"]])}`,
      ["What is first-line care for blepharitis?", "Warm compresses and lid hygiene", ["Immediate enucleation", "Systemic thrombolysis", "Laser iridotomy"], "Chronic lid-margin inflammation responds to local hygiene."],
      ["A hordeolum has not resolved after several weeks. What is next?", "Ophthalmology evaluation for drainage", ["Attempt self-drainage", "Ignore indefinitely", "Start anticoagulation"], "Persistent lesions may require I&D."], true)
    ]),

    O("18-lid-lacrimal-triage", "18. Eyelid and Lacrimal Triage", [
      K("Benign versus urgent", `<p>Localized crusting, gritty burning without major pain or vision loss, a painless chalazion, or a small tender hordeolum usually receives routine initial care.</p><p>Escalate for vision change, significant eye pain, photophobia, proptosis, restricted or painful EOMs, abnormal pupil, corneal injury, spreading infection, systemic illness, recurrent obstruction, or persistent disease. Hordeola can progress to preseptal cellulitis, while entropion can cause corneal abrasion or ulceration.</p>`,
      ["Which finding makes a lid disorder urgent?", "Reduced vision with painful restricted eye movements", ["Painless small chalazion", "Mild lash crusting", "Chronic gritty sensation alone"], "Vision and orbital signs suggest deeper disease."],
      ["An inward-turned lid causes lashes to scrape the cornea. Why refer?", "Entropion can cause corneal abrasion or ulceration", ["It causes retinal emboli", "It always causes cataract", "It is a normal variant"], "Trichiasis threatens the corneal surface."], true)
    ]),

    O("19-orbital-cellulitis-comparison", "19. Preseptal vs Orbital Cellulitis", [
      K("Septum-based distinction", `${T(["Feature", "Preseptal", "Orbital"], [["Location", "Anterior to orbital septum", "Posterior to septum in orbital fat/structures"], ["Vision/pupils", "Normal", "May have reduced acuity or abnormal findings"], ["EOM", "Full and painless", "Painful and restricted; diplopia"], ["Proptosis", "Absent", "Present"], ["Other", "Lid edema, erythema, tenderness ± fever", "Chemosis, fever/systemic illness, headache"]])}<p>Ethmoid rhinosinusitis is the most common source of orbital cellulitis. Orbital disease is an ophthalmic emergency.</p>`,
      ["Which finding best distinguishes orbital cellulitis?", "Pain with restricted extraocular movements and proptosis", ["Lid redness alone", "Normal vision", "Full painless EOMs"], "Postseptal inflammation impairs orbital structures."],
      ["A febrile patient with eyelid swelling has normal vision and full painless EOMs. Which diagnosis fits?", "Preseptal cellulitis", ["Orbital cellulitis", "Open globe", "CRAO"], "Normal orbital function favors preseptal disease."], true)
    ]),

    O("20-orbital-cellulitis-management", "20. Cellulitis Management", [
      K("Outpatient versus emergency care", `<p>Mild preseptal cellulitis: oral amoxicillin/clavulanate and ophthalmology follow-up within 24 hours. Moderate or severe disease requires admission, IV therapy, and imaging as for orbital cellulitis.</p><p>Orbital cellulitis requires hospital admission, ophthalmology consultation, IV vancomycin plus ceftriaxone or cefotaxime, and ENT involvement when sinusitis is the source. Obtain CBC, BMP, cultures, and contrast CT of the orbits. Markedly elevated IOP from orbital compartment syndrome may require lateral canthotomy.</p>`,
      ["What is the definitive imaging test for orbital cellulitis?", "CT orbits with contrast", ["Noncontrast knee CT", "Carotid ultrasound", "Wood lamp alone"], "Contrast CT shows postseptal fat and muscle inflammation."],
      ["A patient has proptosis, painful EOMs, and reduced vision. What management is appropriate?", "Admit for IV antibiotics and urgent ophthalmology care", ["Oral drops with routine follow-up", "Warm compresses only", "Discharge without imaging"], "Orbital cellulitis threatens vision and intracranial spread."], true)
    ]),

    O("21-retinal-risk-screening", "21. Retinal Risk and Screening", [
      K("Who needs fundoscopy", `<p>Major retinal risk factors include diabetes, hypertension, hypercholesterolemia/dyslipidemia, smoking, and advancing age. Retinopathy may remain asymptomatic until damage progresses.</p><p>Perform fundoscopic examination to stage disease in patients with risk factors, refer evidence of retinopathy to ophthalmology, and control modifiable vascular risks.</p>`,
      ["Why is retinal screening important in high-risk patients?", "Retinopathy is often asymptomatic early", ["It always causes immediate pain", "It can be diagnosed from the eyelid alone", "It replaces blood-pressure care"], "Fundoscopy may detect disease before symptoms."],
      ["A patient with diabetes and hypertension has no visual complaints. What should still be done?", "Risk-appropriate fundoscopic retinal screening", ["Wait for blindness", "Avoid retinal examination", "Use only a Wood lamp"], "Absence of symptoms does not exclude retinopathy."], true)
    ]),

    O("22-diabetic-retinopathy-findings", "22. Diabetic Retinopathy Findings", [
      K("Fundus staging", `<p>Findings include microaneurysms, dot/blot hemorrhages, hard yellow lipid exudates, cotton-wool spots from nerve-fiber infarction, and neovascularization.</p>${T(["Stage", "Distinguishing feature"], [["Nonproliferative", "Microaneurysms, hemorrhages, exudates, and ischemic changes without new vessels"], ["Proliferative", "Neovascularization with fragile vessels and vitreous-hemorrhage risk"]])}`,
      ["What finding defines proliferative diabetic retinopathy?", "Neovascularization", ["Drusen", "AV nicking", "Leukocoria"], "The lecture pearl equates neovascularization with proliferative disease."],
      ["Fundoscopy shows microaneurysms and hard exudates but no new vessels. Which stage fits?", "Nonproliferative diabetic retinopathy", ["Proliferative disease", "Wet AMD", "CRAO"], "Absent neovascularization keeps the disease nonproliferative."], true)
    ]),

    O("23-diabetic-retinopathy-path", "23. Diabetic Retinopathy Pathophysiology", [
      K("Microvascular injury to VEGF", `<p>Chronic hyperglycemia injures retinal microvessels. Capillary leakage produces hemorrhages and exudates. Retinal ischemia raises VEGF, which drives fragile neovascularization and possible vitreous hemorrhage.</p><p>Optimize glycemic control first, control hypertension and lipids, and refer for ophthalmology-directed laser photocoagulation or anti-VEGF therapy.</p>`,
      ["What drives neovascularization in diabetic retinopathy?", "VEGF released in response to retinal ischemia", ["Lens sclerosis", "Lacrimal obstruction", "Histamine only"], "Hypoxic retina stimulates VEGF."],
      ["A diabetic patient has retinal neovascularization. What management principle applies?", "Optimize vascular risks and refer for laser or anti-VEGF therapy", ["Use artificial tears only", "No glycemic control is needed", "Treat with topical decongestant"], "Proliferative disease requires specialist retinal therapy."], true)
    ]),

    O("24-hypertensive-retinopathy", "24. Hypertensive Retinopathy", [
      K("Findings and emergency clue", `<p>Chronic hypertension damages retinal arterioles. Fundoscopy may show AV nicking, flame-shaped hemorrhages, and cotton-wool spots. Cotton-wool spots are infarcts of the nerve-fiber layer.</p><p>Optic-disc edema/papilledema with severe or malignant hypertension represents a hypertensive emergency. Control blood pressure and refer for formal fundus staging.</p>`,
      ["Which retinal finding reflects vein compression by a high-pressure arteriole?", "AV nicking", ["Drusen", "Cherry-red spot", "Dendritic lesion"], "Arterioles pinch veins at crossings."],
      ["Severe hypertension accompanies optic-disc edema. How should this be classified?", "Hypertensive emergency", ["Routine dry eye", "Simple subconjunctival hemorrhage", "Presbyopia"], "Papilledema in malignant hypertension signals emergency end-organ damage."], true)
    ]),

    O("25-retinoblastoma", "25. Retinoblastoma", [
      K("Leukocoria is urgent", `<p>Retinoblastoma is a malignant retinal tumor diagnosed mainly before age 5. Germline disease is often bilateral and earlier; sporadic somatic disease is usually unilateral.</p><p>The leading clues are leukocoria, a white pupillary reflex, and strabismus. Reduced vision, redness, pain, or proptosis may occur later. Leukocoria requires urgent ophthalmology evaluation and staging. Treatment may include enucleation, chemotherapy, or radiotherapy.</p>`,
      ["What is the classic finding of retinoblastoma?", "Leukocoria", ["Ciliary flush", "Dendritic ulcer", "AV nicking"], "A white pupillary reflex is the must-not-miss clue."],
      ["A toddler's photograph shows a white pupillary reflex. What is the next step?", "Urgent ophthalmology evaluation", ["Routine follow-up next year", "Artificial tears", "Topical decongestant"], "Retinoblastoma must be excluded promptly."], true)
    ]),

    O("26-macular-degeneration", "26. Dry vs Wet Macular Degeneration", [
      K("Central vision disease", `${T(["Feature", "Dry AMD", "Wet AMD"], [["Pathology", "Atrophic degeneration with drusen", "Choroidal neovascularization and leakage"], ["Course", "Usually gradual central vision loss", "Can cause new distortion or sudden central change"], ["Treatment", "Smoking cessation, cardiovascular risk control, selected AREDS2 supplementation, monitoring, low-vision support", "Repeated intravitreal anti-VEGF therapy"]])}<p>Peripheral vision is usually preserved. Smoking is the most modifiable risk; age is the strongest. New metamorphopsia, central vision change, or scotoma needs urgent referral.</p>`,
      ["Which finding is the hallmark of dry AMD?", "Drusen", ["Neovascularization", "Cherry-red spot", "Hypopyon"], "Yellow subretinal deposits characterize the dry form."],
      ["An older smoker develops new central distortion from neovascular AMD. What treatment is used?", "Intravitreal anti-VEGF therapy", ["Topical erythromycin", "Warm compresses", "Pilocarpine only"], "Wet AMD is treated with repeated anti-VEGF injections."], true)
    ]),

    O("27-retinal-detachment", "27. Retinal Detachment", [
      K("Classic history and urgency", `<p>Retinal detachment separates the neurosensory retina from the pigment epithelium and choroid. Sudden flashes, new floaters, and a dark curtain or veil with painless monocular field loss are classic. Risks include age-related vitreous change, myopia, prior detachment, trauma, and intraocular surgery.</p><p>History is primary. Bedside ultrasound may show an undulating posterior membrane, but avoid ultrasound if globe rupture is suspected. Confirmed detachment requires emergent ophthalmology; treatment includes laser sealing, scleral buckle, or vitrectomy.</p>`,
      ["What symptom pattern indicates retinal detachment?", "Flashes, floaters, and a painless curtain over one visual field", ["Itchy bilateral watery eyes", "Painful lid pustule", "Gradual near-focus difficulty"], "The curtain description indicates extension toward the macula."],
      ["A myopic patient develops sudden floaters and a monocular dark veil. What is needed?", "Same-day emergent ophthalmology evaluation", ["Routine yearly follow-up", "Topical antihistamine", "Warm compresses"], "Delay risks permanent visual loss."], true)
    ]),

    O("28-central-retinal-artery", "28. Central Retinal Artery Occlusion", [
      K("Retinal stroke", `<p>Thrombus or embolus occludes the central retinal artery. Carotid atherosclerosis is most common; cardiac emboli and hypercoagulable states also occur.</p><p>Presentation is sudden painless monocular loss over seconds to minutes with RAPD, a pale retina, and cherry-red macula. Do not send home. Determine onset and obtain immediate stroke/neurology plus ophthalmology consultation, assess for giant-cell arteritis when appropriate, and search for carotid, cardiac, and vascular sources.</p>`,
      ["Which fundus finding is classic for CRAO?", "Cherry-red spot on a pale retina", ["Drusen", "Dendritic lesion", "Hypopyon"], "The fovea remains red against ischemic retina."],
      ["Sudden painless monocular blindness occurs with RAPD. What is the priority?", "Immediate stroke and ophthalmology evaluation", ["Routine optometry visit", "Artificial tears", "Warm compresses"], "CRAO is an acute retinal ischemic event."], true)
    ]),

    O("29-rapd", "29. Relative Afferent Pupillary Defect", [
      K("Marcus Gunn pupil", `<p>RAPD means asymmetric afferent visual input, usually from optic-nerve or severe retinal disease. On the swinging-flashlight test, both pupils constrict when light shines in the normal eye, then appear to dilate when the light swings to the affected eye.</p><p>Causes include optic neuritis, CRAO, retinal detachment, severe ischemic retinopathy, and optic-nerve compression or trauma.</p>`,
      ["What does RAPD usually indicate?", "Optic-nerve or severe retinal disease", ["Simple lid inflammation", "Presbyopia", "Allergic conjunctivitis"], "Afferent dysfunction lies before the pupillary motor pathway."],
      ["Both pupils appear to dilate when light moves to the affected eye. What finding is this?", "Relative afferent pupillary defect", ["Fixed angle-closure pupil", "Normal accommodation", "Ectropion"], "This is the positive swinging-flashlight response."], true)
    ]),

    O("30-optic-neuritis", "30. Optic Neuritis", [
      K("Painful demyelinating vision loss", `<p>Optic neuritis is optic-nerve inflammation most often associated with multiple sclerosis and may be its first sign. It also occurs with neuromyelitis optica, viral infection, and autoimmune disease.</p><p>Typical findings are unilateral painful vision loss worsened by eye movement, color desaturation, central scotoma, and RAPD. Fundoscopy may be normal in retrobulbar disease. Evaluate with contrast MRI of brain and orbits, visual fields, and sometimes visual evoked potentials; refer to neurology and ophthalmology. High-dose IV methylprednisolone may be used. Oral prednisone alone is not recommended.</p>`,
      ["Which symptom pattern suggests optic neuritis?", "Painful unilateral vision loss with color desaturation", ["Painless red scleral patch", "Bilateral itchy discharge", "Gradual near-vision loss only"], "Pain with movement and color loss reflect optic-nerve inflammation."],
      ["A young adult has painful eye-movement vision loss and a central scotoma. What association should be evaluated?", "Multiple sclerosis or other demyelinating disease", ["Simple dry eye", "Chalazion", "Bacterial conjunctivitis"], "Optic neuritis commonly accompanies demyelination."], true)
    ]),

    O("31-amaurosis-fugax", "31. Amaurosis Fugax", [
      K("Transient retinal ischemia", `<p>Amaurosis fugax is transient, painless monocular vision loss, often described as a curtain or shade, with recovery to baseline. Retinal emboli commonly arise from carotid stenosis or cardiac sources such as atrial fibrillation, valvular disease, or endocarditis.</p><p>Treat it as an ocular TIA. Obtain urgent stroke/vascular evaluation with carotid duplex, echocardiogram, rhythm monitoring, and vascular labs. Use antiplatelet therapy for appropriate noncardioembolic disease, anticoagulation when indicated for cardioembolism, and selected carotid intervention.</p>`,
      ["What is the clinical significance of amaurosis fugax?", "It is a TIA equivalent and stroke warning", ["It is normal presbyopia", "It is benign dry eye", "It always represents conjunctivitis"], "Transient retinal ischemia can precede CRAO or stroke."],
      ["A curtain briefly covers one eye and fully resolves in a patient with carotid disease. What is likely?", "Amaurosis fugax", ["Retinal detachment", "Optic neuritis", "Acute angle closure"], "Transient painless monocular loss is the defining pattern."], true)
    ]),

    O("32-strabismus-amblyopia", "32. Strabismus and Amblyopia", [
      K("Recognition and screening", `<p>Amblyopia is reduced acuity from abnormal visual development, often caused by strabismus, unequal refractive error, or visual deprivation such as congenital cataract. The eye may look structurally normal.</p><p>Screen every child under 5. In preverbal children assess fixation and objection to occluding the good eye. Test each eye separately after age 3. For strabismus, cover-uncover detects manifest tropia; alternate cover detects latent phoria.</p>`,
      ["Why must each child's eye be tested separately?", "Good binocular performance can hide unilateral amblyopia", ["Both eyes always have equal acuity", "Cover testing measures IOP", "It diagnoses conjunctivitis"], "A better eye can mask poor vision in the other."],
      ["The uncovered eye moves to fixate during cover testing. What does this indicate?", "Manifest strabismus (tropia)", ["Latent phoria only", "Normal alignment", "Presbyopia"], "Movement of the uncovered eye reveals existing misalignment."], true),
      K("Early treatment prevents permanent loss", `<p>Correct refractive error and deprivation causes. Treat amblyopia by patching the better-seeing eye when appropriate. Atropine penalization is another option. Refer persistent, clinically significant, or new-onset strabismus, abnormal cover tests, and associated neurologic findings to ophthalmology.</p>`,
      ["What is a common treatment for amblyopia?", "Patching the better-seeing eye", ["Patching the weaker eye", "Topical decongestant", "Laser iridotomy"], "Occlusion encourages use of the amblyopic eye."],
      ["A child has new strabismus with neurologic findings. What is appropriate?", "Prompt ophthalmology evaluation and further assessment", ["Observation only", "Artificial tears only", "No vision testing"], "New alignment change with neurologic signs is not routine childhood strabismus."], true)
    ]),

    O("33-presbyopia", "33. Presbyopia", [
      K("Age-related loss of accommodation", `<p>Lens sclerosis and weakening ciliary muscle reduce accommodation, usually beginning around age 40–45 and affecting nearly everyone by 50. Patients struggle with reading or near work, develop eye strain or headache, and hold material farther away.</p><p>Treat with reading glasses, bifocal or progressive lenses, monovision or multifocal contacts, or selected surgical options.</p>`,
      ["What causes presbyopia?", "Age-related lens hardening and reduced accommodation", ["Retinal artery embolus", "Orbital infection", "Corneal ulcer"], "The lens can no longer change shape well for near focus."],
      ["A 47-year-old holds menus farther away but distance vision is stable. What is likely?", "Presbyopia", ["CRAO", "Retinal detachment", "Optic neuritis"], "Progressive difficulty with near focus is typical."], true)
    ]),

    O("34-nystagmus", "34. Nystagmus", [
      K("Patterns and central warning", `${T(["Pattern", "Meaning"], [["Jerk", "Slow drift then fast corrective phase; named by fast direction"], ["Pendular", "Equal velocity in both directions; often ocular pathology"], ["Gaze-evoked", "Appears at eccentric gaze; may reflect cerebellar disease or medication"]])}<p>Central causes include cerebellar and brainstem disease, stroke, MS, tumor, and Wernicke encephalopathy. Peripheral causes include BPPV, labyrinthitis, and vestibular neuritis. Phenytoin, carbamazepine, alcohol, and lithium can cause it.</p><p>New nystagmus with neurologic symptoms requires evaluation for central disease.</p>`,
      ["How is jerk nystagmus named?", "By the fast corrective phase", ["By the slow phase", "By pupil size", "By visual acuity"], "Direction follows the fast saccade."],
      ["New vertical nystagmus appears with focal neurologic findings. What is the concern?", "Central nervous system pathology", ["Simple allergic conjunctivitis", "Presbyopia", "Chalazion"], "New nystagmus plus neurologic signs is central until proven otherwise."], true)
    ]),

    O("35-glaucoma-definition", "35. Glaucoma and Intraocular Pressure", [
      K("Progressive optic neuropathy", `<p>Glaucoma is a group of optic neuropathies causing progressive optic-nerve damage and visual-field loss. Elevated IOP commonly contributes, but glaucoma can occur without it. Normal IOP is 10–21 mmHg; above 21 is abnormal.</p><p>Open-angle disease is chronic and insidious. Angle closure produces sudden outflow obstruction and an emergency rise in pressure.</p>`,
      ["Does glaucoma always require elevated IOP?", "No; optic neuropathy can occur without elevated pressure", ["Yes, in every case", "Only cataracts raise IOP", "IOP is unrelated to glaucoma"], "The definition says typically, but not always, associated with high IOP."],
      ["Progressive optic-disc damage and field loss occur with normal measured IOP. Can this still be glaucoma?", "Yes", ["No", "Only if conjunctivitis is present", "Only after trauma"], "Pressure is a risk factor rather than the sole definition."], true)
    ]),

    O("36-open-angle-glaucoma", "36. Primary Open-Angle Glaucoma", [
      K("Risks and examination", `<p>The angle remains open, but increased resistance reduces aqueous outflow. Chronic mechanical and vascular stress damages the nerve.</p><p>Risks include age over 60, African American race, family history, elevated IOP, thin cornea, myopia, and hypertension. Disease is usually silent until gradual painless peripheral or tunnel-vision loss. Fundoscopy shows optic-disc cupping and an increased cup-to-disc ratio: over 0.5 is suspicious and over 0.7 concerning. Evaluate with tonometry, visual fields, and fundus examination.</p>`,
      ["What visual-field pattern occurs in open-angle glaucoma?", "Progressive peripheral loss with central vision preserved until late", ["Sudden monocular blindness", "Transient curtain with full recovery", "Near-vision loss only"], "Chronic damage first narrows the peripheral field."],
      ["An asymptomatic older patient has a cup-to-disc ratio of 0.75. What is appropriate?", "Ophthalmology referral for glaucoma evaluation", ["Reassure with no follow-up", "Treat as conjunctivitis", "Use warm compresses"], "A ratio above 0.7 is concerning."], true)
    ]),

    O("37-glaucoma-comparison", "37. Open-Angle vs Angle-Closure Glaucoma", [
      K("Chronic versus acute", `${T(["Feature", "Open-angle", "Acute angle closure"], [["Onset", "Chronic, insidious", "Sudden emergency"], ["Symptoms", "Usually none until peripheral field loss", "Severe unilateral pain, headache, halos, nausea/vomiting, reduced vision"], ["Pupil", "No characteristic fixed pupil", "Fixed mid-dilated pupil"], ["Cornea", "Usually clear", "Cloudy/steamy from edema"], ["IOP", "Often elevated gradually", "Rapid, marked elevation with rock-hard globe"]])}`,
      ["Which glaucoma type presents with a fixed mid-dilated pupil and cloudy cornea?", "Acute angle-closure glaucoma", ["Primary open-angle glaucoma", "Normal aging", "Presbyopia"], "Sudden angle obstruction produces these acute findings."],
      ["A patient has painless progressive tunnel vision and optic-disc cupping. Which type fits?", "Primary open-angle glaucoma", ["Acute angle closure", "CRAO", "Optic neuritis"], "The chronic peripheral pattern is open angle."], true)
    ]),

    O("38-acute-angle-closure", "38. Acute Angle-Closure Glaucoma", [
      K("Ophthalmic emergency", `<p>The iridocorneal angle suddenly closes, blocking aqueous outflow and causing rapid IOP elevation with optic-nerve and retinal ischemia. Older age, narrow angles, pupillary dilation, darkness, dilating drops, and anticholinergic or sympathomimetic drugs can trigger an attack.</p><p>Look for severe unilateral pain, headache, nausea/vomiting, halos, decreased vision, conjunctival injection, a fixed mid-dilated pupil, steamy corneal edema, and a rock-hard globe. Treat immediately with urgent ophthalmology involvement.</p>`,
      ["Which symptom cluster is classic for acute angle closure?", "Severe eye pain, halos, vomiting, fixed mid-dilated pupil, and cloudy cornea", ["Itching and watery discharge", "Painless red scleral patch", "Painless near-vision difficulty"], "The acute pressure rise creates pain, autonomic symptoms, and corneal edema."],
      ["Eye pain begins after pharmacologic dilation; the pupil is fixed and the cornea cloudy. What is likely?", "Acute angle-closure glaucoma", ["Open-angle glaucoma", "Dry eye", "Chalazion"], "Dilation can close a narrow angle."], true)
    ]),

    O("39-glaucoma-drugs", "39. Glaucoma Medication Classes", [
      K("Outflow and production", `${T(["Class", "Mechanism", "Important effects/precautions"], [["Prostaglandin analogs", "Increase outflow; preferred once-daily agents", "Redness, iris darkening, eyelash growth, periocular change"], ["Beta blockers", "Decrease aqueous production", "Avoid/caution in asthma, bradycardia, heart block; bronchospasm and masked hypoglycemia"], ["Alpha-2 agonists", "Decrease production; brimonidine also increases outflow", "Conjunctivitis, redness, itching"], ["Carbonic anhydrase inhibitors", "Decrease sodium/bicarbonate secretion and aqueous production", "Burning, stinging, itching, dry eye; topical or systemic"], ["Cholinergic agents", "Increase outflow", "Pilocarpine produces miosis"]])}`,
      ["Which class is preferred first line for open-angle glaucoma?", "Prostaglandin analogs", ["Topical anesthetics", "Ophthalmic decongestants", "Macrolide antibiotics"], "They lower IOP effectively with once-daily dosing."],
      ["A patient has asthma and bradycardia. Which glaucoma class needs caution?", "Topical beta blockers", ["Prostaglandin analogs", "Artificial tears", "Fluoroquinolones"], "Systemic beta blockade can cause bronchospasm and bradycardia."], true)
    ]),

    O("40-angle-closure-treatment", "40. Acute Angle-Closure Treatment", [
      K("Lower pressure, then open the angle", `<p>Call ophthalmology and begin treatment without delay. Rapidly lower IOP with topical timolol, topical brimonidine, systemic acetazolamide 500 mg PO or IV, and IV mannitol when needed.</p><p>After pressure begins to fall, pilocarpine can produce miosis and improve outflow. Analgesics and antiemetics provide support. Laser peripheral iridotomy is definitive; medications are temporizing.</p>`,
      ["When should pilocarpine be used in acute angle closure?", "After IOP begins to fall", ["Before any pressure-lowering treatment", "Only after cataract surgery", "Never"], "Once ischemia eases, the iris can respond to cholinergic miosis."],
      ["Pressure improves after timolol, brimonidine, and acetazolamide. What definitive treatment remains?", "Laser peripheral iridotomy", ["Long-term artificial tears", "Warm compresses", "Erythromycin ointment"], "Iridotomy creates an alternate aqueous pathway."], true)
    ]),

    O("41-ocular-injuries", "41. Ocular Injury Patterns", [
      K("High-yield injury clues", `${T(["Injury", "Characteristic presentation"], [["Corneal abrasion", "Pain, photophobia, tearing, blepharospasm, foreign-body sensation; green fluorescein defect"], ["Superficial foreign body", "Foreign-body sensation after dust, metal, wood, or glass; visible mobile surface object"], ["Hyphema", "Visible blood in anterior chamber after trauma with pain, photophobia, reduced vision ± high IOP"], ["Open globe", "Markedly reduced acuity, teardrop pupil, RAPD, hyphema, vitreous extrusion, distorted globe, or positive Seidel"], ["Intraocular foreign body", "High-velocity penetrating mechanism; object remains inside globe"], ["Retinal injury", "Flashes, floaters, curtain, or painless field loss"], ["Orbital fracture", "Diplopia, restricted EOM, enophthalmos, or infraorbital numbness"], ["Lens injury", "Trauma-associated lens opacity or displacement with visual change"]])}`,
      ["What test confirms a corneal abrasion?", "Fluorescein staining showing a green epithelial defect", ["Carotid duplex", "Holter monitor", "Fundoscopy for drusen"], "Fluorescein highlights epithelial loss."],
      ["A high-velocity metal fragment causes a teardrop pupil and severe vision loss. What injury is concerning?", "Open globe with possible intraocular foreign body", ["Simple superficial foreign body", "Allergic conjunctivitis", "Dry eye"], "Penetrating mechanism plus globe distortion requires emergency protection."], true)
    ]),

    O("42-lid-brow-lacerations", "42. Eyelid and Eyebrow Lacerations", [
      K("Assessment and specialist boundaries", `<p>Before repair, check visual acuity, pupils, EOMs, globe integrity, foreign body, orbital involvement, and facial-nerve function.</p><p>For an eyebrow laceration, approximate the eyebrow margin first and do not shave it because the hair preserves landmarks. Simple superficial eyelid cuts away from the margin without canalicular or globe injury may receive routine repair. Consult ophthalmology for lid-margin, medial-canthus, full-thickness tarsal-plate, globe, or levator involvement.</p>`,
      ["Why should the eyebrow not be shaved before repair?", "Hair preserves landmarks for accurate approximation", ["Hair causes glaucoma", "Shaving raises IOP", "It prevents fluorescein use"], "The eyebrow edge should be aligned first."],
      ["An eyelid laceration crosses the medial canthus. What is appropriate?", "Ophthalmology consultation", ["Simple bedside closure only", "No examination", "Topical decongestant"], "Medial injury may involve the canalicular system."], true)
    ]),

    O("43-ocular-foreign-bodies", "43. Ocular Foreign Bodies and Penetrating Injury", [
      K("Evaluation and superficial removal", `<p>Ask mechanism, material, and velocity. Measure visual acuity before manipulation, evert both lids, stain with fluorescein, and use slit lamp examination to assess depth and anterior-chamber integrity.</p><p>A superficial mobile object may be removed after proparacaine using saline irrigation, a moist sterile swab, or fine needle. Recheck acuity, residual material, epithelial injury, keratitis, and Seidel sign. Metallic rust rings require ophthalmology.</p>`,
      ["What must be measured before foreign-body manipulation?", "Visual acuity", ["Only blood pressure", "Only near accommodation", "Cup-to-disc ratio only"], "Baseline acuity is essential in eye trauma."],
      ["A small mobile superficial corneal particle has no penetration signs. What removal may be used?", "Saline irrigation or careful surface removal after topical anesthetic", ["MRI first regardless of metal", "Forceful globe pressure", "Blind deep probing"], "Surface objects can be removed only after depth and globe integrity are confirmed."], true),
      K("When not to manipulate", `<p>Do not remove an embedded object when penetration, intraocular foreign body, globe distortion, or positive Seidel is suspected. Never remove a penetrating object in the ED.</p><p>Place a rigid shield without pressure, keep NPO, prevent vomiting with antiemetics, give analgesia and sedation as needed, administer IV vancomycin plus ceftazidime and tetanus prophylaxis, obtain noncontrast CT of the eye/orbit, and call ophthalmology emergently. Avoid MRI until metal is excluded and avoid ocular ultrasound in suspected rupture.</p>`,
      ["What imaging is preferred for suspected intraocular foreign body?", "CT orbit", ["MRI before excluding metal", "Carotid duplex", "No imaging"], "CT detects foreign material without magnetic risk."],
      ["A protruding object is embedded in a distorted globe. What should be done?", "Leave it in place, shield the eye, keep NPO, and obtain emergent ophthalmology care", ["Remove it immediately", "Apply a pressure patch", "Perform ocular ultrasound"], "Manipulation can extrude ocular contents."], true)
    ]),

    O("44-chemical-burns", "44. Chemical Ocular Burns", [
      K("Irrigate before examination", `<p>Chemical burns are ophthalmic emergencies. Start copious irrigation immediately before completing the examination. Remove contacts and use saline, lactated Ringer solution, or clean water. Tilt toward the injured side, flow medial to lateral, hold lids open, move the eye, evert lids, and irrigate the fornices.</p><p>Check pH and continue until it reaches 7.0–7.4 and remains there for at least 30 minutes. Alkali causes deep liquefactive necrosis and is more dangerous than acid coagulative injury. Significant injury needs immediate ophthalmology; lesser injury needs next-day review.</p>`,
      ["What is the first action for a chemical eye burn?", "Immediate copious irrigation", ["Measure acuity before any irrigation", "Wait for ophthalmology", "Patch the eye dry"], "Irrigation must precede the remainder of the assessment."],
      ["Cement splashes into one eye. How long should irrigation continue?", "Until pH is 7.0–7.4 and remains stable for at least 30 minutes", ["For exactly 30 seconds", "Until pain briefly improves", "No irrigation for alkali"], "Physiologic and sustained pH is the endpoint."], true)
    ]),

    O("45-hyphema", "45. Hyphema", [
      K("Blood in the anterior chamber", `<p>Hyphema is visible blood in the anterior chamber, most often after blunt or penetrating trauma. It causes pain, photophobia, reduced acuity, and sometimes elevated IOP. Rebleeding and pressure-related optic-nerve injury are major complications; sickle-cell patients carry especially high risk.</p><p>Consult ophthalmology, use bed rest with the head elevated 30–45 degrees, avoid NSAIDs and anticoagulants when appropriate, and use ophthalmology-directed analgesic or cycloplegic drops.</p>`,
      ["Where is blood located in a hyphema?", "Anterior chamber", ["Vitreous only", "Subconjunctival space only", "Lacrimal sac"], "Hyphema is blood layered in front of the iris."],
      ["After blunt trauma, blood layers in the anterior chamber. What initial care is appropriate?", "Elevate the head, avoid bleeding-risk drugs, and consult ophthalmology", ["Lay flat and give NSAIDs", "Apply firm pressure", "Perform ocular ultrasound despite rupture signs"], "Positioning and bleeding precautions reduce complications."], true)
    ]),

    O("46-blowout-fracture", "46. Orbital Blowout Fracture", [
      K("Orbital floor injury", `<p>A blunt blow raises orbital pressure and fractures the floor, the weakest wall, into the maxillary sinus. Findings include diplopia, restricted EOMs from muscle entrapment, enophthalmos, infraorbital numbness, and periorbital bruising.</p><p>Assess acuity, pupils/RAPD, EOMs, globe integrity, facial sensation, and intracranial signs. CT orbit or maxillofacial bones may show the teardrop sign. Give analgesia and ice, prohibit nose blowing, and arrange ophthalmology/facial-trauma follow-up. Emergent evaluation is required for vision loss, RAPD, severe pain, proptosis, marked restriction, severe new diplopia, compartment syndrome, or suspected rupture. Surgery may address entrapment, persistent diplopia, major enophthalmos, or large displacement.</p>`,
      ["Which orbital wall most commonly fractures in a blowout injury?", "Orbital floor", ["Roof", "Medial canthus", "Optic disc"], "The floor is the weakest wall."],
      ["After blunt trauma, a patient has diplopia, restricted upward gaze, and infraorbital numbness. What study is appropriate?", "CT orbit or maxillofacial bones", ["MRI before evaluating for metal", "Carotid duplex", "No imaging"], "This pattern suggests floor fracture with entrapment."], true)
    ])
  ];
}());
