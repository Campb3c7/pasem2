/* Cardiac Surgery Final test (Anna, 2026-11-21): one whole-deck test, new questions (not repeats of the slide questions), each tied to its slide, every LO covered.
   F(slide, prompt, answer, [3 wrong], why). Ids "cardiac-surgery|final|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.final("cardiac-surgery", [
    /* Intro */
    F(4, "Which ancient physician taught that heart wounds could not be survived?", "Hippocrates", ["Galen", "Billroth", "Gross"], "Hippocrates said a wound in the heart is mortal."),
    F(7, "Which valve lesion was the target of the first knife-through-the-heart operation in 1923?", "Mitral stenosis", ["Aortic stenosis", "Tricuspid regurgitation", "Pulmonic stenosis"], "Cutler opened a mitral stenosis in an 11-year-old."),
    F(9, "What defects did Lillehei repair in 1954 using cross-circulation?", "Congenital ASDs and VSDs", ["Coronary blockages", "Aortic aneurysms", "Mitral stenosis"], "He repaired ASDs and VSDs with a parent as the pump."),
    F(10, "Who worked with Lillehei to create the modern bypass machine in 1955?", "DeWall", ["Gross", "Cutler", "Billroth"], "Lillehei and DeWall solved the bubble problem in the oxygenator."),
    F(11, "Which of these appears on the list of cardiac surgeries?", "Pacemaker placement", ["Carotid stent", "Varicose vein stripping", "Gallbladder removal"], "Pacemaker placement is listed with CABG, valves, transplant and others."),

    /* LO 1 */
    F(12, "Which invasive intervention uses a drug-eluting stent?", "PCI", ["CABG", "tPA", "Valve replacement"], "PCI places a drug-eluting stent in the coronary."),
    F(13, "Besides failed medical management, what other situation sends a CAD patient toward an invasive approach?", "An acute event", ["A normal stress test", "Mild hyperlipidemia", "A family history alone"], "The slide names failed medical management and acute events."),
    F(14, "Why does the lecture say judging failed medical management is hard?", "You would need to tell the future, so you rely on risk statistics", ["Symptoms always tell you exactly", "Labs give a clear answer", "It never fails"], "Risk stratification stands in for knowing the future."),

    /* LO 2 */
    F(15, "Which risk tool gives in-hospital mortality and dates from 1995?", "EuroSCORE", ["ASCERT", "STS", "SYNTAX II"], "EuroSCORE is listed as 1995 in-hospital mortality."),
    F(15, "Which tool on the risk list scores ICU illness severity?", "APACHE I-IV", ["Ambler", "ASCERT", "SYNTAX I"], "APACHE is the ICU severity score on the list (standard teaching)."),
    F(16, "Which lesion would score higher on SYNTAX I: a short focal lesion or a long, tortuous, diffuse one?", "The long, tortuous, diffuse lesion", ["The short focal lesion", "They score the same", "Neither is scored"], "Length, tortuosity and diffuse disease all raise SYNTAX I."),
    F(17, "Which of these raises the SYNTAX II score?", "Peripheral artery disease", ["Young age", "High LVEF", "Normal renal function"], "PAD increases the SYNTAX II score."),
    F(17, "Is left main disease part of SYNTAX II?", "Yes, it raises the score", ["No", "It lowers the score", "Only in SYNTAX I"], "Left main disease increases the SYNTAX II score."),
    F(18, "On the SYNTAX mortality curve, about what 4-year mortality goes with 40 points?", "About 15%", ["About 1%", "About 58%", "About 90%"], "The graph marks 15.1% at 40 points."),
    F(19, "Two-vessel disease that spares the proximal LAD: which intervention is favored?", "PCI", ["CABG", "Heart transplant", "No treatment"], "PCI is favored for 1-2 vessel disease not involving the proximal LAD."),

    /* LO 3 */
    F(20, "Which coronary artery runs in the interventricular groove on the front of the heart?", "The left anterior descending", ["The right coronary", "The circumflex", "The posterior descending"], "The LAD is the anterior interventricular artery."),
    F(21, "Which stenosis is significant enough to be a CABG indication by itself in a major vessel?", "Over 70%", ["Over 30%", "Over 10%", "Any plaque"], "Significant stenosis over 70% is listed."),
    F(21, "Complex disease of how many vessels is a CABG indication?", "Three", ["One", "Zero", "Five"], "Complex 3-vessel CAD is listed."),
    F(22, "Recurrent ischemia after an MI belongs to which CABG list?", "Emergent/urgent", ["Elective only", "Never an indication", "PCI only"], "Recurrent ischemia is on the emergent/urgent list."),
    F(22, "Which mechanical failure after MI is on the emergent CABG list?", "Ventricular rupture", ["Sinus tachycardia", "A small pericardial rub", "Mild LDL elevation"], "Ventricular or septal rupture is a mechanical failure."),

    /* LO 4-5 */
    F(23, "Which member of the cardiac team is a respiratory therapist listed as?", "RT", ["Perfusionist", "Circulator", "Echo tech"], "RT is listed on the cardiac team slide."),
    F(24, "What does the vent on the bypass machine do?", "Keeps the heart empty by draining blood from it", ["Adds oxygen", "Pumps blood to the aorta", "Cools the patient"], "The vent decompresses the heart during bypass (standard teaching)."),
    F(24, "What does the sucker on the bypass machine do?", "Returns blood from the surgical field to the circuit", ["Stops the heart", "Measures pressures", "Adds potassium"], "The sucker recovers shed blood from the field (standard teaching)."),
    F(26, "What is done to the blood before it enters the bypass circuit?", "It is anticoagulated", ["It is heated to 40°C", "It is mixed with calcium", "It is spun down"], "The slide says blood is anticoagulated."),
    F(26, "Besides oxygenating it, what does the CPB machine do to the blood?", "Filters it and controls its temperature", ["Adds red cells", "Removes all potassium", "Makes it pulsatile"], "Blood is oxygenated, filtered and temperature controlled."),
    F(26, "What temperature is the cardioplegia solution?", "Cold", ["Warm", "Room temperature always", "Body temperature only"], "The heart is stopped by cold, potassium-rich cardioplegia."),
    F(27, "At normothermia, about what flow does the body need on bypass?", "About 2.4 L/min/m2", ["About 1 L/min/m2", "About 5 L/min/m2", "About 0.2 L/min/m2"], "The slide gives 2.4 L/min/m2 at 37°C."),
    F(27, "What is cardioplegia usually mixed with?", "The patient's own (autologous) blood", ["Saline only", "Donor plasma", "Contrast dye"], "Cardioplegia is usually mixed with autologous blood."),

    /* LO 6 */
    F(30, "Which two kinds of conduit are used for CABG?", "Arterial and venous", ["Lymphatic and venous", "Synthetic only", "Nerve and artery"], "The slide title says arterial and vein."),
    F(31, "What fraction of saphenous vein grafts fail within 12-18 months?", "10-25%", ["1-2%", "50-60%", "90%"], "The slide gives a 10-25% failure rate in 12-18 months."),
    F(31, "From year 1 to 6, how fast do saphenous vein grafts occlude?", "About 2% per year", ["About 10% per year", "About 0.1% per year", "About 25% per year"], "Late occlusion runs about 2%/year in years 1-6."),
    F(33, "The open, poorly healing wounds in the leg photos come from harvesting which vessel?", "The saphenous vein", ["The radial artery", "The femoral artery", "The popliteal vein"], "The photos show the vein-harvest incision."),
    F(35, "What is RITA patency at 10 years?", "Under 90%", ["Over 99%", "About 50%", "About 10%"], "The slide gives RITA under 90% at 10 years."),
    F(35, "Which is better for two arterial grafts: LITA plus radial, or LITA plus RITA?", "LITA plus RITA", ["LITA plus radial", "They are equal", "Neither is used"], "Left and right ITA beat LITA plus radial."),

    /* LO 7 */
    F(37, "Which endpoint is NOT one of the three negative CABG endpoints?", "Length of hospital stay", ["Need for revascularization", "Post-op MI", "Death"], "The three endpoints are revascularization, MI and death."),
    F(38, "Which type of diabetes is listed as a predictor of a bad CABG outcome?", "Insulin-dependent diabetes", ["Diet-controlled prediabetes", "Gestational diabetes", "Diabetes insipidus"], "Insulin-dependent diabetes is on the predictor list."),
    F(38, "Hemodynamic instability before CABG predicts what?", "Post-op MI, revascularization or death", ["A shorter stay", "Better graft patency", "Nothing"], "Shock or hemodynamic instability is a listed predictor."),
    F(39, "What is CABG mortality at 180 days, per the slide?", "6.4%", ["0.6%", "23.3%", "11.3%"], "Mortality is 6.4% at 180 days."),
    F(39, "What is CABG mortality at 2 years, per the slide?", "11.3%", ["3.2%", "6.4%", "23.3%"], "Mortality is 11.3% at 2 years."),
    F(40, "How much lung disease predicts mortality after CABG?", "More than moderate", ["Any mild asthma", "None", "Only lung cancer"], "More than moderate lung disease is listed."),
    F(40, "Acute kidney injury after CABG predicts what?", "Mortality", ["Better outcomes", "Lower bleeding", "Nothing"], "AKI is on the predictors of mortality list."),
    F(41, "Which risk factor appears on the mortality list along with age, DM, HTN and smoking?", "Hyperlipidemia", ["Low BMI", "Asthma", "Hypothyroidism"], "Hyperlipidemia is one of the cardiac risk factors listed."),
    F(42, "Which of these is part of continuing prevention after CABG?", "Controlling hypertension", ["Stopping all medicines", "Starting smoking again", "Avoiding exercise"], "Control of hypertension is on the prevention list."),

    /* LO 8 */
    F(44, "Which wound complication comes from the sternotomy itself?", "Sternal wound problems after the bone is split", ["Phrenic nerve injury", "Atrial fibrillation", "AKI"], "Sternotomy is listed as a cause of wound complications."),
    F(45, "Which two problems are listed as anesthesia-related?", "Hypo/hypervolemia and neurologic dysfunction", ["Bleeding and sternal devascularization", "Hypothermia and cardiac arrest", "Graft occlusion and MI"], "The anesthesia slide lists volume problems and stroke."),
    F(46, "Global cardiac arrest during CABG comes from which step?", "Stopping the heart with cardioplegia", ["Harvesting the vein", "Giving anesthesia gas", "Placing the arterial line"], "Global cardiac arrest is a surgery-related cause (standard teaching)."),
    F(46, "Which feature of bypass perfusion is listed as a cause of complications?", "It is non-pulsatile and artificial", ["It is too pulsatile", "It is too warm", "It is too fast"], "Non-pulsatile bypass and artificial perfusion are listed."),
    F(47, "Which slow rhythm problem is listed after CABG?", "Bradyarrhythmia", ["Sinus arrhythmia only", "Wandering pacemaker", "Normal sinus rhythm"], "Bradyarrhythmia is listed with AF and ventricular arrhythmias."),
    F(48, "Which preload problem can weaken cardiac output after CABG?", "Inadequate preload", ["Excess potassium", "High HDL", "Low glucose"], "Inadequate preload is on the failure list."),
    F(48, "Which inotropy problem is listed after CABG?", "Poor inotropy", ["Excess inotropy", "No change", "High HDL"], "Poor inotropy is on the myocardial weakness list."),
    F(49, "Which ventilator problem is listed among pulmonary complications?", "Difficulty weaning", ["Too-easy extubation", "Low tidal volume alarm only", "No ventilator is used"], "Difficulty weaning is on the pulmonary list."),
    F(49, "Which chest wall change is listed after CABG?", "Decreased thoracic compliance", ["Increased compliance", "Barrel chest", "Pectus excavatum"], "Decreased thoracic compliance is listed."),
    F(50, "Which cause of post-CABG renal dysfunction comes from cooling the patient?", "Hypothermia", ["Hyperthermia", "Hyperglycemia", "Hyperkalemia"], "Hypothermia is a listed cause of renal dysfunction."),

    /* LO 9 */
    F(51, "Which labs are checked daily after CABG?", "Electrolytes, ABG, Hgb, platelets, BUN and creatinine", ["Lipid panel and TSH", "Troponin only", "Blood cultures only"], "The slide lists these daily labs."),
    F(51, "What does the urine output tell you after CABG?", "Whether the kidneys are perfused and whether there is hypovolemia", ["Whether there is ischemia", "Whether the grafts are open", "The glucose level"], "Urine output and vitals answer kidney perfusion and volume."),
    F(52, "What is the wedge pressure an estimate of?", "Left-sided filling pressure", ["Right atrial oxygen", "Aortic pressure", "Pulmonary vascular resistance only"], "Wedge pressure estimates left atrial filling pressure (standard teaching)."),
    F(52, "Pulse oximetry is paired with which other measure on the ICU slide?", "PaO2", ["SVR", "BUN", "Glucose"], "The slide lists PAO2 with pulse ox."),
    F(54, "What does the lecture list after extubation alongside spirometry and antiplatelets?", "Ambulation", ["Bed rest", "Reintubation", "Paralysis"], "Ambulation is on the after-extubation list."),
    F(55, "Which three findings make up the first 8-hour call?", "BP 75/palp, HR 130, falling urine output", ["BP 180/110, HR 90, falling urine", "BP 75/palp, HR 90, falling urine", "BP 120/80, HR 70, normal urine"], "Call 1 is low BP with tachycardia and falling urine."),
    F(56, "In the second 8-hour call, which history question do the notes ask first?", "History of hypertension?", ["History of asthma?", "Last meal?", "Allergy to penicillin?"], "The notes start with history of HTN."),
    F(57, "In the third 8-hour call, which numbers do the notes check?", "Chest tube output, CVP, cardiac output and SVR", ["Glucose and lipase", "TSH and A1c", "Only temperature"], "The notes list CT output, CVP, cardiac output and SVR.")
  ]);
})();
