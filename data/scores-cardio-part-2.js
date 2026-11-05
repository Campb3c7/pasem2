/*
  Cardio Part 2 Scores & Calculators.
  Sources: source-material/cardio-part-2/text/*.md (plus the slide images for Wells DVT,
  modified Wells PE, Duke minor criteria, and the syncope risk flowchart). Anything not on the
  slides is marked "(standard teaching)".
  Each entry has a live calculator section (built with window.ScoreCalc from data/score-helpers.js,
  brought to life by score-calc.js), a "what it means" section, and traps.
  Ids are "sc-*"; question ids are "<id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  var SC = window.ScoreCalc;
  var P = SC.points, F = SC.form, R = SC.formula;

  // Result block for formula calculators. tone: "ok" | "warn" | "bad".
  function out(value, unit, verdict, note, tone) {
    return (value !== null ? '<div class="calc-total"><strong>' + value + '</strong><span>' + unit + '</span></div>' : "") +
      '<div class="calc-band ' + (tone || "") + '"><b>' + verdict + '</b>' + (note ? "<p>" + note + "</p>" : "") + "</div>";
  }
  function miss() { for (var i = 0; i < arguments.length; i++) if (!isFinite(arguments[i])) return true; return false; }
  function tag(text) { return '<p class="calc-source">' + text + "</p>"; }

  /* ---------- formulas ---------- */

  R("sc-ekg-intervals", function (v, fmt) {
    var lines = [];
    if (isFinite(v.pr)) {
      if (v.pr > 200) lines.push(["First-degree AV block", "PR " + fmt(v.pr) + " ms is over 200 ms.", "warn"]);
      else if (v.pr < 120) lines.push([v.delta ? "WPW pattern" : "Short PR", v.delta ? "PR under 120 ms plus a delta wave = pre-excitation (accessory pathway)." : "PR under 120 ms. Look for a slurred QRS upstroke (delta wave).", "warn"]);
      else lines.push(["Normal PR", "120 to 200 ms.", "ok"]);
    }
    if (isFinite(v.qrs)) {
      if (v.qrs >= 120) lines.push(["Wide QRS", "QRS " + fmt(v.qrs) + " ms is 120 ms or more: ventricular origin, bundle branch block, or aberrancy/pre-excitation.", "warn"]);
      else lines.push(["Narrow QRS", "Under 120 ms: the impulse uses the normal conduction system (supraventricular).", "ok"]);
    }
    if (isFinite(v.pp)) {
      if (v.pp >= 0.12) lines.push(["Sinus arrhythmia", "P-P intervals vary by " + fmt(v.pp) + " s (0.12 s or more).", "ok"]);
      else lines.push(["Regular sinus rate", "P-P variation under 0.12 s.", "ok"]);
    }
    return lines.map(function (l) { return out(null, "", l[0], l[1], l[2]); }).join("");
  });

  R("sc-orthostatic", function (v, fmt) {
    if (miss(v.ss, v.sd, v.st, v.dt)) return "";
    var ds = v.ss - v.st, dd = v.sd - v.dt;
    var pos = ds >= 20 || dd >= 10;
    return out(fmt(ds) + " / " + fmt(dd), "mmHg drop (systolic / diastolic)",
      pos ? "Orthostatic hypotension" : "Not orthostatic hypotension",
      pos ? "Systolic drop of 20 or more, or diastolic drop of 10 or more, within 3 minutes of standing. Look for volume loss, drugs (diuretics, vasodilators), or autonomic failure." : "Neither a 20 mmHg systolic nor a 10 mmHg diastolic drop. Recheck if the history fits.",
      pos ? "warn" : "ok");
  });

  R("sc-doac", function (v, fmt) {
    if (v.valve) return out(null, "", "Warfarin (INR 2 to 3), not a DOAC", "DOACs can't be used with a mechanical valve or significant native mitral valve disease.", "bad");
    var d = v.drug;
    if (d === "apixaban") {
      if (miss(v.age, v.wt, v.scr)) return "";
      var n = (v.scr >= 1.5 ? 1 : 0) + (v.age >= 80 ? 1 : 0) + (v.wt <= 60 ? 1 : 0);
      return out(n + " of 3", "dose-reduction criteria", n >= 2 ? "Apixaban 2.5 mg twice daily" : "Apixaban 5 mg twice daily",
        "Reduce when 2 of 3 are present: SCr 1.5 or more, age 80 or more, weight 60 kg or less. Cautious but acceptable in stage IV-V CKD / ESRD.", n >= 2 ? "warn" : "ok");
    }
    if (miss(v.gfr)) return "";
    if (d === "rivaroxaban") {
      if (v.gfr < 15) return out(fmt(v.gfr), "mL/min", "Avoid rivaroxaban", "Below the 15-50 dose-adjust range (standard teaching: avoid under 15).", "bad");
      if (v.gfr <= 50) return out(fmt(v.gfr), "mL/min", "Rivaroxaban 15 mg once daily", "GFR 15-50: reduce from 20 mg. Give with the largest meal.", "warn");
      return out(fmt(v.gfr), "mL/min", "Rivaroxaban 20 mg once daily", "With the largest meal of the day.", "ok");
    }
    if (d === "dabigatran") {
      if (v.gfr <= 30) return out(fmt(v.gfr), "mL/min", "Avoid dabigatran", "Avoid if GFR is 30 or less.", "bad");
      return out(fmt(v.gfr), "mL/min", "Dabigatran 150 mg twice daily", "Direct thrombin inhibitor; a reversal agent exists but is costly.", "ok");
    }
    if (d === "edoxaban") {
      if (v.gfr <= 30 || v.gfr >= 95) return out(fmt(v.gfr), "mL/min", "Edoxaban can't be used", "Not for GFR 30 or less, or 95 or more.", "bad");
      if (v.gfr <= 50) return out(fmt(v.gfr), "mL/min", "Edoxaban 30 mg once daily", "GFR 50 or less: reduce from 60 mg.", "warn");
      return out(fmt(v.gfr), "mL/min", "Edoxaban 60 mg once daily", "", "ok");
    }
    return "";
  });

  R("sc-flutter", function (v, fmt) {
    if (miss(v.atrial)) return "";
    var r = Number(v.ratio) || 2;
    var vr = v.atrial / r;
    return out(fmt(vr), "bpm ventricular rate", r + ":1 conduction", "Atrial rate " + fmt(v.atrial) + " ÷ " + r + ". With a typical flutter rate near 300, 2:1 gives 150 and 3:1 gives 100." + (r === 1 ? " 1:1 conduction is dangerous (the flecainide boxed warning)." : ""), vr > 220 ? "bad" : vr > 100 ? "warn" : "ok");
  });

  R("sc-duke", function (v) {
    var maj = ["m1", "m2", "m3"].filter(function (k) { return v[k]; }).length;
    var min = ["n1", "n2", "n3", "n4", "n5"].filter(function (k) { return v[k]; }).length;
    var def = maj >= 2 || (maj >= 1 && min >= 3) || min >= 5;
    return out(maj + " major · " + min + " minor", "", def ? "Definite IE (clinical criteria)" : "Does not meet definite IE",
      "Definite needs 2 major, OR 1 major + 3 minor, OR 5 minor.", def ? "bad" : "ok");
  });

  R("sc-pulsus", function (v, fmt) {
    if (miss(v.exp, v.insp)) return "";
    var drop = v.exp - v.insp;
    return out(fmt(drop), "mmHg fall on inspiration", drop > 10 ? "Pulsus paradoxus" : "No pulsus paradoxus",
      drop > 10 ? "A fall over 10 mmHg on inspiration supports tamponade. Get an echo; treat with pericardiocentesis (fluids and pressors while you prepare)." : "Fall of 10 mmHg or less is normal.", drop > 10 ? "bad" : "ok");
  });

  function abiBand(x) {
    if (x > 1.4) return ["Non-compressible (calcified) arteries", "Inconclusive: get a toe-brachial index. Refer to vascular.", "warn"];
    if (x >= 1.0) return ["Normal", "", "ok"];
    if (x >= 0.91) return ["Borderline", "If symptoms fit claudication, get exercise treadmill testing.", "warn"];
    if (x < 0.4) return ["PAD, severe", "Under 0.4: severe claudication refractory to medical therapy is a bypass indication.", "bad"];
    return ["PAD", "0.90 or less confirms PAD: risk factors, medical therapy, refer to vascular.", "bad"];
  }
  R("sc-abi", function (v, fmt) {
    if (miss(v.rb, v.lb)) return "";
    var arm = Math.max(v.rb, v.lb), html = "";
    [["Right", v.ra], ["Left", v.la]].forEach(function (leg) {
      if (!isFinite(leg[1])) return;
      var x = leg[1] / arm, b = abiBand(x);
      html += out((Math.round(x * 100) / 100).toFixed(2), leg[0] + " ABI", b[0], b[1], b[2]);
    });
    return html ? html + tag("Each ankle pressure ÷ the higher arm systolic (standard teaching).") : "";
  });

  R("sc-aaa", function (v, fmt) {
    if (miss(v.d)) return "";
    var female = v.sex === "f";
    if (v.symp) return out(fmt(v.d), "cm", "Repair", "Symptoms of expansion, occlusion, or compression are a surgical indication at any size. Pain + hypotension = rupture: resuscitate and go to the OR.", "bad");
    if (isFinite(v.g) && v.g > 1) return out(fmt(v.d), "cm", "Repair", "Expansion over 1 cm per year is a surgical indication.", "bad");
    if (v.d < 3) return out(fmt(v.d), "cm", "Not an AAA", "AAA = 3 cm or more (1.5 times normal diameter).", "ok");
    if (female ? v.d >= 5.0 : v.d >= 5.5) return out(fmt(v.d), "cm", "Repair (EVAR or open)", "Asymptomatic repair threshold: men 5.5 cm, women 5.0 cm.", "bad");
    var plan;
    if (v.d < 4) plan = "Ultrasound every 3 years";
    else if (female) plan = v.d < 4.5 ? "Ultrasound every 12 months" : "Ultrasound every 6 months";
    else plan = v.d < 5 ? "Ultrasound every 12 months" : "Ultrasound every 6 months";
    return out(fmt(v.d), "cm", plan, "Medical management meanwhile: stop smoking, statin, BP control, exercise, avoid fluoroquinolones.", "warn");
  });

  R("sc-pe-class", function (v, fmt) {
    var unstable = v.arrest || v.drop || (isFinite(v.sbp) && v.sbp < 90);
    if (unstable) return out(null, "", "High risk (massive) PE", "Hemodynamically unstable. ICU, O2, vasopressors; systemic thrombolysis (alteplase) is the primary option; catheter therapy or surgical embolectomy if tPA is contraindicated. Start LMWH while arranging, held during tPA.", "bad");
    if (!isFinite(v.sbp) && !v.rv && !v.bio) return "";
    if (v.rv || v.bio) return out(null, "", "Intermediate risk (submassive) PE", "Stable but RV dysfunction and/or raised troponin or BNP. LMWH for most (UFH if a procedure may be needed); admit to telemetry, step-down, or ICU; anticoagulate at least 3 months.", "warn");
    return out(null, "", "Low risk PE", "Stable, no RV strain, normal biomarkers. DOAC preferred, at least 3 months; outpatient or early discharge if PESI is low.", "ok");
  });

  R("sc-vte-plan", function (v) {
    var drug = { general: "DOAC (factor Xa inhibitor) preferred", cancer: "DOAC or LMWH", pregnancy: "LMWH (warfarin is not used in pregnancy)", aps: "Warfarin" }[v.pop] || "";
    var dur = { provoked: "3 months", unprovoked: "At least 3 months, then reassess; extended (often 6-12 months) is common", recurrent: "Indefinite", persistent: "Extended treatment" }[v.kind] || "";
    return out(null, "", drug, "Duration: " + dur + ".", "ok");
  });

  R("sc-map", function (v, fmt) {
    if (miss(v.sbp, v.dbp)) return "";
    var map = (v.sbp + 2 * v.dbp) / 3;
    var low = map < 65;
    return out(fmt(map), "mmHg MAP", low ? "Below the resuscitation goal" : map > 90 ? "Above the normal range" : "At or above goal",
      "Goal MAP 65 or more (normal 65-90); also SBP 90 or more." , low ? "bad" : "ok") + tag("MAP = (SBP + 2 × DBP) ÷ 3 (standard teaching).");
  });

  R("sc-urine", function (v, fmt) {
    if (miss(v.wt, v.ml, v.hr) || v.wt <= 0 || v.hr <= 0) return "";
    var rate = v.ml / v.wt / v.hr;
    return out((Math.round(rate * 100) / 100).toFixed(2), "mL/kg/h", rate > 0.5 ? "Adequate urine output" : "Low urine output",
      "Goal over 0.5 mL/kg/h (about 35 mL/h for an average adult). Low output means the kidneys are still underperfused.", rate > 0.5 ? "ok" : "bad");
  });

  R("sc-osm", function (v, fmt) {
    if (miss(v.na, v.glu, v.bun)) return "";
    var calc = 2 * v.na + v.glu / 18 + v.bun / 2.8;
    var html = out(fmt(calc), "mOsm/kg calculated", calc < 275 ? "Low calculated osmolality" : calc > 295 ? "High calculated osmolality" : "Normal (275-295)", "2 × Na + glucose ÷ 18 + BUN ÷ 2.8", calc < 275 || calc > 295 ? "warn" : "ok");
    if (isFinite(v.meas)) {
      var gap = v.meas - calc;
      html += out(fmt(gap), "osmolal gap", gap > 10 ? "Elevated osmolal gap" : "Normal gap", gap > 10 ? "Over 10: an unmeasured solute is in the blood." : "Under 10 is normal.", gap > 10 ? "bad" : "ok");
    }
    return html;
  });

  R("sc-three-one", function (v, fmt) {
    if (miss(v.loss)) return "";
    var c = v.loss * 3;
    return out(fmt(c), "mL isotonic crystalloid", "3:1 rule", "Only about 30% of crystalloid stays in the vessels, so replace each mL of blood with about 3 mL. After about 2 L of rapid crystalloid, consider blood to avoid hemodilution." , c > 2000 ? "warn" : "ok");
  });

  R("sc-dopamine", function (v, fmt) {
    if (miss(v.dose)) return "";
    var html;
    if (v.dose < 3) html = out(fmt(v.dose), "mcg/kg/min", "Low dose: dopaminergic", "Renal and mesenteric vasodilation; more renal blood flow and urine.", "ok");
    else if (v.dose <= 10) html = out(fmt(v.dose), "mcg/kg/min", "Intermediate dose: β1 + dopaminergic", "More contractility, heart rate, and cardiac output.", "warn");
    else html = out(fmt(v.dose), "mcg/kg/min", "High dose: α1 vasoconstriction", "Peripheral vasoconstriction; renal vasoconstriction can cause renal necrosis and failure.", "bad");
    if (isFinite(v.wt)) html += tag("For " + fmt(v.wt) + " kg: " + fmt(v.dose * v.wt) + " mcg/min.");
    return html;
  });

  R("sc-shock-type", function (v) {
    if (!v.jvp || !v.skin) return "";
    if (v.skin === "warm" && v.jvp === "low") return out(null, "", "Distributive pattern", "Vasodilation (sepsis, anaphylaxis, neurogenic): treat the cause; fluids and a vasopressor (norepinephrine) as indicated.", "warn");
    if (v.jvp === "low") return out(null, "", "Hypovolemic pattern", "Volume loss: isotonic crystalloid; if bleeding, control the source and give blood.", "warn");
    if (v.lungs === "wet") return out(null, "", "Cardiogenic pattern", "Pump failure with congestion: hold boluses, norepinephrine (± dobutamine if SBP 90 or more), revascularize.", "bad");
    return out(null, "", "Obstructive pattern", "High venous pressure with clear lungs: think tamponade, massive PE, tension pneumothorax. Urgently relieve the obstruction.", "bad");
  });

  R("sc-weight-doses", function (v, fmt) {
    if (miss(v.wt) || v.wt <= 0) return "";
    var w = v.wt;
    var rows = [
      ["Lidocaine (VT/VF)", fmt(1 * w) + "–" + fmt(1.5 * w) + " mg first, then " + fmt(0.5 * w) + "–" + fmt(0.75 * w) + " mg every 5-10 min; max " + fmt(3 * w) + " mg"],
      ["Procainamide load", fmt(10 * w) + "–" + fmt(17 * w) + " mg at 20-50 mg/min (arrhythmias deck: max 15 mg/kg = " + fmt(Math.min(15 * w, 1500)) + " mg, never over 1500 mg)"],
      ["Ibutilide", w < 60 ? fmt(0.01 * w) + " mg over 10 min (0.01 mg/kg, under 60 kg)" : "1 mg over 10 min (60 kg or more)"],
      ["Diltiazem IV bolus", fmt(0.25 * w) + " mg (0.25 mg/kg; usually 10-20 mg)"]
    ];
    return '<table class="learn-table calc-table"><tbody>' + rows.map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("") + "</tbody></table>";
  });

  R("sc-qt-drug", function (v, fmt) {
    if (miss(v.qtc, v.crcl)) return "";
    if (v.drug === "sotalol") {
      var bad = [];
      if (v.qtc > 450) bad.push("baseline QTc over 450 ms");
      if (v.crcl < 40) bad.push("CrCl under 40 mL/min");
      return bad.length ? out(null, "", "Sotalol contraindicated", "Because of " + bad.join(" and ") + ".", "bad") :
        out(null, "", "Sotalol allowed", "Dose by renal function and QTc; check for other QT-prolonging drugs, asthma, AV block, bradycardia.", "ok");
    }
    var bad2 = [];
    if (v.qtc > 440) bad2.push("QTc over 440 ms");
    if (v.crcl < 20) bad2.push("severe renal insufficiency (CrCl under 20, standard teaching)");
    if (v.lqts) bad2.push("congenital long QT");
    return bad2.length ? out(null, "", "Dofetilide contraindicated", "Because of " + bad2.join(" and ") + ".", "bad") :
      out(null, "", "Dofetilide allowed", "Start in hospital for 3 days with CrCl, QT, and rhythm monitoring.", "ok");
  });

  R("sc-digoxin", function (v, fmt) {
    var html = "";
    if (isFinite(v.level)) {
      html += out(fmt(v.level), "ng/mL", v.level > 2 ? "Above range: toxicity risk" : v.level < 0.5 ? "Below range" : "In range (0.5-2)", v.level > 2 ? "Risk rises above 2.0 ng/mL." : "", v.level > 2 ? "bad" : "ok");
    }
    var fab = v.arr || v.organ || (isFinite(v.k) && v.k > 5.5);
    if (fab) html += out(null, "", "Give DigiFab", "Indicated for life-threatening arrhythmia, K+ over 5.5, or end-organ damage (renal failure, AMS).", "bad");
    else if (isFinite(v.level) || isFinite(v.k)) html += out(null, "", "No DigiFab criteria yet", "Supportive care: atropine for bradycardia, IV fluids for hypotension; charcoal 1 g/kg if within 1-2 h of ingestion and the airway is safe.", "ok");
    if (isFinite(v.k) && v.k < 3.5) html += out(null, "", "Hypokalemia", "Low K+ increases digoxin toxicity.", "warn");
    return html;
  });

  /* ---------- content ---------- */

  window.CARDIO_PART2_SCORES = { lectures: [

    L("arrhythmias", "Arrhythmias", [
      D("sc-instability", "Unstable arrhythmia checklist", "Any sign that the rhythm is starving the body of perfusion makes the patient unstable, and the plan switches from drugs to electricity.", [
        S("calc", "Calculator", P("sc-instability", [
          ["Hypotension: SBP under 90 or signs of systemic hypoperfusion", 1],
          ["Altered mentation", 1],
          ["Ischemic chest pain", 1],
          ["Dyspnea from pulmonary edema", 1],
          ["Ventricular rate over 220-240 bpm", 1]
        ], [[0, "Stable", "Identify the rhythm first (narrow or wide, regular or irregular) and use the matching drug."], [1, "Unstable", "Electrical therapy: synchronized cardioversion for a tachycardia; atropine then pacing for a bradycardia (standard teaching for the bradycardia step)."]])),
        S("use", "What it means", "<p>One positive sign is enough. The question is whether the rhythm is the <strong>cause</strong> of the instability: a heart rate of 115 in a septic patient is a response, not the culprit.</p>" + HY("Instability = hypotension, altered mentation, ischemic chest pain, pulmonary edema.")),
        S("traps", "Watch for", "<ul><li>Treating a compensatory sinus tachycardia with cardioversion.</li><li>Waiting for drugs to work in an unstable patient.</li></ul>")
      ], [
        Q("calc", "A patient in SVT at 190 has BP 82/50 and is confused. How many instability signs, and what next?", ["Two; synchronized cardioversion", "Zero; adenosine", "One; diltiazem", "Two; IV metoprolol"], 0, "Hypotension and altered mentation make the patient unstable: electrical therapy."),
        Q("calc", "A patient in AF at 150 has BP 128/76, no chest pain, and is alert. Stable or unstable?", ["Stable", "Unstable", "Unstable because of the rate", "Cannot tell without an echo"], 0, "No instability signs; rate 150 is under the 220-240 threshold."),
        Q("use", "Which of these is NOT one of the slide's instability indicators?", ["Palpitations alone", "Ischemic chest pain", "Dyspnea from pulmonary edema", "Altered mentation"], 0, "Palpitations alone don't indicate instability."),
        Q("traps", "A septic patient has sinus tachycardia at 125 and BP 84/50. Should you cardiovert?", ["No, the tachycardia is a response to sepsis, not the cause", "Yes, she is unstable", "Yes, then give adenosine", "Only if the rate rises above 150"], 0, "Instability must be caused by the rhythm; treat sepsis."),
        Q("calc", "What adult ventricular rate alone is listed as an instability indicator?", ["Over 220-240 bpm", "Over 100 bpm", "Over 150 bpm", "Over 180 bpm"], 0, "Rapid ventricular rate over 220-240 bpm."),
        Q("use", "A patient in VT with a pulse has crushing chest pain and rales. What is the plan?", ["Synchronized cardioversion", "Oral amiodarone", "Observation", "Adenosine"], 0, "Ischemic chest pain and pulmonary edema = unstable.")
      ]),

      D("sc-ekg-intervals", "EKG interval checker", "Three numbers sort most rhythm questions: a PR over 200 is first-degree block, a short PR with a delta wave is WPW, and a QRS of 120 or more is wide.", [
        S("calc", "Calculator", F("sc-ekg-intervals", [
          { name: "pr", label: "PR interval", unit: "ms" },
          { name: "qrs", label: "QRS duration", unit: "ms" },
          { name: "delta", label: "Slurred QRS upstroke (delta wave)", type: "check" },
          { name: "pp", label: "Variation between P-P intervals", unit: "s" }
        ]) + tag("1 small box = 40 ms (0.04 s); 1 large box = 200 ms (standard teaching).")),
        S("use", "What it means", Tbl(["Finding", "Cutoff"], [
          ["First-degree AV block", "PR over 200 ms"],
          ["WPW pattern", "PR under 120 ms + delta wave"],
          ["Narrow (supraventricular) QRS", "Under 120 ms"],
          ["Sinus arrhythmia", "P-P varies by 0.12 s or more"]
        ])),
        S("traps", "Watch for", "<ul><li>Calling a short PR WPW without a delta wave.</li><li>Calling phasic sinus arrhythmia (faster on inspiration) pathologic.</li></ul>")
      ], [
        Q("calc", "PR interval is 6 small boxes. What is it in ms and what does it mean?", ["240 ms, first-degree AV block", "120 ms, normal", "240 ms, normal", "60 ms, WPW"], 0, "6 × 40 ms = 240 ms, over 200."),
        Q("calc", "PR is 100 ms with a slurred QRS upstroke. What is the pattern?", ["WPW (pre-excitation)", "First-degree AV block", "Mobitz I", "Normal"], 0, "Short PR under 120 ms + delta wave."),
        Q("calc", "QRS duration is 3 small boxes. Narrow or wide?", ["Wide (120 ms)", "Narrow (120 ms is under the cutoff)", "Narrow (60 ms)", "Cannot tell"], 0, "3 × 40 = 120 ms; 120 or more is wide."),
        Q("calc", "A healthy 19-year-old's P-P intervals vary by 0.16 s, faster on inspiration. What is it?", ["Phasic sinus arrhythmia", "Atrial fibrillation", "Sick sinus syndrome", "MAT"], 0, "Variation of 0.12 s or more = sinus arrhythmia; phasic varies with breathing."),
        Q("use", "What PR interval defines first-degree AV block?", ["Over 200 ms", "Over 120 ms", "Over 300 ms", "Under 120 ms"], 0, "Prolonged PR over 200 ms."),
        Q("use", "A regular tachycardia at 180 has a QRS of 90 ms. Where does the rhythm come from?", ["Above the ventricles (supraventricular)", "The ventricles", "A ventricular escape focus", "Cannot be determined"], 0, "QRS under 120 ms means normal conduction through the His-Purkinje system.")
      ])
    ]),

    L("syncope", "Syncope", [
      D("sc-orthostatic", "Orthostatic vitals", "Measure lying and again within 3 minutes of standing: a 20 systolic or 10 diastolic drop is orthostatic hypotension.", [
        S("calc", "Calculator", F("sc-orthostatic", [
          { name: "ss", label: "Supine systolic", unit: "mmHg" },
          { name: "sd", label: "Supine diastolic", unit: "mmHg" },
          { name: "st", label: "Standing systolic (within 3 min)", unit: "mmHg" },
          { name: "dt", label: "Standing diastolic (within 3 min)", unit: "mmHg" }
        ])),
        S("use", "What it means", "<p>Orthostatic hypotension is a <strong>sign</strong> you measure; orthostatic syncope is the <strong>symptom</strong>. A positive test plus a fitting history (standing up, diuretics, volume loss, Parkinson's) supports orthostatic syncope, a low-risk cause usually managed as an outpatient.</p>" + HY("20 systolic OR 10 diastolic, within 3 minutes of standing.")),
        S("traps", "Watch for", "<ul><li>Needing both drops: either one counts.</li><li>Checking only at 10 minutes: the definition is within 3 minutes.</li></ul>")
      ], [
        Q("calc", "Supine 132/80, standing at 2 minutes 108/76. Orthostatic hypotension?", ["Yes, systolic fell 24", "No, diastolic fell only 4", "No, both must drop", "Yes, but only because standing BP is under 110"], 0, "A systolic drop of 20 or more is enough."),
        Q("calc", "Supine 118/78, standing 110/66. Orthostatic hypotension?", ["Yes, diastolic fell 12", "No, systolic fell only 8", "No, BP is normal", "Cannot tell"], 0, "A diastolic drop of 10 or more is enough."),
        Q("calc", "Supine 140/86, standing 126/80. Orthostatic hypotension?", ["No, drops are 14 and 6", "Yes, systolic fell 14", "Yes, any drop counts", "Yes, diastolic fell 6"], 0, "Neither threshold is met."),
        Q("use", "Within what time of standing does the definition require the drop?", ["3 minutes", "30 seconds", "10 minutes", "1 hour"], 0, "Sustained reduction within 3 minutes of standing."),
        Q("use", "An older man on a new diuretic faints when getting out of bed and has a 26 mmHg systolic drop. What is the likely category?", ["Orthostatic syncope", "Cardiac syncope", "Reflex syncope", "Seizure"], 0, "Positive orthostatics + fitting history."),
        Q("traps", "Which statement is correct?", ["Orthostatic hypotension is a sign; orthostatic syncope is a symptom", "They are the same thing", "Orthostatic hypotension always causes syncope", "Orthostatic syncope needs a tilt table to diagnose"], 0, "From the syncope slides.")
      ]),

      D("sc-syncope-risk", "Syncope high-risk features", "If the cause is unclear, any high-risk feature means admission for evaluation and cardiac monitoring; a low-risk, asymptomatic patient can go home with follow-up.", [
        S("calc", "Calculator", P("sc-syncope-risk", [
          ["Abnormal EKG", 1],
          ["Suspected structural heart disease, especially a history of heart failure", 1],
          ["Hematocrit under 30", 1],
          ["Shortness of breath", 1],
          ["SBP under 90", 1],
          ["Family history of sudden cardiac death", 1],
          ["Advanced age with comorbidities", 1]
        ], [[0, "Low risk", "Unexplained but low risk and asymptomatic: discharge with follow-up."], [1, "High risk", "Admit for evaluation and cardiac monitoring."]])),
        S("use", "What it means", Tbl(["High-risk EKG: diagnostic", "High-risk EKG: suspicious"], [
          ["Mobitz II or 3rd-degree block", "Bifascicular block"],
          ["Alternating bundle branch block", "Q waves"],
          ["Pauses over 3 s or brady under 40 awake", "Delta wave; long or short QT"],
          ["Sustained VT, or SVT over 160", "Brugada type 1"],
          ["Acute ischemia", "LVH pattern; paced rhythm"]
        ]) + "<p>No set age cutoff; under 45 with no other factors appears low risk.</p>"),
        S("traps", "Watch for", "<ul><li>Admitting a clear vasovagal faint: no increased morbidity or mortality.</li><li>Sending home a patient whose only flag is a delta wave or long QT.</li></ul>")
      ], [
        Q("calc", "A 72-year-old with heart failure faints without warning; EKG is normal and BP is 124/70. Admit?", ["Yes, one high-risk feature (heart failure)", "No, EKG is normal", "No, BP is normal", "Only if troponin is up"], 0, "Suspected structural heart disease, especially HF, is high risk."),
        Q("calc", "A 24-year-old faints during a blood draw with a warm, sweaty prodrome; EKG and vitals normal. What next?", ["Discharge with follow-up", "Admit for telemetry", "Tilt table now", "Echo before discharge"], 0, "Clear vasovagal cause: discharge."),
        Q("calc", "Unexplained syncope with a hematocrit of 26. What does this add?", ["A high-risk feature: admit", "Nothing", "Rules out cardiac cause", "Only matters if SBP is under 90"], 0, "Hct under 30 is a high-risk criterion."),
        Q("use", "Which EKG finding is DIAGNOSTIC (not just suspicious) for arrhythmic syncope?", ["Mobitz II block", "LVH pattern", "Q waves", "Bifascicular block"], 0, "Mobitz II/3rd-degree block are diagnostic findings."),
        Q("use", "Which finding on the EKG of a syncope patient is suspicious and needs monitoring or workup?", ["Delta wave", "Sinus rhythm at 72", "Normal PR", "Narrow QRS"], 0, "Delta wave is a suspicious finding."),
        Q("traps", "A 30-year-old faints while running; her father died suddenly at 40. Discharge?", ["No, family history of sudden death makes her high risk", "Yes, she is young", "Yes, exertional syncope is benign", "Only after a normal EKG"], 0, "FHx of sudden cardiac death is high risk; exertional syncope is concerning too.")
      ])
    ]),

    L("arrhythmia-management", "Inpatient & Long-Term Arrhythmia Management", [
      D("sc-chadsvasc", "CHA2DS2-VASc", "Stroke risk in non-valvular AF: 0-1 points aspirin, 2 individualize (anticoagulation preferred), 3 or more anticoagulate.", [
        S("calc", "Calculator", P("sc-chadsvasc", [
          ["C: Congestive heart failure / LV dysfunction", 1],
          ["H: Hypertension (any history)", 1],
          { group: "A: Age", options: [["Under 65", 0], ["65-74", 1], ["75 or older", 2]] },
          ["D: Diabetes mellitus", 1],
          ["S2: Prior stroke, TIA, or other embolic event", 2],
          ["V: Vascular disease (MI, PAD, aortic plaque)", 1],
          ["Sc: Sex category female", 1]
        ], [
          [0, "0 points: 0.2% stroke risk/yr", "Aspirin 81-325 mg alone (score 0-1)."],
          [1, "1 point: 0.6%/yr", "Aspirin 81-325 mg alone (score 0-1)."],
          [2, "2 points: 2.2%/yr", "Individualize aspirin vs anticoagulation; anticoagulation preferred."],
          [3, "3 points: 3.2%/yr", "Anticoagulate: DOAC preferred over warfarin."],
          [4, "4 points: 4.8%/yr", "Anticoagulate: DOAC preferred."],
          [5, "5 points: 7.2%/yr", "Anticoagulate: DOAC preferred."],
          [6, "6 points: 9.7%/yr", "Anticoagulate: DOAC preferred."],
          [7, "7 points: 11.2%/yr", "Anticoagulate: DOAC preferred."],
          [8, "8 points: 10.8%/yr", "Anticoagulate: DOAC preferred."],
          [9, "9 points: 12.2%/yr", "Anticoagulate: DOAC preferred."]
        ])),
        S("use", "What it means", "<p>Stroke risk is the same in paroxysmal, persistent, and permanent AF, so every AF patient gets a score. It was built for <strong>non-valvular</strong> AF not tied to cardiac surgery. Age counts 1 at 65-74 and 2 at 75 or older (never both).</p>" + Mn("Mnemonic", "C-H-A2-D-S2-V-A-Sc: the two 2s are Age 75+ and Stroke/TIA.")),
        S("traps", "Watch for", "<ul><li>Adding 1 for 65+ AND 2 for 75+: a 78-year-old gets 2 for age, not 3.</li><li>Using it for mechanical valves or mitral stenosis: those patients need warfarin regardless.</li><li>Forgetting female sex.</li></ul>")
      ], [
        Q("calc", "Marty is 90, never sick, and just had a TIA. CHA2DS2-VASc?", ["4", "3", "2", "5"], 0, "Age 75+ = 2, TIA = 2: total 4."),
        Q("calc", "A 68-year-old woman with hypertension and diabetes. Score and plan?", ["4; anticoagulate (DOAC preferred)", "3; aspirin", "2; individualize", "4; aspirin"], 0, "Age 65-74 = 1, female = 1, HTN = 1, DM = 1: 4."),
        Q("calc", "A 55-year-old man with no medical history has paroxysmal AF. Score and plan?", ["0; aspirin alone", "1; anticoagulate", "0; no stroke prevention needed ever", "2; DOAC"], 0, "Score 0: aspirin 81-325 per the slides."),
        Q("calc", "A 77-year-old man with prior MI. Score?", ["3", "4", "2", "1"], 0, "Age 75+ = 2, vascular disease = 1."),
        Q("calc", "A 60-year-old woman with heart failure. Score and plan?", ["2; individualize, anticoagulation preferred", "1; aspirin", "3; anticoagulate", "2; aspirin only"], 0, "Female 1 + CHF 1 = 2."),
        Q("use", "What annual stroke risk matches a CHA2DS2-VASc of 2?", ["2.2%", "0.6%", "4.8%", "9.7%"], 0, "From the slide table."),
        Q("traps", "A 80-year-old woman with a mechanical mitral valve and AF. Why doesn't her score decide the drug?", ["The score is for non-valvular AF; a mechanical valve needs warfarin", "Her score is too low", "DOACs are preferred at any score", "She needs aspirin only"], 0, "Scores were developed for non-valvular AF; DOACs can't be used with mechanical valves."),
        Q("traps", "A 72-year-old man with no other history. What is his age score?", ["1", "2", "3", "0"], 0, "65-74 = 1 point.")
      ]),

      D("sc-hasbled", "HAS-BLED", "Bleeding risk on warfarin: a score over 3 is high risk, so fix what you can and keep reviewing the indication.", [
        S("calc", "Calculator", P("sc-hasbled", [
          ["H: Hypertension, SBP over 160", 1],
          ["A: Abnormal renal function", 1],
          ["A: Abnormal liver function", 1],
          ["S: Stroke", 1],
          ["B: Prior major bleeding", 1],
          ["L: Labile INRs", 1],
          ["E: Elderly, age over 65", 1],
          ["D: Drugs (antiplatelets)", 1],
          ["D: Heavy alcohol", 1]
        ], [
          [0, "0: 1.13 major bleeds per 100 patient-years", ""],
          [1, "1: 1.02 per 100 patient-years", ""],
          [2, "2: 1.88 per 100 patient-years", ""],
          [3, "3: 3.74 per 100 patient-years", "Not yet 'high risk' by the slide's cutoff (over 3)."],
          [4, "4: 8.70 per 100 patient-years: high risk", "Use caution, review the indication regularly, correct risks (control BP, stop extra antiplatelets/alcohol)."],
          [5, "5: 12.5 per 100 patient-years: high risk", "Use caution and correct bleeding risks."],
          [6, "6 or more: very high risk", "Use caution and correct bleeding risks."]
        ])),
        S("use", "What it means", "<p>Major bleed = intracranial, hospitalization, Hgb drop over 2 g, or transfusion. If HAS-BLED is <strong>higher than CHA2DS2-VASc</strong>, bleeding risk may outweigh the stroke benefit (the slides note these rules aren't study-proven). A high score is a reason to fix risks, not automatically to withhold anticoagulation.</p>" + HY("HAS-BLED over 3 = high bleeding risk.")),
        S("traps", "Watch for", "<ul><li>Counting any hypertension: the point needs SBP over 160.</li><li>Renal and liver are 1 point each; drugs and alcohol are 1 point each.</li></ul>")
      ], [
        Q("calc", "A 70-year-old on aspirin with labile INRs and SBP 168. HAS-BLED?", ["4", "3", "2", "5"], 0, "Elderly 1, drugs 1, labile INR 1, HTN over 160 1."),
        Q("calc", "A 58-year-old with cirrhosis and CKD, no other factors. HAS-BLED?", ["2", "1", "3", "0"], 0, "Abnormal liver and renal function are 1 point each."),
        Q("use", "What HAS-BLED score is high risk per the slides?", ["Over 3", "Over 1", "2 or more", "Over 6"], 0, "HAS-BLED over 3 indicates high risk."),
        Q("use", "A patient's HAS-BLED is 5 and CHA2DS2-VASc is 3. What does the slide suggest?", ["Bleeding risk may exceed the anticoagulation benefit", "Anticoagulation is clearly indicated", "Switch to aspirin automatically", "Scores can't be compared"], 0, "HAS-BLED greater than CHA2DS2-VASc: major bleeding risk may exceed the benefit."),
        Q("traps", "A patient with well-controlled hypertension (130/80). Does he get the H point?", ["No, the point requires SBP over 160", "Yes, any history counts", "Yes, if on medication", "Only if over 65"], 0, "HAS-BLED H = SBP over 160 (unlike CHA2DS2-VASc)."),
        Q("use", "A high HAS-BLED from uncontrolled BP and NSAID use. Best response?", ["Correct the bleeding risks (control BP, stop NSAIDs) and keep reviewing", "Stop anticoagulation permanently", "Double the warfarin", "Ignore it"], 0, "Correct bleeding risks; use caution.")
      ]),

      D("sc-doac", "DOAC dose check", "Each DOAC has its own renal and patient-size rules; mechanical valves and significant mitral disease always mean warfarin.", [
        S("calc", "Calculator", F("sc-doac", [
          { name: "drug", label: "Drug", type: "select", options: [["apixaban", "Apixaban"], ["rivaroxaban", "Rivaroxaban"], ["dabigatran", "Dabigatran"], ["edoxaban", "Edoxaban"]] },
          { name: "valve", label: "Mechanical valve or significant native mitral valve disease", type: "check" },
          { name: "age", label: "Age (apixaban)", unit: "yr" },
          { name: "wt", label: "Weight (apixaban)", unit: "kg" },
          { name: "scr", label: "Serum creatinine (apixaban)", unit: "mg/dL" },
          { name: "gfr", label: "GFR / CrCl (others)", unit: "mL/min" }
        ])),
        S("use", "What it means", Tbl(["Drug", "Standard dose", "Adjust"], [
          ["Apixaban (Xa)", "5 mg BID", "2.5 mg BID if 2 of 3: SCr ≥ 1.5, age ≥ 80, weight ≤ 60 kg; OK with caution in ESRD"],
          ["Rivaroxaban (Xa)", "20 mg daily with largest meal", "15 mg daily if GFR 15-50"],
          ["Dabigatran (thrombin)", "150 mg BID", "Avoid if GFR ≤ 30"],
          ["Edoxaban (Xa)", "60 mg daily", "30 mg if GFR ≤ 50; not if GFR ≥ 95 or ≤ 30"],
          ["Warfarin", "INR 2-3", "Drug of choice: mechanical valve, significant mitral disease, ESRD"]
        ]) + "<p>Caution with DOACs when BMI is over 40.</p>"),
        S("traps", "Watch for", "<ul><li>Reducing apixaban for just one criterion: it needs two.</li><li>Edoxaban fails at both ends: too low AND too high GFR.</li></ul>")
      ], [
        Q("calc", "Apixaban for an 82-year-old, 58 kg, SCr 1.1. Dose?", ["2.5 mg twice daily", "5 mg twice daily", "2.5 mg daily", "Avoid apixaban"], 0, "Age ≥ 80 and weight ≤ 60: 2 of 3 criteria."),
        Q("calc", "Apixaban for an 84-year-old, 75 kg, SCr 1.0. Dose?", ["5 mg twice daily", "2.5 mg twice daily", "10 mg daily", "Avoid"], 0, "Only 1 of 3 criteria (age)."),
        Q("calc", "Rivaroxaban for a patient with GFR 40. Dose?", ["15 mg once daily", "20 mg once daily", "10 mg twice daily", "Avoid"], 0, "GFR 15-50: 15 mg daily."),
        Q("calc", "Edoxaban for a patient with GFR 110. What is the issue?", ["It can't be used when GFR is 95 or more", "Give 60 mg", "Give 30 mg", "No issue"], 0, "Edoxaban is not used at GFR ≥ 95."),
        Q("calc", "Dabigatran for a patient with GFR 25. Plan?", ["Avoid dabigatran", "150 mg BID", "75 mg BID", "Give with food"], 0, "Avoid if GFR ≤ 30."),
        Q("use", "AF patient with a mechanical aortic valve. Which anticoagulant?", ["Warfarin, INR 2-3", "Apixaban 5 mg BID", "Rivaroxaban 20 mg", "Dabigatran 150 mg BID"], 0, "DOACs can't be used with mechanical valves."),
        Q("use", "Which DOAC is acceptable with caution in ESRD per the slides?", ["Apixaban", "Dabigatran", "Edoxaban", "Rivaroxaban"], 0, "Apixaban is the exception for ESRD."),
        Q("traps", "When should rivaroxaban be taken?", ["With the largest meal of the day", "On an empty stomach", "At bedtime without food", "Twice daily with milk"], 0, "From the slides.")
      ]),

      D("sc-flutter", "Atrial flutter ventricular rate", "Atrial rate divided by the conduction ratio gives the ventricular rate: about 300 ÷ 2 = 150, 300 ÷ 3 = 100.", [
        S("calc", "Calculator", F("sc-flutter", [
          { name: "atrial", label: "Atrial (flutter wave) rate", unit: "bpm", placeholder: "300" },
          { name: "ratio", label: "AV conduction", type: "select", options: [["2", "2:1"], ["3", "3:1"], ["4", "4:1"], ["1", "1:1"]] }
        ])),
        S("use", "What it means", "<p>A <strong>regular narrow tachycardia at about 150</strong> should make you look for flutter waves (sawtooth, best in II, III, aVF and V1). Typical flutter atrial rate is about 300 (standard teaching).</p>" + HY("2:1 = 150 bpm; 3:1 = 100 bpm.")),
        S("traps", "Watch for", "<ul><li>Calling 2:1 flutter at 150 sinus tachycardia.</li><li>1:1 conduction (e.g., IC drug slowing the flutter without an AV blocker) gives a dangerously fast rate.</li></ul>")
      ], [
        Q("calc", "Flutter waves at 300 with 2:1 conduction. Ventricular rate?", ["150", "100", "300", "75"], 0, "300 ÷ 2."),
        Q("calc", "Flutter waves at 300 with 3:1 conduction. Ventricular rate?", ["100", "150", "75", "60"], 0, "300 ÷ 3."),
        Q("calc", "Flutter waves at 280 with 4:1 conduction. Ventricular rate?", ["70", "140", "93", "56"], 0, "280 ÷ 4."),
        Q("calc", "Flecainide slows a flutter to 220 and the node now conducts 1:1. Ventricular rate?", ["220", "110", "73", "300"], 0, "1:1 conduction = every flutter wave conducts; this is the boxed warning."),
        Q("use", "A regular narrow tachycardia at exactly 150 that doesn't vary. What should you look for?", ["Flutter waves with 2:1 block", "P waves of sinus tach only", "Delta waves", "Wide QRS"], 0, "2:1 flutter classically gives a rate of 150."),
        Q("use", "Where are flutter waves best seen?", ["Inferior leads and V1", "aVR only", "V5-V6 only", "Lead I"], 0, "From the slides.")
      ])
    ]),

    L("ie-pericardial", "Infective Endocarditis & Pericardial Disease", [
      D("sc-duke", "Duke criteria (2023)", "Definite clinical IE needs 2 major, or 1 major + 3 minor, or 5 minor criteria.", [
        S("calc", "Calculator", F("sc-duke", [
          { name: "m1", label: "MAJOR, microbiology: typical organism in 2+ blood cultures, atypical in 3+, or positive Coxiella / Bartonella / Tropheryma test", type: "check" },
          { name: "m2", label: "MAJOR, imaging: vegetation, perforation, abscess, pseudoaneurysm, fistula; NEW regurgitation; new prosthetic dehiscence; or abnormal PET/CT valve activity", type: "check" },
          { name: "m3", label: "MAJOR, surgical: IE seen at direct inspection during heart surgery", type: "check" },
          { name: "n1", label: "Minor: predisposition (prior IE, prosthetic valve or repair, congenital disease, more than mild valve disease, CIED, HOCM, IVDA)", type: "check" },
          { name: "n2", label: "Minor: fever 100.4 °F or higher", type: "check" },
          { name: "n3", label: "Minor: vascular phenomena (arterial or septic emboli, abscess, mycotic aneurysm, ICH, conjunctival hemorrhage, Janeway lesions, purpura)", type: "check" },
          { name: "n4", label: "Minor: immunologic phenomena (+ RF, Osler nodes, Roth spots, immune-complex GN)", type: "check" },
          { name: "n5", label: "Minor: microbiologic evidence not meeting a major criterion", type: "check" }
        ])),
        S("use", "What it means", "<p>Work-up: 3 blood cultures from separate sites, then TTE (TEE if negative). Worsening of <em>pre-existing</em> regurgitation does <strong>not</strong> count as the imaging major criterion; it must be new.</p>" + Mn("Remember", "2 major · 1 + 3 · 5 minor.")),
        S("traps", "Watch for", "<ul><li>Janeway lesions are vascular (embolic); Osler nodes and Roth spots are immunologic.</li><li>One positive culture of a typical organism is only a minor criterion.</li></ul>")
      ], [
        Q("calc", "S. aureus in 3 of 3 blood cultures and a mitral vegetation on TEE. Duke result?", ["Definite IE (2 major)", "Possible IE", "Rejected", "Needs 3 minor"], 0, "Microbiology major + imaging major."),
        Q("calc", "Strep viridans in 2 cultures, fever 101.5, prior IE, and Janeway lesions. Definite?", ["Yes: 1 major + 3 minor", "No: only 1 major", "No: needs echo", "Yes: 4 major"], 0, "Typical organism in 2 cultures = major; predisposition, fever, vascular = 3 minor."),
        Q("calc", "IV drug user with fever, Osler nodes, septic pulmonary emboli, and one positive culture of S. aureus. Count?", ["0 major, 5 minor: definite", "1 major, 4 minor: definite", "0 major, 4 minor: not definite", "2 major"], 0, "Single culture = minor microbiology; IVDA, fever, emboli (vascular), Osler (immunologic) = 5 minor."),
        Q("calc", "Fever, prosthetic valve, and Roth spots; cultures negative, echo negative. Definite?", ["No: 3 minor only", "Yes: 3 minor is enough", "Yes: prosthetic valve is major", "Yes: Roth spots are major"], 0, "Needs 5 minor without a major."),
        Q("use", "Worsening of known mitral regurgitation on echo. Does it meet the imaging major criterion?", ["No, regurgitation must be new", "Yes", "Only on TEE", "Only with fever"], 0, "Worsening pre-existing regurgitation is NOT sufficient."),
        Q("traps", "Janeway lesions belong to which Duke category?", ["Vascular phenomena (minor)", "Immunologic phenomena (minor)", "Major imaging", "Major microbiology"], 0, "Janeway lesions are listed under vascular phenomena."),
        Q("traps", "Which is an immunologic minor criterion?", ["Positive rheumatoid factor", "Conjunctival hemorrhage", "Mycotic aneurysm", "Septic pulmonary emboli"], 0, "Immunologic: + RF, Osler nodes, Roth spots, GN.")
      ]),

      D("sc-pulsus", "Pulsus paradoxus", "Systolic BP that falls more than 10 mmHg on inspiration supports tamponade.", [
        S("calc", "Calculator", F("sc-pulsus", [
          { name: "exp", label: "SBP on expiration (first sounds heard)", unit: "mmHg" },
          { name: "insp", label: "SBP when sounds are heard throughout the cycle", unit: "mmHg" }
        ]) + tag("Deflate slowly: note when Korotkoff sounds appear only on expiration, then when they're heard on every beat. The difference is the inspiratory fall (standard teaching).")),
        S("use", "What it means", "<p>Pulsus paradoxus goes with the tamponade picture: Beck's triad (hypotension, JVD, muffled sounds), narrow pulse pressure, tachycardia, low voltage and electrical alternans on EKG. Echo is the test of choice; treatment is pericardiocentesis.</p>"),
        S("traps", "Watch for", "<ul><li>A fall of exactly 10 is not over 10.</li><li>Giving diuretics for the JVD (standard teaching: it lowers filling and can cause collapse).</li></ul>")
      ], [
        Q("calc", "SBP 118 on expiration and 102 throughout. Pulsus paradoxus?", ["Yes, 16 mmHg fall", "No, 16 is normal", "Yes, any fall counts", "No, needs over 20"], 0, "Over 10 mmHg."),
        Q("calc", "SBP 126 on expiration and 120 throughout. Pulsus paradoxus?", ["No, 6 mmHg is normal", "Yes", "Yes, borderline", "Cannot tell"], 0, "Fall of 10 or less is normal."),
        Q("use", "A patient with hypotension, JVD, muffled sounds, and a 14 mmHg inspiratory fall. Test of choice?", ["Echocardiogram", "CT chest", "Cardiac cath", "D-dimer"], 0, "Echo shows effusion and tamponade."),
        Q("use", "Definitive treatment for that patient?", ["Pericardiocentesis", "IV furosemide", "NSAIDs and colchicine", "Beta blocker"], 0, "Tamponade is an emergency; drain it."),
        Q("traps", "SBP falls exactly 10 mmHg on inspiration. Pulsus paradoxus by the slide definition?", ["No, the definition is a fall greater than 10", "Yes", "Only if JVD is present", "Yes, 10 or more"], 0, "Fall in SBP over 10 mmHg."),
        Q("use", "Which EKG finding goes with a large effusion and tamponade?", ["Electrical (QRS) alternans", "Delta wave", "Diffuse ST depression", "Short PR"], 0, "Low voltage and QRS alternans.")
      ])
    ]),

    L("vascular-1", "Vascular Disease Part 1", [
      D("sc-abi", "Ankle-brachial index", "Ankle systolic ÷ arm systolic: 0.90 or less is PAD, 1.0-1.4 normal, over 1.4 means calcified arteries.", [
        S("calc", "Calculator", F("sc-abi", [
          { name: "rb", label: "Right arm systolic", unit: "mmHg" },
          { name: "lb", label: "Left arm systolic", unit: "mmHg" },
          { name: "ra", label: "Right ankle systolic (DP or PT)", unit: "mmHg" },
          { name: "la", label: "Left ankle systolic (DP or PT)", unit: "mmHg" }
        ])),
        S("use", "What it means", Tbl(["ABI", "Meaning", "Next"], [
          ["Over 1.4", "Non-compressible (calcified)", "Toe-brachial index; refer"],
          ["1.0-1.4", "Normal", "None"],
          ["0.91-0.99", "Borderline", "Exercise treadmill test if symptomatic"],
          ["0.90 or less", "PAD", "Risk factors, medical therapy, refer"],
          ["Under 0.4", "Severe", "Bypass if refractory severe claudication"]
        ]) + "<p>The ABI confirms PAD; it doesn't decide revascularization by itself.</p>"),
        S("traps", "Watch for", "<ul><li>Reading a high ABI in a diabetic as excellent flow.</li><li>Dividing by the lower arm pressure (standard teaching: use the higher one).</li></ul>")
      ], [
        Q("calc", "Arms 140 and 132; right ankle 98. Right ABI?", ["0.70, PAD", "0.74, PAD", "1.43, calcified", "0.95, borderline"], 0, "98 ÷ 140 (higher arm) = 0.70."),
        Q("calc", "Arms 120 and 124; left ankle 186. Left ABI and next step?", ["1.50; toe-brachial index", "1.50; normal", "0.67; PAD", "1.0; normal"], 0, "Over 1.4 = non-compressible; get a TBI."),
        Q("calc", "Arms 130 and 130; ankle 124 with calf claudication. ABI and next step?", ["0.95; exercise treadmill testing", "0.95; PAD confirmed", "1.05; normal, stop", "0.95; bypass"], 0, "Borderline with symptoms: exercise test."),
        Q("calc", "Arms 150 and 146; ankle 52 with refractory severe claudication. ABI and meaning?", ["0.35; severe, bypass indication", "0.35; borderline", "2.9; calcified", "0.85; mild PAD"], 0, "Under 0.4 with refractory severe claudication is a bypass indication."),
        Q("use", "What ABI value confirms PAD?", ["0.90 or less", "Under 1.0", "Over 1.4", "Under 0.5 only"], 0, "≤ 0.90 is abnormal (PAD)."),
        Q("traps", "Why does an ABI of 1.6 not mean great circulation?", ["Calcified arteries resist the cuff, falsely raising the ankle pressure", "It means great circulation", "It means arm disease", "It means the cuff was too small"], 0, "Non-compressible arteries.")
      ]),

      D("sc-aaa", "AAA size and plan", "Size sets the plan: ultrasound every 3 years at 3.0-3.9 cm, tighter as it grows, and repair at 5.5 cm (men) or 5.0 cm (women), with growth over 1 cm/yr, or with symptoms.", [
        S("calc", "Calculator", F("sc-aaa", [
          { name: "d", label: "Aortic diameter", unit: "cm" },
          { name: "sex", label: "Sex", type: "select", options: [["m", "Male"], ["f", "Female"]] },
          { name: "g", label: "Growth in the last year (if known)", unit: "cm/yr" },
          { name: "symp", label: "Symptoms (pain, compression, occlusion) or rupture", type: "check" }
        ])),
        S("use", "What it means", Tbl(["Diameter", "Men", "Women"], [
          ["3.0-3.9 cm", "US every 3 years", "US every 3 years"],
          ["4.0-4.4 cm", "US every 12 months", "US every 12 months"],
          ["4.5-4.9 cm", "US every 12 months", "US every 6 months"],
          ["5.0-5.4 cm", "US every 6 months", "Repair"],
          ["5.5 cm or more", "Repair", "Repair"]
        ]) + "<p>Screen once with ultrasound: men 65+ who ever smoked; men and women 65-75 with a first-degree relative with AAA; women 65+ who smoked (reasonable).</p>"),
        S("traps", "Watch for", "<ul><li>Using the 5.5 cm threshold for a woman.</li><li>Following a fast-growing aneurysm on the usual schedule.</li></ul>")
      ], [
        Q("calc", "A 66-year-old man has a 3.6 cm AAA. Plan?", ["Ultrasound every 3 years", "Every 12 months", "Repair", "No follow-up"], 0, "3.0-3.9 cm: every 3 years."),
        Q("calc", "A 70-year-old woman has a 4.7 cm AAA. Plan?", ["Ultrasound every 6 months", "Every 12 months", "Every 3 years", "Repair"], 0, "Women 4.5-4.9 cm: every 6 months."),
        Q("calc", "A 74-year-old man has a 5.2 cm asymptomatic AAA. Plan?", ["Ultrasound every 6 months", "Repair", "Every 12 months", "Every 3 years"], 0, "Men 5.0-5.4 cm: every 6 months; repair at 5.5."),
        Q("calc", "A 69-year-old woman has a 5.1 cm asymptomatic AAA. Plan?", ["Repair", "Ultrasound every 6 months", "Every 12 months", "Observe"], 0, "Women repair at 5.0 cm."),
        Q("calc", "A man's AAA grew from 4.1 to 5.3 cm in one year. Plan?", ["Repair (growth over 1 cm/yr)", "Ultrasound every 6 months", "Ultrasound every 12 months", "Observe"], 0, "Rapid expansion over 1 cm per year."),
        Q("use", "Who should get one-time AAA screening?", ["A 67-year-old man who smoked in his 20s", "A 50-year-old man who never smoked", "A 40-year-old woman with HTN", "Anyone with back pain"], 0, "Men 65+ who ever smoked."),
        Q("traps", "A 4.4 cm AAA in a woman. Same follow-up as a 4.4 cm AAA in a man?", ["Yes, both every 12 months", "No, the woman needs repair", "No, the woman needs every 6 months", "No, the man needs every 6 months"], 0, "4.0-4.4 cm: every 12 months for both.")
      ])
    ]),

    L("vascular-2", "Vascular Disease Part 2", [
      D("sc-wells-dvt", "Wells score for DVT", "Pretest probability for DVT: low → D-dimer; moderate or high → compression ultrasound.", [
        S("calc", "Calculator", P("sc-wells-dvt", [
          ["Active cancer (treatment within 6 months or palliative)", 1],
          ["Paralysis, paresis, or recent plaster immobilization of the leg", 1],
          ["Bedridden over 3 days or major surgery within 12 weeks", 1],
          ["Localized tenderness along the deep venous system", 1],
          ["Entire leg swollen", 1],
          ["Calf swelling 3 cm or more vs the other leg (10 cm below tibial tuberosity)", 1],
          ["Pitting edema confined to the symptomatic leg", 1],
          ["Collateral superficial veins (nonvaricose)", 1],
          ["Previously documented DVT", 1],
          ["Alternative diagnosis at least as likely as DVT", -2]
        ], [
          [-99, "0 or less: low probability (DVT unlikely)", "D-dimer: normal rules out DVT; elevated → ultrasound."],
          [1, "1: moderate probability (DVT unlikely by the 2-tier rule)", "Compression duplex ultrasound."],
          [2, "2: moderate probability (DVT likely)", "Compression duplex ultrasound; repeat in a week if negative and suspicion stays high."],
          [3, "3 or more: high probability (DVT likely)", "Compression duplex ultrasound; repeat in a week if negative and suspicion stays high."]
        ])),
        S("use", "What it means", "<p>The slides give both scales: 0 low, 1-2 moderate, 3+ high; and the 2-tier version (2 or more = likely). In both legs, score the more symptomatic leg. Compression ultrasound is about 95% sensitive and specific.</p>"),
        S("traps", "Watch for", "<ul><li>Forgetting the minus 2 for an equally likely alternative diagnosis.</li><li>Ordering a D-dimer for a high-probability patient.</li></ul>")
      ], [
        Q("calc", "Leg swollen from thigh down, pitting edema in that leg only, on chemo. Wells DVT?", ["3, high probability", "2, moderate", "1, low", "4, high"], 0, "Cancer 1, entire leg 1, pitting edema 1."),
        Q("calc", "Calf tenderness along the deep veins; a Baker cyst is equally likely. Wells DVT?", ["-1, low probability", "1, moderate", "3, high", "0, low"], 0, "Tenderness 1 minus 2 = -1."),
        Q("calc", "Low probability Wells and a normal D-dimer. Next?", ["DVT ruled out", "Ultrasound anyway", "Start anticoagulation", "CT venogram"], 0, "Low probability + normal D-dimer rules out DVT."),
        Q("calc", "Post-op day 6 after knee replacement, calf 4 cm larger, collateral veins. Wells and next step?", ["3; compression ultrasound", "2; D-dimer", "1; D-dimer", "3; D-dimer"], 0, "Surgery 1, calf 3 cm+ 1, collateral veins 1: high → ultrasound."),
        Q("use", "High clinical suspicion but the first ultrasound is negative. What next?", ["Repeat the ultrasound in about a week", "DVT excluded for good", "D-dimer", "Start warfarin"], 0, "Negative US doesn't always rule out DVT."),
        Q("traps", "What does an 'alternative diagnosis at least as likely' do to the Wells DVT score?", ["Subtracts 2", "Adds 1", "Subtracts 1", "Nothing"], 0, "-2 points.")
      ]),

      D("sc-wells-pe", "Wells score for PE (modified)", "Modified Wells 4 or less: PE unlikely → high-sensitivity D-dimer; over 4: PE likely → CT pulmonary angiography.", [
        S("calc", "Calculator", P("sc-wells-pe", [
          ["Clinical signs of DVT", 3],
          ["PE is the #1 diagnosis (alternative less likely)", 3],
          ["Heart rate over 100", 1.5],
          ["Immobilization 3+ days or surgery in past 4 weeks", 1.5],
          ["Previous DVT or PE", 1.5],
          ["Hemoptysis", 1],
          ["Malignancy (treated in past 6 months or palliative)", 1]
        ], [
          [0, "Traditional: low (under 2) · Modified: PE unlikely", "If suspicion is low enough, apply PERC: negative → stop; positive → D-dimer."],
          [2, "Traditional: moderate (2-6) · Modified: PE unlikely (4 or less)", "High-sensitivity D-dimer: negative → PE excluded; positive → CTPA."],
          [4.5, "Traditional: moderate (2-6) · Modified: PE likely (over 4)", "CT pulmonary angiography. Don't use D-dimer to exclude PE."],
          [6.5, "Traditional: high (over 6) · Modified: PE likely", "CT pulmonary angiography (or V/Q). D-dimer not recommended."]
        ])),
        S("use", "What it means", "<p>The slides say to <strong>know the modified</strong> version (likely over 4 vs unlikely 4 or less). Use it only in hemodynamically stable patients; unstable patients go straight to treatment and bedside imaging.</p>" + HY("Modified Wells: ≤ 4 → D-dimer; > 4 → CTPA.")),
        S("traps", "Watch for", "<ul><li>Treating 4.5 as unlikely: over 4 is likely.</li><li>Ordering a D-dimer when PE is likely.</li></ul>")
      ], [
        Q("calc", "HR 112, leg swelling with calf tenderness, PE most likely. Modified Wells and next step?", ["7.5; CTPA", "4.5; D-dimer", "6; D-dimer", "7.5; PERC"], 0, "DVT signs 3 + PE #1 3 + HR 1.5 = 7.5: likely."),
        Q("calc", "Post-op day 10, HR 104, otherwise PE is not the leading diagnosis. Modified Wells?", ["3; PE unlikely, D-dimer", "3; PE likely, CTPA", "1.5; stop", "6; CTPA"], 0, "Surgery 1.5 + HR 1.5 = 3."),
        Q("calc", "PE is the leading diagnosis, hemoptysis, on chemo. Modified Wells?", ["5; PE likely, CTPA", "5; unlikely, D-dimer", "3; unlikely", "4; unlikely"], 0, "3 + 1 + 1 = 5, over 4."),
        Q("calc", "Prior DVT and PE is the top diagnosis. Score and next?", ["4.5; CTPA", "4.5; D-dimer", "4; D-dimer", "3; PERC"], 0, "3 + 1.5 = 4.5, over 4 = likely."),
        Q("use", "Modified Wells 3 and a negative high-sensitivity D-dimer. Next?", ["PE excluded; no further testing", "CTPA", "V/Q scan", "Start heparin"], 0, "PE unlikely + negative D-dimer."),
        Q("use", "Which item scores 3 points?", ["Clinical signs of DVT", "Heart rate over 100", "Hemoptysis", "Malignancy"], 0, "DVT signs and PE #1 diagnosis are 3 each."),
        Q("traps", "Modified Wells is 6 and the D-dimer is negative. Can you stop?", ["No, when PE is likely, D-dimer can't exclude it: CTPA", "Yes", "Yes, if PERC is negative", "Only if under 50"], 0, "Do not use D-dimer to exclude PE when likely.")
      ]),

      D("sc-perc", "PERC rule", "Only for low suspicion: if all 8 are negative, PE is excluded without testing; any positive → D-dimer.", [
        S("calc", "Calculator", P("sc-perc", [
          ["Age 50 or older", 1],
          ["Pulse 100 or more", 1],
          ["SaO2 under 95%", 1],
          ["Hemoptysis", 1],
          ["Estrogen use", 1],
          ["Surgery, trauma, or hospitalization in last 4 weeks", 1],
          ["Prior VTE", 1],
          ["Unilateral leg swelling", 1]
        ], [[0, "PERC negative", "With low clinical suspicion, PE is excluded; no testing."], [1, "PERC positive", "Not excluded: get a D-dimer."]])),
        S("use", "What it means", "<p>PERC is a rule-<strong>out</strong> tool for patients you already think are very unlikely to have PE. It can't be used to decide anything when suspicion is moderate or high.</p>" + Mn("Mnemonic", "HAD CLOTS: Hormones, Age, DVT/PE history, Coughing blood, Leg swelling, O2 sat, Tachycardia, Surgery (standard mnemonic).")),
        S("traps", "Watch for", "<ul><li>Applying PERC to a moderate-risk patient.</li><li>Missing estrogen (OCPs, HRT).</li></ul>")
      ], [
        Q("calc", "Low suspicion: 34-year-old on OCPs, HR 88, SaO2 99%. PERC?", ["Positive (estrogen); D-dimer", "Negative; stop", "Positive; CTPA", "Not applicable"], 0, "Estrogen use is a PERC criterion."),
        Q("calc", "Low suspicion: 29-year-old man, HR 84, SaO2 98%, no other criteria. Plan?", ["PE excluded, no testing", "D-dimer", "CTPA", "V/Q"], 0, "All 8 negative."),
        Q("calc", "Low suspicion: 52-year-old, otherwise all negative. Plan?", ["D-dimer (age 50 or older)", "Stop", "CTPA", "Ultrasound"], 0, "Age ≥ 50 makes PERC positive."),
        Q("use", "In which patients is PERC used?", ["Low clinical suspicion only", "Any suspected PE", "High suspicion", "Unstable patients"], 0, "Only with low clinical suspicion."),
        Q("calc", "Low suspicion, SaO2 94%. PERC result?", ["Positive", "Negative", "Not applicable", "Equivocal"], 0, "SaO2 under 95% is a criterion."),
        Q("traps", "A patient has moderate suspicion and is PERC negative. Can PE be excluded?", ["No, PERC only applies at low suspicion", "Yes", "Yes, with a normal EKG", "Only if young"], 0, "Use Wells and D-dimer/imaging instead.")
      ]),

      D("sc-pe-class", "PE risk class", "Massive (high risk) = hemodynamic collapse; submassive (intermediate) = stable with RV strain or raised troponin/BNP; low = neither.", [
        S("calc", "Calculator", F("sc-pe-class", [
          { name: "sbp", label: "Systolic BP", unit: "mmHg" },
          { name: "drop", label: "SBP drop of 40 or more from baseline", type: "check" },
          { name: "arrest", label: "Obstructive shock or cardiac arrest", type: "check" },
          { name: "rv", label: "RV dysfunction on echo/CT", type: "check" },
          { name: "bio", label: "Elevated troponin or BNP", type: "check" }
        ])),
        S("use", "What it means", Tbl(["Class", "Definition", "Treatment"], [
          ["High (massive)", "Sustained SBP under 90 or drop ≥ 40", "Pressors + systemic alteplase; embolectomy if tPA contraindicated"],
          ["Intermediate (submassive)", "Stable + RV dysfunction and/or ↑ troponin/BNP", "LMWH, admit; advanced therapy only if worsening"],
          ["Low", "Stable, no RV strain, normal markers", "DOAC; outpatient if PESI low"]
        ]) + HY("Massive refers to hemodynamics, not clot size.")),
        S("traps", "Watch for", "<ul><li>Calling a large saddle PE with normal BP massive.</li><li>Giving systemic tPA for submassive PE routinely.</li></ul>")
      ], [
        Q("calc", "PE with BP 84/52 that persists. Class and treatment?", ["High risk; pressors and systemic alteplase", "Intermediate; LMWH", "Low; DOAC", "High; IVC filter only"], 0, "Sustained SBP under 90."),
        Q("calc", "PE with BP 128/80, RV dilation on CT, troponin up. Class?", ["Intermediate risk (submassive)", "High risk", "Low risk", "Not a PE"], 0, "Stable with RV strain and raised markers."),
        Q("calc", "PE with BP 134/82, normal RV, normal troponin and BNP. Class and treatment?", ["Low risk; DOAC, maybe outpatient", "Intermediate; LMWH", "High; tPA", "Low; IVC filter"], 0, "Low risk PE."),
        Q("calc", "Baseline SBP 150, now 106, with RV dysfunction. Class?", ["High risk (drop of 40 or more)", "Intermediate", "Low", "Cannot classify"], 0, "A drop of 40 or more from baseline counts as unstable."),
        Q("use", "Submassive PE patient. Usual anticoagulant?", ["LMWH", "Systemic tPA", "Warfarin alone", "Aspirin"], 0, "LMWH for most; UFH if a procedure may be needed."),
        Q("use", "Massive PE with a recent hemorrhagic stroke. Reperfusion?", ["Surgical or catheter embolectomy", "Systemic tPA", "IVC filter only", "Wait and see"], 0, "Embolectomy when thrombolysis is contraindicated.")
      ]),

      D("sc-vte-plan", "VTE drug and duration", "The patient group picks the drug; the cause of the clot picks how long.", [
        S("calc", "Calculator", F("sc-vte-plan", [
          { name: "pop", label: "Patient", type: "select", options: [["general", "General population"], ["cancer", "Active cancer"], ["pregnancy", "Pregnant"], ["aps", "Antiphospholipid syndrome"]] },
          { name: "kind", label: "Clot", type: "select", options: [["provoked", "First, provoked (surgery, trauma, immobility, long flight)"], ["unprovoked", "First, unprovoked"], ["recurrent", "Recurrent DVT/PE"], ["persistent", "Persistent risk factor (active cancer, APS)"]] }
        ])),
        S("use", "What it means", "<p>Anticoagulants prevent growth and new clots; they don't dissolve the clot. Low-risk PE and most DVTs: DOAC for at least 3 months. IVC filter only if anticoagulation is absolutely contraindicated or PE recurs despite it.</p>"),
        S("traps", "Watch for", "<ul><li>Warfarin in pregnancy.</li><li>Stopping at 3 months for a recurrent clot.</li></ul>")
      ], [
        Q("calc", "First DVT after hip surgery in a 60-year-old. Drug and duration?", ["DOAC for 3 months", "Warfarin indefinitely", "LMWH for 6 weeks", "Aspirin for life"], 0, "Provoked: 3 months; general population: DOAC."),
        Q("calc", "Pregnant patient with a DVT. Drug?", ["LMWH", "Warfarin", "Rivaroxaban", "Apixaban"], 0, "LMWH preferred in pregnancy."),
        Q("calc", "Antiphospholipid syndrome with a PE. Drug?", ["Warfarin", "Apixaban", "Dabigatran", "Aspirin"], 0, "Warfarin preferred in APS."),
        Q("calc", "Second unprovoked PE. Duration?", ["Indefinite", "3 months", "6 weeks", "2 weeks"], 0, "Recurrent DVT/PE: indefinite."),
        Q("calc", "First unprovoked DVT. Duration?", ["At least 3 months, then reassess; often extended", "2 weeks", "Lifelong for everyone", "None"], 0, "Unprovoked: ≥ 3 months then reassess."),
        Q("use", "Active cancer with a DVT. Drug options?", ["DOAC or LMWH", "Warfarin only", "Aspirin", "IVC filter only"], 0, "Active cancer: DOACs or LMWH.")
      ])
    ]),

    L("shock", "Shock, Pressors & Fluid Management", [
      D("sc-map", "MAP and resuscitation targets", "MAP reflects organ perfusion better than SBP; aim for 65 or more, with SBP 90+, urine over 0.5 mL/kg/h, CVP 8+, SpO2 92%+.", [
        S("calc", "Calculator", F("sc-map", [
          { name: "sbp", label: "Systolic", unit: "mmHg" },
          { name: "dbp", label: "Diastolic", unit: "mmHg" }
        ])),
        S("use", "What it means", Tbl(["Goal", "Target"], [
          ["MAP", "65 or more (normal 65-90)"],
          ["SBP", "90 or more"],
          ["Urine output", "Over 0.5 mL/kg/h"],
          ["CVP", "8 or more (normal 8-12)"],
          ["SpO2", "92% or more"]
        ]) + "<p>Treat the physiology, not the BP alone: also check mentation, capillary refill, and the lactate trend.</p>"),
        S("traps", "Watch for", "<ul><li>MAP is not the midpoint of SBP and DBP: diastole lasts longer, so DBP counts twice (standard teaching).</li></ul>")
      ], [
        Q("calc", "BP 90/45. MAP?", ["60, below goal", "68, at goal", "45, below goal", "75, normal"], 0, "(90 + 90) ÷ 3 = 60."),
        Q("calc", "BP 120/60. MAP?", ["80", "90", "70", "60"], 0, "(120 + 120) ÷ 3 = 80."),
        Q("calc", "Septic patient on norepinephrine, BP 96/48. At MAP goal?", ["No, MAP is 64", "Yes, SBP is over 90", "Yes, MAP is 72", "No, MAP is 48"], 0, "(96 + 96) ÷ 3 = 64, under 65."),
        Q("calc", "BP 84/63. MAP and meaning?", ["70; MAP at goal but SBP under 90", "70; all goals met", "56; below goal", "84; normal"], 0, "(84 + 126) ÷ 3 = 70; SBP still under 90."),
        Q("use", "What CVP is a resuscitation goal?", ["8 or more", "Under 4", "Over 20", "0"], 0, "CVP ≥ 8 mmHg."),
        Q("use", "Why is MAP preferred over SBP for perfusion?", ["It reflects average pressure across the whole cardiac cycle", "It is always higher", "It ignores diastole", "It is easier to hear"], 0, "Better indicator of perfusion to vital organs.")
      ]),

      D("sc-urine", "Urine output rate", "mL ÷ kg ÷ hours: over 0.5 mL/kg/h means the kidneys are perfused.", [
        S("calc", "Calculator", F("sc-urine", [
          { name: "wt", label: "Weight", unit: "kg" },
          { name: "ml", label: "Urine collected", unit: "mL" },
          { name: "hr", label: "Over", unit: "hours" }
        ])),
        S("use", "What it means", "<p>A Foley catheter measures it accurately. Low output in shock is from renal vasoconstriction plus ADH; it improves as perfusion returns, so it's one of the best bedside trend markers.</p>"),
        S("traps", "Watch for", "<ul><li>Using a single hour: look at the trend.</li><li>Forgetting the weight: 35 mL/h is adequate for 70 kg but not 100 kg.</li></ul>")
      ], [
        Q("calc", "80 kg patient makes 120 mL over 4 hours. Rate?", ["0.38 mL/kg/h, low", "0.5, adequate", "1.5, adequate", "0.15, low"], 0, "120 ÷ 80 ÷ 4 = 0.375."),
        Q("calc", "60 kg patient makes 50 mL in 1 hour. Rate?", ["0.83 mL/kg/h, adequate", "0.5, borderline", "1.2, adequate", "0.3, low"], 0, "50 ÷ 60 = 0.83."),
        Q("calc", "100 kg patient makes 35 mL/h. Adequate?", ["No, 0.35 mL/kg/h", "Yes, 35 mL/h is the goal", "Yes, 0.7", "No, 0.1"], 0, "Weight-based: 35 ÷ 100."),
        Q("calc", "70 kg patient makes 210 mL over 3 hours. Rate?", ["1.0 mL/kg/h", "0.5", "3.0", "0.33"], 0, "210 ÷ 70 ÷ 3 = 1.0."),
        Q("use", "What urine output goal is used in resuscitation?", ["Over 0.5 mL/kg/h", "Over 2 mL/kg/h", "Over 0.1 mL/kg/h", "Over 100 mL/h always"], 0, "Goal over 0.5 mL/kg/h."),
        Q("use", "Why does urine output fall in shock?", ["Renal vasoconstriction and ADH", "Bladder outlet obstruction", "Diuretic effect", "Increased GFR"], 0, "Compensation shunts blood away from the kidneys and ADH holds water.")
      ]),

      D("sc-osm", "Serum osmolality and osmolal gap", "Calculated osmolality = 2 × Na + glucose ÷ 18 + BUN ÷ 2.8; gap = measured − calculated, normally under 10.", [
        S("calc", "Calculator", F("sc-osm", [
          { name: "na", label: "Sodium", unit: "mEq/L" },
          { name: "glu", label: "Glucose", unit: "mg/dL" },
          { name: "bun", label: "BUN", unit: "mg/dL" },
          { name: "meas", label: "Measured osmolality (optional)", unit: "mOsm/kg" }
        ])),
        S("use", "What it means", "<p>Normal calculated osmolality is <strong>275-295</strong>. Sodium salts make up 90-95% of it; glucose and BUN about 5%. A gap <strong>over 10</strong> means an unmeasured solute is present (standard teaching examples: methanol, ethylene glycol).</p>"),
        S("traps", "Watch for", "<ul><li>Forgetting to double the sodium.</li><li>Dividing glucose by 2.8 and BUN by 18 (swapped).</li></ul>")
      ], [
        Q("calc", "Na 140, glucose 90, BUN 14. Calculated osmolality?", ["About 290", "About 280", "About 300", "About 145"], 0, "280 + 5 + 5 = 290."),
        Q("calc", "Na 140, glucose 540, BUN 28. Calculated osmolality?", ["About 320", "About 290", "About 300", "About 340"], 0, "280 + 30 + 10 = 320."),
        Q("calc", "Calculated 290, measured 312. Osmolal gap?", ["22, elevated", "22, normal", "2, normal", "12, normal"], 0, "312 − 290 = 22, over 10."),
        Q("calc", "Na 126, glucose 108, BUN 14. Calculated osmolality?", ["About 263, low", "About 280, normal", "About 290, normal", "About 300, high"], 0, "252 + 6 + 5 = 263."),
        Q("use", "What is a normal osmolal gap?", ["Under 10 mOsm/kg", "Under 30", "Over 10", "Exactly 0"], 0, "Normal gap usually less than 10."),
        Q("use", "Which solute determines most of serum osmolality?", ["Sodium salts (NaCl, NaHCO3)", "Glucose", "BUN", "Albumin"], 0, "90-95% from NaCl and NaHCO3.")
      ]),

      D("sc-three-one", "3:1 crystalloid rule", "Only about 30% of isotonic crystalloid stays in the vessels, so replace each mL of blood lost with about 3 mL.", [
        S("calc", "Calculator", F("sc-three-one", [{ name: "loss", label: "Estimated blood loss", unit: "mL" }])),
        S("use", "What it means", "<p>It's a theoretical guide; actual need is judged clinically (BP, HR, JVP, urine, mentation). After about 2 L of rapid crystalloid, consider blood to avoid hemodilution. Only 0.9% NS runs with blood products. Massive transfusion starts at 1:1:1 (PRBC:FFP:platelets).</p>"),
        S("traps", "Watch for", "<ul><li>Resuscitating with D5W: it's free water.</li><li>Endless crystalloid in hemorrhage instead of blood.</li></ul>")
      ], [
        Q("calc", "Estimated blood loss 600 mL. Crystalloid by the 3:1 rule?", ["1800 mL", "600 mL", "200 mL", "1200 mL"], 0, "600 × 3."),
        Q("calc", "Estimated blood loss 1 L. Crystalloid by the 3:1 rule, and what should you consider?", ["3 L; consider blood after about 2 L", "1 L; nothing else", "3 L; then D5W", "300 mL; albumin"], 0, "Consider transfusion after 2 L of crystalloid."),
        Q("use", "Why does the 3:1 rule exist?", ["Only about 30% of crystalloid stays intravascular", "Blood is three times thicker", "Kidneys excrete two-thirds immediately", "Crystalloid is hypotonic"], 0, "Low oncotic pressure lets it shift to the interstitium."),
        Q("use", "Which IV fluid can run with blood products?", ["0.9% normal saline", "Lactated Ringer's", "D5W", "0.45% saline"], 0, "Only 0.9NS."),
        Q("use", "Starting ratio for a massive transfusion protocol?", ["1:1:1 PRBC:FFP:platelets", "3:1 crystalloid:blood", "2:1:0", "1:2:1"], 0, "From the slides."),
        Q("traps", "Severe hemorrhage: how much crystalloid first, wide open?", ["1-2 L, then reassess and consider blood", "10 L", "D5W 1 L", "None"], 0, "1-2 L boluses for severe volume depletion.")
      ]),

      D("sc-dopamine", "Dopamine dose and effect", "Dopamine changes receptors with dose: under 3 dopaminergic, 3-10 β1, over 10 α1.", [
        S("calc", "Calculator", F("sc-dopamine", [
          { name: "dose", label: "Dose", unit: "mcg/kg/min" },
          { name: "wt", label: "Weight (optional)", unit: "kg" }
        ])),
        S("use", "What it means", Tbl(["Drug", "Receptors", "Use"], [
          ["Dobutamine", "β1 (some β2)", "Pump failure with SBP 90 or more; lowers SVR"],
          ["Dopamine", "Dopa → β1 → α1 by dose", "SBP under 90; dose-limiting dysrhythmias"],
          ["Norepinephrine", "α1 > β1", "Preferred in cardiogenic shock; SBP under 90"],
          ["Epinephrine", "α1, β1, β2", "Alternative; more acidosis, tachycardia, dysrhythmias"]
        ])),
        S("traps", "Watch for", "<ul><li>High-dose dopamine constricts the kidneys (renal necrosis).</li><li>Dobutamine when SBP is under 90.</li></ul>")
      ], [
        Q("calc", "Dopamine at 2 mcg/kg/min. Main effect?", ["Renal and mesenteric vasodilation", "α1 vasoconstriction", "β1 inotropy only", "β2 bronchodilation"], 0, "Low dose: dopaminergic."),
        Q("calc", "Dopamine at 6 mcg/kg/min. Main effect?", ["β1: more contractility, rate, and output", "Renal vasodilation only", "α1 vasoconstriction", "No effect"], 0, "Intermediate 3-10: β1."),
        Q("calc", "Dopamine at 15 mcg/kg/min. Main effect and risk?", ["α1 vasoconstriction; renal necrosis", "β1; tachycardia only", "Dopaminergic; diuresis", "β2; hypotension"], 0, "Over 10: α1."),
        Q("calc", "Dopamine 5 mcg/kg/min for an 80 kg patient. mcg/min?", ["400", "16", "80", "4000"], 0, "5 × 80."),
        Q("use", "Cardiogenic shock with SBP 78. Preferred agent?", ["Norepinephrine", "Dobutamine", "Low-dose dopamine", "Nitroprusside"], 0, "Norepinephrine is preferred."),
        Q("use", "Why avoid dobutamine when SBP is under 90?", ["Its β2 effect lowers SVR and BP", "It raises BP too much", "It slows the heart", "It causes renal failure"], 0, "Dobutamine decreases SVR.")
      ]),

      D("sc-shock-type", "Shock pattern finder", "Neck veins, skin temperature, and lungs sort shock into hypovolemic, cardiogenic, obstructive, or distributive.", [
        S("calc", "Calculator", F("sc-shock-type", [
          { name: "jvp", label: "Neck veins / CVP", type: "select", options: [["", "Choose…"], ["low", "Flat / low"], ["high", "Distended / high"]] },
          { name: "skin", label: "Skin", type: "select", options: [["", "Choose…"], ["cold", "Cool, clammy"], ["warm", "Warm, flushed"]] },
          { name: "lungs", label: "Lungs", type: "select", options: [["clear", "Clear"], ["wet", "Crackles / pulmonary edema"]] }
        ]) + tag("Bedside pattern recognition (standard teaching); confirm with history, POCUS/echo, and labs.")),
        S("use", "What it means", Tbl(["Type", "Neck veins", "Skin", "Lungs", "Examples"], [
          ["Hypovolemic", "Flat", "Cold", "Clear", "Hemorrhage, vomiting, diarrhea, burns"],
          ["Cardiogenic", "High", "Cold", "Crackles", "MI, cardiomyopathy, arrhythmia, valve rupture"],
          ["Obstructive", "High", "Cold", "Clear", "Tamponade, PE, tension pneumothorax, dissection"],
          ["Distributive", "Flat/normal", "Warm (early)", "Clear", "Sepsis, anaphylaxis, neurogenic"]
        ])),
        S("traps", "Watch for", "<ul><li>Bolusing cardiogenic shock with crackles.</li><li>Missing obstructive shock: high JVP with clear lungs.</li></ul>")
      ], [
        Q("calc", "Hypotensive, flat neck veins, cool skin, clear lungs after hematemesis. Type?", ["Hypovolemic", "Cardiogenic", "Obstructive", "Distributive"], 0, "Low filling, vasoconstricted."),
        Q("calc", "Hypotensive after an anterior MI, JVD, cool skin, crackles. Type?", ["Cardiogenic", "Hypovolemic", "Distributive", "Obstructive"], 0, "High filling with congestion."),
        Q("calc", "Hypotensive trauma patient, JVD, clear lungs, absent breath sounds on one side. Type?", ["Obstructive (tension pneumothorax)", "Cardiogenic", "Hypovolemic", "Distributive"], 0, "High JVP with clear lungs: obstruction."),
        Q("calc", "Febrile, hypotensive, warm flushed skin, flat neck veins. Type?", ["Distributive (septic)", "Cardiogenic", "Obstructive", "Hypovolemic only"], 0, "Warm early with low SVR."),
        Q("use", "Which shock type needs urgent relief of a mechanical problem?", ["Obstructive", "Distributive", "Hypovolemic", "Cardiogenic"], 0, "Urgently relieve the obstruction."),
        Q("use", "In which type are large fluid boluses held?", ["Cardiogenic with pulmonary congestion", "Hypovolemic", "Septic", "Anaphylactic"], 0, "Hold boluses with LV dysfunction or congestion.")
      ])
    ]),

    L("pharmacology", "Arrhythmia Pharmacology", [
      D("sc-weight-doses", "Weight-based antiarrhythmic doses", "Lidocaine 1-1.5 mg/kg (max 3), procainamide 10-17 mg/kg load, ibutilide 1 mg (0.01 mg/kg under 60 kg), diltiazem 0.25 mg/kg.", [
        S("calc", "Calculator", F("sc-weight-doses", [{ name: "wt", label: "Weight", unit: "kg" }])),
        S("use", "Fixed doses to know", Tbl(["Drug", "Dose"], [
          ["Adenosine", "6 mg rapid IV push + 20 mL flush; 12 mg if no effect in 1-2 min (may repeat once)"],
          ["Amiodarone (arrest)", "300 mg IV bolus, then 150 mg"],
          ["Amiodarone (VT with pulse)", "150 mg over 10 min, 1 mg/min × 6 h, 0.5 mg/min × 18 h"],
          ["Metoprolol IV", "5 mg every 5 min, up to 3 doses"],
          ["Verapamil IV", "5-10 mg over 2+ min; 10 mg again after 15-30 min"],
          ["Digoxin", "Therapeutic level 0.5-2 ng/mL"]
        ])),
        S("traps", "Watch for", "<ul><li>Procainamide: the arrhythmias deck caps it at 15 mg/kg and 1500 mg; the pharm deck gives 10-17 mg/kg.</li><li>Ibutilide switches from weight-based to a flat 1 mg at 60 kg.</li></ul>")
      ], [
        Q("calc", "70 kg patient in VF. Lidocaine first dose range?", ["70-105 mg", "35-52 mg", "140-210 mg", "7-10 mg"], 0, "1-1.5 mg/kg."),
        Q("calc", "Maximum total lidocaine for an 80 kg patient?", ["240 mg", "120 mg", "300 mg", "80 mg"], 0, "3 mg/kg."),
        Q("calc", "Ibutilide for a 50 kg patient?", ["0.5 mg over 10 min", "1 mg over 10 min", "5 mg", "0.05 mg"], 0, "Under 60 kg: 0.01 mg/kg."),
        Q("calc", "Ibutilide for a 90 kg patient?", ["1 mg over 10 min", "0.9 mg", "9 mg", "2 mg"], 0, "60 kg or more: flat 1 mg."),
        Q("calc", "IV diltiazem bolus for an 80 kg patient?", ["20 mg", "8 mg", "40 mg", "2 mg"], 0, "0.25 mg/kg."),
        Q("use", "Adenosine for stable SVT: first dose and second dose?", ["6 mg, then 12 mg", "12 mg, then 6 mg", "3 mg, then 6 mg", "6 mg, then 6 mg"], 0, "6 mg rapid push; 12 mg if ineffective."),
        Q("use", "Amiodarone in pulseless VT/VF: first dose?", ["300 mg IV bolus", "150 mg over 10 min", "1 mg/min infusion", "400 mg PO"], 0, "300 mg then 150 mg.")
      ]),

      D("sc-qt-drug", "QT and kidney check for sotalol and dofetilide", "Sotalol: no if QTc over 450 or CrCl under 40. Dofetilide: no if QTc over 440, congenital long QT, or severe renal insufficiency.", [
        S("calc", "Calculator", F("sc-qt-drug", [
          { name: "drug", label: "Drug", type: "select", options: [["sotalol", "Sotalol"], ["dofetilide", "Dofetilide"]] },
          { name: "qtc", label: "Baseline QTc", unit: "ms" },
          { name: "crcl", label: "Creatinine clearance", unit: "mL/min" },
          { name: "lqts", label: "Congenital long QT", type: "check" }
        ])),
        S("use", "What it means", "<p>All class III drugs prolong QT and can cause torsades: monitor <strong>QTc, potassium, and magnesium</strong>, and check for other QT-prolonging drugs. Dofetilide starts in hospital for 3 days. Sotalol is also a β blocker: avoid in asthma, AV block, bradycardia, decompensated HF.</p>"),
        S("traps", "Watch for", "<ul><li>Mixing the cutoffs: sotalol 450, dofetilide 440.</li><li>Ignoring CrCl: both are renally cleared.</li></ul>")
      ], [
        Q("calc", "Sotalol candidate: QTc 462, CrCl 70. OK?", ["No, QTc over 450", "Yes", "Yes, at half dose", "No, CrCl too low"], 0, "Baseline QTc over 450 is a contraindication."),
        Q("calc", "Sotalol candidate: QTc 430, CrCl 35. OK?", ["No, CrCl under 40", "Yes", "No, QTc too long", "Yes, with food"], 0, "CrCl under 40 is a contraindication."),
        Q("calc", "Dofetilide candidate: QTc 445, CrCl 80. OK?", ["No, QTc over 440", "Yes", "Yes, outpatient start", "No, CrCl too high"], 0, "Dofetilide: QTc over 440 contraindicated."),
        Q("calc", "Dofetilide candidate: QTc 420, CrCl 65, no long QT. Plan?", ["Allowed; start in hospital for 3 days with monitoring", "Contraindicated", "Allowed; start at home", "Give with grapefruit juice"], 0, "Inpatient start with CrCl, QT, rhythm monitoring."),
        Q("use", "Which labs are monitored with class III antiarrhythmics along with QTc?", ["Potassium and magnesium", "Calcium and phosphate", "Glucose and A1c", "Lipase and amylase"], 0, "Monitor the QTc, potassium and magnesium."),
        Q("use", "A sotalol patient has asthma. Concern?", ["Sotalol is a nonselective β blocker; asthma is a contraindication", "None", "It worsens kidney function", "It shortens the QT"], 0, "Bronchial asthma is a contraindication.")
      ]),

      D("sc-digoxin", "Digoxin level and DigiFab check", "Therapeutic 0.5-2 ng/mL; DigiFab for a life-threatening arrhythmia, K+ over 5.5, or end-organ damage.", [
        S("calc", "Calculator", F("sc-digoxin", [
          { name: "level", label: "Digoxin level", unit: "ng/mL" },
          { name: "k", label: "Potassium", unit: "mEq/L" },
          { name: "arr", label: "Life-threatening arrhythmia", type: "check" },
          { name: "organ", label: "End-organ damage (renal failure, AMS)", type: "check" }
        ])),
        S("use", "What it means", "<p>Risk factors for toxicity: low body weight, advanced age, decreased renal function, <strong>hypokalemia</strong>. Clues: nausea/vomiting, halos or yellow vision, scooped ST depression, tachycardia with AV block.</p>"),
        S("traps", "Watch for", "<ul><li>Low K+ worsens toxicity in chronic use; high K+ in acute overdose is an antidote trigger.</li></ul>")
      ], [
        Q("calc", "Digoxin 2.8 ng/mL, K+ 4.2, sinus brady at 52, no AMS. DigiFab?", ["Not yet; supportive care, atropine if symptomatic", "Yes", "Yes, because level is over 2", "Give potassium"], 0, "No arrhythmia that is life-threatening, K+ ≤ 5.5, no end-organ damage."),
        Q("calc", "Acute digoxin overdose with K+ 6.2. DigiFab?", ["Yes, K+ over 5.5", "No", "Only if level over 4", "Only with arrest"], 0, "K+ over 5.5 is an indication."),
        Q("calc", "Digoxin toxicity with VT. DigiFab?", ["Yes, life-threatening arrhythmia", "No, give lidocaine only", "No, give potassium", "Only if K+ is high"], 0, "Life-threatening arrhythmia is an indication."),
        Q("calc", "Digoxin 1.4 ng/mL. Interpretation?", ["Within 0.5-2 therapeutic range", "Toxic", "Subtherapeutic", "Lethal"], 0, "Therapeutic range 0.5-2."),
        Q("use", "Patient took a digoxin overdose 45 minutes ago, alert. Early step?", ["Activated charcoal 1 g/kg (max 50 g)", "Ipecac", "Hemodialysis", "Nothing"], 0, "Charcoal within 1-2 hours if the airway is safe."),
        Q("use", "Which electrolyte abnormality raises the risk of chronic digoxin toxicity?", ["Hypokalemia", "Hyperkalemia", "Hypernatremia", "Hypercalcemia"], 0, "Hypokalemia is a risk factor.")
      ])
    ])
  ] };
})();
