import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Body } from "../pages/Body";
import { ReactProjects } from "../pages/ReactProjects";
import { DesignProjects } from "../pages/DesignProjects";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="react" element={<ReactProjects />} />
        <Route path="design" element={<DesignProjects />} />
        <Route path="contact" element={<Contact />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
