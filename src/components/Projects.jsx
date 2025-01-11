import React from "react";
import webdev from "./images/webdev.png";
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
import rightarrow from "./images/rightarrow.png";
function Projects() {
  const project = [
    {
      title: "WebCrafter",
      screenshot: webdev,
      description: "A website development company",
      technologies: [
        { name: "React", img: react },
        { name: "Tailwind", img: tailwind },
      ],
    },
    {
      title: "WebCrafter",
      screenshot: webdev,
      description: "A website development company",
      technologies: [
        { name: "React", img: react },
        { name: "Tailwind", img: tailwind },
      ],
    },
  ];

  return (
    <div className="pt-8">
      <h1 className="text-2xl tracking-wider font-semibold text-white">
        Projects
      </h1>

      <div className="">
        {project.map((project) => (
          <div
            key={project.title}
            className="bg-black h-[350px] rounded-md relative overflow-hidden group mt-4"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url(${project.screenshot})` }}
            ></div>
            <div className="absolute -inset-0 bg-gradient-to-t from-[#161616]  to-transparent "></div>
            <div className="absolute -bottom-[2.5rem] group-hover:bottom-0 px-3 pb-3 text-[#ffffff]   w-full transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-medium tracking-widest">
                {project.title}
              </h2>
              <p className="text-lg">{project.description}</p>
              <ul className="flex space-x-3 mt-1">
                {project.technologies.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center space-x-1 border px-2 py-[1px] rounded-md border-tr "
                  >
                    <img src={tech.img} alt={tech.name} className="w-5 " />
                    <span className="text">{tech.name}</span>
                  </li>
                ))}
              </ul>
              
                <button className="mt-3 bg-white text-black rounded-lg px-[4px] flex items-center gap-1">
                  <span className="font-semibold">Live Demo</span>
                <img className="w-[16px]" src={rightarrow} alt="" />
                </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
