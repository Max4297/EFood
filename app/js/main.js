$(function () {
  $(".category__slider-typeFood").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    prevArrow:
      '<button type="button" class="category__slick-prev"><svg class="category__slider-leftArrow"><use xlink:href="../images/sprite.svg#roundarrow-left"></svg></button>',
    nextArrow:
      '<button type="button" class="category__slick-next"><svg class="category__slider-rightArrow"><use xlink:href="../images/sprite.svg#roundarrow-right"></svg></button>',
  });
  $(".reviews__items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    draggable: false,
    prevArrow:
      '<button type="button" class="reviews__slick-prev"><svg class="reviews__slider-rightArrow"><use xlink:href="../images/sprite.svg#reviews-arrow-left-icon"></svg></button>',
    nextArrow:
      '<button type="button" class="reviews__slick-next"><svg class="reviews__slider-rightArrow"><use xlink:href="../images/sprite.svg#reviews-arrow-right-icon"></svg></button>',
  });
});

let categories = document.querySelectorAll(".category__buttons-item");
let sliders = document.querySelectorAll(".category__slider-typeFood");

for (const elem of categories) {
  elem.addEventListener("click", function () {
    for (const elem1 of categories) {
      elem1.classList.remove("category__buttons-item--active");
    }
    this.classList.add("category__buttons-item--active");

    console.log(sliders);

    for (const elem2 of sliders) {
      elem2.classList.remove("category__slider-typeFood--active");
    }

    sliders[elem.dataset.category].classList.add(
      "category__slider-typeFood--active"
    );
  });
}
