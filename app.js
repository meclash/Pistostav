
// MOBILE NAVIGATION

let nav = document.querySelector(".nav");
let hamburgerMenu = document.querySelector(".hamburger-menu")

//opening and closing hamburger menu

hamburgerMenu.addEventListener("click", function () {
    nav.classList.toggle("menu-open");
})


// contact button closes mobile menu

let kontaktBtn = document.querySelector(".kontakt-btn")


kontaktBtn.addEventListener("click", function () {
    nav.classList.remove("menu-open");
})

//opening mobile submenu

let subMenuButton = document.querySelector(".sub-menu__button");
let subMenu = document.querySelector(".sub-menu__toggle");


subMenuButton.addEventListener("click", function () {
  subMenu.classList.toggle("sub-menu__toggle");
})


//MOVING REVIEWS
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel__slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



