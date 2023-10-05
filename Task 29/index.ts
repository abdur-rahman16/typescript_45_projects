// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//  if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favorite_fruits = ["apple", "mango", "banana"]
for(let i = 0; i < favorite_fruits.length; i++){
    if(favorite_fruits[i] == "apple"){
        console.log("You really like apples")
    }
    else if(favorite_fruits[i] == "strawberry"){
        console.log("You love strawberry")
    }
    else if(favorite_fruits[i] == "banana"){
        console.log("You really like bananas")
    }
    else if(favorite_fruits[i] == "mango"){
        console.log("You love mangoes")
    }
    else if(favorite_fruits[i] == "pineapple"){
        console.log("You really like pineapple")
    }}


