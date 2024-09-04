import React from 'react';

export const SignIn = () => {
    return (
<div className='h-[100vh] w-[100vw] bg-white overflow-hidden flex justify-center items-center'>
    <div className='h-[70vh] w-[60vw] flex signup-container justify-center items-center rounded-[30px] bg-white backdrop-blur-md'>
        <div className='h-[100%] w-[60%] rounded-l-[30px] flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl text-[#e040fb]'>Sign in!</h1>

            <div><input className='h-[45px] shadow-border w-[300px] rounded-[20px]' placeholder='    E-mail' type="email" /></div>
            <div><input className='h-[45px] shadow-border w-[300px] rounded-[20px]' placeholder='    Password' type="password" /></div>
            <div className='flex gap-2'><input className='h-[45px] shadow-border w-[200px] rounded-[20px]' placeholder='    Verify Code' type="text" /><button className='h-[45px] bg-[#e040fb] text-white  w-[100px] rounded-[20px]'>Send Code</button></div>
            <div className='overflow-hidden rounded-[20px]  h-[45px] w-[200px]'><button className='signup-button text-white h-[100%] w-[100%] rounded-[20px]'>Sign In</button></div>
        </div>

        <div className='h-[100%] w-[40%] rounded-r-[30px] signup-second-div'></div>
    </div>
</div>
    );
};

