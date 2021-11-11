import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Card from "./Card/Card";
import Skeleton from "./Card/Skeleton";

export default function Entreprise() {
  const [entreprises, setEntreprises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteS2n = (idEntreprises) => {
    const filteredArgonaute = entreprises.filter(
      (entreprise) => entreprise.identreprise !== idEntreprises
    );
    setEntreprises(filteredArgonaute);
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
      }, 2000);
    };

    loadS2nApi();
  }, []);

  const fetchS2n =
    entreprises &&
    entreprises.map((s2n, i) => {
      return <Card key={i} {...s2n} />;
    });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <Form />
      <div className="s2n-container">
        {fetchS2n}
        {/* { card skeleton loading} */}
        {!entreprises && entreprises.map((i) => <Skeleton key={i} />)}
      </div>
    </>
  );
}
