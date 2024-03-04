"use strict";
//• If the person is less than 2 years old, print a message that the person is a baby
let age = 63;
if (age <= 2) {
    console.log("you are a Baby");
}
else if (age >= 2 && age <= 4) {
    console.log("you are toddler");
}
else if (age >= 4 && age <= 13) {
    console.log("you are a kid");
}
else if (age >= 13 && age <= 20) {
    console.log("you are teenager");
}
else if (age >= 20 && age <= 65) {
    console.log("you are an adult");
}
else {
    console.log("you are an Elder");
}
