/* Infectious Disease Labs content derived only from "Infectious Disease Labs.pptx". */
(function () {
  "use strict";

  var questionSequence = 0;
  function F(prompt, answer, distractors, explanation) {
    var correct = questionSequence++ % 4;
    var choices = (distractors || []).slice(0, 3);
    while (choices.length < 3) choices.push("Not supported by the lecture");
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

  window.ID_LABS_OBJECTIVES = [
    O("01-definitions", "1. Normal Flora, Carrier State, and Opportunistic Pathogens", [
      K("Normal flora: helpful residents with context-dependent risk", `<p><strong>Normal flora</strong> are bacteria and fungi that permanently reside at sites such as the skin, oropharynx, colon, and vagina. They usually maintain health in a symbiotic relationship.</p>${Tbl(["Usual setting", "Clinical meaning"], [
        ["Usual anatomic site", "Generally nonpathogenic and part of the healthy microbiome"],
        ["A different body site", "The same organism may become a pathogen"],
        ["Immunocompromised host", "Normal residents can cause disease"],
        ["Normal flora suppressed", "Pathogens may overgrow and cause disease"]
      ])}`, "What best defines normal flora?", "Permanent bacterial and fungal residents of certain body sites", ["Any organism temporarily found in blood", "Only organisms that always cause disease", "A recovered patient who still spreads infection"], "Candida is present in its usual location without symptoms. Which term best describes it?", "Normal flora", ["Carrier state", "Acid-fast bacillus", "Sterile-site infection"], true),
      K("Body sites are not microbiologically equivalent", Tbl(["Commonly colonized", "Normally sterile"], [
        ["Skin, mouth/oropharynx, colon, vagina", "Central nervous system and blood"],
        ["Nose/nasopharynx and outer urethra", "Lower bronchi and alveoli"],
        ["Site-specific organisms vary in number and kind", "Liver, spleen, kidneys, and bladder"]
      ]) + M("Interpret by location", "A familiar organism in the wrong place can become clinically important"), "Which site is normally sterile according to the lecture?", "Blood", ["Skin", "Colon", "Mouth"], "A usual skin organism is recovered from a normally sterile site. What principle should guide interpretation?", "Normal flora can be pathogenic outside its usual anatomic location", ["Every recovered organism is harmless", "Sterile sites contain permanent flora", "Only fungi can change roles"], true),
      K("Carrier state: harboring and potentially spreading", `<p>A person in a <strong>carrier state</strong> harbors a potential pathogen and can be a source of infection for others. The term commonly describes either an <strong>asymptomatic infection</strong> or someone who has recovered but continues to carry and potentially spread the organism.</p>`, "What distinguishes a carrier state?", "The person harbors a potential pathogen and can spread it", ["The person has only normal flora", "The organism is found only in a sterile site", "The person must have active symptoms"], "A patient feels well after recovering but continues to carry and shed the organism. What is this?", "Carrier state", ["Normal flora", "MIC testing", "Opportunistic overgrowth"], true),
      K("Opportunists emerge when balance changes", `<p><strong>Opportunistic pathogens</strong> may be part of a healthy bacterial or fungal microbiome but become pathogenic when that balance is disturbed.</p>${Tbl(["Term", "Core idea"], [
        ["Normal flora", "Permanent residents that usually support health"],
        ["Carrier state", "A person harbors a potential pathogen and may transmit it"],
        ["Opportunistic pathogen", "A microbiome member becomes pathogenic when conditions permit"]
      ])}${M("Three-way contrast", "Flora = resident · Carrier = transmitter · Opportunist = imbalance")}`, "What change allows an opportunistic pathogen to cause disease?", "The healthy microbiome is brought out of balance", ["The organism is always eliminated", "The host becomes a carrier only after recovery", "The blood develops normal flora"], "An immunocompromised patient develops disease from an organism normally present in the microbiome. How is it classified?", "Opportunistic pathogen", ["Carrier state", "Normal sterile-site flora", "Gram stain reagent"], true)
    ]),

    O("02-specimen-sources", "2. Sources for Testing and Culture", [
      K("Eight clinical specimen sources", Tbl(["Sources named in the lecture", "Sources named in the lecture"], [
        ["Blood", "Urine"],
        ["Sputum", "Wound"],
        ["Bone", "CSF"],
        ["Ascites", "Pleural fluid"]
      ]) + M("Source set", "Blood · Urine · Sputum · Wound · Bone · CSF · Ascites · Pleural fluid"), "Which is a testing source named in the lecture?", "Pleural fluid", ["Hair color", "Visual acuity", "Blood pressure"], "Pneumonia with a pleural collection is being evaluated. Which listed source could be sampled?", "Pleural fluid", ["Bone only", "Urine only", "Skin color"], true),
      K("Choose testing by source and suspected pathogen", Tbl(["Clinical area", "Lecture approach"], [
        ["Bacteria", "Obtain the appropriate source, then stain/culture/test as needed"],
        ["Skin fungus", "Direct microscopy of lesion scrapings in 10% KOH"],
        ["Other fungal infection", "Sputum or CSF may undergo microscopy, culture, and antibody/antigen testing"],
        ["Intestinal parasite", "Stool ova and parasite microscopy is most common"],
        ["Virus", "Special culture requirements or molecular/serologic testing"]
      ]), "What determines the laboratory approach for a suspected parasite?", "The specimen source and suspected parasite", ["The same test is used for every parasite", "Only blood can be examined", "Culture always replaces microscopy"], "A clinician suspects an intestinal parasite. Which specimen and approach fit the lecture?", "Stool ova and parasite microscopy", ["Pleural fluid Gram stain only", "Bone culture only", "Skin KOH without scrapings"], true)
    ]),

    O("03-five-steps", "3. The Five Steps to Identify a Bacterium", [
      K("The five-step identification pathway", Tbl(["Step", "Purpose"], [
        ["1. Obtain", "Collect an appropriate patient specimen"],
        ["2. Stain", "Observe the specimen microscopically for organisms"],
        ["3. Culture", "Apply it to media and allow organisms to grow"],
        ["4. Identify", "Use chemical, molecular, or antibody-based tests"],
        ["5. Susceptibility", "Test how effectively antibiotics inhibit the bacterium"]
      ]) + M("Workflow", "Obtain → Stain → Culture → Identify → Susceptibility"), "What is the correct five-step sequence?", "Obtain, stain, culture, identify, susceptibility", ["Culture, treat, stain, obtain, discharge", "Stain, susceptibility, obtain, culture, identify", "Identify, obtain, susceptibility, stain, culture"], "A specimen has just been collected. What is the next numbered step in the lecture workflow?", "Stain the specimen", ["Issue a final susceptibility report", "Perform Western blot first", "Skip directly to treatment selection"], true),
      K("Step 1—obtain the right sample", `<p>Collect a sample from the <strong>appropriate source</strong> being investigated. Some samples need staining, culture, and susceptibility testing; others, such as a <strong>wet prep</strong>, can be observed directly.</p>`, "What is the main requirement when obtaining a sample?", "Use the appropriate source for the infection being investigated", ["Use blood for every infection", "Culture every sample before observing it", "Begin with susceptibility testing"], "Vaginal fluid is being evaluated immediately by microscopy. Which route through step 1 fits?", "Prepare a wet prep for direct observation", ["Wait 3–10 days before viewing", "Perform MIC before microscopy", "Use acid-fast culture only"], true),
      K("Step 2—stain for an early visual category", `<p>Staining lets the clinician observe a specimen under the microscope for evidence of organisms. The lecture emphasizes <strong>Gram stain</strong> for broad bacterial grouping and <strong>acid-fast stain</strong> when mycobacteria are suspected.</p>${M("Stain asks", "What can we see, and which broad group does it resemble?")}`, "Which step provides early microscopic evidence and broad bacterial grouping?", "Staining", ["Susceptibility", "Carrier-state assessment", "Antibiotic administration"], "A respiratory specimen may contain Mycobacterium. Which step and stain should be prioritized?", "Step 2 with an acid-fast stain", ["Step 5 with KOH", "Step 1 with ELISA only", "Step 3 with no specialized method"], true),
      K("Step 3—culture: growth, isolation, and delay", Tbl(["Benefit", "Limitation/timing"], [
        ["Uses site-specific media and protocols", "Colon, blood, and urine require different approaches"],
        ["Streaking plates isolates colonies", "Results generally take 3–10 days depending on the organism"],
        ["Produces growth for later identification/testing", "You must know what you are looking for to culture correctly"]
      ]), "How long may bacterial culture results take in the lecture?", "About 3–10 days depending on the organism", ["Always less than one minute", "Exactly 30 days", "Culture has no incubation time"], "A clinician orders the same culture medium for every specimen without considering the suspected organism. Which limitation was ignored?", "Correct culture requires knowing what you are looking for", ["Cultures never isolate colonies", "All sites use identical protocols", "Stains take 3–10 days"], true),
      K("Step 4—identify the causative organism", Tbl(["Identification family", "Examples from the lecture"], [
        ["Chemical", "Biochemical/chemical tests"],
        ["Molecular", "DNA probes and PCR"],
        ["Antibody-based", "Agglutination or immunofluorescence"],
        ["Immunoassay/blot", "ELISA or Western blot"]
      ]), "At which step are DNA probes, PCR, ELISA, or Western blot used to name the organism?", "Step 4—identify the organism", ["Step 1—obtain", "Step 2—stain only", "Step 5—susceptibility only"], "Culture has produced colonies, but the organism is still unknown. What is the next step?", "Use identification tests", ["Report it susceptible without testing", "Discard the sample", "Call it normal flora regardless of source"], true),
      K("Step 5—connect the organism to antibiotic activity", `<p>After the organism is positively identified, <strong>susceptibility testing</strong> assesses how it responds to different antibiotics. The MIC is translated into a report listing agents as <strong>R, I, or S</strong>.</p>`, "When is susceptibility testing performed in the lecture sequence?", "After the organism has been positively identified", ["Before a specimen is obtained", "Instead of all identification", "Only after every antibiotic has failed"], "A culture identifies a bacterium. What laboratory step most directly guides which antibiotic may work?", "Susceptibility testing", ["Wet prep alone", "Carrier-state history", "KOH skin scraping"], true),
      K("Culture timing versus urgent empiric treatment", Tbl(["Situation", "Action"], [
        ["Bloodstream infection suspected and time permits", "Draw blood cultures before antibiotics whenever possible"],
        ["Empiric treatment is an emergency", "Start antibiotics; draw blood cultures as soon as possible afterward"]
      ]) + M("Priority rule", "Culture first when possible—but never delay emergency empiric treatment"), "When should blood cultures ideally be drawn?", "Before antibiotics whenever possible", ["Only after antibiotics are completed", "Only if the patient improves", "After MIC results already exist"], "A patient needs emergency empiric antibiotics for suspected sepsis. Cultures have not yet been drawn. What should happen?", "Start treatment and draw blood cultures as soon as possible", ["Delay all antibiotics until culture results return", "Skip blood cultures permanently", "Use a wet prep instead"], true)
    ]),

    O("04-direct-microscopy", "4. Direct Microscopy and Wet Preparations", [
      K("Wet prep procedure", Tbl(["Order", "Action"], [
        ["1", "Place a drop of saline in the middle of a glass slide"],
        ["2", "Mix a small amount of vaginal fluid into the saline"],
        ["3", "Overlay a coverslip"],
        ["4", "Examine directly under the microscope"]
      ]) + M("Wet prep", "Saline → specimen → coverslip → direct look"), "What liquid begins the wet-prep procedure?", "A drop of saline", ["10% KOH for every wet prep", "Blood agar", "Alkaline phosphatase"], "Vaginal fluid needs immediate direct microscopy. What preparation should be used?", "Mix it into saline on a slide, add a coverslip, and examine", ["Wait for a 10-day blood culture", "Run MIC first", "Perform Western blot without a specimen"], true),
      K("Direct visualization can answer before culture", `<p>Some specimens require further staining, culture, and susceptibility testing. Others can be assessed by <strong>direct observation</strong>. Wet preparations let the examiner look immediately for visible evidence in the original specimen.</p>${Tbl(["Direct method", "Example in the lecture"], [
        ["Saline wet prep", "Vaginal fluid"],
        ["10% KOH direct microscopy", "Scrapings from a suspected fungal skin lesion"],
        ["Stool O&P microscopy", "Intestinal parasites such as amoeba, Giardia, or worms"]
      ])}`, "What is a key advantage of direct microscopy?", "The original specimen can be examined directly without waiting for culture", ["It always gives antibiotic susceptibility", "It makes every culture unnecessary", "It requires 3–10 days"], "A result is needed from a preparation that can be viewed immediately. Which broad approach fits?", "Direct microscopy", ["Culture incubation only", "MIC dilution only", "Western blot confirmation only"], true)
    ]),

    O("05-staining", "5. Acid-Fast and Gram Staining", [
      K("Gram stain: color plus shape", Tbl(["Finding", "Meaning"], [
        ["Purple", "Gram-positive bacterium"],
        ["Pink", "Gram-negative bacterium"],
        ["Cocci", "Spherical shape"],
        ["Bacilli", "Rod shape"]
      ]) + M("Color code", "Positive = Purple · Negative = Pink"), "What color are gram-positive bacteria?", "Purple", ["Pink", "Light blue only", "Colorless by definition"], "Microscopy shows pink rods. How should they be described?", "Gram-negative bacilli", ["Gram-positive cocci", "Acid-fast cocci", "Gram-positive bacilli"], true),
      K("Use acid-fast staining for suspected mycobacteria", `<p>Mycobacteria are aerobic <strong>acid-fast bacilli</strong> and stain poorly with standard Gram-stain dyes. The lecture examples are <strong>Mycobacterium tuberculosis</strong>, <strong>Mycobacterium leprae</strong>, and other mycobacteria in immunocompromised patients.</p>`, "Why is acid-fast staining used for mycobacteria?", "They stain poorly with dyes used in the Gram stain", ["They are spherical gram-positive cocci", "They can be seen only by wet prep", "They require no microscopy"], "Tuberculosis is suspected in a patient. Which stain is most appropriate?", "Acid-fast stain", ["Gram stain alone", "10% KOH skin scraping", "ELISA color reaction only"], true),
      K("Read the acid-fast result and plan culture", `<p>On acid-fast staining, AFB appear <strong>red to bright pink against a light-blue background</strong>. Mycobacteria must also be cultured on <strong>specialized media</strong>.</p>${M("AFB image", "Bright pink rods on pale blue → acid-fast bacilli")}`, "What does a positive acid-fast stain look like?", "Red-to-bright-pink bacilli on a light-blue background", ["Purple cocci on a pink background", "Colorless rods only", "Green fungi on blood agar"], "Bright-pink rods are seen against light blue. What additional culture requirement applies?", "Use specialized media", ["Use any site medium without modification", "No culture can be performed", "Use only saline wet prep"], true)
    ]),

    O("06-mic-process", "6. The MIC Testing Process", [
      K("MIC asks how little antibiotic stops visible growth", `<p>The <strong>minimum inhibitory concentration (MIC)</strong> is the lowest concentration of the antibiotic being tested that <strong>inhibits visible growth</strong> of the organism. Testing occurs after an organism has been isolated and identified.</p>${M("MIC", "Minimum concentration that Inhibits visible Culture growth")}`, "What does MIC measure?", "The lowest antibiotic concentration that inhibits visible organism growth", ["The highest dose a patient can tolerate", "The time required to stain a specimen", "The number of organisms in normal flora"], "Visible growth stops at the lowest tested concentration of 2 µg/mL. What does that concentration represent?", "The MIC", ["The carrier state", "The culture source", "The antibody titer"], true),
      K("Convert the measured MIC into an R/I/S report", Tbl(["Reported category", "Meaning in the lecture"], [
        ["R—Resistant", "The organism will not respond using standard dosing"],
        ["I—Intermediate", "The organism may respond when doses higher than standard are used"],
        ["S—Sensitive", "The organism will most likely respond using non-life-threatening doses"]
      ]), "Into which categories is the MIC translated?", "Resistant, intermediate, or sensitive", ["Acute, chronic, or latent", "Positive, negative, or carrier", "Cocci, bacilli, or fungi"], "A susceptibility report lists several antibiotics with letters R, I, and S. What generated those categories?", "MIC susceptibility testing", ["Wet-prep saline", "Normal-flora screening", "A sexual history"], true)
    ]),

    O("07-mic-interpretation", "7. Interpret MIC Results and Apply Treatment Recommendations", [
      K("R means standard dosing is not expected to work", `<p>A result of <strong>resistant (R)</strong> means standard dosing is not expected to produce a response. When another tested option is sensitive, the report supports selecting the sensitive agent instead.</p>`, "What does R mean on a susceptibility report?", "The organism will not respond to standard dosing", ["Standard dosing is most likely effective", "The organism requires no treatment", "The sample contains IgM"], "Drug A is R and Drug B is S. Based only on the lecture categories, which is the supported choice?", "Drug B", ["Drug A", "Both are equally supported", "Neither category informs treatment"], true),
      K("I may require more than standard dosing", `<p><strong>Intermediate (I)</strong> means the organism may be treated with doses <strong>higher than standard</strong>. It is not the same assurance as a sensitive result.</p>`, "What does I imply?", "The organism may respond to higher-than-standard dosing", ["The organism always responds to standard dosing", "The organism cannot respond at any dose", "The test is automatically negative"], "An antibiotic is reported I. Which interpretation matches the lecture?", "Effect may require doses higher than standard", ["It is guaranteed at standard dose", "It is completely resistant by definition", "It indicates normal flora"], true),
      K("S is the most favorable laboratory category", `<p><strong>Sensitive (S)</strong> means the organism will most likely respond to the antibiotic at <strong>non-life-threatening doses</strong>. MIC interpretation connects the laboratory result to treatment selection.</p>${M("Treatment reading", "Prefer S · I may need higher dosing · R will not respond to standard dosing")}`, "Which category predicts response at non-life-threatening doses?", "Sensitive", ["Resistant", "Intermediate only", "Carrier"], "Three agents are reported R, I, and S. Which result most directly supports usual effective treatment?", "The sensitive agent", ["The resistant agent", "The carrier-state result", "The Gram-stain color alone"], true)
    ]),

    O("08-koh", "8. KOH Testing for Fungal Infection", [
      K("If it is scaly, scrape it", `<p>A suspected <strong>fungal skin lesion</strong> can be evaluated by direct microscopy. Place lesion scrapings in <strong>10% KOH</strong> and look directly for fungal elements.</p>${M("Lecture phrase", "If it’s scaly, scrape it")}`, "When is a KOH preparation appropriate?", "When a fungal skin lesion is suspected", ["For every bloodstream infection", "To determine bacterial MIC", "To stage antibody titers"], "A patient has a scaly lesion suspicious for superficial fungus. What test fits?", "Scrape the lesion and examine it in 10% KOH", ["Draw blood only for Western blot", "Use acid-fast stain for cocci", "Perform antibiotic susceptibility first"], true),
      K("Match the fungal specimen to the approach", Tbl(["Suspected fungal site", "Testing described"], [
        ["Skin", "Direct microscopy of scrapings in 10% KOH"],
        ["Sputum or CSF", "Microscopy, culture, and antibody/antigen testing"]
      ]) + `<p>A confirming KOH preparation is one in which <strong>fungal elements are directly demonstrated</strong> in the lesion scrapings.</p>`, "What confirms a positive KOH preparation?", "Direct visualization of fungal elements in the scrapings", ["A resistant MIC category", "Pink bacterial cocci", "No visible material"], "Possible fungal meningitis is being evaluated. Which lecture approach applies rather than a skin KOH scraping?", "CSF microscopy, culture, and antibody/antigen testing", ["Saline vaginal wet prep only", "Stool O&P only", "No laboratory testing"], true)
    ]),

    O("09-special-tests", "9. Molecular and Serologic Laboratory Tests", [
      K("DNA probe hybridization: a labeled complementary match", `<p>Small DNA fragments from a specific pathogen are labeled with detectable compounds and added to the patient specimen. If the pathogen is present, the probe <strong>hybridizes to its complementary DNA strand</strong>, permitting rapid diagnosis.</p>${M("Probe logic", "Known labeled sequence + complementary target = attachment and detection")}`, "What event makes a DNA probe test positive?", "The labeled probe attaches to complementary pathogen DNA", ["Every probe binds every organism", "The specimen becomes gram positive", "Visible growth stops at the MIC"], "A labeled pathogen-specific fragment binds its complement in a specimen. What method is being used?", "DNA probe hybridization", ["KOH preparation", "Wet prep", "Antibiotic susceptibility"], true),
      K("PCR supplies specificity and amplification", Tbl(["PCR component/action", "Role"], [
        ["Two primers", "A specific pair of oligonucleotides for the target"],
        ["Heat", "Separates DNA strands"],
        ["Cooling", "Allows primers to bind complementary target DNA if present"],
        ["Heat-stable DNA polymerase", "Replicates DNA from the primer attachment point"],
        ["Repeated cycles", "Exponentially increase target fragments for detection"]
      ]), "Which two special reagents are emphasized for PCR?", "Primers and heat-stable DNA polymerase", ["KOH and saline", "Antigen and MIC", "Blood agar and IgG"], "After heating separates DNA, why is the mixture cooled?", "To allow primers to attach to complementary target DNA", ["To stain gram-positive cells purple", "To stop all replication", "To create fungal scrapings"], true),
      K("Electrophoresis helps identify amplified fragments", `<p>After repeated PCR cycles exponentially increase the pathogen fragments, the amplified material can be identified by <strong>electrophoresis</strong> or by <strong>DNA probing</strong>.</p>`, "What may identify fragments after PCR amplification?", "Electrophoresis or DNA probing", ["Wet prep only", "MIC alone", "KOH skin scraping only"], "A PCR reaction has produced many copies of the target. What is a next identification method from the lecture?", "Electrophoresis", ["Blood culture susceptibility only", "Carrier-state assessment", "Gram morphology alone"], true),
      K("Real-time PCR watches fluorescence accumulate", `<p>Real-time PCR uses the PCR process plus a <strong>fluorescence-labeled probe</strong> that binds target DNA between the primers. Fluorescence accumulates with successive cycles; a rise beyond the minimum threshold is considered <strong>positive</strong>. The lecture example is testing stool for <strong>C. difficile</strong>.</p>`, "What makes real-time PCR positive?", "Fluorescence increases beyond a minimum threshold", ["The sample remains nonfluorescent", "A culture plate turns purple", "IgG disappears"], "During repeated cycles, fluorescence crosses the assay threshold. How is the sample interpreted?", "Positive", ["Resistant", "Indeterminate Western blot", "Normal flora"], true),
      K("Serology requires one known component", Tbl(["Known reagent", "What the test can detect"], [
        ["Known antigen", "Patient antibody in serum"],
        ["Known antibody", "Pathogen antigen in a patient specimen"]
      ]) + M("Serology rule", "One side of the antigen–antibody pair must be known"), "What must be known in a serologic test?", "Either the antigen or the antibody", ["Both must always be unknown", "Only the MIC", "Only the Gram-stain color"], "Known influenza antigen is mixed with patient serum. What is the test looking for?", "Patient antibody to influenza", ["Bacterial MIC", "Acid-fast bacilli", "Fungal hyphae in KOH"], true),
      K("Antibody detection and titers", Tbl(["Concept", "Lecture interpretation"], [
        ["Antibody detection", "Purified antigen binds patient antibody; resulting agglutination may be visible or fluorescent"],
        ["IgM titer", "Rises and falls during the acute phase"],
        ["IgG titer", "Begins during the acute phase and extends beyond resolution"]
      ]) + M("Time cue", "IgM = acute rise/fall · IgG = grows beyond resolution"), "Which antibody rises and falls during the acute phase?", "IgM", ["IgG only", "Antigen", "DNA polymerase"], "A titer remains present beyond resolution after beginning in the acute phase. Which class fits?", "IgG", ["IgM only", "MIC", "KOH"], true),
      K("Antigen detection reverses the known reagent", `<p>For antigen detection, the patient specimen may contain pathogen <strong>antigens</strong>. Purified known <strong>antibodies</strong> are labeled with fluorescent dyes or color-producing enzymes. If antigen is present, binding and agglutination occur and the sample is positive.</p>`, "What is the known reagent in an antigen-detection test?", "Purified labeled antibody", ["Unknown bacterial MIC", "Unlabeled culture media only", "Patient IgM as the only possible reagent"], "A labeled antibody binds antigen in cells from a lesion and produces a detectable signal. What is being detected?", "Pathogen antigen", ["Antibiotic susceptibility", "Normal flora location", "Bacterial shape only"], true),
      K("ELISA is the screening tool", `<p>In the lecture ELISA/EIA, patient antibodies bind specific antigens. An anti-human IgG antibody linked to <strong>alkaline phosphatase</strong> binds the complex; added substrate produces a measurable color reaction.</p>${Tbl(["ELISA result", "Interpretation"], [
        ["No color", "Negative"],
        ["Color", "Positive screening result; false positives can occur"],
        ["More color development", "More antibody–antigen complexes"]
      ])}`, "What is ELISA’s role in the lecture?", "Screening", ["Final susceptibility testing", "Acid-fast culture", "Wet-prep microscopy"], "An ELISA develops color. How should it be interpreted?", "A positive screening result that may be falsely positive", ["A definitive resistant MIC", "A negative result", "Proof that no antibody–antigen complexes exist"], true),
      K("Western blot is the confirmatory pattern test", Tbl(["Western blot step", "Purpose"], [
        ["Electrophoresis", "Separate known antigen proteins by weight"],
        ["Transfer", "Move antigen groups to paper"],
        ["Add patient serum", "Antibodies bind matching antigen proteins"],
        ["Add enzyme and substrate", "Produce colored bands"]
      ]) + Tbl(["Band result", "Interpretation"], [
        ["No colored bands", "Negative"],
        ["Disease-specific band pattern", "Positive"],
        ["Bands present but pattern requirements unmet", "Indeterminate"]
      ]) + M("Pair them", "ELISA screens · Western blot confirms"), "What is Western blot’s role in the lecture?", "Confirmatory testing", ["Initial specimen collection", "MIC determination", "Wet-prep preparation"], "A blot has colored bands, but they do not match the required disease-specific pattern. What is the result?", "Indeterminate", ["Positive", "Negative because no bands exist", "Sensitive"], true)
    ])
  ];
})();
