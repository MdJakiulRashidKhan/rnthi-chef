import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const FacultyContent = () => {
  const FacultyData = Array(5).fill({
    id: 1,
    name: "Md. Ohiduzzaman",
    position: "Trainer and Training Coordinator",
    image: "/images/faculty.png",
    description:
      "Md. Ohiduzzaman, Trainer and Training Coordinator at RNTHI Bangladesh, specializes in F&B Production. Certified by City & Guilds (UK) and NSDA, he has extensive experience as a trainer, assessor, and internal verifier. With a professional background at SHEERA Resorts (Singapore), Six Seasons Hotel (Dhaka), and Bangladesh Biman Flight Catering (BFCC), he also participated in the Training of Trainers (COP) Program under the Skills for Employment Program (SEIP) by the Bangladesh Government.",
    social: [
      { id: 1, name: "Facebook", link: "#", icon: <FaFacebook /> },
      { id: 2, name: "Whatsapp", link: "#", icon: <IoLogoWhatsapp /> },
      { id: 3, name: "Youtube", link: "#", icon: <CiYoutube /> },
      { id: 4, name: "Instagram", link: "#", icon: <FaInstagram /> },
    ],
  });

  return (
    <div className="container mx-auto my-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-4 justify-center">
        {FacultyData.map((faculty, index) => (
          <div
            key={index}
            className={`p-6 py-6 rounded-lg max-w-[591px] h-[1020px] space-y-8 mx-auto ${
              index === 1 || index === 3
                ? "bg-black text-white shadow-[4px_4px_0px_#FFA500]"
                : "bg-orange-100 shadow-[4px_4px_0px_#FF0000]"
            }`}
          >
            <div className="text-center mb-4">
              <img
                src={faculty.image}
                alt={`${faculty.name}'s Image`}
                className="w-full h-auto mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[493px] lg:max-w-[493px]"
              />
            </div>
            <h1
              className={`text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 ${
                index === 1 || index === 3 ? "text-white" : "text-red-500"
              }`}
            >
              {faculty.name}
            </h1>
            <div className="border-b border-orange-500 w-3/4 mx-auto mb-4" />
            <p
              className={`mb-4 text-center ${
                index === 1 || index === 3
                  ? "text-orange-600"
                  : "text-orange-600"
              }`}
            >
              {faculty.position}
            </p>
            <p
              className={`px-4 sm:px-8 ${
                index === 1 || index === 3 ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {faculty.description}
            </p>
            <div className="border-t border-orange-500 w-full mt-4" />
            <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 justify-between items-center mt-4 px-4 sm:px-8">
              <div className="flex text-xl space-x-2">
                {faculty.social.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    className={`hover:text-red-700 ${
                      index === 1 || index === 3 ? "text-white" : "text-red-500"
                    }`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <button
                className={`font-bold py-2 px-4 rounded ${
                  index === 1 || index === 3
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
              >
                View Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyContent;
