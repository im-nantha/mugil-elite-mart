document.addEventListener("DOMContentLoaded", function () {
    // If URL contains a hash, scroll to it
    if (window.location.hash) {
        const id = window.location.hash.substring(1); // remove #
        scrollToSection(id);

        // Run again after images/styles load to ensure correct position
        window.addEventListener("load", function () {
            scrollToSection(id);
        });
    }

    // Function to scroll smoothly
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
});