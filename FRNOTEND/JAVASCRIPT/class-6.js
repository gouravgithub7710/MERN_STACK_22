// JS-Loops Q

// Palindrome

let num = 1221;
let result = 0;
let cpyNum = num;
let reminder=0;

while(num>0){
  reminder = num%10;
result = result*10+reminder;
num = Math.floor(num/10);
}

if(cpyNum == result)
{
  console.log(`Num is ${cpyNum} is Palindrome`); 
}else{
  console.log(`Num is ${cpyNum} is not Palindrome`); 
}

