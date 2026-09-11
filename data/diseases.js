/*
  Diseases section data.

  This is a SEPARATE feature from Disease Walkthrough (data/walkthrough/*.js) and
  from the per-lecture Learn/Test/Apply objectives in data/*.js. Where those are
  organized by learning objective or by walkthrough case, this catalog is organized
  disease-first: lecture -> disease -> reference content + a comprehensive question
  bank, so a student can track exactly how much of a single disease they've mastered.

  Shape per disease (only `id`, `name`, and `blurb` are filled in for now):
    id:        lowercase-dash, STABLE once questions/progress exist against it
    name:      display name
    blurb:     one-line identifying summary (shown on the disease picker card)
    sections:  [] -- rich reference content, added lecture-by-lecture
    questions: [] -- { prompt, choices, correct, explanation } comprehensive MC bank,
               added lecture-by-lecture once that lecture's sections are written

  Every disease below was confirmed against the actual lecture slides and the
  course's official learning objectives -- nothing here is invented. A disease that
  is AIDS-defining but already has a full card elsewhere (e.g. Toxoplasmosis, MAC)
  is NOT duplicated under HIV and AIDS; only diseases with no existing card live there.
*/
(function () {
  "use strict";

  // Content helpers -- keep authored HTML consistent with the existing
  // Learn-card visual language (.learn-table, .box-hy, .box-mnemonic).
  function Tbl(headers, rows) {
    return '<table class="learn-table"><tr>' + headers.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" + rows.map(function (row) { return "<tr>" + row.map(function (cell) { return "<td>" + cell + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }
  function HY(text) { return '<div class="box-hy"><span class="lbl">High yield</span><strong>' + text + "</strong></div>"; }
  function Mn(label, text) { return '<div class="box-mnemonic"><span class="lbl">' + label + '</span><strong>' + text + "</strong></div>"; }
  function S(id, title, html) { return { id: id, title: title, html: html }; }
  function Q(section, prompt, choices, correct, explanation) {
    return { section: section, prompt: prompt, choices: choices, correct: correct, explanation: explanation };
  }

  function D(id, name, blurb, sections, questions) {
    var withIds = (questions || []).map(function (question, index) {
      return { id: id + "|" + index, section: question.section, prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation };
    });
    return { id: id, name: name, blurb: blurb, sections: sections || [], questions: withIds };
  }
  function L(id, title, diseases) {
    return { id: id, title: title, diseases: diseases };
  }

  window.DISEASES = {
    lectures: [
      L("germs-and-worms", "Germs and Worms", [
        D("staph-aureus", "Staphylococcus aureus (incl. MRSA)", "Coagulase-positive gram-positive cocci causing skin/soft tissue, cardiopulmonary, and musculoskeletal infections; MRSA needs non-beta-lactam oral options."),
        D("staph-epidermidis", "Staphylococcus epidermidis", "Coagulase-negative skin flora that turns pathogenic on prosthetic joints, valves, and central lines."),
        D("staph-saprophyticus", "Staphylococcus saprophyticus", "Coagulase-negative staph classically causing UTIs in young, sexually active women."),
        D("group-a-strep", "Group A Streptococcus (Strep pyogenes)", "Cause of strep pharyngitis and rheumatic fever; penicillin is first-line, with alternatives for penicillin allergy."),
        D("strep-pneumoniae", "Streptococcus pneumoniae", "Gram-positive diplococcus causing pneumonia, otitis media, sinusitis, and meningitis; vaccine-preventable."),
        D("n-meningitidis", "Neisseria meningitidis", "Gram-negative diplococcus causing fulminant meningococcemia/meningitis; treated with ceftriaxone, vaccine-preventable."),
        D("n-gonorrhoeae", "Neisseria gonorrhoeae", "Sexually transmitted gram-negative diplococcus causing gonorrhea, treated with ceftriaxone."),
        D("typhoid-fever", "Typhoid Fever (Salmonella typhi)", "Enteric fever with sustained fever and constitutional symptoms, distinct from non-typhoidal Salmonella."),
        D("nontyphoidal-salmonella", "Non-typhoidal Salmonella", "Foodborne gastroenteritis from poultry/eggs; usually self-limited, antibiotics reserved for severe or invasive disease."),
        D("e-coli-stec", "E. coli (incl. STEC / O157:H7)", "Enteric and UTI pathogen; the Shiga-toxin strain causes bloody diarrhea and hemolytic uremic syndrome in children."),
        D("shigella", "Shigella (Bacillary Dysentery)", "Highly contagious cause of bloody, mucoid diarrhea from a very small inoculum."),
        D("cholera", "Cholera (Vibrio cholerae)", "Toxin-mediated profuse watery diarrhea associated with contaminated water/seafood; rehydration is the priority."),
        D("pseudomonas", "Pseudomonas aeruginosa", "Opportunistic gram-negative rod behind hospital-acquired pneumonia, VAP, UTIs, and many blood isolates."),
        D("gas-gangrene", "Gas Gangrene (Clostridium perfringens)", "Rapidly progressive anaerobic myonecrosis with gas in tissue; needs emergent debridement plus antibiotics."),
        D("tetanus", "Tetanus (Clostridium tetani)", "Spore-forming anaerobe causing rigid paralysis via tetanospasmin; prevented by Tdap, including in pregnancy."),
        D("botulism", "Botulism (Clostridium botulinum)", "Toxin-mediated descending flaccid paralysis; classic sources are improperly canned food and honey in infants."),
        D("c-diff", "Clostridioides difficile", "Antibiotic-associated colitis from a toxin-producing anaerobic spore-former."),
        D("malaria", "Malaria (Plasmodium spp.)", "Mosquito-borne protozoan infecting red blood cells; 4 species, cyclic fevers, P. vivax/ovale need primaquine for liver hypnozoites."),
        D("amebiasis", "Amebiasis (Entamoeba histolytica)", "Protozoan with trophozoite/cyst forms causing dysentery and liver abscess; treated with metronidazole."),
        D("giardiasis", "Giardiasis (Giardia lamblia)", "Protozoan associated with mountain stream water causing foul, greasy diarrhea; treated with tinidazole."),
        D("pinworm", "Pinworm (Enterobius vermicularis)", "The most common helminth infection in the US; perianal itching, diagnosed with the Scotch tape test."),
        D("ascariasis", "Ascariasis (Ascaris lumbricoides)", "Large roundworm with a pulmonary migration phase before intestinal maturation."),
        D("hookworm", "Hookworm (Ancylostoma duodenale)", "Skin-penetrating helminth causing iron-deficiency anemia and unexplained eosinophilia.")
      ]),

      L("viral-diseases", "Viral Diseases", [
        D("influenza", "Influenza", "Orthomyxovirus with abrupt fever, myalgias, and cough; type A causes pandemics via antigenic shift. Watch for Reye syndrome with aspirin use in kids."),
        D("hsv", "Herpes Simplex Virus (HSV-1 / HSV-2)", "Recurrent vesicular mucocutaneous disease; can cause encephalitis, neonatal infection, and Bell's palsy."),
        D("varicella", "Varicella (Chickenpox)", "Primary VZV infection with a pruritic, centrally-starting, multi-stage vesicular rash."),
        D("herpes-zoster", "Herpes Zoster (Shingles)", "Reactivated VZV in a dermatomal distribution; risk rises sharply with age. Watch for postherpetic neuralgia."),
        D("ebv", "Epstein-Barr Virus (Infectious Mononucleosis)", "Causes mono and is linked to Burkitt lymphoma, Hodgkin lymphoma, and nasopharyngeal carcinoma."),
        D("cmv", "Cytomegalovirus (CMV)", "Mono-like illness in immunocompetent hosts; congenital infection and end-organ disease in the immunosuppressed."),
        D("parvovirus-b19", "Erythrovirus / Parvovirus B19 (Fifth Disease)", "Slapped-cheek rash in children; can cause aplastic crisis and fetal hydrops."),
        D("measles", "Measles (Rubeola)", "Highly contagious morbillivirus with Koplik spots and a cephalocaudal rash; vaccine-preventable, very high R0."),
        D("mumps", "Mumps", "Paramyxovirus causing parotitis, with orchitis as a notable complication."),
        D("rubella", "Rubella (German Measles)", "Mild rash illness in children, but devastating as congenital rubella syndrome in pregnancy."),
        D("coxsackievirus", "Coxsackievirus (Enterovirus)", "Cause of hand-foot-mouth disease and herpangina in children."),
        D("covid-19", "COVID-19 (SARS-CoV-2)", "Coronavirus with a wide clinical spectrum; vaccines and targeted outpatient antivirals both matter here.")
      ]),

      L("fungal-diseases", "Fungal Diseases, Toxoplasmosis & MAC", [
        D("toxoplasmosis", "Toxoplasmosis", "Intracellular protozoan from cat feces/undercooked meat; distinct disease courses in immunocompetent, congenital, and immunocompromised hosts."),
        D("histoplasmosis", "Histoplasmosis", "Dimorphic fungus from bird/bat droppings, endemic to the Ohio and Mississippi River valleys; acute, chronic, and disseminated forms."),
        D("coccidioidomycosis", "Coccidioidomycosis (Valley Fever)", "Dimorphic fungus of southwestern US desert soil causing pneumonia, sometimes disseminated disease."),
        D("candidiasis", "Candidiasis (Invasive)", "Yeast causing local mucocutaneous disease or, in the immunosuppressed/line-associated, hematogenous multi-organ disease."),
        D("aspergillosis", "Aspergillosis", "Mold with four distinct syndromes: ABPA, allergic sinusitis, chronic pulmonary disease, and invasive disease."),
        D("cryptococcosis", "Cryptococcosis", "Encapsulated yeast from soil/pigeon droppings; the leading cause of fungal meningitis, especially in AIDS."),
        D("mac", "Mycobacterium avium Complex (MAC)", "Nontuberculous mycobacterium causing chronic pulmonary disease or, in advanced AIDS, disseminated infection."),
        D("mucormycosis", "Mucormycosis", "Rare, highly lethal mold infection of the immunocompromised and diabetics, especially in DKA."),
        D("sporotrichosis", "Sporotrichosis", "\"Rose gardener's disease\" -- cutaneous/lymphatic spread from a soil or plant inoculation injury.")
      ]),

      L("tick-borne-illnesses", "Tick Transmitted Illness", [
        D("rmsf", "Rocky Mountain Spotted Fever", "Rickettsial infection with fever, headache, and a rash starting on the wrists/ankles; doxycycline is started empirically.", [
          S("overview", "Organism, Epidemiology & Risk", Tbl(["", ""], [
            ["Organism", "<em>Rickettsia rickettsii</em> -- an obligate intracellular gram-negative bacterium"],
            ["Vectors", "American dog tick (<em>Dermacentor variabilis</em>) in the East; Rocky Mountain wood tick (<em>Dermacentor andersoni</em>) in the West"],
            ["Where", "Highest prevalence in the <strong>southeastern and south-central US</strong> -- not the Rocky Mountain region itself"],
            ["Season", "April through September"],
            ["Risk factors", "Increased age, exposure to dogs, wooded areas or high grasses, Native American ethnicity"],
            ["Transmission time", "Tick must feed on the dermis for <strong>&gt; 6 hours</strong> to transmit infected saliva"],
            ["Untreated fatality", "Up to 73%"]
          ]) + HY("Despite the name, RMSF today is concentrated in the southeastern/south-central US, not the Rocky Mountains -- a classic exam trap.") + "<p>Lymphohematogenous spread infects vascular endothelial cells throughout the body. After about a week, increased vascular permeability causes hypovolemia and tissue/organ ischemia -- this endothelial injury/vasculitis is the mechanistic basis for the rash, edema, and multiorgan dysfunction.</p>" + Mn("No PEP", "Unlike Lyme disease, there is no post-exposure prophylaxis after an RMSF-carrying tick bite.")),
          S("presentation", "Clinical Presentation", "<p>Classic triad: <strong>fever, headache, and rash</strong> in a patient with a tick-bite history.</p><p>Early symptoms (days 1-4): high fever, severe headache, malaise, myalgias, arthralgias, nausea/vomiting, anorexia, insomnia, irritability. Also seen: abdominal pain, edema (especially in children), confusion, seizures.</p>" + Tbl(["Rash feature", "Detail"], [
            ["Onset", "Day 2-6 of fever"],
            ["Early appearance", "Small (1-4mm), flat, pink, blanching, non-itchy macules"],
            ["Early distribution", "Starts on <strong>wrists, forearms, and ankles</strong>, then spreads centrally to the trunk"],
            ["Distinguishing feature", "<strong>Palm and sole involvement</strong> is classic"],
            ["Late appearance", "Macules become <strong>petechial</strong> (red to purple), usually day 6+ -- signals progression to severe disease"]
          ]) + HY("Some patients develop a petechial rash suddenly with no preceding maculopapular phase -- don't wait for the \"classic\" progression to suspect RMSF.") + "<p>Complications from day 5 onward: altered mental status, coma, cerebral edema; pulmonary edema/ARDS; skin necrosis (may require amputation); renal failure.</p>"),
          S("diagnosis", "Diagnosis", "<p><strong>Diagnosis is clinical.</strong> Begin treatment immediately on clinical suspicion -- do not wait for confirmatory testing, since delay increases mortality.</p><p>Confirmatory testing is retrospective: <strong>indirect immunofluorescence assay (IFA)</strong> for IgG antibodies (available commercially and free through most state health departments). IgG typically appears 7-10 days after illness onset; the optimal convalescent titer is drawn 14-21 days after symptom onset. Skin punch biopsy is an alternative.</p>" + Tbl(["Lab", "Finding"], [["WBC", "Usually normal"], ["Platelets", "Thrombocytopenia, worsening as illness progresses"], ["Advanced/severe disease", "Hyponatremia, elevated LFTs/bilirubin, azotemia, prolonged PT/PTT"]])),
          S("treatment", "Treatment & Prevention", HY("Doxycycline is first-line for <em>all</em> RMSF patients, including children and pregnant patients -- the risk of delaying treatment outweighs doxycycline's tooth-staining risk in this life-threatening disease.") + Tbl(["Regimen", "Detail"], [
            ["First-line", "Doxycycline 100mg PO or IV BID x 5-7 days, for all patients regardless of age or pregnancy"],
            ["Critically ill", "Single loading dose of 200mg"],
            ["Alternative", "Chloramphenicol -- less effective than doxycycline; reserved for a severe adverse reaction to doxycycline (e.g. TEN, severe hepatotoxicity)"]
          ]) + "<p>No post-exposure prophylaxis exists for RMSF. Prevention relies on general tick-avoidance measures: permethrin-treated clothing, EPA-registered repellents, daily tick checks, and prompt proper tick removal.</p>")
        ], [
          Q("overview", "What organism causes Rocky Mountain Spotted Fever?", ["Rickettsia rickettsii", "Borrelia burgdorferi", "Ehrlichia chaffeensis", "Francisella tularensis"], 0, "RMSF is caused by Rickettsia rickettsii, an obligate intracellular gram-negative bacterium."),
          Q("overview", "Despite its name, Rocky Mountain Spotted Fever is now most prevalent in which US region?", ["The southeastern and south-central US", "The Rocky Mountain states", "The Pacific Northwest", "New England"], 0, "A classic exam trap: RMSF is concentrated in the southeastern and south-central US today, not the Rocky Mountain region."),
          Q("overview", "Which tick is the primary RMSF vector in the eastern United States?", ["American dog tick (Dermacentor variabilis)", "Black-legged tick (Ixodes scapularis)", "Lone star tick (Amblyomma americanum)", "Rocky Mountain wood tick (Dermacentor andersoni)"], 0, "Dermacentor variabilis is the eastern US vector; Dermacentor andersoni carries RMSF in the western US."),
          Q("overview", "Roughly how long must a tick feed before it can transmit Rickettsia rickettsii?", ["More than 6 hours", "Less than 1 hour", "More than 24 hours", "More than 72 hours"], 0, "RMSF transmission requires the tick to feed on the dermis for more than 6 hours -- a much shorter window than Lyme's 24-36 hour requirement."),
          Q("overview", "What is the underlying pathophysiology that produces RMSF's rash and multiorgan dysfunction?", ["Infection of vascular endothelial cells causing increased vascular permeability", "Direct toxin-mediated neuromuscular blockade", "IgE-mediated mast cell degranulation", "Autoimmune demyelination"], 0, "Rickettsia rickettsii spreads lymphohematogenously and infects vascular endothelial cells, causing vasculitis, increased vascular permeability, hypovolemia, and tissue ischemia."),
          Q("overview", "What post-exposure prophylaxis is recommended after a tick bite in an area where RMSF is endemic?", ["None -- there is no RMSF prophylaxis", "Doxycycline 200mg single dose", "Doxycycline 100mg daily for 10 days", "Chloramphenicol single dose"], 0, "Unlike Lyme disease, there is no post-exposure prophylaxis for RMSF after a tick bite."),
          Q("presentation", "What is the classic triad of Rocky Mountain Spotted Fever?", ["Fever, headache, and rash", "Fever, arthralgia, and lymphadenopathy", "Rash, joint pain, and facial palsy", "Fever, cough, and conjunctivitis"], 0, "The classic RMSF triad is fever, headache, and rash in a patient with tick exposure."),
          Q("presentation", "Around what day of illness does the RMSF rash typically first appear?", ["Day 2-6", "Day 1", "Day 10-14", "It never appears in most patients"], 0, "The rash characteristically appears on day 2-6 of the fever, after the nonspecific prodrome."),
          Q("presentation", "Where does the RMSF rash classically begin, and how does it spread?", ["Wrists, forearms, and ankles, spreading centrally to the trunk", "The trunk, spreading peripherally to the extremities", "The face, spreading down the body", "The soles only, without further spread"], 0, "RMSF's rash starts peripherally on the wrists, forearms, and ankles and spreads centripetally to the trunk -- the opposite pattern of many other rashes."),
          Q("presentation", "Involvement of which two body sites is considered classic and distinguishing for the RMSF rash?", ["Palms and soles", "Scalp and axillae", "Mucous membranes only", "Abdomen and back only"], 0, "Palm and sole involvement is a classic, distinguishing feature of the RMSF rash."),
          Q("presentation", "A patient's RMSF rash changes from blanching macules to non-blanching petechiae. What does this indicate?", ["Progression to severe disease", "Resolution of the infection", "A drug allergy to doxycycline", "Superinfection with Staphylococcus aureus"], 0, "Petechial transformation of the rash, usually by day 6 or later, signals progression to severe disease."),
          Q("presentation", "Which of the following is a recognized complication of severe, advanced RMSF?", ["Cerebral edema and altered mental status", "Chronic arthritis of the knee", "Facial nerve palsy", "Erythema migrans"], 0, "Severe RMSF can progress to CNS complications including altered mental status, coma, and cerebral edema, as well as ARDS, skin necrosis, and renal failure. (The other options are Lyme disease findings.)"),
          Q("diagnosis", "How should suspected RMSF be managed while diagnostic testing is pending?", ["Start doxycycline empirically without waiting for confirmatory testing", "Wait for a positive IFA titer before starting antibiotics", "Wait for skin biopsy results before starting antibiotics", "Start antibiotics only if the classic rash is already present"], 0, "RMSF diagnosis is clinical, and treatment should begin immediately on suspicion -- delaying treatment for confirmatory serology increases mortality."),
          Q("diagnosis", "What is the confirmatory serologic test for RMSF, and when is it optimally drawn?", ["Indirect immunofluorescence assay (IFA) for IgG, optimally at 14-21 days after symptom onset", "Two-tier ELISA/Western blot, at symptom onset", "PCR of peripheral blood on day 1 of illness", "Rapid antigen test at the bedside"], 0, "IFA for IgG antibodies is the confirmatory test; it is retrospective, with IgG typically appearing 7-10 days after onset and an optimal convalescent titer at 14-21 days."),
          Q("diagnosis", "What is the typical white blood cell count and platelet trend in RMSF?", ["Normal WBC with thrombocytopenia that worsens as illness progresses", "Marked leukocytosis with thrombocytosis", "Leukopenia with a normal platelet count", "Eosinophilia with thrombocytopenia"], 0, "RMSF classically shows a normal WBC count with thrombocytopenia that becomes more prevalent and severe as the illness progresses."),
          Q("treatment", "What is the first-line treatment for RMSF, and does this change in children or pregnancy?", ["Doxycycline, used in all patients including children and pregnant patients", "Doxycycline, but avoided in children under 8 and in pregnancy", "Azithromycin, preferred in pregnancy", "Chloramphenicol, first-line in all patients"], 0, "Doxycycline is first-line for every RMSF patient regardless of age or pregnancy, because delaying treatment is more dangerous than doxycycline's tooth-staining risk in this potentially fatal disease."),
          Q("treatment", "When is chloramphenicol used instead of doxycycline for RMSF?", ["Only for a severe adverse reaction to doxycycline, since it is less effective", "As the preferred first-line agent in adults", "As the preferred agent in pregnancy", "Only for outpatient, mild disease"], 0, "Chloramphenicol is reserved as an alternative for patients with a severe adverse reaction to doxycycline (e.g. TEN, severe hepatotoxicity); it is less effective overall."),
          Q("treatment", "What loading dose of doxycycline is used in a critically ill RMSF patient?", ["200mg", "50mg", "500mg", "No loading dose is used"], 0, "A single 200mg loading dose of doxycycline is used in critically ill RMSF patients.")
        ]),
        D("lyme-disease", "Lyme Disease", "Borrelia burgdorferi from Ixodes ticks; staged disease from erythema migrans through disseminated disease to late arthritis/neuro findings.", [
          S("overview", "Organism, Transmission & Tick-Bite Prophylaxis", Tbl(["", ""], [
            ["Organism", "<em>Borrelia burgdorferi</em> (spirochete) -- the most common vector-borne disease in the US"],
            ["Vector", "<em>Ixodes scapularis</em> (black-legged / deer tick)"],
            ["Life cycle", "Larvae take a blood meal and become infected, molt to nymph the following spring, infect secondary hosts, molt to adult in fall (adults prefer white-tailed deer)"],
            ["Who transmits most", "The <strong>nymph</strong> stage -- small size makes it less likely to be noticed and removed before transmission occurs"],
            ["Attachment time needed", "<strong>&ge; 24-36 hours</strong>"],
            ["Season", "Spring through fall (nymphs questing April-July; adults active spring and fall)"],
            ["Setting", "Forestry, high grass, rural areas"]
          ]) + HY("Tick-bite prophylaxis: doxycycline 200mg as a single dose, if the tick was attached/engorged for &gt; 24 hours AND prophylaxis is given within 72 hours of the bite.") + Mn("Contrast with RMSF", "RMSF has no post-exposure prophylaxis at all; Lyme has a specific single-dose regimen with a time window.")),
          S("stage1", "Stage 1 -- Early Localized Disease", "<p>Classic finding: <strong>erythema migrans (EM)</strong>, with or without constitutional symptoms.</p>" + Tbl(["EM feature", "Detail"], [
            ["Timing", "Appears at the bite site 7-10 days after the bite (range 3-30 days)"],
            ["Frequency", "~80% of patients develop EM, but only ~25% recall the tick bite itself"],
            ["Appearance", "Expands slowly over days-weeks, often with central clearing (\"bullseye\"); not all lesions are a perfect circle, and necrotic/vesicular centers are rare"],
            ["Common sites", "Axilla, inguinal region, popliteal fossa, belt line"],
            ["Sensation", "May burn, itch, or feel warm; not classically painful"]
          ]) + "<p>Systemic, viral-syndrome-like symptoms over the first days to couple weeks: fatigue, anorexia, headache, neck stiffness, myalgias/arthralgias, regional lymphadenopathy. High fever is uncommon. Untreated, symptoms and EM resolve in 3-4 weeks.</p>" + HY("Diagnosis of Stage 1 with EM is clinical -- serology is often falsely negative this early and should not be relied on.") + Tbl(["Regimen", "Use"], [["Doxycycline 100mg PO BID x 10 days", "Preferred"], ["Amoxicillin 500mg PO TID x 14 days", "Preferred"], ["Cefuroxime 500mg PO BID x 14 days", "Preferred"], ["Azithromycin 500mg PO daily x 7 days", "Alternative -- preferred choice in pregnancy"]]) + '<p style="color:var(--faint);font-size:12px">Dosing shown is for adults; use weight-based dosing in children.</p>'),
          S("stage2", "Stage 2 -- Early Disseminated Disease", "<p>Occurs weeks to months after the tick bite.</p>" + HY("Multiple annular EM-like lesions indicate spirochetemia (hematogenous spread) -- NOT multiple tick bites. This is a classic distractor.") + "<p>Associated symptoms: constant malaise/fatigue, fever/chills, headache, neck pain, intermittent migratory musculoskeletal pain. Some patients have no antecedent Stage 1 history.</p>" + Tbl(["System", "Findings"], [
            ["Cardiac (4-10% of patients)", "Heart block, myocarditis/pericarditis, atrial or ventricular arrhythmias, palpitations, LV failure, sudden cardiac death"],
            ["Neurologic (10-15% of patients)", "Aseptic meningitis; cranial nerve palsy (<strong>facial nerve/CN VII is most common</strong> -- Bell's palsy); radiculopathy; peripheral neuropathy"]
          ]) + "<p>Patients with EM lesions can still be diagnosed clinically. Without EM, suspected disseminated disease (cardiac/neuro findings) warrants <strong>two-tier serology</strong>: initial ELISA, then confirmatory Western blot (IgM and IgG) if positive or equivocal. A positive immunoblot needs &ge;2 IgM or &ge;5 IgG specific bands. Serology is not helpful with a history of prior Lyme disease, since antibodies persist for years.</p>" + Tbl(["Manifestation", "Treatment"], [
            ["Multiple EM lesions", "Doxycycline 100mg PO BID x 21 days"],
            ["Migratory arthritis", "Doxycycline 100mg PO BID x 30 days"],
            ["Cranial nerve palsy", "Doxycycline 100mg PO BID x 14-21 days"],
            ["Meningitis", "Ceftriaxone 2g IV daily x 14-28 days"],
            ["1st/2nd degree heart block", "Doxycycline 100mg PO BID x 14-21 days"],
            ["3rd degree heart block or myopericarditis", "Ceftriaxone 2g IV daily x 14-21 days"]
          ])),
          S("stage3", "Stage 3 -- Late Disease", "<p>Occurs months to a few years after the tick bite.</p>" + HY("The most common late-stage finding is arthritis, typically of one or a few large weight-bearing joints -- the knee is the most common site.") + "<p>Joint pain and swelling resolve over weeks to months but can recur. Rare neurologic findings: distal paresthesia/spinal radicular pain, or encephalopathy (memory loss, mood or sleep disturbance).</p><p>Serologic testing is warranted; <strong>IgG Western blot is the test of choice</strong> and should be positive, since symptoms have typically been ongoing &ge;8 weeks by this point. Treatment uses the same stage/manifestation-based regimens as early disseminated disease.</p>"),
          S("ptlds-reinfection", "Post-Treatment Syndrome & Reinfection", Tbl(["Concept", "Detail"], [
            ["Post-treatment Lyme disease syndrome", "Nonspecific fatigue, widespread musculoskeletal pain, and cognitive difficulty persisting months-years after treatment, in 5-15% of patients; most improve gradually over 6 months to 1 year"],
            ["Reinfection", "Identified by a <strong>new EM rash</strong> in a patient with a history of prior successfully-treated EM; treated with the same regimen as a primary infection based on presenting stage"],
            ["Reinfection after Lyme arthritis", "Not reported"]
          ])),
          S("prevention", "Prevention", "<p>General tick-avoidance measures: know tick habitats (grassy, brushy, wooded areas, on animals) and walk in the center of trails; treat clothing/gear with <strong>0.5% permethrin</strong>; wear long sleeves/pants and light-colored clothing, tuck pants into socks; use EPA-registered repellents (DEET, picaridin, IR3535, oil of lemon eucalyptus, para-menthane-diol, or 2-undecanone); treat pets with tick preventatives; perform daily tick checks (under arms, in/around ears, inside belly button, behind knees, between legs, around waist, hairline/scalp).</p>" + HY("Correct tick removal: use fine-tipped tweezers, grasp the tick as close to the skin as possible, and pull straight up with steady, even pressure -- never twist, jerk, or crush the tick.") + "<p>Clean the bite site and hands with alcohol or soap and water after removal.</p>")
        ], [
          Q("overview", "What is the most common vector-borne disease in the United States?", ["Lyme disease", "Rocky Mountain Spotted Fever", "Ehrlichiosis", "Babesiosis"], 0, "Lyme disease, caused by Borrelia burgdorferi, is the most common vector-borne disease in the US."),
          Q("overview", "What organism causes Lyme disease in the United States?", ["Borrelia burgdorferi", "Rickettsia rickettsii", "Francisella tularensis", "Anaplasma phagocytophilum"], 0, "Lyme disease is caused by the spirochete Borrelia burgdorferi."),
          Q("overview", "Which tick transmits Lyme disease?", ["Ixodes scapularis (black-legged/deer tick)", "Dermacentor variabilis (American dog tick)", "Amblyomma americanum (lone star tick)", "Dermacentor andersoni (Rocky Mountain wood tick)"], 0, "Ixodes scapularis, the black-legged or deer tick, is the vector for Lyme disease."),
          Q("overview", "Which tick life stage most commonly transmits Lyme disease to humans, and why?", ["The nymph, because its small size makes it less likely to be noticed and removed in time", "The larva, because it is the most numerous stage", "The adult, because it feeds the longest", "The egg, through transovarial transmission"], 0, "Nymphs transmit Lyme disease most often because their small size makes them less likely to be noticed and removed before the transmission window elapses."),
          Q("overview", "Approximately how long must an Ixodes tick be attached before Borrelia burgdorferi is typically transmitted?", ["24-36 hours or more", "Less than 1 hour", "6 hours", "Immediately upon attachment"], 0, "Transmission of B. burgdorferi typically requires at least 24-36 hours of tick attachment -- much longer than RMSF's 6-hour threshold."),
          Q("overview", "What tick-bite prophylaxis is recommended for Lyme disease, and under what conditions?", ["Doxycycline 200mg single dose, if the tick was attached >24 hours and prophylaxis is given within 72 hours of the bite", "Doxycycline 100mg daily for 10 days, given anytime after any tick bite", "No prophylaxis exists for Lyme disease", "Amoxicillin 500mg TID for 14 days, started within 24 hours"], 0, "Lyme tick-bite prophylaxis is a single 200mg dose of doxycycline, given when the tick was attached/engorged for more than 24 hours and prophylaxis starts within 72 hours of the bite."),
          Q("stage1", "What is the hallmark finding of early localized (Stage 1) Lyme disease?", ["Erythema migrans (EM)", "Bilateral facial palsy", "Migratory large-joint arthritis", "Heart block"], 0, "Erythema migrans, an expanding annular rash often with central clearing, is the hallmark of early localized Lyme disease."),
          Q("stage1", "About how long after a tick bite does erythema migrans typically appear?", ["7-10 days (range 3-30 days)", "Within 24 hours", "6-8 weeks", "Immediately at the time of the bite"], 0, "EM typically appears 7-10 days after the bite, with a range of 3-30 days."),
          Q("stage1", "What proportion of Lyme disease patients develop EM, and what proportion recall the actual tick bite?", ["About 80% develop EM, but only about 25% recall the bite", "About 25% develop EM, and 80% recall the bite", "Nearly 100% develop EM and recall the bite", "Less than 10% ever develop EM"], 0, "About 80% of patients develop EM, but only about 25% remember being bitten by a tick."),
          Q("stage1", "Where on the body does erythema migrans most commonly occur?", ["Axilla, inguinal region, popliteal fossa, and belt line", "Palms and soles", "Scalp only", "Face and neck only"], 0, "EM most commonly occurs at the axilla, inguinal region, popliteal fossa, and belt line."),
          Q("stage1", "How is early localized Lyme disease (with a typical EM rash) diagnosed?", ["Clinically -- serology is often falsely negative this early", "Only with a positive two-tier ELISA/Western blot", "Only with PCR of the skin lesion", "Only with a positive IgM Western blot"], 0, "Early Stage 1 Lyme disease with EM is a clinical diagnosis; serologic testing is often negative too early in infection to be useful."),
          Q("stage1", "What is the preferred treatment for early localized Lyme disease in a pregnant patient?", ["Azithromycin 500mg PO daily x 7 days", "Doxycycline 100mg PO BID x 10 days", "Ceftriaxone 2g IV daily x 14 days", "Chloramphenicol"], 0, "The slide lists doxycycline, amoxicillin, and cefuroxime as preferred regimens and azithromycin as the alternative regimen -- but specifically calls out azithromycin as the preferred choice in pregnancy."),
          Q("stage1", "Which of the following is an acceptable non-pregnant regimen for early localized Lyme disease?", ["Doxycycline 100mg PO BID x 10 days", "Doxycycline 100mg PO BID x 21 days", "Ceftriaxone 2g IV daily x 14 days", "Streptomycin IM x 10 days"], 0, "Doxycycline 100mg PO BID for 10 days is a preferred regimen for early localized (Stage 1) disease; the 21-day course is used for Stage 2 multiple EM lesions."),
          Q("stage2", "A patient has several separate annular skin lesions resembling erythema migrans. What does this represent?", ["Spirochetemia (hematogenous spread), not multiple tick bites", "Multiple separate tick bites, each causing its own EM", "An allergic reaction to the first EM lesion", "Early Lyme arthritis"], 0, "Multiple EM-like lesions indicate hematogenous spread of spirochetes (spirochetemia) -- a classic point that is often mistaken for multiple bites."),
          Q("stage2", "Approximately what percentage of Lyme disease patients develop cardiac involvement in early disseminated disease?", ["4-10%", "50-60%", "Less than 1%", "90%"], 0, "Cardiac involvement occurs in roughly 4-10% of patients with early disseminated Lyme disease."),
          Q("stage2", "Which cranial nerve palsy is most commonly associated with early disseminated Lyme disease?", ["Facial nerve (CN VII)", "Trigeminal nerve (CN V)", "Vagus nerve (CN X)", "Optic nerve (CN II)"], 0, "Facial nerve (CN VII) palsy, presenting as Bell's palsy, is the most common cranial neuropathy in early disseminated Lyme disease."),
          Q("stage2", "A patient in an endemic area presents with bilateral facial droop and a recent flu-like illness. What should be suspected?", ["Lyme disease", "Idiopathic Bell's palsy", "Stroke", "Myasthenia gravis"], 0, "Bilateral facial palsy, especially with a recent viral-like illness in an endemic area, should raise suspicion for Lyme disease rather than idiopathic Bell's palsy."),
          Q("stage2", "In a patient without EM but with findings concerning for disseminated Lyme disease, what is the correct diagnostic approach?", ["Two-tier serology: ELISA screen, then Western blot to confirm if positive or equivocal", "Western blot alone, with no ELISA needed", "Skin biopsy of the affected joint", "PCR of cerebrospinal fluid regardless of symptoms"], 0, "Two-tier serologic testing -- an ELISA screen followed by a confirmatory Western blot if positive or equivocal -- is used when EM is absent but disseminated disease is suspected."),
          Q("stage2", "How many specific IgG bands are required for a positive Lyme Western blot?", ["5 or more", "1 or more", "10 or more", "2 or more (this is the IgM threshold, not IgG)"], 0, "A positive immunoblot requires antibodies against 5 or more specific IgG bands (or 2 or more specific IgM bands)."),
          Q("stage2", "What is the appropriate treatment for Lyme meningitis?", ["Ceftriaxone 2g IV daily for 14-28 days", "Doxycycline 100mg PO BID for 10 days", "Azithromycin 500mg PO daily for 7 days", "Amoxicillin 500mg PO TID for 14 days"], 0, "Lyme meningitis, a neurologic manifestation of disseminated disease, is treated with IV ceftriaxone 2g daily for 14-28 days."),
          Q("stage2", "A Lyme disease patient develops 3rd degree heart block. What is the appropriate treatment?", ["Ceftriaxone 2g IV daily x 14-21 days", "Doxycycline 100mg PO BID x 14-21 days", "Observation only, since it will self-resolve", "Amoxicillin 500mg PO TID x 21 days"], 0, "High-grade (3rd degree) heart block or myopericarditis from Lyme disease is treated with IV ceftriaxone, unlike 1st/2nd degree block, which can be treated with oral doxycycline."),
          Q("stage3", "What is the most common manifestation of late (Stage 3) Lyme disease?", ["Arthritis, typically of one or a few large weight-bearing joints", "Cranial nerve palsy", "Erythema migrans", "Heart block"], 0, "Arthritis is the most common late-stage manifestation of Lyme disease."),
          Q("stage3", "Which joint is most commonly affected by late Lyme arthritis?", ["The knee", "The hip", "The wrist", "The shoulder"], 0, "The knee is the most commonly affected joint in late Lyme disease/Lyme arthritis."),
          Q("stage3", "What is the serologic test of choice for diagnosing late Lyme disease?", ["IgG Western blot", "IgM Western blot alone", "ELISA alone, without confirmatory testing", "Rapid antigen test"], 0, "IgG Western blot is the test of choice for late Lyme disease, since by this stage (symptoms ongoing 8+ weeks) the IgG response should be well established."),
          Q("ptlds-reinfection", "How is Lyme disease reinfection typically identified?", ["A new erythema migrans rash in a patient with a history of prior treated EM", "A rise in ESR alone", "Recurrent fatigue without any rash", "A positive PPD"], 0, "Reinfection is almost always recognized by the appearance of a new EM rash in someone who was previously successfully treated for Lyme disease."),
          Q("ptlds-reinfection", "Roughly what percentage of treated Lyme disease patients develop post-treatment Lyme disease syndrome?", ["5-15%", "50-60%", "Less than 1%", "Nearly 100%"], 0, "Post-treatment Lyme disease syndrome -- persistent fatigue, musculoskeletal pain, and cognitive difficulty -- occurs in about 5-15% of treated patients."),
          Q("ptlds-reinfection", "Has Lyme disease reinfection been reported after an episode of Lyme arthritis?", ["No, it has not been reported", "Yes, it is the most common form of reinfection", "Yes, but only in immunocompromised patients", "Reinfection is impossible after any stage of Lyme disease"], 0, "Reinfection has not been reported following Lyme arthritis specifically, unlike reinfection after earlier-stage disease."),
          Q("prevention", "What permethrin concentration is recommended for treating clothing and gear to prevent tick bites?", ["0.5%", "5%", "0.05%", "50%"], 0, "Clothing and gear should be treated with products containing 0.5% permethrin."),
          Q("prevention", "What is the correct technique for removing an attached tick?", ["Grasp it with fine-tipped tweezers close to the skin and pull straight up with steady, even pressure", "Twist the tick counterclockwise while pulling", "Apply heat from a match to make the tick detach", "Crush the tick with your fingers, then pull it off"], 0, "Correct removal uses fine-tipped tweezers to grasp the tick close to the skin, pulling straight up with steady pressure -- never twisting, jerking, or crushing it.")
        ])
      ]),

      L("syphilis", "Syphilis", [
        D("syphilis", "Syphilis", "Treponema pallidum with primary, secondary, latent, and tertiary stages, plus distinct early vs. late neurosyphilis -- each with its own treatment.")
      ]),

      L("sepsis", "Pathophysiology of Sepsis", [
        D("sepsis-septic-shock", "Sepsis / Septic Shock", "Infection with organ dysfunction progressing to pressor-dependent shock; time-to-antibiotics is the top mortality predictor."),
        D("febrile-neutropenia", "Febrile Neutropenia", "Fever in a neutropenic, often oncology, patient -- a medical emergency requiring antibiotics within an hour of cultures.")
      ]),

      L("global-infections", "Global Infection", [
        D("chikungunya", "Chikungunya Fever", "Mosquito-borne alphavirus causing severe, often prolonged, polyarthralgia."),
        D("zika", "Zika Virus", "Mosquito- and sexually-transmitted flavivirus notable for congenital microcephaly."),
        D("dengue", "Dengue Fever", "Flavivirus causing high fever plus retro-orbital pain, with a hemorrhagic/shock form appearing after defervescence."),
        D("ebola", "Ebola", "Filovirus hemorrhagic fever from direct contact with infected body fluids; extremely high fatality."),
        D("yellow-fever", "Yellow Fever", "Flavivirus with a classic triphasic course; vaccine-preventable and often travel-required."),
        D("rabies", "Rabies", "Near-100%-fatal once symptomatic; post-exposure prophylaxis (wound care + vaccine + immunoglobulin) is time-critical."),
        D("mers", "MERS", "Camel-associated coronavirus causing severe respiratory illness, concentrated in the Arabian Peninsula."),
        D("sars", "SARS", "2002-2003 coronavirus outbreak causing severe atypical pneumonia; no cases reported since 2004."),
        D("monkeypox", "Monkeypox (Mpox)", "Orthopoxvirus causing a vesiculopustular rash; vaccine and antiviral options exist for severe cases."),
        D("tularemia", "Tularemia", "Francisella tularensis via ticks or animal contact; 6 clinical forms, streptomycin is the drug of choice."),
        D("leprosy", "Leprosy (Hansen's Disease)", "Mycobacterium leprae causing skin and peripheral nerve disease; treated with multidrug therapy (dapsone/rifampicin ± clofazimine)."),
        D("yaws", "Yaws", "Non-venereal treponemal infection of the skin and bone in tropical regions; cured with single-dose azithromycin or penicillin."),
        D("african-trypanosomiasis", "African Trypanosomiasis (Sleeping Sickness)", "Tsetse fly-borne parasite with subspecies-specific staged treatment (T.b. rhodesiense vs. T.b. gambiense)."),
        D("chagas-disease", "American Trypanosomiasis (Chagas Disease)", "Kissing-bug-borne parasite with an acute phase and a chronic cardiac/GI phase that can appear years later."),
        D("cysticercosis", "Cysticercosis", "Tapeworm larval tissue infection, notably causing seizures from neurocysticercosis."),
        D("onchocerciasis", "Onchocerciasis (River Blindness)", "Blackfly-borne filarial worm causing skin and eye disease; ivermectin kills the microfilariae only.")
      ]),

      L("introduction-infectious-disease", "Introduction to Infectious Disease", [
        D("listeria", "Listeria monocytogenes", "Gram-positive bacillus posing special risk to pregnant and immunocompromised patients."),
        D("diphtheria", "Diphtheria (Corynebacterium diphtheriae)", "Toxin-mediated infection prevented by childhood toxoid vaccination."),
        D("anthrax", "Anthrax (Bacillus anthracis)", "Spore-forming gram-positive rod with recognized bioterrorism significance."),
        D("nocardia-actinomyces", "Nocardia / Actinomyces", "Weakly gram-positive filamentous soil organisms causing indolent abscesses, especially with T-cell dysfunction."),
        D("mycoplasma-pneumoniae", "Mycoplasma pneumoniae", "Cell-wall-free bacterium causing atypical \"walking\" pneumonia, mostly under age 35; beta-lactams don't work."),
        D("chlamydia-species", "Chlamydia species", "Obligate intracellular bacteria causing GU infection (trachomatis), atypical pneumonia (pneumoniae), or psittacosis (psittaci)."),
        D("leptospirosis", "Leptospirosis", "Zoonotic spirochete from contaminated water or animal urine with protean manifestations."),
        D("dermatophyte-infections", "Dermatophyte Infections (Tinea)", "Fungal infection of keratinized skin, hair, and nails -- corporis, pedis, cruris, capitis, unguium."),
        D("blastomycosis", "Blastomycosis", "Dimorphic fungus endemic to the Ohio/Mississippi River valleys and Great Lakes region."),
        D("prion-diseases", "Prion Diseases", "Misfolded-protein neurodegenerative disorders -- CJD, variant CJD, fatal familial insomnia, Gerstmann-Straussler-Scheinker syndrome.")
      ]),

      L("hiv-aids", "HIV and AIDS", [
        D("hiv-aids", "HIV Infection / AIDS", "Retrovirus destroying CD4 T cells; staged from acute infection through AIDS, defined by CD4 <200 or an AIDS-defining diagnosis."),
        D("pcp", "Pneumocystis Pneumonia (PCP)", "The most frequent AIDS-defining opportunistic infection in the US, typically at CD4 <200; high-dose Bactrim is treatment of choice."),
        D("tuberculosis-hiv", "Tuberculosis (in HIV)", "Can occur at any CD4 count; presentation shifts from typical apical-cavitary to atypical miliary as CD4 falls."),
        D("cryptosporidiosis", "Cryptosporidiosis (+ Isosporiasis)", "AIDS-defining protozoal causes of chronic diarrhea."),
        D("cmv-disease", "CMV Disease", "AIDS-defining end-organ CMV -- retinitis, colitis/esophagitis, pneumonitis -- distinct from CMV mono in the immunocompetent."),
        D("pml", "Progressive Multifocal Leukoencephalopathy (PML)", "JC virus demyelinating disease with non-enhancing white matter lesions; usually progressive and fatal."),
        D("cns-lymphoma", "Primary CNS Lymphoma", "EBV-associated AIDS-defining malignancy at CD4 <100, with ring-enhancing lesions on MRI."),
        D("hand", "HIV-Associated Neurocognitive Disorders (HAND)", "A staged spectrum (ANI to MND to HAD) of HIV-driven cognitive decline; a diagnosis of exclusion."),
        D("kaposi-sarcoma", "Kaposi's Sarcoma", "HHV-8-driven vascular tumor, the most common HIV-associated malignancy."),
        D("hiv-nhl", "Non-Hodgkin's Lymphoma (HIV-associated)", "Aggressive, often EBV-related lymphoma occurring with advanced immunosuppression."),
        D("invasive-cervical-cancer", "Invasive Cervical Cancer (HIV-accelerated)", "HPV-driven cervical cancer that progresses faster and treats less predictably in HIV-positive women."),
        D("hivan", "HIV-Associated Nephropathy (HIVAN)", "FSGS causing nephrotic-range proteinuria and rapid progression to ESRD, almost exclusively in Black men with HIV."),
        D("hiv-wasting-syndrome", "HIV Wasting Syndrome", "AIDS-defining unintentional weight loss (>10%) with diarrhea, fever, or weakness in advanced disease.")
      ])
    ]
  };
}());
