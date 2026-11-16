/* Cardio Part 3, Heart Failure (Brandell, 203 slides, two class sessions). One section per objective in syllabus order;
   objective 5 is split per compensatory mechanism, objective 13 per drug class, and objective 16 per sub-objective.
   Read from slide pictures: 21 (compensation overview: baroreceptors/SNS, RAAS, wall tension/hypertrophy), 101 (AHA
   "Salty Six" and sources of sodium), 138 to 139 (GDMT dose table: shown, not drilled; the objectives do not test doses
   except acute IV furosemide), 140 (AHA stage chart), 194 (acute HF treatment steps), 199 (pathway to outpatient care).
   Deck slips flagged on the cards: slide 117 calls metoprolol succinate "Lopressor" (Lopressor is the tartrate; the
   succinate is Toprol-XL); slide 199 says follow-up in 3 to 5 days while slide 202 says within 5 days. */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      r.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (m) {
        u[m].forEach(function (x) { x.card = i; r[m].push(x); });
      });
    });
    return r;
  }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function note(x) { return '<div class="box-fix"><span class="lbl">Source note</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }
  function ul(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }


  window.HEART_FAILURE_OBJECTIVES = [

    S("01-definition-epidemiology", "1. Heart failure defined: the numbers", "Objectives 1 and 2 (slides 4 to 8): prevalence, incidence, HFrEF vs HFpEF share, lifetime risk, mortality, hospitalizations and cost.", [
      C("Heart failure by the numbers",
        "<p>Prevalence keeps rising because the population is <strong>aging</strong> and we keep people with heart disease alive longer. <strong>Incidence rises with age.</strong></p>" +
        tbl(["Fact", "Number"], [
          ["US prevalence", "About <strong>5.8 million</strong>; projected <strong>46% increase</strong> 2012 to 2030 (over 8 million)"],
          ["New cases per year", "About <strong>870,000</strong>"],
          ["Type split", "<strong>HFrEF 45%, HFpEF 55%</strong>"],
          ["Lifetime risk", "As high in women as in men: about <strong>1 in 5</strong> people"],
          ["Precursors", "<strong>Over 75%</strong> have <strong>HTN or CAD</strong> first"],
          ["5-year mortality after diagnosis", "Close to <strong>60%</strong>"],
          ["Deaths per year", "Over <strong>250,000</strong>"],
          ["Hospitalizations", "Over <strong>1 million per year</strong>; <strong>85%</strong> hospitalized at least once, <strong>40%</strong> at least four times"],
          ["Office visits", "Over 12 million"],
          ["Cost", "<strong>$30.7 billion</strong>; the <strong>#1 Medicare expenditure</strong>, projected to rise about 127% to $70 billion by 2030"]]) +
        hy("HF with <strong>CAD</strong> is the most common presentation in <strong>men</strong>; HF with <strong>HTN</strong> is the most common in <strong>women</strong>. Preventing and controlling these precursors is the point."),
        ["hf-prevalence", "hf-split", "hf-mortality-cost", "hf-sex-precursors"],
        [q("About how many people in the US have heart failure on the slide?", "5.8 million", ["580,000", "58 million", "870,000"], "Slide 4."),
          q("How many new HF cases are diagnosed each year?", "About 870,000", ["About 5.8 million", "About 87,000", "About 250,000"], "Slide 4."),
          q("What share of HF is HFpEF?", "55%", ["45%", "25%", "90%"], "Slide 4: HFrEF 45%, HFpEF 55%."),
          q("Lifetime risk of HF in women compared with men:", "As high (about 1 in 5 for both)", ["Half as high", "Twice as high", "Zero"], "Slide 5."),
          q("What percent of HF patients have HTN or CAD as precursors?", "Over 75%", ["About 10%", "About 25%", "About 50%"], "Slide 5."),
          q("The most common HF presentation in men is associated with:", "CAD", ["HTN", "Valve disease", "Alcohol"], "Slide 5."),
          q("The most common HF presentation in women is associated with:", "HTN", ["CAD", "Myocarditis", "Thyroid disease"], "Slide 5."),
          q("5-year mortality after an HF diagnosis is close to:", "60%", ["6%", "20%", "95%"], "Slide 7."),
          q("What percent of HF patients will be hospitalized at least once?", "85%", ["40%", "15%", "100%"], "Slide 8."),
          q("What percent of HF patients are hospitalized at least four times?", "40%", ["85%", "4%", "75%"], "Slide 8."),
          q("HF is the number one health expenditure for:", "Medicare", ["Private insurance only", "Medicaid only", "Workers' compensation"], "Slide 8."),
          q("How does HF incidence change with age?", "It increases with age", ["It decreases with age", "It is constant", "It peaks in childhood"], "Slide 4.")],
        [q("A 70-year-old woman with long-standing hypertension develops HF. Which precursor link does this fit?", "HTN is the most common precursor presentation in women", ["CAD is the most common in women", "HF is rare in women", "Women have half the lifetime risk"], "Slide 5."),
          q("A patient newly diagnosed with HF asks about his outlook. Which statistic from the slides applies?", "5-year mortality is still close to 60%", ["5-year mortality is under 5%", "HF never needs hospitalization", "Most patients are cured"], "Slide 7.")])
    ]),

    S("02-risk-factors-sdoh", "2. Risk factors, ethnicity and social determinants", "Objectives 2 and 3 (slides 5, 6, 9): HF risk factors, risk by ethnicity, and why social factors change who gets HF.", [
      C("Who gets heart failure",
        tbl(["Risk factors for HF (slide 9)"], [
          ["<strong>CAD, especially MI</strong> (ischemic cardiomyopathy)"], ["<strong>LVH</strong>"], ["Cardiomyopathies"], ["<strong>Smoking</strong>"],
          ["<strong>Hypertension</strong>"], ["<strong>Obesity</strong>"], ["<strong>Diabetes</strong>"], ["<strong>Valvular heart disease</strong>"]]) +
        "<p><strong>Highest to lowest risk by ethnicity:</strong> <strong>Black or African American</strong> → Hispanic/Latino → Caucasian → Asian.</p>" +
        hy("The higher risk likely reflects differences in the <strong>prevalence of HTN and DM</strong> between groups. Social determinants of health (access to care, healthy food, medications, follow-up, transportation; standard teaching) drive HTN and DM control, so they change who develops HF and how well it is managed."),
        ["hf-risk-factors", "hf-ethnicity", "hf-sdoh"],
        [q("Which ethnic group has the highest risk of developing HF?", "Black or African American", ["Asian", "Caucasian", "Hispanic/Latino"], "Slide 6."),
          q("Which ethnic group has the lowest risk on the slide's list?", "Asian", ["Black or African American", "Hispanic/Latino", "Caucasian"], "Slide 6."),
          q("The higher HF risk in some ethnic groups likely reflects differences in:", "Prevalence of HTN and DM", ["Genetic heart valve defects only", "Height", "Blood type"], "Slide 6."),
          q("Which cardiac event is the classic cause of ischemic cardiomyopathy?", "Myocardial infarction", ["Pericarditis", "WPW", "Mitral valve prolapse"], "Slide 9."),
          q("Which of these is a listed HF risk factor?", "Obesity", ["Low LDL", "Hypothyroidism only", "Asthma"], "Slide 9."),
          q("Which structural heart finding is a listed HF risk factor?", "Left ventricular hypertrophy", ["Right bundle branch block", "Sinus arrhythmia", "First-degree AV block"], "Slide 9."),
          q("About what fraction of the population will eventually develop HF?", "1 in 5", ["1 in 100", "1 in 2", "1 in 50"], "Slide 5.")],
        [q("A clinic serves a community with poor access to blood pressure medicines and fresh food. Why might HF rates be higher there?", "Poorly controlled HTN and DM, driven by social determinants, are the main precursors", ["Social factors have no effect on HF", "Food access only affects cholesterol", "HF is purely genetic"], "Slides 5 and 6; social determinants link is the objective."),
          q("Which patient has the most HF risk factors?", "A 60-year-old smoker with diabetes, obesity, HTN and a prior MI", ["A 25-year-old runner", "A 40-year-old with mild asthma", "A 50-year-old with migraines"], "Slide 9.")])
    ]),

    S("03-physiology", "3. Cardiac physiology: CO, preload, afterload, Frank-Starling", "Objective 4 (slides 12 to 18): systolic vs diastolic dysfunction, cardiac output and reserve, EDV, preload, stroke volume, Frank-Starling, and CO = HR x SV with the SNS, PNS, contractility, preload and afterload.", [
      C("The words you need",
        tbl(["Term", "Definition"], [
          ["<strong>Systolic dysfunction</strong>", "↓ <strong>contractility</strong> → impaired ability to <strong>pump</strong> blood out"],
          ["<strong>Diastolic dysfunction</strong>", "Abnormal <strong>relaxation</strong> → impaired <strong>filling</strong>"],
          ["<strong>Cardiac output</strong>", "Blood the heart ejects <strong>each minute</strong>; ↓ when sleeping, ↑ when exercising"],
          ["<strong>Cardiac reserve</strong>", "The ability to <strong>increase cardiac output when needed</strong>"],
          ["<strong>End-diastolic volume (EDV)</strong>", "Blood in the ventricle at the <strong>end of diastole</strong>, just before contraction"],
          ["<strong>Preload</strong>", "End-diastolic <strong>pressure on the ventricle walls</strong> caused by the EDV"],
          ["<strong>Stroke volume</strong>", "Blood ejected <strong>per beat</strong>"],
          ["<strong>Afterload</strong>", "The force the heart must generate to <strong>eject</strong> blood; set by <strong>SVR</strong> and <strong>ventricular wall tension</strong>"],
          ["<strong>Contractility</strong>", "<strong>Inotropy</strong>: the heart's contractile performance"]]) +
        hy("<strong>Frank-Starling:</strong> stroke volume <strong>rises</strong> when the volume in the ventricle before contraction rises (all else equal). More stretch → stronger squeeze, up to a point."),
        ["hf-dysfunction-terms", "hf-co-reserve", "hf-edv-preload-sv", "hf-starling"],
        [q("Systolic dysfunction is a problem with:", "Contractility (pumping blood out)", ["Relaxation (filling)", "The conduction system", "Valve opening only"], "Slide 13."),
          q("Diastolic dysfunction is a problem with:", "Relaxation, which impairs filling", ["Contraction strength", "Heart rate", "Coronary flow only"], "Slide 13."),
          q("The ability to increase cardiac output when needed is called:", "Cardiac reserve", ["Preload", "Afterload", "Ejection fraction"], "Slide 14."),
          q("End-diastolic volume is:", "The blood in the ventricle at the end of diastole, just before contraction", ["The blood ejected per beat", "The blood left after systole", "The blood pumped per minute"], "Slide 15."),
          q("Preload is:", "End-diastolic pressure on the ventricle walls caused by the EDV", ["The force needed to eject blood", "Heart rate times stroke volume", "Contractility"], "Slide 15."),
          q("Stroke volume is:", "Blood ejected by the ventricle per beat", ["Blood ejected per minute", "Blood in the ventricle at end diastole", "The percent ejected"], "Slide 15."),
          q("The Frank-Starling mechanism says stroke volume rises when:", "The volume in the ventricle before contraction rises", ["Heart rate falls", "Afterload rises", "Contractility falls"], "Slide 16."),
          q("Afterload is controlled by:", "Systemic vascular resistance and ventricular wall tension", ["Heart rate and PR interval", "Venous return only", "Blood glucose"], "Slide 18."),
          q("Another word for myocardial contractility:", "Inotropy", ["Chronotropy", "Dromotropy", "Lusitropy"], "Slide 18."),
          q("What happens to cardiac output during sleep?", "It decreases", ["It increases", "It stops", "It doubles"], "Slide 14.")],
        [q("A patient's ventricle fills normally but squeezes weakly. Which dysfunction?", "Systolic dysfunction", ["Diastolic dysfunction", "Normal function", "Conduction block"], "Slide 13."),
          q("A thick, stiff ventricle squeezes normally but cannot fill. Which dysfunction?", "Diastolic dysfunction", ["Systolic dysfunction", "High-output failure", "Normal function"], "Slide 13."),
          q("After a 500 mL fluid bolus in a healthy person, stroke volume rises. Which mechanism?", "Frank-Starling", ["Baroreceptor reflex", "Bainbridge reflex only", "Natriuresis"], "Slide 16.")]),
      C("Cardiac output = heart rate × stroke volume",
        "<p><strong>CO = HR × SV</strong></p>" +
        tbl(["Lever", "What moves it"], [
          ["<strong>Heart rate</strong>", "<strong>Sympathetic</strong> ↑ HR; <strong>parasympathetic</strong> ↓ HR"],
          ["<strong>Stroke volume</strong>", "A function of <strong>preload</strong>, <strong>afterload</strong> and <strong>contractility</strong>"]]) +
        chain(["↑ Preload (more filling) → ↑ stroke volume (Frank-Starling)", "↑ Contractility → ↑ stroke volume", "↑ Afterload (more resistance) → ↓ stroke volume", "So CO rises with ↑ HR, ↑ preload, ↑ contractility; it falls with ↑ afterload"]) +
        mn("SV has three knobs: <strong>\"Pre, After, Squeeze\"</strong>. Only afterload works against you."),
        ["hf-co-equation", "hf-sv-determinants"],
        [q("Cardiac output equals:", "Heart rate × stroke volume", ["Stroke volume ÷ heart rate", "Blood pressure × heart rate", "Preload × afterload"], "Slide 17."),
          q("Which nervous system increases heart rate?", "Sympathetic", ["Parasympathetic", "Somatic", "Enteric"], "Slide 17."),
          q("Which nervous system decreases heart rate?", "Parasympathetic", ["Sympathetic", "Somatic", "Central only"], "Slide 17."),
          q("Stroke volume is a function of:", "Preload, afterload and contractility", ["Heart rate only", "PR interval, QRS and QT", "Hemoglobin only"], "Slide 17."),
          q("An increase in afterload does what to stroke volume?", "Decreases it", ["Increases it", "No change", "Doubles it"], "Slides 17 and 18."),
          q("An increase in contractility does what to stroke volume?", "Increases it", ["Decreases it", "No change", "Stops it"], "Slide 17.")],
        [q("A patient's blood pressure (SVR) rises sharply. If nothing else changes, what happens to cardiac output?", "It falls because afterload rose and stroke volume dropped", ["It rises", "It is unchanged", "Heart rate must fall"], "Slides 17 and 18."),
          q("A runner's heart rate goes from 60 to 120 with the same stroke volume. Cardiac output?", "Doubles", ["Halves", "Stays the same", "Falls to zero"], "CO = HR × SV.")])
    ]),

    S("04-sns", "4. Compensation 1: sympathetic nervous system", "Objective 5a (slides 19 to 23): why compensation matters, what the SNS does, and its downsides.", [
      C("The SNS: fastest helper, long-term harm",
        "<p>Compensatory mechanisms keep <strong>cardiac reserve</strong>, so early drops in function may go unnoticed. But they also <strong>drive the pathophysiology</strong> of HF. The five: <strong>SNS, RAAS, ADH, natriuretic peptides, remodeling</strong>.</p>" +
        tbl(["", "SNS"], [
          ["Turns on when", "<strong>Low cardiac output</strong> (baroreceptor response)"],
          ["What it does", "Releases <strong>norepinephrine and epinephrine</strong> → ↑ <strong>contractility</strong> and ↑ <strong>heart rate</strong> → ↑ CO"],
          ["Speed", "The <strong>most immediate</strong> compensatory mechanism"],
          ["Downside 1: tachycardia", "↑ myocardial O2 demand → ischemia, myocyte damage, ↓ inotropy → worse HF over time"],
          ["Downside 2: vasoconstriction", "↑ SVR (<strong>afterload</strong>) → ↓ CO, and ↓ flow to the kidneys"],
          ["Downside 3", "β-receptor stimulation → <strong>arrhythmias</strong>"]]) +
        chain(["Low CO", "SNS releases NE and epi", "HR and contractility rise: CO improves (good, short term)", "Faster heart needs more O2 and vessels clamp down (afterload up)", "Ischemia and weaker muscle: HF worsens (bad, long term)"]),
        ["hf-comp-overview", "hf-sns-action", "hf-sns-downsides"],
        [q("Which compensatory mechanism is the most immediate?", "Sympathetic nervous system", ["RAAS", "Remodeling", "Natriuretic peptides"], "Slide 23."),
          q("What does the SNS release in response to low cardiac output?", "Norepinephrine and epinephrine", ["Renin and aldosterone", "ANP and BNP", "ADH"], "Slide 22."),
          q("SNS activation increases which two things?", "Contractility and heart rate", ["Preload and diuresis", "Vasodilation and natriuresis", "Fibrosis and apoptosis"], "Slide 22."),
          q("How does SNS-driven tachycardia worsen HF over time?", "Raises myocardial O2 demand, causing ischemia, myocyte damage and lower inotropy", ["Lowers preload too much", "Causes natriuresis", "Lowers afterload"], "Slide 23."),
          q("SNS vasoconstriction raises:", "Systemic vascular resistance (afterload)", ["Preload only", "Ejection fraction", "GFR"], "Slide 23."),
          q("SNS vasoconstriction also decreases flow to:", "The kidneys", ["The skin only", "The brain only", "The lungs"], "Slide 23."),
          q("Name the five compensatory mechanisms in HF.", "SNS, RAAS, ADH, natriuretic peptides, remodeling", ["Frank-Starling, Bainbridge, Cushing, Bezold, Valsalva", "Insulin, glucagon, cortisol, GH, thyroid", "Vagal, carotid, aortic, atrial, ventricular"], "Slide 20."),
          q("β-adrenergic stimulation from the SNS can cause:", "Tachycardia, vasoconstriction and arrhythmias", ["Bradycardia and vasodilation", "Hypokalemia only", "Bronchospasm only"], "Slide 23.")],
        [q("A patient with early HFrEF has a resting heart rate of 105. Which compensatory mechanism explains it, and what is the long-term cost?", "SNS: tachycardia raises O2 demand and worsens HF over time", ["RAAS: lowers afterload", "ANP: causes bradycardia", "ADH: lowers heart rate"], "Slides 22 and 23."),
          q("Why do drugs that block the SNS (beta blockers) help chronic HF even though the SNS was \"helping\"?", "Long-term SNS activity causes tachycardia, ischemia, afterload and arrhythmias that worsen HF", ["The SNS never helps", "Beta blockers raise heart rate", "Beta blockers increase afterload"], "Slide 23; linked to the beta blocker section.")])
    ]),

    S("05-raas", "5. Compensation 2: renin-angiotensin-aldosterone", "Objective 5b (slides 24 to 27): what turns RAAS on, what it does, how it helps at first, and its downsides including angiotensin II on the heart.", [
      C("RAAS: more volume, more squeeze, then more harm",
        tbl(["", "RAAS"], [
          ["Turns on when", "<strong>Pressure receptors in the kidney's afferent arterioles</strong> sense <strong>low renal blood flow</strong> (from low CO)"],
          ["What it does", "<strong>Angiotensin II and aldosterone</strong> → <strong>sodium and water retention</strong> and <strong>vasoconstriction</strong> → blood volume ↑"],
          ["Benefit at first", "↑ fluid = ↑ <strong>preload</strong> → ↑ stroke volume (<strong>Frank-Starling</strong>)"],
          ["Downside: Na and water", "More stretch → ↑ <strong>wall tension</strong> → ↑ O2 use → ischemia, ↓ inotropy. Now extra preload <strong>worsens</strong> HF instead of helping"],
          ["Downside: vasoconstriction", "↑ <strong>afterload</strong> → ↓ CO"],
          ["Downside: angiotensin II on the heart", "Binds cardiac receptors → <strong>myocyte hypertrophy, apoptosis, interstitial fibrosis</strong> (fibroblasts, collagen) → stiff ventricles, poor filling, <strong>remodeling</strong>"]]) +
        chain(["Low CO", "Less blood to the kidney", "Renin → angiotensin II → aldosterone", "Salt and water kept, vessels squeezed", "Short term: preload up, SV up", "Long term: overstretched, ischemic, fibrotic, remodeled heart"]) +
        hy("This is why <strong>ACE inhibitors, ARBs, ARNIs and aldosterone antagonists</strong> improve survival: they block the long-term damage of RAAS."),
        ["hf-raas-trigger", "hf-raas-action", "hf-raas-downsides", "hf-ang2-heart"],
        [q("Where are the receptors that trigger RAAS in HF?", "Pressure-sensitive receptors in the kidney's afferent arterioles", ["Carotid sinus only", "Atrial walls", "Hypothalamus"], "Slide 24."),
          q("RAAS is triggered in HF by:", "Decreased renal blood flow from low cardiac output", ["High blood pressure", "Excess sodium intake", "Atrial stretch"], "Slides 24 and 25."),
          q("Which two RAAS hormones drive the response?", "Angiotensin II and aldosterone", ["ANP and BNP", "Norepinephrine and epinephrine", "ADH and oxytocin"], "Slide 24."),
          q("RAAS causes which two effects?", "Sodium and water retention and vasoconstriction", ["Natriuresis and vasodilation", "Bradycardia and diuresis", "Hypoglycemia and hyperkalemia"], "Slide 25."),
          q("How does RAAS help at first?", "More fluid raises preload, raising stroke volume (Frank-Starling)", ["It lowers afterload", "It lowers heart rate", "It causes diuresis"], "Slide 25."),
          q("How does angiotensin II damage the heart directly?", "Causes myocyte hypertrophy, apoptosis and interstitial fibrosis", ["Causes vasodilation", "Causes natriuresis", "Lowers wall tension"], "Slide 27."),
          q("Angiotensin II fibrosis happens through:", "Myocardial fibroblast proliferation and collagen deposits", ["Calcium deposits in valves", "Fat infiltration", "Amyloid deposition"], "Slide 27."),
          q("RAAS vasoconstriction raises afterload, which does what to cardiac output?", "Lowers it", ["Raises it", "No effect", "Doubles it"], "Slide 26."),
          q("Too much preload from RAAS eventually:", "Raises wall tension and O2 use, causing ischemia and worse HF", ["Always improves stroke volume", "Lowers wall tension", "Lowers O2 demand"], "Slide 26.")],
        [q("A patient with HFrEF has gained 3 kg of fluid. Early on this raised his stroke volume. Why is more fluid now making him worse?", "Overstretching raises wall tension and O2 demand, causing ischemia and lower inotropy", ["Fluid always lowers stroke volume", "Fluid lowers afterload", "Fluid blocks the SNS"], "Slide 26."),
          q("A student asks why ACE inhibitors slow remodeling. Best answer?", "They block angiotensin II, which causes hypertrophy, apoptosis and fibrosis of the myocardium", ["They raise angiotensin II", "They increase aldosterone", "They speed the heart"], "Slide 27.")])
    ]),

    S("06-adh", "6. Compensation 3: antidiuretic hormone", "Objective 5c (slides 28 to 30): what releases ADH, its V1 and V2 receptors, and its downsides.", [
      C("ADH (arginine vasopressin)",
        tbl(["", "ADH"], [
          ["Made in", "<strong>Hypothalamus</strong>"],
          ["Released because of", "High <strong>norepinephrine</strong> AND high <strong>angiotensin II</strong>"],
          ["<strong>V1 receptors</strong>", "In <strong>cardiac myocytes and vascular smooth muscle</strong> → ↑ <strong>contraction</strong> and <strong>vasoconstriction</strong>"],
          ["<strong>V2 receptors</strong>", "In the <strong>renal collecting ducts</strong> → <strong>free water reabsorption</strong>"],
          ["Downside of V1 (long term)", "<strong>Cardiac hypertrophy and LV remodeling</strong>"],
          ["Downside of V2 (long term)", "<strong>Vascular congestion</strong> and <strong>hyponatremia</strong> (free water retention)"]]) +
        mn("<strong>V1 = Vessels</strong> (and heart muscle squeeze). <strong>V2 = 2 kidneys</strong> (water)."),
        ["hf-adh-release", "hf-adh-receptors", "hf-adh-downsides"],
        [q("Where is ADH synthesized?", "Hypothalamus", ["Adrenal cortex", "Kidney", "Atria"], "Slide 28."),
          q("ADH release in HF is driven by elevated levels of:", "Norepinephrine and angiotensin II", ["ANP and BNP", "Insulin and glucagon", "Cortisol and aldosterone"], "Slide 28."),
          q("Another name for ADH:", "Arginine vasopressin", ["Atrial natriuretic peptide", "Angiotensin III", "Aldosterone"], "Slide 28."),
          q("Where are V1 receptors?", "Cardiac myocytes and vascular smooth muscle", ["Renal collecting ducts", "Lungs", "Liver"], "Slide 29."),
          q("Where are V2 receptors?", "Renal collecting ducts", ["Vascular smooth muscle", "Cardiac myocytes", "Hypothalamus"], "Slide 29."),
          q("V2 stimulation causes:", "Free water reabsorption", ["Vasoconstriction", "Increased contraction", "Natriuresis"], "Slide 29."),
          q("Which electrolyte problem comes from prolonged ADH (V2) activity?", "Hyponatremia", ["Hypernatremia", "Hyperkalemia", "Hypercalcemia"], "Slide 30."),
          q("Prolonged V1 stimulation causes:", "Cardiac hypertrophy and LV remodeling", ["Hyponatremia", "Diuresis", "Bradycardia"], "Slide 30.")],
        [q("An HF patient has a sodium of 128 and worsening edema. Which compensatory hormone explains both?", "ADH (free water retention via V2)", ["ANP", "Epinephrine only", "Insulin"], "Slide 30."),
          q("HF patients often report thirst. Which system is linked to this symptom?", "ADH (arginine-vasopressin)", ["Natriuretic peptides", "Parasympathetic system", "Thyroid"], "Slide 66 ties thirst to ADH activation.")])
    ]),

    S("07-natriuretic-peptides", "7. Compensation 4: natriuretic peptides", "Objective 5d (slides 31 to 33): ANP and BNP, what they do, why they lose, and what BNP levels mean.", [
      C("ANP and BNP: the good guys",
        tbl(["", "Natriuretic peptides"], [
          ["Which two matter in HF", "<strong>ANP</strong> (from the <strong>atria</strong>) and <strong>BNP</strong> (from the <strong>ventricles</strong>)"],
          ["Turn on when", "↑ <strong>chamber stretch and pressure</strong>"],
          ["What they do", "Rapid <strong>natriuresis and diuresis</strong> (↑ GFR, ↓ tubular Na and water reabsorption); <strong>inhibit SNS, RAAS, endothelin, inflammatory cytokines and vasopressin</strong>; <strong>vasodilate</strong>; lower pulmonary artery pressure"],
          ["Role", "<strong>The one that fights the downsides</strong> of the other mechanisms"],
          ["Why they lose", "RAAS and the adrenergic system eventually overpower them; levels stay high but they become <strong>ineffective</strong>"]]) +
        hy("<strong>Lab use:</strong> NT-proBNP is a byproduct of BNP, detectable in early HF. BNP/proBNP <strong>correlates with severity</strong>. HF drugs (<strong>diuretics, ACE inhibitors</strong>) lower BNP, so a <strong>chronic HF patient can have a normal BNP</strong>."),
        ["hf-np-sources", "hf-np-actions", "hf-np-lab"],
        [q("Where is ANP secreted?", "The atria", ["The ventricles", "The brain", "The kidneys"], "Slide 31."),
          q("Where is BNP secreted?", "The ventricles", ["The atria", "The brain only", "The adrenal gland"], "Slide 31."),
          q("Natriuretic peptides are released in response to:", "Increased chamber stretch and pressure", ["Low blood pressure", "Hypoglycemia", "Low sodium"], "Slide 32."),
          q("Which compensatory mechanism fights the downsides of the others?", "Natriuretic peptides", ["SNS", "RAAS", "ADH"], "Slide 31."),
          q("Natriuretic peptides inhibit which systems?", "SNS, RAAS, endothelin, inflammatory cytokines and vasopressin", ["Only insulin", "The parasympathetic system", "Nothing"], "Slide 32."),
          q("Natriuretic peptides cause natriuresis by:", "Raising GFR and inhibiting tubular Na and water reabsorption", ["Lowering GFR", "Stimulating aldosterone", "Stimulating ADH"], "Slide 32."),
          q("Why can a chronic HF patient have a normal BNP?", "HF drugs such as diuretics and ACE inhibitors lower BNP", ["BNP is never elevated in HF", "BNP only rises in MI", "The lab cannot measure it"], "Slide 33."),
          q("NT-proBNP is:", "A byproduct of BNP", ["A form of ANP", "A troponin", "A renin precursor"], "Slide 33."),
          q("BNP/proBNP levels correlate with:", "HF severity", ["LDL", "Blood glucose", "Kidney stone size"], "Slide 33."),
          q("Why do natriuretic peptides eventually fail in HF?", "RAAS and the adrenergic system overcome them", ["The heart stops making them", "The liver destroys them all", "They cause hypernatremia"], "Slides 32 and 33.")],
        [q("A stable patient on furosemide and lisinopril for years has a normal BNP. Does this rule out HF?", "No: HF medications lower BNP, so chronic HF can have a normal level", ["Yes, normal BNP excludes HF", "Yes, BNP is always high in HF", "Only if troponin is normal"], "Slide 33."),
          q("Which drug class boosts the natriuretic peptides by blocking their breakdown?", "ARNI (sacubitril/valsartan)", ["Beta blocker", "Loop diuretic", "Digoxin"], "Slide 128: neprilysin degrades natriuretic peptides.")])
    ]),

    S("08-remodeling", "8. Compensation 5: remodeling, and how it all fits", "Objective 5e (slides 21, 34): remodeling and how the five mechanisms interact.", [
      C("Remodeling and the big picture",
        "<p><strong>Remodeling:</strong> comorbidities, risk factors and the compensatory mechanisms all reshape the heart muscle. Remodeling causes altered biomechanics, <strong>arrhythmias</strong> (disrupted electrical flow), and more <strong>ischemia</strong> over time.</p>" +
        tbl(["Trigger (slide 21)", "Path", "Result"], [
          ["Baroreceptor response", "Brain → <strong>SNS</strong>", "↑ HR, ↑ contractility"],
          ["RAAS activation, ↓ GFR", "Kidney → <strong>fluid retention</strong>", "↑ Preload"],
          ["↑ Ventricular wall tension", "Heart → <strong>myocyte growth</strong>", "<strong>Hypertrophy</strong>"],
          ["All three", "", "↑ Cardiac output, at first"]]) +
        tbl(["Mechanism", "Feeds into"], [
          ["SNS (NE)", "Triggers ADH release; vasoconstriction lowers renal flow → more RAAS"],
          ["RAAS (angiotensin II)", "Triggers ADH release; directly causes hypertrophy and fibrosis (remodeling)"],
          ["ADH (V1)", "Hypertrophy and LV remodeling"],
          ["Natriuretic peptides", "Push back against SNS, RAAS and ADH until overwhelmed"]]) +
        hy("Every compensation <strong>helps short term</strong> and <strong>harms long term</strong>, except natriuretic peptides, which help but get overpowered. Modern HF drugs block the harmful ones (beta blockers, ACEi/ARB/ARNI, aldosterone antagonists) or boost the helpful one (ARNI)."),
        ["hf-remodeling", "hf-comp-diagram", "hf-comp-interplay"],
        [q("Remodeling of the heart increases the risk of:", "Arrhythmias and ischemia", ["Hypoglycemia", "Hyperthyroidism", "Kidney stones"], "Slide 34."),
          q("On the compensation diagram, increased ventricular wall tension leads to:", "Myocyte growth and hypertrophy", ["SNS activation", "Fluid retention", "Natriuresis"], "Slide 21."),
          q("On the compensation diagram, RAAS activation and decreased GFR lead to:", "Fluid retention and increased preload", ["Increased heart rate", "Hypertrophy only", "Vasodilation"], "Slide 21."),
          q("On the compensation diagram, the baroreceptor response leads to:", "SNS activation with increased HR and contractility", ["Fluid loss", "Myocyte death", "Natriuresis"], "Slide 21."),
          q("Which two hormones trigger ADH release?", "Norepinephrine and angiotensin II", ["ANP and BNP", "Insulin and cortisol", "Renin and BNP"], "Slide 28."),
          q("Which compensatory mechanism is the only one that opposes the others?", "Natriuretic peptides", ["SNS", "ADH", "Remodeling"], "Slide 31."),
          q("What drives remodeling?", "Comorbidities, risk factors and the compensatory mechanisms", ["Only genetics", "Only valve disease", "Only exercise"], "Slide 34.")],
        [q("Which statement best describes compensatory mechanisms in HF?", "They maintain cardiac output early but drive worsening HF over time", ["They always protect the heart", "They only appear in end-stage HF", "They lower heart rate and afterload"], "Slide 20."),
          q("A patient's echo over five years shows a progressively dilated, misshapen LV and new VT. Which process?", "Remodeling", ["Natriuresis", "Cardiac reserve", "Frank-Starling improvement"], "Slide 34.")])
    ]),

    S("09-systolic-diastolic", "9. Systolic vs diastolic dysfunction", "Objective 6 (slides 36 to 46): ejection fraction, what each dysfunction does to EF and cardiac output, the cycle of rising preload, heart rate and filling, and the causes of each.", [
      C("EF and the two dysfunctions",
        "<p><strong>Ejection fraction</strong> = % of blood pumped out of the ventricle with each beat. <strong>Normal: 55 to 70%</strong>.</p>" +
        tbl(["", "Systolic dysfunction", "Diastolic dysfunction"], [
          ["Problem", "<strong>Impaired contractility</strong>", "<strong>Impaired relaxation</strong> + stiff wall"],
          ["EF", "<strong>↓ EF</strong>", "<strong>Normal EF</strong>"],
          ["Cardiac output", "↓ CO (weak pump)", "↓ CO because <strong>preload (filling) is low</strong>, not because EF is low"],
          ["Early compensation", "↑ preload and HR keep SV up, for a while", "—"],
          ["Heart rate", "", "↑ HR <strong>shortens filling time</strong>: worsened by tachycardia or arrhythmia, improved by <strong>slowing the heart</strong>"],
          ["Symptom", "Congestion: pulmonary edema (<strong>crackles</strong>), peripheral edema", "<strong>Fatigue of legs and respiratory muscles</strong> with exercise"]]) +
        chain(["Systolic: EF drops", "More blood left behind: EDV/preload rises", "Ventricle dilates; wall tension rises", "Preload rises further", "Blood backs up into atria and veins: pulmonary edema (crackles) and peripheral edema"]),
        ["hf-ef", "hf-sys-vs-dia", "hf-sys-cycle", "hf-dia-hr"],
        [q("What is a normal ejection fraction?", "55 to 70%", ["20 to 30%", "35 to 45%", "80 to 95%"], "Slide 37."),
          q("Ejection fraction is:", "The percent of blood pumped out of the ventricle with each contraction", ["The volume pumped per minute", "The pressure in the ventricle", "The heart rate times stroke volume"], "Slide 37."),
          q("In systolic dysfunction, EF is:", "Decreased", ["Normal", "Increased", "Unmeasurable"], "Slide 37."),
          q("In diastolic dysfunction, EF is:", "Normal", ["Decreased", "Zero", "Always over 80%"], "Slide 37."),
          q("Why does cardiac output fall in diastolic dysfunction?", "Preload falls because the ventricle cannot fill", ["EF falls", "Heart rate falls", "Afterload falls"], "Slide 44."),
          q("Why does tachycardia worsen diastolic dysfunction?", "It shortens diastolic filling time", ["It lengthens filling time", "It lowers EF", "It improves relaxation"], "Slide 45."),
          q("Diastolic dysfunction improves with:", "Lowering the heart rate", ["Raising the heart rate", "Adding digoxin to increase calcium", "Aggressive diuresis"], "Slide 45."),
          q("In systolic dysfunction, as EF drops, EDV/preload:", "Rises, dilating the ventricle", ["Falls", "Stays normal", "Drops to zero"], "Slide 41."),
          q("Complications of rising preload in systolic dysfunction include:", "Pulmonary edema with crackles and peripheral edema", ["Hypoglycemia", "Bradycardia", "Hypercalcemia"], "Slide 42."),
          q("Diastolic dysfunction causes exercise fatigue of:", "The legs and accessory muscles of respiration", ["The jaw", "The hands only", "The eyes"], "Slide 44.")],
        [q("Echo shows EF 30% and a dilated LV. Which dysfunction?", "Systolic", ["Diastolic", "Normal", "Restrictive pericarditis"], "Slide 37."),
          q("Echo shows EF 62% with a thick LV and impaired relaxation. Which dysfunction?", "Diastolic", ["Systolic", "Normal", "High-output"], "Slide 37."),
          q("A patient with diastolic dysfunction develops AF with RVR at 140 and becomes very short of breath. Why?", "Fast rate shortens filling time, dropping preload and CO", ["AF raises EF", "AF lowers wall stiffness", "AF causes natriuresis"], "Slide 45.")]),
      C("Causes of each",
        tbl(["Systolic dysfunction", "Diastolic dysfunction"], [
          ["<strong>Impaired contraction</strong>: ischemic heart disease, <strong>dilated cardiomyopathy</strong>, <strong>myocarditis</strong>", "<strong>Impeded expansion</strong>: pericardial effusion, <strong>constrictive pericarditis</strong>"],
          ["<strong>Volume overload</strong> (↑ preload): <strong>anemia</strong>", "<strong>Thick wall / small chamber</strong>: myocardial hypertrophy, <strong>HCM</strong>"],
          ["<strong>Pressure overload</strong> (↑ afterload): <strong>hypertension</strong>, <strong>valve stenosis</strong>", "<strong>Delayed relaxation</strong>: <strong>aging</strong>, hypertension, ischemic heart disease"]]) +
        mn("Systolic = <strong>can't squeeze</strong> (damaged, overloaded). Diastolic = <strong>can't relax or expand</strong> (squeezed from outside, too thick, too old)."),
        ["hf-sys-causes", "hf-dia-causes"],
        [q("Which is a cause of systolic dysfunction from impaired contraction?", "Dilated cardiomyopathy", ["Constrictive pericarditis", "Hypertrophic cardiomyopathy", "Aging"], "Slide 43."),
          q("Anemia causes systolic dysfunction through:", "Volume overload (increased preload)", ["Pressure overload", "Impeded expansion", "Delayed relaxation"], "Slide 43."),
          q("Hypertension and valvular stenosis cause systolic dysfunction through:", "Pressure overload (increased afterload)", ["Volume overload", "Impeded expansion", "Myocarditis"], "Slide 43."),
          q("Constrictive pericarditis causes diastolic dysfunction by:", "Impeding expansion of the ventricle", ["Thinning the wall", "Lowering EF", "Raising heart rate"], "Slide 46."),
          q("Hypertrophic cardiomyopathy causes which dysfunction?", "Diastolic (thick wall, small chamber)", ["Systolic from volume overload", "Systolic from myocarditis", "Neither"], "Slide 46."),
          q("Which cause of diastolic dysfunction is from delayed relaxation?", "Aging", ["Pericardial effusion", "Anemia", "Myocarditis"], "Slide 46."),
          q("Myocarditis causes which dysfunction?", "Systolic", ["Diastolic only", "Neither", "Only right-sided"], "Slide 43.")],
        [q("A 78-year-old with long-standing HTN has dyspnea, EF 60%, and a stiff LV. Most likely mechanism?", "Diastolic dysfunction from delayed relaxation (aging and HTN)", ["Systolic dysfunction from myocarditis", "Volume overload from anemia", "Constrictive pericarditis"], "Slide 46."),
          q("A 30-year-old has HF after a viral illness, with EF 25%. Most likely cause?", "Myocarditis causing systolic dysfunction", ["HCM causing diastolic dysfunction", "Aging", "Pericardial effusion"], "Slide 43.")])
    ]),

    S("10-right-left", "10. Right vs left ventricular dysfunction", "Objective 7 (slides 47 to 54): what fails on each side, symptoms, and causes.", [
      C("Right-sided vs left-sided failure",
        "<p>The first event may be right or left, but <strong>long term HF usually involves both sides</strong>.</p>" +
        tbl(["", "<strong>Left</strong> ventricular dysfunction", "<strong>Right</strong> ventricular dysfunction"], [
          ["What fails", "Moving blood from low-pressure lungs into high-pressure systemic arteries", "Moving deoxygenated blood from the body into the lungs"],
          ["Backs up into", "<strong>LV → LA → lungs</strong>: ↑ pulmonary venous pressure → <strong>pulmonary edema</strong>", "<strong>Systemic veins</strong> (and less blood reaches the LV → ↓ LV output)"],
          ["Symptoms", "Fatigue, ↓ exercise capacity; <strong>pulmonary edema, rales, cough with frothy sputum</strong>; <strong>orthopnea, PND</strong>; cyanosis, pallor, hypoxia; confusion, anxiety; <strong>narrow pulse pressure</strong> (normal 40 mmHg); worsening renal function", "<strong>JVD</strong> (key sign); <strong>peripheral (dependent) edema</strong>; weight gain; <strong>hepatomegaly, RUQ pain</strong> (can lead to liver failure); splenomegaly; <strong>ascites</strong>; GI congestion (abdominal pain, poor absorption, anorexia); <strong>anasarca</strong>"],
          ["Causes", "<strong>Most common: HTN and acute MI</strong>; aortic or mitral stenosis or regurgitation", "<strong>Most common: left ventricular failure</strong>; <strong>cor pulmonale</strong> (sustained pulmonary HTN: chronic lung disease, severe pneumonia, PE, aortic or mitral stenosis); tricuspid or pulmonic stenosis or regurgitation; <strong>RV infarction</strong>; cardiomyopathy; congenital (tetralogy of Fallot, VSD)"]]) +
        mn("<strong>Left = Lungs</strong> (wet lungs, can't lie flat). <strong>Right = the Rest of the body</strong> (neck veins, liver, belly, legs)."),
        ["hf-both-sides", "hf-left", "hf-right"],
        [q("What is the most common cause of right ventricular failure?", "Left ventricular failure", ["Pulmonary embolism", "Tetralogy of Fallot", "Tricuspid regurgitation"], "Slide 51."),
          q("What are the most common causes of left ventricular dysfunction?", "Hypertension and acute MI", ["PE and COPD", "Tricuspid stenosis", "Tetralogy of Fallot"], "Slide 54."),
          q("Which sign is double-starred as the key symptom of right ventricular dysfunction?", "Jugular venous distention", ["Rales", "Frothy sputum", "Orthopnea"], "Slide 50."),
          q("Which is a symptom of LEFT ventricular dysfunction?", "Orthopnea and paroxysmal nocturnal dyspnea", ["Ascites", "Hepatomegaly", "JVD"], "Slide 53."),
          q("Which is a symptom of RIGHT ventricular dysfunction?", "Hepatomegaly with RUQ pain", ["Cough with frothy sputum", "PND", "Rales"], "Slide 50."),
          q("Cor pulmonale is right heart failure caused by:", "Sustained pulmonary hypertension", ["Systemic hypertension", "Mitral valve prolapse", "LBBB"], "Slide 51."),
          q("Normal pulse pressure is about:", "40 mmHg", ["10 mmHg", "80 mmHg", "120 mmHg"], "Slide 53."),
          q("Left ventricular failure causes what change in pulse pressure?", "Narrow pulse pressure", ["Wide pulse pressure", "No change", "Pulsus paradoxus only"], "Slide 53."),
          q("Pulmonary edema in left HF happens when:", "Pulmonary venous pressure rises enough to push capillary fluid into the lung interstitium", ["The RV fails first", "Pulmonary arteries dilate", "Albumin rises"], "Slide 52."),
          q("Which congenital defects can cause right ventricular dysfunction?", "Tetralogy of Fallot and VSD", ["Coarctation and bicuspid valve", "PDA only", "Long QT"], "Slide 51."),
          q("Long-term HF usually involves:", "Both sides of the heart", ["Only the left side", "Only the right side", "Only the atria"], "Slide 48.")],
        [q("A patient has JVD, ascites, an enlarged tender liver and leg edema, but clear lungs. Which side has failed?", "Right ventricle", ["Left ventricle", "Neither", "Only the left atrium"], "Slide 50."),
          q("A patient with a recent anterior MI has crackles, frothy sputum and wakes at night gasping. Which side?", "Left ventricle", ["Right ventricle only", "Neither", "Pericardium"], "Slides 53 and 54."),
          q("A long-time COPD patient develops JVD and leg edema. Most likely cause?", "Cor pulmonale from pulmonary hypertension", ["Left-sided failure from HTN", "Aortic stenosis", "Myocarditis"], "Slide 51."),
          q("A patient with years of left-sided HF now also has JVD and ascites. Why?", "Left-sided failure eventually causes right-sided failure", ["The left side recovered", "This is unrelated liver disease", "This is a medication side effect"], "Slides 51 and 54.")])
    ]),

    S("11-hfref-hfpef", "11. HFrEF vs HFpEF", "Objective 8 (slides 55 to 59, 63, 72 to 74): what defines each, remodeling shape, chronotropic incompetence, exam clues, and telling them apart in a vignette.", [
      C("HFrEF vs HFpEF",
        tbl(["", "<strong>HFrEF</strong> (reduced EF)", "<strong>HFpEF</strong> (preserved EF)"], [
          ["Defined by", "Systolic dysfunction bad enough to show a <strong>reduced EF on echo</strong>", "HF with a normal EF; once called \"diastolic HF\" but some have focal systolic dysfunction, so <strong>HFpEF is the better term</strong>"],
          ["Remodeling shape", "<strong>Eccentric</strong> (elongated, dilated); prone to <strong>arrhythmias</strong>", "<strong>Concentric</strong>: ↑ wall thickness, diffuse interstitial fibrosis, impaired relaxation"],
          ["Heart rate", "Resting sinus tachycardia, possibly AF", "<strong>Chronotropic incompetence</strong>: cannot raise heart rate (a key difference)"],
          ["Main symptom", "Dyspnea, fatigue, congestion", "<strong>Exercise intolerance</strong> (diastolic dysfunction, short filling times)"],
          ["Extra heart sound", "<strong>S3</strong> (\"Lub-Dub-Tah\"), plus MR from dilation", "<strong>S4</strong> (\"Tah-Lub-Dub\", atrial kick into a stiff LV)"],
          ["PMI", "<strong>Laterally displaced, sustained</strong> (cardiomegaly), more common in HFrEF", ""],
          ["proBNP", "<strong>More often elevated</strong>", "Less elevated (less wall stretch)"],
          ["Share of HF", "45%", "55%"]]) +
        "<p><strong>Advanced HFpEF</strong> (very stiff LV that cannot raise SV with exercise): restrictive cardiomyopathy, severe LVH, severe CAD.</p>" +
        hy("Vignette clues: <strong>older woman, HTN, obesity, S4, EF normal, exercise intolerance → HFpEF</strong>. <strong>Prior MI, dilated LV, S3, displaced PMI, EF low → HFrEF</strong>."),
        ["hf-ref-pef-define", "hf-ref-pef-shape", "hf-chronotropic", "hf-s3-s4"],
        [q("HFrEF remodeling is typically:", "Eccentric (elongated, dilated)", ["Concentric (thick wall)", "Normal", "Restrictive only"], "Slide 56."),
          q("HFpEF remodeling is typically:", "Concentric with increased wall thickness", ["Eccentric and dilated", "Aneurysmal", "Thin-walled"], "Slide 58."),
          q("Why is HFpEF a better term than diastolic heart failure?", "Some HFpEF patients have focal systolic dysfunction despite a normal EF", ["HFpEF patients have low EF", "Diastolic function is always normal in HFpEF", "HFpEF is a valve disease"], "Slide 57."),
          q("Chronotropic incompetence means:", "Inability to raise the heart rate", ["Inability to lower the heart rate", "Low EF", "Inability to relax"], "Slide 59."),
          q("Chronotropic incompetence is a key feature of:", "HFpEF", ["HFrEF", "Right HF only", "Normal hearts"], "Slide 59."),
          q("Which extra heart sound is specific for HFpEF?", "S4", ["S3", "Opening snap", "Ejection click"], "Slide 74."),
          q("Which extra heart sound is more common in HFrEF?", "S3", ["S4", "Mid-systolic click", "Pericardial knock"], "Slide 73."),
          q("How does the S3 sound?", "Lub-Dub-Tah (early diastole)", ["Tah-Lub-Dub (late diastole)", "A click in systole", "A continuous machinery murmur"], "Slide 73."),
          q("An S3 together with elevated JVP is associated with:", "Increased risk of death and recurrent HF hospitalization", ["A good prognosis", "Normal filling pressures", "Mitral stenosis"], "Slide 73."),
          q("The main symptom of HFpEF is:", "Exercise intolerance", ["Hemoptysis", "Syncope at rest", "Chest pain only"], "Slide 63."),
          q("Which conditions cause advanced HFpEF with a very stiff LV?", "Restrictive cardiomyopathy, severe LVH, severe CAD", ["Anemia, pregnancy, hyperthyroidism", "Myocarditis and DCM", "Mitral prolapse"], "Slide 59."),
          q("Which murmur is common in HFrEF due to ventricular dilation?", "Mitral regurgitation", ["Aortic stenosis", "Pulmonic stenosis", "Mitral stenosis"], "Slide 73.")],
        [q("A 74-year-old obese woman with HTN has exertional dyspnea, an S4, EF 60% and cannot raise her heart rate on a treadmill. Diagnosis?", "HFpEF", ["HFrEF", "No heart failure", "Right HF from PE"], "Slides 58, 59 and 74."),
          q("A 62-year-old man with a prior anterior MI has an S3, a laterally displaced PMI and EF 25%. Diagnosis?", "HFrEF", ["HFpEF", "Constrictive pericarditis", "Normal heart"], "Slides 56, 72, 73."),
          q("A patient with HF has an echo with a concentric, thick LV and normal EF. Which type?", "HFpEF", ["HFrEF", "Dilated cardiomyopathy", "High-output HF"], "Slide 58."),
          q("A patient with HF and a dilated, elongated LV develops frequent VT. Which remodeling explains the arrhythmia risk?", "Eccentric remodeling in HFrEF", ["Concentric remodeling in HFpEF", "Normal remodeling", "Pericardial constriction"], "Slide 56.")])
    ]),

    S("12-symptoms-exam", "12. Symptoms and exam findings", "Objectives 8 and 10, clinical findings (slides 61 to 75): dyspnea, fatigue, PND, orthopnea, thirst, nocturia, oliguria, cerebral symptoms, rales, effusions, JVD, edema, stasis dermatitis, cardiomegaly and cachexia.", [
      C("Symptoms",
        tbl(["Symptom", "Key point"], [
          ["<strong>Dyspnea</strong>", "<strong>Most common</strong>; with fatigue from low O2 delivery; may fly under the radar, so ask about <strong>changes in functional capacity</strong>"],
          ["<strong>Fatigue</strong>", "From ↓ CO; inactivity → deconditioning → more disability"],
          ["<strong>PND</strong>", "Wakes after being supine a while, <strong>choking and air hunger</strong>, sits up for relief. <strong>Usually precedes orthopnea.</strong> Cause: fluid from below the diaphragm moves back when lying down → ↑ pulmonary venous pressure"],
          ["<strong>Orthopnea</strong>", "Dyspnea <strong>within minutes</strong> of lying flat; same cause as PND but <strong>more severe</strong>; better with head up; severe patients sleep upright; nighttime <strong>cough</strong>"],
          ["<strong>Thirst</strong>", "From <strong>ADH</strong> activation"],
          ["<strong>Nocturia</strong>", "Lying down: renal vasoconstriction eases and venous return rises → more urine"],
          ["<strong>Oliguria</strong>", "Renal hypoperfusion from low CO"],
          ["Cerebral", "Anxiety, confusion, insomnia, memory impairment"]]),
        ["hf-dyspnea-fatigue", "hf-pnd-orthopnea", "hf-thirst-urine"],
        [q("What is the most common symptom of HF?", "Dyspnea", ["Chest pain", "Palpitations", "Syncope"], "Slide 61."),
          q("Which usually comes first, PND or orthopnea?", "PND usually precedes orthopnea", ["Orthopnea always comes first", "They never occur together", "Neither occurs in HF"], "Slide 64."),
          q("Which represents more severe cardiac dysfunction, PND or orthopnea?", "Orthopnea", ["PND", "They are equal", "Neither"], "Slide 65."),
          q("What causes PND?", "Fluid from below the diaphragm moves back when lying down, raising pulmonary venous pressure", ["Bronchospasm from allergies", "Low blood sugar at night", "Sleep apnea only"], "Slide 64."),
          q("Thirst in HF is from activation of:", "ADH (arginine-vasopressin)", ["Natriuretic peptides", "Parasympathetic system", "Insulin"], "Slide 66."),
          q("Why does nocturia happen in HF?", "Lying down eases renal vasoconstriction and raises venous return", ["Bladder infections", "High sugar", "Diuretics taken at night only"], "Slide 66."),
          q("Oliguria in HF is caused by:", "Renal hypoperfusion from reduced cardiac output", ["Too much fluid intake", "Prostate enlargement", "ADH deficiency"], "Slide 66."),
          q("Why should you ask HF patients about changes in functional capacity?", "Dyspnea and fatigue may fly under the radar", ["It is required for billing", "It measures EF", "It replaces the echo"], "Slide 61.")],
        [q("A patient wakes 2 hours after falling asleep, choking and gasping, and must sit on the edge of the bed. Name the symptom.", "Paroxysmal nocturnal dyspnea", ["Orthopnea", "Cheyne-Stokes breathing", "Panic attack"], "Slide 64."),
          q("A patient now sleeps in a recliner because she gets short of breath within minutes of lying flat. Name the symptom.", "Orthopnea", ["PND", "Platypnea", "Exercise intolerance"], "Slide 65.")]),
      C("Exam findings",
        tbl(["Finding", "Key point"], [
          ["Vitals and skin", "<strong>Resting sinus tachycardia</strong> (maybe AF, HFrEF); diaphoresis; cool, pale, peripheral cyanosis"],
          ["<strong>Rales</strong>", "At the <strong>bases</strong> (fluid in alveoli); in pulmonary edema, coarse rales and wheezes everywhere with frothy sputum"],
          ["<strong>Pleural effusion</strong>", "<strong>Dullness to percussion</strong> (characteristic); shifting dullness sitting to lateral decubitus; ↓ or absent breath sounds; reabsorbs slowly with diuresis"],
          ["<strong>JVD</strong>, hepatic/splanchnic congestion", "Ascites, abdominal fullness, RUQ pain, early satiety, nausea"],
          ["<strong>Peripheral edema</strong>", "<strong>Symmetric pitting</strong>; feet and ankles if walking, <strong>sacrum if bedbound</strong>"],
          ["<strong>Anasarca</strong>", "Massive generalized edema in terminal HF: genitals, arms, chest and abdominal walls"],
          ["<strong>Stasis dermatitis</strong>", "Chronic edema → pigmentation, redness, induration of the lower legs; skin may break down and weep"],
          ["<strong>Cardiomegaly</strong>", "<strong>Laterally displaced, sustained PMI</strong> (nonspecific; more common in HFrEF)"],
          ["<strong>Cardiac cachexia</strong>", "Advanced HF: poor intake (early satiety, nausea) + impaired fat absorption + ↑ metabolism from <strong>norepinephrine</strong> → skeletal muscle wasting"]]),
        ["hf-exam-lungs", "hf-exam-edema", "hf-exam-cachexia"],
        [q("Where are rales usually heard first in HF?", "Lung bases", ["Lung apices", "Over the trachea", "Over the heart"], "Slide 67."),
          q("What is the characteristic sign of a pleural effusion?", "Dullness on percussion", ["Hyperresonance", "Wheezing", "Bronchial breath sounds"], "Slide 68."),
          q("Where does edema collect in a bedbound HF patient?", "The sacral (presacral) area", ["The feet only", "The face", "The hands"], "Slides 69 and 70."),
          q("HF edema is typically:", "Symmetric and pitting", ["Unilateral and non-pitting", "Only in the face", "Painful and red"], "Slide 70."),
          q("Massive generalized edema in terminal HF is called:", "Anasarca", ["Lymphedema", "Angioedema", "Myxedema"], "Slide 70."),
          q("Chronic edema causing pigmentation, redness and induration of the lower legs is:", "Stasis dermatitis", ["Cellulitis", "Erythema nodosum", "Psoriasis"], "Slide 71."),
          q("Cardiac cachexia is weight loss from:", "Skeletal muscle atrophy", ["Fat gain", "Fluid loss only", "Bone loss"], "Slide 75."),
          q("Which hormone raises metabolism in cardiac cachexia?", "Norepinephrine", ["Insulin", "Thyroid hormone only", "ANP"], "Slide 75."),
          q("A laterally displaced, sustained PMI suggests:", "Cardiomegaly (LV enlargement)", ["Pericarditis", "Normal heart", "Pneumothorax"], "Slide 72."),
          q("Pleural effusion in HF makes dyspnea worse by:", "Reducing pulmonary vital capacity", ["Raising cardiac output", "Lowering heart rate", "Causing bronchospasm"], "Slide 68.")],
        [q("An HF patient has dullness at the right base, absent breath sounds there, and dullness that shifts when he lies on his side. Finding?", "Pleural effusion", ["Pneumothorax", "Consolidation only", "Normal lung"], "Slide 68."),
          q("A thin patient with end-stage HF has temporal wasting, early satiety and nausea. Name and cause?", "Cardiac cachexia: poor intake, poor fat absorption and high NE-driven metabolism", ["Anorexia nervosa", "Hyperthyroidism", "Normal aging"], "Slide 75.")])
    ]),

    S("13-classification", "13. Framingham, NYHA and AHA stages", "Objective 9 (slides 77 to 81): why each system exists, the Framingham criteria and rule, NYHA classes, and AHA stages.", [
      C("Three systems, three jobs",
        "<p>HF is a <strong>clinical diagnosis</strong> (history and exam). There is no single diagnostic test; tests confirm and rule out other causes.</p>" +
        tbl(["System", "Purpose"], [
          ["<strong>Framingham criteria</strong>", "<strong>Make the diagnosis</strong>: the <strong>most sensitive and specific</strong> clinical criteria"],
          ["<strong>NYHA class</strong>", "Used <strong>after</strong> HF is diagnosed: <strong>severity of symptoms</strong>"],
          ["<strong>AHA stages</strong>", "Stage by <strong>risk factors and structural disease</strong>; guides <strong>therapy</strong>"]]) +
        tbl(["Framingham major", "Framingham minor"], [
          ["<strong>PND or orthopnea</strong>", "Dyspnea on exertion"],
          ["<strong>Elevated JVP</strong>", "Night cough"],
          ["<strong>Hepatojugular reflux</strong>", "<strong>Tachycardia over 120</strong>"],
          ["<strong>Rales</strong>", "Hepatomegaly"],
          ["<strong>S3 gallop</strong>", "Bilateral leg edema"],
          ["Enlarging heart on serial CXR", "Pulmonary vascular engorgement on CXR"],
          ["Pulmonary edema on CXR", "Pleural effusion on CXR"],
          ["<strong>Weight loss on diuretics over 10 lb in 5 days</strong>", ""],
          ["Venous pressure over 16 cm H2O (central line)", ""]]) +
        hy("Framingham diagnosis: <strong>2 major</strong>, OR <strong>1 major + 2 minor</strong>."),
        ["hf-class-purposes", "hf-framingham"],
        [q("Which classification has the most sensitivity and specificity for diagnosing HF?", "Framingham criteria", ["NYHA class", "AHA stages", "Killip class"], "Slide 78."),
          q("NYHA classification is used to:", "Grade symptom severity after HF is diagnosed", ["Make the diagnosis", "Stage by structural disease", "Predict stroke risk"], "Slide 78."),
          q("AHA stages classify HF by:", "Risk factors and structural disease, to guide therapy", ["Symptom severity only", "EF only", "BNP only"], "Slide 78."),
          q("Framingham diagnosis requires:", "2 major, or 1 major plus 2 minor", ["1 minor", "3 major", "4 minor"], "Slide 79."),
          q("Which is a Framingham MAJOR criterion?", "S3 gallop", ["Night cough", "Hepatomegaly", "Dyspnea on exertion"], "Slide 79."),
          q("Which is a Framingham MINOR criterion?", "Tachycardia over 120 bpm", ["PND", "Rales", "Hepatojugular reflux"], "Slide 79."),
          q("Weight loss on diuretics of how much is a Framingham major criterion?", "Over 10 lb in 5 days", ["Over 2 lb in 1 day", "Over 20 lb in 1 month", "Any weight loss"], "Slide 79."),
          q("Is bilateral leg edema a major or minor Framingham criterion?", "Minor", ["Major", "Not a criterion", "Diagnostic alone"], "Slide 79."),
          q("Is pleural effusion on CXR a major or minor Framingham criterion?", "Minor", ["Major", "Not a criterion", "Rules out HF"], "Slide 79."),
          q("Is pulmonary edema on CXR a major or minor Framingham criterion?", "Major", ["Minor", "Not a criterion", "Only for right HF"], "Slide 79."),
          q("Is there a single diagnostic test for HF?", "No, it is a clinical diagnosis; tests confirm it and rule out other causes", ["Yes, BNP", "Yes, echo", "Yes, CXR"], "Slide 77.")],
        [q("A patient has orthopnea and an S3, nothing else. Does he meet Framingham criteria?", "Yes: 2 major criteria", ["No: needs 3 major", "No: needs 2 minor too", "Only if BNP is high"], "Slide 79."),
          q("A patient has rales, bilateral leg edema and night cough. Framingham?", "Yes: 1 major + 2 minor", ["No", "Only if EF is low", "Only with a CXR"], "Slide 79."),
          q("A patient has dyspnea on exertion, hepatomegaly and a pleural effusion on CXR, and no major criteria. Framingham?", "Not met: minor criteria alone are not enough", ["Met: 3 minor", "Met: 1 major", "Met if over 65"], "Slide 79.")]),
      C("NYHA classes and AHA stages",
        tbl(["NYHA", "Symptoms"], [
          ["<strong>I</strong>", "<strong>No symptoms</strong>, no limits with ordinary activity"],
          ["<strong>II</strong>", "Dyspnea with <strong>exertion</strong> (stairs, raking leaves, shoveling snow, taking out trash)"],
          ["<strong>III</strong>", "Moderate limits: dyspnea with <strong>ordinary activity</strong>; <strong>comfortable at rest</strong>"],
          ["<strong>IV</strong>", "Severe: <strong>symptoms at rest</strong>; mostly bedbound"]]) +
        tbl(["AHA stage", "Definition", "Examples"], [
          ["<strong>A</strong> (NYHA I)", "<strong>At high risk</strong>, no structural disease, no symptoms", "HTN, DM, obesity, PVD, CVA, family history of CAD, cardiotoxin exposure"],
          ["<strong>B</strong> (NYHA I)", "<strong>Structural disease</strong>, <strong>no</strong> signs or symptoms", "Asymptomatic CAD, prior MI, LVH, valve disease"],
          ["<strong>C</strong> (NYHA I to III)", "Structural disease with <strong>prior or current symptoms</strong>", "Known structural disease + dyspnea, fatigue, ↓ exercise tolerance"],
          ["<strong>D</strong> (NYHA IV)", "<strong>Refractory</strong> HF needing specialized intervention", "Marked symptoms at rest despite max therapy; recurrent hospitalizations"]]) +
        hy("AHA stages only move <strong>forward</strong>; NYHA class can go up and down with treatment (standard teaching). A stage C patient whose symptoms resolve is still stage C, now NYHA I."),
        ["hf-nyha", "hf-aha-stages"],
        [q("NYHA class I means:", "No symptoms or limits with ordinary activity", ["Symptoms at rest", "Dyspnea with ordinary activity", "Dyspnea with exertion"], "Slide 80."),
          q("NYHA class II means:", "Dyspnea with exertion such as climbing stairs or shoveling snow", ["Symptoms at rest", "No symptoms", "Bedbound"], "Slide 80."),
          q("NYHA class III means:", "Dyspnea with ordinary activity, comfortable at rest", ["Symptoms at rest", "No symptoms", "Only with heavy exertion"], "Slide 80."),
          q("NYHA class IV means:", "Symptoms even at rest, mostly bedbound", ["No symptoms", "Symptoms only climbing stairs", "Comfortable at rest"], "Slide 80."),
          q("AHA stage A is:", "High risk with no structural disease or symptoms", ["Structural disease without symptoms", "Symptomatic HF", "Refractory HF"], "Slide 81."),
          q("AHA stage B is:", "Structural heart disease without signs or symptoms of HF", ["High risk only", "Symptomatic HF", "Refractory HF"], "Slide 81."),
          q("AHA stage C is:", "Structural disease with prior or current HF symptoms", ["No structural disease", "Refractory HF at rest", "Risk factors only"], "Slide 81."),
          q("AHA stage D is:", "Refractory HF needing specialized intervention", ["High risk only", "Asymptomatic structural disease", "Mild symptoms"], "Slide 81."),
          q("A prior MI without HF symptoms is AHA stage:", "B", ["A", "C", "D"], "Slide 81."),
          q("Which NYHA classes fit AHA stage C?", "I to III", ["IV only", "I only", "None"], "Slide 81.")],
        [q("A 55-year-old with diabetes and hypertension, normal echo, no symptoms. AHA stage?", "A", ["B", "C", "D"], "Slide 81."),
          q("A patient with an EF of 35% after an MI has no symptoms. AHA stage and NYHA class?", "Stage B, NYHA I", ["Stage A, NYHA I", "Stage C, NYHA II", "Stage D, NYHA IV"], "Slide 81."),
          q("A patient with known HFrEF gets short of breath walking to the mailbox but is fine at rest. NYHA class?", "III", ["I", "II", "IV"], "Slide 80."),
          q("A patient with HFrEF is short of breath only when shoveling snow. NYHA class?", "II", ["I", "III", "IV"], "Slide 80."),
          q("A patient with HFrEF has dyspnea at rest despite maximal therapy and his fourth admission this year. AHA stage?", "D", ["A", "B", "C"], "Slide 81."),
          q("A stage C patient on good therapy now has no symptoms. How is she classified?", "Still AHA stage C, now NYHA class I", ["Back to stage B", "Stage A", "Stage D"], "Slide 81 shows stage C covers NYHA I to III; stages do not go backward (standard teaching).")])
    ]),

    S("14-workup-basics", "14. Workup: EKG, CXR, echo, labs, proBNP, troponin", "Objective 10 (slides 82 to 89): what each first-line test looks for in heart failure.", [
      C("First-line tests",
        tbl(["Test", "What it shows"], [
          ["<strong>EKG</strong> (routine)", "Structure: <strong>LVH, prior MI</strong>. Rhythm: <strong>AF/flutter</strong>, ventricular ectopy, sustained arrhythmias. Conduction: <strong>LBBB</strong>. <strong>QT</strong> (many therapies prolong it)"],
          ["<strong>CXR</strong>", "<strong>Cardiomegaly</strong> (cardiothoracic ratio <strong>over 50%</strong>; may be absent in acute HF from MI or myocarditis); interstitial edema when left filling pressure is <strong>over 25 mmHg</strong> with <strong>Kerley lines</strong>; pleural effusions. Clearing lags up to <strong>48 hours</strong> behind diuresis"],
          ["<strong>Echo</strong>", "<strong>Essential</strong>: chamber size, wall thickness, systolic and diastolic function, valves, filling pressures, SV/CO. Defines <strong>HFrEF vs HFpEF</strong>; repeat with any clinical change that would change management"],
          ["<strong>CBC</strong>", "<strong>Anemia and iron deficiency</strong> (treat early, may reverse)"],
          ["<strong>BMP/CMP</strong>", "<strong>Hyponatremia</strong> (advanced HF or too much diuretic), <strong>hypokalemia</strong> (diuretics), <strong>hyperkalemia</strong> (ACEi), renal dysfunction"],
          ["<strong>LFTs</strong>", "Liver congestion"],
          ["Glucose, A1c, fasting lipids", "Risk factors"],
          ["<strong>proBNP</strong>", "Diagnoses <strong>decompensated</strong> HF (get a <strong>baseline</strong>); more elevated in <strong>HFrEF</strong>. <strong>Over 450</strong> (younger) or <strong>over 900</strong> (age over 50) is highly sensitive and specific"],
          ["<strong>Troponin</strong>", "Low-level elevation below MI criteria in <strong>over 50%</strong> of systolic HF: a sign of <strong>volume overload</strong> and high LV filling pressure"]]) +
        "<p>Labs are drawn at diagnosis, at acute decompensation, with therapy changes, and for periodic monitoring.</p>",
        ["hf-ekg", "hf-cxr", "hf-echo", "hf-labs", "hf-bnp-trop"],
        [q("What cardiothoracic ratio defines cardiomegaly on CXR?", "Over 50%", ["Over 25%", "Over 75%", "Under 50%"], "Slide 83."),
          q("Interstitial pulmonary edema appears when left-sided filling pressure exceeds:", "25 mmHg", ["5 mmHg", "12 mmHg", "60 mmHg"], "Slide 83."),
          q("What are Kerley lines?", "Spindle-shaped linear opacities of interstitial edema", ["Air in the pleural space", "Rib fractures", "Calcified valves"], "Slide 83."),
          q("How long can CXR clearing lag behind diuresis?", "About 48 hours", ["About 10 minutes", "About 2 weeks", "It clears instantly"], "Slide 83."),
          q("Cardiomegaly may be ABSENT in which HF patients?", "Acute HF from acute MI or acute myocarditis", ["Chronic HFrEF", "Long-standing HTN", "Dilated cardiomyopathy"], "Slide 83."),
          q("What is the essential diagnostic tool for cardiac structure and function in HF?", "Echocardiogram", ["CXR", "EKG", "BNP"], "Slide 85."),
          q("Echo is used to define which distinction in HF?", "HFrEF vs HFpEF", ["Left vs right MI", "Pericarditis vs MI", "Asthma vs COPD"], "Slide 85."),
          q("Which proBNP level in patients over 50 is highly sensitive and specific for HF?", "Over 900 pg/mL", ["Over 100 pg/mL", "Over 50 pg/mL", "Over 9,000 only"], "Slide 88."),
          q("Which proBNP level in younger patients is highly sensitive and specific for HF?", "Over 450 pg/mL", ["Over 900 pg/mL", "Over 45 pg/mL", "Over 4,500 pg/mL"], "Slide 88."),
          q("proBNP is more often elevated in:", "HFrEF", ["HFpEF", "Neither", "Only right HF"], "Slide 88."),
          q("Low-level troponin elevation below MI criteria occurs in what share of systolic HF patients?", "Over 50%", ["Under 5%", "About 10%", "None"], "Slide 89."),
          q("Hyperkalemia on a BMP in an HF patient is often due to:", "ACE inhibitor use", ["Loop diuretics", "Thiazides", "Digoxin alone"], "Slide 86."),
          q("Hyponatremia in HF suggests:", "Advanced HF or excessive diuretic use", ["Mild HF", "Dehydration only", "Hyperthyroidism"], "Slide 86."),
          q("Why note the QT interval on the HF EKG?", "Many HF therapies can prolong it and provoke lethal arrhythmias", ["It measures EF", "It diagnoses HFpEF", "It predicts BNP"], "Slide 82."),
          q("Why check a CBC in new HF?", "Anemia and iron deficiency are common and treatable", ["To measure BNP", "To diagnose HFpEF", "To check digoxin level"], "Slide 86.")],
        [q("A 72-year-old with dyspnea has a proBNP of 1,400. Interpretation?", "Highly suggestive of HF (over 900 in a patient over 50)", ["Normal for age", "Rules out HF", "Diagnoses MI"], "Slide 88."),
          q("An HF patient has a troponin slightly above normal but below MI criteria and no chest pain. Most likely meaning?", "Volume overload and high LV filling pressure", ["Definite STEMI", "Lab error", "Pulmonary embolism"], "Slide 89."),
          q("After two days of good diuresis the patient feels better but the CXR still shows edema. Explanation?", "CXR clearing can lag about 48 hours behind clinical improvement", ["Diuresis failed", "The diagnosis is wrong", "He has pneumonia"], "Slide 83."),
          q("A newly diagnosed HF patient: which test defines HFrEF vs HFpEF?", "Echocardiogram", ["CXR", "proBNP", "EKG"], "Slide 85.")])
    ]),

    S("15-workup-advanced", "15. Workup: stress tests, cath, MRI, biopsy, genetics", "Objective 10 (slides 90 to 96): when to use CPET, stress echo, catheterization, cardiac MRI, endomyocardial biopsy and genetic testing.", [
      C("Additional testing",
        tbl(["Test", "Use in HF"], [
          ["<strong>CPET</strong> (cardiopulmonary exercise test)", "Precision in initial evaluation and prognosis, especially before advanced therapies. <strong>Peak VO2</strong> and <strong>VE/VCO2 slope</strong> predict prognosis. <strong>Peak VO2 under 50% predicted → transplant or LVAD</strong>. Very valuable in <strong>HFpEF</strong> (exercise intolerance)"],
          ["<strong>Stress echo</strong>", "Exercise test diagnoses CAD; echo shows <strong>LV diastolic dysfunction and filling pressures during exercise</strong>; treadmill or bike; for <strong>chronic HTN, CAD and HF features</strong>"],
          ["<strong>Cardiac cath</strong>", "<strong>Intermediate or high pretest probability of CAD</strong> or abnormal stress test → angiography; surgical revascularization improves outcomes in ischemic HF"],
          ["<strong>Cardiac MRI</strong>", "<strong>Fibrosis</strong> (focal or diffuse), aortic enlargement, <strong>infiltrative cardiomyopathies</strong>, <strong>pericardial thickness</strong>"],
          ["<strong>Endomyocardial biopsy</strong>", "Less used since MRI. Still for suspected <strong>fulminant myocarditis, giant cell myocarditis, sarcoidosis, amyloid, hemochromatosis</strong>"],
          ["<strong>Genetic testing</strong>", "Find at-risk relatives for inherited cardiomyopathies: <strong>HCM</strong> and <strong>arrhythmogenic RV dysplasia</strong>"]]),
        ["hf-cpet", "hf-stress-echo-cath", "hf-mri-biopsy-genetic"],
        [q("Which CPET result is an indication for heart transplant or LVAD?", "Peak VO2 under 50% predicted", ["Peak VO2 over 90% predicted", "Normal VE/VCO2", "Heart rate over 150"], "Slide 91."),
          q("Which two CPET measurements predict HF prognosis?", "Peak VO2 and the VE/VCO2 slope", ["BNP and troponin", "EF and wall thickness", "QRS and QT"], "Slide 91."),
          q("CPET is extremely valuable in which HF type because exercise intolerance is key?", "HFpEF", ["HFrEF only", "Right HF only", "High-output HF"], "Slide 91."),
          q("What does the echo part of a stress echo evaluate in HF?", "LV diastolic dysfunction and filling pressures during exercise", ["Coronary calcium", "Valve vegetations", "Pericardial thickness only"], "Slide 92."),
          q("When should HF patients have coronary angiography?", "Intermediate or high pretest probability of CAD, or an abnormal stress test", ["Every HF patient yearly", "Never", "Only with HFpEF"], "Slide 93."),
          q("Cardiac MRI is MOST used in HF to evaluate:", "Fibrosis, aortic enlargement, infiltrative disease, pericardial thickness", ["Coronary stenosis percent", "BNP", "Heart sounds"], "Slide 94."),
          q("Endomyocardial biopsy is still used for suspected:", "Giant cell myocarditis, sarcoidosis, amyloid, hemochromatosis, fulminant myocarditis", ["Hypertension", "Stable CAD", "Mitral prolapse"], "Slide 95."),
          q("Genetic testing in HF is best used to identify at-risk relatives for:", "HCM and arrhythmogenic RV dysplasia", ["Hypertension", "Rheumatic heart disease", "Endocarditis"], "Slide 96."),
          q("Why is endomyocardial biopsy less common now?", "Cardiac MRI has emerged", ["It is illegal", "It never helped", "Echo replaced it"], "Slide 95."),
          q("Surgical revascularization in ischemic HF:", "Improves cardiovascular outcomes", ["Worsens outcomes", "Has no effect", "Is contraindicated"], "Slide 93.")],
        [q("A young patient with rapidly worsening HF, VT and suspected giant cell myocarditis. Which test confirms it?", "Endomyocardial biopsy", ["Calcium score", "Holter", "Exercise EKG"], "Slide 95."),
          q("A patient's brother has HCM. Which test identifies whether the patient is at risk?", "Genetic testing", ["Endomyocardial biopsy", "Calcium score", "MUGA"], "Slide 96."),
          q("A stage D HFrEF patient is being evaluated for transplant. Which test gives peak VO2?", "Cardiopulmonary exercise test (CPET)", ["Echo", "CXR", "Troponin"], "Slide 91."),
          q("A patient with new HFrEF has diabetes, HTN and smokes (high pretest probability of CAD). Next test for ischemic cause?", "Cardiac catheterization (coronary angiography)", ["Genetic testing", "Biopsy", "Calcium score"], "Slide 93.")])
    ]),

    S("16-lifestyle", "16. Lifestyle and non-drug treatment", "Objective 11 (slides 98 to 104, 141 to 142): goals, lifestyle measures, sodium and fluid limits, the Salty Six, daily weights and BP, sleep apnea, follow-up and disease management programs.", [
      C("Treat the patient, not just the heart",
        "<p><strong>Goal of therapy:</strong> relieve symptoms, manage underlying causes, prevent progression and death. <strong>HFpEF</strong> is treated similarly to HFrEF because strong trial data for HFpEF are lacking; treatment relies on relieving congestion and treating comorbidities.</p>" +
        tbl(["Lifestyle", "Rule"], [
          ["Weight", "Lose weight if obese"],
          ["Activity", "Improve exercise tolerance"],
          ["<strong>Smoking</strong>", "Quit"],
          ["<strong>Cardiotoxins</strong>", "Avoid <strong>alcohol and illicit drugs</strong>"],
          ["<strong>Sodium</strong>", "AHA: <strong>1,500 mg/day</strong>"],
          ["<strong>Fluid</strong>", "<strong>1 to 2 L/day max</strong> (based on clinical experience)"],
          ["<strong>Daily diary</strong>", "<strong>Daily weight and blood pressure</strong> to catch under- or over-diuresis; call when weight or BP climbs"],
          ["<strong>Sleep apnea</strong>", "Sleep-disordered breathing in about <strong>75%</strong> of HF; hypoxemia and SNS surges; <strong>CPAP</strong> improves symptoms and EF"],
          ["Follow-up", "Every <strong>3 to 6 months</strong>: compliance with meds, salt and water; weight; exercise tolerance"],
          ["Disease management programs", "Home health, visiting nurses, cardiac rehab; treatment, prevention and education; match to each patient's support and resources"]]) +
        hy("<strong>The Salty Six</strong> (AHA): <strong>breads and rolls, cold cuts and cured meats, sandwiches, pizza, soup, chicken</strong>. About <strong>77%</strong> of US sodium comes from <strong>processed and prepared foods</strong> (only 5% added while cooking, 6% at the table, 12% natural)."),
        ["hf-goals", "hf-lifestyle", "hf-na-fluid", "hf-weights-osa"],
        [q("What is the AHA sodium limit for HF patients?", "1,500 mg/day", ["3,500 mg/day", "500 mg/day", "No limit"], "Slide 100."),
          q("What fluid restriction is recommended in HF?", "1 to 2 L/day maximum", ["4 to 5 L/day", "No restriction ever", "250 mL/day"], "Slide 100."),
          q("Which two things should every HF patient record daily?", "Weight and blood pressure", ["Blood glucose and temperature", "Pulse ox and peak flow", "Steps and calories"], "Slide 102."),
          q("Why record daily weight?", "To catch under-diuresis (fluid gain) or over-diuresis early", ["To track muscle growth", "To measure EF", "For insurance"], "Slide 102."),
          q("About what percent of HF patients have sleep-disordered breathing?", "75%", ["5%", "25%", "100%"], "Slide 104."),
          q("What treatment for OSA improves HF symptoms and EF?", "CPAP", ["Supplemental oxygen only", "Benzodiazepines", "Tonsillectomy only"], "Slide 104."),
          q("Where does most US dietary sodium come from?", "Processed and prepared foods (about 77%)", ["Salt added at the table", "Salt added while cooking", "Natural sources"], "Slide 101."),
          q("Which food is one of the AHA Salty Six?", "Cold cuts and cured meats", ["Fresh apples", "Plain oatmeal", "Steamed broccoli"], "Slide 101."),
          q("How often should stable HF patients have follow-up?", "Every 3 to 6 months", ["Every 5 years", "Only when hospitalized", "Daily"], "Slide 141."),
          q("Why is HFpEF treated similarly to HFrEF?", "Extensive trial data with positive outcomes for HFpEF are not available", ["They are the same disease", "HFpEF drugs are banned", "HFpEF has no symptoms"], "Slide 98."),
          q("Which cardiotoxins should HF patients avoid?", "Alcohol and illicit drugs", ["Caffeine and chocolate", "Water and salt", "Fruit and vegetables"], "Slide 99.")],
        [q("An HF patient says he does not add salt at the table, so his diet must be low sodium. He eats deli sandwiches and canned soup daily. Best education?", "Most sodium comes from processed foods like cold cuts, sandwiches and soup; aim for 1,500 mg/day", ["He is fine since he adds no salt", "Increase salt to avoid low BP", "Sodium only matters in HFpEF"], "Slides 100 and 101."),
          q("An HF patient's daily log shows a 3-lb gain over 2 days and rising BP. What should he do?", "Call his provider so treatment can be adjusted before decompensation", ["Ignore it", "Drink more water", "Stop all meds"], "Slide 102."),
          q("An obese HF patient snores loudly and his wife sees him stop breathing at night. What should you order?", "A sleep study; treat OSA with CPAP", ["Nothing", "A calcium score", "Sleeping pills"], "Slide 104 and slide 157.")])
    ]),

    S("17-cardiac-rehab", "17. Cardiac rehab", "Objective 12 (slides 103, 142 to 144): what cardiac rehab includes, who qualifies, its benefits, and barriers to access.", [
      C("Cardiac rehab in HF",
        tbl(["", "Cardiac rehab"], [
          ["What", "<strong>Medically supervised</strong> program to improve CV health; improves <strong>quality of life AND mortality</strong>"],
          ["Exercise dose", "<strong>Moderately intense exercise 20 to 30 minutes, 5 days a week</strong>"],
          ["Who", "<strong>NYHA I, II, III</strong>; <strong>not NYHA IV</strong>; caution in <strong>HFpEF</strong> (exercise intolerance): still helps but may need modifying"],
          ["Includes", "Tailored activity program; HF counseling and education; support to <strong>return to work</strong>; diet and risk factor counseling; medication counseling"],
          ["Aerobic training benefits", "↑ LV function and CO; ↑ endothelial function; ↑ skeletal muscle metabolism; better response to vasodilators; <strong>fewer HF hospitalizations</strong>; better well-being and exercise capacity"],
          ["Access barriers", "Coverage depends on insurance: <strong>Medicare pays for at least one round</strong> (if qualified); private insurance may not. <strong>Multiple visits at least weekly</strong>: hard to attend; <strong>transportation</strong>"]]),
        ["hf-rehab-what", "hf-rehab-who", "hf-rehab-benefits", "hf-rehab-access"],
        [q("Cardiac rehab exercise dose for HF patients:", "Moderate intensity, 20 to 30 minutes, 5 days a week", ["High intensity 2 hours daily", "5 minutes once a week", "None; rest is best"], "Slide 103."),
          q("Cardiac rehab is NOT indicated for which NYHA class?", "Class IV", ["Class I", "Class II", "Class III"], "Slide 103."),
          q("In which HF type should cardiac rehab be used with caution and possibly modified?", "HFpEF (exercise intolerance)", ["HFrEF NYHA II", "Stage A", "None"], "Slide 103."),
          q("Cardiac rehab improves:", "Quality of life and mortality", ["Only weight", "Only cholesterol", "Nothing measurable"], "Slide 143."),
          q("Which is a benefit of aerobic training in HF?", "Significant decrease in HF hospitalizations", ["Lower EF", "Worse endothelial function", "More arrhythmias"], "Slide 103."),
          q("Which insurer pays for at least one round of cardiac rehab if the patient qualifies?", "Medicare", ["No insurer", "Only private insurance", "Only workers' compensation"], "Slide 144."),
          q("Which is a barrier to cardiac rehab?", "Transportation to multiple visits at least weekly", ["It is a single visit", "It is done by phone only", "It needs surgery"], "Slide 144."),
          q("Which is part of cardiac rehab?", "Counseling on medications and diet, and help returning to work", ["Daily IV infusions", "Cardiac biopsy", "Dialysis"], "Slide 143.")],
        [q("A patient with HFrEF, NYHA II, asks if exercise is safe. Best education?", "Yes: supervised cardiac rehab, moderate exercise 20 to 30 minutes 5 days a week, lowers hospitalizations and improves survival", ["No exercise ever", "Only after transplant", "Only if EF is normal"], "Slides 103 and 143."),
          q("A patient with HF has symptoms at rest and is mostly bedbound. Refer to cardiac rehab?", "No: rehab is not indicated in NYHA class IV", ["Yes, daily high-intensity training", "Yes, it is required", "Only if BNP is normal"], "Slide 103."),
          q("A patient lives 40 miles from the rehab center and does not drive. Which issue should you discuss?", "Access: multiple weekly visits and transportation are real barriers", ["None; rehab is at home", "Rehab is only one visit", "Insurance never covers it"], "Slide 144.")])
    ]),

    /* ================= HF PHARMACOLOGY (objective 13) ================= */

    S("18-acei", "18. ACE inhibitors", "Objective 13.1 (slides 106 to 109): names, MOA, indications, effects on HF, side effects, contraindications and research support.", [
      C("ACE inhibitors",
        tbl(["", "ACE inhibitors"], [
          ["Names", "<strong>Enalapril (Vasotec)</strong>, <strong>lisinopril (Prinivil, Zestril)</strong>, <strong>quinapril (Accupril)</strong>, <strong>ramipril (Altace)</strong> (all end in <strong>-pril</strong>)"],
          ["MOA", "<strong>Block conversion of angiotensin I to angiotensin II</strong> → no peripheral vasoconstriction (<strong>↓ afterload</strong>), no SNS activation, <strong>less aldosterone</strong> salt and water retention"],
          ["Indications", "<strong>1st-line</strong> HF drug; used in <strong>ALL AHA stages</strong> if tolerated"],
          ["Research", "↑ survival, ↓ hospitalizations, ↑ quality of life, <strong>slow remodeling</strong>, ↓ mortality in LV dysfunction, ↓ symptoms"],
          ["Dosing", "Start <strong>lowest dose</strong>, titrate up by <strong>renal function</strong> and tolerance"],
          ["Side effects", "<strong>Persistent cough</strong>, <strong>angioedema</strong>, <strong>hyperkalemia</strong>, hypotension, azotemia"],
          ["Contraindications", "<strong>History of angioedema</strong>, renal failure, <strong>pregnancy</strong>, <strong>renal artery stenosis</strong>"],
          ["Boxed warning", "RAAS drugs cause <strong>fetal injury and death</strong>; stop as soon as pregnancy is found"]]) +
        mn("ACEi problems: <strong>Cough, Angioedema, Potassium up, low Pressure, Kidneys (azotemia), never in Pregnancy</strong>. Cough is the one an ARB fixes."),
        ["hf-acei-names", "hf-acei-moa", "hf-acei-use", "hf-acei-safety"],
        [q("ACE inhibitors block:", "Conversion of angiotensin I to angiotensin II", ["The angiotensin II receptor", "Aldosterone at the distal tubule", "Neprilysin"], "Slide 107."),
          q("In which AHA stages are ACE inhibitors used?", "All stages, if tolerated", ["Stage D only", "Stage A only", "None; they are contraindicated in HF"], "Slide 107."),
          q("ACE inhibitors' place in HF therapy:", "First-line", ["Last resort", "Only for acute HF in the ED", "Only for HFpEF"], "Slide 107."),
          q("What is the brand name of lisinopril?", "Prinivil or Zestril", ["Vasotec", "Altace", "Accupril"], "Slide 108."),
          q("What is the brand name of enalapril?", "Vasotec", ["Zestril", "Altace", "Cozaar"], "Slide 108."),
          q("What is the brand name of ramipril?", "Altace", ["Accupril", "Vasotec", "Diovan"], "Slide 108."),
          q("What is the brand name of quinapril?", "Accupril", ["Altace", "Prinivil", "Atacand"], "Slide 108."),
          q("Which side effect makes patients switch from an ACE inhibitor to an ARB?", "Persistent cough", ["Hypokalemia", "Bradycardia", "Gynecomastia"], "Slides 109 and 110."),
          q("Which electrolyte rises with ACE inhibitors?", "Potassium", ["Sodium", "Calcium", "Magnesium"], "Slide 109."),
          q("Which is a contraindication to ACE inhibitors?", "Renal artery stenosis", ["Asthma", "Gout", "Atrial fibrillation"], "Slide 109."),
          q("What is the ACE inhibitor boxed warning?", "Fetal injury and death; stop when pregnancy is detected", ["Liver failure", "Suicidality", "Lactic acidosis"], "Slide 108."),
          q("How are ACE inhibitors dosed in HF?", "Start at the lowest dose and titrate up by renal function and tolerance", ["Start at the max dose", "One fixed dose for all", "Only IV"], "Slide 109."),
          q("ACE inhibitors slow which harmful HF process?", "Cardiac remodeling", ["Natriuresis", "Cardiac reserve", "Frank-Starling"], "Slide 107.")],
        [q("A 60-year-old on lisinopril for HFrEF develops a dry cough that will not go away. Best change?", "Switch to an ARB", ["Add a cough suppressant forever", "Stop all RAAS therapy", "Switch to another ACE inhibitor"], "Slide 110."),
          q("A woman on enalapril for HF has a positive pregnancy test. Action?", "Stop the ACE inhibitor as soon as possible (fetal injury)", ["Continue it", "Double the dose", "Switch to ramipril"], "Slide 108."),
          q("A patient had lip and tongue swelling on lisinopril. Which ACE inhibitor is safe?", "None: history of angioedema contraindicates ACE inhibitors", ["Enalapril", "Ramipril", "Quinapril"], "Slide 109."),
          q("Two weeks after starting an ACE inhibitor, potassium is 5.8. Which side effect is this?", "Hyperkalemia", ["Hypokalemia", "Hyponatremia", "Hypercalcemia"], "Slide 109.")])
    ]),

    S("19-arb", "19. Angiotensin receptor blockers (ARBs)", "Objective 13.2 (slides 110 to 111): names, MOA, indications, side effects, contraindications and research support.", [
      C("ARBs",
        tbl(["", "ARBs"], [
          ["Names", "<strong>Candesartan (Atacand)</strong>, <strong>irbesartan (Avapro)</strong>, <strong>losartan (Cozaar)</strong>, <strong>olmesartan (Benicar)</strong>, <strong>telmisartan (Micardis)</strong>, <strong>valsartan (Diovan)</strong> (all end in <strong>-sartan</strong>)"],
          ["MOA", "<strong>Block the action of angiotensin II</strong> (at its receptor)"],
          ["Indications", "<strong>Alternative</strong> when a patient <strong>cannot tolerate an ACEi</strong> (e.g. <strong>persistent cough</strong>); all NYHA classes and AHA stages if tolerated"],
          ["Research", "<strong>Equally effective</strong> as ACE inhibitors at lowering HF mortality"],
          ["Side effects", "Angioedema, <strong>hyperkalemia</strong>, hypotension; <strong>Black patients</strong> may have higher angioedema risk"],
          ["Contraindications", "<strong>Angioedema</strong>: an ARB is <strong>NOT a safe alternative</strong> if angioedema occurred on an ACEi; <strong>pregnancy</strong> (boxed warning)"]]) +
        hy("Cough on ACEi → <strong>switch to ARB</strong>. Angioedema on ACEi → <strong>do NOT switch to ARB</strong>; consider hydralazine + nitrate."),
        ["hf-arb-names", "hf-arb-use", "hf-arb-safety"],
        [q("ARBs work by:", "Blocking the action of angiotensin II", ["Blocking conversion of angiotensin I to II", "Blocking aldosterone", "Inhibiting neprilysin"], "Slide 110."),
          q("ARBs are mainly used in HF when:", "A patient cannot tolerate an ACE inhibitor (e.g. cough)", ["A patient has angioedema on an ACEi", "A patient is pregnant", "The patient is in cardiogenic shock"], "Slide 110."),
          q("How do ARBs compare with ACE inhibitors for HF mortality?", "Equally effective", ["Much worse", "Better in all cases", "Not studied"], "Slide 110."),
          q("Is an ARB a safe alternative after ACE-inhibitor angioedema?", "No", ["Yes, always", "Yes, at half dose", "Only losartan"], "Slide 110."),
          q("Which group may be at increased risk of ARB angioedema?", "Black patients", ["Asian patients", "Children", "Athletes"], "Slide 110."),
          q("What is the brand name of losartan?", "Cozaar", ["Diovan", "Benicar", "Atacand"], "Slide 111."),
          q("What is the brand name of valsartan?", "Diovan", ["Cozaar", "Avapro", "Micardis"], "Slide 111."),
          q("What is the brand name of candesartan?", "Atacand", ["Avapro", "Benicar", "Cozaar"], "Slide 111."),
          q("What is the brand name of olmesartan?", "Benicar", ["Micardis", "Diovan", "Atacand"], "Slide 111."),
          q("What is the brand name of telmisartan?", "Micardis", ["Benicar", "Avapro", "Cozaar"], "Slide 111."),
          q("What is the brand name of irbesartan?", "Avapro", ["Atacand", "Micardis", "Diovan"], "Slide 111."),
          q("Which ARB side effect is shared with ACE inhibitors?", "Hyperkalemia", ["Cough as the main effect", "Hypokalemia", "Gynecomastia"], "Slide 110.")],
        [q("A patient on lisinopril has a nagging dry cough. Which drug replaces it?", "Losartan (an ARB)", ["Ramipril", "Spironolactone", "Digoxin"], "Slide 110."),
          q("A patient had angioedema on enalapril and now has HFrEF. Which RAAS alternative should be avoided?", "An ARB such as valsartan", ["Hydralazine plus isosorbide dinitrate", "Carvedilol", "Furosemide"], "Slide 110."),
          q("A pregnant woman with HF asks if she can take valsartan instead of lisinopril. Answer?", "No: ARBs carry the same fetal-toxicity boxed warning", ["Yes, ARBs are safe in pregnancy", "Yes, at low dose", "Only in the third trimester"], "Slide 111.")])
    ]),

    S("20-bidil", "20. Hydralazine + isosorbide dinitrate (BiDil)", "Objective 13.3 (slides 112 to 113): generic names, MOA, indications, research, side effects and contraindication.", [
      C("BiDil",
        tbl(["", "Hydralazine + isosorbide dinitrate (<strong>BiDil</strong>)"], [
          ["MOA", "<strong>Hydralazine</strong>: direct <strong>arteriolar</strong> vasodilator (↓ afterload). <strong>Isosorbide dinitrate</strong>: smooth muscle relaxation, mainly <strong>venous</strong> dilation (↓ preload) with some arterial"],
          ["Indication 1", "HFrEF (<strong>stage B, C, D</strong>) when the patient <strong>cannot take an ACEi or ARB</strong>: intolerance (hyperkalemia, cough, angioedema), hypotension, or worsening renal insufficiency"],
          ["Indication 2", "<strong>Added</strong> for <strong>Black patients with HFrEF (stage C and D)</strong>"],
          ["Research", "Mortality reduction, <strong>not as large as ACE inhibitors</strong>; some studies show <strong>more benefit in Black patients</strong>"],
          ["Side effects", "Hypotension, bradycardia, nausea/vomiting, diaphoresis"],
          ["Contraindication", "Use with <strong>phosphodiesterase inhibitors</strong> (sildenafil and others)"]]) +
        mn("<strong>Hydralazine = Arteries, Isosorbide = Inflow (veins)</strong>. Together they unload both ends of the heart."),
        ["hf-bidil-moa", "hf-bidil-use", "hf-bidil-safety"],
        [q("What is the generic combination in BiDil?", "Hydralazine and isosorbide dinitrate", ["Sacubitril and valsartan", "Lisinopril and HCTZ", "Amlodipine and benazepril"], "Slide 112."),
          q("Hydralazine works by:", "Direct vasodilation of arterioles", ["Venous dilation only", "Blocking beta receptors", "Blocking aldosterone"], "Slide 112."),
          q("Isosorbide dinitrate mainly dilates:", "Peripheral veins (with some arterial dilation)", ["Only arterioles", "Bronchi", "Coronary veins only"], "Slide 112."),
          q("Which HF patients get BiDil as an alternative?", "HFrEF stage B to D who cannot take an ACEi or ARB", ["All HFpEF patients first-line", "Stage A only", "Patients on sildenafil"], "Slide 112."),
          q("Which patients get BiDil added to therapy?", "Black patients with HFrEF, stage C and D", ["All patients with HFpEF", "Asian patients with stage A", "Children"], "Slide 112."),
          q("How does BiDil's mortality benefit compare with ACE inhibitors?", "Present but not as large", ["Much larger", "None", "Identical in every group"], "Slide 113."),
          q("What is the contraindication to BiDil?", "Concomitant phosphodiesterase inhibitor use", ["Asthma", "Hyperkalemia", "Gout"], "Slide 113."),
          q("Which side effect is listed for BiDil?", "Hypotension", ["Hyperkalemia", "Cough", "Gynecomastia"], "Slide 113.")],
        [q("A Black patient with HFrEF, NYHA III, is on max-dose ACEi, beta blocker and diuretic. Which add-on has extra benefit in this group?", "Hydralazine plus isosorbide dinitrate (BiDil)", ["Verapamil", "Ibuprofen", "Dronedarone"], "Slides 112 and 113."),
          q("A patient with HFrEF had angioedema on an ACEi and hyperkalemia. Which vasodilator combination can replace RAAS blockade?", "Hydralazine plus isosorbide dinitrate", ["An ARB", "Sacubitril/valsartan", "Spironolactone"], "Slide 112."),
          q("A patient on BiDil asks about sildenafil for erectile dysfunction. Answer?", "No: PDE inhibitors are contraindicated with the nitrate (severe hypotension)", ["Yes, no interaction", "Yes, at double dose", "Only on weekends"], "Slide 113.")])
    ]),

    S("21-beta-blockers", "21. Beta blockers", "Objective 13.4 (slides 114 to 117): names, MOA, indications, side effects, contraindications and research support.", [
      C("Beta blockers in HF",
        tbl(["", "Beta blockers"], [
          ["Names (the HF three)", "<strong>Carvedilol (Coreg)</strong>, <strong>bisoprolol (Zebeta)</strong>, <strong>metoprolol succinate</strong>"],
          ["MOA", "<strong>Slow the heart rate</strong> → <strong>longer diastolic filling</strong> → ↑ <strong>EF</strong>"],
          ["Indications", "<strong>Stable</strong> HF, <strong>AHA stage B and C</strong>"],
          ["Research", "↓ <strong>mortality</strong> (fewer arrhythmias and sudden death), ↑ EF, ↓ symptoms, ↑ quality of life, lower BP"],
          ["Dosing", "<strong>Titrate up gradually</strong> so the patient tolerates it"],
          ["Side effects", "<strong>Bradycardia, hypotension</strong>, <strong>bronchospasm</strong> (non-cardioselective)"],
          ["Contraindications", "<strong>Severe HF (stage D)</strong>; <strong>hold in acute decompensated HF</strong>; <strong>cardiogenic shock</strong>; chronic pulmonary disease"]]) +
        note("Slide 117 lists metoprolol succinate as \"Lopressor\". Lopressor is metoprolol <strong>tartrate</strong>; the long-acting <strong>succinate</strong> used in HF is <strong>Toprol-XL</strong> (standard teaching). Questions ask about the generic only.") +
        hy("Start beta blockers only when the patient is <strong>stable</strong> (\"start low, go slow\"). They are <strong>held</strong> in acute decompensation and shock, because the failing heart needs its sympathetic drive right then."),
        ["hf-bb-names", "hf-bb-moa-use", "hf-bb-safety"],
        [q("Which three beta blockers are used in HF?", "Carvedilol, bisoprolol, metoprolol succinate", ["Propranolol, atenolol, labetalol", "Esmolol, sotalol, nadolol", "Metoprolol tartrate, timolol, pindolol"], "Slide 117."),
          q("What is the brand name of carvedilol?", "Coreg", ["Zebeta", "Toprol", "Tenormin"], "Slide 117."),
          q("What is the brand name of bisoprolol?", "Zebeta", ["Coreg", "Lopressor", "Inderal"], "Slide 117."),
          q("How do beta blockers help HF?", "Slow the heart rate for longer diastolic filling and raise EF", ["Raise heart rate and contractility", "Cause diuresis", "Block aldosterone"], "Slide 115."),
          q("Beta blockers are indicated in which AHA stages?", "B and C (stable HF)", ["D only", "A only", "Acute decompensation"], "Slide 115."),
          q("Beta blockers lower HF mortality mainly by reducing:", "Arrhythmias and sudden death", ["Potassium", "Cough", "Edema directly"], "Slide 115."),
          q("Which situation requires holding a beta blocker?", "Acutely decompensated heart failure", ["Stable NYHA II", "Stage B after MI", "Controlled hypertension"], "Slide 116."),
          q("Which is a contraindication to beta blockers in HF?", "Cardiogenic shock", ["Stable stage C HFrEF", "Prior MI", "AF with rapid rate in a stable patient"], "Slide 116."),
          q("Bronchospasm is a side effect mainly of:", "Non-cardioselective beta blockers", ["Cardioselective ones only", "ACE inhibitors", "Loop diuretics"], "Slide 116."),
          q("How should beta blockers be started in HF?", "Low dose, titrated up gradually", ["Full dose at once", "IV bolus in the ED", "Only after transplant"], "Slide 115.")],
        [q("A patient arrives in the ED with flash pulmonary edema; he takes carvedilol at home. What should happen to the carvedilol acutely?", "Hold it during acute decompensation", ["Double it", "Give it IV", "Switch to propranolol"], "Slide 116."),
          q("A stable HFrEF patient, NYHA II, is on lisinopril and furosemide. Which mortality-lowering drug class should be added?", "A beta blocker such as carvedilol or metoprolol succinate", ["Verapamil", "Digoxin first", "NSAID"], "Slides 115 and 158."),
          q("After starting bisoprolol, an HF patient's heart rate is 48 and he feels dizzy. Which side effect?", "Bradycardia (with hypotension)", ["Hyperkalemia", "Cough", "Angioedema"], "Slide 116.")])
    ]),

    S("22-loop-diuretics", "22. Loop diuretics", "Objective 13.5 (slides 118 to 121): names, MOA, what diuretics do in HF, side effects, uses and outpatient dosing.", [
      C("Diuretics in general, and loops",
        "<p><strong>All diuretics:</strong> renal excretion of water and sodium → ↓ blood volume → ↓ <strong>preload</strong> and ↓ <strong>congestion</strong>. Rapid relief of pulmonary and peripheral edema. <strong>In general, diuretics have NOT been shown to improve survival.</strong></p>" +
        tbl(["", "Loop diuretics"], [
          ["Names", "<strong>Furosemide (Lasix)</strong>, <strong>bumetanide (Bumex)</strong>, <strong>torsemide (Demadex)</strong>"],
          ["MOA", "↓ <strong>NaCl reabsorption</strong> in the <strong>thick ascending limb of the loop of Henle</strong>"],
          ["Side effects", "<strong>Hypokalemia</strong>, <strong>metabolic alkalosis</strong>, hypovolemia, hypotension, azotemia, hyponatremia, <strong>hyperuricemia</strong>, <strong>sulfa</strong> concerns"],
          ["Use", "<strong>All stages</strong> for symptom relief; used in <strong>decompensated HF</strong>"],
          ["Outpatient dosing", "Titrate until diuretic effect: Lasix often starts <strong>20 mg daily</strong>; severe HF may need up to <strong>80 mg BID</strong>"]]),
        ["hf-diuretics-general", "hf-loop-names-moa", "hf-loop-se"],
        [q("Where do loop diuretics act?", "Thick ascending limb of the loop of Henle", ["Distal convoluted tubule", "Collecting duct", "Proximal tubule only"], "Slide 120."),
          q("What is the brand name of furosemide?", "Lasix", ["Bumex", "Demadex", "Aldactone"], "Slide 121."),
          q("What is the brand name of bumetanide?", "Bumex", ["Lasix", "Demadex", "Zaroxolyn"], "Slide 121."),
          q("What is the brand name of torsemide?", "Demadex", ["Bumex", "Lasix", "Inspra"], "Slide 121."),
          q("Do diuretics in general improve survival in HF?", "No, they relieve symptoms but have not been shown to improve survival", ["Yes, more than any other class", "Only thiazides", "Only in HFpEF"], "Slide 119."),
          q("Diuretics mainly reduce:", "Preload and congestion", ["Afterload only", "Heart rate", "Contractility"], "Slide 119."),
          q("Which potassium problem do loop diuretics cause?", "Hypokalemia", ["Hyperkalemia", "No change", "Hypercalcemia"], "Slide 120."),
          q("Which acid-base change do loop diuretics cause?", "Metabolic alkalosis", ["Metabolic acidosis", "Respiratory acidosis", "None"], "Slide 120."),
          q("Which uric acid change do loop diuretics cause?", "Hyperuricemia", ["Hypouricemia", "None", "Uric acid stones dissolve"], "Slide 120."),
          q("Which allergy is a concern with loop diuretics?", "Sulfa", ["Penicillin", "Egg", "Latex"], "Slide 120."),
          q("A typical starting outpatient dose of Lasix:", "20 mg daily", ["200 mg daily", "2 mg daily", "500 mg BID"], "Slide 121.")],
        [q("An HF patient on furosemide has muscle cramps and a potassium of 3.0. Cause?", "Loop diuretic-induced hypokalemia", ["ACE inhibitor hyperkalemia", "Spironolactone", "Digoxin toxicity only"], "Slide 120."),
          q("An HF patient on furosemide develops a painful swollen big toe. Which side effect contributed?", "Hyperuricemia (gout)", ["Hypokalemia", "Hypercalcemia", "Gynecomastia"], "Slide 120."),
          q("A patient with HFrEF asks if his Lasix will help him live longer. Best answer?", "It relieves congestion and symptoms, but diuretics have not been shown to improve survival", ["Yes, it is the main life-saving drug", "No, it does nothing", "Only if taken at night"], "Slide 119.")])
    ]),

    S("23-thiazides", "23. Thiazide and thiazide-like diuretics", "Objective 13.6 (slides 122 to 123): names, MOA, monitoring, side effects and HF use.", [
      C("Thiazides",
        tbl(["", "Thiazide / thiazide-like"], [
          ["Names", "<strong>Chlorothiazide (Diuril)</strong>, <strong>chlorthalidone (Hygroton)</strong>, <strong>hydrochlorothiazide (HCTZ, Hydrodiuril)</strong>, <strong>metolazone (Zaroxolyn)</strong>"],
          ["MOA", "Inhibit Na and Cl transport in the <strong>distal convoluted tubule</strong>"],
          ["Monitoring", "<strong>Ineffective if CrCl under 30</strong>"],
          ["Side effects", "<strong>Hypercalcemia</strong>, hypokalemia, hypochloremic alkalosis, hyponatremia, hypomagnesemia, hypotension, possible sulfa cross-reaction"],
          ["HF use", "Mild antihypertensive; added in <strong>stage A, B and C</strong> for symptom relief; <strong>may be combined with a loop</strong>"]]) +
        hy("Calcium: <strong>loops lose calcium</strong>, <strong>thiazides keep calcium</strong> (hypercalcemia). Both lose potassium."),
        ["hf-thiazide-names-moa", "hf-thiazide-se-use"],
        [q("Where do thiazides act?", "Distal convoluted tubule", ["Thick ascending limb", "Collecting duct only", "Glomerulus"], "Slide 122."),
          q("Thiazides become ineffective when CrCl is below:", "30", ["90", "60", "120"], "Slide 122."),
          q("Which calcium change do thiazides cause?", "Hypercalcemia", ["Hypocalcemia", "None", "Calcium stones dissolve"], "Slide 122."),
          q("What is the brand name of metolazone?", "Zaroxolyn", ["Hygroton", "Diuril", "Lasix"], "Slide 123."),
          q("What is the brand name of chlorthalidone?", "Hygroton", ["Zaroxolyn", "Diuril", "Demadex"], "Slide 123."),
          q("What is the brand name of chlorothiazide?", "Diuril", ["Hydrodiuril", "Hygroton", "Bumex"], "Slide 123."),
          q("Which magnesium change do thiazides cause?", "Hypomagnesemia", ["Hypermagnesemia", "None", "Magnesium toxicity"], "Slide 122."),
          q("Thiazides may be combined with which diuretic in HF?", "A loop diuretic", ["Another thiazide only", "Mannitol", "Acetazolamide only"], "Slide 122."),
          q("Thiazides are added in which AHA stages for symptom relief?", "A, B and C", ["D only", "None", "Only in pregnancy"], "Slide 122.")],
        [q("An HF patient on HCTZ has a calcium of 11.2. Likely cause?", "Thiazide-induced hypercalcemia", ["Loop diuretic", "ACE inhibitor", "Digoxin"], "Slide 122."),
          q("A patient with HF and CrCl 22 is on HCTZ but remains edematous. Why?", "Thiazides are ineffective when CrCl is under 30", ["HCTZ is too strong", "He needs more salt", "HCTZ only works with digoxin"], "Slide 122."),
          q("A patient on high-dose furosemide still has edema. Which diuretic can be added?", "A thiazide-like diuretic such as metolazone", ["A second loop", "An NSAID", "A calcium channel blocker"], "Slide 122.")])
    ]),

    S("24-aldosterone-antagonists", "24. Aldosterone antagonists", "Objective 13.7 (slides 124 to 125): names, MOA, side effects, contraindication, monitoring, indications and research.", [
      C("Spironolactone and eplerenone",
        tbl(["", "Aldosterone antagonists (potassium-sparing)"], [
          ["Names", "<strong>Spironolactone (Aldactone)</strong>, <strong>eplerenone (Inspra)</strong>"],
          ["MOA", "<strong>Competitively block aldosterone</strong> in the distal tubule → Na and water out, <strong>K kept</strong>"],
          ["Side effects", "<strong>Gynecomastia</strong>, menstrual abnormalities, <strong>impotence</strong>, ↓ libido, <strong>hyperkalemia</strong>, hypertriglyceridemia, renal failure"],
          ["Contraindication", "<strong>Hyperkalemia</strong>"],
          ["Monitoring", "<strong>Check K before starting</strong> and monitor closely; risk ↑ with <strong>renal impairment</strong>, K intake, and <strong>ACEi, ARB, NSAIDs</strong>"],
          ["Indications", "Add-on in <strong>moderate to severe HF (stage C and D)</strong> unresponsive to other therapy; <strong>severe LV systolic dysfunction</strong>; <strong>improve outcome after MI</strong>"]]) +
        mn("<strong>Spironolactone</strong> blocks androgen receptors too (standard teaching), so men get <strong>breasts and impotence</strong>. <strong>Eplerenone</strong> is the more selective option."),
        ["hf-mra-names-moa", "hf-mra-se", "hf-mra-use"],
        [q("What is the brand name of spironolactone?", "Aldactone", ["Inspra", "Midamor", "Dyrenium"], "Slide 124."),
          q("What is the brand name of eplerenone?", "Inspra", ["Aldactone", "Zaroxolyn", "Entresto"], "Slide 124."),
          q("How do aldosterone antagonists work?", "Competitively block aldosterone in the distal tubule", ["Block the Na-K-2Cl pump", "Block ENaC directly", "Block ACE"], "Slide 124."),
          q("Which spironolactone side effect affects male breasts?", "Gynecomastia", ["Galactorrhea only in women", "Breast cancer", "None"], "Slide 124."),
          q("What is the contraindication to aldosterone antagonists?", "Hyperkalemia", ["Hypokalemia", "Gout", "Asthma"], "Slide 124."),
          q("What must be checked before starting spironolactone?", "Potassium", ["LDL", "TSH", "Uric acid"], "Slide 125."),
          q("Which drugs raise hyperkalemia risk with aldosterone antagonists?", "ACE inhibitors, ARBs, NSAIDs", ["Loop diuretics", "Thiazides", "Beta-2 agonists"], "Slide 125."),
          q("Aldosterone antagonists are indicated in which HF stages?", "C and D (moderate to severe)", ["A only", "B only", "None"], "Slide 125."),
          q("Aldosterone antagonists improve outcome in HF patients after:", "MI", ["Appendectomy", "Stroke only", "Pneumonia"], "Slide 125."),
          q("Which lipid change can spironolactone cause?", "Hypertriglyceridemia", ["Low triglycerides", "Low LDL", "High HDL"], "Slide 124.")],
        [q("A man on spironolactone for HFrEF has new tender breast enlargement. Cause and option?", "Spironolactone gynecomastia; eplerenone is an alternative", ["Lisinopril cough", "Furosemide hypokalemia", "Normal aging"], "Slide 124."),
          q("An HF patient on lisinopril and spironolactone takes ibuprofen for back pain. Potassium is 6.1. Why?", "ACEi plus aldosterone antagonist plus NSAID all raise potassium", ["Ibuprofen lowers potassium", "Spironolactone wastes potassium", "Lab error only"], "Slide 125."),
          q("A patient with HFrEF NYHA III is on an ACEi, beta blocker and loop. Potassium is 4.2 and creatinine normal. Which add-on lowers mortality?", "An aldosterone antagonist (spironolactone or eplerenone)", ["A thiazide alone", "A calcium channel blocker", "Ibuprofen"], "Slides 125 and 158.")])
    ]),

    S("25-na-channel", "25. Sodium channel inhibitors (amiloride, triamterene)", "Objective 13.8 (slide 126): names, MOA and side effects.", [
      C("Amiloride and triamterene",
        tbl(["", "Na channel inhibitors (potassium-sparing)"], [
          ["Names", "<strong>Amiloride (Midamor)</strong>, <strong>triamterene (Dyrenium)</strong>"],
          ["MOA", "<strong>Directly inhibit sodium channels</strong> tied to the aldosterone-sensitive sodium pump → similar effect on potassium (<strong>K kept</strong>)"],
          ["Side effects", "<strong>Hyperkalemia</strong>, fatigue, hypotension, azotemia"]]) +
        hy("Both potassium-sparing groups keep K: aldosterone antagonists block the <strong>hormone</strong>; amiloride and triamterene block the <strong>channel</strong> directly (no gynecomastia)."),
        ["hf-enac-names-moa", "hf-enac-se"],
        [q("What is the brand name of amiloride?", "Midamor", ["Dyrenium", "Aldactone", "Inspra"], "Slide 126."),
          q("What is the brand name of triamterene?", "Dyrenium", ["Midamor", "Demadex", "Diuril"], "Slide 126."),
          q("How do amiloride and triamterene work?", "Directly inhibit sodium channels linked to the aldosterone-sensitive pump", ["Block aldosterone receptors", "Block the loop of Henle", "Block ACE"], "Slide 126."),
          q("Main electrolyte side effect of amiloride and triamterene:", "Hyperkalemia", ["Hypokalemia", "Hypercalcemia", "Hypernatremia"], "Slide 126."),
          q("Which side effects are listed for Na channel inhibitors?", "Hyperkalemia, fatigue, hypotension, azotemia", ["Gynecomastia and impotence", "Cough and angioedema", "Hyperuricemia and sulfa allergy"], "Slide 126."),
          q("Amiloride and triamterene belong to which diuretic group?", "Potassium-sparing diuretics", ["Loop diuretics", "Thiazides", "Osmotic diuretics"], "Slide 126.")],
        [q("A patient on lisinopril and triamterene has a potassium of 6.0. Which drug combination explains it?", "ACE inhibitor plus a potassium-sparing diuretic", ["Two loop diuretics", "Thiazide plus loop", "Beta blocker plus digoxin"], "Slides 109 and 126."),
          q("A man developed gynecomastia on spironolactone but still needs a potassium-sparing diuretic. Which class avoids the hormonal effect?", "A Na channel inhibitor such as amiloride", ["Another aldosterone antagonist at higher dose", "A loop diuretic", "Digoxin"], "Slides 124 and 126.")])
    ]),

    S("26-arni", "26. ARNI: sacubitril/valsartan (Entresto)", "Objective 13.9 (slides 127 to 129): name, MOA, research, place in therapy, washout, contraindications and boxed warning.", [
      C("Entresto",
        tbl(["", "ARNI"], [
          ["Name", "<strong>Sacubitril/valsartan (Entresto)</strong>"],
          ["MOA", "<strong>Valsartan</strong> blocks harmful RAAS activation; <strong>sacubitril</strong> inhibits <strong>neprilysin</strong>, the enzyme that degrades <strong>natriuretic peptides</strong>, so the helpful peptides rise"],
          ["Research", "<strong>20% fewer HF hospitalizations</strong> than an ACEi alone; trial <strong>stopped early</strong> for benefit"],
          ["Place", "Recommended for patients <strong>taking and tolerating a max-dose ACEi or ARB</strong>; some consider it first-line instead (TBD)"],
          ["<strong>3-day washout</strong>", "<strong>Stop any ACEi or ARB 3 days before</strong> starting Entresto (minimizes <strong>angioedema</strong>, hypotension, hyperkalemia)"],
          ["Contraindications", "<strong>History of angioedema</strong>; <strong>GFR under 30</strong>"],
          ["Boxed warning", "Fetal toxicity: stop when pregnancy is detected"]]) +
        chain(["Neprilysin normally breaks down ANP and BNP", "Sacubitril blocks neprilysin", "More natriuretic peptide: natriuresis, vasodilation, less SNS and RAAS", "Valsartan blocks angiotensin II at the same time"]),
        ["hf-arni-moa", "hf-arni-evidence", "hf-arni-washout"],
        [q("What is the brand name of sacubitril/valsartan?", "Entresto", ["BiDil", "Farxiga", "Corlanor"], "Slide 128."),
          q("What does sacubitril inhibit?", "Neprilysin", ["ACE", "The angiotensin II receptor", "SGLT2"], "Slide 128."),
          q("Neprilysin normally degrades:", "Natriuretic peptides", ["Angiotensin I", "Aldosterone", "Glucose"], "Slide 128."),
          q("How much did ARNI reduce HF hospitalizations compared with an ACEi?", "20%", ["2%", "50%", "90%"], "Slide 128."),
          q("How long must an ACEi or ARB be stopped before starting Entresto?", "3 days", ["3 hours", "3 weeks", "No washout needed"], "Slide 129."),
          q("Why is the 3-day washout done?", "To minimize angioedema, hypotension and hyperkalemia", ["To raise BNP", "To check liver function", "To lower heart rate"], "Slide 129."),
          q("Which GFR contraindicates Entresto?", "Under 30 mL/min", ["Under 90 mL/min", "Over 60 mL/min", "Any GFR"], "Slide 129."),
          q("ARNI is recommended as alternative therapy in patients who are:", "Taking and tolerating a max-dose ACEi or ARB", ["Allergic to all RAAS drugs", "In cardiogenic shock", "Pregnant"], "Slide 128."),
          q("Why was the ARNI trial stopped early?", "Significant benefit in the treatment arm", ["Too many deaths", "Lack of funding", "No difference"], "Slide 128."),
          q("Which history contraindicates Entresto?", "Angioedema", ["Gout", "Asthma", "Migraine"], "Slide 129.")],
        [q("A patient on max-dose lisinopril for HFrEF is switching to Entresto. Plan?", "Stop lisinopril, wait 3 days, then start Entresto", ["Start Entresto the same day and keep lisinopril", "Take both together permanently", "Stop lisinopril the day after starting"], "Slide 129."),
          q("A patient with HFrEF has a GFR of 24. Is Entresto appropriate?", "No: GFR under 30 is a contraindication", ["Yes, it protects the kidneys", "Yes, at double dose", "Only if BNP is high"], "Slide 129."),
          q("Why does an ARNI lower BNP-related harm while BNP lab levels may change?", "Blocking neprilysin raises natriuretic peptide activity, which counters RAAS and SNS", ["It destroys BNP", "It raises angiotensin II", "It blocks ADH only"], "Slide 128; links to the natriuretic peptide section.")])
    ]),

    S("27-digoxin", "27. Digoxin and other inotropes", "Objective 13.10 (slides 130 to 133): MOA, indications, effects on HF, side effects, contraindication, HFpEF caution, research, and other inotropes.", [
      C("Digoxin",
        tbl(["", "Digoxin"], [
          ["MOA", "<strong>Inhibits Na-K-ATPase</strong> → ↑ intracellular <strong>calcium</strong> → ↑ <strong>contractility</strong>, systolic function and CO (inotrope)"],
          ["Uses", "<strong>Rate control in HF with AF</strong>; <strong>late stage C and D</strong>"],
          ["Research", "↓ <strong>symptoms</strong> and <strong>hospitalizations</strong> in HFrEF; <strong>NO mortality benefit</strong>"],
          ["Place", "Reserved for <strong>continued symptoms</strong> after ACE/ARB/ARNI and diuretic"],
          ["Side effects", "<strong>Digoxin toxicity</strong> (GI, neuro, systemic); <strong>tachy- and bradyarrhythmias</strong>"],
          ["Contraindication", "<strong>Prior VT or VF</strong>"],
          ["HFpEF caution", "Calcium influx <strong>worsens diastolic function</strong>; only for HFrEF"]]) +
        hy("<strong>Other inotropes</strong> (milrinone, vesnarinone, xamoterol) <strong>increase mortality</strong> with long-term use: they are <strong>arrhythmogenic</strong>."),
        ["hf-dig-moa", "hf-dig-use", "hf-dig-safety", "hf-other-inotropes"],
        [q("How does digoxin increase contractility?", "Inhibits the Na-K-ATPase pump, raising intracellular calcium", ["Blocks beta receptors", "Blocks calcium channels", "Inhibits neprilysin"], "Slide 132."),
          q("Does digoxin lower HF mortality?", "No", ["Yes, more than any drug", "Yes, in HFpEF", "Only with ivabradine"], "Slide 131."),
          q("What does digoxin improve in HFrEF?", "Symptoms and hospitalizations", ["Mortality", "Remodeling", "Renal function"], "Slide 131."),
          q("Digoxin provides rate control in HF patients with:", "Atrial fibrillation", ["Sinus bradycardia", "Complete heart block", "VT"], "Slide 131."),
          q("Digoxin is used in which stages?", "Late C and D", ["A and B", "A only", "Never in HF"], "Slide 131."),
          q("What is the contraindication to digoxin?", "Prior VT or VF", ["Prior AF", "Hypertension", "Hyperlipidemia"], "Slide 132."),
          q("Why use digoxin with caution in HFpEF?", "Calcium influx worsens diastolic function", ["It lowers EF", "It causes cough", "It raises potassium"], "Slide 132."),
          q("Long-term use of milrinone and similar inotropes does what to mortality?", "Increases it (arrhythmogenic)", ["Decreases it", "No effect", "Cures HF"], "Slide 133."),
          q("Digoxin should be reserved for patients who still have symptoms after:", "ACE/ARB/ARNI and a diuretic", ["Aspirin alone", "No therapy", "Ivabradine only"], "Slide 131."),
          q("Which side effects define digoxin toxicity on the slide?", "GI, neurologic and generalized symptoms, plus tachy- and bradyarrhythmias", ["Cough and angioedema", "Gynecomastia only", "Hyperuricemia"], "Slide 132.")],
        [q("An HFrEF patient on full GDMT still has symptoms and AF with a fast rate. Which drug gives rate control plus inotropy?", "Digoxin", ["Verapamil", "Milrinone long term", "Dronedarone"], "Slide 131."),
          q("A patient with HFpEF and AF: is digoxin a good choice?", "Use with caution: it promotes calcium influx and worsens diastolic function", ["Yes, first-line", "Yes, lowers mortality", "Required for all HFpEF"], "Slide 132."),
          q("A patient with HFrEF who survived VF arrest: can he take digoxin?", "No: prior VT/VF is a contraindication", ["Yes", "Yes, at high dose", "Only with milrinone"], "Slide 132.")])
    ]),

    S("28-ivabradine", "28. Ivabradine", "Objective 13.11 (slide 135): MOA, effect on HF and the heart rate rule.", [
      C("Ivabradine",
        tbl(["", "Ivabradine"], [
          ["MOA", "<strong>Selective inhibitor of the SA node \"funny current\" (If)</strong> → <strong>lowers heart rate</strong>"],
          ["Helps when", "Patient on appropriate therapy with <strong>HR over 75</strong>: <strong>lowers mortality</strong>"],
          ["No help when", "Patient on appropriate therapy with <strong>HR under 75</strong>: no mortality benefit"],
          ["Place", "<strong>2nd-line add-on</strong> in stage C HFrEF"]]) +
        mn("<strong>Ivabradine = I(f) brake</strong>. Only worth it if the heart is still <strong>above 75</strong> on a beta blocker."),
        ["hf-ivab"],
        [q("Ivabradine inhibits which current?", "The SA node funny current (If)", ["The L-type calcium current", "The delayed rectifier K current", "The Na-K-ATPase pump"], "Slide 135."),
          q("What does ivabradine do to heart rate?", "Lowers it", ["Raises it", "No effect", "Makes it irregular"], "Slide 135."),
          q("Ivabradine lowers mortality in HF patients on appropriate therapy when the HR is:", "Over 75 bpm", ["Under 75 bpm", "Under 50 bpm", "Any rate"], "Slide 135."),
          q("Is ivabradine useful when HR is under 75 on appropriate therapy?", "No mortality improvement", ["Yes, large benefit", "Only in HFpEF", "Only in children"], "Slide 135."),
          q("Ivabradine is which line of therapy in stage C HFrEF?", "2nd-line add-on", ["1st-line before everything", "Only in stage A", "Contraindicated"], "Slide 158.")],
        [q("A stable HFrEF patient on max-tolerated metoprolol succinate, ACEi and spironolactone has a resting sinus rate of 84. Which add-on lowers mortality?", "Ivabradine", ["Verapamil", "Milrinone", "Ibuprofen"], "Slide 135."),
          q("A patient on optimal therapy has a heart rate of 64. Should ivabradine be added for mortality?", "No: below 75 it shows no mortality benefit", ["Yes, always", "Yes, double dose", "Only with digoxin"], "Slide 135.")])
    ]),

    S("29-sglt2", "29. SGLT2 inhibitors", "Objective 13.12 (slides 136 to 137): names, side effects and the DAPA-HF trial.", [
      C("SGLT2 inhibitors",
        tbl(["", "SGLT2 inhibitors"], [
          ["Names", "<strong>Dapagliflozin (Farxiga)</strong>, <strong>empagliflozin (Jardiance)</strong>"],
          ["Proposed MOA", "Block sodium-glucose cotransporter 2 in the proximal tubule → glucose and sodium lost in urine → natriuresis and ↓ preload (standard teaching)"],
          ["Side effects", "<strong>Frequent urination</strong>, ↑ <strong>urinary and groin infections</strong>, hypotension, ↑ risk of <strong>foot amputation</strong>"],
          ["Research", "<strong>DAPA-HF</strong>: dapagliflozin ↓ <strong>mortality and HF progression</strong> in HFrEF (<strong>NYHA II to IV</strong>) <strong>with or without diabetes</strong>"],
          ["Place", "Add-on in stage C HFrEF (the deck's 2nd-line list)"]]) +
        hy("Big point: SGLT2 inhibitors help HF <strong>even in patients without diabetes</strong>."),
        ["hf-sglt2-names", "hf-sglt2-se", "hf-dapa-hf"],
        [q("What is the brand name of dapagliflozin?", "Farxiga", ["Jardiance", "Entresto", "Januvia"], "Slide 137."),
          q("What is the brand name of empagliflozin?", "Jardiance", ["Farxiga", "Invokana", "Corlanor"], "Slide 137."),
          q("Which trial showed dapagliflozin lowers mortality in HFrEF?", "DAPA-HF", ["PARADIGM-HF", "SYNTAX", "FRAMINGHAM"], "Slide 137."),
          q("In DAPA-HF, did the benefit require diabetes?", "No: with or without diabetes", ["Yes, only diabetics", "Only type 1 diabetics", "Only prediabetics"], "Slide 137."),
          q("Which NYHA classes were in DAPA-HF?", "II, III and IV", ["I only", "IV only", "None; only stage A"], "Slide 137."),
          q("Which infection risk rises with SGLT2 inhibitors?", "Urinary and groin infections", ["Pneumonia", "Meningitis", "Endocarditis"], "Slide 137."),
          q("Which serious limb risk is listed with SGLT2 inhibitors?", "Foot amputation", ["DVT", "Compartment syndrome", "Gout"], "Slide 137."),
          q("Frequent urination with SGLT2 inhibitors comes from:", "Glucose and sodium lost in the urine", ["ADH excess", "Bladder spasm", "Hypercalcemia"], "Slide 137; mechanism is standard teaching.")],
        [q("A non-diabetic patient with HFrEF, NYHA II, asks why his cardiologist added Farxiga, a diabetes drug. Best answer?", "DAPA-HF showed dapagliflozin lowers death and HF progression with or without diabetes", ["It is only for blood sugar", "It is a mistake", "It replaces his beta blocker"], "Slide 137."),
          q("A diabetic HF patient on empagliflozin has recurrent yeast infections. Which side effect?", "Genital (groin) infections from glucose in the urine", ["Hyperkalemia", "Cough", "Gynecomastia"], "Slide 137.")])
    ]),

    /* ================= TREATMENT BY STAGE (objective 14) ================= */

    S("30-stage-a-b", "30. Treatment by stage: A and B", "Objective 14 (slides 140, 145 to 149): goals and treatment for stage A and stage B, and ICDs.", [
      C("Stages A and B",
        tbl(["Stage", "Goals", "Treatment"], [
          ["<strong>A</strong>: high risk, no structural disease or symptoms", "Heart-healthy lifestyle; prevent vascular/coronary disease; prevent LV structural changes", "<strong>Quit smoking</strong>, <strong>lose weight</strong>, <strong>exercise</strong>, <strong>avoid cardiotoxins</strong> (alcohol, drugs); treat <strong>HTN with ACEi/ARB</strong>; treat <strong>lipids with a statin</strong>; manage CAD, DM, HTN, AF"],
          ["<strong>B</strong>: structural disease, no symptoms", "<strong>Prevent symptoms</strong>; <strong>prevent further remodeling</strong>", "Stage A measures + antihypertensives (<strong>start low, go slow</strong>): <strong>ACEi 1st line</strong>, OR <strong>ARB</strong> if ACEi cough; <strong>beta blocker</strong> as adjunctive 2nd line if HTN persists; <strong>cardiology referral</strong> to screen for CAD and valve disease (discuss surgery); <strong>ICD</strong> if indicated (ventricular arrhythmia history)"]]) +
        hy("<strong>ICD</strong>: HF patients are at high risk of <strong>VF and VT</strong>; an ICD monitors the rhythm, can pace, and shocks lethal arrhythmias to <strong>prevent sudden cardiac death</strong>."),
        ["hf-stage-a-tx", "hf-stage-b-tx", "hf-icd"],
        [q("What are the goals of stage A treatment?", "Heart-healthy lifestyle, prevent vascular disease, prevent LV structural changes", ["Control symptoms and prevent hospitalization", "End-of-life planning", "Transplant evaluation"], "Slide 145."),
          q("Which drug treats HTN in stage A on the slide?", "ACEi or ARB", ["Digoxin", "Ivabradine", "Milrinone"], "Slide 146."),
          q("Which drug treats dyslipidemia in stage A?", "Statin", ["Niacin only", "Digoxin", "Spironolactone"], "Slide 146."),
          q("What are the goals of stage B treatment?", "Prevent HF symptoms and further cardiac remodeling", ["Relieve congestion only", "Hospice", "Rate control only"], "Slide 147."),
          q("First-line antihypertensive in stage B:", "ACE inhibitor", ["Beta blocker", "Thiazide", "Digoxin"], "Slide 148."),
          q("When is an ARB used in stage B?", "If the patient cannot tolerate an ACEi due to cough", ["Always with an ACEi", "Never", "Only in stage D"], "Slide 148."),
          q("Beta blocker role in stage B:", "Adjunctive 2nd-line agent if hypertension persists", ["First-line for all", "Contraindicated", "Only IV"], "Slide 148."),
          q("Stage B patients should be referred to cardiology to screen for:", "CAD and valvular disease", ["Diabetes", "Thyroid disease", "Asthma"], "Slide 148."),
          q("What does an ICD do?", "Monitors the rhythm, paces, and shocks lethal arrhythmias to prevent sudden death", ["Lowers cholesterol", "Pumps blood like an LVAD", "Removes fluid"], "Slide 149."),
          q("How should antihypertensives be started in stage B?", "Start low, go slow", ["Start at max dose", "Only IV", "Never start them"], "Slide 148.")],
        [q("A 58-year-old with diabetes, HTN and obesity, normal echo, no symptoms. Which plan fits?", "Stage A: lifestyle, ACEi/ARB for HTN, statin, manage DM", ["Stage C triple therapy", "Digoxin", "Hospice"], "Slide 146."),
          q("A patient with a prior MI and EF 40% has no symptoms. First-line drug?", "ACE inhibitor (stage B)", ["Digoxin", "Ivabradine", "Milrinone"], "Slide 148."),
          q("A stage B patient on an ACEi still has BP 148/92. What adjunctive agent does the slide add?", "A beta blocker", ["Digoxin", "A second ACEi", "Ivabradine"], "Slide 148.")])
    ]),

    S("31-stage-c", "31. Treatment by stage: C (HFpEF and HFrEF)", "Objective 14 (slides 150 to 158): goals, HFpEF diuretic caution, BP control, avoiding tachycardia and keeping atrial rhythm, and the HFrEF regimen.", [
      C("Stage C HFpEF",
        "<p><strong>Stage C goals:</strong> control symptoms, improve quality of life, prevent hospitalization, prevent death.</p>" +
        tbl(["HFpEF stage C", "Detail"], [
          ["Diuretics", "Symptom relief of volume overload. <strong>ACE, ARB, ARNI and BB have shown no mortality benefit in HFpEF.</strong>"],
          ["<strong>Caution</strong>", "HFpEF is a <strong>filling problem</strong>: too much diuresis drops preload/EDV → big drop in CO → <strong>lightheadedness, dizziness, syncope, fatigue, worse renal function</strong>"],
          ["Preferred diuretic", "<strong>Potassium-sparing</strong>; if K is too high, <strong>low-dose loop or thiazide</strong> with close monitoring"],
          ["BP", "Most HFpEF patients take an <strong>ACEi or ARB</strong> for HTN; diastolic function improves with <strong>lower BP regardless of drug</strong>"],
          ["<strong>Avoid tachycardia</strong>", "↑ O2 demand, ↓ coronary perfusion time, ↓ diastolic filling → ischemia even without CAD"],
          ["Keep atrial conduction", "AF or flutter → <strong>cardioversion or ablation</strong>; <strong>pacemaker</strong> for AV synchrony or chronotropic incompetence"]]),
        ["hf-stage-c-goals", "hf-pef-diuresis", "hf-pef-rate-rhythm"],
        [q("Stage C goals include:", "Control symptoms, improve QOL, prevent hospitalization and death", ["Prevent structural disease only", "Comfort care only", "Transplant only"], "Slide 150."),
          q("Which drug classes have shown NO mortality benefit in HFpEF?", "ACE, ARB, ARNI and beta blockers", ["Diuretics for symptoms", "Statins for lipids", "Oxygen"], "Slide 151."),
          q("Why must diuretics be used with caution in HFpEF?", "HFpEF is a filling problem; over-diuresis drops preload and cardiac output", ["They cause tachycardia", "They raise EF", "They are ineffective"], "Slide 152."),
          q("Which signs suggest over-diuresis in HFpEF?", "Lightheadedness, syncope, fatigue and worsening renal function", ["Weight gain and edema", "Rales and JVD", "S3 gallop"], "Slide 152."),
          q("Which diuretic type is preferred in HFpEF?", "Potassium-sparing", ["High-dose loop", "Osmotic", "Carbonic anhydrase inhibitor"], "Slide 153."),
          q("Diastolic function in HFpEF improves with:", "Lower blood pressure, regardless of drug type", ["Only ARNI", "Only digoxin", "Higher heart rate"], "Slide 154."),
          q("Why avoid tachycardia in HFpEF?", "It raises O2 demand and shortens coronary perfusion and diastolic filling time", ["It lowers BP too much", "It causes diuresis", "It causes hyperkalemia"], "Slide 155."),
          q("HFpEF patients with AF or flutter should have:", "Cardioversion or ablation to keep atrial conduction", ["No treatment", "Digoxin first-line", "Higher heart rate targets"], "Slide 156."),
          q("When would an HFpEF patient get a pacemaker?", "For AV synchrony or chronotropic incompetence", ["For hypertension", "For hyperkalemia", "Never"], "Slide 156.")],
        [q("An elderly HFpEF patient on furosemide 80 mg BID now has dizziness, a near-faint and rising creatinine. Why?", "Over-diuresis dropped preload in a stiff ventricle that depends on filling", ["Too little diuretic", "Pulmonary edema", "Digoxin toxicity"], "Slide 152."),
          q("An HFpEF patient with new AF at 130 bpm becomes much more dyspneic. Plan from the slides?", "Control the rate and restore sinus rhythm (cardioversion or ablation)", ["Ignore the AF", "Add milrinone", "Increase the heart rate further"], "Slides 155 and 156."),
          q("An HFpEF patient with mild edema has a potassium of 3.9. Which diuretic is preferred?", "A potassium-sparing diuretic", ["High-dose IV loop", "No diuretic ever", "Mannitol"], "Slide 153.")]),
      C("Stage C HFrEF",
        tbl(["Step", "HFrEF stage C"], [
          ["<strong>Non-drug</strong>", "Low sodium, less fluid; <strong>smoking cessation</strong>; <strong>tight glucose control</strong>; <strong>exercise (cardiac rehab)</strong>; <strong>sleep study</strong> for OSA"],
          ["<strong>Initial drugs</strong>", "<strong>Diuretic + RAAS inhibitor (ACEi, ARB or ARNI) + beta blocker</strong>"],
          ["<strong>2nd-line add-ons</strong>", "<strong>Aldosterone antagonist, ivabradine, dapagliflozin, hydralazine + nitrate, digoxin</strong>"],
          ["Other", "Cardiac rehab, <strong>ICD</strong>, revascularization, valve surgery, <strong>cardiac resynchronization therapy</strong>"]]) +
        mn("HFrEF base: <strong>\"Drain, Block, Slow\"</strong>: diuretic (drain), RAAS blocker (block), beta blocker (slow). Then add-ons: <strong>\"A-I-D-H-D\"</strong>: Aldosterone antagonist, Ivabradine, Dapagliflozin, Hydralazine/nitrate, Digoxin."),
        ["hf-ref-c-nonpharm", "hf-ref-c-drugs"],
        [q("What is the initial drug regimen for stage C HFrEF on the slide?", "Diuretic + RAAS inhibitor (ACEi, ARB or ARNI) + beta blocker", ["Digoxin + milrinone", "Aspirin + statin only", "Thiazide alone"], "Slide 158."),
          q("Which is a 2nd-line add-on in stage C HFrEF?", "Ivabradine", ["Verapamil", "Milrinone long term", "NSAIDs"], "Slide 158."),
          q("Which non-drug measure is listed for stage C HFrEF?", "Sleep lab evaluation for OSA", ["Bedrest", "High-salt diet", "Unlimited fluids"], "Slide 157."),
          q("Which device therapies appear in stage C HFrEF?", "ICD and cardiac resynchronization therapy", ["Holter only", "IABP for everyone", "Dialysis for everyone"], "Slide 158."),
          q("Which add-on is NOT on the stage C HFrEF 2nd-line list?", "Diltiazem", ["Dapagliflozin", "Hydralazine + nitrate", "Digoxin"], "Slide 158.")],
        [q("A new HFrEF patient, NYHA II, with edema is on no medications. Best initial regimen?", "Loop diuretic + ACEi (or ARB/ARNI) + beta blocker", ["Digoxin alone", "Milrinone", "Ivabradine alone"], "Slide 158."),
          q("An HFrEF patient on diuretic, ARNI and beta blocker still has symptoms; potassium and kidneys are fine. Which add-on?", "An aldosterone antagonist (or SGLT2 inhibitor)", ["Verapamil", "Ibuprofen", "Stop the beta blocker"], "Slide 158.")])
    ]),

    S("32-stage-d", "32. Treatment by stage: D (refractory HF)", "Objective 14 (slides 159 to 165): goals, what changes in stage D, digoxin, devices, IABP and LVAD, transplant and hospice.", [
      C("Stage D",
        tbl(["", "Stage D: refractory HF"], [
          ["Goals", "Control symptoms, improve QOL, <strong>reduce readmissions</strong>, establish <strong>end-of-life goals</strong>"],
          ["Drugs", "All of stage A, B and C measures <strong>except the beta blocker</strong>, ± <strong>inotropes</strong>: consider <strong>digoxin</strong> (rate control and contractility; no mortality benefit; ↓ symptoms and hospitalizations; <strong>HFrEF only, not HFpEF</strong>)"],
          ["Devices", "<strong>ICD</strong>, cardioversion, <strong>CardioMEMS</strong>, mechanical circulatory support, <strong>ultrafiltration/aquapheresis/dialysis</strong>, <strong>IABP</strong>, <strong>LVAD</strong>"],
          ["<strong>IABP</strong>", "Balloon <strong>inflates in diastole</strong>, <strong>deflates at the start of systole</strong> → <strong>greatly ↓ afterload</strong>"],
          ["<strong>LVAD</strong>", "Blood collected from the heart into a pump and returned to the circulation; <strong>bridge to transplant</strong> or <strong>long-term therapy</strong>"],
          ["<strong>Transplant</strong>", "Cannot be weaned from acute support or severe impairment despite therapy; <strong>younger</strong> patients with intractable HF and <strong>life expectancy under 6 months</strong>"],
          ["Other", "Research therapies; <strong>hospice</strong>/palliative care; consider <strong>ICD deactivation</strong>"]]),
        ["hf-stage-d-goals", "hf-stage-d-drugs", "hf-iabp-lvad", "hf-transplant-hospice"],
        [q("Which stage A to C drug is removed in stage D?", "Beta blocker", ["ACE inhibitor", "Diuretic", "Statin"], "Slide 161."),
          q("Which inotrope is considered in stage D?", "Digoxin", ["Long-term milrinone", "Verapamil", "Ivabradine"], "Slide 161."),
          q("In stage D, digoxin is only considered for:", "HFrEF, not HFpEF", ["HFpEF, not HFrEF", "Both equally", "Neither"], "Slide 161."),
          q("When does the IABP balloon inflate?", "During diastole", ["During systole", "Constantly", "Only during sleep"], "Slide 163."),
          q("What is the main effect of an IABP?", "Significantly decreases afterload", ["Raises afterload", "Removes fluid", "Paces the heart"], "Slide 163."),
          q("An LVAD can be used as:", "A bridge to transplant or long-term therapy", ["A diuretic", "A pacemaker", "A temporary contrast filter"], "Slide 163."),
          q("Heart transplant indication on the slide:", "Younger patients with intractable HF and life expectancy under 6 months", ["Any stage A patient", "Patients over 90", "Patients with stage B HF"], "Slide 165."),
          q("Stage D goals include:", "Control symptoms, reduce readmissions and establish end-of-life goals", ["Prevent structural disease", "Prevent risk factors only", "Cure HF with diuretics"], "Slide 160."),
          q("What may be considered at end of life in a stage D patient with an ICD?", "ICD deactivation", ["ICD upgrade", "More shocks", "Removing all medications abruptly"], "Slide 164."),
          q("Which fluid-removal options are listed as stage D devices?", "Ultrafiltration, aquapheresis, dialysis", ["Thoracentesis only", "Phlebotomy", "Paracentesis only"], "Slide 162.")],
        [q("A 45-year-old with refractory HFrEF on max therapy has an expected survival under 6 months. Best long-term option?", "Heart transplant evaluation (LVAD as a bridge)", ["Add a second beta blocker", "Cardiac rehab only", "Stop all therapy"], "Slides 163 and 165."),
          q("An 88-year-old with stage D HF and recurrent ICD shocks chooses comfort care. Which steps fit?", "Hospice care and consider ICD deactivation", ["Transplant listing", "LVAD as bridge", "More inotropes long term"], "Slide 164."),
          q("A stage D patient in cardiogenic shock is placed on a device that inflates in diastole. Which device and effect?", "IABP; it lowers afterload", ["LVAD; it raises afterload", "ICD; it shocks VF", "CardioMEMS; it measures PA pressure only"], "Slide 163.")])
    ]),

    S("33-comorbidities", "33. Comorbidities in heart failure", "Objective 15 (slides 99, 104, 146, 148, 155 to 157): managing diabetes, lipids, CAD, blood pressure, AF and arrhythmias, sleep apnea, anemia, and valve disease or cardiomyopathy.", [
      C("Comorbidities to prevent or manage",
        tbl(["Comorbidity", "Strategy from the deck"], [
          ["<strong>Diabetes</strong>", "Adequate (tight) glycemic control"],
          ["<strong>Lipids</strong>", "Lipid management (statin)"],
          ["<strong>CAD</strong>", "Stenting or revascularization when appropriate"],
          ["<strong>Blood pressure</strong>", "BP control; <strong>ACEi/ARB even with pre-HTN</strong>"],
          ["<strong>AF and other arrhythmias</strong>", "Manage; consider <strong>ICD</strong>; in HFpEF restore sinus rhythm"],
          ["<strong>OSA</strong>", "Treat with <strong>CPAP</strong>"],
          ["<strong>Anemia</strong>", "Treat (CBC finds anemia and iron deficiency)"],
          ["<strong>Valve disease, cardiomyopathy</strong>", "Treat as indicated (surgery referral)"],
          ["Smoking, alcohol, drugs", "Stop; avoid cardiotoxins"]]) +
        hy("Iatrogenic precipitants to avoid in HF patients (slide 167): <strong>negative inotropes</strong> (non-DHP CCBs, starting a BB in decompensation), <strong>salt-retaining drugs (NSAIDs, steroids)</strong>, and new antiarrhythmics (amiodarone)."),
        ["hf-comorbid-list", "hf-comorbid-drugs-avoid"],
        [q("Which BP drug does the deck use even in pre-hypertensive HF patients?", "ACEi or ARB", ["Clonidine", "Minoxidil", "Hydralazine alone"], "Slide 99."),
          q("How should obstructive sleep apnea be treated in HF?", "CPAP", ["Sedatives", "Oxygen only", "Nothing"], "Slide 104."),
          q("Which lab finding should prompt early treatment because it may reverse HF problems?", "Anemia and iron deficiency", ["Low LDL", "High HDL", "Normal TSH"], "Slide 86."),
          q("Which drugs can precipitate HF by causing salt retention?", "NSAIDs and steroids", ["Statins", "Aspirin at 81 mg", "Acetaminophen"], "Slide 167."),
          q("CAD in HF patients is managed with:", "Stenting or revascularization when appropriate", ["Avoiding all cardiology care", "Only diuretics", "Only digoxin"], "Slide 99."),
          q("Which glucose strategy is listed for HF patients with diabetes?", "Adequate, tight glycemic control", ["Ignore glucose", "Allow A1c over 12", "Only diet soda"], "Slides 99 and 157."),
          q("Which device is considered for HF patients with dangerous arrhythmias?", "ICD", ["Holter", "TR Band", "Foley"], "Slide 99.")],
        [q("An HF patient with knee arthritis asks to take naproxen daily. Best advice?", "Avoid NSAIDs: they cause salt retention and can precipitate decompensation", ["Fine at any dose", "Take double the dose", "Use with extra salt"], "Slide 167."),
          q("An HF patient has hemoglobin 9.8 with low ferritin. Plan?", "Treat the anemia and iron deficiency", ["Ignore it", "Transfuse to 16", "Stop the diuretic"], "Slides 86 and 99."),
          q("An HF patient with diabetes, HTN, OSA and AF. Which set of comorbidity strategies fits the deck?", "Tight glucose control, BP control with ACEi/ARB, CPAP, and AF management", ["Only diuretics", "Only a statin", "Only cardiac rehab"], "Slide 99.")])
    ]),

    /* ================= ACUTE DECOMPENSATED HEART FAILURE (objective 16) ================= */

    S("34-adhf-precipitants", "34. Acute HF: precipitants, prognosis and presentation", "Objectives 16.1 and 16.2 (slides 167 to 174): what tips patients into acute HF, prognosis, signs and symptoms, and new-onset vs acute-on-chronic.", [
      C("What precipitates acute HF",
        tbl(["Group", "Precipitants"], [
          ["<strong>Noncompliance</strong>", "<strong>Uncontrolled HTN</strong> (starred); <strong>medication</strong> noncompliance; <strong>excess fluid or salt</strong>"],
          ["Renal", "Renal failure, especially a <strong>missed dialysis</strong>"],
          ["Substances", "<strong>Cocaine, methamphetamine, alcohol</strong>"],
          ["<strong>Iatrogenic</strong>", "<strong>Overhydration in the hospital</strong> (starred); new <strong>negative inotropes (CCB, BB)</strong>; new <strong>salt-retaining drugs (NSAIDs, steroids)</strong>; new antiarrhythmic (<strong>amiodarone</strong>)"]]) +
        "<p><strong>Prognosis:</strong> hospitalization marks a point of deterioration; hospitalized HF patients have a <strong>5-year mortality of 60%</strong>.</p>" +
        "<p><strong>Risk factors</strong> that raise the chance of acute decompensation: HTN, DM, valve disease, old age, obesity.</p>",
        ["hf-adhf-precip", "hf-adhf-prognosis"],
        [q("Which two precipitants of acute HF are starred on the slide?", "Uncontrolled HTN and overhydration in the hospital", ["Pneumonia and anemia", "Hypothyroidism and gout", "Asthma and GERD"], "Slide 167."),
          q("Which drugs are new negative inotropes that can precipitate acute HF?", "Calcium channel blockers and beta blockers", ["Loop diuretics", "Statins", "SGLT2 inhibitors"], "Slide 167."),
          q("Which drugs precipitate acute HF by salt retention?", "NSAIDs and steroids", ["ACE inhibitors", "Spironolactone", "Nitroglycerin"], "Slide 167."),
          q("Which antiarrhythmic is listed as an iatrogenic precipitant?", "Amiodarone", ["Adenosine", "Lidocaine", "Atropine"], "Slide 167."),
          q("Which renal precipitant is emphasized?", "Missed dialysis", ["Kidney stone", "UTI", "Renal cyst"], "Slide 167."),
          q("5-year mortality of hospitalized HF patients:", "60%", ["6%", "20%", "95%"], "Slide 168."),
          q("Which substances can precipitate acute HF?", "Cocaine, methamphetamine, ethanol", ["Caffeine and nicotine gum", "Vitamin D", "Melatonin"], "Slide 167.")],
        [q("A dialysis patient skipped two sessions and arrives with pulmonary edema. Precipitant?", "Renal failure with missed dialysis", ["Uncontrolled diabetes", "Pneumonia", "Anemia"], "Slide 167."),
          q("A stable HF patient was started on diltiazem for AF last week and now has worsening edema and dyspnea. Precipitant?", "New negative inotrope (CCB)", ["Salt-retaining drug", "Missed dialysis", "Overhydration"], "Slide 167."),
          q("A post-op HF patient on day 3 has gained 4 kg and is in pulmonary edema after maintenance IV fluids. Precipitant?", "Iatrogenic overhydration", ["Cocaine", "Noncompliance", "Missed dialysis"], "Slide 167.")]),
      C("Presentation",
        tbl(["Area", "Findings"], [
          ["Appearance", "<strong>Sitting up, gasping for air</strong>, cool and clammy; <strong>Cheyne-Stokes</strong> respiration (deep breaths then apnea)"],
          ["Lungs", "<strong>Crackles</strong>; <strong>acute respiratory distress from pulmonary edema ± hypoxia</strong>: the <strong>most common reason</strong> for an ED visit"],
          ["History", "<strong>Weight gain</strong>, ↓ exercise tolerance, exertional dyspnea, leg swelling"],
          ["Sympathetic", "Cyanosis, <strong>diaphoresis, tachycardia</strong>"],
          ["Other", "Fatigue and weakness worsening with exercise and through the day; confusion, anxiety, restlessness (low brain O2 + anxiety); ascites; peripheral edema"],
          ["Heart", "S3, S4, MR (hard to hear in the ED); <strong>AF</strong>; ↑ risk of sudden cardiac arrest (VT, VF)"]]) +
        hy("No single history finding is enough. <strong>A history of HF</strong> is the <strong>most useful</strong> (sensitivity 60%, specificity 90%); clinical judgment: sensitivity 61%, specificity 86%.<br><strong>New onset?</strong> Think <strong>MI</strong> (manage ACS with cath) or <strong>PE causing cor pulmonale</strong> (image, anticoagulate, manage acute right HF)."),
        ["hf-adhf-signs", "hf-adhf-history", "hf-adhf-new-onset"],
        [q("Most common reason acute HF patients come to the ED:", "Acute respiratory distress from pulmonary edema, with or without hypoxia", ["Chest pain", "Syncope", "Leg swelling only"], "Slide 170."),
          q("Cheyne-Stokes respiration is:", "Deep breaths followed by periods of apnea", ["Rapid shallow breathing", "Prolonged expiration with wheeze", "Gasping only at night"], "Slide 169."),
          q("What is the most useful historical finding for acute HF?", "A prior history of heart failure", ["Smoking history", "Family history of asthma", "Recent travel"], "Slide 173."),
          q("History of HF for diagnosing acute HF has sensitivity and specificity of:", "60% and 90%", ["99% and 99%", "20% and 20%", "90% and 60%"], "Slide 173."),
          q("Which arrhythmia is common in acute HF?", "Atrial fibrillation", ["WPW", "Brugada", "Torsades"], "Slide 172."),
          q("New-onset acute HF from an MI is managed with:", "Cardiac catheterization (ACS care)", ["Digoxin", "Discharge with diuretics", "Calcium score"], "Slide 174."),
          q("New-onset right HF from a PE (cor pulmonale) is managed with:", "Imaging to confirm PE, anticoagulation, and acute right HF care", ["Beta blockers", "High-dose loop diuretics only", "Cardiac cath"], "Slide 174."),
          q("Tachycardia and diaphoresis in acute HF come from:", "Sympathetic nervous system activation", ["Parasympathetic activation", "Hypothyroidism", "Diuretics"], "Slide 171.")],
        [q("A 70-year-old with known HF arrives sitting bolt upright, gasping, cool and clammy, with crackles to the apices and SpO2 86%. Most likely?", "Acute decompensated HF with pulmonary edema", ["Asthma attack", "Panic attack", "Pneumothorax"], "Slides 169 and 170."),
          q("A patient with no cardiac history has new HF symptoms and ST elevation in V1 to V4. Plan?", "Treat as ACS: cardiac catheterization", ["Diuretics and discharge", "Digoxin", "Calcium score"], "Slide 174.")])
    ]),

    S("35-adhf-diagnostics", "35. Acute HF: diagnostic tests", "Objective 16.3 (slides 175 to 180): clinical gestalt, CXR, lung ultrasound, EKG and labs.", [
      C("Testing in the ED",
        "<p>There is <strong>no single test</strong> for acute HF; it is a <strong>clinical diagnosis</strong>. When clinicians are <strong>80% confident</strong>, clinical gestalt beats ED tests. <strong>Labs and imaging must not delay treatment</strong> of respiratory distress.</p>" +
        tbl(["Test", "Use"], [
          ["<strong>CXR</strong>", "Most common findings: <strong>pulmonary venous congestion, cardiomegaly, interstitial edema (Kerley lines)</strong>. Absence does <strong>NOT</strong> rule out HF: <strong>20%</strong> have a normal CXR on arrival"],
          ["<strong>Lung ultrasound</strong>", "Listed as an ED tool"],
          ["<strong>EKG</strong>", "Finds a cause or precipitant (<strong>ischemia, MI, arrhythmia</strong>) but cannot diagnose HF alone; <strong>AF has the highest correlation</strong> with HF"],
          ["<strong>CBC</strong>", "Infection or anemia"],
          ["<strong>BMP</strong>", "Electrolytes, renal insufficiency"],
          ["<strong>proBNP</strong>", "For <strong>undifferentiated dyspnea</strong> when uncertain"],
          ["<strong>LFTs</strong>", "Liver congestion"],
          ["<strong>Troponin</strong>", "ACS evaluation"],
          ["<strong>ABG/VBG</strong>", "Gas exchange and acid-base"]]),
        ["hf-adhf-gestalt", "hf-adhf-cxr", "hf-adhf-ekg-labs"],
        [q("What percent of acute HF patients have a normal CXR on arrival?", "20%", ["0%", "2%", "80%"], "Slide 176."),
          q("Which three CXR findings are most common in acute HF?", "Pulmonary venous congestion, cardiomegaly, interstitial edema", ["Pneumothorax, rib fracture, hilar mass", "Lobar consolidation only", "Hyperinflation and flat diaphragms"], "Slide 176."),
          q("Does a normal CXR rule out acute HF?", "No", ["Yes, always", "Yes, if under 50", "Only with normal BNP"], "Slide 176."),
          q("Which EKG rhythm has the highest correlation with an HF diagnosis?", "Atrial fibrillation", ["Sinus bradycardia", "First-degree block", "RBBB"], "Slide 179."),
          q("Can the EKG alone diagnose heart failure?", "No; it shows causes or precipitants", ["Yes", "Only with LVH", "Only in children"], "Slide 179."),
          q("When is proBNP most useful in the ED?", "Evaluating undifferentiated dyspnea when the diagnosis is uncertain", ["In every chest pain", "To diagnose PE", "To dose diuretics"], "Slide 180."),
          q("When clinicians are 80% confident of acute HF, clinical gestalt:", "Outperforms the available ED tests", ["Is useless", "Must be confirmed by biopsy", "Equals a coin toss"], "Slide 175."),
          q("Should labs and imaging delay treatment of significant respiratory distress?", "No", ["Yes, always", "Only CXR", "Only BNP"], "Slide 176."),
          q("Why get a troponin in acute HF?", "To evaluate for ACS as the cause", ["To dose furosemide", "To diagnose PE", "To check liver congestion"], "Slide 180.")],
        [q("A dyspneic 78-year-old with COPD and possible HF has an unclear exam and CXR. Which lab helps decide?", "proBNP", ["Lipase", "TSH", "D-dimer only"], "Slide 180."),
          q("A patient in obvious respiratory distress with crackles and JVD is waiting for a CXR. What should happen?", "Start treatment now; testing must not delay it", ["Wait for CXR before any treatment", "Wait for BNP", "Send home"], "Slide 176."),
          q("A patient's CXR is normal but the exam shows JVD, S3 and crackles. Interpretation?", "Acute HF is still likely; 20% have a normal initial CXR", ["HF is excluded", "Order a calcium score", "It must be asthma"], "Slide 176.")])
    ]),

    S("36-adhf-airway", "36. Acute HF: oxygen, NIV and intubation", "Objectives 16.4 and 16.5 (slides 181 to 185): first steps, noninvasive ventilation benefits, requirements and contraindications, and intubation criteria.", [
      C("Oxygen, CPAP/BiPAP and when to intubate",
        tbl(["First steps (slide 181)"], [
          ["Monitor SpO2, vitals, rhythm"],
          ["O2 if hypoxic, goal <strong>SpO2 over 95%</strong>; <strong>2 IVs</strong>; <strong>sit the patient upright</strong>"],
          ["<strong>NIV</strong> as needed unless intubation is needed now or NIV is contraindicated; airway equipment ready"]]) +
        tbl(["NIV (CPAP or BiPAP)", ""], [
          ["Benefits", "↑ blood O2, <strong>↓ need for intubation</strong>; ↑ intrathoracic pressure → ↓ venous return → <strong>↓ preload</strong>; with standard therapy ↓ intubation and improves distress and metabolic problems"],
          ["Needs", "Close monitoring; a face that allows a <strong>mask seal</strong>; <strong>patient cooperation</strong> (anxious patients can feel smothered)"],
          ["<strong>Contraindications</strong>", "<strong>Hypotension (SBP under 90)</strong> (NIV lowers BP); <strong>altered mental status</strong>; <strong>dementia</strong>"]]) +
        tbl(["Intubate when"], [["<strong>O2 sat under 80%</strong>"], ["<strong>Overt respiratory distress</strong>"], ["<strong>Altered mental status</strong> (confused, obtunded)"], ["<strong>Failed NIV</strong>"]]),
        ["hf-adhf-first-steps", "hf-niv", "hf-intubation"],
        [q("Target SpO2 when giving oxygen in acute HF:", "Over 95%", ["Over 80%", "88 to 92% for everyone", "100% always"], "Slide 181."),
          q("How many IV catheters are placed in acute HF on the slide?", "Two", ["One", "Four", "None"], "Slide 181."),
          q("How should the acute HF patient be positioned?", "Upright", ["Flat supine", "Trendelenburg", "Prone"], "Slide 181."),
          q("How does NIV lower preload?", "Raises intrathoracic pressure, decreasing venous return", ["Causes diuresis", "Lowers heart rate", "Blocks RAAS"], "Slide 182."),
          q("Which blood pressure contraindicates NIV?", "SBP under 90", ["SBP over 160", "DBP over 90", "Any BP over 120"], "Slide 184."),
          q("Why is hypotension a contraindication to NIV?", "NIV lowers blood pressure by raising intrathoracic pressure", ["NIV raises BP dangerously", "NIV causes bradycardia", "It is not a contraindication"], "Slide 184."),
          q("Which mental status problems contraindicate NIV?", "Altered mental status and dementia", ["Mild anxiety only", "Depression", "Insomnia"], "Slide 184."),
          q("What does successful NIV require?", "Close monitoring, a good mask seal, and patient cooperation", ["Sedation to unconsciousness", "A tracheostomy", "No monitoring"], "Slide 183."),
          q("Which oxygen saturation is an indication for intubation in acute HF?", "Under 80%", ["Under 95%", "Under 92%", "Over 90%"], "Slide 185."),
          q("Which is an intubation indication in acute HF?", "Failed CPAP or BiPAP", ["Mild dyspnea", "SpO2 94% on 2 L", "Ankle edema"], "Slide 185.")],
        [q("A patient in pulmonary edema is alert, BP 170/100, SpO2 88% on a nonrebreather, working hard to breathe. Next step?", "Start NIV (CPAP or BiPAP)", ["Intubate immediately", "Discharge", "Give IV fluids"], "Slides 181 and 182."),
          q("A patient in acute HF has BP 82/50 and SpO2 85%. Is BiPAP a good choice?", "No: SBP under 90 is a contraindication; NIV lowers BP", ["Yes, ideal", "Yes, with fluids", "Only CPAP"], "Slide 184."),
          q("A patient on BiPAP for 30 minutes becomes obtunded with SpO2 78%. Next step?", "Endotracheal intubation", ["Continue BiPAP", "Increase the BiPAP rate only", "Give oral furosemide"], "Slide 185."),
          q("A patient with advanced dementia in acute HF keeps pulling off the mask. Plan?", "NIV is contraindicated; intubate if criteria are met", ["Force the mask on", "Sedate and continue NIV", "Discharge"], "Slides 184 and 185.")])
    ]),

    S("37-adhf-nitroglycerin", "37. Acute HF: nitroglycerin", "Objective 16.6.1 (slides 186 to 189, 194): why vasodilators come first, NTG MOA, routes, BP thresholds, side effects and contraindications.", [
      C("Nitroglycerin",
        "<p>The failing heart is very sensitive to <strong>afterload</strong>; some patients get pulmonary edema at an <strong>SBP of 150 or higher</strong>. Quick <strong>afterload reduction with vasodilators</strong> can avoid intubation.</p>" +
        tbl(["", "Nitroglycerin"], [
          ["MOA", "Short-acting, rapid-onset <strong>venous and arterial dilator</strong>: <strong>low dose ↓ preload</strong> (veins), <strong>high dose also ↓ afterload</strong> (arteries); also <strong>dilates coronaries</strong> (less ischemia)"],
          ["Routes", "<strong>IV, sublingual, transdermal</strong>; chosen by severity"],
          ["Dosing (slide 194)", "SL <strong>0.4 mg every 5 minutes</strong> until relief or IV NTG running; <strong>hold if SBP under 100</strong>. If BP <strong>over 150/100</strong> add <strong>IV NTG</strong>; if BP falls <strong>under 100</strong> stop nitrates; if BP <strong>under 150/100</strong> after SL and improved, consider transdermal"],
          ["Side effects", "<strong>Headache</strong> (acetaminophen); <strong>hypotension</strong> (usually resolves after stopping; if it persists think <strong>volume depletion or RV infarct</strong> and give a <strong>250 to 500 mL saline bolus</strong>)"],
          ["Contraindications", "<strong>RV infarction</strong>; <strong>aortic stenosis</strong>; <strong>HCM</strong>; <strong>dehydration</strong>; hypoperfusion or existing hypotension; <strong>avanafil, sildenafil or vardenafil within 24 h</strong>, <strong>tadalafil within 48 h</strong>"]]) +
        mn("Nitrates need <strong>preload</strong>. Avoid them when the heart depends on filling: <strong>RV infarct, AS, HCM, dry, low BP, PDE-5 inhibitor</strong>."),
        ["hf-ntg-why", "hf-ntg-moa", "hf-ntg-dosing", "hf-ntg-safety"],
        [q("Why are vasodilators given first in acute HF?", "The failing heart is sensitive to afterload; reducing it can avoid intubation", ["They cause rapid diuresis", "They raise heart rate", "They raise BP"], "Slide 186."),
          q("At low doses nitroglycerin mainly:", "Dilates veins and lowers preload", ["Dilates arteries only", "Raises afterload", "Raises preload"], "Slide 187."),
          q("At high doses nitroglycerin also:", "Dilates arteries and lowers afterload", ["Constricts arteries", "Causes bradycardia", "Raises preload"], "Slide 187."),
          q("By which routes can NTG be given?", "IV, sublingual, transdermal", ["IM only", "Oral only", "Inhaled only"], "Slide 187."),
          q("Sublingual NTG dose in acute HF:", "0.4 mg every 5 minutes", ["4 mg every hour", "40 mg once", "0.04 mg daily"], "Slide 194."),
          q("Hold sublingual NTG if SBP is under:", "100 mmHg", ["160 mmHg", "140 mmHg", "60 mmHg"], "Slide 194."),
          q("When is IV NTG added?", "If BP is over 150/100", ["If BP is under 90", "Only after intubation", "Never"], "Slide 194."),
          q("Most common NTG side effect and treatment:", "Headache, treated with acetaminophen", ["Cough, treated with an ARB", "Rash, treated with steroids", "Bradycardia, treated with atropine"], "Slide 188."),
          q("Persistent hypotension after NTG suggests:", "Volume depletion or RV infarction; give a 250 to 500 mL saline bolus", ["Need for more NTG", "Hyperkalemia", "Tamponade always"], "Slide 188."),
          q("Which MI type contraindicates nitrates?", "Right ventricular infarction", ["Anterior NSTEMI", "Lateral STEMI", "Prior healed MI"], "Slide 189."),
          q("Sildenafil within how many hours contraindicates nitrates?", "24 hours", ["4 hours", "7 days", "48 hours"], "Slide 189."),
          q("Tadalafil within how many hours contraindicates nitrates?", "48 hours", ["24 hours", "6 hours", "2 weeks"], "Slide 189."),
          q("Which valve lesion contraindicates nitrates?", "Aortic stenosis", ["Mitral regurgitation", "Tricuspid regurgitation", "Pulmonic regurgitation"], "Slide 189.")],
        [q("A patient in pulmonary edema has BP 196/108. After SL NTG, what next?", "Add IV nitroglycerin (BP over 150/100)", ["Stop nitrates", "Give a fluid bolus", "Give metoprolol IV"], "Slide 194."),
          q("A man in acute HF took tadalafil 30 hours ago. Can he get nitroglycerin?", "No: tadalafil within 48 hours", ["Yes, 24 hours has passed", "Yes, at double dose", "Only transdermal"], "Slide 189."),
          q("After IV NTG, BP falls to 92/60. Action?", "Stop nitrates and monitor for persistent hypotension", ["Increase the drip", "Add a beta blocker", "Add nitroprusside"], "Slide 194."),
          q("A patient with an inferior STEMI and RV involvement has clear lungs and BP 98/60. Should he get NTG?", "No: RV infarction is a contraindication", ["Yes, high-dose IV", "Yes, SL every 5 minutes", "Only transdermal"], "Slide 189.")])
    ]),

    S("38-adhf-loop", "38. Acute HF: loop diuretic dosing", "Objective 16.6.2 (slides 190 to 192): names, MOA, timing after vasodilators, IV route, onset, and starting doses.", [
      C("IV loop diuretics in the ED",
        tbl(["", "Acute loop diuretic use"], [
          ["Drugs", "<strong>Furosemide (Lasix)</strong>: the most used in the ED; bumetanide (Bumex)"],
          ["MOA", "↓ NaCl reabsorption in the thick ascending limb → ↓ <strong>preload</strong>, relieve congestion"],
          ["When", "Start without delay for congestion; often <strong>after vasodilators</strong> once BP is controlled (\"<strong>initiate nitrates before diuretics</strong>\"). Controlling BP and filling pressure improves breathing <strong>long before</strong> any diuresis"],
          ["Route", "<strong>IV</strong>: <strong>bowel wall edema</strong> limits oral absorption"],
          ["Onset", "Diuresis within <strong>10 to 15 minutes</strong> of an IV dose"],
          ["<strong>Lasix-naïve dose</strong>", "<strong>40 mg IV</strong>"],
          ["<strong>Already on Lasix</strong>", "<strong>1 to 2.5 × the total daily oral dose</strong> IV (e.g. 40 mg PO daily → 40 to 100 mg IV)"],
          ["Max ED dose", "Generally <strong>80 mg IV</strong> with normal renal function (avoid over-diuresis); <strong>CKD needs higher doses</strong>"],
          ["Caution", "Loops <strong>alone without NTG</strong> in HF with HTN → ↑ <strong>worse renal function and mortality</strong>"]]),
        ["hf-acute-loop-when", "hf-acute-loop-dose", "hf-acute-loop-caution"],
        [q("Why are loop diuretics given IV in acute HF?", "Bowel wall edema may prevent oral absorption", ["They do not exist orally", "IV is cheaper", "Oral causes cough"], "Slide 191."),
          q("How fast does diuresis begin after IV loop diuretic?", "Within 10 to 15 minutes", ["After 6 hours", "After 2 days", "Immediately within 10 seconds"], "Slide 191."),
          q("Most commonly used loop diuretic in the ED:", "Furosemide (Lasix)", ["Torsemide", "Ethacrynic acid", "Metolazone"], "Slide 191."),
          q("Starting IV furosemide dose for a Lasix-naïve patient:", "40 mg IV", ["400 mg IV", "4 mg IV", "20 mg PO"], "Slide 192."),
          q("Starting IV dose for a patient already on daily furosemide:", "1 to 2.5 times the total daily oral dose", ["One-tenth the oral dose", "10 times the oral dose", "Same as Lasix-naïve always"], "Slide 192."),
          q("Generally, the maximum ED furosemide dose with normal renal function is:", "80 mg IV", ["800 mg IV", "20 mg IV", "No maximum"], "Slide 192."),
          q("Which patients need higher loop diuretic doses?", "Chronic renal failure", ["Young athletes", "Patients with normal kidneys", "Children"], "Slide 191."),
          q("What is the risk of loop diuretics alone without vasodilators in HF with HTN?", "Worsening renal function and increased mortality", ["Hypertensive crisis", "Hyperkalemia", "Bradycardia"], "Slide 191."),
          q("Which comes first in hypertensive acute HF on slide 194?", "Nitrates before diuretics", ["Diuretics before nitrates", "Digoxin first", "Beta blocker first"], "Slide 194."),
          q("What improves respiratory status long before diuresis?", "Controlling blood pressure and cardiac filling pressure", ["Digoxin", "IV fluids", "Beta blockers"], "Slide 190.")],
        [q("A patient on furosemide 40 mg PO daily arrives in acute HF. Starting IV dose?", "40 to 100 mg IV", ["10 mg IV", "400 mg IV", "Hold diuretics"], "Slide 192."),
          q("A patient who has never taken a diuretic arrives in acute HF with edema. Starting dose?", "Furosemide 40 mg IV", ["Furosemide 200 mg IV", "Furosemide 20 mg PO", "Spironolactone 25 mg PO"], "Slide 192."),
          q("A hypertensive acute HF patient gets only IV furosemide and no NTG. What risk does the slide warn of?", "Worse renal function and higher mortality", ["Hyperkalemia", "Seizure", "No risk"], "Slide 191."),
          q("A patient takes furosemide 40 mg PO BID (80 mg total daily). Starting IV dose range?", "80 to 200 mg IV, capped by renal function and over-diuresis concerns", ["20 mg IV", "8 mg IV", "800 mg IV"], "Slide 192: 1 to 2.5 times 80 mg; the 80 mg cap applies to normal renal function.")])
    ]),

    S("39-adhf-avoid", "39. Acute HF: medications to avoid", "Objective 16.6.3 (slide 193): ACE inhibitors, ARBs, beta blockers, calcium channel blockers and digoxin in the ED.", [
      C("What NOT to give in acute HF",
        tbl(["Drug", "In acute decompensated HF"], [
          ["ACE inhibitors", "<strong>Little data</strong> to recommend use in the ED"],
          ["ARBs", "<strong>Little data</strong> to recommend use in the ED"],
          ["<strong>Beta blockers</strong>", "<strong>Contraindicated</strong>"],
          ["<strong>Calcium channel blockers</strong>", "<strong>Contraindicated</strong>"],
          ["<strong>Digoxin</strong>", "<strong>Contraindicated</strong>"]]) +
        hy("Acute HF: <strong>\"No BB, No CCB, No Dig\"</strong>. The chronic mortality drugs (beta blockers) are the wrong drug in the acute crash because the heart needs its sympathetic drive."),
        ["hf-adhf-avoid"],
        [q("Which drug class is contraindicated in acute decompensated HF?", "Beta blockers", ["Loop diuretics", "Nitrates", "Oxygen"], "Slide 193."),
          q("Calcium channel blockers in acute HF are:", "Contraindicated", ["First-line", "Preferred over nitrates", "Required"], "Slide 193."),
          q("Digoxin in acute HF (per the slide) is:", "Contraindicated", ["First-line", "Given IV push to all", "Required before diuretics"], "Slide 193."),
          q("What does the slide say about ACE inhibitors in the ED for acute HF?", "Little data to recommend use", ["Strongly recommended IV", "Required first", "Contraindicated forever"], "Slide 193."),
          q("What does the slide say about ARBs in the ED for acute HF?", "Little data to recommend use", ["Required first-line", "Better than nitrates", "Contraindicated in all HF"], "Slide 193."),
          q("Which three drug classes are contraindicated in acute HF?", "Beta blockers, calcium channel blockers, digoxin", ["Nitrates, loops, oxygen", "ACEi, ARB, statins", "Aspirin, heparin, morphine"], "Slide 193.")],
        [q("A patient in acute pulmonary edema has AF at 125. A resident wants to give IV diltiazem. Concern?", "CCBs are contraindicated in acute HF", ["None; diltiazem is first-line", "Diltiazem is a diuretic", "Only verapamil is contraindicated"], "Slide 193."),
          q("A patient in acute HF has a heart rate of 115 and BP 168/100. Which drug should NOT be given?", "IV metoprolol", ["IV nitroglycerin", "IV furosemide", "Oxygen"], "Slide 193.")])
    ]),

    S("40-adhf-admission", "40. Acute HF: the ED protocol and admission", "Objective 16.6.4 (slides 194 to 200): the seven-step acute HF protocol, high-risk markers, admission vs ICU vs observation, and inpatient echo.", [
      C("The acute HF protocol (slide 194)",
        tbl(["Step", "Action"], [
          ["1", "<strong>Oxygen</strong> for SpO2 ≥95%; <strong>SL NTG</strong> 0.4 mg every 5 min (hold if SBP under 100)"],
          ["2", "Severe dyspnea → <strong>NIV or intubation</strong>"],
          ["3", "<strong>Vasodilator</strong>: BP over 150/100 add IV NTG; under 100 stop; under 150/100 and improved, consider transdermal"],
          ["4", "<strong>IV loop</strong> (furosemide or bumetanide) for volume overload; <strong>nitrates before diuretics</strong>"],
          ["5", "Assess severity/high risk: persistent AMS, hypoxia despite NIV, hypotension, troponin elevation, ischemic ECG, <strong>BUN over 43</strong>, <strong>creatinine over 2.75</strong>, tachycardia, tachypnea, low urine output"],
          ["6", "<strong>ICU</strong> if high severity or risk of decompensation"],
          ["7", "Disposition: discharge or ED observation if good response, no high-risk features, good social support; <strong>ICU</strong> for ongoing cardiorespiratory compromise or acute ischemia"]]),
        ["hf-ed-protocol"],
        [q("What is step 1 of the acute HF protocol?", "Oxygen to SpO2 ≥95% and sublingual nitroglycerin", ["IV metoprolol", "Digoxin", "Discharge"], "Slide 194."),
          q("Which BUN level is a high-risk marker in the protocol?", "Over 43", ["Over 10", "Over 20", "Under 5"], "Slide 194."),
          q("Which creatinine level is a high-risk marker in the protocol?", "Over 2.75", ["Over 0.8", "Over 1.2", "Under 0.5"], "Slide 194."),
          q("Who goes to the ICU per the protocol?", "High severity or risk of decompensation, ongoing cardiorespiratory compromise, or acute ischemia", ["Everyone with HF", "No one", "Only patients under 50"], "Slide 194."),
          q("Who can be discharged or observed per the protocol?", "Good response, no high-risk features, good social support", ["Anyone who asks", "Patients with BUN 60", "Patients on BiPAP"], "Slide 194."),
          q("What is step 2 of the protocol?", "If severe dyspnea, consider NIV or intubation", ["Start a beta blocker", "Give IV fluids", "Order a calcium score"], "Slide 194.")],
        [q("An acute HF patient improves with NTG and IV furosemide but has BUN 52, creatinine 3.1 and persistent hypoxia on BiPAP. Disposition?", "ICU admission (high-risk features)", ["Discharge home", "Observation for 6 hours", "Outpatient follow-up"], "Slide 194."),
          q("An acute HF patient responds fully to treatment, has no high-risk markers and lives with a supportive spouse. Disposition options?", "Discharge or ED observation", ["ICU", "Intubation", "Transplant listing"], "Slide 194.")]),
      C("Disposition",
        tbl(["", "Disposition (slides 195 to 200)"], [
          ["<strong>High-risk physiologic markers</strong>", "<strong>Hypotension, hyponatremia, elevated troponin or proBNP, renal insufficiency</strong>"],
          ["Barriers to outpatient care", "Caregiver support, access to medications, likelihood of timely follow-up"],
          ["Most patients are admitted", "Unpredictable course, limited access to care, likely ER return. <strong>Always admit high-risk patients</strong>"],
          ["<strong>ICU</strong>", "Needs invasive monitoring or procedures"],
          ["<strong>Observation telemetry</strong>", "Lower-risk patients; many improve in the ED and resolve within <strong>12 to 24 hours</strong>"],
          ["Other reasons to admit", "Continuous monitoring of symptoms, vitals, urine output and weight; needed testing (echo, stress test, cath)"],
          ["Once stabilized", "<strong>Echo</strong> to define dysfunction type and EF and guide inpatient care"]]),
        ["hf-dispo-markers", "hf-dispo-levels", "hf-dispo-echo"],
        [q("Which are high-risk physiologic markers in acute HF?", "Hypotension, hyponatremia, elevated troponin or proBNP, renal insufficiency", ["Hypertension, hypernatremia, low BNP", "Normal labs", "Young age"], "Slide 195."),
          q("Which non-medical barriers affect disposition?", "Caregiver support, medication access, likelihood of timely follow-up", ["Hair color", "Favorite food", "Shoe size"], "Slide 195."),
          q("Why are most acute HF patients admitted?", "Unpredictable course, limited access to care, likely return to the ER", ["Required by law", "They all need surgery", "To start digoxin"], "Slide 196."),
          q("Who needs ICU admission?", "Patients needing invasive monitoring or procedures", ["All HF patients", "Patients with mild edema", "Patients who improved in the ED"], "Slide 197."),
          q("Typical observation period for lower-risk acute HF patients:", "12 to 24 hours", ["1 hour", "1 week", "30 days"], "Slide 197."),
          q("Once the patient is stabilized, which test guides inpatient treatment?", "Echocardiogram", ["Calcium score", "Exercise EKG", "Holter"], "Slide 200.")],
        [q("An acute HF patient has a sodium of 126, troponin elevated and SBP 92. Disposition?", "Admit (high-risk features), likely ICU if invasive monitoring is needed", ["Discharge", "Observation only", "Home with oral diuretic"], "Slides 195 to 197."),
          q("A lower-risk acute HF patient's breathing is much better after 3 hours in the ED. Option?", "Observation telemetry admission for 12 to 24 hours", ["ICU", "Discharge without follow-up", "Transplant"], "Slide 197."),
          q("A patient lives alone, cannot afford his medications and has no ride to follow-up. How does this affect disposition?", "Barriers to outpatient care favor admission", ["Favors discharge", "No effect", "Only matters for ICU"], "Slide 195.")])
    ]),

    S("41-adhf-inpatient-discharge", "41. Acute HF: inpatient goals and discharge", "Objective 16.6.5 (slides 199 to 202): inpatient goals, the pathway to outpatient care, discharge education, rehab and follow-up timing.", [
      C("Inpatient goals and discharge",
        tbl(["Inpatient goals (slide 201)"], [
          ["Manage symptoms, prevent worsening"], ["<strong>Treat the underlying cause</strong>"], ["<strong>Wean</strong> respiratory support"],
          ["<strong>IV diuretic → PO</strong>"], ["Wean IV add-ons (vasodilators, inotropes, pressors)"],
          ["<strong>Educate</strong> on meds and lifestyle to prevent future decompensation"], ["Consider <strong>cardiac rehab</strong> referral"]]) +
        tbl(["Pathway to outpatient care (slide 199)"], [
          ["1. ED: airway (O2, NIPPV, ET tube), nitrates, diuretics, hospitalization"],
          ["2. On admission: continue diuresis, optimize IV meds, decide on echo or revascularization"],
          ["3. Track the trajectory: improving, stalled or worsening"],
          ["4. Risk factors: hypotension, hyponatremia, troponin or proBNP, infection, renal insufficiency, electrolytes"],
          ["5. Manage comorbid diabetes, anemia, kidney or liver disease"],
          ["6. Transition to oral meds; 7. optimize oral meds"],
          ["8. Discharge planning and education: med changes, side effects, <strong>sodium/fluid limits</strong>, cardiac rehab, sleep studies (stage D: devices, aquapheresis, transplant, hospice)"],
          ["9. Discharge with follow-up scheduled in <strong>3 to 5 days</strong>"],
          ["10. At follow-up: symptoms, weight, electrolytes, renal function; coach compliance and outpatient supports"]]) +
        hy("<strong>Discharge orders (slide 202):</strong> educate on <strong>low-sodium diet</strong> and <strong>fluid restriction</strong>, <strong>arrange cardiac rehab</strong>, and ideally <strong>follow-up within 5 days</strong> to decrease readmissions.") +
        note("Slide 199 says follow-up in 3 to 5 days; slide 202 says within 5 days. Both point to the same answer: see the patient within the first week, ideally by day 5."),
        ["hf-inpatient-goals", "hf-pathway", "hf-discharge"],
        [q("Which is an inpatient goal in acute HF?", "Wean IV diuretics to oral", ["Start IV diltiazem", "Keep the patient on BiPAP indefinitely", "Avoid education"], "Slide 201."),
          q("When should follow-up ideally occur after an acute HF discharge?", "Within 5 days", ["Within 6 months", "Within 1 year", "Only if symptoms recur"], "Slide 202."),
          q("Why schedule follow-up so soon after discharge?", "To decrease readmissions", ["To bill more", "To repeat the echo", "To stop the meds"], "Slide 202."),
          q("Which two diet topics must discharge education cover?", "Low-sodium diet and fluid restriction", ["High-protein diet and unlimited water", "Ketogenic diet", "Gluten-free diet"], "Slide 202."),
          q("What referral should be arranged at discharge?", "Cardiac rehabilitation", ["Dermatology", "Orthopedics", "Allergy testing"], "Slide 202."),
          q("What is checked at the first outpatient visit after discharge?", "Symptoms, weight, electrolytes, renal function, compliance", ["Calcium score", "Colonoscopy", "Bone density"], "Slide 199."),
          q("On the pathway, after transitioning to oral meds the next step is to:", "Optimize oral medications", ["Restart IV meds", "Discharge without plans", "Start milrinone"], "Slide 199."),
          q("Which IV add-ons should be weaned during the hospital stay?", "Vasodilators, inotropes and vasopressors", ["Oxygen only", "Insulin only", "Antibiotics only"], "Slide 201.")],
        [q("An acute HF patient is ready to go home on day 4. Which discharge plan fits the deck?", "Low-sodium and fluid-restricted diet education, cardiac rehab, follow-up within 5 days", ["Follow-up in 3 months, no diet changes", "Discharge on IV furosemide", "No follow-up needed"], "Slide 202."),
          q("Hospital day 2: the patient is improving on IV furosemide and BiPAP is off. Next steps on the pathway?", "Transition to oral medications, then optimize them", ["Add IV milrinone", "Restart BiPAP", "Discharge immediately with no plan"], "Slide 199."),
          q("At a day-5 follow-up, the patient's weight is up 2 kg and creatinine is rising. What does the pathway say to assess?", "Symptoms, weight, electrolytes and renal function, and coach compliance", ["Nothing; this is expected", "Order a calcium score", "Stop all medications"], "Slide 199.")])
    ])
  ];
})();
