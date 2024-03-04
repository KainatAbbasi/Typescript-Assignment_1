"use strict";
// part A
// Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.
let guest = ['kainat', 'nayab', 'javeria', 'aryan', 'zainab', 'zaviyar'];
//console.log("Due to liimited space only two people can be invited for dinner");
//  part B
// Remove guests from your list one at a time until only two names remain in your 
// list. Each time you pop a name from your list, print a message to that person 
// letting them know you’re sorry you can’t invite them to dinner.
// while(guest.length > 2){
//     const guestRemove = guest.pop();
//     console.log(`Sorry ! ${guestRemove}, you're no longer invited to dinner.`);
// }
// part C
// Print a message to each of the two people still on your list, letting them 
// know they’re still invited.
// let inviteGuest :string[] = ['Kainat' , 'Nayab'];
// guest.forEach((guest) =>{
//    console.log(`Dear ${guest}, You're still invited for the dinner`); 
// });
// Part D
// Remove the last two names from your list, so you have an empty list. Print your
//  list to make sure you actually have an empty list at the end of your program.
guest.pop();
guest.pop();
console.log("final guest list :", guest);
