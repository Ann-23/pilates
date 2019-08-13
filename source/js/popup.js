'use strict';

var popUp = document.querySelector(".pop-up");
var buttonClose = popUp.querySelector(".pop-up__button-close");
var buttonCheck = popUp.querySelector(".button--sign-up");
var levelClick = document.querySelector(".level");
var ESC_KEYCODE = 27;

levelClick.addEventListener("click", function() {
  if (popUp.style.display = "none") {
    popUp.style.display = "block";
  }
});

buttonCheck.addEventListener("click", function(evt) {
  evt.preventDefault();
});

var closeModal = function () {
	if (popUp.style.display = "block") {
    popUp.style.display = "none";
  }
};

buttonClose.addEventListener("click", closeModal);

var onEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeModal();
  }
};

document.addEventListener("keydown", onEscPress);
