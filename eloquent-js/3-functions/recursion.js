/**
 * Define a recursive function isEven. 
 * The function should accept a single 
 * parameter (a positive, whole number) and return a Boolean.
 */

 isEven = (num) => {
     if(num >= 0) {
         if(num === 0) {
             console.log("Even");
         } else if (num === 1) {
             console.log("Odd")
         } else {
             isEven(num-2)
         }
     } else {
         console.log("Only positive numbers please.");
     }
 }

 //Test
 isEven(50);
 isEven(75);
 isEven(-1);