//1 : get the element from the html code
//2 : create the element [createElement()]
//3 : give the content to the created element using [innerText, textcontent]
//4 : append the created element so that we can see on the UI [append() or appendChild()]


let bo = document.body;  
let btn = document.createElement("button");

btn.setAttribute('id','btnID');
btn.innerText="Click Me";

bo.appendChild(btn);

btn.addEventListener('click',()=>{
  btn.innerText = "Clicked";
  btn.style.backgroundColor="black"
  btn.style.color="white";
 console.log("Button clicked");
 

 //when click add paragraph
let p = document.createElement("p");
 p.innerText="Hii Button is Clicked";
 bo.appendChild(p);
 

 // remove btn create

  let removebtn = document.createElement('button');
  removebtn.innerText="Remove";
  

 // when click removebtn then remove paragraph
  removebtn.addEventListener('click',()=>{
    p.innerHTML=" ";
    btn.innerText="Click Me"
  })


  p.appendChild(removebtn);
})





