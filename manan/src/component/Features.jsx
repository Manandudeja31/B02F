import React from "react";
import img1 from "../assets/3146064.png.png";
import img2 from "../assets/2232688.png.png";
import img3 from "../assets/2658986.png.png";
import img4 from "../assets/15869380.png.png";

const Features = () => {
  const features = [
    {
      title: "Plagiarism Checker",
      description: "We will provide access to assignments free of plagiarism",
      img: img1,
    },
    {
      title: "Free Publications",
      description: "We will provide access to publication",
      img: img2,
    },
    {
      title: "Provides Free Books and PDF",
      description: "Free Books and PDF will be provided",
      img: img3,
    },
    {
      title: "Paraphraser",
      description: "A paraphraser will be provided",
      img: img4,
    },
  ];

  return (
    <div className=" py-12">
      <h2 className="text-4xl font-bold text-[#201041] mb-4">
        Awesome Features
      </h2>
      <p className="text-2xl font-medium text-gray-600 mb-8">
        Get ready to unlock the next level of features
      </p>
      <div className="grid lg:grid-cols-4 gap-6 px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center 
            flex flex-col justify-center items-center "
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="text-4xl mb-4 "
            />
            <h3 className="text-xl font-medium text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
