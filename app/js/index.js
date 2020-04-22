
;(function () {
  const logo = document.querySelector(".logo");
  const menu = document.querySelector(".header-nav");
  const menuButton = document.querySelector(".burger-button");
  const menuCloseButton = document.querySelector(".close-menu__img");

  menuButton.onclick = _ => {
    menu.classList.add("header-nav_open");
    logo.classList.add("header-wrapper_center");
  }
  menuCloseButton.onclick = _ => {
    menu.classList.remove("header-nav_open");
    logo.classList.remove("header-wrapper_center");
  }
  menu.onclick = _ => {
    menu.classList.remove("header-nav_open");
    logo.classList.remove("header-wrapper_center");
  }


}());
; (function () {
  const header = document.querySelector('.header');
  window.onscroll = _ => {
    if (window.pageYOffset > 50) {
      header.classList.add('header__active');
    } else {
      header.classList.remove('header__active');
    }
  }
}());




// ; (function () {
//   // Detect request animation frame
//   var scroll = window.requestAnimationFrame ||
//     // IE Fallback
//     function (callback) { window.setTimeout(callback, 1000 / 60) };
//   var elementsToShow = document.querySelectorAll('.js-show-on-scroll');

//   function loop() {
//     var w = window.innerWidth
//       || document.documentElement.clientWidth
//       || document.body.clientWidth;


//     elementsToShow.forEach(function (element) {
//       if (isElementInViewport(element) && w > 768) {
//         // element.classList.add('is-visible');
//       } else {
//         // element.classList.remove('is-visible');
//       }
//     });

//     scroll(loop);
//   }

//   // Call the loop for the first time
//   loop();

//   // Helper function from: http://stackoverflow.com/a/7557433/274826
//   function isElementInViewport(el) {
//     // special bonus for those using jQuery
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//       el = el[0];
//     }
//     var rect = el.getBoundingClientRect();
//     return (
//       (rect.top <= 0
//         && rect.bottom >= 0)
//       ||
//       (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//       ||
//       (rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//     );
//   }


// }());