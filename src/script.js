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

// faq
const questions = document.querySelectorAll(".ques");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    // Toggle answer display
    if (answer.classList.contains("open")) {
      answer.classList.remove("open");
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.classList.add("open");
      arrow.style.transform = "rotate(180deg)";
    }
  });
});
