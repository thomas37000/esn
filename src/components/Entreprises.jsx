/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";
import Skeleton from "./Card/Skeleton";
import "./Entreprises.css";

export default function Entreprise() {
  const [entreprises, setEntreprises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const deleteS2n = (idEntreprises) => {
    const deleteEntreprises = entreprises.filter(
      (entreprise) => entreprise.idEntreprises !== idEntreprises
    );
    setEntreprises(deleteEntreprises);
  };

  const { REACT_APP_API_URL } = process.env;

  useEffect(() => {
    const loadS2nApi = async () => {
      setTimeout(async () => {
        try {
          const res = await axios.get(`${REACT_APP_API_URL}`);
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

  // val === value
  const fetchS2n =
    entreprises &&
    entreprises
      .filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.s2n_name.toLowerCase().includes(search.toLowerCase())
          // waiting join get request others tables cities and technos
          // || val.citie_name.toLowerCase().includes(search.toLowerCase()) ||
          // val.techno_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((s2n, i) => {
        return (
          <Card
            key={i}
            {...s2n}
            handleClick={() => deleteS2n(s2n.idEntreprises)}
          />
        );
      });

  const searchSubmit = (event) => {
    event.preventDefault();
    if (search) {
      fetch(`${REACT_APP_API_URL}`)
        .then((res) => res.json())
        .then((data) => {
          setEntreprises(data);
        });

      setSearch("");
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="s2n-container">
        <form onSubmit={searchSubmit}>
          <input
            type="text"
            placeholder="search..."
            value={search}
            onChange={handleChange}
          />
        </form>

        {fetchS2n}
        {/* { card skeleton loading} */}
        {!entreprises && entreprises.map((i) => <Skeleton key={i} />)}
      </div>
    </>
  );
}
