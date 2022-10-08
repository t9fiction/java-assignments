/**
 * 
 * Unchanged Magicians:
 * Start with your work from Exercise 40.
 * Call the function make_great() with a copy of the array of magicians’ names.
 * Because the original array will be unchanged, return the new array and store it in a separate array.
 * Call show_magicians() with each array to show that you have one array of the original names and
 *  one array with the Great added to each magician’s name.
 *
 */

const magician_name = ["Ali", "Kashif", "Saqlain", "Shadab", "Babar"];
let new_array;

function show_magicians(array) {
  for(let i=0; i<array.length; i++){
    console.log(array[i])
  }
}

function make_great(array){
  new_array = array.slice();
  for(let i=0; i<new_array.length; i++){
    new_array[i] += " Great"
  }

  
}

show_magicians(magician_name);
make_great(magician_name)
show_magicians(new_array);
