 // If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userName :string[] = ['Admin', 'Aryan', 'Zviyar', 'Daniyal','Yaseen']
for (let user of userName){
    if (user === "Admin"){
        console.log(" Hello admin, would you like to see a status report?")
    }else {
        console.log(` Hello ${user}, thank you for logging in again.`)
    }
}
