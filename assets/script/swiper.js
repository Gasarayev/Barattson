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
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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

function createSwiperVac(selector, slidesPerView) {
  return new Swiper(selector, {
    direction: "horizontal",
    loop: true,
    slidesPerView: slidesPerView,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      991: {
        slidesPerView: slidesPerView,
      },
      0: {
        slidesPerView: slidesPerView -1,
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
  if (document.querySelector('.swiper-container_vacancy')) {
    createSwiperVac('.swiper-container_vacancy', 2);
  }
});
