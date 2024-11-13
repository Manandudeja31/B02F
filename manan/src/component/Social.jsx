import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div
        className="bg-[#641566] md:flex justify-end items-center text-white gap-[14px] 
        px-3 h-[40px] hidden pr-5"
      >
        <FaLinkedinIn className=" cursor-pointer" />
        <FaMeta className=" cursor-pointer" />
        <FaInstagram className=" cursor-pointer" />
        <BsTwitterX className=" cursor-pointer" />
        <FaWhatsapp className=" cursor-pointer" />
        <FaTelegram className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default Social;
