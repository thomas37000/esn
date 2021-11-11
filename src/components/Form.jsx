import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [names, setNames] = useState("");
  const [rates, setRates] = useState("");
  const [images, setImages] = useState("");

  const { REACT_APP_SERVER_ADDRESS } = process.env;

  const addNewEsn = (event) => {
    event.preventDefault();
    if (names && rates && images) {
      axios
        .post("http://localhost:8080/", {
          names: names,
          rates: Number(rates),
          images: images,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log("error: ", err));
    }
  };

  return (
    <>
      <form onSubmit={addNewEsn}>
        <label>
          Esn name:
          <input
            type="text"
            names="names"
            placeholder="Beapp"
            onChange={(event) => setNames(event.target.value)}
          />
        </label>

        <label>
          rates:
          <input
            type="text"
            names="rates"
            placeholder="4,5"
            onChange={(event) => setRates(event.target.value)}
          />
        </label>

        <label for="avatar">logo / image</label>

        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
