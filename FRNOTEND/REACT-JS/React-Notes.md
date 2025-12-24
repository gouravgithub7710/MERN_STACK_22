# REACT
-- It is a javascrpt library

# React is a library of JavaScript

FramWork vs Library
Library → Hum install karte hain
 Example: React
 Hum decide karte hain kab aur kaise use karna hai.

Framework → Ready structure hota hai (download/use)
 Example: Angular
 Framework decide karta hai flow kaise chalega.

One-line yaad rakhne ke liye:
👉 Library = you control
👉 Framework = framework controls
👉 Library = import/export hum karte hain
👉 Framework = flow & structure framework handle karta hai


# REACT

- React is declerative aproach follow karte hai: Kaam karne per focus karte hai

- JSX :- combination of HTML and JS
            JSX- JavaScript XML
      - Bable :-
                Babel ek JavaScript transpiler hai
                Babel React me JSX aur modern JavaScript ko browser-compatible JavaScript me convert karta hai.


- component :- Resouable block of code 
                React component base architecture

- states :- 
                  kise bhi component ka data jo ui per dekahi de raha hai and kaise variable ke through aa raha hai 

- Virtual Dom :- ye actual Dom hai :- isse website reload hote hai 
                - Virtual Dom - actual dom ke carbon copy hota hai : isme puri website reload nhi hote hai 

- Reconsization - process of converting actual dom to virtual dom
- Routing - ek page se dusre page me jane ke liye

- open sourse and cross platform :-
                                       koi bhi use kar sakta hai and kahi bhi use kar sakte hai

-Facebook :- react ko baniya hai

-Hooks :- 
              Predefined fun and ye state or side effect ko manage karne ke liye hote hai 

- SPA 

## NPM vs NPX

# npx kya hota hai?

        npx = Node Package Executor

              Package ko run/execute karta hai
              Install karna zaroori nahi hota
              Temporary use ke liye best

# npm kya hota hai?

            npm = Node Package Manager 

                  Packages install karne ke kaam aata hai
                  Project me dependencies add karta hai               

## state :
        kise componenet ka current data (ui me esa data jo kaise variable ke through aa raha hai usse state bolte hai)

# stateLess: {By Default}
          kise componeent ke data ko change karte hai and vo ui per nhi dekhta hai ussse stateless bolte hai
            kyu ke hum js ke variable use karte hai to stateless hote hai. 

# stateActive :
           kise componeent ke data ko change karte hai and vo ui per change ho kar dekhta hai ussse stateActive bolte ahi 

## Hooks : 
          Pre-Defined funcion hota hai, which is used make stateless to stateactive
          hooks : asynchronous behave karte hai       
          Hooks fn ke ander likhe jate hai.

         ai 



# useState : 
            ye ek hook hai, isko install karna padta hai 
            ek time per ek state change karna hai to useState ka use karte hai  

  ########## const se bane varible bhi change ho jate hai kyu ke using this we can cange the property of the variable

# useEffect :
             Api fetch karne ke liye kaam aata hai
             
                  useEffect(() => {
                  // side effect code here
                  }, [dependencies]);

                  
             
            // 1st variety-> without dependency array
            //agar me useEffect hook ka use without dependency array ke karta hu to mera callback function jo use Effect ke andar likha us compoent ke 
            //har ek render me excute hoga.
            // useEffect(() => {
            //   console.log("hey I am Jagmohan ")
            // }) // kaise bhi state ko change karne per useeffect work karta hai ouput deta hai.


            // 2nd variety-> with dependency array which value is empty 
            // useEffect(() => {
            //   console.log("hey I am Jagmohan ")
            // },[])// ek hai chalta hai. state change per bhi nhi chalta hai.


            //3rd variety-> dependecny array has some values(states, variable);

            // useEffect(() => {
            //   console.log("hey I am Jagmohan ")
            // }, [data])  // only datat wali state change hone per hai chalega.


            // 4- cleaner component 
            useEffect(() => {
            // console.log("hey I am Jagmohan ")
            return (console.log("hey i will run when component is delete "))
            }, [data])  // ek baar chalta hai and component delete hone per bhi chalta hai 


# useParams() :
                        useParams() dynamic routing implement karne ke liye hota hai.
                  ye ek obj return karta hai isme url hote hai.

# Fragmanet : 
                  <> </>


# React event :
                  event is a action which is done by user like : click, hover, scroll, load, resize.                 
                  react ke ander event on se start hote hai [ onClick, onChange]


# Props : &  Props drelling :
          Props-> ek object hai and iske kuch Properties 
          Parent se child
            one comppents 
          top to bottom aate hai 

            Props Drilling :
                              Data pass karna multiple components ke through

            Props Lifting :
                              Child se parent me data bhejna



# Routing  :
            kind of process which allow to move one page to another page

            React router dom is a library we need to install for doing rounting
            1: install npm i react-router-dom
            2:   <BrowserRouter>
                  <App>
                  <BrowserRouter>
            3: come to App.js define the routes.
                  <Rotes> 
                  Routes path="/"  
                  element={yaha component mount hote hai}
                  </Routes>


## Dynamic routing:
                        👉 URL ke andar dynamic value (parameter) pass karna
                        aur us value ke base par different data / component render karna.


      using useParams() we implement dynamic routing 

Syntex:
            <Route path="/user/:id" element={<User />} />
                               |
                        : colon ke badd dynamic rounting ka parameter likha hai.


                        Dynamic routing allows passing parameters in the URL to render different content using a single component.

                        📌 Points to Remember
                        : use hota hai dynamic param ke liye
                        useParams() se value milti hai
                        Mostly detail pages ke liye use hota hai

 

## use Nevigate()
                  : ek page se dusre page me jane ke liye 
                  Next page per jana

                  navigate(-1) karne se previous page per chale jate hai