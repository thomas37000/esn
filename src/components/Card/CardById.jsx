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
  const [newNames, setNewNames] = useState("");
  const [datas, setDatas] = useState([]);
  const [technos, setTechnos] = useState([]);
  // const [s2nId, setS2nId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newImages, setNewImages] = useState("");
  const [newInfos, setNewInfos] = useState("");
  const [newCities, setNewCities] = useState("");
  const [newDates, setNewDates] = useState("");
  const [newRates, setNewRates] = useState("");

  const { REACT_APP_SERVER } = process.env;

  useEffect(() => {
    const loadS2nId = async () => {
      setTimeout(async () => {
        try {
          const res = await axios.get(`${REACT_APP_SERVER}/s2n/${id}`);
          setDatas(res.data);
          console.log("s2n by id", res.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 500);
    };

    loadS2nId();
  }, [id]);

  const { citie_name, images, infos, rate, s2n_name, techno_name, year } =
    datas;

  /* update s2n*/
  const updateS2n = (event) => {
    event.preventDefault();
    if (
      newNames ||
      newImages ||
      newInfos ||
      newCities ||
      newDates ||
      newRates
    ) {
      axios
        .put(`${REACT_APP_SERVER}/s2n/${id}`, {
          s2n_name: newNames,
          images: newImages,
          infos: newInfos,
          citie_name: newCities,
          year: Number(newDates),
          rate: Number(newRates),
        })
        .then(() => alert("s2n Updated"))
        .catch((err) => console.log("error: ", err));
    }
  };

  /* delete s2n */
  const navigate = useNavigate();

  const deleteS2N = () => {
    axios
      .delete(`${REACT_APP_SERVER}/s2n/${id}`)
      .then(() => alert("s2n Deleted"))
      .catch((error) => {
        console.error(error.message);
      });
    navigate("/");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
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

          <div className="rate">rate: {rate}</div>
          <div className="infos">{infos}</div>

          {/*** modifier les infos de l'entreprise ***/}
          <ModalUpdate
            updateS2n={updateS2n}
            setNewNames={setNewNames}
            setNewImages={setNewImages}
            setNewInfos={setNewInfos}
            setNewCities={setNewCities}
            setNewDates={setNewDates}
            setNewRates={setNewRates}
          />
        </div>
      </div>
    </>
  );
}

CardById.propTypes = {
  images: PropTypes.string,
  citie_name: PropTypes.string.isRequired,
  s2n_name: PropTypes.string.isRequired,
  techno_name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};
