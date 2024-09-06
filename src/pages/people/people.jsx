import React from 'react';
import { SlUserFollow } from 'react-icons/sl';
import { IoLocationOutline } from "react-icons/io5";

const People = () => {
    return (
        <>
            <div className='p-10'>
                <p className='font-bold text-[20px] pb-10'>People to follow</p>
                {/* the div of all the cards */}
                <div className='flex flex-wrap'>

                    {/* card */}
                    <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  inline-block rounded-lg px-3  py-5'>
                        <div className='flex justify-end '>
                            <button className='cursor-pointer'>
                                <SlUserFollow size={15} className='text-[#e040fb] '/>
                            </button>
                        </div>
                        <div className='flex flex-col justify-center items-center px-10 pt-2 '>
                            <div className=''>
                                <img 
                                src="" 
                                alt="" 
                                className='w-16 h-16 bg-red-200 rounded-[50%] cursor-pointer'
                                />
                            </div>

                            <div className='flex flex-col text-center justify-center gap-1 pt-3'>
                                <p className='font-semibold'>nameeeee</p>
                                <p className='pb-5 text-gray-600 text-[12px] flex items-center justify-center gap-1'>
                                    <IoLocationOutline/> Casablanca
                                </p>
                                {/* <button 
                                    className=' flex items-center gap-2 text-white bg-[#6e009e] py-[8px] px-7 rounded-[20px] text-[13px] font-semibold cursor-pointer hover:bg-[#b535eb]'>
                                    <SlUserFollow/> Follow
                                </button> */}
                            </div>
                            <div className='border-t-[1px] flex gap-5 pt-2'>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className=' text-gray-600 text-[12px]'>Followers</p>
                                    <p className='text-[13px] font-semibold '>1239</p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className=' text-gray-600 text-[12px]'>Following</p>
                                    <p className='text-[13px] font-semibold '>129</p>
                                </div>
                            </div>

                        </div>
                        
                        

                    </div>
                </div>
            </div>
        </>
    );
};

export default People;