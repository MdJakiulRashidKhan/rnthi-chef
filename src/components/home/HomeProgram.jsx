import React, { useState } from "react";

const HomeProgram = () => {
  const cardsData = [
    {
      id: 1,
      image: "/images/chef2.png",
      title: "Short Term Chef Course",
      description:
        "For those who have completed their tourist visa or other visas or are in the process of visa processing and want to... (additional text for expanded description)",
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
        "Sushi chefs are in great demand both at home and abroad and can quickly advance their careers and earn... (additional text for expanded description)",
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
    {
      id: 3,
      image: "/images/chef2.png",
      title: "Advanced Cooking Techniques",
      description:
        "For experienced chefs looking to elevate their skills, learn advanced techniques and international cuisines... (additional text for expanded description)",
      details: [
        "Duration 4 months.",
        "Advanced Techniques and Cuisines.",
        "7000 BDT (Registration Fee).",
        "200 Pounds (UK Registration Fee).",
        "Hotel Internship Not Included.",
      ],
      mentorImage: "/images/mentor1.png",
      mentorName: "John Doe",
      mentorRole: "Senior Chef Mentor",
      buttonLabel: "View Program",
      isDark: false,
    },
    {
      id: 4,
      image: "/images/cooking.png",
      title: "Pastry Arts & Techniques",
      description:
        "A specialized course for pastry lovers, focusing on the art of pastry-making and advanced dessert creations... (additional text for expanded description)",
      details: [
        "Duration 2 months.",
        "Intensive Pastry Workshops.",
        "5000 BDT (Registration Fee).",
        "150 Pounds (UK Registration Fee).",
        "Hotel Internship Not Included.",
      ],
      mentorImage: "/images/mentor2.png",
      mentorName: "Anna Smith",
      mentorRole: "Pastry Chef Mentor",
      buttonLabel: "View Program",
      isDark: true,
    },
  ];

  // State to manage expanded view for each card
  const [expanded, setExpanded] = useState({});
  const [visibleCards, setVisibleCards] = useState(2); // Initially showing 2 cards
  const [viewMore, setViewMore] = useState(false); // Manage view more / view less state

  const toggleDescription = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the specific card
    }));
  };

  const toggleView = () => {
    if (viewMore) {
      setVisibleCards(2); // Show only the first two cards
    } else {
      setVisibleCards(cardsData.length); // Show all cards
    }
    setViewMore(!viewMore); // Toggle between "View More" and "View Less"
  };

  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 md:px-12 lg:px-20">
        {cardsData.slice(0, visibleCards).map((card) => (
          <div
            key={card.id}
            className={`p-5 rounded-lg space-y-4 ${
              card.isDark
                ? "bg-black shadow-[6px_6px_0px_#FFA500]"
                : "bg-orange-200 shadow-[6px_6px_0px_#FF0000]"
            }`}
          >
            <img
              src={card.image}
              alt={`${card.title} Image`}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <h3
              className={`text-2xl font-bold mb-2 ${
                card.isDark ? "text-white" : "text-red-900"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`mb-4 ${card.isDark ? "text-white" : "text-gray-600"}`}
            >
              {expanded[card.id]
                ? card.description
                : `${card.description.split("...")[0]}...`}{" "}
              {/* Truncate text if not expanded */}
              <span
                className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent ml-1 cursor-pointer"
                onClick={() => toggleDescription(card.id)} // Toggle description on click
              >
                {expanded[card.id] ? "See Less" : "See More"}{" "}
                {/* Toggle button text */}
              </span>
            </p>
            <hr
              className={`mb-4 ${
                card.isDark ? "border-orange-500" : "border-orange-800"
              }`}
            />

            {/* Details Section with 2-2-1 Layout on Larger Screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {card.details.slice(0, 2).map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-300"></span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {card.details.slice(2, 4).map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-300"></span>
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

            <div className="grid grid-cols-1 justify-center mt-2">
              {card.details.slice(4, 5).map((detail, idx) => (
                <div
                  key={idx}
                  className="flex md:justify-center items-center space-x-2"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-300"></span>
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

            <hr
              className={`my-4 ${
                card.isDark ? "border-orange-500" : "border-orange-800"
              }`}
            />
            <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center">
              <div className="flex items-center">
                <img
                  src={card.mentorImage}
                  alt={`${card.mentorName} Image`}
                  className="w-16 h-16 mr-4 rounded"
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
                      card.isDark ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {card.mentorRole}
                  </p>
                </div>
              </div>
              <button className="text-white bg-red-900 px-8 py-2 font-bold rounded-lg hover:bg-red-700">
                {card.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-24 pb-6">
        <button
          className="btn px-8 py-2 text-white bg-gradient-to-bl from-red-500 to-red-900 rounded-md hover:bg-red-700"
          onClick={toggleView} // Toggle between View More and View Less
        >
          {viewMore ? "VIEW LESS" : "VIEW MORE"}
        </button>
      </div>
    </div>
  );
};

export default HomeProgram;
