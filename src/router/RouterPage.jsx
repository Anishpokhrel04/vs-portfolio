import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import ComingSoon from "../pages/ComingSoon";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Project />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
