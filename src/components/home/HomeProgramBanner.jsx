import React, { useState } from "react";

const HomeProgramBanner = () => {
  const ProgramSection = ({
    title,
    subtitle,
    description,
    points,
    buttonText,
    imageSrc,
    imageAlt,
  }) => {
    return (
      <div className="container mx-auto my-8 px-4">
        <div className="flex flex-col lg:flex-row items-start border border-orange-500 rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2 space-y-8 p-6 text-left">
            <p className="text-orange-400 text-xl font-semibold">{subtitle}</p>
            <h1 className="text-4xl lg:text-4xl xl:text-6xl bg-gradient-to-r pb-2 from-red-600 to-red-900 bg-clip-text text-transparent font-bold">
              {title}
            </h1>
            <p className="text-gray-900 text-lg">{description}</p>

            {/* Points arranged in two rows for lg devices */}
            <div className="flex flex-wrap">
              {points.slice(0, 2).map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 w-full lg:w-1/2"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap">
              {points.slice(2).map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 w-full lg:w-1/3"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>

            <button className="text-white bg-red-900 px-8 py-2 font-bold rounded-lg hover:bg-red-700 transition-colors duration-300">
              {buttonText}
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto lg:h-[550px] object-cover"
              src={imageSrc}
              alt={imageAlt}
              onError={(e) => {
                e.target.src = "/images/placeholder.png";
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const ProgramBanner = () => {
    const [activeButton, setActiveButton] = useState("Diploma Course");

    const handleButtonClick = (button) => {
      setActiveButton(button);
    };

    const sections = {
      "Diploma Course": {
        title: "Professional Food & Beverage Chef Courses",
        subtitle:
          "Level-2 Diploma in food preparation and culinary arts (8064-01)",
        description:
          "For those who want to build a better career at home and abroad as a barista with international standards in cafes, restaurants, and coffee shops.",
        points: [
          "Duration 1 Year",
          "Certified by: City & Guilds of London Institute, UK",
          "6 Month In House Training *",
          "3/6 Months Hotel Internship Included *",
        ],
        buttonText: "View More",
        imageSrc: "/images/aboutb.png",
        imageAlt: "Food & Beverage",
      },
      "Short Term Course": {
        title: "Professional Barista Training Program",
        subtitle: "Special Categories",
        description:
          "For those who want to build a better career at home and abroad as a barista with international standards in cafes, restaurants, and coffee shops.",
        points: [
          "Comprehensive Curriculum.",
          "Hands-On Training.",
          "Qualified Trainers",
          "Small Batches",
          "Career Advancement Assured.",
        ],
        buttonText: "View More",
        imageSrc: "/images/coffeeMaker.png",
        imageAlt: "Barista Training",
      },
      "Other Related Course": {
        title: "Professional English & IELTS Courses",
        subtitle:
          "Level-2 Diploma in food preparation and culinary arts (8064-01)",
        description:
          "For those who want to build a better career at home and abroad as a barista with international standards in cafes, restaurants, and coffee shops.",
        points: [
          "Test Preparation",
          "Improve Language Proficiency",
          "Qualified Trainers *",
          "Small Batches *",
        ],
        buttonText: "Best Band Score Assured",
        imageSrc: "/images/ielts (1).png",
        imageAlt: "IELTS Training",
      },
    };

    return (
      <div className="pt-16">
        {/* Programs Section */}
        <div className="text-center py-6 px-4 mt-12 space-y-6">
          <p className="text-orange-500 text-lg uppercase tracking-wide mb-3">
            Explore
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
            PROFESSIONAL PROGRAMS
          </h1>
          <div className="flex flex-wrap justify-center gap-4 bg-orange-100 px-4 py-6 rounded-lg max-w-4xl mx-auto shadow-[4px_4px_0px_#FF0000]">
            {Object.keys(sections).map((button) => (
              <button
                key={button}
                className={`${
                  activeButton === button
                    ? "bg-red-700 text-white"
                    : "text-gray-800"
                } px-6 py-3 font-medium rounded-lg transition-colors duration-300`}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>

          {/* Selected Section */}
          <ProgramSection {...sections[activeButton]} />
        </div>
      </div>
    );
  };

  return <ProgramBanner />;
};

export default HomeProgramBanner;
