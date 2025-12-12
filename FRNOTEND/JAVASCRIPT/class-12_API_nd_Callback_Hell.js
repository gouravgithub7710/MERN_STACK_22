//BOM: Browser objce model -> Window object ->DOM(document object model)

//API Calling : Application programing interface

//First way of calling the API
// const obj = new XMLHttpRequest();
// obj.response = "JSON";
// obj.open("GET","https://jsonplaceholder.typicode.com")
// obj.send();

// console.log(obj);

//Secong way of calling the API

// function ApiCalling(method,url){
// const ob1= new XMLHttpRequest();
// ob1.response = "JSON";
// ob1.open(method,url);
// ob1.send();
// ob1.onload=()=>{
//   console.log(ob1);
// }
//  //console.log(ob1);
// }

//  ApiCalling("GET","https://jsonplaceholder.typicode.com");

//response and response type me difference hai output ke time := ye hota hai ke responsetype me null aata hai and response me nhi aata hai

//XML HTTP :

//https :where s is ssl certificate [secqure socket layer]

//API CAlling by XHR
//const ob1= new XMLHTTPRequest();
//ob1.responseType = "JSON";
//ob1.open("GET",XYZURL);
//ob1.send();

// function ApiCalling(method,url){
// const ob1= new XMLHttpRequest();
// ob1.response = "JSON";
// ob1.open(method,url);
// ob1.send();
// console.log(ob1);
// }

// ApiCalling("GET","https://jsonplaceholder.typicode.com");

// ApiCalling("POST",URL2);

//browser se ek hai request kar sakte hai vo hai - GET
//GET : read karne ke liye
//POST : dal rahe hai
//DElETE : delete karne ke liye
//PUT : 100% update
//PATCH : 30% Update - partical data update

//call back hell :- paramed of dom
// isse ko solve karne ke liye promise aya tha js me

// first way of calling the api
/*const obj = new XMLHttpRequest();
obj.response = "json";
obj.open("GET", "https://jsonplaceholder.typicode.com/posts");
obj.send();
console.log(obj);
console.log("api")*/

// function apiCalling(method, url) {
//     const obj = new XMLHttpRequest();
//     // obj.response = "json";
//     obj.responseType = "json";
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);

//     }
//     console.log(obj);
//     // console.log(obj.response);
//     console.log("api")
//     return obj.response;
// }
// let ans=apiCalling("GET", "https://jsonplaceholder.typicode.com/posts");
// console.log(ans)


// 2nd way
// function apiCalling(method, url, printApiData) {
//     const obj = new XMLHttpRequest();
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);
//         printApiData(obj.response)

//     }

// }
// apiCalling("GET", "https://jsonplaceholder.typicode.com/posts/1", (data) => {
//     console.log("data of api", data)
// });

// callback hell-> when you make a multiple function call inside a multiple callback function i.e callback hell.
// it is also known as pyramid of Doom.
// due to this code become difficult to read or understand.

// function NarakKaDwar(method, url, printApiData) {
//   const obj = new XMLHttpRequest();
//   obj.responseType = "json";
//   obj.open(method, url);
//   obj.send();
//   obj.addEventListener("load", () => {
//     printApiData(obj.response);
//   });
// }



// NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//     console.log("Ye meri all posts hai", data);

//     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//         (data) => {
//             console.log("Ye meri Single Post hai", data)
//             NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                 (data) => {
//                     console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                         (data) => {
//                             console.log("Ye meri Single Post ke andar ek comments hai", data)
//                             NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//                                 console.log("Ye meri all posts hai", data);

//                                 NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//                                     (data) => {
//                                         console.log("Ye meri Single Post hai", data)
//                                         NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                                             (data) => {
//                                                 console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                                                 NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                                                     (data) => {
//                                                         console.log("Ye meri Single Post ke andar ek comments hai", data)
//                                                         NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//                                                             console.log("Ye meri all posts hai", data);

//                                                             NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//                                                                 (data) => {
//                                                                     console.log("Ye meri Single Post hai", data)
//                                                                     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                                                                         (data) => {
//                                                                             console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                                                                             NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                                                                                 (data) => {
//                                                                                     console.log("Ye meri Single Post ke andar ek comments hai", data)

//                                                                                 });
//                                                                         });
//                                                                 });

//                                                         });
//                                                     });
//                                             });
//                                     });

//                             });
//                         });
//                 });
//         });

// });




//https://official-joke-api.appspot.com/random_joke

function fetchApi(method,url,printApiData){
const data = new XMLHttpRequest();
data.responseType = "json";
data.open(method,url);
data.send();
data.addEventListener("load",()=>{
printApiData(data.response);
});

}

fetchApi("GET",'https://https://jsonplaceholder.typicode.com/comments-joke-api.appspot.com/random_joke',
   (data)=>{console.log(data)
   });

