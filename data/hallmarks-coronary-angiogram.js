/* Hallmarks: Coronary Angiogram (Sillaman): conditions around the cath. Source: source-material/cardio-part-3/text/coronary-angiogram.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("coronary-angiogram", "Cardiac Testing: Coronary Angiogram", [

    C("hm-angio-indicated", "Needs a coronary angiogram first", "Situations where cath is the initial test.",
      "Cardiac arrest, life-threatening ventricular arrhythmia, new symptomatic HF, or ACS = straight to cath.", [
        ["who", "After sudden cardiac arrest or a life-threatening ventricular arrhythmia", "These are initial-test indications for angiography."],
        ["who", "ACS: STEMI, NSTEMI or unstable angina", "ACS goes to the cath lab, not the stress lab."],
        ["who", "Lifestyle-limiting angina despite maximal medical therapy", "Failure of medicines means look at the anatomy."],
        ["buzz", "Gold standard for coronary atherosclerosis", "Cath directly shows the coronary lumen."]
      ]),

    C("hm-significant-stenosis", "Significant stenosis", "When a narrowing matters.",
      "≥70% (≥50% left main) or FFR ≤0.80 = significant; under 70% rarely needs revascularization.", [
        ["cutoff", "≥70% narrowing (left main ≥50%)", "Below these levels the lesion is rarely flow-limiting."],
        ["test", "FFR ≤0.80 (or iFR ≤0.89) for an intermediate lesion", "FFR shows whether the stenosis actually limits flow."],
        ["test", "TIMI 0 flow: complete occlusion", "TIMI grades flow from 0 (none) to 3 (normal)."]
      ]),

    C("hm-retroperitoneal-angio", "Retroperitoneal bleed (stick too high)", "Femoral access above the inguinal ligament.",
      "Puncture too high + back pain + hypotension + falling Hgb = retroperitoneal bleed.", [
        ["cause", "Femoral puncture too high (above the inguinal ligament)", "Femoral access must be within 3 cm below the ligament."],
        ["sx", "Back or flank pain with hypotension and falling hemoglobin", "Blood collects silently in the retroperitoneum."],
        ["dx", "CT of the abdomen and pelvis", "Imaging finds the hidden bleed."]
      ], { x: ["hm-pseudo-angio"] }),

    C("hm-pseudo-angio", "Pseudoaneurysm (stick too low)", "A late femoral access complication.",
      "Puncture too low + pulsatile groin mass + bruit = pseudoaneurysm; duplex ultrasound.", [
        ["cause", "Femoral puncture too low", "A low stick is the setup for a pseudoaneurysm."],
        ["timing", "Late vascular complication", "It develops after the sheath comes out."],
        ["exam", "Pulsatile groin mass, sometimes a bruit", "Blood flows in and out of the contained sac."]
      ], { x: ["hm-retroperitoneal-angio", "hm-avf-angio"] }),

    C("hm-avf-angio", "AV fistula", "Another late femoral complication.",
      "Continuous bruit or thrill at the groin after cath = AV fistula.", [
        ["exam", "Continuous bruit or thrill", "Flow runs from artery to vein all the time."],
        ["timing", "Late complication that shows up after the sheath is out", "Listed with pseudoaneurysm as a late complication."],
        ["cause", "Needle passes through both femoral artery and vein", "Both vessels are injured together."]
      ], { x: ["hm-pseudo-angio"] }),

    C("hm-contrast-allergy", "Contrast dye allergy", "Iodinated contrast reaction before a cath.",
      "Prior contrast reaction = prednisone 50 mg at 13, 7 and 1 h + diphenhydramine 50 mg 1 h before.", [
        ["tx", "Prednisone 50 mg at 13, 7 and 1 hour before, plus diphenhydramine 50 mg 1 hour before", "That is the slide's premedication protocol."],
        ["avoid", "Documented anaphylaxis to contrast is a relative contraindication", "It is on the relative contraindication list."],
        ["cause", "Iodine contrast agent", "Allergic reaction to the iodinated dye is a listed complication."]
      ]),

    C("hm-metformin-contrast", "Metformin before contrast", "A drug to hold around the cath.",
      "On metformin + cath = hold the day of and 48 hours after.", [
        ["tx", "Hold the day of the procedure and 48 hours after", "That timing is on the pre-op slide."],
        ["danger", "Contrast kidney injury can make metformin build up (lactic acidosis, standard teaching)", "Metformin is renally cleared."],
        ["buzz", "Also hold ACEi, ARB and diuretics the morning of; INR must be under 1.5", "These are the other pre-cath holds."]
      ]),

    C("hm-decompensated-ci", "Relative contraindications to cath", "When to hold off on a cath.",
      "Acute renal failure, active GI bleed, fever/infection, acute stroke, decompensated HF, digoxin toxicity = relative no.", [
        ["who", "Acute renal failure or active GI bleeding", "Contrast harms the kidneys and anticoagulation worsens bleeding."],
        ["who", "Decompensated HF or acute pulmonary edema", "The patient must be able to lie flat."],
        ["who", "Digitalis intoxication or severe electrolyte imbalance", "These raise the risk of arrhythmia during the cath."],
        ["who", "Aortic valve endocarditis", "Crossing an infected valve could dislodge vegetation."]
      ]),

    C("hm-rhc", "Right heart cath (Swan-Ganz)", "Direct pressure measurements on the right side.",
      "Shock of unknown volume status, severe cardiogenic shock or pulmonary HTN = right heart cath.", [
        ["who", "Shock with unknown volume status or severe cardiogenic shock", "Direct pressures sort out the shock type."],
        ["who", "Suspected or known pulmonary arterial hypertension", "RHC measures PA pressure directly."],
        ["test", "Measures CVP, PA pressure, wedge pressure, cardiac output and SvO2", "These are the direct measurements listed."]
      ]),

    C("hm-ccta-fit", "Good fit for coronary CTA", "Who should get a CCTA.",
      "Intermediate risk with an equivocal stress test, or a suspected coronary anomaly = CCTA (HR must be ≤70).", [
        ["who", "Intermediate risk with equivocal stress test results", "CCTA clarifies inconclusive stress tests."],
        ["buzz", "Negative predictive value 95-100%", "A normal CCTA essentially rules out significant CAD."],
        ["avoid", "Heart rate over 70, irregular rhythm, heavy calcification or prior stents", "These degrade the images."]
      ], { x: ["hm-cac"] }),

    C("hm-cac", "Coronary calcium score", "Plaque burden screening in asymptomatic people.",
      "CAC 0 = no disease, 1-99 mild, 100-399 moderate, >400 severe; measures burden, NOT stenosis.", [
        ["cutoff", "0 none, 1-99 mild, 100-399 moderate, over 400 severe", "That is the slide's interpretation scale."],
        ["who", "Asymptomatic low-intermediate or intermediate risk patients", "It refines risk when the treatment decision is unclear."],
        ["avoid", "Cannot measure the severity of a stenosis", "It counts calcium, not lumen narrowing."]
      ], { x: ["hm-ccta-fit"] })
  ], {
    access: ["hm-retroperitoneal-angio", "hm-pseudo-angio", "hm-avf-angio", "hm-contrast-allergy", "hm-metformin-contrast"],
    who: ["hm-angio-indicated", "hm-significant-stenosis", "hm-decompensated-ci", "hm-rhc", "hm-ccta-fit", "hm-cac"]
  });
}());
