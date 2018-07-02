/**
 * Write a function min that takes two arguments 
 * and returns their minimum.
 */

 function minimum(a,b) {
     if(a <= b) {
         return console.log(a);
     } else {
         return console.log(b);
     }
 }


 /* Tests */
minimum(1,2);
minimum(10,20);
minimum(5,5);