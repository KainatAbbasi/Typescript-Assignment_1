//  Tests for equality and inequality with strings
let name_1 :string = "Kainat";
let name_2 :string = "Kainat Akmal";
let name_3 :string = "Kainat Abbasi";
// part 1
// if(name_1 == name_2 && name_1 == name_3){
//     console.log("Names are Equal !!"); }
// else {
//     console.log("Names are not Equal !!");}

// part 2
if (name_1 != name_2){
    console.log("names are equal");
}

// part 3
// Tests using the lower case function
if (name_1 != name_3){
    console.log("names are in lower case");}

// part 4
let  num :number = 20;
let num2 :number = 25;
if(num ==20) {
    console.log("you born in 2003");
}
if( num > num2 ){
    console.log(`20 is lesser than ${num2}`);
}
let age : number = 18;
let age_1 : number = 19;
if (age >= 18){
    console.log("You're Eligible for vote !");
}else {
    console.log("you're not eleigible !!");
}
// part 5
let num3 : number = 5;
let num4 : number = 10;
let num5 : number = 15;
if( num3 >= num4 && num3 >= num5){
    console.log("5 is greater than 10 and 15"); }
if(num4 == num3 || num4 != num5){
    console.log("10 is greater than 5 and less than 15");}
// part 6
// Test whether an item is not in a array
let country :string[] = ['Pakistan', 'china', 'india','turkey'];
if (country.includes("Pakistan")){
    console.log("Pakistan is in country list");
}

if (!country.includes("America")){
    console.log("America is not include in country list")};