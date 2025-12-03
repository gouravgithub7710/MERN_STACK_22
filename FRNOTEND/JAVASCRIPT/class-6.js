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




//🔹 PRIME & COMPOSITE
//20. Check whether a number is prime

// let num = 57;

// if(num<2){
//     console.log("Num is Less than 1, Enter Greater than 1 num");
// }

// for(let i=2;i<num;i++)
// {
//     if(num%i==0){
//         console.log(`{num} is not a prime num`);   
//         break;
//     }else{
//         console.log(`{num} is a prime num`);  
//         break;
//     }
// }


//21. Print all prime numbers in a given range.

// let num = 30;

// for(let i=2;i<num;i++){

// for(let j=2;j<i;j++)
// {
//     if(i%j==0){
//         break;
//     }else{
//         console.log(i);  
//         break;
//     }
// }
// }

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




