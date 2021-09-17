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






// <div className="bg-gray-100 text-gray-400  px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
//       <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
//         <div className="md:px-12 sm:text-center md:text-center sm:px-0">
//           <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
//             <BsDiamond
//               className=" w-8 h-8 sm:w-10 sm:h-10" />
//           </div>
//           <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
//             UI/Ux Design
//           </h6>
//           <div className="mb-2 text-gray-700">
//             Be set fourth land and <br /> darkness make it wherein own
//           </div>
//         </div>
//         <div className="md:px-12 sm:text-center md:text-center sm:px-0">
//           <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
//             <FaLaptopCode
//               className=" w-8 h-8 sm:w-10 sm:h-10" />
//           </div>
//           <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
//             WEB DEVELOPMENT
//           </h6>
//           <div className="mb-2 text-gray-700">
//             A she'd them bring void  <br /> moving third she'd kind fill
//           </div>
//         </div>
//         <div className="md:px-12 sm:text-center md:text-center sm:px-0">
//           <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
//             <FaMobileAlt
//               className=" w-8 h-8 sm:w-10 sm:h-10" />
//           </div>
//           <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
//             APP / MOBILE
//           </h6>
//           <div className="mb-2 text-gray-700">
//             Dominion man second spirit  <br />  he, earth they're creeping
//           </div>
//         </div>
//         <div className="md:px-12 sm:text-center md:text-center sm:px-0">
//           <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
//             <FaGamepad
//               className="  w-8 h-8 sm:w-10 sm:h-10" />
//           </div>
//           <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
//             GAME DESIGN
//           </h6>
//           <div className="mb-2 text-gray-700">
//             Morning his saying moveth  <br />  it multiply appear life be
//           </div>
//         </div>
//       </div>
//       <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
//         <div className="md:px-12 sm:text-center md:text-center sm:px-0">
//           <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
//             <MdFlightTakeoff
//               className=" w-8 h-8 sm:w-10 sm:h-10" />
//           </div>
//           <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
//             SEO / MARKETING
//           </h6>
//           <div className="mb-2 text-gray-700">
//             Give won't after land  <br />  fill creeping meat you, may
//           </div>
//         </div>
//         <div className="md:px-12 sm:text-center md:text-center sm:px-0">
//           <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
//             <FaRegStar
//               className=" w-8 h-8 sm:w-10 sm:h-10" />
//           </div>
//           <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
//             PHOTOGRAPHY
//           </h6>
//           <div className="mb-2 text-gray-700">
//             Creepth one seas cattle  <br />  grass give moving saw give
//           </div>
//         </div>
//         <div className="md:px-12 sm:text-center md:text-center sm:px-0">
//           <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
//             <MdGames
//               className=" w-8 h-8 sm:w-10 sm:h-10" />
//           </div>
//           <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
//             GAME DESIGN
//           </h6>
//           <div className="mb-2 text-gray-700">
//             Open, greate whales air <br /> rule for, fourth life whales
//           </div>
//         </div>
//         <div className="md:px-12 sm:text-center md:text-center sm:px-0">
//           <div className="flex items-center sm:justify-center md:justify-center w-10 h-10 sm:mx-auto mb-2 sm:mb-4 rounded-full sm:w-12 sm:h-12">
//             <MdGraphicEq
//               className=" w-8 h-8 sm:w-10 sm:h-10" />
//           </div>
//           <h6 className="text-black mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
//             ILLUSTRATION
//           </h6>
//           <div className="mb-2 text-gray-700">
//             Whales likeness hath,<br /> man kind for them air two won't
//           </div>
//         </div>
//       </div>
//     </div>