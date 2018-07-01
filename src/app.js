"use strict";


import  {GitHub}  from "./github";

//init
const github = new GitHub();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
   const userText = e.target.value;

   if(userText !== '') {
       github.getUser(userText).then(data => {console.log(data)})
   }
});