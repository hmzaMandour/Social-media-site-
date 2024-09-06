import React from 'react';
import { useNavigate } from "react-router-dom";


import { MdOutlineDarkMode } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";




export const Navbar = () => {

    // const navigate = useNavigate();

    return (
        <>
        <div>
            <nav className='flex justify-between px-10 m-0 items-center  h-[13vh]'>
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
                />
            </div>

            </nav>
        </div>

        
        </>
        // <div>
        //     <nav className="flex bg-white justify-center h-[100px] items-center gap-[1200px]">
        //         <h1 className="text-5xl">Fri<span className="text-[#e040fb]">Dat</span></h1>
                
        //         <div className="h-[50px] w-[50px] bg-green-600 rounded-full">
        //             <div></div>
        //             <div className="h-[20px] w-[20px] flex justify-center items-center mt-[30px] ml-[30px] rounded-full bg-white"><IoIosArrowDown /> </div>

        //         </div>

        //     </nav>

        // </div>
    );
};


