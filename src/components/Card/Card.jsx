import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ images, s2n_name, created_at, rate, citie_name, techno_name }) {
  const frenchDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="card-container">
      <div className="card">
        <div className="divProfil">
          <img src={images} alt={s2n_name} className="cards-image" />
        </div>
        <div className="card-Name">
          <h2>{s2n_name}</h2>
        </div>
        <h3>{frenchDate}</h3>
        <h4>{rate}</h4>
        <div className="cities">{citie_name}</div>
        <div className="technos">{techno_name}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  created_at: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  citie_name: PropTypes.string.isRequired,
  s2n_name: PropTypes.string.isRequired,
  techno_name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
