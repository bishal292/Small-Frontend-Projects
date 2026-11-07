const projects = [
  {
    name: "Blog Website Template",
    folder: "Blog-website-template",
    entry: "index.html",
    icon: "✍️",
    description: "A multi-page blog template with search and contact pages.",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "Cinewave Streaming UI",
    folder: "netflix-Homepage-clone",
    entry: "index.html",
    icon: "🎬",
    label: "Independent UI recreation",
    description: "A fictional streaming-service landing page design exercise.",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "Northframe Studio",
    folder: "obys-agency",
    entry: "index.html",
    icon: "🎨",
    label: "Independent UI recreation",
    description: "A fictional creative-studio site with interactive visual elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Premier",
    folder: "premier",
    entry: "index.html",
    icon: "👗",
    description: "A fashion magazine-inspired editorial website.",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "Project 1",
    folder: "Project-1",
    entry: "index.html",
    icon: "🌐",
    description: "A small frontend project exploring web page layout.",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "Project 2",
    folder: "Project-2",
    entry: "index.html",
    icon: "🧩",
    description: "A frontend layout project with visual styling and interactions.",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "Project 3",
    folder: "Project-3",
    entry: "index.html",
    icon: "✨",
    description: "A creative website project for practicing frontend skills.",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "Real-Time Clock",
    folder: "real-time-clock",
    entry: "index.html",
    icon: "🕒",
    description: "A real-time clock displayed in a custom interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Snake Game",
    folder: "snake-game",
    entry: "index.html",
    icon: "🐍",
    description: "A browser-based take on the classic snake game.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Tic-Tac-Toe",
    folder: "Tic-Tac-Toe",
    entry: "index.html",
    icon: "⭕",
    description: "A playable two-player Tic-Tac-Toe game.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "TextForge Editor UI",
    folder: "ultraedit-clone",
    entry: "UltraEdit.html",
    icon: "🖥️",
    label: "Independent UI recreation",
    description: "A fictional software-product page with preview-only controls.",
    technologies: ["HTML", "CSS"],
  },
];

const projectsGrid = document.getElementById("projects-grid");
const projectCount = document.getElementById("project-count");
const year = document.getElementById("year");

function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-icon" aria-hidden="true">${project.icon}</div>
          <h3>${project.name}</h3>
          <span class="project-label">${project.label ?? "Independent project"}</span>
          <p>${project.description}</p>
          <div class="tech-stack">
            ${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}
          </div>
          <a href="./projects/${project.folder}/${project.entry}" class="project-link">
            <span>${project.linkText ?? "Explore Project"}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      `,
    )
    .join("");

  projectCount.textContent = `${projects.length} Projects`;
}

renderProjects();
year.textContent = new Date().getFullYear();
