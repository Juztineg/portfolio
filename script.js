// 🌙☀️ Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeToggle.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

// ✏️ Editable About Section
const editBtn = document.getElementById("edit-btn");
const aboutText = document.getElementById("about-text");

editBtn.addEventListener("click", () => {
  if (aboutText.isContentEditable) {
    aboutText.contentEditable = "false";
    editBtn.textContent = "Edit";
  } else {
    aboutText.contentEditable = "true";
    aboutText.focus();
    editBtn.textContent = "Save";
  }
});

// 👀 Simple Animation (your original script moved here)
const items = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));
