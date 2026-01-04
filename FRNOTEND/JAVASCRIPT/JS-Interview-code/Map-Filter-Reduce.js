//MAP-FILTER-REDUCE

//MAP - Har element pe operation apply karke naya array banata hai.

// let arr = [1, 2, 3];

// let result = arr.map(num => num * 2);

// console.log(result); // [2, 4, 6]
// console.log(arr) //[1, 2, 3]



// FILTER - 
// Condition ke base pe elements select karta hai and returns a new array

// let arr = [1, 2, 3, 4];

// let result = arr.filter(num => num % 2 === 0);

// console.log(result); // [2, 4]
// console.log(arr) //[1, 2, 3, 4]




//REDUCE - reduce() is an array method that iterates over all elements and combines them into a single value using a callback function

// let arr = [2, 3];

// let sum = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 5


const people = [
  { fname: "Gourav", lname: "Giri", age: 21 },
  { fname: "Aman",   lname: "Sharma", age: 23 },
  { fname: "Riya",   lname: "Verma",  age: 20 },
  { fname: "Neha",   lname: "Patel",  age: 21 },
  { fname: "Rahul",  lname: "Singh",  age: 20 }
];


// find simple age people and put into obj and with age and freqcount.

// const ans = people.reduce((acc,curr)=>{
//   if(acc[curr.age]){
//        acc[curr.age]= ++acc[curr.age];
//   }else{
//     acc[curr.age] = 1;
//   }
//   return acc;
// },{})

// console.log(ans);  //{20: 2, 21: 2, 23: 1}




