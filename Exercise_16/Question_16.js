// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
//  each person in your list.
var guestArr = ['Nayab', 'aryan', 'Javeria'];
var canNotAttend = "Javeria";
var newGuest = "Zainab";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger table so I am inviting more peoples.`));
// Part B;
var guestAdd = "kainat";
guestArr.unshift(guestAdd);
console.log(guestAdd);
// part c
var guestMiddle = 'Javeria';
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, guestMiddle);
console.log(guestArr);
// part 4 append
guestArr.push("Zaviyar");
console.log(guestArr);
