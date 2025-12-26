// call, apply, bind kya hote hain?

      // 👉 Ye function ke methods hote hain
      // 👉 Inka use this ko control karne ke liye hota hai.


// 🔹 call() – Definition

                      // call() function ko turant call karta hai aur this set karta hai


                                        // function sayHello() {
                                        //   console.log(this.name);
                                        // }

                                        // const user = {
                                        //   name: "Gourav"
                                        // };

                                        // sayHello.call(user); // Gourav

                                        // 📌 Yaha this = user


// 🔹 apply() – Definition

                      // apply() bhi call jaisa hi hai, bas arguments array me deta hai

                                    // function sayHello(city) {
                                    //   console.log(this.name + " from " + city);
                                    // }

                                    // const user = {
                                    //   name: "Gourav"
                                    // };

                                    // sayHello.apply(user, ["Indore"]);
                                    // // Gourav from Indore



// 🔹 bind() – Definition

                      // bind() function ko call nahi karta, naya function bana deta hai


                                      // function sayHello() {
                                      //   console.log(this.name);
                                      // }

                                      // const user = {
                                      //   name: "Gourav"
                                      // };

                                      // const newFunc = sayHello.bind(user);

                                      // newFunc(); // Gourav


//call & apply immediately call function, bind returns a new function