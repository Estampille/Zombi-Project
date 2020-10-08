const rainbowModeBtn = document.querySelector('#toggleRainbow');

rainbowModeBtn.addEventListener(
  'click',
  () => {
    document.body.classList.toggle('rainbow');
    document.querySelector('footer').classList.toggle('rainbow-footer');
    if(document.body.classList == 'rainbow'){
      console.log("rainbow mode");
      rainbowModeBtn.innerText = "Repasser en mode réel";
    } else { rainbowModeBtn.innerText = "Voir la vie en rose"; }
  }
);