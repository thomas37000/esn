import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TechnoById = () => {
  const [technos, setTechnos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const { REACT_APP_SERVER } = process.env;

  useEffect(() => {
    const technoById = async () => {
      setTimeout(async () => {
        try {
          const res = await axios.get(
            `${REACT_APP_SERVER}/s2n/technos/${id}`
          );
          setTechnos(res.data);
          console.log("techno by id", res.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 500);
    };

    technoById();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const { techno_name } = technos;

  return (
    <>
      <div className="form-container">{techno_name}</div>
    </>
  );
};

export default TechnoById;
