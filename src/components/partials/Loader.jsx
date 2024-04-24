import React, { useState, useEffect, useRef } from "react";
import { styles } from "../../styles";

const Loader = () => {
  const [number, setNumber] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 20);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (number === 100) {
      clearInterval(intervalRef.current);
    }
  }, [number]);

  // Render null if number is 100
  if (number === 100) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="text-white select-none">
        <div className="line flex flex-col items-start justify-center gap-3vw sm:flex-row">
          <div className="flex items-center justify-start gap-1vw">
            <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
              {number}
            </h5>
            <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
              <span className="text-[#915EFF]">/</span>100
            </h6>
          </div>
        </div>

        <div className="line">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl uppercase font-bold">
            port<span className="text-[#915EFF]">folio</span>{" "}
          </h1>
        </div>
        <div className="line flex flex-col items-start justify-center gap-3vw sm:flex-row">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl uppercase font-bold">
            is loading right
          </h1>
          <h2 className="text-5xl text-[#915EFF] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase font-bold opacity-0 animate-pulse">
            Now
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
