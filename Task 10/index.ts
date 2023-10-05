//This program simply tells us the hypotenuse of a right angled triangle using pythagorean theorem

let num1 = 4
let num2 = 8

let hypotenuse_ = ((num1 * num1)+(num2 * num2))**0.5

console.log(hypotenuse_)

// This program checks your marks and tells you how good you are at study
let marks = 55
if(marks >= 80){
    console.log("You are a topper")
}else if(marks >= 70){
    console.log("You are good")
}else if(marks >= 50){
    console.log("You can be better")
}else if(marks >= 40){
    console.log("Average")
}else{
    console.log("Failed!!")
}