// Loops
//loop is used for iterating over a sequence of numbers or elements.


//while
//Do while
//for loop
//for in
//for of

// their are mainly three types of loops - while and do while and for

// 1-for

// for(let i = 0;i<5;i++)
// {
//   console.log("Num is :"+i);  
// }

// 2-while

// let x=0;
// let y=4;
// while(x<=y){
// console.log("num is :"+x);
// x++;
// }

// 3-Do while

// let x=0;
// let y=4;
// do{
//   console.log("Hello, I'm do wala section");
//   x++;
// }while(x<=y){
//  console.log("num is :"+x);
 
// }



//for…of Loop:----- 

// The for…of loop is used to iterate over the values of an iterable object such as arrays, strings, maps, sets, etc. It provides a simpler syntax and eliminates the need for an index or counter.

//Use Cases: Ideal for iterating over iterable objects like arrays, strings, maps, and sets

// const stockPrices = [120.50, 125.75, 130.20, 122.80, 128.40];
// let total = 0;
// for (const price of stockPrices) {
//     total += price;
// }
// console.log(total);


//for…in Loop:-------
// when you only need to iterate over the elements of an iterable object.

// const person = {
//   name: "abhi",
//   age: 30,
//   city: "Delhi"
// };

// for (let [key, value] of Object.entries(person)) {
//   console.log(key + ": " + value);
// }


// for .. in : --------
//  : In JavaScript, the for...in loop is used to iterate over the properties of an object. It allows you to loop through the enumerable properties of an object, including its own properties and inherited properties from its prototype chain. The loop iterates over each property, assigning the property key to a variable for each iteration.


// for (variable in object) {
//   // code to be executed
// }

