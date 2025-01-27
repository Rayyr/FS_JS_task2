
var realData, num;

document.querySelector("button").onclick = solve;



async function getUsers() {

   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   realData = await response.json();

   let user = `<div class="user">
     <p class="id">User ID : ${realData[num - 1].id}</p>
     <p class="name">User Name : ${realData[num - 1].name}</p>
     <p class="phone">User Phone : ${realData[num - 1].phone}</p>
     </div>`;
   document.querySelector(".cont").innerHTML = user;

}

function solve() {
 

   num = window.prompt("Please write the user number : ( -1 to exit ) ");
   if (num == -1) {
      window.alert("Bi");
      window.close();
   }

   getUsers();

}











