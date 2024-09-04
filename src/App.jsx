
import { Route, Routes } from "react-router-dom";
import "./index.css"
import AboutSocial from "./pages/aboutSocial/aboutSocial";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<AboutSocial/>}></Route>
    </Routes>
    </>
  );
}

export default App;




