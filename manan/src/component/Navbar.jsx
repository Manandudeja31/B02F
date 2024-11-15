import React, { useState } from "react";
import logo from "../assets/theASSignerlogo 2.png";
import NavMenu from "./NavMenu";
import { CiMenuBurger } from "react-icons/ci";
import "../App.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="flex gap-12">
        <img
          src={logo}
          alt="The Assigner"
          className=" h-20 md:h-20 w-36 md:w-60 sm:m-[12px] ml-2 md:ml-4 object-contain z-10"
        />
        <div>
          <NavMenu />
        </div>
        {menu && (
          <div
            className="flex flex-col gap-10 px-5 z-20 text-black text-xl basis-full
          absolute left-0 top-0 w-screen h-screen text-left bg-white 
          transition-all duration-500"
          >
            <a
              href="/"
              className="hover:text-[#583781] pt-20 hover:font-semibold hover:scale-110 border-y"
            >
              Home
            </a>
            <a
              href="/"
              className="hover:text-[#583781] hover:font-semibold hover:scale-110 border-y"
            >
              About Us
            </a>
            <a
              href="/"
              className="hover:text-[#583781] hover:font-semibold hover:scale-110 border-y"
            >
              Blog
            </a>
            <a
              href="/"
              className="hover:text-[#583781] hover:font-semibold hover:scale-110 
              border-y flex justify-between"
            >
              Our Services
              <RiArrowDropDownLine />
            </a>
            <a
              href="/"
              className="hover:text-[#583781] hover:font-semibold hover:scale-110 border-y"
            >
              IELTS & PTE
            </a>
            <a
              href="/"
              className="hover:text-[#583781] hover:font-semibold hover:scale-110 border-y"
            >
              Contact Us
            </a>
          </div>
        )}

        <div className="flex gap-6 justify-end items-center">
          <button
            className="bg-[#583781] text-white w-24 md:w-36 h-8 md:h-10 
          rounded-[5px] my-6 md:my-6 z-10"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            <a href="https://www.theassigner.com/">Login</a>
          </button>
          <button className="flex md:hidden my-6 z-20" onClick={handleMenu}>
            {menu ? (
              <RxCross2 className="h-10 w-10 object-cover" />
            ) : (
              <CiMenuBurger className="h-10 w-10 object-cover" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
