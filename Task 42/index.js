"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the 
// Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician_names = ["George", "Fred", "Ron", "Harry", "Tom"];
let show_magicians = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
let make_great = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `The Great "${arr[i]}"`;
    }
};
make_great(magician_names);
show_magicians(magician_names);
