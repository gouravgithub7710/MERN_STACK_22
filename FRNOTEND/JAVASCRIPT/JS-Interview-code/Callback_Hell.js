//callback_hell

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
