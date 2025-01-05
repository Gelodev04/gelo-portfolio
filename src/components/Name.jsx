import React from 'react'
import profilepic from './images/profilepic.png'
import profilepic2 from './images/profilepic2.png'
function Name() {
  return (
    <div className="text-[#D3D3D3]  w-[80%]  ">
        <div className='shadow-2xl border-[1.9px] border-[#413d3d] rounded-full  w-[180px]'>
          <img className='rounded-full ' src={profilepic} alt="" />
        </div>
        <h1 className='text-[2.7rem] tracking-widest'>Angelo Manalo</h1>
        <p className='text-xl font-medium tracking-wide'>Front-End Developer</p>
        <p className='text-lg pt-3 text-[#adadad]'>I build responsive, user-friendly interfaces that bring designs to life and deliver seamless web experiences</p>
        
    </div>
  )
}

export default Name;