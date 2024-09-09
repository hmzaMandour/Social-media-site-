import React, { createContext } from "react";
import { AboutSocial } from "./aboutSocial/aboutSocial";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./signup/signup";
import { SignIn } from "./signin/signin";
import { Side } from "./sidebar/sidebar";
import { Navbar } from "../layouts/navBar";
import { Creators } from "./creators/creators";
import UserProfile from "./profile/userprofile";
import UsersProfile from "./profile/usersprofile";
import { Homepage } from "./home/home";
import { Stories } from "./home/stories";
import { Friend } from "./friends/friends";

export const friendsArr = createContext(null);

export const Home = () => {

  let friends = []

  return (
    <>
      <friendsArr.Provider value={friends}>
        <Routes>
          <Route path="/profile" element={<UsersProfile />}></Route>
          <Route path="/home" element={<Homepage />} />
          <Route path="/storie" element={<Stories />} />
          <Route path="/user" element={<UserProfile />}></Route>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Side />} />
          <Route path="/" element={<AboutSocial />}></Route>
          <Route path="/:id" element={<UsersProfile />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/creators" element={<Creators />} />
        </Routes>
      </friendsArr.Provider>
    </>
  );
};
