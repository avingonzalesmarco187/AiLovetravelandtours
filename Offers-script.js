

/*  Reveal on Scroll (fade-in, slide-up, zoom-in)  */
let revealElements = document.querySelectorAll(".reveal");

let revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // animate once, stay visible
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

/* Light Parallax Backgrounds  */
let parallaxElements = document.querySelectorAll(".parallax");
let ticking = false;

let updateParallax = () => {
  parallaxElements.forEach((element) => {
    let speed = parseFloat(element.dataset.speed) || 0.3;
    let section = element.parentElement;
    let rect = section.getBoundingClientRect();

    // Only move backgrounds that are on screen
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      let offset = (rect.top - window.innerHeight / 2) * speed;
      element.style.transform = `translate3d(0, ${offset * -0.25}px, 0)`;
    }
  });
  ticking = false;
};

let onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
};

/* Skip parallax for users who prefer reduced motion */
let prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  window.addEventListener("scroll", onScroll, { passive: true });
  updateParallax();
}

/*  Smooth Scroll for Anchor Buttons  */
let anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    let targetId = link.getAttribute("href");

    // Ignore placeholder links (href="#")
    if (targetId === "#") {
      event.preventDefault();
      return;
    }

    let targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
