const rainbowModeBtn = document.querySelector('#toggleRainbow');

rainbowModeBtn.addEventListener(
  'click',
  () => {
    document.body.classList.toggle('rainbow');
    document.querySelector('footer').classList.toggle('rainbow-footer');
  }
);