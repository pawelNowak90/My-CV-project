(function () {
  addEventListeners();
  onScrollHandlers();
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

