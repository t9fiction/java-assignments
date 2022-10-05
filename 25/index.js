/**
 * Alien Colors #1:
 * Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
 * • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
 * • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
 * 
 */

let alien_color = "green"

console.log("----1st try----")
if(alien_color == "green"){
  console.log("Player earned 5 points")
}

console.log("----2nd try----")
//alien color now changed
alien_color = "yellow"

if(alien_color == "green"){
  console.log("Player earned 5 points")
}
