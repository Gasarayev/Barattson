const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
//   autoplay: {
    // delay: 2500,
    // disableOnInteraction: false,
//   },

  breakpoints: {
    991:{
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  },
});
