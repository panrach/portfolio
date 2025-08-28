export function initializeExperience() {
  const experiences = [
    {
      title: "Developer",
      company: "Bank of Canada",
      duration: "May 2025 - August 2025",
      description: [
        "✿ Analytic Environment Data Services Team",
        "✿ Developed pipelines to ingest data in a data lake with Python and Azure Databricks.",
        "✿ Optimized a high-volume data pipeline with Apache Spark, reducing raw-to-curated transformations by 50%.",
        "✿ Collaborated with stakeholders to define pipeline requirements and delivered knowledge transfers, simplifying pipeline maintenance.",
        "✿ Implemented unit tests with unittest and MagicMock for Spark transformation functions.",
        "✿ Implemented full-stack features for an economic forecasting webapp, integrating a React.js frontend, FastAPI backend, and PostgreSQL database.",
        "✿ Designed and implemented a reusable React.js component library.",
        "✿ Developed unit tests with Jest.js, validating component behavior and ensuring code quality."
      ],
      image: "./static/BankOfCanada.svg.webp",
    },
    {
      title: "Software Engineer",
      company: "SS&C Technologies",
      duration: "September 2023 - April 2024",
      description: [
        "✿ Proactively self-learned and introduced Node-RED to a team of software developers through a live demo, providing a streamlined tool for process automation.",
        "✿ Modernized a legacy RESTful application with Node-RED and JavaScript.",
        "✿ Extended the application with remote environments and GitHub integration using ShellScript.",
        "✿ Deployed the application with Docker, Kubernetes, and Helm on RedHat OpenShift to ensure continuous operation and seamless scalability.",
        "✿ Developed an automation application that analyzes daily reports and emails the results using Perl and Node-RED.",
      ],
      image: "./static/SS&C_Technologies.png",
    },
  ];

  // Get the experience list container
  const experienceList = document.querySelector(".experience-list");

  experiences.forEach((experience, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    if (index % 2 === 0) {
      timelineItem.classList.add("left");
    } else {
      timelineItem.classList.add("right");
    }

    const timelineDot = document.createElement("div");
    timelineDot.className = "timeline-dot";

    const timelineContent = document.createElement("div");
    timelineContent.className = "timeline-content";

    const title = document.createElement("h3");
    title.className = "experience-title"; // Add class for styling
    title.textContent = experience.title;

    const company = document.createElement("p");
    company.className = "company-name"; // Add class for styling
    company.textContent = experience.company;

    const duration = document.createElement("div");
    duration.className = "timeline-duration";
    duration.textContent = experience.duration;

    const experienceImage = document.createElement("img");
    experienceImage.src = experience.image; // Replace with the actual image path
    experienceImage.alt = "Experience Image";
    experienceImage.className = "experience-image";

    const descriptionList = document.createElement("ul");
    experience.description.forEach((point) => {
      const listItem = document.createElement("li");
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
}
