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
            description: "Pantry Pal is a meal plan preperation web-app. It helps you keep track of your pantry items and suggests recipes based on the ingredients you currently have. It allows users to save their favorite recipes with reminders to defrost ingredients and purchase missing ingredients. the synchronous collaboration features let users create groups, share ingredients, and discover group recipes. I deployed it securely with Docker on a Google Cloud VM.",
            techStack: ["React.js", "Express.js", "Node.js", "FireBaseDB", "Docker"],
            githubLink: "https://github.com/UTSCC09/project-janani-and-rachel.git", // GitHub repository link
            youtubeLink: "https://www.youtube.com/watch?v=tRbbwgVwjrE" // YouTube video link
        },
        {
            name: "Personal Website",
            description: "I further improved by web development skills by building this website. It is responsive to different screen sizes.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/UTSCC09/project-janani-and-rachel.git", // GitHub repository link
        },
        // You can add other projects here as well
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
            description: ["✿ Migrated a RESTful application from Perl to Node-RED, streamlining environment information tracking, supporting database management & XML file maintenance", 
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
});