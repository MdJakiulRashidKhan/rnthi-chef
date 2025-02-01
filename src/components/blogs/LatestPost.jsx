import React from "react";
import { CiClock1, CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const LatestPost = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-4">
          <div className="space-y-4 px-4">
            <h6 className="text-xl text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              ex urna. Morbi vitae ex eget erat condimentum suscipit at nec
              libero. Nam suscipit finibus quam eu vehicula. Proin eget sodales
              lorem.
            </h6>
            <h5 className="text-2xl font-bold">Unleash your inner chef</h5>
            <p className="text-gray-600">
              Nunc dui libero, laoreet ut enim at, scelerisque placerat nunc.
              Nunc vel libero vehicula, commodo velit id, accumsan orci. Integer
              porta maximus mi eu dignissim. Ut bibendum mauris sit amet metus
              vestibulum faucibus. Nam commodo sit amet ligula mattis
              sollicitudin. Pellentesque molestie ultrices tortor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img className="w-full" src="/images/4567.png" alt="" />
              <img className="w-full" src="/images/4567.png" alt="" />
            </div>
            <h5 className="text-2xl font-bold">Master the art of cooking</h5>
            <p className="text-gray-600">
              Aliquam enim purus, ultrices sit amet lacinia ac, ullamcorper eget
              nunc. Sed mollis elit quis feugiat hendrerit. Quisque eleifend
              metus ac vehicula faucibus. Aliquam sollicitudin semper lacinia.
              Cras vestibulum posuere porttitor. Donec tincidunt erat non ante
              pellentesque hendrerit. Cras ultricies nisl in luctus
              pellentesque. Integer non eros sit amet eros varius pellentesque.
              Suspendisse lacinia odio vitae efficitur accumsan.
            </p>
            <h5 className="text-2xl font-bold">Mastering knife skills</h5>
            <p className="text-gray-600">
              Sed nec ipsum rhoncus, venenatis est a, venenatis libero.
              Suspendisse metus metus, pellentesque vitae accumsan nec, pharetra
              in magna. Nullam sed ullamcorper felis. Morbi non purus non purus
              pharetra ultrices. Pellentesque lacus lacus, egestas in sapien
              vel, eleifend tristique leo. Aenean a purus eu enim dignissim
              bibendum eu ac mi. Nulla tortor tortor, maximus sit amet auctor
              ut, lobortis ac diam.
            </p>

            <div className="flex items-center justify-between gap-4  border-b-2 border-t-2 border-orange-400">
              <div className="flex items-center gap-4">
                <div>
                  <img src="/images/userimg.png" alt="" />
                </div>
                <div>
                  <h6 className="text-xl text-red-400">Md. Tarif Al-Mozahed</h6>
                  <div>
                    <p>
                      Suspendisse potenti. Nam sem tortor,
                      <br /> dapibus et hendrerit eu, <br /> ornare vitae arcu.
                      Nunc porta libero.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div className="btn bg-orange-200 shadow-md text-white">
                  <FaFacebook className="text-2xl" />
                </div>
                <div className="btn bg-orange-200 shadow-md text-white">
                  <IoLogoWhatsapp className="text-2xl" />
                </div>
                <div className="btn bg-orange-200 shadow-md text-white">
                  <CiYoutube className="text-2xl" />
                </div>
                <div className="btn bg-orange-200 shadow-md text-white">
                  <FaInstagram className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 border border-orange-400 p-12">
          <h4 className="text-3xl">Latest Post</h4>
          <div className="space-y-6 pt-12">
            <div className="flex flex-col  gap-2">
              <div className="flex items-center gap-2 text-orange-400">
                <CiClock1 />
                <p>August 2, 2023</p>
              </div>
              <p className="text-xl w-3/4">
                Sustainable Dining: The Future of Food & Beverage
              </p>
            </div>
            <div className="flex flex-col  gap-2">
              <div className="flex items-center gap-2 text-orange-400">
                <CiClock1 />
                <p>August 2, 2023</p>
              </div>
              <p className="text-xl w-3/4">
                Breaking Down the IELTS Speaking Module
              </p>
            </div>
            <div className="flex flex-col  gap-2">
              <div className="flex items-center gap-2 text-orange-400">
                <CiClock1 />
                <p>August 2, 2023</p>
              </div>
              <p className="text-xl w-3/4">
                Explore Fusion Cuisine Like Never Before
              </p>
            </div>
            <div className="flex flex-col  gap-2">
              <div className="flex items-center gap-2 text-orange-400">
                <CiClock1 />
                <p>August 2, 2023</p>
              </div>
              <p className="text-xl w-3/4">
                How to Create a Study Plan for IELTS Success
              </p>
            </div>
            <div className="flex flex-col  gap-2">
              <div className="flex items-center gap-2 text-orange-400">
                <CiClock1 />
                <p>August 2, 2023</p>
              </div>
              <p className="text-xl w-3/4">
                Sustainable Dining: The Future of Food & Beverage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
