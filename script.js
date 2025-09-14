// =========================
// 1. Dark/Light Theme Toggle
// =========================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  toggleBtn.textContent = "🌙"; // Moon = switch back to dark
} else {
  toggleBtn.textContent = "☀️"; // Sun = switch to light
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});

// =========================
// 2. Editable Section
// =========================
// Target your "About Me" (change #about-text to match your HTML element ID)
const editBtn = document.getElementById("edit-btn");
const aboutText = document.getElementById("about-text");

if (editBtn && aboutText) {
  editBtn.addEventListener("click", () => {
    if (aboutText.isContentEditable) {
      // Save and disable editing
      aboutText.contentEditable = "false";
      editBtn.textContent = "Edit";
    } else {
      // Enable editing
      aboutText.contentEditable = "true";
      aboutText.focus();
      editBtn.textContent = "Save";
    }
  });
}
