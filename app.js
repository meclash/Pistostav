
// MOBILE NAVIGATION

let nav = document.querySelector(".nav");
let hamburgerMenu = document.querySelector(".hamburger-menu")

hamburgerMenu.addEventListener("click", function () {
    nav.classList.toggle("menu-open");
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
  var dots = document.getElementsByClassName("carousel__indicator");
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










// // REVIEW CAROUSEL

// const track = document.querySelector(".carousel__track");
// const slides = Array.from(track.children);
// const nextButton = document.querySelector(".carousel__button--right");
// const prevButton = document.querySelector(".carousel__button--left");
// const dotsNav = document.querySelector(".carousel__nav");
// const dots = Array.from (dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// //arrange the slide next to one another
// const setSlidePosition = (slide, index) => {
//     slides.style.left = slideWidth * index + "px";
// };

// slides.forEach(setSlidePosition);

// // moving slides to the left

// //when I click right ,nove slides to the right

// nextButton.addEventListener ("click", e => {
//     const currentSlide = track.querySelector(".currentSlide");
//     const nextSlide = currentSlide.nextElementSibling;
//     const amountToMove = nextSlide.style.left;
//     track.style.transform = "translateX(-" + amountToMove

//     //move to the next slide
// })


// //moving slides when clicking on carousel nav


