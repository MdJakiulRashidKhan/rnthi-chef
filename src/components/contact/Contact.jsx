import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-gradient-to-r from-gray-800 to-gray-900 container mx-auto mt-20 rounded-xl shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 uppercase tracking-wide">
          Get In Touch
        </h2>
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg lg:col-span-1 text-center flex flex-col items-center space-y-3">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            <p className="text-gray-400">
              21/A, Road - 2, Aftab Nagar(Beside East West university), Merul
              Badda, Dhaka, Bangladesh, 1212
            </p>
            <p className="text-gray-400">Email:rnhi.bd@gmail.com.com</p>
            <p className="text-gray-400">Phone: (+88) 01552-478007</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:col-span-2">
            <form className="space-y-6 bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full p-3 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-3 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
