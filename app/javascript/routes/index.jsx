import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Animes from "../components/Animes";
export default (
  <Router>
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/animes" element={<Animes />} />
    </Routes>
  </Router>
);
