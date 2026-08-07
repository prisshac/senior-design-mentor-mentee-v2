# Senior Design Mentor–Mentee Program Website

Static website prepared for GitHub Pages.

## Pages
- `index.html` — Home
- `how-it-works.html` — Program structure, matching, Honors, reflections
- `mentees.html` — Information and application CTA for mentees
- `mentors.html` — Information and application CTA for mentors
- `faq.html` — FAQ and program coordinator contact

## Forms already connected
The live Google Forms supplied by the program coordinator are already wired into all application buttons.

## Publish with GitHub Pages
1. Create a new public GitHub repository (for example, `senior-design-mentor-mentee`).
2. Upload **all files and the `assets` folder** from this website package to the repository root.
3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then save.
6. GitHub will display the public Pages URL after deployment.

No build system or dependencies are required.

## Program details currently reflected
- Semester wording is controlled from one line in `script.js`
- No current application deadline
- Unpaid participation
- University Honors pre-approved experience
- 75-hour Honors requirement where applicable
- One mentee per mentor at a time
- Mentees participate for one academic semester
- Mentors may choose whether to mentor again in the second semester
- Current matching focus: Computer Science and Mechanical Engineering
- Other engineering students may contact the program coordinator
- No minimum GPA
- Mid-semester and end-of-semester reflections referenced but not yet linked

## Contact
Prissha Chawla — `chawlaps@mail.uc.edu`


## Updating the semester

You do **not** need to edit every HTML page each semester. Open `script.js` and change:

```js
const CURRENT_TERM = "Fall 2026";
```

For example, when Spring 2027 begins, change it to:

```js
const CURRENT_TERM = "Spring 2027";
```

The website will automatically update every element marked with the current semester and will calculate the next semester (`Fall 2027`) automatically.

**Note:** this only updates the website text. Your Google Forms are separate and their semester-choice questions must be edited in Google Forms when needed.
