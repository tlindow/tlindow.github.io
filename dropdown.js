document.addEventListener("DOMContentLoaded", function() {
  var btnMenu = document.querySelector(".btn-menu");
  btnMenu.addEventListener("click", function() {
    document.querySelector(".menu-content").classList.toggle("show");
    document.getElementsByClassName('fas')[0].classList.toggle("hidden");
    document.getElementsByClassName('fas')[1].classList.toggle("hidden");
  });
});