import React from 'react';
import images from '../../constant/images';


export const Signup = () => {
    return (
<div className='h-[100vh] w-[100vw] bg-white overflow-hidden flex justify-center items-center' >
<div className='h-[70vh] w-[60vw] flex signup-container justify-center items-center rounded-[30px] bg-white backdrop-blur-md'>
        <div className='h-[100%] w-[60%] rounded-l-[30px] flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl text-[#e040fb]'>Sign Up!</h1>
            <div><input className='h-[45px] shadow-border w-[300px] rounded-[20px]' placeholder='    FullName' type="text" /></div>
            <div><input className='h-[45px] shadow-border w-[300px] rounded-[20px]' placeholder='    E-mail' type="email" /></div>
            <div><input className='h-[45px] shadow-border w-[300px] rounded-[20px]' placeholder='    Password' type="password" /></div>
            <div><input className='h-[45px] text-[#9ca3af] pl-[15px] shadow-border w-[300px] rounded-[20px]' placeholder='    Date' type="date" /></div>
            <div className='h-[45px] shadow-border w-[300px] rounded-[20px] bg-white flex justify-center items-center text-[#9ca3af] gap-[130px]'>
                <label htmlFor="" id='gender'>Gender</label>
                <select name="" id="gender">
                    <option  value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className='overflow-hidden rounded-[20px]  h-[45px] w-[200px]'><button className='signup-button  h-[100%] w-[100%] rounded-[20px]  text-white'>Create Account</button></div>
        </div>

        <div className='h-[100%] w-[40%] rounded-r-[30px] signup-second-div' ></div>
    </div>
</div>
    );
};

