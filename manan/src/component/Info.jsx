import React from "react";
import object1 from "../assets/OBJECTS.png";
import object2 from "../assets/OBJECTS (1).png";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Info = () => {
  return (
    <div className="md:mb-5">
      <div className="relative flex flex-col justify-center items-center m-3">
        <img
          src={object1}
          alt="obj1"
          className="absolute left-0 top-[-15px] hidden md:block"
        />
        <div className="md:border-x-2 md:border-b-2 md:shadow-lg md:w-[1200px]">
          <p className=" md:text-5xl font-bold pb-3">
            700+ students saved, and counting
          </p>
          <p
            className=" text-[12px] md:text-xl font-medium text-[#0A0A0A] 
          text-center pb-3 md:pb-5"
          >
            50K new study notes added every day, from the world’s most active
            student <br></br>communities
          </p>
          <div className="flex items-center justify-evenly gap-10">
            <div
              className="md:w-[258px] md:h-[121px] gap-2 flex flex-col md:justify-center
            md:items-center text-left"
            >
              <p className=" md:text-6xl pl-5 md:pl-0 font-bold">350+</p>
              <p className=" md:text-xl font-medium text-[#0A0A0A] flex gap-1 items-center">
                <IoDocumentTextSharp className="text-[#4C5966]" />
                Study resources
              </p>
            </div>

            <div
              className="md:w-[258px] md:h-[121px] gap-2 flex flex-col 
            md:justify-center md:items-center text-left"
            >
              <p className=" md:text-6xl pl-5 md:pl-0 font-bold">115+</p>
              <p className=" md:text-xl font-medium text-[#0A0A0A] flex gap-1 items-center">
                <FaBuildingColumns className="text-[#4C5966]" />
                Institutions
              </p>
            </div>

            <div
              className="md:w-[258px] md:h-[121px] gap-2 flex flex-col 
            md:justify-center md:items-center text-left"
            >
              <p className=" md:text-6xl pl-5 md:pl-0 font-bold">700+</p>
              <p className=" md:text-xl font-medium text-[#0A0A0A] flex gap-1 items-center">
                <FaUser className="text-[#4C5966]" />
                Users
              </p>
            </div>
          </div>
        </div>
        <img
          src={object2}
          alt="obj1"
          className="absolute right-[-10px] bottom-0 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Info;
