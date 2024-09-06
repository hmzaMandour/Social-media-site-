import { useState } from "react";
import React from 'react';
import { CgProfile } from "react-icons/cg";
import { MdLogout, MdAdminPanelSettings, MdDarkMode } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

export const Friend =() =>{
  const [modal, setModal] = useState(false);
  const [iconStates, setIconStates] = useState({});

  const mymodal = () => {
    setTimeout(() => {
      setModal(mdl => !mdl);
    }, 100);
  };

  const friends = {
    friend1: {
      name: 'Alice',
      image: 'https://img.freepik.com/free-psd/creative-portrait-design_23-2150195210.jpg',
      city: 'New York'
    },
    friend2: {
      name: 'Bob',
      image: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg',
      city: 'Los Angeles'
    },
    friend3: {
      name: 'Charlie',
      image: 'https://as2.ftcdn.net/v2/jpg/05/44/80/45/1000_F_544804573_hlQvDxgvkHEK5vtWlkRX1BwKYyMETm9R.jpg',
      city: 'Chicago'
    }
  };

  const valuesArray = Object.entries(friends); // Change to entries to include key for tracking

  const toggleIcon = (index) => {
    setIconStates(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="h-[100%]  w-[100%] flex justify-center items-center flex-col relative">
      <button onClick={mymodal} className="h-[50px] w-20 bg-red-500 rounded-full">helll</button>
      {
        modal && (
          <div className="flex justify-center items-center absolute top-[50px] flex-col">
            <div className="epsi bg-[#3a3b3c]"></div>
            <div className="bg-[#3a3b3c] opsi h-[400px] w-[250px] rounded-[20px] flex justify-center items-center flex-col gap-2">
              <div className="h-[60px] w-[60px] bg-red-500 rounded-full"></div>
              <div className="h-[60px] w-[80%]  hover:bg-[#5d5f61] rounded-[20px] flex justify-center items-center gap-[85px]">
                <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#4e4f50]"><CgProfile /></div>
                <div className="text-[#e2e4e8]">Profile</div>
              </div>
              <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#5d5f61] rounded-[20px] flex justify-center items-center gap-[55px]">
                <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#4e4f50]"><MdDarkMode /></div>
                <div className="text-[#e2e4e8]">DarkMode</div>
              </div>
              <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#5d5f61] rounded-[20px] flex justify-center items-center gap-[70px]">
                <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#4e4f50]"><MdAdminPanelSettings /></div>
                <div className="text-[#e2e4e8]">Settings</div>
              </div>
              <div className="h-[60px] w-[80%] bg-[#] hover:bg-[#5d5f61] rounded-[20px] flex justify-center items-center gap-[70px]">
                <div className="text-2xl text-[#e7e9ec] p-2 rounded-full bg-[#4e4f50]"><MdLogout /></div>
                <div className="text-[#e2e4e8]">LogOut</div>
              </div>
            </div>
          </div>
        )
      }
      <div className="w-[280px] snapa overflow-x-auto flex gap-2">
        {
          valuesArray.map(([key, e], index) => {
            const isFollowing = iconStates[index] || false; // Default to false if not set
            return (
              <div key={key} className='ml-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mt-[100px] justify-center items-center  inline-block rounded-lg px-3  py-5'>
                <div className='flex justify-end '>
                  <button onClick={() => toggleIcon(index)} className='cursor-pointer'>
                    {isFollowing ? (
                      <FaUserFriends size={25} className='text-green-600' />
                    ) : (
                      <SlUserFollow size={25} className='text-[#e040fb]' />
                    )}
                  </button>
                </div>
                <div className='flex flex-col justify-center items-center px-10 pt-2 '>
                  <div className=''>
                    <img
                      src={e.image}
                      alt=""
                      className='w-16 h-16 bg-red-200 rounded-[50%] cursor-pointer'
                    />
                  </div>
                  <div className='flex flex-col text-center justify-center gap-1 pt-3'>
                    <p className='font-semibold'>{e.name}</p>
                    <p className='pb-5 text-gray-600 text-[12px] flex items-center justify-center gap-1'>
                      <IoLocationOutline /> {e.city}
                    </p>
                  </div>
                  <div className='border-t-[1px] flex gap-5 pt-2'>
                    <div className='flex flex-col justify-center items-center'>
                      <p className='text-gray-600 text-[12px]'>Followers</p>
                      <p className='text-[13px] font-semibold '>1239</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                      <p className='text-gray-600 text-[12px]'>Following</p>
                      <p className='text-[13px] font-semibold '>129</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}


