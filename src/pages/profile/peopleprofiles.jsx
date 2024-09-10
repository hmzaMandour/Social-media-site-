import React, { useState } from 'react';
import { BiMessage } from 'react-icons/bi';
import { SlUserFollow } from 'react-icons/sl';
import { GoLocation } from 'react-icons/go';
import { useParams } from 'react-router-dom';
import { PeoplesData } from '../../constant';
import { MdDone } from 'react-icons/md';
import { Navbar } from '../../layouts/navBar';
import { Side } from '../sidebar/sidebar';

const PeoplesProfile = () => {
    const [iconStates, setIconStates] = useState({});
    const toggleIcon = (index) => {
        setIconStates(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const { id } = useParams();
    const index = parseInt(id, 10);
    const ppl = PeoplesData.peoples[index];

    
    if (!ppl) {
        return <div>Profile not found</div>;
    }

    return (
        <>
        <div>
            <Navbar/>
            <div className='flex pt-5 pl-10'>
                <div>
                    <Side/>
                </div>
                <div>
                    <div className='p-10'>
            <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl p-5 bg-white'>
                {/* top part */}
                <div className='userPic flex items-center gap-5 border-b-[1px] border-gray-400 pb-10 pt-5 px-10'>
                    <img 
                        src={ppl.image} 
                        alt={`${ppl.name}'s profile`} 
                        className='bg-red-300 w-[130px] h-[130px] rounded-[50%] object-cover bg-center' 
                    />

                    {/* info div */}
                    <div>
                        <p className='font-semibold'>
                            {ppl.name}
                        </p>
                        <div className='flex gap-5 pb-3'>
                            <div className='flex flex-col'>
                                <p className='text-gray-600 text-[13px]'>Followers</p>
                                <p className='text-[13px] font-semibold'>{ppl.followers} </p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-gray-600 text-[13px]'>Following</p>
                                <p className='text-[13px] font-semibold'>{ppl.following} </p>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <button 
                                onClick={() => toggleIcon(index)} 
                                className='flex items-center gap-2 m-0 text-white bg-[#6e009e] py-[8px] px-7 rounded-[20px] text-[13px] font-semibold cursor-pointer hover:bg-[#b535eb]'
                            >
                                {iconStates[index] ? (
                                    <div className='flex gap-2'><MdDone size={19} className='text-green-600' />Sent</div>
                                ) : (
                                    <div className='flex gap-2'><SlUserFollow size={17} className='text-white' />Add Friend</div>
                                )}
                            </button>
                            <button 
                                className='flex items-center gap-2 m-0 text-white bg-[#6e009e] py-[8px] px-7 rounded-[20px] text-[13px] font-semibold cursor-pointer hover:bg-[#b535eb]'
                            >
                                <BiMessage /> Message
                            </button>
                        </div>
                    </div>
                </div>

                {/* links */}
                <div className='pt-10 px-10'>
                    <ul className='flex gap-8 font-semibold'>
                        <li className='text-[#6e009e] border-b-[1px] cursor-pointer'>
                            Posts
                        </li>
                        {/* <li><a href="">About</a></li> */}
                        {/* <li><a href="">Friends</a></li> */}
                        {/* <li><a href="">Photos</a></li> */}
                        {/* <li><a href="">Videos</a></li> */}
                    </ul>
                </div>

                <div className='pt-10 px-10 flex gap-5'>
                    {/* left part */}
                    <div className='flex flex-col gap-5 w-[30%]'>
                        <div className='bg-white rounded-md border-solid border-[1px] border-gray-400 p-3 w-[100%]'>
                            <p className='font-bold pb-2'>Intro</p>
                            <p className='flex items-center gap-2'>
                            <GoLocation /> Lives in <span className='font-semibold'>{ppl.location}</span>
                            </p>
                        </div>

                        {/* gallery div */}
                        <div className='bg-white rounded-md border-solid border-[1px] border-gray-400 p-3 w-[100%]'>
                            <div className='flex justify-between'> 
                                <p className='font-bold pb-2'>Photos</p>
                                <p className='text-[#ea80fc] underline text-[14px] cursor-pointer'>
                                    See all photos
                                </p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 justify-center'>
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />   
                                </div>
                                <div className='flex gap-2 justify-center'>
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />   
                                </div>
                                <div className='flex gap-2 justify-center'>
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />
                                    <img src={ppl.image} alt="Gallery" className='w-[32%] h-[32%] rounded-md' />   
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right part */}
                    <div className='flex flex-col gap-5 w-[70%]'>
                        <div className='rounded-md border-solid border-[1px] border-gray-400 p-3 w-[100%]'>
                            <p className='font-bold pb-2'>Bio</p>
                            <p>{ppl.description}</p>
                        </div>

                        <div className='flex justify-between bg-white rounded-md border-solid border-[1px] border-gray-400 p-3 w-[100%]'>
                            <p className='font-bold'>Posts</p>
                            <button className='flex m-0 gap-2 text-[#ea80fc] underline text-[14px]'>
                                Filters
                            </button>
                        </div>

                        {/* posts div */}
                        <div className='flex justify-between rounded-md border-solid border-[1px] border-gray-400 p-3 w-[100%]'>
                            {/* Post content here */}
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>

            </div>
        </div>

        </>

    );
};

export default PeoplesProfile;