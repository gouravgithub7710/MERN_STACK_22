// closure

// in js it is a object

// combination of two thing
// 1... lexical  scoping      2 . simple function

// it is used to change data safely because it retain the information


// Closure is a feature where an inner function remembers and accesses variables of its outer function even after the outer function has finished execution.

function Outer() {
  let test = 0;

   return function Inner() {
    test++;
    return test;
};
}

// if we make a variable in null then the problem of memory leak & memory waste is solved
let res = null
 res = Outer();
console.log(res());
console.log(res());

const res2 = Outer();
console.log(res2());
console.log(res2());
console.log(res2());
console.log(res2());

// function Counter() {
//   let count = 0; 


//   
//   return function increment() {
//     count++;
//     return count;
//   };
// }

// const counter1 = Counter();
// console.log(counter1()); 
// console.log(counter1()); 

// const counter2 = Counter();
// console.log(counter2());