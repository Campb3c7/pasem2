/* Infectious Disease Pharmacology content derived only from "PA antibiotics, antivirals antifungals 2026 - Student Version.pptx". */
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

  window.ID_PHARM_OBJECTIVES = [
    O("01-antimicrobial-use", "1. Prophylactic, Suppressive, Empiric, and Therapeutic Antimicrobial Use", [
      C("Four reasons antimicrobials are used", Tbl(["Use", "Purpose", "Lecture examples"], [
        ["<strong>Prophylactic</strong>", "Prevent infection", "Opportunistic-infection prevention, PrEP, malaria prevention, surgical prophylaxis"],
        ["<strong>Suppressive</strong>", "Chronically control an infection that cannot be eradicated", "Acyclovir preventing recurrent herpes; incurable prosthetic-joint infection"],
        ["<strong>Empiric</strong>", "Cover the most likely pathogens before the organism/susceptibilities are known", "Start broad, then de-escalate as soon as culture data permit"],
        ["<strong>Therapeutic / definitive / targeted</strong>", "Treat after organism and susceptibilities are known", "Use a narrow-spectrum agent while still considering patient and drug factors"]
      ]), [
        F("Which type of antimicrobial use treats a known organism according to susceptibilities?", "Therapeutic/definitive/targeted", ["Empiric", "Prophylactic", "Suppressive"], "Definitive therapy begins after the organism and sensitivities are known."),
        F("Which type of antimicrobial use chronically controls an infection that cannot be eradicated?", "Suppressive", ["Empiric", "Prophylactic", "Surgical"], "Suppressive therapy controls rather than cures an infection.")
      ], F("A patient with an infected prosthetic joint cannot undergo source-control surgery and remains on long-term antibiotics. What type of use is this?", "Suppressive", ["Empiric", "Prophylactic", "Definitive after eradication"], "The infection cannot be eradicated, so long-term therapy is suppressive."), true),
      C("Empiric therapy must become targeted", `<div class="stage-flow">Suspected infection → broad empiric coverage → culture information → narrow targeted therapy</div><ul><li>Empiric therapy covers the most likely pathogens and incorporates age, allergies, history, renal function, cost, and other factors.</li><li>De-escalate according to culture results <strong>as soon as possible</strong>.</li><li>If culture information is unavailable, empiric therapy may continue for up to 72 hours.</li><li>Surgical prophylaxis is usually one dose just before incision, with redosing for prolonged procedures.</li></ul>`, [
        F("What should happen to broad empiric therapy when culture results identify a susceptible organism?", "De-escalate to narrower targeted therapy", ["Add redundant agents", "Continue every broad agent indefinitely", "Stop all therapy regardless of infection"], "Culture data should drive prompt de-escalation."),
        F("What is typical for surgical prophylaxis in most procedures that require it?", "One dose just before incision", ["A month of therapy", "Treatment only after infection", "No timing relationship to incision"], "Most surgeries need one pre-incision dose; prolonged procedures may require redosing.")
      ], F("A septic patient receives broad antibiotics before the organism is known; two days later cultures identify a susceptible isolate. What sequence best describes care?", "Empiric therapy followed by definitive de-escalation", ["Suppressive therapy followed by prophylaxis", "Prophylaxis followed by no review", "Definitive therapy followed by broader empiric therapy"], "Start empirically, then narrow when organism and sensitivity data are available."), true)
    ]),

    O("02-cultures-and-timing", "2. Antibiotics, Culture Yield, and When Treatment Can or Cannot Wait", [
      C("Cultures first—when the patient is stable", `<p><strong>Antibiotics significantly reduce culture yield.</strong> Ideally, obtain high-quality specimens before the first dose.</p>${Tbl(["Specimen principle", "Lecture point"], [
        ["Stable patient needing surgery + long-term antibiotics", "Hold antibiotics until accurate surgical samples are obtained; examples include hardware infection and osteomyelitis"],
        ["Wounds/ulcers", "Deep surgical samples are more reliable than surface cultures"],
        ["Respiratory", "Deep respiratory samples are preferred; mouth flora may contaminate sputum"],
        ["Urine", "Use a midstream specimen; change a catheter before sampling"]
      ])}`, [
        F("What effect do antibiotics have on culture yield?", "They reduce it significantly", ["They always increase it", "They have no effect", "They sterilize only nonsterile sites"], "Pretreatment can prevent recovery of the causative organism."),
        F("In a stable patient with suspected hardware infection requiring surgery and prolonged therapy, what is preferred?", "Hold antibiotics until accurate surgical samples are obtained", ["Start and stop several agents before sampling", "Use only a surface swab", "Never obtain cultures"], "Accurate operative specimens guide long-term therapy.")
      ], F("A hemodynamically stable patient has suspected postoperative hardware infection and is going to the OR for deep cultures. What should happen before surgery?", "Withhold antibiotics until operative specimens are collected", ["Treat for 72 hours before cultures", "Use a superficial swab only", "Avoid cultures entirely"], "Stability permits preserving culture yield before definitive sampling."), true),
      C("Do not delay treatment in high-risk syndromes", `<div class="box-mnemonic"><span class="lbl">Do not wait</span><strong>Sepsis/instability, pneumonia, febrile neutropenia, or meningitis.</strong></div><p>Obtain cultures promptly when possible, but if they cannot be obtained without delaying care, start antibiotics immediately. Culture interpretation still depends on site, organism, host, dose, and source control; an in-vitro S/I/R result does not guarantee the in-vivo outcome.</p>`, [
        F("When should antibiotics never be delayed just to obtain cultures?", "When the patient is septic or unstable", ["Every stable hardware infection", "Only after a surface wound swab", "When no infection is suspected"], "Life-saving treatment takes priority in sepsis or instability."),
        F("Which suspected infections also should not have antibiotics delayed if cultures cannot be obtained promptly?", "Pneumonia, febrile neutropenia, and meningitis", ["Stable onychomycosis only", "A healed wound", "Asymptomatic colonization"], "These syndromes require rapid treatment.")
      ], F("A hypotensive patient has suspected meningitis, but lumbar puncture will be delayed. What is the correct priority?", "Start antibiotics as soon as possible", ["Wait indefinitely for CSF", "Hold all therapy because cultures matter more", "Use suppressive therapy only"], "The deck says not to delay in meningitis or an unstable patient."), true)
    ]),

    O("03-special-coverage", "3. Antimicrobial Coverage of Pseudomonas, MRSA, Enterococcus, and Anaerobes", [
      C("Anaerobe coverage", Tbl(["Coverage group", "Common lecture agents"], [
        ["Beta-lactam combinations", "Ampicillin-sulbactam, amoxicillin-clavulanate, piperacillin-tazobactam"],
        ["Broad classes", "Carbapenems"],
        ["Other", "Clindamycin, metronidazole"],
        ["Only cephalosporins listed", "Cefoxitin and cefotetan"],
        ["Only fluoroquinolone listed", "Moxifloxacin"]
      ]) + `<p>Empiric anaerobe coverage is considered for intra-abdominal infection, diabetic foot infection, gas gangrene/necrotizing SSTI, pneumonia with abscess/empyema/obstruction, dental infection, PID, and tubo-ovarian abscess.</p>`, [
        F("Which cephalosporins cover anaerobes in the lecture?", "Cefoxitin and cefotetan", ["Cefepime and ceftriaxone", "Cefazolin and cephalexin", "Ceftazidime and cefdinir"], "These are the two cephalosporin anaerobe exceptions."),
        F("Which fluoroquinolone covers Bacteroides?", "Moxifloxacin", ["Ciprofloxacin", "Levofloxacin", "None of them"], "Moxifloxacin is the only fluoroquinolone listed with anaerobe coverage.")
      ], F("A patient has an intra-abdominal infection requiring anaerobic coverage. Which option from the lecture supplies that coverage?", "Piperacillin-tazobactam", ["Aztreonam alone", "Cefepime alone", "Vancomycin alone"], "Piperacillin-tazobactam covers anaerobes plus many other organisms."), true),
      C("Pseudomonas coverage", Tbl(["Class", "Agents"], [
        ["Penicillin", "Piperacillin-tazobactam"],
        ["Cephalosporins", "Ceftazidime, cefepime"],
        ["Monobactam", "Aztreonam"],
        ["Carbapenems", "Meropenem, imipenem-cilastatin"],
        ["Fluoroquinolones", "Ciprofloxacin, levofloxacin — the only possible oral options"],
        ["Aminoglycosides", "Tobramycin, amikacin"]
      ]) + `<div class="box-mnemonic"><span class="lbl">Anti-Pseudomonal anchors</span><strong>Pip-tazo · Cefepime/Ceftazidime · Aztreonam · Mero/Imi · Cipro/Levo · Tobra/Amikacin</strong></div>`, [
        F("Which fluoroquinolones cover Pseudomonas?", "Ciprofloxacin and levofloxacin", ["Moxifloxacin only", "Azithromycin and clarithromycin", "Doxycycline and minocycline"], "Cipro and levo are also the only possible oral Pseudomonas options listed."),
        F("Which carbapenems cover Pseudomonas?", "Meropenem and imipenem-cilastatin", ["Ertapenem only", "No carbapenems", "Cefazolin and cefuroxime"], "Ertapenem is the carbapenem exception.")
      ], F("A patient needs an oral anti-Pseudomonal option. Which lecture choice could be considered?", "Ciprofloxacin or levofloxacin", ["Moxifloxacin", "Amoxicillin", "Clindamycin"], "The fluoroquinolones cipro and levo are the only possible PO options listed."), true),
      C("MRSA coverage", Tbl(["Common agents", "Important limits"], [
        ["Clindamycin, TMP-SMX, doxycycline", "Oral options for selected susceptible infections"],
        ["Linezolid", "Gram-positive only; covers MRSA and VRE"],
        ["Vancomycin", "Only IV vancomycin treats systemic MRSA; PO stays in gut"],
        ["Daptomycin", "Gram-positive only; cannot treat pneumonia because surfactant inactivates it"],
        ["Ceftaroline", "First/only cephalosporin in the deck with MRSA coverage"]
      ]) + `<p>Empiric MRSA coverage is commonly considered for purulent cellulitis/abscess, severe diabetic foot infection, postoperative wound infection, and nosocomial pneumonia or meningitis.</p>`, [
        F("Which vancomycin formulation is used for systemic MRSA infection?", "IV vancomycin", ["PO vancomycin", "Topical vancomycin", "Inhaled vancomycin"], "Oral vancomycin is not absorbed and is reserved for C. difficile colitis."),
        F("Which cephalosporin covers MRSA?", "Ceftaroline", ["Cefazolin", "Cefepime", "Cefuroxime"], "Ceftaroline is the first and only cephalosporin identified with MRSA coverage.")
      ], F("A patient has MRSA pneumonia after vancomycin intolerance. Which agent must be avoided because lung surfactant inactivates it?", "Daptomycin", ["Linezolid", "Ceftaroline", "Vancomycin"], "Daptomycin cannot be used for pneumonia."), true),
      C("Enterococcus coverage—and the no-coverage list", Tbl(["Covers Enterococcus", "Lecture qualifier"], [
        ["Penicillin; amoxicillin/amox-clav; ampicillin/amp-sulb; pip-tazo", "Ampicillin/amoxicillin are drugs of choice when susceptible"],
        ["Vancomycin; linezolid", "Linezolid includes VRE"],
        ["Nitrofurantoin", "UTI only"],
        ["Fluoroquinolones", "Last-line; treatment failure can occur despite in-vitro sensitivity"],
        ["Meropenem and imipenem-cilastatin", "E. faecalis only, not E. faecium"],
        ["<strong>No coverage</strong>", "Cephalosporins, ertapenem, aztreonam"]
      ]), [
        F("Which beta-lactam class has no Enterococcus coverage?", "Cephalosporins", ["Penicillins", "Carbapenems as a whole", "Beta-lactamase inhibitor combinations"], "Cephalosporins do not cover Enterococcus."),
        F("Which oral urinary agent covers Enterococcus only at the urinary site?", "Nitrofurantoin", ["Moxifloxacin", "Aztreonam", "Cefepime"], "Nitrofurantoin achieves urine, not systemic, concentrations.")
      ], F("A patient with urosepsis needs empiric therapy that includes Enterococcus. Which option should not be relied upon?", "Cefepime", ["Piperacillin-tazobactam", "Ampicillin-sulbactam", "Vancomycin"], "Cephalosporins, including cefepime, have no Enterococcus coverage."), true)
    ]),

    O("04-regimen-selection", "4. Factors to Consider When Choosing an Antimicrobial Regimen", [
      C("Five selection questions", `<ol><li><strong>Infection:</strong> site, severity, suspected organisms, and whether a bactericidal agent is needed.</li><li><strong>Patient:</strong> allergy and actual reaction, age, renal function, comorbidities, seizure history, fluid restrictions, pregnancy/lactation when relevant.</li><li><strong>No redundancy:</strong> combine different mechanisms/targets and avoid duplicate or excessive coverage.</li><li><strong>Cost:</strong> choose cost-effective therapy.</li><li><strong>Convenience:</strong> use oral therapy as soon as possible; for home infusion, favor infrequent dosing.</li></ol>`, [
        F("Which infection factors should be considered when selecting therapy?", "Site, severity, suspected organisms, and bactericidal need", ["Tablet color only", "Brand name only", "No infection details"], "The infection itself defines the coverage and pharmacologic needs."),
        F("What should be clarified when a patient reports an antibiotic allergy?", "The specific reaction", ["Only the drug price", "Nothing; all beta-lactams are identical", "The patient's favorite dosage form"], "The lecture specifically says to evaluate the allergy and reaction.")
      ], F("An older patient with renal dysfunction, heart failure requiring fluid restriction, seizure history, and several reported allergies needs antibiotics. What is the best approach?", "Evaluate each patient factor plus site, severity, and suspected organisms", ["Choose the broadest drug without review", "Ignore renal function", "Use redundant agents with the same target"], "Regimen choice is both infection-specific and patient-specific."), true),
      C("Route, concentration, and source control", `<ul><li>Many agents achieve the same serum concentration orally as intravenously; transition to PO when clinically able.</li><li>MIC values cannot be compared across two different drugs; use the susceptible/intermediate/resistant interpretation.</li><li>Serum-based susceptibility may not predict urine or CSF exposure.</li><li>Outcome depends on site, immune status, dose, agent, and sometimes <strong>source control</strong>.</li><li>A cultured organism may be a pathogen, colonizer, or contaminant depending on the site and specimen quality.</li></ul>`, [
        F("Can MIC numbers for two different antibiotics be directly compared to choose the lower one?", "No", ["Yes, always", "Only in urine", "Only for fungi"], "MIC varies by drug and organism; use its interpretation."),
        F("Which non-drug intervention may be essential to antimicrobial success?", "Source control", ["Redundant coverage", "Avoiding all cultures", "Ignoring the infection site"], "Some infections require drainage or removal of infected material.")
      ], F("A susceptible report is present, but the drug has poor penetration into the infected site and an abscess remains undrained. Why might therapy fail?", "In-vivo success also depends on site exposure and source control", ["Susceptibility guarantees success", "MIC values are identical for all drugs", "Culture results never matter"], "Treatment is multifactorial, not a lab result alone."), true)
    ]),

    O("05-level-monitoring", "5. Antibiotics Requiring Peak and/or Trough Monitoring", [
      C("Aminoglycosides and vancomycin", Tbl(["Drug", "Monitoring", "Meaning"], [
        ["Gentamicin, tobramycin, amikacin", "Peak + trough", "Peak after the dose reflects efficacy—the higher the better; trough just before a dose reflects toxicity—the lower the better"],
        ["IV vancomycin", "Trough or AUC:MIC", "Underexposure risks failure/resistance; overexposure increases nephrotoxicity; trough can serve as an AUC surrogate"],
        ["Itraconazole", "Trough often needed for prolonged courses", "Bioavailability is inconsistent; this is antifungal monitoring, not an antibiotic peak"]
      ]), [
        F("Which antibiotics require peak and trough monitoring?", "Aminoglycosides", ["Macrolides", "Tetracyclines", "Penicillin VK"], "Gentamicin, tobramycin, and amikacin use peak/trough levels."),
        F("Which IV antibiotic uses trough or AUC:MIC monitoring?", "Vancomycin", ["Azithromycin", "Metronidazole", "Nitrofurantoin"], "Vancomycin exposure must balance efficacy and nephrotoxicity.")
      ], F("A level is drawn immediately before the next gentamicin dose. What does it primarily assess?", "Toxicity via the trough", ["Efficacy via the peak", "Organism identity", "Oral absorption"], "Aminoglycoside troughs are drawn just before dosing and should be low."), true)
    ]),

    O("06-beta-lactam-spectrum", "6. Narrow- and Broad-Spectrum Beta-Lactams", [
      C("Narrow beta-lactam anchors", Tbl(["Group", "Agents", "Coverage anchor"], [
        ["Natural penicillins", "Penicillin G/VK/benzathine", "Streptococci and E. faecalis; syphilis drug of choice"],
        ["Anti-staphylococcal penicillins", "Nafcillin, oxacillin, dicloxacillin", "MSSA + streptococci; no Enterococcus or gram-negatives"],
        ["Aminopenicillins", "Ampicillin, amoxicillin", "Streptococci + Enterococcus + few gram-negatives; no Staphylococcus"],
        ["1st-generation cephalosporins", "Cefazolin, cephalexin, cefadroxil", "MSSA + streptococci + some gram-negatives"],
        ["2nd-generation cephalosporins", "Cefoxitin, cefotetan, cefuroxime, cefaclor, cefprozil", "Slightly broader than first; cefoxitin/cefotetan add anaerobes"]
      ]), [
        F("Which beta-lactams are narrow anti-MSSA penicillins?", "Nafcillin, oxacillin, and dicloxacillin", ["Piperacillin-tazobactam", "Meropenem and imipenem", "Cefepime and ceftazidime"], "These anti-staphylococcal penicillins are narrow and preferred for MSSA."),
        F("Which cephalosporin generations are described as narrow spectrum?", "First and second generations", ["Only fourth generation", "All generations equally broad", "No cephalosporins"], "First and second generations are the narrow anchors in the deck.")
      ], F("A culture confirms uncomplicated MSSA cellulitis. Which narrow beta-lactam is aligned with the lecture?", "Cefazolin or an anti-staphylococcal penicillin", ["Meropenem", "Piperacillin-tazobactam", "Aztreonam"], "Narrow MSSA-active beta-lactams are preferred after confirmation."), true),
      C("Moderate-spectrum beta-lactams", Tbl(["Agents", "Spectrum"], [
        ["Ampicillin-sulbactam / amoxicillin-clavulanate", "Strep + Enterococcus + MSSA + anaerobes + increased gram-negative coverage"],
        ["3rd-generation cephalosporins", "Generally more gram-negative coverage; spectrum varies by agent"],
        ["Ceftriaxone", "Strong S. pneumoniae and Enterobacterales coverage"],
        ["Ceftazidime", "Pseudomonas but minimal MSSA/S. pneumoniae activity"]
      ]) + `<p>Amoxicillin-clavulanate is one of the broadest oral agents in the lecture, despite being moderate relative to broad IV beta-lactams.</p>`, [
        F("What coverage is added by ampicillin-sulbactam or amoxicillin-clavulanate?", "MSSA, anaerobes, and more gram-negatives", ["MRSA and ESBLs", "Only Pseudomonas", "No additional coverage"], "The inhibitor combinations widen aminopenicillin coverage."),
        F("Which third-generation cephalosporin covers Pseudomonas but has weak gram-positive activity?", "Ceftazidime", ["Ceftriaxone", "Cefdinir", "Cefazolin"], "Ceftazidime's limitation makes cefepime a better empiric option in many cases.")
      ], F("An outpatient needs a broad oral mixed-coverage beta-lactam option for a bite wound. Which lecture agent fits?", "Amoxicillin-clavulanate", ["Aztreonam", "Cefepime", "Meropenem"], "Amoxicillin-clavulanate provides mixed gram-positive, gram-negative, and anaerobic coverage."), true),
      C("Broad IV beta-lactams", Tbl(["Agent/class", "Key coverage", "Major gaps"], [
        ["Piperacillin-tazobactam", "MSSA, Strep, many GNRs, Pseudomonas, Enterococcus, anaerobes", "MRSA, ESBL producers"],
        ["Cefepime", "MSSA, Strep, many GNRs, Pseudomonas; CNS penetration", "Enterococcus, anaerobes, MRSA, ESBLs"],
        ["Meropenem / imipenem-cilastatin", "MSSA, Strep, GNRs, Pseudomonas, Enterococcus, anaerobes, ESBLs", "MRSA"],
        ["Ertapenem", "Gram-positive, gram-negative, anaerobe, ESBL coverage", "Pseudomonas, Enterococcus, Acinetobacter, MRSA"]
      ]), [
        F("Which penicillin is broad spectrum and covers Pseudomonas, Enterococcus, and anaerobes?", "Piperacillin-tazobactam", ["Penicillin VK", "Dicloxacillin", "Amoxicillin alone"], "Pip-tazo is the extended-spectrum penicillin combination."),
        F("Which cephalosporin is broad spectrum with Pseudomonas coverage?", "Cefepime", ["Cefazolin", "Cephalexin", "Cefuroxime"], "Cefepime is fourth generation and broad spectrum.")
      ], F("Empiric treatment must cover ESBL-producing gram-negatives, Pseudomonas, Enterococcus, and anaerobes but not MRSA. Which beta-lactam best matches?", "Meropenem", ["Cefepime", "Ertapenem", "Cefazolin"], "Meropenem supplies all listed coverage except MRSA."), true)
    ]),

    O("07-broadest-class", "7. Broadest-Spectrum Antibiotic Class", [
      C("Carbapenems are the broadest class", `<p><strong>Carbapenems are the broadest antibiotic class in the lecture.</strong> Imipenem-cilastatin, meropenem, and ertapenem cover gram-positives, gram-negatives, anaerobes, and ESBL-producing organisms.</p><div class="box-mnemonic"><span class="lbl">Shared hole</span><strong>No carbapenem covers MRSA.</strong></div><p>Meropenem and imipenem add Pseudomonas, Enterococcus, and Acinetobacter; ertapenem does not.</p>`, [
        F("Which antibiotic class is broadest in spectrum?", "Carbapenems", ["Macrolides", "Natural penicillins", "Tetracyclines"], "The lecture explicitly identifies carbapenems as the broadest class."),
        F("Which major organism is not covered by carbapenems?", "MRSA", ["ESBL-producing Enterobacterales", "Anaerobes", "Many gram-negatives"], "An MRSA agent must be added when indicated.")
      ], F("A patient with a nosocomial infection and suspected ESBL pathogen needs broad empiric therapy. Which class is reserved for this type of situation?", "Carbapenems", ["Natural penicillins", "Macrolides", "Nitrofurantoin"], "The lecture reserves carbapenems for nosocomial/MDRO or ESBL concern and complex allergy situations."), true)
    ]),

    O("08-drugs-of-choice", "8. Antimicrobials Considered Drug of Choice for Particular Infections", [
      C("Beta-lactam drugs of choice", Tbl(["Infection/organism", "Drug(s) of choice"], [
        ["Syphilis", "Penicillin"],
        ["MSSA", "Nafcillin, oxacillin, dicloxacillin, or cefazolin"],
        ["Enterococcus", "IV ampicillin for severe infection; PO amoxicillin for nonsevere/step-down"],
        ["Susceptible bacterial infection generally", "A beta-lactam when the organism is susceptible because of potency and tolerability"]
      ]), [
        F("What is the drug of choice for syphilis?", "Penicillin", ["Aztreonam", "Metronidazole", "Nitrofurantoin"], "The natural penicillin slide names syphilis directly."),
        F("Which drugs are preferred for MSSA?", "Anti-staphylococcal penicillins or cefazolin", ["Vancomycin", "Aztreonam", "Metronidazole"], "Beta-lactams are more effective than vancomycin for MSSA.")
      ], F("Blood cultures grow MSSA in a patient receiving vancomycin. Which targeted change follows the lecture?", "Switch to cefazolin, nafcillin, or oxacillin", ["Continue vancomycin because it is always superior", "Switch to oral vancomycin", "Switch to metronidazole"], "Use a preferred MSSA beta-lactam when possible."), true),
      C("Common antibacterial drugs of choice", Tbl(["Condition", "Lecture drug of choice"], [
        ["Uncomplicated cystitis", "TMP-SMX or nitrofurantoin"],
        ["Chlamydia", "Doxycycline; azithromycin 1 g once is second line"],
        ["Severe inpatient MRSA infection", "IV vancomycin"],
        ["C. difficile", "PO vancomycin or fidaxomicin are the specifically indicated oral agents"]
      ]), [
        F("Which two agents are listed as drugs of choice for uncomplicated cystitis?", "TMP-SMX and nitrofurantoin", ["Moxifloxacin and vancomycin", "Cefepime and meropenem", "Clindamycin and rifampin"], "Both are identified as first-line uncomplicated-cystitis options."),
        F("What is the drug of choice for chlamydia?", "Doxycycline", ["Azithromycin", "Vancomycin", "Metronidazole"], "Azithromycin is listed as a second-line single-dose option.")
      ], F("A stable outpatient has uncomplicated cystitis without systemic infection. Which deck-aligned choice is appropriate?", "Nitrofurantoin or TMP-SMX", ["IV meropenem", "Moxifloxacin first line", "Daptomycin"], "The deck identifies both as drugs of choice for uncomplicated cystitis."), true),
      C("Antiviral drugs of choice", Tbl(["Condition", "Preferred lecture therapy"], [
        ["Herpes encephalitis", "IV acyclovir only"],
        ["CMV treatment/prevention", "Ganciclovir IV or valganciclovir PO"],
        ["High-risk outpatient COVID", "Nirmatrelvir-ritonavir"],
        ["Influenza A or B requiring therapy", "Oseltamivir or zanamivir; begin as early as possible"]
      ]), [
        F("Which antiviral is used for herpes encephalitis?", "IV acyclovir", ["Valacyclovir PO", "Oseltamivir", "Nirmatrelvir-ritonavir"], "The lecture uniquely reserves IV acyclovir for herpes encephalitis."),
        F("What is the preferred outpatient COVID option for a high-risk patient?", "Nirmatrelvir-ritonavir", ["Remdesivir PO", "Oseltamivir", "Acyclovir"], "It reduces hospitalization and mortality when started promptly.")
      ], F("An immunocompromised patient has CMV and can take oral therapy. Which agent matches the lecture?", "Valganciclovir", ["Valacyclovir", "Zanamivir", "Baloxavir"], "Valganciclovir is the oral prodrug of ganciclovir for CMV."), true),
      C("Antifungal drugs of choice", Tbl(["Infection", "Drug of choice"], [
        ["Susceptible Candida; Candida esophagitis; severe localized candidiasis", "Fluconazole"],
        ["Cutaneous sporotrichosis; uncomplicated histoplasmosis; blastomycosis; coccidioidomycosis", "Itraconazole"],
        ["Aspergillosis", "Voriconazole"],
        ["Severe disseminated fungal infection", "Amphotericin B for the listed severe mycoses"]
      ]), [
        F("What is the drug of choice for aspergillosis?", "Voriconazole", ["Fluconazole", "Terbinafine", "Fidaxomicin"], "Voriconazole is fungicidal against Aspergillus and preferred for aspergillosis."),
        F("What is the drug of choice for cutaneous sporotrichosis?", "Itraconazole", ["Fluconazole", "Caspofungin", "Acyclovir"], "Itraconazole covers Sporothrix and endemic fungi.")
      ], F("A patient has proven C. albicans candidemia and is stable with a susceptible isolate. Which agent is a drug of choice?", "Fluconazole", ["Terbinafine", "Zanamivir", "Fidaxomicin"], "Fluconazole is preferred for susceptible Candida such as C. albicans."), true)
    ]),

    O("09-only-anaerobes", "9. The Antibiotic That Covers Only Anaerobes", [
      C("Metronidazole: the anaerobe-only antibiotic", `<p><strong>Metronidazole covers only anaerobes and protozoans.</strong> It is used in combination when a bacterial infection needs anaerobic coverage, with PO vancomycin for severe C. difficile, and alone for certain protozoal diseases such as trichomoniasis.</p><p>Key adverse effects/interactions: nausea, metallic taste, peripheral neuropathy, headache, increased INR with warfarin, and the lecture's alcohol/disulfiram precautions.</p>`, [
        F("Which antibiotic covers only anaerobes (plus protozoans)?", "Metronidazole", ["Cefepime", "Aztreonam", "Vancomycin"], "Metronidazole is the narrow anaerobic anchor."),
        F("What happens to INR when metronidazole is combined with warfarin?", "INR increases", ["INR always decreases", "No possible interaction", "Warfarin becomes an antibiotic"], "Metronidazole is one of the major INR-increasing interactions highlighted.")
      ], F("A gram-negative aerobic agent lacks anaerobic coverage for an intra-abdominal infection. Which narrow add-on supplies anaerobe coverage?", "Metronidazole", ["Aztreonam", "Vancomycin", "Cefazolin"], "Metronidazole can be added specifically for anaerobes."), true)
    ]),

    O("10-only-gram-positive", "10. Antibiotics That Cover Only Gram-Positive Organisms", [
      C("Core gram-positive-only agents", Tbl(["Agent", "Coverage/use anchor"], [
        ["Vancomycin", "Strep, Staph including MRSA, Enterococcus; IV for systemic disease, PO only for C. difficile"],
        ["Linezolid", "MRSA and VRE; good lung, urine, and CSF penetration"],
        ["Daptomycin", "MRSA, VRSA, VRE; not pneumonia"],
        ["Telavancin, oritavancin, dalbavancin", "Vancomycin-like agents; gram-positive only"],
        ["Clindamycin", "Only gram-positive organisms and anaerobes—not purely gram-positive only"]
      ]), [
        F("Which common agents are broad-spectrum within gram-positive organisms only?", "Vancomycin and linezolid", ["Aztreonam and metronidazole", "Cefepime and meropenem", "Ciprofloxacin and moxifloxacin"], "Both cover a broad set of gram-positive organisms, including MRSA; linezolid also covers VRE."),
        F("Which gram-positive-only agent cannot treat pneumonia?", "Daptomycin", ["Linezolid", "Vancomycin", "Ceftaroline"], "Lung surfactant inactivates daptomycin.")
      ], F("A patient with VRE bacteremia needs a gram-positive-only agent. Which option has a role?", "Linezolid", ["Aztreonam", "Metronidazole", "Cefepime"], "Linezolid covers VRE and is an option for VRE bacteremia."), true),
      C("Newer gram-positive-only options", `<p><strong>Telavancin, oritavancin, and dalbavancin</strong> are structurally similar to vancomycin and cover only gram-positive organisms. Oritavancin and dalbavancin last 7+ days and are approved as one-time-dose regimens for cellulitis; data for more serious infections is emerging.</p><p>Daptomycin and ceftaroline are considered for severe MRSA when vancomycin fails or is not tolerated, but ceftaroline also covers some enteric gram-negatives, so it is not gram-positive only.</p>`, [
        F("Which long-acting agents can be given as a one-time cellulitis regimen?", "Oritavancin and dalbavancin", ["Gentamicin and tobramycin", "Cefepime and meropenem", "Acyclovir and valacyclovir"], "Both have durations of action exceeding seven days."),
        F("Is ceftaroline gram-positive only?", "No; it also covers enteric gram-negatives", ["Yes; it has no gram-negative activity", "No; it covers only anaerobes", "Yes; and it cannot cover MRSA"], "Ceftaroline is the MRSA cephalosporin but is not restricted to gram positives.")
      ], F("A patient with uncomplicated cellulitis has barriers to daily therapy. Which one-dose, gram-positive-only options are named?", "Oritavancin or dalbavancin", ["Aztreonam or cefepime", "Metronidazole or moxifloxacin", "Amikacin or tobramycin"], "Their prolonged action supports a one-time cellulitis regimen."), true)
    ]),

    O("11-only-gram-negative", "11. The Antibiotic That Covers Only Gram-Negative Organisms", [
      C("Aztreonam: gram-negative only", `<p><strong>Aztreonam</strong>, the IV monobactam, covers only gram-negative organisms, including Pseudomonas.</p><ul><li>Useful for gram-negative coverage in patients with beta-lactam allergy, including reported anaphylaxis.</li><li>Only routine monotherapy use: UTI.</li><li>For other infections, combine with gram-positive coverage and add anaerobic coverage when needed.</li><li>May cause phlebitis and elevated LFTs.</li></ul>`, [
        F("Which antibiotic covers only gram-negatives?", "Aztreonam", ["Vancomycin", "Metronidazole", "Linezolid"], "Aztreonam is the gram-negative-only monobactam."),
        F("Does aztreonam cover Pseudomonas?", "Yes", ["No", "Only when oral", "Only with vancomycin"], "Pseudomonas is included in its gram-negative spectrum.")
      ], F("A patient with reported beta-lactam anaphylaxis needs gram-negative coverage for a UTI. Which agent can be used safely according to the lecture?", "Aztreonam", ["Vancomycin", "Clindamycin", "Linezolid"], "Aztreonam is used for gram-negative coverage in beta-lactam-allergic patients."), true)
    ]),

    O("12-vancomycin-mssa", "12. Why Vancomycin Is Not Preferred for MSSA", [
      C("MSSA: susceptible is not the same as preferred", `<p>Vancomycin can treat MSSA, but it is <strong>weaker than beta-lactams</strong> and is not the drug of choice. Use nafcillin, oxacillin, dicloxacillin, or cefazolin when possible.</p><p>The lecture specifically cautions against ceftriaxone for MSSA bacteremia/endocarditis because cefazolin has demonstrated superior outcomes.</p>`, [
        F("Why is vancomycin not preferred for MSSA?", "Beta-lactams are more effective", ["Vancomycin has no gram-positive activity", "MSSA is always resistant to all beta-lactams", "Oral vancomycin has perfect serum absorption"], "Vancomycin is bactericidal but less potent than preferred MSSA beta-lactams."),
        F("Which cephalosporin is a drug of choice for MSSA?", "Cefazolin", ["Ceftazidime", "Cefixime", "Cefdinir"], "Cefazolin is preferred, including over ceftriaxone for MSSA bacteremia/endocarditis.")
      ], F("A patient with MSSA bacteremia is improving on empiric IV vancomycin and has no beta-lactam allergy. What should targeted therapy use?", "Cefazolin, nafcillin, or oxacillin", ["Continue vancomycin because broader is better", "Oral vancomycin", "Aztreonam"], "Once MSSA is known, a more effective beta-lactam is preferred."), true)
    ]),

    O("13-fluoroquinolone-limits", "13. Coverage Limitations of Fluoroquinolones", [
      C("The three fluoroquinolones do not substitute for one another", Tbl(["Agent", "Useful lecture coverage", "Key hole"], [
        ["Ciprofloxacin", "Pseudomonas, UTI, HAP, severe COPD exacerbation", "Does not cover S. pneumoniae → not CAP"],
        ["Levofloxacin", "Pseudomonas, urinary infections, HAP, severe COPD, CAP", "No anaerobe coverage"],
        ["Moxifloxacin", "S. pneumoniae/CAP and Bacteroides/intra-abdominal infection", "No Pseudomonas; inadequate urinary concentrations"]
      ]) + `<div class="box-mnemonic"><span class="lbl">Three anchors</span><strong>Cipro = Pseudomonas/urine, Levo = lungs + urine + Pseudomonas, Moxi = lungs + anaerobes—not urine/Pseudomonas.</strong></div>`, [
        F("Why is ciprofloxacin not used alone for CAP?", "It does not cover S. pneumoniae", ["It has no oral form", "It covers only anaerobes", "It never enters lung tissue"], "Ciprofloxacin lacks the key pneumococcal coverage."),
        F("Why is moxifloxacin not used for UTI?", "It does not achieve adequate urinary concentrations", ["It has no gram-positive activity", "It is IV only", "It covers Pseudomonas too strongly"], "Moxifloxacin's urine exposure is inadequate.")
      ], F("A patient needs fluoroquinolone monotherapy for intra-abdominal infection. Which agent is the only option listed?", "Moxifloxacin", ["Ciprofloxacin", "Levofloxacin", "None"], "Moxifloxacin uniquely covers Bacteroides."), true),
      C("Class-wide coverage caveats", `<ul><li>Gram-negative resistance is problematic.</li><li>Not first line for <strong>Staphylococcus aureus</strong>, even if reported susceptible; resistance may develop during therapy.</li><li>Enterococcus coverage is variable and in-vitro susceptibility may not translate to clinical success.</li><li>Not first line for severe infections such as bacteremia.</li><li>Coverage is less complete than broad-spectrum beta-lactams.</li><li>Do not use first line for uncomplicated UTI; reserve for complicated cases, allergy, or failure.</li></ul>`, [
        F("Should fluoroquinolones be first-line for S. aureus when the lab reports susceptibility?", "No", ["Yes, always", "Only moxifloxacin", "Only for bacteremia"], "Resistance can develop during treatment."),
        F("Why may an Enterococcus isolate labeled susceptible still fail fluoroquinolone therapy?", "In-vitro and in-vivo success may not correlate", ["Enterococcus is a virus", "Fluoroquinolones never enter urine", "The drug is always bacteriostatic"], "Enterococcal coverage is unreliable except selected urinary situations.")
      ], F("A patient has severe enterococcal bacteremia and the isolate is fluoroquinolone susceptible. Is a fluoroquinolone preferred?", "No—coverage is variable and severe bacteremia needs a more reliable agent", ["Yes—lab susceptibility guarantees cure", "Yes—moxifloxacin is always first line", "No—because fluoroquinolones cover only fungi"], "The deck warns against relying on FQs for Enterococcus and severe infection."), true),
      C("Fluoroquinolone safety limits", `<ul><li>CNS: confusion, headache, dizziness, altered mental status, hallucinations—especially in older adults.</li><li>QT prolongation: moxifloxacin &gt; levofloxacin &gt; ciprofloxacin.</li><li>Risk of aortic aneurysm rupture/dissection.</li><li>Black-box warnings: arthropathy, tendinitis/tendon rupture, and myasthenia gravis exacerbation.</li><li>May cause C. difficile and select the severe NAP-1 strain.</li><li>Ciprofloxacin is contraindicated with tizanidine.</li></ul>`, [
        F("Which fluoroquinolone has the greatest QT-prolongation association?", "Moxifloxacin", ["Ciprofloxacin", "Levofloxacin", "All identical"], "The lecture ranks moxi above levo above cipro."),
        F("Which combination is contraindicated because drug levels can increase about tenfold?", "Ciprofloxacin plus tizanidine", ["Levofloxacin plus acetaminophen", "Moxifloxacin plus amoxicillin", "Ciprofloxacin plus saline"], "Ciprofloxacin markedly increases tizanidine exposure.")
      ], F("An older patient develops hallucinations and confusion after starting levofloxacin. What lecture toxicity fits?", "Fluoroquinolone CNS toxicity", ["Expected bactericidal activity", "Vancomycin infusion reaction", "Metronidazole-only anaerobe coverage"], "Older adults are particularly susceptible to fluoroquinolone neurotoxicity."), true)
    ]),

    O("14-ertapenem", "14. Ertapenem Compared With Other Carbapenems", [
      C("Ertapenem is the carbapenem with three missing targets", `${Tbl(["Coverage", "Meropenem / imipenem-cilastatin", "Ertapenem"], [
        ["Gram-positive, gram-negative, anaerobes, ESBL", "Yes", "Yes"],
        ["Pseudomonas", "Yes", "<strong>No</strong>"],
        ["Enterococcus", "E. faecalis", "<strong>No</strong>"],
        ["Acinetobacter", "Yes", "<strong>No</strong>"],
        ["MRSA", "No", "No"]
      ])}<div class="box-mnemonic"><span class="lbl">Ertapenem's missing PEA</span><strong>Pseudomonas · Enterococcus · Acinetobacter</strong></div>`, [
        F("Which three organisms are not covered by ertapenem but are covered by meropenem/imipenem?", "Pseudomonas, Enterococcus, and Acinetobacter", ["MSSA, Strep, and anaerobes", "Candida, Aspergillus, and Mucor", "HSV, CMV, and influenza"], "Remember ertapenem's missing PEA."),
        F("Does ertapenem cover ESBL-producing organisms?", "Yes", ["No", "Only with vancomycin", "Only in urine"], "It retains the shared carbapenem ESBL and anaerobe coverage.")
      ], F("A stable patient needs once-daily carbapenem-class ESBL/anaerobe coverage, and cultures exclude Pseudomonas, Enterococcus, and Acinetobacter. Which agent fits?", "Ertapenem", ["Cefepime", "Aztreonam", "Vancomycin"], "Ertapenem is appropriate only when its three major coverage holes do not matter."), true)
    ]),

    O("15-po-vanco-fidaxomicin", "15. Indications for PO Vancomycin and Fidaxomicin", [
      C("Both stay in the gut for C. difficile", Tbl(["Agent", "Lecture role"], [
        ["PO vancomycin", "Only oral use is C. difficile colitis; not absorbed; 125–500 mg PO q6h, with higher doses for severe/fulminant disease"],
        ["Fidaxomicin", "Only indication is initial or recurrent C. difficile; minimally absorbed; 200 mg PO q12h for 10–14 days; may reduce recurrence versus PO vancomycin"]
      ]), [
        F("What is the only indication for oral vancomycin?", "C. difficile colitis", ["MRSA bacteremia", "MSSA pneumonia", "Pseudomonas UTI"], "PO vancomycin stays in the gut and cannot treat systemic infection."),
        F("What is fidaxomicin's only indication?", "Initial or recurrent C. difficile infection", ["CMV", "HSV encephalitis", "Aspergillosis"], "It is a gut-lumen C. difficile agent.")
      ], F("A patient has recurrent C. difficile and the team wants a minimally absorbed agent associated with less recurrence. Which drug fits?", "Fidaxomicin", ["IV vancomycin", "Aztreonam", "Daptomycin"], "The deck notes lower recurrence with fidaxomicin compared with PO vancomycin."), true)
    ]),

    O("16-neurologic-effects", "16. Antibiotics Associated With Altered Mental Status, Seizures, and Other Neurologic Effects", [
      C("Beta-lactams and imipenem", `<ul><li>All beta-lactams have potential to lower the seizure threshold.</li><li>Penicillins can rarely cause seizures or confusion.</li><li>Cephalosporins can cause seizures and altered mental status.</li><li>Carbapenems can cause seizures/AMS, <strong>primarily imipenem</strong>; use caution with head trauma, seizure history, age, weight, and renal dysfunction.</li><li>Carbapenems markedly lower valproic acid/divalproex levels; increasing the valproate dose does not overcome it.</li></ul>`, [
        F("Which carbapenem is most associated with seizures and altered mental status?", "Imipenem", ["Ertapenem", "Meropenem", "All identical"], "Imipenem is the main carbapenem neurologic concern."),
        F("What happens to valproic acid levels with carbapenems?", "They decrease", ["They reliably increase", "They never change", "Valproic acid becomes an antibiotic"], "This interaction cannot be overcome by increasing valproate dosage.")
      ], F("A patient with seizure history and renal dysfunction becomes confused after imipenem therapy. Which drug effect should be suspected?", "Carbapenem neurotoxicity", ["Expected therapeutic response", "Vancomycin infusion reaction", "Rifampin induction only"], "Imipenem is the principal carbapenem associated with seizures/AMS."), true),
      C("Fluoroquinolones and other CNS-associated antibiotics", Tbl(["Agent/class", "Lecture neurologic effects"], [
        ["Fluoroquinolones", "Confusion, headache, dizziness, AMS, hallucinations—especially older adults"],
        ["Metronidazole", "Peripheral neuropathy, headache"],
        ["Linezolid", "Neuropathy with longer exposure"],
        ["Aminoglycosides", "Ototoxicity/vestibular injury; tinnitus or vertigo; neuromuscular blockade"],
        ["Sulfonamides/TMP-SMX", "CNS effects appear in the lecture's adverse-reaction table"]
      ]), [
        F("Which antibiotic class commonly causes confusion, AMS, or hallucinations in older adults?", "Fluoroquinolones", ["Natural penicillins only", "Topical antifungals", "Fidaxomicin only"], "These CNS effects are emphasized for elderly patients."),
        F("Which antibiotics can cause irreversible auditory and vestibular toxicity?", "Aminoglycosides", ["Macrolides", "Penicillin VK", "Nitrofurantoin"], "Eighth-cranial-nerve injury can cause hearing loss, tinnitus, or vertigo.")
      ], F("An older adult taking ciprofloxacin develops agitation and hallucinations. Which lecture adverse effect is most likely?", "Fluoroquinolone CNS toxicity", ["Aminoglycoside ototoxicity", "Vancomycin nephrotoxicity", "Rifampin discoloration"], "CNS effects are particularly important in older adults receiving fluoroquinolones."), true)
    ]),

    O("17-rash-skin-toxicity", "17. Antibiotics Most Associated With Rash and Skin Toxicity", [
      C("Rash-prone antibacterial groups", Tbl(["Agent/class", "Skin finding"], [
        ["Penicillins / cephalosporins / carbapenems", "Rash and hypersensitivity reactions"],
        ["TMP-SMX / sulfonamides", "Rash; rare Stevens-Johnson syndrome and TEN"],
        ["Tetracyclines", "Rash and photosensitivity"],
        ["Clindamycin", "Rash; rare allergic reaction"],
        ["Vancomycin", "Rash and vancomycin infusion reaction (flushing/rash/hypotension/dyspnea)—not a true allergy"]
      ]), [
        F("Which antibiotic is especially associated with rash plus rare SJS/TEN?", "TMP-SMX", ["Aztreonam", "Fidaxomicin", "Nitrofurantoin"], "Sulfonamide skin toxicity can be severe."),
        F("Which class is associated with rash and photosensitivity?", "Tetracyclines", ["Aminoglycosides", "Carbapenems only", "Monobactams"], "Photosensitivity is a classic tetracycline adverse effect.")
      ], F("A patient on doxycycline develops an exaggerated sun reaction. Which toxicity fits?", "Tetracycline photosensitivity", ["Vancomycin infusion reaction", "Aminoglycoside ototoxicity", "Rifampin induction"], "Doxycycline and related tetracyclines can cause photosensitivity."), true),
      C("Recognize infusion reaction versus allergy", `<p><strong>Vancomycin infusion reaction</strong> causes flushing, rash, hypotension, and dyspnea. It is not a true allergy. Management is to lengthen the infusion and pretreat with antihistamines.</p><p>By contrast, a previous true allergic reaction to a beta-lactam or another beta-lactam with a similar side chain is a contraindication/major precaution.</p>`, [
        F("Is vancomycin infusion reaction a true allergy?", "No", ["Yes", "Only if flushing occurs", "Only with PO vancomycin"], "It is a rate-related infusion reaction."),
        F("How is vancomycin infusion reaction managed?", "Slow the infusion and pretreat with antihistamines", ["Speed up the infusion", "Switch to oral vancomycin for bacteremia", "Add rifampin to every dose"], "Longer infusion time reduces the reaction.")
      ], F("During rapid IV vancomycin, a patient develops diffuse flushing and hypotension. What is the most appropriate interpretation?", "Vancomycin infusion reaction, managed by slower infusion", ["A guaranteed IgE allergy", "C. difficile", "Aminoglycoside toxicity"], "The characteristic reaction is not a true allergy."), true)
    ]),

    O("18-black-box-warnings", "18. Black Box Warnings for Antimicrobial Agents", [
      C("Antibiotic boxed warnings", Tbl(["Agent/class", "Boxed warning in the lecture"], [
        ["Fluoroquinolones", "Arthropathy, tendinitis/tendon rupture; myasthenia gravis exacerbation"],
        ["Aminoglycosides", "Nephrotoxicity and ototoxicity"],
        ["Clindamycin", "High propensity for C. difficile/pseudomembranous colitis"],
        ["Tigecycline", "Increased mortality versus conventional therapy, especially HAP"]
      ]), [
        F("Which antibiotics have boxed warnings for nephrotoxicity and ototoxicity?", "Aminoglycosides", ["Macrolides", "Tetracyclines", "Natural penicillins"], "Renal injury may be reversible if caught early; ototoxicity may be irreversible."),
        F("Which antibiotic has a boxed warning for high C. difficile risk?", "Clindamycin", ["Aztreonam", "Nitrofurantoin", "Fidaxomicin"], "Clindamycin has a high propensity for pseudomembranous colitis.")
      ], F("A patient with myasthenia gravis needs an antibiotic. Which class has a boxed warning for exacerbation?", "Fluoroquinolones", ["Macrolides only", "Natural penicillins", "Fidaxomicin"], "Fluoroquinolones can worsen myasthenia gravis."), true),
      C("Tigecycline's mortality warning", `<p>Tigecycline is broad spectrum and covers MRSA, VRE, resistant gram-negatives, and anaerobes, but not the <strong>3 Ps: Pseudomonas, Providencia, Proteus</strong>.</p><p>Its boxed warning is <strong>increased mortality</strong> compared with conventional therapy, especially for hospital-acquired pneumonia. The FDA-framed role is infection where alternatives are not suitable.</p>`, [
        F("What is tigecycline's boxed warning?", "Increased mortality", ["Tendon rupture", "Ototoxicity only", "C. difficile recurrence"], "The mortality signal was especially notable in HAP comparisons."),
        F("Which organisms are tigecycline's '3 Ps' coverage gap?", "Pseudomonas, Providencia, and Proteus", ["Pneumococcus, Peptostreptococcus, and Pasteurella", "Parvovirus, poliovirus, and prions", "No organisms"], "The deck supplies this exact memory aid.")
      ], F("A patient with HAP has several conventional options. Why should tigecycline not be chosen casually?", "Its boxed warning reports increased mortality, particularly in HAP", ["It has no black-box warning", "It is only an antiviral", "It always improves survival"], "Reserve it for situations where alternatives are unsuitable."), true),
      C("Antiviral boxed warnings", `<p><strong>Ganciclovir and valganciclovir</strong> carry boxed warnings for:</p><ul><li>Blood dyscrasias: neutropenia, anemia, and thrombocytopenia</li><li>Birth defects</li></ul><p>They may also cause GI intolerance and renal failure, so use caution and adjust as appropriate in renal dysfunction.</p>`, [
        F("Which antivirals carry boxed warnings for blood dyscrasias and birth defects?", "Ganciclovir and valganciclovir", ["Acyclovir and valacyclovir", "Oseltamivir and zanamivir", "Remdesivir and baloxavir"], "These CMV agents can cause major marrow and reproductive toxicity."),
        F("Which blood dyscrasias are listed?", "Neutropenia, anemia, and thrombocytopenia", ["Only eosinophilia", "Only polycythemia", "No hematologic effects"], "All three cell lines may be affected.")
      ], F("A transplant patient on valganciclovir develops falling neutrophils, hemoglobin, and platelets. Which warning explains the pattern?", "Ganciclovir-class blood dyscrasias", ["Fluoroquinolone tendon toxicity", "Vancomycin infusion reaction", "Rifampin discoloration"], "Valganciclovir is converted to ganciclovir and shares marrow toxicity."), true)
    ]),

    O("19-warfarin-inr", "19. Antibiotics That Commonly Alter INR in Warfarin Patients", [
      C("The three highlighted major interactions", Tbl(["Agent", "Warfarin effect"], [
        ["Metronidazole", "<strong>Major increase in INR</strong>"],
        ["TMP-SMX", "<strong>Major increase in INR</strong>"],
        ["Rifampin", "<strong>Major decrease in INR</strong> through potent enzyme induction"]
      ]) + `<div class="box-mnemonic"><span class="lbl">Direction</span><strong>Metro + TMP-SMX push INR up; Rifampin pulls INR down.</strong></div>`, [
        F("Which two highlighted antibiotics markedly increase INR?", "Metronidazole and TMP-SMX", ["Rifampin and nitrofurantoin", "Vancomycin and aztreonam", "Cefazolin and amoxicillin"], "Both are marked as major INR-increasing interactions."),
        F("Which antibiotic markedly decreases warfarin effect?", "Rifampin", ["Metronidazole", "TMP-SMX", "Ciprofloxacin"], "Rifampin is a potent enzyme inducer.")
      ], F("A patient stable on warfarin starts TMP-SMX. What change should be anticipated?", "INR may increase substantially", ["INR must decrease", "No interaction is possible", "Warfarin becomes inactive only in urine"], "TMP-SMX is a major warfarin interaction."), true),
      C("Other INR-increasing antimicrobials", `<p>The lecture also identifies increased INR with <strong>ciprofloxacin</strong>, <strong>erythromycin/clarithromycin</strong>, and <strong>azoles</strong> including fluconazole, itraconazole, voriconazole, and posaconazole. Azoles inhibit liver enzymes and can raise warfarin exposure.</p><p>Any of these combinations requires awareness and closer INR monitoring.</p>`, [
        F("What direction do azoles push INR in warfarin patients?", "They increase INR", ["They always decrease INR", "They have no effect", "They eliminate warfarin from urine"], "Azole enzyme inhibition increases warfarin effect."),
        F("Which fluoroquinolone is especially noted to increase INR?", "Ciprofloxacin", ["Moxifloxacin only", "No fluoroquinolone", "Zanamivir"], "Ciprofloxacin is the strongest fluoroquinolone-warfarin interaction noted.")
      ], F("A warfarin patient starts fluconazole. What monitoring issue should be anticipated?", "A rising INR", ["A guaranteed falling INR", "No need for INR monitoring", "Aminoglycoside peak failure"], "Azoles inhibit metabolism and increase INR."), true)
    ]),

    O("20-oral-contraceptives", "20. The Antibiotic Known to Reduce Oral-Contraceptive Efficacy", [
      C("Rifampin is the proven exception", `<p>The idea that all antibiotics reduce oral-contraceptive efficacy is historical and supported by limited literature. The lecture lists doxycycline/tetracycline, ampicillin, metronidazole, and fluoroquinolones as agents the American College of Obstetricians and Gynecologists considers to have <strong>no interaction</strong>.</p><p><strong>Rifampin</strong> is different: it induces hormone metabolism and is associated with reduced oral-contraceptive efficacy.</p>`, [
        F("Which antibiotic is known to reduce oral-contraceptive efficacy?", "Rifampin", ["Doxycycline", "Ampicillin", "Metronidazole"], "Rifampin is a potent enzyme inducer that accelerates hormone metabolism."),
        F("Does the lecture support a clinically important oral-contraceptive interaction for doxycycline?", "No", ["Yes, it is the proven inducer", "Only with one dose", "Only because it raises hormone levels"], "Doxycycline is in the no-interaction list.")
      ], F("A patient using an oral contraceptive is prescribed rifampin. What counseling issue matters?", "Rifampin can reduce contraceptive efficacy through enzyme induction", ["Rifampin increases hormone exposure", "All antibiotics have the same proven effect", "No counseling is needed"], "Rifampin is the specific confirmed concern in the deck."), true)
    ]),

    O("21-hsv-vzv-antivirals", "21. Antivirals Used for HSV and Varicella-Zoster", [
      C("Acyclovir and valacyclovir", Tbl(["Agent", "Route/relationship", "Coverage/use"], [
        ["Acyclovir", "IV and PO; IV dosing is weight based", "HSV-1, HSV-2, varicella, zoster; IV only for herpes encephalitis and disseminated disease"],
        ["Valacyclovir", "PO prodrug converted to acyclovir", "Same HSV/VZV spectrum; active infection and chronic suppression"]
      ]) + `<p>Both inhibit viral DNA synthesis and replication.</p>`, [
        F("What does valacyclovir become in vivo?", "Acyclovir", ["Oseltamivir", "Ganciclovir", "Ritonavir"], "Valacyclovir is the oral prodrug of acyclovir."),
        F("Which viruses are covered by acyclovir and valacyclovir?", "HSV-1, HSV-2, varicella, and herpes zoster", ["Influenza A/B only", "CMV only", "COVID only"], "Their primary spectrum is herpes simplex and varicella-zoster viruses.")
      ], F("A patient needs chronic oral suppression of recurrent genital herpes. Which agent fits?", "Valacyclovir", ["Zanamivir", "Remdesivir", "Fidaxomicin"], "Oral valacyclovir is used for active HSV and chronic suppression."), true),
      C("Famciclovir is the intolerance alternative", `<p><strong>Famciclovir</strong> is another oral option for herpes simplex and zoster infections. Reserve it for patients who cannot tolerate acyclovir. Its listed adverse effects are headache and nausea.</p>`, [
        F("When is famciclovir generally reserved?", "When acyclovir is not tolerated", ["For influenza only", "For CMV prophylaxis only", "For bacterial meningitis"], "It is an alternative for HSV and zoster."),
        F("Which infections can famciclovir treat?", "Herpes simplex and zoster", ["Influenza A and B", "C. difficile", "Aspergillosis"], "Its spectrum overlaps the acyclovir herpes indications.")
      ], F("A patient with shingles cannot tolerate acyclovir. Which lecture alternative is available?", "Famciclovir", ["Ganciclovir", "Oseltamivir", "Nirmatrelvir-ritonavir"], "Famciclovir is reserved for acyclovir-intolerant HSV/zoster patients."), true)
    ]),

    O("22-iv-acyclovir-risks", "22. Potential Risks of IV Acyclovir", [
      C("Crystals, kidneys, dosing, hydration", `<p>The major IV acyclovir risk is <strong>nephrotoxicity</strong>: drug can crystallize in the nephron and obstruct urine flow.</p><div class="box-mnemonic"><span class="lbl">Protect the nephron</span><strong>Renal dose adjustment + adequate hydration.</strong></div><p>Both acyclovir and valacyclovir can cause malaise, headache, and nausea/vomiting. Valacyclovir also has increased LFTs and CNS toxicity—agitation, confusion, delirium—especially in older adults.</p>`, [
        F("What is the major IV acyclovir toxicity?", "Crystal-induced nephrotoxicity", ["Tendon rupture", "Ototoxicity", "Pseudomembranous colitis"], "Acyclovir crystals can obstruct the nephron."),
        F("How is IV acyclovir nephrotoxicity risk reduced?", "Renal dose adjustment and hydration", ["Fluid restriction in every patient", "Giving it only with warfarin", "Avoiding renal assessment"], "Dose and hydration protect against intratubular crystallization.")
      ], F("An older patient with renal dysfunction needs IV acyclovir for herpes encephalitis. What should be built into the plan?", "Renal-adjusted dosing and hydration", ["No fluids and full unadjusted dose", "Oral vancomycin", "Aminoglycoside peak monitoring"], "Renal impairment increases the risk of acyclovir crystal nephropathy."), true)
    ]),

    O("23-cmv-antivirals", "23. Antivirals Used for Cytomegalovirus", [
      C("Ganciclovir and valganciclovir", Tbl(["Agent", "Form", "Role"], [
        ["Ganciclovir", "IV only", "CMV treatment and prevention"],
        ["Valganciclovir", "PO only; prodrug of ganciclovir", "CMV treatment and prevention; transplant prophylaxis"]
      ]) + `<p>CMV is emphasized as an opportunistic infection in immunocompromised patients, particularly HIV and transplant populations. Major risks are marrow suppression, birth defects, GI intolerance, and renal failure.</p>`, [
        F("Which IV antiviral treats CMV?", "Ganciclovir", ["Valacyclovir", "Famciclovir", "Oseltamivir"], "Ganciclovir is the IV CMV agent."),
        F("Which oral antiviral is the prodrug of ganciclovir?", "Valganciclovir", ["Valacyclovir", "Baloxavir", "Ritonavir"], "Valganciclovir provides oral CMV therapy/prevention.")
      ], F("A transplant recipient needs oral CMV prophylaxis. Which drug fits?", "Valganciclovir", ["Valacyclovir", "Zanamivir", "Remdesivir"], "Valganciclovir is the oral CMV prophylaxis option."), true)
    ]),

    O("24-outpatient-covid", "24. Agent That Reduces Hospitalization Risk in Outpatients With COVID-19", [
      C("Nirmatrelvir-ritonavir", `<p><strong>Nirmatrelvir-ritonavir</strong> is the preferred option for outpatients at high risk of severe COVID. The lecture states that it significantly reduces hospitalization and mortality.</p><ul><li>Start as soon as possible and within <strong>5 days</strong> of symptom onset; day 1 is the first symptom day.</li><li>Renal dose adjustment is required.</li><li>Drug interactions can be problematic; many common medications are contraindicated.</li><li>Rebound symptoms may occur, but benefits still outweigh risk.</li><li>Common effects: diarrhea and dysgeusia/metallic taste.</li></ul>`, [
        F("Which agent reduces hospitalization and mortality in high-risk COVID outpatients?", "Nirmatrelvir-ritonavir", ["Acyclovir", "Oseltamivir", "Ganciclovir"], "It is the preferred outpatient option in the deck."),
        F("By when should nirmatrelvir-ritonavir begin?", "Within 5 days of symptom onset", ["After 30 days", "Only after intubation", "At any time with equal benefit"], "Prompt initiation is required.")
      ], F("A high-risk outpatient is on day 3 of COVID symptoms and takes several interacting medications. What is the key lecture approach?", "Consider nirmatrelvir-ritonavir promptly but review interactions and renal dosing", ["Give it without medication review", "Use acyclovir instead", "Wait until after day 10"], "The drug is preferred, but its interaction burden and renal dosing must be addressed."), true)
    ]),

    O("25-neuraminidase-viruses", "25. Respiratory Viruses Covered by Neuraminidase Inhibitors", [
      C("Influenza A and B only", `<p><strong>Oseltamivir</strong> (oral) and <strong>zanamivir</strong> (inhaled) are neuraminidase inhibitors. They cover <strong>influenza A and influenza B only</strong>; H1N1 is influenza A.</p>${Tbl(["Use", "Oseltamivir", "Zanamivir"], [
        ["Prophylaxis, 7–10 days", "75 mg PO daily", "Two inhalations (10 mg) daily"],
        ["Treatment, 5 days", "75 mg PO q12h", "Two inhalations (10 mg) q12h"]
      ])}<p>Start ideally within 48 hours. Treatment shortens illness by about one day and may reduce complications.</p>`, [
        F("Which viruses do neuraminidase inhibitors cover?", "Influenza A and B", ["RSV and COVID", "HSV and VZV", "CMV only"], "Oseltamivir and zanamivir are influenza-specific in the lecture."),
        F("Is H1N1 covered by neuraminidase inhibitors?", "Yes; it is influenza A", ["No; it is HSV", "No; it is a fungus", "Only by acyclovir"], "H1N1 is a subtype of influenza A.")
      ], F("A high-risk household contact is exposed to confirmed influenza B. Which drug class can provide prophylaxis?", "A neuraminidase inhibitor such as oseltamivir or zanamivir", ["Acyclovir", "Ganciclovir", "Nirmatrelvir-ritonavir"], "Both agents cover influenza A and B and have prophylaxis regimens."), true)
    ]),

    O("26-influenza-high-risk", "26. Patient Populations at Risk for Influenza Complications", [
      C("Age, pregnancy, residence, and obesity", `<ul><li>Children younger than 5, especially younger than 2</li><li>Adults age 65 or older</li><li>Pregnant patients or postpartum within 2 weeks</li><li>Morbid obesity: BMI 40 or greater</li><li>Nursing-home or extended-care-facility residents</li></ul>`, [
        F("Which pediatric age group has especially high influenza complication risk?", "Children younger than 2", ["Only adolescents", "Only children older than 12", "No children"], "All under 5 are high risk, especially under 2."),
        F("How long postpartum does elevated influenza complication risk remain in the lecture?", "Within 2 weeks after delivery", ["Only 24 hours", "One year", "No postpartum risk"], "Pregnant and recently postpartum patients are high risk.")
      ], F("A 68-year-old nursing-home resident develops influenza symptoms. How should risk be classified?", "High risk for complications", ["Low risk because of residence", "Risk-free after age 65", "High risk only if younger than 2"], "Both age and residence are high-risk factors."), true),
      C("Chronic disease and immunocompromise", `<p>High-risk chronic conditions include pulmonary, cardiovascular, renal, hepatic, hematologic, neurologic, and other chronic diseases. Immunocompromised patients are also high risk.</p><p>The CDC-based slide recommends antiviral treatment as early as possible for patients who require hospitalization, have severe/complicated/progressive illness, or are at high risk for complications—even though maximal benefit is associated with beginning within 48 hours.</p>`, [
        F("Which host state independently raises influenza complication risk?", "Immunocompromise", ["Perfect health", "No comorbid disease", "Outdoor exercise"], "Immunocompromised patients are a named high-risk group."),
        F("Who should receive influenza antivirals as early as possible?", "Hospitalized, severe/progressive, or high-risk patients", ["Only low-risk patients after recovery", "No patient after 48 hours", "Only patients with HSV"], "The deck prioritizes these groups for prompt treatment.")
      ], F("A patient with chronic pulmonary disease has progressive influenza symptoms that began three days ago. What does the lecture recommend?", "Start treatment as early as possible because the patient is high risk and progressive", ["Never treat after 48 hours", "Use acyclovir", "Wait for complications"], "High-risk or progressive disease remains a treatment priority."), true)
    ]),

    O("27-fluconazole-doc", "27. Situations When Fluconazole Is Drug of Choice", [
      C("Susceptible Candida and localized candidiasis", Tbl(["Clinical situation", "Fluconazole role"], [
        ["Susceptible Candida such as C. albicans or C. parapsilosis", "Drug of choice for candidemia, invasive candidiasis, and symptomatic UTI"],
        ["Candida esophagitis", "Usually first-line; topical treatment is insufficient"],
        ["Severe local candidiasis", "Use when topical agents are inadequate"],
        ["Vulvovaginal candidiasis", "150 mg once"],
        ["Oropharyngeal candidiasis", "Systemic option when local treatment is inadequate"]
      ]), [
        F("For which Candida species is fluconazole a drug of choice when susceptible?", "C. albicans and C. parapsilosis", ["C. krusei", "All C. glabrata empirically", "Mucorales"], "C. krusei is intrinsically resistant and C. glabrata is unreliable empirically."),
        F("What is first-line systemic therapy for Candida esophagitis?", "Fluconazole", ["Topical therapy alone", "Terbinafine", "Oseltamivir"], "The esophagus requires systemic therapy; topical treatment is insufficient.")
      ], F("A stable patient has symptomatic Candida UTI caused by susceptible C. albicans. Which antifungal has adequate urinary concentrations and is preferred?", "Fluconazole", ["An echinocandin", "Voriconazole", "Posaconazole"], "Fluconazole is renally eliminated and reaches urine; the others do not reliably."), true),
      C("Know when fluconazole is not the answer", `<ul><li>Not active against C. krusei.</li><li>C. glabrata resistance is increasing, so empiric coverage is unreliable.</li><li>Does not cover molds such as Aspergillus or Mucorales.</li><li>In a septic or neutropenic patient with suspected invasive Candida, prefer an echinocandin until susceptibility is known.</li><li>Fluconazole may be used for prophylaxis in many immunocompromised patients, but a mold-active azole is preferred with prolonged/heavy immunosuppression.</li></ul>`, [
        F("Which Candida species is intrinsically resistant to fluconazole?", "C. krusei", ["C. albicans", "C. parapsilosis", "All Candida"], "C. krusei is the fixed fluconazole gap."),
        F("Does fluconazole cover Aspergillus or Mucorales?", "No", ["Yes, both", "Only Mucorales", "Only Aspergillus"], "Fluconazole lacks mold coverage.")
      ], F("A septic neutropenic patient has yeast in blood culture, and species is unknown. Is fluconazole the preferred initial empiric agent?", "No—start an echinocandin", ["Yes—fluconazole covers every Candida species", "No—use terbinafine", "Yes—because molds are excluded"], "Unknown resistant Candida in a critically ill patient calls for an echinocandin."), true)
    ]),

    O("28-fewest-interactions", "28. Antifungal Class With the Fewest Drug Interactions", [
      C("Echinocandins", `<p><strong>Echinocandins</strong>—caspofungin, micafungin, and anidulafungin—have the fewest serious drug interactions and are the safest antifungal class.</p><ul><li>No effect on CYP enzymes.</li><li><strong>Anidulafungin</strong> is least likely to interact.</li><li>Caspofungin has the most interactions within the class.</li><li>Caspofungin and micafungin can alter levels of some immunosuppressive drugs.</li></ul>`, [
        F("Which antifungal class has the fewest drug interactions?", "Echinocandins", ["Azoles", "Amphotericin B", "Polyenes as a whole"], "Their mechanism and minimal CYP involvement make them interaction-sparing."),
        F("Which echinocandin is least likely to have interactions?", "Anidulafungin", ["Caspofungin", "Micafungin", "Fluconazole"], "Anidulafungin is the lowest-interaction agent in the class.")
      ], F("A critically ill transplant patient takes several interacting medications and needs empiric Candida coverage. Which class minimizes drug interactions?", "Echinocandins", ["Azoles", "Rifampin", "Amphotericin B deoxycholate"], "Echinocandins provide Candida coverage with few serious interactions."), true)
    ]),

    O("29-terbinafine", "29. Oral Lamisil Indication and Treatment Duration", [
      C("Terbinafine for onychomycosis", `<p>The <strong>only oral indication</strong> for terbinafine (Lamisil) in the lecture is <strong>onychomycosis</strong>. Treat until the infected nail grows out.</p>${Tbl(["Site", "Duration"], [["Fingernails", "6+ weeks"], ["Toenails", "12+ weeks"]])}<p>Dose: 250 mg PO daily. Adverse effects include headache, GI intolerance, taste disturbance, rash with rare TEN, and increased LFTs.</p>`, [
        F("What is the only oral indication for terbinafine?", "Onychomycosis", ["Candidemia", "Aspergillus pneumonia", "CMV"], "Oral Lamisil is a nail-infection drug in this lecture."),
        F("How long are toenails treated?", "12+ weeks", ["One dose", "Five days", "6 hours"], "Therapy continues until the infected nail grows out; toenails take longer.")
      ], F("A patient has toenail onychomycosis. Which regimen duration matches the lecture?", "Terbinafine 250 mg daily for at least 12 weeks", ["One 150 mg dose", "Six days only", "IV amphotericin for one day"], "Toenail growth requires 12 or more weeks."), true)
    ]),

    O("30-disseminated-candida-risk", "30. Risk Factors for Disseminated Candidiasis", [
      C("Immunosuppression and barrier breakdown", `<ul><li>Severe or prolonged immunosuppression</li><li>Leukemia, especially ALL or AML, from malignancy or chemotherapy</li><li>Bone-marrow or solid-organ transplant</li><li>Recent chemotherapy</li><li>High-dose steroids or other immunosuppressive medications</li><li>Burns and severe skin-barrier injury</li></ul><p>Risk rises as immunosuppression becomes more intense or prolonged.</p>`, [
        F("Which hematologic malignancies are highlighted as candidiasis risks?", "ALL and AML", ["Only solid tumors", "No malignancy", "Benign anemia"], "Leukemia and its therapy create profound immunosuppression."),
        F("Which barrier-injury population is at risk?", "Burn patients", ["Patients with intact skin only", "Healthy athletes only", "No trauma patients"], "Loss of protective skin facilitates invasive infection.")
      ], F("A patient with AML has prolonged neutropenia after chemotherapy and develops persistent fever. How should Candida risk be viewed?", "High risk for disseminated candidiasis", ["No risk because Candida is always harmless", "Only local nail disease is possible", "Risk exists only after tick bites"], "Leukemia, chemotherapy, and prolonged immunosuppression are additive risks."), true),
      C("Devices, antibiotics, abdomen, and colonization", `<ul><li>Prolonged antibiotics disrupting normal flora</li><li>Central vascular access, dialysis, and TPN</li><li>Abdominal surgery, especially anastomotic leak or repeat surgery</li><li>Previous fungal infection that may reactivate</li><li>High Candida colonization burden in GU tract, skin, or respiratory tract</li></ul><div class="box-mnemonic"><span class="lbl">Risk arithmetic</span><strong>Risk factors are additive—the more present, the higher the likelihood.</strong></div>`, [
        F("Why do prolonged antibiotics raise disseminated Candida risk?", "They disrupt normal flora and permit fungal overgrowth", ["They directly vaccinate against Candida", "They eliminate all fungi", "They remove central lines"], "Antibacterial pressure creates a fungal growth opportunity."),
        F("Which abdominal factor is particularly concerning?", "Anastomotic leak or repeated abdominal surgery", ["Uncomplicated exercise", "A healed paper cut", "No surgery"], "GI barrier disruption can allow Candida translocation.")
      ], F("A critically ill patient has a central line, TPN, dialysis, recent broad antibiotics, abdominal surgery, and Candida at several nonsterile sites. How should risk be interpreted?", "Very high because multiple risk factors are additive", ["Low because each factor cancels another", "No risk unless urine is sterile", "Only superficial candidiasis is possible"], "This is the lecture's classic high-risk cluster."), true)
    ]),

    O("31-aspergillus-azoles", "31. Azoles That Provide Aspergillus Coverage", [
      C("Mold-active azoles", Tbl(["Azole", "Aspergillus role"], [
        ["Itraconazole", "Covers Aspergillus; broader than fluconazole"],
        ["Voriconazole", "Enhanced Aspergillus activity; fungicidal; <strong>drug of choice for aspergillosis</strong>"],
        ["Posaconazole", "Covers yeasts, molds, and Mucorales; used for high-risk prophylaxis"],
        ["Isavuconazole", "Covers yeasts, molds, and Mucorales; second line for aspergillosis"],
        ["Fluconazole", "<strong>No Aspergillus coverage</strong>"]
      ]), [
        F("Which azole is the drug of choice for aspergillosis?", "Voriconazole", ["Fluconazole", "Terbinafine", "Flucytosine"], "Voriconazole has enhanced, fungicidal Aspergillus activity."),
        F("Which common azole does not cover Aspergillus?", "Fluconazole", ["Itraconazole", "Voriconazole", "Posaconazole"], "Fluconazole is the narrow, yeast-focused azole.")
      ], F("A heavily immunosuppressed patient needs prophylaxis that includes Aspergillus. Which choices fit the lecture?", "Posaconazole or voriconazole", ["Fluconazole only", "Terbinafine", "Fidaxomicin"], "Mold-active prophylaxis is needed when immunosuppression is profound/prolonged."), true)
    ]),

    O("32-azole-spectrum", "32. Narrowest- and Broadest-Spectrum Azoles", [
      C("The azole spectrum ladder", `<div class="stage-flow">Fluconazole &lt; Itraconazole &lt; Voriconazole &lt; Posaconazole / Isavuconazole</div><ul><li><strong>Narrowest:</strong> fluconazole—Candida/Cryptococcus, some endemic fungi; no Aspergillus or Mucorales.</li><li><strong>Broadest:</strong> posaconazole and isavuconazole—yeasts, molds, and Mucorales.</li><li>Voriconazole expands Candida and Aspergillus activity but still lacks Mucorales.</li></ul>`, [
        F("Which azole has the narrowest spectrum?", "Fluconazole", ["Posaconazole", "Isavuconazole", "Voriconazole"], "It lacks mold and Mucorales coverage."),
        F("Which azoles have the broadest spectrum?", "Posaconazole and isavuconazole", ["Fluconazole only", "Itraconazole only", "Ketoconazole only"], "Both cover yeasts, molds, and Mucorales.")
      ], F("A suspected Mucorales infection needs an azole with the broadest spectrum. Which choices have activity?", "Posaconazole or isavuconazole", ["Fluconazole", "Voriconazole", "Itraconazole only"], "The two broadest azoles include Mucorales."), true)
    ]),

    O("33-azoles-warfarin", "33. Impact of Azole Therapy on INR in Warfarin Patients", [
      C("Azoles raise INR", `<p>Azoles are potent inhibitors of hepatic enzymes, especially CYP3A4; some also inhibit CYP2C9 and CYP2C19. In patients taking warfarin, <strong>azoles increase INR</strong>.</p><p>The lecture's interaction table lists fluconazole, itraconazole, voriconazole, and posaconazole. Monitor INR closely and anticipate a stronger anticoagulant effect.</p>`, [
        F("What happens to INR when an azole is added to warfarin?", "INR increases", ["INR always decreases", "No interaction", "INR becomes unmeasurable because warfarin is an antibiotic"], "Azole enzyme inhibition increases warfarin exposure."),
        F("What mechanism explains many azole interactions?", "Inhibition of liver CYP enzymes", ["Renal filtration of every drug", "Induction by all azoles", "Neuraminidase inhibition"], "Azoles inhibit CYP3A4 and sometimes CYP2C9/2C19.")
      ], F("A warfarin patient starts voriconazole. What should happen to monitoring?", "Increase INR surveillance because INR may rise", ["Stop checking INR", "Expect a large INR fall", "Check only an aminoglycoside peak"], "Voriconazole is an azole enzyme inhibitor."), true)
    ]),

    O("34-safest-azole", "34. The 'Safest' Azole and Why", [
      C("Fluconazole", `<p><strong>Fluconazole is the most commonly used and safest azole.</strong> At usual doses, it has the fewest interactions and adverse events among azoles.</p><ul><li>Well absorbed: IV dose equals PO dose.</li><li>Renal elimination is greater than hepatic metabolism.</li><li>Side effects are infrequent; hepatotoxicity is rare.</li><li>Interaction concern increases at higher doses such as 800 mg daily.</li><li>Reduce dose when creatinine clearance is below 50 mL/min.</li></ul>`, [
        F("Which azole is considered the safest?", "Fluconazole", ["Itraconazole", "Voriconazole", "Posaconazole"], "It has the fewest interactions and adverse events at standard doses."),
        F("Why does fluconazole generally have fewer interactions?", "It relies more on renal elimination than hepatic metabolism", ["It is never absorbed", "It induces every CYP enzyme", "It is only topical"], "Less hepatic metabolism contributes to the safer interaction profile.")
      ], F("A patient needs an oral azole for susceptible Candida and has a complex medication list. Which azole is generally safest at usual doses?", "Fluconazole", ["Itraconazole", "Voriconazole", "Posaconazole"], "Fluconazole has the lowest usual interaction/adverse-event burden among azoles."), true)
    ]),

    O("35-empiric-antifungals", "35. When to Add Empiric Antifungals and Whether to Prefer an Azole or Echinocandin", [
      C("Sterile-site yeast: treat, usually with an echinocandin", `<p>When a sterile-site culture—blood, CSF, peritoneal fluid, or bone—is positive for yeast/fungi, treat it as a true pathogen. <strong>An echinocandin is preferred empirically</strong>, with step-down to an azole after susceptibility is known.</p><p>Candida in urine or sputum is often colonization rather than invasive disease; symptomatic Candida UTI is treated with fluconazole because it reaches urine.</p>`, [
        F("What is preferred empirically for yeast in a sterile-site culture?", "An echinocandin", ["Terbinafine", "No therapy", "Topical fluconazole"], "Echinocandins cover resistant Candida species while susceptibilities are pending."),
        F("Which antifungal is preferred for symptomatic Candida UTI?", "Fluconazole", ["An echinocandin", "Voriconazole", "Posaconazole"], "Fluconazole achieves adequate urinary concentrations.")
      ], F("Blood culture grows yeast in a septic patient before species identification. What should be started?", "An echinocandin", ["Fluconazole regardless of risk", "Terbinafine", "No antifungal because blood is nonsterile"], "Blood is sterile and empiric echinocandin coverage is preferred."), true),
      C("Clinical syndromes that call for empiric coverage", Tbl(["Situation", "Preferred approach"], [
        ["Upper-GI perforation with peritonitis", "Echinocandin if septic or at risk for C. krusei/C. glabrata; otherwise consider fluconazole"],
        ["Candida esophagitis", "Fluconazole first line; topical therapy is inadequate"],
        ["Refractory local candidiasis", "Fluconazole when topical agents fail"],
        ["Febrile neutropenia not improving after 48–72 h of appropriate antibiotics", "Add an echinocandin; step down to azole after susceptibility"],
        ["Suspected/confirmed disseminated candidiasis", "Echinocandin, especially in septic patients, unless C. albicans is proven/highly suspected"]
      ]), [
        F("What antifungal is preferred for febrile neutropenia not improving after 48–72 hours of antibiotics?", "An echinocandin", ["Terbinafine", "Fluconazole in every case", "No antifungal"], "The persistent high-risk fever triggers broad Candida coverage."),
        F("When can fluconazole be considered for upper-GI perforation peritonitis?", "When the patient is not septic and resistant Candida risk is low", ["Only when C. krusei is proven", "Never", "Only when urine is asymptomatic"], "Sepsis or resistant-species risk shifts preference to an echinocandin.")
      ], F("A neutropenic patient remains febrile and unstable after 72 hours of appropriate broad antibiotics. Which addition is preferred?", "An echinocandin", ["Oral terbinafine", "Fidaxomicin", "No change"], "Persistent fever plus immunosuppression supports empiric invasive-Candida coverage."), true),
      C("When to suspect disseminated candidiasis", `<p>Consider disseminated candidiasis when a critically ill patient is not improving on appropriate broad-spectrum antibiotics, has ongoing fever/instability, and has fungal risk factors.</p><p>High-yield risk cluster: central venous catheter, TPN, abdominal surgery, recent chemotherapy, recent antibiotics, dialysis, and Candida colonization at multiple sites. Multiple simultaneous risks strengthen the case for empiric therapy.</p>`, [
        F("What clinical pattern should raise suspicion for disseminated candidiasis?", "Critical illness not improving on broad antibiotics plus fungal risk factors", ["Rapid improvement with no risks", "A single asymptomatic sputum culture in a healthy person", "Uncomplicated nail fungus"], "Persistent instability in a high-risk host is the key pattern."),
        F("Are candidiasis risk factors additive?", "Yes", ["No", "Only in children", "Only for superficial infection"], "The more risk factors present, the higher the likelihood of dissemination.")
      ], F("A patient with TPN, a central line, dialysis, recent abdominal surgery, and multiple colonized sites has persistent fever despite broad antibiotics. What should be suspected?", "Disseminated candidiasis", ["Only uncomplicated cystitis", "Influenza", "Lyme disease"], "The syndrome and additive risk factors justify empiric fungal consideration."), true)
    ]),

    O("36-amphotericin-reserve", "36. Why Amphotericin B Is Reserved for the Most Severe Fungal Infections", [
      C("Very broad and fungicidal—but damages human cells", `<p>Amphotericin B binds ergosterol and cholesterol, creates membrane pores, and is fungicidal. Its spectrum includes Candida, Aspergillus, Mucorales, endemic mycoses, and most brown-black molds; it also crosses the blood-brain barrier.</p><p>Because fungal and human cell membranes share sterol features, amphotericin also damages human cells. The traditional drug earned the nickname <strong>“amphoterrible.”</strong></p>`, [
        F("Why can amphotericin B injure human cells?", "It binds sterols including cholesterol as well as fungal ergosterol", ["It targets only bacterial peptidoglycan", "It is a neuraminidase inhibitor", "It never enters human tissue"], "Its lack of perfect fungal selectivity creates toxicity."),
        F("How broad is amphotericin B's spectrum?", "Very broad across yeasts, molds, Mucorales, and endemic fungi", ["Only Candida UTI", "Only onychomycosis", "Only influenza"], "Its reach is one reason it is reserved for life-threatening disease.")
      ], F("A patient asks why amphotericin is not used for routine superficial candidiasis. What is the best answer?", "Its major toxicity is disproportionate when safer targeted agents are available", ["It has no antifungal activity", "It is oral-only", "It covers only bacteria"], "Amphotericin's broad activity comes with serious host-cell toxicity."), true),
      C("Toxicity and severe-disease role", Tbl(["Problem", "Lecture detail"], [
        ["Nephrotoxicity", "Major toxicity; avoid other nephrotoxins"],
        ["Infusion reactions", "Chest pain, dyspnea, hypoxia, abdominal pain, flushing, urticaria"],
        ["Electrolytes", "Hypokalemia, hypomagnesemia, acidosis; hypokalemia can increase digoxin toxicity"],
        ["Hematologic", "Pancytopenia"],
        ["Lipid formulations", "Reduce toxicity occurrence by about half but do not eliminate it"]
      ]) + `<p>Reserve for severe disseminated infections such as severe blastomycosis, cryptococcal meningitis, fusariosis, histoplasmosis, mucormycosis, paracoccidioidomycosis, or extracutaneous sporotrichosis. Use should be limited to infectious-disease specialists.</p>`, [
        F("What is amphotericin B's signature major toxicity?", "Nephrotoxicity", ["Tendon rupture", "C. difficile", "Only mild nausea"], "Renal toxicity is the central reason for caution."),
        F("Do lipid amphotericin formulations eliminate toxicity?", "No; they reduce it but infusion and electrolyte problems remain", ["Yes, completely", "They increase toxicity in every case", "They remove antifungal activity"], "Modern formulations may halve toxicity but remain high risk.")
      ], F("A patient has severe disseminated mucormycosis. Why is amphotericin B reasonable despite its toxicity?", "The infection is severe and amphotericin provides very broad fungicidal coverage", ["Mucorales is treated only with fluconazole", "Amphotericin has no mold activity", "The drug has no renal effects"], "This is precisely the life-threatening setting for which amphotericin is reserved."), true)
    ])
  ];
}());
