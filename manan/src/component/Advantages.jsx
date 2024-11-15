import React from "react";
import obj1 from "../assets/OBJECTS (3).png";
import obj2 from "../assets/OBJECTS (2).png";

const Advantages = () => {
  const Advantages = [
    {
      title: "No Plagiarism",
      description:
        "100% original answers that lessen the possibility of receiving a bad grade.",
    },
    {
      title: "On-time Submission",
      description:
        "We promise to turn in the job ahead of schedule, no matter how difficult it is.",
    },
    {
      title: "24/7 support",
      description:
        "Help for homework is available 24/7; we are always here to assist students with their assignments. ",
    },
    {
      title: "Rewrites that satisfy",
      description:
        "Get your schoolwork redone as many times as you like till you are happy.",
    },
  ];

  return (
    <div className=" md:py-12 relative mx-5 ">
      <h2 className="text-xl md:text-5xl font-bold text-[#201041] mb-1 md:mb-4">
        Our Assistance's advantages
      </h2>
      <p className="text-xs md:text-2xl font-medium mb-4 md:mb-8">
        The Assigner wants to build a strong foundation that will enable
        students to soar to achievement.
      </p>
      <img
        src={obj1}
        alt="obj1"
        className="absolute right-0 top-[80px] hidden md:block"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-10 md:mx-10">
        {Advantages.map((Advantage, index) => (
          <div
            key={index}
            className=" bg-[#EE481447] shadow-lg rounded-[20px] p-2 md:p-5 text-center 
                flex flex-col justify-center items-center w-[150px] md:w-[250px]
                h-[150px] md:h-[250px] border border-black"
          >
            <h3 className="text-sm md:text-2xl font-bold">{Advantage.title}</h3>
            <p className="text-xs md:text-base font-medium mt-2">
              {Advantage.description}
            </p>
          </div>
        ))}
      </div>
      <img
        src={obj2}
        alt="obj1"
        className="absolute left-0 bottom-[-40px] hidden md:block"
      />
    </div>
  );
};

export default Advantages;
