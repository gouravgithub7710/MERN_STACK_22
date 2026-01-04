//call back fn in js

 // A callback function is a function passed into another function as an argument and executed later

//Jab ek function ko dusre function ke andar argument ke roop me pass kiya jata hai,aur baad me call kiya jata hai, usse callback function kehte hain.


// function calculate(a, b, callback) {
//   return callback(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// let result = calculate(10, 5, add);
// console.log(result);



function calc(x,y,callback){
   return callback(x,y);
}

// here add is a cllback function
function add(x,y){  
return x+y;
}

let result = calc(5,10,add);

console.log(result)




// JS is synchronous and single thread language