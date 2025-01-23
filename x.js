
 var realData,num;

 document.querySelector("button").onclick=solve;
 
 

async function getUsers(){

     const response=await fetch("https://jsonplaceholder.typicode.com/users");
     realData= await response.json();
          
     let user=`<div class="user">
     <p>${realData[num-1].id}</p>
     <p>${realData[num-1].name}</p>
     <p>${realData[num-1].phone}</p>
     </div>`;
     document.querySelector("body").innerHTML+= user;
     console.log(2);
    }

  function solve(){
     
    
    console.log(1);

     num=window.prompt("Please write the user number : ( -1 to exit ) ");
     if(num==-1)
        window.alert("bi");
  
     getUsers();
     console.log(8);
}

 

  

 




