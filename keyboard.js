/* Keyboard shortcuts for every multiple-choice quiz on the site.
   A/B/C/D (either case) picks that answer. Space moves to the next question once it is showing.
   H shows a hint where a quiz offers one (Struggles). */
(function () {
  "use strict";
  var CHOICE_GROUPS = ".choices, .walkthrough-choices";
  var NEXT_BUTTONS = ["question-next", "recall-next", "recall-continue", "practice-next", "drill-next", "geo-next", "murmur-next", "flash-reveal", "struggle-continue", "struggle-next"];
  var HINT_BUTTONS = ["struggle-hint"];

  function isVisible(el) {
    return !!el && !el.hidden && el.getClientRects().length > 0;
  }
  function typingInField(target) {
    if (!target) return false;
    var tag = (target.tagName || "").toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable;
  }
  // The active question is the last visible choice group on the page
  // (the Disease Walkthrough stacks its steps, and the newest step is last).
  function activeChoiceGroup() {
    var groups = Array.prototype.filter.call(document.querySelectorAll(CHOICE_GROUPS), isVisible);
    return groups.length ? groups[groups.length - 1] : null;
  }
  function nextButton() {
    for (var i = 0; i < NEXT_BUTTONS.length; i += 1) {
      var button = document.getElementById(NEXT_BUTTONS[i]);
      if (isVisible(button) && !button.disabled) return button;
    }
    // The walkthrough's next-case button is always on screen, so only use it once the case is finished.
    var walkthroughNext = document.getElementById("walkthrough-next");
    if (isVisible(walkthroughNext) && document.querySelector(".walkthrough-teaching")) return walkthroughNext;
    return null;
  }

  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) return;
    if (typingInField(event.target)) return;
    var key = event.key || "";

    if (/^[a-d]$/i.test(key)) {
      var group = activeChoiceGroup();
      if (!group) return;
      var buttons = group.querySelectorAll("button");
      var button = buttons["abcd".indexOf(key.toLowerCase())];
      if (!button || button.disabled) return;
      event.preventDefault();
      button.click();
      return;
    }

    if (/^h$/i.test(key)) {
      for (var h = 0; h < HINT_BUTTONS.length; h += 1) {
        var hint = document.getElementById(HINT_BUTTONS[h]);
        if (isVisible(hint) && !hint.disabled) { event.preventDefault(); hint.click(); return; }
      }
      return;
    }

    if (key === " " || key === "Spacebar") {
      var next = nextButton();
      if (!next) return;
      event.preventDefault();
      next.click();
    }
  });
}());
