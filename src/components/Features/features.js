import React from "react";
import { BsDiamond } from "react-icons/bs";
import { FaGamepad, FaLaptopCode, FaMobileAlt, FaRegStar } from "react-icons/fa";
import { MdFlightTakeoff, MdGames, MdGraphicEq } from "react-icons/md";
import features from "../../Data/Features";

export const Features = () => {
  return (
    <div className="bg-gray-100 text-gray-400  px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {
          features.map((features) => (
            <div className="md:px-12 sm:text-center md:text-center sm:px-0">
              <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
                <img src={features.image} alt="icon_images"
                  className=" w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                {features.name}
              </h6>
              <div className="mb-2 text-gray-700">
                {features.description}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};