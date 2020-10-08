const rainbowModeBtn = document.querySelector('#toggleRainbow');

rainbowModeBtn.addEventListener(
  'click',
  () => {
    document.body.classList.toggle('rainbow');

    const allTheMobileButtons = document.querySelectorAll('#categories article div a div');
    const allTheDesktopButtons = document.querySelectorAll('#categories article div h3 a span');
    for(i=0; i<allTheMobileButtons.length; i++){
      allTheMobileButtons[i].classList.toggle('rainbow-button');
    }
    for(i=0; i<allTheDesktopButtons.length; i++){
      allTheDesktopButtons[i].classList.toggle('rainbow-button');
    }

    document.querySelector('footer').classList.toggle('rainbow-footer');
    document.querySelector('.navbar ul').classList.toggle('rainbow-footer');

    if(document.body.classList == 'rainbow'){
      rainbowModeBtn.innerText = "Retour à la réalité";
    } else { 
      rainbowModeBtn.innerText = "Voir la vie en rose"; 
    }
  }
);