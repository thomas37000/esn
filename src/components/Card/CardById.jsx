/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import axios from "axios";
import "./Card.css";
import "../Form/Form.css";

export default function CardById() {
  const { id } = useParams();
  const [names, setNames] = useState("");
  const [datas, setDatas] = useState([]);
  const [technos, setTechnos] = useState([]);
  console.log(technos);
  // const [s2nId, setS2nId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newImages, setNewImages] = useState("");
  const [newInfos, setNewInfos] = useState("");

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
    if (names || newImages || newInfos) {
      axios
        .put(`${REACT_APP_SERVER}/s2n/${id}`, {
          s2n_name: names,
          images: newImages,
          infos: newInfos,
        })
        .then((res) => {
          console.log(res);
        })
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

  const openModal = document.getElementById("open-modal");
  if (openModal) {
    openModal.addEventListener("click", open);
  }

  function open() {
    document.getElementById("modal").style.display = "block";
  }

  const closeModal = document.getElementById("close-modal");
  if (closeModal) {
    closeModal.addEventListener("click", close);
  }

  function close() {
    document.getElementById("modal").style.display = "none";
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="s2n-container">
        <div className="card-header-by-id">
          <button className="delete" onClick={deleteS2N}>
            Supprimer
          </button>
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

          {/******************************* modifier les infos de l'entreprise ***************************************/}
          <button className="update" id="open-modal" onClick="open()">
            Modifier
          </button>
          <div id="modal" className="">
            <div className="modal-inner content center">
              <form onSubmit={updateS2n}>
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
                  Change your Description:
                  <textarea
                    placeholder="change your infos"
                    onChange={(event) => setNewInfos(event.target.value)}
                    className="texte-infos"
                  />
                </label>

                <label htmlFor="logo">logo / image avec URL</label>
                <input
                  type="text"
                  name="images"
                  placeholder="url of the image"
                  onChange={(event) => setNewImages(event.target.value)}
                />

                <div className="update-btn">
                  <button type="submit" className="update">
                    Valider
                  </button>
                  <button className="close" id="close-modal" onClick="close()">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
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
