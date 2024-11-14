import React from "react";
import bgImg from "../assets/Rectangle 98.png";
import earth from "../assets/layer.png";
import students from "../assets/Group 1984.png";
const Enroll = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={bgImg}
          alt="bgimg"
          className=" md:h-[637.62px] md:w-[1440px]"
        />
        <div className=" absolute left-10 md:left-16 top-10 md:top-36">
          <h1 className="md:text-5xl font-bold text-left text-[#9F0D76] pb-5">
            IELTS Preparation <br></br>
            <span className="text-[#4C0C5C]">
              Online Best Learning <br></br>
            </span>
            <span className="text-[#A259FF]">opportunities in The World</span>
          </h1>
          <p className=" md:text-3xl font-medium md:w-[700px] md:h-[109.07px] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax
            negotium, dicerem impudens, nisi hoc institut translatum ad
            philosophos nostros esset.
          </p>
          <button
            className="bg-[#5A156B] text-white w-24 md:w-[384px] h-6 md:h-[93.22px]  
          rounded-[15px] my-6 flex justify-center items-center ml-12"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            <a
              href="https://www.theassigner.com/"
              className=" text-4xl font-semibold "
            >
              Enroll Now
            </a>
          </button>
        </div>
        <div className="flex flex-col ">
          <div className="absolute right-0 top-5 z-10">
            <img src={earth} alt="earth" />
          </div>
          <div className="absolute right-5 md:right-10 bottom-0 z-2">
            <img src={students} alt="students" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
