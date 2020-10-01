const message = 

"Thank you for submitting your request."; 

document 

  .getElementById("contactForm") 

  .addEventListener("submit", function(event) { 

    event.preventDefault(); 

    alert(message); 

  }); 
  