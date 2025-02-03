import { motion } from "framer-motion";
import React from "react";

const KnitPart = () => {
  return (
    <div className="container mx-auto my-20 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center border border-orange-300 rounded-lg overflow-hidden shadow-lg">
        <div className="lg:w-1/2 w-full p-6 space-y-5 mulish">
          <h6 className="text-gray-800 text-2xl font-semibold">
            Be part of a close-knit community, where everyone speaks your
            language—food.
          </h6>
          <p className="text-base text-gray-700 ">
            At <span className="font-bold text-orange-600">RNTHI</span>, you'll
            find all the ingredients you need to create a college experience
            that's uniquely yours—guided by your passions, your interests, and
            your imagination. Each of our campuses offers a distinct flavor, a
            unique feel; yet at everyone, you'll be part of a tight-knit,
            diverse community of students and instructors from all over the
            world, united in your shared passion for food.
          </p>
          <hr className="border-orange-300 w-11/12 mx-auto" />
          <div className="py-10">
            <p className="text-lg font-bold text-gray-800 mb-4">
              ACCREDITATION AND RECOGNITION
            </p>
            <div className="flex items-center gap-8 justify-start flex-wrap py-4">
              <motion.div
                className="w-24 h-20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="/images/1.png"
                  alt="Accreditation 1"
                />
              </motion.div>
              <motion.div
                className="w-24 h-20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="/images/2.png"
                  alt="Accreditation 2"
                />
              </motion.div>
              <motion.div
                className="w-24 h-20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="/images/3.png"
                  alt="Accreditation 3"
                />
              </motion.div>
              <motion.div
                className="w-24 h-20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="/images/4.png"
                  alt="Accreditation 4"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-full h-full object-cover"
            src="/images/knit.png"
            alt="Community image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default KnitPart;
