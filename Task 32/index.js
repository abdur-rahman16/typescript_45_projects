"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new 
// usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users = ["John", "Eric", "Sam", "Daniel", "David"]
// let new_users = ["Mike", "Trevor","Carl"]
// for(let i = 0; i < new_users.length; i++){
//     if(new_users[i] == current_users[i]){
//         console.log("Username already used")
//     }else if(!(new_users[i] == current_users[i])){
//         console.log("Username available")
//     break; }
// }
// let current_users = ["john", "eric", "sam", "daniel", "david"]
// let new_users = ["Mike", "Trevor","Carl", "Sam", "John"]
// let lower = new_users.map(lower1 => lower1.toLowerCase())
// for(let i = 0; i < new_users.length; i++){
//     if(lower[i] == current_users[i]){
//         console.log("Username already used")
//     }else if(!(lower[i] == current_users[i])){
//         console.log("Username available")
//     break; }
// }
let current_users = ["john", "eric", "sam", "daniel", "david"];
let new_users = ["Mike", "Trevor", "Carl", "Sam", "John"];
// Convert current_users to lowercase for case-insensitive comparison
let lower_current_users = current_users.map(user => user.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    let lower_new_user = new_users[i].toLowerCase();
    if (lower_current_users.includes(lower_new_user)) {
        console.log(`${new_users[i]} is already used.`);
    }
    else {
        console.log(`${new_users[i]} is available.`);
    }
}
