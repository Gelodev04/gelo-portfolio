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
import nodejs from "./images/nodejs.png";
import nextjs from "./images/nextjs.png";


function Technologies() {
  return (
    <div className="  text-white mt-5">
      <div className="">
        <h1 className="text-4xl tracking-wider font-semibold ">
          Skills
        </h1>
        <ul className="grid grid-cols-3 md:flex flex-wrap  gap-1  mt-2">
          {[
            { name: "HTML", img: html, description: "Structuring" },
            { name: "CSS", img: css, description: "Styling " },
            { name: "JavaScript", img: js, description: "interactive" },
            { name: "NPM", img: npm, description: "Packages " },
            { name: "Git", img: social, description: "Version Control" },
            { name: "Tailwind", img: tailwind, description: "Utility CSS" },
            {
              name: "TypeScript",
              img: typescript,
              description: "Typed JavaScript",
            },
            { name: "React", img: react, description: "UI Library" },
            { name: "GitHub", img: githubdark, description: "Code Hosting" },
            { name: "NodeJS", img: nodejs, description: "Server-side JS" },
            { name: "NextJS", img: nextjs, description: "optimization" },
          ].map((tech, index) => (
            <li
              key={index}
              className="pl-2  py-1 bg-opacity-40 bg-black rounded-md "
            >
              <div className=" flex gap-1   items-center   ">
                <img className="w-[20px]" src={tech.img} alt={tech.name} />
                <div className="flex flex-col -space-y-2">
                  <p className="font-medium text-m tracking-wider">{tech.name}</p>
                  <p className="text-center lowercase text-sm text-[#aaaaaa]">
                    {tech.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Technologies;
