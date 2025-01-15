import React from "react";
import profilepic from "./images/profilepic.png";
import profilepic2 from "./images/profilepic2.png";
import flag from "./images/philippines.png";
import pin from "./images/pin.png";
import hello from "./images/hello.png"

function Name() {
  return (
    <div id="angelomanalo" className="text-white mx-7    text-center mt-5 scroll-mt-20">
      <div className="shadow-2xl mx-auto border-[1.9px] border-[#413d3d] rounded-full  w-[180px]">
        <img className="rounded-full " src={profilepic} alt="" />
      </div>
      <div className="flex items-center justify-center">
      <h1  className="text-[2.8rem] tracking-widest font-medium">hi gelo here</h1>
      
      </div>
      <p className="text-xl font-medium tracking-wide text-[#D3D3D3]">Front-End Developer</p>
      <div className="flex items-center justify-center">
        <img className="w-[20px]" src={pin} alt="pin" />
        <p className="text-lg   mr-2 text-[#D3D3D3]">Philippines, Batangas City </p>
        <p className="text-[#D3D3D3]">🇵🇭</p>
      </div>
      <p className="text-lg  text-[#D3D3D3]">
      I’m a 19-year-old front-end developer specializing in creating responsive and professional websites.
      </p>
    </div>
  );
}

export default Name;
