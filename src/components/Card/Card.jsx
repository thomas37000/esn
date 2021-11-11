import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ image, name, created_at, rate }) {
  const frenchDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="card-container">
      <div className="card">
        <div className="divProfil">
          <img src={image} alt={name} className="cards-image" />
        </div>
        <div className="card-Nane">
          <h2>{name}</h2>
        </div>
        <h3>{frenchDate}</h3>
        <h4>{rate}</h4>
      </div>
    </div>
  );
}

Card.propTypes = {
  created_at: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
