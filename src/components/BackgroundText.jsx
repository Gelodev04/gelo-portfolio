import React from 'react'

function BackgroundText() {
  return (
    <div className="absolute h-screen w-screen ">
    <h1 className="text-[12rem] text-black opacity-[0.2]">Gelo</h1>
    <div className="absolute -rotate-90 right-[4.7rem] origin-right top-[10rem]">
        <h1 className="text-[7rem] text-black  writing-mode-vertical opacity-[0.2]">Developer</h1>
    </div>
</div>

  )
}

export default BackgroundText