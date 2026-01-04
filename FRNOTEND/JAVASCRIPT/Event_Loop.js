//Event Loop :- responisble for excuting Asynchronous JS

        // Event Loop JavaScript ka mechanism hai jo async code (setTimeout,    Promise, API) ko handle karta hai,
        // taaki JS non-blocking rahe.


// {
// Synchronous programing - me call stack me excution hota hai 
// Asynchronous programing - me event loop hota hai
// } 


// Event loop :

// 🔁 Event Loop ke main parts or components

// 1️⃣ Call Stack:-- excuting synchronous code immedietly means function excute


// 2️⃣ Web APIsP:-- asynchshronous code web api me store hota hai 
         //Browser provide karta hai      (setTimeout, fetch, DOM events, localStorage,console,location )


// 3️⃣ Task Queue (Macro Queue)(callback Q) :   

         //(lowpriority)                                 
          
    //           setTimeout, setInterval, DOM events yahan aate hain

    //setTimout:-task ko delay karna 
      // setTimeout(() => {w
      //   console.log("Hello after 1 second!");
      // }, 1000);
    
    //setInterval:-kise bhi kaam ko baar-barr karna 
            // let interval = setInterval(() => {
            // // Statements
            // }, 3000);



// 4️⃣ Micro Queue:
// Higher priority queue

          // Includes:
                // Promise.then.catch
                // fetch
                // finally
                // MutationObserver


//5️⃣ Event Loop

  // Check karta hai or monotring on call stack:
      // Call Stack empty hai?
          //Pehle Micro Queue
          //Phir Macrotask Queue

// | Queue     | Examples     | Priority |
// | --------- | ------------ | -------- |
// | Microtask | Promise.then | 🔥 High  |
// | macrotask | setTimeout   |     Low  |


//🔥 Most Important Example (Interview favorite)

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);  //0 time ho ya jyada ho output same aai ga

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");


// Execution order:

// 1️⃣ Start
// 2️⃣ End
// 3️⃣ Promise (microtask first)
// 4️⃣ Timeout (macrotask later)




