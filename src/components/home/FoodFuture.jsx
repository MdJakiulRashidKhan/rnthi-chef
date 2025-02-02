import React from "react";

const FoodFuture = () => {
  return (
    <div className="container mx-auto pt-12 px-2 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-orange-300 relative">
        {/* Students Trained */}
        <div className="text-center py-6 border-b md:border-b-0 sm:border-r border-orange-300 space-y-3">
          <h3 className="text-4xl sm:text-5xl font-bold text-orange-300">
            10K+
          </h3>
          <p className="text-xl sm:text-2xl bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
            Students Trained
          </p>
        </div>

        {/* Courses Offered */}
        <div className="text-center py-6 border-b md:border-b-0 sm:border-r border-orange-300 space-y-3 ">
          <h3 className="text-4xl sm:text-5xl font-bold text-orange-300">
            08+
          </h3>
          <p className="text-xl sm:text-2xl bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
            Courses Offered
          </p>

          <img
            src="/images/textimg.png"
            alt="decorative icon"
            className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin "
          />
        </div>

        {/* Award-Winning */}
        <div className="text-center py-6 border-b md:border-b-0 sm:border-r border-orange-300 space-y-3">
          <h3 className="text-4xl sm:text-5xl font-bold text-orange-300">04</h3>
          <p className="text-xl sm:text-2xl bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
            Award-Winning
          </p>
        </div>

        {/* Alumni Success */}
        <div className="text-center py-6 space-y-3">
          <h3 className="text-4xl sm:text-5xl font-bold text-orange-300">
            5K+
          </h3>
          <p className="text-xl sm:text-2xl bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
            Alumni Success
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodFuture;
