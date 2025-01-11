import React from 'react'
import githubicon from "./images/githubdark.png";
import gmaildark from "./images/gmaildark.png";
import linkedindark from "./images/linkedin-dark.png";
function Contact() {
  return (
    <div className='pt-3 flex justify-center '>
      <ul className='flex gap-5 '>
        <li><img className='w-[26px] cursor-pointer' src={githubicon} alt="github" /></li>
        <li><img className='w-[26px] cursor-pointer' src={gmaildark} alt="gmail" /></li>
        <li><img className='w-[26px] cursor-pointer' src={linkedindark} alt="linkedin" /></li>
      </ul>
    </div>
  )
}

export default Contact