import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [names, setNames] = useState("");
  const [rates, setRates] = useState("");
  const [images, setImages] = useState("");
  const [infos, setInfos] = useState("");

  const { REACT_APP_SERVER_ADDRESS } = process.env;

  const addNewEsn = (event) => {
    event.preventDefault();
    if (names && rates && images && infos) {
      axios
        .post("http://localhost:8080/", {
          names: names,
          rates: Number(rates),
          images: images,
          infos: infos,
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
              names="names"
              placeholder="Beapp"
              onChange={(event) => setNames(event.target.value)}
            />
          </label>

          <label htmlFor="name">
            Esn Description:
            <textarea
              placeholder="it's a S2n with 300 employees..."
              onChange={(event) => setInfos(event.target.value)}
            />
          </label>

          <label htmlFor="rate">
            rates:
            <input
              type="text"
              names="rates"
              placeholder="4,5"
              onChange={(event) => setRates(event.target.value)}
            />
          </label>

          <label htmlFor="logo">logo / image</label>

          <input
            type="file"
            value={images}
            // make invisible "no File choses", native with the input file
            style={{ color: "transparent" }}
            onChange={(e) => setImages(e.target.files[0])}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
