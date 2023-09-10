$(function () {
  $(".category__slider-inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img class="svg-roundarrow-left-dims" src="../images/sprite.svg#roundarrow-left" alt="arrow left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img class="svg-roundarrow-right-dims" src="../images/sprite.svg#roundarrow-right" alt="arrow right"></button>',
  });
});
