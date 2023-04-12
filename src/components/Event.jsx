import React from "react";
import goldie from "../images/goldie-1.JPG";
import { Link } from "react-router-dom";

const Event = () => {
  const bgImg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${goldie})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className=" w-full mt-[7%] h-[90vh]" style={bgImg}>
      <div className=" flex justify-center items-center flex-col h-screen text-center text-white">
        <Link to="/gallery">
          <button
            class="text-white border border-white hover:border-[#10ac84]  hover:text-[#60fad4] active:border-[#74f2d3]  font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-10 ease-linear transition-all duration-150"
            type="button"
          >
            check out good old memory pictures
          </button>
        </Link>
      </div>
    </div>
    /*   <div className=" mb-[10%] w-full h-[100vh] relative md:h-[85vh] lg:h-[85vh]">
      <img
        className="w-full h-full object-cover object-top absolute inset-0"
        src={eventImg}
        alt="event"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <motion.div
        initial={{ top: 500 }}
        animate={{ top: 150 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="absolute top-[30%] left-[50%] -translate-x-[50%] text-white text-center xxs:top-[10%] xs:top-[20%] sm:top-[30%]  md:top-[35%]"
      >
        <h1 className="text-4xl font-bold font-['Lobster']">
          The good memories events
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          suscipit autem? In, debitis obcaecati quo ab saepe odit? Possimus,
          voluptatem?
        </p>
        <button className="btn whitespace-nowrap">Read More</button>
      </motion.div>
    </div> */
  );
};

export default Event;
