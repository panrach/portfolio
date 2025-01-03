// index.js

// Function to show the selected section and hide others
function toggleSections(event) {
    event.preventDefault();

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

// Function to initialize lightbox event listeners
function initializeLightbox() {
    // Create the lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const lightboxCaption = document.createElement('p');
    lightboxCaption.id = 'lightbox-caption';
    lightbox.appendChild(lightboxCaption);

    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);

    const leftArrow = document.createElement('div');
    leftArrow.id = 'left-arrow';
    leftArrow.innerHTML = '&#9664;'; // Left arrow symbol
    lightbox.appendChild(leftArrow);

    const rightArrow = document.createElement('div');
    rightArrow.id = 'right-arrow';
    rightArrow.innerHTML = '&#9654;'; // Right arrow symbol
    lightbox.appendChild(rightArrow);

    let currentIndex = 0;
    let images = [];

    function showImage(index) {
        const image = images[index];
        lightboxImage.src = image.src;
        lightboxCaption.textContent = image.alt || 'No caption available';
        lightbox.classList.add('active');
        currentIndex = index;
    }

    // Add event listener to images
    document.querySelectorAll('.project-image').forEach((image, index) => {
        image.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up
            images = Array.from(document.querySelectorAll('.project-image')).filter(img => img.closest('.project-card') === image.closest('.project-card'));
            showImage(images.indexOf(image));
        });
    });


    // Add event listener to close the lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage && e.target !== leftArrow && e.target !== rightArrow) {
            lightbox.classList.remove('active');
        }
    });

    // Add event listeners for pagination
    leftArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    rightArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.addEventListener("click", toggleSections);
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll(".nav-link");

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    navLinkItems.forEach((link) => {
        link.addEventListener("click", function (event) {
            navLinks.classList.remove('show'); // Close the menu when a link is clicked
            toggleSections(event); // Call the toggleSections function with the event object
        });
    });
    
    // Show the "About Me" section by default
    const aboutSection = document.getElementById("about");
    aboutSection.style.display = "block";  // Show "About Me" section by default

    const pianoVideoSection = document.getElementById("piano-video");
    if (pianoVideoSection) {
        pianoVideoSection.style.display = "block";  // Show piano video section by default
    }

    // Cherry blossom animation
    // code from https://codepen.io/rudtjd2548/pen/qBpVzxP
    const blossomToggle = document.getElementById("blossom-toggle");
    const canvas = document.getElementById("blossom_canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const TOTAL = 100;
    let petalArray = [];
    let animationFrameId;
    let isBlossomActive = false;

    const petalImg = new Image();
    petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";
    petalImg.addEventListener("load", () => {
        for (let i = 0; i < TOTAL; i++) {
            petalArray.push(new Petal());
        }
    });

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        petalArray.forEach((petal) => petal.animate());
        animationFrameId = window.requestAnimationFrame(render);
    }

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    class Petal {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height * 2 - canvas.height;
            this.w = 25 + Math.random() * 15;
            this.h = 20 + Math.random() * 10;
            this.opacity = this.w / 40;
            this.flip = Math.random();

            this.xSpeed = 0.5 + Math.random() * 1; // Set horizontal speed
            this.ySpeed = 0.5 + Math.random() * 1; // Set vertical speed
            this.flipSpeed = Math.random() * 0.03;
        }

        draw() {
            if (this.y > canvas.height || this.x > canvas.width) {
                this.x = -petalImg.width;
                this.y = Math.random() * canvas.height * 2 - canvas.height;
                this.xSpeed = 0.5 + Math.random() * 1; // Reset horizontal speed
                this.ySpeed = 0.5 + Math.random() * 1; // Reset vertical speed
                this.flip = Math.random();
            }
            ctx.globalAlpha = this.opacity;
            ctx.drawImage(
                petalImg,
                this.x,
                this.y,
                this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
                this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
            );
        }

        animate() {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
            this.flip += this.flipSpeed;
            this.draw();
        }
    }

    blossomToggle.addEventListener("click", () => {
        isBlossomActive = !isBlossomActive;
        blossomToggle.classList.toggle("active", isBlossomActive);
        if (isBlossomActive) {
            canvas.style.display = "block";
            petalArray = []; // Reset the petal array
            for (let i = 0; i < TOTAL; i++) {
                petalArray.push(new Petal());
            }
            if (!animationFrameId) {
                render();
            }
        } else {
            canvas.style.display = "none";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            window.cancelAnimationFrame(animationFrameId); // Stop the animation
            animationFrameId = null; // Reset the animation frame ID
            petalArray = []; // Clear the petal array
        }
    });

    // Projects array, including Pantry Pal
    const projects = [
        {
            name: "Pantry Pal",
            description: "Pantry Pal is a meal plan preperation web-app - I did frontend and my friend Janani did backend :) Users keep track of pantry items, receive recipe suggestions based on their pantry, and receive notifications to purchase & defrost ingredients. The synchronous collaboration features allow users to create groups, share ingredients, and discover group recipes. Pantry Pal was securely deployed with Docker on a Google Cloud VM.",
            techStack: ["React.js", "Express.js", "Node.js", "FireBaseDB", "Docker"],
            githubLink: "https://github.com/UTSCC09/project-janani-and-rachel.git", // GitHub repository link
            youtubeLink: "https://www.youtube.com/watch?v=tRbbwgVwjrE",
            images: [{ src: "./static/PantryPal1.jpg", caption: "My Pantry + Recipe Recs" }, 
                    { src: "./static/PantryPal2.jpg", caption: "Groups feature" }, 
                    { src: "./static/PantryPal3.jpg", caption: "Recipe Search" },
                    { src: "./static/PantryPal4.jpg", caption: "Automatic ingredient split for a planned recipe" },
                    { src: "./static/PantryPal5.jpg", caption: "Meal plans" }],
        },
        {
            name: "Tetris",
            description: "A fully functioning tetris game built with MIPS assembly - done with my friend Janani :)",
            techStack: ["MIPS Assembly"],
            githubLink: "https://github.com/panrach/b58project.git",
            images: [{ src: "./static/tetris1.jpg", caption: "Starting the tetris game!" }, { src: "./static/tetris2.jpg", caption: "Holding a block" }, { src: "./static/tetris3.jpg", caption: "Cleared a row!" }]
        },
        {
            name: "Personal Website",
            description: "I further improved my web development skills by building this website using vanilla HTML and CSS - it is also responsive. Please check the GitHub README file for credits on the background, cursor, and cherry blossom animation.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/panrach/portfolio"
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

        // Create a container for images
        const projectImagesContainer = document.createElement('div');
        projectImagesContainer.classList.add('project-images-container');

        // Check if there are images and create image elements with captions
        if (project.images && project.images.length > 0) {
        project.images.forEach(image => {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const projectImage = document.createElement('img');
            projectImage.src = image.src;
            projectImage.alt = image.caption;
            projectImage.classList.add('project-image');

            const imageCaption = document.createElement('p');
            imageCaption.textContent = image.caption;
            imageCaption.classList.add('image-caption');

            imageContainer.appendChild(projectImage);
            imageContainer.appendChild(imageCaption);
            projectImagesContainer.appendChild(imageContainer);
        });
    }

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
        projectCard.appendChild(projectImagesContainer); // Append the images container below the description
        projectCard.appendChild(projectTechStack);

        projectList.appendChild(projectCard);
    });
    initializeLightbox();

    // Experience array
    const experiences = [
        {
            title: "DevOps Intern",
            company: "SS&C Technologies",
            duration: "September 2023 - April 2024",
            description: ["✿ Migrated a RESTful application from Perl to Node-RED, streamlining environment information tracking, and supporting database management & XML file maintenance", 
                          "✿ Deployed the application with Docker, Kubernetes, and Helm, on RedHat OpenShift", 
                          "✿ Automated daily report analysis with Perl and Node-RED eliminating hours of administrative tasks per week and guaranteeing reliability", 
                          "✿ Independently learned and introduced a new technology (Node-RED) to a team of developers by conducting a live demo & detailed presentation"],
            image: "./static/SS&C_Technologies.png"
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
        company.className = 'company-name'; // Add class for styling
        company.textContent = experience.company;

        const duration = document.createElement('div');
        duration.className = 'timeline-duration';
        duration.textContent = experience.duration;

        const experienceImage = document.createElement('img');
        experienceImage.src = experience.image; // Replace with the actual image path
        experienceImage.alt = 'Experience Image';
        experienceImage.className = 'experience-image';

        const descriptionList = document.createElement('ul');
        experience.description.forEach(point => {
            const listItem = document.createElement('li');
            listItem.textContent = point;
            descriptionList.appendChild(listItem);
        });
        timelineContent.appendChild(experienceImage); // Add the image to the timeline content
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
                { name: "C", logo: "./static/C.png" },
                { name: "JavaScript", logo: "./static/js-logo.png" },
                { name: "Python", logo: "./static/Python.png" },
                { name: "Perl", logo: "./static/perl-logo.png" },
                { name: "Node-RED", logo: "./static/node-red-icon.png" },
                { name: "HTML", logo: "./static/html-5-logo.png" },
                { name: "CSS", logo: "./static/css3-logo.png" },
                { name: "postgreSQL", logo: "./static/sql-logo.png" },
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