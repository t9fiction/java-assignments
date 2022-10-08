/**
 *
 * Sandwiches:
 * Write a function that accepts a array of items a person wants on a sandwich.
 * The function should have one parameter that collects as many items as the function call provides,
 * and it should print a summary of the sandwich that is being ordered.
 * Call the function three times, using a different number of arguments each time.
 *
 */

const items_sandwich = ["Bread", "Butter", "Garnish", "Cheese", "Salad"];
let new_array;

function sandwich() {
  let collector;
  for (let i = 0; i < arguments.length; i++) {
    collector = {
      ...collector,
      arguments,
    };
  }
  console.log("Sandiwch ordered is with : ",collector)
}

sandwich("Bread", "Butter", "Garnish");
sandwich("Garnish", "Cheese",);
sandwich("Bread", "Garnish", "Cheese", "Salad");
