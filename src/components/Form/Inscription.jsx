import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

export default function Inscription() {
  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");

  const { REACT_APP_SERVER_ADDRESS } = process.env;

  const connexion = (event) => {
    event.preventDefault();
    if (emails || passwords) {
      axios
        .post("http://localhost:8080/users/sign-in", {
          email: emails,
          password: passwords,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log("error: ", err));
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={connexion}>
          <label htmlFor="name">
            email:
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              onChange={(event) => setEmails(event.target.value)}
            />
          </label>

          <label htmlFor="name">
            password:
            <input
              type="password"
              name="password"
              placeholder="******"
              onChange={(event) => setPasswords(event.target.value)}
            />
          </label>

          <input type="submit" value="Submit" className="submit" />
        </form>
        <div>
          Bonjour ce que je peux apporter à Leocare c'est ma passion du code, en
          effet ayant fait une formation de 5 mois à la Wild Code School de
          Nantes comme Développeur full stack Js React puis un stage de 4 mois à
          l'agence Nous cela m'a permis de découvrir ce métier passionnant et
          enrichissant sur le plant personnel. J' y ai appris l' esprit d'
          équipe, l'autonomie à être polyvalent en front comme en back et la
          passion de coder en plus de la formation pour des projets personnels
          et la méthode agile SCRUM pour qui est indispensable dans ce métier de
          l'IT pour tous les jours savoir où l'on en est par rapport au projet,
          ses collègues et les clients régulièrement. Je cherche donc une
          alternance pour le poste de Développeur Web full stack Javascript /
          Typescript / React / React Native / Flutter / Docker qui aura lieu en
          remote Nantes ou présentiel à Paris avec la Wild Code School le 7 Mars
          2022 et je suis prêt à déménager sur Cesson-Savigné ou Rennes. Ci
          joint je vous laisse toutes les informations concernant l’ alternance
          https://drive.google.com/drive/u/1/folders/1WFfLU5PcztyIGSCYLzqZ9LRWGK191ZLd
          Cordialement Thomas Chalanson
        </div>
      </div>
    </>
  );
}
