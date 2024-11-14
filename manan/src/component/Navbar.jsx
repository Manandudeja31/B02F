import React from "react";
import logo from "../assets/theASSignerlogo 2.png";
import NavMenu from "./NavMenu";
import { CiMenuBurger } from "react-icons/ci";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-12">
        <img
          src={logo}
          alt="The Assigner"
          className=" h-20 md:h-20 w-36 md:w-60 sm:m-[12px] ml-2 md:ml-4 object-contain"
        />
        <div className="">
          <NavMenu />
        </div>

        <div className="flex gap-6 justify-end items-center">
          <button
            className="bg-[#583781] text-white w-24 md:w-36 h-6 md:h-10 
          rounded-[5px] my-6 md:my-6"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            <a href="https://www.theassigner.com/">Login</a>
          </button>
          <button className="flex md:hidden my-6">
            <CiMenuBurger className="h-10 w-10 object-cover" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
