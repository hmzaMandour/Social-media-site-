import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdLogout, MdAdminPanelSettings, MdDarkMode } from "react-icons/md";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";

import images from "../constant/images";

import { IoSearch } from "react-icons/io5";
import { dataContext } from "../App";

export const Navbar = () => {
  let obj = useContext(dataContext);
  let navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const mymodal = () => {
    setTimeout(() => {
      setModal((mdl) => !mdl);
    }, 100);
  };

  // const navigate = useNavigate();

  return (
    <>
      <div>
        <nav className="flex justify-center bg-white gap-[216px] px-10 m-0 items-center  h-[13vh] ">
          <div className="logo m-0">
            <img
              className="w-[136px] mr-[152px] cursor-pointer "
              src={images.fridat}
              alt=""
            />
          </div>

          <div>
            <div className="relative">
              <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#e040fb] " />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-full w-[35vw] focus:outline-none "
              />
            </div>
          </div>

          <div className="flex  items-center gap-9">
            <img
              onClick={mymodal}
              src={obj.img}
              alt=""
              className="w-10 h-10 bg-black rounded-[50%] cursor-pointer"
            />
            <div className="flex gap-5">
            <MdOutlineDarkMode
              size={24}
              className="text-[#e040fb] cursor-pointer"
            />
            <MdNotificationsNone
              size={24}
              className="text-[#e040fb] cursor-pointer"
            />
            </div>

            {modal && (
              <div className="flex justify-center items-center absolute top-[70px] right-[70px] flex-col">
                <div className="epsi bg-[#933cb9]"></div>
                <div className="bg-[#933cb9] z-30 opsi h-[400px] w-[250px] rounded-[20px] flex justify-center items-center flex-col gap-2">
                  <div className="h-[60px] w-[60px] bg-red-500 rounded-full">
                    <img
                      src={obj.img}
                      alt=""
                      className="h-[60px] w-[60px] bg-black rounded-full mr-4"
                    />
                  </div>
                  <div
                    onClick={() => {
                      navigate("/userpage");
                    }}
                    className="h-[60px] w-[80%]  hover:bg-[#e040fb] rounded-[20px] flex justify-center items-center gap-[85px]"
                  >
                    <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#6e009e]">
                      <CgProfile />
                    </div>
                    <div className="text-[#e2e4e8]">Profile</div>
                  </div>
                  <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#e040fb] rounded-[20px] flex justify-center items-center gap-[55px]">
                    <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#6e009e]">
                      <MdDarkMode />
                    </div>
                    <div className="text-[#e2e4e8]">DarkMode</div>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/settings");
                    }}
                    className="h-[60px] w-[80%] bg-[#] hover:bg-[#e040fb] rounded-[20px] flex justify-center items-center gap-[70px]"
                  >
                    <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#6e009e]">
                      <MdAdminPanelSettings />
                    </div>
                    <div className="text-[#e2e4e8]">Settings</div>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/");
                    }}
                    className="h-[60px] w-[80%] bg-[#] hover:bg-[#e040fb] rounded-[20px] flex justify-center items-center gap-[70px]"
                  >
                    <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#6e009e]">
                      <MdLogout />
                    </div>
                    <div className="text-[#e2e4e8]">LogOut</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
