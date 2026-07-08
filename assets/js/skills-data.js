/*
  Skill content lives here as plain data. To add or update a skill, edit this array —
  no HTML editing required. Rendering logic is in skills.js.

  status: "core"      -> real, currently practiced, resume-backed
  status: "building"  -> honestly in-progress, roadmap noted in `roadmap` field
*/

const SKILL_CATEGORIES = [
  {
    id: "manual-exploratory",
    title: "Manual & Exploratory Testing",
    blurb: "Functional, regression, smoke, sanity, UAT support, end-to-end, exploratory, and ad hoc testing on a live product.",
    skills: [
      {
        id: "regression-smoke-sanity",
        name: "Functional, Regression & Smoke/Sanity Testing",
        status: "core",
        summary: "Scripted testing across new and existing features on every release.",
        description: "At Zelifcam I run manual test passes against a React / Grails / MySQL web application every sprint: functional testing on new features, regression testing on existing ones, and smoke/sanity checks immediately before and after each deploy to confirm a build is stable enough to test further.",
        example: `Smoke checklist (run first, before a full regression pass):
- App loads with no console errors
- Login succeeds with valid credentials
- Primary navigation renders and routes correctly
- Core create/read/update flow completes without error
- No 500-level responses on key pages (checked in Chrome DevTools)`,
        scenario: "Before every release I run a smoke pass against the staging build first. If it's clean, I move into a full regression pass covering prior defects and core user workflows. If it's not, I stop and report immediately instead of burning a full regression cycle on a broken build.",
        outcome: "Smoke-first keeps regression effort focused on builds that are actually worth testing, and reusable Cypress coverage (see Automation) means the highest-traffic paths are also checked automatically on every change."
      },
      {
        id: "exploratory-adhoc",
        name: "Exploratory & Ad Hoc Testing",
        status: "core",
        summary: "Unscripted testing to find what test cases don't anticipate.",
        description: "Outside of scripted test cases, I explore the application without a fixed script — testing edge cases, combining features in ways a spec might not describe, or using a new feature the way a real user actually would.",
        example: `Exploratory charter:
Area: [feature under test]
Focus: data boundaries / user error paths / interrupted flows
Timebox: 30–45 min
Captured live: steps taken, observations, questions, defects found`,
        scenario: "When a feature ships without detailed acceptance criteria, I timebox a 30–45 minute exploratory session using a simple charter (area + focus + timebox) instead of waiting on formal test cases to be written, so testing isn't blocked on documentation.",
        outcome: "Surfaces edge cases and usability issues that test cases written before the feature existed wouldn't catch — and often becomes the source for new formal test cases afterward."
      }
    ]
  },
  {
    id: "test-design",
    title: "Test Design",
    blurb: "Test plans, test cases, test scenarios, checklists, and the techniques behind deciding what actually needs to be tested.",
    skills: [
      {
        id: "test-cases-plans",
        name: "Test Case & Test Plan Design",
        status: "core",
        summary: "Turning a requirement into repeatable, executable test coverage.",
        description: "I write test cases and lightweight test plans that map each feature or requirement to expected behavior — covering the main path, edge cases, and negative scenarios — then organize them into checklists for repeatable execution during regression and release validation.",
        example: `Test case: TC-014
Title: User submits form with a required field empty
Precondition: user is on [form] with a valid session
Steps:
  1. Leave [required field] blank
  2. Fill in the remaining fields
  3. Click Submit
Expected: inline validation error shown, form not submitted, no page reload
Actual: [filled in during execution]`,
        scenario: "For each new feature, I break the requirement into a short test plan (what's in/out of scope, what needs sign-off before release) and a set of test cases derived from it, then run those cases every release as part of regression.",
        outcome: "Test cases written once become reusable regression checklist items, and the highest-value ones get converted into Cypress automation."
      },
      {
        id: "test-design-techniques",
        name: "Boundary Value, Equivalence Partitioning & Decision Tables",
        status: "core",
        summary: "Choosing which inputs are actually worth testing.",
        description: "When writing test cases for anything with inputs — forms, filters, numeric fields — I think in terms of boundary value analysis (testing the edges of a valid range), equivalence partitioning (one representative case per input class instead of testing every value), decision tables (mapping combinations of conditions to expected outcomes), and always pairing a positive case with at least one negative case.",
        example: `Field: "quantity", valid range 1–100

Equivalence classes: invalid-low (<= 0), valid (1-100), invalid-high (> 100)
Boundary values to test: 0, 1, 100, 101

Positive case: quantity = 1  -> accepted
Negative case: quantity = 0  -> rejected, validation message shown`,
        scenario: "Rather than testing every possible value, I pick the boundaries and one representative value per class — this is what keeps a regression suite for a data-heavy form from becoming hundreds of near-duplicate test cases.",
        outcome: "Keeps test case count manageable while still covering the inputs most likely to actually break."
      }
    ]
  },
  {
    id: "defect-management",
    title: "Defect Management",
    blurb: "Writing bug reports developers can act on immediately, and tracking them from discovery to verified fix.",
    skills: [
      {
        id: "bug-reporting",
        name: "Bug Reporting & the Defect Lifecycle",
        status: "core",
        summary: "Clear reports, reproducible steps, and follow-through to a verified fix.",
        description: "I identify, document, reproduce, and track defects through detailed written reports and screen recordings, coordinating with developers in ClickUp. I distinguish severity (how badly the system is affected) from priority (how urgently it needs fixing) rather than treating them as one field, and I verify fixes against the original repro steps before closing.",
        example: `Bug report template:
Title: [Component] — short description of the failure
Environment: browser/OS, build or commit
Steps to reproduce:
  1. ...
  2. ...
  3. ...
Expected result / Actual result
Severity: blocks core functionality for all users
Priority: fix before next release
Evidence: Loom screen recording + console log`,
        scenario: "A report comes in as 'checkout is broken.' I reproduce it, narrow it to the exact step and condition that triggers it, record a short Loom clip, log it in ClickUp with severity/priority set independently, and tag the developer with everything needed to start immediately — no back-and-forth to ask what I meant.",
        outcome: "Fewer round trips between QA and dev to clarify a report, and a clean audit trail from 'found' to 'fixed and verified' that survives a full regression pass on the next release."
      }
    ]
  },
  {
    id: "api-testing",
    title: "API Testing",
    blurb: "REST APIs, HTTP methods, status codes, JSON validation, and authentication — currently formalizing this from curl into Postman.",
    skills: [
      {
        id: "curl-postman",
        name: "API Testing — curl (daily) & Postman (rebuilding)",
        status: "building",
        summary: "curl for quick real-world checks today; formal Postman collections in progress.",
        description: "I use curl day-to-day for quick, scriptable API checks — hitting an endpoint directly to confirm status codes and response shape without going through the UI. I have bootcamp exposure to Postman and am rebuilding that into real practice: reusable, shareable collections that are a better fit for validating auth flows and building a repeatable API regression suite than one-off curl commands.",
        example: `# Confirm a GET returns the expected shape and status
curl -i -X GET https://api.example.com/users/123 \\
  -H "Authorization: Bearer $TOKEN"

# Check a negative case — POST with a missing required field
curl -i -X POST https://api.example.com/orders \\
  -H "Content-Type: application/json" \\
  -d '{"quantity": 0}'
# Expect: 400, JSON body with a validation error, not a 500`,
        scenario: "When a front-end bug could be either a UI issue or an API issue, I call the endpoint directly with curl and check the status code and JSON body. If the API returns the right data, the bug is in the front end; if not, it's backend.",
        outcome: "Isolates UI bugs from API/data bugs quickly without waiting on a developer to check.",
        roadmap: "Building a Postman collection against a public API (reqres.in) covering status code validation, JSON response validation, and a chained authentication flow (login → use token → protected endpoint). Will link the collection here once it's live."
      }
    ]
  },
  {
    id: "database-validation",
    title: "Database Validation",
    blurb: "SQL, JOINs, aggregations, and going straight to the data instead of trusting the UI.",
    skills: [
      {
        id: "sql-validation",
        name: "SQL & Backend Data Validation",
        status: "core",
        summary: "Verifying what actually got written, not just what the UI shows.",
        description: "I use SQL (MySQL, PostgreSQL, MS SQL Server, AWS RDS) to verify backend data directly — confirming a UI action wrote the row it should have, checking for duplicate or orphaned records, and validating data integrity after a migration or bulk update.",
        example: `-- Find duplicate records by a field that should be unique
SELECT email, COUNT(*) AS cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- Confirm a UI action wrote the expected row, and when
SELECT *
FROM orders
WHERE user_id = 12345
ORDER BY created_at DESC
LIMIT 1;

-- Referential integrity check: orders with no matching user
SELECT o.id
FROM orders o
LEFT JOIN users u ON o.user_id = u.id
WHERE u.id IS NULL;`,
        scenario: "When a bug report claims 'my data isn't saving,' I query the relevant table directly instead of trusting the UI's refresh. If the row exists with the right values, it's a display/caching bug; if it doesn't, it's a real write failure.",
        outcome: "Narrows down root cause fast and separates front-end display bugs from actual backend/data bugs before a developer even opens the code."
      }
    ]
  },
  {
    id: "web-testing",
    title: "Web Application Testing",
    blurb: "Cross-browser, responsive layouts, form validation, sessions/cookies, and authentication flows.",
    skills: [
      {
        id: "cross-browser-web",
        name: "Cross-Browser, Forms & Auth Flow Testing",
        status: "core",
        summary: "Testing the same feature across browsers, screen sizes, and login states.",
        description: "I test across Chrome, Firefox, Safari, and Edge, at multiple responsive breakpoints, and use Chrome DevTools to inspect network calls, console errors, and cookie/session state. That includes form validation (client-side and server-side), whether a session survives a refresh, whether logout actually clears it, and role-based access (does a restricted page correctly redirect a logged-out or under-permissioned user).",
        example: `Cross-browser / auth checklist:
- Layout holds at desktop, tablet, and mobile breakpoints
- Required-field validation fires client-side before a network call
- Session persists across a page refresh; clears fully on logout
- Direct URL access to a restricted page redirects a logged-out user
- Behavior is consistent across Chrome, Firefox, Safari, Edge`,
        scenario: "A bug is reported as browser-specific — 'works in Chrome, broken in Safari.' I reproduce in both, use DevTools to compare console/network output side by side, and narrow the report to the actual difference instead of a vague 'doesn't work.'",
        outcome: "Catches browser- and session-specific bugs before they reach users who aren't on the developer's default browser."
      }
    ]
  },
  {
    id: "automation",
    title: "Test Automation",
    blurb: "Cypress in daily use; Playwright and Selenium building on that same regression mindset.",
    skills: [
      {
        id: "cypress-automation",
        name: "Cypress Automation",
        status: "core",
        summary: "Converting the highest-value manual regression cases into CI-run tests.",
        description: "I develop and maintain reusable Cypress tests at Zelifcam to cover regression scenarios that would otherwise need a manual pass every release, running as part of a CI/CD workflow.",
        example: `describe('login', () => {
  it('logs in with valid credentials and reaches the dashboard', () => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type('user@example.com');
    cy.get('[data-cy=password]').type('correct-password');
    cy.get('[data-cy=submit]').click();
    cy.url().should('include', '/dashboard');
  });

  it('shows a validation error for an empty password', () => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type('user@example.com');
    cy.get('[data-cy=submit]').click();
    cy.contains('Password is required').should('be.visible');
  });
});`,
        scenario: "After manually testing a workflow enough times to trust it's stable, I convert it into a Cypress test instead of continuing to run it by hand every release — prioritizing the paths most users hit and the ones that have broken before.",
        outcome: "Faster regression cycles, and breaks get caught in CI immediately instead of waiting for the next manual pass."
      },
      {
        id: "playwright-automation",
        name: "Playwright Automation",
        status: "core",
        summary: "Page Object Model test suite against a live demo app, running in CI.",
        description: "I built a real Playwright test suite (TypeScript, Page Object Model) against the public OrangeHRM demo app — the same regression mindset as my Cypress work at Zelifcam, applied to a second automation framework. It covers login (positive and negative cases) and dashboard/logout flows, and runs in GitHub Actions on every push. I'd already used Playwright for browser automation in a personal Python project (see Projects), but this is the first formal Playwright *test* suite.",
        example: `// pages/LoginPage.ts
export class LoginPage {
  readonly usernameInput = this.page.locator("input[name='username']");
  readonly passwordInput = this.page.locator("input[name='password']");
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });
  readonly errorAlert = this.page.locator('.oxd-alert-content-text');

  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

// tests/login.spec.ts
test('shows an error for invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('not_a_real_user', 'wrong_password');
  await expect(loginPage.errorAlert).toHaveText('Invalid credentials');
});`,
        scenario: "The suite runs against a shared public demo instance, not an app I control. Running multiple browsers/workers in parallel caused login collisions on shared session state there, so I serialized execution (workers: 1) instead of chasing what looked like flaky tests but was actually a shared-environment constraint.",
        outcome: "15/15 tests passing across Chromium, Firefox, and WebKit, running in CI on every push.",
        link: { label: "View source on GitHub", url: "https://github.com/kifzig/playwright-learning" }
      }
    ]
  },
  {
    id: "business-analysis",
    title: "Business Analysis",
    blurb: "Requirement analysis, acceptance criteria, and catching ambiguity before it becomes a bug.",
    skills: [
      {
        id: "requirements-analysis",
        name: "Requirements & Acceptance Criteria Review",
        status: "core",
        summary: "Catching ambiguous requirements before they become disputed bugs.",
        description: "I work closely with developers and project managers to clarify requirements before and during implementation, rather than waiting until a feature is built to find out it was ambiguous. When a requirement doesn't specify expected behavior for an edge case, I flag it and get it resolved before writing test cases against a guess.",
        example: `Ambiguous requirement:
"Users should be able to update their profile."

Turned into acceptance criteria:
Given a logged-in user on the profile page
When they change their email to a valid, unused address and save
Then the change is persisted and a confirmation is shown

Given a logged-in user changes their email to one already in use
Then the save is rejected with a clear error, no partial update occurs`,
        scenario: "A ticket says a feature should 'validate the input' with no detail on what invalid input looks like or what the user sees. Instead of guessing, I ask the developer or PM directly and turn the answer into explicit acceptance criteria before writing test cases.",
        outcome: "Fewer 'is this a bug or intended behavior' disputes after the fact, because expected behavior was agreed on before testing started."
      }
    ]
  },
  {
    id: "reporting-analytics",
    title: "Reporting & Analytics",
    blurb: "Excel, dashboards, and data tools used daily to turn raw data into something stakeholders can act on.",
    skills: [
      {
        id: "excel-dashboards",
        name: "Excel, Dashboards & Data Reporting",
        status: "core",
        summary: "Turning raw operational data into reports non-technical stakeholders can use.",
        description: "At RosmanSearch I built daily reports in Salesforce and used Excel (PivotTables, XLOOKUP, Power Query, macros) plus Python to clean, validate, and summarize recruiting data. I also have experience with Tableau, Power BI, and BigQuery for building and reading dashboards.",
        example: `=XLOOKUP([@CandidateID], Roster[ID], Roster[Status], "Not found")

Pivot table: candidates by recruiter, by status, refreshed daily
  Rows: Recruiter
  Columns: Status (Active / Placed / Closed)
  Values: Count of CandidateID`,
        scenario: "A recruiting report needed to cross-reference two large exports with mismatched formatting. I used Power Query to clean and merge them, XLOOKUP to pull status across sheets, and a macro to repeat the process automatically for the next daily export instead of redoing it by hand.",
        outcome: "Turned a manual, error-prone daily task into a repeatable process, freeing up time for actual analysis instead of data wrangling."
      }
    ]
  },
  {
    id: "sdlc",
    title: "SDLC & Agile Process",
    blurb: "Where QA fits into the software development lifecycle and an agile sprint.",
    skills: [
      {
        id: "agile-sdlc",
        name: "Agile, Scrum & the SDLC/STLC",
        status: "core",
        summary: "Testing inside an active sprint, not bolted on at the end.",
        description: "I work within agile, CI/CD development environments — testing new work as it's built during the sprint rather than waiting for a separate QA phase, participating in refinement to flag testability concerns early, and doing release validation before a build ships.",
        example: `QA's role across a sprint:
  Backlog refinement -> flag ambiguous/untestable requirements early
  During sprint       -> functional testing on finished tickets as they land
  Pre-release         -> smoke test, then full regression pass
  Post-release        -> monitor for regressions (Rollbar), verify fixes`,
        scenario: "During refinement, a ticket is written in a way that doesn't specify what should happen on an error path. I raise it in refinement instead of during testing, so the acceptance criteria are complete before development starts.",
        outcome: "Testing happens continuously through the sprint instead of piling up at the end, and release validation is faster because most of the surface area was already covered incrementally."
      }
    ]
  },
  {
    id: "ai-assisted-qa",
    title: "AI-Assisted QA",
    blurb: "Using Claude directly in the QA workflow — not just a novelty, a real daily tool.",
    skills: [
      {
        id: "claude-qa-workflow",
        name: "AI-Assisted Testing & Debugging with Claude",
        status: "core",
        summary: "Using Claude for test creation, debugging, and workflow efficiency — on the job, daily.",
        description: "I use Claude directly as part of my QA workflow at Zelifcam — for drafting test case scenarios from a requirement, reasoning through why a defect might be happening before involving a developer, and speeding up repetitive parts of the workflow. I've gone further in a personal project (see Projects) that uses the Anthropic API programmatically — parsing a job posting, extracting structured data, and generating tailored content from it.",
        example: `Prompt pattern I use for test scenario drafting:

"Here's a requirement: [paste ticket]. Give me test scenarios covering
the happy path, boundary values, and at least two negative cases I might
be missing. Flag anything in the requirement that's ambiguous."`,
        scenario: "Given a new requirement, I ask Claude to draft candidate test scenarios first, then I review and trim them against what I actually know about the system — it's a starting point that catches cases I might not think of first, not a replacement for judgment about what's actually worth testing.",
        outcome: "Faster test case drafting and a second set of 'eyes' on edge cases, while I stay responsible for deciding what's actually relevant to the system under test. See the Projects page for a deeper, code-level example of Claude used programmatically."
      }
    ]
  },
  {
    id: "communication",
    title: "Communication & Collaboration",
    blurb: "Six years teaching before QA — translating technical findings for both developers and non-technical stakeholders.",
    skills: [
      {
        id: "communication-collab",
        name: "Written Communication & Cross-Team Collaboration",
        status: "core",
        summary: "Bug reports and updates that are clear to both engineers and non-technical stakeholders.",
        description: "Before QA, I spent six years teaching — breaking down complex material for a range of audiences and giving specific, actionable feedback under real deadline pressure. That transfers directly to QA communication: writing bug reports a developer can act on immediately, and status updates a non-technical project manager can actually use.",
        example: `Before: "Checkout is broken."

After: "On the checkout page, submitting an order with a $0 promo-code
discount returns a 500 error instead of applying the discount. Repro:
apply code TESTCODE, reduce cart to $0, click Place Order. Expected:
order completes at $0 total. Actual: 500, error in console (see attached).
Severity: blocks checkout for anyone with a full-discount code."`,
        scenario: "A vague bug title gets deprioritized or bounced back with clarifying questions. Rewriting it with exact repro steps, expected vs. actual behavior, and severity gets it triaged and fixed without a round trip.",
        outcome: "Less time spent clarifying reports after the fact, and better working relationships with developers who can trust a report is complete as written."
      }
    ]
  }
];

const TOOLS_TECHNOLOGIES = [
  {
    group: "Languages & Development",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS", "React", "Bash"]
  },
  {
    group: "Testing & QA",
    items: ["Cypress", "Playwright (building)", "Selenium (familiar)", "curl", "Postman (building)", "Chrome DevTools", "CI/CD workflows"]
  },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL", "MS SQL Server", "AWS RDS", "BigQuery"]
  },
  {
    group: "Version Control & Infra",
    items: ["Git", "GitHub", "GitLab", "Docker", "IntelliJ", "Rollbar"]
  },
  {
    group: "Data & Reporting",
    items: ["Excel (PivotTables, XLOOKUP, Power Query, Macros)", "Tableau", "Power BI", "Salesforce"]
  },
  {
    group: "Collaboration & Project Tools",
    items: ["ClickUp", "Jira (familiar)", "Odoo", "Discord", "Slack", "Teams", "Zoom", "Loom", "Figma"]
  },
  {
    group: "AI Tools",
    items: ["Claude / Anthropic API"]
  }
];
