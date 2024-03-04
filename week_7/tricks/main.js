const backToTopButton = document.querySelector("#backToTop");

backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // for mac
  document.documentElement.scrollTop = 0; // and diff browsers
});

/*
OR

const getToTop = () => {
  document.body.scrollTop = 0; // for mac
  document.documentElement.scrollTop = 0; // and diff browsers
};

backToTopButton.addEventListener("click", getToTop);
 */
