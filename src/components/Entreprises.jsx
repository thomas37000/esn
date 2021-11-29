import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";
import Skeleton from "./Card/Skeleton";
import "./Entreprises.css";

export default function Entreprise() {
  const [entreprises, setEntreprises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteS2n = (idEntreprises) => {
    const deleteEntreprises = entreprises.filter(
      (entreprise) => entreprise.idEntreprises !== idEntreprises
    );
    setEntreprises(deleteEntreprises);
  };

  useEffect(() => {
    const loadS2nApi = async () => {
      setTimeout(async () => {
        try {
          const res = await axios.get("http://localhost:8080/");
          setEntreprises(res.data);
          console.log("s2n", res.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 1000);
    };

    loadS2nApi();
  }, []);

  const fetchS2n =
    entreprises &&
    entreprises.map((s2n, i) => {
      return (
        <Card
          key={i}
          {...s2n}
          handleClick={() => deleteS2n(s2n.idEntreprises)}
        />
      );
    });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="s2n-container">
        {fetchS2n}
        {/* { card skeleton loading} */}
        {!entreprises && entreprises.map((i) => <Skeleton key={i} />)}
      </div>
    </>
  );
}
