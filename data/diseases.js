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

  function D(id, name, blurb) {
    return { id: id, name: name, blurb: blurb, sections: [], questions: [] };
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
        D("rmsf", "Rocky Mountain Spotted Fever", "Rickettsial infection with fever, headache, and a rash starting on the wrists/ankles; doxycycline is started empirically."),
        D("lyme-disease", "Lyme Disease", "Borrelia burgdorferi from Ixodes ticks; staged disease from erythema migrans through disseminated disease to late arthritis/neuro findings.")
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
