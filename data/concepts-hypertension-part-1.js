/*
  Concepts: Hypertension Part I (same shape as data/diseases-endocrine.js).

  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with a prediction-style question bank.
  Source: source-material/cardio-part-1/text/hypertension-part-1.md (concepts
  sit with the deck that teaches them). Anything the slides only imply is
  labeled "Clarification (standard physiology)" or "Clarification (standard
  pharmacology)" in the html.

  Question ids are "<concept id>|<index>" and progress is saved against them:
  only APPEND questions to a concept; never insert, delete, or reorder.
  `correct` is zero-based; the engine shuffles answer order every time.
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  function chain(steps) {
    return '<ol class="concept-chain">' + steps.map(function (step) { return "<li>" + step + "</li>"; }).join("") + "</ol>";
  }
  function clar(text) {
    return "<p><strong>Clarification (standard physiology):</strong> " + text + "</p>";
  }
  function clarRx(text) {
    return "<p><strong>Clarification (standard pharmacology):</strong> " + text + "</p>";
  }
  function traps(items) {
    return "<ul>" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>";
  }

  window.CARDIO_CONCEPTS_HYPERTENSION_PART1 = L("hypertension-part-1", "Hypertension Part I", [

    // ------------------------------------------------------------------
    D("htn-map-co-tpr", "Blood pressure = cardiac output × resistance", "Every cause of high blood pressure, and every drug that lowers it, works by changing cardiac output (stroke volume × heart rate), peripheral resistance, or both.", [
      S("idea", "The idea", "<p>The lecture boils blood pressure down to one equation: <strong>MAP = CO × TPR</strong> (mean arterial pressure = cardiac output × total peripheral resistance).</p><p>Think of a sink. The water level (pressure) rises if you open the tap more (more <strong>cardiac output</strong>) or if you partly block the drain (more <strong>resistance</strong>). Cardiac output is <strong>stroke volume × heart rate</strong>, and it is pushed up by sodium intake, kidney function, mineralocorticoids (aldosterone), and sympathetic tone. Resistance is set by the sympathetic nervous system, humoral factors (like angiotensin II), and local autoregulation of the vessels.</p><p>A normal MAP of about <strong>70–100 mmHg</strong> keeps blood flowing into the capillaries so tissues get oxygen and nutrients.</p>" + Mn("MAP = CO × TPR", "CO = SV × HR. Raise volume, rate, squeeze, or resistance → BP rises. Every antihypertensive pulls one of these levers down.")),
      S("chain", "Cause → effect", chain([
        "More sodium and water retained (aldosterone, high-salt diet, kidney disease) → more blood volume → more preload → ↑ stroke volume.",
        "More sympathetic tone → ↑ heart rate and ↑ contractility → ↑ cardiac output.",
        "Sympathetic tone, angiotensin II, and other humoral factors constrict arterioles → ↑ peripheral resistance.",
        "↑ CO, ↑ TPR, or both → ↑ MAP.",
        "In systole the ejected blood stretches the elastic arteries (systolic pressure); in diastole the arteries recoil, keeping a lower diastolic pressure until the next beat."
      ]) + Tbl(["Lever", "If it rises", "If it falls", "Example from the lecture"], [
        ["Volume (→ stroke volume)", "↑ BP", "↓ BP", "Obesity, CKD, aldosterone excess ↑; diuretics ↓"],
        ["Heart rate / contractility", "↑ BP", "↓ BP", "Sympathetic surge ↑; β-blockers, non-DHP CCBs ↓"],
        ["Peripheral resistance", "↑ BP", "↓ BP", "Angiotensin II, catecholamines ↑; DHP CCBs, α1 blockers, hydralazine ↓"],
        ["Blood viscosity", "↑ BP", "—", "Polycythemia raises BP"]
      ]) + HY("MAP = CO × TPR, and CO = SV × HR. Name the lever and you can predict the effect of any cause or drug.")),
      S("bedside", "Why it matters clinically", "<p><strong>Calculating MAP:</strong> the lecture gives MAP = [(2 × DBP) + SBP] / 3. For example, 130/80 → MAP ≈ 97; 100/50 → MAP ≈ 67 (below the “good” 70–100 range). Diastole counts twice because the heart spends more of each cycle in diastole.</p><p><strong>Natural history:</strong> prehypertension starts with an asymptomatic <strong>↑ cardiac output</strong>; early hypertension shows a <strong>persistently ↑ peripheral resistance</strong>; established HTN adds vascular remodeling.</p><p><strong>Obesity</strong> hits several levers at once: ↑ intravascular volume, ↑ cardiac output, ↑ sympathetic outflow, and RAAS activation. <strong>Diuretics</strong> show the levers over time: they first lower volume and CO (PVR temporarily rises), and after 6–8 weeks CO normalizes while PVR falls.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“MAP is just the average of systolic and diastolic.”</strong> Diastole is weighted twice: MAP = [(2 × DBP) + SBP] / 3.",
        "<strong>“High BP always means the vessels are too tight.”</strong> Early in the natural history the problem is increased cardiac output; persistent resistance comes later.",
        "<strong>“Diuretics keep working only by keeping volume low.”</strong> Per the lecture, CO returns to normal after 6–8 weeks and the lasting effect is lower peripheral resistance.",
        "<strong>“Afterload and diastolic pressure are the same thing.”</strong> The lecture defines afterload as the pressure the heart must exert to eject — the systolic blood pressure."
      ]))
    ], [
      Q("chain", "Peripheral vascular resistance rises while cardiac output stays the same. What happens to MAP?", ["MAP rises", "MAP falls", "MAP is unchanged", "MAP falls, then heart rate rises"], 0, "MAP = CO × TPR. With CO fixed, a higher TPR raises MAP."),
      Q("chain", "Aldosterone excess makes the kidney retain sodium and water. Which lever does this push up first?", ["Cardiac output, through more blood volume and stroke volume", "Peripheral resistance only, through arteriole spasm", "Heart rate only, through the SA node", "Blood viscosity, through more red cells"], 0, "Retained sodium and water expand blood volume → more preload → higher stroke volume → higher cardiac output."),
      Q("bedside", "Calculate the MAP for a BP of 120/70.", ["About 87 mmHg", "About 95 mmHg", "About 70 mmHg", "About 100 mmHg"], 0, "MAP = [(2 × 70) + 120] / 3 = 260 / 3 ≈ 87 mmHg."),
      Q("bedside", "A patient's BP after treatment of hypotension is 100/50. Is the MAP adequate by the lecture's standard?", ["No — MAP ≈ 67, below the 70–100 target", "Yes — MAP ≈ 75, inside the target", "Yes — MAP ≈ 100, at the top of the target", "No — MAP ≈ 50, equal to the diastolic"], 0, "MAP = [(2 × 50) + 100] / 3 ≈ 67, below the 70–100 range that ensures tissue perfusion."),
      Q("chain", "Polycythemia raises blood pressure. Which mechanism explains it?", ["Thicker blood (↑ viscosity) increases resistance to flow", "Extra red cells release renin", "Red cells stimulate the baroreceptors", "Polycythemia lowers cardiac output"], 0, "More red cells make the blood more viscous, which increases resistance and so raises pressure."),
      Q("idea", "In the natural history of hypertension, what is the first hemodynamic change in prehypertension?", ["Asymptomatic increased cardiac output with intermittently elevated BP", "Persistently increased peripheral resistance", "Vascular remodeling with progressive damage", "End-organ damage"], 0, "Prehypertension = increased cardiac output; early HTN = persistently increased peripheral resistance; then remodeling; then complications."),
      Q("chain", "A thiazide is started. Six to eight weeks later, what is the main reason BP stays lower?", ["Cardiac output has normalized and peripheral resistance has fallen", "Blood volume stays permanently 20% low", "Heart rate has fallen to the 40s", "Contractility has been blocked"], 0, "Diuretics first lower volume and CO (PVR transiently rises); after 6–8 weeks CO normalizes and PVR is reduced."),
      Q("bedside", "Obesity raises BP through several levers. Which list matches the lecture?", ["↑ Intravascular volume, ↑ cardiac output, ↑ sympathetic outflow, and RAAS activation", "↓ Blood volume and ↓ heart rate", "↑ Parasympathetic tone and ↓ renin", "↑ Vessel compliance and ↓ viscosity"], 0, "The lecture lists all four for obesity; weight loss lowers BP modestly.")
    ]),

    // ------------------------------------------------------------------
    D("htn-baroreceptor-reflex", "Baroreceptors: the fast, short-term BP control", "Stretch receptors in the carotids and aortic arch fire more as pressure rises, which turns down sympathetic tone and turns up parasympathetic tone within seconds to minutes; a fall in pressure does the opposite.", [
      S("idea", "The idea", "<p>Short-term BP control (minutes to hours) is <strong>neural</strong>. The <strong>baroreceptors</strong> in the carotid sinus and aortic arch are stretch sensors: they cannot measure pressure directly, but they feel how much the elastic arterial wall is stretched.</p><p>More stretch → more nerve firing to the cardiovascular center in the <strong>medulla</strong> → the brain reads “pressure is high” → it <strong>inhibits the sympathetic system</strong> and <strong>activates the parasympathetic system</strong>. Less stretch → fewer signals → the sympathetic system switches on to raise BP back up.</p><p>It is a thermostat for pressure: it corrects quickly, but it does not set the long-term level — that is the job of the kidney and hormones (RAAS).</p>"),
      S("chain", "Cause → effect", chain([
        "Arterial pressure changes → the stretch of the carotid and aortic walls changes.",
        "More stretch → ↑ baroreceptor firing; less stretch → ↓ firing.",
        "The medulla (with the pons) integrates the signal.",
        "High firing → ↓ sympathetic, ↑ parasympathetic → ↓ HR, ↓ contractility, vasodilation → BP falls back.",
        "Low firing → ↑ sympathetic → ↑ HR, ↑ contractility, vasoconstriction, and renal sympathetic nerves trigger renin release → BP rises back."
      ]) + Tbl(["Change", "Baroreceptor firing", "Autonomic response", "Heart rate"], [
        ["↑ BP (more stretch)", "↑", "↓ Sympathetic, ↑ parasympathetic", "↓"],
        ["↓ BP (less stretch)", "↓", "↑ Sympathetic", "↑"]
      ]) + HY("Baroreceptors fight any sudden BP change — a sudden drop in pressure triggers a reflex rise in heart rate.") + "<p>Other fast sensors: <strong>peripheral chemoreceptors</strong> (carotid, aortic arch) respond to low PO<sub>2</sub> with arteriolar vasoconstriction; <strong>central chemoreceptors</strong> (medulla) respond to PCO<sub>2</sub> and CSF pH with sympathetic outflow.</p>"),
      S("bedside", "Why it matters clinically", "<p><strong>Reflex tachycardia:</strong> drugs that drop BP suddenly by dilating arterioles — <strong>short-acting DHP CCBs</strong> and <strong>direct arterial vasodilators</strong> (hydralazine, minoxidil) — trigger a baroreceptor-mediated reflex tachycardia. That is why short-acting nifedipine is rarely used.</p><p><strong>Orthostatic check:</strong> the lecture has you measure BP supine and then 1–3 minutes after standing (a drop of 20 systolic and/or 10 diastolic is significant), especially in older adults. Drugs that block the sympathetic response (α1 blockers, carvedilol, central α2 agonists) make orthostatic hypotension more likely.</p>" + clar("on standing, blood pools in the legs, stretch on the baroreceptors falls, and the sympathetic reflex normally constricts vessels to hold BP up. If the drug blocks that response, BP drops on standing.") + "<p><strong>OSA:</strong> hypoxia during apneas triggers sympathetic activity → HTN, matching the chemoreceptor pathway.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Baroreceptors measure pressure directly.”</strong> They sense the degree of stretch of the arterial wall.",
        "<strong>“High BP stimulates the sympathetic system.”</strong> High stretch <em>inhibits</em> sympathetic tone and activates parasympathetic tone; it is low stretch that activates the sympathetic system.",
        "<strong>“The baroreflex sets long-term BP.”</strong> Neural control is short-term (minutes–hours); long-term control is humoral (RAAS)."
      ]))
    ], [
      Q("chain", "BP suddenly rises and stretches the carotid sinus. Predict the autonomic response.", ["↓ Sympathetic and ↑ parasympathetic tone → heart rate falls", "↑ Sympathetic tone → heart rate rises", "↓ Parasympathetic tone → heart rate rises", "No autonomic change — only renin responds"], 0, "More stretch → more baroreceptor firing → the medulla inhibits sympathetic and activates parasympathetic output."),
      Q("chain", "A patient loses blood and arterial stretch falls. Predict the baroreceptor-driven response.", ["Sympathetic activation → ↑ heart rate, ↑ contractility, and vasoconstriction", "Parasympathetic activation → bradycardia", "Vasodilation to improve flow", "No change until the kidney responds days later"], 0, "Less stretch → fewer baroreceptor signals → sympathetic activation to restore pressure."),
      Q("bedside", "A patient starts short-acting nifedipine and develops a racing heart within an hour. Why?", ["A sudden drop in BP triggers a baroreceptor-mediated reflex tachycardia", "Nifedipine directly speeds the SA node", "Nifedipine blocks the vagus nerve", "Nifedipine releases catecholamines from the adrenal"], 0, "Short-acting DHP CCBs drop BP suddenly; the baroreflex responds with sympathetic activation and tachycardia."),
      Q("idea", "What does a baroreceptor actually detect?", ["The degree of stretch of the elastic arterial wall", "The oxygen content of arterial blood", "The sodium concentration in the tubule", "The CSF pH"], 0, "Baroreceptors sense arterial pressure indirectly, from stretch. Chemoreceptors sample O2, CO2, and H+."),
      Q("chain", "Which time frame does the baroreceptor reflex control?", ["Short-term (minutes to hours)", "Long-term (days to weeks)", "Only during sleep", "Only during exercise"], 0, "Short-term regulation is neural; long-term regulation is humoral (RAAS)."),
      Q("bedside", "In a patient with obstructive sleep apnea, which chain explains the hypertension?", ["Hypoxia → chemoreceptor-driven sympathetic activity → vasoconstriction and ↑ BP", "Hypoxia → parasympathetic activation → ↑ BP", "Snoring → aortic stretch → ↑ BP", "Hypoxia → ↓ renin → ↑ BP"], 0, "The lecture states hypoxia in OSA triggers SNS activity leading to HTN; peripheral chemoreceptors respond to low PO2 with vasoconstriction."),
      Q("traps", "An α1 blocker is started and the patient faints when standing up. Which mechanism explains it?", ["The drug blocks the sympathetic vasoconstriction the baroreflex uses to hold BP up on standing", "The drug increases baroreceptor firing on standing", "The drug causes fluid overload", "The drug speeds the heart excessively"], 0, "On standing, the baroreflex relies on α1-mediated vasoconstriction; blocking α1 removes that response, causing orthostatic hypotension."),
      Q("chain", "Low baroreceptor stretch also affects the kidney. What happens there?", ["Renal sympathetic nerves release norepinephrine onto β1 receptors of JG cells → renin release", "Renal nerves shut off renin release", "The macula densa releases ATP and dilates the afferent arteriole", "The kidney releases atrial natriuretic peptide"], 0, "The lecture lists indirect activation of renal sympathetic fibers — NE on β1 receptors of juxtaglomerular cells — as one trigger for renin.")
    ]),

    // ------------------------------------------------------------------
    D("htn-raas", "RAAS: the slow, long-term BP control", "When the kidney senses low pressure, low sodium, or sympathetic signals, it releases renin, setting off angiotensin II and aldosterone, which squeeze vessels and hold on to salt and water.", [
      S("idea", "The idea", "<p>Long-term BP control is <strong>humoral</strong>, and the main system is the <strong>renin–angiotensin–aldosterone system (RAAS)</strong>. The kidney acts like a pressure gauge: if it thinks it is underperfused, it releases <strong>renin</strong>.</p><p>Renin starts a cascade: angiotensinogen → angiotensin I → (ACE) → <strong>angiotensin II</strong>. Angiotensin II is the workhorse: it constricts arterioles, releases <strong>aldosterone</strong> (sodium and water retention), reabsorbs sodium in the proximal tubule, and triggers thirst and ADH release.</p><p>Net effect: tighter vessels <em>and</em> more fluid in the tank — both levers of MAP = CO × TPR go up.</p>"),
      S("chain", "Cause → effect", chain([
        "Three triggers for renin: (1) renal sympathetic nerves (NE on β1 receptors of JG cells), (2) JG-cell baroreceptors sensing low afferent-arteriole pressure, (3) the macula densa sensing low tubular sodium.",
        "Renin → angiotensin I → ACE → angiotensin II.",
        "Angiotensin II → arteriolar vasoconstriction → ↑ TPR.",
        "Angiotensin II → aldosterone → sodium and water retention → ↑ volume → ↑ CO.",
        "Angiotensin II also → proximal Na⁺ and bicarbonate reabsorption, thirst, and ADH release (aquaporins → less water lost).",
        "Result: ↑ BP. Stretch on venous volume receptors → ↓ ADH, ↑ ANP (vasodilation), and ↓ RAAS — the brake."
      ]) + Tbl(["Signal at the kidney", "Renin", "Net BP effect"], [
        ["↓ Afferent arteriole pressure", "↑", "↑ BP"],
        ["↓ Sodium at the macula densa", "↑", "↑ BP"],
        ["↑ Renal sympathetic (β1) activity", "↑", "↑ BP"],
        ["↑ Venous volume stretch (ANP)", "↓", "↓ BP"]
      ]) + HY("Low pressure or low sodium at the kidney → renin → angiotensin II (squeeze) + aldosterone (retain) → BP up.")),
      S("bedside", "Why it matters clinically", "<p>Many drugs act on this one pathway:</p>" + Tbl(["Drug", "Where it acts on RAAS"], [
        ["β-blockers", "Block β1 on JG cells → less renin (β1 stimulation increases renin release)"],
        ["ACE inhibitors", "Block angiotensin I → angiotensin II"],
        ["ARBs", "Block angiotensin II at its receptors"],
        ["Aldosterone antagonists", "Block the aldosterone (mineralocorticoid) receptor"]
      ]) + "<p>Diseases that switch RAAS on and leave it on — <strong>renal artery stenosis</strong> and <strong>chronic renal failure</strong> (volume expansion + RAAS activation) — produce hard-to-control HTN.</p><p><strong>Tubuloglomerular feedback</strong> is the kidney's local version: moderately high sodium at the macula densa → ATP → afferent constriction → ↓ GFR; low sodium → prostaglandins → afferent dilation → ↑ filtration.</p>" + clar("NSAIDs block prostaglandin production, which is one reason they can raise BP (the lecture lists NSAIDs as raising BP by about 5 mmHg).")),
      S("traps", "Common traps", traps([
        "<strong>“High sodium at the macula densa triggers renin.”</strong> It is <em>low</em> sodium (or low pressure) that stimulates renin.",
        "<strong>“Renin itself constricts vessels.”</strong> Renin is the starter enzyme; angiotensin II does the vasoconstriction and stimulates aldosterone.",
        "<strong>“Aldosterone is the only way RAAS holds water.”</strong> Angiotensin II also triggers thirst and ADH release, and reabsorbs sodium in the proximal tubule.",
        "<strong>“β1 receptors are only in the heart.”</strong> The lecture places β1 receptors in the heart and kidney, where they increase renin release."
      ]))
    ], [
      Q("chain", "Pressure in the afferent arteriole falls. Predict renin release.", ["Renin rises", "Renin falls", "Renin is unchanged", "Renin is replaced by ANP"], 0, "JG-cell baroreceptors sense decreased pressure in the afferent arteriole, which allows increased renin secretion."),
      Q("chain", "Sodium delivered to the macula densa is low. Predict renin and filtration.", ["Renin rises and prostaglandins dilate the afferent arteriole to increase filtration", "Renin falls and ATP constricts the afferent arteriole", "Renin is unchanged and GFR falls", "Renin falls and ADH is released"], 0, "Either low sodium or low pressure stimulates renin; low tubular sodium also releases prostaglandins that dilate and increase filtration."),
      Q("idea", "Which is NOT an action of angiotensin II listed in the lecture?", ["Stimulating release of atrial natriuretic peptide", "Arteriolar vasoconstriction", "Stimulating aldosterone release", "Triggering thirst and ADH release"], 0, "Angiotensin II constricts arterioles, stimulates aldosterone, reabsorbs proximal Na⁺/bicarbonate, and triggers thirst/ADH. ANP opposes RAAS."),
      Q("chain", "Venous volume receptors are stretched by a large fluid load. Predict the hormonal response.", ["↓ ADH, ↑ ANP, and ↓ RAAS", "↑ ADH, ↓ ANP, and ↑ RAAS", "↑ Renin and ↑ aldosterone", "No change — only baroreceptors respond"], 0, "Increased venous stretch decreases ADH, increases ANP (vasodilation), and decreases RAAS."),
      Q("bedside", "Besides slowing the heart, how can a β-blocker lower BP through the kidney?", ["Blocking β1 on juxtaglomerular cells reduces renin release", "Blocking β2 in the kidney increases aldosterone", "Stimulating the macula densa to release ATP", "Increasing sodium delivery to the macula densa"], 0, "β1 stimulation increases renin release; blocking β1 at the JG cells reduces it."),
      Q("chain", "Why does angiotensin II raise BP through BOTH levers of MAP = CO × TPR?", ["It constricts arterioles (↑ TPR) and expands volume via aldosterone, ADH, and Na⁺ retention (↑ CO)", "It raises heart rate directly and dilates arterioles", "It only constricts veins", "It only acts on the brain"], 0, "Vasoconstriction raises resistance; sodium and water retention expands volume, raising stroke volume and cardiac output."),
      Q("traps", "A classmate says a high-salt load at the macula densa will boost renin. What actually happens?", ["Moderately ↑ sodium at the macula densa causes ATP release and afferent constriction, and renin is not stimulated", "Renin rises sharply", "Prostaglandins dilate the afferent arteriole", "ADH is released"], 0, "Tubuloglomerular feedback: ↑ sodium → ATP → afferent vasoconstriction → ↓ GFR. It is low sodium that stimulates renin."),
      Q("bedside", "Why is HTN in chronic renal failure hard to control, per the lecture?", ["It combines volume expansion with activation of the renin-angiotensin system", "The kidney stops making renin entirely", "Baroreceptors stop working in renal failure", "Renal failure causes low cardiac output"], 0, "The lecture names volume expansion plus RAAS activation as the main factor behind HTN in chronic renal failure.")
    ]),

    // ------------------------------------------------------------------
    D("htn-fixed-narrowing", "Fixed narrowings: renal artery stenosis and coarctation", "A fixed narrowing fools the body: the tissue beyond it feels underperfused, so the body keeps raising pressure — but the blockage is still there, so the pressure never fixes the problem.", [
      S("idea", "The idea", "<p><strong>Renal artery stenosis (RAS)</strong> is a kink in the kidney's supply hose. The kidney beyond the narrowing sees low pressure and does what kidneys do: it releases <strong>renin</strong>, nonstop. Angiotensin II and aldosterone push BP up — but raising pressure upstream cannot open a <strong>fixed</strong> blockage, so the kidney keeps calling for more. Meanwhile the normal kidney and the heart take the beating.</p><p><strong>Coarctation of the aorta</strong> is the same idea in the aorta itself: a narrowing <em>after</em> the vessels to the head and arms. Everything upstream (arms) sees high pressure; everything downstream (legs) sees low, delayed flow. The body grows detour vessels (intercostal collaterals) around the narrowing.</p><p>RAS occurs in two groups: <strong>atherosclerosis</strong> in men over 50 with CAD risk factors, and <strong>fibromuscular dysplasia</strong> in women under 50 (“string of beads”).</p>"),
      S("chain", "Cause → effect", chain([
        "Renal artery narrows → low flow and pressure at that kidney's JG cells.",
        "Constant renin release → angiotensin II → severe arteriolar vasoconstriction + aldosterone.",
        "Plasma volume expands and BP rises.",
        "The stenosis is fixed, so the affected kidney stays underperfused → RAAS stays on.",
        "Constant high BP → cardiac work ↑, heart and vessel remodeling, and very high pressures in the normal kidney."
      ]) + "<p><strong>Coarctation:</strong></p>" + chain([
        "Aorta narrows after the great vessels to the head and arms.",
        "Upstream (arms): high pressure; downstream (legs): lower, delayed pulses.",
        "Intercostal arteries dilate as collaterals to supply the descending aorta → inferior rib notching on CXR.",
        "Turbulent flow through the narrowing → audible bruit in the chest."
      ]) + HY("RAS: fixed blockage → kidney keeps asking for pressure via RAAS. Coarctation: arms high, legs low and late.")),
      S("bedside", "Why it matters clinically", "<p><strong>Suspect RAS when:</strong></p><ul><li>AKI develops after starting an ACEI/ARB — the stenotic kidney depended on angiotensin II (check a chemistry panel within a week).</li><li>Refractory HTN in a patient with RAS risk factors.</li><li>Recurrent flash pulmonary edema.</li><li>An abdominal bruit over the renal artery.</li></ul>" + clar("angiotensin II constricts the efferent (outflow) arteriole of the glomerulus, which keeps filtration pressure up when inflow is low. Blocking it with an ACEI or ARB removes that support, so GFR falls and creatinine rises.") + "<p><strong>Coarctation on exam:</strong> upper-extremity BP and pulses higher than lower; a <strong>femoral pulse delayed</strong> compared with the radial (H&P slide); chest bruit; rib notching (Roesler sign) from dilated intercostal collaterals.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Higher BP will eventually fix the low flow to the stenotic kidney.”</strong> The stenosis is fixed, so the volume expansion and high BP never solve the kidney's low flow.",
        "<strong>“ACEI-induced AKI just means the drug is nephrotoxic.”</strong> It is a clue that the kidney depended on angiotensin II — think RAS.",
        "<strong>“Coarctation raises BP in the legs.”</strong> The narrowing is after the arm vessels: arms high, legs low.",
        "<strong>“Rib notching is a bone disease.”</strong> It comes from dilated intercostal collateral vessels bypassing the coarctation."
      ]))
    ], [
      Q("chain", "One renal artery is narrowed by plaque. Predict that kidney's renin output.", ["Constantly elevated", "Shut off", "Normal, because the other kidney compensates", "Elevated only at night"], 0, "The underperfused kidney senses low pressure and keeps RAAS activated."),
      Q("chain", "Why doesn't the high BP of renovascular HTN restore flow to the affected kidney?", ["The stenosis is a fixed obstruction, so higher pressure upstream cannot overcome it", "High BP dilates the stenosis", "The kidney stops sensing pressure", "Aldosterone blocks renal flow"], 0, "Volume expansion and higher BP do not solve low flow through a fixed narrowing, so RAAS stays on."),
      Q("bedside", "Creatinine jumps sharply a week after lisinopril is started. Which diagnosis should you suspect, and why?", ["Renal artery stenosis — the kidney depended on angiotensin II to keep filtering", "Polycystic kidney disease — cysts block ACE", "Pheochromocytoma — catecholamines block ACE", "Hypothyroidism — low thyroid slows filtration"], 0, "AKI with ACEI/ARB initiation is a classic clue to RAS; blocking angiotensin II removes the support of glomerular filtration."),
      Q("bedside", "Coarctation of the aorta. Predict the BP and pulses in the arms versus the legs.", ["Higher in the arms, lower and delayed in the legs", "Higher in the legs than the arms", "Equal in all four limbs", "Lower in the arms than the legs"], 0, "The narrowing lies after the vessels to the head and upper extremities, so pressure is high upstream and reduced downstream."),
      Q("chain", "What causes inferior rib notching on CXR in coarctation?", ["Dilated intercostal collateral vessels bypassing the coarctation", "Erosion from high pulmonary pressure", "Calcified aortic plaque", "Enlarged left atrium"], 0, "Intercostal collaterals form to supply the descending aorta, and their dilation notches the ribs (Roesler sign)."),
      Q("idea", "A 32-year-old woman has refractory HTN; angiography shows a “string of beads” renal artery. What is the cause?", ["Fibromuscular dysplasia", "Atherosclerotic renal artery stenosis", "Coarctation of the aorta", "Polycystic kidney disease"], 0, "RAS from fibromuscular dysplasia occurs in women under 50 and gives the string-of-beads appearance; atherosclerotic RAS is typical in men over 50."),
      Q("chain", "In renovascular HTN, what happens to the normal (unaffected) kidney over time?", ["It is stressed by very high vascular pressures", "It shrinks from low flow", "It stops making urine", "It is protected by the stenosis"], 0, "Constant high BP stresses the normal kidney with very high vascular pressures and remodels the heart and vessels."),
      Q("bedside", "Which exam finding points to coarctation rather than primary HTN?", ["Femoral pulse delayed compared with the radial pulse", "S4 gallop", "AV nicking on fundoscopy", "Displaced apical impulse"], 0, "A radial–femoral delay suggests a narrowing between the arm vessels and the legs. S4, AV nicking, and a displaced PMI reflect end-organ damage of any HTN.")
    ]),

    // ------------------------------------------------------------------
    D("htn-hormone-excess", "Hormone-driven secondary HTN: aldosterone, cortisol, licorice", "Too much aldosterone (or a hormone that acts like it) makes the kidney hold sodium and water and dump potassium and acid, so you get HTN with hypokalemia, weakness, and metabolic alkalosis.", [
      S("idea", "The idea", "<p>Aldosterone's job is to tell the distal nephron: <em>keep sodium, let potassium go</em>. In <strong>primary hyperaldosteronism</strong> (adrenal hyperplasia or an autonomous adenoma), the adrenal makes aldosterone whether the body needs it or not.</p><p>Keeping sodium means keeping water → volume rises → BP rises. But every time the kidney grabs a sodium, it gives something positive back into the urine: <strong>K⁺ and H⁺</strong>. Lose K⁺ → <strong>hypokalemia</strong> → generalized <strong>weakness</strong>. Lose H⁺ → <strong>metabolic alkalosis</strong>.</p><p><strong>Cushing's syndrome</strong> (excess glucocorticoid) also retains sodium and water, with a mild rise in aldosterone. <strong>Black licorice</strong> contains a chemical that lowers K⁺ and raises BP — it mimics the same picture.</p>"),
      S("chain", "Cause → effect", chain([
        "Autonomous aldosterone production (adenoma or hyperplasia).",
        "Distal nephron reabsorbs sodium constantly → water follows → volume expansion → ↑ BP.",
        "Sodium reabsorption is traded for K⁺ and H⁺ secretion into the urine.",
        "K⁺ wasting → persistent hypokalemia → generalized weakness.",
        "H⁺ wasting → metabolic alkalosis."
      ]) + Tbl(["", "Aldosterone excess", "Aldosterone blocked (spironolactone/eplerenone, ACEI/ARB)"], [
        ["Sodium", "Retained", "Lost in urine"],
        ["Volume / BP", "↑", "↓"],
        ["Serum K⁺", "<strong>↓ (hypokalemia)</strong>", "<strong>↑ (hyperkalemia risk)</strong>"],
        ["Acid–base", "Metabolic alkalosis", "—"]
      ]) + HY("HTN + unexplained hypokalemia + weakness = think hyperaldosteronism.")),
      S("bedside", "Why it matters clinically", "<p>The H&P lecture's clue for hyperaldosteronism is exactly this chain: a history of <strong>generalized weakness coupled with hypokalemia</strong>. Persistent hypokalemia is also on the list of findings that should trigger a secondary-HTN work-up.</p><p>The same chain run backward explains the drugs: blocking aldosterone (aldosterone antagonists) or its production (ACEI/ARBs) causes the <strong>opposite</strong> — sodium loss and <strong>hyperkalemia</strong>.</p><p><strong>Cushing's</strong>: pituitary ACTH adenoma, adrenal adenoma/hyperplasia, or ectopic ACTH (most often small cell lung cancer) → glucocorticoid excess → sodium and water retention → volume-expansion HTN.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Aldosterone excess causes hyperkalemia.”</strong> It wastes potassium — hypokalemia. Blocking aldosterone causes hyperkalemia.",
        "<strong>“The alkalosis is from vomiting.”</strong> In hyperaldosteronism the kidney wastes H⁺ in the urine as it reabsorbs sodium.",
        "<strong>“Licorice is harmless candy.”</strong> The lecture lists black licorice (and licorice root supplements) as lowering K⁺ and raising BP.",
        "<strong>“Pheochromocytoma causes hypokalemic HTN.”</strong> Pheo is catecholamine-driven: paroxysms of high BP, palpitations, sweating, pallor."
      ]))
    ], [
      Q("chain", "An adrenal adenoma secretes aldosterone autonomously. Predict serum potassium.", ["Low — K⁺ is wasted in the urine as sodium is reabsorbed", "High — K⁺ is retained with sodium", "Normal — aldosterone does not affect K⁺", "High — from cell breakdown"], 0, "Constant sodium reabsorption is traded for K⁺ and H⁺ loss in the urine → persistent hypokalemia."),
      Q("chain", "Primary hyperaldosteronism. Predict the acid–base disturbance.", ["Metabolic alkalosis", "Metabolic acidosis", "Respiratory acidosis", "No acid–base change"], 0, "H⁺ is wasted in the urine along with K⁺ as the kidney reabsorbs sodium, creating a metabolic alkalosis."),
      Q("bedside", "A hypertensive patient complains mainly of generalized weakness, and labs show persistent hypokalemia. Which cause fits best?", ["Primary hyperaldosteronism", "Pheochromocytoma", "Coarctation of the aorta", "Obstructive sleep apnea"], 0, "Weakness from persistent hypokalemia is the main complaint in hyperaldosteronism."),
      Q("chain", "Why does aldosterone excess raise blood pressure?", ["Sodium retention pulls water with it → volume expansion → ↑ cardiac output", "It directly speeds the SA node", "It constricts veins only", "It increases blood viscosity"], 0, "Excess aldosterone causes sodium and water retention, expanding volume."),
      Q("traps", "A patient eating large amounts of black licorice has HTN. Predict the potassium.", ["Low", "High", "Normal", "Unpredictable — licorice affects only sodium"], 0, "The lecture states licorice contains a chemical that lowers K⁺ and raises BP."),
      Q("chain", "An aldosterone antagonist is added. Predict the direction of serum K⁺ — the reverse of hyperaldosteronism.", ["K⁺ rises", "K⁺ falls", "K⁺ is unchanged", "K⁺ falls only at night"], 0, "Blocking the aldosterone receptor reduces Na–K pumps, increasing serum potassium while increasing urinary sodium loss."),
      Q("idea", "How does Cushing's syndrome raise blood pressure, per the lecture?", ["Glucocorticoid excess retains sodium and water (volume expansion) with a mild rise in aldosterone", "Cortisol releases catecholamines in bursts", "Cortisol narrows the renal artery", "Cortisol blocks ACE"], 0, "Excess glucocorticoid causes Na and water retention → volume-expansion HTN, plus a mild aldosterone increase."),
      Q("bedside", "Which ectopic source most often causes ACTH-dependent Cushing's in this lecture?", ["Small cell lung cancer", "Renal cell carcinoma", "Pheochromocytoma", "Thyroid adenoma"], 0, "The paraneoplastic source is usually a tumor that oversecretes ACTH, most often SCLC.")
    ]),

    // ------------------------------------------------------------------
    D("htn-sympathetic-drive", "Sympathetic surges: pheo, stimulants, alcohol, OSA", "Anything that floods the body with catecholamines (a pheochromocytoma, cocaine, methamphetamine, alcohol, smoking, hypoxia) raises heart rate and squeezes vessels — and blocking only β receptors can make it worse.", [
      S("idea", "The idea", "<p>Catecholamines (norepinephrine, epinephrine) push on both MAP levers: they raise heart rate and contractility (β1) and constrict arterioles (α). Several secondary causes are just <strong>“too much sympathetic signal”</strong>:</p><ul><li><strong>Pheochromocytoma</strong> — a usually benign adrenal-medulla tumor that releases catecholamines suddenly and unpredictably.</li><li><strong>Cocaine, methamphetamine</strong>, ephedra/pseudoephedrine — sympathomimetics.</li><li><strong>Alcohol</strong> — probably raises plasma catecholamines. <strong>Smoking</strong> — raises plasma norepinephrine.</li><li><strong>OSA</strong> — hypoxia triggers sympathetic activity.</li></ul><p>Pheo is special because the dump comes in <strong>bursts</strong>: BP can be normal or mildly high most of the time, then spike.</p>"),
      S("chain", "Cause → effect", chain([
        "Catecholamine surge (tumor, drug, hypoxia, withdrawal).",
        "β1 → ↑ heart rate and contractility → ↑ CO; palpitations.",
        "α → arteriolar vasoconstriction → ↑ TPR; pallor.",
        "Sudden severe BP spike → risk of flash pulmonary edema, MI, and stroke.",
        "Sweating (diaphoresis) accompanies the adrenergic surge."
      ]) + Tbl(["Cause", "How it adds sympathetic drive"], [
        ["Pheochromocytoma", "Tumor releases NE/epinephrine in paroxysms"],
        ["Cocaine, methamphetamine", "Illicit sympathomimetics"],
        ["Alcohol (>2 drinks/day, binges)", "Probably ↑ plasma catecholamines"],
        ["Smoking", "↑ Plasma norepinephrine"],
        ["OSA", "Hypoxia → SNS activity"],
        ["Abrupt stop of β-blocker or clonidine", "Rebound HTN"]
      ]) + HY("Paroxysmal HTN + palpitations + sweating + pallor (or headache) = catecholamine surge → think pheochromocytoma.")),
      S("bedside", "Why it matters clinically", "<p><strong>Pheo work-up:</strong> 24-hour urine metanephrines and catecholamines; if elevated, adrenal CT or MRI. History clue: episodes of sweating, labile HTN, headache, and palpitations.</p><p><strong>A drug trap:</strong> the lecture lists “β-blocker without α-blocker first when treating cocaine-induced HTN or pheo” as a cause of drug-induced HTN.</p>" + clarRx("β2 receptors in arteriolar smooth muscle cause vasodilation. A β-blocker removes that dilating effect, leaving the catecholamines' α (constricting) effect unopposed, so BP can climb further. Blocking α first prevents this.") + "<p><strong>Withdrawal:</strong> abrupt discontinuation of a β-blocker or clonidine can cause rebound HTN — so wean β-blockers over 1–2 weeks.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Pheo means constantly high BP.”</strong> BP is often normal to modestly elevated, with sudden severe paroxysms.",
        "<strong>“A β-blocker is the safe first drug for a cocaine or pheo crisis.”</strong> β-blockade without prior α-blockade can raise BP (unopposed α).",
        "<strong>“Alcohol lowers BP because it relaxes you.”</strong> More than 2 drinks/day raises BP and makes HTN hard to control.",
        "<strong>“CPAP will cure the HTN of OSA.”</strong> CPAP treats OSA and may make medications work better, but may not relieve the HTN."
      ]))
    ], [
      Q("chain", "A pheochromocytoma suddenly releases catecholamines. Predict HR and vascular tone.", ["↑ Heart rate and arteriolar vasoconstriction", "↓ Heart rate and vasodilation", "↑ Heart rate and vasodilation everywhere", "No change in heart rate, only vasodilation"], 0, "Catecholamines raise HR and contractility via β1 and constrict arterioles via α, causing paroxysmal severe HTN."),
      Q("bedside", "Episodes of headache, palpitations, sweating, pallor, and labile HTN. What test comes first?", ["24-hour urine metanephrines and catecholamines", "Renal artery duplex ultrasound", "Serum potassium and aldosterone", "TSH"], 0, "Labile HTN with adrenergic symptoms suggests pheochromocytoma; a 24-hour urine is ordered, then adrenal imaging if elevated."),
      Q("traps", "A cocaine user with severe HTN is given a β-blocker alone, and BP climbs. Why?", ["β-blockade removes β2 vasodilation, leaving α vasoconstriction unopposed", "β-blockers release catecholamines", "β-blockers expand blood volume", "β-blockers increase renin"], 0, "The lecture lists a β-blocker without an α-blocker first in cocaine-induced HTN or pheo as a cause of drug-induced HTN; unopposed α constriction explains it."),
      Q("chain", "How does smoking raise blood pressure, per the lecture?", ["It increases plasma norepinephrine", "It lowers plasma renin", "It thins the blood", "It increases vagal tone"], 0, "Smoking raises BP by increasing plasma norepinephrine and has synergistic effects with HTN on CV risk."),
      Q("chain", "A patient on clonidine runs out and stops it abruptly. Predict the BP.", ["Rebound HTN", "Profound hypotension", "No change", "Orthostatic hypotension only"], 0, "Abrupt discontinuation of a centrally acting α2 agonist (or a β-blocker) can cause rebound HTN."),
      Q("idea", "Why does a pheochromocytoma patient often have a normal BP in the office?", ["Catecholamines are released in sudden bursts, not continuously", "The tumor makes a vasodilator between bursts", "Pheo only raises BP during sleep", "The tumor is in the adrenal cortex"], 0, "BP is normal to modestly elevated most of the time, with sudden severe elevations when the tumor dumps catecholamines."),
      Q("bedside", "Why is heavy alcohol use a cause of difficult-to-control HTN?", ["It probably raises plasma catecholamines, especially with >2 drinks/day or binges", "It causes hypokalemia via aldosterone", "It narrows the renal arteries", "It lowers cardiac output"], 0, "The lecture states alcohol raises BP perhaps by increasing plasma catecholamines; >40 g/day or binge drinking makes HTN hard to control."),
      Q("chain", "In OSA, what does CPAP do for the hypertension, per the lecture?", ["It may not relieve the HTN but can make antihypertensives more effective", "It always cures the HTN", "It worsens the HTN", "It replaces the need for any medication"], 0, "CPAP effectively treats OSA but may not relieve HTN; it can make antihypertensive medication more responsive.")
    ])
  ]);
}());
