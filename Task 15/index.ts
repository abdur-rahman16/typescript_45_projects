// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program
//  stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name 
// of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guest = ["Owais", "Muneeb", "Farhan", "Fahad"];
        console.log(`\n${guest[1]} can't make it i'll just invite Faizan instead\n`)
    guest.splice(1,1, "Faizan")
    guest.forEach(name => {
           let message =  `Hey ${name}, would you like to have a dinner with me? Don't worry I'll pay\n`;
        console.log(message);
    })

