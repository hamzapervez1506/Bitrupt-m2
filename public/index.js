
const loginForm = document.getElementById('login-form')

    function validateEmail(mail) 
    {
        return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)
    }

    

    // loginForm.addEventListener('submit', function(e) {

    //     let allowSubmit = false;

    //     // email
    //     if (loginForm['email'].value === '') {
    //         addError("Email cannot be empty.")
    //     } else if (!validateEmail(loginForm['email'].value)) {
    //         addError("Email must be valid.")
    //     } else {
    //         allowSubmit = true;
    //     }

    //     if (allowSubmit) {
    //         allowSubmit = false;

    //         // password
    //         const password = loginForm['password'].value
    //         // length of 8
    //         if (password.length < 8) {
    //             addError("Length of password cannot be less than 8 characters.")
    //         }
    //         // one number
    //         else if (! /\d/.test(password)) {
    //             addError("Password must contain one number.")
    //         }
    //         // one capital letter
    //         else if (! /[A-Z]/.test(password)) {
    //             addError("Password must contain one capital letter.")
    //         }
    //         // at least one symbol
    //         else if (! /[$-/:-?{-~!"^_`\[\]]/.test(password)) {
    //             addError("Password must contain one symbol.")
    //         }
    //         else {
    //             allowSubmit = true;
    //         }
    //     }
        
    //     if (! allowSubmit) {
    //         e.preventDefault()
    //     }
    // })
    

 
 
  
  
  