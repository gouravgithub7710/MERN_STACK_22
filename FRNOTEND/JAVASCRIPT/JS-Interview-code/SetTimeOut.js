//print 0 to 4 using settimeout after 1s


//case of var:

// function x(){
// for(var i=0;i<5;i++){
//   setTimeout(function(){
//     console.log(i);
//   },i*1000)
// }
// }
// x();  // 5 5 5 5 5 5    // bcoz of var keyword 


// case of let :

// function x(){
// for(let i=0;i<5;i++){
//   setTimeout(function(){
//     console.log(i);
//   },i*1000)
// }
// }
// x();  // 0 1 2 3 4   

//let is block scope and every itration create new copy let variable


//interview 

// you can do this using var -- print 0 to 4;

// yes we can using closers using var

// function x(){
// for(var i=0;i<5;i++){
//                           //this time close make new copy of i to x
//   function close(x){   
//     setTimeout(function(){
//     console.log(x);                 
//   },x*1000)
//   }

//   close(i);

// }
// }
// x();  // 0 1 2 3 4  




// we gave trust issue in setTimeout 