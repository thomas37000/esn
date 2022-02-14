import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
// import "./Card.css";

export default function Card2({
  images,
  s2n_name,
  citie_name,
  techno_name,
  idEntreprises,
}) {
  return (
    <div className="card-container">
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={images} alt={s2n_name} />
        <Card.Body>
          <Card.Title>{s2n_name}</Card.Title>
          <Card.Text>{citie_name}</Card.Text>
          <Card.Text>{techno_name}</Card.Text>
          <Link to={`/s2n/${idEntreprises}`} className="s2n-link">
            <Button variant="primary">infos</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

Card2.propTypes = {
  images: PropTypes.string.isRequired,
  citie_name: PropTypes.string.isRequired,
  s2n_name: PropTypes.string.isRequired,
  techno_name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
