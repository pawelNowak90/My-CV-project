const btnScrollUp = document.querySelector('div.button-scroll');
const nav = document.getElementById('menu');
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

const div = document.querySelector('div.container');
const scrollTopBar = document.querySelector('div.loading-bar');
scrollTopBar.style.width = 0 + "px";
let scrollValue = 0;



//okreslenie przewiniecia strony w procentach
var totalHeight = document.body.offsetHeight;
var actualScroll = window.scrollY;
var maxiScrollY = (document.body.offsetHeight - window.innerHeight); //tu są jakieś błędy rzędu 20-30px ? może window inner height nie uwzględnia marginesów ? albo nie uwzględniam marigunesu który potem dodaję ??
window.addEventListener('scroll', (e) => {
    precentageHeight = window.scrollY / maxiScrollY;
    scrollTopBar.style.width = precentageHeight * 100 + "%";
    // console.log(Math.floor(precentageHeight * 100) + "%");
});

// MENU dodanie .active po przewinięciu 100vh
window.addEventListener('scroll', () => {
    if (window.scrollY >= sectionAboutMe.offsetHeight * 0.90) {
        nav.classList.add("active");
        // console.log(window.scrollY);
        // console.log('Teraz dodaję klasę .active do nav-MENU');
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
    // console.log(window.scrollY);

    if (window.scrollY >= (sectionTechnologies.offsetHeight + sectionAboutMe.offsetHeight * 0.25)) {
        educationRight.classList.add("active");
        educationLeft.classList.add("active");
        // console.log('TO JEST WARTOSC:');
        // console.log(sectionTechnologies.offsetHeight + sectionAboutMe.offsetHeight * 0.10);

    }
});

//DODAĆ FLAGĘ ŻEBY TO SIĘ W KÓŁKO NIE WŁĄCZAŁO ...

//sekcja Moje zainteresowania
//obsluga slidera Stolarstwo

const slideListStolarstwo = [{
    img: 'img/stolarstwo1.jpg',
    text: 'Samolot - zabawka',
}, {
    img: 'img/stolarstwo2.jpg',
    text: '2-nd tekst',
}, {
    img: 'img/stolarstwo3.jpg',
    text: '3-rd tekst',
}]

const slideListTurystyka = [{
    img: 'img/gory1.jpg',
    text: 'Turystyka górska - Bieszczady',
}, {
    img: 'img/gory2.jpg',
    text: 'Turystyka górska - Pieniny',
}, {
    img: 'img/gory3.jpg',
    text: 'Turystyka górska - Tatry',
}]

// const slideListTurystyka = [{
//     img: 'img/turystyka1.jpg',
//     text: 'Turystyka górska - Bieszczady',
// }, {
//     img: 'img/turystyka2.jpg',
//     text: 'Turystyka górska - Pieniny',
// }, {
//     img: 'img/turystyka3.jpg',
//     text: 'Turystyka górska - Tatry',
// }]

//Pobranie el.
const image_1st = document.querySelector('img.slider#slider_1st');
const image_2nd = document.querySelector('img.slider#slider_2nd');

const h1_1st = document.querySelector('h1.slider#h1_1st');
const h1_2nd = document.querySelector('h1.slider#h1_2nd');

const dots_1st = [...document.querySelectorAll('.dot-1st span')];
const dots_2nd = [...document.querySelectorAll('.dot-2nd span')];


//zmienne sterujace
let active = 0;
const time = 3000;

//zmiana kropek na dole slidera
const changeDot = (dots) => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
    // console.log(dots);

}

const changeSlide = (array, image, dots, h1) => {
    active++;
    if (active === array.length) {
        active = 0;
    }
    image.src = array[active].img;
    h1.textContent = array[active].text;
    // console.log(dots);

    changeDot(dots);
}

let sliderStartStolarstwo = setInterval(changeSlide, time, slideListStolarstwo, image_1st, dots_1st, h1_1st);
let sliderStart = setInterval(changeSlide, time, slideListTurystyka, image_2nd, dots_2nd, h1_2nd);


const clickChangeSlide = (event, arrayList, image, dots, h1) => {
    // function clickChangeSlide(event, arrayList) { //w ten sposób też działa przekazanie eventu
    if (event.target.dataset.order) {
        console.log(dots);

        active = event.target.dataset.order - 1;
        clearInterval(sliderStartStolarstwo);
        image.src = arrayList[active].img;
        h1.textContent = arrayList[active].text;

        sliderStartStolarstwo = setInterval(changeSlide, time, arrayList, image, dots_1st);
        changeDot(dots);
    }
}

window.addEventListener('click', function (event) {
    clickChangeSlide(event, slideListStolarstwo, image_1st, dots_1st, h1_1st)
});

window.addEventListener('click', function (event) {
    clickChangeSlide(event, slideListTurystyka, image_2nd, dots_2nd, h1_2nd)
});


// window.addEventListener('click', function (event) {
//     clickChangeSlide(event, slideListTurystyka)
// })

//zobaczyć czy pobrałem wszystkie elementy dla drugiego slidera i spróbować przkazać je jako argumenty
//żeby działało uniwersalnie trzeba przekazywac argumenty takie jak h1, image, dots do funkcji ?

//obsluga slidera Turystyka
//...
//...
//...










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