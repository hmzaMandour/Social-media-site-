import React, { useContext } from "react";
import { Navbar } from "../../layouts/navBar";
import { Side } from "../sidebar/sidebar";
import { UserProfile } from "./userprofile";
import { dataContext } from "../../App";
import { Post } from "../home/post";

export const UserPage = () => {
  let {user, setUser} = useContext(dataContext);
  
  return (
    <>
      <div>
        <Navbar />
        <div className="flex bg-[#6f009e09] pt-5 pl-10">
          <div>
            <Side />
          </div>
          <div className="w-[82%]">
            <UserProfile />
          </div>
        </div>
      </div>
    </>
  );
};
