/*
  Concepts: Hypertension (same shape as data/diseases-endocrine.js).

  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with a prediction-style question bank.
  Sources: source-material/cardio-part-1/text/hypertension-part-1.md,
  -part-2.md, -part-3.md (Hypertensive Crisis is out of scope). Anything the
  slides only imply is labeled "Clarification (standard physiology)" or
  "Clarification (standard pharmacology)" in the html.

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

  window.CARDIO_CONCEPTS_HYPERTENSION = L("hypertension", "Hypertension", [

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
    ]),

    // ------------------------------------------------------------------
    D("htn-cardiac-remodeling", "Afterload → LVH → stiff heart → heart failure", "Chronic high pressure is a heavy load the left ventricle must push against, so it thickens; the thick wall relaxes poorly, raising filling pressures first (diastolic dysfunction), and eventually the pump itself fails.", [
      S("idea", "The idea", "<p>Afterload is the pressure the heart must beat against — the systolic BP. In chronic HTN the left ventricle lifts a heavier weight every beat, so like any muscle doing weight training, its cells <strong>hypertrophy</strong> (LVH). That lets it pump harder against the high aortic pressure.</p><p>The price: a thick wall is a <strong>stiff</strong> wall. It does not relax completely in early diastole, so filling needs more pressure. This <strong>diastolic dysfunction</strong> comes <em>first</em> (HFpEF). Later the thick wall crowds the cavity, limits filling and stroke volume, and systolic function fails (HFrEF).</p><p>The arteries remodel too: chronic HTN makes them <strong>stiffer</strong> (less compliant) → higher systolic BP and a <strong>wider pulse pressure</strong>.</p>"),
      S("chain", "Cause → effect", chain([
        "Chronic HTN → ↑ afterload.",
        "↑ Afterload → ↑ myocardial oxygen consumption and ↓ coronary perfusion pressure to an overworked myocardium.",
        "LV myocytes hypertrophy → LVH (hypertensive heart disease).",
        "Stiff, thick LV relaxes incompletely in early diastole → ↑ LV end-diastolic pressure → diastolic dysfunction (HFpEF).",
        "↑ LVEDP → ↑ left atrial pressure → left atrial enlargement → atrial arrhythmias.",
        "LVH impinges on the cavity → ↓ filling and stroke volume → systolic failure (HFrEF), aortic root dilation, valve incompetence, ischemia."
      ]) + Tbl(["Vessel/heart change", "Mechanism", "What you measure"], [
        ["Arterial stiffening", "↓ Compliance from chronic pressure", "↑ SBP, wide pulse pressure (isolated systolic HTN in older adults)"],
        ["LVH", "Myocyte hypertrophy against ↑ afterload", "EKG/echo LVH, heave, displaced apical impulse"],
        ["Diastolic dysfunction", "Stiff LV, incomplete relaxation → ↑ LVEDP", "S4, rales, HFpEF"],
        ["Systolic failure", "Cavity crowded, pump fails", "HFrEF"]
      ]) + HY("In HTN, diastolic dysfunction comes first: the thick, stiff LV can't relax and fill, so filling pressures rise.")),
      S("bedside", "Why it matters clinically", "<p>The HTN physical exam is a hunt for this chain: inspect and palpate for <strong>heaves</strong>, palpate for a <strong>displaced apical impulse</strong> (LVH), auscultate for an <strong>S4</strong>, and listen to the lungs for <strong>rales</strong>. Order a baseline <strong>EKG</strong> to assess for LVH, with echo if abnormal.</p>" + clar("an S4 is the sound of the atrium forcing blood into a stiff, hypertrophic ventricle late in diastole — the bedside sign of the diastolic dysfunction above. Rales reflect raised left-sided filling pressure backing up into the lungs.") + "<p><strong>Age and BP numbers:</strong> in younger patients diastolic BP is most linked to CV risk; in adults over 60, stiff arteries give isolated systolic HTN with a wide pulse pressure, and <strong>systolic BP</strong> is the main determiner of risk.</p><p>LVH is associated with increased premature death; ACEIs may halt or regress LV remodeling.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“HTN causes systolic heart failure first.”</strong> Diastolic dysfunction (HFpEF) occurs first; systolic function is long preserved.",
        "<strong>“LVH is purely bad.”</strong> It begins as an adaptation that lets the heart pump harder against high aortic pressure — the cost is stiffness and higher O₂ demand.",
        "<strong>“A wide pulse pressure in an older adult means a leaky valve.”</strong> In the lecture's context it reflects vascular non-compliance (stiff arteries).",
        "<strong>“S3 is the classic HTN heart sound.”</strong> The HTN exam slide lists S4 — the stiff-ventricle sound."
      ]))
    ], [
      Q("chain", "Systemic BP stays high for years. What happens to the left ventricular wall?", ["It hypertrophies (LVH) to pump against the higher afterload", "It thins and dilates first", "It is unaffected because afterload only affects the aorta", "It atrophies from overuse"], 0, "Increased afterload causes LV myocyte hypertrophy so the heart can pump against elevated aortic pressure."),
      Q("chain", "A hypertrophied LV relaxes incompletely in early diastole. Predict LV end-diastolic pressure.", ["LVEDP rises", "LVEDP falls", "LVEDP is unchanged", "LVEDP becomes negative"], 0, "Incomplete passive relaxation of the stiff LV raises LVEDP, which then raises left atrial pressure."),
      Q("idea", "Which type of cardiac dysfunction appears FIRST in hypertensive heart disease?", ["Diastolic dysfunction (HFpEF)", "Systolic dysfunction (HFrEF)", "Right ventricular failure", "Complete heart block"], 0, "Diastolic dysfunction occurs first; systolic function is long preserved and fails later as LVH limits filling and stroke volume."),
      Q("bedside", "Which extra heart sound fits a stiff, hypertrophic LV from long-standing HTN?", ["S4", "S3", "Opening snap", "Midsystolic click"], 0, "The HTN exam slide says to auscultate for S4 — atrial contraction into a stiff, hypertrophied ventricle."),
      Q("chain", "Why does chronic HTN widen the pulse pressure in older adults?", ["Arteries stiffen (less compliance), raising systolic pressure while diastolic stays normal or low", "The heart rate slows", "Blood volume falls", "The aortic valve narrows"], 0, "Chronic HTN increases arterial wall stiffness → higher SBP and widened pulse pressure, reflecting vascular non-compliance."),
      Q("chain", "Increased afterload affects the coronary circulation how?", ["↓ Coronary perfusion pressure while ↑ myocardial oxygen consumption", "↑ Coronary perfusion and ↓ oxygen consumption", "No change in coronary perfusion", "↓ Oxygen consumption only"], 0, "The increased afterload of HTN decreases coronary perfusion pressure to an overworked myocardium and increases myocardial O2 consumption."),
      Q("bedside", "In a 72-year-old with isolated systolic HTN, which number is the main determiner of CV risk?", ["Systolic BP", "Diastolic BP", "Heart rate", "MAP below 70"], 0, "In adults over 60, systolic BP remains the primary determiner of CV risk; in younger patients diastolic BP is most associated."),
      Q("chain", "Rising LVEDP from LVH is transmitted backward. Which structure enlarges next?", ["Left atrium", "Right ventricle", "Aortic root first", "Pulmonary valve"], 0, "Raised LVEDP increases left atrial pressure, leading to left atrial enlargement and atrial arrhythmias."),
      Q("bedside", "Which exam finding reflects LVH from chronic HTN?", ["Displaced apical impulse or heave", "Delayed femoral pulse", "Abdominal bruit", "Pinpoint pupils"], 0, "The HTN exam includes palpating for heaves and a displaced apical impulse — signs of an enlarged, hypertrophied LV.")
    ]),

    // ------------------------------------------------------------------
    D("htn-autoregulation", "Autoregulation in the brain and kidney", "The brain and kidney normally keep their own blood flow constant across a wide range of BP; chronic HTN resets the brain's range upward and breaks the kidney's protection, so both organs become vulnerable to swings in pressure.", [
      S("idea", "The idea", "<p><strong>Cerebral autoregulation</strong> keeps brain blood flow constant when MAP is between about <strong>60 and 150 mmHg</strong>. If BP drops, brain arteries dilate to keep flow up; if BP rises, arterioles constrict to prevent hyperperfusion. It works like a cruise control for brain flow.</p><p>In <strong>chronic HTN</strong> the brain gets used to high pressure and treats it as normal: cerebral vascular resistance rises. Now a pressure that is “normal” for most people feels <em>low</em> to that brain — so dropping BP fast can cause <strong>ischemia</strong>.</p><p>In the <strong>kidney</strong>, chronic HTN scars the small arteries (sclerosis, endothelial dysfunction, impaired vasodilation). Renal autoregulation fails, and pressure inside the glomerulus starts to <strong>follow systemic BP directly</strong> — the kidney has no shield against swings.</p>"),
      S("chain", "Cause → effect", chain([
        "Normal: ↓ systemic BP → cerebral arteries dilate; ↑ BP → arterioles constrict → flow stays constant.",
        "Chronic HTN → brain adapts with ↑ cerebral vascular resistance; the set point shifts upward.",
        "BP lowered rapidly to the “normal” range → below the new set point → ↓ cerebral flow → ischemia.",
        "Kidney: chronic HTN → sclerosis of small renal arteries → impaired vasodilation → autoregulation lost.",
        "Intraglomerular pressure now varies directly with systemic pressure → glomerular damage → CKD progression."
      ]) + Tbl(["", "Normal autoregulation", "Chronic HTN"], [
        ["Brain set point", "Flow constant at MAP 60–150", "Shifted upward; ↑ cerebral vascular resistance"],
        ["Rapid BP drop", "Arteries dilate, flow preserved", "<strong>Ischemia risk</strong>"],
        ["Kidney", "Glomerular pressure buffered", "Glomerular pressure follows systemic BP"]
      ]) + HY("In long-standing HTN, lower BP slowly — over weeks — so autoregulation can reset.") + "<p>CPP = MAP − ICP: the pressure pushing blood into the brain is MAP minus the pressure inside the skull.</p>"),
      S("bedside", "Why it matters clinically", "<p><strong>Titrate slowly:</strong> the lecture states that for long-standing HTN it can be just as dangerous to lower BP too precipitously as to leave it high; let BP normalize over a few weeks as medications are gradually titrated.</p><p><strong>Rapid rise in a normotensive brain:</strong> a sudden BP spike in someone whose autoregulation is set at normal can overwhelm it → hyperperfusion, raised ICP, cerebral edema, dissection, or stroke.</p><p><strong>Kidney:</strong> this is why chronic HTN contributes to CKD progression, and why Black patients — 4× more likely to have renal complications and ESKD from HTN — need close control.</p><p>Brain end-organ clues on history and imaging: headaches, cerebral atrophy greater than expected for age, dementia.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Lower is always better, and faster is better still.”</strong> In chronic HTN, dropping BP quickly into the normal range can cause cerebral ischemia.",
        "<strong>“Autoregulation protects the hypertensive kidney.”</strong> Chronic HTN damages the small arteries, so glomerular pressure varies directly with systemic pressure.",
        "<strong>“A chronically hypertensive brain tolerates low BP better.”</strong> It is the opposite: its higher resistance makes it more prone to ischemia when flow falls."
      ]))
    ], [
      Q("chain", "In a normotensive person, systemic BP falls (MAP still above 60). Predict the cerebral arteries.", ["They dilate to keep brain flow constant", "They constrict to raise flow", "They do nothing, so flow falls proportionally", "They close completely"], 0, "Cerebral autoregulation preserves flow when BP drops by dilating brain arteries."),
      Q("chain", "A patient with 20 years of uncontrolled HTN has BP lowered from 190/110 to 120/70 within hours. Predict the brain.", ["Risk of cerebral ischemia — the brain's set point has shifted upward", "Improved cerebral flow from lower resistance", "No effect, because autoregulation covers all pressures", "Cerebral edema from hyperperfusion"], 0, "Chronic HTN raises cerebral vascular resistance; a rapid drop to normal falls below the reset range, risking ischemia."),
      Q("bedside", "How should BP be brought to goal in long-standing HTN, per the lecture?", ["Gradually over a few weeks with slow titration", "Within the first hour", "Within 24 hours using IV drugs", "It should never be lowered"], 0, "Allow BP to normalize slowly over weeks so autoregulation can return to a normal set point."),
      Q("chain", "Chronic HTN causes sclerosis of small renal arteries. What happens to intraglomerular pressure?", ["It varies directly with systemic arterial pressure", "It stays constant regardless of BP", "It falls to zero", "It varies inversely with systemic pressure"], 0, "Loss of renal autoregulation means glomerular pressure follows systemic pressure, leaving the kidney unprotected during swings."),
      Q("idea", "Across what MAP range is cerebral blood flow normally held constant?", ["About 60–150 mmHg", "About 20–60 mmHg", "About 150–250 mmHg", "Only at exactly 93 mmHg"], 0, "The lecture's cerebral autoregulation curve shows constant flow with MAP 60–150 mmHg."),
      Q("chain", "ICP rises while MAP stays the same. What happens to cerebral perfusion pressure?", ["CPP falls", "CPP rises", "CPP is unchanged", "CPP equals ICP"], 0, "CPP = MAP − ICP, so a higher ICP lowers perfusion pressure."),
      Q("bedside", "A previously normotensive person has a sudden large BP spike. Which brain complication fits the lecture?", ["Hyperperfusion with raised ICP and cerebral edema", "Cerebral ischemia from low flow", "Shift of autoregulation to a lower range", "No risk, because autoregulation is intact"], 0, "In normotensive or mildly hypertensive patients a rapid rise can cause hyperperfusion, raised ICP, cerebral edema, dissection, or stroke."),
      Q("traps", "Why is a chronically hypertensive patient more prone to cerebral ischemia when flow falls?", ["The brain adapted by increasing cerebral vascular resistance", "The brain has more collateral vessels", "The brain's autoregulation range shifted lower", "Chronic HTN dilates cerebral arteries permanently"], 0, "Chronic hypertensive patients adapt by increasing cerebral vascular resistance, making them more prone to ischemia when flow decreases.")
    ]),

    // ------------------------------------------------------------------
    D("htn-diuretics", "Diuretics: where they act predicts their side effects", "Each diuretic blocks sodium reabsorption at a different spot in the nephron; that location predicts its strength and whether potassium falls (thiazides, loops) or rises (potassium-sparing drugs).", [
      S("idea", "The idea", "<p>Diuretics make the kidney let go of sodium, and water follows. Less volume → lower CO → lower BP at first; later, CO normalizes and resistance falls.</p><p>The nephron is a conveyor belt with sodium pumps at several stations. Where a diuretic jams the belt decides what else changes:</p><ul><li><strong>Loop diuretics</strong> block the thick ascending limb, where most sodium excretion is controlled — strong, used for HF, edema, ascites, and CKD more than for HTN.</li><li><strong>Thiazides</strong> increase renal sodium excretion (and may vasodilate) — weaker but long-acting, preferred for HTN.</li><li><strong>Potassium-sparing</strong> drugs work at the very end of the line, where sodium is swapped for potassium. Triamterene and amiloride block the distal sodium channels; spironolactone and eplerenone block the aldosterone receptor.</li></ul>" + clar("thiazides act in the distal convoluted tubule. Loops and thiazides send extra sodium down to the late distal nephron, where sodium is reabsorbed in exchange for potassium (and H⁺) — so more K⁺ is lost in the urine. Potassium-sparing drugs block that final exchange, so K⁺ is kept.")),
      S("chain", "Cause → effect", chain([
        "Block sodium reabsorption upstream (loop or thiazide) → more sodium and water in the urine → ↓ volume.",
        "Extra sodium reaches the distal exchange site → K⁺ and H⁺ wasted → hypokalemia (and, with loops, contraction alkalosis).",
        "Overdiuresis → hypovolemia.",
        "Thiazides also: hyponatremia, hypomagnesemia, hypercalcemia, hyperuricemia (gout), hyperglycemia.",
        "Block the distal sodium channel or the aldosterone receptor → sodium lost but K⁺ retained → hyperkalemia."
      ]) + Tbl(["Diuretic", "Site / target", "Potassium", "Signature side effects"], [
        ["Thiazide (chlorthalidone, indapamide, HCTZ)", "↑ Renal Na⁺ excretion (DCT)", "<strong>↓</strong>", "↓ Na⁺, ↓ Mg²⁺, ↑ Ca²⁺, gout, ↑ glucose"],
        ["Loop (furosemide, bumetanide, torsemide)", "Thick ascending limb", "<strong>↓</strong>", "Contraction alkalosis, gout, ototoxicity"],
        ["Triamterene, amiloride", "Distal Na⁺ channels", "<strong>↑</strong>", "Hyperkalemia; triamterene crystalluria/stones"],
        ["Spironolactone, eplerenone", "Aldosterone (mineralocorticoid) receptor", "<strong>↑</strong>", "Hyperkalemia; spironolactone gynecomastia"]
      ]) + HY("Loops and thiazides lose K⁺; potassium-sparing drugs and aldosterone antagonists keep K⁺.")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>Check labs:</strong> a chemistry panel 5–7 days after starting or increasing a thiazide or loop, looking for hypokalemia and hyponatremia. Loops are almost always given with potassium supplements.</li><li><strong>Avoid thiazides</strong> in gout (hyperuricemia), low serum sodium or SSRI use (hyponatremia), urinary incontinence, and as first line in diabetes (mild glucose-raising).</li><li><strong>Hyperkalemia danger</strong> with K-sparing drugs: diabetics, CKD, and patients on an ACEI or ARB.</li><li><strong>Spironolactone</strong> also binds estrogen and progesterone receptors → gynecomastia, irregular menses, impotence; <strong>eplerenone</strong> is more selective.</li><li><strong>Aldosterone antagonists</strong> are valued less as diuretics and more for blocking aldosterone on the kidney, vessels, and heart → compelling indication in HFrEF; initial diuretic for ascites from chronic liver disease.</li><li>Dose in the morning (BID no later than 5 pm) to avoid nocturnal diuresis.</li></ul>"),
      S("traps", "Common traps", traps([
        "<strong>“All diuretics drop potassium.”</strong> Potassium-sparing diuretics and aldosterone antagonists raise it.",
        "<strong>“Thiazides cause hypocalcemia like loops.”</strong> The lecture lists hyper<em>calcemia</em> for thiazides.",
        "<strong>“Loops are first-line for HTN because they're strongest.”</strong> Loops are mainly for HF, ascites, CKD, and edema; thiazides are the preferred HTN diuretic.",
        "<strong>“Spironolactone's gynecomastia comes from high potassium.”</strong> It comes from binding estrogen and progesterone receptors."
      ]))
    ], [
      Q("chain", "A thiazide sends extra sodium to the late distal nephron. Predict serum potassium.", ["Falls (hypokalemia)", "Rises (hyperkalemia)", "Unchanged", "Rises only with exercise"], 0, "Thiazides cause hypokalemia; the extra distal sodium is exchanged for potassium that is lost in the urine."),
      Q("chain", "Spironolactone blocks the aldosterone receptor. Predict serum potassium.", ["Rises", "Falls", "Unchanged", "Falls, then normalizes in 2 weeks"], 0, "Competitive mineralocorticoid-receptor inhibition decreases Na–K pumps, increasing serum K⁺ and urinary Na⁺ loss."),
      Q("bedside", "A patient with recurrent gout needs a BP medication. Which class should be avoided and why?", ["Thiazide diuretics — they cause hyperuricemia", "DHP CCBs — they raise uric acid", "ARBs — they cause gout flares", "α1 blockers — they block uric acid excretion"], 0, "Thiazides cause hyperuricemia (gout), so avoid them in patients with gout."),
      Q("traps", "A man on spironolactone develops gynecomastia. Which mechanism explains it?", ["Spironolactone also binds estrogen and progesterone receptors", "Hyperkalemia stimulates breast tissue", "Spironolactone raises cortisol", "Volume loss stimulates prolactin"], 0, "Spironolactone is less selective for the mineralocorticoid receptor; eplerenone is more selective and has fewer endocrine effects."),
      Q("chain", "A patient on lisinopril is started on amiloride. Which electrolyte problem should you anticipate?", ["Hyperkalemia", "Hypokalemia", "Hypercalcemia", "Hypernatremia"], 0, "Potassium-sparing diuretics cause hyperkalemia, particularly in patients on an ACEI or ARB, diabetics, and CKD."),
      Q("idea", "Where do loop diuretics act?", ["Thick ascending limb", "Proximal tubule", "Collecting duct aldosterone receptor", "Glomerulus"], 0, "Loops account for most sodium excretion in the thick ascending limb."),
      Q("bedside", "Which thiazide effect explains why it's not the preferred first-line drug in a diabetic?", ["Mild glucose-raising (hyperglycemia)", "Hyperkalemia", "Reflex tachycardia", "Dry cough"], 0, "Due to mild glucose-raising effects, clinicians should avoid thiazides as first line in diabetics, although they can be used."),
      Q("chain", "A heart-failure patient overdiureses on furosemide. Predict the acid–base and volume change.", ["Hypovolemia with contraction alkalosis", "Hypervolemia with acidosis", "Hypovolemia with metabolic acidosis", "No change"], 0, "Loop adverse effects include overdiuresis/hypovolemia and contraction alkalosis."),
      Q("bedside", "Why are loop diuretics almost always prescribed with potassium?", ["They cause hypokalemia", "They cause hyperkalemia", "Potassium increases their absorption", "Potassium prevents ototoxicity"], 0, "Loops waste potassium; roughly 20 mEq K⁺ per 40 mg furosemide in a healthy kidney, adjusted by chemistry panel."),
      Q("traps", "Which thiazide electrolyte effect runs opposite to the others in the lecture's list?", ["Calcium rises (hypercalcemia)", "Sodium falls", "Potassium falls", "Magnesium falls"], 0, "Thiazides lower K⁺, Na⁺, and Mg²⁺ but raise Ca²⁺.")
    ]),

    // ------------------------------------------------------------------
    D("htn-acei-arb", "ACE inhibitors and ARBs: blocking angiotensin II", "ACE inhibitors stop angiotensin II from being made and ARBs stop it from binding; less angiotensin II means less vasoconstriction and less aldosterone, which explains both their benefits and their potassium and kidney side effects.", [
      S("idea", "The idea", "<p>Angiotensin II squeezes vessels and calls for aldosterone. Two ways to shut it down:</p><ul><li><strong>ACE inhibitors</strong> (“-pril”) block conversion of angiotensin I → angiotensin II. ACE also breaks down <strong>bradykinin</strong>, so ACEIs raise bradykinin, a potent vasodilator.</li><li><strong>ARBs</strong> (“-sartan”) block angiotensin II from binding its receptors. They do not touch bradykinin.</li></ul><p>Less angiotensin II → vessels relax (↓ TPR) and less aldosterone (less sodium retention). But aldosterone is also how the body gets rid of potassium — so blocking it can push K⁺ <strong>up</strong>.</p>" + clarRx("the dry cough and angioedema of ACEIs are attributed to the bradykinin build-up. That is why ARBs, which do not raise bradykinin, cause less cough and less angioedema.")),
      S("chain", "Cause → effect", chain([
        "ACEI blocks angiotensin I → II (ARB blocks the receptor).",
        "↓ Angiotensin II → arteriolar vasodilation → ↓ TPR → ↓ BP.",
        "↓ Aldosterone → sodium loss and K⁺ retention → hyperkalemia risk (worse with CKD, diabetes, aldosterone antagonists).",
        "↓ Angiotensin II at the glomerulus → GFR falls a little → creatinine rises slightly, then improves.",
        "If the kidney depended on angiotensin II (RAS, hypovolemia from N/V/D, GI bleed, overdiuresis) → AKI.",
        "ACEI only: ↑ bradykinin → vasodilation, and the dry cough and angioedema risk."
      ]) + clar("angiotensin II normally constricts the efferent (outflow) arteriole, holding glomerular pressure up. Remove it and glomerular pressure falls — this lowers protein leak in proteinuric CKD (protective) but drops GFR when the kidney relied on it (harmful).") + Tbl(["", "ACE inhibitor", "ARB"], [
        ["Target", "Blocks angiotensin I → II", "Blocks angiotensin II receptors"],
        ["Bradykinin", "↑", "Not affected"],
        ["Cough", "Common (more in women)", "Less"],
        ["Angioedema", "Life-threatening; more in Black and Asian patients", "Lower risk; usable after ACEI angioedema with caution"],
        ["Hyperkalemia, ↑ creatinine, pregnancy", "Yes / yes / contraindicated", "Yes / yes / contraindicated"]
      ]) + HY("Less angiotensin II → less aldosterone → K⁺ goes up. ACEI-only bradykinin → cough and angioedema.")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>Monitor:</strong> potassium and BUN/Cr within 5–10 days of starting or increasing (5–7 days for ARBs). Stop for persistent hyperkalemia or creatinine rising more than 30%.</li><li><strong>Nephroprotective and nephrotoxic:</strong> treatment of choice for CKD with proteinuria, yet can worsen kidney function during hypovolemic illness.</li><li><strong>Heart:</strong> reduce morbidity and mortality in HFrEF and after MI; may halt or regress LV remodeling.</li><li><strong>Pregnancy:</strong> contraindicated (risk of fetal renal agenesis).</li><li><strong>Never combine ACEI + ARB</strong> (ONTARGET): combination reduced proteinuria more but worsened major renal outcomes.</li><li><strong>Race:</strong> more effective in White and Asian patients, less effective in Black patients.</li></ul>" + clar("the lecture notes HTN in Black patients is more responsive to sodium intake. HTN that is driven more by salt and volume tends to respond better to drugs that remove volume or dilate vessels directly (thiazides, CCBs) than to RAAS blockers — but compelling indications still come first.")),
      S("traps", "Common traps", traps([
        "<strong>“ACEIs cause hypokalemia like diuretics.”</strong> They lower aldosterone, so they cause hyperkalemia.",
        "<strong>“A small creatinine rise after starting means stop the drug.”</strong> A small temporary rise is expected; stop for a rise above 30% or persistent hyperkalemia.",
        "<strong>“Switch to an ARB because ARBs cause cough too.”</strong> ARBs cause less cough (no bradykinin rise) and can be trialed after an ACEI cough.",
        "<strong>“Two RAAS blockers are better than one.”</strong> ACEI + ARB worsens major renal outcomes — absolutely not."
      ]))
    ], [
      Q("chain", "An ACE inhibitor lowers angiotensin II and aldosterone. Predict serum potassium.", ["Rises", "Falls", "Unchanged", "Falls only in diabetics"], 0, "Less aldosterone means less K⁺ excretion; hyperkalemia is a listed ACEI adverse effect, especially in CKD, diabetes, or with aldosterone antagonists."),
      Q("chain", "Why does an ACE inhibitor cause dry cough while an ARB usually does not?", ["ACEIs raise bradykinin; ARBs do not affect bradykinin", "ARBs raise bradykinin more than ACEIs", "ACEIs raise aldosterone", "ARBs block the cough reflex"], 0, "ACEIs block the enzyme that also breaks down bradykinin; ARBs act at the angiotensin II receptor and leave bradykinin alone."),
      Q("bedside", "A patient on lisinopril develops vomiting and diarrhea for three days. What kidney risk rises, and why?", ["AKI — the hypovolemic kidney depends on angiotensin II to maintain filtration", "Hyperfiltration injury from extra angiotensin II", "Kidney stones from crystalluria", "Nephrotic syndrome from bradykinin"], 0, "ACEIs can worsen kidney function during illness, primarily with hypovolemia from poor intake, N/V/D, GI bleed, or overdiuresis."),
      Q("bedside", "Creatinine rises 10% one week after starting an ACE inhibitor, and potassium is normal. What is the best interpretation?", ["An expected small rise as GFR falls, which usually improves — continue and monitor", "Renal artery stenosis — stop immediately", "Angioedema is starting", "The dose is too low"], 0, "Creatinine usually rises a little temporarily; stop for persistent hyperkalemia or a rise above 30%."),
      Q("traps", "A patient had angioedema on an ACE inhibitor. Which is correct per the lecture?", ["Never prescribe another ACEI; an ARB may be used with caution and education", "Switch to a different ACEI", "Combine an ACEI with an ARB at low dose", "ACEIs can be restarted after a month"], 0, "After ACEI angioedema, discontinue and never prescribe another ACEI; ARBs can be used with caution."),
      Q("idea", "How do ARBs lower BP?", ["They block angiotensin II from binding its receptors", "They block conversion of angiotensin I to II", "They block the aldosterone receptor", "They block renin release from JG cells"], 0, "ARBs inhibit the action of angiotensin II by blocking it from binding to AT1 and AT2 receptors."),
      Q("bedside", "Why should a woman planning pregnancy avoid ACE inhibitors and ARBs?", ["Risk of renal agenesis in the fetus", "They cause maternal gout", "They cause fetal tachycardia", "They are ineffective in pregnancy"], 0, "Both are contraindicated in pregnancy due to the risk of fetal renal agenesis."),
      Q("traps", "A colleague wants to add an ARB to an ACEI to lower proteinuria further. What did ONTARGET show?", ["Proteinuria fell more, but major renal outcomes worsened", "Both proteinuria and renal outcomes improved", "No change in proteinuria", "Mortality fell by half"], 0, "Combination therapy reduces proteinuria more than monotherapy but worsens major renal outcomes."),
      Q("chain", "Which patients are at highest risk of hyperkalemia on an ACE inhibitor?", ["CKD stage IV–V, diabetics, and those also taking an aldosterone antagonist", "Young athletes", "Patients also taking a loop diuretic", "Patients with hypokalemia from vomiting"], 0, "The lecture lists CKD IV or V, diabetes, and concurrent spironolactone or eplerenone."),
      Q("bedside", "Which angioedema features match the lecture?", ["Sudden lip, tongue, and pharynx swelling; more in Black and Asian patients; half within the first week", "Slowly progressive ankle swelling after years", "Always delayed for more than a year", "More common in White patients only"], 0, "ACEI angioedema is sudden and life-threatening; 50% occur within the first week; more common in Black and Asian patients.")
    ]),

    // ------------------------------------------------------------------
    D("htn-ccb", "Calcium channel blockers: vessels vs heart", "Calcium drives contraction in both vascular smooth muscle and heart muscle; DHP CCBs mainly relax arteries (so they cause reflex tachycardia and edema), while non-DHP CCBs mainly slow the heart (so they cause bradycardia, heart block, and HF worsening).", [
      S("idea", "The idea", "<p>Calcium entry is the “go” signal for contraction in arterial smooth muscle and heart cells, and for conduction through the SA and AV nodes. CCBs block calcium influx. Their effects split by where they act most:</p><ul><li><strong>Dihydropyridines</strong> (amlodipine, felodipine, nifedipine; nicardipine IV) act mainly on <strong>peripheral arteries</strong> → potent arteriolar vasodilation; heart-rate neutral.</li><li><strong>Non-dihydropyridines</strong> (diltiazem, verapamil) act mainly on the <strong>heart</strong> → ↓ contractility (negative inotrope) and ↓ SA/AV conduction (negative chronotrope).</li></ul><p>Both lower BP about equally; you choose based on what you want them to do (or not do) to the heart.</p>" + Mn("DHP = Dilate the Periphery", "Non-DHP = slow the Node (verapamil, diltiazem).")),
      S("chain", "Cause → effect", chain([
        "CCB blocks calcium influx across smooth-muscle and cardiac cell membranes.",
        "DHP: arteriolar vasodilation → ↓ TPR → ↓ BP.",
        "Sudden large BP drop (short-acting DHP) → baroreflex → reflex tachycardia; vasodilation also → flushing, headache, dizziness.",
        "DHP ↑ vascular permeability → peripheral edema that is not from extra volume → diuretics don't fix it.",
        "Non-DHP: ↓ SA/AV conduction → ↓ HR (useful in AF); ↓ contractility → can worsen HFrEF; with a β-blocker → additive bradycardia/AV block."
      ]) + Tbl(["", "DHP (amlodipine, nifedipine)", "Non-DHP (verapamil, diltiazem)"], [
        ["Main site", "Peripheral arterioles", "Heart (SA/AV node, myocardium)"],
        ["Heart rate", "Neutral; reflex ↑ if BP drops fast", "<strong>↓</strong>"],
        ["Contractility", "Little effect", "<strong>↓</strong>"],
        ["Signature AEs", "Edema, flushing, HA, reflex tachycardia", "Bradycardia, AV block, HF worsening, constipation (verapamil)"],
        ["Avoid in", "—", "Sick sinus, 2nd/3rd-degree AV block, acutely decompensated HFrEF"]
      ]) + HY("DHPs dilate vessels (edema, reflex tachycardia); non-DHPs slow and weaken the heart (bradycardia, block, HF).")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>Compelling uses:</strong> non-DHP for <strong>AF</strong> rate control; DHP-CCBs are add-ons for CAD, DM, CKD, stroke. CCBs and thiazides work best in Black patients. Avoid non-DHPs in HFrEF.</li><li><strong>DHP edema</strong> is less common with a RAAS blocker given at the same time; if significant, the DHP may need to be stopped.</li><li><strong>Overdose (5–10× dose):</strong> even a DHP hits the AV node → bradycardia, PR prolongation, hypotension. Hyperglycemia occurs because the pancreas is prevented from releasing insulin. Mentation can stay clear until cerebral perfusion becomes critically low — recheck neuro status often.</li></ul>" + clarRx("insulin release from pancreatic β cells depends on calcium entry, which is why blocking calcium channels can raise glucose in overdose. IV calcium in overdose works by overcoming the blocked channels.")),
      S("traps", "Common traps", traps([
        "<strong>“Treat amlodipine ankle edema with a diuretic.”</strong> It comes from increased vascular permeability, not extra plasma volume, so it usually doesn't respond.",
        "<strong>“All CCBs slow the heart.”</strong> DHPs are heart-rate neutral at normal doses (and can cause reflex tachycardia); non-DHPs slow the heart.",
        "<strong>“Verapamil plus metoprolol is a safe rate-control combo.”</strong> Both slow the SA/AV node — caution for bradycardia and block.",
        "<strong>“CCB overdose patients who are talking are stable.”</strong> Mentation may stay clear despite hypotension, then deteriorate precipitously."
      ]))
    ], [
      Q("chain", "Short-acting nifedipine drops BP suddenly. Predict heart rate.", ["Reflex tachycardia", "Bradycardia", "No change", "Complete heart block"], 0, "A sudden large BP drop activates the baroreceptor reflex → reflex tachycardia; short-acting forms are rarely used."),
      Q("chain", "Verapamil acts mainly on the heart. Predict heart rate and contractility.", ["Both fall", "Both rise", "Heart rate rises, contractility falls", "Heart rate falls, contractility rises"], 0, "Non-DHP CCBs decrease SA/AV conduction (negative chronotrope) and contractility (negative inotrope)."),
      Q("traps", "A patient on amlodipine develops ankle edema. Why doesn't a diuretic usually help?", ["The edema comes from increased vascular permeability, not increased plasma volume", "Amlodipine blocks the diuretic's site of action", "The edema is from heart failure", "Diuretics raise amlodipine levels"], 0, "DHP CCBs increase vascular permeability; the edema is not from extra plasma volume, so it usually doesn't respond to diuretics."),
      Q("bedside", "A patient with HTN and atrial fibrillation needs rate control. Which CCB subclass fits, and why?", ["Non-DHP (diltiazem/verapamil) — it slows SA/AV nodal conduction", "DHP (amlodipine) — it dilates arterioles", "DHP (nifedipine) — it speeds AV conduction", "Neither — CCBs are contraindicated in AF"], 0, "Non-DHP CCBs block cardiac calcium channels, slowing AV nodal conduction; AF is their indication."),
      Q("bedside", "Which patient should NOT get verapamil?", ["A patient with second-degree AV block", "A patient with HTN and AF with normal conduction", "A Black patient with HTN", "A patient with migraine and normal EF"], 0, "Non-DHPs should not be used in bradyarrhythmias such as sick sinus syndrome or 2nd/3rd-degree AV block."),
      Q("chain", "A massive amlodipine overdose (5–10× dose). Predict the rhythm effect.", ["Bradycardia and PR prolongation from AV-node effects", "Reflex tachycardia only", "No rhythm change because DHPs spare the heart", "Atrial fibrillation"], 0, "At high doses even a DHP affects the AV node, causing bradycardia and PR prolongation plus hypotension."),
      Q("chain", "Why does CCB overdose cause hyperglycemia?", ["The pancreas is prevented from releasing insulin", "CCBs stimulate glycogenolysis via β2", "CCBs block glucose uptake in the gut", "CCBs raise cortisol"], 0, "The lecture states the pancreas is prevented from releasing insulin; insulin release depends on calcium."),
      Q("idea", "Which statement contrasts the two CCB subclasses correctly?", ["DHPs act more on peripheral vessels; non-DHPs act more on the heart", "DHPs act more on the heart; non-DHPs act more on vessels", "Both act only on veins", "Both act only on the AV node"], 0, "DHP CCBs primarily block peripheral vascular calcium channels; non-DHPs primarily block cardiac channels."),
      Q("bedside", "A patient has acutely decompensated HFrEF. Which drug should be held?", ["Diltiazem", "Amlodipine", "Furosemide", "Lisinopril"], 0, "Non-DHP CCBs decrease contractility and may worsen HF; they should not be used in acutely decompensated HFrEF.")
    ]),

    // ------------------------------------------------------------------
    D("htn-beta-blockers", "β-blockers: receptor map predicts side effects", "β1 receptors speed and strengthen the heart and release renin; β2 receptors open airways, dilate vessels, and help release insulin and glucose — so blocking them slows the heart, lowers renin, and can tighten airways and hide or worsen hypoglycemia.", [
      S("idea", "The idea", "<p>Learn the receptor map and the side effects write themselves:</p><ul><li><strong>β1</strong> (heart, kidney): ↑ HR, ↑ contractility, ↑ renin release.</li><li><strong>β2</strong> (lungs, liver, pancreas, arteriolar smooth muscle): bronchodilation, vasodilation, insulin secretion, glycogenolysis.</li></ul><p><strong>Cardioselective</strong> β-blockers (metoprolol, atenolol, bisoprolol) mainly block β1 — but selectivity is lost at higher doses. <strong>Nonselective</strong> ones (propranolol, nadolol, timolol) block both at all doses. <strong>ISA</strong> drugs (acebutolol) are partial agonists that don't lower resting HR or CO.</p><p>Hypoglycemia normally sets off the sympathetic alarm (tremor, sweating, fast heart, palpitations). A β-blocker mutes much of that alarm.</p>"),
      S("chain", "Cause → effect", chain([
        "Block β1 in the heart → ↓ HR and ↓ contractility → ↓ CO and ↓ myocardial O₂ demand.",
        "Block β1 at JG cells → ↓ renin.",
        "Block β2 in the lungs → bronchoconstriction risk → caution in asthma/COPD (any selectivity).",
        "Block β2 in the pancreas → ↓ insulin release → worse glucose metabolism.",
        "Block the sympathetic response to hypoglycemia → tremor/tachycardia/palpitations masked → unaware hypoglycemia.",
        "Stop abruptly → rebound HTN, worsening angina, or MI → taper over 1–2 weeks."
      ]) + Tbl(["Receptor blocked", "Normal job", "Predicted effect of blocking"], [
        ["β1 heart", "↑ HR, ↑ contractility", "Bradycardia, heart block, fatigue, ↓ exercise tolerance"],
        ["β1 kidney", "↑ Renin", "↓ Renin"],
        ["β2 lung", "Bronchodilation", "Bronchospasm risk"],
        ["β2 pancreas/liver", "Insulin secretion, glycogenolysis", "Glucose effects; masked hypoglycemia warning"]
      ]) + HY("Know β1 (heart, renin) vs β2 (lungs, vessels, insulin/glucose) and you can predict every β-blocker side effect.")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>Not first line for HTN</strong> (no shown reduction in stroke or mortality) — unless a compelling indication: post-MI, HFrEF or any LV dysfunction (EF &lt; 50%), CAD, AF. Compelling indications trump race.</li><li><strong>Diabetics:</strong> avoid for HTN alone because of ↓ insulin release and masked hypoglycemia.</li><li><strong>HFrEF:</strong> start low, titrate slowly — they depress contractility and HR.</li><li><strong>Nonselective uses:</strong> migraine prophylaxis, anxiety, essential tremor, portal HTN, thyrotoxicosis.</li><li><strong>Carvedilol / labetalol</strong> (α1 + β): α1 blockade adds vasodilation → lowers standing BP more → more orthostasis. Carvedilol has HFrEF mortality benefit; labetalol is used in pregnancy.</li><li><strong>Overdose:</strong> hypotension, bradyarrhythmia, confusion, hyperkalemia, hypoglycemia; lipophilic propranolol and carvedilol cross the BBB → seizures, delirium. Glucagon augments contractility; IV calcium raises HR; high-dose insulin improves contractility; lipid emulsion binds lipophilic drugs.</li></ul>" + clar("the hypoglycemia in β-blocker overdose fits the receptor map — β2 normally mediates glycogenolysis, so blocking it limits the liver's glucose release.")),
      S("traps", "Common traps", traps([
        "<strong>“Cardioselective means safe in asthma.”</strong> Selectivity is lost at higher doses; use caution in asthma/COPD regardless.",
        "<strong>“A diabetic on a β-blocker will feel hypoglycemia coming.”</strong> The sympathetic warning signs may be absent.",
        "<strong>“β-blockers are a good first-line HTN drug in everyone.”</strong> They are later-line unless there is a compelling cardiac indication.",
        "<strong>“ISA β-blockers are the most cardioprotective.”</strong> They are less cardioprotective and contraindicated post-MI."
      ]))
    ], [
      Q("chain", "A nonselective β-blocker is given to a patient with asthma. Predict the airway effect.", ["Bronchoconstriction risk from blocking β2", "Bronchodilation from blocking β1", "No airway effect", "Improved asthma control"], 0, "β2 stimulation causes bronchodilation; blocking it can worsen bronchospasm."),
      Q("chain", "A diabetic on metoprolol becomes hypoglycemic. Predict the warning symptoms.", ["Tremor, tachycardia, and palpitations may be blunted or absent", "Warning symptoms are exaggerated", "Only tachycardia increases", "The patient becomes hyperglycemic instead"], 0, "Hypoglycemia activates the sympathetic system; β-blockade blocks the target receptors, so warning signs may be absent."),
      Q("chain", "Why do β-blockers worsen glucose metabolism?", ["They decrease insulin release from pancreatic β cells", "They increase insulin release", "They block glucose absorption", "They raise aldosterone"], 0, "β2 receptors mediate insulin secretion; blocking them decreases insulin release."),
      Q("bedside", "A patient wants to stop atenolol abruptly. What risk should you explain?", ["Rebound HTN, worsening angina, or MI — taper over 1–2 weeks", "Profound hypotension", "Hypokalemia", "No risk — stop any time"], 0, "Abrupt discontinuation may cause rebound HTN, worsening angina, or MI; wean over 1–2 weeks."),
      Q("bedside", "A Black patient with HTN had an MI last year. Which drug class should be part of the regimen?", ["A β-blocker — the compelling indication outweighs race-based efficacy", "Only a thiazide", "Only a DHP CCB", "An α1 blocker"], 0, "Compelling indications trump all else; post-MI patients get a β-blocker plus ACEI/ARB regardless of race."),
      Q("traps", "A patient on high-dose metoprolol develops wheezing. Why, if metoprolol is cardioselective?", ["β1 selectivity is lost at higher doses, so β2 in the lungs is also blocked", "Metoprolol stimulates β2", "Metoprolol causes angioedema", "Wheezing is from fluid overload"], 0, "Cardioselective β-blockers may also target lung β2 receptors at higher doses."),
      Q("chain", "Carvedilol adds α1 blockade to β blockade. Predict its effect on standing BP versus a pure β-blocker.", ["Lowers standing BP more → more orthostatic hypotension", "Raises standing BP", "Same orthostatic effect as a pure β-blocker", "Only lowers supine BP"], 0, "α1 blockade causes peripheral vasodilation; carvedilol lowers standing BP more than supine, producing more orthostasis."),
      Q("bedside", "Why does propranolol overdose cause more seizures and delirium than atenolol overdose?", ["Propranolol is lipophilic and crosses the blood–brain barrier", "Propranolol blocks calcium channels", "Atenolol is more potent", "Propranolol causes hyperglycemia"], 0, "Propranolol and carvedilol are the most lipophilic β-blockers and cause the most neurotoxicity."),
      Q("idea", "Which receptor pair matches its location and effect?", ["β1 in heart and kidney: ↑ HR, ↑ contractility, ↑ renin", "β1 in lungs: bronchodilation", "β2 in heart: ↑ HR", "β2 in kidney: ↑ renin"], 0, "β1 receptors in the heart and kidney increase HR, contractility, and renin; β2 receptors in lungs, liver, pancreas, and arterioles."),
      Q("bedside", "In β-blocker overdose, why is glucagon given?", ["It augments cardiac contractility", "It blocks β2 receptors", "It lowers potassium", "It slows the heart further"], 0, "IV glucagon augments contractility; IV calcium increases HR; high-dose insulin also improves contractility.")
    ]),

    // ------------------------------------------------------------------
    D("htn-sympatholytics-vasodilators", "α1 blockers, central α2 agonists, and direct vasodilators", "Drugs that relax vessels or turn down sympathetic outflow lower BP, but the body fights back: orthostasis when standing reflexes are blocked, reflex tachycardia and fluid retention when arteries dilate, and rebound when clonidine stops suddenly.", [
      S("idea", "The idea", "<p>Three later-line options, each pulling a different lever:</p><ul><li><strong>α1 blockers</strong> (terazosin, doxazosin, prazosin) block α1 on veins and arteries → vasodilation; also relax the <strong>prostate</strong> so urine flows more easily.</li><li><strong>Central α2 agonists</strong> (clonidine, methyldopa, guanfacine) stimulate α2 in the brain → ↓ sympathetic outflow, ↑ vagal tone. Think of it as turning down the master volume knob for the sympathetic system.</li><li><strong>Direct arterial vasodilators</strong> (hydralazine, minoxidil) relax arterial smooth muscle directly with little venous effect.</li></ul><p>The body's compensations (baroreflex, RAAS) explain much of the side-effect list.</p>"),
      S("chain", "Cause → effect", chain([
        "α1 blockade → arterial and venous dilation → ↓ BP; on standing, the vessels can't constrict → orthostatic hypotension, first-dose syncope.",
        "Central α2 agonism → ↓ sympathetic outflow → ↓ BP and bradycardia; abrupt stop → rebound HTN.",
        "Direct arterial vasodilation → ↓ TPR → baroreflex → reflex tachycardia → ↑ O₂ demand → angina in CAD.",
        "Vasodilators and α2 agonists → sodium and water retention → edema (often paired with a diuretic)."
      ]) + clar("when arterial pressure falls, the kidney's renin response (and sympathetic reflexes) work to restore pressure and volume — this compensation is why vasodilators retain sodium and water and are combined with diuretics.") + Tbl(["Drug", "Lever", "Predictable side effects", "Extra use"], [
        ["α1 blocker", "Arterial + venous dilation", "Orthostasis, 1st-dose syncope, edema — dose at bedtime", "BPH"],
        ["Clonidine / methyldopa", "↓ Central sympathetic outflow", "Rebound HTN, bradycardia, orthostasis, drowsiness, dry mouth, edema", "Alcohol withdrawal; methyldopa in pregnancy; clonidine in ESRD"],
        ["Hydralazine / minoxidil", "Direct arterial dilation", "Reflex tachycardia, Na/water retention, angina; drug-induced lupus (hydralazine); hair growth (minoxidil)", "HF combo, CKD/ESRD"]
      ]) + HY("Dilate arteries → reflex tachycardia + fluid retention. Block α1 → orthostasis. Stop clonidine suddenly → rebound HTN.")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>α1 blockers</strong> are not appropriate monotherapy but treat HTN with comorbid BPH; bedtime dosing limits orthostasis; watch older patients.</li><li><strong>Clonidine</strong> counteracts alcohol withdrawal because withdrawal symptoms are driven by increased sympathetic CNS tone. It is strong and safe in renal failure. Compliance is hard (BID–TID or a weekly patch), and missed doses risk rebound.</li><li><strong>Clonidine overdose</strong> looks like an opioid overdose: pinpoint pupils, depressed consciousness, hypotension, respiratory depression, plus hypothermia — treated with naloxone, fluids, atropine, pacing, pressors.</li><li><strong>Hydralazine</strong> is described as heart-rate neutral, but excessive vasodilation can still trigger reflex tachycardia; use caution in CAD (angina, vascular steal). A loop diuretic helps offset fluid retention. Hydralazine is safe in CKD/AKI and ESRD; minoxidil is used for difficult HTN in renal failure.</li></ul>"),
      S("traps", "Common traps", traps([
        "<strong>“α1 blockers only dilate arteries.”</strong> They dilate veins and arteries — venous pooling on standing is why orthostasis is common.",
        "<strong>“Clonidine is an α2 blocker.”</strong> It is an α2 <em>agonist</em> acting in the brain to reduce sympathetic outflow.",
        "<strong>“Pinpoint pupils and coma always mean opioids.”</strong> Clonidine overdose presents the same way, with hypothermia.",
        "<strong>“Direct vasodilators lower BP without any counter-response.”</strong> Reflex tachycardia and sodium/water retention are expected."
      ]))
    ], [
      Q("chain", "Doxazosin is taken for the first time in the morning, and the patient faints an hour later. Why?", ["First-dose phenomenon: α1 blockade of veins and arteries causes orthostatic hypotension", "Rebound HTN", "Reflex bradycardia", "Hyperkalemia"], 0, "α1 blockers can cause transient dizziness, faintness, or syncope within 1–3 hours of the first dose; bedtime dosing limits orthostasis."),
      Q("bedside", "An older man has HTN and symptomatic BPH. Which add-on treats both, and how?", ["An α1 blocker — vasodilation lowers BP and prostate α1 blockade eases urine flow", "A thiazide — it increases urine flow", "Clonidine — it relaxes the bladder", "Hydralazine — it shrinks the prostate"], 0, "α1 blockers dilate vessels and block α1 receptors on the prostate."),
      Q("chain", "How does clonidine lower blood pressure?", ["Stimulates central α2 receptors → ↓ sympathetic outflow and ↑ vagal tone", "Blocks peripheral α1 receptors", "Blocks β1 receptors", "Blocks angiotensin II"], 0, "Central α2 agonists stimulate α2 receptors in the brain, reducing sympathetic outflow and increasing vagal tone."),
      Q("bedside", "Why does clonidine help in alcohol withdrawal?", ["It counteracts the increased sympathetic CNS tone that drives withdrawal symptoms", "It replaces alcohol at GABA receptors", "It speeds alcohol metabolism", "It lowers potassium"], 0, "Clonidine directly counteracts withdrawal symptoms mediated by increased sympathetic CNS tone."),
      Q("bedside", "A child is found drowsy with pinpoint pupils, slow breathing, hypotension, and hypothermia; a grandparent's clonidine is missing. What explains the picture?", ["Clonidine overdose mimicking an opioid overdose", "β-blocker overdose with hyperglycemia", "CCB overdose with clear mentation", "Hydralazine-induced lupus"], 0, "Clonidine overdose presents like opioid overdose (pinpoint pupils, depressed LOC, respiratory depression) plus hypothermia."),
      Q("chain", "Hydralazine relaxes arteries directly. Predict the heart rate and fluid response.", ["Reflex tachycardia with sodium and water retention", "Bradycardia with diuresis", "No change in rate, with dehydration", "Heart block with hypokalemia"], 0, "Excessive vasodilation causes reflex tachycardia, and sodium/water retention causes edema; a loop diuretic can minimize it."),
      Q("bedside", "Why use caution with direct vasodilators in a patient with CAD?", ["They can cause angina (vascular steal, reflex tachycardia)", "They cause bronchospasm", "They cause hyperkalemia", "They block the AV node"], 0, "Direct arterial vasodilators may cause angina and vascular steal; reflex tachycardia raises O2 demand."),
      Q("idea", "Which central α2 agonist is one of the safest in pregnancy?", ["Methyldopa", "Clonidine patch", "Guanfacine", "Minoxidil"], 0, "Methyldopa is one of the safest drugs for pregnant hypertensives and is rarely used otherwise."),
      Q("traps", "A patient on hydralazine develops joint pain, rash, and a positive ANA. Which adverse effect is this?", ["Drug-induced lupus", "Angioedema", "Excessive hair growth", "First-dose phenomenon"], 0, "Hydralazine is known to cause drug-induced lupus; minoxidil causes excessive hair growth.")
    ]),

    // ------------------------------------------------------------------
    D("htn-compelling-indications", "Choosing drugs by mechanism: compelling indications", "Pick the antihypertensive whose mechanism also treats the patient's other disease — and avoid the one whose side effects would worsen it.", [
      S("idea", "The idea", "<p>First-line drugs for uncomplicated HTN are <strong>ACEI/ARB, CCB, or thiazide</strong>. But many patients have a second disease that HTN caused or travels with — a <strong>compelling indication</strong>. In those, a specific class has proven survival benefit and goes first.</p><p>The logic isn't a list to memorize: it follows from the mechanisms you already know. A failing heart is harmed by RAAS and sympathetic overdrive, so block them. A leaky glomerulus is protected by lowering its pressure, so use an ACEI/ARB. A gouty patient shouldn't get a drug that raises uric acid.</p>"),
      S("chain", "Cause → effect", chain([
        "Identify the comorbidity (HF, post-MI, CAD, AF, DM, CKD/proteinuria, stroke, pregnancy, gout, BPH).",
        "Ask: which drug's mechanism helps that disease? → choose it.",
        "Ask: which drug's side effects worsen it? → avoid it.",
        "Stage 2 (≥140/≥90): start two drugs at low dose, ideally a fixed-dose combination — never ACEI + ARB together.",
        "Not at goal on 3 drugs including a thiazide → resistant HTN → check adherence and interfering drugs, add a 4th (e.g., aldosterone antagonist), consider secondary work-up."
      ]) + Tbl(["Condition", "Choose (mechanism)", "Avoid (mechanism)"], [
        ["HFrEF", "ACEI/ARB + β-blocker + aldosterone antagonist + diuretic (block RAAS/SNS; offload volume)", "Non-DHP CCB (negative inotrope)"],
        ["Post-MI", "β-blocker + ACEI/ARB", "ISA β-blocker"],
        ["Atrial fibrillation", "β-blocker or non-DHP CCB (slow AV node), then ACEI/ARB", "—"],
        ["Diabetes", "ACEI/ARB, then DHP-CCB or thiazide", "β-blocker without indication (↓ insulin, masked hypoglycemia); thiazide as first line (↑ glucose)"],
        ["CKD / proteinuria", "ACEI/ARB", "ACEI + ARB together"],
        ["Pregnancy potential", "Thiazide, DHP-CCB, BB (labetalol), methyldopa", "ACEI/ARB (renal agenesis)"],
        ["Gout, hyponatremia, SSRI use, incontinence", "Other first-line classes", "Thiazide (↑ uric acid, ↓ Na⁺, diuresis)"],
        ["BPH", "α1 blocker add-on", "—"],
        ["Advanced CKD / ESRD", "CCB, BB, direct vasodilators, α2 agonists (safe in ESRD)", "—"]
      ]) + HY("Compelling indications trump everything else, including race-based efficacy.")),
      S("bedside", "Why it matters clinically", "<p><strong>Why combine?</strong> Combination therapy lowers BP more than monotherapy, gets to goal faster, reduces dose-dependent side effects, and improves adherence. The common 3-drug regimen (ACEI or ARB + CCB + thiazide) controls about 80% of patients.</p><p>Thiazide efficacy improves with an ACEI or ARB, and DHP edema is less common with a RAAS blocker.</p>" + clarRx("a diuretic's volume loss activates the RAAS, which pushes BP back up; adding an ACEI/ARB blocks that counter-response, so the two drugs complement each other.") + "<p><strong>Race:</strong> CCBs and thiazides are more effective in Black patients; ACEI/ARBs first in White or non-Black patients under 60. <strong>Older adults:</strong> start low, go slow with a single agent (this also respects autoregulation).</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Black patients shouldn't get β-blockers or ACEIs.”</strong> They are less effective for HTN alone, but compelling indications (post-MI, HFrEF, CKD) still come first.",
        "<strong>“Two RAAS blockers count as good combination therapy.”</strong> Never combine an ACEI and an ARB.",
        "<strong>“Resistant HTN means the drugs don't work — add more.”</strong> First confirm adherence, home readings, and interfering substances (NSAIDs, alcohol, decongestants), then add a 4th drug or look for a secondary cause.",
        "<strong>“β-blockers are first line because they're cardioprotective.”</strong> Without a compelling cardiac indication they are later-line and haven't been shown to reduce stroke or HTN mortality."
      ]))
    ], [
      Q("bedside", "A patient with HTN and HFrEF needs another BP drug. Which CCB should be avoided, and why?", ["A non-DHP CCB — it decreases contractility", "A DHP CCB — it slows the AV node", "All CCBs — they raise potassium", "None — CCBs are first line in HFrEF"], 0, "Non-DHP CCBs are negative inotropes that may worsen HF; avoid them in HFrEF."),
      Q("bedside", "A 50-year-old with diabetes and microalbuminuria has stage 1 HTN. Which class is first?", ["ACEI or ARB", "β-blocker", "Thiazide diuretic", "α1 blocker"], 0, "For DM and CKD/proteinuria, an ACEI or ARB is first, then a DHP-CCB or thiazide."),
      Q("chain", "A patient on chlorthalidone still isn't at goal. Why does adding an ACEI or ARB work especially well?", ["The diuretic's volume loss activates RAAS, and the ACEI/ARB blocks that counter-response", "The ACEI blocks the diuretic's side effects completely", "Both drugs act at the same nephron site", "ACEIs increase thiazide absorption"], 0, "Thiazide efficacy improves with an ACEI or ARB; blocking the RAAS response to volume loss explains the synergy."),
      Q("bedside", "A 28-year-old woman planning pregnancy has stage 2 HTN. Which pair should be avoided?", ["ACEI and ARB", "Thiazide and DHP-CCB", "Labetalol and nifedipine", "Methyldopa and labetalol"], 0, "Pregnancy potential: no ACEI or ARB (renal agenesis); thiazides, DHP-CCBs, and β-blockers are okay."),
      Q("bedside", "A patient with HTN has gout and takes an SSRI. Which class should be avoided?", ["Thiazide diuretics", "DHP CCBs", "ARBs", "ACE inhibitors"], 0, "Gout (hyperuricemia) and SSRI use or low sodium (hyponatremia) are reasons to avoid thiazides."),
      Q("idea", "What makes an indication 'compelling'?", ["A high-risk comorbidity where a specific drug class has evidence-based survival benefit", "Any patient preference for a drug", "The cheapest drug available", "A BP above 180/120"], 0, "Compelling indications are high-risk conditions that are sequelae of or associated with HTN, where a class has survival benefit."),
      Q("bedside", "A patient has BP 152/96 at diagnosis with no comorbidities. How should drug therapy start?", ["Two drugs at low dose, ideally a fixed-dose combination, plus lifestyle changes", "One drug only, after 6 months of lifestyle change", "An ACEI plus an ARB", "No drugs until end-organ damage appears"], 0, "Stage 2 HTN: start dual therapy (not ACEI + ARB) with TLC to reach goal faster with fewer dose-dependent side effects."),
      Q("chain", "BP is above goal on max doses of an ARB, amlodipine, and chlorthalidone, and adherence is confirmed. What is the next step per the lecture?", ["Add a 4th drug such as an aldosterone antagonist and consider a secondary-HTN work-up", "Add an ACE inhibitor", "Stop all drugs and restart", "Switch the thiazide to a loop diuretic only"], 0, "Resistant HTN: ensure compliance and no interfering intake, then add a 4th drug (aldosterone antagonist, BB, central agent, α-blocker, or vasodilator) and consider specialist referral or secondary work-up."),
      Q("traps", "A Black patient with HTN has HFrEF. A student says to avoid β-blockers because they work poorly in Black patients. What is correct?", ["Use the β-blocker — compelling indications trump race-based efficacy", "Avoid β-blockers and use only a thiazide", "Use a non-DHP CCB instead", "Use an α1 blocker instead"], 0, "β-blockers are less effective for HTN alone in Black patients, but compelling indications like HF, prior MI, or LV dysfunction come first."),
      Q("bedside", "A patient with HTN and AF needs a drug that also controls ventricular rate. Which option fits?", ["β-blocker or non-DHP CCB", "DHP CCB", "Thiazide", "Hydralazine"], 0, "For AF, the lecture lists a β-blocker or non-DHP CCB first, which slow AV nodal conduction.")
    ])
  ]);
}());
