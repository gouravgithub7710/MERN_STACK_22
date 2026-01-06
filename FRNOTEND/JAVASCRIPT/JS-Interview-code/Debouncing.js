//Debouncing-----------------------------

// Debouncing means calling a function only after the user stops doing an action for some time.

// JavaScript me debouncing ka matlab hai function ko tab run karna jab kuch time tak event dobara trigger na ho.

// Debouncing ek technique hai jisme kisi function ko tabhi run karte hain jab user kuch time tak repeat action (click / type) band kar de.

// Simple example (real life)

// Search box me user fast-fast type karta hai → debouncing wait karta hai → jab typing rukti hai tab API call hoti hai.

function debounce(func, delay) {
    let timeOut;
return function (...args) {
 clearTimeout(timeOut)
   timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };

}

const myfunction = function (event) {
  const query = event.target.value;
  console.log(query);

  fetch(`https://api.example.com/search?query=${query}`) // network tab
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

};



let search = document.getElementById("search");

search.addEventListener("input", debounce(myfunction, 500));
