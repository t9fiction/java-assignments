let places = [
  "Tianzi mountains",
  "Niagara Falls",
  "Grand Canyon",
  "Verdon Gorge",
  "Ha Long Bay",
  "Galapagos Islands",
];

//• Print your array in its original order.
console.log("Current Array", places)

//• Print your array in alphabetical order without modifying the actual list.
console.log("Sorted Array", places.slice().sort())

//• Show that your array is still in its original order by printing it.
console.log("Current Array", places)

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Array", places.slice().sort().reverse())

//• Show that your array is still in its original order by printing it again.
console.log("Current Array", places)

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Array", places.reverse())

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse of Reversed Array to get Original Array", places.reverse())

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted Array", places.sort())
console.log("Current Array is now sorted Array overwriting original Array", places)

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse of the sorted Array", places.reverse())