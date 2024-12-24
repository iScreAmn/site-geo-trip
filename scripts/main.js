// Navigation

const navItems = document.getElementsByClassName("nav-item");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    for (let j = 0; j < navItems.length; j++)
      navItems[j].classList.remove("active");

    navItems[i].classList.add("active");
  });
}

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

// Функция для обновления активного элемента навигации
function updateActiveNav() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");

  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Проверяем, если пользователь находится в пределах секции
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  // Если ни одна секция не активна (например, при загрузке страницы)
  if (!currentSectionId) {
    currentSectionId = "home"; // Устанавливаем `home` как активную секцию по умолчанию
  }

  // Обновляем класс active у навигации
  navItems.forEach((item) => {
    const sectionId = item.getAttribute("data-section").substring(1); // Убираем "#" из ID
    if (sectionId === currentSectionId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Обработчик клика для плавного скролла
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    const sectionId = this.getAttribute("data-section");
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Обновляем класс active сразу после клика
      document
        .querySelectorAll(".nav-item")
        .forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    }
  });
});

// Обработчик события прокрутки
window.addEventListener("scroll", updateActiveNav);

// Устанавливаем активную секцию при загрузке страницы
document.addEventListener("DOMContentLoaded", updateActiveNav);

// Burger-Menu

const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
};
