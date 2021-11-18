import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Card.css";

export default function CardById() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [technos, setTechnos] = useState([]);
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

  const { images, rate, s2n_name, techno_name, year } = datas;

  return (
    <>
      <div>
        <div>
          <span className="">{s2n_name}</span>
        </div>
        <div className="">
          <img src={images} alt="" />
        </div>
        <div className="">
          <div className="">
            <div className="">
              <h2>{s2n_name}</h2>
            </div>
          </div>
          {/* <h3>{citie_name}</h3> */}
          <div className=""></div>
          <div>{rate}</div>
          <div className="">
            <div className="">Year: {year}</div>
          </div>
          <div className="">
            <div className="">Technos: </div>
            <div className="">
              {technos.map((techno, i) => (
                <div key={i}>{techno}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
