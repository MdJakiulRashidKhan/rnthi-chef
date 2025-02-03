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
    <div className="bg-orange-100 lg:h-[1224px] mb-12">
      {/* Carousel Section */}
      <div className="carousel w-full ">
        {[1, 2, 3, 4, 5].map((slide) => (
          <div
            key={slide}
            id={`slide${slide}`}
            className="carousel-item relative w-full flex justify-center items-center"
          >
            <div className="flex items-center w-8/12 pt-8 pb-8 lg:pt-0 lg:pb-0  mx-auto">
              <div className="space-y-8 w-[800px] m-0 p-0">
                <div className="space-y-3">
                  <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold w-full  bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent ">
                    {slide === 1 && "MURSHEDA KHANAM"}
                    {slide === 2 && "Md. OHLDUZZAMAN"}
                    {slide === 3 && "Md. RAFIQUL HAQUE"}
                    {slide === 4 && "Md. NURI ISLAM"}
                    {slide === 5 && "Mohd. ZAHIRUL ISLAM"}
                  </h1>
                  <p className="text-xl  text-black">
                    Trainer and Training Coordinator
                  </p>
                </div>
                <div className="space-y-6 w-9/12 sm:w-full mx-auto ">
                  <p className="text-xs md:text-sm lg:text-base">
                    {slide === 1 &&
                      "Mursheda Khanam, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and internal verifier. With a professional background at SHEERA Resorts (Singapore), Six Seasons Hotel (Dhaka), and Bangladesh Biman Flight Catering (BFCC), he also participated in the Training of Trainers (COP) Program under the Skills for Employment Program (SEIP) by the Bangladesh Government."}
                    {slide === 2 &&
                      "Md. Ohiduzzaman, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and internal verifier. With a professional background at SHEERA Resorts (Singapore), Six Seasons Hotel (Dhaka), and Bangladesh Biman Flight Catering (BFCC), he also participated in the Training of Trainers (COP) Program under the Skills for Employment Program (SEIP) by the Bangladesh Government."}
                    {slide === 3 &&
                      "Md. RAFIQUL Haque, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and internal verifier. With a professional background at SHEERA Resorts (Singapore), Six Seasons Hotel (Dhaka), and Bangladesh Biman Flight Catering (BFCC), he also participated in the Training of Trainers (COP) Program under the Skills for Employment Program (SEIP) by the Bangladesh Government."}
                    {slide === 4 &&
                      "Md. Nuri Islam, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and internal verifier. With a professional background at SHEERA Resorts (Singapore), Six Seasons Hotel (Dhaka), and Bangladesh Biman Flight Catering (BFCC), he also participated in the Training of Trainers (COP) Program under the Skills for Employment Program (SEIP) by the Bangladesh Government."}
                    {slide === 5 &&
                      "Mohd. Zahirul Islam, Md. Ohiduzzaman, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and internal verifier. With a professional background at SHEERA Resorts (Singapore), Six Seasons Hotel (Dhaka), and Bangladesh Biman Flight Catering (BFCC), he also participated in the Training of Trainers (COP) Program under the Skills for Employment Program (SEIP) by the Bangladesh Government."}
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
              <div className="w-[691px] h-[1224px] hidden lg:block">
                <img
                  className="w-full h-full"
                  src={`/images/fac.png`}
                  alt={`Faculty ${slide}`}
                />
              </div>
            </div>
            <div className="absolute left-5 right-5 lg:left-40 lg:right-40 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${slide === 1 ? totalSlides : slide - 1}`}
                onClick={() => goToSlide(slide === 1 ? totalSlides : slide - 1)}
              >
                <svg
                  width="62"
                  height="46"
                  viewBox="0 0 62 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0588 46C21.8641 46 23.6694 46 25.5294 46C25.637 38.8068 23.9122 32.6697 18.8984 27.365C18.406 26.8664 17.9137 26.3677 17.4064 25.854C39.4802 25.7709 39.4802 25.7709 62 25.6861C62 23.9133 62 22.1404 62 20.3139C39.9262 20.2308 39.9262 20.2308 17.4064 20.146C18.3364 19.2042 19.2664 18.2623 20.2246 17.292C24.2123 11.9843 25.5764 6.61837 25.5294 0C23.7241 0 21.9188 0 20.0588 0C20.0212 0.765232 19.9836 1.53046 19.9449 2.31889C19.8223 4.37241 19.5654 6.27727 18.8984 8.22628C18.839 8.40655 18.7796 8.58682 18.7184 8.77255C17.8085 11.2264 16.251 13.2887 14.4225 15.1095C14.2861 15.2473 14.1498 15.3852 14.0093 15.5272C9.99827 19.3828 5.30692 20.0247 0 20.3139C0 22.0867 0 23.8596 0 25.6861C1.14882 25.7485 1.14882 25.7485 2.32086 25.812C4.1572 25.9285 5.87689 26.0844 7.62567 26.6934C7.72899 26.7289 7.83231 26.7644 7.93876 26.801C12.5038 28.4025 16.1713 31.8673 18.285 36.2337C19.7166 39.3543 19.9111 42.6095 20.0588 46Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a
                href={`#slide${slide === totalSlides ? 1 : slide + 1}`}
                onClick={() => goToSlide(slide === totalSlides ? 1 : slide + 1)}
              >
                <svg
                  width="62"
                  height="46"
                  viewBox="0 0 62 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.9412 46C40.1359 46 38.3306 46 36.4706 46C36.363 38.8068 38.0878 32.6697 43.1016 27.365C43.594 26.8664 44.0863 26.3677 44.5936 25.854C22.5198 25.7709 22.5198 25.7709 0 25.6861C0 23.9133 0 22.1404 0 20.3139C22.0738 20.2308 22.0738 20.2308 44.5936 20.146C43.6636 19.2042 42.7336 18.2623 41.7754 17.292C37.7877 11.9843 36.4236 6.61837 36.4706 0C38.2759 0 40.0812 0 41.9412 0C41.9788 0.765232 42.0164 1.53046 42.0551 2.31889C42.1777 4.37241 42.4346 6.27727 43.1016 8.22628C43.161 8.40655 43.2204 8.58682 43.2816 8.77255C44.1915 11.2264 45.749 13.2887 47.5775 15.1095C47.7139 15.2473 47.8502 15.3852 47.9907 15.5272C52.0017 19.3828 56.6931 20.0247 62 20.3139C62 22.0867 62 23.8596 62 25.6861C60.8512 25.7485 60.8512 25.7485 59.6791 25.812C57.8428 25.9285 56.1231 26.0844 54.3743 26.6934C54.271 26.7289 54.1677 26.7644 54.0612 26.801C49.4962 28.4025 45.8287 31.8673 43.715 36.2337C42.2834 39.3543 42.0889 42.6095 41.9412 46Z"
                    fill="url(#paint0_linear_208_340)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_208_340"
                      x1="62"
                      y1="23"
                      x2="0"
                      y2="23"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#993128" />
                      <stop offset="1" stopColor="#33100D" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Faculty Images Below */}
      <div className="flex w-full px-5 lg:px-40 mx-auto justify-between bg-red-100/50 py-10 lg:-translate-y-78">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`flex flex-col w-24 lg:w-40 items-center gap-4 transition-all duration-300 ${
              activeSlide === num ? "scale-90" : "scale-80"
            }`}
          >
            <img
              src={`/images/fac${num}.png`}
              alt={`Faculty ${num}`}
              className={`transition-all duration-300 ${
                activeSlide === num
                  ? "w-24 h-24 lg:w-48 lg:h-48"
                  : "w-16 h-16 lg:w-32 lg:h-32"
              }`}
            />
            <p className="text-sm lg:text-xl">
              {num === 1 ? "Principle" : "Trainer"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyCar;
