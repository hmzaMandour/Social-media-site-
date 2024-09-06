import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdLogout, MdAdminPanelSettings, MdDarkMode } from "react-icons/md";


import { MdOutlineDarkMode } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";




export const Navbar = () => {
    const [modal, setModal] = useState(false);
    const mymodal = () => {
        setTimeout(() => {
          setModal(mdl => !mdl);
        }, 100);
      };

    // const navigate = useNavigate();

    return (
        <>
        <div>
            <nav className='flex gap-[1100px] px-10 m-0 items-center  h-[13vh]'>
            <div className="logo m-0">
                <p className="font-bold m-0 text-[28px] cursor-pointer text-[#6e009e]">
                    FRIDAT<span className="text-[#e040fb] text-3xl">.</span>
                </p>
            </div>

            <div  className='flex  items-center gap-5'>
                <MdOutlineDarkMode  size={24} className="text-[#e040fb] cursor-pointer" />
                <MdNotificationsNone size={24} className="text-[#e040fb] cursor-pointer" />
                
                <img  
                onClick={mymodal}
                    src="" 
                    alt="" 
                    className='w-10 h-10 bg-red-200 rounded-[50%] cursor-pointer' 
                    
                />
                {
        modal && (
          <div className="flex justify-center items-center absolute top-[70px] right-[58px] flex-col">
            <div className="epsi bg-white"></div>
            <div className="bg-white opsi h-[400px] w-[250px] rounded-[20px] flex justify-center items-center flex-col gap-2">
              <div className="h-[60px] w-[60px] bg-red-500 rounded-full"></div>
              <div className="h-[60px] w-[80%]  hover:bg-[#e040fb] rounded-[20px] flex justify-center items-center gap-[85px]">
                <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#6e009e]"><CgProfile /></div>
                <div className="text-[#e2e4e8]">Profile</div>
              </div>
              <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#e040fb] rounded-[20px] flex justify-center items-center gap-[55px]">
                <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#6e009e]"><MdDarkMode /></div>
                <div className="text-[#e2e4e8]">DarkMode</div>
              </div>
              <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#e040fb] rounded-[20px] flex justify-center items-center gap-[70px]">
                <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#6e009e]"><MdAdminPanelSettings /></div>
                <div className="text-[#e2e4e8]">Settings</div>
              </div>
              <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#e040fb] rounded-[20px] flex justify-center items-center gap-[70px]">
                <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#6e009e]"><MdLogout /></div>
                <div className="text-[#e2e4e8]">LogOut</div>
              </div>
            </div>
          </div>
        )
      }
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


