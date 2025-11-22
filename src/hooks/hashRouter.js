function waitForSectionAndScroll() {
  const hash = window.location.hash;
  if (!hash) return;

  const id = hash.substring(1);
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    // Keep checking every 100ms until React renders the element
    setTimeout(waitForSectionAndScroll, 100);
  }
}

// Run after everything, including React rendering
window.addEventListener("load", () => {
  setTimeout(waitForSectionAndScroll, 100);
});