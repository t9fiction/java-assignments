/**
 * T-Shirt:
 *  Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
 *  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
 *
 */

const make_shirt = () =>{
  let size = prompt("Enter the Size of the Shirt")
  let message = prompt("Text for the Shirt")
  console.log("Size of Shirt is ",size," and the text on it is ",message)
}

make_shirt()