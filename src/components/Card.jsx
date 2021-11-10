import React from "react";
// import PropTypes from 'prop-types';
import "./Card.css";

export default function Card({ image, name, created_at, rate }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-Nane">{name}</div>
        <h3>{created_at}</h3>
        <h4>{rate}</h4>
      </div>
    </div>
  );
}

// Card.propTypes = {

// };
