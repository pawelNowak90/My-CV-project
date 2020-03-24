const btnScrollUp = document.querySelector('div.button-scroll');



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
// var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
var totalHeight = document.body.offsetHeight;
var actualScroll = window.scrollY;
var maxiScrollY = (document.body.offsetHeight - window.innerHeight);
var precentageHeight;

window.addEventListener('scroll', (e) => {
    precentageHeight = window.scrollY / maxiScrollY;
    scrollTopBar.style.width = precentageHeight * 100 + "%";
});




//sprawdzenie wysokości nawigacji NAV i ustawienie właściwego poddingu na element następny
function checkNavHeight() {
    if (window.innerWidth <= 2600) {
        const navHeight = document.getElementById('nav').offsetHeight + "px";
        // document.getElementById('main').style.padding = `${navHeight} 0 0 0`;
        console.log('nastapil event resize, wartość padding = ' + navHeight);
    }
}
window.addEventListener('load', checkNavHeight);
window.addEventListener('resize', checkNavHeight);






// efekt fade in/schowania przycisku button przenoszącego na górę strony
let flag = 0;

function fadeInButton() {
    if ((window.scrollY >= 80) && (!flag)) {
        btnScrollUp.classList.add('active');
        console.log('dla button scrollUp dodano klase active');
        flag = !flag;
        console.log('wartosc flag :' + flag);
        console.log(window.scrollY);
    } else if ((window.scrollY < 300) && (flag)) {
        btnScrollUp.classList.remove('active');
        console.log('dla button scrollUp zabrano klase active');
        flag = !flag;
        console.log('wartosc flag :' + flag);
        console.log(window.scrollY);
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