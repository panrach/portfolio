import { initializeLightbox } from './lightbox.js';

export function initializeProjects() {
  // Projects array
  const projects = [
    {
      name: "Pantry Pal",
      description:
        "My introduction to web development was through Pantry Pal, a meal plan preperation app; where I worked on the frontend and my friend Janani did the backend :) Users keep track of pantry items, receive recipe suggestions based on their pantry, and receive notifications to purchase & defrost ingredients. The synchronous collaboration features allow users to create groups, share ingredients, and discover group recipes. I securely deployed the frontend and backend using a three-tier architecture with HTTPS and Docker on a Google Cloud VM, ensuring continuous operation and seamless scalability.",
      techStack: ["React.js", "Node.js", "FireBaseDB", "Docker"],
      githubLink: "https://github.com/UTSCC09/project-janani-and-rachel.git",
      youtubeLink: "https://www.youtube.com/watch?v=tRbbwgVwjrE",
      images: [
        { src: "./static/PantryPal1.jpg", caption: "My Pantry + Recipe Recs" },
        { src: "./static/PantryPal2.jpg", caption: "Groups feature" },
        { src: "./static/PantryPal3.jpg", caption: "Recipe Search" },
        {
          src: "./static/PantryPal4.jpg",
          caption: "Automatic ingredient split for a planned recipe",
        },
        { src: "./static/PantryPal5.jpg", caption: "Meal plans" },
      ],
    },
    {
      name: "Stock Portfolio Site",
      description:
        "I developed both the frontend and backend for a social stock trading platform. I designed and implemented a RESTful API with Express.js so users can securely access their personal stock data. Users can create accounts, view stock analytics (covariance, correltion, beta), see stock predictions, send/receive friend requests, view/share stock lists, and create their own portfolios",
      techStack: ["Express.js", "Node.js", "PostgreSQL", "HTML", "CSS"],
      githubLink: "https://github.com/panrach/c43-proj.git",
      images: [
        { src: "./static/stock-er.png", caption: "Database Schema" },
        { src: "./static/stock-data.png", caption: "Viewing stock data" },
      ],
    },
    {
      name: "Pintos Operating System",
      description:
        "Building off an educational OS (Pintos) helped me improve my understanding of low-level programming and OS concepts. I implemented thread synchronization (locks, semaphores, priority donation), system calls for user programs, and virtual memory with demand paging and a second-chance clock algorithm. I also extended the file system to support extensible files, subdirectories, and concurrent access.",
      techStack: ["C", "GDB", "Docker"],
      images: [
        {
          src: "./static/pintos-diagram.png",
          caption: "Priority donation diagram",
        },
        {
          src: "./static/virtual-memory.png",
          caption: "Basic page access flowchart",
        },
      ],
    },
    {
      name: "Personal Website",
      description:
        "I further improved my web development skills by building this website using vanilla HTML and CSS - it is also responsive. See the GitHub README file for credits on the background, cursor, and cherry blossom animation :)",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/panrach/portfolio",
    },
    {
      name: "Tetris",
      description:
        "A fully functioning tetris game built with MIPS assembly - done with my friend Janani :)",
      techStack: ["MIPS Assembly"],
      githubLink: "https://github.com/panrach/b58project.git",
      images: [
        { src: "./static/tetris1.jpg", caption: "Starting the tetris game!" },
        { src: "./static/tetris2.jpg", caption: "Holding a block" },
        { src: "./static/tetris3.jpg", caption: "Cleared a row!" },
      ],
    },
    {
      name: "Job Search Platform",
      description:
        "This platform is Tinder but for job searching! I worked on the database using PostgreSQL, which supports swiping left or right on job postings, scheduling interviews, analytics on swiping habits, and profile customization. I designed the schema, wrote unit tests with Mocha.js, and wrote the queries.",
      techStack: ["PostgreSQL", "Mocha.js", "Git"],
      images: [
        { src: "./static/er-portfolio.png", caption: "Database Schema" },
        {
          src: "./static/unit-test.png",
          caption: "Mocha.js unit test for swiping",
        },
      ],
    },
  ];

  // Get the project list container
  const projectList = document.getElementById("project-list");

  // Loop through projects and create list items
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.name;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    // Create a container for images
    const projectImagesContainer = document.createElement("div");
    projectImagesContainer.classList.add("project-images-container");

    // Check if there are images and create image elements with captions
    if (project.images && project.images.length > 0) {
      project.images.forEach((image) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const projectImage = document.createElement("img");
        projectImage.src = image.src;
        projectImage.alt = image.caption;
        projectImage.classList.add("project-image");

        const imageCaption = document.createElement("p");
        imageCaption.textContent = image.caption;
        imageCaption.classList.add("image-caption");

        imageContainer.appendChild(projectImage);
        imageContainer.appendChild(imageCaption);
        projectImagesContainer.appendChild(imageContainer);
      });
    }

    const projectTechStack = document.createElement("div");
    projectTechStack.classList.add("tech-stack");
    project.techStack.forEach((tech) => {
      const techTag = document.createElement("span");
      techTag.classList.add("tech-tag");
      techTag.textContent = tech;
      projectTechStack.appendChild(techTag);
    });

    const projectLinks = document.createElement("div");
    projectLinks.classList.add("project-links");

    if (project.webLink) {
      const webLink = document.createElement("a");
      webLink.href = project.webLink;
      webLink.target = "_blank";
      webLink.classList.add("project-link");
      webLink.innerHTML = '<i class="fa fa-link"></i>';
      projectLinks.appendChild(webLink);
    }

    if (project.githubLink) {
      const githubLink = document.createElement("a");
      githubLink.href = project.githubLink;
      githubLink.target = "_blank";
      githubLink.classList.add("project-link");
      githubLink.innerHTML = '<i class="fab fa-github"></i>';
      projectLinks.appendChild(githubLink);
    }

    if (project.youtubeLink) {
      const youtubeLink = document.createElement("a");
      youtubeLink.href = project.youtubeLink;
      youtubeLink.target = "_blank";
      youtubeLink.classList.add("project-link");
      youtubeLink.innerHTML = '<i class="fab fa-youtube"></i>';
      projectLinks.appendChild(youtubeLink);
    }

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectLinks);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectImagesContainer); // Append the images container below the description
    projectCard.appendChild(projectTechStack);
    projectList.appendChild(projectCard);
  });
  initializeLightbox();
}
