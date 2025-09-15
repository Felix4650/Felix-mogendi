// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Profile Modal Toggle
const profileBtn = document.getElementById("profileBtn");
const profileModal = document.getElementById("profileModal");
const closeProfile = document.getElementById("closeProfile");

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll + active link toggle
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Smooth scroll
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close mobile menu after click
    navLinks.classList.remove('active');

    // Remove active from all links & set clicked one active
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

// Profile modal open
profileBtn.addEventListener("click", () => {
  profileModal.style.display = "flex";
});

// Profile modal close
closeProfile.addEventListener("click", () => {
  profileModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === profileModal) {
    profileModal.style.display = "none";
  }
});
