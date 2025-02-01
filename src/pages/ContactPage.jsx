import React from "react";
import Contact from "../components/contact/Contact";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
