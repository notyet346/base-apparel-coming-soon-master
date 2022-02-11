function validate() {
  const button = document.getElementById("btn");
  const email = document.getElementById("email");
  const emailFormat = /^\w+([\.-]?\w+)*@\w+.[a-z]+[\.a-z]?/;
  const errorIcon = document.querySelector(".error-icon");
  const  errorMessage = "Please provide a valid email!";
  
  if(email.value.match(emailFormat)){
    error.textContent = "";
    errorIcon.classList.remove("invalid");
  } else {
    error.textContent = errorMessage;
    errorIcon.classList.toggle("invalid");
  }
}

