import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardById from "../components/Card/CardById";
import Entreprise from "../components/Entreprises";
import Home from "../components/Home";

const Routter = () => {
  return (
    <Router>
      {/* react-router-dom version 6 no more Switch replace by Routes */}
      <Routes>
        {/* component is now element */}
        <Route exact path="/" element={<Entreprise />} />
        <Route path="/s2n/:id" element={<CardById />} />
      </Routes>
    </Router>
  );
};

export default Routter;
