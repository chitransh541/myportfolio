// script.js

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typing animation for tagline
const tagline = document.querySelector(".tagline");
const text = "Full Stack Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    tagline.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

tagline.textContent = "";
typeEffect();
