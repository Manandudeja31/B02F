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
          className=" h-[200px] rounded-[15px] md:rounded-sm md:h-[637.62px] w-full md:w-[1440px]"
        />
        <div className=" absolute left-3 md:left-16 top-2 md:top-36">
          <h1 className=" text-base md:text-5xl font-bold text-left text-[#9F0D76] pb-2 md:pb-5">
            IELTS Preparation <br></br>
            <span className="text-[#4C0C5C]">
              Online Best Learning <br></br>
            </span>
            <span className="text-[#A259FF]">opportunities in The World</span>
          </h1>
          <p
            className=" text-xs md:text-3xl font-medium w-[250px] 
          md:w-[700px] h-[39px] md:h-[109.07px] text-left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax
            negotium, dicerem impudens, nisi hoc institut translatum ad
            philosophos nostros esset.
          </p>
          <button
            className="bg-[#5A156B] text-white w-24 md:w-[384px] h-8 md:h-[93.22px]  
           rounded md:rounded-[15px] my-6 flex justify-center items-center md:ml-12"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            <a
              href="https://www.theassigner.com/"
              className=" text-sm md:text-4xl font-semibold "
            >
              Enroll Now
            </a>
          </button>
        </div>
        <div className="flex flex-col ">
          <div className="absolute right-0 top-3 md:top-5 z-10">
            <img
              src={earth}
              alt="earth"
              className="w-[230px] h-[80px] md:size-full"
            />
          </div>
          <div className="absolute right-5 md:right-10 bottom-0 z-0">
            <img
              src={students}
              alt="students"
              className="w-[130px] h-[140px] md:size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
