import React from "react";
import { Card } from "react-bootstrap";

export default function CardTechno({ techno_name, techno_name_2, techno_name_3 }) {
  return (
    <div className="card-container">
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title>{techno_name}</Card.Title>
          <Card.Title>{techno_name_2}</Card.Title>
          <Card.Title>{techno_name_3}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
