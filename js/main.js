(function () {
  addEventListeners();
  onScrollHandlers();
  initSliders();
})();

function addEventListeners() {
  window.onscroll = onScrollHandlers;

  addNavClickedHandler();
  addToggleMenuHandler();
}

function onScrollHandlers() {
  stickNavigation();
  setNavItemActive();
  sectionAnimations();
  progressBarAnimation();
  displaySocialMedia();
}

function displaySocialMedia(){
    const socialMedia = document.getElementById('social-media');
  
    setTimeout(()=>{socialMedia.classList.add('showSocialMedia')},1000)
  

}