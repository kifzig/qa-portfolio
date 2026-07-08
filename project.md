# QA Portfolio — Project Notes

## Goal
A public portfolio website for Kiffany Francis, applying to QA Tester → QA Engineer roles.
Shows real, evidence-backed skills — not just a skills list, but clickable skill cards with
description / example / real-world scenario / outcome for each.

## Identity / contact info (confirmed with user)
- Name: Kiffany Francis
- Public email: kif.francis@gmail.com (NOT francis.kiffany@gmail.com or kif.zig@gmail.com — those are decoys/other accounts)
- Phone: omit from public site (privacy — recruiters can use email/LinkedIn)
- Location: San Antonio, Texas
- LinkedIn: linkedin.com/in/kiffany-francis
- GitHub: https://github.com/kifzig
- Target roles: QA Tester (current, 2+ yrs) growing into QA Engineer

## Tech stack decisions
- Plain HTML/CSS/JS. No build step, no framework — deploys straight to GitHub Pages,
  easy to hand-edit as new skills/evidence come in.
- Pages: index.html (home/hero), resume.html, skills.html (the clickable skill explorer),
  projects.html (evidence/case studies).
- Skill card data lives in assets/js/skills-data.js as a plain JS array — edit that file
  to add/update skills, no need to touch HTML.

## Source material (on this machine, not copied into repo verbatim)
- `~/job_apply/data/custom_resume.md` — general resume draft (Analyst-flavored, less relevant)
- `~/Desktop/Francis Kiffany Resume QA 2026-05-07.pdf` — **the authoritative QA resume**,
  copied into `assets/resume/Kiffany-Francis-QA-Resume.pdf`. Use this one as source of truth
  for titles/skills/dates, not the older custom_resume.md.
- `~/job_apply/` — a real Python + Playwright + Claude (Anthropic API) project (scrapes job
  postings, scores resume fit, generates tailored resumes/cover letters). Strong evidence for
  Playwright + Claude skills, but contains `.env` (API key) and personal data
  (resumes/cover letters) — **do NOT push this repo publicly**. Written up as a prose case
  study on projects.html instead, no repo link. Could sanitize a subset later if wanted.
- `~/playwright-learning/` — Playwright installed + CI configured, but only has the untouched
  default boilerplate test, not real evidence yet. Not a git repo yet. Roadmap item: write a
  real Playwright suite (Page Object Model) against a public demo app (e.g. saucedemo.com),
  init git, push, then link from skills.html/projects.html.

## Skill status framework
Every skill card has a status badge:
- **Core** — real, resume-backed, currently practiced (most skills)
- **Currently Building** — honestly marked in-progress, with a roadmap note of what's coming

Two confirmed "Currently Building" skills:
- **Postman** — user has bootcamp exposure only, re-learning it now. Real current API-testing
  practice is **curl** (on the QA resume, used daily at Zelifcam for quick endpoint checks) —
  API Testing card leads with curl as the real evidence, Postman as the roadmap/in-progress part.
  Roadmap: build a Postman collection against a public API (e.g. reqres.in) demonstrating status
  code validation, JSON checks, auth flow — link it here once built.
- **Playwright** — resume says "growing exposure" / "(familiarity)". Real existing evidence is
  browser automation (not testing) in the job_apply project. Roadmap: real Playwright test
  suite in `~/playwright-learning`, Page Object Model, same regression mindset as her Cypress
  work at Zelifcam.

## Grounded resume facts to reuse accurately (from the QA resume PDF)
- Title at Zelifcam: **Quality Assurance Analyst**, April 2024–present
- Zelifcam bullets confirm: manual + automated testing in agile/CI-CD, reusable Cypress tests,
  defect docs via written reports + screen recordings, test case creation for functionality/
  workflows/regression/release validation, works with devs + PMs to clarify requirements,
  tools used: GitLab, SQL, Docker, Chrome DevTools, **IntelliJ, Rollbar, ClickUp, Claude, Curl**
- Claude is used directly on the job at Zelifcam ("AI-assisted development tools including
  Claude to support test creation, debugging, and workflow efficiency") — not just in the
  personal job_apply project. This is real, resume-backed evidence, a good differentiator.
- Database Manager at RosmanSearch (Feb 2022–Apr 2024): Python scripts, SQL, Excel macros,
  Salesforce workflows, dashboards/reports for technical + non-technical stakeholders
- Secondary English Teacher, Cleveland Metro School District (2017–2021) — teaching background
  is a genuine differentiator for communication/documentation/translating technical findings
  for non-technical stakeholders; worth featuring, not hiding
- Full technical skills list on resume (tiered — some marked "(familiarity)" by the user
  themselves): Manual Testing, Test Case Creation, Defect Reporting, Cypress, Selenium,
  Playwright (familiarity), Chrome DevTools, CI/CD; Python, JS, HTML, CSS, React, SQL, Bash;
  PostgreSQL, MS SQL Server, MySQL, AWS RDS, BigQuery, Excel (PivotTables, XLookup, Power
  Query, Macros), Tableau, Power BI, Salesforce; Git, GitHub, GitLab, Docker; ClickUp, Jira
  (familiarity), Odoo, Discord, Slack, Teams, Zoom, Loom, Figma

## Content integrity rule
Don't fabricate specific metrics (e.g. "caught 15 bugs before release") that aren't backed by
real data. Keep outcomes qualitative and honest. Don't claim tools/skills not on either resume.
When in doubt about whether a skill is "core" vs "building," default to how the user's own
resume already tiers it (e.g. resume already says "Selenium" plainly but "Playwright
(familiarity)" — respect that distinction).

## Repo / hosting plan
- Single repo `qa-portfolio`, public, at https://github.com/kifzig/qa-portfolio — **created and
  pushed** (initial commit `58e3479`, remote `origin` set via SSH, `main` branch).
- No `gh` CLI on this machine, but SSH auth to GitHub already works for `kifzig` — that's how
  the push was done, no token needed.
- GitHub Pages: needs to be enabled manually in the repo's Settings → Pages → Source →
  "Deploy from a branch" → main → / (root). This is a UI-only step, no API token available to
  do it from the CLI. **Status: instructions given to user, not yet confirmed live.** Once
  confirmed, site should be at https://kifzig.github.io/qa-portfolio/

## Next steps (not yet done)
- [ ] Confirm GitHub Pages is live at https://kifzig.github.io/qa-portfolio/
- [ ] Build a real Playwright test suite in `~/playwright-learning` (Page Object Model, against
      a public demo app like saucedemo.com), replacing the untouched default boilerplate test;
      init git, push as its own public repo, then link it from skills.html (the
      `playwright-automation` skill card, id in skills-data.js) and projects.html
- [ ] Build a Postman collection against a public API (e.g. reqres.in) — status code validation,
      JSON response validation, chained auth flow (login → token → protected endpoint); export
      and link it from skills.html (the `curl-postman` skill card) and projects.html
- [ ] Once both of the above are real and linked, flip their `status` from `"building"` to
      `"core"` in assets/js/skills-data.js and remove/update the `roadmap` field
- [ ] Optional: sanitize a public version of the `job_apply` project (strip `.env`, personal
      resumes/cover letters) so the AI Job Application Assistant case study on projects.html can
      link to real source instead of just describing it
