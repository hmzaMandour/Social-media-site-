import React from "react";
import { Navbar } from "../../layouts/navBar";
import { Side } from "../sidebar/sidebar";
import { Stories } from "./stories";

import {  Post } from "./post"
import { Creators } from "../creators/creators";

export const Homepage = () => {
  return (
    <>
      <div className="bg-white"><Navbar /></div>
      <div className="hero flex justify-around pt-[25px]">
        <div>
          <Side />
        </div>
        <div>
          <div>
            <Stories />
          </div>
          <div>
            <Post />
          </div>
        </div>
        <div>
          <Creators/>
        </div>
      </div>
    </>
  );
};