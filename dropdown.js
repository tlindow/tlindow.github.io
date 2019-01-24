document.addEventListener("DOMContentLoaded", function() {
  var btnMenu = document.querySelector(".btn-menu");
  btnMenu.addEventListener("click", function() {
    document.querySelector(".menu-content").classList.toggle("show");
  });
});