// Drop Down

let arrow = document.getElementById("dropDown");
let dropDown = document.getElementById("firstDrop");

arrow.addEventListener("mouseover", () => {
  if (dropDown.hasAttribute("hidden")) {
    dropDown.removeAttribute("hidden");
  }
});

arrow.addEventListener("mouseout", () => {
  dropDown.setAttribute("hidden", "");
});

let deepArrow = document.getElementById("deepDropDown");
let deepDropDown = document.getElementById("deepDrop");

deepArrow.addEventListener("mouseover", () => {
  if (deepDropDown.hasAttribute("hidden")) {
    deepDropDown.removeAttribute("hidden");
  }
});

deepArrow.addEventListener("mouseout", () => {
  deepDropDown.setAttribute("hidden", "");
});

// navbar

const hamburger = document.getElementsByClassName("hamburger")[0];
const toggle = document.getElementsByClassName("toggle")[0];
const navList = document.getElementsByClassName("navList")[0];

hamburger.addEventListener("click", () => {
  navList.classList.toggle("navList");
  toggle.classList.toggle("toggle");
});
