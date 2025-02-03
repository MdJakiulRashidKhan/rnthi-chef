import React from "react";
import Excellence from "../components/home/Excellence";
import FAQ from "../components/home/FAQ";
import NavbarHome from "../components/home/NavbarHome";
import NewsArticle from "../components/home/NewsArticle";
import Story from "../components/home/Story";
import Testimonial from "../components/home/Testimonial";
import Locations from "../components/shared/Locations";
import ReadyCard from "../components/shared/ReadyCard";
import ExpartFaculty from "./../components/home/ExpartFaculty";
import FacultyCar from "./../components/home/FacultyCar";
import FoodFuture from "./../components/home/FoodFuture";
import FoodStarts from "./../components/home/FoodStarts";
import HomeProgramBanner from "./../components/home/HomeProgramBanner";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <NavbarHome />
      <Story />
      <HomeProgramBanner />
      <FoodFuture />
      <FoodStarts />
      <ExpartFaculty />
      <FacultyCar />
      <Excellence />
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
