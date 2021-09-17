import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex items-center justify-between sm:px-2 py-3 bg-gray-200" style={{ fontFamily: 'Roboto' }}>
        <div className="bg-gray-200 container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-base leading-relaxed inline-block mr-4 py-2 whitespace-nowrap font-bold"
              href="#pablo"
            >
              eVantage
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={ "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id=""
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="home"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="about"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="work"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Work</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="process"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Process</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="services"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="testimonials"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Testimonials</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="contact"
                >
                  <i className="text-lg leading-lg  opacity-75"></i><span className="">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}












// import React from "react";
// import { Link } from "react-scroll"
// import { animateScroll as scroll } from "react-scroll";

// export const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   return (
//     <>
//       <nav className="fixed z-50 bg-gray-200 w-full flex flex-wrap items-center justify-between px-2 py-3">
//         <div className="container px-2 sm:px-4 md:px-4 mx-auto flex flex-wrap items-center justify-between" >
//           <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer" >
//             <Link
//               className="text-lg font-bold uppercase text-gray-600"
//               to="home" smooth={true} duration={1000} onClick={() => scroll.scrollToTop()}
//             >
//               CODEURZ
//             </Link>
//             <button
//               type="button"
//               className="text-gray-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden focus:outline-none"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <svg
//                 className="fill-current stroke-current stroke-1 text-gray-500 sm:bg cursor-pointer"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//               >
//                 <title>menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//               </svg>
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center lg:bg-gray-200 sm:bg-white" +
//               (navbarOpen ? " flex" : " hidden")
//             }
//             id=""
//           >
//             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//               <li className="nav-item">
//                 <Link
//                   className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
//                   to="/Home" smooth={true} duration={1000}
//                 >
//                   <span className="">Home</span>
//                 </Link>
//               </li>
//               <li className="">
//                 <Link
//                   className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
//                   to="about" smooth={true} duration={1000}
//                 >
//                   <span className="">About</span>
//                 </Link>
//               </li>
//               <li className="">
//                 <Link
//                   className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
//                   to="work" smooth={true} duration={1000}
//                 >
//                   <span className="">Work</span>
//                 </Link>
//               </li>
//               <li className="">
//                 <Link
//                   className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
//                   to="process" smooth={true} duration={1000}
//                 >
//                   <span className="">Process</span>
//                 </Link>
//               </li>
//               <li className="">
//                 <Link
//                   className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
//                   to="services" smooth={true} duration={1000}
//                 >
//                   <span className="">Services</span>
//                 </Link>
//               </li>
//               <li className="">
//                 <Link
//                   className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
//                   to="testimonial" smooth={true} duration={1000}
//                 >
//                   <span className="">testimonials</span>
//                 </Link>
//               </li>
//               <li className="">
//                 <Link
//                   className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-gray-600 hover:opacity-75 cursor-pointer"
//                   to="form" smooth={true} duration={1000}
//                 >
//                   <span className="">Contact</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }