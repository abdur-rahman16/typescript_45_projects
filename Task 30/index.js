"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//  Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, 
// such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["eric", "john", "daniel", "admin", "sam"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "john") {
        console.log("Hello John, thank you for logging in again.");
    }
    else if (usernames[i] == "sam") {
        console.log("Hello Sam, thank you for logging in again.");
    }
    else if (usernames[i] == "daniel") {
        console.log("Hello Daniel, thank you for logging in again.");
    }
    else if (usernames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (usernames[i] == "eric") {
        console.log("Hello Eric, thank you for logging in again.");
    }
}
