new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-btn--prev',
    prevEl: '.swiper-btn--next',
  },
  mousewheel: true,
  keyboard: true,
});
