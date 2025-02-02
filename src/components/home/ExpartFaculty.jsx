import React from "react";

const ExpartFaculty = () => {
  return (
    <div className="container mx-auto py-1 space-y-10 my-12">
      <div className="flex items-center justify-center h-20 py-20">
        <div className="flex flex-col items-center space-y-5">
          <p className="text-orange-500">Teachers and School Counselors</p>
          <div className="flex items-center">
            <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-2xl lg:text-6xl font-bold capitalize  items-center inline-block">
              <img
                src="/images/textimg.png"
                alt="O icon"
                className="w-10 h-10 lg:w-12 lg:h-12  p-0 ml-2 inline-block"
              />
              <h1 className=" text-2xl lg:text-6xl font-bold capitalize  items-center inline">
                ur Expert Faculty
              </h1>
            </h1>
          </div>
          <p className="w-10/12 text-center">
            Our expert faculty bring unparalleled knowledge and skills from
            esteemed culinary institutes. They are dedicated to shaping the
            future of aspiring culinary professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpartFaculty;
