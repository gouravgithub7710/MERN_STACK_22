########## **Backend** ###########


When a URL is hit, the request passes through middleware, matches a route, executes controller logic, interacts with the database via models, and finally sends a JSON response back to the client.

Frontend
   ↓
URL hit
   ↓
Middleware
   ↓
Route
   ↓
Controller
   ↓
Model
   ↓
MongoDB
   ↑
Response (JSON)
   ↑
Frontend UI


Server :- Provider

Controller - 
              DB se baat karta hai and hum controller se baat karte hai 


# Restfull api :- 
                      url ko hai rest full api hai.


# Routes :- 
            [ method, path, Read controller ]and kabhi kabhi middle ware bhi hota hai.

            - Read Controller ke ander DB hai. and controller ke ander model hota hai and code hota hai  



            MVC is end , now a days we have DDD 


clint side rendering vs server side rendering-------------- read about this


          


Node js :- 
          is a framwork because we download this 
          it also know as Runtime environment bcoz js code ko browser ke bahar chalata hai and data server per send kar sakte hai iske through

          JS- JS me filehandling nhi hota hai .

          Js se hum filehandling nhi kar sakte hai to hamare pass Node js hai filehandling ke liye.

          Node js - provide kata hai -> restfull api , 


          terminal, github, comand prompt ye sab node js ke use kar ke bana hai.


          Node js provide FS module jisse hum file ko handel kar sakte hai.



ODM , ORM , Mongooes


Nodemoon ek library hote hai jo express ke pass hote hai iske use se hum mutiple js file run kar sakte hai.



Node js vs SpringBOOT 


# NPM INIT -
              using this we can install 
              1. package.json include dependies 
              2. packagelock.json include lock dependies.


# utiles :
          yaha vo data hota hai jo multiple files me hota hai.

# Templates : ye ek folder hai.
              egs ko hai template bolte hai 



# Express : - express ek module hai vo bhi node ke ander.

              npm i express
              #mongoose
              cookie.parse
              body_parse
              bcrpt
              #json web Tocken
              #cros
              nulter
              nodemailer
              opt-generator
              dotenv

           ### Frontend or backend ke application ko ek file me kaise chaliye ?
            dono ko ek hai port me chalana hai and connect bhi karna hai. ###



# MongoDB vs MySQL

## MongoDB 

               1: DB
               2: Collection
               3: Document -> { }
               4: Object 

               - Command
               1: db
               2: db show
               3: use db
               4: db.document.collectionname



               Mongooes ek ODB library hai, isko pahele install karna hota hai.



# Express :

         1: create a folder class-1-> open with vs code
         2: open terminal select cmd
         3: write below command inter
               npm init
         4: creae below folder in class-1

                  a: model
                  b: routes
                  c: controller
                  d: connectivity
                  e: middleware
                  f: utils
                  g: templates

         5: create below files
            a: server.js
            b: .env

         6: Go to server.js write below code
            clg("class-1")

         7: Go to terminal 
            node server.js

------------------------------------------------------------


named export - use for multiple file
export default - use for single file






