/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Form } from "react-bootstrap/";
import Select from "react-select";
import Skeleton from "./Card/Skeleton";
import Card2 from "./Card/Card2";
import "./Entreprises.css";
import Buttons from "./Buttons/Buttons";

export default function Entreprise() {
  // ---------------------------------------------------------------------------
  // VARS
  // ---------------------------------------------------------------------------
  const esn = [
    {citie_name: "Nantes", techno_name: "C", idEntreprises: 1, s2n_name: "truc", images: "images", rate: 1, created_at: "now"},
    {citie_name: "paris", techno_name: "C", idEntreprises: 2, s2n_name: "truc", images: "images", rate: 1, created_at: "now"},
    {citie_name: "Versailles", techno_name: "Php", idEntreprises: 3, s2n_name: "truc", images: "images", rate: 1, created_at: "now"}
  ];

  const optionsTechno = [{
    value: 1,
    label: "C"
  },
  {
    value: 2,
    label: "Php"
  },
  {
    value: 3,
    label: "React"
  }];

  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [entreprises, setEntreprises] = useState(esn);
  const [all] = useState(esn);

  // const [default] = useState(esn);
  // console.log(entreprises[1].citie_name);
  const [loading] = useState(false);
  const [error] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCitie, setSelectedCitie] = useState(null);

  const { REACT_APP_API_URL } = process.env;

  // val === value
  const fetchS2n =
    entreprises &&
    entreprises
      .filter((val) => {
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

  const handleChange = (event) => setSearch(event.target.value);

  //Filter Function
  const allTechnos = ["All", ...new Set(all.map((project) => project.techno_name))];

  const options =
    all && all.map((entreprise) => {
      return {
        value: entreprise.idEntreprises,
        label: entreprise.citie_name,
      };
    });

    const onSelect = (val) => {
      if (val.typeOf === "String" && val === "All") {
        setEntreprises(all);
        return;
      }

      const filteredData = all.filter(
        (project) => {
          const label = val.typeOf === "String" ? val.toLowerCase() : val.label.toLowerCase();
          setSelectedOption(label);
          return project.techno_name.toLowerCase() === label;
        }
      );

    // const filteredDataCities = entreprises.filter(
    //   (citie) => citie.citie_name === button
    // );

    setEntreprises(filteredData);
    // setEntreprises(filteredDataCities);
    // setSelectedOption(button.value);
    // setSelectedCitie(button.value);
  };

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------
  useEffect(() => {
    // const loadS2nApi = async () => {
    //   setTimeout(async () => {
    //     try {
    //       const res = await axios.get(`${REACT_APP_API_URL}`);
    //       setEntreprises(res.data);
    //       setAll(res.data);
    //       console.log("s2n", res.data);
    //     } catch (error) {
    //       setError(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }, 1000);
    // };
    //
    // loadS2nApi();
  }, []);
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
      <div className="s2n-container">
        <div className="filter-by-technos">
          <Form.Label className="label">Filter by Technos</Form.Label>
          <Buttons button={allTechnos} filter={onSelect} />
        </div>

        <div className="filters">
        <div className="filter-by-citie">
            <Form.Label className="label">Filter by cities</Form.Label>
            <Select
              placeholder="Nantes"
              defaultValue={selectedCitie}
              onChange={(value) => onSelect(value)}
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

        {fetchS2n.map((s2n, i) => <Card2 key={i} {...s2n} />)}
        {/* { card skeleton loading} */}
        {!entreprises && entreprises.map((i) => <Skeleton key={i} />)}
      </div>
  );
}
