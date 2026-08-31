# PA Semester 2 Study Hub

A clean Semester 2 version of the PA study site. It keeps the original site's dark, gold-accented format and Learn/Test/Apply/Recall flow without copying prior-semester study material.

## Add course material

Edit [`data/semester.js`](data/semester.js). The file begins with the complete content shape and starter examples.

- Add a course to `courses`.
- Add lectures inside that course.
- Add learning cards under `cards`, recall questions under `test`, and clinical vignettes under `apply`.
- Question `correct` values are zero-based: `0` is the first answer.
- Optionally add a zero-based `card` value to a question to link it to a Learn card in Recall. Otherwise, Recall links the closest card automatically.

Recall can introduce each Learn card before its linked questions, or **Skip Learn previews** can be selected before starting. In quiz-only mode, a linked Learn card still appears after a missed answer and that question returns later.

Progress is stored in the browser on the device being used.

## GitHub Pages

The included workflow publishes the repository automatically from `main`. In **Settings → Pages**, set **Source** to **GitHub Actions** once. The site will be available at:

`https://campb3c7.github.io/pasem2/`
