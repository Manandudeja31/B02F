import React from "react";
import footer from "../assets/IMG_4167.jpg";
import social from "../assets/Container.png";
const Footer = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img src={footer} alt="footer" className="" />
        <div className="grid grid-cols-3 absolute top-10 left-20 text-left italic">
          <div className="flex flex-col gap-5">
            <h3 className="text-4xl font-bold pb-5 pl-8">Quick Links</h3>
            <a href="/" className="text-xl font-medium pl-7">
              Home
            </a>
            <a href="/" className="text-xl font-medium pl-6">
              About Us
            </a>
            <a href="/" className="text-xl font-medium pl-5">
              Blog
            </a>
            <a href="/" className="text-xl font-medium pl-4">
              FAQ
            </a>
            <a href="/" className="text-xl font-medium pl-3">
              Contact Us
            </a>
            <a href="/" className="text-xl font-medium pl-2">
              How We Help?
            </a>
            <a href="/" className="text-xl font-medium pl-1">
              Community
            </a>
          </div>
          <div className="flex flex-col gap-5 pl-10">
            <h3 className="text-4xl font-bold pb-5 pl-6">Features</h3>
            <a href="/" className="text-xl font-medium pl-5">
              Plagiarism Checker
            </a>
            <a href="/" className="text-xl font-medium pl-4">
              Free Publications
            </a>
            <a href="/" className="text-xl font-medium pl-3">
              Provides Books
            </a>
            <a href="/" className="text-xl font-medium pl-2">
              Provides PDF
            </a>
            <a href="/" className="text-xl font-medium pl-1">
              Paraphraser
            </a>
          </div>
          <div className="flex flex-col gap-5 pl-10">
            <h3 className="text-4xl font-bold pb-5 pl-5">Our Offering</h3>
            <a href="/" className="text-xl font-medium pl-4">
              Free IELTS Masterclass
            </a>
            <a href="/" className="text-xl font-medium pl-3">
              Talk to Counsellor
            </a>
            <a href="/" className="text-xl font-medium pl-2">
              IELTS Exam Overview
            </a>
            <a href="/" className="text-xl font-medium pl-1">
              Important IELTS Articles
            </a>
          </div>
        </div>
        <div className="flex flex-col absolute bottom-10 right-10 text-left">
          <h3 className="text-4xl font-bold pb-5">Newsletter</h3>
          <p className="text-lg font-medium">
            You can trust us. We only send promo offers.
          </p>
          <div className="flex gap-5">
            <button
              className="bg-[#583781] text-white w-24 md:w-36 h-6 md:h-10 
          rounded-[5px] my-6"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <a href="https://www.theassigner.com/">Your email here</a>
            </button>
            <button
              className="bg-[#9F0D76] text-white w-12 md:w-20 h-6 md:h-10 
          rounded-[5px] my-6"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <a href="https://www.theassigner.com/">Subscribe</a>
            </button>
          </div>
          <img src={social} alt="social" className=" w-[254px] h-[38.22px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
