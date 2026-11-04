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
    Q("baseline", "A healthy 35-year-old has a normal exam.", "What makes the first sound of each beat (lub)?", "The mitral and tricuspid valves closing", ["The aortic and pulmonic valves closing", "Rapid filling of the ventricles", "The atria contracting"], "S1 = AV valves (mitral, tricuspid) closing, starting systole. S2 = aortic and pulmonic closing, starting diastole."),

    // ---- Set 2 (added 2026-11-04) ----
    // Baseline
    Q("baseline", "A healthy 40-year-old is seen for a yearly physical.", "Which sound marks the start of diastole?", "S2", ["S1", "S3", "S4"], "S2 (aortic and pulmonic valves closing) ends systole and starts diastole. S1 starts systole."),
    Q("baseline", "A 25-year-old has a pre-employment physical. She has no symptoms.", "Which best describes this recording?", "No murmur", ["Systolic murmur", "Diastolic murmur", "Systolic and diastolic murmur"], "Only lub-dub with silence in between: normal S1 and S2, no murmur."),
    Q("baseline", "A healthy 33-year-old is examined at the aortic and pulmonic areas.", "Where is S2 normally louder than S1?", "At the base (aortic and pulmonic areas)", ["At the apex", "At the left lower sternal border", "It is the same everywhere"], "The semilunar valves sit at the base, so S2 is louder there. At the apex, S1 (mitral) is louder."),
    Q("baseline", "A healthy 45-year-old has a normal cardiac exam.", "What makes the second sound of each beat (dub)?", "The aortic and pulmonic valves closing", ["The mitral and tricuspid valves closing", "The atria contracting", "Rapid filling of the ventricles"], "S2 = semilunar valves (aortic, pulmonic) closing. Memory aid from lecture: D SLAP."),
    Q("baseline", "A healthy 22-year-old has this normal recording.", "The quiet space between S1 and S2 is:", "Systole", ["Diastole", "Atrial contraction", "Rapid ventricular filling"], "S1 to S2 is systole (ventricles squeeze). S2 to the next S1 is diastole (ventricles fill)."),

    // Split S2
    Q("split-s2", "A healthy 20-year-old has a doubled second sound at the pulmonic area on inspiration.", "Which part of the split S2 comes second?", "P2 (pulmonic valve closing)", ["A2 (aortic valve closing)", "M1 (mitral valve closing)", "T1 (tricuspid valve closing)"], "On inspiration the right heart gets more blood, so the pulmonic valve closes a bit after the aortic valve: A2, then P2."),
    Q("split-s2", "Imagine this same split were heard in every beat, never changing with breathing.", "What would that be called, and what does it suggest?", "Fixed split: atrial septal defect", ["Physiologic split: normal", "Paradoxical split: severe aortic stenosis", "Wide split: mitral stenosis"], "A split that never changes with breathing is fixed, the classic sign of an ASD. Yours only shows on inspiration, so it is physiologic."),
    Q("split-s2", "A healthy 17-year-old has this finding only when breathing in.", "Is this finding normal?", "Yes, a split only on inspiration is normal", ["No, any split S2 is pathologic", "Only in pregnancy", "Only in adults over 60"], "A physiologic split on inspiration is a normal variant. Fixed, wide, or paradoxical splits are pathologic."),
    Q("split-s2", "A healthy 27-year-old. You want to hear the split clearly.", "Where and with what should you listen?", "Diaphragm at the left 2nd ICS", ["Bell at the apex", "Bell at the right 2nd ICS", "Diaphragm at the left lower sternal border"], "The split is high-pitched and best at the pulmonic area: diaphragm, left 2nd ICS."),
    Q("split-s2", "A healthy 32-year-old. The second sound doubles when breathing in and comes back together when breathing out.", "Identify this heart sound.", "Physiologic splitting of S2", ["Opening snap", "Mid-systolic click", "Tennessee gallop"], "Two quick pieces of S2 that come and go with breathing: physiologic split. An opening snap comes a little later after S2 and does not change with breathing."),

    // S3
    Q("s3", "A healthy 30-year-old woman in her third trimester of pregnancy has this extra sound at the apex.", "What does this sound most likely mean here?", "A normal finding in pregnancy", ["Pressure overload from a stiff ventricle", "Mitral stenosis", "It is always pathologic"], "S3 can be normal in pregnancy, athletes, and young people because the ventricles fill fast."),
    Q("s3", "A 72-year-old with dilated cardiomyopathy has this extra sound.", "How is this sound best heard?", "With the bell, in a quiet room, while the patient holds their breath", ["With the diaphragm pressed firmly", "With the diaphragm during a Valsalva", "With the bell at the right 2nd ICS while squatting"], "Gallops are low-pitched: bell (light touch), quiet room, breath held. Left lateral decubitus at the apex helps too."),
    Q("s3", "A 64-year-old with heart failure has this extra sound.", "What causes this sound?", "Rapid filling that makes the ventricular walls vibrate", ["The atria contracting against a stiff ventricle", "A stenotic mitral valve snapping open", "The mitral leaflet snapping back into the atrium"], "S3: fast early filling of an overloaded ventricle sets the walls vibrating right after S2."),
    Two("s3", "A 57-year-old with dilated cardiomyopathy and an ejection fraction of 25% has this extra sound at the apex.", LOAD_Q, "Volume overload", "Pressure overload", 0, "S3 = too much blood (volume overload): CHF, dilated cardiomyopathy."),
    Two("s3", "A 66-year-old is admitted for a heart failure flare with leg swelling and crackles.", CADENCE_Q, "Ta-lub-dub", "Lub-dub-ta", 1, "The extra sound comes after S2: Lub-dub-ta, Ken-tuc-ky. That is S3."),

    // S4
    Two("s4", "A 74-year-old with severe aortic stenosis has this extra sound at the apex.", LOAD_Q, "Volume overload", "Pressure overload", 1, "S4 = a stiff ventricle from pressure overload: aortic stenosis, severe hypertension, HCM."),
    Two("s4", "A 35-year-old with hypertrophic cardiomyopathy has this extra sound.", CADENCE_Q, "Ta-lub-dub", "Lub-dub-ta", 0, "The extra sound comes just before S1: Ta-lub-dub, Ten-nes-see. That is S4."),
    Q("s4", "A 69-year-old with long-standing hypertension has this extra sound.", "When does this extra sound occur?", "Late diastole, just before S1", ["Early diastole, just after S2", "Mid-systole", "Early systole, just after S1"], "S4 sits in late diastole, when the atria contract, right before S1."),
    Q("s4", "This extra sound is heard with the bell at the apex.", "Which patient is most likely to have it?", "A 70-year-old with long-standing hypertension", ["A healthy 30-year-old in her third trimester", "A 20-year-old trained marathon runner", "A 60-year-old with dilated cardiomyopathy"], "S4 comes from a stiff ventricle (HTN, AS, HCM). Pregnancy, athletes, and dilated cardiomyopathy point to S3 instead."),
    Q("s4", "A 77-year-old with poorly controlled blood pressure. The sound is best heard with the bell at the apex.", "Identify this heart sound.", "Tennessee gallop (S4)", ["Kentucky gallop (S3)", "Opening snap", "Physiologic splitting of S2"], "Extra sound right before S1, TEN-nes-see: S4."),

    // Opening snap
    Q("os", "A 51-year-old with a history of rheumatic fever has this extra sound after S2.", "How would you describe this sound?", "A high-pitched snap", ["A low-pitched thud", "A scratchy rub", "A continuous hum"], "The opening snap is high-pitched and sharp. The S3 is the low-pitched thud."),
    Q("os", "A 48-year-old with rheumatic heart disease has this extra sound.", "What causes this sound?", "Blood forcing open a stiff (stenotic) AV valve", ["The mitral leaflet snapping back into the atrium", "The atria contracting against a stiff ventricle", "Rapid filling of a volume-overloaded ventricle"], "Opening snap: the stenotic mitral valve is forced open at the start of filling."),
    Q("os", "A 53-year-old with mitral stenosis has this extra sound.", "This extra sound comes right after which heart sound?", "S2", ["S1", "S4", "The ejection click"], "The opening snap is early to mid diastole, shortly after S2."),
    Q("os", "A 42-year-old has this extra sound.", "Mitral stenosis is the classic cause. Which other valve lesion can (rarely) cause it?", "Tricuspid stenosis", ["Aortic stenosis", "Mitral valve prolapse", "Aortic regurgitation"], "An opening snap comes from a stenotic AV valve: mitral, or rarely tricuspid."),
    Q("os", "A 39-year-old woman who grew up without antibiotics for strep throat has this extra sound at the apex.", "Identify the most likely valve problem.", "Mitral stenosis", ["Mitral regurgitation", "Aortic stenosis", "Tricuspid regurgitation"], "Past rheumatic fever plus an opening snap: mitral stenosis."),

    // Holosystolic
    Q("holosystolic", "A 60-year-old has this murmur at the apex radiating to the left axilla.", "Which description fits this murmur?", "High-pitched and blowing", ["Low-pitched and rumbling", "Harsh and machinery-like", "Scratchy and high-pitched"], "Mitral regurgitation: blowing, high-pitched, holosystolic."),
    Q("holosystolic", "A 52-year-old has this murmur at the apex.", "Where does this murmur classically radiate?", "To the left axilla", ["To the carotids", "To the left neck and shoulder", "It does not radiate"], "MR follows the backflow toward the left axilla. AS goes to the carotids; PS to the left neck/shoulder."),
    Q("holosystolic", "A 3-month-old breathes fast and sweats with feeds. This harsh murmur is loudest at the left 3rd to 5th ICS.", "What causes this murmur?", "Blood shunting from the left ventricle to the right ventricle", ["Blood flowing from the aorta to the pulmonary artery", "A stiff pulmonic valve", "A prolapsing mitral leaflet"], "VSD: the septum did not close, so blood shunts LV to RV through all of systole. Aorta to pulmonary artery is PDA."),
    Q("holosystolic", "A 47-year-old has this murmur at the left lower sternal border.", "What maneuver would enhance this sound if it is tricuspid regurgitation?", "Listen at the left lower sternal border while the patient breathes in", ["Listen at the apex while the patient breathes out", "Listen at the carotids during a Valsalva", "Listen at the right 2nd ICS while the patient squats"], "Right-sided murmurs get louder with inspiration (Carvallo's sign for TR)."),
    Q("holosystolic", "A 65-year-old has this murmur between S1 and S2.", "Systolic murmurs come from which valve problems?", "Leaky mitral/tricuspid or stiff aortic/pulmonic valves", ["Stiff mitral/tricuspid or leaky aortic/pulmonic valves", "Only leaky aortic valves", "Only stiff mitral valves"], "In systole the AV valves are closed and the semilunar valves open: regurgitant AV valves (MR, TR) and stenotic semilunar valves (AS, PS) make systolic murmurs."),

    // Early systolic decrescendo
    Q("systolic-decrescendo", "A 62-year-old has this murmur at the apex after a recent heart attack.", "How does this murmur differ from aortic regurgitation?", "It starts right after S1 instead of after S2", ["It starts right after S2 instead of after S1", "It is continuous through S2", "It is a low-pitched rumble"], "Both fade (decrescendo), but this one is systolic (after S1). AR is early diastolic (after S2)."),
    T("systolic-decrescendo", "A 70-year-old has a new murmur at the apex. It is loud right after the first heart sound and then fades.", "Systolic", "Loud at S1 and gone before S2: an early systolic murmur."),
    Q("systolic-decrescendo", "A 59-year-old has sudden dyspnea after a heart attack. The murmur is at the apex.", "Identify this heart sound.", "Early systolic decrescendo murmur", ["Late systolic crescendo murmur", "Mid-systolic (crescendo-decrescendo) murmur", "Early diastolic decrescendo murmur"], "Starts at S1 and fades: early systolic decrescendo. Late systolic crescendo builds up to S2 (MVP)."),
    Q("systolic-decrescendo", "A 68-year-old has this murmur at the apex.", "When is this murmur loudest?", "Early systole, right after S1", ["Late systole, right before S2", "Mid-diastole", "Late diastole, right before S1"], "Decrescendo means it starts loud and fades, so it is loudest right after S1."),
    Q("systolic-decrescendo", "A 61-year-old has this high-pitched murmur at the apex.", "Which part of the stethoscope is best for this murmur?", "The diaphragm, pressed firmly", ["The bell, with light pressure", "The bell, pressed firmly", "Either, it does not matter"], "High-pitched murmurs (like MR): diaphragm, firm pressure. Low-pitched sounds (gallops, MS rumble): bell, light touch."),

    // Diamond / crescendo-decrescendo
    Q("diamond", "An 83-year-old has this murmur at the right 2nd ICS radiating to the carotids.", "Which description fits this murmur?", "Harsh and high-pitched", ["Soft and blowing", "Low-pitched and rumbling", "Soft continuous hum"], "Aortic stenosis: harsh, high-pitched, crescendo-decrescendo."),
    Q("diamond", "A 12-year-old has this murmur at the left 2nd ICS radiating to the left shoulder.", "Which S2 finding may go with this murmur?", "Wide split S2", ["Paradoxical split S2", "Fixed split S2", "Physiologic split S2 only"], "Pulmonic stenosis delays pulmonic closure, so a wide split S2 may be present. Paradoxical split goes with severe AS."),
    Q("diamond", "A 6-year-old has a soft, vibratory systolic murmur at the left sternal border. It is loudest lying down and disappears when the child stands.", "Identify this murmur.", "Still's murmur (innocent)", ["Ventricular septal defect", "Patent ductus arteriosus", "Aortic stenosis"], "Soft, musical/vibratory, loudest supine, gone with standing: Still's murmur, the most common innocent murmur in children."),
    Q("diamond", "An 86-year-old has exertional chest pain and fainting spells. This is aortic stenosis.", "Where is this murmur best heard?", "Right 2nd ICS (right upper sternal border)", ["Left 2nd ICS", "Apex", "Left lower sternal border"], "AS: right 2nd ICS, radiating to the carotids. PS is the left 2nd ICS."),
    T("diamond", "An 81-year-old gets short of breath walking to the car. The murmur radiates to the carotids.", "Systolic", "A gap after S1, a swell and fade, a gap before S2: a mid-systolic (ejection) murmur."),

    // Late systolic crescendo (MVP)
    Q("systolic-crescendo", "A 28-year-old has this murmur at the apex after a mid-systolic click.", "What happens to the click and murmur with Valsalva or standing?", "The click comes earlier and the murmur is longer", ["The click comes later and the murmur is shorter", "The murmur disappears", "Nothing changes"], "MVP: less blood in the ventricle (standing, Valsalva) makes the leaflet prolapse sooner: earlier click, longer murmur."),
    Q("systolic-crescendo", "A 30-year-old has a click followed by this murmur at the apex.", "What causes the click?", "The mitral leaflet snapping back into the atrium, stopped by the chordae", ["A stiff aortic valve opening", "A stenotic mitral valve opening", "The atria contracting against a stiff ventricle"], "Mid-systolic click: the floppy mitral leaflet billows back into the atrium until the chordae tendineae catch it."),
    Q("systolic-crescendo", "A 36-year-old with mitral valve prolapse has this murmur.", "Which statement is true?", "All MVP can lead to MR, but not all MR is MVP", ["All MR is caused by MVP", "MVP never causes MR", "MVP causes a diastolic rumble"], "The late systolic murmur of MVP is mitral regurgitation, but MR has many other causes."),
    Q("systolic-crescendo", "A 25-year-old woman has palpitations and this late systolic murmur.", "Where is this murmur best heard?", "Apex", ["Right 2nd ICS", "Left 2nd ICS", "Left lower sternal border"], "Mitral valve prolapse is best heard at the apex."),
    Q("systolic-crescendo", "A 31-year-old has this murmur at the apex. It starts later and gets shorter when she squats.", "Identify this murmur.", "Mitral valve prolapse", ["Mitral regurgitation from a heart attack", "Aortic stenosis", "Mitral stenosis"], "Late systolic murmur that moves later with squatting: MVP."),

    // Mid-diastolic rumble
    Q("mid-diastolic", "A 54-year-old has this murmur with the bell at the apex.", "Which description fits this murmur?", "Low-pitched rumble", ["High-pitched blowing", "Harsh crescendo-decrescendo", "Scratchy and high-pitched"], "Mitral stenosis: a low-pitched diastolic rumble, best with the bell."),
    Q("mid-diastolic", "A 49-year-old has this murmur between S2 and the next S1.", "Diastolic murmurs come from which valve problems?", "Leaky aortic/pulmonic or stiff mitral/tricuspid valves", ["Leaky mitral/tricuspid or stiff aortic/pulmonic valves", "Only stiff aortic valves", "Only leaky mitral valves"], "In diastole the AV valves open and the semilunar valves close: AR, PR, MS, TS. Lecture memory aid: diastolic = ARMS."),
    Q("mid-diastolic", "A 57-year-old with rheumatic heart disease has this rumble at the apex.", "In mitral stenosis, what extra sound often comes just before this rumble?", "Opening snap", ["S3", "S4", "Systolic ejection click"], "MS: S2, then the opening snap, then the diastolic rumble."),
    Q("mid-diastolic", "A 64-year-old woman with atrial fibrillation has fatigue. The sound is heard best with the bell at the apex while she lies on her left side.", "Identify this heart sound.", "Diastolic rumbling murmur", ["Continuous machinery murmur", "Systolic blowing murmur", "Mid-systolic rumbling murmur"], "Bell, apex, left side, rumble after S2: the mitral stenosis murmur."),
    Q("mid-diastolic", "A 50-year-old has this low-pitched murmur at the apex.", "Which part of the stethoscope is best for this murmur?", "The bell, with light pressure", ["The diaphragm, pressed firmly", "The diaphragm, with light pressure", "The bell, pressed firmly"], "Low-pitched sounds (MS rumble, S3, S4): bell with a light touch. Pressing hard turns the bell into a diaphragm.")
  ];

  // Sets are ranges of the question list (Anna went through Set 1 first). New sets append.
  var SETS = [
    { id: "set-1", title: "Set 1", from: 0, to: 50 },
    { id: "set-2", title: "Set 2", from: 50, to: 100 }
  ];

  window.HEART_SOUNDS_EXAM = { clips: CLIPS, questions: QUESTIONS, sets: SETS, size: 15 };
}());
