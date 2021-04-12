// locomotive Scroll

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// Menu Burger
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  // console.log(burger)
});
