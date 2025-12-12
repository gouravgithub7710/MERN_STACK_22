//Promise:
          // is solution for the Callback hell


       //defination 
       //promise:- is a object in js 
                  // which is give assurance/grauntee
                  //i will give you somtheing 

                  //isme 3 stage hote hote 
                      //1:pending (by defalutt stage)
                      //2: resolve (fullfiled)
                      //3: reject  (error)

 //syntex:  //const p = new promise((resolve,reject)=>{LOGIC});

                  //first parameter is always  RESOLVE then REJECT

                  //where RESOLVE for then()
                  //and REJECT for Cath()

//const p = new promise((res,rej)=>{
//     res("Promise done")
//     rej("Reject")
//});

// Output: p.then((res)=>{ clg(res)}) 
// p.then((rej)=>{ clg(rej)})


//example:
//1]
// const p = new Promise((a,b)=>{
// });
// console.log(p); //Promise {<pending>}


//2]
// const p = new Promise((res,rej)=>{
//     res("Promise fullfiled");
//     rej("promise reject")
// });
// console.log(p); //Promise {<fulfilled>: 'Promise fullfiled'}

//print res and rej value in output

// when resolve

// const p = new Promise((res,rej)=>{
//     res("Promise fullfiled");
//     rej("promise reject")
// });
// p.then((op)=>{
//     console.log(op)
// }).catch((err)=>{
//     console.log(err)
// })  
// //output: Promise fullfiled

//when reject 

// const p = new Promise((res,rej)=>{
//     rej("promise reject");
//     res("Promise fullfiled");
// });
// p.then((op)=>{
//     console.log(op)
// }).catch((err)=>{
//     console.log(err)
// })  
// output:promise reject


// API CALLING USING FETCH----------------------------------

// fetch method chrome ke hai 

// Fetch = Promise

// const api = fetch('https://fakestoreapi.com/products/')
// //console.log(api)//Promise {<pending>}
// api.then((op)=>{
//     console.log(op)
// }).catch((err)=>{
//     console.log(err)
// })  


//Now converting body data into JSON and print

// fetch('https://fakestoreapi.com/products/').then((op)=>{
//    op.json().then((op)=>{console.log(op)}).catch((err)=>{
//     console.log(err)
// }) 
// }).catch((err)=>{
//     console.log(err)
// })  



//Calling API Using XHR
//function FetchProducts(method, url, callback) {
//   const data = new XMLHttpRequest();
//   data.responseType = "json";
//   data.open(method, url);
//   data.send();
//   data.onload = () => {
//     callback(data.response);

// };
//}

//Calling APi using fetch
function FetchProducts(url) {
    const res = fetch(url);
    return res;
}

// console.log(p)
// p.then((data) => {
//     data.json().then((data1) => {
//         console.log("firstApi calling", data1);

//         FetchProducts(`https://fakestoreapi.com/products/category/${data1[0].category}`).then((data1) => {
//             data1.json().then((data2) => {
//                 console.log("second Api calling", data2);
//                 FetchProducts(`https://fakestoreapi.com/products/${data2[0].id}/`).then((data3) => {
//                     data3.json().then((data3) => {
//                         console.log("third Api calling", data3);
//                         FetchProducts(`https://fakestoreapi.com/products/category/${data3.category}`).then((data3) => {
//                             data3.json().then((data3) => {
//                                 console.log("fourth Api calling", data3);

//                             }).catch(data => console.log("forth api me error", data))
//                         })
//                     }).catch(data => console.log("third api me error", data))
//                 })


//             }).catch(data => console.log("second api me error", data))
//         })

//     }).catch(data => console.log(data))
// }).catch(err => console.log("first api me error", err))

// const p = FetchProducts("https://fakestoreapi.com/products");

// p.then(d => d.json())
//     .then(d1 => (console.log("firstApi calling", d1), FetchProducts(`https://fakestoreapi.com/products/category/${d1[0].category}`)))
//     .then(r => r.json())
//     .then(d2 => (console.log("second Api calling", d2), FetchProducts(`https://fakestoreapi.com/products/${d2[0].id}/`)))
//     .then(r => r.json())
//     .then(d3 => (console.log("third Api calling", d3), FetchProducts(`https://fakestoreapi.com/products/category/${d3.category}`)))
//     .then(r => r.json())
//     .then(d4 => console.log("fourth Api calling", d4))
//     .catch(err => console.log("error", err));

// p.then(d => d.json()).then(d1 => (console.log("firstApi calling", d1), FetchProducts(`https://fakestoreapi.com/products/category/${d1[0].category}`))).then(r => r.json()).then(d2 => (console.log("second Api calling", d2), FetchProducts(`https://fakestoreapi.com/products/${d2[0].id}/`))).then(r => r.json()).then(d3 => (console.log("third Api calling", d3), FetchProducts(`https://fakestoreapi.com/products/category/${d3.category}`))).then(r => r.json()).then(d4 => console.log("fourth Api calling", d4)).catch(err => console.log("error", err));




// fetch me api fetch me chaning ke problem hote hai is liye hum issse use nhi kar te hai 