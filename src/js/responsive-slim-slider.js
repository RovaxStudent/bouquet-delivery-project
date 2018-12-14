$(document).ready(function(){
  $('.main-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<div class="slider-arrow slider-arrow-main__left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow-main__right"></div>',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.features-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slider-arrow slider-arrow-features__left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow-features__right"></div>'
  });
});
