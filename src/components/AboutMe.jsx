import React from 'react'
import Location from './Location'
import "./style/wavinghand.css"
import hand from "./images/hello.png"

function AboutMe() {
  return (
    <div className='text-[#D3D3D3] mt-8 pr-10 text-lg'>
      <h1 className='text-2xl  font-semibold tracking-wider'>About Me</h1>
      <Location/>
      <p className=''>
      Hi there <span class="wave px-2"><img className='relative top-2 w-[25px]  ' src={hand} alt="" /></span>I'm a front-end developer with a deep passion for programming. I'm highly curious, adaptable, and constantly eager to explore and master new technologies.
      </p>
      <p className='pt-3'>
      I specialize in creating responsive, user-friendly websites that strike the perfect balance between functionality and visually appealing design. My goal is to deliver seamless user experiences that look great on any device.
      </p>
    </div>
  )
}

export default AboutMe