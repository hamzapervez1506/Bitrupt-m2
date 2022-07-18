import{auth,signInWithEmailAndPassword} from "./config.js";

function addError(message) {
    const errorDiv = document.getElementById('error')
    errorDiv.innerText = message
    errorDiv.classList.remove('d-none')
    setTimeout( function () {
        errorDiv.classList.add('d-none')
    }, 3000)
}

let login_btn = document.getElementById("login_btn");


  login_btn.addEventListener("click", function (event)
  {
      console.log("Hello")
event.preventDefault();
    let login_email = document.getElementById("login_email");
    let login_password = document.getElementById("login_password");
    
    let userLoggedIn = false;
    

    console.log(login_email.value);
    console.log(login_password.value);
  
    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.uid);
    userLoggedIn = true;
    window.location.href = 'home.html';
    localStorage.setItem('userId',user.uid);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error=>", errorMessage);
    addError(errorMessage);
  });
});
