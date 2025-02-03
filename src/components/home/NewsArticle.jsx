import React, { useState } from "react";
import { CiClock1 } from "react-icons/ci";

const NewsArticle = () => {
  // State for toggling full text visibility
  const [showFullText, setShowFullText] = useState({
    article1: false,
    article2: false,
    article3: false,
  });

  // Toggle function
  const toggleText = (article) => {
    setShowFullText((prev) => ({
      ...prev,
      [article]: !prev[article],
    }));
  };

  return (
    <div className="container mx-auto py-12 px-6 sm:px-12 md:px-24 lg:px-36">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent w-full lg:w-8/12 mb-4 lg:mb-0">
          Latest News & <br /> Article
        </h2>
        <p className="text-sm sm:text-base w-full lg:w-4/12 mt-4 lg:mt-0 mulish">
          In today's fast-paced world, staying informed is key to staying
          competitive. Whether you're in technology, education, or the culinary
          arts, keeping up with the latest news and articles in your field
          ensures you stay ahead.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* Article 1 */}
        <div className="space-y-3 py-5  rounded-lg  hover:shadow-xl transition-all">
          <img
            src="/images/ielts (2).png"
            alt="Culinary Excellence"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h5 className="text-xl sm:text-2xl bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
            Master the Art of Culinary Excellence
          </h5>
          <div className="flex items-center gap-4 text-orange-400">
            <CiClock1 />
            <p>August 2, 2023</p>
          </div>
          <p className="mulish">
            {showFullText.article1 ? (
              <>
                Elevate your cooking skills with our Professional Food &
                Beverage Chef Course. Our comprehensive program is designed to
                help you master the culinary arts. Whether you're an aspiring
                chef or a seasoned pro, this course offers in-depth training to
                enhance your skills in various cuisines, plating techniques, and
                beverage pairings. Enroll today and take the first step towards
                mastering the art of culinary excellence!
                <span
                  className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent cursor-pointer"
                  onClick={() => toggleText("article1")}
                >
                  {" "}
                  See Less
                </span>
              </>
            ) : (
              <>
                Elevate your cooking skills with our Professional Food &
                Beverage Chef Course....{" "}
                <span
                  className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent cursor-pointer"
                  onClick={() => toggleText("article1")}
                >
                  See More
                </span>
              </>
            )}
          </p>
        </div>

        {/* Article 2 */}
        <div className="space-y-3 py-5  rounded-lg  hover:shadow-xl transition-all">
          <img
            src="/images/ielts (1).png"
            alt="IELTS Benefits"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h5 className="text-xl sm:text-2xl bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
            Top 5 Benefits of Learning IELTS for Your Career
          </h5>
          <div className="flex items-center gap-4 text-orange-400">
            <CiClock1 />
            <p>August 2, 2023</p>
          </div>
          <p className="mulish">
            {showFullText.article2 ? (
              <>
                An IELTS certification opens doors to global opportunities. From
                higher education to immigration and career advancements, IELTS
                proves your proficiency in English and prepares you for success.
                It also provides a standardized measure of your language ability
                that is recognized worldwide. Start your preparation today and
                unlock international possibilities!
                <span
                  className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent cursor-pointer"
                  onClick={() => toggleText("article2")}
                >
                  {" "}
                  See Less
                </span>
              </>
            ) : (
              <>
                An IELTS certification opens doors to global opportunities....
                <span
                  className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent cursor-pointer"
                  onClick={() => toggleText("article2")}
                >
                  See More
                </span>
              </>
            )}
          </p>
        </div>

        {/* Article 3 */}
        <div className="space-y-3 py-5  hover:shadow-xl transition-all">
          <div className="space-y-2">
            <div className="flex items-center gap-4 text-orange-400">
              <CiClock1 />
              <p>August 2, 2023</p>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Sustainable Dining: The Future of Food & Beverage
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4 text-orange-400">
              <CiClock1 />
              <p>August 2, 2023</p>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Breaking Down the IELTS Speaking Module
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4 text-orange-400">
              <CiClock1 />
              <p>August 2, 2023</p>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Explore Fusion Cuisine Like Never Before
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4 text-orange-400">
              <CiClock1 />
              <p>August 2, 2023</p>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              How to Create a Study Plan for IELTS Success
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
