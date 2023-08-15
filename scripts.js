// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
});

