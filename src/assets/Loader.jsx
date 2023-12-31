import React from "react";
import './loader.css';

function Loader() {
  return (
    <>
    <svg id="effect">
        <filter id="goovy">
            <feGaussianBlur in="SourceGraphic" stdDeviation={"10"}/>
            <feColorMatrix values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 10 -5"></feColorMatrix>   
        </filter>
    </svg>
    <div className="loader">
      <span style={{"--i": "1" }} ></span>
      <span style={{"--i": "2" }} ></span>
      <span style={{"--i": "3" }} ></span>
      <span style={{"--i": "4" }} ></span>
      <span style={{"--i": "5" }} ></span>
      <span style={{"--i": "6" }} ></span>
      <span style={{"--i": "7" }} ></span>
      <span style={{"--i": "8" }} ></span>
      <span className="rotate" style={{"--j": "0" }} ></span>
      <span className="rotate" style={{"--j": "1" }} ></span>
      <span className="rotate" style={{"--j": "2" }} ></span>
      <span className="rotate" style={{"--j": "3" }} ></span>
    </div>
    </>
    
  );
}

export default Loader;
