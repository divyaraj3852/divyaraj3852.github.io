function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const text = "Welcome to My Portfolio";
    let index = 0;

    // Clear any previous content
    textElement.innerHTML = '';

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here
        }
    }

    // Start typing effect
    typeText();

    // Update the second line content with the desired text
    const glossyLineElement = document.getElementById('glossy-line');
    glossyLineElement.textContent = 'Building experiences that captivate and engage.';

    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});


function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active', 'next', 'prev'); // Remove all classes

        if (i === index) {
            testimonial.classList.add('active'); // Show active
        } else if (i === (index + 1) % totalTestimonials) {
            testimonial.classList.add('next'); // Next testimonial
        } else if (i === (index - 1 + totalTestimonials) % totalTestimonials) {
            testimonial.classList.add('prev'); // Previous testimonial
        }
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials; // Loop back to the start
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Loop back to the end
    showTestimonial(currentIndex);
}

document.getElementById('next').addEventListener('click', nextTestimonial);
document.getElementById('prev').addEventListener('click', prevTestimonial);

// Automatically change testimonial every 5 seconds
setInterval(nextTestimonial, 2000); // Change this value for the speed of the transition

showTestimonial(currentIndex);



