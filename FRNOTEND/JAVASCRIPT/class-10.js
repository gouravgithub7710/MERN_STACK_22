// JS

// premitive me value compare hote hai 
// let a=5;
// let b=5; 
// { a==b } is true bcoz value is same

// Non-premitive me address compare hote hai like in ARRAY
// Let arr1=[1,2,3,4,5];
// Let arr2=[1,2,3,4,5];
// {arr1==arr2} is false bcoz address is diff



// default Paramenter

// fucnction getsumofthreenum(x,y,z){return x+y+z=30}
// let ans = getsumofthreenum(10,20); 
// // yaha humne z ka argument pass nhi kiya hai to function parameter z ke liye 30 default aa jai ga.
// // default parameter hamesha last me hone chaiye 

// //funciton expression

// let ans = function add(x,y){ clg(x+y);} 
//  add(10,20) 

// //function store in variable this is called fucntion expression


// //HOSTING -- support nhi karte hai - arrrow function and function expression 



// //TERNEARY OPERATOR 
// //condition ? exprIfTrue : exprIfFalse
// let button = true;
// let light = true ? clg("on"):clg("off");


// //Spread operator 

// //Rest operator 

// fucnction getsumofthreenum(x,y,...z){
// clg(z)//30,40,50 store in z as an Array   }
// //..z bhi last me hota hai  and issse ko rest operator bolte hai 
// let ans = getsumofthreenum(10,20,30,40,50); 



// //Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// //IMPORTANT FOR INTERVIEW---------
// //Destructuring in React
// Destructuring is a JavaScript feature that allows you to extract values from objects or arrays into distinct variables. In React, it's commonly used with props, hooks, and state management.


// 1. Array Destructuring:
// const numbers = [10, 20, 30, 40];
// const [first, second] = numbers;
// console.log(first);  // Output: 10
// console.log(second); // Output: 20

// // Array me  koi bhi name ka variable bana sake hai


// 2. Object Destructuring:
// const person = { name: "Alice", age: 30, city: "New York" };
// const { name, age } = person;
// console.log(name); // Output: Alice
// console.log(age);  // Output: 30

// // object me hum only {} ke ander key ke name se se hai variable banana hoga agar dusure name se baniya to vaha undefined aai ga


// //FOR OF -- used in array
// for(let item of arr){clg(item)}

// //FOR In -- used in object

// for(value in obj){clg(obj[value])}









// // template letreal :-- jo back tick ke ander hote hai vo template letrate and iska istmal String interpolulation ke liye kaam aata hai.
 
// clg(`this is value: ${value}`)

// // using backticks se hum code ko line by line likh sakte hai 
//  `Hii
//   Iam
//   Gourav
//   Giri`



// // string:-- me array ke properties use kar satkt hai likhe : length,index

// ex: let str = "gourav";  clg(str[0])//g

// imp :- indexing ke through hum string ko changes nhi kar sakte hai 
// 	ex:- str[0]="k";
// 		clg(str) // gourav  bcoz index ke through hum string ko change nhi kar sakte hai



// //Lexial scoping : (())

// 	ex:

// function outerFunction() {
//   let outerVariable = "I am from the outer scope";

//   function innerFunction() {
//     console.log(outerVariable); // innerFunction can access outerVariable
//   }

//   innerFunction();
// }

// outerFunction(); // Output: I am from the outer scope



// // Carrying :

// essa fn jiske ander ek se jyada parameter le raha hai 

// //practicle koi kaam nhi aata hai 

//     function add(a) {
//       return function(b) {
//         return function(c) {
//           return a + b + c;
//         };
//       };
//     }
//     const addOne = add(1); // Returns a function that expects 'b' and 'c'
//     const addOneAndTwo = addOne(2); // Returns a function that expects 'c'
//     const result = addOneAndTwo(3); // Returns the final result: 6

// 	TWO TYPES OF CURRYING:



// // This keyword: current envoking object ko point karta hai 

// 1:clg(this) // by default this keyword point window object
// 2: funciton data(){ clg(this);// window }  data();
// 3: arrow fn ke time per this keyword work nhi karta hai and use karete hai to undefined deta hai 
// 4: Agar apan object ke and noraml function banate hai and fucntion ke ander clg(this) ya this.key_name karte hai to us case me this keyword obj ko follow karege jiske ander vo bana ho 
//  ex------
// A) const cooler ={ id:"423",color:"Indus", on:fucntion(){ clg(this)//cooler}}
// B) const cooler ={ id:"423",color:"Indus", on:()=>{ clg(this)//window     clg(this.id)//undefined}}

// {It has different values depending on where it is used:
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.}


// // new keyword and factory funciton or constructor 

// kaise fn ko call karne time per new likh dete hai vaha (empty object) ko point karega and isko apan factory funciton or constructor 

//   funciton data(){ clg(this);// empty object }  new data(); factory funciton or constructor fucntion ban jata hai new lagane se 



// // call, apply, bind