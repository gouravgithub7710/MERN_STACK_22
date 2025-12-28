# REACT
-- It is a javascrpt library

# How React works:
                  index.html → main.jsx / index.js → App.jsx → Components → UI
                       |                |                |
                     SINGLE           ENTRY             ROOT      
                   HTML FILE          FILE            COMPONENT

                  
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

# Fragmanet : 
             <> </>

# NPM vs NPX

## npx kya hota hai?

        npx = Node Package Executor

              Package ko run/execute karta hai
              Install karna zaroori nahi hota
              Temporary use ke liye best

## npm kya hota hai?

            npm = Node Package Manager 

                  Packages install karne ke kaam aata hai
                  Project me dependencies add karta hai               

# state :
        kise componenet ka current data (ui me esa data jo kaise variable ke through aa raha hai usse state bolte hai)

## stateLess: {By Default}
          kise componeent ke data ko change karte hai and vo ui per nhi dekhta hai ussse stateless bolte hai
            kyu ke hum js ke variable use karte hai to stateless hote hai. 

## stateActive :
           kise componeent ke data ko change karte hai and vo ui per change ho kar dekhta hai ussse stateActive bolte ahi 

# Hooks : 
          Pre-Defined funcion hota hai, which is used make stateless to stateactive
          hooks : asynchronous behave karte hai       
          Hooks fn ke ander likhe jate hai.

         ai 



## useState : 
            ye ek hook hai, isko install karna padta hai 
            ek time per ek state change karna hai to useState ka use karte hai  

            setData isme ek fn hota hai and isme ye asynchronous hota hai and ye webapi me jata hai.

  ########## 
      Const se bane variable ka reference change nahi hota,
      lekin agar wo object ya array ho to uski properties change ki ja sakti hain.

      Agar thoda aur simple chahiye:

      Const object ke andar ki value change ho sakti hai,
      lekin pura object replace nahi kar sakte.

## useEffect :
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


## useParams() :
                        useParams() dynamic routing implement karne ke liye hota hai.
                  ye ek obj return karta hai isme url hote hai.

## useContext() :
                  React me Context API ka use hota hai data ko bina props drilling ke multiple components tak bhejne ke liye.

                 ye props driling or lifting ke problem solve karta hai.

                  suitable for small project

           - Context API ke 3 main parts

                  1: createContext() → context banana
                        Step 1: Context banao    [UserContext.js]

                                    import { createContext } from "react";
                                    const UserContext = createContext();
                                    export default UserContext;



                  2: Provider → data supply karna
                        Step 2: Provider se data bhejo  [App.js]

                                          import UserContext from "./UserContext";
                                          import Home from "./Home";

                                          function App() {
                                          const user = "Gourav";

                                          return (
                                          <UserContext.Provider value={user}>
                                                <Home />
                                          </UserContext.Provider>
                                          );
                                          }

                                          export default App;
                  

                  3: useContext() → data use karna
                        Step 3: useContext se data lo   [Home.js]

                                          import { useContext } from "react";
                                          import UserContext from "./UserContext";

                                          function Home() {
                                          const user = useContext(UserContext);

                                          return <h1>Hello {user}</h1>;
                                          }

                                          export default Home;

                  ++IMP++

                 1: Index.js me file ka context nhi bannana hai, jab State ho index.js file me.

## useRef :
            useRef ek React hook hai jo value ya DOM element ko store karta hai without re-render.  
            - useRef component ko  uncontroled component  bana dete hai              


# React event :
                  event is a action which is done by user like : click, hover, scroll, load, resize.                 
                  react ke ander event on se start hote hai [ onClick, onChange]


# Props : &  Props drelling & lifitng:

            ye immeutable hota hai. means read only 

            Props Drilling :
                              Data pass karna multiple components ke through [parent to child]

            Props Lifting :
                              Child se parent me data bhejna [child to parent]
                              1: isme ek state and ek fn banana hota hai.
                                 state me data store karte hai us fn ka......
                              



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

                              React Router is a standard library for routing in React applications. It enables navigation between different components and views:

                              <BrowserRouter>: Wrap your application with this component to enable routing.

                              <Route>: Define a route for a specific path that renders a component.

                              <Link>: Render a navigation link that allows users to navigate without refreshing the page.

## Dynamic routing:
                        👉 URL ke andar dynamic value (parameter) pass karna
                        aur us value ke base par different data / component render karna.


##      using useParams() we implement dynamic routing 

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

                  navigate(-1) karne se previous page per chale jate ha


# Strict Mode - in Index.js

                              : ye strict mode console me output ko ek bar or print kar ke check karta hai.


# Lifecycle Methods

            Lifecycle methods are hooks that allow you to run code at specific points during a component’s life in the DOM:

                        1]componentDidMount: Invoked immediately after a component is added to the DOM. Ideal for initial API calls.
                        2]componentDidUpdate: Invoked immediately after updating occurs. Use this for operations that depend on the DOM or props changes.
                        3]componentWillUnmount: Invoked immediately before a component is removed from the DOM. Useful for cleanup operations.                             

# Synthetic Events :
                        ye [onClick, onChange, onSubmit, manymore..} events hote hai unko hai Synthetic events bolte hai.


# Pure Component :

    1] Pure Component React ka special class component hota hai jo unnecessary re-rendering ko rokta hai. and ye performance optmisation ke kaam aati hai.  Sirf tab render hoti hain jab props ya state actually change ho

      2] Function components me performance optimization ke liye React.memo() use hota hai.


# React.memo() :

                        React.memo() ek Higher Order Component (HOC) hai jo function components ko unnecessary re-render hone se bachata hai.

            ### suno jab parent function me state ya prop update ho rhi hai and parent ke ander child bhi hai to us case me parent ke state ya prop change ya update hua hai to parent re-render hoga to uske sath sath bina matlab ke child bhi re-render hoga 
            so isse bachne ke liye hum 
            
            React.memo() use karege means Child component ko React.memo() ke ander wrap kar dene 

            jisse child bena mtb ke rerender nhi hoga yahi perfromance optimise hai. 

# HOC (Higher Order Component) in React :

                  HOC (Higher Order Component) ek function hota hai jo component ko input me leta hai aur ek naya enhanced component return karta hai.

# Components :

            -In React, a component represents a part of the user interface, they are the building blocks of any React application.

            -Components are reusable

                  1-Stateless Functional Components
                  2-Stateful Class Components