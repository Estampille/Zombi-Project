const rainbowModeBtn = document.querySelector('#toggleRainbow');
console.log('test');

rainbowModeBtn.addEventListener(
  'click',
  () => {
    console.log('clic détecté');
    document.body.classList.toggle('rainbow');
  }
);