import React from "react";
import AboutBanner from "../components/about/AboutBanner";
import AboutContent from "../components/about/AboutContent";
import KnitPart from "../components/about/KnitPart";
import Footer from "../components/shared/Footer";
import Locations from "../components/shared/Locations";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "./../components/shared/ReadyCard";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutBanner />
      <AboutContent />
      <Locations />
      <KnitPart />
      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
