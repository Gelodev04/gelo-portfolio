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
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #080808 10%, black 70%)`,
        }}
      >
        <div className="pl-10 pt-5 z-[9999] absolute overflow-y-scroll h-[100vh]">
          <Name />
          <Contact />

          <div className="relative">
            {/* SECTION LINE */}
            <div className="absolute">
              <div className="w-[1px] h-[600px] top-3  bg-[#2b2b2b] relative">
                <div className="w-[8px] right-1/2 -translate-x-1/2 h-[8px] bg-[#1d1b1b] rounded-[50%]"></div>
                <div className="w-[8px] translate-y-[23.6rem]  right-1/2 -translate-x-1/2 h-[8px] bg-[#1d1b1b] rounded-[50%]"></div>
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
