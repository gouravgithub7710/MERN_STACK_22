// console.log(typeof NaN);   //number


//Freeze -- makes a object as an read only

// const user = { name: "A" };
// Object.freeze(user);
// user.name = "B";
// console.log(user.name); // A because user is freeze


//seal -- makes a object as an read and update in extensing value only 

// const user = { name: "A" };
// Object.seal(user);
// user.name = "B";
// console.log(user.name); // B because it is possible to update exesting value user is update
// //user.Id = 1234;  // this is not possible to add new key value



//console.log(typeof function(){});  //function
// let obj = { a: 1, b: 2 };
// let keys = Object.keys(obj);
// console.log(keys); // [ 'a', 'b' ]



// console.log(1 < 2 < 3); //true
// console.log(3 > 2 > 1); //false  
// //3>2 = true = 1  mean 1<1= false


//To avoid mistakes & bugs by enforcing strict rules in JavaScript.

// "use strict";  
// x = 100;
// console.log(x);


// function test() {
//   return;
//   {
//     name: "JS"
//   }
// }
// console.log(test()); //--undefined 



// let arr = [1, [2, 3], 4];
// console.log(arr[1][0]); //2
// let nums = [1, [2, [3, 4]]];
// console.log(nums[1][1][0]); //3














