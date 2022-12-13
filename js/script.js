require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";

import tabs from "./modules/tabs";
import timer from "./modules/timer";
import slider from "./modules/slider";
import modal from "./modules/modal";
import forms from "./modules/forms";
import cards from "./modules/cards";
import calc from "./modules/calc";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    5000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  timer(".timer", "2022-12-31");
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    curretnCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  modal("[data-modal]", ".modal", modalTimerId);
  forms("form", modalTimerId);
  cards();
  calc();
});

// Простая версия слайдера
// showSlides(slideIndex);
// проставление нуля, если картинок меньше 10
// if(slides.length < 10) {
// total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }
// показ слайдев
// function showSlides(n) {
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   slides.forEach((item) => (item.style.display = "none"));
//   slides[slideIndex - 1].style.display = "block";
//   if(slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//     } else {
//       current.textContent = slideIndex;
//     }
// }
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }
// работа стрелок
// prev.addEventListener("click", () => {
//   plusSlides(-1);
// });
// next.addEventListener("click", () => {
//   plusSlides(1);
// });
