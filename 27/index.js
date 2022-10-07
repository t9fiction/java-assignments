/**
 * Alien Colors #3:
 * Turn your if-else chain from Exercise 5-4 into an if-else chain.
 * 
 * • If the alien is green, print a message that the player earned 5 points.
 * • If the alien is yellow, print a message that the player earned 10 points.
 * • If the alien is red, print a message that the player earned 15 points.
 * • Write three versions of this program, making sure each message is printed for the appropriate color alien.
 *
 */

 console.log("----1st version---- color is green");

 let earned_points = 0;
 
 let alien_color = "green";
 
 if (alien_color == "green") {
   earned_points = 5;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 } else if(alien_color == 'yellow'){
   earned_points = 10;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 }else{
   earned_points = 15;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 }
 
 console.log("----2nd version---- color is yellow");
 //alien color now changed
 
 alien_color = "yellow";
 
 if (alien_color == "green") {
   earned_points = 5;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 } else if(alien_color == 'yellow'){
   earned_points = 10;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 }else{
   earned_points = 15;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 }
 
 
 console.log("----3rd version---- color is red");
 //alien color now red
 
 alien_color = "red";
 
 if (alien_color == "green") {
   earned_points = 5;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 } else if(alien_color == 'yellow'){
   earned_points = 10;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 }else{
   earned_points = 15;
   console.log("Player earned ", earned_points, " points for shooting the alien");
 }