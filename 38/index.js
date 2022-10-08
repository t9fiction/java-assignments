/**
 * Cities:
 * Write a function called describe_city() that accepts the name of a city and its country.
 * The function should print a simple sentence, such as Karachi is in Pakistan.
 * Give the parameter for the country a default value. Call your function for three different cities,
 * at least one of which is not in the default country.
 *
 */

function describe_city () {
  let city = "Karachi";
  let country = "Pakistan"
  if(arguments.length == 1){
    city = arguments[0]
  }
  if(arguments.length >= 2){
    console.log("Wrong argument count")
  }
  console.log(city," is in ",country)
}

// Default values
describe_city()

//City given
describe_city("Lahore")

describe_city("Multan")
describe_city("Washington")
