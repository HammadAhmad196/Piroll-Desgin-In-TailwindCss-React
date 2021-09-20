import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import gallery from "../../Data/Process/gallery";

export const Gallery = () => {

  return (
    <div className="" style={{ fontFamily: 'Roboto' }}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {
          gallery.map((gallery) => (
            <div>
              <div className="transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={gallery.image} alt="brand_images"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <FaEye className="w-10 h-10 " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex w-full bg-gray-200 h-20 items-center justify-center">
        <h4 className="text-center">Load More Work</h4>
      </div>
    </div>
  );
};