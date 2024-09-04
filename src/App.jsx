
import { Route, Routes } from "react-router-dom";
import "./index.css"
import AboutSocial from "./pages/aboutSocial/aboutSocial";
import UserProfile from "./pages/profile/userprofile";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<AboutSocial/>}></Route>
      <Route path="/user" element ={<UserProfile/>}></Route>
    </Routes>
    </>
  );
}

export default App;




