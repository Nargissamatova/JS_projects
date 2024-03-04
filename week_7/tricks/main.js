const header = document.querySelector("header");
const section = document.querySelectorAll("section");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const backToTopButton = document.querySelector("#backToTop");
const menuItems = document.querySelectorAll("nav ul li a");

backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome and others

  header.classList.remove("bg");
});

/*
OR

const getToTop = () => {
  document.body.scrollTop = 0; // for mac
  document.documentElement.scrollTop = 0; // and diff browsers
};

backToTopButton.addEventListener("click", getToTop);
 */

// Apear/ disappear when scrolling 200px
window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopButton.style.display = "block";
    header.classList.add("bg");
  } else {
    backToTopButton.style.display = "none";
    header.classList.remove("bg");
  }
};

//Burger menu
const toggleMenu = () => {
  nav.classList.toggle("responsive");
};
mobButton.addEventListener("click", toggleMenu);
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));
