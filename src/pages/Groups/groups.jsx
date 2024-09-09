import React from 'react';
import { Jsondiscover, Jsongroup } from '../../constant';
import images from '../../constant/images';
import { GiConversation } from "react-icons/gi";


const Group= () => {
    return (
        < >
        
         <div className='pl-7 pb-2 pt-5'>
            <h1 className='font-semibold text-2xl '>New Groups</h1>
         </div>
        

        

         <div className='w-auto  rounded-lg  flex gap-3 justify-center ' >

         {
           
            Jsongroup.gr.map((e)=>(
            
              <div >
                <div  >
                   <div>
                   <img className="w-[22vw] rounded-xl " src={images[e.img]}  alt="" />
                   </div>
                  
                  <div className='flex justify-between pt-2 '>
                      <h3 className='font-semibold'>{e.title} </h3>
                      <button className='border 1px border-pink-700 px-3 py-0 text-[14px] font-medium rounded-md'>Join</button>
                      
                  </div>
                  <p className='text-[12px]  text-gray-500 '> {e.local} </p>
                  </div>

              </div>

              ))

             
          }  
          
            
            </div>

            <h1 className='font-semibold text-2xl pl-7 pt-5 ' >Discover</h1>            
            <div className='pl-7 flex gap-2'>
                <button className='border px-2 rounded-lg' >All</button>
               
                <button className='border px-2 py-0 rounded-lg'>Conversation</button>
                
                <button className='border px-2 rounded-lg'>Arts&Culture</button>
                <button className='border px-2 rounded-lg'>Books</button>
                <button className='border px-2 rounded-lg'>Music</button>
                <button className='border px-2 rounded-lg'>Card games</button>
                <button className='border px-2 rounded-lg'>Animals</button>
            </div>
            <div className='w-auto  rounded-lg  flex gap-3 justify-center pt-5'>
            {
  
         Jsondiscover.discover.map((event)=>(
      
      <div  >
        <div  >
           <div>
           <img className="w-[22vw] rounded-xl " src={images[event.img]}  alt="" />
           </div>
          
          <div className='flex justify-between pt-2 '>
              <h3 className='font-semibold'>{event.title} </h3>
              <button className='border 1px border-pink-700 px-3 py-0 text-[14px] font-medium rounded-md'>Join</button>
              
          </div>
          <p className='text-[12px]  text-gray-500 '> {event.local} </p>
          </div>

      </div>

      ))
  }
            </div>
        </>
    );
};

export default Group;