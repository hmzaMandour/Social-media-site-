import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { CgLivePhoto } from 'react-icons/cg';
import { MdLiveTv } from 'react-icons/md';
import { RiGalleryLine } from 'react-icons/ri';
import { MdEvent } from 'react-icons/md';

const UserProfile = () => {
    return (
        <>
            <div className='p-10'>
                <p className='font-bold text-[20px] pb-5'>Edit Profile</p>
                <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl p-5'>
                    <div className='userPic flex  items-center gap-5 border-b-[1px] border-gray-400 pb-10 pt-5 px-10'>
                        <img src="" alt="" className='bg-red-300 w-[100px] h-[100px] rounded-[50%] ' />
                        <div>
                            <button className='border-solid border-[1px] border-gray-400 rounded-md py-2 px-5 font-semibold'>Upload new photo</button>
                            <p className='pt-3 text-gray-600 text-[14px]'>At least 800 * 800 px recommended.</p>
                            <p className='text-gray-600 text-[14px]'>JPG or PNG in allowed</p>
                        </div>
                    </div>

                    <div className='pt-10 px-10 '>
                        <div className='flex gap-5 '>
                            {/* left part */}
                            <div className='flex flex-col gap-1 w-[30%]'>
                                <div className='border-solid border-[1px] border-gray-400 rounded-2xl p-5 w-[100%]  '>
                                    <div className='flex justify-between '>
                                        <p className='font-semibold text-[16px]' >Personal Info</p>
                                        <button className=' flex items-center gap-1 border-solid border-[1px] border-gray-400 rounded-md py-2 px-5 font-semibold'><BiEditAlt className='text-[#e040fb]'/>Edit</button>
                                    </div>


                                    <div className=' flex flex-col gap-4 pt-5'>
                                        <div>
                                            <p>Full Name</p>
                                            <input type="text" value="name" className='bg-transparent font-semibold w-[100%]' />
                                        </div>
                                        <div>
                                            <p>Email</p>
                                            <input type="text" value="name@gmail.com" className='bg-transparent font-semibold w-[100%]' />
                                        </div>
                                        <div>
                                            <p>Phone</p>
                                            <input type="text" value="12345678899" className='bg-transparent font-semibold w-[100%]' />
                                        </div>
                                    </div>
                                </div>

                                <div className='bio pt-5 w-[100%]'>
                                    <div className='border-solid border-[1px] border-gray-400 rounded-2xl p-5  '>
                                        <div className='flex justify-between'>
                                            <p className='font-semibold text-[16px]' >Bio</p>
                                            <button className=' flex items-center gap-1 border-solid border-[1px] border-gray-400 rounded-md py-2 px-5 font-semibold'><BiEditAlt className='text-[#e040fb]'/>Edit</button>
                                        </div>
                                        <div className='pt-5'>
                                            <textarea name="" id=""  className='bg-transparent w-[100%]'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            {/* right part */}
                            <div className='flex flex-col gap-5 w-[70%]'>
                                <div className='border-solid border-[1px] border-gray-400 rounded-2xl p-5 w-[100%] '>
                                    <div className='flex gap-3 border-b-[1px] pb-5'>
                                        <img src="" alt="" className='w-10 h-10 bg-red-200 rounded-[50%]' />
                                        <textarea name="" id="" placeholder='Whats on your mind' className='bg-gray-100 w-[100%] rounded-3xl px-5 py-2' ></textarea>
                                        {/* <input type="text" placeholder='Whats on your mind' className='bg-gray-100 w-[100%] rounded-3xl px-5' /> */}
                                    </div>

                                    <div className='flex justify-between px-5 pt-5'>
                                        <div className='flex gap-2 items-center' >
                                            <p><CgLivePhoto className='text-[#e040fb]'/></p>
                                            <p className='font-semibold'>Live Video</p>
                                        </div>
                                        <div className='flex gap-2 items-center' >
                                            <p><RiGalleryLine className='text-[#e040fb]'/></p>
                                            <p className='font-semibold'>Photo / Video</p>
                                        </div>
                                        <div className='flex gap-2 items-center' >
                                            <p><MdEvent className='text-[#e040fb]'/></p>
                                            <p className='font-semibold'>Life event</p>
                                        </div>
                                    </div>
                                </div>


                                {/* posts div */}
                                <div className=' flex justify-between rounded-md border-solid border-[1px] border-gray-400 p-3 w-[100%]'>
                                </div>

                            </div>
                        </div>


                    </div>


                    
                </div>
            </div>
            

            
        </>
    );
};

export default UserProfile;