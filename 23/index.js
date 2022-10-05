/**
 * Conditional Tests: 
 * Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
 * Your code should look something like this:
 * let car = 'subaru';
 * console.log("Is car == 'subaru'? I predict True.")
 * console.log(car == 'subaru')
 * 
 * • Look closely at your results, and make sure you understand why each line evaluates to True or False.
 * • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 * 
 */

const vehicle = {
  company: "Ford",
  type: "SUV",
  drive: "Right",
  power: 3000,
  transmission: "Auto",
  capacity: 8,
  maxspeed: 250,
  color: "black",
  android: true,
  cheap: false
};

console.log("Vehicle = 'Subaru'", vehicle.company == 'Subaru')
console.log("Vehicle type = 'SUV'", vehicle.type == 'SUV')
console.log("Vehicle drive = Left Hand Drive ?", vehicle.drive == 'Left')
console.log("Vehicle Engine power = 5000 ?", vehicle.power == 5000)
console.log("Vehicle Transmission = Automatic ?", vehicle.transmission == 'Auto')
console.log("Vehicle Capacity > 6 ?", vehicle.capacity >= 6)
console.log("Vehicle Max Speed > 300 kph ?", vehicle.maxspeed >= 300)
console.log("Vehicle color is Black ?", vehicle.color == "black")
console.log("Vehicle control system is Android based ?", vehicle.android == true)
console.log("Vehicle is cheap ?", vehicle.cheap == true)

