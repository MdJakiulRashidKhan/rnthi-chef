import React, { useState } from "react";

const ProgramCard = () => {
  const cardsData = [
    {
      id: 1,
      image: "/images/chef2.png",
      title: "Short Term Chef Course",
      description:
        "For those who have completed their tourist visa or other visas or are in the process of visa processing and want to...",
      fullDescription:
        "This is the full description of the Short Term Chef Course. It provides in-depth knowledge and practical skills for becoming a professional chef in a short time. You will learn various cuisines, cooking techniques, and kitchen management skills.",
      details: [
        "Duration 3 months.",
        "F&B Production-Cooking-level 3 under NSDA.",
        "6000 BDT (Registration Fee).",
        "175 Pounds (UK Registration Fee).",
        "Hotel Internship Not Included.",
      ],
      mentorImage: "/images/mentor1.png",
      mentorName: "Steven Harris",
      mentorRole: "Chef Mentor",
      buttonLabel: "View Program",
      isDark: false,
    },
    {
      id: 2,
      image: "/images/cooking.png",
      title: "Japanese Sushi Making Course",
      description:
        "Sushi chefs are in great demand both at home and abroad and can quickly advance their careers and earn...",
      fullDescription:
        "This is the full description of the Japanese Sushi Making Course. It will teach you the art of sushi making, including various types of sushi, preparation techniques, and presentation skills. You will also learn about the cultural significance of sushi in Japan.",
      details: [
        "Duration 2/3 months.",
        "3 Days a week.",
        "6000 BDT (Registration Fee).",
        "175 Pounds (UK Registration Fee).",
        "Hotel Internship Not Included.",
      ],
      mentorImage: "/images/mentor2.png",
      mentorName: "Laura Thompson",
      mentorRole: "Chef Mentor",
      buttonLabel: "View Program",
      isDark: true,
    },
  ];

  const sixCards = Array.from({ length: 6 }, (_, index) => ({
    ...cardsData[index % 2],
    id: index + 1,
  }));

  return (
    <div className="container mx-auto my-20 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center">
        {sixCards.map((card) => {
          const [showFullDescription, setShowFullDescription] = useState(false);

          const toggleDescription = () => {
            setShowFullDescription(!showFullDescription);
          };

          return (
            <div
              key={card.id}
              className={`p-5 rounded-lg space-y-4 ${
                card.isDark
                  ? "bg-black shadow-[4px_4px_0px_#FFA500]"
                  : "bg-orange-200 shadow-[4px_4px_0px_#FF0000]"
              } w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto`}
            >
              <img
                src={card.image}
                alt={`${card.title} Image`}
                className="w-full h-auto mb-4 mx-auto object-cover"
              />
              <h3
                className={`text-2xl font-bold mb-2 ${
                  card.isDark ? "text-white" : "text-red-900"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mb-4 ${
                  card.isDark ? "text-white" : "text-gray-400"
                }`}
              >
                {showFullDescription ? card.fullDescription : card.description}
                <span
                  onClick={toggleDescription}
                  className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent ml-1 cursor-pointer mulish"
                >
                  {showFullDescription ? "Show Less" : "See More"}
                </span>
              </p>
              <hr
                className={`mb-4 ${
                  card.isDark ? "border-orange-500" : "border-orange-800"
                }`}
              />

              {/* Updated Responsive Details Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center mulish">
                {card.details.slice(0, 2).map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span>
                    <p
                      className={`${
                        card.isDark ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center mt-2 mulish">
                {card.details.slice(2, 4).map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span>
                    <p
                      className={`${
                        card.isDark ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex lg:justify-center mt-2">
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span>
                  <p
                    className={` mulish ${
                      card.isDark ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {card.details[4]}
                  </p>
                </div>
              </div>

              <hr
                className={`my-4 ${
                  card.isDark ? "border-orange-500" : "border-orange-800"
                }`}
              />
              <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={card.mentorImage}
                    alt={`${card.mentorName} Image`}
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <h6
                      className={`text-lg font-semibold ${
                        card.isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {card.mentorName}
                    </h6>
                    <p
                      className={`${
                        card.isDark ? "text-white " : "text-gray-600"
                      }`}
                    >
                      {card.mentorRole}
                    </p>
                  </div>
                </div>
                <button className="text-white bg-red-900 px-4 lg:px-8 py-2 font-bold rounded-lg hover:bg-red-700">
                  {card.buttonLabel}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramCard;
