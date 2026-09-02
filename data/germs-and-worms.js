/* “Germs and Worms” content derived only from "Germs and Worms presentation - Student.pptx". */
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
  function K(title, html, q, answer, distractors, scenario, scenarioAnswer, scenarioDistractors, highYield) {
    return C(title, html, [F(q, answer, distractors, answer + ".")], F(scenario, scenarioAnswer, scenarioDistractors, scenarioAnswer + "."), highYield);
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

  window.GERMS_WORMS_OBJECTIVES = [
    O("01-categories", "1. Categorize the Specific Bacterial Pathogens", [
      K("The four bacterial buckets", Tbl(["Category", "Pathogens discussed"], [
        ["Gram-positive cocci", "Staphylococcus aureus, S. epidermidis, S. saprophyticus; Group A Streptococcus; Streptococcus pneumoniae"],
        ["Gram-negative cocci", "Neisseria meningitidis and N. gonorrhoeae"],
        ["Gram-negative bacilli", "Salmonella, Escherichia coli, Shigella, Vibrio cholerae, Pseudomonas aeruginosa"],
        ["Anaerobic bacilli", "Clostridium perfringens, C. tetani, C. botulinum, C. difficile"]
      ]) + M("Category map", "Staph/Strep = GP cocci · Neisseria = GN cocci · Enteric/Vibrio/Pseudomonas = GN rods · Clostridia = anaerobes"), "Which organisms are gram-negative cocci?", "Neisseria species", ["Staphylococcus species", "Clostridium species", "Salmonella species"], "A culture shows small gram-negative cocci in pairs. Which genus fits the lecture categories?", "Neisseria", ["Staphylococcus", "Salmonella", "Clostridium"], true),
      K("Fast organism sorting", Tbl(["Clue", "Place it here"], [
        ["Purple cocci in staphylococcal or streptococcal groups", "Gram-positive cocci"],
        ["Small cocci in chains or pairs causing meningitis/gonorrhea", "Gram-negative cocci—Neisseria"],
        ["Flagellated/enteric rods or opportunistic Pseudomonas", "Gram-negative bacilli"],
        ["Spore-capable toxin producers growing without oxygen", "Anaerobic Clostridia"]
      ]), "Which bacterial group grows without oxygen and may form durable spores?", "Clostridia", ["Neisseria", "Streptococci", "Salmonella"], "A toxin-mediated illness comes from a spore-forming anaerobe. Which lecture category should lead the differential?", "Clostridial infection", ["Gram-negative coccal infection", "Staphylococcal colonization", "Malaria"], true)
    ]),

    O("02-coagulase", "2. Coagulase-Positive Versus Coagulase-Negative Staphylococci", [
      K("One positive, two negative", Tbl(["Species", "Coagulase"], [
        ["Staphylococcus aureus", "Positive—the only positive Staphylococcus discussed"],
        ["Staphylococcus epidermidis", "Negative"],
        ["Staphylococcus saprophyticus", "Negative"]
      ]) + M("Mnemonic", "AUREUS = the coagulase-positive standout"), "Which Staphylococcus is coagulase positive?", "Staphylococcus aureus", ["S. epidermidis", "S. saprophyticus", "All three"], "A coagulase-negative isolate is recovered from an IV catheter. Which species best fits?", "Staphylococcus epidermidis", ["Staphylococcus aureus", "Streptococcus pneumoniae", "Neisseria meningitidis"], true)
    ]),

    O("03-s-aureus", "3. S. aureus Infections and Colonization", [
      K("Colonization is common", `<p>Staphylococci are carried in the <strong>anterior nares of about 30%</strong> of healthy adults and on the <strong>skin of about 20%</strong>. S. aureus is the most infective of the three staphylococci discussed.</p>${M("Colonization numbers", "Nares 30 · Skin 20")}`, "Where are staphylococci commonly carried?", "Anterior nares and skin", ["Only the bowel", "Only CSF", "Only bone"], "A healthy adult has S. aureus on a nasal swab without illness. What does this represent?", "Colonization", ["Meningitis", "Osteomyelitis", "Gas gangrene"], true),
      K("Skin and device-associated S. aureus", Tbl(["Skin/soft tissue", "Other related syndromes"], [
        ["Purulent cellulitis, impetigo, abscess, folliculitis", "Toxic shock and scalded-skin syndromes"],
        ["Furuncle and carbuncle", "IV-catheter infection"],
        ["Surgical-wound infection within 48 hours", "Hidradenitis suppurativa and mastitis"]
      ]), "Which pathogen is associated with purulent cellulitis, abscesses, and furuncles?", "Staphylococcus aureus", ["S. saprophyticus", "N. gonorrhoeae", "V. cholerae"], "A postoperative wound becomes infected within 48 hours and drains pus. Which lecture pathogen is strongly associated?", "Staphylococcus aureus", ["Plasmodium vivax", "Giardia lamblia", "C. botulinum"], true),
      K("Cardiopulmonary, CNS, musculoskeletal, and GI disease", Tbl(["System", "S. aureus diseases"], [
        ["Cardiopulmonary", "Pneumonia with empyema risk; infective endocarditis"],
        ["CNS", "Meningitis, brain abscess, epidural abscess"],
        ["Musculoskeletal", "Osteomyelitis, septic arthritis, prosthetic-joint infection"],
        ["GI", "Enterotoxin B food poisoning"]
      ]) + `<p>Obtain cultures before starting or changing antibiotics when possible. Selection depends on infection site, illness severity, and organism sensitivity.</p>`, "Which musculoskeletal infections are linked to S. aureus?", "Osteomyelitis, septic arthritis, and prosthetic-joint infection", ["Only tendinitis", "Only gout", "Only bursitis"], "A patient has pneumonia complicated by empyema plus bacteremia and endocarditis. Which pathogen can connect the findings?", "Staphylococcus aureus", ["S. saprophyticus", "E. histolytica", "Enterobius"], true)
    ]),

    O("04-mrsa", "4. MRSA Colonization, Procedure Risk, and Oral Treatment", [
      K("MRSA colonization predicts procedural infection risk", `<p>Methicillin-resistant S. aureus was first described in 1961. About <strong>7% of the US population</strong> is colonized. Colonization raises the risk of staphylococcal infection after invasive medical or surgical procedures; hospitals may screen with a nasal swab.</p>`, "What does MRSA colonization increase after invasive procedures?", "Risk of a staphylococcal infection", ["Risk of malaria", "Risk of cholera", "Risk of pinworm"], "A nasal screen before surgery detects MRSA without symptoms. Why does this matter?", "Colonization raises postoperative or procedure-related infection risk", ["It proves active meningitis", "It requires malaria prophylaxis", "It predicts Giardia"], true),
      K("MRSA treatment by severity", Tbl(["Severity", "Options discussed"], [
        ["Mild–moderate oral", "TMP-SMX, clindamycin, doxycycline, or minocycline"],
        ["Moderate–severe parenteral", "Vancomycin; linezolid/tedizolid, daptomycin, or others"],
        ["Abscess", "Incision and drainage when present"]
      ]) + M("Oral four", "TMP-SMX · Clinda · Doxy · Mino"), "Which is an oral MRSA option from the lecture?", "TMP-SMX", ["Penicillin VK", "Metronidazole", "Ceftriaxone alone"], "A stable patient has a mild MRSA skin infection plus a drainable abscess. What management fits?", "Oral MRSA therapy plus incision and drainage", ["Antibiotics without drainage", "Malaria prophylaxis", "Tetanus immune globulin only"], true)
    ]),

    O("05-other-staph", "5. S. epidermidis and S. saprophyticus", [
      K("Match the coagulase-negative staphylococcus", Tbl(["Organism", "Common infection"], [
        ["Staphylococcus epidermidis", "IV-catheter infection"],
        ["Staphylococcus saprophyticus", "UTI in women"]
      ]) + M("Name cue", "EPIdermidis = equipment through skin · SaproPHYTICUS = female urinary infection"), "Which species commonly causes IV-catheter infection?", "Staphylococcus epidermidis", ["S. saprophyticus", "S. aureus only", "S. pyogenes"], "A woman has a UTI caused by a coagulase-negative Staphylococcus. Which species fits?", "Staphylococcus saprophyticus", ["S. epidermidis", "S. aureus", "S. pneumoniae"], true)
    ]),

    O("06-gas", "6. Group A Streptococcus, Pharyngitis, and Rheumatic Fever", [
      K("Three names, two major associations", `<p><strong>Group A Streptococcus (GAS)</strong> is also called <strong>Streptococcus pyogenes</strong> or <strong>Group A beta-hemolytic Streptococcus</strong>. It is the most common cause of bacterial pharyngitis in pediatrics (‘strep throat’) and is associated with rheumatic fever.</p>${M("GAS identity", "GAS = S. pyogenes = Group A beta-hemolytic strep")}`, "What organism is another name for Group A Streptococcus?", "Streptococcus pyogenes", ["S. pneumoniae", "S. epidermidis", "S. saprophyticus"], "A child has bacterial pharyngitis and later develops rheumatic fever. Which organism links them?", "Group A Streptococcus", ["Neisseria meningitidis", "Vibrio cholerae", "Pseudomonas"], true)
    ]),

    O("07-strep-treatment", "7. Strep-Throat Treatment and Penicillin Allergy", [
      K("Penicillin first; allergy pathway second", Tbl(["Situation", "Treatment discussed"], [
        ["First choice", "Penicillin; oral penicillin VK"],
        ["Acceptable alternative", "Amoxicillin"],
        ["Single-dose IM option", "Benzathine penicillin"],
        ["Penicillin contraindicated", "Erythromycin or clindamycin preferred"],
        ["Mild allergy", "A cephalosporin may be considered"]
      ]), "What is the drug of choice for strep throat?", "Penicillin", ["Metronidazole", "Doxycycline", "Primaquine"], "A patient with a true penicillin contraindication has GAS pharyngitis. Which treatment is preferred in the lecture?", "Erythromycin or clindamycin", ["Penicillin VK", "Tetanus vaccine", "Albendazole"], true)
    ]),

    O("08-pneumococcus", "8. Streptococcus pneumoniae: Diseases, Gram Stain, Risk, and Prevention", [
      K("Encapsulated gram-positive diplococci", Tbl(["Identity", "Diseases"], [
        ["Gram-positive encapsulated diplococci", "Most common cause of bacterial pneumonia"],
        ["Respiratory-tract colonizer", "Otitis media in 50% of infants/children"],
        ["Up to half colonized in winter/early spring", "Paranasal sinus infection"]
      ]), "How does S. pneumoniae appear on Gram stain?", "Gram-positive encapsulated diplococci", ["Gram-negative bacilli", "Gram-negative cocci in chains", "Anaerobic spore-forming rods"], "A child has otitis media and an adult contact has classic bacterial pneumonia. Which shared pathogen is common?", "Streptococcus pneumoniae", ["S. saprophyticus", "C. tetani", "Giardia"], true),
      K("Pneumococcal risk and vaccine prevention", Tbl(["Risk factors", "Prevention"], [
        ["Influenza, alcoholism, smoking", "Pneumococcal vaccines in adults"],
        ["COPD or asthma", "Routine childhood vaccination"],
        ["Splenectomy/impaired spleen, immunocompromise", "Herd immunity"]
      ]) + `<p>Splenic dysfunction raises risk for all encapsulated organisms, including pneumococcus.</p>`, "Which anatomy-related risk strongly predisposes to pneumococcal infection?", "Absent or impaired spleen", ["Appendectomy", "Intact spleen", "Myopia"], "An asplenic smoker with COPD recently had influenza. Which vaccine-preventable pathogen is especially concerning?", "Streptococcus pneumoniae", ["Enterobius", "Giardia", "E. histolytica"], true)
    ]),

    O("09-meningococcus", "9. Neisseria meningitidis: Presentation, Antibiotic, and Prevention", [
      K("Meningococcal meningitis recognition", `<p>N. meningitidis causes meningitis, bacteremia, and other severe infection in children and adults, with high mortality if untreated.</p>${Tbl(["Presentation", "Rash"], [["Sudden fever, headache, neck stiffness", "Nonblanching petechiae or purpura"]])}${M("Red flag", "Meningitis symptoms + nonblanching rash = meningococcus")}`, "What rash suggests meningococcal disease?", "Nonblanching petechiae or purpura", ["Rice-water stool", "Ground itch", "Rose-colored typhoid papules only"], "A patient has sudden fever, headache, neck stiffness, and a nonblanching purpuric rash. What is most likely?", "Meningococcal meningitis", ["Giardiasis", "Botulism", "Pinworm"], true),
      K("Treat immediately and vaccinate", Tbl(["Domain", "Lecture detail"], [
        ["Treatment", "Start antibiotics as soon as possible with supportive care"],
        ["Preferred class", "Third-generation cephalosporin, such as cefotaxime or ceftriaxone"],
        ["Prevention", "Vaccine at age 11–12 with booster at age 16"]
      ]), "Which antibiotic class is preferred for N. meningitidis?", "A third-generation cephalosporin", ["A benzimidazole", "An antimalarial", "An antitoxin only"], "A teenager with suspected meningococcal meningitis is unstable. What should happen?", "Immediate ceftriaxone or cefotaxime plus supportive care", ["Wait for a stool O&P", "Use watchful waiting", "Give albendazole"], true)
    ]),

    O("10-gonorrhea", "10. Gonorrhea Pathogen and Lecture Treatment", [
      K("Gonococcus and dual coverage", `<p><strong>Neisseria gonorrhoeae</strong> is the gonococcus that causes gonorrhea. The lecture regimen is <strong>ceftriaxone 250 mg IM once plus azithromycin 1 g PO once</strong>.</p>`, "Which pathogen causes gonorrhea?", "Neisseria gonorrhoeae", ["N. meningitidis", "S. pneumoniae", "S. pyogenes"], "Using the lecture’s regimen, what treatment is selected for gonorrhea?", "Ceftriaxone IM once plus azithromycin PO once", ["Penicillin VK alone", "Metronidazole alone", "Albendazole once"], true)
    ]),

    O("11-acute-diarrhea", "11. Supportive Acute-Diarrhea Management and Antibiotic Use", [
      K("Most acute diarrhea resolves within one week", Tbl(["Support", "Details"], [
        ["Fluids", "Maintain hydration"],
        ["Bland diet", "Clear liquids → soft solids; BRAT = bananas, rice, applesauce, toast; fatty meals/dairy return last"],
        ["Rest", "Reduce physiologic burden"],
        ["Watchful waiting", "Expect improvement within 7 days; recheck if worsening or not improving"]
      ]) + M("Supportive four", "Fluids · Bland diet · Rest · Watchful waiting"), "What is first-line management for most acute diarrhea?", "Supportive care", ["Immediate antibiotics for everyone", "Surgery", "Antitoxin"], "A stable patient has two days of uncomplicated watery diarrhea. What approach fits?", "Fluids, bland diet, rest, and watchful waiting", ["Immediate broad antibiotics", "Three stool O&P tests before hydration", "Tetanus immune globulin"], true),
      K("Reserve antibiotics for severe-risk bacterial illness", `<p>Antibiotics are generally reserved for presumed or diagnosed bacterial diarrhea that is <strong>severe</strong> or carries a <strong>risk of severe illness</strong>. The lecture’s general empiric classes are a fluoroquinolone such as ciprofloxacin or a macrolide such as azithromycin.</p>`, "When are antibiotics generally used for acute diarrhea?", "Severe bacterial illness or risk of severe illness", ["Every mild self-limited case", "Any loose stool", "Never"], "A high-risk patient has severe presumed bacterial diarrhea. Which general lecture options may be considered?", "Ciprofloxacin or azithromycin", ["Tetanus vaccine", "Pyrantel only", "No hydration"], true)
    ]),

    O("12-stool-testing", "12. Stool-Testing Indications, Culture, and Ova & Parasites", [
      K("When stool testing is warranted", Tbl(["Test when", "Examples"], [
        ["Severe/volume-depleting", "Hospitalized hypovolemia, >6 unformed stools/day, severe pain, fever >102°F"],
        ["Inflammatory", "Blood or mucus"],
        ["High-risk host", "Immunocompromised or pregnant"],
        ["Persistent", "Symptoms >1 week"],
        ["Public-health concern", "Food handler, healthcare worker, daycare employee"],
        ["Recent antibiotic/hospitalization", "Within 3 months—test only for C. difficile"]
      ]), "Which diarrhea patient clearly warrants stool testing?", "A patient with bloody diarrhea and fever above 102°F", ["A stable patient with one loose stool", "An asymptomatic patient", "A patient improving normally"], "A patient has diarrhea after antibiotics and hospitalization two months ago. Which stool target is specified?", "C. difficile", ["Routine O&P only", "Malaria smear", "Toxoplasma PCR"], true),
      K("Culture versus O&P", Tbl(["Study", "What it does"], [
        ["Stool culture", "Continuously excreted bacteria; repeat rarely needed; C&S provides susceptibility; routinely Salmonella, Shigella, Campylobacter"],
        ["PCR", "Molecular detection but no antibiotic-sensitivity result"],
        ["Specified additions", "Bloody—E. coli/Shiga toxin; recent antibiotics—C. difficile; travel—Vibrio/others"],
        ["Stool O&P", "Protozoan/helminth ova and parasites shed intermittently; submit 3–6 specimens to reduce false negatives"]
      ]) + M("Collection rule", "Bacteria continuous—usually one culture · Parasites intermittent—3 to 6 O&P samples"), "Why are multiple stool O&P specimens recommended?", "Parasites are shed intermittently", ["Bacteria are never shed", "PCR requires six samples", "Sensitivity testing is impossible"], "A single O&P is negative but parasitic infection remains likely. What next?", "Collect serial specimens, totaling 3–6", ["Rule out parasites permanently", "Order only a bacterial culture", "Start tetanus vaccine"], true)
    ]),

    O("13-typhoid", "13. Typhoid Fever: Pathogens, Presentation, Drug of Choice, and Prevention", [
      K("Typhoid versus nontyphoidal Salmonella", Tbl(["Syndrome", "Species"], [
        ["Typhoid/enteric fever", "Salmonella typhi and S. paratyphi"],
        ["Nontyphoidal gastroenteritis", "S. enteritidis, S. typhimurium, S. Newport"]
      ]), "Which species cause enteric fever?", "S. typhi and S. paratyphi", ["S. enteritidis only", "S. Newport only", "S. typhimurium only"], "A stool isolate is S. enteritidis after undercooked eggs. Which category is it?", "Nontyphoidal Salmonella", ["Typhoid fever organism", "Shigella", "Vibrio"], true),
      K("Enteric fever recognition and treatment", Tbl(["Feature", "Typhoid fever"], [
        ["Fever", "May remain 103–104°F for 2–3 weeks"],
        ["Other findings", "Abdominal pain and rose-colored papular rash"],
        ["Shedding", "Feces of asymptomatic carriers; stool or urine in active disease"],
        ["Diagnosis", "Isolation in culture, usually stool or urine"],
        ["Drug of choice", "Ceftriaxone"]
      ]), "What is the drug of choice for typhoid fever?", "Ceftriaxone", ["Albendazole", "Metronidazole", "Pyrantel"], "A traveler has three weeks of 104°F fever, abdominal pain, and rose spots. Which diagnosis and drug fit?", "Typhoid fever—ceftriaxone", ["Cholera—rehydration only", "Giardiasis—tinidazole", "Pinworm—albendazole twice"], true),
      K("Typhoid prevention", Tbl(["Measure", "Detail"], [
        ["Infrastructure", "Clean drinking water and proper sewage disposal"],
        ["Live oral vaccine", "About 70% effective; booster every 5 years"],
        ["Inactive injectable vaccine", "About 50–70% effective; booster every 2 years"],
        ["US use", "Typically considered as a traveler immunization"]
      ]), "Which public-health measures reduce typhoid?", "Clean water and sewage disposal", ["Mosquito nets only", "Avoiding honey", "Washing bedding only"], "A US traveler asks about typhoid prevention. Which options are described?", "Traveler vaccination plus safe water and sanitation", ["No vaccine exists", "Only antitoxin", "Only respiratory isolation"], true)
    ]),

    O("14-nontyphoidal-salmonella", "14. Nontyphoidal Salmonella: Foods, Presentation, Treatment, and Prevention", [
      K("Eggs, poultry, dairy, and mayonnaise", `<p>Nontyphoidal salmonellae include S. enteritidis, S. Newport, and S. typhimurium. Sources include contaminated <strong>poultry, eggs, milk, and mayonnaise made with raw eggs</strong>. S. enteritidis can be inside a normal-looking egg.</p>${M("Food cluster", "Poultry · Eggs · Milk · Raw-egg mayo")}`, "Which food is commonly implicated in US nontyphoidal Salmonella outbreaks?", "Eggs", ["Honey", "Canned food only", "Cold mountain water"], "Several people develop gastroenteritis after raw-egg mayonnaise. Which pathogen group fits?", "Nontyphoidal Salmonella", ["C. botulinum", "Giardia", "Plasmodium"], true),
      K("Self-limited watery gastroenteritis", Tbl(["Domain", "Pattern"], [
        ["Onset", "12–48 hours after ingestion"],
        ["Symptoms", "Nausea and crampy pain, then watery diarrhea, fever, sometimes vomiting; rarely mucus/blood; ‘pea soup’"],
        ["Course", "Fever resolves within 72 hours; diarrhea in 4–10 days"],
        ["Treatment", "Usually fluids, bland diet, rest, watchful waiting; antibiotics only severe/high risk"],
        ["Antibiotic options", "Ciprofloxacin/levofloxacin, azithromycin, TMP-SMX, cefixime"],
        ["Prevention", "Store food at 4°C, wash hands/surfaces, pasteurized milk, proper cooking"]
      ]), "What is the usual nontyphoidal Salmonella treatment?", "Supportive care", ["Mandatory antibiotics for all", "Antitoxin", "Surgery"], "A healthy adult has improving watery ‘pea-soup’ diarrhea after undercooked eggs. What is appropriate?", "Supportive care and food-safety counseling", ["Routine antibiotics regardless of severity", "Tetanus immune globulin", "Malaria prophylaxis"], true)
    ]),

    O("15-e-coli", "15. E. coli Sources, STEC, HUS, and Treatment", [
      K("E. coli exposure sources", Tbl(["Source", "Examples"], [
        ["Food", "Meat, unpasteurized milk, fruits, vegetables"],
        ["People", "Household contact or caring for an infected person"],
        ["Animals", "Petting zoos and animal exhibits"]
      ]), "Which setting can transmit pathogenic E. coli?", "A petting zoo", ["Only mosquito exposure", "Only canned foods", "Only soil penetration"], "A child develops diarrhea after unpasteurized milk and a petting zoo. Which organism source pattern fits?", "E. coli", ["Plasmodium", "Enterobius", "C. tetani"], true),
      K("STEC, O157:H7, and pediatric HUS", Tbl(["Pattern", "Clinical meaning"], [
        ["Mild AGE", "Cramps, nausea/vomiting, watery diarrhea; self-limited within 7 days"],
        ["Shiga toxin", "Intestinal inflammation and injury → pain, vomiting, bloody diarrhea"],
        ["STEC", "Shiga toxin–producing E. coli"],
        ["O157:H7", "Particularly virulent strain"],
        ["HUS", "Major complication and leading cause of acute kidney failure in pediatrics"]
      ]) + M("Danger chain", "STEC → bloody diarrhea → HUS → pediatric AKI"), "Which E. coli strain is particularly virulent?", "O157:H7", ["S. typhi", "S. Newport", "N. meningitidis"], "A child has bloody diarrhea after contaminated food and develops acute kidney failure. What complication is likely?", "Hemolytic uremic syndrome from STEC", ["Rheumatic fever", "Tetanus", "Botulism"], true),
      K("Treat most E. coli supportively; avoid antibiotics in pediatric STEC", Tbl(["Situation", "Approach"], [
        ["Most diarrheal illness", "Fluids, bland diet, rest, watchful waiting; antiemetic may help"],
        ["Unable to maintain oral intake", "IV rehydration may be needed"],
        ["Severe/bloody/persistent non-STEC pattern", "Azithromycin or fluoroquinolone may be used"],
        ["STEC, especially pediatrics", "Try to avoid antibiotics because they may precipitate HUS"]
      ]), "Why are antibiotics avoided in pediatric STEC?", "They may precipitate HUS", ["They cause tetanus", "They transmit Giardia", "They prevent kidney injury"], "A child has suspected O157:H7 bloody diarrhea. What is the safest lecture approach?", "Supportive rehydration while avoiding antibiotics", ["Immediate ciprofloxacin", "Immediate azithromycin", "Tetanus antitoxin"], true)
    ]),

    O("16-shigella", "16. Shigella Bacillary Dysentery: Features and Treatment", [
      K("Shigella invades the lower intestinal mucosa", `<p><strong>Shigella species</strong> cause shigellosis or <strong>bacillary dysentery</strong>. Spread is fecal–oral, through contaminated food/objects, or mechanically by flies. Mucosal penetration causes mucus, leukocyte infiltration, edema, and superficial ulceration.</p>${Tbl(["Presentation", "Course"], [["High fever, cramps, tenesmus, mucoid and sometimes bloody diarrhea", "Usually resolves within 7 days; severe disease may require hospitalization, especially in young children/older adults"]])}`, "Which species cause bacillary dysentery?", "Shigella species", ["Salmonella typhi", "Vibrio cholerae", "C. botulinum"], "A child has high fever, tenesmus, and mucoid bloody diarrhea. Which pathogen fits?", "Shigella", ["Giardia", "Enterobius", "Pseudomonas"], true),
      K("Culture with susceptibility guides Shigella therapy", `<p>Obtain a <strong>stool culture with antibiotic-susceptibility testing</strong>. Resistance is increasing. Treat patients with or at risk for severe/prolonged disease; empiric choices include a <strong>fluoroquinolone, azithromycin, or a third-generation cephalosporin</strong>.</p>`, "Why is susceptibility testing important in Shigella?", "Antimicrobial resistance is increasing", ["The organism is always susceptible", "Culture cannot grow it", "Only O&P detects it"], "An older patient has severe prolonged shigellosis. Which empiric options fit while awaiting sensitivities?", "Fluoroquinolone, azithromycin, or a third-generation cephalosporin", ["Albendazole only", "Tetanus vaccine", "Antitoxin only"], true)
    ]),

    O("17-cholera", "17. Vibrio cholerae, Seafood, Clinical Features, and Treatment", [
      K("Cholera exposure and rice-water recognition", Tbl(["Domain", "Lecture point"], [
        ["Pathogen", "Vibrio cholerae"],
        ["Transmission", "Ingesting water, seafood, or food contaminated by human excrement"],
        ["Presentation", "Abrupt painless watery diarrhea and vomiting; characteristic rice-water stool"],
        ["Consequence", "Sodium, chloride, bicarbonate, and potassium loss → cramps, severe hypovolemia and shock"]
      ]), "Which pathogen causes cholera?", "Vibrio cholerae", ["Shigella", "E. coli O157:H7", "S. typhi"], "A patient develops abrupt painless rice-water diarrhea after contaminated seafood. What is the diagnosis?", "Cholera", ["Amebic dysentery", "Giardiasis", "Botulism"], true),
      K("Rehydration is the cholera priority", `<p><strong>Rapid rehydration</strong> corrects hypovolemia and metabolic acidosis and prevents hypokalemia. Base antibiotics on local susceptibility; lecture single-dose options are <strong>ciprofloxacin, doxycycline, or azithromycin</strong>.</p>${M("Order of operations", "Volume first · Electrolytes next · Susceptibility-guided single-dose antibiotic")}`, "What is the most important cholera treatment?", "Rehydration", ["Antitoxin alone", "Stool O&P alone", "Surgery"], "A cholera patient is hypotensive with cramps and metabolic acidosis. What is the immediate priority?", "Rapid fluid and electrolyte replacement", ["Wait for culture without fluids", "Give pyrantel", "Use watchful waiting only"], true)
    ]),

    O("18-pseudomonas", "18. Pseudomonas aeruginosa as an Opportunistic Nosocomial Pathogen", [
      K("A hospital opportunist", `<p><strong>Pseudomonas aeruginosa</strong> frequently causes hospital-acquired infection in debilitated or immunocompromised patients. It is common in ICUs and is a frequent cause of ventilator-associated pneumonia.</p>`, "What kind of pathogen is P. aeruginosa?", "An opportunistic pathogen", ["An obligate helminth", "A gram-positive coccus", "A protozoan"], "An immunocompromised ICU patient with a ventilator develops pneumonia. Which lecture pathogen is frequent?", "Pseudomonas aeruginosa", ["Enterobius", "Giardia", "S. saprophyticus"], true),
      K("Sites and bloodstream-risk settings", Tbl(["Clinical association", "Pseudomonas clue"], [
        ["Pulmonary", "Endotracheal intubation or tracheostomy; VAP"],
        ["Urinary", "Common cause of UTI"],
        ["Blood isolates", "Common with burns or underlying malignancy"],
        ["Other sites", "Skin/subcutaneous tissue, bone, ears, eyes, heart valves"]
      ]), "Which patients commonly have Pseudomonas blood isolates?", "Patients with burns or malignancy", ["Only healthy adults", "Only children with pinworm", "Only pregnant patients"], "A burn patient develops bacteremia with a gram-negative bacillus. Which opportunist is especially associated?", "Pseudomonas aeruginosa", ["S. pneumoniae", "C. tetani", "E. histolytica"], true)
    ]),

    O("19-gas-gangrene", "19. Gas Gangrene: Pathogen and Treatment", [
      K("C. perfringens myonecrosis is a surgical emergency", `<p><strong>Gas gangrene</strong> is rapidly progressive destruction of muscle and soft tissue—<strong>myonecrosis</strong>. Traumatic gas gangrene is most commonly caused by <strong>Clostridium perfringens</strong>. Treatment requires <strong>urgent surgical debridement plus IV antibiotics</strong>.</p>`, "What is the common cause of traumatic gas gangrene?", "Clostridium perfringens", ["C. botulinum", "C. tetani", "C. difficile"], "A traumatic wound develops rapidly progressive myonecrosis. What management is required?", "Urgent debridement and IV antibiotics", ["Watchful waiting", "Oral rehydration only", "Scotch-tape testing"], true)
    ]),

    O("20-tetanus", "20. C. tetani, Tetanus, Neonatal Disease, Pregnancy Vaccination, and Treatment", [
      K("Soil organism, exotoxin, tonic spasms", `<p><strong>C. tetani</strong> is found in soil—especially heavily manured soil—and in animal intestinal tracts/feces. Its exotoxin causes acute intermittent <strong>tonic spasms</strong> of voluntary muscle; jaw spasm produces <strong>lockjaw</strong>.</p>`, "What neuromuscular pattern does tetanus cause?", "Intermittent tonic muscle spasms", ["Flaccid paralysis", "Sensory loss only", "Watery diarrhea only"], "After a contaminated wound, a patient develops painful jaw spasm and generalized rigidity. What is likely?", "Tetanus", ["Botulism", "Giardiasis", "Malaria"], true),
      K("Neonatal tetanus and maternal Tdap", `<p>Neonatal tetanus follows infection of the <strong>umbilical stump</strong> in an infant born to a nonimmune mother. Routine <strong>Tdap during pregnancy</strong> provides passive immunity to the newborn.</p>${M("Protection bridge", "Maternal Tdap → antibodies → passive newborn protection")}`, "What is the usual entry site for neonatal tetanus?", "The umbilical stump", ["The respiratory tract", "A mosquito bite", "The colon"], "Why is Tdap routinely given during pregnancy?", "To provide passive immunity to the newborn", ["To treat active botulism", "To prevent Giardia", "To eradicate pinworm"], true),
      K("Five-part tetanus treatment", Tbl(["Priority", "Intervention"], [
        ["Airway", "Stabilize"],
        ["Toxin", "Tetanus immune globulin neutralizes unbound toxin"],
        ["Immunity", "Give tetanus vaccine"],
        ["Spasm", "Benzodiazepines reduce muscle excitability"],
        ["Organism", "Metronidazole"]
      ]) + M("Tetanus bundle", "Airway · TIG · Vaccine · Benzodiazepine · Metronidazole"), "Which product neutralizes unbound tetanus toxin?", "Tetanus immune globulin", ["Tdap alone", "Botulism antitoxin", "Primaquine"], "A patient has clinical tetanus with severe spasms. Which bundle fits?", "Airway support, TIG, vaccine, benzodiazepines, and metronidazole", ["Vaccine alone", "Fluids and BRAT only", "Albendazole once"], true)
    ]),

    O("21-botulism", "21. C. botulinum, Canned Foods, Neurotoxin, Infant Disease, and Prevention", [
      K("Food-borne botulism is intoxication", `<p>C. botulinum occurs in soil, lake/pond sediment, and decaying vegetation. Food-borne botulism is ingestion of preformed toxin—especially in <strong>canned food</strong>—rather than infection. The neurotoxin targets the peripheral nervous system and causes <strong>weakness/flaccid paralysis</strong> with possible respiratory failure.</p>${M("Opposite tones", "Tetanus = tight/tonic · Botulism = floppy/flaccid")}`, "What paralysis pattern does botulinum toxin cause?", "Flaccid paralysis", ["Tonic spasms", "Tenesmus", "Septic arthritis"], "A person eats improperly canned food and develops descending weakness with respiratory failure. What fits?", "Food-borne botulism intoxication", ["Tetanus", "Cholera", "Malaria"], true),
      K("Infant botulism: bowel colonization before competing flora", `<p>Infant botulism occurs at <strong>5–20 weeks</strong>. Unlike adult food-borne intoxication, this is both <strong>infection and intoxication</strong>: C. botulinum establishes itself in the infant bowel before competing intestinal flora develop. <strong>No honey before age 1 year.</strong></p>`, "Why are young infants susceptible to intestinal C. botulinum colonization?", "They have not established competing intestinal bacteria", ["They have excessive adult flora", "They lack red blood cells", "They are colonized by malaria"], "A caregiver asks whether a 6-month-old may eat honey. What should you say?", "No—avoid honey until after 12 months", ["Yes, if refrigerated", "Yes, if mixed with milk", "Only during diarrhea"], true),
      K("Respiratory support, antitoxin, and safe canning", Tbl(["Treatment", "Prevention"], [
        ["Stabilize respiratory impairment", "Correct food handling, canning, and preparation"],
        ["Trivalent A/B/E antitoxin via CDC and state health department", "Do not eat bulging food containers"],
        ["", "No honey for infants under 12 months"]
      ]), "How is botulism antitoxin obtained according to the lecture?", "Through CDC via the state health department", ["Over the counter", "From a stool O&P lab", "From a vaccine clinic only"], "A patient has food-borne botulism and respiratory weakness. What should be prioritized?", "Respiratory stabilization and trivalent antitoxin", ["Tetanus vaccine alone", "Watchful waiting", "Fluoroquinolone only"], true)
    ]),

    O("22-c-difficile", "22. Recent Antibiotic Use and C. difficile", [
      K("Broad antibiotics disrupt protective colonic flora", `<p><strong>Clostridioides difficile</strong> accounts for 15–20% of antibiotic-related diarrhea and nearly all pseudomembranous colitis. The precipitating event is disruption of normal colonic microflora, usually by <strong>broad-spectrum antibiotics</strong>.</p>`, "What commonly precipitates C. difficile colitis?", "Broad-spectrum antibiotic disruption of colonic flora", ["A mosquito bite", "Raw honey", "Skin penetration by larvae"], "A patient develops diarrhea after recent broad-spectrum antibiotics. Which pathogen should be tested?", "C. difficile", ["Plasmodium", "Enterobius", "N. meningitidis"], true)
    ]),

    O("23-malaria", "23. Plasmodium Species, Malaria, Hypnozoites, and Prevention", [
      K("Four human species target erythrocytes", Tbl(["Species", "Key point"], [
        ["P. falciparum", "Highest mortality"],
        ["P. vivax", "May leave liver hypnozoites"],
        ["P. ovale", "May leave liver hypnozoites"],
        ["P. malariae", "72-hour paroxysm pattern"]
      ]) + `<p>Plasmodium are parasites of <strong>red blood cells/erythrocytes</strong>.</p>${M("Four", "Falciparum · Vivax · Ovale · Malariae")}`, "Which Plasmodium species has the highest mortality?", "P. falciparum", ["P. vivax", "P. ovale", "P. malariae"], "A smear identifies a human malaria parasite attacking erythrocytes. Which four species are in scope?", "P. falciparum, vivax, ovale, and malariae", ["Only falciparum", "T. gondii and Giardia", "Enterobius and Ascaris"], true),
      K("Female Anopheles bites dusk to dawn", `<p>Malaria is transmitted by the <strong>female Anopheles mosquito</strong>, which is active from <strong>dusk to dawn</strong>. The illness is life-threatening but preventable and curable when treated early.</p>`, "Which vector transmits malaria?", "Female Anopheles mosquito", ["Housefly", "Tick", "Flea"], "A traveler wants to avoid the malaria vector’s peak activity. When should outdoor exposure be minimized?", "Dusk to dawn", ["Noon only", "Late morning only", "Vector timing is irrelevant"], true),
      K("Malarial paroxysm: chills, fever, then sweat", Tbl(["Phase", "Pattern"], [
        ["Incubation", "9–30 days"],
        ["First", "Malaise, abrupt chills, fever 102–106°F, rapid/thready pulse, polyuria, headache, nausea"],
        ["Next", "Fever falls with profuse sweating over 2–3 hours"],
        ["Timing", "Every ~48 hours for vivax/falciparum/ovale; every ~72 hours for malariae"],
        ["Severe falciparum", "Organ failure, delirium, impaired consciousness, seizures, coma, death"]
      ]), "Which species has a roughly 72-hour paroxysm?", "P. malariae", ["P. falciparum", "P. vivax", "P. ovale"], "A traveler has cyclic abrupt chills and high fever followed by profuse sweating. What disease pattern fits?", "Malaria paroxysms", ["Botulism", "Pinworm", "Cholera"], true),
      K("Primaquine clears vivax and ovale liver hypnozoites", `<p>Most antimalarials target the erythrocyte stage. Known <strong>P. vivax or P. ovale</strong> infection should also receive <strong>primaquine</strong> to eliminate residual liver hypnozoites, which otherwise can cause relapse up to four years later. Chloroquine is used much less because of P. falciparum resistance.</p>`, "Which drug eliminates liver hypnozoites?", "Primaquine", ["Penicillin VK", "Metronidazole", "Tinidazole"], "A patient with P. vivax improves but remains at risk for relapse. Which drug targets the reservoir?", "Primaquine", ["Ceftriaxone", "Albendazole", "Clindamycin"], true),
      K("Malaria prevention: barriers plus one of four prophylaxis drugs", Tbl(["Nonpharmacologic", "Chemoprophylaxis options"], [
        ["Avoid outdoors dusk–dawn; cover skin; DEET", "Atovaquone-proguanil—fewer adverse effects, more costly"],
        ["Air-conditioned or screened rooms", "Mefloquine—weekly; intense dreams, seizure risk"],
        ["Permethrin-treated bed nets", "Doxycycline—daily; sun sensitivity/GI upset; inexpensive"],
        ["", "Tafenoquine—requires G6PD testing; costly"]
      ]) + M("Drug four", "Atovaquone-proguanil · Mefloquine · Doxycycline · Tafenoquine"), "Which prophylaxis drug requires G6PD testing?", "Tafenoquine", ["Doxycycline", "Mefloquine", "Atovaquone-proguanil"], "A traveler cannot avoid a malaria area. Which complete prevention strategy fits?", "DEET, covered skin, screens/bed net, dusk–dawn avoidance, and appropriate chemoprophylaxis", ["Chemoprophylaxis without bite prevention", "Honey avoidance only", "Tdap only"], true)
    ]),

    O("24-entamoeba", "24. Entamoeba histolytica: Trophozoites, Cysts, and Treatment", [
      K("Trophozoite versus cyst", Tbl(["Form", "Behavior"], [
        ["Trophozoite", "Motile; colonizes large-intestinal lumen/mucosa; can invade tissues; predominates in liquid stool; rapidly dies outside body"],
        ["Cyst", "Forms in colonic lumen, passes in feces, predominates in formed stool"]
      ]) + `<p>Fecal–oral E. histolytica infection is increased with inadequate sanitation. Many patients are asymptomatic chronic cyst passers; dysentery causes frequent semiliquid stool with blood, mucus, and live trophozoites.</p>`, "Which form predominates in liquid stool?", "Trophozoites", ["Cysts", "Hypnozoites", "Oocysts only"], "A formed stool from an asymptomatic chronic carrier is examined. Which E. histolytica form is most likely?", "Cysts", ["Trophozoites", "Plasmodium merozoites", "Pinworm adults"], true),
      K("Amebic dysentery diagnosis and treatment", `<p>Confirm intestinal amebiasis by finding <strong>E. histolytica in stool or tissue</strong>. Because shedding can be missed, obtain <strong>3–6 stool specimens</strong> with concentration methods. <strong>Metronidazole</strong> is the treatment of choice.</p>`, "What is the treatment of choice for E. histolytica?", "Metronidazole", ["Tinidazole is the only answer in the lecture", "Primaquine", "Pyrantel"], "A traveler has blood-and-mucus dysentery with trophozoites. Which drug is chosen?", "Metronidazole", ["Penicillin VK", "Tetanus immune globulin", "Mefloquine"], true)
    ]),

    O("25-giardia", "25. Giardia lamblia: Pathogen, Exposure, Names, Presentation, and Treatment", [
      K("Pear-shaped flagellate in cold mountain water", `<p><strong>Giardia lamblia</strong> is a pear-shaped, flagellated protozoan spread fecal–orally. It is waterborne, resists normal tap-water chlorine, and survives in cold mountain streams. Giardiasis is also called <strong>backpacker’s diarrhea</strong> or <strong>beaver fever</strong>.</p><p><strong>Symptoms:</strong> nausea/vomiting, malaise, flatulence, cramps, diarrhea, steatorrhea, and weight loss.</p>`, "What are two other names for giardiasis?", "Backpacker’s diarrhea and beaver fever", ["Enteric fever and rose fever", "Lockjaw and tetanus", "Bacillary dysentery and shigellosis"], "A backpacker drinks from a cold mountain stream and develops flatulence, steatorrhea, and weight loss. What fits?", "Giardiasis", ["Malaria", "Tetanus", "Cholera"], true),
      K("Serial O&P and tinidazole", Tbl(["Diagnosis", "Treatment"], [
        ["Stool O&P; cysts intermittent in formed/loose stool; trophozoites only in diarrhea", "Tinidazole is the preferred initial drug for symptomatic infection"],
        ["Single stool sensitivity 50–70%; three specimens 85–95%", "Avoid food handling and swimming while transmission risk persists"]
      ]), "What is the preferred initial drug for symptomatic Giardia?", "Tinidazole", ["Metronidazole is listed as preferred here", "Primaquine", "Ceftriaxone"], "One O&P is negative in a classic Giardia case. What should be done?", "Obtain serial stool specimens", ["Exclude Giardia", "Order a meningococcal vaccine", "Give tetanus antitoxin"], true)
    ]),

    O("26-pinworm", "26. Enterobius vermicularis: Life Cycle, Scotch Test, and Household Treatment", [
      K("Pinworm is the most common US helminth", `<p><strong>Enterobius vermicularis</strong> is pinworm, the most common helminth infection in the US. Finger transfer moves ova from perianal skin to clothing, bedding, furniture, rugs, and toys; the next host picks them up, touches the mouth, and swallows them. Adult females migrate to perianal folds at night to deposit eggs, producing hallmark <strong>nocturnal perianal itching</strong>.</p>`, "What is the hallmark pinworm symptom?", "Perianal itching, usually at night", ["Hemoptysis", "Flaccid paralysis", "Rice-water diarrhea"], "A child has intense nighttime perianal itching and household members share bedding. What is likely?", "Pinworm infection", ["Malaria", "Hookworm", "Cholera"], true),
      K("Early-morning Scotch-tape test", `<p>In the early morning, press transparent tape to the perianal skinfolds, place it sticky-side down on a glass slide, and examine microscopically for ova. If needed, repeat on <strong>five successive mornings</strong> to rule out infestation.</p>`, "When should the pinworm tape specimen be collected?", "Early morning", ["After lunch", "Only after antibiotics", "At dusk outdoors"], "A first Scotch-tape test is negative but suspicion remains high. What next?", "Repeat on successive mornings, up to five", ["Rule out pinworm", "Order blood cultures", "Start malaria prophylaxis"], true),
      K("One dose now, repeat in two weeks, treat the household", Tbl(["Drug", "Regimen"], [
        ["Albendazole", "400 mg once; repeat in 2 weeks"],
        ["Mebendazole", "100 mg once; repeat in 2 weeks"],
        ["Pyrantel pamoate", "11 mg/kg, max 1 g once; repeat in 2 weeks; OTC in US"]
      ]) + `<p>Wash all clothing and bedding and <strong>treat the entire household</strong>.</p>${M("Pinworm rule", "Dose today · Repeat in 2 weeks · Treat everyone at home")}`, "How often is pinworm therapy given?", "One dose, repeated in two weeks", ["Daily for one year", "One dose only without repeat", "Every six hours"], "One child is diagnosed with pinworm. Who should receive treatment?", "The entire household", ["Only the symptomatic child", "Only adults", "No one until stool culture"], true)
    ]),

    O("27-ascaris", "27. Ascaris lumbricoides: Life Cycle, Manifestations, and Treatment", [
      K("Large roundworm from contaminated food or water", `<p><strong>Ascaris lumbricoides</strong> is the large roundworm. It is common in Asia, Africa, and South America, particularly in rainy seasons and areas with poor sanitation. Infection follows ingestion of food or water contaminated with eggs. A pig species, A. suum, can also infect humans.</p>`, "What is the common name for Ascaris lumbricoides?", "Large roundworm", ["Pinworm", "Hookworm", "Tapeworm"], "A patient in a poor-sanitation region ingests eggs in contaminated water. Which helminth fits?", "Ascaris lumbricoides", ["Enterobius", "Ancylostoma", "Plasmodium"], true),
      K("Lung migration before intestinal worm burden", Tbl(["Stage", "Manifestation"], [
        ["Larvae migrate through lungs", "Fever, cough, wheezing"],
        ["Adult worms in intestine", "Often asymptomatic; heavy burden causes cramps or obstruction, especially in children"],
        ["Visible worms", "May be vomited or passed in stool"]
      ]) + M("Life path", "Eggs swallowed → larvae through lungs → adults in intestine"), "What symptoms can larval lung migration cause?", "Fever, cough, and wheezing", ["Perianal itching", "Flaccid paralysis", "Neck stiffness"], "A child has a heavy large-roundworm burden and colicky pain. What complication is possible?", "Intestinal obstruction", ["Meningitis", "Empyema", "HUS"], true),
      K("Ascaris uses a single-dose pinworm drug", `<p>Treatment uses <strong>albendazole, mebendazole, or pyrantel pamoate</strong>, as with pinworm—but <strong>only one dose</strong>, with no two-week repeat. Endemic areas may use mass treatment (‘worm holidays’). Prevention is improved sanitation and waste removal.</p>`, "How does Ascaris dosing differ from pinworm dosing?", "Ascaris needs one dose without a two-week repeat", ["Ascaris requires lifelong therapy", "Pinworm never needs repeat", "Ascaris is untreated"], "A patient has uncomplicated Ascaris. Which treatment frequency fits?", "A single dose of albendazole, mebendazole, or pyrantel", ["Repeat every two weeks forever", "Metronidazole for 10 days", "Ceftriaxone IM"], true)
    ]),

    O("28-hookworm", "28. Ancylostoma duodenale: Transmission, Manifestations, Eosinophilia, and Treatment", [
      K("Hookworm needs contaminated soil, survival conditions, and skin contact", Tbl(["Required condition", "Detail"], [
        ["Human feces contaminate soil", "Eggs reach the environment"],
        ["Larvae survive", "Moisture, warmth, and shade; uncommon where rainfall is <40 inches/year"],
        ["Soil contacts skin", "Often bare feet; larvae penetrate skin; occasional oral spread"]
      ]) + `<p><strong>Ancylostoma duodenale</strong> is hookworm, common in tropical/subtropical areas.</p>${M("Transmission three", "Feces in soil · Moist/warm/shady survival · Bare skin contact")}`, "What is the common name for Ancylostoma duodenale?", "Hookworm", ["Pinworm", "Large roundworm", "Malaria parasite"], "A barefoot traveler contacts warm, moist, shaded soil contaminated by human feces. Which infection is possible?", "Hookworm", ["Botulism", "Meningococcus", "Giardia only"], true),
      K("Ground itch and chronic iron-deficiency anemia", Tbl(["Stage", "Manifestation"], [
        ["Skin entry", "Pruritic papulovesicular rash—ground itch"],
        ["Adult intestinal worms", "Colicky epigastric pain, anorexia, flatulence, diarrhea, weight loss"],
        ["Chronic infection", "Iron-deficiency anemia and hypoproteinemia → pallor, dyspnea, weakness, tachycardia, lethargy, impotence, edema"],
        ["Laboratory clue", "Unexplained eosinophilia suggests parasitic infection"]
      ]), "What is hookworm’s major morbidity?", "Iron-deficiency anemia", ["Meningitis", "Flaccid paralysis", "Septic arthritis"], "A barefoot traveler has ground itch, abdominal symptoms, pallor, edema, and unexplained eosinophilia. What fits?", "Hookworm infection", ["Pinworm", "Typhoid", "Botulism"], true),
      K("O&P may lag; correct anemia and eradicate worms", Tbl(["Diagnosis", "Treatment names"], [
        ["Stool O&P; may take up to 38 weeks after skin penetration and is unhelpful before intestinal disease", "Albendazole 400 mg once"],
        ["CBC may show unexplained eosinophilia; occasional endoscopic diagnosis", "Mebendazole twice daily for 3 days, or pyrantel daily for 3 days"],
        ["", "Provide support/correct severe anemia first when needed, but antiparasitic therapy prevents recurrence"]
      ]), "Which drug name is appropriate for hookworm?", "Albendazole", ["Ceftriaxone", "Penicillin VK", "Primaquine"], "A patient has severe hookworm anemia. What complete approach fits?", "Stabilize/correct anemia and give antiparasitic therapy", ["Correct anemia without treating worms", "Antibiotics only", "Watchful waiting indefinitely"], true)
    ])
  ];
})();
