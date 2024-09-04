import { AboutSocial } from "./aboutSocial/aboutSocial";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./signup/signup";
import { SignIn } from "./signin/signin";

export const Home = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<AboutSocial />}></Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};
