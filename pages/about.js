export function initializeAboutMe() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.style.display = "block"; // Show "About Me" section by default
    }

    const pianoVideoSection = document.getElementById("piano-video");
    if (pianoVideoSection) {
        pianoVideoSection.style.display = "block"; // Show piano video section by default
    }
}