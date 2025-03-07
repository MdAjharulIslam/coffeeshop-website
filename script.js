const navbarLinks = document.querySelectorAll(".nav-menu .nav-item");
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");

openMenuButton.addEventListener('click', () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle('show-mobile-menu');
});

navbarLinks.forEach(link => {
  // Close menu when a link is clicked
  link.addEventListener("click", () => openMenuButton.click());
});

// Close menu when the close button is clicked
closeMenuButton.addEventListener('click', () => openMenuButton.click());

/* Swiper JS */
