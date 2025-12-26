// Memoization in JavaScript

        // Memoization ek optimization technique hai jisme hum function ke result ko store (cache) kar lete hain.
        // Agar same input dobara aaye, to function re-calculate nahi karta, direct stored result return kar deta hai.

        // 👉 Isse performance fast ho jati hai.

 
// Without Memoization (Problem)

// function add(a, b) {
//   console.log("Calculating...");
//   return a + b;
// }

// add(2, 3); // Calculating...
// add(2, 3); // Calculating again (waste)


//With Memoization (Solution)


function memoSquare() {
  let cache = {};

  return function (n) {
    if (cache[n]) {
      console.log("From cache");
      return cache[n];
    } else {
      console.log("Calculating...");
      cache[n] = n * n;
      return cache[n];
    }
  };
}

const square = memoSquare();

square(5); // Calculating...
square(5); // From cache
square(6); // Calculating...
square(6); // From cache


// const add = memoizedAdd();

// add(2, 3); // Calculating...
// add(2, 3); // From cache
// add(4, 5); // Calculating...
// add(4, 5); // From cache


// Memoization is a technique to store the results of expensive function calls and reuse them when the same inputs occur again.