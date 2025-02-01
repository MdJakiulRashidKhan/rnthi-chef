import React from "react";
import VerifyCertificate from "../components/certificate/VerifyCertificate";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <VerifyCertificate />
      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
