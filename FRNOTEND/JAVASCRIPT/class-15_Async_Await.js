//Async Await

//Async = is used in fn for making asynchronous 

//Await = ek keyword hota hai jo async fn ke ander lagiya jata hai 
        // await keyword akele use nhi kar sakte hai



//Async fn ka output dekh na hai to await ka use karna hai padega fn ke ander



//Async-Await is use to perform sideffect and also solve the chaining problem


async function FetchProducts(url) {
    const res1 = await fetch(url);
    const ans1 = await res1.json();
     console.log("first api calling ", ans1)
    
     const res2 = await fetch(`${url}/category/${ans1[0].category}`);
    const ans2 = await res2.json();
     //console.log("second api calling ", ans2)

    const res3 = await fetch(`${url}/${ans2[0].id}`);
    const ans3 = await res3.json();
    // console.log("third api calling ", ans3)
    const res4 = await fetch(`${url}/category/${ans3.category}`);
    const ans4 = await res4.json();
    //console.log("fourth api calling ", ans4)
}

FetchProducts("https://fakestoreapi.com/products");