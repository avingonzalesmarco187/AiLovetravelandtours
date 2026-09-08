document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-fade");

  let menuToggle = document.querySelector(".menu-toggle");
  let navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  let currentPage = window.location.pathname.split("/").pop() || "index.html";
  let navAnchors = document.querySelectorAll(".nav-links a");

  navAnchors.forEach((link) => {
    let href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  let revealElements = document.querySelectorAll(".reveal");

  let revealOnScroll = () => {
    let triggerBottom = window.innerHeight * 0.9;
    revealElements.forEach((element) => {
      let top = element.getBoundingClientRect().top;
      if (top < triggerBottom) {
        element.classList.add("visible");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  let bubbleContainer = document.querySelector(".bubbles");
  if (bubbleContainer) {
    for (let i = 0; i < 18; i++) {
      let bubble = document.createElement("span");
      bubble.className = "bubble";
      let size = Math.random() * 30 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
      bubble.style.animationDelay = `${Math.random() * 8}s`;
      bubbleContainer.appendChild(bubble);
    }
  }

  let galleryItems = document.querySelectorAll(".gallery-item");
  let lightbox = document.querySelector(".lightbox");
  let lightboxImage = document.querySelector(".lightbox img");
  let lightboxClose = document.querySelector(".lightbox-close");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      let img = item.querySelector("img");
      if (lightbox && lightboxImage && img) {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add("active");
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox) {
      lightbox.classList.remove("active");
    }
  });
});
