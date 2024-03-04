// Write a function called city_country() that takes in the name of a city and its 
// country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country (city:string , country:string) : string{
    return`${city}, ${country}`
}
let con1 = city_country('Islamabad','Pakistan');
let con2 = city_country('Istanbol','Turkey');
let con3 = city_country('Gaza','Palestine');

console.log(con1)
console.log(con2)
console.log(con3)