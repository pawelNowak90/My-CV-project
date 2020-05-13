const h1_Headers = [...document.querySelectorAll("section>h1")];
const techCircSkills = [...document.querySelectorAll("div.one-skill")];
const oMnieParagraphs = [...document.querySelectorAll("section#o-mnie p")];
const doswZawodoweParagraphs = [...document.querySelectorAll("section#doswiadczenie-zawodowe p")];
const inneUmParagraphs = [...document.querySelectorAll("section#inne-umiejetnosci p")];

const navHeight = document.getElementById("navigation").offsetHeight;
const nav = document.getElementById("navigation");

const navLinks = [...document.querySelectorAll("nav li a.nav-link")];
const sectionArray = [...document.querySelectorAll("section")];
const sectionArrayReduce = [...document.querySelectorAll("section")].reduce((r, item) => { r[item.id] = item; return r; }, []);

const sectionAboutMe = document.querySelector("section.o-mnie");

function stickNavigation() {
  if (window.scrollY >= sectionAboutMe.offsetHeight * 0.8) {
    nav.classList.add("navbar-fixed");
  } else if (window.scrollY <= sectionAboutMe.offsetHeight) {
    nav.classList.remove("navbar-fixed");
  }
}

function setAnimationForNav() {
  [...document.querySelectorAll("nav a.nav-link")].forEach((item) =>
    item.addEventListener("click", function (event) {
      event.preventDefault();
      let sectionId = this.hash.slice(1);
      document.documentElement.scrollTop = sectionArrayReduce[sectionId].offsetTop - navHeight;
    })
  );
}

function setNavItemActive() {
  for (var key in sectionArray) {
    if (window.scrollY >= (sectionArray[key].offsetTop - navHeight - 200) &&
      (window.scrollY < sectionArray[key].offsetTop + sectionArray[key].offsetHeight - navHeight - 200)) {
      navLinks.forEach((item) => {
        if (item.hash.slice(1) === key) {
          item.classList.add("nowOnScreen")
        } else {
          item.classList.remove("nowOnScreen")
        }
      });
    }
  }
}

function sectionAnimations() {
  for (let i = 0; i < sectionArray.length; i++) {
    if (window.scrollY >= sectionArray[i].offsetTop - 1 * navHeight) {
      sectionArray[i + 1].classList.add('visited');
    }
  }
}

let flag = true;
function btnUpAnimation() {
  const btnToTop = document.querySelector("a.to-top");

  if (flag && (window.scrollY >= 200)) {
    btnToTop.classList.add("active");
    flag = !flag;
  } else if (window.scrollY < 200) {
    btnToTop.classList.remove("active");
    flag = true;
  }
}

const scrollTopBar = document.querySelector("div.loading-bar");

function progressBar(e) {
  precentageHeight =
    window.scrollY / (document.body.offsetHeight - window.innerHeight);
  scrollTopBar.style.width = precentageHeight * 100 + "%";
}

//CHOWANIE MENU TOGGLER NA RWD po przekierowaniu animacji
document.body.addEventListener('click', () => {
  document.querySelector('header div.navbar-collapse').classList.remove('show');
})