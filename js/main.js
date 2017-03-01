document.addEventListener('DOMContentLoaded', function(e) {

   var header = document.querySelector("header");
   var nav = document.querySelector("header > nav");
   console.log(nav);
   var ul = document.querySelector("nav > ul");
   console.log(ul);
   nav.addEventListener('click', function(e) {
      ul.classList.toggle("open");
      });
   var menu = document.querySelector("#menuBoton");
   menu.addEventListener('click', function(e) {
      ul.classList.toggle("open");
      });


});
