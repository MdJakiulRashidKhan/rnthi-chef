import React from "react";

const AboutContent = () => {
  return (
    <div className="container mx-auto pt-20 space-y-4">
      <div className="flex items-center py-12 px-6 md:px-12 lg:px-0 ">
        <div className="flex flex-col space-y-5">
          <p className="text-orange-500 text-center lg:text-left">
            Chef Academy & Cooking School
          </p>
          <div className="flex justify-center lg:justify-start items-center">
            <h1 className="flex flex-wrap justify-center lg:justify-start text-center lg:text-left bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl font-bold pb-4">
              Greetings from the Institute of
              <span className=" flex items-center pl-3">
                Culinary Educati
                <img
                  src="/images/textimg.png"
                  alt="decorative icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-12 lg:h-12  m-o p-0"
                />
                <span>n</span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <p className="text-gray-800 text-center md:text-left px-4 md:px-0">
        RN Tourism and Hospitality Management Institute (RNTHMI) is an approved
        center from the City and Guilds of London Institute, UK, and nationally
        affiliated with BTEB and NSDA of Bangladesh. Located in Aftab Nagar,
        Dhaka, and South Khulshi, Chittagong, we offer comprehensive courses in
        tourism and hospitality management, including food preparation and
        culinary arts. Join us to embark on a journey of excellence and
        innovation in the hospitality industry.
      </p>

      <div className="flex flex-col md:flex-row items-center border border-orange-200">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto md:h-[750px] object-cover"
            src="/images/aboutb.png"
            alt="about image"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8 pl-6 mt-4 lg:mt-0">
          <p className="text-xl text-orange-400">About RNTHI</p>
          <h4 className="text-3xl bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
            Master At Culinary Arts
          </h4>
          <p className="text-gray-600">
            RN Tourism and Hospitality Management Institute (RNTHMI), approved
            by City and Guilds, UK, and affiliated with BTEB and NSDA, offers
            premier tourism, hospitality, and culinary courses in Dhaka and
            Chittagong.
          </p>
          <div className="space-y-4 border-t-2 p-8 border-orange-200">
            <div className="space-y-3">
              <h4 className="text-3xl bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
                Our Mission
              </h4>
              <p className="text-gray-600">
                To inspire and equip individuals with the culinary skills and
                knowledge to pursue successful careers in the food industry.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-3xl bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
                Our Vision
              </h4>
              <p className="text-gray-600">
                To be the leading culinary academy, recognized for excellence in
                education, innovation, and producing world-class chefs.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-3xl bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
                Our Values
              </h4>
              <p className="text-gray-600">
                We strive for the highest standards of education and training,
                providing a rigorous and enriching learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
