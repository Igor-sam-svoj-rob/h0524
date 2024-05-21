const menuBtn = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuBtn.addEventListener("click", function () {
  if (menuBtn.classList.contains("fa-bars")) {
    menuBtn.classList.toggle("fa-x");
    mainNav.classList.toggle("active");
  }
});
