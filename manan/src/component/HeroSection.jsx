import React from "react";
import Social from "./Social";
import Navbar from "./Navbar";
import banner from "../assets/image 1.png";
import "../App.css";
import Info from "./Info";
const HeroSection = () => {
  return (
    <div>
      <div className="h-full">
        <Social />
        <Navbar />
        <div className=" w-full relative md:m-0 md:mx-0 ">
          <div
            className="absolute text-left m-2 block md:hidden "
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            <p className="my-2 text-[11px] font-bold text-[#C41468CC]">
              Navigate Your
              <br></br>
              <span className="text-[#4C0C5C]">Academic Journey</span>
              <br></br>
              <span className="text-[#FF22F6CC]">with Confidence</span>
            </p>
            <p className="w-[250px] text-[11px] font-medium pr-2">
              Providing high-quality and comprehensive assistance with
              assignments and thesis writing for students at all academic
              levels.
            </p>
          </div>
          <img
            src={banner}
            alt="HeroImage"
            className="h-[160px] md:h-[500px] w-full mb-5 shadow-md"
          />
        </div>
        <Info />
      </div>
    </div>
  );
};

export default HeroSection;
