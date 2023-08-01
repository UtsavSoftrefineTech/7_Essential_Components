"use strict";
function opencontent(event, contentName) {
  const contentInfo = document.getElementsByClassName("content");
  const tabLinks = document.getElementsByClassName("tablink");

  // first way
  // for (var i = 0; i < contentInfo.length; i++) {
  //   contentInfo[i].classList.remove("active");
  // }

  // for (var i = 0; i < tabLinks.length; i++) {
  //   tabLinks[i].classList.remove("active");
  // }

  // second way with optimal code
  for (const key of contentInfo) {
    key.classList.remove("active");
  }

  for (const key of tabLinks) {
    key.classList.remove("active");
  }

  // initial add active class
  document.getElementById(contentName).classList.add("active");
  event.currentTarget.classList.add("active");
}
