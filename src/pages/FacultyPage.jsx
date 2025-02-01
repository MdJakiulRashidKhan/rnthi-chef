import React from "react";
import FacultyBanner from "../components/faculty/FacultyBanner";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import Footer from "./../components/shared/Footer";
import FacultyContent from "../components/faculty/FacultyContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <FacultyBanner />
      <FacultyContent/>
      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
