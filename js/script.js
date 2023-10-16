jQuery(document).ready(function () {

// burger
jQuery('.site-header-mobile__toggler').click(function () {
	$('.site-header-mobile__bottom').toggleClass('close');
  $('.site-header-mobile__toggler').toggleClass('close');
  $('.site-header-mobile__top').toggleClass('grey');
  $('.site-header-mobile').toggleClass('fixed');
  $('.page-main').toggleClass('page-main--margin');
});

//end main script
});

let specialistsSwiper = new Swiper(".diplomas__slider", {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  slidesOffsetAfter: 0,
  spaceBetween: 65,

  breakpoints: {
    '769': {
        slidesPerView: 3,
        spaceBetween: 50,
    },
  },

  navigation: {
      nextEl: ".diplomas-slider__next",
      prevEl: ".diplomas-slider__prev",
  },
});

//Подключение и настройка слайдера для партофолио на мобильных

var init = false;
var portfolioSwiper;

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      $( ".portfolio--main .portfolio__list" ).toggleClass('swiper');
      $( ".portfolio--main .portfolio__list" ).wrapInner( "<div class='swiper-wrapper'></div>");
      $( ".portfolio--main .portfolio__item" ).wrap( "<div class='swiper-slide'></div>" );

      portfolioSwiper = new Swiper(".portfolio__list", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        slidesOffsetAfter: 0,

        breakpoints: {
          '430': {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 32,
          },
        },

        navigation: {
            nextEl: ".portfolio-slider__next",
            prevEl: ".portfolio-slider__prev",
        },
      });
    }
  } else if (init) {
    $( ".portfolio--main .portfolio__list" ).toggleClass('swiper');
    //удаляем обертку слайд
    $( ".portfolio--main .portfolio__item" ).unwrap();

    //удаляем обертку слайдера
    let blockwrapper = $('.portfolio__list .swiper-wrapper');
    if (blockwrapper.length){
      let content = $(blockwrapper).html();
      let parent = $(blockwrapper).parent();
      $(blockwrapper).remove();
      $(parent).html(content);
    }

    portfolioSwiper.destroy();
    init = false;
  }
}

window.addEventListener("resize", swiperCard);
swiperCard();



//кнопка наверх
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $('.up-button').fadeIn();
    } else {
      $('.up-button').fadeOut();
      }
  });
  $('.up-button').click(function() {
    $('body,html').animate({scrollTop:0},600);
    return false;
  });
});