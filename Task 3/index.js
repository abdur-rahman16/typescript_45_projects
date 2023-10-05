"use strict";
let names = "Abdur rahman akbar";
let upper = names.toUpperCase();
console.log(upper);
let lower = names.toLowerCase();
console.log(lower);
function title(inputstring) {
    return inputstring.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const titleCaseOutput = title(names);
console.log(titleCaseOutput); // Outputs: "This Is A Sample String"
