import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../constant/images";

import { WiDaySunny } from "react-icons/wi";
import { CiDark } from "react-icons/ci";

export const AboutSocial = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        {/* hero about */}
        <div
          className={
            darkMode ? "bg-black text-white  h-screen" : "bg-white text-black"
          }
        >
          <div className="flex gap-10   pt-8 px-10 ">
            <div className="left-part flex flex-col gap-20">
              {/* nav bar */}
              <nav className="flex justify-between pt-5 m-0 items-center">
                <div className="logo m-0">
                  <p className="font-bold m-0 text-[28px] cursor-pointer">
                    FRIDAT
                  </p>
                </div>
                <div className="buttons flex gap-2">
                  <button onClick={toggleDarkMode} className="cursor-pointer">
                    {darkMode ? (
                      <WiDaySunny size={24} className="text-[#e040fb]" />
                    ) : (
                      <CiDark size={24} className="text-[#e040fb]" />
                    )}
                  </button>
                  <button onClick={() => { navigate("/signIn") }} className="login-btn text-white bg-[#e040fb] py-[8px] px-7 rounded-[20px] text-[13px] font-semibold cursor-pointer hover:bg-[#ea80fc]">
                    SIGN IN
                  </button>
                  <button onClick={() => { navigate("/signUp") }} className="signup-btn  text-white bg-[#e040fb] py-[8px] px-7 rounded-[20px] text-[13px] font-semibold cursor-pointer  hover:bg-[#ea80fc]">
                    SIGN UP
                  </button>
                </div>
              </nav>

              <div>
                <p className="text-[#e040fb] text-[12px] font-semibold m-0">
                  NEW PLATFORM
                </p>
                <h1 className="text-[50px] font-bold w-[20vw] m-0 pb-4">
                  Your Next Social Life.
                </h1>
                <p className=" pb-5">
                  Welcome to your new social media platform, where the focus is
                  on what actually matters. Connect with meaningful content and
                  people, and enjoy an online experience that values substance
                  over noise. Join us and make your time online truly
                  worthwhile.
                </p>
                <p className="text-[#e040fb] text-[12px] font-semibold underline cursor-pointer">
                  Know More about us...
                </p>
                
              </div>
            </div>

            <div className="right-part">
              <img
                src={images.home}
                className="rounded-3xl w-[110vw] h-[90vh] shadow-[0_10px_20px_rgba(224,64,251,_0.5)] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
