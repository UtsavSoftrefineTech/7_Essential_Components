let imageno = 1;
const images = document.querySelectorAll(".image");
const dots = document.querySelectorAll(".dot");

// Set initially image
showImage(imageno);

// functionality of next image show
function nextimg(n) {
  showImage((imageno += n));
}

// Set the current slide image
function currentSlide(n) {
  showImage((imageno = n));
}

// functionality of which image is show
function showImage(n) {
  imageno = n > images.length ? 1 : n < 1 ? images.length : n;

  images.forEach((image) => {
    image.style.display = "none";
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index + 1 === imageno);
  });

  images[imageno - 1].style.display = "block";
}
