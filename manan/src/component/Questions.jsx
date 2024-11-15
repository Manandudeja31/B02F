import React, { useState } from "react";
import { Question } from "../data.js";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Questions = () => {
  const [isOpen, setIsOpen] = useState(null);
  const showDescription = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };
  return (
    <div className=" mb-10">
      <h2 className="text-4xl font-bold text-[#201041] mb-8">FAQs</h2>
      <div className="flex justify-center items-center flex-col gap-2 px-10">
        {Question.map((Que, id) => (
          <div
            key={id}
            className="bg-white md:w-[1050px] shadow-md rounded-lg py-2 cursor-pointer"
            onClick={() => showDescription(id)}
          >
            <div className="flex justify-between items-center px-3">
              <h3 className="text-xl font-bold">{Que.title}</h3>
              <button
                className="font-bold text-3xl"
                onClick={() => showDescription(id)}
              >
                {isOpen === id ? (
                  <div>
                    <RiArrowDropUpLine />
                  </div>
                ) : (
                  <div>
                    <RiArrowDropDownLine />
                  </div>
                )}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-[2000ms] ease-in-out ${
                isOpen === id ? "max-h-96" : "max-h-0"
              }
              `}
            >
              <div
                className={`flex justify-center items-center flex-col gap-2 
              text-left border-l-4 border-purple-600 ${
                isOpen === id
                  ? "px-5 transition-all duration-[2000ms] ease-out"
                  : "px-1"
              } `}
              >
                {isOpen === id && (
                  <p className="mt-2 font-medium text-lg">{Que.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
