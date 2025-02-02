import React, { useState } from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const FacultyCar = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Track active slide

  const totalSlides = 5; // Total slides in the carousel

  // Function to update active slide number
  const goToSlide = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="bg-orange-100">
      <div className="carousel w-full my-8">
        {[1, 2, 3, 4, 5].map((slide) => (
          <div
            key={slide}
            id={`slide${slide}`}
            className="carousel-item relative w-full"
          >
            <div className="flex items-center w-7/12 mx-auto">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h1 className="text-7xl bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
                    {slide === 1 && "MURSHEDA KHANAM"}
                    {slide === 2 && "Md. OHLDUZZAMAN"}
                    {slide === 3 && "Md. RAFIQUL HAQUE"}
                    {slide === 4 && "Md. NURI ISLAM"}
                    {slide === 5 && "Mohd. ZAHIRUL ISLAM"}
                  </h1>
                  <p className="text-2xl text-black">
                    Trainer and Training Coordinator
                  </p>
                </div>
                <div className="space-y-8">
                  <p>
                    {slide === 1 &&
                      "Mursheda Khanam, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production..."}
                    {slide === 2 &&
                      "Md. Ohiduzzaman, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production..."}
                    {slide === 3 &&
                      "Md. RAFIQUL Haque, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production..."}
                    {slide === 4 &&
                      "Md. Nuri Islam, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production..."}
                    {slide === 5 &&
                      "Mohd. Zahirul Islam, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production..."}
                  </p>
                  <button className="btn bg-gradient-to-r from-red-600 to-red-900 text-white px-8 py-2 mt-4">
                    VIEW PORTFOLIO
                  </button>
                  <div className="flex gap-2 mt-4">
                    <div className="btn btn-outline shadow-md text-red-700">
                      <FaFacebook className="text-2xl" />
                    </div>
                    <div className="btn btn-outline shadow-md text-red-700">
                      <IoLogoWhatsapp className="text-2xl" />
                    </div>
                    <div className="btn btn-outline shadow-md text-red-700">
                      <CiYoutube className="text-2xl" />
                    </div>
                    <div className="btn btn-outline shadow-md text-red-700">
                      <FaInstagram className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full  w-[auto]">
                <img className="h-full" src="/images/fac.png" alt="" />
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${slide === 1 ? totalSlides : slide - 1}`}
                className="btn btn-circle"
                onClick={() => goToSlide(slide === 1 ? totalSlides : slide - 1)}
              >
                ❮
              </a>
              <a
                href={`#slide${slide === totalSlides ? 1 : slide + 1}`}
                className="btn btn-circle"
                onClick={() => goToSlide(slide === totalSlides ? 1 : slide + 1)}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Faculty Images Below */}
      <div className="flex w-7/12 mx-auto justify-between bg-red-100/50 px-6 py-10 -translate-y-52">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`flex flex-col w-40 items-center gap-4 transition-all duration-300 ${
              activeSlide === num ? "scale-105" : "scale-100"
            }`}
          >
            <img
              src={`/images/fac${num}.png`}
              alt=""
              className={`transition-all duration-300 ${
                activeSlide === num ? "w-48 h-48" : "w-32 h-32"
              }`}
            />
            <p className="text-xl">{num === 1 ? "Principle" : "Trainer"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyCar;
