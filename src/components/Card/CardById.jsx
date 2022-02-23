/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import ModalDelete from "../Modal/ModalDelete";
import ModalUpdate from "../Modal/ModalUpdate";
import "./Card.css";
import "../Form/Form.css";

export default function CardById() {
  const { id } = useParams();

  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------

  const [data, setData] = useState([]);
  const [technos, setTechnos] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ---------------------------------------------------------------------------
  // PUT STATES
  // ---------------------------------------------------------------------------
  const [newName, setNewNames] = useState("");
  const [newImages, setNewImages] = useState("");
  const [newInfos, setNewInfos] = useState("");
  const [newYear, setNewYears] = useState("");
  const [newCitie, setNewCities] = useState("");
  const [newTechno, setNewTechnos] = useState("");
  const [newRate, setNewRates] = useState("");
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  const { REACT_APP_SERVER } = process.env;

  const navigate = useNavigate();

  const { citie_name, images, infos, rate, s2n_name, techno_name, year } = data;

  // ---------------------------------------------------------------------------
  // UPDATE S2N
  // ---------------------------------------------------------------------------

  const updateS2n = (event) => {
    event.preventDefault();
    if (newName || newImages || newInfos || newCitie || newTechno || newYear) {
      axios
        .put(`${REACT_APP_SERVER}/s2n/${id}`, {
          s2n_name: newName,
          rate: Number(newRate),
          images: newImages,
          infos: newInfos,
          citie_name: newCitie,
          year: Number(newYear),
          techno_name: newTechno,
        })
        .then(() => alert("s2n Modifiée !"))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log("error: ", err));
    }
    navigate("/");
  };

  // ---------------------------------------------------------------------------
  // DELETE S2N
  // ---------------------------------------------------------------------------

  const deleteS2N = () => {
    axios
      .delete(`${REACT_APP_SERVER}/s2n/${id}`)
      .then(() => alert("s2n Deleted"))
      .catch((error) => {
        console.error(error.message);
      });
    navigate("/");
  };

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const loadS2nId = async () => {
      setTimeout(async () => {
        try {
          const res = await axios.get(`${REACT_APP_SERVER}/s2n/${id}`);
          setData(res.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 500);
    };

    loadS2nId();
  }, [id]);

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="s2n-container">
      {/*** Supprimer l'entreprise ***/}
      <div className="card-header-by-id">
        <ModalDelete deleteS2N={deleteS2N} />
      </div>

      <div className="cardImg">
        <img src={images} alt={s2n_name} className="cardImgById" />
      </div>
      <div className="card-by-id-body">
        <h2>{s2n_name}</h2>

        <h3 className="citie">city: {citie_name}</h3>

        <div className="hard-skills">
          <div className="">technos: {techno_name}</div>
          {/* // ne marche pas */}
          <div className="">
            {technos.map((techno, i) => (
              <div key={i}>{technos}</div>
            ))}
          </div>
        </div>

        <div className="year">created in: {year}</div>

        {/* <div className="rate">rate: {rate}</div> */}
        <div className="infos">{infos}</div>

        {/*** modifier les infos de l'entreprise ***/}
        <ModalUpdate
          setNewNames={setNewNames}
          setNewInfos={setNewInfos}
          setNewTechnos={setNewTechnos}
          setNewCities={setNewCities}
          setNewYears={setNewYears}
          setNewRates={setNewRates}
          setNewImages={setNewImages}
          updateS2n={updateS2n}
        />
      </div>
    </div>
  );
}

CardById.propTypes = {
  images: PropTypes.string,
  citie_name: PropTypes.string,
  s2n_name: PropTypes.string,
  techno_name: PropTypes.string,
  rate: PropTypes.number,
  year: PropTypes.number,
};
