/*
  Concepts: Lipids & Dyslipidemia (same shape as data/diseases-endocrine.js).

  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with a prediction-style question bank.
  Source: source-material/cardio-part-1/text/lipids-dyslipidemia.md. Recall
  facts (brand names, doses, cut-offs) live in data/lipids-dyslipidemia.js.
  Anything the slides only imply is labeled "Clarification (standard
  physiology)" in the html.

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
  function traps(items) {
    return "<ul>" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>";
  }

  window.CARDIO_CONCEPTS_LIPIDS = L("lipids-dyslipidemia", "Lipids & Dyslipidemia", [

    // ------------------------------------------------------------------
    D("lip-lipoprotein-transport", "Lipoproteins: delivery trucks for fat", "Fat and cholesterol cannot dissolve in blood, so they ride in lipoproteins: chylomicrons carry diet fat from the gut, VLDL carries liver-made fat, and as each truck unloads triglyceride at the tissues it shrinks into a cholesterol-rich remnant — VLDL becomes IDL, then LDL.", [
      S("idea", "The idea", "<p>Oil and water do not mix. Triglycerides and cholesterol are <strong>hydrophobic</strong>, so they cannot float freely in blood. They are packed into <strong>lipoproteins</strong> — think of them as delivery trucks with a water-friendly outside and a fatty cargo inside.</p><p>There are two main trucks that start the route:</p><ul><li><strong>Chylomicrons</strong> are loaded in the <strong>small intestine</strong> with fat you just ate.</li><li><strong>VLDL</strong> is loaded in the <strong>liver</strong> with fat the liver made or recycled.</li></ul><p>Both drive to tissue capillaries, where an enzyme called <strong>lipoprotein lipase (LPL)</strong> unloads the triglyceride as free fatty acids. Muscle burns them for ATP; adipose stores them. The <strong>apo proteins</strong> on the truck's surface are its keys: <strong>Apo C-II</strong> switches LPL on, and <strong>Apo B</strong> lets LDL be cleared.</p><p>Every time a truck drops off triglyceride, what is left is smaller and relatively richer in cholesterol. That is why VLDL → IDL → <strong>LDL</strong>: LDL is basically the cholesterol left over after VLDL has delivered its fat.</p>"),
      S("chain", "Cause → effect", chain([
        "Diet fat is emulsified by bile acids, broken down by lipase, and absorbed by small-intestine cells.",
        "Intestinal cells repackage the fatty acids into chylomicrons.",
        "At tissue capillaries, Apo C-II on the chylomicron binds and activates LPL (LPL is also activated by insulin).",
        "LPL releases free fatty acids → muscle oxidizes them for ATP or adipose stores them.",
        "The leftover chylomicron remnant (remaining fatty acids + cholesterol) goes to the liver.",
        "The liver adds remnant fat to fat it made from excess glucose → packages VLDL.",
        "VLDL unloads triglyceride at tissues the same way (Apo C-II → LPL).",
        "VLDL remnants are cleared or hydrolyzed to IDL and then LDL; Apo B on LDL lets it be cleared."
      ]) + Tbl(["Lipoprotein", "Loaded where", "Main cargo / role"], [
        ["Chylomicron", "Small intestine", "Diet fat → tissues; remnant → liver"],
        ["VLDL", "Liver", "Liver-made triglyceride → tissues"],
        ["IDL → LDL", "Made from VLDL remnants", "Cholesterol left after triglyceride is unloaded"]
      ]) + HY("Apo C-II turns on LPL to unload triglyceride; Apo B is how LDL gets cleared. Lose either key and particles pile up in the blood.")),
      S("bedside", "Why it matters clinically", "<p><strong>Fasting lipid panel:</strong> labs are drawn after 9–12 hours of fasting so that chylomicrons from the last meal have cleared — otherwise diet fat inflates the triglyceride number.</p><p><strong>Genetic disorders are broken trucks or broken keys:</strong> no working LPL (lipoprotein lipase deficiency) → chylomicrons and VLDL cannot unload → severe hypertriglyceridemia. A defective LDL receptor or defective Apo B → LDL cannot be cleared → very high LDL and early CAD.</p><p><strong>Why LDL is the plaque particle:</strong> it is the small, cholesterol-rich end product, and small lipoprotein particles are what penetrate the vessel wall (see plaque formation).</p>"),
      S("traps", "Common traps", traps([
        "<strong>“LDL is made in the intestine.”</strong> The intestine makes chylomicrons; LDL comes from VLDL (made in the liver) after it unloads triglyceride.",
        "<strong>“LPL is in the liver.”</strong> LPL works at the <em>capillaries of tissues</em> like muscle and adipose, where the fat is unloaded.",
        "<strong>Mixing up the apo proteins.</strong> Apo C-II activates LPL (unloading triglyceride); Apo B is for LDL clearance by the receptor.",
        "<strong>“Fasting is required because cholesterol rises after meals.”</strong> The reason given is to let <em>chylomicrons</em> clear."
      ]))
    ], [
      Q("idea", "Why are triglycerides and cholesterol carried in lipoproteins?", ["They are hydrophobic and cannot dissolve in blood on their own", "They are too large to pass through capillaries", "Lipoproteins protect them from being burned for ATP", "The kidney would filter them out otherwise"], 0, "Lipids are hydrophobic, so they are transported packed inside lipoproteins."),
      Q("chain", "A chylomicron reaches a muscle capillary. Which protein on its surface lets it unload triglyceride?", ["Apo C-II, which activates lipoprotein lipase", "Apo B, which activates lipoprotein lipase", "Apo C-II, which binds the LDL receptor", "Albumin, which carries the chylomicron into the cell"], 0, "Apo C-II on chylomicrons and VLDL binds and activates LPL, which releases free fatty acids for the tissue."),
      Q("chain", "As VLDL unloads its triglyceride at the tissues, what does it become?", ["IDL and then LDL", "A chylomicron", "HDL", "Free cholesterol bound to albumin"], 0, "VLDL remnants are cleared or hydrolyzed to IDL and then LDL — the cholesterol-rich leftover."),
      Q("chain", "Insulin is high right after a meal. Predict its effect on lipoprotein lipase.", ["LPL is activated, so tissues take up more fatty acids from chylomicrons", "LPL is inhibited, so chylomicrons stay in the blood", "LPL moves to the liver to make VLDL", "Insulin has no effect on LPL"], 0, "The slides note LPL is activated by insulin, so the fed state favors unloading diet fat into tissues."),
      Q("bedside", "Why must a lipid panel be drawn fasting for 9–12 hours?", ["To let chylomicrons from the last meal clear from circulation", "To let LDL receptors regenerate", "Because the liver stops making cholesterol overnight", "Because HDL can only be measured when glucose is low"], 0, "Chylomicrons carry diet fat; fasting lets them clear so they don't distort the triglyceride value."),
      Q("chain", "Where does a chylomicron remnant go after it has unloaded most of its triglyceride?", ["To the liver, where its fat and cholesterol can be reused in VLDL", "Back to the intestine for reloading", "Into adipose cells whole", "Into the vessel wall to form plaque"], 0, "Chylomicron remnants are taken up by the liver, which adds the leftover fat to its own to make VLDL."),
      Q("traps", "A student says LDL is the particle the intestine makes from dietary fat. What is the correction?", ["The intestine makes chylomicrons; LDL comes from liver-made VLDL after it unloads triglyceride", "The intestine makes VLDL; LDL comes from chylomicrons", "LDL is made by adipose cells", "LDL is made by macrophages in the vessel wall"], 0, "Chylomicrons are the intestinal particle; VLDL → IDL → LDL is the liver pathway."),
      Q("chain", "A patient's lipoprotein lipase does not work. Which particles build up in the blood?", ["Chylomicrons and VLDL", "LDL only", "HDL only", "Free fatty acids on albumin only"], 0, "Without LPL, chylomicrons and VLDL cannot unload their triglyceride, so both accumulate and triglycerides become very high.")
    ]),

    // ------------------------------------------------------------------
    D("lip-ffa-traffic", "Fed vs fasting: where fatty acids come from", "Free fatty acids reach tissues three ways — from the meal (chylomicrons), from adipose stores (on albumin), and from the liver (VLDL) — and insulin vs glucagon decides which route is running.", [
      S("idea", "The idea", "<p>Your muscles want fatty acids for fuel at all hours, but the supply line changes with meals.</p><ul><li><strong>Just ate:</strong> fat comes from the <strong>diet</strong> in chylomicrons. Insulin is up and switches on LPL to unload it into tissues; extra goes into storage.</li><li><strong>1–2 hours later:</strong> insulin falls and glucagon rises. That tells <strong>adipose cells</strong> to release stored fatty acids, which ride through the blood on <strong>albumin</strong>.</li><li><strong>Too much fuel:</strong> the <strong>liver</strong> takes excess <strong>glucose</strong> and turns it into fatty acids (glucose → pyruvate → acetyl CoA → citrate → fatty acids), then ships them out in <strong>VLDL</strong>.</li></ul><p>That last route is the surprise for most students: eating lots of carbohydrate can raise blood triglyceride, because the liver turns extra sugar into fat and exports it as VLDL.</p>"),
      S("chain", "Cause → effect", chain([
        "Meal → diet fat absorbed → chylomicrons → insulin-activated LPL unloads fatty acids to muscle and adipose.",
        "Fatty acids not needed for ATP → stored in adipose cells.",
        "1–2 hours after the meal: ↓ insulin, ↑ glucagon → adipose releases fatty acids → carried on albumin.",
        "Excess glucose in the liver → glycolysis → acetyl CoA → citrate → fatty acid synthesis.",
        "Liver packages those fatty acids (plus chylomicron-remnant fat) into VLDL → VLDL triglyceride ↑ in blood."
      ]) + Tbl(["Source", "Carrier", "Signal that drives it"], [
        ["Diet", "Chylomicron", "Meal; insulin activates LPL"],
        ["Adipose stores", "<strong>Albumin</strong>", "↓ Insulin, ↑ glucagon"],
        ["Liver synthesis", "VLDL", "Excess glucose (and remnant fat)"]
      ]) + HY("Excess carbohydrate → liver makes fatty acids → more VLDL → higher triglycerides.")),
      S("bedside", "Why it matters clinically", "<p><strong>Diet advice follows the route:</strong> when high triglyceride is the main concern, the lecture says to cut back on <strong>carbs and alcohol</strong> — the liver's VLDL route. For familial overproduction of hepatic VLDL, a <strong>low-carbohydrate</strong> trial is first-line diet advice.</p><p><strong>Diabetes and triglycerides:</strong> the slides list DM as causing overproduction of LDL and TG, and eruptive xanthomas (a TG finding) usually disappear once the diabetes comes under control.</p>" + clar("in poorly controlled diabetes, low insulin effect means less LPL activity and more fatty-acid release from adipose, both of which push triglycerides up.")),
      S("traps", "Common traps", traps([
        "<strong>“Only dietary fat raises triglycerides.”</strong> The liver turns excess glucose into fatty acids and exports them as VLDL, so carbs and alcohol matter too.",
        "<strong>“Adipose fatty acids travel in chylomicrons.”</strong> Adipose-released fatty acids ride on <em>albumin</em>.",
        "<strong>“Insulin releases fat from adipose.”</strong> Release happens when insulin <em>falls</em> and glucagon rises; insulin drives uptake via LPL."
      ]))
    ], [
      Q("chain", "Two hours after a meal, insulin falls and glucagon rises. What happens at adipose cells?", ["They release stored fatty acids, which travel on albumin", "They take up more fatty acids from chylomicrons", "They make VLDL", "They convert fatty acids into glucose for the brain"], 0, "↓ Insulin and ↑ glucagon signal adipose cells to release fatty acids, which are carried by albumin."),
      Q("chain", "A patient eats a very high-carbohydrate diet. Predict the effect on VLDL and triglycerides.", ["Both rise — the liver turns excess glucose into fatty acids and exports them in VLDL", "Both fall — carbohydrate replaces fat in the diet", "VLDL falls but triglycerides rise", "No change — carbohydrate cannot become fat"], 0, "Excess glucose → acetyl CoA → citrate → fatty acids in the liver → packaged in VLDL → higher triglycerides."),
      Q("idea", "Which carrier moves fatty acids released from adipose cells?", ["Albumin", "Chylomicrons", "LDL", "HDL"], 0, "Stored adipose fatty acids travel in the blood bound to albumin."),
      Q("chain", "A muscle cell receives more fatty acids than it needs for ATP. What happens to the excess?", ["It is stored in adipose cells", "It is excreted in urine", "It is converted to LDL by the muscle", "It stays in the blood on albumin indefinitely"], 0, "Tissues oxidize fatty acids for ATP; those not needed are stored in adipose."),
      Q("bedside", "Triglycerides are the main lipid problem. Which diet change follows directly from the liver's VLDL pathway?", ["Cut back on carbohydrates and alcohol", "Eat more refined sugar to suppress glucagon", "Stop all protein intake", "Increase saturated fat to replace carbohydrate"], 0, "The lecture advises reducing carbs and alcohol when TG is the main concern; excess carbohydrate fuels hepatic VLDL production."),
      Q("chain", "In the liver's fat-making pathway, which molecule is the direct two-carbon building block that leads to fatty acids?", ["Acetyl CoA", "Mevalonic acid", "Albumin", "Bile acid"], 0, "Glucose → pyruvate → acetyl CoA (via citrate) → free fatty acids. Mevalonic acid belongs to the cholesterol pathway."),
      Q("traps", "A student says insulin is the hormone that releases fat from adipose between meals. Why is that wrong?", ["Release happens when insulin falls and glucagon rises; insulin activates LPL for uptake", "Insulin releases fat only during exercise", "Glucagon blocks fat release, insulin triggers it", "Neither hormone affects adipose cells"], 0, "After a meal, falling insulin and rising glucagon trigger release; insulin's role is to activate LPL so tissues take fat up.")
    ]),

    // ------------------------------------------------------------------
    D("lip-cholesterol-balance", "Cholesterol in, cholesterol out", "Blood cholesterol is a balance: it comes in from gut absorption (via NPC1L1) and liver synthesis (via HMG CoA reductase), and leaves by being turned into bile acids or excreted by the liver — and each LDL drug pushes on one of those doors.", [
      S("idea", "The idea", "<p>Picture a bathtub. Cholesterol pours in from two taps and drains out one drain.</p><ul><li><strong>Tap 1 — the gut:</strong> the small intestine absorbs dietary cholesterol through a transporter called <strong>NPC1L1</strong> at the brush border.</li><li><strong>Tap 2 — the liver:</strong> liver cells build cholesterol from acetate: acetate → HMG CoA → (HMG CoA reductase) → mevalonic acid → cholesterol.</li><li><strong>The drain:</strong> the liver clears cholesterol by turning it into <strong>bile acids</strong> or excreting it in free form. Bile acids are made from LDL cholesterol and are normally <strong>reabsorbed</strong> in the small intestine and reused.</li></ul><p>Your body needs cholesterol — for hormones, bile acids, and cell membranes — so the goal of treatment is not zero, just less in the tub. Each LDL-lowering drug works by closing a tap or opening the drain.</p>"),
      S("chain", "Cause → effect", chain([
        "Gut absorbs cholesterol through NPC1L1 → it is packed into chylomicrons → remnant cholesterol reaches the liver.",
        "Liver also synthesizes cholesterol; HMG CoA reductase is the enzyme in that pathway.",
        "Liver cholesterol leaves in VLDL → becomes LDL in the blood.",
        "Liver clears cholesterol by turning LDL cholesterol into bile acids (or excreting it free).",
        "Bile acids are normally reabsorbed in the small intestine and recycled.",
        "Block a tap or open the drain → less cholesterol → LDL falls."
      ]) + Tbl(["Drug", "Door it works on", "Result"], [
        ["Statin", "Closes liver synthesis (inhibits HMG CoA reductase)", "↓ Liver cholesterol production → ↓ LDL"],
        ["Ezetimibe", "Closes gut absorption (blocks NPC1L1)", "Less cholesterol into enterocytes and chylomicrons → ↓ LDL"],
        ["Bile acid sequestrant", "Opens the drain (binds bile acids in the gut)", "Bile acids lost in stool instead of reabsorbed → ↓ LDL"]
      ]) + HY("Statin = stop making it. Ezetimibe = stop absorbing it. Bile acid sequestrant = make the liver spend it.")),
      S("bedside", "Why it matters clinically", "<p>This map explains why the lecture's drugs <strong>add together</strong>: once a statin is maximized (dose or tolerance), a non-statin like ezetimibe works on a different door, so there is still LDL left to lower.</p><p>It also explains why <strong>diet alone gives only a modest drop</strong> (about 5–10% LDL): food is only one tap, and the liver keeps synthesizing.</p>" + clar("when bile acids are lost in stool, the liver must use more of its cholesterol to make new bile acids, which is how sequestrants lower LDL. The slides state the step (bile acids are made from LDL cholesterol) and the result (↓ LDL).")),
      S("traps", "Common traps", traps([
        "<strong>“Ezetimibe blocks cholesterol synthesis.”</strong> Ezetimibe blocks <em>absorption</em> at the intestinal brush border (NPC1L1). Statins block synthesis.",
        "<strong>“Bile acid sequestrants bind cholesterol directly.”</strong> They bind <em>bile acids</em>; the liver then uses up cholesterol replacing them.",
        "<strong>“Mevalonic acid is made by NPC1L1.”</strong> Mevalonic acid is the product of HMG CoA reductase in the liver's synthesis pathway; NPC1L1 is the gut transporter.",
        "<strong>“The goal is to eliminate cholesterol.”</strong> Cholesterol is needed for hormones, bile acids, and cell membranes."
      ]))
    ], [
      Q("chain", "A drug blocks HMG CoA reductase. Which step of cholesterol handling is reduced?", ["Liver synthesis (HMG CoA → mevalonic acid)", "Intestinal absorption through NPC1L1", "Bile acid reabsorption", "Lipoprotein lipase activity"], 0, "HMG CoA reductase converts HMG CoA to mevalonic acid in the liver's synthesis pathway; statins inhibit it."),
      Q("chain", "Ezetimibe blocks NPC1L1. Predict the downstream effect.", ["Less cholesterol enters intestinal cells, so less goes into chylomicrons and LDL falls", "The liver makes less cholesterol, so LDL falls", "More bile acids are reabsorbed, so LDL rises", "LPL is activated, so triglycerides fall"], 0, "NPC1L1 is the brush-border sterol transporter; blocking it means less cholesterol in enterocytes and less available for chylomicrons."),
      Q("chain", "A bile acid sequestrant binds bile acids in the gut. Why does LDL fall?", ["Bile acids are lost in stool, so the liver uses LDL cholesterol to make more", "The drug blocks HMG CoA reductase in the liver", "The drug destroys LDL particles in the blood", "The drug activates LPL"], 0, "Bile acids are made from LDL cholesterol and normally reabsorbed; binding them increases fecal loss, so the liver draws on cholesterol to replace them."),
      Q("idea", "What are the two sources of cholesterol for the body?", ["Intestinal absorption of dietary cholesterol and liver synthesis", "Adipose release and muscle synthesis", "Kidney synthesis and bile acid breakdown", "Albumin transport and HDL synthesis"], 0, "The small intestine absorbs ingested cholesterol, and liver parenchymal cells synthesize it."),
      Q("bedside", "A patient is on a maximally tolerated statin and still needs more LDL lowering. Why does adding ezetimibe make sense mechanistically?", ["It blocks a different door — intestinal absorption — that the statin does not touch", "It doubles HMG CoA reductase inhibition", "It replaces the statin's effect so the statin can be stopped", "It raises triglycerides, which lowers LDL"], 0, "Statins block liver synthesis; ezetimibe blocks gut absorption, so the effects add."),
      Q("chain", "Normally, what happens to bile acids after they help digest fat?", ["They are reabsorbed in the small intestine and recycled", "They are all lost in stool", "They become chylomicrons", "They are converted into triglycerides"], 0, "Bile acids are reabsorbed in the small intestine; sequestrants interrupt that recycling."),
      Q("traps", "A student says ezetimibe and statins work the same way. What is the key difference?", ["Statins block liver synthesis; ezetimibe blocks gut absorption", "Statins block gut absorption; ezetimibe blocks liver synthesis", "Both bind bile acids", "Both activate the LDL receptor directly"], 0, "Statins inhibit HMG CoA reductase; ezetimibe inhibits NPC1L1 at the intestinal brush border."),
      Q("bedside", "Why does dietary change alone usually lower LDL only modestly (about 5–10%)?", ["Diet affects only the absorption tap; the liver keeps synthesizing cholesterol", "Diet raises HMG CoA reductase activity", "Diet blocks bile acid reabsorption", "LDL is not affected by food at all"], 0, "Food is only one source; liver synthesis continues, so diet produces modest LDL reductions.")
    ]),

    // ------------------------------------------------------------------
    D("lip-ldl-receptor", "LDL clearance: the liver's LDL receptor", "LDL leaves the blood when Apo B on the particle docks onto the LDL receptor on liver cells; fewer working receptors (or a broken Apo B) means LDL piles up, and statins and PCSK9 inhibitors work by giving the liver more working receptors.", [
      S("idea", "The idea", "<p>LDL is cleared mostly by the <strong>liver</strong>. Liver cells have <strong>LDL receptors</strong> (the slides call it the LDL Apo B/E receptor) on their surface, and LDL has <strong>Apo B</strong> on its surface. Apo B is the key; the receptor is the lock. Key in lock → LDL is pulled out of the blood.</p><p>So blood LDL depends on how many working locks the liver has. Two inherited problems break this:</p><ul><li><strong>Familial defective LDL receptor</strong> — the lock is broken. Heterozygotes have about <strong>half</strong> the normal working receptors.</li><li><strong>Familial defective Apo B</strong> — the key is broken, so LDL can't bind a normal receptor.</li></ul><p>Either way the result looks the same: LDL can't get out, so it stays high from birth.</p>"),
      S("chain", "Cause → effect", chain([
        "Apo B on LDL binds the LDL receptor on the liver cell surface.",
        "Bound LDL is removed from circulation into the liver.",
        "Defective receptor or defective Apo B → binding fails → ↓ LDL clearance.",
        "LDL stays in the blood longer → LDL-C rises (often > 190 mg/dL).",
        "Excess LDL → more plaque and cholesterol deposits (xanthomas, xanthelasma, corneal arcus) → premature CAD."
      ]) + Tbl(["Change", "LDL clearance", "Blood LDL"], [
        ["↑ Working LDL receptors", "↑", "<strong>↓</strong>"],
        ["↓ Working LDL receptors (FH)", "↓", "<strong>↑</strong>"],
        ["Defective Apo B (FDB)", "↓ (can't bind)", "<strong>↑</strong>"]
      ]) + HY("Blood LDL is set by how fast the liver pulls it out: more working LDL receptors = lower LDL.") + clar("when a statin lowers cholesterol made inside the liver cell, the cell responds by putting more LDL receptors on its surface, pulling more LDL from the blood — this is why blocking liver synthesis lowers <em>blood</em> LDL so much. PCSK9 is a protein that leads to LDL receptors being destroyed instead of recycled; blocking it leaves more receptors working, matching the slide's “better clearance/recycling of LDL particles in hepatocytes.”")),
      S("bedside", "Why it matters clinically", "<p><strong>Suspect familial hypercholesterolemia</strong> when LDL-C is > 190 mg/dL plus a first-degree relative with LDL-C > 190 or premature CHD (< 55 men, < 65 women) — it is an inherited clearance problem, so it runs in families.</p><p><strong>Dose of the defect predicts severity:</strong> heterozygous FH (half the receptors, 1 in 500) → premature CAD and CAC scores seen as early as age 11. Homozygous FH (almost no working receptors) → CAD, aortic stenosis, tendon xanthomas, and death from MI before 20 without early treatment.</p><p><strong>Treatment logic:</strong> LDL ≥ 190 is one of the four statin groups (high intensity). PCSK9 inhibitors lower LDL by improving receptor recycling.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“FH is caused by eating too much cholesterol.”</strong> It is a <em>clearance</em> defect — the receptor or Apo B is broken — so LDL is high even with a good diet.",
        "<strong>“Defective Apo B and defective LDL receptor look different clinically.”</strong> Both reduce LDL binding to the receptor; the slides say the presentation is similar.",
        "<strong>“Statins only lower LDL by making less cholesterol.”</strong> Less liver cholesterol also prompts more LDL receptors, which increases clearance (clarification above).",
        "<strong>Wrong particle.</strong> Apo C-II is for LPL and triglyceride unloading; Apo B is the LDL-receptor key."
      ]))
    ], [
      Q("chain", "A patient inherits half the normal number of functional LDL receptors. Predict blood LDL.", ["Elevated, because the liver clears LDL more slowly", "Low, because less LDL enters the liver to be stored", "Normal, because the gut compensates", "Elevated triglycerides only, with normal LDL"], 0, "Heterozygous FH cells have about half the functional receptors, so LDL clearance falls and LDL rises."),
      Q("chain", "A mutation changes Apo B so it binds poorly to the LDL receptor. What happens?", ["LDL clearance falls and LDL rises, similar to a defective receptor", "LPL can't unload triglyceride, so TG rises", "Chylomicrons can't form in the intestine", "HDL rises and protects the patient"], 0, "Familial defective Apo B impairs binding of LDL to the receptor, so the picture resembles a defective LDL receptor."),
      Q("chain", "A statin lowers cholesterol production inside liver cells. Why does blood LDL fall so much?", ["Liver cells put more LDL receptors on their surface and pull more LDL from the blood", "Statins destroy LDL particles in the bloodstream", "Statins block LDL from leaving the intestine", "Statins convert LDL into HDL"], 0, "Clarification (standard physiology): less intracellular cholesterol triggers more LDL receptors, increasing clearance of blood LDL."),
      Q("chain", "A PCSK9 inhibitor is started. Predict its effect on LDL receptors and LDL.", ["More receptors recycled and working → better LDL clearance → ↓ LDL", "Fewer receptors → ↓ clearance → ↑ LDL", "No receptor change; it blocks gut absorption", "More LPL activity → ↓ LDL"], 0, "PCSK9 inhibition improves clearance/recycling of LDL in hepatocytes, lowering LDL."),
      Q("bedside", "Which history best fits familial hypercholesterolemia?", ["LDL-C > 190 mg/dL and a father with an MI at 48", "LDL-C 130 mg/dL and a grandmother with a stroke at 85", "TG 900 mg/dL and recurrent pancreatitis", "HDL 30 mg/dL with normal LDL"], 0, "Suspect FH with LDL-C > 190 plus a first-degree relative with LDL-C > 190 or premature CHD (< 55 men, < 65 women)."),
      Q("bedside", "Why does homozygous FH present far earlier and worse than heterozygous FH?", ["Homozygotes have almost no working LDL receptors, so LDL clearance is far lower", "Homozygotes have extra LDL receptors that trap LDL in the wall", "Homozygotes absorb more cholesterol from the gut", "Homozygotes have defective LPL instead"], 0, "Heterozygotes keep about half their receptors; homozygotes lose nearly all, so LDL is far higher and CAD/MI can occur before age 20."),
      Q("traps", "A student says FH is mainly a disease of high cholesterol intake. What is the better explanation?", ["It is a genetic clearance defect — LDL can't bind or be removed by the liver", "It is a defect in cholesterol absorption from the gut", "It is caused by too much LPL", "It is caused by low bile acid production"], 0, "FH comes from a mutated LDL receptor (or Apo B), which decreases LDL clearance regardless of diet."),
      Q("idea", "Which surface protein on LDL is the 'key' for the liver's LDL receptor?", ["Apo B", "Apo C-II", "Lipoprotein lipase", "Albumin"], 0, "Apo B on LDL facilitates its clearance by binding the LDL receptor; Apo C-II activates LPL instead.")
    ]),

    // ------------------------------------------------------------------
    D("lip-plaque-formation", "From fatty streak to plaque rupture", "Small LDL particles slip into a damaged artery wall, get oxidized, attract monocytes that become foam cells (fatty streak), the wall walls it off with calcium and a fibrous cap (plaque), and if that cap ruptures, platelets form a clot that blocks flow.", [
      S("idea", "The idea", "<p>Atherosclerosis is a slow story told in the <strong>intima</strong>, the inner layer of the artery.</p><ol><li><strong>Leak in:</strong> small lipoprotein particles (LDL) slip through the endothelium and get <strong>oxidized</strong>. Damaged endothelium (HTN, smoking, shear forces) lets more in.</li><li><strong>Call for help:</strong> trapped lipoprotein makes the endothelium put out <strong>adhesion molecules</strong> — a <strong>fatty streak</strong>. Monocytes stick, become macrophages, and gorge on the lipoprotein until they are bloated <strong>foam cells</strong>.</li><li><strong>Wall it off:</strong> smooth muscle tries to protect the lesion by laying down <strong>calcium</strong> (hardening; the segment can no longer vasodilate) and a <strong>fibrous cap</strong> (narrowing). Now it is a <strong>plaque</strong>, and the inflammation makes it locally <strong>prothrombotic</strong>.</li><li><strong>Crack:</strong> the plaque can fissure or rupture. The exposed core makes platelets aggregate → <strong>thrombus or embolus</strong> → sudden loss of blood flow.</li></ol><p>That is “narrowing and hardening,” driven by three processes: endothelial injury, lipoprotein accumulation, and inflammation.</p>"),
      S("chain", "Cause → effect", chain([
        "Endothelial injury (HTN, smoking, shear forces) ↑ permeability of the vessel wall.",
        "Small lipoprotein particles penetrate the endothelium → oxidized → collect in the intima.",
        "Intimal lipoprotein ↑ adhesion molecules → fatty streak.",
        "Monocytes bind, become macrophages, ingest lipoprotein → foam cells.",
        "Smooth muscle deposits calcium (hardening, no vasodilation) and builds a fibrous cap (narrowing) → atherosclerotic plaque.",
        "Inflammation → plaque becomes locally prothrombotic.",
        "Plaque fissures/ruptures → exposed core → platelet aggregation → thrombus or embolus.",
        "Oxygen deprivation downstream → ACS (heart), TIA/CVA (brain), kidney or leg ischemia."
      ]) + Tbl(["Plaque feature", "Made by", "Effect on the artery"], [
        ["Foam cells / fatty streak", "Macrophages eating oxidized lipoprotein", "Early lesion in the intima"],
        ["Calcium", "Smooth muscle", "<strong>Hardening</strong> — can't vasodilate"],
        ["Fibrous cap", "Smooth muscle", "<strong>Narrowing</strong> of the lumen"],
        ["Rupture", "Inflamed, prothrombotic plaque", "<strong>Sudden</strong> thrombus/embolus"]
      ]) + HY("Slow narrowing causes stable symptoms; sudden rupture + platelet clot causes ACS and stroke.")),
      S("bedside", "Why it matters clinically", "<p><strong>The ASCVD list is this one process in different arteries:</strong> stable angina and ACS (coronary), ischemic stroke/TIA (cerebral), PAD (legs), and any prior revascularization. A patient with any of these is in <strong>secondary prevention</strong>.</p><p><strong>CAC score uses the calcium step:</strong> because smooth muscle calcifies plaque, a low-dose CT can measure coronary calcium; a positive scan confirms coronary artery disease, and a higher score means a larger plaque burden.</p><p><strong>hs-CRP uses the inflammation step:</strong> an acute phase reactant associated with underlying atherosclerosis and future coronary events.</p><p><strong>Statins</strong> limit progression and may even cause regression of atherosclerosis.</p><p>Plaque also roughens the lumen, which makes flow turbulent — the bruit on the H&P exam.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Plaque only matters once it blocks the whole artery.”</strong> The dangerous event is often <em>rupture</em> of a plaque, which triggers a sudden platelet clot.",
        "<strong>“Calcium in plaque is a sign of healing, so it's harmless.”</strong> Calcium hardens the artery and blocks vasodilation; its presence on CAC confirms CAD.",
        "<strong>“Foam cells are fat cells.”</strong> Foam cells are <em>macrophages</em> (from monocytes) stuffed with ingested lipoprotein.",
        "<strong>“Atherosclerosis starts in middle age.”</strong> About 1 in 6 American teenagers already show beginning stages."
      ]))
    ], [
      Q("chain", "Lipoprotein accumulates in the intima. What does the endothelium do next?", ["Increases adhesion molecules, forming a fatty streak", "Releases calcium to dissolve the lipid", "Produces lipoprotein lipase to break it down", "Sheds into the bloodstream as an embolus"], 0, "Intimal lipoprotein ↑ adhesion molecules on the endothelium, forming the fatty streak that monocytes bind to."),
      Q("idea", "What is a foam cell?", ["A macrophage that has ingested lipoprotein in the vessel wall", "An adipocyte lodged in the intima", "A smooth muscle cell full of calcium", "A platelet stuck to the endothelium"], 0, "Circulating monocytes bind the streak, become macrophages, and ingest lipoprotein, creating foam cells."),
      Q("chain", "Smooth muscle deposits calcium in a plaque. Predict the effect on that arterial segment.", ["It hardens and can no longer vasodilate", "It becomes more compliant and dilates more easily", "It dissolves the fibrous cap", "It stops all inflammation"], 0, "Calcium deposition hardens the artery, and vasodilation is inhibited in that area."),
      Q("chain", "A plaque's fibrous cap ruptures. What is the immediate danger?", ["Exposed core triggers platelet aggregation → thrombus or embolus", "The plaque shrinks and flow improves", "LDL is released and cleared by the liver", "The artery calcifies completely and stops bleeding"], 0, "Rupture exposes the plaque core, and platelet aggregation can form a thrombus or embolus that cuts off flow."),
      Q("chain", "Hypertension and smoking damage the endothelium. How does that speed up plaque formation?", ["Damaged endothelium lets more lipoprotein penetrate into the intima", "Damaged endothelium blocks LDL from entering the wall", "Damaged endothelium makes HDL into LDL", "Damaged endothelium lowers adhesion molecules"], 0, "Lipoprotein entry and oxidation are accelerated at sites of endothelial damage (HTN, smoking, shear forces)."),
      Q("bedside", "Why does a coronary artery calcium (CAC) score reflect atherosclerosis?", ["Smooth muscle calcifies plaques, so coronary calcium marks plaque burden", "Calcium is deposited only in normal arteries", "CAC measures LDL in the blood", "CAC measures inflammation via CRP"], 0, "Plaque calcification by smooth muscle is what the CT detects; a positive scan confirms CAD and a higher score means more plaque."),
      Q("bedside", "A patient had a stent placed 2 years ago. How should you classify his statin therapy?", ["Secondary prevention — prior revascularization counts as clinical ASCVD", "Primary prevention — he has never had an MI", "No prevention category — stents cure the plaque", "Primary prevention only if his LDL is > 190"], 0, "History of coronary or other arterial revascularization is part of the clinical ASCVD definition, so treatment is secondary prevention."),
      Q("traps", "A student says the smooth muscle response (calcium and fibrous cap) protects the patient. What is the problem with that view?", ["It hardens and narrows the artery, and the inflamed plaque can still rupture", "It removes all lipid from the wall", "It converts the plaque back into normal endothelium", "It only happens in veins"], 0, "The protective response causes hardening (calcium) and narrowing (fibrous cap); the inflamed plaque is prothrombotic and prone to rupture.")
    ]),

    // ------------------------------------------------------------------
    D("lip-risk-factor-mechanisms", "How risk factors feed the plaque", "Each CAD risk factor pushes on a step of plaque formation: smoking and HTN injure the endothelium so LDL gets in, diabetes glycates lipoproteins so foam cells form faster, and inactivity, obesity, and alcohol raise the LDL supply.", [
      S("idea", "The idea", "<p>Plaque needs two things: a <strong>damaged wall</strong> to get into, and <strong>plenty of LDL</strong> to deliver. The risk factors are easiest to remember by which of those they supply — some do both.</p><ul><li><strong>Wall damage:</strong> HTN (shear force, more permeability), smoking (endothelial dysfunction, oxidant stress), diabetes (oxidative damage).</li><li><strong>More LDL / less HDL:</strong> obesity and alcohol (overproduce LDL/total cholesterol), diabetes (overproduce LDL and TG), inactivity (↑ LDL, ↓ HDL), smoking (↓ HDL).</li><li><strong>More clotting:</strong> smoking (platelet and leukocyte adhesion), diabetes (pro-thrombotic tendency).</li></ul>"),
      S("chain", "Cause → effect", chain([
        "HTN → shear forces damage endothelium → ↑ wall permeability to lipoproteins.",
        "Smoking → endothelial dysfunction → ↑ oxidative LDL deposition, ↓ HDL, ↑ platelet/leukocyte adhesion, ↑ SNS (nicotine), tissue hypoxia.",
        "Diabetes → glycation of lipoproteins → ↑ uptake by scavenger macrophages (foam cells) and ↑ pro-thrombotic tendency; plus oxidative endothelial damage and ↑ LDL/TG.",
        "Inactivity → weight gain, ↑ LDL, ↓ HDL; routine activity reverses it (weight loss, ↓ LDL, ↑ HDL).",
        "Obesity and alcohol abuse → overproduction of LDL/total cholesterol.",
        "More damaged wall + more LDL + more clotting → faster plaque growth and more events."
      ]) + Tbl(["Risk factor", "Damages wall", "↑ LDL / ↓ HDL", "↑ Clotting"], [
        ["Smoking", "✓", "↓ HDL", "✓"],
        ["HTN", "✓", "—", "—"],
        ["Diabetes", "✓", "↑ LDL and TG", "✓"],
        ["Inactivity", "—", "↑ LDL, ↓ HDL", "—"],
        ["Obesity / alcohol", "—", "↑ LDL/TC", "—"]
      ]) + HY("Risk factors either open the wall (HTN, smoking, DM) or fill the blood with LDL (DM, obesity, alcohol, inactivity) — and DM and smoking also make clots easier.")),
      S("bedside", "Why it matters clinically", "<p><strong>Lifestyle treatment reverses the same steps:</strong> smoking cessation, managing HTN/DM/CKD/obesity, and exercise. The lecture notes diet changes give only modest LDL drops (5–10%) — the bigger win is improving comorbidities like weight, BP, glucose, and inflammation.</p><p><strong>Risk calculators include these inputs</strong> (Framingham: age, sex, cholesterol, HDL, SBP, DM, smoking) because each feeds plaque formation.</p><p><strong>Secondary causes overlap:</strong> DM, alcohol, obesity, and smoking appear on both the CAD risk list and the list of secondary causes of dyslipidemia.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Hypertension raises LDL.”</strong> The lecture's mechanism for HTN is endothelial damage and permeability from shear forces, not more LDL.",
        "<strong>“Smoking only matters for lung disease.”</strong> It damages endothelium, ↑ oxidative LDL deposition, ↓ HDL, and ↑ platelet adhesion.",
        "<strong>“Diabetes harms arteries only through high glucose.”</strong> Glycated lipoproteins are taken up faster by macrophages (more foam cells), and DM also raises LDL/TG and clotting tendency.",
        "<strong>“Exercise only helps by burning calories.”</strong> Routine activity also ↓ LDL and ↑ HDL."
      ]))
    ], [
      Q("chain", "How does hypertension promote atherosclerosis?", ["Shear forces damage the endothelium and ↑ its permeability to lipoproteins", "It raises LDL production in the liver", "It blocks LPL at the capillaries", "It lowers HDL by blocking bile acids"], 0, "Elevated BP damages the endothelium and increases wall permeability to lipoproteins via shear forces."),
      Q("chain", "In diabetes, lipoproteins become glycated. Which plaque step speeds up?", ["Scavenger macrophages take up more cholesterol, forming more foam cells", "Smooth muscle stops depositing calcium", "LDL receptors on the liver increase", "Chylomicrons stop forming"], 0, "Glycation enhances uptake of cholesterol by scavenger macrophages (foam cells) and increases pro-thrombotic tendency."),
      Q("chain", "A sedentary patient starts routine exercise. Predict the lipid changes.", ["↓ LDL and ↑ HDL", "↑ LDL and ↓ HDL", "↑ LDL and ↑ HDL", "No change in lipids, only weight"], 0, "Routine physical activity → weight loss, ↓ LDL, ↑ HDL; inactivity does the reverse."),
      Q("idea", "Which effect of smoking makes a clot on a plaque more likely?", ["↑ platelet and leukocyte adhesion", "↑ HDL levels", "↓ sympathetic activity", "↓ LDL deposition"], 0, "Smoking increases platelet and leukocyte adhesion, along with endothelial dysfunction and ↓ HDL."),
      Q("chain", "Which risk factor in the lecture both damages the endothelium AND raises LDL and triglycerides?", ["Diabetes mellitus", "Hypertension", "Male sex", "Family history"], 0, "DM causes oxidative endothelial damage, glycation of lipoproteins, and overproduction of LDL and TG."),
      Q("bedside", "A smoker asks why quitting helps his heart if his LDL is normal. Which mechanism best answers him?", ["Smoking injures the endothelium, oxidizes deposited LDL, lowers HDL, and makes platelets stickier", "Smoking only matters if LDL is above 190", "Smoking raises LDL receptor numbers", "Smoking only affects the lungs, not arteries"], 0, "Smoking's endothelial dysfunction, oxidative LDL deposition, ↓ HDL, and ↑ platelet adhesion all feed plaque formation and rupture regardless of LDL level."),
      Q("traps", "A student says hypertension causes atherosclerosis by raising LDL. What is the lecture's mechanism?", ["Endothelial damage from shear forces lets lipoprotein into the wall", "HTN blocks HDL synthesis", "HTN glycates lipoproteins", "HTN activates PCSK9"], 0, "The slides describe HTN as damaging the endothelium and increasing its permeability to lipoproteins.")
    ]),

    // ------------------------------------------------------------------
    D("lip-hypertriglyceridemia", "High triglycerides: too much made or too little cleared", "Triglycerides rise when the liver overproduces VLDL or when lipoprotein lipase can't unload chylomicrons and VLDL; very high levels threaten pancreatitis and cause eruptive xanthomas, and the fix depends on which side is broken.", [
      S("idea", "The idea", "<p>Think of triglycerides like cars on a highway. The highway jams if too many cars get on (<strong>overproduction</strong>) or if the exits are closed (<strong>under-utilization</strong>).</p><ul><li><strong>Overproduction:</strong> the liver makes too much VLDL. Secondary factors — diabetes, alcohol, estrogen — make it worse.</li><li><strong>Under-utilization:</strong> <strong>lipoprotein lipase deficiency</strong>. With no working LPL, chylomicrons and VLDL can't unload their triglyceride, so both pile up and TG becomes severe.</li></ul><p>The treatment follows the jam. If the liver is overproducing, cut the liver's fuel (carbs, alcohol) and use drugs that lower VLDL. If LPL is missing, the patient can't clear chylomicrons, so the main fix is a <strong>low-fat diet</strong> — don't make chylomicrons in the first place.</p>"),
      S("chain", "Cause → effect", chain([
        "Overproduction: liver makes excess VLDL (worsened by DM, alcohol, estrogen) → ↑ TG.",
        "Under-utilization: LPL gene mutation → no LPL → chylomicrons and VLDL can't unload → ↑↑ chylomicrons, VLDL, TG.",
        "Very high TG (the slides give > 500 as pancreatitis risk; familial cases > 750) → pancreatitis.",
        "↑ TG → eruptive xanthomas (firm, pea-sized red-yellow papules, especially buttocks).",
        "Treat the cause → TG falls → eruptive xanthomas usually disappear."
      ]) + Tbl(["", "Overproduction", "Under-utilization (LPL deficiency)"], [
        ["Broken step", "Liver makes too much VLDL", "Tissues can't unload chylomicrons/VLDL"],
        ["What piles up", "VLDL", "<strong>Chylomicrons</strong> and VLDL"],
        ["Diet focus", "Low carbohydrate (± low fat)", "<strong>Low fat</strong> — avoid creating chylomicrons"],
        ["Drugs", "Fish oil/Vascepa; historically fibrates", "VLDL/TG-lowering (fish oil/Vascepa)"]
      ]) + HY("Overproduction → cut carbs and alcohol. LPL deficiency → cut fat. Either way, very high TG means pancreatitis risk.")),
      S("bedside", "Why it matters clinically", "<p><strong>Eruptive xanthoma is the TG finding</strong> — it erupts suddenly and fades when the cause (often diabetes) is controlled. Xanthelasma, tendon xanthomas, and corneal arcus are the <strong>LDL/cholesterol</strong> deposit findings of FH.</p><p><strong>The panel breaks at high TG:</strong> above TG 400, VLDL and LDL can't be calculated (see the lipid panel concept).</p><p><strong>Fish oil fits the overproduction model:</strong> omega-3s decrease hepatic VLDL production, lowering TG (about 20–45% at prescription doses). <strong>Fibrates</strong> lower TG and are not indicated unless there is a hypertriglyceridemia component.</p><p><strong>Bile acid sequestrants raise TG</strong>, so they are a poor fit for a patient whose problem is triglycerides.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“All high-TG patients need a low-carb diet.”</strong> In LPL deficiency the problem is clearing chylomicrons, so <em>low fat</em> is the primary diet treatment.",
        "<strong>“Eruptive xanthomas mean high LDL.”</strong> They are due to ↑ triglycerides. LDL causes xanthelasma, tendon xanthomas, and arcus.",
        "<strong>“High TG matters only for the heart.”</strong> Severe TG can cause pancreatitis — the most urgent reason to treat it.",
        "<strong>Using a bile acid sequestrant for high TG.</strong> Sequestrants increase TG."
      ]))
    ], [
      Q("chain", "A patient has a mutation that eliminates lipoprotein lipase function. Which particles accumulate?", ["Chylomicrons and VLDL", "LDL only", "HDL only", "IDL only"], 0, "Without LPL, chylomicrons and VLDL can't release their triglyceride, so both rise and TG becomes severe."),
      Q("chain", "Why is a low-fat diet the primary treatment for lipoprotein lipase deficiency?", ["Less dietary fat means fewer chylomicrons that the patient can't clear", "Fat directly destroys LDL receptors", "Low fat raises LPL production", "Low fat stops the liver from making cholesterol"], 0, "The patient can't unload chylomicrons, so avoiding dietary fat avoids creating them."),
      Q("chain", "A patient's familial hypertriglyceridemia comes from hepatic VLDL overproduction. Which change worsens it?", ["Heavy alcohol use", "A low-carbohydrate diet", "Starting fish oil", "Better diabetes control"], 0, "Secondary factors such as DM, alcohol, and estrogen exacerbate hepatic VLDL overproduction."),
      Q("bedside", "A patient with TG of 1,200 mg/dL has sudden pea-sized yellow papules on the buttocks. What explains the rash?", ["Eruptive xanthomas from ↑ triglycerides", "Tendon xanthomas from ↑ LDL", "Xanthelasma from ↑ LDL", "Corneal arcus from ↑ HDL"], 0, "Eruptive xanthomas are firm, pea-sized red-yellow papules due to ↑ triglycerides, often on the buttocks."),
      Q("bedside", "What is the most urgent complication of very high triglycerides?", ["Pancreatitis", "Aortic stenosis", "Corneal arcus", "Hypothyroidism"], 0, "The slides list pancreatitis risk at TG > 500 (and > 750 in familial hypertriglyceridemia)."),
      Q("chain", "Omega-3 fatty acids lower triglycerides by which mechanism?", ["Decreasing hepatic VLDL production", "Blocking NPC1L1 in the gut", "Binding bile acids", "Inhibiting HMG CoA reductase"], 0, "Fish oil decreases hepatic VLDL production, lowering TG."),
      Q("bedside", "A patient's main problem is TG 450. Why is a bile acid sequestrant a poor choice?", ["Bile acid sequestrants increase triglycerides", "Bile acid sequestrants raise LDL", "Bile acid sequestrants are injectable only", "Bile acid sequestrants work only in FH"], 0, "Sequestrants lower LDL but raise TG, which worsens the patient's main problem."),
      Q("chain", "A diabetic's eruptive xanthomas disappear after glucose control improves. Why?", ["Treating the diabetes lowers triglycerides, the cause of the xanthomas", "Glucose control raises LDL receptor numbers", "Insulin dissolves cholesterol in tendons", "The xanthomas were never lipid-related"], 0, "Eruptive xanthomas are due to ↑ TG and usually resolve when the underlying condition, like diabetes, is controlled.")
    ]),

    // ------------------------------------------------------------------
    D("lip-lipid-panel-math", "Reading the lipid panel: measured vs calculated", "A standard lipid panel measures total cholesterol, triglycerides, and HDL, then calculates VLDL (TG/5) and LDL (Friedewald: TC − VLDL − HDL); because VLDL is estimated from triglyceride, very high TG breaks the math.", [
      S("idea", "The idea", "<p>Most of the panel is <strong>measured</strong>: total cholesterol, triglycerides, and HDL. LDL usually is <strong>not</strong> — it is calculated.</p><p>Total cholesterol is the sum of cholesterol carried by every lipoprotein. If you subtract the cholesterol in HDL and the cholesterol in VLDL, what remains is LDL. VLDL cholesterol is estimated as <strong>TG ÷ 5</strong>.</p>" + Mn("Friedewald", "LDL = TC − (TG ÷ 5) − HDL. Works only if TG < 400.") + "<p>Example from the slides: TC 200, TG 150, HDL 50 → VLDL = 30 → LDL = 200 − 30 − 50 = <strong>120</strong>.</p>" + clar("TG ÷ 5 assumes VLDL carries triglyceride and cholesterol in a roughly fixed ratio. When TG is very high (chylomicrons, very TG-rich particles), that ratio no longer holds, so the estimate is wrong — which is why the slides say LDL can't be determined above TG 400.")),
      S("chain", "Cause → effect", chain([
        "Fast 9–12 hours → chylomicrons clear → TG reflects VLDL rather than the last meal.",
        "Measure TC, TG, HDL directly.",
        "If TG < 400: VLDL-C = TG/5.",
        "LDL-C = TC − VLDL-C − HDL-C.",
        "If TG > 400: VLDL-C and LDL-C can't be determined."
      ]) + Tbl(["Change (others fixed)", "Calculated LDL"], [
        ["↑ Total cholesterol", "↑"],
        ["↑ HDL", "↓"],
        ["↑ TG (still < 400)", "↓ (more subtracted as VLDL)"],
        ["TG > 400", "Can't be calculated"]
      ]) + HY("LDL on a standard panel is a subtraction, not a measurement — and it fails when TG > 400.")),
      S("bedside", "Why it matters clinically", "<p><strong>A non-fasting sample</strong> leaves chylomicrons in the blood, which raises TG and so distorts the calculated VLDL and LDL. That is why labs are drawn fasting, and an abnormal result without prior data should be confirmed with a second check.</p><p><strong>Statin decisions depend on LDL</strong> (for example, LDL ≥ 190 is a high-intensity statin group), so an invalid calculation matters.</p><p><strong>Interpretation:</strong> HDL is the one number where higher is better (protective > 60; at risk < 40). TG > 500 flags pancreatitis risk.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“LDL is measured directly on the standard panel.”</strong> It is calculated from TC, TG, and HDL.",
        "<strong>“VLDL = TG ÷ 5 works at any TG.”</strong> Above TG 400, VLDL and LDL can't be determined.",
        "<strong>Adding HDL instead of subtracting it.</strong> LDL = TC − VLDL − HDL; HDL cholesterol is part of TC and must be removed.",
        "<strong>“A high HDL is abnormal.”</strong> High HDL may be cardioprotective; low HDL is the risk."
      ]))
    ], [
      Q("chain", "TC 240, TG 200, HDL 40. What is the calculated LDL?", ["160", "200", "120", "180"], 0, "VLDL = 200/5 = 40; LDL = 240 − 40 − 40 = 160."),
      Q("chain", "Total cholesterol and triglycerides stay the same, but HDL rises by 10. Predict the calculated LDL.", ["It falls by 10", "It rises by 10", "It is unchanged", "It can't be calculated"], 0, "LDL = TC − VLDL − HDL; a larger HDL subtracts more, so calculated LDL falls."),
      Q("chain", "A patient's TG is 620. What happens to the Friedewald calculation?", ["VLDL and LDL can't be determined because TG > 400", "LDL is calculated as TC − 124 − HDL", "LDL equals total cholesterol", "Only HDL becomes invalid"], 0, "If TG > 400, VLDL-C and LDL-C are unable to be determined."),
      Q("idea", "Which values on a standard lipid panel are measured directly?", ["Total cholesterol, triglycerides, and HDL", "LDL, VLDL, and HDL", "Total cholesterol, LDL, and VLDL", "Only LDL and triglycerides"], 0, "TC, TG, and HDL are measured; VLDL and LDL are calculated."),
      Q("bedside", "A patient ate breakfast just before the lipid draw. Which value is most directly distorted?", ["Triglycerides, because chylomicrons have not cleared", "HDL, because it rises after meals", "Total cholesterol only", "None — fasting does not matter"], 0, "Fasting 9–12 hours allows chylomicrons to clear; a recent meal inflates TG and therefore the VLDL/LDL estimates."),
      Q("chain", "Why is VLDL cholesterol estimated from the triglyceride level?", ["VLDL is the main triglyceride-carrying particle in a fasting sample, so its cholesterol scales with TG", "VLDL contains no cholesterol", "VLDL is made from HDL", "Triglycerides are converted to cholesterol in the lab"], 0, "In a fasting sample, triglyceride is carried mainly in VLDL, so VLDL-C is approximated as TG/5 (when TG < 400)."),
      Q("traps", "A student calculates LDL as TC − VLDL + HDL. What is the error?", ["HDL must be subtracted, not added — it is part of total cholesterol", "VLDL should be added, not subtracted", "TG should be multiplied by 5", "There is no error"], 0, "Total cholesterol includes HDL and VLDL cholesterol, so both are subtracted to leave LDL.")
    ]),

    // ------------------------------------------------------------------
    D("lip-drug-site-effects", "Where a drug works predicts its side effects", "Lipid drugs cause side effects at the place they act: statins work in the liver (so check liver enzymes) and affect muscle, bile acid sequestrants stay in the gut (so they cause GI symptoms, trap other drugs and fat-soluble vitamins, and are the pregnancy choice), and fibrates and niacin are mainly HDL/TG drugs without proven mortality benefit.", [
      S("idea", "The idea", "<p>Once you know <em>where</em> each drug works, many side effects and monitoring rules stop being a random list.</p><ul><li><strong>Statins act in the liver.</strong> So liver enzymes (ALT/AST/Alk Phos) are checked before starting and monitored if concerns arise; other liver-affecting drugs (erythromycin, antifungals, immunosuppressants) complicate this. The most common complaint is muscle: myalgias, then myositis, rarely rhabdomyolysis.</li><li><strong>Bile acid sequestrants act inside the gut.</strong> They bind bile acids there — so GI effects (bloating, cramping, diarrhea or constipation), and they also bind other medications and block fat-soluble vitamin absorption. They are the drug of choice for dyslipidemia in pregnancy.</li><li><strong>Ezetimibe acts at the gut brush border.</strong> Side effects are rare alone; liver enzymes can rise when combined with a statin.</li><li><strong>PCSK9 inhibitors</strong> are injections — mild injection-site reactions.</li></ul>" + clar("bile acid sequestrants are not absorbed into the bloodstream; they stay in the gut, which is why they act there, interfere with absorption of other things in the gut, and are the safe choice when a pregnant patient needs lipid treatment.")),
      S("chain", "Cause → effect", chain([
        "Statin inhibits HMG CoA reductase in the liver → liver is the site of action → baseline liver enzymes; stop only if > 3× upper normal (conventional wisdom).",
        "Gemfibrozil + statin → ↑ statin muscle toxicity.",
        "Sequestrant binds bile acids in the intestine → also binds other drugs and fat-soluble vitamins → absorption problems; GI side effects.",
        "Sequestrant → ↓ LDL but ↑ TG → avoid when TG is the issue.",
        "Niacin → flushing, tachycardia, pruritus (worse with immediate release) → may be reduced with aspirin 81 mg.",
        "Niacin also worsens insulin resistance; statins carry a risk of hyperglycemia/new-onset DM."
      ]) + Tbl(["Drug", "Where it acts", "Side effect that follows"], [
        ["Statin", "Liver (synthesis)", "↑ Liver enzymes; myalgia → rhabdo"],
        ["Bile acid sequestrant", "Gut lumen", "GI upset; binds other drugs and fat-soluble vitamins; ↑ TG"],
        ["Ezetimibe", "Gut brush border", "Rare; ↑ LFTs with statin"],
        ["PCSK9 inhibitor", "Injected; liver LDL recycling", "Injection-site reactions"]
      ]) + HY("Liver-acting drug → watch the liver. Gut-acting drug → gut side effects and absorption interference.")),
      S("bedside", "Why it matters clinically", "<p><strong>Choosing by outcome evidence:</strong> statins decrease all-cause mortality; PCSK9 inhibitors decrease CV events and mortality; ezetimibe adds a modest reduction in major CV events when added to a statin after ACS (IMPROVE-IT) without a mortality reduction; sequestrants ↓ coronary events but no mortality benefit; fibrates and niacin show no improved event or mortality outcomes in general populations.</p><p><strong>Follow-up</strong> 4–12 weeks after starting or changing a statin: adherence, response (fasting lipids), adverse effects, ALT/AST. CK is not needed unless significantly symptomatic.</p><p><strong>Pregnancy:</strong> statins are generally discontinued; a bile acid sequestrant is the medication of choice.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Check CK routinely on every statin patient.”</strong> CK is only needed if significantly symptomatic.",
        "<strong>“Stop a statin at any rise in ALT.”</strong> Conventional wisdom: no need to stop until 3× the upper limit of normal.",
        "<strong>“Fibrates are a good LDL drug.”</strong> Fibrates are for a hypertriglyceridemia component (↓ TG, ↑ HDL) and lack general outcome benefit.",
        "<strong>Giving a sequestrant at the same time as other pills without thinking.</strong> It can bind other medications in the gut and reduce their absorption."
      ]))
    ], [
      Q("chain", "Why are liver enzymes checked before starting a statin?", ["Statins act in the liver and can raise liver enzymes", "Statins are excreted only by the kidney", "Statins bind bile acids in the gut", "Statins work by injection into the liver"], 0, "Because statins work in the liver, ALT/AST/Alk Phos are taken before initiating therapy and monitored if concerns arise."),
      Q("chain", "A patient on a bile acid sequestrant has a low vitamin D level. Which mechanism explains it?", ["The sequestrant acts in the gut and inhibits absorption of fat-soluble vitamins", "The sequestrant destroys vitamin D in the liver", "The sequestrant blocks HMG CoA reductase", "The sequestrant raises PCSK9"], 0, "Sequestrants act within the intestine and interfere with absorption of fat-soluble vitamins and other medications."),
      Q("bedside", "A pregnant patient needs lipid treatment. Why is a bile acid sequestrant chosen?", ["It works in the gut, and statins are generally discontinued in pregnancy", "It is the strongest LDL-lowering drug", "It raises HDL more than any other drug", "It lowers triglycerides the most"], 0, "Statins are generally discontinued in pregnancy; the sequestrant is the medication of choice for dyslipidemia in pregnancy."),
      Q("chain", "Gemfibrozil is added to a statin. Which adverse effect becomes more likely?", ["Statin-related muscle toxicity", "Severe hypoglycemia", "Corneal arcus", "Injection-site reactions"], 0, "Gemfibrozil has been shown to increase muscle toxicity caused by statins."),
      Q("bedside", "A patient stops niacin because of flushing. What can reduce this side effect?", ["Co-administering aspirin 81 mg", "Taking niacin with a bile acid sequestrant", "Switching to the immediate-release form", "Adding gemfibrozil"], 0, "Niacin flushing (worse with immediate release) may be reduced with ASA 81 co-administration."),
      Q("bedside", "A statin patient's ALT is 1.5× the upper limit of normal and he feels well. What does conventional wisdom suggest?", ["Continue — no need to stop until about 3× the upper limit of normal", "Stop the statin immediately", "Switch to gemfibrozil", "Check CK daily"], 0, "Conventional wisdom: statins do not need to be discontinued until liver enzymes reach 3× the high end of normal."),
      Q("traps", "A student says every statin patient needs routine CK monitoring. What is the guidance?", ["CK is only needed if the patient is significantly symptomatic", "CK must be checked weekly", "CK replaces the lipid panel at follow-up", "CK is checked only in pregnancy"], 0, "Follow-up includes lipids and ALT/AST; CK does not need to be assessed unless significantly symptomatic."),
      Q("bedside", "Which drug pair has outcome evidence for reducing mortality, not just lipid numbers?", ["Statins and PCSK9 inhibitors", "Fibrates and niacin", "Bile acid sequestrants and niacin", "Ezetimibe and fibrates"], 0, "Statins decrease all-cause mortality and PCSK9 inhibitors decrease CV events and mortality; fibrates, niacin, sequestrants, and ezetimibe lack a demonstrated mortality benefit.")
    ]),

    // ------------------------------------------------------------------
    D("lip-secondary-causes", "Secondary causes: fix the driver, not just the number", "Most dyslipidemia is secondary — diabetes, alcohol, hypothyroidism, obesity, cholestatic liver disease, kidney failure, smoking, and drugs push lipids up — so when lipids don't respond to treatment, look for the driver.", [
      S("idea", "The idea", "<p>Genetic dyslipidemias exist, but the lecture stresses that dyslipidemia is <strong>more commonly secondary</strong> to something else. If a faucet is running, mopping the floor (drugs) helps, but turning off the faucet (treating the cause) works better.</p><p>Several causes fit what you already know about lipid handling:</p><ul><li><strong>Diabetes, obesity, alcohol</strong> → overproduction of LDL/TC and TG.</li><li><strong>Cholestatic (obstructive) liver disease</strong> → the liver's main exit for cholesterol (bile) is blocked.</li><li><strong>Drugs:</strong> progestins, anabolic steroids, corticosteroids, protease inhibitors; illicit cocaine.</li></ul>" + clar("thyroid hormone helps keep LDL receptors on liver cells; in hypothyroidism there are fewer receptors, so LDL clearance falls and LDL rises. In cholestatic liver disease, cholesterol that would normally leave in bile backs up into the blood.")),
      S("chain", "Cause → effect", chain([
        "A secondary driver is present (DM, alcohol, obesity, hypothyroidism, cholestasis, CKD, smoking, drugs).",
        "It either ↑ lipoprotein production (DM, obesity, alcohol) or ↓ clearance (hypothyroidism, cholestasis — clarification).",
        "LDL and/or TG rise.",
        "Drug therapy alone gives a weaker-than-expected response while the driver persists.",
        "Identify and treat the driver (e.g., control diabetes, stop alcohol) → lipids improve."
      ]) + Tbl(["Secondary cause", "Main lipid push"], [
        ["Diabetes", "↑ LDL and ↑ TG (plus glycation)"],
        ["Alcohol / obesity", "↑ LDL/TC; alcohol also worsens ↑ TG"],
        ["Hypothyroidism", "↑ LDL (↓ clearance — clarification)"],
        ["Cholestatic liver disease", "↑ cholesterol (bile exit blocked — clarification)"],
        ["Estrogen", "Worsens hepatic VLDL overproduction (↑ TG)"]
      ]) + HY("Poor response to a statin → reinforce adherence and look for a secondary cause before (or while) escalating.")),
      S("bedside", "Why it matters clinically", "<p>The ACC/AHA follow-up slides say that if a statin isn't giving the response you want: <strong>reinforce adherence</strong> to lifestyle and drugs, <strong>evaluate for secondary causes</strong>, then increase intensity or add a non-statin. They also say to keep monitoring for new secondary causes at every follow-up.</p><p><strong>Eruptive xanthomas</strong> usually disappear when the underlying condition (e.g., diabetes) is controlled — a visible example of fixing the driver.</p><p>Many secondary causes (DM, obesity, smoking, alcohol, CKD) are also <strong>CAD risk factors</strong> or risk enhancers, so treating them lowers risk twice.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Most dyslipidemia is genetic.”</strong> The lecture says it is more commonly secondary to risk factors.",
        "<strong>“Not at goal → just raise the statin dose.”</strong> First reinforce adherence and evaluate for secondary causes.",
        "<strong>Forgetting medications.</strong> Progestins, anabolic steroids, corticosteroids, and protease inhibitors can all worsen lipids.",
        "<strong>“Hypothyroidism lowers cholesterol because metabolism is slow.”</strong> It is a cause of <em>high</em> LDL."
      ]))
    ], [
      Q("bedside", "A patient's LDL barely changes after 12 weeks on a moderate-intensity statin. What should come before simply escalating?", ["Reinforce adherence and evaluate for secondary causes", "Stop the statin and start niacin", "Repeat the panel without fasting", "Start a bile acid sequestrant in place of the statin"], 0, "The ACC/AHA approach: reinforce lifestyle and drug adherence, evaluate for secondary causes, then increase intensity or add a non-statin."),
      Q("chain", "A patient with new fatigue, weight gain, and cold intolerance has a rising LDL. Which secondary cause fits, and why?", ["Hypothyroidism — fewer LDL receptors means slower LDL clearance", "Hyperthyroidism — more LDL production", "Cholestasis — more bile acid recycling", "Alcohol — blocks LDL receptors directly"], 0, "Hypothyroidism is a listed secondary cause; clarification (standard physiology): low thyroid hormone reduces LDL receptor activity, so LDL rises."),
      Q("chain", "Why would obstructive (cholestatic) liver disease raise cholesterol?", ["Bile is the liver's main exit for cholesterol, and it is blocked", "Cholestasis increases intestinal NPC1L1 activity", "Cholestasis activates LPL", "Cholestasis increases LDL receptors"], 0, "Cholesterol is cleared by conversion to bile acids or liver excretion; blocking bile outflow traps it (clarification of the listed cause)."),
      Q("idea", "According to the lecture, which is more common?", ["Dyslipidemia secondary to risk factors such as DM, alcohol, and obesity", "Familial hypercholesterolemia", "Lipoprotein lipase deficiency", "Familial defective Apo B"], 0, "Genetic causes exist, but dyslipidemia is more commonly secondary to risk factors."),
      Q("bedside", "Which medication is a listed secondary cause of dyslipidemia?", ["Corticosteroids", "Ezetimibe", "Aspirin 81 mg", "Lisinopril"], 0, "Listed drug causes: progestins, anabolic steroids, corticosteroids, protease inhibitors; illicit cocaine."),
      Q("chain", "A woman with hepatic VLDL overproduction starts estrogen. Predict her triglycerides.", ["They rise — estrogen exacerbates VLDL overproduction", "They fall — estrogen activates LPL", "No change — estrogen affects only LDL", "They fall — estrogen blocks NPC1L1"], 0, "Secondary factors such as DM, alcohol, and estrogen can exacerbate familial hepatic VLDL overproduction."),
      Q("traps", "A student says hypothyroidism lowers cholesterol because everything slows down. What is correct?", ["Hypothyroidism is a secondary cause of high cholesterol", "Hypothyroidism has no effect on lipids", "Hypothyroidism lowers only triglycerides", "Hypothyroidism raises HDL only"], 0, "Hypothyroidism is on the lecture's list of secondary causes of hyperlipidemia.")
    ])
  ]);
}());
