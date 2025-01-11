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
    <div className=" pt-8 text-white">
      <div className="   max-w-[400px]  ">
        <h1 className="text-2xl tracking-wider font-semibold ">
          Technologies/Tools
        </h1>
        <ul className="flex flex-wrap  gap-2 mt-2">
          {[
            { name: "HTML", img: html, description: "Markup Language" },
            { name: "CSS", img: css, description: "Styling Sheets" },
            { name: "JavaScript", img: js, description: "Dynamic Scripting" },
            { name: "NPM", img: npm, description: "Package Manager" },
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
            { name: "NextJS", img: nextjs, description: "React Framework" },
          ].map((tech, index) => (
            <li
              key={index}
              className="px-3 py-1  bg-opacity-30 bg-gray-600 rounded-md"
            >
              <div className=" flex   items-center   gap-2">
                <img className="w-[25px]" src={tech.img} alt={tech.name} />
                <div className="flex flex-col ">
                  <p className="font-medium tracking-wider">{tech.name}</p>
                  <p className="text-center lowercase text-sm text-[#D3D3D3]">
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
