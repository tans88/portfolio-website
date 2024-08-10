// controls the swiping in the skills section
var swiper = new Swiper(".swiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// mobile menu

const menuIcon = document.getElementById("menu-icon");
const exitMenu = document.getElementById("exit-menu");
const navMenu = document.getElementById("nav-menu");

const openMenu = () => {
  if (window.innerWidth <= 950){
    navMenu.style.display = "flex";
    menuIcon.style.display = "none";
    exitMenu.style.display = "block";
  }
};

const closeMenu = () => {
  if (window.innerWidth <= 950){
    navMenu.style.display = "none";
    menuIcon.style.display = "block";
    exitMenu.style.display = "none";
  }
};

menuIcon.addEventListener("click", openMenu);
exitMenu.addEventListener("click", closeMenu);