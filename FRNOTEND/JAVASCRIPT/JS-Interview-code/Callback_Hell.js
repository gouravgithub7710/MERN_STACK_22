//callback_hell

// having problem in callback - 
// 1: callback-hell, 2: inversion of control


const cart = ["shops","pants","kurta"];

api.createOrder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummery(function(){

            api.updateWallet()
        })
    })
})

// this above is callback hell and in this we are invesrion of control our proceedToPayment to createOrder means we give control to createOrder.

// we can solve this problem using promise



g

function callback_hell(method, url, next) {
  const ob1 = new XMLHttpRequest();
  ob1.responseType = "json";
  ob1.open(method, url);
  ob1.send();
  ob1.onload = () => {
    // console.log(ob1);
    next(ob1.response);
  };
}

callback_hell("GET", "https://fakestoreapi.com/products", (d) => {
  // console.log(d);

  callback_hell("GET", `https://fakestoreapi.com//products/${d[0].id}`, (d) => {
    // console.log(d);
    callback_hell( "GET",`https://fakestoreapi.com//products/category/${d.category}`,(d) => {
        console.log(d);
       

      });
  });
});
