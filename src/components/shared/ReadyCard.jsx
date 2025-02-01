import { motion } from "framer-motion";
import React from "react";

const ReadyCard = () => {
  return (
    <div className="container mx-auto mt-16 px-4 sm:px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#F2E498] p-16 pl-24 rounded-lg shadow-lg"
      >
        <div className="text-left space-y-5">
          <motion.img
            src="/images/footerlogo.png"
            alt="Footer Logo"
            className="w-32"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <div className="pl-4 space-y-3">
            <motion.p
              className="text-orange-400 text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Get Started
            </motion.p>
            <motion.h1
              className="text-rose-950 text-5xl md:text-7xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Ready to sharpen your <br /> culinary skills?
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-900 text-white px-8 py-3 mt-4 rounded-md shadow-md text-lg font-semibold"
            >
              APPLY NOW
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReadyCard;
