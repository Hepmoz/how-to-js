/**
 * Write a program that creates a string that represents an 8×8 grid, 
 * using newline characters to separate lines. At each position of the grid 
 * there is either a space or a "#" character. The characters should form a chessboard.
 * 
 * When you have a program that generates this pattern, 
 * define a binding size = 8 and change the program so that it works for any size, 
 * outputting a grid of the given width and height.
 */

let board = "";
let alternate = true;
let width = 8;
let height = 8;

 for(let i = 0; i < width; i++) {
     for(let j = 0;j < height; j++) {
         if(alternate == true) {
             board = board + " ";
             alternate = false;
         } else {
             board = board + "#";
             alternate = true;
         }
     }

     alternate = !alternate;
     board = board + "\n";
 }

 console.log(board);