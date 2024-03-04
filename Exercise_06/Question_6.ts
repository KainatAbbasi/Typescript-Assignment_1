// Stripping Names: Store a person’s name, and include some whitespace characters 
// at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n",
//  at least once. Print the name once, so the whitespace around the name is displayed. 
//  Then print the name after striping the white spaces.

let White_space: string = "\n \tKainat Akmal";

console.log(White_space);

let stripped_Name: string = White_space.trim();
console.log("\nStripped name:");
console.log(stripped_Name);
