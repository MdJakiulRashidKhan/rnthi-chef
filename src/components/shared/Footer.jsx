import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMapPin, FaPhone } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" mt-8 md:mt-16">
      <div className="bg-neutral opacity-90 text-neutral-content">
        <div className="container mx-auto px-4 md:px-8 md:py-12">
          <div className="footer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-4 items-start gap-12 md:gap-20 py-12">
            <div className="text-center  md:text-left space-y-4 ">
              <img
                className="w-16 mx-auto md:mx-0 "
                src="/images/footerlogo.png"
                alt=""
              />
              <p className="mx-auto md:mx-0">
                Your Gateway to a World-Class Culinary and Hospitality Education
              </p>
              <div className="flex gap-3 mx-auto md:justify-start lg:mx-0">
                <div className="btn btn-outline shadow-md text-white">
                  <FaFacebook className="text-xl lg:text-2xl" />
                </div>
                <div className="btn btn-outline shadow-md text-white">
                  <IoLogoWhatsapp className="text-xl lg:text-2xl" />
                </div>
                <div className="btn btn-outline shadow-md text-white">
                  <CiYoutube className="text-xl lg:text-2xl" />
                </div>
                <div className="btn btn-outline shadow-md text-white">
                  <FaInstagram className="text-xl lg:text-2xl" />
                </div>
              </div>
            </div>
            <div className="space-y-4 px-4 md:px-0 ">
              <h6 className="footer-title">Contact Info</h6>
              <div className="flex flex-col space-y-3 text-left justify-start">
                <div className="border border-gray-600 w-40 mb-2 md:mx-0" />
                <a className="link link-hover flex items-center">
                  <HiOutlineHomeModern className="text-[#CD9B2F] mr-2 text-xl" />
                  21/A Road-2, Block-A
                </a>
                <a className="link link-hover flex items-center">
                  <FaMapPin className="text-[#CD9B2F] mr-2 text-xl" /> Jahurul
                  Islam City, Rampura Bridge, Dhaka 1212
                </a>
                <a className="link link-hover flex items-center">
                  <FaPhone className="text-[#CD9B2F] mr-2 text-xl" />
                  +88-015-52478007
                </a>
                <a className="link link-hover flex items-center">
                  <BiLogoGmail className="text-[#CD9B2F] mr-2 text-xl" />
                  mhi.bd@gmail.com
                </a>
              </div>
            </div>
            <div className="space-y-4 px-4 md:px-0">
              <h6 className="footer-title">Help Center</h6>
              <div className="flex flex-col space-y-3">
                <div className="border border-gray-600 w-40 mb-2 md:mx-0" />
                <a className="link link-hover">Admission</a>
                <a className="link link-hover">Customer Support</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Privacy Policy</a>
              </div>
            </div>
            <div className="space-y-4 px-4 md:px-0 ">
              <h6 className="footer-title">Quick Links</h6>
              <div className="flex flex-col space-y-3">
                <div className="border border-gray-600 w-40 mb-2 md:mx-0" />
                <a className="link link-hover">Classes</a>
                <a className="link link-hover">Teachers</a>
                <a className="link link-hover">Events</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-500 w-3/4 mx-auto" />
      </div>
      <div className="footer footer-center opacity-90 bg-neutral text-neutral-content py-6 mx-auto">
        <p>
          Design by Goinnovior Limited. All rights reserved.
          <span className="text-blue-800"> 360D Soul Limited</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
