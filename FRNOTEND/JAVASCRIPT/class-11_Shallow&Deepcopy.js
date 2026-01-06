// for object
//[1]Shallow copy -- orignal  ----------------------------------


// let ob1={
//   id:"100"
// }

// 1st case :  = using --------------

// const ob2 = ob1;
//  ob1.id = "123";// change done 
//  ob2.id = "321";// change done -now 321 value in ob1 nd ob2
// console.log(ob1.id);//321
// console.log(ob2.id);//321
// obj1 and ob2 dono ek hai object ko point kar raha hai memory me 
// obj2 se ob1 ke key ko change kar sakte hai and dono me reflect hoge 



//2nd case: using Obj.assign()------------

// let ob1={
//   id:"100"
// }
// console.log(ob1.id);
// const ob2=Object.assign(ob1);
//  ob1.id = "123";
//  ob2.id = "321";
// console.log(ob1.id);//321
// console.log(ob2.id);//321


// eual and assign dono me case hai
// nasted me work karta hai 


//3rd case: using ...Spread operator-----------------
// const ob2 = {...ob1}

// let ob1={
//   id:"100",
//   on:{name:"Gourav"}
// }
//  const ob2 = {...ob1}


//Spread operator shallow copy banata hai, jisme outer properties alag copy hoti hain, lekin nested objects ka reference same hota hai.

//  outer ke case me jisse change karte hai ussse me change hota hai other wale me nhi dekhte hai 
// nasted ke case me inner obj ka adress same copy ho jata hai and outer object ka adress change ho jaita hai 

// is liye outer object case me jisse change karte hai ussse me change hota hai other wale me nhi dekhte hai and inner object case me change hoge 






//[2]deep copy---------------------------------------------------

// const ob1={
//   id:"101",
//   name1:"GT",
//   info:{
//       name:"DRF",
//       revenue:"1cr"
//   },
// adress:"c21"
// }


//1st way: json.parse(json.stringfy())

// const ob2= JSON.parse(JSON.stringify(ob1));

// deep copy me outer object and inner object dono ke adress alag hota hai 
//so kaise ek ke value change karte hai to dusre me reflect nhi hote hai 

// console.log(ob1.id)//101
// console.log(ob2.id)//101

// ob1.id = "1000";
// ob2.id = "2000";

// console.log(ob1.id)//1000
// console.log(ob2.id)//2000

// ob2.info.name="DR"

// console.log(ob2.info.name)
// console.log(ob1.info.name)


// json.stringify() se deep cpy me problem ye hai ke ye - function accept ko copy nhi karta hai agar hamare obj ke function as a vlaue hai to 


var ob1={
  id:"1000",
  address:function(){console.log("hii")}
}


let ob2 = JSON.parse(JSON.stringify(ob1))

console.log(ob2) //id:"1000" yaha sath me function nhi aaya means vo copy nhi hua hai yahi stringify nhi hua hai deep copy ke case me.


// to other deep cpy ke solution hai :

// obj ke uper itrate karo obj.keys ka arry ban jai ga. fir array ko itrate kar ke new obj me store karege deep copy ke liye.


//2nd way: Structuredclone()
//3rd way: lodesh  -
                      //ek library hai jiske ek clonedeep() method hota hai jo ke deep copy karne ke liye use hota hai 

