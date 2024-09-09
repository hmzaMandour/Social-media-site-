import { createContext, useState } from "react";
import "./index.css";
import { Home } from "./pages/home";

export const dataContext = createContext();

function App() {
 
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
    gender: "",
    img: "",
    posts: [],

  });

  return (
    <>
      <dataContext.Provider value={{ user, setUser }}>
        <Home />
      </dataContext.Provider>
    </>
  );
}

export default App;