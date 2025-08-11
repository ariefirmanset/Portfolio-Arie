// Initialize AOS Animation Library
AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  mirror: false,
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.querySelector("i").classList.toggle("fa-bars");
  menuToggle.querySelector("i").classList.toggle("fa-times");
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.querySelector("i").classList.add("fa-bars");
    menuToggle.querySelector("i").classList.remove("fa-times");
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add("dark-mode");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
} else {
  document.body.classList.remove("dark-mode");
  themeIcon.classList.add("fa-moon");
  themeIcon.classList.remove("fa-sun");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.classList.add("fa-moon");
    themeIcon.classList.remove("fa-sun");
  }
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll(".skill-progress");
const animateSkills = () => {
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }
  });
};

window.addEventListener("load", animateSkills);

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Thank you for your message! This is a demo form, so no message was actually sent."
    );
    contactForm.reset();
  });
}

const swiper = new Swiper(".mySwiper", {
  loop: false,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

// var c = document.getElementById("myCircle");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(350, 350, 250, 0, 2 * Math.PI);
// ctx.lineWidth = 4;
// ctx.strokeStyle = "White";
// ctx.stroke();
