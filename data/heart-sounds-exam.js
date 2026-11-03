// Heart Sounds "Exam practice": new questions in the style of the Examplify practice exam.
// Every question plays one of the 10 class sounds (sound-only versions, never the lecture ones).
(function () {
  // ---- The clips ---------------------------------------------------------------------
  // One clip per class sound. To swap a clip, drop a new mp3 in audio/heart-sounds/exam/
  // and change its path here (paths are relative to audio/heart-sounds/).
  // These are the sound-only class tracks with the spoken name cut off the start
  // (and, on four tracks, cut before a second spoken bit midway through).
  var CLIPS = {
    "baseline": { file: "exam/baseline.mp3", recording: "class-baseline", from: "Track 11 (sound only)" },
    "split-s2": { file: "exam/split-s2.mp3", recording: "class-split-s2", from: "Track 16 (sound only)" },
    "s3": { file: "exam/s3.mp3", recording: "class-s3", from: "Track 15 (sound only)" },
    "s4": { file: "exam/s4.mp3", recording: "class-s4", from: "Track 18 (sound only)" },
    "os": { file: "exam/os.mp3", recording: "class-os", from: "Track 14 (sound only)" },
    "holosystolic": { file: "exam/holosystolic.mp3", recording: "class-holosystolic", from: "Track 12 (sound only)" },
    "systolic-decrescendo": { file: "exam/systolic-decrescendo.mp3", recording: "class-systolic-decrescendo", from: "Track 13 (sound only)" },
    "diamond": { file: "exam/diamond-mid-systolic.mp3", recording: "class-diamond", from: "Track 17 (sound only)" },
    "systolic-crescendo": { file: "exam/systolic-crescendo.mp3", recording: "class-systolic-crescendo", from: "Track 19 (sound only)" },
    "mid-diastolic": { file: "exam/mid-diastolic.mp3", recording: "class-mid-diastolic", from: "Track 20 (sound only)" }
  };

  // Q(sound, vignette, question, answer, [wrong answers], why)
  function Q(sound, vignette, question, answer, wrong, why) {
    return { sound: sound, vignette: vignette, question: question, answer: answer, wrong: wrong, why: why };
  }
  // The exam's three-way timing question, always in the exam's order.
  var TIMING = ["Systolic and diastolic", "Diastolic", "Systolic"];
  function T(sound, vignette, answer, why) {
    var q = Q(sound, vignette, "Is this murmur or sound systolic, diastolic, or both?", answer, TIMING.filter(function (choice) { return choice !== answer; }), why);
    q.order = TIMING;
    return q;
  }
  // Two-answer questions (gallop cadence, volume vs pressure) keep their order too.
  function Two(sound, vignette, question, first, second, answerIndex, why) {
    var answer = answerIndex === 0 ? first : second;
    var q = Q(sound, vignette, question, answer, [answerIndex === 0 ? second : first], why);
    q.order = [first, second];
    return q;
  }
  var CADENCE_Q = "This extra heart sound is best described as:";
  var LOAD_Q = "This gallop is associated with which of the following states?";
  var MURMUR_TYPES = ["Systolic blowing murmur", "Diastolic rumbling murmur", "Continuous machinery murmur", "Early diastolic decrescendo murmur", "Mid-systolic (crescendo-decrescendo) murmur", "Late systolic crescendo murmur"];
  function others(answer, list) { return list.filter(function (item) { return item !== answer; }).slice(0, 3); }

  // Question ids are "ex|<index>": only append to this list.
  var QUESTIONS = [
    // Holosystolic (MR, TR, VSD by location)
    Q("holosystolic", "A 58-year-old with a history of rheumatic fever reports fatigue. The sound is best heard at the apex and radiates to the left axilla.", "Identify this murmur.", "Mitral regurgitation", ["Aortic stenosis", "Mitral stenosis", "Tricuspid regurgitation"], "Holosystolic and blowing, at the apex, radiating to the left axilla: mitral regurgitation."),
    Q("holosystolic", "A 5-month-old is seen in the congenital heart clinic for poor feeding. This harsh sound is best heard at the left 3rd to 5th ICS.", "Identify this murmur.", "Ventricular septal defect", ["Patent ductus arteriosus", "Pulmonic stenosis", "Tricuspid stenosis"], "Holosystolic in an infant at the left 3rd–5th ICS: VSD. Blood shunts from the LV to the RV through all of systole. PDA would be continuous (machinery), not just systolic."),
    Q("holosystolic", "A 34-year-old who injects drugs has fever. This murmur is loudest at the left lower sternal border and gets louder each time the patient breathes in.", "Identify this murmur.", "Tricuspid regurgitation", ["Mitral regurgitation", "Aortic stenosis", "Mitral valve prolapse"], "Holosystolic at the left lower sternal border and louder with inspiration (Carvallo's sign): tricuspid regurgitation. Same sound as MR; the location and breathing tell them apart."),
    T("holosystolic", "A 66-year-old with a prior heart attack has new shortness of breath. The sound is best heard at the apex.", "Systolic", "This murmur fills the whole space between S1 and S2, so it is systolic (holosystolic)."),
    Q("holosystolic", "A 71-year-old has worsening dyspnea on exertion. The sound is heard at the apex and radiates to the axilla.", "Identify this heart sound.", "Systolic blowing murmur", others("Systolic blowing murmur", MURMUR_TYPES), "Mitral regurgitation is the classic systolic blowing (holosystolic, high-pitched) murmur."),
    Q("holosystolic", "A 45-year-old has this murmur at the left lower sternal border. It is louder on inspiration.", "What is this finding called?", "Carvallo's sign", ["Paradoxical splitting", "Kussmaul's sign", "Opening snap"], "Carvallo's sign: a right-sided murmur (here TR) gets louder with inspiration because more blood returns to the right heart."),
    Q("holosystolic", "A 74-year-old with severe mitral regurgitation is examined with the bell at the apex.", "Which extra sound is associated with severe cases of this murmur?", "S3", ["S4", "Opening snap", "Systolic ejection click"], "Severe MR (and severe TR) can bring an S3: lots of blood rushes back into the ventricle in early diastole (volume overload)."),

    // Diamond / crescendo-decrescendo (AS, PS)
    Q("diamond", "An 84-year-old fainted while walking up stairs. The murmur is loudest at the right 2nd ICS and radiates to the carotids.", "Identify this murmur.", "Aortic stenosis", ["Mitral regurgitation", "Pulmonic stenosis", "Mitral valve prolapse"], "Harsh crescendo-decrescendo (diamond) systolic murmur at the right 2nd ICS going to the carotids: aortic stenosis."),
    Q("diamond", "A 79-year-old gets chest pressure when mowing the lawn. This murmur radiates to the carotids.", "What maneuver would enhance this sound?", "Listen at the right 2nd ICS while the patient squats", ["Listen at the right 2nd ICS during a Valsalva", "Listen at the apex while the patient lies on their left side", "Listen at the left sternal border while the patient leans forward"], "Aortic stenosis: loudest with squatting (more blood through the valve), softer with Valsalva."),
    Q("diamond", "An 8-year-old has a harsh murmur best heard at the left 2nd ICS. It radiates to the left side of the neck and shoulder.", "Identify this murmur.", "Pulmonic stenosis", ["Aortic stenosis", "Ventricular septal defect", "Patent ductus arteriosus"], "Same diamond shape as AS, but at the left 2nd ICS with radiation to the left neck/shoulder: pulmonic stenosis."),
    T("diamond", "A 10-year-old is evaluated at a well visit. This murmur is best heard with the diaphragm at the left 2nd intercostal space.", "Systolic", "The murmur swells and fades between S1 and S2, with a gap on each side: a mid-systolic (ejection) murmur."),
    Q("diamond", "A 77-year-old is seen for a murmur found at a routine visit. The sound is best heard at the right upper sternal border.", "Which best describes this murmur?", "Mid-systolic (crescendo-decrescendo) murmur", others("Mid-systolic (crescendo-decrescendo) murmur", ["Systolic blowing murmur", "Diastolic rumbling murmur", "Continuous machinery murmur", "Early diastolic decrescendo murmur"]), "It builds then fades inside systole: the crescendo-decrescendo (diamond) ejection murmur of aortic stenosis."),
    Q("diamond", "A 31-year-old with a known bicuspid aortic valve has this murmur at the right 2nd ICS.", "Early in this disease, what extra sound may come just before the murmur?", "Systolic ejection click", ["Mid-systolic click", "Opening snap", "S3"], "A high-pitched ejection click right after S1 is heard in early semilunar valve stenosis, especially a bicuspid aortic valve."),
    Q("diamond", "An 88-year-old has severe disease of the valve causing this murmur at the right 2nd ICS. You notice S2 splits on expiration and closes on inspiration.", "What kind of S2 split is this?", "Paradoxical split", ["Physiologic split", "Fixed split", "Wide split"], "Severe aortic stenosis delays aortic closure, so A2 falls after P2 and the split reverses (paradoxical)."),
    Q("diamond", "A 90-year-old gets short of breath walking to the mailbox. This murmur radiates to the carotids.", "What happens to this murmur during a Valsalva maneuver?", "It gets softer", ["It gets louder", "It does not change", "It becomes continuous"], "Valsalva lowers the blood returning to the heart, so less blood crosses the stiff aortic valve and the AS murmur softens."),

    // Late systolic crescendo (MVP)
    Q("systolic-crescendo", "A 26-year-old thin woman has palpitations. The sound is best heard at the apex. When she stands, the murmur starts earlier and lasts longer.", "Identify this murmur.", "Mitral valve prolapse", ["Aortic stenosis", "Mitral stenosis", "Tricuspid regurgitation"], "Late systolic murmur at the apex that moves earlier with standing/Valsalva: mitral valve prolapse."),
    Q("systolic-crescendo", "A 29-year-old has this murmur at the apex.", "What happens to the click and murmur when the patient squats?", "The click comes later and the murmur is shorter", ["The click comes earlier and the murmur is longer", "The murmur disappears completely", "Nothing changes"], "MVP: squatting fills the ventricle, so the leaflet prolapses later (later click, shorter murmur). Standing/Valsalva does the opposite."),
    Q("systolic-crescendo", "A 33-year-old has this late systolic murmur at the apex.", "In mitral valve prolapse, which extra sound usually comes just before this murmur?", "Mid-systolic click", ["Systolic ejection click", "Opening snap", "S4"], "MVP: the leaflet snaps back into the atrium (mid-systolic click), then leaks (late systolic murmur)."),
    T("systolic-crescendo", "A 38-year-old has occasional palpitations. The sound is heard best at the apex.", "Systolic", "Quiet early systole, then a murmur that builds up to S2: late systolic."),
    Q("systolic-crescendo", "A 24-year-old with anxiety and palpitations. The sound is best heard at the apex and gets longer with Valsalva.", "Identify this heart sound.", "Late systolic crescendo murmur", others("Late systolic crescendo murmur", ["Systolic blowing murmur", "Diastolic rumbling murmur", "Continuous machinery murmur", "Early diastolic decrescendo murmur"]), "The murmur starts partway through systole and builds right up to S2: the late MR of mitral valve prolapse."),

    // Early systolic decrescendo
    T("systolic-decrescendo", "A 63-year-old has sudden shortness of breath 3 days after a heart attack. The sound is heard at the apex.", "Systolic", "It starts at S1 and fades before S2, so it is systolic. Do not mix it up with the decrescendo of AR, which starts at S2 (diastolic)."),
    Q("systolic-decrescendo", "A 61-year-old develops sudden dyspnea after a heart attack. This murmur is best heard at the apex.", "Which best describes this murmur?", "Early systolic decrescendo murmur", ["Early diastolic decrescendo murmur", "Diastolic rumbling murmur", "Continuous machinery murmur"], "Loud right after S1 and fading before S2: early systolic decrescendo. The early diastolic decrescendo (AR) starts after S2 instead."),
    Q("systolic-decrescendo", "A 67-year-old has a new murmur at the apex after a heart attack.", "This murmur begins right after which sound?", "S1", ["S2", "The opening snap", "S4"], "It begins with S1 (start of systole) and fades out before S2."),
    Q("systolic-decrescendo", "A 64-year-old has sudden shortness of breath 4 days after a heart attack. The murmur is heard at the apex and radiates to the axilla.", "Identify this murmur.", "Mitral regurgitation", ["Aortic regurgitation", "Aortic stenosis", "Mitral stenosis"], "Apex to axilla is MR. Sudden (acute) MR after an MI can sound early and decrescendo because the small left atrium fills up fast."),

    // Mid-diastolic rumble (MS, TS)
    Q("mid-diastolic", "A 52-year-old woman who had rheumatic fever as a child is short of breath. The sound is best heard with the bell at the apex while she lies on her left side.", "Identify this murmur.", "Mitral stenosis", ["Aortic regurgitation", "Mitral regurgitation", "Aortic stenosis"], "Low rumble in diastole, bell at the apex, left lateral decubitus: mitral stenosis."),
    T("mid-diastolic", "A 47-year-old with new atrial fibrillation. The sound is heard with the bell at the mitral area when the patient lies on the left side.", "Diastolic", "The rumble sits in the middle of diastole, after S2 and before the next S1."),
    Q("mid-diastolic", "A 68-year-old has worsening shortness of breath with exertion. The sound is best heard with the bell while the patient is lying on the left side.", "Identify this heart sound.", "Diastolic rumbling murmur", others("Diastolic rumbling murmur", ["Systolic blowing murmur", "Continuous machinery murmur", "Early diastolic decrescendo murmur"]), "Low-pitched rumble in diastole: the mitral stenosis murmur."),
    Q("mid-diastolic", "A 55-year-old with rheumatic heart disease has this low-pitched murmur.", "What maneuver would enhance this sound?", "Listen at the apex with the bell while the patient lies on their left side", ["Listen at the carotids while the patient does a Valsalva", "Listen at the left sternal border while the patient leans forward", "Listen at the aortic area while the patient is supine"], "Mitral stenosis: bell (low pitch) at the apex, patient in left lateral decubitus."),
    Q("mid-diastolic", "A 41-year-old has this same low rumble, but it is loudest at the left lower sternal border and gets louder with inspiration.", "Identify this murmur.", "Tricuspid stenosis", ["Mitral stenosis", "Tricuspid regurgitation", "Pulmonic regurgitation"], "Same rumble as MS, but right-sided: left lower sternal border and louder with inspiration. Tricuspid stenosis is rare."),
    Q("mid-diastolic", "A 59-year-old with mitral stenosis is examined at the apex.", "Where does this murmur radiate?", "It does not radiate", ["To the carotids", "To the left axilla", "To the left neck and shoulder"], "Mitral stenosis: apex, bell, no radiation. Carotids = AS, axilla = MR, left neck/shoulder = PS."),

    // Opening snap
    Q("os", "A 49-year-old with a history of rheumatic fever. Listen for the extra sound just after S2.", "Identify this extra sound.", "Opening snap", ["S3", "Physiologic split S2", "Systolic ejection click"], "A sharp, high-pitched snap shortly after S2: opening snap. An S3 is a low thud a little later; a split S2 is two sounds right together."),
    Q("os", "A 56-year-old has this extra sound in early diastole.", "What usually follows this sound?", "A low-pitched diastolic rumble", ["A crescendo-decrescendo systolic murmur", "A late systolic crescendo murmur", "A continuous machinery murmur"], "The snap is the stiff mitral valve forced open; then blood squeezes through the small opening as a diastolic rumble."),
    Q("os", "A 44-year-old immigrant with prior rheumatic fever. This extra sound is heard at the apex.", "This extra sound is classic for which valve problem?", "Mitral stenosis", ["Mitral valve prolapse", "Aortic stenosis", "Aortic regurgitation"], "Opening snap = mitral stenosis (rarely tricuspid stenosis)."),
    T("os", "A 50-year-old has a high-pitched extra sound at the apex.", "Diastolic", "The opening snap comes after S2, in early to mid diastole."),

    // S3
    Two("s3", "A 69-year-old with heart failure and swollen legs. The sound is heard with the bell at the apex in left lateral decubitus.", LOAD_Q, "Volume overload", "Pressure overload", 0, "S3 = volume overload (too much blood): CHF, dilated cardiomyopathy. S4 = pressure overload."),
    Two("s3", "Listen to the audio.", CADENCE_Q, "Ta-lub-dub", "Lub-dub-ta", 1, "The extra sound comes after S2: Lub-dub-ta (Ken-tuc-ky). That is S3."),
    Q("s3", "A 62-year-old with dilated cardiomyopathy. The sound is heard best with the bell at the apex.", "Identify this heart sound.", "Kentucky gallop (S3)", ["Tennessee gallop (S4)", "Physiologic splitting of S2", "Mid-systolic click"], "Low thud right after S2, Ken-TUC-ky: S3 gallop."),
    Q("s3", "A healthy 21-year-old college runner has this sound at the apex.", "Which statement about this sound is true?", "It can be normal in athletes, pregnancy, and young people", ["It is always pathologic", "It means a stiff, non-compliant ventricle", "It is classic for mitral stenosis"], "S3 can be normal in athletes, pregnancy, and youth. In older adults it points to volume overload (CHF, DCM)."),
    Q("s3", "A 70-year-old with CHF has this extra sound.", "When does this extra sound occur?", "Early diastole, just after S2", ["Late diastole, just before S1", "Mid-systole", "Early systole, just after S1"], "S3 is early diastole: rapid filling vibrates the ventricular walls right after S2."),

    // S4
    Two("s4", "A 73-year-old with long-standing uncontrolled hypertension. The sound is heard with the bell at the apex.", LOAD_Q, "Volume overload", "Pressure overload", 1, "S4 = pressure overload (stiff ventricle): severe HTN, HCM, aortic stenosis."),
    Two("s4", "Listen to the audio.", CADENCE_Q, "Ta-lub-dub", "Lub-dub-ta", 0, "The extra sound comes right before S1: Ta-lub-dub (Ten-nes-see). That is S4."),
    Q("s4", "A 65-year-old with hypertrophic cardiomyopathy. The sound is best heard with the bell at the apex.", "Identify this heart sound.", "Tennessee gallop (S4)", ["Kentucky gallop (S3)", "Physiologic splitting of S2", "Mid-systolic click"], "Extra sound just before S1, TEN-nes-see: S4 gallop."),
    Q("s4", "An 80-year-old with aortic stenosis has this extra sound.", "What causes this sound?", "The atria contracting against a stiff ventricle", ["Rapid filling of an overloaded ventricle", "A stenotic mitral valve snapping open", "The mitral leaflet snapping back into the atrium"], "S4: late diastole, the atrium pushes blood into a stiff, non-compliant ventricle."),
    Q("s4", "A 58-year-old with hypertension has this sound at the apex.", "Which statement about this sound is true?", "It is always pathologic", ["It is normal in athletes and pregnancy", "It means volume overload", "It occurs in early diastole"], "S4 is (almost) always pathologic and late diastolic. The S3 is the one that can be normal."),

    // Split S2
    Q("split-s2", "A healthy 23-year-old has this sound at the pulmonic area. It is there when breathing in and goes away when breathing out or holding the breath.", "Identify this heart sound.", "Physiologic splitting of S2", ["Kentucky gallop (S3)", "Tennessee gallop (S4)", "Mid-systolic click"], "S2 in two quick pieces only on inspiration: a normal (physiologic) split."),
    Q("split-s2", "A healthy 26-year-old has this finding at the left 2nd ICS only during inspiration.", "Why does this happen?", "Inspiration brings more blood to the right heart, so the pulmonic valve closes a bit late", ["The aortic valve closes late because of a stiff ventricle", "The mitral valve closes after the tricuspid", "The atria contract against a stiff ventricle"], "Negative chest pressure on inspiration fills the right side more, so P2 comes just after A2."),
    Q("split-s2", "A healthy 19-year-old athlete has this normal finding.", "Where is this best heard?", "Pulmonic area (left 2nd ICS)", ["Apex", "Right 2nd ICS", "Left lower sternal border"], "Physiologic split S2 is best heard at the pulmonic area, left sternal border 2nd ICS."),
    Q("split-s2", "A healthy 30-year-old has this finding on inspiration.", "What happens if the patient holds their breath on expiration?", "The split goes away", ["The split gets wider", "The split stays the same", "A murmur appears"], "A physiologic split closes when the patient breathes out or holds their breath. A split that never closes is fixed (ASD)."),

    // Baseline
    Q("baseline", "A healthy 28-year-old is seen for a sports physical.", "Identify what you hear.", "Normal S1 and S2", ["S3 gallop", "S4 gallop", "Physiologic split S2"], "Just lub-dub with quiet in between: normal S1 and S2. Use this track as your reference."),
    Q("baseline", "A healthy 35-year-old has a normal exam.", "What makes the first sound of each beat (lub)?", "The mitral and tricuspid valves closing", ["The aortic and pulmonic valves closing", "Rapid filling of the ventricles", "The atria contracting"], "S1 = AV valves (mitral, tricuspid) closing, starting systole. S2 = aortic and pulmonic closing, starting diastole.")
  ];

  window.HEART_SOUNDS_EXAM = { clips: CLIPS, questions: QUESTIONS, size: 15 };
}());
