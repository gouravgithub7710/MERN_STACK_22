//Debouing and Throttling :-
                              // both prevent unnecessary function call.


// Throttling ek technique hai jisme hum kisi function ko fixed time interval me sirf ek baar run hone dete hain, chahe event kitni bhi baar trigger ho.



// Throttling: Function ko fixed interval me execute karta hai

// Debouncing: Event rukne ke baad function ko execute karta hai


//Throttling:
              
              //Button ko kitni bhi baar click karo,
              //function fixed time (e.g. 2 sec) me sirf ek baar chalega.

//   Throttle:
// 👉 “Resend OTP” button (2 sec gap)

      
              
                    function throttle(fn, delay) {
                      let lastCall = 0;

                      return function () {
                        let now = Date.now();

                        if (now - lastCall >= delay) {
                          lastCall = now;
                          fn();
                        }
                      };
                    }

                    let btn = document.getElementById("btn");

                    btn.addEventListener("click", throttle(() => {
                      console.log("Button clicked (Throttle)");
                    }, 2000));
              

// Output Behaviour

// 10 fast clicks

// Console me sirf har 2 second me 1 print

// g Use when repeated clicks control karne ho                    