"use strict";!function(){const e=document.querySelector(".header");window.onscroll=()=>{window.pageYOffset>50?e.classList.add("header__active"):e.classList.remove("header__active")}}(),function(){const e=document.querySelector(".overlay"),t=document.querySelector(".burger"),s=document.querySelector(".header__nav"),i=document.querySelector(".header__nav-close"),a=document.querySelectorAll(".header__link");if(t.addEventListener("click",(()=>{s.classList.add("header__nav-active"),e.classList.add("overlay-active")})),i.addEventListener("click",(()=>{s.classList.remove("header__nav-active"),e.classList.remove("overlay-active")})),window.innerWidth<=766)for(let e=0;e<a.length;e+=1)a[e].addEventListener("click",(()=>{s.classList.remove("header__nav-active")}))}(),function(){const e=document.querySelector(".swiper"),t=document.querySelectorAll(".blog__card-item");if(e)for(let e=0;e<t.length;e++)console.log(t[e]),t[e].classList.add("swiper-slide")}();const swiper=new Swiper(".slider__articles",{loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:4,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:10},770:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:30},1200:{slidesPerView:4,spaceBetween:30}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3},dynamicBullets:!0}),coursesCarousel=new Swiper(".slider__courses",{loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:2,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:10},770:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:2,spaceBetween:30},1200:{slidesPerView:2,spaceBetween:30}},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3},dynamicBullets:!0});