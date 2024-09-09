import { createContext } from "react";
import "./index.css";
import { Home } from "./pages/home";

export const dataContext = createContext();

function App() {
 
  let obj = {
    name: "",
    email: "",
    password: "",
    birthday: "",
    gender: "",
    img: "",
    posts: [],
  };

  return (
    <>
      <dataContext.Provider value={obj}>
        <Home />
      </dataContext.Provider>
    </>
  );
}

export default App;
