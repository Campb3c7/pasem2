/*
  This is the only file you need to edit when adding Semester 2 material.

  Course -> lecture -> cards / test / apply
  - cards: { title, body, highYield }
  - questions: { prompt, choices, correct, explanation }
  - correct is zero-based: 0 means the first choice.
*/
window.SEMESTER = {
  title: "PA Semester 2",
  courses: [
    {
      id: "infectious-disease",
      title: "Infectious Disease",
      short: "ID",
      icon: "🦠",
      color: "gold",
      description: "Semester 2 infectious disease lectures and study material.",
      lectures: [
        {
          id: "vaccines",
          title: "Vaccines",
          description: "Vaccine lecture materials, recall questions, and clinical application cases.",
          cards: [],
          test: [],
          apply: []
        }
      ]
    }
  ]
};
