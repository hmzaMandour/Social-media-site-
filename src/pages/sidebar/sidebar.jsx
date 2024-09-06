import React, { useEffect, useInsertionEffect } from "react";
import { useNavigate } from "react-router-dom";


import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { TiGroupOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";


import { MdOutlineDarkMode } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";






export const Side = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="w-[100vw] h-full bg-[#edebeb81]">
      {/* <nav className='flex justify-between px-[6vw] m-0 items-center  h-[13vh] bg-white'>
            <div className="logo m-0">
                <p className="font-bold m-0 text-[28px] cursor-pointer text-[#6e009e]">
                    FRIDAT<span className="text-[#e040fb] text-3xl">.</span>
                </p>
            </div>

            <div className='flex  items-center gap-5'>
                <MdOutlineDarkMode  size={24} className="text-[#e040fb] cursor-pointer" />
                <MdNotificationsNone size={24} className="text-[#e040fb] cursor-pointer" />
                <img 
                    src="" 
                    alt="" 
                    className='w-10 h-10 bg-red-200 rounded-[50%] cursor-pointer' 
                    onClick={() => { navigate("/user") }}
                />
            </div>

      </nav> */}

      <div className=" pl-[5vw] pt-5 " >
      {/* side bar */}
      <div className="sideBar flex flex-col gap-5 rounded-xl w-[20%] ">
        <div className="profileDiv py-3 px-7  rounded-xl   flex items-center gap-3 bg-white">
          {/* left part */}
          <div className="">
            <img 
              src="" 
              alt="" 
              className='w-10 h-10 bg-red-600 rounded-[50%] cursor-pointer' 
            />
          </div>

          {/* right Part */}
          <div>
            <p className="font-semibold">User Name</p>
            <p className=" text-gray-600 text-[14px]">@UserName</p>
          </div>
        </div>

        {/* pages */}
        <div className="bg-white p-3 rounded-xl ">
          <div className="flex flex-col gap-6 p-4 pb-5 ">
            <div className="flex gap-5">
              <IoHomeOutline size={22} className="text-[#e040fb] cursor-pointer" />
              <p className="font-bold text-[#6e009e]">Home</p>
            </div>
            <div className="flex gap-5">
              <BsPeople size={22} className="text-[#e040fb] cursor-pointer" />
              <p className="font-bold text-[#6e009e]">People</p>
            </div>
            <div className="flex gap-5">
              <HiOutlineBuildingStorefront size={22} className="text-[#e040fb] cursor-pointer" />
              <p className="font-bold text-[#6e009e]">Store</p>
            </div>
            <div className="flex gap-5">
              <TiGroupOutline size={22} className="text-[#e040fb] cursor-pointer" />
              <p className="font-bold text-[#6e009e]">Groups</p>
            </div>
            <div className="flex gap-5">
              <IoSettingsOutline size={22} className="text-[#e040fb] cursor-pointer" />
              <p className="font-bold text-[#6e009e]">Settings</p>
            </div>
          </div>

          

        </div>

        {/* log out */}
        <div className="pb-5">
            <button className="text-white bg-[#6e009e] py-[10px] px-7 rounded-[20px] text-[13px] font-semibold cursor-pointer w-[100%] hover:border-solid border-2 border-[#6e009e] hover:text-[#6e009e] hover:bg-transparent">Log out</button>
        </div>
        

        

      </div>
    </div>

    </div>
            
    
    </>
    // <div className=" ">
    //   <div className=" h-[80vh] w-fit  flex flex-col justify-start pt-[37px]  gap-[20px]">
    //     <div className="h-[90px] hover:duration-300 flex hover:bg-[#ea80fc] items-center  w-[250px] rounded-[20px] bg-[white]">
    //       <div className="h-[50px] ml-2 w-[50px] bg-green-600 rounded-full"></div>
    //       <div className="pl-5">
    //         <div>User Name</div>
    //         <div className="text-sm text-[#e4e2ea]">@UserName</div>
    //       </div>
    //     </div>
    //     <div className="h-[350px] hover:duration-300  w-[250px] rounded-[20px] flex flex-col justify-center items-center bg-white">
    //       <div className="h-[25%] rounded-t-[20px] w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
    //         <div className="text-2xl text-[#a5a0b9]">
    //           <FaHome />
    //         </div>
    //         <div className="font-medium">Home</div>
    //       </div>
    //       <div className="h-[25%] hover:duration-300  w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
    //         <div className="text-2xl text-[#a5a0b9]">
    //           <IoStorefrontSharp />
    //         </div>
    //         <div className="font-medium">Store</div>
    //       </div>
    //       <div className="h-[25%] hover:duration-300  w-full bg-white flex justify-center gap-16  hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
    //         <div className="text-2xl text-[#a5a0b9] ">
    //           <MdGroups />
    //         </div>
    //         <div className="font-medium">Groups</div>
    //       </div>
    //       <div className="h-[25%] hover:duration-300 rounded-b-[20px] w-full bg-white flex justify-center gap-16 hover:bg-[#f9edfa] hover:text-[#e040fb] items-center">
    //         <div className="text-2xl text-[#a5a0b9]">
    //           <IoIosSettings />
    //         </div>
    //         <div className="font-medium">Settings</div>
    //       </div>
    //     </div>
    //     <div className="h-[50px] w-[150px] m-auto text-white hover:duration-300 text-xl font-medium  rounded-[30px] flex justify-center items-center bg-[#e040fb] hover:bg-[#ea80fc]">
    //       Log Out
    //     </div>
    //   </div>
    // </div>
  );
};
