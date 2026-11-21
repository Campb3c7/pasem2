/* Echo & Telemetry Final test (Anna, 2026-11-21): one whole-deck test, new questions, each tied to its slide, every LO covered.
   F(slide, prompt, answer, [3 wrong], why). Ids "echo-telemetry|final|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.final("echo-telemetry", [
    /* LO 2 */
    F(2, "In case study 1, which answer choice shows rhythm only and cannot show the valves?", "ECG", ["Echocardiogram", "TEE", "3-D echo"], "An ECG records electrical activity, so it says nothing about valve structure."),
    F(2, "In case study 1, why is the treadmill stress test with Myoview the wrong pick?", "It looks for ischemia, not valve disease", ["It shows valves too slowly", "It is only for children", "It needs a TEE first"], "A nuclear stress test answers whether there is ischemia, while the case asks about a valve."),
    F(4, "Besides echo, which tests do the deck objectives cover?", "MUGA, telemetry and implantable monitors", ["Cardiac MRI and PET", "Coronary angiography and FFR", "Pulmonary function tests"], "The objectives end with MUGA, telemetry and implantable monitoring devices."),

    /* LO 1 & 3 */
    F(5, "Which septal problem on the TTE structure list is an aneurysm?", "Septal aneurysm", ["Aortic root aneurysm", "LV apical aneurysm only", "Berry aneurysm"], "Septal aneurysm is listed with LVH, wall motion abnormalities, PFO and ASD."),
    F(5, "How many heart valves does TTE evaluate?", "All four", ["Only the aortic", "Only the left-sided two", "None"], "The TTE slide lists all four valves: aortic, mitral, tricuspid and pulmonic."),
    F(6, "Which window is numbered 2 on the imaging windows slide?", "Apical", ["Parasternal", "Subcostal", "Suprasternal"], "The slide numbers them parasternal 1, apical 2 and subcostal 3."),
    F(6, "What is another name for the subcostal window?", "Subxiphoid", ["Suprasternal", "Parasternal", "Apical"], "The slide calls the subcostal window subxyphoid because the probe sits under the xiphoid."),
    F(7, "Which walls of the LV does the parasternal long axis show for contractility?", "The septum and posterior wall", ["The anterior and inferior walls", "The lateral wall only", "The apex only"], "Long axis estimates size and squeeze from the septum and posterior wall."),
    F(7, "In parasternal long axis, which tool looks for aortic or mitral regurgitation?", "Color Doppler", ["M-mode alone", "A bubble study", "MUGA"], "The slide says color Doppler is used in this view to find AR or MR and its mechanism."),
    F(7, "Which short-axis level shows the papillary muscles?", "Mid-ventricle", ["Base at the aortic valve", "Mitral valve level", "Suprasternal level"], "The third short-axis level is mid-ventricle at the papillary muscles, toward the apex."),
    F(8, "What makes the apical 5-chamber view different from the 4-chamber view?", "The aortic valve appears in the center", ["The right atrium disappears", "It is taken from the subcostal window", "It shows only the LV"], "The 5-chamber view adds the aortic valve to the middle of the image."),
    F(8, "Which apical view is best for calculating cardiac output?", "Apical 5-chamber", ["Apical 2-chamber", "Parasternal short axis", "Subcostal IVC"], "The 5-chamber view lines the Doppler beam up with the outflow tract, which is used to calculate cardiac output."),
    F(8, "Which apical view is best to see the LV apex?", "Apical 4-chamber", ["Apical 5-chamber", "Parasternal long axis", "Subcostal short axis"], "The slide lists the LV apex among what the apical 4-chamber view shows best."),
    F(9, "Which valves can a subcostal short axis show along with the aortic valve?", "Tricuspid and pulmonic", ["Mitral only", "None", "Only prosthetic valves"], "The subcostal short axis of the aortic valve also shows the tricuspid and pulmonic valves."),
    F(9, "What two IVC findings estimate volume status?", "Its diameter and its change with breathing", ["Its color and its length", "Its wall thickness and calcium", "Its pressure and pH"], "IVC diameter and respiratory variation are pivotal for estimating volume status."),
    F(10, "Which echo mode gives a 'tracing' of heart structures?", "M-mode", ["Color Doppler", "3-D echo", "Bubble study"], "M-mode draws one line through the heart over time, which looks like a tracing."),
    F(11, "Why is color Doppler easier to interpret than plain Doppler?", "Colors show the direction of blood flow", ["It uses no ultrasound", "It shows the coronary arteries", "It removes the need for windows"], "Coloring the flow by direction simplifies reading the Doppler signal."),
    F(12, "Which echo mode shows real-time motion of the heart's structures?", "2-D echo", ["M-mode only", "MUGA", "Telemetry"], "2-D echo shows the actual structures moving in real time."),
    F(13, "Why are 3-D echo function measurements more accurate?", "They are taken in real time while the heart is beating", ["They use radiation", "They are averaged over a month", "They use a catheter"], "Live 3-D images measure function on the beating heart, which improves accuracy."),

    /* LO 3 */
    F(14, "Which LV outflow measure is on the echo evaluation list?", "Left ventricular outflow tract", ["Coronary flow reserve", "Fractional flow reserve", "Carotid intima thickness"], "LVOT is listed among the things echo measures."),
    F(14, "Which left-sided valve lesions does the echo list include?", "Mitral stenosis, regurgitation and prolapse", ["Only mitral prolapse", "Only aortic regurgitation", "No mitral lesions"], "The list names mitral valve stenosis, regurgitation and prolapse."),
    F(14, "Which right-sided lesion is on the echo list?", "Tricuspid regurgitation", ["Pulmonary embolus in the leg", "Right coronary stenosis", "SVC syndrome"], "Tricuspid regurgitation and pulmonic stenosis are the right-sided lesions listed."),
    F(14, "Which strain measure appears at the end of the echo list?", "Longitudinal strain", ["Radial artery strain", "Hamstring strain", "Circumferential coronary strain"], "Longitudinal strain is the last item on the echo evaluation slide."),
    F(14, "Which volume measure on the echo list is taken at the end of filling?", "End-diastolic volume", ["End-systolic pressure", "Tidal volume", "Residual volume"], "End-diastolic volume is listed with stroke volume and EF."),

    /* LO 4 */
    F(15, "Through which body opening is the TEE probe inserted?", "The mouth", ["The nose only", "The femoral artery", "A chest incision"], "The TEE probe is passed through the mouth into the esophagus behind the heart."),
    F(16, "Which three acute aortic problems does the TEE indication slide name?", "Dissection, transection and intramural hematoma", ["Coarctation, stenosis and AR", "Aneurysm, plaque and calcium", "Aortitis, ulcer and atresia"], "Suspected acute aortic pathology covers dissection, transection and intramural hematoma."),
    F(16, "Which prosthetic valve problems are TEE indications?", "Thrombus, pannus ingrowth, vegetation or regurgitation", ["Only valve noise", "Only a valve older than 20 years", "A normal mechanical click"], "Suspected prosthetic valve dysfunction lists thrombus, pannus, vegetation and regurgitation."),
    F(16, "Which endocarditis complications call for TEE?", "Abscess or fistula", ["A healed vegetation", "A fever from a UTI", "A clean dental cleaning"], "TEE is indicated for suspected complications of endocarditis such as fistula or abscess."),
    F(16, "Which percutaneous procedures can TEE guide?", "Closure devices, valvuloplasty and percutaneous valves", ["Coronary stents only", "Pacemaker battery changes", "Femoral line placement"], "TEE guides noncoronary percutaneous interventions such as closure devices and valves."),

    /* LO 6-7 */
    F(17, "Which surgery besides esophagectomy is an absolute TEE contraindication?", "Esophagogastrectomy", ["Cholecystectomy", "Appendectomy", "Thyroidectomy"], "Previous esophagectomy or esophagogastrectomy is the absolute contraindication."),
    F(18, "Which kind of esophageal tear is a relative TEE contraindication?", "A recent active tear or hemorrhage", ["A tear healed 20 years ago", "A Mallory-Weiss tear in a parent", "None"], "The slide lists recent active esophageal tear or hemorrhage as relative."),
    F(18, "Which bleeding-related labs make TEE a relative contraindication?", "Coagulopathy and thrombocytopenia", ["High hemoglobin", "Low sodium", "High LDL"], "Coagulopathies and thrombocytopenia are both on the relative list."),
    F(19, "Which TEE complication is a collection of blood in the throat?", "Pharyngeal hematoma", ["Hemothorax", "Subdural hematoma", "Retroperitoneal bleed"], "Pharyngeal hematoma is a listed major TEE complication."),
    F(19, "Which arrhythmias are listed as minor TEE complications?", "NSVT and AF", ["Complete heart block and VF", "Torsades only", "None"], "NSVT and AF are on the minor complication list with bronchospasm and hypoxia."),
    F(19, "Which minor TEE complication involves coughing up blood?", "Hemoptysis", ["Hematemesis from varices", "Epistaxis", "Hematuria"], "Hemoptysis is on the minor complication list."),

    /* LO 4-5 */
    F(20, "Is TEE invasive, minimally invasive or noninvasive?", "Minimally invasive", ["Noninvasive", "Fully invasive surgery", "Not a procedure"], "The comparison table labels TEE minimally invasive and TTE noninvasive."),
    F(20, "Which advantage does the table give TTE?", "It is quick", ["Best mitral view", "Sees the esophagus", "Needs sedation"], "The table lists TTE as quick, noninvasive and done by an echo tech."),
    F(20, "In which two situations should TEE be the initial echo?", "Life-threatening situations or when TTE is likely nondiagnostic", ["Every routine murmur", "Any outpatient follow-up", "Only in children"], "The slide says TEE goes first in life-threatening cases or when TTE will likely fail."),
    F(21, "What is used to make the microbubbles in a bubble study?", "Agitated saline or synthetic contrast", ["Iodinated CT contrast", "Gadolinium", "Technetium"], "Agitating saline or synthetic contrast creates the microbubbles."),
    F(21, "How does a left-to-right shunt appear on a bubble study?", "A jet interrupting the bubble opacification of the right atrium", ["Bubbles filling the left ventricle first", "No bubbles anywhere", "Bubbles in the aorta only"], "Unbubbled blood crossing from the left shows as a jet that interrupts the right atrial contrast."),

    /* LO 8 */
    F(22, "Is MUGA a volumetric or a pressure measurement?", "Volumetric", ["Pressure", "Electrical", "Metabolic"], "The slide describes MUGA as a volumetric measurement."),
    F(22, "Over which part of the body is MUGA radioactivity measured?", "The anterior chest", ["The thyroid", "The lower back", "The thigh"], "The gamma camera measures radioactivity over the anterior chest."),
    F(23, "Is MUGA invasive?", "No, it is noninvasive", ["Yes, it needs a catheter", "Yes, it needs a TEE probe", "Only in obese patients"], "The MUGA slide lists it as noninvasive."),

    /* LO 9 */
    F(24, "In case study 2, how often do the palpitations happen?", "Daily", ["Once a year", "Only during exercise testing", "Once a month"], "The 66-year-old has daily palpitations, so a short monitor is likely to catch them."),
    F(25, "What does cardiac telemetry continuously monitor?", "The heart's electrical activity", ["Blood pressure only", "Oxygen saturation only", "Valve motion"], "Telemetry is continuous monitoring of the heart's electrical rhythm."),
    F(26, "Where does a Holter patient return the monitor after 24-48 hours?", "To the physician's office", ["By mail to the company", "To the emergency room", "They keep it for a year"], "The patient drops the Holter off at the office after the recording period."),
    F(27, "Which arrhythmia burden is an event monitor used to measure?", "Atrial fibrillation burden", ["VF burden during a code", "Heart block during surgery", "Sinus rhythm burden"], "The slide says the event monitor can detect AF burden."),
    F(27, "Can a patient take off an event monitor to shower?", "Yes", ["No, never", "Only with a nurse present", "Only after 4 weeks"], "The slide says the event monitor can be removed to shower."),

    /* LO 10 */
    F(28, "How is an implantable monitor placed?", "By a minimally invasive procedure", ["By open heart surgery", "By swallowing it", "It is taped on the chest"], "The slide describes the implant as a minimally invasive procedure."),
    F(28, "How often does an implantable monitor download the rhythm?", "Every night", ["Once a year", "Only when the patient mails it", "Never"], "Rhythm downloads happen each night."),
    F(28, "What practical barrier does the slide name for implantable monitors?", "Insurance approval is difficult", ["They cannot detect AF", "They last only 2 days", "They require a TEE first"], "The slide warns that insurance approval is hard to get.")
  ]);
})();
