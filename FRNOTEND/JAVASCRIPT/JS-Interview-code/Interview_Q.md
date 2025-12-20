# JavaScript vs ECMAScript

   ## 🔹 ECMAScript (ES) kya hai?
            ECMAScript ek standard / rulebook hai 📘
            Ye define karta hai ki JavaScript language ka syntax, rules aur  features kaise honge
            Example: variables, loops, functions, arrow functions, promises, async/await etc.

          👉 Matlab: ECMAScript = JavaScript ka blueprint

   ## 🔹 JavaScript kya hai?

            JavaScript ek programming language hai 🧑‍💻
            Ye ECMAScript ke rules follow karti hai, lekin iske saath extra cheeze bhi hoti hain
            JavaScript browser aur environment (like Node.js) ke saath kaam karti hai

            👉 Matlab: JavaScript = ECMAScript + extra features

  ## Example 

            // ECMAScript feature
            let name = "Gourav";   // ES6
            const add = (a, b) => a + b;

            // JavaScript (browser feature)
            document.getElementById("demo").innerText = name;


# JavaScript Interview Questions & Answers 🚀

Complete collection of 30 most important JavaScript interview questions with detailed explanations, code examples, and outputs in Hindi.

---

## 📚 Table of Contents

1. [JavaScript Basics](#1-javascript-kya-hai)
2. [Data Types](#2-javascript-ke-data-types)
3. [Variables (var, let, const)](#3-difference-between-var-let-aur-const)
4. [Functions](#4-javascript-me-function-kaise-banate-hain)
5. [Arrow Functions](#5-arrow-function-kya-hota-hai)
6. [Hoisting](#6-hoisting-kya-hota-hai)
7. [Closures](#7-javascript-me-closures-kaise-kaam-karte-hain)
8. [Higher-Order Functions](#8-higher-order-functions-kya-hote-hain)
9. [this Keyword](#9-javascript-me-this-keyword-ka-kya-role-hai)
10. [Callback Functions](#10-javascript-me-callback-function-kya-hai)
11. [Promises](#11-promise-kya-hota-hai)
12. [Async vs Sync](#12-asynchronous-aur-synchronous-programming)
13. [Array Methods](#13-array-methods-map-filter-reduce)
14. [Event Delegation](#14-javascript-me-event-delegation)
15. [DOM Manipulation](#15-dom-manipulation)
16. [Classes](#16-javascript-me-classes)
17. [ES6 Features](#17-es6-features)
18. [Template Literals](#18-template-literals)
19. [Destructuring](#19-destructuring-assignment)
20. [Spread & Rest Operators](#20-spread-aur-rest-operator)
21. [Error Handling](#21-error-handling)
22. [Modules](#22-javascript-me-modules)
23. [Event Loop](#23-event-loop)
24. [Memory Leaks](#24-memory-leak)
25. [Deep vs Shallow Copy](#25-deep-copy-aur-shallow-copy)
26. [Storage APIs](#26-localstorage-aur-sessionstorage)
27. [== vs ===](#27-difference-between--and-)
28. [Closures Real Example](#28-closures-ka-real-world-example)
29. [Recursion](#29-recursion)
30. [call, apply, bind](#30-call-apply-aur-bind)

---

## 1. JavaScript kya hai?

**Question:** JavaScript kya hai? JavaScript ka use kaha hota hai?

**Answer:** JavaScript ek high-level, interpreted programming language hai jo primarily web pages me interactivity aur functionality add karne ke liye use hoti hai.

**Example:**
```javascript
// Simple alert message
alert("Hello, World!");

// Button click par action
document.getElementById("myBtn").addEventListener("click", function() {
    console.log("Button clicked!");
});
```

**Output:**
```
Alert box show hoga: "Hello, World!"
Console me print hoga: "Button clicked!"
```

**Use Cases:**
- 🌐 Web Development (Frontend)
- 🖥️ Server-Side Development (Node.js)
- 📱 Mobile Apps (React Native)
- 🎮 Game Development
- 🤖 IoT Applications

---

## 2. JavaScript ke data types

**Question:** JavaScript ke data types kya kya hote hain?

**Answer:** JavaScript me 7 primitive data types hote hain: String, Number, Boolean, Undefined, Null, Symbol, aur BigInt. Ek non-primitive type hai: Object.

**Example:**
```javascript
let name = "John";           // String
let age = 25;                // Number
let isStudent = true;        // Boolean
let address;                 // Undefined
let car = null;              // Null
let id = Symbol("id");       // Symbol
let bigNum = 123456789n;     // BigInt
let person = { name: "John" }; // Object

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof address);   // "undefined"
console.log(typeof car);       // "object" (null ka type object hai)
```

**Output:**
```
string
number
boolean
undefined
object
```

---

## 3. Difference between var, let aur const

**Question:** var, let aur const me kya difference hai?

**Answer:** `var` function-scoped hai, `let` aur `const` block-scoped hain. `const` ki value change nahi ho sakti.

**Example:**
```javascript
var x = 10;
let y = 20;
const z = 30;

x = 15;  // ✅ OK
y = 25;  // ✅ OK
// z = 35;  // ❌ Error: Assignment to constant variable

if (true) {
    var a = 1;
    let b = 2;
    console.log(a, b); // 1 2
}

console.log(a); // ✅ 1 (var accessible outside block)
// console.log(b); // ❌ Error: b is not defined
```

**Output:**
```
1 2
1
```

**Key Differences:**
| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Reassignment | ✅ Yes | ✅ Yes | ❌ No |
| Hoisting | ✅ Yes | ✅ Yes (TDZ) | ✅ Yes (TDZ) |
| Re-declaration | ✅ Yes | ❌ No | ❌ No |

---

## 4. JavaScript me function kaise banate hain

**Question:** JavaScript me function kaise banate hain?

**Answer:** JavaScript me function ko `function` keyword se define kiya jata hai.

**Example:**
```javascript
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Amit")); // Hello, Amit!

// Function expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 3)); // 15

// Function with default parameters
function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(welcome());        // Welcome, Guest!
console.log(welcome("Priya")); // Welcome, Priya!
```

**Output:**
```
Hello, Amit!
15
Welcome, Guest!
Welcome, Priya!
```

---

## 5. Arrow function kya hota hai

**Question:** Arrow function kya hota hai? Example dikhaiye.

**Answer:** Arrow functions concise syntax provide karte hain aur `this` keyword ko lexical scope se inherit karte hain.

**Example:**
```javascript
// Traditional function
const add1 = function(a, b) {
    return a + b;
};

// Arrow function
const add2 = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const greet = () => "Hello!";

console.log(add2(5, 3));  // 8
console.log(square(4));   // 16
console.log(greet());     // Hello!

// Arrow function with this binding
const person = {
    name: "Raj",
    greet: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000);
    }
};

person.greet(); // Hello, Raj (after 1 second)
```

**Output:**
```
8
16
Hello!
Hello, Raj
```

---

## 6. Hoisting kya hota hai

**Question:** Hoisting kya hota hai? Yeh kis type ke variables par hota hai?

**Answer:** Hoisting ek JavaScript behavior hai jisme variables aur functions ko unke declaration se pehle access kiya ja sakta hai. Yeh `var` aur function declarations par hota hai.

**Example:**
```javascript
console.log(x); // undefined (hoisted but not initialized)
var x = 5;
console.log(x); // 5

greet(); // "Hello!" (function hoisted completely)
function greet() {
    console.log("Hello!");
}

// let aur const TDZ (Temporal Dead Zone) me hote hain
// console.log(y); // ❌ Error: Cannot access before initialization
let y = 10;
console.log(y); // 10
```

**Output:**
```
undefined
5
Hello!
10
```

---

## 7. JavaScript me closures kaise kaam karte hain

**Question:** JavaScript me closures kaise kaam karte hain?

**Answer:** Closures wo functions hote hain jo apne outer function ke variables ko access kar sakte hain even after the outer function has finished executing.

**Example:**
```javascript
function outer() {
    let counter = 0; // Private variable
    
    return function inner() {
        counter++;
        console.log(counter);
    };
}

const increment = outer();
increment(); // 1
increment(); // 2
increment(); // 3

// Another example
function createGreeting(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const sayHello = createGreeting("Hello");
const sayNamaste = createGreeting("Namaste");

sayHello("Amit");    // Hello, Amit!
sayNamaste("Priya"); // Namaste, Priya!
```

**Output:**
```
1
2
3
Hello, Amit!
Namaste, Priya!
```

---

## 8. Higher-order functions kya hote hain

**Question:** Higher-order functions kya hote hain? Example batao.

**Answer:** Higher-order functions wo functions hote hain jo dusre functions ko argument ke roop me lete hain ya return karte hain.

**Example:**
```javascript
// Function ko argument ke roop me lena
function calculate(operation, a, b) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(add, 5, 3));      // 8
console.log(calculate(multiply, 5, 3)); // 15

// Function return karna
function createMultiplier(factor) {
    return function(num) {
        return num * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Output:**
```
8
15
10
15
```

---

## 9. JavaScript me 'this' keyword ka kya role hai

**Question:** JavaScript me 'this' keyword ka kya role hai?

**Answer:** `this` keyword current execution context ko refer karta hai. Yeh function ke call hone ke tarike par depend karta hai.

**Example:**
```javascript
const person = {
    name: "Priya",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Hello, my name is Priya

// Global context
function showThis() {
    console.log(this); // Window object (browser me)
}

// Arrow function me this
const obj = {
    value: 10,
    normal: function() {
        console.log(this.value); // 10
    },
    arrow: () => {
        console.log(this.value); // undefined
    }
};

obj.normal(); // 10
obj.arrow();  // undefined
```

**Output:**
```
Hello, my name is Priya
10
undefined
```

---

## 10. JavaScript me callback function kya hai

**Question:** JavaScript me callback function kya hai?

**Answer:** Callback functions wo functions hote hain jo dusre function ko argument ke roop me pass kiye jate hain aur function ke complete hone par call kiye jate hain.

**Example:**
```javascript
function processData(data, callback) {
    console.log("Processing: " + data);
    callback(data);
}

function displayResult(result) {
    console.log("Result: " + result);
}

processData("Hello", displayResult);

// Array methods me callback
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num * 2);
});

// setTimeout with callback
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
```

**Output:**
```
Processing: Hello
Result: Hello
2
4
6
8
10
Executed after 2 seconds (after delay)
```

---

## 11. Promise kya hota hai

**Question:** Promise kya hota hai aur kaise kaam karta hai?

**Answer:** Promise ek object hai jo asynchronous operation ko represent karta hai. Yeh 'pending', 'fulfilled', ya 'rejected' state me ho sakta hai.

**Example:**
```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise completed"));

// Async/Await with Promise
async function fetchData() {
    try {
        const result = await myPromise;
        console.log("Async result:", result);
    } catch (error) {
        console.log("Async error:", error);
    }
}

fetchData();
```

**Output:**
```
Operation successful! (after 2 seconds)
Promise completed
Async result: Operation successful!
```

---

## 12. Asynchronous aur synchronous programming

**Question:** Asynchronous aur synchronous programming me kya difference hai?

**Answer:** Synchronous programming me operations ek ke baad ek execute hote hain, jabki asynchronous programming me operations parallel me chal sakte hain.

**Example:**
```javascript
// Synchronous
console.log("1. Start");
console.log("2. Middle");
console.log("3. End");

console.log("---");

// Asynchronous
console.log("1. Start");

setTimeout(() => {
    console.log("2. Timeout (after 2 seconds)");
}, 2000);

Promise.resolve().then(() => {
    console.log("3. Promise (microtask)");
});

console.log("4. End");
```

**Output:**
```
1. Start
2. Middle
3. End
---
1. Start
4. End
3. Promise (microtask)
2. Timeout (after 2 seconds)
```

---

## 13. Array methods map, filter, reduce

**Question:** JavaScript me array methods like map(), filter(), reduce() kaise kaam karte hain?

**Answer:** `map()` array ke har element par function apply karke naya array return karta hai, `filter()` condition ke basis par elements select karta hai, aur `reduce()` array ko single value me reduce karta hai.

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// map() - har element ko double karo
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter() - sirf even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens);

// reduce() - sum of all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// Chaining
const result = numbers
    .map(num => num * 2)      // [2, 4, 6, 8, 10]
    .filter(num => num > 5)   // [6, 8, 10]
    .reduce((sum, num) => sum + num, 0); // 24

console.log("Chained result:", result);
```

**Output:**
```
Doubled: [2, 4, 6, 8, 10]
Evens: [2, 4]
Sum: 15
Chained result: 24
```

---

## 14. JavaScript me event delegation

**Question:** JavaScript me event delegation kya hota hai?

**Answer:** Event delegation ek technique hai jisme parent element me event listener lagaya jata hai aur child elements ke events handle kiye jate hain.

**Example:**
```javascript
// HTML:
// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target.textContent);
        e.target.style.backgroundColor = "yellow";
    }
});

// Dynamically add item - event will still work!
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
document.getElementById("list").appendChild(newItem);
```

**Output:**
```
(When clicking Item 2)
Clicked: Item 2
```

**Benefits:**
- ✅ Kam memory use
- ✅ Dynamic elements par bhi kaam karta hai
- ✅ Better performance

---

## 15. DOM manipulation

**Question:** DOM manipulation kaise hoti hai? Example batao.

**Answer:** DOM manipulation se elements ko add, delete ya modify kiya jata hai.

**Example:**
```javascript
// Element select karna
const heading = document.getElementById("myHeading");
const para = document.querySelector(".my-para");

// Content change
heading.textContent = "New Heading";
heading.innerHTML = "<strong>Bold Heading</strong>";

// Style change
heading.style.color = "blue";
heading.style.fontSize = "24px";

// New element create
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div";
newDiv.className = "my-class";
document.body.appendChild(newDiv);

// Element remove
const oldElement = document.getElementById("remove-me");
if (oldElement) {
    oldElement.remove();
}

// Class manipulation
heading.classList.add("active");
heading.classList.remove("old-class");
heading.classList.toggle("highlight");

// Attribute manipulation
const link = document.getElementById("myLink");
link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");
```

**Output:**
```
(Visual changes in browser DOM)
```

---

## 16. JavaScript me classes

**Question:** JavaScript me classes kaise banate hain?

**Answer:** JavaScript me classes ko `class` keyword se define kiya jata hai.

**Example:**
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, I am ${this.name}, ${this.age} years old.`);
    }
    
    static species() {
        return "Homo sapiens";
    }
}

const person1 = new Person("Rahul", 25);
person1.greet();
console.log(Person.species());

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    
    study() {
        console.log(`${this.name} is in grade ${this.grade}.`);
    }
}

const student1 = new Student("Priya", 20, "A");
student1.greet();
student1.study();
```

**Output:**
```
Hello, I am Rahul, 25 years old.
Homo sapiens
Hello, I am Priya, 20 years old.
Priya is in grade A.
```

---

## 17. ES6 features

**Question:** ES6 features kaun se hain jo JavaScript me introduce hue hain?

**Answer:** ES6 (ES2015) me kai important features introduce hue.

**Example:**
```javascript
// 1. Arrow functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 2. Template literals
const name = "Amit";
console.log(`Hello, ${name}!`); // Hello, Amit!

// 3. Destructuring
const { x, y } = { x: 10, y: 20 };
console.log(x, y); // 10 20

// 4. Spread operator
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

// 5. Default parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!

// 6. Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// 7. Promises
const promise = Promise.resolve("Success");
promise.then(console.log); // Success
```

**Output:**
```
8
Hello, Amit!
10 20
[1, 2, 3, 4, 5]
Hello, Guest!
Success
```

**Key ES6 Features:**
- ✅ Arrow Functions
- ✅ Template Literals
- ✅ Destructuring
- ✅ Spread/Rest Operators
- ✅ Promises
- ✅ Classes
- ✅ Modules (import/export)
- ✅ let & const
- ✅ Default Parameters
- ✅ Async/Await (ES2017)

---

## 18. Template literals

**Question:** Template literals kya hote hain aur kaise use karte hain?

**Answer:** Template literals strings ko dynamically generate karne ka easy tarika hain. Backticks (\`) use karte hain.

**Example:**
```javascript
const name = "Rohan";
const age = 25;

// Old way
console.log("My name is " + name + " and I am " + age + " years old.");

// Template literal way
console.log(`My name is ${name} and I am ${age} years old.`);

// Multi-line strings
const message = `
    Hello,
    This is a multi-line
    string using template literals.
`;
console.log(message);

// Expressions in template literals
const a = 5, b = 10;
console.log(`Sum: ${a + b}, Product: ${a * b}`);

// Function calls
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(`Message: ${greet("Priya")}`);
```

**Output:**
```
My name is Rohan and I am 25 years old.
My name is Rohan and I am 25 years old.

    Hello,
    This is a multi-line
    string using template literals.

Sum: 15, Product: 50
Message: Hello, Priya!
```

---

## 19. Destructuring assignment

**Question:** Destructuring assignment kaise kaam karta hai?

**Answer:** Destructuring se arrays ya objects ke values ko easily variables me assign kiya ja sakta hai.

**Example:**
```javascript
// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first, second, third); // red green blue

// Skip elements
const [primary, , tertiary] = colors;
console.log(primary, tertiary); // red blue

// Object destructuring
const person = {
    name: "Amit",
    age: 30,
    city: "Mumbai"
};
const { name, age, city } = person;
console.log(name, age, city); // Amit 30 Mumbai

// Rename variables
const { name: fullName, age: years } = person;
console.log(fullName, years); // Amit 30

// Default values
const { country = "India" } = person;
console.log(country); // India

// Nested destructuring
const user = {
    id: 1,
    info: { email: "amit@example.com", phone: "9876543210" }
};
const { info: { email, phone } } = user;
console.log(email, phone);
```

**Output:**
```
red green blue
red blue
Amit 30 Mumbai
Amit 30
India
amit@example.com 9876543210
```

---

## 20. Spread aur rest operator

**Question:** Spread aur rest operator ka use kaise karte hain?

**Answer:** Spread operator (`...`) array ya object ko expand karta hai, rest operator function parameters ko gather karta hai.

**Example:**
```javascript
// Spread operator - arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Spread operator - objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Rest operator - function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Rest in destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3, 4, 5]

// Copy array
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]
```

**Output:**
```
[1, 2, 3, 4, 5, 6]
{ a: 1, b: 2, c: 3, d: 4 }
15
1 2 [3, 4, 5]
[1, 2, 3]
[1, 2, 3, 4]
```

---

## 21. Error handling

**Question:** JavaScript me error handling kaise hoti hai? Try-catch ka example dikhaiye.

**Answer:** Error handling me try-catch block ka use hota hai.

**Example:**
```javascript
// Basic try-catch
try {
    let result = 10 / 0;
    console.log(result); // Infinity
    
    // This will cause error
    let obj = null;
    console.log(obj.property);
} catch (error) {
    console.log("Error occurred:", error.message);
} finally {
    console.log("This always runs");
}

// Custom error throwing
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.log("Error:", error.message);
        return null;
    }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // null

// Async error handling
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error:", error.message);
    }
}
```

**Output:**
```
Infinity
Error occurred: Cannot read property 'property' of null
This always runs
5
Error: Cannot divide by zero
null
```

---

## 22. JavaScript me modules

**Question:** JavaScript me modules ka use kaise karte hain?

**Answer:** JavaScript modules se code ko separate files me organize kiya jata hai.

**Example:**
```javascript
// File: math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// Default export
export default function multiply(a, b) {
    return a * b;
}

// File: app.js
import multiply, { add, subtract, PI } from './math.js';

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(3, 4));  // 12
console.log(PI);              // 3.14159

// Import all
import * as math from './math.js';
console.log(math.add(2, 3));  // 5

// Named exports
export { add, subtract };

// Re-export
export { add } from './math.js';
```

**Output:**
```
8
6
12
3.14159
5
```

---

## 23. Event loop

**Question:** Event loop kya hota hai aur JavaScript me kaise kaam karta hai?

**Answer:** Event loop JavaScript ke asynchronous operations ko manage karta hai. Yeh call stack ko check karta hai aur callback queue se tasks ko execute karta hai.

**Example:**
```javascript
console.log("1. Start");

setTimeout(() => {
    console.log("2. Timeout (macro task)");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise (micro task)");
});

console.log("4. End");

// Detailed example
function step1() {
    console.log("Step 1: Synchronous");
}

function step2() {
    setTimeout(() => {
        console.log("Step 2: Macro task");
    }, 0);
}

function step3() {
    Promise.resolve().then(() => {
        console.log("Step 3: Micro task");
    });
}

step1();
step2();
step3();
console.log("Step 4: Synchronous");
```

**Output:**
```
1. Start
4. End
3. Promise (micro task)
2. Timeout (macro task)

Step 1: Synchronous
Step 4: Synchronous
Step 3: Micro task
Step 2: Macro task
```

**Event Loop Order:**
1. Call Stack (Synchronous code)
2. Microtask Queue (Promises)
3. Macrotask Queue (setTimeout, setInterval)

---

## 24. Memory leak

**Question:** JavaScript me memory leak kya hota hai aur kaise avoid karte hain?

**Answer:** Memory leak tab hota hai jab unnecessary objects ya variables memory me rehte hain.

**Example:**
```javascript
// ❌ Memory leak - global variable
function createLeak() {
    leak = "Global variable"; // var/let nahi use kiya
}
createLeak();
console.log(leak); // Accessible

// ✅ No leak - proper declaration
function noLeak() {
    let local = "Local variable";