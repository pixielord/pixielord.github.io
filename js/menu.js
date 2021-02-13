(function () {
  'use strict';

  var menuIconElement = document.querySelector('.header-menu-icon');
  var menuElement = document.querySelector('.menu');
  var menuOverlayElement = document.querySelector('.menu-overlay');

  //Menu click event
  menuIconElement.addEventListener('click', showMenu, false);
  menuOverlayElement.addEventListener('click', hideMenu, false);
  menuElement.addEventListener('transitionend', onTransitionEnd, false);

   var touchStartPoint, touchMovePoint;

   //To show menu
  function showMenu() {
    menuElement.style.transform = "translateX(0)";
    menuElement.classList.add('menu-show');
    menuOverlayElement.classList.add('menu-overlay-show');
  }

  //To hide menu
  function hideMenu() {
    menuElement.style.transform = "translateX(-110%)";
    menuElement.classList.remove('menu-show');
    menuOverlayElement.classList.remove('menu-overlay-show');
    menuElement.addEventListener('transitionend', onTransitionEnd, false);
  }

   function onTransitionEnd() {
    if (touchStartPoint < 10) {
      menuElement.style.transform = "translateX(0)";
      menuOverlayElement.classList.add('menu__overlay--show');
      menuElement.removeEventListener('transitionend', onTransitionEnd, false); 
    }
  }

})();