//Higher-Order Function (HOF)

//A Higher-Order Function is a function that takes another function as an argument or returns a function.

// MAP, FILTER, REDICE are Higher order funciton.


//Callback Function

//A Callback Function is a function that is passed as an argument to another function and is called later.

// function callback(x,y){
//     return x+y;
// }

// function higheror(sum){
//   let x =5;
//   let y=10;

//   let add = sum(x,y);
//   console.log(add);
// }


// higheror(callback);



//funciton hosting ---------------
// greet();  // This works

// function greet() {
//   console.log("Hello Hoisting!");
// }


// higherorder and cllback function--------------

// function higherOrder(fn) {
 
//   let x = 5;
//   let y = 10;
//   let ans = fn(x,y);
//   console.log(ans);
  
// }

// function sayHello(x,y) {
    
//   console.log("Hello from Callback");
//   return x+y;
// }

// higherOrder(sayHello);


// console.log(x)
// function x(){
//     console.log("hii");
// }

// let x =(a,b)=>  {
//     console.log(a)
//     console.log(b)
// };
// let ans =x(2,4);
// console.log(ans)

// console.log(x);
// var x=5;


// console.log(x)
// function x(){
//     console.log("fn")
// }

// console.log(x())
// let x = function f(){
//     console.log("hii")
// }

// greet();   // Works

// function greet() {
//   console.log("Hello Function Hoisting");
// }


// hello();   // ❌ TypeError
// var hello = function() {
//   console.log("Hi");
// };

// hello();   // ❌ refrece error 
// let hello = function() {
//   console.log("Hi");
// };

// console.log(hello());   // ❌ refrence error
// const hello = function() {
//   console.log("Hi");
// };



// test();   // ❌ ReferenceError
// let test = () => console.log("test");


//   var num = 10;

// function display() {
//   console.log(num);
// //   var num = 20;
// }

// display();





