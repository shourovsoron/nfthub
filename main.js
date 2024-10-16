//For Navigation


let mobileMenuBtn = document.querySelector(".mobile-menu-btn");

const primaryNav=document.querySelector(".primary-navigation");



mobileMenuBtn.addEventListener('click', ()=>{
    primaryNav.toggleAttribute("data-visible");

    if(primaryNav.hasAttribute("data-visible")){
        mobileMenuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>'
    }else{
      
       mobileMenuBtn.innerHTML='<i class="fa-solid fa-bars"></i>'
    }
});


//Navigation End








const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 48,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        1100: {
            slidesPerView: 4,
            spaceBetween: 30
          },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 480px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        400: {
          slidesPerView: 2,
          spaceBetween: 20
        },

        200: {
            slidesPerView: 1,
            spaceBetween: 10
          
        }
      }
  
  });
  
  