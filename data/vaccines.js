/* Vaccines content derived only from "Vaccines 2026 Raaf - Student.pptx". */
window.VACCINE_OBJECTIVES = [
  {
    id: "01-active-passive-immunity", title: "1. Active and Passive Immunity",
    cards: [
      { title: "Active immunity", highYield: true, body: "Active immunity is produced by the person's own immune system after natural infection or vaccination. It usually lasts many years and may last a lifetime because immune memory develops." },
      { title: "Passive immunity", body: "Passive immunity transfers protection from another person or animal. It is short-term and does not induce memory cells. Examples in the slides are maternal antibodies in breast milk and RSV immunoglobulin." },
      { title: "Passive antibodies and live vaccines", highYield: true, body: "Immunoglobulins should not be administered with live-virus vaccines because passively administered antibodies can interfere with the vaccine response." }
    ],
    test: [
      { prompt: "Which type of immunity is produced by a person's own immune system after vaccination?", choices: ["Active immunity", "Passive immunity", "Innate immunity", "Transferred immunity"], correct: 0, explanation: "Vaccination stimulates the host's own immune response, producing active immunity.", card: 0 },
      { prompt: "Which feature best distinguishes passive immunity?", choices: ["It creates long-term memory cells", "Protection is transferred from another person or animal", "It always follows natural infection", "It requires pathogen replication"], correct: 1, explanation: "Passive immunity transfers antibodies and provides temporary protection without memory-cell formation.", card: 1 },
      { prompt: "Which is an example of passive immunity from the slideshow?", choices: ["Immunity after influenza vaccination", "Immunity after natural measles infection", "Maternal antibodies in breast milk", "T-cell memory after vaccination"], correct: 2, explanation: "Maternal antibodies passed through breast milk are passive immunity.", card: 1 },
      { prompt: "Why should immunoglobulins not be given with live-virus vaccines?", choices: ["They increase local pain", "They destroy memory cells", "Transferred antibodies may interfere with the vaccine response", "They turn the vaccine into an inactivated vaccine"], correct: 2, explanation: "Passively administered antibodies can interfere with the immune response to a live-virus vaccine.", card: 2 }
    ],
    apply: [
      { prompt: "A breastfeeding infant receives maternal antibodies through breast milk. Which type of immunity does this represent?", choices: ["Active natural immunity", "Active vaccine immunity", "Passive immunity", "Innate cellular immunity"], correct: 2, explanation: "The infant receives preformed antibodies from another person, so the protection is passive and temporary.", card: 1 },
      { prompt: "A patient recently received immunoglobulin and is scheduled for a live-virus vaccine. What concern from the lecture should guide the plan?", choices: ["The vaccine will become toxic", "The immunoglobulin may interfere with the vaccine response", "The vaccine will cause permanent passive immunity", "The immunoglobulin will increase vaccine replication"], correct: 1, explanation: "Passively administered antibodies can interfere with the response to live-virus vaccines.", card: 2 }
    ]
  },
  {
    id: "19-intramuscular-technique", title: "19. Intramuscular Vaccination Sites and Technique",
    cards: [
      { title: "IM delivery technique", highYield: true, body: "Spread skin taut to isolate muscle; bunching the muscle is acceptable mainly in pediatric and geriatric patients. Insert fully at 90 degrees with one quick, firm motion, inject, withdraw, and apply light gauze pressure." },
      { title: "Age-appropriate IM sites", body: "Use the vastus lateralis (anterolateral thigh) for children younger than 7 months or patients unable to ambulate. The deltoid is preferred for older children and adults and is suitable for small-volume injections." },
      { title: "Additional site guidance", body: "The ventrogluteal site is used for larger-volume or irritating, viscous, or oily medicines. Infant injections go into the bulkiest portion of the anterolateral thigh; for a child or adult, deltoid is preferred and vastus lateralis is an alternative." }
    ],
    test: [
      { prompt: "At what angle is an intramuscular vaccine administered?", choices: ["15 degrees", "30 degrees", "45 degrees", "90 degrees"], correct: 3, explanation: "IM injections enter the muscle at 90 degrees.", card: 0 },
      { prompt: "Which IM site is recommended for children younger than 7 months?", choices: ["Dorsogluteal", "Vastus lateralis", "Proximal triceps", "Forearm"], correct: 1, explanation: "The anterolateral thigh/vastus lateralis is recommended.", card: 1 },
      { prompt: "Which IM site is preferred for older children and adults receiving a small-volume vaccine?", choices: ["Deltoid", "Dorsogluteal", "Abdomen", "Proximal triceps"], correct: 0, explanation: "The deltoid is preferred for older children and adults.", card: 1 },
      { prompt: "What should be done immediately after withdrawing the IM needle?", choices: ["Massage vigorously", "Apply light pressure with gauze", "Reinsert at 45 degrees", "Cool the muscle"], correct: 1, explanation: "The lecture advises light gauze pressure for several seconds.", card: 0 }
    ],
    apply: [
      { prompt: "A 5-month-old infant needs an IM vaccination. Which site and angle are appropriate?", choices: ["Deltoid at 45 degrees", "Vastus lateralis at 90 degrees", "Dorsogluteal at 90 degrees", "Proximal triceps at 45 degrees"], correct: 1, explanation: "Use the anterolateral thigh and a 90-degree IM angle.", card: 1 },
      { prompt: "An ambulatory adult needs a small-volume IM vaccine. Which site is preferred?", choices: ["Deltoid", "Dorsogluteal", "Abdominal fat", "Proximal lateral triceps"], correct: 0, explanation: "The deltoid is the preferred adult IM vaccination site.", card: 1 }
    ]
  },
  {
    id: "20-subcutaneous-technique", title: "20. Subcutaneous Vaccination Sites and Technique",
    cards: [
      { title: "Subcutaneous vaccines", highYield: true, body: "The lecture lists MMR, varicella, and yellow fever as subcutaneous vaccines; all are live vaccines." },
      { title: "Subcutaneous sites", body: "Use the thigh for infants younger than 12 months and the proximal lateral triceps for patients older than 12 months." },
      { title: "Subcutaneous technique", highYield: true, body: "Pinch the fatty tissue and insert the needle at a 45-degree angle into tissue below the dermis and above the muscle, avoiding injection into muscle." }
    ],
    test: [
      { prompt: "Which group contains only subcutaneous vaccines listed in the lecture?", choices: ["MMR, varicella, yellow fever", "Tdap, Td, Shingrix", "PCV20, PPSV23, HPV", "Influenza, hepatitis B, rabies"], correct: 0, explanation: "MMR, varicella, and yellow fever are the listed subcutaneous vaccines.", card: 0 },
      { prompt: "At what angle is a subcutaneous vaccine administered?", choices: ["15 degrees", "45 degrees", "75 degrees", "90 degrees"], correct: 1, explanation: "The subcutaneous injection angle is 45 degrees.", card: 2 },
      { prompt: "Which site is used for a subcutaneous vaccine in an infant younger than 12 months?", choices: ["Thigh", "Deltoid", "Dorsogluteal", "Abdomen only"], correct: 0, explanation: "The thigh is the lecture's site for infants under 12 months.", card: 1 },
      { prompt: "Which site is used after 12 months?", choices: ["Proximal lateral triceps", "Dorsogluteal", "Calf", "Forearm vein"], correct: 0, explanation: "Use the proximal lateral triceps for patients over 12 months.", card: 1 }
    ],
    apply: [
      { prompt: "A 2-year-old needs a subcutaneous varicella vaccine. Which technique is appropriate?", choices: ["Deltoid at 90 degrees", "Proximal lateral triceps at 45 degrees after pinching fatty tissue", "Dorsogluteal at 90 degrees", "Thigh muscle at 90 degrees"], correct: 1, explanation: "For age over 12 months, use the proximal lateral triceps and a 45-degree subcutaneous angle.", card: 2 },
      { prompt: "A clinician pinches fatty tissue before inserting a vaccine needle at 45 degrees. What route is being used?", choices: ["Intramuscular", "Subcutaneous", "Intranasal", "Oral"], correct: 1, explanation: "Pinched fatty tissue and 45-degree insertion identify the subcutaneous route.", card: 2 }
    ]
  },
  {
    id: "21-avoid-gluteal", title: "21. Why Vaccines Avoid the Gluteal Muscle",
    cards: [
      { title: "Dorsogluteal site is not recommended", highYield: true, body: "The buttock/dorsogluteal site is not recommended for any patient because it lies near major blood vessels and nerves." },
      { title: "Unreliable muscle depth", body: "Adipose depth in the buttock is inconsistent, making it difficult to reach the correct depth for a true intramuscular injection." }
    ],
    test: [
      { prompt: "Why is the dorsogluteal site avoided?", choices: ["It has no nerves", "It is near major vessels and nerves", "It always produces passive immunity", "It is only for subcutaneous vaccines"], correct: 1, explanation: "Major vessels and nerves create avoidable risk.", card: 0 },
      { prompt: "What makes true IM delivery unreliable in the buttock?", choices: ["Inconsistent adipose depth", "Absent skin", "A fixed 45-degree angle", "No blood supply"], correct: 0, explanation: "Variable adipose thickness can prevent the needle from reaching muscle.", card: 1 },
      { prompt: "Is the dorsogluteal site recommended for any patient population in the lecture?", choices: ["Yes, infants", "Yes, older adults", "No", "Only pregnant patients"], correct: 2, explanation: "The slide states it is not recommended in any patient population.", card: 0 }
    ],
    apply: [
      { prompt: "A clinician selects the buttock for routine vaccine administration. What is the primary lecture-based objection?", choices: ["The site is too close to major vessels and nerves and adipose depth is unreliable", "It produces excessive antibodies", "It is the preferred infant site", "It is an oral route"], correct: 0, explanation: "Both nearby neurovascular structures and inconsistent adipose depth make this site inappropriate.", card: 0 }
    ]
  },
  {
    id: "22-vaccine-reactions", title: "22. Local, Systemic, and Anaphylactic Reactions",
    cards: [
      { title: "Local reactions", body: "Local reactions are the most common: pain, swelling, and redness. They generally occur within hours, are mild, and are self-limited." },
      { title: "Systemic reactions", body: "Systemic reactions include fever, malaise, myalgia, headache, and decreased appetite. They are nonspecific; live vaccines may cause mild disease-like symptoms 1–3 weeks later." },
      { title: "Allergic reactions and anaphylaxis", highYield: true, body: "IgE-mediated allergic reactions usually occur immediately, within 1 hour. Anaphylaxis is rare but life-threatening and may include generalized urticaria, angioedema, dyspnea, wheezing, hypotension, or shock." },
      { title: "Anaphylaxis versus vasovagal response", body: "Vasovagal or anxiety symptoms can mimic allergy. Vasovagal findings include transient loss of consciousness and good response once supine; providers must screen patients and have emergency anaphylaxis supplies." }
    ],
    test: [
      { prompt: "Which vaccine reaction is most common?", choices: ["Local pain, swelling, and redness", "Anaphylactic shock", "Encephalopathy", "Myocarditis"], correct: 0, explanation: "Local reactions are most common and usually mild.", card: 0 },
      { prompt: "Which symptoms are systemic reactions?", choices: ["Fever, malaise, myalgia, and headache", "Only injection-site redness", "Only generalized urticaria", "Only transient syncope"], correct: 0, explanation: "These generalized symptoms are listed as systemic reactions.", card: 1 },
      { prompt: "When do most IgE-mediated reactions occur?", choices: ["Within 1 hour", "After 10 years", "Only after a booster", "Before injection"], correct: 0, explanation: "Most IgE-mediated reactions occur immediately, within an hour.", card: 2 },
      { prompt: "Which finding supports anaphylaxis?", choices: ["Localized mild redness", "Generalized urticaria with wheezing and hypotension", "Good recovery when supine only", "Isolated fearfulness"], correct: 1, explanation: "Generalized allergic findings with respiratory or hemodynamic compromise indicate anaphylaxis.", card: 2 },
      { prompt: "What is a contraindication to subsequent doses?", choices: ["Mild local soreness", "Anaphylaxis after a prior dose", "Brief anxiety", "A small appetite decrease"], correct: 1, explanation: "Anaphylaxis following a vaccine dose contraindicates subsequent doses.", card: 2 }
    ],
    apply: [
      { prompt: "Minutes after vaccination, a patient develops generalized hives, wheezing, and hypotension. What reaction is most likely?", choices: ["Local reaction", "Systemic mild reaction", "Anaphylaxis", "Vasovagal response"], correct: 2, explanation: "Immediate generalized skin, respiratory, and hemodynamic findings indicate anaphylaxis.", card: 2 },
      { prompt: "A patient briefly loses consciousness after injection and improves promptly when placed supine. What does this pattern suggest?", choices: ["Vasovagal response", "Anaphylaxis", "Local reaction", "Live-vaccine infection"], correct: 0, explanation: "Transient loss of consciousness with good supine response is characteristic of the lecture's vasovagal pattern.", card: 3 },
      { prompt: "Several hours after vaccination, a patient has mild pain and redness only at the injection site. How is this classified?", choices: ["Local reaction", "Anaphylaxis", "Vertical transmission", "Systemic infection"], correct: 0, explanation: "Pain and redness limited to the injection site are local reactions.", card: 0 }
    ]
  },
  {
    id: "23-myths-hesitancy", title: "23. Vaccine Myths and Hesitancy Counseling",
    cards: [
      { title: "Vaccines and autism", highYield: true, body: "The lecture states there is no link between vaccines and autism. The Wakefield report involved only 12 selected cases, falsified data, conflicts and financial interests; it was retracted and the author lost his license. Large comparisons found equal autism risk in vaccinated and unvaccinated groups." },
      { title: "Aluminum safety", body: "The lecture states no link between aluminum salts and developmental conditions. Vaccine doses contain less than 0.5 mg aluminum; typical daily ingestion is estimated at 7–9 mg. A cited 2025 Denmark study found no association with asthma, allergies, autoimmune disease, autism, or ADHD." },
      { title: "Other common myths", body: "The deck lists myths that infant immune systems cannot handle vaccines, natural infection is always better, vaccines contain unsafe toxins, hygiene alone caused disease decline, risks outweigh benefits, vaccines infect children, and low U.S. disease rates make vaccination unnecessary." },
      { title: "Professional hesitancy counseling", body: "Use vaccine conversations as patient education opportunities. Assess vaccination at visits, use age/risk recommendations and shared decision-making, coadminister when appropriate, coordinate care, and direct patients to CDC, Vaccine Information Statements, Immunize.org, and ACIP talking points." }
    ],
    test: [
      { prompt: "What does the lecture conclude about vaccines and autism?", choices: ["A causal link is proven", "There is no link", "Only MMR causes autism", "Only aluminum causes autism"], correct: 1, explanation: "Multiple large studies found no association.", card: 0 },
      { prompt: "What was a major problem with the Wakefield report?", choices: ["It enrolled millions randomly", "It used a selective sample and falsified data", "It studied only vaccine efficacy", "It had no financial conflict"], correct: 1, explanation: "The deck describes selective sampling, falsified data, conflicts, and ethical violations.", card: 0 },
      { prompt: "How much aluminum does the lecture say is in listed vaccine doses?", choices: ["Less than 0.5 mg", "7–9 grams", "50 mg", "None in any vaccine"], correct: 0, explanation: "The slide states less than 0.5 mg per dose.", card: 1 },
      { prompt: "Which is a reliable resource listed for patient education?", choices: ["CDC Vaccine Information Statements", "Anonymous social-media posts", "The retracted Wakefield paper", "Unverified advertisements"], correct: 0, explanation: "VIS, CDC, Immunize.org, and ACIP are lecture-listed resources.", card: 3 },
      { prompt: "What communication approach is supported?", choices: ["Dismiss every question", "Use shared decision-making and evidence-based education", "Promise zero risk", "Avoid assessing vaccine status"], correct: 1, explanation: "The lecture emphasizes education, assessment, shared decisions, and reliable resources.", card: 3 }
    ],
    apply: [
      { prompt: "A parent says MMR causes autism based on the Wakefield paper. What is the best response?", choices: ["Agree because the study was definitive", "Explain that the paper was fraudulent and retracted and large studies found equal autism risk", "Refuse to discuss the concern", "Recommend avoiding every vaccine"], correct: 1, explanation: "Professional counseling should address the evidence and the report's documented flaws.", card: 0 },
      { prompt: "A patient fears aluminum in vaccines. Which response follows the lecture?", choices: ["Aluminum exposure occurs only through vaccines", "Vaccine doses contain under 0.5 mg and cited evidence found no association with listed developmental or immune conditions", "Every aluminum-containing vaccine is live", "The concern proves vaccines cause autism"], correct: 1, explanation: "The deck compares everyday exposure and cites safety evidence.", card: 1 },
      { prompt: "A hesitant patient wants trustworthy material before deciding. Which plan is most appropriate?", choices: ["Provide a CDC VIS and use shared decision-making", "Send an anonymous post", "Avoid answering questions", "Guarantee no adverse effects"], correct: 0, explanation: "VIS and shared decision-making are lecture-supported tools for professional counseling.", card: 3 }
    ]
  },
  {
    id: "24-covid-vaccine-types", title: "24. COVID-19 Vaccines and Types",
    cards: [
      { title: "The four 2026–2027 products", highYield: true, body: "The lecture lists Moderna Spikevax, Moderna mNexspike, Pfizer Comirnaty, and Novavax Nuvaxovid." },
      { title: "Vaccine types", highYield: true, body: "Spikevax, mNexspike, and Comirnaty are mRNA vaccines. Nuvaxovid is a protein-based recombinant vaccine." },
      { title: "Age ranges listed", body: "Spikevax: 6 months+. mNexspike: 12 years+. Comirnaty: 5 years+. Nuvaxovid: 12 years+. The later eligibility slides limit 2026–2027 use to all adults 65+ or younger eligible ages with a high-risk condition." }
    ],
    test: [
      { prompt: "Which are the four COVID-19 vaccines listed?", choices: ["Spikevax, mNexspike, Comirnaty, Nuvaxovid", "FluMist, Shingrix, Arexvy, Abrysvo", "PCV15, PCV20, PCV21, PPSV23", "MMR, varicella, IPV, HPV"], correct: 0, explanation: "These are the four products on the 2026–2027 slide.", card: 0 },
      { prompt: "Which product is protein-based recombinant?", choices: ["Spikevax", "mNexspike", "Comirnaty", "Nuvaxovid"], correct: 3, explanation: "Nuvaxovid is the recombinant protein vaccine.", card: 1 },
      { prompt: "Which three products are mRNA vaccines?", choices: ["Spikevax, mNexspike, Comirnaty", "Comirnaty, Nuvaxovid, Arexvy", "Spikevax, Nuvaxovid, Abrysvo", "mNexspike, Nuvaxovid, FluMist"], correct: 0, explanation: "Both Moderna products and Pfizer Comirnaty are mRNA.", card: 1 },
      { prompt: "Which product is listed for ages 6 months and older?", choices: ["Spikevax", "mNexspike", "Comirnaty", "Nuvaxovid"], correct: 0, explanation: "Spikevax has the youngest listed starting age.", card: 2 }
    ],
    apply: [
      { prompt: "A patient specifically wants a non-mRNA COVID vaccine from the four products listed. Which product fits?", choices: ["Spikevax", "mNexspike", "Comirnaty", "Nuvaxovid"], correct: 3, explanation: "Nuvaxovid is protein-based recombinant; the other three are mRNA.", card: 1 },
      { prompt: "A clinician is identifying the manufacturer and type of Comirnaty. Which pairing is correct?", choices: ["Pfizer, mRNA", "Moderna, recombinant protein", "Novavax, mRNA", "GSK, live attenuated"], correct: 0, explanation: "Comirnaty is Pfizer's mRNA product.", card: 1 }
    ]
  },
  {
    id: "25-mrna-covid", title: "25. mRNA COVID Vaccine Mechanism, Adverse Effects, and Contraindications",
    cards: [
      { title: "mRNA mechanism", highYield: true, body: "mRNA gives cells instructions to produce SARS-CoV-2 spike protein. Cells discard the mRNA, display spike protein, and the immune system produces antibodies and activates immune cells—teaching protection without causing COVID-19." },
      { title: "Safety properties", body: "mRNA vaccines do not integrate into DNA and cannot cause infection. Improvements increased stability, delivery, and reduced unwanted immune reactions." },
      { title: "Expected adverse effects", body: "Local effects: pain, redness, swelling. Systemic effects: fatigue, headache, myalgias, fever, chills, and nausea." },
      { title: "Myocarditis and pericarditis", highYield: true, body: "This is a rare mRNA-vaccine effect, highest in males ages 12–24, usually within 7 days after dose 2. Most recover quickly with rest/supportive care; risk is substantially higher after COVID infection." },
      { title: "Contraindications and precautions", body: "Avoid the same type after severe allergy to a previous dose and avoid a product containing a known allergen. Delay for moderate/severe acute illness. Avoid further doses after myocarditis/pericarditis following a COVID dose; use caution with specified allergy histories and multisystem inflammatory syndrome." }
    ],
    test: [
      { prompt: "What does mRNA in the vaccine instruct cells to produce?", choices: ["SARS-CoV-2 spike protein", "Human DNA", "Whole live virus", "Aluminum antibodies"], correct: 0, explanation: "Cells produce and display spike protein, prompting immunity.", card: 0 },
      { prompt: "What happens to vaccine mRNA after cells use it?", choices: ["It integrates into DNA", "It is broken down and discarded", "It becomes live virus", "It remains permanently"], correct: 1, explanation: "The slides state cells break down and discard the mRNA.", card: 0 },
      { prompt: "Which is a common systemic adverse effect?", choices: ["Fatigue and myalgia", "Permanent DNA alteration", "Vaccine infection", "Eradication failure"], correct: 0, explanation: "Fatigue, headache, myalgia, fever, chills, and nausea are listed systemic effects.", card: 2 },
      { prompt: "Who has the highest myocarditis/pericarditis risk described?", choices: ["Males 12–24", "Females over 75", "Infants under 6 months", "All groups equally"], correct: 0, explanation: "The highest risk is in males ages 12–24, usually within 7 days after dose 2.", card: 3 },
      { prompt: "What is a contraindication for the same COVID vaccine type?", choices: ["Mild arm pain", "Severe allergic reaction to a previous dose", "Fear of needles", "Prior influenza vaccination"], correct: 1, explanation: "A severe reaction to a prior dose or component is a contraindication.", card: 4 },
      { prompt: "What should happen after myocarditis/pericarditis following a COVID dose?", choices: ["Avoid further doses", "Repeat immediately", "Give FluMist", "Start a live vaccine series"], correct: 0, explanation: "The precaution slide says to avoid further doses.", card: 4 }
    ],
    apply: [
      { prompt: "A patient worries an mRNA vaccine will alter DNA. Which response matches the deck?", choices: ["The mRNA integrates permanently", "It does not integrate into DNA and is broken down after use", "It contains live SARS-CoV-2", "It suppresses all antibodies"], correct: 1, explanation: "The mRNA supplies temporary instructions and is discarded.", card: 1 },
      { prompt: "A 19-year-old man develops chest symptoms five days after his second mRNA dose. Which rare adverse effect is emphasized?", choices: ["Myocarditis/pericarditis", "Reye syndrome", "Horizontal transmission", "Tetanus"], correct: 0, explanation: "Timing and demographic match the lecture's highest-risk myocarditis/pericarditis pattern.", card: 3 },
      { prompt: "A patient had anaphylaxis to a prior dose of one COVID vaccine type. What does the lecture recommend?", choices: ["Use the same type without precautions", "Do not use the same vaccine type", "Give two doses together", "Switch to a live COVID vaccine"], correct: 1, explanation: "A severe prior reaction contraindicates that same type.", card: 4 }
    ]
  },
  {
    id: "26-covid-education", title: "26. Evidence-Based COVID Vaccine Education",
    cards: [
      { title: "Evidence for effectiveness", body: "The slides report high trial efficacy and real-world mRNA effectiveness against infection, hospitalization, and mortality. Protection against long COVID is weaker but improves with more doses." },
      { title: "Evidence for safety", highYield: true, body: "COVID vaccines were tested in large randomized trials across ages, sexes, ethnicities, and medical conditions. They were found safe and effective in people with conditions associated with severe disease." },
      { title: "Risk communication", body: "Explain expected local/systemic effects and the rare myocarditis risk in context: most recover quickly, and myocarditis/pericarditis risk is substantially higher after COVID infection than vaccination." },
      { title: "Special situations and reliable resources", body: "After recent infection, vaccination may be delayed 3 months depending on personal, household, and local risk. The lecture directs patients to CDC, Vaccine Information Statements, Immunize.org, and ACIP; pregnant patients may also use ACOG guidance and CDC v-safe monitoring." }
    ],
    test: [
      { prompt: "What kind of trials tested COVID-19 vaccines in the lecture?", choices: ["Only small case reports", "Large randomized controlled trials", "No human trials", "Only animal observations"], correct: 1, explanation: "The safety slide describes large randomized controlled trials across diverse groups.", card: 1 },
      { prompt: "How does myocarditis/pericarditis risk compare between COVID infection and vaccination?", choices: ["Higher after infection", "Higher after every vaccine dose", "Identical", "Absent after infection"], correct: 0, explanation: "The deck states relative risk is substantially higher after infection.", card: 2 },
      { prompt: "How long may a recently infected patient delay vaccination?", choices: ["3 days", "3 weeks", "3 months", "3 years"], correct: 2, explanation: "The lecture allows a possible 3-month delay after recent infection.", card: 3 },
      { prompt: "Which is a reliable lecture-listed vaccine resource?", choices: ["CDC", "Anonymous forum", "Unverified influencer", "Retracted research only"], correct: 0, explanation: "CDC, VIS, Immunize.org, ACIP, and cited professional organizations are supported resources.", card: 3 },
      { prompt: "What should education include about expected effects?", choices: ["Claim there are no effects", "Discuss common local/systemic reactions and rare risks in context", "State the vaccine causes COVID", "Avoid all risk discussion"], correct: 1, explanation: "Reliable counseling is transparent about common reactions and contextualizes rare adverse effects.", card: 2 }
    ],
    apply: [
      { prompt: "A patient had COVID last month and asks whether vaccination must occur today. Which response matches the deck?", choices: ["It must be given immediately in every case", "It may be delayed up to 3 months while considering personal, household, and local risk", "It is permanently contraindicated", "Only a live vaccine can be used"], correct: 1, explanation: "Recent infection may justify a 3-month delay, modified by risk factors.", card: 3 },
      { prompt: "A patient asks where to verify COVID vaccine recommendations. Which source set is most appropriate?", choices: ["CDC and Vaccine Information Statements", "Anonymous social media", "The retracted Wakefield report", "Product rumors"], correct: 0, explanation: "CDC and VIS are reliable resources explicitly listed in the lecture.", card: 3 },
      { prompt: "A patient fears myocarditis from vaccination. What balanced counseling is supported?", choices: ["Say the event is impossible", "Explain it is rare, usually resolves with supportive care, and risk is higher after infection", "State every patient develops it", "Avoid discussing infection risk"], correct: 1, explanation: "The slides support transparent comparison of the rare vaccine risk with the higher infection-associated risk.", card: 2 }
    ]
  },
  {
    id: "27-rsv-adult-vaccines", title: "27. RSV Vaccines for Nonpregnant Adults",
    cards: [
      { title: "Available adult RSV vaccines", highYield: true, body: "Three adult RSV vaccines are FDA approved: GSK Arexvy (recombinant subunit), Moderna mResvia (mRNA), and Pfizer Abrysvo (protein subunit)." },
      { title: "Adult indications", highYield: true, body: "CDC recommends one dose for all adults 75+ and adults ages 50–74 at increased risk of severe RSV." },
      { title: "Risk factors", body: "Listed risks include chronic heart, lung, kidney, or liver disease; moderate/severe immunocompromise; uncontrolled diabetes; nursing-home residence; chronic hematologic conditions; and severe obesity." },
      { title: "Dose timing", body: "The adult RSV vaccine is a single one-time dose. It can be given any time of year, but late summer and early fall are preferred." }
    ],
    test: [
      { prompt: "Which adult RSV vaccine is mRNA?", choices: ["Arexvy", "mResvia", "Abrysvo", "Nirsevimab"], correct: 1, explanation: "Moderna mResvia is the mRNA RSV vaccine.", card: 0 },
      { prompt: "Which adult RSV vaccine is recombinant subunit?", choices: ["Arexvy", "mResvia", "Abrysvo", "Clesrovimab"], correct: 0, explanation: "GSK Arexvy is recombinant subunit.", card: 0 },
      { prompt: "Which adult RSV vaccine is protein subunit?", choices: ["Arexvy", "mResvia", "Abrysvo", "Spikevax"], correct: 2, explanation: "Pfizer Abrysvo is protein subunit.", card: 0 },
      { prompt: "Who routinely qualifies by age alone?", choices: ["All adults 50+", "All adults 75+", "Only adults 85+", "All adults 19+"], correct: 1, explanation: "All adults age 75 and older are recommended to receive one dose.", card: 1 },
      { prompt: "What is the recommendation for adults ages 50–74?", choices: ["Vaccinate only if at increased risk of severe RSV", "Vaccinate every adult annually", "Never vaccinate", "Use infant antibody instead"], correct: 0, explanation: "This age group is recommended when high-risk conditions are present.", card: 1 },
      { prompt: "What is the adult RSV dosing schedule?", choices: ["Annual dose", "Single one-time dose", "Two doses 2–6 months apart", "Four infant doses"], correct: 1, explanation: "The lecture describes a single one-time adult dose.", card: 3 }
    ],
    apply: [
      { prompt: "A healthy 78-year-old asks about RSV vaccination. What does the lecture recommend?", choices: ["No vaccine without chronic disease", "A single RSV vaccine dose", "Annual mResvia only", "Infant monoclonal antibody"], correct: 1, explanation: "All adults 75+ are recommended to receive one adult RSV vaccine dose.", card: 1 },
      { prompt: "A 62-year-old nursing-home resident with chronic lung disease asks about RSV vaccination. What applies?", choices: ["Not eligible until 75", "Eligible because ages 50–74 with severe-RSV risk factors are recommended", "Only pregnant adults qualify", "Must receive all three products"], correct: 1, explanation: "Both nursing-home residence and chronic lung disease are listed risk factors.", card: 2 },
      { prompt: "A 68-year-old eligible patient asks when to receive an adult RSV vaccine. What is accurate?", choices: ["Only in January", "Any time, preferably late summer or early fall", "Every month", "Only after documented RSV"], correct: 1, explanation: "The lecture allows year-round administration with late-summer/early-fall preference.", card: 3 }
    ]
  },
  {
    id: "10-herd-immunity-outcomes", title: "10. Successful and Unsuccessful Herd Immunity",
    cards: [
      { title: "Benefits of successful herd immunity", highYield: true, body: "Successful herd immunity disrupts circulation and indirectly protects susceptible people, including infants, older adults, and immunocompromised patients." },
      { title: "Risks when herd immunity fails", body: "When vaccination is low or clustered susceptibility exists, infection can reemerge and spread through multiple generations. The lecture's 2013 measles example produced 58 cases; 21% occurred in infants too young for MMR." },
      { title: "Vaccination protects in two ways", body: "Vaccination creates adaptive immunity in the recipient and reduces circulation around others. Because no vaccine is 100% effective, community protection still matters for vaccinated people." }
    ],
    test: [
      { prompt: "Who especially benefits from successful herd immunity?", choices: ["Only vaccine manufacturers", "Infants, older adults, and immunocompromised people", "Only people with prior infection", "Only people receiving live vaccines"], correct: 1, explanation: "Indirect protection is especially important for susceptible people.", card: 0 },
      { prompt: "What happens to the chain of infection when herd immunity succeeds?", choices: ["It is disrupted", "It always accelerates", "It becomes vertical transmission", "It eliminates adaptive immunity"], correct: 0, explanation: "Enough immune people reduce encounters between infected and susceptible people.", card: 0 },
      { prompt: "What did the 2013 measles example demonstrate?", choices: ["Low-vaccination communities can sustain multiple generations of spread", "Measles cannot reemerge", "Vaccinated people accounted for every case", "Infants were fully protected without herd immunity"], correct: 0, explanation: "The outbreak spread through six generations in communities with low vaccination rates.", card: 1 },
      { prompt: "Why does community protection matter even to vaccinated individuals?", choices: ["No vaccine is 100% effective", "Vaccines never produce antibodies", "Only passive immunity works", "All vaccines are live"], correct: 0, explanation: "Even vaccinated people may become infected after exposure because efficacy is not absolute.", card: 2 }
    ],
    apply: [
      { prompt: "An infant is too young for MMR and lives in a highly vaccinated community. What benefit is the infant receiving?", choices: ["Direct active immunity", "Indirect protection through herd immunity", "Toxoid immunity", "A vaccine booster"], correct: 1, explanation: "Immune community members reduce circulation around a susceptible infant.", card: 0 },
      { prompt: "A community contains a concentrated group of unvaccinated people and experiences a measles outbreak. What best explains the failure?", choices: ["A pocket of susceptible individuals allowed continued spread", "Measles has no herd threshold", "Vaccination increases transmission", "Vertical transmission is required"], correct: 0, explanation: "Clustered susceptibility can defeat broader community protection.", card: 1 }
    ]
  },
  {
    id: "11-eradication", title: "11. Disease Eradication",
    cards: [
      { title: "Eradication", highYield: true, body: "Eradication is the permanent reduction to zero of worldwide infection incidence through deliberate efforts. Once eradication is achieved, intervention measures are no longer needed." },
      { title: "Eradicated vaccine-preventable disease", highYield: true, body: "Smallpox is the only human disease identified in the lecture as fully eradicated. A broader public-health goal is to reduce disease burden or eliminate vaccine-preventable disease." }
    ],
    test: [
      { prompt: "How does the lecture define eradication?", choices: ["Temporary local reduction", "Permanent worldwide reduction to zero incidence", "Annual vaccination coverage", "Natural immunity in one community"], correct: 1, explanation: "Eradication requires permanent worldwide zero incidence after deliberate efforts.", card: 0 },
      { prompt: "What happens to intervention measures after true eradication?", choices: ["They are no longer needed", "They must double", "They become passive immunity", "They are required every month"], correct: 0, explanation: "The lecture states intervention measures are no longer needed after eradication.", card: 0 },
      { prompt: "Which vaccine-preventable human disease has been fully eradicated?", choices: ["Measles", "Polio", "Smallpox", "Influenza"], correct: 2, explanation: "Smallpox is the only fully eradicated human disease in the deck.", card: 1 }
    ],
    apply: [
      { prompt: "A disease has reached zero cases in one country but continues elsewhere. Does this meet the lecture definition of eradication?", choices: ["Yes, because one country is enough", "No, eradication requires permanent worldwide zero incidence", "Yes, if vaccination continues", "No, because eradication applies only to bacteria"], correct: 1, explanation: "Eradication is global and permanent, not a local reduction.", card: 0 }
    ]
  },
  {
    id: "12-antipyretics", title: "12. Antipyretics Around Vaccination",
    cards: [
      { title: "Do not premedicate routinely", highYield: true, body: "Premedicating infants with acetaminophen or ibuprofen before vaccination is not recommended because it is associated with decreased antibody concentrations for some vaccines." },
      { title: "Avoid aspirin in children", highYield: true, body: "Aspirin (a salicylate) is contraindicated in children younger than 18 because of the risk of Reye syndrome, a rapidly progressive encephalopathy associated with aspirin use after viral infection." },
      { title: "Reye syndrome findings", body: "The lecture lists vomiting, personality changes, seizures, loss of consciousness, elevated ammonia, low glucose, liver enlargement, and prolonged prothrombin time." }
    ],
    test: [
      { prompt: "Should infants routinely receive acetaminophen or ibuprofen before vaccination?", choices: ["Yes, before every vaccine", "No, routine premedication is not recommended", "Only before live vaccines", "Only before oral vaccines"], correct: 1, explanation: "Premedication may decrease antibody concentrations for some vaccines.", card: 0 },
      { prompt: "Which medication is contraindicated in patients younger than 18 in the lecture?", choices: ["Aspirin", "Acetaminophen", "Ibuprofen", "Aluminum salts"], correct: 0, explanation: "Aspirin is avoided because of Reye syndrome risk.", card: 1 },
      { prompt: "What is the key reason to avoid aspirin in children?", choices: ["Myocarditis", "Reye syndrome", "Herd-immunity failure", "Passive immunity"], correct: 1, explanation: "Aspirin use after viral illness is strongly associated with Reye syndrome.", card: 1 },
      { prompt: "Which laboratory pattern is listed with Reye syndrome?", choices: ["Low ammonia and high glucose", "Elevated ammonia and low glucose", "Normal liver size only", "Shortened prothrombin time"], correct: 1, explanation: "The slide lists elevated ammonia, low blood glucose, liver enlargement, and prolonged prothrombin time.", card: 2 }
    ],
    apply: [
      { prompt: "A parent plans to give an infant acetaminophen before routine shots to prevent fever. What should the clinician say?", choices: ["Routine premedication is recommended", "Routine premedication is not recommended because antibody concentrations may decrease", "Use aspirin instead", "Skip the vaccines"], correct: 1, explanation: "The deck advises against routine acetaminophen or ibuprofen premedication.", card: 0 },
      { prompt: "A 10-year-old recovering from a viral illness is offered aspirin. Which vaccine-lecture concern applies?", choices: ["Reye syndrome", "Herd immunity", "Seroconversion", "Horizontal transmission"], correct: 0, explanation: "Aspirin is contraindicated under age 18 because of Reye syndrome risk.", card: 1 }
    ]
  },
  {
    id: "13-adult-immunizations", title: "13. Adult Influenza, Zoster, Tetanus, and Pneumococcal Recommendations",
    cards: [
      { title: "Influenza", body: "Influenza vaccination is recommended annually in early fall for everyone 6 months and older. FluMist is live, intranasal, and for nonpregnant patients ages 2–49; Flublok is egg-free for adults 18+; high-dose flu vaccine is for adults 65+." },
      { title: "Zoster", highYield: true, body: "Shingrix is recombinant and recommended as 2 doses 2–6 months apart for healthy adults 50+ and as 2 doses for adults 19+ with weakened immune systems. Give it even after shingles, Zostavax, varicella vaccine, or uncertain chickenpox history." },
      { title: "Tetanus routine recommendations", body: "Adult products are Tdap and Td. Tdap is indicated if never received, for close newborn contact, and during every pregnancy. Routine Td booster is every 10 years, with earlier wound-based use." },
      { title: "Pneumococcal recommendations", highYield: true, body: "For adults never given a PCV, PCV15, PCV20, or PCV21 is recommended at age 50+ or ages 19–49 with listed risks. Healthy adults over 50 may receive PCV20/21 or PCV15 followed by PPSV23; PPSV23 is now mainly follow-up after PCV15." }
    ],
    test: [
      { prompt: "Who should routinely receive annual influenza vaccination?", choices: ["Only adults 65+", "Everyone 6 months and older", "Only pregnant adults", "Only children under 8"], correct: 1, explanation: "The lecture recommends influenza vaccine for everyone 6 months and older.", card: 0 },
      { prompt: "What is the routine Shingrix schedule for healthy adults 50+?", choices: ["One dose yearly", "Two doses separated by 2–6 months", "Three monthly doses", "One live dose"], correct: 1, explanation: "Shingrix is a two-dose recombinant zoster series.", card: 1 },
      { prompt: "During how many pregnancies is Tdap indicated?", choices: ["Only the first", "Each pregnancy", "Only after delivery", "None"], correct: 1, explanation: "The deck specifies Tdap during each pregnancy.", card: 2 },
      { prompt: "At what age does routine adult pneumococcal PCV recommendation begin in the deck?", choices: ["18", "21", "50", "75"], correct: 2, explanation: "PCV15, PCV20, or PCV21 is recommended for adults age 50+ who never received a PCV.", card: 3 },
      { prompt: "Which pneumococcal vaccine is mainly used as follow-up after PCV15?", choices: ["PPSV23", "PCV21", "Shingrix", "FluMist"], correct: 0, explanation: "PPSV23 is now used mainly after PCV15.", card: 3 }
    ],
    apply: [
      { prompt: "A healthy 52-year-old has never received Shingrix. What schedule is recommended?", choices: ["One dose now", "Two doses 2–6 months apart", "Annual live vaccine", "No vaccination after age 50"], correct: 1, explanation: "Healthy adults 50+ should receive the two-dose Shingrix series.", card: 1 },
      { prompt: "A 44-year-old smoker with chronic lung disease has never received a PCV. Which lecture recommendation applies?", choices: ["No pneumococcal vaccine until 75", "PCV15, PCV20, or PCV21 based on risk", "PPSV23 only is always first", "Only a live pneumococcal vaccine"], correct: 1, explanation: "Adults 19–49 with listed risk conditions are candidates for PCV vaccination.", card: 3 },
      { prompt: "A nonpregnant 30-year-old wants an intranasal influenza vaccine. Which product and age range match?", choices: ["FluMist, ages 2–49", "High-dose flu, ages 2–49", "Flublok, ages 6 months–8 years", "Shingrix, ages 2–49"], correct: 0, explanation: "FluMist is live intranasal influenza vaccine for nonpregnant patients 2–49.", card: 0 }
    ]
  },
  {
    id: "14-tetanus-wound-management", title: "14. Tetanus Routine and Wound Management",
    cards: [
      { title: "Routine adult tetanus vaccination", body: "Adults receive Tdap and Td. Give Tdap if never received, for newborn close contact, and during each pregnancy. Give Td routinely every 10 years." },
      { title: "When no vaccine is needed", highYield: true, body: "Regardless of wound type, no tetanus vaccine is needed only when both are true: the last tetanus vaccine was less than 5 years ago and the primary series is complete." },
      { title: "When vaccination is recommended", highYield: true, body: "Vaccinate for all wounds when history is unknown, the patient is unvaccinated, or the primary series is incomplete. With a complete series, vaccinate at 10+ years for clean minor wounds and 5+ years for dirty or major wounds." }
    ],
    test: [
      { prompt: "What is the routine Td booster interval?", choices: ["Every year", "Every 5 years", "Every 10 years", "Only after injury"], correct: 2, explanation: "Routine Td booster is every 10 years.", card: 0 },
      { prompt: "Which two conditions mean no tetanus vaccine is needed for any wound type?", choices: ["Last dose under 5 years and complete series", "Last dose under 10 years and incomplete series", "Clean wound and unknown history", "Dirty wound and no prior vaccination"], correct: 0, explanation: "Both a complete series and a dose within 5 years are required.", card: 1 },
      { prompt: "With a complete primary series, when does a clean minor wound trigger vaccination?", choices: ["Last dose 10+ years ago", "Last dose 2 years ago", "Only if fever develops", "Never"], correct: 0, explanation: "The clean/minor threshold is 10 years.", card: 2 },
      { prompt: "With a complete primary series, when does a dirty major wound trigger vaccination?", choices: ["Last dose 5+ years ago", "Last dose 10+ months ago", "Only with unknown history", "Never"], correct: 0, explanation: "The dirty/major wound threshold is 5 years.", card: 2 }
    ],
    apply: [
      { prompt: "A patient with a complete tetanus series has a clean minor cut. The last dose was 11 years ago. What does the lecture recommend?", choices: ["No vaccine", "Tetanus vaccination", "Live vaccine only", "Immunoglobulin with MMR"], correct: 1, explanation: "A clean minor wound requires vaccination when the last dose was 10 or more years ago.", card: 2 },
      { prompt: "A patient with a complete series has a dirty puncture wound and received tetanus vaccine 6 years ago. What is recommended?", choices: ["Tetanus vaccination", "No vaccine because it is under 10 years", "Restart every childhood dose", "Delay until infection develops"], correct: 0, explanation: "Dirty or major wounds use the 5-year threshold.", card: 2 },
      { prompt: "A patient has an unknown tetanus history and any type of wound. What is recommended?", choices: ["No vaccine", "Tetanus vaccination", "Only if the wound is clean", "Wait 10 years"], correct: 1, explanation: "Unknown history is an indication for vaccination for all wounds.", card: 2 }
    ]
  },
  {
    id: "15-boosters", title: "15. Vaccines That Require Boosters",
    cards: [
      { title: "Why boosters are needed", highYield: true, body: "With inactivated vaccines, antibody titers may fall below protective levels after several years. A booster raises antibodies back to protective levels." },
      { title: "Key booster examples", body: "Waning is most notable for pertussis; tetanus and diphtheria immunity also wanes. Live measles vaccine uses a second dose primarily to capture the small group who did not respond to the first dose." },
      { title: "Not every inactivated vaccine needs a booster", body: "The lecture's example is Hib: after the primary series, extra doses are not required because Hib disease is very rare in children older than 5." }
    ],
    test: [
      { prompt: "Why are periodic boosters used for some inactivated vaccines?", choices: ["To create passive immunity", "Antibody titers may fall below protective levels", "The vaccine becomes live", "The first dose always causes disease"], correct: 1, explanation: "Boosters restore waning antibody levels.", card: 0 },
      { prompt: "For which vaccine is waning especially notable in the lecture?", choices: ["Pertussis", "Hib", "Rotavirus", "Yellow fever"], correct: 0, explanation: "The lecture highlights pertussis waning.", card: 1 },
      { prompt: "Which two additional vaccine immunities are stated to wane?", choices: ["Tetanus and diphtheria", "Hepatitis A and rabies", "MMR and varicella", "HPV and hepatitis B"], correct: 0, explanation: "Tetanus and diphtheria immunity also wanes.", card: 1 },
      { prompt: "Why is a second measles dose given?", choices: ["The first dose never works", "To capture people who did not respond to the first dose", "To convert it into passive immunity", "To add aluminum"], correct: 1, explanation: "About 95% respond to one dose; the second gives nonresponders another opportunity.", card: 1 }
    ],
    apply: [
      { prompt: "A patient asks why another tetanus dose is needed years after the primary series. What is the best explanation?", choices: ["The prior vaccine caused infection", "Antibody levels can wane and a booster restores protection", "All live vaccines require yearly dosing", "The booster transfers maternal antibodies"], correct: 1, explanation: "Tetanus immunity wanes; boosting raises antibody back to a protective level.", card: 0 },
      { prompt: "A child completed the Hib primary series and is now older than 5. Which lecture point applies?", choices: ["Hib always needs annual boosters", "Additional Hib doses are not required in the example given", "Hib becomes a live vaccine", "The primary series must restart"], correct: 1, explanation: "Hib is the lecture's example of an inactivated vaccine not requiring extra doses after the primary series.", card: 2 }
    ]
  },
  {
    id: "16-live-vaccine-interval", title: "16. Timing Between Live Vaccines",
    cards: [
      { title: "Simultaneous administration", body: "Recommended live and inactivated vaccines may be given during the same clinic visit." },
      { title: "The 4-week rule", highYield: true, body: "If live vaccines such as MMR and varicella are not given simultaneously, separate them by at least 4 weeks (28 days)." },
      { title: "General interval principle", body: "Waiting longer between multidose vaccine doses does not reduce efficacy, but giving a dose earlier than the minimum interval or minimum age may interfere with antibody response." }
    ],
    test: [
      { prompt: "Can recommended live vaccines be administered together at one visit?", choices: ["Yes", "No", "Only with immunoglobulin", "Only during pregnancy"], correct: 0, explanation: "Simultaneous administration is allowed.", card: 0 },
      { prompt: "If two live vaccines are not given simultaneously, how long should they be separated?", choices: ["7 days", "14 days", "At least 4 weeks (28 days)", "One year"], correct: 2, explanation: "The lecture's live-vaccine spacing rule is at least 4 weeks.", card: 1 },
      { prompt: "Which pair is the lecture's example for the 4-week rule?", choices: ["MMR and varicella", "Td and Tdap", "PCV20 and PPSV23", "Hepatitis A and rabies"], correct: 0, explanation: "MMR and varicella are the named live-vaccine examples.", card: 1 },
      { prompt: "What is true about extending the interval between multidose vaccines?", choices: ["It requires restarting the series", "It does not diminish efficacy", "It always causes vaccine failure", "It converts active to passive immunity"], correct: 1, explanation: "Waiting longer is acceptable; early dosing is the concern.", card: 2 }
    ],
    apply: [
      { prompt: "A patient received MMR today but varicella was not given. When is the earliest lecture-supported time to give varicella?", choices: ["Tomorrow", "In 2 weeks", "In at least 4 weeks", "Only after 10 years"], correct: 2, explanation: "Separately administered live vaccines must be at least 28 days apart.", card: 1 },
      { prompt: "A delayed patient returns well after the planned interval for a multidose vaccine. What does the lecture say?", choices: ["Restart the series", "Add extra doses", "Continue without restarting because a longer interval does not reduce efficacy", "Give every dose on the same day"], correct: 2, explanation: "Extended intervals do not require restarting or adding doses.", card: 2 }
    ]
  },
  {
    id: "17-vaccine-anxiety", title: "17. Limiting Vaccine Anxiety and Pain",
    cards: [
      { title: "Positioning and support", body: "Children report less fear and pain when sitting upright rather than lying down. Parent participation increases comfort; a parent may hold the child on the lap, embrace them, and anchor the legs." },
      { title: "Safe stabilization", body: "Hold joints above and below with open palms and appropriate pressure. Proper technique improves antibody response and reduces local adverse reactions." },
      { title: "Pain-reduction technique", body: "Let alcohol dry, keep muscle warm and relaxed, use room-temperature medicine, break through skin quickly, and insert and withdraw straight without changing direction or wiggling. Never reuse needles; use separate drawing and injection needles." }
    ],
    test: [
      { prompt: "Which position is associated with less fear and pain in children receiving injections?", choices: ["Lying flat", "Sitting upright", "Standing unsupported", "Prone"], correct: 1, explanation: "The lecture cites less fear and pain while sitting upright.", card: 0 },
      { prompt: "What effect does parent participation have?", choices: ["It increases pain", "It increases child comfort", "It eliminates the need for technique", "It prevents antibody response"], correct: 1, explanation: "Parent participation increases comfort.", card: 0 },
      { prompt: "What should happen after cleaning skin with alcohol?", choices: ["Inject while wet", "Let the skin dry fully", "Wiggle the syringe", "Cool the muscle"], correct: 1, explanation: "Allow the alcohol to dry before injection.", card: 2 },
      { prompt: "How should the needle travel through the skin?", choices: ["Straight in and straight out", "In a circular motion", "With repeated direction changes", "Slowly while wiggling"], correct: 0, explanation: "The deck recommends a straight path without changing direction or wiggling.", card: 2 }
    ],
    apply: [
      { prompt: "A frightened child is about to receive a vaccine. Which approach is supported by the lecture?", choices: ["Have the child lie down alone", "Seat the child upright with supportive parent participation", "Ask the parent to leave", "Keep the injected muscle cold and tense"], correct: 1, explanation: "Upright positioning and parent involvement reduce fear and discomfort.", card: 0 },
      { prompt: "During injection preparation, which action may reduce pain?", choices: ["Inject before alcohol dries", "Keep the muscle warm and relaxed", "Use a cold medication", "Change needle direction after insertion"], correct: 1, explanation: "Warm, relaxed muscle and dry skin are among the deck's pain-reduction tips.", card: 2 }
    ]
  },
  {
    id: "18-intranasal-oral-vaccines", title: "18. Intranasal and Oral Vaccines",
    cards: [
      { title: "Intranasal vaccine", highYield: true, body: "FluMist is the live attenuated intranasal influenza vaccine. It may be given to nonpregnant patients ages 2–49." },
      { title: "Oral vaccines", highYield: true, body: "The two oral vaccines listed in the United States are rotavirus and typhoid." },
      { title: "Oral administration technique", body: "Give liquid slowly down one side of the inner cheek toward the back of the mouth without triggering the gag reflex. Do not readminister a dose if an infant spits it out or vomits during or after administration." }
    ],
    test: [
      { prompt: "Which vaccine is available intranasally?", choices: ["FluMist", "Shingrix", "Tdap", "PCV20"], correct: 0, explanation: "FluMist is the intranasal influenza vaccine.", card: 0 },
      { prompt: "Which two oral vaccines are listed in the lecture?", choices: ["Rotavirus and typhoid", "MMR and varicella", "Hepatitis B and HPV", "Tetanus and diphtheria"], correct: 0, explanation: "Rotavirus and typhoid are the two oral vaccines named.", card: 1 },
      { prompt: "Where should an oral vaccine be directed?", choices: ["Straight toward the gag reflex", "Slowly along one side of the inner cheek", "Under the tongue only", "Into the deltoid"], correct: 1, explanation: "The liquid is given slowly along the cheek toward the back of the mouth.", card: 2 },
      { prompt: "Should an infant's oral dose be repeated after vomiting during administration?", choices: ["Yes, always", "No, readministration is not recommended", "Only after 4 weeks", "Only with aspirin"], correct: 1, explanation: "The lecture says not to readminister after spitting out or vomiting.", card: 2 }
    ],
    apply: [
      { prompt: "A healthy, nonpregnant 25-year-old prefers a needle-free influenza option. Which lecture-listed vaccine may fit?", choices: ["FluMist", "High-dose flu vaccine", "Shingrix", "PPSV23"], correct: 0, explanation: "FluMist is intranasal and permitted for nonpregnant patients ages 2–49.", card: 0 },
      { prompt: "An infant vomits immediately while receiving an oral rotavirus vaccine. What does the lecture recommend?", choices: ["Repeat the dose immediately", "Do not readminister the dose", "Switch to an IM rotavirus dose", "Give aspirin first"], correct: 1, explanation: "Readministration after spitting out or vomiting is not recommended.", card: 2 }
    ]
  },
  {
    id: "02-antibodies-antigens-epitopes", title: "2. Antibodies, Antigens, and Epitopes",
    cards: [
      { title: "Antigens and epitopes", body: "An antigen is a foreign substance that triggers an immune response. Each antigen has distinct surface features called epitopes, which produce a specific response." },
      { title: "Antibody function", highYield: true, body: "An antibody is a protein made after antigen exposure. Its lock-and-key binding helps eliminate antigens by direct neutralization or by tagging them for other parts of the immune system." },
      { title: "How vaccines use antigens", body: "Vaccines introduce antigens without causing the target disease. Antigens may be weakened or killed organisms, exterior pieces, genetic material, or a bacterial toxin rendered non-toxic. The adaptive immune system develops pathogen-specific antibodies, T cells, and memory." }
    ],
    test: [
      { prompt: "What is an epitope?", choices: ["A memory B cell", "A distinct surface feature of an antigen", "A type of adjuvant", "A killed pathogen"], correct: 1, explanation: "Epitopes are distinct antigen surface features that drive specific immune responses.", card: 0 },
      { prompt: "Which statement describes an antibody?", choices: ["A foreign substance that triggers immunity", "A protein made after antigen exposure", "A weakened pathogen", "A vaccine preservative"], correct: 1, explanation: "Antibodies are proteins produced after antigen exposure.", card: 1 },
      { prompt: "How can antibody binding help eliminate an antigen?", choices: ["Only by producing fever", "By neutralizing it directly or tagging it for other immune arms", "By converting it into an epitope", "By suppressing adaptive immunity"], correct: 1, explanation: "The slides describe direct neutralization and immune tagging as antibody functions.", card: 1 },
      { prompt: "What does vaccination train the immune system to do?", choices: ["Respond nonspecifically to every organism", "Recognize and respond more quickly to a specific pathogen", "Eliminate innate immunity", "Avoid producing T cells"], correct: 1, explanation: "Vaccine antigen exposure creates recognition and memory for a faster, more effective later response.", card: 2 }
    ],
    apply: [
      { prompt: "A vaccine contains a non-toxic form of a bacterial toxin. What is serving as the antigenic stimulus?", choices: ["A maternal antibody", "A treated bacterial toxin", "An aluminum salt only", "A memory cell"], correct: 1, explanation: "The lecture lists bacterial toxin treated to be non-toxic as one form of vaccine antigen.", card: 2 },
      { prompt: "After vaccination, a patient's immune system rapidly recognizes the pathogen during later exposure. Which vaccine-induced feature explains this?", choices: ["Loss of epitopes", "Adaptive immune memory", "Passive antibody transfer", "Reduced antigen specificity"], correct: 1, explanation: "Vaccination generates pathogen-specific adaptive immune memory.", card: 2 }
    ]
  },
  {
    id: "03-live-vaccines", title: "3. Live Vaccines",
    cards: [
      { title: "Live-attenuated vaccine characteristics", highYield: true, body: "Live vaccines contain weakened pathogens and produce an immune response similar to natural infection. They usually produce immunity with 1–2 doses and depend on replication and host immune competence." },
      { title: "Live-vaccine cautions", body: "Live vaccines are fragile and require careful storage and handling. Because replication can cause severe infection in an immunocompromised host, live vaccines are contraindicated in immunocompromised and pregnant patients." },
      { title: "Live-vaccine list", highYield: true, body: "The lecture's live vaccines are MMR, varicella, yellow fever, rotavirus (RotaTeq), intranasal influenza (FluMist only), typhoid, and orthopox virus (mpox)." }
    ],
    test: [
      { prompt: "How many doses commonly produce immunity with a live-attenuated vaccine?", choices: ["Exactly five", "Usually 1–2", "One every year", "None without immunoglobulin"], correct: 1, explanation: "Live vaccines commonly produce immunity with 1–2 doses.", card: 0 },
      { prompt: "Which patient factor is essential for protection from a live vaccine?", choices: ["Host immune competence", "Recent immunoglobulin only", "Absent replication", "Use of an aluminum adjuvant"], correct: 0, explanation: "Live vaccines depend on replication and the host's immune competence.", card: 0 },
      { prompt: "Which influenza vaccine is live?", choices: ["Regular intramuscular influenza vaccine", "Flublok", "High-dose intramuscular vaccine", "FluMist"], correct: 3, explanation: "FluMist is the live attenuated intranasal influenza vaccine.", card: 2 },
      { prompt: "Which group contains only live vaccines listed in the lecture?", choices: ["MMR, varicella, yellow fever", "Hepatitis A, IPV, rabies", "Hepatitis B, HPV, Hib", "Diphtheria, tetanus, pertussis"], correct: 0, explanation: "MMR, varicella, and yellow fever are all on the lecture's live-vaccine list.", card: 2 },
      { prompt: "Live vaccines are contraindicated in which patients?", choices: ["Healthy adults over 50", "Pregnant or immunocompromised patients", "All adults with egg allergy", "Patients receiving inactivated vaccines"], correct: 1, explanation: "The lecture's rule of thumb contraindicates live vaccines in pregnancy and immunocompromise.", card: 1 }
    ],
    apply: [
      { prompt: "A pregnant patient asks about MMR vaccination. Which response follows the lecture?", choices: ["MMR is preferred because it is inactivated", "MMR should be avoided because it is live", "MMR requires an aluminum adjuvant", "MMR provides passive immunity"], correct: 1, explanation: "MMR is live and live vaccines are contraindicated during pregnancy.", card: 1 },
      { prompt: "A patient receiving chemotherapy asks for FluMist. What is the key concern?", choices: ["FluMist is a toxoid", "FluMist is live and may cause severe infection in an immunocompromised host", "FluMist cannot replicate in anyone", "FluMist is only an adjuvant"], correct: 1, explanation: "FluMist is live and should not be given to an immunocompromised patient.", card: 1 }
    ]
  },
  {
    id: "04-inactivated-vaccines", title: "4. Inactivated Vaccines",
    cards: [
      { title: "Inactivated-vaccine characteristics", highYield: true, body: "Inactivated vaccines contain pathogens killed by heat or formalin, so they cannot replicate or cause disease from infection. They are less effective than live vaccines and require multiple doses; the first dose primes the immune system." },
      { title: "Inactivated and fractional types", body: "These vaccines may use whole inactive agents or specific components. Types include whole-cell viral or bacterial vaccines, subunits, polysaccharide, conjugate, recombinant vaccines, and toxoids." },
      { title: "Examples by class", highYield: true, body: "Whole agents: hepatitis A, IPV, rabies. Purified subunits: inactivated influenza, acellular pertussis, inactivated typhoid. Engineered subunits: Hib conjugate, meningococcal, pneumococcal. Recombinant: hepatitis B and HPV. Toxoids: diphtheria and tetanus." }
    ],
    test: [
      { prompt: "Why can an inactivated vaccine not cause disease from infection?", choices: ["It contains no antigen", "Its pathogen cannot replicate", "It always contains antibodies", "It is given only orally"], correct: 1, explanation: "The pathogen is killed and cannot replicate.", card: 0 },
      { prompt: "What is the role of the first dose of an inactivated vaccine?", choices: ["It always provides complete protection", "It acts as a primer for later protective responses", "It creates passive immunity", "It replaces all booster doses"], correct: 1, explanation: "The first dose primes the immune system; protective response develops after subsequent doses.", card: 0 },
      { prompt: "Which inactivated vaccine components are toxoids?", choices: ["Hepatitis A and rabies", "Diphtheria and tetanus", "Hib and pneumococcal", "Hepatitis B and HPV"], correct: 1, explanation: "The lecture table identifies diphtheria and tetanus as toxoids.", card: 2 },
      { prompt: "Which pair is recombinant?", choices: ["Hepatitis B and HPV", "IPV and rabies", "Diphtheria and tetanus", "Influenza and typhoid"], correct: 0, explanation: "Hepatitis B and HPV are listed as recombinant vaccines.", card: 2 },
      { prompt: "Which statement contrasts inactivated vaccines with live vaccines?", choices: ["Inactivated vaccines replicate in the host", "Inactivated vaccines generally require multiple doses", "Inactivated vaccines are more fragile", "Inactivated vaccines cause natural infection"], correct: 1, explanation: "Inactivated vaccines are less immunogenic and generally require multiple doses.", card: 0 }
    ],
    apply: [
      { prompt: "An immunocompromised patient worries that an inactivated vaccine will reproduce and cause infection. Which counseling is supported?", choices: ["It can replicate only after a booster", "It cannot replicate and cannot create an infectious state", "It becomes live after injection", "It must be avoided in every immunocompromised patient"], correct: 1, explanation: "Inactivated vaccines cannot replicate, although immune response may be weaker.", card: 0 },
      { prompt: "A student is asked which vaccine class uses a bacterial toxin made non-toxic. Which answer is correct?", choices: ["Toxoid", "Whole-agent", "Polysaccharide only", "Live attenuated"], correct: 0, explanation: "Toxoid vaccines use a treated bacterial toxin; diphtheria and tetanus are the listed examples.", card: 2 }
    ]
  },
  {
    id: "05-adjuvants", title: "5. Adjuvants",
    cards: [
      { title: "Purpose of adjuvants", highYield: true, body: "Adjuvants are vaccine ingredients that enhance the immune response. Most inactivated vaccines need them, whereas live vaccines generally do not." },
      { title: "Aluminum salts", highYield: true, body: "Aluminum, referred to as aluminum salts, is the most common vaccine adjuvant. Adjuvanted vaccines may cause more local and systemic reactions than non-adjuvanted vaccines." },
      { title: "Patient education", body: "Explain that an adjuvant strengthens the immune response to the vaccine. The lecture also notes that aluminum exposure occurs through food, air, water, formula, medicines, cosmetics, and deodorants, and cites evidence finding no association between vaccine aluminum and asthma, allergies, autoimmune disorders, autism, or ADHD." }
    ],
    test: [
      { prompt: "What is the purpose of a vaccine adjuvant?", choices: ["To transfer passive antibodies", "To enhance the immune response", "To make a live vaccine replicate", "To prevent every local reaction"], correct: 1, explanation: "Adjuvants enhance the immune response to vaccine antigen.", card: 0 },
      { prompt: "What is the most common vaccine adjuvant in the lecture?", choices: ["Aspirin", "Aluminum salts", "Immunoglobulin", "Formalin"], correct: 1, explanation: "Aluminum salts are identified as the most common adjuvant.", card: 1 },
      { prompt: "Which vaccines generally do not need adjuvants?", choices: ["Live vaccines", "All inactivated vaccines", "Toxoids only", "Recombinant vaccines only"], correct: 0, explanation: "Live vaccines generally do not require adjuvants.", card: 0 },
      { prompt: "Compared with non-adjuvanted vaccines, adjuvanted vaccines may cause what?", choices: ["More local and systemic reactions", "No immune response", "Permanent infection", "Only passive immunity"], correct: 0, explanation: "The enhanced response may be accompanied by more local and systemic reactions.", card: 1 }
    ],
    apply: [
      { prompt: "A parent asks why an ingredient such as aluminum salt is added to a vaccine. What is the best lecture-based response?", choices: ["It weakens the immune response", "It enhances the immune response to the vaccine", "It provides passive antibodies", "It converts the vaccine into a live product"], correct: 1, explanation: "An adjuvant is included to enhance the immune response.", card: 0 },
      { prompt: "A patient says aluminum-containing vaccines cause autism. Which response reflects the slideshow?", choices: ["The claim is proven", "Evidence cited in the lecture found no association with autism or ADHD", "Aluminum is not used in vaccines", "Every adjuvant causes developmental disease"], correct: 1, explanation: "The lecture cites evidence finding no association between vaccine aluminum and autism/ADHD or other listed conditions.", card: 2 }
    ]
  },
  {
    id: "06-immunosuppression", title: "6. Vaccines and Immunosuppression",
    cards: [
      { title: "Inactivated versus live vaccines", highYield: true, body: "Inactivated vaccines cannot replicate or produce an infectious state, but limited host immune engagement may cause vaccine failure. Immunocompromised patients should not receive live vaccines because live products rely on replication." },
      { title: "Timing around immunosuppressants", body: "Complete all age-appropriate vaccines at least 2 weeks before biologics or chemotherapy. Vaccination during therapy may have diminished effect; the slide advises revaccination at least 3 months after the immunosuppressant is discontinued." },
      { title: "Close contacts and caregivers", body: "Healthy recipients of live vaccines could theoretically transmit mild disease horizontally. Close contacts and caregivers of immunocompromised patients should discuss whether to receive a live vaccine or choose an inactivated form." }
    ],
    test: [
      { prompt: "Why may an inactivated vaccine fail in an immunocompromised patient?", choices: ["The vaccine replicates uncontrollably", "The host immune system may not engage adequately", "The vaccine becomes a toxoid", "Passive antibodies always block it"], correct: 1, explanation: "The vaccine cannot infect the patient, but impaired host response may lead to vaccine failure.", card: 0 },
      { prompt: "Which vaccine type should immunocompromised patients avoid?", choices: ["Live vaccines", "All recombinant vaccines", "Every inactivated vaccine", "Toxoids only"], correct: 0, explanation: "Live vaccines depend on replication and are contraindicated in immunocompromised patients.", card: 0 },
      { prompt: "When should age-appropriate vaccines be completed before starting an immunosuppressant?", choices: ["At least 2 weeks before", "The same hour", "At least 3 months before", "Only after therapy ends"], correct: 0, explanation: "The lecture says at least 2 weeks before starting immunosuppressive therapy.", card: 1 },
      { prompt: "If vaccinated during immunosuppressive therapy, when does the lecture advise revaccination?", choices: ["Immediately", "One week later", "At least 3 months after discontinuation", "Never"], correct: 2, explanation: "Revaccinate at least 3 months after the immunosuppressant is discontinued.", card: 1 }
    ],
    apply: [
      { prompt: "A patient will begin chemotherapy in three weeks. What vaccination timing matches the lecture?", choices: ["Complete age-appropriate vaccines at least 2 weeks before therapy", "Delay every vaccine permanently", "Give only live vaccines during therapy", "Wait until the day chemotherapy starts"], correct: 0, explanation: "Completing vaccines at least 2 weeks before therapy allows a better response before immunosuppression.", card: 1 },
      { prompt: "The healthy spouse of an immunocompromised patient is offered a live vaccine. What counseling is appropriate?", choices: ["Live vaccines can never affect contacts", "Discuss possible horizontal transmission and whether an inactivated form is preferable", "The spouse must avoid all vaccines", "Give immunoglobulin with the live vaccine"], correct: 1, explanation: "The slides advise close contacts to discuss live versus inactivated options because theoretical horizontal transmission is possible.", card: 2 }
    ]
  },
  {
    id: "07-special-health-care-needs", title: "7. Special Health Care Needs and Pregnancy",
    cards: [
      { title: "Vaccination in pregnancy", highYield: true, body: "Inactivated vaccines do not pose a risk of causing fetal infection. The lecture recommends influenza, Tdap, and RSV vaccines during pregnancy and advises avoiding live vaccines because of fetal risk." },
      { title: "Maternal antibody transfer", body: "After an inactivated vaccine, maternal antibodies can pass to the child through vertical transmission. The COVID slides also describe placental and breast-milk transfer as passive protection for the infant." },
      { title: "COVID vaccination in pregnancy", body: "ACOG and SMFM recommend updated COVID vaccination for people considering pregnancy, pregnant, or breastfeeding. The slides state it is safe at any point in pregnancy, with no evidence of adverse maternal or fetal effects and growing safety data." }
    ],
    test: [
      { prompt: "Which vaccines are recommended in pregnancy in the general pregnancy slide?", choices: ["MMR, varicella, yellow fever", "Influenza, Tdap, and RSV", "Rotavirus, typhoid, mpox", "Only live influenza"], correct: 1, explanation: "The lecture lists influenza, Tdap, and RSV vaccines for pregnancy.", card: 0 },
      { prompt: "Which vaccine type should be avoided during pregnancy?", choices: ["Live vaccines", "All inactivated vaccines", "Every recombinant vaccine", "Toxoids"], correct: 0, explanation: "Live vaccines are avoided because of fetal risk.", card: 0 },
      { prompt: "How can maternal vaccination protect the infant?", choices: ["By eliminating epitopes", "Through transferred maternal antibodies", "By giving the fetus a live infection", "By suppressing adaptive immunity"], correct: 1, explanation: "Maternal antibodies can cross the placenta or be transferred through breast milk.", card: 1 },
      { prompt: "What do the slides state about COVID vaccination during pregnancy?", choices: ["It is contraindicated in every trimester", "It is safe at any point during pregnancy", "It must be delayed until breastfeeding ends", "It causes fetal infection"], correct: 1, explanation: "The lecture states maternal COVID immunization is safe at any point in pregnancy.", card: 2 }
    ],
    apply: [
      { prompt: "A pregnant patient asks whether an inactivated vaccine can replicate and infect the fetus. What is the best response?", choices: ["Yes, all inactivated vaccines replicate", "No, inactivated vaccines do not pose a risk of causing fetal infection", "Only aluminum causes fetal infection", "The vaccine provides no maternal antibodies"], correct: 1, explanation: "Inactivated products do not replicate; maternal antibodies may provide vertical passive protection.", card: 0 },
      { prompt: "A breastfeeding patient asks about an updated COVID vaccine. Which counseling follows the deck?", choices: ["Avoid it until breastfeeding stops", "Professional groups cited recommend vaccination, and transferred antibodies may protect the infant", "Only live COVID vaccines are recommended", "There are no safety data"], correct: 1, explanation: "The slides cite ACOG/SMFM recommendations and evidence of antibody transfer through breast milk.", card: 2 }
    ]
  },
  {
    id: "08-horizontal-vertical-transmission", title: "8. Horizontal and Vertical Transmission",
    cards: [
      { title: "Horizontal transmission", highYield: true, body: "Horizontal transmission is spread through contact with another person in the same generation." },
      { title: "Vertical transmission", highYield: true, body: "Vertical transmission passes a pathogen from mother to offspring. The slides list intrapartum transmission during birth and postpartum transmission through breast milk or blood from cracked nipples." }
    ],
    test: [
      { prompt: "What defines horizontal transmission?", choices: ["Mother-to-offspring spread", "Spread between people in the same generation", "Antibody transfer through placenta", "Vaccine antigen presentation"], correct: 1, explanation: "Horizontal transmission occurs between people in the same generation.", card: 0 },
      { prompt: "What defines vertical transmission?", choices: ["Spread through a college dorm", "Mother-to-offspring spread", "Spread by an adjuvant", "Spread only by air"], correct: 1, explanation: "Vertical transmission passes a pathogen from mother to offspring.", card: 1 },
      { prompt: "Which is a postpartum route of vertical transmission listed in the lecture?", choices: ["Breast milk", "College-dorm contact", "Aerosol spread between classmates", "Vaccine injection"], correct: 0, explanation: "The slides list breast milk or blood from cracked nipples as postpartum vertical transmission routes.", card: 1 }
    ],
    apply: [
      { prompt: "A caregiver acquires a mild infection after a live vaccine and transmits it to an immunocompromised household member. What type of transmission is this?", choices: ["Vertical", "Horizontal", "Passive", "Intrapartum"], correct: 1, explanation: "This occurs between people in the same generation, so it is horizontal transmission.", card: 0 },
      { prompt: "A pathogen passes from a mother to an infant during birth. How is this classified?", choices: ["Horizontal transmission", "Vertical intrapartum transmission", "Vertical postpartum transmission", "Herd transmission"], correct: 1, explanation: "Mother-to-child spread during birth is vertical intrapartum transmission.", card: 1 }
    ]
  },
  {
    id: "09-herd-immunity-concepts", title: "9. Herd Immunity Concepts and Efficacy",
    cards: [
      { title: "Definition and mechanism", highYield: true, body: "Herd immunity indirectly protects an entire population when a critical percentage is immune. As the immune proportion rises, susceptible people are less likely to meet infected people and the chain of infection is disrupted." },
      { title: "Herd-immunity threshold", body: "Each person-to-person disease has a critical threshold: the population immunization level needed to indirectly protect unimmunized people. R0 estimates how many unprotected people one person can infect; a higher R0 requires a higher immunity threshold." },
      { title: "Factors affecting herd immunity", body: "The lecture lists pathogen contagiousness, transmission mode, endemic disease, vaccine efficacy, pockets of susceptible people, close-contact settings such as dorms, and microbial ecology." },
      { title: "Threshold examples", body: "Measles has an R0 of 12–18 and a high threshold of about 95%. Polio has an R0 of 5–7 and a threshold of about 80–85%." }
    ],
    test: [
      { prompt: "What is herd immunity?", choices: ["Direct protection only in vaccinated people", "Indirect population protection when a critical percentage is immune", "A type of passive immunity", "A vaccine adverse reaction"], correct: 1, explanation: "Herd immunity is indirect protection created when enough of the population is immune.", card: 0 },
      { prompt: "What does R0 represent?", choices: ["The number of vaccine doses", "How many unprotected people one person can infect", "The number of epitopes", "The duration of passive immunity"], correct: 1, explanation: "R0 reflects contagiousness by estimating secondary infections among unprotected people.", card: 1 },
      { prompt: "How does a higher R0 affect the herd-immunity threshold?", choices: ["It lowers it", "It raises it", "It eliminates it", "It has no relationship"], correct: 1, explanation: "More contagious diseases require a higher immune proportion.", card: 1 },
      { prompt: "Which factor can weaken herd immunity despite a high overall vaccination rate?", choices: ["Pockets of susceptible individuals", "Long-term immune memory", "Specific antibody binding", "A lower R0"], correct: 0, explanation: "Susceptible pockets allow local circulation and outbreaks.", card: 2 },
      { prompt: "Which disease has the higher threshold example in the lecture?", choices: ["Polio", "Measles", "Both are identical", "Neither spreads person-to-person"], correct: 1, explanation: "Measles is more contagious and requires about 95% immunity versus 80–85% for polio.", card: 3 }
    ],
    apply: [
      { prompt: "A college has high overall vaccination coverage but one dorm contains many susceptible students. Which herd-immunity factor is most relevant?", choices: ["A focus of close contacts and a susceptible pocket", "Passive maternal antibodies", "Toxoid classification", "Vaccine route"], correct: 0, explanation: "Close-contact foci and pockets of susceptible people can permit transmission.", card: 2 },
      { prompt: "A highly contagious airborne disease has a large R0. What should be expected of its herd-immunity threshold?", choices: ["It should be higher", "It should be zero", "It should be lower", "It depends only on injection technique"], correct: 0, explanation: "A higher R0 means a larger immune proportion is needed to disrupt transmission.", card: 1 }
    ]
  }
].sort(function (a, b) {
  return parseInt(a.id, 10) - parseInt(b.id, 10);
});
