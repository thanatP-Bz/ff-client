import React from "react";
import { motion } from "framer-motion";
import naomi from "../images/naomi.jpg";
import goldie from "../images/goldie.jpg";

const Showcase = () => {
  return (
    <div>
      <div className="mx-[7%] pt-[10%] ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-2 h-2/5 md:grid-cols-2">
            <div>
              <img
                className="h-full w-full object-cover rounded-md md:h-4/5"
                src={naomi}
                alt="kid1"
              />
            </div>
            <div>
              <img
                className="h-full w-full object-cover rounded-md md:h-4/5"
                src={goldie}
                alt="kid2"
              />
            </div>
          </div>

          <div className="ml-5 text-center md:text-start">
            <h1 className="text-4xl font-bold font-['Lobster'] text-gray-700">
              It started in 2018
            </h1>
            <p className="text-gray-800 my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              illo iusto doloribus explicabo commodi cum! Cumque odio voluptatem
              molestias deleniti?
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
