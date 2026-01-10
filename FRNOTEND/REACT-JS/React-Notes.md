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
- Defi Algo - comparing karta hai actual dom and virtual dom dono ko.


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

        *****state are asynchronous******

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
          Pre-Defined funcion hota hai, which provide you kind of functionality.
          
          which is used make state stateless to stateactive
          hooks : asynchronous behave karte hai       
          Hooks fn ke ander likhe jate hai, return ke pahele

         ai 



## useState : const [count, setCount] = useState('initial value');

            manage single state 
            ye ek hook hai, isko install karna padta hai 
            ek time per ek state change karna hai to useState ka use karte hai  

            setData isme ek fn hota hai and isme ye asynchronous hota hai and ye webapi me jata hai.

            array [] of 2 parameter return karta hai - 1st para is initial state of the component, 2nd para is ek funciton hota hai to isko setCount('newvalue') bola jata hai value change karne ke liye

             useState me kuch value nhi dege to vaha undefined aa jata hai, undefined Ui me show nhi hota hai.

            % hamesha 2nd setCount ko kise evnt ke triger hone per hai call kiya jata hai valuechange hone per   and 

            1:onClick={funcationName}  iske ander parameter nhi ho jab use karna hai.
            2:onClick={arrowFunciton} isko jab use karna hai 


           
  ########## 
      Const se bane variable ka reference change nahi hota,
      lekin agar wo object ya array ho to uski properties change ki ja sakti hain.

      Agar thoda aur simple chahiye:

      Const object ke andar ki value change ho sakti hai,
      lekin pura object replace nahi kar sakte.

## useReducer : const [state, dispatch] = useReducer(inital,fnReducer)
                  - use to manage complex state
                  - It also reduce array of tow parameter

                  isme 1st para inital state hote hai.
                  isme 2nd para ek function hota hai.
                  

                  $$ useReducer vs useState $$

                  useState:

                              Simple state ke liye
                              Easy to use
                              Small components me best

                  useReducer:

                              Complex state logic ke liye
                              Centralized state handling
                              Large components me useful

## useEffect :  useEffect(() => { // side effect code }, [dependencies]);
            
            - use to perform side effects means ASYNCHRONOUS task.
            - it return nothing.
            - it takes two parameter 
                  -callback fn ---- this fn is responsible for excute side task.
                  -Dependency array

            - Api fetch, setTimeout, setInterval, async await esse ASYNCHRONOUS task  karne ke liye kaam aata hai
             
                  useEffect(() => {
                  // side effect code here
                  }, [dependencies]);

      case-1:  without dependency array

            component ke every rerender(component only rerender when state of component is change)   
             
            without dependency array
            agar me useEffect hook ka use without dependency array ke karta hu to mera callback function jo use Effect ke andar likha us compoent ke har ek render me excute hoga.
           
           
            // useEffect(() => {
            //   console.log("hey I am Jagmohan ")
            // }) 
            
            // component ke sabbhi state ko change karne per useeffect work karta hai ouput deta hai.


      case-2:   with dependency array without value 
                -  only first rendering 

            // useEffect(() => {
            //   console.log("hey I am Jagmohan ")
            // },[])
            
            // sirf ek bar chalta hai jab first time component render ho raha hai. bar bar state change per nhi chalta hai.


      case-3: dependecny array has some Parameter(run on first render and only dependency array ke parameter ke value change hone per);

            // useEffect(() => {
            //   console.log("hey I am Jagmohan ")
            // }, [data])  // only data wali state change hone per hai chalega.

      case-4: ye unmount ke case me kaam aata hai, jab kaise component ko UI se remove karna ho to jab hum case-4 ka use karte hai.

## useParams() :
                  useParams() dynamic routing implement karne ke liye hota hai.
                  ye ek obj return karta hai isme url hote hai.

## useContext() :
                  React me Context API ka use hota hai data ko bina props drilling ke multiple components tak bhejne ke liye.

                 ye props driling or lifting ke problem solve karta hai.

                  $$$suitable for small project$$$

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
      -value to persist(store) karke rakhta hai agar component render hota hai.

      -agar dom tree me se kise ko directly use kana hai vaha useREf kaam aata hai.

            useRef ek React hook hai jo value ya DOM element ko store karta hai without re-render.  
            - useRef component ko  uncontroled component  bana dete hai     

            - form me use hota hai -isme submit per hai sari value milegi, baar baar re-render nhi hoga.          
            useRef ek uncontroled component hai.

## useMemo :

            useMemo ka use heavy / costly calculations ko cache (yaad) rakhne ke liye hota hai, taaki har render par dubara calculation na ho.
            Ye performance optimization ke kaam aata hai.

            - ye do parameter leta hai a): callback fn b):[] empty array -> iske ander jo state hota hai ve fisrt render per and array ke ander jo state hote hai vo change hoge tab render hoga.

                              const memoizedValue = useMemo(() => {
                              // heavy calculation
                              return value;
                              }, [dependencies]);

## useCallback :

                        useCallback ka use function ko cache (yaad) rakhne ke liye hota hai, taaki har render par naya function create na ho.
                        Ye bhi performance optimization ke kaam aata hai.

                                    const memoizedFn = useCallback(() => {
                                    //function logic
                                    }, [dependencies]);

                        fn ke refrence ko yaad rakhta hai.

## Custom Hooks : 
                  made by human and prefix is use
                ex: useProfileData.jsx  
      esaa code jo multiple component me use ho raha hai us logic ya code ko custom hook file me likh lo.

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
                              <NavLink> : using this we can add active className
## Dynamic routing:
                        👉 URL ke andar dynamic value (parameter) pass karna
                        aur us value ke base par different data / component render karna.


##      using useParams() we implement for dynamic routing 

            useParams() ka use hum usse componenet me karte hai jaha hum dynamic routing nikalna chatha hai.
Syntex:
            <Route path="/user/:id" element={<User />} />
                               |
                        : colon se start hote hai usse  dynamic rounting ka parameter bola jata hai.


                        Dynamic routing allows passing parameters in the URL to render different content using a single component.

                        📌 Points to Remember
                        : use hota hai dynamic param ke liye
                        useParams() se value milti hai
                        Mostly detail pages ke liye use hota hai


//nasted routing 
 

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

      $$$  BTS:  React.memo:- react memo kya karta hai apke props ke aadhar pr component ko yaad karke rakhta hai but agar value primitive hui to nhi render Karega kyuki primitive value ka address hamesha same rehta hai or non premative data type assign karte hai to render Karega kyuki non premative data type ka address change hota hai. $$$                

            ### suno jab parent function me state ya prop update ho rhi hai and parent ke ander child bhi hai to us case me parent ke state ya prop change ya update hua hai to parent re-render hoga to uske sath sath bina matlab ke child bhi re-render hoga 
            so isse bachne ke liye hum 
            
            React.memo() use karege means Child component ko React.memo() ke ander wrap kar dene 

            jisse child bena mtb ke rerender nhi hoga yahi perfromance optimise hai. 

# HOC (Higher Order Component) in React :

                  HOC (Higher Order Component) ek function hota hai jo component ko input me leta hai aur ek naya enhanced component return karta hai.

# Components : -Components are reusable block of code

                  react ke ander jo bhi component hote hai vo  capital letter se start hote hai  ex: Card.jsx 

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


                        
# React FORMS: collect the data from input filed.

                - react forms by default Uncontrolled Component hote hai. 
                - onChange-input ke ander hota hai. and value [ye dono  hona chaiye input ke ander.]     

                              React provides two main ways to work with forms: 
                              
                              -Controlled Components and 
                              -Uncontrolled Components.


                             - Controlled components in React are those where the form data is handled by the component's state. The state is the single source of truth, and any changes to the form input are managed through event handlers. 
                             
                             Uncontrolled components, 

                             - An Uncontrolled Component is a form element where the form data is handled by the DOM itself rather than the React state. The value of the input field is accessed directly via the DOM using refs.

                              In this approach, React does not control the form’s data. You typically retrieve the value only when needed, such as when the form is submitted.
                              

                             - Controlled components offer more control and are easier to test, while uncontrolled components can be simpler to implement for basic use cases.


             label -> htmlfor='' 
             input -> type="" id="" placeholder=""
                  id samename same as htmlfor     

            input me type radio hai to kaise ek per click karne ke liye name="" sab input me same dedo 

            select me option hote hai option me value hote hai jo ke value or content same hote hai. 


      $$$
       1:  input me name="" ander jo value hoge vo state ka name hoga. and 
      2: value="" ke ander bhi state ka name hoga. isse $$

## useForms :
             for handling forms 

            register → input ko form se connect karta hai
            handleSubmit → form submit handle karta hai
            errors → validation errors store karta hai
      

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


## Redux :

            - Redux ek global state management library hai 
            - It is used for managaing globally state among the component
            - Good Practice (Readble, simple to implement, easy flow)
            - redux centralized aur scalable state provide karti hai.
            - Best for large & complex apps
            - Uses single source of truth

            :store :- central Reprositry(single source of truth)
            :slices :- features 
            :reducer :- functions(JS)
            :actions :- events
            :payload :- reduces parameter
            :state :- kaise bhi component ka current data


configerStore - means store create kar rahe hai.


                 


:slice: ke ander esse fn or variable hote hai jaha 

store ke ander slice hota hai. and slice ke ander features hote hai.
index.js me store ko provide karte hai.

# REDUX 


### 1. Redux kya hai?

      Redux ek state management library hai jo global state ko manage karne ke liye use hoti hai.

      Agar tum props drilling ya state lifting use kar rahe ho → us state ko Context API ya Redux me daal do.

      Small project → Context API sufficient hoti hai

      Medium / Large project → Redux better choice hota hai (scalable & predictable)

## Redux vs Redux toolkit


### 2. Redux ke Core Concepts
🔹 Store

      Store ek central object hota hai jisme poora global state hota hai.
      App me sirf ek hi store hota hai.

🔹 configureStore

      configureStore() ek function hai jo store object return karta hai.
      Ye parameter me reducer leta hai.

      Agar multiple slices hain → reducer ke andar object pass karte hain.

      configureStore({
      reducer: {
      user: userSlice,
      cart: cartSlice
      }
      })

🔹 Slice

            Slice Redux Toolkit ka concept hai.

            Slice banane ke liye:

            createSlice({
            name,
            initialState,
            reducers
            })


Slice ke parts:

      name → slice ka unique naam

      initialState → slice ka starting data

      reducers → functions (key–value form me)

            ⚠️ Important:

            Reducers arrow function hote hain

            Ye 2 parameters lete hain:

            state or action

🔹 Action

      Action wo hoti hai jo user perform karta hai

      button click, form submit, add to cart, remove, etc.

      Action ke andar data payload me jata hai.

      dispatch(addUser(payload))

🔹 Reducer

            Reducer ek JavaScript function hota hai

            Lekin:

            Isko direct call nahi kar sakte

            function keyword use nahi hota

            Ye slice ke reducers object me hota hai

Reducer ka kaam:

      Purani state + action ke base par new state banana

      (state, action) => {
      state.value = action.payload
      }


📌 Reducer ko call karne ka flow:

Dispatch → Reducer → Payload → State Update

🔹 Payload

      Reducer ko dispatch karte waqt sirf ek value pass hoti hai

      Multiple values chahiye ho → object ya array pass karo

      dispatch(updateUser({ name, age }))

3. Redux Toolkit & Proxy (Immer)

            Redux Toolkit internally Proxy (Immer) use karta hai

            Is wajah se:

            Tum directly state.value = x likh sakte ho

            Actually Redux immutable copy bana raha hota hai

            current() Agar state ko console me dekhna ho:

            import { current } from "@reduxjs/toolkit";
            console.log(current(state))

4. Slice ka Name – IMPORTANT

            Jo slice ka name hota hai

            Wahi store me register karte waqt key hoti hai

            name: "user"

            reducer: {
            user: userReducer
            }


      ❌ Name mismatch → useSelector kaam nahi karega

5. Provider

            Redux store ko React app me available karane ke liye Provider use hota hai
            Ye main.jsx me wrap hota hai

            <Provider store={store}>
            <App />
            </Provider>

6. Hooks in Redux
🔹 useSelector

      Store / slice se data read karne ke liye

      const user = useSelector(state => state.user)

🔹 useDispatch

      Slice ke reducer (action) ko call / dispatch karne ke liye

      const dispatch = useDispatch();
      dispatch(addUser(data))

7. Complete Redux FLOW (Step-by-Step)

                  Slice create karo (createSlice)

                  Actions & reducer export karo

                  Store banao (configureStore)

                  Slice ko store me register karo

                  Provider se app ko wrap karo

                  useSelector se data lo

                  useDispatch se reducer call karo
            
            


# Conditional Rendering :

                        React me conditional rendering ka matlab hota hai
                        👉 condition ke basis par UI dikhana ya chhupana

                        1:if / else--
             if(isLoggedIn){return <Dashboard />;}else{return <Login />;}

                        2:Ternary Operator (Mostly use)--
                                     {isLoggedIn ? <Dashboard /> : <Login />}


# React styling technique:

            React me styling ke multiple ways hote hain – CSS, Inline, CSS Modules, Styled Components aur Tailwind. CSS Modules aur Styled Components zyada scalable hote hain.

                              🎨 React Styling 

                              CSS → Normal global CSS
                              Inline → JSX ke andar style object
                              CSS Modules → Component-scoped CSS
                              Styled Components → CSS inside JS
                              Tailwind → Utility classes
                              Sass → Advanced CSS

# CSR vs SSR

## Client Side Rendering (CSR) – Definition

Client Side Rendering (CSR) ek web rendering technique hai jisme web page ka content browser (client) par JavaScript ki help se render hota hai.
Server sirf basic HTML aur JavaScript files bhejta hai, aur actual UI browser me React jaise frameworks ke through generate hoti hai.

## Server Side Rendering (SSR) – Definition

Server Side Rendering (SSR) ek web rendering technique hai jisme web page ka complete HTML server par hi generate hota hai aur phir ready content browser ko bhej diya jata hai, jisse page fast load hota hai aur SEO better hoti hai.



# ⚠️ Challenges in React :

- 1️⃣ Learning Curve – JSX, Hooks aur state samajhna beginners ke liye tough hota hai.

- 2️⃣ State Management – Large apps me state handle karna complex ho jata hai.

- 3️⃣ SEO Issues – Client Side Rendering ki wajah se SEO weak hoti hai.

- 4️⃣ Performance – Extra re-rendering se performance issues aa sakte hain.

- 5️⃣ Fast Updates – React ecosystem fast change hota rehta hai.

- 6️⃣ Multiple Library Choices- Routing, styling, state ke liye bahut saari libraries hone ki wajah se confusion hota hai.


# React Performance Optimization = Kam re-render + Fast UI + Better UX

React application ko fast aur smooth banane ke liye kiya jata hai.
Iska main aim unnecessary re-rendering ko avoid karna hota hai.
Performance optimization se page load time kam hota hai aur user experience better hota hai, especially large React applications me.

 using solve :- child rerendering avoid, heavy calculaition 

- React.memo → Unnecessary re-renders roakta hai - component ko yaad rakhega 

- useCallback → Function ko memoize karta hai - function ko yaddd rakhega 

- useMemo → Heavy calculation cache karta hai - value ko yaad rakhne ke liye 

- Lazy Loading → Components ko jab zarurat ho tab load

- Code Splitting → App ko small bundles me todta hai

- Proper Keys → List rendering fast hoti hai 

- Avoid Extra State → Kam re-rendering



# lazy loding :
               jisse dekhna hai usse hai load karo means  Components ko jab zarurat ho tab load

fallback
suspense 



# IMP TOPICS :

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

