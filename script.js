// AB DRILL RECORDS - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Current year in footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mobile menu
    const menuButton = document.getElementById("menu-button");
    const nav = document.getElementById("nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (nav) {
                nav.classList.remove("active");
            }
        });
    });

    // Smooth scrolling
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
