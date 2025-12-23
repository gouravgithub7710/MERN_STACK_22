// // This keyword: current envoking object ko point karta hai 

// 1:clg(this) // by default this keyword point window object
// 2: funciton data(){ clg(this);// window }  data();
// 3: arrow fn ke time per this keyword work nhi karta hai and use karete hai to undefined deta hai 
// 4: Agar apan object ke and noraml function banate hai and fucntion ke ander clg(this) ya this.key_name karte hai to us case me this keyword obj ko follow karege jiske ander vo bana ho 
//  ex------
// A) const cooler ={ id:"423",color:"Indus", on:fucntion(){ clg(this)//cooler}}
// B) const cooler ={ id:"423",color:"Indus", on:()=>{ clg(this)//window     clg(this.id)//undefined}}

// {It has different values depending on where it is used:
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.}


// // new keyword and factory funciton or constructor 

// kaise fn ko call karne time per new likh dete hai vaha (empty object) ko point karega and isko apan factory funciton or constructor 

//   funciton data(){ clg(this);// empty object }  new data(); factory funciton or constructor fucntion ban jata hai new lagane se 


