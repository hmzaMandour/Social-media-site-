import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
export const Navbar = () => {
    return (
        <div>
            <nav className="flex bg-white justify-center h-[100px] items-center gap-[1200px]">
                <h1 className="text-5xl">Fri<span className="text-[#e040fb]">Dat</span></h1>
                
                <div className="h-[50px] w-[50px] bg-green-600 rounded-full">
                    <div></div>
                    <div className="h-[20px] w-[20px] flex justify-center items-center mt-[30px] ml-[30px] rounded-full bg-white"><IoIosArrowDown /> </div>

                </div>

            </nav>

        </div>
    );
};


