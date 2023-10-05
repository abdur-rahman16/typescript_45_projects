// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

//horses , parrots, dogs

let animals = ["Horse", "Dog", "Parrot"]
let lower = animals.map(pet => pet.toLowerCase())

for(let i=0;i<animals.length;i++){
    if(lower[i] == "horse"){
        console.log("-".repeat(80))
        console.log("Horses are known for their ability to form strong\nbonds with humans and can be excellent riding companions")
        console.log("-".repeat(80))
    }
    if(lower[i] == "parrot"){
        console.log("Parrots, are known for their ability to mimic human speech\nand form strong bonds with their owners")
        console.log("-".repeat(80))
    }
    if(lower[i] == "dog"){
        console.log("Dogs are loyal animals")
        console.log("-".repeat(80))
    }
}
console.log("Any of these animals can be a great pet")