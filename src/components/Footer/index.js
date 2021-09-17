import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full bg-black">
      <div style={{ fontFamily: 'Roboto' }}>

        <div class="">
          <div>
            <div class="container mx-auto px-4 sm:px-6 lg:px-20 py-12">
              <div class="lg:flex">
                <div class="w-full lg:w-2/3">
                  <div class="lg:flex">
                    <div class="w-full mb-12 lg:mb-0 lg:w-1/2">
                      <h2 style={{ fontFamily: 'Baloo Tamma 2' }}
                        class="font-bold text-xl text-gray-100 mb-4">Piroll Desgin, Inc</h2>
                      <p class="text-gray-400">
                      © 2021 piroll. All rights <br />  reserved
                      Designed by rubirurk
                      </p>
                      <div class="flex mt-6">
                        <i class="flex items-center justify-center h-12 w-12 mr-1 rounded-full fab fill-current text-white text-xl fa-facebook-f"></i>
                        <i class="flex items-center justify-center h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope"></i>
                        <i class="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram"></i>
                        <i class="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-twitter"></i>
                      </div>
                    </div>
                    <div class="w-full lg:w-1/2 lg:flex lg:px-6 ">
                      <div class="w-full mb-6 lg:mb-0 lg:w-1/2">
                        <h2 class="font-bold text-gray-100 mb-4">
                          Useful Links</h2>
                        <ul class="text-gray-500 text-sm">
                          <li class="pt-1 pb-2">Home</li>
                          <li class="pt-1 pb-2">About us</li>
                          <li class="pt-1 pb-2">Services</li>
                          <li class="pt-1 pb-2">Terms of Services</li>
                          <li class="pt-1 pb-2">Privacy Policy</li>
                        </ul>
                      </div>
                      <div class="w-full mb-6 lg:mb-0 lg:w-1/2">
                        <h2 class="font-bold text-gray-100 mb-4">
                          Our sevices</h2>
                        <ul class="text-gray-500 text-sm">
                          <li class="pt-1 pb-2">Web Design</li>
                          <li class="pt-1 pb-2">Web Development</li>
                          <li class="pt-1 pb-2">Product Management</li>
                          <li class="pt-1 pb-2">Marketing</li>
                          <li class="pt-1 pb-2">Graphics Design</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-1/3">
                  <h2 class=" font-bold text-gray-100 mb-4">
                    Our Newsletter
                  </h2>
                  <div class="text-gray-300 mb-8">
                    Subscribe our weely Newsletter to get regular updates about our blogs.
                  </div>
                  <div class="flex">
                    <input type="text" class="rounded-l px-2 focus:outline-none" />
                    <button class="text-gray-200 rounded-r bg-blue-500 px-4 py-2 focus:outline-none">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="container mx-auto px-6 lg:px-20 py-6">
              <div class="flex justify-center text-gray-300 mb-1">
                © 2020 All right reserved.
              </div>
              <div class="flex font-light justify-center text-gray-500 text-sm">
                <p>Designed by <span class="font-bold">Hadi</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};