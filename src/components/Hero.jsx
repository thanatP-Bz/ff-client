import React from "react";
import kidsInClass from "../images/kidsInClass.jpg";

const Hero = () => {
  const bgImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${kidsInClass})`,
    backgroundSize: "cover",
  };

  return (
    <div className=" w-full h-screen" style={bgImg}>
      <div className="mt-4 flex justify-center items-center flex-col h-screen text-center text-white">
        <h1 className="text-6xl font-bold pb-2 font-['Lobster']">
          This is Homepage
        </h1>
        <p className="text-lg md:my-4 w-full max-w-[700px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt et
          magnam molestias debitis, ipsa sapiente. Lorem ipsum dolor sit amet,
          consectetur adipisicing
        </p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default Hero;
