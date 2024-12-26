// index.js

// Function to show the selected section and hide others
function toggleSections(event) {
    event.preventDefault();  // Prevent default anchor behavior

    // Get the target section
    const target = event.target.getAttribute("data-target");

    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.style.display = "none";
    });

    // Show the selected section
    const selectedSection = document.getElementById(target);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.addEventListener("click", toggleSections);
});

document.addEventListener("DOMContentLoaded", () => {
    // Show the "About Me" section by default
    const aboutSection = document.getElementById("about");
    aboutSection.style.display = "block";  // Show "About Me" section by default

    const pianoVideoSection = document.getElementById("piano-video");
    if (pianoVideoSection) {
        pianoVideoSection.style.display = "block";  // Show piano video section by default
    }

    // Projects array, including Pantry Pal
    const projects = [
        {
            name: "Pantry Pal",
            description: "Pantry Pal is a meal plan preperation web-app. Users keep track of pantry items, receive recipe suggestions based on their pantry, and receive notifications to purchase & defrost ingredients for planned meals. The synchronous collaboration features allow users to create groups, share ingredients, and discover group recipes. Pantry Pal was securely deployed with Docker on a Google Cloud VM.",
            techStack: ["React.js", "Express.js", "Node.js", "FireBaseDB", "Docker"],
            githubLink: "https://github.com/UTSCC09/project-janani-and-rachel.git", // GitHub repository link
            youtubeLink: "https://www.youtube.com/watch?v=tRbbwgVwjrE" // YouTube video link
        },
        {
            name: "Tetris",
            description: "A fully functioning tetris game built with MIPS assembly.",
            techStack: ["MIPS Assembly"],
            githubLink: "https://github.com/panrach/b58project.git", // GitHub repository link
        },
        {
            name: "Personal Website",
            description: "I further improved my web development skills by building this website.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/UTSCC09/project-janani-and-rachel.git", // GitHub repository link
        },
    ];

    // Get the project list container
    const projectList = document.getElementById("project-list");

    // Loop through projects and create list items
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectTechStack = document.createElement('div');
        projectTechStack.classList.add('tech-stack');
        project.techStack.forEach((tech) => {
            const techTag = document.createElement('span');
            techTag.classList.add('tech-tag');
            techTag.textContent = tech;
            projectTechStack.appendChild(techTag);
        });

        const projectLinks = document.createElement('div');
        projectLinks.classList.add('project-links');

        const githubLink = document.createElement('a');
        githubLink.href = project.githubLink;
        githubLink.target = "_blank";
        githubLink.classList.add('project-link');
        githubLink.innerHTML = '<i class="fab fa-github"></i>';

        const youtubeLink = document.createElement('a');
        youtubeLink.href = project.youtubeLink;
        youtubeLink.target = "_blank";
        youtubeLink.classList.add('project-link');
        youtubeLink.innerHTML = '<i class="fab fa-youtube"></i>';

        projectLinks.appendChild(githubLink);

        if (project.youtubeLink) {
         projectLinks.appendChild(youtubeLink);
        }

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectLinks);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectTechStack);

        projectList.appendChild(projectCard);
    });

    // Experience array
    const experiences = [
        {
            title: "DevOps Intern",
            company: "SS&C Technologies",
            duration: "September 2023 - April 2024",
            description: ["✿ Migrated a RESTful application from Perl to Node-RED, streamlining environment information tracking, and supporting database management & XML file maintenance", 
                          "✿ Deployed the application with Docker, Kubernetes, and Helm, on RedHat OpenShift", 
                          "✿ Automated daily report analysis with Perl and Node-RED eliminating hours of administrative tasks per week and guaranteeing reliability", 
                          "✿ Independently learned and introduced a new technology (Node-RED) to a team of developers by conducting a live demo & detailed presentation"]
        },
    ];

    // Get the experience list container
    const experienceList = document.querySelector(".experience-list");

    experiences.forEach((experience, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        if (index % 2 === 0) {
            timelineItem.classList.add('left');
        } else {
            timelineItem.classList.add('right');
        }

        const timelineDot = document.createElement('div');
        timelineDot.className = 'timeline-dot';

        const timelineContent = document.createElement('div');
        timelineContent.className = 'timeline-content';

        const title = document.createElement('h3');
        title.className = 'experience-title'; // Add class for styling
        title.textContent = experience.title;

        const company = document.createElement('p');
        company.textContent = experience.company;

        const duration = document.createElement('div');
        duration.className = 'timeline-duration';
        duration.textContent = experience.duration;

        const descriptionList = document.createElement('ul');
        experience.description.forEach(point => {
            const listItem = document.createElement('li');
            listItem.textContent = point;
            descriptionList.appendChild(listItem);
        });

        timelineContent.appendChild(title);
        timelineContent.appendChild(company);
        timelineContent.appendChild(descriptionList);

        timelineItem.appendChild(timelineDot);
        timelineItem.appendChild(timelineContent);
        timelineItem.appendChild(duration); // Append duration to timelineItem

        experienceList.appendChild(timelineItem);
    });

    // Skills array
    const skills = [
        {
            category: "Languages & Databases",
            items: [
                { name: "HTML", logo: "./static/html-5-logo.png" },
                { name: "CSS", logo: "./static/css3-logo.png" },
                { name: "JavaScript", logo: "./static/js-logo.png" },
                { name: "postgreSQL", logo: "./static/sql-logo.png" },
                { name: "Perl", logo: "./static/perl-logo.png" },
                { name: "Node-RED", logo: "./static/node-red-icon.png" }
            ]
        },
        {
            category: "Frameworks & Technologies",
            items: [
                { name: "React.js", logo: "./static/React-icon.png" },
                { name: "Node.js", logo: "./static/nodejs.png" }
            ]
        },
        {
            category: "Tools & Platforms",
            items: [
                { name: "Git", logo: "./static/Git.png" },
                { name: "Docker", logo: "./static/docker-logo.png" },
                { name: "Linux", logo: "./static/linux.png" }
            ]
        }
    ];

    // Get the skills section container
    const skillsSection = document.getElementById("skills");

    // Loop through skills and create list items
    skills.forEach((skillCategory, index) => {
        const skillsCategory = document.createElement('div');
        skillsCategory.classList.add('skills-category', 'box');
        skillsCategory.style.setProperty('--box-index', index);

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = skillCategory.category;

        const techStack = document.createElement('div');
        techStack.classList.add('tech-stack');

        skillCategory.items.forEach((item) => {
            const techItem = document.createElement('div');
            techItem.classList.add('tech-item');

            const techLogo = document.createElement('img');
            techLogo.src = item.logo;
            techLogo.alt = item.name;
            techLogo.classList.add('tech-logo');

            const techLabel = document.createElement('span');
            techLabel.classList.add('tech-label');

            if (item.name === "postgreSQL") {
                techLogo.classList.add('large-icon')
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
});