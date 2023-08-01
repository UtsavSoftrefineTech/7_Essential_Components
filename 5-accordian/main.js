"use strict";
const openBtn = document.getElementsByClassName("header");

// functionality of accordian
for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
