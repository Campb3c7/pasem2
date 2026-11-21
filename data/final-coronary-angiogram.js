/* Coronary Angiogram Final test (Anna, 2026-11-21): one whole-deck test, new questions, each tied to its slide, every LO covered.
   F(slide, prompt, answer, [3 wrong], why). Ids "coronary-angiogram|final|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.final("coronary-angiogram", [
    /* LO 1 */
    F(3, "Which test does the deck call the gold standard for coronary atherosclerosis: CT angiogram or cardiac cath?", "Cardiac catheterization", ["Coronary CT angiogram", "Calcium score", "Nuclear stress test"], "The cath slide names catheterization as the gold standard."),
    F(2, "Which two noninvasive coronary tests do the objectives end with?", "Coronary CT angiogram and calcium scoring", ["TEE and MUGA", "Holter and event monitor", "Exercise ECG and stress echo"], "The last two objectives cover coronary CTA and calcium scoring."),

    /* LO 3 */
    F(4, "Which kind of stress test result calls for an angiogram?", "High-risk criteria on noninvasive testing", ["A normal low-risk result", "Good exercise capacity with no symptoms", "A negative stress echo"], "High-risk noninvasive findings are a listed indication."),
    F(4, "Which heart muscle diagnosis is an angiogram indication?", "New-onset cardiomyopathy", ["Long-standing stable HCM", "Athlete's heart", "Mild LVH from hypertension"], "New-onset cardiomyopathy is on the indication list."),
    F(5, "Which heart failure presentation can make the angiogram the initial test?", "New-onset symptomatic heart failure", ["Stable chronic HF for 10 years", "Leg swelling from amlodipine", "HF with a known cause already treated"], "New symptomatic HF is on the initial-test list."),
    F(5, "Which arrhythmia sends a patient straight to angiogram?", "Life-threatening ventricular arrhythmia", ["Occasional PACs", "Sinus arrhythmia", "First-degree AV block"], "A life-threatening ventricular arrhythmia is an initial-test indication."),

    /* LO 4 */
    F(6, "Which neurologic event is a relative contraindication to cath?", "Acute stroke", ["A migraine years ago", "Carpal tunnel", "Restless legs"], "Acute stroke is on the relative contraindication list."),
    F(6, "Which infection finding is a relative contraindication to cath?", "Unexplained fever that may be infection", ["A treated UTI last year", "A flu shot today", "A healed dental abscess"], "Unexplained fever and untreated active infection are listed."),
    F(6, "Which blood pressure problem is a relative contraindication to cath?", "Severe uncontrolled hypertension", ["Controlled hypertension on one drug", "Orthostatic dizziness last year", "White coat hypertension"], "Severe uncontrolled HTN is on the list."),
    F(6, "Which lab problem besides anemia is a relative contraindication to cath?", "Severe symptomatic electrolyte imbalance", ["High HDL", "Low vitamin D", "Normal potassium"], "Severe symptomatic electrolyte imbalance is listed."),

    /* LO 5 */
    F(7, "Which drug class held before cath is a blood thinner with an INR target?", "Anticoagulation such as warfarin", ["Statins", "Beta blockers", "Inhalers"], "Anticoagulation is held until the INR is under 1.5."),
    F(7, "What is done to the patient's skin and nerves before cath besides NPO?", "Shaved and given a sedative", ["Tattooed and given caffeine", "Given general anesthesia and intubated", "Nothing"], "The slide says the patient is shaved and given a sedative to relax."),
    F(17, "How often are vitals checked for the 24 hours after the first 4 hours post-cath?", "Every 4 hours", ["Every 15 minutes", "Once at discharge", "Every 30 minutes"], "After 15-minute then 30-minute checks, vitals are every 4 hours for 24 hours."),
    F(17, "How often are vitals checked during hours 2-4 after cath?", "Every 30 minutes", ["Every 4 hours", "Every 5 minutes", "Not at all"], "Vitals are every 30 minutes for 3 hours after the first hour."),

    /* LO 2 & 7 */
    F(8, "Where does the catheter enter in the methodology drawing?", "The groin", ["The neck vein", "The mouth", "The chest wall"], "The drawing shows the catheter running from the groin up to the heart."),
    F(10, "Which access site in the upper arm is on the list but less common?", "Brachial", ["Radial", "Femoral", "Popliteal"], "Brachial is listed with subclavian as less common sites."),
    F(11, "Why is a high femoral stick dangerous?", "The bleed can track into the retroperitoneum unseen", ["It hits the femoral nerve only", "It causes a pseudoaneurysm only", "It blocks the radial artery"], "Above the inguinal ligament bleeding goes to the retroperitoneum."),
    F(12, "What part of the aorta do the catheter tips hook into?", "The coronary openings in the aortic root", ["The aortic bifurcation", "The renal arteries", "The descending thoracic aorta"], "The coronary arteries open from the aortic root."),
    F(14, "What does PCI stand for?", "Percutaneous coronary intervention", ["Primary cardiac imaging", "Pulmonary capillary index", "Peripheral catheter insertion"], "PCI is percutaneous coronary intervention."),
    F(15, "What is implanted after angioplasty in the before-and-after picture?", "A stent", ["A pacemaker", "A closure device", "A valve"], "The after picture shows the blockage cleared and a stent implanted."),

    /* after the cath */
    F(16, "How often are vital signs taken while the femoral sheath is still in?", "Hourly", ["Every 4 hours", "Once a day", "Every 5 minutes"], "The sheath slide lists hourly vital signs."),
    F(16, "What is done at the same time as pulling the femoral sheath?", "Pressure is applied to the femoral artery", ["Heparin is restarted", "Contrast is injected", "The patient walks"], "The sheath is removed and pressure applied simultaneously."),
    F(18, "Which hemostasis method is a device left in place?", "Closure device", ["Hand-held pressure", "Mechanical clamp", "Ice pack"], "A closure device such as Mynx stays to seal the puncture."),
    F(19, "In the Mynx device, what positions the device against the artery wall?", "A balloon inflated inside the artery", ["A magnet", "A suture loop", "A TR band"], "The balloon is inflated in the lumen and pulled back against the wall."),
    F(20, "Is the TR band used for femoral or radial access?", "Radial", ["Femoral", "Both equally", "Neither"], "The TR band is a wrist band for the radial artery."),

    /* LO 6 */
    F(22, "What is the MI rate from a cath?", "About 0.1%", ["About 4%", "About 10%", "About 25%"], "MI is listed at 0.1%."),
    F(22, "Which embolic vascular complication is listed with acute thrombosis?", "Distal embolization", ["Distal amputation", "Distal dilation", "Distal hypertension"], "Acute thrombosis or distal embolization is a vascular complication."),
    F(22, "Which vascular complication is an abnormal artery-to-vein connection?", "AV fistula", ["Pseudoaneurysm", "Dissection", "Hematoma"], "An AV fistula connects artery and vein and is a late complication."),
    F(22, "Which rhythm complication is on the cath list?", "Arrhythmia", ["Heart murmur", "Valve prolapse", "Pericarditis"], "Arrhythmia is listed among cath complications."),

    /* LO 8 */
    F(23, "How many prednisone doses are in contrast allergy prep?", "Three", ["One", "Five", "Ten"], "Prednisone is given at 13, 7 and 1 hour before, so three doses."),
    F(23, "How long before the cath is Benadryl given?", "1 hour", ["13 hours", "24 hours", "Right after"], "Benadryl 50 mg is given 1 hour before the procedure."),

    /* right heart cath */
    F(24, "Which pressure from a right heart cath reflects the right atrium?", "Central venous pressure (CVP)", ["Wedge pressure", "Aortic pressure", "Pulmonary vein pressure"], "CVP is a direct right-sided measurement listed on the slide."),
    F(24, "Which flow measurement does the Swan-Ganz give?", "Cardiac output", ["Coronary flow reserve", "Ejection fraction on echo", "Calcium score"], "Cardiac output is one of the direct measurements."),
    F(25, "Which heart disease category is a right heart cath indication?", "Severe cardiopulmonary disease such as a left-to-right shunt", ["Mild hypertension", "Stable angina", "Isolated PACs"], "Severe cardiopulmonary disease including shunts and valve disease is listed."),

    /* LO 9 */
    F(27, "What heart rate is targeted before coronary CTA?", "60-70 bpm", ["90-100 bpm", "40-50 bpm", "Over 120 bpm"], "A beta blocker slows the heart to 60-70 bpm."),
    F(27, "Which three things is a patient typically given for coronary CTA?", "Beta blocker, nitroglycerin and IV contrast", ["Heparin, aspirin and clopidogrel", "Prednisone, Benadryl and saline", "Adenosine, dobutamine and atropine"], "The slide lists a BB, nitroglycerin and IV contrast."),
    F(28, "What is coronary CTA's positive predictive value for arteries other than left main and grafts?", "60-84%", ["91-93%", "95-100%", "10-20%"], "PPV is only 60-84% for the other coronary arteries."),
    F(29, "Which rhythm feature limits coronary CTA?", "An irregular heart rhythm", ["A regular sinus rhythm at 60", "A long PR interval", "A narrow QRS"], "An irregular rhythm is a listed limitation."),

    /* LO 10 */
    F(30, "What is a calcium score of zero highly predictive of?", "Absence of coronary atherosclerosis", ["Severe stenosis", "Valve disease", "Heart failure"], "The slide says calcium scoring is highly predictive of the absence of atherosclerosis."),
    F(30, "Is calcium scoring a diagnostic test for symptomatic patients or a screening tool?", "A screening tool for asymptomatic patients", ["A diagnostic test for ACS", "A rhythm test", "A treatment"], "The slide calls it a screening tool for asymptomatic patients."),
    F(31, "What range is mild disease on a calcium score?", "1 to 99", ["100 to 399", "Over 400", "0"], "1-99 is mild disease."),
    F(31, "Above what calcium score is disease called severe?", "400", ["100", "10", "1000 only"], "Over 400 is severe disease.")
  ]);
})();
