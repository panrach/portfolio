import { initializeAboutMe } from "./pages/about.js";
import { initializeBlossomAnimation } from "./pages/blossom.js";
import { initializeExperience } from "./pages/experience.js";
import { initializeProjects } from "./pages/project.js";
import { initializeSkills } from "./pages/skills.js";

// (FOR NAVBAR): This function is used to toggle the visibility of sections based on the nav link
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

// (FOR NAVBAR): This function initializes the navigation menu and event listeners
function initializeNavigation() {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");
  const navLinkItems = document.querySelectorAll(".nav-link");

  hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", function (event) {
      navLinks.classList.remove("show"); // Close the menu when a link is clicked
      toggleSections(event); // Call the toggleSections function with the event object
    });
  });
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", toggleSections);
});

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  initializeBlossomAnimation();
  initializeAboutMe();
  initializeProjects();
  initializeExperience();
  initializeSkills();
});
