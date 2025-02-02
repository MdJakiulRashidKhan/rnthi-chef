import React from "react";
import Excellence from "../components/home/Excellence";
import FAQ from "../components/home/FAQ";
import NewsArticle from "../components/home/NewsArticle";
import Testimonial from "../components/home/Testimonial";
import Locations from "../components/shared/Locations";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import ExpartFaculty from "./../components/home/ExpartFaculty";
import FoodFuture from "./../components/home/FoodFuture";
import FoodStarts from "./../components/home/FoodStarts";
import HomeProgram from "./../components/home/HomeProgram";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <HomeProgram />
      <FoodStarts />
      <ExpartFaculty />
      <Excellence />
      <FoodFuture />
      <Locations />
      <Testimonial />
      <FAQ />
      <NewsArticle />
      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
