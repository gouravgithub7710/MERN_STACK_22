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

----------------------------------------
 JS - 
      imperative approach follow karte hai : means step by step focus karte hai.

 React - 
      declerative approach follow karte hai : kaam karne per focus karte hai using jsx
-------------------------------

# REACT

- React is declerative aproach follow karte hai: Kaam karne per focus karte hai

## Advantage :
- open source, component based architecure 
- SPA : - single page application

- JSX :- combination of HTML and JS
            JSX- JavaScript XML
      - Bable :-
                Babel ek JavaScript transpiler hai
                Babel React me JSX aur modern JavaScript ko browser-compatible JavaScript me convert karta hai.


- component :- Resouable block of code 
                React component base architecture

- states :- 
                  kise bhi component ka data jo ui per dekahi de raha hai and kaise variable ke through aa raha hai 

- Hooks :

- Virtual Dom :- 
                  - actual Dom :- isse website reload hote hai 
                  - Virtual Dom - actual dom ke carbon copy hota hai : isme puri website reload nhi hote hai 

- Reconsization - process of converting actual dom to virtual dom
- Routing - ek page se dusre page me jane ke liye

- open sourse and cross platform :-
                                       koi bhi use kar sakta hai and kahi bhi use kar sakte hai

-Facebook :- react ko baniya hai

-Hooks :- 
              Predefined fun and ye state or side effect ko manage karne ke liye hote hai 

## Disadvantage :

- Not suitable for small project.
-



# NPM vs NPX

## npx kya hota hai?

        npx = Node Package Executor

            ek bundel ke form me install karte hai.
              Package ko run/execute karta hai ek baar me sab 
              

## npm kya hota hai?

            npm = Node Package Manager 

                  - install one by one install package

                  Packages install karne ke kaam aata hai
                  Project me dependencies add karta hai     


# Import Export :

            1] import -
                         jab kaise fn ya varible ko export kiya giya ho jab hai hum import kar sakte hai .

                         ex: 
                              named export me import ke time per {} me name likhte hai.
                              export default me import ke time {} ka use nhi karte hai.



            2] export - 2 type hai :-
                                     a] named export - ek file ke ander multiple export kar sakte hai.
                                     ex: export fn sum(x,y){clg(x+y);} 


                                     b] export default - single at a time single export karte hai, export default arrow fn ke sath use nhi kar sakte hai.
                                     ex: 
                                          export default let y = 20;
                                          export default y1;

                                     c] arrow fn me export default esse jota  hai 
                                     ex: 
                                    const sum = ()=>{clg(a+a);}
                                    export default sum;


      $$$ ./ iska mtb hai current folder me hai and iske ander ja raha hai.$$$                                 
      $$$ ../ iska use bhar jana ke liye kiya jata hai.$$$



# state : current data of component
        kise componenet ka current data (ui me esa data jo kaise variable ke through aa raha hai usse state bolte hai)

## stateLess: {By Default} : if user perform action on UI but changes not reflect on the UI are called stateless

            normal js ke variable statless hote hai

          kise componeent ke data ko change karte hai and vo ui per nhi dekhta hai ussse stateless bolte hai
            kyu ke hum js ke variable use karte hai to stateless hote hai. 

## stateActive :
           kise componeent ke data ko change karte hai and vo ui per change ho kar dekhta hai ussse stateActive bolte ahi 



# State vs Props :

## state : current data of component, is mutable 

## props : props is a way where we pass state from one component to other component, is immutable.


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

            - form me use hota hai -isme submit per hai sari value milegi, baar baar re-render nhi hoga.          
            useRef ek uncontroled component hai.



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

# Components : -Components are reusable block of code

                  react ke ander jo bhi component  hote hai vo  capital letter se start hote hai  ex: Card.jsx 

            -In React, a component represents a part of the user interface, they are the building blocks of any React application.

            - jo file ka name hota hai vo component ka ka nhi bhi to chalega duara name bhi ho satka hai file name se different.
            
            -self closing component : <Header/> -
                                     Jab component ke andar kuch pass nahi karna ho

            - non self closing component :<Header></Header>/>
                                          Jab component ke andar content pass karna ho
      
## Children keyword :
                        -children is a special prop in React used to pass content between the opening and closing tags of a component.
                        -JSX, text, component — sab children ho sakta hai/

            
                  1-Stateless Functional Components
                  2-Stateful Class Components


## Fragmanet :  <> </> - used in component



# Pagination :



                                                Start
                                                |
                                                v
                                          Data Available
                                                |
                                                v
                                          Set cards per page
                                          (cardInUI = 4)
                                                |
                                                v
                                          Find total length
                                          (Data.length)
                                                |
                                                v
                                          Calculate total pages
                                          (ceil(length / cardInUI))
                                                |
                                                v
                                          Create page buttons
                                          [1, 2, 3, ...]
                                                |
                                                v
                                          Set current page
                                          (useState)
                                                |
                                                v
                                          Calculate SI & EI
                                          SI = (currentPage-1)*4
                                          EI = currentPage*4
                                                |
                                                v
                                          Slice data
                                          Data.slice(SI, EI)
                                                |
                                                v
                                          Render cards on UI
                                                |
                                                v
                                          Click Page Button
                                                |
                                                └───> Update current page
                                                      (Repeat Flow)


                        
# React FORMS:

                              React provides two main ways to work with forms: 
                              
                              -Controlled Components and 
                              -Uncontrolled Components.


                             - Controlled components in React are those where the form data is handled by the component's state. The state is the single source of truth, and any changes to the form input are managed through event handlers. 
                             
                             Uncontrolled components, 

                             - An Uncontrolled Component is a form element where the form data is handled by the DOM itself rather than the React state. The value of the input field is accessed directly via the DOM using refs.

                              In this approach, React does not control the form’s data. You typically retrieve the value only when needed, such as when the form is submitted.
                              

                             - Controlled components offer more control and are easier to test, while uncontrolled components can be simpler to implement for basic use cases.


# React Context API
                        The Context API is React’s built-in solution for handling global state. Introduced in React 16.3, it allows you to share state across your component tree without having to pass props manually at every level.

## How Context API Works
                        With Context API, you create a Context object, which holds the global state. You then wrap your components inside a Provider component, which makes the state available to any component that needs it. Components that consume this state can use the useContext hook to access the data.


# State Management in React

                                    when dealing with complex applications where multiple components need to share and access the same data.
  
                  Two popular solutions for managing global state in React are the Context API and Redux.

                 https://medium.com/@rashmipatil24/state-management-in-react-b4b2e8c6cb9d

              ######   CONTEXT-API VS REDUX ####

1. What is Context API?

Interview Answer:
Context API React ka built-in feature hai jo global data share karne ke liye use hota hai aur prop drilling avoid karta hai.

👉 Best for small to medium apps
👉 Example: Theme, Authentication, Language

🔹 2. What is Redux?

Interview Answer:
Redux ek external state management library hai jo predictable, centralized aur scalable state provide karti hai.

👉 Best for large & complex apps
👉 Uses single source of truth


| Point       | Context API              | Redux                             |
| ----------- | ------------------------ | --------------------------------- |
| Type        | Built-in React feature   | External library                  |
| App Size    | Small / Medium           | Large / Complex                   |
| State Flow  | Simple                   | Strict (Action → Reducer → Store) |
| Performance | Frequent updates me slow | Optimized                         |
| Debugging   | Limited                  | Excellent (Redux DevTools)        |
| Boilerplate | Less                     | More                              |
| Scalability | Limited                  | High                              |




# Conditional Rendering :

                        React me conditional rendering ka matlab hota hai
                        👉 condition ke basis par UI dikhana ya chhupana

                        1:if / else--
             if(isLoggedIn){return <Dashboard />;}else{return <Login />;}

                        2:Ternary Operator (Mostly use)--
                                     {isLoggedIn ? <Dashboard /> : <Login />}


# lazy loding :




1} Contextapi -> custom hooks - redux- toolkit - tank

- Reconsilation 

2} profemence -> 
                  webpack ,useMemo, codespliting ,lazy loding, useCallback, reduce the time of API, pagination, Indexing.

3} Routing -> 
                  routing, Dynamic routing - outlet, static routing , exact, children 

4} RCLC -> 
            Mouting phase, updating phase, deleting unmouting and in sab ke methods and constructor, this, this.state, highter order component,

5} Recursion Tree -> folder structure, retry principle

6} Axios, .env file 

7} services, connector, api Routes.

8} MMS -> dynacmic type per kaise file ka size less ya kuch is type se hota hai.

9} Caching -> SSR, OSR

