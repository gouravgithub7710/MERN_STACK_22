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


// Palindrome----------------------------------------------------------------

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


//Reverse Number------------------------------------------------------------------

// let num = 12345;
// let reverse = 0;
// let reminder=0;

// while(num>0){
//   reminder = num%10;
// reverse = reverse*10+reminder;
// num = Math.floor(num/10);
// }
// console.log(`Reverse num is ${reverse}`); 

