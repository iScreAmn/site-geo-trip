// Slider in Directions section

const owl = $(".main-carousel");
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
  items: 3,
});
// Go to the previous item
$(".slider__btn--prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel");
});
// Go to the next item
$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// Slider in Custumers section

const owlSecond = $(".second-carousel");
owlSecond.owlCarousel({
  center: false,
  loop: true,
  margin: 20,
  items: 1,
  autoplay: true, // Автоплей включен
  autoplayTimeout: 8000, // Слайды меняются каждые 8 секунды
  autoplaySpeed: 800, // Переключение длится 0.8 секунды
  
});


