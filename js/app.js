/*jslint browser:true */
// fade out
var btn = document.querySelector('.js-btn');
var el = document.querySelector('#primary_nav');
var m = document.querySelector(".fa-bars");
// fade out
function fadeOut(el){
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = 'none';
      el.classList.add('is-hidden');
     
    } else {
      requestAnimationFrame(fade);
    }
  })();
}
// fade in
function fadeIn(el, display){
  if (el.classList.contains('is-hidden')){
    el.classList.remove('is-hidden');

  }
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
function openCloseMenu() {
 if(el.classList.contains('is-hidden')){
    m.classList.remove('fa-bars');
    m.classList.add('fa-times');
    fadeIn(el);
  }
  else {
    m.classList.remove('fa-times');
    m.classList.add('fa-bars');
    fadeOut(el);
  }
}
btn.addEventListener('click', function(){
openCloseMenu();
});


/*Alernatives
(function() {
    var burger = document.querySelector('.js-btn');
    var menu = document.querySelector('#primary_nav');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();*/

