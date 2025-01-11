import React from "react";
import Location from "./Location";
import "./style/wavinghand.css";
import hand from "./images/hello.png";

function AboutMe() {
  return (
    <div className="text-white mt-8  text-lg">
     
        
    <h1 className="text-2xl  font-semibold tracking-wider">About Me</h1>
      

      <div className=" mt-2">
        <p className="">
        Hi! I’m a front-end developer with a strong passion for programming. I’m curious, adaptable, and always excited to learn and master new technologies.
        </p>
        <p className="pt-3">I am currently a first-year Bachelor of Science in Information Technology (BSIT) student at Batangas State University.</p>
        <p className="pt-3">
        I specialize in crafting responsive and user-friendly websites using my favorite tools, <span className="underline">Reactjs</span> and <span className="underline decoration-[#D3D3D3]
        ">Tailwind CSS</span>.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
