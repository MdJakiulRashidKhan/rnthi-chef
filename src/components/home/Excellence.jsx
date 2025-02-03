import React from "react";

const Excellence = () => {
  return (
    <div className="container mx-auto py-10">
      {/* First Grid */}
      <div className="flex flex-col lg:flex-row gap-2">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="/images/11.png"
            alt="Image 11"
            className="w-full h-auto lg:w-full lg:h-full rounded-lg object-cover"
          />
        </div>

        {/* Center Section */}
        <div className="flex-1 flex flex-col space-y-4">
          <div className="text-center mb-12 space-y-2">
            <small className="text-sm text-orange-500 tracking-widest">
              Gallery
            </small>
            <div className="w-full lg:w-[800px] text-center">
              <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl font-bold capitalize inline-block">
                A Glimpse
                <span>
                  <img
                    src="/images/textimg.png"
                    alt="O icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 p-0 ml-2 inline-block"
                  />
                  f Excellence
                </span>
              </h1>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed px-2 mulish">
              Step into our world of culinary artistry through our gallery,
              showcasing vibrant moments of learning, creativity, and passion.
              Experience the journey of our students and faculty in action!
            </p>
            <div className="flex justify-center items-center mt-4">
              <button className="btn px-6 sm:px-8 py-2 text-white bg-gradient-to-bl from-red-500 to-red-900 rounded-md">
                VIEW MORE
              </button>
            </div>
          </div>

          {/* Center Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
            <img
              src="/images/12.png"
              alt="Image 12"
              className="w-full h-auto sm:w-full sm:h-[200px] lg:w-[400px] lg:h-[400px] rounded-lg object-cover"
            />
            <img
              src="/images/13.png"
              alt="Image 13"
              className="w-full h-auto sm:w-full sm:h-[200px] lg:w-[400px] lg:h-[400px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/images/14.png"
            alt="Image 14"
            className="w-full h-auto lg:w-full lg:h-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        <div>
          <img
            src="/images/15.png"
            alt="Image 15"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <img
            src="/images/16.png"
            alt="Image 16"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="/images/17.png"
            alt="Image 17"
            className="w-full h-auto rounded-lg mask bottom-blur"
          />
          <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black/50 to-transparent backdrop-blur-xs"></div>
        </div>
        <div className="relative">
          <img
            src="/images/18.png"
            alt="Image 18"
            className="w-full h-auto rounded-lg mask bottom-blur"
          />
          <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black/50 to-transparent backdrop-blur-xs"></div>
        </div>
      </div>
    </div>
  );
};

export default Excellence;
