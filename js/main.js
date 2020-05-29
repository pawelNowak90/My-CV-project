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
}