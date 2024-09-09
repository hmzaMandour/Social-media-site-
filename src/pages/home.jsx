import React from "react";
import { AboutSocial } from "./aboutSocial/aboutSocial";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./signup/signup";
import { SignIn } from "./signin/signin";
import { Side } from "./sidebar/sidebar";
import { Navbar } from "../layouts/navBar";
import { Creators } from "./creators/creators";
import {UserProfile} from "./profile/userprofile";
import UsersProfile from "./profile/usersprofile";
import { Homepage } from "./home/home";
import { Stories } from "./home/stories";

import { Friend } from "./friends/friends";
import { CreatePost } from "./home/createposts";
import { Post } from "./home/post";
import { UserPage } from "./profile/userpage";
import { Settings } from "./settings/settings";
import { Photo } from "./profile/profilepic";
import { People } from "./people/people";

export const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<UsersProfile />}></Route>
        <Route path="/people" element={<People />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/creatpost" element={<CreatePost />} />
        <Route path="/post" element={<Post />} />
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
    </>
  );
};
