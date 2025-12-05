// JS-Loops Q

// � EVEN / ODD

//1. Write a program to check whether a number is Even or Odd.----------------------------------

// let num = 35;

// if(num%2==0){
//   console.log(`Num is even : ${num}`); 
// }else{
//   console.log(`Num is odd : ${num}`); 
// }


//2. Given an integer, check if it is divisible by 5 and 11.-----------------------------------
 
// let gnum = 55;

// if(gnum%5==0 || gnum%11==0 ){
//   console.log(`${gnum} is divisible by 5 and 11.`); 
// }else{
//     console.log(`${gnum} is not divisible by 5 and 11.`); 
// }

//3. Check whether a number is positive, negative, or zero.------------------------------------
// let num=1;

//   if (num == 0){
//     console.log("Num is Zero");
//   }else if(num<0){
//    console.log("Num is Negative");
//   }else{
//     console.log("Num is Positive");
//   }

//4. Check if a number is divisible by 2, 3, and 5 at the same time.

// let gnum = 30;

// if(gnum%2==0 || gnum%3==0 ||gnum%5==0){
//   console.log(`${gnum} is divisible.`); 
// }else{
//     console.log(`${gnum} is not divisible.`); 
// }

//🔹 REVERSING & PALINDROME

//5. Reverse a number without using built-in functions
// let num = 12345;
// let reverse = 0;
// let reminder=0;

// while(num>0){
//   reminder = num%10;
// reverse = reverse*10+reminder;
// num = Math.floor(num/10);
// }
// console.log(`Reverse num is ${reverse}`); 


//6. Check whether a given number is a palindrome.
// let num = 1221;
// let result = 0;
// let cpyNum = num;
// let reminder=0;

// while(num>0){
//   reminder = num%10;
// result = result*10+reminder;
// num = Math.floor(num/10);
// }

// if(cpyNum == result)
// {
//   console.log(`Num is ${cpyNum} is Palindrome`); 
// }else{
//   console.log(`Num is ${cpyNum} is not Palindrome`); 
// }



//7. Check whether the first and last digit of a number is equal.

// let num = 1231;
// let lastdigit = num%10;
// let firstdigit;
// let rem;
//  while(num>9)
//  {
//     num = Math.floor(num/10);
//  }
//   firstdigit = num%10;
//     if(firstdigit==lastdigit){
//       console.log("Yes Equal");
//     }else{
//         console.log("Not Equal");
//     }



//8. Count how many digits in a number

    // let num = 123456;
    // let reminder;
    // let count = 0;

    // while(num>0){
    //   reminder = num%10;
    //   count++;
    //   num = Math.floor(num/10);
    // }
    // console.log("Total num count is :"+count);
    

//9. Check whether the reverse of a number is divisible by 3.

// let num = 12;

// let rev = 0;
// let reminder;
// while(num>0)
// {
//   reminder = num%10;
//   rev=rev*10+reminder;
//   num = Math.floor(num/10);
// }

// console.log("Reverse Num is :"+rev);

// if(rev%3==0){
//   console.log(`Yes, ${rev} is Divisible by 3`);
// } else{
//   console.log(`Yes, ${rev} is Not Divisible by 3`);
// }


//🔹 DIGIT OPERATIONS

//10. Find the sum of digits of a number.

    // let num = 12345;
    // let reminder;
    // let sum = 0;

    // while(num>0){
    //   reminder = num%10;
    //   sum=sum+reminder;
    //   num = Math.floor(num/10);
    // }
    // console.log("Total num sum is :"+sum);


 // 11. Find the product of digits of a number.

    //  let num = 12345;
    // let reminder;
    // let mul=1;

    // while(num>0){
    //   reminder = num%10;
    //   mul=mul*reminder;
    //   num = Math.floor(num/10);
    // }
    // console.log("Multiple is :"+mul);


//12. Find the largest digit in a number

    // let num = 129345;
    // let reminder;
    // let largest = 0;

    // while(num>0){
    //   reminder = num%10;
    //   if(largest<reminder){
    //     largest=reminder;
    //   }
    //   num = Math.floor(num/10);
    // }
    // console.log("Largest num is :"+largest);


//13. Find the smallest digit in a number.

    // let num = 943129345;
    // let reminder;
    // let smallest=1000000000000;

    // while(num>0){
    //   reminder = num%10;
    //   if(smallest>reminder){
    //     smallest=reminder;
    //   }
    //   num = Math.floor(num/10);
    // }
    // console.log("Smallest num is :"+smallest);



    //14. Print the frequency of each digit in a number.

    //15. Check if digits of the number are strictly increasing (e.g., 1234).

    // let num = 11234;
    // let str = num.toString();
    // let isIncresing = true;
    // for (let i = 0; i < str.length-1; i++) {
    //   if(str.charAt(i)>=str.charAt(i+1))
    //     {
    //       isIncresing = false;
    //       break;
    //     }
    // }
    // console.log(isIncresing);
    

//🔹 FACTORIAL & STRONG NUMBERS

//16. Find the factorial of a number.

// let num = 5;
// let fact =1;
// while(num>0){
//   fact = fact*num;
//   num = num-1;
// }
// console.log("Factorial is :"+fact);

//17. Check if a number is a Strong number
//(145 → 1! + 4! + 5! = 145).

// let num = 145;
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//   let digit = temp % 10;

//   // factorial of digit
//   let fact = 1;
//   for (let i = 1; i <= digit; i++) {
//     fact = fact * i;
//   }

//   sum = sum + fact;
//   temp = Math.floor(temp / 10);
// }

// if(sum == num){
//     console.log(`${num} number is a Strong number`);
// }else{
//      console.log(`${num} number is not a Strong number`);
// }


//18. Sum of factorial of digits of a number.
// let num = 145;
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//   let digit = temp % 10;

//   // factorial of digit
//   let fact = 1;
//   for (let i = 1; i <= digit; i++) {
//     fact = fact * i;
//   }

//   sum = sum + fact;
//   temp = Math.floor(temp / 10);
// }
// console.log("Sum of factorial of digits is:", sum);


//19. Count how many Strong numbers are present between two limits

// let firstnum = 1;
// let lastnum = 1000;
// let count =0;
// for(let num = firstnum; num <=lastnum; num++)
// {
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//   let digit = temp % 10;

//   // factorial of digit
//   let fact = 1;
//   for (let i = 1; i <= digit; i++) {
//     fact = fact * i;
//   }

//   sum = sum + fact;
//   temp = Math.floor(temp / 10);
// }

// if(sum == num){
// console.log(num + " is a Strong Number");
//     count++;
// }
// }
// console.log("Strong numbers are present between two limits count is:"+count);



//🔹 PRIME & COMPOSITE


//20. Check whether a number is prime
// let num = 57;
// let isprime = true;

// for(let i=2;i<num;i++)
// {
//     if(num%i==0){
//         isprime = false;
//         break;
//     }
// }
// if (isprime) {
//   console.log(num + " is a Prime Number");
// } else {
//   console.log(num + " is Not a Prime Number");
// }


//21. Print all prime numbers in a given range.
// let num = 10;

// for (let i = 1; i < num; i++) {

//   if (i <= 1) continue; // 1 prime nahi hota

//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);  
//   }
// }

 
 //22. Count digits in a number that are prime digits (2,3,5,7).

// let num = 105273;
// let count = 0;

// while (num > 0) {
//   let digit = num % 10;

//   // check prime digit
//   if (digit == 2 || digit == 3 || digit == 5 || digit == 7) {
//     count++;
//   }
//   num = Math.floor(num / 10);
// }
// console.log("Count of prime digits is: " + count);



//33. Generate Fibonacci series up to n terms
 
// for(let num=0;num<=20;num++)
// {
// let fibonum=0;
// function fibo(num){
//    if (num <= 1) {
//     return num;
//   }
//   return fibonum=fibo(num-1)+fibo(num-2);
// }
// let ans = fibo(num);
// console.log(ans);
// }


//34. Check whether a number belongs to Fibonacci series.
// let checknum = 6;
// for(let num=0;num<=20;num++)
// {
// let fibonum=0;
// function fibo(num){
//    if (num <= 1) {
//     return num;
//   }
//   return fibonum=fibo(num-1)+fibo(num-2);
// }
// let ans = fibo(num);
//  if(ans == checknum)
//  {
//     console.log(`${ans} is belongs to fibo series`); 
//  }else{
//     console.log(`${ans} is not belongs to fibo series`); 
//  }
// }

//35. Print sum of first n natural numbers without loop.

// function sumNatural(n) {
//   if (n == 0) return 0;      
//   return n + sumNatural(n - 1); 
// }
// let n = 10;
// console.log("Sum of first " + n + " natural numbers is: " + sumNatural(n));


// 36. Print sum of first n odd numbers.
// let n = 10; 
// let sum = 0;

// let odd = 1;

// for (let i = 1; i <= n; i++) {
//   console.log("Odd number is: " + odd);
//   sum += odd;
//   odd += 2; // next odd number
// }
// console.log("Sum of first " + n + " odd numbers is: " + sum);



// 37. Print sum of first n even numbers.

// let n = 10; 
// let sum = 0;

// let even = 2;

// for (let i = 1; i <= n; i++) {
//   console.log("even number is: " + even);
//   sum += even;
//   even += 2; // next even number
// }
// console.log("Sum of first " + n + " even numbers is: " + sum);



//38. Print sum of squares of digits of number.

// let num = 123;
// let sum = 0;
// let temp = num;

// while (temp > 0) {
//   let digit = temp % 10;  
//   sum = sum + (digit * digit); 
//   temp = Math.floor(temp / 10); 
// }
// console.log("Sum of squares of digits of " + num + " is: " + sum);


// � COUNTING & CALCULATIONS
// 39. Count number of even digits in a number
 
// let num = 123456789;
// let digit=0;
// let count=0;
// while(num>0)
// {
//     digit=num%10;

//     if(digit%2==0){
//         count++;
//     }
//     num=Math.floor(num/10);
// }
// console.log(" even digits in a number count is:"+count);


//40. Count number of odd digits in a number
// let num = 123456789;
// let digit=0;
// let count=0;
// while(num>0)
// {
//     digit=num%10;

//     if(digit%2!=0){
//         count++;
//     }
//     num=Math.floor(num/10);
// }
// console.log(" Odd digits in a number count is:"+count);



//41. Count how many zeros are present in a number
   
// let num = 1020304050;
// let digit=0;
// let count=0;
// while(num>0){
// digit = num%10;
//     if(digit==0)
//     {
//         count++;
//     }
//     num=Math.floor(num/10);
// }
// console.log("Count of Zeroes is :"+count);


//42. Find difference between sum of even digits and sum of odd digits.

// let num = 123456789;
// let digit=0;
// let evenSum=0;
// let oddSum=0;
// let difference=0;
// while(num>0)
// {
//     digit=num%10;

//     if(digit%2==0){
//        evenSum=evenSum+digit;
//     }else{
//         oddSum=oddSum+digit;
//     }
//     num=Math.floor(num/10);
// }

// difference=evenSum-oddSum;

// console.log("difference between sum of even digits and sum of odd digits is:"+difference);






// function callback(x,y){
//     return x+y;
// }

// function higheror(sum){
//   let x =5;
//   let y=10;

//   let add = sum(x,y);
//   console.log(add);
// }


// higheror(callback);



//funciton hosting ---------------
// greet();  // This works

// function greet() {
//   console.log("Hello Hoisting!");
// }


// higherorder and cllback function--------------

// function higherOrder(fn) {
 
//   let x = 5;
//   let y = 10;
//   let ans = fn(x,y);
//   console.log(ans);
  
// }

// function sayHello(x,y) {
    
//   console.log("Hello from Callback");
//   return x+y;
// }

// higherOrder(sayHello);


// console.log(x)
// function x(){
//     console.log("hii");
// }

// let x =(a,b)=>  {
//     console.log(a)
//     console.log(b)
// };
// let ans =x(2,4);
// console.log(ans)

// console.log(x);
// var x=5;


// console.log(x)
// function x(){
//     console.log("fn")
// }

// console.log(x())
// let x = function f(){
//     console.log("hii")
// }

// greet();   // Works

// function greet() {
//   console.log("Hello Function Hoisting");
// }


// hello();   // ❌ TypeError
// var hello = function() {
//   console.log("Hi");
// };

// hello();   // ❌ refrece error 
// let hello = function() {
//   console.log("Hi");
// };

// console.log(hello());   // ❌ refrence error
// const hello = function() {
//   console.log("Hi");
// };



// test();   // ❌ ReferenceError
// let test = () => console.log("test");


  var num = 10;

// function display() {
//   console.log(num);
// //   var num = 20;
// }

// display();

