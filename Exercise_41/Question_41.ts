//Make a array of magician’s names.Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

function show_magician(magician: string[]): void {
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
} 
const magicians: string[] = ['ali', 'Hamza', 'bilal'];
show_magician(magicians)