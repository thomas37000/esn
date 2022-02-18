/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Form } from "react-bootstrap/";
// import Select from "react-select";
// import Skeleton from "./Card/Skeleton";
import Card2 from "./Card/Card2";

export default function Entreprise() {
  const esn = [
    {citie_name: "Nantes", techno_name: "C", idEntreprises: 1, s2n_name: "truc", images: "images", rate: 1},
    {citie_name: "paris", techno_name: "C", idEntreprises: 2, s2n_name: "truc", images: "images", rate: 1},
    {citie_name: "Versailles", techno_name: "Php", idEntreprises: 3, s2n_name: "truc", images: "images", rate: 1}
  ];
  // je laisse citie_name mais le singulier de cities est "city"

  const [entreprises, setEntreprises] = useState(esn);
  // const [defaultEsn, setDefaultEsn] = useState([]);
  // console.log(entreprises[1].citie_name);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  // const [selectedOption, setSelectedOption] = useState(null);

  const deleteS2n = (idEntreprises) => {
    const deleteEntreprises = entreprises.filter(
      (entreprise) => entreprise.idEntreprises !== idEntreprises
    );
    setEntreprises(deleteEntreprises);
  };

  const { REACT_APP_API_URL } = process.env;

  // val === value
  const fetchS2n =
    entreprises &&
    entreprises
      .filter((val) => {
        // if (search === "") { Meme condition que plus bas dans le elseif du coup plutot utiliser un double pipe
        //   return val;
        // } else if (
        //   val.s2n_name.toLowerCase().includes(search.toLowerCase())
        //   // waiting join get request others tables cities and technos
        //   // || val.citie_name.toLowerCase().includes(search.toLowerCase()) ||
        //   // val.techno_name.toLowerCase().includes(search.toLowerCase())
        // ) {
        //   return val;
        // }

        // mais en meme temps -> dans un filter le if est inutile. relire la def de "filter" es6
        return val.s2n_name.toLowerCase().includes(search.toLowerCase());

        // return false; // return false ? plutot retourner un object vide .
        // on est dans un filter. ca retourne tourjours un array
        // ou alors ne pas utiliser un filter. il y a confusion entre map et filter ?

        // toDo -> redefinir le besoin. ce filtre ne fait pas le job ou bien il y a confusion

      });
      // je deplace le map dans le render pour voir ce qu'il se passe

  const searchSubmit = (event) => {
    event.preventDefault();
    if (search) {
      fetch(`${REACT_APP_API_URL}`)
        .then((res) => res.json())
        .then((data) => setEntreprises(data));

        // .then((data) => {
        //   setEntreprises(data);
        // }); peu etre abregé en :

        // .then((data) => setEntreprises(data));

      setSearch("");
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  // ---------------------------------------------------------------------------
  // LIFE CYCLE ----------------------------------------------------------------
  // ---------------------------------------------------------------------------
  useEffect(() => { // mount
    // plus tard avec la requete axios
  }, []); // mount
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error...</div>; pourquoi mettre un if hors du render ?
  // plutot mettre une condition dans le render avec un state qui fait office de
  // switch entre deux etats (ou plusieurs)

  return (
      <div className="s2n-container">
        <div className="filters">
          <div className="filter-by-technos">
            <Form.Label className="label">Filter by Technos</Form.Label>
          </div>

          <div className="input-search">
            <form onSubmit={searchSubmit}>
              <Form.Label className="label">Find your s2n</Form.Label>
              <input
                type="text"
                placeholder="search..."
                value={search}
                onChange={handleChange}
                className="search"
              />
            </form>
          </div>
        </div>

        {
          fetchS2n.map((s2n, i) => {
            return (
              <Card2
                key={i}
                {...s2n}
                handleClick={() => deleteS2n(s2n.idEntreprises)}
              />
            );
          })
          // mapper cet array comme ça ici dans le render c'est sans doute source d'erreur.
        }
        {/* { card skeleton loading} */ }
        {/* !entreprises && entreprises.map((i) => <Skeleton key={i} />) pourquoi ? que fait ce component ? */ }
      </div>
  );
}

// il y a un Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
// qui traine. checker l'imbrication des components. quelque part dans la hierachie
