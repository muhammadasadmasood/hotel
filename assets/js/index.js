// Navbar Scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Home Slider
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Review Slider
var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Scroll To Top Button
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTop = document.querySelector(".scroll-top-btn");

  function scrollToTopSmoothly() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (scrollToTop) {
    scrollToTop.addEventListener("click", scrollToTopSmoothly);
  }

  window.addEventListener("scroll", () => {
    if (scrollToTop) {
      scrollToTop.style.display = window.scrollY > 300 ? "block" : "none";
    }
  });
});
