/* Exam prep, Coronary Angiogram (Sillaman). Rebuilt 2026-11-22 round 2: no application posted for this deck, so
   every LO is covered as quick facts (gold standard, indications, contraindications, held meds, access-site rules,
   post-cath timings, complication rates, contrast allergy prep, CCTA numbers, calcium score bands) and short
   "what do you do" cases. See data/exam-prep.js. */
(function () {
  "use strict";
  var X = ExamPrep.X;
  ExamPrep.lecture({
    id: "coronary-angiogram", title: "Coronary Angiogram", short: "Cath", group: "Cardiac Testing",
    concepts: {
      what: "What it is and the gold standard (LO 1, 2)",
      ind: "Indications (LO 3)",
      ci: "Contraindications (LO 4)",
      meds: "Meds held before and after, and pre-op (LO 5)",
      access: "Access sites, sheath removal and post-cath care (LO 7)",
      comp: "Complications (LO 6)",
      allergy: "Contrast dye allergy prep (LO 8)",
      rhc: "Right heart cath",
      ccta: "Coronary CT angiogram (LO 9)",
      cac: "Coronary calcium score (LO 10)"
    },
    qs: [
      /* LO 1, 2 */
      X("what", "Fact", 3, "What is the gold standard for diagnosing coronary atherosclerosis?", "Coronary angiogram (cardiac cath)", ["Coronary CT angiogram", "Exercise stress test", "Coronary calcium score"], "Invasive angiography directly shows the coronary lumen."),
      X("what", "Fact", 10, "During a coronary angiogram, where does the catheter go after arterial access?", "Up the aorta into the coronary ostia", ["Into the right atrium and PA", "Through the septum into the LA", "Down the femoral vein to the IVC"], "Contrast is injected into the cannulated coronaries."),
      X("what", "Fact", 14, "Below what degree of stenosis are lesions usually not flow-limiting?", "70%", ["30%", "50% in every artery", "90%"], "Stenoses under 70% rarely need revascularization."),

      /* LO 3 */
      X("ind", "Next step", 4, "Angina still limits her lifestyle despite maximal tolerated medical therapy. Next?", "Coronary angiogram", ["Another antianginal trial for a year", "Calcium score", "Echo only"], "Refractory lifestyle-limiting angina is an indication."),
      X("ind", "Next step", 4, "Stress test shows high-risk features. Next?", "Coronary angiogram", ["Repeat stress test in 6 months", "Calcium score", "Reassure"], "High-risk noninvasive results are an indication."),
      X("ind", "Next step", 4, "Atypical symptoms and an equivocal stress test, and you need an answer. Which test does the deck list?", "Coronary angiogram", ["Holter monitor", "MUGA", "No further testing"], "Equivocal stress results with a diagnosis needed are an indication."),
      X("ind", "Next step", 5, "Resuscitated from sudden cardiac arrest. Initial test?", "Coronary angiogram", ["Stress test", "CCTA", "Calcium score"], "After arrest, angiography is the initial test."),
      X("ind", "Classify", 5, "For which condition is angiography the INITIAL test?", "NSTEMI", ["Stable angina, low risk", "Atypical chest pain in a 30-year-old", "Asymptomatic screening"], "ACS, sudden arrest, life-threatening VT and new symptomatic HF go straight to angiography."),
      X("ind", "Next step", 5, "New onset symptomatic heart failure with a reduced EF. Which test looks for an ischemic cause?", "Coronary angiogram", ["Holter monitor", "Event monitor", "Calcium score"], "New cardiomyopathy and new symptomatic HF are indications."),

      /* LO 4 */
      X("ci", "Trap", 6, "Which is a relative contraindication to a coronary angiogram?", "Active GI bleeding", ["Stable angina", "Hyperlipidemia", "Prior MI"], "Bleeding is worsened by procedural anticoagulation."),
      X("ci", "Trap", 6, "Which is a relative contraindication to an elective angiogram?", "Acute renal failure", ["Diabetes", "Age over 70", "Obesity"], "Contrast can worsen acute kidney injury."),
      X("ci", "Trap", 6, "Which heart problem is a relative contraindication to an elective angiogram?", "Decompensated HF or acute pulmonary edema", ["Compensated HFrEF on GDMT", "Stable 2-vessel CAD", "Controlled hypertension"], "The patient must lie flat and tolerate contrast volume."),
      X("ci", "Trap", 6, "Which valve infection is a relative contraindication to coronary angiography?", "Aortic valve endocarditis", ["Tricuspid endocarditis only", "Mitral valve prolapse", "Bicuspid aortic valve without infection"], "The catheter passes by the aortic valve and could dislodge vegetations (standard teaching)."),
      X("ci", "Trap", 6, "A patient refuses any PCI or CABG no matter what is found. How does that affect the cath?", "It's a relative contraindication", ["It makes the cath mandatory", "It has no effect", "It's an absolute indication"], "If findings won't change treatment, the risk isn't justified."),
      X("ci", "Trap", 6, "Which drug toxicity is a relative contraindication to cath?", "Digitalis intoxication", ["Statin myalgia", "Aspirin sensitivity", "Metoprolol fatigue"], "Digoxin toxicity raises arrhythmia risk."),
      X("ci", "Trap", 6, "Which lab problem is a relative contraindication to cath?", "Severe symptomatic electrolyte imbalance", ["LDL of 160", "A1c of 7%", "TSH of 2"], "Correct severe electrolytes first to avoid arrhythmias."),
      X("ci", "Trap", 6, "Which is NOT on the deck's list of relative contraindications?", "Stable exertional angina", ["Severe anemia", "Acute stroke", "Untreated active infection"], "Stable angina can be an indication, not a contraindication."),

      /* LO 5 */
      X("meds", "Pick the drug", 7, "Which drugs may be held the morning of the cath?", "ACE inhibitor, ARB and diuretics", ["Aspirin and statin", "Insulin and levothyroxine", "Metoprolol and amlodipine"], "Holding them lowers the risk of hypotension and kidney injury."),
      X("meds", "Fact", 7, "Anticoagulation is held before a cath. What must the INR be?", "Under 1.5", ["Under 3.0", "Over 2.0", "Exactly 2.5"], "An INR under 1.5 limits access-site bleeding."),
      X("meds", "Pick the drug", 7, "A diabetic on metformin is scheduled for a cath. Instructions?", "Hold it the day of and 48 hours after", ["Double it the night before", "Continue it with no change", "Stop it permanently"], "Metformin is held around contrast to avoid lactic acidosis if the kidneys are injured."),
      X("meds", "Fact", 7, "What diet instructions come before a cath?", "Nothing to eat or drink after midnight", ["Large meal the morning of", "Clear liquids for 3 days", "No restrictions"], "The patient is NPO, shaved and given a sedative."),

      /* LO 7 */
      X("access", "Fact", 10, "What are the two most common access sites for coronary angiography?", "Femoral and radial arteries", ["Jugular and subclavian veins", "Brachial and carotid arteries", "Popliteal and tibial arteries"], "Brachial and subclavian are less common options."),
      X("access", "Fact", 11, "How far below the inguinal ligament can femoral access be?", "No more than 3 cm", ["At least 10 cm", "Exactly at the umbilicus", "Above the ligament"], "Stay within 3 cm of the ligament."),
      X("access", "Compare", 11, "Femoral stick too high vs too low: which risks?", "Too high: retroperitoneal bleed; too low: pseudoaneurysm", ["Too high: pseudoaneurysm; too low: retroperitoneal bleed", "Both cause only AV fistula", "Neither has risk"], "High sticks bleed into the retroperitoneum; low ones form pseudoaneurysms."),
      X("access", "Fact", 16, "When is the femoral sheath removed?", "About 4 hours after the last heparin dose", ["Immediately after the cath ends", "After 24 hours of bedrest", "The next week in clinic"], "Hourly vitals and 30-minute groin checks while it's in."),
      X("access", "Fact", 16, "How long is pressure held after femoral sheath removal?", "About 20 minutes or until hemostasis", ["1 minute", "2 hours", "No pressure is needed"], "Then bedrest for 6 hours."),
      X("access", "Fact", 16, "How long is bedrest after femoral sheath removal?", "6 hours", ["30 minutes", "24 hours", "3 days"], "Lying flat lets the arteriotomy seal."),
      X("access", "Fact", 17, "What are the post-cath vital sign checks?", "Every 15 min x1 hr, every 30 min x3 hr, every 4 hr x24 hr", ["Once, at discharge", "Every hour for 1 week", "Only if symptoms appear"], "Frequent early checks catch bleeding."),
      X("access", "Fact", 17, "After a cath, what are the activity limits?", "No lifting over 10 lbs or strenuous exercise for 1 week", ["Bedrest for 1 month", "No limits at all", "No walking for 2 weeks"], "This protects the access site."),
      X("access", "Classify", 18, "What are the three ways to get hemostasis at the access site?", "Hand pressure, mechanical clamp, closure device", ["Sutures, staples, glue", "Ice, heat, elevation", "Heparin, warfarin, aspirin"], "The clamp is preferred when hemostasis will take longer."),
      X("access", "Next step", 18, "Large sheath, a patient on DAPT and heavy anticoagulation. Which hemostasis method?", "Mechanical clamp", ["Closure device always", "No pressure", "A quick 1-minute hand hold"], "Clamps are preferred for large sheaths, heavy anticoagulation, hematoma or DAPT."),
      X("access", "Trap", 19, "A hematoma formed during the cath. Should a Mynx closure device be used?", "No: avoid it when a hematoma has formed", ["Yes, it seals hematomas", "Yes, always use one", "Only in the radial artery"], "Closure devices raise local infection and vascular complications."),
      X("access", "Fact", 20, "What is used for hemostasis after radial access?", "TR band", ["Mynx device", "Femoral clamp", "Sutures"], "A TR band compresses the radial artery."),

      /* LO 6 */
      X("comp", "Fact", 22, "What is the risk of death from a coronary angiogram?", "About 0.1%", ["About 5%", "About 10%", "About 25%"], "MI is also about 0.1% and stroke 0.4% during PCI."),
      X("comp", "Fact", 22, "What is the stroke risk during PCI?", "About 0.4%", ["About 4%", "About 14%", "Zero"], "Catheter manipulation can dislodge debris."),
      X("comp", "Classify", 22, "Which vascular complications show up late after a cath?", "Pseudoaneurysm and AV fistula", ["Acute thrombosis and dissection", "Hematoma and bleeding during the case", "Arrhythmia and allergy"], "Dissection, hematoma and thrombosis are acute."),
      X("comp", "Classify", 22, "Which vascular complication is acute during the cath?", "Dissection", ["Pseudoaneurysm", "AV fistula", "Cholesterol emboli"], "Dissection, thrombosis and hematoma happen acutely."),
      X("comp", "Case", 22, "A day after a femoral cath: a pulsatile groin mass with a bruit. Which complication?", "Pseudoaneurysm", ["Acute dissection", "Arrhythmia", "Contrast allergy"], "Pseudoaneurysms appear late with a pulsatile mass."),
      X("comp", "Case", 22, "After a high femoral stick: hypotension, flank pain, falling Hgb, no visible groin bleed. Which complication?", "Retroperitoneal hemorrhage", ["AV fistula", "Pseudoaneurysm", "Stroke"], "Retroperitoneal bleeding hides from view."),
      X("comp", "Case", 22, "During contrast injection, hives, wheezing and hypotension. Which complication?", "Allergic reaction to iodine contrast", ["Vasovagal reaction only", "Retroperitoneal bleed", "AV fistula"], "Contrast reactions are on the complication list."),
      X("comp", "Case", 22, "Creatinine rises from 1.2 to 2.0 two days after a cath. Which complication?", "Acute kidney injury", ["Pseudoaneurysm", "Allergic reaction", "Dissection"], "Contrast can injure the kidneys."),

      /* LO 8 */
      X("allergy", "Pick the drug", 23, "Contrast dye allergy before a cath. Which prednisone regimen?", "Prednisone 50 mg at 13, 7 and 1 hour before", ["Prednisone 5 mg the week before", "Prednisone 50 mg after the cath only", "No steroid needed"], "Steroids blunt the reaction."),
      X("allergy", "Pick the drug", 23, "Besides prednisone, what is given 1 hour before a cath for contrast allergy?", "Diphenhydramine 50 mg", ["Epinephrine 1 mg IV", "Famotidine 1 g", "Acetaminophen 1 g"], "Benadryl 50 mg 1 hour before."),
      X("allergy", "Trap", 6, "A documented anaphylactic reaction to contrast. How does the deck classify it?", "A relative contraindication", ["No concern at all", "An indication for the cath", "An absolute contraindication with no options"], "Premedicate and weigh the risk."),

      /* right heart cath */
      X("rhc", "Fact", 24, "Which value does a right heart (Swan-Ganz) cath measure directly?", "Wedge pressure (PCOP)", ["Coronary stenosis", "Coronary calcium", "LDL cholesterol"], "Also CVP, right-sided pressures, PA pressure, CO and SvO2."),
      X("rhc", "Next step", 25, "Shock with unknown volume status despite initial work-up. Which procedure helps?", "Right heart cath", ["Coronary calcium score", "Holter", "Stress test"], "Unknown volume status in shock is an indication."),
      X("rhc", "Next step", 25, "Suspected pulmonary arterial hypertension. Which cath confirms it?", "Right heart cath", ["Left heart cath only", "CCTA", "Calcium score"], "RHC measures PA pressure directly."),

      /* LO 9 */
      X("ccta", "Fact", 27, "Who is CCTA indicated for in this deck?", "Intermediate risk with equivocal stress results", ["Active STEMI", "Asymptomatic low-risk screening", "Known left main disease needing stents"], "Also known or suspected congenital coronary anomalies."),
      X("ccta", "Pick the drug", 27, "Before CCTA, which drugs are given?", "Beta-blocker, nitroglycerin, IV contrast", ["Adenosine and caffeine", "Dobutamine and atropine", "Heparin and aspirin"], "A slow heart rate and dilated arteries give clear images."),
      X("ccta", "Fact", 28, "What is the negative predictive value of CCTA for significant CAD?", "95-100%", ["50-60%", "70-75%", "10-20%"], "A normal CCTA essentially rules out significant CAD."),
      X("ccta", "Fact", 28, "Where is CCTA's positive predictive value highest?", "Left main and bypass grafts (91-93%)", ["Small distal branches", "Heavily calcified segments", "Stented segments"], "PPV is 60-84% for other coronary arteries."),
      X("ccta", "Trap", 29, "Which patient is a poor CCTA candidate on this deck?", "HR 95 in atrial fibrillation", ["HR 62 in sinus rhythm", "Can hold breath 10 seconds", "No coronary calcium"], "Limits: HR over 70, irregular rhythm, can't hold breath 5 seconds, heavy calcium or stents."),
      X("ccta", "Trap", 29, "A patient with several prior stents. Is CCTA a good choice?", "No: stents and heavy calcium limit images", ["Yes, it is best for stents", "Yes, with double the contrast", "Only if HR is over 90"], "Metal and calcium cause artifact."),
      X("ccta", "Fact", 29, "How long must the patient hold their breath for CCTA?", "Five seconds", ["Two minutes", "No breath hold needed", "One minute"], "Inability to hold for 5 seconds is a limitation."),
      X("ccta", "Next step", 27, "Suspected congenital coronary anomaly in a young athlete. Which noninvasive test?", "Coronary CT angiogram", ["Exercise EKG", "Calcium score", "MUGA"], "CCTA is useful for congenital coronary anomalies."),

      /* LO 10 */
      X("cac", "Fact", 30, "What is coronary calcium scoring used for?", "Screening asymptomatic patients", ["Diagnosing active ACS", "Measuring stenosis severity", "Guiding stent size"], "It's recommended for low-intermediate and intermediate risk."),
      X("cac", "Trap", 30, "What can a calcium score NOT tell you?", "How severe a coronary stenosis is", ["Whether plaque is present", "Overall plaque burden", "Long-term risk"], "It measures burden, not narrowing."),
      X("cac", "Fact", 30, "What is a calcium score most predictive of?", "The absence of coronary atherosclerosis", ["The exact stenosis", "Acute plaque rupture", "Valve calcification only"], "A score of 0 strongly suggests no atherosclerosis."),
      X("cac", "Classify", 31, "Calcium score of 0. Meaning?", "No identifiable disease", ["Mild disease", "Moderate disease", "Severe disease"], "0 = none, 1-99 mild, 100-399 moderate, over 400 severe."),
      X("cac", "Classify", 31, "Calcium score of 45. Meaning?", "Mild disease", ["No disease", "Moderate disease", "Severe disease"], "1 to 99 is mild."),
      X("cac", "Classify", 31, "Calcium score of 250. Meaning?", "Moderate disease", ["Mild disease", "Severe disease", "No disease"], "100 to 399 is moderate."),
      X("cac", "Classify", 31, "Calcium score of 520. Meaning?", "Severe disease", ["Moderate disease", "Mild disease", "No disease"], "Over 400 is severe."),
      X("cac", "Case", 30, "An asymptomatic 55-year-old at intermediate risk is unsure about a statin. Which test can help decide?", "Coronary calcium score", ["Coronary angiogram", "TEE", "Right heart cath"], "CAC is the screening tool for intermediate risk.")
    ]
  });
})();
