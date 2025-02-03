import React, { useState } from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router";

const NavbarHome = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = 5;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 1 ? totalSlides : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides ? 1 : prevIndex + 1
    );
  };

  return (
    <div className="h-full">
      {/* Carousel Section */}
      <div className="carousel   w-full h-full relative">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            id={`item${num}`}
            className={`carousel-item w-full ${
              currentIndex === num ? "block" : "hidden"
            }`}
          >
            <img
              src={`/images/bannernav${num}.png`}
              className="w-full h-[1010px] lg:h-[1192px] md:h-[1030px] object-cover"
              alt={`Slide ${num}`}
            />
          </div>
        ))}
      </div>
      {/* line  */}
      <div className="w-full h-[1px] absolute top-18 md:top-22 lg:top-25 bottom-0 left-1/2 transform -translate-x-1/2 bg-white z-50 "></div>
      {/* Slide Controls */}
      <div className="flex w-full justify-center items-center gap-4 py-2 absolute top-24 md:top-32 lg:top-36 left-1/2 transform -translate-x-1/2">
        <button
          onClick={goToPrevious}
          className="text-sm md:text-xl uppercase tracking-widest text-white hover:text-gray-400 transition"
        >
          PREV
        </button>
        <div className="bg-white w-5 md:w-20 lg:w-36 h-[1px] mr-1 md:mr-4 lg:mr-10"></div>
        {[1, 2, 3, 4, 5].map((num, index, arr) => (
          <span key={num} className="flex items-center">
            <button
              onClick={() => setCurrentIndex(num)}
              className={`text-sm md:text-2xl font-light tracking-wide ${
                currentIndex === num
                  ? "text-red-800"
                  : "text-white hover:text-gray-300 transition"
              }`}
            >
              {num.toString().padStart(2, "0")}
            </button>
            {index < arr.length - 1 && (
              <span className="text-gray-400 md:mx-2">|</span>
            )}
          </span>
        ))}
        <div className="bg-white w-5 md:w-20 lg:w-36 h-[1px] ml-1 md:ml-4 lg:ml-10"></div>
        <button
          onClick={goToNext}
          className="text-sm md:text-xl uppercase tracking-widest text-white hover:text-gray-400 transition"
        >
          NEXT
        </button>
      </div>

      {/* Welcome Section */}
      <div className="flex items-center absolute top-1 lg:top-25 bottom-0 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-col items-center justify-center absolute top-56 left-1/2 transform -translate-x-1/2 z-50 w-full text-center">
          <div className="flex flex-col items-center justify-center text-center text-white text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold">
            <span>
              <h1 className="flex items-center">
                WelCOME
                <img
                  src="/images/textimg.png"
                  alt="decorative icon"
                  className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-2 md:mx-4 animate-spin"
                />
                TO
              </h1>
            </span>
            <h1>
              <span className="bg-gradient-to-r from-red-900 to-orange-50 bg-clip-text mr-6 text-transparent">
                RENTHI
              </span>
              INSTITUTE
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute top-86 md:-bottom-80 lg:top-190 left-0 right-0">
        <div className="mx-auto  container space-y-5 ">
          <div className="flex justify-center lg:justify-end">
            <p className="w-full lg:w-4/12 text-white text-sm md:text-lg lg:text-xl lg:mr-16 p-2 lg:p-0">
              They served not as an interior agency but as true partners who
              helped us build our dream home. Recommended!
              <span className="flex justify-end mr-5"> ~ John Doe</span>
            </p>
          </div>

          <div className="flex flex-col sm:w-full   lg:flex-row  gap-2 items-center justify-center lg:justify-between w-full  mx-auto">
            <div className="bg-[#b3a88770] lg:bg-[#EAD89F] p-2 md:p-6 lg:py-10 lg:px-8 rounded-lg shadow-lg  sm:w-full md:w-10/12 lg:w-7/12 m-2">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">
                Let’s Create Your Dream Space
              </h2>

              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-4 space-y-8 lg:space-y-0 lg:space-x-4">
                <div className="flex flex-col items-center lg:items-start">
                  <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-800">
                    2.5K
                  </h6>
                  <p className="text-gray-600 text-xs md:text-sm ">
                    Certification Done
                  </p>
                </div>

                <div className="flex flex-col  items-center lg:items-start">
                  <h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-800">
                    100+
                  </h6>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Partners All Over the World
                  </p>
                </div>

                <div className="flex-grow border-b border-gray-500 pb-1">
                  <p className="text-gray-600 text-xs md:text-sm lg:mt-5">
                    Tell Us About Your Mind
                  </p>
                </div>

                <button className="bg-red-800 text-white px-4 py-2 rounded-md font-semibold text-sm md:text-base">
                  Get Quote
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center w-full sm:w-full md:w-full lg:w-5/12">
              <img
                src="/images/badge.png"
                alt="badge"
                className="p-2 lg:p-0  max-w-sm lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 z-50 w-full">
        <div className="navbar container mx-auto py-2 md:py-5 px-2 md:px-5">
          <div className="navbar-start mt-2 md:mt-4">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <GiHamburgerMenu className="text-xl md:text-2xl text-white" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/program">Program</Link>
                </li>
                <li>
                  <Link to="/faculty">Our Faculty</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/certificate">Verify Certificate</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center flex lg:hidden">
            <div className="flex gap-1 mt-2 md:mt-4">
              {[FaFacebook, IoLogoWhatsapp, CiYoutube, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-white hover:bg-blue-700 transition flex"
                  >
                    <Icon className="text-xl md:text-2xl" />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="navbar-end">
            <div className="flex gap-2 mt-2 md:mt-4">
              <div className="hidden items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-white hover:bg-blue-700 transition lg:flex">
                <FaFacebook className="text-xl md:text-2xl" />
              </div>
              <div className="hidden items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-white hover:bg-blue-700 transition lg:flex">
                <IoLogoWhatsapp className="text-xl md:text-2xl" />
              </div>
              <div className="hidden items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-white hover:bg-blue-700 transition lg:flex">
                <CiYoutube className="text-xl md:text-2xl" />
              </div>
              <div className="hidden items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-white hover:bg-blue-700 transition lg:flex">
                <FaInstagram className="text-xl md:text-2xl" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full  lg:ml-8 text-white hover:bg-gray-800 transition">
                <IoIosSearch className="text-xl md:text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
