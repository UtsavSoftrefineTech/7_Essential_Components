"use strict";

const allUsers = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
];

const itemsPerPage = 2; // Number of items to display per page
let currentPage = 1; // Current page number

const initialPageData = getCurrentPageData(allUsers, currentPage);
renderUsers(initialPageData);

const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
prevBtn.addEventListener("click", handlePaginationClick);
nextBtn.addEventListener("click", handlePaginationClick);

const pageLinks = document.querySelectorAll(".page-link");
pageLinks.forEach((link) => {
  link.addEventListener("click", handlePageLinkClick);
});

function renderUsers(users) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.textContent = user;
    content.appendChild(userDiv);
  });
}

// return current page data using array slice method
function getCurrentPageData(allData, currentPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, allData.length);
  return allData.slice(startIndex, endIndex);
}

// functionality of previous button and next button
function handlePaginationClick(event) {
  const target = event.target.closest("button");
  if (target.id === "previous" && currentPage > 1) {
    currentPage = currentPage - 1;
    console.log("Previous Button is Press");
  } else if (
    target.id === "next" &&
    currentPage < Math.ceil(allUsers.length / itemsPerPage)
  ) {
    currentPage = currentPage + 1;
    console.log("Next Button is Press");
  }

  updatePagination();
  const currentPageData = getCurrentPageData(allUsers, currentPage);
  renderUsers(currentPageData);
}

// functionality of particular page
function handlePageLinkClick(event) {
  console.log(event.target.dataset.page);
  const page = event.target.dataset.page;
  currentPage = parseInt(page);
  updatePagination();
  const currentPageData = getCurrentPageData(allUsers, currentPage);
  renderUsers(currentPageData);
}

function updatePagination() {
  // Disable "Previous" button when on the first page
  if (currentPage === 1) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = "50%";
  } else {
    prevBtn.disabled = false;
    prevBtn.style.opacity = "100%";
  }

  // Disable "Next" button when on the last page
  if (currentPage === Math.ceil(allUsers.length / itemsPerPage)) {
    nextBtn.disabled = true;
    nextBtn.style.opacity = "50%";
  } else {
    nextBtn.disabled = false;
    nextBtn.style.opacity = "100%";
  }
  generatePaginationLinks();
}

function generatePaginationLinks() {
  const totalPages = Math.ceil(allUsers.length / itemsPerPage);
  const pageLinks = document.querySelectorAll(".page-link");
  const pagesContainer = document.querySelector(".pages");
  pagesContainer.innerHTML = "";

  if (totalPages <= 7) {
    // Case 1: Show all page links
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = createPageLink(i);
      pagesContainer.appendChild(pageLink);
    }
  } else {
    // Determine the appropriate start and end points for page links
    let startPage, endPage;
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
      console.log("currentPage <= 4", startPage, endPage);
    } else if (currentPage >= totalPages - 3) {
      startPage = totalPages - 4;
      endPage = totalPages;
      console.log("currentPage >= totalPages - 3", startPage, endPage);
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
      console.log("else", startPage, endPage);
    }

    // Add the first page link
    pagesContainer.appendChild(createPageLink(1));

    // Add ellipsis if necessary
    if (startPage > 1) {
      pagesContainer.appendChild(createEllipsis());
    }

    // Add intermediate page links
    for (let i = startPage + 1; i < endPage; i++) {
      const pageLink = createPageLink(i);
      pagesContainer.appendChild(pageLink);
    }

    // Add ellipsis if necessary
    if (endPage < totalPages - 1) {
      pagesContainer.appendChild(createEllipsis());
    }

    // Add the last page link
    pagesContainer.appendChild(createPageLink(totalPages));
  }
}

// Helper function to create a page link
function createPageLink(pageNumber) {
  const li = document.createElement("li");
  li.classList.add("page-link");
  li.textContent = pageNumber;
  li.dataset.page = pageNumber;
  li.addEventListener("click", handlePageLinkClick);
  if (pageNumber === currentPage) {
    li.classList.add("active");
  }
  return li;
}

// Helper function to create an ellipsis
function createEllipsis() {
  const li = document.createElement("li");
  li.textContent = "...";
  return li;
}

// Call updatePagination on initial page load
updatePagination();
