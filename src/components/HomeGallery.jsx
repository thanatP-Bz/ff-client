import React from "react";
import k1 from "../images/goldie&naomi.jpg";
import k2 from "../images/christmas.jpg";
import k3 from "../images/eli&goldie.jpg";
import k4 from "../images/eli1.jpg";
import k5 from "../images/andrew&naomi.jpg";
import k6 from "../images/lizzie&goldie1.jpg";
import k7 from "../images/naomi-1.jpg";
import k8 from "../images/naomi&me.jpg";

const HomeGallery = () => {
  return (
    <div className="mx-[7%] my-[5%]">
      <h1 className="text-5xl font font-['Lobster'] text-center py-4 mb-10">
        Galley
      </h1>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="h-full">
          <button className="h-full w-full">
            <img
              src={k1}
              className="h-full w-full object-cover rounded-md"
              alt="k1"
            />
          </button>
        </div>
        <div>
          <button className="h-full w-full">
            <img
              src={k2}
              className="h-full w-full object-cover rounded-md"
              alt="k2"
            />
          </button>
        </div>
        <div>
          <button className="h-full w-full">
            <img
              src={k3}
              className="h-full w-full object-cover rounded-md"
              alt="k3"
            />
          </button>
        </div>
        <div>
          <button className="h-full w-full">
            <img
              src={k4}
              className="h-full w-full object-cover rounded-md"
              alt="k4"
            />
          </button>
        </div>
        <div>
          <button className="h-full w-full bg-red-200">
            <img
              src={k5}
              className="h-full w-full object-cover rounded-md"
              alt="k5"
            />
          </button>
        </div>
        <div>
          <button className="h-full w-full ">
            <img
              src={k6}
              className="h-full w-full object-cover rounded-md"
              alt="k6"
            />
          </button>
        </div>
        <div>
          <button className="h-full w-full ">
            <img
              src={k7}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
        <div>
          <button className="h-full w-full ">
            <img
              src={k8}
              className="h-full w-full object-cover rounded-md"
              alt="k8"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
