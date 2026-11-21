/* Heart Failure (Brandell), slide by slide, 203 slides.
   Slide text: data/slide-text-heart-failure.js (generated). Pictures: images/hf-slides/.
   LO blocks follow slide order; big objectives are split into parts (LO 5a/5b, LO 10a/10b, LO 13a-c, stage treatment),
   and decompensated HF (slides 166-203, no objective of its own) gets its own blocks.
   Anything not on the slides is marked "(standard teaching)". Question ids "heart-failure|s<slide>|<i>", "heart-failure|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- LO 1-3 */
  los.push({
    id: "lo1", label: "LO 1-3", title: "Heart failure defined: who gets it and how common",
    objective: "Recall basic definitions of heart failure. Recognize heart failure epidemiology, risk factors and population associations. Describe the impact of social determinants of health on the likelihood of developing heart failure.",
    slides: [
      S(1, "Title: Heart failure", {
        why: "<p>Heart failure (HF) is a syndrome: the heart can't move enough blood for the body's needs, or can only do it at high filling pressures. This deck goes from definitions and physiology to the body's compensations, the types of HF, the workup, treatment by stage, and the decompensated patient in the ED.</p>"
      }),
      S(2, "Outline", {
        why: "<p>The road map: <b>definition</b> → <b>physiology</b> → <b>5 compensatory mechanisms</b> (SNS, RAAS, ADH, natriuretic peptides, remodeling) → <b>classification</b> (systolic vs diastolic, right vs left, HFrEF vs HFpEF) → <b>evaluation</b> → <b>diagnosis and staging</b> → <b>treatment</b> → <b>decompensated HF</b>.</p>"
      }),
      S(3, "Section: Heart failure defined", {
        why: "<p>Section title. Next: how common HF is, who gets it, and what it costs.</p>"
      }),
      S(4, "Prevalence and incidence", {
        why: "<p>HF is growing because people live longer and survive heart events. <b>Incidence rises with age</b>. About <b>5.8 million</b> in the US, projected up <b>46%</b> (2012-2030) to over 8 million; about <b>870,000 new cases a year</b>. Split: <b>HFrEF 45%, HFpEF 55%</b>.</p>",
        q: [
          Q("About how many people in the US have heart failure?", "About 5.8 million", ["About 58,000", "About 58 million", "About 580,000"], "The deck puts US prevalence around 5.8 million patients."),
          Q("Which is more common, HFrEF or HFpEF?", "HFpEF (55%)", ["HFrEF (55%)", "They are exactly equal", "HFrEF (90%)"], "The split is HFrEF 45% and HFpEF 55%."),
          Q("How many new heart failure cases are there each year in the US?", "About 870,000", ["About 8,700", "About 8.7 million", "About 87,000"], "There are an estimated 870,000 new HF cases annually.")
        ]
      }),
      S(5, "Lifetime risk and precursors", {
        why: "<p>Lifetime risk is <b>as high in women as men</b>: about <b>1 in 5</b> people will develop HF. Over <b>75%</b> have <b>HTN or CAD</b> first. <b>CAD-related HF is the most common presentation in men</b>; <b>HTN-related HF is the most common in women</b>. So preventing and controlling those two diseases prevents HF.</p>",
        q: [
          Q("What fraction of people will eventually develop heart failure?", "About 1 in 5", ["About 1 in 50", "About 1 in 2", "About 1 in 100"], "Approximately one fifth of the population will develop HF."),
          Q("Which precursor is the most common presentation of HF in men?", "Coronary artery disease", ["Hypertension", "Valve disease", "Alcohol"], "HF associated with CAD is the most common presentation in men."),
          Q("Which precursor is the most common presentation of HF in women?", "Hypertension", ["CAD", "Myocarditis", "Anemia"], "HF associated with HTN is the most common presentation in women.")
        ]
      }),
      S(6, "Risk by ethnicity", {
        why: "<p>Highest to lowest risk: <b>Black or African American</b>, then <b>Hispanic/Latino</b>, then Caucasian, then Asian. The higher risk likely reflects different rates of <b>HTN and diabetes</b>, which tie to social determinants of health such as access to care (standard teaching for the link).</p>",
        q: [
          Q("Which group has the highest risk of developing heart failure?", "Black or African American patients", ["Asian patients", "Caucasian patients", "Hispanic patients"], "The deck ranks Black or African American patients highest."),
          Q("What likely explains the ethnic differences in HF risk?", "Different rates of hypertension and diabetes", ["Different blood types", "Different heart sizes at birth", "Different eye color genes"], "The slide credits differences in HTN and DM prevalence."),
          Q("Which group has the lowest HF risk on the ethnicity list?", "Asian patients", ["Hispanic patients", "Black patients", "Caucasian patients"], "Asians are last on the deck's ranked list.")
        ]
      }),
      S(7, "Mortality and hospitalization", {
        why: "<p>Survival has improved, but <b>5-year mortality is still close to 60%</b>. Over <b>250,000 deaths a year</b>. HF is a leading cause of hospitalization: over <b>1 million hospitalizations a year</b>.</p>",
        q: [
          Q("What is the 5-year mortality after a heart failure diagnosis?", "Close to 60%", ["About 5%", "About 20%", "About 95%"], "Five-year mortality is still close to 60%."),
          Q("About how many US hospitalizations a year are for heart failure?", "Over one million", ["About 10,000", "About 100,000", "Over 50 million"], "HF causes over one million hospitalizations a year.")
        ]
      }),
      S(8, "Cost and readmissions", {
        why: "<p><b>85%</b> of HF patients are hospitalized at least once; <b>40%</b> at least four times. Over 12 million office visits and about $30.7 billion a year. HF is the <b>#1 Medicare expenditure</b>, projected to rise about 127% to $70 billion by 2030.</p>",
        q: [
          Q("What percent of HF patients will be hospitalized at least once?", "85%", ["15%", "40%", "100%"], "85% of HF patients are hospitalized at least once."),
          Q("What percent of HF patients will be hospitalized at least four times?", "40%", ["4%", "85%", "10%"], "40% will be hospitalized at least four times."),
          Q("What is heart failure's rank among Medicare expenditures?", "Number one", ["Tenth", "Not on the list", "Fiftieth"], "HF is the number one health expenditure for Medicare.")
        ]
      }),
      S(9, "Risk factors for heart failure", {
        why: "<p>Risk factors: <b>CAD, especially MI</b> (ischemic cardiomyopathy), <b>LVH</b>, cardiomyopathies, <b>smoking</b>, <b>hypertension</b>, <b>obesity</b>, <b>diabetes</b> and <b>valve disease</b>. Each one either kills muscle, stiffens it, or loads it with pressure or volume.</p>",
        q: [
          Q("What is HF from an MI called?", "Ischemic cardiomyopathy", ["Restrictive cardiomyopathy", "Takotsubo", "Peripartum cardiomyopathy"], "CAD, particularly MI, causes ischemic cardiomyopathy."),
          Q("Which of these is on the deck's HF risk factor list?", "Obesity", ["Hypothyroidism only", "Asthma", "Migraine"], "Obesity is listed with smoking, HTN, DM, valve disease, LVH and CAD."),
          Q("Which metabolic disease is an HF risk factor on the slide?", "Diabetes", ["Gout", "Hypothyroidism", "Osteoporosis"], "Diabetes is on the risk factor list.")
        ]
      })
    ],
    review: [
      Q("A 70-year-old Black woman with long-standing hypertension and diabetes asks about her HF risk. What do you tell her?", "Her ethnicity, HTN and DM all raise her risk", ["Women have half the risk of men", "Only CAD causes HF", "Her risk is lower than average"], "Black patients have the highest risk, and HTN and DM are major precursors."),
      Q("What percent of HF patients had HTN or CAD first?", "Over 75%", ["About 10%", "About 25%", "Under 5%"], "Over 75% of HF patients have HTN or CAD as precursors."),
      Q("Why is HF prevalence rising?", "An aging population and better survival of heart events", ["More viral infections", "Less salt in the diet", "Fewer people with diabetes"], "People live longer and survive cardiac events, so more live to develop HF."),
      Q("Why does preventing HTN and CAD matter so much for heart failure?", "They are the precursors in most HF patients", ["They are rare causes", "They only matter in children", "They cure HF once present"], "Over 75% of HF patients had HTN or CAD, so controlling them prevents most HF.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4 */
  los.push({
    id: "lo4", label: "LO 4", title: "Cardiac physiology: output, preload, afterload, Starling",
    objective: "Describe the pathophysiology of heart failure: systolic vs diastolic dysfunction, cardiac output and reserve, EDV, preload, stroke volume, Frank-Starling, and the cardiac output model (HR x SV with SNS, PNS, contractility, preload and afterload).",
    slides: [
      S(10, "Section: Cardiac physiology and pathophysiology", {
        why: "<p>Section title. To understand failure, first nail down how the normal pump works.</p>"
      }),
      S(11, "The heart between two circuits", {
        pic: "<p>A cartoon heart with a blue arrow coming in (from the veins) and a red arrow going out (to the arteries), with lungs above and liver, muscle and kidneys below.</p>",
        why: "<p>The heart sits between the <b>veins</b> (blue, coming in) and the <b>arteries</b> (red, going out), feeding the lungs, liver, muscles and kidneys. Heart failure is what happens when that flow backs up behind the heart (congestion) or falls short in front of it (low output). The deck reuses this picture for every drug class.</p>"
      }),
      S(12, "Normal function of the heart", {
        pic: "<p>A diagram of the pulmonary circuit (blue to red through the lungs) and the systemic circuit (red to blue through the body).</p>",
        why: "<p>Two jobs in series: the <b>right heart</b> pumps <b>deoxygenated</b> venous blood into the lungs, and the <b>left heart</b> pumps <b>oxygenated</b> blood from the lungs into the arteries.</p>",
        q: [
          Q("Which side of the heart pumps deoxygenated blood into the pulmonary circulation?", "The right heart", ["The left heart", "Both atria only", "The aorta"], "The right heart moves venous blood into the lungs."),
          Q("Where does the left heart send oxygenated blood?", "Into the systemic arterial circulation", ["Into the lungs", "Into the vena cava", "Into the right atrium"], "The left heart moves oxygenated blood into the arteries.")
        ]
      }),
      S(13, "Systolic vs diastolic dysfunction", {
        pic: "<p>Two cut-away hearts labeled systole (pumping) and diastole (filling).</p>",
        why: "<p><b>Systolic dysfunction</b> = ↓ contractility → can't <b>pump</b> blood out. <b>Diastolic dysfunction</b> = abnormal <b>relaxation</b> → can't <b>fill</b>. Squeeze problem vs fill problem.</p>",
        q: [
          Q("What is systolic dysfunction?", "Decreased contractility that impairs pumping", ["Abnormal relaxation that impairs filling", "A fast heart rate", "A leaky valve only"], "Systolic dysfunction is a squeeze problem: less contractility, less ejection."),
          Q("What is diastolic dysfunction?", "Abnormal relaxation that impairs filling", ["Decreased contractility", "Low blood pressure", "An arrhythmia"], "Diastolic dysfunction is a fill problem: the ventricle doesn't relax.")
        ]
      }),
      S(14, "Cardiac output and cardiac reserve", {
        why: "<p><b>Cardiac output</b> = blood ejected per minute, adjusted to need: <b>↓ when sleeping</b>, <b>↑ with exercise</b>. The ability to raise output when needed is <b>cardiac reserve</b>. Early HF eats the reserve first, so symptoms show with exertion before rest.</p>",
        q: [
          Q("What is cardiac reserve?", "The ability to increase cardiac output when needed", ["Blood stored in the spleen", "The resting heart rate", "The ejection fraction at rest"], "Cardiac reserve is the capacity to raise output on demand."),
          Q("What happens to cardiac output during sleep?", "It decreases", ["It increases", "It stops", "It doubles"], "Output falls during sleep because the body needs less.")
        ]
      }),
      S(15, "EDV, preload and stroke volume", {
        pic: "<p>A cut-away heart showing blood flow through the chambers and valves.</p>",
        why: "<p><b>EDV</b>: blood in the ventricle at the end of diastole, just before it contracts. <b>Preload</b>: the end-diastolic <b>pressure on the walls</b> caused by that EDV (the stretch). <b>Stroke volume</b>: blood ejected per beat.</p>",
        q: [
          Q("What is end-diastolic volume?", "Blood in the ventricle just before contraction", ["Blood ejected per beat", "Blood left after contraction", "Blood in the aorta"], "EDV is the ventricle's volume at the end of filling."),
          Q("How does the deck define preload?", "End-diastolic pressure on the ventricle walls caused by the EDV", ["The force needed to open the aortic valve", "The heart rate", "Blood ejected per minute"], "Preload is the wall pressure (stretch) created by the end-diastolic volume."),
          Q("What is stroke volume?", "Blood ejected by the ventricle per heartbeat", ["Blood ejected per minute", "Blood in the atria", "Blood returning per minute"], "Stroke volume is the volume ejected each beat.")
        ]
      }),
      S(16, "Frank-Starling mechanism", {
        pic: "<p>A Frank-Starling curve: stroke volume (tension) on the y axis rising with end-diastolic volume (length) on the x axis, then flattening; an example point at EDV 120 mL gives SV 70 mL.</p>",
        why: "<p>More filling → more stretch → <b>stronger contraction</b> → higher stroke volume, all else equal. The curve <b>flattens at the top</b>: past a point, more volume no longer helps (the failing heart lives there, standard teaching).</p>",
        q: [
          Q("What does the Frank-Starling mechanism say?", "Stroke volume rises as ventricular filling rises", ["Heart rate rises as BP falls", "Afterload rises as preload falls", "EF is fixed"], "More end-diastolic volume stretches the muscle and increases stroke volume."),
          Q("On the slide's Starling curve, what stroke volume matches an EDV of 120 mL?", "70 mL", ["120 mL", "20 mL", "200 mL"], "The example point shows EDV 120 mL giving SV 70 mL."),
          Q("What happens at the top of the Starling curve?", "It flattens, so more filling adds little", ["It rises forever", "It drops to zero instantly", "Heart rate takes over"], "The curve plateaus, so extra preload stops helping (standard teaching).")
        ]
      }),
      S(17, "Cardiac output = HR x SV", {
        pic: "<p>A flow diagram: sympathetic (+) and parasympathetic (−) act on heart rate; contractility (+), preload (+) and afterload (−) act on stroke volume; heart rate × stroke volume = cardiac output.</p>",
        why: "<p><b>CO = HR × SV</b>. <b>Sympathetic ↑ HR</b>, <b>parasympathetic ↓ HR</b>. SV depends on <b>preload (+)</b>, <b>contractility (+)</b> and <b>afterload (−)</b>. Every HF drug pulls one of these levers.</p>",
        q: [
          Q("What is the cardiac output formula?", "Heart rate × stroke volume", ["Heart rate + blood pressure", "Stroke volume ÷ EF", "Preload × afterload"], "Cardiac output equals HR times SV."),
          Q("Which three factors set stroke volume?", "Preload, afterload and contractility", ["Heart rate, BP and O2", "Sodium, potassium and calcium", "EF, BNP and troponin"], "Stroke volume is a function of preload, afterload and contractility."),
          Q("Which lever on the cardiac output diagram has an inverse effect on stroke volume?", "Afterload", ["Preload", "Contractility", "Sympathetic tone"], "Higher afterload lowers stroke volume.")
        ]
      }),
      S(18, "Afterload and contractility", {
        why: "<p><b>Afterload</b>: the force the heart must generate to eject blood; set by <b>systemic vascular resistance</b> and <b>ventricular wall tension</b>. <b>Contractility (inotropy)</b>: the muscle's own contractile performance.</p>",
        q: [
          Q("What controls afterload?", "Systemic vascular resistance and ventricular wall tension", ["Heart rate and PR interval", "Venous return only", "Blood glucose"], "The slide names SVR and wall tension."),
          Q("What is another word for myocardial contractility?", "Inotropy", ["Chronotropy", "Dromotropy", "Lusitropy"], "Contractility is called inotropy.")
        ]
      })
    ],
    review: [
      Q("A drug lowers systemic vascular resistance. What happens to stroke volume, all else equal?", "It rises", ["It falls", "It stays exactly the same", "It drops to zero"], "Lower afterload lets the ventricle eject more each beat."),
      Q("Vagal stimulation slows the heart while stroke volume stays the same. What happens to cardiac output?", "It falls", ["It rises", "It is unchanged", "It doubles"], "CO equals HR × SV, so a lower HR lowers CO."),
      Q("A patient gets 1 L of IV fluid and his stroke volume rises. Which mechanism explains it?", "Frank-Starling", ["Bainbridge reflex only", "Chronotropic incompetence", "Afterload reduction"], "More filling stretches the ventricle and raises stroke volume."),
      Q("Which change makes it harder for the heart to eject: vasoconstriction or vasodilation?", "Vasoconstriction", ["Vasodilation", "Neither", "Both equally"], "Vasoconstriction raises SVR, which raises afterload.")
    ]
  });

  /* ---------------------------------------------------------------- LO 5a */
  los.push({
    id: "lo5a", label: "LO 5a", title: "Compensation: sympathetic nervous system and RAAS",
    objective: "Compare and contrast the compensatory mechanisms: what turns them on, what they do, how they interact, their benefits and downsides (SNS, RAAS).",
    slides: [
      S(19, "Section: Compensatory mechanisms", {
        pic: "<p>The cartoon heart between the blue venous arrow and red arterial arrow, with lungs, liver, muscle and kidneys.</p>",
        why: "<p>Section title. When output drops, the body fights back. Each fix helps today and hurts later.</p>"
      }),
      S(20, "Compensatory mechanisms overview", {
        why: "<p>Cardiac reserve is kept up by compensations, so <b>early drops in function can go unnoticed</b>. The same mechanisms that adapt also <b>drive the pathophysiology of HF</b>. Five: <b>SNS</b>, <b>RAAS</b>, <b>ADH</b>, <b>natriuretic peptides</b>, <b>hypertrophy and remodeling</b>.</p>",
        q: [
          Q("Why can early drops in cardiac function go unnoticed?", "Compensatory mechanisms maintain cardiac reserve", ["The EF always stays normal", "Symptoms start only after death", "The kidneys stop working"], "Compensations hide early losses of function."),
          Q("Which is NOT one of the five HF compensatory mechanisms?", "Insulin release", ["RAAS", "ADH", "Natriuretic peptides"], "The five are SNS, RAAS, ADH, natriuretic peptides and remodeling.")
        ]
      }),
      S(21, "How the compensations raise output", {
        pic: "<p>A flowchart: heart failure triggers (1) a baroreceptor response in the brain → SNS activation → ↑ heart rate, ↑ contractility; (2) RAAS activation from decreased GFR in the kidney → fluid retention → ↑ preload; (3) ↑ ventricular wall tension in the heart → myocyte growth → hypertrophy. All three arrows end at ↑ cardiac output.</p>",
        why: "<p>Three arms, one goal (<b>↑ cardiac output</b>): the <b>brain</b> (baroreceptors → SNS → ↑ HR and contractility), the <b>kidney</b> (↓ GFR → RAAS → fluid retention → ↑ preload) and the <b>heart</b> itself (↑ wall tension → myocyte growth → hypertrophy).</p>",
        q: [
          Q("In the compensation flowchart, what does the kidney's RAAS arm raise?", "Preload, through fluid retention", ["Heart rate directly", "Afterload only", "EF directly"], "RAAS retains fluid, which increases preload."),
          Q("In the compensation flowchart, what triggers myocyte growth?", "Increased ventricular wall tension", ["Low potassium", "High BNP", "Parasympathetic tone"], "Wall tension drives myocyte growth and hypertrophy.")
        ]
      }),
      S(22, "1. Sympathetic nervous system activity", {
        pic: "<p>The brain part of the flowchart: baroreceptor response → SNS activation → ↑ heart rate, ↑ contractility.</p>",
        why: "<p>Low output → baroreceptors → SNS releases <b>norepinephrine and epinephrine</b> → ↑ <b>contractility</b> and ↑ <b>heart rate</b> → ↑ cardiac output.</p>",
        q: [
          Q("Which hormones does the SNS release in response to low cardiac output?", "Norepinephrine and epinephrine", ["Insulin and glucagon", "ANP and BNP", "Cortisol and ADH"], "The SNS releases NE and epinephrine."),
          Q("Which two things does SNS activation increase to raise cardiac output?", "Contractility and heart rate", ["Preload and EF", "Sodium excretion and GFR", "Wall thickness and fibrosis"], "SNS raises contractility and HR.")
        ]
      }),
      S(23, "SNS downsides", {
        why: "<p>The <b>most immediate</b> compensation. Downsides: β stimulation → <b>tachycardia</b>, <b>vasoconstriction</b>, <b>arrhythmias</b>. Tachycardia ↑ O₂ demand → ischemia, myocyte damage, ↓ inotropy. Vasoconstriction ↑ SVR (<b>afterload</b>) → lower output and <b>less kidney flow</b>. Over time both worsen HF.</p>",
        q: [
          Q("Which compensatory mechanism is the most immediate?", "Sympathetic nervous system activity", ["Remodeling", "RAAS", "Natriuretic peptides"], "The SNS kicks in first."),
          Q("How does chronic SNS-driven tachycardia hurt the failing heart?", "It raises O2 demand, causing ischemia and less inotropy", ["It lowers O2 demand", "It improves filling time", "It lowers afterload"], "Tachycardia raises demand, leading to ischemia and myocyte damage."),
          Q("What does SNS vasoconstriction do to afterload?", "Raises it", ["Lowers it", "No effect", "Eliminates it"], "Vasoconstriction increases systemic vascular resistance, which is afterload.")
        ]
      }),
      S(24, "2. Renin-angiotensin-aldosterone mechanism", {
        why: "<p>Pressure sensors in the kidney's <b>afferent arterioles</b> detect less flow and turn on <b>RAAS</b> (angiotensin II and aldosterone). Result: <b>blood volume rises</b>.</p>",
        q: [
          Q("Where are the pressure-sensitive receptors that trigger RAAS?", "The kidney's afferent arterioles", ["The carotid sinus only", "The left atrium", "The hypothalamus"], "Afferent arteriole receptors sense low renal flow."),
          Q("Which two RAAS hormones does the slide name?", "Angiotensin II and aldosterone", ["ANP and BNP", "Renin and insulin", "ADH and cortisol"], "RAAS acts through angiotensin II and aldosterone.")
        ]
      }),
      S(25, "RAAS in summary", {
        why: "<p>Low output → ↓ <b>renal blood flow</b> → <b>sodium and water retention</b> plus <b>vasoconstriction</b>. Initially good: more fluid → ↑ preload → ↑ stroke volume (Frank-Starling).</p>",
        q: [
          Q("What starts RAAS activation in heart failure?", "Decreased renal blood flow from low cardiac output", ["High potassium", "High BNP", "Low heart rate"], "The low output of HF lowers kidney flow, which activates RAAS."),
          Q("Why is RAAS fluid retention helpful at first?", "More preload raises stroke volume by Frank-Starling", ["It lowers afterload", "It slows the heart", "It shrinks the ventricle"], "Early on, extra volume improves stroke volume.")
        ]
      }),
      S(26, "RAAS downsides: fluid and vasoconstriction", {
        why: "<p>More stretch also means ↑ <b>wall tension</b> and ↑ <b>O₂ consumption</b> → ischemia → ↓ inotropy. At that point extra preload <b>stops compensating and worsens HF</b>. Vasoconstriction ↑ afterload → ↓ output.</p>",
        q: [
          Q("When does RAAS-driven preload stop helping?", "When higher wall tension causes ischemia and lower inotropy", ["Never, it always helps", "As soon as the EF is normal", "Only after a transplant"], "Rising wall tension raises O2 use, and the extra preload becomes harmful."),
          Q("What does RAAS vasoconstriction do to cardiac output?", "Lowers it by raising afterload", ["Raises it by lowering afterload", "Nothing", "Doubles it"], "Increased afterload means lower cardiac output.")
        ]
      }),
      S(27, "Angiotensin II on the heart", {
        why: "<p>Angiotensin II also binds <b>cardiac</b> receptors → myocyte <b>hypertrophy</b>, <b>apoptosis</b> and <b>interstitial fibrosis</b> (fibroblasts, collagen). The stiffer ventricle fills poorly → <b>ventricular remodeling</b>. This is why ACEi/ARB slow remodeling (standard teaching link).</p>",
        q: [
          Q("What does angiotensin II do when it binds cardiac receptors?", "Causes hypertrophy, apoptosis and fibrosis", ["Causes vasodilation", "Lowers heart rate", "Increases natriuresis"], "Angiotensin II drives myocyte hypertrophy, apoptosis and fibrosis."),
          Q("How does angiotensin II-driven fibrosis affect the ventricle?", "It stiffens it and impairs filling", ["It makes it thinner and stronger", "It improves relaxation", "It lowers wall stress"], "Fibrosis increases passive stiffness and causes remodeling.")
        ]
      })
    ],
    review: [
      Q("A patient's cardiac output falls. Which compensation starts within seconds?", "Sympathetic activation", ["Remodeling", "Fibrosis", "Natriuretic peptide failure"], "The SNS is the most immediate compensation."),
      Q("Which two compensations both cause vasoconstriction that raises afterload?", "SNS and RAAS", ["ANP and BNP", "ADH V2 and natriuretic peptides", "PNS and BNP"], "SNS and RAAS both constrict vessels and raise afterload."),
      Q("Why do compensations help early but hurt late?", "They raise output now but increase O2 demand, afterload and remodeling over time", ["They only work in children", "They lower BP too much", "They are switched off after a week"], "Each mechanism trades long-term damage for short-term output."),
      Q("SNS vasoconstriction lowers kidney flow. Which second compensation does that switch on?", "RAAS", ["Natriuretic peptides", "Parasympathetic activation", "Insulin release"], "Less renal flow activates RAAS, so the two mechanisms feed each other.")
    ]
  });

  /* ---------------------------------------------------------------- LO 5b */
  los.push({
    id: "lo5b", label: "LO 5b", title: "Compensation: ADH, natriuretic peptides and remodeling",
    objective: "Compare and contrast the compensatory mechanisms (ADH, natriuretic peptides, remodeling).",
    slides: [
      S(28, "3. Antidiuretic hormone (ADH)", {
        why: "<p><b>ADH (arginine vasopressin)</b> is made in the <b>hypothalamus</b> and released in response to high <b>norepinephrine</b> and <b>angiotensin II</b>. So the SNS and RAAS switch on ADH.</p>",
        q: [
          Q("Where is ADH synthesized?", "The hypothalamus", ["The kidney", "The atria", "The adrenal cortex"], "ADH is synthesized in the hypothalamus."),
          Q("What two signals trigger ADH release in HF?", "High norepinephrine and angiotensin II", ["High ANP and BNP", "Low cortisol and insulin", "Low sodium only"], "Elevated NE and angiotensin II release ADH."),
          Q("What is another name for ADH?", "Arginine vasopressin", ["Aldosterone", "Atrial natriuretic peptide", "Angiotensin I"], "ADH is also called arginine vasopressin.")
        ]
      }),
      S(29, "ADH receptors: V1 and V2", {
        why: "<p><b>V1</b> (cardiac myocytes, vascular smooth muscle) → ↑ contraction and <b>vasoconstriction</b>. <b>V2</b> (renal <b>collecting ducts</b>) → <b>free water reabsorption</b>.</p>",
        q: [
          Q("Where are V2 receptors located?", "Renal collecting ducts", ["Cardiac myocytes", "Lung capillaries", "The brain stem"], "V2 receptors sit in the collecting ducts."),
          Q("What does V1 receptor stimulation cause?", "Increased contraction and vasoconstriction", ["Free water reabsorption", "Natriuresis", "Bradycardia"], "V1 receptors in myocytes and vessels raise contraction and constrict vessels."),
          Q("What does V2 receptor stimulation cause?", "Free water reabsorption", ["Vasoconstriction", "Sodium excretion", "Increased heart rate"], "V2 receptors make the collecting duct reabsorb free water.")
        ]
      }),
      S(30, "ADH downsides", {
        why: "<p>Long-term V1 effects → <b>hypertrophy and LV remodeling</b>. Long-term V2 free water retention → <b>vascular congestion</b> and <b>hyponatremia</b> (water without salt dilutes sodium).</p>",
        q: [
          Q("Which electrolyte problem comes from prolonged ADH free water retention?", "Hyponatremia", ["Hypernatremia", "Hyperkalemia", "Hypercalcemia"], "Retaining free water dilutes serum sodium."),
          Q("What does prolonged V1 stimulation do to the heart?", "Causes hypertrophy and LV remodeling", ["Shrinks the ventricle", "Improves relaxation", "Lowers afterload"], "Chronic contraction and vasoconstriction drive hypertrophy and remodeling.")
        ]
      }),
      S(31, "4. Natriuretic peptides", {
        why: "<p>The heart makes its own <b>diuretic, natriuretic, vasodilating</b> hormones. Two matter in HF: <b>ANP</b> (from the <b>atria</b>) and <b>BNP</b> (from the <b>ventricles</b>). They're the compensation that <b>fights the downsides of the others</b>.</p>",
        q: [
          Q("Which chamber secretes BNP?", "The ventricles", ["The atria", "The brain only", "The kidney"], "BNP is secreted by the ventricles despite its name."),
          Q("Which chamber secretes ANP?", "The atria", ["The ventricles", "The liver", "The adrenal gland"], "ANP is atrial natriuretic peptide."),
          Q("Which compensatory mechanism fights the downsides of the others?", "Natriuretic peptides", ["RAAS", "ADH", "SNS"], "NPs cause diuresis and vasodilation, opposing SNS, RAAS and ADH.")
        ]
      }),
      S(32, "What natriuretic peptides do", {
        why: "<p>Triggered by <b>chamber stretch and pressure</b>. They cause quick <b>natriuresis and diuresis</b> (↑ GFR, ↓ tubular Na and water reabsorption), inhibit <b>SNS, RAAS, endothelin, cytokines and vasopressin</b>, <b>vasodilate</b> and lower pulmonary pressures. Eventually <b>RAAS and SNS overpower them</b>.</p>",
        q: [
          Q("What triggers natriuretic peptide release?", "Increased chamber stretch and pressure", ["Low heart rate", "High glucose", "Low sodium intake"], "NPs respond to stretch and pressure in the chambers."),
          Q("How do natriuretic peptides cause diuresis?", "They raise GFR and block tubular sodium and water reabsorption", ["They block ADH release only", "They raise aldosterone", "They constrict the afferent arteriole"], "NPs increase GFR and inhibit tubular reabsorption."),
          Q("What eventually overpowers the natriuretic peptides?", "RAAS and the adrenergic system", ["Insulin", "The parasympathetic system", "Thyroid hormone"], "RAAS and SNS eventually overcome NP effects.")
        ]
      }),
      S(33, "BNP and NT-proBNP in practice", {
        why: "<p><b>NT-proBNP</b> is a byproduct of BNP, detectable in early HF. BNP/proBNP <b>correlates with HF severity</b>. Many HF meds (<b>diuretics, ACEi</b>) lower BNP, so a <b>chronic HF patient can have a normal BNP</b>. Eventually NPs become ineffective despite high levels.</p>",
        q: [
          Q("What is NT-proBNP?", "A byproduct of BNP production", ["A form of troponin", "A kidney enzyme", "A clotting factor"], "NT-proBNP is released as a byproduct when BNP is made."),
          Q("Why can a chronic HF patient have a normal BNP?", "Diuretics and ACE inhibitors lower BNP", ["BNP is only made in children", "Chronic HF never raises BNP", "BNP is destroyed by statins"], "HF medications lower BNP, so a normal value doesn't exclude HF."),
          Q("What does BNP level correlate with?", "Heart failure severity", ["Cholesterol level", "Thyroid function", "Platelet count"], "Higher BNP tracks with more severe HF.")
        ]
      }),
      S(34, "5. Remodeling", {
        why: "<p>Comorbidities, risk factors and the other compensations all <b>remodel</b> the muscle. Remodeling alters mechanics, disturbs the electrical system (<b>arrhythmias</b>) and raises <b>ischemia</b> risk over time.</p>",
        q: [
          Q("Which electrical problem does remodeling promote?", "Arrhythmias", ["Normal sinus rhythm", "Shorter QT only", "Faster AV conduction only"], "Remodeling alters the electrical system, causing arrhythmias."),
          Q("What drives cardiac remodeling?", "Comorbidities, risk factors and compensatory mechanisms", ["Only genetics", "Only infections", "Only exercise"], "The slide credits comorbidities, risk factors and compensations.")
        ]
      })
    ],
    review: [
      Q("An HF patient's sodium is 128. Which compensation most likely caused it?", "ADH free water retention", ["Natriuretic peptides", "SNS tachycardia", "Remodeling"], "V2-mediated free water retention dilutes sodium."),
      Q("Which compensation opposes SNS, RAAS and ADH?", "Natriuretic peptides", ["Remodeling", "Vasopressin V1 effects", "Angiotensin II"], "ANP and BNP cause natriuresis and vasodilation and inhibit the others."),
      Q("Which two compensations lead to ADH release?", "SNS (norepinephrine) and RAAS (angiotensin II)", ["ANP and BNP", "PNS and insulin", "Remodeling and ANP"], "Norepinephrine and angiotensin II trigger ADH release, so the mechanisms chain together."),
      Q("Which three compensations all end up causing hypertrophy or remodeling?", "RAAS (angiotensin II), ADH (V1) and SNS", ["Only natriuretic peptides", "Only ANP", "None of them"], "Angiotensin II, chronic V1 stimulation and SNS stress all remodel the heart.")
    ]
  });

  /* ---------------------------------------------------------------- LO 6 */
  los.push({
    id: "lo6", label: "LO 6", title: "Systolic vs diastolic dysfunction",
    objective: "Describe the underlying pathophysiology of systolic vs diastolic dysfunction and its effect on the ejection fraction and cardiac output.",
    slides: [
      S(35, "Section: Heart failure classification", {
        why: "<p>Section title. Three ways to sort HF: <b>systolic vs diastolic</b>, <b>right vs left</b>, and <b>HFrEF vs HFpEF</b>.</p>"
      }),
      S(36, "Section: Systolic vs diastolic dysfunction", {
        why: "<p>Section title: squeeze problem vs fill problem.</p>"
      }),
      S(37, "Ejection fraction and the two dysfunctions", {
        pic: "<p>A cut-away heart showing blood flow through the four chambers.</p>",
        why: "<p><b>EF</b> = % of blood pumped out per beat; <b>normal 55-70%</b>. <b>Systolic</b>: impaired contractility → <b>↓ EF and ↓ CO</b>. <b>Diastolic</b>: impaired relaxation → ↓ filling (EDV/preload) → <b>↓ CO but normal EF</b>.</p>",
        q: [
          Q("What is a normal ejection fraction?", "55-70%", ["20-30%", "35-45%", "80-95%"], "The deck gives normal EF as 55-70%."),
          Q("In diastolic dysfunction, what happens to the EF?", "It stays normal", ["It drops below 40%", "It rises above 90%", "It cannot be measured"], "Diastolic dysfunction lowers CO through filling, with a normal EF."),
          Q("In systolic dysfunction, what happens to EF and CO?", "Both fall", ["EF falls, CO rises", "Both rise", "EF normal, CO falls"], "Impaired contractility lowers both EF and CO.")
        ]
      }),
      S(38, "Normal heart", {
        pic: "<p>The cartoon heart labeled \"Normal heart\" with full-size blue (in) and red (out) arrows.</p>",
        why: "<p>Normal: blood comes in, blood goes out, organs get what they need.</p>"
      }),
      S(39, "Systolic dysfunction picture", {
        pic: "<p>The cartoon heart labeled \"Systolic dysfunction\": the red outflow arrow is weak while blood still arrives.</p>",
        why: "<p>Systolic dysfunction: the outflow is weak. Blood arrives but isn't pushed out, so it <b>backs up</b> and the organs get less.</p>"
      }),
      S(40, "Diastolic dysfunction picture", {
        pic: "<p>The cartoon heart labeled \"Diastolic dysfunction\": the blue inflow is limited because the ventricle won't fill.</p>",
        why: "<p>Diastolic dysfunction: the problem is <b>getting blood in</b>. What gets in is pumped out well (normal EF), but there's less of it.</p>"
      }),
      S(41, "Systolic dysfunction over time", {
        pic: "<p>A cut-away heart showing blood flow through the chambers.</p>",
        why: "<p>Contractility falls → <b>EF falls over time</b>. At first more preload and HR prop up stroke volume, but only for so long. As EF drops, <b>EDV/preload rises</b> → <b>dilation</b> and ↑ wall tension → even more preload. A vicious circle.</p>",
        q: [
          Q("In systolic dysfunction, what initially keeps stroke volume up?", "Increased preload and heart rate", ["A higher EF", "Lower blood volume", "Bradycardia"], "Compensations like more preload and HR make up for the falling EF at first."),
          Q("As the EF drops, what happens to EDV?", "It rises, dilating the ventricle", ["It falls", "It stays the same", "It goes to zero"], "Less ejection leaves more blood behind, so EDV and preload rise.")
        ]
      }),
      S(42, "Complications of rising preload", {
        pic: "<p>A chest X-ray with hazy lungs (pulmonary edema) and a drawing of a swollen foot with a pitting dent.</p>",
        why: "<p>Rising preload backs blood into the <b>atria and veins</b>: <b>pulmonary edema</b> (\"congestion\", <b>crackles/rales</b>) and <b>peripheral edema</b>.</p>",
        q: [
          Q("What lung sound does pulmonary congestion cause?", "Crackles (rales)", ["Stridor", "A pleural rub only", "Absent sounds everywhere"], "Pulmonary edema causes crackles, also called rales."),
          Q("What two kinds of edema come from rising preload in systolic dysfunction?", "Pulmonary and peripheral edema", ["Cerebral and retinal edema", "Angioedema and hives", "Lymphedema only"], "Backed-up blood causes pulmonary and peripheral edema.")
        ]
      }),
      S(43, "Causes of systolic dysfunction", {
        why: "<p><b>Impaired contraction</b>: ischemic heart disease, <b>dilated cardiomyopathy</b>, <b>myocarditis</b>. <b>Volume overload (↑ preload)</b>: <b>anemia</b>. <b>Pressure overload (↑ afterload)</b>: <b>hypertension</b>, <b>valve stenosis</b>.</p>",
        q: [
          Q("Which cause of systolic dysfunction works by volume overload?", "Anemia", ["Hypertension", "Aortic stenosis", "Myocarditis"], "Anemia is listed under volume overload (↑ preload)."),
          Q("Which causes of systolic dysfunction work by pressure overload?", "Hypertension and valve stenosis", ["Anemia and pregnancy", "Myocarditis and DCM", "Pericardial effusion"], "HTN and valvular stenosis raise afterload."),
          Q("Which inflammatory heart disease causes systolic dysfunction?", "Myocarditis", ["Pericarditis only", "Endocarditis of the tricuspid only", "Costochondritis"], "Myocarditis impairs contractile performance.")
        ]
      }),
      S(44, "Diastolic dysfunction", {
        why: "<p>Impaired <b>relaxation</b> plus a <b>stiffer wall</b> → abnormal filling. Cardiac output falls <b>not because of EF but because of less preload</b>. Exercise brings <b>fatigue of the legs and breathing muscles</b>.</p>",
        q: [
          Q("In diastolic dysfunction, why does cardiac output fall?", "Less preload from poor filling", ["A drop in EF", "Too much contractility", "Low heart rate only"], "Output falls because the ventricle can't fill, not because EF drops."),
          Q("Which exercise symptom does the deck tie to diastolic dysfunction?", "Fatigue of the legs and breathing muscles", ["Chest wall pain only", "Fever", "Headache"], "The slide lists fatigue of leg and accessory respiratory muscles.")
        ]
      }),
      S(45, "Heart rate and diastolic filling", {
        why: "<p>HR sets the <b>time available to fill</b>. <b>Faster HR shortens diastole</b>. So diastolic dysfunction is <b>worsened by tachycardia/arrhythmia</b> and <b>improved by lowering HR</b>.</p>",
        q: [
          Q("What does a faster heart rate do to diastolic filling time?", "Shortens it", ["Lengthens it", "No effect", "Doubles it"], "Higher heart rates cut diastole short."),
          Q("How can diastolic dysfunction be improved through heart rate?", "By lowering the heart rate", ["By raising the heart rate", "By adding an arrhythmia", "Heart rate has no effect"], "A slower rate gives the stiff ventricle more time to fill.")
        ]
      }),
      S(46, "Causes of diastolic dysfunction", {
        why: "<p><b>Impeded expansion</b>: pericardial effusion, constrictive pericarditis. <b>Thick wall/small chamber</b>: myocardial hypertrophy, <b>HCM</b>. <b>Delayed relaxation</b>: <b>aging</b>, <b>hypertension</b>, ischemic heart disease.</p>",
        q: [
          Q("Which pericardial problem causes diastolic dysfunction?", "Constrictive pericarditis", ["Pericardial rub without effusion", "Dressler syndrome history only", "A pericardial cyst"], "Constrictive pericarditis and effusion impede ventricular expansion."),
          Q("Which cardiomyopathy causes diastolic dysfunction from a thick wall?", "Hypertrophic cardiomyopathy", ["Dilated cardiomyopathy", "Takotsubo", "Peripartum cardiomyopathy"], "HCM thickens the wall and shrinks the chamber."),
          Q("Which normal process delays diastolic relaxation?", "Aging", ["Puberty", "Pregnancy only", "Sleep"], "Aging is listed as a cause of delayed relaxation.")
        ]
      })
    ],
    review: [
      Q("A 78-year-old hypertensive woman has dyspnea, EF 65% and a thick LV. Which dysfunction is it?", "Diastolic dysfunction", ["Systolic dysfunction", "No dysfunction", "Right ventricular infarct"], "Normal EF with a thick, stiff ventricle is diastolic dysfunction."),
      Q("A man with a large anterior MI now has EF 25%. Which dysfunction?", "Systolic dysfunction", ["Diastolic dysfunction", "Constrictive pericarditis", "High-output failure only"], "Ischemic damage to the muscle lowers contractility and EF."),
      Q("A patient with diastolic dysfunction develops AF at 140. Why does he get worse?", "The fast rate shortens filling time", ["AF raises EF", "AF lowers afterload", "AF lowers wall stiffness"], "Tachycardia cuts diastolic filling time in a stiff ventricle."),
      Q("Which dysfunction has a dilated ventricle and which has a thick one?", "Systolic dilated, diastolic thick", ["Systolic thick, diastolic dilated", "Both dilated", "Both thick"], "Systolic failure dilates as EDV rises, and diastolic failure thickens and stiffens.")
    ]
  });

  /* ---------------------------------------------------------------- LO 7 */
  los.push({
    id: "lo7", label: "LO 7", title: "Right vs left ventricular dysfunction",
    objective: "Describe the pathophysiology of right vs left ventricular dysfunction, the symptoms of each and their common causes.",
    slides: [
      S(47, "Section: Right vs left ventricular dysfunction", {
        why: "<p>Section title. Left failure backs up into the <b>lungs</b>; right failure backs up into the <b>body</b>.</p>"
      }),
      S(48, "Right vs left: usually both in the end", {
        pic: "<p>A tree diagram. Right heart failure → congestion of peripheral tissues → dependent edema and ascites, liver congestion (impaired liver function), GI tract congestion (anorexia, GI distress, weight loss). Left heart failure → decreased cardiac output (activity intolerance, decreased tissue perfusion) and pulmonary congestion (impaired gas exchange with cyanosis and hypoxia; pulmonary edema with cough and frothy sputum, orthopnea, PND).</p>",
        why: "<p>HF may <b>start</b> on one side, but <b>long term it usually involves both</b>. Right failure = congestion of the body (edema, ascites, liver, gut). Left failure = low output plus lung congestion.</p>",
        q: [
          Q("Long term, which side of the heart does heart failure usually involve?", "Both sides", ["Only the left", "Only the right", "Neither ventricle"], "HF that starts on one side usually involves both over time."),
          Q("In the tree diagram, which failure causes pulmonary congestion?", "Left heart failure", ["Right heart failure", "Neither", "Tricuspid regurgitation only"], "Left failure backs blood into the lungs.")
        ]
      }),
      S(49, "Right ventricular dysfunction", {
        pic: "<p>The right heart failure branch of the tree: congestion of peripheral tissues → dependent edema, ascites, liver and GI congestion.</p>",
        why: "<p>The RV can't move venous blood into the lungs → <b>less blood reaches the LV</b> → ↓ LV output, and blood <b>backs up into the systemic veins</b>.</p>",
        q: [
          Q("Where does blood back up in right ventricular failure?", "Into the systemic venous system", ["Into the lungs", "Into the aorta", "Into the coronary arteries"], "Right failure backs blood up into the body's veins."),
          Q("Why does right ventricular failure lower left ventricular output?", "Less blood reaches the lungs and left ventricle", ["The RV squeezes the LV", "It raises afterload", "It speeds the heart rate"], "If the RV can't pump forward, the LV gets less to pump.")
        ]
      }),
      S(50, "Symptoms of right ventricular dysfunction", {
        pic: "<p>A cartoon \"Right sided heart failure\" patient: fatigue, increased peripheral venous pressure, ascites, enlarged liver and spleen, distended jugular veins, anorexia and GI complaints, swelling in hands and fingers, dependent edema.</p>",
        why: "<p><b>JVD</b> (the starred sign), <b>dependent peripheral edema</b>, weight gain, <b>hepatomegaly with RUQ pain</b> (eventually liver failure), splenomegaly, <b>ascites</b>, <b>GI congestion</b> (abdominal pain, malabsorption, anorexia), and <b>anasarca</b>.</p>",
        q: [
          Q("Which sign is starred on the right heart failure symptom slide?", "Jugular venous distention", ["Crackles", "Frothy sputum", "Orthopnea"], "JVD is the starred sign of right ventricular dysfunction."),
          Q("Why does right heart failure cause RUQ pain?", "The congested liver stretches its capsule", ["Gallstones", "Kidney stones", "Pancreatitis"], "Hepatomegaly from congestion causes RUQ pain (standard teaching for the capsule)."),
          Q("Why can right heart failure cause anorexia and malabsorption?", "GI tract congestion", ["Pulmonary edema", "High cardiac output", "Low blood volume"], "A congested gut absorbs poorly and causes anorexia.")
        ]
      }),
      S(51, "Causes of right ventricular dysfunction", {
        why: "<p><b>Most common cause: left ventricular failure</b>. <b>Cor pulmonale</b> from sustained pulmonary HTN (chronic lung disease, severe pneumonia, PE, aortic or mitral stenosis). Tricuspid or pulmonic stenosis/regurgitation, <b>RV infarction</b>, cardiomyopathy, congenital defects (<b>tetralogy of Fallot, VSD</b>).</p>",
        q: [
          Q("What is the most common cause of right ventricular failure?", "Left ventricular failure", ["Pulmonary embolus", "Tetralogy of Fallot", "Tricuspid stenosis"], "Left failure is the most common cause of right failure."),
          Q("What is cor pulmonale?", "Right heart failure caused by sustained pulmonary hypertension", ["Left heart failure from MI", "A lung tumor", "An aortic aneurysm"], "Cor pulmonale is RV failure from lung-driven pulmonary HTN."),
          Q("Which congenital defects are listed as causes of right ventricular failure?", "Tetralogy of Fallot and VSD", ["Coarctation and bicuspid valve", "PDA and ASD only", "Marfan and Ehlers-Danlos"], "Tetralogy of Fallot and VSD are on the slide.")
        ]
      }),
      S(52, "Left ventricular dysfunction", {
        pic: "<p>The left heart failure branch: decreased cardiac output (activity intolerance) and pulmonary congestion (impaired gas exchange, pulmonary edema, orthopnea, PND).</p>",
        why: "<p>The LV can't push blood from the low-pressure lungs into the high-pressure arteries → <b>↓ systemic output</b>; blood piles up in the <b>LV, LA and pulmonary circulation</b> → ↑ <b>pulmonary venous pressure</b> → if high enough, fluid leaks into the lung interstitium = <b>pulmonary edema</b>.</p>",
        q: [
          Q("In left ventricular failure, which pressure rises and causes pulmonary edema?", "Pulmonary venous pressure", ["Central venous pressure only", "Portal pressure", "Intracranial pressure"], "Blood backs into the pulmonary veins until fluid leaks into the lungs."),
          Q("Where does blood accumulate in left ventricular failure?", "LV, LA and pulmonary circulation", ["Liver and spleen first", "Legs only", "The right atrium only"], "Left failure backs blood into the LA and lungs.")
        ]
      }),
      S(53, "Symptoms of left ventricular dysfunction", {
        pic: "<p>A cartoon \"Left sided heart failure\" patient: paroxysmal nocturnal dyspnea, elevated pulmonary capillary wedge pressure, cough, crackles, wheezes, blood-tinged sputum, restlessness, confusion, orthopnea, tachycardia, exertional dyspnea, cyanosis.</p>",
        why: "<p><b>Fatigue</b>, ↓ exercise capacity, <b>pulmonary edema</b> with rales and <b>frothy sputum</b>, <b>orthopnea and PND</b>, cyanosis, hypoxia, <b>confusion</b>/anxiety, <b>narrow pulse pressure</b> (normal is 40 mmHg), worsening renal function. Left HF can progress to right HF.</p>",
        q: [
          Q("What is a normal pulse pressure?", "40 mmHg", ["10 mmHg", "100 mmHg", "0 mmHg"], "The slide gives normal pulse pressure as 40 mmHg."),
          Q("What happens to pulse pressure in left ventricular failure?", "It narrows", ["It widens", "It is unchanged", "It becomes negative"], "Low stroke volume narrows the pulse pressure."),
          Q("Which sputum finding fits left heart failure?", "Frothy sputum", ["Rusty sputum only", "Green purulent sputum", "Black sputum"], "Pulmonary edema produces cough with frothy sputum.")
        ]
      }),
      S(54, "Causes of left ventricular dysfunction", {
        why: "<p><b>Most common causes: hypertension and acute MI</b>. Also aortic or mitral stenosis/regurgitation. As left failure and lung congestion worsen, it can produce <b>right heart failure</b>.</p>",
        q: [
          Q("What are the most common causes of left ventricular failure?", "Hypertension and acute MI", ["Pulmonary embolus and COPD", "Tetralogy of Fallot", "Tricuspid regurgitation"], "HTN and acute MI are the most common causes."),
          Q("Which valves' disease causes left ventricular failure?", "Aortic and mitral", ["Tricuspid and pulmonic", "Only the pulmonic", "No valves"], "Aortic or mitral stenosis or regurgitation are listed.")
        ]
      })
    ],
    review: [
      Q("A patient has JVD, ascites, hepatomegaly and leg edema but clear lungs. Which side is failing?", "Right", ["Left", "Neither", "Only the atria"], "Systemic venous congestion with clear lungs points to right failure."),
      Q("A patient has orthopnea, PND, crackles and frothy sputum. Which side is failing?", "Left", ["Right", "Neither", "Only the tricuspid valve"], "Pulmonary congestion points to left failure."),
      Q("A COPD patient develops JVD and leg edema. What is the likely cause?", "Cor pulmonale", ["Left ventricular MI", "Aortic stenosis", "Hypothyroidism"], "Chronic lung disease causes pulmonary HTN and right failure."),
      Q("Why does long-standing left heart failure eventually cause right heart failure?", "Pulmonary congestion raises the pressure the RV must pump against", ["The LV squeezes the RV", "The RV runs out of blood", "It does not"], "Back-pressure in the lungs loads the RV until it fails too.")
    ]
  });

  /* ---------------------------------------------------------------- LO 8 */
  los.push({
    id: "lo8", label: "LO 8", title: "HFrEF vs HFpEF",
    objective: "Compare and contrast HF with preserved versus reduced ejection fraction; decide which one a vignette shows.",
    slides: [
      S(55, "Section: HFrEF vs HFpEF", {
        why: "<p>Section title. Reduced EF vs preserved EF: the two names you'll use on every chart.</p>"
      }),
      S(56, "HFrEF", {
        why: "<p>Systolic dysfunction bad enough to show a <b>reduced EF on echo</b> = <b>HFrEF</b>. The remodeling is <b>eccentric</b> (elongated, dilated) and prone to <b>arrhythmias</b>.</p>",
        q: [
          Q("What remodeling shape goes with HFrEF?", "Eccentric (elongated, dilated)", ["Concentric (thick-walled)", "Normal shape", "Asymmetric septal only"], "HFrEF hearts remodel eccentrically."),
          Q("What makes a patient's systolic dysfunction count as HFrEF?", "A reduced ejection fraction on echo", ["A high BNP alone", "Leg swelling alone", "A normal EF with an S4"], "HFrEF is defined by a reduced EF on echo.")
        ]
      }),
      S(57, "HFpEF, not diastolic heart failure", {
        why: "<p>HFpEF used to be called <b>\"diastolic heart failure\"</b>, since many have abnormal diastolic function. But some HFpEF patients have <b>focal systolic dysfunction</b> despite a normal EF, so <b>HFpEF is the better term</b>.</p>",
        q: [
          Q("Why is 'HFpEF' a better term than 'diastolic heart failure'?", "Some HFpEF patients have focal systolic dysfunction despite a normal EF", ["HFpEF patients have no diastolic problem", "Diastolic HF is a different disease", "It is only a billing term"], "Not all HFpEF is purely diastolic, so the EF-based name is more accurate."),
          Q("What was HFpEF often called in the past?", "Diastolic heart failure", ["Systolic heart failure", "High-output failure", "Cor pulmonale"], "Clinicians used diastolic heart failure for HFpEF.")
        ]
      }),
      S(58, "HFpEF remodeling", {
        pic: "<p>Drawings of a normal ventricle beside an eccentric (large, dilated) and a concentric (thick-walled, small cavity) ventricle.</p>",
        why: "<p>HFpEF remodels <b>concentrically</b>: <b>↑ wall thickness</b>, <b>diffuse interstitial fibrosis</b>, <b>impaired active relaxation</b>.</p>",
        q: [
          Q("What remodeling shape goes with HFpEF?", "Concentric", ["Eccentric", "Aneurysmal", "Normal"], "Diastolic dysfunction causes concentric remodeling."),
          Q("Which three LV changes define HFpEF remodeling?", "Thicker walls, interstitial fibrosis, impaired relaxation", ["Thin walls, dilation, low EF", "Normal walls, no fibrosis", "Calcified valves only"], "The slide lists increased wall thickness, diffuse fibrosis and impaired relaxation.")
        ]
      }),
      S(59, "Chronotropic incompetence in HFpEF", {
        why: "<p><b>Chronotropic incompetence</b> = can't raise HR with exercise: a <b>key difference</b> between HFpEF and HFrEF. Advanced HFpEF has a very stiff LV that can't raise stroke volume either (restrictive cardiomyopathy, severe LVH, severe CAD). Result: <b>exercise intolerance</b>.</p>",
        q: [
          Q("What is chronotropic incompetence?", "Inability to raise heart rate with exercise", ["Inability to lower BP", "Inability to contract", "Too fast a resting rate"], "Chronotropic incompetence means the HR can't rise on demand."),
          Q("Which HF type features chronotropic incompetence?", "HFpEF", ["HFrEF", "High-output HF", "Neither"], "It is a key difference that marks HFpEF."),
          Q("What symptom does chronotropic incompetence cause in HFpEF?", "Exercise intolerance", ["Resting chest pain", "Hemoptysis", "Fever"], "Without a rising HR or SV, exercise tolerance falls.")
        ]
      })
    ],
    review: [
      Q("A 72-year-old woman with HTN and obesity has dyspnea on exertion, an S4 and EF 60%. HFrEF or HFpEF?", "HFpEF", ["HFrEF", "Neither, EF is normal", "Cor pulmonale only"], "Normal EF with a stiff, hypertensive heart and S4 is HFpEF."),
      Q("A 55-year-old man with a prior MI has an S3, a displaced PMI and EF 30%. HFrEF or HFpEF?", "HFrEF", ["HFpEF", "Normal heart", "Diastolic only"], "Low EF with a dilated heart and S3 is HFrEF."),
      Q("Which HF type is more common?", "HFpEF", ["HFrEF", "They are rare equally", "High-output HF"], "HFpEF is 55% of HF."),
      Q("Which HF type remodels eccentrically and is prone to arrhythmias?", "HFrEF", ["HFpEF", "Neither", "Both equally concentrically"], "HFrEF hearts dilate and are arrhythmia-prone.")
    ]
  });

  /* ---------------------------------------------------------------- symptoms */
  los.push({
    id: "sx", label: "LO 7-8", title: "Symptoms: dyspnea, fatigue, PND, orthopnea",
    objective: "Recognize the symptoms of heart failure and which type they point to.",
    slides: [
      S(60, "Section: Evaluation of patients with heart failure", {
        why: "<p>Section title. Symptoms first, then the exam.</p>"
      }),
      S(61, "Dyspnea and fatigue", {
        why: "<p>The most common symptom is <b>dyspnea</b>, with <b>general fatigue</b> from less oxygen delivery. Both can fly under the radar, so <b>ask about changes in functional capacity</b>.</p>",
        q: [
          Q("What is the most common symptom of heart failure?", "Dyspnea", ["Chest pain", "Syncope", "Palpitations"], "Dyspnea is the most common manifestation."),
          Q("How do you catch heart failure symptoms that fly under the radar?", "Ask about changes in functional capacity", ["Order a chest CT", "Check a lipid panel", "Wait for edema"], "Patients slow down without noticing, so ask what they can still do.")
        ]
      }),
      S(62, "Fatigue", {
        why: "<p>Fatigue likely comes from <b>low cardiac output</b>. It causes inactivity → <b>deconditioning</b> → more disability: a downward spiral.</p>",
        q: [
          Q("What is the likely mechanism of fatigue in heart failure?", "Decreased cardiac output", ["High cardiac output", "Low BNP", "Anemia only"], "The deck credits decreased cardiac output."),
          Q("Why does HF fatigue worsen over time?", "Inactivity causes deconditioning and more disability", ["Fatigue cures itself", "Exercise is harmful", "Muscles grow too large"], "Chronic fatigue leads to inactivity and deconditioning.")
        ]
      }),
      S(63, "Exercise intolerance in HFpEF", {
        why: "<p><b>Exercise intolerance</b> is one of the <b>main and most debilitating symptoms of HFpEF</b>, mainly from diastolic dysfunction and <b>short filling times</b>.</p>",
        q: [
          Q("Which HF type has exercise intolerance as a main, debilitating symptom?", "HFpEF", ["HFrEF", "Neither", "Only right HF"], "Exercise intolerance is a main symptom of HFpEF."),
          Q("What causes exercise intolerance in HFpEF?", "Diastolic dysfunction and shortened filling times", ["A low EF", "Valve leaks", "Low hemoglobin only"], "A stiff ventricle can't fill in the short diastole of exercise.")
        ]
      }),
      S(64, "Paroxysmal nocturnal dyspnea", {
        why: "<p><b>PND</b>: after lying flat a while, the patient wakes <b>suddenly choking with air hunger</b> and sits up for relief. It usually <b>precedes orthopnea</b>. Cause: interstitial fluid from below the diaphragm <b>moves back into the circulation</b> when supine → ↑ pulmonary venous pressure.</p>",
        q: [
          Q("Which comes first, PND or orthopnea?", "PND usually precedes orthopnea", ["Orthopnea always comes first", "They never occur together", "They happen only in right HF"], "The deck says PND usually precedes orthopnea."),
          Q("What causes paroxysmal nocturnal dyspnea?", "Fluid from below the diaphragm returns to the circulation when supine", ["Asthma triggered by dust", "Acid reflux", "Sleep apnea only"], "Lying flat mobilizes leg and abdominal fluid, raising pulmonary venous pressure."),
          Q("What does a patient with PND do to relieve it?", "Sits upright", ["Lies flatter", "Holds his breath", "Lies on the stomach"], "Sitting up lowers venous return and relieves the air hunger.")
        ]
      }),
      S(65, "Orthopnea", {
        why: "<p><b>Orthopnea</b>: dyspnea <b>within minutes</b> of lying flat. Same cause as PND but means <b>more severe</b> dysfunction. Relieved by raising the head of the bed; the sickest <b>sleep sitting up</b>. Night <b>cough</b> is another sign of congestion.</p>",
        q: [
          Q("How quickly does orthopnea start after lying down?", "Within a few minutes", ["After several hours", "Only after a meal", "Only in the morning"], "Orthopnea comes within minutes of lying supine."),
          Q("Compared with PND, what does orthopnea indicate?", "More severe cardiac dysfunction", ["Milder disease", "A lung infection", "A valve-only problem"], "Orthopnea has the same cause as PND but means worse dysfunction."),
          Q("Which nighttime symptom is another sign of pulmonary congestion?", "Cough", ["Night sweats", "Leg cramps", "Nosebleeds"], "Cough, especially at night, is a manifestation of congestion.")
        ]
      }),
      S(66, "Thirst, nocturia, oliguria and brain symptoms", {
        why: "<p><b>Thirst</b>: ADH activation. <b>Nocturia</b>: lying down, renal vasoconstriction eases and venous return rises → more urine at night. <b>Oliguria</b>: renal hypoperfusion from low output. <b>Cerebral</b>: anxiety, confusion, insomnia, memory loss.</p>",
        q: [
          Q("Why do HF patients get nocturia?", "Lying down eases renal vasoconstriction and raises venous return", ["They drink more at night", "Diuretics are always taken at night", "Bladder infection"], "Recumbency improves kidney flow, so more urine forms at night."),
          Q("Which hormone system causes thirst in heart failure?", "ADH (arginine vasopressin)", ["Insulin", "Thyroid hormone", "Cortisol"], "Thirst is tied to ADH activation."),
          Q("What causes oliguria in heart failure?", "Renal hypoperfusion from low cardiac output", ["Too much water intake", "High BNP", "Bladder outlet obstruction"], "Poor output means poor kidney perfusion and less urine.")
        ]
      })
    ],
    review: [
      Q("A patient says he wakes at 2 AM gasping and must sit on the edge of the bed. What symptom is this?", "Paroxysmal nocturnal dyspnea", ["Orthopnea", "Sleep apnea", "Panic attack"], "Waking suddenly with air hunger after lying a while is PND."),
      Q("A patient now sleeps in a recliner because she gets breathless within minutes of lying flat. What symptom is this?", "Orthopnea", ["PND", "Platypnea", "Trepopnea"], "Dyspnea within minutes of lying flat is orthopnea."),
      Q("An older HF patient becomes forgetful and confused. What HF mechanism may explain it?", "Low cardiac output to the brain", ["High BNP toxicity", "Too much oxygen", "Low cholesterol"], "Cerebral symptoms come from reduced output."),
      Q("An HF patient gets up three times a night to urinate. What is the mechanism?", "Better renal perfusion when lying down", ["A bladder infection", "Too much salt", "ADH excess"], "Nocturia comes from more urine formation in the recumbent position.")
    ]
  });

  /* ---------------------------------------------------------------- exam */
  los.push({
    id: "exam", label: "LO 7-8", title: "Exam findings: rales, effusions, edema, S3 and S4",
    objective: "Recognize the physical exam findings of heart failure and which type they point to.",
    slides: [
      S(67, "Vital signs, skin and lungs", {
        why: "<p>Compensatory <b>resting sinus tachycardia</b>, maybe <b>AF (HFrEF)</b>. <b>Diaphoresis</b>; <b>cool, pale</b>, sometimes cyanotic skin. <b>Rales at the lung bases</b> from fluid in the alveoli; in frank pulmonary edema, <b>coarse rales and wheezes throughout</b> with frothy sputum.</p>",
        q: [
          Q("Where are HF rales first heard?", "At the lung bases", ["At the apices only", "Over the trachea", "Over the heart"], "Rales are heard at the bases as fluid shifts into the alveoli."),
          Q("Why is the HF patient's skin cool and pale?", "Sympathetic vasoconstriction with low output", ["Fever", "High output", "Anemia only"], "Low output and SNS vasoconstriction make the skin cool and pale (standard teaching for the why)."),
          Q("What lung findings are heard throughout the lungs in pulmonary edema?", "Coarse rales and wheezes", ["Only a friction rub", "Stridor", "Silent lungs"], "In pulmonary edema, coarse rales and wheezes are heard throughout.")
        ]
      }),
      S(68, "Pleural effusions", {
        why: "<p>With more fluid, <b>pleural effusions</b> (hydrothorax) form and worsen dyspnea by lowering vital capacity. Signs: <b>dullness to percussion</b> (characteristic), <b>shifting dullness</b> from sitting to lateral decubitus, and <b>diminished or absent breath sounds</b>. They reabsorb slowly as diuresis starts.</p>",
        q: [
          Q("What is the characteristic exam sign of a pleural effusion?", "Dullness to percussion", ["Hyperresonance", "Wheezing", "A pericardial rub"], "Dullness on percussion is the characteristic sign."),
          Q("What happens to breath sounds over a pleural effusion?", "They are diminished or absent", ["They are louder", "They become bronchial everywhere", "They are unchanged"], "Fluid dampens breath sounds."),
          Q("How do pleural effusions worsen dyspnea?", "They reduce vital capacity", ["They raise the EF", "They cause bronchospasm", "They lower heart rate"], "Effusions compress the lung and reduce vital capacity.")
        ]
      }),
      S(69, "JVD, edema and congestion", {
        pic: "<p>A photo of a distended jugular vein in the neck and a photo of a swollen abdomen with ascites.</p>",
        why: "<p><b>JVD</b>. <b>Peripheral edema</b> in the legs, or <b>presacral</b> if bed bound. Hepatic and splanchnic congestion: <b>ascites</b>, abdominal fullness, <b>RUQ pain, early satiety, nausea</b>. Genital (scrotal/labial) edema, upper extremities, and <b>anasarca</b> in terminal HF.</p>",
        q: [
          Q("Where does edema collect in a bed-bound HF patient?", "The presacral region", ["The feet only", "The face only", "The hands only"], "Bed-bound patients develop presacral edema."),
          Q("Which GI symptoms come with hepatic and splanchnic congestion?", "RUQ pain, early satiety and nausea", ["Bloody diarrhea", "Dysphagia", "Heartburn only"], "Abdominal congestion causes RUQ pain, early satiety and nausea.")
        ]
      }),
      S(70, "Peripheral edema and anasarca", {
        pic: "<p>A photo of a foot and ankle with severe swelling.</p>",
        why: "<p>HF edema is <b>symmetric and pitting</b> in <b>dependent</b> areas: <b>feet and ankles</b> if walking, <b>sacrum</b> if bedridden. In poorly controlled or terminal HF it becomes massive and generalized: <b>anasarca</b> (genitals, arms, chest and abdominal walls).</p>",
        q: [
          Q("What kind of edema is typical of heart failure?", "Symmetric pitting edema", ["One-sided non-pitting edema", "Facial edema only", "Edema of one arm"], "HF causes symmetric pitting edema in dependent areas."),
          Q("What is anasarca?", "Massive, generalized edema", ["Edema of one leg", "Fluid in the pericardium", "A skin infection"], "Anasarca is massive generalized edema in poorly controlled or terminal HF.")
        ]
      }),
      S(71, "Stasis dermatitis", {
        pic: "<p>A photo of both lower legs with reddened, darkened, firm skin.</p>",
        why: "<p>Chronic edema → <b>increased pigmentation, reddening and induration</b> of the lower legs; the skin can <b>break down and weep fluid</b>.</p>",
        q: [
          Q("What skin change comes from chronic HF edema of the lower legs?", "Stasis dermatitis", ["Psoriasis", "Vitiligo", "Erythema nodosum"], "Chronic edema causes stasis dermatitis."),
          Q("What does stasis dermatitis look like?", "Pigmented, red, firm skin of the lower legs", ["Silvery plaques on the elbows", "Target lesions", "Pale, cold toes only"], "The slide lists increased pigmentation, reddening and induration.")
        ]
      }),
      S(72, "Cardiomegaly on exam", {
        why: "<p>An enlarged LV may be felt as a <b>laterally displaced, sustained PMI</b>. Nonspecific, and <b>more common in HFrEF</b>.</p>",
        q: [
          Q("How does cardiomegaly show on palpation?", "A laterally displaced, sustained PMI", ["A thrill at the right sternal border", "A tapping apex", "No palpable change ever"], "LV enlargement displaces the point of maximal impulse."),
          Q("In which HF type is a displaced PMI more common?", "HFrEF", ["HFpEF", "Both equally", "Neither"], "Cardiomegaly is more common in HFrEF.")
        ]
      }),
      S(73, "S3 in HFrEF", {
        why: "<p><b>S3</b>: early diastolic \"<b>Lub-Dub-Tah</b>\", more common in <b>HFrEF</b>, best heard in tachycardic patients. It comes from sudden <b>deceleration of inflow</b> after early filling and marks <b>high LV filling pressures</b>. S3 plus high JVP = higher risk of <b>death and rehospitalization</b>. HFrEF may also have <b>MR</b> from a dilated ventricle.</p>",
        q: [
          Q("Which extra heart sound is more common in HFrEF?", "S3", ["S4", "An opening snap", "An ejection click"], "S3 gallops are more common in HFrEF."),
          Q("What does an S3 sound like?", "Lub-Dub-Tah", ["Tah-Lub-Dub", "Lub-Tah-Dub", "Only a single Lub"], "S3 follows S2 in early diastole: Lub-Dub-Tah."),
          Q("What does an S3 mark?", "High LV filling pressures", ["Normal filling pressures", "A stiff noncompliant atrium", "Low blood volume"], "S3 is a marker of increased LV filling pressures."),
          Q("Which murmur often comes with HFrEF?", "Mitral regurgitation from ventricular dilation", ["Aortic stenosis", "Pulmonic stenosis", "A venous hum"], "A dilated LV stretches the mitral annulus and causes MR.")
        ]
      }),
      S(74, "S4 in HFpEF", {
        why: "<p><b>S4</b> is the <b>specific</b> exam finding for <b>HFpEF</b>: a <b>stiff, noncompliant</b> ventricle meets the <b>atrial kick</b>. Sounds like \"<b>Tah-Lub-Dub</b>\".</p>",
        q: [
          Q("Which extra heart sound is specific for HFpEF?", "S4", ["S3", "A mid-systolic click", "A pericardial knock"], "S4 is the specific exam finding of HFpEF."),
          Q("What does an S4 sound like?", "Tah-Lub-Dub", ["Lub-Dub-Tah", "Lub-Dub only", "A continuous machinery murmur"], "S4 comes just before S1: Tah-Lub-Dub."),
          Q("What causes an S4?", "Atrial kick into a stiff, noncompliant ventricle", ["Rapid early filling of a dilated ventricle", "A leaky mitral valve", "A pericardial rub"], "Decreased compliance makes the atrial kick audible.")
        ]
      }),
      S(75, "Cardiac cachexia", {
        why: "<p>Advanced HF (especially chronic gut congestion) can look <b>malnourished</b>: poor intake (early satiety, nausea), poor <b>fat absorption</b>, and ↑ metabolism from <b>norepinephrine</b>. Result: <b>cardiac cachexia</b>, weight loss from skeletal muscle atrophy.</p>",
        q: [
          Q("What is cardiac cachexia?", "Weight loss from muscle atrophy in advanced HF", ["Weight gain from fluid", "Obesity from inactivity", "A heart tumor"], "Cachexia is loss of tissue mass from skeletal muscle atrophy."),
          Q("Which hormone raises metabolism and contributes to cardiac cachexia?", "Norepinephrine", ["Insulin", "BNP", "Aldosterone"], "Elevated norepinephrine raises energy expenditure."),
          Q("Which nutrient's absorption is impaired in cardiac cachexia?", "Fat", ["Water", "Iron only", "Vitamin C only"], "The slide lists impaired absorption of fat.")
        ]
      })
    ],
    review: [
      Q("On exam you hear an extra sound just after S2 in a patient with EF 25%. What is it?", "S3", ["S4", "Opening snap", "Ejection click"], "An early diastolic sound in HFrEF is an S3."),
      Q("On exam you hear an extra sound just before S1 in a hypertensive patient with EF 60%. What is it?", "S4", ["S3", "Mid-systolic click", "Pericardial knock"], "A presystolic sound in a stiff ventricle is an S4."),
      Q("An HF patient has dullness and absent breath sounds at the right base. What is it?", "Pleural effusion", ["Pneumothorax", "Pulmonary edema only", "Normal finding"], "Dullness and absent breath sounds point to a pleural effusion."),
      Q("A thin HF patient with ascites has lost 20 lb of muscle. What is this called?", "Cardiac cachexia", ["Anasarca", "Stasis dermatitis", "Hydrothorax"], "Muscle wasting in advanced HF is cardiac cachexia."),
      Q("A hospitalized HF patient in bed for a week has swelling over the sacrum. Why there?", "Edema collects in dependent areas", ["Pressure ulcer only", "Kidney stone", "Spinal infection"], "HF edema follows gravity, so a bed-bound patient swells at the sacrum.")
    ]
  });

  /* ---------------------------------------------------------------- LO 9 */
  los.push({
    id: "lo9", label: "LO 9", title: "Diagnosis and classification: Framingham, NYHA, AHA stages",
    objective: "Recall the purpose of the 3 classification systems (Framingham, NYHA, AHA stages) and apply NYHA and AHA stages to a patient.",
    slides: [
      S(76, "Section: Diagnosis and classification", {
        why: "<p>Section title. HF is a <b>clinical</b> diagnosis; three tools help.</p>"
      }),
      S(77, "No single diagnostic test", {
        why: "<p>There is <b>no diagnostic test for HF</b>: it's a <b>clinical diagnosis</b> from history and exam. Imaging and labs <b>confirm</b> it and <b>rule out</b> other causes. Three tools: <b>Framingham criteria</b>, <b>NYHA class</b>, <b>AHA stages</b>.</p>",
        q: [
          Q("How is heart failure diagnosed?", "Clinically, from history and exam, with tests to confirm", ["By a single blood test", "By EKG alone", "Only by biopsy"], "HF is largely a clinical diagnosis; tests confirm it and rule out others."),
          Q("What three tools help with the clinical diagnosis and classification of HF?", "Framingham criteria, NYHA class, AHA stages", ["TIMI, GRACE, HEART", "CHA2DS2-VASc, HAS-BLED, Wells", "Duke, Bruce, Canadian"], "The deck lists Framingham, NYHA and AHA stages.")
        ]
      }),
      S(78, "What each system is for", {
        why: "<p><b>Framingham</b>: the <b>most sensitive and specific</b> for making the <b>clinical diagnosis</b>. <b>NYHA</b>: used <b>after</b> diagnosis to grade <b>symptom severity</b>. <b>AHA stages</b>: based on <b>risk factors and structural disease</b>; guide <b>therapy</b>.</p>",
        q: [
          Q("Which system has the most sensitivity and specificity for making the HF diagnosis?", "Framingham criteria", ["NYHA class", "AHA stages", "Killip class"], "Framingham criteria are the most sensitive and specific for diagnosis."),
          Q("When is the NYHA classification used?", "After HF is diagnosed, to grade symptom severity", ["Before any symptoms appear", "To diagnose HF", "To grade valve disease"], "NYHA is used after diagnosis to describe symptoms."),
          Q("What are the AHA stages based on?", "Risk factors and structural heart disease", ["Symptoms during exercise only", "BNP level", "EKG findings"], "AHA stages are based on risk and structure and guide therapy.")
        ]
      }),
      S(79, "Framingham criteria", {
        why: "<p><b>Major</b>: PND or orthopnea, ↑ JVP, <b>hepatojugular reflux</b>, rales, <b>S3</b>, enlarging heart on serial CXR, <b>pulmonary edema on CXR</b>, weight loss over 10 lb in 5 days on diuretics, venous pressure over 16 cm H₂O. <b>Minor</b>: DOE, night cough, HR over 120, hepatomegaly, bilateral leg edema, vascular engorgement or <b>pleural effusion</b> on CXR. Diagnosis: <b>2 major</b> or <b>1 major + 2 minor</b>.</p>",
        q: [
          Q("How many Framingham criteria make the diagnosis of HF?", "2 major, or 1 major and 2 minor", ["1 minor", "3 minor only", "4 major"], "The slide requires 2 major or 1 major plus 2 minor."),
          Q("Is an S3 gallop a major or minor Framingham criterion?", "Major", ["Minor", "Not a criterion", "Only in children"], "S3 gallop is a major criterion."),
          Q("Is bilateral lower extremity edema a major or minor Framingham criterion?", "Minor", ["Major", "Not a criterion", "Diagnostic by itself"], "Bilateral leg edema is a minor criterion."),
          Q("What heart rate is a minor Framingham criterion?", "Over 120 bpm", ["Over 80 bpm", "Under 50 bpm", "Over 200 bpm"], "Tachycardia over 120 bpm is a minor criterion.")
        ]
      }),
      S(80, "NYHA functional class", {
        why: "<p><b>I</b>: no symptoms or limits with ordinary activity. <b>II</b>: dyspnea with exertion (stairs, raking, shoveling, taking out trash). <b>III</b>: moderate limits, dyspnea with <b>ordinary</b> activity, comfortable at rest. <b>IV</b>: <b>symptoms at rest</b>, mostly bedbound.</p>",
        q: [
          Q("Which NYHA class has symptoms at rest?", "Class IV", ["Class I", "Class II", "Class III"], "NYHA IV has symptoms even at rest."),
          Q("Which NYHA class is comfortable at rest but dyspneic with ordinary activity?", "Class III", ["Class I", "Class II", "Class IV"], "Class III is moderate limitation with ordinary activity."),
          Q("Which NYHA class has dyspnea with exertion such as climbing stairs?", "Class II", ["Class I", "Class III", "Class IV"], "Class II gets dyspnea with exertion like stairs or shoveling snow.")
        ]
      }),
      S(81, "AHA/ACC stages", {
        why: "<p><b>A</b>: high risk, <b>no structural disease, no symptoms</b> (HTN, DM, obesity, PVD, CVA, family hx, cardiotoxins). <b>B</b>: <b>structural disease, no symptoms</b> (prior MI, LVH, valve disease). <b>C</b>: structural disease <b>with prior or current symptoms</b> (NYHA I-III). <b>D</b>: <b>refractory</b> HF needing specialized care (NYHA IV, symptoms at rest despite max therapy, recurrent hospitalizations).</p>",
        q: [
          Q("Which AHA stage is structural heart disease without symptoms?", "Stage B", ["Stage A", "Stage C", "Stage D"], "Stage B has structural disease but no signs or symptoms."),
          Q("Which AHA stage is high risk without structural disease?", "Stage A", ["Stage B", "Stage C", "Stage D"], "Stage A is at risk with no structural disease or symptoms."),
          Q("Which NYHA classes fit AHA stage C?", "NYHA I-III", ["NYHA IV only", "NYHA I only", "None"], "Stage C covers NYHA I-III, since symptoms can improve with treatment."),
          Q("Which AHA stage is refractory HF needing specialized intervention?", "Stage D", ["Stage C", "Stage B", "Stage A"], "Stage D is refractory HF, NYHA IV.")
        ]
      })
    ],
    review: [
      Q("A 50-year-old with hypertension and diabetes has a normal echo and no symptoms. Which AHA stage?", "Stage A", ["Stage B", "Stage C", "Stage D"], "Risk factors without structure or symptoms is stage A."),
      Q("A man had an MI last year, has an EF of 40% and no symptoms. Which AHA stage?", "Stage B", ["Stage A", "Stage C", "Stage D"], "Structural disease without symptoms is stage B."),
      Q("A woman with HFrEF gets winded walking to the mailbox but is fine sitting. Which NYHA class?", "Class III", ["Class I", "Class II", "Class IV"], "Dyspnea with ordinary activity, comfortable at rest, is class III."),
      Q("A patient with HFrEF had dyspnea last year, but on meds now has no symptoms. Which AHA stage?", "Stage C", ["Stage B", "Stage A", "Stage D"], "Stage C includes prior symptoms, and stages never go backward (standard teaching)."),
      Q("A patient has orthopnea and an S3 but nothing else. Do Framingham criteria make the diagnosis?", "Yes, two major criteria", ["No, needs four major", "No, these are minor", "Only with a biopsy"], "Orthopnea and S3 are both major, and 2 major make the diagnosis.")
    ]
  });

  /* ---------------------------------------------------------------- LO 10a */
  los.push({
    id: "lo10a", label: "LO 10a", title: "Workup: EKG, chest X-ray, echo, labs, BNP, troponin",
    objective: "Apply the appropriate testing in the workup of heart failure and understand the purpose of each test (EKG, CXR, echo, labs, proBNP, troponins).",
    slides: [
      S(82, "EKG", {
        why: "<p>Get an EKG routinely and look for <b>structure</b> (LVH, prior MI), <b>rhythm</b> (AF/flutter, frequent ectopy, sustained arrhythmias), <b>conduction</b> (<b>LBBB</b>) and the <b>QT</b>, since many therapies prolong it and can provoke lethal arrhythmias.</p>",
        q: [
          Q("Why note the QT interval on an HF patient's EKG?", "Many therapies can prolong it and provoke lethal arrhythmias", ["It diagnoses HF", "It measures EF", "It predicts BNP"], "The slide warns that many HF therapies prolong the QT."),
          Q("Which conduction abnormality does the deck look for on the HF EKG?", "Left bundle branch block", ["Right bundle branch block only", "First-degree AV block only", "WPW"], "LBBB is the conduction abnormality listed."),
          Q("Which structural findings can an EKG suggest in HF?", "LVH and prior MI", ["EF and valve area", "BNP and troponin", "Pulmonary edema"], "The EKG can show LVH and prior infarctions.")
        ]
      }),
      S(83, "Chest X-ray", {
        why: "<p>Look at the heart and lung vessels. <b>Cardiomegaly</b> (cardiothoracic ratio <b>over 50%</b>) is in almost all chronic HF, but may be absent in acute HF from MI or myocarditis. <b>Interstitial edema</b> when left filling pressure exceeds <b>25 mmHg</b>; <b>Kerley lines</b>. Pleural effusions. Clearing can lag <b>48 hours</b> behind diuresis.</p>",
        q: [
          Q("What cardiothoracic ratio defines cardiomegaly on CXR?", "Over 50%", ["Over 20%", "Over 90%", "Under 50%"], "Cardiomegaly is a cardiothoracic ratio above 50%."),
          Q("Above what left-sided filling pressure does interstitial edema appear on CXR?", "25 mmHg", ["5 mmHg", "10 mmHg", "100 mmHg"], "Interstitial edema develops above 25 mmHg."),
          Q("What are Kerley lines?", "Spindle-shaped linear opacities of interstitial edema", ["Rib fractures", "Calcified valves", "Air in the pleura"], "Kerley lines are linear opacities from interstitial edema."),
          Q("How long can CXR clearing lag behind diuresis?", "About 48 hours", ["About 5 minutes", "About 2 weeks", "It never clears"], "CXR improvement can be delayed 48 hours after diuresis.")
        ]
      }),
      S(84, "Cardiomegaly", {
        pic: "<p>A chest X-ray with a very large heart shadow and a pacemaker/defibrillator in the left chest.</p>",
        why: "<p>An example of <b>cardiomegaly</b>: the heart takes up more than half the chest width.</p>",
        q: [
          Q("On the cardiomegaly X-ray, how wide is the heart compared with the chest?", "More than half the chest width", ["About a quarter", "Exactly normal", "Too small to see"], "Cardiomegaly means a heart wider than 50% of the chest.")
        ]
      }),
      S(85, "Echocardiogram", {
        why: "<p>The <b>essential</b> test for structure and function: chamber sizes, wall thickness, systolic and diastolic function, valves, filling pressures, stroke volume/CO. It <b>defines HFrEF vs HFpEF</b> and tracks EF. Do it <b>early</b> and again <b>whenever a clinical change would change management</b>.</p>",
        q: [
          Q("Which test defines HFrEF vs HFpEF?", "Echocardiogram", ["EKG", "BNP", "Chest X-ray"], "Echo measures the EF that separates the two."),
          Q("When should the echo be repeated in HF?", "When a clinical change would change management", ["Every week", "Never", "Only at death"], "Repeat echo when a change would alter management.")
        ]
      }),
      S(86, "Labs: CBC and BMP/CMP", {
        why: "<p>Draw at diagnosis, at decompensation, with therapy changes and periodically. <b>CBC</b>: anemia and iron deficiency in systolic dysfunction (early treatment may reverse them). <b>BMP/CMP</b>: <b>hyponatremia</b> (advanced HF or overdiuresis), <b>hypokalemia</b> (diuretics), <b>hyperkalemia</b> (ACEi), and renal dysfunction (↑ BUN, creatinine).</p>",
        q: [
          Q("What does hyponatremia suggest in an HF patient?", "Advanced HF or excessive diuretic use", ["Early mild HF", "Dehydration from fever only", "Good control"], "Hyponatremia marks advanced HF or too much diuretic."),
          Q("Which HF drug class causes hyperkalemia?", "ACE inhibitors", ["Loop diuretics", "Thiazides", "Nitrates"], "ACEi usage can cause hyperkalemia."),
          Q("Why look for anemia and iron deficiency in systolic HF?", "Early treatment may reverse them", ["They prove HF", "They are never present", "They raise the EF"], "Recognizing anemia early matters because treatment may reverse it.")
        ]
      }),
      S(87, "Labs: LFTs, glucose, lipids", {
        why: "<p><b>LFTs</b> (liver congestion), <b>fasting glucose and A1c</b>, <b>fasting lipid panel</b>: congestion plus the risk factors that drive HF.</p>",
        q: [
          Q("Why check LFTs in heart failure?", "Liver congestion can cause abnormal liver tests", ["To diagnose hepatitis A", "To measure EF", "To time the BNP"], "Hepatic congestion often abnormalizes LFTs."),
          Q("Which diabetes tests are part of the HF lab workup?", "Fasting glucose and hemoglobin A1c", ["C-peptide only", "Insulin antibodies", "Urine ketones only"], "The slide lists fasting glucose and A1c.")
        ]
      }),
      S(88, "proBNP", {
        why: "<p>Key for diagnosing <b>decompensated</b> HF; get a <b>baseline</b>. Higher in <b>HFrEF</b> than HFpEF (less wall stretch in HFpEF). <b>Over 450 pg/mL</b> in younger patients or <b>over 900 pg/mL</b> over age 50 is highly sensitive and specific for HF when the diagnosis is in doubt.</p>",
        q: [
          Q("What proBNP level suggests HF in a patient older than 50?", "Over 900 pg/mL", ["Over 50 pg/mL", "Over 100 pg/mL", "Over 9,000 pg/mL"], "Over 900 pg/mL is the cutoff for patients over 50."),
          Q("What proBNP level suggests HF in a younger patient?", "Over 450 pg/mL", ["Over 45 pg/mL", "Over 4,500 pg/mL", "Over 900 pg/mL"], "Over 450 pg/mL is the cutoff in younger patients."),
          Q("Is proBNP usually higher in HFrEF or HFpEF?", "HFrEF", ["HFpEF", "Always equal", "Neither raises it"], "HFpEF has less diastolic wall stretch, so BNP rises less."),
          Q("Why get a baseline proBNP in a stable HF patient?", "To compare against when decompensation is suspected", ["To diagnose CAD", "To replace an echo", "To dose statins"], "A baseline lets you judge a later rise during decompensation.")
        ]
      }),
      S(89, "Troponin", {
        why: "<p>Troponin below MI criteria is found in <b>over 50%</b> of systolic HF patients, even without CAD. It usually reflects <b>volume overload</b> and <b>high LV filling pressures</b>.</p>",
        q: [
          Q("What does a mildly elevated troponin below MI criteria usually mean in systolic HF?", "Volume overload and high LV filling pressures", ["An acute STEMI", "Lab error", "Pulmonary embolus always"], "Low-level troponin in HF usually reflects overload and high filling pressure."),
          Q("In what share of systolic HF patients is a low-level troponin detected?", "Over 50%", ["Under 1%", "About 5%", "100%"], "The slide says over 50% of systolic HF patients have it.")
        ]
      })
    ],
    review: [
      Q("A 68-year-old with dyspnea has a proBNP of 2,400 pg/mL. What does this suggest?", "Heart failure is likely", ["HF is ruled out", "COPD only", "A lab error"], "Over 900 pg/mL in a patient over 50 is highly sensitive and specific for HF."),
      Q("After diagnosing HF clinically, which test decides HFrEF vs HFpEF?", "Echo", ["proBNP", "EKG", "CXR"], "Only the echo measures the EF."),
      Q("An HF patient on furosemide and lisinopril has K 3.1. Which drug likely caused it?", "Furosemide", ["Lisinopril", "Neither", "Both equally"], "Loop diuretics cause hypokalemia while ACEi raise potassium."),
      Q("A stable HF patient's proBNP is normal on diuretics and an ACEi. Does that rule out HF?", "No, these meds lower BNP", ["Yes, HF is cured", "Yes, BNP is always high in HF", "Only if the EF is 70%"], "Diuretics and ACEi lower BNP, so chronic HF can have a normal BNP."),
      Q("A patient's CXR still shows edema the morning after strong diuresis, but he feels better. Why?", "CXR clearing can lag about 48 hours", ["Diuresis failed", "He has pneumonia", "The X-ray is wrong"], "Radiographic improvement often trails clinical improvement by 48 hours.")
    ]
  });

  /* ---------------------------------------------------------------- LO 10b */
  los.push({
    id: "lo10b", label: "LO 10b", title: "Workup: stress testing, cath, MRI, biopsy, genetics",
    objective: "Apply the appropriate additional testing in HF (stress testing, stress echo, cath, cardiac MRI, biopsy, genetic testing) and know the purpose of each.",
    slides: [
      S(90, "Additional imaging and testing", {
        why: "<p>Beyond the basics: <b>exercise/pharmacologic stress testing</b>, <b>stress echo</b>, <b>cardiac cath</b>, <b>cardiac MRI</b>, <b>endomyocardial biopsy</b>, <b>genetic testing</b>. Each answers a specific question about cause or prognosis.</p>",
        q: [
          Q("Which test on the additional testing list samples heart muscle directly?", "Endomyocardial biopsy", ["Cardiac MRI", "Stress echo", "Genetic testing"], "A biopsy takes tissue from the myocardium."),
          Q("How many additional tests does the slide list beyond the basic workup?", "Six", ["Two", "Ten", "One"], "Stress test, stress echo, cath, MRI, biopsy and genetic testing.")
        ]
      }),
      S(91, "Cardiopulmonary exercise testing (CPET)", {
        why: "<p><b>CPET</b> sharpens evaluation and <b>prognosis</b>, especially when advanced therapies are considered. <b>Peak VO₂</b> and the <b>VE/VCO₂ slope</b> are powerful predictors. <b>Peak VO₂ under 50% predicted</b> = indication for <b>transplant or LVAD</b>. Very useful in <b>HFpEF</b>, where exercise intolerance is key.</p>",
        q: [
          Q("What peak VO2 on CPET suggests a heart transplant or LVAD?", "Less than 50% predicted", ["More than 90% predicted", "Exactly 100% predicted", "Less than 99% predicted"], "Peak VO2 under 50% predicted is an indication for transplant or LVAD."),
          Q("Which two CPET measurements are powerful predictors of prognosis?", "Peak VO2 and the VE/VCO2 slope", ["BNP and troponin", "Heart rate and BP only", "EF and LVOT gradient"], "Peak VO2 and VE/VCO2 slope predict prognosis."),
          Q("In which HF type is exercise testing especially valuable?", "HFpEF", ["HFrEF only", "Neither", "Only right HF"], "Exercise intolerance is key in HFpEF, so testing is very valuable.")
        ]
      }),
      S(92, "Stress echocardiogram", {
        why: "<p>Exercise test + echo: the stress part looks for <b>CAD</b>; the echo checks <b>diastolic dysfunction and LV filling pressures</b> during exercise. Treadmill or bike. Indicated in <b>chronic HTN, CAD and HF features</b>.</p>",
        q: [
          Q("What does the echo part of a stress echo evaluate in HF?", "Diastolic dysfunction and LV filling pressures during exercise", ["Coronary calcium", "Thyroid function", "Lung volumes"], "Stress echo shows diastolic function and filling pressures under exercise."),
          Q("Which patients does the slide say should get a stress echo?", "Chronic HTN, CAD and features of heart failure", ["Healthy athletes", "Children with murmurs", "Anyone with a cold"], "It is indicated in chronic HTN, CAD and HF features.")
        ]
      }),
      S(93, "Cardiac catheterization", {
        why: "<p>Do coronary angiography with <b>intermediate or high pretest probability of CAD</b> or an <b>abnormal stress test</b>. <b>Surgical revascularization</b> in ischemic HF <b>improves outcomes</b>.</p>",
        q: [
          Q("Which HF patients should get coronary angiography?", "Intermediate or high CAD probability, or an abnormal stress test", ["All HF patients without exception", "Only children", "Only those with normal stress tests"], "Cath is for intermediate/high pretest probability or abnormal stress results."),
          Q("What does revascularization do in ischemic HF?", "Improves cardiovascular outcomes", ["Worsens survival", "Has no effect", "Only lowers BNP"], "Surgical revascularization in ischemic HF improves outcomes.")
        ]
      }),
      S(94, "Cardiac MRI", {
        why: "<p>Cardiac MRI is most used for <b>focal and diffuse fibrosis</b>, <b>aortic enlargement</b>, <b>infiltrative cardiomyopathies</b> and <b>pericardial thickness</b>.</p>",
        q: [
          Q("Which cardiomyopathies is cardiac MRI especially used for?", "Infiltrative cardiomyopathies", ["Takotsubo only", "Alcoholic only", "None"], "MRI evaluates infiltrative cardiomyopathies."),
          Q("Which pericardial measurement does cardiac MRI give?", "Pericardial thickness", ["Pericardial pH", "Pericardial glucose", "Pericardial rub loudness"], "MRI assesses pericardial thickness.")
        ]
      }),
      S(95, "Endomyocardial biopsy", {
        why: "<p>Used less since cardiac MRI, but still for suspected <b>fulminant myocarditis</b>, <b>giant cell myocarditis</b>, <b>sarcoidosis</b>, <b>amyloid</b> and <b>hemochromatosis</b>.</p>",
        q: [
          Q("Why is endomyocardial biopsy used less often now?", "Cardiac MRI has emerged", ["It was banned", "It is too cheap", "Echo replaced it entirely"], "Cardiac MRI now answers many of the same questions."),
          Q("Which iron-overload disease can still need an endomyocardial biopsy?", "Hemochromatosis", ["Iron deficiency anemia", "Thalassemia trait", "Lead poisoning"], "Hemochromatosis is on the biopsy list."),
          Q("Which myocarditis types still call for biopsy?", "Fulminant and giant cell myocarditis", ["Mild viral myocarditis only", "Pericarditis", "Rheumatic fever only"], "Fulminant and giant cell myocarditis are listed.")
        ]
      }),
      S(96, "Genetic testing", {
        why: "<p>Widely available. Best use: find <b>at-risk relatives</b> for inherited cardiomyopathies that need close monitoring: <b>hypertrophic cardiomyopathy</b> and <b>arrhythmogenic right ventricular dysplasia</b>.</p>",
        q: [
          Q("What is the best current use of genetic testing in HF?", "Identifying at-risk relatives for inherited cardiomyopathies", ["Diagnosing every HF case", "Choosing a diuretic", "Measuring EF"], "It identifies at-risk individuals for inherited cardiomyopathies."),
          Q("Which two inherited cardiomyopathies does the slide name for genetic testing?", "HCM and arrhythmogenic RV dysplasia", ["Takotsubo and peripartum", "Alcoholic and ischemic", "Amyloid and sarcoid"], "HCM and ARVD are the named inherited cardiomyopathies.")
        ]
      })
    ],
    review: [
      Q("A new HF patient has diabetes, smoking and an abnormal stress test. What is the next test?", "Cardiac catheterization", ["Genetic testing", "Endomyocardial biopsy", "Nothing"], "An abnormal stress test calls for coronary angiography."),
      Q("A young man with new HF has an MRI suggesting sarcoid, but the diagnosis is unclear. Which test confirms it?", "Endomyocardial biopsy", ["Stress echo", "Genetic testing", "BNP"], "Biopsy is still used for suspected sarcoidosis."),
      Q("A patient's brother died suddenly of hypertrophic cardiomyopathy. What test can identify his risk?", "Genetic testing", ["Endomyocardial biopsy", "Cardiac cath", "Calcium score"], "Genetic testing identifies at-risk relatives for inherited cardiomyopathies."),
      Q("An advanced HF patient is being considered for an LVAD. Which test helps decide?", "Cardiopulmonary exercise testing", ["Genetic testing", "Calcium score", "Holter only"], "CPET peak VO2 helps decide on transplant or LVAD.")
    ]
  });

  /* ---------------------------------------------------------------- LO 11 */
  los.push({
    id: "lo11", label: "LO 11", title: "Lifestyle and non-drug treatment",
    objective: "Educate a patient on the appropriate lifestyle and non-pharmacologic treatment options for heart failure.",
    slides: [
      S(97, "Section: Treatment of heart failure", {
        why: "<p>Section title. Lifestyle first, then drugs, then treatment by stage.</p>"
      }),
      S(98, "Goals of therapy and HFpEF", {
        why: "<p>Goal: <b>relieve symptoms</b>, manage <b>causes</b>, prevent <b>progression and death</b>. <b>HFpEF</b> treatment is <b>nonspecific</b>: relieve congestion and treat comorbidities. We treat HFpEF like HFrEF because <b>positive trial data for HFpEF are lacking</b>.</p>",
        q: [
          Q("What does HFpEF treatment rely on?", "Relieving congestion and treating comorbidities", ["A drug proven to cure it", "Heart transplant for all", "Digoxin first"], "HFpEF therapy is nonspecific: congestion relief and comorbidity control."),
          Q("Why is HFpEF treated much like HFrEF?", "Positive randomized trial data for HFpEF are lacking", ["They are the same disease", "HFpEF drugs are too expensive", "HFpEF has no symptoms"], "There isn't strong trial evidence specific to HFpEF.")
        ]
      }),
      S(99, "Lifestyle and comorbidities", {
        why: "<p>Lifestyle: <b>weight loss</b>, better exercise tolerance, <b>quit smoking</b>, <b>avoid cardiotoxins</b> (alcohol, illicit drugs), <b>water and salt restriction</b>. Comorbidities: DM, lipids, revascularize CAD when appropriate, <b>BP control</b> (ACEi/ARB even in pre-HTN), AF and arrhythmias (ICD?), <b>OSA</b>, <b>anemia</b>, valve disease or cardiomyopathy.</p>",
        q: [
          Q("Which cardiotoxins should HF patients avoid?", "Alcohol and illicit drugs", ["Caffeine-free tea", "Vitamin D", "Water"], "The slide lists ETOH and illicit drugs as cardiotoxins."),
          Q("Which BP drugs does the slide suggest even for pre-hypertension in HF?", "ACEi or ARBs", ["Clonidine", "Minoxidil", "Hydralazine alone"], "ACEi/ARBs are suggested in patients with pre-HTN."),
          Q("Which sleep disorder should be treated in HF patients?", "Obstructive sleep apnea", ["Narcolepsy", "Restless legs only", "Sleepwalking"], "Treating OSA is on the comorbidity list.")
        ]
      }),
      S(100, "Sodium and fluid", {
        why: "<p>Sodium drives fluid retention, so recommend a <b>low-sodium diet</b>: AHA says <b>1,500 mg/day</b>. Fluid restriction is mostly clinical experience: <b>1-2 L/day max</b>.</p>",
        q: [
          Q("How much sodium per day does the AHA recommend for HF patients?", "1,500 mg", ["5,000 mg", "500 mg", "3,500 mg"], "AHA recommends 1,500 mg/day of sodium."),
          Q("What is the usual fluid restriction for HF patients?", "1-2 L per day", ["5-6 L per day", "No fluid at all", "250 mL per day"], "Fluid is restricted to 1-2 L/day max.")
        ]
      }),
      S(101, "Where the sodium comes from", {
        pic: "<p>AHA \"Salty Six\" poster: breads and rolls, cold cuts and cured meats, sandwiches, pizza, soup, chicken. A salt shaker chart of sources of sodium in the average US diet: 5% added while cooking, 6% added while eating, 12% from natural sources, 77% from processed and prepared foods.</p>",
        why: "<p>Most sodium (<b>77%</b>) comes from <b>processed and prepared foods</b>, not the salt shaker (only 11% added while cooking or eating). The <b>Salty Six</b>: breads/rolls, cold cuts/cured meats, sandwiches, pizza, soup, chicken.</p>",
        q: [
          Q("Where does most dietary sodium come from?", "Processed and prepared foods", ["The salt shaker at the table", "Natural sources", "Salt added while cooking"], "77% of sodium comes from processed and prepared foods."),
          Q("Which of these is on the AHA Salty Six list?", "Cold cuts and cured meats", ["Fresh apples", "Plain rice", "Raw carrots"], "Cold cuts and cured meats are one of the Salty Six."),
          Q("What percent of dietary sodium is added at the table while eating?", "About 6%", ["About 77%", "About 50%", "About 90%"], "Only 6% is added while eating.")
        ]
      }),
      S(102, "Daily weight and BP diary", {
        why: "<p>Every patient keeps a <b>daily weight and BP diary</b>: the two best signs of <b>under- or over-diuresis</b>. Educated patients notice <b>weight gain and rising BP</b> and call early, before decompensation.</p>",
        q: [
          Q("Which two numbers should every HF patient record daily?", "Weight and blood pressure", ["Glucose and cholesterol", "Pulse oximetry and temperature", "Steps and calories"], "Daily weight and BP show under- or over-diuresis."),
          Q("Why does a daily weight diary prevent hospitalizations?", "Weight gain warns of fluid buildup before decompensation", ["It measures EF", "It replaces medications", "It lowers BNP"], "Patients can call when weight rises, allowing early intervention.")
        ]
      }),
      S(103, "Cardiac rehabilitation and exercise", {
        why: "<p><b>Moderate exercise 20-30 min, 5 days/week</b>. For <b>NYHA I-III</b>; <b>not NYHA IV</b>. Caution in HFpEF (exercise intolerance): still helps, may need changes. Benefits: better <b>LV function and CO</b>, endothelial function, muscle metabolism, vasodilator response, <b>fewer HF hospitalizations</b>, better well-being.</p>",
        q: [
          Q("How much exercise does cardiac rehab aim for in HF?", "Moderate exercise 20-30 minutes, 5 days a week", ["Intense sprints daily", "10 minutes once a month", "No exercise"], "The slide recommends moderate exercise 20-30 min, 5 days/wk."),
          Q("Which NYHA class is NOT a candidate for cardiac rehab?", "Class IV", ["Class I", "Class II", "Class III"], "Cardiac rehab is not indicated in NYHA IV."),
          Q("What happens to HF hospitalizations with aerobic training?", "They decrease significantly", ["They increase", "They are unchanged", "They double"], "Exercise training significantly decreases HF hospitalizations.")
        ]
      }),
      S(104, "Obstructive sleep apnea", {
        why: "<p>Sleep-disordered breathing is in about <b>75%</b> of HF patients and worsens prognosis: apneas cause hypoxemia and <b>↑ SNS activity</b>. <b>CPAP</b> improves symptoms and <b>EF</b>, so recommend it for HF with OSA.</p>",
        q: [
          Q("About what share of HF patients have sleep-disordered breathing?", "About 75%", ["About 5%", "About 25%", "100%"], "Reported prevalence is about 75%."),
          Q("How does sleep apnea worsen heart failure?", "Hypoxemia and increased sympathetic activity", ["It lowers heart rate", "It improves filling", "It raises BNP only"], "Apneas cause intermittent hypoxemia and SNS surges."),
          Q("What does CPAP do for HF patients with OSA?", "Improves symptoms and ejection fraction", ["Worsens EF", "Has no effect", "Causes pulmonary edema"], "Studies showed improved symptoms and EF with CPAP.")
        ]
      })
    ],
    review: [
      Q("An HF patient says he never salts his food, yet eats deli sandwiches and canned soup daily. What do you tell him?", "Processed foods are his main sodium source", ["He is fine since he doesn't salt food", "Soup is low sodium", "Only table salt counts"], "77% of sodium comes from processed and prepared foods like deli meat and soup."),
      Q("An HF patient gains 4 lb in 3 days. What should she do?", "Call her provider early", ["Wait for the next yearly visit", "Drink more water", "Stop all medications"], "Rising weight warns of fluid retention, and early calls prevent decompensation (standard teaching for the number)."),
      Q("A man with HFrEF snores loudly and has daytime sleepiness. What treatment may improve his EF?", "CPAP for sleep apnea", ["Sleeping pills", "More caffeine", "A higher salt diet"], "CPAP for OSA improves symptoms and EF."),
      Q("An NYHA class II patient asks if he should exercise. What do you advise?", "Yes, moderate exercise or cardiac rehab", ["No exercise ever", "Only bed rest", "Only weightlifting maximum loads"], "NYHA I-III patients benefit from moderate exercise.")
    ]
  });

  /* ---------------------------------------------------------------- LO 13a */
  los.push({
    id: "lo13a", label: "LO 13a", title: "Drugs: ACE inhibitors, ARBs, hydralazine + nitrate",
    objective: "HF pharm: ACE inhibitors, ARBs and BiDil (names, MOA, indications, effects on HF, side effects, contraindications, research).",
    slides: [
      S(105, "Medication management", {
        pic: "<p>A section slide with a pill bottle icon: \"Medication Management\".</p>",
        why: "<p>Section title. Each drug class pulls a lever from the CO = HR × SV picture: preload, afterload, contractility, rate, or the harmful compensations.</p>"
      }),
      S(106, "Where ACEi, ARBs and hydralazine + nitrate act", {
        pic: "<p>The cartoon heart between the venous and arterial arrows, labeled \"ACE inhibitors, ARBs, Hydralazine + oral nitrates\".</p>",
        why: "<p>These three are <b>vasodilators</b>: they unload the heart by lowering <b>afterload</b> (and nitrates lower <b>preload</b>), and ACEi/ARB also block the harmful RAAS compensation.</p>"
      }),
      S(107, "ACE inhibitors: indications and MOA", {
        why: "<p><b>First-line</b> in HF, used in <b>all AHA stages</b> if tolerated. Shown to <b>improve survival</b>, cut hospitalizations, improve quality of life, <b>slow remodeling</b>, lower mortality in LV dysfunction and reduce symptoms. MOA: block <b>angiotensin I → II</b> → less vasoconstriction (<b>↓ afterload</b>), less SNS activation, less aldosterone-driven <b>salt and water retention</b>.</p>",
        q: [
          Q("In which AHA stages are ACE inhibitors used?", "All stages, if tolerated", ["Stage D only", "Stage A only", "Never in HF"], "ACEi are used for all AHA stages of HF if tolerated."),
          Q("How do ACE inhibitors work?", "Block conversion of angiotensin I to angiotensin II", ["Block beta receptors", "Inhibit the Na-K ATPase", "Block the f-current"], "ACEi block the ACE enzyme that makes angiotensin II."),
          Q("Do ACE inhibitors improve survival in heart failure?", "Yes", ["No", "Only in HFpEF", "They worsen it"], "Studies show ACEi improve survival."),
          Q("Which harmful process in HF do ACE inhibitors slow?", "Cardiac remodeling", ["Natriuretic peptide release", "Parasympathetic tone", "Bone growth"], "ACEi have been shown to slow remodeling.")
        ]
      }),
      S(108, "ACE inhibitor names and boxed warning", {
        why: "<p><b>Enalapril (Vasotec)</b>, <b>lisinopril (Prinivil, Zestril)</b>, <b>quinapril (Accupril)</b>, <b>ramipril (Altace)</b>. <b>Boxed warning</b>: RAAS drugs injure and kill the fetus; stop as soon as pregnancy is found.</p>",
        q: [
          Q("What is the brand name of ramipril?", "Altace", ["Vasotec", "Accupril", "Zestril"], "Ramipril is Altace."),
          Q("What is the brand name of enalapril?", "Vasotec", ["Altace", "Cozaar", "Diovan"], "Enalapril is Vasotec."),
          Q("What is the boxed warning on ACE inhibitors?", "Fetal injury and death", ["Liver failure", "Suicidal thoughts", "Tendon rupture"], "Drugs acting on RAAS can injure and kill the fetus.")
        ]
      }),
      S(109, "ACE inhibitor dosing, side effects, contraindications", {
        why: "<p>Start <b>low</b> and titrate up by <b>renal function</b> and tolerance. Side effects: <b>persistent cough</b>, <b>angioedema</b>, <b>hyperkalemia</b>, hypotension, <b>azotemia</b>. Contraindications: history of <b>angioedema</b>, <b>renal failure</b>, <b>pregnancy</b>, <b>renal artery stenosis</b>.</p>",
        q: [
          Q("Which side effect makes many patients switch from an ACE inhibitor?", "Persistent cough", ["Hair loss", "Weight gain", "Tremor"], "Persistent cough is the classic ACEi side effect."),
          Q("Which vascular kidney problem contraindicates ACE inhibitors?", "Renal artery stenosis", ["Kidney stones", "Simple renal cysts", "UTI"], "Renal artery stenosis is a contraindication."),
          Q("How is an ACE inhibitor dosed in HF?", "Start low and titrate by renal function and tolerance", ["Start at max dose", "Give once a month", "Dose by BNP only"], "Start at the lowest dose and titrate up.")
        ]
      }),
      S(110, "ARBs", {
        why: "<p>Alternative when a patient <b>can't tolerate an ACEi</b>, usually from <b>cough</b>. Usable in all NYHA classes/AHA stages; <b>equally effective</b> at lowering HF mortality. MOA: block the <b>action</b> of angiotensin II. Side effects: angioedema, hyperkalemia, hypotension; <b>Black patients</b> may have higher angioedema risk. Contraindications: <b>angioedema</b> (an ARB is <b>not a safe alternative</b> after ACEi angioedema) and pregnancy.</p>",
        q: [
          Q("When is an ARB used instead of an ACE inhibitor?", "When the patient can't tolerate an ACEi, such as from cough", ["Always first", "Only in stage D", "Only with digoxin"], "ARBs are the alternative for ACEi intolerance."),
          Q("Is an ARB a safe alternative after ACE inhibitor angioedema?", "No", ["Yes, always", "Only at high doses", "Only in children"], "The slide says an ARB is not a safe alternative after angioedema."),
          Q("How do ARBs work?", "They block the action of angiotensin II", ["They block making angiotensin II", "They inhibit neprilysin", "They block aldosterone receptors"], "ARBs block angiotensin II at its receptor."),
          Q("How do ARBs compare with ACE inhibitors for HF mortality?", "Equally effective", ["Much worse", "Much better", "No effect"], "The slide says ARBs are equally effective at lowering mortality.")
        ]
      }),
      S(111, "ARB names", {
        why: "<p><b>Candesartan (Atacand)</b>, <b>irbesartan (Avapro)</b>, <b>losartan (Cozaar)</b>, <b>olmesartan (Benicar)</b>, <b>telmisartan (Micardis)</b>, <b>valsartan (Diovan)</b>. Same fetal <b>boxed warning</b>.</p>",
        q: [
          Q("What is the brand name of losartan?", "Cozaar", ["Diovan", "Atacand", "Benicar"], "Losartan is Cozaar."),
          Q("What is the brand name of valsartan?", "Diovan", ["Cozaar", "Micardis", "Avapro"], "Valsartan is Diovan."),
          Q("Do ARBs carry the same pregnancy boxed warning as ACE inhibitors?", "Yes", ["No", "Only in the third trimester", "Only for men"], "Both act on RAAS and carry the fetal toxicity warning.")
        ]
      }),
      S(112, "Hydralazine + isosorbide dinitrate (BiDil): indications and MOA", {
        why: "<p><b>BiDil</b> = hydralazine + isosorbide dinitrate. Use in <b>HFrEF (stage B-D)</b> when <b>neither ACEi nor ARB</b> is tolerated (hyperkalemia, cough, angioedema, hypotension, worsening renal function), and <b>added</b> for <b>Black patients with HFrEF stage C-D</b>. MOA: <b>hydralazine</b> dilates <b>arterioles</b>; <b>isosorbide dinitrate</b> dilates mainly <b>veins</b>, some arteries.</p>",
        q: [
          Q("What two drugs make up BiDil?", "Hydralazine and isosorbide dinitrate", ["Sacubitril and valsartan", "Lisinopril and HCTZ", "Amlodipine and benazepril"], "BiDil combines hydralazine and isosorbide dinitrate."),
          Q("Which population gets BiDil added to HFrEF therapy?", "Black patients with stage C or D HFrEF", ["Asian patients with stage A", "All children", "Pregnant women only"], "Hydralazine-nitrate is added for Black patients with HFrEF stage C-D."),
          Q("What does hydralazine dilate?", "Arterioles", ["Veins mainly", "Bronchi", "Coronary veins only"], "Hydralazine directly dilates arterioles."),
          Q("What does isosorbide dinitrate mainly dilate?", "Peripheral veins", ["Arterioles only", "Bronchi", "Renal arteries only"], "The nitrate mainly dilates veins with some arterial effect.")
        ]
      }),
      S(113, "BiDil: research, side effects, contraindication", {
        why: "<p>Lowers mortality, but <b>less than ACEi</b>; some studies show <b>more benefit in Black patients</b>. Side effects: <b>hypotension</b>, bradycardia, nausea/vomiting, diaphoresis. Contraindication: use with <b>PDE-5 inhibitors</b>.</p>",
        q: [
          Q("Which drug class must not be combined with BiDil?", "Phosphodiesterase-5 inhibitors", ["Statins", "Loop diuretics", "SGLT2 inhibitors"], "Nitrates plus PDE inhibitors can cause profound hypotension."),
          Q("How does BiDil's mortality benefit compare with ACE inhibitors?", "It lowers mortality, but less than ACEi", ["More than ACEi", "No mortality benefit", "It raises mortality"], "The slide says the reduction is not as significant as ACEi."),
          Q("What is the main side effect of hydralazine + nitrate?", "Hypotension", ["Hyperkalemia", "Cough", "Gynecomastia"], "Hypotension tops the side effect list.")
        ]
      })
    ],
    review: [
      Q("A patient on lisinopril develops a dry cough for months. What do you switch to?", "An ARB such as losartan", ["Another ACE inhibitor", "No RAAS drug ever", "Digoxin"], "An ARB is the alternative for ACEi cough."),
      Q("A patient on lisinopril develops lip and tongue swelling. Can she switch to an ARB?", "No, ARBs are not safe after ACEi angioedema", ["Yes, losartan is safe", "Yes, at half dose", "Only valsartan is safe"], "The deck says an ARB is not a safe alternative after angioedema."),
      Q("A woman on enalapril for HF finds out she is 8 weeks pregnant. What do you do?", "Stop the ACE inhibitor as soon as possible", ["Continue it", "Double the dose", "Add an ARB"], "RAAS drugs cause fetal injury and death."),
      Q("An HFrEF patient has hyperkalemia and angioedema history on both ACEi and ARB. Which afterload reducer fits?", "Hydralazine + isosorbide dinitrate", ["Sacubitril/valsartan", "Spironolactone", "Lisinopril at a low dose"], "BiDil is the alternative when ACEi and ARB can't be used."),
      Q("A Black patient with stage C HFrEF is on an ACEi, beta blocker and diuretic. What can be added?", "Hydralazine + isosorbide dinitrate", ["A second ACE inhibitor", "A CCB", "An NSAID"], "BiDil is added for Black patients with stage C-D HFrEF.")
    ]
  });

  /* ---------------------------------------------------------------- LO 13b */
  los.push({
    id: "lo13b", label: "LO 13b", title: "Drugs: beta blockers and diuretics",
    objective: "HF pharm: beta blockers, loop diuretics, thiazides, aldosterone antagonists and sodium channel inhibitors.",
    slides: [
      S(114, "Where beta blockers act", {
        pic: "<p>The cartoon heart labeled \"Beta Blockers\".</p>",
        why: "<p>Beta blockers act on the <b>heart rate and the SNS</b>: they block the harmful sympathetic compensation.</p>"
      }),
      S(115, "Beta blockers: indications and MOA", {
        why: "<p>For <b>stable</b> HF, <b>AHA stage B and C</b>. Lower BP, <b>improve mortality</b> (fewer arrhythmias and sudden deaths) and <b>EF</b>, ease symptoms, improve quality of life. MOA: <b>slow HR</b> → <b>longer diastolic filling</b> and higher EF. <b>Titrate gradually</b>.</p>",
        q: [
          Q("In which AHA stages are beta blockers used for HF?", "Stages B and C", ["Stage A only", "Stage D only", "Never"], "Beta blockers are used in stable HF, AHA stages B and C."),
          Q("How do beta blockers help the failing heart?", "Slow the HR for longer diastolic filling and a higher EF", ["Raise HR to boost output", "Increase contractility directly", "Block aldosterone"], "Slowing the rate lengthens filling time and improves EF."),
          Q("How do beta blockers lower HF mortality?", "They reduce arrhythmias and sudden death", ["They cure CAD", "They raise BNP", "They lower cholesterol"], "The slide credits fewer arrhythmias and sudden deaths."),
          Q("How should a beta blocker be started in HF?", "Low dose, titrated up gradually", ["Full dose on day one", "Only IV", "Only during decompensation"], "Gradual titration lets patients tolerate it.")
        ]
      }),
      S(116, "Beta blockers: side effects and contraindications", {
        why: "<p>Side effects: <b>bradycardia</b>, <b>hypotension</b>, <b>bronchospasm</b> (non-cardioselective). Contraindications: <b>severe HF (stage D)</b>, <b>acutely decompensated HF</b> (must be held), <b>cardiogenic shock</b>, <b>chronic pulmonary disease</b>.</p>",
        q: [
          Q("When must a beta blocker be held in HF?", "During acutely decompensated heart failure", ["During stable stage C", "After a good echo", "When BP is high"], "Beta blockers must be held in acute decompensation."),
          Q("Which AHA stage is a contraindication to beta blockers on the slide?", "Stage D", ["Stage B", "Stage C", "Stage A"], "Severe HF (stage D) is listed as a contraindication."),
          Q("Which side effect is a concern with non-cardioselective beta blockers?", "Bronchospasm", ["Hyperglycemia only", "Hair growth", "Cough from bradykinin"], "Non-selective beta blockade can cause bronchospasm.")
        ]
      }),
      S(117, "Beta blocker names", {
        why: "<p>The three HF beta blockers: <b>carvedilol (Coreg)</b>, <b>bisoprolol (Zebeta)</b>, <b>metoprolol succinate</b> (the deck lists Lopressor; standard teaching: Toprol-XL is the succinate, Lopressor is the tartrate).</p>",
        q: [
          Q("Which three beta blockers are used in heart failure?", "Carvedilol, bisoprolol and metoprolol succinate", ["Propranolol, atenolol and labetalol", "Esmolol, sotalol and nadolol", "Timolol, pindolol and acebutolol"], "These are the three HF beta blockers."),
          Q("What is the brand name of carvedilol?", "Coreg", ["Zebeta", "Lopressor", "Tenormin"], "Carvedilol is Coreg.")
        ]
      }),
      S(118, "Where diuretics act", {
        pic: "<p>The cartoon heart labeled \"Loop Diuretics, Thiazide/Thiazide Like Diuretics, Potassium Sparing Diuretics\".</p>",
        why: "<p>Diuretics act on the <b>kidneys and the venous side</b>: less volume, less preload, less congestion.</p>"
      }),
      S(119, "Diuretics in general", {
        pic: "<p>A drawing of a nephron.</p>",
        why: "<p>They make the kidney excrete <b>water and sodium</b> → ↓ blood volume → ↓ <b>preload</b> and congestion. Used for <b>symptom relief</b>; rapid relief of pulmonary and peripheral edema. In general they have <b>NOT been shown to improve survival</b>.</p>",
        q: [
          Q("Which part of the cardiac output equation do diuretics mainly lower?", "Preload", ["Afterload", "Heart rate", "Contractility"], "Diuretics reduce blood volume and preload."),
          Q("Do diuretics in general improve survival in heart failure?", "No, they relieve symptoms", ["Yes, more than any drug", "Only thiazides do", "Only in HFpEF"], "Diuretics have not been shown to improve survival.")
        ]
      }),
      S(120, "Loop diuretics", {
        why: "<p>MOA: block <b>NaCl reabsorption in the thick ascending limb</b> of the loop of Henle. SE: <b>hypokalemia</b>, metabolic <b>alkalosis</b>, hypovolemia, hypotension, azotemia, hyponatremia, <b>hyperuricemia</b>, <b>sulfa</b> concerns. Used in <b>all stages</b> for symptoms and in <b>decompensated</b> HF.</p>",
        q: [
          Q("Where do loop diuretics act?", "The thick ascending limb of the loop of Henle", ["The distal convoluted tubule", "The collecting duct", "The proximal tubule"], "Loops block NaCl reabsorption in the thick ascending limb."),
          Q("Which acid-base problem do loop diuretics cause?", "Metabolic alkalosis", ["Metabolic acidosis", "Respiratory acidosis", "None"], "Loop diuretics cause metabolic alkalosis."),
          Q("Which uric acid problem do loop diuretics cause?", "Hyperuricemia", ["Hypouricemia", "None", "Uric acid stones dissolve"], "Hyperuricemia is a listed side effect.")
        ]
      }),
      S(121, "Loop diuretic names and dosing", {
        why: "<p><b>Furosemide (Lasix)</b>, <b>bumetanide (Bumex)</b>, <b>torsemide (Demadex)</b>. Titrate to effect: Lasix might start at <b>20 mg daily</b> but HF can need <b>80 mg BID</b>.</p>",
        q: [
          Q("What is the brand name of bumetanide?", "Bumex", ["Lasix", "Demadex", "Aldactone"], "Bumetanide is Bumex."),
          Q("How are loop diuretics dosed in HF?", "Titrated until a diuretic effect is seen", ["A fixed dose for everyone", "By weight in kg only", "Once a week"], "Dosage is titrated until diuresis occurs.")
        ]
      }),
      S(122, "Thiazide and thiazide-like diuretics", {
        why: "<p>MOA: block Na and Cl transport in the <b>distal convoluted tubule</b>. <b>Ineffective if CrCl under 30</b>. SE: <b>hypercalcemia</b>, hypokalemia, hypochloremic alkalosis, hyponatremia, hypomagnesemia, hypotension, sulfa. Mild antihypertensive. Added for stage A-C symptoms; <b>can be combined with a loop</b>.</p>",
        q: [
          Q("Where do thiazides act?", "The distal convoluted tubule", ["The loop of Henle", "The collecting duct", "The glomerulus"], "Thiazides block NaCl transport in the DCT."),
          Q("Below what creatinine clearance are thiazides ineffective?", "30 mL/min", ["90 mL/min", "60 mL/min", "5 mL/min"], "Thiazides are ineffective if CrCl is under 30."),
          Q("Which calcium change do thiazides cause?", "Hypercalcemia", ["Hypocalcemia", "None", "Calcium stones dissolve"], "Thiazides raise calcium, unlike loops.")
        ]
      }),
      S(123, "Thiazide names", {
        why: "<p><b>Chlorothiazide (Diuril)</b>, <b>chlorthalidone (Hygroton)</b>, <b>hydrochlorothiazide (HCTZ, Hydrodiuril)</b>, <b>metolazone (Zaroxolyn)</b>.</p>",
        q: [
          Q("What is the brand name of metolazone?", "Zaroxolyn", ["Hygroton", "Diuril", "Lasix"], "Metolazone is Zaroxolyn."),
          Q("Which of these is a thiazide-like diuretic on the slide?", "Chlorthalidone", ["Torsemide", "Eplerenone", "Amiloride"], "Chlorthalidone (Hygroton) is on the thiazide list.")
        ]
      }),
      S(124, "Aldosterone antagonists", {
        why: "<p><b>Spironolactone (Aldactone)</b>, <b>eplerenone (Inspra)</b>. MOA: <b>competitively block aldosterone</b> in the distal tubule → Na and water excreted, <b>K retained</b>. SE: <b>gynecomastia</b>, menstrual problems, impotence, ↓ libido, <b>hyperkalemia</b>, hypertriglyceridemia, renal failure. Contraindication: <b>hyperkalemia</b>.</p>",
        q: [
          Q("How do aldosterone antagonists work?", "Competitively block aldosterone in the distal tubule", ["Block NaCl in the loop of Henle", "Block ACE", "Block beta receptors"], "They inhibit aldosterone's action, losing sodium and keeping potassium."),
          Q("Which endocrine side effect is classic for spironolactone?", "Gynecomastia", ["Hypothyroidism", "Diabetes insipidus", "Cushing syndrome"], "Gynecomastia is a classic side effect."),
          Q("What is the contraindication to aldosterone antagonists?", "Hyperkalemia", ["Hypokalemia", "Hypertension", "Gout"], "Hyperkalemia is the contraindication.")
        ]
      }),
      S(125, "Aldosterone antagonists: monitoring and indications", {
        why: "<p>Hyperkalemia risk rises with <b>renal impairment</b>, high K intake and <b>ACEi, ARBs, NSAIDs</b>. <b>Check K before starting</b> and monitor closely. Use: add-on for <b>moderate-severe HF (stage C-D)</b>, <b>severe LV systolic dysfunction</b>, and HF <b>after MI</b>.</p>",
        q: [
          Q("Which drug classes raise hyperkalemia risk with spironolactone?", "ACE inhibitors, ARBs and NSAIDs", ["Loop diuretics and thiazides", "Statins", "Nitrates"], "These raise potassium further."),
          Q("When are aldosterone antagonists indicated in HF?", "Stage C-D, severe LV dysfunction, or after MI", ["Stage A only", "Only in HFpEF", "Only before surgery"], "They are adjunctive for moderate-severe HF and post-MI HF."),
          Q("What lab must be checked before starting an aldosterone antagonist?", "Potassium", ["Calcium", "Lipase", "TSH"], "Check potassium before starting and monitor closely.")
        ]
      }),
      S(126, "Sodium channel inhibitors", {
        why: "<p><b>Amiloride (Midamor)</b>, <b>triamterene (Dyrenium)</b>: also potassium sparing. MOA: block the <b>sodium channels</b> tied to the aldosterone-sensitive pump, so similar potassium effect. SE: <b>hyperkalemia</b>, fatigue, hypotension, azotemia.</p>",
        q: [
          Q("Which two drugs are potassium-sparing sodium channel inhibitors?", "Amiloride and triamterene", ["Spironolactone and eplerenone", "Furosemide and torsemide", "HCTZ and metolazone"], "Amiloride and triamterene block the sodium channels directly."),
          Q("What is the main electrolyte side effect of amiloride?", "Hyperkalemia", ["Hypokalemia", "Hypercalcemia", "Hypermagnesemia"], "As potassium sparers, they cause hyperkalemia.")
        ]
      })
    ],
    review: [
      Q("An HF patient on furosemide has a K of 3.0 and an EF of 25%. Which diuretic adds survival benefit and raises potassium?", "Spironolactone", ["HCTZ", "Bumetanide", "Metolazone"], "Aldosterone antagonists keep potassium and help severe LV dysfunction."),
      Q("A man on spironolactone develops painful breast enlargement. What can replace it?", "Eplerenone", ["Amiloride with spironolactone", "Lisinopril", "Furosemide alone"], "Eplerenone is the other aldosterone antagonist, with less gynecomastia (standard teaching)."),
      Q("A patient on max-dose furosemide is still overloaded. What can be added?", "A thiazide such as metolazone", ["A beta blocker at full dose", "An NSAID", "More salt"], "Thiazides may be combined with a loop diuretic."),
      Q("A patient arrives in acute decompensated HF on carvedilol. What do you do with the carvedilol?", "Hold it", ["Double it", "Switch to propranolol", "Give it IV"], "Beta blockers must be held in acutely decompensated HF."),
      Q("An HF patient with CrCl 22 needs diuresis. Why won't HCTZ work alone?", "Thiazides are ineffective below CrCl 30", ["HCTZ causes hyperkalemia", "HCTZ is only for asthma", "It works too strongly"], "Thiazides lose effect when CrCl is under 30.")
    ]
  });

  /* ---------------------------------------------------------------- LO 13c */
  los.push({
    id: "lo13c", label: "LO 13c", title: "Drugs: ARNI, digoxin, ivabradine, SGLT2 inhibitors",
    objective: "HF pharm: ARNI, digoxin, ivabradine and SGLT2 inhibitors; starting and target doses.",
    slides: [
      S(127, "Where ARNIs act", {
        pic: "<p>The cartoon heart labeled \"Angiotensin-Receptor Neprilysin Inhibitors (ARNIs)\".</p>",
        why: "<p>ARNIs work on two sides at once: block RAAS and <b>boost natriuretic peptides</b>.</p>"
      }),
      S(128, "Sacubitril/valsartan (Entresto)", {
        why: "<p><b>Sacubitril/valsartan (Entresto)</b>: blocks RAAS (valsartan) and inhibits <b>neprilysin</b> (sacubitril), the enzyme that <b>breaks down natriuretic peptides</b>, so the helpful peptides rise. Cut HF hospitalizations <b>20%</b> vs an ACEi alone; the trial stopped <b>early for benefit</b>. Recommended for patients <b>tolerating a max dose ACEi or ARB</b>; some use it first line (TBD).</p>",
        q: [
          Q("What enzyme does sacubitril inhibit?", "Neprilysin", ["ACE", "Renin", "Na-K ATPase"], "Sacubitril blocks neprilysin."),
          Q("What does neprilysin normally break down?", "Natriuretic peptides", ["Angiotensin I", "Digoxin", "Aldosterone"], "Neprilysin degrades natriuretic peptides, so blocking it raises them."),
          Q("How much did Entresto reduce HF hospitalizations compared with an ACEi?", "About 20%", ["About 2%", "About 80%", "Not at all"], "It reduced HF hospitalizations by 20% vs an ACEi."),
          Q("Which patients is Entresto recommended for?", "Those tolerating a max-dose ACEi or ARB", ["Those with ACEi angioedema", "Those with GFR under 30", "Pregnant women"], "It is recommended as an alternative in patients tolerating max ACEi/ARB.")
        ]
      }),
      S(129, "Entresto: washout and contraindications", {
        why: "<p>Stop any ACEi or ARB <b>3 days before</b> starting Entresto (the <b>\"3-day washout\"</b>) to lower the risk of <b>angioedema</b>, hypotension and hyperkalemia. Contraindications: <b>angioedema history</b>, <b>GFR under 30</b>. Fetal toxicity <b>boxed warning</b>.</p>",
        q: [
          Q("How long must an ACE inhibitor be stopped before starting Entresto?", "3 days", ["3 hours", "3 weeks", "No washout"], "The 3-day washout is required."),
          Q("Why is the 3-day washout done before Entresto?", "To lower the risk of angioedema", ["To lower BNP", "To raise potassium", "To allow digoxin loading"], "The washout minimizes angioedema, hypotension and hyperkalemia."),
          Q("Below what GFR is Entresto contraindicated?", "30 mL/min", ["90 mL/min", "60 mL/min", "10 mL/min"], "GFR under 30 is a contraindication.")
        ]
      }),
      S(130, "Where digoxin acts", {
        pic: "<p>The cartoon heart labeled \"Digoxin\".</p>",
        why: "<p>Digoxin acts on <b>contractility</b> (and slows AV conduction for rate control).</p>"
      }),
      S(131, "Digoxin: indications", {
        why: "<p>An <b>inotrope</b>: ↑ contractility. Gives <b>rate control in HF with AF</b>. For <b>late stage C and D</b>. <b>Improves symptoms and cuts hospitalizations in HFrEF</b> but <b>no mortality benefit</b>. Reserve for persistent symptoms after ACEi/ARB/ARNI plus diuretic.</p>",
        q: [
          Q("Does digoxin lower mortality in HF?", "No, it only improves symptoms and hospitalizations", ["Yes, more than ACEi", "Yes, in HFpEF only", "It doubles survival"], "Digoxin has not been shown to improve mortality."),
          Q("Which arrhythmia does digoxin help control in HF?", "Atrial fibrillation (rate control)", ["Ventricular fibrillation", "Torsades", "Complete heart block"], "Digoxin provides rate control in HF with AF."),
          Q("When should digoxin be added in HFrEF?", "When symptoms continue despite ACEi/ARB/ARNI and diuretic", ["As the first drug", "In stage A", "Before any diuretic"], "Digoxin is reserved for continued symptoms after standard therapy.")
        ]
      }),
      S(132, "Digoxin: MOA, toxicity, cautions", {
        why: "<p>MOA: inhibits the <b>Na-K ATPase</b> → ↑ intracellular <b>calcium</b> → stronger contraction. SE: <b>digoxin toxicity</b> (GI, neuro, systemic) and tachy- and bradyarrhythmias. Contraindication: prior <b>VT or VF</b>. Caution in <b>HFpEF</b>: more calcium in myocytes <b>worsens diastolic function</b>.</p>",
        q: [
          Q("How does digoxin increase contractility?", "It inhibits the Na-K ATPase, raising intracellular calcium", ["It blocks beta receptors", "It blocks the f-current", "It inhibits neprilysin"], "Na-K ATPase inhibition leads to more intracellular calcium."),
          Q("What arrhythmia history contraindicates digoxin?", "Prior VT or VF", ["Prior sinus tachycardia", "Prior PACs", "Prior first-degree block"], "Prior V-tach or V-fib is a contraindication."),
          Q("Why use digoxin with caution in HFpEF?", "Calcium influx worsens diastolic function", ["It lowers EF too much", "It causes cough", "It raises potassium"], "Extra calcium in myocytes impairs relaxation.")
        ]
      }),
      S(133, "Other inotropes", {
        why: "<p>Other inotropes (<b>milrinone</b>, vesnarinone, xamoterol) <b>increase mortality</b> with long-term use because they are <b>arrhythmogenic</b>.</p>",
        q: [
          Q("What happens with long-term use of inotropes like milrinone?", "Mortality increases", ["Mortality falls", "EF normalizes permanently", "Nothing"], "Long-term non-digoxin inotropes raise mortality."),
          Q("Why do long-term inotropes like milrinone raise mortality?", "They are arrhythmogenic", ["They cause hyperkalemia", "They cause cough", "They lower BP too little"], "The slide says they are arrhythmogenic.")
        ]
      }),
      S(134, "Where ivabradine acts", {
        pic: "<p>The cartoon heart labeled \"Ivabradine\".</p>",
        why: "<p>Ivabradine acts only on <b>heart rate</b>, at the SA node.</p>"
      }),
      S(135, "Ivabradine", {
        why: "<p>MOA: <b>selectively inhibits the SA node \"funny\" current (If)</b> → lower HR. <b>Lowers mortality</b> when the patient is on appropriate therapy and <b>HR is over 75</b>; no mortality benefit if HR is under 75.</p>",
        q: [
          Q("What current does ivabradine inhibit?", "The SA node funny current (If)", ["The L-type calcium current", "The sodium current in ventricles", "The potassium rectifier"], "Ivabradine selectively blocks the f-current."),
          Q("Above what heart rate does ivabradine lower mortality?", "75 bpm", ["50 bpm", "100 bpm", "120 bpm"], "It helps when HR stays over 75 on appropriate therapy."),
          Q("What does ivabradine do to heart rate?", "Lowers it", ["Raises it", "No effect", "Makes it irregular"], "Ivabradine reduces heart rate.")
        ]
      }),
      S(136, "Where SGLT2 inhibitors act", {
        pic: "<p>The cartoon heart labeled \"Dapagliflozin (Farxiga), Empagliflozin (Jardiance)\".</p>",
        why: "<p>SGLT2 inhibitors act at the <b>kidney</b>: they spill glucose and sodium into the urine.</p>"
      }),
      S(137, "SGLT2 inhibitors", {
        why: "<p><b>Dapagliflozin (Farxiga)</b>, <b>empagliflozin (Jardiance)</b>. SE: frequent urination, <b>urinary and groin infections</b>, hypotension, ↑ risk of <b>foot amputation</b>. <b>DAPA-HF</b>: dapagliflozin ↓ <b>mortality</b> and progression in <b>HFrEF (NYHA II-IV) with or without diabetes</b>.</p>",
        q: [
          Q("Which trial showed dapagliflozin lowers HF mortality?", "DAPA-HF", ["PARADIGM-HF", "SHIFT", "RALES"], "DAPA-HF found dapagliflozin reduced mortality and progression."),
          Q("Does dapagliflozin help HFrEF patients without diabetes?", "Yes, with or without diabetes", ["Only with diabetes", "No", "Only type 1 diabetics"], "DAPA-HF showed benefit with or without DM."),
          Q("Which infection risk do SGLT2 inhibitors raise?", "Urinary and groin infections", ["Pneumonia", "Meningitis", "Endocarditis"], "Glucose in the urine raises urinary and groin infections."),
          Q("What is the brand name of empagliflozin?", "Jardiance", ["Farxiga", "Entresto", "Inspra"], "Empagliflozin is Jardiance.")
        ]
      }),
      S(138, "Starting and target doses (part 1)", {
        pic: "<p>Guideline Table 1, starting and target doses. Beta blockers: bisoprolol 1.25 mg daily to 10 mg daily; carvedilol 3.125 mg twice daily to 25 mg twice daily (50 mg twice daily if 85 kg or more); metoprolol succinate 12.5-25 mg daily to 200 mg daily. ARNI: sacubitril/valsartan 24/26-49/51 mg twice daily to 97/103 mg twice daily. ACEi: captopril 6.25 mg three times daily to 50 mg three times daily; enalapril 2.5 mg twice daily to 10-20 mg twice daily; lisinopril 2.5-5 mg daily to 20-40 mg daily; ramipril 1.25 mg daily to 10 mg daily. ARBs: candesartan 4-8 mg daily to 32 mg daily; losartan 25-50 mg daily to 150 mg daily; valsartan 40 mg twice daily to 160 mg twice daily.</p>",
        why: "<p>The pattern matters more than the numbers: every guideline drug <b>starts low and is titrated to a target</b>. Doses are reference (standard teaching: not usually tested).</p>",
        q: [
          Q("What is the target dose of metoprolol succinate in HF?", "200 mg daily", ["25 mg daily", "1,000 mg daily", "12.5 mg daily"], "The table lists 12.5-25 mg daily up to 200 mg daily."),
          Q("What pattern do the guideline HF drug doses follow?", "Start low and titrate to a target dose", ["Start at the target dose", "Use one fixed dose for all", "Lower the dose every week"], "Each drug has a low starting dose and a higher target.")
        ]
      }),
      S(139, "Starting and target doses (part 2)", {
        pic: "<p>Table continued. Aldosterone antagonists: eplerenone 25 mg daily to 50 mg daily; spironolactone 12.5-25 mg daily to 25-50 mg daily. SGLT2 inhibitors: dapagliflozin 10 mg daily; empagliflozin 10 mg daily. Vasodilators: hydralazine 25 mg three times daily to 75 mg three times daily; isosorbide dinitrate 20 mg three times daily to 40 mg three times daily; fixed-dose isosorbide dinitrate/hydralazine 20 mg/37.5 mg (1 tab) three times daily to 2 tabs three times daily. Ivabradine 2.5-5 mg twice daily, titrated to a heart rate of 50-60 (max 7.5 mg twice daily). Footnote: digoxin is still indicated for HFrEF.</p>",
        why: "<p>SGLT2 inhibitors are a <b>single 10 mg daily dose</b> with no titration. Ivabradine is titrated to a <b>heart rate of 50-60</b>.</p>",
        q: [
          Q("What dose of dapagliflozin is used for HF?", "10 mg daily", ["100 mg daily", "1 mg daily", "10 mg three times daily"], "SGLT2 inhibitors are 10 mg daily without titration."),
          Q("To what heart rate is ivabradine titrated?", "50-60 bpm", ["80-90 bpm", "100-110 bpm", "30-40 bpm"], "The table says titrate to a heart rate of 50-60.")
        ]
      }),
      S(140, "My heart failure medications", {
        pic: "<p>A blank patient handout \"My Heart Failure Medications\": patient name, cardiologist, primary care, and a table with rows ACE-inhibitor or ARB, beta blocker, diuretic, aldosterone antagonist, digoxin, hydralazine/isosorbide, Entresto and columns drug name, dose and directions, other.</p>",
        why: "<p>A wallet list for the patient: one row per HF drug class, so they (and every provider) know exactly what they take.</p>",
        q: [
          Q("What is the purpose of the 'My Heart Failure Medications' handout?", "To give the patient one list of their HF drugs and doses", ["To diagnose HF", "To bill insurance", "To schedule a cath"], "The handout lists each HF drug class with name, dose and directions.")
        ]
      })
    ],
    review: [
      Q("A patient on max-dose lisinopril still has NYHA II HFrEF. You switch to Entresto. When can he take the first dose?", "After a 3-day washout from the ACEi", ["Immediately", "After 3 weeks", "Never"], "Entresto needs a 3-day ACEi washout to lower angioedema risk."),
      Q("An HFrEF patient on full therapy has a resting HR of 82 in sinus rhythm. Which drug lowers mortality by slowing the SA node?", "Ivabradine", ["Digoxin", "Milrinone", "Diltiazem"], "Ivabradine lowers mortality when HR stays over 75."),
      Q("An HFrEF patient without diabetes asks why he is on Farxiga. What do you say?", "It lowers HF death and progression even without diabetes", ["It is only for sugar", "It raises EF directly", "It replaces his diuretic"], "DAPA-HF showed benefit with or without DM."),
      Q("An HF patient on digoxin has nausea, confusion and yellow vision. What is it?", "Digoxin toxicity", ["Viral gastroenteritis", "Stroke", "Hypoglycemia"], "GI and neuro symptoms are digoxin toxicity."),
      Q("An HFrEF patient with AF and persistent symptoms on full therapy needs rate control. Which HF drug also helps symptoms?", "Digoxin", ["Milrinone long term", "Verapamil", "Flecainide"], "Digoxin gives rate control and symptom relief in HF with AF.")
    ]
  });

  /* ---------------------------------------------------------------- LO 11-12 */
  los.push({
    id: "lo12", label: "LO 11-12", title: "Follow-up, disease management and cardiac rehab",
    objective: "Educate a patient on non-drug treatment. Provide education on the role and impact of cardiac rehab on a heart failure patient.",
    slides: [
      S(141, "Regular follow-up", {
        why: "<p>Follow up every <b>3-6 months</b>: check <b>medication and water/salt compliance</b>, <b>weight</b>, changes in <b>exercise tolerance</b>, and encourage calls about changes at home.</p>",
        q: [
          Q("How often should stable HF patients be followed up?", "Every 3-6 months", ["Every 2-3 years", "Every day", "Only when hospitalized"], "Regular follow-up is every 3-6 months."),
          Q("Which home change should HF patients report between visits?", "Changes in weight or exercise tolerance", ["Hair color", "Shoe size", "Favorite food"], "Weight and exercise tolerance changes signal worsening HF.")
        ]
      }),
      S(142, "Disease management programs", {
        why: "<p>Programs include <b>home health</b>, <b>visiting nurses</b> and <b>cardiac rehab</b>, combining treatment, complication prevention and <b>education</b> (symptoms, meds, diet, exercise). Patients have <b>different support and resources</b>, so ask about them at visits.</p>",
        q: [
          Q("Which services are part of HF disease management programs?", "Home health, visiting nurses and cardiac rehab", ["Only hospital admissions", "Only surgery", "Only telemetry"], "The slide lists home health, visiting nurses and cardiac rehab."),
          Q("Why discuss support and resources with each HF patient?", "Patients have differing amounts of support and resources", ["To bill more", "Because all patients have equal support", "To skip education"], "Plans must fit what support each patient actually has.")
        ]
      }),
      S(143, "Cardiac rehab: what it includes", {
        why: "<p>A <b>medically supervised</b> program that improves <b>quality of life and mortality</b>. It includes a <b>tailored exercise program</b>, <b>HF education</b>, help <b>returning to work</b>, <b>diet and risk-factor counseling</b>, and <b>medication counseling</b>.</p>",
        q: [
          Q("What two outcomes does cardiac rehab improve?", "Quality of life and mortality", ["Only appearance", "Only cholesterol", "Neither"], "The slide says rehab improves both quality of life and mortality."),
          Q("Which of these is part of cardiac rehab?", "Counseling on medications and risk factors", ["Daily IV inotropes", "Cardiac surgery", "Dialysis"], "Rehab includes counseling on meds, diet and risk factors.")
        ]
      }),
      S(144, "Cardiac rehab: access", {
        why: "<p>Coverage depends on insurance: <b>Medicare pays for at least one round</b> if the patient qualifies; private insurance may not. It takes <b>multiple visits at least weekly</b>, so <b>transportation and time</b> are real barriers.</p>",
        q: [
          Q("Does Medicare pay for cardiac rehab?", "Yes, at least one round for qualifying patients", ["Never", "Only for children", "Only after transplant"], "Medicare covers at least one round pending qualifying factors."),
          Q("What practical barrier limits cardiac rehab attendance?", "Frequent visits and transportation", ["It is a one-day program", "It requires surgery", "It is only online"], "Multiple weekly visits can be hard to attend or get transport to.")
        ]
      })
    ],
    review: [
      Q("An HF patient asks what cardiac rehab will do for him. What do you tell him?", "Supervised exercise and education that improve quality of life and survival", ["It is only for after surgery", "It replaces his medications", "It has no proven benefit"], "Cardiac rehab improves quality of life and mortality."),
      Q("A rural HF patient without a car is referred to rehab 3 times a week. What barrier should you address?", "Transportation", ["Her EF", "Her BNP", "Her potassium"], "Accessibility, including transport, limits rehab attendance."),
      Q("A stable HF patient sees you today. When should she come back if nothing changes?", "In 3-6 months", ["In 3-5 years", "Tomorrow", "Never"], "Routine HF follow-up is every 3-6 months.")
    ]
  });

  /* ---------------------------------------------------------------- stages A-B */
  los.push({
    id: "stab", label: "LO 9 & 13", title: "Treatment by stage: A and B",
    objective: "Apply the AHA stages to a patient and choose stage-specific treatment (stages A and B).",
    slides: [
      S(145, "Stage A goals", {
        why: "<p><b>Stage A</b>: high risk, no structure or symptoms. Goals: <b>heart-healthy lifestyle</b>, <b>prevent vascular and coronary disease</b>, <b>prevent LV structural abnormalities</b>.</p>",
        q: [
          Q("What are the goals of stage A HF treatment?", "Healthy lifestyle and preventing vascular disease and LV changes", ["Control congestion with IV diuretics", "Plan end-of-life care", "Place an LVAD"], "Stage A focuses on prevention.")
        ]
      }),
      S(146, "Stage A treatment", {
        why: "<p><b>Quit smoking</b>, lose weight, exercise, <b>avoid cardiotoxins</b> (alcohol, illegal drugs), <b>treat HTN (ACEi/ARB)</b>, <b>treat dyslipidemia (statin)</b>, and manage CAD, DM, HTN and AF.</p>",
        q: [
          Q("Which antihypertensives does the deck use to treat HTN in stage A?", "ACEi or ARB", ["Beta blocker first", "Hydralazine", "Digoxin"], "Stage A treats HTN with ACEi/ARB."),
          Q("Which drug treats dyslipidemia in stage A?", "A statin", ["Niacin only", "Digoxin", "Spironolactone"], "Stage A treats dyslipidemia with a statin.")
        ]
      }),
      S(147, "Stage B goals", {
        why: "<p><b>Stage B</b>: structural disease, no symptoms. Goals: <b>prevent HF symptoms</b> and <b>prevent further remodeling</b>.</p>",
        q: [
          Q("What are the goals of stage B HF treatment?", "Prevent symptoms and further remodeling", ["Relieve symptoms at rest", "Hospice", "Treat cardiogenic shock"], "Stage B aims to prevent symptoms and remodeling.")
        ]
      }),
      S(148, "Stage B treatment", {
        why: "<p>Stage A measures plus antihypertensives (<b>start low, go slow</b>): <b>ACEi first line</b>, or <b>ARB</b> if ACEi cough; <b>beta blocker</b> as adjunctive 2nd line for persistent HTN. <b>Cardiology referral</b> to screen for CAD and valve disease (discuss surgery), and an <b>ICD</b> if indicated (ventricular arrhythmia history).</p>",
        q: [
          Q("What is the first-line antihypertensive in stage B?", "ACE inhibitor", ["Beta blocker", "Hydralazine", "Loop diuretic"], "ACEi is the 1st line agent in stage B."),
          Q("What role do beta blockers play in stage B on the slide?", "Adjunctive second-line for persistent hypertension", ["First line for everyone", "Contraindicated", "Only for diuresis"], "Beta blockers are added if HTN persists."),
          Q("Why refer a stage B patient to cardiology?", "To screen for CAD and valve disease", ["To start hospice", "To place an LVAD", "To stop all medications"], "The slide calls for a cardiology referral to screen for CAD and valve disease.")
        ]
      }),
      S(149, "Implantable cardioverter-defibrillator", {
        pic: "<p>A drawing of an implantable defibrillator under the skin of the upper chest with leads (electrodes) in the right atrium and ventricle.</p>",
        why: "<p>HF carries a high risk of <b>VF and VT</b>, so some patients get an <b>ICD</b> to <b>prevent sudden cardiac death</b>. It monitors the rhythm, can <b>pace</b>, and <b>shocks</b> lethal arrhythmias.</p>",
        q: [
          Q("Why do some HF patients get an ICD?", "To prevent sudden cardiac death from VT or VF", ["To lower BP", "To measure BNP", "To diurese"], "ICDs treat lethal ventricular arrhythmias."),
          Q("What can an ICD do besides shock?", "Pace the heart", ["Pump blood", "Deliver diuretics", "Measure cholesterol"], "The device monitors rhythm and can pace and shock.")
        ]
      })
    ],
    review: [
      Q("A 52-year-old smoker with hypertension and a normal echo asks how to avoid heart failure. Which stage and plan?", "Stage A: quit smoking, ACEi/ARB for HTN, statin if needed", ["Stage C: loop diuretic", "Stage D: transplant", "Stage B: ICD for everyone"], "Risk factors without structure is stage A, treated with prevention."),
      Q("A man with LVH and no symptoms has a BP of 150/95 on lisinopril. What can be added?", "A beta blocker", ["Digoxin", "Milrinone", "An NSAID"], "In stage B, beta blockers are adjunctive for persistent HTN."),
      Q("A stage B patient on an ACEi develops a dry cough. What is the alternative?", "An ARB", ["A second ACEi", "Digoxin", "Nothing"], "ARBs are the alternative first-line agent for ACEi cough.")
    ]
  });

  /* ---------------------------------------------------------------- stage C */
  los.push({
    id: "stc", label: "LO 8, 9 & 13", title: "Treatment by stage: C (HFpEF and HFrEF)",
    objective: "Choose stage C treatment for HFpEF and HFrEF.",
    slides: [
      S(150, "Stage C goals", {
        why: "<p><b>Stage C</b>: structural disease with symptoms. Goals: <b>control symptoms</b>, improve <b>quality of life</b>, <b>prevent hospitalization</b> and <b>prevent mortality</b>.</p>",
        q: [
          Q("What are the four goals of stage C treatment?", "Control symptoms, improve QOL, prevent hospitalization and death", ["Prevention only", "End-of-life care only", "Diagnosis only"], "Stage C goals cover symptoms, QOL, hospitalization and mortality.")
        ]
      }),
      S(151, "HFpEF stage C: diuretics", {
        why: "<p>HFpEF: <b>diuretics for volume overload</b> (potassium-sparing, thiazide, loop). <b>ACEi, ARB, ARNI and BB have shown no mortality benefit in HFpEF</b>.</p>",
        q: [
          Q("Do ACEi, ARB, ARNI or beta blockers lower mortality in HFpEF?", "No, they have shown no mortality benefit", ["Yes, all of them", "Only beta blockers", "Only ARNI"], "The slide says they have shown no mortality benefit in HFpEF."),
          Q("What do diuretics do in HFpEF stage C?", "Relieve volume overload symptoms", ["Lower mortality", "Raise EF", "Cure stiffness"], "Diuretics give symptomatic relief of overload.")
        ]
      }),
      S(152, "HFpEF: careful with diuretics", {
        why: "<p>HFpEF is a <b>filling problem</b>. Too much diuresis drops <b>preload</b>, so there's too little EDV and <b>CO falls sharply</b>. Over-diuresis: <b>lightheadedness, dizziness, near syncope, syncope</b>, fatigue, and <b>worse renal function</b>.</p>",
        q: [
          Q("Why can over-diuresis drop cardiac output in HFpEF?", "HFpEF depends on preload to fill a stiff ventricle", ["It raises afterload", "It speeds the heart", "It lowers EF"], "Too little preload leaves the stiff ventricle underfilled."),
          Q("Which symptoms suggest over-diuresis in HFpEF?", "Lightheadedness, near syncope and worse kidney function", ["Crackles and edema", "Weight gain", "JVD"], "Over-diuresis causes dizziness, syncope, fatigue and renal decline.")
        ]
      }),
      S(153, "HFpEF: which diuretic", {
        why: "<p>Because of that risk, <b>potassium-sparing diuretics are preferred</b> in HFpEF. If K won't allow it, use <b>low-dose loops or thiazides with close monitoring</b>.</p>",
        q: [
          Q("Which diuretic type is preferred in HFpEF?", "Potassium-sparing", ["High-dose loop", "Osmotic", "Carbonic anhydrase inhibitor"], "Potassium-sparing diuretics are preferred in HFpEF."),
          Q("If an HFpEF patient's potassium is too high for spironolactone, what is used?", "Low-dose loop or thiazide with close monitoring", ["High-dose IV loop", "No diuretic ever", "Amiloride"], "Low-dose loops or thiazides with close monitoring are the fallback.")
        ]
      }),
      S(154, "HFpEF: blood pressure control", {
        why: "<p>Most HFpEF patients take an <b>ACEi or ARB</b> because HTN worsens their symptoms. Diastolic function improves with <b>lower BP regardless of which drug</b>.</p>",
        q: [
          Q("Why are most HFpEF patients on an ACEi or ARB?", "Hypertension worsens their symptoms", ["They lower HFpEF mortality", "They raise EF", "They cure stiffness"], "BP control helps HFpEF symptoms."),
          Q("What improves diastolic function in HFpEF regardless of the drug used?", "Lowering blood pressure", ["Raising heart rate", "Adding digoxin", "More salt"], "Improved diastolic function tracks lower BP, whatever the agent.")
        ]
      }),
      S(155, "HFpEF: avoid tachycardia", {
        why: "<p><b>Tachycardia</b> raises O₂ demand and cuts <b>coronary perfusion time</b> → ischemia even without CAD, and it <b>shortens diastolic filling</b>.</p>",
        q: [
          Q("How does tachycardia cause ischemia in HFpEF even without CAD?", "It raises O2 demand and shortens coronary perfusion time", ["It dilates the coronaries", "It lowers O2 demand", "It raises EF"], "More demand plus less perfusion time leads to ischemia."),
          Q("What does tachycardia do to diastolic filling time?", "Decreases it", ["Increases it", "No change", "Makes it infinite"], "Faster rates shorten filling.")
        ]
      }),
      S(156, "HFpEF: keep atrial conduction", {
        why: "<p>Keep <b>normal atrial conduction</b> (the atrial kick matters to a stiff ventricle). AF or flutter → <b>cardioversion or ablation</b>. A <b>pacemaker</b> for AV synchrony or <b>chronotropic incompetence</b>.</p>",
        q: [
          Q("What should an HFpEF patient with atrial fibrillation undergo?", "Cardioversion or ablation", ["Nothing", "Digoxin only", "Milrinone"], "The slide says AF/flutter should get cardioversion or ablation."),
          Q("When does an HFpEF patient need a pacemaker?", "For AV synchrony or chronotropic incompetence", ["For any tachycardia", "For high BNP", "For hypertension"], "A pacemaker ensures AV synchrony or treats chronotropic incompetence.")
        ]
      }),
      S(157, "HFrEF stage C: nonpharmacologic", {
        why: "<p>HFrEF lifestyle: <b>low sodium</b> and less fluid, quit smoking, <b>tight glucose control</b>, exercise (<b>cardiac rehab</b>), and a <b>sleep study for OSA</b>.</p>",
        q: [
          Q("Which sleep evaluation is on the stage C HFrEF lifestyle list?", "Sleep lab for obstructive sleep apnea", ["Polysomnography for narcolepsy only", "None", "EEG"], "Stage C HFrEF includes a sleep lab for OSA."),
          Q("Which exercise program is on the stage C HFrEF list?", "Cardiac rehabilitation", ["Marathon training", "Bed rest", "No exercise"], "Exercise via cardiac rehab is listed.")
        ]
      }),
      S(158, "HFrEF stage C: drugs and devices", {
        why: "<p>Core: <b>diuretic + RAAS inhibitor (ACEi, ARB or ARNI) + beta blocker</b>. 2nd line add-ons: <b>aldosterone antagonist</b>, <b>ivabradine</b>, <b>dapagliflozin</b>, <b>hydralazine + nitrate</b>, <b>digoxin</b>. Plus cardiac rehab, <b>ICD</b>, revascularization, valve surgery, <b>cardiac resynchronization therapy</b>.</p>",
        q: [
          Q("What is the core drug regimen for stage C HFrEF?", "Diuretic + RAAS inhibitor + beta blocker", ["Digoxin + milrinone", "Statin + aspirin only", "Nitrate + CCB"], "Stage C HFrEF starts with a diuretic, ACEi/ARB/ARNI and BB."),
          Q("Which of these is a second-line add-on in stage C HFrEF?", "Dapagliflozin", ["Verapamil", "NSAIDs", "Milrinone long term"], "Dapagliflozin is on the 2nd line list."),
          Q("Which device therapy resynchronizes the ventricles in stage C HFrEF?", "Cardiac resynchronization therapy", ["IABP", "TR band", "Holter"], "CRT is listed among stage C options.")
        ]
      }),
      S(159, "AHA stages chart", {
        pic: "<p>The ACC/AHA chart \"At risk for heart failure → Heart failure\". Stage A (at high risk, no structural disease or symptoms; HTN, atherosclerotic disease, DM, obesity, metabolic syndrome, cardiotoxins, family history of cardiomyopathy): goals heart-healthy lifestyle, prevent vascular and coronary disease and LV abnormalities; drugs ACEi or ARB, statins. Stage B (structural disease without symptoms; prior MI, LV remodeling, low EF, asymptomatic valve disease): goals prevent symptoms and remodeling; drugs ACEi/ARB, beta blockers; in selected patients ICD, revascularization or valve surgery. Stage C (structural disease with prior or current symptoms), split into HFpEF (control symptoms, QOL, prevent hospitalization and death; diuretics; follow guidelines for comorbidities) and HFrEF (diuretics, ACEi/ARB, ARNI, beta blockers, aldosterone antagonists; selected patients hydralazine/isosorbide dinitrate, ACEi and ARB, ivabradine, digoxin; CRT, ICD, revascularization or valve surgery). Stage D (refractory HF): advanced care, heart transplant, chronic inotropes, mechanical circulatory support, experimental surgery or drugs, palliative care and hospice, ICD deactivation.</p>",
        why: "<p>The whole treatment ladder on one page: <b>A</b> prevent → <b>B</b> stop remodeling → <b>C</b> split by EF, treat symptoms and (in HFrEF) mortality → <b>D</b> advanced therapies or palliative care.</p>",
        q: [
          Q("On the AHA chart, where does treatment split into HFpEF and HFrEF?", "Stage C", ["Stage A", "Stage B", "Stage D"], "The chart splits stage C into HFpEF and HFrEF therapy.")
        ]
      })
    ],
    review: [
      Q("An 80-year-old with HFpEF on furosemide 80 mg BID becomes dizzy and faints, with a rising creatinine. What happened?", "Over-diuresis dropped her preload", ["She needs more diuretic", "Her EF fell", "She has a new valve leak"], "HFpEF depends on preload, and over-diuresis drops output and kidney perfusion."),
      Q("A patient with HFpEF and volume overload has normal potassium. Which diuretic is preferred?", "Spironolactone", ["High-dose IV furosemide", "Mannitol", "Acetazolamide"], "Potassium-sparing diuretics are preferred in HFpEF."),
      Q("An HFrEF patient has symptoms and is on nothing yet. What do you start?", "Diuretic + ACEi/ARB/ARNI + beta blocker", ["Digoxin alone", "Milrinone", "A CCB"], "The core stage C HFrEF regimen is those three."),
      Q("A patient with HFpEF develops AF with RVR. What is the long-term goal?", "Restore normal atrial rhythm with cardioversion or ablation", ["Leave AF alone", "Start milrinone", "Stop all BP meds"], "HFpEF relies on the atrial kick, so rhythm should be restored."),
      Q("Which HF type has drugs proven to lower mortality: HFrEF or HFpEF?", "HFrEF", ["HFpEF", "Both equally", "Neither"], "ACEi, ARB, ARNI and BB have not shown mortality benefit in HFpEF.")
    ]
  });

  /* ---------------------------------------------------------------- stage D */
  los.push({
    id: "std", label: "LO 9 & 13", title: "Treatment by stage: D (refractory HF)",
    objective: "Choose stage D treatment: inotropes, devices, transplant and end-of-life care.",
    slides: [
      S(160, "Stage D goals", {
        why: "<p><b>Stage D</b>: refractory symptoms. Goals: <b>control symptoms</b>, <b>improve quality of life</b>, <b>reduce readmissions</b>, <b>establish end-of-life goals</b>.</p>",
        q: [
          Q("Which goal is unique to stage D HF?", "Establishing end-of-life goals", ["Preventing CAD", "Preventing remodeling", "Starting a statin"], "Stage D adds end-of-life goals.")
        ]
      }),
      S(161, "Stage D: digoxin", {
        why: "<p>All of stages A-C <b>except beta blockers</b>, plus maybe an <b>inotrope: digoxin</b> for rate control and contractility. <b>No mortality benefit</b>; ↓ symptoms and hospitalizations. <b>HFrEF only, not HFpEF</b>.</p>",
        q: [
          Q("Which stage A-C drug class is dropped in stage D?", "Beta blockers", ["Diuretics", "ACE inhibitors", "Statins"], "Stage D continues A-C measures except beta blockers."),
          Q("In stage D, is digoxin used for HFrEF, HFpEF or both?", "HFrEF only", ["HFpEF only", "Both", "Neither"], "Digoxin is only considered for HFrEF, not HFpEF.")
        ]
      }),
      S(162, "Stage D: devices", {
        why: "<p><b>ICD</b>, <b>cardioversion</b>, <b>CardioMEMS</b> (implanted pulmonary artery pressure sensor, standard teaching), <b>mechanical circulatory support</b>, <b>ultrafiltration/aquapheresis/dialysis</b>, <b>IABP/LVAD</b>.</p>",
        q: [
          Q("Which fluid-removal therapies are stage D options?", "Ultrafiltration, aquapheresis or dialysis", ["Oral fluid loading", "Blood transfusion", "Plasmapheresis for lipids"], "The slide lists ultrafiltration, aquapheresis and dialysis."),
          Q("Which stage D device is an implanted pressure sensor for monitoring?", "CardioMEMS", ["TR band", "Mynx", "Holter"], "CardioMEMS is a stage D device; it senses pulmonary artery pressure (standard teaching).")
        ]
      }),
      S(163, "IABP and LVAD", {
        why: "<p><b>IABP</b>: balloon in the aorta <b>inflates in diastole</b>, <b>deflates at the start of systole</b> → big <b>drop in afterload</b>. <b>LVAD</b>: blood is collected and pumped back into the circulation; used as a <b>bridge to transplant</b> or <b>long-term therapy</b>.</p>",
        q: [
          Q("When does an intra-aortic balloon pump inflate?", "In diastole", ["In systole", "Continuously", "Only during exercise"], "The IABP inflates with diastole and deflates at the start of systole."),
          Q("What does an IABP mainly reduce?", "Afterload", ["Preload only", "Heart rate", "Potassium"], "Deflating at the start of systole significantly decreases afterload."),
          Q("What are the two uses of an LVAD?", "Bridge to transplant or long-term therapy", ["Diagnosing HF or measuring BNP", "Pacing or shocking", "Dialysis or plasmapheresis"], "LVADs bridge to transplant or serve as long-term therapy.")
        ]
      }),
      S(164, "Stage D: transplant, research and hospice", {
        why: "<p><b>Heart transplant</b>, <b>research therapies</b>, <b>hospice</b>. In palliative or hospice care, <b>consider ICD deactivation</b> so the patient isn't shocked at the end of life.</p>",
        q: [
          Q("What device step should be considered when an HF patient enters hospice?", "ICD deactivation", ["Pacemaker removal surgery", "Adding a second ICD", "Starting milrinone"], "End-of-life care should consider ICD deactivation."),
          Q("Which care option is listed for stage D along with transplant and research therapies?", "Hospice", ["Stage A lifestyle only", "No care", "Outpatient stress testing"], "Hospice is a stage D option.")
        ]
      }),
      S(165, "Heart transplant", {
        why: "<p>Consider <b>transplant</b> when a patient can't be weaned from acute management or has severe impairment despite good outpatient therapy. Indication: <b>younger</b> patients with <b>intractable HF</b> and a <b>life expectancy under 6 months</b>.</p>",
        q: [
          Q("What life expectancy is part of the heart transplant indication?", "Less than 6 months", ["Less than 10 years", "More than 20 years", "Less than 1 day"], "Transplant is for younger patients with intractable HF and life expectancy under 6 months."),
          Q("Which patients are the best heart transplant candidates?", "Younger patients with intractable HF", ["Anyone over 95", "Stage A patients", "Patients who refuse treatment"], "The slide specifies younger patients with intractable HF.")
        ]
      })
    ],
    review: [
      Q("A 45-year-old with HFrEF on maximal therapy is short of breath at rest, hospitalized monthly. Which stage, and what options?", "Stage D: LVAD or transplant evaluation", ["Stage B: add a statin", "Stage A: lifestyle only", "Stage C: no changes"], "Refractory symptoms at rest are stage D, where advanced therapies apply."),
      Q("An 88-year-old with stage D HF chooses comfort care and has an ICD. What should you discuss?", "Turning off the ICD", ["Upgrading the ICD", "Starting a beta blocker", "Heart transplant"], "ICD deactivation should be considered in hospice."),
      Q("A stage D HF patient is waiting for a heart. What device keeps him alive until then?", "LVAD as a bridge to transplant", ["Holter", "TR band", "ICD alone"], "LVADs serve as a bridge to transplant.")
    ]
  });

  /* ---------------------------------------------------------------- decompensated 1 */
  los.push({
    id: "adhf1", label: "Decompensated HF", title: "Decompensated HF: causes and presentation",
    objective: "Recognize the causes and presentation of acute decompensated heart failure.",
    slides: [
      S(166, "Section: Decompensated heart failure", {
        why: "<p>Section title. The patient who arrives in the ED drowning: why it happened, how it looks, how to work it up, treat it and decide where they go.</p>"
      }),
      S(167, "Causes of acute heart failure", {
        why: "<p><b>Noncompliance</b>: <b>uncontrolled HTN*</b>, missed meds, <b>excess fluid or salt</b>. <b>Renal failure</b> (especially <b>missed dialysis</b>). <b>Substances</b>: cocaine, meth, alcohol. <b>Iatrogenic</b>: <b>overhydration in hospital*</b>, new <b>negative inotropes (CCB, BB)</b>, <b>salt-retaining drugs (NSAIDs, steroids)</b>, a new antiarrhythmic (<b>amiodarone</b>).</p>",
        q: [
          Q("Which noncompliance cause of acute HF is starred on the slide?", "Uncontrolled hypertension", ["Missed statin", "Skipped vaccine", "Missed vitamin"], "Uncontrolled HTN is starred."),
          Q("Which drugs can trigger decompensation by retaining salt?", "NSAIDs and steroids", ["Statins and aspirin", "Loop diuretics", "SGLT2 inhibitors"], "NSAIDs and steroids are salt-retaining drugs."),
          Q("Which drug classes can trigger decompensation as negative inotropes?", "Calcium channel blockers and beta blockers", ["Loop diuretics", "Statins", "ACE inhibitors"], "Recently added CCBs and BBs are listed."),
          Q("Which iatrogenic cause of acute HF in the hospital is starred?", "Overhydration", ["Too little IV fluid", "Early ambulation", "Low-salt diet"], "Overhydration during a hospital stay is starred.")
        ]
      }),
      S(168, "Prognosis after hospitalization", {
        why: "<p>HF has a poor prognosis. A <b>hospitalization marks a point of deterioration</b>. Hospitalized HF patients have a <b>5-year mortality of 60%</b>.</p>",
        q: [
          Q("What is the 5-year mortality of hospitalized HF patients?", "60%", ["6%", "16%", "96%"], "Hospitalized HF patients have a 60% 5-year mortality."),
          Q("What does an HF hospitalization mark?", "A point of deterioration", ["A cure", "A normal event without meaning", "Improvement"], "Hospitalization marks deterioration in the patient's HF.")
        ]
      }),
      S(169, "Presentation: breathing and appearance", {
        pic: "<p>A drawing comparing a normal heart and an enlarged heart, with a patient sitting up with fluid surrounding the lungs and swollen, cyanotic feet.</p>",
        why: "<p><b>Cheyne-Stokes respiration</b> (deep breaths then apnea), <b>sitting up gasping</b>, <b>cool and clammy</b>, <b>crackles</b>.</p>",
        q: [
          Q("What is Cheyne-Stokes respiration?", "Deep breaths followed by a period of apnea", ["Rapid shallow breathing only", "Gasping only at night", "Pursed-lip breathing"], "Cheyne-Stokes is cycles of deep breaths then apnea."),
          Q("How does a decompensated HF patient typically look?", "Sitting up, gasping, cool and clammy", ["Lying flat and warm", "Calm and pink", "Febrile and flushed"], "They sit up gasping and look cool and clammy.")
        ]
      }),
      S(170, "Presentation: why they come in", {
        pic: "<p>The same drawing of an enlarged heart and a patient sitting up with fluid around the lungs.</p>",
        why: "<p>Weight gain, ↓ exercise tolerance, exertional dyspnea, leg swelling, and <b>acute respiratory distress from pulmonary edema ± hypoxia</b>: the <b>most common reason they come to the ED</b>.</p>",
        q: [
          Q("What is the most common reason decompensated HF patients come to the ED?", "Acute respiratory distress from pulmonary edema", ["Chest pain", "Leg swelling alone", "Palpitations"], "Pulmonary edema with respiratory distress is the most common reason."),
          Q("Which weight change comes with decompensation?", "Weight gain", ["Weight loss", "No change", "Rapid muscle gain"], "Fluid retention causes weight gain.")
        ]
      }),
      S(171, "Presentation: the rest of the body", {
        why: "<p><b>Cyanosis</b>; <b>diaphoresis and tachycardia</b> (SNS); fatigue and weakness worsening through the day; <b>confusion, anxiety, restlessness</b> (low brain O₂ plus fear of breathlessness); <b>ascites</b>; peripheral edema.</p>",
        q: [
          Q("What causes diaphoresis and tachycardia in decompensated HF?", "Sympathetic nervous system activation", ["Fever", "Hypoglycemia", "Thyroid storm"], "The slide credits the SNS."),
          Q("Why is the decompensated HF patient confused and restless?", "Low oxygen to the brain and anxiety about dyspnea", ["Alcohol withdrawal always", "Stroke always", "Low sodium always"], "The slide credits inadequate brain oxygen and anxiety.")
        ]
      }),
      S(172, "Presentation: heart sounds and rhythm", {
        why: "<p><b>S3, S4, MR</b> (hard to hear in a loud ED), <b>arrhythmias (AF)</b>, and <b>higher risk of sudden cardiac arrest</b> (VT, VF).</p>",
        q: [
          Q("Which arrhythmia does the slide name in decompensated HF?", "Atrial fibrillation", ["Sinus bradycardia", "WPW", "First-degree block"], "AF is the named arrhythmia."),
          Q("Why can extra heart sounds be missed in decompensated HF?", "They are hard to hear in the emergency department", ["They never occur", "They only occur in children", "They are silent"], "The slide notes they are difficult to hear in the ED.")
        ]
      }),
      S(173, "History: sensitivity and specificity", {
        why: "<p>No single history finding is good enough. <b>A history of HF</b> is the <b>most useful</b> (sensitivity <b>60%</b>, specificity <b>90%</b>). Clinical judgment: sensitivity 61%, specificity 86%. Risk factors: HTN, DM, valve disease, old age, obesity.</p>",
        q: [
          Q("What is the most useful historical finding for acute HF?", "A prior history of heart failure", ["Smoking", "Cough", "Leg cramps"], "A history of HF is the most useful historical parameter."),
          Q("What are the sensitivity and specificity of a prior HF history for acute HF?", "60% and 90%", ["90% and 60%", "100% and 100%", "10% and 20%"], "Sensitivity 60%, specificity 90%.")
        ]
      }),
      S(174, "Acute on chronic or new onset", {
        pic: "<p>An EKG with ST elevation in the precordial leads and a CT angiogram of the chest with arrows on pulmonary artery clots.</p>",
        why: "<p>Ask: <b>acute on chronic</b> or <b>new onset</b>? New onset causes include <b>MI</b> (manage ACS with cath) and <b>PE causing cor pulmonale</b> (imaging, anticoagulation, manage acute right HF).</p>",
        q: [
          Q("A new-onset HF patient has ST elevation. What is the management?", "Treat ACS with cardiac catheterization", ["Diuretics only", "Discharge home", "Start digoxin"], "New-onset HF from MI is managed as ACS with cath."),
          Q("Which clot causes new-onset right heart failure?", "Pulmonary embolus", ["DVT in the arm only", "Left atrial appendage clot", "Portal vein thrombosis"], "PE causing cor pulmonale is a new-onset cause.")
        ]
      })
    ],
    review: [
      Q("An HF patient ate ham, soup and chips at a holiday party and now has orthopnea. What caused the decompensation?", "Excess salt intake", ["A new statin", "Exercise", "Too little fluid"], "Dietary noncompliance with salt is a classic trigger."),
      Q("A dialysis patient with HF skipped two sessions and arrives in pulmonary edema. What caused it?", "Missed dialysis", ["Over-diuresis", "Hypokalemia", "Beta blocker"], "Renal failure, especially missed dialysis, causes acute HF."),
      Q("An HF patient started ibuprofen for knee pain and now has edema and dyspnea. Why?", "NSAIDs retain salt and water", ["Ibuprofen raises EF", "Ibuprofen causes bradycardia", "Coincidence"], "NSAIDs are salt-retaining and can trigger decompensation."),
      Q("A patient with stable HF was started on verapamil for AF and decompensated. Why?", "Verapamil is a negative inotrope", ["Verapamil is a diuretic", "Verapamil lowers afterload too much", "Verapamil raises BNP directly"], "Newly added negative inotropes like CCBs trigger decompensation.")
    ]
  });

  /* ---------------------------------------------------------------- decompensated 2 */
  los.push({
    id: "adhf2", label: "Decompensated HF", title: "Decompensated HF: diagnostics",
    objective: "Choose the ED diagnostics for acute heart failure.",
    slides: [
      S(175, "No single ED test", {
        why: "<p>No single ED test diagnoses acute HF: it's a <b>clinical diagnosis</b>. When the clinician is <b>80% confident</b>, <b>clinical gestalt outperforms</b> the ED tests. Tests help with undifferentiated dyspnea or confirm suspicion.</p>",
        q: [
          Q("When does clinical gestalt outperform ED tests for acute HF?", "When the clinician is 80% confident", ["Never", "Only with a normal BNP", "Only in children"], "At 80% confidence, gestalt beats the available tests."),
          Q("What are ED tests mostly used for in suspected acute HF?", "Undifferentiated dyspnea or confirming suspicion", ["Replacing the exam", "Choosing a statin", "Staging cancer"], "Tests evaluate undifferentiated dyspnea or affirm suspicion.")
        ]
      }),
      S(176, "Chest X-ray and lung ultrasound", {
        why: "<p><b>Don't delay treatment</b> for labs or imaging; treat respiratory distress now. Most common CXR findings: <b>pulmonary venous congestion</b>, <b>cardiomegaly</b>, <b>interstitial edema (Kerley lines)</b>. Their absence does <b>not</b> rule out HF: <b>20%</b> have a normal CXR on arrival. <b>Lung ultrasound</b> also helps.</p>",
        q: [
          Q("What share of acute HF patients have a normal chest X-ray on arrival?", "20%", ["0%", "80%", "100%"], "20% initially have normal-appearing chest radiographs."),
          Q("Should treatment wait for the chest X-ray in a patient in respiratory distress?", "No, treat immediately", ["Yes, always", "Only wait for BNP", "Only wait for echo"], "Labs and imaging should not delay treatment."),
          Q("Which three CXR findings are most common in acute HF?", "Venous congestion, cardiomegaly, interstitial edema", ["Pneumothorax, rib fracture, mass", "Hyperinflation, bullae, flat diaphragm", "Lobar consolidation only"], "Those are the most common acute HF CXR findings.")
        ]
      }),
      S(177, "Normal chest X-ray", {
        pic: "<p>A normal PA chest X-ray: normal heart size, clear lungs, sharp costophrenic angles.</p>",
        why: "<p>The baseline to compare: normal heart size, clear lung fields, sharp angles.</p>",
        q: [
          Q("On a normal chest X-ray, what do the costophrenic angles look like?", "Sharp", ["Blunted", "Filled with fluid", "Absent"], "A normal film has sharp costophrenic angles (standard teaching).")
        ]
      }),
      S(178, "Pulmonary edema in acute HF", {
        pic: "<p>A chest X-ray with an enlarged heart and diffuse hazy opacities spreading from both hila.</p>",
        why: "<p>Acute HF: <b>bilateral hazy opacities</b> spreading from the hila (\"bat wing\", standard teaching) with an enlarged heart.</p>",
        q: [
          Q("What does pulmonary edema look like on a chest X-ray?", "Bilateral hazy opacities spreading from the hila", ["A single round nodule", "A collapsed lung with a line", "Normal clear lungs"], "Edema shows as bilateral perihilar haziness (standard teaching).")
        ]
      }),
      S(179, "EKG in acute HF", {
        why: "<p>The EKG may show a <b>cause or trigger</b> (<b>ischemia, acute MI, dysrhythmias</b>), but <b>can't diagnose HF</b> alone. <b>Atrial fibrillation</b> has the <b>highest correlation</b> with an HF diagnosis.</p>",
        q: [
          Q("Which EKG finding has the highest correlation with an HF diagnosis?", "Atrial fibrillation", ["Sinus rhythm", "Right axis deviation", "Peaked T waves"], "AF correlates most with HF."),
          Q("Can an EKG alone diagnose acute heart failure?", "No, it shows causes or triggers", ["Yes, always", "Only with LBBB", "Only at night"], "The EKG reveals precipitants but cannot diagnose HF alone.")
        ]
      }),
      S(180, "ED labs", {
        why: "<p><b>CBC</b> (infection, anemia), <b>BMP</b> (electrolytes, kidneys), <b>proBNP</b> (undifferentiated dyspnea when uncertain), <b>LFTs</b> (liver congestion), <b>troponin</b> (ACS), <b>ABG/VBG</b>.</p>",
        q: [
          Q("What is proBNP used for in the ED?", "Evaluating undifferentiated dyspnea when uncertain", ["Diagnosing MI", "Measuring kidney function", "Checking for infection"], "proBNP helps when it's unclear whether dyspnea is cardiac."),
          Q("Why get a troponin in acute HF?", "To evaluate for ACS", ["To diagnose pneumonia", "To check potassium", "To dose diuretics"], "Troponin evaluates for acute coronary syndrome."),
          Q("Why get a CBC in acute HF?", "To look for infection or anemia", ["To measure EF", "To check sodium", "To diagnose MI"], "Infection and anemia can trigger or mimic HF.")
        ]
      })
    ],
    review: [
      Q("A dyspneic 70-year-old with crackles and JVD has a normal chest X-ray. Is HF ruled out?", "No, 20% have a normal CXR on arrival", ["Yes, completely", "Only if BNP is high", "Yes, it must be COPD"], "A normal CXR does not rule out acute HF."),
      Q("A COPD patient is short of breath and you can't tell lungs from heart. Which lab helps?", "proBNP", ["Lipase", "TSH", "Lactate only"], "proBNP helps evaluate undifferentiated dyspnea."),
      Q("A patient in severe respiratory distress with obvious HF arrives. What comes first?", "Treat the respiratory distress", ["Wait for the CXR", "Wait for the BNP", "Get an echo first"], "Management of distress must not wait for labs or imaging."),
      Q("An HF patient's EKG shows new ST elevation. What does it tell you?", "The cause may be an MI", ["It proves HF", "Nothing", "He has COPD"], "The EKG shows a precipitant such as MI.")
    ]
  });

  /* ---------------------------------------------------------------- decompensated 3 */
  los.push({
    id: "adhf3", label: "Decompensated HF", title: "Decompensated HF: treatment",
    objective: "Treat acute decompensated HF: oxygen, NIV, intubation, nitrates, loop diuretics, and what to avoid.",
    slides: [
      S(181, "First steps", {
        why: "<p><b>Monitor</b> SpO₂, vitals and rhythm. <b>Oxygen if hypoxic</b> (goal <b>SpO₂ over 95%</b>), <b>2 IVs</b>, <b>sit the patient up</b>. <b>NIV</b> as needed unless immediate intubation is required; keep airway equipment ready.</p>",
        q: [
          Q("What SpO2 goal does the deck give for decompensated HF?", "Above 95%", ["Above 80%", "Above 99% always", "Above 70%"], "The goal is SpO2 over 95%."),
          Q("How should a decompensated HF patient be positioned?", "Upright", ["Flat", "Trendelenburg", "Prone"], "Sitting upright reduces venous return and eases breathing."),
          Q("How many IV catheters should be placed in decompensated HF?", "Two", ["None", "One", "Four"], "The slide says place 2 IV catheters.")
        ]
      }),
      S(182, "Noninvasive ventilation", {
        pic: "<p>A photo of a patient in bed wearing a tight full-face CPAP/BiPAP mask.</p>",
        why: "<p><b>CPAP/BiPAP</b> raises blood oxygen and <b>reduces the need for intubation</b>. It raises <b>intrathoracic pressure</b> → less venous return → <b>lower preload</b>.</p>",
        q: [
          Q("How does CPAP/BiPAP lower preload?", "Raised intrathoracic pressure reduces venous return", ["It is a diuretic", "It blocks beta receptors", "It lowers heart rate"], "Higher intrathoracic pressure decreases venous return."),
          Q("What does NIV reduce the need for?", "Endotracheal intubation", ["Oxygen", "Diuretics", "Monitoring"], "CPAP/BiPAP reduces intubations.")
        ]
      }),
      S(183, "NIV: what it needs", {
        why: "<p>Delivered by <b>CPAP</b> or <b>BiPAP</b>. Success needs <b>close monitoring</b>, a face that allows a <b>good mask seal</b>, and <b>patient cooperation</b> (anxious patients can feel smothered).</p>",
        q: [
          Q("What patient factor can make NIV fail?", "Anxiety and poor cooperation", ["Normal facial anatomy", "Being awake", "Low BMI"], "Anxious patients can feel smothered and not cooperate."),
          Q("What two machines deliver noninvasive ventilation?", "CPAP and BiPAP", ["IABP and LVAD", "ECMO and dialysis", "Holter and event monitor"], "NIV is CPAP or BiPAP.")
        ]
      }),
      S(184, "NIV contraindications", {
        why: "<p><b>Hypotension (SBP under 90)</b>, since NIV lowers BP via intrathoracic pressure; <b>altered mental status</b>; <b>dementia</b>. NIV plus standard therapy reduces intubation and improves distress and metabolic disturbance.</p>",
        q: [
          Q("Below what systolic BP is NIV contraindicated?", "90 mmHg", ["150 mmHg", "120 mmHg", "60 mmHg"], "Hypotension under 90 is a contraindication."),
          Q("Why is NIV contraindicated in hypotension?", "It lowers BP by raising intrathoracic pressure", ["It raises BP too high", "It causes AF", "It worsens hyperkalemia"], "Raised intrathoracic pressure lowers BP further.")
        ]
      }),
      S(185, "Intubation", {
        pic: "<p>A drawing of an endotracheal tube passed through the mouth into the trachea.</p>",
        why: "<p>Intubate when: <b>SpO₂ under 80%</b>, <b>overt respiratory distress</b>, <b>altered mental status</b> (confusion, obtunded), or <b>failed NIV</b>.</p>",
        q: [
          Q("Below what oxygen saturation is intubation indicated in acute HF?", "80%", ["95%", "90%", "50%"], "SpO2 under 80% is an intubation indication."),
          Q("A patient on BiPAP is getting more tired and confused. What next?", "Intubation", ["Continue BiPAP unchanged", "Discharge", "Give a beta blocker"], "Failed NIV and altered mental status call for intubation.")
        ]
      }),
      S(186, "Vasodilators: why first", {
        why: "<p>The failing heart is <b>sensitive to afterload</b>; some get pulmonary edema at <b>SBP 150 or higher</b>. Fast <b>afterload reduction with vasodilators</b> can <b>avoid intubation</b>.</p>",
        q: [
          Q("At what systolic BP can some failing hearts develop pulmonary edema?", "150 mmHg or higher", ["90 mmHg", "60 mmHg", "250 mmHg only"], "Some patients develop edema at SBP 150 or higher."),
          Q("What can prompt vasodilator therapy avoid in acute HF?", "Intubation", ["Hospital admission always", "Any further treatment", "Oxygen"], "Prompt afterload reduction can avoid intubation.")
        ]
      }),
      S(187, "Nitroglycerin", {
        why: "<p>Short-acting, rapid-onset <b>venous and arterial dilator</b>. Lowers MAP by <b>↓ preload first</b> (veins) and at <b>high doses ↓ afterload</b> (arteries). Also <b>dilates coronaries</b>, easing ischemia. Routes: <b>IV, SL, transdermal</b>, chosen by severity.</p>",
        q: [
          Q("What does nitroglycerin lower first at low doses?", "Preload (venous dilation)", ["Afterload only", "Heart rate", "Contractility"], "NTG first lowers preload through venous dilation."),
          Q("What does nitroglycerin add at high doses?", "Afterload reduction (arterial dilation)", ["More contractility", "Bradycardia", "Diuresis"], "At high doses it also dilates arteries."),
          Q("Which three routes can nitroglycerin be given by in acute HF?", "IV, sublingual and transdermal", ["IM, rectal and inhaled", "Oral only", "Intraosseous only"], "The slide lists IV, SL and transdermal.")
        ]
      }),
      S(188, "Nitroglycerin side effects", {
        why: "<p><b>Headache</b>: usually fixed with acetaminophen. <b>Hypotension</b>: usually resolves when NTG stops; if it persists, think <b>volume depletion or RV infarct</b> and give a <b>250-500 mL saline bolus</b>.</p>",
        q: [
          Q("What usually treats a nitroglycerin headache?", "Acetaminophen", ["More nitroglycerin", "Sumatriptan", "Morphine"], "The headache usually resolves with acetaminophen."),
          Q("Hypotension persists after stopping nitroglycerin. What should you think of?", "Volume depletion or right ventricular infarct", ["Hyperkalemia", "Pneumonia", "Stroke"], "Persistent hypotension suggests volume depletion or RV infarct."),
          Q("What fluid bolus does the deck give for persistent nitrate hypotension?", "250-500 mL normal saline", ["2-3 L saline", "No fluids ever", "50 mL D5W"], "Give a 250-500 mL normal saline bolus.")
        ]
      }),
      S(189, "Nitroglycerin contraindications", {
        why: "<p><b>RV infarction</b>, <b>aortic stenosis</b>, <b>HCM</b>, <b>dehydration</b>, <b>hypoperfusion or hypotension</b>, and PDE-5 inhibitors: <b>avanafil, sildenafil or vardenafil within 24 h</b>, <b>tadalafil within 48 h</b>.</p>",
        q: [
          Q("How recently must tadalafil have been taken to contraindicate nitroglycerin?", "Within 48 hours", ["Within 2 hours", "Within 1 week", "Within 24 hours"], "Tadalafil within 48 hours is a contraindication."),
          Q("How recently must sildenafil have been taken to contraindicate nitroglycerin?", "Within 24 hours", ["Within 48 hours", "Within 1 hour only", "Within 1 month"], "Sildenafil within 24 hours is a contraindication."),
          Q("Which valve lesion contraindicates nitroglycerin?", "Aortic stenosis", ["Mitral regurgitation", "Tricuspid regurgitation", "Pulmonic regurgitation"], "Aortic stenosis is listed because these patients are preload dependent (standard teaching for the why).")
        ]
      }),
      S(190, "Loop diuretics: when", {
        why: "<p>Start diuretics <b>without delay</b> to relieve congestion (lower preload). After <b>vasodilators control the BP</b>, some patients still need diuretics. Getting BP and filling pressure down improves breathing <b>long before any diuresis</b>.</p>",
        q: [
          Q("Why does breathing improve before diuresis in acute HF?", "BP and filling pressures are controlled by vasodilators first", ["Diuresis is instant", "Oxygen cures edema", "The kidneys stop working"], "Lowering BP and filling pressure helps breathing before urine output."),
          Q("What do loop diuretics lower in acute HF?", "Preload and congestion", ["Heart rate", "Contractility", "Potassium-only levels"], "Diuretics relieve congestion and lower preload.")
        ]
      }),
      S(191, "Loop diuretics: how", {
        why: "<p>They relieve congestion. Most ED patients need <b>IV</b>: <b>bowel wall edema</b> blocks oral absorption. Dose by symptoms and prior use; <b>CKD needs higher doses</b>. Diuresis starts within <b>10-15 min</b> IV. <b>Furosemide</b> is the most used. <b>Caution</b>: loops <b>alone without NTG</b> in HF with HTN → worse renal function and <b>higher mortality</b>.</p>",
        q: [
          Q("Why are loop diuretics given IV in the ED?", "Bowel wall edema blocks oral absorption", ["IV is cheaper", "Oral loops don't exist", "IV avoids hypokalemia"], "Gut edema prevents proper GI absorption."),
          Q("How quickly does IV furosemide start diuresis?", "Within 10-15 minutes", ["Within 10-15 hours", "Within 2 days", "Instantly in 1 second"], "IV loops trigger diuresis within 10-15 minutes."),
          Q("What is the risk of giving loop diuretics alone without nitrates in hypertensive acute HF?", "Worse renal function and higher mortality", ["Bradycardia", "Hyperkalemia", "Better survival"], "Loops alone without vasodilators raise renal dysfunction and mortality."),
          Q("Which patients need higher loop diuretic doses?", "Patients with chronic renal failure", ["Young athletes", "Patients with low BMI", "Children"], "CKD requires higher dosing.")
        ]
      }),
      S(192, "Loop diuretic dosing in the ED", {
        why: "<p><b>Furosemide-naive</b>: <b>40 mg IV</b>. Already on furosemide: <b>1-2.5×</b> the total daily oral dose IV (on 40 mg PO daily → 40-100 mg IV). Usual <b>ED max 80 mg IV</b> with normal renal function, to avoid over-diuresis.</p>",
        q: [
          Q("What IV furosemide dose does the deck recommend for a furosemide-naive patient?", "40 mg", ["4 mg", "400 mg", "160 mg"], "The starting ED dose for a naive patient is 40 mg IV."),
          Q("A patient takes furosemide 40 mg PO daily. What IV dose range fits in the ED?", "40-100 mg IV", ["4-10 mg IV", "200-400 mg IV", "No diuretic"], "Give 1-2.5 times the total daily oral dose."),
          Q("What is the usual maximum ED furosemide dose with normal kidneys?", "80 mg IV", ["800 mg IV", "20 mg IV", "40 mg PO"], "The general ED maximum is 80 mg IV.")
        ]
      }),
      S(193, "What not to give in acute HF", {
        why: "<p><b>ACEi and ARB</b>: little ED data. <b>Contraindicated in acute HF</b>: <b>beta blockers</b>, <b>CCBs</b> and <b>digoxin</b>.</p>",
        q: [
          Q("Which three drug classes are contraindicated in acute heart failure?", "Beta blockers, CCBs and digoxin", ["Loops, nitrates and oxygen", "ACEi, ARB and statins", "Heparin, aspirin and oxygen"], "BB, CCB and digoxin are contraindicated in acute HF."),
          Q("What does the deck say about starting an ACEi in the ED for acute HF?", "There is little data to recommend it", ["It is first line", "It is contraindicated always", "It replaces diuretics"], "There is little data supporting ACEi or ARB in the ED.")
        ]
      }),
      S(194, "Acute HF treatment pathway", {
        pic: "<p>A 7-step table, \"Acute Heart Failure Treatment\": 1) oxygen for saturation ≥95% and sublingual nitroglycerin 0.4 mg every 5 minutes until relief or IV NTG established; hold if SBP under 100. 2) If severe dyspnea, consider NIV or intubation. 3) Start vasodilator therapy: if BP over 150/100 add IV nitroglycerin; if BP falls below 100 stop nitrates and monitor; if BP under 150/100 after SL and improved, consider transdermal nitroglycerin. 4) Start IV loop diuretic (furosemide or bumetanide) for volume overload; initiate nitrates before diuretics. 5) Assess severity/high risk: persistent altered mental status, hypoxia despite NIV, hypotension, troponin elevation, ischemic ECG changes, BUN over 43, creatinine over 2.75, tachycardia, tachypnea, or inadequate urine output. 6) Admit to ICU if high severity or risk of decompensation. 7) Determine disposition: discharge or ED observation if good response, no high-risk features and good social support; ICU if ongoing cardiorespiratory compromise or acute ischemia.</p>",
        why: "<p>The ED sequence: <b>O₂ + SL NTG 0.4 mg q5 min</b> (hold if SBP under 100) → NIV/intubation if needed → <b>IV NTG if BP over 150/100</b>, stop if under 100 → <b>IV loop</b>, with <b>nitrates before diuretics</b> → assess high-risk features (<b>BUN over 43, creatinine over 2.75</b>, hypotension, troponin...) → ICU if high risk → disposition.</p>",
        q: [
          Q("What sublingual nitroglycerin dose does the pathway use?", "0.4 mg every 5 minutes", ["4 mg every hour", "0.04 mg once", "40 mg daily"], "SL NTG 0.4 mg every 5 minutes until relief or IV NTG."),
          Q("Below what systolic BP is sublingual nitroglycerin held?", "100 mmHg", ["150 mmHg", "180 mmHg", "60 mmHg"], "Hold SL NTG if SBP is under 100."),
          Q("Above what BP is IV nitroglycerin added?", "150/100 mmHg", ["110/70 mmHg", "200/120 mmHg only", "90/60 mmHg"], "Add IV NTG if BP is over 150/100."),
          Q("In the pathway, which comes first: nitrates or diuretics?", "Nitrates", ["Diuretics", "Both at once always", "Neither"], "The pathway says initiate nitrates before diuretics.")
        ]
      })
    ],
    review: [
      Q("A man in acute HF has BP 190/110, SpO2 86% and crackles. What is the first drug?", "Nitroglycerin", ["Metoprolol", "Digoxin", "Diltiazem"], "High BP acute HF needs prompt afterload reduction with nitrates."),
      Q("A woman in acute HF has BP 82/50. Which treatment from the usual list should be avoided?", "Nitroglycerin and NIV", ["Oxygen", "Monitoring", "IV access"], "Hypotension contraindicates nitrates and NIV."),
      Q("A man in acute HF took sildenafil last night. Which drug must you avoid?", "Nitroglycerin", ["Furosemide", "Oxygen", "BiPAP"], "Sildenafil within 24 hours contraindicates nitrates."),
      Q("A patient on home furosemide 80 mg daily arrives in acute HF. What IV dose fits?", "80-200 mg IV", ["10 mg IV", "No diuretic", "1,000 mg IV"], "Give 1-2.5 times the total oral daily dose IV."),
      Q("A patient in acute HF takes carvedilol at home. What do you do with it in the ED?", "Hold it", ["Give a double dose", "Give it IV", "Switch to diltiazem"], "Beta blockers are contraindicated in acute HF.")
    ]
  });

  /* ---------------------------------------------------------------- decompensated 4 */
  los.push({
    id: "adhf4", label: "Decompensated HF", title: "Decompensated HF: disposition and discharge",
    objective: "Decide disposition for acute HF and plan the inpatient course and discharge.",
    slides: [
      S(195, "Disposition: physiologic risk and barriers", {
        why: "<p>Disposition is the ED provider's judgment. <b>High-risk markers</b>: <b>hypotension</b>, <b>hyponatremia</b>, <b>elevated troponin or proBNP</b>, <b>renal insufficiency</b>. Also weigh barriers to outpatient care: <b>caregiver support</b>, <b>access to meds</b>, <b>timely follow-up</b>.</p>",
        q: [
          Q("Which electrolyte abnormality is a high-risk marker in acute HF?", "Hyponatremia", ["Hypernatremia", "Hypercalcemia", "Hypermagnesemia"], "Hyponatremia is a high-risk physiologic marker."),
          Q("Which social factors affect disposition in acute HF?", "Caregiver support, medication access and follow-up", ["Favorite sports team", "Hair color", "Shoe size"], "Barriers to outpatient care shape disposition.")
        ]
      }),
      S(196, "Most are admitted", {
        why: "<p><b>Most</b> acute HF patients are <b>admitted</b>: unpredictable course, limited access to care, likely return visits. <b>Definitely admit</b> anyone with <b>high-risk features</b>.</p>",
        q: [
          Q("Which acute HF patients must definitely be admitted?", "All with high-risk features", ["None", "Only those under 40", "Only those with normal labs"], "All acute HF patients with high-risk features should be admitted."),
          Q("Why are most acute HF patients admitted?", "Unpredictable course, limited access and likely return", ["Hospitals need beds filled", "They always need surgery", "Insurance requires it"], "The slide lists these reasons.")
        ]
      }),
      S(197, "ICU vs observation", {
        why: "<p><b>ICU</b> for patients needing <b>invasive monitoring or procedures</b>. <b>Observation telemetry</b> for <b>lower-risk</b> patients who improve in the ED; many resolve in <b>12-24 hours</b>.</p>",
        q: [
          Q("Which acute HF patients need the ICU?", "Those needing invasive monitoring or procedures", ["All patients", "Those who improve in the ED", "Those with mild edema only"], "ICU admission is for invasive monitoring or procedures."),
          Q("How long does symptom resolution usually take in observation patients?", "12 to 24 hours", ["1 week", "5 minutes", "1 month"], "Many resolve within 12-24 hours, a typical observation period.")
        ]
      }),
      S(198, "More reasons to admit", {
        why: "<p>Admission allows <b>continuous monitoring</b> (symptoms, vitals, <b>urine output</b>, <b>weight</b>) and testing: <b>echo, stress test, cath</b>.</p>",
        q: [
          Q("Which two measures are monitored continuously in an admitted acute HF patient besides vitals?", "Urine output and body weight", ["Hair growth and vision", "Blood type and height", "Calorie intake and steps"], "The slide lists symptoms, vitals, urine output and weight."),
          Q("Which tests might an admitted acute HF patient need?", "Echo, stress testing or heart cath", ["Colonoscopy", "Bone scan", "EEG"], "Admission allows echo, stress testing and catheterization.")
        ]
      }),
      S(199, "Pathway to outpatient management", {
        pic: "<p>A 10-step table, \"Decompensated HF Pathway to Outpatient Management\": 1) ED evaluation: airway (O2, NIPPV, ET tube), nitrates, diuretics, hospitalization. 2) Assess status on admission, continue diuresis, optimize IV meds, assess need for echo, revascularization. 3) Evaluate the trajectory (improving, stalled, worsening). 4) Assess risk factors: hypotension, hyponatremia, elevated troponin or proBNP, infection, renal insufficiency, electrolytes. 5) Manage comorbidities: diabetes, anemia, kidney or liver disease. 6) Transition to oral medications. 7) Optimize oral medications. 8) Discharge planning and education (medication changes, side effects, sodium/fluid restriction), cardiac rehab, sleep studies; stage D: devices, aquapheresis, transplant, hospice. 9) Discharge with follow-up in 3-5 days. 10) At follow-up assess symptoms, weight, electrolytes, renal function, coach compliance and outpatient supports (cardiac rehab, sleep studies, PT).</p>",
        why: "<p>ED → admission (diurese, optimize, echo) → watch the trajectory → fix risk factors and comorbidities → <b>switch to oral meds</b> → educate, rehab, sleep study → <b>follow-up in 3-5 days</b> → check symptoms, weight, labs and compliance.</p>",
        q: [
          Q("On the outpatient pathway, when is the follow-up visit after discharge?", "In 3-5 days", ["In 3-5 months", "In 1 year", "Only if symptoms return"], "The pathway schedules follow-up in 3-5 days."),
          Q("What three trajectories does the pathway ask you to judge during the hospital stay?", "Improving, stalled or worsening", ["Fast, slow or none", "Hot, warm or cold", "Low, medium or high EF"], "The pathway evaluates whether the patient is improving, stalled or worsening.")
        ]
      }),
      S(200, "Echo once stabilized", {
        pic: "<p>An apical four-chamber echo with LA, RA, LV, RV and the mitral and tricuspid valves labeled.</p>",
        why: "<p>Once stable, get an <b>echo</b> for flow changes, <b>type of dysfunction</b>, <b>EF</b>, and to guide inpatient treatment.</p>",
        q: [
          Q("When is the echo done in decompensated HF?", "Once the patient is stabilized", ["Before any oxygen", "Before IV access", "Never"], "The echo comes once stabilized to guide treatment."),
          Q("What does the inpatient echo tell you in decompensated HF?", "Type of dysfunction and EF", ["Potassium level", "Blood type", "Lung volumes"], "It shows flow changes, type of dysfunction and EF.")
        ]
      }),
      S(201, "Inpatient goals", {
        why: "<p>Manage symptoms, prevent worsening, <b>treat underlying causes</b>, <b>wean respiratory support</b>, <b>switch IV diuretics to PO</b>, <b>wean IV vasodilators, inotropes and pressors</b>, <b>educate</b> on meds and lifestyle, and consider a <b>cardiac rehab referral</b>.</p>",
        q: [
          Q("Which IV medication is switched to oral before discharge?", "The diuretic", ["Oxygen", "Acetaminophen", "Saline"], "Inpatient goals include weaning IV diuretics to PO."),
          Q("Which referral should be considered before an acute HF patient goes home?", "Cardiac rehab", ["Dermatology", "Orthopedics", "Podiatry only"], "Cardiac rehab referral should be considered.")
        ]
      }),
      S(202, "Discharge orders", {
        why: "<p>Educate on <b>low sodium</b> and <b>fluid restriction</b>, arrange <b>cardiac rehab</b>, and see the patient <b>within 5 days</b> of discharge to <b>reduce readmissions</b>.</p>",
        q: [
          Q("Within how many days should an HF patient be seen after discharge?", "5 days", ["5 weeks", "30 days", "1 day only in the ED"], "Ideal follow-up is within 5 days to reduce readmissions."),
          Q("Why see HF patients within 5 days of discharge?", "To decrease readmissions", ["To repeat the echo", "To bill a visit", "To stop all meds"], "Early follow-up decreases readmissions.")
        ]
      }),
      S(203, "References", {
        pic: "<p>Covers of the references: Tintinalli's Emergency Medicine, Porth's Pathophysiology, the American Heart Association, UpToDate, and a PA certification review book.</p>",
        why: "<p>Sources for the deck: Tintinalli's Emergency Medicine, Porth's Pathophysiology, AHA guidelines, UpToDate and a PA review book.</p>"
      })
    ],
    review: [
      Q("An acute HF patient has a sodium of 126, creatinine 3.1 and troponin elevation. Where does she go?", "Admit, consider ICU", ["Discharge home", "Observation for 2 hours then home", "Outpatient clinic"], "Hyponatremia, renal insufficiency and troponin elevation are high-risk features."),
      Q("A low-risk acute HF patient feels much better after 2 hours of nitrates and diuretics and has good support. Where can he go?", "Observation telemetry", ["ICU", "Operating room", "Cath lab immediately"], "Lower-risk patients who improve fit observation telemetry."),
      Q("An HF patient is ready for discharge. What three things must be arranged?", "Salt and fluid education, cardiac rehab and follow-up within 5 days", ["A cath, a CT and an MRI", "Nothing", "Only a prescription refill"], "The discharge orders list education, rehab and 5-day follow-up."),
      Q("An elderly HF patient lives alone with no ride to the pharmacy. How does this affect disposition?", "It favors admission because of barriers to outpatient care", ["It favors discharge", "It does not matter", "She should go to the ICU"], "Barriers like medication access and caregiver support count in disposition.")
    ]
  });

  SlideStudy.lecture({
    id: "heart-failure",
    title: "Heart Failure",
    short: "Heart failure",
    by: "Brandell",
    img: "images/hf-slides/slide-{nn}.webp",
    los: los
  });
})();
