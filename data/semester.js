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
      id: "course-one",
      title: "Course One",
      short: "C1",
      icon: "🩺",
      color: "gold",
      description: "Replace this with your first Semester 2 course.",
      lectures: [
        {
          id: "lecture-one",
          title: "Lecture One",
          description: "A clean starter lecture—swap in your own objectives and content.",
          cards: [
            {
              title: "Add your first learning objective",
              body: "Use one card per concept. Keep it concise, clinically relevant, and centered on what you need to recall.",
              highYield: true
            }
          ],
          test: [
            {
              prompt: "Where do you add your Semester 2 study content?",
              choices: ["data/semester.js", "styles.css", "README.md", "index.html"],
              correct: 0,
              explanation: "All course, lecture, card, and question content lives in data/semester.js."
            }
          ],
          apply: []
        }
      ]
    },
    {
      id: "course-two",
      title: "Course Two",
      short: "C2",
      icon: "🧠",
      color: "sage",
      description: "Replace this with your second Semester 2 course.",
      lectures: []
    },
    {
      id: "course-three",
      title: "Course Three",
      short: "C3",
      icon: "🫀",
      color: "rose",
      description: "Add or remove course cards to match your schedule.",
      lectures: []
    }
  ]
};
