import React from "react";
// import PropTypes from 'prop-types';
import "./Card.css";

export default function Card({ image, name }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-Nane">{name}</div>
      </div>
    </div>
  );
}

// Card.propTypes = {

// };
