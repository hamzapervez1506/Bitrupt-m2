import { db, auth, onAuthStateChanged, ref, set,push,child,get, update, remove } from "./config.js"
// import { getDatabase,onValue } from "firebase/database";

let userId; 
userId= localStorage.getItem('userId');
function writeTaskData(name, description, status) {
  console.log("Write Task Data");
  let uid = userId;
  push(ref(db, 'tasks/' + userId), {
    name: name,
    description: description,
    status: status,
    userId: uid
  });
  alert('Saved');
  GetAllDataOnce();
};

console.log(document.getElementById('add'))
document.getElementById("add").addEventListener("click", function()
{
  console.log("Write Task Data");
  let iname = document.getElementById("iname");
  let description = document.getElementById("description");
  let status= document.getElementById("status");
  if  (iname.value== "") {
    alert("Name must be filled out");
    return false;
  }
  if  (description.value== "") {
    alert("Description must be filled out");
    return false;
  }
  if  (status.value== "") {
    alert("status must be filled out");
    return false;
  }
  console.log(iname.value);
  console.log(description.value);
  console.log(status.value);
  writeTaskData(iname.value, description.value, status.value);
  modal.classList.add('d-none');

});

let add = document.querySelector('.btn-primary');
let input = document.querySelectorAll('input');

add.addEventListener('click', () =>{
input.forEach(input => input.value = '');
} );
    //Filling data
var task = 0;

var tbody = document.getElementById('tbody1');

var taskList=[];
function AddItemToTable(name,description,status){
  let trow = document.createElement("tr");
  trow.id = `${taskList.length}`

  let td2=document.createElement("td");
  td2.classList.add('task-name');
  let td3=document.createElement("td");
  td3.classList.add('task-des');
  let td4=document.createElement("td");
  td4.classList.add('task-status');


  taskList.push([name,description,status]);

  td2.innerHTML=  name;
  td3.innerHTML=  description;
  td4.innerHTML=  status;


  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);


  var ControlDiv = document.createElement("div")
  ControlDiv.innerHTML='<button type="button" class="btn btn-primary my-2 edit-btn" data-toggle="modal" data-target="#exampleModalCenter">Edit   </button>'
  trow.appendChild(ControlDiv);
  tbody.appendChild(trow);
}



// let q=document.getElementById("NameMod").val()
function AddAllItemToTable(TheTask){
  task=0;
  tbody.innerHTML=" ";

  TheTask.forEach(element =>{

  console.log(element)
    AddItemToTable(element.name, element.description,element.status)
  });

}

function updateTask(id, name, des, stat) {
  update(ref(db, 'tasks/' + userId + '/' + id), {
    name: name,
    description: des,
    status: stat,
    userId: userId
  });
  alert('Updated');
  GetAllDataOnce();
}

function deleteTask(id, name, des, stat) {
  remove(ref(db, 'tasks/' + userId + '/' + id));
  alert('Deleted');
  GetAllDataOnce();
}

//Getingg All data
function GetAllDataOnce(){
  const dbRef=ref(db);
  get(child(dbRef, "tasks"))
  .then((snapshot)=>{
    const tasks = Object(snapshot.val()[userId]);
    const tasksIds = Object.keys(tasks);
    AddAllItemToTable(Object.values(tasks));
    console.log(tasksIds)
  // FOR ALL UPDATE BUTTONS
  const editBtns = document.querySelectorAll('.edit-btn');
  for (let i=0; i<editBtns.length; i++) {
    editBtns[i].addEventListener('click', (e) => {
      const taskId = e.target.parentElement.parentElement.id
      const currTask = taskList[taskId];
      // filling values
      const modalNameField = document.getElementById('NameMod')
      modalNameField.value = currTask[0]
      const modalDesField = document.getElementById('DesMod')
      modalDesField.value = currTask[1]
      const modalStatField = document.getElementById('StatMod')
      modalStatField.value = currTask[2]
      // update button functionality
      document.getElementById('UpdModBtn').addEventListener('click', (e) => {
        const updatedName = modalNameField.value;
        const updatedDes = modalDesField.value;
        const updatedStat = modalStatField.value;
        taskList[taskId] = [updatedName, updatedDes, updatedStat]
        const currTaskId_db = tasksIds[taskId]
        updateTask(currTaskId_db, updatedName, updatedDes, updatedStat)

      })
      // delete button functionality
      document.getElementById('DelModBtn').addEventListener('click', (e) => {
        const currTaskId_db = tasksIds[taskId]
        console.log('to delete', currTaskId_db)
        deleteTask(currTaskId_db)
       
      })
    })
  }
});

}
window.onload = GetAllDataOnce;

let modal = document.getElementById('modal')
let create_task=document.getElementById("create_task")
create_task. addEventListener('click', function () {
modal.classList.remove('d-none');
let close_btn = document.getElementById("close_btn")
close_btn. addEventListener('click', function(){
  modal.classList.add('d-none');
})
})
// edit and delete modal
