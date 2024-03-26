/* Модальное окно */
const clickBurger = document.querySelector(".navbar__burger");

clickBurger.addEventListener("click", function () {
  clickBurger.classList.toggle("burger-activ");
});
const clickMenu = document.querySelector(".modalWindowMenu");
const clickModal = document.querySelector(".modalWindow");
const closeButton = document.querySelector(".closeButton");

clickMenu.addEventListener("click", function () {
  clickModal.classList.remove("hidden");
  closeButton.classList.remove("hidden");
});
closeButton.addEventListener("click", function () {
  closeButton.classList.add("hidden");
  clickModal.classList.add("hidden");
});

/* Открыть - Закрыть Бургер */
const navbarBurger = document.querySelector(".navbar__burger");
const navigationList = document.querySelector(".navigation__list");

let isMenuOpen = false;

navbarBurger.addEventListener("click", function () {
  if (isMenuOpen) {
    navigationList.classList.add("navigation__close");
  } else {
    navigationList.classList.add("navigation__open");
    navigationList.classList.remove("navigation__close");
  }

  // Обновляем состояние меню
  isMenuOpen = !isMenuOpen;
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelectorAll(".navigation").forEach(function (element) {
      element.style.opacity = 1;
    });
  }, 1000); // ... миллисекунд (. секунды) задержки
});

$(document).ready(function () {
  $(window).scroll(function () {
    let scrollPosition = $(this).scrollTop(); // Текущее положение скролла

    // Получаем элемент с картинкой
    let $movingImage = $(".movingImage");

    // Изменяем margin-left картинки в зависимости от значения скролла
    let newMarginLeft = 293 - scrollPosition; // Пример, как можно изменять значение margin-left
    $movingImage.css("margin-left", newMarginLeft + "px");
  });
});

let slider = document.getElementById("myRange");
let areaValue = document.getElementById("areaValue");

areaValue.innerHTML = slider.value; // Устанавливаем начальное значение

slider.oninput = function () {
  let newValue = this.value;
  areaValue.innerHTML = newValue;
};
const range = document.querySelector('input[type="range"]');

range.addEventListener("input", function () {
  const value = ((range.value - range.min) / (range.max - range.min)) * 100;
  range.style.background = `linear-gradient(to right, #be69d5 ${value}%, #baf1ff ${value}%)`;
});
