// //question no# 14
// let guest : string [] = ['Nayab', 'Javeria', 'Zainab'];
// guest.map((items) => console.log(`Dear ${items} ,you're invited to the dinner`));
// part 'A'
var guestArr = ['Nayab', 'Javeria', 'Zainab'];
var canNotAttend = "Nayab";
// console.log(canNotAttend + " ""can not attend a dinner.");
// part 'B'
var newGuest = "Aryan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// part 'c'
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
