/**
 *
 * Cars:
 * Write a function that stores information about a car in a Object.
 * The function should always receive a manufacturer and a model name.
 * It should then accept an arbitrary number of keyword arguments.
 * Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 * Print the Object that’s returned to make sure all the information was stored correctly.
 *
 */

function carInfo(){

  let car = {
    manufacturer : arguments[0],
    model: arguments[1],
    color: arguments[2],
    capacity: arguments[3]
  }

  console.log("Manufacturer : ",car.manufacturer, "\nModel : ",car.model, "\nColor : ",car.color, "\nCapacity : ",car.capacity)

}

carInfo("Audi", "2020", "Red", "5");