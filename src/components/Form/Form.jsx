/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FloatingLabel, Form } from "react-bootstrap/";
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
  const [S2nList, setS2nList] = useState([]);

  const { REACT_APP_SERVER } = process.env;

  const addNewEsn = (event) => {
    event.preventDefault();
    // images ne marche et empêche le submit
    if (names || rates || infos || cities || dates) {
      axios
        .post(`${REACT_APP_SERVER}`, {
          s2n_name: names,
          rate: Number(rates),
          images: images,
          infos: infos,
          citie_name: cities,
          year: Number(dates),
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log("error: ", err));
    }
  };

  useEffect(() => {
    const getTechnos = async () => {
      setTimeout(async () => {
        try {
          const res = axios.get(`${REACT_APP_SERVER}/technos`);
          setTechnos(res.data);
          console.log("Technos", res.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 500);
    };

    getTechnos();
  }, []);

  // function getTechnos() {
  //   const res = axios.get(`${REACT_APP_SERVER}/formulaire`);
  //   setTechnos(res.data);
  //   console.log("technos", res.data);
  // }

  // useEffect(() => {
  //   getTechnos();
  // });

  const handleSelectModify = (e) => {
    const id = e.target.value;
    GetS2nById({ setS2nId, id, setInfos });
  };

  /* update s2n*/
  const modifyS2n = () => {
    const id = s2nId.id;
    PutS2n(infos, id);
  };

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

          <div>
            test :
            {technos &&
              technos.map((techno) => {
                return <div index={techno.index}>{techno}</div>;
              })}
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Techno(s):</Form.Label>
            <Form.Select aria-label="Default select example">
              {technos &&
                technos.map((techno, i) => {
                  return (
                    <>
                      <option>choose a techno</option>
                      <option value={techno}>{techno}</option>
                    </>
                  );
                })}
            </Form.Select>
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
