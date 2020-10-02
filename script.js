const message = 

"Merci pour votre message, on va vous envoyer un missile par la post au plus vite."; 

document 

  .getElementById("contactForm") 

  .addEventListener("submit", function(event) { 

    event.preventDefault(); 

    alert(message); 

  }); 
  