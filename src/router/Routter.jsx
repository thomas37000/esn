import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardById from "../components/Card/CardById";
import Entreprise from "../components/Entreprises";
import Form from "../components/Form/Form";

const Routter = () => {
  return (
    <Router>
      {/* react-router-dom version 6 no more Switch replace by Routes */}
      <Routes>
        {/* component is now element */}
        <Route exact path="/" element={<Entreprise />} />
        <Route exact path="/formulaire" element={<Form />} />
        <Route path="/s2n/:id" element={<CardById />} />
      </Routes>
    </Router>
  );
};

export default Routter;
