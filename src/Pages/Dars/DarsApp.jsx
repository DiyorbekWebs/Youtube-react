import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./about/About";
import Contacs from "./contacs/Contacs";
import Home from "./home/Home";
import "../../App.css";
import Layout from "../../layout/Layout";
import User from "./user";
const DarsApp = () => {
  return (
    <>
      <Routes>
        {/* Ugly path => bu browser ga beriladigan yo'l*/}
        {/* OPTIMIZE element=> shu path berilganda qaysi component chiqishi beriladi */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contacs />} />
          <Route path="about" element={<About />} />
          <Route path="user/:id" element={<User/>}/>
          
        </Route>
        <Route path="*" element={"404 Eror"} />
      </Routes>
    </>
  );
};

export default DarsApp;
