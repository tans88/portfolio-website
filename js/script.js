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

// sends email through contact form --> don't forget to clear the values in the boxes after email is sent 