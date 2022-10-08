/**
 * 
 * Great Magicians:
 * Start with a copy of your program from Exercise 39.
 * Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 * Call show_magicians() to see that the list has actually been modified.
 *
 */

const magician_name = ["Ali", "Kashif", "Saqlain", "Shadab", "Babar"];

function show_magicians(array) {
  for(let i=0; i<array.length; i++){
    console.log(array[i])
  }
}

function make_great(array){
  for(let i=0; i<array.length; i++){
    array[i] += " Great"
  }
}

show_magicians(magician_name);
make_great(magician_name)
show_magicians(magician_name);
