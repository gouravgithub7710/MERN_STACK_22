//_Exeptional_handling

// compile time error :- syntex error 
// run time error :- logical

//3 keyword: try  ,  catch    ,   throw

//try() : - ek block hai and iske ander essa code likha jata hai jaha error ane ke possiblity hote hai

//cath() :- catch ek fn hai and ye ek parameter leta hai 
            // try ke ander jo error aati hai usko catch karne keliye kaam aati hai
          //multiple cath nhi ho sakte hai 
          //catch ke ander try likh sakte hai 
          
          // ek try ke liye ek catch 


//throw : - throw try ke ander likha jata hai
          // custum error msg throw karne ke liye 

//finally :- ye ek block hai and yaha vo code likha jata hai jo chalana
          // he hai.

      

//Example:

//normal 

// function addTwoNum(x,y){
//   try{
//     return x+y;
//   }
//   catch(e){console.log(e)}
// }
// console.log(addTwoNum(5,5))


//pro

function addTwoNum(x, y) {
  try {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    } else {
      throw "x or y value should be number.";
    }
  } catch (e) {
    console.log("We got an error:", e);
  }
}

console.log(addTwoNum(5, 5));
