import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./layout/Layout";
import Video from "./Videos/Video";

const HomeworkApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='video/:id' element={<Video/>}/>
      </Route>
    </Routes>
  );
};

export default HomeworkApp;
