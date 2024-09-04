import React from 'react';
import { BiEditAlt } from 'react-icons/bi';

const UserProfile = () => {
    return (
        <>
            <div className='p-10'>
                <p className='font-bold text-[20px] pb-5'>Edit Profile</p>
                <div className='bg-gray-100 rounded-2xl p-5'>
                    <div className='userPic flex  items-center gap-5 border-b-[1px] border-gray-400 pb-10'>
                        <img src="" alt="" className='bg-red-300 w-[100px] h-[100px] rounded-[50%] ' />
                        <div>
                            <button className='border-solid border-[1px] border-gray-400 rounded-md py-2 px-5 font-semibold'>Upload new photo</button>
                            <p className='pt-3 text-gray-600 text-[14px]'>At least 800 * 800 px recommended.</p>
                            <p className='text-gray-600 text-[14px]'>JPG or PNG in allowed</p>
                        </div>
                    </div>

                    <div className='pt-10 px-10'>
                        <div className='border-solid border-[1px] border-gray-400 rounded-2xl p-5  '>
                            <div className='flex justify-between'>
                                <p className='font-semibold text-[16px]' >Personal Info</p>
                                <button className=' flex items-center gap-1 border-solid border-[1px] border-gray-400 rounded-md py-2 px-5 font-semibold'><BiEditAlt/>Edit</button>
                            </div>


                            <div className='flex justify-between pt-5'>
                                <div>
                                    <p>Full Name</p>
                                    <input type="text" value="name" className='bg-transparent font-semibold' />
                                </div>
                                <div>
                                    <p>Email</p>
                                    <input type="text" value="name@gmail.com" className='bg-transparent font-semibold' />
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <input type="text" value="12345678899" className='bg-transparent font-semibold' />
                                </div>
                            </div>


                           

                    </div>

                    <div className='bio pt-5'>
                        <div className='border-solid border-[1px] border-gray-400 rounded-2xl p-5  '>
                            <div className='flex justify-between'>
                                <p className='font-semibold text-[16px]' >Bio</p>
                                <button className=' flex items-center gap-1 border-solid border-[1px] border-gray-400 rounded-md py-2 px-5 font-semibold'><BiEditAlt/>Edit</button>
                            </div>
                            <div className='pt-5'>
                                <textarea name="" id=""  className='bg-transparent w-[100%]'></textarea>
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