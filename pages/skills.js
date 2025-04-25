export function initializeSkills() {
  // Skills array
  const skills = [
    {
      category: "Languages & Databases",
      items: [
        { name: "C", logo: "./static/C.png" },
        { name: "JavaScript", logo: "./static/js-logo.png" },
        { name: "Python", logo: "./static/Python.png" },
        { name: "Perl", logo: "./static/perl-logo.png" },
        { name: "Node-RED", logo: "./static/node-red-icon.png" },
        { name: "HTML", logo: "./static/html-5-logo.png" },
        { name: "CSS", logo: "./static/css3-logo.png" },
        { name: "postgreSQL", logo: "./static/sql-logo.png" },
      ],
    },
    {
      category: "Frameworks & Technologies",
      items: [
        { name: "React.js", logo: "./static/React-icon.png" },
        { name: "Node.js", logo: "./static/nodejs.png" },
        { name: "Mocha.js", logo: "./static/mocha.png" },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", logo: "./static/Git.png" },
        { name: "Docker", logo: "./static/docker-logo.png" },
        { name: "Linux", logo: "./static/linux.png" },
      ],
    },
  ];

  // Get the skills section container
  const skillsSection = document.getElementById("skills");

  // Loop through skills and create list items
  skills.forEach((skillCategory, index) => {
    const skillsCategory = document.createElement("div");
    skillsCategory.classList.add("skills-category", "box");
    skillsCategory.style.setProperty("--box-index", index);

    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = skillCategory.category;

    const techStack = document.createElement("div");
    techStack.classList.add("tech-stack");

    skillCategory.items.forEach((item) => {
      const techItem = document.createElement("div");
      techItem.classList.add("tech-item");

      const techLogo = document.createElement("img");
      techLogo.src = item.logo;
      techLogo.alt = item.name;
      techLogo.classList.add("tech-logo");

      const techLabel = document.createElement("span");
      techLabel.classList.add("tech-label");

      if (item.name === "postgreSQL") {
        techLogo.classList.add("large-icon");
      }

      if (item.name === "CSS") {
        techLogo.id = "css";
      }

      techLabel.textContent = item.name;

      techItem.appendChild(techLogo);
      techItem.appendChild(techLabel);
      techStack.appendChild(techItem);
    });

    skillsCategory.appendChild(categoryTitle);
    skillsCategory.appendChild(techStack);
    skillsSection.appendChild(skillsCategory);
  });
}
