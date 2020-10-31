var swiper1 = new Swiper('.swiper-container1', {
     speed: 900,
    //  slidesPerView: 3,
     autoplay: {
      delay: 3000,
    },
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
    });

var swiper2= new Swiper('.swiper-container2', {
  speed: 1200,
  slidesPerView: 4,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    936: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    540: {
      slidesPerView: 1,
    },
  }
});


//  Author: Vlasenko Fedor, valsenkofedor@mail.ru
// (function($){
//   $('.newproduction-wrapper__add').on('click', 'span', function () {
//       var inp = $('input' , this.parentNode),
//           val = +inp.val()||0;
//       inp.val(val += this.className == 'minus' ? val > 0 ? -1: 0: 1);
//   });
// }(jQuery))



$(document).ready( () => {
  $('.production-wrapper__content').click( () => {
    $('.production-wrapper__products').slideToggle(400);
  })
});

$(document).ready( () => {
  $('.content2').click( () => {
    $('.production-wrapper__products2').slideToggle(400);
  })
});

$(document).ready( () => {
  $('.header2-wrapper__phones-dropdown').click( () => {
    $('.phone--hide').slideToggle(400);
  })
});

$(document).ready( () => {
  $('.header2-wrapper__burger').click( () => {
    $('.fixed-shadow').css('display', 'block')
    $('.header2-wrapper__dropdown').css('left', 0);
  })
});

$(document).ready( () => {
  $('.fixed-shadow').click( () => {
    $('.fixed-shadow').css('display', 'none')
    $('.header2-wrapper__dropdown').css('left', -1000);
  })
});