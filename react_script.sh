read -p "enter project name :" project_name
npx create-react-app $project_name
cd $project_name
echo "nadee"
npm install -D tailwindcss
npx tailwindcss init
npm i react-router-dom
rm -rf tailwind.config.js
echo '
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

'> tailwind.config.js

rm -rf .git public/* src/*
touch public/index.html
echo '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    
  </body>
</html>
' > public/index.html
touch src/index.css
echo "
@tailwind base;
@tailwind components;
@tailwind utilities;
"> src/index.css
touch src/index.jsx
echo "
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);



"> src/index.jsx
touch src/App.jsx
echo '
import { Routes } from "react-router-dom";
import "./index.css"
function App() {
  return (
    <>
    <Routes>
    </Routes>
    </>
  );
}

export default App;



' > src/App.jsx
mkdir -p src/pages/components/hero
mkdir src/layouts
mkdir src/assets/imgs
mkdir  src/constant
mkdir src/json
touch src/json/data.json
touch  src/constant/images.jsx
touch  src/constant/index.js
touch  src/constant/data.jsx
echo '
export * as people from "../json/people.json"
' > src/constant/data.jsx
echo '
import Images from "./images"
export * as JsonData from "./data"

export { Images }
' >  src/constant/index.js
touch src/pages/home.jsx
echo '

function Home() {
  return (
    <>
    </>
  );
}

export default Home;





' > src/pages/home.jsx
touch src/pages/components/hero/hero.jsx

