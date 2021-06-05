// LOAD ALL USERS
const btn = document.getElementById('btn');
const usersElement = document.getElementById('users');
btn.addEventListener('click',getUsers);

function getUsers(e){

    e.preventDefault();

    fetch("users.json")
    .then(function(response){ //Response from the server
        return response.json();
    })
    .then(function(data){
        //console.log(data);
      let output = "";
      data.forEach(function(user){
       
              output+=`
              <hr>
              <ul>
              <li>ID: ${user.id}</li>
              <li>Name: ${user.name}</li>
              <li>Age: ${user.age}</li>
              <li>Email: ${user.email}</li>
              </ul>
              `;
        

         usersElement.innerHTML = output;
    
           })
      })
     
}
  