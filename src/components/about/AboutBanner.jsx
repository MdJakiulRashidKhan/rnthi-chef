import React from "react";

const AboutBanner = () => {
  return (
    <div className="container mx-auto py-4 space-y-10">
      <div className="flex items-center justify-center py-12 md:py-20">
        <div className="flex flex-col items-center space-y-5">
          <p className="text-orange-500 text-center">
            A LEGACY OF CULINARY EXCELLENCE
          </p>
          <div className="flex items-center justify-center">
            <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold text-center">
              <span className="flex items-center">
                {" "}
                AB{" "}
                <img
                  src="/images/textimg.png"
                  alt="decorative icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mt-2 p-0"
                />{" "}
                UT US
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20 w-full mx-auto">
        <img
          src="/images/malechefs.png"
          alt="Male chefs working"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default AboutBanner;
