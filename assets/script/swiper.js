function createSwiper(selector, slidesPerView) {
  return new Swiper(selector, {
    direction: "horizontal",
    loop: true,
    slidesPerView: slidesPerView,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      991: {
        slidesPerView: slidesPerView,
      },
      768: {
        slidesPerView: slidesPerView - 1,
      },
      0: {
        slidesPerView: slidesPerView - 2,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.feedback')) {
    createSwiper('.feedback', 3);
  }
  if (document.querySelector('.slider')) {
    createSwiper('.slider', 4);
  }
});
