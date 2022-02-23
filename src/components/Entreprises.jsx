import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap/";
import Select from "react-select";
import Card2 from "./Card/Card2";
import Skeleton from "./Card/Skeleton";
import Buttons from "./Buttons/Buttons";
import "./Entreprises.css";

export default function Entreprise() {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [entreprises, setEntreprises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCitie, setSelectedCitie] = useState(null);
  const [all, setAll] = useState([]);

  // ---------------------------------------------------------------------------
  //Filter Function
  // ---------------------------------------------------------------------------

  const fetchS2n =
    entreprises &&
    entreprises.filter((val) => {
      if (search === "") return val;
      return val.s2n_name.toLowerCase().includes(search.toLowerCase());
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

  const allTechnos = [
    "All",
    ...new Set(all.map((project) => project.techno_name)),
  ];

  const options =
    all &&
    all.map((entreprise) => {
      return {
        value: entreprise.idEntreprises,
        label: entreprise.citie_name,
      };
    });

  const optionsTechno =
    all &&
    all.map((entreprise) => {
      return {
        value: entreprise.idEntreprises,
        label: entreprise.techno_name,
      };
    });

  const onSelect = (val) => {
    if (typeof val === "string" && val === "All") {
      setEntreprises(all);
      return;
    }

    const filteredData = all.filter((project) => {
      const label =
        typeof val === "string" ? val.toLowerCase() : val.label.toLowerCase();
      setSelectedOption(label);
      return project.techno_name.toLowerCase() === label;
    });
    
    setEntreprises(filteredData);
  };
  
  const onSelectCities = (val) => {
    if (typeof val === "string" && val === "All") {
      setEntreprises(all);
      return;
    }

    const filteredCities = all.filter((project) => {
      const label =
        val.typeOf === "String"
          ? val.toLowerCase()
          : val.label && val.label.toLowerCase();
      setSelectedCitie(label);
      return project.citie_name.toLowerCase() === label;
    });

    setEntreprises(filteredCities);
  };

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------

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

  // ---------------------------------------------------------------------------
  //
  // ---------------------------------------------------------------------------

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="s2n-container">
      <Buttons val={allTechnos} filter={onSelect} />

      <div className="filters">
        <div className="filter-by-citie">
          <Form.Label className="label">Filter by cities</Form.Label>
          <Select
            placeholder="Nantes"
            defaultValue={selectedCitie}
            onChange={(value) => onSelectCities(value)}
            options={options}
            value={selectedCitie}
          />
        </div>

        <div className="filter-by-technos">
          <Form.Label className="label">Filter by Technos</Form.Label>
          <Select
            placeholder="Php"
            defaultValue={selectedOption}
            onChange={(value) => onSelect(value)}
            options={optionsTechno}
            value={selectedOption}
          />
        </div>

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

      {fetchS2n.map((s2n, i) => (
        <Card2 key={i} {...s2n} />
      ))}
      {/* { card skeleton loading} */}
      {!entreprises && entreprises.map((i) => <Skeleton key={i} />)}
    </div>
  );
}
