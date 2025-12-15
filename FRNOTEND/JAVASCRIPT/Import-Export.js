//Import and Export in js 
      
            //yahi script scope hai 

    // JS me import–export ka use hum code ko multiple files me todne aur reuse karne ke liye karte hain.

    //Import:
          //Dusri file se exported cheez ko apni file me lana = import

    //Export:
          // Kisi function / variable / class ko dusri file me use karne ke liye bahar bhejna = export
    //Export Two types:-

     //1] Named export
        //Jab multiple cheeze export karni ho
          // kise fun ya variable ke name ke samne 
            // export const add = (a, b) => {
            //   return a + b;
            // };
            // export const sub = (a, b) => {
            //   return a - b;
            // };
         //esse import karte hai 
            // import { add, sub } from "./math.js";
            // console.log(add(5, 3)); // 8


     //2] Default Export
          //Jab file se sirf ek hi cheez export karni ho
          //Ek file me export default ek hai baar likha jata hai 
          
          // export default function greet(name) {
          //     return `Hello ${name}`;
          //   }

         //esse Import karte hai:
          // import greet from "./greet.js";
          // console.log(greet("Gourav"));

          // Rule:
          // {} nahi lagta export default ko import karne ke time 
     

      