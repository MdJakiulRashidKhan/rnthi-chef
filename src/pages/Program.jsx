import React from "react";
import ProgramCard from "../components/program/ProgramCard";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <ProgramCard />
      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
