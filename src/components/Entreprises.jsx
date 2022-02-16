/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap/";
import Select from "react-select";
import Skeleton from "./Card/Skeleton";
import Card2 from "./Card/Card2";
import "./Entreprises.css";
import Buttons from "./Buttons/Buttons";

export default function Entreprise() {
  const [entreprises, setEntreprises] = useState([]);
  // console.log(entreprises[1].citie_name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCitie, setSelectedCitie] = useState(null);
  const [all, setAll] = useState([]);

  const { REACT_APP_API_URL } = process.env;

  useEffect(() => {
    const loadS2nApi = async () => {
      setTimeout(async () => {
        try {
          const res = await axios.get(`${REACT_APP_API_URL}`);
          setEntreprises(res.data);
          setAll(res.data);
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
        return <Card2 key={i} {...s2n} />;
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

  //Filter Function

  const options =
    entreprises &&
    entreprises.map((entreprise) => {
      return {
        value: entreprise.idEntreprises,
        label: entreprise.citie_name,
      };
    });
  console.log("[cities]", options);

  const optionsTechno =
    entreprises &&
    entreprises.map((entreprise) => {
      return {
        value: entreprise.idEntreprises,
        label: entreprise.techno_name,
      };
    });

  console.log("[tek]", optionsTechno);

  const allTechnos = [
    "All",
    ...new Set(entreprises.map((project) => project.techno_name)),
  ];

  console.log("technos", allTechnos);

  const filter = (button) => {
    if (button === "All") {
      setEntreprises(all);
      setSelectedOption("All");
      setSelectedCitie("All");

      return;
    }
    console.log("TEST", button, optionsTechno);

    const filteredData = entreprises.filter(
      (project) => project.techno_name === button
    );

    const filteredDataCities = entreprises.filter(
      (citie) => citie.citie_name === button
    );

    setEntreprises(filteredData);
    // setEntreprises(filteredDataCities);
    // setSelectedOption(button.value);
    // setSelectedCitie(button.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="s2n-container">
        <div className="filter-by-technos">
          <Form.Label className="label">Filter by Technos</Form.Label>
          <Buttons button={allTechnos} filter={filter} />
        </div>
        
        <div className="filters">
          {/* <div className="filter-by-citie">
            <Form.Label className="label">Filter by cities</Form.Label>
            <Select
              placeholder="Nantes"
              defaultValue={selectedCitie}
              onChange={(value) => filter(value)}
              options={options}
              value={selectedCitie}
            />
          </div>

          <div className="filter-by-technos">
            <Form.Label className="label">Filter by Technos</Form.Label>
            <Select
              placeholder="Php"
              defaultValue={selectedOption}
              onChange={(value) => filter(value)}
              // onChange={(value) => filter("Php")}
              options={optionsTechno}
              value={selectedOption}
            />
          </div> */}

          <div className="input-search">
            <form onSubmit={searchSubmit}>
              <Form.Label className="label">Find your s2n</Form.Label>
              <input
                type="text"
                placeholder="search..."
                value={search}
                onChange={handleChange}
                className="search"
              />
            </form>
          </div>
        </div>

        {fetchS2n}
        {/* { card skeleton loading} */}
        {!entreprises && entreprises.map((i) => <Skeleton key={i} />)}
      </div>
    </>
  );
}
