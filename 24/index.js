/**
 * More Conditional Tests:
 * You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
 * write more tests. Have at least one True and one False result for each of the following:
 * • Tests for equality and inequality with strings
 * • Tests using the lower case function
 * • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 * • Tests using "and" and "or" operators
 * • Test whether an item is in a array
 * • Test whether an item is not in a array
 * 
 */

//• Tests for equality and inequality with strings
console.log("Sohail == Sohail ?", "Sohail"=="Sohail")
console.log("Sohail == sohail ?", "Sohail"=="sohail")

//• Tests using the lower case function
console.log("SOHAIL == sohail ?", "SOHAIL"=="sohail")
console.log("sohail == sohail ?", "sohail"=="sohail")

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("5 == 5", 5 == 5)
console.log("2 >= 5", 2 >= 5)
console.log("7 >= 4", 7 >= 4)
console.log("3 <= 6", 3 <= 6)
console.log("12 < 11", 12 < 11)
console.log("12 > 11", 12 > 11)

//• Tests using "and" and "or" operators
console.log("--------------------------------------------")
console.log('Tests using "and" and "or" operators')
console.log("--------------------------------------------")
console.log("x = 5")
console.log("y = 3")
const x = 5, y = 3;
console.log("(x < 6) && (y < 5)", (x < 6) && (y < 5))
console.log("(x > 6) && (y < 5)", (x > 6) && (y < 5))
console.log("(x < 6) && (y > 5)", (x < 6) && (y > 5))
console.log("(x > 6) && (y > 5)", (x > 6) && (y > 5))
console.log("--------------------------------------------")
console.log("(x < 6) || (y < 5)", (x < 6) || (y < 5))
console.log("(x > 6) || (y < 5)", (x > 6) || (y < 5))
console.log("(x < 6) || (y > 5)", (x < 6) || (y > 5))
console.log("(x > 6) || (y > 5)", (x > 6) || (y > 5))


//• Test whether an item is in a array
let places = [
  "Tianzi mountains",
  "Niagara Falls",
  "Grand Canyon",
  "Verdon Gorge",
  "Ha Long Bay",
  "Galapagos Islands",
];

console.log("Niagara Falls is in the Array ?", places.includes("Niagara Falls"))
console.log("Lake Saif ul Malook is in the Array ?", places.includes("Lake Saif ul Malook"))

//• Test whether an item is not in a array
console.log("Niagara Falls is not in the Array ?", !places.includes("Niagara Falls"))
console.log("Lake Saif ul Malook is not in the Array ?", !places.includes("Lake Saif ul Malook"))