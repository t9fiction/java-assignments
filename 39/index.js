/**
 * City Names:
 * Write a function called city_country() that takes in the name of a city and its country.
 * The function should return a string formatted like this:
 * 
 * "Lahore, Pakistan"
 * 
 * Call your function with at least three city-country pairs, and print the value that’s returned.
 *
 */

function city_country () {
  
  let city;
  let country;

  if(arguments.length == 0){
    city = prompt("Enter the City")
    country = prompt("Eter the Country")
  }
  if(arguments.length == 1){
    city = arguments[0]
    country = prompt("Eter the Country")
  }
  if(arguments.length == 2){
    city = arguments[0]
    country = arguments[1]
  }

  console.log(`"${city}, ${country}"`)

}

// Default values
// city_country()
// city_country("Karachi")
city_country("Islamabad","Pakistan")
city_country("Moscow","Russia")
city_country("New York","USA")
city_country("Istanbol","Turkey")
