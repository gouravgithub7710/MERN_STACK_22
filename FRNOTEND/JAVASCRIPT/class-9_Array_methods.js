// // Array Methods


// ---------------------------------------------MAP method---------------------------
// Map method is used to perform a some operation on each element, Agar kuch operations perform kar rahe hai har element me to usse return karna padega and uske output ko ek variable me store karna padega

// const arr = [1, 2, 3, 4];

// const doubled = arr.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]
// console.log(arr);     // [1, 2, 3, 4] (original unchanged)


// ------------------------------------------Filter method---------------------------
// Filter method is used to filter a value which is satisfy the condition.

// const arr = [1, 2, 3, 4, 5, 6];

// const evens = arr.filter(num => num % 2 === 0);

// console.log(evens); // [2, 4, 6]

// -----------------------------------------Find Method---------------------------------
// Returns the value of the first element in the array that satisfies the provided testing function.

// const arr = [1, 3, 4, 6, 7];

// const result = arr.find(num => num % 2 === 0);

// console.log(result); // 4

// ---------------------------------------Some Method----------------------------------------
// Some method is traverse an array and check the value is present or not some method is return output in boolean.

// const nums = [1, 3, 5, 7, 10];

// const hasEven = nums.some(n => n % 2 === 0);

// console.log(hasEven);  // true

// ------------------------------------IndexOf--------------------------------------------------------------
// IndexOf is use to find the index of given value 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let index = arr.indexOf(5);
// console.log("Original Array", arr);
// console.log("Index", index);

// ------------------------------------every() Method-------------------------------------------------------
// Checks if all elements in the array satisfy the condition.
// Returns:

// true → if every element passes
// false → if even one fails

// const nums = [2, 4, 6, 8];
// const allEven = nums.every(n => n % 2 === 0);
// console.log(allEven); // true

// -----------------------------------------includes() Method------------------------------------------
// Checks whether an array contains a specific value.
// Returns true/false.

// const arr = [10, 20, 30];

// console.log(arr.includes(20));  // true
// console.log(arr.includes(50));  // false

// --------------------------------------------flat() Method------------------------------------------
// flat() nested arrays ko single array banata hai.

// const arr = [1, [2, 3], [4, [5]]];

// console.log(arr.flat()); 
// // [1, 2, 3, 4, [5]]


// -------------------------------------------join() Method----------------------------------------------
// join() array ke sab elements ko string me convert karta hai aur unke beech separator lagata hai.

// const arr = ["Zaid", "Khan"];

// console.log(arr.join(" ")); 
// // "Zaid Khan"


// -----------------------------------------------------reduce()----------------------------------------
// reduce() JavaScript ka higher-order array method hai jo array ko ek single output (value) me convert kar deta hai.

// array.reduce((accumulator, currentValue, index, array) => {
//     // logic
// }, initialValue)

// Parameters:

// accumulator (acc):
// Previous return value ko store karta hai. Yah “carry forward” hota rehta hai.

// currentValue:
// Array ka current element.

// initialValue (optional):
// Accumulator ka starting value.
// Agar nahi doge → first element ko accumulator bana dega.



// Example------------
// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(sum); // 10



//Flat method -- use for converting nasted array to single array

// let arr = [1,[2,3,[4]],5]
// let newarr = arr.flat(1); 
// let newarr2 = arr.flat(Infinity); 
//  //2 ke place me Infinity likh dege to pure array ek baar me single array me convert ho jai ga
//flat() iske ander itne value dege utne array merge flat ho jai ge left to right
// console.log(newarr);
// console.log(newarr2);


// join -----------------
// join se hum array ke elements ko single string me convert karne me kaam aate hai 

let arr = [1,2,3,4,5]
let newarr = arr.join("");
console.log(newarr)//12345

// newarr variable me 12345 as store ho giya hai 


//every method ----------------
//pure array me ek ek element condition ko satisfied karna chaiye jab ja kar ke true dete hai ye method otherwise false

// let arr = [1, 2, 3, 4, 5];
// let ans = arr.every((value) => value > 3);
// console.log(ans); //false - bcoz value is less than 3 avalaible in arr


//reduce ----------------------


