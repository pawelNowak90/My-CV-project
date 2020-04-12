const btnScrollUp = document.querySelector('div.button-scroll');
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


window.addEventListener('scroll', (e) => {
    precentageHeight = (window.scrollY) / document.body.offsetHeight;
    scrollTopBar.style.width = precentageHeight * 100 + "%";
});

// NAV fixed - add OR remove .active po przewinięciu 100vh
//ta wartosc powinna byc zależna od aktualnej wysokosci przegladarki ?!
window.addEventListener('scroll', () => {
    if (window.scrollY >= sectionAboutMe.offsetHeight * 0.80) {
        nav.classList.add("navbar-fixed");
    } else if (window.scrollY <= sectionAboutMe.offsetHeight) {
        nav.classList.remove("navbar-fixed");
    }
});

//sekcja wyksztalcenie, - add .active - zalaczenia animacji wjazdu z boku
window.addEventListener('scroll', () => {
    if (window.scrollY >= (sec_0 + sectionTechnologies.offsetHeight)) {
        educationRight.classList.add("active");
        educationLeft.classList.add("active");
    }
});

//DODAĆ FLAGĘ ŻEBY TO SIĘ W KÓŁKO NIE WŁĄCZAŁO ...

// efekt fade in/schowania przycisku button przenoszącego na górę strony
let flag = 0;

function fadeInButton() {
    if ((window.scrollY >= 80) && (!flag)) {
        btnScrollUp.classList.add('active');
        flag = !flag;
    } else if ((window.scrollY < 300) && (flag)) {
        btnScrollUp.classList.remove('active');
        flag = !flag;
    }
}

// window.addEventListener('scroll', fadeInButton);
$(window).on('scroll', fadeInButton);

//pojawianie się nagłówków h1 na scrollY - rozwiazanie trzeba zoptymalizować
const h1_1OMnie = document.querySelector('section#o-mnie h1');
const h1_2Technologie = document.querySelector('section#technologie h1');
const h1_3Wykszt = document.querySelector('section#wyksztalcenie h1');
const h1_4DosZawodowe = document.querySelector('section#doswiadczenie-zawodowe h1');
const h1_5InneUm = document.querySelector('section#inne-umiejetnosci h1');
const h1_6MojeZainteresowania = document.querySelector('section#moje-zainteresowania h1');
const h1_7Kontakt = document.querySelector('section#kontakt h1');



const sec_0 = document.querySelector('section#my-baner').offsetHeight;
const sec_1 = document.querySelector('section#o-mnie').offsetHeight;
const sec_2 = document.querySelector('section#technologie').offsetHeight;
const sec_3 = document.querySelector('section#inne-umiejetnosci').offsetHeight;
const sec_4 = document.querySelector('section#wyksztalcenie').offsetHeight;
const sec_5 = document.querySelector('section#doswiadczenie-zawodowe').offsetHeight;
const sec_6 = document.querySelector('section#moje-zainteresowania').offsetHeight;
const sec_7 = document.querySelector('section#kontakt').offsetHeight;

const kontaktLeftAnimation = document.querySelector('div.kontakt-left');
const kontaktRightAnimation = document.querySelector('div.kontakt-right');

const secDoswiadczenieZawodoweP = [...document.querySelectorAll('section#doswiadczenie-zawodowe p')];

const secInneUmiejetnosciP = [...document.querySelectorAll('section#inne-umiejetnosci p')];
const secOMnieP = [...document.querySelectorAll('section#o-mnie p')];

//zdarzenia na scroll oraz onload - naglowki i animacje

function scrollAndOnloadEvent() {
    if (window.scrollY >= sec_1 * 0.5) {
        h1_1OMnie.classList.add('active');
        secOMnieP.forEach(p => p.classList.add('active'));
    }
    if (window.scrollY >= sec_0 + sec_1 * 0.5) {
        h1_2Technologie.classList.add('active');
        techCircSkills.forEach(techCircSkill => techCircSkill.classList.add("active"));
    }

    if (window.scrollY >= sec_0 + sec_1 + sec_2 * 0.5) h1_3Wykszt.classList.add('active');
    if (window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 * 0.5) {
        h1_4DosZawodowe.classList.add('active');
        secDoswiadczenieZawodoweP.forEach(p => p.classList.add('active'));

    }
    if (window.scrollY >= sec_0 + sec_1 + sec_2 * 0.5 /*+ sec_3 + sec_4 * 0.5*/ ) {
        h1_5InneUm.classList.add('active');
        secInneUmiejetnosciP.forEach(p => p.classList.add('active'));
    }
    if (window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 * 0.2) h1_6MojeZainteresowania.classList.add('active');
    if (window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 + sec_6 * 0.2) h1_7Kontakt.classList.add('active');
    if (window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 + sec_6 * 0.2) kontaktLeftAnimation.classList.add('active');
    if (window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 + sec_6 * 0.2) kontaktRightAnimation.classList.add('active');
}


function navNowOnScreen() {
    console.log(window.scrollY);

    if ((window.scrollY >= sec_0 * 0.8) && (window.scrollY <= sec_0 + sec_1 * 0.8)) {
        document.querySelector('nav li:nth-of-type(1) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(1) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= sec_0 + sec_1 * 0.8) && (window.scrollY <= sec_0 + sec_1 + sec_2 * 0.8)) {
        document.querySelector('nav li:nth-of-type(2) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(2) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= sec_0 + sec_1 + sec_2 * 0.8) && (window.scrollY <= sec_0 + sec_1 + sec_2 + sec_3 * 0.8)) {
        document.querySelector('nav li:nth-of-type(3) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(3) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 * 0.8) && (window.scrollY <= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 * 0.8)) {
        document.querySelector('nav li:nth-of-type(4) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(4) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 * 0.8) && (window.scrollY <= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 * 0.8)) {
        document.querySelector('nav li:nth-of-type(5) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(5) a.nav-link').classList.remove('nowOnScreen');
    }

    if ((window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 * 0.8) && (window.scrollY <= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 + sec_6 * 0.25)) {
        document.querySelector('nav li:nth-of-type(6) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(6) a.nav-link').classList.remove('nowOnScreen');
    }
    if ((window.scrollY >= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 + sec_6 * 0.25) && (window.scrollY <= sec_0 + sec_1 + sec_2 + sec_3 + sec_4 + sec_5 + sec_6 + sec_7)) {
        document.querySelector('nav li:nth-of-type(7) a.nav-link').classList.add('nowOnScreen');
    } else {
        document.querySelector('nav li:nth-of-type(7) a.nav-link').classList.remove('nowOnScreen');
    }
}



$(window).on('scroll', navNowOnScreen);

$(window).on('scroll', scrollAndOnloadEvent);
window.onload = scrollAndOnloadEvent;
window.onload = scrollAndOnloadEvent;