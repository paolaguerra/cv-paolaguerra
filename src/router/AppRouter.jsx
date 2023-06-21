import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Body } from "../pages/Body";
import { Work } from "../pages/Work";
import { Fun } from "../pages/Fun";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<Body />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="fun" element={<Fun />} />
        <Route path="contact" element={<Contact />} />

        <Route path="/" element={<Navigate to="/Body" />} />
      </Routes>
    </>
  );
};
