// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you
//  can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know
//   you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.


let guest = ["Owais", "Muneeb", "Farhan", "Fahad"];
guest.splice(1,1, "Faizan")
guest.forEach(name => {
    let message =  `Hey ${name}, would you like to have a dinner with me? Don't worry I'll pay\n`;
    console.log(message);
})
console.log(`Muneeb can't make it i'll just invite Faizan instead`)
console.log("_".repeat(80))
console.log("\nHey Guys, i think we have more space here then what we expected let's invite more of our friends\n")

guest.unshift("Sahil")
guest.splice(2,0, "Sohail")
guest.push("Nouman")

for(let i = 0; i < guest.length; i++){
    console.log(`Hey ${guest[i]}, let's have a dinner tonight\n`)
}
console.log("We have only two seats here now.")
console.log(guest)
for(let i = 0; i < 5; i++){
    console.log(`Sorry ${guest[i]}, But the seats are full. Maybe next time`)
}
guest.splice(0,5,)

for(let i = 0; i < 2;i++){
    console.log(`Hey ${guest[i]}, you are still invited to the dinner.`)
    
}
guest.splice(0,2)

export{guest}