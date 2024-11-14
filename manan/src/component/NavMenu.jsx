import React from "react";

const NavMenu = () => {
  return (
    <div>
      <div
        className="md:flex items-center justify-center hidden bg-[#F5F5F5] px-[35px] py-[14px]
       gap-[60px] text-[16px] my-6 font-medium shadow-md"
        style={{ fontFamily: "'Cormorant', serif" }}
      >
        <a
          href="/"
          className="hover:text-[#583781] hover:font-semibold hover:scale-110"
        >
          Home
        </a>
        <a
          href="/"
          className="hover:text-[#583781] hover:font-semibold hover:scale-110"
        >
          About Us
        </a>
        <a
          href="/"
          className="hover:text-[#583781] hover:font-semibold hover:scale-110"
        >
          Blog
        </a>
        <a
          href="/"
          className="hover:text-[#583781] hover:font-semibold hover:scale-110"
        >
          Our Services
        </a>
        <a
          href="/"
          className="hover:text-[#583781] hover:font-semibold hover:scale-110"
        >
          IELTS & PTE
        </a>
        <a
          href="/"
          className="hover:text-[#583781] hover:font-semibold hover:scale-110"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
