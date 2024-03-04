// меню бургер
$(document).ready(function () {
  $(".header__burger-btn").click(function (event) {
    $(".header__burger-btn, .header__menu").toggleClass("active");
    //  $("body").toggleClass("lock");
  });
});
// 15.3 Практика Slick Slider та його налаштування згідно макету сайту
$(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
  // 16.2 Практика Завершення секції з 4 стовпців. Початок 4-х секційного слайдера
  $(".works__inner").slick({
    // arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/icons/slide-left.svg" alt="" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icons/slide-right.svg" alt="" /></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          //  slidesToScroll: 1,
          //  infinite: true,
          //  dots: true,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
          //  slidesToScroll: 1,
        },
      },
      {
        breakpoint: 495,
        settings: {
          slidesToShow: 1,
          //  slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
