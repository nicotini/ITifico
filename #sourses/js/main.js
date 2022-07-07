"use strict";
(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    }

}());
/**burger handler */
(function() {
    const overlay = document.querySelector('.overlay');
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav-close');
    const menuLinkls = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
        overlay.classList.add('overlay-active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
        overlay.classList.remove('overlay-active');
    });
    if(window.innerWidth <= 766) {
        for(let i = 0; i < menuLinkls.length; i+= 1) {
            menuLinkls[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active');
            });
        }
    }
}());
/**swiper slider */
(function() {
  const slider = document.querySelector('.swiper');
  const slides = document.querySelectorAll('.blog__card-item');
  if(slider) {
    for(let i=0; i < slides.length; i++) {
      console.log(slides[i]);
      slides[i].classList.add('swiper-slide');
    }
  }

}());

const swiper = new Swiper('.slider__articles', {
    // Optional parameters
   loop: true,
   navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
    // Default parameters
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    770: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    1200: {
        slidesPerView: 4,
        spaceBetween: 30
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  }, 
  autoplay: {
    delay: 4000,
  },
  dynamicBullets: true,
  
  });
 // courses slider
 const coursesCarousel = new Swiper('.slider__courses', {
  // Optional parameters
 loop: true,
 navigation: {
  nextEl: '.button-next',
  prevEl: '.button-prev',
},
  // Default parameters
slidesPerView: 2,
spaceBetween: 30,
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  // when window width is >= 640px
  770: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  992: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  1200: {
      slidesPerView: 2,
      spaceBetween: 30
  },
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
  
}, 
autoplay: {
  delay: 4000,
},
dynamicBullets: true,

});
//slider article page
const articleSloder = new Swiper('.article_slider', {
  // Optional parameters
 loop: true,
 navigation: {
  nextEl: '.button-next',
  prevEl: '.button-prev',
},
  // Default parameters
slidesPerView: 3,
spaceBetween: 30,
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  // when window width is >= 640px
  770: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  1200: {
      slidesPerView: 3,
      spaceBetween: 30
  },
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
  
}, 
autoplay: {
  delay: 4000,
},
dynamicBullets: true,

});
  

