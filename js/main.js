(function () {
  // init();
  addEventListeners();
})();

function addEventListeners() {
  window.onload = onLoadHandlers;
  window.onscroll = onScrollHandlers;
}

function onLoadHandlers() {
  onScrollHandlers();
  setAnimationForNav();
}

function onScrollHandlers() {
  stickNavigation();
  btnUpAnimation();
  sectionAnimations();
  setNavItemActive();
  progressBar();
}

