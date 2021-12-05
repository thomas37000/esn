import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./Card.css";
import PutS2n from "../Form/PutS2n";

export default function CardById() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [technos, setTechnos] = useState([]);
  const [s2nId, setS2nId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadS2nId = async () => {
      setTimeout(async () => {
        try {
          const res = await axios.get(`http://localhost:8080/s2n/${id}`);
          setDatas(res.data);
          console.log("s2n by id", res.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 1000);
    };

    loadS2nId();
  }, [id]);

  const { citie_name, images, infos, rate, s2n_name, techno_name, year } =
    datas;

  /* update s2n*/
  const modifyS2n = () => {
    const id = s2nId.id;
    PutS2n(infos, id);
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

  return (
    <>
      <div className="card-by-id">
        <div className="">
          <img src={images} alt="" />
        </div>
        <div className="">
          <div className="">
            <div className="">
              <h2>{s2n_name}</h2>
            </div>
          </div>
          <h3>ville: {citie_name}</h3>
          <div className=""></div>
          <div>{rate}</div>
          <div className="">
            <div className="">Year: {year}</div>
          </div>
          <div className="">
            <div className="">Technos: </div>
            {/* // ne marche pas */}

            {/* <div className="">
              {technos.map((techno, i) => (
                <div key={i}>{technos}</div>
              ))}
            </div> */}
            <div>{techno_name}</div>
          </div>
          <div className="infos">{infos}</div>
          <button className="btn" onClick={modifyS2n}>
            modifier
          </button>
          {/* <div id="modal" class="modal">
            <div class="modal-inner content center">
              <Form />
              <button class="btn-close" id="close-modal" onclick="close()">
                Close
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

CardById.propTypes = {
  images: PropTypes.string.isRequired,
  citie_name: PropTypes.string.isRequired,
  s2n_name: PropTypes.string.isRequired,
  techno_name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};
