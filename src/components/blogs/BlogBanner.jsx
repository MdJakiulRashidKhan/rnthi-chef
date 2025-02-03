import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { LuUser } from "react-icons/lu";

const BlogBanner = () => {
  return (
    <div className="container mx-auto p-5 mt-8">
      <div className="text-center space-y-2">
        <small className="text-orange-400 text-base">
          Culinary School Blog{" "}
        </small>
        <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-7xl font-bold">
          Latest News & <br />
          Article
        </h1>
      </div>
      <div className="mt-16">
        <h1 className="text-7xl font-medium text-center">
          Master the Art of Culinary <br />
          Excellence
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-5 text-orange-500 text-sm sm:text-base">
          <div className="flex items-center gap-2 mulish">
            <LuUser />
            <p>Md. Tarif Al-Mozahed</p>
          </div>
          <span className="hidden sm:block">|</span>
          <div className="flex items-center gap-2 mulish">
            <CiClock1 />
            <p>August 2, 2023</p>
          </div>
          <span className="hidden sm:block">|</span>
          <div className="flex items-center gap-2 mulish">
            <FiMessageCircle />
            <p>No Comment</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <img
          className="w-full h-auto md:h-[666px] px-4 rounded-4xl"
          src="/images/bannerblog.png"
          alt="Blog Banner"
        />
      </div>
    </div>
  );
};

export default BlogBanner;
