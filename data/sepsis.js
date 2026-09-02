/* Sepsis content derived only from "Sepsis 2026.pptx". */
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

  window.SEPSIS_OBJECTIVES = [
    O("01-inflammation", "1. Inflammation: Process, Mediators, Pathophysiology, and End Effects", [
      C("Inflammation begins with cell injury", `<p>Inflammation is a <strong>nonspecific response to any agent that causes cell injury</strong>. The trigger may be physical (heat/cold), chemical (concentrated acid), or microbiologic (bacterium/virus).</p>${Tbl(["Classic sign", "Meaning"], [["Calor", "Heat"], ["Dolor", "Pain"], ["Rubor", "Redness"], ["Tumor", "Swelling"]])}<div class="box-mnemonic"><span class="lbl">Four local signs</span><strong>Heat · Hurt · Red · Raised</strong></div>`, [
        F("What is inflammation?", "A nonspecific response to an agent that causes cell injury", ["A response limited to bacterial infection", "A process that never affects vessels", "A type of shock only"], "Physical, chemical, and microbiologic injury can all trigger inflammation."),
        F("Which classic term means swelling?", "Tumor", ["Calor", "Dolor", "Rubor"], "Tumor is swelling; calor is heat, dolor is pain, and rubor is redness.")
      ], F("A patient has warmth, pain, redness, and swelling around an infected nail fold. What unifies these findings?", "The local inflammatory response to cell injury", ["Septic shock is already proven", "Colonization without inflammation", "Irreversible shock"], "These are the four characteristic local signs of inflammation."), true),
      C("Three local vascular and cellular effects", Tbl(["Local effect", "Pathophysiology", "Clinical result"], [
        ["Capillary dilation", "More blood flows to the injured area", "Warmth and redness"],
        ["Increased permeability", "Leaky endothelium lets protein escape; water follows into interstitium", "Edema/swelling"],
        ["Leukocyte attraction", "Cells migrate, adhere to endothelium, demarginate into tissue, and release cytokines", "Local immune response"]
      ]), [
        F("Why does inflamed tissue swell?", "Protein escapes leaky capillaries and pulls water into the interstitial space", ["Capillaries become impermeable", "All blood flow stops instantly", "The liver stops producing proteins"], "Increased vascular permeability produces edema."),
        F("What do recruited leukocytes do after entering the interstitial space?", "Release cytokines locally", ["Stop all inflammation", "Convert into platelets", "Increase vessel impermeability"], "Migrating leukocytes amplify the local response with cytokines.")
      ], F("An inflamed leg is red, warm, and edematous. Which two vascular changes explain the pattern?", "Capillary dilation plus increased capillary permeability", ["Vasoconstriction plus impermeability", "Only platelet destruction", "Only reduced liver enzymes"], "Dilation increases flow; leakage moves protein and water into tissue."), true),
      C("Cytokines coordinate and can systemicize the response", `<p><strong>Cytokines</strong> are regulatory proteins secreted in short bursts to activate or inhibit local immune-cell actions. When produced in large quantities, they mediate a systemic inflammatory response and cause body-wide changes.</p><p>In sepsis, gram-negative endotoxin or gram-positive cell-wall products induce pro-inflammatory cytokines, especially <strong>IL-1 and TNF-alpha</strong>. These activate neutrophils and vascular endothelial cells, causing endothelial injury and vascular leak.</p>`, [
        F("What are cytokines?", "Regulatory proteins that activate or inhibit immune-cell actions", ["Only bacterial toxins", "Clotting factors only", "Antibiotics made by the liver"], "They coordinate local immunity and can drive systemic inflammation."),
        F("Which cytokines are emphasized in sepsis pathogenesis?", "IL-1 and TNF-alpha", ["Insulin and glucagon", "Albumin and bilirubin", "Erythropoietin and renin"], "Endotoxin and cell-wall products induce IL-1 and TNF-alpha.")
      ], F("A localized infection becomes associated with body-wide vasodilation and endothelial leak. What mediator shift best explains this?", "Large-scale cytokine production, especially IL-1 and TNF-alpha", ["Loss of every leukocyte", "Local scar formation only", "Reduced capillary permeability"], "High cytokine quantities turn a local response into systemic inflammation."), true),
      C("Acute inflammation recruits marrow, liver, and coagulation", `<div class="stage-flow">Pathogen/toxin recognition → inflammatory mediators → marrow leukocyte release → leaky capillaries + coagulation → systemic illness</div><ul><li>Bone marrow accelerates leukocyte production; WBCs rise and immature <strong>bands</strong> may be released.</li><li>The coagulation cascade activates and forms vascular <strong>microthrombi</strong>.</li><li>Systemic effects include malaise, anorexia, fever, and chills.</li><li>The liver produces acute-phase reactants such as <strong>CRP and ferritin</strong>.</li></ul>`, [
        F("What does a left shift with bands reflect?", "Premature release of immature WBCs from accelerated marrow production", ["Complete marrow shutdown", "Platelet production only", "Resolution of all inflammation"], "The marrow responds to inflammatory signaling by increasing leukocyte output."),
        F("Which acute-phase reactants are listed?", "CRP and ferritin", ["Troponin and BNP", "Creatinine and BUN", "INR and PTT"], "The liver produces CRP and ferritin during systemic inflammation.")
      ], F("A febrile patient has leukocytosis with bands and an elevated CRP. Which inflammatory steps explain the labs?", "Marrow acceleration and hepatic acute-phase production", ["Renal filtration only", "Loss of cytokine signaling", "Resolved inflammation"], "Marrow and liver both participate in the systemic response."), true),
      C("Exudate, tissue injury, scar—or systemic collapse", `<ul><li>Protein, leukocytes, and cellular debris collect as an <strong>exudate (pus)</strong>.</li><li>Leukocyte proteolytic enzymes cause indiscriminate local tissue destruction, releasing more mediators and worsening inflammation.</li><li>Severe/prolonged local inflammation may end in fibrous tissue, scar, or adhesions.</li><li>Progressive systemic activation can lead from SIRS to sepsis, septic shock, multiorgan failure, and death.</li></ul>`, [
        F("What forms inflammatory exudate or pus?", "Protein, leukocytes, and cellular debris", ["Only red blood cells", "Only plasma water", "Only bacteria without host cells"], "The inflammatory site accumulates these components."),
        F("What can severe prolonged local inflammation produce?", "Fibrous tissue, scar, or adhesions", ["Guaranteed septic shock", "No structural change", "Only bacteremia"], "Local healing may reduce flexibility and adhere previously separate tissues.")
      ], F("A prolonged localized inflammatory process resolves but leaves two tissue surfaces adherent. What end effect occurred?", "Fibrous scar/adhesion formation", ["Bacteremia", "qSOFA positivity", "Cardiogenic shock"], "Fibrosis is a possible local endpoint when inflammation is severe or prolonged."), true)
    ]),

    O("02-definitions", "2. Definitions: Colonization, Virulence, Pathogenicity, Bacteremia, Sepsis, and Septic Shock", [
      C("Organism and host-response definitions", Tbl(["Term", "Lecture definition"], [
        ["Colonization", "Presence of a potential pathogen <strong>without an inflammatory response</strong>"],
        ["Infection", "An invading organism causes inflammation in a normally sterile area; often named with the suffix -itis"],
        ["Virulence", "How easily a pathogen overcomes human defenses"],
        ["Pathogenicity", "How likely a given agent is to cause human disease"]
      ]), [
        F("What distinguishes colonization from infection?", "Colonization has no inflammatory response", ["Colonization always causes organ failure", "Infection occurs only in blood", "Colonization is always treated with pressors"], "Infection produces inflammation; colonization does not."),
        F("What does virulence describe?", "How easily a pathogen overcomes human defenses", ["How likely the host is to receive fluids", "Whether bacteria are in blood", "The patient's qSOFA score"], "Pathogenicity instead describes the likelihood of causing disease.")
      ], F("A potential pathogen is present on a nonsterile surface without symptoms or inflammation. Which term fits?", "Colonization", ["Septic shock", "Bacteremia", "Infection"], "Organism presence alone is colonization when no inflammatory response exists."), true),
      C("Bloodstream, organ dysfunction, and shock", Tbl(["Term", "Lecture definition"], [
        ["Bacteremia", "Viable bacteria growing in the bloodstream and detectable on blood cultures"],
        ["Sepsis", "Infection with altered organ function, such as oliguria, AKI, coagulopathy, AMS, or elevated lactate"],
        ["Septic shock", "Sepsis requiring pressors to maintain organ perfusion at MAP ≥65 mmHg, with lactate >2"]
      ]) + `<div class="box-mnemonic"><span class="lbl">Escalation</span><strong>Blood organism = bacteremia · Infection + organ dysfunction = sepsis · Sepsis + pressors/lactate = septic shock.</strong></div>`, [
        F("What converts infection into sepsis?", "Altered organ function", ["Any positive surface swab", "Fever alone", "Colonization alone"], "Sepsis requires systemic organ dysfunction."),
        F("What hemodynamic feature defines septic shock in the lecture?", "Pressors are required to maintain MAP at least 65 mmHg, with lactate above 2", ["Normal blood pressure without treatment", "Any cough", "A lactate below 2 with no organ dysfunction"], "Persistent perfusion failure despite fluid needs vasopressors.")
      ], F("A patient with pyelonephritis develops confusion, oliguria, AKI, and elevated lactate. What diagnosis is supported?", "Sepsis", ["Colonization", "Uncomplicated infection only", "Virulence"], "Infection plus distant organ dysfunction is sepsis."), true)
    ]),

    O("03-sirs-qsofa-sofa", "3. SIRS and qSOFA Criteria; Utility of SOFA", [
      C("SIRS: two of four", Tbl(["SIRS component", "Threshold"], [
        ["Heart rate", "> 90 bpm"],
        ["Respiration", "> 20/min or pCO₂ < 32 mmHg"],
        ["Temperature", "> 100.4°F (38°C) or < 96.8°F (36°C)"],
        ["WBC", "> 12,000, < 4,000, or > 10% immature bands"]
      ]) + `<p><strong>Two criteria</strong> are required. SIRS may result from infection, acute injury, or noninfectious disease. CMS still uses it, although it was phased out of the 2016 SCCM/ESICM guidelines.</p>`, [
        F("How many SIRS criteria are required?", "Two", ["One", "Three only", "All four"], "Two of the four physiologic abnormalities meet SIRS."),
        F("Which temperature satisfies SIRS?", "35.8°C", ["37.0°C", "37.2°C", "36.8°C"], "A temperature below 36°C meets the hypothermia criterion.")
      ], F("A patient has HR 108, RR 24, temperature 37.2°C, and WBC 8,000. Does the patient meet SIRS?", "Yes—tachycardia and tachypnea provide two criteria", ["No—fever is mandatory", "No—all four are required", "Yes—because the WBC is normal"], "Any two criteria are sufficient."), true),
      C("qSOFA: three bedside danger signs", Tbl(["qSOFA item", "Point"], [
        ["Respiratory rate ≥22/min", "1"],
        ["Altered mentation", "1"],
        ["Systolic blood pressure ≤100 mmHg", "1"]
      ]) + `<p>The lecture reports mortality risk of about 3% with 0–1, 18% with 2, and 24% with 3. qSOFA is validated for patients <strong>outside the ICU</strong>.</p>`, [
        F("Which three items make up qSOFA?", "RR ≥22, altered mentation, and SBP ≤100", ["Fever, WBC, and heart rate", "Lactate, creatinine, and INR", "Cough, dysuria, and rash"], "qSOFA uses three rapid bedside variables."),
        F("Where is qSOFA validated for use?", "Outside the ICU", ["Only during surgery", "Only in pediatrics", "Only after discharge"], "It is a quick screen for non-ICU settings.")
      ], F("A confused patient has RR 26 and SBP 96. What qSOFA score is present?", "3", ["0", "1", "2"], "All three qSOFA items are positive."), true),
      C("SOFA is for organ-failure assessment—not memorized arithmetic", `<p>SOFA means <strong>Sequential (Sepsis-related) Organ Failure Assessment</strong>. Its utility is to identify and track infection-related organ dysfunction and severity.</p><p>For this course, know why it is used; the objective explicitly says you do <strong>not</strong> need to calculate it or memorize its values/headings. qSOFA is the quick bedside screen, while the full SOFA framework evaluates organ failure.</p>`, [
        F("What is the purpose of SOFA in sepsis?", "Assess and track organ dysfunction", ["Identify the exact bacterial species", "Calculate fluid weight", "Replace all cultures"], "SOFA addresses the organ-failure component of sepsis."),
        F("What does the course explicitly say is unnecessary?", "Calculating SOFA or memorizing its values/headings", ["Knowing its utility", "Knowing qSOFA items", "Recognizing altered mentation"], "Focus on clinical utility rather than calculation details.")
      ], F("A learner tries to memorize every SOFA subscore. What should the course emphasis be instead?", "Understand that SOFA evaluates sepsis-related organ dysfunction", ["Ignore organ dysfunction", "Use SOFA to identify bacteria", "Use only temperature"], "The objective excludes calculation and detailed headings."), true)
    ]),

    O("04-shock", "4. Four Types and Clinical Stages of Shock", [
      C("Shock is inadequate systemic tissue perfusion", `<p>Shock is a <strong>significant reduction in systemic tissue perfusion</strong> that decreases oxygen delivery. Prolonged oxygen deprivation causes cellular and systemic derangements.</p><div class="stage-flow">Reduced perfusion → reduced oxygen delivery → cellular dysfunction → end-organ damage → multiorgan failure → death</div><p>Early changes are reversible, but rapidly become irreversible.</p>`, [
        F("What is the central physiologic problem in shock?", "Inadequate systemic tissue perfusion and oxygen delivery", ["Isolated fever", "Colonization", "Increased tissue oxygen delivery"], "All shock mechanisms converge on inadequate perfusion."),
        F("How does prolonged shock become fatal?", "Sequential cell death and end-organ failure", ["Local scar only", "Improved aerobic metabolism", "Resolution without intervention"], "Oxygen deprivation progresses from reversible dysfunction to irreversible injury.")
      ], F("A patient has worsening global hypoperfusion with rising organ dysfunction. What unifies the condition regardless of cause?", "Shock from inadequate tissue oxygen delivery", ["Colonization", "Localized inflammation only", "A normal compensatory state"], "The final common pathway is insufficient perfusion."), true),
      C("The four plumbing analogies", Tbl(["Shock type", "Lecture analogy", "Core mechanism"], [
        ["Obstructive", "A clog in the system", "Physical obstruction prevents effective blood flow"],
        ["Cardiogenic", "Pump failure", "The heart cannot provide an adequate squeeze/output"],
        ["Hypovolemic", "Nothing in the pipeline", "Insufficient effective circulating volume"],
        ["Distributive", "Expansion of pipe diameter", "Vasodilation enlarges vascular capacity; septic shock is distributive"]
      ]) + `<div class="box-mnemonic"><span class="lbl">Four causes</span><strong>Clog · Pump · Empty · Wide</strong></div>`, [
        F("Which shock type is 'pump failure'?", "Cardiogenic shock", ["Obstructive shock", "Hypovolemic shock", "Distributive shock"], "Cardiogenic shock is failure of cardiac output."),
        F("Which shock type results from pathologic vasodilation?", "Distributive shock", ["Cardiogenic shock", "Obstructive shock", "Hypovolemic shock"], "Expansion of vessel diameter creates distributive shock.")
      ], F("A septic patient has profound vasodilation and pooling of blood in veins. Which shock type is occurring?", "Distributive shock", ["Obstructive shock", "Cardiogenic shock", "Hypovolemic shock from hemorrhage"], "Septic shock is a vasodilatory distributive shock."), true),
      C("Preshock: compensated or warm shock", `<p>Preshock begins around a <strong>10% loss of effective blood volume</strong>. Rapid homeostatic compensation preserves perfusion and blood pressure.</p>${Tbl(["Pattern", "Clinical clues from the lecture scenario"], [
        ["Compensation", "Tachycardia and tachypnea with preserved blood pressure"],
        ["Neurologic", "Subtle new confusion may be present, especially in an older adult"],
        ["Skin/temperature", "Often described as warm shock; fever may reflect the infection"]
      ])}`, [
        F("What effective-volume loss is associated with preshock?", "About 10%", ["About 50%", "No loss", "Exactly 100%"], "Homeostatic mechanisms can initially compensate at this level."),
        F("What blood-pressure pattern can occur in preshock?", "Blood pressure may remain preserved despite tachycardia/tachypnea", ["Profound hypotension is mandatory", "Blood pressure is never measured", "Only bradycardia occurs"], "Compensation can temporarily maintain pressure.")
      ], F("A febrile older adult is tachycardic at 120, tachypneic at 26, has subtle confusion, but BP is 144/62. Which stage fits?", "Preshock/compensated warm shock", ["End-stage shock", "Irreversible shock", "No perfusion concern"], "The preserved BP with rapid compensation matches the lecture's preshock scenario."), true),
      C("Shock: compensation is overwhelmed", `<p>At roughly a <strong>20–25% reduction in effective blood volume</strong>, compensatory mechanisms become overwhelmed and organ dysfunction is obvious.</p><ul><li>Tachycardia and dyspnea</li><li>Restlessness and confusion</li><li>Diaphoresis</li><li>Metabolic acidosis</li><li>Oliguria</li><li>Cool, clammy skin; pale appearance; thready pulse</li><li>Blood pressure narrows/falls</li></ul>`, [
        F("Which findings characterize established shock?", "Oliguria, metabolic acidosis, restlessness, and cool clammy skin", ["Normal mentation and urine output", "Only localized redness", "No compensatory signs"], "These are clear signs of organ hypoperfusion."),
        F("What effective-volume reduction is associated with the shock stage?", "About 20–25%", ["About 1%", "Exactly 10% only", "No reduction"], "At this point compensation becomes inadequate.")
      ], F("A patient is restless and confused with RR 26, HR 120, BP 100/72, diaphoresis, pallor, and a thready pulse. Which stage fits?", "Shock", ["Preshock with complete compensation", "End-stage coma", "Colonization"], "The lecture's shock scenario shows overt organ dysfunction and failed compensation."), true),
      C("End-stage shock: irreversible injury", `<ul><li>Progressive organ dysfunction becomes irreversible and leads to death.</li><li>Urine output falls to <strong>anuria</strong>; AKI progresses to acute tubular necrosis.</li><li>Acidemia further lowers cardiac output and disrupts cellular metabolism.</li><li>Restlessness progresses to agitation, obtundation, and coma.</li><li>Gasping respirations, profound hypotension, nonpalpable peripheral pulses, and mottled extremities are ominous scenario clues.</li></ul>`, [
        F("Which renal finding marks end-stage shock?", "Anuria with AKI/ATN", ["Normal urine output", "Polyuria from improved perfusion", "Isolated proteinuria only"], "Severe sustained hypoperfusion causes irreversible tubular injury."),
        F("How does mental status progress in end-stage shock?", "Agitation to obtundation and coma", ["Confusion always resolves", "Only mild anxiety", "No CNS change"], "Worsening brain perfusion produces deepening unresponsiveness.")
      ], F("A patient has gasping respirations, BP 74/32, minimal responsiveness, mottled extremities, and no palpable radial pulse. Which stage is present?", "End-stage shock", ["Compensated preshock", "Localized inflammation", "Stable infection"], "Profound hypotension and irreversible organ failure define the final stage."), true)
    ]),

    O("05-sepsis-pathogenesis-manifestations", "5. Sepsis Pathogenesis and Cardiopulmonary, Renal, and Hematologic Manifestations", [
      C("From infection to systemic endothelial injury", `<div class="stage-flow">Infection → endotoxin/cell-wall products → IL-1 + TNF-alpha → neutrophil/endothelial activation → leaky vessels + systemic dysfunction</div><p>Without systemic manifestations, the patient has infection alone. With distant dysfunction such as AKI or altered mental status, the process has become sepsis. Continued vasodilation and hypoperfusion can progress to septic shock.</p>`, [
        F("What microbial products initiate the emphasized sepsis cytokine response?", "Gram-negative endotoxin or gram-positive cell-wall products", ["Only fungal nails", "Only host insulin", "Only platelets"], "These products induce IL-1 and TNF-alpha."),
        F("What cells are directly activated and injured by the cytokine response?", "Neutrophils and vascular endothelial cells", ["Only red cells", "Only osteocytes", "Only hepatocytes"], "Endothelial damage produces systemic vascular leak.")
      ], F("A patient with a localized infection develops AKI and confusion distant from the original site. What transition occurred?", "Infection progressed to sepsis", ["Colonization developed", "The infection resolved", "Only scar formation occurred"], "Distant organ dysfunction is the defining progression."), true),
      C("Pulmonary and CNS manifestations", Tbl(["System", "Pathophysiology", "Manifestation"], [
        ["Lungs", "Cytokine-induced pulmonary capillary leak", "Pulmonary edema/ARDS: wet, stiff lungs with impaired gas exchange"],
        ["Oxygenation", "Reduced transfer of oxygen", "Acute hypoxic respiratory failure"],
        ["Ventilation", "Reduced CO₂ excretion", "Hypercarbic respiratory failure"],
        ["CNS", "Reduced blood flow and toxin buildup", "Nonfocal confusion → lethargy → coma; early in older/cognitively impaired patients"]
      ]), [
        F("What causes ARDS in sepsis?", "Cytokine-induced pulmonary capillary permeability", ["Improved alveolar dryness", "Only bronchospasm", "Reduced vascular leak"], "Leaky pulmonary vessels create wet, stiff lungs."),
        F("What neurologic pattern is typical of sepsis?", "Nonfocal confusion progressing toward coma", ["A single fixed focal deficit only", "No mental-status change", "Only peripheral pain"], "CNS dysfunction may appear early, especially in older adults.")
      ], F("An older septic patient becomes diffusely confused and develops wet stiff lungs with low oxygen. What explains both?", "Systemic cytokine-mediated perfusion and capillary-leak injury", ["A localized skin response only", "Colonization", "Normal compensation"], "Sepsis disrupts multiple distant organs simultaneously."), true),
      C("Cardiovascular manifestation: low squeeze + wide vessels", `<ul><li>Cardiac contractile function becomes suboptimal.</li><li>Systemic vasodilation causes pressure to fall and blood to pool in veins.</li><li>Organs receive inadequate perfusion and shift toward anaerobic cellular respiration.</li><li>Lactic acid accumulates, producing an <strong>anion-gap metabolic acidosis</strong>.</li></ul>`, [
        F("Why does lactate rise in sepsis?", "Poor tissue perfusion drives anaerobic metabolism", ["Improved oxygen delivery", "Excess urine output", "Only hepatic CRP production"], "Lactic acid reflects tissue oxygen-delivery failure, though lactate is not sepsis-specific."),
        F("Which two cardiovascular changes lower perfusion in sepsis?", "Reduced cardiac squeeze and vasodilation", ["Increased squeeze and vasoconstriction", "Only tachypnea", "Only leukocytosis"], "Both pump performance and vascular tone deteriorate.")
      ], F("A septic patient becomes hypotensive with elevated lactate and an anion gap. What mechanism fits?", "Vasodilation and poor perfusion causing anaerobic lactic-acid production", ["Improved aerobic metabolism", "Localized pus only", "Normal vascular tone"], "This is the cardiovascular-metabolic pathway of septic shock."), true),
      C("Renal and hepatic hypoperfusion", Tbl(["Organ", "Sequence"], [
        ["Kidney", "Poor renal perfusion → prerenal AKI → worsening ischemia → acute tubular necrosis"],
        ["Urine", "Oliguria may progress to anuria"],
        ["Uremia", "Waste buildup worsens homeostatic disruption and mental status"],
        ["Liver", "Severe hypotension → shock liver → hepatocyte death/lysis → elevated AST and ALT"]
      ]), [
        F("What is the usual first mechanism of AKI in sepsis?", "Poor renal perfusion causing prerenal AKI", ["Primary glomerulonephritis in every case", "Excess renal blood flow", "Only medication allergy"], "Continued hypoperfusion can progress to ATN."),
        F("What laboratory pattern suggests shock liver?", "Elevated AST and ALT after severe hypotension", ["Only low WBC", "Normal liver enzymes", "Only positive nitrites"], "Ischemic hepatocyte death releases transaminases.")
      ], F("A septic patient first becomes oliguric, then develops anuria with rising creatinine after prolonged hypotension. What renal progression occurred?", "Prerenal AKI progressed to ATN", ["Normal kidney adaptation", "Isolated UTI only", "Improved filtration"], "Sustained renal ischemia causes tubular necrosis."), true),
      C("Hematologic and metabolic manifestations", `<ul><li>Usually leukocytosis with a left shift; overwhelming bacteremia or severe viral infection can produce leukopenia, especially in older adults or patients with alcoholism.</li><li>Infection may initially cause thrombocytosis, but progressive sepsis consumes platelets and produces thrombocytopenia.</li><li>Coagulation activation creates widespread microthrombi, tissue ischemia, consumption of clotting factors, and depletion of natural anticoagulants.</li><li>Gram-negative sepsis frequently causes coagulopathy; about 10% of septic-shock patients develop DIC.</li><li>Coagulopathy/thrombocytopenia increase GI-bleeding risk. Hypoglycemia may cause confusion or seizures.</li></ul>`, [
        F("Why do platelets fall in progressive sepsis?", "Platelet consumption in activated coagulation", ["Increased platelet production only", "Improved perfusion", "Urinary platelet loss"], "Microthrombi consume platelets and clotting factors."),
        F("Which severe coagulation complication occurs in about 10% of septic-shock patients?", "DIC", ["Isolated thrombocytosis", "Hemophilia A", "No coagulopathy"], "DIC is the extreme of widespread coagulation activation and consumption.")
      ], F("A septic patient shifts from high platelets to thrombocytopenia, prolonged clotting, bleeding, and tissue ischemia. What process is occurring?", "Consumptive coagulopathy progressing toward DIC", ["Simple colonization", "Resolved inflammation", "Isolated hypovolemia without coagulation activation"], "Diffuse microthrombi consume platelets and factors while causing ischemia."), true)
    ]),

    O("06-sepsis-workup", "6. Broad Sepsis Workup and Findings Suggesting UTI or Pneumonia", [
      C("History and exam localize the source", `<p>Every suspected infection starts with a thorough history and physical examination directed toward the possible source.</p>${Tbl(["History", "Exam"], [
        ["Travel/traveler exposure, sick contacts", "Lungs, heart, abdomen, neurologic system, and skin"],
        ["New/current medications and antibiotics in past 90 days", "Overall sick-versus-not-sick assessment"],
        ["Influenza, COVID, and RSV immunization status", "Inspect what cannot be reported by a confused patient"],
        ["Allergies and medication reactions", "Use local findings to direct testing"]
      ])}<p>If a hospitalized patient cannot provide history, common serious sources are skin, UTI, and pneumonia—examine skin, obtain UA/C&S, and obtain CXR.</p>`, [
        F("Which recent medication exposure matters in a sepsis history?", "Antibiotics within the last 90 days", ["Only vitamins", "No medication history", "Only topical lotion"], "Recent antibiotics alter pathogen and resistance considerations."),
        F("What three sources deserve routine attention when history is unreliable?", "Skin, urinary tract, and lungs", ["Hair, nails, and teeth only", "Only the heart", "Only the bowel"], "These are common sources of infection severe enough for hospitalization.")
      ], F("A confused hospitalized patient cannot describe symptoms. What basic source search should still occur?", "Skin exam, UA with culture, and chest X-ray", ["No testing without history", "Only stool culture", "Only an ankle X-ray"], "The lecture supplies this minimum search for common sources."), true),
      C("The first diagnostic round", `<div class="box-mnemonic"><span class="lbl">Initial sepsis set</span><strong>CBC + CMP + lactate · UA with reflex C&S · CXR · blood cultures ×2</strong></div><p>If the source remains unclear, reconsider the differential and add targeted testing: GI studies, lumbar puncture/CSF, or abdominal imaging.</p><ul><li>Lactate is a risk-stratification tool, not a sepsis-specific diagnostic test.</li><li>Procalcitonin rises with bacterial infection but is nonspecific and may rise with cancer, ESRD, or any inflammation.</li></ul>`, [
        F("What belongs in the initial sepsis workup?", "CBC, CMP, lactate, UA/C&S, CXR, and two blood-culture sets", ["Only a WBC count", "Only CT abdomen", "Only procalcitonin"], "This is the lecture's first-round testing bundle."),
        F("Is elevated lactate diagnostic of sepsis by itself?", "No; it is used for risk stratification", ["Yes, always", "Only if below 2", "It identifies the exact organism"], "Many other disorders elevate lactate.")
      ], F("A febrile patient has no clear source after history and exam. What is the appropriate first-round testing?", "CBC/CMP/lactate, UA with reflex culture, CXR, and blood cultures ×2", ["No tests until shock occurs", "Only abdominal X-ray", "Only a stool ova-and-parasite exam"], "The broad initial set screens common sources and systemic injury."), true),
      C("UTI clues on UA and culture", Tbl(["Urinalysis element", "Interpretation"], [
        ["Leukocyte esterase", "A WBC enzyme"],
        ["Nitrites", "Produced by nitrate-reducing bacteria such as E. coli and Klebsiella"],
        ["High WBCs in isolation", "Strong evidence of urinary infection"],
        ["Many epithelial cells", "Dirty/contaminated specimen—obtain a new sample"],
        ["RBCs", "May indicate glomerulonephritis or GU trauma such as stone/catheter"],
        ["Specific gravity/ketones", "Often concentrated in sepsis; ketones may reflect not eating"]
      ]) + `<p>UA is read immediately; the urine culture takes about 48 hours to become negative.</p>`, [
        F("Which UA combination most supports bacterial UTI?", "Pyuria with leukocyte esterase and possibly nitrites", ["Many epithelial cells alone", "Ketones alone", "Concentrated urine alone"], "WBCs indicate urinary inflammation; nitrites support nitrate-reducing bacteria."),
        F("What do numerous epithelial cells imply?", "The sample is contaminated and should be recollected", ["Definite pyelonephritis", "Definite bacteremia", "Normal sterile urine"], "A clean specimen should have few epithelial cells.")
      ], F("A febrile patient has positive leukocyte esterase, positive nitrites, 50–100 WBC/hpf, and few epithelial cells. What source is supported?", "Urinary tract infection", ["Pneumonia", "Skin colonization", "Cardiogenic shock"], "The clean specimen has strong pyuria and nitrate-reducing bacterial evidence."), true),
      C("Pneumonia clues and imaging", `<ul><li>CXR: look for a white infiltrate in normally air-filled dark lung.</li><li>An infiltrate alone is not pneumonia; match it with fever, cough, or preceding URI.</li><li>If the CXR is equivocal and suspicion remains, obtain a <strong>noncontrast chest CT</strong>.</li><li>Pneumonia infects the alveolar space and may follow viral injury or aspiration.</li></ul>`, [
        F("What imaging finding suggests pneumonia?", "An infiltrate on chest imaging plus the correct clinical picture", ["Any infiltrate without symptoms", "A normal CXR always", "Positive urine nitrites"], "Radiographic opacity must be interpreted with fever/cough/URI context."),
        F("What is the next imaging step if CXR is unclear?", "Noncontrast chest CT", ["Abdominal radiograph", "No further imaging", "RUQ ultrasound"], "Chest CT can clarify suspected pneumonia.")
      ], F("A febrile patient has cough after a URI, but CXR is equivocal. What should be obtained?", "Noncontrast chest CT", ["Repeat UA only", "No imaging", "Rectal culture"], "The deck recommends CT to clarify uncertain pneumonia."), true),
      C("Blood cultures and targeted follow-up", `<ul><li>Obtain two sets 15 minutes apart from different veins; each set includes aerobic then anaerobic bottles.</li><li>If a line/port is present, draw a culture from it. Consider three sets for suspected fastidious bacteremia.</li><li>Report cultures before day 5 as “no growth to date” with elapsed time—not negative.</li><li>Earlier positivity suggests higher-grade bacteremia.</li><li>Initial positive report gives morphology/Gram status; species and susceptibilities follow about 24 hours later, permitting narrowing.</li><li>When indicated: C. difficile PCR/GI PCR/stool culture/O&P; LP with CSF protein, glucose, WBC, Gram stain, and culture; CT abdomen/pelvis for fat stranding, tissue thickening, fluid, or abscess.</li></ul>`, [
        F("How are routine blood cultures collected in the lecture?", "Two sets from different veins about 15 minutes apart", ["One bottle from one vein only", "Only after five antibiotic doses", "By urinalysis"], "Separate sets improve detection and interpretation."),
        F("When is a blood culture appropriately called negative?", "After 5 days", ["Immediately after collection", "At 2 hours", "Only after 30 days"], "Before then, document no growth to date and the time interval.")
      ], F("A patient with a central line has suspected bacteremia. What culture approach is appropriate?", "Peripheral blood-culture sets plus a culture from the line", ["Line culture only", "No cultures before antibiotics", "Urine culture instead of blood"], "Line-associated infection requires sampling the device as well as peripheral blood."), true)
    ]),

    O("07-antimicrobial-treatment", "7. Sepsis Antimicrobial Therapy by Comorbidity and Source", [
      C("Appropriate antibiotics quickly—but culture first when possible", `<p><strong>Time to appropriate antimicrobial therapy is the strongest predictor of mortality.</strong> The lecture reports inappropriate selection in 32% and mortality of 34% versus 18% with appropriate therapy.</p><ol><li>Identify the suspected source and likely pathogens.</li><li>Adjust for patient factors and prior infections.</li><li>Obtain appropriate cultures before antibiotics when this does not create dangerous delay.</li><li>Use pharmacist and infectious-disease consultation.</li><li>Narrow when cultures identify the organism and sensitivities.</li></ol>`, [
        F("What is the strongest predictor of mortality emphasized in sepsis therapy?", "Time to appropriate antimicrobial therapy", ["Time to a normal CXR", "Number of visitors", "Whether fever is present"], "Both promptness and correct spectrum matter."),
        F("What should happen after species and sensitivities return?", "Narrow antibiotic coverage", ["Add every broad agent", "Ignore the results", "Stop therapy regardless of source"], "Culture-directed de-escalation reduces unnecessary exposure.")
      ], F("A septic patient is cultured and started broadly; susceptibilities later show a narrow option. What is the next step?", "De-escalate to targeted therapy", ["Continue all broad drugs indefinitely", "Repeat no cultures and add more drugs", "Stop without treating"], "Appropriate therapy evolves from empiric to culture-directed."), true),
      C("Comorbidities alter likely pathogens", Tbl(["Patient factor", "Organisms emphasized"], [
        ["Alcoholism", "Klebsiella, Streptococcus pneumoniae"],
        ["Poorly controlled diabetes", "Pseudomonas, S. pneumoniae"],
        ["Splenic dysfunction", "Encapsulated organisms: S. pneumoniae, H. influenzae, N. meningitidis, group B Strep"],
        ["Neutropenia", "Gut gram-negative rods: E. coli, Klebsiella, Proteus; plus Pseudomonas"]
      ]) + `<p>Also recognize immunosuppression: active cancer treatment, advanced HIV with CD4 &lt;200, neutropenia, systemic steroids, transplant, or immunosuppressive connective-tissue therapy. Relative immune dysfunction includes asplenia, pregnancy, ESRD, ESLD, and A1c ≥10% diabetes.</p>`, [
        F("Which organisms are especially considered with splenic dysfunction?", "Encapsulated organisms", ["Only anaerobes", "Only fungi", "Only skin flora"], "The deck lists pneumococcus, H. influenzae, meningococcus, and group B Strep."),
        F("Which organisms are highlighted with neutropenia?", "Gut gram-negative rods and Pseudomonas", ["Only Streptococcus pyogenes", "Only HSV", "Only Candida nails"], "Loss of neutrophils creates particular risk from gut GNRs and Pseudomonas.")
      ], F("A septic patient is asplenic. Which pathogens should influence empiric thinking?", "Encapsulated bacteria such as S. pneumoniae, H. influenzae, and N. meningitidis", ["Only anaerobes", "Only C. difficile", "Only parasites"], "Splenic dysfunction increases vulnerability to encapsulated organisms."), true),
      C("Source and severity decide whether to observe or treat broadly", `<p>Use the source—skin, diabetic ulcer, burn, urine, CAP, HAP/VAP, line, heart, or abdomen/bowel—to determine likely pathogens and necessary spectrum.</p><ul><li>If the patient is stable, the source is unclear, and reasonable noninfectious explanations exist, monitoring off antibiotics while awaiting cultures may be appropriate.</li><li>If the clinical picture is worrisome, give broad-spectrum empiric antibiotics.</li><li>Do not let a nonspecific presentation in an older, ESRD, diabetic, or immunocompromised patient falsely reassure you.</li></ul>`, [
        F("When may a patient be monitored off antibiotics?", "When stable with uncertain infection and plausible alternative explanations", ["During obvious septic shock", "With profound hypotension", "With febrile neutropenia"], "The lecture contrasts a stable low-risk scenario with an ill high-risk patient."),
        F("What drives source-directed antibiotic selection?", "The organisms most likely at that infection site plus patient factors", ["The patient's preferred pill color", "One regimen for every source", "Culture results are never relevant"], "Skin, urine, lung, line, heart, and abdomen do not share identical pathogen risk.")
      ], F("A healthy patient has a mild dry cough, no fever, dyspnea, sputum, appetite change, or pleuritic pain, and several sick contacts. What lecture approach is reasonable?", "Observe off antibiotics while evaluating because the picture is stable and nonspecific", ["Immediate maximal sepsis therapy", "Norepinephrine", "Three anti-Pseudomonal drugs"], "Stable patients with alternative explanations do not automatically require empiric antibiotics."), true),
      C("Broad empiric regimen when Pseudomonas is not a concern", `<p>The lecture pairs <strong>vancomycin</strong> with one broad gram-negative/beta-lactam option:</p><ul><li>A 3rd/4th-generation cephalosporin: cefepime, ceftriaxone, or cefotaxime</li><li>A beta-lactam/beta-lactamase inhibitor: piperacillin-tazobactam or ampicillin-sulbactam</li><li>A carbapenem: imipenem or meropenem</li></ul><p>Choice still depends on source, comorbidity, prior organisms, allergies, and consultant guidance.</p>`, [
        F("What is paired with vancomycin for broad empiric sepsis coverage when Pseudomonas is not a concern?", "One broad cephalosporin, inhibitor combination, or carbapenem", ["Two antivirals only", "A topical antifungal", "No gram-negative coverage"], "Vancomycin supplies gram-positive coverage while the partner broadens coverage."),
        F("Which is an example cephalosporin partner?", "Ceftriaxone", ["Cephalexin", "Cefadroxil", "No cephalosporin"], "Cefepime, ceftriaxone, and cefotaxime are listed options.")
      ], F("An ill septic patient needs broad empiric therapy, and Pseudomonas is not suspected. Which regimen matches the lecture?", "Vancomycin plus ceftriaxone", ["Oral vancomycin alone", "Metronidazole alone", "Oseltamivir plus acyclovir"], "The combination covers broad gram-positive and gram-negative possibilities."), true),
      C("When Pseudomonas is possible", `<p>Consider <strong>vancomycin plus two anti-Pseudomonal options</strong> from different groups:</p>${Tbl(["Group", "Examples"], [
        ["Cephalosporin", "Cefepime"],
        ["Carbapenem", "Imipenem or meropenem"],
        ["Beta-lactam/inhibitor", "Piperacillin-tazobactam"],
        ["Fluoroquinolone", "Ciprofloxacin"],
        ["Aminoglycoside", "Gentamicin or amikacin"],
        ["Monobactam", "Aztreonam"]
      ])}`, [
        F("Which cephalosporin supplies anti-Pseudomonal coverage in the sepsis lecture?", "Cefepime", ["Cefazolin", "Cephalexin", "Cefuroxime"], "Cefepime is the anti-Pseudomonal cephalosporin listed."),
        F("Which fluoroquinolone is the listed anti-Pseudomonal option?", "Ciprofloxacin", ["Moxifloxacin", "No fluoroquinolone", "Azithromycin"], "Ciprofloxacin is included among the Pseudomonas-active choices.")
      ], F("A neutropenic septic patient is at risk for Pseudomonas. Which empiric strategy reflects the deck?", "Vancomycin plus two anti-Pseudomonal agents from the listed groups", ["Vancomycin alone", "Ampicillin alone", "Wait five days without treatment"], "High-risk Pseudomonas concern prompts expanded combination coverage."), true)
    ]),

    O("08-fluids-perfusion", "8. Sepsis Fluids and Other Options for Maintaining Perfusion", [
      C("The sepsis fluid prescription", `<div class="box-mnemonic"><span class="lbl">Sepsis-dose fluids</span><strong>0.9% normal saline or lactated Ringer's · 30 mL/kg IV · within the first 3 hours.</strong></div><ul><li>Use ideal body weight if BMI is greater than 30.</li><li>Initial perfusion target: MAP 65 mmHg.</li><li>After boluses, continue appropriate maintenance NS or LR.</li></ul>`, [
        F("What is the initial sepsis fluid dose?", "30 mL/kg IV within 3 hours", ["3 mL/kg over 24 hours", "100 mL once", "No fluids"], "This is the lecture's sepsis-dose resuscitation."),
        F("Which fluids are used?", "0.9% normal saline or lactated Ringer's", ["Dextrose water only", "Albumin only", "Blood only"], "The deck specifies these two crystalloids.")
      ], F("An 80-kg patient needs sepsis-dose fluids. What volume is calculated?", "2,400 mL", ["240 mL", "800 mL", "8,000 mL"], "80 kg × 30 mL/kg = 2,400 mL."), true),
      C("Give the dose, but pace for the patient", `<p>The lecture illustrates faster boluses in a younger patient and slower administration in an older patient with HFrEF and CKD. The total calculated dose remains 30 mL/kg, but comorbid heart/kidney disease changes how carefully it is delivered and monitored.</p>${Tbl(["Example", "Delivery pattern"], [
        ["80-kg younger patient", "1 L wide open, 1 L over 30 minutes, 500 mL over next 2 hours; then maintenance"],
        ["70-kg patient with HFrEF/CKD", "1 L over 30 minutes, 1 L over 120 minutes; then lower maintenance rate"]
      ])}`, [
        F("What patient factors require more cautious fluid pacing?", "Heart failure and chronic kidney disease", ["Young age alone", "Normal renal function", "No comorbidities"], "These conditions increase the risk of volume overload."),
        F("If BMI is above 30, which weight may be used for the calculation?", "Ideal body weight", ["No weight", "Only height", "Twice actual weight"], "The lecture permits ideal body weight in obesity.")
      ], F("A 70-kg older patient with HFrEF and CKD needs resuscitation. What is the best lecture-based approach?", "Calculate 2,100 mL but give it more cautiously with close monitoring", ["Withhold all fluid automatically", "Give 7 liters immediately", "Use D5W only"], "Comorbidity changes pacing, not recognition of the resuscitation need."), true),
      C("Pressors when fluid is not enough—or cannot work fast enough", Tbl(["Agent", "Role"], [
        ["Norepinephrine (Levophed)", "First choice for distributive septic shock; potent vasoconstriction"],
        ["Vasopressin", "Second-line adjunct in severe septic shock"],
        ["Dobutamine", "Inotrope that reduces afterload; mainly cardiogenic shock"]
      ]) + `<p>Start a pressor if fluids fail to restore perfusion or blood pressure is too low to wait. Pressors can cause arrhythmias and myocardial ischemia.</p>`, [
        F("What is the first-choice pressor for septic distributive shock?", "Norepinephrine", ["Dobutamine", "Vasopressin alone first", "Insulin"], "Norepinephrine reverses severe vasodilation."),
        F("When should pressors be used?", "When fluids fail or hypotension is too severe to wait", ["Only after discharge", "For every stable infection", "Only for fever"], "The goal is timely restoration of organ perfusion.")
      ], F("After full sepsis-dose fluids, a patient's MAP remains 60. What is the next perfusion step?", "Start norepinephrine", ["Give no further support", "Start oral antibiotics only", "Use BiPAP solely to raise MAP"], "Persistent hypotension after fluid resuscitation requires a pressor."), true),
      C("Hematologic support when oxygen carriage or coagulation fails", Tbl(["Product", "Expected effect"], [
        ["Packed RBCs", "One unit raises hematocrit about 3% and hemoglobin about 1 g/dL"],
        ["Fresh frozen plasma", "Provides coagulation factors; usually 2–4 units based on INR; effect lasts hours"],
        ["Platelets", "One unit raises platelet count about 6,000"]
      ]) + `<p>These products do not replace crystalloid resuscitation or pressors; they address anemia, factor deficiency, or thrombocytopenia that compounds shock.</p>`, [
        F("How much does one unit of packed RBCs raise hemoglobin?", "About 1 g/dL", ["About 10 g/dL", "It lowers hemoglobin", "It has no effect"], "The accompanying hematocrit rise is about 3%."),
        F("What does FFP provide?", "Coagulation factors", ["Neutrophils", "Antibiotics", "Crystalloid volume only"], "FFP is used for factor replacement based on INR prolongation.")
      ], F("A septic patient has active bleeding with prolonged INR from consumptive coagulopathy. Which product supplies clotting factors?", "Fresh frozen plasma", ["Packed RBCs only", "Lactated Ringer's only", "Norepinephrine"], "FFP temporarily replaces consumed coagulation factors."), true)
    ]),

    O("09-respiratory-nutrition", "9. Oxygenation, Respiratory Support, and Feeding in Sepsis", [
      C("Oxygen and ABG assessment", `<ul><li>If pulse oximetry is below 92%, give supplemental oxygen and titrate to SpO₂.</li><li>An <strong>arterial blood gas</strong> is the best assessment of gas exchange when intubation may be needed.</li><li>ABG provides arterial oxygen, carbon dioxide, and pH; the lecture gives a normal pH of 7.35–7.45.</li></ul>`, [
        F("At what oxygen saturation does the lecture start supplemental oxygen?", "Below 92%", ["Below 100% in everyone", "Only below 50%", "Never"], "Low pulse oximetry prompts titrated oxygen."),
        F("What is the best test of gas exchange when intubation is possible?", "Arterial blood gas", ["Urinalysis", "CBC alone", "Blood culture"], "ABG measures oxygenation, ventilation, and acid-base status.")
      ], F("A septic patient has SpO₂ 88% and worsening work of breathing. What is the immediate respiratory approach?", "Start titrated supplemental oxygen and obtain an ABG", ["Wait without monitoring", "Give platelets", "Obtain only a urine culture"], "Hypoxemia needs oxygen and objective gas-exchange assessment."), true),
      C("When invasive ventilation is needed", `<p>Intubation and mechanical ventilation may be necessary for hypoxemic or hypercarbic respiratory failure, especially with:</p><ul><li>Respiratory rate above 30</li><li>Declining mental status or obtundation</li><li>Respiratory fatigue</li><li>Hemodynamic instability</li></ul><p>These clues indicate that gas exchange or airway protection is failing.</p>`, [
        F("Which findings support intubation in sepsis?", "RR >30, obtundation, fatigue, or hemodynamic instability", ["Normal mentation and easy breathing", "Stable SpO₂ without distress", "An isolated positive urine nitrite"], "Respiratory failure plus systemic instability supports invasive ventilation."),
        F("What types of respiratory failure may require mechanical ventilation?", "Hypoxemic or hypercarbic respiratory failure", ["Only mild cough", "Only fever", "Only leukocytosis"], "Either oxygenation or ventilation failure may require support.")
      ], F("A septic patient is obtunded, RR 34, tiring, and hemodynamically unstable. What support is likely needed?", "Endotracheal intubation and mechanical ventilation", ["Observation only", "Oral feeding immediately", "No oxygen"], "Multiple lecture triggers for invasive ventilation are present."), true),
      C("BiPAP, serial reassessment, and the heart", `<ul><li><strong>BiPAP</strong> can provide short-term noninvasive ventilatory support.</li><li>The patient must breathe spontaneously and tolerate the mask.</li><li>After intubation, serial ABGs monitor ventilation and readiness for extubation.</li><li>Bedside echocardiography can assess myocardial function; suspected ischemia warrants serial troponins and formal echocardiography.</li></ul>`, [
        F("What must a patient be able to do for BiPAP?", "Breathe independently and tolerate the mask", ["Be fully apneic", "Have no airway drive", "Remain unmonitored"], "BiPAP is noninvasive support, not a replacement for an absent respiratory drive."),
        F("How is ventilation followed after intubation?", "Serial ABGs", ["Urine cultures", "Platelet counts only", "Skin examination only"], "ABGs show whether ventilation is adequate and whether extubation is possible.")
      ], F("A cooperative patient has temporary ventilatory failure but remains alert, breathing, and hemodynamically stable. Which bridge may be tried?", "BiPAP", ["Immediate oral feeding", "No respiratory support", "FFP"], "BiPAP is a short-term option when the patient can breathe and tolerate the interface."), true),
      C("Feeding options in critical illness", `<p>Nutritional support improves some outcomes in critically ill patients. The lecture depicts two routes:</p>${Tbl(["Route", "How it is delivered"], [["Enteral nutrition", "Feeding through the gastrointestinal tract, such as a nasogastric tube"], ["Parenteral nutrition", "Intravenous nutrition when GI feeding cannot be used"]])}<p>Route choice depends on the patient's condition and ability to use the GI tract.</p>`, [
        F("What two nutrition routes are shown for septic critical illness?", "Enteral tube feeding and parenteral nutrition", ["No nutrition and oral water only", "Only intramuscular feeding", "Only subcutaneous feeding"], "The slide depicts a feeding tube and an IV nutrition bag."),
        F("Why is nutritional support considered?", "It improves some outcomes in critically ill patients", ["It replaces antimicrobial therapy", "It eliminates the need for perfusion", "It treats bacteremia directly"], "Nutrition is supportive care, not source treatment.")
      ], F("A mechanically ventilated septic patient cannot safely eat by mouth. Which support options are available?", "Enteral tube feeding or parenteral nutrition depending on GI usability", ["No nutrition is possible", "Only oral solids", "Only platelet transfusion"], "Critical illness may require tube or IV nutrition."), true)
    ]),

    O("10-glucose-steroids", "10. Hyperglycemia Treatment and the Rationale for Steroids in Septic Shock", [
      C("Control glucose carefully", `<p>Persistent hyperglycemia worsens the outcome of infection and sepsis. Use <strong>sliding-scale insulin</strong> for meticulous glucose control.</p><p>Titrate insulin upward slowly when the patient is not eating or has renal compromise, because these states increase the danger of hypoglycemia. The lecture also notes that hypoglycemia itself can cause mental-status change or seizures.</p>`, [
        F("How is sepsis-associated hyperglycemia treated in the lecture?", "Sliding-scale insulin", ["Steroids alone", "No treatment", "Glucose infusion regardless of level"], "Persistent hyperglycemia worsens outcomes."),
        F("When should insulin be titrated especially cautiously?", "When the patient is not eating or has renal compromise", ["When eating normally with normal kidneys", "Only after discharge", "Never"], "Reduced intake or clearance increases hypoglycemia risk.")
      ], F("A septic patient with CKD is not eating and remains hyperglycemic. What is the safest lecture approach?", "Use sliding-scale insulin but titrate slowly", ["Rapidly escalate without glucose checks", "Ignore hyperglycemia", "Give stress-dose steroids solely for glucose control"], "Glucose needs control, but renal compromise and fasting require caution."), true),
      C("Steroids counter severe-sepsis adrenal suppression", `<p>Steroids are generally contraindicated for routine infection, but may help in <strong>septic shock</strong> by counteracting the adrenal suppression caused by severe sepsis.</p><p>Patients already taking chronic steroids require <strong>stress-dose steroids</strong> if sepsis occurs.</p>`, [
        F("Why may steroids help in septic shock?", "They counter adrenal suppression caused by severe sepsis", ["They directly kill bacteria", "They replace fluids", "They prevent all cytokine production"], "The rationale is relative adrenal insufficiency in severe shock."),
        F("Who requires stress-dose steroids during sepsis?", "Patients taking steroids at baseline", ["Every patient with a cough", "Only patients with normal adrenal function", "No one"], "Chronic steroid exposure suppresses the normal stress response.")
      ], F("A patient on chronic systemic prednisone develops septic shock. What adjunct should be anticipated?", "Stress-dose steroids", ["Stop all steroids abruptly", "Steroids are never used in shock", "Use insulin as the only treatment"], "Baseline steroid therapy creates a need for stress replacement during sepsis."), true)
    ]),

    O("11-febrile-neutropenia", "11. Febrile Neutropenia: Definition, Infection Risk, Presentation, and Workup", [
      C("Definition: neutropenia plus a qualifying fever", Tbl(["Component", "Threshold"], [
        ["Neutropenia", "ANC <1,000 and falling after cytotoxic therapy, or ANC <500"],
        ["Single fever", "38.3°C (101°F) once"],
        ["Sustained fever", "38.0–38.2°C (100.5°F) still present 1 hour later"]
      ]) + `<p>ANC = WBC count × percentage of neutrophils on the differential. The lecture gives a healthy ANC range of 2,500–6,000.</p>`, [
        F("Which ANC automatically meets the neutropenia threshold?", "ANC below 500", ["ANC 3,000", "ANC 5,000", "ANC 10,000"], "ANC below 500 meets the definition regardless of trend."),
        F("Which fever meets the single-reading criterion?", "38.3°C (101°F)", ["37.0°C", "37.5°C", "36.0°C"], "A single temperature of 38.3°C qualifies.")
      ], F("A chemotherapy patient has ANC 420 and one temperature of 38.3°C. What diagnosis is met?", "Febrile neutropenia", ["Colonization", "No fever by definition", "Only SIRS without neutropenia"], "Both the ANC and single-fever criteria are satisfied."), true),
      C("Why neutropenia occurs and how often fever is infectious", `<ul><li>Usually follows chemotherapy, radiation therapy, or the malignancy itself.</li><li>May also occur with aplastic anemia or severe drug/toxin-induced neutropenia.</li><li>About 85% of febrile-neutropenia episodes are infectious.</li><li>A causative organism is cultured in only about 30%; the remaining 15% are noninfectious.</li></ul>`, [
        F("What is the most common clinical context for febrile neutropenia?", "Cancer and its chemotherapy/radiation treatment", ["Uncomplicated hypertension", "Isolated seasonal allergies", "A healed fracture"], "Cytotoxic treatment and malignancy suppress neutrophil production."),
        F("How often is a causative organism cultured?", "About 30%", ["About 100%", "About 85%", "Never"], "Most episodes are presumed infectious even without organism recovery.")
      ], F("A neutropenic cancer patient has qualifying fever, but cultures remain negative. Can the episode still be infectious?", "Yes—most episodes are infectious despite low culture yield", ["No—negative cultures exclude infection", "Only if a rash appears", "Only after five days"], "Culture confirmation occurs in only about 30%."), true),
      C("Risk and muted presentation", `<p>Neutropenic patients are at high risk for <strong>bacterial and fungal infection</strong>. Common portals are the <strong>skin</strong> and <strong>genital/perirectal mucosa</strong>.</p><p>Typical inflammatory signs—erythema and purulent drainage—may be absent because too few neutrophils are available to generate them. Do not let a quiet examination falsely reassure you.</p>`, [
        F("Which infection types are neutropenic patients at high risk for?", "Bacterial and fungal infections", ["Only viral infections", "Only parasites", "No infections"], "Neutrophils are essential against bacteria and fungi."),
        F("Why may erythema or pus be absent?", "Too few neutrophils are available to create the usual inflammatory response", ["Infection is impossible", "Cultures are always positive", "The patient has excess platelets"], "Low neutrophil numbers blunt visible local signs.")
      ], F("A profoundly neutropenic patient has fever and mild perirectal discomfort but no redness or drainage. How should this be interpreted?", "Possible serious infection despite muted local signs", ["Infection is excluded", "Only colonization is possible", "No workup is needed"], "Neutropenia can erase the classic inflammatory appearance."), true),
      C("Workup before antibiotics", `<ol><li>Blood cultures: 2–3 sets, 10–15 minutes apart, from peripheral veins and from a central catheter if present.</li><li>Urinalysis with culture and sensitivity.</li><li>Culture any wound or catheter discharge.</li><li>Sputum Gram stain and culture when relevant.</li><li>Stool testing for C. difficile when relevant.</li><li>CXR and a thorough pan-culture/source search; add studies based on examination.</li></ol><p>Obtain cultures before antibiotics, then begin broad therapy within one hour.</p>`, [
        F("How many blood-culture sets are obtained in febrile neutropenia?", "Two to three sets", ["None", "One bottle only", "Ten sets"], "They are drawn 10–15 minutes apart, including catheter cultures when relevant."),
        F("What imaging is part of the broad initial search?", "Chest X-ray", ["Routine brain MRI for all", "No imaging", "Only ankle ultrasound"], "Pneumonia may be clinically subtle in neutropenia.")
      ], F("A neutropenic patient with a central line presents with fever. Which cultures should be obtained before antibiotics?", "Peripheral blood sets plus a culture from the central line", ["Only urine culture", "Only the line with no peripheral cultures", "No cultures"], "Both peripheral and catheter sources must be assessed."), true)
    ]),

    O("12-febrile-neutropenia-treatment", "12. Febrile Neutropenia Treatment, Team, and Prognosis", [
      C("Protect barriers and reduce exposure", `<ul><li>Meticulous skin and oral care.</li><li>Avoid rectal temperatures, examinations, or other rectal manipulation; begin a bowel regimen.</li><li>Neutropenic precautions: gown, gloves, mask, dedicated equipment, and meticulous handwashing.</li><li>Sick providers should not enter; no flowers or plants.</li><li>No raw food, fresh produce/meat, unpasteurized dairy, deli food, raw/partly cooked eggs, or uncooked peppers.</li></ul>`, [
        F("Which examination practice should be avoided?", "Rectal manipulation", ["Oral examination", "Skin inspection", "Chest auscultation"], "The perirectal mucosa is a major portal and injury risk."),
        F("Which room item is prohibited under neutropenic precautions?", "Flowers and plants", ["Dedicated equipment", "Hand sanitizer", "Protective gowns"], "Plants may carry organisms dangerous to a profoundly immunocompromised patient.")
      ], F("A nurse prepares to take a rectal temperature in febrile neutropenia. What should happen?", "Avoid rectal manipulation and use another route", ["Proceed because it is preferred", "Add fresh flowers first", "Stop skin care"], "Rectal trauma can breach a common infection portal."), true),
      C("Antibiotics now; antifungal if fever persists", `<div class="stage-flow">Cultures → broad empiric antibiotics within 1 hour → reassess → persistent fever after 4–5 days of appropriate therapy → add empiric antifungal</div><p>Therapy is urgent even when classic infection signs or positive cultures are absent.</p>`, [
        F("How soon should broad empiric antibiotics begin?", "Within 1 hour of cultures", ["After 4–5 days", "After organism identification only", "At the next clinic visit"], "Outcome depends on rapid appropriate therapy."),
        F("When is empiric antifungal therapy added?", "If fever persists after 4–5 days of appropriate antibiotics", ["Immediately for every afebrile patient", "Only after neutrophils normalize", "Never"], "Persistent fever raises concern for fungal infection.")
      ], F("Cultures are obtained from a febrile patient with ANC 300. What is the next immediate step?", "Start broad-spectrum empiric antibiotics within one hour", ["Wait several days for final cultures", "Discharge without therapy", "Give only an antifungal"], "Delay in empiric antibacterial therapy worsens prognosis."), true),
      C("The treatment team and G-CSF", `<ul><li>Strongly consider infectious-disease consultation to guide antimicrobial therapy.</li><li>Consult the treating oncologist.</li><li>Filgrastim (Neupogen) and pegfilgrastim (Neulasta) are G-CSFs that stimulate neutrophil production, maturation, migration, and cytotoxicity.</li><li>Routine G-CSF use in febrile neutropenia is controversial; hematology-oncology decides whether selected cancer patients warrant it.</li></ul>`, [
        F("Which specialists should participate?", "Infectious disease and the treating oncologist", ["Only dermatology", "No consultants", "Only orthopedics"], "The episode requires both antimicrobial and cancer-treatment expertise."),
        F("Who determines whether G-CSF is warranted?", "Hematology-oncology", ["The patient alone", "Radiology", "No one because it is always routine"], "Routine use is controversial and reserved for selected patients.")
      ], F("A cancer patient with febrile neutropenia is considered for filgrastim. Who should guide that decision?", "The hematology-oncology team", ["No specialist because every patient receives it", "Only respiratory therapy", "The microbiology lab"], "G-CSF is not automatic and depends on oncology judgment."), true),
      C("Prognosis follows neutrophil recovery and antibiotic speed", `<ul><li>Prognosis depends on recovery of adequate neutrophil numbers.</li><li>It is directly related to rapid initiation of appropriate empiric antibiotics.</li><li>Mortality ranges from <strong>4–30%</strong>.</li><li>Serious medical complications occur in more than <strong>20%</strong>.</li><li>Cancer treatment is interrupted until recovery.</li></ul>`, [
        F("What two factors most directly shape febrile-neutropenia prognosis?", "Neutrophil recovery and rapid appropriate empiric antibiotics", ["Whether cultures are always positive", "Room color and diet preference", "Only the initial WBC count"], "Host recovery and treatment timing dominate outcome."),
        F("What mortality range is reported?", "4–30%", ["0%", "50–100%", "Exactly 1%"], "Risk varies widely with patient and episode severity.")
      ], F("A febrile-neutropenia patient receives delayed inadequate antibiotics and ANC remains profoundly low. How should prognosis be viewed?", "Worse because both key prognostic factors are unfavorable", ["Excellent because cultures may be negative", "Unaffected by antibiotic timing", "Guaranteed recovery"], "Rapid appropriate therapy and neutrophil recovery are the central prognostic variables."), true)
    ])
  ];
}());
