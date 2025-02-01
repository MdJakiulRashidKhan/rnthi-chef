import React from "react";

const FacultyBanner = () => {
  return (
    <div className="flex items-center justify-center h-auto py-10 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-orange-500 text-center text-sm sm:text-base md:text-lg">
          Teachers and School Counselors
        </p>
        <div className="flex items-center ">
          <img
            src="/images/textimg.png"
            alt="Faculty Logo"
            className="w-10 h-10 sm:w-14 sm:h-14 mt-2"
          />
          <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-bold text-center">
            UR FACULTY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FacultyBanner;
