# QA Portfolio — Kiffany Francis

Personal QA portfolio site. Plain HTML/CSS/JS, no build step, deployed via GitHub Pages.

## Structure

- `index.html` — home page
- `resume.html` — full resume
- `skills.html` — clickable skill explorer (description / example / scenario / outcome per skill)
- `projects.html` — evidence projects and case studies
- `assets/js/skills-data.js` — all skill content lives here as plain data; edit this file to add/update skills, no HTML changes needed
- `assets/resume/` — downloadable resume PDF

See `project.md` for the reasoning behind content and structure decisions.

## Local preview

No build step — open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Deploy

GitHub Pages, served from the `main` branch root.
