// Interview Quiz Q


// premitive me value compare hote hai 
// let a=5;
// let b=5; 
// { a==b } is true bcoz value is same

// Non-premitive me address compare hote hai like in ARRAY
// Let arr1=[1,2,3,4,5];
// Let arr2=[1,2,3,4,5];
// {arr1==arr2} is false bcoz address is diff

// console.log(typeof NaN);   //number


// console.log(10 / "abc"); // NaN
// console.log(typeof (10 / "abc")); // "number"



//Freeze -- makes a object as an read only

// const user = { name: "A" };
// Object.freeze(user);
// user.name = "B";
// console.log(user.name); // A because user is freeze means read only


//seal -- makes a object as an read and also update in extensing value only 

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


// let arr = [[1, 2], [3, 4]];
// arr[0].push(5);
// console.log(arr);  //[ [ 1, 2, 5 ], [ 3, 4 ] ]




// let a = 1;
// let b = a++ + ++a + a;  //1+3+3
// console.log(b);   // 7


// let x = 3;
// let y = x++ + x++ + ++x; // 3+4+6
// console.log(x, y);// 6 13


// let arr = [10, 20, 30, 40];
// let result = arr.indexOf(20) + arr.indexOf(50); // 1+(-1) = 0
// console.log(result); // 0


// console.log(1 + "2" + 3 - "1"); // 122



// let obj = {
//   a: {
//     100: {
//       "c-18": 10
//     }
//   }
// };
// obj.a.b.c = obj.a.b.c + 5;
// console.log(obj.a.b.c);

// obj.a → mil gaya
// obj.a.b → ❌ exist nahi karta → undefined
// undefined.c access karne ki koshish → Error throw hoga: Cannot set properties of undefined
// TypeError: Cannot set properties of undefined (setting 'c')


// console.log(obj.a[100]["c-18"]);// 10


// let obj = {
//   a: {
//     100: {
//       "c-18": 10
//     }
//   }
// };
// console.log(obj.a.b);  // undefined bcoz obj.a.b → ❌ exist nahi karta → undefined



// let product = {
//   name: "Laptop",
//   specs: {
//     ram: "16GB",
//     storage: {
//       type: "SSD",
//       size: "512GB"
//     }
//   }
// };
// console.log(product["specs"]["storage"]["type"]);//SSD
// console.log(product.specs.storage.type)//SSD --bcoz their is no any special case so that we can acess using(.)


// let product = {
//   name: "Laptop",
//   specs: {
//     ram: "16GB",
//     storage: {
//       type: "SSD",
//       size: "512GB"
//     }
//   }
// };
// console.log(product[specs][storage][type]);//ReferenceError: specs is not defined
// console.log(product["specs"]["storage"]["type"]);//SSD   need double quote to acess value


// let obj = {
//   a: {
//     b: 2
//   }
// };
// console.log("b" in obj); //false
// console.log("b" in obj.a); //true












