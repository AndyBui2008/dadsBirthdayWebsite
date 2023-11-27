function animateImage(event) {
    event.preventDefault(); // Prevent the default behavior of the button click

    const animatedImage = document.getElementById('animatedImage');

    // Ensure the image is hidden before the animation
    animatedImage.style.display = 'none';

    // Reset the animation by cloning the element
    const newElement = animatedImage.cloneNode(true);
    animatedImage.parentNode.replaceChild(newElement, animatedImage);

    // Display the image and trigger the animation after a short delay
    setTimeout(() => {
        newElement.style.display = 'block';
        newElement.style.animation = 'flyUp 1s ease-in-out';
        newElement.style.opacity = '0'; // Fade out the image during the animation
    }, 10);

    return false; // Prevent the default behavior of the button click
}

