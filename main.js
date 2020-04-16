const btnToTop = document.querySelector('a.to-top');
const nav = document.getElementById('navigation');
// const sectionAboutMe = document.getElementsByClassName('o-mnie'); - pobieram w ten sposób HTML collections i .offsetHeight zwraca undefined !
const sectionAboutMe = document.querySelector('section.o-mnie');
const sectionTechnologies = document.querySelector('section.technologie');
const educationRight = document.getElementById('education-POLLUB');
const educationLeft = document.getElementById('education-AGH');
const techCircSkills = [...document.querySelectorAll('div.one-skill')];

//Pasek postepu przewijania
// const div = document.querySelector('div.container');
const scrollTopBar = document.querySelector('div.loading-bar');
scrollTopBar.style.width = 0 + "px";

var totalHeight = document.body.offsetHeight;
var actualScroll = window.scrollY;

function progressBar(e) {
    precentageHeight = (window.scrollY) / (document.body.offsetHeight - window.innerHeight);
    scrollTopBar.style.width = precentageHeight * 100 + "%";
}

window.addEventListener('scroll', progressBar);
window.onload = progressBar;

// NAV fixed - add OR remove .active po przewinięciu 100vh
//ta wartosc powinna byc zależna od aktualnej wysokosci przegladarki ?!
window.addEventListener('scroll', () => {
    if (window.scrollY >= sectionAboutMe.offsetHeight * 0.80) {
        nav.classList.add("navbar-fixed");
    } else if (window.scrollY <= sectionAboutMe.offsetHeight) {
        nav.classList.remove("navbar-fixed");
    }
});

//DODAĆ FLAGĘ ŻEBY TO SIĘ W KÓŁKO NIE WŁĄCZAŁO ...

// efekt fade in/schowania przycisku button przenoszącego na górę strony
let flag = 0;

function fadeInButton() {
    // if ((window.pageYOffset >= 120) && (!flag)) {
    if ((window.scrollY >= 120) && (!flag)) {
        btnToTop.classList.add('active');
        flag = !flag;
    } else if ((window.scrollY < 120) && (flag)) {
        btnToTop.classList.remove('active');
        flag = !flag;
    }
}

// window.addEventListener('scroll', fadeInButton);
$(window).on('scroll', fadeInButton);

// $(document).ready(function () {
//     var offset = 250;
//     var duration = 500;

//     $(window).scroll(function () {
//         if ($(this).scrollTop() > offset) {
//             $('.to-top').fadeIn(duration);
//         } else {
//             $('.to-top').fadeOut(duration);
//         }
//     })

// });

//pojawianie się nagłówków h1 na scrollY - rozwiazanie trzeba zoptymalizować
const h1_1OMnie = document.querySelector('section#o-mnie h1');
const h1_2Technologie = document.querySelector('section#technologie h1');
const h1_3Wykszt = document.querySelector('section#wyksztalcenie h1');
const h1_4DosZawodowe = document.querySelector('section#doswiadczenie-zawodowe h1');
const h1_5InneUm = document.querySelector('section#inne-umiejetnosci h1');
const h1_6MojeZainteresowania = document.querySelector('section#moje-zainteresowania h1');
const h1_7Kontakt = document.querySelector('section#kontakt h1');

const kontaktLeftAnimation = document.querySelector('div.kontakt-left');
const kontaktRightAnimation = document.querySelector('div.kontakt-right');

const secDoswiadczenieZawodoweP = [...document.querySelectorAll('section#doswiadczenie-zawodowe p')];

const secInneUmiejetnosciP = [...document.querySelectorAll('section#inne-umiejetnosci p')];
const secOMnieP = [...document.querySelectorAll('section#o-mnie p')];

//zdarzenia na scroll oraz onload - naglowki i animacje

//PAWEL PAWEL jak to zaimplementować na scroll ?
//pomysl drugi dodawać w pętli
// $(document).scroll(function (event) {
//     var offset = $(this).offset().top;
//     event.stopPropagation();
//     console.log(offset);
//     console.log('dziala scoolrlrlr');

// });

const sec_0 = document.querySelector('section#my-baner').offsetHeight;
const sec_1 = document.querySelector('section#o-mnie').offsetHeight;
const sec_2 = document.querySelector('section#technologie').offsetHeight;
const sec_3 = document.querySelector('section#inne-umiejetnosci').offsetHeight;
const sec_4 = document.querySelector('section#wyksztalcenie').offsetHeight;
const sec_5 = document.querySelector('section#doswiadczenie-zawodowe').offsetHeight;
const sec_6 = document.querySelector('section#moje-zainteresowania').offsetHeight;
const sec_7 = document.querySelector('section#kontakt').offsetHeight;

function scrollAndOnloadEvent() {
    if (window.scrollY >= document.querySelector('section#o-mnie').offsetTop - 2 * navHeight) {
        h1_1OMnie.classList.add('active');
        secOMnieP.forEach(p => p.classList.add('active'));
    }
    if (window.scrollY >= document.querySelector('section#technologie').offsetTop - 2 * navHeight) {
        h1_2Technologie.classList.add('active');
        techCircSkills.forEach(techCircSkill => techCircSkill.classList.add("active"));
    }

    if (window.scrollY >= document.querySelector('section#inne-umiejetnosci').offsetTop - 2 * navHeight) {
        h1_5InneUm.classList.add('active');
        secInneUmiejetnosciP.forEach(p => p.classList.add('active'));
    }
    if (window.scrollY >= document.querySelector('section#wyksztalcenie').offsetTop - 2 * navHeight) {
        h1_3Wykszt.classList.add('active');
        educationRight.classList.add("active");
        educationLeft.classList.add("active");

    }
    if (window.scrollY >= document.querySelector('section#doswiadczenie-zawodowe').offsetTop - 2 * navHeight) {
        h1_4DosZawodowe.classList.add('active');
        secDoswiadczenieZawodoweP.forEach(p => p.classList.add('active'));
    }
    if (window.scrollY >= document.querySelector('section#moje-zainteresowania').offsetTop - 2 * navHeight) h1_6MojeZainteresowania.classList.add('active');
    // .. to jest ostatnia sekcja więc warunek jest ulożony inaczej
    if (window.scrollY >= document.querySelector('section#kontakt').offsetTop - 7 * navHeight) h1_7Kontakt.classList.add('active');
    if (window.scrollY >= document.querySelector('section#kontakt').offsetTop - 7 * navHeight) kontaktLeftAnimation.classList.add('active');
    if (window.scrollY >= document.querySelector('section#kontakt').offsetTop - 7 * navHeight) kontaktRightAnimation.classList.add('active');
}


// document.querySelector('section#my-baner').offsetTop - navHeight
// document.querySelector('section#o-mnie').offsetTop - navHeight
// document.querySelector('section#technologie').offsetTop - navHeight
// document.querySelector('section#inne-umiejetnosci').offsetTop - navHeight
// document.querySelector('section#wyksztalcenie').offsetTop - navHeight
// document.querySelector('section#doswiadczenie-zawodowe').offsetTop - navHeight
// document.querySelector('section#moje-zainteresowania').offsetTop - navHeight
// document.querySelector('section#kontakt').offsetTop - navHeight
const navHeight = document.getElementById('navigation').offsetHeight;

function navNowOnScreen() {
    // console.log(window.scrollY);

    if ((window.scrollY >= document.querySelector('section#o-mnie').offsetTop - navHeight) && (window.scrollY < document.querySelector('section#technologie').offsetTop - navHeight)) {
        document.querySelector('nav li:nth-of-type(1) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(1) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= document.querySelector('section#technologie').offsetTop - navHeight) && (window.scrollY < document.querySelector('section#inne-umiejetnosci').offsetTop - navHeight)) {
        document.querySelector('nav li:nth-of-type(2) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(2) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= document.querySelector('section#inne-umiejetnosci').offsetTop - navHeight) && (window.scrollY < document.querySelector('section#wyksztalcenie').offsetTop - navHeight)) {
        document.querySelector('nav li:nth-of-type(3) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(3) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= document.querySelector('section#wyksztalcenie').offsetTop - navHeight) && (window.scrollY < document.querySelector('section#doswiadczenie-zawodowe').offsetTop - navHeight)) {
        document.querySelector('nav li:nth-of-type(4) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(4) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= document.querySelector('section#doswiadczenie-zawodowe').offsetTop - navHeight) && (window.scrollY < document.querySelector('section#moje-zainteresowania').offsetTop - navHeight)) {
        document.querySelector('nav li:nth-of-type(5) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(5) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= document.querySelector('section#moje-zainteresowania').offsetTop - navHeight) && (window.scrollY < document.querySelector('section#kontakt').offsetTop - 7 * navHeight)) {
        document.querySelector('nav li:nth-of-type(6) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(6) a.nav-link').classList.remove('nowOnScreen');
    }
    // .. to jest ostatnia sekcja więc warunek jest ulożony inaczej
    if ((window.scrollY >= document.querySelector('section#kontakt').offsetTop - 7 * navHeight) && (window.scrollY < document.querySelector('section#kontakt').offsetTop - navHeight + document.querySelector('section#kontakt').offsetHeight)) {
        document.querySelector('nav li:nth-of-type(7) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(7) a.nav-link').classList.remove('nowOnScreen');
    }
}



$(window).on('scroll', navNowOnScreen);

$(window).on('scroll', scrollAndOnloadEvent);
window.onload = scrollAndOnloadEvent;
window.onload = scrollAndOnloadEvent;


//-----------------------------------------------------------------------
const navA = [...document.querySelectorAll('nav a.nav-link')];

const body = document.documentElement;

navA.forEach((item) => item.addEventListener('click', function (event) {
    event.preventDefault();
    let sectionId = this.hash.slice(1);
    body.scrollTop = document.getElementById(sectionId).offsetTop - navHeight;
}));