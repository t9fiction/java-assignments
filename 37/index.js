/**
 * Large Shirts:
 * Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
 * Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 *
 */

function make_shirt () {
  let size = "Large";
  let message = "I love JavaScript"
  if(arguments.length == 1){
    size = arguments[0]
  }
  if(arguments.length == 2){
    size = arguments[0]
    message = arguments[1]
  }
  console.log("Shirt : ",size,"\nMessage : ",message)
}

// Large shirt with default message
make_shirt()

//Medium Shirt with Default message
make_shirt("Medium")

// Medium and Small shirts with altered message
make_shirt("Medium","I also love Solidity")
make_shirt("Small","I love Programmig")
