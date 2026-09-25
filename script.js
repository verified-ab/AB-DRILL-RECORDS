// MOBILE MENU

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", function () {

    nav.classList.toggle("active");

  });


  const links = nav.querySelectorAll("a");

  links.forEach(function (link) {

    link.addEventListener("click", function () {

      nav.classList.remove("active");

    });

  });

}


// FOOTER YEAR

const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}


// IMAGE ERROR CHECK

const images = document.querySelectorAll("img");

images.forEach(function (image) {

  image.addEventListener("error", function () {

    console.log(
      "Could not load image:",
      image.src
    );

  });

});
