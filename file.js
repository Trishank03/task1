// JavaScript code for the image slideshow

// Get all the slide elements
var slides = document.querySelectorAll('.slide');

// Index to keep track of the current slide
var currentSlide = 0;

// Function to show the current slide
function showSlide() {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Show the current slide
    slides[currentSlide].style.display = 'block';
}

// Function to move to the next slide
function nextSlide() {
    currentSlide++;
    // If at the end, go back to the first slide
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

// Function to move to the previous slide
function prevSlide() {
    currentSlide--;
    // If at the beginning, go to the last slide
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide();
}

// Initial display of the first slide
showSlide();

// Set up an interval to automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000);