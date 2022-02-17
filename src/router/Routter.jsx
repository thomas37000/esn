import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inscription from "../components/Form/Inscription";
import Connexion from "../components/Form/Connexion";
import CardById from "../components/Card/CardById";
import Entreprise from "../components/Entreprises";
import Formulaire from "../components/Form/Form";
import NavBar from "../components/Nav/Navbar";

const Routter = () => {
  return (
    <Router>
    <NavBar />

      <Routes>
        <Route exact path="/" element={<Entreprise />} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/s2n/:id" element={<CardById />} />
        <Route path="/users/login" element={<Connexion />} />
        <Route path="/users/sign-up" element={<Inscription />} />
      </Routes>
    </Router>
  );
};

export default Routter;
