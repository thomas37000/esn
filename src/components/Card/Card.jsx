import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ images, s2n_name, created_at, rate, citie_name }) {
  const frenchDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="card-container">
      <div className="card">
        <div className="divProfil">
          <img src={images} alt={s2n_name} className="cards-image" />
        </div>
        <div className="card-Nane">
          <h2>{s2n_name}</h2>
        </div>
        <h3>{frenchDate}</h3>
        <h4>{rate}</h4>
        <div className="cities">{citie_name}</div>
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
