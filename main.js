let schbtn=document.querySelector('#search-btn');
let schbar=document.querySelector('.search-bar-container');
let lginbtn=document.querySelector('#login-btn');
let lginfrm=document.querySelector('.lgnfrm-container');
let clsfrm=document.querySelector('#close-form');
let menu = document.querySelector('#menu-b');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

schbtn.addEventListener('click',() =>{
schbtn.classList.toggle('fa-times');
schbar.classList.toggle('active');
}
);
window.onscroll =() =>{
schbtn.classList.remove('fa-times');
schbar.classList.remove('active');
menu.classList.remove('fa-times');
lginfrm.classList.remove('active');
}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
lginbtn.addEventListener('click', () =>{
    lginfrm.classList.add('active');
});
clsfrm.addEventListener('click', () =>{
    lginfrm.classList.remove('active');
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
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

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});