import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyB--35IvTgHlewAQWWIi5oa2WUeM9EHF3w",
    authDomain: "last-f1a54.firebaseapp.com",
    projectId: "last-f1a54",
    storageBucket: "last-f1a54.appspot.com",
    messagingSenderId: "290915616565",
    appId: "1:290915616565:web:748fd107e8005443c7ae7c"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}
