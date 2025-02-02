import React from "react";
import FAQ from "../components/home/FAQ";
import NewsArticle from "../components/home/NewsArticle";
import Testimonial from "../components/home/Testimonial";
import Locations from "../components/shared/Locations";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
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
