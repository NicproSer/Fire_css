//Fire CSS V 0.1.6
//@author: Fire de NICPRO SERVICE
//nicproservice (https://nicprodev.mgpanel.org)
//Realizado por Nicolás Gómez
//Copyright © 2022
//Licencia: MIT

//Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
};

//Dropdown
function show(anything){
   document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
   dropdown.classList.toggle('active');
};

//MODAL

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = "is-visible";

for (const el of openEls) {
   el.addEventListener("click", function(){
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
   });
}

for (const el of closeEls) {
   el.addEventListener("click", function(){
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
   });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".fir-modal.is-visible")) {
    document.querySelector(".fir-modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".fir-modal.is-visible")) {
    document.querySelector(".fir-modal.is-visible").classList.remove(isVisible);
  }
});

//Temas


//Scroll Up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
   var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

   if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
       window.scrollTo (0, currentScroll - (currentScroll / 10));
       buttonUp.style.transform = "scale(0)";
   }
}
///
buttonUp = document.getElementById("button-up");

window.onscroll = function(){

   var scroll = document.documentElement.scrollTop;
   if (scroll > 500){
      buttonUp.style.transform = "scale(1)";
   }else if(scroll < 500){
      buttonUp.style.transform = "scale(0)";
   }
};
