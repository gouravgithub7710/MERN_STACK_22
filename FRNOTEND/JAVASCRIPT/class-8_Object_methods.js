// Object Methods

// | Method    | Use            |
// | --------- | -------------- |
// | keys()    | keys nikalna   |
// | values()  | values nikalna |
// | entries() | key-value pair |
// | assign()  | merge          |
// | freeze()  | lock           |
// | seal()    | partial lock   |


// 1️⃣ Object.keys()
//  Object ki sari keys ko array me deta hai
let user = {
  name: "Gourav",
  age: 21,
  skill: "React"
};
// console.log(Object.keys(user));//[ 'name', 'age', 'skill' ]


// 2️⃣ Object.values()
// Object ki sari values ko array me deta hai
      // console.log(Object.values(user));
      // //["Gourav", 21, "React"]


// 3️⃣ Object.entries()
// Key + value ko pair me array ke form me deta hai
   //console.log(Object.entries(user));
    //[ [ 'name', 'Gourav' ], [ 'age', 21 ], [ 'skill', 'React' ] ]



// 4️⃣ hasOwnProperty()
// Check karta hai key object me hai ya nahi

// console.log(user.hasOwnProperty("age"));   // true
// console.log(user.hasOwnProperty("email")); // false


//5️⃣ Object.assign()
// Do ya zyada objects ko merge karta hai
//  let a = { x: 1 };
// let b = { y: 2 };

// let result = Object.assign({}, a, b);
// console.log(result);//{ x: 1, y: 2 }


//🔁 Loop on Object
// 🔹 for...in loop

//1:- For in loop - use for iterate object 

// for (let key in user) {
//   console.log(key, user[key]);
// }





