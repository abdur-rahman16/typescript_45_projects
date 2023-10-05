let names = "Abdur rahman akbar"

let upper = names.toUpperCase() //change it ot upper case by using toUpperCase() method
console.log(upper);

let lower = names.toLowerCase() //change it ot lower case by using toLowerCase() method
console.log(lower);

function title(inputstring:string){ //change it to title case by creating a simple function
    return inputstring.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
const titleCaseOutput: string = title(names);
console.log(titleCaseOutput); 
