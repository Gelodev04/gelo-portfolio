import React from "react";
import locationDark from "./images/location.png";
import flag from "./images/philippines.png";
import "./style/location.css";
import 'animate.css';


function Location() {
  return (
    <div className="  flex items-center group">
    <img
      className="cursor-pointer location w-[23px] mr-2"
      src={locationDark}
      alt="location"
    />
    <div className="relative">
      <div className="flex items-center ">
        <p className="cursor-pointer text-[#D3D3D3] opacity-0 transform translate-x-[-20px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Philippines,
        </p>
        <p className="cursor-pointer text-[#D3D3D3] opacity-0 transform translate-x-[-20px] transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-x-0 ml-1">
          Batangas City
        </p>
        <img
          className="w-[20px] ml-2 opacity-0 transform translate-x-[-20px] transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-x-0"
          src={flag}
          alt="PH"
        />
      </div>
    </div>
  </div>


  );
}

export default Location;
