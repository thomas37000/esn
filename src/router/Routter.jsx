import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardById from "../components/Card/CardById";
import Entreprise from "../components/Entreprises";
import Form from "../components/Form/Form";
// import JsonData from "../components/JsonData";
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
        {/* <Route path="/s2n-api" element={<JsonData />} /> */}
      </Routes>
    </Router>
  );
};

export default Routter;
