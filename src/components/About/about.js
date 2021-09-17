import React from "react";

export const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="about" style={{fontFamily: 'Roboto'}}>
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="py-px mb-4 text-xl uppercase font-bold">
          About Us
        </p>
        <p className="text-base text-gray-800">
          Divide have don't man wherein air fourth, Own itself make have night won't make A you under Seed Appear which good give Own give air without fowl move dry first heaven fruit, dominion she'd won't very well.
        </p>
      </div>
      <div className="flex sm:items-center sm:justify-center">
        <img
          className="w-36"
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Signature_of_Ann_Miller.svg"
          alt="signature"
        />
      </div>
    </div>
  );
};