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
      </div>
    </>
  );
}
