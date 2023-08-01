// functionality of closeModel
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// functionality of openModel
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const cancelBtn = document.querySelector(".cancel-btn");
const deactivateBtn = document.querySelector(".deactivate-btn");

// first way
// closeModalBtn.addEventListener("click", closeModal);
// cancelBtn.addEventListener("click", closeModal);
// deactivateBtn.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// Second way with optimal code
[closeModalBtn, cancelBtn, deactivateBtn, overlay].forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

openModalBtn.addEventListener("click", openModal);
