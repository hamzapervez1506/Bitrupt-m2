import{auth,createUserWithEmailAndPassword} from "./config.js"
let sign_up_btn = document.getElementById("sign_up_btn");
  sign_up_btn.addEventListener("click", function () 
  {
      let email = document.getElementById("email");
      let password = document.getElementById("password");
      console.log(email.value);
      console.log(password.value);
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        
      });
    
  }   );