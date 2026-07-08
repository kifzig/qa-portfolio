/* Renders SKILL_CATEGORIES (skills-data.js) into #skills-container as clickable cards. */

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  SKILL_CATEGORIES.forEach((category) => {
    const block = document.createElement("div");
    block.className = "category-block";
    block.id = category.id;

    const grid = document.createElement("div");
    grid.className = "skill-grid";

    block.innerHTML = `<h2>${escapeHtml(category.title)}</h2><p class="blurb">${escapeHtml(category.blurb)}</p>`;
    block.appendChild(grid);

    category.skills.forEach((skill) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.dataset.skillId = skill.id;

      const badgeClass = skill.status === "building" ? "badge-building" : "badge-core";
      const badgeLabel = skill.status === "building" ? "Currently Building" : "Core Skill";

      card.innerHTML = `
        <div class="skill-card-head">
          <h3>${escapeHtml(skill.name)}</h3>
          <span class="badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <p class="summary">${escapeHtml(skill.summary)}</p>
        <div class="expand-hint">View description, example & scenario &rarr;</div>
      `;

      card.addEventListener("click", () => toggleDetail(card, grid, skill));
      grid.appendChild(card);
    });

    container.appendChild(block);
  });
}

function toggleDetail(card, grid, skill) {
  const existing = grid.querySelector(".skill-detail");
  const alreadyOpenForThis = existing && existing.dataset.skillId === skill.id;

  if (existing) existing.remove();
  if (alreadyOpenForThis) return;

  const detail = document.createElement("div");
  detail.className = "skill-detail";
  detail.dataset.skillId = skill.id;

  const badgeClass = skill.status === "building" ? "badge-building" : "badge-core";
  const badgeLabel = skill.status === "building" ? "Currently Building" : "Core Skill";

  let roadmapHtml = "";
  if (skill.roadmap) {
    roadmapHtml = `<div class="roadmap-note"><strong>Roadmap:</strong> ${escapeHtml(skill.roadmap)}</div>`;
  }

  let scenarioBlock = "";
  if (skill.scenario) {
    scenarioBlock = `<dt>Real-World Scenario</dt><dd>${escapeHtml(skill.scenario)}</dd>`;
  }

  let outcomeBlock = "";
  if (skill.outcome) {
    outcomeBlock = `<dt>Outcome</dt><dd>${escapeHtml(skill.outcome)}</dd>`;
  }

  let linkHtml = "";
  if (skill.link) {
    const safeUrl = new URL(skill.link.url, window.location.href).href;
    linkHtml = `<a class="skill-link" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(skill.link.label)} &rarr;</a>`;
  }

  detail.innerHTML = `
    <button class="close-detail" type="button">Close &times;</button>
    <span class="badge ${badgeClass}">${badgeLabel}</span>
    <h3>${escapeHtml(skill.name)}</h3>
    <dl>
      <dt>Description</dt>
      <dd>${escapeHtml(skill.description)}</dd>
      ${skill.example ? `<dt>Example</dt><dd><pre>${escapeHtml(skill.example)}</pre></dd>` : ""}
      ${scenarioBlock}
      ${outcomeBlock}
    </dl>
    ${linkHtml}
    ${roadmapHtml}
  `;

  detail.querySelector(".close-detail").addEventListener("click", (e) => {
    e.stopPropagation();
    detail.remove();
  });

  card.insertAdjacentElement("afterend", detail);
  detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderTools() {
  const container = document.getElementById("tools-container");
  if (!container) return;

  TOOLS_TECHNOLOGIES.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "tools-group";
    const tags = group.items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
    groupEl.innerHTML = `<h3>${escapeHtml(group.group)}</h3><div class="tag-list">${tags}</div>`;
    container.appendChild(groupEl);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderTools();
});
