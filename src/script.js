// header slider
let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 10,
    initialSlide: 3,
    slideShadows: true,
  },
});
