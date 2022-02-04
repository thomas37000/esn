import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({
  images,
  s2n_name,
  created_at,
  rate,
  citie_name,
  techno_name,
  idEntreprises,
  handleClick,
  technos
}) {

  const frenchDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="card-container">
      <Link to={`/s2n/${idEntreprises}`} className="s2n-link">
        <div className="card">
          <div className="divProfil">
            <img src={images} alt={s2n_name} className="cards-image" />
          </div>
          <div className="card-Name">
            <h2 className="S2n-name">{s2n_name}</h2>
          </div>
          <div className="cities">{citie_name}</div>
          <div className="technos">{techno_name}</div>
        </div>
      </Link>
      {/* <button className="btn" onClick={handleClick}>
        supprimer
      </button> */}
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
