import React, { useState, useEffect } from "react";
import axios from "axios";
import CardTechno from "./Card/CardTechno";

const Technos = () => {
  const [technos, setTechnos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { REACT_APP_SERVER } = process.env;

  useEffect(() => {
    const getTechnos = async () => {
      setTimeout(async () => {
        try {
          const res = axios.get(`${REACT_APP_SERVER}/test/technos`);
          setTechnos(res.data);
          console.log("Technos", res.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 500);
    };

    getTechnos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="form-container">
        All technos :
        {technos &&
          technos.map((techno, i) => {
            return <CardTechno key={i} {...techno} />;
          })}
      </div>
    </>
  );
};

export default Technos;
