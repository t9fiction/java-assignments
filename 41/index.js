/**
 * Magicians:
 * Make a array of magician’s names. Pass the array to a function called show_magicians(),
 *  which prints the name of each magician in the array.
 *
 */

const magician_name = ["Ali", "Kashif", "Saqlain", "Shadab", "Babar"];

function show_magicians(array) {
  for(let i=0; i<array.length; i++){
    console.log(array[i])
  }
}

show_magicians(magician_name);
