'use strict';

var slides = document.querySelectorAll('.feedback__item');
var dots = document.querySelectorAll('.controls__toggle');
var leftArrow = document.querySelector('.feedback__button--left');
var rightArrow = document.querySelector('.feedback__button--right');
var slideIndex = 1;
var i;

var setControlState = function () {
  dots.forEach(function (it) {
    it.classList.remove("controls__toggle--active");
  });
  dots[slideIndex - 1].classList.add("controls__toggle--active");
};

var showSlides = function (n) {
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  slides.forEach(function (it) {
    it.style.display = "none";
  })
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.display = "block";
  setControlState();
};

var plusSlide = function () {
  showSlides(slideIndex += 1);
};

var minusSlide = function () {
  showSlides(slideIndex -= 1);
};

var clickControl = function (control) {
  control.addEventListener('click', function () {
    slideIndex = control.dataset.filter
    showSlides(slideIndex);    
  });
}

leftArrow.addEventListener('click', function() {
  minusSlide();
});

rightArrow.addEventListener('click', function() {
  plusSlide();
});

dots.forEach(function (it) {
  clickControl(it);
});
