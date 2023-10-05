// If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.


let guest = ["Owais", "Muneeb", "Farhan", "Fahad"];
guest.forEach(name => {
   let message =  `Hey ${name}, would you like to have a dinner with me? Don't worry I'll pay`;
    console.log(message);
})

export {guest}