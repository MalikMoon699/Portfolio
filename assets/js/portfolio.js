const filterGallery=(filter,e)=> {
  document.querySelectorAll(".filter").forEach((filterElement) => {
    filterElement.classList.remove("active-filter");
  });

  e.target.classList.add("active-filter");

  document.querySelectorAll(".imgMain > div").forEach((imgCategory) => {
    if (filter === "all" || imgCategory.classList.contains(filter)) {
      imgCategory.style.display = "block";
    } else {
      imgCategory.style.display = "none";
    }
  });
}