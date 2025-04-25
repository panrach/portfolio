// Function to initialize lightbox event listeners
export function initializeLightbox() {
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
