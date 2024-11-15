import React from "react";
import footer from "../assets/IMG_4167.jpg";
import social from "../assets/Container.png";
const Footer = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src={footer}
          alt="footer"
          className="w-[571px] h-[383px] md:w-full md:h-full"
        />
        <div className="grid grid-cols-3 absolute top-4 left-4 md:top-10 md:left-20 text-left italic">
          <div className="flex flex-col gap-5">
            <h3 className="md:text-4xl font-bold md:pb-5 md:pl-8">
              Quick Links
            </h3>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-7">
              Home
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-6">
              About Us
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-5">
              Blog
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-4">
              FAQ
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-3">
              Contact Us
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-2">
              How We Help?
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-1">
              Community
            </a>
          </div>
          <div className="flex flex-col gap-5 md:pl-10">
            <h3 className="md:text-4xl font-bold md:pb-5 md:pl-6">Features</h3>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-5">
              Plagiarism Checker
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-4">
              Free Publications
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-3">
              Provides Books
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-2">
              Provides PDF
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-1">
              Paraphraser
            </a>
          </div>
          <div className="flex flex-col gap-5 md:pl-10">
            <h3 className="md:text-4xl font-bold md:pb-5 md:pl-5">
              Our Offering
            </h3>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-4">
              Free IELTS Masterclass
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-3">
              Talk to Counsellor
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-2">
              IELTS Exam Overview
            </a>
            <a href="/" className=" text-xs md:text-xl font-medium md:pl-1">
              Important IELTS Articles
            </a>
          </div>
        </div>
        <div className="flex flex-col absolute bottom-2 right-2 md:bottom-10 md:right-10 text-left">
          <h3 className="text-lg md:text-4xl font-bold md:pb-5">Newsletter</h3>
          <p className="text-sm md:text-lg font-medium">
            You can trust us. We only send promo offers.
          </p>
          <div className="flex gap-5">
            <button
              className="bg-[#583781] text-white w-36 h-6 md:h-10 
          rounded-[5px] my-2 md:my-6"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <a href="https://www.theassigner.com/">Your email here</a>
            </button>
            <button
              className="bg-[#9F0D76] text-white w-20 h-6 md:h-10 
          rounded-[5px] my-2 md:my-6"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <a href="https://www.theassigner.com/">Subscribe</a>
            </button>
          </div>
          <img
            src={social}
            alt="social"
            className=" w-[200px] md:w-[254px] h-[30px] md:h-[38.22px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
