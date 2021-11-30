import React, { useState, useEffect } from "react";
import "./Entreprises.css";

export default function SearchBar(fetchS2n) {
  const [entreprises, setEntreprises] = useState([]);
  const [search, setSearch] = useState("");
  // const [searchS2n, setSearchS2n] = useState("");

  // https://www.youtube.com/watch?v=sZ0bZGfg_m4&ab_channel=FlorinPop

  // voir le input search de WOMEN AT NANTES

  // taper input search in a API

  const searchSubmit = (event) => {
    event.preventDefault();
    if (search) {
      fetch("http://localhost:8080/")
        .then((res) => res.json())
        .then((data) => {
          setEntreprises(data);
        });

      setSearch("");
    }
  };

  // const s2nList = document.getElementById('s2nList');

  const searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredEntreprises = entreprises.filter((s2n) => {
      return (
        val.s2n_name.toLowerCase().includes(search.toLowerCase()) ||
        val.citie_name.toLowerCase().includes(search.toLowerCase()) ||
        val.techno_name.toLowerCase().includes(search.toLowerCase())
      );
    });
    fetchS2n(filteredEntreprises);
  });

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={searchSubmit}>
          <input
            type="text"
            placeholder="search..."
            value={search}
            onChange={handleChange}
            id="searchBar"
          />
        </form>
      </div>
    </>
  );
}
