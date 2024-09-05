import React from "react";
import images from "../../constant/images";

import { CiDark } from "react-icons/ci";


export const Signup = () => {
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
      <div className="h-[70vh] w-[60vw] flex signup-container justify-center items-center rounded-[30px] bg-white backdrop-blur-md  ">
        <div className="h-[100%] w-[60%] rounded-l-[30px] flex flex-col items-center justify-center gap-[2vh]">
          <h1 className="text-2xl text-[#e040fb] font-bold pt-3 pb-2 ">Sign Up!</h1>
          <div>
            <input
              className="h-[45px] shadow-border w-[300px] rounded-[20px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] "
              placeholder="FullName"
              type="text"
            />
          </div>
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
          <div>
            <input
              className="h-[45px] text-[#9ca3af] pl-[15px] shadow-border w-[300px] rounded-[20px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              placeholder="Date"
              type="date"
            />
          </div>
          <div className="h-[45px] shadow-border w-[300px] rounded-[20px] bg-white flex justify-center items-center text-[#9ca3af] gap-[130px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <label htmlFor="" id="gender">
              Gender
            </label>
            <select name="" id="gender" className="">
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="overflow-hidden rounded-[20px]  h-[45px] w-[200px]">
            <button className="signup-button  h-[100%] w-[100%] rounded-[20px]  text-white   text-[14px] font-semibold cursor-pointer hover:bg-[#ea80fc]">
              Create Account
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
