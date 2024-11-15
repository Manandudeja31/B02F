import React, { useEffect, useState } from "react";
import img1 from "../assets/image 2.png";
import img2 from "../assets/image 3.png";
import img3 from "../assets/image 5.png";
import img4 from "../assets/image 6.png";
import img5 from "../assets/image 7.png";
import img6 from "../assets/image 8.png";
import img7 from "../assets/image 9.png";
import img8 from "../assets/image 10.png";
import img9 from "../assets/image 11.png";
import img10 from "../assets/image 12.png";
import img11 from "../assets/image 13.png";
import img12 from "../assets/image 14.png";
import img13 from "../assets/image 15.png";
import img14 from "../assets/image 16.png";

const Services = () => {
  const [stars, setStars] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => {
      setStars(window.innerWidth < 1024);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const services = [
    {
      title: "Assignment",
      img: img1,
      reviews: 178,
    },
    {
      title: "Dissertation",
      img: img2,
      reviews: 150,
    },
    {
      title: "Course work",
      img: img5,
      reviews: 120,
    },
    {
      title: "Thesis",
      img: img3,
      reviews: 129,
    },
    {
      title: "Essay",
      img: img4,
      reviews: 47,
    },
    {
      title: "Research Paper",
      img: img6,
      reviews: 59,
    },
    {
      title: "Power Point Presentation",
      img: img7,
      reviews: 89,
    },
    {
      title: "Programming",
      img: img8,
      reviews: 134,
    },
    {
      title: "Paper Writing",
      img: img9,
      reviews: 193,
    },
    {
      title: "Case Study",
      img: img10,
      reviews: 125,
    },
    {
      title: "Speech Writing",
      img: img11,
      reviews: 100,
    },
    {
      title: "Term Paper Writing",
      img: img12,
      reviews: 135,
    },
    {
      title: "Cover Letter Writing",
      img: img13,
      reviews: 120,
    },
    {
      title: "Resume Maker",
      img: img14,
      reviews: 140,
    },
  ];

  return (
    <div
      className=" py-4 md:py-12 flex bg-[#C414681A] shadow-lg my-3 md:m-5 rounded-[10px] 
      md:rounded-md items-center justify-center flex-col"
    >
      <h2 className="text-lg md:text-4xl font-bold text-[#201041] ">
        Our Services
      </h2>
      <p className="text-base md:text-2xl font-medium mb-4 md:mb-8">
        We offer some fantastic services
      </p>
      <div
        className="flex w-[360px] md:w-[1250px] flex-wrap gap-3 md:gap-6 md:px-10 
      items-center justify-center"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md w-[110px] h-[150px] md:w-[250px] 
            md:h-[250px] rounded md:rounded-2xl text-left"
          >
            <img
              src={service.img}
              alt={service.title}
              className="md:text-4xl rounded md:rounded-t-xl"
            />
            <div className="px-2">
              <h3 className="text-sm md:text-xl font-bold">{service.title}</h3>
              <div className="text-gray-600 flex items gap-0 md:gap-5">
                <p className="text-[#BA4396] size-12">
                  {stars ? "★★★" : "★★★★★"}
                </p>
                ({service.reviews})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
