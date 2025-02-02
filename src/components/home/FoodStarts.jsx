import React from "react";

const FoodStarts = () => {
  return (
    <div className="container mx-auto py-1 space-y-10 mt-12 mb-20">
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center space-y-5">
          <p className="text-orange-500">Resourceful information</p>
          <div className="flex items-center justify-center text-center">
            <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-5xl lg:text-6xl font-bold capitalize inline-block">
              Your
              <span className="inline-block items-center ml-2">
                fo
                <img
                  src="/images/textimg.png"
                  alt="O icon"
                  className="w-12 h-12 inline-block"
                />
                d future starts here
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 justify-between lg:w-[1200px] mx-auto">
        <div>
          <img src="/images/start1.png" className="rounded-xl" alt="" />
        </div>
        <div>
          <img src="/images/start2.png" className="rounded-xl" alt="" />
        </div>
        <div>
          <img src="/images/start3.png" className="rounded-xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodStarts;
