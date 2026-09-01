# PA Semester 2 Study Hub

A clean Semester 2 version of the PA study site. It keeps the original site's dark, gold-accented format and Learn/Test/Apply/Recall flow without copying prior-semester study material.

## Add course material

Use [`data/semester.js`](data/semester.js) for the course/lecture catalog and a separate lecture file for its study material. Vaccines currently lives in [`data/vaccines.js`](data/vaccines.js).

- Add a course to `courses`.
- Add lectures inside that course, then connect each lecture to its objective array.
- Every objective can contain multiple learning cards under `cards`, recall questions under `test`, and clinical vignettes under `apply`.
- Question `correct` values are zero-based: `0` is the first answer.
- Optionally add a zero-based `card` value to a question to link it to a Learn card in Recall. Otherwise, Recall links the closest card automatically.

Learn, Test, and Apply use the lecture objectives as launchers, then run one selected objective as a focused, one-card-at-a-time session. Learn cards marked **Not yet** return at the end. A missed Test or Apply question immediately shows its linked Learn card.

Recall is one continuous lecture-wide session. It walks all objectives in order and groups each concept as **Learn → Test → Apply** before moving to the next Learn card. **Skip Learn previews** can be selected before starting; linked Learn cards still appear after misses, and missed questions return later.

Progress is stored in the browser on the device being used.

## GitHub Pages

The included workflow publishes the repository automatically from `main`. In **Settings → Pages**, set **Source** to **GitHub Actions** once. The site will be available at:

`https://campb3c7.github.io/pasem2/`
