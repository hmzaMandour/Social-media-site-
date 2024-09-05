import React from "react";
import images from "../../constant/images";

import { CiDark } from "react-icons/ci";

export const SignIn = () => {
  return (   
    <>
    <nav className="flex justify-between pt-5 px-10 m-0 items-center ">
        <div className="logo m-0">
            <p className="font-bold m-0 text-[28px] cursor-pointer">
                FRIDAT
            </p>
        </div>
        <div>
          <button>
            <CiDark size={24} className="text-[#e040fb]" />
          </button>
        </div>
    </nav>
    

    <div className="h-[85vh] w-[100vw] bg-white overflow-hidden flex justify-center items-center">
      <div className="h-[70vh] w-[60vw] flex signup-container justify-center items-center rounded-[30px] bg-white backdrop-blur-md">
        <div className="h-[100%] w-[60%] rounded-l-[30px] flex flex-col items-center justify-center gap-[2vh]">
          <h1 className="text-2xl text-[#e040fb] font-bold pb-5">Sign in!</h1>

          <div>
            <input
              className="h-[45px] shadow-border w-[300px] rounded-[20px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              placeholder="E-mail"
              type="email"
            />
          </div>
          <div>
            <input
              className="h-[45px] shadow-border w-[300px] rounded-[20px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="flex gap-2">
            <input
              className="h-[45px] shadow-border w-[195px] rounded-[20px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              placeholder="Verify Code"
              type="text"
            />
            <button className="h-[45px] text-[#e040fb]   w-[100px] rounded-[20px] text-[14px] font-semibold cursor-pointer underline">
              Send Code
            </button>
          </div>
          <div className="overflow-hidden rounded-[20px]  h-[45px] w-[200px] mt-5">
            <button className="signup-button text-white h-[100%] w-[100%] rounded-[20px] text-[13px] font-semibold cursor-pointer hover:bg-[#ea80fc]">
              SIGN IN
            </button>
          </div>
        </div>

        <div className="h-[100%] w-[40%] rounded-r-[30px] signup-second-div">
          <img src={images.loginImg} alt="" className="w-[100%] h-[100%] rounded-r-[30px] object-cover" />
        </div>
      </div>
    </div>
  </> 
  );
};
