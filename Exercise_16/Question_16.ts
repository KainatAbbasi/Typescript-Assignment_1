// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
//  each person in your list.


let guestArr : string[] = ['Nayab', 'aryan', 'Javeria'];
let canNotAttend : string = "Javeria";
let newGuest : string = "Zainab"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger table so I am inviting more peoples.`));
// Part B;
let guestAdd : string = "kainat";
guestArr.unshift(guestAdd);
console.log(guestAdd);
// part c
let guestMiddle : string = 'Javeria';
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex, 0 , guestMiddle)
console.log(guestArr)
// part 4 append
guestArr.push("Zaviyar");
console.log(guestArr)