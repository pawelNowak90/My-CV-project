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
    img: 'img/stolarstwo1.jpg',
    text: 'Turystyka górska - Bieszczady',
}, {
    img: 'img/stolarstwo2.jpg',
    text: 'Turystyka górska - Pieniny',
}, {
    img: 'img/stolarstwo3.jpg',
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
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];


//zmienne sterujace
let active = 0;
const time = 3000;

//zmiana kropek na dole slidera
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = (array) => {
    active++;
    if (active === array.length) {
        active = 0;
    }
    image.src = array[active].img;
    h1.textContent = array[active].text;
    changeDot();
}
let sliderStart = setInterval(changeSlide, time, slideListStolarstwo);

const clickChangeSlide = (event, arrayList) => {
    // function clickChangeSlide(event, arrayList) { //w ten sposób też działa przekazanie eventu
    if (event.target.dataset.order) {
        active = event.target.dataset.order - 1;
        clearInterval(sliderStart);
        image.src = arrayList[active].img;
        h1.textContent = arrayList[active].text;
        changeDot();
        sliderStart = setInterval(changeSlide, time, arrayList);
    }
}

window.addEventListener('click', function (event) {
    clickChangeSlide(event, slideListStolarstwo)
})

// window.addEventListener('click', function (event) {
//     clickChangeSlide(event, slideListTurystyka)
// })


//żeby działało uniwersalnie trzeba przekazywac argumenty takie jak h1, image, dots do funkcji ?
// i pobrać te elementy jeszcze raz dla drugiego slidera

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