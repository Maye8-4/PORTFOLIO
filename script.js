```javascript
// ===========================================
// MAYETTE'S PORTFOLIO JAVASCRIPT
// ===========================================

// 1. MOBILE NAVIGATION MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕ Close" : "☰ Menu";
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰ Menu";
    });
  });
}

// 2. LIGHT AND DARK THEME BUTTON
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.textContent = "☀️ Theme";

  themeToggle.addEventListener("click", function () {
    const isLightMode = document.body.classList.toggle("light-theme");

    themeToggle.textContent = isLightMode
      ? "🌙 Dark Mode"
      : "☀️ Theme";
  });
}

// 3. SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(
  "#about, #projects, #skills, #contact, .card"
);

revealElements.forEach(function (element) {
  element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach(function (element) {
    observer.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("visible");
  });
}

// 4. AUTOMATIC FOOTER YEAR
const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 5. CONSOLE MESSAGE
console.log("Welcome to Mayette's Portfolio!");
```
