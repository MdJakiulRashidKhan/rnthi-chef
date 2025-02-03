import React from "react";

const Story = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center flex-col md:flex-row mx-auto w-96  gap-10 pt-36 pb-20 ">
        <div className="w-24 lg:w-40">
          <img className="w-full" src="/images/slogo1.png" alt="" />
        </div>
        <div className="w-24 lg:w-40">
          <img className="w-full" src="/images/slogo2.png" alt="" />
        </div>
        <div className="w-24 lg:w-40">
          <img className="w-full" src="/images/slogo3.png" alt="" />
        </div>
        <div className="w-24 lg:w-40">
          <img className="w-full" src="/images/slogo4.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full p-2 lg:w-4/12 space-y-16">
          <div className="">
            <img className="w-full h-full" src="/images/story1.png" alt="" />
          </div>
          <div className="">
            <div className="max-w-4xl bg-[#D9C58E] px-20 py-16 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-red-900 uppercase border-b pb-2">
                Our Contact
              </h2>
              <p className="text-gray-800 mt-4 mulish">
                21/A, Road - 2, Block A, Aftab Nagar (Beside East West
                University), Merul Badda, Dhaka, Bangladesh, 1212
              </p>
              <p className="text-gray-800 mt-4 font-semibold mulish">
                +8801552-478007
              </p>
              <p className="text-gray-800 mt-1 mulish">rnhi.bd@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 md:w-8/12 space-y-4">
          <div className="">
            <div className="space-y-3">
              <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-4xl lg:text-6xl font-bold capitalize  items-center inline-block pb-4">
                A Little Story{" "}
                <span>
                  Ab
                  <img
                    src="/images/textimg.png"
                    alt="O icon"
                    className="w-10 h-10 lg:w-12 lg:h-12  mb-2  inline-block"
                  />
                  ut <br />
                  Our Journey
                </span>
              </h1>
              <p className="text-gray-600 mulish">
                RN Tourism and Hospitality Management Institute (RNTHMI) is an
                approved center from the City and Guilds of London Institute,
                UK, and nationally affiliated with BTEB and NSDA of Bangladesh.
                Located in Aftab Nagar, Dhaka, and South Khulshi, Chittagong, we
                offer comprehensive courses in tourism and hospitality
                management, including food preparation and culinary arts. Join
                us to embark on a journey of excellence and innovation in the
                hospitality industry.
              </p>
            </div>
          </div>
          <div className="">
            <img className="w-full" src="/images/story2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
