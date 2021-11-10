import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Entreprise() {
  const [entreprises, setEntreprises] = useState([]);

  const deleteS2n = (idEntreprises) => {
    const filteredArgonaute = entreprises.filter(
      (entreprise) => entreprise.identreprise !== idEntreprises
    );
    setEntreprises(filteredArgonaute);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/argonautes")
      .then((res) => res.data)
      .then((data) => {
        setEntreprises(data);
        console.log("entreprises", data);
      })
      .catch((error) => {
        let message;
        if (error) {
          message = "vous n' avez pas accès au bateau";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, []);

  return (
    <>
      <div>
        {entreprises.map((entreprise, i) => (
          <Card
            {...entreprise}
            key={i}
            handleClick={() => deleteS2n(entreprise.idEntreprises)}
          />
        ))}
      </div>
    </>
  );
}
