import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import{db, auth,createUserWithEmailAndPassword} from "./config.js"


let sign_up_btn = document.getElementById("sign_up_btn");
console.log(sign_up_btn) 
sign_up_btn.addEventListener("click", function () 
  {
   
      let email = document.getElementById("email");
      let password = document.getElementById("password");
      let cpassword = document.getElementById("cpassword");
      if (password.value !== cpassword.value) {
        alert("Passwords do not match.");
        return;
      }
      
    console.log(email.value);
    console.log(password.value);
    console.log(cpassword.value);
    
      
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in //
        console.log("usercreated")
        const user = userCredential.user;
        set(ref(db,`users/${user.uid}`),{
          email: email.value,
          fname: fname.value,
          contact:  contact.value,
          address: address.value,
        });

       
        // ...
        
        
      })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
        if(password.value.length==0)
        {
            alert('Please enter the password');
            return false;
        }
        // ..
      
      function disableButton() {
        var btn = document.getElementById('sign_up_btn');
        btn.disabled = true;
        btn.innerText = 'Loading'

        // window.location.href = 'home.html';
    }
    disableButton()
  });
