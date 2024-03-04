let current_users :string[] = ['Kainat', 'Nayab', 'Javeria', 'Aryan', 'Zainab']
let new_users :string[] = ['kainat', 'Nayab', 'Zaviyar', 'Daniyal', 'Yaseen']

let current_user_lower :string [] = current_users.map(user => user.toLowerCase())
for (let new_user of new_users){
    if(current_user_lower.includes(new_user.toLowerCase())){
        console.log(`Sorry ${new_user}, that name is taken `)
    }else{
        console.log(`yes ${new_user}, is avaliable`)
    }
}