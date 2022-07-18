import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, ref, set,get ,push, update, remove, onValue,child } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB--35IvTgHlewAQWWIi5oa2WUeM9EHF3w",
    authDomain: "last-f1a54.firebaseapp.com",
    projectId: "last-f1a54",
    storageBucket: "last-f1a54.appspot.com",
    messagingSenderId: "290915616565",
    appId: "1:290915616565:web:748fd107e8005443c7ae7c",
    databaseURL: "https://last-f1a54-default-rtdb.firebaseio.com"

  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);
  export {db,push,get ,child, auth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, ref, set, onValue, update,  remove}
 
//  //geting all data in table
//  function SelectAllData(){
//   firebase.database().ref('tasks').once('value',
//   function(AllRecords){
//     AllRecords.forEach(
//       function(CurrentRecord){
//         var namet = CurrentRecord.val().Tasks;
//         var description = CurrentRecord.val().Description;
//         var status = CurrentRecord.val().Status;
//         AddItemsToTable(namet,description,status);

//       }
//     )
//   })
//  }
//  window.onload =SelectAllData;
//  //FILLING TABLE
//  var taskn =0;
//  function AddItemsToTable(namet,description,status){
//   var tbody = document.getElementById('tbody1');
//   var trow = document.createElement('tr');
//   var td1 = document.createElement('td1');
//   var td2 = document.createElement('td2');
//   var td3 = document.createElement('td3');
//   td1.innerHTML= ++taskn;
//   td2.innerHTML= ++namet;
//   td3.innerHTML= ++description;
//   td2.innerHTML= ++status;
//   trow.appendChild(td1); trow.appendChild(td2); trow.appendChild(td3);
//   tbody.appendChild(trow);
//  }

  