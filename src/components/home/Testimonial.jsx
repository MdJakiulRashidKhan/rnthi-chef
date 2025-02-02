import React from "react";

const Testimonial = () => {
  return (
    <div className="container mx-auto py-12 px-6 sm:px-12 md:px-24 lg:px-36">
      <div className="flex flex-col space-y-4">
        <p className="text-orange-500 text-center lg:text-left">Get Inspired</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
          <div className="flex items-center">
            <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center md:text-left">
              Chefaca alumni{" "}
              <span className="inline">
                testim
                <img
                  src="/images/textimg.png"
                  alt="Text Icon"
                  className="w-12 h-12 inline-block m-0 p-0"
                />
                NIALS
              </span>
            </h1>
          </div>
          <div className="flex justify-center items-center mt-4 md:mt-0">
            <button className="btn px-8 py-2 text-white bg-gradient-to-bl from-red-500 to-red-900 capitalize">
              VIEW ALL Testimonial
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col xl:flex-row my-12 gap-6">
        <div className="w-full  mb-6 xl:mb-0">
          <img
            className="w-full h-[400px] xl:h-[740px] rounded-xl object-cover"
            src="/images/testimonial.png"
            alt="Testimonial"
          />
        </div>
        <div className="w-full  space-y-3 px-6 md:px-12 xl:px-24 bg-orange-100 h-auto xl:h-[740px] flex flex-col items-center justify-center rounded-xl py-2">
          {/* Testimonial 1 */}
          <div className="space-y-4 border-l-2 border-orange-300 p-6">
            <p>
              "Thanks to Chefaca, I've transformed my love for cooking into a
              career. The experience was both challenging and rewarding."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/images/test1.png"
                alt="Daud Hossain Suppto"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h5 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent font-bold text-xl">
                  DAUD HOSSAIN SUPTO
                </h5>
                <p className="font-bold text-gray-800">Culinary Graduate</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="space-y-4 border-l-2 border-orange-300 p-6">
            <p>
              "Thanks to Chefaca, I've transformed my love for cooking into a
              career. The experience was both challenging and rewarding."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/images/test2.png"
                alt="Mahabub Jamil"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h5 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent font-bold text-xl">
                  Mahabub Jamil
                </h5>
                <p className="font-bold text-gray-800">Restaurant Owner</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="space-y-4 border-l-2 border-orange-300 p-6">
            <p>
              "Thanks to Chefaca, I've transformed my love for cooking into a
              career. The experience was both challenging and rewarding."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/images/test3.png"
                alt="Hasibur Rahman"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h5 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent font-bold text-xl">
                  Hasibur Rahman
                </h5>
                <p className="font-bold text-gray-800">Food Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
