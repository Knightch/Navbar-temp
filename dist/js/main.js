const hamburger = document.querySelector(".circle-hamburger");
const navMenu = document.querySelector(".header__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}