// first way
// const navBtn = document.querySelector(".btn-mobile-nav");
// const openHeader = document.querySelector(".header");

// navBtn.addEventListener("click", function () {
//   openHeader.classList.toggle("nav-open");
// });

// second way with well naming convention
const mobileNavButton = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

// functionality of mobile navbar
mobileNavButton.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});
