import React from "react";
import PropTypes from 'prop-types';
import "./Card.css";

export default function Card({ image, name, created_at, rate }) {

  const frenchDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-Nane">{name}</div>
        <h3>{frenchDate}</h3>
        <h4>{rate}</h4>
      </div>
    </div>
  );
}

Card.propTypes = {
  created_at: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
