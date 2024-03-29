
// GLOBAL VARIABLES

const nav = document.getElementById("navigation");
const navLinks = [...document.querySelectorAll("nav li a.nav-link")];
const sectionArray = [...document.querySelectorAll("section")];
const sectionArrayReduce = [...document.querySelectorAll("section")].reduce(
  (tableSections, item) => {
    tableSections[item.id] = item;
    return tableSections;
  },
  []
);
const btnToTop = document.querySelector("a.to-top");
const scrollTopBar = document.querySelector("div.loading-bar");

function addNavClickedHandler() {
  [...document.querySelectorAll("nav a.nav-link")].forEach((item) =>
    item.addEventListener("click", function (event) {
      event.preventDefault();

      document
        .querySelector("header div.navbar-collapse")
        .classList.remove("show");
      let sectionId = this.hash.slice(1);
      document.documentElement.scrollTop =
        sectionArrayReduce[sectionId].offsetTop - nav.offsetHeight;
    })
  );
}

function addToggleMenuHandler() {
  document.body.addEventListener("click", () => {
    document
      .querySelector("header div.navbar-collapse")
      .classList.remove("show");
  });

  document
    .querySelector("button.navbar-toggler")
    .addEventListener("click", (e) => {
      if (
        document
          .querySelector("header div.navbar-collapse")
          .classList.contains("show")
      ) {
        document
          .querySelector("header div.navbar-collapse")
          .classList.remove("show");
        e.stopPropagation();
      }
    });
}

function stickNavigation() {
  const sectionAboutMe = document.querySelector("section.o-mnie");
  if (window.scrollY >= sectionAboutMe.offsetHeight * 0.8) {
    nav.classList.add("navbar-fixed");
    btnToTop.classList.add("active");
  } else if (window.scrollY <= sectionAboutMe.offsetHeight) {
    nav.classList.remove("navbar-fixed");
    btnToTop.classList.remove("active");
  }
}

function setNavItemActive() {
  for (var key in sectionArrayReduce) {
    if (
      window.scrollY >=
        sectionArrayReduce[key].offsetTop - nav.offsetHeight - 200 &&
      window.scrollY <
        sectionArrayReduce[key].offsetTop +
          sectionArrayReduce[key].offsetHeight -
          nav.offsetHeight -
          200
    ) {
      navLinks.forEach((item) => {
        if (item.hash.slice(1) === key) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  }
}

function sectionAnimations() {
  sectionArray
    .filter((section) => !section.classList.contains("visited"))
    .forEach((item) => {
      if (window.scrollY >= item.offsetTop - window.innerHeight * 0.5) {
        item.classList.add("visited");
      }
    });
}

function progressBarAnimation() {
  precentageHeight =
    window.scrollY / (document.body.offsetHeight - window.innerHeight);
  scrollTopBar.style.width = precentageHeight * 100 + "%";
}

function initSliders() {
  new Slider("#slider .slide")
    .options({
      prev: "#slider nav button.arrow-prev",
      next: "#slider nav button.arrow-next",
      time: 3000,
      height: true,
    })
    .init();

  new Slider("#slider_2nd .slide")
    .options({
      prev: "#slider_2nd nav button.arrow-prev2",
      next: "#slider_2nd nav button.arrow-next2",
      time: 3000,
    })
    .init();
}
