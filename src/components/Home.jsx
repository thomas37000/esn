import React from "react";
import Entreprise from "./Entreprises";
import Form from "./Form";
// import PropTypes from 'prop-types';
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <h1>S2N</h1>
      <Form />
      <div className="container">
        <Entreprise />
      </div>
    </div>
  );
};

// Home.propTypes = {

// };

export default Home;
