document.body.classList.add("no-scroll");
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");

  // Show loader for exactly 2 seconds
  setTimeout(() => {
    loader.classList.add("fade-out");

    // Optional: remove from DOM after animation
    setTimeout(() => {
      document.body.classList.remove("no-scroll");
      loader.remove();
    }, 600);
  }, 1000);
});
