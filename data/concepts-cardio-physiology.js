/*
  Concepts: Cardiovascular Physiology (same shape as data/diseases-endocrine.js).

  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with a prediction-style question bank.
  Sources: source-material/cardio-part-1/text/cardio-physiology.md (and the
  H&P lecture for the bedside links). Anything the slides only imply is
  labeled "Clarification (standard physiology)" in the html.

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

  window.CARDIO_CONCEPTS_PHYSIOLOGY = L("cardio-physiology", "Cardiovascular Physiology", [

    // ------------------------------------------------------------------
    D("two-circuits", "Two circuits, two pressure levels", "The right heart drives a short, low-pressure loop through the lungs; the left heart drives a long, high-pressure loop through the body, and its wall is thicker because its job is harder.", [
      S("idea", "The idea", "<p>Picture two pumps sitting side by side in one muscle. The <strong>right heart</strong> sends blood only as far as the lungs and back. The <strong>left heart</strong> has to push blood out to every tissue in the body.</p><p>The lung loop (pulmonary circulation) is the smaller of the two and runs at <strong>low pressure</strong>. That is deliberate: low pressure lets blood move <em>slowly</em> through the lung capillaries, which gives more time for gas exchange. The body loop (systemic circulation) is larger and runs at <strong>higher pressure</strong>, because it has to reach far away tissues.</p><p>Blood in the heart and lungs is called <strong>central</strong> circulation; blood in the peripheral vessels and lymphatics is <strong>peripheral</strong> circulation.</p>" + clar("the two loops are connected in series: what the right heart sends through the lungs is what the left heart receives next. So the two sides must pump the same amount over time.")),
      S("chain", "Cause → effect", chain([
        "Right atrium receives blood returning from the body (and the heart's own veins) → right ventricle.",
        "Right ventricle pumps into the low-pressure pulmonary circulation.",
        "Low pressure → slow transit through lung capillaries → more time for gas exchange.",
        "Left atrium receives oxygenated blood from the pulmonary circuit → left ventricle.",
        "Left ventricle must generate high pressure to push blood through the larger systemic circuit.",
        "Higher workload → the myocardium is thickest in the left ventricle for more contraction power."
      ]) + Tbl(["", "Pulmonary (right heart)", "Systemic (left heart)"], [
        ["Size", "Smaller circuit", "Larger circuit"],
        ["Pressure", "<strong>Low</strong>", "<strong>High</strong>"],
        ["Why", "Slow flow improves gas exchange", "Must reach all tissues"],
        ["Afterload source", "Pulmonary blood pressure", "Systemic blood pressure"]
      ]) + HY("Low pressure in the lungs is a feature, not a weakness: it slows blood down so gas exchange can finish.")),
      S("bedside", "Why it matters clinically", "<p>The pressure difference explains why the <strong>left ventricle</strong> is the thick-walled chamber and why its impulse (the PMI at the apex) is the one you palpate on exam.</p><p>It also sets up later concepts: <strong>systemic</strong> blood pressure is the afterload of the left ventricle, and <strong>pulmonary</strong> pressure is the afterload of the right ventricle. A problem with the right ventricle pumping into the lungs backs pressure up into the right atrium, which you see in the neck veins (JVP).</p>"),
      S("traps", "Common traps", traps([
        "<strong>“The pulmonary circuit has low pressure because it is weaker.”</strong> The low pressure is the design: slow flow through the lungs improves gas exchange.",
        "<strong>Mixing up which atrium receives what.</strong> Right atrium = blood from the body; left atrium = blood from the lungs.",
        "<strong>“The pulmonary system is part of the peripheral circulation.”</strong> Heart + pulmonary circulation = central circulation; peripheral = peripheral vessels and lymphatics."
      ]))
    ], [
      Q("idea", "Why is the pulmonary circulation kept at low pressure?", ["Low pressure lets blood move slowly through the lungs, improving gas exchange", "Low pressure lets the right ventricle rest between beats", "Low pressure keeps blood from reaching the alveoli", "Low pressure is needed because the lungs have no capillaries"], 0, "The pulmonary circuit is the smaller, lower-pressure loop; slower transit through the lung gives more time for gas exchange."),
      Q("chain", "Which chamber has the thickest myocardium, and why?", ["Left ventricle — it must generate high pressure to push blood through the systemic circuit", "Right ventricle — it must push blood through the lungs", "Left atrium — it receives blood from the lungs", "Right atrium — it receives blood from the whole body"], 0, "The systemic circuit is larger and runs at higher pressure, so the left ventricle needs the most contraction power."),
      Q("chain", "The right ventricle's output must, over time, match the left ventricle's output. Why?", ["The two circuits are in series: blood leaving the right heart through the lungs is what returns to the left heart", "Both ventricles share one valve", "The left ventricle pumps blood directly into the right ventricle", "The pulmonary circuit stores all excess blood"], 0, "The pulmonary and systemic circuits are connected one after the other, so what the right side sends through the lungs is what the left side receives next."),
      Q("chain", "Which ventricle's afterload comes mainly from pulmonary blood pressure?", ["Right ventricle", "Left ventricle", "Both equally", "Neither — afterload comes only from the aortic valve"], 0, "Systemic pressure is the main afterload of the left ventricle; pulmonary pressure is the main afterload of the right ventricle."),
      Q("idea", "Blood in the heart and pulmonary vessels belongs to which circulation?", ["Central circulation", "Peripheral circulation", "Systemic circulation", "Lymphatic circulation"], 0, "Heart + pulmonary circulation = central circulation; blood outside it (peripheral vessels, lymphatics) is peripheral."),
      Q("chain", "Oxygenated blood returning from the lungs enters which chamber first?", ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"], 0, "The left atrium receives blood from the pulmonary circuit and passes it to the left ventricle, which pumps to the body.")
    ]),

    // ------------------------------------------------------------------
    D("pressure-flow-resistance", "Pressure, flow, and resistance", "Blood flows because of a pressure difference between two ends of a vessel, and resistance (friction and viscosity) opposes that flow: Flow = ΔP / Resistance.", [
      S("idea", "The idea", "<p>Think of a garden hose. Water flows only when the pressure at the tap is higher than at the nozzle. Squeeze the hose (more resistance) and less water comes out unless you turn the tap up.</p><p>Blood works the same way. <strong>Flow</strong> (a volume per time) is driven by the <strong>difference in pressure</strong> between the two ends of a vessel. <strong>Resistance</strong> is the opposition to flow, caused by friction between blood and the vessel wall; thicker (more <strong>viscous</strong>) blood adds resistance. The resistance of all vessels together is <strong>systemic (peripheral) vascular resistance</strong>.</p>" + Mn("Flow = ΔP / R", "Flow goes up with a bigger pressure difference and down with more resistance.") + clar("vessel radius is the strongest lever on resistance; a small narrowing raises resistance a lot. This is why the arterioles — mostly smooth muscle — act as the body's resistance vessels.")),
      S("chain", "Cause → effect", chain([
        "The heart creates pressure at the start of the system.",
        "Pressure difference (ΔP) between two ends of a vessel drives flow forward.",
        "Friction against vessel walls and blood viscosity create resistance.",
        "Arteriole smooth muscle constricts or relaxes → resistance changes.",
        "If resistance rises and the heart keeps flow the same, pressure upstream must rise."
      ]) + Tbl(["Change", "Effect on flow (same ΔP)", "Pressure needed to keep flow"], [
        ["↑ Resistance (vasoconstriction, ↑ viscosity)", "↓ Flow", "↑ Pressure"],
        ["↓ Resistance (vasodilation)", "↑ Flow", "↓ Pressure"],
        ["↑ Pressure difference", "↑ Flow", "—"]
      ]) + HY("Flow = ΔP / R. Constricting arterioles raises resistance, which raises blood pressure.")),
      S("bedside", "Why it matters clinically", "<p>The lecture's humoral control slides are this equation in action: <strong>angiotensin II</strong> constricts arterioles → ↑ peripheral vascular resistance → ↑ blood pressure. <strong>Calcium channel blockers</strong> relax vascular smooth muscle → vasodilation → ↓ resistance.</p><p>Arterioles are the <strong>resistance vessels</strong> that regulate blood pressure, so most blood-pressure control happens there.</p>" + clar("blood pressure ≈ cardiac output × systemic vascular resistance, so a pressure rise means output, resistance, or both went up.")),
      S("traps", "Common traps", traps([
        "<strong>“Pressure alone moves blood.”</strong> It is the pressure <em>difference</em> between two points that drives flow; equal pressure at both ends means no flow.",
        "<strong>“Viscosity isn't part of resistance.”</strong> The slides include blood viscosity as part of resistance — thicker blood flows less easily.",
        "<strong>“Capillaries set the resistance.”</strong> Arterioles, with their smooth muscle, are the resistance vessels that regulate blood pressure."
      ]))
    ], [
      Q("chain", "Arterioles constrict while the pressure difference stays the same. What happens to flow through them?", ["Flow decreases", "Flow increases", "Flow is unchanged", "Flow reverses direction"], 0, "Flow = ΔP / R. Constriction raises resistance, so with the same pressure difference, flow falls."),
      Q("chain", "Blood viscosity increases. What happens to resistance?", ["Resistance increases", "Resistance decreases", "Resistance is unchanged because viscosity is unrelated", "Resistance becomes zero"], 0, "Resistance comes from friction, and the slides count viscosity as part of resistance; thicker blood means more friction."),
      Q("bedside", "Angiotensin II acts on arterioles. Which chain explains its effect on blood pressure?", ["Arteriole constriction → ↑ peripheral vascular resistance → ↑ blood pressure", "Arteriole dilation → ↓ resistance → ↑ blood pressure", "Venous dilation → ↑ venous storage → ↓ blood pressure", "Capillary closure → ↓ resistance → ↓ blood pressure"], 0, "Angiotensin II is a powerful arteriole vasoconstrictor that increases peripheral vascular resistance and therefore blood pressure."),
      Q("idea", "If pressure is equal at both ends of a vessel, what is the flow?", ["No flow — there is no pressure difference to drive it", "Maximal flow", "Turbulent flow", "Flow depends only on viscosity"], 0, "Flow is driven by the change in pressure between the two ends; no difference means no driving force."),
      Q("chain", "Which vessels act as the main resistance vessels that regulate blood pressure?", ["Arterioles", "Capillaries", "Large veins", "Venules"], 0, "Arterioles are mostly smooth muscle and serve as the resistance vessels of the circulation."),
      Q("bedside", "A calcium channel blocker lowers blood pressure. Which step explains it?", ["Less calcium entry into vascular smooth muscle → vasodilation → ↓ resistance", "More calcium entry → vasoconstriction → ↓ resistance", "Increased blood viscosity → ↓ flow", "Closure of venous valves → ↓ venous return"], 0, "Vascular smooth muscle relies on calcium entry to constrict; blocking it causes vasodilation, lowering resistance and pressure."),
      Q("chain", "Resistance rises and the body needs to keep the same flow to tissues. What must happen to the driving pressure?", ["It must rise", "It must fall", "It must stay the same", "It must reverse"], 0, "Flow = ΔP / R. With higher R, ΔP must rise to keep flow constant.")
    ]),

    // ------------------------------------------------------------------
    D("laminar-turbulent-flow", "Laminar vs turbulent flow", "Smooth layered flow is quiet and efficient; anything that disrupts it (a diseased valve, plaque, thick blood) makes flow turbulent, which needs more pressure and makes noise — the murmur.", [
      S("idea", "The idea", "<p>A calm river flows in smooth layers: that is <strong>laminar</strong> flow. It moves forward easily and needs little pressure.</p><p>Throw rocks in the river and the water churns in every direction: that is <strong>turbulent</strong> flow. Energy is wasted going sideways, so it takes <strong>more pressure</strong> to push the same blood forward. Turbulence also makes vibration — the sound you hear as a <strong>murmur</strong>.</p><p>The heart and vessels are built to stay laminar: the endocardium and the tunica intima are smooth linings that reduce friction and therefore turbulence.</p>"),
      S("chain", "Cause → effect", chain([
        "A smooth lining (endocardium, tunica intima) keeps flow laminar.",
        "A diseased valve, atherosclerotic plaque, or higher viscosity disrupts the smooth path.",
        "Blood moves in all directions → turbulent flow.",
        "Turbulent flow needs greater pressure to move blood forward.",
        "The turbulence vibrates surrounding tissue → you hear it as a sound (murmur)."
      ]) + Tbl(["", "Laminar", "Turbulent"], [
        ["Pattern", "Smooth, streamlined layers", "Movement in all directions"],
        ["Pressure needed", "Less", "<strong>More</strong>"],
        ["Sound", "Silent", "<strong>Audible</strong> (murmur)"],
        ["Causes", "Smooth lining", "Diseased valve, plaque, ↑ viscosity"]
      ]) + HY("A murmur is the sound of turbulent blood flow, most often through a diseased heart valve.")),
      S("bedside", "Why it matters clinically", "<p><strong>Murmurs:</strong> the lecture states that heart murmurs result from turbulent flow through a diseased valve. The H&P lecture then teaches how to listen for them and augment them.</p><p><strong>Bruits:</strong> the H&P exam includes auscultating the carotid, aortic, renal, iliac, and femoral arteries for bruits with the bell.</p>" + clar("a bruit is the same physics in an artery — plaque narrows and roughens the lumen, flow becomes turbulent, and the turbulence is audible.") + "<p><strong>Plaque raises pressure:</strong> the lecture notes atherosclerotic plaque creates turbulence and so raises the pressure needed to move blood forward.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Turbulent flow is faster, so it is more efficient.”</strong> Turbulence wastes energy in all directions; it needs <em>more</em> pressure for the same forward flow.",
        "<strong>“Murmurs come from valves slamming shut.”</strong> Valve closure makes S1 and S2. A murmur is the sound of turbulent flow.",
        "<strong>“Viscosity only affects resistance, not turbulence.”</strong> The slides note higher viscosity also increases turbulence."
      ]))
    ], [
      Q("idea", "What produces the sound of a heart murmur?", ["Turbulent blood flow through a diseased valve", "Laminar flow through a normal valve", "The AV valves closing", "The atria contracting against an open valve"], 0, "The lecture states murmurs result from turbulent flow through a diseased valve; the turbulence is the sound."),
      Q("chain", "Atherosclerotic plaque roughens an artery's lining. What happens to the pressure needed to move blood forward?", ["It increases, because flow becomes turbulent", "It decreases, because the lumen is smoother", "It is unchanged", "It drops to zero"], 0, "Plaque disrupts the smooth lining → turbulent flow → more pressure required to move blood forward."),
      Q("chain", "Blood becomes more viscous. What happens to turbulence?", ["Turbulence increases", "Turbulence decreases", "Flow becomes perfectly laminar", "Viscosity has no effect on flow pattern"], 0, "Higher viscosity (more friction between molecules) creates increased turbulence, per the slides."),
      Q("bedside", "You hear a whooshing sound over the carotid artery with the bell. Which mechanism best explains it?", ["Turbulent flow past a narrowed, roughened artery", "Laminar flow through a healthy artery", "Closure of the aortic valve", "Rapid ventricular filling in early diastole"], 0, "A bruit is turbulence in an artery — the same physics as a murmur, but in a vessel narrowed by plaque."),
      Q("chain", "Why does the endocardium's smoothness matter for flow?", ["It reduces friction and therefore turbulence", "It increases friction to slow blood in the heart", "It generates the pacemaker impulse", "It stores blood between beats"], 0, "The endocardium is continuous with the vessel endothelium and reduces friction and hence turbulence."),
      Q("idea", "Which flow pattern requires less pressure to move blood forward?", ["Laminar flow", "Turbulent flow", "Both require equal pressure", "Neither — pressure does not affect flow"], 0, "Laminar flow is smooth and streamlined and requires less pressure; turbulent flow requires more."),
      Q("traps", "A student says the murmur and S2 are the same event. Why is that wrong?", ["S2 is valve closure; a murmur is turbulent flow through a diseased valve", "S2 is turbulent flow; a murmur is valve closure", "Both are caused by atrial contraction", "Both are caused by the rapid filling phase"], 0, "S1 and S2 are valve-closure sounds; a murmur is the sound of turbulence.")
    ]),

    // ------------------------------------------------------------------
    D("compliance-arteries-veins", "Compliance: arteries hold pressure, veins hold volume", "Compliance is how much volume a vessel takes per rise in pressure; stiff, elastic arteries stretch and recoil to keep pressure up between beats, while thin, stretchy veins store large volumes at low pressure.", [
      S("idea", "The idea", "<p><strong>Compliance</strong> = change in volume ÷ change in pressure. A very compliant vessel is like a soft balloon: you can add a lot of volume and the pressure barely rises. A low-compliance vessel is like a stiff tire: a little extra volume raises the pressure a lot.</p><p><strong>Arteries</strong> are thick-walled with many elastic fibers. In systole, only about <strong>1/3</strong> of the stroke volume leaves the arteries; the rest stays and stretches them, raising pressure. When the ventricle relaxes, the stretched walls <strong>recoil</strong> and keep pushing blood into the arterioles during diastole — so arterial pressure never falls to zero before the next beat.</p><p><strong>Veins</strong> are thin-walled, distensible, and collapsible. They can enlarge and <strong>store large quantities of blood</strong> at low pressure. That is why the venous side is the low-pressure system.</p>" + Mn("Compliance = ΔV / ΔP", "High compliance = stretches easily (veins). Lower compliance + elastic recoil = keeps pressure (arteries).")),
      S("chain", "Cause → effect", chain([
        "Ventricle ejects a stroke volume into the arteries.",
        "Only ~1/3 leaves the arteries during systole; the rest distends the elastic walls → pressure rises.",
        "Ventricle relaxes (diastole).",
        "Stretched arterial walls recoil → blood keeps flowing into arterioles.",
        "Arterial volume and pressure fall slowly, but the next beat arrives first → pressure never reaches 0.",
        "Along the arterial tree the pulse pressure wave gets smaller, until at the capillaries just enough remains to keep them open."
      ]) + Tbl(["", "Arteries", "Veins"], [
        ["Pressure", "<strong>High</strong>-pressure system", "<strong>Low</strong>-pressure system"],
        ["Wall", "Thick, many elastic fibers", "Thin, distensible, collapsible"],
        ["Main job of the wall", "Stretch in systole, recoil in diastole", "Enlarge to store large volumes"],
        ["Extra features", "Arterioles = resistance vessels", "One-way valves in limbs; muscle pump"]
      ]) + HY("Arteries store pressure (elastic recoil keeps flow going in diastole); veins store volume.")),
      S("bedside", "Why it matters clinically", "<p><strong>The pulse you feel</strong> is the arterial pulse pressure wave — the wave created as each ejection stretches the arteries. It fades as it travels outward; by the capillaries little is left.</p><p><strong>Stiff ventricles and heart sounds:</strong> the same compliance idea applies to the ventricle. The lecture says a non-compliant or over-distended ventricle can produce an <strong>S3</strong>, and the H&P lecture says <strong>S4</strong> is blood forced into a <strong>stiff or hypertrophic</strong> ventricle.</p><p><strong>Veins and edema/return:</strong> veins rely on limb valves and the <strong>muscle pump</strong> to move stored blood back to the heart (see preload).</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Higher compliance means stiffer.”</strong> It is the opposite: the higher the compliance, the more easily the structure stretches.",
        "<strong>“All of the stroke volume runs off during systole.”</strong> Only about 1/3 does; the rest is stored in the stretched arteries and released by recoil.",
        "<strong>“Diastolic pressure is zero because the heart isn't pumping.”</strong> Arterial recoil keeps pushing blood, and the next beat arrives before pressure can fall to zero.",
        "<strong>“Veins are passive tubes.”</strong> Veins still have a muscle layer that contracts and relaxes based on tissue demand."
      ]))
    ], [
      Q("idea", "Which vessel has the higher compliance?", ["A vein — it stores large volumes with little pressure rise", "An artery — it holds high pressure", "An arteriole — it is mostly smooth muscle", "A capillary — it has three tunicae"], 0, "Veins are thin-walled and distensible, so they accept large volumes at low pressure: high compliance."),
      Q("chain", "The ventricle stops ejecting at the end of systole. Why does blood keep flowing into the arterioles?", ["Stretched arterial walls recoil and push the stored blood forward", "The veins pump blood backward into the arteries", "The atria contract into the aorta", "The semilunar valves stay open during diastole"], 0, "Most of the stroke volume stays in the arteries during systole and distends them; elastic recoil drives it forward in diastole."),
      Q("chain", "Arteries lose their elastic fibers and stretch less. Predict the effect of each ejection on arterial pressure.", ["A larger rise in pressure for the same stroke volume", "A smaller rise in pressure for the same stroke volume", "No change in pressure", "Pressure falls during systole"], 0, "Compliance = ΔV/ΔP. Lower compliance means the same volume produces a bigger pressure change. (Clarification: standard consequence of the compliance equation.)"),
      Q("idea", "About how much of the stroke volume leaves the arteries during systole?", ["About 1/3", "All of it", "About 9/10", "None of it"], 0, "Only about 1/3 leaves; the remainder distends the arteries and raises the pressure."),
      Q("chain", "Why doesn't arterial pressure fall to 0 between heartbeats?", ["Recoil keeps pressure up and the next contraction arrives before it can fall to 0", "The aortic valve stays closed throughout the cycle", "The veins push blood back into the arteries", "Capillaries hold pressure constant"], 0, "As blood leaves, arterial volume and pressure fall slowly, but the next ventricular contraction occurs first."),
      Q("bedside", "The pulse you feel at the radial artery is best described as what?", ["The pulse pressure wave generated by intermittent ejection from the left ventricle", "Blood from the radial vein flowing back to the heart", "Contraction of the radial artery's own smooth muscle in rhythm", "The sound of turbulence in the radial artery"], 0, "The arterial pulse is the pressure wave from intermittent left-ventricular ejection traveling along the arteries."),
      Q("chain", "As the pulse pressure wave moves from the aorta toward the capillaries, what happens to it?", ["It gets smaller until just enough is left to keep capillaries open", "It gets larger with each branch", "It stays the same size all the way", "It reverses direction at the arterioles"], 0, "The wave dampens along the arterial tree; at the capillaries there is not much left."),
      Q("bedside", "An S4 is described as blood forced into a stiff, hypertrophic ventricle. In compliance terms, that ventricle has…", ["Low compliance — its pressure rises steeply as it fills", "High compliance — it fills with no pressure rise", "Normal compliance but a leaky valve", "No compliance change; S4 is a valve sound"], 0, "A stiff ventricle stretches poorly (low ΔV per ΔP), so the atrial push into it is forceful and audible.")
    ]),

    // ------------------------------------------------------------------
    D("critical-closing-pressure", "Wall tension and critical closing pressure", "A vessel stays open only while the pressure inside beats the wall tension trying to collapse it; when pressure falls below that critical closing pressure, small vessels close and tissue perfusion drops — as in shock.", [
      S("idea", "The idea", "<p>Every vessel wall has <strong>tension</strong> — a force in the wall that opposes the pressure pushing outward from inside. Think of a soft drinking straw: if you suck the pressure inside low enough, the walls pinch shut.</p><p>The pressure inside the vessel <strong>must stay higher</strong> than the wall tension, or the vessel collapses. The pressure at which that collapse happens is the <strong>critical closing pressure</strong>.</p>"),
      S("chain", "Cause → effect", chain([
        "Blood pressure inside a vessel pushes outward on the wall.",
        "Wall tension pushes back, opposing the distending pressure.",
        "As long as inside pressure > wall tension, the vessel stays open.",
        "In circulatory shock, pressure in small vessels drops.",
        "Pressure reaches the critical closing pressure → small vessels collapse.",
        "Collapsed vessels → less perfusion of tissues."
      ]) + Tbl(["Inside pressure vs wall tension", "Vessel", "Tissue perfusion"], [
        ["Pressure higher", "Stays open", "Maintained"],
        ["Pressure falls to critical closing pressure", "<strong>Collapses</strong>", "<strong>↓ Perfusion</strong>"]
      ]) + HY("Shock: small-vessel pressure falls to the critical closing pressure → vessels collapse → tissue perfusion falls.")),
      S("bedside", "Why it matters clinically", "<p>This is the lecture's explanation of why tissues lose perfusion in <strong>circulatory shock</strong>: it is not just that pressure is low, but that small vessels actually <strong>close</strong> once pressure falls far enough.</p><p>It also connects to the end of the arterial tree: the pulse pressure wave is nearly gone by the capillaries, leaving <em>just enough</em> to keep them open. There is not much margin.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Wall tension pushes blood forward.”</strong> Wall tension opposes the distending pressure inside the vessel; it is the force that would collapse it.",
        "<strong>“Vessels only close when they are blocked by a clot.”</strong> A vessel can close simply because inside pressure falls below critical closing pressure.",
        "<strong>“Large arteries collapse first in shock.”</strong> The lecture describes pressure dropping in <em>small</em> vessels to critical closing pressure."
      ]))
    ], [
      Q("idea", "What must be true for a vessel to stay open?", ["Pressure inside must be higher than the wall tension", "Wall tension must be higher than the pressure inside", "Pressure inside must be zero", "The vessel must contain a valve"], 0, "Pressure inside must exceed wall tension, or the vessel collapses at its critical closing pressure."),
      Q("chain", "A patient goes into circulatory shock. Which chain explains reduced tissue perfusion?", ["Small-vessel pressure falls to critical closing pressure → vessels collapse → ↓ perfusion", "Small-vessel pressure rises → vessels burst → ↓ perfusion", "Wall tension falls to zero → vessels dilate → ↑ perfusion", "Venous valves fail → arterial pressure rises → ↓ perfusion"], 0, "In shock, pressure in small vessels drops to the critical closing pressure and tissue perfusion lessens."),
      Q("idea", "Wall tension is best defined as…", ["The force in the vessel wall that opposes the distending pressure inside", "The pressure difference that drives flow", "The volume stored per mmHg of pressure", "The friction between blood and the vessel wall"], 0, "Wall tension is the wall force opposing the pressure inside; the other choices describe flow, compliance, and resistance."),
      Q("chain", "Pressure inside a small vessel rises well above its critical closing pressure. What happens?", ["The vessel stays open and perfusion continues", "The vessel collapses", "Flow becomes turbulent and stops", "The vessel converts to a vein"], 0, "As long as inside pressure exceeds wall tension, the vessel remains open."),
      Q("bedside", "Why is there little margin at the capillary end of the system?", ["The pulse pressure wave is nearly gone there — just enough remains to keep capillaries open", "Capillaries have the thickest walls", "Capillaries are the resistance vessels", "Capillary pressure is higher than aortic pressure"], 0, "The wave dampens along the tree; at the capillaries only enough pressure remains to keep them open, so a drop in pressure can close them."),
      Q("traps", "A student says, 'In shock, vessels only stop perfusing tissue if a clot blocks them.' What is the better explanation from this lecture?", ["Pressure falls to critical closing pressure and the vessels collapse on their own", "Shock always causes clotting in every capillary", "Shock raises wall tension until vessels burst", "Shock reverses flow in the arteries"], 0, "The lecture's mechanism is pressure dropping to the critical closing pressure, causing small-vessel collapse and reduced perfusion.")
    ]),

    // ------------------------------------------------------------------
    D("pacemaker-hierarchy", "Pacemaker hierarchy and escape rhythms", "The fastest pacemaker sets the heart rate: normally the SA node at 60–100/min; if it fails, the AV node takes over at 40–60/min, and if that fails, Purkinje fibers at 15–40/min.", [
      S("idea", "The idea", "<p>Several parts of the conduction system can fire on their own, but at different built-in speeds. The <strong>SA node</strong> fires fastest (60–100/min), so its impulse reaches everyone else before they can fire — it sets the pace.</p><p>If the SA node stops, the next fastest site, the <strong>AV node</strong>, takes over at its own slower rate (40–60/min). If the AV node also fails, the <strong>Purkinje fibers</strong> can fire, but only at 15–40/min. Each backup is slower than the one above it.</p>" + clar("pacemaker cells drift toward threshold on their own; whichever site reaches threshold first fires and resets the others, which is why the fastest one leads.")),
      S("chain", "Cause → effect", chain([
        "SA node depolarizes (60–100/min) → impulse spreads through the internodal pathways → both atria depolarize and contract.",
        "Impulse reaches the AV junction, where conduction is very slow → delay.",
        "Delay lets the atria finish depolarizing and contracting before the ventricles start.",
        "Impulse passes the Bundle of His → right and left bundle branches → Purkinje fibers.",
        "Ventricles depolarize and contract from the apex toward the base.",
        "If a higher site fails → the next site down fires at its slower intrinsic rate."
      ]) + Tbl(["Site in charge", "Intrinsic rate", "When"], [
        ["SA node", "<strong>60–100/min</strong>", "Normal"],
        ["AV node", "<strong>40–60/min</strong>", "SA node does not fire"],
        ["Purkinje fibers", "<strong>15–40/min</strong>", "AV node does not fire"]
      ]) + Mn("Each step down is slower", "SA 60–100 → AV 40–60 → Purkinje 15–40.") + HY("The fastest pacemaker wins; backups are progressively slower.")),
      S("bedside", "Why it matters clinically", "<p><strong>Heart rate = SA node discharge rate</strong> when the system is normal. A slow rate in the 40s–50s suggests the AV node may be pacing; a very slow rate (15–40) suggests a ventricular (Purkinje) site.</p><p>The lecture notes that disruption anywhere along the conduction system can be seen on ECG tracings.</p><p><strong>Autonomic control:</strong> the vagus nerve (parasympathetic) slows the heart rate; sympathetic input speeds it and increases contractility.</p><p>The AV delay is why the atria can top off the ventricles before ventricular contraction — the atrial contribution that also produces the A-wave and, in a stiff ventricle, an S4.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“The AV node's delay is a defect.”</strong> The slow conduction is purposeful: it lets the atria finish contracting before the ventricles fire.",
        "<strong>“If the SA node fails, the heart stops.”</strong> The AV node can fire on its own, just more slowly (40–60/min).",
        "<strong>“Ventricles contract base to apex.”</strong> Ventricular contraction progresses from the apex toward the base, squeezing blood up toward the outflow valves.",
        "<strong>“The vagus nerve constricts blood vessels.”</strong> Parasympathetic (vagal) input slows the heart rate and has little to no effect on the vasculature."
      ]))
    ], [
      Q("chain", "Why does the SA node normally set the heart rate?", ["It depolarizes faster than any other myocardial cells", "It is the only tissue that can depolarize", "It is the largest structure in the heart", "It is located in the left ventricle"], 0, "The SA node fires at 60–100/min, faster than the other sites, so its impulse drives the rest."),
      Q("chain", "The SA node stops firing but the AV node is healthy. Predict the heart rate.", ["40–60 per minute", "60–100 per minute", "15–40 per minute", "100–150 per minute"], 0, "When the SA node does not fire, the AV node can take over at its internal rate of 40–60/min."),
      Q("chain", "Both the SA node and the AV node fail. Which rate would you expect?", ["15–40 per minute from the Purkinje fibers", "40–60 per minute from the atria", "60–100 per minute from the Bundle of His", "No rhythm at all"], 0, "Purkinje fibers can fire on their own, but only at 15–40/min."),
      Q("chain", "What is the purpose of the slow conduction through the AV junction?", ["It delays the ventricles so the atria can finish depolarizing and contracting", "It speeds the impulse to the Purkinje fibers", "It prevents the atria from contracting at all", "It lets the ventricles contract before the atria"], 0, "Slow conduction through the junctional fibers delays ventricular depolarization so atrial contraction completes."),
      Q("idea", "In which direction does ventricular contraction progress?", ["From the apex toward the base", "From the base toward the apex", "From the right ventricle to the left only", "From the Purkinje fibers to the SA node"], 0, "Depolarization reaches the Purkinje fibers in the ventricular walls and contraction progresses from apex to base."),
      Q("bedside", "Vagal (parasympathetic) stimulation increases. What happens to the heart rate?", ["It slows", "It speeds up", "It is unchanged, but vessels constrict", "It speeds up and contractility rises"], 0, "The vagus nerve produces slowing of the heart rate and has little to no effect on the vasculature."),
      Q("chain", "Which sequence describes normal impulse travel?", ["SA node → internodal pathways → AV node → Bundle of His → bundle branches → Purkinje fibers", "AV node → SA node → Purkinje fibers → bundle branches", "Purkinje fibers → bundle branches → AV node → SA node", "SA node → Bundle of His → internodal pathways → AV node"], 0, "The impulse spreads through the atria to the AV node, then the His bundle, bundle branches, and Purkinje fibers."),
      Q("idea", "What structures let cardiac muscle cells depolarize quickly and contract as a unit?", ["Intercalated disks", "Tunica media", "Precapillary sphincters", "Venous valves"], 0, "Intercalated disks join individual cardiac cells so depolarization spreads faster and the cells contract as a unit.")
    ]),

    // ------------------------------------------------------------------
    D("action-potential-ions", "The cardiac action potential: which ion, which phase", "Each phase of the myocardial action potential is one ion moving: Na+ rushes in (phase 0), Na+ channels shut (1), Ca2+ trickles in and holds a plateau (2), K+ flows out to repolarize (3), and the Na+/K+ pump resets the cell (4).", [
      S("idea", "The idea", "<p>A myocardial cell sits at about <strong>−90 mV</strong> at rest. Three kinds of channels change that charge: <strong>fast sodium</strong> channels, <strong>slow calcium-sodium</strong> channels, and <strong>potassium</strong> channels.</p><p>Follow the charge: positive ions flowing <em>in</em> make the inside more positive (depolarize); positive ions flowing <em>out</em> make it negative again (repolarize).</p><p>The special feature of heart muscle is the <strong>plateau</strong> (phase 2): calcium keeps entering and holds the cell depolarized 3 to 15 times longer than skeletal muscle, which <strong>extends contraction</strong>.</p>"),
      S("chain", "Cause → effect", chain([
        "<strong>Phase 0</strong> — fast Na+ channels open → rapid Na+ inflow → membrane goes from −90 mV to +20 mV (rapid depolarization).",
        "<strong>Phase 1</strong> — at the peak, rapid Na+ channels inactivate → early repolarization.",
        "<strong>Phase 2</strong> — slow Ca2+ channels open → Ca2+ inflow holds the plateau → action potential (and contraction) lasts longer.",
        "<strong>Phase 3</strong> — Ca2+/Na+ channels close, K+ channels open → K+ leaves the cell → rapid repolarization.",
        "<strong>Phase 4</strong> — Na+/K+ pump returns Na+ outside and K+ inside → resting membrane; then the cycle repeats."
      ]) + Tbl(["Phase", "Name", "Main ion movement"], [
        ["0", "Rapid depolarization", "Na+ <strong>in</strong> (fast channels)"],
        ["1", "Early repolarization", "Fast Na+ channels inactivate"],
        ["2", "Plateau", "Ca2+ <strong>in</strong> (slow channels)"],
        ["3", "Rapid repolarization", "K+ <strong>out</strong>"],
        ["4", "Resting membrane", "Na+/K+ pump restores gradients"]
      ]) + Mn("0-1-2-3-4: Na in, Na off, Ca in, K out, pump reset", "Five phases, starting at phase 0.") + HY("The calcium plateau (phase 2) is what makes cardiac contraction long; potassium leaving (phase 3) ends it.")),
      S("bedside", "Why it matters clinically", "<p><strong>Calcium links electricity to squeeze:</strong> contractility depends on calcium and ATP for actin–myosin interaction, so the calcium plateau is directly tied to contraction strength and length.</p><p><strong>Refractory periods</strong> are defined by these phases (absolute = phases 0, 1, 2 and part of 3), which is why the heart cannot be re-stimulated mid-contraction.</p><p><strong>Contrast with vascular smooth muscle:</strong> vessel smooth muscle has very few fast sodium channels and little stored calcium, so it relies on <em>extracellular</em> calcium entry — which is why calcium channel blockers dilate vessels.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Phase 1 is the start.”</strong> Numbering starts at <strong>phase 0</strong> (rapid depolarization).",
        "<strong>“Potassium causes the upstroke.”</strong> Sodium in causes the upstroke (phase 0); potassium out causes repolarization (phase 3).",
        "<strong>“The plateau is a resting phase.”</strong> The plateau (phase 2) is calcium entry keeping the cell depolarized; rest is phase 4.",
        "<strong>“The Na+/K+ pump depolarizes the cell.”</strong> The pump works in phase 4 to restore the resting gradients."
      ]))
    ], [
      Q("chain", "Fast sodium channels open. Which phase begins and what happens to the membrane potential?", ["Phase 0 — it rises rapidly from about −90 mV toward +20 mV", "Phase 3 — it falls from +20 mV to −90 mV", "Phase 2 — it stays flat", "Phase 4 — the pump resets it"], 0, "Phase 0 is rapid depolarization from Na+ rushing in through fast channels."),
      Q("chain", "Why does a cardiac action potential last 3–15 times longer than a skeletal muscle one?", ["Slow calcium channels open in phase 2 and hold a plateau", "Potassium channels never open", "Fast sodium channels stay open throughout", "The Na+/K+ pump runs backward"], 0, "Calcium entry through slow channels creates the plateau, extending the action potential and contraction."),
      Q("chain", "Potassium channels open and calcium channels close. What happens?", ["K+ leaves the cell and the membrane rapidly repolarizes (phase 3)", "K+ enters the cell and the membrane depolarizes (phase 0)", "The plateau begins (phase 2)", "The Na+/K+ pump stops"], 0, "In phase 3, K+ moves to the extracellular space, reversing the polarity of the membrane."),
      Q("idea", "What returns sodium outside and potassium inside during the resting phase?", ["The Na+/K+ pump (phase 4)", "Fast sodium channels (phase 0)", "Slow calcium channels (phase 2)", "Potassium channels (phase 3)"], 0, "In phase 4 the sodium/potassium pump restores the gradients before the cycle starts again."),
      Q("chain", "What happens at phase 1, right at the peak of the action potential?", ["The rapid sodium channels inactivate", "Calcium channels close for good", "Potassium floods into the cell", "The cell returns to −90 mV"], 0, "Phase 1 is at the peak, when rapid Na+ channels inactivate, beginning early repolarization."),
      Q("chain", "If the calcium plateau were shortened, what would you predict about contraction?", ["Contraction would be shorter", "Contraction would be longer", "Contraction would be unchanged", "The heart would contract continuously"], 0, "The plateau extends the action potential and thereby extends contraction; shortening it shortens contraction."),
      Q("bedside", "Vascular smooth muscle relies on which source of calcium for vasoconstriction?", ["Extracellular calcium entering through calcium channels", "Large internal sarcoplasmic reticulum stores", "Fast sodium channels", "Potassium channels"], 0, "Vascular smooth muscle has a less developed sarcoplasmic reticulum and few fast Na+ channels, so it depends on extracellular calcium."),
      Q("idea", "What are the three major positive charge carriers in myocardial cells?", ["Sodium, potassium, and calcium", "Sodium, chloride, and bicarbonate", "Potassium, magnesium, and hydrogen", "Calcium, phosphate, and chloride"], 0, "Na+, K+, and Ca2+ change membrane polarity depending on which channels open.")
    ]),

    // ------------------------------------------------------------------
    D("refractory-periods", "Refractory periods and the supernormal period", "After firing, a cardiac cell cannot fire again for almost the whole contraction (absolute refractory), then needs a stronger-than-normal stimulus (relative refractory), and briefly can be triggered by a weak stimulus (supernormal) — the window where arrhythmias can start.", [
      S("idea", "The idea", "<p>Think of a toilet after flushing: it cannot flush again until the tank refills (absolute refractory). Partway refilled, a hard push on the handle works (relative refractory).</p><p>In the heart, the <strong>absolute refractory period</strong> covers phases 0, 1, 2, and part of 3. It is <strong>almost as long as the contraction itself</strong>, so a second contraction cannot start until the first is over. That protects the heart's pumping rhythm.</p><p>Next comes the <strong>relative refractory period</strong>: the membrane is just below threshold, and a <strong>greater-than-normal</strong> stimulus can fire it. Then a very short <strong>supernormal excitatory period</strong> where even a <strong>weak</strong> stimulus can evoke a response — and this is where <strong>arrhythmias can develop</strong>.</p>"),
      S("chain", "Cause → effect", chain([
        "Cell fires (phase 0) → enters the absolute refractory period (phases 0, 1, 2, part of 3).",
        "No stimulus of any size can trigger another action potential → no new contraction until the first finishes.",
        "Repolarization brings the membrane to threshold in phase 3 → relative refractory period begins.",
        "Only a stronger-than-normal stimulus fires the cell; ends just before the end of phase 3.",
        "Supernormal period: a weak stimulus can evoke a response.",
        "A stray weak stimulus landing here → arrhythmia can develop."
      ]) + Tbl(["Period", "Phases", "Stimulus needed to fire"], [
        ["Absolute refractory (ARP)", "0, 1, 2, part of 3", "<strong>None works</strong>"],
        ["Relative refractory (RRP)", "Late phase 3 (from threshold to just before end of 3)", "<strong>Greater than normal</strong>"],
        ["Supernormal (SN)", "Very short, after RRP", "<strong>Weak</strong> stimulus can work"]
      ]) + HY("Absolute = nothing fires it; relative = strong stimulus fires it; supernormal = even a weak stimulus can — the arrhythmia window.")),
      S("bedside", "Why it matters clinically", "<p>The long absolute refractory period is why the heart beats in separate, complete contractions instead of one sustained squeeze: each contraction must finish before another can start, so the ventricle has time to relax and fill.</p><p>The <strong>supernormal period</strong> is the lecture's named site where arrhythmias can develop — a weak, badly timed stimulus can set off an extra beat. Disruptions like this show on ECG tracings (EKG lecture).</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Supernormal means the cell is extra strong.”</strong> It means the cell is extra <em>excitable</em> — a weak stimulus can evoke a response.",
        "<strong>“The relative refractory period cannot be stimulated.”</strong> It can — but only by a greater-than-normal stimulus. Nothing works in the <em>absolute</em> period.",
        "<strong>“The absolute refractory period is only phase 0.”</strong> It spans phases 0, 1, 2, and part of 3 — almost the length of the contraction."
      ]))
    ], [
      Q("chain", "A normal-strength stimulus arrives during phase 2. What happens?", ["Nothing — the cell is in the absolute refractory period", "A new action potential fires immediately", "The cell enters the supernormal period", "Only a weak stimulus would have worked"], 0, "Phases 0, 1, 2, and part of 3 are the absolute refractory period; no stimulus can trigger another action potential."),
      Q("chain", "Why can't the heart sustain one long, continuous contraction like a tetanic skeletal muscle?", ["The absolute refractory period lasts almost as long as the contraction, blocking a new one until the first ends", "Cardiac cells have no calcium channels", "The SA node only fires once per minute", "The supernormal period prevents all stimuli"], 0, "Because the absolute refractory period is nearly as long as contraction, another contraction cannot start until the first is over."),
      Q("chain", "A stimulus arrives late in phase 3, after the membrane has crossed back to threshold. What does it take to fire the cell?", ["A greater-than-normal stimulus (relative refractory period)", "No stimulus can fire it (absolute refractory period)", "Only a weak stimulus (supernormal period)", "Any stimulus, because the cell is at rest"], 0, "The relative refractory period begins when phase 3 reaches threshold; the cell can re-depolarize only to a stronger-than-normal stimulus."),
      Q("bedside", "During which period can a weak stimulus evoke a response and potentially set off an arrhythmia?", ["Supernormal excitatory period", "Absolute refractory period", "Relative refractory period", "Phase 0"], 0, "The supernormal period is a very short time when a weak stimulus can evoke a response; arrhythmias can develop here."),
      Q("idea", "Which phases make up the absolute refractory period?", ["Phases 0, 1, 2, and part of 3", "Phase 4 only", "Phases 3 and 4", "Phase 0 only"], 0, "The absolute refractory period includes phases 0, 1, 2, and part of phase 3."),
      Q("traps", "A classmate says the supernormal period is when the heart contracts most forcefully. What's the correction?", ["Supernormal refers to excitability — a weak stimulus can trigger a response", "Supernormal is when no stimulus can trigger a response", "Supernormal is the calcium plateau", "Supernormal is the Frank-Starling effect"], 0, "Supernormal describes heightened excitability, not contraction force."),
      Q("chain", "Rank the stimulus strength needed to fire the cell, from impossible to easiest.", ["Absolute (none) → relative (greater than normal) → supernormal (weak)", "Supernormal → relative → absolute", "Relative → absolute → supernormal", "Absolute → supernormal → relative"], 0, "Excitability returns in sequence: nothing works in ARP, a strong stimulus in RRP, and even a weak stimulus in SN.")
    ]),

    // ------------------------------------------------------------------
    D("valves-and-heart-sounds", "Cardiac cycle: pressure gradients move the valves (S1 and S2)", "Valves are passive doors: each opens when the pressure behind it is higher and shuts when the pressure ahead is higher; AV valves closing makes S1 and semilunar valves closing makes S2.", [
      S("idea", "The idea", "<p>Heart valves do not decide anything — they are one-way doors pushed by pressure. Whichever side has the higher pressure wins.</p><p><strong>Systole</strong> = the ventricles contract and pump blood out. <strong>Diastole</strong> = the ventricles relax and fill. Each has two parts:</p><ul><li><strong>Isovolumetric contraction</strong> — AV valves have just shut (S1); semilunar valves are still shut; pressure climbs with no volume change.</li><li><strong>Ejection</strong> — ventricular pressure exceeds aorta/pulmonary trunk → semilunar valves open; ends when great-vessel pressure exceeds ventricular pressure → semilunar valves shut (S2).</li><li><strong>Isovolumetric relaxation</strong> — all valves shut; ventricles relax; pressure falls.</li><li><strong>Rapid filling</strong> — ventricular pressure drops below atrial → AV valves open → ventricles fill.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Ventricle starts contracting → ventricular pressure exceeds atrial pressure → <strong>AV valves close (S1)</strong>.",
        "All valves closed → isovolumetric contraction → pressure rises.",
        "Ventricular pressure exceeds aortic/pulmonary pressure → semilunar valves open → ejection.",
        "Great-vessel pressure becomes higher than ventricular pressure → <strong>semilunar valves close (S2)</strong>.",
        "All valves closed → isovolumetric relaxation → ventricular pressure falls.",
        "Ventricular pressure falls below atrial pressure → AV valves open → rapid filling."
      ]) + Tbl(["", "AV valves (mitral, tricuspid)", "Semilunar valves (aortic, pulmonic)"], [
        ["Systole", "Closed — prevent backflow into atria", "Open — blood ejected"],
        ["Diastole", "Open — ventricles fill", "Closed — prevent backflow from vessels"],
        ["Closure sound", "<strong>S1</strong> (start of systole)", "<strong>S2</strong> (end of systole)"]
      ]) + Mn("S1 starts systole, S2 starts diastole", "S1 = AV valves shut as squeezing begins; S2 = semilunar valves shut as relaxing begins.") + HY("A valve opens when the pressure behind it is higher and closes when the pressure ahead is higher.")),
      S("bedside", "Why it matters clinically", "<p><strong>Timing S1 vs S2 at the bedside (H&P):</strong> palpate the carotid while listening. S1 falls just <em>before</em> the carotid upstroke (AV valves close, then ejection starts); S2 follows the upstroke (ejection ends, semilunar valves close).</p><p><strong>S2 splitting:</strong> S2 has two parts, aortic (A2) and pulmonic (P2). They are usually single in expiration and may separate on inspiration — the physiological split.</p>" + clar("inspiration lowers intrathoracic and right atrial pressure, so more blood returns to the right heart; the right ventricle ejects a little longer, so P2 closes slightly after A2.")),
      S("traps", "Common traps", traps([
        "<strong>“S1 is the semilunar valves.”</strong> S1 = AV (mitral and tricuspid) closure; S2 = aortic and pulmonic closure.",
        "<strong>“Isovolumetric means no pressure change.”</strong> Volume is constant because all valves are closed, but pressure changes a lot (rises in contraction, falls in relaxation).",
        "<strong>“The semilunar valves open as soon as contraction starts.”</strong> They open only once ventricular pressure exceeds aortic/pulmonary pressure — after isovolumetric contraction.",
        "<strong>“The AV valves open as soon as S2 happens.”</strong> First comes isovolumetric relaxation; AV valves open only when ventricular pressure falls below atrial pressure."
      ]))
    ], [
      Q("chain", "Ventricular pressure rises above atrial pressure at the start of systole. What happens?", ["AV valves close, producing S1", "Semilunar valves close, producing S2", "AV valves open and filling begins", "Semilunar valves open immediately"], 0, "When ventricular pressure exceeds atrial pressure, the AV valves shut — the first heart sound."),
      Q("chain", "What must happen for the aortic valve to open?", ["Left ventricular pressure must exceed aortic pressure", "Aortic pressure must exceed left ventricular pressure", "The mitral valve must open", "The atria must contract"], 0, "Ejection begins once ventricular pressure exceeds the pressure in the aorta and pulmonary trunk."),
      Q("chain", "At the end of ejection, pressure in the aorta becomes higher than in the ventricle. What follows?", ["Semilunar valves close (S2) and isovolumetric relaxation begins", "AV valves close (S1) and isovolumetric contraction begins", "Rapid filling begins immediately", "The aortic valve opens wider"], 0, "When great-vessel pressure exceeds ventricular pressure, the semilunar valves close — S2 — then the ventricles relax with all valves shut."),
      Q("idea", "During isovolumetric contraction, which valves are open?", ["None — both AV and semilunar valves are closed", "Only the AV valves", "Only the semilunar valves", "All four valves"], 0, "It begins after AV closure (S1) and before semilunar opening, so ventricular volume is constant while pressure rises."),
      Q("chain", "When do the AV valves open in diastole?", ["When ventricular pressure falls below atrial pressure", "As soon as S2 occurs", "When aortic pressure falls below ventricular pressure", "When the atria contract"], 0, "After isovolumetric relaxation, ventricular pressure drops below atrial pressure, the AV valves open, and rapid filling begins."),
      Q("bedside", "You are palpating the carotid while listening. Which sound falls just before the carotid upstroke?", ["S1 — AV closure happens just before ejection begins", "S2 — semilunar closure happens before ejection", "S3 — rapid filling happens before ejection", "A murmur — turbulence precedes all pulses"], 0, "S1 marks the start of systole; ejection (and the carotid upstroke) follows. S2 comes after the upstroke."),
      Q("bedside", "Why may S2 split during inspiration?", ["Inspiration lowers right atrial pressure, increasing return to the right heart, so P2 closes slightly later than A2", "Inspiration raises right atrial pressure, so A2 closes later than P2", "Inspiration closes the AV valves early", "Inspiration makes flow turbulent"], 0, "Right atrial pressure falls with inspiration; more right-sided filling lengthens right-ventricular ejection, delaying P2 (clarification: standard physiology)."),
      Q("traps", "Which pair of valves produces S2?", ["Aortic and pulmonic", "Mitral and tricuspid", "Mitral and aortic", "Tricuspid and pulmonic"], 0, "S2 is closure of the semilunar valves (A2 and P2); S1 is mitral and tricuspid closure.")
    ]),

    // ------------------------------------------------------------------
    D("filling-gallops", "Diastolic filling and the extra sounds S3 and S4", "Ventricles fill in two pushes — a passive rush when the AV valves open and a final atrial kick — and each can become audible: S3 when early rapid filling stops abruptly, S4 when the atrium forces blood into a stiff ventricle.", [
      S("idea", "The idea", "<p>Diastole is not just “waiting.” The ventricle fills in two stages:</p><ul><li><strong>Rapid filling</strong> right after the AV valves open — blood pours in passively.</li><li><strong>Atrial contraction</strong> in the last third of diastole — the atria push in the last bit they can.</li></ul><p>Normally both are silent. An <strong>S3</strong> happens near the end of rapid filling when inflow stops abruptly into an <strong>over-distended or non-compliant</strong> ventricle — the vibration is audible. An <strong>S4</strong> happens during atrial contraction when blood is forced into a <strong>stiff or hypertrophic</strong> ventricle and the rush is turbulent.</p>"),
      S("chain", "Cause → effect", chain([
        "S2 → isovolumetric relaxation → AV valves open.",
        "Rapid filling: blood rushes in from the atria.",
        "If the ventricle is over-distended or non-compliant, inflow stops abruptly → vibration → <strong>S3</strong> (early diastole, shortly after S2).",
        "Late diastole: atria contract to push the last blood in (the A-wave).",
        "If the ventricle is stiff/hypertrophic, that push meets resistance → turbulent rush → <strong>S4</strong> (just before S1)."
      ]) + Tbl(["", "S3 (ventricular gallop)", "S4 (atrial gallop)"], [
        ["Timing", "Early diastole, shortly after S2", "End of diastole, just before S1"],
        ["Phase", "End of rapid filling", "Atrial contraction"],
        ["Mechanism", "Abrupt stop of inflow into an over-distended or non-compliant ventricle; rapid early filling in hyperdynamic states", "Blood forced into a stiff or hypertrophic ventricle"],
        ["Listen", "Bell, apex, left lateral decubitus", "Bell, apex"]
      ]) + Mn("S3 = Slosh-ing in, S4 = a Stiff wall", "S3 comes from the early rush; S4 from the atrium pushing against a stiff ventricle.") + HY("S3 is about early rapid filling; S4 is about the atrial kick into a stiff ventricle.")),
      S("bedside", "Why it matters clinically", "<p>The H&P lecture lists S4 in left ventricular hypertrophy (hypertension, aortic stenosis, hypertrophic cardiomyopathy), acute myocardial ischemia, and hyperkinetic states; S4 is often palpable at the apex.</p><p>S3 is heard in hyperdynamic states, likely from rapid early diastolic filling. <strong>Maneuvers that increase venous return accentuate S3; maneuvers that decrease venous return soften it</strong> — a direct preload prediction.</p><p>Both are low-pitched, so use the <strong>bell</strong>.</p>"),
      S("traps", "Common traps", traps([
        "<strong>Swapping the timing.</strong> S3 is <em>after</em> S2 (early diastole); S4 is <em>before</em> S1 (late diastole).",
        "<strong>“S4 can happen without atrial contraction.”</strong> S4 is produced during atrial contraction — no atrial kick, no S4. (Clarification: standard physiology.)",
        "<strong>“Gallops are valve sounds.”</strong> S1 and S2 are valve closures; S3 and S4 are filling sounds.",
        "<strong>“Use the diaphragm for S3/S4.”</strong> They are low-pitched — the bell is best."
      ]))
    ], [
      Q("chain", "A patient's ventricle is over-distended. Which sound may appear at the end of the rapid filling phase?", ["S3", "S4", "S1", "S2"], 0, "An S3 occurs at the end of rapid filling due to abrupt cessation of inflow into an over-distended or non-compliant ventricle."),
      Q("chain", "A patient has long-standing hypertension causing left ventricular hypertrophy. Which extra sound would you predict, and when?", ["S4, just before S1, from the atrium pushing into a stiff ventricle", "S3, just after S2, from abrupt stop of rapid filling", "S2 split during expiration", "S1 louder from valve stiffness"], 0, "LVH makes the ventricle stiff; the atrial kick into it creates S4 at the end of diastole."),
      Q("bedside", "Which maneuver effect would you expect on an S3?", ["Increasing venous return makes it louder", "Increasing venous return makes it softer", "Venous return has no effect", "Only the diaphragm can detect a change"], 0, "S3 comes from rapid early filling; more venous return means more filling, accentuating it."),
      Q("chain", "Which event must happen for an S4 to be produced?", ["Atrial contraction at the end of diastole", "Closure of the semilunar valves", "Isovolumetric contraction", "Opening of the aortic valve"], 0, "S4 is heard in the last third of diastole when the atria contract and force blood into the ventricle."),
      Q("idea", "Why are S3 and S4 best heard with the bell?", ["They are low-pitched sounds", "They are high-pitched sounds", "They only occur in the carotid", "The diaphragm blocks diastolic sounds"], 0, "The bell detects low-pitched sounds such as S3, S4, and the murmur of mitral stenosis."),
      Q("chain", "Venous return decreases (for example, the patient stands). Predict the effect on an S3.", ["It softens", "It becomes louder", "It turns into an S4", "It moves into systole"], 0, "Less venous return means less early diastolic filling, so the S3 softens."),
      Q("traps", "An extra sound is heard immediately before S1. Which is it most likely?", ["S4", "S3", "A split S2", "An ejection sound from the aortic valve opening"], 0, "S4 is at the end of diastole, immediately before S1; S3 is early diastole, shortly after S2."),
      Q("chain", "Which of these ventricles is most likely to produce an S4?", ["A stiff, hypertrophic ventricle", "A thin, highly compliant ventricle", "A ventricle with no atrial input", "A ventricle during isovolumetric contraction"], 0, "S4 is produced by blood being forced into a stiff or hypertrophic ventricle during atrial contraction.")
    ]),

    // ------------------------------------------------------------------
    D("atrial-waves-ra-pressure", "Atrial pressure waves and right atrial pressure (JVP)", "There are no valves between the great veins and the atria, so right atrial pressure — and its a, c, and v waves — shows up directly in the jugular veins; it falls when the right ventricle pumps well and with inspiration, and rises when the right side can't move blood forward.", [
      S("idea", "The idea", "<p>Between the great veins and the atria there is <strong>no valve</strong>. Pressure is low, so blood flows into the atria during both systole and diastole. Because nothing separates them, whatever happens in the right atrium is transmitted straight up into the internal jugular vein. That makes the neck a window onto <strong>right atrial pressure</strong> (central venous pressure, normally about 0 mmHg at the atrium).</p><p>The atrial pressure tracing has three bumps:</p><ul><li><strong>C-wave</strong> — start of systole: AV valves close and <em>bulge</em> into the atria → brief pressure rise.</li><li><strong>V-wave</strong> — late systole: AV valves still shut while veins keep filling the atria → pressure builds.</li><li><strong>A-wave</strong> — end of diastole: AV valves open and the atria contract to push the last blood in.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Right atrial pressure depends on how well the right ventricle pumps blood out to the lungs AND on blood flowing in unimpeded.",
        "Strong right-ventricular pumping → atrial pressure drops → filling increases.",
        "Weak forward pumping → blood backs up → right atrial pressure rises.",
        "No valve between the great veins and the atria → the pressure is transmitted to the internal jugular vein.",
        "You see the pulsations and measure the height (JVP)."
      ]) + Tbl(["Change", "Right atrial pressure / JVP"], [
        ["Right ventricle pumps strongly", "<strong>↓</strong>"],
        ["Right ventricle can't pump forward", "<strong>↑</strong>"],
        ["Inspiration (↓ intrathoracic pressure)", "<strong>↓</strong>"],
        ["Coughing or forced exhalation (↑ intrathoracic pressure)", "<strong>↑</strong>"]
      ]) + Mn("A-C-V in order of the cycle starting late diastole", "A = Atrial contraction; C = AV valves Close and bulge; V = Venous filling while valves are shut.") + HY("The JVP is right atrial pressure seen through a valveless connection; it rises when the right heart can't move blood forward.")),
      S("bedside", "Why it matters clinically", "<p>The H&P lecture says JVP reflects right atrial pressure, which equals central venous pressure and right-ventricular end-diastolic pressure. It is best estimated from the <strong>right internal jugular vein</strong>, which has the most direct channel into the right atrium. Normal is <strong>6 to 8 cm</strong> (vertical height above the sternal angle + 5 cm).</p><p>Breathing changes it, as this lecture predicts: inspiration lowers right atrial pressure; coughing or forced exhalation raises it.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“The C-wave is atrial contraction.”</strong> The A-wave is atrial contraction; the C-wave is the AV valves closing and bulging back into the atria.",
        "<strong>“A strong heart raises atrial pressure.”</strong> When the heart pumps strongly, atrial pressure <em>drops</em>, which increases filling.",
        "<strong>“Inspiration raises JVP.”</strong> Inspiration lowers intrathoracic and right atrial pressure; coughing or forced exhalation raises it.",
        "<strong>“The jugular pulse is from the carotid.”</strong> The JVP is a venous pressure; the H&P lecture teaches distinguishing it from the carotid pulse."
      ]))
    ], [
      Q("chain", "The right ventricle can no longer pump blood forward into the lungs effectively. Predict the JVP.", ["It rises, because blood backs up into the right atrium", "It falls, because the right atrium empties faster", "It is unchanged, because the jugular has valves", "It reflects left atrial pressure instead"], 0, "Right atrial pressure depends on the right ventricle's ability to pump blood out; poor forward pumping raises it, seen as a higher JVP."),
      Q("chain", "The patient takes a deep breath in. What happens to right atrial pressure?", ["It decreases", "It increases", "It is unchanged", "It becomes equal to aortic pressure"], 0, "Right atrial pressure is decreased with inspiration and increased with coughing or forced exhalation."),
      Q("chain", "The patient coughs forcefully. What happens to right atrial pressure?", ["It increases", "It decreases", "It is unchanged", "It drops to zero"], 0, "Coughing or forced exhalation raises intrathoracic pressure, which increases right atrial pressure."),
      Q("idea", "Why can right atrial pressure be seen in the internal jugular vein?", ["There are no valves between the great veins and the atria", "The jugular vein contains a pacemaker", "The carotid artery transmits atrial pressure", "The tricuspid valve opens into the jugular"], 0, "With no valve between the great veins and the atria, atrial pressure changes are transmitted into the jugular veins."),
      Q("chain", "Which atrial wave is caused by the AV valves bulging back into the atria at the start of systole?", ["C-wave", "A-wave", "V-wave", "S-wave"], 0, "The C-wave begins at the start of systole when the AV valves close and bulge into the atria, briefly raising pressure."),
      Q("chain", "Which atrial wave rises because veins keep filling the atria while the AV valves are still closed?", ["V-wave", "A-wave", "C-wave", "None — atria do not fill in systole"], 0, "Toward the end of systole the AV valves are still shut but venous pressure exceeds atrial pressure, so filling raises atrial pressure — the V-wave."),
      Q("chain", "Which atrial wave is lost if the atria do not contract?", ["A-wave", "C-wave", "V-wave", "All three equally"], 0, "The A-wave is atrial contraction at the end of diastole; without contraction it would not appear (clarification: standard physiology)."),
      Q("chain", "The heart starts pumping more strongly. What happens to atrial pressure and filling?", ["Atrial pressure drops, which increases filling", "Atrial pressure rises, which decreases filling", "Atrial pressure rises, which increases filling", "No change in either"], 0, "When the heart pumps strongly, atrial pressure drops, which increases filling (slide 33)."),
      Q("bedside", "Why is the right internal jugular vein preferred for estimating JVP?", ["It has the most direct channel into the right atrium", "It is the only vein with valves", "It reflects left ventricular pressure", "It carries arterial blood"], 0, "The right IJ has the most direct channel to the right atrium, so its pulsations best reflect right atrial pressure.")
    ]),

    // ------------------------------------------------------------------
    D("preload-frank-starling", "Preload and the Frank-Starling law", "The more the ventricle is filled and stretched at the end of diastole, the harder it contracts — so more venous return means more stroke volume.", [
      S("idea", "The idea", "<p><strong>Preload</strong> is the load on the heart <em>before</em> it contracts: the volume of blood stretching the ventricular fibers at the end of diastole (<strong>end-diastolic volume</strong>). It is the heart's “volume work.”</p><p>The <strong>Frank-Starling law</strong>: the ventricle contracts <strong>more forcefully</strong> when it has been filled more. Think of a rubber band — stretch it further and it snaps back harder. That way, whatever blood comes back to the heart gets pumped out.</p><p>Cardiac output = stroke volume × heart rate, so a bigger stroke volume from more filling means more cardiac output.</p>"),
      S("chain", "Cause → effect", chain([
        "More venous return (muscle pump, one-way limb valves, venous constriction) → more blood reaches the ventricle.",
        "End-diastolic volume ↑ → fibers stretched more (↑ preload).",
        "More stretch → more forceful contraction (Frank-Starling).",
        "Stroke volume ↑ → cardiac output ↑ (CO = SV × HR)."
      ]) + Tbl(["", "If ↑ preload", "If ↓ preload"], [
        ["End-diastolic volume", "↑", "↓"],
        ["Force of contraction", "↑", "↓"],
        ["Stroke volume", "↑", "↓"],
        ["S3 (if present)", "Louder", "Softer"]
      ]) + HY("Fill it more → stretch it more → it squeezes harder (Frank-Starling).")),
      S("bedside", "Why it matters clinically", "<p><strong>S3 maneuvers:</strong> the H&P lecture says maneuvers that increase venous return accentuate S3 and maneuvers that decrease it soften S3 — because they change how much blood fills the ventricle in early diastole.</p><p><strong>Getting blood back:</strong> the venous system holds a large volume; limb valves and the <strong>muscle pump</strong> (intermittent extremity muscle contraction) push blood toward the heart, supporting preload.</p><p><strong>Heart rate link:</strong> filling needs time. If heart rate is too fast, end-diastolic volume — and therefore preload — falls (see heart rate concept).</p>"),
      S("traps", "Common traps", traps([
        "<strong>Preload vs afterload.</strong> Preload is a <em>volume</em> before contraction; afterload is the <em>pressure</em> the heart must pump against after contraction starts.",
        "<strong>Preload vs contractility.</strong> Frank-Starling is more force from more stretch; contractility is changing force <em>without</em> changing resting length.",
        "<strong>“More blood returning overwhelms the heart.”</strong> Within normal limits, more filling produces a stronger contraction that ejects it."
      ]))
    ], [
      Q("chain", "Venous return increases and end-diastolic volume rises. What does the Frank-Starling law predict?", ["The ventricle contracts more forcefully and stroke volume rises", "The ventricle contracts less forcefully and stroke volume falls", "Heart rate rises but stroke volume is unchanged", "Afterload falls to zero"], 0, "More filling → more stretch → more forceful contraction → larger stroke volume."),
      Q("idea", "Preload is best measured as which quantity?", ["End-diastolic volume", "Aortic pressure", "Heart rate", "Force of contraction at a fixed fiber length"], 0, "Preload is the volume of blood stretching the ventricular fibers at the end of diastole — the end-diastolic volume."),
      Q("chain", "A patient loses a lot of blood volume. Predict preload and stroke volume.", ["Both decrease", "Both increase", "Preload increases, stroke volume decreases", "Preload decreases, stroke volume increases"], 0, "Less volume returning → lower end-diastolic volume → less stretch → weaker contraction → lower stroke volume."),
      Q("chain", "Why does walking help push blood back to the heart from the legs?", ["Leg muscles contract and squeeze veins, and one-way valves keep blood moving toward the heart", "Leg muscles relax arteries and lower afterload", "Walking closes the AV valves", "Walking raises the SA node rate only"], 0, "The venous (muscle) pump plus one-way valves move blood forward toward the heart, supporting venous return and preload."),
      Q("bedside", "A patient's S3 becomes louder with a maneuver. What did the maneuver most likely do?", ["Increased venous return", "Decreased venous return", "Increased afterload only", "Slowed conduction through the AV node"], 0, "Maneuvers that increase venous return accentuate S3 by increasing early diastolic filling."),
      Q("chain", "Stroke volume rises from increased preload while heart rate is unchanged. What happens to cardiac output?", ["It increases", "It decreases", "It is unchanged", "It falls to normal"], 0, "CO = SV × HR; a higher stroke volume at the same rate increases cardiac output."),
      Q("traps", "Which statement describes preload, not afterload?", ["The volume stretching the ventricle before contraction", "The pressure the ventricle must generate to open the aortic valve", "Systemic blood pressure", "Pulmonary blood pressure for the right ventricle"], 0, "Preload is volume work before contraction; the others describe afterload (pressure work)."),
      Q("chain", "Why is it called 'pre'-load?", ["It is the load on the heart before ventricular contraction begins", "It is the load after the aortic valve opens", "It is set before birth", "It occurs before the SA node fires"], 0, "Preload is the work or load the heart does before the ventricular contraction begins.")
    ]),

    // ------------------------------------------------------------------
    D("afterload", "Afterload", "Afterload is the pressure the ventricle must overcome to push blood out — mainly systemic blood pressure for the left ventricle and pulmonary pressure for the right — so higher afterload makes ejection harder.", [
      S("idea", "The idea", "<p><strong>Afterload</strong> is the heart's <strong>pressure work</strong>: the pressure the ventricle must generate to move blood into the aorta (or pulmonary trunk). It is called “after” load because it is the load presented to the heart <em>after</em> contraction has started.</p><p>Picture pushing open a door with someone leaning on the other side. The harder they lean (higher blood pressure), the harder you must push before the door even opens — and the less you get through.</p><p>Main sources: <strong>systemic blood pressure</strong> → left ventricle; <strong>pulmonary blood pressure</strong> → right ventricle.</p>" + clar("with more afterload, more of the contraction is spent just raising pressure to open the semilunar valve, so less blood is ejected per beat; over time a ventricle pumping against high pressure thickens (hypertrophy).")),
      S("chain", "Cause → effect", chain([
        "Arterial pressure ahead of the ventricle rises (↑ afterload).",
        "During isovolumetric contraction, the ventricle must raise its pressure higher before the semilunar valve opens.",
        "Ejection is harder → stroke volume tends to fall (Clarification: standard physiology).",
        "Long-term pressure work → ventricular hypertrophy → a stiff ventricle (S4)."
      ]) + Tbl(["", "If ↑ afterload", "If ↓ afterload"], [
        ["Pressure needed to open semilunar valve", "↑", "↓"],
        ["Ease of ejection", "Harder", "Easier"],
        ["Stroke volume (Clarification)", "↓", "↑"],
        ["Cardiac work", "↑", "↓"]
      ]) + HY("Afterload = the pressure the ventricle must beat to eject; systemic BP for the left ventricle, pulmonary BP for the right.")),
      S("bedside", "Why it matters clinically", "<p>The H&P lecture lists <strong>S4</strong> in left ventricular hypertrophy from <strong>hypertension</strong> and <strong>aortic stenosis</strong> — both situations where the left ventricle chronically pumps against high pressure (high afterload) and becomes stiff.</p><p>Vasoconstrictors that raise peripheral vascular resistance and blood pressure (angiotensin II, norepinephrine) raise the pressure the left ventricle must pump against.</p>"),
      S("traps", "Common traps", traps([
        "<strong>Wrong ventricle.</strong> Systemic BP loads the <em>left</em> ventricle; pulmonary BP loads the <em>right</em>.",
        "<strong>“Afterload is the blood volume after ejection.”</strong> Afterload is a pressure (tension work), not a volume.",
        "<strong>“Higher afterload makes the heart eject more.”</strong> Higher afterload makes ejection harder; it adds work, not output."
      ]))
    ], [
      Q("chain", "A patient's systemic blood pressure rises. What happens to left ventricular afterload?", ["It increases", "It decreases", "It is unchanged", "Only right ventricular afterload changes"], 0, "Systemic blood pressure is the main source of afterload for the left ventricle."),
      Q("chain", "Pulmonary blood pressure rises. Which ventricle's afterload increases?", ["Right ventricle", "Left ventricle", "Both atria", "Neither"], 0, "Pulmonary blood pressure is the main source of afterload for the right ventricle."),
      Q("chain", "Afterload increases while preload and contractility stay the same. Predict stroke volume.", ["It decreases, because ejection is harder", "It increases, because the ventricle stretches more", "It is unchanged", "It doubles"], 0, "More of the contraction is spent raising pressure to open the semilunar valve, leaving less ejection (clarification: standard physiology)."),
      Q("idea", "Afterload is best described as…", ["The pressure the heart must generate to move blood into the aorta", "The volume in the ventricle at the end of diastole", "The heart's ability to change force at a fixed length", "The number of beats per minute"], 0, "Afterload is the pressure or tension work of the heart; the others are preload, contractility, and heart rate."),
      Q("bedside", "Aortic stenosis and long-standing hypertension both lead to LVH and an S4. What do they share?", ["Chronic high afterload on the left ventricle", "Chronic high preload on the right ventricle", "Low systemic pressure", "Absent atrial contraction"], 0, "Both make the left ventricle pump against high pressure; the hypertrophied, stiff ventricle produces an S4 when the atrium contracts."),
      Q("chain", "Angiotensin II constricts arterioles and raises blood pressure. What does that do to the left ventricle's workload?", ["Increases afterload, so the left ventricle must generate more pressure", "Decreases afterload, so ejection is easier", "Increases only right ventricular preload", "Has no effect on the heart"], 0, "Higher systemic pressure means more pressure the left ventricle must overcome to eject."),
      Q("traps", "Why is afterload called 'after' load?", ["It is presented to the heart after contraction has begun", "It occurs after the ventricles fill", "It occurs after the T wave", "It only matters after exercise"], 0, "Afterload is the work presented to the heart after contraction has commenced.")
    ]),

    // ------------------------------------------------------------------
    D("contractility", "Contractility", "Contractility is the heart's ability to squeeze harder without being stretched more; it depends on calcium and ATP for actin–myosin interaction, and sympathetic stimulation raises it.", [
      S("idea", "The idea", "<p>There are two ways to get a stronger heartbeat. One is to fill the ventricle more (Frank-Starling). The other is to make the muscle itself squeeze harder at the <strong>same</strong> fiber length — that is <strong>contractility</strong>.</p><p>Contractility increases cardiac output <strong>independent of preload and afterload</strong>. At the cellular level, actin and myosin interaction needs <strong>energy from ATP</strong> and the presence of <strong>calcium</strong>. The sympathetic nervous system has an excitatory effect on both heart rate and contractility.</p>"),
      S("chain", "Cause → effect", chain([
        "Sympathetic stimulation (or other drive) acts on the heart.",
        "Actin–myosin interaction is driven by calcium and ATP.",
        "Muscle squeezes harder at the same resting length (↑ contractility).",
        "More blood ejected per beat → ↑ stroke volume → ↑ cardiac output, without any change in filling."
      ]) + Tbl(["", "Frank-Starling (preload)", "Contractility"], [
        ["What changes", "Fiber stretch (end-diastolic volume)", "Force at the <strong>same</strong> length"],
        ["Needs more filling?", "Yes", "<strong>No</strong>"],
        ["Cellular requirement", "—", "Calcium + ATP"],
        ["Raised by", "↑ venous return", "Sympathetic stimulation"]
      ]) + clar("sympathetic stimulation increases calcium availability inside the cardiac cell, which is how it strengthens contraction.") + HY("Contractility = stronger squeeze without more stretch; it needs calcium and ATP.")),
      S("bedside", "Why it matters clinically", "<p>Cardiac reserve — the maximum increase in output above baseline (300–400% in a young, healthy adult) — relies on all four levers, and contractility is the one that works even when filling can't increase.</p><p>The H&P lecture's <strong>forceful PMI</strong> that terminates quickly suggests a hyperkinetic heart (hypermetabolic states) — a strongly contracting ventricle.</p><p>Because ATP is required, an energy-starved (ischemic) heart cannot contract normally. (Clarification: standard physiology — ATP is needed for actin–myosin cycling.)</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Any stronger beat is increased contractility.”</strong> If the force rose because the ventricle was filled more, that is Frank-Starling (preload), not contractility.",
        "<strong>“Contractility depends on afterload.”</strong> The lecture says contractility increases cardiac output independent of preload and afterload.",
        "<strong>“Only sodium matters for contraction.”</strong> Calcium (and ATP) are required for actin–myosin interaction."
      ]))
    ], [
      Q("idea", "Contractility is defined as the heart's ability to…", ["Change its force of contraction without changing its resting length", "Contract harder only when filled more", "Fire impulses faster", "Store blood between beats"], 0, "Contractility changes force at the same resting fiber length; more force from more stretch is Frank-Starling."),
      Q("chain", "Sympathetic stimulation increases contractility while preload stays the same. Predict stroke volume.", ["It increases", "It decreases", "It is unchanged", "It falls to zero"], 0, "Contractility increases cardiac output independent of preload and afterload by ejecting more per beat."),
      Q("chain", "Which two things does actin–myosin interaction require?", ["ATP and calcium", "Sodium and chloride", "Potassium and oxygen only", "Nitric oxide and histamine"], 0, "Contraction and relaxation require energy from ATP breakdown and the presence of calcium ions."),
      Q("traps", "A ventricle beats more forcefully after receiving extra blood volume. Is this mainly increased contractility?", ["No — that is Frank-Starling from increased preload", "Yes — any increase in force is contractility", "No — that is increased afterload", "Yes — volume increases calcium directly"], 0, "More force due to more filling (stretch) is the Frank-Starling mechanism; contractility is force at the same length."),
      Q("chain", "Cardiac cells run short of ATP. Predict contraction strength.", ["It falls, because actin–myosin interaction needs ATP", "It rises, because less energy is used", "It is unchanged", "Only heart rate is affected"], 0, "Actin–myosin interaction requires energy from ATP breakdown; without it, contraction weakens."),
      Q("bedside", "Which autonomic input increases both heart rate and contractility?", ["Sympathetic", "Parasympathetic (vagus)", "Neither", "Only somatic motor nerves"], 0, "The sympathetic system has an excitatory effect on heart rate and contractility; the vagus slows heart rate.")
    ]),

    // ------------------------------------------------------------------
    D("heart-rate-filling", "Heart rate and diastolic filling time", "Cardiac output is stroke volume × heart rate, but faster isn't always better: a very fast rate leaves too little diastolic time to fill, so stroke volume, output, and tissue oxygen delivery fall.", [
      S("idea", "The idea", "<p><strong>Cardiac output (CO) = stroke volume (SV) × heart rate (HR)</strong>; normal adult CO is 4.0–8.0 L/min. Raising the rate seems like it should always raise output.</p><p>But the ventricle fills during <strong>diastole</strong>. Like filling a bucket under a tap, if you dump it before it is full, you carry less water per trip. At very fast rates, diastole is so short that the ventricle doesn't fill, stroke volume drops, and output can actually fall.</p>" + clar("as heart rate rises, diastole shortens much more than systole, so filling time is the part that gets squeezed.")),
      S("chain", "Cause → effect", chain([
        "Heart rate rises.",
        "Less time spent in diastolic filling.",
        "Less blood fills the ventricle (↓ end-diastolic volume).",
        "Less filling → less cardiac output.",
        "Less output → less oxygen and nutrients delivered to cells.",
        "Cells can be injured and potentially die."
      ]) + Tbl(["Change", "Diastolic filling time", "Stroke volume", "Net cardiac output"], [
        ["Moderate ↑ HR", "Somewhat ↓", "Roughly maintained", "↑"],
        ["Very fast HR", "Markedly ↓", "↓↓", "<strong>↓</strong>"],
        ["↓ HR", "↑", "↑ (more filling)", "Depends on balance"]
      ]) + clar("at moderate rates the extra beats outweigh the small loss of filling, so output rises; only at very fast rates does lost filling make output fall.") + Mn("CO = SV × HR", "Two levers: how much per beat and how many beats.") + HY("Faster rate → less filling time → less filling → less CO → less oxygen to tissues.")),
      S("bedside", "Why it matters clinically", "<p>This explains why a very fast heart rate can cause symptoms of poor output rather than better circulation. It ties to the H&P history topics of <strong>palpitations</strong> and <strong>syncope</strong>, and to tachycardia as a finding.</p><p>The lecture's endpoint: less output means less oxygen and nutrients for the body's cells, which can be injured and potentially die.</p><p>Escape rhythms show the opposite end: an AV-node rate of 40–60 or Purkinje rate of 15–40 may be too slow to maintain output.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Faster rate always means more cardiac output.”</strong> Beyond a point, reduced filling time lowers stroke volume enough that output falls.",
        "<strong>“Heart rate only depends on how often the ventricles contract.”</strong> The lecture says it depends on contraction frequency AND time spent in diastolic filling.",
        "<strong>“Stroke volume is fixed.”</strong> Stroke volume depends on filling (preload), afterload, and contractility."
      ]))
    ], [
      Q("chain", "Heart rate becomes very fast. Which chain follows?", ["Less diastolic time → less filling → less CO → less oxygen to cells", "More diastolic time → more filling → more CO", "Less systolic time → more filling → more CO", "No change in filling, so CO doubles"], 0, "The lecture chain: faster rate, less time to fill, less blood fills, less CO, less oxygen and nutrients for cells."),
      Q("chain", "Stroke volume is 70 mL and heart rate is 70/min. Heart rate rises to 100/min with no change in stroke volume. What happens to CO?", ["It increases", "It decreases", "It is unchanged", "It cannot be calculated"], 0, "CO = SV × HR; with SV unchanged, a higher HR increases CO."),
      Q("chain", "At an extremely fast heart rate, stroke volume falls sharply. Why?", ["The ventricle has too little diastolic time to fill", "Afterload falls to zero", "Contractility always drops at high rates", "The AV valves stay closed permanently"], 0, "The ventricle fills during diastole; very fast rates shorten filling time and reduce end-diastolic volume."),
      Q("idea", "Cardiac output is calculated as…", ["Stroke volume × heart rate", "Stroke volume ÷ heart rate", "Blood pressure × heart rate", "Preload − afterload"], 0, "CO = SV × HR, normally 4.0–8.0 L/min in an adult."),
      Q("chain", "Which phase of the cardiac cycle is shortened most when heart rate rises?", ["Diastole (filling)", "Systole (ejection)", "Both equally", "Neither"], 0, "Faster rates leave less time to fill; diastole is the phase squeezed most (clarification: standard physiology)."),
      Q("idea", "Which four factors determine the heart's ability to increase cardiac output?", ["Preload, afterload, contractility, and heart rate", "Preload, viscosity, compliance, and wall tension", "SA node, AV node, His bundle, and Purkinje fibers", "Pressure, flow, resistance, and turbulence"], 0, "The lecture's four factors are preload, afterload, cardiac contractility, and heart rate."),
      Q("bedside", "A patient's AV node takes over at 45/min after SA node failure. If stroke volume can't rise enough, what happens to CO?", ["It falls", "It rises", "It is unchanged", "It becomes infinite"], 0, "CO = SV × HR; a slow escape rate lowers CO unless stroke volume compensates.")
    ]),

    // ------------------------------------------------------------------
    D("local-control-autoregulation-endothelium", "Local control: autoregulation and the endothelium", "Tissues set their own blood flow: low oxygen and metabolite build-up dilate local vessels (autoregulation), and the endothelium releases nitric oxide to dilate or endothelin to constrict.", [
      S("idea", "The idea", "<p><strong>Autoregulation</strong> means each tissue adjusts its own blood flow to match its <strong>nutritional needs</strong>. If a tissue is short on oxygen or has accumulated toxic metabolites, its vessels relax to let more blood in. Increased flow like this is <strong>hyperemia</strong>.</p><p>The <strong>heart, brain, and kidneys</strong> keep their flow relatively constant even when systemic blood pressure ranges from about <strong>60 to 180 mmHg</strong> — protecting vital organs.</p><p>The <strong>endothelium</strong> (the lining of arterioles and small arteries) is a local control center too. It makes <strong>nitric oxide (NO)</strong>, which relaxes vascular smooth muscle (vasodilation) and inhibits platelet aggregation. It also releases vasoconstrictors — <strong>angiotensin II, prostaglandins, and endothelins</strong>. After vessel injury, local endothelin constricts the vessel to limit bleeding.</p>"),
      S("chain", "Cause → effect", chain([
        "Tissue becomes more active or under-perfused → low oxygen, metabolites accumulate.",
        "Local vessel tone relaxes; precapillary sphincters open → more blood flow (hyperemia).",
        "Endothelium senses ACh, bradykinin, histamine, thrombin, or shear stress from ↑ flow / ↑ BP → releases NO.",
        "NO relaxes vascular smooth muscle → vasodilation; also inhibits platelet aggregation.",
        "Vessel damage → local endothelin → vasoconstriction → less bleeding."
      ]) + Tbl(["Endothelial factor", "Effect", "Triggers / role"], [
        ["Nitric oxide", "<strong>Vasodilation</strong>; inhibits platelet aggregation", "ACh, bradykinin, histamine, thrombin, shear stress"],
        ["Endothelin", "<strong>Vasoconstriction</strong>", "Released after vessel damage to limit bleeding"],
        ["Angiotensin II, prostaglandins", "Vasoconstrictor substances", "Also released by endothelium"]
      ]) + HY("Autoregulation keeps heart, brain, and kidney flow steady from about 60–180 mmHg; NO dilates, endothelin constricts.")),
      S("bedside", "Why it matters clinically", "<p><strong>The throbbing cut finger:</strong> the lecture's example — local tissue control opens the system wider after a cut so more blood reaches it for healing, and you can feel a “pulsing” in the finger.</p><p><strong>Vital organ protection:</strong> autoregulation is why brain, heart, and kidney perfusion is preserved across a wide range of blood pressures — and why trouble starts when pressure falls outside that range.</p><p><strong>Bleeding control:</strong> endothelin (endothelium) and serotonin (platelets) both constrict damaged vessels.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Autoregulation keeps flow constant at any pressure.”</strong> The lecture gives a range of about 60–180 mmHg.",
        "<strong>“The endothelium only makes dilators.”</strong> It also releases vasoconstrictors: angiotensin II, prostaglandins, and endothelins.",
        "<strong>“Low oxygen causes local vasoconstriction.”</strong> In systemic tissues, low oxygen and metabolites increase local flow (hyperemia).",
        "<strong>“High flow should constrict the vessel.”</strong> Shear stress from increased flow or pressure releases NO, causing dilation."
      ]))
    ], [
      Q("chain", "Exercising muscle builds up metabolites and runs low on oxygen. Predict local blood flow.", ["It increases (hyperemia)", "It decreases", "It is unchanged", "It reverses"], 0, "Autoregulation responds to low oxygen and metabolite accumulation by increasing local flow."),
      Q("chain", "Systemic blood pressure drops from 120 to 80 mmHg. What happens to blood flow to the brain?", ["It stays relatively constant through autoregulation", "It falls by one third", "It doubles", "It stops"], 0, "Heart, brain, and kidney flow stays relatively constant across roughly 60–180 mmHg."),
      Q("chain", "Blood flow through an artery increases, raising shear stress on the endothelium. What is released, and with what effect?", ["Nitric oxide → vasodilation", "Endothelin → vasoconstriction", "Serotonin → vasoconstriction", "Norepinephrine → vasoconstriction"], 0, "Shear stress from increased flow or pressure triggers nitric oxide release, relaxing vascular smooth muscle."),
      Q("chain", "A small vessel is cut. Which endothelial substance helps limit bleeding?", ["Endothelin, causing local vasoconstriction", "Nitric oxide, causing vasodilation", "Bradykinin, causing vasodilation", "Histamine, increasing permeability"], 0, "After vessel damage, local endothelin constricts the vessel to prevent extensive bleeding."),
      Q("bedside", "Why does a fresh cut on a finger seem to throb?", ["Local tissue control opens vessels wider so more blood reaches the area", "The pulse wave becomes larger in all capillaries", "Veins in the finger begin pumping", "The finger's arteries constrict tightly"], 0, "Local control increases flow to injured tissue for healing, and you can feel the pulsing."),
      Q("idea", "Besides vasodilation, what other effect does nitric oxide have?", ["It inhibits platelet aggregation", "It promotes platelet aggregation", "It raises heart rate", "It closes venous valves"], 0, "NO inhibits platelet aggregation and secretion of platelet contents (which cause vasoconstriction)."),
      Q("idea", "Which agonists stimulate endothelial nitric oxide release according to the lecture?", ["Acetylcholine, bradykinin, histamine, and thrombin", "Norepinephrine, angiotensin II, and endothelin", "Serotonin and cortisol", "Potassium and sodium"], 0, "NO release is under control of acetylcholine, bradykinin, histamine, and thrombin (and shear stress)."),
      Q("traps", "A classmate says the endothelium only dilates vessels. Which substances prove otherwise?", ["Angiotensin II, prostaglandins, and endothelins", "Nitric oxide and bradykinin", "Histamine and acetylcholine", "Epinephrine in skeletal muscle"], 0, "The endothelium also releases vasoconstrictors: angiotensin II, prostaglandins, and endothelins.")
    ]),

    // ------------------------------------------------------------------
    D("humoral-control-receptors", "Humoral control and vascular receptors", "Circulating substances and sympathetic signals change vessel diameter by opening or closing calcium channels in vascular smooth muscle: α receptors constrict, β2 receptors dilate, and each hormone pushes one way.", [
      S("idea", "The idea", "<p>The tunica media (smooth muscle) controls vessel diameter. Unlike the heart, vascular smooth muscle stores little calcium and has few fast sodium channels, so <strong>constriction depends on calcium entering from outside the cell</strong>.</p><p>That makes calcium channels the control point:</p><ul><li><strong>α1 and α2 receptors</strong> are excitatory → calcium channels open → <strong>vasoconstriction</strong>.</li><li><strong>β2 receptors</strong> are inhibitory → calcium channels close → <strong>vasodilation</strong>.</li><li><strong>Calcium channel blockers</strong> block entry → vasodilation.</li></ul><p><strong>Humoral control</strong> = vasoactive hormones carried in the blood from distant glands or released by local tissue.</p>"),
      S("chain", "Cause → effect", chain([
        "Hormone or sympathetic transmitter reaches vascular smooth muscle.",
        "Receptor activation opens (α) or closes (β2) calcium channels.",
        "More Ca2+ entry → contraction → vasoconstriction → ↑ resistance → ↑ BP.",
        "Less Ca2+ entry → relaxation → vasodilation → ↓ resistance, ↑ local flow.",
        "Nerve-ending release acts immediately; adrenal medulla release takes longer (circulation time)."
      ]) + Tbl(["Substance", "Main vascular effect", "Key detail"], [
        ["Norepinephrine", "<strong>Powerful vasoconstrictor</strong>", "Sympathetic nerve endings + adrenal medulla"],
        ["Epinephrine", "Weaker vasoconstrictor; <strong>dilates in skeletal muscle</strong>", "Sympathetic nerve endings + adrenal medulla"],
        ["Angiotensin II", "<strong>Powerful vasoconstrictor</strong> of arterioles", "↑ peripheral vascular resistance → ↑ BP"],
        ["Histamine", "<strong>Powerful vasodilator</strong>; ↑ capillary permeability", "Mast cells, basophils"],
        ["Serotonin", "Vasoconstriction", "Aggregating platelets; controls bleeding"],
        ["Bradykinin", "Intense arteriole dilation; ↑ permeability; venule constriction", "Skin, salivary glands, GI tract"],
        ["Prostaglandins", "Some constrict, some dilate", "Made from cell-membrane constituents after injury; blocked by corticosteroids"]
      ]) + Mn("α = Add calcium (constrict); β2 = Block calcium (dilate)", "Receptors work by opening or closing vascular smooth muscle calcium channels.") + HY("Vascular smooth muscle tone is calcium entry: α opens channels (constrict), β2 closes them (dilate).")),
      S("bedside", "Why it matters clinically", "<p><strong>Stress and exercise:</strong> sympathetic stimulation releases norepinephrine from nerve endings and constricts local veins and arterioles; epinephrine dilates skeletal muscle vessels so working muscle gets more blood.</p>" + clar("epinephrine's dilation in skeletal muscle reflects β2-receptor effects there.") + "<p><strong>Swelling with injury/allergy:</strong> histamine and bradykinin dilate arterioles and increase capillary permeability.</p>" + clar("more permeable capillaries leak fluid into tissue, which is seen as swelling.") + "<p><strong>Corticosteroids</strong> are anti-inflammatory because they block release of arachidonic acid, preventing prostaglandin synthesis. <strong>Calcium channel blockers</strong> dilate vessels by blocking calcium entry.</p><p><strong>Neural backup:</strong> baroreceptors in vessel and heart walls sense stretch and signal the brainstem cardiovascular center; chemoreceptors in the carotid bodies monitor O2, CO2, and H+.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Epinephrine constricts everywhere, like norepinephrine.”</strong> Epinephrine is a weaker vasoconstrictor and dilates vessels in skeletal muscle.",
        "<strong>“β2 receptors constrict vessels.”</strong> β2 receptors are inhibitory: they close calcium channels → vasodilation. α receptors constrict.",
        "<strong>“Adrenal release is as fast as nerve release.”</strong> Nerve-ending release causes an immediate reaction; adrenal release takes longer because of circulation time.",
        "<strong>“All prostaglandins dilate.”</strong> Some produce vasoconstriction and others vasodilation."
      ]))
    ], [
      Q("chain", "An α1-adrenergic receptor on vascular smooth muscle is stimulated. Predict the effect.", ["Calcium channels open → vasoconstriction", "Calcium channels close → vasodilation", "Sodium channels open → vasodilation", "No effect on vessel tone"], 0, "α1 and α2 receptors are excitatory, opening calcium channels and producing vasoconstriction."),
      Q("chain", "A β2-adrenergic receptor on vascular smooth muscle is stimulated. Predict the effect.", ["Calcium channels close → vasodilation", "Calcium channels open → vasoconstriction", "Heart rate slows", "Capillary permeability falls"], 0, "β2 receptors are inhibitory, closing calcium channels and producing vasodilation."),
      Q("chain", "During exercise, epinephrine is released. What happens to blood vessels in skeletal muscle?", ["They dilate", "They constrict powerfully", "They collapse to critical closing pressure", "They are unaffected"], 0, "Epinephrine is a weaker vasoconstrictor overall and acts as a vasodilator in skeletal muscle."),
      Q("chain", "Which response is faster: norepinephrine from sympathetic nerve endings or from the adrenal medulla?", ["Nerve endings — immediate; adrenal release takes longer because of circulation time", "Adrenal medulla — it is closer to the vessels", "Both are identical in speed", "Neither affects vessels"], 0, "Nerve-ending release causes an immediate reaction; adrenal release must travel through the circulation."),
      Q("chain", "Mast cells in injured tissue release histamine. Predict arterioles and capillaries.", ["Arterioles dilate and capillary permeability increases", "Arterioles constrict and capillary permeability decreases", "Arterioles constrict and capillaries close", "No effect on arterioles"], 0, "Histamine is a powerful arteriole vasodilator and increases capillary permeability."),
      Q("chain", "Platelets aggregate at a bleeding site and release serotonin. What does it do?", ["Causes vasoconstriction, helping control bleeding", "Causes vasodilation, increasing bleeding", "Increases nitric oxide release", "Opens precapillary sphincters"], 0, "Serotonin from aggregating platelets causes vasoconstriction, important in controlling bleeding."),
      Q("bedside", "Why do corticosteroids reduce inflammation in this lecture's model?", ["They block release of arachidonic acid, preventing prostaglandin synthesis", "They activate β2 receptors", "They increase histamine release", "They block calcium channels in the heart"], 0, "Corticosteroids block release of cell-membrane constituents (arachidonic acid), so prostaglandins aren't made."),
      Q("idea", "Which hormone is described as a powerful vasoconstrictor that acts on arterioles to raise peripheral vascular resistance and BP?", ["Angiotensin II", "Bradykinin", "Histamine", "Nitric oxide"], 0, "Angiotensin II constricts arterioles, increasing peripheral vascular resistance and blood pressure."),
      Q("traps", "Bradykinin has which combination of effects?", ["Intense arteriole dilation, ↑ capillary permeability, and venule constriction", "Arteriole constriction and venule dilation", "Platelet aggregation and vasoconstriction", "Only increased heart rate"], 0, "Bradykinin intensely dilates arterioles, increases capillary permeability, and constricts venules."),
      Q("chain", "Why does vascular smooth muscle depend on extracellular calcium for constriction?", ["It has a less developed sarcoplasmic reticulum and very few fast sodium channels", "It has a large sarcoplasmic reticulum", "It uses potassium instead of calcium", "It is directly paced by the SA node"], 0, "With little internal calcium storage and few fast Na+ channels, vascular smooth muscle relies on calcium entering from outside.")
    ])
  ]);
}());
