import React, { useContext, useEffect, useInsertionEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { TiGroupOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { dataContext } from "../../App";
import userPng from "../../assets/images/user.png"

export const Side = () => {
  let { user, setUser } = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full w-[20vw] ">
        <div className="">
          {/* side bar */}
          <div className="sideBar flex flex-col gap-5 rounded-xl w-[100%] ">
            <div className="profileDiv py-3 pr-16  pl-4 rounded-xl   flex items-center gap-3 bg-white">
              {/* left part */}
              <div className="">
                <img
                  src={user.img || userPng}
                  alt=""
                  className="w-10 h-10 rounded-[50%] cursor-pointer"
                  onClick={() => {
                    navigate("/userpage");
                  }}
                />
              </div>

              {/* right Part */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate("/userpage");
                }}
              >
                <p className="font-semibold">{user.name}</p>
              </div>
            </div>

            {/* pages */}
            <div className="bg-white pr-16 py-4 pl-4 rounded-xl ">
              <div className="flex flex-col gap-6 pb-5 ">
                <div className="flex gap-5">
                  <IoHomeOutline
                    size={22}
                    className="text-[#e040fb] cursor-pointer"
                  />
                  <p
                    onClick={() => {
                      navigate("/home");
                    }}
                    className="font-bold text-[#6e009e] cursor-pointer hover:text-[#e040fb]"
                  >
                    Home
                  </p>
                </div>
                <div className="flex gap-5">
                  <BsPeople
                    size={22}
                    className="text-[#e040fb] cursor-pointer"
                  />
                  <p
                    onClick={() => {
                      navigate("/people");
                    }}
                    className="font-bold text-[#6e009e] cursor-pointer hover:text-[#e040fb]"
                  >
                    People
                  </p>
                </div>
                <div className="flex gap-5">
                  <HiOutlineBuildingStorefront
                    size={22}
                    className="text-[#e040fb] cursor-pointer"
                  />
                  <p
                    onClick={() => {
                      navigate("/store");
                    }}
                    className="font-bold text-[#6e009e] cursor-pointer hover:text-[#e040fb]"
                  >
                    Store
                  </p>
                </div>
                <div className="flex gap-5">
                  <TiGroupOutline
                    size={22}
                    className="text-[#e040fb] cursor-pointer"
                  />
                  <p
                    onClick={() => {
                      navigate("/groupes");
                    }}
                    className="font-bold text-[#6e009e] cursor-pointer hover:text-[#e040fb]"
                  >
                    Groups
                  </p>
                </div>
                <div className="flex gap-5">
                  <IoSettingsOutline
                    size={22}
                    className="text-[#e040fb] cursor-pointer"
                  />
                  <p
                    onClick={() => {
                      navigate("/settings");
                    }}
                    className="font-bold text-[#6e009e] cursor-pointer hover:text-[#e040fb] "
                  >
                    Settings
                  </p>
                </div>
              </div>
            </div>

            {/* log out */}
            <div className="pb-5">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="text-white bg-[#6e009e] py-[10px] px-7 rounded-[20px] text-[13px] font-semibold cursor-pointer w-[100%] hover:border-solid border-2 border-[#6e009e] hover:text-[#6e009e] hover:bg-transparent"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
