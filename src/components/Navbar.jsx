import React from 'react'
import moon from "./images/moon.png"

function Navbar() {
  return (
   <nav className='flex justify-between px-3 items-center'>
    <h1 className='text-[#D3D3D3] text-xl font-medium tracking-wider lowercase'>Angelo Manalo</h1>
    <img className='w-[25px]' src={moon} alt="" />
   </nav>
  )
}

export default Navbar