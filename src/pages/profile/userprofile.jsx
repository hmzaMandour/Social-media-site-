import React, { useContext } from "react";
import { BiEditAlt } from "react-icons/bi";
import { CgLivePhoto } from "react-icons/cg";
import { RiGalleryLine } from "react-icons/ri";
import { MdEvent } from "react-icons/md";

import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { dataContext } from "../../App";
import { CreatePost } from "../home/createposts";
import {  Post } from "../../pages/home/post"
import userPng from "../../assets/images/user.png"


export const UserProfile = () => {
  let { user, setUser } = useContext(dataContext);

  return (
    <>
      <div className="px-10 pb-10">
        <p className="font-bold text-[20px] pb-5">Edit Profile</p>

        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl p-5 bg-white ">
          <div className="userPic flex  items-center gap-5 border-b-[1px] border-gray-400 pb-10 pt-5 px-10">
            <img
              src={user.img || userPng}
              alt=""
              className=" w-[130px] h-[130px] rounded-[50%] "
            />

            <div>
              <p className="font-semibold pb-2">{user.name}</p>
              <div className=" flex gap-5 pb-3 ">
                <div className="flex flex-col  ">
                  <p className=" text-gray-600 text-[13px]">Followers</p>
                  <p className="text-[13px] font-semibold text-center">10</p>
                </div>
                <div className="flex flex-col">
                  <p className=" text-gray-600 text-[13px]">Following</p>
                  <p className="text-[13px] font-semibold text-center ">10</p>
                </div>
                <div className="flex flex-col">
                  <p className=" text-gray-600 text-[13px]">Posts</p>
                  <p className="text-[13px] font-semibold text-center ">
                    {user.posts.length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 px-10 ">
            <div className="flex gap-5 ">
              {/* left part */}
              <div className="flex flex-col gap-1 w-[40%]">
                <div className="border-solid border-[1px] border-gray-400 rounded-2xl p-5 w-[100%]  ">
                  <div className="flex justify-between ">
                    <p className="font-semibold text-[16px]">About</p>
                  </div>

                  <div className=" flex flex-col gap-2 pt-5 ">
                    <div className="flex items-center gap-3">
                      <p>
                        <GoLocation className="text-[#e040fb]" />
                      </p>
                      <p className="font-semibold text-[14px] ">Lives in : </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p>
                        <HiOutlineMail className="text-[#e040fb]" />
                      </p>
                      <p className="font-semibold text-[14px] ">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p>
                        <HiMiniDevicePhoneMobile className="text-[#e040fb]" />
                      </p>
                      <p className="font-semibold text-[14px] ">123456789</p>
                    </div>
                  </div>
                </div>

                <div className="bio pt-5 w-[100%]">
                  <div className="border-solid border-[1px] border-gray-400 rounded-2xl p-5  ">
                    <div className="flex justify-between">
                      <p className="font-semibold text-[16px]">Bio</p>

                      <button className=" flex items-center gap-1 border-solid border-[1px] border-gray-400 rounded-md py-2 px-5 font-semibold">
                        <BiEditAlt className="text-[#e040fb]" />
                        Edit
                      </button>
                    </div>

                    <div className="pt-5">
                      <textarea
                        name=""
                        id=""
                        className="bg-transparent w-[100%]"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* right part */}
              <div>
                

                {/* posts div */}
                <div className=" flex justify-between rounded-md border-solid border-[1px] border-gray-400 p-3 w-[100%]"><Post /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// import React, { useContext } from 'react';
// import { BiEditAlt } from 'react-icons/bi';
// import { CgLivePhoto } from 'react-icons/cg';
// import { RiGalleryLine } from 'react-icons/ri';
// import { MdEvent } from 'react-icons/md';

// import { HiOutlineMail } from "react-icons/hi";
// import { GoLocation } from 'react-icons/go';
// import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
// import { dataContext } from '../../App';
// import { CreatePost } from '../home/createposts';

// export const UserProfile = () => {
//     let obj = useContext(dataContext);
//     return (
//         <>
//             <div className='px-10 pb-10'>
//                 <p className='font-bold text-[20px] pb-5'>
//                     Edit Profile
//                 </p>

//                 <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl p-5 bg-white '>
//                     <div className='userPic flex  items-center gap-5 border-b-[1px] border-gray-400 pb-10 pt-5 px-10'>
//                         <img
//                             src={obj.img}
//                             alt=""
//                             className='bg-red-300 w-[130px] h-[130px] rounded-[50%] '
//                         />

//                         <div>
//                             <p className='font-semibold pb-2'>{obj.name}</p>
//                             <div className=' flex gap-5 pb-3 '>
//                                 <div className='flex flex-col  '>
//                                     <p className=' text-gray-600 text-[13px]'>Followers</p>
//                                     <p className='text-[13px] font-semibold text-center'>10</p>
//                                 </div>
//                                 <div className='flex flex-col'>
//                                     <p className=' text-gray-600 text-[13px]'>Following</p>
//                                     <p className='text-[13px] font-semibold text-center '>10</p>
//                                 </div>
//                                 <div className='flex flex-col'>
//                                     <p className=' text-gray-600 text-[13px]'>Posts</p>
//                                     <p className='text-[13px] font-semibold '>{obj.posts.lenght}</p>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     <div className='pt-10 px-10 '>
//                         <div className='flex gap-3 '>
//                             {/* left part */}
//                             <div className='flex flex-col gap-1 w-[40%]'>
//                                 <div className='border-solid border-[1px] border-gray-400 rounded-2xl p-5 w-[100%]  '>
//                                     <div className='flex justify-between '>
//                                         <p className='font-semibold text-[16px]' >
//                                             About
//                                         </p>
//                                     </div>

//                                     <div className=' flex flex-col gap-2 pt-5 '>
//                                         <div className='flex items-center gap-3'>
//                                             <p><GoLocation className='text-[#e040fb]'/></p>
//                                             <p className='font-semibold text-[14px] '>Lives in : </p>

//                                         </div>
//                                         <div className='flex items-center gap-3'>
//                                             <p><HiOutlineMail className='text-[#e040fb]'/></p>
//                                             <p className='font-semibold text-[14px] '>name@gmail.com</p>

//                                         </div>
//                                         <div className='flex items-center gap-3'>
//                                             <p><HiMiniDevicePhoneMobile className='text-[#e040fb]'/></p>
//                                             <p className='font-semibold text-[14px] '>123456789</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className='bio pt-5 w-[100%]'>
//                                     <div className='border-solid border-[1px] border-gray-400 rounded-2xl p-5  '>
//                                         <div className='flex justify-between'>
//                                             <p className='font-semibold text-[16px]' >
//                                                 Bio
//                                             </p>

//                                             <button
//                                                 className=' flex items-center gap-1 border-solid border-[1px] border-gray-400 rounded-md py-2 px-5 font-semibold'>
//                                                 <BiEditAlt className='text-[#e040fb]'/>Edit
//                                             </button>
//                                         </div>

//                                         <div className='pt-5'>
//                                             <textarea
//                                                 name=""
//                                                 id=""
//                                                 className='bg-transparent w-[100%]'>
//                                             </textarea>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* right part */}
//                            <CreatePost/>

//                                 {/* posts div */}

//                             </div>
//                         </div>

//                     </div>

//                 </div>

//         </>
//     );
// };
