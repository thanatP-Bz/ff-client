import React from "react";
import friendImg from "../images/friend.jpg";
import family1 from "../images/family-1.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="my-[7%] mx-[7%]">
        {/* top */}
        <div className="flex flex-col mt-20 md:mt-0">
          <div className="h-full">
            <img
              src={family1}
              className="object-cover rounded-md max-h-[80vh] w-screen"
              alt="friend"
            />
          </div>

          <div className="flex flex-col mt-10">
            <div className="flex items-center">
              <div className="px-5  bg-white rounded-md text-center mr-0 ">
                <h1 className="text-4xl font-['Lobster'] ">
                  What I would like to say
                </h1>
                <p className="my-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi, qui ipsa fugiat dolorem neque error quidem amet vero
                  iure officiis. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Et quaerat dolorem, fugit minus repellendus
                  ea!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* box 1 */}
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2">
          <div className="flex items-center">
            <div className="px-5  bg-white rounded-md text-center mr-0 ">
              <h1 className="text-4xl font-['Lobster'] ">
                What I would like to say
              </h1>
              <p className="my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                qui ipsa fugiat dolorem neque error quidem amet vero iure
                officiis. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Et quaerat dolorem, fugit minus repellendus ea!
              </p>
            </div>
          </div>

          <div>
            <img
              src={friendImg}
              className=" object-cover rounded-md"
              alt="friend"
            />
          </div>
        </div>

        {/* box 2 */}
        <div className="grid grid-cols-1  md:grid-cols-2 ">
          <div className="h-full">
            <img
              src={friendImg}
              className=" object-cover rounded-md"
              alt="friend"
            />
          </div>

          <div className="flex items-center">
            <div className="px-5  bg-white rounded-md text-center mr-0 ">
              <h1 className="text-4xl font-['Lobster'] ">
                What I would like to say
              </h1>
              <p className="my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                qui ipsa fugiat dolorem neque error quidem amet vero iure
                officiis. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Et quaerat dolorem, fugit minus repellendus ea!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
