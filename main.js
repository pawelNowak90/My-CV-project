const btnScrollUp = document.querySelector('div.button-scroll');
const nav = document.getElementById('navigation');
// const sectionAboutMe = document.getElementsByClassName('o-mnie'); - pobieram w ten sposób HTML collections i .offsetHeight zwraca undefined !
const sectionAboutMe = document.querySelector('section.o-mnie');
const sectionTechnologies = document.querySelector('section.technologie');
const educationRight = document.getElementById('education-POLLUB');
const educationLeft = document.getElementById('education-AGH');
const techCircSkills = [...document.querySelectorAll('div.one-skill')];

// function scrollToUp(e) {
//     e.preventDefault();
//     // $(document).sc
//     // document.scrollTop();
// }

//Pasek postepu przewijania
// const div = document.querySelector('div.container');
const scrollTopBar = document.querySelector('div.loading-bar');
scrollTopBar.style.width = 0 + "px";
let scrollValue = 0;

//okreslenie przewiniecia strony w procentach
var totalHeight = document.body.offsetHeight;
var actualScroll = window.scrollY;
window.addEventListener('scroll', (e) => {
    precentageHeight = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    scrollTopBar.style.width = precentageHeight * 100 + "%";
});

// MENU dodanie .active po przewinięciu 100vh
window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if (window.scrollY >= sectionAboutMe.offsetHeight * 0.90) {
        nav.classList.add("active");
    } else if (window.scrollY <= sectionAboutMe.offsetHeight) {
        nav.classList.remove("active");
    }
});

//sprawdzenie wysokości nawigacji NAV i ustawienie właściwego poddingu na element następny
function checkNavHeight() {
    if (window.innerWidth <= 2600) {
        const navHeight = document.getElementById('menu').offsetHeight + "px";
        // document.getElementById('main').style.padding = `${navHeight} 0 0 0`;
        // console.log('nastapil event resize, wartość padding = ' + navHeight);
    }
}
window.addEventListener('load', checkNavHeight);
window.addEventListener('resize', checkNavHeight);


//sekcja TECHNOLOGIE, - add .active - zalaczenia OPACITY dla kółeczek
window.addEventListener('scroll', () => {

    if (window.scrollY >= (sectionAboutMe.offsetHeight * 0.75)) {
        techCircSkills.forEach(techCircSkill => techCircSkill.classList.add("active"));
    }
});

//sekcja wyksztalcenie, - add .active - zalaczenia animacji wjazdu z boku
window.addEventListener('scroll', () => {
    if (window.scrollY >= (sectionTechnologies.offsetHeight + sectionAboutMe.offsetHeight * 0.25)) {
        educationRight.classList.add("active");
        educationLeft.classList.add("active");
    }
});

//DODAĆ FLAGĘ ŻEBY TO SIĘ W KÓŁKO NIE WŁĄCZAŁO ...



//sekcja Moje zainteresowania
//obsluga slidera Stolarstwo jesty wykonywana przez bibliotekę slider.js








// efekt fade in/schowania przycisku button przenoszącego na górę strony
let flag = 0;

function fadeInButton() {
    if ((window.scrollY >= 80) && (!flag)) {
        btnScrollUp.classList.add('active');
        // console.log('dla button scrollUp dodano klase active');
        flag = !flag;
        // console.log('wartosc flag :' + flag);
        // console.log(window.scrollY);
    } else if ((window.scrollY < 300) && (flag)) {
        btnScrollUp.classList.remove('active');
        // console.log('dla button scrollUp zabrano klase active');
        flag = !flag;
        // console.log('wartosc flag :' + flag);
        // console.log(window.scrollY);
    }
}

// wcześniejsza koncepcja

// function fadeInButton() {
//     if (window.scrollY >= 300) {
//         btnScrollUp.classList.add('active');
//     } else if (window.scrollY < 300) {
//         btnScrollUp.classList.remove('active');
//     }
// }

// window.addEventListener('scroll', fadeInButton);
$(window).on('scroll', fadeInButton);

$(window).on