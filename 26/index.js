/**
 * Alien Colors #2:
 * Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
 * • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
 * • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
 * • Write one version of this program that runs the if block and another that runs the else block.
 *
 */

 console.log("----1st try---- color is green");

 let earned_points = 0;
 
 let alien_color = "green";
 
 if (alien_color == "green") {
   earned_points = 5;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 } else {
   earned_points = 10;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 }
 
 console.log("----2nd try---- color is yellow");
 //alien color now changed
 
 alien_color = "yellow";
 
 if (alien_color == "green") {
   earned_points = 5;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 } else {
   earned_points = 10;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 }
 