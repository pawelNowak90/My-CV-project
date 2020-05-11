const h1_Headers = [...document.querySelectorAll("section>h1")];
const techCircSkills = [...document.querySelectorAll("div.one-skill")];
const oMnieParagraphs = [...document.querySelectorAll("section#o-mnie p")];
const doswZawodoweParagraphs = [...document.querySelectorAll("section#doswiadczenie-zawodowe p")];
const inneUmParagraphs = [...document.querySelectorAll("section#inne-umiejetnosci p")];

const navHeight = document.getElementById("navigation").offsetHeight;
const nav = document.getElementById("navigation");

const navLinks = [...document.querySelectorAll("nav li a.nav-link")];
const sectionArray = [...document.querySelectorAll("section")].reduce((r, item) => {
  r[item.id] = item;
  return r;
}, []);

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
      document.documentElement.scrollTop = sectionArray[sectionId].offsetTop - navHeight;
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
  if (
    window.scrollY >=
    document.querySelector("section#o-mnie").offsetTop - 4 * navHeight
  ) {
    h1_Headers[0].classList.add("active");
    oMnieParagraphs.forEach((p) => p.classList.add("active"));
  }
  if (
    window.scrollY >=
    document.querySelector("section#technologie").offsetTop - 4 * navHeight
  ) {
    h1_Headers[1].classList.add("active");
    techCircSkills.forEach((techCircSkill) =>
      techCircSkill.classList.add("active")
    );
  }

  if (
    window.scrollY >=
    document.querySelector("section#inne-umiejetnosci").offsetTop -
    4 * navHeight
  ) {
    h1_Headers[2].classList.add("active");
    inneUmParagraphs.forEach((p) => p.classList.add("active"));
  }
  if (
    window.scrollY >=
    document.querySelector("section#wyksztalcenie").offsetTop - 4 * navHeight
  ) {
    h1_Headers[3].classList.add("active");
    document.getElementById("education-POLLUB").classList.add("driveFromTheSide");
    document.getElementById("education-AGH").classList.add("driveFromTheSide");
  }
  if (
    window.scrollY >=
    document.querySelector("section#doswiadczenie-zawodowe").offsetTop -
    4 * navHeight
  ) {
    h1_Headers[4].classList.add("active");
    doswZawodoweParagraphs.forEach((p) => p.classList.add("active"));
  }
  if (
    window.scrollY >=
    document.querySelector("section#moje-zainteresowania").offsetTop -
    7 * navHeight
  )
    h1_Headers[5].classList.add("active");
  if (
    window.scrollY >=
    document.querySelector("section#kontakt").offsetTop - 7 * navHeight
  )
    h1_Headers[6].classList.add("active");
  if (
    window.scrollY >=
    document.querySelector("section#kontakt").offsetTop - 7 * navHeight
  )
    document.querySelector("div.kontakt-left").classList.add("active");
  if (
    window.scrollY >=
    document.querySelector("section#kontakt").offsetTop - 7 * navHeight
  )
    document.querySelector("div.kontakt-right").classList.add("active");
}

function btnUpAnimation() {
  let flag = 0;
  const btnToTop = document.querySelector("a.to-top");

  if (window.scrollY >= 120 && !flag) {
    btnToTop.classList.add("active");
    flag = !flag;
  } else if (window.scrollY < 120 && flag) {
    btnToTop.classList.remove("active");
    flag = !flag;
  }
}

const scrollTopBar = document.querySelector("div.loading-bar");

function progressBar(e) {
  precentageHeight =
    window.scrollY / (document.body.offsetHeight - window.innerHeight);
  scrollTopBar.style.width = precentageHeight * 100 + "%";
}