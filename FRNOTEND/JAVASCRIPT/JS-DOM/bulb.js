let body = document.body;

//body.style.color="blue";

let circle = document.createElement('div');

circle.style.width="400px";
circle.style.height="400px"
circle.style.backgroundColor="black";
circle.style.borderRadius="50%"
circle.style.border="2px solid blue";
circle.style.margin="0 auto"
body.append(circle)
console.log(circle)

let btn1 = document.createElement('button');
btn1.innerText="ON";
btn1.style.margin="3% 0 0 35%";
btn1.style.width="200px";
btn1.style.height="40px"
body.append(btn1);
console.log(btn1)

let btn = document.createElement('button');
btn.innerText="OFF";
btn.style.margin=" 0 0 35%";
btn.style.width="200px";
btn.style.height="40px"
body.append(btn);
console.log(btn)


btn1.addEventListener('click',()=>{
  btn1.style.backgroundColor="yellow";
    btn1.style.color="black";
  circle.style.backgroundColor="yellow";
  btn.style.backgroundColor="white";
    btn.style.color="black";
})
btn.addEventListener('click',()=>{
   btn.style.backgroundColor="black";
    btn.style.color="white";
  circle.style.backgroundColor="black";

  btn1.style.backgroundColor="white";
    btn1.style.color="black";

})






