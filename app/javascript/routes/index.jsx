import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Animes from "../components/Animes";
import Anime from "../components/Anime";
import NewAnime from "../components/NewAnime";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes" element={<Animes />} />
      <Route path="/anime/:id" element={<Anime />} />
      <Route path="/anime" element={<NewAnime />} />
    </Routes>
  </Router>
);
