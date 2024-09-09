
import { Routes,Route } from "react-router-dom";
import "./index.css"
import Marketplace from "./pages/marketplace/marketplace";
import Groups from "./pages/Groups/groups";



function App() {
  return (
    
    <>
 
    <Routes>
    <Route path="/" element={<Marketplace />} />
    <Route path="/group" element={<Groups />} />


    </Routes>
   
    </>
  );
}

export default App;




