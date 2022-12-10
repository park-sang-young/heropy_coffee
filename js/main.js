const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
      delay: (index + 1) * .7,
      opacity:1
    });
});

toTopEl.addEventListener("click", function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});

var swiper01 = new Swiper(".notice .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


var swiper02 = new Swiper(".promotion .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
  },
});

const promotionEl = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

gsap.to('.floating1', 1.5, {
  delay: 1,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

gsap.to('.floating2', 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.AWARDS .swiper-button-next'
  }
});