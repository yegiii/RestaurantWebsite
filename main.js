const navIconEl = document.querySelector(".nav__icon");
const navCloseEl = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const navBgOverlay = document.querySelector(".nav__bgOverlay");

const navOpen = () => {
  navList.classList.add("show");
  navBgOverlay.classList.add("active");
  //   make it unscrollable
  document.body.style =
    "visibility: visible; height: 100vh; width: 100vw; overflow: hidden;";
};

const navClose = () => {
  navList.classList.remove("show");
  navBgOverlay.classList.remove("active");
  document.body.style =
    "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
};

navIconEl.addEventListener("click", navOpen);
navCloseEl.addEventListener("click", navClose);
navBgOverlay.addEventListener("click", navClose);
