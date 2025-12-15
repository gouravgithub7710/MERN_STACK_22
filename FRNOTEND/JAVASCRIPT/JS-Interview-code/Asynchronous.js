//Asynchronous js
//https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/


// Asynchronous programming is a way for a computer program to handle multiple tasks simultaneously rather than executing them one after the other.
//This approach can greatly improve the performance and responsiveness of a program.


// setTimeout(()=>{ 
//     console.log("wait for 3 sec");
// },3000);
// console.log("line 1");
// console.log("line 2");
// console.log("line 3");

// output:
// line 1
// line 2
// line 3
// wait for 3 sec



// Achive asynchronous js using callback function -----
// Declare function
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = {name: "John", age: 30};
//     callback(data);
//   }, 3000);
// }

// // Execute function with a callback
// fetchData(function(data) {
//   console.log(data);
// });

// console.log("Data is being fetched...");

// output:
// Data is being fetched...
// { name: 'John', age: 30 }