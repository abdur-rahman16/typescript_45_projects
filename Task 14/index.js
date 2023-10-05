"use strict";
// If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest = void 0;
let guest = ["Owais", "Muneeb", "Farhan", "Fahad"];
exports.guest = guest;
guest.forEach(name => {
    let message = `Hey ${name}, would you like to have a dinner with me? Don't worry I'll pay`;
    console.log(message);
});
