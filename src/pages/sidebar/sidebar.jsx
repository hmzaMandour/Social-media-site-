import React, { useEffect, useInsertionEffect } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";

export const Side = () => {
    
  return (
    <div className=" ">
      <div className=" h-[80vh] w-fit  flex flex-col justify-start pt-[37px]  gap-[20px]">
        <div className="h-[90px] hover:duration-300 flex hover:bg-[#ea80fc] items-center  w-[250px] rounded-[20px] bg-[white]">
          <div className="h-[50px] ml-2 w-[50px] bg-green-600 rounded-full"></div>
          <div className="pl-5">
            <div>User Name</div>
            <div className="text-sm text-[#e4e2ea]">@UserName</div>
          </div>
        </div>
        <div className="h-[350px] hover:duration-300  w-[250px] rounded-[20px] flex flex-col justify-center items-center bg-white">
          <div className="h-[25%] rounded-t-[20px] w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
            <div className="text-2xl text-[#a5a0b9]">
              <FaHome />
            </div>
            <div className="font-medium">Home</div>
          </div>
          <div className="h-[25%] hover:duration-300  w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
            <div className="text-2xl text-[#a5a0b9]">
              <IoStorefrontSharp />
            </div>
            <div className="font-medium">Store</div>
          </div>
          <div className="h-[25%] hover:duration-300  w-full bg-white flex justify-center gap-16  hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
            <div className="text-2xl text-[#a5a0b9] ">
              <MdGroups />
            </div>
            <div className="font-medium">Groups</div>
          </div>
          <div className="h-[25%] hover:duration-300 rounded-b-[20px] w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
            <div className="text-2xl text-[#a5a0b9]">
              <IoIosSettings />
            </div>
            <div className="font-medium">Settings</div>
          </div>
        </div>
        <div className="h-[50px] w-[150px] m-auto text-white hover:duration-300 text-xl font-medium  rounded-[30px] flex justify-center items-center bg-[#e040fb] hover:bg-[#ea80fc]">
          Log Out
        </div>
      </div>
    </div>
  );
};
