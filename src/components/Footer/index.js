import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  const [viewPortEntered] = React.useState(false);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex w-full bg-black">
        <div style={{ fontFamily: 'Roboto' }}>

          <div className="">
            <div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-12">
                <div className="lg:flex">
                  <div className="w-full lg:w-2/3">
                    <div className="lg:flex">
                      <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
                        <h2 style={{ fontFamily: 'Baloo Tamma 2' }}
                          className="font-bold text-xl text-gray-100 mb-4">Piroll Desgin, Inc</h2>
                        <p className="text-gray-400">
                          © 2021 piroll. All rights <br />  reserved
                          Designed by rubirurk
                        </p>
                        <div data-aos="fade-up" className="flex mt-6">
                          <i className="flex items-center justify-center h-12 w-12 mr-1 rounded-full fab fill-current text-white text-xl fa-facebook-f cursor-pointer"></i>
                          <i className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope cursor-pointer"></i>
                          <i className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram cursor-pointer"></i>
                          <i className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-twitter cursor-pointer"></i>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
                        <div data-aos="fade-right" className="w-full mb-6 lg:mb-0 lg:w-1/2">
                          <h2 className="font-bold text-gray-100 mb-4">
                            Useful Links</h2>
                          <ul className="text-gray-500 text-sm">
                            <li className="pt-1 pb-2">Home</li>
                            <li className="pt-1 pb-2">About us</li>
                            <li className="pt-1 pb-2">Services</li>
                            <li className="pt-1 pb-2">Terms of Services</li>
                            <li className="pt-1 pb-2">Privacy Policy</li>
                          </ul>
                        </div>
                        <div data-aos="fade-right" className="w-full mb-6 lg:mb-0 lg:w-1/2">
                          <h2 className="font-bold text-gray-100 mb-4">
                            Our sevices</h2>
                          <ul className="text-gray-500 text-sm">
                            <li className="pt-1 pb-2">Web Design</li>
                            <li className="pt-1 pb-2">Web Development</li>
                            <li className="pt-1 pb-2">Product Management</li>
                            <li className="pt-1 pb-2">Marketing</li>
                            <li className="pt-1 pb-2">Graphics Design</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3">
                    <h2 className=" font-bold text-gray-100 mb-4">
                      Our Newsletter
                    </h2>
                    <div className="text-gray-300 mb-8">
                      Subscribe our weely Newsletter to get regular updates about our blogs.
                    </div>
                    <div className="flex">
                      <input type="text" className="rounded-l px-2 focus:outline-none" />
                      <button className="text-gray-200 rounded-r bg-blue-500 px-4 py-2 focus:outline-none">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container mx-auto sm:px-6 px-4 lg:px-20 py-6">
                <div className="flex lg:justify-center text-gray-300 mb-1">
                  © 2020 All right reserved.
                </div>
                <div className="flex font-light lg:justify-center text-gray-500 text-sm">
                  <p>Designed by <span className="font-bold">Hadi</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};