import { Route, Routes } from "react-router-dom";
import { AboutSocial } from "./aboutSocial/aboutSocial";


export function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutSocial />}></Route>
      </Routes>
    </>
  );
}
