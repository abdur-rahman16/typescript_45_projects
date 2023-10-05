// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
// that should be printed on the shirt. The function should print a sentence summarizing the size 
// of the shirt and the message printed on it. Call the function


let make_shirt = (size:string, text:string)=>{
   return `The size of shirt is "${size}" and the text is "${text}"`
}


console.log(make_shirt("XL", "BE STRONG"))