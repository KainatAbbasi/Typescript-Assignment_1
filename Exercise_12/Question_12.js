"use strict";
// Start with the array you used in Exercise 11, but instead of just printing each 
// person’s name, print a message to them. The text of each message should be the 
// same,but each message should be personalized with the person’s name.
const names = ["Asiya", "Fatima", "Faria", "Muntaha", "Mehreen"];
const message = ' : Work hard in silence, let your success be your noise';
// Print each person's name and message
for (const i of names) {
    console.log(i + message);
}
