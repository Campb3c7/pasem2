/* Global Infections content derived only from "Global Infections - student.pptx". */
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

  window.GLOBAL_INFECTION_OBJECTIVES = [
    O("01-terminology", "1. Global Health Terminology", [
      C("Reservoir, vector, and transmission", Tbl(["Term", "Lecture definition"], [
        ["Reservoir", "The long-term unaffected living or nonliving host where a pathogen normally lives"],
        ["Vector", "A living organism that transmits a pathogen from an infected individual to an uninfected individual"],
        ["Transmission", "Direct; indirect by vehicle or vector; or airborne by droplet or dust"]
      ]) + M("Keep them straight", "Reservoir = where it lives · Vector = what carries it · Transmission = how it spreads"), [
        F("What is a vector?", "A living organism that carries a pathogen between individuals", ["The interval before symptoms", "A long-term unaffected host only", "Separation of an infected patient"], "A vector is the living carrier that transmits the pathogen.")
      ], F("A mosquito carries a virus from one person to another. What role does the mosquito fill?", "Vector", ["Reservoir only", "Quarantine", "Incubation period"], "The mosquito is the living transmitter."), true),
      C("Time and prevention terms", Tbl(["Term", "Meaning"], [
        ["Incubation period", "Interval from inoculation of the host until symptoms appear"],
        ["Communicable period", "Time during which an infectious pathogen can be transmitted"],
        ["Chemoprophylaxis", "Chemicals given to a potential host to prevent disease, including vaccines and antibiotics"],
        ["Post-exposure prophylaxis (PEP)", "Treatment given after exposure to prevent disease"]
      ]), [
        F("What interval runs from inoculation until symptom onset?", "Incubation period", ["Communicable period", "Isolation", "Endemic period"], "Incubation describes the pre-symptom interval.")
      ], F("An asymptomatic traveler receives treatment after a recognized exposure to prevent illness. What is this?", "Post-exposure prophylaxis", ["Isolation", "Active disease treatment", "A communicable period"], "PEP is prevention after exposure."), true),
      C("Isolation, quarantine, and population patterns", Tbl(["Concept", "Meaning"], [
        ["Isolation", "Separates an infected case during the communicable period"],
        ["Quarantine", "Restricts healthy contacts of an infected case; modified or complete"],
        ["Endemic", "Persistent or constant presence in a geographic area"],
        ["Epidemic", "Occurrence in an area above the expected level"],
        ["Pandemic", "An epidemic spanning a wide area, countries, continents, or the world"]
      ]), [
        F("Which term means persistent, constant presence in a geographic area?", "Endemic", ["Epidemic", "Pandemic", "Quarantine"], "Endemic disease remains present at a baseline level in an area.")
      ], F("Healthy contacts are restricted while an infected patient is separated. What are the two measures?", "Quarantine for contacts and isolation for the case", ["Isolation for contacts and quarantine for the case", "Chemoprophylaxis for both by definition", "Two forms of endemicity"], "Isolation applies to the infected case; quarantine applies to healthy contacts."), true)
    ]),

    O("02-microbiology", "2. Microbiology of the Discussed Global Infections", [
      C("Viral infections", Tbl(["Family/type", "Diseases in the lecture"], [
        ["Alphavirus, Togaviridae; ssRNA", "Chikungunya"],
        ["Flavivirus", "Zika, dengue, yellow fever"],
        ["Filovirus", "Ebola"],
        ["Lyssavirus, Rhabdoviridae; RNA", "Rabies"],
        ["Coronavirus", "MERS-CoV and SARS-CoV-1"],
        ["Orthopoxvirus; DNA", "Monkeypox"]
      ]) + M("Viral clusters", "Aedes trio: Zika–Dengue–Yellow fever · Filovirus: Ebola · Lyssavirus: Rabies"), [
        F("Which disease in the lecture is caused by a filovirus?", "Ebola", ["Yellow fever", "Chikungunya", "MERS"], "Ebola belongs to the Filoviridae family.")
      ], F("A patient has a disease caused by a DNA Orthopoxvirus. Which lecture infection fits?", "Monkeypox", ["Rabies", "Dengue", "SARS"], "Monkeypox is the DNA Orthopoxvirus in the deck."), true),
      C("Bacterial infections", Tbl(["Disease", "Organism/type"], [
        ["Cholera", "Toxigenic Vibrio cholerae O1 or O139"],
        ["Tularemia", "Francisella tularensis, gram-negative bacterium"],
        ["Leprosy (Hansen disease)", "Mycobacterium leprae and M. lepromatosis; acid-fast, obligate intracellular bacilli"],
        ["Yaws", "Treponema pallidum subspecies pertenue; spirochete"]
      ]), [
        F("Which lecture disease is caused by a spirochete?", "Yaws", ["Cholera", "Tularemia", "Leprosy"], "Yaws is caused by T. pallidum subspecies pertenue.")
      ], F("Culture identifies a tiny-inoculum gram-negative organism associated with ticks, rabbits, and aerosols. Which disease?", "Tularemia", ["Cholera", "Yaws", "Leprosy"], "F. tularensis causes tularemia."), true),
      C("Parasitic infections", Tbl(["Disease", "Organism/type"], [
        ["African trypanosomiasis", "Trypanosoma brucei; protozoan parasite"],
        ["American trypanosomiasis (Chagas)", "Trypanosoma cruzi; protozoan parasite"],
        ["Cysticercosis", "Taenia solium larval cysts; tapeworm/helminth"],
        ["Onchocerciasis", "Onchocerca volvulus; nematode/roundworm helminth"]
      ]), [
        F("Which infection is produced by Taenia solium larval cysts?", "Cysticercosis", ["Chagas disease", "Onchocerciasis", "African sleeping sickness"], "Cysticercosis is tissue infection by T. solium larvae.")
      ], F("A roundworm infection produces river blindness. Which disease is this?", "Onchocerciasis", ["Cysticercosis", "Chagas disease", "Leprosy"], "O. volvulus is the nematode responsible for onchocerciasis."), true)
    ]),

    O("03-vectors", "3. Vectors for Selected Global Infections", [
      C("Mosquito and fly vectors", Tbl(["Infection", "Vector"], [
        ["Chikungunya", "Aedes aegypti and Aedes albopictus"],
        ["Zika", "Mainly Aedes aegypti; Aedes albopictus potential"],
        ["Dengue", "Female Aedes aegypti"],
        ["Yellow fever", "Aedes and Haemagogus mosquitoes"],
        ["Onchocerciasis", "Simulium blackfly; many daytime bites near streams/rivers"],
        ["African trypanosomiasis", "Tsetse fly"]
      ]) + M("Vector map", "Aedes carries the viral trio + chikungunya · Blackfly = river blindness · Tsetse = sleeping sickness"), [
        F("Which vector transmits African sleeping sickness?", "Tsetse fly", ["Triatomine bug", "Simulium blackfly", "Aedes mosquito"], "Tsetse flies transmit T. brucei.")
      ], F("A traveler has intense pruritus, nodules, and vision loss after repeated bites near tropical rivers. Which vector fits?", "Simulium blackfly", ["Tsetse fly", "Triatomine bug", "Deer fly only"], "Blackflies transmit onchocerciasis."), true),
      C("The American trypanosomiasis vector", `<p><strong>Chagas disease</strong> is transmitted mainly by feces from the <strong>triatomine (kissing) bug</strong>, not simply by the bite itself. The patient may rub contaminated feces into the bite site or eye.</p>${M("Kissing bug clue", "Bug feces + facial chagoma or Romaña sign = T. cruzi")}`, [
        F("What vector is associated with American trypanosomiasis?", "Triatomine or kissing bug", ["Tsetse fly", "Aedes aegypti", "Simulium blackfly"], "Triatomine-bug feces transmit T. cruzi.")
      ], F("A patient from Latin America rubs kissing-bug feces into the eye and develops eyelid edema. Which vector-disease pair applies?", "Triatomine bug—Chagas disease", ["Tsetse fly—yellow fever", "Blackfly—rabies", "Aedes—leprosy"], "Romaña sign is an acute Chagas clue."), true)
    ]),

    O("04-reservoirs", "4. Reservoirs for Selected Global Infections", [
      C("Reservoir table: cholera through tularemia", Tbl(["Infection", "Most likely reservoir in the lecture"], [
        ["Cholera", "Humans and aquatic environments: brackish water, estuaries, algae blooms, shellfish"],
        ["Ebola", "Unknown; fruit bats are considered likely, with primates and pigs as accidental intermediary hosts"],
        ["Rabies", "Any mammalian species"],
        ["Monkeypox", "Rodents and monkeys"],
        ["Tularemia", "Rabbits, muskrats, prairie dogs and other rodents; also domestic cats and pet hamsters"]
      ]), [
        F("What reservoir is considered most likely for Ebola?", "Fruit bats, although the reservoir remains unknown", ["Humans are the necessary reservoir", "Only shellfish", "Only mosquitoes"], "The lecture labels fruit bats as likely but the reservoir as unknown.")
      ], F("A patient becomes ill after handling a rabbit. Which reservoir-linked disease should be considered?", "Tularemia", ["Cholera", "Monkeypox only", "Yaws"], "Rabbits are a classic reservoir association for tularemia."), true),
      C("Yaws has one reservoir", `<p><strong>Humans are the only reservoir for yaws.</strong> It spreads by direct, nonsexual contact with fluid from an infected lesion. The initial papilloma has the highest bacterial burden.</p>${M("Yaws chain", "Human reservoir → lesion fluid → nonsexual skin contact")}`, [
        F("What is the reservoir for yaws?", "Humans only", ["Pigs", "Fruit bats", "Aquatic algae"], "The lecture identifies humans as the sole reservoir.")
      ], F("Children in a warm, humid tropical community acquire lesions by direct nonsexual contact. What reservoir sustains the infection?", "Humans", ["Armadillos only", "Blackflies", "Shellfish"], "Yaws has an exclusively human reservoir."), true)
    ]),

    O("05-comparison", "5. Compare Clinical Features, Diagnosis, Management, and Special Features", [
      C("Chikungunya: the bent-walk polyarthralgia illness", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Abrupt fever >39°C plus severe bilateral symmetric polyarthralgia; headache, myalgia, joint swelling, maculopapular rash, conjunctivitis, nausea/vomiting"],
        ["Diagnosis", "RT-PCR days 1–7; IgM/IgG from day 4 onward"],
        ["Management", "Supportive NSAIDs/acetaminophen, hydration, rest"],
        ["Special", "‘That which bends up’: stooped walk; rheumatologic symptoms, fatigue, and depression may persist months to years"]
      ]), [F("Which feature most strongly distinguishes chikungunya?", "Severe bilateral symmetric polyarthralgia", ["Rice-water diarrhea", "Hydrophobia", "Painless sensory-loss patches"], "Debilitating symmetric joint pain is the signature clue.")], F("A traveler has high fever and disabling symmetric joint pain that persists for months. Which infection best fits?", "Chikungunya", ["Cholera", "Rabies", "Yaws"], "Persistent arthralgia is characteristic of chikungunya."), true),
      C("Zika: mild four-feature illness with fetal risk", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Usually mild; low-grade fever, pruritic maculopapular rash, mild small-joint arthralgia, nonpurulent conjunctivitis"],
        ["Diagnosis", "RT-PCR early; IgM with neutralizing antibodies/PRNT later; consider dengue and chikungunya"],
        ["Management", "Acetaminophen, hydration, rest; avoid NSAIDs until dengue is excluded"],
        ["Special", "Neurotropic; GBS, myelitis, meningoencephalitis; pregnancy risk includes miscarriage and congenital microcephaly"]
      ]), [F("Which cluster is the ‘notable four’ of Zika?", "Low fever, pruritic rash, small-joint arthralgia, and nonpurulent conjunctivitis", ["High fever, hydrophobia, paralysis, and jaundice", "Diarrhea, cramps, shock, and jaundice", "Chancre, lymphadenopathy, sleep reversal, and megacolon"], "These four mild findings distinguish typical symptomatic Zika.")], F("A pregnant traveler develops pruritic rash, mild hand arthralgia, and nonpurulent conjunctivitis. Which infection is most concerning?", "Zika", ["Rabies", "Tularemia", "Cholera"], "The clinical cluster plus pregnancy makes Zika the key concern."), true),
      C("Dengue: high fever with a dangerous defervescence", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "104°F fever plus severe frontal headache, retro-orbital pain, myalgia/arthralgia, nausea/vomiting, lymphadenopathy, or rash"],
        ["Severe warning", "At defervescence around days 3–7: severe abdominal pain, persistent vomiting, tachypnea, fatigue/restlessness, hemorrhage; plasma leak may cause shock"],
        ["Diagnosis", "Clinical in endemic area; RT-PCR within 7 days; IgM from day 4 with PRNT confirmation"],
        ["Management", "Maintain fluid volume: oral rehydration for dengue fever; IV isotonic fluid ± blood products for severe disease"]
      ]), [F("When can dengue become critically dangerous?", "As fever falls around days 3–7", ["Only before fever starts", "After 10 symptom-free years", "Only during the mosquito bite"], "Severe dengue may emerge at defervescence.")], F("A febrile traveler’s temperature improves, but severe abdominal pain, vomiting, thrombocytopenia, and hypotension develop. What is the concern?", "Severe dengue with plasma leakage/shock", ["Resolved dengue", "Uncomplicated Zika", "Leprosy reaction"], "Deterioration at defervescence is the severe-dengue pattern."), true),
      C("Ebola: abrupt hemorrhagic systemic illness", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Abrupt fever >101.5°F, severe headache, myalgia/weakness, diarrhea/vomiting/abdominal pain, rash, renal/liver impairment, bleeding"],
        ["Diagnosis", "Immediate isolation and public-health contact; RT-PCR, repeated if an early negative was obtained <72 hours after symptoms"],
        ["Management", "PPE/isolation, IV fluids and symptom/electrolyte support; REGN-EB3 or ansuvimab listed as Ebola-specific therapies"],
        ["Special", "Hepatic necrosis disrupts clotting; adrenal injury and inflammatory cascade contribute to shock; up to 90% fatal"]
      ]), [F("What must happen immediately when Ebola is suspected?", "Isolate the patient and contact public health", ["Wait for outpatient serology", "Give oral rehydration and discharge", "Perform a skin snip"], "Containment precedes confirmatory testing.")], F("A returning traveler has abrupt fever, GI illness, bleeding, leukopenia, thrombocytopenia, and elevated LFTs. What is the priority?", "Ebola precautions, isolation, and public-health coordination", ["Routine waiting-room care", "Treat as yaws", "No action until IgG returns"], "The syndrome requires immediate containment."), true),
      C("Yellow fever: three phases and the Faget clue", Tbl(["Phase", "Pattern"], [
        ["1—Viremia", "Fever/chills, prominent backache, headache, anorexia, nausea/vomiting; Faget sign = bradycardia with hyperthermia"],
        ["2—Remission", "Symptoms and fever abate around day 3–4; most recover"],
        ["3—Intoxication", "About 15% relapse within 48 hours with high fever, jaundice, abdominal pain/vomiting, bleeding, kidney/liver decline"],
        ["Dx/Tx", "RT-PCR early; IgM/IgG later with PRNT; supportive care only"]
      ]), [F("What is Faget sign?", "Bradycardia with hyperthermia", ["Tachycardia with hypothermia", "Eyelid edema", "Hydrophobia"], "Faget sign appears in the viremic phase of yellow fever.")], F("A traveler briefly improves after fever, then relapses with jaundice, bleeding, and renal decline. Which phase is this?", "Yellow-fever intoxication phase", ["Chikungunya recovery", "Chagas indeterminate stage", "Yaws latency"], "The toxic third phase follows a short remission."), true),
      C("Rabies: encephalitis that is fatal after symptoms", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Bite-site paresthesias, confusion, agitation, hallucinations, insomnia, dysphagia, hydrophobia; furious or ascending paralytic form"],
        ["Diagnosis", "Clinical suspicion after mammalian saliva or neural-tissue exposure; improvement or stable neurologic status for ≥2–3 weeks argues against rabies"],
        ["Management", "Immediate soap-and-water cleansing; vaccine days 0, 3, 7, 14 plus one dose HRIG promptly"],
        ["Special", "Near-100% fatal once clinical signs appear; no effective treatment after symptoms"]
      ]), [F("What is the lecture rabies PEP regimen?", "Wound cleansing, four vaccine doses, and one HRIG dose", ["One antibiotic dose only", "Ivermectin every six months", "Supportive care without vaccine"], "Prompt PEP is highly effective before clinical illness.")], F("After a bat exposure, a patient develops bite-site paresthesia, agitation, dysphagia, and hydrophobia. What is the prognosis once symptomatic?", "Rabies is nearly 100% fatal", ["Usually mild and self-limited", "Cured by delayed vaccine alone", "Always resolves in one week"], "Clinical rabies has no effective treatment in the lecture."), true),
      C("MERS: severe lower-respiratory coronavirus", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Asymptomatic to mild URI, ARDS, or death; patchy opacities/infiltrates/consolidation/effusions; leukopenia, lymphopenia, thrombocytopenia, high LDH"],
        ["Diagnosis", "Lower-respiratory sample plus naso/oropharyngeal swab and serum for rRT-PCR; serology after 14 days"],
        ["Management", "Supportive ICU/ventilator care, isolation and quarantine"],
        ["Special", "Camel primary host; Arabian-Peninsula link; case fatality about 35%"]
      ]), [F("Which host is primarily linked to MERS-CoV?", "Camels", ["Pigs", "Armadillos", "Blackflies"], "Camels are the primary animal host in the lecture.")], F("A patient with an Arabian-Peninsula exposure develops severe lower-respiratory disease and lymphopenia. What infection fits?", "MERS", ["Yaws", "Cholera", "Chikungunya"], "Geography plus severe lower-respiratory disease points to MERS."), true),
      C("SARS: fever followed by lower-respiratory disease", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Fever >100.5°F, malaise, headache, myalgia, usually no upper-respiratory symptoms, then nonproductive cough, dyspnea, pleuritic pain"],
        ["Diagnosis", "PCR as early as possible from at least two sites; repeat in one week if symptoms persist; serology develops weeks later"],
        ["Management", "Supportive care, including ventilation if needed; isolation and quarantine"],
        ["Special", "SARS-CoV-1; no known cases since 2004, though re-emergence is theoretically possible"]
      ]), [F("What respiratory pattern is emphasized for SARS?", "Lower-respiratory symptoms with little or no upper-respiratory illness", ["Only nasal congestion", "Rice-water diarrhea only", "Skin anesthesia only"], "The deck highlights fever followed by dry cough/dyspnea without typical URI symptoms.")], F("A febrile patient develops dry cough, dyspnea, and pleuritic pain without URI symptoms. Which lecture coronavirus pattern fits?", "SARS", ["Cholera", "Yaws", "Onchocerciasis"], "That pattern is characteristic of SARS in the deck."), false),
      C("Monkeypox: synchronized evolving lesions and lymphadenopathy", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "2–4 weeks of rash with lymphadenopathy; lesions in crops on face/mouth/extremities or oral/anogenital areas"],
        ["Lesion sequence", "Macule → papule → vesicle → pustule → scab/desquamation; lesions on one body area evolve together"],
        ["Diagnosis", "Isolate, consult public health, and send swabbed lesion material for PCR"],
        ["Management", "Usually supportive; severe disease may use tecovirimat, cidofovir, brincidofovir, or VIGIV"]
      ]), [F("Which feature helps identify monkeypox rash?", "Lesions on a body area evolve together through macule, papule, vesicle, pustule, and scab", ["A single painless chancre only", "No lymphadenopathy", "Only hypopigmented anesthetic patches"], "Synchronized lesion evolution plus lymphadenopathy is a key clue.")], F("A patient has lymphadenopathy and an anogenital rash with lesions evolving together from vesicles to pustules. What test is appropriate?", "Lesion-swab PCR after isolation/public-health consultation", ["Skin snip for microfilariae", "Stool culture", "Peripheral smear for trypanosomes"], "Monkeypox is confirmed from lesion material."), true),
      C("Cholera: rice-water volume loss", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Profuse rice-water diarrhea and vomiting → muscle cramps → dehydration → hypovolemic shock → death, potentially within hours"],
        ["Diagnosis", "Clinical in endemic settings; stool culture or rectal swab to identify bacterium"],
        ["Management", "Rehydration is most important: oral salts for mild cases, IV fluids plus antibiotics for severe cases; zinc may supplement"],
        ["Special", "Reportable to CDC; linked to inadequate water treatment, sanitation, and hygiene"]
      ]), [F("What is the most important treatment for cholera?", "Rapid rehydration", ["Corticosteroids alone", "Rabies vaccine", "No fluid replacement"], "Death results from rapid volume loss, so fluid replacement comes first.")], F("A traveler develops profuse rice-water diarrhea, cramps, dehydration, and shock. What immediate priority is required?", "Aggressive rehydration", ["Wait for serology", "Start HRIG", "Perform slit-lamp examination"], "Cholera can kill within hours through hypovolemia."), true),
      C("Tularemia: six entry-route presentations", Tbl(["Form", "Clues"], [
        ["Ulceroglandular—most common", "Entry-site ulcer plus regional lymphadenopathy"],
        ["Glandular", "Similar lymphadenopathy without ulcer"],
        ["Oculoglandular", "Eye inflammation plus preauricular lymphadenopathy"],
        ["Oropharyngeal", "Sore throat, oral ulcers, tonsillitis, cervical lymphadenopathy"],
        ["Pneumonic—most severe", "Cough, chest pain, dyspnea"],
        ["Typhoidal", "Systemic febrile illness without a clear inoculation site"]
      ]) + `<p><strong>Dx:</strong> fourfold antibody rise using acute and 2–4 week convalescent sera; culture specialized specimens. Gram stain and blood cultures are often unremarkable. <strong>Tx:</strong> streptomycin for 10 days; isolation not needed.</p>`, [F("What is the most common tularemia form?", "Ulceroglandular", ["Pneumonic", "Typhoidal", "Oculoglandular"], "An entry-site ulcer with regional nodes is the commonest presentation.")], F("After a tick bite, a patient has fever, an entry-site ulcer, and regional lymphadenopathy. Which diagnosis fits?", "Ulceroglandular tularemia", ["Cholera", "Leprosy", "Dengue"], "The exposure and ulcer-node pattern are classic."), true),
      C("Leprosy: cool tissues, skin anesthesia, and peripheral nerves", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Chronic hypopigmented-to-erythematous lesions with sensory loss; enlarged tender nerves; weakness/wasting; nodules, dry skin, hair loss, nasal injury"],
        ["Named deficits", "Lagophthalmos—facial; foot drop—common peroneal; clawed hands—ulnar/median; claw toes/plantar insensitivity—posterior tibial"],
        ["Diagnosis", "Skin biopsy of an existing lesion is gold standard where available; clinical diagnosis may suffice in high-prevalence/limited-access areas"],
        ["Treatment", "Dapsone + rifampicin for paucibacillary disease; add clofazimine for multibacillary disease"]
      ]), [F("What skin finding strongly suggests leprosy?", "A chronic lesion with decreased or absent sensation", ["A pruritic rash with normal sensation", "Rice-water diarrhea", "Hydrophobia"], "Sensory loss over chronic lesions reflects peripheral-nerve involvement.")], F("A patient has hypopigmented anesthetic patches, enlarged nerves, and clawed hands. Which diagnosis fits?", "Leprosy", ["Yaws", "Cholera", "Dengue"], "Skin anesthesia plus named nerve deficits is the leprosy pattern."), true),
      C("Yaws: infectious early papilloma, destructive late disease", Tbl(["Feature", "Lecture point"], [
        ["Early/infectious", "Initial limb papilloma at entry; high bacterial burden up to 6 months; may cause bone pain/lesions; then naturally heals"],
        ["Late/noninfectious", ">5 years later: disfigurement of nose/bones and thickened palms/soles causing walking difficulty"],
        ["Diagnosis", "Clinical; PCR confirms but is impractical in the field"],
        ["Treatment", "One dose azithromycin 30 mg/kg (max 2 g) PO or benzathine penicillin IM"]
      ]), [F("Which yaws lesion is most infectious?", "The initial papilloma", ["Late bone deformity", "Healed scar only", "Thickened sole after five years"], "The initial lesion contains the highest bacterial burden.")], F("A child in a humid tropical forest region has a limb papilloma after direct nonsexual contact. What treatment can cure the illness in one dose?", "Azithromycin or benzathine penicillin", ["Ivermectin only", "Suramin only", "HRIG only"], "Both single-dose options are listed for yaws."), true),
      C("African sleeping sickness: fast east, slow west", Tbl(["Subspecies", "Pattern"], [
        ["T. b. rhodesiense—East Africa", "Cattle reservoir; days-to-weeks incubation; chancre then fever/headache/myalgia/arthralgia/LAD; CNS disease in weeks; death in months"],
        ["T. b. gambiense—West Africa", "Human reservoir; weeks-to-months incubation; intermittent systemic illness; CNS after 1–2 years with personality change and daytime sleepiness/night waking; death ~3 years"],
        ["Diagnosis", "Microscopy of chancre, lymph-node aspirate, or blood; if positive, examine CSF for trypanosomes"],
        ["Special", "Curable with treatment; fatal without it"]
      ]) + M("Speed map", "Rhodesiense runs rapidly in the east · Gambiense goes gradually in the west"), [F("Which African trypanosomiasis subtype progresses rapidly?", "T. b. rhodesiense", ["T. b. gambiense", "T. cruzi", "O. volvulus"], "Rhodesiense reaches CNS disease and death much sooner.")], F("A safari traveler from East Africa develops a bite chancre, fever, lymphadenopathy, then neurologic symptoms within weeks. Which subtype?", "T. b. rhodesiense", ["T. b. gambiense", "T. cruzi", "Taenia solium"], "East African safari cases are associated with rapidly progressive rhodesiense."), true),
      C("Chagas disease: acute face clues, chronic heart and gut", Tbl(["Stage", "Pattern"], [
        ["Acute, 8–12 weeks", "Fever, malaise, facial chagoma; eyelid edema after ocular inoculation = Romaña sign; rare myocarditis, effusion, meningoencephalitis"],
        ["Indeterminate", "Prolonged asymptomatic stage; no parasites found in blood"],
        ["Chronic", "Dilated cardiomyopathy/arrhythmia/heart failure; esophageal dysphagia/regurgitation/achalasia; sigmoid dilation/megacolon"],
        ["Diagnosis", "Acute: peripheral smear or PCR. Chronic: antibody serology"],
        ["Treatment", "Acute benznidazole twice daily for 60 days; chronic complication management"]
      ]), [F("What is Romaña sign?", "Eyelid edema from ocular inoculation in acute Chagas disease", ["Bradycardia with fever", "Loss of eyebrows", "Corneal thickening from larvae"], "Romaña sign is the ocular acute-Chagas clue.")], F("A patient from Latin America has dilated cardiomyopathy, dysphagia, and megacolon. Which chronic infection fits?", "Chagas disease", ["African sleeping sickness", "Onchocerciasis", "Cysticercosis"], "Chronic T. cruzi affects the heart, esophagus, and colon."), true),
      C("Cysticercosis: symptoms appear when cyst location or death matters", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "Depends on location/number: subcutaneous lumps; ocular field/EOM deficits; neurocysticercosis causes seizures most commonly, headache, hydrocephalus, meningitis, cranial-nerve findings, confusion, imbalance, stroke"],
        ["Diagnosis", "Contrast MRI/CT shows enhancing rings; EITB/immunoblot; also rule out taeniasis and assess household contacts"],
        ["Management", "Control neurologic complications; albendazole + dexamethasone for 10 days; surgery/shunt when needed"],
        ["Special", "Weeks-to-years incubation; adult-onset seizure cause in developing countries; report to state health department"]
      ]), [F("What is the most common neurocysticercosis symptom?", "Seizures", ["Hydrophobia", "Rice-water diarrhea", "Clawed hands"], "The lecture labels seizures as the most common neurologic presentation.")], F("A patient from an endemic region has new seizures and multiple contrast-enhancing rings. What diagnosis is suggested?", "Neurocysticercosis", ["Yaws", "Chikungunya", "Tularemia"], "Tissue T. solium cysts cause ring lesions and seizures."), true),
      C("Onchocerciasis: river blindness from dying larvae", Tbl(["Feature", "Lecture point"], [
        ["Presentation", "May be asymptomatic; pruritic rash, subcutaneous nodules, vision changes; dead larvae drive leopard skin, cigarette-paper skin, hanging groin, corneal/optic-nerve injury and blindness"],
        ["Diagnosis", "Gold standard: six skin-snip biopsies; slit-lamp eye exam; specialized serology if biopsy negative and suspicion high"],
        ["Management", "Ivermectin every 6 months kills microfilariae and sterilizes adult females; doxycycline for 6 weeks may kill macrofilariae"],
        ["Special", "Second-leading infectious cause of blindness; WHO mass ivermectin administration"]
      ]), [F("What is the gold-standard onchocerciasis test?", "Six skin-snip biopsies", ["Stool culture", "Blood PCR only", "Lesion swab for Orthopoxvirus"], "Skin snips demonstrate microfilariae.")], F("A patient near tropical rivers has nodules, leopard skin, corneal injury, and peripheral vision loss. Which diagnosis fits?", "Onchocerciasis", ["Cysticercosis", "Chagas disease", "Leprosy"], "Blackfly exposure and inflammatory eye/skin injury indicate river blindness."), true)
    ]),

    O("06-medications", "6. Medication Names for Specified Global Infections", [
      C("Bacterial and tissue-parasite treatments", Tbl(["Infection", "Medication names in the lecture"], [
        ["Severe cholera", "Doxycycline, erythromycin, azithromycin, or ciprofloxacin—after/with essential rehydration"],
        ["Tularemia", "Streptomycin for 10 days (drug of choice)"],
        ["Yaws", "Azithromycin once or IM benzathine penicillin once"],
        ["Cysticercosis", "Albendazole 400 mg PO twice daily + dexamethasone 6 mg daily for 10 days"]
      ]) + M("Four anchors", "Cholera—rehydrate + one of four · Tularemia—streptomycin · Yaws—one dose · Cysts—albendazole + steroid"), [F("What is the drug of choice for tularemia?", "Streptomycin", ["Ivermectin", "Benznidazole", "Suramin"], "The deck specifies streptomycin for 10 days.")], F("A patient with neurocysticercosis is starting larvicidal therapy. Which lecture combination addresses parasite and inflammation?", "Albendazole plus dexamethasone", ["Ivermectin plus HRIG", "Suramin plus vaccine", "Azithromycin alone"], "Larval death can inflame tissue, so steroid accompanies albendazole."), true),
      C("Leprosy and onchocerciasis regimens", Tbl(["Condition", "Regimen"], [
        ["Paucibacillary/tuberculoid leprosy", "Dapsone + rifampicin"],
        ["Multibacillary/lepromatous leprosy", "Dapsone + rifampicin + clofazimine"],
        ["Leprosy inflammatory reaction", "Prednisone 40–60 mg daily with taper; continue multidrug therapy"],
        ["Onchocerciasis microfilariae", "Ivermectin 150 mcg/kg once every 6 months"],
        ["Onchocerciasis macrofilariae", "Adjunct doxycycline 200 mg daily for 6 weeks"]
      ]), [F("Which drug is added for multibacillary leprosy?", "Clofazimine", ["Suramin", "Benznidazole", "HRIG"], "The multibacillary regimen adds clofazimine to dapsone and rifampicin.")], F("A river-blindness patient needs repeated therapy directed at microfilariae. Which drug?", "Ivermectin", ["Streptomycin", "Pentamidine", "Ciprofloxacin"], "Ivermectin kills microfilariae and is repeated every six months."), true),
      C("Hemorrhagic-fever and trypanosomiasis drugs", Tbl(["Disease/stage", "Medication names"], [
        ["Ebola", "REGN-EB3 (atoltivimab, maftivimab, odesivimab) or ansuvimab (mAb114; Ebanga)"],
        ["Dengue/yellow fever", "No disease-specific medication in the lecture; supportive care and volume management"],
        ["T. b. rhodesiense early/hemolymphatic", "Suramin"],
        ["T. b. rhodesiense CNS/late", "Melarsoprol"],
        ["T. b. gambiense early / CNS", "Pentamidine / eflornithine"],
        ["Acute Chagas", "Benznidazole twice daily for 60 days"]
      ]) + M("Rhodesiense ladder", "Surface/blood early = Suramin · Sleep/CNS late = Melarsoprol"), [F("What treats CNS-stage T. b. rhodesiense infection?", "Melarsoprol", ["Suramin", "Pentamidine", "Benznidazole"], "Suramin is early-stage; melarsoprol is used after CNS involvement.")], F("An East African safari traveler has trypanosomes in CSF. Which lecture medication is indicated?", "Melarsoprol", ["Suramin", "Eflornithine", "Ivermectin"], "CSF involvement means late rhodesiense disease."), true)
    ]),

    O("07-vaccines-prophylaxis", "7. Vaccines, Chemoprophylaxis, and Post-Exposure Prophylaxis", [
      C("Vaccines available in the lecture", Tbl(["Infection", "Vaccine detail"], [
        ["Yellow fever", "Live vaccine; one dose gives 99% immunity within 30 days and usually protects ≥10 years; documentation may be required"],
        ["Ebola", "Live-attenuated rVSV-ZEBOV for outbreak/high-risk and pre-exposure groups; about 98% efficacy in recent testing"],
        ["Monkeypox", "JYNNEOS two-dose vaccine or ACAM2000; ACAM2000 has more adverse effects and is not recommended for immunocompromised patients"],
        ["Cholera", "Inactive two-dose Dukoral, ShanChol, Euvichol; US traveler option Vaxchora is single-dose live attenuated; protection wanes relatively quickly"],
        ["Rabies", "Vaccine is part of prompt PEP after a qualifying exposure"]
      ]), [F("Which vaccine may require documentation for travel from affected countries?", "Yellow fever vaccine", ["Onchocerciasis vaccine", "SARS vaccine", "Trypanosomiasis vaccine"], "The lecture specifically notes required yellow-book documentation.")], F("An immunocompromised person needs monkeypox vaccination. Which listed option avoids the lecture’s ACAM2000 warning?", "JYNNEOS", ["ACAM2000", "Vaxchora", "rVSV-ZEBOV"], "ACAM2000 is not recommended for immunocompromised patients."), true),
      C("Rabies PEP is a timed prevention bundle", `<div class="stage-flow">Exposure → immediate soap-and-water cleansing → vaccine on days 0, 3, 7, 14 → one prompt HRIG dose</div><p>PEP is highly effective when given promptly. Once clinical rabies begins, there is no effective treatment.</p>`, [F("Which product is given once in rabies PEP?", "Human rabies immunoglobulin (HRIG)", ["The vaccine, which is only one dose", "Ivermectin", "Melarsoprol"], "The vaccine is four doses; HRIG is administered once promptly.")], F("A previously unprotected patient has a qualifying mammalian-saliva exposure. What is the correct prevention approach?", "Clean the wound, begin the four-dose vaccine series, and give one HRIG dose", ["Wait for neurologic symptoms", "Give only an antibiotic", "Quarantine without PEP"], "PEP must precede clinical rabies."), true)
    ]),

    O("08-incubation", "8. Incubation Periods for Selected Infections", [
      C("Five incubation anchors", Tbl(["Infection", "Incubation period"], [
        ["Cholera", "Hours to 5 days"],
        ["Cysticercosis", "Weeks to years"],
        ["Onchocerciasis", "10–20 months after initial infection"],
        ["Rabies", "Usually 1–3 months; can be up to 8 years"],
        ["T. b. rhodesiense", "Days to weeks"],
        ["T. b. gambiense", "Weeks to months"]
      ]) + M("Fast to slow", "Cholera hours · Rhodesiense days/weeks · Rabies months · Oncho 10–20 months · Cysts weeks–years"), [F("Which listed infection has an incubation of hours to five days?", "Cholera", ["Onchocerciasis", "Rabies", "Cysticercosis"], "Cholera has the shortest specified incubation in this group.")], F("Symptoms begin 14 months after repeated tropical blackfly bites. Which incubation pattern fits?", "Onchocerciasis", ["Cholera", "T. b. rhodesiense", "MERS"], "Onchocerciasis incubates 10–20 months."), true),
      C("African trypanosomiasis speed predicts the subtype", `<p><strong>T. b. rhodesiense:</strong> days to weeks, then rapid progression. <strong>T. b. gambiense:</strong> weeks to months, followed by a much slower clinical course.</p>${M("Name cue", "Rhodesiense = Rapid · Gambiense = Gradual")}`, [F("Which subtype has a weeks-to-months incubation?", "T. b. gambiense", ["T. b. rhodesiense", "T. cruzi only", "O. volvulus"], "Gambiense incubates and progresses more slowly.")], F("A West African exposure is followed months later by intermittent fevers and years later by sleep reversal. Which subtype?", "T. b. gambiense", ["T. b. rhodesiense", "T. cruzi", "Taenia solium"], "West + gradual course identifies gambiense."), true)
    ]),

    O("09-communicability", "9. Communicable Periods: Chikungunya, Ebola, and Onchocerciasis", [
      C("Three very different communicable windows", Tbl(["Infection", "Communicable period in the lecture"], [
        ["Chikungunya", "As long as viremia persists: acute illness plus weeks to months"],
        ["Ebola", "As long as viremia persists; virus has been found in some semen 9 months later"],
        ["Onchocerciasis", "Until larvae die—15 years or more without treatment"]
      ]) + M("Duration clue", "Viremia drives the two viruses · Living larvae drive onchocerciasis"), [F("Why can untreated onchocerciasis remain communicable for 15 years or more?", "Larvae can remain alive for that duration", ["The fever always lasts 15 years", "Mosquitoes live 15 years", "It is a lifelong bacteremia"], "Communicability continues until larvae die.")], F("A person recovered from Ebola, but counseling considers virus persistence in semen months later. What lecture concept explains this?", "Communicability may persist while virus remains in a body fluid", ["Incubation restarts", "The disease becomes bacterial", "Vector transmission becomes mandatory"], "The deck notes detection in semen up to nine months."), true)
    ]),

    O("10-inflammation", "10. Inflammatory Responses in Cysticercosis, Leprosy, and Onchocerciasis", [
      C("Parasite death can be more inflammatory than parasite life", Tbl(["Infection", "Inflammatory pattern"], [
        ["Cysticercosis", "Few living cysts may evade inflammation; degeneration triggers an acute inflammatory response and treatment can worsen symptoms"],
        ["Onchocerciasis", "Living larvae may be undetected and adults protected in nodules; dead/dying larvae trigger itching, skin destruction, corneal injury, optic neuritis, and blindness"]
      ]) + M("Shared rule", "Quiet while living/protected → inflammatory injury when larvae or cysts die"), [F("What triggers acute inflammation in cysticercosis?", "Degeneration or death of cysticerci", ["Every living cyst immediately", "Loss of all antibodies", "A mosquito bite years later"], "The host often reacts sharply when cysts degenerate.")], F("A patient’s neurologic symptoms may worsen as albendazole kills T. solium larvae. What adjunct addresses the response?", "A corticosteroid such as dexamethasone", ["HRIG", "Yellow-fever vaccine", "Streptomycin only"], "Concomitant steroids blunt treatment-provoked inflammation."), true),
      C("Leprosy reactions are immune complications—not drug allergy", `<p>Leprosy immunologic reactions are systemic inflammatory complications causing sudden worsening and new lesions. They can occur before, during, or months to years after treatment and may cause severe nerve injury, paralysis, and deformity.</p><p>Treat with <strong>prednisone 40–60 mg daily</strong> and taper for at least two weeks; additional anti-inflammatories may be used. Continue multidrug leprosy therapy, although the slide directs rifampicin to once monthly during corticosteroid use.</p>`, [F("Are leprosy immunologic reactions adverse drug reactions?", "No—they are inflammatory complications of the disease", ["Yes, always", "They occur only before therapy", "They cannot injure nerves"], "The deck explicitly distinguishes them from drug reactions.")], F("A treated leprosy patient suddenly develops new lesions and worsening nerve deficits. What is the appropriate framework?", "Treat an immunologic reaction with corticosteroid while continuing multidrug therapy", ["Assume all antimicrobials are allergies and stop permanently", "Give rabies PEP", "Use rehydration alone"], "Reactions may occur during or after therapy and threaten nerves."), true)
    ]),

    O("11-leprosy", "11. Leprosy Transmission, Organism Features, Symptoms, and Nerve Involvement", [
      C("Slow, cool-loving, and hard to transmit", Tbl(["Domain", "Lecture detail"], [
        ["Organism", "M. leprae and M. lepromatosis: acid-fast, obligate intracellular bacilli"],
        ["Growth", "Replicate slowly; symptoms can take up to 20 years"],
        ["Temperature", "Survive at lower temperatures around 34°C"],
        ["Transmission", "Appears respiratory; requires repeated prolonged contact; not fully understood"],
        ["Host", "Susceptibility appears genetic; about 95% of people believed naturally immune"],
        ["Zoonosis", "Three-banded armadillos in the United States"]
      ]), [F("What exposure pattern is thought to promote leprosy transmission?", "Repeated respiratory contact over a long period", ["One brief mosquito bite", "Fecal-oral water exposure", "Kissing-bug feces"], "Prolonged repeated contact appears important.")], F("A patient fears casual brief contact with a person with leprosy. Which lecture fact is most reassuring?", "Transmission appears to require repeated contact over a long period, and most people have natural immunity", ["Every exposure causes disease", "It spreads only by water", "It is carried by Aedes"], "The deck emphasizes low susceptibility and prolonged contact."), true),
      C("Match the deficit to the nerve", Tbl(["Finding", "Nerve named in the lecture"], [
        ["Lagophthalmos with eye injury", "Facial nerve"],
        ["Foot drop", "Common peroneal nerve"],
        ["Clawed hands", "Ulnar and median nerves"],
        ["Claw toes and plantar insensitivity", "Posterior tibial nerve"]
      ]) + M("Face to foot", "Facial—eye closure · Peroneal—foot drop · Ulnar/median—hand claw · Tibial—toe claw/sole"), [F("Which nerve is linked to foot drop in leprosy?", "Common peroneal nerve", ["Facial nerve", "Ulnar nerve only", "Posterior tibial nerve"], "The common peroneal nerve deficit causes foot drop.")], F("A leprosy patient cannot close one eye and is developing ophthalmic injury. Which nerve is involved?", "Facial nerve", ["Common peroneal nerve", "Posterior tibial nerve", "Median nerve only"], "Facial-nerve injury produces lagophthalmos."), true)
    ]),

    O("12-zika-education", "12. Patient Education Regarding Zika", [
      C("Zika counseling is exposure-, pregnancy-, and sex-specific", `<ul><li>Reduce mosquito exposure: EPA-registered repellent, covering clothing, bed nets, closed windows/doors or air conditioning, and remove standing water.</li><li>Pregnant patients, their partners, and couples trying to conceive should avoid or postpone travel to active-risk areas below 6,500 feet and check current CDC guidance.</li><li>If a pregnant person’s partner was exposed, use barriers or abstain for the entire pregnancy.</li><li>Outside active-transmission areas, the lecture recommends waiting at least 6 months after symptomatic male infection, 8 weeks after symptomatic female infection, and 8 weeks after asymptomatic exposure before unprotected sex.</li><li>Explain that illness is usually mild, but fetal microcephaly/miscarriage and rare neurologic complications make prevention important.</li></ul>`, [F("How long should an exposed partner use barriers when the other partner is pregnant?", "For the entire pregnancy", ["Only until the rash fades", "For 24 hours", "No barrier is needed"], "Pregnancy warrants protection throughout gestation.")], F("A pregnant patient’s male partner recently returned from a Zika-risk area. What counseling best follows the lecture?", "Use condoms/barriers or abstain throughout the pregnancy and prevent mosquito bites", ["No precautions if he feels well", "Use antibiotics prophylactically", "Receive ACAM2000"], "Sexual transmission and fetal risk require sustained precautions."), true)
    ]),

    O("13-travel-medicine", "13. Travel-Medicine Prevention and Counseling", [
      C("Build the plan before departure", Tbl(["Pre-visit assessment", "During the visit"], [
        ["Destination(s) and reason for travel", "Discuss destination-specific risks and prevention"],
        ["Trip length and departure date", "Update relevant immunizations"],
        ["Medical history and current medications", "Prescribe appropriate preventive medications"],
        ["Immunization status", "Use current CDC travel recommendations and GTEN Prep"],
        ["Expected activities/exposures", "Plan ongoing or post-travel support when needed"]
      ]), [F("Which factors belong in a pre-travel assessment?", "Destination, reason, duration, departure date, history, medications, and vaccines", ["Only passport color", "Only age", "Only hotel name"], "Risk depends on itinerary, timing, exposures, and host factors.")], F("A traveler leaves soon for an endemic region but has no vaccine record or medication review. What should a travel consult do?", "Review itinerary and health history, update vaccines, and prescribe indicated prevention", ["Wait until after return", "Offer only travel insurance", "Ignore destination risks"], "The consult coordinates education, immunization, and pharmaceuticals before travel."), true),
      C("Four practical prevention lanes", Tbl(["Risk", "Counseling"], [
        ["Insect-borne disease", "Repellent, protective clothing, window barriers"],
        ["Food/water-borne disease", "Handwashing/sanitizer; avoid uncooked food and tap water, including ice"],
        ["Physical safety", "Enroll in STEP; avoid unnecessary alcohol/drug risk; helmets, seatbelts, and caution with solo travel"],
        ["Access to care", "Consider travel medical insurance"]
      ]) + M("Travel shield", "Bites · Bites of food · Bodily safety · Backup insurance"), [F("Which advice reduces food- and water-borne infection risk?", "Avoid uncooked food and tap water, including ice", ["Use mosquito repellent only", "Skip seatbelts", "Drink untreated water"], "Safe food, water, and hand hygiene reduce enteric exposure.")], F("A traveler asks for one complete prevention discussion. Which bundle is most appropriate?", "Insect precautions, food/water hygiene, physical-safety planning, and medical-insurance access", ["Vaccines alone", "Repellent alone", "No counseling if healthy"], "The lecture treats travel health as broader than infection medication alone."), true)
    ]),

    O("14-public-health", "14. Public-Health Components That Maintain Population Health", [
      C("Population health is a connected system", Tbl(["Foundation", "Examples from the lecture"], [
        ["Environmental basics", "Appropriate sanitation and clean water"],
        ["Personal/community prevention", "Handwashing and vector prevention"],
        ["Containment", "Isolation"],
        ["Infrastructure", "Clinics, laboratories, transportation, and functioning systems"],
        ["Access", "Medicine, pharmacotherapy, and finances"],
        ["Knowledge and innovation", "Medical knowledge and scientific achievements such as vaccines"]
      ]) + M("Public-health chain", "Clean environment + prevention + containment + access + knowledge"), [F("Which components support population health according to the lecture?", "Sanitation, clean water, handwashing, vector control, isolation, infrastructure, access, knowledge, and vaccines", ["Hospital treatment alone", "Vaccines alone", "Travel bans alone"], "Population health depends on several linked foundations.")], F("A region has a cholera outbreak, unsafe water, no lab access, and limited transport to clinics. Which response best reflects the lecture?", "Improve water/sanitation while strengthening laboratory, clinic, transport, and treatment access", ["Provide education without infrastructure", "Rely only on isolation", "Wait for individual cases to self-resolve"], "Public health combines environmental control, infrastructure, and access to care."), true)
    ])
  ];
})();
