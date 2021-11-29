import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inscription from "../components/Form/Inscription";
import Connexion from "../components/Form/Connexion";
import CardById from "../components/Card/CardById";
import Entreprise from "../components/Entreprises";
import Form from "../components/Form/Form";
import Nav from "../components/Nav/Nav";

const Routter = () => {
  return (
    <Router>
      <Nav />
      {/* react-router-dom version 6 no more Switch replace by Routes */}
      <Routes>
        {/* component is now element */}
        <Route exact path="/" element={<Entreprise />} />
        <Route path="/formulaire" element={<Form />} />
        <Route path="/s2n/:id" element={<CardById />} />
        <Route path="/users/login" element={<Connexion />} />
        <Route path="/users/sign-in" element={<Inscription />} />
      </Routes>
    </Router>
  );
};

export default Routter;
