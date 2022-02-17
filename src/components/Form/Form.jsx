/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap/";
import PutS2n from "./PutS2n";
import GetS2nById from "./GetS2nById";
import "./Form.css";

export default function Formulaire() {
  const [names, setNames] = useState("");
  const [infos, setInfos] = useState("");
  const [rates, setRates] = useState("");
  const [images, setImages] = useState("");
  const [cities, setCities] = useState("");
  const [dates, setDates] = useState("");
  const [technos, setTechnos] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // s2nId et S2nList states pour le Update
  const [s2nId, setS2nId] = useState([]);

  const { REACT_APP_SERVER } = process.env;

  const navigate = useNavigate();

  const addNewEsn = (event) => {
    event.preventDefault();
    if ((names || rates || infos || cities || dates, cities, technos)) {
      axios
        .post(`${REACT_APP_SERVER}`, {
          s2n_name: names,
          rate: Number(rates),
          images: images,
          infos: infos,
          citie_name: cities,
          year: Number(dates),
          techno_name: technos,
        })
        .then(() => alert("s2n Created"))
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => console.log("error: ", err));
    }
    navigate("/");
  };

  const handleSelectModify = (e) => {
    const id = e.target.value;
    GetS2nById({ setS2nId, id, setInfos });
  };

  /* update s2n*/
  const modifyS2n = () => {
    const id = s2nId.id;
    PutS2n(infos, id);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="form-container">
        <Form onSubmit={addNewEsn}>
          <Form.Group className="mb-3">
            <Form.Label>Esn name:</Form.Label>
            <Form.Control
              type="text"
              name="s2n_name"
              placeholder="Beapp"
              onChange={(event) => setNames(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Esn Description:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="it's a S2n with 300 employees..."
              onChange={(event) => setInfos(event.target.value)}
              style={{ height: "100px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Techno(s):</Form.Label>
            <Form.Control
              type="text"
              name="technos"
              placeholder="Javascript"
              onChange={(event) => setTechnos(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>citie:</Form.Label>
            <Form.Control
              type="text"
              name="cities"
              placeholder="Nantes"
              onChange={(event) => setCities(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>created in:</Form.Label>
            <Form.Control
              type="text"
              name="date"
              placeholder="2002"
              onChange={(event) => setDates(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>logo / image:</Form.Label>
            <Form.Control
              type="text"
              name="images"
              placeholder="url of the image"
              onChange={(event) => setImages(event.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
