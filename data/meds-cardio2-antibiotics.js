/*
  Medications: Endocarditis & gangrene antibiotics (Cardio Part 2). Source:
  endocarditis-pericardial.md slides 36-45; vascular-disease-part-1.md
  slides 53, 63-64. Spectrum and side effects not on these slides are
  standard teaching (and match the Infectious Disease Pharmacology lecture).
  Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO2_MEDS_ANTIBIOTICS = L("meds2-antibiotics", "Endocarditis & gangrene antibiotics", [

    Med("med-vancomycin", "Vancomycin IV", "MRSA and gram-positive backbone of every empiric IE regimen", ["Infective Endocarditis & Pericardial Disease", "Vascular Disease Part 1"], {
      uses: ul([
        "<strong>Empiric IE</strong> after blood cultures: native valve = <strong>vancomycin + ceftriaxone</strong>; prosthetic valve = <strong>vancomycin + piperacillin-tazobactam</strong>.",
        "<strong>MRSA endocarditis</strong>: IV vancomycin for <strong>6+ weeks</strong>.",
        "<strong>Gas gangrene (clostridial myonecrosis)</strong> empiric: <strong>vancomycin + Zosyn + clindamycin</strong>."
      ]),
      moa: "<p>Blocks cell wall synthesis (binds D-Ala-D-Ala); gram-positive only, including <strong>MRSA</strong> (standard teaching). Only <strong>IV</strong> vancomycin treats systemic infection; PO stays in the gut.</p>",
      avoid: ul(["For <strong>MSSA</strong>, switch to nafcillin (or cefazolin): beta-lactams beat vancomycin for MSSA.", "Kidney disease: dose by levels."]),
      se: ul(["<strong>Nephrotoxicity</strong> (monitor trough or AUC).", "<strong>Infusion reaction (\"red man\"/flushing)</strong> if run too fast.", "Ototoxicity (standard teaching)."]),
      pearls: ul(["Always draw blood cultures before the first dose.", "Involve Infectious Disease in every IE case."]) +
        HY("Every empiric IE regimen starts with vancomycin.")
    }, [
      Q("uses", "Suspected native valve endocarditis in an IV drug user. Empiric regimen after cultures?", ["Vancomycin plus ceftriaxone", "Amoxicillin alone", "Nafcillin alone", "Azithromycin"], 0, "Native valve IE: vancomycin plus ceftriaxone (alternatives to ceftriaxone: Unasyn, cefepime or Zosyn)."),
      Q("uses", "Blood cultures grow MRSA from a patient with tricuspid IE. Treatment?", ["IV vancomycin for 6 or more weeks", "Nafcillin for 6 weeks", "Penicillin G for 4 weeks", "Oral vancomycin"], 0, "MRSA IE: vancomycin IV × 6+ weeks; MSSA: nafcillin."),
      Q("se", "Which monitoring matters most on IV vancomycin?", ["Trough or AUC levels and kidney function", "INR", "QTc", "TSH"], 0, "Vancomycin exposure is balanced against nephrotoxicity using trough or AUC monitoring."),
      Q("uses", "What is the empiric antibiotic regimen for gas gangrene?", ["Vancomycin + piperacillin-tazobactam + clindamycin", "Vancomycin alone", "Penicillin G alone", "Ceftriaxone + azithromycin"], 0, "Clostridial myonecrosis: Vanc + Zosyn + clindamycin initially, plus immediate surgery."),
      Q("se", "Flushing and itching of the upper body during a fast vancomycin infusion. What is this?", ["Vancomycin infusion reaction (red man)", "Anaphylaxis to penicillin", "Digoxin toxicity", "Serum sickness"], 0, "Vancomycin infusion reaction from rapid infusion; slow the rate (standard teaching).")
    ]),

    Med("med-ceftriaxone", "Ceftriaxone", "3rd-generation cephalosporin; vancomycin's partner for native valve IE", ["Infective Endocarditis & Pericardial Disease"], {
      uses: ul(["<strong>Native valve IE empiric</strong>: <strong>vancomycin + ceftriaxone</strong> (gram-negative and strep coverage).", "Alternatives to ceftriaxone: <strong>ampicillin-sulbactam (Unasyn), cefepime or piperacillin-tazobactam</strong>."]),
      moa: "<p>Beta-lactam cell wall inhibitor; strong against strep (including HACEK) and many gram-negatives (standard teaching).</p>",
      avoid: ul(["Severe beta-lactam allergy.", "Does <strong>not cover Enterococcus or MRSA</strong> (standard teaching).", "Not for prosthetic valves empirically (needs Pseudomonas coverage)."]),
      se: ul(["Biliary sludge, diarrhea/C. diff, allergy (standard teaching)."]),
      pearls: ul(["Narrow therapy once cultures return; ID should be involved."]) +
        HY("Native valve: vanc + ceftriaxone. Prosthetic valve: vanc + Zosyn.")
    }, [
      Q("uses", "Which drug pairs with vancomycin for empiric native valve IE?", ["Ceftriaxone", "Clindamycin", "Doxycycline", "Metronidazole"], 0, "Native valve: vancomycin plus ceftriaxone."),
      Q("uses", "Which are listed alternatives to ceftriaxone in native valve IE?", ["Unasyn, cefepime or Zosyn", "Azithromycin or doxycycline", "Clindamycin or metronidazole", "Gentamicin alone"], 0, "Alternatives to ceftriaxone: Unasyn, cefepime or Zosyn."),
      Q("avoid", "Why is ceftriaxone not used empirically for prosthetic valve IE?", ["It does not cover Pseudomonas; Zosyn is used instead", "It is too toxic", "It is only oral", "It causes lupus"], 0, "PVE empiric: vancomycin + Zosyn, which covers Pseudomonas."),
      Q("avoid", "Which organism does ceftriaxone NOT cover?", ["Enterococcus", "Streptococcus viridans", "HACEK organisms", "Strep pneumoniae"], 0, "Cephalosporins do not cover Enterococcus (standard teaching).")
    ]),

    Med("med-pip-tazo", "Piperacillin-tazobactam (Zosyn)", "Anti-pseudomonal penicillin; vancomycin's partner for prosthetic valve IE", ["Infective Endocarditis & Pericardial Disease", "Vascular Disease Part 1"], {
      uses: ul(["<strong>Prosthetic valve IE empiric</strong>: <strong>vancomycin + Zosyn</strong> (covers <strong>Pseudomonas</strong>).", "Alternative partner in native valve IE.", "Gas gangrene: vancomycin + Zosyn + clindamycin."]),
      moa: "<p>Extended-spectrum penicillin + beta-lactamase inhibitor: MSSA, strep, many gram-negatives, <strong>Pseudomonas</strong>, Enterococcus and anaerobes; not MRSA (standard teaching).</p>",
      avoid: ul(["Penicillin allergy."]),
      se: ul(["Diarrhea/C. diff, allergy; kidney injury with vancomycin (standard teaching)."]),
      pearls: ul(["Early PVE organisms include staph, strep, gram-negative bacilli and Candida."]) +
        HY("PVE → vanc + Zosyn (Pseudomonas).")
    }, [
      Q("uses", "A patient with a 6-month-old mechanical aortic valve has fever and a new murmur. Empiric antibiotics?", ["Vancomycin plus piperacillin-tazobactam", "Vancomycin plus ceftriaxone", "Nafcillin alone", "Amoxicillin"], 0, "PVE: vancomycin and Zosyn, which covers Pseudomonas."),
      Q("moa", "Why is Zosyn preferred over ceftriaxone for prosthetic valve IE?", ["It covers Pseudomonas", "It covers MRSA", "It is oral", "It has no allergy risk"], 0, "Zosyn covers Pseudomonas."),
      Q("moa", "Which organism does Zosyn NOT cover?", ["MRSA", "Pseudomonas", "Anaerobes", "Enterococcus faecalis"], 0, "Pip-tazo does not cover MRSA, so it is paired with vancomycin."),
      Q("uses", "Which three drugs start gas gangrene therapy?", ["Vancomycin, Zosyn and clindamycin", "Penicillin, gentamicin and ampicillin", "Ceftriaxone, doxycycline and metronidazole", "Nafcillin, rifampin and gentamicin"], 0, "Empiric coverage for MRSA, gram-positives, gram-negatives and anaerobes.")
    ]),

    Med("med-nafcillin", "Nafcillin IV", "Anti-staphylococcal penicillin; 6+ weeks for MSSA endocarditis", ["Infective Endocarditis & Pericardial Disease"], {
      uses: ul(["<strong>MSSA endocarditis</strong>: <strong>nafcillin IV × 6+ weeks</strong>."]),
      moa: "<p>Penicillinase-resistant penicillin: narrow coverage of <strong>MSSA</strong> and strep; no MRSA, Enterococcus or gram-negatives (standard teaching).</p>",
      avoid: ul(["<strong>MRSA</strong>: use vancomycin.", "Penicillin allergy (cefazolin is the usual alternative, standard teaching)."]),
      se: ul(["Phlebitis, neutropenia, interstitial nephritis, hepatitis (standard teaching)."]),
      pearls: ul(["Beta-lactams kill MSSA better than vancomycin, so switch once cultures show MSSA.", "S. aureus is the most common IE organism overall and in IV drug users (~70%)."]) +
        HY("MSSA → nafcillin 6+ wk. MRSA → vancomycin 6+ wk.")
    }, [
      Q("uses", "Cultures grow methicillin-sensitive Staph aureus in a patient on empiric vancomycin. Best change?", ["Switch to IV nafcillin for 6+ weeks", "Continue vancomycin only", "Add oral amoxicillin", "Stop antibiotics at 2 weeks"], 0, "MSSA: nafcillin IV × 6+ weeks; beta-lactams are more effective than vancomycin for MSSA."),
      Q("uses", "How long is IV therapy for staph aureus endocarditis?", ["6 or more weeks", "4 weeks", "10 days", "3 days"], 0, "Staph aureus IE: 6+ weeks of IV therapy."),
      Q("avoid", "Why is nafcillin wrong for MRSA?", ["MRSA is resistant to anti-staphylococcal penicillins", "It is too broad", "It causes ototoxicity", "It is oral only"], 0, "MRSA is resistant; use vancomycin."),
      Q("pearls", "Which is the most common organism in IE among IV drug users?", ["Staph aureus", "Strep viridans", "Enterococcus", "HACEK"], 0, "S. aureus causes about 70% of IE in IVDA.")
    ]),

    Med("med-penicillin-g", "Aqueous penicillin G IV", "4 weeks for most strep endocarditis; with clindamycin for confirmed clostridial gangrene", ["Infective Endocarditis & Pericardial Disease", "Vascular Disease Part 1"], {
      uses: ul(["<strong>Most strep IE</strong> (e.g. viridans, bovis): <strong>aqueous penicillin G IV × 4 weeks</strong>.", "<strong>Confirmed clostridial myonecrosis</strong>: <strong>IV penicillin G + clindamycin</strong>."]),
      moa: "<p>Natural penicillin; cell wall inhibitor with strong activity against strep and Clostridium (standard teaching).</p>",
      avoid: ul(["Penicillin allergy (ceftriaxone or vancomycin alternatives, standard teaching)."]),
      se: ul(["Allergy and anaphylaxis (standard teaching)."]),
      pearls: ul(["Strep IE defervesces in 3–4 days; staph and Pseudomonas can take up to 7 days.", "Strep bovis IE → colonoscopy (colon cancer link)."]) +
        HY("Strep IE → penicillin G × 4 weeks.")
    }, [
      Q("uses", "Cultures grow penicillin-sensitive Strep viridans in native valve IE. Treatment?", ["Aqueous penicillin G IV for 4 weeks", "Nafcillin for 6 weeks", "Vancomycin for 2 weeks", "Oral amoxicillin for 10 days"], 0, "Most strep: aqueous PCN G IV × 4 weeks."),
      Q("uses", "Gas gangrene is confirmed as Clostridium. Narrowed regimen?", ["IV penicillin G plus clindamycin", "Vancomycin alone", "Ceftriaxone alone", "Doxycycline"], 0, "Once confirmed: IV pen G + clindamycin, with surgical debridement."),
      Q("pearls", "How fast should fever break with strep endocarditis on therapy?", ["Within 3-4 days", "Same day", "After 3 weeks", "It never breaks"], 0, "Strep or enterococci defervesce within 3-4 days; staph and Pseudomonas up to 7 days."),
      Q("pearls", "Which IE organism should prompt a colonoscopy?", ["Strep bovis (S. gallolyticus)", "Staph aureus", "Coagulase-negative staph", "Candida"], 0, "Strep bovis bacteremia is tied to colon cancer (standard teaching).")
    ]),

    Med("med-enterococcal-ie", "Enterococcal IE drugs: ampicillin, gentamicin, daptomycin", "Chosen by culture and sensitivity with ID", ["Infective Endocarditis & Pericardial Disease"], {
      uses: ul(["<strong>Enterococcus IE</strong>: <strong>ampicillin, gentamicin and daptomycin IV</strong> may be used depending on culture and sensitivities.", "Infectious Disease should always be involved."]),
      moa: Tbl(["Drug", "Action (standard teaching)"], [
        ["Ampicillin", "Penicillin that covers Enterococcus"],
        ["Gentamicin", "Aminoglycoside; synergy with a cell-wall drug"],
        ["Daptomycin", "Gram-positive only (including resistant enterococci); not for pneumonia (surfactant inactivates it)"]
      ]),
      avoid: ul(["Gentamicin: kidney disease (standard teaching).", "Daptomycin: never for pneumonia (standard teaching)."]),
      se: ul(["Gentamicin: <strong>nephrotoxicity and ototoxicity</strong>; peak and trough levels.", "Daptomycin: myopathy, CK rise (standard teaching)."]),
      pearls: ul(["Cephalosporins do not cover Enterococcus, which is why ceftriaxone alone is not enough."]) +
        HY("Enterococcus IE → ampicillin ± gentamicin (or daptomycin), with ID.")
    }, [
      Q("uses", "Which drugs may treat enterococcal endocarditis per the lecture?", ["Ampicillin, gentamicin and daptomycin", "Nafcillin and rifampin", "Ceftriaxone alone", "Doxycycline and azithromycin"], 0, "Enterococcus: ampicillin, gentamicin and daptomycin IV depending on culture and sensitivity."),
      Q("se", "What two toxicities does gentamicin cause?", ["Nephrotoxicity and ototoxicity", "Lupus and agranulocytosis", "Pulmonary fibrosis and thyroid disease", "Tendon rupture and QT"], 0, "Aminoglycosides cause nephro- and ototoxicity (standard teaching)."),
      Q("avoid", "Why is daptomycin never used for pneumonia?", ["Lung surfactant inactivates it", "It does not reach the blood", "It only covers gram-negatives", "It causes bronchospasm"], 0, "Daptomycin is inactivated by surfactant (standard teaching)."),
      Q("pearls", "Who should always be involved when treating IE?", ["Infectious Disease", "Dermatology", "Rheumatology", "Psychiatry"], 0, "ID should always be involved with these cases.")
    ]),

    Med("med-clindamycin", "Clindamycin", "Protein synthesis inhibitor that suppresses clostridial toxin; an IE prophylaxis option", ["Vascular Disease Part 1", "Infective Endocarditis & Pericardial Disease"], {
      uses: ul([
        "<strong>Gas gangrene</strong>: part of empiric therapy (vanc + Zosyn + clinda), then <strong>penicillin G + clindamycin</strong> once confirmed.",
        "Penicillin-allergic dental prophylaxis was historic; the deck's alternatives are cephalexin, doxycycline or azithromycin."
      ]),
      moa: "<p><strong>Inhibits bacterial protein synthesis</strong>, which <strong>suppresses clostridial toxin production</strong> and may improve survival.</p>",
      avoid: ul(["History of C. difficile (standard teaching)."]),
      se: ul(["<strong>C. difficile colitis</strong> (classic), diarrhea, rash (standard teaching)."]),
      pearls: ul(["Gas gangrene clues: low fever, <strong>tachycardia out of proportion to fever</strong>, <strong>pain out of proportion to exam</strong>, recent surgery or trauma. Mortality 80–90% untreated, 10–25% treated.", "Surgery (debridement) is immediate; antibiotics are added, not instead."]) +
        HY("Clindamycin turns off clostridial toxin.")
    }, [
      Q("moa", "Why is clindamycin added in gas gangrene?", ["It inhibits protein synthesis and suppresses clostridial toxin", "It covers MRSA bacteremia", "It is the only drug that enters muscle", "It treats shock directly"], 0, "Clindamycin inhibits bacterial protein synthesis and helps suppress toxin production."),
      Q("se", "What is clindamycin's classic serious side effect?", ["C. difficile colitis", "Ototoxicity", "QT prolongation", "Tendon rupture"], 0, "Clindamycin is classically linked to C. diff (standard teaching)."),
      Q("pearls", "Tachycardia out of proportion to fever and pain out of proportion to exam after surgery. Concern?", ["Clostridial myonecrosis (gas gangrene)", "Dry gangrene", "Superficial thrombophlebitis", "Venous stasis ulcer"], 0, "These clues should make you consider clostridial infection."),
      Q("pearls", "What is the most important first step in gas gangrene besides antibiotics?", ["Immediate surgical exploration and debridement", "Observation", "Compression stockings", "Hyperbaric oxygen only"], 0, "Gas gangrene: immediate surgery and debridement plus IV antibiotics.")
    ]),

    Med("med-ie-prophylaxis", "Amoxicillin for IE prophylaxis", "Amoxicillin 2 g PO 1 hour before a dental procedure in the highest-risk patients", ["Infective Endocarditis & Pericardial Disease"], {
      uses: Tbl(["Prophylaxis needed: BOTH", ""], [
        ["<strong>Highest-risk heart</strong>", "<strong>Any prosthetic valve</strong> (incl. TAVR, repair material), <strong>prior IE</strong>, <strong>VAD</strong>, valve disease after <strong>heart transplant</strong>, unrepaired cyanotic CHD, repaired CHD with prosthetic material (first 6 months) or residual defect"],
        ["<strong>High-risk procedure</strong>", "<strong>Dental work that manipulates gingiva or perforates mucosa</strong> (cleaning, extraction, abscess), tonsillectomy/adenoidectomy, bronchoscopy with biopsy, infected skin/MSK surgery"]
      ]),
      moa: "<p>Covers the mouth's viridans strep during the transient bacteremia of the procedure. <strong>Drug of choice: amoxicillin 2 g PO 1 hour before</strong>.</p>",
      avoid: Tbl(["NOT routinely needed", ""], [
        ["Hearts", "Rheumatic heart disease, <strong>MVP</strong>, <strong>bicuspid aortic valve</strong>, HOCM, ASD, pacers/ICDs, stents, CABG"],
        ["Procedures", "<strong>GI or GU procedures</strong>"]
      ]),
      se: ul(["Allergy. Alternatives: <strong>cephalexin, doxycycline or azithromycin</strong>."]),
      pearls: ul(["Based on theory, not trials: no human study proves prophylaxis prevents IE.", "Skin procedures on infected tissue need skin-flora coverage instead."]) +
        HY("High-risk heart + high-risk procedure → amoxicillin 2 g 1 h before.")
    }, [
      Q("uses", "A patient with a bioprosthetic aortic valve is having a tooth extracted. What is given?", ["Amoxicillin 2 g PO 1 hour before", "Nothing", "Vancomycin IV for 6 weeks", "Amoxicillin 500 mg for 10 days after"], 0, "Prosthetic valve + dental procedure: amoxicillin 2 g PO 1 hour before."),
      Q("avoid", "A patient with mitral valve prolapse is having a dental cleaning. Prophylaxis?", ["Not routinely recommended", "Amoxicillin 2 g", "Vancomycin", "Clindamycin"], 0, "MVP, bicuspid aortic valve, HOCM, ASD, rheumatic disease and devices do not routinely need prophylaxis."),
      Q("se", "A penicillin-allergic patient with prior IE needs dental prophylaxis. Which is a listed alternative?", ["Azithromycin, doxycycline or cephalexin", "Nafcillin", "Gentamicin", "Ciprofloxacin"], 0, "Alternatives: cephalexin, doxycycline or azithromycin."),
      Q("avoid", "A patient with a mechanical valve is having a colonoscopy. Prophylaxis?", ["Not routinely recommended for GI or GU procedures", "Amoxicillin 2 g", "IV vancomycin", "Ceftriaxone"], 0, "GI or GU: no routine prophylaxis."),
      Q("uses", "Which patient is in the highest-risk group for IE prophylaxis?", ["History of prior endocarditis", "Bicuspid aortic valve", "Pacemaker", "Repaired ASD 3 years ago with no residual defect"], 0, "Anyone with a history of IE is in the highest-risk group."),
      Q("pearls", "What is the evidence behind IE prophylaxis?", ["Theoretical; no human study proves it prevents IE", "Large randomized trials", "It halves IE rates", "It is proven harmful"], 0, "Prophylaxis is based more on theory than clinical trial data.")
    ])
  ]);
}());
