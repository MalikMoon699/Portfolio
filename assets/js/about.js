let skillsAnimation = document.querySelectorAll(".skills-animation");

skillsAnimation.forEach((item) => {
  new Waypoint({
    element: item,
    offset: "80%",
    handler: function (direction) {
      let progress = item.querySelectorAll(".progress-bar");
      progress.forEach((el) => {
        el.style.width = el.getAttribute("aria-valuenow") + "%";
      });
    },
  });
});


let currentIndex = 0;
const sliders = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');
const sliderInnerContainer = document.querySelector('.sliderInnerContainer');

const moveToNext=()=> {
  sliders[currentIndex].classList.remove('active-1');
  dots[currentIndex].classList.remove('dotActive');
  
  currentIndex = (currentIndex + 1) % sliders.length;

  sliders[currentIndex].classList.add('active-1');
  dots[currentIndex].classList.add('dotActive');
  
  sliderInnerContainer.style.transform = `translateX(-${105 * currentIndex}%)`;
}

setInterval(moveToNext, 4000);

sliders[currentIndex].classList.add('active-1');
dots[currentIndex].classList.add('dotActive');
sliderInnerContainer.style.transform = `translateX(-${110 * currentIndex}%)`;
