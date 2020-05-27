// GLOBAL VARIABLES

const nav = document.getElementById("navigation");
const navLinks = [...document.querySelectorAll("nav li a.nav-link")];
const sectionArray = [...document.querySelectorAll("section")];
const sectionArrayReduce = [...document.querySelectorAll("section")].reduce((tableSections, item) => { tableSections[item.id] = item; return tableSections; }, []);
const btnToTop = document.querySelector("a.to-top");
const scrollTopBar = document.querySelector("div.loading-bar");

function addNavClickedHandler() {
   [...document.querySelectorAll("nav a.nav-link")].forEach((item) =>
      item.addEventListener("click", function (event) {
         event.preventDefault();

         document.querySelector('header div.navbar-collapse').classList.remove('show');
         let sectionId = this.hash.slice(1);
         document.documentElement.scrollTop = sectionArrayReduce[sectionId].offsetTop - nav.offsetHeight;
      })
   );
}

function addToggleMenuHandler() {
   document.body.addEventListener('click', () => {
      document.querySelector('header div.navbar-collapse').classList.remove('show');
   });
   document.querySelector('header div.navbar-collapse').addEventListener('click', (e) => { e.stopPropagation() });
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
      if (window.scrollY >= (sectionArrayReduce[key].offsetTop - nav.offsetHeight - 200) &&
         (window.scrollY < (sectionArrayReduce[key].offsetTop + sectionArrayReduce[key].offsetHeight - nav.offsetHeight - 200))) {
         navLinks.forEach((item) => {
            if (item.hash.slice(1) === key) {
               item.classList.add("active")
            } else {
               item.classList.remove("active")
            }
         });
      }
   }
}

function sectionAnimations() {
   sectionArray.filter((section) => !section.classList.contains('visited'))
      .forEach((item) => {
         if (window.scrollY >= item.offsetTop - window.innerHeight * 0.5) {
            item.classList.add('visited')
         }
      });
}

function progressBarAnimation() {
   precentageHeight =
      window.scrollY / (document.body.offsetHeight - window.innerHeight);
   scrollTopBar.style.width = precentageHeight * 100 + "%";
}