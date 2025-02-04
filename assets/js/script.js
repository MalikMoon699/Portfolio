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
