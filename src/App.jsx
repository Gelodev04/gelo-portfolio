import { useState } from "react";

import "./App.css";

import Name from "./components/Name";
import Contact from "./components/Contact";
import BackgroundText from "./components/BackgroundText";
import AboutMe from "./components/AboutMe";
import Location from "./components/Location";
import Technologies from "./components/Technologies";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const xPercent = ((clientX - left) / width) * 100;
    const yPercent = ((clientY - top) / height) * 100;

    setGradientPosition({ x: xPercent, y: yPercent });
  };

  return (
    <>
      <div
        id="style-1"
        className="gradient-background min-h-screen scrollbar  overflow-hidden relative "
        
        
      >
        <div className="absolute pt-1 z-[9999]  overflow-y-scroll h-[100vh]">
          <Navbar/>
          <Name />
          <Contact />

          
            
            
            
           <div className="mx-7">
            <AboutMe/>
         <Technologies />
         <Projects/>
         <div className="h-screen"></div>
         </div>
          
        </div>

        <BackgroundText />
      </div>
    </>
  );
}

export default App;
