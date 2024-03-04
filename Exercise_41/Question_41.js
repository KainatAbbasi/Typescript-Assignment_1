//Make a array of magician’s names.Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
function show_magician(magician) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magicians = ['ali', 'Hamza', 'bilal'];
show_magician(magicians);
