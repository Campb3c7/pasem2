/* Hallmarks: Stress Testing (Sillaman, plus CAD I stress slides): what each finding or condition looks like on a stress test. Source: source-material/cardio-part-3/text/stress-testing.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("stress-testing", "Cardiac Testing: Stress Testing", [

    C("hm-reversible-ischemia", "Reversible ischemia on MPI", "Perfusion that drops with stress but is normal at rest.",
      "Dark on stress images, filled in at rest = reversible ischemia = positive test, next step cath.", [
        ["test", "Decreased perfusion on stress images, normal perfusion at rest", "The artery supplies enough at rest but not under stress."],
        ["tx", "Positive stress test: next step is a left heart cath (coronary angiography)", "A positive stress test needs the anatomic test."],
        ["story", "Stan: no EKG changes on Lexiscan, but reversible ischemia on MPI", "Imaging can catch ischemia the EKG misses."]
      ], { x: ["hm-fixed-defect"] }),

    C("hm-fixed-defect", "Fixed defect (scar) on MPI", "Perfusion missing at both rest and stress.",
      "Dark on both rest and stress images = old MI or scar, not active ischemia.", [
        ["test", "Reduced perfusion on both rest and stress images", "Dead tissue takes up no tracer at any time."],
        ["cause", "Previous myocardial infarction or scarring", "That is the slide's meaning of a fixed reduction."],
        ["dx", "PET viability scan to tell scar from hibernating muscle", "PET measures metabolism as well as perfusion."]
      ], { x: ["hm-reversible-ischemia"] }),

    C("hm-hibernating-pet", "Hibernating myocardium on PET", "Alive but underperfused muscle that could recover.",
      "Low perfusion but preserved glucose uptake on PET = hibernating = revascularize.", [
        ["test", "Low perfusion with preserved glucose metabolism", "Live cells still take up glucose; scar does not."],
        ["dx", "PET is the gold-standard noninvasive test for hibernating myocardium", "PET assesses both perfusion and metabolism."],
        ["tx", "Candidate for revascularization", "Viable muscle can recover once flow is restored."]
      ], { x: ["hm-fixed-defect"] }),

    C("hm-high-risk-ett", "High-risk exercise stress test", "Findings that mean severe CAD.",
      "Under 5 METs, ST depression ≥2 mm, BP falling with exercise, angina, ectopy at low workload = high risk.", [
        ["test", "Exercise capacity under 5 METs", "Poor functional capacity predicts worse outcomes."],
        ["ekg", "ST depression of 2 mm or more", "Deep ST depression suggests extensive ischemia."],
        ["exam", "Systolic BP drops below resting or peaks under 130", "Failure to raise BP means the pump can't keep up."],
        ["cutoff", "Duke treadmill score ≤ -11", "That is the high-risk Duke band."]
      ]),

    C("hm-duke-score", "Duke treadmill score", "Prognosis from a treadmill test.",
      "Minutes - 5 × ST mm - 4 × angina index: ≥+5 low, -10 to +4 moderate, ≤-11 high.", [
        ["buzz", "Exercise minutes - (5 × max ST deviation) - (4 × angina index)", "That is the formula on the slide."],
        ["cutoff", "Low risk ≥ +5; moderate -10 to +4", "The score bands guide whether more testing is needed."],
        ["story", "8 minutes, 1 mm ST deviation, non-limiting angina = -1 (moderate)", "8 - 5 - 4 = -1, the slide's worked example."]
      ]),

    C("hm-cant-exercise-ekg", "Can't read an exercise EKG", "Baseline EKGs that make a plain treadmill test useless.",
      "LBBB, V-pacing, LVH, digoxin, ≥1 mm resting ST changes = add imaging (or go pharmacologic).", [
        ["ekg", "LBBB or ventricular pacing", "These hide ischemic ST changes; use pharmacologic stress with imaging."],
        ["ekg", "LVH, digoxin or ≥1 mm resting ST-T abnormalities", "Baseline ST changes make the exercise EKG nondiagnostic."],
        ["who", "Can't reach 85% of predicted max heart rate", "A submaximal test loses accuracy."]
      ]),

    C("hm-vasodilator-ci", "Vasodilator stress contraindications", "Who can't get adenosine, regadenoson or dipyridamole.",
      "Active wheezing, SBP <90, high-grade AV block or sick sinus, caffeine in 12 h = no vasodilator stress.", [
        ["who", "Active wheezing from asthma or COPD", "Adenosine-type drugs can trigger bronchospasm."],
        ["who", "Second/third-degree AV block or sick sinus without a pacemaker", "Adenosine slows AV conduction."],
        ["avoid", "Caffeine or xanthines within 12 hours (aminophylline within 24)", "They block adenosine receptors and void the test."],
        ["who", "Hypotension (SBP under 90)", "Vasodilators drop BP further."]
      ], { x: ["hm-dobutamine-ci"] }),

    C("hm-dobutamine-ci", "Dobutamine stress contraindications", "Who can't get dobutamine.",
      "Unstable angina, recent MI, tachyarrhythmia, severe symptomatic AS, HCM, dissection = no dobutamine.", [
        ["who", "Symptomatic severe aortic stenosis or hypertrophic cardiomyopathy", "Raising contractility worsens a fixed or dynamic outflow obstruction."],
        ["who", "Tachyarrhythmias, unstable angina or recent MI", "Dobutamine raises HR and contractility, worsening these."],
        ["who", "Aortic dissection or large aortic aneurysm", "Higher force and pressure threaten the aorta."],
        ["test", "Preferred agent for stress echo; can test valves (dobutamine only)", "It mimics exercise by raising HR and contractility."]
      ], { x: ["hm-vasodilator-ci"] }),

    C("hm-regadenoson-se", "Regadenoson (Lexiscan) side effects", "What patients feel with Lexiscan.",
      "Dyspnea, headache, flushing, tachycardia during Lexiscan = expected side effects.", [
        ["sx", "Dyspnea (28%), headache (26%), tachycardia (22%), flushing (16%)", "These are the most common regadenoson effects on the slide."],
        ["buzz", "Most common vasodilator used", "Regadenoson is the most common pharmacologic agent."],
        ["tx", "Can be injected during exercise if the patient can't reach the workload", "Its pharmacokinetics allow switching mid-test."]
      ]),

    C("hm-stress-inappropriate", "Stress test is NOT appropriate", "Patients who should not be stress tested.",
      "Active chest pain/ACS, decompensated HF, critical AS, PE, endocarditis, asymptomatic = no stress test.", [
        ["who", "Active chest pain or ongoing ACS (UA, NSTEMI)", "Rule 1: acute MI or ongoing ischemia contraindicates any stress test."],
        ["who", "Advanced or critical aortic stenosis", "Stress can cause collapse with a fixed outflow obstruction."],
        ["who", "Asymptomatic patients (rare exceptions like high-risk jobs)", "Stress testing is not a screening test."],
        ["timing", "No new symptoms within 5 years of CABG or 2 years of PCI", "Testing then doesn't change management."]
      ])
  ], {
    result: ["hm-reversible-ischemia", "hm-fixed-defect", "hm-hibernating-pet", "hm-high-risk-ett", "hm-duke-score"],
    who: ["hm-cant-exercise-ekg", "hm-vasodilator-ci", "hm-dobutamine-ci", "hm-regadenoson-se", "hm-stress-inappropriate"]
  });
}());
