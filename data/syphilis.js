/* Syphilis content derived only from "Syphilis 2026- Student.pptx". */
(function () {
  "use strict";
  function C(title, html, highYield) { return { title: title, html: html, body: title, highYield: !!highYield }; }
  function Q(prompt, choices, correct, explanation, card) { return { prompt: prompt, choices: choices, correct: correct, explanation: explanation, card: card }; }

  window.SYPHILIS_OBJECTIVES = [
    {
      id: "01-transmission", title: "1. How and when syphilis is most likely transmitted",
      cards: [
        C("The transmission event", `<p><em>Treponema pallidum</em> is a motile spirochete that enters through <strong>intact mucous membranes</strong> or microscopic skin abrasions, then rapidly disseminates through lymphatics and blood.</p><table class="learn-table"><tr><th>Most likely route</th><th>What must happen</th></tr><tr><td>Oral, vaginal, or anal sex</td><td>Direct contact with an infectious lesion</td></tr><tr><td>Infectious lesions</td><td>Chancre, mucous patch, condyloma lata, or secondary rash</td></tr></table><div class="box-mnemonic"><span class="lbl">Memory hook</span><strong>Lesion + direct contact = highest transmission.</strong></div>`, true),
        C("Vertical and late-latent transmission", `<table class="learn-table"><tr><th>Situation</th><th>Transmission</th></tr><tr><td>Pregnancy</td><td>The spirochete readily crosses the placenta</td></tr><tr><td>Delivery</td><td>Transmission can occur during birth</td></tr><tr><td>Late latent disease</td><td>Sexual transmission does not occur; rare routes are screened blood, organ donation, or transplacental spread</td></tr></table><p>Primary chancres and the moist lesions/rash of secondary syphilis are highly infectious. Infectiousness falls after the early stages.</p>`, true)
      ],
      test: [
        Q("What is the most likely way syphilis is transmitted?", ["Direct contact with an infected lesion during oral, vaginal, or anal sex", "Casual hugging", "Sharing utensils", "Toilet seats"], 0, "Direct sexual contact with a chancre, mucous patch, condyloma lata, or rash is the main route.", 0),
        Q("How does T. pallidum enter the body?", ["Through mucous membranes or microscopic skin abrasions", "Only through intact bone", "Only by inhalation", "Only through the GI tract"], 0, "The spirochete penetrates mucosa or microscopic dermal abrasions.", 0),
        Q("Which lesion is highly infectious?", ["Condyloma lata", "A healed fibrotic scar", "An aortic aneurysm", "Tabes dorsalis"], 0, "Condyloma lata is a moist, highly infectious secondary lesion.", 0),
        Q("How can syphilis transmit vertically?", ["Across the placenta or during delivery", "Only through breastfeeding", "Only after childhood", "It cannot transmit vertically"], 0, "The deck lists both placental and delivery transmission.", 1),
        Q("When does ordinary sexual transmission no longer occur?", ["Late latent syphilis", "Primary syphilis", "Secondary syphilis", "During a chancre"], 0, "Late latent disease is not sexually transmitted; rare blood, organ, and placental routes remain.", 1)
      ],
      apply: [
        Q("A patient has condomless oral contact with a partner's painless chancre. What feature creates the greatest transmission risk?", ["Direct contact with an infectious lesion", "The partner's age", "Sharing a drinking glass", "The absence of pain"], 0, "Direct contact with the infectious chancre is the key transmission event.", 0),
        Q("A pregnant patient has untreated late latent syphilis. Which transmission route remains possible?", ["Transplacental transmission", "Casual household contact", "Toilet seats", "Hugging"], 0, "Late latent disease is not sexually transmitted, but transplacental spread remains possible.", 1)
      ]
    },
    {
      id: "02-populations", title: "2. Populations most likely to acquire syphilis",
      cards: [
        C("Who is acquiring syphilis?", `<table class="learn-table"><tr><th>Population/setting</th><th>Lecture emphasis</th></tr><tr><td>Adolescents and young adults</td><td>Syphilis is most common in teens and young adults; ages 15–24 carry a large STI burden</td></tr><tr><td>Men who have sex with men</td><td>Strongest male risk factor is sexual contact with other men</td></tr><tr><td>Heterosexual patients</td><td>The United States is also experiencing a heterosexual epidemic; rates rose sharply among women</td></tr><tr><td>People with HIV</td><td>Substantial overlap, especially among MSM</td></tr></table>`, true),
        C("Behavior, setting, and disparity", `<ul><li>Condomless vaginal, oral, or anal sex</li><li>Multiple partners or exchanging sex for drugs or money</li><li>Methamphetamine or heroin use</li><li>Acquiring partners through social media</li><li>Incarceration, PrEP use, or a partner with early syphilis as screening clues</li></ul><div class="box-hy"><span class="lbl">Clinical framing</span>Racial disparities are not explained by different sexual behavior. The lecture attributes them to unequal access to quality sexual health care and higher community prevalence.</div>`, true)
      ],
      test: [
        Q("Which age group is emphasized as having the greatest syphilis burden?", ["Teens and young adults", "Only infants", "Only adults over 80", "Only preschool children"], 0, "Syphilis is most common in teens and young adults.", 0),
        Q("What is the strongest male risk factor identified in the lecture?", ["Sexual contact with other men", "Hypertension", "Vegetarian diet", "Living alone"], 0, "Sexual contact with other men is the strongest listed male risk factor.", 0),
        Q("Which current epidemiologic pattern is emphasized?", ["A heterosexual epidemic alongside continuing MSM burden", "Disease only among MSM", "Disease only among women", "No US transmission"], 0, "The lecture emphasizes substantial heterosexual transmission as well as MSM burden.", 0),
        Q("Which behavior increases syphilis risk?", ["Methamphetamine or heroin use", "Routine exercise", "Vaccination", "Eating utensils"], 0, "Drug use is a listed risk factor.", 1),
        Q("How should racial disparities in syphilis be interpreted?", ["As effects of systemic inequity, access, and community prevalence—not presumed behavior differences", "As genetic proof of risk", "As evidence that screening is unnecessary", "As random with no public-health relevance"], 0, "The deck explicitly rejects behavioral stereotyping and points to structural access and prevalence.", 1)
      ],
      apply: [
        Q("A 20-year-old with multiple partners and inconsistent condom use asks whether screening is reasonable. Which factor supports screening?", ["Young age and high-risk sexual behavior", "Normal blood pressure", "No symptoms", "No family history"], 0, "Teens/young adults and condomless sex with multiple partners are highlighted risk settings.", 0),
        Q("A clinician sees higher rates in a community with limited sexual-health access. What is the best lecture-based interpretation?", ["Higher prevalence and unequal access increase exposure opportunity", "The community has inherently riskier biology", "Sexual behavior must be different", "Screening should stop"], 0, "The deck frames disparities through systemic inequity and higher community prevalence.", 1)
      ]
    },
    {
      id: "03-pregnancy-screening", title: "3. Screening all pregnant patients for syphilis",
      cards: [
        C("Pregnancy screening is universal", `<p><span class="hl">Every pregnant patient requires syphilis screening at the first prenatal encounter.</span></p><table class="learn-table"><tr><th>When</th><th>Who</th></tr><tr><td>First prenatal encounter</td><td>All pregnant patients</td></tr><tr><td>32 weeks</td><td>Repeat if high risk</td></tr><tr><td>Delivery</td><td>Repeat if high risk</td></tr></table><p>The goal is prevention of congenital infection, stillbirth, and infant death.</p>`, true),
        C("Why screening cannot depend on symptoms", `<p>Syphilis may be asymptomatic during latent disease, chancres may be internal or unnoticed, and early serology may initially be nonreactive. The spirochete readily crosses the placenta and may also transmit during delivery.</p><div class="box-mnemonic"><span class="lbl">Pregnancy rule</span><strong>First visit for everyone; 32 weeks + delivery when high risk.</strong></div>`, true)
      ],
      test: [
        Q("Who requires syphilis screening at the first prenatal encounter?", ["All pregnant patients", "Only symptomatic patients", "Only patients over 35", "Only patients with a rash"], 0, "The lecture calls for universal prenatal screening.", 0),
        Q("When should a high-risk pregnant patient be screened again?", ["At 32 weeks and delivery", "Only postpartum", "Every day", "Never after the first test"], 0, "High-risk patients receive repeat screening at 32 weeks and delivery.", 0),
        Q("What major outcome is prenatal screening intended to prevent?", ["Congenital syphilis", "Postherpetic neuralgia", "Influenza", "Mumps"], 0, "Untreated maternal infection can cross the placenta.", 0),
        Q("Why can symptom-based prenatal screening miss infection?", ["Latent syphilis is asymptomatic and lesions may be unnoticed", "Syphilis always causes severe pain", "All chancres are external", "Serology is never useful"], 0, "Silent stages and hidden lesions make universal testing necessary.", 1),
        Q("Can syphilis be transmitted during delivery?", ["Yes", "No", "Only after age 5", "Only with casual contact"], 0, "The deck lists transmission during delivery.", 1)
      ],
      apply: [
        Q("An asymptomatic patient presents for her first prenatal visit and denies risk factors. What should be done?", ["Screen for syphilis now", "Wait for a chancre", "Screen only after delivery", "Do not screen"], 0, "All pregnant patients require first-encounter screening.", 0),
        Q("A high-risk pregnant patient tested negative early in pregnancy. What follow-up schedule is appropriate?", ["Repeat at 32 weeks and delivery", "No further testing", "Repeat only if a rash appears", "Repeat in five years"], 0, "The lecture calls for repeat testing at both points in high-risk pregnancy.", 1)
      ]
    },
    {
      id: "04-hiv-risk", title: "4. Why syphilis increases HIV acquisition risk",
      cards: [
        C("Syphilis creates an HIV entry opportunity", `<p>Syphilitic chancres, mucous patches, condyloma lata, and rashes contain organisms. Ulceration and inflammation disrupt the skin or mucosal barrier—the same barrier through which organisms enter microscopic abrasions.</p><div class="box-hy"><span class="lbl">Mechanism</span><strong>Broken/inflamed barrier + sexual exposure = easier HIV acquisition if exposed.</strong></div>`, true),
        C("The infections travel together", `<p>Syphilis and HIV share sexual exposure networks and risk behaviors. The lecture reports that 41% of MSM with primary/secondary syphilis in 2023 had diagnosed HIV.</p><ul><li>Explain that syphilis increases HIV risk.</li><li>Ensure the patient completes HIV testing.</li><li>Use condoms to reduce STI acquisition.</li></ul>`, true)
      ],
      test: [
        Q("What local mechanism increases HIV acquisition risk in syphilis?", ["Syphilitic ulceration and inflammation disrupt the protective barrier", "Syphilis creates an HIV vaccine", "Syphilis blocks immune-cell access", "Penicillin causes HIV"], 0, "Lesions create an entry opportunity during HIV exposure.", 0),
        Q("Which syphilitic finding most directly disrupts the barrier?", ["A chancre", "An isolated aortic murmur", "Cerebral atrophy", "A healed scar"], 0, "The chancre is an ulcer at the contact site.", 0),
        Q("Why do syphilis and HIV frequently coexist?", ["They share sexual exposure routes and risk networks", "They are the same organism", "Both spread by casual hugging", "Both are cured by one vaccine"], 0, "The deck notes that STIs travel together.", 1),
        Q("What additional testing should be completed after a syphilis diagnosis?", ["HIV testing", "No other testing", "Only a head CT", "Only serum amylase"], 0, "Patient education includes ensuring HIV testing is completed.", 1),
        Q("What prevention message belongs in counseling?", ["Condoms significantly reduce STI acquisition risk", "Casual contact is the main risk", "Avoid eating utensils", "Antibiotics replace testing"], 0, "Condom use is a listed prevention message.", 1)
      ],
      apply: [
        Q("A patient with an active genital chancre asks why HIV risk is higher. What is the clearest explanation?", ["The ulcer disrupts the barrier and provides an easier portal during exposure", "The chancre produces HIV", "The risk comes from sharing utensils", "Penicillin creates HIV"], 0, "Barrier disruption is the mechanism emphasized by the lesion pathogenesis.", 0),
        Q("A newly diagnosed patient has never had an HIV test. What counseling action is appropriate?", ["Arrange HIV testing and discuss condoms", "Assume HIV is absent", "Avoid all laboratory testing", "Discuss only casual contact"], 0, "Syphilis increases HIV risk; testing and risk-reduction counseling are required.", 1)
      ]
    },
    {
      id: "05-early-vs-late-time", title: "5. Define early and late syphilis by time",
      cards: [
        C("The one-year dividing line", `<table class="learn-table"><tr><th>Category</th><th>Time from infection</th><th>Included stages</th></tr><tr><td><strong>Early syphilis</strong></td><td>Less than 1 year</td><td>Primary, secondary, early latent; early neurologic manifestations can occur</td></tr><tr><td><strong>Late syphilis</strong></td><td>Greater than 1 year</td><td>Late latent, tertiary; late neurologic manifestations can occur</td></tr></table><div class="box-mnemonic"><span class="lbl">Anchor</span><strong>One year is the border.</strong></div>`, true),
        C("Unknown duration defaults late", `<p>If the timing of infection cannot be established, the patient is <strong>presumed to have late latent syphilis</strong>. This matters because late latent therapy requires three weekly benzathine penicillin injections rather than the single injection used for early infection.</p>`, true)
      ],
      test: [
        Q("What time cutoff separates early from late syphilis?", ["1 year", "1 week", "10 years", "30 years"], 0, "Early is under one year; late is over one year.", 0),
        Q("An infection acquired 8 months ago is classified as what?", ["Early syphilis", "Late syphilis", "Tertiary only", "Unknown duration"], 0, "Eight months is within the first year.", 0),
        Q("An infection acquired 3 years ago is classified as what?", ["Late syphilis", "Early syphilis", "Primary only", "Not syphilis"], 0, "Greater than one year is late disease.", 0),
        Q("How is syphilis of unknown duration classified?", ["Presumed late latent", "Presumed primary", "Presumed secondary", "Presumed cured"], 0, "Unknown timing defaults to late latent disease.", 1),
        Q("Why does the time classification matter?", ["It changes the benzathine penicillin schedule", "It changes the organism", "It eliminates follow-up", "It determines casual-contact spread"], 0, "Early and late latent infections use different treatment schedules.", 1)
      ],
      apply: [
        Q("A patient has documented seroconversion 7 months ago. Which broad time category applies?", ["Early syphilis", "Late syphilis", "Tertiary syphilis", "No infection"], 0, "The documented infection is less than one year old.", 0),
        Q("A patient has positive confirmatory testing but no records, symptoms, or known exposure date. How should duration be handled?", ["Presume late latent", "Presume primary", "Presume infection occurred yesterday", "Withhold all treatment"], 0, "Unknown duration is treated as late latent disease.", 1)
      ]
    },
    {
      id: "06-substages", title: "6. Recall the substages of early and late syphilis",
      cards: [
        C("Early syphilis substages", `<div class="stage-flow"><strong>Early (&lt;1 year)</strong> → Primary → Secondary → Early latent</div><table class="learn-table"><tr><th>Substage</th><th>Core identity</th></tr><tr><td>Primary</td><td>Chancre</td></tr><tr><td>Secondary</td><td>Rash, mucous patches, condyloma lata, systemic disease</td></tr><tr><td>Early latent</td><td>Asymptomatic with serologic evidence and evidence infection occurred within 12 months</td></tr></table>`, true),
        C("Late syphilis substages", `<div class="stage-flow"><strong>Late (&gt;1 year)</strong> → Late latent → Tertiary</div><table class="learn-table"><tr><th>Substage</th><th>Core identity</th></tr><tr><td>Late latent</td><td>Asymptomatic, infection beyond one year or unknown duration</td></tr><tr><td>Tertiary</td><td>Gummatous and cardiovascular disease</td></tr></table><p><strong>Neurosyphilis is not confined to one stage:</strong> early forms can occur during primary/secondary disease, and late forms include general paresis and tabes dorsalis.</p>`, true)
      ],
      test: [
        Q("Which substages belong to early syphilis?", ["Primary, secondary, early latent", "Late latent and tertiary only", "Tertiary only", "General paresis only"], 0, "These are the three early substages.", 0),
        Q("Which stage is defined by a chancre?", ["Primary", "Secondary", "Late latent", "Tertiary"], 0, "The chancre is primary syphilis.", 0),
        Q("Which stage is clinically silent but documented within 12 months?", ["Early latent", "Secondary", "Tertiary", "General paresis"], 0, "Early latent disease is asymptomatic within the early time window.", 0),
        Q("Which substages belong to late syphilis?", ["Late latent and tertiary", "Primary and secondary", "Only primary", "Only early latent"], 0, "Late disease contains late latent and tertiary substages.", 1),
        Q("Can neurosyphilis occur in both early and late disease?", ["Yes", "No", "Only during a chancre", "Only during latency"], 0, "The lecture emphasizes neurologic manifestations in both periods.", 1)
      ],
      apply: [
        Q("A patient has a diffuse palm-and-sole rash and condyloma lata 8 weeks after a chancre. Which substage applies?", ["Secondary", "Primary", "Late latent", "Tertiary"], 0, "Secondary disease follows primary disease and produces infectious skin/mucosal lesions.", 0),
        Q("A patient develops an ascending aortic aneurysm 15 years after untreated infection. Which substage applies?", ["Tertiary", "Primary", "Secondary", "Early latent"], 0, "Cardiovascular syphilis is a tertiary manifestation.", 1)
      ]
    },
    {
      id: "07-stage-details", title: "7. Signs, symptoms, and timing of each syphilis substage",
      cards: [
        C("Primary: the painless chancre", `<table class="learn-table"><tr><th>Timing</th><th>Few days to 3 months after exposure</th></tr><tr><td>Lesion</td><td>Usually one painless 1–2 cm nonexudative ulcer with raised/rolled margins</td></tr><tr><td>Course</td><td>Persists 3–6 weeks, then heals spontaneously with a fibrotic scar</td></tr><tr><td>Nodes</td><td>Bilateral, firm/rubbery, painless or minimally tender regional adenopathy; epitrochlear nodes are a clue</td></tr></table><p>Location is usually near inoculation: glans penis, vulva/cervix, oropharynx, tongue, fingers, vagina, anus/rectum, lip, or breast.</p>`, true),
        C("Secondary: systemic and skin disease", `<p>Secondary syphilis develops <strong>4–10 weeks after an untreated chancre</strong> as organisms disseminate through blood and lymphatics.</p><ul><li>Low fever, malaise, anorexia, weight loss, myalgias, sore throat, generalized nodes</li><li>Diffuse bilateral symmetric macular/papular rash over trunk and extremities, including mucosa, <strong>palms and soles</strong></li><li>Copper/red-brown, 0.5–2 cm, often rough/scaly, rarely pruritic</li><li>Mucous patches and inflammatory eye/organ findings</li></ul>`, true),
        C("Secondary: condyloma lata and alopecia", `<table class="learn-table"><tr><th>Finding</th><th>Recognition</th></tr><tr><td>Condyloma lata</td><td>Painless, large gray-white papules in moist perineal or mucosal areas; highly infectious</td></tr><tr><td>Alopecia</td><td>Patchy scalp/facial hair loss, including eyebrows—the <strong>moth-eaten</strong> pattern</td></tr><tr><td>Infectiousness</td><td>All skin lesions contain organisms, especially moist lesions</td></tr></table>`, true),
        C("Latent: silent seroreactivity", `<p>Latent syphilis means the primary/secondary findings have resolved—or primary findings resolved without recognized secondary disease—but the patient remains <strong>asymptomatic with serologic evidence</strong>.</p><table class="learn-table"><tr><th>Early latent</th><th>Late latent</th></tr><tr><td>Evidence places infection within 12 months</td><td>More than 1 year or duration unknown</td></tr><tr><td>Mucocutaneous relapse may occur</td><td>No ordinary sexual transmission</td></tr></table>`, true),
        C("Tertiary: gumma and cardiovascular disease", `<p>Tertiary disease develops in about <strong>15–40% of untreated patients</strong>, usually <strong>1–30 years</strong> after primary disease.</p><table class="learn-table"><tr><th>Form</th><th>Findings</th></tr><tr><td>Gummatous</td><td>Granulomatous nodules that ulcerate; classically liver, bone, and testes</td></tr><tr><td>Cardiovascular</td><td>At least 10 years later; destruction of the vasa vasorum → ascending aortic aneurysm ± aortic regurgitation</td></tr></table><p>Cardiovascular disease accounts for 80–85% of tertiary syphilis in the lecture.</p>`, true)
      ],
      test: [
        Q("When does a primary chancre develop?", ["A few days to 3 months after exposure", "Always 10 years later", "Only after secondary disease", "After 30 years only"], 0, "This is the primary-stage window.", 0),
        Q("What is the classic chancre?", ["A painless, nonexudative ulcer with raised/rolled margins", "A painful pruritic vesicle", "A diffuse rough rash", "A gray-white perineal papule"], 0, "The painless rolled-margin ulcer is primary syphilis.", 0),
        Q("When does secondary syphilis typically develop?", ["4–10 weeks after an untreated chancre", "Within one hour", "Only after 25 years", "Only after treatment"], 0, "Secondary disease follows untreated primary disease in 4–10 weeks.", 1),
        Q("What rash distribution is a major secondary-syphilis clue?", ["Palms and soles with trunk/extremity involvement", "One dermatome", "Hands and feet only with oral ulcers", "No skin involvement"], 0, "Palm and sole involvement is an important clue.", 1),
        Q("What is condyloma lata?", ["Painless gray-white moist papules that are highly infectious", "An aortic lesion", "A painful chancre", "A pupillary abnormality"], 0, "Condyloma lata is a secondary mucocutaneous lesion.", 2),
        Q("What hair finding occurs in secondary syphilis?", ["Moth-eaten alopecia", "Complete permanent alopecia in every patient", "No hair change", "Only nail loss"], 0, "Patchy scalp/facial hair loss produces the moth-eaten pattern.", 2),
        Q("What two features define latent syphilis?", ["No symptoms plus serologic evidence", "A chancre plus negative serology", "A rash plus negative serology", "Aortic disease plus no infection"], 0, "Latent disease is clinically silent but serologically documented.", 3),
        Q("When can tertiary disease appear?", ["Usually 1–30 years after primary disease", "Only during the first week", "Before exposure", "Only during pregnancy"], 0, "The lecture gives a 1–30 year range.", 4),
        Q("What vascular mechanism causes cardiovascular syphilis?", ["Inflammatory destruction of the vasa vasorum", "Neuraminidase inhibition", "Venous thrombosis only", "Loss of erythroid precursors"], 0, "Loss of aortic-wall blood supply produces aneurysmal disease.", 4),
        Q("Where are gummas classically found?", ["Liver, bones, and testes", "Only the retina", "Only the parotid gland", "Only the palms"], 0, "Those are the classic sites listed.", 4)
      ],
      apply: [
        Q("A solitary painless penile ulcer with rolled margins appears six weeks after exposure. Which stage fits?", ["Primary", "Secondary", "Late latent", "Tertiary"], 0, "Timing and chancre morphology identify primary syphilis.", 0),
        Q("A patient develops low fever, generalized nodes, and a copper-colored palm-and-sole rash two months after an untreated ulcer. Which stage fits?", ["Secondary", "Primary", "Late latent", "Tertiary"], 0, "The systemic syndrome and infectious rash identify secondary disease.", 1),
        Q("A patient has painless gray-white perineal papules and patchy eyebrow loss. Which two secondary findings are present?", ["Condyloma lata and moth-eaten alopecia", "Chancre and gumma", "Tabes and paresis", "Aortitis and uveitis"], 0, "These are classic secondary mucocutaneous findings.", 2),
        Q("A patient has no symptoms but remains serologically positive after prior primary findings resolved. Which broad stage is present?", ["Latent", "Primary", "Secondary rash", "Tertiary cardiovascular"], 0, "Asymptomatic seroreactivity defines latent syphilis.", 3),
        Q("Fifteen years after untreated infection, a patient develops ascending aortic aneurysm and aortic regurgitation. What is the mechanism?", ["Vasa-vasorum destruction in tertiary syphilis", "A recurrent chancre", "Condyloma lata", "Early latent disease"], 0, "Cardiovascular tertiary disease injures the vasa vasorum.", 4)
      ]
    },
    {
      id: "08-neurosyphilis", title: "8. Contrast early and late neurosyphilis",
      cards: [
        C("Early neurosyphilis", `<p>Early neurologic disease usually occurs within the first <strong>6–12 months</strong>, during primary or secondary syphilis.</p><table class="learn-table"><tr><th>Form</th><th>Findings</th></tr><tr><td>Asymptomatic</td><td>No CNS symptoms but abnormal CSF</td></tr><tr><td>Meningitis</td><td>Headache, confusion, stiff neck, N/V, photophobia, altered mental status</td></tr><tr><td>Meningovascular</td><td>Subacute headache/vertigo/insomnia/psychological change followed by ischemic stroke</td></tr><tr><td>Cranial nerve disease</td><td>Optic, facial, and auditory nerves commonly affected</td></tr></table>`, true),
        C("Ocular and otic early disease", `<table class="learn-table"><tr><th>Manifestation</th><th>Recognition</th></tr><tr><td>Uveitis</td><td>Red eye, blurred vision, burning pain, photophobia, increased IOP; anterior, posterior, or panuveitis</td></tr><tr><td>Otosyphilis</td><td>Tinnitus, vertigo, sudden unilateral or bilateral sensorineural hearing loss that may become permanent</td></tr></table><p>Any syphilitic eye disease is treated as neurosyphilis.</p>`, true),
        C("Late neurosyphilis", `<table class="learn-table"><tr><th>Form</th><th>Timing and findings</th></tr><tr><td>General paresis</td><td>Progressive dementia 10–25 years later: personality, memory, speech, psychosis, tremor, seizures, cerebral atrophy</td></tr><tr><td>Tabes dorsalis</td><td>Posterior column/dorsal root destruction: impaired vibration/proprioception, sensory ataxia, bladder dysfunction, lancinating pain, optic atrophy</td></tr><tr><td>Argyll-Robertson pupil</td><td><strong>Accommodates but does not react</strong></td></tr></table>`, true)
      ],
      test: [
        Q("When does early neurosyphilis usually occur?", ["Within the first 6–12 months", "Only after 30 years", "Before infection", "Only after treatment"], 0, "It occurs during early primary/secondary disease.", 0),
        Q("Which presentation suggests meningovascular syphilis?", ["Subacute prodrome followed by ischemic stroke", "Painless chancre only", "Aortic aneurysm only", "Moth-eaten alopecia only"], 0, "Vascular inflammation causes infarcts after a subacute prodrome.", 0),
        Q("Which cranial nerves are commonly affected early?", ["Optic, facial, and auditory", "Only olfactory", "Only spinal accessory", "None"], 0, "These three are emphasized in the lecture.", 0),
        Q("Which findings suggest otosyphilis?", ["Tinnitus, vertigo, sudden sensorineural hearing loss", "Parotitis", "Ascending aneurysm", "Urinary retention only"], 0, "Otic disease can cause permanent hearing loss.", 1),
        Q("What eye syndrome may be unilateral or bilateral in early neurosyphilis?", ["Uveitis", "Cataract only", "Retinal detachment only", "No eye disease"], 0, "Syphilitic uveitis includes red eye, pain, photophobia, and blurred vision.", 1),
        Q("When does general paresis generally appear?", ["10–25 years after primary infection", "Within 24 hours", "4–10 weeks after a chancre", "Before exposure"], 0, "General paresis is a late progressive dementia.", 2),
        Q("What causes the deficits of tabes dorsalis?", ["Destruction of posterior columns and dorsal roots", "Loss of the parotid gland", "Vasa-vasorum injury only", "A skin ulcer only"], 0, "Posterior sensory pathway injury explains vibration, position, ataxia, pain, and bladder findings.", 2),
        Q("What does an Argyll-Robertson pupil do?", ["Accommodates but does not react to light", "Reacts but does not accommodate", "Never changes size", "Only dilates during sleep"], 0, "The mnemonic is AR: accommodates, no reaction.", 2)
      ],
      apply: [
        Q("A patient 8 months after infection has headache, cranial-nerve deficits, and a stroke. Which form fits?", ["Early meningovascular neurosyphilis", "General paresis", "Tabes dorsalis", "Tertiary gumma only"], 0, "The timing and vascular presentation identify early disease.", 0),
        Q("A patient with syphilis develops red painful eyes, blurred vision, photophobia, and elevated IOP. How is this classified?", ["Syphilitic uveitis treated as neurosyphilis", "Primary chancre", "Late latent only", "Condyloma lata"], 0, "Ocular syphilis is included under neurosyphilis treatment.", 1),
        Q("Twenty years after infection, a patient has progressive dementia, personality change, cerebral atrophy, and pupils that accommodate but do not react. What fits?", ["General paresis", "Early meningitis", "Primary syphilis", "Condyloma lata"], 0, "This is late neurosyphilis with an Argyll-Robertson pupil.", 2)
      ]
    },
    {
      id: "09-latent-criteria", title: "9. Criteria for early versus late latent syphilis",
      cards: [
        C("Latent first: asymptomatic + seropositive", `<p>A patient is latent only when primary/secondary symptoms have resolved or were not recognized, the patient is now <strong>asymptomatic</strong>, and serology shows infection.</p><div class="box-hy"><span class="lbl">Do not confuse</span>A positive test alone does not tell you early versus late; you need the 12-month evidence.</div>`, true),
        C("Three ways to prove early latent", `<p>Early latent syphilis requires at least one of these in the prior <strong>12 months</strong>:</p><ol><li>Documented seroconversion of a nontreponemal test</li><li>Symptoms consistent with primary or secondary syphilis</li><li>Sexual exposure to a partner with primary, secondary, or early latent syphilis</li></ol><div class="box-mnemonic"><span class="lbl">12-month proof</span><strong>Test turned, symptoms occurred, or partner exposed.</strong></div>`, true),
        C("When latent becomes late", `<p>Classify latent infection as <strong>late latent</strong> when it is known to be more than one year old or when the duration is unknown and none of the early-latent criteria can be established.</p><p>Late latent disease has no routine sexual transmission, but transplacental transmission remains possible.</p>`, true)
      ],
      test: [
        Q("What must be present for latent syphilis?", ["No symptoms plus serologic evidence", "A painful rash plus negative tests", "Only a chancre", "Only an aneurysm"], 0, "Latent disease is asymptomatic infection documented serologically.", 0),
        Q("Which prior-year event establishes early latent disease?", ["Documented nontreponemal seroconversion", "Hypertension", "A negative pregnancy test", "An aortic aneurysm 15 years ago"], 0, "Seroconversion within 12 months is one criterion.", 1),
        Q("Which symptom history supports early latent classification?", ["Primary or secondary symptoms during the prior 12 months", "A chancre 10 years ago", "No history of any kind", "Only current dementia"], 0, "Recent primary/secondary symptoms place infection within one year.", 1),
        Q("Which partner history supports early latent classification?", ["Exposure within 12 months to primary, secondary, or early latent syphilis", "A partner with hypertension", "A partner treated 20 years ago", "Casual hugging"], 0, "A recent infectious partner is one of the three criteria.", 1),
        Q("How is asymptomatic infection of unknown duration classified?", ["Late latent", "Early latent", "Primary", "Secondary"], 0, "Without 12-month evidence, unknown duration defaults late.", 2),
        Q("Does late latent syphilis ordinarily transmit sexually?", ["No", "Yes, always", "Only through utensils", "Only through hugging"], 0, "Ordinary sexual transmission is not expected in late latent disease.", 2)
      ],
      apply: [
        Q("An asymptomatic patient has a positive confirmatory test but no prior records or exposure history. What is the stage?", ["Late latent", "Early latent", "Primary", "Secondary"], 0, "No evidence dates infection to the prior 12 months.", 0),
        Q("An asymptomatic patient had a documented negative RPR 8 months ago and is now RPR positive with confirmatory testing. What is the stage?", ["Early latent", "Late latent", "Tertiary", "No infection"], 0, "Documented seroconversion within 12 months meets early-latent criteria.", 1),
        Q("An asymptomatic patient has serologic infection and recalls a chancre 2 years ago. How should latency be classified?", ["Late latent", "Early latent", "Secondary", "Primary"], 0, "The known infection is beyond one year.", 2)
      ]
    },
    {
      id: "10-diagnostics-monitoring", title: "10. Diagnostic testing and treatment monitoring",
      cards: [
        C("Step 1: nontreponemal screening", `<table class="learn-table"><tr><th>Tests</th><th>VDRL or RPR</th></tr><tr><td>Role</td><td>Low-cost, simple, sensitive initial screening</td></tr><tr><td>Target</td><td>Reactivity to cardiolipin-cholesterol-lecithin antigen</td></tr><tr><td>False positive</td><td>Pregnancy, connective-tissue disease, IV drug use, bacterial endocarditis, rickettsial infection</td></tr><tr><td>False negative</td><td>Advanced immunosuppression and HIV/AIDS</td></tr></table><p>In early primary disease, 20–30% of serology remains nonreactive until 2–4 weeks after the chancre appears.</p>`, true),
        C("Step 2: treponemal confirmation", `<p>A reactive RPR or VDRL must be confirmed with a more specific test for antibodies to treponemal proteins:</p><ul><li><strong>TP-EIA</strong>: Treponema pallidum enzyme immunoassay</li><li><strong>FTA-ABS</strong>: fluorescent treponemal antibody absorption</li></ul><div class="box-mnemonic"><span class="lbl">Two-step rule</span><strong>RPR/VDRL screens → TP-EIA/FTA-ABS confirms.</strong></div><p>Treponemal tests usually remain positive for life and therefore are not the routine monitoring test.</p>`, true),
        C("Neurosyphilis and follow-up testing", `<p>Neurosyphilis can only be diagnosed by lumbar puncture with a <strong>CSF VDRL</strong>. CSF protein and lymphocytes may also be elevated.</p><table class="learn-table"><tr><th>Monitoring rule</th><th>Lecture detail</th></tr><tr><td>Test</td><td>Use the same nontreponemal type used initially</td></tr><tr><td>Success</td><td>Fourfold titer decline, e.g. 1:32 → 1:8</td></tr><tr><td>Early schedule</td><td>6 and 12 months</td></tr><tr><td>Late schedule</td><td>6, 12, and 24 months</td></tr></table>`, true)
      ],
      test: [
        Q("What tests are used first to screen for syphilis?", ["RPR or VDRL", "TP-EIA only", "FTA-ABS only", "Head CT"], 0, "Nontreponemal RPR/VDRL testing is the initial step.", 0),
        Q("Which condition can cause a false-positive RPR/VDRL?", ["Pregnancy", "A healed ankle fracture", "Myopia", "Seasonal allergies only"], 0, "Pregnancy is one of several listed false-positive settings.", 0),
        Q("Why can an early chancre have negative serology?", ["Antibodies may not become detectable until 2–4 weeks after the chancre appears", "The chancre is never syphilis", "All tests detect organisms instantly", "Treatment always precedes testing"], 0, "Twenty to thirty percent remain nonreactive during this early window.", 0),
        Q("What confirms a positive RPR or VDRL?", ["TP-EIA or FTA-ABS", "Another physical exam only", "Urinalysis", "Serum amylase"], 0, "A specific treponemal antibody test confirms screening.", 1),
        Q("Why is a treponemal test not ideal for treatment monitoring?", ["It usually remains positive for life", "It is always negative in infection", "It measures blood pressure", "It detects only influenza"], 0, "Persistent positivity prevents it from tracking response.", 1),
        Q("What test diagnoses neurosyphilis?", ["CSF VDRL after lumbar puncture", "Serum RPR alone", "Skin culture alone", "Head CT alone"], 0, "The lecture requires CSF VDRL.", 2),
        Q("What titer change generally indicates treatment response?", ["A fourfold decline", "Any one-step rise", "No change", "A fourfold rise"], 0, "A decline such as 1:32 to 1:8 is the goal.", 2),
        Q("When is early syphilis monitored?", ["6 and 12 months", "Only 24 months", "Every day", "Never"], 0, "Early disease has 6- and 12-month follow-up.", 2),
        Q("When is late syphilis monitored?", ["6, 12, and 24 months", "Only one week", "Only 3 months", "Never"], 0, "Late disease adds 24-month monitoring.", 2)
      ],
      apply: [
        Q("A pregnant patient has a positive RPR but negative FTA-ABS. What is the best interpretation?", ["The RPR may be a false positive; treponemal confirmation is absent", "Syphilis is definitively confirmed", "Neurosyphilis is confirmed", "No further reasoning is possible"], 0, "Pregnancy can cause false-positive nontreponemal testing, and the treponemal test is negative.", 0),
        Q("A patient with a classic new chancre has a negative VDRL. What lecture fact prevents premature exclusion?", ["Early serology may stay negative for 2–4 weeks after the chancre appears", "Chancres are never infectious", "VDRL is a treponemal test", "The lesion must be tertiary"], 0, "Early antibody formation can lag behind the lesion.", 1),
        Q("A patient's RPR falls from 1:32 to 1:8 after treatment. What does this represent?", ["An appropriate fourfold decline", "A fourfold rise", "Definite recurrent infection", "A treponemal conversion"], 0, "Two dilution steps from 32 to 8 equal a fourfold decline.", 2)
      ]
    },
    {
      id: "11-treatment", title: "11. Treatment by substage, including neurosyphilis",
      cards: [
        C("Early-stage treatment", `<table class="learn-table"><tr><th>Stage</th><th>Treatment</th></tr><tr><td>Primary</td><td rowspan="3"><strong>Benzathine penicillin G 2.4 million units IM once</strong></td></tr><tr><td>Secondary</td></tr><tr><td>Early latent</td></tr></table><p>Lecture-listed alternative: doxycycline 100 mg twice daily for 2 weeks.</p><div class="box-mnemonic"><span class="lbl">Early</span><strong>One year → one shot.</strong></div>`, true),
        C("Late-stage treatment", `<table class="learn-table"><tr><th>Stage</th><th>Treatment</th></tr><tr><td>Late latent</td><td rowspan="3"><strong>Benzathine penicillin G 2.4 million units IM weekly for 3 weeks</strong></td></tr><tr><td>Unknown-duration latent</td></tr><tr><td>Tertiary cardiac/gummatous</td></tr></table><div class="box-mnemonic"><span class="lbl">Late</span><strong>Three weekly shots.</strong></div>`, true),
        C("Neurosyphilis treatment", `<p>Early or late neurosyphilis—including <strong>any syphilitic eye disease</strong>—requires:</p><ul><li>Hospital admission</li><li><strong>IV penicillin for 10–14 days</strong></li></ul><p>Ceftriaxone is an alternative only when penicillin allergy desensitization is not a reasonable option.</p><div class="box-hy"><span class="lbl">Do not substitute</span>IM benzathine penicillin is not the neurosyphilis regimen.</div>`, true)
      ],
      test: [
        Q("What is the treatment for primary syphilis?", ["Benzathine penicillin G 2.4 million units IM once", "Three IV doses of oseltamivir", "No treatment", "Aspirin"], 0, "Primary disease receives the single early-stage injection.", 0),
        Q("Which stages receive the same single injection?", ["Primary, secondary, and early latent", "Late latent and tertiary", "Only late neurosyphilis", "General paresis only"], 0, "All early non-neurologic substages share this regimen.", 0),
        Q("What alternate regimen is listed for early disease?", ["Doxycycline 100 mg BID for 2 weeks", "Ceftriaxone for one hour", "Aspirin daily", "No alternative"], 0, "This is the lecture-listed alternative.", 0),
        Q("How is late latent syphilis treated?", ["Benzathine penicillin G 2.4 million units IM weekly for 3 weeks", "One IM injection only", "No therapy", "Oral aspirin"], 0, "Late latent disease requires three weekly doses.", 1),
        Q("How is unknown-duration latent infection treated?", ["As late latent syphilis", "As primary only", "As cured", "With no follow-up"], 0, "Unknown duration defaults late.", 1),
        Q("What is the treatment setting for neurosyphilis?", ["Hospital admission with IV penicillin", "One outpatient IM dose only", "Topical therapy", "No antibiotic"], 0, "Both early and late neurologic disease require inpatient IV therapy.", 2),
        Q("How long is IV penicillin given for neurosyphilis?", ["10–14 days", "One dose", "Three months", "One year"], 0, "The lecture specifies 10–14 days.", 2),
        Q("How is syphilitic eye disease treated?", ["As neurosyphilis", "As primary syphilis only", "With no therapy", "With aspirin only"], 0, "Any eye disease from syphilis falls under the IV regimen.", 2)
      ],
      apply: [
        Q("A patient has secondary syphilis without neurologic findings. What regimen fits?", ["Benzathine penicillin G 2.4 million units IM once", "Three weekly injections", "IV penicillin for 10–14 days", "No treatment"], 0, "Secondary syphilis is early disease and gets one injection.", 0),
        Q("An asymptomatic patient has infection of unknown duration. What regimen fits?", ["Benzathine penicillin G 2.4 million units IM weekly for 3 weeks", "One injection only", "No therapy", "Aspirin"], 0, "Unknown duration is presumed late latent.", 1),
        Q("A patient with syphilis develops uveitis. What treatment is required?", ["Hospital admission and IV penicillin for 10–14 days", "One IM dose only", "Doxycycline for one day", "Observation only"], 0, "Ocular disease is managed as neurosyphilis.", 2)
      ]
    },
    {
      id: "12-counseling", title: "12. Counseling after treatment and future testing",
      cards: [
        C("Jarisch-Herxheimer reaction", `<p>Within the first <strong>24 hours after penicillin</strong>, spirochete lysis may release endotoxin and cause an acute, self-limited febrile illness with <strong>headache and myalgias</strong>.</p><ul><li>It is common.</li><li>Warn the patient in advance.</li><li>Treat symptoms supportively.</li></ul><div class="box-hy"><span class="lbl">Counseling phrase</span>This is an expected inflammatory reaction to treatment, not failure to treat.</div>`, true),
        C("Behavior and partner counseling", `<ul><li>Complete the full antibiotic course.</li><li>Notify sexual partners.</li><li>Avoid sexual contact until every partner has completed treatment.</li><li>Condoms significantly reduce STI risk.</li><li>Syphilis is not spread by toilets, hugging, or shared eating utensils.</li><li>Complete HIV testing.</li></ul>`, true),
        C("Future testing and recurrent infection", `<table class="learn-table"><tr><th>After treatment</th><th>Action</th></tr><tr><td>Monitoring</td><td>Repeat the same nontreponemal test and look for a fourfold decline</td></tr><tr><td>Early disease</td><td>6 and 12 months</td></tr><tr><td>Late disease</td><td>6, 12, and 24 months</td></tr><tr><td>Recurrence</td><td>Previously negative RPR/VDRL becomes positive, or a low positive titer rises fourfold (e.g. 1:2 → 1:8)</td></tr></table><p>Treponemal tests usually remain positive for life, so future infection is tracked with nontreponemal titers.</p>`, true)
      ],
      test: [
        Q("When does a Jarisch-Herxheimer reaction occur?", ["Within 24 hours after penicillin", "Ten years later", "Before infection", "Only after vaccination"], 0, "The reaction follows rapid spirochete lysis early after therapy.", 0),
        Q("Which symptoms are typical of the reaction?", ["Fever, headache, and myalgias", "Aortic aneurysm", "Permanent blindness in every patient", "A painless chancre only"], 0, "It is an acute self-limited febrile illness.", 0),
        Q("What should patients do about sexual contact after treatment?", ["Avoid it until all partners have completed treatment", "Resume immediately", "Avoid only shared utensils", "No partner notification"], 0, "This prevents ongoing exposure and reinfection.", 1),
        Q("Is syphilis spread by hugging or toilet use?", ["No", "Yes, commonly", "Only after treatment", "Only during latency"], 0, "Casual contact is not a transmission route.", 1),
        Q("What titer pattern signals recurrent infection?", ["A fourfold rise", "A fourfold decline", "Stable lifelong treponemal positivity", "Any negative test"], 0, "A rise such as 1:2 to 1:8 indicates recurrence.", 2),
        Q("What other recurrent-infection pattern is diagnostic?", ["A previously negative RPR/VDRL becomes newly positive", "A treponemal test remains positive", "Blood pressure rises", "A chancre scar remains"], 0, "New nontreponemal positivity after negativization signals reinfection.", 2),
        Q("Which test type should be used to follow response?", ["The same nontreponemal type used initially", "Treponemal tests only", "Head CT", "Darkfield microscopy only"], 0, "Comparable RPR or VDRL titers are required.", 2)
      ],
      apply: [
        Q("Six hours after penicillin, a patient develops fever, headache, and diffuse myalgias. What counseling is appropriate?", ["This is the common self-limited Jarisch-Herxheimer reaction; treat symptoms", "This proves treatment failure", "This is late neurosyphilis", "Stop all future monitoring"], 0, "Timing and symptoms fit the expected reaction.", 0),
        Q("A treated patient asks when sexual activity can resume. What is the safest lecture-based answer?", ["After all partners have completed treatment", "Immediately after the injection", "After sharing utensils", "No restriction is needed"], 0, "Partners must be notified and treated first.", 1),
        Q("A patient's post-treatment RPR had become negative but is positive at a later visit. What does this suggest?", ["Recurrent infection", "Expected lifelong RPR behavior", "Successful fourfold decline", "No need for evaluation"], 0, "New nontreponemal positivity meets recurrence criteria.", 2)
      ]
    },
    {
      id: "13-exposures", title: "13. Diagnostics and treatment for syphilis exposures",
      cards: [
        C("Every exposed partner needs notification and testing", `<p>Sex partners considered at risk should be <strong>confidentially notified</strong> and receive serologic testing.</p><table class="learn-table"><tr><th>Known source</th><th>Initial action</th></tr><tr><td>Primary, secondary, or early latent</td><td>Assess timing/type of sexual contact; test and consider presumptive treatment</td></tr><tr><td>Late latent with high nontreponemal titer (&gt;1:32)</td><td>Also considered potentially infectious for exposure-management purposes in the lecture</td></tr></table>`, true),
        C("The exposure-treatment decision", `<table class="learn-table"><tr><th>Exposure</th><th>Action</th></tr><tr><td>Condomless oral, vaginal, or anal contact in preceding 3 months with primary, secondary, or early latent source</td><td><strong>Empiric treatment</strong></td></tr><tr><td>Same window with a “late latent” source whose titer is &gt;1:32</td><td><strong>Empiric treatment</strong></td></tr><tr><td>More than 90 days ago</td><td>Presumptive treatment only if follow-up is uncertain or testing unavailable; if serology is negative, no treatment</td></tr></table>`, true)
      ],
      test: [
        Q("What should happen to at-risk sex partners?", ["Confidential notification and serologic testing", "No contact", "Only casual-contact counseling", "Automatic discharge"], 0, "All at-risk partners should be notified and tested.", 0),
        Q("Which source stages create the clearest partner risk?", ["Primary, secondary, and early latent", "Only tertiary cardiac", "Only tabes dorsalis", "Only cured infection"], 0, "Early disease is the infectious period emphasized.", 0),
        Q("What high titer in a reportedly late-latent source triggers exposure concern?", [">1:32", "1:1 only", "Negative", "Any treponemal result alone"], 0, "The lecture uses greater than 1:32.", 0),
        Q("Which recent contact warrants empiric treatment?", ["Condomless oral, vaginal, or anal sex in the preceding 3 months with early syphilis", "A hug one year ago", "Sharing utensils", "Using the same toilet"], 0, "This is the lecture's recent-exposure rule.", 1),
        Q("When is presumptive treatment considered after an exposure over 90 days ago?", ["When follow-up is uncertain or testing is unavailable", "Always, even with negative tests and reliable follow-up", "Never", "Only after casual contact"], 0, "Longer-ago exposures are treated presumptively when evaluation cannot be assured.", 1),
        Q("If an exposure was over 90 days ago and serology is negative, is treatment needed?", ["No", "Yes, always", "Only IV therapy", "Only three years later"], 0, "The slide states no treatment is needed when serologic tests are negative.", 1)
      ],
      apply: [
        Q("A patient had condomless vaginal sex one month ago with a partner diagnosed with secondary syphilis. What is appropriate?", ["Confidential notification, serologic testing, and empiric treatment", "No action", "Avoid utensils only", "Wait for tertiary disease"], 0, "This is recent condomless exposure to early infectious syphilis.", 0),
        Q("A patient had exposure 5 months ago, has reliable follow-up, testing is available, and serology is negative. What does the lecture recommend?", ["No treatment", "Automatic IV penicillin", "Three weekly doses regardless", "No testing"], 0, "For exposure over 90 days with negative serology, treatment is unnecessary.", 1)
      ]
    },
    {
      id: "14-reporting", title: "14. Syphilis is reportable to the Ohio Department of Health",
      cards: [
        C("Every case requires public-health notification", `<p><span class="hl">All cases of syphilis require health-department notification.</span> Ohio Administrative Code <strong>3701-3-02</strong> requires health-care providers and laboratories to report cases or suspected reportable disease to the board of health.</p>`, true),
        C("Why reporting matters", `<p>The health department uses the report to conduct confidential contact tracing and notify sexual contacts. Reporting is part of management—it does not replace the clinician's duties to treat, counsel, test for HIV, and arrange serologic follow-up.</p><div class="box-mnemonic"><span class="lbl">Complete care</span><strong>Treat + counsel + follow titers + report.</strong></div>`, true)
      ],
      test: [
        Q("Is syphilis a reportable disease in Ohio?", ["Yes", "No", "Only tertiary disease", "Only congenital disease"], 0, "All syphilis cases require notification.", 0),
        Q("Who may have a reporting duty under the cited Ohio rule?", ["Health-care providers and laboratories", "Only patients", "Only family members", "No one"], 0, "OAC 3701-3-02 covers providers and laboratories.", 0),
        Q("Are suspected reportable cases included in the cited rule?", ["Yes", "No", "Only after 10 years", "Only if neurologic"], 0, "The slide quotes reporting of cases or suspected cases.", 0),
        Q("What does the health department attempt after notification?", ["Confidential contact tracing", "Publicly naming the patient", "Stopping treatment", "Deleting test results"], 0, "Contact tracing helps identify and notify exposed partners.", 1),
        Q("Does reporting replace treatment and follow-up?", ["No", "Yes", "Only in early disease", "Only during pregnancy"], 0, "Reporting is one component of complete management.", 1)
      ],
      apply: [
        Q("A clinician confirms primary syphilis in Ohio and begins treatment. What additional mandatory action is required?", ["Notify the health department", "Wait for tertiary disease", "Tell only the patient's employer", "No reporting"], 0, "All cases are reportable under Ohio requirements.", 0),
        Q("After a case is reported, what public-health activity should the patient be told may occur?", ["Confidential partner contact tracing", "Public disclosure", "Cancellation of treatment", "No outreach of any kind"], 0, "The health department attempts confidential contact tracing.", 1)
      ]
    }
  ];
}());
