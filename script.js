// Toggle menu visibility when hamburger icon is clicked
document.addEventListener('DOMContentLoaded', function () {
  // Toggle menu visibility when hamburger icon is clicked
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const navMenu = document.querySelector("nav ul");

  hamburgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
  
  // Smooth scrolling to section on link click
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Offset for header space
      behavior: "smooth"
    });
  });
});

// Filter projects based on category
const filterButtons = document.querySelectorAll("#project-filter button");
const projects = document.querySelectorAll("#projects article");

filterButtons.forEach(button => {
  button.addEventListener("click", function () {
    const category = button.getAttribute("data-category");

    projects.forEach(project => {
      if (category === "all" || project.classList.contains(category)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeModal = document.getElementById("close-modal");

const projectImages = document.querySelectorAll("#projects figure img");

projectImages.forEach(image => {
  image.addEventListener("click", function () {
    lightbox.style.display = "block";
    lightboxImage.src = image.src;
  });
});

closeModal.addEventListener("click", function () {
  lightbox.style.display = "none";
});

// Form validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // If all fields are valid, submit the form (you can replace this with actual form submission)
  alert("Form submitted successfully!");
});

});

