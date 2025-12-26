## Insatalation-1-way
    1: Node js install
    2: vs code
    3: React folder
          |
          class1 folder
                 |
                 open with CMD
                          |
                          npx create-react-app [project_name-small-later]

      4: cd project_name
      5: npm start {live the project}

## Insatalation-2-way-using-vite
            Vite ek modern build tool & dev server hai jo frontend projects (React, Vue, Vanilla JS) ko fast banata hai.

            Simple words me:
            Vite = fast project setup + fast run + fast reload

1: npm create vite@latest
2: press enter
3: choose react
4: choose JavaScript
5: Enter until React aplication done 
6: npm install (node modules)
7: npm run dev {live the project}


# React Router Dom install 
                  ye ek libraray hai 
                  React ke ander router nhi hota hai to hum isse use karne ke liye react router dom library ko istall karte hai.

                              it is a library react router dom
                              1: npm i react router dom
                              2: render method me import browser rounder ye react rounter dom se aai ga.
                              3: render method ke ander aa jao 
                                    render(<APP/>)
                                          |
                                    replace with this
                                     render(<BrowserRouter><App/> <BrowserRouter>)     
                              4:goto App.js import {Routes,Route} from react router dom
                              5: come inside return-> define routes and yaha <div> ke ander <Routes path="/" element={<home/>}> likhna hai <div>
                              6: create link [new compoent banao header.jsx] and is component me <link to="/yaha vo value aai ge jo path ke ander aaige" > banao


# Folder Structure 
my-react-app/
│
├── public/
│   ├── index.html        ✅ (ONLY HTML FILE)
│   └── favicon.ico
│
├── src/
│   ├── components/       (Reusable UI components)
│   │   ├── Header.js
│   │   └── Footer.js
│   │
│   ├── pages/            (Route based pages)
│   │   ├── Home.js
│   │   └── Login.js
│   │
│   ├── App.js            ✅ (ROOT COMPONENT)
│   ├── index.js          ✅ (ENTRY FILE)
│   ├── App.css
│   ├── index.css
│
├── package.json
└── package-lock.json


