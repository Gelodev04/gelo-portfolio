import React from "react";

import html from "./images/html.png";
import css from "./images/css.png";
import githubdark from "./images/githubdark.png";
import js from "./images/js.png";
import npm from "./images/npm.png";
import social from "./images/social.png";
import tailwind from "./images/tailwind.png";
import typescript from "./images/typescript.png";
import react from "./images/react.png";

function Technologies() {
  return (
    <div className="text-[#D3D3D3] pt-10">
      <div className="flex items-center ">
        <div className="w-[8px] -translate-x-[1.2rem] h-[8px] bg-[#1d1b1b] rounded-[50%]"></div>
        <h1 className="text-2xl tracking-wider font-semibold">
          Technologies/Tools
        </h1>
      </div>
      <div className="max-w-[400px] pt-5">
        <ul className="grid grid-cols-3 gap-y-4 gap-x-3 tracking-wider">
          {[
            { name: "HTML", img: html },
            { name: "CSS", img: css },
            { name: "JavaScript", img: js },
            { name: "NPM", img: npm },
            { name: "Git", img: social },
            { name: "Tailwind", img: tailwind },
            { name: "TypeScript", img: typescript },
            { name: "React", img: react },
            { name: "GitHub", img: githubdark },
          ].map((tech, index) => (
            <li
              key={index}
              className="button-64 rounded-3xl text-[#008cff] bg-[#1d1374] bg-opacity-30"
            >
              <span className="text flex items-center justify-center gap-1">
                {tech.name}{" "}
                <img className="w-[18px]" src={tech.img} alt={tech.name} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Technologies;
