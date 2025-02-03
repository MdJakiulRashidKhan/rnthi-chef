import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoMdClock } from "react-icons/io";

const NewsArticle = () => {
  // State to track which card is open
  const [openCard, setOpenCard] = useState(null);

  const toggleText = (index) => {
    // Toggle the specific card by its index
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <div className="container mx-auto p-5">
      <small className="text-orange-400 text-base">Continue Reading</small>
      <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-7xl font-bold">
        News & Article
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(3)
          .fill()
          .map((_, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="https://i.ibb.co.com/Qph9TX2/Frame-75.png"
                alt="Article"
                className="w-full h-72 object-cover"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-4 space-y-4">
                <h3 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-2xl">
                  Top 5 Benefits of Learning IELTS for Your Career
                </h3>
                <div className="flex items-center gap-2 text-orange-400 mulish">
                  <IoMdClock />
                  <p>August 2, 2023</p>
                </div>
                <p className='mulish'>
                  An IELTS certification opens doors to global opportunities.
                  From higher education to immigration and....
                  {/* Conditionally render the full text for the specific card */}
                  {openCard === index ? (
                    <span>
                      {" "}
                      More content goes here, like detailed descriptions and
                      benefits related to IELTS certification.
                    </span>
                  ) : (
                    <span
                      className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent cursor-pointer"
                      onClick={() => toggleText(index)} 
                    >
                      See More
                    </span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default NewsArticle;
