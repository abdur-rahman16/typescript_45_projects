// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one 
// array with the Great added to each magician’s name.



let magician_names = ["George", "Fred", "Ron", "Harry", "Tom"];

let make_great = (arr:string[]) => {
   
    let greatMagicians = [...arr];

    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = `The Great "${greatMagicians[i]}"`;
    }
    return greatMagicians;
}

let show_magicians = (arr:string[]) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let greatMagicians = make_great(magician_names);

console.log("Original Magicians:");
show_magicians(magician_names);

console.log("Great Magicians:");
show_magicians(greatMagicians);
