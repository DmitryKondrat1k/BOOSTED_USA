'use sctrict';

function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();

let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function(){
   header__burger.classList.toggle('active');
   header__menu.classList.toggle('active');
   back.classList.toggle('lock');
};

header__list.onclick = function () {
   header__list.classList.remove('active');
};

console.log(object);


