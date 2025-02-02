import React from "react";

import ProgramBanner from "../components/program/ProgramBanner";
import ProgramCard from "../components/program/ProgramCard";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <ProgramBanner />
      <ProgramCard />

      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
