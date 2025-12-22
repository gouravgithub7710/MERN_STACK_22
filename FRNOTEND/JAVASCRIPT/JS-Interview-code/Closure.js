// # 🔹 Closure kya hota hai?

//   Closure is a function that remembers variables from its outer scope even after the outer function has finished execution.

//     Closure tab banta hai jab ek function, apne outer (bahar wale) function ke variables ko “yaad” rakhta hai, chahe outer function execute ho chuka ho.

//     📌 Matlab:
//     Function + uska lexical scope = Closure

                  // function counter() {
                  //   let count = 0;

                  //   return function () {
                  //     count++;
                  //     console.log("Clicked:", count);
                  //   }
                  // }

                  // let clickCounter = counter();

                  // clickCounter(); // Clicked: 1
                  // clickCounter(); // Clicked: 2
                  // clickCounter(); // Clicked: 3



//  powerful uses like 
// data encapsulation (private variables),
//  state management (counters, event handlers), 
// fn currying,
//  memoization, and 
// building module patterns, making code more modular, secure, and efficient in languages like JavaScript.                   
                  

function x(){
  var a = 5;

  function y(){
    console.log(a);
  }
  a=10;
  return y;
}
let ans = x();
console.log(ans);
// Output
// ƒ y(){
//     console.log(a);
//   }


ans();
//10
