//Fire CSS V 0.1.3
//@author: Fire de NICPRO SERVICE
//nicproservice (https://nicprodev.mgpanel.org)
//Realizado por Nicolás Gómez
//Copyright © 2021 - 2022
//Licencia: MIT

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
}