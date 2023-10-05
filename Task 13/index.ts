// Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

let arr = ["Honda motorcycle", "Yamaha R1", "BMW S 1000RR", "Kawasaki Ninja ZX-10R"];

arr.forEach(name => {
    let message = `I would like to own a ${name}`;
    console.log(message)
});


