import React, { useContext } from "react";
import { Navbar } from "../../layouts/navBar";
import { Side } from "../sidebar/sidebar";
import { UserProfile } from "./userprofile";
import { dataContext } from "../../App";
import { Post } from "../home/home";

export const UserPage = () => {
  let { user, setUser } = useContext(dataContext);

  return (
    <>
      <div className="w-[99vw]">
        <Navbar />
        <div className="flex pt-5 pl-10 gap-7">
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
