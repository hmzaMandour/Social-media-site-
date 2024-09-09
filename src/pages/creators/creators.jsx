import React, { useState } from 'react';
import { VscVerifiedFilled } from "react-icons/vsc";
import { CreatorsData } from '../../constant';
import { useNavigate } from "react-router-dom";

export const Creators = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    return (
        <>
        

        <div className='h-[450px] w-[25vw] rounded-[20px] overflow-hidden bg-white  '>
            <h1 className='text-[15px] font-semibold  py-5 px-6'>Content Creators:</h1>
            <div onChange={(e) => setSearch(e.target.value)} className='w-[100%] flex justify-center items-center'>
                <input placeholder='Search' className='h-[45px] w-[250px] rounded-full pl-3 border-[1px]' type="search" />
            </div>
            {
                CreatorsData.creators.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase());
                }).map((e,i) => (
                    <div onClick={() => navigate(`/${i}`)} key={e.id} className='flex justify-center items-center flex-col gap-[12px] mt-2'>
                        <div className='h-[60px] w-[95%] rounded-[10px] flex items-center'>
                            <div className='h-[45px] relative w-[45px] ml-5 rounded-full flex items-center justify-center'>
                                <img src={e.image} alt="" className='h-[45px] w-[45px] rounded-full object-cover' />
                                <div className='text-xl absolute ml-[50px] mb-[30px] text-blue-600 bg-white w-[20px] h-[20px] flex items-center justify-center rounded-full'>
                                    <VscVerifiedFilled />
                                </div>
                            </div>
                            <div className='pl-[20px]'>
                                <p className='font-bold text-[14px]'>{e.name}</p>
                                <p className='text-sm text-gray-300'>@{e.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
};