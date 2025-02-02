import React, { useRef } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Locations = () => {
  const dhakaMapRef = useRef(null);
  const chittagongMapRef = useRef(null);

  const centerMapOnUserLocation = (mapRef) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const map = mapRef.current;
          if (map) {
            const center = new window.google.maps.LatLng(latitude, longitude);
            map.setCenter(center);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="container mx-auto py-16 px-6 lg:px-16 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-12 ">
        <small className="text-sm text-orange-500 tracking-widest">
          RNTHI CAMPUSES
        </small>
        <div className="flex justify-center md:justify-start items-center">
          <h1 className="flex flex-wrap justify-center bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-5xl md:text-5xl lg:text-7xl font-bold pb-4">
            Explore our academy{" "}
            <span className="inline-flex items-center">
              <span className="inline-flex items-center pl-5">
                L
                <img
                  src="/images/textimg.png"
                  alt="decorative icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-14 lg:h-14"
                />
              </span>
              cations
            </span>
          </h1>
        </div>
      </div>

      {/* Locations Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-72 lg:gap-8 mt-60 justify-center">
        {/* Dhaka Location */}
        <div className="relative flex justify-center mt-12">
          <img
            src="/images/dhk.png"
            alt="Dhaka Campus"
            className="absolute z-20 translate-x-[32px] -translate-y-[295px]"
          />
          <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden relative w-[338px] h-[506px]">
            <div className="py-8 px-10 space-y-3">
              <h2 className="text-2xl font-semibold text-red-700">Dhaka</h2>
              <small className="text-gray-600 block h-16">
                21/A, Road-2, Block-A, Jahurul Islam City, <br />
                Rampura Bridge, Dhaka 1212
              </small>
              <div className="flex justify-between">
                <p className="text-sm">rnhi.bd@gmail.com</p>
                <p className="text-sm">+088-015-524880007</p>
              </div>
              {/* Map Container */}
              <div className="relative w-full h-48">
                <iframe
                  ref={dhakaMapRef}
                  src="https://www.google.com/maps/embed?..."
                  className="w-full h-72 border-0 rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Overlay Button */}
                <button
                  onClick={() => centerMapOnUserLocation(chittagongMapRef)}
                  className="absolute  bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-400 to-red-900 text-white  py-2 rounded-lg shadow-md flex items-center justify-around gap-2 w-48 text-sm"
                >
                  <div className="flex gap-2">
                    <IoLocationSharp className="text-amber-500 text-2xl" />{" "}
                    <p> GET THE LOCATION</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chittagong Location */}
        <div className="relative flex justify-center mt-12 ">
          <img
            src="/images/ctg.png"
            alt="Chittagong Campus"
            className="absolute z-20 translate-x-[32px] -translate-y-[295px]"
          />
          <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden relative w-[338px] h-[506px]">
            <div className="py-8 px-10 space-y-3">
              <h2 className="text-2xl font-semibold text-red-700">
                Chittagong
              </h2>
              <small className="text-gray-600 block h-16">
                RN Tourism & Hospitality Management Institute <br />
                South Khulshi, Chittagong, Bangladesh
              </small>
              <div className="flex justify-between">
                <p className="text-sm">rnhi.bd@gmail.com</p>
                <p className="text-sm">+088-015-524880007</p>
              </div>
              {/* Map Container */}
              <div className="relative w-full h-48">
                <iframe
                  ref={chittagongMapRef}
                  src="https://www.google.com/maps/embed?..."
                  className="w-full h-72 border-0 rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Overlay Button */}
                <button
                  onClick={() => centerMapOnUserLocation(chittagongMapRef)}
                  className="absolute  bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-400 to-red-900 text-white  py-2 rounded-lg shadow-md flex items-center justify-around gap-2 w-48 text-sm"
                >
                  <div className="flex gap-2">
                    <IoLocationSharp className="text-amber-500 text-2xl" />{" "}
                    <p> GET THE LOCATION</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
