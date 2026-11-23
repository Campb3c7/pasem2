/* Hallmarks: CAD Part I (Foundations, Stager). Source: source-material/cardio-part-3/text/cad-part-1.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("cad-part-1", "CAD Part I: Foundations", [

    C("hm-fatty-streak", "Fatty streak (early atherosclerosis)", "The first lesion: lipid-laden foam cells in the intima.",
      "LDL enters the intima + monocytes become foam cells = fatty streak, the start of every plaque.", [
        ["cause", "LDL retained in the intima, monocytes recruited and turned into foam cells", "Atherosclerosis is lipid buildup plus inflammation inside the arterial wall."],
        ["timing", "Plaque takes 10-15 years to fully develop", "The slide says atheromas take 10-15 years, so prevention starts early."],
        ["who", "Forms at branch points and sharp curves where flow changes speed and direction", "Disturbed flow at branches and curves injures the endothelium first."],
        ["cause", "Endothelial dysfunction: less nitric oxide and prostacyclin", "Losing NO and PGI2 removes the artery's vasodilation and anti-platelet protection."]
      ]),

    C("hm-vulnerable-plaque", "Vulnerable (young) plaque", "A new plaque with a thin cap that ruptures suddenly and causes ACS.",
      "Thin cap + big lipid core + lots of inflammation = ruptures without warning = ACS.", [
        ["test", "Thin fibrous cap, large lipid core, dense inflammatory infiltrate", "Vulnerable plaques have thin caps and active inflammation under them."],
        ["story", "No warning angina, then sudden MI, often in a younger patient (Arthur, 34)", "Young plaques barely narrow the lumen, so there is no angina until they rupture."],
        ["danger", "Ruptures, exposes thrombogenic material and forms a clot: UA, NSTEMI or STEMI", "Rupture triggers platelets and the coagulation cascade, blocking the artery."],
        ["exam", "Often not flow-limiting before it ruptures", "A small plaque can fissure suddenly even with no significant stenosis."]
      ], { x: ["hm-stable-plaque"] }),

    C("hm-stable-plaque", "Stable (old) plaque", "An old plaque with a thick collagen cap that narrows the lumen.",
      "Thick cap + narrow lumen = exertional angina or claudication, not sudden rupture.", [
        ["test", "Dense fibrous cap, little lipid and little inflammation", "As plaques age the cap gets more collagen and inflammation settles."],
        ["sx", "Exertional angina or claudication that goes away with rest", "A fixed narrowing limits flow only when demand rises."],
        ["story", "90-year-old farmer (Zeke) whose chest tightness slows his chores", "Old plaques cause stable, predictable symptoms with exertion."],
        ["danger", "Less likely to rupture but causes stenosis that limits flow", "Thick caps resist rupture, so the problem is narrowing, not clotting."]
      ], { x: ["hm-vulnerable-plaque"] }),

    C("hm-remodeling", "Positive vs negative remodeling", "How the artery wall responds as a plaque grows.",
      "Positive = wall bulges out (no angina at first). Negative = lumen shrinks (angina).", [
        ["test", "Positive remodeling: the wall bulges outward at the plaque", "The artery grows outward, so the lumen stays open at first."],
        ["sx", "Positive remodeling is the most common and rarely causes angina early", "Because the lumen is preserved, flow is not limited early on."],
        ["test", "Negative remodeling: no wall dilation, plaque narrows the lumen", "Without outward growth the plaque eats into the lumen and limits flow."]
      ]),

    C("hm-stunning", "Myocardial stunning", "Viable muscle that stays weak for a while after blood flow is restored.",
      "Brief ischemia, flow restored, but contraction still weak for hours to days = stunned.", [
        ["story", "Transient ischemia followed by reperfusion", "Stunning happens after a short ischemic episode once blood flow returns."],
        ["test", "Flow is normal again but contractility is temporarily impaired", "The muscle is reperfused yet still not squeezing well."],
        ["timing", "Recovers on its own over hours to days", "The muscle is viable, so function comes back with time."],
        ["buzz", "Viable, no irreversible injury", "Stunned muscle is alive; nothing has died."]
      ], { x: ["hm-hibernation"] }),

    C("hm-hibernation", "Myocardial hibernation", "Chronically underperfused muscle that turns its own contraction down to survive.",
      "Chronic or repeated low flow + weak but alive muscle that improves after revascularization = hibernating.", [
        ["cause", "Chronic or repeated reductions in coronary blood flow", "Hibernation is the adaptation to long-term low oxygen supply."],
        ["test", "Muscle downregulates its contraction as an adaptation", "Turning down contraction saves oxygen so the cells survive."],
        ["tx", "Function can improve after revascularization (stent or CABG)", "Restoring flow lets the viable muscle contract again."],
        ["dx", "Dobutamine stress echo or PET viability scan shows it is still viable", "Viability testing tells you whether revascularizing that wall is worth it."]
      ], { x: ["hm-stunning"] }),

    C("hm-mi-necrosis", "Myocardial infarction (necrosis)", "Prolonged severe ischemia that kills myocardium for good.",
      "Prolonged severe ischemia = irreversible necrosis = permanent loss of muscle.", [
        ["cause", "Prolonged, severe ischemia", "Short ischemia stuns; long ischemia kills cells."],
        ["test", "Irreversible cardiomyocyte injury and necrosis", "Infarcted cells are dead, unlike stunned or hibernating muscle."],
        ["danger", "Permanent loss of functioning myocardium in that region", "Dead muscle does not recover, even after flow is restored."]
      ]),

    C("hm-ischemia-cascade", "Myocardial ischemia (supply < demand)", "Oxygen supply falls short of demand, usually from flow-limiting CAD.",
      "Demand rises + narrowed artery can't dilate = ischemia, lactic acid, wall motion abnormality, then EKG changes.", [
        ["cause", "A narrowed artery cannot dilate enough when demand rises", "Normal arteries dilate with exercise; flow-limiting plaque can't."],
        ["timing", "Coronary flow happens mostly in diastole, which shortens as heart rate rises", "Tachycardia cuts perfusion time while raising demand."],
        ["labs", "Anaerobic metabolism makes lactic acid and local acidosis", "Without oxygen the cells switch to anaerobic respiration."],
        ["test", "Regional wall motion abnormality on echo", "Acidosis impairs relaxation and contraction in that wall."]
      ]),

    C("hm-other-ischemia", "Ischemia without plaque (spasm, emboli, congenital)", "Other ways to starve the myocardium besides atherosclerosis.",
      "Vasospasm (Prinzmetal, cocaine/meth), septic emboli from IE, or rare congenital lesions.", [
        ["cause", "Vasospasm from twitchy arterioles or sympathomimetic drugs", "Intense vasoconstriction can block flow with no fixed plaque."],
        ["cause", "Septic vegetation emboli from infective endocarditis", "A vegetation can break off and plug a coronary artery."],
        ["buzz", "Prinzmetal angina", "Vasospasm is the mechanism behind Prinzmetal (variant) angina."]
      ]),

    C("hm-cad-women", "CAD symptoms in women", "Women's ischemia often does not look like classic chest pain.",
      "Unusual fatigue, sleep trouble, SOB, indigestion, anxiety for weeks before an MI = think ischemia in a woman.", [
        ["sx", "Unusual fatigue, sleep disturbance, SOB, indigestion and anxiety", "These were the most reported symptoms in 515 women with MI."],
        ["timing", "78% had at least one symptom for more than a month before the MI", "Women often have warning symptoms that get missed."],
        ["buzz", "Only about 30% reported chest discomfort", "Most women with MI did not describe classic chest pain."]
      ]),

    C("hm-typical-angina-pain", "Classic ischemic chest pain", "How cardiac ischemia classically feels.",
      "Substernal, tight, dull, radiates to the left shoulder/arm, not pleuritic, not tender = cardiac.", [
        ["sx", "Substernal, tight, dull, achy pain radiating to the left shoulder or arm", "This is the classic ischemic pain pattern on the slide."],
        ["exam", "Does not worsen with deep breathing or pressing on the sternum", "Pleuritic or reproducible pain points away from the heart."],
        ["sx", "Comes with exertional dyspnea, nausea, lightheadedness and diaphoresis", "These associated symptoms travel with ischemia."]
      ])
  ], {
    plaque: ["hm-fatty-streak", "hm-vulnerable-plaque", "hm-stable-plaque", "hm-remodeling"],
    muscle: ["hm-stunning", "hm-hibernation", "hm-mi-necrosis", "hm-ischemia-cascade", "hm-other-ischemia"],
    sx: ["hm-cad-women", "hm-typical-angina-pain"]
  });
}());
