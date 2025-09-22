// Theme persistence
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle?.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  }
});

// Mobile nav
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("nav-links");
menuBtn?.addEventListener("click", () => {
  const open = navLinks?.classList.toggle("is-open");
  const expanded = open ? "true" : "false";
  menuBtn.setAttribute("aria-expanded", expanded);
});

// About section editable with Save/Cancel + persistence
const aboutContent = document.getElementById("aboutContent");
const aboutEditBtn = document.getElementById("aboutEditBtn");
const aboutSaveBtn = document.getElementById("aboutSaveBtn");
const aboutCancelBtn = document.getElementById("aboutCancelBtn");
const aboutActions = document.getElementById("aboutActions");

// Load saved about content if exists
const savedAbout = localStorage.getItem("aboutContentHTML");
if (savedAbout && aboutContent) {
  aboutContent.innerHTML = savedAbout;
}

let aboutBackupHTML = "";

aboutEditBtn?.addEventListener("click", () => {
  if (!aboutContent) return;
  aboutBackupHTML = aboutContent.innerHTML;
  aboutContent.setAttribute("contenteditable", "true");
  aboutContent.focus();
  aboutEditBtn.hidden = true;
  if (aboutActions) aboutActions.hidden = false;
});

aboutSaveBtn?.addEventListener("click", () => {
  if (!aboutContent) return;
  aboutContent.removeAttribute("contenteditable");
  localStorage.setItem("aboutContentHTML", aboutContent.innerHTML);
  if (aboutActions) aboutActions.hidden = true;
  if (aboutEditBtn) aboutEditBtn.hidden = false;
});

aboutCancelBtn?.addEventListener("click", () => {
  if (!aboutContent) return;
  aboutContent.innerHTML = aboutBackupHTML;
  aboutContent.removeAttribute("contenteditable");
  if (aboutActions) aboutActions.hidden = true;
  if (aboutEditBtn) aboutEditBtn.hidden = false;
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Lightbox for project images
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.setAttribute("src", src);
  lightboxImg.setAttribute("alt", alt || "Expanded image");
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

document.querySelectorAll('img[data-lightbox="project"]').forEach(img => {
  img.addEventListener("click", () => openLightbox(img.getAttribute("src"), img.getAttribute("alt") || "Project image"));
});

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

lightboxClose?.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});


