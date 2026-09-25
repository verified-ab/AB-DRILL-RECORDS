// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

  });


  // Close menu when a link is clicked

  const navigationLinks =
    navigation.querySelectorAll("a");

  navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navigation.classList.remove("active");

    });

  });

}



// ================================
// FOOTER YEAR
// ================================

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}



// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId =
      this.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});



// ================================
// IMAGE ERROR CHECK
// ================================

document.querySelectorAll("img").forEach(function (image) {

  image.addEventListener("error", function () {

    console.log(
      "Image could not be loaded:",
      image.getAttribute("src")
    );

  });

});
