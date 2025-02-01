import React from "react";
import BlogBanner from "../components/blogs/BlogBanner";
import LatestPost from "../components/blogs/LatestPost";
import NewsArticle from "../components/blogs/NewsArticle";
import Navbar from "../components/shared/Navbar";
import ReadyCard from "../components/shared/ReadyCard";
import Footer from "./../components/shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <BlogBanner />
      <LatestPost />
      <NewsArticle />
      <ReadyCard />
      <Footer />
    </div>
  );
};

export default About;
