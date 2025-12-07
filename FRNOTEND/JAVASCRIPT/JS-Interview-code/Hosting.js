
//funciton hosting ---------------
// Hoisting is a JavaScript mechanism where variables, function declarations are moved ("hoisted") to the top of their scope during the compilation phase before the code is executed. This allows you to use variables or functions before they are declared in the code.



// var -- gloabl scope


// console.log(a); // undefined (hoisted but not yet assigned)
// var a = 10
// console.log(a); // 10 {value assigned}


// let and const are block scope so that they are going inside the Tempory Dead Zone

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
//  let b = 20
// console.log(b); //-20


//console.log(c); // ReferenceError: Cannot access 'c' before initialization
var c = 30
//console.log(c); // 30







// greet();  // This works

// function greet() {
//   console.log("Hello Hoisting!");
// }




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


