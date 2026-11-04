// Heart Sounds "Practice exams": five fixed 15-question exams written to match Anna's
// Examplify practice exam (same question types, wording, answer lists and difficulty).
// Every question plays one of the 10 class clips from data/heart-sounds-exam.js (CLIPS).
(function () {
  // M(sound, stem, question, [choices in exam order], index of the right choice, why)
  function M(sound, stem, question, choices, correct, why) {
    return { sound: sound, stem: stem, question: question, choices: choices, correct: correct, why: why };
  }
  // Answer lists and question wording copied from the real practice exam.
  var TIMING = ["Systolic and Diastolic", "Diastolic", "Systolic"];
  var TIMING_Q = "";
  function Timing(sound, stem, answer, why) { return M(sound, stem, TIMING_Q, TIMING, TIMING.indexOf(answer), why); }
  var CADENCE = ["Ta-lub-dub", "Lub-dub-ta"];
  function Cadence(sound, answer, why) { return M(sound, "", "This extra heart sound is best described as:", CADENCE, CADENCE.indexOf(answer), why); }
  var LOAD = ["Volume overload", "Pressure overload"];
  function Load(sound, stem, answer, why) { return M(sound, stem, "Listen to the audio. This gallop is associated with which of the following states?", LOAD, LOAD.indexOf(answer), why); }
  var ID = "Identify this heart sound.";
  var MANEUVER = "What maneuver would enhance this sound?";
  var APEX_LEFT = "Listen at the apex while the patient is laying on their left side";
  var CAROTID_VALSALVA = "Listen at the carotids while the patient is doing a valsalva";
  var LSB_FORWARD = "Listen at the left sternal border while patient is leaning forward";
  var AORTIC_SUPINE = "Listen at the aortic area while the patient is supine";

  // Exam ids are progress keys: never rename. Questions inside an exam keep their order.
  var MOCKS = [
    { id: "mock-1", title: "Practice exam 1", questions: [
      M("holosystolic", "A 3-month-old is being seen in the congenital heart clinic. This sound is best heard at the left 3-5th ICS. There is no radiation of the sound.", "", ["Patent ductus arteriosus", "Ventricular Septal Defect", "Tricuspid Stenosis", "Aortic regurgitation"], 1, "Infant + holosystolic murmur at the left 3rd–5th ICS = VSD. PDA would be continuous (systolic and diastolic) and at the pulmonic position."),
      Timing("mid-diastolic", "A 61-year-old female with a history of rheumatic fever. The sound is heard best with the bell at the apex while she is lying on her left side.", "Diastolic", "Bell, apex, left side = mitral stenosis, a diastolic rumble."),
      Cadence("s3", "Lub-dub-ta", "The extra sound comes after S2 (Ken-tuc-ky): S3."),
      M("diamond", "An 87-year-old reports lightheadedness when climbing stairs. This sound radiates to the carotids.", "", ["Mitral regurgitation", "Aortic stenosis", "Mitral stenosis", "Aortic regurgitation"], 1, "Radiation to the carotids = aortic stenosis. Exertional symptoms in an older adult fit too."),
      M("split-s2", "This sound is heard during inspiration in a healthy 24-year-old. It goes away during exhalation.", "", ["Kentucky gallop", "Mid systolic click", "Tennessee gallop", "Physiologic splitting of S2"], 3, "Heard on inspiration only, gone on expiration, healthy patient = physiologic split S2."),
      M("holosystolic", "55-year-old asymptomatic patient. Sound is best heard at the apex and radiates to the left axilla.", "", ["Mid-systolic rumbling murmur", "Systolic blowing murmur", "Continuous machinery murmur", "Diastolic rumbling murmur"], 1, "Apex to left axilla = mitral regurgitation = systolic blowing murmur."),
      Load("s4", "", "Pressure overload", "This is S4 (Ta-lub-dub): atria pushing into a stiff ventricle = pressure overload (HTN, AS, HCM)."),
      M("systolic-crescendo", "A 28-year-old female has palpitations. This sound is best heard at the apex. It starts earlier when she stands up.", "", ["Mitral Valve Prolapse", "Aortic Stenosis", "Mitral Stenosis", "Tricuspid regurgitation"], 0, "Late systolic murmur at the apex that moves earlier with standing = MVP."),
      Timing("diamond", "A pediatric patient is being evaluated. This murmur is best heard at the 2nd left intercostal space and radiates to the left shoulder.", "Systolic", "Left 2nd ICS to the left shoulder = pulmonic stenosis, a systolic (crescendo-decrescendo) murmur."),
      M("os", "A 47-year-old immigrant with a history of rheumatic fever is being evaluated. Listen for the extra sound.", "", ["Opening snap", "Kentucky gallop", "Physiologic splitting of S2", "Mid systolic click"], 0, "High-pitched snap shortly after S2 in a patient with rheumatic fever = opening snap (mitral stenosis). An S3 is a lower, duller thud."),
      M("mid-diastolic", "A 66-year-old has worsening shortness of breath with exertion. This low-pitched sound has no radiation.", MANEUVER, [APEX_LEFT, CAROTID_VALSALVA, LSB_FORWARD, AORTIC_SUPINE], 0, "Low diastolic rumble = mitral stenosis: apex, bell, left lateral decubitus."),
      M("baseline", "A healthy 19-year-old is having a sports physical.", ID, ["Normal S1 and S2", "Kentucky gallop", "Tennessee gallop", "Physiologic splitting of S2"], 0, "Only lub-dub with silence in between: normal S1 and S2."),
      Timing("systolic-decrescendo", "A 63-year-old has sudden shortness of breath 2 days after a myocardial infarction. This sound is heard best at the apex.", "Systolic", "The murmur starts at S1 and fades before S2: systolic (acute MR after an MI)."),
      M("holosystolic", "A 38-year-old with a history of IV drug use. This sound is loudest at the left lower sternal border and gets louder with inspiration.", "", ["Mitral regurgitation", "Tricuspid Stenosis", "Tricuspid regurgitation", "Ventricular Septal Defect"], 2, "Holosystolic at the left lower sternal border, louder with inspiration (Carvallo's sign) = tricuspid regurgitation. Tricuspid stenosis would be a diastolic rumble."),
      M("s3", "A 71-year-old with congestive heart failure. This sound is heard best with the bell at the apex.", ID, ["Tennessee gallop", "Opening snap", "Kentucky gallop", "Physiologic splitting of S2"], 2, "Extra sound after S2 in CHF (volume overload) = S3, Kentucky gallop.")
    ] },
    { id: "mock-2", title: "Practice exam 2", questions: [
      M("diamond", "A 79-year-old is being evaluated after fainting while walking. This sound is heard best at the right 2nd ICS. It gets softer with Valsalva.", "", ["Aortic regurgitation", "Mitral regurgitation", "Pulmonic Stenosis", "Aortic stenosis"], 3, "Right 2nd ICS, softer with Valsalva, syncope on exertion = aortic stenosis."),
      Timing("holosystolic", "49-year-old asymptomatic patient. Sound is best heard at the apex and radiates to the left axilla.", "Systolic", "Apex to axilla = mitral regurgitation, holosystolic."),
      Cadence("s4", "Ta-lub-dub", "The extra sound comes right before S1 (Ten-nes-see): S4."),
      M("mid-diastolic", "A 58-year-old female is being evaluated by her cardiologist. This sound is heard best with the bell at the apex.", "", ["Mitral Stenosis", "Mitral Regurgitation", "Aortic Regurgitation", "Aortic Stenosis"], 0, "Low rumble in diastole with the bell at the apex = mitral stenosis. MR at the apex would be a high-pitched blowing systolic murmur."),
      M("split-s2", "This sound is heard best at the pulmonic area in a healthy 31-year-old. It disappears when the patient holds their breath.", "", ["Tennessee gallop", "Physiologic splitting of S2", "Opening snap", "Kentucky gallop"], 1, "Pulmonic area, healthy, gone with breath-holding = physiologic split S2."),
      M("holosystolic", "A newborn is being examined in the nursery. This sound is best heard at the 3-5th ICS. There is no radiation of the sound.", "", ["Patent ductus arteriosus", "Mitral Valve Prolapse", "Ventricular Septal Defect", "Pulmonic regurgitation"], 2, "Newborn + holosystolic at the left 3rd–5th ICS = VSD."),
      Load("s3", "", "Volume overload", "This is S3 (Lub-dub-ta): rapid filling of an overloaded ventricle = volume overload (CHF, DCM)."),
      M("diamond", "A 76-year-old has a harsh murmur that radiates to the carotids.", MANEUVER, [LSB_FORWARD, APEX_LEFT, "Listen at the right 2nd ICS while the patient is squatting", CAROTID_VALSALVA], 2, "Aortic stenosis is loudest with squatting and softer with Valsalva."),
      Timing("systolic-crescendo", "A 32-year-old thin female has occasional palpitations. The sound is heard best at the apex.", "Systolic", "The murmur builds up to S2 late in systole: mitral valve prolapse."),
      M("mid-diastolic", "A 64-year-old reports worsening fatigue. This sound is heard best with the bell while the patient is lying on their left side.", ID, ["Systolic blowing murmur", "Early diastolic decrescendo murmur", "Diastolic rumbling murmur", "Continuous machinery murmur"], 2, "Bell + left lateral decubitus = mitral stenosis, a diastolic rumble."),
      Timing("os", "A 52-year-old with a history of rheumatic heart disease. This extra sound is best heard at the apex.", "Diastolic", "The opening snap comes after S2, in early diastole."),
      M("baseline", "A 22-year-old is being seen for a pre-employment physical.", ID, ["Physiologic splitting of S2", "Normal S1 and S2", "Tennessee gallop", "Mid systolic click"], 1, "Just lub-dub: normal S1 and S2."),
      M("systolic-decrescendo", "A 68-year-old is being evaluated after a recent heart attack. This sound is heard at the apex.", ID, ["Early diastolic decrescendo murmur", "Early systolic decrescendo murmur", "Diastolic rumbling murmur", "Continuous machinery murmur"], 1, "Loud right after S1 and fading before S2 = early systolic decrescendo. AR's decrescendo starts after S2."),
      M("s4", "A 72-year-old with long-standing hypertension. This sound is heard with the bell at the apex.", ID, ["Kentucky gallop", "Mid systolic click", "Tennessee gallop", "Physiologic splitting of S2"], 2, "Extra sound right before S1 with a stiff, hypertensive ventricle = S4, Tennessee gallop."),
      M("diamond", "A 10-year-old is being evaluated. This sound is best heard at the 2nd left intercostal space and radiates to the left neck.", "", ["Aortic stenosis", "Pulmonic stenosis", "Patent ductus arteriosus", "Ventricular Septal Defect"], 1, "Left 2nd ICS radiating to the left neck/shoulder = pulmonic stenosis. AS is the right 2nd ICS to the carotids.")
    ] },
    { id: "mock-3", title: "Practice exam 3", questions: [
      M("mid-diastolic", "A 45-year-old female is being evaluated. This sound is loudest at the left lower sternal border and increases with inspiration. There is no radiation of the sound.", "", ["Mitral Stenosis", "Tricuspid Stenosis", "Tricuspid regurgitation", "Pulmonic regurgitation"], 1, "Diastolic rumble at the left lower sternal border that gets louder with inspiration = tricuspid stenosis (right-sided twin of MS)."),
      Cadence("s3", "Lub-dub-ta", "The extra sound comes after S2: S3, Ken-tuc-ky."),
      M("holosystolic", "A 67-year-old with a history of myocardial infarction. This sound is heard best at the apex and radiates to the axilla.", "", ["Mitral regurgitation", "Aortic stenosis", "Mitral stenosis", "Aortic regurgitation"], 0, "Apex to axilla = mitral regurgitation."),
      Timing("diamond", "An 82-year-old has a murmur heard best at the right 2nd ICS that radiates to the carotids.", "Systolic", "Right 2nd ICS to the carotids = aortic stenosis, a systolic ejection murmur."),
      Load("s4", "", "Pressure overload", "This is S4 (Ta-lub-dub) = pressure overload."),
      M("systolic-crescendo", "A 26-year-old female is being evaluated. This sound is best heard at the apex. With squatting, it starts later and gets shorter.", "", ["Mitral Valve Prolapse", "Mitral Regurgitation", "Aortic Stenosis", "Mitral Stenosis"], 0, "Late systolic murmur that moves later with squatting = MVP. Plain MR is holosystolic and doesn't shift with squatting like this."),
      M("split-s2", "This sound is heard at the 2nd left intercostal space on inspiration in a healthy 28-year-old.", "", ["Mid systolic click", "Physiologic splitting of S2", "Kentucky gallop", "Tennessee gallop"], 1, "Pulmonic area, inspiration only, healthy = physiologic split S2."),
      M("mid-diastolic", "A 59-year-old immigrant with a history of rheumatic fever. This sound is best heard with the bell at the apex.", ID, ["Continuous machinery murmur", "Mid-systolic rumbling murmur", "Systolic blowing murmur", "Diastolic rumbling murmur"], 3, "Rheumatic fever + bell at the apex = mitral stenosis, a diastolic rumble."),
      M("os", "A 50-year-old with a history of rheumatic fever. This extra sound is heard at the apex.", "This extra sound is classic for which of the following?", ["Mitral Valve Prolapse", "Aortic Stenosis", "Mitral Stenosis", "Aortic Regurgitation"], 2, "Opening snap = mitral stenosis. MVP has a mid-systolic click instead."),
      M("holosystolic", "A 40-year-old has this murmur at the left lower sternal border.", MANEUVER, ["Listen at the left lower sternal border while the patient breathes in", "Listen at the apex while the patient breathes out", CAROTID_VALSALVA, "Listen at the right 2nd ICS while the patient is squatting"], 0, "Holosystolic at the left lower sternal border = TR, louder with inspiration (Carvallo's sign)."),
      Timing("systolic-decrescendo", "A 66-year-old has sudden shortness of breath after a myocardial infarction. This sound is heard at the apex.", "Systolic", "Starts at S1 and fades before S2: systolic."),
      M("s3", "A 24-year-old marathon runner is having a physical. This sound is heard at the apex with the bell.", ID, ["Tennessee gallop", "Kentucky gallop", "Opening snap", "Mid systolic click"], 1, "Extra sound after S2 in a young athlete = S3 (Kentucky), which can be normal here."),
      M("diamond", "A 30-year-old with a bicuspid aortic valve. This murmur is heard best at the right 2nd ICS.", "", ["Aortic Stenosis", "Pulmonic Stenosis", "Aortic Regurgitation", "Mitral regurgitation"], 0, "Bicuspid aortic valve + right 2nd ICS crescendo-decrescendo = aortic stenosis."),
      M("baseline", "A healthy 16-year-old is being cleared for sports.", ID, ["Normal S1 and S2", "Physiologic splitting of S2", "Kentucky gallop", "Mid systolic click"], 0, "Just lub-dub: normal S1 and S2."),
      Timing("holosystolic", "An infant is being examined by the congenital heart clinic. This sound is best heard at the 3-5th ICS.", "Systolic", "VSD is holosystolic. Don't pick 'Systolic and Diastolic': that's PDA (continuous machinery).")
    ] },
    { id: "mock-4", title: "Practice exam 4", questions: [
      M("diamond", "A 78-year-old male has chest pain with exertion. This harsh sound is heard best at the right upper sternal border.", "", ["Mitral regurgitation", "Aortic regurgitation", "Aortic stenosis", "Mitral stenosis"], 2, "Harsh systolic murmur at the right upper sternal border in an older adult = aortic stenosis."),
      Cadence("s4", "Ta-lub-dub", "The extra sound comes right before S1: S4, Ten-nes-see."),
      Timing("mid-diastolic", "A 70-year-old is short of breath. This sound is heard best with the bell at the apex while the patient is lying on their left side.", "Diastolic", "Mitral stenosis rumble: diastolic."),
      M("holosystolic", "A 60-year-old complains of fatigue. This sound is heard at the apex and radiates to the left axilla.", "", ["Diastolic rumbling murmur", "Systolic blowing murmur", "Early diastolic decrescendo murmur", "Continuous machinery murmur"], 1, "Mitral regurgitation = systolic blowing murmur."),
      M("split-s2", "This sound is heard on inspiration only in a healthy 21-year-old.", "", ["Physiologic splitting of S2", "Tennessee gallop", "Kentucky gallop", "Opening snap"], 0, "Inspiration only in a healthy patient = physiologic split S2."),
      Load("s3", "A 74-year-old with dilated cardiomyopathy.", "Volume overload", "S3 = volume overload (CHF, dilated cardiomyopathy)."),
      M("systolic-crescendo", "A 35-year-old female has chest flutters. This sound is heard best at the apex.", "What maneuver makes this murmur start earlier and last longer?", ["Squatting", "Standing or Valsalva", "Leaning forward", "Lying on the left side"], 1, "MVP: standing/Valsalva = earlier click, longer murmur. Squatting does the opposite."),
      M("os", "A 56-year-old with rheumatic heart disease. This extra sound is heard at the apex.", "This extra sound is typically followed by which of the following?", ["Diastolic rumbling murmur", "Systolic blowing murmur", "Continuous machinery murmur", "Early diastolic decrescendo murmur"], 0, "Opening snap, then the diastolic rumble of mitral stenosis."),
      M("holosystolic", "A 4-month-old is not gaining weight. This harsh sound is heard best at the left 3-5th ICS.", "", ["Tricuspid Stenosis", "Patent ductus arteriosus", "Pulmonic regurgitation", "Ventricular Septal Defect"], 3, "Infant + harsh holosystolic murmur at the left 3rd–5th ICS = VSD."),
      Timing("diamond", "A 9-year-old is being evaluated. This murmur is best heard with the diaphragm at the 2nd left intercostal space.", "Systolic", "Pulmonic stenosis: systolic crescendo-decrescendo."),
      M("systolic-decrescendo", "A 69-year-old has sudden shortness of breath 3 days after a myocardial infarction. This sound is heard at the apex and radiates to the axilla.", "", ["Aortic regurgitation", "Mitral regurgitation", "Aortic stenosis", "Mitral stenosis"], 1, "Apex to axilla after an MI = (acute) mitral regurgitation."),
      M("s4", "A 66-year-old with aortic stenosis. This sound is heard with the bell at the apex.", ID, ["Kentucky gallop", "Physiologic splitting of S2", "Mid systolic click", "Tennessee gallop"], 3, "Extra sound before S1 with a stiff ventricle from AS = S4, Tennessee gallop."),
      M("baseline", "A healthy 27-year-old is having a routine physical.", "Which of the following best describes this recording?", ["No murmur", "Systolic murmur", "Diastolic murmur", "Systolic and diastolic murmur"], 0, "Normal S1 and S2 with no murmur."),
      M("mid-diastolic", "A 48-year-old female from Guatemala with a history of rheumatic fever. The sound is heard best with the bell at the apex. There is no radiation of the sound.", "", ["Aortic regurgitation", "Mitral stenosis", "Mitral regurgitation", "Tricuspid regurgitation"], 1, "Rheumatic fever + bell at the apex + no radiation = mitral stenosis."),
      M("holosystolic", "A 44-year-old with a history of IV drug use. This sound is best heard at the left lower sternal border. It gets louder with inspiration.", "", ["Mitral regurgitation", "Ventricular Septal Defect", "Tricuspid regurgitation", "Tricuspid Stenosis"], 2, "Left lower sternal border + louder with inspiration + IV drug use = tricuspid regurgitation.")
    ] },
    { id: "mock-5", title: "Practice exam 5", questions: [
      M("split-s2", "This sound is heard on inspiration in a healthy 26-year-old. It disappears when the patient is holding their breath.", "", ["Kentucky gallop", "Physiologic splitting of S2", "Mid systolic click", "Tennessee gallop"], 1, "Inspiration only, gone with breath-holding = physiologic split S2."),
      M("diamond", "An 84-year-old has shortness of breath with exertion. This heart sound radiates to the carotids. It gets louder with squatting.", "", ["Aortic stenosis", "Mitral regurgitation", "Mitral stenosis", "Aortic regurgitation"], 0, "Carotids + louder with squatting = aortic stenosis."),
      Cadence("s3", "Lub-dub-ta", "Extra sound after S2: S3."),
      Timing("holosystolic", "A 53-year-old with a history of rheumatic fever. This sound is best heard at the apex and radiates to the left axilla.", "Systolic", "Mitral regurgitation: holosystolic."),
      M("mid-diastolic", "A 62-year-old female with a history of rheumatic fever has this low-pitched murmur.", MANEUVER, [CAROTID_VALSALVA, AORTIC_SUPINE, APEX_LEFT, LSB_FORWARD], 2, "Mitral stenosis: apex, bell, left lateral decubitus."),
      Load("s4", "", "Pressure overload", "S4 = pressure overload."),
      M("systolic-crescendo", "A 29-year-old female is being evaluated. A click is followed by this murmur, heard best at the apex.", "", ["Aortic Stenosis", "Mitral Valve Prolapse", "Mitral Stenosis", "Pulmonic Stenosis"], 1, "Mid-systolic click + late systolic murmur at the apex = MVP."),
      M("os", "A 51-year-old with mitral stenosis. Listen for the extra sound.", "", ["Kentucky gallop", "Opening snap", "Physiologic splitting of S2", "Tennessee gallop"], 1, "Mitral stenosis + sharp, high-pitched sound after S2 = opening snap."),
      M("holosystolic", "An infant is being examined in the congenital heart clinic. This harsh murmur is best heard at the 3-5th ICS.", "", ["Ventricular Septal Defect", "Patent ductus arteriosus", "Tricuspid Stenosis", "Mitral Valve Prolapse"], 0, "Infant + harsh holosystolic murmur at the left 3rd–5th ICS = VSD."),
      Timing("diamond", "A 7-year-old has a harsh murmur best heard at the 2nd left intercostal space.", "Systolic", "Pulmonic stenosis: systolic crescendo-decrescendo."),
      M("baseline", "A healthy 20-year-old college student is being seen for a physical.", ID, ["Tennessee gallop", "Normal S1 and S2", "Kentucky gallop", "Physiologic splitting of S2"], 1, "Just lub-dub: normal S1 and S2."),
      M("mid-diastolic", "A 57-year-old with atrial fibrillation. This sound is heard best with the bell at the apex while the patient is lying on their left side.", ID, ["Continuous machinery murmur", "Diastolic rumbling murmur", "Mid-systolic rumbling murmur", "Systolic blowing murmur"], 1, "Mitral stenosis = diastolic rumble (and MS commonly causes AFib)."),
      Timing("systolic-decrescendo", "A 71-year-old has a new murmur at the apex after a heart attack.", "Systolic", "Starts at S1 and fades before S2: systolic."),
      M("s3", "A 23-year-old pregnant female. This sound is heard best with the bell at the apex.", ID, ["Kentucky gallop", "Tennessee gallop", "Opening snap", "Mid systolic click"], 0, "Extra sound after S2 in pregnancy = S3 (Kentucky), can be normal in pregnancy."),
      M("holosystolic", "A 64-year-old reports dyspnea on exertion. Sound is heard at the apex and radiates to the axilla.", "", ["Systolic blowing murmur", "Diastolic rumbling murmur", "Continuous machinery murmur", "Mid-systolic rumbling murmur"], 0, "Mitral regurgitation = systolic blowing murmur.")
    ] }
  ];

  window.HEART_SOUNDS_MOCKS = MOCKS;
}());
