//  JavaScript me har object ke saath ek hidden property hoti hai jise [[Prototype]] kehte hain

      //  (JS me ise access karne ke liye __proto__ use hota hai).

                // let user = {
                //   name: "Gourav"
                // };

                // console.log(user.toString());

                // toString() kaha se aaya?
                // user object me ❌
                // user.__proto__ → Object.prototype ✅

                // 👉 Matlab method prototype se mila

//Prototypal Inheritance--------------------------------

            // Jab ek object, dusre object ke prototype se properties/methods inherit karta hai, use Prototypal Inheritance kehte hain.
                    // let person = {
                    //   speak: function () {
                    //     console.log("I can speak");
                    //   }
                    // };

                    // let student = {
                    //   study: function () {
                    //     console.log("I can study");
                    //   }
                    // };

                    // // inheritance
                    // student.__proto__ = person;

                    // student.study(); // I can study
                    // student.speak(); // I can speak (from prototype)
