import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlUserFollow } from 'react-icons/sl';
import { IoLocationOutline } from 'react-icons/io5';
import { peoples } from '../../constant/peaple';
import { Navbar } from '../../layouts/navBar';
import { Side } from '../sidebar/sidebar';
import { MdDone } from "react-icons/md";
import { PeoplesData } from '../../constant';


export const People = () => {
  const navigate = useNavigate();
  const [iconStates, setIconStates] = useState({});

  const toggleIcon = (index) => {
    setIconStates(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <>
      <div>
        <Navbar />
        <div className='flex gap-4 bg-[#6f009e09] pt-5 pl-10'>
          <div>
            <Side />
          </div>
          <div className='w-[80%]'>
            <div className='pb-10'>
              <p className='font-bold text-[20px] pb-5'>People to follow</p>
              {/* the div of all the cards */}
              <div className='flex flex-wrap gap-3'>
                {PeoplesData.peoples.map((e, i) => (
                  <div
                    key={e.id} 
                    className=' shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] inline-block rounded-lg px-3 py-5 w-[17.5vw] bg-white hover:scale-[1.05] hover:duration-300'
                  >
                    <div className='flex justify-end '>
                      <button
                        onClick={() => toggleIcon(i)} 
                        className='cursor-pointer'
                      >
                        {iconStates[i] ? (
                          <MdDone size={17} className='text-green-600' />
                        ) : (
                          <SlUserFollow size={17} className='text-[#e040fb]' />
                        )}
                      </button>
                    </div>
                    <div className='flex flex-col justify-center items-center px-10 pt-2 '>
                      <div onClick={() => navigate(`/people/${i}`)} className=''>
                        <img
                          src={e.image}
                          alt=""
                          className='w-16 h-16 bg-red-200 rounded-[50%] cursor-pointer object-cover'
                        />
                      </div>

                      <div className='flex flex-col text-center justify-center gap-1 pt-3'>
                        <p className='font-semibold'>{e.name}</p>
                        <p className='pb-5 text-gray-600 text-[12px] flex items-center justify-center gap-1'>
                          <IoLocationOutline /> {e.location}
                        </p>
                      </div>
                      <div className='border-t-[1px] flex gap-5 pt-2'>
                        <div className='flex flex-col justify-center items-center'>
                          <p className='text-gray-600 text-[12px]'>Followers</p>
                          <p className='text-[13px] font-semibold'>{e.followers}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                          <p className='text-gray-600 text-[12px]'>Following</p>
                          <p className='text-[13px] font-semibold'>{e.following}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
