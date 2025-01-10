import { useState } from "react";

import "./App.css";

import Name from "./components/Name";
import Contact from "./components/Contact";
import BackgroundText from "./components/BackgroundText";
import AboutMe from "./components/AboutMe";
import Location from "./components/Location";
import Technologies from "./components/Technologies";

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
        className="gradient-background min-h-screen scrollbar  overflow-hidden relative"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #1a1919 2%, #0a0a0a 70%)`,
        }}
      >
        <div className="pl-6 pt-5 z-[9999] absolute overflow-y-scroll h-[100vh]">
          <Name />
          <Contact />

          <div className="relative">
            {/* SECTION LINE */}
            <div className="absolute">
              <div className="w-[1px] h-[600px] top-3  bg-[#2b2b2b] relative">
                
                
              </div>
            </div>
            <div className="pl-4">
            <AboutMe />
            <Technologies />
            </div>
          </div>
        </div>

        <BackgroundText />
      </div>
    </>
  );
}

export default App;
