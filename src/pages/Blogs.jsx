import React from "react";
import BlogBanner from "../components/blogs/BlogBanner";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <BlogBanner />
      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
