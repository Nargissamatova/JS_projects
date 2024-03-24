const header = document.querySelector("header");
const section = document.querySelectorAll("section");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const backToTopButton = document.querySelector("#backToTop");
const menuItems = document.querySelectorAll("nav ul li a");
const modalButton = document.querySelector(".modalButton");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".closeButton");

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

//Modal and overlay
const toggleModal = () => {
  overlay.classList.toggle("visible");
};

/*
const getToTop = () => {
  document.body.scrollTop = 0; // for mac
  document.documentElement.scrollTop = 0; // and diff browsers
};

backToTopButton.addEventListener("click", getToTop);
 */
backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome and others

  header.classList.remove("bg");
});

// Apear/ disappear when scrolling 200px
mobButton.addEventListener("click", toggleMenu);
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));
modalButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
//overlay.addEventListener("click", toggleModal);
