import React from "react";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Certificate from "./pages/Certificate";
import ContactPage from "./pages/ContactPage";
import FacultyPage from "./pages/FacultyPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Program from "./pages/Program";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/certificate" element={<Certificate />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
