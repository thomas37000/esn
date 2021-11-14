import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

export default function Form() {
  const [s2n_name, setNames] = useState("");
  const [rate, setrate] = useState("");
  const [images, setImages] = useState("");
  const [infos, setInfos] = useState("");
  const [citie_name, setCities] = useState("");
  const [created_at, setDates] = useState("");

  const { REACT_APP_SERVER_ADDRESS } = process.env;

  const addNewEsn = (event) => {
    event.preventDefault();
    // images ne marche et empêche le submit
    if (s2n_name && rate && infos && citie_name && created_at) {
      axios
        .post("http://localhost:8080/", {
          s2n_name: s2n_name,
          rate: Number(rate),
          images: images,
          infos: infos,
          citie_name: citie_name,
          created_at: created_at,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log("error: ", err));
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={addNewEsn}>
          <label htmlFor="name">
            Esn name:
            <input
              type="text"
              name="s2n_name"
              placeholder="Beapp"
              onChange={(event) => setNames(event.target.value)}
            />
          </label>

          <label htmlFor="name">
            Esn Description:
            <textarea
              placeholder="it's a S2n with 300 employees..."
              onChange={(event) => setInfos(event.target.value)}
              className="texte-infos"
            />
          </label>

          <label htmlFor="rate">
            rate:
            <input
              type="text"
              name="rate"
              placeholder="4,5"
              onChange={(event) => setrate(event.target.value)}
            />
          </label>

          <label htmlFor="rate">
            citie:
            <input
              type="text"
              name="cities"
              placeholder="Nantes"
              onChange={(event) => setCities(event.target.value)}
            />
          </label>

          <label htmlFor="id-date">created at: </label>
          <input
            type="date"
            id="id-date"
            name="created_at"
            value="2020-07-22"
            min="1980-01-01"
            max="2030-12-31"
            onChange={(event) => setDates(event.target.value)}
          />

          <label htmlFor="logo">logo / image</label>
          <input
            type="file"
            value={images}
            // make invisible "no File choses", native with the input file
            style={{ color: "transparent" }}
            onChange={(e) => setImages(e.target.files[0])}
            className="uplaod-img"
            accept="image/*"
          />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </>
  );
}
