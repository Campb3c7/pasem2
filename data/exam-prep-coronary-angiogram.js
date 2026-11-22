/* Exam prep, Coronary Angiogram (Sillaman): concept and application questions on the 10 LOs. See data/exam-prep.js. */
(function () {
  "use strict";
  var X = ExamPrep.X;
  ExamPrep.lecture({
    id: "coronary-angiogram", title: "Coronary Angiogram", short: "Cath", group: "Cardiac Testing",
    concepts: {
      when: "Gold standard and when to cath (LO 1-3)",
      contra: "Contraindications (LO 4)",
      meds: "Meds held and contrast allergy prep (LO 5, 8)",
      access: "Access sites and after the cath (LO 6, 7)",
      rhc: "Right heart cath",
      ccta: "Coronary CT angiogram (LO 9)",
      cac: "Calcium scoring (LO 10)"
    },
    qs: [
      /* when to cath */
      X("when", "Compare", 3, "Which test is the gold standard for diagnosing coronary atherosclerosis?", "Cardiac catheterization", ["Coronary CT angiogram", "Nuclear stress test", "Calcium score"], "Cardiac catheterization with coronary angiography is the gold standard."),
      X("when", "Next step", 4, "Angina limiting daily life despite maximal tolerated medical therapy. Next step?", "Coronary angiogram", ["Repeat treadmill", "Add more nitrates", "Calcium score"], "Angina that significantly limits lifestyle despite maximal therapy is an indication for angiography."),
      X("when", "Next step", 4, "Stress test shows a large anterior reversible defect and a fall in BP. Next?", "Coronary angiogram", ["Repeat stress test", "Calcium score", "Holter monitor"], "High-risk criteria on noninvasive testing are an indication for angiography."),
      X("when", "Next step", 5, "Resuscitated from sudden cardiac arrest. Which is the initial test of choice for the coronaries?", "Coronary angiogram", ["Stress test first", "CT calcium score", "Outpatient Holter"], "After sudden cardiac arrest or life-threatening ventricular arrhythmia, angiography is the initial test."),
      X("when", "Trap", 5, "A student wants a stress test first in a patient with an NSTEMI. What is wrong?", "In ACS the angiogram is the initial test", ["Nothing: always stress before a cath", "ACS should get a calcium score first", "ACS never needs coronary imaging"], "ACS (STEMI, NSTEMI, UA) is listed as an indication for angiography as the initial test."),
      X("when", "Case", 4, "Which patient has an indication for a coronary angiogram?", "New-onset cardiomyopathy", ["Asymptomatic, low risk", "Rare PACs on Holter", "Calcium score of zero"], "New-onset cardiomyopathy is an indication to look for ischemic disease."),
      X("when", "Why", 14, "Cath shows a 50% LAD stenosis, no symptoms with exercise. Why is a stent not automatic?", "Under 70% isn't flow-limiting, so rarely needs it", ["Every stenosis seen on a cath gets stented", "LAD lesions can never be stented", "50% means it is already fully occluded"], "Stenoses under 70% are not flow-limiting and rarely require revascularization."),

      /* contraindications */
      X("contra", "Case", 6, "Which finding is a relative contraindication to an elective coronary angiogram?", "Active GI bleeding", ["Stable angina", "Prior PCI", "Well-controlled HTN"], "Active GI bleeding is a relative contraindication because the cath needs anticoagulation and antiplatelets."),
      X("contra", "Why", 6, "Why is acute renal failure a relative contraindication to an angiogram?", "The iodinated contrast can injure the kidneys", ["The catheter passes through the kidneys", "Renal failure makes the arteries too small", "Dialysis patients can't lie flat for it"], "Contrast can worsen kidney injury, and contrast AKI is a listed complication."),
      X("contra", "Case", 6, "Patient refuses any stent or bypass no matter what the cath shows. Relevance?", "Relative contraindication: it won't change care", ["No relevance: the cath is always done", "An absolute contraindication by law", "It means you should give tPA instead"], "Refusal to consider definitive therapy like PCI is a relative contraindication."),
      X("contra", "Trap", 6, "Unexplained fever of 39°C the morning of an elective cath. What do you do?", "Delay: fever may mean an untreated infection", ["Proceed: fever doesn't matter for a cath", "Proceed but use the femoral artery only", "Give tPA and cancel the cath forever"], "Unexplained fever and untreated active infection are relative contraindications."),

      /* meds and allergy */
      X("meds", "Why", 7, "Why is metformin held the day of and 48 hours after an angiogram?", "Contrast can hurt the kidneys, so it builds up", ["Metformin makes the coronary arteries spasm", "Metformin dissolves the contrast dye", "Metformin raises the bleeding risk at the site"], "Contrast-associated AKI can cause metformin to accumulate, raising lactic acidosis risk (mechanism: standard teaching)."),
      X("meds", "Case", 7, "On warfarin before an elective cath, INR is 2.4. Proceed?", "No: hold it until the INR is under 1.5", ["Yes: INR doesn't matter for a cath", "Yes, but only via the femoral artery", "No: INR must be over 3 to proceed"], "Anticoagulation is held beforehand, and the INR must be under 1.5."),
      X("meds", "Compare", 7, "Which meds may be held the morning of the cath?", "ACE inhibitor, ARB and diuretics", ["Aspirin and the statin", "The beta-blocker alone", "Insulin and levothyroxine"], "ACEi, ARBs and diuretics may be held the morning of the procedure."),
      X("meds", "Next step", 23, "Prior hives after contrast dye; needs a cath. Which prep?", "Prednisone at 13, 7 and 1 h, plus Benadryl", ["Benadryl alone the night before the cath", "No prep; just use less dye during it", "Epinephrine 1 hour before the cath"], "Contrast allergy prep is prednisone 50 mg at 13, 7 and 1 hour before plus diphenhydramine 50 mg 1 hour before."),
      X("meds", "Trap", 6, "Documented anaphylaxis to contrast. How does this differ from a mild rash?", "Anaphylaxis is a listed relative contraindication", ["Anaphylaxis and rash are treated the same way", "Anaphylaxis needs no prep, only a rash does", "A rash forbids the cath; anaphylaxis doesn't"], "Documented anaphylaxis to contrast is listed as a relative contraindication; milder reactions are premedicated."),

      /* access and post-cath */
      X("access", "Compare", 10, "What are the two most common access sites for a cath?", "Femoral and radial", ["Brachial and subclavian", "Jugular and femoral", "Radial and carotid"], "Femoral and radial are the two most common access sites."),
      X("access", "Predict", 11, "The femoral puncture is placed above the inguinal ligament. Which complication does that set up?", "Retroperitoneal bleed", ["Pseudoaneurysm", "AV fistula", "Stroke"], "Too high a femoral stick risks retroperitoneal bleeding; it must be no more than 3 cm below the ligament."),
      X("access", "Predict", 11, "The femoral puncture is too low, below the bifurcation. Which complication is more likely?", "Pseudoaneurysm", ["Retroperitoneal bleed", "Phrenic nerve injury", "Methemoglobinemia"], "Too low a femoral stick risks a pseudoaneurysm."),
      X("access", "Case", 22, "Hours after a femoral cath: hypotension, falling Hgb, flank and back pain, groin looks normal. Likely?", "Retroperitoneal hemorrhage", ["Pseudoaneurysm", "AV fistula", "Contrast allergy"], "Retroperitoneal bleeding hides behind the peritoneum, so the groin can look normal while the patient bleeds."),
      X("access", "Case", 22, "A week after a femoral cath: pulsatile groin mass with a bruit. Likely?", "Pseudoaneurysm", ["Acute dissection", "Retroperitoneal bleed", "Allergic reaction"], "Pseudoaneurysm and AV fistula are late vascular complications; a pulsatile mass suggests pseudoaneurysm."),
      X("access", "Why", 16, "Why does the femoral sheath stay in about 4 hours after the last heparin?", "Removing it at peak heparin would bleed more", ["The sheath helps the stent expand fully", "The patient needs it for more contrast", "Heparin can only be given through it"], "The sheath stays until anticoagulants fall below peak, usually 4 hours after the last heparin."),
      X("access", "Next step", 18, "Large sheath, on DAPT, a small hematoma formed. Which hemostasis method?", "Mechanical clamp", ["Mynx closure device", "Brief hand pressure", "No pressure needed"], "A clamp is preferred when longer hemostasis is expected; closure devices like Mynx are avoided if a hematoma formed."),
      X("access", "Trap", 17, "A patient asks to go back to lifting heavy boxes the day after the cath. Answer?", "No lifting over 10 lb or hard exercise for a week", ["Fine to lift anything once they are home", "Strict bed rest for one full month", "Only avoid lifting for the first 6 hours"], "After a cath, no heavy lifting over 10 lb and no strenuous exercise for one week."),
      X("access", "Case", 22, "After a cath, creatinine rises from 1.0 to 1.8 over two days. Likely cause?", "Contrast-associated kidney injury", ["Retroperitoneal bleeding", "Allergic contrast reaction", "Cholesterol in the urine"], "Acute kidney injury from the iodinated contrast is a listed complication."),

      /* RHC */
      X("rhc", "Compare", 24, "Left heart cath vs right heart cath: what does the right heart cath measure?", "Pressures, CO and SvO2, not the coronaries", ["Coronary stenoses and stent size", "Valve area by 3-D ultrasound", "Coronary calcium in Agatston units"], "The Swan-Ganz measures CVP, right heart and PA pressures, wedge pressure, cardiac output and SvO2."),
      X("rhc", "Next step", 25, "Shock with unclear volume status despite exam and echo. Which test clarifies it?", "Right heart catheterization", ["Coronary CT angiogram", "Calcium score", "24-hour Holter monitor"], "Unexplained volume status in shock and severe cardiogenic shock are RHC indications."),
      X("rhc", "Case", 25, "Which patient is a classic candidate for a right heart cath?", "Suspected pulmonary hypertension", ["Stable angina, low risk", "Daily palpitations", "Zero calcium score"], "Suspected or known pulmonary arterial hypertension is a right heart cath indication."),

      /* CCTA */
      X("ccta", "Next step", 27, "Intermediate risk with an equivocal stress test. Which noninvasive test images the coronaries?", "Coronary CT angiogram", ["Repeat treadmill", "MUGA scan", "Holter monitor"], "CCTA is indicated for intermediate-risk patients with equivocal stress results."),
      X("ccta", "Why", 27, "Why is a beta-blocker given before a coronary CTA?", "Slowing HR to 60-70 cuts motion blur", ["It dilates the coronaries for the dye", "It protects the kidneys from contrast", "It prevents an allergic dye reaction"], "Heart rate is slowed to 60-70 so the images are clear; nitroglycerin is given for vasodilation."),
      X("ccta", "Trap", 29, "Which patient is a poor CCTA candidate?", "AF with a heart rate of 110", ["Sinus rhythm at 62 bpm", "Can hold breath for 10 s", "No stents and low calcium"], "HR over 70, irregular rhythm, inability to hold breath, heavy calcium and prior stents limit CCTA."),
      X("ccta", "Compare", 28, "What is CCTA best at?", "Ruling CAD out: NPV 95-100%", ["Ruling CAD in: PPV 100% everywhere", "Measuring EF more exactly than MUGA", "Treating a lesion during the scan"], "CCTA has a very high negative predictive value; PPV is high for left main and grafts but 60-84% elsewhere."),
      X("ccta", "Case", 27, "Young athlete with exertional syncope and suspected anomalous coronary origin. Which test?", "Coronary CT angiogram", ["Calcium score", "Holter monitor", "MUGA scan"], "CCTA is useful for known or suspected congenital coronary anomalies."),

      /* CAC */
      X("cac", "Compare", 30, "What does a calcium score tell you, and what can't it tell you?", "Plaque burden, but not how severe a stenosis is", ["Stenosis severity, but not plaque burden", "Both plaque burden and stenosis severity", "Neither; it only measures the EF"], "CAC predicts the extent of atherosclerosis but cannot measure stenosis severity."),
      X("cac", "Case", 31, "Asymptomatic patient, calcium score 250. Interpretation?", "Moderate disease", ["No disease", "Mild disease", "Severe disease"], "CAC 100-399 is moderate disease (0 none, 1-99 mild, over 400 severe)."),
      X("cac", "Case", 30, "Which patient is the best candidate for a calcium score?", "No symptoms, intermediate risk", ["Active chest pain in the ED", "Known 3-vessel disease", "Prior CABG with new angina"], "CAC is a screening tool for asymptomatic low-intermediate and intermediate-risk patients."),
      X("cac", "Trap", 30, "Calcium score of 0 in an asymptomatic intermediate-risk patient. What does it mean?", "Coronary atherosclerosis is very unlikely", ["A 90% stenosis can't be ruled in or out", "Severe disease hidden by soft plaque", "The scan failed and must be repeated"], "CAC is highly predictive of the absence of coronary atherosclerosis.")
    ]
  });
})();
